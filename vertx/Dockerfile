FROM chiodonia/java:8
MAINTAINER Andrea Chiodoni "andrea.chiodoni@gmail.com"

ENV VERTX_VERSION 2.1.2

RUN wget http://dl.bintray.com/vertx/downloads/vert.x-$VERTX_VERSION.tar.gz
RUN tar -zvxf vert.x-$VERTX_VERSION.tar.gz
RUN mv vert.x-$VERTX_VERSION /var/lib/vertx
RUN ln -s /var/lib/vertx/bin/vertx /usr/bin/vertx
RUN rm -rf vert.x*
