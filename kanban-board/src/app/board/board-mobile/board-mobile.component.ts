import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-board-mobile',
  templateUrl: './board-mobile.component.html',
  styleUrls: ['./board-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardMobileComponent implements OnInit {

  private tabsCount = 0;
  selectedIndex: number = 1;
  private SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    // navSpeed: 700,
    // navText: ['', ''],
    items: 1,
    nav: false,
    
  }
  linksOptions = {
    loop: false,
    dots: false,
    items: 1,
    nav: false
  }
  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.tabsCount = this.data.length;
  }

  selectChange(): void{
    console.log("Selected INDEX: " + this.selectedIndex);
  }

  swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    console.log('swipe');
    console.log("number", selectedIndex);
    console.log("action", action);
    // Out of range
    if (this.selectedIndex < 0/* starter point as 1 */ || this.selectedIndex > this.tabsCount/* here it is */) return;

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selectedIndex === this.tabsCount;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      console.log("Swipe right - INDEX: " + this.selectedIndex);
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0 /* starter point as 1 */;
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      console.log("Swipe left - INDEX: " + this.selectedIndex);
    }
  }

}
