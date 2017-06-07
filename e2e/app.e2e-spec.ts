import { LanFileManagerSystemPage } from './app.po';

describe('lan-file-manager-system App', () => {
  let page: LanFileManagerSystemPage;

  beforeEach(() => {
    page = new LanFileManagerSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
