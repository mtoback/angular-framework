import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordiantComponent } from './chordiant.component';

describe('ChordiantComponent', () => {
  let component: ChordiantComponent;
  let fixture: ComponentFixture<ChordiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
