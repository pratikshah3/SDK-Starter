require('dotenv').config();
const server = require("fastify")();
const fastifyBlipp = require("fastify-blipp");
const procoreSDK  = require("procore-sdk-client");

server.register(fastifyBlipp);

const PORT = process.env.PORT;
const token = process.env.TOKEN;

server.listen(PORT).then(() => {
  server.blipp();
  console.log(`fastify server is running on the sandbox environment: http://localhost:${PORT}`);
});



/**
 * @Route
 * @Description get all company projects
 *
 */
server.get("/api/company/:company_id/projects", {}, async (request, reply) => {
    try {
        const { company_id } = request.params;


        const procore_sdk = new procoreSDK({ token, company_id });
        const projects =  await procore_sdk.projects.list({ company_id });
        reply.send(projects);

    } catch (e) {
        request.log.error(e);
        throw e;
    }
});
