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
      desc: "traffic lights",
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
  {
    "code": "src(o1)\n  .modulate(\n  osc(Math.PI*2,0,Math.PI/2).scale(1/128)\n  .brightness(-.5).modulate(\n  noise(1,0.02).mult(\n    noise(.3,.01).add(solid(1,1)).color(.5,.5).contrast(3).posterize(3,1).invert())\n    .sub(gradient()),1),.003)\n  .layer(\n  osc(10,0.1,1.5).layer(\n    osc(10,0.1).color(1,1,-1).invert().mask(\n      osc(Math.PI*2,0,Math.PI/2).scale(1/64)\n      .thresh(.5,0).modulate(\n        noise(1,0.02).mult(\n    noise(.3,.01).add(solid(1,1)).color(.5,.5).contrast(3).posterize(3,1).invert())\n        .sub(gradient()),1)\n      .mult(shape(4,.28,0).invert())))\n  .mask(shape(4,.3,0)))\n  .out(o1)\n\nsolid().layer(src(o1)).out()",
    "desc": "borders"
  },
  {
    "code": "osc(6,0,1.5).repeat(20,20)\n  .modulatePixelate(\n  noise(9,.02).pixelate(40,40).thresh(0,.2),40,80)\n  .modulateRotate(\n  noise(32,.02).modulatePixelate(\n    noise(2,.02).pixelate(40,40).add(solid(1,1)).color(.5,.5).posterize(4,2),40,4)\n  .thresh(0),Math.PI/2)\n  .out()\n",
    "desc": "osc grid"
  },
  {
    "code": "osc(160,0,1.5).rotate(Math.PI/4)\n  .modulatePixelate(\n  noise(3,.01).pixelate(8,8).add(solid(1,1)).color(.5,.5)\n  .posterize(16,1),\n  120*16/15,8).out()\n",
    "desc": "pixelate"
  },
  {
    "code": "osc(100, -0.1)\n\t.thresh(0.9, 0)\n\t.mult(noise(20, 1)\n\t\t.thresh())\n\t.mult(noise(5,1).thresh())\n  .add(src(o0)\n\t\t.scrollX(0.001), 0.8)\n\t.out()\n\nsrc(o0).color(1,0.8,0.3).saturate(0.8).out(o1)\n\nrender(o1)",
    "desc": "grains"
  },
  {
    "code": "\nosc(30,0).invert().thresh(.5,0).kaleid(4).rotate(Math.PI/4)\n  .repeat(8,8)\n//   .modulate(\n//   noise(8,0).pixelate(8,8))\n  .mult(noise(8,0).pixelate(8,8).thresh(-.2,0))\n  .modulateScale(noise(4,0).thresh(.1,.2).pixelate(64,64))\n  .modulatePixelate(noise(3,0).thresh(-0.5,.2).pixelate(64,64),1024,64)\n  .scale(1,9/16)\n  .out()",
    "desc": "Tapestry I"
  },
  {
    "code": "src(o1)\n  .modulatePixelate(\n  osc(6,0).color(1,0,0).add(osc(6,0,3.14).g().color(0,1,0))\n  .modulate(noise(3,.02).sub(gradient()),1)\n  .modulatePixelate(\n    osc(6,0).thresh(.2,.1).color(1,0,0).add(osc(6,0,3.14).g().thresh(.2,.1).color(0,1,0))\n    .modulate(noise(3,.02).sub(gradient()),1).pixelate(),1024,8)\n  ,1024,8)\n  .layer(\n  osc(30,0.1,1.5).mask(shape(4,0.3,0).rotate(Math.PI/4))).out(o1)\n\nsolid().layer(o1).out()",
    "desc": "pixelelate"
  },
  {
    "code": "osc(200*Math.PI,0,1.5).mask(shape(4,.75,0).modulate(osc(200*Math.PI,0,1.5).brightness(-.5))).out()",
    "desc": "spiky osc"
  },
  {
    "code": "src(o1).mult(\nosc(Math.PI*2,0).scale(1/8).thresh(.1,0).modulate(\n    noise(2,.01).sub(gradient()),1)\n)\n  .modulate(\n  osc(Math.PI*2,0,Math.PI/2).scale(1/8).brightness(-.5).modulate(\n    noise(2,.01).sub(gradient())\n  ,1),.01)\n.modulatePixelate(\n  osc(Math.PI*2,0,Math.PI/2).r().thresh(.15,0).color(1,0,0).add(\n    osc(Math.PI*2,0,Math.PI).g().thresh(.15,0).color(0,1,0))\n  .scale(.25)\n  .modulate(noise(2,.01).sub(gradient()),1),10240,128)\n.layer(\n  src(o1).mask(\n    osc(24,0).thresh(.9,0).modulate(noise(2,.01).sub(gradient()),1)\n  .mult(src(o1).thresh(0.01,0)))\n  .colorama(.01))\n  .layer(\n  osc(15,0.1,1.5)\n  .mask(\n    shape(4,.3,0))\n)\n  .out(o1)\n\nsolid().layer(o1).out()\n\n",
    "desc": "noise route"
  },
  {
    "code": "\n\nsrc(o1).layer(\n  src(o1).mask(noise(1).thresh(0,0).diff(noise(1).thresh(-.05,0))).hue(.1)\n)\n//.color(.999,.99,.999)\n  .mult(osc(6,0,1.5).modulate(noise(1).sub(gradient()),1),.03)\n  .luma(.05,0)\n  .modulate(\n  osc(Math.PI*2,0,1.5).pixelate(Math.PI*2).brightness(-.5)\n  .modulate(noise(1).sub(gradient()),1),.002)\n  .layer(\n  shape(4,.2,0).r().repeat(80,80)\n    .modulateScale(\n    noise(1).modulate(solid(.1,0),1)\n      .add(solid(1,1)).color(.5,.5).posterize(4,1).contrast(2),-1.34,1)\n  .mult(osc(6,0,1.5))\n  ).out(o1)\n\nsolid().layer(\n  src(o1)).out()\n",
    "desc": "noise"
  },
  {
    "code": "osc(12,0,1.5).modulate(voronoi(6,0.1,.3).sub(gradient()),1)\n  .modulatePixelate(\n  osc(6,0,3.14).r().thresh(.3,.1).color(1,0,0).add(\n    osc(6,0,3.14).g().thresh(.3,.1).color(0,1,0))\n//   .posterize(8,1)\n  .modulate(\n    voronoi(6,0.1,0)//.pixelate(8,8)\n    .sub(gradient()),1)\n  ,1024,16)\n  .out()",
    "desc": "distorted voronoi"
  },
{desc:"blurred grid",code:`solid().layer(osc(Math.PI*0,0,-Math.PI/2-Math.PI*0).brightness(-.5).color(2).color(12.173780938090808)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).color(4.347897987255738)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).color(0.43844718719116904)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).color(0.244553789263864)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).color(4.347897987255742)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-1.56854557845442)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.1854585538179323)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(-0.10250439979092973)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).color(0.438447187191169)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(0.1854585538179323)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(-0.13183367048608075)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(0.040515461221236004)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).color(0.24455378926386423)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-0.10250439979093018)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.04051546122123573)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(-0.01976562927159653)).color(1/8).r().modulate(solid(1,1),-.25).out()
`},

