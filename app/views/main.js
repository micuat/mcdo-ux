import html from "choo/html";
import raw from "choo/html/raw";

import HydraCanvas from "../components/hydra-canvas.js";
import Editor from "../components/editor.js";
import TextTweenElement from "../components/tween-text.js";

const items = [
  {
    id: "bigmac",
    name: "Big Mac",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/bigmac.png?v=1723614406350"
  },
  {
    id: "quarterpounder",
    name: "Quarter Pounder",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/quaterpounder.png?v=1723614412005"
  },
  {
    id: "cheeseburger",
    name: "Cheeseburger",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/cheeseburger.png?v=1723614407227"
  },
  {
    id: "filetofish",
    name: "Filet-O-Fish",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/filetofish.png?v=1723614408590"
  },
  {
    id: "mcdouble",
    name: "McDouble",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcdouble.png?v=1723614411230"
  },
  {
    id: "mcchicken",
    name: "McChiken",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcchicken.png?v=1723614409836"
  },
  {
    id: "mccrispy",
    name: "McCrispy",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mccrispy.png?v=1723614410713"
  },
  {
    id: "worldfamousfries",
    name: "World Famous Fries",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/worldfamousfries.png?v=1723614413673"
  },
  {
    id: "ketchup",
    name: "Ketchup",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/ketchuppacket.png?v=1723614409214"
  },
  {
    id: "spicybuffalosauce",
    name: "Spicy Buffalo Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/spicybuffalosauce.png?v=1723614412567"
  },
  {
    id: "barbequesauce",
    name: "Barbeque Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/tangybarbequesauce.png?v=1723614413086"
  },
  {
    id: "chickenmcnuggets",
    name: "Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/chickenmcnuggets.png?v=1723614407823"
  },
  {
    id: "tenpiecechickenmcnuggets",
    name: "10 Piece Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/10piecechickenmcnuggets.png?v=1723614404301"
  },
  {
    id: "osc",
    name: "OSC",
    type: "source",
    code: "osc(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/osc.png?v=1723643856940"
  },
  {
    id: "noise",
    name: "Noise",
    type: "source",
    code: "noise(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/noise.png?v=1723643856940"
  },
  {
    id: "voronoi",
    name: "Voronoi",
    type: "source",
    code: "voronoi(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/voronoi.png?v=1723643856940"
  },
  {
    id: "camera",
    name: "Camera",
    type: "source",
    code: "src(s0).scale(()=>window.slider0+0.5, window.x)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/cam.png?v=1723643856940"
  },
];

const tabs = [
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
  {
    type: "source",
    name: "Sources",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/source.png?v=1723643700775",
  },
]

const recommends = [
  {
    id: "kaleid",
    name: "Kaleid",
    type: "recommend",
    code: "scale(.5).kaleid(()=>window.slider2*7+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/kaleid.png?v=1723836783044"
  },
  {
    id: "colorama",
    name: "Colorama",
    type: "recommend",
    code: "colorama(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/colorama.png?v=1723836781098"
  },
  {
    id: "contrast",
    name: "Contrast",
    type: "recommend",
    code: "contrast(()=>window.slider2*5)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/contrast.png?v=1723837863441"
  },
  {
    id: "invert",
    name: "Invert",
    type: "recommend",
    code: "invert(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/invert.png?v=1723837863441"
  },
  {
    id: "hue",
    name: "Hue",
    type: "recommend",
    code: "hue(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/hue.png?v=1724060663740"
  },
  {
    id: "pixelate",
    name: "Pixelate",
    type: "recommend",
    code: "pixelate(()=>window.slider2*64,()=>window.slider2*64)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/pixelate.png?v=1723837863441"
  },
  {
    id: "posterize",
    name: "Posterize",
    type: "recommend",
    code: "posterize(()=>window.slider2*8,1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/posterize.png?v=1723837863441"
  },
  {
    id: "scrollx",
    name: "ScrollX",
    type: "recommend",
    code: "scrollX(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/scrollx.png?v=1723837863441"
  },
  {
    id: "scrolly",
    name: "ScrollY",
    type: "recommend",
    code: "scrollY(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/scrolly.png?v=1723837863441"
  },
  {
    id: "rotate",
    name: "Rotate",
    type: "recommend",
    code: "rotate(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/rotate.png?v=1723837863441"
  },
  {
    id: "thresh",
    name: "Thresh",
    type: "recommend",
    code: "thresh(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/thresh.png?v=1723837863441"
  },
  {
    id: "saturate",
    name: "Saturate",
    type: "recommend",
    code: "saturate(()=>window.slider2*10)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/saturate.png?v=1723837863441"
  },
  {
    id: "repeat",
    name: "Repeat",
    type: "recommend",
    code: "repeat(()=>window.slider2*12,()=>window.slider2*12)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/repeat.png?v=1723837863441"
  },
]

