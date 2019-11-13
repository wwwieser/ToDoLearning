import { Icon } from './icon';

export class ToDoItem {
  id: string;
  completed: boolean;
  note: string;
  icon?: Icon;
}
