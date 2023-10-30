import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ConnectionPlugin} from 'rete-connection-plugin';
import {AreaPlugin} from 'rete-area-plugin';
import { MultiplyComponent } from './multiply/multiply.component';

@Component({
  selector: 'app-rete-editor',
  template: `
    <div #reteEditor></div>
  `,
})
export class ReteEditorComponent implements AfterViewInit {
  @ViewChild('reteEditor', { static: true })
  editorEl!: ElementRef;

  private engine: Engine;

  async ngAfterViewInit() {
    this.engine = new Engine('rete@0.12.4');

    this.engine.use(ConnectionPlugin);
    this.engine.use(AreaPlugin);

    const editor = this.engine.createEditor(this.editorEl.nativeElement);

    const numComponent = new NumComponent();
    const multiplicationNode = new MultiplyComponent();

    editor.register(numComponent);
    editor.register(multiplicationNode);

    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
      await this.engine.abort();
      await this.engine.process();
    });

    const num1 = await numComponent.createNode({ value: 2 });
    const num2 = await numComponent.createNode({ value: 3 });
    const multiplication = await multiplicationNode.createNode();

    editor.addNode(num1);
    editor.addNode(num2);
    editor.addNode(multiplication);

    editor.connect(num1.outputs[0], multiplication.inputs[0]);
    editor.connect(num2.outputs[0], multiplication.inputs[1]);
  }
}
