import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlnlComponent } from './llnl.component';

describe('LlnlComponent', () => {
  let component: LlnlComponent;
  let fixture: ComponentFixture<LlnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
