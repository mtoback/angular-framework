import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIOSHComponent } from './niosh.component';

describe('NIOSHComponent', () => {
  let component: NIOSHComponent;
  let fixture: ComponentFixture<NIOSHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIOSHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIOSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
