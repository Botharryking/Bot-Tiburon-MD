//Codígo creado por David Chian wa.me/5351524614
const _0x3380b4=_0x589c;(function(_0x10263c,_0x2fb187){const _0x4aeb08=_0x589c,_0x65180b=_0x10263c();while(!![]){try{const _0x36295a=parseInt(_0x4aeb08(0x1a4))/0x1+-parseInt(_0x4aeb08(0x194))/0x2+parseInt(_0x4aeb08(0x1a3))/0x3+parseInt(_0x4aeb08(0x1ae))/0x4*(parseInt(_0x4aeb08(0x1b1))/0x5)+-parseInt(_0x4aeb08(0x1c6))/0x6+parseInt(_0x4aeb08(0x1ac))/0x7+-parseInt(_0x4aeb08(0x195))/0x8*(parseInt(_0x4aeb08(0x1ba))/0x9);if(_0x36295a===_0x2fb187)break;else _0x65180b['push'](_0x65180b['shift']());}catch(_0x264a3c){_0x65180b['push'](_0x65180b['shift']());}}}(_0x212b,0xc24d2));import _0x386813 from'fs';import{v4 as _0x598b67}from'uuid';function _0x212b(){const _0x5bcd6a=['!*\x0a┆𝑆𝑢\x20𝑣𝑎𝑙𝑜𝑟\x20𝑒𝑠:\x0a│\x20','readFileSync','\x20Segundos.*','8213807CxnVlR','git+https://github.com/Dev-Diego/Bot-Tiburon-MD.git','296dVADFJ','help','image/jpeg','49655zSHBoM','utf-8','name','Error\x20al\x20escribir\x20en\x20data.json:','parse','Ocurrió\x20un\x20error\x20al\x20procesar\x20tu\x20solicitud.\x20Intenta\x20de\x20nuevo\x20más\x20tarde.','random','sender','value','972jSuaVy','Error\x20al\x20leer\x20characters.json:','\x20Minutos\x20y\x20','command','chat','url','¡Espera\x20un\x20poco\x20más\x20para\x20poder\x20usar\x20este\x20comando!\x0a\x0a*Tiempo\x20restante:\x20','existsSync','length','register','Error\x20en\x20el\x20handler:','data.json','8704518UvKOFQ','some','floor','2022678jnnpAH','10632QdvOPE','Error\x20al\x20leer\x20data.json:','log','filter','push','anime','./src/JSON/characters.json','Error\x20al\x20leer\x20package.json:','personajesReservados','╭─────┈\x20♡\x20┈───────\x0a│╽𝐅꯭.𝐄꯭.𝐋꯭.𝐈꯭.𝐂꯭.𝐈.꯭𝐃꯭.𝐀꯭.𝐃꯭.𝐄꯭.𝐒╽\x0a┆\x20𝑁𝑜𝑚𝑏𝑟𝑒\x20𝑑𝑒𝑙\x20𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒:\x0a⧁\x20*','Cooldown\x20actualizado\x20para\x20','reply','error','repository','2264184sWgsQx','738459ZRIRDp','roll','stringify','🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20Bot\x20Tiburon.\x0a\x20🌟\x20https://github.com/Dev-Diego/Bot-Tiburon-MD','sendMessage'];_0x212b=function(){return _0x5bcd6a;};return _0x212b();}const completadoImage='./src/completado.jpg',obtenerDatos=()=>{const _0x3c2089=_0x589c;try{return _0x386813[_0x3c2089(0x1c1)](_0x3c2089(0x1c5))?JSON[_0x3c2089(0x1b5)](_0x386813[_0x3c2089(0x1aa)]('data.json',_0x3c2089(0x1b2))):{'usuarios':{},'personajesReservados':[]};}catch(_0x38f935){return console[_0x3c2089(0x1a1)](_0x3c2089(0x196),_0x38f935),{'usuarios':{},'personajesReservados':[]};}},guardarDatos=_0x5f4b25=>{const _0x32ae35=_0x589c;try{_0x386813['writeFileSync'](_0x32ae35(0x1c5),JSON[_0x32ae35(0x1a6)](_0x5f4b25,null,0x2));}catch(_0x2ddd22){console['error'](_0x32ae35(0x1b4),_0x2ddd22);}},reservarPersonaje=(_0x317bc3,_0x25a1e6)=>{const _0x638f92=_0x589c;let _0x3bdbed=obtenerDatos();_0x3bdbed[_0x638f92(0x19d)][_0x638f92(0x199)]({'userId':_0x317bc3,..._0x25a1e6}),guardarDatos(_0x3bdbed);},obtenerPersonajes=()=>{const _0x25f3bb=_0x589c;try{return JSON[_0x25f3bb(0x1b5)](_0x386813[_0x25f3bb(0x1aa)](_0x25f3bb(0x19b),_0x25f3bb(0x1b2)));}catch(_0x3f5924){return console[_0x25f3bb(0x1a1)](_0x25f3bb(0x1bb),_0x3f5924),[];}};let cooldowns={},handler=async(_0x2a7621,{conn:_0x1fc67b})=>{const _0x3d2429=_0x589c;try{let _0x381c1c=_0x2a7621[_0x3d2429(0x1b8)],_0x129cfc=new Date()['getTime'](),_0x3aed06=0xa*0x3c*0x3e8,_0x1612e1=cooldowns[_0x381c1c]||0x0,_0x2ce617=_0x129cfc-_0x1612e1;if(_0x2ce617<_0x3aed06){let _0x196002=_0x3aed06-_0x2ce617,_0x1d8861=Math[_0x3d2429(0x193)](_0x196002/(0x3e8*0x3c)),_0x54d623=Math[_0x3d2429(0x193)](_0x196002%(0x3e8*0x3c)/0x3e8),_0x3ba0af=_0x3d2429(0x1c0)+_0x1d8861+_0x3d2429(0x1bc)+_0x54d623+_0x3d2429(0x1ab);await _0x1fc67b[_0x3d2429(0x1a8)](_0x2a7621['chat'],{'text':_0x3ba0af});return;}const _0x44860=()=>{const _0x5c8c6e=_0x3d2429;try{const _0x21acd6=JSON[_0x5c8c6e(0x1b5)](_0x386813['readFileSync']('./package.json',_0x5c8c6e(0x1b2)));if(_0x21acd6[_0x5c8c6e(0x1b3)]!=='Bot-Tiburon-MD')return![];if(_0x21acd6[_0x5c8c6e(0x1a2)][_0x5c8c6e(0x1bf)]!==_0x5c8c6e(0x1ad))return![];return!![];}catch(_0x152bb6){return console[_0x5c8c6e(0x1a1)](_0x5c8c6e(0x19c),_0x152bb6),![];}};if(!_0x44860()){await _0x1fc67b[_0x3d2429(0x1a0)](_0x2a7621[_0x3d2429(0x1be)],_0x3d2429(0x1a7),_0x2a7621,rcanal);return;}let _0x486480=obtenerDatos(),_0x3c11b5=obtenerPersonajes(),_0x3a4bd8=_0x3c11b5[_0x3d2429(0x198)](_0x2418c8=>!_0x486480[_0x3d2429(0x19d)][_0x3d2429(0x1c7)](_0xdbd66a=>_0xdbd66a['name']===_0x2418c8[_0x3d2429(0x1b3)]));if(_0x3a4bd8[_0x3d2429(0x1c2)]===0x0){await _0x1fc67b[_0x3d2429(0x1a8)](_0x2a7621[_0x3d2429(0x1be)],{'image':{'url':completadoImage},'caption':'Felicidades,\x20todos\x20los\x20personajes\x20han\x20sido\x20obtenidos.\x20¡Pronto\x20habrá\x20más\x20waifus\x20para\x20recolectar!','m':_0x2a7621,'rcanal':rcanal});return;}const _0x9c7f59=_0x3a4bd8[Math[_0x3d2429(0x193)](Math[_0x3d2429(0x1b7)]()*_0x3a4bd8[_0x3d2429(0x1c2)])],_0x35d374=_0x598b67(),_0x3c209a=_0x3d2429(0x19e)+_0x9c7f59[_0x3d2429(0x1b3)]+_0x3d2429(0x1a9)+_0x9c7f59[_0x3d2429(0x1b9)]+'\x20𝑊𝐹𝑐𝑜𝑖𝑛𝑠!\x0a╰─────┈\x20◇\x20┈───────\x0a<id:'+_0x35d374+'>';await _0x1fc67b[_0x3d2429(0x1a8)](_0x2a7621[_0x3d2429(0x1be)],{'image':{'url':_0x9c7f59[_0x3d2429(0x1bf)]},'caption':_0x3c209a,'mimetype':_0x3d2429(0x1b0),'m':_0x2a7621,'rcanal':rcanal}),reservarPersonaje(_0x381c1c,{..._0x9c7f59,'id':_0x35d374}),cooldowns[_0x381c1c]=_0x129cfc,console[_0x3d2429(0x197)](_0x3d2429(0x19f)+_0x381c1c+':\x20'+cooldowns[_0x381c1c]);}catch(_0x34f97a){console[_0x3d2429(0x1a1)](_0x3d2429(0x1c4),_0x34f97a),await _0x1fc67b[_0x3d2429(0x1a8)](_0x2a7621[_0x3d2429(0x1be)],{'text':_0x3d2429(0x1b6)});}};function _0x589c(_0x300042,_0x1b06f2){const _0x212bf9=_0x212b();return _0x589c=function(_0x589c0b,_0x57f7de){_0x589c0b=_0x589c0b-0x193;let _0x2bf154=_0x212bf9[_0x589c0b];return _0x2bf154;},_0x589c(_0x300042,_0x1b06f2);}handler[_0x3380b4(0x1af)]=[_0x3380b4(0x1a5)],handler['tags']=[_0x3380b4(0x19a)],handler[_0x3380b4(0x1bd)]=['roll','rollwaifu','rw'],handler[_0x3380b4(0x1c3)]=!![];export default handler;