{desc:"crystal",code:`      osc(300,0,1.5).modulateRotate(voronoi(5,0,0),6.28).out()  `},

{desc:"blue flower",code:`gradient().colorama(1)
  .kaleid(8).out()`},

{desc:"rainbow stripes",code:`osc(90,0,1.3).out()`},

{desc:"pink warp",code:`      src(o0).rotate(.01).colorama(-.003).layer(
osc(50, 0.01, 0.7)
  .modulateRotate(osc(30,.03).kaleid(99)).rotate(0,.3).luma(.6,0).color(1, 0, 1)
  ).out()  `},

{desc:"black and white waves",code:`osc(52,0).thresh().kaleid(999)
  .modulate(osc(6,0).color(1,1).contrast(.8),.8)
  .scale(-1)
  .modulate(solid(-.05,-.25),1)
  .scale(.8)
  .mask(shape(4,.5,0))
  .scale(2,9/16)
  .out()`},

{desc:"sandstorm",code:`shape(200, [0, 0.25].smooth(), 0.1)
  .scale(1, 0.5)
  .repeat(20, 20, 0.5,0.5)
.scrollY(0,-0.01)
  .modulateScale(osc(15, 0.5)
    .thresh(0.1, 0.5)
    .diff(osc(5)
      .rotate(0.5)
      .thresh(0.1, 0.5)), -0.5)
  .color([0.2, 0].smooth(), [0.2, 0].smooth(), [0.2, 0].smooth())
.modulate(voronoi(5,0.1,2))
  .add(src(o0), 0.99)
.modulate(o0,-0.003)
.modulateRotate(noise(2,0.1),0.01)
.scrollY(-0.001)
  .out()

src(o0)
.modulate(shape(200,0.2,0.7),-0.05)
  .blend(solid(1, 0.4, 0), 0.13)
    .add(src(o0).scrollX(0.01).thresh(0.15,0.2).color(0.3,1,0).modulate(o1),0.1)
  .blend(noise(300)
  .thresh(), 0.05)
.blend(o1,0.2)
  .out(o1)


render(o1)`},

