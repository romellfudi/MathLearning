class _0x26977e{constructor(_0x31b66e,_0x4ac3f0){this['func']=_0x31b66e;this['dfunc']=_0x4ac3f0;}}let _0x435686=new _0x26977e(_0x264e80=>0x1/(0x1+Math['exp'](-_0x264e80)),_0x42bc1a=>_0x42bc1a*(0x1-_0x42bc1a));let _0x48ee1e=new _0x26977e(_0x1c38a4=>Math['tanh'](_0x1c38a4),_0x461a87=>0x1-_0x461a87*_0x461a87);class _0x488e8f{constructor(_0x140eaa,_0x4e2698,_0x3e1045){this['input_nodes']=_0x140eaa;this['hidden_nodes']=_0x4e2698;this['output_nodes']=_0x3e1045;this['weights_ih']=new _0x572ac5(this['hidden_nodes'],this['input_nodes']);this['weights_ho']=new _0x572ac5(this['output_nodes'],this['hidden_nodes']);this['weights_ih']['randomize']();this['weights_ho']['randomize']();this['bias_h']=new _0x572ac5(this['hidden_nodes'],0x1);this['bias_o']=new _0x572ac5(this['output_nodes'],0x1);this['bias_h']['randomize']();this['bias_o']['randomize']();this['setLearningRate']();this['setActivationFunction']();}['predict'](_0x504b5d){let _0x3f05c9=_0x572ac5['fromArray'](_0x504b5d);let _0x159514=_0x572ac5['multiply'](this['weights_ih'],_0x3f05c9);_0x159514['add'](this['bias_h']);_0x159514['map'](this['activation_function']['func']);let _0x1182c7=_0x572ac5['multiply'](this['weights_ho'],_0x159514);_0x1182c7['add'](this['bias_o']);_0x1182c7['map'](this['activation_function']['func']);return _0x1182c7['toArray']();}['setLearningRate'](_0x479dab=0.1){this['learning_rate']=_0x479dab;}['setActivationFunction'](_0x26f1fc=_0x435686){this['activation_function']=_0x26f1fc;}['train'](_0x44a2d2,_0x59dc86){let _0x5c4fda=_0x572ac5['fromArray'](_0x44a2d2);let _0x10f78b=_0x572ac5['multiply'](this['weights_ih'],_0x5c4fda);_0x10f78b['add'](this['bias_h']);_0x10f78b['map'](this['activation_function']['func']);let _0x55f63a=_0x572ac5['multiply'](this['weights_ho'],_0x10f78b);_0x55f63a['add'](this['bias_o']);_0x55f63a['map'](this['activation_function']['func']);let _0x2c563d=_0x572ac5['fromArray'](_0x59dc86);let _0x1404a3=_0x572ac5['subtract'](_0x2c563d,_0x55f63a);let _0x245c2c=_0x572ac5['map'](_0x55f63a,this['activation_function']['dfunc']);_0x245c2c['multiply'](_0x1404a3);_0x245c2c['multiply'](this['learning_rate']);let _0x3fbfb8=_0x572ac5['transpose'](_0x10f78b);let _0x2092f0=_0x572ac5['multiply'](_0x245c2c,_0x3fbfb8);this['weights_ho']['add'](_0x2092f0);this['bias_o']['add'](_0x245c2c);let _0x194b99=_0x572ac5['transpose'](this['weights_ho']);let _0x3f8425=_0x572ac5['multiply'](_0x194b99,_0x1404a3);let _0x246f10=_0x572ac5['map'](_0x10f78b,this['activation_function']['dfunc']);_0x246f10['multiply'](_0x3f8425);_0x246f10['multiply'](this['learning_rate']);let _0x50b6a8=_0x572ac5['transpose'](_0x5c4fda);let _0x21aa48=_0x572ac5['multiply'](_0x246f10,_0x50b6a8);this['weights_ih']['add'](_0x21aa48);this['bias_h']['add'](_0x246f10);}['serialize'](){return JSON['stringify'](this);}static['deserialize'](_0x182746){if(typeof _0x182746=='string'){_0x182746=JSON['parse'](_0x182746);}let _0x522e3b=new _0x488e8f(_0x182746['input_nodes'],_0x182746['hidden_nodes'],_0x182746['output_nodes']);_0x522e3b['weights_ih']=_0x572ac5['deserialize'](_0x182746['weights_ih']);_0x522e3b['weights_ho']=_0x572ac5['deserialize'](_0x182746['weights_ho']);_0x522e3b['bias_h']=_0x572ac5['deserialize'](_0x182746['bias_h']);_0x522e3b['bias_o']=_0x572ac5['deserialize'](_0x182746['bias_o']);_0x522e3b['learning_rate']=_0x182746['learning_rate'];return _0x522e3b;}}class _0x572ac5{constructor(_0x4c11b4,_0x2d023c){this['rows']=_0x4c11b4;this['cols']=_0x2d023c;this['data']=Array(this['rows'])['fill']()['map'](()=>Array(this['cols'])['fill'](0x0));}static['fromArray'](_0x16f4e6){return new _0x572ac5(_0x16f4e6['length'],0x1)['map']((_0x7c24ec,_0x29dd6a)=>_0x16f4e6[_0x29dd6a]);}static['subtract'](_0x2ceade,_0x3c017d){if(_0x2ceade['rows']!==_0x3c017d['rows']||_0x2ceade['cols']!==_0x3c017d['cols']){console['log']('Columns\x20and\x20Rows\x20of\x20A\x20must\x20match\x20Columns\x20and\x20Rows\x20of\x20B.');return;}return new _0x572ac5(_0x2ceade['rows'],_0x2ceade['cols'])['map']((_0x1f7eed,_0x47cc05,_0x2674af)=>_0x2ceade['data'][_0x47cc05][_0x2674af]-_0x3c017d['data'][_0x47cc05][_0x2674af]);}['toArray'](){let _0x5ce965=[];for(let _0x4767c6=0x0;_0x4767c6<this['rows'];_0x4767c6++){for(let _0x4f0b33=0x0;_0x4f0b33<this['cols'];_0x4f0b33++){_0x5ce965['push'](this['data'][_0x4767c6][_0x4f0b33]);}}return _0x5ce965;}['randomize'](){return this['map'](_0x169820=>Math['random']()*0x2-0x1);}['add'](_0x29de70){if(_0x29de70 instanceof _0x572ac5){if(this['rows']!==_0x29de70['rows']||this['cols']!==_0x29de70['cols']){console['log']('Columns\x20and\x20Rows\x20of\x20A\x20must\x20match\x20Columns\x20and\x20Rows\x20of\x20B.');return;}return this['map']((_0x348698,_0x2a1db1,_0x3f58bf)=>_0x348698+_0x29de70['data'][_0x2a1db1][_0x3f58bf]);}else{return this['map'](_0x165003=>_0x165003+_0x29de70);}}static['transpose'](_0x5c94f2){return new _0x572ac5(_0x5c94f2['cols'],_0x5c94f2['rows'])['map']((_0x2b7d8b,_0x57c33e,_0x1b0f07)=>_0x5c94f2['data'][_0x1b0f07][_0x57c33e]);}static['multiply'](_0x560492,_0x4dd621){if(_0x560492['cols']!==_0x4dd621['rows']){console['log']('Columns\x20of\x20A\x20must\x20match\x20rows\x20of\x20B.');return;}return new _0x572ac5(_0x560492['rows'],_0x4dd621['cols'])['map']((_0x440054,_0x2e6c2c,_0x99aa23)=>{let _0x9a571b=0x0;for(let _0x493e51=0x0;_0x493e51<_0x560492['cols'];_0x493e51++){_0x9a571b+=_0x560492['data'][_0x2e6c2c][_0x493e51]*_0x4dd621['data'][_0x493e51][_0x99aa23];}return _0x9a571b;});}['multiply'](_0x48f47e){if(_0x48f47e instanceof _0x572ac5){if(this['rows']!==_0x48f47e['rows']||this['cols']!==_0x48f47e['cols']){console['log']('Columns\x20and\x20Rows\x20of\x20A\x20must\x20match\x20Columns\x20and\x20Rows\x20of\x20B.');return;}return this['map']((_0x14ef48,_0x965a2c,_0x297422)=>_0x14ef48*_0x48f47e['data'][_0x965a2c][_0x297422]);}else{return this['map'](_0x35d829=>_0x35d829*_0x48f47e);}}['map'](_0x37393d){for(let _0x18b01b=0x0;_0x18b01b<this['rows'];_0x18b01b++){for(let _0x3c384c=0x0;_0x3c384c<this['cols'];_0x3c384c++){let _0x4f4ee3=this['data'][_0x18b01b][_0x3c384c];this['data'][_0x18b01b][_0x3c384c]=_0x37393d(_0x4f4ee3,_0x18b01b,_0x3c384c);}}return this;}static['map'](_0x276261,_0x4307e6){return new _0x572ac5(_0x276261['rows'],_0x276261['cols'])['map']((_0x236a01,_0x12e65c,_0x167939)=>_0x4307e6(_0x276261['data'][_0x12e65c][_0x167939],_0x12e65c,_0x167939));}['print'](){console['table'](this['data']);return this;}['serialize'](){return JSON['stringify'](this);}static['deserialize'](_0x4613df){if(typeof _0x4613df=='string'){_0x4613df=JSON['parse'](_0x4613df);}let _0x263a19=new _0x572ac5(_0x4613df['rows'],_0x4613df['cols']);_0x263a19['data']=_0x4613df['data'];return _0x263a19;}}let _0x4d7b6e;let _0x568daa;let _0x27e6e5=[{'inputs':[0x0,0x0],'outputs':[0x0]},{'inputs':[0x0,0x1],'outputs':[0x1]},{'inputs':[0x1,0x0],'outputs':[0x1]},{'inputs':[0x1,0x1],'outputs':[0x0]}];function setup(){createCanvas(0x190,0x190);_0x4d7b6e=new _0x488e8f(0x2,0x4,0x1);_0x568daa=createSlider(0.01,0.5,0.1,0.01);}function draw(){background(0x0);for(let _0x5eef73=0x0;_0x5eef73<0x64;_0x5eef73++){let _0x16f80c=random(_0x27e6e5);_0x4d7b6e['train'](_0x16f80c['inputs'],_0x16f80c['outputs']);}_0x4d7b6e['setLearningRate'](_0x568daa['value']());let _0x2df676=0xa;let _0x97eb6a=width/_0x2df676;let _0x41254c=height/_0x2df676;for(let _0x5eef73=0x0;_0x5eef73<_0x97eb6a;_0x5eef73++){for(let _0x3c3104=0x0;_0x3c3104<_0x41254c;_0x3c3104++){let _0x2f1c9e=_0x5eef73/_0x97eb6a;let _0x4f9e88=_0x3c3104/_0x41254c;let _0x350a79=[_0x2f1c9e,_0x4f9e88];let _0x2a6345=_0x4d7b6e['predict'](_0x350a79);noStroke();fill(_0x2a6345*0xff);rect(_0x5eef73*_0x2df676,_0x3c3104*_0x2df676,_0x2df676,_0x2df676);}}}