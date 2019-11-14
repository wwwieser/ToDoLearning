import { Component } from '@angular/core';
import { ToDoItem } from 'src/app/shared/models/to-do-item';
import { APIMockService } from 'src/app/shared/services/apimock.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent {

  private newItemMessage: string;

  constructor(private apiService: APIMockService) {
    this.apiService = apiService;
  }

  update(value: string) {
    this.newItemMessage = value;
  }

  submit() {
    // Pass newItemMessage to API Service layer
    this.apiService.addListItem(new ToDoItem(this.newItemMessage));
  }

}
