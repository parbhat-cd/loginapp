#!/bin/bash         

clear

echo "Build Process starting.."
for i in "$@"
do
case $i in
    -e=*|--prefix=*)
    ENV="${i#*=}"

    ;;
    -m=*|--prefix=*)
    MODE="${i#*=}"
    ;;	  
esac
done
value=$(<s3cred)
arrIN=(${value//:/ })
echo $value
CDN_BASE_URL=""
S3_BUCKET=""
S3_BASE_UPLOAD_PATH=""
ENV=${ENV} MODE=${MODE}  AWS_ACCESS_KEY_ID=${arrIN[0]} AWS_SECRET_ACCESS_KEY=${arrIN[1]} CDN_BASE_URL=${CDN_BASE_URL} S3_BUCKET=${S3_BUCKET} S3_BASE_UPLOAD_PATH=${S3_BASE_UPLOAD_PATH} node server.js
