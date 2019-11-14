import { ToDoItem } from '../models/to-do-item';

export interface APIService {

  /**
   * getListItems - retrieve the Array<ToDoItem> from the corresponding API
   */
  getListItems(): Array<ToDoItem>;

  /**
   * addListItem - submit the ToDoItem for persistence
   */
  addListItem(item: ToDoItem): void;
}
