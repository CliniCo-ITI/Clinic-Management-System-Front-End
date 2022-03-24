import { TestBed } from '@angular/core/testing';

import { RecepService } from './recep.service';

describe('RecepService', () => {
  let service: RecepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
