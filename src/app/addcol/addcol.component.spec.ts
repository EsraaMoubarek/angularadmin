import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolComponent } from './addcol.component';

describe('AddcolComponent', () => {
  let component: AddcolComponent;
  let fixture: ComponentFixture<AddcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
