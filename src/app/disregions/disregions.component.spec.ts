import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisregionsComponent } from './disregions.component';

describe('DisregionsComponent', () => {
  let component: DisregionsComponent;
  let fixture: ComponentFixture<DisregionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisregionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisregionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
