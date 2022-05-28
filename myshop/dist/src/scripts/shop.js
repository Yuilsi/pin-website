(()=>{var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,h=s>>2,u=(3&s)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),i.push(n[h],n[u],n[l],n[d])}return i.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){return function(e){const i=t(e);return n.encodeByteArray(i,!0)}(e).replace(/\./g,"")},s=function(e){try{return n.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function a(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function c(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function h(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function u(){const e=o();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function l(){return"object"==typeof indexedDB}class d extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(p,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new d(i,o,n)}}const p=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(m(n)&&m(r)){if(!g(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function m(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function v(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function w(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=T),void 0===i.error&&(i.error=T),void 0===i.complete&&(i.complete=T);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function T(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class I{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new S(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new k(this._db.createObjectStore(e,t))}close(){this._db.close()}}class S{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new k(this._transaction.objectStore(e))}}class k{constructor(e){this._store=e}index(e){return new C(this._store.index(e))}createIndex(e,t,n){return new C(this._store.createIndex(e,t,n))}get(e){return E(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return E(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return E(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return E(this._store.clear(),"Error clearing IndexedDB object store")}}class C{constructor(e){this._index=e}get(e){return E(this._index.get(e),"Error reading from IndexedDB")}}class A{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:N})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===N?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:N:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new R(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=[];var L;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(L||(L={}));const P={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},M=L.INFO,x={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},U=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=x[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class F{constructor(e){this.name=e,this._logLevel=M,this._logHandler=U,this._userLogHandler=null,O.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?P[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const B="@firebase/app",j="0.7.21",q=new F("@firebase/app"),H="[DEFAULT]",K={[B]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},$=new Map,z=new Map;function G(e,t){try{e.container.addComponent(t)}catch(n){q.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(z.has(t))return q.debug(`There were multiple attempts to register component ${t}.`),!1;z.set(t,e);for(const t of $.values())G(t,e);return!0}function X(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new A("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="9.6.11";function Z(e="[DEFAULT]"){const t=$.get(e);if(!t)throw Q.create("no-app",{appName:e});return t}function ee(e,t,n){var i;let s=null!==(i=K[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void q.warn(e.join(" "))}W(new A(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="firebase-heartbeat-store";let ne=null;function ie(){var e,t,n;return ne||(ne=(e="firebase-heartbeat-database",t=1,n=(e,t)=>{0===t&&e.createObjectStore(te)},new Promise(((i,s)=>{try{const r=indexedDB.open(e,t);r.onsuccess=e=>{i(new I(e.target.result))},r.onerror=e=>{var t;s(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},r.onupgradeneeded=e=>{n(new I(r.result),e.oldVersion,e.newVersion,new S(r.transaction))}}catch(e){s(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw Q.create("storage-open",{originalErrorMessage:e.message})}))),ne}async function se(e,t){try{const n=(await ie()).transaction(te,"readwrite"),i=n.objectStore(te);return await i.put(t,re(e)),n.complete}catch(e){throw Q.create("storage-set",{originalErrorMessage:e.message})}}function re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ce(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),he(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),he(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ae(){return(new Date).toISOString().substring(0,10)}class ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!l()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ie()).transaction(te).objectStore(te).get(re(e))}catch(e){throw Q.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function he(e){return i(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;ue="",W(new A("platform-logger",(e=>new V(e)),"PRIVATE")),W(new A("heartbeat",(e=>new oe(e)),"PRIVATE")),ee(B,j,ue),ee(B,j,"esm2017"),ee("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ee("firebase","9.6.11","app");function le(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function de(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fe=de,pe=new f("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ge=new F("@firebase/auth");function me(e,...t){ge.logLevel<=L.ERROR&&ge.error(`Auth (9.6.11): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,...t){throw _e(e,...t)}function ve(e,...t){return _e(e,...t)}function we(e,t,n){const i=Object.assign(Object.assign({},fe()),{[t]:n});return new f("auth","Firebase",i).create(t,{appName:e.name})}function _e(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return pe.create(e,...t)}function Te(e,t,...n){if(!e)throw _e(t,...n)}function be(e){const t="INTERNAL ASSERTION FAILED: "+e;throw me(t),new Error(t)}function Ee(e,t){e||be(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Map;function Se(e){Ee(e instanceof Function,"Expected a class definition");let t=Ie.get(e);return t?(Ee(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ie.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ce(){return"http:"===Ae()||"https:"===Ae()}function Ae(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=a()||h()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ce()||c()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t){Ee(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Le=new Ne(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Me(e,t,n,i,s={}){return xe(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=y(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),De.fetch()(Fe(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function xe(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Oe),t);try{const t=new Ve(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Be(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Be(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Be(e,"email-already-in-use",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw we(e,a,o);ye(e,a)}}catch(t){if(t instanceof d)throw t;ye(e,"network-request-failed")}}async function Ue(e,t,n,i,s={}){const r=await Me(e,t,n,i,s);return"mfaPendingCredential"in r&&ye(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Fe(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Re(e.config,s):`${e.config.apiScheme}://${s}`}class Ve{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ve(this.auth,"network-request-failed"))),Le.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Be(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ve(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){return 1e3*Number(e)}function He(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return me("JWT malformed, contained fewer than 3 sections"),null;try{const e=s(n);return e?JSON.parse(e):(me("Failed to decode base64 JWT payload"),null)}catch(e){return me("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ke(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof d&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class $e{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Ke(e,async function(e,t){return Me(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Te(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=le(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,h=o,[...c.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var c,h;const u=e.isAnonymous,l=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&l,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ze(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(void 0!==e.idToken,"internal-error"),Te(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=He(e);return Te(t,"internal-error"),Te(void 0!==t.exp,"internal-error"),Te(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Te(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await xe(e,{},(async()=>{const n=y({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=Fe(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",De.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new We;return n&&(Te("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(Te("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(Te("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new We,this.toJSON())}_performRefresh(){return be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){Te("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Qe{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=le(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $e(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ze(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ke(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=b(e),i=await n.getIdToken(t),s=He(i);Te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:je(qe(s.auth_time)),issuedAtTime:je(qe(s.iat)),expirationTime:je(qe(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=b(e);await Ge(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ge(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ke(this,async function(e,t){return Me(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,h;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:T,stsTokenManager:b}=t;Te(v&&b,e,"internal-error");const E=We.fromJSON(this.name,b);Te("string"==typeof v,e,"internal-error"),Xe(u,e.name),Xe(l,e.name),Te("boolean"==typeof w,e,"internal-error"),Te("boolean"==typeof _,e,"internal-error"),Xe(d,e.name),Xe(f,e.name),Xe(p,e.name),Xe(g,e.name),Xe(m,e.name),Xe(y,e.name);const I=new Qe({uid:v,auth:e,email:l,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(I.providerData=T.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new We;i.updateFromServerResponse(t);const s=new Qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ge(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ye.type="NONE";const Je=Ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t,n){return`firebase:${e}:${t}:${n}`}class et{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ze(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ze("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new et(Se(Je),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Se(Je);const r=Ze(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=Qe._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new et(s,e,n)):new et(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(at(t))return"Blackberry";if(ct(t))return"Webos";if(it(t))return"Safari";if((t.includes("chrome/")||st(t))&&!t.includes("edge/"))return"Chrome";if(ot(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function nt(e=o()){return/firefox\//i.test(e)}function it(e=o()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function st(e=o()){return/crios\//i.test(e)}function rt(e=o()){return/iemobile/i.test(e)}function ot(e=o()){return/android/i.test(e)}function at(e=o()){return/blackberry/i.test(e)}function ct(e=o()){return/webos/i.test(e)}function ht(e=o()){return/iphone|ipad|ipod/i.test(e)}function ut(e=o()){return ht(e)||ot(e)||ct(e)||at(e)||/windows phone/i.test(e)||rt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t=[]){let n;switch(e){case"Browser":n=tt(o());break;case"Worker":n=`${tt(o())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.11/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pt(this),this.idTokenSubscription=new pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pe,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Se(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(e);i&&i!==s||!(null==r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ge(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?b(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Se(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new f("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Se(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Se(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Te(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ft(e){return b(e)}class pt{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new _(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t){return Me(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends gt{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new yt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new yt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ue(e,"POST","/v1/accounts:signInWithPassword",Pe(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ue(e,"POST","/v1/accounts:signInWithEmailLink",Pe(e,t))}(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return mt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ue(e,"POST","/v1/accounts:signInWithEmailLink",Pe(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(e,t){return Ue(e,"POST","/v1/accounts:signInWithIdp",Pe(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends gt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=le(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new wt(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return vt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=y(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends gt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ue(e,"POST","/v1/accounts:signInWithPhoneNumber",Pe(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ue(e,"POST","/v1/accounts:signInWithPhoneNumber",Pe(e,t));if(n.temporaryProof)throw Be(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ue(e,"POST","/v1/accounts:signInWithPhoneNumber",Pe(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),_t)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Tt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){var t,n,i,s,r,o;const a=v(w(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Te(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=v(w(e)).link,n=t?v(w(t)).deep_link_id:null,i=v(w(e)).deep_link_id;return(i?v(w(i)).link:null)||i||n||t||e}(e);try{return new bt(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(){this.providerId=Et.PROVIDER_ID}static credential(e,t){return yt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bt.parseLink(t);return Te(n,"argument-error"),yt._fromEmailAndCode(e,n.code,n.tenantId)}}Et.PROVIDER_ID="password",Et.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends It{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(e){return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(e){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends St{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch(e){return null}}}At.GITHUB_SIGN_IN_METHOD="github.com",At.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends St{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Nt.credential(t,n)}catch(e){return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com",Nt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Qe._fromIdTokenResponse(e,n,i),r=Dt(n);return new Rt({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Dt(n);return new Rt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Dt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends d{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ot(e,t,n,i)}}function Lt(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const i=await Ke(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Ke(e,Lt(i,s,t,e),n);Te(r.idToken,i,"internal-error");const o=He(r.idToken);Te(o,i,"internal-error");const{sub:a}=o;return Te(e.uid===a,i,"user-mismatch"),Rt._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ye(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const i="signIn",s=await Lt(e,i,t),r=await Rt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}new WeakMap;const Ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ut,"1"),this.storage.removeItem(Ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ft{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=o();return it(e)||ht(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ut(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);u()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vt.type="LOCAL";const Bt=Vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ft{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jt.type="SESSION";const qt=jt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ht(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.receivers=[];class $t{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Kt("",20);i.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(h),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){return void 0!==zt().WorkerGlobalScope&&"function"==typeof zt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wt="firebaseLocalStorageDb",Xt="firebaseLocalStorage",Qt="fbase_key";class Yt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jt(e,t){return e.transaction([Xt],t?"readwrite":"readonly").objectStore(Xt)}function Zt(){const e=indexedDB.open(Wt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Xt,{keyPath:Qt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Xt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Wt);return new Yt(e).toPromise()}(),t(await Zt()))}))}))}async function en(e,t,n){const i=Jt(e,!0).put({[Qt]:t,value:n});return new Yt(i).toPromise()}function tn(e,t){const n=Jt(e,!0).delete(t);return new Yt(n).toPromise()}class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(Gt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new $t(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zt();return await en(e,Ut,"1"),await tn(e,Ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>en(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jt(e,!1).get(t),i=await new Yt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jt(e,!1).getAll();return new Yt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const sn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ve("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new Ne(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="recaptcha";async function cn(e,t,n){var i;const s=await n.verify();try{let r;if(Te("string"==typeof s,e,"argument-error"),Te(n.type===an,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Te("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Me(e,"POST","/v2/accounts/mfaEnrollment:start",Pe(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{Te("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;Te(n,e,"missing-multi-factor-info");const o=await function(e,t){return Me(e,"POST","/v2/accounts/mfaSignIn:start",Pe(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Me(e,"POST","/v1/accounts:sendVerificationCode",Pe(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e){this.providerId=hn.PROVIDER_ID,this.auth=ft(e)}verifyPhoneNumber(e,t){return cn(this.auth,e,b(t))}static credential(e,t){return Tt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hn.credentialFromTaggedObject(t)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Tt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return t?Se(t):(Te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.PROVIDER_ID="phone",hn.PHONE_SIGN_IN_METHOD="phone";class ln extends gt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dn(e){return xt(e.auth,new ln(e),e.bypassAuthState)}function fn(e){const{auth:t,user:n}=e;return Te(n,t,"internal-error"),Mt(n,new ln(e),e.bypassAuthState)}async function pn(e){const{auth:t,user:n}=e;return Te(n,t,"internal-error"),Pt(n,new ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:ye(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Ne(2e3,1e4);class yn extends gn{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Ee(1===this.filter.length,"Popup operations only handle one event");const e=Kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ve(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ve(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mn.get())};e()}}yn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=new Map;class wn extends gn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Tn(t),i=_n(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function _n(e){return Se(e._redirectPersistence)}function Tn(e){return Ze("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,n=!1){const i=ft(e),s=un(i,t),r=new wn(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class En{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Sn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cn=/^https?/;async function An(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Me(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Nn(e))return}catch(e){}ye(e,"unauthorized-domain")}function Nn(e){const t=ke(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Cn.test(n))return!1;if(kn.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ne(3e4,6e4);function Dn(){const e=zt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let On=null;function Ln(e){return On=On||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dn(),n(ve(e,"network-request-failed"))},timeout:Rn.get()})}if(null===(s=null===(i=zt().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=zt().gapi)||void 0===r?void 0:r.load)){const t=on("iframefcb");return zt()[t]=()=>{gapi.load?o():n(ve(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw On=null,e}))}(e),On}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Ne(5e3,15e3),Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Un(e){const t=e.config;Te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Re(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:J},s=xn.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${y(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Vn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Bn(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const h=Object.assign(Object.assign({},Fn),{width:i.toString(),height:s.toString(),top:r,left:a}),u=o().toLowerCase();n&&(c=st(u)?"_blank":n),nt(u)&&(t=t||"http://localhost",h.scrollbars="yes");const l=Object.entries(h).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=o()){var t;return ht(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Vn(null);const d=window.open(t||"",c,l);Te(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Vn(d)}const jn="emulator/auth/handler";function qn(e,t,n,i,s,r){Te(e.config.authDomain,e,"auth-domain-config-required"),Te(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:J,eventId:s};if(t instanceof It){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof St){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Re(e,jn):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${y(a).slice(1)}`}const Hn="webStorageSupport";const Kn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qt,this._completeRedirectFn=bn}async _openPopup(e,t,n,i){var s;Ee(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Bn(e,qn(e,t,n,ke(),i),Kt())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=qn(e,t,n,ke(),i),zt().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ee(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ln(e),n=zt().gapi;return Te(n,e,"internal-error"),t.open({where:document.body,url:Un(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=ve(e,"network-request-failed"),r=zt().setTimeout((()=>{i(s)}),Pn.get());function o(){zt().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new En(e);return t.register("authEvent",(t=>{Te(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hn,{type:Hn},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),ye(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=An(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ut()||it()||ht()}};var $n,zn="@firebase/auth",Gn="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n="Browser",W(new A("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{Te(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),Te(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:$n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lt($n)},o=new dt(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Se);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),W(new A("auth-internal",(e=>{const t=ft(e.getProvider("auth").getImmediate());return new Wn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ee(zn,Gn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($n)),ee(zn,Gn,"esm2017");var Xn,Qn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Yn={},Jn=Jn||{},Zn=Qn||self;function ei(){}function ti(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function ni(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ii="closure_uid_"+(1e9*Math.random()>>>0),si=0;function ri(e,t,n){return e.call.apply(e.bind,arguments)}function oi(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ai(e,t,n){return(ai=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ri:oi).apply(null,arguments)}function ci(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function hi(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function ui(){this.s=this.s,this.o=this.o}var li={};ui.prototype.s=!1,ui.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,ii)&&e[ii]||(e[ii]=++si)}(this);delete li[e]}},ui.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const di=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},fi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,s="string"==typeof e?e.split(""):e;for(let r=0;r<i;r++)r in s&&t.call(n,s[r],r,e)};function pi(e){return Array.prototype.concat.apply([],arguments)}function gi(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function mi(e){return/^[\s\xa0]*$/.test(e)}var yi,vi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function wi(e,t){return-1!=e.indexOf(t)}function _i(e,t){return e<t?-1:e>t?1:0}e:{var Ti=Zn.navigator;if(Ti){var bi=Ti.userAgent;if(bi){yi=bi;break e}}yi=""}function Ei(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Ii(e){const t={};for(const n in e)t[n]=e[n];return t}var Si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ki(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Si.length;t++)n=Si[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ci(e){return Ci[" "](e),e}Ci[" "]=ei;var Ai,Ni,Ri=wi(yi,"Opera"),Di=wi(yi,"Trident")||wi(yi,"MSIE"),Oi=wi(yi,"Edge"),Li=Oi||Di,Pi=wi(yi,"Gecko")&&!(wi(yi.toLowerCase(),"webkit")&&!wi(yi,"Edge"))&&!(wi(yi,"Trident")||wi(yi,"MSIE"))&&!wi(yi,"Edge"),Mi=wi(yi.toLowerCase(),"webkit")&&!wi(yi,"Edge");function xi(){var e=Zn.document;return e?e.documentMode:void 0}e:{var Ui="",Fi=(Ni=yi,Pi?/rv:([^\);]+)(\)|;)/.exec(Ni):Oi?/Edge\/([\d\.]+)/.exec(Ni):Di?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ni):Mi?/WebKit\/(\S+)/.exec(Ni):Ri?/(?:Version)[ \/]?(\S+)/.exec(Ni):void 0);if(Fi&&(Ui=Fi?Fi[1]:""),Di){var Vi=xi();if(null!=Vi&&Vi>parseFloat(Ui)){Ai=String(Vi);break e}}Ai=Ui}var Bi,ji={};function qi(){return function(e){var t=ji;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=vi(String(Ai)).split("."),n=vi("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=_i(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||_i(0==s[2].length,0==r[2].length)||_i(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(Zn.document&&Di){var Hi=xi();Bi=Hi||(parseInt(Ai,10)||void 0)}else Bi=void 0;var Ki=Bi,$i=function(){if(!Zn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Zn.addEventListener("test",ei,t),Zn.removeEventListener("test",ei,t)}catch(e){}return e}();function zi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Gi(e,t){if(zi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pi){e:{try{Ci(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Wi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Gi.Z.h.call(this)}}zi.prototype.h=function(){this.defaultPrevented=!0},hi(Gi,zi);var Wi={2:"touch",3:"pen",4:"mouse"};Gi.prototype.h=function(){Gi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xi="closure_listenable_"+(1e6*Math.random()|0),Qi=0;function Yi(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=s,this.key=++Qi,this.ca=this.fa=!1}function Ji(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Zi(e){this.src=e,this.g={},this.h=0}function es(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=di(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ji(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ts(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==i)return s}return-1}Zi.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=ts(e,t,i,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Yi(t,this.src,r,!!i,s)).fa=n,e.push(t)),t};var ns="closure_lm_"+(1e6*Math.random()|0),is={};function ss(e,t,n,i,s){if(i&&i.once)return os(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ss(e,t[r],n,i,s);return null}return n=fs(n),e&&e[Xi]?e.N(t,n,ni(i)?!!i.capture:!!i,s):rs(e,t,n,!1,i,s)}function rs(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ni(s)?!!s.capture:!!s,a=ls(e);if(a||(e[ns]=a=new Zi(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=us;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)$i||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(hs(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function os(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)os(e,t[r],n,i,s);return null}return n=fs(n),e&&e[Xi]?e.O(t,n,ni(i)?!!i.capture:!!i,s):rs(e,t,n,!0,i,s)}function as(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)as(e,t[r],n,i,s);else i=ni(i)?!!i.capture:!!i,n=fs(n),e&&e[Xi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ts(r=e.g[t],n,i,s))&&(Ji(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ts(t,n,i,s)),(n=-1<e?t[e]:null)&&cs(n))}function cs(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Xi])es(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(hs(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ls(t))?(es(n,e),0==n.h&&(n.src=null,t[ns]=null)):Ji(e)}}}function hs(e){return e in is?is[e]:is[e]="on"+e}function us(e,t){if(e.ca)e=!0;else{t=new Gi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&cs(e),e=n.call(i,t)}return e}function ls(e){return(e=e[ns])instanceof Zi?e:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function fs(e){return"function"==typeof e?e:(e[ds]||(e[ds]=function(t){return e.handleEvent(t)}),e[ds])}function ps(){ui.call(this),this.i=new Zi(this),this.P=this,this.I=null}function gs(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new zi(t,e);else if(t instanceof zi)t.target=t.target||e;else{var s=t;ki(t=new zi(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=ms(o,i,!0,t)&&s}if(s=ms(o=t.g=e,i,!0,t)&&s,s=ms(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=ms(o=t.g=n[r],i,!1,t)&&s}function ms(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&es(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}hi(ps,ui),ps.prototype[Xi]=!0,ps.prototype.removeEventListener=function(e,t,n,i){as(this,e,t,n,i)},ps.prototype.M=function(){if(ps.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ji(n[i]);delete t.g[e],t.h--}}this.I=null},ps.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ps.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var ys=Zn.JSON.stringify;function vs(){var e=Ss;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ws,_s=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ts),(e=>e.reset()));class Ts{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function bs(e){Zn.setTimeout((()=>{throw e}),0)}function Es(e,t){ws||function(){var e=Zn.Promise.resolve(void 0);ws=function(){e.then(ks)}}(),Is||(ws(),Is=!0),Ss.add(e,t)}var Is=!1,Ss=new class{constructor(){this.h=this.g=null}add(e,t){const n=_s.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function ks(){for(var e;e=vs();){try{e.h.call(e.g)}catch(e){bs(e)}var t=_s;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Is=!1}function Cs(e,t){ps.call(this),this.h=e||1,this.g=t||Zn,this.j=ai(this.kb,this),this.l=Date.now()}function As(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ns(e,t,n){if("function"==typeof e)n&&(e=ai(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ai(e.handleEvent,e)}return 2147483647<Number(t)?-1:Zn.setTimeout(e,t||0)}function Rs(e){e.g=Ns((()=>{e.g=null,e.i&&(e.i=!1,Rs(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}hi(Cs,ps),(Xn=Cs.prototype).da=!1,Xn.S=null,Xn.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),gs(this,"tick"),this.da&&(As(this),this.start()))}},Xn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Xn.M=function(){Cs.Z.M.call(this),As(this),delete this.g};class Ds extends ui{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Rs(this)}M(){super.M(),this.g&&(Zn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(e){ui.call(this),this.h=e,this.g={}}hi(Os,ui);var Ls=[];function Ps(e,t,n,i){Array.isArray(n)||(n&&(Ls[0]=n.toString()),n=Ls);for(var s=0;s<n.length;s++){var r=ss(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ms(e){Ei(e.g,(function(e,t){this.g.hasOwnProperty(t)&&cs(e)}),e),e.g={}}function xs(){this.g=!0}function Us(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ys(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Os.prototype.M=function(){Os.Z.M.call(this),Ms(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},xs.prototype.Aa=function(){this.g=!1},xs.prototype.info=function(){};var Fs={},Vs=null;function Bs(){return Vs=Vs||new ps}function js(e){zi.call(this,Fs.Ma,e)}function qs(e){const t=Bs();gs(t,new js(t,e))}function Hs(e,t){zi.call(this,Fs.STAT_EVENT,e),this.stat=t}function Ks(e){const t=Bs();gs(t,new Hs(t,e))}function $s(e,t){zi.call(this,Fs.Na,e),this.size=t}function zs(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Zn.setTimeout((function(){e()}),t)}Fs.Ma="serverreachability",hi(js,zi),Fs.STAT_EVENT="statevent",hi(Hs,zi),Fs.Na="timingevent",hi($s,zi);var Gs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ws={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xs(){}function Qs(e){return e.h||(e.h=e.i())}function Ys(){}Xs.prototype.h=null;var Js,Zs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function er(){zi.call(this,"d")}function tr(){zi.call(this,"c")}function nr(){}function ir(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Os(this),this.P=rr,e=Li?125:void 0,this.W=new Cs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new sr}function sr(){this.i=null,this.g="",this.h=!1}hi(er,zi),hi(tr,zi),hi(nr,Xs),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},Js=new nr;var rr=45e3,or={},ar={};function cr(e,t,n){e.K=1,e.v=Dr(Sr(t)),e.s=n,e.U=!0,hr(e,null)}function hr(e,t){e.F=Date.now(),fr(e),e.A=Sr(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Kr(n.h,"t",i),e.C=0,n=e.l.H,e.h=new sr,e.g=$o(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ds(ai(e.Ia,e,e.g),e.O)),Ps(e.V,e.g,"readystatechange",e.gb),t=e.H?Ii(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),qs(1),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ur(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function lr(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=dr(e,n),i==ar){4==t&&(e.o=4,Ks(14),s=!1),Us(e.j,e.m,null,"[Incomplete Response]");break}if(i==or){e.o=4,Ks(15),Us(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Us(e.j,e.m,i,null),vr(e,i)}ur(e)&&i!=ar&&i!=or&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ks(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uo(t),t.L=!0,Ks(11))):(Us(e.j,e.m,n,"[Invalid Chunked Response]"),yr(e),mr(e))}function dr(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?ar:(n=Number(t.substring(n,i)),isNaN(n)?or:(i+=1)+n>t.length?ar:(t=t.substr(i,n),e.C=i+n,t))}function fr(e){e.Y=Date.now()+e.P,pr(e,e.P)}function pr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=zs(ai(e.eb,e),t)}function gr(e){e.B&&(Zn.clearTimeout(e.B),e.B=null)}function mr(e){0==e.l.G||e.I||Bo(e.l,e)}function yr(e){gr(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,As(e.W),Ms(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vr(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Qr(n.i,e)))if(n.I=e.N,!e.J&&Qr(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Vo(n),Ao(n)}xo(n),Ks(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=zs(ai(n.ab,n),6e3));if(1>=Xr(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else qo(n,11)}else if((e.J||n.g==e)&&Vo(n),!mi(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const t=h[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;!r.g&&(wi(e,"spdy")||wi(e,"quic")||wi(e,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Yr(r,r.h),r.h=null))}if(i.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Rr(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=Ko(i,i.H?i.la:null,i.W),o.J){Jr(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(gr(a),fr(a)),i.g=o}else Mo(i);0<n.l.length&&Do(n)}else"stop"!=h[0]&&"close"!=h[0]||qo(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?qo(n,7):Co(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}qs(4)}catch(e){}}function wr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ti(e)||"string"==typeof e)fi(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ti(e)||"string"==typeof e){n=[];for(var i=e.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,e)n[i++]=s;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ti(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length;for(var r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}}function _r(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof _r)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Tr(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];br(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)br(s,i=e.g[t])||(e.g[n++]=i,s[i]=1),t++;e.g.length=n}}function br(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Xn=ir.prototype).setTimeout=function(e){this.P=e},Xn.gb=function(e){e=e.target;const t=this.L;t&&3==bo(e)?t.l():this.Ia(e)},Xn.Ia=function(e){try{if(e==this.g)e:{const u=bo(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||Li||this.g&&(this.h.h||this.g.ga()||Eo(this.g)))){this.I||4!=u||7==t||qs(8==t||0>=l?3:2),gr(this);var n=this.g.ba();this.N=n;t:if(ur(this)){var i=Eo(this.g);e="";var s=i.length,r=4==bo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){yr(this),mr(this);var o="";break t}this.h.i=new Zn.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mi(a)){var h=a;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,Ks(12),yr(this),mr(this);break e}Us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vr(this,n)}this.U?(lr(this,u,o),Li&&this.i&&3==u&&(Ps(this.V,this.W,"tick",this.fb),this.W.start())):(Us(this.j,this.m,o,null),vr(this,o)),4==u&&yr(this),this.i&&!this.I&&(4==u?Bo(this.l,this):(this.i=!1,fr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ks(12)):(this.o=0,Ks(13)),yr(this),mr(this)}}}catch(e){}},Xn.fb=function(){if(this.g){var e=bo(this.g),t=this.g.ga();this.C<t.length&&(gr(this),lr(this,e,t),this.i&&4!=e&&fr(this))}},Xn.cancel=function(){this.I=!0,yr(this)},Xn.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(qs(3),Ks(17)),yr(this),this.o=2,mr(this)):pr(this,this.Y-e)},(Xn=_r.prototype).R=function(){Tr(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Xn.T=function(){return Tr(this),this.g.concat()},Xn.get=function(e,t){return br(this.h,e)?this.h[e]:t},Xn.set=function(e,t){br(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Xn.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);e.call(t,r,s,this)}};var Er=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ir(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ir){this.g=void 0!==t?t:e.g,kr(this,e.j),this.s=e.s,Cr(this,e.i),Ar(this,e.m),this.l=e.l,t=e.h;var n=new Br;n.i=t.i,t.g&&(n.g=new _r(t.g),n.h=t.h),Nr(this,n),this.o=e.o}else e&&(n=String(e).match(Er))?(this.g=!!t,kr(this,n[1]||"",!0),this.s=Or(n[2]||""),Cr(this,n[3]||"",!0),Ar(this,n[4]),this.l=Or(n[5]||"",!0),Nr(this,n[6]||"",!0),this.o=Or(n[7]||"")):(this.g=!!t,this.h=new Br(null,this.g))}function Sr(e){return new Ir(e)}function kr(e,t,n){e.j=n?Or(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Cr(e,t,n){e.i=n?Or(t,!0):t}function Ar(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nr(e,t,n){t instanceof Br?(e.h=t,function(e,t){t&&!e.j&&(jr(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(qr(this,t),Kr(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Lr(t,Fr)),e.h=new Br(t,e.g))}function Rr(e,t,n){e.h.set(t,n)}function Dr(e){return Rr(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Or(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Lr(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Pr),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Pr(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ir.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Lr(t,Mr,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Lr(t,Mr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Lr(n,"/"==n.charAt(0)?Ur:xr,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Lr(n,Vr)),e.join("")};var Mr=/[#\/\?@]/g,xr=/[#\?:]/g,Ur=/[#\?]/g,Fr=/[#\?@]/g,Vr=/#/g;function Br(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function jr(e){e.g||(e.g=new _r,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function qr(e,t){jr(e),t=$r(e,t),br(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,br((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Tr(e)))}function Hr(e,t){return jr(e),t=$r(e,t),br(e.g.h,t)}function Kr(e,t,n){qr(e,t),0<n.length&&(e.i=null,e.g.set($r(e,t),gi(n)),e.h+=n.length)}function $r(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Xn=Br.prototype).add=function(e,t){jr(this),this.i=null,e=$r(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Xn.forEach=function(e,t){jr(this),this.g.forEach((function(n,i){fi(n,(function(n){e.call(t,n,i,this)}),this)}),this)},Xn.T=function(){jr(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var s=e[i],r=0;r<s.length;r++)n.push(t[i]);return n},Xn.R=function(e){jr(this);var t=[];if("string"==typeof e)Hr(this,e)&&(t=pi(t,this.g.get($r(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=pi(t,e[n])}return t},Xn.set=function(e,t){return jr(this),this.i=null,Hr(this,e=$r(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Xn.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Xn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),e.push(o)}}return this.i=e.join("&")};function zr(e){this.l=e||Gr,Zn.PerformanceNavigationTiming?e=0<(e=Zn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Zn.g&&Zn.g.Ea&&Zn.g.Ea()&&Zn.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gr=10;function Wr(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xr(e){return e.h?1:e.g?e.g.size:0}function Qr(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Yr(e,t){e.g?e.g.add(t):e.h=t}function Jr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Zr(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return gi(e.i)}function eo(){}function to(){this.g=new eo}function no(e,t,n){const i=n||"";try{wr(e,(function(e,n){let s=e;ni(e)&&(s=ys(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function io(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function so(e){this.l=e.$b||null,this.j=e.ib||!1}function ro(e,t){ps.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=oo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zr.prototype.cancel=function(){if(this.i=Zr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},eo.prototype.stringify=function(e){return Zn.JSON.stringify(e,void 0)},eo.prototype.parse=function(e){return Zn.JSON.parse(e,void 0)},hi(so,Xs),so.prototype.g=function(){return new ro(this.l,this.j)},so.prototype.i=function(e){return function(){return e}}({}),hi(ro,ps);var oo=0;function ao(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function co(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ho(e)}function ho(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Xn=ro.prototype).open=function(e,t){if(this.readyState!=oo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ho(this)},Xn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Zn).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Xn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,co(this)),this.readyState=oo},Xn.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Zn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ao(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Xn.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?co(this):ho(this),3==this.readyState&&ao(this)}},Xn.Ua=function(e){this.g&&(this.response=this.responseText=e,co(this))},Xn.Ta=function(e){this.g&&(this.response=e,co(this))},Xn.ha=function(){this.g&&co(this)},Xn.setRequestHeader=function(e,t){this.v.append(e,t)},Xn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Xn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var uo=Zn.JSON.parse;function lo(e){ps.call(this),this.headers=new _r,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fo,this.K=this.L=!1}hi(lo,ps);var fo="",po=/^https?$/i,go=["POST","PUT"];function mo(e){return"content-type"==e.toLowerCase()}function yo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vo(e),_o(e)}function vo(e){e.D||(e.D=!0,gs(e,"complete"),gs(e,"error"))}function wo(e){if(e.h&&void 0!==Jn&&(!e.C[1]||4!=bo(e)||2!=e.ba()))if(e.v&&4==bo(e))Ns(e.Fa,0,e);else if(gs(e,"readystatechange"),4==bo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.H).match(Er)[1]||null;if(!s&&Zn.self&&Zn.self.location){var r=Zn.self.location.protocol;s=r.substr(0,r.length-1)}i=!po.test(s?s.toLowerCase():"")}n=i}if(n)gs(e,"complete"),gs(e,"success");else{e.m=6;try{var o=2<bo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",vo(e)}}finally{_o(e)}}}function _o(e,t){if(e.g){To(e);const n=e.g,i=e.C[0]?ei:null;e.g=null,e.C=null,t||gs(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function To(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Zn.clearTimeout(e.A),e.A=null)}function bo(e){return e.g?e.g.readyState:0}function Eo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case fo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Io(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return Ei(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Rr(e,t,n))}function So(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ko(e){this.za=0,this.l=[],this.h=new xs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=So("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=So("baseRetryDelayMs",5e3,e),this.$a=So("retryDelaySeedMs",1e4,e),this.Ya=So("forwardChannelMaxRetries",2,e),this.ra=So("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new zr(e&&e.concurrentRequestLimit),this.Ca=new to,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Co(e){if(No(e),3==e.G){var t=e.V++,n=Sr(e.F);Rr(n,"SID",e.J),Rr(n,"RID",t),Rr(n,"TYPE","terminate"),Lo(e,n),(t=new ir(e,e.h,t,void 0)).K=2,t.v=Dr(Sr(n)),n=!1,Zn.navigator&&Zn.navigator.sendBeacon&&(n=Zn.navigator.sendBeacon(t.v.toString(),"")),!n&&Zn.Image&&((new Image).src=t.v,n=!0),n||(t.g=$o(t.l,null),t.g.ea(t.v)),t.F=Date.now(),fr(t)}Ho(e)}function Ao(e){e.g&&(Uo(e),e.g.cancel(),e.g=null)}function No(e){Ao(e),e.u&&(Zn.clearTimeout(e.u),e.u=null),Vo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Zn.clearTimeout(e.m),e.m=null)}function Ro(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Do(e)}function Do(e){Wr(e.i)||e.m||(e.m=!0,Es(e.Ha,e),e.C=0)}function Oo(e,t){var n;n=t?t.m:e.V++;const i=Sr(e.F);Rr(i,"SID",e.J),Rr(i,"RID",n),Rr(i,"AID",e.U),Lo(e,i),e.o&&e.s&&Io(i,e.o,e.s),n=new ir(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Po(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Yr(e.i,n),cr(n,i,t)}function Lo(e,t){e.j&&wr({},(function(e,n){Rr(t,n,e)}))}function Po(e,t,n){n=Math.min(e.l.length,n);var i=e.j?ai(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{no(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function Mo(e){e.g||e.u||(e.Y=1,Es(e.Ga,e),e.A=0)}function xo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=zs(ai(e.Ga,e),jo(e,e.A)),e.A++,!0)}function Uo(e){null!=e.B&&(Zn.clearTimeout(e.B),e.B=null)}function Fo(e){e.g=new ir(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Sr(e.oa);Rr(t,"RID","rpc"),Rr(t,"SID",e.J),Rr(t,"CI",e.N?"0":"1"),Rr(t,"AID",e.U),Lo(e,t),Rr(t,"TYPE","xmlhttp"),e.o&&e.s&&Io(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Dr(Sr(t)),n.s=null,n.U=!0,hr(n,e)}function Vo(e){null!=e.v&&(Zn.clearTimeout(e.v),e.v=null)}function Bo(e,t){var n=null;if(e.g==t){Vo(e),Uo(e),e.g=null;var i=2}else{if(!Qr(e.i,t))return;n=t.D,Jr(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;gs(i=Bs(),new $s(i,n,t,s)),Do(e)}else Mo(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==i&&function(e,t){return!(Xr(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=zs(ai(e.Ha,e,t),jo(e,e.C)),e.C++,0)))}(e,t)||2==i&&xo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:qo(e,5);break;case 4:qo(e,10);break;case 3:qo(e,6);break;default:qo(e,2)}}function jo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function qo(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=ai(e.jb,e);n||(n=new Ir("//www.google.com/images/cleardot.gif"),Zn.location&&"http"==Zn.location.protocol||kr(n,"https"),Dr(n)),function(e,t){const n=new xs;if(Zn.Image){const i=new Image;i.onload=ci(io,n,i,"TestLoadImage: loaded",!0,t),i.onerror=ci(io,n,i,"TestLoadImage: error",!1,t),i.onabort=ci(io,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=ci(io,n,i,"TestLoadImage: timeout",!1,t),Zn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Ks(2);e.G=0,e.j&&e.j.va(t),Ho(e),No(e)}function Ho(e){e.G=0,e.I=-1,e.j&&(0==Zr(e.i).length&&0==e.l.length||(e.i.i.length=0,gi(e.l),e.l.length=0),e.j.ua())}function Ko(e,t,n){let i=function(e){return e instanceof Ir?Sr(e):new Ir(e,void 0)}(n);if(""!=i.i)t&&Cr(i,t+"."+i.i),Ar(i,i.m);else{const e=Zn.location;i=function(e,t,n,i){var s=new Ir(null,void 0);return e&&kr(s,e),t&&Cr(s,t),n&&Ar(s,n),i&&(s.l=i),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Ei(e.aa,(function(e,t){Rr(i,t,e)})),t=e.D,n=e.sa,t&&n&&Rr(i,t,n),Rr(i,"VER",e.ma),Lo(e,i),i}function $o(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new lo(new so({ib:!0})):new lo(e.qa)).L=e.H,t}function zo(){}function Go(){if(Di&&!(10<=Number(Ki)))throw Error("Environmental error: no available transport.")}function Wo(e,t){ps.call(this),this.g=new ko(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!mi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!mi(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yo(this)}function Xo(e){er.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Qo(){tr.call(this),this.status=1}function Yo(e){this.g=e}(Xn=lo.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Js.g(),this.C=this.u?Qs(this.u):Qs(Js),this.g.onreadystatechange=ai(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void yo(this,e)}e=n||"";const s=new _r(this.headers);i&&wr(i,(function(e,t){s.set(t,e)})),i=function(e){e:{var t=mo;const n=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in i&&t.call(void 0,i[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=Zn.FormData&&e instanceof Zn.FormData,!(0<=di(go,t))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{To(this),0<this.B&&((this.K=function(e){return Di&&qi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ai(this.pa,this)):this.A=Ns(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yo(this,e)}},Xn.pa=function(){void 0!==Jn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gs(this,"timeout"),this.abort(8))},Xn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,gs(this,"complete"),gs(this,"abort"),_o(this))},Xn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_o(this,!0)),lo.Z.M.call(this)},Xn.Fa=function(){this.s||(this.F||this.v||this.l?wo(this):this.cb())},Xn.cb=function(){wo(this)},Xn.ba=function(){try{return 2<bo(this)?this.g.status:-1}catch(e){return-1}},Xn.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Xn.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),uo(t)}},Xn.Da=function(){return this.m},Xn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Xn=ko.prototype).ma=8,Xn.G=1,Xn.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Xn.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new ir(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=Ii(r),ki(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Po(this,s,t),Rr(n=Sr(this.F),"RID",e),Rr(n,"CVER",22),this.D&&Rr(n,"X-HTTP-Session-Id",this.D),Lo(this,n),this.o&&r&&Io(n,this.o,r),Yr(this.i,s),this.Ra&&Rr(n,"TYPE","init"),this.ja?(Rr(n,"$req",t),Rr(n,"SID","null"),s.$=!0,cr(s,n,null)):cr(s,n,t),this.G=2}}else 3==this.G&&(e?Oo(this,e):0==this.l.length||Wr(this.i)||Oo(this))},Xn.Ga=function(){if(this.u=null,Fo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=zs(ai(this.bb,this),e)}},Xn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ks(10),Ao(this),Fo(this))},Xn.ab=function(){null!=this.v&&(this.v=null,Ao(this),xo(this),Ks(19))},Xn.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ks(2)):(this.h.info("Failed to ping google.com"),Ks(1))},(Xn=zo.prototype).xa=function(){},Xn.wa=function(){},Xn.va=function(){},Xn.ua=function(){},Xn.Oa=function(){},Go.prototype.g=function(e,t){return new Wo(e,t)},hi(Wo,ps),Wo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Es(ai(e.hb,e,t))),Ks(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ko(e,null,e.W),Do(e)},Wo.prototype.close=function(){Co(this.g)},Wo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ro(this.g,t)}else this.v?((t={}).__data__=ys(e),Ro(this.g,t)):Ro(this.g,e)},Wo.prototype.M=function(){this.g.j=null,delete this.j,Co(this.g),delete this.g,Wo.Z.M.call(this)},hi(Xo,er),hi(Qo,tr),hi(Yo,zo),Yo.prototype.xa=function(){gs(this.g,"a")},Yo.prototype.wa=function(e){gs(this.g,new Xo(e))},Yo.prototype.va=function(e){gs(this.g,new Qo(e))},Yo.prototype.ua=function(){gs(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Wo.prototype.send=Wo.prototype.u,Wo.prototype.open=Wo.prototype.m,Wo.prototype.close=Wo.prototype.close,Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,Ws.COMPLETE="complete",Ys.EventType=Zs,Zs.OPEN="a",Zs.CLOSE="b",Zs.ERROR="c",Zs.MESSAGE="d",ps.prototype.listen=ps.prototype.N,lo.prototype.listenOnce=lo.prototype.O,lo.prototype.getLastError=lo.prototype.La,lo.prototype.getLastErrorCode=lo.prototype.Da,lo.prototype.getStatus=lo.prototype.ba,lo.prototype.getResponseJson=lo.prototype.Qa,lo.prototype.getResponseText=lo.prototype.ga,lo.prototype.send=lo.prototype.ea;var Jo,Zo,ea=Yn.createWebChannelTransport=function(){return new Go},ta=Yn.getStatEventTarget=function(){return Bs()},na=Yn.ErrorCode=Gs,ia=Yn.EventType=Ws,sa=Yn.Event=Fs,ra=Yn.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oa=Yn.FetchXmlHttpFactory=so,aa=Yn.WebChannel=Ys,ca=Yn.XhrIo=lo,ha={};function ua(){throw new Error("setTimeout has not been defined")}function la(){throw new Error("clearTimeout has not been defined")}function da(e){if(Jo===setTimeout)return setTimeout(e,0);if((Jo===ua||!Jo)&&setTimeout)return Jo=setTimeout,setTimeout(e,0);try{return Jo(e,0)}catch(t){try{return Jo.call(null,e,0)}catch(t){return Jo.call(this,e,0)}}}!function(){try{Jo="function"==typeof setTimeout?setTimeout:ua}catch(e){Jo=ua}try{Zo="function"==typeof clearTimeout?clearTimeout:la}catch(e){Zo=la}}();var fa,pa=[],ga=!1,ma=-1;function ya(){ga&&fa&&(ga=!1,fa.length?pa=fa.concat(pa):ma=-1,pa.length&&va())}function va(){if(!ga){var e=da(ya);ga=!0;for(var t=pa.length;t;){for(fa=pa,pa=[];++ma<t;)fa&&fa[ma].run();ma=-1,t=pa.length}fa=null,ga=!1,function(e){if(Zo===clearTimeout)return clearTimeout(e);if((Zo===la||!Zo)&&clearTimeout)return Zo=clearTimeout,clearTimeout(e);try{Zo(e)}catch(t){try{return Zo.call(null,e)}catch(t){return Zo.call(this,e)}}}(e)}}function wa(e,t){this.fun=e,this.array=t}function _a(){}ha.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];pa.push(new wa(e,t)),1!==pa.length||ga||da(va)},wa.prototype.run=function(){this.fun.apply(null,this.array)},ha.title="browser",ha.browser=!0,ha.env={},ha.argv=[],ha.version="",ha.versions={},ha.on=_a,ha.addListener=_a,ha.once=_a,ha.off=_a,ha.removeListener=_a,ha.removeAllListeners=_a,ha.emit=_a,ha.prependListener=_a,ha.prependOnceListener=_a,ha.listeners=function(e){return[]},ha.binding=function(e){throw new Error("process.binding is not supported")},ha.cwd=function(){return"/"},ha.chdir=function(e){throw new Error("process.chdir is not supported")},ha.umask=function(){return 0};const Ta="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ba.UNAUTHENTICATED=new ba(null),ba.GOOGLE_CREDENTIALS=new ba("google-credentials-uid"),ba.FIRST_PARTY=new ba("first-party-uid"),ba.MOCK_USER=new ba("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ea="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new F("@firebase/firestore");function Sa(){return Ia.logLevel}function ka(e,...t){if(Ia.logLevel<=L.DEBUG){const n=t.map(Na);Ia.debug(`Firestore (${Ea}): ${e}`,...n)}}function Ca(e,...t){if(Ia.logLevel<=L.ERROR){const n=t.map(Na);Ia.error(`Firestore (${Ea}): ${e}`,...n)}}function Aa(e,...t){if(Ia.logLevel<=L.WARN){const n=t.map(Na);Ia.warn(`Firestore (${Ea}): ${e}`,...n)}}function Na(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e="Unexpected state"){const t=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: `+e;throw Ca(t),new Error(t)}function Da(e,t){e||Ra()}function Oa(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pa extends d{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ua{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ba.UNAUTHENTICATED)))}shutdown(){}}class Fa{constructor(e){this.t=e,this.currentUser=ba.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Ma;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ma,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{ka("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ka("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ma)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ka("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Da("string"==typeof t.accessToken),new xa(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Da(null===e||"string"==typeof e),new ba(e)}}class Va{constructor(e,t,n){this.type="FirstParty",this.user=ba.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ba{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Va(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ba.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ja{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qa{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&ka("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,ka("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{ka("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?i(e):ka("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Da("string"==typeof e.token),this.p=e.token,new ja(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha.A=-1;class $a{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ka(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function za(e,t){return e<t?-1:e>t?1:0}function Ga(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Pa(La.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Pa(La.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Pa(La.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Pa(La.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Wa.fromMillis(Date.now())}static fromDate(e){return Wa.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Wa(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?za(this.nanoseconds,e.nanoseconds):za(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xa(e)}static min(){return new Xa(new Wa(0,0))}static max(){return new Xa(new Wa(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ya(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ja(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ra(),void 0===n?n=e.length-t:n>e.length-t&&Ra(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Za.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Za?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ec extends Za{construct(e,t,n){return new ec(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Pa(La.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ec(t)}static emptyPath(){return new ec([])}}const tc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nc extends Za{construct(e,t,n){return new nc(e,t,n)}static isValidIdentifier(e){return tc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nc(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Pa(La.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Pa(La.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Pa(La.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Pa(La.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nc(t)}static emptyPath(){return new nc([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.fields=e,e.sort(nc.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ga(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new sc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new sc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return za(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sc.EMPTY_BYTE_STRING=new sc("");const rc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oc(e){if(Da(!!e),"string"==typeof e){let t=0;const n=rc.exec(e);if(Da(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ac(e.seconds),nanos:ac(e.nanos)}}function ac(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function cc(e){return"string"==typeof e?sc.fromBase64String(e):sc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function uc(e){const t=e.mapValue.fields.__previous_value__;return hc(t)?uc(t):t}function lc(e){const t=oc(e.mapValue.fields.__local_write_time__.timestampValue);return new Wa(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class fc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof fc&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(e){return null==e}function gc(e){return 0===e&&1/e==-1/0}function mc(e){return"number"==typeof e&&Number.isInteger(e)&&!gc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.path=e}static fromPath(e){return new yc(ec.fromString(e))}static fromName(e){return new yc(ec.fromString(e).popFirst(5))}static empty(){return new yc(ec.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ec.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ec.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new yc(new ec(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hc(e)?4:Dc(e)?9:10:Ra()}function wc(e,t){if(e===t)return!0;const n=vc(e);if(n!==vc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return lc(e).isEqual(lc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=oc(e.timestampValue),i=oc(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,cc(e.bytesValue).isEqual(cc(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ac(e.geoPointValue.latitude)===ac(t.geoPointValue.latitude)&&ac(e.geoPointValue.longitude)===ac(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ac(e.integerValue)===ac(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ac(e.doubleValue),i=ac(t.doubleValue);return n===i?gc(n)===gc(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Ga(e.arrayValue.values||[],t.arrayValue.values||[],wc);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Qa(n)!==Qa(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!wc(n[e],i[e])))return!1;return!0}(e,t);default:return Ra()}var i}function _c(e,t){return void 0!==(e.values||[]).find((e=>wc(e,t)))}function Tc(e,t){if(e===t)return 0;const n=vc(e),i=vc(t);if(n!==i)return za(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return za(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ac(e.integerValue||e.doubleValue),i=ac(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return bc(e.timestampValue,t.timestampValue);case 4:return bc(lc(e),lc(t));case 5:return za(e.stringValue,t.stringValue);case 6:return function(e,t){const n=cc(e),i=cc(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=za(n[e],i[e]);if(0!==t)return t}return za(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=za(ac(e.latitude),ac(t.latitude));return 0!==n?n:za(ac(e.longitude),ac(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Tc(n[e],i[e]);if(t)return t}return za(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=za(i[e],r[e]);if(0!==t)return t;const o=Tc(n[i[e]],s[r[e]]);if(0!==o)return o}return za(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Ra()}}function bc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return za(e,t);const n=oc(e),i=oc(t),s=za(n.seconds,i.seconds);return 0!==s?s:za(n.nanos,i.nanos)}function Ec(e){return Ic(e)}function Ic(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=oc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?cc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,yc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Ic(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Ic(e.fields[s])}`;return n+"}"}(e.mapValue):Ra()}function Sc(e){return!!e&&"integerValue"in e}function kc(e){return!!e&&"arrayValue"in e}function Cc(e){return!!e&&"nullValue"in e}function Ac(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nc(e){return!!e&&"mapValue"in e}function Rc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ya(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Rc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(e){this.value=e}static empty(){return new Oc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rc(t)}setAll(e){let t=nc.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=Rc(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ya(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Oc(Rc(this.value))}}function Lc(e){const t=[];return Ya(e.fields,((e,n)=>{const i=new nc([e]);if(Nc(n)){const e=Lc(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new ic(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pc{constructor(e,t,n,i,s,r){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Pc(e,0,Xa.min(),Xa.min(),Oc.empty(),0)}static newFoundDocument(e,t,n){return new Pc(e,1,t,Xa.min(),n,0)}static newNoDocument(e,t){return new Pc(e,2,t,Xa.min(),Oc.empty(),0)}static newUnknownDocument(e,t){return new Pc(e,3,t,Xa.min(),Oc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Pc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pc(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Mc{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Mc.UNKNOWN_ID=-1;function xc(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Xa.fromTimestamp(1e9===i?new Wa(n+1,0):new Wa(n,i));return new Fc(s,yc.empty(),t)}function Uc(e){return new Fc(e.readTime,e.key,-1)}class Fc{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Fc(Xa.min(),yc.empty(),-1)}static max(){return new Fc(Xa.max(),yc.empty(),-1)}}function Vc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=yc.comparator(e.documentKey,t.documentKey),0!==n?n:za(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function jc(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Bc(e,t,n,i,s,r,o)}function qc(e){const t=Oa(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+Ec(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),pc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ec(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ec(e))).join(",")),t.P=e}return t.P}function Hc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!nh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],i=t.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!wc(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sh(e.startAt,t.startAt)&&sh(e.endAt,t.endAt)}function Kc(e){return yc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class $c extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new zc(e,t,n):"array-contains"===t?new Qc(e,n):"in"===t?new Yc(e,n):"not-in"===t?new Jc(e,n):"array-contains-any"===t?new Zc(e,n):new $c(e,t,n)}static V(e,t,n){return"in"===t?new Gc(e,n):new Wc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Tc(t,this.value)):null!==t&&vc(this.value)===vc(t)&&this.v(Tc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ra()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zc extends $c{constructor(e,t,n){super(e,t,n),this.key=yc.fromName(n.referenceValue)}matches(e){const t=yc.comparator(e.key,this.key);return this.v(t)}}class Gc extends $c{constructor(e,t){super(e,"in",t),this.keys=Xc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Wc extends $c{constructor(e,t){super(e,"not-in",t),this.keys=Xc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>yc.fromName(e.referenceValue)))}class Qc extends $c{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kc(t)&&_c(t.arrayValue,this.value)}}class Yc extends $c{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&_c(this.value.arrayValue,t)}}class Jc extends $c{constructor(e,t){super(e,"not-in",t)}matches(e){if(_c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!_c(this.value.arrayValue,t)}}class Zc extends $c{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>_c(this.value.arrayValue,e)))}}class eh{constructor(e,t){this.position=e,this.inclusive=t}}class th{constructor(e,t="asc"){this.field=e,this.dir=t}}function nh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ih(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?yc.comparator(yc.fromName(o.referenceValue),n.key):Tc(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function sh(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wc(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function oh(e,t,n,i,s,r,o,a){return new rh(e,t,n,i,s,r,o,a)}function ah(e){return new rh(e)}function ch(e){return!pc(e.limit)&&"F"===e.limitType}function hh(e){return!pc(e.limit)&&"L"===e.limitType}function uh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function lh(e){for(const t of e.filters)if(t.S())return t.field;return null}function dh(e){return null!==e.collectionGroup}function fh(e){const t=Oa(e);if(null===t.D){t.D=[];const e=lh(t),n=uh(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new th(e)),t.D.push(new th(nc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new th(nc.keyField(),e))}}}return t.D}function ph(e){const t=Oa(e);if(!t.C)if("F"===t.limitType)t.C=jc(t.path,t.collectionGroup,fh(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of fh(t)){const t="desc"===n.dir?"asc":"desc";e.push(new th(n.field,t))}const n=t.endAt?new eh(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new eh(t.startAt.position,!t.startAt.inclusive):null;t.C=jc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.C}function gh(e,t,n){return new rh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mh(e,t){return Hc(ph(e),ph(t))&&e.limitType===t.limitType}function yh(e){return`${qc(ph(e))}|lt:${e.limitType}`}function vh(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${Ec(t.value)}`})).join(", ")}]`),pc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ec(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ec(e))).join(",")),`Target(${t})`}(ph(e))}; limitType=${e.limitType})`}function wh(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):yc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=ih(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,fh(n),i)||n.endAt&&!function(e,t,n){const i=ih(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,fh(n),i)));var n,i}function _h(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Th(e){return(t,n)=>{let i=!1;for(const s of fh(e)){const e=bh(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function bh(e,t,n){const i=e.field.isKeyField()?yc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Tc(i,s):Ra()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ra()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(t)?"-0":t}}function Ih(e){return{integerValue:""+e}}function Sh(e,t){return mc(t)?Ih(t):Eh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this._=void 0}}function Ch(e,t,n){return e instanceof Rh?Dh(e,t):e instanceof Oh?Lh(e,t):n}function Ah(e,t){var n,i;return e instanceof Ph?Sc(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Nh extends kh{}class Rh extends kh{constructor(e){super(),this.elements=e}}function Dh(e,t){const n=xh(t);for(const t of e.elements)n.some((e=>wc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Oh extends kh{constructor(e){super(),this.elements=e}}function Lh(e,t){let n=xh(t);for(const t of e.elements)n=n.filter((e=>!wc(e,t)));return{arrayValue:{values:n}}}class Ph extends kh{constructor(e,t){super(),this.M=e,this.k=t}}function Mh(e){return ac(e.integerValue||e.doubleValue)}function xh(e){return kc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.version=e,this.transformResults=t}}class Fh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fh}static exists(e){return new Fh(void 0,e)}static updateTime(e){return new Fh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Bh{}function jh(e,t,n){var i;e instanceof zh?function(e,t,n){const i=e.value.clone(),s=Xh(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Gh?function(e,t,n){if(!Vh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Xh(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Wh(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function qh(e,t,n){var i;e instanceof zh?function(e,t,n){if(!Vh(e.precondition,t))return;const i=e.value.clone(),s=Qh(e.fieldTransforms,n,t);i.setAll(s),t.convertToFoundDocument($h(t),i).setHasLocalMutations()}(e,t,n):e instanceof Gh?function(e,t,n){if(!Vh(e.precondition,t))return;const i=Qh(e.fieldTransforms,n,t),s=t.data;s.setAll(Wh(e)),s.setAll(i),t.convertToFoundDocument($h(t),s).setHasLocalMutations()}(e,t,n):(i=t,Vh(e.precondition,i)&&i.convertToNoDocument(Xa.min()))}function Hh(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=Ah(i.transform,e||null);null!=s&&(null==n&&(n=Oc.empty()),n.set(i.field,s))}return n||null}function Kh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Ga(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Rh&&i instanceof Rh||n instanceof Oh&&i instanceof Oh?Ga(n.elements,i.elements,wc):n instanceof Ph&&i instanceof Ph?wc(n.k,i.k):n instanceof Nh&&i instanceof Nh);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}function $h(e){return e.isFoundDocument()?e.version:Xa.min()}class zh extends Bh{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Gh extends Bh{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Wh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Xh(e,t,n){const i=new Map;Da(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Ch(o,a,n[s]))}return i}function Qh(e,t,n){const i=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,o=t,(s=e)instanceof Nh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof Rh?Dh(s,r):s instanceof Oh?Lh(s,r):function(e,t){const n=Ah(e,t),i=Mh(n)+Mh(e.k);return Sc(n)&&Sc(e.k)?Ih(i):Eh(e.M,i)}(s,r)))}var s,r,o;return i}class Yh extends Bh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Jh extends Bh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eu,tu;function nu(e){switch(e){default:return Ra();case La.CANCELLED:case La.UNKNOWN:case La.DEADLINE_EXCEEDED:case La.RESOURCE_EXHAUSTED:case La.INTERNAL:case La.UNAVAILABLE:case La.UNAUTHENTICATED:return!1;case La.INVALID_ARGUMENT:case La.NOT_FOUND:case La.ALREADY_EXISTS:case La.PERMISSION_DENIED:case La.FAILED_PRECONDITION:case La.ABORTED:case La.OUT_OF_RANGE:case La.UNIMPLEMENTED:case La.DATA_LOSS:return!0}}function iu(e){if(void 0===e)return Ca("GRPC error has no .code"),La.UNKNOWN;switch(e){case eu.OK:return La.OK;case eu.CANCELLED:return La.CANCELLED;case eu.UNKNOWN:return La.UNKNOWN;case eu.DEADLINE_EXCEEDED:return La.DEADLINE_EXCEEDED;case eu.RESOURCE_EXHAUSTED:return La.RESOURCE_EXHAUSTED;case eu.INTERNAL:return La.INTERNAL;case eu.UNAVAILABLE:return La.UNAVAILABLE;case eu.UNAUTHENTICATED:return La.UNAUTHENTICATED;case eu.INVALID_ARGUMENT:return La.INVALID_ARGUMENT;case eu.NOT_FOUND:return La.NOT_FOUND;case eu.ALREADY_EXISTS:return La.ALREADY_EXISTS;case eu.PERMISSION_DENIED:return La.PERMISSION_DENIED;case eu.FAILED_PRECONDITION:return La.FAILED_PRECONDITION;case eu.ABORTED:return La.ABORTED;case eu.OUT_OF_RANGE:return La.OUT_OF_RANGE;case eu.UNIMPLEMENTED:return La.UNIMPLEMENTED;case eu.DATA_LOSS:return La.DATA_LOSS;default:return Ra()}}(tu=eu||(eu={}))[tu.OK=0]="OK",tu[tu.CANCELLED=1]="CANCELLED",tu[tu.UNKNOWN=2]="UNKNOWN",tu[tu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tu[tu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tu[tu.NOT_FOUND=5]="NOT_FOUND",tu[tu.ALREADY_EXISTS=6]="ALREADY_EXISTS",tu[tu.PERMISSION_DENIED=7]="PERMISSION_DENIED",tu[tu.UNAUTHENTICATED=16]="UNAUTHENTICATED",tu[tu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tu[tu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tu[tu.ABORTED=10]="ABORTED",tu[tu.OUT_OF_RANGE=11]="OUT_OF_RANGE",tu[tu.UNIMPLEMENTED=12]="UNIMPLEMENTED",tu[tu.INTERNAL=13]="INTERNAL",tu[tu.UNAVAILABLE=14]="UNAVAILABLE",tu[tu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ya(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Ja(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.comparator=e,this.root=t||au.EMPTY}insert(e,t){return new ru(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,au.BLACK,null,null))}remove(e){return new ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,au.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}}class ou{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class au{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:au.RED,this.left=null!=i?i:au.EMPTY,this.right=null!=s?s:au.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new au(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return au.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return au.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,au.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,au.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ra();if(this.right.isRed())throw Ra();const e=this.left.check();if(e!==this.right.check())throw Ra();return e+(this.isRed()?0:1)}}au.EMPTY=null,au.RED=!0,au.BLACK=!1,au.EMPTY=new class{constructor(){this.size=0}get key(){throw Ra()}get value(){throw Ra()}get color(){throw Ra()}get left(){throw Ra()}get right(){throw Ra()}copy(e,t,n,i,s){return this}insert(e,t,n){return new au(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{constructor(e){this.comparator=e,this.data=new ru(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hu(this.data.getIterator())}getIteratorFrom(e){return new hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof cu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new cu(this.comparator);return t.data=e,t}}class hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uu=new ru(yc.comparator);function lu(){return uu}const du=new ru(yc.comparator);function fu(){return du}function pu(){return new su((e=>e.toString()),((e,t)=>e.isEqual(t)))}const gu=new ru(yc.comparator),mu=new cu(yc.comparator);function yu(...e){let t=mu;for(const n of e)t=t.add(n);return t}const vu=new cu(za);function wu(){return vu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Tu.createSynthesizedTargetChangeForCurrentChange(e,t)),new _u(Xa.min(),n,wu(),lu(),yu())}}class Tu{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Tu(sc.EMPTY_BYTE_STRING,t,yu(),yu(),yu())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,n,i){this.O=e,this.removedTargetIds=t,this.key=n,this.F=i}}class Eu{constructor(e,t){this.targetId=e,this.$=t}}class Iu{constructor(e,t,n=sc.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Su{constructor(){this.B=0,this.L=Au(),this.U=sc.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=yu(),t=yu(),n=yu();return this.L.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Ra()}})),new Tu(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Au()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ku{constructor(e){this.nt=e,this.st=new Map,this.it=lu(),this.rt=Cu(),this.ot=new cu(za)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Ra()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,i=this.wt(t);if(i){const e=i.target;if(Kc(e))if(0===n){const n=new yc(e.path);this.ct(t,n,Pc.newNoDocument(n,Xa.min()))}else Da(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&Kc(s.target)){const t=new yc(s.target.path);null!==this.it.get(t)||this.It(i,t)||this.ct(i,t,Pc.newNoDocument(t,e))}n.j&&(t.set(i,n.H()),n.J())}}));let n=yu();this.rt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const i=new _u(e,t,this.ot,this.it,n);return this.it=lu(),this.rt=Cu(),this.ot=new cu(za),i}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const i=this.lt(e);this.It(e,t)?i.Y(t,1):i.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Su,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new cu(za),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||ka("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Su),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Cu(){return new ru(yc.comparator)}function Au(){return new ru(yc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={asc:"ASCENDING",desc:"DESCENDING"},Ru={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Du{constructor(e,t){this.databaseId=e,this.N=t}}function Ou(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lu(e,t){return e.N?t.toBase64():t.toUint8Array()}function Pu(e,t){return Ou(e,t.toTimestamp())}function Mu(e){return Da(!!e),Xa.fromTimestamp(function(e){const t=oc(e);return new Wa(t.seconds,t.nanos)}(e))}function xu(e,t){return(n=e,new ec(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Uu(e){const t=ec.fromString(e);return Da(nl(t)),t}function Fu(e,t){return xu(e.databaseId,t.path)}function Vu(e,t){const n=Uu(t);if(n.get(1)!==e.databaseId.projectId)throw new Pa(La.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Pa(La.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new yc(Hu(n))}function Bu(e,t){return xu(e.databaseId,t)}function ju(e){const t=Uu(e);return 4===t.length?ec.emptyPath():Hu(t)}function qu(e){return new ec(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Hu(e){return Da(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ku(e,t,n){return{name:Fu(e,t),fields:n.value.mapValue.fields}}function $u(e,t){let n;if(t instanceof zh)n={update:Ku(e,t.key,t.value)};else if(t instanceof Yh)n={delete:Fu(e,t.key)};else if(t instanceof Gh)n={update:Ku(e,t.key,t.data),updateMask:tl(t.fieldMask)};else{if(!(t instanceof Jh))return Ra();n={verify:Fu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Nh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Rh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Oh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ph)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Ra()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:Pu(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Ra())),n;var i,s}function zu(e,t){return{documents:[Bu(e,t.path)]}}function Gu(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Bu(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Bu(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Ac(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ac(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NOT_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ju(e.field),op:Yu(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:Ju((t=e).field),direction:Qu(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=(a=e,c=t.limit,a.N||pc(c)?c:{value:c});var a,c,h;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(h=t.startAt).inclusive,values:h.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Wu(e){let t=ju(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Da(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=Xu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new th(Zu((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new eh(n,t)}(n.startAt));let h=null;return n.endAt&&(h=function(e){const t=!e.before,n=e.values||[];return new eh(n,t)}(n.endAt)),oh(t,s,o,r,a,"F",c,h)}function Xu(e){return e?void 0!==e.unaryFilter?[el(e)]:void 0!==e.fieldFilter?[(t=e,$c.create(Zu(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ra()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Xu(e))).reduce(((e,t)=>e.concat(t))):Ra():[];var t}function Qu(e){return Nu[e]}function Yu(e){return Ru[e]}function Ju(e){return{fieldPath:e.canonicalString()}}function Zu(e){return nc.fromServerFormat(e.fieldPath)}function el(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zu(e.unaryFilter.field);return $c.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Zu(e.unaryFilter.field);return $c.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zu(e.unaryFilter.field);return $c.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Zu(e.unaryFilter.field);return $c.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ra()}}function tl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function nl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ra(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new al(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof al?t:al.resolve(t)}catch(e){return al.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):al.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):al.reject(t)}static resolve(e){return new al(((t,n)=>{t(e)}))}static reject(e){return new al(((t,n)=>{n(e)}))}static waitFor(e){return new al(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=al.resolve(!1);for(const n of e)t=t.next((e=>e?al.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&jh(i,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&qh(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&qh(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Xa.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),yu())}isEqual(e){return this.batchId===e.batchId&&Ga(this.mutations,e.mutations,((e,t)=>Kh(e,t)))&&Ga(this.baseMutations,e.baseMutations,((e,t)=>Kh(e,t)))}}class ul{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Da(e.mutations.length===n.length);let i=gu;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new ul(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n,i,s=Xa.min(),r=Xa.min(),o=sc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(e){return new dl(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new dl(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.Jt=e}}function pl(e){const t=Wu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?gh(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(ac(e.integerValue));else if("doubleValue"in e){const n=ac(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),gc(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(cc(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Dc(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Ra()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const e of Object.keys(n))this.re(e,t),this.te(n[e],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const e of n)this.te(e,t)}ae(e,t){this.ne(t,37),yc.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}gl.fe=new gl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{constructor(){this.qe=new yl}addToCollectionParentIndex(e,t){return this.qe.add(t),al.resolve()}getCollectionParents(e,t){return al.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return al.resolve()}deleteFieldIndex(e,t){return al.resolve()}getDocumentsMatchingTarget(e,t){return al.resolve(null)}getFieldIndex(e,t){return al.resolve(null)}getFieldIndexes(e,t){return al.resolve([])}getNextCollectionGroupToUpdate(e){return al.resolve(null)}updateCollectionGroup(e,t,n){return al.resolve()}updateIndexEntries(e,t){return al.resolve()}}class yl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new cu(ec.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new cu(ec.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class vl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new vl(e,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vl.DEFAULT_COLLECTION_PERCENTILE=10,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vl.DEFAULT=new vl(41943040,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vl.DISABLED=new vl(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new wl(0)}static yn(){return new wl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _l(e){if(e.code!==La.FAILED_PRECONDITION||e.message!==rl)throw e;ka("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(){this.changes=new su((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?al.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return i=t,yc.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.js(e,t.path):dh(t)?this.Ws(e,t,n):this.zs(e,t,n);var i}js(e,t){return this.Ls(e,new yc(t)).next((e=>{let t=fu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const i=t.collectionGroup;let s=fu();return this.indexManager.getCollectionParents(e,i).next((r=>al.forEach(r,(r=>{const o=(a=t,c=r.child(i),new rh(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}zs(e,t,n){let i;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(i=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=i.get(n);null==s&&(s=Pc.newInvalidDocument(n),i=i.insert(n,s)),qh(e,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((e,n)=>{wh(t,n)||(i=i.remove(e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=i}static Ys(e,t){let n=yu(),i=yu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new El(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{Xs(e){this.Zs=e}Qs(e,t,n,i){return 0===(s=t).filters.length&&null===s.limit&&null==s.startAt&&null==s.endAt&&(0===s.explicitOrderBy.length||1===s.explicitOrderBy.length&&s.explicitOrderBy[0].field.isKeyField())||n.isEqual(Xa.min())?this.ti(e,t):this.Zs.Ks(e,i).next((s=>{const r=this.ei(t,s);return(ch(t)||hh(t))&&this.ni(t.limitType,r,i,n)?this.ti(e,t):(Sa()<=L.DEBUG&&ka("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),vh(t)),this.Zs.Qs(e,t,xc(n,-1)).next((e=>(r.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var s}ei(e,t){let n=new cu(Th(e));return t.forEach(((t,i)=>{wh(e,i)&&(n=n.add(i))})),n}ni(e,t,n,i){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,t){return Sa()<=L.DEBUG&&ka("QueryEngine","Using full collection scan to execute query:",vh(t)),this.Zs.Qs(e,t,Fc.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,n,i){this.persistence=e,this.si=t,this.M=i,this.ii=new ru(za),this.ri=new su((e=>qc(e)),Hc),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(n)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new bl(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ii)))}}function kl(e,t,n,i){return new Sl(e,t,n,i)}async function Cl(e,t){const n=Oa(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.Bs.getAllMutationBatches(e).next((s=>(i=s,n.ai(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=yu();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ci.Ks(e,o).next((e=>({hi:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function Al(e){const t=Oa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function Nl(e,t,n){let i=yu();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=lu();return n.forEach(((n,s)=>{const r=e.get(n);s.isNoDocument()&&s.version.isEqual(Xa.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):ka("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version)})),i}))}function Rl(e,t){const n=Oa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function Dl(e,t){const n=Oa(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.fs.getTargetData(e,t).next((s=>s?(i=s,al.resolve(i)):n.fs.allocateTargetId(e).next((s=>(i=new dl(t,s,0,e.currentSequenceNumber),n.fs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.ii.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(e.targetId,e),n.ri.set(t,e.targetId)),e}))}async function Ol(e,t,n){const i=Oa(e),s=i.ii.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!cl(e))throw e;ka("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.ii=i.ii.remove(t),i.ri.delete(s.target)}function Ll(e,t,n){const i=Oa(e);let s=Xa.min(),r=yu();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Oa(e),s=i.ri.get(n);return void 0!==s?al.resolve(i.ii.get(s)):i.fs.getTargetData(t,n)}(i,e,ph(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.si.Qs(e,t,n?s:Xa.min(),n?r:yu()))).next((e=>(Pl(i,_h(t),e),{documents:e,li:r})))))}function Pl(e,t,n){let i=Xa.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.oi.set(t,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,t){return al.resolve(this.wi.get(t))}saveBundleMetadata(e,t){var n;return this.wi.set(t.id,{id:(n=t).id,version:n.version,createTime:Mu(n.createTime)}),al.resolve()}getNamedQuery(e,t){return al.resolve(this.mi.get(t))}saveNamedQuery(e,t){return this.mi.set(t.name,{name:(n=t).name,query:pl(n.bundledQuery),readTime:Mu(n.readTime)}),al.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.overlays=new ru(yc.comparator),this.gi=new Map}getOverlay(e,t){return al.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.Xt(e,t,i)})),al.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.gi.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.gi.delete(n)),al.resolve()}getOverlaysForCollection(e,t,n){const i=pu(),s=t.length+1,r=new yc(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return al.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ru(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=pu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=pu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return al.resolve(o)}Xt(e,t,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const e=this.gi.get(i.largestBatchId).delete(n.key);this.gi.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ll(t,n));let s=this.gi.get(t);void 0===s&&(s=yu(),this.gi.set(t,s)),this.gi.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.yi=new cu(Fl.pi),this.Ii=new cu(Fl.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,t){const n=new Fl(e,t);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ai(new Fl(e,t))}Ri(e,t){e.forEach((e=>this.removeReference(e,t)))}Pi(e){const t=new yc(new ec([])),n=new Fl(t,e),i=new Fl(t,e+1),s=[];return this.Ii.forEachInRange([n,i],(e=>{this.Ai(e),s.push(e.key)})),s}bi(){this.yi.forEach((e=>this.Ai(e)))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const t=new yc(new ec([])),n=new Fl(t,e),i=new Fl(t,e+1);let s=yu();return this.Ii.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Fl(e,0),n=this.yi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Fl{constructor(e,t){this.key=e,this.vi=t}static pi(e,t){return yc.comparator(e.key,t.key)||za(e.vi,t.vi)}static Ti(e,t){return za(e.vi,t.vi)||yc.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new cu(Fl.pi)}checkEmpty(e){return al.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new hl(s,t,n,i);this.Bs.push(r);for(const t of i)this.Di=this.Di.add(new Fl(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return al.resolve(r)}lookupMutationBatch(e,t){return al.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.xi(n),s=i<0?0:i;return al.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return al.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(e){return al.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Fl(t,0),i=new Fl(t,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([n,i],(e=>{const t=this.Ci(e.vi);s.push(t)})),al.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new cu(za);return t.forEach((e=>{const t=new Fl(e,0),i=new Fl(e,Number.POSITIVE_INFINITY);this.Di.forEachInRange([t,i],(e=>{n=n.add(e.vi)}))})),al.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;yc.isDocumentKey(s)||(s=s.child(""));const r=new Fl(new yc(s),0);let o=new cu(za);return this.Di.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.vi)),!0)}),r),al.resolve(this.Ni(o))}Ni(e){const t=[];return e.forEach((e=>{const n=this.Ci(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Da(0===this.ki(t.batchId,"removed")),this.Bs.shift();let n=this.Di;return al.forEach(t.mutations,(i=>{const s=new Fl(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Di=n}))}_n(e){}containsKey(e,t){const n=new Fl(t,0),i=this.Di.firstAfterOrEqual(n);return al.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,al.resolve()}ki(e,t){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(e){const t=this.xi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.Mi=e,this.docs=new ru(yc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Mi(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return al.resolve(n?n.document.mutableCopy():Pc.newInvalidDocument(t))}getEntries(e,t){let n=lu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Pc.newInvalidDocument(e))})),al.resolve(n)}getAllFromCollection(e,t,n){let i=lu();const s=new yc(t.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:e,value:{document:s}}=r.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Vc(Uc(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return al.resolve(i)}getAllFromCollectionGroup(e,t,n,i){Ra()}Oi(e,t){return al.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new jl(this)}getSize(e){return al.resolve(this.size)}}class jl extends Tl{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(n)})),al.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.persistence=e,this.Fi=new su((e=>qc(e)),Hc),this.lastRemoteSnapshotVersion=Xa.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Ul,this.targetCount=0,this.Li=wl.gn()}forEachTarget(e,t){return this.Fi.forEach(((e,n)=>t(n))),al.resolve()}getLastRemoteSnapshotVersion(e){return al.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return al.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),al.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),al.resolve()}Tn(e){this.Fi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Li=new wl(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,al.resolve()}updateTargetData(e,t){return this.Tn(t),al.resolve()}removeTargetData(e,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,al.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Fi.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fi.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),al.waitFor(s).next((()=>i))}getTargetCount(e){return al.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fi.get(t)||null;return al.resolve(n)}addMatchingKeys(e,t,n){return this.Bi.Ei(t,n),al.resolve()}removeMatchingKeys(e,t,n){this.Bi.Ri(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),al.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Bi.Pi(t),al.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Bi.Vi(t);return al.resolve(n)}containsKey(e,t){return al.resolve(this.Bi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.Ui={},this.overlays={},this.es=new Ha(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new ql(this),this.indexManager=new ml,this.ds=new Bl((e=>this.referenceDelegate.qi(e))),this.M=new fl(t),this._s=new Ml(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ui[e.toKey()];return n||(n=new Vl(t,this.referenceDelegate),this.Ui[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){ka("MemoryPersistence","Starting transaction:",e);const i=new Kl(this.es.next());return this.referenceDelegate.Ki(),n(i).next((e=>this.referenceDelegate.Gi(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Qi(e,t){return al.or(Object.values(this.Ui).map((n=>()=>n.containsKey(e,t))))}}class Kl extends ol{constructor(e){super(),this.currentSequenceNumber=e}}class $l{constructor(e){this.persistence=e,this.ji=new Ul,this.Wi=null}static zi(e){return new $l(e)}get Hi(){if(this.Wi)return this.Wi;throw Ra()}addReference(e,t,n){return this.ji.addReference(n,t),this.Hi.delete(n.toString()),al.resolve()}removeReference(e,t,n){return this.ji.removeReference(n,t),this.Hi.add(n.toString()),al.resolve()}markPotentiallyOrphaned(e,t){return this.Hi.add(t.toString()),al.resolve()}removeTarget(e,t){this.ji.Pi(t.targetId).forEach((e=>this.Hi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ki(){this.Wi=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return al.forEach(this.Hi,(n=>{const i=yc.fromPath(n);return this.Ji(e,i).next((e=>{e||t.removeEntry(i,Xa.min())}))})).next((()=>(this.Wi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ji(e,t).next((e=>{e?this.Hi.delete(t.toString()):this.Hi.add(t.toString())}))}qi(e){return 0}Ji(e,t){return al.or([()=>al.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Qi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.activeTargetIds=wu()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gl{constructor(){this.$r=new zl,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,t,n){this.Br[e]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new zl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{Lr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){ka("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){ka("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.io=t+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,t,n,i,s){const r=this.uo(e,t);ka("RestConnection","Sending: ",r,n);const o={};return this.ao(o,i,s),this.co(e,r,o,n).then((e=>(ka("RestConnection","Received: ",e),e)),(t=>{throw Aa("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",n),t}))}ho(e,t,n,i,s){return this.oo(e,t,n,i,s)}ao(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ea,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}uo(e,t){const n=Ql[e];return`${this.io}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,i){return new Promise(((s,r)=>{const o=new ca;o.listenOnce(ia.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case na.NO_ERROR:const t=o.getResponseJson();ka("Connection","XHR received:",JSON.stringify(t)),s(t);break;case na.TIMEOUT:ka("Connection",'RPC "'+e+'" timed out'),r(new Pa(La.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const n=o.getStatus();if(ka("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(La).indexOf(t)>=0?t:La.UNKNOWN}(e.status);r(new Pa(t,e.message))}else r(new Pa(La.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Pa(La.UNAVAILABLE,"Connection failed."));break;default:Ra()}}finally{ka("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}lo(e,t,n){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ea(),r=ta(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new oa({})),this.ao(l.initMessageHeaders,t,n),a()||h()||o().indexOf("Electron/")>=0||u()||o().indexOf("MSAppHost/")>=0||c()||(l.httpHeadersOverwriteParam="$httpHeaders");const d=i.join("");ka("Connection","Creating WebChannel: "+d,l);const f=s.createWebChannel(d,l);let p=!1,g=!1;const m=new Yl({Wr:e=>{g?ka("Connection","Not sending because WebChannel is closed:",e):(p||(ka("Connection","Opening WebChannel transport."),f.open(),p=!0),ka("Connection","WebChannel sending:",e),f.send(e))},zr:()=>f.close()}),y=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return y(f,aa.EventType.OPEN,(()=>{g||ka("Connection","WebChannel transport opened.")})),y(f,aa.EventType.CLOSE,(()=>{g||(g=!0,ka("Connection","WebChannel transport closed"),m.no())})),y(f,aa.EventType.ERROR,(e=>{g||(g=!0,Aa("Connection","WebChannel transport errored:",e),m.no(new Pa(La.UNAVAILABLE,"The operation could not be completed")))})),y(f,aa.EventType.MESSAGE,(e=>{var t;if(!g){const n=e.data[0];Da(!!n);const i=n,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){ka("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=eu[e];if(void 0!==t)return iu(t)}(e),n=s.message;void 0===t&&(t=La.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),g=!0,m.no(new Pa(t,n)),f.close()}else ka("Connection","WebChannel received:",n),m.so(n)}})),y(r,sa.STAT_EVENT,(e=>{e.stat===ra.PROXY?ka("Connection","Detected buffering proxy"):e.stat===ra.NOPROXY&&ka("Connection","Detected no buffering proxy")})),setTimeout((()=>{m.eo()}),0),m}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){return new Du(e,!0)}class td{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),i=Math.max(0,t-n);i>0&&ka("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,(()=>(this.po=Date.now(),e()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n,i,s,r,o,a){this.Yn=e,this.Ro=n,this.Po=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new td(e,t)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,t){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==e?this.Do.reset():t&&t.code===La.RESOURCE_EXHAUSTED?(Ca(t.toString()),Ca("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):t&&t.code===La.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(t)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.qo(e,n)}),(t=>{e((()=>{const e=new Pa(La.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ko(e)}))}))}qo(e,t){const n=this.Uo(this.Vo);this.stream=this.Go(e,t),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((e=>{n((()=>this.Ko(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(e){return ka("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Yn.enqueueAndForget((()=>this.Vo===e?t():(ka("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class id extends nd{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.M=s}Go(e,t){return this.bo.lo("Listen",e,t)}onMessage(e){this.Do.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Ra(),r=t.targetChange.targetIds||[],o=function(e,t){return e.N?(Da(void 0===t||"string"==typeof t),sc.fromBase64String(t||"")):(Da(void 0===t||t instanceof Uint8Array),sc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?La.UNKNOWN:iu(e.code);return new Pa(t,e.message||"")}(a);n=new Iu(s,r,o,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Vu(e,i.document.name),r=Mu(i.document.updateTime),o=new Oc({mapValue:{fields:i.document.fields}}),a=Pc.newFoundDocument(s,r,o),c=i.targetIds||[],h=i.removedTargetIds||[];n=new bu(c,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Vu(e,i.document),r=i.readTime?Mu(i.readTime):Xa.min(),o=Pc.newNoDocument(s,r),a=i.removedTargetIds||[];n=new bu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Vu(e,i.document),r=i.removedTargetIds||[];n=new bu([],r,s,null)}else{if(!("filter"in t))return Ra();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,s=new Zh(i),r=e.targetId;n=new Eu(r,s)}}var i;return n}(this.M,e),n=function(e){if(!("targetChange"in e))return Xa.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Xa.min():t.readTime?Mu(t.readTime):Xa.min()}(e);return this.listener.Qo(t,n)}jo(e){const t={};t.database=qu(this.M),t.addTarget=function(e,t){let n;const i=t.target;return n=Kc(i)?{documents:zu(e,i)}:{query:Gu(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Lu(e,t.resumeToken):t.snapshotVersion.compareTo(Xa.min())>0&&(n.readTime=Ou(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ra()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=qu(this.M),t.removeTarget=e,this.Fo(t)}}class sd extends nd{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,t){return this.bo.lo("Write",e,t)}onMessage(e){if(Da(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Da(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Mu(e.updateTime):Mu(t);return n.isEqual(Xa.min())&&(n=Mu(t)),new Uh(n,e.transformResults||[])}(e,n)))):[]),s=Mu(e.commitTime);return this.listener.Yo(s,i)}var t,n;return Da(!e.writeResults||0===e.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=qu(this.M),this.Fo(e)}Jo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>$u(this.M,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=i,this.tu=!1}eu(){if(this.tu)throw new Pa(La.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.oo(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===La.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pa(La.UNKNOWN,e.toString())}))}ho(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ho(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===La.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pa(La.UNKNOWN,e.toString())}))}terminate(){this.tu=!0}}class od{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Ca(t),this.iu=!1):ka("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr((e=>{n.enqueueAndForget((async()=>{md(this)&&(ka("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Oa(e);t.fu.add(4),await hd(t),t.wu.set("Unknown"),t.fu.delete(4),await cd(t)}(this))}))})),this.wu=new od(n,i)}}async function cd(e){if(md(e))for(const t of e.du)await t(!0)}async function hd(e){for(const t of e.du)await t(!1)}function ud(e,t){const n=Oa(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),gd(n)?pd(n):Pd(n).xo()&&dd(n,t))}function ld(e,t){const n=Oa(e),i=Pd(n);n.lu.delete(t),i.xo()&&fd(n,t),0===n.lu.size&&(i.xo()?i.Mo():md(n)&&n.wu.set("Unknown"))}function dd(e,t){e.mu.Z(t.targetId),Pd(e).jo(t)}function fd(e,t){e.mu.Z(t),Pd(e).Wo(t)}function pd(e){e.mu=new ku({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Pd(e).start(),e.wu.ru()}function gd(e){return md(e)&&!Pd(e).Co()&&e.lu.size>0}function md(e){return 0===Oa(e).fu.size}function yd(e){e.mu=void 0}async function vd(e){e.lu.forEach(((t,n)=>{dd(e,t)}))}async function wd(e,t){yd(e),gd(e)?(e.wu.au(t),pd(e)):e.wu.set("Unknown")}async function _d(e,t,n){if(e.wu.set("Online"),t instanceof Iu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.lu.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.lu.delete(i),e.mu.removeTarget(i))}(e,t)}catch(n){ka("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Td(e,n)}else if(t instanceof bu?e.mu.ut(t):t instanceof Eu?e.mu._t(t):e.mu.ht(t),!n.isEqual(Xa.min()))try{const t=await Al(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.mu.yt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.lu.get(i);s&&e.lu.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.lu.get(t);if(!n)return;e.lu.set(t,n.withResumeToken(sc.EMPTY_BYTE_STRING,n.snapshotVersion)),fd(e,t);const i=new dl(n.target,t,1,n.sequenceNumber);dd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ka("RemoteStore","Failed to raise snapshot:",t),await Td(e,t)}}async function Td(e,t,n){if(!cl(t))throw t;e.fu.add(1),await hd(e),e.wu.set("Offline"),n||(n=()=>Al(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ka("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await cd(e)}))}function bd(e,t){return t().catch((n=>Td(e,n,t)))}async function Ed(e){const t=Oa(e),n=Md(t);let i=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;Id(t);)try{const e=await Rl(t.localStore,i);if(null===e){0===t.hu.length&&n.Mo();break}i=e.batchId,Sd(t,e)}catch(e){await Td(t,e)}kd(t)&&Cd(t)}function Id(e){return md(e)&&e.hu.length<10}function Sd(e,t){e.hu.push(t);const n=Md(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function kd(e){return md(e)&&!Md(e).Co()&&e.hu.length>0}function Cd(e){Md(e).start()}async function Ad(e){Md(e).Zo()}async function Nd(e){const t=Md(e);for(const n of e.hu)t.Jo(n.mutations)}async function Rd(e,t,n){const i=e.hu.shift(),s=ul.from(i,t,n);await bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Ed(e)}async function Dd(e,t){t&&Md(e).Ho&&await async function(e,t){if(nu(n=t.code)&&n!==La.ABORTED){const n=e.hu.shift();Md(e).ko(),await bd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ed(e)}var n}(e,t),kd(e)&&Cd(e)}async function Od(e,t){const n=Oa(e);n.asyncQueue.verifyOperationInProgress(),ka("RemoteStore","RemoteStore received new credentials");const i=md(n);n.fu.add(3),await hd(n),i&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await cd(n)}async function Ld(e,t){const n=Oa(e);t?(n.fu.delete(2),await cd(n)):t||(n.fu.add(2),await hd(n),n.wu.set("Unknown"))}function Pd(e){return e.gu||(e.gu=function(e,t,n){const i=Oa(e);return i.eu(),new id(t,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(e.datastore,e.asyncQueue,{Hr:vd.bind(null,e),Yr:wd.bind(null,e),Qo:_d.bind(null,e)}),e.du.push((async t=>{t?(e.gu.ko(),gd(e)?pd(e):e.wu.set("Unknown")):(await e.gu.stop(),yd(e))}))),e.gu}function Md(e){return e.yu||(e.yu=function(e,t,n){const i=Oa(e);return i.eu(),new sd(t,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(e.datastore,e.asyncQueue,{Hr:Ad.bind(null,e),Yr:Dd.bind(null,e),Xo:Nd.bind(null,e),Yo:Rd.bind(null,e)}),e.du.push((async t=>{t?(e.yu.ko(),await Ed(e)):(await e.yu.stop(),e.hu.length>0&&(ka("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))}))),e.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xd{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ma,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new xd(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pa(La.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ud(e,t){if(Ca("AsyncQueue",`${t}: ${e}`),cl(e))return new Pa(La.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||yc.comparator(t.key,n.key):(e,t)=>yc.comparator(e.key,t.key),this.keyedMap=fu(),this.sortedSet=new ru(this.comparator)}static emptySet(e){return new Fd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.pu=new ru(yc.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Ra():this.pu=this.pu.insert(t,e)}Iu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Bd{constructor(e,t,n,i,s,r,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Bd(e,t,Fd.emptySet(t),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Tu=void 0,this.listeners=[]}}class qd{constructor(){this.queries=new su((e=>yh(e)),mh),this.onlineState="Unknown",this.Eu=new Set}}async function Hd(e,t){const n=Oa(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new jd),s)try{r.Tu=await n.onListen(i)}catch(e){const n=Ud(e,`Initialization of query '${vh(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Au(n.onlineState),r.Tu&&t.Ru(r.Tu)&&Gd(n)}async function Kd(e,t){const n=Oa(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function $d(e,t){const n=Oa(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.Ru(e)&&(i=!0);s.Tu=e}}i&&Gd(n)}function zd(e,t,n){const i=Oa(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function Gd(e){e.Eu.forEach((e=>{e.next()}))}class Wd{constructor(e,t,n){this.query=e,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Bd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),t=!0):this.Su(e,this.onlineState)&&(this.Du(e),t=!0),this.Vu=e,t}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),t=!0),t}Su(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Cu&&n||e.docs.isEmpty()&&"Offline"!==t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Du(e){e=Bd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xd{constructor(e){this.key=e}}class Qd{constructor(e){this.key=e}}class Yd{constructor(e,t){this.query=e,this.$u=t,this.Bu=null,this.current=!1,this.Lu=yu(),this.mutatedKeys=yu(),this.Uu=Th(e),this.qu=new Fd(this.Uu)}get Ku(){return this.$u}Gu(e,t){const n=t?t.Qu:new Vd,i=t?t.qu:this.qu;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=ch(this.query)&&i.size===this.query.limit?i.last():null,c=hh(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const h=i.get(e),u=wh(this.query,t)?t:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.ju(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Uu(u,a)>0||c&&this.Uu(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),ch(this.query)||hh(this.query))for(;r.size>this.query.limit;){const e=ch(this.query)?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{qu:r,Qu:n,ni:o,mutatedKeys:s}}ju(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const s=e.Qu.Iu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ra()}};return n(e)-n(t)}(e.type,t.type)||this.Uu(e.doc,t.doc))),this.Wu(n);const r=t?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==s.length||a?{snapshot:new Bd(this.query,e.qu,i,s,e.mutatedKeys,0===o,a,!1),Hu:r}:{Hu:r}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Vd,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach((e=>this.$u=this.$u.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.$u=this.$u.delete(e))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=yu(),this.qu.forEach((e=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))}));const t=[];return e.forEach((e=>{this.Lu.has(e)||t.push(new Qd(e))})),this.Lu.forEach((n=>{e.has(n)||t.push(new Xd(n))})),t}Yu(e){this.$u=e.li,this.Lu=yu();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Xu(){return Bd.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Jd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Zd{constructor(e){this.key=e,this.Zu=!1}}class ef{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new su((e=>yh(e)),mh),this.na=new Map,this.sa=new Set,this.ia=new ru(yc.comparator),this.ra=new Map,this.oa=new Ul,this.ua={},this.aa=new Map,this.ca=wl.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function tf(e,t){const n=_f(e);let i,s;const r=n.ea.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Xu();else{const e=await Dl(n.localStore,ph(t));n.isPrimaryClient&&ud(n.remoteStore,e);const r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await nf(n,t,i,"current"===r)}return s}async function nf(e,t,n,i){e.la=(t,n,i)=>async function(e,t,n,i){let s=t.view.Gu(n);s.ni&&(s=await Ll(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return pf(e,t.targetId,o.Hu),o.snapshot}(e,t,n,i);const s=await Ll(e.localStore,t,!0),r=new Yd(t,s.li),o=r.Gu(s.documents),a=Tu.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),c=r.applyChanges(o,e.isPrimaryClient,a);pf(e,n,c.Hu);const h=new Jd(t,n,r);return e.ea.set(t,h),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),c.snapshot}async function sf(e,t){const n=Oa(e),i=n.ea.get(t),s=n.na.get(i.targetId);if(s.length>1)return n.na.set(i.targetId,s.filter((e=>!mh(e,t)))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ol(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ld(n.remoteStore,i.targetId),df(n,i.targetId)})).catch(_l)):(df(n,i.targetId),await Ol(n.localStore,i.targetId,!0))}async function rf(e,t){const n=Oa(e);try{const e=await function(e,t){const n=Oa(e),i=t.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,r.addedDocuments,a))));let h=c.withSequenceNumber(e.currentSequenceNumber);var u,l,d;t.targetMismatches.has(a)?h=h.withResumeToken(sc.EMPTY_BYTE_STRING,Xa.min()).withLastLimboFreeSnapshotVersion(Xa.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,i)),s=s.insert(a,h),l=h,d=r,(0===(u=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.fs.updateTargetData(e,h))}));let a=lu();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(Nl(e,r,t.documentUpdates).next((e=>{a=e}))),!i.isEqual(Xa.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return al.waitFor(o).next((()=>r.apply(e))).next((()=>n.ci.Gs(e,a))).next((()=>a))})).then((e=>(n.ii=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.ra.get(t);i&&(Da(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.Zu=!0:e.modifiedDocuments.size>0?Da(i.Zu):e.removedDocuments.size>0&&(Da(i.Zu),i.Zu=!1))})),await yf(n,e,t)}catch(e){await _l(e)}}function of(e,t,n){const i=Oa(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ea.forEach(((n,i)=>{const s=i.view.Au(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Oa(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Au(t)&&(i=!0)})),i&&Gd(n)}(i.eventManager,t),e.length&&i.ta.Qo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function af(e,t,n){const i=Oa(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.ra.get(t),r=s&&s.key;if(r){let e=new ru(yc.comparator);e=e.insert(r,Pc.newNoDocument(r,Xa.min()));const n=yu().add(r),s=new _u(Xa.min(),new Map,new cu(za),e,n);await rf(i,s),i.ia=i.ia.remove(r),i.ra.delete(t),mf(i)}else await Ol(i.localStore,t,!1).then((()=>df(i,t,n))).catch(_l)}async function cf(e,t){const n=Oa(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Oa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=al.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Da(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,i)))}))}(n.localStore,t);lf(n,i,null),uf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await yf(n,e)}catch(e){await _l(e)}}async function hf(e,t,n){const i=Oa(e);try{const e=await function(e,t){const n=Oa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.Bs.lookupMutationBatch(e,t).next((t=>(Da(null!==t),i=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,i)))}))}(i.localStore,t);lf(i,t,n),uf(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await yf(i,e)}catch(e){await _l(e)}}function uf(e,t){(e.aa.get(t)||[]).forEach((e=>{e.resolve()})),e.aa.delete(t)}function lf(e,t,n){const i=Oa(e);let s=i.ua[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.ua[i.currentUser.toKey()]=s}}function df(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.na.get(t))e.ea.delete(i),n&&e.ta.fa(i,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach((t=>{e.oa.containsKey(t)||ff(e,t)}))}function ff(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);null!==n&&(ld(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),mf(e))}function pf(e,t,n){for(const i of n)i instanceof Xd?(e.oa.addReference(i.key,t),gf(e,i)):i instanceof Qd?(ka("SyncEngine","Document no longer in limbo: "+i.key),e.oa.removeReference(i.key,t),e.oa.containsKey(i.key)||ff(e,i.key)):Ra()}function gf(e,t){const n=t.key,i=n.path.canonicalString();e.ia.get(n)||e.sa.has(i)||(ka("SyncEngine","New document in limbo: "+n),e.sa.add(i),mf(e))}function mf(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new yc(ec.fromString(t)),i=e.ca.next();e.ra.set(i,new Zd(n)),e.ia=e.ia.insert(n,i),ud(e.remoteStore,new dl(ph(ah(n.path)),i,2,Ha.A))}}async function yf(e,t,n){const i=Oa(e),s=[],r=[],o=[];i.ea.isEmpty()||(i.ea.forEach(((e,a)=>{o.push(i.la(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=El.Ys(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.ta.Qo(s),await async function(e,t){const n=Oa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>al.forEach(t,(t=>al.forEach(t.Hs,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>al.forEach(t.Js,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!cl(e))throw e;ka("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ii.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.ii=n.ii.insert(t,s)}}}(i.localStore,r))}async function vf(e,t){const n=Oa(e);if(!n.currentUser.isEqual(t)){ka("SyncEngine","User change. New user:",t.toKey());const e=await Cl(n.localStore,t);n.currentUser=t,(i=n).aa.forEach((e=>{e.forEach((e=>{e.reject(new Pa(La.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.aa.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await yf(n,e.hi)}var i}function wf(e,t){const n=Oa(e),i=n.ra.get(t);if(i&&i.Zu)return yu().add(i.key);{let e=yu();const i=n.na.get(t);if(!i)return e;for(const t of i){const i=n.ea.get(t);e=e.unionWith(i.view.Ku)}return e}}function _f(e){const t=Oa(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.ta.Qo=$d.bind(null,t.eventManager),t.ta.fa=zd.bind(null,t.eventManager),t}function Tf(e){const t=Oa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hf.bind(null,t),t}class bf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ed(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return kl(this.persistence,new Il,e.initialUser,this.M)}wa(e){return new Hl($l.zi,this.M)}_a(e){return new Gl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ef{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>of(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vf.bind(null,this.syncEngine),await Ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qd}createDatastore(e){const t=ed(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Jl(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new rd(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>of(this.syncEngine,e,0),r=Xl.vt()?new Xl:new Wl,new ad(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new ef(e,t,n,i,s,r);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Oa(e);ka("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await hd(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ba.UNAUTHENTICATED,this.clientId=$a.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ka("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ka("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pa(La.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ma;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ud(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function kf(e,t){e.asyncQueue.verifyOperationInProgress(),ka("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await Cl(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Cf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Af(e);ka("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Od(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Od(t.remoteStore,n))),e.onlineComponents=t}async function Af(e){return e.offlineComponents||(ka("FirestoreClient","Using default OfflineComponentProvider"),await kf(e,new bf)),e.offlineComponents}async function Nf(e){return e.onlineComponents||(ka("FirestoreClient","Using default OnlineComponentProvider"),await Cf(e,new Ef)),e.onlineComponents}function Rf(e){return Nf(e).then((e=>e.syncEngine))}async function Df(e){const t=await Nf(e),n=t.eventManager;return n.onListen=tf.bind(null,t.syncEngine),n.onUnlisten=sf.bind(null,t.syncEngine),n}function Of(e,t,n={}){const i=new Ma;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new If({next:r=>{t.enqueueAndForget((()=>Kd(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Pa(La.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Pa(La.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new Wd(ah(n.path),r,{includeMetadataChanges:!0,Cu:!0});return Hd(e,o)}(await Df(e),e.asyncQueue,t,n,i))),i.promise}function Lf(e,t,n={}){const i=new Ma;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new If({next:n=>{t.enqueueAndForget((()=>Kd(e,o))),n.fromCache&&"server"===i.source?s.reject(new Pa(La.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Wd(n,r,{includeMetadataChanges:!0,Cu:!0});return Hd(e,o)}(await Df(e),e.asyncQueue,t,n,i))),i.promise}const Pf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e,t,n){if(!n)throw new Pa(La.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xf(e){if(!yc.isDocumentKey(e))throw new Pa(La.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Uf(e){if(yc.isDocumentKey(e))throw new Pa(La.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ff(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ra()}function Vf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pa(La.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(e);throw new Pa(La.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Pa(La.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Pa(La.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Pa(La.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bf({}),this._settingsFrozen=!1,e instanceof fc?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Pa(La.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fc(e.options.projectId)}(e))}get app(){if(!this._app)throw new Pa(La.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Pa(La.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ua;switch(e.type){case"gapi":const t=e.client;return Da(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ba(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Pa(La.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pf.get(e);t&&(ka("ComponentProvider","Removing Datastore"),Pf.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qf(this.firestore,e,this._key)}}class Hf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Hf(this.firestore,e,this._query)}}class Kf extends Hf{constructor(e,t,n){super(e,t,ah(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qf(this.firestore,null,new yc(e))}withConverter(e){return new Kf(this.firestore,e,this._path)}}function $f(e,t,...n){if(e=b(e),1===arguments.length&&(t=$a.R()),Mf("doc","path",t),e instanceof jf){const i=ec.fromString(t,...n);return xf(i),new qf(e,null,new yc(i))}{if(!(e instanceof qf||e instanceof Kf))throw new Pa(La.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ec.fromString(t,...n));return xf(i),new qf(e.firestore,e instanceof Kf?e.converter:null,new yc(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new td(this,"async_queue_retry"),this.qa=()=>{const e=Zl();e&&ka("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=Zl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=Zl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise((()=>{}));const t=new Ma;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ma.push(e),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!cl(e))throw e;ka("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(e){const t=this.ka.then((()=>(this.Ba=!0,e().catch((e=>{this.$a=e,this.Ba=!1;throw Ca("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Ba=!1,e))))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const i=xd.createAndSchedule(this,e,t,n,(e=>this.ja(e)));return this.Fa.push(i),i}Ka(){this.$a&&Ra()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then((()=>{this.Fa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()}))}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}class Gf extends jf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new zf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Xf(this),this._firestoreClient.terminate()}}function Wf(e){return e._firestoreClient||Xf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xf(e){var t;const n=e._freezeSettings(),i=(s=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new dc(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;e._firestoreClient=new Sf(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Pa(La.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yf(sc.fromBase64String(e))}catch(e){throw new Pa(La.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Yf(sc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Pa(La.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Pa(La.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return za(this._lat,e._lat)||za(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=/^__.*__$/;class tp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Gh(e,this.data,this.fieldMask,t,this.fieldTransforms):new zh(e,this.data,t,this.fieldTransforms)}}function np(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ra()}}class ip{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new ip(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Za({path:n,ec:!1});return i.nc(e),i}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Za({path:n,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return pp(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(np(this.Xa)&&ep.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class sp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||ed(e)}ac(e,t,n,i=!1){return new ip({Xa:e,methodName:t,uc:n,path:nc.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function rp(e){const t=e._freezeSettings(),n=ed(e._databaseId);return new sp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function op(e,t,n,i,s,r={}){const o=e.ac(r.merge||r.mergeFields?2:0,t,n,s);up("Data must be an object, but it was:",o,i);const a=cp(i,o);let c,h;if(r.merge)c=new ic(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=lp(t,i,n);if(!o.contains(s))throw new Pa(La.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);gp(e,s)||e.push(s)}c=new ic(e),h=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,h=o.fieldTransforms;return new tp(new Oc(a),c,h)}function ap(e,t){if(hp(e=b(e)))return up("Unsupported field value:",t,e),cp(e,t);if(e instanceof Jf)return function(e,t){if(!np(t.Xa))throw t.rc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.rc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=ap(s,t.ic(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=b(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Sh(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Wa.fromDate(e);return{timestampValue:Ou(t.M,n)}}if(e instanceof Wa){const n=new Wa(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ou(t.M,n)}}if(e instanceof Zf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Yf)return{bytesValue:Lu(t.M,e._byteString)};if(e instanceof qf){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:xu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.rc(`Unsupported field value: ${Ff(e)}`)}(e,t)}function cp(e,t){const n={};return Ja(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ya(e,((e,i)=>{const s=ap(i,t.tc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function hp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Wa||e instanceof Zf||e instanceof Yf||e instanceof qf||e instanceof Jf)}function up(e,t,n){if(!hp(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ff(n);throw"an object"===i?t.rc(e+" a custom object"):t.rc(e+" "+i)}var i}function lp(e,t,n){if((t=b(t))instanceof Qf)return t._internalPath;if("string"==typeof t)return fp(e,t);throw pp("Field path arguments must be of type string or ",e,!1,void 0,n)}const dp=new RegExp("[~\\*/\\[\\]]");function fp(e,t,n){if(t.search(dp)>=0)throw pp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qf(...t.split("."))._internalPath}catch(i){throw pp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pp(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Pa(La.INVALID_ARGUMENT,a+e+c)}function gp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yp extends mp{data(){return super.data()}}function vp(e,t){return"string"==typeof t?fp(e,t):t instanceof Qf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _p extends mp{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Tp extends _p{data(e={}){return super.data(e)}}class bp{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wp(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Tp(this._firestore,this._userDataWriter,n.key,n,new wp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Pa(La.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Tp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new wp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Tp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new wp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:Ep(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ep(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ra()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ip(e){if(hh(e)&&0===e.explicitOrderBy.length)throw new Pa(La.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sp{convertValue(e,t="none"){switch(vc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ac(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ra()}}convertObject(e,t){const n={};return Ya(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Zf(ac(e.latitude),ac(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=uc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(lc(e));default:return null}}convertTimestamp(e){const t=oc(e);return new Wa(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ec.fromString(e);Da(nl(n));const i=new fc(n.get(1),n.get(3)),s=new yc(n.popFirst(5));return i.isEqual(t)||Ca(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Cp extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qf(this.firestore,null,t)}}function Ap(e,t){return function(e,t){const n=new Ma;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Tf(e);try{const e=await function(e,t){const n=Oa(e),i=Wa.now(),s=t.reduce(((e,t)=>e.add(t.key)),yu());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ci.Ks(e,s).next((s=>{r=s;const o=[];for(const e of t){const t=Hh(e,r.get(e.key));null!=t&&o.push(new Gh(e.key,t,Lc(t.value.mapValue),Fh.exists(!0)))}return n.Bs.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(r),{batchId:e.batchId,changes:r})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ua[e.currentUser.toKey()];i||(i=new ru(za)),i=i.insert(t,n),e.ua[e.currentUser.toKey()]=i}(i,e.batchId,n),await yf(i,e.changes),await Ed(i.remoteStore)}catch(e){const t=Ud(e,"Failed to persist write");n.reject(t)}}(await Rf(e),t,n))),n.promise}(Wf(e),t)}function Np(e,t,n){const i=n.docs.get(t._key),s=new Cp(e);return new _p(e,s,t._key,i,new wp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){Ea="9.6.11",W(new A("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=new Gf(i,new Fa(e.getProvider("auth-internal")),new qa(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),ee(Ta,"3.4.8",e),ee(Ta,"3.4.8","esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rp="firebasestorage.googleapis.com";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dp extends d{constructor(e,t){super(Op(e),`Firebase Storage: ${t} (${Op(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dp.prototype)}_codeEquals(e){return Op(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Op(e){return"storage/"+e}function Lp(){return new Dp("unknown","An unknown error occurred, please check the error payload for server response.")}function Pp(){return new Dp("canceled","User canceled the upload/download.")}function Mp(e){return new Dp("invalid-argument",e)}function xp(){return new Dp("app-deleted","The Firebase app was deleted.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Up{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Up.makeFromUrl(e,t)}catch(t){return new Up(e,"")}if(""===n.path)return n;throw new Dp("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${t===Rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let t=0;t<a.length;t++){const i=a[t],s=i.regex.exec(e);if(s){const e=s[i.indices.bucket];let t=s[i.indices.path];t||(t=""),n=new Up(e,t),i.postModify(n);break}}if(null==n)throw function(e){return new Dp("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Fp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(e,t,n,i){if(i<t)throw Mp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Mp(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){n=n+(t(i)+"="+t(e[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jp,qp;(qp=jp||(jp={}))[qp.NO_ERROR=0]="NO_ERROR",qp[qp.NETWORK_ERROR=1]="NETWORK_ERROR",qp[qp.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hp{constructor(e,t,n,i,s,r,o,a,c,h,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,i=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){i(e)}else if(null!==s){const e=Lp();e.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,e)):i(e)}else if(t.canceled){i(this.appDelete_?xp():Pp())}else{i(new Dp("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Kp(!1,null,!0)):this.backoffId_=function(e,t,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let h=!1;function u(...e){h||(h=!0,t.apply(null,e))}function l(t){s=setTimeout((()=>{s=null,e(f,c())}),t)}function d(){r&&clearTimeout(r)}function f(e,...t){if(h)return void d();if(e)return d(),void u.call(null,e,...t);if(c()||o)return d(),void u.call(null,e,...t);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),l(n)}let p=!1;function g(e){p||(p=!0,d(),h||(null!==s?(e||(a=2),clearTimeout(s),l(0)):e||(a=1)))}return l(0),r=setTimeout((()=>{o=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new Kp(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===jp.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===jp.ABORT;return void e(!1,new Kp(!1,null,t))}const r=-1!==this.successCodes_.indexOf(s);e(!0,new Kp(r,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||i}}class Kp{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function $p(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zp{constructor(e,t){this._service=e,this._location=t instanceof Up?t:Up.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new zp(e,t)}get root(){const e=new Up(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $p(this._location.path)}get storage(){return this._service}get parent(){const e=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Up(this._location.bucket,e);return new zp(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Dp("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Gp(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:Up.makeFromBucketSpec(n,e)}class Wp{constructor(e,t,n,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Up.makeFromBucketSpec(i,this._host):Gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Up.makeFromBucketSpec(this._url,e):this._bucket=Gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zp(this,e)}_makeRequest(e,t,n,i){if(this._deleted)return new Fp(xp());{const s=function(e,t,n,i,s,r){const o=Bp(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,r),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,i),new Hp(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,i,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Xp="@firebase/storage",Qp="0.9.5",Yp="storage";function Jp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Wp(n,i,s,t,J)}W(new A(Yp,Jp,"PUBLIC").setMultipleInstances(!0)),ee(Xp,Qp,""),ee(Xp,Qp,"esm2017");const Zp=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:H,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Q.create("bad-app-name",{appName:String(i)});const s=$.get(i);if(s){if(g(e,s.options)&&g(n,s.config))return s;throw Q.create("duplicate-app",{appName:i})}const r=new D(i);for(const e of z.values())r.addComponent(e);const o=new Y(e,n,r);return $.set(i,o),o}({apiKey:"AIzaSyBFTtgH2DhH2Hn7SUfmttvJ9dA9QQTRtbI",authDomain:"webshop-372b4.firebaseapp.com",projectId:"webshop-372b4",storageBucket:"webshop-372b4.appspot.com",messagingSenderId:"433842013330",appId:"1:433842013330:web:d586ced29278cda9d0524b"}),eg=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=Z()){const t=X(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=X(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(g(n.getOptions(),null!=t?t:{}))return e;ye(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Kn,persistence:[sn,Bt,qt]})}(),tg=function(e=Z()){return X(e,"firestore").getImmediate()}(Zp);!function(e=Z(),t){X(e=b(e),Yp).getImmediate({identifier:t})}(Zp);async function ng(e){const t=function(e,t,...n){if(e=b(e),Mf("collection","path",t),e instanceof jf){const i=ec.fromString(t,...n);return Uf(i),new Kf(e,null,i)}{if(!(e instanceof qf||e instanceof Kf))throw new Pa(La.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ec.fromString(t,...n));return Uf(i),new Kf(e.firestore,null,i)}}(e,"products");try{const{docs:e}=await function(e){e=Vf(e,Hf);const t=Vf(e.firestore,Gf),n=Wf(t),i=new Cp(t);return Ip(e._query),Lf(n,e._query).then((n=>new bp(t,i,e,n)))}(t);return e.map((e=>({...e.data(),id:e.id})))}catch(e){console.log(e)}}async function ig(e,t,n){try{await function(e,t,n){e=Vf(e,qf);const i=Vf(e.firestore,Gf),s=kp(e.converter,t,n);return Ap(i,[op(rp(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Fh.none())])}($f(e,"cart",t),{cart:n})}catch(e){console.log(e)}}async function sg(e,t){const n=$f(e,"cart",t),i=(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e=Vf(e,qf);const t=Vf(e.firestore,Gf);return Of(Wf(t),e._key).then((n=>Np(t,e,n)))}(n)).data();return i?i.cart:[]}const rg=document.getElementById("products"),og=document.getElementById("category"),ag=document.getElementById("order");let cg,hg=[],ug=[];function lg(e){const t=document.createElement("a");t.className="product",t.setAttribute("href",`./product.html?id=${e.id}`);const n=e.images?e.images[0]:"https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png";ug.some((t=>t.id===e.id));var i;t.innerHTML=`\n   \n    <img src="${n}" alt="" class="product__image">\n  \n    <div class="product__info">\n        <p class="product__category">${e.category}</p> \n        <h2 class="product__name">${e.name}</h2>\n        <h3 class="product__price">${i=e.price,new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}).format(i)}</h3>\n        <button class="product__cart">Agregar al carrito</button>\n        </div>\n     \n    \n   \n    `,rg.appendChild(t);const s=t.querySelector(".product__cart");s.addEventListener("click",(async t=>{t.preventDefault();const n=ug.find((t=>t.id===e.id)),i={...e,counter:n?n.counter+1:1};if(n){const t=ug.findIndex((t=>t.id===e.id));ug[t]=i}else ug.push(i);!async function(e){localStorage.setItem("cart",JSON.stringify(e))}(ug),cg&&(s.innerHTML="producto Añadido",s.disabled=!0,setTimeout((()=>{s.innerHTML="Agregar al carrito",s.disabled=!1}),100),await ig(tg,cg.uid,ug))}))}function dg(){const e=og.value,t=ag.value;let n=[];n=""!==e?hg.filter((t=>t.category===e)):hg,"asc"===t&&(n=n.sort(((e,t)=>t.price-e.price))),"desc"===t&&(n=n.sort(((e,t)=>e.price-t.price))),rg.innerHTML="",n.forEach((e=>{lg(e)}))}var fg,pg,gg;og.addEventListener("change",(e=>{dg()})),ag.addEventListener("change",(e=>{dg()})),fg=async e=>{e?(cg=e,ug=await sg(tg,cg.uid)):ug=function(){const e=localStorage.getItem("cart");return e?JSON.parse(e):[]}(),async function(){const e=await ng(tg);rg.innerHTML="",e.forEach((e=>{lg(e)})),hg=e}()},b(eg).onAuthStateChanged(fg,pg,gg)})();
//# sourceMappingURL=shop.js.map
