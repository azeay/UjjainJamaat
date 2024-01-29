import { SeatAllocationTemplatePage } from './app.po';

describe('SeatAllocation App', function() {
  let page: SeatAllocationTemplatePage;

  beforeEach(() => {
    page = new SeatAllocationTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
