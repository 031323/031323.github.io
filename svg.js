const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('/usr/share/fonts/TTF/Sanskrit2003.ttf');

const attributes = {fill: 'black', stroke: 'none'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

const svg = textToSVG.getSVG('सु॒वाक्।', options);
var fs = require('fs');
fs.writeFile('1.svg',svg,(e)=>{console.log(e);});
