const token =
  "eyJhbGciOiJFUzUxMiJ9.eyJhaWQiOiI1ZDlhYjZlYTgxNGJjNGY5NDcyZGVlOGEyMTI2ZWYwYTlhZDkzNmQyNDZjNDczZDg1N2VjYjZjZjIxZTIzYjU1IiwiZXhwIjoxNjE1OTI1OTA3LCJ1aWQiOjU5MTQzMTUsInV1aWQiOiIxYzQ2NmU4ZC1kNjFmLTQ4ODEtYTgxYi05NDRlZmFiMjhkOWUifQ.ALOM1uyWAiI3NTqjLtE3Wm_vWAHphG3u5b8XLCuawekq-WeJp4U0FVKZwjlbLXggh1u0jy211t0qgrPYrgFFmKrwADb4Z1QvxoDS-De6CfXNQ2mcAbEr9on1pTlq6_e7sWOXW1xmmRieV-pX7h2iK3K32acYX45o-SEmPSF-ipLnI130"; // assign our token received from user
const company_id = "8484"; // declare company id
const procoreSDK = require("procore-sdk-client");

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

fastify.get("/", {}, async (request, reply) => {
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
