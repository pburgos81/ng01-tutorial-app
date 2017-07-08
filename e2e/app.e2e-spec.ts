import { Ng01TutorialAppPage } from './app.po';

describe('ng01-tutorial-app App', () => {
  let page: Ng01TutorialAppPage;

  beforeEach(() => {
    page = new Ng01TutorialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
