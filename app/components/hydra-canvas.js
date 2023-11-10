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
    hydraCanvas.getContext("webgl", {
      preserveDrawingBuffer: true
    });

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

    const a = document.createElement('a')
    setTimeout(() => {
      a.style.display = 'none'

      let d = new Date()
      // a.download = `hydra-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}.png`
      a.download = `${ desc }.png`;
      document.body.appendChild(a)
      this.hydraCanvas.toBlob( (blob) => {
        a.href = URL.createObjectURL(blob)
        console.log(a.href)
        a.click()
      }, 'image/png')
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(a.href);
      }, 300);
    }, 2000);
  }

  createElement(center) {
    return html`
      <div class="absolute left-0 top-0 w-screen h-screen z-0">
        <canvas class="absolute w-full h-full z-0"></canvas>
      </div>
    `;
  }
};
