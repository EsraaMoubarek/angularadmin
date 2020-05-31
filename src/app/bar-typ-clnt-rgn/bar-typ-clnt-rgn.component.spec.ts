import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTypClntRgnComponent } from './bar-typ-clnt-rgn.component';

describe('BarTypClntRgnComponent', () => {
  let component: BarTypClntRgnComponent;
  let fixture: ComponentFixture<BarTypClntRgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTypClntRgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTypClntRgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
