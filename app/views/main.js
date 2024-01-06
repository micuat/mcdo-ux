import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.options !== undefined) {
    let options = ""
    if (state.options[state.optionsIndex].length > 0) {
      options = state.options[state.optionsIndex].map(e => html`
        <div class="block" id=${ e }>
          <div
            class="inline bg-white/50 hover:bg-white font-mono"
            onclick=${ hoverInput }
            onmouseover=${ hoverInput }>
            ${ e }
          </div>
          <div
            class="bg-white cursor-pointer ${ state.selected === e ? "inline" : "hidden" }"
            onclick=${ selectInput }
          >
            [ENTER]
          </div>
        </div>
      `)
    }
    else {
      options = html`
      <div class="block">
        <div
          class="inline bg-white/50 hover:bg-white"
          onclick=${ startOver }>
          Start over
        </div>
      </div>
      `
    }
    dom = html`
    <div class="">
      <div class="bg-white/50">
        Code: 
        <div class="inline bg-white/50 font-mono">
          ${ state.cache(TextTweenElement, 'my-text').render(state, emit, state.stem) }
        </div>
      </div>
        ${ options }
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
    let newCode = state.stem;

    if (newCode.length > 0) {
      newCode += ".";
    }
    newCode += ev.target.parentNode.childNodes[0].innerText;
    state.selected = ev.target.parentNode.childNodes[0].innerText;
    emit("render");
    
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
  }
  function selectInput(ev) {
    let newCode = state.stem;

    if (newCode.length > 0) {
      newCode += ".";
    }
    newCode += ev.target.parentNode.childNodes[0].innerText;
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

  function startOver() {
    state.stem = "";
    state.optionsIndex = 0;
    emit("render");
  }
};
