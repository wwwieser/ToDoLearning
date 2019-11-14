import { Injectable } from '@angular/core';
import { BizzLogicPipe } from '../pipes/bizz-logic.pipe';

@Injectable({
  providedIn: 'root'
})
export class TransformServiceService {

  constructor(private bizzLogicPipe: BizzLogicPipe) { }

  transform(value: string) {
    return this.bizzLogicPipe.transform(value);
  }
}
