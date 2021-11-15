import { GeoAdPage } from './app.po';

describe('geoAd App', () => {
  let page: GeoAdPage;

  beforeEach(() => {
    page = new GeoAdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
