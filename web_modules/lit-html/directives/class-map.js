import{a as t,e,j as s}from"../../common/lit-html-9957b87e.js";
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
 */const n=new WeakMap,o=t(t=>o=>{if(!(o instanceof e)||o instanceof s||"class"!==o.committer.name||o.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:a}=o,{element:i}=a;n.has(o)||(i.className=a.strings.join(" "));const{classList:r}=i,c=n.get(o);for(const e in c)e in t||r.remove(e);for(const e in t){const s=t[e];if(!c||s!==c[e]){r[s?"add":"remove"](e)}}n.set(o,t)});export{o as classMap};
//# sourceMappingURL=class-map.js.map
