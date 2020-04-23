import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {

  dataList = [
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
  constructor() { }

  ngOnInit() {
  }

}
