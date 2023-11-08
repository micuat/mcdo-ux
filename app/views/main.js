// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";

import code from "../libs/meta-code.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        <button>
          ${ code.mods.map(e => e.desc) }
        </button>
      </div>
      ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
    </div>
  `;
};
