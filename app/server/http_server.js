var vertx = require('vertx')
var eventBus = require('vertx/event_bus');
var container = require('vertx/container');
var requests = 0;

var redisConfig = {
    address: "redis.address",
    host: "redis",
    port: 6379
}

container.deployModule("io.vertx~mod-redis~1.1.4", redisConfig);

vertx.createHttpServer().requestHandler(function(req) {
  eventBus.send('redis.address', {
	    command: "set",
    	args: ["app.requests", requests++]
  	}
  );
  req.response.headers['Content-Type'] = "text/plain";
  req.response.end("Hello World");
}).listen(8080);
