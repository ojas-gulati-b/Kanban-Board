import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-board-mobile',
  templateUrl: './board-mobile.component.html',
  styleUrls: ['./board-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardMobileComponent implements OnInit, AfterViewInit {

  selectedIndex = 0;
  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    items: 1,
    nav: false,
  };

  activeSliderOffset = '';
  activeSliderWidth = '';
  @Input() data = [];
  @ViewChild('movingSlider', { static: true }) movingSlider: ElementRef;
  @ViewChildren('staticSlider') staticSliders: QueryList<ElementRef>;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.staticSliders.toArray());
    this.activeSliderWidth = this.staticSliders.toArray()[0].nativeElement.offsetWidth;
    this.changeDetectorRef.detectChanges();
  }

  selectChange(event): void {
    console.log(event);
    this.selectedIndex = event.startPosition;
    this.activeSliderOffset = this.staticSliders.toArray()[event.startPosition].nativeElement.offsetLeft;
  }

}
