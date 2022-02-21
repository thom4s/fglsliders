/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
/*!
 * HC-Sticky
 * =========
 * Version: 2.1.0
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: Cross-browser plugin that makes any element on your page visible while you scroll
 * License: MIT
 */
!function(t,e){"use strict";if("object"==typeof module&&"object"==typeof module.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");module.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,function(t){"use strict";var e={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,queries:null,queryFlow:"down",onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},o=t.document,i=function(n,s){if("string"==typeof n&&(n=o.querySelector(n)),!n)return!1;var r={},l=i.Helpers,a=n.parentNode;"static"===l.getStyle(a,"position")&&(a.style.position="relative");var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.isEmptyObject(t)&&r||(r=Object.assign({},e,r,t))},f=function(){return r.disable},d=function(){if(r.queries){var o=t.innerWidth,i=r.queryFlow,n=r.queries;if(function(t){r=Object.assign({},e,t||{})}(s),"up"===i)for(var a in n)o>=a&&!l.isEmptyObject(n[a])&&c(n[a]);else{var f=[];for(var d in r.queries){var u={};u[d]=n[d],f.push(u)}for(var p=f.length-1;p>=0;p--){var g=f[p],m=Object.keys(g)[0];o<=m&&!l.isEmptyObject(g[m])&&c(g[m])}}}},u={css:{},position:null,stick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.hasClass(n,r.stickyClass)||(!1===p.isAttached&&p.attach(),u.position="fixed",n.style.position="fixed",n.style.left=p.offsetLeft+"px",n.style.width=p.width,void 0===t.bottom?n.style.bottom="auto":n.style.bottom=t.bottom+"px",void 0===t.top?n.style.top="auto":n.style.top=t.top+"px",n.classList?n.classList.add(r.stickyClass):n.className+=" "+r.stickyClass,r.onStart&&r.onStart.call(n,r))},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.disable=t.disable||!1,"fixed"===u.position||null===u.position||!(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(l.getStyle(n,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(l.getStyle(n,"bottom"))||0)===t.bottom)){!0===t.disable?!0===p.isAttached&&p.detach():!1===p.isAttached&&p.attach();var e=t.position||u.css.position;u.position=e,n.style.position=e,n.style.left=!0===t.disable?u.css.left:p.positionLeft+"px",n.style.width="absolute"!==e?u.css.width:p.width,void 0===t.bottom?n.style.bottom=!0===t.disable?"":"auto":n.style.bottom=t.bottom+"px",void 0===t.top?n.style.top=!0===t.disable?"":"auto":n.style.top=t.top+"px",n.classList?n.classList.remove(r.stickyClass):n.className=n.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),r.onStop&&r.onStop.call(n,r)}}},p={el:o.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in u.css)p.el.style[t]=u.css[t];var e=l.getStyle(n);p.offsetLeft=l.offset(n).left-(parseInt(e.marginLeft)||0),p.positionLeft=l.position(n).left,p.width=l.getStyle(n,"width")},attach:function(){a.insertBefore(p.el,n.nextSibling),p.isAttached=!0},detach:function(){p.el=a.removeChild(p.el),p.isAttached=!1}},g=void 0,m=void 0,v=void 0,h=void 0,y=void 0,b=void 0,S=void 0,w=void 0,k=void 0,x=void 0,L=void 0,E=void 0,T=void 0,C=void 0,j=void 0,z=void 0,N=void 0,O=void 0,R=function(){u.css=function(t){var e=l.getCascadedStyle(t),o=l.getStyle(t),i={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:o.position,display:o.display,verticalAlign:o.verticalAlign,boxSizing:o.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight};return e.float&&(i.float=e.float||"none"),e.cssFloat&&(i.cssFloat=e.cssFloat||"none"),o.MozBoxSizing&&(i.MozBoxSizing=o.MozBoxSizing),i.width="auto"!==e.width?e.width:"border-box"===i.boxSizing||"border-box"===i.MozBoxSizing?t.offsetWidth+"px":o.width,i}(n),p.init(),g=!(!r.stickTo||!("document"===r.stickTo||r.stickTo.nodeType&&9===r.stickTo.nodeType||"object"==typeof r.stickTo&&r.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),m=r.stickTo?g?o:"string"==typeof r.stickTo?o.querySelector(r.stickTo):r.stickTo:a,j=(O=function(){var t=n.offsetHeight+(parseInt(u.css.marginTop)||0)+(parseInt(u.css.marginBottom)||0),e=(j||0)-t;return e>=-1&&e<=1?j:t})(),h=(N=function(){return g?Math.max(o.documentElement.clientHeight,o.body.scrollHeight,o.documentElement.scrollHeight,o.body.offsetHeight,o.documentElement.offsetHeight):m.offsetHeight})(),y=g?0:l.offset(m).top,b=r.stickTo?g?0:l.offset(a).top:y,S=t.innerHeight,z=n.offsetTop-(parseInt(u.css.marginTop)||0),v=r.innerSticker?"string"==typeof r.innerSticker?o.querySelector(r.innerSticker):r.innerSticker:null,w=isNaN(r.top)&&r.top.indexOf("%")>-1?parseFloat(r.top)/100*S:r.top,k=isNaN(r.bottom)&&r.bottom.indexOf("%")>-1?parseFloat(r.bottom)/100*S:r.bottom,x=v?v.offsetTop:r.innerTop?r.innerTop:0,L=isNaN(r.bottomEnd)&&r.bottomEnd.indexOf("%")>-1?parseFloat(r.bottomEnd)/100*S:r.bottomEnd,E=y-w+x+z},H=t.pageYOffset||o.documentElement.scrollTop,B=0,I=void 0,q=function(){j=O(),h=N(),T=y+h-w-L,C=j>S;var e=t.pageYOffset||o.documentElement.scrollTop,i=l.offset(n).top,s=i-e,c=void 0;I=e<H?"up":"down",B=e-H,H=e,e>E?T+w+(C?k:0)-(r.followScroll&&C?0:w)<=e+j-x-(j-x>S-(E-x)&&r.followScroll&&(c=j-S-x)>0?c:0)?u.reset({position:"absolute",bottom:b+a.offsetHeight-T-w}):C&&r.followScroll?"down"===I?s+j+k<=S?u.stick({bottom:k}):"fixed"===u.position&&u.reset({position:"absolute",top:i-w-E-B+x}):s+x<0&&"fixed"===u.position?u.reset({position:"absolute",top:i-w-E+x-B}):i>=e+w-x&&u.stick({top:w-x}):u.stick({top:w-x}):u.reset({disable:!0})},A=!1,F=!1,M=function(){A&&(l.event.unbind(t,"scroll",q),A=!1)},D=function(){R(),j>=h?M():(q(),A||(l.event.bind(t,"scroll",q),A=!0))},W=function(){n.style.position="",n.style.left="",n.style.top="",n.style.bottom="",n.style.width="",n.classList?n.classList.remove(r.stickyClass):n.className=n.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),u.css={},u.position=null,!0===p.isAttached&&p.detach()},P=function(){W(),d(),f()?M():D()},V=function(){r.onBeforeResize&&r.onBeforeResize.call(n,r),P(),r.onResize&&r.onResize.call(n,r)},Y=r.resizeDebounce?l.debounce(V,r.resizeDebounce):V,$=function(){F&&(l.event.unbind(t,"resize",Y),F=!1),M()},Q=function(){F||(l.event.bind(t,"resize",Y),F=!0),d(),f()?M():D()};this.options=function(t){return t?r.option||null:Object.assign({},r)},this.reinit=P,this.update=function(t){c(t),P()},this.attach=Q,this.detach=$,this.destroy=function(){$(),W()},c(s),Q(),l.event.bind(t,"load",P)};if(void 0!==t.jQuery){var n=t.jQuery;n.fn.extend({hcSticky:function(t){return this.length?this.each(function(){var e=n.data(this,"hcSticky");e?e.update(t):(e=new i(this,t),n.data(this,"hcSticky",e))}):this}})}return t.hcSticky=t.hcSticky||i,i}),function(t){"use strict";var e=t.hcSticky,o=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])}return o},writable:!0,configurable:!0});var i=function(){function e(e){var o=t.event;return o.target=o.target||o.srcElement||e,o}var i=o.documentElement,n=function(){};i.addEventListener?n=function(t,e,o){t.addEventListener(e,o,!1)}:i.attachEvent&&(n=function(t,o,i){t[o+i]=i.handleEvent?function(){var o=e(t);i.handleEvent.call(i,o)}:function(){var o=e(t);i.call(t,o)},t.attachEvent("on"+o,t[o+i])});var s=function(){};return i.removeEventListener?s=function(t,e,o){t.removeEventListener(e,o,!1)}:i.detachEvent&&(s=function(t,e,o){t.detachEvent("on"+e,t[e+o]);try{delete t[e+o]}catch(i){t[e+o]=void 0}}),{bind:n,unbind:s}}(),n=function(e,i){return t.getComputedStyle?i?o.defaultView.getComputedStyle(e,null).getPropertyValue(i):o.defaultView.getComputedStyle(e,null):e.currentStyle?i?e.currentStyle[i.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:e.currentStyle:void 0},s=function(e){var i=e.getBoundingClientRect(),n=t.pageYOffset||o.documentElement.scrollTop,s=t.pageXOffset||o.documentElement.scrollLeft;return{top:i.top+n,left:i.left+s}};e.Helpers={isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(t,e,o){var i=void 0;return function(){var n=this,s=arguments,r=o&&!i;clearTimeout(i),i=setTimeout(function(){i=null,o||t.apply(n,s)},e),r&&t.apply(n,s)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:s,position:function(t){var e=t.offsetParent,o=s(e),i=s(t),r=n(e),l=n(t);return o.top+=parseInt(r.borderTopWidth)||0,o.left+=parseInt(r.borderLeftWidth)||0,{top:i.top-o.top-(parseInt(l.marginTop)||0),left:i.left-o.left-(parseInt(l.marginLeft)||0)}},getStyle:n,getCascadedStyle:function(e){var i=e.cloneNode(!0);i.style.display="none",e.parentNode.insertBefore(i,e.nextSibling);var n=void 0;i.currentStyle?n=i.currentStyle:t.getComputedStyle&&(n=o.defaultView.getComputedStyle(i,null));var s={};for(var r in n)!isNaN(r)||"string"!=typeof n[r]&&"number"!=typeof n[r]||(s[r]=n[r]);if(Object.keys(s).length<3){s={};for(var l in n)isNaN(l)||(s[n[l].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=n.getPropertyValue(n[l]))}if(s.margin||"auto"!==s.marginLeft?s.margin||s.marginLeft!==s.marginRight||s.marginLeft!==s.marginTop||s.marginLeft!==s.marginBottom||(s.margin=s.marginLeft):s.margin="auto",!s.margin&&"0px"===s.marginLeft&&"0px"===s.marginRight){var a=e.offsetLeft-e.parentNode.offsetLeft,c=a-(parseInt(s.left)||0)-(parseInt(s.right)||0),f=e.parentNode.offsetWidth-e.offsetWidth-a-(parseInt(s.right)||0)+(parseInt(s.left)||0)-c;0!==f&&1!==f||(s.margin="auto")}return i.parentNode.removeChild(i),i=null,s},event:i}}(window);
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")),n!==s.active.index&&o.goToSlide(n)))},I=function(e){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n,r=t?t:s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(e,["i"]),s=n.exec(i);if(null==s&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof d&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),"undefined"!=typeof g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&t!==!0&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&t!==!0&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);
/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function($){$.fn.marquee=function(options){return this.each(function(){var o=$.extend({},$.fn.marquee.defaults,options),$this=$(this),$marqueeWrapper,containerWidth,animationCss,verticalDir,elWidth,loopCount=3,playState='animation-play-state',css3AnimationIsSupported=!1,_prefixedEvent=function(element,type,callback){var pfx=["webkit","moz","MS","o",""];for(var p=0;p<pfx.length;p++){if(!pfx[p])type=type.toLowerCase();element.addEventListener(pfx[p]+type,callback,!1)}},_objToString=function(obj){var tabjson=[];for(var p in obj){if(obj.hasOwnProperty(p)){tabjson.push(p+':'+obj[p])}}
tabjson.push();return'{'+tabjson.join(',')+'}'},_startAnimationWithDelay=function(){$this.timer=setTimeout(animate,o.delayBeforeStart)},methods={pause:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,'paused')}else{if($.fn.pause){$marqueeWrapper.pause()}}
$this.data('runningStatus','paused');$this.trigger('paused')},resume:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,'running')}else{if($.fn.resume){$marqueeWrapper.resume()}}
$this.data('runningStatus','resumed');$this.trigger('resumed')},toggle:function(){methods[$this.data('runningStatus')=='resumed'?'pause':'resume']()},destroy:function(){clearTimeout($this.timer);$this.find("*").addBack().off();$this.html($this.find('.js-marquee:first').html())}};if(typeof options==='string'){if($.isFunction(methods[options])){if(!$marqueeWrapper){$marqueeWrapper=$this.find('.js-marquee-wrapper')}
if($this.data('css3AnimationIsSupported')===!0){css3AnimationIsSupported=!0}
methods[options]()}
return}
var dataAttributes={},attr;$.each(o,function(key,value){attr=$this.attr('data-'+key);if(typeof attr!=='undefined'){switch(attr){case 'true':attr=!0;break;case 'false':attr=!1;break}
o[key]=attr}});if(o.speed){o.duration=parseInt($this.width(),10)/o.speed*1000}
verticalDir=o.direction=='up'||o.direction=='down';o.gap=o.duplicated?parseInt(o.gap):0;$this.wrapInner('<div class="js-marquee"></div>');var $el=$this.find('.js-marquee').css({'margin-right':o.gap,'float':'left'});if(o.duplicated){$el.clone(!0).appendTo($this)}
$this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');$marqueeWrapper=$this.find('.js-marquee-wrapper');if(verticalDir){var containerHeight=$this.height();$marqueeWrapper.removeAttr('style');$this.height(containerHeight);$this.find('.js-marquee').css({'float':'none','margin-bottom':o.gap,'margin-right':0});if(o.duplicated)$this.find('.js-marquee:last').css({'margin-bottom':0});var elHeight=$this.find('.js-marquee:first').height()+o.gap;if(o.startVisible&&!o.duplicated){o._completeDuration=((parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10))*o.duration;o.duration=(parseInt(elHeight,10)/parseInt(containerHeight,10))*o.duration}else{o.duration=((parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10))*o.duration}}else{elWidth=$this.find('.js-marquee:first').width()+o.gap;containerWidth=$this.width();if(o.startVisible&&!o.duplicated){o._completeDuration=((parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10))*o.duration;o.duration=(parseInt(elWidth,10)/parseInt(containerWidth,10))*o.duration}else{o.duration=((parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10))*o.duration}}
if(o.duplicated){o.duration=o.duration/2}
if(o.allowCss3Support){var
elm=document.body||document.createElement('div'),animationName='marqueeAnimation-'+Math.floor(Math.random()*10000000),domPrefixes='Webkit Moz O ms Khtml'.split(' '),animationString='animation',animationCss3Str='',keyframeString='';if(elm.style.animation!==undefined){keyframeString='@keyframes '+animationName+' ';css3AnimationIsSupported=!0}
if(css3AnimationIsSupported===!1){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+'AnimationName']!==undefined){var prefix='-'+domPrefixes[i].toLowerCase()+'-';animationString=prefix+animationString;playState=prefix+playState;keyframeString='@'+prefix+'keyframes '+animationName+' ';css3AnimationIsSupported=!0;break}}}
if(css3AnimationIsSupported){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s infinite '+o.css3easing;$this.data('css3AnimationIsSupported',!0)}}
var _rePositionVertically=function(){$marqueeWrapper.css('transform','translateY('+(o.direction=='up'?containerHeight+'px':'-'+elHeight+'px')+')')},_rePositionHorizontally=function(){$marqueeWrapper.css('transform','translateX('+(o.direction=='left'?containerWidth+'px':'-'+elWidth+'px')+')')};if(o.duplicated){if(verticalDir){if(o.startVisible){$marqueeWrapper.css('transform','translateY(0)')}else{$marqueeWrapper.css('transform','translateY('+(o.direction=='up'?containerHeight+'px':'-'+((elHeight*2)-o.gap)+'px')+')')}}else{if(o.startVisible){$marqueeWrapper.css('transform','translateX(0)')}else{$marqueeWrapper.css('transform','translateX('+(o.direction=='left'?containerWidth+'px':'-'+((elWidth*2)-o.gap)+'px')+')')}}
if(!o.startVisible){loopCount=1}}else if(o.startVisible){loopCount=2}else{if(verticalDir){_rePositionVertically()}else{_rePositionHorizontally()}}
var animate=function(){if(o.duplicated){if(loopCount===1){o._originalDuration=o.duration;if(verticalDir){o.duration=o.direction=='up'?o.duration+(containerHeight/((elHeight)/o.duration)):o.duration*2}else{o.duration=o.direction=='left'?o.duration+(containerWidth/((elWidth)/o.duration)):o.duration*2}
if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing}
loopCount++}
else if(loopCount===2){o.duration=o._originalDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=$.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing}
loopCount++}}
if(verticalDir){if(o.duplicated){if(loopCount>2){$marqueeWrapper.css('transform','translateY('+(o.direction=='up'?0:'-'+elHeight+'px')+')')}
animationCss={'transform':'translateY('+(o.direction=='up'?'-'+elHeight+'px':0)+')'}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing}
animationCss={'transform':'translateY('+(o.direction=='up'?'-'+elHeight+'px':containerHeight+'px')+')'};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=$.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing}
_rePositionVertically()}}else{_rePositionVertically();animationCss={'transform':'translateY('+(o.direction=='up'?'-'+($marqueeWrapper.height())+'px':containerHeight+'px')+')'}}}else{if(o.duplicated){if(loopCount>2){$marqueeWrapper.css('transform','translateX('+(o.direction=='left'?0:'-'+elWidth+'px')+')')}
animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':0)+')'}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing}
animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':containerWidth+'px')+')'};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=$.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing}
_rePositionHorizontally()}}else{_rePositionHorizontally();animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':containerWidth+'px')+')'}}}
$this.trigger('beforeStarting');if(css3AnimationIsSupported){$marqueeWrapper.css(animationString,animationCss3Str);var keyframeCss=keyframeString+' { 100%  '+_objToString(animationCss)+'}',$styles=$marqueeWrapper.find('style');if($styles.length!==0){$styles.filter(":last").html(keyframeCss)}else{$('head').append('<style>'+keyframeCss+'</style>')}
_prefixedEvent($marqueeWrapper[0],"AnimationIteration",function(){$this.trigger('finished')});_prefixedEvent($marqueeWrapper[0],"AnimationEnd",function(){animate();$this.trigger('finished')})}else{$marqueeWrapper.animate(animationCss,o.duration,o.easing,function(){$this.trigger('finished');if(o.pauseOnCycle){_startAnimationWithDelay()}else{animate()}})}
$this.data('runningStatus','resumed')};$this.on('pause',methods.pause);$this.on('resume',methods.resume);if(o.pauseOnHover){$this.on('mouseenter',methods.pause);$this.on('mouseleave',methods.resume)}
if(css3AnimationIsSupported&&o.allowCss3Support){animate()}else{_startAnimationWithDelay()}})};$.fn.marquee.defaults={allowCss3Support:!0,css3easing:'linear',easing:'linear',delayBeforeStart:1000,direction:'left',duplicated:!1,duration:5000,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}})(jQuery)

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*!
 * Salvattore 1.0.9 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.salvattore=t()}(this,function(){/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){"use strict";if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,t=e("only all").matches,n=!1,r=0,a=[],i=function(t){clearTimeout(r),r=setTimeout(function(){for(var t=0,n=a.length;n>t;t++){var r=a[t].mql,i=a[t].listeners||[],o=e(r.media).matches;if(o!==r.matches){r.matches=o;for(var c=0,l=i.length;l>c;c++)i[c].call(window,r)}}},30)};window.matchMedia=function(r){var o=e(r),c=[],l=0;return o.addListener=function(e){t&&(n||(n=!0,window.addEventListener("resize",i,!0)),0===l&&(l=a.push({mql:o,listeners:c})),c.push(e))},o.removeListener=function(e){for(var t=0,n=c.length;n>t;t++)c[t]===e&&c.splice(t,1)},o}}(),function(){"use strict";for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),a=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+a)},a);return e=r+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),"function"!=typeof window.CustomEvent&&!function(){"use strict";function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var e=function(e,t,n){"use strict";var r={},a=[],i=[],o=[],c=function(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-"+t,n)};return r.obtainGridSettings=function(t){var n=e.getComputedStyle(t,":before"),r=n.getPropertyValue("content").slice(1,-1),a=r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),i=1,o=[];return a?(i=a[1],o=a[2],o=o?o.split("."):["column"]):(a=r.match(/^\s*\.(.+)\s+(\d+)\s*$/),a&&(o=a[1],i=a[2],i&&(i=i.split(".")))),{numberOfColumns:i,columnClasses:o}},r.addColumns=function(e,n){for(var a,i=r.obtainGridSettings(e),o=i.numberOfColumns,l=i.columnClasses,s=new Array(+o),u=t.createDocumentFragment(),d=o;0!==d--;)a="[data-columns] > *:nth-child("+o+"n-"+d+")",s.push(n.querySelectorAll(a));s.forEach(function(e){var n=t.createElement("div"),r=t.createDocumentFragment();n.className=l.join(" "),Array.prototype.forEach.call(e,function(e){r.appendChild(e)}),n.appendChild(r),u.appendChild(n)}),e.appendChild(u),c(e,"columns",o)},r.removeColumns=function(n){var r=t.createRange();r.selectNodeContents(n);var a=Array.prototype.filter.call(r.extractContents().childNodes,function(t){return t instanceof e.HTMLElement}),i=a.length,o=a[0].childNodes.length,l=new Array(o*i);Array.prototype.forEach.call(a,function(e,t){Array.prototype.forEach.call(e.children,function(e,n){l[n*i+t]=e})});var s=t.createElement("div");return c(s,"columns",0),l.filter(function(e){return!!e}).forEach(function(e){s.appendChild(e)}),s},r.recreateColumns=function(t){e.requestAnimationFrame(function(){r.addColumns(t,r.removeColumns(t));var e=new CustomEvent("columnsChange");t.dispatchEvent(e)})},r.mediaQueryChange=function(e){e.matches&&Array.prototype.forEach.call(a,r.recreateColumns)},r.getCSSRules=function(e){var t;try{t=e.sheet.cssRules||e.sheet.rules}catch(n){return[]}return t||[]},r.getStylesheets=function(){var e=Array.prototype.slice.call(t.querySelectorAll("style"));return e.forEach(function(t,n){"text/css"!==t.type&&""!==t.type&&e.splice(n,1)}),Array.prototype.concat.call(e,Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))},r.mediaRuleHasColumnsSelector=function(e){var t,n;try{t=e.length}catch(r){t=0}for(;t--;)if(n=e[t],n.selectorText&&n.selectorText.match(/\[data-columns\](.*)::?before$/))return!0;return!1},r.scanMediaQueries=function(){var t=[];if(e.matchMedia){r.getStylesheets().forEach(function(e){Array.prototype.forEach.call(r.getCSSRules(e),function(e){try{e.media&&e.cssRules&&r.mediaRuleHasColumnsSelector(e.cssRules)&&t.push(e)}catch(n){}})});var n=i.filter(function(e){return-1===t.indexOf(e)});o.filter(function(e){return-1!==n.indexOf(e.rule)}).forEach(function(e){e.mql.removeListener(r.mediaQueryChange)}),o=o.filter(function(e){return-1===n.indexOf(e.rule)}),t.filter(function(e){return-1==i.indexOf(e)}).forEach(function(t){var n=e.matchMedia(t.media.mediaText);n.addListener(r.mediaQueryChange),o.push({rule:t,mql:n})}),i.length=0,i=t}},r.rescanMediaQueries=function(){r.scanMediaQueries(),Array.prototype.forEach.call(a,r.recreateColumns)},r.nextElementColumnIndex=function(e,t){var n,r,a,i=e.children,o=i.length,c=0,l=0;for(a=0;o>a;a++)n=i[a],r=n.children.length+(t[a].children||t[a].childNodes).length,0===c&&(c=r),c>r&&(l=a,c=r);return l},r.createFragmentsList=function(e){for(var n=new Array(e),r=0;r!==e;)n[r]=t.createDocumentFragment(),r++;return n},r.appendElements=function(e,t){var n=e.children,a=n.length,i=r.createFragmentsList(a);Array.prototype.forEach.call(t,function(t){var n=r.nextElementColumnIndex(e,i);i[n].appendChild(t)}),Array.prototype.forEach.call(n,function(e,t){e.appendChild(i[t])})},r.prependElements=function(e,n){var a=e.children,i=a.length,o=r.createFragmentsList(i),c=i-1;n.forEach(function(e){var t=o[c];t.insertBefore(e,t.firstChild),0===c?c=i-1:c--}),Array.prototype.forEach.call(a,function(e,t){e.insertBefore(o[t],e.firstChild)});for(var l=t.createDocumentFragment(),s=n.length%i;0!==s--;)l.appendChild(e.lastChild);e.insertBefore(l,e.firstChild)},r.registerGrid=function(n){if("none"!==e.getComputedStyle(n).display){var i=t.createRange();i.selectNodeContents(n);var o=t.createElement("div");o.appendChild(i.extractContents()),c(o,"columns",0),r.addColumns(n,o),a.push(n)}},r.init=function(){var e=t.createElement("style");e.innerHTML="[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}",t.head.appendChild(e);var n=t.querySelectorAll("[data-columns]");Array.prototype.forEach.call(n,r.registerGrid),r.scanMediaQueries()},r.init(),{appendElements:r.appendElements,prependElements:r.prependElements,registerGrid:r.registerGrid,recreateColumns:r.recreateColumns,rescanMediaQueries:r.rescanMediaQueries,init:r.init,append_elements:r.appendElements,prepend_elements:r.prependElements,register_grid:r.registerGrid,recreate_columns:r.recreateColumns,rescan_media_queries:r.rescanMediaQueries}}(window,window.document);return e});
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){"use strict";var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" />').text(i+1)},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange"}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)}return Slick}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==="boolean"){addBefore=index;index=null}else if(index<0||index>=_.slideCount){return false}_.unload();if(typeof index==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";_.$slideTrack.css(animProps)}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)"}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)"}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase}if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)))}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active")}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")});_.$slider.addClass("slick-slider");_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable")}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({width:100/_.options.slidesPerRow+"%",display:"inline-block"})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth}else if(_.respondTo==="slider"){respondToWidth=sliderWidth}else if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth)}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial);triggerBreakpoint=targetBreakpoint}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault()}if(!$target.is("li")){$target=$target.closest("li")}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate)}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate)}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}}return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off("keydown.slick",_.keyHandler)}}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off("keydown.slick",_.keyHandler);_.$nextArrow&&_.$nextArrow.off("keydown.slick",_.keyHandler)}}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler)}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(event){var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){if($sf.is(":focus")){_.focussed=true;_.autoPlay()}}},0)}).on("blur.slick","*",function(event){var $sf=$(this);if(_.options.pauseOnFocus){_.focussed=false;_.autoPlay()}})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===true){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5}else if(_.options.slidesToShow===1){coef=-2}}verticalOffset=verticalHeight*_.options.slidesToShow*coef}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,swipeTarget,centerOffset;centerOffset=_.options.centerMode===true?Math.floor(_.$list.width()/2):0;swipeTarget=_.swipeLeft*-1+centerOffset;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){var slideOuterWidth,slideOffset,slideRightBoundary;slideOuterWidth=$(slide).outerWidth();slideOffset=slide.offsetLeft;if(_.options.centerMode!==true){slideOffset+=slideOuterWidth/2}slideRightBoundary=slideOffset+slideOuterWidth;if(swipeTarget<slideRightBoundary){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()}if(creation){_.$slider.trigger("init",[_])}if(_.options.accessibility===true){_.initADA()}if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount});_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({role:"tabpanel",id:"slick-slide"+_.instanceUid+i,tabindex:-1});if(slideControlIndex!==-1){var ariaButtonControl="slick-slide-control"+_.instanceUid+slideControlIndex;if($("#"+ariaButtonControl).length){$(this).attr({"aria-describedby":ariaButtonControl})}}});_.$dots.attr("role","tablist").find("li").each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({role:"presentation"});$(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+_.instanceUid+i,"aria-controls":"slick-slide"+_.instanceUid+mappedSlideIndex,"aria-label":i+1+" of "+numDotGroups,"aria-selected":null,tabindex:"-1"})}).eq(_.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end()}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({tabindex:"0"})}else{_.$slides.eq(i).removeAttr("tabindex")}}_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on("keydown.slick",_.keyHandler);_.$nextArrow.on("keydown.slick",_.keyHandler)}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide);if(_.options.accessibility===true){_.$dots.on("keydown.slick",_.keyHandler)}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}})}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageSrcSet=$(this).attr("data-srcset"),imageSizes=$(this).attr("data-sizes")||_.$slider.attr("data-sizes"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")});_.$slider.trigger("lazyLoaded",[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource])};imageToLoad.src=imageSource})}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);if(_.options.lazyLoad==="anticipated"){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find(".slick-slide");for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition()}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr("tabindex",0).focus()}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageSrcSet=image.attr("data-srcset");imageSizes=image.attr("data-sizes")||_.$slider.attr("data-sizes");imageToLoad=document.createElement("img");imageToLoad.onload=function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition()}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger("allImagesLoaded",[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}l--}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else{index=removeBefore===true?--index:index}if(_.slideCount<1||index<0||index>_.slideCount-1){return false}_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps)}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:"0px "+_.options.centerPadding})}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+" 0px"})}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children(".slick-slide").length))}else if(_.options.variableWidth===true){_.$slideTrack.width(5e3*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length))}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];refresh=arguments[1];type="multiple"}else if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive"}else if(typeof arguments[1]!=="undefined"){type="single"}}if(type==="single"){_.options[option]=value}else if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}l--}_.options.responsive.push(value[item])}}}if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}_.$slider.trigger("setPosition",[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical")}else{_.$slider.removeClass("slick-vertical")}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined)_.animType=false}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition"}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false")}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center")}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center")}}_.$slides.eq(index).addClass("slick-center")}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false")}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false")}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}}}if(_.options.lazyLoad==="ondemand"||_.options.lazyLoad==="anticipated"){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return}_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return}if(_.options.fade===true&&_.currentSlide===index){return}if(sync===false){_.asNavFor(index)}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}if(_.options.autoplay){clearInterval(_.autoPlayTimer)}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}_.animateHeight();return}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}_.$slider.addClass("slick-loading")};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?"left":"right"}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?"left":"right"}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?"right":"left"}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return"down"}else{return"up"}}return"vertical"};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()])}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||"ontouchend"in document&&_.options.swipe===false){return}else if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault()}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==="right"||_.currentSlide>=_.getDotCount()&&swipeDirection==="left"){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset}if(_.options.fade===true||_.options.touchMove===false){return false}if(_.animating===true){_.swipeLeft=null;return false}_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").end();_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active")}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true}else{_.interrupted=false}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined")_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!="undefined")return ret}return _}});
var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var t=window,Oi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Di=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Hi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function ki(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ri(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Ii(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Pi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function zi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Wi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Fi(t){return("insertRule"in t?t.cssRules:t.rules).length}function qi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),ji=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Vi=i?function(t,e){ji(t,e)||t.classList.add(e)}:function(t,e){ji(t,e)||(t.className+=" "+e)},Gi=i?function(t,e){ji(t,e)&&t.classList.remove(e)}:function(t,e){ji(t,e)&&(t.className=t.className.replace(e,""))};function Qi(t,e){return t.hasAttribute(e)}function Xi(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Yi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ki(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ji(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Ui(t,e){"none"!==t.style.display&&(t.style.display="none")}function _i(t,e){"none"===t.style.display&&(t.style.display="")}function Zi(t){return"none"!==window.getComputedStyle(t).display}function $i(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function ta(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function ea(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&u;t.addEventListener(i,e[i],a)}}function na(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function ia(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}var aa=function(O){O=Hi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},O||{});var D=document,h=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=O.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var r,o,u,l,s,c,f,y=e.tC?ki(e.tC):Ri(e,"tC",function(){var t=document,e=Ii(),n=Pi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?zi(e,n):i.remove(),a}(),n),g=e.tPL?ki(e.tPL):Ri(e,"tPL",function(){var t,e=document,n=Ii(),i=Pi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?zi(n,i):a.remove(),t}(),n),H=e.tMQ?ki(e.tMQ):Ri(e,"tMQ",(o=document,u=Ii(),l=Pi(u),s=o.createElement("div"),c=o.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",c.type="text/css",s.className="tns-mq-test",u.appendChild(c),u.appendChild(s),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(o.createTextNode(f)),r=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,u.fake?zi(u,l):s.remove(),"absolute"===r),n),d=e.tTf?ki(e.tTf):Ri(e,"tTf",$i("transform"),n),v=e.t3D?ki(e.t3D):Ri(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ii(),a=Pi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?zi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(d),n),x=e.tTDu?ki(e.tTDu):Ri(e,"tTDu",$i("transitionDuration"),n),p=e.tTDe?ki(e.tTDe):Ri(e,"tTDe",$i("transitionDelay"),n),b=e.tADu?ki(e.tADu):Ri(e,"tADu",$i("animationDuration"),n),m=e.tADe?ki(e.tADe):Ri(e,"tADe",$i("animationDelay"),n),C=e.tTE?ki(e.tTE):Ri(e,"tTE",ta(x,"Transition"),n),w=e.tAE?ki(e.tAE):Ri(e,"tAE",ta(b,"Animation"),n),M=h.console&&"function"==typeof h.console.warn,T=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],E={};if(T.forEach(function(t){if("string"==typeof O[t]){var e=O[t],n=D.querySelector(e);if(E[t]=e,!n||!n.nodeName)return void(M&&console.warn("Can't find",O[t]));O[t]=n}}),!(O.container.children.length<1)){var k=O.responsive,R=O.nested,I="carousel"===O.mode;if(k){0 in k&&(O=Hi(O,k[0]),delete k[0]);var A={};for(var N in k){var L=k[N];L="number"==typeof L?{items:L}:L,A[N]=L}k=A,A=null}if(I||function t(e){for(var n in e)I||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(O),!I){O.axis="horizontal",O.slideBy="page",O.edgePadding=!1;var P=O.animateIn,z=O.animateOut,B=O.animateDelay,W=O.animateNormal}var S,F,q="horizontal"===O.axis,j=D.createElement("div"),V=D.createElement("div"),G=O.container,Q=G.parentNode,X=G.outerHTML,Y=G.children,K=Y.length,J=sn(),U=!1;k&&Bn(),I&&(G.className+=" tns-vpfix");var _,Z,$,tt,et,nt,it,at,rt=O.autoWidth,ot=vn("fixedWidth"),ut=vn("edgePadding"),lt=vn("gutter"),st=fn(),ct=vn("center"),ft=rt?1:Math.floor(vn("items")),dt=vn("slideBy"),vt=O.viewportMax||O.fixedWidthViewportWidth,pt=vn("arrowKeys"),mt=vn("speed"),ht=O.rewind,yt=!ht&&O.loop,gt=vn("autoHeight"),xt=vn("controls"),bt=vn("controlsText"),Ct=vn("nav"),wt=vn("touch"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),Et=vn("autoplayTimeout"),At=vn("autoplayText"),Nt=vn("autoplayHoverPause"),Lt=vn("autoplayResetOnVisibility"),Bt=(at=document.createElement("style"),it&&at.setAttribute("media",it),document.querySelector("head").appendChild(at),at.sheet?at.sheet:at.styleSheet),St=O.lazyload,Ot=(O.lazyloadSelector,[]),Dt=yt?(et=function(){{if(rt||ot&&!vt)return K-1;var t=ot?"fixedWidth":"items",e=[];if((ot||O[t]<K)&&e.push(O[t]),k)for(var n in k){var i=k[n][t];i&&(ot||i<K)&&e.push(i)}return e.length||e.push(0),Math.ceil(ot?vt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=I?Math.ceil((5*et-K)/2):4*et-K,nt=Math.max(et,nt),dn("edgePadding")?nt+1:nt):0,Ht=I?K+2*Dt:K+Dt,kt=!(!ot&&!rt||yt),Rt=ot?ni():null,It=!I||!yt,Pt=q?"left":"top",zt="",Wt="",Ft=ot?function(){return ct&&!yt?K-1:Math.ceil(-Rt/(ot+lt))}:rt?function(){for(var t=Ht;t--;)if(_[t]>=-Rt)return t}:function(){return ct&&I&&!yt?K-1:yt||I?Math.max(0,Ht-Math.ceil(ft)):Ht-1},qt=on(vn("startIndex")),jt=qt,Vt=(rn(),0),Gt=rt?null:Ft(),Qt=O.preventActionWhenRunning,Xt=O.swipeAngle,Yt=!Xt||"?",Kt=!1,Jt=O.onInit,Ut=new ia,_t=" tns-slider tns-"+O.mode,Zt=G.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),$t=vn("disable"),te=!1,ee=O.freezable,ne=!(!ee||rt)&&Ln(),ie=!1,ae={click:fi,keydown:function(t){t=xi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ee.disabled||fi(t,-1):Ae.disabled||fi(t,1))}},re={click:function(t){if(Kt){if(Qt)return;si()}var e=bi(t=xi(t));for(;e!==Se&&!Qi(e,"data-nav");)e=e.parentNode;if(Qi(e,"data-nav")){var n=ke=Number(Xi(e,"data-nav")),i=ot||rt?n*K/De:n*ft,a=ve?n:Math.min(Math.ceil(i),K-1);ci(a,t),Re===n&&(qe&&hi(),ke=-1)}},keydown:function(t){t=xi(t);var e=D.activeElement;if(!Qi(e,"data-nav"))return;var n=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),i=Number(Xi(e,"data-nav"));0<=n&&(0===n?0<i&&gi(Be[i-1]):1===n?i<De-1&&gi(Be[i+1]):ci(ke=i,t))}},oe={mouseover:function(){qe&&(vi(),je=!0)},mouseout:function(){je&&(di(),je=!1)}},ue={visibilitychange:function(){D.hidden?qe&&(vi(),Ge=!0):Ge&&(di(),Ge=!1)}},le={keydown:function(t){t=xi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&fi(t,0===e?-1:1)}},se={touchstart:Ti,touchmove:Ei,touchend:Ai,touchcancel:Ai},ce={mousedown:Ti,mousemove:Ei,mouseup:Ai,mouseleave:Ai},fe=dn("controls"),de=dn("nav"),ve=!!rt||O.navAsThumbnails,pe=dn("autoplay"),me=dn("touch"),he=dn("mouseDrag"),ye="tns-slide-active",ge="tns-complete",xe={load:function(t){zn(bi(t))},error:function(t){e=bi(t),Vi(e,"failed"),Wn(e);var e}},be="force"===O.preventScrollOnTouch;if(fe)var Ce,we,Me=O.controlsContainer,Te=O.controlsContainer?O.controlsContainer.outerHTML:"",Ee=O.prevButton,Ae=O.nextButton,Ne=O.prevButton?O.prevButton.outerHTML:"",Le=O.nextButton?O.nextButton.outerHTML:"";if(de)var Be,Se=O.navContainer,Oe=O.navContainer?O.navContainer.outerHTML:"",De=rt?K:Li(),He=0,ke=-1,Re=ln(),Ie=Re,Pe="tns-nav-active",ze="Carousel Page ",We=" (Current Slide)";if(pe)var Fe,qe,je,Ve,Ge,Qe="forward"===O.autoplayDirection?1:-1,Xe=O.autoplayButton,Ye=O.autoplayButton?O.autoplayButton.outerHTML:"",Ke=["<span class='tns-visually-hidden'>"," animation</span>"];if(me||he)var Je,Ue,_e={},Ze={},$e=!1,tn=q?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};rt||an($t||ne),d&&(Pt=d,zt="translate",v?(zt+=q?"3d(":"3d(0px, ",Wt=q?", 0px, 0px)":", 0px)"):(zt+=q?"X(":"Y(",Wt=")")),I&&(G.className=G.className.replace("tns-vpfix","")),function(){dn("gutter");j.className="tns-outer",V.className="tns-inner",j.id=Zt+"-ow",V.id=Zt+"-iw",""===G.id&&(G.id=Zt);_t+=g||rt?" tns-subpixel":" tns-no-subpixel",_t+=y?" tns-calc":" tns-no-calc",rt&&(_t+=" tns-autowidth");_t+=" tns-"+O.axis,G.className+=_t,I?((S=D.createElement("div")).id=Zt+"-mw",S.className="tns-ovh",j.appendChild(S),S.appendChild(V)):j.appendChild(V);if(gt){var t=S||V;t.className+=" tns-ah"}if(Q.insertBefore(j,G),V.appendChild(G),qi(Y,function(t,e){Vi(t,"tns-item"),t.id||(t.id=Zt+"-item"+e),!I&&W&&Vi(t,W),Yi(t,{"aria-hidden":"true",tabindex:"-1"})}),Dt){for(var e=D.createDocumentFragment(),n=D.createDocumentFragment(),i=Dt;i--;){var a=i%K,r=Y[a].cloneNode(!0);if(Ki(r,"id"),n.insertBefore(r,n.firstChild),I){var o=Y[K-1-a].cloneNode(!0);Ki(o,"id"),e.appendChild(o)}}G.insertBefore(e,G.firstChild),G.appendChild(n),Y=G.children}}(),function(){if(!I)for(var t=qt,e=qt+Math.min(K,ft);t<e;t++){var n=Y[t];n.style.left=100*(t-qt)/ft+"%",Vi(n,P),Gi(n,W)}q&&(g||rt?(Wi(Bt,"#"+Zt+" > .tns-item","font-size:"+h.getComputedStyle(Y[0]).fontSize+";",Fi(Bt)),Wi(Bt,"#"+Zt,"font-size:0;",Fi(Bt))):I&&qi(Y,function(t,e){var n;t.style.marginLeft=(n=e,y?y+"("+100*n+"% / "+Ht+")":100*n/Ht+"%")}));if(H){if(x){var i=S&&O.autoHeight?xn(O.speed):"";Wi(Bt,"#"+Zt+"-mw",i,Fi(Bt))}i=pn(O.edgePadding,O.gutter,O.fixedWidth,O.speed,O.autoHeight),Wi(Bt,"#"+Zt+"-iw",i,Fi(Bt)),I&&(i=q&&!rt?"width:"+mn(O.fixedWidth,O.gutter,O.items)+";":"",x&&(i+=xn(mt)),Wi(Bt,"#"+Zt,i,Fi(Bt))),i=q&&!rt?hn(O.fixedWidth,O.gutter,O.items):"",O.gutter&&(i+=yn(O.gutter)),I||(x&&(i+=xn(mt)),b&&(i+=bn(mt))),i&&Wi(Bt,"#"+Zt+" > .tns-item",i,Fi(Bt))}else{Gn(),V.style.cssText=pn(ut,lt,ot,gt),I&&q&&!rt&&(G.style.width=mn(ot,lt,ft));var i=q&&!rt?hn(ot,lt,ft):"";lt&&(i+=yn(lt)),i&&Wi(Bt,"#"+Zt+" > .tns-item",i,Fi(Bt))}if(k&&H)for(var a in k){a=parseInt(a);var r=k[a],i="",o="",u="",l="",s="",c=rt?null:vn("items",a),f=vn("fixedWidth",a),d=vn("speed",a),v=vn("edgePadding",a),p=vn("autoHeight",a),m=vn("gutter",a);x&&S&&vn("autoHeight",a)&&"speed"in r&&(o="#"+Zt+"-mw{"+xn(d)+"}"),("edgePadding"in r||"gutter"in r)&&(u="#"+Zt+"-iw{"+pn(v,m,f,d,p)+"}"),I&&q&&!rt&&("fixedWidth"in r||"items"in r||ot&&"gutter"in r)&&(l="width:"+mn(f,m,c)+";"),x&&"speed"in r&&(l+=xn(d)),l&&(l="#"+Zt+"{"+l+"}"),("fixedWidth"in r||ot&&"gutter"in r||!I&&"items"in r)&&(s+=hn(f,m,c)),"gutter"in r&&(s+=yn(m)),!I&&"speed"in r&&(x&&(s+=xn(d)),b&&(s+=bn(d))),s&&(s="#"+Zt+" > .tns-item{"+s+"}"),(i=o+u+l+s)&&Bt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Bt.cssRules.length)}}(),Cn();var en=yt?I?function(){var t=Vt,e=Gt;t+=dt,e-=dt,ut?(t+=1,e-=1):ot&&(st+lt)%(ot+lt)&&(e-=1),Dt&&(e<qt?qt-=K:qt<t&&(qt+=K))}:function(){if(Gt<qt)for(;Vt+K<=qt;)qt-=K;else if(qt<Vt)for(;qt<=Gt-K;)qt+=K}:function(){qt=Math.max(Vt,Math.min(Gt,qt))},nn=I?function(){var e,n,i,a,t,r,o,u,l,s,c;ti(G,""),x||!mt?(ri(),mt&&Zi(G)||si()):(e=G,n=Pt,i=zt,a=Wt,t=ii(),r=mt,o=si,u=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),s=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-s)/r*u,setTimeout(function t(){r-=u,s+=c,e.style[n]=i+s+l+a,0<r?setTimeout(t,u):o()},u)),q||Ni()}:function(){Ot=[];var t={};t[C]=t[w]=si,na(Y[jt],t),ea(Y[qt],t),oi(jt,P,z,!0),oi(qt,W,P),C&&w&&mt&&Zi(G)||si()};return{version:"2.9.2",getInfo:Si,events:Ut,goTo:ci,play:function(){Tt&&!qe&&(mi(),Ve=!1)},pause:function(){qe&&(hi(),Ve=!0)},isOn:U,updateSliderHeight:Xn,refresh:Cn,destroy:function(){if(Bt.disabled=!0,Bt.ownerNode&&Bt.ownerNode.remove(),na(h,{resize:An}),pt&&na(D,le),Me&&na(Me,ae),Se&&na(Se,re),na(G,oe),na(G,ue),Xe&&na(Xe,{click:yi}),Tt&&clearInterval(Fe),I&&C){var t={};t[C]=si,na(G,t)}wt&&na(G,se),Mt&&na(G,ce);var r=[X,Te,Ne,Le,Oe,Ye];for(var e in T.forEach(function(t,e){var n="container"===t?j:O[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],O[t]=i?i.nextElementSibling:a.firstElementChild}}),T=P=z=B=W=q=j=V=G=Q=X=Y=K=F=J=rt=ot=ut=lt=st=ft=dt=vt=pt=mt=ht=yt=gt=Bt=St=_=Ot=Dt=Ht=kt=Rt=It=Pt=zt=Wt=Ft=qt=jt=Vt=Gt=Xt=Yt=Kt=Jt=Ut=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=ve=pe=me=he=ye=ge=xe=Z=xt=bt=Me=Te=Ee=Ae=Ce=we=Ct=Se=Oe=Be=De=He=ke=Re=Ie=Pe=ze=We=Tt=Et=Qe=At=Nt=Xe=Ye=Lt=Ke=Fe=qe=je=Ve=Ge=_e=Ze=Je=$e=Ue=tn=wt=Mt=null,this)"rebuild"!==e&&(this[e]=null);U=!1},rebuild:function(){return aa(Hi(O,E))}}}function an(t){t&&(xt=Ct=wt=Mt=pt=Tt=Nt=Lt=!1)}function rn(){for(var t=I?qt-Dt:qt;t<0;)t+=K;return t%K+1}function on(t){return t=t?Math.max(0,Math.min(yt?K-1:K-ft,t)):0,I?t+Dt:t}function un(t){for(null==t&&(t=qt),I&&(t-=Dt);t<0;)t+=K;return Math.floor(t%K)}function ln(){var t,e=un();return t=ve?e:ot||rt?Math.ceil((e+1)*De/K-1):Math.floor(e/ft),!yt&&I&&qt===Gt&&(t=De-1),t}function sn(){return h.innerWidth||D.documentElement.clientWidth||D.body.clientWidth}function cn(t){return"top"===t?"afterbegin":"beforeend"}function fn(){var t=ut?2*ut-lt:0;return function t(e){var n,i,a=D.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}(Q)-t}function dn(t){if(O[t])return!0;if(k)for(var e in k)if(k[e][t])return!0;return!1}function vn(t,e){if(null==e&&(e=J),"items"===t&&ot)return Math.floor((st+lt)/(ot+lt))||1;var n=O[t];if(k)for(var i in k)e>=parseInt(i)&&t in k[i]&&(n=k[i][t]);return"slideBy"===t&&"page"===n&&(n=vn("items")),I||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=q?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(q?u+" 0 0":"0 "+u+" 0")+";"}return!I&&a&&x&&i&&(r+=xn(i)),r}function mn(t,e,n){return t?(t+e)*Ht+"px":y?y+"("+100*Ht+"% / "+n+")":100*Ht/n+"%"}function hn(t,e,n){var i;if(t)i=t+e+"px";else{I||(n=Math.floor(n));var a=I?Ht:n;i=y?y+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==R?i+";":i+" !important;"}function yn(t){var e="";!1!==t&&(e=(q?"padding-":"margin-")+(q?"right":"bottom")+": "+t+"px;");return e}function gn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function xn(t){return gn(x,18)+"transition-duration:"+t/1e3+"s;"}function bn(t){return gn(b,17)+"animation-duration:"+t/1e3+"s;"}function Cn(){if(dn("autoHeight")||rt||!q){var t=G.querySelectorAll("img");qi(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(ea(t,xe),t.src="",t.src=e,Vi(t,"loading")):St||zn(t)}),Oi(function(){jn(Ji(t),function(){Z=!0})}),!rt&&q&&(t=Fn(qt,Math.min(qt+ft-1,Ht-1))),St?wn():Oi(function(){jn(Ji(t),wn)})}else I&&ai(),Tn(),En()}function wn(){if(rt){var e=yt?qt:K-1;!function t(){Y[e-1].getBoundingClientRect().right.toFixed(2)===Y[e].getBoundingClientRect().left.toFixed(2)?Mn():setTimeout(function(){t()},16)}()}else Mn()}function Mn(){q&&!rt||(Yn(),rt?(Rt=ni(),ee&&(ne=Ln()),Gt=Ft(),an($t||ne)):Ni()),I&&ai(),Tn(),En()}function Tn(){if(Kn(),j.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Rn()+"</span>  of "+K+"</div>"),$=j.querySelector(".tns-liveregion .current"),pe){var t=Tt?"stop":"start";Xe?Yi(Xe,{"data-action":t}):O.autoplayButtonOutput&&(j.insertAdjacentHTML(cn(O.autoplayPosition),'<button data-action="'+t+'">'+Ke[0]+t+Ke[1]+At[0]+"</button>"),Xe=j.querySelector("[data-action]")),Xe&&ea(Xe,{click:yi}),Tt&&(mi(),Nt&&ea(G,oe),Lt&&ea(G,ue))}if(de){if(Se)Yi(Se,{"aria-label":"Carousel Pagination"}),qi(Be=Se.children,function(t,e){Yi(t,{"data-nav":e,tabindex:"-1","aria-label":ze+(e+1),"aria-controls":Zt})});else{for(var e="",n=ve?"":'style="display:none"',i=0;i<K;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+Zt+'" '+n+' aria-label="'+ze+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",j.insertAdjacentHTML(cn(O.navPosition),e),Se=j.querySelector(".tns-nav"),Be=Se.children}if(Bi(),x){var a=x.substring(0,x.length-18).toLowerCase(),r="transition: all "+mt/1e3+"s";a&&(r="-"+a+"-"+r),Wi(Bt,"[aria-controls^="+Zt+"-item]",r,Fi(Bt))}Yi(Be[Re],{"aria-label":ze+(Re+1)+We}),Ki(Be[Re],"tabindex"),Vi(Be[Re],Pe),ea(Se,re)}fe&&(Me||Ee&&Ae||(j.insertAdjacentHTML(cn(O.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Zt+'">'+bt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Zt+'">'+bt[1]+"</button></div>"),Me=j.querySelector(".tns-controls")),Ee&&Ae||(Ee=Me.children[0],Ae=Me.children[1]),O.controlsContainer&&Yi(Me,{"aria-label":"Carousel Navigation",tabindex:"0"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&Yi([Ee,Ae],{"aria-controls":Zt,tabindex:"-1"}),(O.controlsContainer||O.prevButton&&O.nextButton)&&(Yi(Ee,{"data-controls":"prev"}),Yi(Ae,{"data-controls":"next"})),Ce=Un(Ee),we=Un(Ae),$n(),Me?ea(Me,ae):(ea(Ee,ae),ea(Ae,ae))),Sn()}function En(){if(I&&C){var t={};t[C]=si,ea(G,t)}wt&&ea(G,se,O.preventScrollOnTouch),Mt&&ea(G,ce),pt&&ea(D,le),"inner"===R?Ut.on("outerResized",function(){Nn(),Ut.emit("innerLoaded",Si())}):(k||ot||rt||gt||!q)&&ea(h,{resize:An}),gt&&("outer"===R?Ut.on("innerLoaded",qn):$t||qn()),Pn(),$t?Hn():ne&&Dn(),Ut.on("indexChanged",Vn),"inner"===R&&Ut.emit("innerLoaded",Si()),"function"==typeof Jt&&Jt(Si()),U=!0}function An(t){Oi(function(){Nn(xi(t))})}function Nn(t){if(U){"outer"===R&&Ut.emit("outerResized",Si(t)),J=sn();var e,n=F,i=!1;k&&(Bn(),(e=n!==F)&&Ut.emit("newBreakpointStart",Si(t)));var a,r,o,u,l=ft,s=$t,c=ne,f=pt,d=xt,v=Ct,p=wt,m=Mt,h=Tt,y=Nt,g=Lt,x=qt;if(e){var b=ot,C=gt,w=bt,M=ct,T=At;if(!H)var E=lt,A=ut}if(pt=vn("arrowKeys"),xt=vn("controls"),Ct=vn("nav"),wt=vn("touch"),ct=vn("center"),Mt=vn("mouseDrag"),Tt=vn("autoplay"),Nt=vn("autoplayHoverPause"),Lt=vn("autoplayResetOnVisibility"),e&&($t=vn("disable"),ot=vn("fixedWidth"),mt=vn("speed"),gt=vn("autoHeight"),bt=vn("controlsText"),At=vn("autoplayText"),Et=vn("autoplayTimeout"),H||(ut=vn("edgePadding"),lt=vn("gutter"))),an($t),st=fn(),q&&!rt||$t||(Yn(),q||(Ni(),i=!0)),(ot||rt)&&(Rt=ni(),Gt=Ft()),(e||ot)&&(ft=vn("items"),dt=vn("slideBy"),(r=ft!==l)&&(ot||rt||(Gt=Ft()),en())),e&&$t!==s&&($t?Hn():function(){if(!te)return;if(Bt.disabled=!1,G.className+=_t,ai(),yt)for(var t=Dt;t--;)I&&_i(Y[t]),_i(Y[Ht-t-1]);if(!I)for(var e=qt,n=qt+K;e<n;e++){var i=Y[e],a=e<qt+ft?P:W;i.style.left=100*(e-qt)/ft+"%",Vi(i,a)}On(),te=!1}()),ee&&(e||ot||rt)&&(ne=Ln())!==c&&(ne?(ri(ii(on(0))),Dn()):(!function(){if(!ie)return;ut&&H&&(V.style.margin="");if(Dt)for(var t="tns-transparent",e=Dt;e--;)I&&Gi(Y[e],t),Gi(Y[Ht-e-1],t);On(),ie=!1}(),i=!0)),an($t||ne),Tt||(Nt=Lt=!1),pt!==f&&(pt?ea(D,le):na(D,le)),xt!==d&&(xt?Me?_i(Me):(Ee&&_i(Ee),Ae&&_i(Ae)):Me?Ui(Me):(Ee&&Ui(Ee),Ae&&Ui(Ae))),Ct!==v&&(Ct?_i(Se):Ui(Se)),wt!==p&&(wt?ea(G,se,O.preventScrollOnTouch):na(G,se)),Mt!==m&&(Mt?ea(G,ce):na(G,ce)),Tt!==h&&(Tt?(Xe&&_i(Xe),qe||Ve||mi()):(Xe&&Ui(Xe),qe&&hi())),Nt!==y&&(Nt?ea(G,oe):na(G,oe)),Lt!==g&&(Lt?ea(D,ue):na(D,ue)),e){if(ot===b&&ct===M||(i=!0),gt!==C&&(gt||(V.style.height="")),xt&&bt!==w&&(Ee.innerHTML=bt[0],Ae.innerHTML=bt[1]),Xe&&At!==T){var N=Tt?1:0,L=Xe.innerHTML,B=L.length-T[N].length;L.substring(B)===T[N]&&(Xe.innerHTML=L.substring(0,B)+At[N])}}else ct&&(ot||rt)&&(i=!0);if((r||ot&&!rt)&&(De=Li(),Bi()),(a=qt!==x)?(Ut.emit("indexChanged",Si()),i=!0):r?a||Vn():(ot||rt)&&(Pn(),Kn(),kn()),r&&!I&&function(){for(var t=qt+Math.min(K,ft),e=Ht;e--;){var n=Y[e];qt<=e&&e<t?(Vi(n,"tns-moving"),n.style.left=100*(e-qt)/ft+"%",Vi(n,P),Gi(n,W)):n.style.left&&(n.style.left="",Vi(n,W),Gi(n,P)),Gi(n,z)}setTimeout(function(){qi(Y,function(t){Gi(t,"tns-moving")})},300)}(),!$t&&!ne){if(e&&!H&&(gt===autoheightTem&&mt===speedTem||Gn(),ut===A&&lt===E||(V.style.cssText=pn(ut,lt,ot,mt,gt)),q)){I&&(G.style.width=mn(ot,lt,ft));var S=hn(ot,lt,ft)+yn(lt);u=Fi(o=Bt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Wi(Bt,"#"+Zt+" > .tns-item",S,Fi(Bt))}gt&&qn(),i&&(ai(),jt=qt)}e&&Ut.emit("newBreakpointEnd",Si(t))}}function Ln(){if(!ot&&!rt)return K<=(ct?ft-(ft-1)/2:ft);var t=ot?(ot+lt)*K:_[K],e=ut?st+2*ut:st+lt;return ct&&(e-=ot?(st-ot)/2:(st-(_[qt+1]-_[qt]-lt))/2),t<=e}function Bn(){for(var t in F=0,k)(t=parseInt(t))<=J&&(F=t)}function Sn(){!Tt&&Xe&&Ui(Xe),!Ct&&Se&&Ui(Se),xt||(Me?Ui(Me):(Ee&&Ui(Ee),Ae&&Ui(Ae)))}function On(){Tt&&Xe&&_i(Xe),Ct&&Se&&_i(Se),xt&&(Me?_i(Me):(Ee&&_i(Ee),Ae&&_i(Ae)))}function Dn(){if(!ie){if(ut&&(V.style.margin="0px"),Dt)for(var t="tns-transparent",e=Dt;e--;)I&&Vi(Y[e],t),Vi(Y[Ht-e-1],t);Sn(),ie=!0}}function Hn(){if(!te){if(Bt.disabled=!0,G.className=G.className.replace(_t.substring(1),""),Ki(G,["style"]),yt)for(var t=Dt;t--;)I&&Ui(Y[t]),Ui(Y[Ht-t-1]);if(q&&I||Ki(V,["style"]),!I)for(var e=qt,n=qt+K;e<n;e++){var i=Y[e];Ki(i,["style"]),Gi(i,P),Gi(i,W)}Sn(),te=!0}}function kn(){var t=Rn();$.innerHTML!==t&&($.innerHTML=t)}function Rn(){var t=In(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function In(t){null==t&&(t=ii());var n,i,a,r=qt;if(ct||ut?(rt||ot)&&(i=-(parseFloat(t)+ut),a=i+st+2*ut):rt&&(i=_[qt],a=i+st),rt)_.forEach(function(t,e){e<Ht&&((ct||ut)&&t<=i+.5&&(r=e),.5<=a-t&&(n=e))});else{if(ot){var e=ot+lt;ct||ut?(r=Math.floor(i/e),n=Math.ceil(a/e-1)):n=r+Math.ceil(st/e)-1}else if(ct||ut){var o=ft-1;if(ct?(r-=o/2,n=qt+o/2):n=qt+o,ut){var u=ut*ft/st;r-=u,n+=u}r=Math.floor(r),n=Math.ceil(n)}else n=r+ft-1;r=Math.max(r,0),n=Math.min(n,Ht-1)}return[r,n]}function Pn(){St&&!$t&&Fn.apply(null,In()).forEach(function(t){if(!ji(t,ge)){var e={};e[C]=function(t){t.stopPropagation()},ea(t,e),ea(t,xe),t.src=Xi(t,"data-src");var n=Xi(t,"data-srcset");n&&(t.srcset=n),Vi(t,"loading")}})}function zn(t){Vi(t,"loaded"),Wn(t)}function Wn(t){Vi(t,"tns-complete"),Gi(t,"loading"),na(t,xe)}function Fn(t,e){for(var n=[];t<=e;)qi(Y[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function qn(){var t=Fn.apply(null,In());Oi(function(){jn(t,Xn)})}function jn(n,t){return Z?t():(n.forEach(function(t,e){ji(t,ge)&&n.splice(e,1)}),n.length?void Oi(function(){jn(n,t)}):t())}function Vn(){Pn(),Kn(),kn(),$n(),function(){if(Ct&&(Re=0<=ke?ke:ln(),ke=-1,Re!==Ie)){var t=Be[Ie],e=Be[Re];Yi(t,{tabindex:"-1","aria-label":ze+(Ie+1)}),Gi(t,Pe),Yi(e,{"aria-label":ze+(Re+1)+We}),Ki(e,"tabindex"),Vi(e,Pe),Ie=Re}}()}function Gn(){I&&gt&&(S.style[x]=mt/1e3+"s")}function Qn(t,e){for(var n=[],i=t,a=Math.min(t+e,Ht);i<a;i++)n.push(Y[i].offsetHeight);return Math.max.apply(null,n)}function Xn(){var t=gt?Qn(qt,ft):Qn(Dt,K),e=S||V;e.style.height!==t&&(e.style.height=t+"px")}function Yn(){_=[0];var n=q?"left":"top",i=q?"right":"bottom",a=Y[0].getBoundingClientRect()[n];qi(Y,function(t,e){e&&_.push(t.getBoundingClientRect()[n]-a),e===Ht-1&&_.push(t.getBoundingClientRect()[i]-a)})}function Kn(){var t=In(),n=t[0],i=t[1];qi(Y,function(t,e){n<=e&&e<=i?Qi(t,"aria-hidden")&&(Ki(t,["aria-hidden","tabindex"]),Vi(t,ye)):Qi(t,"aria-hidden")||(Yi(t,{"aria-hidden":"true",tabindex:"-1"}),Gi(t,ye))})}function Jn(t){return t.nodeName.toLowerCase()}function Un(t){return"button"===Jn(t)}function _n(t){return"true"===t.getAttribute("aria-disabled")}function Zn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function $n(){if(xt&&!ht&&!yt){var t=Ce?Ee.disabled:_n(Ee),e=we?Ae.disabled:_n(Ae),n=qt<=Vt,i=!ht&&Gt<=qt;n&&!t&&Zn(Ce,Ee,!0),!n&&t&&Zn(Ce,Ee,!1),i&&!e&&Zn(we,Ae,!0),!i&&e&&Zn(we,Ae,!1)}}function ti(t,e){x&&(t.style[x]=e)}function ei(t){return null==t&&(t=qt),rt?(st-(ut?lt:0)-(_[t+1]-_[t]-lt))/2:ot?(st-ot)/2:(ft-1)/2}function ni(){var t=st+(ut?lt:0)-(ot?(ot+lt)*Ht:_[Ht]);return ct&&!yt&&(t=ot?-(ot+lt)*(Ht-1)-ei():ei(Ht-1)-_[Ht-1]),0<t&&(t=0),t}function ii(t){var e;if(null==t&&(t=qt),q&&!rt)if(ot)e=-(ot+lt)*t,ct&&(e+=ei());else{var n=d?Ht:ft;ct&&(t-=ei()),e=100*-t/n}else e=-_[t],ct&&rt&&(e+=ei());return kt&&(e=Math.max(e,Rt)),e+=!q||rt||ot?"px":"%"}function ai(t){ti(G,"0s"),ri(t)}function ri(t){null==t&&(t=ii()),G.style[Pt]=zt+t+Wt}function oi(t,e,n,i){var a=t+ft;yt||(a=Math.min(a,Ht));for(var r=t;r<a;r++){var o=Y[r];i||(o.style.left=100*(r-qt)/ft+"%"),B&&p&&(o.style[p]=o.style[m]=B*(r-t)/1e3+"s"),Gi(o,e),Vi(o,n),i&&Ot.push(o)}}function ui(t,e){It&&en(),(qt!==jt||e)&&(Ut.emit("indexChanged",Si()),Ut.emit("transitionStart",Si()),gt&&qn(),qe&&t&&0<=["click","keydown"].indexOf(t.type)&&hi(),Kt=!0,nn())}function li(t){return t.toLowerCase().replace(/-/g,"")}function si(t){if(I||Kt){if(Ut.emit("transitionEnd",Si(t)),!I&&0<Ot.length)for(var e=0;e<Ot.length;e++){var n=Ot[e];n.style.left="",m&&p&&(n.style[m]="",n.style[p]=""),Gi(n,z),Vi(n,W)}if(!t||!I&&t.target.parentNode===G||t.target===G&&li(t.propertyName)===li(Pt)){if(!It){var i=qt;en(),qt!==i&&(Ut.emit("indexChanged",Si()),ai())}"inner"===R&&Ut.emit("innerLoaded",Si()),Kt=!1,jt=qt}}}function ci(t,e){if(!ne)if("prev"===t)fi(e,-1);else if("next"===t)fi(e,1);else{if(Kt){if(Qt)return;si()}var n=un(),i=0;if("first"===t?i=-n:"last"===t?i=I?K-ft-n:K-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(K-1,t))),i=t-n)),!I&&i&&Math.abs(i)<ft){var a=0<i?1:-1;i+=Vt<=qt+i-K?K*a:2*K*a*-1}qt+=i,I&&yt&&(qt<Vt&&(qt+=K),Gt<qt&&(qt-=K)),un(qt)!==un(jt)&&ui(e)}}function fi(t,e){if(Kt){if(Qt)return;si()}var n;if(!e){for(var i=bi(t=xi(t));i!==Me&&[Ee,Ae].indexOf(i)<0;)i=i.parentNode;var a=[Ee,Ae].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(ht){if(qt===Vt&&-1===e)return void ci("last",t);if(qt===Gt&&1===e)return void ci("first",t)}e&&(qt+=dt*e,rt&&(qt=Math.floor(qt)),ui(n||t&&"keydown"===t.type?t:null))}function di(){Fe=setInterval(function(){fi(null,Qe)},Et),qe=!0}function vi(){clearInterval(Fe),qe=!1}function pi(t,e){Yi(Xe,{"data-action":t}),Xe.innerHTML=Ke[0]+t+Ke[1]+e}function mi(){di(),Xe&&pi("stop",At[1])}function hi(){vi(),Xe&&pi("start",At[0])}function yi(){qe?(hi(),Ve=!0):(mi(),Ve=!1)}function gi(t){t.focus()}function xi(t){return Ci(t=t||h.event)?t.changedTouches[0]:t}function bi(t){return t.target||h.event.srcElement}function Ci(t){return 0<=t.type.indexOf("touch")}function wi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Mi(){return a=Ze.y-_e.y,r=Ze.x-_e.x,t=Math.atan2(a,r)*(180/Math.PI),e=Xt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===O.axis;var t,e,n,i,a,r}function Ti(t){if(Kt){if(Qt)return;si()}Tt&&qe&&vi(),$e=!0,Ue&&(Di(Ue),Ue=null);var e=xi(t);Ut.emit(Ci(t)?"touchStart":"dragStart",Si(t)),!Ci(t)&&0<=["img","a"].indexOf(Jn(bi(t)))&&wi(t),Ze.x=_e.x=e.clientX,Ze.y=_e.y=e.clientY,I&&(Je=parseFloat(G.style[Pt].replace(zt,"")),ti(G,"0s"))}function Ei(t){if($e){var e=xi(t);Ze.x=e.clientX,Ze.y=e.clientY,I?Ue||(Ue=Oi(function(){!function t(e){if(!Yt)return void($e=!1);Di(Ue);$e&&(Ue=Oi(function(){t(e)}));"?"===Yt&&(Yt=Mi());if(Yt){!be&&Ci(e)&&(be=!0);try{e.type&&Ut.emit(Ci(e)?"touchMove":"dragMove",Si(e))}catch(t){}var n=Je,i=tn(Ze,_e);if(!q||ot||rt)n+=i,n+="px";else{var a=d?i*ft*100/((st+lt)*Ht):100*i/(st+lt);n+=a,n+="%"}G.style[Pt]=zt+n+Wt}}(t)})):("?"===Yt&&(Yt=Mi()),Yt&&(be=!0)),be&&t.preventDefault()}}function Ai(i){if($e){Ue&&(Di(Ue),Ue=null),I&&ti(G,""),$e=!1;var t=xi(i);Ze.x=t.clientX,Ze.y=t.clientY;var a=tn(Ze,_e);if(Math.abs(a)){if(!Ci(i)){var n=bi(i);ea(n,{click:function t(e){wi(e),na(n,{click:t})}})}I?Ue=Oi(function(){if(q&&!rt){var t=-a*ft/(st+lt);t=0<a?Math.floor(t):Math.ceil(t),qt+=t}else{var e=-(Je+a);if(e<=0)qt=Vt;else if(e>=_[Ht-1])qt=Gt;else for(var n=0;n<Ht&&e>=_[n];)e>_[qt=n]&&a<0&&(qt+=1),n++}ui(i,a),Ut.emit(Ci(i)?"touchEnd":"dragEnd",Si(i))}):Yt&&fi(i,0<a?-1:1)}}"auto"===O.preventScrollOnTouch&&(be=!1),Xt&&(Yt="?"),Tt&&!qe&&di()}function Ni(){(S||V).style.height=_[qt+ft]-_[qt]+"px"}function Li(){var t=ot?(ot+lt)*K/st:K/ft;return Math.min(Math.ceil(t),K)}function Bi(){if(Ct&&!ve&&De!==He){var t=He,e=De,n=_i;for(De<He&&(t=De,e=He,n=Ui);t<e;)n(Be[t]),t++;He=De}}function Si(t){return{container:G,slideItems:Y,navContainer:Se,navItems:Be,controlsContainer:Me,hasControls:fe,prevButton:Ee,nextButton:Ae,items:ft,slideBy:dt,cloneCount:Dt,slideCount:K,slideCountNew:Ht,index:qt,indexCached:jt,displayIndex:rn(),navCurrentIndex:Re,navCurrentIndexCached:Ie,pages:De,pagesCached:He,sheet:Bt,isOn:U,event:t||{}}}M&&console.warn("No slides found in",O.container)};return aa}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map


/*
magneticScroll v1.0
by Maxime Gaul
https://github.com/maximegaul/magnetic-scroll
*/

jQuery.fn.reverse = [].reverse;

// custom 'scrolldelta' event extends 'scroll' event
jQuery.event.special.scrolldelta = {
    delegateType: "scroll",
    bindType: "scroll",
    handle: function (event) {
        var handleObj = event.handleObj;
        var targetData = jQuery.data(event.target);
        var ret = null;
        var elem = event.target;
        var isDoc = elem === document;
        var oldTop = targetData.top || 0;
        var oldLeft = targetData.left || 0;
        targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
        targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
        event.scrollTopDelta = targetData.top - oldTop;
        event.scrollTop = targetData.top;
        event.scrollLeftDelta = targetData.left - oldLeft;
        event.scrollLeft = targetData.left;
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = handleObj.type;
        return ret;
    }
};


(function($)
{
    $.magneticScroll = function(options)
    {

            var defauts =
            {
                "selector": ".magnetic",
                "easing": "swing",
                "speed": 500,
                "timeout": 200,
                beforeScroll: $.noop,
                afterScroll: $.noop
            };

            var params = $.extend(defauts, options);


            var methods = {

                animateScroll: function($el, offset, direction){

                    params.beforeScroll();

                    $("html, body").stop().animate({'scrollTop': offset+'px'}, params.speed, params.easing, function() {

                        setTimeout(function() {

                            $("html,body").stop().removeClass('magnetic-scrolling');
                            params.afterScroll($el, direction);

                        }, params.timeout);

                    });

                }
            };


            $(params.selector).each(function() {

                $(this).attr("data-offset", $(this).offset().top);

            });


            $(window).on('scrolldelta', function(e){
                
                e.preventDefault(); // fix jump on Chrome


                if( !$('body').hasClass('magnetic-scrolling') ) {

                    $('body').addClass('magnetic-scrolling');

                    var st = e.scrollTop;
                    var evt = window.event || e; //equalize event object
    								var topDelta = e.scrollTopDelta;

                    console.log(topDelta);

                    if( delta > 0 ) {

                        if($(window).scrollTop() > 0) {

                            $(params.selector).reverse().each(function() {

                                var scrolled = 0;

                                if( Math.round($(this).attr("data-offset"))<Math.round(st)) {

                                    methods.animateScroll($(this), $(this).attr("data-offset"), 'up');
                                    scrolled = 1;
                                    return false; //break
                                }

                                if(scrolled === 0) {
                                    methods.animateScroll($(this), 0, 'up');
                                }
                            });

                        } else {
                            $("html,body").stop().removeClass('magnetic-scrolling');
                        }
                    }
                    else {

                        var allFinished = true;

                        $(params.selector).each(function() {

                            if(Math.round($(this).attr("data-offset"))>Math.round(st)) {
                                allFinished = false;
                                methods.animateScroll($(this), $(this).attr("data-offset"), 'down');
                                return false; //break
                            }
                        });

                        if(allFinished) $("html,body").stop().removeClass('magnetic-scrolling');
                    }


                } else {
                    e.preventDefault();
                }

                e.stopPropagation();
                return;

            });


    };
    
})(jQuery);






/*
 * VARIABLES
 *******************/ 
	var lang = $("html").attr("xml:lang");


	var window_width = window.innerWidth;
	var window_height = window.innerHeight - 200;
	var mobile_window;

	var body = $('body');

	var header_container = $('.site-header');
	var header_height = header_container.innerHeight();
	var scroll_top = $(window).scrollTop();

	var main_content_container = $('#main-content');
	
	var exposition = $('.wrap_exposition'),
			home = $('.wrap_home'),
			agenda = $('.wrap_agenda');



  if( window_width < 880 ) {
  	mobile_window = true;
  } else {
  	mobile_window = false;
  }

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



/*
 * FUNCTIONS
 *******************/ 

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);


(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream;};function w(l){return function($){return $.test(l);};}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o;}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f;}else if(typeof define==="function"&&define.amd){define(function(){return f;});}else{this['isMobile']=f;}})();



/*
 * HELPERS : IS ON SCREEN 
 *******************/


	$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() / 2;

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};


	$.fn.isOnCenterScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + ( win.height() / 3 * 2 );
    viewport.top = viewport.top + ( win.height() / 3 );

    // Emplacement de l'élément 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() / 2;

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};



/*
 * Function for mediatheque iframes 
 *******************/

	var mediatheque_countdown;
	var hover_in_timeout;
	var hover_out_timeout;
	var teaser_player;
	var teaser_iframe;
	var teaser_btn;
	var teaser_count = 0;
	var data_time_chromless = 10;

	if( $('[data-time-chromless]').length > 0 ) {
		data_time_chromless = $('[data-time-chromless]').attr('data-time-chromless');
	}	

	var launch_video_preview = function( that ) {

 		if( teaser_player ) {
			teaser_player.unload();
			teaser_player = null;
		}

			teaser_iframe = that.find('iframe');
			teaser_player = new Vimeo.Player(teaser_iframe);

			teaser_btn = that.find('.teaser_media_play');
			teaser_btn.addClass('hidden');

			hover_in_timeout = setTimeout( function() {

				if( teaser_player ) {

					teaser_player.play().then( function() {
						teaser_player.setVolume(0.7);
					});

					mediatheque_countdown = setInterval(myTimer, 1000);
					teaser_count = 0;

					function myTimer() {

						if( teaser_count == data_time_chromless ) {
							if( teaser_player ) {
								teaser_player.unload().then(function() {
									teaser_btn.removeClass('hidden');
									clearInterval(mediatheque_countdown);
									return;
								});
							}

						}
						else {
							teaser_count++;
						}
					  
					}
				}

			},

			500);

	};

	var unload_video_preview = function( that ) {

		clearTimeout(hover_in_timeout);

		hover_out_timeout = setTimeout( function() {

			if( teaser_player ) {

				teaser_player.unload().then(function() {
					$('.teaser_media_play').addClass('hidden');
					clearInterval(mediatheque_countdown);
					teaser_count = 0;
					return;
				});

			}

		},
		50);

	};

	var teaser_autoplay = function( els ) {

		els.each( function( ) {

			var that = $(this);
			var that_vid_id = that.parents('.teaser_manif_virtual').attr('data-id');
			var video_in;

			if( that.parents('.teaser_manif_virtual').attr('data-type-media') == 'video' ) {

				if( isMobile.any ) {

					$(window).scroll(function() {

					  if( $(that).isOnCenterScreen() == true && that_vid_id != video_in ) {

					  	//console.log( that_vid_id + ' is in !' );
					  	
					  	video_in = that_vid_id;

					  	launch_video_preview( $(that) );

					  }
					  else if( $(that).isOnCenterScreen()&& that_vid_id == video_in ) {
							//console.log( that_vid_id  + ' is still in !');

					  }
					  else {

					  	if( that_vid_id == video_in ) {
					  		// console.log( that_vid_id  + ' is out !');
					  		
					  		video_in = null;
					  		unload_video_preview( $(that) );

					  	}
					  	else {

					  	}

					  }

					});

				}

				else {

						$(this).hover( 

						  function() {

						  	launch_video_preview( $(this) );

						  }, 

						  function() {

						  	unload_video_preview( $(this) );

						  } 

						); 

					}
			} 

		}); 

	};



	var save_media_progression = function( player ) {

		var media_id = $('.page_header--live').attr('data-id');
		var media_progression = $('.page_header--live').attr('data-progression');
		var media_duration = $('.page_header--live').attr('data-duree');
		var media_type = $('.page_header--live').attr('data-type-media');

		if(typeof localStorage!='undefined') {

			player.getDuration().then(function(duration) {
			  media_duration = duration;
			});

			window.setInterval(function(){
				
				player.getCurrentTime().then(function(seconds) {

 					media_progression = Math.floor(seconds / media_duration * 100);

					var media_progression_data = {
					  progression: media_progression
					};

					var media_progression_json = JSON.stringify(media_progression_data);
					var media_progression_key = "media_progression_" + media_id;

					localStorage.setItem(media_progression_key ,media_progression_json);

					$('.page_header--live').attr('data-progression', media_progression);

				});

			}, 5000);


		}

	};


	var get_media_progression = function( els ) {

		els.each( function() {

			var that = $(this);

			var media_id = that.attr('data-id');
			var media_progression_key = "media_progression_" + media_id;
			var media_progression_json = localStorage.getItem(media_progression_key);
			var media_progression = JSON.parse(media_progression_json);

			if( media_progression ) {
				that.attr('data-progression', media_progression.progression);
				that.find('.progression_status').css('width', media_progression.progression + '%');
			}
			else {
				that.find('.teaser_progressionbar').hide();
			}

		});

	};




	// Handle page visibility change events
	function handleVisibilityChange() {

	  if( teaser_player ) {

	   	teaser_player.unload();
	   	teaser_player = null;
	   	
	   	$('.teaser_media_play').addClass('hidden');

	  }
	
	}

	document.addEventListener('visibilitychange', handleVisibilityChange, false);
 	window.addEventListener('blur', handleVisibilityChange);




jQuery.fn.extend({


/**
 * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
 *
 * @param  {[object]} e           [Mouse event]
 * @param  {[integer]} intWidth   [Popup width defalut 500]
 * @param  {[integer]} intHeight  [Popup height defalut 400]
 * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
 */
  customerPopup: function (e, intWidth, intHeight, blnResize) {

    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  },

 
  textMetrics: function(el) {
    
    var tm = document.createElement('span'),
      $tm = $(tm);
    $tm.css({
      border: 0,
      padding: 0,
      position: 'absolute',
      visibility: 'hidden'
    });
    
    tm.appendChild(
      document.createTextNode(el.textContent || el.innerText)
    );
    
    el.appendChild(tm);
    var rect = tm.getClientRects()[0];
    $tm.remove();
    
    return {
      height: rect.bottom - rect.top,
      width: rect.right - rect.left
    };
  }
  



});



function get_hour() {

	$('.clock').each(function() {

      var hours = $(this).attr('data-hour');
      var mins =  $(this).attr('data-min');

			if( hours == 'close' ) {
	      $(this).find(".hour").css({ "transform": 'scale(0)'});
	      $(this).find(".min").css({ "transform" : 'scale(0)' });
 			} 
 			else {
	      var hdegree = hours * 30 + (mins / 2);
	      var hrotate = "rotate(" + hdegree + "deg)";

	      var mdegree = mins * 6;
	      var mrotate = "rotate(" + mdegree + "deg)";

	      $(this).find(".hour").css({ "transform": hrotate});
	      $(this).find(".min").css({ "transform" : mrotate });
 			}


 	});

}


function close_nav() {

	if( jQuery.browser.mobile || mobile_window ) {
		$('html, body').animate( { scrollTop: $('.agenda_today').offset().top -150 }, 250 );
	} 
	else {
		$('html, body').animate( { scrollTop: 0 }, 250 );
	}

}


function set_agenda_pins() {

	var pins = $('.pinned.agenda_date');

	pins.each(function( index ) {

		var this_height = $(this).innerHeight();
		var this_parent = $(this).closest('.scene');
		var this_parent_height = this_parent.innerHeight();

		if( this_parent_height > window_height) {
			  $(this).hcSticky({
			    stickTo: this_parent[0],
			    top: 0,
			    bottom: 50,
			  });
		}
	});

} 

function set_pins( outer ) {

	var pins = $('.pinned');

	pins.each(function( index ) {

		if( $(this).closest('.oeuvre_carnet').length > 0 ) {
			return;
		}


		if( $(this).is(":visible") ) {

			var this_height = $(this).innerHeight();
			var this_parent = $(this).closest('.scene');
			var this_parent_height = this_parent.innerHeight();


			if( this_parent_height > window_height ) {

				if( $(this).hasClass("expo_dates_inner") ) {
				  $(this).hcSticky({
				    stickTo: this_parent[0],
				    top: 340,
				    bottom: 50,
				    followScroll: false,
				    queries: {
			        768: {
			          disable: true
			        }
			      },
			      onStart: function() {
			      	$('.expo_practical').addClass('fixed').removeClass('released');
			      },
			      onStop: function() {
			      	$('.expo_practical').addClass('released').removeClass('fixed');
			      }
			      // onStart: function() {
			      // 	$('.expo_practical').css('opacity', '1').addClass('fixed').removeClass('released');
			      // },
			      // onStop: function() {
			      // 	$('.expo_practical').css('opacity', '1').addClass('released').removeClass('fixed');
			      // }
				  });
				} 
				else {

				  $(this).hcSticky({
				    stickTo: this_parent[0],
				    top: 140,
				    bottom: 50,
				    followScroll: false,
				    queries: {
			        768: {
			          disable: true
			        }
			      }
				  });
				}
			}

		}
	
	});

}








  // SCROLLING ANIMATIONS


  $('.js-up-trigger').on('click', function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow", function() {
    	$( ".btn--up" ).removeClass( "active" );
	  });
    return false;
  });

 

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 20;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	function handle_scroll_for_header() {

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

	}

	function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('#backtomediatheque').addClass('hide');
        $( ".btn--up" ).removeClass( "active" );
        $('.news_feed.top').addClass('fixed_top');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        		$('#backtomediatheque').removeClass('hide');
            $( ".btn--up" ).addClass( "active" );
        		$('.news_feed.top').removeClass('fixed_top');
        }
    }
    
    lastScrollTop = st;
	}





