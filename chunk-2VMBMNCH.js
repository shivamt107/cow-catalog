import{D as Ut,N as _t,Q as Kt,R as Jt,T as kt,W as Zt,_ as Xt,aa as te,ca as ee,e as gt,f as Wt,fa as ne,g as ht,h as O,i as ft,j as Vt,m as Qt,ma as oe,na as ie,oa as mt,pa as M,ra as Tt,sa as Et,t as xt,ta as Z,u as qt,ua as nt,v as et,va as x,w as Gt,wa as re,x as Yt}from"./chunk-4VKDULOE.js";import{$ as Pt,$a as z,Db as F,Fb as St,Ga as C,Ha as H,Ia as Q,Ja as h,La as S,Na as bt,O as w,Oa as Lt,P as R,S as Mt,Sb as Rt,T as u,Tb as W,Ua as A,Vb as Ht,Za as c,Zb as _,_ as tt,_a as N,_b as $t,a as y,aa as ct,ab as it,b as X,bb as rt,cb as at,db as st,eb as U,fa as Bt,fb as K,gb as q,ib as At,j as wt,ja as Ct,jb as Nt,ka as p,kb as f,la as ut,lb as G,mb as j,nb as T,pa as pt,pb as E,qb as I,sb as zt,ua as d,ub as jt,vb as b,wb as $,xb as J,za as Ot}from"./chunk-DLFWAVIA.js";function ot(...n){if(n){let a=[];for(let t=0;t<n.length;t++){let e=n[t];if(!e)continue;let o=typeof e;if(o==="string"||o==="number")a.push(e);else if(o==="object"){let i=Array.isArray(e)?[ot(...e)]:Object.entries(e).map(([r,s])=>s?r:void 0);a=i.length?a.concat(i.filter(r=>!!r)):a}}return a.join(" ").trim()}}var yt={};function lt(n="pui_id_"){return Object.hasOwn(yt,n)||(yt[n]=0),yt[n]++,`${n}${yt[n]}`}var ae=(()=>{class n extends x{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),D=(()=>{class n{document=u(ct);platformId=u(pt);el=u(ut);injector=u(Pt);cd=u(Ht);renderer=u(Ot);config=u(re);baseComponentStyle=u(ae);baseStyle=u(x);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=lt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,e="",o={}){return ne(t,e,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Vt(this.platformId)){let{dt:e}=t;e&&e.currentValue&&(this._loadScopedThemeStyles(e.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(e.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Tt.off("theme:change",t))}_loadStyles(){let t=()=>{nt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),nt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!nt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),nt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Z.isStyleNameLoaded("common")){let{primitive:t,semantic:e,global:o,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,y({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(e?.css,y({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,y({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(y({name:"global-style"},this.styleOptions),i),Z.setLoadedStyleName("common")}if(!Z.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:e}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,y({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(y({name:`${this.componentStyle?.name}-style`},this.styleOptions),e),Z.setLoadedStyleName(this.componentStyle?.name)}if(!Z.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,y({name:"layer-order",first:!0},this.styleOptions)),Z.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:e}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(e,y({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){nt.clearLoadedStyleNames(),Tt.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,e={}){return ot(this._getOptionValue(this.$style?.classes,t,y({instance:this},e)))}sx(t="",e=!0,o={}){if(e)return this._getOptionValue(this.$style?.inlineStyles,t,y({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=ot;static \u0275fac=function(e){return new(e||n)};static \u0275dir=Q({type:n,inputs:{dt:"dt"},features:[F([ae,x]),Ct]})}return n})();var It=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let o=e.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=e.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,o=0;for(var i=0;i<e.length;i++){if(e[i]==t)return o;e[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,e){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].attributes&&o[r].attributes[e]&&o[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,o="self"){o!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,o="self",i=!0){t&&e&&(i&&(t.style.minWidth=`${n.getOuterWidth(e)}px`),o==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,o=!0){let i=Y=>{if(Y)return getComputedStyle(Y).getPropertyValue("position")==="relative"?Y:i(Y.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=e.offsetHeight,l=e.getBoundingClientRect(),k=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),m=this.getViewport(),v=i(t)?.getBoundingClientRect()||{top:-1*k,left:-1*g},B,V,dt="top";l.top+s+r.height>m.height?(B=l.top-v.top-r.height,dt="bottom",l.top+B<0&&(B=-1*l.top)):(B=s+l.top-v.top,dt="top");let Dt=l.left+r.width-m.width,Te=l.left-v.left;if(r.width>m.width?V=(l.left-v.left)*-1:Dt>0?V=Te-Dt:V=l.left-v.left,t.style.top=B+"px",t.style.left=V+"px",t.style.transformOrigin=dt,o){let Y=Yt(/-anchor-gutter$/)?.value;t.style.marginTop=dt==="bottom"?`calc(${Y??"2px"} * -1)`:Y??""}}static absolutePosition(t,e,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,s=i.width,l=e.offsetHeight,k=e.offsetWidth,g=e.getBoundingClientRect(),m=this.getWindowScrollTop(),P=this.getWindowScrollLeft(),v=this.getViewport(),B,V;g.top+l+r>v.height?(B=g.top+m-r,t.style.transformOrigin="bottom",B<0&&(B=m)):(B=l+g.top+m,t.style.transformOrigin="top"),g.left+s>v.width?V=Math.max(0,g.left+P+k-s):V=g.left+P,t.style.top=B+"px",t.style.left=V+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,r=s=>{let l=window.getComputedStyle(s,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let s of o){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let k=l.split(",");for(let g of k){let m=this.findSingle(s,g);m&&r(m)&&e.push(m)}}s.nodeType!==9&&r(s)&&e.push(s)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,l=t.getBoundingClientRect(),g=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-s,m=t.scrollTop,P=t.clientHeight,v=this.getOuterHeight(e);g<0?t.scrollTop=m+g:g+v>P&&(t.scrollTop=m+g-P+v)}static fadeIn(t,e){t.style.opacity=0;let o=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/e,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,e){var o=1,i=50,r=e,s=i/r;let l=setInterval(()=>{o=o-s,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,e)}static getOuterWidth(t,e){let o=t.offsetWidth;if(e){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static width(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),e}static getOuterHeight(t,e){let o=t.offsetHeight;if(e){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),e}static getViewport(){let t=window,e=document,o=e.documentElement,i=e.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||i.clientWidth,s=t.innerHeight||o.clientHeight||i.clientHeight;return{width:r,height:s}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let o=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,o){t[e].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let o=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of o){let s=getComputedStyle(r);this.isVisible(r)&&s.display!="none"&&s.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,e=""){let o=this.findSingle(t,this.getFocusableSelectorString(e));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,e=""){let o=this.getFocusableElements(t,e);return o.length>0?o[0]:null}static getLastFocusableElement(t,e){let o=this.getFocusableElements(t,e);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,e=!1){let o=n.getFocusableElements(t),i=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);e?r==-1||r===0?i=o.length-1:i=r-1:r!=-1&&r!==o.length-1&&(i=r+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let o=t.getAttribute(e);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...o),i}}static setAttribute(t,e="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(e,o)}static setAttributes(t,e={}){if(this.isElement(t)){let o=(i,r)=>{let s=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((l,k)=>{if(k!=null){let g=typeof k;if(g==="string"||g==="number")l.push(k);else if(g==="object"){let m=Array.isArray(k)?o(i,k):Object.entries(k).map(([P,v])=>i==="style"&&(v||v===0)?`${P.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${v}`:v?P:void 0);l=m.length?l.concat(m.filter(P=>!!P)):l}}return l},s)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(o("class",r))].join(" ").trim():i==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return n})();function $n(){qt({variableName:Et("scrollbar.width").name})}function Wn(){Gt({variableName:Et("scrollbar.width").name})}var se=class{element;listener;scrollableParents;constructor(a,t=()=>{}){this.element=a,this.listener=t}bindScrollListener(){this.scrollableParents=It.getScrollableParents(this.element);for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var le=(()=>{class n extends D{autofocus=!1;focused=!1;platformId=u(pt);document=u(ct);host=u(ut);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ft(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=It.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275dir=Q({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[h]})}return n})();var de=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ee=`
    ${de}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Ie={root:({instance:n})=>["p-badge p-component",{"p-badge-circle":te(n.value())&&String(n.value()).length===1,"p-badge-dot":Xt(n.value()),"p-badge-sm":n.size()==="small"||n.badgeSize()==="small","p-badge-lg":n.size()==="large"||n.badgeSize()==="large","p-badge-xl":n.size()==="xlarge"||n.badgeSize()==="xlarge","p-badge-info":n.severity()==="info","p-badge-success":n.severity()==="success","p-badge-warn":n.severity()==="warn","p-badge-danger":n.severity()==="danger","p-badge-secondary":n.severity()==="secondary","p-badge-contrast":n.severity()==="contrast"}]},ce=(()=>{class n extends x{name="badge";theme=Ee;classes=Ie;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var Ft=(()=>{class n extends D{styleClass=W();badgeSize=W();size=W();severity=W();value=W();badgeDisabled=W(!1,{transform:_});_componentStyle=u(ce);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-badge"]],hostVars:4,hostBindings:function(e,o){e&2&&(b(o.cn(o.cx("root"),o.styleClass())),zt("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[F([ce]),h],decls:1,vars:1,template:function(e,o){e&1&&$(0),e&2&&J(o.value())},dependencies:[O,M],encapsulation:2,changeDetection:0})}return n})(),ue=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=R({imports:[Ft,M,M]})}return n})();var De=["*"],Me={root:"p-fluid"},pe=(()=>{class n extends x{name="fluid";classes=Me;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var be=(()=>{class n extends D{_componentStyle=u(pe);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,o){e&2&&b(o.cx("root"))},features:[F([pe]),h],ngContentSelectors:De,decls:1,vars:0,template:function(e,o){e&1&&(G(),j(0))},dependencies:[O],encapsulation:2,changeDetection:0})}return n})();var Pe=["*"],Be=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ge=(()=>{class n extends x{name="baseicon";css=Be;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vt=(()=>{class n extends D{spin=!1;_componentStyle=u(ge);getClassNames(){return ot("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(e,o){e&2&&b(o.getClassNames())},inputs:{spin:[2,"spin","spin",_]},features:[F([ge]),h],ngContentSelectors:Pe,decls:1,vars:0,template:function(e,o){e&1&&(G(),j(0))},encapsulation:2,changeDetection:0})}return n})();var Oe=["data-p-icon","spinner"],he=(()=>{class n extends vt{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+lt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["","data-p-icon","spinner"]],features:[h],attrs:Oe,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,o){e&1&&(tt(),rt(0,"g"),st(1,"path",0),at(),rt(2,"defs")(3,"clipPath",1),st(4,"rect",2),at()()),e&2&&(A("clip-path",o.pathId),d(3),At("id",o.pathId))},encapsulation:2})}return n})();var Le=["data-p-icon","times"],Ro=(()=>{class n extends vt{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["","data-p-icon","times"]],features:[h],attrs:Le,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(e,o){e&1&&(tt(),st(0,"path",0))},encapsulation:2})}return n})();var fe=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Ae=`
    ${fe}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ne={root:"p-ink"},me=(()=>{class n extends x{name="ripple";theme=Ae;classes=Ne;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var ye=(()=>{class n extends D{zone=u(Lt);_componentStyle=u(me);animationListener;mouseDownListener;timeout;constructor(){super(),Rt(()=>{ft(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(et(e,"p-ink-active"),!_t(e)&&!kt(e)){let s=Math.max(Ut(this.el.nativeElement),Jt(this.el.nativeElement));e.style.height=s+"px",e.style.width=s+"px"}let o=Kt(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-kt(e)/2,r=t.pageY-o.top+this.document.body.scrollLeft-_t(e)/2;this.renderer.setStyle(e,"top",r+"px"),this.renderer.setStyle(e,"left",i+"px"),xt(e,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&et(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&et(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),et(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Zt(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Q({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[F([me]),h]})}return n})();var ve=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var je=["content"],Re=["loadingicon"],He=["icon"],$e=["*"],Ce=n=>({class:n});function We(n,a){n&1&&q(0)}function Ve(n,a){if(n&1&&it(0,"span"),n&2){let t=f(3);b(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),A("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qe(n,a){if(n&1&&(tt(),it(0,"svg",7)),n&2){let t=f(3);b(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),c("spin",!0),A("aria-hidden",!0)("data-pc-section","loadingicon")}}function qe(n,a){if(n&1&&(U(0),S(1,Ve,1,4,"span",3)(2,Qe,1,5,"svg",6),K()),n&2){let t=f(2);d(),c("ngIf",t.loadingIcon),d(),c("ngIf",!t.loadingIcon)}}function Ge(n,a){}function Ye(n,a){if(n&1&&S(0,Ge,0,0,"ng-template",8),n&2){let t=f(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Ue(n,a){if(n&1&&(U(0),S(1,qe,3,2,"ng-container",2)(2,Ye,1,1,null,5),K()),n&2){let t=f();d(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),d(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",St(3,Ce,t.cx("loadingIcon")))}}function Ke(n,a){if(n&1&&it(0,"span"),n&2){let t=f(2);b(t.cn("icon",t.iconClass())),A("data-pc-section","icon")}}function Je(n,a){}function Ze(n,a){if(n&1&&S(0,Je,0,0,"ng-template",8),n&2){let t=f(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Xe(n,a){if(n&1&&(U(0),S(1,Ke,1,3,"span",3)(2,Ze,1,1,null,5),K()),n&2){let t=f();d(),c("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),d(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",St(3,Ce,t.cx("icon")))}}function tn(n,a){if(n&1&&(N(0,"span"),$(1),z()),n&2){let t=f();b(t.cx("label")),A("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),d(),J(t.label)}}function en(n,a){if(n&1&&it(0,"p-badge",9),n&2){let t=f();c("value",t.badge)("severity",t.badgeSeverity)}}var nn={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":(n.icon||n.buttonProps?.icon||n.iconTemplate||n._iconTemplate||n.loadingIcon||n.loadingIconTemplate||n._loadingIconTemplate)&&!n.label&&!n.buttonProps?.label,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.iconClass()).filter(([,a])=>!!a).reduce((a,[t])=>a+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},we=(()=>{class n extends x{name="button";theme=ve;classes=nn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var on=(()=>{class n extends D{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=W(void 0,{transform:_});onClick=new bt;onFocus=new bt;onBlur=new bt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(be,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=u(we);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-button"]],contentQueries:function(e,o,i){if(e&1&&(T(i,je,5),T(i,Re,5),T(i,He,5),T(i,mt,4)),e&2){let r;E(r=I())&&(o.contentTemplate=r.first),E(r=I())&&(o.loadingIconTemplate=r.first),E(r=I())&&(o.iconTemplate=r.first),E(r=I())&&(o.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",$t],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",_],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[F([we]),h],ngContentSelectors:$e,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(e,o){e&1&&(G(),N(0,"button",0),Nt("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),j(1),S(2,We,1,0,"ng-container",1)(3,Ue,3,5,"ng-container",2)(4,Xe,3,5,"ng-container",2)(5,tn,2,5,"span",3)(6,en,1,2,"p-badge",4),z()),e&2&&(b(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),c("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),A("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),d(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),d(),c("ngIf",o.loading),d(),c("ngIf",!o.loading),d(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),d(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[O,gt,ht,Wt,ye,le,he,ue,Ft,M],encapsulation:2,changeDetection:0})}return n})(),Ti=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=R({imports:[O,on,M,M]})}return n})();var Se=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var rn=["header"],an=["title"],sn=["subtitle"],ln=["content"],dn=["footer"],cn=["*",[["p-header"]],[["p-footer"]]],un=["*","p-header","p-footer"];function pn(n,a){n&1&&q(0)}function bn(n,a){if(n&1&&(N(0,"div"),j(1,1),S(2,pn,1,0,"ng-container",1),z()),n&2){let t=f();b(t.cx("header")),d(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function gn(n,a){if(n&1&&(U(0),$(1),K()),n&2){let t=f(2);d(),J(t.header)}}function hn(n,a){n&1&&q(0)}function fn(n,a){if(n&1&&(N(0,"div"),S(1,gn,2,1,"ng-container",2)(2,hn,1,0,"ng-container",1),z()),n&2){let t=f();b(t.cx("title")),d(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),d(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function mn(n,a){if(n&1&&(U(0),$(1),K()),n&2){let t=f(2);d(),J(t.subheader)}}function yn(n,a){n&1&&q(0)}function vn(n,a){if(n&1&&(N(0,"div"),S(1,mn,2,1,"ng-container",2)(2,yn,1,0,"ng-container",1),z()),n&2){let t=f();b(t.cx("subtitle")),d(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),d(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function wn(n,a){n&1&&q(0)}function Cn(n,a){n&1&&q(0)}function Sn(n,a){if(n&1&&(N(0,"div"),j(1,2),S(2,Cn,1,0,"ng-container",1),z()),n&2){let t=f();b(t.cx("footer")),d(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var xn=`
    ${Se}

    .p-card {
        display: block;
    }
`,_n={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},xe=(()=>{class n extends x{name="card";theme=xn;classes=_n;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var kn=(()=>{class n extends D{header;subheader;set style(t){ee(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Bt(null);_componentStyle=u(xe);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(n)))(o||n)}})();static \u0275cmp=C({type:n,selectors:[["p-card"]],contentQueries:function(e,o,i){if(e&1&&(T(i,oe,5),T(i,ie,5),T(i,rn,4),T(i,an,4),T(i,sn,4),T(i,ln,4),T(i,dn,4),T(i,mt,4)),e&2){let r;E(r=I())&&(o.headerFacet=r.first),E(r=I())&&(o.footerFacet=r.first),E(r=I())&&(o.headerTemplate=r.first),E(r=I())&&(o.titleTemplate=r.first),E(r=I())&&(o.subtitleTemplate=r.first),E(r=I())&&(o.contentTemplate=r.first),E(r=I())&&(o.footerTemplate=r.first),E(r=I())&&(o.templates=r)}},hostVars:5,hostBindings:function(e,o){e&2&&(A("data-pc-name","card"),jt(o._style()),b(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[F([xe]),h],ngContentSelectors:un,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(e,o){e&1&&(G(cn),S(0,bn,3,3,"div",0),N(1,"div"),S(2,fn,3,4,"div",0)(3,vn,3,4,"div",0),N(4,"div"),j(5),S(6,wn,1,0,"ng-container",1),z(),S(7,Sn,3,3,"div",0),z()),e&2&&(c("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),d(),b(o.cx("body")),d(),c("ngIf",o.header||o.titleTemplate||o._titleTemplate),d(),c("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),d(),b(o.cx("content")),d(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),d(),c("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[O,gt,ht,M],encapsulation:2,changeDetection:0})}return n})(),Vi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=H({type:n});static \u0275inj=R({imports:[kn,M,M]})}return n})();var _e=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["app-header"]],decls:3,vars:0,consts:[[1,"header"],[1,"logo"]],template:function(t,e){t&1&&(rt(0,"div",0)(1,"h1",1),$(2,"Cow Catalog"),at()())},dependencies:[O],styles:[".header[_ngcontent-%COMP%]{background:#1b2f44;color:#fff;padding:1rem 2rem;box-shadow:0 2px 4px #0000001a;margin-bottom:2rem}.logo[_ngcontent-%COMP%]{margin:0;font-size:1.8rem;font-weight:700;letter-spacing:-.5px}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding:1rem}.logo[_ngcontent-%COMP%]{font-size:1.5rem}}"]})};var ke=class n{constructor(a){this.http=a;this.loadCows(),this.loadFilters()}STORAGE_KEY="cow-catalog-data";FILTERS_STORAGE_KEY="cow-catalog-filters";cowsSubject=new wt([]);filtersSubject=new wt({});cows$=this.cowsSubject.asObservable();filters$=this.filtersSubject.asObservable();loadCows(){let a=localStorage.getItem(this.STORAGE_KEY);if(a){let t=JSON.parse(a).map(e=>X(y({},e),{createdDate:new Date(e.createdDate),lastEventDate:new Date(e.lastEventDate),events:e.events.map(o=>X(y({},o),{date:new Date(o.date)}))}));this.cowsSubject.next(t)}else this.loadInitialDataFromJson()}loadInitialDataFromJson(){this.http.get("assets/data/cows-dataset.json").subscribe({next:a=>{let t=a.cows.map(e=>X(y({},e),{createdDate:new Date(e.createdDate),lastEventDate:new Date(e.lastEventDate),events:e.events.map(o=>X(y({},o),{date:new Date(o.date)}))}));this.cowsSubject.next(t),this.saveCows()},error:a=>{console.error("Failed to load initial cow data:",a),this.cowsSubject.next([])}})}saveCows(){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.cowsSubject.value))}loadFilters(){let a=localStorage.getItem(this.FILTERS_STORAGE_KEY);if(a)try{let t=JSON.parse(a);this.filtersSubject.next(t)}catch(t){console.error("Failed to load saved filters:",t),this.filtersSubject.next({})}}saveFilters(a){localStorage.setItem(this.FILTERS_STORAGE_KEY,JSON.stringify(a))}getCows(){return this.cows$}getCowById(a){return this.cowsSubject.value.find(t=>t.id===a)}getCowByEarTag(a){return this.cowsSubject.value.find(t=>t.earTag===a)}addCow(a){let t=new Date,e=`cow-${Date.now()}`,o=X(y({},a),{id:e,createdDate:t,lastEventDate:t,events:[{id:`${e}-created`,cowId:e,type:"Created",date:t,description:"Cow added to catalog"}]}),i=[...this.cowsSubject.value,o];return this.cowsSubject.next(i),this.saveCows(),o}getFilteredCows(a){let t=this.cowsSubject.value;return a.searchTag&&(t=t.filter(e=>e.earTag.toLowerCase().includes(a.searchTag.toLowerCase()))),a.status&&(t=t.filter(e=>e.status===a.status)),a.pen&&(t=t.filter(e=>e.pen===a.pen)),t}setFilters(a){this.filtersSubject.next(a),this.saveFilters(a)}clearFilters(){let a={};this.filtersSubject.next(a),this.saveFilters(a)}getFilters(){return this.filtersSubject.value}getPens(){let a=this.cowsSubject.value.map(t=>t.pen);return[...new Set(a)].sort()}isEarTagUnique(a,t){return!this.cowsSubject.value.some(e=>e.earTag.toLowerCase()===a.toLowerCase()&&e.id!==t)}getDailyWeightGain(a){let t=a.events.filter(s=>s.weight!==void 0).sort((s,l)=>s.date.getTime()-l.date.getTime());if(t.length<2)return null;let e=t[t.length-1],o=t[t.length-2],i=(e.date.getTime()-o.date.getTime())/(1e3*60*60*24),r=e.weight-o.weight;return i>0?r/i:0}static \u0275fac=function(t){return new(t||n)(Mt(Qt))};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})};export{lt as a,D as b,It as c,$n as d,Wn as e,se as f,le as g,ue as h,be as i,vt as j,he as k,Ro as l,ye as m,on as n,Ti as o,kn as p,Vi as q,_e as r,ke as s};
