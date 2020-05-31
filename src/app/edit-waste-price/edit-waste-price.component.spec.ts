import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWastePriceComponent } from './edit-waste-price.component';

describe('EditWastePriceComponent', () => {
  let component: EditWastePriceComponent;
  let fixture: ComponentFixture<EditWastePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWastePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWastePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
