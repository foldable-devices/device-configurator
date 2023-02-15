var di=Object.defineProperty;var ui=(e,t,i)=>t in e?di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var p=(e,t,i)=>(ui(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window,Lt=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),oe=new WeakMap;let He=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Lt&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=oe.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&oe.set(i,t))}return t}toString(){return this.cssText}};const pi=e=>new He(typeof e=="string"?e:e+"",void 0,jt),Bt=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new He(i,e,jt)},vi=(e,t)=>{Lt?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=vt.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},re=Lt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return pi(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;const mt=window,se=mt.trustedTypes,fi=se?se.emptyScript:"",ne=mt.reactiveElementPolyfillSupport,Dt={toAttribute(e,t){switch(t){case Boolean:e=e?fi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ne=(e,t)=>t!==e&&(t==t||e==e),Ct={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:Ne};let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=Ct){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ct}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(re(r))}else t!==void 0&&i.push(re(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vi(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=Ct){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:Dt).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Dt;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Ne)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},ne==null||ne({ReactiveElement:D}),((Et=mt.reactiveElementVersions)!==null&&Et!==void 0?Et:mt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt;const gt=window,B=gt.trustedTypes,ae=B?B.createPolicy("lit-html",{createHTML:e=>e}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,Me="?"+C,mi=`<${Me}>`,W=document,nt=(e="")=>W.createComment(e),at=e=>e===null||typeof e!="object"&&typeof e!="function",De=Array.isArray,gi=e=>De(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,he=/>/g,R=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,de=/"/g,Fe=/^(?:script|style|textarea|title)$/i,_i=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=_i(1),q=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ue=new WeakMap,L=W.createTreeWalker(W,129,null,!1),yi=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=Q;for(let a=0;a<i;a++){const l=e[a];let u,c,d=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===Q?c[1]==="!--"?n=le:c[1]!==void 0?n=he:c[2]!==void 0?(Fe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=R):c[3]!==void 0&&(n=R):n===R?c[0]===">"?(n=r??Q,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,u=c[1],n=c[3]===void 0?R:c[3]==='"'?de:ce):n===de||n===ce?n=R:n===le||n===he?n=Q:(n=R,r=void 0);const _=n===R&&e[a+1].startsWith("/>")?" ":"";s+=n===Q?l+mi:d>=0?(o.push(u),l.slice(0,d)+"$lit$"+l.slice(d)+C+_):l+C+(d===-2?(o.push(void 0),a):_)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ae!==void 0?ae.createHTML(h):h,o]};let Ft=class Ie{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,u]=yi(t,i);if(this.el=Ie.createElement(l,o),L.currentNode=this.el.content,i===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(r=L.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(C)){const v=u[n++];if(c.push(d),v!==void 0){const _=r.getAttribute(v.toLowerCase()+"$lit$").split(C),S=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:S[2],strings:_,ctor:S[1]==="."?bi:S[1]==="?"?Si:S[1]==="@"?xi:bt})}else a.push({type:6,index:s})}for(const d of c)r.removeAttribute(d)}if(Fe.test(r.tagName)){const c=r.textContent.split(C),d=c.length-1;if(d>0){r.textContent=B?B.emptyScript:"";for(let v=0;v<d;v++)r.append(c[v],nt()),L.nextNode(),a.push({type:2,index:++s});r.append(c[d],nt())}}}else if(r.nodeType===8)if(r.data===Me)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(C,c+1))!==-1;)a.push({type:7,index:s}),c+=C.length-1}s++}}static createElement(t,i){const o=W.createElement("template");return o.innerHTML=t,o}};function K(e,t,i=e,o){var r,s,n,h;if(t===q)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=at(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=K(e,a._$AS(e,t.values),a,o)),t}let wi=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:o},parts:r}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:W).importNode(o,!0);L.currentNode=s;let n=L.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let u;l.type===2?u=new Wt(n,n.nextSibling,this,t):l.type===1?u=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(u=new Ai(n,this,t)),this.u.push(u),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=L.nextNode(),h++)}return s}p(t){let i=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},Wt=class Le{constructor(t,i,o,r){var s;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=K(this,t,i),at(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==q&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gi(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==y&&at(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ft.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new wi(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=ue.get(t.strings);return i===void 0&&ue.set(t.strings,i=new Ft(t)),i}k(t){De(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Le(this.O(nt()),this.O(nt()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},bt=class{constructor(t,i,o,r,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=K(this,t,i,0),n=!at(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=K(this,h[o+a],i,a),l===q&&(l=this._$AH[a]),n||(n=!at(l)||l!==this._$AH[a]),l===y?t=y:t!==y&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!r&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},bi=class extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}};const $i=B?B.emptyScript:"";let Si=class extends bt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==y?this.element.setAttribute(this.name,$i):this.element.removeAttribute(this.name)}},xi=class extends bt{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){var o;if((t=(o=K(this,t,i,0))!==null&&o!==void 0?o:y)===q)return;const r=this._$AH,s=t===y&&r!==y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==y&&(r===y||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Ai=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}};const pe=gt.litHtmlPolyfillSupport;pe==null||pe(Ft,Wt),((zt=gt.litHtmlVersions)!==null&&zt!==void 0?zt:gt.litHtmlVersions=[]).push("2.6.1");const Ei=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new Wt(t.insertBefore(nt(),h),h,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt,Vt;let U=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const o=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=o.firstChild),o}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ei(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return q}};U.finalized=!0,U._$litElement$=!0,(kt=globalThis.litElementHydrateSupport)===null||kt===void 0||kt.call(globalThis,{LitElement:U});const ve=globalThis.litElementPolyfillSupport;ve==null||ve({LitElement:U});((Vt=globalThis.litElementVersions)!==null&&Vt!==void 0?Vt:globalThis.litElementVersions=[]).push("3.2.2");function fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var tt=function(){try{window[b].updateSegments();var e=function(){if(!Pt)return Pt=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Pt=t,window[b].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},b="__foldables__",Pt=!1,qt=function(){function e(){var o=this;if(window[b]!==void 0)return window[b];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(tt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,u=window.innerHeight,c=0,d=0;d<this.horizontalViewportSegments;++d)o[d]={top:0,left:c,right:c+l,bottom:u,width:l,height:u},c+=o[d].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(b+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(b+"-horizontal-viewport-segments",o),tt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(b+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(b+"-vertical-viewport-segments",o),tt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(b+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(b+"-fold-size",o),tt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(b+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(b+"-browser-shell-size",o),tt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[b]=new qt,window.visualViewport.segments===void 0&&window[b].updateSegments();var je="-viewport-segments",Kt="(\\s*)(@media.*?\\b"+je+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Ci=/\((.*?)\)/gi,zi=/@media[^\(]+/gi,ki=/(horizontal-viewport-segments:)\s?(\d)/gi,Vi=/(vertical-viewport-segments:)\s?(\d)/gi,Pi=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Be(e,t){return e.replace(new RegExp(Kt,"gi"),t)}function me(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function We(e){var t=function(o){var r,s=new RegExp(Kt,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],h=o[4],a=s.match(zi)||[],l=s.match(Ci)||[],u=me(s,Vi);u===void 0&&(u=1);var c=me(s,ki);c===void 0&&(c=1),l=l.filter(function(d){return!d.includes(je)}).join(" and "),i[u]===void 0&&(i[u]=new Array),i[u][c]=""+r+a+l+"{"+n+h+"}"}),i}var $t=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+$t);var ge,qe=new qt;if(!$t){var Rt=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(ge=Rt,Promise.all(ge.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=Be(i,""),n=We(i),h=Rt[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var u=l[a],c=u[0],d=u[1];k[c]==null&&(k[c]=[]);for(var v=0,_=Object.entries(d);v<_.length;v++){var S=_[v];k[c][S[0]]="/* origin: "+h+" */"+S[1]}}if(h=="inline"||(r=i,new RegExp(Kt,"gi").test(r))){var N=document.createElement("style");N.setAttribute("data-css-origin",h),N.textContent=s,t.appendChild(N)}else{var V=document.createElement("link");V.type="text/css",V.rel="stylesheet",V.href=h,t.appendChild(V)}}),Rt.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),Ke()})}var k=[[]];function Ri(e,t){if($t)return e;var i=Be(e,""),o=We(e);t&&(k[t]=[[]]);for(var r=t?k[t]:k,s=t?"":"/* origin: inline */",n=0,h=Object.entries(o);n<h.length;n++){var a=h[n],l=a[0],u=a[1];r[l]==null&&(r[l]=[]);for(var c=0,d=Object.entries(u);c<d.length;c++){var v=d[c];r[l][v[0]]=""+s+v[1]}}return r[0][0]=i,i}function Ke(e){$t||(_e(e),qe.addEventListener("change",function(){return _e(e)}))}function _e(e){var t,i=qe,o=null;(t=e?k[e.nodeName.toLowerCase()]:k)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var u=l[a],c=u[0],d=0,v=Object.entries(u[1]);d<v.length;d++){var _=v[d],S=_[0];r=_[1]+"px",o=o.replace(Pi(h?"viewport-segment-"+S+" "+c+" 0":"viewport-segment-"+S+" 0 "+c),r)}var N="__foldables_sheet__",V=function(At,hi){for(var te,ci=function(x,So){var P=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(P)return(P=P.call(x)).next.bind(P);if(Array.isArray(x)||(P=function(A,ie){if(A){if(typeof A=="string")return fe(A,ie);var M=Object.prototype.toString.call(A).slice(8,-1);return M==="Object"&&A.constructor&&(M=A.constructor.name),M==="Map"||M==="Set"?Array.from(A):M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?fe(A,ie):void 0}}(x))){P&&(x=P);var ee=0;return function(){return ee>=x.length?{done:!0}:{done:!1,value:x[ee++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(At.querySelectorAll("."+N));!(te=ci()).done;)te.value.remove();var ut=document.createElement("style");ut.className=N,ut.textContent=hi,At===document?document.head.appendChild(ut):At.appendChild(ut)};if(e){var dt=e.shadowRoot;"adoptedStyleSheets"in dt&&dt.adoptedStyleSheets.length>0?dt.adoptedStyleSheets[0].replace(s+o):V(dt,o)}else V(document,o)}}const Ti=(e,...t)=>{const i=Ri(e[0],"main-application");return Bt([i],...t)};class Ze extends U{connectedCallback(){super.connectedCallback(),Ke(this)}constructor(){super()}render(){return H`
        <div class="content">
          <div class="main-container"><div class="text">Main Content</div></div>
          <div class="fold angled stripes"></div>
          <div class="second-container"><div class="text">Detail panel</div></div>
          </div>
        </div>
    `}}p(Ze,"styles",Ti`
    :host {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }

    .main-container {
      width: 100vw;
      height: 100vh;
      background-color: #bf0033;
      text-align: center;
    }

    .text {
      font-weight: bold;
      color: white;
      margin-top: 12px;
    }

    .second-container {
      height: 0vh;
      width: 0vw;
      background-color: #126b00;
      text-align: center;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 0;
      width: 0;
    }

    @media (horizontal-viewport-segments: 2) {
      .main-container {
        width: env(viewport-segment-right 0 0);
        height: 100vh;
      }
      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }
      .content {
        flex-direction: row;
      }
      .second-container {
        height: 100vh;
        width: env(viewport-segment-width 1 0);
      }
    }

    @media (vertical-viewport-segments: 2) {
      .main-container {
        width: 100vw;
        height: var(--zenbook-span1-height, env(viewport-segment-top 0 1));
      }
      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
      }
      .content {
        flex-direction: column-reverse;
      }
      .second-container {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100vw;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .main-container {
        width: 100vw;
        height: 100vh;
      }
      .fold {
        height: 0;
        width: 0;
      }
      .content {
        flex-direction: row;
      }
      .second-container {
        height: 0;
        width: 0;
        display: none;
      }
    }
  `);customElements.define("main-application",Ze);var ft=window,Zt=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),ye=new WeakMap,Ye=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Zt&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ye.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ye.set(i,t))}return t}toString(){return this.cssText}},Oi=e=>new Ye(typeof e=="string"?e:e+"",void 0,Yt),Xt=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Ye(i,e,Yt)},Ui=(e,t)=>{Zt?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=ft.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},we=Zt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return Oi(i)})(e):e,Tt,_t=window,be=_t.trustedTypes,Hi=be?be.emptyScript:"",$e=_t.reactiveElementPolyfillSupport,lt={toAttribute(e,t){switch(t){case Boolean:e=e?Hi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Xe=(e,t)=>t!==e&&(t==t||e==e),Ot={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Xe},F=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=Ot){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ot}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(we(o))}else e!==void 0&&t.push(we(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ui(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ot){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:lt).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:lt;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Xe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},$e==null||$e({ReactiveElement:F}),((Tt=_t.reactiveElementVersions)!==null&&Tt!==void 0?Tt:_t.reactiveElementVersions=[]).push("1.6.1");var Ut,yt=window,Z=yt.trustedTypes,Se=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,z=`lit$${(Math.random()+"").slice(9)}$`,Je="?"+z,Ni=`<${Je}>`,Y=document,ht=(e="")=>Y.createComment(e),ct=e=>e===null||typeof e!="object"&&typeof e!="function",Ge=Array.isArray,Mi=e=>Ge(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Ae=/>/g,T=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Ce=/"/g,Qe=/^(?:script|style|textarea|title)$/i,Di=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ze=Di(1),$=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ke=new WeakMap,j=Y.createTreeWalker(Y,129,null,!1),Fi=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=et;for(let a=0;a<i;a++){const l=e[a];let u,c,d=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===et?c[1]==="!--"?n=xe:c[1]!==void 0?n=Ae:c[2]!==void 0?(Qe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=T):c[3]!==void 0&&(n=T):n===T?c[0]===">"?(n=r??et,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,u=c[1],n=c[3]===void 0?T:c[3]==='"'?Ce:Ee):n===Ce||n===Ee?n=T:n===xe||n===Ae?n=et:(n=T,r=void 0);const _=n===T&&e[a+1].startsWith("/>")?" ":"";s+=n===et?l+Ni:d>=0?(o.push(u),l.slice(0,d)+"$lit$"+l.slice(d)+z+_):l+z+(d===-2?(o.push(void 0),a):_)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Se!==void 0?Se.createHTML(h):h,o]},wt=class{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,h=this.parts,[a,l]=Fi(e,t);if(this.el=wt.createElement(a,i),j.currentNode=this.el.content,t===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(o=j.nextNode())!==null&&h.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(z)){const d=l[s++];if(u.push(c),d!==void 0){const v=o.getAttribute(d.toLowerCase()+"$lit$").split(z),_=/([.?@])?(.*)/.exec(d);h.push({type:1,index:r,name:_[2],strings:v,ctor:_[1]==="."?Li:_[1]==="?"?Bi:_[1]==="@"?Wi:xt})}else h.push({type:6,index:r})}for(const c of u)o.removeAttribute(c)}if(Qe.test(o.tagName)){const u=o.textContent.split(z),c=u.length-1;if(c>0){o.textContent=Z?Z.emptyScript:"";for(let d=0;d<c;d++)o.append(u[d],ht()),j.nextNode(),h.push({type:2,index:++r});o.append(u[c],ht())}}}else if(o.nodeType===8)if(o.data===Je)h.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(z,u+1))!==-1;)h.push({type:7,index:r}),u+=z.length-1}r++}}static createElement(e,t){const i=Y.createElement("template");return i.innerHTML=e,i}};function X(e,t,i=e,o){var r,s,n,h;if(t===$)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=ct(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=X(e,a._$AS(e,t.values),a,o)),t}var Ii=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Y).importNode(i,!0);j.currentNode=r;let s=j.nextNode(),n=0,h=0,a=o[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new St(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new qi(s,this,e)),this.u.push(l),a=o[++h]}n!==(a==null?void 0:a.index)&&(s=j.nextNode(),n++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},St=class{constructor(e,t,i,o){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ct(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==$&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mi(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(Y.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=wt.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const s=new Ii(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new wt(e)),t}k(e){Ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new St(this.O(ht()),this.O(ht()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},xt=class{constructor(e,t,i,o,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=X(this,e,t,0),s=!ct(e)||e!==this._$AH&&e!==$,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=X(this,n[i+h],t,h),a===$&&(a=this._$AH[h]),s||(s=!ct(a)||a!==this._$AH[h]),a===g?e=g:e!==g&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Li=class extends xt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},ji=Z?Z.emptyScript:"",Bi=class extends xt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,ji):this.element.removeAttribute(this.name)}},Wi=class extends xt{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:g)===$)return;const o=this._$AH,r=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==g&&(o===g||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},qi=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}},Ve=yt.litHtmlPolyfillSupport;Ve==null||Ve(wt,St),((Ut=yt.litHtmlVersions)!==null&&Ut!==void 0?Ut:yt.litHtmlVersions=[]).push("2.6.1");var Ki=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new St(t.insertBefore(ht(),h),h,void 0,i??{})}return n._$AI(e),n},Ht,Nt,rt=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ki(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return $}};rt.finalized=!0,rt._$litElement$=!0,(Ht=globalThis.litElementHydrateSupport)===null||Ht===void 0||Ht.call(globalThis,{LitElement:rt});var Pe=globalThis.litElementPolyfillSupport;Pe==null||Pe({LitElement:rt});((Nt=globalThis.litElementVersions)!==null&&Nt!==void 0?Nt:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Zi=Xt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Yi=Xt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Xi=Xt`
  ${Yi}
  ${Zi}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,O={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ti=e=>(...t)=>({_$litDirective$:e,values:t}),ei=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Ji=e=>e.strings===void 0,Gi={},Qi=(e,t=Gi)=>e._$AH=t,to=ti(class extends ei{constructor(e){if(super(e),e.type!==O.PROPERTY&&e.type!==O.ATTRIBUTE&&e.type!==O.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ji(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===$||t===g)return t;const i=e.element,o=e.name;if(e.type===O.PROPERTY){if(t===i[o])return $}else if(e.type===O.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return $}else if(e.type===O.ATTRIBUTE&&i.getAttribute(o)===t+"")return $;return Qi(e),t}});/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var eo=(e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,h){var a;const l=o.getPropertyOptions(e),u=typeof l.attribute=="string"?l.attribute:e;if(s===u){const c=l.converter||lt,v=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:lt.fromAttribute)(h,l.type);this[e]!==v&&(this[i]=v)}r.call(this,s,n,h)}},ii=Object.defineProperty,io=Object.defineProperties,oo=Object.getOwnPropertyDescriptor,ro=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,so=Object.prototype.hasOwnProperty,no=Object.prototype.propertyIsEnumerable,Te=(e,t,i)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,J=(e,t)=>{for(var i in t||(t={}))so.call(t,i)&&Te(e,i,t[i]);if(Re)for(var i of Re(t))no.call(t,i)&&Te(e,i,t[i]);return e},Jt=(e,t)=>io(e,ro(t)),m=(e,t,i,o)=>{for(var r=o>1?void 0:o?oo(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ii(t,i,r),r},it=new WeakMap,Oe=new WeakMap,ot=new WeakMap,ao=class{constructor(e,t){(this.host=e).addController(this),this.options=J({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,o)=>i.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,it.has(this.form)?it.get(this.form).add(this.host):it.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ot.has(this.form)||(ot.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=it.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ot.has(this.form)&&(this.form.reportValidity=ot.get(this.form),ot.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=it.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Oe.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,o=Boolean(Oe.get(i)),r=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&o),i.toggleAttribute("data-user-valid",e&&o))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}},It=new Set,lo=new MutationObserver(si),I=new Map,oi=document.documentElement.dir||"ltr",ri=document.documentElement.lang||navigator.language,st;lo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ho(...e){e.map(t=>{const i=t.$code.toLowerCase();I.has(i)?I.set(i,Object.assign(Object.assign({},I.get(i)),t)):I.set(i,t),st||(st=t)}),si()}function si(){oi=document.documentElement.dir||"ltr",ri=document.documentElement.lang||navigator.language,[...It.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var co=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){It.add(this.host)}hostDisconnected(){It.delete(this.host)}dir(){return`${this.host.dir||oi}`.toLowerCase()}lang(){return`${this.host.lang||ri}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",h=I.get(`${s}-${n}`),a=I.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else if(st&&st[e])l=st[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},uo=class extends co{},po={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ho(po);var vo=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},pt=e=>e??g;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function Gt(e,t){const i=J({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const u=h.get(l),c=this[l];u!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,c)}}),s.call(this,h)}}}var Ue=ti(class extends ei{constructor(e){var t;if(super(e),e.type!==O.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return $}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var fo=e=>t=>typeof t=="function"?((i,o)=>(customElements.define(i,o),o))(e,t):((i,o)=>{const{kind:r,elements:s}=o;return{kind:r,elements:s,finisher(n){customElements.define(i,n)}}})(e,t),mo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Jt(J({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function w(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):mo(e,t)}function ni(e){return w(Jt(J({},e),{state:!0}))}var go=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:Jt(J({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function ai(e,t){return go({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}var Mt;((Mt=window.HTMLSlotElement)===null||Mt===void 0?void 0:Mt.prototype.assignedElements)!=null;var Qt=class extends rt{emit(e,t){const i=new CustomEvent(e,J({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};m([w()],Qt.prototype,"dir",2);m([w()],Qt.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var f=class extends Qt{constructor(){super(...arguments),this.formControlController=new ao(this),this.hasSlotController=new vo(this,"help-text","label"),this.localize=new uo(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",s=t*e;if(r){const n=`${t-s}px + ${e} * ${o}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${o} / 2))`}else{const n=`${s}px - ${e} * ${o}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t;return ze`
      <div
        part="form-control"
        class=${Ue({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ue({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${pt(this.name)}
              ?disabled=${this.disabled}
              min=${pt(this.min)}
              max=${pt(this.max)}
              step=${pt(this.step)}
              .value=${to(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?ze`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};f.styles=Xi;m([ai(".range__control")],f.prototype,"input",2);m([ai(".range__tooltip")],f.prototype,"output",2);m([ni()],f.prototype,"hasFocus",2);m([ni()],f.prototype,"hasTooltip",2);m([w()],f.prototype,"title",2);m([w()],f.prototype,"name",2);m([w({type:Number})],f.prototype,"value",2);m([w()],f.prototype,"label",2);m([w({attribute:"help-text"})],f.prototype,"helpText",2);m([w({type:Boolean,reflect:!0})],f.prototype,"disabled",2);m([w({type:Number})],f.prototype,"min",2);m([w({type:Number})],f.prototype,"max",2);m([w({type:Number})],f.prototype,"step",2);m([w()],f.prototype,"tooltip",2);m([w({attribute:!1})],f.prototype,"tooltipFormatter",2);m([w({reflect:!0})],f.prototype,"form",2);m([eo()],f.prototype,"defaultValue",2);m([Gt("value",{waitUntilFirstUpdate:!0})],f.prototype,"handleValueChange",1);m([Gt("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);m([Gt("hasTooltip",{waitUntilFirstUpdate:!0})],f.prototype,"syncRange",1);f=m([fo("sl-range")],f);const E={Foldable:"foldable",Dual:"dual"};class G extends U{}p(G,"styles",Bt`
    :host {
      width: 20px;
      height: 20px;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host(:hover) {
      opacity: 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `);class _o extends G{render(){return H`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}}customElements.define("close-icon",_o);class yo extends G{render(){return H`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}}customElements.define("fullscreen-icon",yo);class wo extends G{render(){return H`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}}customElements.define("splitview-icon",wo);class bo extends G{render(){return H`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}}customElements.define("rotate-icon",bo);class $o extends G{render(){return H`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}}customElements.define("minimize-icon",$o);class li extends U{constructor(){super();p(this,"_mini_configurator_header");p(this,"_mini_configurator");p(this,"_configurator");p(this,"_configurator_header");p(this,"_device_type_select");p(this,"_orientation_select");p(this,"_seam_slider");p(this,"_seam_container");p(this,"_preview");p(this,"_preview_container");p(this,"_device");p(this,"_frame");p(this,"_device_hinge");p(this,"_currentOrientation");p(this,"_currentDevice");p(this,"_isFullscreen",!1);p(this,"_verticalViewportSegments",1);p(this,"_horizontalViewportSegments",1);p(this,"_fold_width");p(this,"_browser_shell_size");p(this,"_x",0);p(this,"_y",0);p(this,"_offset_x",0);p(this,"_offset_y",0);p(this,"_resizeHandler");p(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});p(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});p(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});p(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});p(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});p(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),h=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+h>=window.innerHeight&&(r=window.innerHeight-h),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});p(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});p(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});p(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});p(this,"_onResize",async i=>{this._handleAsusSpanning()});p(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});p(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe()){this.shadowRoot.host.style.display="none";return}if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1){console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),this.shadowRoot.host.style.display="none";return}this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const o=window.getComputedStyle(this.shadowRoot.host);parseFloat(o.width);const r=parseFloat(o.height);this._updateConfiguratorPosition(20,window.innerHeight-r-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=E.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;i===2?this._orientation_select.selectedIndex=0:this._orientation_select.selectedIndex=1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;i===2?this._orientation_select.selectedIndex=1:this._orientation_select.selectedIndex=0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=E.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=E.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=E.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=E.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=E.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=E.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),h=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),h=parseInt(o.width,10)),h>s||n>r){const l=s/h,u=r/n;a=u<l?u:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(a*100)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px");break}this._deviceType===E.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new qt;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return H`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${this.verticalViewportSegments===1&&this.horizontalViewportSegments===1?"":"toggle"}"></splitview-icon>
        <rotate-icon @click="${this._changeOrientation}"></rotate-icon>
        <fullscreen-icon @click="${this._showConfigurator}"></fullscreen-icon>
        <close-icon @click="${this._closeConfigurator}"></close-icon>
      </div>
    </div>
    <div id="configurator">
      <div class="header-background header-configurator">
        <div id="configurator-header">Foldable Configurator</div>
        <div class="icons">
          <minimize-icon @click="${this._showMiniConfigurator}"></minimize-icon>
          <fullscreen-icon @click="${this._toggleFullscreen}"></fullscreen-icon>
          <close-icon @click="${this._closeConfigurator}"></close-icon>
        </div>
      </div>
      <div id="content">
        <label for="device-select" class="category">Device</label>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="fold">Samsung Galaxy Fold</option>
          </optgroup>
        </select>
        <label for="orientation-select" class="category">Orientation</label>
        <select id="orientation-select" disabled>
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
        <div id="preview-text">Below is an emulated version on the device when spanning :</div>
        <div id="preview-container">
          <div id="preview">
            <div id="device">
              <div class="screen right"></div>
              <div class="hinge" id="device-hinge">
                <div class="hinge-element"></div>
                <div class="hole"></div>
                <div class="hinge-element"></div>
              </div>
              <div class="screen left"></div>
            </div>
            <iframe id="frame" title="Preview of the device"></iframe>
          </div>
        </div>
        <div id="seam-container">
          <sl-range @sl-change="${()=>this._seamValueUpdated()}" label="Seam width" step="5" value="30" min="0" max="200" id="seam" disabled>
          </sl-range>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`}}p(li,"styles",Bt`
    :host {
      z-index: 9999;
      position: absolute;
      font-size: 12px;
      width: 12vw;
      height: 50px;

      /* Surface Duo */
      --device-screen1-width: 450px;
      --device-screen2-width: 450px;
      --device-screen1-height: 600px;
      --device-screen2-height: 600px;
      --device-border: 7px;
      --device-bezel-vertical: 19px;
      --device-bezel-horizontal: 8px;
      --device-fold-width: 28px;
      --scale-factor: 0.44;
      /* This is the customize the thumb of the sl range */
      --sl-color-primary-500: grey;
      --sl-color-primary-600: black;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      :host {
        width: 30vw;
      }
    }

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    :host(.configurator) {
      width: 450px;
      height: 430px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #f2f2f2;
      border: 1px solid #cccccc;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator-header {
      font-size: 0.9em;
      height: 20px;
      margin-bottom: 5px;
    }

    .icon-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .toggle {
      background-color: #b8b8b8;
      opacity: 1;
      border-radius: 4px;
    }

    #main-icon:hover {
      opacity: 0.8;
    }

    #main-icon {
      width: 100%;
      height: auto;
    }

    .header-background {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
    }

    .header {
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }

    .header-configurator {
      cursor: move;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    #configurator {
      display: flex;
      flex-direction: column;
      background-color: white;
      overscroll-behavior: contain;
      width: 100%;
      height: 100%;
      visibility: hidden;
      border: 2px solid grey;
    }

    #configurator-header {
      flex-grow: 2;
      align-self: stretch;
      user-select: none;
      touch-action: none;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icons {
      flex-basis: 90px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    #content {
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: auto auto auto 1fr auto auto;
      align-items: center;
      justify-items: start;
      height: 95%;
    }

    #content > * {
      margin: 12px 12px 0px 12px;
    }

    #seam {
      --track-color-active: black;
      width: 80%;
      margin-left: 12px;
    }

    #seam-container {
      grid-column: span 2;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 32px);
      display: none;
    }

    #preview-text {
      grid-column: span 2;
      font-size : 1em;
    }

    #preview-container {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: calc(100% - 34px);
    }

    #preview {
      transform: scale(var(--scale-factor));
      transform-origin: top left;
      position: fixed;
    }

    .preview-center {
      transform-origin: top left;
      transform: scale(var(--scale-factor)) translateX(-50%);
      left: 50%;
    }

    #device {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: calc( var(--device-screen2-width) + var(--device-screen1-width) +
          var(--device-fold-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      background-color: black;
      border-radius: 10px;
      border: var(--device-border) solid #b8b8b8;
    }

    .screen {
      pointer-events: none;
      background-color: black;
      border-radius: 10px;
    }

    .left {
      width: calc(var(--device-screen1-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
    }

    .right {
      width: calc(var(--device-screen2-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen2 -height) + 2 * var(--device-bezel-vertical));
    }

    .hole {
      background-color: white;
      width: 5px;
      height: 100%;
    }

    .hinge-element {
      background-color: #b8b8b8;
      width: var(--device-fold-width);
      height: calc(var(--device-bezel-vertical) / 2);
      border-radius: 5px;
    }

    .hinge {
      width: var(--device-fold-width);
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      z-index: 6;
      background-color: black;
      border: var(--device-border) solid black;
      border-top: var(--device-border) solid #b8b8b8;
      border-bottom: var(--device-border) solid #b8b8b8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
    }

    .fold {
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      opacity: 0.4;
      z-index: 6;
      background-color: white;
    }

    .fold > * {
      display: none;
    }

    #frame {
      position: absolute;
      top: calc(var(--device-bezel-vertical) + var(--device-border));
      left: calc(var(--device-bezel-horizontal) + var(--device-border));
      width: calc(var(--device-screen1-width) + var(--device-screen2-width) +
        var(--device-fold-width));
      height: var(--device-screen1-height);
      z-index: 3;
      border: none;
      border-radius: 10px;
      transform-origin: top left;
    }

    .legend {
      font-size : 0.8em;
      height: 20px;
      text-align: center;
      grid-column: span 2;
    }
  `);customElements.define("foldable-device-configurator",li);