jQuery( document ).ready(function( ) {



	/*
	 * remove admin toolbar for thomas
	 *******************/ 	
    
	if ( document.location.host == 'fgl.local') {

		console.log('hello thomas');

		$('#admin-menu-wrapper').css('display', 'none');
		$('.localtask').css('display', 'none');
		body.css('padding-top', '0');
		body.removeClass('admin-menu adminimal-menu');

	}



/*
 * SCROLL Thing
 *******************/ 	

	if( jQuery.browser.mobile || mobile_window ) {
		setTimeout( set_agenda_pins(), 1000 );
	  document.addEventListener("touchmove", handle_scroll_for_header, false);
	  document.addEventListener("scroll", handle_scroll_for_header, false);
	  document.addEventListener("touchend", handle_scroll_for_header, false);

	} else { 
		setTimeout( set_pins(), 1000 );
	}





/*
 * Clock icons
 *******************/ 

 	get_hour();




/*
 * On Scroll
 *******************/ 

	var hp_offset_trigger = $(window).height() / 2;

	$( window ).scroll(function() {

		// MENU ON SCROLLING

	  if( $(window).scrollTop() > 20 ){
	    header_container.addClass('white');
	    $('#backtomediatheque').addClass('white');

	    body.addClass('scrolling');

	  }
		else {
	    body.removeClass('scrolling');

			if( agenda.length > 0 ) {
				
			} else {
				header_container.removeClass('white');
	    $('#backtomediatheque').removeClass('white');
			}
	  }

	  if( $('.site-header').hasClass('open') ) {
		  $('.menu_child').slideUp(50,
    		function(){
    			$('.menuparent').removeClass('open');
					$('.site-header').removeClass('open');
		  	});
		  $('.active-trail').removeClass('disable');
	  }



		// Add Class for home bg


	  if( $(window).scrollTop() > hp_offset_trigger ){

	    body.addClass('hp_scrolling');

	  }
		else {
	    body.removeClass('hp_scrolling');

	  }




	});



	if( agenda.length === 1 ) {
		header_container.addClass('white');
	}

	$('.js-trigger').on('click', function(event) {
		$(this).siblings('.js-dropdown').slideToggle();
		$(this).find('h2 > span').toggleClass('icon-down icon-up');
	});


	$(".js-trigger-height").bind("click", function(event){
		$(".agenda_trigger").toggleClass('open');
		$(this).find('span').toggleClass('icon-down icon-up');

		if( $(".agenda_trigger").hasClass('open') ) {
		}
		else {
		}
	});



/*
 * CARNET SCRIPTS
 *******************/ 






	var carnetIntro_height = $('.carnet_intro').outerHeight();
	$('.oeuvre_carnet').css( 'max-height', carnetIntro_height + 80);
	
	$("#js-openCarnet").on('click', function(event) {
		event.preventDefault();

		if( $(".oeuvre_carnet").hasClass('open') ) {
			$(".oeuvre_carnet").css('max-height', carnetIntro_height + 80);
		}
		else {
			$(".oeuvre_carnet").css('max-height', '100000px');
			set_pins( );
		}

		$(".oeuvre_carnet").toggleClass('open');
		$('.btn-openCarnet').toggleClass('icon-down icon-up');

	});

	$('.btn-openCarnet').on('click', function(event) {
		event.preventDefault();

		if( $(".oeuvre_carnet").hasClass('open') ) {
			$(".oeuvre_carnet").css('max-height', carnetIntro_height + 80);
		}
		else {
			$(".oeuvre_carnet").css('max-height', '100000px');
			set_pins( );
		}

		$(".oeuvre_carnet").toggleClass('open');
		$('.btn-openCarnet').toggleClass('icon-down icon-up');
		
	});

	var previous_idr;
	var slider;


	$(".cst-slide-item").click(function(event){
		event.preventDefault();
		
		var that_idr = $(this).attr('data-idr');

		var language=$("html").attr("xml:lang");
		var url = '/'+language+'/ajax/carnet?idr='+that_idr;

		var that_img_id = parseInt($(this).attr('data-id'));

	  $.ajax({
	     url : url,
	     type : 'GET',
	     dataType : 'json',

	     success : function(data, statut){

        	body.addClass('no-scroll');
					var items = [];
					var output;

					$('#slide-modal_title').html('');
					$('#slide-modal_credits').html('');
					$('#slide-modal_caption').html('');

			    if( that_idr != previous_idr ) { // IF IDR CALLED FOR THE FIRST TIME

	        	if( data.length === 1 ) { // IF SINGLE IMAGE
					  
						  $.each( data, function( key, val ) {
						  	//console.log(val);
						  	slide_nbr = key + 1;
						    items.push( '<li id="' + key + '" data-title="' + val.title + '" data-credits="' + val.credits + '" data-description="' + val.description + '"><img src="' + val.url_modal + '"  alt="" class="mb-02"></li>'
						   	);

							    var title = val.title;
							    var credits = val.credits;
							    var description = val.description;

							    $('#slide-modal_title').html(title);

							    if( credits != '' ) {
							      $('#slide-modal_credits').html('<span class="sep">|</span>' + credits);
							    }
							    if( description != '' ) {
							      $('#slide-modal_caption').html('<span class="sep">|</span>' + description);
							    }

						  });

						  output = $( "<ul/>", {
						    "class": "no-bullets single-img",
						    html: items.join( "" )
						  });


						}
						else { // IF MULTIPLE IMAGE

						  $.each( data, function( key, val ) {
						  	//console.log(val);
						  	slide_nbr = key + 1;
						  	console.log(val.title);

						    items.push( '<li id="' + key + '" data-title="' + val.title + '" data-credits="' + val.credits + '" data-description="' + val.description + '"><img src="' + val.url_modal + '"  alt="" class="mb-02"></li>'
						   	);
						  });

						  output = $( "<ul/>", {
						    "class": "no-bullets modal-slider",
						    html: items.join( "" )
						  });

						  $('#data_length').html( data.length );

						}

						// ADD MARKUP AND DISPLAY
					  $( ".modalslide_outer" ).html(output);
	        	$('.slide-modal').css('display', 'flex');


	        	if( data.length !== 1 ) { // TRIGGER SLIDER

				      slider = $('.modalslide_outer ul').bxSlider({
				          pager: false,
				          nextSelector: "#js-item_next--modal",
				          prevSelector: "#js-item_prev--modal",
				          nextText: " > ",
				          prevText: " < ",
				          startSlide:0,
				          useCSS:false,
				          onSliderLoad: function(currentIndex) {

							      $('#slide_nbr').html( currentIndex + 1 );

							      var slide_title = $('#' + currentIndex).attr('data-title');
							      var slide_credits = $('#' + currentIndex).attr('data-credits');
							      var slide_description = $('#' + currentIndex).attr('data-description');

							      $('#slide-modal_title').html(slide_title);
								    
								    if( slide_credits != '' ) {
								      $('#slide-modal_credits').html('<span class="sep">|</span>' + slide_credits);
								    }
								    if( slide_description != '' ) {
								      $('#slide-modal_caption').html('<span class="sep">|</span>' + slide_description);
								    }

				          },
									onSlideAfter: function($slideElement, oldIndex, newIndex) {

							       var slide_title = $slideElement.attr('data-title');
							       var slide_credits = $slideElement.attr('data-credits');
							       var slide_description = $slideElement.attr('data-description');

							       $('#slide-modal_title').html(slide_title);
							       
								    if( slide_credits != '' ) {
								      $('#slide-modal_credits').html('<span class="sep">|</span>' + slide_credits);
								    }
								    if( slide_description != '' ) {
								      $('#slide-modal_caption').html('<span class="sep">|</span>' + slide_description);
								    }

							       $('#slide_nbr').html( newIndex + 1 );

							    },
				      });
				      slider.goToSlide(that_img_id);
				      $('.modal_nav').show();

	        	}
	        	else { // JUSTE HIDE NAV FOR SINGLE IMAGE
	        		$('.modal_nav').hide();
	        	}
			    } 

			    else { // IF SAME IDR CALLED


				    // SHOW
				    $('.modal_nav').show();
	        	$('.slide-modal').css('display', 'flex');
	        	

			    	// GO TO SLIDE
	        	slider.reloadSlider();
	        	slider.goToSlide(that_img_id);


			    }

					previous_idr = that_idr;

	     },

	     error : function(resultat, statut, erreur){
	     },

	     complete : function(resultat, statut){
	     }

	  });

	});

	$('body').on('click', '#modal_close', function() {
		$('#js-item_next--modal').html('');
		$('#js-item_prev--modal').html('');
	});


   // CHARGEMENT PDF CARNET DE PRODUCTION
    $("body").on("click", ".pdf-link", function(event) {
  		
  		window.frames['pdf_viewer_frame'].location = 'https://docs.google.com/gview?url='+$(this).attr("data-href")+'&embedded=true&toolbar=hide';

  		//window.frames['pdf_viewer'].location = '/file?url='+$(this).attr("data-href")+'&mime=application/pdf';
  		$("#pdf_viewer").css("display","block");
      $('body').addClass('no-scroll');

    }); 

  	// FERMETURE PDF CARNET DE PRODUCTION
  	$("body").on("click", ".close_pdf_viewer", function(event) {
      $("#pdf_viewer").hide();   
      $('body').removeClass('no-scroll');
  	}); 





  if( iOS && mobile_window ) {

    $('.item-vid').each( function() {

      $(this).remove();

    });
  }



/*
 * MENU
 *******************/ 


	$('.menuparent > a').on('click', function(event) {
		event.preventDefault();
		var parent = $(this).parent();

		if( parent.hasClass('active-trail') ) {

		} 
		else {
			$('.active-trail').addClass('disable');
		}

		if( parent.hasClass('open') ) {
			$('.site-header').removeClass('open');
			parent.find('.menu_child').hide();
			parent.removeClass('open');
			//$('body').removeClass('no-scroll')
			$('.active-trail').removeClass('disable');
		}
		else {
			$('.menu_child').slideUp(100,
    		function(){
		  	});			
			parent.find('.menu_child').slideToggle('slow');
			$('.site-header').addClass('open');
			parent.siblings().removeClass('open');
			parent.addClass('open');
			//$('body').addClass('no-scroll')
		}
	});

	$('.after_header').click(function() {
			$('.site-header').removeClass('open');
			$('.menu_child').hide();
			$('.menuparent').removeClass('open');
			$('.active-trail').removeClass('disable');
	});


	if( mobile_window ) {

		if( $('#back_collection_search').length > 0 ) {
			$('.padtop-2').not('.js-stay').css('padding-top', header_height);

		}
		else {
			$('.padtop-2').not('.js-stay').css('padding-top', header_height + 30);
		}
		//$('.menu_child').css('top', header_height + 30);
	}




/*
 * Design stuffs
 *******************/ 

	if( exposition.length > 0 ) {

		if( jQuery.browser.mobile || mobile_window) {
		} 
		else {
			var page_header_caption_height = $('.page_header_caption').outerHeight();

			var event_date_position = $('.event_date_start').position().top;

			var event_dates_height = $('.event_date_start').outerHeight() + event_date_position + 56 + 14 + page_header_caption_height;

			$('.page_mainInfos').css('margin-top', - event_dates_height);
		}
	
	}


	if( jQuery.browser.mobile || mobile_window ) {

		$('.site-title').html('LA');

		$('.agenda_trigger').find('br').remove();
		
		$('.fh_1').find('br').remove();

		if( $('.node-type-acteur').length > 0 ) {
			$('.nav_page-prev').html($('.nav_page-prev').text().replace('artiste précédent','<span class="el icon-lien_interne--left"></span><br/>artiste<br/>précédent')); 
			$('.nav_page-next').html($('.nav_page-next').text().replace('artiste suivant','<span class="el icon-lien_interne"></span><br>artiste<br/>suivant<br/>')); 
		}
		if( $('.node-type-oeuvre').length > 0 ) {
			$('.nav_page-prev').html($('.nav_page-prev').text().replace('œuvre précédente','<span class="el icon-lien_interne--left"></span><br/>œuvre<br/>précédente')); 
			$('.nav_page-next').html($('.nav_page-next').text().replace('œuvre suivante','<span class="el icon-lien_interne"></span><br>œuvre<br/>suivante'));
		}


		if(agenda) {
			$('.site-header').removeClass('white');
		}

		if( $('.widget_adresse').length > 0 && $('.widget_map').length > 0 ) {
			$('.widget_adresse').insertBefore( $('.widget_map').closest('.layer') );
			$('.widget_map').insertBefore( $('.widget_adresse').closest('.layer') );
		}

		if( $('.widget_restaurant').length > 0 && $('.widget_boutique').length > 0 ) {

			var media_text = $('.widget_restaurant').closest('.scene').find('.flex-s-3').find('.pinned');
			media_text.insertBefore( $('.widget_restaurant') );

			media_text = $('.widget_boutique').closest('.scene').find('.flex-s-3').find('.pinned');
			media_text.insertBefore( $('.widget_boutique') );

		}
		
	}

	$('.nextEvents_card .card').removeClass('card-bordered');






/*
 * Social Sharing buttons
 *******************/ 

    $('.share').on("click", function(e) {
      $(this).customerPopup(e);
    });
       
		$('.share_bymail').on("click", function(event) {
			event.preventDefault();
      $('.modal_share_bymail').css('display', 'flex');
    });
		$('#share_bymail_close').on("click", function(event) {
			event.preventDefault();
      $('.modal_share_bymail').hide();
    });

		$('body').on('click', '#share_bymail_submit', function(event) {
			var form = $('#share_bymail_form');
			form.find(".msg_valid").hide();
			form.find(".msg_error").hide();
			var nom = $('#share_bymail_name').val();
			var email = $('#share_bymail_email').val();
			var message = $('#share_bymail_message').val();
			var titre = form.find("#share_title").val();
			var lien = form.find("#share_link").val();
			var language=$("html").attr("xml:lang");	
			
			
			var nb_error=0;

			if(message.length == 0){
				form.find("input,textarea").blur();
				form.find("textarea").focus().addClass('error');
				nb_error++;
			}
			
			if(!isEmail(email)){
				form.find("input,textarea").blur();
				form.find("input[type=text]:eq(1)").focus().addClass('error');
				nb_error++;
			}
			
			if(nom==''){
				form.find("input,textarea").blur();
				form.find("input[type=text]:eq(0)").focus().addClass('error');
				nb_error++;
			}
			
			if(nb_error>0){
				form.find(".msg_error").show();
				return false;
			}
		
			form.find(".msg_error").hide();
			form.find(".btn").attr("disabled",true);
			form.css("opacity","0.5");
			jQuery.ajax({
				url: "/"+language+"/partage/courriel",
				type: "POST",
				dataType: "json",
				data: { email: email, nom : nom, message : message, titre : titre, lien : lien},
				success: function(data){
					
					form.find(".btn").attr("disabled",false);
					form.css("opacity","1");
					form.find("input[type=text],textarea").val("");
					form.find("label,input,textarea,.description_mandatory").hide();
					form.find(".form_msg").show();
					form.find(".msg_valid").show();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					form.css("opacity","1");
					form.find(".msg_error").show();
		    }
			});
		});	






/*
 * Date picker for agenda
 *******************/ 


	function unavailable(date) {

		var q = new Date();
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();

		var dmy = new Date(y,m,d);
	  today = new Date();

		if( dmy < today )
		{
	    return [true,"passed",""];
		} 
		else 
		{
	    return [true,"",""];
		} 
	}

	if( $('.datepicker').length > 0 ) {

		var language=$("html").attr("xml:lang");	

    $( ".datepicker" ).each( function() {
    	$(this).datepicker({
	      inline: true,
	      autoSize: true,
	      firstDay: 1,
	      beforeShowDay: unavailable,
	      onSelect: function(){
	          $(".agenda_meta_filters .meta-gray").trigger("click");
	          var nid_expo=$("#agenda_exposition").attr("data-nid");
	          var date=$(this).val();
	          jQuery.ajax({
	          				url: "/"+language+"/ajax/agenda_exposition",
	          				type: "POST",
	          				dataType: "json",
	          				data: { date: date, nid_expo : nid_expo},
	          				success: function(data){
	          					if(data.nid_expo>0 && nid_expo!=data.nid_expo){
	          						$("#wrapper_agenda_exposition #agenda_exposition").remove();
	          						$("#wrapper_agenda_exposition").prepend(data.expo);
	          					}else if(data.nid_expo==0){
	          					$("#wrapper_agenda_exposition #agenda_exposition").remove();
	          					}

	          					close_nav();

	          				},
	          				error: function (xhr, ajaxOptions, thrownError) {
	          					
	          		        }
	          			});
	                
	      }, 
    	});
    });

    $('.ui-datepicker-unselectable').html('<span>&nbsp;</span>');
    
  }


  // MOVE SOME DIV FOR MOBILE

		if( jQuery.browser.mobile || mobile_window) {
			var datepicker_widget = $('#datepicker');
			$('#datepicker_clone').html( datepicker_widget );
			
			var exhibition_todayEvent = $('#exhibition_eventToday');
			$('#exhibition_todayEvent').html( exhibition_todayEvent ).addClass('mb-1');
		} 







/*
 * EDITIONS
 *******************/ 



	$('body').on('click', '.js-openReader', function(event) {
		event.preventDefault();

		var reader_url = $(this).attr('href');

		$('#js-ReaderIframe').attr('src', reader_url);
		$('#js-Reader').removeClass('hidden');
		$('body').addClass('reader_open no-scroll');

	});

	$('body').on('click', '#js-closeReader', function(event) {
		event.preventDefault();

		$('#js-ReaderIframe').attr('src', '');
		$('#js-Reader').addClass('hidden');
		$('body').removeClass('reader_open no-scroll');

	});









/*
 * LIVES // VIRTUALS
 *******************/ 




	var countdown;
	var fades_stopped = false;
	var header_live = $('.page_header--live');
	var data_live = header_live.attr('data-live');
	var data_live_url = header_live.attr('data-live-url');

	
	function trigger_fade_in() {

		if( !( isMobile.any || mobile_window ) ) {
			$("#header").removeClass('hide');
		}

		$('#backtomediatheque').removeClass('hide');
		$('#header_wearelive_title').removeClass('hide');

		if( fades_stopped ) {
			clearInterval(countdown);
		}
		else {
			trigger_fade_out();
		}
	}

	function trigger_fade_out() {
		clearInterval(countdown);
		countdown = setInterval(function() {

			if( !( isMobile.any || mobile_window )  ) {
				$("#header").addClass('hide');
			}

			$('#backtomediatheque').addClass('hide');
			$('#header_wearelive_title').addClass('hide');

		}, 3000);
	}


	function trigger_hidden_header_for_played_video() {

		fades_stopped = false;

		$(window).scroll(function() {

		  if ($('.page_header--live').isOnScreen() == true) {
		  	fades_stopped = false;
				
				clearInterval(countdown);
				countdown = setInterval(function() {

					if( !( isMobile.any || mobile_window )  ) {
			  		$("#header").addClass('hide');
					}

					$('#backtomediatheque').addClass('hide');
					$('#header_wearelive_title').addClass('hide');

			 	}, 3000);

		  }

		  else {
				clearInterval(countdown);

		  	if( !fades_stopped ) {

					if( !( isMobile.any || mobile_window ) ) {
			  		$("#header").removeClass('hide');
					}

					$('#backtomediatheque').removeClass('hide');
					$('#header_wearelive_title').removeClass('hide');
		  	}

		  	fades_stopped = true;

		  }

		});

	}




	function trigger_event_video() {

		$(window).scroll(function() {

			if ( $('.mod-playerfull').isOnCenterScreen() == true) {
				console.log('mod-playerfull on screen')
				$('.mod-playerfull').addClass('open');
		  	}

			else {
				$('.mod-playerfull').removeClass('open');
			}

		});

	}

	if( $('.mod-playerfull').length > 0 ) {
		trigger_event_video();
	}






	$('body').on('click', '#play_live', function() {

		$('#video_upper_layer').hide();

    var iframe = $('#video_layer');
    var player = new Vimeo.Player(iframe);

    $('#videoonpause_layer').hide();

		player.play().then(function() {
			player.setVolume(0.5);

			$('.page_header--live').attr('data-live', '1');

			// HIDE HEADER WHEN MOUSE NOT MOVING

			$('html, body, .header_video_live_inner').mousemove( function() {
				trigger_fade_in();
			});

			trigger_fade_in();

			trigger_hidden_header_for_played_video();


		}).catch(function(error) {

		  switch (error.name) {
		    case 'PasswordError':
		        // The video is password-protected
		        break;

		    case 'PrivacyError':
		        // The video is private
		        break;

		    default:
		        // Some other error occurred
		        break;
		  }

		});

	});






	function test_live_state( ) {

		var live_player;
		var live_iframe;

	  // NOUS SOMMES EN MODE PREVIEW / CHROMLESS
	  ///////////

    if( data_live == '' || data_live == '0' ) {

		    var data_nid = parseInt(header_live.attr('data-nid'));
		    live_iframe = header_live.find('iframe');
				var rand = Math.floor((Math.random()*1000000)+1);

				var url = '/ajax/test_online';

				jQuery.ajax({
					url: url,
					type: "POST",
					dataType: "json",
					data: { 
						nid: data_nid
					},
					success: function(data){

						if (data.live == 1) {

							// NOUS PASSONS EN LIVE
							if ( live_iframe.length > 0 ) {

								console.log('we are live now !');

								data_live_url = data.live_url+'?uid='+rand;
								header_live.find('iframe').attr( 'src', data_live_url );

								live_player = new Vimeo.Player(live_iframe);
								live_player.setVolume(0.7);

								trigger_hidden_header_for_played_video();

								$('html, body, .header_video_live_inner').mousemove( function() {
									trigger_fade_in();
								});

							}

							else {
								data_live_url = data.live_url+'?uid='+rand;

								$('.header_video_live').html('<div><iframe src="' + data_live_url + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>');
								$('.header_video_live').removeClass('hidden');

								live_player = new Vimeo.Player( $('.header_video_live iframe') );
								live_player.setVolume(0.7);

								trigger_hidden_header_for_played_video();

								$('html, body, .header_video_live_inner').mousemove( function() {
									trigger_fade_in();
								});

							}

							data_live = '1';
							header_live.attr('data-live', '1');
							$('.header_arrow').hide();

						}
						else {
							console.log('we are not live now...');

						}

					},
					error: function (xhr, ajaxOptions, thrownError) {

			    }

				});

		}

		// NOUS SOMMES EN LIVE OU EN REPLAY
		else {

			if( $('[data-replay]').length === 0 ) {

				console.log('we are live...');

				trigger_hidden_header_for_played_video();

			  live_iframe = header_live.find('iframe');
				live_player = new Vimeo.Player(live_iframe);
				
				// live_player.setVolume(0).then( function() {
				// 	live_player.play();
				// });

				$('.header_arrow').hide();
			
			}
			else {

				console.log('we are on replay...');
			
			}

			$('html, body, .header_video_live_inner').mousemove( function() {
				trigger_fade_in();
			});

		}
	}



	if( $('.header_video_live').length > 0 && $('.page-file').length === 0 && $('.front').length == 0 ) {

			test_live_state();

	}



	function compte_a_rebours(date_evenement, element) {

    var date_actuelle = new Date();
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    total_secondes = Math.floor(total_secondes);

    if (total_secondes > 0) {

      var jours = Math.floor(total_secondes / (60 * 60 * 24));
      var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
      minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
      secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

			if( jours == 1 || jours == 0 ) {
				if( lang == 'fr') {
					label_days = 'jour';
				}
				else {
					label_days = 'day';
				}
			}
			else {
				if( lang == 'fr') {
					label_days = 'jours';
				}
				else {
					label_days = 'days';
				}
			}

			if( heures == 1 || heures == 0 ) {
				if( lang == 'fr') {
					label_hours = 'heure';
				}
				else {
					label_hours = 'hour';
				}
			}
			else {
				if( lang == 'fr') {
					label_hours = 'heures';
				}
				else {
					label_hours = 'hours';
				}
			}

			if( minutes == 1 || minutes == 0 ) {
				label_minutes = 'minute';
			}
			else {
				label_minutes = 'minutes';
			}

			if( secondes == 1 || secondes == 0) {
				if( lang == 'fr') {
					label_secondes = 'seconde';
				}
				else {
					label_secondes = 'second';
				}
			}
			else {
				if( lang == 'fr') {
					label_secondes = 'secondes';
				}
				else {
					label_secondes = 'seconds';
				}
			}


			if( jours.toString().length == 1 ) {
				jours = '0' + jours;
			}
			if( minutes.toString().length == 1 ) {
				minutes = '0' + minutes;
			}
			if( secondes.toString().length == 1 ) {
				secondes = '0' + secondes;
			}
			if( heures.toString().length == 1 ) {
				heures = '0' + heures;
			}

      $(element).find('.days .count').html( jours );
      $(element).find('.days .clock_label').html( label_days );

      $(element).find('.hours .count').html( heures );
      $(element).find('.hours .clock_label').html( label_hours );

      $(element).find('.minutes .count').html( minutes );
      $(element).find('.minutes .clock_label').html( label_minutes );

      $(element).find('.seconds .count').html( secondes );
      $(element).find('.seconds .clock_label').html( label_secondes );


      var fiveminutes = 60 * 5;
      var twominutes = 60 * 2;


      //if ( total_secondes == fiveminutes || total_secondes == twominutes ) {
      if ( total_secondes % 30 == 0 && $('.front').length == 0 ) {

      	test_live_state( );

      }

    }

    else {

      $('.page_header_contents').hide();
			$('#header_wearelive_title').show();
			$('.header_video_live .header_blur').hide();

			$(element).html('On air');
			$(element).addClass('on_air');

			data_live = '1';
			header_live.attr('data-live', '1');
			
    }

	}

	function launch_compte_a_rebours(date_evenement, element) {
			window.setInterval(function(){
			  compte_a_rebours(date_evenement, element );
			}, 1000);
	}


	var date_actuelle = new Date();

	if( $('#header_eventdate').length > 0 ) {

		var date_evenement_attr = $('#header_eventdate').attr('data-eventdate');
	  var date_evenement = new Date( date_evenement_attr );
	  var element = $('#header_eventdate');

		if( date_actuelle < date_evenement) {
			launch_compte_a_rebours(date_evenement, element);
			$('#header_wearelive_title').hide();
		} else {
			$('.page_header_contents').hide();
			$('#header_wearelive_title').show();
			$('.header_video_live .header_blur').hide();
		}
	}


	$('.teaser_clock').each( function() {

	  var date_evenement = new Date( $(this).attr('data-eventdate') );
	  var element = $(this);

		if( date_actuelle < date_evenement) {
			launch_compte_a_rebours(date_evenement, element);
		} 
		else {
			$(element).html('On air');
		}

	}); 


	var set_transcription = function() {

			var transcription_height = $('#virtual_transcription').outerHeight() + 1000;
			var transcription_maxheight = '32rem';

			$('.virtual_transcription').css( 'max-height', transcription_maxheight );

			$('#js-openTranscription, #transcription_icon').on('click', function(event) {
				event.preventDefault();

				if( $(".virtual_transcription").hasClass('open') ) {
					$(".virtual_transcription").css('max-height', transcription_maxheight );
					var transciption_offset_top = $(".virtual_transcription").offset().top - 300;
					$('html, body').animate( { scrollTop: transciption_offset_top }, 500 );

				}
				else {
					$(".virtual_transcription").css('max-height', transcription_height);
				}

				$(".virtual_transcription").toggleClass('open');
				$('#transcription_icon').toggleClass('icon-down icon-up');
				
			});

	};

	if( $('#virtual_transcription').length > 0 ) {
		setTimeout( set_transcription(), 1000 );
	}







	/* 
	* MEDIATHEQUE
	*******************/ 



	var $teaser_medias = $('.teaser_media');

	teaser_autoplay( $teaser_medias );


	if( $('.medias_grid').length > 0 ) {

			if( $('.teaser_manif_virtual').length % 3 !== 0 ) {
				$('.medias_grid').append('<div></div>');
			}

			var teaser_els =  $('.teaser_manif_virtual');			
			get_media_progression( teaser_els );

	}


	if( $('[data-autoload]').length > 0 ) {

		if( $('[data-type-media="video"]').length > 0 ) {
			var autoload_player = new Vimeo.Player( $('#video_layer iframe') );
			save_media_progression( autoload_player );
		}

		// autoload_player.setVolume(0).then( function() {
		// 	autoload_player.play()
		// });

		$('#video_upper_layer').hide();

		trigger_fade_in();
		trigger_hidden_header_for_played_video();

		data_live = '1';
		header_live.attr('data-live', '1');

		$('html, body, .page_header--live').mousemove( function() {
			trigger_fade_in();

		});
				
	}






	/* 
	* HOMEPAGE (12/2020)
	*******************/ 

	var $hphead_menu_item = $('.hphead_menu_item');
	var $hphead_menu_link = $('.hphead_menu_link');
	var vitesse_defilement = parseInt( $('#hphead_menu').attr('data-vitesse') );
	var hover_latence = parseInt( $('#hphead_menu').attr('data-latence') );
	var highlight_hp_interval;
	var next_el; 
	var display_link_content, remove_link_content; 
	var autoSizeText;



// AUTO RESIZE EVENT FONT SIZE

	var autoSizeText = function() {
		
		console.log('autoSizeText');

	  var el, elements, _i, _len, _results;
	  elements = $('.resize');

	  if (elements.length < 0) {
	    return;
	  }

	  _results = [];
	  for (_i = 0, _len = elements.length; _i < _len; _i++) {
	    el = elements[_i];
	    _results.push((function(el) {
	      var resizeText, _results1;
	      resizeText = function() {
	        var elNewFontSize;
	        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
	        return $(el).css('font-size', elNewFontSize);
	      };
	      _results1 = [];
	      while (el.scrollHeight > el.offsetHeight) {
	        _results1.push(resizeText());
	      }
	      _results1.push(resizeText());
	      return _results1;
	    })(el));
	  }
	  return _results;
	};






	var highlight_hp_links = function( els ) {

			if( $('.focused').length > 0 ) {

				if( next_el === undefined ) {
					next_el = next_el = els.first();
				}

				next_el.removeClass('focused');

				if( next_el.next().length === 0) {
					next_el = els.first();
				}
				else {
					next_el = next_el.next();
				}

				next_el.addClass('focused');
			}
			else {
				next_el = els.first();
				next_el.addClass('focused');			
			}

	}; 




	var launch_hp_links_focus = function( els ) {

		if( vitesse_defilement !== 0 ) {

			highlight_hp_links( els );  

			highlight_hp_interval = setInterval( function() {

				highlight_hp_links( els );  

			}, vitesse_defilement);

		}

	};


	var set_hp_pins = function( ) {

		var pins = $('.hp_pinned');

		pins.each(function( index ) {

			$(this).hcSticky({
			  stickTo: $('#hp_news_scene')[0],
			  top: 150,
			  bottom: 50,
			  followScroll: false,
			  queries: {
			    768: {
			      disable: true
			    }
			  }
			});
		
		});

	};




// New HomePage loaded...

	if( $('.node-type-homepage').length > 0 ) {

		if( ! isMobile.any ) {

			launch_hp_links_focus( $hphead_menu_item );

			set_hp_pins();

			autoSizeText();


// Handle Hover & Out events

			$('body').on('mouseover', '.hphead_menu_link', function(event) {

				var that = $(this);

				var link_img = $(this).attr('data-img');

				// clearTimeout(remove_link_content);

				display_link_content = setTimeout( function() {

					clearInterval(highlight_hp_interval);

					$hphead_menu_item.not( that ).removeClass('focused');
					$hphead_menu_link.not( that ).removeClass('focused');
					$hphead_menu_link.not( that ).parent().addClass('hide');

					$('#hphead_content_bg').css('background-image', 'url(' + link_img + ')');
					$('#hphead_content_bg').addClass('transition');

					that.addClass('focused');

				}, hover_latence);

			});


			$('body').on('mouseout', '.hphead_menu_link', function(event) {

					var that = $(this);

					$hphead_menu_link.removeClass('focused');
					$hphead_menu_item.removeClass('focused hide');

					$('#hphead_content_bg').css('background-image', 'unset');
					$('#hphead_content_bg').removeClass('transition');

					clearTimeout(display_link_content);

					launch_hp_links_focus( $hphead_menu_item );

			});


		}

	}




// HP MOBILE FUNCTIONS

	if( isMobile.any ) {

		$hphead_menu_link.each(function() {

			var that = $(this);
			var link_img = that.attr('data-img-mobile');

			var that_hpscreen_id = that.parents('.hphead_menu_item').attr('data-id');
			var hpscreen_in;
			var bg_screen_isactive = false;

			that.parents('.hphead_menu_item').css('background-image', 'url(' + link_img + ')');

			if( that.find('.link_text--mobile').length === 0 ) {
				that.parents('.hphead_menu_item').hide();
			}
			

		});


	}




// NEWS TICKER

	var news_feed_speed = $('#news_feed').attr('data-vitesse');
	var news_feed_color = $('#news_feed').attr('data-color-text');
	var news_feed_bg = $('#news_feed').attr('data-color-bkg');

	if( news_feed_speed == '' ) {
		news_feed_speed = 20000;
	}
	else {
		news_feed_speed = parseInt(news_feed_speed);
	}

	if( news_feed_color != '' ) {
		$('#news_feed').css('color', news_feed_color);
	}

	if( news_feed_bg != '' ) {
		$('#news_feed').css('background-color', news_feed_bg);
	}	

  $('#news_feed').marquee({
  	duration: news_feed_speed,
  	startVisible: true,
  	delayBeforeStart: 500,
  	duplicated: true,
  });







	/* 
	* COLLECTIONS TPL (05/2021)
	*******************/ 


	var $coll_slide_imgs = $('.collections_slider--img');

	if( $coll_slide_imgs.length > 0 ) {

		$coll_slide_imgs.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			if(slick.slideCount != 1 && slick.slideCount>0) {
				$('.slider_outer').css('opacity', '1');
			}
		});


		$coll_slide_imgs.slick( {
			centerMode: true,
			centerPadding: '60px',
			infinite: true,
  		slidesToShow: 3,
  		variableWidth: true,
  		adaptiveHeight: false,
  		asNavFor: '.collections_slider--caption',
  		arrows: false,
  		speed: 600,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
  						slidesToShow: 3,
							centerMode: true,
			      }
			    },
			  ]
 		});


		$coll_slide_imgs.find('a').on('click', function(e){

			var parent_slide = $(this).parents('.slick-slide');

			if( ! $(parent_slide).hasClass('slick-center') ) {
				e.preventDefault();

				var slideIndex = $(parent_slide).attr("data-slick-index");
				$coll_slide_imgs.slick('slickGoTo', slideIndex);	
			}

		});


		var cookie_collection_slider = readCookie("collection-slider");
		if (cookie_collection_slider) {

				var slide_active = $('[data-nid=' + cookie_collection_slider + ']');
				var slide_active_index = $(slide_active).parents('.slick-slide').attr("data-slick-index");

       	setTimeout(function() {
           $coll_slide_imgs.slick('slickGoTo', slide_active_index);	
       	}, 1000);

		}
		eraseCookie("collection-slider");


		var $coll_slide_captions = $('.collections_slider--caption');
		if( $coll_slide_captions.length > 0 ) {

			$coll_slide_captions.slick( {
				infinite: true,
				fade: true,
	  		asNavFor: '.collections_slider--img',
	  		prevArrow: '<button type="button" class="slick-prev"></button>',
	  		nextArrow: '<button type="button" class="slick-next"></button>',
			});

		}


	} // end if($coll_slide_imgs.length)





	/* 
	 * NEW SLIDERS (02/2022)
	 *******************/ 


	const slide_mediums = document.querySelectorAll('.slide_medium');

	if( slide_mediums.length > 0 ) {

		for( slide of slide_mediums ) {
			var slider_medium = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				controlsText: ['', ''],
				responsive: {
					880: {
						items: 2.2
					}
				}
			});
		}
	}


	const slide_smalls = document.querySelectorAll('.slide_small');

	if( slide_smalls.length > 0 ) {

		for( slide of slide_smalls ) {
			var slide_small = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				controlsText: ['', ''],
				responsive: {
					880: {
						items: 3
					}
				}
			});
		}
	}



	const slide_artworks = document.querySelectorAll('.slide_medium--artworks');

	if( slide_artworks.length > 0 ) {

		for( slide of slide_artworks ) {
			var slider_medium = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				autoWidth: true,
				controlsText: ['', ''],
				gutter: 40,
				responsive: {
					880: {
						items: 2.2
					}
				}
			});
		}
	}

	
	


	// EVENTS > Open COPY 

	const openContent = document.querySelector('#js-openContent')

	if( openContent !== null ) {

		openContent.addEventListener('click', (e) => {
		e.preventDefault();

		openContent.classList.toggle('reversed');
		document.querySelector('.mod-copy').classList.toggle('open')

		if( openContent.classList.contains('reversed') ) {
			openContent.querySelector('.c-more-label').innerText = 'voir moins';
		}
		else {
			openContent.querySelector('.c-more-label').innerText = 'voir plus';

		}
		})
	}



	/* 
	* END READY
	*******************/ 

});








