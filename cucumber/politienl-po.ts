import { Selector } from 'testcafe';

class HomePage {
  titel: Selector = Selector('span.title');
  subTitel: Selector = Selector('span.subtitle');
  zoekBox = Selector('#search-bar-input');
  zoekButton: Selector = Selector('div.input-with-button button');
  zoekResultaat: Selector = Selector('div.searchlist');
}

export default new HomePage();