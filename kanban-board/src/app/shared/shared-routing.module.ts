import { SampleBoardComponent } from './sample-board/sample-board.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: '',
        component: SampleBoardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    entryComponents: []
})

export class SharedRoutingModule { }