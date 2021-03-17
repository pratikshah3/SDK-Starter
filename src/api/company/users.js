require('dotenv').config({ path: '.env' });
const token = "";
const company_id = "8484"; // declare company id
const {procoreSDK } = require("procore-sdk-client");
/**
 * @Description get all company users
 *
 */
fastify.get("/api/company/:company_id/users", {}, async (request, reply) => {
  try {
    // create our sdk
    const SDK = new procoreSDK({ token, company_id });
    const users = await SDK.company.get_company_users();
    reply.send(users);
  } catch (e) {
    request.log.error(e);
    throw e;
  }
});

