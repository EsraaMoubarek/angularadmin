import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscollectorsComponent } from './discollectors.component';

describe('DiscollectorsComponent', () => {
  let component: DiscollectorsComponent;
  let fixture: ComponentFixture<DiscollectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscollectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
