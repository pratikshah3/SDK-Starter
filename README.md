# fastify-starter

A starter template for creating an HTTP Fastify server with JavaScript. It includes example routes that demonstrate some of the basic features of Fastify. It also comes with unit tests powered by [tap](https://node-tap.org).

Codesandbox currently does not support custom eslint overrides; thus, `/* eslint strict: "off" */` is included at the top of each file to ignore the `strict` warning. If you use this template outside of Codesandbox, the eslint configuration within `package.json` will properly set the `sourceType`, which means you can remove these comments as no warnings will be produced.

Learn more about fastify by reading our [documentation](https://fastify.io)

# Generate a user token 

# Update your package credentials 


1.create an .npmrc file
2. add the following information

```bash
 
@pratikshah3:registry=https://npm.fury.io/pratikshah3/
//npm-proxy.fury.io/pratikshah3/:_authToken=

```
3. get an private registry authtoken
