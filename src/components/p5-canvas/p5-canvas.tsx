// Ported from https://github.com/p5-types/p5.ts/blob/master/examples/create-react-app/src/p5/wrapper.tsx
//import { Component, Prop } from '@stencil/core';
import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';
import p5 from 'p5';

@Component({
  tag: 'p5-canvas',
  //styleUrl: 'p5-canvas.css',
  shadow: true
})
export class P5Canvas {
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

  @Event() onP5Changed: EventEmitter;

  /** host provides sketch function */
  @Prop() sketch: (sketch: any) => void;
  //@Prop() sketch: (sketch: p5) => void;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  public canvas: p5;
  private canvasRoot: HTMLDivElement;

  // public componentDidMount() {
  public componentDidLoad() {
    this.setSketch();
  } 

  // public componentWillReceiveProps() {
  //   // if (this.sketch !== newprops.sketch) {
  //   //   this.setSketch();
  //   // }
  // }

  render() {
    //this.onP5Changed.emit();
    return <div class="canvas-root">
      <div>Hello, World! I'm´canvas {this.getText()}</div>
      {/* <div ref={this.wrapper} /> */}
    </div>
    ;
  }

  private setSketch() {
  //   const current = this;
  //   if (current) {
  //     // if (current.childNodes[0]) {
  //     //   current.removeChild(current.childNodes[0]);
  //     // }
    this.canvasRoot = document.querySelector('.canvas-root');
    this.canvas = new p5(this.sketch, this.canvasRoot);
  //     if (this.onP5Changed) {
  //       this.onP5Changed.emit(this.canvas);
  //     }
  //   }
  }  
}
