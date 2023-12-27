import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.tree !== undefined) {
    function unwrap(root) {
      if (root == undefined) return;
      let keys = Object.keys(root);
      return keys.map(e => {
        const obj = JSON.parse(e);
        const func = obj.f;
        const args = Object.keys(obj)
        .filter(e => e != "f")
        .map(e => obj[e]).join(",")
        return html`
        <div>
          <div>
            ${ func }(${ args })
          </div>
          <div>
            ${ unwrap(root) }
          </div>
        </div>`;
      });
    }
    
    dom = unwrap(state.tree);
  }
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        ${ dom }
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
  
  function funcClick(ev) {
    // console.log(this, ev)
    const code = this.code.replace(/^[\s]+/, "").replace("src(s0)", `src(s0).scale(1,x)`) + ".out()";
    eval(code);
    // state.code = this.code;
    state.cache(Editor, 'editor').setCode(code);
    emit("render");
  }
};
