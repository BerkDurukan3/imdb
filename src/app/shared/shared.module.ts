import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionComponent } from './components/reaction/reaction.component';



@NgModule({
  declarations: [
    ReactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactionComponent
  ]
})
export class SharedModule { }
