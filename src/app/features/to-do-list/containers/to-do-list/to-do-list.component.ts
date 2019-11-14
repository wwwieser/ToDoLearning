import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { AddNewItemComponent } from '../../components/add-new-item/add-new-item.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [
    ListComponent,
    AddNewItemComponent
  ]
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
