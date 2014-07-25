FROM chiodonia/ubuntu:14.04
MAINTAINER Andrea Chiodoni "andrea.chiodoni@gmail.com"

# Install prerequisites
RUN apt-get update
RUN apt-get install -y software-properties-common

# Install java8
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer

# Install tools
RUN apt-get install -y gradle


