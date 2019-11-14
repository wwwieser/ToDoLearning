import { ToDoItem } from './to-do-item';

describe('ToDoListItem', () => {
  it('should create an instance', () => {
    expect(new ToDoItem('test')).toBeTruthy();
  });
});
