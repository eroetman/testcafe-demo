import { Given, When, Then } from 'cucumber';
import HomePage from './politienl-po';
import { Selector } from 'testcafe';

When('gebruiker opent politie.nl', async (t: TestController) => {
  await t.navigateTo('https://www.politie.nl');
});

Then('is het telefoonummer voor spoed te zien', async (t: TestController) => {
  await t.expect(HomePage.titel.innerText).eql('Bij spoed: 112')
});

Then('is het telefoonnummer voor geen spoed te zien', async (t: TestController) => {
  await t.expect(HomePage.subTitel.innerText).eql('Geen spoed: 0900-8844')
});

Then('is het zoekveld beschikbaar', async (t: TestController) => {
  await t.expect(HomePage.zoekBox.exists).ok();
});

Then('gebruiker voert {string} in in de zoekbox', async (t: TestController, [zoekTekst]) => {
  await t.typeText(HomePage.zoekBox, zoekTekst);
});

Then('gebruiker klikt op de zoekknop', async (t: TestController) => {
  await t.click(HomePage.zoekButton);
});

Then('is het adres {string} te zien in het zoekresultaat', async (t: TestController, [zoekResultaat]) => {
  await t.expect(HomePage.zoekResultaat.innerText).contains(zoekResultaat);
});
