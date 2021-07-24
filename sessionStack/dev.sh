#!/bin/bash
DOCKER_PORT=5000
LOCALHOST_PORT=5001
CONTAINER_NAME='session_stack'
IMAGE_NAME='session_stack'

for i in "$@"; do
    case $i in
        -r|--run)
        CMD="docker run --name $CONTAINER_NAME -d -p $LOCALHOST_PORT:$DOCKER_PORT $IMAGE_NAME"
        ;;
        -b|--build)
        CMD="docker build -t $IMAGE_NAME ."
        ;;
        #-t=*|--test=*)
        -t|--test)
        CMD="curl -X GET localhost:$LOCALHOST_PORT/users"
        ;;
        --stop)
        CMD="docker container rm -f $CONTAINER_NAME"
        ;;
        *)
        ECHO "invalid option"
        # unknown option
        ;;
    esac
done

$CMD