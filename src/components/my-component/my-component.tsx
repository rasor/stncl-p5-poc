// Ported from https://github.com/p5-types/p5.ts/blob/master/examples/create-react-app/src/App.tsx
import { Component, Prop, Listen } from '@stencil/core';
import { format } from '../../utils/utils';
//import p5 from 'p5';
import sketch from "../../p5/sketch";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Listen('onP5Changed')
  handleP5Changed(event) {
    // tslint:disable:no-console
    console.log(event.target)
  }  

  render() {
    return <div>
      <div>Hello, World! I'm host {this.getText()}</div>
      <p5-canvas sketch={sketch} />
    </div>
    ;
  }

}
