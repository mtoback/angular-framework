import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMUComponent } from './cmu.component';

describe('CMUComponent', () => {
  let component: CMUComponent;
  let fixture: ComponentFixture<CMUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
