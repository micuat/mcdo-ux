import html from "choo/html";
import code from "../libs/meta-code.js";

function untree(synth, label) {
  let obj = {};
  let o = obj;
  for(let i = 0; i < synth.transforms?.length; i++) {
    const s = synth.transforms[i];
    o.f = s.name;
    for(let j = 0; j < s.transform.inputs.length; j++) {
      if (s.name == "src" && s.transform.inputs[j].name == "tex") {
        o.tex = s.userArgs[0].label
        continue;
      }
      if(s?.userArgs?.length > 0 && s.userArgs[0]?.transforms !== undefined) o.source = untree(s.userArgs[0]).obj;
      else {
        const input = s.transform.inputs[j];
        o[input.name] = input.default;
        if(s.userArgs.length > j) {
          o[input.name] = s.userArgs[j];
        }
      }
    }
    if (i < synth.transforms.length - 1) {
      o.to = {};
      o = o.to;
    }
    else {
      if (label) {
        o.to = { f: "out", label }
      }
    }
  }
  return {obj, o};
}

export default function(state, emitter) {
  state.prompt = "hola"
  
  // state.code = code.mods.filter(e=>e.code.includes("modulate")==false&&e.code.includes("layer")==false).map(e => ({ code: e.code.replace(/^[\s]+/, "").replace(".out()", "") }));
  state.code = code.mods.map(e => ({ code: e.code.replace(/^[\s]+/, "").replace(".out()", "") }));

  emitter.on("DOMContentLoaded", () => {
    state.tree = {};
    state.stem = "";
    state.curBranch = state.tree;
    
    state.code.forEach(e => {
      let parent = state.tree;
      let { obj, o } = untree(eval(e.code));
      do {
        let obj_clone = JSON.parse(JSON.stringify(obj));
        obj_clone.to = undefined;
        const key = JSON.stringify(obj_clone);
        let grandParent = parent;
        parent = grandParent[key];
        if (parent === undefined) {
          parent = grandParent[key] = {};
        }
        else {
        }
        
        obj = obj.to;
      } while (obj !== undefined);
    });
    console.log(state.tree);
    emitter.emit("render");

    console.log(state.route)
    if (state.route == "/") {
      // s0.initCam();
      window.x = ()=>-state.videoElement.width/state.videoElement.height/(window.innerWidth/window.innerHeight);

      src(s0).scale(1,x).out();

      let video = html`<video id="webcam" autoplay muted playsinline width="640" height="480"></video>`;
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
          video: {facingMode: { ideal: "environment" }},
        };

        // Activate the webcam stream.
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          video.srcObject = stream;
          s0.init({ src: video });
          // video.addEventListener("loadeddata", runOpticalFlow);
          // streaming = true;
          // state.started = true;
          // emitter.emit("render");
        });
      };
      startCapture();
    
    }
    if (state.route == "img") {
      s0.initImage('https://i.ibb.co/LdnQNgY/Cat.png')
      src(s0).out();
    }
  });
}