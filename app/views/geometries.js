// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";

import code from "../libs/meta-code.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        ${ code.patterns.map(e => html`
          <button class="m-0.5 bg-white/90 border-black border-solid border-2" onclick=${ funcClick.bind(e) }>
            ${ e.desc }
          </button>
        `) }
      </div>
      <div class="absolute bottom-0 z-10 w-full">
        ${ state.cache(Editor, 'editor').render() }
      </div>
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
    </div>
  `;
  
  function funcClick(ev) {
    // console.log(this, ev)
    const code = this.code.replace(/^[\s]+/, "");
    eval(code);
    // state.code = this.code;
    state.cache(Editor, 'editor').setCode(code);
    emit("render");
  }
};
