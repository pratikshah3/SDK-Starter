const token =  "";
const company_id = "8484"; // declare company id
const {procoreSDK } = require("procore-sdk-client");

fastify.get("/api/projects/rfi", {}, async (request, reply) => {
    try {

        // create our sdk
        const SDK = new procoreSDK({ token, company_id });
        const users = await SDK.projects.get_rfis({ project_id: "311603" });

        reply.send(users);
    } catch (e) {
        request.log.error(e);
        throw e;
    }
});

