1. dynamic font size for agent details if it goes beyong the limit.. implemented in dentsu.
2. 300_250 : design issue in :done
3. one missing pug for geoad 300x250 template .
4. template ui issues.

upload headshot at once.
choose templates by design.
update review page design.



#building guide
* node --max_old_space_size=2560 ./node_modules/.bin/ng build -prod -aot --environment=qa
* ./build.sh -e="production" -aot="true" -target="build,stop,start"

# node --max_old_space_size=4072 ./node_modules/.bin/ng build --configuration=qa --watch
# ./run.sh -e=staging
<hr/>

# Installation Instructions

### Minimum Requirements
```
- Node 6.9.0 or higher
- NPM 3 or higher
```

### Install the Latest Version of @angular/cli

```
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

### Install Node Packages

```
npm install
```

# GeoAd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