{desc:"rainbow arch",code:`osc(Math.PI*4,0.1,1.5)
  .modulatePixelate(
  osc(Math.PI*2,0,-Math.PI/2).rotate(Math.PI/2).add(solid(1,1)).color(.5,.5).posterize(80,1).pixelate(1,8000).contrast(10),8,1).out()
`},

{desc:"pixelated gradient",code:`osc(2,0,1.3).rotate().pixelate().out()`},

{desc:"sandstorm 2",code:`shape(200, [0, 0.25].smooth(), 0.1)
  .scale(1, 0.5)
  .repeat(20, 20, 0.5,0.5)
.scrollY(0,-0.01)
  .modulateScale(osc(15, 0.5)
    .thresh(0.1, 0.5)
    .diff(osc(5)
      .rotate(0.5)
      .thresh(0.1, 0.5)), -0.5)
  .color([0.2, 0].smooth(), [0.2, 0].smooth(), [0.2, 0].smooth())
.modulate(voronoi(5,0.1,2))
  .add(src(o0), 0.99)
.modulate(o0,-0.003)
.modulateRotate(noise(2,0.1),0.01)
.scrollY(-0.001)
  .out()

src(o0)
.modulate(shape(200,0.2,0.7),-0.05)
  .blend(solid(1, 0.4, 0), 0.13)
    .add(src(o0).scrollX(0.01).thresh(0.15,0.2).color(0.3,1,0).modulate(o1),0.1)
  .blend(noise(300)
  .thresh(), 0.05)
.blend(o1,0.2)
  .out(o1)


render(o1)`},

{desc:"flying marker",code:`
src(o0).modulate(osc(6,0,1.5).pixelate(8).brightness(-.5)
  .modulate(noise().sub(gradient()),1).pixelate(1,1),.02)
  .modulatePixelate(noise(30,0).thresh(-0.8,.2).pixelate(64,64),1920-64,64)
  .layer(
osc(30,0).invert().thresh(.5,0).kaleid(4).rotate(Math.PI/4)
  .mask(shape(4,.9,0))
  .scale(.1).modulate(
  osc(6,0,1.5).pixelate(8).brightness(-.5)
  .modulate(noise().sub(gradient()),1).pixelate(1,1),.5))
  .out(o0)
`},

{desc:"blue-purple strip bleeding",code:`      src(o0).modulate(osc(6,0,1.5).brightness(-.5).modulate(voronoi(20).luma().sub(gradient()),1),.002).layer(
gradient().add(solid(0,0,1)).scrollY(-.3).mask(shape(2,.1,0))
  ).out()  `},

{desc:"subdividing voronoi",code:`osc(12,0,1.5).modulate(voronoi(6,0.1,.3).sub(gradient()),1)
  .modulatePixelate(
  osc(6,0,3.14).r().thresh(.3,.1).color(1,0,0).add(
    osc(6,0,3.14).g().thresh(.3,.1).color(0,1,0))
  .modulate(
    voronoi(6,0.1,0)//.pixelate(8,8)
    .sub(gradient()),1)
  ,1024,16)
  .out()`},

{desc:"diagnoal shift",code:`  src(o1).mask(shape(4,.1,0).repeat(8,8).invert().scroll(.5/8,.5/8))
  .modulate(
  osc(Math.PI*2,0,Math.PI/2).pixelate(4).brightness(-.5)
  .mask(osc(Math.PI*8,0,Math.PI/2).r().thresh(.2,0))
  .modulate(noise(3).pixelate(8,8).sub(gradient()),1)
  ,.003)
.layer(osc(30,.1,1.5).mask(shape(4,.3,0)))
.out(o1)

solid().layer(
  src(o1)).out()


`},

{desc:"warm color stripes scattered",code:`solid(1,1,1).layer(
  gradient().colorama(3).posterize(4).saturate(15)
  .luma(.36,0)
  .repeat(2,2)
  .modulateScale(noise(4,0.2).pixelate(2,2).thresh(0,1))
  .modulateRotate(noise(9,0.01).pixelate(9,12),Math.PI*2)
).scale(1,9/16).out()


`},

{desc:"circular warped stripes",code:`      src(o0)
  .modulateRotate(gradient().pixelate(2,2).brightness(-0.5)
  ,-0.1)
  .layer(
  osc(30,0.1,.6).mask(shape(1,-.5,0))
  ).out(o0)  `},

{desc:"diagonal repetition",code:`gradient().color(5,5,5).colorama(1).out()`},

{desc:"scratch",code:`
shape(4,0.3,0)
 .add(shape(200,0.3,0).scale(1,0.5).scrollX(0.3))
  .modulate(o1)
.modulate(noise(3,0),0.1)
.modulateRotate(osc(2,0),-0.3)
.scrollX(-0.1)
.out()

osc(30,0).thresh(0.5).rotate(Math.PI/2)
  .modulate(
  noise(8,0).pixelate(16,9).thresh(.5,.2).color(0,1),.2)
  .modulate(
  osc(300,0).thresh(.5,.2).mult(
    osc(30,0).modulate(osc(3,0),1).thresh(.5,.3)),0.02)
  .modulate(osc(10,0).pixelate(4).color(0,1),.2)
  .out(o1)
`},

