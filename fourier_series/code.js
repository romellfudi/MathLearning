let _0x1b6c51=0x0;let _0x4d2d8b=[];let _0xe4cfe7;function setup(){createCanvas(0x258,0x190);_0xe4cfe7=createSlider(0x1,0xa,0x5);}function draw(){background(0x0);translate(0x96,0xc8);let _0x55407f=0x0;let _0x5ebe75=0x0;for(let _0x5a222f=0x0;_0x5a222f<_0xe4cfe7['value']();_0x5a222f++){let _0x1e2f96=_0x55407f;let _0x3eb953=_0x5ebe75;let _0x12f4e5=_0x5a222f*0x2+0x1;let _0x5b839c=0x4b*(0x4/(_0x12f4e5*PI));_0x55407f+=_0x5b839c*cos(_0x12f4e5*_0x1b6c51);_0x5ebe75+=_0x5b839c*sin(_0x12f4e5*_0x1b6c51);stroke(0xff,0x64);noFill();ellipse(_0x1e2f96,_0x3eb953,_0x5b839c*0x2);stroke(0xff);line(_0x1e2f96,_0x3eb953,_0x55407f,_0x5ebe75);}_0x4d2d8b['unshift'](_0x5ebe75);translate(0xc8,0x0);line(_0x55407f-0xc8,_0x5ebe75,0x0,_0x4d2d8b[0x0]);beginShape();noFill();for(let _0x37add8=0x0;_0x37add8<_0x4d2d8b['length'];_0x37add8++){vertex(_0x37add8,_0x4d2d8b[_0x37add8]);}endShape();_0x1b6c51+=0.05;if(_0x4d2d8b['length']>0xfa){_0x4d2d8b['pop']();}}