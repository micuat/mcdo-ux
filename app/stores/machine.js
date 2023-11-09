export default function(state, emitter) {
  state.prompt = "hola"
  
  emitter.on("DOMContentLoaded", () => {
    console.log(state.route)
    if (state.route == "/") {
      s0.initCam();
      src(s0).out();
    }
    if (state.route == "img") {
      s0.initImage('https://i.ibb.co/LdnQNgY/Cat.png')
      src(s0).out();
    }
  });
}