{desc:"red and blue blobs",code:`osc(12,0,1.5).modulate(noise(3).color(3,3,3).colorama(1).saturate(0).sub(gradient()),1).out()`},

{desc:"yellow surround by red and green rectangles",code:`solid(0,.3,.25).layer(
shape(4,.8,0).r().color(1,0.1,0).scrollY(-.05))
.layer(
shape(4,.6,0).r().color(1,0.5,0).scrollY(-.10))
.layer(
shape(4,.4,0).r().color(.8,.9,.1).scrollY(-.15))
  .mask(shape(4,1,0)).scale(1,9/16).out()
`},

{desc:"purple storm",code:`shape(200, [0, 0.25].smooth(), 0.1)
  .scale(1, 0.5)
  .repeat(20, 20, 0.5,0.5)
.scrollY(0,-0.01)
  .modulateScale(osc(15, 0.5)
    .thresh(0.1, 0.5)
    .diff(osc(5)
      .rotate(0.5)
      .thresh(0.1, 0.5)), -0.5)
  .color([0.2, 0].smooth(), [0.2, 0].smooth(), [0.2, 0].smooth())
.modulate(voronoi(5,0.1,2))
  .add(src(o0), 0.99)
.modulate(o0,-0.003)
.modulateRotate(noise(2,0.1),0.01)
.scrollY(-0.001)
  .out()

src(o0)
.modulate(shape(200,0.2,0.7),-0.05)
  .blend(solid(1, 0.4, 0), 0.13)
    .add(src(o0).scrollX(0.01).thresh(0.15,0.2).color(0.3,1,0).modulate(o1),0.1)
  .blend(noise(300)
  .thresh(), 0.05)
.blend(o1,0.2)
  .out(o1)


render(o1)`},

{desc:"gradient pattern with blobs",code:`
gradient().scale(0.5).repeat(4,4).layer(noise().luma(0.1,0)).out()`},

{desc:"dot mesh with changing color",code:`src(o0).modulate(osc(6,0,1.5).modulate(noise(3).sub(gradient()),1).brightness(-.5),.001).mult(shape(999,.5,0).invert().repeat(100,100,0,.5)).layer(
  osc(6,0,1.5).modulate(osc(1,2).thresh(.5,.1),.5)
  .modulate(osc(1,1).thresh(.5,.1),.2).pixelate(1).mask(
shape(4,0.3,0))
  )
  .modulateScale(osc(6,.2).color(0,1).pixelate(18))
  .modulateRotate(osc(1,1).pixelate(1).thresh(.5,.2).brightness(-.5),Math.PI)
  .modulate(osc(1,.4).thresh(.5,.2).brightness(-.5).color(1,0),.5)
  .modulate(osc(1,.2).thresh(.5,.2).brightness(-.5).color(0,1),.5).out()`},


{desc:"purple swirl",code:`      src(o0).rotate(.01).colorama(-.003).layer(
osc(50, 0.01, 0.7)
  .modulateRotate(osc(30,.03).kaleid(99)).rotate(0,.3).luma(.6,0).color(1, 0, 1)
  ).out()  `},

{desc:"broken grayscale",code:`
noise(14,0).thresh(-0.1,0)
  .modulatePixelate(
  noise(12,0).thresh(0,0.1).pixelate(64,64),64,8)
  .add(noise(14,0).thresh(-0.6,0)
    .modulatePixelate(
    noise(12,0).thresh(0,0.1).pixelate(64,64),64,8)
    .invert()
    .mult(osc(13,0).rotate(Math.PI/2).add(noise(999,0)))
  ).mask(shape(4,1,0)).scale(1,9/16).out()
`},

{desc:"purble bumps",code:`osc(12, 0.05, 1.2)
  .color(-1, 0.4)
  .modulate(osc(30, -0.05)
    .modulate(noise(2), 0.4), 0.14)
    .blend(o0, 0.97)
    .modulateHue(o0, 5)
  .out()`},

