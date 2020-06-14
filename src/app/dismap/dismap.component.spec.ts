import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DismapComponent } from './dismap.component';

describe('DismapComponent', () => {
  let component: DismapComponent;
  let fixture: ComponentFixture<DismapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DismapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DismapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
