import { TestBed } from '@angular/core/testing';

import { SurveySurviceService } from './survey-survice.service';

describe('SurveySurviceService', () => {
  let service: SurveySurviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveySurviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
