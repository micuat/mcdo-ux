import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";

function objToCode(obj) {
  const func = obj.f;

  let source = "";
  if (obj.source !== undefined) {
    source = objToCode(obj.source);
  }

  const args = Object.keys(obj)
  .filter(e => e != "f" && e != "to")
  .map(e => e === "source" ? source : obj[e]).join(",");
  
  // hacky way to deal with source-as-argument
  let child = "";
  if (obj.to !== undefined) {
    child = "." + objToCode(obj.to);
  }
  
  return `${ func }(${ args })${ child }`;
}

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.tree !== undefined) {
    
    const domSelect = html`
    <div class="">
      <div class="inline bg-white/50">
        ${ state.stem }
      </div>
      <select class="inline" onchange=${ selectInput }>
        <option>--</option>
        ${ Object.keys(state.curBranch).sort().map(e => html`
        <option value="${ e }">
          ${ objToCode(JSON.parse(e)) }
        </option>`) }
      </select>
    </div>
    `;
    
    function unwrap(root) {
      if (root == undefined) return;
      let keys = Object.keys(root);
      return keys.map(e => {
        return html`
        <div class="bg-white border-black border-solid border-2">
          <div>
            ${ objToCode(JSON.parse(e)) }
          </div>
          <div class="mx-4">
            ${ unwrap(root[e]) }
          </div>
        </div>`;
      });
    }
    
    const domList = unwrap(state.tree);
    
    dom = html`
    <div>
      ${ domSelect }
    </div>`
  }
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10">
        ${ dom }
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
};
