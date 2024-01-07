import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.funcs !== undefined) {
    let funcs = ""
    if (state.funcs[state.funcIndex].options.length > 0) {
      funcs = state.funcs[state.funcIndex].options.map(e => html`
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
            [SELECT]
          </div>
        </div>
      `)
    }
    else {
      funcs = html`
      <div class="block">
        <div
          class="inline bg-white/50 cursor-pointer hover:bg-white"
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
        ${ funcs }
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
    emit("hover input", ev);
  }
  function selectInput(ev) {
    emit("select input", ev);
  }
  function startOver() {
    emit("start over");
  }
};