{desc:"unstructured rainbow",code:`src(o1)
  .modulate(
  osc(6,0,1.5).modulate(
    noise(3,0.03)
    .sub(gradient()),1).brightness(-.5),.003
).layer(
src(o1).colorama(.03)
  .modulate(
  osc(12,0,1.5).modulate(
    noise(3,0.03).add(solid(1,1)).color(.5,.5).posterize(9,1)
    .sub(gradient()),1).brightness(-.5),.03)
  .mask(
  noise(20,0).pixelate(8,8).thresh(0.4,0))
)
  .layer(
  shape(2,.03,0).r()
  .repeat(8,8)
  .layer(
    shape(2,.03,0).r().rotate(Math.PI/2)
    .repeat(8,8).mask(noise(30,0).pixelate(16,16).thresh(0.5,0))
  )
  .modulateRotate(
    noise(100,0).pixelate(16,16).add(solid(1)).color(.5).posterize(4,1),Math.PI)
  .mult(osc(12,0,1.5))
).out(o1)

src(o1).out()`},

{desc:"pattern grid",code:`osc(160,0).thresh(.9)
  .modulateScale(gradient().g().repeatY(3).posterize(4,1),1,.1)
  .modulate(
  osc(10,0).mult(gradient().g().repeatY(3).posterize(4,1)).color(0,1),.2)
  .modulate(noise(9,0).pixelate(3,3),1)
  .mask(
  shape(4,.9,0).invert().repeat(3,3))
.layer(
osc(160,0).thresh(.9)
  .modulateScale(gradient().g().repeatY(2).posterize(4,1),1,.1)
  .modulate(
  osc(10,0.1).mult(gradient().g().repeatY(2).posterize(4,1)).color(0,1),.2)
  .modulate(noise(19,0).pixelate(3,3),1)
  .mask(
  noise(14,0.1).pixelate(3,3).thresh(0,0).mult(shape(4,.9,0).repeat(3,3)))
).layer(
osc(360,0).rotate(Math.PI/2).thresh(.9)
  .mask(noise(16,0.1).thresh(0)).mask(
  noise(9,0.1).pixelate(3,3).thresh(0,0).mult(shape(4,.9,0).repeat(3,3)))
).layer(
noise(16,0.1).thresh(0).diff(noise(16,0.1).thresh(0.1))
  .mask(
  noise(10,0.1).pixelate(3,3).thresh(0.2,0).mult(shape(4,.9,0).repeat(3,3))))
  .scale(1,9/16).out()
`},

{desc:"blue and yellow soft waves",code:`src(o1)
  .color(.99,.99,.99).luma(.2,0)
  .layer(
  shape(2,.3,0).modulate(osc(Math.PI*2),.1).r().repeat(1,1)
  .modulateScale(noise(3).add(solid(1,1)).color(.5,.5).posterize(4,.5).invert(), -1.3,1)
  .mult(
    osc(4,0,1.5).modulate(
      noise(3).add(solid(1,1)).color(.5,.5).posterize(4,.5).sub(gradient()),1))
)
  .out(o1)

solid().layer(o1).out()

`},

{desc:"rainbow with varying pixelation",code:`osc(160,0,1.5).rotate(Math.PI/4)
  .modulatePixelate(
  noise(3,.01).pixelate(8,8).add(solid(1,1)).color(.5,.5)
  .posterize(16,1),
  120*16/15,8).out()
`},

{desc:"rainbow with pixelation",code:`osc(9,0,1.3).rotate().pixelate().out()`},

{desc:"gradually changing fragmented rainbow",code:`src(o0).layer(
  osc(6,0.03,1.5).colorama(1).pixelate(1)
  .mask(
    noise(999)
    .modulatePixelate(noise(99).pixelate(128,128).thresh(0,.1),128,128)
    .thresh(.2,0))
  .layer(
    osc(6,0.1,1.5).colorama().pixelate(1).mask(
    shape(4,.1,0).modulateScale(osc(1,.2,1.5).pixelate(1).posterize(),2,1)
    .repeat(2,2).mult(osc(.5,1).thresh(.3,0)))
    .modulateScale(osc(2,1).pixelate(1).posterize())
    .modulate(osc(2,1,1.5).pixelate(1).posterize(),1)
    .mask(osc().modulateRotate(osc(1,.1).pixelate(1),6))
  ).scale(1,9/16)
).out()
`},

{desc:"stripes on gradient grid",code:`
gradient().scale(0.5).repeat(4,4).layer(osc().luma(0.5,0)).out()`},

