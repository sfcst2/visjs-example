import { VisgraphPage } from './app.po';

describe('visgraph App', function() {
  let page: VisgraphPage;

  beforeEach(() => {
    page = new VisgraphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
