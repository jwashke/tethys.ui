import { Tethys.UiPage } from './app.po';

describe('tethys.ui App', () => {
  let page: Tethys.UiPage;

  beforeEach(() => {
    page = new Tethys.UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
