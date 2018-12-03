import {TestCardModule} from './test-card.module';

describe('TestCardModule', () => {
  let testCardModule: TestCardModule;

  beforeEach(() => {
    testCardModule = new TestCardModule();
  });

  it('should create an instance', () => {
    expect(testCardModule).toBeTruthy();
  });
});
