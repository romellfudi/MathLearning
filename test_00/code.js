var _0x38df=['drawing','length','https://quickdrawfiles.appspot.com/drawing/cat?isAnimated=false&format=json&key=','AIzaSyCLxdiMV5-46xuFWFbdDhVoJi7DMwe-H9Q'];(function(_0x1c375d,_0x2a20fd){var _0x38cead=function(_0x18b86f){while(--_0x18b86f){_0x1c375d['push'](_0x1c375d['shift']());}};_0x38cead(++_0x2a20fd);}(_0x38df,0x17e));var _0x2966=function(_0x2c648b,_0x13ebb2){_0x2c648b=_0x2c648b-0x0;var _0xe91624=_0x38df[_0x2c648b];return _0xe91624;};const url=_0x2966('0x0');let strokeIndex=0x0;let index=0x0;let cat;let prevx,prevy;let keyInput;let start;function setup(){createCanvas(0xff,0xff);newCat();}function newCat(){let _0x5ca696=_0x2966('0x1');loadJSON(url+_0x5ca696,gotCat);}function gotCat(_0x5c86d3){background(0xdc);cat=_0x5c86d3[_0x2966('0x2')];}function draw(){if(cat){let _0x3a1e39=cat[strokeIndex][0x0][index];let _0xdd392b=cat[strokeIndex][0x1][index];stroke(0x0);strokeWeight(0x3);if(prevx!==undefined){line(prevx,prevy,_0x3a1e39,_0xdd392b);}index++;if(index===cat[strokeIndex][0x0][_0x2966('0x3')]){strokeIndex++;prevx=undefined;prevy=undefined;index=0x0;if(strokeIndex===cat[_0x2966('0x3')]){cat=undefined;strokeIndex=0x0;setTimeout(newCat,0x64);}}else{prevx=_0x3a1e39;prevy=_0xdd392b;}}}