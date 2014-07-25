# Docker demo
How to set-up a nginx-vertx-redis application infrastructure using https://www.docker.com.

## Containers on mac
boot2docker start
boot2docker stop
export DOCKER_HOST=tcp://$(boot2docker ip 2>/dev/null):2375

## Create images
docker build -t="chiodonia/ubuntu:14.04" ./ubuntu
docker build -t="chiodonia/java:8" ./java
docker build -t="chiodonia/vertx:2.1.2" ./vertx
docker build -t="chiodonia/app.persistence:1.0" ./app/persistence
docker build -t="chiodonia/app.server:1.0" ./app/server
docker build -t="chiodonia/app.proxy:1.0" ./app/proxy
docker images

## Run containers
docker run -i --name app.persistence -p 6379:6379 -d chiodonia/app.persistence:1.0
docker run -i --name app.server -p 8080:8080 --link app.persistence:redis -d chiodonia/app.server:1.0
docker run -i --name app.proxy -p 80:80 --link app.server:vertx -d chiodonia/app.proxy:1.0

## Remove everything
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
docker ps
docker images

## Debug
docker run -t -i <image> /bin/bash

## Test
boot2docker ip

wget -O - -q -t 1 http://192.168.59.103

redis-cli 
	connect 192.168.59.103 6379
	monitor