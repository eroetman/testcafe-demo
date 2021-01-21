import { Selector } from "testcafe";

fixture`Demo - intern`.page`bitbucket.ontwikkel.local`;

test("TC1 - Public Repositories", async (t) => {
  await t.expect(Selector("#content h1").innerText).eql("Public Repositories");
});

test("TC2 - Zoekactie", async (t) => {
  await t
    .typeText(Selector('input[id="quick-search"]'), "TATOOLS")
    .pressKey("enter");

  await t
    .expect(Selector(".main > h2").innerText)
    .contains("We couldn't find any results matching");

  await t.expect(Selector(".main > h2 > strong").innerText).eql("TATOOLS");
});
