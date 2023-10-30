import { Component } from 'rete';
import { NumSocket } from 'rete/types/socket';

export class MultiplicationNode extends Component {
  constructor() {
    super('Multiplication');
  }

  async builder(node) {
    const input1 = this.addInput(new NumSocket('Number'));
    const input2 = this.addInput(new NumSocket('Number'));

    const output = this.addOutput(new NumSocket('Result'));

    node.data.value = 0;

    input1.onChange = input2.onChange = () => {
      const in1 = input1.node.data.value || 0;
      const in2 = input2.node.data.value || 0;

      node.data.value = in1 * in2;
      output.data = node.data.value;
      this.update();
    };
  }
    addInput(arg0: any) {
        throw new Error('Method not implemented.');
    }
    addOutput(arg0: any) {
        throw new Error('Method not implemented.');
    }
    update() {
        throw new Error('Method not implemented.');
    }

  worker(node, inputs, outputs) {
    outputs[0] = node.data.value;
  }
}