// export module
export default function(state, emit) {
  let uipage = state.params.uipage !== undefined ? state.params.uipage : "where";
  const subpage = state.params.subpage !== undefined ? state.params.subpage : "burger";

  // comment out for debugging
  if (state.params.uipage !== "where") {
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
              emit("pushState", "#ui/menutop");
        
              if (state.popupWindow === undefined) {
                const url_string = window.location.origin + "/#hydra";
                const w = window.open(
                  url_string,
                  "",
                  "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
                );
                w.resizeTo(600, 400);
                state.popupWindow = w;
                window.addEventListener("beforeunload", function(e){
                  w.close();
                });
              }
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
              emit("pushState", "#ui/menutop");

              if (state.popupWindow === undefined) {
                const url_string = window.location.origin + "/#hydra";
                const w = window.open(
                  url_string,
                  "",
                  "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
                );
                w.resizeTo(600, 400);
                state.popupWindow = w;
                window.addEventListener("beforeunload", function(e){
                  w.close();
                });
              }
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
                  emit("pushState", "#ui/size")
                  if (e.code !== undefined) {
                    eval(`${e.code}.out()`);
                    state.popupWindow?.eval(`${e.code}.out()`);
                    state.codeStack.push(e.code);
                    state.nameStack.push(e.name);
                    state.idStack.push(e.id);
                  }
                  else {
                    s3.initImage(e.url);
                    osc(6,0.1,()=>window.slider0*1.5).layer(src(s3)).out();
                    console.log(`s3.initImage("${ e.url }");`)
                    state.popupWindow?.eval(`s3.initImage("${ e.url }");`);
                    state.popupWindow?.eval(`osc(6,0.1,1.5).layer(src(s3).scale(()=>window.slider0+.5,window.ix)).out();`);
                    state.codeStack.push("osc(6,0.1,1.5).layer(src(s3).scale(()=>window.slider0+.5,window.ix))");
                    state.nameStack.push(e.name);
                    state.idStack.push(e.id);
                  }
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
            onmouseenter=${ () => {
              state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.layer(src(s0).luma(()=>window.slider1).scale(1, window.x)).out()`);
            } }
            onclick=${ () => {
              if (state.codeStack.length > 0) {
                state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.layer(src(s0).luma(()=>window.slider1).scale(1, window.x))`);
                eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.nameStack.push("Camera");
                state.idStack.push("combocamera");
              }

              emit("pushState", "#ui/size2");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mod-camera.png?v=1723836785544')] bg-contain"
            >
            </div>
            Camera
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onmouseenter=${ () => {
              state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.modulate(noise(3),()=>window.slider1).out()`);
            } }
            onclick=${ () => {
              if (state.codeStack.length > 0) {
                state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.modulate(noise(3),()=>window.slider1)`);
                eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.nameStack.push("Noise");
                state.idStack.push("combonoise");
              }

              emit("pushState", "#ui/size2");
            } }>
            <div
              class="w-2/4 h-2/4 bg-[url('https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mod-noise.png?v=1723836868558')] bg-contain"
            >
            </div>
            Noise
          </div>
          <div
            class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
            onmouseenter=${ () => {
              state.popupWindow?.eval(`osc(6,0,()=>window.slider1*3).modulate(${state.codeStack[state.codeStack.length - 1]}.sub(gradient()),1).out()`);
            } }
            onclick=${ () => {
              if (state.codeStack.length > 0) {
                state.codeStack.push(`osc(6,0,()=>window.slider1*3).modulate(${state.codeStack[state.codeStack.length - 1]}.sub(gradient()),1)`);
                eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                state.nameStack.push("Osc");
                state.idStack.push("combocolorosc");
              }

              emit("pushState", "#ui/size2");
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
          onclick=${ () => {
            emit("pushState", "#ui/recommend");
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
        </div>
        <div class="grid gap-4 grid-cols-3 w-full">
          ${
            recommends.map(e => html`
            <div
              class="cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full aspect-square"
              onmouseenter=${ () => {
                state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.${e.code}.out()`);
              } }
              onclick=${ () => {
                if (state.codeStack.length > 0) {
                  state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.${e.code}`);
                  eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                  state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
                  state.nameStack.push(e.name);
                  state.idStack.push(e.id);
                  // state.recommended = true;
                }

                emit("pushState", "#ui/checkout");
                // emit("pushState", "#ui/recommend");
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
            Total ${ /*state.price*/ state.codeStack.length > 0 ? Number.parseFloat(state.codeStack[state.codeStack.length-1].length*0.01).toFixed(2).replace(".", ",") : "0" }€
          </div>

        </div>
        <div
          class="text-3xl cursor-pointer flex flex-col justify-center items-center bg-white border-2 border-black rounded w-full h-32 p-2"
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
            Total ${ /*state.price*/ state.codeStack.length > 0 ? Number.parseFloat(state.codeStack[state.codeStack.length-1].length*0.01).toFixed(2).replace(".", ",") : "0" }€
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
