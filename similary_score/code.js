var _0x2699a9;var _0x501e82;function preload(){_0x2699a9=loadJSON('movies.json');}function setup(){noCanvas();var _0x5b08bd={};var _0x4ef491=createSelect('');var _0x11657b=createSelect('');for(var _0x26c666=0x0;_0x26c666<_0x2699a9['users']['length'];_0x26c666++){var _0x2ad2ff=_0x2699a9['users'][_0x26c666]['name'];_0x4ef491['option'](_0x2ad2ff);_0x11657b['option'](_0x2ad2ff);_0x5b08bd[_0x2ad2ff]=_0x2699a9['users'][_0x26c666];}var _0x4cbc11=createButton('submit');_0x4cbc11['mousePressed'](_0x425aa0);_0x501e82=createP('');function _0x425aa0(){var _0x51f58a=_0x4ef491['value']();var _0x4e130a=_0x11657b['value']();var _0x327155=_0x5b08bd[_0x51f58a];var _0x46f3fa=_0x5b08bd[_0x4e130a];var _0x44b31e=Object['keys'](_0x327155);var _0x26c666=_0x44b31e['indexOf']('name');_0x44b31e['splice'](_0x26c666,0x1);var _0x1d33e=_0x44b31e['indexOf']('timestamp');_0x44b31e['splice'](_0x1d33e,0x1);var _0x4086cd=0x0;for(var _0x26c666=0x0;_0x26c666<_0x44b31e['length'];_0x26c666++){var _0x5f7f12=_0x44b31e[_0x26c666];var _0x11bf85=_0x327155[_0x5f7f12];var _0x2a1a7e=_0x46f3fa[_0x5f7f12];if(_0x11bf85!=null&&_0x2a1a7e!=null){var _0x3717e1=_0x11bf85-_0x2a1a7e;_0x4086cd+=_0x3717e1*_0x3717e1;}}var _0xfdf934=sqrt(_0x4086cd);var _0x545a97=0x1/(0x1+_0xfdf934);_0x501e82['html'](_0x545a97);}}