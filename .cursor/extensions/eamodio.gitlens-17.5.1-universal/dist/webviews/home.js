let e,t,o,r,i,n,a,l;var c,d,h,p,u,g,m,b,f,v,w={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},6047:(e,t,o)=>{o(602)}},_={};function $(e){var t=_[e];if(void 0!==t)return t.exports;var o=_[e]={exports:{}};return w[e](o,o.exports,$),o.exports}$.d=(e,t)=>{for(var o in t)$.o(t,o)&&!$.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},$.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty($,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let s=class s{constructor(e,t,o,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=o,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function x({context:e}){return(t,o)=>{let r=new WeakMap;if("object"==typeof o)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{r.set(t,new context_provider_i(t,{context:e}))});let n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){let e=new WeakMap;i={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=n.set;i={...n,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,i)}}}function C({context:e,subscribe:t}){return(o,r)=>{"object"==typeof r?r.addInitializer(function(){new s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})}):o.constructor.addInitializer(o=>{new s(o,{context:e,callback:e=>{o[r]=e},subscribe:t})})}}let S=globalThis,P=S.ShadowRoot&&(void 0===S.ShadyCSS||S.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol(),A=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==O)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(P&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=A.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&A.set(t,e))}return e}toString(){return this.cssText}};let B=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,O),E=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,O),T=P?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return B(t)})(e):e,{is:D,defineProperty:j,getOwnPropertyDescriptor:F,getOwnPropertyNames:q,getOwnPropertySymbols:U,getPrototypeOf:W}=Object,G=globalThis,V=G.trustedTypes,K=V?V.emptyScript:"",Y=G.reactiveElementPolyfillSupport,J={toAttribute(e,t){switch(t){case Boolean:e=e?K:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Z=(e,t)=>!D(e,t),X={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&j(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:i}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let n=r?.call(this);i?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=W(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...q(e),...U(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(T(o));else void 0!==e&&t.push(T(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(P)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=S.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:J).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:J;this._$Em=r;let n=i.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){let r=this.constructor,i=this[e];if(!(((o??=r.getPropertyOptions(e)).hasChanged??Z)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:i},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,Y?.({ReactiveElement:y}),(G.reactiveElementVersions??=[]).push("2.1.1");let Q=globalThis,ee=Q.trustedTypes,et=ee?ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,eo="$lit$",er=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+er,en=`<${ei}>`,es=document,ea=()=>es.createComment(""),el=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ec=Array.isArray,ed=e=>ec(e)||"function"==typeof e?.[Symbol.iterator],eh=`[ 	
\f\r]`,ep=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eu=/-->/g,eg=/>/g,em=RegExp(`>|${eh}(?:([^\\s"'>=/]+)(${eh}*=${eh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eb=/'/g,ef=/"/g,ev=/^(?:script|style|textarea|title)$/i,ey=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ew=ey(1),e_=ey(2),ek=(ey(3),Symbol.for("lit-noChange")),e$=Symbol.for("lit-nothing"),ex=new WeakMap,eC=es.createTreeWalker(es,129);function eS(e,t){if(!ec(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==et?et.createHTML(t):t}let eP=(e,t)=>{let o=e.length-1,r=[],i,n=2===t?"<svg>":3===t?"<math>":"",a=ep;for(let t=0;t<o;t++){let o=e[t],l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,null!==(c=a.exec(o)));)h=a.lastIndex,a===ep?"!--"===c[1]?a=eu:void 0!==c[1]?a=eg:void 0!==c[2]?(ev.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=em):void 0!==c[3]&&(a=em):a===em?">"===c[0]?(a=i??ep,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?em:'"'===c[3]?ef:eb):a===ef||a===eb?a=em:a===eu||a===eg?a=ep:(a=em,i=void 0);let p=a===em&&e[t+1].startsWith("/>")?" ":"";n+=a===ep?o+en:d>=0?(r.push(l),o.slice(0,d)+eo+o.slice(d)+er+p):o+er+(-2===d?t:p)}return[eS(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let N=class N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,n=0,a=e.length-1,l=this.parts,[c,d]=eP(e,t);if(this.el=N.createElement(c,o),eC.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=eC.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(eo)){let t=d[n++],o=r.getAttribute(e).split(er),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),r.removeAttribute(e)}else e.startsWith(er)&&(l.push({type:6,index:i}),r.removeAttribute(e));if(ev.test(r.tagName)){let e=r.textContent.split(er),t=e.length-1;if(t>0){r.textContent=ee?ee.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],ea()),eC.nextNode(),l.push({type:2,index:++i});r.append(e[t],ea())}}}else if(8===r.nodeType)if(r.data===ei)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(er,e+1));)l.push({type:7,index:i}),e+=er.length-1}i++}}static createElement(e,t){let o=es.createElement("template");return o.innerHTML=e,o}};function eO(e,t,o=e,r){if(t===ek)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl,n=el(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=eO(e,i._$AS(e,t.values),i,r)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??es).importNode(t,!0);eC.currentNode=r;let i=eC.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new R(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new z(i,this,e)),this._$AV.push(t),l=o[++a]}n!==l?.index&&(i=eC.nextNode(),n++)}return eC.currentNode=es,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=e$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){el(e=eO(this,e,t))?e===e$||null==e||""===e?(this._$AH!==e$&&this._$AR(),this._$AH=e$):e!==this._$AH&&e!==ek&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ed(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==e$&&el(this._$AH)?this._$AA.nextSibling.data=e:this.T(es.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(eS(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ex.get(e.strings);return void 0===t&&ex.set(e.strings,t=new N(e)),t}k(e){ec(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let i of e)r===t.length?t.push(o=new R(this.O(ea()),this.O(ea()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=e$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=e$}_$AI(e,t=this,o,r){let i=this.strings,n=!1;if(void 0===i)(n=!el(e=eO(this,e,t,0))||e!==this._$AH&&e!==ek)&&(this._$AH=e);else{let r,a,l=e;for(e=i[0],r=0;r<i.length-1;r++)(a=eO(this,l[o+r],t,r))===ek&&(a=this._$AH[r]),n||=!el(a)||a!==this._$AH[r],a===e$?e=e$:e!==e$&&(e+=(a??"")+i[r+1]),this._$AH[r]=a}n&&!r&&this.j(e)}j(e){e===e$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===e$?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==e$)}};let L=class L extends k{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=eO(this,e,t,0)??e$)===ek)return;let o=this._$AH,r=e===e$&&o!==e$||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==e$&&(o===e$||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eO(this,e)}};let eA=Q.litHtmlPolyfillSupport;eA?.(N,R),(Q.litHtmlVersions??=[]).push("3.3.1");let eR=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,i=r._$litPart$;if(void 0===i){let e=o?.renderBefore??null;r._$litPart$=i=new R(t.insertBefore(ea(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ek}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eR.litElementHydrateSupport?.({LitElement:lit_element_i});let eI=eR.litElementPolyfillSupport;eI?.({LitElement:lit_element_i}),(eR.litElementVersions??=[]).push("4.2.1");let eB=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eE={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:Z};function eL(e){return(t,o)=>"object"==typeof o?((e=eE,t,o)=>{let{kind:r,metadata:i}=o,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=o;return function(o){let i=this[r];t.call(this,o),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function eT(e){return eL({...e,state:!0,attribute:!1})}let eD=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ez(e,t){return(o,r,i)=>{let n=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof r?o:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eD(o,r,{get(){let o=e.call(this);return void 0===o&&(null!==(o=n(this))||this.hasUpdated)&&t.call(this,o),o}})}return eD(o,r,{get(){return n(this)}})}}function eN(e,t,o){return e?t(e):o?.(e)}let IpcCall=class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,r){super(e,t,o,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let eM=new IpcCommand("core","webview/ready"),ej=new IpcCommand("core","webview/focus/changed"),eF=new IpcCommand("core","command/execute"),eq=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eU=new IpcCommand("core","telemetry/sendEvent"),eW=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let eG=new IpcCommand("core","webview/focus/didChange"),eH=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let eV="home",eK=new IpcRequest(eV,"launchpad/summary"),eY=new IpcRequest(eV,"overview/active"),eJ=new IpcRequest(eV,"overview/inactive"),eZ=new IpcRequest(eV,"overviewFilter"),eX=new IpcCommand(eV,"overview/repository/change"),eQ=new IpcNotification(eV,"overview/repository/didChange"),e0=new IpcCommand(eV,"previewEnabled/toggle"),e1=new IpcCommand(eV,"section/collapse"),e2=new IpcCommand(eV,"walkthrough/dismiss"),e5=new IpcNotification(eV,"ai/allAccess/didChange"),e8=new IpcNotification(eV,"mcp/didChange"),e6=new IpcCommand(eV,"ai/allAccess/dismiss"),e3=new IpcCommand(eV,"overview/filter/set");new IpcCommand(eV,"openInGraph");let e4=new IpcNotification(eV,"repositories/didCompleteDiscovering"),e9=new IpcNotification(eV,"previewEnabled/didChange"),e7=new IpcNotification(eV,"repository/wip/didChange"),te=new IpcNotification(eV,"repositories/didChange"),tt=new IpcNotification(eV,"walkthroughProgress/didChange"),to=new IpcNotification(eV,"integrations/didChange"),tr=new IpcNotification(eV,"launchpad/didChange"),ti=new IpcNotification(eV,"subscription/didChange"),tn=new IpcNotification(eV,"org/settings/didChange"),ts=new IpcNotification(eV,"home/ownerFilter/didChange"),ta=new IpcNotification(eV,"account/didFocus");var tl=Object.defineProperty,tc=(e,t,o)=>{let r;return(r="symbol"!=typeof t?t+"":t)in e?tl(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,o},td=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},th=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},tp=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot access private method");return o};function tu(e,t){return Object.is(e,t)}let tg=null,tm=!1,tb=1,tf=Symbol("SIGNAL");function tv(e){let t=tg;return tg=e,t}let ty={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tw(e){if(tm)throw Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===tg)return;tg.consumerOnSignalRead(e);let t=tg.nextProducerIndex++;t$(tg),t<tg.producerNode.length&&tg.producerNode[t]!==e&&tk(tg)&&t_(tg.producerNode[t],tg.producerIndexOfThis[t]),tg.producerNode[t]!==e&&(tg.producerNode[t]=e,tg.producerIndexOfThis[t]=tk(tg)?function e(t,o,r){var i;if(tx(t),t$(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let o=0;o<t.producerNode.length;o++)t.producerIndexOfThis[o]=e(t.producerNode[o],t,o)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(o)-1}(e,tg,t):0),tg.producerLastReadVersion[t]=e.version}function t_(e,t){var o;if(tx(e),t$(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(o=e.unwatched)||o.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)t_(e.producerNode[t],e.producerIndexOfThis[t])}let r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let o=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];t$(r),r.producerIndexOfThis[o]=t}}function tk(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function t$(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function tx(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function tC(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==tb){if(!t.producerMustRecompute(t)&&!function(t){t$(t);for(let o=0;o<t.producerNode.length;o++){let r=t.producerNode[o],i=t.producerLastReadVersion[o];if(i!==r.version||(e(r),i!==r.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=tb;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=tb}}(e),tw(e),e.value===tO)throw e.error;return e.value}let tS=Symbol("UNSET"),tP=Symbol("COMPUTING"),tO=Symbol("ERRORED"),tA={...ty,value:tS,dirty:!0,error:null,equal:tu,producerMustRecompute:e=>e.value===tS||e.value===tP,producerRecomputeValue(e){let t;if(e.value===tP)throw Error("Detected cycle in computations.");let o=e.value;e.value=tP;let r=(e&&(e.nextProducerIndex=0),tv(e)),i=!1;try{t=e.computation.call(e.wrapper),i=o!==tS&&o!==tO&&e.equal.call(e.wrapper,o,t)}catch(o){t=tO,e.error=o}finally{if(tv(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(tk(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)t_(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=o;return}e.value=t,e.version++}},tR=function(){throw Error()};function tI(){return tw(this),this.value}let tB={...ty,equal:tu,value:void 0},tE=Symbol("node");(e=>{var t,o,r,i;let State=class State{constructor(r,i={}){th(this,o),tc(this,t);let n=function(e){let t=Object.create(tB);t.value=e;let o=()=>(tw(t),t.value);return o[tf]=t,o}(r)[tf];if(this[tE]=n,n.wrapper=this,i){let t=i.equals;t&&(n.equal=t),n.watched=i[e.subtle.watched],n.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return tI.call(this[tE])}set(t){var o,r;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(tm)throw Error("Writes to signals not permitted during Watcher callback");o=this[tE],(null==tg?void 0:tg.consumerAllowSignalWrites)===!1&&tR(),o.equal.call(o.wrapper,o.value,t)||(o.value=t,r=o,r.version++,tb++,function e(t){if(void 0===t.liveConsumerNode)return;let o=tm;tm=!0;try{for(let o of t.liveConsumerNode)o.dirty||function(t){var o;t.dirty=!0,e(t),null==(o=t.consumerMarkedDirty)||o.call(t.wrapper??t)}(o)}finally{tm=o}}(r))}};t=tE,o=new WeakSet,e.isState=e=>"object"==typeof e&&td(o,e),e.State=State;let Computed=class Computed{constructor(t,o){th(this,i),tc(this,r);let n=function(e){let t=Object.create(tA);t.computation=e;let o=()=>tC(t);return o[tf]=t,o}(t)[tf];if(n.consumerAllowSignalWrites=!0,this[tE]=n,n.wrapper=this,o){let t=o.equals;t&&(n.equal=t),n.watched=o[e.subtle.watched],n.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return tC(this[tE])}};r=tE,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&td(i,e),e.Computed=Computed,(t=>{var o,r,i,n;t.untrack=function(e){let t,o=null;try{o=tv(null),t=e()}finally{tv(o)}return t},t.introspectSources=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(o=t[tE].producerNode)?void 0:o.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(o=t[tE].liveConsumerNode)?void 0:o.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let o=t[tE].liveConsumerNode;return!!o&&o.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let o=t[tE].producerNode;return!!o&&o.length>0};let Watcher=class Watcher{constructor(e){th(this,r),th(this,i),tc(this,o);let t=Object.create(ty);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[tE]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tp(this,i,n).call(this,t);let o=this[tE];o.dirty=!1;let r=tv(o);for(let e of t)tw(e[tE]);tv(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");tp(this,i,n).call(this,t);let o=this[tE];t$(o);for(let e=o.producerNode.length-1;e>=0;e--)if(t.includes(o.producerNode[e].wrapper)){t_(o.producerNode[e],o.producerIndexOfThis[e]);let t=o.producerNode.length-1;if(o.producerNode[e]=o.producerNode[t],o.producerIndexOfThis[e]=o.producerIndexOfThis[t],o.producerNode.length--,o.producerIndexOfThis.length--,o.nextProducerIndex--,e<o.producerNode.length){let t=o.producerIndexOfThis[e],r=o.producerNode[e];tx(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[tE].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};o=tE,r=new WeakSet,i=new WeakSet,n=function(t){for(let o of t)if(!(0,e.isComputed)(o)&&!(0,e.isState)(o))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>td(r,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=tg)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(b||(b={}));let tL=(e=null)=>new b.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=tL();constructor(e={}){let t=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptors(e),r=Object.create(t);for(let e in o)Object.defineProperty(r,e,o[e]);let i=this;return new Proxy(r,{get:(e,t,o)=>(i.#o(t),Reflect.get(e,t,o)),has:(e,t)=>(i.#o(t),t in e),ownKeys:e=>(i.#t.get(),Reflect.ownKeys(e)),set(e,t,o,r){let n=Reflect.set(e,t,o,r);return i.#r(t),i.#i(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],i.#r(t),i.#i()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#o(e){let t=this.#e.get(e);void 0===t&&(t=tL(),this.#e.set(e,t)),t.get()}#r(e){let t=this.#e.get(e);t&&t.set(null)}#i(){this.#t.set(null)}};let tT=Symbol("SignalWatcherBrand"),tD=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),tz=new WeakMap;function tN(e){return!0===e[tT]?e:class extends e{constructor(){super(...arguments),this._$St=new b.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new b.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new b.subtle.Watcher(function(){let e=tz.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});tz.set(e,this),tD.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,o){this._$So=!0,super.requestUpdate(e,t,o)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);let t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}let tM=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:tj}={M:eo,P:er,A:ei,C:1,L:eP,R:M,D:ed,V:eO,I:R,H:k,N:I,U:L,B:H,F:z},tF=()=>document.createComment(""),tq=(e,t,o)=>{let r=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new tj(r.insertBefore(tF(),i),r.insertBefore(tF(),i),e,e.options);else{let t=o._$AB.nextSibling,n=o._$AM,a=n!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==i||a){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return o},tU=(e,t,o=e)=>(e._$AI(t,o),e),tW={},tG=e=>{e._$AR(),e._$AA.remove()},tH=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),tH(e,t);return!0},tV=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},tK=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),tZ(t)}};function tY(e){void 0!==this._$AN?(tV(this),this._$AM=e,tK(this)):this._$AM=e}function tJ(e,t=!1,o=0){let r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)tH(r[e],!1),tV(r[e]);else null!=r&&(tH(r,!1),tV(r));else tH(this,e)}let tZ=e=>{2==e.type&&(e._$AP??=tJ,e._$AQ??=tY)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),tK(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tH(this,e),tV(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let watch_h=class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new b.Computed(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()});let e=this._$Su=new b.subtle.Watcher(()=>{var t;null==(t=this._$SO)||t._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null==(e=this._$SO)||e.m(this))}commit(){this.setValue(b.subtle.untrack(()=>{var e;return null==(e=this._$SW)?void 0:e.get()}))}render(e){return b.subtle.untrack(()=>e.get())}update(e,[t]){var o;return null!=this._$SO||(this._$SO=null==(o=e.options)?void 0:o.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),b.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};let tX=tM(watch_h),tQ=e=>(t,...o)=>e(t,...o.map(e=>e instanceof b.State||e instanceof b.Computed?tX(e):e));tQ(ew),tQ(e_),b.State,b.Computed;let t0=(e,t)=>new b.State(e,t);let AsyncComputed=class AsyncComputed{#n=!1;#s=new b.State("initial");get status(){this.run();let e=this.#s.get();return this.#n?"pending":e}#a;get value(){return this.run(),this.#a.get()}#l=new b.State(void 0);get error(){return this.run(),this.#l.get()}#c=new b.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#a=new b.State(t?.initialValue),this.#d=new b.Computed(()=>{let t=++this.#p;"pending"!==b.subtle.untrack(()=>this.#s.get())&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#s.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then(e=>{t===this.#p&&(this.#s.set("complete"),this.#a.set(e),this.#l.set(void 0),this.#c.get().resolve(e))},e=>{t===this.#p&&(this.#s.set("error"),this.#l.set(e),this.#a.set(void 0),this.#c.get().reject(e))})}),this.#h=new b.subtle.Watcher(async()=>{this.#n=!0,this.#h.watch()}),this.#h.watch(this.#d)}get(){let e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}};function t1(e,t,o){let r,i,n,a,l,c,d,h,p,u,g=0;null!=o&&({edges:c,maxWait:d,signal:h,aggregator:p}=o);let m="leading"===(c??="trailing")||"both"===c,b="trailing"===c||"both"===c;function f(){if(null!=r){g=Date.now();let t=r,o=u;return u=void 0,r=void 0,n=e.apply(o,t)}}function v(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=l&&(clearTimeout(l),l=void 0)}function _(){v(),w(),u=void 0,r=void 0,i=void 0,g=0}function $(...e){if(h?.aborted)return;let o=Date.now();null!=p&&null!=r?r=p(r,e):(u=this,r=e);let c=null==a&&null==l;i=o,v();let w=Date.now();if(i=w,a=setTimeout(()=>{a=void 0,function(e){let o=e-(i??0),r=e-g;return null==i||o>=t||o<0||null!=d&&r>=d}(Date.now())&&b&&f(),_()},t),null!=d&&!l){let e=d-(w-g);e>0?l=setTimeout(()=>{l=void 0,b&&null!=r&&f(),g=Date.now()},e):(b&&null!=r&&f(),_())}return m&&c?f():n}return $.cancel=_,$.flush=function(){return v(),w(),f()},$.pending=function(){return null!=a||null!=l},h?.addEventListener("abort",_,{once:!0}),$}let AsyncComputedState=class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=t0(0),this._state=t0(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){let e=this._state.get();this._computed=new AsyncComputed(async e=>{this._invalidate.get();let t=await this._fetch(e);return this._state.set(t),t},e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){if(e)return void this._runCore();null==this._runDebounced&&(this._runDebounced=t1(this._runCore.bind(this),this._debounce)),this._runDebounced()}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:o,complete:r,error:i})=>{switch(e.status){case"initial":return t?.();case"pending":return o?.();case"complete":return r?.(e.value);case"error":return i?.(e.error)}})(this.computed,e)}};let ActiveOverviewState=class ActiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eY,void 0),t),this._ipc=e,this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case to.is(e):case te.is(e):case e7.is(e):case eQ.is(e):this.run(!0)}})}dispose(){this._disposable?.dispose()}changeRepository(){this._ipc.sendCommand(eX,void 0)}};let InactiveOverviewState=class InactiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eJ,void 0),t),this._ipc=e,this.filter=new SignalObjectImpl({}),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case te.is(e):this.run(!0);break;case ts.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0);break;case eQ.is(e):this.run(!0)}}),this._ipc.sendRequest(eZ,void 0).then(e=>{this.filter.recent=e.recent,this.filter.stale=e.stale})}dispose(){this._disposable?.dispose()}};let{fromCharCode:t2}=String;new TextEncoder;let t5=new TextDecoder,t8=new WeakMap;function t6(e,t){return function(o,r,i){let n=t8.get(o.constructor);null==n&&t8.set(o.constructor,n=[]),n.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=t8.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};function t3(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}$(6047);var t4=((c=t4||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),t9=((d=t9||{}).AngleBracketLeftHeavy="❰",d.AngleBracketRightHeavy="❱",d.ArrowBack="↩",d.ArrowDown="↓",d.ArrowDownUp="⇵",d.ArrowDropRight="⤷",d.ArrowHeadRight="➤",d.ArrowLeft="←",d.ArrowLeftDouble="⇐",d.ArrowLeftRight="↔",d.ArrowLeftRightDouble="⇔",d.ArrowLeftRightDoubleStrike="⇎",d.ArrowLeftRightLong="⟷",d.ArrowRight="→",d.ArrowRightDouble="⇒",d.ArrowRightHollow="⇨",d.ArrowUp="↑",d.ArrowUpDown="⇅",d.ArrowUpRight="↗",d.ArrowsHalfLeftRight="⇋",d.ArrowsHalfRightLeft="⇌",d.ArrowsLeftRight="⇆",d.ArrowsRightLeft="⇄",d.Asterisk="∗",d.Bullseye="◎",d.Check="✔",d.Dash="—",d.Dot="•",d.Ellipsis="…",d.EnDash="–",d.Envelope="✉",d.EqualsTriple="≡",d.Flag="⚑",d.FlagHollow="⚐",d.MiddleEllipsis="⋯",d.MuchLessThan="≪",d.MuchGreaterThan="≫",d.Pencil="✎",d.Space=" ",d.SpaceThin=" ",d.SpaceThinnest=" ",d.SquareWithBottomShadow="❏",d.SquareWithTopShadow="❐",d.Warning="⚠",d.ZeroWidthSpace="​",d);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var t7=((h=t7||{}).File="file",h.Git="git",h.GitHub="github",h.GitLens="gitlens",h.GitLensAIMarkdown="gitlens-ai-markdown",h.PRs="pr",h.Remote="vscode-remote",h.Vsls="vsls",h.VslsScc="vsls-scc",h.Virtual="vscode-vfs",h);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let oe="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",ot=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${oe}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${oe}`,graph:`https://gitkraken.com/solutions/commit-graph?${oe}`,launchpad:`https://gitkraken.com/solutions/launchpad?${oe}`,platform:`https://gitkraken.com/devex?${oe}`,pricing:`https://gitkraken.com/gitlens/pricing?${oe}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${oe}`,security:`https://help.gitkraken.com/gitlens/security?${oe}`,workspaces:`https://gitkraken.com/solutions/workspaces?${oe}`,cli:`https://gitkraken.com/cli?${oe}`,browserExtension:`https://gitkraken.com/browser-extension?${oe}`,desktop:`https://gitkraken.com/git-client?${oe}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${oe}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${oe}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${oe}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${oe}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${oe}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${oe}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${oe}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${oe}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${oe}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${oe}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${oe}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${oe}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${oe}`}),oo=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,or=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,oi=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],on=new Map,os=new Map;function oa(e,n){let a=("number"==typeof e?e:e.getTime())-new Date().getTime();for(let[e,l,c,d]of oi){let h=Math.abs(a);if(h>=l||1e3===l){if(n){if(null==t&&(t=null!=i?i.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(i=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===t||t?.startsWith("en-")){let e=Math.round(h/c);return`${e}${d}`}return null==i&&(i=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),i.format(Math.round(a/c),e)}return null==r&&(r=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(a/c),e)}}return""}let ol=["th","st","nd","rd"];function oc(e,t){null==e&&(e="decimal");let r=`${t??""}:${e}`,i=os.get(r);if(null==i){let n,a={localeMatcher:"best fit",style:e};n=null==t?o:"system"===t?void 0:[t],i=new Intl.NumberFormat(n,a),os.set(r,i)}return i.format}function od(e){let[t,o]=t3(e);return 1e3*t+Math.floor(o/1e6)}let oh=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,op=new Map;function ou(e){return 95===e||e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57}function og(e,t,o){let r;if(null==o)return n??=oc(),`${n(t)} ${e}${1===t?"":"s"}`;let i=1===t?e:o.plural??`${e}s`;return o.only?i:(0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(n??=oc(),r=n(t)),`${r}${o.infix??" "}${i}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var om=((p=om||{})[p.Off=0]="Off",p[p.Error=1]="Error",p[p.Warn=2]="Warn",p[p.Info=3]="Info",p[p.Debug=4]="Debug",p);let ob=["accessToken","password","token"],of=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of ob)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(ob);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=ov(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ov(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function ov(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let oy=new WeakMap,ow={enabled:e=>of.enabled(e)||of.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":of.error(void 0,t,o,...r);break;case"warn":of.warn(t,o,...r);break;case"info":of.log(t,o,...r);break;default:of.debug(t,o,...r)}}},o_=0x40000000-1;function ok(){let e=0;return{get current(){return e},next:function(){return e===o_&&(e=0),++e},reset:function(){e=0}}}let o$=ok(),ox=new Map;function oC(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function oS(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?o$.current:void 0,r=o$.next();return{scopeId:r,prevScopeId:o,prefix:`${oC(r,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=oS(e,void 0),of.configure({name:e,createChannel:function(e){return{name:e,appendLine:of.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?of.log(this.scope,e,...t):of.log(e,t.shift(),...t)}};let oP="graph";new IpcCommand(oP,"chooseRepository"),new IpcCommand(oP,"dblclick"),new IpcCommand(oP,"dblclick"),new IpcCommand(oP,"avatars/get"),new IpcCommand(oP,"refs/metadata/get"),new IpcCommand(oP,"rows/get"),new IpcCommand(oP,"pullRequest/openDetails"),new IpcCommand(oP,"search/openInView"),new IpcCommand(oP,"columns/update"),new IpcCommand(oP,"refs/update/visibility"),new IpcCommand(oP,"filters/update/excludeTypes"),new IpcCommand(oP,"configuration/update"),new IpcCommand(oP,"search/update/mode"),new IpcCommand(oP,"filters/update/includedRefs"),new IpcCommand(oP,"selection/update"),new IpcRequest(oP,"chooseRef"),new IpcRequest(oP,"rows/ensure"),new IpcRequest(oP,"counts"),new IpcRequest(oP,"row/hover/get"),new IpcRequest(oP,"search"),new IpcNotification(oP,"repositories/integration/didChange"),new IpcNotification(oP,"didChange",!0,!0),new IpcNotification(oP,"configuration/didChange");let oO=new IpcNotification(oP,"subscription/didChange");new IpcNotification(oP,"org/settings/didChange"),new IpcNotification(oP,"avatars/didChange"),new IpcNotification(oP,"mcp/didChange"),new IpcNotification(oP,"branchState/didChange"),new IpcNotification(oP,"refs/didChangeMetadata"),new IpcNotification(oP,"columns/didChange"),new IpcNotification(oP,"scrollMarkers/didChange"),new IpcNotification(oP,"refs/didChangeVisibility"),new IpcNotification(oP,"rows/didChange",void 0,!0),new IpcNotification(oP,"rows/stats/didChange"),new IpcNotification(oP,"selection/didChange"),new IpcNotification(oP,"workingTree/didChange"),new IpcNotification(oP,"didSearch"),new IpcNotification(oP,"didFetch"),new IpcNotification(oP,"featurePreview/didStart");let oA="timeline";new IpcRequest(oA,"ref/choose"),new IpcRequest(oA,"path/choose"),new IpcCommand(oA,"point/open"),new IpcCommand(oA,"config/update"),new IpcCommand(oA,"scope/update");let oR=new IpcNotification(oA,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(ti.is(e)||oO.is(e)||oR.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(eq,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(eU,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let oI=/\(([\s\S]*)\)/,oB=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,oE=/\s?=.*$/;function oL(e,t=!1){let o,r,i,n,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:o,if:r,enter:i,exit:n,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e),l>0&&(d=!0,h=!0),h&&(c=!0);let p=of.isDebugging,u=t?of.debug:of.log,g=p?"debug":"info";return(e,t,m)=>{let b,f;if("function"==typeof m.value?(b=m.value,f="value"):"function"==typeof m.get&&(b=m.get,f="get"),null==b||null==f)throw Error("Not supported");let v=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(oB,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let i=oI.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(oE,"")):[]}(b):[];m[f]=function(...e){var m,f;let w,_;if(!p&&!of.enabled(g)||null!=r&&!r.apply(this,e))return b.apply(this,e);let $=o$.current,x=o$.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let i=oy.get(t);return i?.(e,o)??o}(this):void 0,S=C?c?`${oC(x,$)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(S=a({id:x,instance:this,instanceName:C??"",name:t,prefix:S},...e)),c&&(m={scopeId:x,prevScopeId:$,prefix:S},m={prevScopeId:o$.current,...m},ox.set(x,m),w=m);let P=null!=i?i(...e):"";if(!1===o||0===e.length)_="",d||u.call(of,`${S}${P}`);else{let t,r,i,n;_="";let a=-1;for(n of e){if(r=v[++a],null!=(t=o?.[a])){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}i=String(t(n))}else _.length>0&&(_+=", "),i=of.toLoggable(n);_+=r?`${r}=${i}`:i}d||u.call(of,_?`${S}${P}(${_})`:`${S}${P}`)}if(d||h||null!=n){let t,o=h?t3():void 0,r=e=>{let t=void 0!==o?` [${od(o)}ms]`:"";d?of.error(e,_?`${S}${P}(${_})`:`${S}${P}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):of.error(e,S,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),c&&ox.delete(x)};try{t=b.apply(this,e)}catch(e){throw r(e),e}let i=e=>{let t,r,i,a;if(null!=o?(t=od(o))>500?(r=of.warn,i=` [*${t}ms] (slow)`):(r=u,i=` [${t}ms]`):(i="",r=u),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${of.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,r=(e,...t)=>of.error(null,e,...t)):a="completed";d?(0===l||t>l)&&r.call(of,_?`${S}${P}(${_}) ${a}${w?.exitDetails||""}${i}`:`${S}${P} ${a}${w?.exitDetails||""}${i}`):r.call(of,_?`${S}(${_}) ${a}${w?.exitDetails||""}${i}`:`${S} ${a}${w?.exitDetails||""}${i}`),c&&ox.delete(x)};return null!=t&&null!=(f=t)&&(f instanceof Promise||"function"==typeof f?.then)?t.then(i,r):i(t),t}return b.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:oS(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ow,this._time=t3(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=t3(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=t3(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,r]=t3(this._time),i=1e3*o+Math.floor(r/1e6),n=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${i}ms]${e?.suffix??""}`)}};function oT(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function oD(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}(f||(f={})).on=function(e,t,o,r){let i=!1;if("string"==typeof e){let n=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,n,r??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,n,r??!0))}}}let n=function(e){o(e,this)};return e.addEventListener(t,n,r??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,n,r??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let oz={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?oz:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var oN=Object.defineProperty,oM=Object.getOwnPropertyDescriptor,oj=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?oM(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&oN(t,o,n),n};let oF=ok();function oq(){return`webview:${oF.next()}`}let oU=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=a??=acquireVsCodeApi(),this._disposable=f.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=ox.get(o$.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let r=function(e,t,...o){return(t?.provider??ow).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(oS(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var r,i;let e=(r=o.method,i=o.completionId,`${r}|${i}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=oq();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=oq(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var i,n;let a,l=(i=e,n=t,`${i}|${n}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(l)}a=setTimeout(()=>{c.call(this),r(Error(`Timed out waiting for completion of ${l}`))},(of.isDebugging?60:5)*6e4),this._pendingHandlers.set(l,e=>{if(c.call(this),e.method===eW.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function oW(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}oj([oL({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],oU.prototype,"onMessageReceived",1),oj([oL({args:{0:e=>e.method,1:!1}},!0)],oU.prototype,"sendCommand",1),oj([oL({args:{0:e=>e.method,1:!1,2:!1}},!0)],oU.prototype,"sendRequest",1),oj([oL({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],oU.prototype,"postMessage",1),oU=oj([(u=e=>`${e.appName}(HostIpc)`,e=>void oy.set(e,u))],oU);let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=oW(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oW(Math.max(Math.min(1,t),0),3),this.l=oW(Math.max(Math.min(1,o),0),3),this.a=oW(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=e.a,n=Math.max(t,o,r),a=Math.min(t,o,r),l=0,c=0,d=(a+n)/2,h=n-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),n){case t:l=(o-r)/h+6*(o<r);break;case o:l=(r-t)/h+2;break;case r:l=(t-o)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,i=e.h/360,{s:n,l:a,a:l}=e;if(0===n)t=o=r=a;else{let e=a<.5?a*(1+n):a+n-a*n,l=2*a-e;t=HSLA._hue2rgb(l,e,i+1/3),o=HSLA._hue2rgb(l,e,i),r=HSLA._hue2rgb(l,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),l)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oW(Math.max(Math.min(1,t),0),3),this.v=oW(Math.max(Math.min(1,o),0),3),this.a=oW(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=Math.max(t,o,r),n=i-Math.min(t,o,r);return new HSVA(Math.round(60*(0===n?0:i===t?((o-r)/n%6+6)%6:i===o?(r-t)/n+2:(t-o)/n+4)),0===i?0:n/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:i}=e,n=r*o,a=n*(1-Math.abs(t/60%2-1)),l=r-n,[c,d,h]=[0,0,0];return t<60?(c=n,d=a):t<120?(c=a,d=n):t<180?(d=n,h=a):t<240?(d=a,h=n):t<300?(c=a,h=n):t<=360&&(c=n,h=a),new RGBA(c=Math.round((c+l)*255),d=Math.round((d+l)*255),h=Math.round((h+l)*255),i)}};function oG(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(oG(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return oW(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(t,o,r,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,i=o+r*(1-o);if(i<1e-6)return Color.transparent;let n=this.rgba.r*o/i+t.r*r*(1-o)/i;return new Color(new RGBA(n,this.rgba.g*o/i+t.g*r*(1-o)/i,this.rgba.b*o/i+t.b*r*(1-o)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${oH(e.rgba.r)}${oH(e.rgba.g)}${oH(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-r)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(r-i)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function oH(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oV=new Emitter,oK=oV.event;function oY(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,i=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),n=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=oG("--vscode-editor-background",o),l=oG("--vscode-editor-foreground",o);return l||(l=oG("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:i,isHighContrastTheme:n,isInitializing:null==e}}var oJ=Object.defineProperty,oZ=Object.getOwnPropertyDescriptor,oX=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?oZ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&oJ(t,o,n),n};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){var e;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new oU(this.name),this._ipc.sendCommand(eM,void 0);let t=JSON.parse((e=this.bootstrap,t5.decode(function(e){let t=globalThis.atob(e),o=t.length,r=new Uint8Array(o),i=0,n=o-o%8;for(;i<n;i+=8)r[i]=t.charCodeAt(i),r[i+1]=t.charCodeAt(i+1),r[i+2]=t.charCodeAt(i+2),r[i+3]=t.charCodeAt(i+3),r[i+4]=t.charCodeAt(i+4),r[i+5]=t.charCodeAt(i+5),r[i+6]=t.charCodeAt(i+6),r[i+7]=t.charCodeAt(i+7);for(;i<o;i++)r[i]=t.charCodeAt(i);return r}(e))));this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(t),this.onPersistState?.(t);let o=oY();null!=this.onThemeUpdated&&(this.onThemeUpdated(o),this.disposables.push(function(){let e=new MutationObserver(e=>{oV.fire(oY(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(oK(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(t,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case eG.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case eH.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=t1(e=>{this._ipc.sendCommand(ej,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ew`<slot></slot>`}};oX([eL({type:String})],GlAppHost.prototype,"name",2),oX([eL({type:String})],GlAppHost.prototype,"placement",2),oX([x({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oX([x({context:"logger"})],GlAppHost.prototype,"_logger",2),oX([x({context:"promos"})],GlAppHost.prototype,"_promos",2),oX([x({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oX([eL({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oQ=E`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;E`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${oQ}
	}
`;let o0=E`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,o1=E`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,o2=E`
	:focus-visible {
		${o0}
	}
`,o5=E`
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
`;E`
	* {
		box-sizing: border-box;
	}
`;let o8=E`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${o0}
	}
	a:hover {
		text-decoration: underline;
	}
`,o6=E`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;E`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let o3=E`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}
`,o4=E`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}

	.home__alerts {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__alerts:not([has-alerts]) {
		display: none;
	}

	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 1.2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__header {
		flex: none;
	}

	.home__header {
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
		padding: 0.4rem;
	}

	.home__aux:has(gl-promo-banner:has(gl-promo:not([has-promo])):only-child) {
		display: none;
	}

	summary {
		font-size: 1.3rem;
		font-weight: normal;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		cursor: pointer;
	}

	details[open] summary {
		margin-block-end: 0.8rem;
	}

	gl-home-header {
		margin: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`;E`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;let o9=E`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		--color-alert-foreground: var(--color-alert-infoForeground);
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		--color-alert-foreground: var(--color-alert-warningForeground);
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		--color-alert-foreground: var(--color-alert-errorForeground);
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
	.alert a:not(:hover) {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-foreground));
	}
	.alert a:hover {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-activeForeground));
	}
`,o7=E`
	.nav-list {
		margin-left: -1.2rem;
		margin-right: -1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.2rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,re=E`
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px 4px 4px;
		margin-top: 4px;
		align-items: stretch;
		cursor: pointer;
		border-radius: 4px;
	}
	.walkthrough-progress:focus-within,
	.walkthrough-progress:hover {
		background-color: var(--gl-walkthrough-hover-background);
	}

	.walkthrough-progress__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-foreground--85);
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
		position: absolute;
		right: 0.4rem;
	}
	.walkthrough-progress__bar::-webkit-progress-bar {
		border-radius: 2px;
		background: var(--color-alert-neutralBackground);
	}
	.walkthrough-progress__bar::-webkit-progress-value {
		background: var(--vscode-progressBar-background, blue);
		transition: 0.1s ease-in;
		border-radius: 2px;
	}
	.walkthrough-progress__bar {
		pointer-events: none;
		border-radius: 2px;
		width: 100%;
		background: unset;
		height: 4px;
		flex-shrink: 0;
		z-index: 2;
	}
`;let HomeStateProvider=class HomeStateProvider{constructor(e,t,o){this._ipc=o,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(t=>{switch(!0){case te.is(t):this._state.repositories=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e4.is(t):this._state.repositories=t.params.repositories,this._state.discovering=t.params.discovering,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tt.is(t):this._state.walkthroughProgress=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case ti.is(t):this._state.subscription=t.params.subscription,this._state.avatar=t.params.avatar,this._state.organizationsCount=t.params.organizationsCount,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case tn.is(t):this._state.orgSettings=t.params.orgSettings,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case to.is(t):this._state.hasAnyIntegrationConnected=t.params.hasAnyIntegrationConnected,this._state.integrations=t.params.integrations,this._state.ai=t.params.ai,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e9.is(t):this._state.previewEnabled=t.params.previewEnabled,this._state.previewCollapsed=t.params.previewCollapsed,this._state.aiEnabled=t.params.aiEnabled,this._state.experimentalComposerEnabled=t.params.experimentalComposerEnabled,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate();break;case e5.is(t):this._state.aiAllAccessBannerCollapsed=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate();break;case e8.is(t):this._state.mcpBannerCollapsed=t.params.mcpBannerCollapsed,this._state.mcpCanAutoRegister=t.params.mcpCanAutoRegister,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate()}})}get state(){return this._state}dispose(){this.disposable.dispose()}};var rt=((g=rt||{})[g.VerificationRequired=-1]="VerificationRequired",g[g.Community=0]="Community",g[g.DeprecatedPreview=1]="DeprecatedPreview",g[g.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",g[g.Trial=3]="Trial",g[g.TrialExpired=4]="TrialExpired",g[g.TrialReactivationEligible=5]="TrialReactivationEligible",g[g.Paid=6]="Paid",g);let ro=["community","community-with-account","student","pro","advanced","teams","enterprise"],rr=["student","pro","advanced","teams","enterprise"];function ri(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}function rn(e){return null!=e?ro.indexOf(e):-1}function rs(e){return`GitLens ${ri(e)}`}function ra(e,t){var o;return o=e.plan.effective.expiresOn,null!=o?function(e,t,o,r){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=r??Math.floor;switch(o){case"days":return n(i/864e5);case"hours":return n(i/36e5);case"minutes":return n(i/6e4);case"seconds":return n(i/1e3);default:return i}}(Date.now(),new Date(o),t,Math.round):void 0}function rl(e){var t;return t=e.plan.actual.id,rr.includes(t)}function rc(e){return null!=e.state?e.state===rt.Trial:e.plan.actual.id!==e.plan.effective.id}function rd(e){return null!=e&&(e===rt.Trial||e===rt.Paid)}function rh(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let rp=E`
	:host {
		display: flex;
	}

	.chip {
		display: flex;
		gap: 0.6rem;
		align-items: center;

		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}

	.chip:focus-visible {
		${o0}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.4rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		padding-bottom: 0.4rem;
	}

	.header__actions {
		flex: none;
		display: flex;
		gap: 0.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.header__title {
		flex: 1;
		font-size: 1.5rem;
		line-height: 1.7;
		font-weight: 600;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`,ru=E`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,rg=E`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var rm=Object.defineProperty,rb=Object.defineProperties,rf=Object.getOwnPropertyDescriptor,rv=Object.getOwnPropertyDescriptors,ry=Object.getOwnPropertySymbols,rw=Object.prototype.hasOwnProperty,r_=Object.prototype.propertyIsEnumerable,rk=e=>{throw TypeError(e)},r$=(e,t,o)=>t in e?rm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,rx=(e,t)=>{for(var o in t||(t={}))rw.call(t,o)&&r$(e,o,t[o]);if(ry)for(var o of ry(t))r_.call(t,o)&&r$(e,o,t[o]);return e},rC=(e,t)=>rb(e,rv(t)),rS=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?rf(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&rm(t,o,n),n},rP=(e,t,o)=>t.has(e)||rk("Cannot "+o),rO=new Map,rA=new WeakMap;function rR(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function rI(e,t){rO.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function rB(e,t,o){let r=rA.get(e);if(null==r?void 0:r[t])return rR(r[t],o.dir);let i=rO.get(t);return i?rR(i,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=e$,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===e$||null==e)return this._t=void 0,this.it=e;if(e===ek)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let rE=tM(unsafe_html_e);var rL=E`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,rT=E`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let rD=new Set,rz=new Map,rN="ltr",rM="en",rj="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(rj){let e=new MutationObserver(rq);rN=document.documentElement.dir||"ltr",rM=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rF(...e){e.map(e=>{let t=e.$code.toLowerCase();rz.has(t)?rz.set(t,Object.assign(Object.assign({},rz.get(t)),e)):rz.set(t,e),l||(l=e)}),rq()}function rq(){rj&&(rN=document.documentElement.dir||"ltr",rM=document.documentElement.lang||navigator.language),[...rD.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rD.add(this.host)}hostDisconnected(){rD.delete(this.host)}dir(){return`${this.host.dir||rN}`.toLowerCase()}lang(){return`${this.host.lang||rM}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),i=null==r?void 0:r.language.toLowerCase(),n=null!=(o=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?o:"",a=rz.get(`${i}-${n}`),l=rz.get(i);return{locale:r,language:i,region:n,primary:a,secondary:l}}exists(e,t){var o;let{primary:r,secondary:i}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!i&&!!i[e]||!!t.includeFallback&&!!l&&!!l[e]}term(e,...t){let o,{primary:r,secondary:i}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(i&&i[e])o=i[e];else{if(!l||!l[e])return String(e);o=l[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var rU={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rF(rU);var rW=class extends LocalizeController{};rF(rU);var rG=E`
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
`,rH=class extends lit_element_i{constructor(){let e;super(),(e=v).has(this)?rk("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,rx({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",n=i;if("version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(n=" v"+r.version),i&&n&&i===n)return}attributeChangedCallback(e,t,o){let r,i;if(rP(this,r=v,"read from private field"),i?!i.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),rP(this,e=v,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};v=new WeakMap,rH.version="2.20.1",rH.dependencies={},rS([eL()],rH.prototype,"dir",2),rS([eL()],rH.prototype,"lang",2);let rV=Math.min,rK=Math.max,rY=Math.round,rJ=Math.floor,rZ=e=>({x:e,y:e}),rX={left:"right",right:"left",bottom:"top",top:"bottom"},rQ={start:"end",end:"start"};function r0(e,t){return"function"==typeof e?e(t):e}function r1(e){return e.split("-")[0]}function r2(e){return e.split("-")[1]}function r5(e){return"x"===e?"y":"x"}function r8(e){return"y"===e?"height":"width"}let r6=new Set(["top","bottom"]);function r3(e){return r6.has(r1(e))?"y":"x"}function r4(e){return e.replace(/start|end/g,e=>rQ[e])}let r9=["left","right"],r7=["right","left"],ie=["top","bottom"],it=["bottom","top"];function io(e){return e.replace(/left|right|bottom|top/g,e=>rX[e])}function ir(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function ii(e){let{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function is(e,t,o){let r,{reference:i,floating:n}=e,a=r3(t),l=r5(r3(t)),c=r8(l),d=r1(t),h="y"===a,p=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,g=i[c]/2-n[c]/2;switch(d){case"top":r={x:p,y:i.y-n.height};break;case"bottom":r={x:p,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:u};break;case"left":r={x:i.x-n.width,y:u};break;default:r={x:i.x,y:i.y}}switch(r2(t)){case"start":r[l]-=g*(o&&h?-1:1);break;case"end":r[l]+=g*(o&&h?-1:1)}return r}let ia=async(e,t,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:a}=o,l=n.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(t)),d=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=is(d,r,c),u=r,g={},m=0;for(let o=0;o<l.length;o++){let{name:n,fn:b}=l[o],{x:f,y:v,data:w,reset:_}=await b({x:h,y:p,initialPlacement:r,placement:u,strategy:i,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=f?f:h,p=null!=v?v:p,g={...g,[n]:{...g[n],...w}},_&&m<=50&&(m++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:h,y:p}=is(d,u,c)),o=-1)}return{x:h,y:p,placement:u,strategy:i,middlewareData:g}};async function il(e,t){var o;void 0===t&&(t={});let{x:r,y:i,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=r0(t,e),m=ir(g),b=l[u?"floating"===p?"reference":"floating":p],f=ii(await n.getClippingRect({element:null==(o=await (null==n.isElement?void 0:n.isElement(b)))||o?b:b.contextElement||await (null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),_=await (null==n.isElement?void 0:n.isElement(w))&&await (null==n.getScale?void 0:n.getScale(w))||{x:1,y:1},$=ii(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:w,strategy:c}):v);return{top:(f.top-$.top+m.top)/_.y,bottom:($.bottom-f.bottom+m.bottom)/_.y,left:(f.left-$.left+m.left)/_.x,right:($.right-f.right+m.right)/_.x}}let ic=new Set(["left","top"]);async function id(e,t){let{placement:o,platform:r,elements:i}=e,n=await (null==r.isRTL?void 0:r.isRTL(i.floating)),a=r1(o),l=r2(o),c="y"===r3(o),d=ic.has(a)?-1:1,h=n&&c?-1:1,p=r0(t,e),{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}function ih(){return"undefined"!=typeof window}function ip(e){return im(e)?(e.nodeName||"").toLowerCase():"#document"}function iu(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ig(e){var t;return null==(t=(im(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function im(e){return!!ih()&&(e instanceof Node||e instanceof iu(e).Node)}function ib(e){return!!ih()&&(e instanceof Element||e instanceof iu(e).Element)}function iv(e){return!!ih()&&(e instanceof HTMLElement||e instanceof iu(e).HTMLElement)}function iy(e){return!!ih()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof iu(e).ShadowRoot)}let iw=new Set(["inline","contents"]);function i_(e){let{overflow:t,overflowX:o,overflowY:r,display:i}=iB(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!iw.has(i)}let ik=new Set(["table","td","th"]),i$=[":popover-open",":modal"];function ix(e){return i$.some(t=>{try{return e.matches(t)}catch{return!1}})}let iC=["transform","translate","scale","rotate","perspective"],iS=["transform","translate","scale","rotate","perspective","filter"],iP=["paint","layout","strict","content"];function iO(e){let t=iA(),o=ib(e)?iB(e):e;return iC.some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||iS.some(e=>(o.willChange||"").includes(e))||iP.some(e=>(o.contain||"").includes(e))}function iA(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let iR=new Set(["html","body","#document"]);function iI(e){return iR.has(ip(e))}function iB(e){return iu(e).getComputedStyle(e)}function iE(e){return ib(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function iL(e){if("html"===ip(e))return e;let t=e.assignedSlot||e.parentNode||iy(e)&&e.host||ig(e);return iy(t)?t.host:t}function iT(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let i=function e(t){let o=iL(t);return iI(o)?t.ownerDocument?t.ownerDocument.body:t.body:iv(o)&&i_(o)?o:e(o)}(e),n=i===(null==(r=e.ownerDocument)?void 0:r.body),a=iu(i);if(n){let e=iD(a);return t.concat(a,a.visualViewport||[],i_(i)?i:[],e&&o?iT(e):[])}return t.concat(i,iT(i,[],o))}function iD(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function iz(e){let t=iB(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=iv(e),n=i?e.offsetWidth:o,a=i?e.offsetHeight:r,l=rY(o)!==n||rY(r)!==a;return l&&(o=n,r=a),{width:o,height:r,$:l}}function iN(e){return ib(e)?e:e.contextElement}function iM(e){let t=iN(e);if(!iv(t))return rZ(1);let o=t.getBoundingClientRect(),{width:r,height:i,$:n}=iz(t),a=(n?rY(o.width):o.width)/r,l=(n?rY(o.height):o.height)/i;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let ij=rZ(0);function iF(e){let t=iu(e);return iA()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ij}function iq(e,t,o,r){var i;void 0===t&&(t=!1),void 0===o&&(o=!1);let n=e.getBoundingClientRect(),a=iN(e),l=rZ(1);t&&(r?ib(r)&&(l=iM(r)):l=iM(e));let c=(void 0===(i=o)&&(i=!1),r&&(!i||r===iu(a))&&i)?iF(a):rZ(0),d=(n.left+c.x)/l.x,h=(n.top+c.y)/l.y,p=n.width/l.x,u=n.height/l.y;if(a){let e=iu(a),t=r&&ib(r)?iu(r):r,o=e,i=iD(o);for(;i&&r&&t!==o;){let e=iM(i),t=i.getBoundingClientRect(),r=iB(i),n=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=n,h+=a,i=iD(o=iu(i))}}return ii({width:p,height:u,x:d,y:h})}function iU(e,t){let o=iE(e).scrollLeft;return t?t.left+o:iq(ig(e)).left+o}function iW(e,t){let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-iU(e,o),y:o.top+t.scrollTop}}let iG=new Set(["absolute","fixed"]);function iH(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=iu(e),r=ig(e),i=o.visualViewport,n=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){n=i.width,a=i.height;let e=iA();(!e||e&&"fixed"===t)&&(l=i.offsetLeft,c=i.offsetTop)}let d=iU(r);if(d<=0){let e=r.ownerDocument,t=e.body,o=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,a=Math.abs(r.clientWidth-t.clientWidth-i);a<=25&&(n-=a)}else d<=25&&(n+=d);return{width:n,height:a,x:l,y:c}}(e,o);else if("document"===t)r=function(e){let t=ig(e),o=iE(e),r=e.ownerDocument.body,i=rK(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),n=rK(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-o.scrollLeft+iU(e),l=-o.scrollTop;return"rtl"===iB(r).direction&&(a+=rK(t.clientWidth,r.clientWidth)-i),{width:i,height:n,x:a,y:l}}(ig(e));else if(ib(t))r=function(e,t){let o=iq(e,!0,"fixed"===t),r=o.top+e.clientTop,i=o.left+e.clientLeft,n=iv(e)?iM(e):rZ(1),a=e.clientWidth*n.x,l=e.clientHeight*n.y;return{width:a,height:l,x:i*n.x,y:r*n.y}}(t,o);else{let o=iF(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ii(r)}function iV(e){return"static"===iB(e).position}function iK(e,t){if(!iv(e)||"fixed"===iB(e).position)return null;if(t)return t(e);let o=e.offsetParent;return ig(e)===o&&(o=o.ownerDocument.body),o}function iY(e,t){var o;let r=iu(e);if(ix(e))return r;if(!iv(e)){let t=iL(e);for(;t&&!iI(t);){if(ib(t)&&!iV(t))return t;t=iL(t)}return r}let i=iK(e,t);for(;i&&(o=i,ik.has(ip(o)))&&iV(i);)i=iK(i,t);return i&&iI(i)&&iV(i)&&!iO(i)?r:i||function(e){let t=iL(e);for(;iv(t)&&!iI(t);){if(iO(t))return t;if(ix(t))break;t=iL(t)}return null}(e)||r}let iJ=async function(e){let t=this.getOffsetParent||iY,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=iv(t),i=ig(t),n="fixed"===o,a=iq(e,!0,n,t),l={scrollLeft:0,scrollTop:0},c=rZ(0);if(r||!r&&!n)if(("body"!==ip(t)||i_(i))&&(l=iE(t)),r){let e=iq(t,!0,n,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=iU(i));n&&!r&&i&&(c.x=iU(i));let d=!i||r||n?rZ(0):iW(i,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},iZ={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e,n="fixed"===i,a=ig(r),l=!!t&&ix(t.floating);if(r===a||l&&n)return o;let c={scrollLeft:0,scrollTop:0},d=rZ(1),h=rZ(0),p=iv(r);if((p||!p&&!n)&&(("body"!==ip(r)||i_(a))&&(c=iE(r)),iv(r))){let e=iq(r);d=iM(r),h.x=e.x+r.clientLeft,h.y=e.y+r.clientTop}let u=!a||p||n?rZ(0):iW(a,c);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+h.x+u.x,y:o.y*d.y-c.scrollTop*d.y+h.y+u.y}},getDocumentElement:ig,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e,n=[..."clippingAncestors"===o?ix(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=iT(e,[],!1).filter(e=>ib(e)&&"body"!==ip(e)),i=null,n="fixed"===iB(e).position,a=n?iL(e):e;for(;ib(a)&&!iI(a);){let t=iB(a),o=iO(a);o||"fixed"!==t.position||(i=null),(n?!o&&!i:!o&&"static"===t.position&&!!i&&iG.has(i.position)||i_(a)&&!o&&function e(t,o){let r=iL(t);return!(r===o||!ib(r)||iI(r))&&("fixed"===iB(r).position||e(r,o))}(e,a))?r=r.filter(e=>e!==a):i=t,a=iL(a)}return t.set(e,r),r}(t,this._c):[].concat(o),r],a=n[0],l=n.reduce((e,o)=>{let r=iH(t,o,i);return e.top=rK(r.top,e.top),e.right=rV(r.right,e.right),e.bottom=rV(r.bottom,e.bottom),e.left=rK(r.left,e.left),e},iH(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:iY,getElementRects:iJ,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=iz(e);return{width:t,height:o}},getScale:iM,isElement:ib,isRTL:function(e){return"rtl"===iB(e).direction}};function iX(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let iQ=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let i,n,{placement:a,rects:l,platform:c,elements:d}=t,{apply:h=()=>{},...p}=r0(e,t),u=await il(t,p),g=r1(a),m=r2(a),b="y"===r3(a),{width:f,height:v}=l.floating;"top"===g||"bottom"===g?(i=g,n=m===(await (null==c.isRTL?void 0:c.isRTL(d.floating))?"start":"end")?"left":"right"):(n=g,i="end"===m?"top":"bottom");let w=v-u.top-u.bottom,_=f-u.left-u.right,$=rV(v-u[i],w),x=rV(f-u[n],_),C=!t.middlewareData.shift,S=$,P=x;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(P=_),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(S=w),C&&!m){let e=rK(u.left,0),t=rK(u.right,0),o=rK(u.top,0),r=rK(u.bottom,0);b?P=f-2*(0!==e||0!==t?e+t:rK(u.left,u.right)):S=v-2*(0!==o||0!==r?o+r:rK(u.top,u.bottom))}await h({...t,availableWidth:P,availableHeight:S});let O=await c.getDimensions(d.floating);return f!==O.width||v!==O.height?{reset:{rects:!0}}:{}}}},i0=tM(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ek}});function i1(e){var t=e;for(let e=t;e;e=i2(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=i2(t);e;e=i2(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||iO(t)||"BODY"===e.tagName))return e}return null}function i2(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var i5=class extends rH{constructor(){super(...arguments),this.localize=new rW(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,i=0,n=0,a=0,l=0,c=0,d=0,h=0;o?e.top<t.top?(r=e.left,i=e.bottom,n=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(r=t.left,i=t.bottom,n=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(r=e.right,i=e.top,n=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(r=t.right,i=t.top,n=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let i;void 0===r&&(r={});let{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,h=iN(e),p=n||a?[...h?iT(h):[],...iT(t)]:[];p.forEach(e=>{n&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)});let u=h&&c?function(e,t){let o,r=null,i=ig(e);function n(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),n();let d=e.getBoundingClientRect(),{left:h,top:p,width:u,height:g}=d;if(l||t(),!u||!g)return;let m=rJ(p),b=rJ(i.clientWidth-(h+u)),f={rootMargin:-m+"px "+-b+"px "+-rJ(i.clientHeight-(p+g))+"px "+-rJ(h)+"px",threshold:rK(0,rV(1,c))||1},v=!0;function w(t){let r=t[0].intersectionRatio;if(r!==c){if(!v)return a();r?a(!1,r):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||iX(d,e.getBoundingClientRect())||a(),v=!1}try{r=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(e)}(!0),n}(h,o):null,g=-1,m=null;l&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),h&&!d&&m.observe(h),m.observe(t));let b=d?iq(e):null;return d&&function t(){let r=iq(e);b&&!iX(b,r)&&o(),b=r,i=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach(e=>{n&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)}),null==u||u(),null==(e=m)||e.disconnect(),m=null,d&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;let r;if(!this.active||!this.anchorEl)return;let i=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:i,y:n,placement:a,middlewareData:l}=t,c=await id(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:i+c.x,y:n+c.y,data:{...c,placement:a}}}}];this.sync?i.push(iQ({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,i,n,a;let{placement:l,middlewareData:c,rects:d,initialPlacement:h,platform:p,elements:u}=e,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,..._}=r0(t,e);if(null!=(o=c.arrow)&&o.alignmentOffset)return{};let $=r1(l),x=r3(h),C=r1(h)===h,S=await (null==p.isRTL?void 0:p.isRTL(u.floating)),P=b||(C||!w?[io(h)]:function(e){let t=io(e);return[r4(e),t,r4(t)]}(h)),O="none"!==v;!b&&O&&P.push(...function(e,t,o,r){let i=r2(e),n=function(e,t,o){switch(e){case"top":case"bottom":if(o)return t?r7:r9;return t?r9:r7;case"left":case"right":return t?ie:it;default:return[]}}(r1(e),"start"===o,r);return i&&(n=n.map(e=>e+"-"+i),t&&(n=n.concat(n.map(r4)))),n}(h,w,v,S));let A=[h,...P],B=await il(e,_),E=[],T=(null==(r=c.flip)?void 0:r.overflows)||[];if(g&&E.push(B[$]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=r2(e),i=r5(r3(e)),n=r8(i),a="x"===i?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=io(a)),[a,io(a)]}(l,d,S);E.push(B[e[0]],B[e[1]])}if(T=[...T,{placement:l,overflows:E}],!E.every(e=>e<=0)){let e=((null==(i=c.flip)?void 0:i.index)||0)+1,t=A[e];if(t&&("alignment"!==m||x===r3(t)||T.every(e=>r3(e.placement)!==x||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let o=null==(n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:n.placement;if(!o)switch(f){case"bestFit":{let e=null==(a=T.filter(e=>{if(O){let t=r3(e.placement);return t===x||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(o=e);break}case"initialPlacement":o=h}if(l!==o)return{reset:{placement:o}}}return{}}}),this.shift&&i.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=r0(o,e),d={x:t,y:r},h=await il(e,c),p=r3(r1(i)),u=r5(p),g=d[u],m=d[p];if(n){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",o=g+h[e],r=g-h[t];g=rK(o,rV(g,r))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",o=m+h[e],r=m-h[t];m=rK(o,rV(m,r))}let b=l.fn({...e,[u]:g,[p]:m});return{...b,data:{x:b.x-t,y:b.y-r,enabled:{[u]:n,[p]:a}}}}}),this.autoSize?i.push(iQ({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push({name:"arrow",options:r={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:i,rects:n,platform:a,elements:l,middlewareData:c}=e,{element:d,padding:h=0}=r0(r,e)||{};if(null==d)return{};let p=ir(h),u={x:t,y:o},g=r5(r3(i)),m=r8(g),b=await a.getDimensions(d),f="y"===g,v=f?"clientHeight":"clientWidth",w=n.reference[m]+n.reference[g]-u[g]-n.floating[m],_=u[g]-n.reference[g],$=await (null==a.getOffsetParent?void 0:a.getOffsetParent(d)),x=$?$[v]:0;x&&await (null==a.isElement?void 0:a.isElement($))||(x=l.floating[v]||n.floating[m]);let C=x/2-b[m]/2-1,S=rV(p[f?"top":"left"],C),P=rV(p[f?"bottom":"right"],C),O=x-b[m]-P,A=x/2-b[m]/2+(w/2-_/2),B=rK(S,rV(A,O)),E=!c.arrow&&null!=r2(i)&&A!==B&&n.reference[m]/2-(A<S?S:P)-b[m]/2<0,T=E?A<S?A-S:A-O:0;return{[g]:u[g]+T,data:{[g]:B,centerOffset:A-B-T,...E&&{alignmentOffset:T}},reset:E}}});let n="absolute"===this.strategy?e=>iZ.getOffsetParent(e,i1):iZ.getOffsetParent;((e,t,o)=>{let r=new Map,i={platform:iZ,...o},n={...i.platform,_c:r};return ia(e,t,{...i,platform:n})})(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:rC(rx({},iZ),{getOffsetParent:n})}).then(({x:e,y:t,middlewareData:o,placement:r})=>{let i="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",a="",l="",c="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?o:"",c=i?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":o,c=i?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:l,left:c,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ew`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${i0({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${i0({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ew`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function i8(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}function i6(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,rC(rx({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function i3(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function i4(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function i9(e,t){let o=rx({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),n=this[t];i!==n&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](i,n)}}),i.call(this,e)}}}i5.styles=[rG,rT],rS([ez(".popup")],i5.prototype,"popup",2),rS([ez(".popup__arrow")],i5.prototype,"arrowEl",2),rS([eL()],i5.prototype,"anchor",2),rS([eL({type:Boolean,reflect:!0})],i5.prototype,"active",2),rS([eL({reflect:!0})],i5.prototype,"placement",2),rS([eL({reflect:!0})],i5.prototype,"strategy",2),rS([eL({type:Number})],i5.prototype,"distance",2),rS([eL({type:Number})],i5.prototype,"skidding",2),rS([eL({type:Boolean})],i5.prototype,"arrow",2),rS([eL({attribute:"arrow-placement"})],i5.prototype,"arrowPlacement",2),rS([eL({attribute:"arrow-padding",type:Number})],i5.prototype,"arrowPadding",2),rS([eL({type:Boolean})],i5.prototype,"flip",2),rS([eL({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],i5.prototype,"flipFallbackPlacements",2),rS([eL({attribute:"flip-fallback-strategy"})],i5.prototype,"flipFallbackStrategy",2),rS([eL({type:Object})],i5.prototype,"flipBoundary",2),rS([eL({attribute:"flip-padding",type:Number})],i5.prototype,"flipPadding",2),rS([eL({type:Boolean})],i5.prototype,"shift",2),rS([eL({type:Object})],i5.prototype,"shiftBoundary",2),rS([eL({attribute:"shift-padding",type:Number})],i5.prototype,"shiftPadding",2),rS([eL({attribute:"auto-size"})],i5.prototype,"autoSize",2),rS([eL()],i5.prototype,"sync",2),rS([eL({type:Object})],i5.prototype,"autoSizeBoundary",2),rS([eL({attribute:"auto-size-padding",type:Number})],i5.prototype,"autoSizePadding",2),rS([eL({attribute:"hover-bridge",type:Boolean})],i5.prototype,"hoverBridge",2);var i7=class extends rH{constructor(){super(),this.localize=new rW(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=i3(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=i3(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await i4(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=rB(this,"tooltip.show",{dir:this.localize.dir()});await i6(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await i4(this.body);let{keyframes:e,options:o}=rB(this,"tooltip.hide",{dir:this.localize.dir()});await i6(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,i8(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,i8(this,"sl-after-hide")}render(){return ew`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${i0({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};i7.styles=[rG,rL],i7.dependencies={"sl-popup":i5},rS([ez("slot:not([name])")],i7.prototype,"defaultSlot",2),rS([ez(".tooltip__body")],i7.prototype,"body",2),rS([ez("sl-popup")],i7.prototype,"popup",2),rS([eL()],i7.prototype,"content",2),rS([eL()],i7.prototype,"placement",2),rS([eL({type:Boolean,reflect:!0})],i7.prototype,"disabled",2),rS([eL({type:Number})],i7.prototype,"distance",2),rS([eL({type:Boolean,reflect:!0})],i7.prototype,"open",2),rS([eL({type:Number})],i7.prototype,"skidding",2),rS([eL()],i7.prototype,"trigger",2),rS([eL({type:Boolean})],i7.prototype,"hoist",2),rS([i9("open",{waitUntilFirstUpdate:!0})],i7.prototype,"handleOpenChange",1),rS([i9(["content","distance","hoist","placement","skidding"])],i7.prototype,"handleOptionsChange",1),rS([i9("disabled")],i7.prototype,"handleDisabledChange",1),rI("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),rI("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),i7.define("sl-tooltip");var ne=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,no=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nt(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ne(t,o,n),n};rI("tooltip.show",null),rI("tooltip.hide",null);let nr=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return ew`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??e$}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?rE(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};nr.styles=E`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,no([eL()],nr.prototype,"content",2),no([eL({reflect:!0})],nr.prototype,"placement",2),no([eL({type:Boolean})],nr.prototype,"disabled",2),no([eL({type:Number})],nr.prototype,"distance",2),no([eL({type:Boolean})],nr.prototype,"hoist",2),nr=no([eB("gl-tooltip")],nr);var ni=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,ns=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nn(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ni(t,o,n),n};let na=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ew`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??e$}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ew`<gl-tooltip placement=${this.tooltipPlacement??e$}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ew`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??e$}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ew`<button
			class="control"
			role=${this.role??e$}
			aria-checked=${this.ariaChecked??e$}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};na.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},na.styles=[o5,E`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${o1}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],ns([ez(".control")],na.prototype,"control",2),ns([eL({reflect:!0})],na.prototype,"appearance",2),ns([eL({type:Boolean,reflect:!0})],na.prototype,"disabled",2),ns([eL({reflect:!0})],na.prototype,"density",2),ns([eL({type:Boolean,reflect:!0})],na.prototype,"full",2),ns([eL()],na.prototype,"href",2),ns([eL()],na.prototype,"tooltip",2),ns([eL()],na.prototype,"tooltipPlacement",2),ns([eL({type:Boolean,reflect:!0})],na.prototype,"truncate",2),na=ns([eB("gl-button")],na);var nl=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,nd=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nc(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nl(t,o,n),n};let nh=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return ew`<div class="group"><slot></slot></div>`}};nh.styles=[o5,E`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],nd([eL({type:Boolean})],nh.prototype,"editor",2),nd([eL({reflect:!0})],nh.prototype,"layout",2),nd([eL({reflect:!0})],nh.prototype,"grouping",2),nh=nd([eB("button-container")],nh);let np=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),nu=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var ng=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,nb=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nm(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ng(t,o,n),n};function nf(e,t=""){return B(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let nv=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};nv.styles=E`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${nf(np)}
		${nf(nu,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,nb([eL({reflect:!0})],nv.prototype,"icon",2),nb([eL({reflect:!0})],nv.prototype,"modifier",2),nb([eL({type:Number})],nv.prototype,"size",2),nb([eL({reflect:!0})],nv.prototype,"flip",2),nb([eL({reflect:!0})],nv.prototype,"rotate",2),nv=nb([eB("code-icon")],nv),i5.define("sl-popup");var ny=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,n_=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nw(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ny(t,o,n),n};let nk=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=oT(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=oT(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of nk.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),nk.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ew`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return nk.closeOthers(this),this.open=!0,nk.openPopovers.add(this),oD(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,nk.openPopovers.delete(this),oD(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};nk.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nk.openPopovers=new Set,nk.styles=[o6,E`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],n_([ez("#popover")],nk.prototype,"body",2),n_([ez("sl-popup")],nk.prototype,"popup",2),n_([eL({reflect:!0})],nk.prototype,"placement",2),n_([eL({type:Object})],nk.prototype,"anchor",2),n_([eL({reflect:!0,type:Boolean})],nk.prototype,"disabled",2),n_([eL({type:Number})],nk.prototype,"distance",2),n_([eL({reflect:!0,type:Boolean})],nk.prototype,"open",2),n_([eL({reflect:!0,type:Boolean})],nk.prototype,"arrow",2),n_([eL({type:Number})],nk.prototype,"skidding",2),n_([eL()],nk.prototype,"trigger",2),n_([eL({type:Boolean})],nk.prototype,"hoist",2),n_([eL({reflect:!0})],nk.prototype,"appearance",2),n_([t6("open",{afterFirstUpdate:!0})],nk.prototype,"handleOpenChange",1),n_([t6(["distance","hoist","placement","skidding"])],nk.prototype,"handleOptionsChange",1),n_([t6("disabled")],nk.prototype,"handleDisabledChange",1),nk=n_([eB("gl-popover")],nk);var n$=Object.defineProperty,nx=Object.getOwnPropertyDescriptor,nC=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nx(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n$(t,o,n),n};let nS=class extends lit_element_i{constructor(){super(...arguments),this._showUpgrade=!1}get showUpgrade(){return this._showUpgrade}set showUpgrade(e){this._showUpgrade=e}get accountAvatar(){return this.hasAccount&&this._state.avatar}get accountName(){return this.subscription?.account?.name??""}get accountEmail(){return this.subscription?.account?.email??""}get hasAccount(){return this.subscription?.account!=null}get isReactivatedTrial(){return this.subscriptionState===rt.Trial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??"pro"}get effectivePlanId(){return this._state.subscription?.plan.effective.id??"pro"}get planName(){return function(e,t,o){switch(e){case rt.Community:case rt.Trial:return`${"student"===o?rs("student"):rs("pro")} Trial`;case rt.TrialExpired:case rt.TrialReactivationEligible:return rs("community-with-account");case rt.VerificationRequired:return`${rs(t??"pro")} (Unverified)`;default:return rs(t??"pro")}}(this.subscriptionState,this.planId,this.effectivePlanId)}get planTier(){return rc(this.subscription)?"student"===this.subscription.plan.effective.id?"Student":"Pro Trial":ri(this.planId)}get subscription(){return this._state.subscription}get subscriptionState(){return this.subscription?.state}get trialDaysRemaining(){return null==this.subscription?0:ra(this.subscription,"days")??0}focus(){this._chip.focus()}render(){return ew`<gl-popover placement="bottom" trigger="hover focus click" hoist>
				<span id="chip" slot="anchor" class="chip" tabindex="0">
					${this.accountAvatar?ew`<img class="chip__media" src=${this.accountAvatar} />`:ew`<code-icon class="chip__media" icon="gl-gitlens" size="16"></code-icon>`}
					<span>${this.planTier}</span>
				</span>
				<div slot="content" class="content" tabindex="-1">
					<div class="header">
						<span class="header__title">${this.planName}</span>
						<span class="header__actions">
							${this.hasAccount?ew`<gl-button
											appearance="toolbar"
											href="${rh("gitlens.views.home.account.resync",{source:"account"})}"
											tooltip="Synchronize Status"
											aria-label="Synchronize Status"
											><code-icon icon="sync"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${rh("gitlens.plus.manage",{source:"account"})}"
											tooltip="Manage Account"
											aria-label="Manage Account"
											><code-icon icon="gear"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${rh("gitlens.plus.logout",{source:"account"})}"
											tooltip="Sign Out"
											aria-label="Sign Out"
											><code-icon icon="sign-out"></code-icon
										></gl-button>`:e$}
						</span>
					</div>
					${this.renderAccountInfo()} ${this.renderAccountState()}
				</div>
			</gl-popover>
			${this.renderUpgradeContent()}`}show(){this._popover.show(),this.focus()}renderAccountInfo(){let e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?ew`<div class="account-info">
			<span class="row">
				<span class="row__media"
					>${this._state.avatar?ew`<img src=${this._state.avatar} />`:ew`<code-icon icon="gl-gitlens" size="20"></code-icon>`}</span
				>
				<span class="details"
					><p class="details__title">${this.accountName}</p>
					<p class="details__subtitle">${this.accountEmail}</p></span
				>
			</span>
			<span class="row">
				<span class="row__media"><code-icon icon="organization" size="20"></code-icon></span>
				<span class="details"><p class="details__title">${e}</p></span>
				${eN(this._state.organizationsCount>1,()=>ew`<div class="details__button">
							<gl-button
								appearance="toolbar"
								href="${rh("gitlens.gk.switchOrganization",{source:"account",detail:{organization:this._state.subscription?.activeOrganization?.id}})}"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${og("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`)}
			</span>
			${eN(rd(this.subscription.state),()=>{var e;return ew`<span class="row">
						<span class="row__media"><code-icon icon="unlock" size="20"></code-icon></span>
						<span class="details"
							><p class="details__title">
								${rc(this.subscription)?ew`${ri(this.effectivePlanId)} plan
											<span class="details__subtitle">(trial)</span>`:ew`${ri(this.planId)} plan`}
							</p></span
						>
						${rl(this.subscription)&&0>(e=this.planId,rn(e)-rn("advanced"))?ew`<div class="details__button">
									<gl-button
										appearance="secondary"
										href="${rh("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"plan-section:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
										aria-label="Upgrade to Advanced"
										><span class="upgrade-button">Upgrade</span>${this.renderPromo("advanced","icon","suffix")}
										<span slot="tooltip"
											>Upgrade to the Advanced plan for access to self-hosted integrations,
											advanced AI features @ 1M tokens/week, and more
											${this.renderPromo("advanced","info")}
										</span>
									</gl-button>
								</div>`:e$}
					</span>`})}
		</div>`:e$}renderAccountState(){switch(this.subscriptionState){case rt.Paid:return ew`<div class="account-status">
					${this.renderIncludesDevEx()}${this.renderReferFriend()}
				</div> `;case rt.VerificationRequired:return ew`<div class="account-status">
					<p>You must verify your email before you can access Pro features.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.resendVerification",{source:"account"})}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							href="${rh("gitlens.plus.validate",{source:"account"})}"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				</div>`;case rt.Trial:{let e=this.trialDaysRemaining;return ew`<div class="account-status">
					${this.isReactivatedTrial?ew`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${ot.releaseNotes}">what's new</a>
								in GitLens.
							</p>`:e$}
					<p>
						You have
						<strong>${e<1?"<1 day":og("day",e,{infix:" more "})} left</strong>
						in your ${"Student"===this.planTier?"Student":"Pro"} trial. Once your trial ends, you will
						only be able to use Pro features on publicly-hosted repos.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`}case rt.TrialExpired:return ew`<div class="account-status">
					<p>Thank you for trying <a href="${ot.communityVsPro}">GitLens Pro</a>.</p>
					<p>Continue leveraging Pro features and workflows on privately-hosted repos by upgrading today.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`;case rt.TrialReactivationEligible:return ew`<div class="account-status">
					<p>
						Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
						${og("day",14)}.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.reactivateProTrial",{source:"account"})}"
							tooltip="Reactivate your Pro trial for another ${og("day",14)}"
							>Reactivate GitLens Pro Trial</gl-button
						>
					</button-container>
					${this.renderReferFriend()}
				</div>`;default:return ew`<div class="account-status">
					<p>
						Unlock advanced features and workflows on private repos, accelerate reviews, and streamline
						collaboration with
						<a href="${ot.communityVsPro}">GitLens Pro</a>.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.signUp",{source:"account"})}"
							>Try GitLens Pro</gl-button
						>
						<span class="button-suffix"
							>or
							<a
								href="${rh("gitlens.plus.login",{source:"account"})}"
								>sign in</a
							></span
						>
					</button-container>
					<p>Get ${14} days of GitLens Pro for free — no credit card required.</p>
				</div>`}}renderIncludesDevEx(){return ew`<p>Includes access to <a href="${ot.platform}">GitKraken's DevEx platform</a></p>`}renderReferFriend(){return rl(this.subscription)?ew`<p>
			<a
				href="${rh("gitlens.plus.referFriend",{source:"account"})}"
				>Refer a friend</a
			>
			&mdash; give 50% off and get up to $20
		</p>`:e$}renderUpgradeContent(){return rl(this.subscription)?(this.showUpgrade=!1,e$):(this.showUpgrade=!0,ew`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<span slot="anchor" class="chip chip--outlined" tabindex="0">
				<span>Upgrade</span>
			</span>
			<div slot="content" class="content" tabindex="-1">
				<div class="header">
					<span class="header__title">Advantages of GitLens Pro</span>
				</div>
				<div class="upgrade">
					<button-container layout="editor">
						<gl-button
							full
							href="${rh("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")}

					<ul>
						<li>Unlimited cloud integrations</li>
						<li>Smart AI features &mdash; 250K tokens/week</li>
						<li>
							Powerful tools &mdash; Commit Graph, Visual History, &amp; Git Worktrees on private repos
						</li>
						<li>Streamlined workflows &mdash; start work from issues, pull request reviews</li>
					</ul>

					<br />
					<button-container>
						<gl-button
							full
							href="${rh("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
							>Upgrade to Advanced</gl-button
						>
					</button-container>
					${this.renderPromo("advanced")}

					<ul>
						<li>Self-hosted integrations</li>
						<li>Advanced AI features &mdash; 1M tokens/week</li>
					</ul>
				</div>
			</div>
		</gl-popover>`)}renderPromo(e,t="info",o){return ew`<gl-promo
			slot=${o??e$}
			.promoPromise=${this.promos.getApplicablePromo(e,"account")}
			.type=${t}
			.source="${{source:"account"}}"
		></gl-promo>`}};nS.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nS.styles=[o5,o8,o2,rp,rg,E`
			:host {
				display: inline-flex;
				align-items: center;
				gap: 0.8rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 10%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 25%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 20%);
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #000 7%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 18%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 15%);
			}

			.chip {
				padding-right: 0.6rem;

				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				line-height: 2rem;
				background-color: var(--gl-account-chip-color);
			}

			.chip--outlined {
				background-color: transparent;
				border: 1px solid var(--gl-account-chip-color);
			}

			.chip__media {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
			}

			img.chip__media {
				width: 1.6rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-chip-media-color);
			}

			.chip-group {
				display: inline-flex;
				flex-direction: row;
				gap: 0.8rem;
				cursor: pointer;
			}

			.account-info {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.row {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
			}

			.row:last-of-type {
				margin-bottom: 0.6rem;
			}

			.row__media {
				flex: 0 0 auto;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.row__media code-icon {
				color: var(--color-foreground--65);
			}

			.row__media img {
				width: 2rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-account-media-color);
			}

			.details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.details__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.details__subtitle {
				font-size: 1.1rem;
				font-weight: 400;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.details__button {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
				margin-right: 0.6rem;
			}

			.account-status > :first-child {
				margin-block-start: 0;
			}
			.account-status > :last-child {
				margin-block-end: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			button-container .button-suffix {
				display: inline-flex;
				align-items: center;
				white-space: nowrap;
				gap: 0.2em;
				margin-left: 0.4rem;
			}

			.upgrade > * {
				margin-block: 0.8rem 0;
			}

			.upgrade ul {
				padding-inline-start: 2rem;
			}

			.upgrade li {
				text-wrap: pretty;
			}

			.upgrade gl-promo::part(text) {
				margin-block-start: 0;
				/* border-radius: 0.3rem;
				padding: 0.2rem 0.4rem;
				background-color: var(--gl-account-chip-color); */
			}

			.upgrade gl-promo:not([has-promo]) {
				display: none;
			}

			.upgrade-button {
				text-transform: uppercase;
				font-size: 1rem;
			}
		`],nC([eL({type:Boolean,reflect:!0,attribute:"show-upgrade"})],nS.prototype,"showUpgrade",1),nC([ez("#chip")],nS.prototype,"_chip",2),nC([ez("gl-popover")],nS.prototype,"_popover",2),nC([C({context:"state",subscribe:!0}),eT()],nS.prototype,"_state",2),nC([C({context:"promos"})],nS.prototype,"promos",2),nS=nC([eB("gl-account-chip")],nS);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let nP=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!nP(e))??ek}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let i=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!nP(a))return this._$Cwt=e,a;e<r&&a===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(a).then(async e=>{for(;n.get();)await n.get();let t=i.deref();if(void 0!==t){let o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return ek}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let nO=tM(until_c);var nA=Object.defineProperty,nR=Object.getOwnPropertyDescriptor,nI=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nR(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nA(t,o,n),n};let nB=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ew`${nO(this.promoPromise?.then(e=>this.renderPromo(e)),e$)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ew`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ew`<p class="promo" part="text">${rE(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ew`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??e$}"
						>${rE(t.link.html)}</a
					>`}return this.hasPromo=!1,e$}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),rh(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};nB.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nB.styles=[E`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${o0}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],nI([ez('a,button,[tabindex="0"]')],nB.prototype,"_focusable",2),nI([eL({type:Object})],nB.prototype,"promoPromise",2),nI([eL({type:Object})],nB.prototype,"source",2),nI([eL({reflect:!0,type:String})],nB.prototype,"type",2),nI([eL({type:Boolean,reflect:!0,attribute:"has-promo"})],nB.prototype,"hasPromo",1),nB=nI([eB("gl-promo")],nB);var nE=Object.defineProperty,nL=Object.getOwnPropertyDescriptor,nT=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nL(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nE(t,o,n),n};let nD=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:ra(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return ew`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===rt.VerificationRequired)return ew`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else if(rl(this.subscription)||this.cloud&&null!=this.subscription.account)return ew`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;else if(rc(this.subscription))return ew`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ew`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===rt.Paid?ew`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ew`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:ew`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?ew`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ew`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return e$;switch(this.state){case rt.Paid:e=ew`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${rh("gitlens.showAccountView")}"
							>${rs(this.subscription?.plan.actual.id??"pro")}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case rt.VerificationRequired:e=ew`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${rh("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${rh("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case rt.Trial:{let t=this.daysRemaining;e=ew`<p>
						You have
						<strong>${t<1?"<1 day":og("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case rt.TrialExpired:e=ew`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ew`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case rt.TrialReactivationEligible:e=ew`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${og("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${rh("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${og("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ew`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ew`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ew`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${rh("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${rh("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ew`<div class="actions">
			${e??e$}
			<gl-button
				density="tight"
				href="${rh("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};nD.styles=[o5,o8,E`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${B(o0)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],nT([eL({type:Boolean})],nD.prototype,"cloud",2),nT([eL({reflect:!0})],nD.prototype,"placement",2),nT([eL({type:Boolean})],nD.prototype,"preview",2),nT([C({context:"promos"})],nD.prototype,"promos",2),nT([eL({type:Object})],nD.prototype,"source",2),nT([eL({attribute:!1})],nD.prototype,"subscription",2),nD=nT([eB("gl-feature-badge")],nD);var nz=Object.defineProperty,nN=Object.getOwnPropertyDescriptor,nM=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nN(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nz(t,o,n),n};let nj=class extends lit_element_i{get hasAccount(){return this._state.subscription?.account!=null}get isPaidAccount(){return this._state.subscription?.state===rt.Paid}get isProAccount(){return rd(this._state.subscription?.state)}get hasConnectedIntegrations(){return this.hasAccount&&this.integrations.some(e=>e.connected)}get ai(){return this._state.ai}get aiSettingEnabled(){return this._state.aiEnabled}get aiOrgEnabled(){return this._state.orgSettings?.ai??!0}get aiEnabled(){return this.aiSettingEnabled&&this.aiOrgEnabled}get integrations(){return this._state.integrations}focus(){this._chip.focus()}render(){let e=this.hasConnectedIntegrations,t=function(e){let t=new Map;for(let o of e){let e=t.get(o.icon);e&&(!o.connected||e.connected)||t.set(o.icon,o)}return e=>t.get(e.icon)===e}(this.integrations);return ew`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip" tabindex="0"
				>${!e?ew`<span class="chip__label">Connect</span>`:""}${this.integrations.filter(t).map(e=>this.renderIntegrationStatus(e))}${this.renderAIStatus()}</span
			>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Integrations</span>
					<span class="header__actions"></span>
						<gl-button
							appearance="toolbar"
							href="${rh("gitlens.views.home.account.resync",{source:"home",detail:"integrations"})}"
							tooltip="Synchronize Status"
							aria-label="Synchronize Status"
							><code-icon icon="sync"></code-icon
						></gl-button>
						<gl-button
							appearance="toolbar"
							href="${rh("gitlens.plus.cloudIntegrations.manage",{source:{source:"home"}})}"
							tooltip="Manage Integrations"
							aria-label="Manage Integrations"
							><code-icon icon="gear"></code-icon></gl-button
					></span>
				</div>
				<div class="integrations">${!e?ew`<p>
									Connect hosting services like <strong>GitHub</strong> and issue trackers like
									<strong>Jira</strong> to track progress and take action on PRs and issues related to
									your branches.
								</p>
								<button-container>
									<gl-button
										full
										href="${rh("gitlens.plus.cloudIntegrations.connect",{integrationIds:this.integrations.map(e=>e.id),source:{source:"home",detail:"integrations"}})}"
										>Connect Integrations</gl-button
									>
								</button-container>`:this.integrations.map(e=>this.renderIntegrationRow(e))}${this.renderAIRow()}</div>
			</div>
		</gl-popover>`}renderIntegrationStatus(e){return e.requiresPro&&!this.isProAccount?ew`<span
				class="integration status--${e.connected?"connected":"disconnected"} is-locked"
				slot="anchor"
				><code-icon icon="${e.icon}"></code-icon
			></span>`:ew`<span
			class="integration status--${e.connected?"connected":"disconnected"}"
			slot="anchor"
			><code-icon icon="${e.icon}"></code-icon
		></span>`}renderIntegrationRow(e){let t=e.requiresPro&&!this.isProAccount,o=e.requiresPro&&!this.isPaidAccount;return ew`<div
			class="integration-row status--${e.connected?"connected":"disconnected"}${t?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${e.icon}"></code-icon></span>
			<span class="integration__content">
				<span class="integration__title">
					<span>${e.name}</span>
					${o?ew` <gl-feature-badge
								placement="right"
								.source=${{source:"home",detail:"integrations"}}
								cloud
							></gl-feature-badge>`:e$}
				</span>
				<span class="integration__details">${function(e){let t=e.supports.map(e=>nF.get(e));if(0===t.length)return"";if(1===t.length)return`Supports ${t[0]}`;let o=t.pop();return`Supports ${t.join(", ")}, and ${o}`}(e)}</span>
			</span>
			<span class="integration__actions">
				${t?ew`<gl-button
							appearance="toolbar"
							href="${rh("gitlens.plus.upgrade",{plan:"pro",source:"home",detail:"integrations"})}"
							tooltip="Unlock ${e.name} features with GitLens Pro"
							aria-label="Unlock ${e.name} features with GitLens Pro"
							><code-icon class="status-indicator" icon="lock"></code-icon
						></gl-button>`:e.connected?ew`<gl-tooltip
								class="status-indicator status--connected"
								placement="bottom"
								content="Connected"
								><code-icon class="status-indicator" icon="check"></code-icon
							></gl-tooltip>`:ew`<gl-button
								appearance="toolbar"
								href="${rh("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.id],source:{source:"home",detail:"integrations"}})}"
								tooltip="Connect ${e.name}"
								aria-label="Connect ${e.name}"
								><code-icon icon="plug"></code-icon
							></gl-button>`}
			</span>
		</div>`}renderAIStatus(){return ew`<span
			class="integration status--${this.aiEnabled&&this.ai?.model!=null?"connected":"disconnected"}"
			slot="anchor"
		>
			<code-icon icon="${this.aiEnabled&&this.ai?.model!=null?"sparkle-filled":"sparkle"}"></code-icon>
		</span>`}renderAIRow(){let{model:e}=this.ai,t=this.aiEnabled&&null!=e,o=!this.aiEnabled;return ew`<div
			class="integration-row integration-row--ai status--${t?"connected":"disconnected"}${o?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${t?"sparkle-filled":"sparkle"}"></code-icon></span>
			${this.aiEnabled?ew`<span class="integration__content">
							${e?.provider.name?ew`<span class="integration__title">
										<span>${e.provider.name}</span>
										${e$}
									</span>`:ew`<span class="integration_details">Select AI model to enable AI features</span>`}
							${e?.name?ew`<span class="integration__details">${e.name}</span>`:e$}
						</span>
						<span class="integration__actions">
							<gl-button
								appearance="toolbar"
								href="${rh("gitlens.ai.switchProvider",{source:"home",detail:"integrations"})}"
								tooltip="Switch AI Provider/Model"
								aria-label="Switch AI Provider/Model"
								><code-icon icon="arrow-swap"></code-icon
							></gl-button>
						</span>`:ew`<span class="integration__content">
							<span class="integration_details"
								>GitLens AI features have been
								disabled${!this.aiSettingEnabled?" via settings":" by your GitKraken admin"}</span
							>
						</span>
						${!this.aiSettingEnabled?ew` <span class="integration__actions">
									<gl-button
										appearance="toolbar"
										href="${rh("gitlens.home.enableAi",void 0)}"
										tooltip="Re-enable AI Features"
										aria-label="Re-enable AI Features"
										><code-icon icon="unlock"></code-icon
									></gl-button>
								</span>`:e$}`}
		</div>`}};nj.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nj.styles=[o5,o8,rp,E`
			.chip {
				gap: 0.6rem;
				padding: 0.2rem 0.4rem 0.4rem 0.4rem;
				align-items: baseline;
			}

			.chip__label {
				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				color: var(--color-foreground--75);
				margin-right: 0.4rem;
			}

			.integration {
				white-space: nowrap;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--status-color--connected: #00dd00;
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--status-color--connected: #00aa00;
			}

			.status--disconnected.integration {
				color: var(--color-foreground--25);
			}

			.status--connected:not(.is-locked) .status-indicator {
				color: var(--status-color--connected);
			}

			gl-tooltip.status-indicator {
				margin-right: 0.4rem;
			}

			.integrations {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.integration-row {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			.integration-row--ai {
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.status--disconnected .integration__icon {
				color: var(--color-foreground--25);
			}

			.integration__content {
				flex: 1 1 auto;
				display: block;
			}

			.integration__title {
				display: flex;
				justify-content: space-between;
			}

			.integration__title gl-feature-badge {
				vertical-align: super;
			}

			.integration__details {
				display: block;
				color: var(--color-foreground--75);
				font-size: 1rem;
			}

			.status--disconnected .integration__title,
			.status--disconnected .integration__details {
				color: var(--color-foreground--50);
			}

			.integration__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: flex-start;
				justify-content: flex-end;
			}

			button-container {
				margin-bottom: 0.4rem;
				width: 100%;
			}

			p {
				margin: 0;
			}

			gl-popover::part(body) {
				--max-width: 90vw;
			}
		`],nM([ez("#chip")],nj.prototype,"_chip",2),nM([C({context:"state",subscribe:!0}),eT()],nj.prototype,"_state",2),nj=nM([eB("gl-integrations-chip")],nj);let nF=new Map([["prs","pull requests"],["issues","issues"]]),nq={gettingStarted:"Getting Started",homeView:"Home View",visualizeCodeHistory:"Visualize Code History",prReviews:"PR Reviews",streamlineCollaboration:"Streamline Collaboration",integrations:"Integrations",aiFeatures:"AI Features"};var nU=Object.defineProperty,nW=Object.getOwnPropertyDescriptor,nG=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nW(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nU(t,o,n),n};let nH=class extends lit_element_i{constructor(){super(...arguments),this.onDismissWalkthrough=()=>{this._state.walkthroughProgress=void 0,this._ipc.sendCommand(e2),this.requestUpdate()}}render(){if(null!=this._state.walkthroughProgress)return ew`<gl-button
				@click=${this.onDismissWalkthrough}
				class="walkthrough-progress__button"
				appearance="toolbar"
				tooltip="Dismiss"
				aria-label="Dismiss"
				><code-icon icon="x"></code-icon
			></gl-button>
			<gl-tooltip placement="bottom">
				<a
					class="walkthrough-progress"
					href=${rh("gitlens.openWalkthrough",{source:{source:"home",detail:"onboarding"}})}
				>
					<header class="walkthrough-progress__title">
						<span
							>GitLens Walkthrough
							(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
						>
					</header>
					<progress
						class="walkthrough-progress__bar"
						value=${this._state.walkthroughProgress.progress}
					></progress>
				</a>
				<div slot="content">
					<div>Open Walkthrough</div>
					<hr />
					${this.renderWalkthroughProgress()}
				</div>
			</gl-tooltip>`}renderWalkthroughProgress(){if(null!=this._state.walkthroughProgress)return ew`<p class="walkthrough-progress__label">
				Walkthrough Progress
				(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})
			</p>
			<ul class="walkthrough-progress__steps">
				${Object.entries(nq).map(([e,t])=>{let o=this._state.walkthroughProgress.state[e];return ew`<li class="walkthrough-progress__step ${o?"completed":""}">
						<code-icon icon="${o?"pass":"circle-large"}"></code-icon>
						<span class="walkthrough-progress__step-label">${t}</span>
					</li>`})}
			</ul>`}};nH.styles=[o3,re,rg,E`
			.walkthrough-progress__label {
				margin-block: 0;
			}
			.walkthrough-progress__steps {
				margin-block: 0;
				padding-inline-start: 0;
			}
			.walkthrough-progress__step {
				list-style: none;
				margin-block-start: 0.3rem;
			}
			.walkthrough-progress__step-label {
				margin-inline-start: 0.3rem;
			}
			code-icon[icon='circle-large'] {
				color: var(--color-foreground--50);
			}
			code-icon[icon='pass'] {
				color: #00dd00;
			}
		`],nG([C({context:"state",subscribe:!0}),eT()],nH.prototype,"_state",2),nG([C({context:"ipc",subscribe:!0}),eT()],nH.prototype,"_ipc",2),nH=nG([eB("gl-onboarding")],nH);var nV=Object.defineProperty,nK=Object.getOwnPropertyDescriptor,nY=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?nK(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&nV(t,o,n),n};let nJ=class extends lit_element_i{render(){return ew`<gl-promo-banner></gl-promo-banner>
			<div class="container" tabindex="-1">
				<span class="group"><gl-account-chip></gl-account-chip></span>
				<gl-integrations-chip></gl-integrations-chip>
			</div>
			<gl-onboarding></gl-onboarding>`}show(){this.accountChip.show()}refreshPromo(){this.promoBanner?.requestUpdate()}};function nZ(e,t,o,r){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...r}))}`}nJ.styles=[o5,o8,E`
			:host {
				display: block;
			}

			.container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.6rem;
			}

			.container:focus,
			.container:focus-within {
				outline: none;
			}

			/* .actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			} */

			gl-promo-banner {
				margin: 0 0.2rem 0.6rem;
			}

			gl-promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}

			.group {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}
		`],nY([ez("gl-account-chip")],nJ.prototype,"accountChip",2),nY([ez("gl-promo-banner")],nJ.prototype,"promoBanner",2),nJ=nY([eB("gl-home-header")],nJ);let nX=new Map([["current-branch","$(git-branch)"],["pinned","$(pinned)"],["mergeable","$(rocket)"],["blocked","$(error)"],["follow-up","$(report)"],["needs-review","$(comment-unresolved)"],["waiting-for-review","$(gitlens-clock)"],["draft","$(git-pull-request-draft)"],["other","$(ellipsis)"],["snoozed","$(bell-slash)"]]),nQ=new Map([["current-branch","Current Branch"],["pinned","Pinned"],["mergeable","Ready to Merge"],["blocked","Blocked"],["follow-up","Requires Follow-up"],["needs-review","Needs Your Review"],["waiting-for-review","Waiting for Review"],["draft","Draft"],["other","Other"],["snoozed","Snoozed"]]),n0=new Map([["mergeable","mergeable"],["conflicts","blocked"],["failed-checks","blocked"],["unassigned-reviewers","blocked"],["needs-my-review","needs-review"],["code-suggestions","follow-up"],["changes-requested","follow-up"],["reviewer-commented","follow-up"],["waiting-for-review","waiting-for-review"],["draft","draft"],["other","other"]]),n1=new Map([["mergeable",["Ready to Merge","Ready to merge"]],["unassigned-reviewers",["Unassigned Reviewers","You need to assign reviewers"]],["failed-checks",["Failed Checks","You need to resolve the failing checks"]],["conflicts",["Resolve Conflicts","You need to resolve merge conflicts"]],["needs-my-review",["Needs Your Review","${author} requested your review"]],["code-suggestions",["Code Suggestions","Code suggestions have been made on this pull request"]],["changes-requested",["Changes Requested","Reviewers requested changes before this can be merged"]],["reviewer-commented",["Reviewers Commented","Reviewers have commented on this pull request"]],["waiting-for-review",["Waiting for Review","Waiting for reviewers to approve this pull request"]],["draft",["Draft","Continue working on your draft"]],["other",["Other","Opened by ${author} ${createdDateRelative}"]]]);var n2=Object.defineProperty,n5=Object.getOwnPropertyDescriptor,n8=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?n5(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n2(t,o,n),n};let n6=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return ew`<span class="${this.worktree?"worktree":"branch"}"
			><code-icon
				class="icon"
				icon="${this.worktree?"gl-worktree":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span></span
		>`}};function n3(e,t){return ew`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}n6.styles=E`
		:host {
			display: inline-block;
			max-width: 100%;
			align-content: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
			margin-top: -3px;
		}

		.icon {
			margin: 0 0.3rem 0.1rem 0.2rem;
		}

		.worktree .icon {
			margin-right: 0.4rem;
		}

		.label {
			font-weight: bold;
		}
	`,n8([eL({type:String})],n6.prototype,"name",2),n8([eL({type:Number})],n6.prototype,"size",2),n8([eL({type:Boolean})],n6.prototype,"worktree",2),n6=n8([eB("gl-branch-name")],n6);var n4=Object.defineProperty,n9=Object.getOwnPropertyDescriptor,n7=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?n9(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&n4(t,o,n),n};let se=class extends lit_element_i{render(){return this.name?ew`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ew`<a href=${this.href} class="avatar">${this.renderContent()}</a>`:ew`<span class="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ew`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ew`<slot class="thumb thumb--text"></slot>`}};se.styles=[E`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],n7([eL()],se.prototype,"src",2),n7([eL()],se.prototype,"name",2),n7([eL()],se.prototype,"href",2),se=n7([eB("gl-avatar")],se);var st=Object.defineProperty,so=Object.getOwnPropertyDescriptor,sr=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?so(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&st(t,o,n),n};let si=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return ew`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){let e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return ew`
			${e.map(e=>ew`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}></gl-avatar>`)}
			${eN(t.length>0,()=>ew`<gl-popover>
						<gl-avatar slot="anchor" class="overflow">+${t.length}</gl-avatar>
						<div slot="content" class="overflow-list">
							${t.map(e=>ew`<gl-avatar
										.src=${e.src}
										.name=${e.name}
										.href=${e.href}
									></gl-avatar>`)}
						</div>
					</gl-popover>`)}
		`}};sr([eL({type:Number})],si.prototype,"max",2),sr([eL({type:Array})],si.prototype,"avatars",2),si=sr([eB("gl-avatar-list")],si);let sn=class extends lit_element_i{render(){return ew`<slot class="avatar-group" part="base"></slot>`}};sn.styles=[E`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within::slotted(*),
			.avatar-group:hover::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within::slotted(*:focus),
			.avatar-group:hover::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],sn=sr([eB("gl-avatar-group")],sn);var ss=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,sl=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sa(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ss(t,o,n),n};let sc=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),sd=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return sc.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let o=this[e];return null==o?e$:ew`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?ew`<code-icon class="icon" icon="${t}"></code-icon>`:ew`<span>${e}</span>`}};sd.styles=E`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,sl([eL({type:Number})],sd.prototype,"added",2),sl([eL({type:Number})],sd.prototype,"modified",2),sl([eL({type:Number})],sd.prototype,"removed",2),sl([eL()],sd.prototype,"symbol",2),sd=sl([eB("commit-stats")],sd);var sh=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,su=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sp(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sh(t,o,n),n};let sg=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(e,t,r,i=!0){t=t??void 0;let n=`${(void 0)??""}:${t}`,a=on.get(n);if(null==a){let e,r=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=or.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(oo))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(t);e=o,a=new Intl.DateTimeFormat(e,r),i&&on.set(n,a)}if(null==t||or.test(t))return a.format(e);let l=a.formatToParts(e);return t.replace(oo,(t,n,a,c,d,h,p,u,g,m,b,f,v,w,_)=>{if(null!=n)return n.substring(1,n.length-1);for(let[t,n]of Object.entries(_)){if(null==n)continue;let a=l.find(e=>e.type===t);if("Do"===n&&a?.type==="day"){var $=Number(a.value);let e=$%100;return`${$}${ol[(e-20)%10]??ol[e]??ol[0]}`}if("a"===n&&a?.type==="dayPeriod"){let t=(function(e){let t=`${r??""}:time:${e}`,n=on.get(t);if(null==n){let a;a=null==r?o:"system"===r?void 0:[r],n=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:e}),i&&on.set(t,n)}return n})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?oa(this.date):this.absoluteDate}render(){return ew`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};su([eL()],sg.prototype,"format",2),su([eL({attribute:"date-style"})],sg.prototype,"dateStyle",2),su([eL({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],sg.prototype,"date",2),su([eL()],sg.prototype,"tooltip",2),sg=su([eB("formatted-date")],sg);let sm=E`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var sb=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,sv=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sf(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sb(t,o,n),n};let sy=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:e$:ew`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${eN(this.behind>0,()=>ew`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${eN(this.ahead>0,()=>ew`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${eN(this.working>0,()=>ew`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};sy.styles=[sm,E`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],sv([eL({type:Number})],sy.prototype,"ahead",2),sv([eL({type:Number})],sy.prototype,"behind",2),sv([eL({type:Number})],sy.prototype,"working",2),sv([eL({type:Boolean,attribute:"always-show"})],sy.prototype,"alwaysShow",2),sv([eL({type:Boolean})],sy.prototype,"outlined",2),sv([eL({type:Boolean})],sy.prototype,"colorized",2),sv([eL({type:Boolean})],sy.prototype,"missingUpstream",2),sy=sv([eB("gl-tracking-pill")],sy);let sw=E`
	.issue-icon--opened {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-icon--closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
	}
`;var s_=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,s$=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sk(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&s_(t,o,n),n};let sx=class extends lit_element_i{get icon(){let e="issues";if(this.state)switch(this.state){case"opened":e="issues";break;case"closed":e="pass"}return e}get classes(){return this.state?`issue-icon issue-icon--${this.state}`:"issue-icon"}get label(){return this.state?`Issue ${this.issueId?`#${this.issueId}`:""} is ${this.state}`:"Issue"}render(){return this.state?ew`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??e$}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:ew`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??e$}
			></code-icon>`}};sx.styles=[sw],s$([eL()],sx.prototype,"state",2),s$([eL({attribute:"issue-id"})],sx.prototype,"issueId",2),sx=s$([eB("issue-icon")],sx);let sC=E`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var sS=Object.defineProperty,sP=Object.getOwnPropertyDescriptor,sO=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sP(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sS(t,o,n),n};let sA=class extends lit_element_i{constructor(){super(...arguments),this.draft=!1}get icon(){let e=this.draft?"git-pull-request-draft":"git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return!this.state||this.draft&&"opened"===this.state?"pr-icon":`pr-icon pr-icon--${this.state}`}get label(){let e=this.draft?"Draft pull request":"Pull request";return this.state?`${e} ${this.prId?`#${this.prId}`:""} is ${this.state}`:e}render(){return this.state?ew`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??e$}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:ew`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??e$}
			></code-icon>`}};sA.styles=[sC],sO([eL()],sA.prototype,"state",2),sO([eL({type:Boolean})],sA.prototype,"draft",2),sO([eL({attribute:"pr-id"})],sA.prototype,"prId",2),sA=sO([eB("pr-icon")],sA);let sR=navigator?.userAgentData?.platform,sI=navigator.userAgent;"Linux"===sR||sI.includes("Linux");let sB="macOS"===sR||sI.includes("Macintosh");"Windows"===sR||sI.includes("Windows");var sE=Object.defineProperty,sL=Object.getOwnPropertyDescriptor,sT=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sL(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sE(t,o,n),n};let sD=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${sB?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return ew`
			<gl-tooltip hoist content="${this.effectiveTooltip??e$}">
				<a
					role="${!this.effectiveHref?"button":e$}"
					type="${!this.effectiveHref?"button":e$}"
					aria-label="${this.effectiveLabel??e$}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??e$}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};sD.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sD.styles=E`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${o0}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,sT([eL()],sD.prototype,"href",2),sT([eL({attribute:"alt-href"})],sD.prototype,"altHref",2),sT([eL()],sD.prototype,"label",2),sT([eL({attribute:"alt-label"})],sD.prototype,"altLabel",2),sT([eL()],sD.prototype,"icon",2),sT([eL({attribute:"alt-icon"})],sD.prototype,"altIcon",2),sT([eL({type:Boolean})],sD.prototype,"disabled",2),sT([ez("a")],sD.prototype,"defaultFocusEl",2),sT([eT()],sD.prototype,"isAltKeyPressed",2),sD=sT([eB("action-item")],sD);var sz=Object.defineProperty,sN=Object.getOwnPropertyDescriptor,sM=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sN(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sz(t,o,n),n};let sj=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return ew`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,r=this.actionNodes.map((e,r)=>(e.setAttribute("aria-posinset",`${r+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===r?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10),r=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;r=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;r=this.actionNodes[e]}null!=r&&r!==t&&(t.setAttribute("tabindex","-1"),r.setAttribute("tabindex","0"),r.focus())}};sj.styles=E`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,sM([(m={flatten:!0},(e,t)=>{let{slot:o,selector:r}=m??{},i="slot"+(o?`[name=${o}]`:":not([name])");return eD(e,t,{get(){let e=this.renderRoot?.querySelector(i),t=e?.assignedElements(m)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],sj.prototype,"actionNodes",2),sj=sM([eB("action-nav")],sj);var sF=Object.defineProperty,sq=Object.getOwnPropertyDescriptor,sU=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sq(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sF(t,o,n),n};let sW=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return ew`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let e;if(!this.worktree&&(!this.status||"local"===this.status))return ew`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return ew`<code-icon icon="git-commit"></code-icon>`;let t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree&&!1===this.isDefault?e_`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:e_`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let e,t=this.branch?n3(this.branch):"Branch",o=this.upstream?n3(this.upstream):"its upstream";switch(this.status){case"diverged":e=ew`${t} has diverged from ${o}`;break;case"behind":e=ew`${t} is behind ${o}`;break;case"ahead":e=ew`${t} is ahead of ${o}`;break;case"missingUpstream":e=ew`${t} is missing its upstream ${o}`;break;case"upToDate":e=ew`${t} is up to date with ${o}`;break;case"local":e=ew`${t} is a local branch which hasn't been published`;break;case"remote":e=ew`${t} is a remote branch`;break;case"detached":e=ew`${t} is in a detached state, i.e. checked out to a commit or tag`;break;default:e=ew`${t} is in an unknown state`}return e=ew`<p>${e}</p>`,this.worktree?e=this.hasChanges?ew`${e}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:ew`${e}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(e=ew`${e}
				<p>Has working (uncommitted) changes</p>`),e}};sW.styles=E`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,sU([eL({type:String})],sW.prototype,"branch",2),sU([eL({type:String})],sW.prototype,"status",2),sU([eL({type:Boolean})],sW.prototype,"hasChanges",2),sU([eL({type:String})],sW.prototype,"upstream",2),sU([eL({type:Boolean})],sW.prototype,"worktree",2),sU([eL({type:Boolean,attribute:"is-default"})],sW.prototype,"isDefault",2),sW=sU([eB("gl-branch-icon")],sW);let sG=E`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
		min-width: 4.6rem;
	}

	* {
		box-sizing: border-box;
	}
`,sH=E`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,sV=E`
	.truncated-button {
		max-width: 100%;
		min-width: 4rem;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var sK=Object.defineProperty,sY=Object.getOwnPropertyDescriptor,sJ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sK(t,o,n),n};let sZ=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return e$;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ew`${this.icon?ew`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:e$}<span class="label">${this.ref.name}</span>`}};sZ.styles=E`
		:host {
			box-sizing: border-box;
			display: flex;
			align-content: center;

			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			gap: 0.4rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			min-width: 2.4rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}
	`,sJ([eL({type:Boolean,reflect:!0})],sZ.prototype,"icon",2),sJ([eL({type:Object})],sZ.prototype,"ref",2),sJ([eL({type:Number})],sZ.prototype,"size",2),sJ([eL({type:Boolean})],sZ.prototype,"worktree",2),sZ=sJ([eB("gl-ref-name")],sZ);var sX=Object.defineProperty,sQ=Object.getOwnPropertyDescriptor,s0=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?sQ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&sX(t,o,n),n};let s1=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ew`<gl-button appearance="toolbar" href=${this.href??e$} ?disabled=${this.disabled}
			>${null==this.ref?ew`<slot name="empty">&lt;missing&gt;</slot>`:ew`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};s1.styles=[sG,E`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,sH],s0([eL({type:Boolean,reflect:!0})],s1.prototype,"disabled",2),s0([eL({type:String,reflect:!0})],s1.prototype,"href",2),s0([eL({type:Boolean,reflect:!0})],s1.prototype,"icon",2),s0([eL({type:Object})],s1.prototype,"ref",2),s0([eL({type:Number})],s1.prototype,"size",2),s0([eL({type:Boolean})],s1.prototype,"worktree",2),s1=s0([eB("gl-ref-button")],s1);var s2=Object.defineProperty,s5=Object.getOwnPropertyDescriptor,s8=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?s5(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&s2(t,o,n),n};let s6=E`
	.header__actions {
		margin-top: 0.4rem;
	}

	.content {
		gap: 0.6rem;
	}

	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast) {
		--color-status--in-sync: #00bb00;
		--color-merge--clean: #00bb00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--color-status--in-sync: #00aa00;
		--color-merge--clean: #00aa00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title > span {
		cursor: help;
	}

	.header__title code-icon:not(.info) {
		margin-bottom: 0.1rem;
	}

	.header__title code-icon.status--warning {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title p {
		margin: 0.5rem 0 0 0;
	}

	.header__subtitle {
		font-size: 1.3rem;
		margin: 0.2rem 0 0 0;
	}

	.status--conflict .icon,
	.status--conflict .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--behind .icon,
	.status--behind .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--merged .icon,
	.status--merged .status-indicator {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}

	.status--merged .icon {
		transform: rotateY(180deg);
	}

	.status--in-sync .status-indicator {
		color: var(--color-status--in-sync);
	}

	.status--merge-conflict {
		color: var(--color-merge--conflict);
	}

	.status--merge-clean {
		color: var(--color-merge--clean);
	}

	.status--upgrade {
		color: var(--color-foreground--50);
	}

	.status-indicator {
		margin-left: -0.5rem;
		margin-top: 0.8rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.button-container gl-button {
		max-width: 30rem;
	}

	p {
		margin: 0 0.4rem;
	}

	p code-icon,
	gl-button code-icon {
		margin-bottom: 0.1rem;
	}

	details {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 0;
		position: relative;
		margin: 0 0.2rem 0.4rem;
		overflow: hidden;
		border: 1px solid transparent;
		color: var(--color-foreground--85);
	}

	details[open] {
		border-radius: 0.3rem;
		border: 1px solid var(--vscode-sideBar-border);
	}

	summary {
		position: sticky;
		top: 0;
		color: var(--color-foreground);
		cursor: pointer;
		list-style: none;
		transition: transform ease-in-out 0.1s;
		padding: 0.4rem 0.6rem 0.4rem 0.6rem;
		z-index: 1;
	}

	summary:hover {
		color: var(--vscode-textLink-activeForeground);
	}

	details[open] > summary {
		color: var(--vscode-textLink-foreground);
		border-radius: 0.3rem 0.3rem 0 0;
		margin-left: 0;
		background: var(--vscode-sideBar-background);
	}

	details[open] > summary code-icon {
		transform: rotate(90deg);
	}

	summary code-icon {
		transition: transform 0.2s;
	}

	.files {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		max-height: 8rem;
		overflow-y: auto;
		padding: 0.4rem 0.8rem;

		background: var(--vscode-sideBar-background);
	}

	gl-popover {
		--max-width: 80vw;
	}

	.target-edit * {
		text-decoration: underline dotted;
		text-underline-offset: 0.3rem;
	}
`,s3=class extends lit_element_i{get target(){return this._target}get targetPromise(){return this._targetPromise}set targetPromise(e){this._targetPromise!==e&&(this._targetPromise=e,this._targetPromise?.then(e=>this._target=e,()=>this._target=void 0))}get conflicts(){return this.target?.potentialConflicts}get mergedStatus(){return this.target?.mergedStatus}get status(){return this.target?.status}get branchRef(){if(null!=this.branch)return{repoPath:this.branch.repoPath,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get targetBranchRef(){if(null!=this.target)return{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name}}render(){let e,t;return this.status||this.conflicts?(this.mergedStatus?.merged?(e="git-merge",t="merged"):this.conflicts?(e="warning",t="conflict"):(this.status?.behind??0)>0?(e="arrow-down",t="behind"):(e="check",t="in-sync"),ew`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${t}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${t}" icon="${e}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">${this.renderContent()}</div>
		</gl-popover>`):e$}renderContent(){let e=n3(this.target?.name),t=this.mergedStatus?.merged&&this.mergedStatus.localBranchOnly?{repoPath:this.branch.repoPath,branchId:this.mergedStatus.localBranchOnly.id,branchName:this.mergedStatus.localBranchOnly.name,branchUpstreamName:this.mergedStatus.localBranchOnly.upstream?.name}:this.target?{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name,branchUpstreamName:void 0}:void 0;return this.mergedStatus?.merged?this.mergedStatus.localBranchOnly?ew`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged Locally into Merge Target`,"git-merge")}
					<div class="body">
						<p>
							Your current branch ${n3(this.branch.name)} has
							${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge
							target's local branch ${n3(this.mergedStatus.localBranchOnly.name)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${rh("gitlens.home.pushBranch",t)}"
								>Push ${n3(this.mergedStatus.localBranchOnly.name)}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${rh("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
								>Delete
								${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
								${n3(this.branch.name,null!=this.branch.worktree)}</gl-button
							>
						</div>
					</div>`:ew`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged into Merge Target`,"git-merge")}
				<div class="body">
					<p>
						Your current branch ${n3(this.branch.name)} has
						${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${rh("gitlens.home.deleteBranchOrWorktree",[this.branchRef,t])}"
							>Delete
							${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
							${n3(this.branch.name,null!=this.branch.worktree)}</gl-button
						>
					</div>
				</div>`:this.conflicts?ew`${this.renderHeader("Potential Conflicts with Merge Target","warning","warning")}
				<div class="body">
					${this.status?ew`<p>
								Your current branch ${n3(this.branch.name)} is
								${og("commit",this.status.behind)} behind its merge target
								${this.renderInlineTargetEdit(this.target)}.
							</p>`:e$}
					<div class="button-container">
						<gl-button
							full
							href="${rh("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
							>Rebase ${n3(this.conflicts.branch)} onto ${e}</gl-button
						>
						<gl-button
							full
							appearance="secondary"
							href="${rh("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
							>Merge ${e} into ${n3(this.conflicts.branch)}</gl-button
						>
					</div>
					<p class="status--merge-conflict">
						<code-icon icon="warning"></code-icon> Merging will cause conflicts in
						${og("file",this.conflicts.files.length)} that will need to be resolved.
					</p>
					${this.renderFiles(this.conflicts.files)}
				</div>`:null!=this.status?this.status.behind>0?ew`${this.renderHeader(`${og("Commit",this.status.behind)} Behind Merge Target`,"arrow-down","warning")}
					<div class="body">
						<p>
							Your current branch ${n3(this.branch.name)} is
							${og("commit",this.status.behind)} behind its merge target
							${this.renderInlineTargetEdit(this.target)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${rh("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
								>Rebase ${n3(this.branch.name)} onto ${e}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${rh("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
								>Merge ${e} into ${n3(this.branch.name)}</gl-button
							>
						</div>
						<p class="status--merge-clean">
							<code-icon icon="check"></code-icon> Merging will not cause conflicts.
						</p>
					</div>`:ew`${this.renderHeader("Up to Date with Merge Target","check")}
				<div class="body">
					<p>
						Your current branch ${n3(this.branch.name)} is up to date with its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
				</div>`:e$}renderHeader(e,t,o){return ew`<div class="header">
			<gl-tooltip class="header__title">
				<span>
					<code-icon
						icon="${t}"
						class="${(o?`status--${o}`:void 0)??e$}"
					></code-icon>
					${e}&nbsp;<code-icon class="info" icon="question" size="16"></code-icon>
				</span>
				<span slot="content"
					>${e}
					<p>
						The "merge target" is the branch that ${n3(this.branch.name)} is most likely to be
						merged into.
					</p>
				</span>
			</gl-tooltip>
			${this.renderHeaderActions()}
		</div>`}renderHeaderActions(){let e=this.branchRef,t=this.targetBranchRef;return ew`<span class="header__actions"
			>${e&&t?ew`<gl-button
							href="${rh("gitlens.home.changeBranchMergeTarget",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="pencil"></code-icon
							><span slot="tooltip"
								>Change Merge Target<br />${n3(this.target?.name)}</span
							></gl-button
						><gl-button
							href="${rh("gitlens.home.openMergeTargetComparison",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="git-compare"></code-icon>
							<span slot="tooltip"
								>Compare Branch with Merge Target<br />${n3(this.branch.name)}
								<code-icon icon="arrow-both" size="12"></code-icon> ${n3(this.target?.name)}</span
							>
						</gl-button>`:e$}<gl-button
				href="${rh("gitlens.home.fetch",this.targetBranchRef)}"
				appearance="toolbar"
				><code-icon icon="repo-fetch"></code-icon>
				<span slot="tooltip">Fetch Merge Target<br />${n3(this.target?.name)}</span>
			</gl-button></span
		>`}renderInlineTargetEdit(e){return ew`<gl-button
			class="target-edit"
			appearance="toolbar"
			density="compact"
			tooltip="Change Merge Target"
			href="${rh("gitlens.home.changeBranchMergeTarget",{...this.branchRef,mergeTargetId:this.targetBranchRef.branchId,mergeTargetName:this.targetBranchRef.branchName})}"
			>${n3(e?.name)}</gl-button
		>`}renderFiles(e){return ew`
			<details>
				<summary>
					<code-icon icon="chevron-right"></code-icon>
					Show ${e.length} conflicting files
				</summary>
				<div class="files scrollable">${e.map(e=>this.renderFile(e.path))}</div>
			</details>
		`}renderFile(e){return ew`<span class="files__item"><code-icon icon="file"></code-icon> ${e}</span>`}};s3.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},s3.styles=[o5,o8,rp,o6,s6],s8([eL({type:Object})],s3.prototype,"branch",2),s8([eT()],s3.prototype,"_target",2),s8([eL({type:Object})],s3.prototype,"targetPromise",1),s3=s8([eB("gl-merge-target-status")],s3);let s4=class extends lit_element_i{render(){let e="upgrade";return ew`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${e}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${e}" icon="${"warning"}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Detect potential merge conflicts</span>
				</div>
				<div class="body">
					<p>
						Upgrade to GitLens Pro to see when your current branch has potential conflicts with its merge
						target branch and take action to resolve them.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${rh("gitlens.plus.upgrade",{plan:"pro",source:"merge-target"})}"
							>Upgrade to Pro</gl-button
						>
					</div>
				</div>
			</div>
		</gl-popover>`}};s4.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},s4.styles=[o5,o8,rp,o6,s6],s4=s8([eB("gl-merge-target-upgrade")],s4);var s9=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,ae=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?s7(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&s9(t,o,n),n};let at=E`
	* {
		box-sizing: border-box;
	}

	gl-avatar-list {
		--gl-avatar-size: 2.4rem;
		margin-block: -0.4rem;
	}

	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.branch-item__container > * {
		margin-block: 0;
	}

	.branch-item__section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.branch-item__section > * {
		margin-block: 0;
	}

	.branch-item__section--details {
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 0.9em;
	}

	/* :empty selector doesn't work with lit */
	.branch-item__actions:not(:has(*)) {
		display: none;
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
		flex: none;
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__name--secondary {
		font-weight: normal;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		flex-wrap: wrap;
		white-space: nowrap;
	}

	.branch-item__changes formatted-date {
		margin-inline-end: auto;
	}

	.branch-item__summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.branch-item__collapsed-actions {
		position: absolute;
		z-index: var(--gl-branch-card-actions-zindex, 2);
		right: 0.4rem;
		bottom: 0.3rem;
		padding: 0.4rem 0.6rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__collapsed-actions {
		${oQ}
	}

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}

	.work-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}
	.work-item::part(base) {
		margin-block-end: 0;
	}

	.branch-item__section.mb-1 {
		margin-block: 0.4rem;
	}

	.branch-item__merge-target {
		margin-inline-end: auto;
	}

	.branch-item__row {
		display: flex;
		gap: 0.8rem;
	}

	.branch-item__row [full] {
		flex-grow: 1;
	}

	.branch-item__missing {
		--button-foreground: inherit;
	}

	:host-context(.vscode-dark) .branch-item__missing,
	:host-context(.vscode-high-contrast) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 12%);
	}

	:host-context(.vscode-light) .branch-item__missing,
	:host-context(.vscode-high-contrast-light) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 14%);
	}

	.branch-item__category {
		margin-inline-start: 0.6rem;
	}

	.launchpad-grouping--mergeable {
		color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
	}

	.launchpad-grouping--blocked {
		color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
	}

	.launchpad-grouping--attention {
		color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
	}

	.tracking__pill,
	.wip__pill {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.tracking__tooltip,
	.wip__tooltip {
		display: contents;
		vertical-align: middle;
	}

	.tracking__tooltip p,
	.wip__tooltip p {
		margin-block: 0;
	}

	p.tracking__tooltip--wip {
		margin-block-start: 1rem;
	}
`;let GlBranchCardBase=class GlBranchCardBase extends GlElement{constructor(){super(...arguments),this.showUpgrade=!1,this.busy=!1,this.expanded=!1,this.expandable=!1,this.onFocus=e=>{e.composedPath().some(e=>e.matches?.("action-item")??!1)||this.expanded||this.toggleExpanded(!0)}}static{this.styles=[ru,at]}get branch(){return this._branch}set branch(e){this._branch=e,this.autolinksPromise=e?.autolinks,this.contributorsPromise=e?.contributors,this.issuesPromise=e?.issues,this.prPromise=e?.pr,this.mergeTargetPromise=e?.mergeTarget,this.remotePromise=e?.remote,this.wipPromise=e?.wip}get autolinks(){return this._autolinks}get autolinksPromise(){return this._autolinksPromise}set autolinksPromise(e){this._autolinksPromise!==e&&(this._autolinksPromise=e,this._autolinksPromise?.then(e=>this._autolinks=e,()=>this._autolinks=void 0))}get contributors(){return this._contributors}get contributorsPromise(){return this._contributorsPromise}set contributorsPromise(e){this._contributorsPromise!==e&&(this._contributorsPromise=e,this._contributorsPromise?.then(e=>this._contributors=e,()=>this._contributors=void 0))}get issues(){return this._issues}get issuesPromise(){return this._issuesPromise}set issuesPromise(e){this._issuesPromise!==e&&(this._issuesPromise=e,this._issuesPromise?.then(e=>this._issues=e,()=>this._issues=void 0))}get pr(){return this._pr}get prPromise(){return this._prPromise}set prPromise(e){this._prPromise!==e&&(this._prPromise=e,this._prPromise?.then(e=>{this._pr=e,this.launchpadItemPromise=e?.launchpad},()=>{this._pr=void 0,this.launchpadItemPromise=void 0}))}get launchpadItem(){return this._launchpadItem}get launchpadItemPromise(){return this._launchpadItemPromise}set launchpadItemPromise(e){this._launchpadItemPromise!==e&&(this._launchpadItemPromise=e,this._launchpadItemPromise?.then(e=>this._launchpadItem=e,()=>this._launchpadItem=void 0))}get mergeTarget(){return this._mergeTarget}get mergeTargetPromise(){return this._mergeTargetPromise}set mergeTargetPromise(e){this._mergeTargetPromise!==e&&(this._mergeTargetPromise=e,this._mergeTargetPromise?.then(e=>this._mergeTarget=e,()=>this._mergeTarget=void 0))}get remote(){return this._remote}get remotePromise(){return this._remotePromise}set remotePromise(e){this._remotePromise!==e&&(this._remotePromise=e,this._remotePromise?.then(e=>this._remote=e,()=>this._remote=void 0))}get wip(){return this._wip}get wipPromise(){return this._wipPromise}set wipPromise(e){this._wipPromise!==e&&(this._wipPromise=e,this._wipPromise?.then(e=>this._wip=e,()=>this._wip=void 0))}onExpandableChanged(){this.attachFocusListener()}get branchRef(){return{repoPath:this.repo,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get isWorktree(){return null!=this.branch.worktree&&!this.branch.worktree.isDefault}get cardIndicator(){return an(ai(this.pr,this.launchpadItem))??"base"}get branchCardIndicator(){if(this.branch.opened){if(this.wip?.pausedOpStatus!=null){if(this.wip?.hasConflicts)return"conflict";switch(this.wip.pausedOpStatus.type){case"cherry-pick":return"cherry-picking";case"merge":return"merging";case"rebase":return"rebasing";case"revert":return"reverting"}}if(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0)return"branch-changes";if(this.mergeTarget?.mergedStatus?.merged)return"branch-merged";switch(this.branch.status){case"ahead":return"branch-ahead";case"behind":return"branch-behind";case"diverged":return"branch-diverged";case"upToDate":return"branch-synced";case"missingUpstream":return"branch-missingUpstream";default:return}}}connectedCallback(){super.connectedCallback?.(),this.attachFocusListener()}disconnectedCallback(){super.disconnectedCallback?.(),this.eventController?.abort()}attachFocusListener(){this.eventController?.abort(),this.eventController=void 0,this.expandable&&(null==this.eventController&&(this.eventController=new AbortController),this.addEventListener("focusin",this.onFocus,{signal:this.eventController.signal}))}renderIssues(){let{autolinks:e,issues:t}=this,o=t?.length?t:e;return o?.length?ew`
			${o.map(e=>ew`
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<issue-icon state=${e.state} issue-id=${e.id}></issue-icon>
						</span>
						<a href=${e.url} class="branch-item__name branch-item__name--secondary">${e.title}</a>
						<span class="branch-item__identifier">${isNaN(parseInt(e.id))?"":"#"}${e.id}</span>
					</p>
				`)}
		`:e$}renderWip(){let e=this.wip?.workingTreeState;if(null==e)return e$;let t=as(e);return ew`<gl-tooltip class="wip__pill" placement="bottom"
			><commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>
			<span class="wip__tooltip" slot="content">
				<p>${t.length?`${t.join(", ")} in the working tree`:"No working tree changes"}</p>
			</span>
		</gl-tooltip>`}renderAvatars(){let{contributors:e}=this;return e?.length?ew`<gl-avatar-list
			.avatars=${e.map(e=>({name:e.name,src:e.avatarUrl}))}
			max="1"
		></gl-avatar-list>`:e$}renderTracking(e=!1){let t,o;if(null==this.branch.upstream)return e$;let{state:r}=this.branch.upstream,i=0;if(e){let e=this.wip?.workingTreeState;if(null!=e){i=e.added+e.changed+e.deleted;let o=as(e);o.length&&(t=ew`<p class="tracking__tooltip--wip">${o.join(", ")} in the working tree</p>`)}}if(this.branch.upstream.missing)o=ew`${n3(this.branch.name)} is missing its upstream
			${n3(this.branch.upstream.name)}`;else{let e=[];r.behind&&e.push(`${og("commit",r.behind)} behind`),r.ahead&&e.push(`${og("commit",r.ahead)} ahead of`),o=e.length?ew`${n3(this.branch.name)} is
				${e.join(", ")}${n3(this.branch.upstream?.name)}`:ew`${n3(this.branch.name)} is up to date with
				${n3(this.branch.upstream?.name)}`}return ew`<gl-tooltip class="tracking__pill" placement="bottom"
			><gl-tracking-pill
				class="pill"
				colorized
				outlined
				always-show
				ahead=${r.ahead}
				behind=${r.behind}
				working=${i}
				?missingUpstream=${this.branch.upstream?.missing??!1}
			></gl-tracking-pill>
			<span class="tracking__tooltip" slot="content">${o}${t}</span></gl-tooltip
		>`}renderBranchActions(){let e=this.getBranchActions?.();return e?.length?ew`<action-nav>${e}</action-nav>`:e$}renderPrActions(){let e=this.getPrActions?.();return e?.length?ew`<action-nav>${e}</action-nav>`:e$}renderCollapsedActions(){if(this.expanded)return e$;let e=this.getCollapsedActions?.();return e?.length?ew`<action-nav class="branch-item__collapsed-actions">${e}</action-nav>`:e$}createWebviewCommandLink(e,t){return nZ(e,"gitlens.views.home","",t?{...t,...this.branchRef}:this.branchRef)}createCommandLink(e,t){return rh(e,t?{...t,...this.branchRef}:this.branchRef)}renderTimestamp(){let{timestamp:e}=this.branch;return null==e?e$:ew`<formatted-date
			tooltip="Last commit on "
			.date=${new Date(e)}
			class="branch-item__date"
		></formatted-date>`}renderBranchItem(e){let t=this.renderWip(),o=this.renderTracking(),r=this.renderAvatars(),i=this.branch.opened?void 0:this.renderBranchIndicator?.(),n=this.renderMergeTargetStatus(),a=this.renderTimestamp();return ew`
			<gl-work-item
				?primary=${!this.branch.opened}
				?nested=${!this.branch.opened}
				.indicator=${this.branchCardIndicator}
				?expanded=${this.expanded}
			>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon"> ${this.renderBranchIcon()} </span>
						<span class="branch-item__name">${this.branch.name}</span>
					</p>
				</div>
				${eN(a||i||t||o||r,()=>ew`
						<div class="branch-item__section branch-item__section--details" slot="context">
							<p class="branch-item__changes">${a}${i}${t}${o}${r}</p>
						</div>
					`)}
				${eN(e||n,()=>ew`<div class="branch-item__actions" slot="actions">
							${n??e$}${e??e$}
						</div>`)}
				<span class="branch-item__summary" slot="summary">${this.renderTracking(!0)} ${r}</span>
			</gl-work-item>
		`}renderBranchIcon(){let e=this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0;return ew`<gl-branch-icon
			branch="${this.branch.name}"
			status="${this.branch.status}"
			?hasChanges=${e}
			upstream=${this.branch.upstream?.name}
			?worktree=${null!=this.branch.worktree}
			?is-default=${this.branch.worktree?.isDefault??!1}
		></gl-branch-icon>`}renderPrItem(){if(!this.pr)return this.branch.upstream?.missing===!1&&this.expanded?ew`
					<div>
						<button-container grouping="split" layout="full">
							<gl-button
								class="branch-item__missing"
								appearance="secondary"
								full
								href="${rh("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!1,source:{source:"home",detail:"create-pr"}})}"
							>
								<code-icon icon="git-pull-request" slot="prefix"></code-icon>
								<span>Create a Pull Request</span>
							</gl-button>
							${this._homeState.orgSettings.ai&&this._homeState.aiEnabled&&this.remote?.provider?.supportedFeatures?.createPullRequestWithDetails?ew`<gl-button
										class="branch-item__missing"
										tooltip="Create a Pull Request with AI (Preview)"
										appearance="secondary"
										href="${rh("gitlens.home.createPullRequest",{ref:this.branchRef,describeWithAI:!0,source:{source:"home",detail:"create-pr"}})}"
									>
										<code-icon icon="sparkle"></code-icon>
									</gl-button>`:e$}
						</button-container>
					</div>
				`:e$;let e=this.branch.opened?an(ai(this.pr,this.launchpadItem))??"base":void 0,t=this.renderPrActions();return ew`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<pr-icon ?draft=${this.pr.draft} state=${this.pr.state} pr-id=${this.pr.id}></pr-icon>
						</span>
						<a href=${this.pr.url} class="branch-item__name branch-item__name--secondary"
							>${this.pr.title}</a
						>
						<span class="branch-item__identifier">#${this.pr.id}</span>
					</p>
				</div>
				${this.renderLaunchpadItem()}
				${eN(null!=t,()=>ew`<div class="branch-item__actions" slot="actions">${t}</div>`)}
			</gl-work-item>
		`}renderLaunchpadItem(){if(null==this.launchpadItem)return e$;let e=ai(this.pr,this.launchpadItem);if(null==e)return e$;let t=nQ.get(e),o=nX.get(e);if(null==t||null==o)return e$;let r=o.match(/\$\((.*?)\)/)[1].replace("gitlens","gl"),i=function(e,t){if(null==e||0===e.length)return e;if(null==t)return e.replace(oh,"");let o=function(e){let t=op.get(e);if(null!=t)return t;t=[];let o=e.length,r=0;for(;r<o;){let o=e.indexOf("${",r);if(-1===o)break;let i=e.indexOf("}",o);if(-1===i)break;let n=o+2,a="",l="",c="",d=!1,h="right",p="";if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(l=e.slice(t,n)),n++}else if(!ou(e.charCodeAt(n))){let t=n++;for(;n<i&&!ou(e.charCodeAt(n));)n++;t!==n&&(l=e.slice(t,n))}for(;n<i;){let t=e.charCodeAt(n);if(ou(t))a+=e[n++];else{if(124!==t)break;for(;n<i;){if((t=e.charCodeAt(++n))>=48&&t<=57){c+=e[n];continue}63===t?(d=!0,n++):45===t&&(h="left",n++);break}}}if(n<i){if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(p=e.slice(t,n)),n++}else if(!ou(e.charCodeAt(n))){let t=n++;for(;n<i&&!ou(e.charCodeAt(n));)n++;t!==n&&(p=e.slice(t,n))}}r=i+1,t.push({key:a,start:o,end:r,options:{prefix:l||void 0,suffix:p||void 0,truncateTo:c?parseInt(c,10):void 0,collapseWhitespace:d,padDirection:h}})}return op.set(e,t),t}(e);if(0===o.length)return e;let r=0,i="";for(let n of o)i+=e.slice(r,n.start)+(t[n.key]??""),r=n.end;return r<e.length&&(i+=e.slice(r)),i}(n1.get(this.launchpadItem.category)[1],{author:this.launchpadItem.author?.username??"unknown",createdDateRelative:oa(new Date(this.launchpadItem.createdDate))});return ew`<div class="branch-item__section branch-item__section--details" slot="context">
				<p class="launchpad-grouping--${an(e)}">
					<gl-tooltip content="${i}">
						<a
							href=${rh("gitlens.showLaunchpad",{source:"home",state:{id:{uuid:this.launchpadItem.uuid,group:e}}})}
							class="launchpad__grouping"
						>
							<code-icon icon="${r}"></code-icon
							><span class="branch-item__category">${t.toUpperCase()}</span></a
						>
					</gl-tooltip>
				</p>
			</div>
			${r?ew`<span
						class="branch-item__summary launchpad-grouping--${an(e)}"
						slot="summary"
						><gl-tooltip placement="bottom" content="${t}"
							><code-icon icon="${r}"></code-icon></gl-tooltip
					></span>`:e$}`}renderMergeTargetStatus(){return this.showUpgrade?ew`<gl-merge-target-upgrade class="branch-item__merge-target"></gl-merge-target-upgrade>`:this.branch.mergeTarget?ew`<gl-merge-target-status
			class="branch-item__merge-target"
			.branch=${this.branch}
			.targetPromise=${this.branch.mergeTarget}
		></gl-merge-target-status>`:e$}renderIssuesItem(){if(![...this.issues??[],...this.autolinks??[]].length)return e$;let e=this.branch.opened?"base":void 0;return ew`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">${this.renderIssues()}</div>
			</gl-work-item>
		`}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.emit("gl-branch-card-expand-toggled",{expanded:e})})}};ae([C({context:"state",subscribe:!0}),eT()],GlBranchCardBase.prototype,"_homeState",2),ae([eL()],GlBranchCardBase.prototype,"repo",2),ae([eL({type:Boolean})],GlBranchCardBase.prototype,"showUpgrade",2),ae([eL({type:Object})],GlBranchCardBase.prototype,"branch",1),ae([eT()],GlBranchCardBase.prototype,"_autolinks",2),ae([eT()],GlBranchCardBase.prototype,"_contributors",2),ae([eT()],GlBranchCardBase.prototype,"_issues",2),ae([eT()],GlBranchCardBase.prototype,"_pr",2),ae([eT()],GlBranchCardBase.prototype,"_launchpadItem",2),ae([eT()],GlBranchCardBase.prototype,"_mergeTarget",2),ae([eT()],GlBranchCardBase.prototype,"_remote",2),ae([eT()],GlBranchCardBase.prototype,"_wip",2),ae([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"busy",2),ae([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expanded",2),ae([eL({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expandable",2),ae([t6("expandable")],GlBranchCardBase.prototype,"onExpandableChanged",1);let ao=class extends GlBranchCardBase{render(){return ew`
			<gl-card class="branch-item" focusable .indicator=${this.cardIndicator}>
				<div class="branch-item__container">
					${this.renderBranchItem(this.renderBranchActions())}${this.renderPrItem()}${this.renderIssuesItem()}
				</div>
				${this.renderCollapsedActions()}
			</gl-card>
		`}getCollapsedActions(){let e=[];return this.isWorktree?e.push(ew`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`):e.push(ew`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),e.push(ew`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${rh("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`,ew`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createCommandLink("gitlens.openInView.branch:home")}
			></action-item>`),e}getBranchActions(){let e=[],t=this._homeState.orgSettings.ai&&this._homeState.aiEnabled;return this.isWorktree?(e.push(ew`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
					alt-href=${this.createCommandLink("gitlens.home.openWorktree",{location:"newWindow"})}
				></action-item>`),t&&(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0?e.push(ew`<action-item
							label="Explain Working Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						></action-item>`):e.push(ew`<action-item
							label="Explain Branch Changes (Preview)"
							icon="sparkle"
							href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
						></action-item>`))):(e.push(ew`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),t&&e.push(ew`<action-item
						label="Explain Branch Changes (Preview)"
						icon="sparkle"
						href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					></action-item>`)),e.push(ew`<action-item
				label="Fetch"
				icon="repo-fetch"
				href=${this.createCommandLink("gitlens.home.fetch")}
			></action-item>`),e.push(ew` <action-item
				label="Visualize Branch History"
				icon="graph-scatter"
				href=${rh("gitlens.visualizeHistory.branch:home",{type:"branch",repoPath:this.repo,branchId:this.branch.id})}
			></action-item>`),e.push(ew`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${rh("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`,ew`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createCommandLink("gitlens.openInView.branch:home")}
			></action-item>`),e}getPrActions(){return[ew`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,ew`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,ew`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}renderBranchIndicator(){}};ao=ae([eB("gl-branch-card")],ao);let ar=class extends lit_element_i{constructor(){super(...arguments),this.primary=!1,this.nested=!1,this.expanded=!1}render(){return ew`<gl-card
			.density=${this.primary?"tight":void 0}
			.grouping=${!1===this.nested?void 0:this.primary?"item-primary":"item"}
			.indicator=${this.indicator}
			>${this.renderContent()}</gl-card
		>`}renderContent(){let e=this.querySelectorAll('[slot="context"]').length>0||this.querySelectorAll('[slot="actions"]').length>0;return ew`
			<div class=${i0({"work-item":!0,"work-item_content-empty":!e})}>
				<header class="work-item__header">
					<slot class="work-item__main"></slot>
					${this.renderSummary()}
				</header>
				<div class="work-item__content">
					<slot class="work-item__context" name="context"></slot>
					<slot class="work-item__actions" name="actions"></slot>
				</div>
			</div>
		`}renderSummary(){return this.expanded?e$:ew`<slot class="work-item__summary" name="summary"></slot>`}};function ai(e,t){if(null==t||e?.state!=="opened"||e.draft&&"unassigned-reviewers"===t.category)return;let o=n0.get(t.category);if(null!=o&&"other"!==o&&"draft"!==o&&"current-branch"!==o)return o}function an(e){switch(e){case"mergeable":return"mergeable";case"blocked":return"blocked";case"follow-up":case"needs-review":return"attention"}}function as(e){let t=[];return e.added&&t.push(`${og("file",e.added??0)} added`),e.changed&&t.push(`${og("file",e.changed??0)} changed`),e.deleted&&t.push(`${og("file",e.deleted??0)} deleted`),t}ar.styles=[E`
			.work-item {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.work-item_content-empty {
				gap: 0;
			}

			.work-item__header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 0.8rem;
			}

			.work-item__main {
				display: block;
				flex: 1;
				min-width: 0;
			}

			.work-item__summary {
				display: block;
				flex: none;
			}

			.work-item__content {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-height: 100px;

				transition-property: opacity, max-height, display;
				transition-duration: 0.2s;
				transition-behavior: allow-discrete;
			}

			:host(:not([expanded])) .work-item__content {
				display: none;
				opacity: 0;
				max-height: 0;
			}

			gl-card::part(base) {
				margin-block-end: 0;
				padding-top: var(--gl-card-vertical-padding, 0.8rem);
				padding-bottom: var(--gl-card-vertical-padding, 0.8rem);
			}
		`],ae([eL({type:Boolean,reflect:!0})],ar.prototype,"primary",2),ae([eL({type:Boolean,reflect:!0})],ar.prototype,"nested",2),ae([eL({reflect:!0})],ar.prototype,"indicator",2),ae([eL({type:Boolean,reflect:!0})],ar.prototype,"expanded",2),ar=ae([eB("gl-work-item")],ar);var aa=Object.defineProperty,al=Object.getOwnPropertyDescriptor,ac=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?al(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aa(t,o,n),n};let ad=class extends lit_element_i{render(){return ew`<slot></slot>`}};ad.styles=E`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:focus-within):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,ad=ac([eB("gl-breadcrumbs")],ad);let ah=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ew`<div class=${i0({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ew`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:ew`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:e$}};ah.styles=[o2,E`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
				max-width: 100%;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],ac([eT()],ah.prototype,"_collapsed",2),ac([eL({type:Boolean,reflect:!0})],ah.prototype,"collapsed",1),ac([eL({type:String})],ah.prototype,"collapsibleState",2),ac([eL()],ah.prototype,"icon",2),ac([eL()],ah.prototype,"iconTooltip",2),ac([eL({type:Number})],ah.prototype,"shrink",1),ah=ac([eB("gl-breadcrumb-item")],ah);let ap=class extends lit_element_i{render(){return ew`<slot></slot>`}};ap.styles=E`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,ap=ac([eB("gl-breadcrumb-item-child")],ap);var au=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,am=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ag(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&au(t,o,n),n};let ab=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return ew`<div class="skeleton" style=${e}></div>`}};ab.styles=E`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,am([eL({type:Number})],ab.prototype,"lines",2),ab=am([eB("skeleton-loader")],ab);let af=E`
	:host {
		--gl-color-mix-base: var(
			--gl-card-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%)
		);
	}

	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		/* border-inline-end: 0.3rem solid transparent; */
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	:host-context(.vscode-dark) .card.is-base,
	:host-context(.vscode-high-contrast) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #fff 7%);
	}

	:host-context(.vscode-light) .card.is-base,
	:host-context(.vscode-high-contrast-light) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #000 5%);
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card.is-cherry-picking,
	.card.is-merging,
	.card.is-rebasing,
	.card.is-reverting {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor)
		);
	}

	.card.is-conflict {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor)
		);
	}

	.card.is-issue-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-issue-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-pr-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-merged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-mergedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-mergeable {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(var(--vscode-gitlens-launchpadIndicatorMergeableColor))
		);
	}

	.card.is-blocked {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorBlockedColor)
		);
	}

	.card.is-attention {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorAttentionColor)
		);
	}

	.card.is-branch-merged {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitlens-mergedPullRequestIconColor));
	}

	.card.is-branch-synced {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchUpToDateForegroundColor) 20%, transparent)
		);
	}

	.card.is-branch-diverged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor) 70%, transparent)
		);
	}

	.card.is-branch-behind {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-branch-ahead {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-info,
	.card.is-branch-changes {
		border-inline-start-color: var(--gl-card-indicator-border, color-mix(in lab, #1a79ff 80%, transparent));
	}

	.card.is-branch-missingUpstream {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor)
		);
	}

	.card--focusable {
		cursor: pointer;
	}

	.card--focusable:focus,
	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card--focusable:focus-visible {
		outline: 0.1rem solid var(--vscode-focusBorder);
	}

	.card__actions {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		display: block;
	}

	.card__content {
		display: block;
	}

	.card__content::slotted(:first-child) {
		margin-block-start: 0;
	}

	.card__content::slotted(:last-child) {
		margin-block-end: 0;
	}

	:host-context(.vscode-dark) .card--grouping-item,
	:host-context(.vscode-high-contrast) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}

	:host-context(.vscode-light) .card--grouping-item,
	:host-context(.vscode-high-contrast-light) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
	}

	.card--grouping-item-primary {
		--gl-card-background: transparent;
		--gl-card-hover-background: transparent;
	}

	.card--density-tight {
		padding: 0;
	}
`;var av=Object.defineProperty,ay=Object.getOwnPropertyDescriptor,aw=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ay(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&av(t,o,n),n};let a_=class extends lit_element_i{constructor(){super(...arguments),this._focusable=!1}get focusable(){return null!=this.href||this._focusable}set focusable(e){let t=this._focusable;this._focusable=e,this.requestUpdate("focusable",t)}get classNames(){return{card:!0,"card--focusable":this.focusable,[`card--grouping-${this.grouping}`]:null!=this.grouping,[`card--density-${this.density}`]:null!=this.density,[`is-${this.indicator}`]:null!=this.indicator}}render(){return null!=this.href?ew`<a part="base" class=${i0(this.classNames)} href=${this.href}
				>${this.renderContent()}</a
			>`:ew`<div part="base" tabindex=${this.focusable?0:-1} class=${i0(this.classNames)}>
			${this.renderContent()}
		</div>`}renderContent(){return ew`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};a_.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},a_.styles=[af],aw([eL({reflect:!0})],a_.prototype,"indicator",2),aw([eL({reflect:!0})],a_.prototype,"grouping",2),aw([eL({reflect:!0})],a_.prototype,"density",2),aw([eL()],a_.prototype,"href",2),aw([eL({type:Boolean,reflect:!0})],a_.prototype,"focusable",1),a_=aw([eB("gl-card")],a_);var ak=Object.defineProperty,a$=Object.getOwnPropertyDescriptor;let ax=class extends lit_element_i{};ax.styles=[o5,E`
			:host {
				display: block;
				height: 0;
				margin: 0.6rem;
				border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
			}
		`],ax=((e,t,o,r)=>{for(var i,n=r>1?void 0:r?a$(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&ak(t,o,n),n})([eB("menu-divider")],ax);var aC=Object.defineProperty,aS=Object.getOwnPropertyDescriptor,aP=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aS(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aC(t,o,n),n};let aO=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?ew`<a href=${this.href}><slot></slot></a>`:ew`<slot></slot>`}};aO.styles=[o5,E`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
			}

			:host([role='option']:hover) {
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-background);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],aP([eL({type:Boolean,reflect:!0})],aO.prototype,"disabled",2),aP([eL({reflect:!0})],aO.prototype,"href",2),aP([eL({reflect:!0})],aO.prototype,"role",2),aO=aP([eB("menu-item")],aO);var aA=Object.defineProperty,aR=Object.getOwnPropertyDescriptor;let aI=class extends lit_element_i{render(){return ew`<slot></slot>`}};aI.styles=[o5,E`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],aI=((e,t,o,r)=>{for(var i,n=r>1?void 0:r?aR(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aA(t,o,n),n})([eB("menu-label")],aI);let aB=E`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,aE=E`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var aL=Object.defineProperty,aT=Object.getOwnPropertyDescriptor,aD=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aT(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aL(t,o,n),n};let az=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ew`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};az.styles=[aB,aE],aD([eL({type:Boolean})],az.prototype,"pulse",2),az=aD([eB("gl-indicator")],az);var aN=Object.defineProperty,aM=Object.getOwnPropertyDescriptor,aj=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aM(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aN(t,o,n),n};let aF=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ew`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ew`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:e$}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){if(!this.icon)return e$;let{repository:e}=this;if(!e?.provider)return ew`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:t}=e,o=t.integration?.connected;return ew`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${t.url??e$}
					aria-label=${`Open Repository on ${t.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===t.icon?"cloud":`gl-provider-${t.icon}`}
						aria-hidden="true"
					></code-icon>
					${eN(o,()=>ew`<gl-indicator class="indicator-dot"></gl-indicator>`)}
				</gl-button>
				<span slot="content">
					Open Repository on ${t.name}
					<hr />
					${eN(o,()=>ew`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${t.name}
							</span>
						`,()=>!1!==o?e$:ew`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${rh("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return e$;let{repository:e}=this;if(!e?.provider)return e$;let{provider:t}=e;return t.integration?.connected!==!1?e$:ew`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${rh("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};aF.styles=[ru,rg,sG,sV,E`
			:host([icons='1']:not([expandable])) {
				min-width: 7rem;
			}

			:host([icons='1'][expandable]) {
				min-width: 0;
			}

			:host([icons='2']:not([expandable])) {
				min-width: 9.4rem;
			}

			:host([icons='2'][expandable]) {
				min-width: 5.6rem;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0;
				max-width: 0;
			}
		`,sH],aj([eL({type:Boolean})],aF.prototype,"connectIcon",2),aj([eL({type:Boolean})],aF.prototype,"disabled",2),aj([eL({type:Boolean})],aF.prototype,"icon",2),aj([eL({type:Object})],aF.prototype,"repository",2),aj([eL({type:Boolean})],aF.prototype,"hasMultipleRepositories",2),aj([eL({type:Object})],aF.prototype,"source",2),aj([eL({type:Boolean,reflect:!0})],aF.prototype,"expandable",2),aj([eL({type:Number,reflect:!0})],aF.prototype,"icons",1),aF=aj([eB("gl-repo-button-group")],aF);let aq={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function aU(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}let aW=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,aG=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,aH=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,aV=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,aK=/(^[0-9a-f]{40})\^[0-3]?$/;function aY(e,t){var o,r,i,n;let a;if(null==e)return"";t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};let l=t?.quoted?`'${e.name}'`:e.name;switch(e.refType){case"branch":{let i;e.remote&&(l=`${(o=l).substring(0,aU(o))}: ${(r=l).substring(aU(r)+1)}`,l=t?.quoted?`'${l}'`:l),i=t.label?t.capitalize&&t.expand?`${e.remote?"Remote ":""}Branch `:`${e.remote?"remote ":""}branch `:"",a=`${i}${t.icon?`$(git-branch)${t9.Space}${l}`:l}`;break}case"tag":a=`${t.label?"tag ":""}${t.icon?`$(tag)${t9.Space}${l}`:l}`;break;default:if(e?.refType==="stash"||e?.refType==="revision"&&e?.stashName){let o;t.expand&&e.message&&(o=`${null!=e.stashNumber?`#${e.stashNumber}: `:""}${e.message.length>20?`${e.message.substring(0,20).trimEnd()}${t9.Ellipsis}`:e.message}`),a=`${t.label?"stash ":""}${t.icon?`$(archive)${t9.Space}${o??e.name}`:o??(e.stashNumber?`#${e.stashNumber}`:e.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return aG.test(e);case"qualified-double-dot":return aH.test(e);case"qualified-triple-dot":return aV.test(e);default:return aW.test(e)}}(e.ref))a=l;else{let o,r;(t.expand&&e.message&&(o=e.message.length>20?` (${e.message.substring(0,20).trimEnd()}${t9.Ellipsis})`:` (${e.message})`),t.expand&&t.label&&(i=e.ref,i&&aK.test(i)))?(l=e.name.endsWith("^")?e.name.substring(0,e.name.length-1):e.name,t?.quoted&&(l=`'${l}'`),r="before "):r="",a=`${t.label?`${r}commit `:""}${t.icon?`$(git-commit)${t9.Space}${l}${o??""}`:`${l}${o??""}`}`}}return t.capitalize&&t.expand&&!1!==t.label?(n=a,`${n[0].toLocaleUpperCase()}${n.slice(1)}`):a}var aJ=Object.defineProperty,aZ=Object.getOwnPropertyDescriptor,aX=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?aZ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&aJ(t,o,n),n};let aQ=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),rh(e,t)}render(){return null==this.pausedOpStatus?e$:ew`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=aq[e.type];return ew`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${aY(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${aY(e.current,{expand:!1,icon:!1})}</span
			>`}let t=e.steps.total>0,o=aq[e.type];return ew`<span class="label"
				>${this.conflicts?o.conflicts:t?o.label:o.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${aY(e.incoming,{expand:!1,icon:!1})} ${o.directionality}
				${aY(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?ew`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
					>`:e$}`}renderActions(){if(null==this.pausedOpStatus)return e$;let e=this.pausedOpStatus.type;return ew`<action-nav class="actions">
			${eN("revert"!==e&&!("rebase"===e&&this.conflicts),()=>ew`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${eN("merge"!==e,()=>ew`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${eN("rebase"===e,()=>ew`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
		</action-nav>`}};aQ.styles=[E`
			.status {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],aX([eL({type:Boolean,reflect:!0})],aQ.prototype,"conflicts",2),aX([eL({type:Object})],aQ.prototype,"pausedOpStatus",2),aX([eL()],aQ.prototype,"skipCommand",2),aX([eL()],aQ.prototype,"continueCommand",2),aX([eL()],aQ.prototype,"abortCommand",2),aX([eL()],aQ.prototype,"openEditorCommand",2),aX([eL({type:Object})],aQ.prototype,"webviewCommandContext",2),aQ=aX([eB("gl-merge-rebase-status")],aQ);var a0=Object.defineProperty,a1=Object.getOwnPropertyDescriptor,a2=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?a1(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&a0(t,o,n),n};let a5=class extends tN(lit_element_i){constructor(){super(...arguments),this.repoCollapsed=!0}get isPro(){return rd(this._homeState.subscription.state)}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._activeOverviewState.run()}onBranchSelectorClicked(){this._ipc.sendCommand(eF,{command:"gitlens.home.switchToBranch",args:[{repoPath:this._activeOverviewState.state?.active.repoPath}]})}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?e$:this._activeOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>ew`<span>Error</span>`})}renderLoader(){return ew`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._activeOverviewState.state?this.renderLoader():this.renderComplete(this._activeOverviewState.state,!0)}renderComplete(e,t=!1){let o=e?.repository,r=e?.active;if(!o||!r)return ew`<span>None</span>`;let i=this._homeState.repositories.openCount>1;return ew`
			<gl-section ?loading=${t}>
				<gl-breadcrumbs slot="heading">
					<gl-breadcrumb-item collapsibleState="none" class="heading-repo-breadcrumb"
						><gl-repo-button-group
							.repository=${o}
							?disabled=${!i}
							?hasMultipleRepositories=${i}
							.source=${{source:"graph"}}
							?expandable=${!0}
							@gl-click=${this.onRepositorySelectorClicked}
							><span slot="tooltip">
								Switch to Another Repository...
								<hr />
								${o.name}
							</span></gl-repo-button-group
						></gl-breadcrumb-item
					>
					<gl-breadcrumb-item collapsibleState="none" icon="git-branch" class="heading-branch-breadcrumb"
						><gl-ref-button .ref=${r.reference} @click=${this.onBranchSelectorClicked}
							><span slot="tooltip">Switch to Another Branch... </span></gl-ref-button
						></gl-breadcrumb-item
					>
				</gl-breadcrumbs>
				<span class="section-heading-actions" slot="heading-actions">
					<gl-button
						aria-busy="${t??e$}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch All"
						href=${rh("gitlens.home.fetch",void 0)}
						><code-icon icon="repo-fetch"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${t??e$}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Visualize Repo History"
						href=${rh("gitlens.visualizeHistory.repo:home",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="graph-scatter"></code-icon></gl-button
					><gl-button
						aria-busy="${t??e$}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${rh("gitlens.home.openInGraph",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
				</span>
				${this.renderRepoBranchCard(r,o.path,t)}
			</gl-section>
		`}renderRepoBranchCard(e,t,o){return ew`<gl-active-branch-card
			.branch=${e}
			.repo=${t}
			?busy=${o}
			?showUpgrade=${!this.isPro}
		></gl-active-branch-card>`}onRepositorySelectorClicked(e){"label"===e.detail.part&&this._activeOverviewState.changeRepository()}};a5.styles=[ru,at,rg,E`
			[hidden] {
				display: none;
			}

			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}

			gl-repo-button-group {
				text-transform: none;
			}

			gl-section::part(header) {
				margin-block-end: 0.2rem;
			}

			.section-heading-actions {
				flex: none;
				display: flex;
				align-items: center;
			}

			.section-heading-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
				/* margin-block: -1rem; */
			}

			.section-heading-provider {
				color: inherit;
			}

			.tooltip {
				text-transform: none;
			}

			.uppercase {
				text-transform: uppercase;
			}

			gl-breadcrumbs {
				--gl-tooltip-text-transform: none;
			}

			.heading-branch-breadcrumb {
				text-transform: none;
			}
		`],a2([C({context:"state",subscribe:!0}),eT()],a5.prototype,"_homeState",2),a2([C({context:"activeOverviewState"})],a5.prototype,"_activeOverviewState",2),a2([C({context:"ipc"})],a5.prototype,"_ipc",2),a2([eT()],a5.prototype,"repoCollapsed",2),a5=a2([eB("gl-active-work")],a5);let a8=class extends GlBranchCardBase{connectedCallback(){super.connectedCallback?.(),this.toggleExpanded(!0)}render(){return ew`
			${this.renderBranchIndicator()}${this.renderIssuesItem()}${this.renderBranchItem(ew`${this.renderBranchStateActions()}${this.renderBranchActions()}`)}${this.renderPrItem()}
		`}renderActionsMenu(){let e=this._homeState.orgSettings.ai&&this._homeState.aiEnabled,t=this.busy,o=this.wip?.workingTreeState,r=null!=o&&o.added+o.changed+o.deleted>0,i=[];if(e)r&&(i.push(ew`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.ai.generateCommitMessage",{repoPath:this.repo,source:"home"})}
						>Generate Commit Message</menu-item
					>`),i.push(ew`<menu-divider></menu-divider>`),i.push(ew`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainWip:home")}
						>Explain Working Changes (Preview)</menu-item
					>`)),i.push(ew`<menu-item ?disabled=${t} href=${this.createCommandLink("gitlens.ai.explainBranch:home")}
					>Explain Branch Changes (Preview)</menu-item
				>`),r&&(i.push(ew`<menu-divider></menu-divider>`),i.push(ew`<menu-item
						?disabled=${t}
						href=${this.createCommandLink("gitlens.home.createCloudPatch")}
						>Share as Cloud Patch</menu-item
					>`));else if(r)return ew`
				<gl-button
					aria-busy=${t??e$}
					?disabled=${t}
					href=${this.createCommandLink("gitlens.home.createCloudPatch")}
					appearance="secondary"
					tooltip="Share as Cloud Patch"
					><code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`;if(0!==i.length)return ew`<gl-popover
			appearance="menu"
			trigger="click focus"
			placement="bottom-end"
			.arrow=${!1}
			distance="0"
		>
			<gl-button slot="anchor" appearance="toolbar" tooltipPlacement="top" aria-label="Additional Actions">
				<code-icon icon="ellipsis"></code-icon>
			</gl-button>
			<div slot="content">${i}</div>
		</gl-popover>`}renderBranchStateActions(){let{name:e,upstream:t}=this.branch,o=[],r=()=>0===o.length?this.renderActionsMenu():ew`<div><button-container>${o}${this.renderActionsMenu()}</button-container></div>`,i=this.busy,n=this.wip?.workingTreeState,a=null!=n&&n.added+n.changed+n.deleted>0;if(a&&o.push(ew`
				<gl-button
					aria-busy=${i??e$}
					?disabled=${i}
					href=${this.createCommandLink("gitlens.composeCommits:home")}
					appearance="secondary"
					density="compact"
					><code-icon icon="wand" slot="prefix"></code-icon>Compose Commits...<span slot="tooltip"
						><strong>Compose Commits</strong> (Preview)<br /><i
							>Automatically or interactively organize changes into meaningful commits</i
						></span
					></gl-button
				>
			`),this.wip?.pausedOpStatus!=null)return r();if(t?.missing!==!1)return o.push(ew`
				<gl-button
					aria-busy=${i??e$}
					?disabled=${i}
					href=${this.createWebviewCommandLink("gitlens.views.home.publishBranch")}
					appearance="secondary"
					density="compact"
				>
					<code-icon icon="cloud-upload" slot="${(a?void 0:"prefix")??e$}"></code-icon>
					${a?"":"Publish Branch"}
					<span slot="tooltip"
						>Publish (push) <strong>${e}</strong> to ${t?.name??"a remote"}</span
					>
				</gl-button>
			`),r();if(t?.state?.ahead||t?.state?.behind){let e=!!t.state.ahead,n=!!t.state.behind;if(e&&n)return o.push(ew`
					<gl-button
						aria-busy=${i??e$}
						?disabled=${i}
						href=${nZ("gitlens.views.home.pull","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??e$}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?ew` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
					<gl-button
						aria-busy=${i??e$}
						?disabled=${i}
						href=${nZ("gitlens.views.home.push","gitlens.views.home","",{force:!0})}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-force-push"></code-icon>
						<span slot="tooltip"
							>Force Push${t?.name?ew` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),r();if(n)return o.push(ew`
					<gl-button
						aria-busy=${i??e$}
						?disabled=${i}
						href=${nZ("gitlens.views.home.pull","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??e$}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?ew` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),r();e&&o.push(ew`
					<gl-button
						aria-busy=${i??e$}
						?disabled=${i}
						href=${nZ("gitlens.views.home.push","gitlens.views.home","")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-push" slot="prefix"></code-icon>
						${a?"":"Push"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Push${t?.name?ew` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`)}return r()}renderBranchIndicator(){let e=this.wip;if(e?.pausedOpStatus!=null)return ew`<gl-merge-rebase-status
			?conflicts=${e.hasConflicts}
			.pausedOpStatus=${e.pausedOpStatus}
		></gl-merge-rebase-status>`}getBranchActions(){return[]}getPrActions(){return[ew`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,ew`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,ew`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}getCollapsedActions(){return[]}renderIssuesItem(){return[...this.issues??[],...this.autolinks??[]].length?super.renderIssuesItem():this.expanded?ew`<div class="branch-item__row" full>
				<span class="branch-item__missing" full>Current work item</span>
				<gl-button
					class="associate-issue-action"
					appearance="toolbar"
					href=${this.createCommandLink("gitlens.associateIssueWithBranch",{branch:this.branch.reference,source:"home"})}
					tooltip="Associate Issue with Branch"
					aria-label="Associate Issue with Branch"
					><issue-icon></issue-icon>
				</gl-button>
			</div>`:e$}};a8.styles=[ru,at,E`
			:host {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			span.branch-item__missing {
				color: var(--vscode-descriptionForeground);
				font-style: italic;
			}

			gl-work-item {
				--gl-card-vertical-padding: 0.4rem;
			}

			.associate-issue-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
			}
		`],a8=a2([eB("gl-active-branch-card")],a8);var a6=Object.defineProperty,a3=Object.getOwnPropertyDescriptor,a4=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?a3(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&a6(t,o,n),n};let a9=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ew`<div class="progress-bar"></div>`}};a9.styles=E`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,a4([eL({reflect:!0})],a9.prototype,"mode",2),a4([eL({type:Boolean})],a9.prototype,"active",2),a4([eL()],a9.prototype,"position",2),a9=a4([eB("progress-indicator")],a9);var a7=Object.defineProperty,le=Object.getOwnPropertyDescriptor,lt=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?le(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&a7(t,o,n),n};let lo=class extends lit_element_i{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return ew`
			<div class="section">
				<header class="section__header" part="header">
					<div
						class="section__heading"
						role="heading"
						aria-level=${(this.headingLevel?this.headingLevel:void 0)??e$}
					>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};lo.styles=[E`
			.section {
				margin-bottom: 1.2rem;
			}
			.section__header {
				position: relative;
				display: flex;
				justify-content: space-between;
				gap: 8px;
				margin-block: 0 0.8rem;
			}
			.section__heading {
				min-width: 0;
				flex: 1;
				font-size: 1.3rem;
			}
			.section__headline {
				font-weight: normal;
				text-transform: uppercase;
			}

			.section__actions {
				margin-inline-start: auto;
			}

			.section__loader {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`],lt([eL({type:Boolean})],lo.prototype,"loading",2),lt([eL({attribute:"heading-level"})],lo.prototype,"headingLevel",2),lo=lt([eB("gl-section")],lo);let lr=class extends lit_element_i{constructor(){super(...arguments),this.isFetching=!1,this.onCardExpanded=e=>{let t=e.composedPath().find(e=>e.matches("gl-branch-card"));this.toggleSiblingCardsDebounced(t)},this.toggleSiblingCardsDebounced=t1(this.toggleSiblingCards.bind(this),100)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}toggleSiblingCards(e){e?.expanded===!0&&this.branchCards.forEach(t=>{t!==e&&(t.expanded=!1)})}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return ew`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${eN(this.branches.length>0,()=>this.branches.map(e=>ew`<gl-branch-card expandable .repo=${this.repo} .branch=${e}></gl-branch-card>`),()=>ew`<p>No ${this.label} branches</p>`)}
			</gl-section>
		`}};lt([eL({type:String})],lr.prototype,"label",2),lt([eL()],lr.prototype,"repo",2),lt([eL({type:Array})],lr.prototype,"branches",2),lt([eL({type:Boolean})],lr.prototype,"isFetching",2),lt([(t,o)=>eD(t,o,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll("gl-branch-card")}})],lr.prototype,"branchCards",2),lr=lt([eB("gl-branch-section")],lr);var li=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,ls=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?ln(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&li(t,o,n),n};let la=class extends tN(lit_element_i){constructor(){super(...arguments),this._disposable=[],this._summary=t0(void 0),this._summaryState=new AsyncComputedState(async e=>await this._ipc.sendRequest(eK,{}))}get startWorkCommand(){return rh("gitlens.home.startWork",void 0)}get createBranchCommand(){return rh("gitlens.home.createBranch",void 0)}connectedCallback(){super.connectedCallback?.(),this._disposable.push(this._ipc.onReceiveMessage(e=>{!0===tr.is(e)&&this._summaryState.run(!0)})),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable.forEach(e=>e.dispose())}render(){return ew`
			<gl-section ?loading=${"pending"===this._summaryState.computed.status}>
				<span slot="heading">Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container grouping="gap-wide">
					<gl-button full class="start-work" href=${this.startWorkCommand}>Start Work on an Issue</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						class="start-work"
						href=${this.createBranchCommand}
						tooltip="Create New Branch"
						><code-icon icon="custom-start-work"></code-icon
					></gl-button>
				</button-container>
			</gl-section>
		`}renderSummaryResult(){return!1===this._homeState.hasAnyIntegrationConnected?ew`<ul class="menu">
				<li>
					<a
						class="launchpad-action"
						href="${rh("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
					>
						<code-icon class="launchpad-action__icon" icon="plug"></code-icon>
						<span>Connect to see PRs and Issue here</span>
					</a>
				</li>
			</ul>`:this._summaryState.render({pending:()=>this.renderPending(),complete:e=>this.renderSummary(e),error:()=>ew`<ul class="menu">
					<li>Error loading summary</li>
				</ul>`})}renderPending(){return null==this._summaryState.state?ew`
				<div class="loader">
					<skeleton-loader lines="1"></skeleton-loader>
					<skeleton-loader lines="1"></skeleton-loader>
				</div>
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return e$;if("error"in e)return ew`<ul class="menu">
				<li>Unable to load items</li>
			</ul>`;if(0===e.total)return ew`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return ew`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;let t=[];for(let o of e.groups){let r;switch(o){case"mergeable":{if(0===(r=e.mergeable?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(ew`<li>
							<a href=${o} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${og("pull request",r)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(0===(r=e.blocked?.total??0))continue;let o=[];e.blocked.unassignedReviewers&&o.push({count:e.blocked.unassignedReviewers,message:`${e.blocked.unassignedReviewers>1?"need":"needs"} reviewers`}),e.blocked.failedChecks&&o.push({count:e.blocked.failedChecks,message:`${e.blocked.failedChecks>1?"have":"has"} failed CI checks`}),e.blocked.conflicts&&o.push({count:e.blocked.conflicts,message:`${e.blocked.conflicts>1?"have":"has"} conflicts`});let i=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===o.length?t.push(ew`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${og("pull request",r)} ${o[0].message}</span>
								</a>
							</li>`):t.push(ew`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${og("pull request",r)} ${r>1?"are":"is"} blocked
										(${o.map(e=>`${e.count} ${e.message}`).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(0===(r=e.followUp?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(ew`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${og("pull request",r)} ${r>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(0===(r=e.needsReview?.total??0))continue;let o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(ew`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${og("pull request",r)} ${r>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`)}}}return ew`<menu class="menu">${t}</menu>`}};la.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},la.styles=[ru,E`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.summary {
				margin-bottom: 1rem;
			}

			.menu {
				list-style: none;
				padding-inline-start: 0;
				margin-block-start: 0;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}

			.launchpad-action {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				color: inherit;
				text-decoration: none;
			}
			.launchpad-action:hover {
				text-decoration: none;
			}

			.launchpad-action:hover span {
				text-decoration: underline;
			}

			.launchpad-action__icon {
				color: var(--gl-launchpad-action-color, inherit);
			}

			.launchpad-action:hover .launchpad-action__icon {
				color: var(--gl-launchpad-action-hover-color, inherit);
			}

			.launchpad-action--mergable {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorMergeableHoverColor);
			}

			.launchpad-action--blocked {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorBlockedHoverColor);
			}

			.launchpad-action--attention {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorAttentionHoverColor);
			}

			.loader {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}
		`],ls([C({context:"state",subscribe:!0}),eT()],la.prototype,"_homeState",2),ls([C({context:"ipc"})],la.prototype,"_ipc",2),la=ls([eB("gl-launchpad")],la);let ll=(e,t,o)=>{let r=new Map;for(let i=t;i<=o;i++)r.set(e[i],i);return r},lc=tM(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let r;void 0===o?o=t:void 0!==t&&(r=t);let i=[],n=[],a=0;for(let t of e)i[a]=r?r(t,a):a,n[a]=o(t,a),a++;return{values:n,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,r]){let i=e._$AH,{values:n,keys:a}=this.dt(t,o,r);if(!Array.isArray(i))return this.ut=a,n;let l=this.ut??=[],c=[],d,h,p=0,u=i.length-1,g=0,m=n.length-1;for(;p<=u&&g<=m;)if(null===i[p])p++;else if(null===i[u])u--;else if(l[p]===a[g])c[g]=tU(i[p],n[g]),p++,g++;else if(l[u]===a[m])c[m]=tU(i[u],n[m]),u--,m--;else if(l[p]===a[m])c[m]=tU(i[p],n[m]),tq(e,c[m+1],i[p]),p++,m--;else if(l[u]===a[g])c[g]=tU(i[u],n[g]),tq(e,i[p],i[u]),u--,g++;else if(void 0===d&&(d=ll(a,g,m),h=ll(l,p,u)),d.has(l[p]))if(d.has(l[u])){let t=h.get(a[g]),o=void 0!==t?i[t]:null;if(null===o){let t=tq(e,i[p]);tU(t,n[g]),c[g]=t}else c[g]=tU(o,n[g]),tq(e,i[p],o),i[t]=null;g++}else tG(i[u]),u--;else tG(i[p]),p++;for(;g<=m;){let t=tq(e,c[m+1]);tU(t,n[g]),c[g++]=t}for(;p<=u;){let e=i[p++];null!==e&&tG(e)}return this.ut=a,((e,t=tW)=>e._$AH=t)(e,c),ek}}),ld=E`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var lh=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,lu=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lp(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lh(t,o,n),n};let lg=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ew` <code-icon icon="check"></code-icon> `}render(){return ew`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};lg.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},lg.styles=[ld],lu([eL({type:Boolean,reflect:!0})],lg.prototype,"disabled",2),lu([eL({type:String})],lg.prototype,"value",2),lu([eL({type:Boolean})],lg.prototype,"defaultChecked",1),lu([eL({type:Boolean,reflect:!0})],lg.prototype,"checked",2),lg=lu([eB("gl-checkbox")],lg);var lm=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,lf=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lb(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lm(t,o,n),n};let lv=E`
	.select {
		background: none;
		outline: none;
		border: none;
		text-decoration: none !important;
		font-weight: 500;
		color: var(--color-foreground--25);
	}
	.select option {
		color: var(--vscode-foreground);
		background-color: var(--vscode-dropdown-background);
	}
	.select:not(:disabled) {
		cursor: pointer;
		color: var(--color-foreground--50);
	}
	.select:not(:disabled):focus {
		outline: 1px solid var(--color-focus-border);
	}
	.select:not(:disabled):hover {
		color: var(--vscode-foreground);
		text-decoration: underline !important;
	}
`;let GlObjectSelect=class GlObjectSelect extends GlElement{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[lv]}render(){if(this.options)return ew`
			<select .disabled=${this.disabled} class="select" @change=${e=>this.onChange?.(e)}>
				${lc(this.options,e=>{let t=this.getValue(e),o=this.getLabel(e);return ew`<option .value="${t}" ?selected=${this.value===t}>${o}</option>`})}
			</select>
		`}};lf([eL({type:Boolean})],GlObjectSelect.prototype,"disabled",2),lf([eL({type:String})],GlObjectSelect.prototype,"value",2),lf([eL({type:Array})],GlObjectSelect.prototype,"options",2);let ly=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){let t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};ly=lf([eB("gl-branch-threshold-filter")],ly);var lw=Object.defineProperty,l_=Object.getOwnPropertyDescriptor,lk=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?l_(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lw(t,o,n),n};let l$=class extends tN(lit_element_i){constructor(){super(...arguments),this.onChangeRecentThresholdFilter=e=>{this._inactiveOverviewState.filter.stale&&this._inactiveOverviewState.filter.recent&&this._ipc.sendCommand(e3,{stale:this._inactiveOverviewState.filter.stale,recent:{...this._inactiveOverviewState.filter.recent,threshold:e.detail.threshold}})}}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._inactiveOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?e$:this._inactiveOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>ew`<span>Error</span>`})}renderLoader(){return ew`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._inactiveOverviewState.state?this.renderLoader():this.renderComplete(this._inactiveOverviewState.state,!0)}renderComplete(e,t=!1){if(null==e)return e$;let{repository:o}=e;return ew`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${o.path}
				.branches=${e.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._inactiveOverviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${eN(this._inactiveOverviewState.filter.stale?.show===!0&&e.stale,()=>ew`
					<gl-branch-section
						label="stale"
						.repo=${o.path}
						.branches=${e.stale}
					></gl-branch-section>
				`)}
		`}};l$.styles=[ru,E`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],lk([C({context:"state",subscribe:!0}),eT()],l$.prototype,"_homeState",2),lk([C({context:"inactiveOverviewState"})],l$.prototype,"_inactiveOverviewState",2),lk([C({context:"ipc"})],l$.prototype,"_ipc",2),l$=lk([eB("gl-overview")],l$);var lx=Object.defineProperty,lC=Object.getOwnPropertyDescriptor,lS=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lC(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lx(t,o,n),n};let lP=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;let{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this._state;return!o||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return ew`
			${eN(this.blockRepoFeatures,()=>ew`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`)}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${eN(!this._state.hasAnyIntegrationConnected,()=>ew`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="${rh("gitlens.plus.cloudIntegrations.connect",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`,()=>ew`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="${rh("gitlens.plus.cloudIntegrations.manage",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${eN(this.orgAllowsDrafts,()=>ew`
						<div class="nav-list__item">
							${eN(this._state.walkthroughSupported,()=>ew` <a
										class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
										href="${rh("gitlens.openWalkthrough",{step:"streamline-collaboration",source:{source:"home",detail:"old-home"}})}"
										data-requires="repo"
										data-org-requires="drafts"
										aria-label="Open Code Suggest walkthrough"
										><code-icon class="nav-list__icon" icon="gl-code-suggestion"></code-icon
										><gl-tooltip
											hoist
											class="nav-list__group"
											content="Open Code Suggest walkthrough"
											><span class="nav-list__label">Code Suggest</span
											><span class="nav-list__desc">New!</span></gl-tooltip
										>
									</a>`)}
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show Cloud Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Cloud Workspaces view">
							<span>Cloud Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge placement="left" class="nav-list__access" cloud preview></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};lP.styles=[o8,o3,o7,E``],lS([eL({type:Object})],lP.prototype,"badgeSource",2),lS([C({context:"state",subscribe:!0}),eT()],lP.prototype,"_state",2),lP=lS([eB("gl-feature-nav")],lP);let lO=E`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
		container-type: inline-size;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid
			color-mix(
				in lab,
				var(--gl-banner-primary-emphasis-background) 50%,
				var(--gl-banner-secondary-emphasis-background) 50%
			);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(
					in lab,
					var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				0%,
			color-mix(
					in lab,
					var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				100%
		);
		border: 1px solid
			color-mix(
				in lab,
				color-mix(
						in lab,
						var(--gl-banner-primary-emphasis-background) 50%,
						var(--gl-banner-secondary-emphasis-background) 50%
					)
					calc(100% * (1 - var(--gl-banner-transparency))),
				transparent
			);
	}

	/* Gradient purple display mode - matches the auto-composer container styling */
	.banner--gradient-purple {
		border: 1px solid var(--vscode-panel-border);
		border-radius: 6px;
		background: linear-gradient(135deg, #a100ff1a 0%, #255ed11a 100%);
	}

	.banner--gradient-purple .banner__title {
		font-size: 1.3rem;
		color: var(--vscode-foreground);
		font-weight: normal;
	}

	.banner--gradient-purple .banner__body {
		font-size: 1.2rem;
		color: var(--vscode-descriptionForeground);
		line-height: 1.4;
	}

	.banner--gradient-purple .banner__body a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	.banner--gradient-purple .banner__body a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	/* Responsive layout */
	.banner--responsive .banner__content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		gap: var(--gl-banner-gap);
	}

	.banner--responsive .banner__text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.banner--responsive .banner__title,
	.banner--responsive .banner__body {
		text-align: left;
	}

	/* < 500px: Stack vertically with full-width buttons */
	.banner--responsive .banner__buttons {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.8rem;
		width: 100%;
	}

	.banner--responsive .banner__button {
		grid-column: unset;
		justify-self: unset;
		width: 100% !important;
		min-width: 100% !important;
		max-width: 100% !important;
		justify-content: center;
		flex: 1;
	}

	/* >= 500px: Three-group horizontal layout */
	@container (min-width: 500px) {
		.banner--responsive .banner__content {
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		/* Group 1: Text content (left-aligned) */
		.banner--responsive .banner__text {
			flex: 1;
			min-width: 0;
			align-self: center;
		}

		/* Group 2: Buttons (content-sized) */
		.banner--responsive .banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			margin-top: 0;
			width: auto;
			flex-shrink: 0;
			align-self: center;
		}

		.banner--responsive .banner__button {
			width: auto;
			white-space: nowrap;
		}

		/* Group 3: Dismiss button (to the right of buttons) */
		.banner--responsive .banner__dismiss {
			position: static !important;
			top: auto !important;
			right: auto !important;
			align-self: center;
			flex-shrink: 0;
		}
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
		text-wrap: pretty;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner:not(.banner--gradient-purple) .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner--gradient-purple .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Dismiss button */
	.banner__dismiss {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 15%, transparent);
		--button-padding: 0.4rem;
		z-index: 1;
	}

	/* Responsive layout dismiss button */
	.banner--responsive .banner__dismiss {
		/* < 500px: Upper right corner (default positioning) */
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(
			in lab,
			var(--vscode-button-secondaryBackground) 40%,
			#fff 60%
		);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light))
		.banner:not(.banner--gradient-purple)
		.banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner:not(.banner--gradient-purple) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var lA=Object.defineProperty,lR=Object.getOwnPropertyDescriptor,lI=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lR(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lA(t,o,n),n};let lB=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ew`<div part="base" class=${i0(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ew`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ew`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ew`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ew`<div class="banner__body">${rE(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ew`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ew`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??e$}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ew`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??e$}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ew`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??e$}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};lB.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lB.styles=[lO],lI([eL({reflect:!0})],lB.prototype,"display",2),lI([eL({attribute:"banner-title"})],lB.prototype,"bannerTitle",2),lI([eL()],lB.prototype,"body",2),lI([eL({attribute:"primary-button"})],lB.prototype,"primaryButton",2),lI([eL({attribute:"primary-button-href"})],lB.prototype,"primaryButtonHref",2),lI([eL({attribute:"primary-button-command"})],lB.prototype,"primaryButtonCommand",2),lI([eL({attribute:"secondary-button"})],lB.prototype,"secondaryButton",2),lI([eL({attribute:"secondary-button-href"})],lB.prototype,"secondaryButtonHref",2),lI([eL({attribute:"secondary-button-command"})],lB.prototype,"secondaryButtonCommand",2),lI([eL({type:Boolean,attribute:"dismissible"})],lB.prototype,"dismissible",2),lI([eL({attribute:"dismiss-href"})],lB.prototype,"dismissHref",2),lI([eL({attribute:"layout"})],lB.prototype,"layout",2),lB=lI([eB("gl-banner")],lB);var lE=Object.defineProperty,lL=Object.getOwnPropertyDescriptor,lT=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lL(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lE(t,o,n),n};let lD=class extends lit_element_i{get shouldShow(){return!this._state.aiAllAccessBannerCollapsed}get bodyLabel(){return this.hasAdvancedOrHigher?"Opt in now to get unlimited GitKraken AI until July 11th!":"Opt in now to try all Advanced GitLens features with unlimited GitKraken AI for FREE until July 11th!"}get primaryButtonLabel(){return"Opt In Now"}get hasAdvancedOrHigher(){var e,t;return this._state.subscription.plan&&(e=this._state.subscription.plan.actual.id,rn(e)-rn("advanced")>=0)||(t=this._state.subscription.plan.effective.id,rn(t)-rn("advanced")>=0)}render(){return this.shouldShow?ew`
			<gl-banner
				display="gradient"
				banner-title="All Access Week - now until July 11th!"
				body="${this.bodyLabel}"
				primary-button="${this.primaryButtonLabel}"
				primary-button-href="${rh("gitlens.plus.aiAllAccess.optIn",{source:"home"})}"
				secondary-button="Dismiss"
				@gl-banner-secondary-click=${this.onSecondaryClick}
			></gl-banner>
		`:e$}onSecondaryClick(){this._ipc.sendCommand(e6,void 0)}};lD.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lD.styles=[E`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}
		`],lT([C({context:"state",subscribe:!0}),eT()],lD.prototype,"_state",2),lT([C({context:"ipc",subscribe:!0}),eT()],lD.prototype,"_ipc",2),lD=lT([eB("gl-ai-all-access-banner")],lD);var lz=Object.defineProperty,lN=Object.getOwnPropertyDescriptor,lM=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lN(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lz(t,o,n),n};let lj=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||!0===this._state.amaBannerCollapsed?e$:ew`
			<gl-card indicator="info">
				<h4>Live AMA w/ the creator of GitLens</h4>
				<p>Feb 13 @ 1pm EST &mdash; <a href="${"https://www.gitkraken.com/lp/gitlensama?utm_source=githubdiscussion&utm_medium=hyperlink&utm_campaign=GLAMA&utm_id=GLAMA"}">Register now</a></p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._state.amaBannerCollapsed=!0,this._ipc.sendCommand(e1,{section:"feb2025AmaBanner",collapsed:!0})}};lj.styles=[o8,E`
			:host {
				margin-inline: 1.2rem;
			}
			h4 {
				font-weight: normal;
				margin-block-end: 0.4em;
			}

			p {
				margin-block: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],lM([C({context:"state",subscribe:!0}),eT()],lj.prototype,"_state",2),lM([C({context:"ipc",subscribe:!0}),eT()],lj.prototype,"_ipc",2),lM([eT()],lj.prototype,"closed",2),lj=lM([eB("gl-ama-banner")],lj);var lF=Object.defineProperty,lq=Object.getOwnPropertyDescriptor,lU=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lq(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lF(t,o,n),n};let lW=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?e$:ew`
			<gl-card>
				<p><strong>GitLens is better with integrations!</strong></p>
				<p>
					Connect hosting services like GitHub and issue trackers like Jira to track progress and take action
					on PRs and issues related to your branches.
				</p>
				<button-container>
					<gl-button
						appearance="secondary"
						href="${rh("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
						full
						><code-icon icon="plug"></code-icon> Connect Integrations</gl-button
					>
				</button-container>
				<gl-button slot="actions" appearance="toolbar" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._ipc.sendCommand(e1,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};lW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lW.styles=[E`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],lU([C({context:"state",subscribe:!0}),eT()],lW.prototype,"_state",2),lU([C({context:"ipc",subscribe:!0}),eT()],lW.prototype,"_ipc",2),lU([eT()],lW.prototype,"closed",2),lU([ez("gl-button")],lW.prototype,"_button",2),lW=lU([eB("gl-integration-banner")],lW);var lG=Object.defineProperty,lH=Object.getOwnPropertyDescriptor,lV=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lH(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lG(t,o,n),n};let lK=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?ew`
				<gl-tooltip placement="bottom">
					<button class="text-button text-button--end" @click=${()=>this.togglePreview()}>
						New Home View <code-icon icon="arrow-right"></code-icon>
					</button>
					<p slot="content">
						<strong>Switch to the new Home View!</strong><br />
						We've reimagined GitLens' Home to be a more helpful daily workflow tool. We're continuing to
						refine this experience and welcome your feedback.
					</p>
				</gl-tooltip>
			`:this.closed||!0===this._state.previewCollapsed?e$:ew`
			<gl-card>
				<h4 class="title">Welcome to the GitLens Home View</h4>
				<p>
					Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
					requests, all in one intuitive hub.
					<a class="feedback" href="https://help.gitkraken.com/gitlens/home-view/">Learn more</a>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(e0),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(e1,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};lK.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lK.styles=[o8,E`
			.title {
				margin-block-end: 0.4em;
			}

			.text-button {
				padding: 0.4rem 0.8rem;
			}

			.text-button {
				appearance: none;
				background: none;
				border: none;
				color: inherit;
				text-align: end;
				cursor: pointer;
				width: 100%;
			}
			.text-button:hover,
			.text-button:focus-within {
				background-color: var(--gl-card-background);
			}
			.text-button:focus-visible {
				${o0}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}

			p {
				margin-block: 0;
			}
		`],lV([C({context:"state",subscribe:!0}),eT()],lK.prototype,"_state",2),lV([C({context:"ipc",subscribe:!0}),eT()],lK.prototype,"_ipc",2),lV([eT()],lK.prototype,"closed",2),lV([ez("button")],lK.prototype,"_button",2),lK=lV([eB("gl-preview-banner")],lK);var lY=Object.defineProperty,lJ=Object.getOwnPropertyDescriptor,lZ=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?lJ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lY(t,o,n),n};let lX=class extends lit_element_i{constructor(){super(...arguments),this.source="unknown",this.layout="default",this.collapsed=!1,this.canAutoRegister=!1}render(){if(this.collapsed)return e$;if(this.canAutoRegister){let e=`GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and perform actions. <a href="${ot.helpCenterMCP}">Learn more</a>`;return ew`
				<gl-banner
					exportparts="base"
					display="gradient-purple"
					layout="${this.layout}"
					banner-title="GitKraken MCP Bundled with GitLens"
					body="${e}"
					dismissible
					dismiss-href="${rh("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
				></gl-banner>
			`}let e=`Leverage Git and your integrations (issues, PRs, etc) to provide context and perform actions in AI chat. <a href="${ot.helpCenterMCP}">Learn more</a>`;return ew`
			<gl-banner
				exportparts="base"
				display="gradient-purple"
				layout="${this.layout}"
				banner-title="Install GitKraken MCP for GitLens"
				body="${e}"
				primary-button="Install GitKraken MCP"
				primary-button-href="${rh("gitlens.ai.mcp.install",{source:this.source})}"
				dismissible
				dismiss-href="${rh("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
			></gl-banner>
		`}};lX.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lX.styles=[E`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}

			:host([layout='responsive']) gl-banner {
				margin-bottom: 0;
				width: 100%;
			}
		`],lZ([eL()],lX.prototype,"source",2),lZ([eL()],lX.prototype,"layout",2),lZ([eL({type:Boolean})],lX.prototype,"collapsed",2),lZ([eL({type:Boolean})],lX.prototype,"canAutoRegister",2),lX=lZ([eB("gl-mcp-banner")],lX);var lQ=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,l1=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?l0(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&lQ(t,o,n),n};let l2=class extends lit_element_i{render(){return ew`
			<gl-promo
				.promoPromise=${this.promos.getApplicablePromo(void 0,"home")}
				.source="${{source:"home"}}"
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
		`}};l2.styles=[E`
			:host {
				display: block;
			}
			.promo-banner {
				text-align: center;
				margin-bottom: 1rem;
			}
			.promo-banner--eyebrow {
				color: var(--color-foreground--50);
				margin-bottom: 0.2rem;
			}
			.promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}
		`],l1([C({context:"promos"})],l2.prototype,"promos",2),l2=l1([eB("gl-promo-banner")],l2);var l5=Object.defineProperty,l8=Object.getOwnPropertyDescriptor,l6=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?l8(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&l5(t,o,n),n};let l3=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){let e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return ew`
			${eN(this.alertVisibility.noRepo,()=>ew`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`)}
			${eN(this.alertVisibility.unsafeRepo,()=>ew`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`)}
			${eN(this.alertVisibility.untrusted,()=>ew`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`)}
		`}};l3.styles=[o8,o3,o9,E`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],l6([eL({type:Boolean,reflect:!0,attribute:"has-alerts"})],l3.prototype,"hasAlerts",1),l6([C({context:"state",subscribe:!0}),eT()],l3.prototype,"_state",2),l3=l6([eB("gl-repo-alerts")],l3);var l4=Object.defineProperty,l9=Object.getOwnPropertyDescriptor,l7=(e,t,o,r)=>{for(var i,n=r>1?void 0:r?l9(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r?i(t,o,n):i(n))||n);return r&&n&&l4(t,o,n),n};let ce=class extends GlAppHost{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t){return this.disposables.push(this._activeOverviewState=new ActiveOverviewState(t)),this.disposables.push(this._inactiveOverviewState=new InactiveOverviewState(t)),new HomeStateProvider(this,e,t)}connectedCallback(){super.connectedCallback?.(),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case ta.is(e):this._header.show();break;case ti.is(e):this._header.refreshPromo(),this.refreshAiAllAccessPromo()}}))}render(){return ew`
			<div class="home scrollable">
				<gl-home-header class="home__header"></gl-home-header>
				${eN(!this.state?.previewEnabled,()=>ew`<gl-preview-banner></gl-preview-banner>`)}
				${eN(this.state?.amaBannerCollapsed===!1,()=>ew`<gl-ama-banner></gl-ama-banner>`)}
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					${eN(this.state?.previewEnabled===!0,()=>ew`
							<gl-preview-banner></gl-preview-banner>
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`,()=>ew`
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>
						`)}
				</main>
			</div>
		`}refreshAiAllAccessPromo(){this.allAccessPromoBanner?.requestUpdate()}};ce.styles=[o3,o6,o4],l7([x({context:"activeOverviewState"})],ce.prototype,"_activeOverviewState",2),l7([x({context:"inactiveOverviewState"})],ce.prototype,"_inactiveOverviewState",2),l7([ez("gl-home-header")],ce.prototype,"_header",2),l7([ez("gl-ai-all-access-banner")],ce.prototype,"allAccessPromoBanner",2),ce=l7([eB("gl-home-app")],ce);export{ce as GlHomeApp};