const _0x223562=_0x3dff;function _0x254d(){const _0x5a8072=['true','AUTO_STICKER','sendMessage','466506gySPYO','toLowerCase','parse','../my_data/autoreply.json','20156ZounuS','../my_data/autosticker.json','path','9KjMeMK','readFileSync','utf8','Asitha-md','1315iifcqi','join','recording','audio/mpeg','body','../command','AUTO_VOICE','2972568TtzvBh','AUTO_REPLY','200774sCXfco','903355YNYekS','3005814GPkiLv','../lib/database','17064DuEphC','reply'];_0x254d=function(){return _0x5a8072;};return _0x254d();}(function(_0x39adb5,_0x4a30be){const _0x78f451=_0x3dff,_0x52caba=_0x39adb5();while(!![]){try{const _0x3fda23=-parseInt(_0x78f451(0x174))/0x1+-parseInt(_0x78f451(0x173))/0x2*(-parseInt(_0x78f451(0x183))/0x3)+parseInt(_0x78f451(0x180))/0x4*(parseInt(_0x78f451(0x16a))/0x5)+parseInt(_0x78f451(0x177))/0x6+parseInt(_0x78f451(0x175))/0x7+-parseInt(_0x78f451(0x171))/0x8+-parseInt(_0x78f451(0x17c))/0x9;if(_0x3fda23===_0x4a30be)break;else _0x52caba['push'](_0x52caba['shift']());}catch(_0x57a3e7){_0x52caba['push'](_0x52caba['shift']());}}}(_0x254d,0xb2b00));const fs=require('fs'),path=require(_0x223562(0x182)),{readEnv}=require(_0x223562(0x176)),{cmd,commands}=require(_0x223562(0x16f));function _0x3dff(_0x369747,_0x5456a2){const _0x254dbe=_0x254d();return _0x3dff=function(_0x3dff98,_0x219789){_0x3dff98=_0x3dff98-0x168;let _0xd7220a=_0x254dbe[_0x3dff98];return _0xd7220a;},_0x3dff(_0x369747,_0x5456a2);}cmd({'on':_0x223562(0x16e)},async(_0x4554b3,_0x16d8ea,_0x95f1d,{from:_0x332014,body:_0x23829c,isOwner:_0x1cfbb3})=>{const _0x26af7e=_0x223562,_0xc59cca=path[_0x26af7e(0x16b)](__dirname,'../my_data/autovoice.json'),_0x308900=JSON[_0x26af7e(0x17e)](fs[_0x26af7e(0x184)](_0xc59cca,_0x26af7e(0x168)));for(const _0x4855e9 in _0x308900){if(_0x23829c[_0x26af7e(0x17d)]()===_0x4855e9[_0x26af7e(0x17d)]()){const _0x31bae7=await readEnv();if(_0x31bae7[_0x26af7e(0x170)]===_0x26af7e(0x179)){if(_0x1cfbb3)return;await _0x4554b3['sendPresenceUpdate'](_0x26af7e(0x16c),_0x332014),await _0x4554b3[_0x26af7e(0x17b)](_0x332014,{'audio':{'url':_0x308900[_0x4855e9]},'mimetype':_0x26af7e(0x16d),'ptt':!![]},{'quoted':_0x16d8ea});}}}}),cmd({'on':_0x223562(0x16e)},async(_0x3e0f7c,_0x4fc3bc,_0x529cca,{from:_0x9effcd,body:_0x1abfa9,isOwner:_0x743f5})=>{const _0x4af06a=_0x223562,_0x3d5536=path[_0x4af06a(0x16b)](__dirname,_0x4af06a(0x181)),_0x36b81d=JSON[_0x4af06a(0x17e)](fs['readFileSync'](_0x3d5536,_0x4af06a(0x168)));for(const _0x367e6c in _0x36b81d){if(_0x1abfa9[_0x4af06a(0x17d)]()===_0x367e6c[_0x4af06a(0x17d)]()){const _0x4a0a4c=await readEnv();if(_0x4a0a4c[_0x4af06a(0x17a)]===_0x4af06a(0x179)){if(_0x743f5)return;await _0x3e0f7c['sendMessage'](_0x9effcd,{'sticker':{'url':_0x36b81d[_0x367e6c]},'package':_0x4af06a(0x169)},{'quoted':_0x4fc3bc});}}}}),cmd({'on':_0x223562(0x16e)},async(_0x55a44e,_0x41b384,_0x573daf,{from:_0xbc80d4,body:_0x2dbe09,isOwner:_0x417920})=>{const _0x36acab=_0x223562,_0x229093=path[_0x36acab(0x16b)](__dirname,_0x36acab(0x17f)),_0x45b499=JSON[_0x36acab(0x17e)](fs[_0x36acab(0x184)](_0x229093,'utf8'));for(const _0x39e36b in _0x45b499){if(_0x2dbe09[_0x36acab(0x17d)]()===_0x39e36b[_0x36acab(0x17d)]()){const _0x4d278f=await readEnv();if(_0x4d278f[_0x36acab(0x172)]==='true'){if(_0x417920)return;await _0x573daf[_0x36acab(0x178)](_0x45b499[_0x39e36b]);}}}});