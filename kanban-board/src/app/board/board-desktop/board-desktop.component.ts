import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DealData } from '../board-container/board-container.component';

@Component({
  selector: 'app-board-desktop',
  templateUrl: './board-desktop.component.html',
  styleUrls: ['./board-desktop.component.scss']
})
export class BoardDesktopComponent implements OnInit {

  @Input() data = [];
  @Output() addDeal = new EventEmitter<DealData>();
 
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onAddDeal(stageIndex) {
    this.addDeal.emit({
      stageID: this.data[stageIndex].stageID,
      deal: {
        dealID: 'DealNew',
        dealTitle: 'New Deal',
        dealAmount: 'Rs 5000'
      },
    });
  }

}
