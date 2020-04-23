/**
 *
 * This is a sample component for board
 * Please delete it after creation of actual compoenent
 *
 */

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sample-board',
  templateUrl: './sample-board.component.html',
  styleUrls: ['./sample-board.component.scss']
})
export class SampleBoardComponent implements OnInit {

  lists = [
    {
      title: 'todo',
      items: [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ]
    },
    {
      title: 'done',
      items: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ]
    },
    {
      title: 'done1',
      items: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ]
    },
    {
      title: 'done2',
      items: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ]
    },
    {
      title: 'done3',
      items: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ]
    }

  ];
  todo = {
    title: 'todo',
    items: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]
  };

  done = {
    title: 'done',
    items: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]
  };
  done1 = {
    title: 'done1',
    items: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]
  };
  done2 = {
    title: 'done2',
    items: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]
  };
  done3 = {
    title: 'done3',
    items: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]
  };

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

  constructor() { }

  ngOnInit() {
  }

}
