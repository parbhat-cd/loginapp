# Version: 0.0.1
FROM ubuntu:16.04
MAINTAINER Chandra Kholia "chandra@chalkdigital.com"

#Setup 
RUN apt-get -yqq update
RUN apt-get install -yqq curl
RUN apt-get install -yqq supervisor
RUN apt-get install -yqq npm
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -yqq nodejs

#Setup Supervisor
COPY configs/etc/supervisor/conf.d/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

#Add custom entry for geoad
COPY configs/etc/supervisor/conf.d/geoad.conf /etc/supervisor/conf.d/geoad.conf

# Set the working directory to /app
WORKDIR /var/www/app

# Install app dependencies
COPY package.json /var/www/app
RUN npm install

#Add app
COPY . /var/www/app

# Set the working directory to /app
WORKDIR /var/www/app
RUN npm install -g @angular/cli
RUN npm install nodemon --save
RUN ng build

#Run setup for container
COPY setup.sh /setup.sh
RUN chmod +x /setup.sh

EXPOSE 3000

#Supervisor is run in nodaemon mode
CMD /setup.sh && /usr/bin/supervisord