/*
 * On Window REsize
 *******************/ 

$(window).on('resize', function(){
	var win = $(this); 
	if (win.height() < 880) { 
		$('.site-logo h1').html('LA');
	}
	if (win.width() >= 880) { 
		$('.site-logo h1').html('Lafayette <br>Anticipations');
	}
});




/*
 * LazyLoading
 *******************/ 

;(function() {
    // Initialize lazyloading
    var bLazy = new Blazy();
})();


;(function() {

    var bLazy_carnet = new Blazy({
      
        selector: '.b-lazy--cst',

        success: function(ele){

          var id_slide = ele.closest('.item-image--slide');
      		var cst_slide_inner_height = $(id_slide).find('.cst-slide_inner').outerHeight();
      		var max_height = 0;

          $(id_slide).find('.cst-slide_inner img').each(function() {

            $(this).css('max-height', cst_slide_inner_height - 50);
            var that_height = $(this).outerHeight();
            if( that_height > max_height ) {
              max_height = that_height;
            }
          });

          if( typeof max_height !== 'undefined' ) {
            $(id_slide).find('.cst-slide_inner').css('height', max_height + 50 ).removeClass('square-content');
            $(id_slide).find('.cst-slide').removeClass('square');  
          }


        }, 
      error: function(ele, msg){
            if(msg === 'missing'){
                // Data-src is missing
            }
            else if(msg === 'invalid'){
                // Data-src is invalid
            }  
        }
    });
})();





/*
 * Scripts after complete loading
 *******************/ 

$( window ).load(function() {

 
	var images = $('.event_media img');
	images.each( function() {
		
		this_width = $(this).width();
		container_width = $(this).parent().width();

		if( this_width < container_width ) {
			$(this).siblings('.media_caption').width(this_width);
		}
	});


	// Masonry Archives

	$('.grid').masonry({
  // options
  	columnWidth: '.grid-sizer',
	  itemSelector: '.archive_item',
	  percentPosition: true
	});


  if( window_width > 768 ) {

		$('.grid_edition').masonry({
	  // options
	  	columnWidth: '.grid-sizer',
		  itemSelector: '.edition_item',
		  percentPosition: true
		});

  }

});



if ('ontouchstart' in document) {
  $('body').removeClass('no-touch');
}


