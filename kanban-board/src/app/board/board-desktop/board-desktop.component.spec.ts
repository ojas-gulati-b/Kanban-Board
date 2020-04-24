import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDesktopComponent } from './board-desktop.component';

describe('BoardDesktopComponent', () => {
  let component: BoardDesktopComponent;
  let fixture: ComponentFixture<BoardDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