{desc:"blurry smile",code:`solid().layer(solid().add(osc(Math.PI*0,0,-Math.PI/2-Math.PI*0).brightness(-.5).color(2).color(0.49999999999999983)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).color(-0.1352990250365492)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).color(-0.35355339059327356)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).color(-0.32664074121909414)).add(osc(Math.PI*2,0,-Math.PI/2-Math.PI*0.0625).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(0.7557912246191267)).add(osc(Math.PI*2,0,-Math.PI/2-Math.PI*0.0625).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(-0.5879378012096794)).add(osc(Math.PI*2,0,-Math.PI/2-Math.PI*0.0625).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(-0.7382740229434404)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-0.10355339059327369)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.2705980500730987)).add(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(-0.2500000000000004)).add(osc(Math.PI*6,0,-Math.PI/2-Math.PI*0.1875).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-0.5027791722939055)).add(osc(Math.PI*6,0,-Math.PI/2-Math.PI*0.1875).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.1379496896414717)).add(osc(Math.PI*6,0,-Math.PI/2-Math.PI*0.1875).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(0.9589185070785847)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).color(-0.7071067811865471)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(0.1913417161825445)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.4999999999999995)).add(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(0.4619397662556438)).add(osc(Math.PI*10,0,-Math.PI/2-Math.PI*0.3125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-0.566071027885034)).add(osc(Math.PI*10,0,-Math.PI/2-Math.PI*0.3125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.6935199226610735)).add(osc(Math.PI*10,0,-Math.PI/2-Math.PI*0.3125).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(0.08515862891577411)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(0.24999999999999964)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(-0.653281482438188)).add(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(0.6035533905932741)).add(osc(Math.PI*14,0,-Math.PI/2-Math.PI*0.4375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*4,0,-Math.PI/2-Math.PI*0.125).brightness(-.5).color(2)).color(-0.04475410028236648)).add(osc(Math.PI*14,0,-Math.PI/2-Math.PI*0.4375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*8,0,-Math.PI/2-Math.PI*0.25).brightness(-.5).color(2)).color(0.39284747919355045)).add(osc(Math.PI*14,0,-Math.PI/2-Math.PI*0.4375).brightness(-.5).color(2).rotate(Math.PI/2).mult(osc(Math.PI*12,0,-Math.PI/2-Math.PI*0.375).brightness(-.5).color(2)).color(-0.6178415349776548)).color(1/8).r().modulate(solid(1,1),-.28).scale(2).luma(0,0)).out()`},

{desc:"ink-look butterfly",code:`voronoi(199,0.1,2).thresh(.5).add(noise(99,0).thresh(.7)).mult(osc(4,-.3).kaleid(999),.8)
  .mask(
  shape(999)
  .modulate(gradient().pixelate(1,2).brightness(-.5),-.2)
  .modulate(gradient().pixelate(2,1).brightness(-.5),-.5)
).out()

render(o0)`},

{desc:"manga eyes",code:`solid(0,0,0,0)
  .layer(
  shape(999,.55,0.03).sub(shape(999,.5,0)).mult(shape(1,0.2,0).invert())
  .r().color(0,0,0).scale(1,1.3,1))
  .layer(
  shape(999,.51,0.01).sub(shape(999,.5,0)).mult(shape(1,-.45,0))
  .r().color(0,0,0).scale(1,1.2,1))
  .layer(
  shape(999,.5,0)
  .r().mult(
    osc(6,0,1.5)).scale(1,1,1))
  .layer(
  shape(999,.5,0.03).sub(shape(999,.45,0))
  .r().color(0,0,0).scale(1,1,1))
  .layer(shape(999,.2,0).r().mult(osc(10,0).rotate()))
  .repeat(2,1)
  .out(o1)

gradient().add(solid(0,0,1)).layer(o1).out()`},

{desc:"curved color grid",code:`
osc(3,0,1.5).pixelate(4).modulate(noise(3,.01).sub(gradient()),1).mask(
shape(4,.5,.05).repeat(1,1).modulateScale(noise(3,.01).thresh(0,.5).color(1,0),.9,-.95)).out()
`},

{desc:"windows window",code:`src(o1).mask(shape(4,.999,0))
  .modulate(osc(6,.1),.1)
  .hue(.04)
  .layer(
  shape(4,1,0).scale(.3,1.5).r())
  .layer(shape(4,.99,.01).scale(.3,1.5).r())
  .layer(
  shape(4,1,0).scale(.3,1.5).scale(.99,1,.1).scrollY(.133)
  .r().color(0,0,1))
  .layer(
  osc(60,0).modulate(noise(20,0),.3).thresh(0.7).r().mask(
    shape(4,1,0).scale(.3,1.5).scale(.99,.5,.07).mult(shape(4,.7,0).repeat(64,1)))
  .scroll(.1,.133)
  )
  .layer(
  shape(4,1,0).scale(.3,1).scale(.9,.1,.1).scroll(-.208,.133)
  .r().color(.5,.5,.5))
  .layer(
  shape(4,.8,.2).scale(.3,1,.1).scale(.9,.1,.1).rotate(Math.PI/4).scroll(-.208,.133)
  .r().color(0,0,0))
  .layer(
  shape(4,.8,.2).scale(.3,1,.1).scale(.9,.1,.1).rotate(-Math.PI/4).scroll(-.208,.133)
  .r().color(0,0,0))
  .layer(
  osc(60,.1,1.5).mask(
    shape(4,1,0)).modulate(noise(3).mult(osc(1,1).thresh(.5,.3)),.2)
  .scale(.3,1.5).scale(.99,1,.89).scrollY(-.016))
  .out(o1)

solid(0,0,0).layer(o1).out()`},

