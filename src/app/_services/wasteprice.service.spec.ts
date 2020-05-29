import { TestBed } from '@angular/core/testing';

import { WastepriceService } from './wasteprice.service';

describe('WastepriceService', () => {
  let service: WastepriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WastepriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
