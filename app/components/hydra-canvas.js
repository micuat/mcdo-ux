import html from "choo/html";
import Component from "choo/component";
import Hydra from "hydra-synth";

export default class Map extends Component {
  constructor(id, state, emit) {
    super(id);
    this.local = state.components[id] = {};
    this.state = state;
  }

  load(element) {
    console.log("loading hydra", element);

    // create a new hydra-synth instance
    const hydraCanvas = this.hydraCanvas = element.querySelector("canvas");
    hydraCanvas.width = 800//window.innerWidth;
    hydraCanvas.height = 800//window.innerHeight;

    if (this.state.hydra == undefined) {
      this.state.hydra = new Hydra({
        canvas: hydraCanvas,
        detectAudio: false,
        width: hydraCanvas.width,
        height: hydraCanvas.height
      });
    } else {
      // hydra = this.state.hydra;
    }
  }

  update() {
    return false;
  }
  
  download(e, desc) {
    const dt = this.hydraCanvas.toDataURL('image/jpeg');
    console.log(e)
    e.target.href = dt;
  }

  createElement(center) {
    return html`
      <div class="absolute left-0 top-0 w-screen h-screen z-0">
        <canvas class="absolute w-full h-full z-0"></canvas>
      </div>
    `;
  }
};
