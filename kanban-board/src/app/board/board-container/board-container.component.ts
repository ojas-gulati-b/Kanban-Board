import { Component, OnInit } from '@angular/core';

export interface DealData {
 stageID: string;
 deal: any;
}
export interface StageData {
  stage: {
    stageID: string;
    title: string;
    subtitle: string;
    items: Array<any>;
  };
 }

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {

  dataList = [
    {
      stageID: 'Stage1',
      title: 'Lead in',
      subtitle: 'Rs 45000',
      items: [
        {
          dealID: 'Deal1',
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal2',
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal3',
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal4',
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
      ]
    },
    {
      stageID: 'Stage2',
      title: 'Contact made',
      subtitle: 'Rs 45000',
      items: [
        {
          dealID: 'Deal1',
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal2',
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal3',
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal4',
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal5',
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal6',
          dealTitle: 'Deal 6',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal7',
          dealTitle: 'Deal 7',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      stageID: 'Stage3',
      title: 'demo scheduled',
      subtitle: 'Rs 45000',
      items: [
        {
          dealID: 'Deal1',
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal2',
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal3',
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal4',
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal5',
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal6',
          dealTitle: 'Deal 6',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal7',
          dealTitle: 'Deal 7',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal8',
          dealTitle: 'Deal 8',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal9',
          dealTitle: 'Deal 9',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      stageID: 'Stage4',
      title: 'proposal made',
      subtitle: 'Rs 45000',
      items: [
        {
          dealID: 'Deal1',
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal2',
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal3',
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal4',
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal5',
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    },
    {
      stageID: 'Stage5',
      title: 'New Stage',
      subtitle: 'Rs 45000',
      items: [
        {
          dealID: 'Deal1',
          dealTitle: 'Deal 1',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal2',
          dealTitle: 'Deal 2',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal3',
          dealTitle: 'Deal 3',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal4',
          dealTitle: 'Deal 4',
          dealAmount: 'Rs 10000'
        },
        {
          dealID: 'Deal5',
          dealTitle: 'Deal 5',
          dealAmount: 'Rs 10000'
        }
      ]
    }

  ];
  constructor() { }

  ngOnInit() {
  }

  addStageDeal(data: DealData) {
    if(this.dataList && this.dataList.length > 0) {
      this.dataList.forEach(stage => {
        if (data.stageID === stage.stageID) {
          stage.items.push(data.deal);
        }
      });
    }
  }

}
