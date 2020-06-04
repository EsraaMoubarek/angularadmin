import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromOnlyComponent } from './add-prom-only.component';

describe('AddPromOnlyComponent', () => {
  let component: AddPromOnlyComponent;
  let fixture: ComponentFixture<AddPromOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPromOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
