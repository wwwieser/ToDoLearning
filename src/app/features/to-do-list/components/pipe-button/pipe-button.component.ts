import { Component } from '@angular/core';
import { BizzLogicPipe } from 'src/app/shared/pipes/bizz-logic.pipe';

@Component({
  selector: 'app-pipe-button',
  templateUrl: './pipe-button.component.html',
  styleUrls: ['./pipe-button.component.scss']
})
export class PipeButtonComponent {

  constructor(private transformService: TransformService) { }

  triggerTransform() {
    this.transformService.transform();
  }

}
