import { ChatyJSClientPage } from './app.po';

describe('chaty-js-client App', () => {
  let page: ChatyJSClientPage;

  beforeEach(() => {
    page = new ChatyJSClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
