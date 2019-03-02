import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';
import p5 from 'p5';

//--------------

// https://github.com/p5-types/p5.ts/blob/master/examples/webpack/src/index.ts
function s(sketch: p5) {
  const x = 100;
  const y = 100;

  sketch.setup = () => {
    sketch.createCanvas(
      200,
      200
    );
  };

  sketch.draw = () => {
    sketch.background(
      0
    );
    sketch.fill(
      255
    );
    sketch.rect(
      x,
      y,
      50,
      50
    );
  };
};

const myp5 = new p5(
  s
);

//--------------


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

  render() {
    console.log(myp5);
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
