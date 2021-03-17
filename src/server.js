/* eslint strict:"off" */
"use strict";
const server = require("fastify")();
const blipp = require("fastify-blipp");

server.register(require("fastify-loader"), {
  paths: ["./api/**/*.js"]
});

server.register(blipp);

server.listen(9090).then(() => {
  server.blipp();
  console.log("fastify server is running on the sandbox environment");
});
