import { DedaleAngularPage } from './app.po';

describe('dedale-angular App', () => {
  let page: DedaleAngularPage;

  beforeEach(() => {
    page = new DedaleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
