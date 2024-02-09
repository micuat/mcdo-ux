import html from "choo/html";
import isMobile from "is-mobile";

import Editor from "../components/editor.js";

export default function(state, emitter) {
  state.isMobile = isMobile();
  state.stem = "";

  emitter.on("next option", () => {
    state.funcIndex++;
    state.notNextedYet = false;
    emitter.emit("render");
  });
  
  emitter.on("next hover", () => {
    let newCode = state.stem;

    state.selected = "";
    emitter.emit("render");
    
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
  });
  
  
  emitter.on("start over", () => {
    state.stem = "";
    state.funcIndex = 0;
    emitter.emit("render");
  });
  
  emitter.on("select input", ev => {
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
    // console.log(state.funcs[state.funcIndex].type)
    if (state.funcs[state.funcIndex].type === "source")  {
      state.funcIndex++;
      state.notNextedYet = true;
    }
    
    state.selected = "";
    emitter.emit("render");
  });
  
  emitter.on("hover input", ev => {
    const selectedCode = ev.target.parentNode.childNodes[0].innerText;
    let newCode = state.stem;

    if (newCode.length > 0) {
      newCode += ".";
    }
    newCode += selectedCode;
    state.selected = selectedCode;
    emitter.emit("render");
    
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
  });

  emitter.on("DOMContentLoaded", () => {
    state.stem = "";

    emitter.emit("render");

    console.log(state.route)
    if (state.route == "/") {
      
      state.funcs = [
        {
          type: "source",
          options: [
            { code: "src(s0)", ai: true},
            { code: "gradient()", ai: false},
            { code: "osc(40)", ai: false},
            { code: "osc(6,0.1,1.5)", ai: false},
            // "solid([1,0,0],[0,1,0],[0,0,1])",
            { code: "shape(4)", ai: false},
            { code: "noise(5)", ai: false},
            { code: "voronoi(5)", ai: false},
          ],
        },
        {
          type: "geometry",
          options: [
            { code: "scrollX(0,0.1)", ai: false},
            { code: "rotate(0,0.1)", ai: false},
            { code: "pixelate(20,20)", ai: false},
            { code: "modulate(noise(3))", ai: true},
            { code: "scale(2)", ai: false},
            { code: "scale(1,2)", ai: false},
            { code: "repeat(3,3)", ai: true},
            { code: "repeat(80,80)", ai: false},
            { code: "kaleid(4)", ai: false},
            { code: "kaleid(99)", ai: false},
          ],
        },
        {
          type: "color",
          options: [
            { code: "colorama(0.1)", ai: true},
            { code: "color(1,1,-1)", ai: true},
            { code: "color(1,-1,1)", ai: false},
            { code: "color(-1,1,1)", ai: false},
            { code: "invert()", ai: false},
            { code: "thresh()", ai: false},
            { code: "posterize(4)", ai: false},
            { code: "saturate(2)", ai: true},
          ],
        },
        {
          type: "end",
          options: [],
        },
      ];
      state.funcIndex = 0;

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
            window.x = ()=>-state.videoElement.width/state.videoElement.height/(window.innerWidth/window.innerHeight);
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