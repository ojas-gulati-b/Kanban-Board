import { DragDropModule } from '@angular/cdk/drag-drop';
import { SampleBoardComponent } from './sample-board/sample-board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    SampleBoardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
