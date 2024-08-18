import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

// export module
export default function(state, emit) {
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-screen h-screen">
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
      </div>
    </div>
  `;
};
