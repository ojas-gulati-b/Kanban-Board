import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContainerComponent } from './board-container/board-container.component';
import { BoardMobileComponent } from './board-mobile/board-mobile.component';
import {MatTabsModule, MatButtonModule, MatIconModule} from '@angular/material';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BoardDesktopComponent } from './board-desktop/board-desktop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes = [
  {
      path: '',
      component: BoardContainerComponent
  },
];

@NgModule({
  declarations: [BoardContainerComponent, BoardMobileComponent, BoardDesktopComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    DragDropModule
  ],
  exports : [RouterModule],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
}]
})
export class BoardModule { }
