import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.options !== undefined) {
    dom = html`
    <div class="">
      <div class="inline bg-white/50">
        ${ state.stem }
      </div>
        ${ state.options[state.optionsIndex].map(e => html`
          <div id=${ e }
            onclick=${ selectInput }
            onmouseover=${ hoverInput }>
            ${ e }
          </div>
        `) }
      </select>
    </div>
    `;
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
  
  function hoverInput(ev) {
    console.log(ev.target.innerText);
  }
  function selectInput(ev) {
    console.log(ev.target.innerText);
    
    let newCode = state.stem;

    if (newCode.length > 0) {
      newCode += ".";
    }
    newCode += ev.target.innerText;
    state.stem = newCode;
    
    try {
      let code = newCode.replace(/^[\s]+/, "");
      if (state.isMobile) {
      }
      else {
        code = code.replace("src(s0)", `src(s0).scale(1,x)`);
      }
      code = code + ".out()";

      eval(code);
      state.cache(Editor, 'editor').setCode(code);
    } catch (e) {
      
    }
    
    state.optionsIndex++;
    emit("render");
  }
};
