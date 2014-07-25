FROM chiodonia/vertx:2.1.2
MAINTAINER Andrea Chiodoni "andrea.chiodoni@gmail.com"

# RUN git clone https://github.com/dgageot/helloworld.git
# RUN cd helloworld &amp;&amp; mvn verify dependency:copy-dependencies

ENV APP_HOME /opt/app

RUN mkdir $APP_HOME
ADD http_server.js $APP_HOME/http_server.js

WORKDIR /opt/app
ENTRYPOINT vertx run http_server.js

EXPOSE 8080