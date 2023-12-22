import html from "choo/html";

export default function(state, emitter) {
  state.prompt = "hola"
  
  emitter.on("DOMContentLoaded", () => {
    console.log(state.route)
    if (state.route == "/") {
      // s0.initCam();
      src(s0).out();

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