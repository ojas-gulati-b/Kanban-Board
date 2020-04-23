import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {

  dataList = [
    {
      title: 'Lead in',
      subtitle: 'Rs 45000',
      items: [
        {
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
      ]
    },
    {
      title: 'Contact made',
      subtitle: 'Rs 45000',
      items: [
        {
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      title: 'demo scheduled',
      subtitle: 'Rs 45000',
      items: [
        {
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      title: 'proposal made',
      subtitle: 'Rs 45000',
      items: [
        {
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      title: 'New Stage',
      subtitle: 'Rs 45000',
      items: [
        {
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
