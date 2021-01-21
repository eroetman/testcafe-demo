import { Selector } from 'testcafe';

fixture `Demo`
  .page`http://www.politie.nl`;

test('TC1 - telefoonummers zichtbaar', async t => {
  await t
    .expect(Selector('span.title').innerText).eql('Bij spoed: 112')
    .expect(Selector('span.subtitle').innerText).eql('Geen spoed: 0900-8844');
});

test('TC2 - zoekveld beschikbaar', async t => {
  // <input id="search-bar-input" name="query" type="text" placeholder="Zoek..." maxlength="200" size="1">
  await t
    .expect(Selector('input').exists).ok()
    .expect(Selector('#search-bar-input').exists).ok();
});

test('TC3 - zoek adres Politie in Odijk', async t => {
  await t
    .typeText(Selector('#search-bar-input'), 'Odijk')
    .click(Selector('div.input-with-button button'));
  await t
    .expect(Selector('div.searchlist').innerText).contains('Singelpark 1');
});
