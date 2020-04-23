import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContainerComponent } from './board-container/board-container.component';
import { BoardMobileComponent } from './board-mobile/board-mobile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes = [
  {
      path: '',
      component: BoardContainerComponent
  },
];

@NgModule({
  declarations: [BoardContainerComponent, BoardMobileComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ],
  exports : [RouterModule],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
}]
})
export class BoardModule { }
