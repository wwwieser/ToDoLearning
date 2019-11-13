import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { ToDoListComponent } from './containers/to-do-list/to-do-list.component';



@NgModule({
  declarations: [ListComponent, AddNewItemComponent, ToDoListComponent],
  imports: [
    CommonModule
  ]
})
export class ToDoListModule { }
