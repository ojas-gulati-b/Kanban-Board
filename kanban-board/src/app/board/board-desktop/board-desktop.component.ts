import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DealData, StageData } from '../board-container/board-container.component';


@Component({
  selector: 'app-board-desktop',
  templateUrl: './board-desktop.component.html',
  styleUrls: ['./board-desktop.component.scss']
})
export class BoardDesktopComponent implements OnInit {

  @Input() data = [];
  @Output() addDeal = new EventEmitter<DealData>();
  @Output() addStage = new EventEmitter<StageData>();
  counter = 0;
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

  onAddStage(){
    this.addStage.emit({
      stageID: `NewStage${this.counter++}`,
      title: 'New Stage',
      subtitle: 'Rs 15000',
      items: []
    });
  }

}
