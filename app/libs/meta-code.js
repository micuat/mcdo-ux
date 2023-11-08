export default {
  patterns: [
    {
      desc: "circle",
      code: `
  shape(999).out()`,
    },
    {
      desc: "big circle",
      code: `
  shape(999, 1).out()`,
    },
    {
      desc: "red circle",
      code: `
  shape(999).color(1,0,0).out()`,
    },
    {
      desc: "blue circle on yellow",
      code: `
  solid(1,1,0).layer(shape(999).luma().color(0,0,1)).out()`,
    },
    {
      desc: "blue circle on yellow going up and down",
      code: `
  solid(1,1,0).layer(shape(999).luma().color(0,0,1)).scrollY([-0.3,0.3]).out()`,
    },
    {
      desc: "blue circle on yellow bouncing",
      code: `
  solid(1,1,0).layer(shape(999).luma().color(0,0,1)).scrollY([-0.3,0.3].smooth()).out()`,
    },
    {
      desc: "traffic lights?",
      code: `
  shape(999).color(1,0,0).scrollY(0.3)
    .add(shape(999).color(1,1,0))
    .add(shape(999).color(0,1,0).scrollY(-0.3)).out()`,
    },
    {
      desc: "traffic lights blinking",
      code: `
  shape(999).color([1,0].fast(3),0,0).scrollY(0.3)
    .add(shape(999).color(1,1,0))
    .add(shape(999).color(0,1,0).scrollY(-0.3)).out()`,
    },
    {
      desc: "blend red, blue and green circles",
      code: `
  shape(999).color(1,0,0).scroll(0,0.1)
    .add(shape(999).color(0,0,1).scroll(0.1,0))
    .add(shape(999).color(0,1,0).scroll(-0.1,0)).out()`,
    },
    {
      desc: "moving stripes",
      code: `
  osc().out()`,
    },
    {
      desc: "moving crisp stripes",
      code: `
  osc().thresh().out()`,
    },
    {
      desc: "still stripes",
      code: `
  osc(60,0).thresh().out()`,
    },
    {
      desc: "circle filled with the stripes",
      code: `
  osc(60,0).thresh().mask(shape(999,0.6)).out()`,
    },
    {
      desc: "wavy stripes",
      code: `
  osc().thresh().modulate(osc().rotate(1)).out()`,
    },
    {
      desc: "slightly wavy stripes",
      code: `
  osc().thresh().modulate(osc().rotate(1),0.03).out()`,
    },
    {
      desc: "thinner white stripes",
      code: `
  osc().thresh(0.8).out()`,
    },
    {
      desc: "thinner black stripes",
      code: `
  osc().thresh(0.2).out()`,
    },
    {
      desc: "rings",
      code: `
  osc().kaleid(999).out()`,
    },
    {
      desc: "triangle rings",
      code: `
  osc().kaleid(3).out()`,
    },
    {
      desc: "stripes appearing from the center",
      code: `
  osc(60,-0.1).kaleid(2).rotate(Math.PI/2).out()`,
    },
    {
      desc: "flying dots",
      code: `
  voronoi(10,0.1,10).out()`,
    },
    {
      desc: "hexagon",
      code: `
  shape(6).out()`,
    },
    {
      desc: "square",
      code: `
  shape(4).out()`,
    },
    {
      desc: "rotating square",
      code: `
  shape(4).rotate(0,0.1).out()`,
    },
    {
      desc: "rotating square in 3D",
      code: `
  shape(4).scale(1,()=>Math.sin(time)).out()`,
    },
    {
      desc: "square switch between red and blue",
      code: `
  shape(4).color([1,0],0,[0,1]).out()`,
    },
    {
      desc: "square switch between red and blue with smooth transition",
      code: `
  shape(4).color([1,0].smooth(),0,[0,1].smooth()).out()`,
    },
    {
      desc: "diamond",
      code: `
  shape(4).rotate(3.14/4).out()`,
    },
    {
      desc: "tiled diamonds",
      code: `
  shape(4).repeat(4,4).rotate(3.14/4).out()`,
    },
    {
      desc: "grid of squares",
      code: `
  shape(4,0.4).repeat(8,8).out()`,
    },
    {
      desc: "grid of squares in 3D",
      code: `
  shape(4,0.4).repeat(12,12).modulateScale(gradient().g(),2).out()`,
    },
    {
      desc: "flying over a pink grid in 3D",
      code: `
  shape(4,0.9).repeat(12,12).invert().color(1,0,1).scrollY(0,-0.1)
    .modulateScale(gradient().g(),2).out()`,
    },
    {
      desc: "flying over a pink grid with cyan background in 3D",
      code: `
  solid(0,1,1).layer(
    shape(4,0.9).repeat(12,12).invert().luma().color(1,0,1).scrollY(0,-0.1)
    )
    .modulateScale(gradient().g(),2).out()`,
    },
    {
      desc: "vaporwave grid",
      code: `
  solid(0,1,1).layer(
    shape(4,0.9).repeat(12,12).invert().luma().color(1,0,1)
    )
    .modulate(voronoi(4,0,1).color(0,1),0.3)
    .scrollY(0,-0.1)
    .modulateScale(gradient().g(),2)
    .out()`,
    },
    {
      desc: "grid of alternating squares",
      code: `
  shape(4,0.4).scale(1,1,2).repeat(4,8,.5).out()`,
    },
    {
      desc: "Polka dots",
      code: `
  shape(999,0.5).repeat(4,4).rotate(3.14/4).out()`,
    },
    {
      desc: "red Polka dots on yellow background",
      code: `
  solid(1,1,0).layer(shape(999,0.5).repeat(4,4).rotate(3.14/4).luma().color(1,0,0)).out()`,
    },
    {
      desc: "dots behind a water surface",
      code: `
  shape(999,0.5).repeat(4,4).rotate(3.14/4)
    .modulate(noise(3)).out()`,
    },
    {
      desc: "dots behind ripples",
      code: `
  shape(999,0.5).repeat(4,4).rotate(3.14/4)
    .modulate(osc().kaleid(999)).out()`,
    },
    {
      desc: "move a circle with mouse",
      code: `
  shape(999).scroll(
    ()=>0.5-mouse.x/window.innerWidth,
    ()=>0.5-mouse.y/window.innerHeight).out()`,
    },
    {
      desc: "drawing app",
      code: `
  src(o0).layer(
    shape(999,0.1).scroll(
    ()=>0.5-mouse.x/window.innerWidth,
    ()=>0.5-mouse.y/window.innerHeight).luma()).out()`,
    },
    {
      desc: "drawing app with changing colors",
      code: `
  src(o0).layer(
    shape(999,0.1).scroll(
    ()=>0.5-mouse.x/window.innerWidth,
    ()=>0.5-mouse.y/window.innerHeight).luma().color(1,0,0).hue(()=>time/5)).out()`,
    },
    {
      desc: "circle with chromatic aberration",
      code: `
  shape(999,0.5).color(0,1,1).add(shape(999,0.5).color(1,0,0).scrollX(0.01)).invert().out()`,
    },
    {
      desc: "circle with scan line glitch effect",
      code: `
  shape(999,0.5).color(0,1,1)
    .modulate(noise(999,1).pixelate(1,9999).color(1,0))
    .add(
    shape(999,0.5).color(1,0,0)
     .modulate(noise(998,1).pixelate(1,9999).color(1,0))).out()`,
    },
    {
      desc: "circle with block noise glitch effect",
      code: `
  shape(999,0.5)
    .modulatePixelate(noise(6).thresh(-0.5,0.1).pixelate(8,8),1000,8).out()`,
    },
    {
      desc: "right-angled triangle",
      code: `
  shape(1,0).rotate(3.14/4).out()`,
    },
    {
      desc: "triangle grid",
      code: `
  shape(1,0).rotate(3.14/4).repeat(6,6).out()`,
    },
    {
      desc: "angled grid made of triangles",
      code: `
  shape(3,0.5).repeat(6,6,0.5).out()`,
    },
    {
      desc: "bouncing square with deformation",
      code: `
  shape(4).modulateScrollY(osc(1,1)).out()`,
    },
    {
      desc: "bouncing square without deformation",
      code: `
  shape(4).modulateScrollY(osc(1,1).pixelate(1,1)).out()`,
    },
    {
      desc: "bouncing square chopped into pieces",
      code: `
  shape(4).modulateScrollY(osc(1,1).pixelate(16,1)).out()`,
    },
    {
      desc: "3D cube",
      code: `
  shape(4).scrollY(0.15).modulateScale(gradient().g().color(1,0)).color(0,1,0).mask(shape(4,1)).scale(1,1/1.5,0.5)
    .add(shape(4).scrollY(-0.15).color(1,0,0)).out()`,
    },
    {
      desc: "house",
      code: `
  shape(4).scrollY(0.15).modulateScale(gradient().g().color(1,0)).color(1,.5,0)
    .add(shape(4).scrollY(-0.15).color(1,1,0)).scale(1,1,0.8).out()`,
    },
    {
      desc: "house with a window",
      code: `
  shape(4).scrollY(0.15).modulateScale(gradient().g().color(1,0)).color(1,.5,0)
    .add(shape(4).scrollY(-0.15).color(1,1,0))
    .layer(shape(4,0.1).luma().scrollY(-0.1).color(0,1,1)).scale(1,1,0.8).out()`,
    },
    {
      desc: "easy rainbow",
      code: `
  osc(10,0.1,1.5).out()`,
    },
    {
      desc: "circle with rainbow",
      code: `
  osc(10,0.1,1.5).mask(shape(999,0.6)).out()`,
    },
    {
      desc: "accurate rainbow",
      code: `
  src(o0).hue(0.01).scrollY(0.01).layer(shape(1,-0.9,0).r().color(1,0,0)).out()`,
    },
    {
      desc: "circle inside a square",
      code: `
  shape(4).diff(shape(999)).out()`,
    },
    {
      desc: "Swiss cheese",
      code: `
  shape(4).color(1,1,0).mult(shape(999).repeat(10,10,0.5).invert()).out()`,
    },
    {
      desc: "Pacman",
      code: `
  shape(999).mult(shape(4,0.5).scroll(0.25,0.25).rotate(-3.14/4).invert()).color(1,1,0).out()`,
    },
    {
      desc: "creepy Pacman",
      code: `
  shape(999).mult(shape(4,0.5).scroll(0.25,0.25).rotate(-3.14/4).mask(shape(4,10,0)).modulateScale(osc(10,1).color(0,1),-0.5,1).invert()).color(1,1,0).out()`,
    },
    {
      desc: "creepy Pacman chasing Swiss cheese",
      code: `
  shape(999).mult(shape(4,0.5).scroll(0.25,0.25).rotate(-3.14/4).mask(shape(4,10,0)).modulateScale(osc(10,1).color(0,1),-0.5,1).invert()).color(1,1,0)
    .add(shape(4).color(1,1,0).mult(shape(999).repeat(10,10,0.5).invert()).scale(0.5).rotate(0,0.1).scrollX(0.3)).scrollX(0,0.1).out()`,
    },
    {
      desc: "mouse chasing Swiss cheese",
      code: `
  shape(999,0.2).add(shape(999,0.1).scroll(.1,.1)).add(shape(999,0.1).scroll(-.1,.1))
    .thresh().luma().color(.5,.5,.5).modulateScrollY(osc(0.1,40),0.1)
    .add(shape(4).color(1,1,0).mult(shape(999).repeat(10,10,0.5).invert()).scale(0.5).rotate(0,0.1).scrollX(0.4)).scrollX(0,0.1).out()`,
    },
    {
      desc: "sunny side up",
      code: `
  shape(999,0.5).diff(shape(999,0.3).color(0,0,1)).out()`,
    },
    {
      desc: "sunny side up with salt and pepper",
      code: `
  shape(999,0.5).diff(shape(999,0.3).color(0,0,1))
    .diff(noise(99).thresh(0.9)).out()`,
    },
    {
      desc: "eyes",
      code: `
  shape(999,0.4).diff(shape(999,0.2)).scale(1,2,1)
    .repeat(2,1).out()`,
    },
    {
      desc: "wiggly eyes",
      code: `
  shape(999,0.4).diff(shape(999,0.2).modulateScrollX(osc(1,1),0.1).scrollX(-0.05)).scale(1,2,1)
    .repeat(2,1).out()`,
    },
    {
      desc: "beak",
      code: `
  shape(999).color(1,1,0).mult(shape(2,0.01).invert()).scale(1,2,1).out()`,
    },
    {
      desc: "wiggly eyes and a beak",
      code: `
  shape(999,0.4).diff(shape(999,0.2).modulateScrollX(osc(1,1),0.1).scrollX(-0.05)).scale(1,2,1)
    .repeat(2,1).mask(shape(4,1)).scale(0.5).scrollY(0.1)
    .add(
    shape(999).color(1,1,0).mult(shape(2,0.01).invert()).scale(1,1,0.5).scrollY(-0.1))
    .out()`,
    },
    {
      desc: "chubby bird facing forward",
      code: `
  shape(999).color(0,1,1).layer(
  shape(999,0.2).r().layer(shape(999,0.1).modulateScrollX(osc(1,1),0.05).scrollX(-0.05).r().color(0,0,0)).scale(1,4,1)
    .repeat(4,1).mask(shape(4,0.5)).scale(0.5).scrollY(0.05)
    .add(
    shape(999,0.15).r().color(1,1,0).mult(shape(2,0.01).invert()).scale(1,1,0.5).scrollY(-0.05)))
    .out()`,
    },
    {
      desc: "chubby bird facing right",
      code: `
  shape(999).color(0,1,1).layer(
  shape(999,0.2).r().layer(shape(999,0.1).modulateScrollX(osc(1,1),0.05).scrollX(-0.05).r().color(0,0,0))
    .mask(shape(4,1)).scale(0.5).scroll(-0.05,0.05)
    .add(
    shape(999,0.15).r().color(1,1,0).mult(shape(2,0.01).invert()).scale(1,1,0.5).scroll(-0.1,-0.05)))
    .out()`,
    },
    {
      desc: "chubby bird flapping",
      code: `
  shape(999).color(0,1,1).layer(
  shape(999,0.2).r().layer(shape(999,0.1).modulateScrollX(osc(1,1),0.05).scrollX(-0.05).r().color(0,0,0))
    .mask(shape(4,1)).scale(0.5).scroll(-0.05,0.05)
    .add(
    shape(999,0.15).r().color(1,1,0).mult(shape(2,0.01).invert()).scale(1,1,0.5).scroll(-0.1,-0.05)))
  .modulateScrollY(noise(3,0.4).pixelate(1,1))
    .out()`,
    },
    {
      desc: "flappy bird",
      code: `
  shape(4).repeat(2,1)
    .modulateScrollY(noise(3,0).pixelate(2,1))
    .modulate(solid(0.1,0),()=>time).scrollY(0.5)
  .layer(shape(999).r().color(0,1,1).layer(
  shape(999,0.2).r().layer(shape(999,0.1).modulateScrollX(osc(1,1),0.05).scrollX(-0.05).r().color(0,0,0))
    .mask(shape(4,1)).scale(0.5).scroll(-0.05,0.05)
    .add(
      shape(999,0.15).r().color(1,1,0).mult(shape(2,0.01).invert()).scale(1,1,0.5).scroll(-0.1,-0.05)))
  .modulateScrollY(noise(3,0).modulate(solid(0.1,0),()=>time).pixelate(1,1)))
    .out()`,
    },
  ],
  mods: [
  //   {
  //     desc: "How can I load a cat image? (also check out [how to upload](cat?id=how-to-upload-image))",
  //     code: `
  // // src(s0).out()`,
  //   },
    {
      desc: "pixelate",
      code: `
  src(s0).pixelate(16,16).out()`,
    },
    {
      desc: "grayscale",
      code: `
  src(s0).saturate(0).out()`,
    },
    {
      desc: "black and white",
      code: `
  src(s0).thresh().out()`,
    },
    {
      desc: "red and blue",
      code: `
  src(s0).color(1,0,-1).out()`,
    },
    {
      desc: "invert color",
      code: `
  src(s0).invert().out()`,
    },
    {
      desc: "rainbow color",
      code: `
  osc(30,0.1,1.5).layer(src(s0).luma()).out()`,
    },
    {
      desc: "completely change the color",
      code: `
  src(s0).colorama(0.2).out()`,
    },
    {
      desc: "wavy",
      code: `
  src(s0).modulate(osc().rotate(3.14/2),0.02).out()`,
    },
    {
      desc: "underwater",
      code: `
  src(s0).modulate(noise(6),0.03).out()`,
    },
    {
      desc: "kaleidoscopic",
      code: `
  src(s0).scrollY(0,.1).kaleid(4).out()`,
    },
  //   {
  //     desc: "Can the cat follow the mouse?",
  //     code: `
  // src(s0).scroll(
  //   ()=>0.5-mouse.x/window.innerWidth,
  //   ()=>0.5-mouse.y/window.innerHeight).out()`,
  //   },
  //   {
  //     desc: "No, I mean the cat chasing the mouse!",
  //     code: `
  // src(s0).modulateScrollY(osc(0.1,30),0.1).layer(
  //   shape(999,0.2).add(shape(999,0.1).scroll(.1,.1)).add(shape(999,0.1).scroll(-.1,.1))
  //   .scroll(.2,-.2).thresh().luma().color(.5,.5,.5).modulateScrollY(osc(0.1,40),0.1)).scrollX(0,0.1).out()`,
  //   },
    {
      desc: "upside down",
      code: `src(s0).rotate(3.14).out()`,
    },
    {
      desc: "rotate",
      code: `
  src(s0).rotate(0,0.1).out()`,
    },
    {
      desc: "grid",
      code: `
  src(s0).scale(2).repeat(10,10).out()`,
    },
    {
      desc: "chubby",
      code: `
  src(s0).modulateScale(shape(999,0,1)).out()`,
    },
    {
      desc: "chubby and dance",
      code: `
  src(s0).modulateScale(shape(999,0,1)).modulate(osc(2,1).rotate(Math.PI/2)).out()`,
    },
    {
      desc: "weird enlarge",
      code: `
  src(s0).modulateScale(src(s0).pixelate(32,32).thresh(),-1,2).out()`,
    },
    {
      desc: "rainbow",
      code: `
  osc(6,0,1.5).modulate(src(s0),1).out()`,
    },
    {
      desc: "tunnel vision",
      code: `
  src(o0).scale(1.1).layer(src(s0).mask(shape(4))).out()`,
    },
    {
      desc: "swirl",
      code: `
  src(o0).rotate(0.02).scale(1.03).layer(src(s0).mask(shape(999))).out()`,
    },
    {
      desc: "party",
      code: `
  src(s0).color(1,1,0).hue(()=>time/5).out()`,
    },
    {
      desc: "dance and party",
      code: `
  src(s0).color(1,1,0).hue(()=>time/5).modulate(osc(3,1,1.5),0.3).out()`,
    },
    {
      desc: "slot machine",
      code: `
  src(s0).repeat(3,3).modulateScrollY(osc(1,2).pixelate(3,1),1).out()`,
    },
  //   {
  //     desc: "How can I draw letters?",
  //     code: `
  // c=document.createElement("canvas")
  // c.width=c.height=400
  // s1.init({src:c})
  // c=c.getContext("2d")
  // c.fillStyle="white"
  // c.fillRect(0,0,400,400)
  // c.fillStyle="black"
  // c.font="100px serif"
  // c.textAlign="center"
  // c.fillText("hallo", 200, 200);
  // src(s1).out()`,
  //   },
  //   {
  //     desc: "How can I make wavy letters?",
  //     code: `
  // c=document.createElement("canvas")
  // c.width=c.height=400
  // s1.init({src:c})
  // c=c.getContext("2d")
  // c.fillStyle="white"
  // c.fillRect(0,0,400,400)
  // c.fillStyle="black"
  // c.font="100px serif"
  // c.textAlign="center"
  // c.fillText("hallo", 200, 200);
  // src(s1).modulate(noise(3)).out()`,
  //   },
  //   {
  //     desc: "How can I make rainbow letters?",
  //     code: `
  // c=document.createElement("canvas")
  // c.width=c.height=400
  // s1.init({src:c})
  // c=c.getContext("2d")
  // c.fillStyle="white"
  // c.fillRect(0,0,400,400)
  // c.fillStyle="black"
  // c.font="100px serif"
  // c.textAlign="center"
  // c.fillText("hallo", 200, 200);
  // osc(6,0.1,1.5).mask(src(s1).invert()).out()`,
  //   },
  //   {
  //     desc: "How can I change letters?",
  //     code: `
  // c=document.createElement("canvas")
  // c.width=c.height=400
  // s1.init({src:c})
  // c=c.getContext("2d")
  // update=()=>{
  //   c.fillStyle="white"
  //   c.fillRect(0,0,400,400)
  //   c.fillStyle="black"
  //   c.font="100px serif"
  //   c.textAlign="center"
  //   c.fillText(["hallo","ciao"][Math.floor(time)%2], 200, 200);
  // }
  // osc(6,0.1,1.5).mask(src(s1).invert()).out()`,
  //   },
  //   {
  //     desc: "Can the letters fly?",
  //     code: `
  // c=document.createElement("canvas")
  // c.width=c.height=400
  // s1.init({src:c})
  // c=c.getContext("2d")
  // update=()=>{
  //   c.fillStyle="white"
  //   c.fillRect(0,0,400,400)
  //   c.fillStyle="black"
  //   c.font="100px serif"
  //   c.textAlign="center"
  //   c.fillText(["hallo","ciao"][Math.floor(time)%2], 200, 200);
  // }
  // src(o0).scroll([-0.01,0,0.01],-0.01).layer(
  // osc(6,0.1,1.5).mask(src(s1).invert())).out()`,
  //   },
  ],
};
