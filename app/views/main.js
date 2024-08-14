import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

import GlslFunctions from "../libs/glsl-functions.js";

const glslFunctions = GlslFunctions();

const items = [
  {
    name: "Big Mac",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/bigmac.png?v=1723614406350"
  },
  {
    name: "Quarter Pounder",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/quaterpounder.png?v=1723614412005"
  },
  {
    name: "Cheeseburger",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/cheeseburger.png?v=1723614407227"
  },
  {
    name: "Filet-O-Fish",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/filetofish.png?v=1723614408590"
  },
  {
    name: "McDouble",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcdouble.png?v=1723614411230"
  },
  {
    name: "McChiken",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcchicken.png?v=1723614409836"
  },
  {
    name: "McCrispy",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mccrispy.png?v=1723614410713"
  },
  {
    name: "World Famous Fries",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/worldfamousfries.png?v=1723614413673"
  },
  {
    name: "Ketchup",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/ketchuppacket.png?v=1723614409214"
  },
  {
    name: "Spicy Buffalo Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/spicybuffalosauce.png?v=1723614412567"
  },
  {
    name: "Barbeque Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/tangybarbequesauce.png?v=1723614413086"
  },
  {
    name: "Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/chickenmcnuggets.png?v=1723614407823"
  },
  {
    name: "10 Piece Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/10piecechickenmcnuggets.png?v=1723614404301"
  }
];

// export module
export default function(state, emit) {
  let dom = "loading";
  
  if (state.funcs !== undefined) {
    dom = html`
    <div class="">
    </div>
    `;
  }
  
  let funcs = glslFunctions.filter(e => e.type === "src");
  let tabs = [
    {
      type: "burger",
      name: "Burgers",
      url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/burger.jpg?v=1723615402488",
    },
    {
      type: "side",
      name: "Sides",
      url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/sides.jpg?v=1723615401807",
    },
    {
      type: "mcnugget",
      name: "McNuggets",
      url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcnuggetsandmeals.jpg?v=1723615402144",
    },
  ]
  
  let uiDom = "a";
  switch (state.params.uipage) {
    case "where":
      uiDom = html`
      <div class="">
        <button class="bg-white border-2 border-black rounded"
          onclick=${ () => emit("pushState", "#ui/menutop") }>
          Eat in
        </button>
        <button class="bg-white border-2 border-black rounded"
          onclick=${ () => emit("pushState", "#ui/menutop") }>
          Take away
        </button>
      </div>`;
      break;
    case "menutop":
      if (state.params.subpage !== undefined) {
        uiDom = html`
        <div class="">
          ${
            tabs.map(e => html`
              <div
                onclick=${ () => emit("pushState", `#ui/menutop/${}`) }>
                <img src="${ e.url }">
                ${ e.name }
              </div>
            `)
          }
          ${
            items
              .filter(e => e.type == state.params.subpage)
              .map(e => html`
            <button class="bg-white border-2 border-black rounded w-1/3"
              onclick=${ () => {
                state.curFunc = e;
                emit("pushState", "#ui/topping")
              } }>
              <img src="${ e.url }">
              ${ e.name }
            </button>`)
          }
        </div>`;
      }
      else {
        uiDom = html`
        <div class="">
          ${
            tabs.map(e => html`
              <div>
                <img src="${ e.url }">
                ${ e.name }
              </div>
            `)
          }
          ${
            funcs.map(e => html`
            <button class="bg-white border-2 border-black rounded"
              onclick=${ () => {
                state.curFunc = e;
                emit("pushState", "#ui/topping")
              } }>
              ${ e.name }
            </button>`)
          }
        </div>`;
      }
      break;
    case "topping":
      uiDom = html`
      <div class="">
        ${ state.curFunc.name }
        <button class="bg-white border-2 border-black rounded"
          onclick=${ () => emit("pushState", "#ui/topping") }>
          topping?
        </button>
      </div>`;
      break;
  }
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute bottom-0 z-10 w-full hidden">
        ${ state.cache(Editor, 'editor').render() }
      </div>
      <div class="absolute right-0 w-60">
      ${ state.cache(HydraCanvas, 'hydra').render(state, emit) }
      </div>
      <div class="absolute left-0 top-0 w-full h-full flex justify-center">
        <div class="max-w-screen-md w-full">
          <div class="">
            <div class="flex justify-between">
              <div class="inline bg-white">
                SFDCANBACDonalds++
              </div>
              <div class="cursor-pointer inline" onclick=${ infoClicked }>
                ℹ️
              </div>
            </div>
            ${ uiDom }
            ${ dom }
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
