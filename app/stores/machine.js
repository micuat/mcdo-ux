import html from "choo/html";
import code from "../libs/meta-code.js";

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
const mobileCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

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
  state.isMobile = mobileCheck();

  state.prompt = "hola"
  
  // state.code = code.mods.filter(e=>e.code.includes("modulate")==false&&e.code.includes("layer")==false).map(e => ({ code: e.code.replace(/^[\s]+/, "").replace(".out()", "") }));
  state.code = [...code.mods, ...code.patterns.filter(e=>e.code.length<300&&e.code.includes("render") == false&&e.code.includes("\n") == false)].map(e => ({ code: e.code.replace(/^[\s]+/, "").replace(".out()", "") }));

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
      
      state.options = [];
    }
    
    if (state.route == "/" || state.route == "tree" || state.route == "simple") {
      // s0.initCam();
      // osc().out()

      let video = html`<video id="webcam" autoplay muted playsinline width="640" height="480"></video>`;
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
            src(s0).scale(1,x).out();
          });
          // streaming = true;
          // state.started = true;
          // emitter.emit("render");
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
    if (state.route == "img") {
      s0.initImage('https://i.ibb.co/LdnQNgY/Cat.png')
      src(s0).out();
    }
  });
}