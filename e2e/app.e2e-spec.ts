import { DemoSpinnerPage } from './app.po';

describe('demo-spinner App', () => {
  let page: DemoSpinnerPage;

  beforeEach(() => {
    page = new DemoSpinnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
