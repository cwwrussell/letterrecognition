import {inject, TestBed} from '@angular/core/testing';

import {TestResolverService} from './test-resolver.service';

describe('TestResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestResolverService]
    });
  });

  it('should be created', inject([TestResolverService], (service: TestResolverService) => {
    expect(service).toBeTruthy();
  }));
});
