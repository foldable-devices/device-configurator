import{a as t,e,j as r,h as i}from"../common/lit-html-e3979997.js";import{LitElement as n,query as a,property as s,eventOptions as o,css as d,customElement as c}from"../lit-element.js";import{classMap as l}from"../lit-html/directives/class-map.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var u=function(t,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var m,h=function(){return(h=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function p(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s}function _(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function f(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===m||e){var r=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return r=!0}})}catch(t){}m=r}return!!m&&{passive:!0}}const b=t=>(e,r)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,r)=>e.constructor._observers.set(r,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const r=this.constructor._observers.get(e);void 0!==r&&r.call(this,this[e],t)})}}e.constructor._observers.set(r,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;const y=()=>{},g={get passive(){return!1}};document.addEventListener("x",y,g),document.removeEventListener("x",y);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class v extends n{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class k extends v{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},A={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function T(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var w=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),x={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},E={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},I={PAGE_FACTOR:4},R=["mousedown","pointerdown","touchstart"],S=["mouseup","pointerup","touchend"],H={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},F="ArrowDown",M="ArrowLeft",O="ArrowRight",P="ArrowUp",L="End",D="Home",V="PageDown",j="PageUp",N=function(t){function e(r){var i=t.call(this,h({},e.defaultAdapter,r))||this;return i.savedTabIndex_=NaN,i.active_=!1,i.inTransit_=!1,i.isDiscrete_=!1,i.hasTrackMarker_=!1,i.handlingThumbTargetEvt_=!1,i.min_=0,i.max_=100,i.step_=0,i.value_=0,i.disabled_=!1,i.preventFocusState_=!1,i.thumbContainerPointerHandler_=function(){return i.handlingThumbTargetEvt_=!0},i.interactionStartHandler_=function(t){return i.handleDown_(t)},i.keydownHandler_=function(t){return i.handleKeydown_(t)},i.focusHandler_=function(){return i.handleFocus_()},i.blurHandler_=function(){return i.handleBlur_()},i.resizeHandler_=function(){return i.layout()},i}return function(t,e){function r(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isDiscrete_=this.adapter_.hasClass(x.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(x.HAS_TRACK_MARKER),R.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionStartHandler_),t.adapter_.registerThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},e.prototype.destroy=function(){var t=this;R.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionStartHandler_),t.adapter_.deregisterThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},e.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},e.prototype.getValue=function(){return this.value_},e.prototype.setValue=function(t){this.setValue_(t,!1)},e.prototype.getMax=function(){return this.max_},e.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(E.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},e.prototype.getMin=function(){return this.min_},e.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(E.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},e.prototype.getStep=function(){return this.step_},e.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},e.prototype.isDisabled=function(){return this.disabled_},e.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(x.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(E.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(E.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},e.prototype.handleDown_=function(t){var e=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var r=function(t){e.handleMove_(t)},i=H[t.type],n=function t(){e.handleUp_(),e.adapter_.deregisterBodyInteractionHandler(i,r),S.forEach((function(r){return e.adapter_.deregisterBodyInteractionHandler(r,t)}))};this.adapter_.registerBodyInteractionHandler(i,r),S.forEach((function(t){return e.adapter_.registerBodyInteractionHandler(t,n)})),this.setValueFromEvt_(t)}},e.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},e.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},e.prototype.getPageX_=function(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX},e.prototype.setValueFromEvt_=function(t){var e=this.getPageX_(t),r=this.computeValueFromPageX_(e);this.setValue_(r,!0)},e.prototype.computeValueFromPageX_=function(t){var e=this.max_,r=this.min_,i=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(i=1-i),r+i*(e-r)},e.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),r=this.getValueForKeyId_(e);isNaN(r)||(t.preventDefault(),this.adapter_.addClass(x.FOCUS),this.setValue_(r,!0),this.adapter_.notifyChange())},e.prototype.getKeyId_=function(t){return t.key===M||37===t.keyCode?M:t.key===O||39===t.keyCode?O:t.key===P||38===t.keyCode?P:t.key===F||40===t.keyCode?F:t.key===D||36===t.keyCode?D:t.key===L||35===t.keyCode?L:t.key===j||33===t.keyCode?j:t.key===V||34===t.keyCode?V:""},e.prototype.getValueForKeyId_=function(t){var e=this.max_,r=this.min_,i=this.step_||(e-r)/100;switch(this.adapter_.isRTL()&&(t===M||t===O)&&(i=-i),t){case M:case F:return this.value_-i;case O:case P:return this.value_+i;case D:return this.min_;case L:return this.max_;case j:return this.value_+i*I.PAGE_FACTOR;case V:return this.value_-i*I.PAGE_FACTOR;default:return NaN}},e.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(x.FOCUS)},e.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(x.FOCUS)},e.prototype.setValue_=function(t,e,r){if(void 0===r&&(r=!1),t!==this.value_||r){var i=this.min_,n=this.max_,a=t===i||t===n;this.step_&&!a&&(t=this.quantize_(t)),t<i?t=i:t>n&&(t=n),this.value_=t,this.adapter_.setAttribute(E.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},e.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},e.prototype.updateUIForCurrentValue_=function(){var t=this,e=this.max_,r=this.min_,i=(this.value_-r)/(e-r),n=i*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);var a=function(t,e){if(T(t)&&e in C){var r=t.document.createElement("div"),i=C[e],n=i.standard,a=i.prefixed;return n in r.style?n:a}return e}(window,"transform"),s=function(t,e){if(T(t)&&e in A){var r=t.document.createElement("div"),i=A[e],n=i.standard,a=i.prefixed;return i.cssProperty in r.style?n:a}return e}(window,"transitionend");if(this.inTransit_){this.adapter_.registerThumbContainerInteractionHandler(s,(function e(){t.setInTransit_(!1),t.adapter_.deregisterThumbContainerInteractionHandler(s,e)}))}requestAnimationFrame((function(){t.adapter_.setThumbContainerStyleProperty(a,"translateX("+n+"px) translateX(-50%)"),t.adapter_.setTrackStyleProperty(a,"scaleX("+i+")")}))},e.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(x.ACTIVE,this.active_)},e.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(x.IN_TRANSIT,this.inTransit_)},e.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},e}(w);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=new WeakMap,B=t(t=>i=>{if(!(i instanceof e)||i instanceof r||"style"!==i.committer.name||i.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=i,{style:a}=n.element;U.has(i)||(a.cssText=n.strings.join(" "));const s=U.get(i);for(const e in s)e in t||(-1===e.indexOf("-")?a[e]=null:a.removeProperty(e));for(const e in t)-1===e.indexOf("-")?a[e]=t[e]:a.setProperty(e,t[e]);U.set(i,t)});function z(){const t=_(['\n      <div class="mdc-slider ','"\n           tabindex="0" role="slider"\n           aria-valuemin="','" aria-valuemax="','"\n           aria-valuenow="','" aria-disabled="','"\n           data-step="','"\n           @mousedown=',"\n           @touchstart=",'>\n        <div class="mdc-slider__track-container">\n          <div\n              class="mdc-slider__track"\n              style="','">\n          </div>\n          ','\n        </div>\n        <div\n            class="mdc-slider__thumb-container"\n            style="','">\n          \x3c!-- TODO: use cache() directive --\x3e\n          ','\n          <svg class="mdc-slider__thumb" width="21" height="21">\n            <circle cx="10.5" cy="10.5" r="7.875"></circle>\n          </svg>\n        <div class="mdc-slider__focus-ring"></div>\n      </div>\n    </div>']);return z=function(){return t},t}function K(){const t=_(['\n      <div class="mdc-slider__pin">\n        <span class="mdc-slider__pin-value-marker">',"</span>\n      </div>"]);return K=function(){return t},t}function X(){const t=_(['\n        <div\n            class="mdc-slider__track-marker-container"\n            style="','">\n        </div>']);return X=function(){return t},t}class q extends k{constructor(){super(...arguments),this.mdcFoundationClass=N,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const t=0!==this.step,e={"mdc-slider--discrete":t,"mdc-slider--display-markers":this.markers&&t};let r="";t&&this.markers&&(r=i(X(),B(this.trackMarkerContainerStyles)));let n="";return this.pin&&(n=i(K(),this.pinMarkerText)),i(z(),l(e),this.min,this.max,this.value,this.disabled,this.step,this.layout,this.layout,B(this.trackStyles),r,B(this.thumbContainerStyles),n)}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(t=this.mdcRoot,{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)})),{getAttribute:t=>this.mdcRoot.getAttribute(t),setAttribute:(t,e)=>this.mdcRoot.setAttribute(t,e),removeAttribute:t=>this.mdcRoot.removeAttribute(t),computeBoundingRect:()=>{const t=this.mdcRoot.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left+window.pageXOffset,right:t.right,top:t.top,width:t.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(t,e)=>{const r="touchstart"===t?f():void 0;this.mdcRoot.addEventListener(t,e,r)},deregisterInteractionHandler:(t,e)=>this.mdcRoot.removeEventListener(t,e),registerThumbContainerInteractionHandler:(t,e)=>{const r="touchstart"===t?f():void 0;this.thumbContainer.addEventListener(t,e,r)},deregisterThumbContainerInteractionHandler:(t,e)=>this.thumbContainer.removeEventListener(t,e),registerBodyInteractionHandler:(t,e)=>document.body.addEventListener(t,e),deregisterBodyInteractionHandler:(t,e)=>document.body.removeEventListener(t,e),registerResizeHandler:t=>window.addEventListener("resize",t,f()),deregisterResizeHandler:t=>window.removeEventListener("resize",t),notifyInput:()=>{const t=this.mdcFoundation.getValue();t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainerStyles[t]=e,this.requestUpdate()},setTrackStyleProperty:(t,e)=>{this.trackStyles[t]=e,this.requestUpdate()},setMarkerValue:t=>this.pinMarkerText=t.toLocaleString(),setTrackMarkers:(t,e,r)=>{const i=t.toLocaleString(),n=e.toLocaleString(),a=r.toLocaleString(),s="((".concat(n," - ").concat(a,") / ").concat(i,")"),o="linear-gradient(to right, currentColor ".concat("2px",", transparent 0)"),d="0 center / calc((100% - ".concat("2px",") / ").concat(s,") 100% repeat-x"),c="".concat(o," ").concat(d);this.trackMarkerContainerStyles.background=c,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction});var t}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}function G(){const t=_(['@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(1,135,134,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154,154,154,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}']);return G=function(){return t},t}p([a(".mdc-slider")],q.prototype,"mdcRoot",void 0),p([a(".mdc-slider")],q.prototype,"formElement",void 0),p([a(".mdc-slider__thumb-container")],q.prototype,"thumbContainer",void 0),p([a(".mdc-slider__pin-value-marker")],q.prototype,"pinMarker",void 0),p([s({type:Number}),b((function(t){this.mdcFoundation.setValue(t)}))],q.prototype,"value",void 0),p([s({type:Number}),b((function(t){this.mdcFoundation.setMin(t)}))],q.prototype,"min",void 0),p([s({type:Number}),b((function(t){this.mdcFoundation.setMax(t)}))],q.prototype,"max",void 0),p([s({type:Number}),b((function(t,e){0!==e!==(0!==t)&&this.resetFoundation(),this.mdcFoundation.setStep(t)}))],q.prototype,"step",void 0),p([s({type:Boolean,reflect:!0}),b((function(t){this.mdcFoundation.setDisabled(t)}))],q.prototype,"disabled",void 0),p([s({type:Boolean,reflect:!0})],q.prototype,"pin",void 0),p([s({type:Boolean,reflect:!0}),b((function(){this.mdcFoundation.setupTrackMarker()}))],q.prototype,"markers",void 0),p([s({type:String})],q.prototype,"pinMarkerText",void 0),p([s({type:Object})],q.prototype,"trackMarkerContainerStyles",void 0),p([s({type:Object})],q.prototype,"thumbContainerStyles",void 0),p([s({type:Object})],q.prototype,"trackStyles",void 0),p([o({capture:!0,passive:!0})],q.prototype,"layout",null);const W=d(G());let J=class extends q{};J.styles=W,J=p([c("mwc-slider")],J);export{J as Slider};
//# sourceMappingURL=mwc-slider.js.map
