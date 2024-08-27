import html from "choo/html";
import raw from "choo/html/raw";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

import { items, tabs, recommends } from "../libs/menu.js"

// export module
export default function(state, emit) {
  let uipage = state.params.uipage !== undefined ? state.params.uipage : "where";
  const subpage = state.params.subpage !== undefined ? state.params.subpage : "burger";

  // comment out for debugging
  if (state.params.uipage !== "where") {
    if (state.params.uipage === "training") {
      uipage = "where";
    }
    if (state.eatIn === undefined) {
      uipage = "where";
    }
  }

  let uiDom = "placeholder";
  switch (uipage) {
    case "where":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_20px] gap-4">
        <div class="text-3xl font-bold">Where will you be coding today?</div>
        <div class="grid gap-4 grid-cols-2 w-full">
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              state.eatIn = true;
              emit("where select", true);
            } }>
            <div
              class="w-2/4 h-2/4 mb-4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/fast-food-svgrepo-com.svg?v=1723712001110')] bg-contain"
            >
            </div>
            <div class="text-xl">
              Code In
            </div>
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              state.eatIn = false;
              emit("where select", false);
            } }>
            <div
              class="w-2/4 h-2/4 mb-4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/take-away-svgrepo-com.svg?v=1723712005688')] bg-contain"
            >
            </div>
            <div class="text-xl">
              Code Away
            </div>
          </div>
        </div>
      </div>`;
      break;
    case "menutop":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_20px] gap-4">
        <div class="font-bold text-4xl">Explore our menu</div>
        <div class="grid grid-cols-[100px_1fr]">
          <div>
            ${
              tabs.map(e => html`
                <div
                  class="cursor-pointer"
                  onclick=${ () => emit("pushState", `#ui/menutop/${ e.type }`) }>
                  <img class="w-14" src="${ e.url }">
                  ${ e.name }
                </div>
              `)
            }
          </div>
          <div class="grid gap-4 grid-cols-3">
            ${
              items
                .filter(e => e.type == subpage)
                .map(e => html`
              <button class="bg-white border-2 border-black rounded w-full"
                onclick=${ () => {
                  emit("menu select", e);
                } }>
                <img src="${ e.url }">
                ${ e.name }
              </button>`)
            }
          </div>
        </div>
      </div>`;
      break;
    case "size":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_128px] gap-4">
        <div class="text-3xl font-bold">
          Adjust the size
        </div>
        <div class="w-full mb-32 grid gap-4 grid-cols-[1fr_3fr]">
          <label class="text-xl text-right mt-[-0.35em]" for="size0">${ state.nameStack.length > 0 ? state.nameStack[state.nameStack.length-1] : "" }</label>
          <input type="range" id="size0" name="size0" min="0" max="128" value="${window.slider0*128}"
            class="w-full h-4 bg-gray-400 rounded-sm range-lg appearance-none cursor-pointer"
            oninput=${ (e) => {
              window.slider0 = e.target.value / 128;
              if (state.popupWindow !== undefined) {
                state.popupWindow.slider0 = e.target.value / 128;
              }
            } }
            />
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2 bg-mcdo"
          style="background-color: #FFC72C"
          
          onclick=${ () => {
            emit("pushState", "#ui/topping");
          } }>
          Next
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          onclick=${ () => {
            emit("back order");
            emit("pushState", "#ui/menutop");
          } }>
          Back
        </div>
      </div>`;
      break;
    case "topping":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_128px] gap-4">
        <div class="text-3xl font-bold">
          Would you like a side and a modulation?
        </div>
        <div class="grid gap-4 grid-cols-2 w-full">
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              emit("pushState", "#ui/side");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/fast-food-svgrepo-com.svg?v=1723712001110')] bg-contain"
            >
            </div>
            Yes, make it a modulation
          </div>
          <div
            class="${state.forceCombo === true ? "hidden" : ""} cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              emit("pushState", "#ui/topping");
              state.forceCombo = true;
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/hamburger-svgrepo-com.svg?v=1723728329453')] bg-contain"
            >
            </div>
            No, item only
          </div>
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          onclick=${ () => {
            emit("back order");
            emit("pushState", "#ui/menutop");
          } }>
          Back
        </div>
      </div>`;
      break;
    case "side":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_20px] gap-4">
        <div class="text-3xl font-bold">
          Select a modulation
        </div>
        <div class="grid gap-4 grid-cols-3 w-full">
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              emit("side select", "combocamera");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mod-camera.png?v=1723836785544')] bg-contain"
            >
            </div>
            Camera
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              emit("side select", "combonoise");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mod-noise.png?v=1723836868558')] bg-contain"
            >
            </div>
            Noise
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onclick=${ () => {
              emit("side select", "combocolorosc");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mod-color-osc.png?v=1723837044391')] bg-contain"
            >
            </div>
            Osc
          </div>
        </div>
      </div>`;
      break;
    case "size2":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_128px] gap-4">
        <div class="text-3xl font-bold">
          Adjust the modulation size
        </div>
        <div class="w-full mb-32 grid gap-4 grid-cols-[1fr_3fr]">
          <label class="text-xl text-right mt-[-0.35em]" for="size1">${ state.nameStack.length > 0 ? state.nameStack[state.nameStack.length-1] : "" }</label>
          <input type="range" id="size1" name="size1" min="0" max="128" value="${window.slider1*128}"
            class="w-full h-4 bg-gray-400 rounded-sm range-lg appearance-none cursor-pointer"
            oninput=${ (e) => {
              window.slider1 = e.target.value / 128;
              if (state.popupWindow !== undefined) {
                state.popupWindow.slider1 = e.target.value / 128;
              }
            } }
            />
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2 bg-mcdo"
          style="background-color: #FFC72C"
          
          onclick=${ () => {
            emit("predict batch");
          } }>
          Next
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          onclick=${ () => {
            emit("back order");
            emit("pushState", "#ui/side");
          } }>
          Back
        </div>
      </div>`;
      break;
    case "recommend":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_150px] gap-4">
        <div class="text-3xl font-bold">
          Can we recommend${ state.recommended === true ? " more" : "" }?
          <div class="w-full mb-32 grid gap-4 grid-cols-[1fr_3fr]">
            <label class="hidden text-xl text-right mt-[-0.35em]" for="size2">${ state.nameStack.length > 0 ? state.nameStack[state.nameStack.length-1] : "" }</label>
            <input type="range" id="size2" name="size2" min="0" max="128" value="${window.slider2*128}"
              class="hidden w-full h-4 bg-gray-400 rounded-sm range-lg appearance-none cursor-pointer"
              oninput=${ (e) => {
                window.slider2 = e.target.value / 128;
                if (state.popupWindow !== undefined) {
                  state.popupWindow.slider2 = e.target.value / 128;
                }
              } }
              />
            <label class="hidden " for="size2">hidden slider</label>
          </div>
        </div>
        <div class="grid gap-4 grid-cols-3 w-full">
          ${
            recommends.map(e => html`
            <div
              class="hidden cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
              onclick=${ () => {
                emit("recommend select", e);
              } }>
              <!--<div
                class="w-2/4 h-2/4 bg-[url('${ e.url }')] bg-contain"
              >-->
              <img
                class="w-2/4 h-2/4 bg-contain"
                src=${ e.url }
              >
              ${ e.name }
            </div>`)
          }
          ${ state.recommends.map(f => {
            let e = recommends.find(r => r.id == f.id);
            let arg = eval(`x=f.slider;${e.eq}`);
            return html`
            <div
              class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
              onclick=${ () => {
                emit("recommend select", e);
              } }>
              <!--<div
                class="w-2/4 h-2/4 bg-[url('${ e.url }')] bg-contain"
              >-->
              <img
                class="w-2/4 h-2/4 bg-contain"
                src=${ e.url }
              >
              ${ e.name }(arg=${ Number.parseFloat(arg).toFixed(2) })
              </div>
            `}) }
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          onclick=${ () => {
            emit("pushState", "#ui/checkout");
          } }>
          ${ state.recommended === true ? "Checkout" : "Not Today" }
        </div>
      </div>`;
      break;
    case "hidden":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_150px] gap-4">
        <div class="text-3xl font-bold">
          hidden page
          <div class="w-full mb-32 grid gap-4 grid-cols-[1fr_3fr]">
            <label class="text-xl text-right mt-[-0.35em]" for="size2">${ state.nameStack.length > 0 ? state.nameStack[state.nameStack.length-1] : "" }</label>
            <input type="range" id="size2" name="size2" min="0" max="128" value="${window.slider2*128}"
              class="w-full h-4 bg-gray-400 rounded-sm range-lg appearance-none cursor-pointer"
              oninput=${ (e) => {
                window.slider2 = e.target.value / 128;
                if (state.popupWindow !== undefined) {
                  state.popupWindow.slider2 = e.target.value / 128;
                }
              } }
              />
            <label class="" for="size2">hidden slider</label>
          </div>
          <button onclick=${() => {
            emit("training save");
            emit("clear order");
            emit("pushState", "#ui/where");
          }}>
          save
          </button>
        </div>
        oioi

      </div>`;
      break;
    case "checkout":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_20px] gap-4">
        <div class="text-3xl font-bold">
          Checkout
        </div>
        <div class="grid gap-4 grid-cols-3 w-full">
          
        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          onclick=${ () => {
            emit("pushState", "#ui/payment");
          } }>
          Pay Here
        </div>
      </div>`;
      break;
    case "payment":
      uiDom = html`
      <div class="grid grid-rows-[150px_1fr_20px] gap-4">
        <div class="text-3xl font-bold">
          Total
        </div>
        <div class="grid gap-4 grid-rows-2 w-full">
          <div class="font-mono w-full overflow-clip">
            ${ state.codeStack.length > 0 ? raw(state.codeStack[state.codeStack.length - 1].split(").").join(")<br>.") + ".out()") : "" }
          </div>
          <div class="text-left text-3xl">
            Total ${ /*state.price*/ state.codeStack.length > 0 ? Number.parseFloat(state.codeStack[state.codeStack.length-1].length*0.01).toFixed(2).replace(".", ",") : "0" }🍔
          </div>

        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
          style="background-color: #FFC72C"
          onclick=${ () => {
            emit("clear order");
            emit("pushState", "#ui/where");
          } }>
          Start Over
        </div>
      </div>`;
      break;
  }
  
  if (uipage === "checkout") {
    console.log(state.codeStack)
    console.log(state.idStack)
  }
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute hidden left-0 bottom-32 w-60">
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
      </div>
      <div class="absolute left-0 top-0 w-full h-full flex justify-center">
        <div class="max-w-screen-md w-full">
          <div class="h-screen grid grid-rows-[1.5em_1fr_32px_1.5em]">
            <div class="flex justify-between">
              <div class="hidden inline bg-white">
                SFDCANBACDonalds++
              </div>
              <div class="hidden cursor-pointer inline" onclick=${ infoClicked }>
                ℹ️
              </div>
            </div>
            <div>
              ${ state.trainingMode ? "🟡training mode" : "" }
              ${ uiDom }
            </div>
            <div class="grid gap-4 grid-cols-3">
              <div class="font-mono invisible">
                ${ state.codeStack.length > 0 ? state.codeStack[state.codeStack.length - 1] + ".out()" : "" }
              </div>
              <div
                class="text-xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-8 p-2"
                onclick=${ () => {
                  emit("render");
                  state.cancelConfirm = true;
                } }>
                Cancel Order
              </div>
              <div class="text-right">
            Total ${ /*state.price*/ state.codeStack.length > 0 ? Number.parseFloat(state.codeStack[state.codeStack.length-1].length*0.01).toFixed(2).replace(".", ",") : "0" }🍔
              </div>
            </div>
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
            <p class="my-1"><a class="font-bold" href="https://www.youtube.com/watch?v=FEvxZ0tKxa8" target="_blank">Tutorial on Youtube</a></p>
            <form method="dialog" class="absolute top-2 right-2">
              <button autofocus class="text-lg" onclick=${ infoClicked }>❌</button>
            </form>
          </div>
        </div>
      </div>
      <div class="absolute ${ state.cancelConfirm ? "" : "hidden" } w-full h-full m-0 bg-black/60">
        <div class="w-full h-full flex justify-center items-center">
          <div class="bg-white max-w-sm p-4 w-full relative">
            <div class="font-bold text-3xl">
              Are you sure to cancel the order?
            </div>
            <div class="grid gap-4 grid-cols-2">
              <div
                class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
                onclick=${ () => {
                  emit("clear order");
                  emit("pushState", "#ui/where");
                  state.cancelConfirm = false;
                } }>
                Start Over
              </div>
              <div
                class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2 bg-mcdo"
                style="background-color: #FFC72C"
                onclick=${ () => {
                  emit("render");
                  state.cancelConfirm = false;
                } }>
                Continue Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // function hoverInput(ev) {
  //   emit("hover input", ev);
  // }
  // function selectInput(ev) {
  //   emit("select input", ev);
  // }
  // function startOver() {
  //   emit("start over");
  // }
  // function nextHover() {
  //   emit("next hover");
  // }
  // function nextOption() {
  //   emit("next option");
  // }
  function infoClicked() {
    state.dialogOpen = !state.dialogOpen;
    emit("render");
  }
};
