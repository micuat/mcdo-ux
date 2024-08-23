import html from "choo/html";
import isMobile from "is-mobile";

import Editor from "../components/editor.js";

import { items, tabs, recommends } from "../libs/menu.js"

let predictor;

export default function(state, emitter) {
  ml5.setBackend("webgl");
  let options = {
    task: "regression",
    debug: true,
  };

  // Step 3: initialize your neural network
  predictor = ml5.neuralNetwork(options);
  const modelDetails = {
    model: "https://cdn.glitches.me/model.json",
    metadata: "https://cdn.glitches.me/model_meta.json",
    weights: "https://cdn.glitches.me/model.weights.bin",
  };

  predictor.load(modelDetails, modelLoaded);

  // Step 7: use the trained model
  function modelLoaded() {
    state.modelLoaded = true;
    emitter.emit("predict", [0.5, 0.5, "combonoise", "invert"]);
  }
  
  emitter.on("predict", inputs => {
    predictor.predict(inputs, (results, error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(results[0])
    });
  });

  state.isMobile = isMobile();
  
  state.trainingMode = state.params.uipage === "training";

  state.codeStack = [];
  state.nameStack = [];
  state.elementStack = [];
  state.idStack = [];
  state.eatIn = undefined;
  state.price = 0;
  state.cancelConfirm = false;
  state.forceCombo = false;
  state.recommended = false;
  window.slider0 = 0.02;
  window.slider1 = 0.02;
  window.slider2 = 0.02;
  
  state.trainingSamples = [];
  
  emitter.on("clear order", () => {
    state.codeStack = [];
    state.nameStack = [];
    state.elementStack = [];
    state.idStack = [];
    state.eatIn = undefined;
    state.price = 0;
    state.cancelConfirm = false;
    state.forceCombo = false;
    state.recommended = false;
    window.slider0 = 0.02;
    window.slider1 = 0.02;
    window.slider2 = 0.02;
    src(s0).scale(1, window.x).out()
    state.popupWindow?.eval("src(s0).scale(1, window.x).out()");
  });

  emitter.on("back order", () => {
    state.codeStack.pop();
    state.idStack.pop();
    //state.price = 0; // need work
    if (state.codeStack.length > 0) {
      eval(state.codeStack[state.codeStack.length - 1]);
      state.popupWindow?.eval(state.codeStack[state.codeStack.length - 1]);
    }
  });

  emitter.on("where select", (eatIn) => {
    state.eatIn = eatIn;
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
    if (state.trainingMode) {
      window.slider0 = Math.random();
      window.slider1 = Math.random();
      if (state.popupWindow !== undefined) {
        state.popupWindow.slider0 = window.slider0;
        state.popupWindow.slider1 = window.slider1;
      }
      emitter.emit("menu select");
      emitter.emit("pushState", "#ui/hidden");
    }
    else {
      emitter.emit("pushState", "#ui/menutop");
    }
  });
  
  emitter.on("menu select", e => {
    if (state.trainingMode) {
      e = items[Math.floor(Math.random() * items.length)];
    }
    if (e.code !== undefined) {
      eval(`${e.code}.out()`);
      state.popupWindow?.eval(`${e.code}.out()`);
      state.elementStack.push(e);
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
      state.elementStack.push(e);
      state.nameStack.push(e.name);
      state.idStack.push(e.id);
    }
    if (state.trainingMode) {
      emitter.emit("side select");
    }
    else {
      emitter.emit("pushState", "#ui/size");
    }
  });
  
  emitter.on("side select", name => {
    const labels = ["combocamera", "combonoise", "combocolorosc"]
    if (state.trainingMode) {
      name = labels[Math.floor(Math.random() * labels.length)];
    }

    if (state.codeStack.length > 0) {
      if (name === "combocamera") {
        state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.layer(src(s0).luma(()=>window.slider1).scale(1, window.x))`);
        eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.elementStack.push({ name: "Camera", id: "combocamera" });
        state.nameStack.push("Camera");
        state.idStack.push("combocamera");
      }
      if (name === "combonoise") {
        state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.modulate(noise(3),()=>window.slider1)`);
        eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.elementStack.push({ name: "Noise", id: "combonoise" });
        state.nameStack.push("Noise");
        state.idStack.push("combonoise");
      }
      if (name === "combocolorosc") {
        state.codeStack.push(`osc(6,0,()=>window.slider1*3).modulate(${state.codeStack[state.codeStack.length - 1]}.sub(gradient()),1)`);
        eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
        state.elementStack.push({ name: "Osc", id: "combocolorosc" });
        state.nameStack.push("Osc");
        state.idStack.push("combocolorosc");
      }
    }

    if (state.trainingMode) {
      let e = recommends[Math.floor(Math.random() * recommends.length)];
      // emitter.emit("recommend select");
      state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.${e.code}`);
      eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
      state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
      state.elementStack.push(e);
      state.nameStack.push(e.name);
      state.idStack.push(e.id);
    }
    else {
      emitter.emit("pushState", "#ui/size2");
    }
  });
  
  emitter.on("training save", e => {
    const data = {
      formatted: {
        in0: window.slider0,
        in1: window.slider1,
        in2: state.elementStack[1].id,
        out0: window.slider2,
        out1: state.elementStack[2].id,
      },
      raw: {
        stack: state.elementStack,
        slider0: window.slider0,
        slider1: window.slider1,
        slider2: window.slider2,
      },
    }
    state.trainingSamples.push(data);
    console.log(state.trainingSamples);
  });
  
  emitter.on("recommend select", e => {
    if (state.codeStack.length > 0) {
      state.codeStack.push(`${state.codeStack[state.codeStack.length - 1]}.${e.code}`);
      eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
      state.popupWindow?.eval(`${state.codeStack[state.codeStack.length - 1]}.out()`);
      state.elementStack.push(e);
      state.nameStack.push(e.name);
      state.idStack.push(e.id);

      const data = {
        formatted: {
          in0: window.slider0,
          in1: window.slider1,
          in2: state.elementStack[1].id,
          out0: window.slider2,
          out1: state.elementStack[2].id,
        },
        raw: {
          stack: state.elementStack,
          slider0: window.slider0,
          slider1: window.slider1,
          slider2: window.slider2,
        },
      }
      state.trainingSamples.push(data);
      console.log(state.trainingSamples);
      // state.recommended = true;
    }

    if (state.trainingMode) {
    }
    else {
      emitter.emit("pushState", "#ui/checkout");
      // emit("pushState", "#ui/recommend");
    }
  });
  
  emitter.on("DOMContentLoaded", () => {
    // emitter.emit("render");

    console.log(state.route)
    if (state.route == "/" || state.route.startsWith("ui/") || state.route.startsWith("hydra")) {

      let video = html`<video id="webcam" autoplay muted playsinline width="640" height="480" class="hidden"></video>`;
      document.body.appendChild(video)
      state.videoElement = video;
      let streaming = false;

      const startCapture = () => {
        // Check if webcam access is supported.
        function getUserMediaSupported() {
          return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        }
        if (getUserMediaSupported()) {
        } else {
          console.warn("getUserMedia() is not supported by your browser");
          return;
        }

        // getUsermedia parameters to force video but not audio.
        const constraints = {
          video: {facingMode: { ideal: "user" }},
        };

        // Activate the webcam stream.
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          video.srcObject = stream;
          //;
          video.addEventListener("loadeddata", () => {
            s0.init({ src: video });
            if (state.route.startsWith("hydra")) {
              window.x = ()=>-state.videoElement.width/state.videoElement.height/(window.innerWidth/window.innerHeight);
              window.ix = ()=>1/(window.innerWidth/window.innerHeight);
            }
            else {
              window.x = ()=>-state.videoElement.width/state.videoElement.height;
              window.ix = ()=>1;
            }
            src(s0).scale(1, window.x).out()
          });
        });
      };
      if (state.isMobile) {
        s0.initCam();
        src(s0).out()
      }
      else {
        startCapture();
      }
    
    }
  });
}