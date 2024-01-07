import html from "choo/html";
import Component from "choo/component";

export default class extends Component {
  constructor(id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.state = state
    this.emit = emit
  }

  load(element) {
    this.span = element//.querySelector("span");
    // this.state.emitter.on("new prompt", ({ prompt }) => {
    //   this.span.innerText = prompt;
    // });
    this.textTween(this.prompt)
  }

  update(state, emit, prompt) {
    this.prompt = prompt;
    this.textTween(this.prompt)
    // if (prompt === undefined) prompt = "";
    // // this.span.innerText = prompt;
    // this.textTween(prompt);
    // if (fontSize != undefined) {
    //   this.span.style.fontSize = fontSize;
    // }
    return false;
  }

  createElement(state, emit, prompt) {
    this.prompt = prompt;
    
    return html`
    <span class="" style="line-break: anywhere;"></span>
    `
  }

  textTween(target) {
    if (this.tweening == true) {
      return;
    }
    if (target == "") {
      this.span.innerText = "";
      return;
    }
    
    if (this.span.innerText == target) {
      console.log("same, skipping", target)
      return;
    }
    
    // this.span.innerText = "";
    const org = this.span.innerText;
    let text = org;
    // if (org == target) {
    //   return;
    // }
  
    this.tweening = true;
    let state = "type";
    const step = () => {
      if (state === "type") {
        text = text + target[text.length];
        if (text.length == target.length) {
          state = "done";
          this.tweening = false;
          if (this.doneCallback) {
            this.doneCallback();
          }
        }
      }
      this.span.innerText = text;
      this.emit("DOMTitleChange", text.length ? text : "　");
      if (state !== "done") {
        setTimeout(step, 20);
      }
    }
    setTimeout(step, 20);
  }
}
