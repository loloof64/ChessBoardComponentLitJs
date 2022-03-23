/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=e.get(this.cssText);return t&&void 0===i&&(e.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const s=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((i,e,r)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[r+1]),t[0]);return new r(s,i)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.trustedTypes,a=l?l.emptyScript:"",f=window.reactiveElementPolyfillSupport,h={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},u=(t,i)=>i!==t&&(i==i||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const r=this._$Eh(e,i);void 0!==r&&(this._$Eu.set(r,e),t.push(r))})),t}static createProperty(t,i=c){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,e,i);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{t?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,i.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ES(t,i,e=c){var r,s;const n=this.constructor._$Eh(t,e);if(void 0!==n&&!0===e.reflect){const o=(null!==(s=null===(r=e.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:h.toAttribute)(i,e.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,i){var e,r,s;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),l=t.converter,a=null!==(s=null!==(r=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=o,this[o]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,e){let r=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:d}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.1");const p=globalThis.trustedTypes,k=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,g="?"+y,w=`<${g}>`,C=document,b=(t="")=>C.createComment(t),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,A=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,S=/"/g,z=/^(?:script|style|textarea|title)$/i,j=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),E=j(1),P=j(2),N=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),R=new WeakMap,q=C.createTreeWalker(C,129,null,!1),T=(t,i)=>{const e=t.length-1,r=[];let s,n=2===i?"<svg>":"",o=$;for(let i=0;i<e;i++){const e=t[i];let l,a,f=-1,h=0;for(;h<e.length&&(o.lastIndex=h,a=o.exec(e),null!==a);)h=o.lastIndex,o===$?"!--"===a[1]?o=M:void 0!==a[1]?o=A:void 0!==a[2]?(z.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=_):void 0!==a[3]&&(o=_):o===_?">"===a[0]?(o=null!=s?s:$,f=-1):void 0===a[1]?f=-2:(f=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?_:'"'===a[3]?S:x):o===S||o===x?o=_:o===M||o===A?o=$:(o=_,s=void 0);const u=o===_&&t[i+1].startsWith("/>")?" ":"";n+=o===$?e+w:f>=0?(r.push(l),e.slice(0,f)+"$lit$"+e.slice(f)+y+u):e+y+(-2===f?(r.push(void 0),i):u)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(l):l,r]};class O{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let s=0,n=0;const o=t.length-1,l=this.parts,[a,f]=T(t,i);if(this.el=O.createElement(a,e),q.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(r=q.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const i of r.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const e=f[n++];if(t.push(i),void 0!==e){const t=r.getAttribute(e.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?H:"@"===i[1]?F:Q})}else l.push({type:6,index:s})}for(const i of t)r.removeAttribute(i)}if(z.test(r.tagName)){const t=r.textContent.split(y),i=t.length-1;if(i>0){r.textContent=p?p.emptyScript:"";for(let e=0;e<i;e++)r.append(t[e],b()),q.nextNode(),l.push({type:2,index:++s});r.append(t[i],b())}}}else if(8===r.nodeType)if(r.data===g)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(y,t+1));)l.push({type:7,index:s}),t+=y.length-1}s++}}static createElement(t,i){const e=C.createElement("template");return e.innerHTML=t,e}}function I(t,i,e=t,r){var s,n,o,l;if(i===N)return i;let a=void 0!==r?null===(s=e._$Cl)||void 0===s?void 0:s[r]:e._$Cu;const f=m(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==f&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===f?a=void 0:(a=new f(t),a._$AT(t,e,r)),void 0!==r?(null!==(o=(l=e)._$Cl)&&void 0!==o?o:l._$Cl=[])[r]=a:e._$Cu=a),void 0!==a&&(i=I(t,a._$AS(t,i.values),a,r)),i}class U{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:r}=this._$AD,s=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:C).importNode(e,!0);q.currentNode=s;let n=q.nextNode(),o=0,l=0,a=r[0];for(;void 0!==a;){if(o===a.index){let i;2===a.type?i=new K(n,n.nextSibling,this,t):1===a.type?i=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(i=new W(n,this,t)),this.v.push(i),a=r[++l]}o!==(null==a?void 0:a.index)&&(n=q.nextNode(),o++)}return s}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class K{constructor(t,i,e,r){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),m(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return L(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==B&&m(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=O.createElement(r.h,this.options)),r);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===s)this._$AH.m(e);else{const t=new U(s,this),i=t.p(this.options);t.m(e),this.k(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new O(t)),i}S(t){L(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,r=0;for(const s of t)r===i.length?i.push(e=new K(this.A(b()),this.A(b()),this,this.options)):e=i[r],e._$AI(s),r++;r<i.length&&(this._$AR(e&&e._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class Q{constructor(t,i,e,r,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,r){const s=this.strings;let n=!1;if(void 0===s)t=I(this,t,i,0),n=!m(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const r=t;let o,l;for(t=s[0],o=0;o<s.length-1;o++)l=I(this,r[e+o],i,o),l===N&&(l=this._$AH[o]),n||(n=!m(l)||l!==this._$AH[o]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+s[o+1]),this._$AH[o]=l}n&&!r&&this.C(t)}C(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends Q{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===B?void 0:t}}const G=p?p.emptyScript:"";class H extends Q{constructor(){super(...arguments),this.type=4}C(t){t&&t!==B?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class F extends Q{constructor(t,i,e,r,s){super(t,i,e,r,s),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=I(this,t,i,0))&&void 0!==e?e:B)===N)return;const r=this._$AH,s=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Z=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,V;null==Z||Z(O,K),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.1");class X extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,e)=>{var r,s;const n=null!==(r=null==e?void 0:e.renderBefore)&&void 0!==r?r:i;let o=n._$litPart$;if(void 0===o){const t=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new K(i.insertBefore(b(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}X.finalized=!0,X._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==tt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.st)||void 0===e?void 0:e.has(t))&&this.et.add(t);return this.render(i)}const s=t.element.classList;this.et.forEach((t=>{t in i||(s.remove(t),this.et.delete(t))}));for(const t in i){const e=!!i[t];e===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(e?(s.add(t),this.et.add(t)):(s.remove(t),this.et.delete(t)))}return N}});
/* @license
 * Copyright (c) 2018, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */var et=function(t){var i="b",e="w",r=-1,s="p",n="b",o="k",l="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",a=["1-0","0-1","1/2-1/2","*"],f={b:[16,32,17,15],w:[-16,-32,-17,-15]},h={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},u=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],c=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],d={p:0,n:1,b:2,r:3,q:4,k:5},v={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},p={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},k={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},y={w:[{square:k.a1,flag:p.QSIDE_CASTLE},{square:k.h1,flag:p.KSIDE_CASTLE}],b:[{square:k.a8,flag:p.QSIDE_CASTLE},{square:k.h8,flag:p.KSIDE_CASTLE}]},g=new Array(128),w={w:r,b:r},C=e,b={w:0,b:0},m=r,L=0,$=1,M=[],A={};function _(t){void 0===t&&(t=!1),g=new Array(128),w={w:r,b:r},C=e,b={w:0,b:0},m=r,L=0,$=1,M=[],t||(A={}),P(j())}function x(){S(l)}function S(t,s){void 0===s&&(s=!1);var n=t.split(/\s+/),o=n[0],l=0;if(!z(t).valid)return!1;_(s);for(var a=0;a<o.length;a++){var f=o.charAt(a);if("/"===f)l+=8;else if(tt(f))l+=parseInt(f,10);else{var h=f<"a"?e:i;B({type:f.toLowerCase(),color:h},X(l)),l++}}return C=n[1],n[2].indexOf("K")>-1&&(b.w|=p.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(b.w|=p.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(b.b|=p.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(b.b|=p.QSIDE_CASTLE),m="-"===n[3]?r:k[n[3]],L=parseInt(n[4],10),$=parseInt(n[5],10),P(j()),!0}function z(t){var i="No errors.",e="FEN string must contain six space-delimited fields.",r="6th field (move number) must be a positive integer.",s="5th field (half move counter) must be a non-negative integer.",n="4th field (en-passant square) is invalid.",o="3rd field (castling availability) is invalid.",l="2nd field (side to move) is invalid.",a="1st field (piece positions) does not contain 8 '/'-delimited rows.",f="1st field (piece positions) is invalid [consecutive numbers].",h="1st field (piece positions) is invalid [invalid piece].",u="1st field (piece positions) is invalid [row too large].",c="Illegal en-passant square",d=t.split(/\s+/);if(6!==d.length)return{valid:!1,error_number:1,error:e};if(isNaN(d[5])||parseInt(d[5],10)<=0)return{valid:!1,error_number:2,error:r};if(isNaN(d[4])||parseInt(d[4],10)<0)return{valid:!1,error_number:3,error:s};if(!/^(-|[abcdefgh][36])$/.test(d[3]))return{valid:!1,error_number:4,error:n};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(d[2]))return{valid:!1,error_number:5,error:o};if(!/^(w|b)$/.test(d[1]))return{valid:!1,error_number:6,error:l};var v=d[0].split("/");if(8!==v.length)return{valid:!1,error_number:7,error:a};for(var p=0;p<v.length;p++){for(var k=0,y=!1,g=0;g<v[p].length;g++)if(isNaN(v[p][g])){if(!/^[prnbqkPRNBQK]$/.test(v[p][g]))return{valid:!1,error_number:9,error:h};k+=1,y=!1}else{if(y)return{valid:!1,error_number:8,error:f};k+=parseInt(v[p][g],10),y=!0}if(8!==k)return{valid:!1,error_number:10,error:u}}return"3"==d[3][1]&&"w"==d[1]||"6"==d[3][1]&&"b"==d[1]?{valid:!1,error_number:11,error:c}:{valid:!0,error_number:0,error:i}}function j(){for(var t=0,i="",s=k.a8;s<=k.h1;s++){if(null==g[s])t++;else{t>0&&(i+=t,t=0);var n=g[s].color,o=g[s].type;i+=n===e?o.toUpperCase():o.toLowerCase()}s+1&136&&(t>0&&(i+=t),s!==k.h1&&(i+="/"),t=0,s+=8)}var l="";b.w&p.KSIDE_CASTLE&&(l+="K"),b.w&p.QSIDE_CASTLE&&(l+="Q"),b.b&p.KSIDE_CASTLE&&(l+="k"),b.b&p.QSIDE_CASTLE&&(l+="q"),l=l||"-";var a=m===r?"-":X(m);return[i,C,l,a,L,$].join(" ")}function E(t){for(var i=0;i<t.length;i+=2)"string"==typeof t[i]&&"string"==typeof t[i+1]&&(A[t[i]]=t[i+1]);return A}function P(t){M.length>0||(t!==l?(A.SetUp="1",A.FEN=t):(delete A.SetUp,delete A.FEN))}function N(t){var i=g[k[t]];return i?{type:i.type,color:i.color}:null}function B(t,i){if(!("type"in t)||!("color"in t))return!1;if(-1==="pnbrqkPNBRQK".indexOf(t.type.toLowerCase()))return!1;if(!(i in k))return!1;var e=k[i];return(t.type!=o||w[t.color]==r||w[t.color]==e)&&(g[e]={type:t.type,color:t.color},t.type===o&&(w[t.color]=e),P(j()),!0)}function R(t,i,e,r,n){var o={color:C,from:i,to:e,flags:r,piece:t[i].type};return n&&(o.flags|=p.PROMOTION,o.promotion=n),t[e]?o.captured=t[e].type:r&p.EP_CAPTURE&&(o.captured=s),o}function q(t){function i(t,i,e,r,o){if(t[e].type!==s||0!==J(r)&&7!==J(r))i.push(R(t,e,r,o));else for(var l=["q","r",n,"n"],a=0,f=l.length;a<f;a++)i.push(R(t,e,r,o,l[a]))}var e=[],r=C,o=Y(r),l={b:1,w:6},a=k.a8,u=k.h1,c=!1,d=void 0===t||!("legal"in t)||t.legal;if(void 0!==t&&"square"in t){if(!(t.square in k))return[];a=u=k[t.square],c=!0}for(var v=a;v<=u;v++)if(136&v)v+=7;else{var y=g[v];if(null!=y&&y.color===r)if(y.type===s){var L=v+f[r][0];if(null==g[L]){i(g,e,v,L,p.NORMAL);L=v+f[r][1];l[r]===J(v)&&null==g[L]&&i(g,e,v,L,p.BIG_PAWN)}for($=2;$<4;$++){136&(L=v+f[r][$])||(null!=g[L]&&g[L].color===o?i(g,e,v,L,p.CAPTURE):L===m&&i(g,e,v,m,p.EP_CAPTURE))}}else for(var $=0,M=h[y.type].length;$<M;$++){var A=h[y.type][$];for(L=v;!(136&(L+=A));){if(null!=g[L]){if(g[L].color===r)break;i(g,e,v,L,p.CAPTURE);break}if(i(g,e,v,L,p.NORMAL),"n"===y.type||"k"===y.type)break}}}if(!c||u===w[r]){if(b[r]&p.KSIDE_CASTLE){var _=(x=w[r])+2;null!=g[x+1]||null!=g[_]||I(o,w[r])||I(o,x+1)||I(o,_)||i(g,e,w[r],_,p.KSIDE_CASTLE)}if(b[r]&p.QSIDE_CASTLE){var x;_=(x=w[r])-2;null!=g[x-1]||null!=g[x-2]||null!=g[x-3]||I(o,w[r])||I(o,x-1)||I(o,_)||i(g,e,w[r],_,p.QSIDE_CASTLE)}}if(!d)return e;var S=[];for(v=0,M=e.length;v<M;v++)F(e[v]),U(r)||S.push(e[v]),W();return S}function T(t,i){var e="";if(t.flags&p.KSIDE_CASTLE)e="O-O";else if(t.flags&p.QSIDE_CASTLE)e="O-O-O";else{var r=function(t,i){for(var e=q({legal:!i}),r=t.from,s=t.to,n=t.piece,o=0,l=0,a=0,f=0,h=e.length;f<h;f++){var u=e[f].from,c=e[f].to;n===e[f].piece&&r!==u&&s===c&&(o++,J(r)===J(u)&&l++,V(r)===V(u)&&a++)}if(o>0)return l>0&&a>0?X(r):a>0?X(r).charAt(1):X(r).charAt(0);return""}(t,i);t.piece!==s&&(e+=t.piece.toUpperCase()+r),t.flags&(p.CAPTURE|p.EP_CAPTURE)&&(t.piece===s&&(e+=X(t.from)[0]),e+="x"),e+=X(t.to),t.flags&p.PROMOTION&&(e+="="+t.promotion.toUpperCase())}return F(t),K()&&(Q()?e+="#":e+="+"),W(),e}function O(t){return t.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function I(t,r){for(var n=k.a8;n<=k.h1;n++)if(136&n)n+=7;else if(null!=g[n]&&g[n].color===t){var o=g[n],l=n-r,a=l+119;if(u[a]&1<<d[o.type]){if(o.type===s){if(l>0){if(o.color===e)return!0}else if(o.color===i)return!0;continue}if("n"===o.type||"k"===o.type)return!0;for(var f=c[a],h=n+f,v=!1;h!==r;){if(null!=g[h]){v=!0;break}h+=f}if(!v)return!0}}return!1}function U(t){return I(Y(t),w[t])}function K(){return U(C)}function Q(){return K()&&0===q().length}function D(){return!K()&&0===q().length}function G(){for(var t={},i=[],e=0,r=0,s=k.a8;s<=k.h1;s++)if(r=(r+1)%2,136&s)s+=7;else{var o=g[s];o&&(t[o.type]=o.type in t?t[o.type]+1:1,o.type===n&&i.push(r),e++)}if(2===e)return!0;if(3===e&&(1===t.b||1===t.n))return!0;if(e===t.b+2){var l=0,a=i.length;for(s=0;s<a;s++)l+=i[s];if(0===l||l===a)return!0}return!1}function H(){for(var t=[],i={},e=!1;;){var r=W();if(!r)break;t.push(r)}for(;;){var s=j().split(" ").slice(0,4).join(" ");if(i[s]=s in i?i[s]+1:1,i[s]>=3&&(e=!0),!t.length)break;F(t.pop())}return e}function F(t){var e=C,n=Y(e);if(function(t){M.push({move:t,kings:{b:w.b,w:w.w},turn:C,castling:{b:b.b,w:b.w},ep_square:m,half_moves:L,move_number:$})}(t),g[t.to]=g[t.from],g[t.from]=null,t.flags&p.EP_CAPTURE&&(C===i?g[t.to-16]=null:g[t.to+16]=null),t.flags&p.PROMOTION&&(g[t.to]={type:t.promotion,color:e}),g[t.to].type===o){if(w[g[t.to].color]=t.to,t.flags&p.KSIDE_CASTLE){var l=t.to-1,a=t.to+1;g[l]=g[a],g[a]=null}else if(t.flags&p.QSIDE_CASTLE){l=t.to+1,a=t.to-2;g[l]=g[a],g[a]=null}b[e]=""}if(b[e])for(var f=0,h=y[e].length;f<h;f++)if(t.from===y[e][f].square&&b[e]&y[e][f].flag){b[e]^=y[e][f].flag;break}if(b[n])for(f=0,h=y[n].length;f<h;f++)if(t.to===y[n][f].square&&b[n]&y[n][f].flag){b[n]^=y[n][f].flag;break}m=t.flags&p.BIG_PAWN?"b"===C?t.to-16:t.to+16:r,t.piece===s||t.flags&(p.CAPTURE|p.EP_CAPTURE)?L=0:L++,C===i&&$++,C=Y(C)}function W(){var t=M.pop();if(null==t)return null;var e=t.move;w=t.kings,C=t.turn,b=t.castling,m=t.ep_square,L=t.half_moves,$=t.move_number;var r,n,o=C,l=Y(C);if(g[e.from]=g[e.to],g[e.from].type=e.piece,g[e.to]=null,e.flags&p.CAPTURE)g[e.to]={type:e.captured,color:l};else if(e.flags&p.EP_CAPTURE){var a;a=o===i?e.to-16:e.to+16,g[a]={type:s,color:l}}e.flags&(p.KSIDE_CASTLE|p.QSIDE_CASTLE)&&(e.flags&p.KSIDE_CASTLE?(r=e.to+1,n=e.to-1):e.flags&p.QSIDE_CASTLE&&(r=e.to-2,n=e.to+1),g[r]=g[n],g[n]=null);return e}function Z(t,i){var e=O(t);if(i){var r=e.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(r)var s=r[1],n=r[2],o=r[3],l=r[4]}for(var a=q(),f=0,h=a.length;f<h;f++){if(e===O(T(a[f]))||i&&e===O(T(a[f],!0)))return a[f];if(r&&(!s||s.toLowerCase()==a[f].piece)&&k[n]==a[f].from&&k[o]==a[f].to&&(!l||l.toLowerCase()==a[f].promotion))return a[f]}return null}function J(t){return t>>4}function V(t){return 15&t}function X(t){var i=V(t),e=J(t);return"abcdefgh".substring(i,i+1)+"87654321".substring(e,e+1)}function Y(t){return t===e?i:e}function tt(t){return-1!=="0123456789".indexOf(t)}function it(t){var i=et(t);i.san=T(i,!1),i.to=X(i.to),i.from=X(i.from);var e="";for(var r in p)p[r]&i.flags&&(e+=v[r]);return i.flags=e,i}function et(t){var i=t instanceof Array?[]:{};for(var e in t)i[e]="object"==typeof e?et(t[e]):t[e];return i}function rt(t){return t.replace(/^\s+|\s+$/g,"")}function st(t){for(var i=q({legal:!1}),e=0,r=C,s=0,n=i.length;s<n;s++){if(F(i[s]),!U(r))if(t-1>0)e+=st(t-1);else e++;W()}return e}return S(void 0===t?l:t),{WHITE:e,BLACK:i,PAWN:s,KNIGHT:"n",BISHOP:n,ROOK:"r",QUEEN:"q",KING:o,SQUARES:function(){for(var t=[],i=k.a8;i<=k.h1;i++)136&i?i+=7:t.push(X(i));return t}(),FLAGS:v,load:function(t){return S(t)},reset:function(){return x()},moves:function(t){for(var i=q(t),e=[],r=0,s=i.length;r<s;r++)void 0!==t&&"verbose"in t&&t.verbose?e.push(it(i[r])):e.push(T(i[r],!1));return e},in_check:function(){return K()},in_checkmate:function(){return Q()},in_stalemate:function(){return D()},in_draw:function(){return L>=100||D()||G()||H()},insufficient_material:function(){return G()},in_threefold_repetition:function(){return H()},game_over:function(){return L>=100||Q()||D()||G()||H()},validate_fen:function(t){return z(t)},fen:function(){return j()},board:function(){for(var t=[],i=[],e=k.a8;e<=k.h1;e++)null==g[e]?i.push(null):i.push({type:g[e].type,color:g[e].color}),e+1&136&&(t.push(i),i=[],e+=8);return t},pgn:function(t){var i="object"==typeof t&&"string"==typeof t.newline_char?t.newline_char:"\n",e="object"==typeof t&&"number"==typeof t.max_width?t.max_width:0,r=[],s=!1;for(var n in A)r.push("["+n+' "'+A[n]+'"]'+i),s=!0;s&&M.length&&r.push(i);for(var o=[];M.length>0;)o.push(W());for(var l=[],a="";o.length>0;){var f=o.pop();M.length||"b"!==f.color?"w"===f.color&&(a.length&&l.push(a),a=$+"."):a=$+". ...",a=a+" "+T(f,!1),F(f)}if(a.length&&l.push(a),void 0!==A.Result&&l.push(A.Result),0===e)return r.join("")+l.join(" ");var h=0;for(n=0;n<l.length;n++)h+l[n].length>e&&0!==n?(" "===r[r.length-1]&&r.pop(),r.push(i),h=0):0!==n&&(r.push(" "),h++),r.push(l[n]),h+=l[n].length;return r.join("")},load_pgn:function(t,i){var e=void 0!==i&&"sloppy"in i&&i.sloppy;function r(t){return t.replace(/\\/g,"\\")}var s="object"==typeof i&&"string"==typeof i.newline_char?i.newline_char:"\r?\n",n=new RegExp("^(\\[((?:"+r(s)+")|.)*\\])(?:"+r(s)+"){2}"),o=n.test(t)?n.exec(t)[1]:"";x();var l=function(t,i){for(var e="object"==typeof i&&"string"==typeof i.newline_char?i.newline_char:"\r?\n",s={},n=t.split(new RegExp(r(e))),o="",l="",a=0;a<n.length;a++)o=n[a].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),l=n[a].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1"),rt(o).length>0&&(s[o]=l);return s}(o,i);for(var f in l)E([f,l[f]]);if(!("1"!==l.SetUp||"FEN"in l&&S(l.FEN,!0)))return!1;var h=t.replace(o,"").replace(new RegExp(r(s),"g")," ");h=h.replace(/(\{[^}]+\})+?/g,"");for(var u=/(\([^\(\)]+\))+?/g;u.test(h);)h=h.replace(u,"");var c=rt(h=(h=(h=h.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));c=c.join(",").replace(/,,+/g,",").split(",");for(var d="",v=0;v<c.length-1;v++){if(null==(d=Z(c[v],e)))return!1;F(d)}if(d=c[c.length-1],a.indexOf(d)>-1)(function(t){for(var i in t)return!0;return!1})(A)&&void 0===A.Result&&E(["Result",d]);else{if(null==(d=Z(d,e)))return!1;F(d)}return!0},header:function(){return E(arguments)},ascii:function(){return function(){for(var t="   +------------------------+\n",i=k.a8;i<=k.h1;i++){if(0===V(i)&&(t+=" "+"87654321"[J(i)]+" |"),null==g[i])t+=" . ";else{var r=g[i].type;t+=" "+(g[i].color===e?r.toUpperCase():r.toLowerCase())+" "}i+1&136&&(t+="|\n",i+=8)}return t+="   +------------------------+\n",t+"     a  b  c  d  e  f  g  h\n"}()},turn:function(){return C},move:function(t,i){var e=void 0!==i&&"sloppy"in i&&i.sloppy,r=null;if("string"==typeof t)r=Z(t,e);else if("object"==typeof t)for(var s=q(),n=0,o=s.length;n<o;n++)if(t.from===X(s[n].from)&&t.to===X(s[n].to)&&(!("promotion"in s[n])||t.promotion===s[n].promotion)){r=s[n];break}if(!r)return null;var l=it(r);return F(r),l},undo:function(){var t=W();return t?it(t):null},clear:function(){return _()},put:function(t,i){return B(t,i)},get:function(t){return N(t)},remove:function(t){return function(t){var i=N(t);return g[k[t]]=null,i&&i.type===o&&(w[i.color]=r),P(j()),i}(t)},perft:function(t){return st(t)},square_color:function(t){if(t in k){var i=k[t];return(J(i)+V(i))%2==0?"light":"dark"}return null},history:function(t){for(var i=[],e=[],r=(void 0!==t&&"verbose"in t&&t.verbose);M.length>0;)i.push(W());for(;i.length>0;){var s=i.pop();r?e.push(it(s)):e.push(T(s)),F(s)}return e}}};"undefined"!=typeof exports&&(exports.Chess=et),"undefined"!=typeof define&&define((function(){return et}));var rt=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <path
    d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
    style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
</svg>
`,st=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
      style="fill:#ffffff; stroke:#000000;" />
    <path
      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
      style="fill:#ffffff; stroke:#000000;" />
    <path
      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
      style="fill:#000000; stroke:#000000;" />
    <path
      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
      style="fill:#000000; stroke:#000000;" />
  </g>
</svg>
`,nt=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;"> 
      <path
        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
      <path
        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
      <path
        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
    </g>
    <path
      d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
  </g>
</svg>`,ot=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
      style="stroke-linecap:butt;" />
    <path
      d="M 34,14 L 31,17 L 14,17 L 11,14" />
    <path
      d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
      style="stroke-linecap:butt; stroke-linejoin:miter;" />
    <path
      d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
    <path
      d="M 11,14 L 34,14"
      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
  </g>
</svg>
`,lt=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(-1,-1)" />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(15.5,-5.5)" />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(32,-1)" />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(7,-4.5)" />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(24,-4)" />
    <path
      d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 11.5,30 C 15,29 30,29 33.5,30"
      style="fill:none;" />
    <path
      d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
      style="fill:none;" />
  </g>
</svg>
`,at=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 22.5,11.63 L 22.5,6"
      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    <path
      d="M 20,8 L 25,8"
      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    <path
      d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
      style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />
    <path
      d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
      style="fill:#ffffff; stroke:#000000;" />
    <path
      d="M 11.5,30 C 17,27 27,27 32.5,30"
      style="fill:none; stroke:#000000;" />
    <path
      d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
      style="fill:none; stroke:#000000;" />
    <path
      d="M 11.5,37 C 17,34 27,34 32.5,37"
      style="fill:none; stroke:#000000;" />
  </g>
</svg>`,ft=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <path
    d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
    style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
</svg>
`,ht=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
      style="fill:#000000; stroke:#000000;" />
    <path
      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
      style="fill:#000000; stroke:#000000;" />
    <path
      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
      style="fill:#ffffff; stroke:#ffffff;" />
    <path
      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
      style="fill:#ffffff; stroke:#ffffff;" />
    <path
      d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
      style="fill:#ffffff; stroke:none;" />
  </g>
</svg>
`,ut=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;"> 
      <path
        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
      <path
        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
      <path
        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
    </g>
    <path
       d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
       style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />
  </g>
</svg>`,ct=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
      style="stroke-linecap:butt;stroke-linejoin:miter;" />
    <path
      d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12,35.5 L 33,35.5 L 33,35.5"
      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 13,31.5 L 32,31.5"
      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 14,29.5 L 31,29.5"
      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 14,16.5 L 31,16.5"
      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 11,14 L 34,14"
      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
  </g>
</svg>
`,dt=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <g style="fill:#000000; stroke:none;">
      <circle cx="6"    cy="12" r="2.75" />
      <circle cx="14"   cy="9"  r="2.75" />
      <circle cx="22.5" cy="8"  r="2.75" />
      <circle cx="31"   cy="9"  r="2.75" />
      <circle cx="39"   cy="12" r="2.75" />
    </g>
    <path
       d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
       style="stroke-linecap:butt; stroke:#000000;" />
    <path
       d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
       style="stroke-linecap:butt;" />
    <path
       d="M 11,38.5 A 35,35 1 0 0 34,38.5"
       style="fill:none; stroke:#000000; stroke-linecap:butt;" />
    <path
       d="M 11,29 A 35,35 1 0 1 34,29"
       style="fill:none; stroke:#ffffff;" />
    <path
       d="M 12.5,31.5 L 32.5,31.5"
       style="fill:none; stroke:#ffffff;" />
    <path
       d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
       style="fill:none; stroke:#ffffff;" />
    <path
       d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
       style="fill:none; stroke:#ffffff;" />
  </g>
</svg>
`,vt=P`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
  <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
       d="M 22.5,11.63 L 22.5,6"
       style="fill:none; stroke:#000000; stroke-linejoin:miter;"
       id="path6570" />
    <path
       d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
       style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />
    <path
       d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
       style="fill:#000000; stroke:#000000;" />
    <path
       d="M 20,8 L 25,8"
       style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    <path
       d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
       style="fill:none; stroke:#ffffff;" />
    <path
       d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
       style="fill:none; stroke:#ffffff;" />
  </g>
</svg>`;const pt="8/8/8/8/8/8/8/8 w - - 0 1",kt="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";class yt extends X{static get styles(){return s`
      :host {
        display: inline-flex;
        width: var(--size);
        height: var(--size);
        background-color: var(--backgroundColor);
      }

      .lower_layer {
        display: grid;
        grid-template: var(--grid-template);
      }

      .coordinate {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--coordinates-color);
        font-size: var(--coordinates-font-size);
      }

      .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .cell > svg {
        width: 100%;
        height: 100%;
      }

      .white_cell {
        background-color: var(--white-cells-color);
      }

      .black_cell {
        background-color: var(--black-cells-color);
      }

      .player_turn {
        border-radius: var(--half-cells-size);
        width: 95%;
        height: 95%;
      }

      .player_turn-white {
        background-color: white;
      }

      .player_turn-black {
        background-color: black;
      }

      .piece {
        width: 100%;
        height: 100%;
      }
    `}static get properties(){return{size:{type:String},reversed:{type:Boolean},backgroundColor:{type:String},coordinatesColor:{type:String},whiteCellsColor:{type:String},blackCellsColor:{type:String}}}constructor(){super(),this._gameLogic=new et("8/8/8/8/8/8/8/8 w - - 0 1"),this.style.setProperty("--backgroundColor","gray"),this.style.setProperty("--coordinates-color","orange"),this.style.setProperty("--white-cells-color","navajowhite"),this.style.setProperty("--black-cells-color","peru"),this.style.setProperty("--size","100px"),this.style.setProperty("--cells-size","50px"),this.style.setProperty("--half-cells-size","25px");const t=50/9,i=t/2;this.style.setProperty("--grid-template",`${i}px repeat(8, ${t}px) ${i}px / ${i}px repeat(8, ${t}px) ${i}px`),this.style.setProperty("--coordinates-font-size","0.006944444444444444px")}newGame(t="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"){this._gameLogic=new et(t),this.requestUpdate()}_coordinatesToAlgebraic({rank:t,file:i}){return`${String.fromCharCode("a".charCodeAt(0)+i)}${String.fromCharCode("1".charCodeAt(0)+t)}`}_playerTurn(){const t="w"===this._gameLogic.turn();return E`<div class="player_turn ${it({"player_turn-white":t,"player_turn-black":!t})}"></div>`}_pieceToImage(t){switch(t.type){case"p":return"w"===t.color?rt:ft;case"n":return"w"===t.color?st:ht;case"b":return"w"===t.color?nt:ut;case"r":return"w"===t.color?ot:ct;case"q":return"w"===t.color?lt:dt;case"k":return"w"===t.color?at:vt}}_cell(t,i){const e=(t+i)%2==0,r={white_cell:e,black_cell:!e,cell:!0},s=this.reversed?7-i:i,n=this.reversed?7-t:t,o=this._coordinatesToAlgebraic({file:s,rank:n}),l=this._gameLogic.get(o);if(l){const t=this._pieceToImage(l);return E`<div class=${it(r)}>
        ${t}
      </div>`}return E`<div class=${it(r)}></div>`}_rowCells(t){return E`<div class="coordinate">${t+1}</div>
                  ${this.reversed?this._cell(7-t,0):this._cell(t,0)}
                  ${this.reversed?this._cell(7-t,1):this._cell(t,1)}
                  ${this.reversed?this._cell(7-t,2):this._cell(t,2)}
                  ${this.reversed?this._cell(7-t,3):this._cell(t,3)}
                  ${this.reversed?this._cell(7-t,4):this._cell(t,4)}
                  ${this.reversed?this._cell(7-t,5):this._cell(t,5)}
                  ${this.reversed?this._cell(7-t,6):this._cell(t,6)}
                  ${this.reversed?this._cell(7-t,7):this._cell(t,7)}
                <div class="coordinate">${t+1}</div>`}updated(t){if(t.has("size")){const t=this.size.match(/([0-9\.]+)(.*)/),i=parseFloat(t[1]),e=t[2],r=i/9,s=r/2,n=.425*r;this.style.setProperty("--size",this.size),this.style.setProperty("--cells-size",`${r}${e}`),this.style.setProperty("--half-cells-size",`${s}${e}`),this.style.setProperty("--grid-template",`${s}${e} repeat(8, ${r}${e}) ${s}${e} / ${s}${e} repeat(8, ${r}${e}) ${s}${e}`),this.style.setProperty("--coordinates-font-size",`${n}${e}`)}t.has("backgroundColor")&&this.style.setProperty("--backgroundColor",this.backgroundColor),t.has("coordinatesColor")&&this.style.setProperty("--coordinates-color",this.coordinatesColor),t.has("whiteCellsColor")&&this.style.setProperty("--white-cells-color",this.whiteCellsColor),t.has("blackCellsColor")&&this.style.setProperty("--black-cells-color",this.blackCellsColor)}render(){return E`
      <div class="lower_layer">
        <div></div>
        <div class="coordinate">${this.reversed?"H":"A"}</div>
        <div class="coordinate">${this.reversed?"G":"B"}</div>
        <div class="coordinate">${this.reversed?"F":"C"}</div>
        <div class="coordinate">${this.reversed?"E":"D"}</div>
        <div class="coordinate">${this.reversed?"D":"E"}</div>
        <div class="coordinate">${this.reversed?"C":"F"}</div>
        <div class="coordinate">${this.reversed?"B":"G"}</div>
        <div class="coordinate">${this.reversed?"A":"H"}</div>
        <div></div>

        ${(this.reversed?[0,1,2,3,4,5,6,7]:[7,6,5,4,3,2,1,0]).map((t=>this._rowCells(t)))}

        <div></div>
        <div class="coordinate">${this.reversed?"H":"A"}</div>
        <div class="coordinate">${this.reversed?"G":"B"}</div>
        <div class="coordinate">${this.reversed?"F":"C"}</div>
        <div class="coordinate">${this.reversed?"E":"D"}</div>
        <div class="coordinate">${this.reversed?"D":"E"}</div>
        <div class="coordinate">${this.reversed?"C":"F"}</div>
        <div class="coordinate">${this.reversed?"B":"G"}</div>
        <div class="coordinate">${this.reversed?"A":"H"}</div>
        <div>${this._playerTurn()}</div>

      </div>
    `}}window.customElements.define("loloof64-chessboard",yt);export{yt as ChessBoard,kt as DEFAULT_POSITION_FEN,pt as EMPTY_BOARD_FEN};
