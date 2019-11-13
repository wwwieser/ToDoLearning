import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent {

  private newItemMessage: string;

  constructor() { }

  update(value: string) {
    this.newItemMessage = value;
  }

  submit() {
    // Pass newItemMessage to API Service layer
  }

}