{desc:"deformed stripes",code:`osc(Math.PI*16,0)
  .modulate(solid(1),-Math.PI/16/2)
  .modulate(noise(3,0),0.03).out()`},

{desc:"slightly deformed stripes",code:`osc(Math.PI*16,0)
  .modulate(solid(1),-Math.PI/16/2)
  .modulate(noise(3,0),0.01).out()`},

{desc:"9 windows",code:`solid(0,1,0).layer(shape(4,1,0).scale(.3,1.5).r())
  .layer(shape(4,.99,.01).scale(.3,1.5).r())
  .layer(shape(4,1,0).scale(.3,1.5).scale(.99,1,.1).scrollY(.133)
         .r().color(0,0,1))
  .layer(osc(60,0).modulate(noise(20,0),.3).thresh(0.7).r().mask(
  shape(4,1,0).scale(.3,1.5).scale(.99,.5,.07).mult(shape(4,.7,0).repeat(64,1)))
         .scroll(.1,.133))
  .layer(shape(4,1,0).scale(.3,1).scale(.9,.1,.1).scroll(-.208,.133)
         .r().color(.6,.6,.6))
  .layer(
  shape(4,.8,.2).scale(.3,1,.1).scale(.9,.1,.1).rotate(Math.PI/4).scroll(-.208,.133)
  .r().color(.1,.1,.1))
  .layer(
  shape(4,.8,.2).scale(.3,1,.1).scale(.9,.1,.1).rotate(-Math.PI/4).scroll(-.208,.133)
  .r().color(.1,.1,.1))
  .layer(solid(0,0,0).mask(shape(4,1,0))
         .scale(.3,1.5).scale(.99,1,.89).scrollY(-.016))
  .out(o2)

osc(180,.03).mask(
  osc(3*Math.PI*Math.sqrt(2),0,Math.PI/4).r().thresh().rotate(Math.PI/4).pixelate(3,3))
  .mult(
  gradient().pixelate(3,3))
  .layer(src(o2).scale(1.75).repeat(3,3).luma(.01,0)).out(o3)

src(o1).mask(shape(4,.999,0))
  .modulate(
  osc(12,0,1.5).brightness(-.5).modulate(voronoi(3,.3,0).sub(gradient()),1),.03)
  .hue(.04)
  .layer(src(o3).mask(src(o3).g().invert().diff(src(o3).r()).thresh(.01,0)))
  .out(o1)

solid().layer(o1).out()
`},

{desc:"rainbow smudge",code:`src(o1).scrollX(-.003).hue(.003).layer(
  shape(1,-0.99,0).rotate(Math.PI/2).r().color(1,0,0)
).out(o1)

src(o1).scrollX(.4).scale(3).pixelate(4).mask(osc(4*Math.PI*2,0).thresh(.1))
  .modulate(
  noise(3,.3).add(noise(6,.3),.5).add(noise(12,.3),.25).add(noise(24,.3),.125)
  .sub(gradient()),1)
  .out()`},

{desc:"rainbow parallax",code:`      src(o0).modulate(
  gradient().brightness(-.5).pixelate(2,2)
  ,-0.1).layer(
osc(50,0.03,1.5).mask(shape(4,0.5,0))
.modulate(osc(1,1).thresh(.5,.3).color(1,0),.5)
).out()  `},

{desc:"bleeding rainbow waves",code:`src(o0).modulate(
  osc(8,0,1.5).brightness(-.5).modulate(osc().sub(gradient()),1),.002).layer(
  osc(60,0.1,1.5)
  .mask(shape(2,0.1,0))).out()`},

{desc:"symbol",code:`src(o1).rotate(Math.PI).scroll(.25,.25)
.add(src(o1).invert().mask(shape(4,.5,0)).rotate(Math.PI/2).scroll(.25,-.25))
.add(src(o1).invert().mask(shape(4,.5,0)).rotate(-Math.PI/2).scroll(-.25,.25))
.add(src(o1).scroll(-.25,-.25))
.mask(shape(4,1,0)).scale(1,9/16).out()

osc(Math.PI*8,0).thresh().rotate(Math.PI/2)
  .modulate(osc(4.6,0).thresh(.5,.1).color(0,1))
  .scrollY(1/8).layer(
osc(Math.PI*16,0).thresh()
  .modulate(shape(999,0.1,0.1).scale(1,2,4))
  .mask(shape(1,0.35,0).rotate(Math.PI/2))
).scroll(.17,.05).mask(shape(4,0.5,0))
.scale(1,1,-1)
  .out(o1)
`},

