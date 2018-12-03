import {inject, TestBed} from '@angular/core/testing';

import {StudentResolverService} from './student-resolver.service';

describe('StudentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentResolverService]
    });
  });

  it('should be created', inject([StudentResolverService], (service: StudentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
