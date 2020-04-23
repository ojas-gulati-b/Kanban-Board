import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMobileComponent } from './board-mobile.component';

describe('BoardMobileComponent', () => {
  let component: BoardMobileComponent;
  let fixture: ComponentFixture<BoardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
