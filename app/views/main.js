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
        <div class="block" id=${ e.code }>
          <div
            class="inline bg-white/50 hover:bg-white font-mono"
            onclick=${ hoverInput }
            onmouseover=${ hoverInput }>
            ${ e.code }
          </div>
          ${ e.ai ? html`
            <div class="px-1 inline bg-yellow-400"
              onclick=${ hoverInput }
              onmouseover=${ hoverInput }>
              🧩
            </div>
          ` : ""}
          <div
            class="bg-white cursor-pointer animate-pulse ${ state.selected === e.code ? "inline" : "hidden" }"
            onclick=${ selectInput }
          >
            [SELECT]
          </div>
        </div>
      `)
      if (state.funcs[state.funcIndex].type !== "source") {
        funcs.push(html`
        <div class="block">
          <div
            class="inline bg-white/50 cursor-pointer hover:bg-white"
            onclick=${ nextOption }
            onmouseover=${ nextHover }>
            Skip
            ${ state.notNextedYet ? html`
              <div class="px-1 inline bg-yellow-400">
                🧩
              </div>
            ` : ""}
          </div>
        </div>
        `)
      }
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
      ${ funcs }
    </div>
    `;
  }
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute bottom-0 z-10 w-full hidden">
        ${ state.cache(Editor, 'editor').render() }
      </div>
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
      <div class="absolute left-0 top-0 w-full h-full">
        <div class="flex justify-between">
          <div class="inline bg-white">
            SFDCANBAC++
          </div>
          <div class="cursor-pointer inline" onclick=${ infoClicked }>
            ℹ️
          </div>
        </div>
        <div class="">
        </div>
        ${ dom }
      </div>
      <div class="fixed bottom-0 z-10 w-full">
        <div class="bg-white/50 w-full">
          Code: 
          <div class="inline bg-white/50 font-mono">
            ${ state.cache(TextTweenElement, 'my-text').render(state, emit, state.stem) }${ state.selected != false ? html`<span class="text-black/50">${ state.stem.length === 0 ? state.selected : `.${ state.selected }` }</span>` : "" }.out()
          </div>
        </div>
      </div>
      <div class="absolute ${ state.dialogOpen ? "" : "hidden" } w-full h-full m-0 bg-black/60">
        <div class="w-full h-full flex justify-center items-center">
          <div class="bg-white max-w-sm p-4 relative">
            <h1 class="text-xl">SFDCANBAC++-UX</h1>
            <p class="my-1">Project by <a class="font-bold" href="https://jorgeguevara.myportfolio.com/" target="_blank">Jorge Guevara</a> and <a class="font-bold" href="https://naotohieda.com/" target="_blank">Naoto Hieda</a></p>
            <p class="my-1">Front end by Naoto Hieda</p>
            <p class="my-1">Developed in the frame of <a class="font-bold" href="https://modina.eu/" target="_blank">MODINA</a> (Movement, Digital Intelligence and Interactive Audience)</p>
            <form method="dialog" class="absolute top-2 right-2">
              <button autofocus class="text-lg" onclick=${ infoClicked }>❌</button>
            </form>
          </div>
        </div>
      </div>
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
  function nextHover() {
    emit("next hover");
  }
  function nextOption() {
    emit("next option");
  }
  function infoClicked() {
    state.dialogOpen = !state.dialogOpen;
    emit("render");
  }
};
