//Codígo creado por DAVID CHIAN!! PERRAS wa.me/5351524614
const _0x383113=_0x5b0c;(function(_0x54c11b,_0x34eef2){const _0x52abed=_0x5b0c,_0x190c6c=_0x54c11b();while(!![]){try{const _0x564173=parseInt(_0x52abed(0xfe))/0x1*(parseInt(_0x52abed(0x101))/0x2)+-parseInt(_0x52abed(0xf3))/0x3+-parseInt(_0x52abed(0x114))/0x4+parseInt(_0x52abed(0xfa))/0x5+-parseInt(_0x52abed(0xe5))/0x6*(parseInt(_0x52abed(0xde))/0x7)+parseInt(_0x52abed(0x10a))/0x8*(parseInt(_0x52abed(0xee))/0x9)+-parseInt(_0x52abed(0xf2))/0xa;if(_0x564173===_0x34eef2)break;else _0x190c6c['push'](_0x190c6c['shift']());}catch(_0x1193fa){_0x190c6c['push'](_0x190c6c['shift']());}}}(_0x2dae,0x4bfdb));import _0x5cde1b from'fs';function _0x5b0c(_0x508488,_0x5a40ad){const _0x2dae3c=_0x2dae();return _0x5b0c=function(_0x5b0cf1,_0x1d327e){_0x5b0cf1=_0x5b0cf1-0xdd;let _0x1c0126=_0x2dae3c[_0x5b0cf1];return _0x1c0126;},_0x5b0c(_0x508488,_0x5a40ad);}const obtenerDatos=()=>{const _0x253e2f=_0x5b0c;return _0x5cde1b[_0x253e2f(0xdf)](_0x253e2f(0x107))?JSON[_0x253e2f(0xe9)](_0x5cde1b[_0x253e2f(0x111)](_0x253e2f(0x107),_0x253e2f(0x115))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x3cf148=>{const _0x1628e7=_0x5b0c;_0x5cde1b[_0x1628e7(0x10c)]('data.json',JSON[_0x1628e7(0x10d)](_0x3cf148,null,0x2));};let handler=async(_0x53b804,{conn:_0x4d88da})=>{const _0x35a8cc=_0x5b0c;if(!_0x53b804[_0x35a8cc(0xec)])return;let _0x3823c1=_0x53b804['sender'],_0x1bd018=await _0x4d88da[_0x35a8cc(0xe2)](_0x3823c1),_0xdf9251=_0x53b804[_0x35a8cc(0xec)][_0x35a8cc(0x116)]['match'](/<id:(.*)>/)?.[0x1];console[_0x35a8cc(0x102)](_0x35a8cc(0x110),_0x3823c1),console[_0x35a8cc(0x102)](_0x35a8cc(0xe0),_0xdf9251),console[_0x35a8cc(0x102)](_0x35a8cc(0x10e),_0x1bd018);let _0x5c1c92=obtenerDatos();if(!_0xdf9251)return;let _0x2bf01b=_0x5c1c92['personajesReservados'][_0x35a8cc(0xfc)](_0x4bf1f6=>_0x4bf1f6['id']===_0xdf9251);if(!_0x2bf01b){_0x4d88da[_0x35a8cc(0xe1)](_0x53b804[_0x35a8cc(0xea)],_0x35a8cc(0xf8),_0x53b804,{'mentions':[_0x3823c1]});return;}const _0x2fcff0=()=>{const _0x40c5bb=_0x35a8cc;try{const _0x2aea11=JSON[_0x40c5bb(0xe9)](_0x5cde1b['readFileSync'](_0x40c5bb(0xf6),_0x40c5bb(0x115)));if(_0x2aea11['name']!==_0x40c5bb(0xe7))return![];if(_0x2aea11['repository']['url']!=='git+https://github.com/Dev-Diego/Bot-Tiburon-MD.git')return![];return!![];}catch(_0x4d8bac){return console[_0x40c5bb(0xf9)](_0x40c5bb(0xff),_0x4d8bac),![];}};if(!_0x2fcff0()){await _0x4d88da['reply'](_0x53b804[_0x35a8cc(0xea)],_0x35a8cc(0x104),_0x53b804,rcanal);return;}let _0x5641f1=_0x5c1c92[_0x35a8cc(0x108)][_0x2bf01b['userId']]&&_0x5c1c92['usuarios'][_0x2bf01b[_0x35a8cc(0xef)]]['characters'][_0x35a8cc(0xe8)](_0x2bf01b[_0x35a8cc(0xe6)]);if(_0x5641f1){let _0x5b7209=_0x2bf01b[_0x35a8cc(0xef)],_0x147c43=await _0x4d88da[_0x35a8cc(0xe2)](_0x5b7209);_0x4d88da[_0x35a8cc(0xe1)](_0x53b804[_0x35a8cc(0xea)],_0x35a8cc(0xf5)+_0x2bf01b[_0x35a8cc(0xe6)]+_0x35a8cc(0xeb)+_0x147c43,_0x53b804,{'mentions':[_0x3823c1,_0x5b7209]}),_0x4d88da[_0x35a8cc(0x105)](_0x5b7209,{'image':{'url':_0x2bf01b[_0x35a8cc(0xf1)]},'caption':_0x35a8cc(0xe3)+_0x2bf01b[_0x35a8cc(0xe6)]+_0x35a8cc(0x10b)},{'quoted':_0x53b804});return;}!_0x5c1c92[_0x35a8cc(0x108)][_0x3823c1]&&(_0x5c1c92['usuarios'][_0x3823c1]={'characterCount':0x0,'totalRwcoins':0x0,'lastUsedTime':0x0,'characters':[]});let _0x420e12=_0x5c1c92['usuarios'][_0x3823c1];_0x420e12[_0x35a8cc(0xed)][_0x35a8cc(0xf7)](_0x2bf01b[_0x35a8cc(0xe6)]),_0x420e12[_0x35a8cc(0x112)]++,_0x420e12[_0x35a8cc(0x113)]+=_0x2bf01b[_0x35a8cc(0xfb)],_0x5c1c92[_0x35a8cc(0x108)][_0x3823c1]=_0x420e12,_0x5c1c92[_0x35a8cc(0x106)]=_0x5c1c92['personajesReservados'][_0x35a8cc(0xfd)](_0x49f758=>_0x49f758['id']!==_0xdf9251),guardarDatos(_0x5c1c92);if(_0x2bf01b[_0x35a8cc(0xef)]===_0x3823c1)_0x4d88da['reply'](_0x53b804[_0x35a8cc(0xea)],_0x35a8cc(0xf0)+_0x1bd018+_0x35a8cc(0x103)+_0x2bf01b[_0x35a8cc(0xe6)]+'!',_0x53b804,{'mentions':[_0x3823c1]});else{let _0x237311=await _0x4d88da[_0x35a8cc(0xe2)](_0x2bf01b['userId']);_0x4d88da[_0x35a8cc(0xe1)](_0x53b804[_0x35a8cc(0xea)],_0x35a8cc(0xf0)+_0x1bd018+_0x35a8cc(0x109)+_0x2bf01b[_0x35a8cc(0xe6)]+'\x20de\x20@'+_0x237311+'!',_0x53b804,{'mentions':[_0x3823c1,_0x2bf01b[_0x35a8cc(0xef)]]});}};handler[_0x383113(0xdd)]=[_0x383113(0xf4)],handler[_0x383113(0xe4)]=[_0x383113(0x10f)],handler['command']=['c',_0x383113(0xf4)],handler[_0x383113(0x100)]=!![];function _0x2dae(){const _0x2a5a0e=['242840iUKmjn','utf-8','text','help','161TOBOyE','existsSync','Character\x20ID:','reply','getName','Felicitaciones,\x20este\x20personaje\x20','tags','63714mfpkHB','name','Bot-Tiburon-MD','includes','parse','chat','\x20ha\x20sido\x20robado\x20por\x20@','quoted','characters','793899bavAwA','userId','¡Felicidades\x20@','url','3991320SuwREC','155814MQxuAW','confirmar','¡Oh\x20no!\x20Tu\x20personaje\x20','./package.json','push','¡Lo\x20siento,\x20este\x20personaje\x20no\x20está\x20disponible\x20en\x20este\x20momento!','error','110935efErQb','value','find','filter','1zAlBip','Error\x20al\x20leer\x20package.json:','register','1208068ZHqUXQ','log',',\x20obtuviste\x20a\x20','🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20AI\x20Yaemori.\x0a\x20🌟\x20https://github.com/Dev-Diego/Bot-Tiburon-MD','sendMessage','personajesReservados','data.json','usuarios',',\x20has\x20robado\x20a\x20','40XJaFYo','\x20es\x20tuyo','writeFileSync','stringify','User\x20Name:','anime','User\x20ID:','readFileSync','characterCount','totalRwcoins'];_0x2dae=function(){return _0x2a5a0e;};return _0x2dae();}export default handler;