const items = [
  {
    id: "bigmac",
    name: "Big Mac",
    type: "burger",
    url: "/bigmac.png"
  },
  {
    id: "quarterpounder",
    name: "Quarter Pounder",
    type: "burger",
    url: "/quaterpounder.png"
  },
  {
    id: "cheeseburger",
    name: "Cheeseburger",
    type: "burger",
    url: "/cheeseburger.png"
  },
  {
    id: "filetofish",
    name: "Filet-O-Fish",
    type: "burger",
    url: "/filetofish.png"
  },
  {
    id: "mcdouble",
    name: "McDouble",
    type: "burger",
    url: "/mcdouble.png"
  },
  {
    id: "mcchicken",
    name: "McChiken",
    type: "burger",
    url: "/mcchicken.png"
  },
  {
    id: "mccrispy",
    name: "McCrispy",
    type: "burger",
    url: "/mccrispy.png"
  },
  {
    id: "worldfamousfries",
    name: "World Famous Fries",
    type: "side",
    url: "/worldfamousfries.png"
  },
  {
    id: "ketchup",
    name: "Ketchup",
    type: "side",
    url: "/ketchuppacket.png"
  },
  {
    id: "spicybuffalosauce",
    name: "Spicy Buffalo Sauce",
    type: "side",
    url: "/spicybuffalosauce.png"
  },
  {
    id: "barbequesauce",
    name: "Barbeque Sauce",
    type: "side",
    url: "/tangybarbequesauce.png"
  },
  {
    id: "chickenmcnuggets",
    name: "Chicken McNuggets",
    type: "mcnugget",
    url: "/chickenmcnuggets.png"
  },
  {
    id: "tenpiecechickenmcnuggets",
    name: "10 Piece Chicken McNuggets",
    type: "mcnugget",
    url: "/10piecechickenmcnuggets.png"
  },
  {
    id: "osc",
    name: "OSC",
    type: "source",
    code: "osc(()=>window.slider0*29+1)",
    url: "/osc.png"
  },
  {
    id: "noise",
    name: "Noise",
    type: "source",
    code: "noise(()=>window.slider0*29+1)",
    url: "/noise.png"
  },
  {
    id: "voronoi",
    name: "Voronoi",
    type: "source",
    code: "voronoi(()=>window.slider0*29+1)",
    url: "/voronoi.png"
  },
  {
    id: "camera",
    name: "Camera",
    type: "source",
    code: "src(s0).scale(()=>window.slider0+0.5, window.x)",
    url: "/cam.png"
  },
];

const tabs = [
  {
    type: "burger",
    name: "Burgers",
    url: "/burger.jpg",
  },
  {
    type: "side",
    name: "Sides",
    url: "/sides.jpg",
  },
  {
    type: "mcnugget",
    name: "McNuggets",
    url: "/mcnuggetsandmeals.jpg",
  },
  {
    type: "source",
    name: "Sources",
    url: "/source.png",
  },
]

const recommends = [
  {
    id: "kaleid",
    name: "Kaleid",
    type: "recommend",
    code: "scale(.5).kaleid(()=>window.slider2*7+1)",
    url: "/kaleid.png",
    eq: "x*7+1",
  },
  {
    id: "colorama",
    name: "Colorama",
    type: "recommend",
    code: "colorama(()=>window.slider2)",
    url: "/colorama.png",
    eq: "x",
  },
  {
    id: "contrast",
    name: "Contrast",
    type: "recommend",
    code: "contrast(()=>window.slider2*5)",
    url: "/contrast.png",
    eq: "x*5",
  },
  {
    id: "invert",
    name: "Invert",
    type: "recommend",
    code: "invert(()=>window.slider2)",
    url: "/invert.png",
    eq: "x",
  },
  {
    id: "hue",
    name: "Hue",
    type: "recommend",
    code: "hue(()=>window.slider2)",
    url: "/hue.png",
    eq: "x",
  },
  {
    id: "pixelate",
    name: "Pixelate",
    type: "recommend",
    code: "pixelate(()=>window.slider2*64,()=>window.slider2*64)",
    url: "/pixelate.png",
    eq: "x*64",
  },
  {
    id: "posterize",
    name: "Posterize",
    type: "recommend",
    code: "posterize(()=>window.slider2*8,1)",
    url: "/posterize.png",
    eq: "x*8",
  },
  {
    id: "scrollx",
    name: "ScrollX",
    type: "recommend",
    code: "scrollX(0,()=>window.slider2)",
    url: "/scrollx.png",
    eq: "x",
  },
  {
    id: "scrolly",
    name: "ScrollY",
    type: "recommend",
    code: "scrollY(0,()=>window.slider2)",
    url: "/scrolly.png",
    eq: "x",
  },
  {
    id: "rotate",
    name: "Rotate",
    type: "recommend",
    code: "rotate(0,()=>window.slider2)",
    url: "/rotate.png",
    eq: "x",
  },
  {
    id: "thresh",
    name: "Thresh",
    type: "recommend",
    code: "thresh(()=>window.slider2)",
    url: "/thresh.png",
    eq: "x",
  },
  {
    id: "saturate",
    name: "Saturate",
    type: "recommend",
    code: "saturate(()=>window.slider2*10)",
    url: "/saturate.png",
    eq: "x*10",
  },
  {
    id: "repeat",
    name: "Repeat",
    type: "recommend",
    code: "repeat(()=>window.slider2*12,()=>window.slider2*12)",
    url: "/repeat.png",
    eq: "x*12",
  },
]

export { items, tabs, recommends }