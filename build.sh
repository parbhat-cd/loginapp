#!/bin/bash

clear

echo "Build Process starting..."
for i in "$@"
do
echo ${i}
case $i in
    -aot=*|--prefix=*)
    AOT="${i#*=}"
    ;;
    -e=*|--prefix=*)
    ENV="${i#*=}"
    ;;
    -version=*|--prefix=*)
    VERSIONS="${i#*=}"
    ;;
   -target=*|--prefix=*)
    TARGET="${i#*=}"
    ;;
   
    esac
done
 
value=$(<s3cred)
arrIN=(${value//:/ })

replaceAppVersion(){
    if [ -z "$VERSIONS" ];
    then
    echo "Version is not present"
    else
    echo "Version is present"
    VERSIONS="PORTAL_BUILD_VERSION=\"${VERSIONS}\""; 
    RELEASE_VERSION=`cat 'src/app/services/CommonServices/app-constant.ts' | grep PORTAL_BUILD_VERSION | cut -d'=' -f2`
    RELEASE_VERSION=`echo $RELEASE_VERSION | cut -d'"' -f2`
    RELEASE_VERSION="PORTAL_BUILD_VERSION=\"${RELEASE_VERSION}\""
    sed -i -e "s/${RELEASE_VERSION}/${VERSIONS}/g" src/app/services/CommonServices/app-constant.ts
    fi
}
ngBuild(){
    
    if [ ${AOT} = "true" ]; then
         echo "Building in  AOT Mode..."
         node --max_old_space_size=4072  ./node_modules/.bin/ng build --configuration=production --delete-output-path=false 
     elif [ ${AOT} = "false" ]; then
        echo "Building in  Dev Mode..."
        ng build  --delete-output-path=false
     else
        echo "Building in  Dev Mode..."
    ng build  --delete-output-path=false
     fi
}

Start(){
if [ ${ENV} = "production" ]; then
    forever stop server.js
   if [ "$?" -ne "0" ]; then
      echo "Server Not Running, Start it"
   else
      echo "Server Stopped"
   fi
    rm -f ./src/assets/googleKey/env.js
    echo "var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.charset = 'UTF-8';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBuxENJymwbr0GmvRZIU1VzsvBe40xRl-M&libraries=visualization,drawing';
    document.getElementsByTagName('head')[0].appendChild(js_file);" >> ./src/assets/googleKey/env.js
    ENV=${ENV} AWS_ACCESS_KEY_ID=${arrIN[0]} AWS_SECRET_ACCESS_KEY=${arrIN[1]} forever start server.js
    forever list
elif [ ${ENV} = "staging" ]; then
   node server.js
   if [ "$?" -ne "0" ]; then
      echo "Server Not Running, Start it"
   else
      echo "Server Stopped"
   fi
    rm -f ./src/assets/googleKey/env.js
    echo "var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.charset = 'UTF-8';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvSG2k72Sqi7Wh24Zs_xB7FGWoTgun528&libraries=visualization,drawing';
    document.getElementsByTagName('head')[0].appendChild(js_file);" >> ./src/assets/googleKey/env.js
    ENV=${ENV} AWS_ACCESS_KEY_ID=${arrIN[0]} AWS_SECRET_ACCESS_KEY=${arrIN[1]} node server.js
    # forever list
else
     forever stop server.js
   if [ "$?" -ne "0" ]; then
      echo "Server Not Running, Start it"
   else
      echo "Server Stopped"
   fi
    rm -f ./server/routes/apis/env.js
    echo "var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.charset = 'UTF-8';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvSG2k72Sqi7Wh24Zs_xB7FGWoTgun528&libraries=visualization,drawing';
    document.getElementsByTagName('head')[0].appendChild(js_file);" >> ./server/routes/apis/env.js
    ENV=${ENV} AWS_ACCESS_KEY_ID=${arrIN[0]} AWS_SECRET_ACCESS_KEY=${arrIN[1]} forever start server.js
    forever list
fi
}

Stop(){
    forever stop server.js
}


Clean(){
   rm -rf dist/
}

Target_Handler(){
  for i in "${array[@]}"
    do
    case $i in
        build)
            echo "Processing Target ngBuild..."
            replaceAppVersion
            ngBuild
        ;;
        clean)
            echo "Processing Target Clean..."
            Clean
        ;;
        start)
            echo "Processing Target Start..."
            Start
        ;;
        stop)
          echo "Processing Target Stop..."
            Stop
        ;;
            esac
  done
}

array=(${TARGET//,/ })
targetArrayCount=${#array[@]}
if [[ ${targetArrayCount} -eq 0 ]];
then
  echo "No Target Parameter Found"
  replaceAppVersion
  ngBuild
  Start
else
  echo "Target Parameter Present"
  Target_Handler
fi
