import { LocalizationManagerUiPage } from './app.po';

describe('localization-manager-ui App', () => {
  let page: LocalizationManagerUiPage;

  beforeEach(() => {
    page = new LocalizationManagerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
