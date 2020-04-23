import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-board-mobile',
  templateUrl: './board-mobile.component.html',
  styleUrls: ['./board-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardMobileComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit() {
  }

}
