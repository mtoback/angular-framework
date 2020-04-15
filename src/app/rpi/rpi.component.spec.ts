import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPIComponent } from './rpi.component';

describe('RPIComponent', () => {
  let component: RPIComponent;
  let fixture: ComponentFixture<RPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
