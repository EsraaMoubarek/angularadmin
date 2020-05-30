import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastepriceComponent } from './wasteprice.component';

describe('WastepriceComponent', () => {
  let component: WastepriceComponent;
  let fixture: ComponentFixture<WastepriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastepriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
