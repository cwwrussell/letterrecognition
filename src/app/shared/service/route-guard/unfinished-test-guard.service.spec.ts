import { TestBed, inject } from '@angular/core/testing';

import { UnfinishedTestGuard } from './unfinished-test-guard.service';

describe('UnfinishedTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnfinishedTestGuard]
    });
  });

  it('should be created', inject([UnfinishedTestGuard], (service: UnfinishedTestGuard) => {
    expect(service).toBeTruthy();
  }));
});
