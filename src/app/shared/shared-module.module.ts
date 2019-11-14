import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizzLogicPipe } from './pipes/bizz-logic.pipe';

@NgModule({
  declarations: [BizzLogicPipe],
  imports: [
    CommonModule
  ],
})
export class SharedModuleModule { }
