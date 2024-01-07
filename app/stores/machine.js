import html from "choo/html";
import isMobile from "is-mobile";

import Editor from "../components/editor.js";

export default function(state, emitter) {
  state.isMobile = isMobile();

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
    
    state.funcIndex++;
    emitter.emit("render");
  });
  
  emitter.on("hover input", ev => {
    let newCode = state.stem;

    if (newCode.length > 0) {
      newCode += ".";
    }
    newCode += ev.target.parentNode.childNodes[0].innerText;
    state.selected = ev.target.parentNode.childNodes[0].innerText;
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
            "src(s0)",
            "gradient()",
            "osc(40)",
            "osc(6,0.1,1.5)",
            // "solid([1,0,0],[0,1,0],[0,0,1])",
            "shape(4)",
            "noise(5)",
            "voronoi(5)",
          ],
        },
        {
          type: "geometry",
          options: [
            "scrollX(0,0.1)",
            "rotate(0,0.1)",
            "pixelate(20,20)",
            "modulate(noise(3))",
            "scale(2)",
            "scale(1,2)",
            "repeat(3,3)",
            "repeat(80,80)",
            "kaleid(4)",
            "kaleid(99)",
          ],
        },
        {
          type: "color",
          options: [
            "colorama(0.1)",
            "color(1,1,-1)",
            "color(1,-1,1)",
            "color(-1,1,1)",
            "invert()",
            "thresh()",
            "posterize(4)",
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