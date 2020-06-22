import { TestBed } from '@angular/core/testing';

import { FAppApiService } from './f-app-api.service';

describe('FAppApiService', () => {
  let service: FAppApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FAppApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
