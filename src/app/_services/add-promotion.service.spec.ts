import { TestBed } from '@angular/core/testing';

import { AddPromotionService } from './add-promotion.service';

describe('AddPromotionService', () => {
  let service: AddPromotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPromotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
