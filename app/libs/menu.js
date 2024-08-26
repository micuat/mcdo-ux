const items = [
  {
    id: "bigmac",
    name: "Big Mac",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/bigmac.png?v=1723614406350"
  },
  {
    id: "quarterpounder",
    name: "Quarter Pounder",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/quaterpounder.png?v=1723614412005"
  },
  {
    id: "cheeseburger",
    name: "Cheeseburger",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/cheeseburger.png?v=1723614407227"
  },
  {
    id: "filetofish",
    name: "Filet-O-Fish",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/filetofish.png?v=1723614408590"
  },
  {
    id: "mcdouble",
    name: "McDouble",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcdouble.png?v=1723614411230"
  },
  {
    id: "mcchicken",
    name: "McChiken",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcchicken.png?v=1723614409836"
  },
  {
    id: "mccrispy",
    name: "McCrispy",
    type: "burger",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mccrispy.png?v=1723614410713"
  },
  {
    id: "worldfamousfries",
    name: "World Famous Fries",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/worldfamousfries.png?v=1723614413673"
  },
  {
    id: "ketchup",
    name: "Ketchup",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/ketchuppacket.png?v=1723614409214"
  },
  {
    id: "spicybuffalosauce",
    name: "Spicy Buffalo Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/spicybuffalosauce.png?v=1723614412567"
  },
  {
    id: "barbequesauce",
    name: "Barbeque Sauce",
    type: "side",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/tangybarbequesauce.png?v=1723614413086"
  },
  {
    id: "chickenmcnuggets",
    name: "Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/chickenmcnuggets.png?v=1723614407823"
  },
  {
    id: "tenpiecechickenmcnuggets",
    name: "10 Piece Chicken McNuggets",
    type: "mcnugget",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/10piecechickenmcnuggets.png?v=1723614404301"
  },
  {
    id: "osc",
    name: "OSC",
    type: "source",
    code: "osc(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/osc.png?v=1723643856940"
  },
  {
    id: "noise",
    name: "Noise",
    type: "source",
    code: "noise(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/noise.png?v=1723643856940"
  },
  {
    id: "voronoi",
    name: "Voronoi",
    type: "source",
    code: "voronoi(()=>window.slider0*29+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/voronoi.png?v=1723643856940"
  },
  {
    id: "camera",
    name: "Camera",
    type: "source",
    code: "src(s0).scale(()=>window.slider0+0.5, window.x)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/cam.png?v=1723643856940"
  },
];

const tabs = [
  {
    type: "burger",
    name: "Burgers",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/burger.jpg?v=1723615402488",
  },
  {
    type: "side",
    name: "Sides",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/sides.jpg?v=1723615401807",
  },
  {
    type: "mcnugget",
    name: "McNuggets",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/mcnuggetsandmeals.jpg?v=1723615402144",
  },
  {
    type: "source",
    name: "Sources",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/source.png?v=1723643700775",
  },
]

const recommends = [
  {
    id: "kaleid",
    name: "Kaleid",
    type: "recommend",
    code: "scale(.5).kaleid(()=>window.slider2*7+1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/kaleid.png?v=1723836783044",
    eq: "x*7+1",
  },
  {
    id: "colorama",
    name: "Colorama",
    type: "recommend",
    code: "colorama(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/colorama.png?v=1723836781098",
    eq: "x",
  },
  {
    id: "contrast",
    name: "Contrast",
    type: "recommend",
    code: "contrast(()=>window.slider2*5)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/contrast.png?v=1723837863441",
    eq: "x*5",
  },
  {
    id: "invert",
    name: "Invert",
    type: "recommend",
    code: "invert(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/invert.png?v=1723837863441",
    eq: "x",
  },
  {
    id: "hue",
    name: "Hue",
    type: "recommend",
    code: "hue(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/hue.png?v=1724060663740",
    eq: "x",
  },
  {
    id: "pixelate",
    name: "Pixelate",
    type: "recommend",
    code: "pixelate(()=>window.slider2*64,()=>window.slider2*64)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/pixelate.png?v=1723837863441",
    eq: "x*64",
  },
  {
    id: "posterize",
    name: "Posterize",
    type: "recommend",
    code: "posterize(()=>window.slider2*8,1)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/posterize.png?v=1723837863441",
    eq: "x*8",
  },
  {
    id: "scrollx",
    name: "ScrollX",
    type: "recommend",
    code: "scrollX(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/scrollx.png?v=1723837863441",
    eq: "x",
  },
  {
    id: "scrolly",
    name: "ScrollY",
    type: "recommend",
    code: "scrollY(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/scrolly.png?v=1723837863441",
    eq: "x",
  },
  {
    id: "rotate",
    name: "Rotate",
    type: "recommend",
    code: "rotate(0,()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/rotate.png?v=1723837863441",
    eq: "x",
  },
  {
    id: "thresh",
    name: "Thresh",
    type: "recommend",
    code: "thresh(()=>window.slider2)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/thresh.png?v=1723837863441",
    eq: "x",
  },
  {
    id: "saturate",
    name: "Saturate",
    type: "recommend",
    code: "saturate(()=>window.slider2*10)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/saturate.png?v=1723837863441",
    eq: "x*10",
  },
  {
    id: "repeat",
    name: "Repeat",
    type: "recommend",
    code: "repeat(()=>window.slider2*12,()=>window.slider2*12)",
    url: "https://cdn.glitch.global/09ba2dc1-e5a4-4f5a-a0ca-3b8ac5b81d42/repeat.png?v=1723837863441",
    eq: "x*12",
  },
]

export { items, tabs, recommends }