var url='bot.jubi.ai/amfiPara'
var pid='amfiParaLive_438413102015'
"use strict";(function(){window.jubiChatEventListener=function(event){if(event.output&&event.output.next&&event.output.next.data&&event.output.next.data[0]&&event.output.next.data[0].text==='Proceed'){this.setTimeout(function(){$(".pm-bxCheckOPtion:last-child").remove();document.getElementById("pm-buttonlock").innerHTML+="<div class='pm-bxCheckOPtion'><ul><li><a href='javascript:void(0);' class='nikiclick' onclick='nikiclick()'>Proceed</a></li> </ul></div>";},100);}}
function load(x,s){return new Promise(function(resolve,reject){console.log("file-loading");s.onload=s.onreadystatechange=function(){var r=false;if(!r&&(!this.readyState||this.readyState=='complete')){r=true;console.log("file-loading success");return resolve();}};s.onerror=function(e){console.log("file-loading failed");return reject(e);};x.appendChild(s);});}
async function loadJs(jsUrls){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;var x=document.getElementsByTagName('head')[0];try{for(var _iterator=Object.keys(jsUrls)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var key=_step.value;var _url=jsUrls[key];if(!isMyScriptLoaded(_url)){var s=document.createElement('script');s.type='text/javascript';s.src=_url;s.async=true;s.defer=true;await load(x,s);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}
function isMyScriptLoaded(url){var scripts=document.getElementsByTagName('script');for(var i=scripts.length;i--;){if(scripts[i].src==url)return true;}
return false;}
function isMyCssLoaded(url){var scripts=document.getElementsByTagName('link');for(var i=scripts.length;i--;){if(scripts[i].src==url)return true;}
return false;}
async function loadCss(cssUrls){var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=Object.keys(cssUrls)[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var key=_step2.value;var _url2=cssUrls[key];if(!isMyCssLoaded(_url2)){var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href=_url2;link.media='all';link.async=true;link.defer=true;await load(head,link);}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}
loadCss({muliFont:"https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",owl:"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css",owlTheme:"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",pmTheme:"https://"+url+"/css/theme.min.css"});loadJs({crypt:"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js",jQuery:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",carousel:"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",socket:"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js",responsiveVoice:"https://code.responsivevoice.org/responsivevoice.js",nluComponent:"https://unpkg.com/compromise@latest/builds/compromise.min.js",bundle:"https://parramato.com/bot-view/"+pid+"/dev/js/bundle.js",jubiEvents:"https://"+url+"/js/jubievents.js",});window.directMultiplier=1;window.fallbackMultiplier=0.8;window.speechOnBrowser="Hindi Female"
window.speechGenderBackend="FEMALE"
window.speechLanguageCodeBackend="en-US"
window.runOnJubiStartEvent = true;
window.jubiUrl='https://parramato.com/bot-view/'+pid+'/dev/';window.jubiModal={url:'wss://bot.jubi.ai',path:'/amfiPara/socket',static:{url:window.jubiUrl,scripts:{},css:{},images:{"logo":"https://"+url+"/images/logo.png","sendIcon":"https://"+url+"/images/icon_send.png","sendIconActive":"https://"+url+"/images/iconRed_send.png","loaderBotChat":"https://"+url+"/images/response-loading.gif","userIcon":"https://"+url+"/images/user.png","botIcon":"https://"+url+"/images/boticon.png","logoIcon":"https://"+url+"/images/logo-icon.png","voiceIcon":"https://"+url+"/images/voice.png","closeWebView":"https://"+url+"/images/closeWebView.png","attachment":"https://"+url+"/images/attachment.png","permissionIcon":"https://"+url+"/images/parrot_loader.gif"},text:{closeMessage:'',headMessage:'Ask me anything.'}}};window.passphraseMiddleware="YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE"
window.voiceEnable=true;window.chatPersistence=true;window.mainpage='<section id="jubichatBot">'+'<section class="secCloseMsg" id="secCloseMsg" style="">'+'<div class="closeMessage"><img class="img-responsive" src="https://'+url+'/images/close.png"></div>'+'<div class="closeMsg"></div>'+'<p>Hey, let me show you a place where learning about Mutual Funds is fun! Click below.</p>'+'</section>'+'<section class="sec_closeview sonar" id="secCloseview" style="">'+'<img src="https://'+url+'/images/chat_open.png" id="closeImage" class="img-responsive">'+'</section>'+'</section>'+'<section class="sec_main" id="jubisecmain" style="display: none;"></section>';window.leftpanel='';window.rightpanel='<div class="rightPage" id="rightpanel" style="display:none;">'+'<section class="jubichatbot" id="jubichatbot" style="display: none;"></section>'+'</div>'+'<aside id="jubi-aside_fullopenview">'+'<section class="pm-sec_calliframe" id="pm-secIframe"  style="display:none">'+'<section class="pm-sec_scroll2 pm-sec_openview" id="pm-mainSec">'+'<section id="pm-heading" class="pm-sec_newHeader">'+'<div class="pm-titleheader" >'+'<h3>'+'<img src="https://'+url+'/images/logo-icon.png" class="img-responsive"><span class="pm-headOnline" >&nbsp;</span>'+'</h3>'+'<div class="close_Chatbot"><img class="img-responsive" src="https://'+url+'/images/icon_close.png"></div>'+'</div>'+'<p>Ask me anything about mutual fund.</p>'+'</section>'+'<section class="pm-sec_chatbody" id="pm-data" >'+'<div class="pm-bxChatbox pm-bxChat chatWindow" id="pm-buttonlock">'+'</div>'+'</section>'+'<div id="jubi-recording-text">'+'<p id="jubi-result-text">'+'<span class="jubi-grey-text"><span>'+'</p>'+'</div>'+'<section id="jubi-textInput" class="jubi-sec_newFooter footer-two">'+'<aside class="jubi-muteUnmuteVoice">'+'<div id="jubi-unmuteVoice">'+'<img src="https://'+url+'/images/unmute.png">'+'</div>'+'<div id="jubi-muteVoice">'+'<img src="https://'+url+'/images/mute.png">'+'</div>'+'</aside>'+'<div class="voice-buttons" id="voice-buttons">'+'<div class="voiceIcon" id="button-play-ws">'+'<img src="https://'+url+'/images/voice.png" class="img-fluid">'+'</div>'+'<div class="voicePulse" id="button-stop-ws">'+'<div class="sk-three-bounce">'+'<div class="sk-child sk-bounce1"></div>'+'<div class="sk-child sk-bounce2"></div>'+'<div class="sk-child sk-bounce3"></div>'+'</div>'+'<div class="stop-recording">Listening...</div>'+'</div>'+'</div>'+'<section class="artMenu">'+'<section class="secMenucontent" id="secMenucontent" style="display: none;">'+'<section class="sec_dropdown">'+'<div class="closeBtn">'+'<i class="fa fa-times"></i>'+'</div>'+'<h3>Menu</h3>'+'<ul>'+'<li class="menu_val" onclick="window.askBot(\'Start over \')">'+'<div class="menuIcon  first-child"><img src="https://'+url+'/images/menu_startover.png"></div>'+'<p>Start over</p>'+'</li>'+'<li class="menu_val" onclick="window.askBot(\'Reason to Invest\')">'+'<div class="menuIcon"><img src="https://'+url+'/images/menu_reasonstoinvest.png"></div>'+'<p>Reasons to Invest</p>'+'</li>'+'<li class="menu_val" onclick="window.askBot(\'Returns\')">'+'<div class="menuIcon third-child"><img src="https://'+url+'/images/menu_returns.png"></div>'+'<p>Returns</p>'+'</li>'+'<li class="menu_val" onclick="window.askBot(\'Withdrawal process \')">'+'<div class="menuIcon"><img src="https://'+url+'/images/menu_redumption.png"></div>'+'<p>Withdrawal process</p>'+'</li>'+'<li class="menu_val" onclick="window.askBot(\'Types of funds\')">'+'<div class="menuIcon"><img src="https://'+url+'/images/menu_typesoffund.png"></div>'+'<p>Types of Funds</p>'+'</li>'+'<li class="menu_val" onclick="window.askBot(\'End Conversation\')">'+'<div class="menuIcon"><img src="https://'+url+'/images/menu_endconversation.png"></div>'+'<p>End Conversation</p>'+'</li>'+'</ul>'+'</section>'+'<div class="trianglearrow">'+'<img src="https://'+url+'/images/triangledown.png" class="img-responsive">'+'</div>'+'</section>'+'<div class="iconMenu">'+'<i class="fa fas fa-bars"></i>'+'</div>'+'</section>'+'<div class="jubi-bxinput" id="jubi-bxinput" style="display:none;">'+'<textarea id="jubi-answerBottom" placeholder="Type a message here..." style="resize:none;overflow:hidden;"></textarea> '+'</div>'+'<div class="datasendButtons">'+'<div class="sendIcon" id="button-send">'+'<button id="jubi-bottomClick" type="submit" onclick="return false;">'+'<img src="https://'+url+'/images/icon_send.png" id="jubi-graySend" class="img-responsive" style="display: block;">'+'<img src="https://'+url+'/images/iconRed_send.png" id="jubi-redSend" class="img-responsive" style="display: none;margin-bottom:11px;">'+'</button>'+'</div>'+'<div class="uploadbox">'+'<label>'+'<div class="inputfile">'+'<img src="https://'+url+'/images/attachment.png" class="img-responsive">'+'<input class="jubi-file-upload" type="file" name="fileName" >'+'</div>'+'<div class="button-section" style="display:none">'+'<button type="submit">Submit</button>'+'</div>'+'</label>'+'</div>'+'<div class="keyboard-icon" id="keyboard-icon" style="display:none;">'+'<i class="fa fa-keyboard-o" aria-hidden="true"></i>'+'</div>'+'</div>'+'<div class="jubi-new_copyright" id="jubi-new_copyright">'+'<div class="shareIcons">'+'<h5>Share on: </h5>'+'<ul>'+'<li class="whatsappLi">'+'<a target="_blank" href="https://api.whatsapp.com/send?text=https://www.mutualfundssahihai.com/">'+'<i class="fa fab fa-whatsapp" aria-hidden="true" title="Share on whatsapp"></i></a>'+'</li>'+'<li class="facebookLi">'+'<script>'+'</script>'+'<a href="http://www.facebook.com/share.php?u=https://www.mutualfundssahihai.com/" onclick="return fbs_click()" target="_blank">'+'<i class="fa fab fa-facebook" title="Share on Facebook"></i></a>'+'</li>'+'<li class="twitterLi">'+'<a target="_blank" href="https://twitter.com/intent/tweet?url=https://www.mutualfundssahihai.com/">'+'<i class="fa fab fa-twitter" title="Share on Twitter"></i></a>'+'</li>'+'<li class="linkedinLi">'+'<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.mutualfundssahihai.com/&amp;title=TEST&amp;summary=TEST&amp;source=My Website Name" target="_new">'+'<i class="fa fa-linkedin" title="Share on Linkedin"></i></a>'+'</li>'+'</ul>'+'</div>'+'</div>'+'</section>'+'</section>'+'</section>'
'</aside>';window.templateOpenView='';window.loadPermissionView='<section id="pm-permission-view" style="display:none" >'+'<section id="pm-heading" class="pm-sec_newHeader">'+'<div class="pm-titleheader" >'+'<h3>'+'<img src="https://'+url+'/images/logo-icon.png" class="img-responsive"><span class="pm-headOnline" >&nbsp;</span>'+'</h3>'+'</div>'+'<p>Ask me anything.</p>'+'</section>'+'<section class="pm-sec_show_option_on_start" id="pm-sec_show_option_on_start" style="display:block">'+'<div class="chatProceed" id="chatProceed">'+'<div class="chatProceed-botimg">'+'</div>'+'<p>Welcome back! Let us begin...</p>'+'<ul>'+'<li>'+'<a href="javascript:void(0)" id="jubi-continue-storage" >Continue from where we left</a>'+'</li>'+'<li>'+'<a href="javascript:void(0)" id="jubi-start-fresh">Start fresh</a>'+'</li>'+'</ul>'+'</div>'+'</section>'+'</section>';})();
