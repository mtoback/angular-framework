import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrexonComponent } from './intrexon.component';

describe('IntrexonComponent', () => {
  let component: IntrexonComponent;
  let fixture: ComponentFixture<IntrexonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrexonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrexonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
