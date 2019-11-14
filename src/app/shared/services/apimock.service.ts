import { Injectable } from '@angular/core';

import { APIService } from './api.service';

import { ToDoItem } from '../models/to-do-item';

@Injectable({
  providedIn: 'root'
})
export class APIMockService implements APIService {
  constructor() { }

  listItems: ToDoItem[] = [
    {
      id: '0',
      completed: false,
      note: 'first',
    },
    {
      id: '1',
      completed: false,
      note: 'second',
    },
    {
      id: '2',
      completed: false,
      note: 'third',
    },
  ];

  getListItems(): ToDoItem[] {
    return this.listItems;
  }
  addListItem(item: ToDoItem): void {
    this.listItems.push(item);
  }
}
