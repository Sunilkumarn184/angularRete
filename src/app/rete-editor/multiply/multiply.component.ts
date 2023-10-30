import { Component, Input } from '@angular/core';
import { Control } from 'rete/_types/presets/classic';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss']
})
export class MultiplyComponent {
  createNode() {
    throw new Error('Method not implemented.');
  }

  @Input()
  readonly: boolean = false;
  @Input()
  control: Control = new Control;
  @Input()
  data!: { value: number; };
  
}
