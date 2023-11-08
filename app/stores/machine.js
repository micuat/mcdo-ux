export default function(state, emitter) {
  state.prompt = "hola"
  
  emitter.on("DOMContentLoaded", () => {
    s0.initCam();
    src(s0).out();
  });
}