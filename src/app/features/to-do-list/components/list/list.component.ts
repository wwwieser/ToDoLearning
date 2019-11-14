import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/shared/models/to-do-item';
import { APIMockService } from 'src/app/shared/services/apimock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: ToDoItem[];

  constructor(private apiService: APIMockService) {
   }

  ngOnInit() {
    this.list = this.apiService.getListItems();
  }

}
