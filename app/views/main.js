// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";

import code from "../libs/meta-code.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        ${ code.mods.map(e => html`
          <button class="m-0.5 bg-white/90 border-black border-solid border-2" onclick=${ funcClick.bind(e) }>
            ${ e.desc }
          </button>
        `) }
      </div>
      <div class="absolute bottom-0 w-full z-10 overflow-scroll">
      <pre>
        <code>${ state.code }</code>
      </pre>
      </div>
      ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
    </div>
  `;
  
  function funcClick(ev) {
    // console.log(this, ev)
    eval(this.code);
    state.code = this.code;
    emit("render");
  }
};
