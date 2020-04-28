import {
  Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ViewChildren, QueryList,
  AfterViewInit, ChangeDetectorRef, Output, EventEmitter, HostListener
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DealData } from '../board-container/board-container.component';

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
  @Output() addDeal = new EventEmitter<DealData>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // console.log(this.staticSliders.toArray());
    this.activeSliderWidth = this.staticSliders.toArray()[0].nativeElement.offsetWidth;
    this.changeDetectorRef.detectChanges();
  }

  selectChange(event): void {
    // console.log(event);
    this.selectedIndex = event.startPosition;
    this.activeSliderOffset = this.staticSliders.toArray()[event.startPosition].nativeElement.offsetLeft;
  }

  onAddDeal() {
    this.addDeal.emit({
      stageID: this.data[this.selectedIndex].stageID,
      deal: {
        dealID: 'DealNew',
        dealTitle: 'New Deal',
        dealAmount: 'Rs 5000'
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 768) {
      this.activeSliderWidth = this.staticSliders.toArray()[0].nativeElement.offsetWidth;
      this.changeDetectorRef.detectChanges();
    }
  }

}
