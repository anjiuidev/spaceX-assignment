import { SpaceXLaunchPage } from './app.po';

describe('space-x-launch App', () => {
  let page: SpaceXLaunchPage;

  beforeEach(() => {
    page = new SpaceXLaunchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
