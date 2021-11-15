#!/bin/bash

#Move our custom configs & creds in place as needed
if [ $ENV == "dev" ]
then
  echo "Running dev env"
fi

if [ $ENV == "prod" ]
then
  echo "Running prod env"
fi
