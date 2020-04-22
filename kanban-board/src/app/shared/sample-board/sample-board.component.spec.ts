import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBoardComponent } from './sample-board.component';

describe('SampleBoardComponent', () => {
  let component: SampleBoardComponent;
  let fixture: ComponentFixture<SampleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
