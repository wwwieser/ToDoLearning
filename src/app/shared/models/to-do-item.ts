import { Icon } from './icon';

export class ToDoItem {
  constructor(note: string) {

    this.note = note;
    this.completed = false;
  }

  id?: string;
  completed: boolean;
  note: string;
  icon?: Icon;
}
