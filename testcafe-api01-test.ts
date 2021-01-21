import * as supertest from "supertest";

let request: supertest.SuperAgentTest;
let response: supertest.Response;

fixture`API test`.beforeEach(async (t) => {
  request = supertest.agent("localhost:3000");
  response = await request.get("/health");
});

test("API1 - response status 200", async (t) => {
  await t.expect(response.status).eql(200);
});

test("API2 - data health value true", async (t) => {
  console.log("body:" + JSON.stringify(response.body));
  await t.expect(response.body.status).eql(true);
});
