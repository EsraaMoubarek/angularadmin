import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdriversComponent } from './disdrivers.component';

describe('DisdriversComponent', () => {
  let component: DisdriversComponent;
  let fixture: ComponentFixture<DisdriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisdriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
