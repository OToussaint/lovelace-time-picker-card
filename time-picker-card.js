function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}var e,i;function n(t){return t.substr(0,t.indexOf("."))}"function"==typeof SuppressedError&&SuppressedError,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var s=["closed","locked","off"],o=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s},r=function(t){o(window,"haptic",t)},a=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,o=n(e),r="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(r,s,{entity_id:e})}(t,e,s.includes(t.states[e].state))},l=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(r("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&o(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),o(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(a(e,i.entity),r("success"));break;case"call-service":if(!n.service)return void r("failure");var s=n.service.split(".",2);e.callService(s[0],s[1],n.service_data,n.target),r("success");break;case"fire-dom-event":o(t,"ll-custom",n)}};function c(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=window,h=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),p=new WeakMap;let m=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=p.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&p.set(e,t))}return t}toString(){return this.cssText}};const v=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new m(i,t,u)},g=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new m("string"==typeof t?t:t+"",void 0,u))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var f;const _=window,$=_.trustedTypes,y=$?$.emptyScript:"",b=_.reactiveElementPolyfillSupport,A={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E},C="finalized";let S=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty(C))return!1;this[C]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(g(t))}else void 0!==t&&e.push(g(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{h?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=d.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=w){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:A).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:A;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||E)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var x;S[C]=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:S}),(null!==(f=_.reactiveElementVersions)&&void 0!==f?f:_.reactiveElementVersions=[]).push("1.6.3");const k=window,T=k.trustedTypes,P=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,H="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,U="?"+N,M=`<${U}>`,I=document,L=()=>I.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,R="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,B=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,W=/"/g,q=/^(?:script|style|textarea|title)$/i,Y=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),K=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),J=new WeakMap,X=I.createTreeWalker(I,129,null,!1);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===D?"!--"===l[1]?r=j:void 0!==l[1]?r=z:void 0!==l[2]?(q.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=null!=s?s:D,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?B:'"'===l[3]?W:G):r===W||r===G?r=B:r===j||r===z?r=D:(r=B,s=void 0);const h=r===B&&t[e+1].startsWith("/>")?" ":"";o+=r===D?i+M:c>=0?(n.push(a),i.slice(0,c)+H+i.slice(c)+N+h):i+N+(-2===c?(n.push(void 0),e):h)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class tt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=Q(t,e);if(this.el=tt.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=X.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(H)||e.startsWith(N)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+H).split(N),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?ot:"?"===e[1]?at:"@"===e[1]?lt:st})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(q.test(n.tagName)){const t=n.textContent.split(N),e=t.length-1;if(e>0){n.textContent=T?T.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],L()),X.nextNode(),a.push({type:2,index:++s});n.append(t[e],L())}}}else if(8===n.nodeType)if(n.data===U)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(N,t+1));)a.push({type:7,index:s}),t+=N.length-1}s++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,n){var s,o,r,a;if(e===K)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=et(t,l._$AS(t,e.values),l,n)),e}class it{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:I).importNode(i,!0);X.currentNode=s;let o=X.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new nt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ct(o,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=X.nextNode(),r++)}return X.currentNode=I,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class nt{constructor(t,e,i,n){var s;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),O(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>V(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(I.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=tt.createElement(Z(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new it(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new tt(t)),e}T(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new nt(this.k(L()),this.k(L()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class st{constructor(t,e,i,n,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=et(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=et(this,n[i+r],e,r),a===K&&(a=this._$AH[r]),o||(o=!O(a)||a!==this._$AH[r]),a===F?t=F:t!==F&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ot extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}const rt=T?T.emptyScript:"";class at extends st{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}}class lt extends st{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=et(this,t,e,0))&&void 0!==i?i:F)===K)return;const n=this._$AH,s=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==F&&(n===F||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const dt=k.litHtmlPolyfillSupport;null==dt||dt(tt,nt),(null!==(x=k.litHtmlVersions)&&void 0!==x?x:k.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ht,ut;class pt extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new nt(e.insertBefore(L(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return K}}pt.finalized=!0,pt._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:pt});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:pt}),(null!==(ut=globalThis.litElementVersions)&&void 0!==ut?ut:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,gt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ft(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):gt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var _t;null===(_t=window.HTMLSlotElement)||void 0===_t||_t.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t=1,yt=t=>(...e)=>({_$litDirective$:t,values:e});class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=yt(class extends bt{constructor(t){var e;if(super(t),t.type!==$t||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const s=t.element.classList;this.it.forEach((t=>{t in e||(s.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(i?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return K}}),Et="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class wt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Et?"100px":"50px",height:Et?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},n=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?o(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,o(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,o(t,"action",{action:"double_tap"})):o(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",(t=>{13===t.keyCode&&n(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-time-picker-card",wt);const Ct=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-time-picker-card"))return t.querySelector("action-handler-time-picker-card");const e=document.createElement("action-handler-time-picker-card");return t.appendChild(e),e})();i&&i.bind(t,e)},St=yt(class extends bt{update(t,[e]){return Ct(t.element,e),K}render(t){}});var xt,kt,Tt,Pt;!function(t){var e,i;(e=t.AlignControls||(t.AlignControls={})).LEFT="left",e.CENTER="center",e.RIGHT="right",(i=t.Name||(t.Name={})).HEADER="header",i.INSIDE="inside"}(xt||(xt={})),function(t){t.UP="up",t.DOWN="down"}(kt||(kt={})),function(t){t.AM="AM",t.PM="PM"}(Tt||(Tt={}));let Ht=Pt=class extends pt{get amClass(){return{"time-period":!0,active:this.period===Tt.AM}}get pmClass(){return{"time-period":!0,active:this.period===Tt.PM}}render(){return Y`<div class="time-period-selector">
      ${"single"===this.mode?this.renderSingle():this.renderDouble()}
    </div>`}onTimePeriodChange(){const t=new CustomEvent(Pt.EVENT_TOGGLE);this.dispatchEvent(t)}renderSingle(){return Y`<div class="time-period active" @click=${this.onTimePeriodChange}>
      ${this.period}<mwc-ripple></mwc-ripple>
    </div>`}renderDouble(){return Y`<div class=${At(this.amClass)} @click=${this.onTimePeriodChange}>
        AM<mwc-ripple></mwc-ripple>
      </div>
      <div class=${At(this.pmClass)} @click=${this.onTimePeriodChange}>
        PM<mwc-ripple></mwc-ripple>
      </div>`}static get styles(){return v`
      .time-period-selector {
        padding: 0 8px;
      }

      .time-period {
        width: 30px;
        padding: var(--tpc-control-padding);
        background: var(--tpc-off-color);
        color: var(--tpc-text-color);
        text-align: center;
        font-size: 1em;
        cursor: pointer;
      }

      .time-period.active {
        background: var(--tpc-accent-color);
      }
    `}};var Nt;Ht.EVENT_TOGGLE="toggle",t([ft()],Ht.prototype,"period",void 0),t([ft()],Ht.prototype,"mode",void 0),Ht=Pt=t([vt("time-period")],Ht);let Ut=Nt=class extends pt{render(){return Y`
      <div class="time-unit">
        ${this.renderStepChanger(kt.UP)}
        <input
          class="time-input"
          type="number"
          placeholder="MM"
          min=${this.unit.minValue}
          max=${this.unit.maxValue}
          .value="${this.unit.toString()}"
          @change=${this.onInputChange}
        />
        ${this.renderStepChanger(kt.DOWN)}
      </div>
    `}onInputChange({target:{value:t}}){this.unit.setStringValue(t);const e=new CustomEvent(Nt.EVENT_UPDATE);this.dispatchEvent(e)}onStepChangerClick(t){const e=new CustomEvent(Nt.EVENT_STEP_CHANGE,{detail:{direction:t}});this.dispatchEvent(e)}renderStepChanger(t){return Y`
      <div class="time-picker-icon" @click=${()=>this.onStepChangerClick(t)}>
        <ha-icon .icon="hass:chevron-${t}"></ha-icon>
        <mwc-ripple id="ripple"></mwc-ripple>
      </div>
    `}static get styles(){return v`
      .time-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* default padding merged from user's card_mod (can be overridden via CSS variables or card_mod) */
        padding: var(--tpc-time-unit-padding, 5px);
      }

      .time-picker-icon {
        width: 30px;
        padding: var(--tpc-control-padding);
        text-align: center;
        cursor: pointer;
        /* prefer switch-checked color when present, otherwise fall back to tpc-icon-color */
        color: var(--switch-checked-button-color, var(--tpc-icon-color));
      }

      .time-input {
        width: 30px;
        padding: var(--tpc-control-padding);
        background: var(--tpc-elements-background-color);
        /* merged styles from user's card_mod */
        border: 1px solid var(--tpc-time-input-border-color, var(--switch-checked-button-color));
        background-color: var(--tpc-time-input-background, rgba(0,0,0,0));
        color: var(--tpc-time-input-color, var(--primary-text-color, #fff));
        border-radius: var(--tpc-time-input-radius, 7px);
        margin: var(--tpc-time-input-margin, -10px);
        /* fixed height to match user's expectation (default 25px); overridable via --tpc-time-input-height */
        height: var(--tpc-time-input-height, 25px);
        box-sizing: border-box;
        text-align: center;
        font-size: 1em;
        -moz-appearance: textfield;

        transition: border-color 0.2s ease-in-out;
      }

      .time-input:focus {
        outline: none;
      }

      .time-input:invalid {
        box-shadow: none;
        outline: none;
        border: 0;
        border-bottom: 2px solid red;
      }

      .time-input::-webkit-inner-spin-button,
      .time-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}};Ut.EVENT_UPDATE="update",Ut.EVENT_STEP_CHANGE="stepChange",t([ft()],Ut.prototype,"unit",void 0),Ut=Nt=t([vt("time-unit")],Ut);const Mt="input_datetime",It="double",Lt=xt.AlignControls.CENTER,Ot=xt.Name.HEADER;var Vt;const Rt={entity:"input_datetime entity id",name:"Name",hour_step:"Hour step",minute_step:"Minute step",hour_mode:"Hour mode",link_values:"Link values",align_controls:"Align controls",embedded:"Embedded?",thin:"Thin layout?",icon:"Icon",seconds:"Seconds"},Dt=[{name:"entity",selector:{entity:{domain:"input_datetime"}}},{name:"name",selector:{text:{}}},{type:"grid",schema:[{name:"hour_step",type:"integer",required:!0,default:1,valueMin:1,valueMax:24},{name:"minute_step",type:"integer",required:!0,default:5,valueMin:1,valueMax:60},{name:"hour_mode",type:"select",options:[[12,"12"],[24,"24"]]},{name:"link_values",type:"boolean"}]},{type:"expandable",name:"layout",title:"Layout controls",schema:[{name:"hour_mode",type:"select",options:[["single","single"],["double","double"]]},{name:"align_controls",type:"select",options:[["left","left"],["center","center"],["right","right"]]},{name:"name",type:"select",options:[["header","header"],["inside","inside"]]},{name:"embedded",type:"boolean"},{name:"thin",type:"boolean"}]},{type:"expandable",name:"hide",title:"Hide controls",schema:[{type:"grid",name:"",schema:[{name:"name",type:"boolean"},{name:"icon",type:"boolean"},{name:"seconds",type:"boolean"}]}]},{type:"expandable",title:"Actions",schema:[{name:"tap_action",selector:{action:{}}},{name:"double_tap_action",selector:{action:{}}},{name:"hold_action",selector:{action:{}}}]}];let jt=Vt=class extends pt{computeLabel({name:t}){return Rt[t]||t}valueChanged(t){const e=Object.assign(Object.assign({},this.config),t.detail.value);this.dispatch(e)}render(){return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${Dt}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `}setConfig(t){this.config=t}dispatch(t){const e=new CustomEvent(Vt.CONFIG_CHANGED_EVENT,{bubbles:!0,composed:!0,detail:{config:t}});this.dispatchEvent(e)}};jt.CONFIG_CHANGED_EVENT="config-changed",t([ft({type:Object})],jt.prototype,"hass",void 0),t([ft()],jt.prototype,"config",void 0),jt=Vt=t([vt("time-picker-card-editor")],jt);class zt{constructor(t,e,i){this._value=t,this._step=e,this._limit=i}get value(){return this._value}setStringValue(t){this.isValidString(t)&&this.setValue(parseInt(t))}stepUpdate(t,e=this._step){t===kt.UP?this.increment(e):this.decrement(e)}toString(){return this.value<10?`0${this.value}`:this.value.toString()}increment(t=this._step){this.setValue(this.value+t)}decrement(t=this._step){this.setValue(this.value-t)}setValue(t){isNaN(t)||((t>=this._limit||t<0)&&(t=(t+this._limit)%this._limit),this._value=t)}isValidString(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<this._limit}}class Bt extends zt{constructor(t,e=1,i){super(t,e,Bt.VALUE_LIMIT),this.hourMode=i}get minValue(){return 12===this.hourMode?1:0}get maxValue(){return 12===this.hourMode?12:Bt.VALUE_LIMIT-1}togglePeriod(){this.setValue(this.value+12)}toString(){let t;return 12===this.hourMode?(t=(this.value+12)%12,t=0===t?12:t):t=this.value,t<10?`0${t}`:t.toString()}}Bt.VALUE_LIMIT=24;class Gt extends zt{constructor(t,e=5){super(t,e,Gt.VALUE_LIMIT),this.minValue=0,this.maxValue=Gt.VALUE_LIMIT-1}willOverflow(t){const e=t===kt.UP?this.value+this._step:this.value-this._step;return e>=this._limit||e<0}}Gt.VALUE_LIMIT=60;class Wt extends zt{constructor(t,e=5){super(t,e,Wt.VALUE_LIMIT),this.minValue=0,this.maxValue=Wt.VALUE_LIMIT-1}willOverflow(t){const e=t===kt.UP?this.value+this._step:this.value-this._step;return e>=this._limit||e<0}}Wt.VALUE_LIMIT=60;class qt{constructor(t,e,i,n=!1){this.hour=t,this.minute=e,this.second=i,this._linkValues=n}hourStep(t){this.hour.stepUpdate(t)}minuteStep(t){this._linkValues&&this.minute.willOverflow(t)&&this.hour.stepUpdate(t,1),this.minute.stepUpdate(t)}secondStep(t){this._linkValues&&this.second.willOverflow(t)&&this.minute.stepUpdate(t,1),this.second.stepUpdate(t)}get value(){return`${this.hour.value}:${this.minute.value}:${this.second.value}`}}class Yt{static error(t,e){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),Y`${i}`}}console.info("%c  TIME-PICKER-CARD  \n%c  Version 1.4.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"time-picker-card",name:"Time Picker Card",description:"A Time Picker card for setting the time value of Input Datetime entities."});let Kt=class extends pt{get entity(){return this.hass.states[this.config.entity]}get isEmbedded(){var t;return!0===(null===(t=this.config.layout)||void 0===t?void 0:t.embedded)}get hasNameInHeader(){var t,e,i;return Boolean(this.name)&&!1===Boolean(null===(t=this.config.hide)||void 0===t?void 0:t.name)&&(null===(e=this.config.layout)||void 0===e?void 0:e.name)!==xt.Name.INSIDE&&!1===Boolean(null===(i=this.config.layout)||void 0===i?void 0:i.embedded)}get hasNameInside(){var t,e;return Boolean(this.name)&&((null===(t=this.config.layout)||void 0===t?void 0:t.name)===xt.Name.INSIDE||Boolean(null===(e=this.config.layout)||void 0===e?void 0:e.embedded))}get name(){var t;return this.config.name||(null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name)}get shouldShowPeriod(){return 12===this.config.hour_mode}get layoutAlign(){var t,e;return null!==(e=null===(t=this.config.layout)||void 0===t?void 0:t.align_controls)&&void 0!==e?e:Lt}get haCardClass(){var t;return{embedded:this.isEmbedded,thin:!0===(null===(t=this.config.layout)||void 0===t?void 0:t.thin)}}get rowClass(){return{"time-picker-row":!0,"with-header-name":this.hasNameInHeader,embedded:this.isEmbedded}}get contentClass(){return{"time-picker-content":!0,[`layout-${this.layoutAlign}`]:!0}}handleAction(t){!function(t,e,i,n){var s;"double_tap"===n&&i.double_tap_action?s=i.double_tap_action:"hold"===n&&i.hold_action?s=i.hold_action:"tap"===n&&i.tap_action&&(s=i.tap_action),l(t,e,i,s)}(this,this.hass,this.config,t.detail.action)}renderHeaderName(t){return Y`<div
      class="time-picker-header"
      @action=${this.handleAction}
      .actionHandler="${St({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    >
      ${t}
    </div>`}renderNestedName(t,e,i){const n=Y`<state-badge
      class="entity-icon"
      .stateObj=${e}
      @action=${this.handleAction}
      .actionHandler="${St({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    ></state-badge>`,s=Y`<div
      class="entity-name-inside"
      @action=${this.handleAction}
      .actionHandler="${St({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    >
      ${t}
    </div>`,o=[{element:n,visible:!(null==i?void 0:i.icon)},{element:s,visible:!(null==i?void 0:i.name)}].filter((({visible:t})=>t)).map((({element:t})=>t));return Y`${o}`}render(){var t,e,i;if(!this.entity)return Yt.error("Entity not found",this.config);if(n(this.entity.entity_id)!==Mt)return Yt.error(`You must set an ${Mt} entity`,this.config);if(!this.entity.attributes.has_time)return Yt.error(`You must set an ${Mt} entity that sets has_time: true`,this.config);const{hour:s,minute:o,second:r}=this.entity.attributes,a=new Bt(s,this.config.hour_step,this.config.hour_mode),l=new Gt(o,this.config.minute_step),c=new Wt(r,this.config.second_step);return this.time=new qt(a,l,c,this.config.link_values),this.period=a.value>=12?Tt.PM:Tt.AM,Y`
      <ha-card class=${At(this.haCardClass)}>
        ${this.hasNameInHeader?this.renderHeaderName(this.name):""}
        <div class=${At(this.rowClass)}>
          ${this.hasNameInside?this.renderNestedName(this.name,this.entity,this.config.hide):""}

          <div class=${At(this.contentClass)}>
            <time-unit
              .unit=${this.time.hour}
              @stepChange=${this.onHourStepChange}
              @update=${this.debouncedCallHassService}
            ></time-unit>
            <div class="time-separator">:</div>
            <time-unit
              .unit=${this.time.minute}
              @stepChange=${this.onMinuteStepChange}
              @update=${this.debouncedCallHassService}
            ></time-unit>
            ${!1===(null===(t=this.config.hide)||void 0===t?void 0:t.seconds)?Y`<div class="time-separator">:</div>
                  <time-unit
                    .unit=${this.time.second}
                    @stepChange=${this.onSecondStepChange}
                    @update=${this.debouncedCallHassService}
                  ></time-unit>`:""}
            ${this.shouldShowPeriod?Y`<time-period
                  .period=${this.period}
                  .mode=${null!==(i=null===(e=this.config.layout)||void 0===e?void 0:e.hour_mode)&&void 0!==i?i:It}
                  @toggle=${this.onPeriodToggle}
                ></time-period>`:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You must set an entity");if(t.hour_mode&&12!==t.hour_mode&&24!==t.hour_mode)throw new Error("Invalid hour_mode: select either 12 or 24");this.config=t}getCardSize(){return 3}onPeriodToggle(){this.time.hour.togglePeriod(),this.debouncedCallHassService()}onHourStepChange(t){this.time.hourStep(t.detail.direction),this.debouncedCallHassService()}onMinuteStepChange(t){this.time.minuteStep(t.detail.direction),this.debouncedCallHassService()}onSecondStepChange(t){this.time.secondStep(t.detail.direction),this.debouncedCallHassService()}debouncedCallHassService(){this.config.delay?(clearTimeout(this.bounce),this.bounce=setTimeout((()=>this.callHassService()),this.config.delay,this)):this.callHassService()}callHassService(){if(!this.hass)throw new Error("Unable to update datetime");return this.hass.callService(Mt,"set_datetime",{entity_id:this.entity.entity_id,time:this.time.value})}static get styles(){return v`
      :host {
        --tpc-elements-background-color: var(
          --time-picker-elements-background-color,
          var(--primary-color)
        );

        --tpc-control-padding: var(--time-picker-control-padding, 8px);

        --tpc-icon-color: var(--time-picker-icon-color, var(--primary-text-color));
        --tpc-text-color: var(--time-picker-text-color, #fff);
        --tpc-accent-color: var(--time-picker-accent-color, var(--primary-color));
        --tpc-off-color: var(--time-picker-off-color, var(--disabled-text-color));

        --tpc-border-radius: var(--time-picker-border-radius, var(--ha-card-border-radius, 4px));
      }

      ha-card {
        overflow: auto;
        /* default margin merged from user's card_mod; still overridable by card_mod or CSS variables */
        margin: var(--tpc-ha-card-margin, -25px -4px -22px 0px);
      }

      ha-card.embedded {
        box-shadow: none;
        border: none;
        background: transparent;
      }

      .time-picker-header {
        padding: 16px;
        color: var(--tpc-text-color);
        background-color: var(--tpc-elements-background-color);
        border-top-left-radius: var(--tpc-border-radius);
        border-top-right-radius: var(--tpc-border-radius);
        font-size: 1em;
        text-align: center;
      }

      .thin > .time-picker-header {
        padding: 4px;
      }

      .time-picker-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
      }

      .thin .time-picker-row {
        padding: 0 !important ;
      }

      .time-picker-row.embedded {
        padding: 0;
      }

      .time-picker-row.with-header-name {
        padding: 8px 16px 16px;
      }

      .time-picker-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1 0 auto;
      }

      .time-picker-content.layout-left {
        justify-content: flex-start;
      }

      .time-picker-content.layout-center {
        justify-content: center;
      }

      .time-picker-content.layout-right {
        justify-content: flex-end;
      }

      .entity-icon {
        cursor: pointer;
        /* allow state-based icon color to apply when provided by theme or card_mod */
        color: var(--state-icon-color, inherit);
      }

      .entity-name-inside {
        margin-left: 16px;
        cursor: pointer;
      }
    `}static getStubConfig(t,e){return{entity:e.find((t=>n(t)===Mt))||"",hour_mode:24,hour_step:1,minute_step:5,layout:{hour_mode:It,align_controls:Lt,name:Ot},hide:{seconds:!0}}}static getConfigElement(){return document.createElement("time-picker-card-editor")}};t([ft({type:Object})],Kt.prototype,"hass",void 0),t([ft()],Kt.prototype,"config",void 0),t([ft()],Kt.prototype,"time",void 0),t([ft()],Kt.prototype,"period",void 0),Kt=t([vt("time-picker-card")],Kt);export{Kt as TimePickerCard};
