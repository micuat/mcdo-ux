import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";

// export module
export default function(state, emit) {
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        ${ state.code.map(e => html`
          <button class="m-0.5 bg-white/90 border-black border-solid border-2" onclick=${ funcClick.bind(e) }>
            ${ /*e.desc*/ e.code }
          </button>
        `) }
      </div>
      <div class="absolute bottom-0 z-10 w-full">
        ${ state.cache(Editor, 'editor').render() }
      </div>
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
    </div>
  `;
  
  function selectInput(ev) {
    console.log(ev.target.value);
    if (state.stem.length > 0) {
      state.stem += ".";
    }
    state.stem += objToCode(JSON.parse(ev.target.value));
    state.curBranch = state.curBranch[ev.target.value];
    
    try {
      const code = state.stem.replace(/^[\s]+/, "").replace("src(s0)", `src(s0).scale(1,x)`) + ".out()";
      eval(code);
      state.cache(Editor, 'editor').setCode(code);
    } catch (e) {
      
    }
    
    if (Object.keys(state.curBranch).length == 0) {      
      state.stem = "";
      state.curBranch = state.tree;
    }
    emit("render");
  }
  
  function funcClick(ev) {
    // console.log(this, ev)
    const code = this.code.replace(/^[\s]+/, "").replace("src(s0)", `src(s0).scale(1,x)`) + ".out()";
    eval(code);
    // state.code = this.code;
    state.cache(Editor, 'editor').setCode(code);
    emit("render");
  }
};
