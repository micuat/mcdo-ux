import html from "choo/html";
import isMobile from "is-mobile";

import Editor from "../components/editor.js";

export default function(state, emitter) {
  state.isMobile = isMobile();
  state.codeStack = [];

  emitter.on("clear order", () => {
    state.codeStack = [];
    state.eatIn = undefined;
  });
  emitter.on("DOMContentLoaded", () => {
    // emitter.emit("render");

    console.log(state.route)
    if (state.route == "/" || state.route.startsWith("ui/")) {

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