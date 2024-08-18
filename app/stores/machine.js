import html from "choo/html";
import isMobile from "is-mobile";

import Editor from "../components/editor.js";

export default function(state, emitter) {
  state.isMobile = isMobile();

  state.codeStack = [];
  state.idStack = [];
  state.eatIn = undefined;
  state.price = 0;
  state.cancelConfirm = false;
  
  emitter.on("clear order", () => {
    state.codeStack = [];
    state.idStack = [];
    state.eatIn = undefined;
    state.price = 0;
    state.cancelConfirm = false;
    src(s0).scale(1, window.x).out()
  });

  emitter.on("back order", () => {
    state.codeStack.pop();
    state.idStack.pop();
    //state.price = 0; // need work
    if (state.codeStack.length > 0) {
      eval(state.codeStack[state.codeStack.length - 1]);
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
            }
            else {
              window.x = ()=>-state.videoElement.width/state.videoElement.height;
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