{desc:"diagonal grid structure",code:`shape(4,.8).repeat(1,1).mult(osc(1,0,1.5))
  .modulateRotate(
  noise(4).pixelate(8,8)
  .add(solid(1,1)).color(.5,.5).posterize(4,1),3.14)
  .modulateScale(
  noise(5).modulatePixelate(
    noise(3).pixelate(8,8).add(solid(1,1)).color(.5,.5).posterize(4,1),8,2)
  .add(solid(1,1)).color(.5,.5).posterize(4,1),-1.2,1)
  .out()
`},

{desc:"rotating triangle lines",code:`
src(o0).modulate(gradient().pixelate(1,2).brightness(-.5),.1).layer(
shape(3,0.4,0).add(shape(3,0.39,0),-1).r().modulateRotate(osc(8,.1).pixelate(16).kaleid(999).thresh(.5,.3),Math.PI)).out()`},

{desc:"rainbow moving blobs",code:`
osc(20,0.02,1.5).mult(osc(30,0)).add(osc(15,0),1.5).saturate(3)
  .modulate(solid(0,1),1)
  .modulateRotate(
  shape(999,0,1).repeat(12,12)
  .mult(noise(12,0).thresh(0,.5).pixelate(12,12))
  .modulateScale(
    noise(2,0.03).thresh(-.3,.5).color(0,1).pixelate(12,1),4,1)
  .add(noise(6,0.03),.3)
  ,2)
  .modulate(solid(0,1),-1)
  .scale(1,9/16).out()
`},

{desc:"green surrounded by yellow and red rectangles",code:`osc(13,0,1.5).color(1,1,.2).pixelate(8).kaleid(4).rotate(Math.PI/4)
  .modulate(shape(4,0,1).posterize(4,1).color(0,1))
  .scale(1,1,-1)
  .mask(shape(4,1,0)).scale(1,9/16).out()
`},

{desc:"broken rotating triangle lines",code:`
solid(0,0,0).layer(
src(o0).modulate(gradient().pixelate(1,2).brightness(-.5),.1))
  .layer(
shape(3,0.4,0).add(shape(3,0.39,0),-1).r().modulateRotate(osc(8,.1).pixelate(16).kaleid(999).thresh(.5,.3),Math.PI)).out()`},

{desc:"oversaturated rainbow",code:`osc(60,0,1.5).colorama().out()`},

{desc:"faded rainbow",code:`osc(6, 0, 0.8)
  .out(o0)`},

  ],
  mods: [
  //   {
  //     desc: "How can I load a cat image? (also check out [how to upload](cat?id=how-to-upload-image))",
  //     code: `
  // // src(s0).out()`,
  //   },
    {
      desc: "normal",
      code: `
  src(s0).out()`,
    },
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
      desc: "red and green",
      code: `
  src(s0).color(1,-1,0).out()`,
    },
    {
      desc: "green and blue",
      code: `
  src(s0).color(0,1,-1).out()`,
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
  src(o0).scale(1.1).layer(src(s0).mask(shape(4,0.5,0))).out()`,
    },
    {
      desc: "swirl",
      code: `
  src(o0).rotate(0.02).scale(1.03).layer(src(s0).scale(0.5).mask(shape(999,0.3,0))).out()`,
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
    {desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).modulate(osc().rotate(1.57)).out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).modulate(osc().rotate(1.57).thresh()).out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).modulate(osc().rotate(1.57).color(1,0)).out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).modulate(osc().rotate(1.57).thresh(0.1,0.1).color(1,0)).out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).hue().out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).hue(0.2).out()"},
{desc:"",code:"osc(6,0,1.5).modulate(src(s0),1).modulate(noise(3)).out()"},
{desc:"",code:"osc(6,0,1.5).modulateScale(osc()).out()"},
{desc:"",code:"osc(6,0,1.5).modulateScale(osc()).modulate(noise(3)).out()"},
{desc:"",code:"osc(6,0,1.5).modulateScale(osc(3,1),2).out()"},
{desc:"",code:"osc(6,0,1.5).modulateScale(osc(3,1),2).modulate(noise(3)).out()"},
{desc:"",code:"src(o0).layer(src(s0).mask(shape(4,0.5,0))).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).layer(src(s0).mask(shape(4,0.5,0))).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).layer(src(s0).mask(shape(4,0.5,0))).modulate(noise(),0.01).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).hue(0.1).layer(src(s0).mask(shape(4,0.5,0))).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).hue(0.1).layer(src(s0).mask(osc(50,0).thresh(.8,0))).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).layer(src(s0).mask(osc(50,0).thresh(.8,0))).out()"},
{desc:"",code:"src(o0).modulate(gradient().brightness(-.5).pixelate(2,2),-0.1).layer(src(s0).mask(osc(50,0).rotate(.79).thresh(.8,0))).out()"},
  ],
};
