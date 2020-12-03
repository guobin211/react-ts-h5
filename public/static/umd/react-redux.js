!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("redux"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","redux","react-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactRedux={},e.React,e.Redux,e.ReactDOM)}(this,(function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(t);function a(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}function i(){}function c(){}c.resetWarningCache=i;a((function(e){e.exports=function(){function e(e,t,r,n,o,u){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==u){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:i};return r.PropTypes=r,r}()}));var s=u.default.createContext(null);var f=function(e){e()},p=function(){return f},l={notify:function(){}};var d=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=l,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return!!this.unsubscribe},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=p(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=l)},e}();function y(){return(y=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;u.length>n;n++)0>t.indexOf(r=u[n])&&(o[r]=e[r]);return o}
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */var m="function"==typeof Symbol&&Symbol.for,b=m?Symbol.for("react.element"):60103,h=m?Symbol.for("react.portal"):60106,S=m?Symbol.for("react.fragment"):60107,P=m?Symbol.for("react.strict_mode"):60108,g=m?Symbol.for("react.profiler"):60114,O=m?Symbol.for("react.provider"):60109,w=m?Symbol.for("react.context"):60110,C=m?Symbol.for("react.async_mode"):60111,x=m?Symbol.for("react.concurrent_mode"):60111,E=m?Symbol.for("react.forward_ref"):60112,T=m?Symbol.for("react.suspense"):60113,M=m?Symbol.for("react.suspense_list"):60120,R=m?Symbol.for("react.memo"):60115,$=m?Symbol.for("react.lazy"):60116,j=m?Symbol.for("react.block"):60121,N=m?Symbol.for("react.fundamental"):60117,q=m?Symbol.for("react.responder"):60118,D=m?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:switch(e=e.type){case C:case x:case S:case g:case P:case T:return e;default:switch(e=e&&e.$$typeof){case w:case E:case $:case R:case O:return e;default:return t}}case h:return t}}}function F(e){return _(e)===x}var k={AsyncMode:C,ConcurrentMode:x,ContextConsumer:w,ContextProvider:O,Element:b,ForwardRef:E,Fragment:S,Lazy:$,Memo:R,Portal:h,Profiler:g,StrictMode:P,Suspense:T,isAsyncMode:function(e){return F(e)||_(e)===C},isConcurrentMode:F,isContextConsumer:function(e){return _(e)===w},isContextProvider:function(e){return _(e)===O},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b},isForwardRef:function(e){return _(e)===E},isFragment:function(e){return _(e)===S},isLazy:function(e){return _(e)===$},isMemo:function(e){return _(e)===R},isPortal:function(e){return _(e)===h},isProfiler:function(e){return _(e)===g},isStrictMode:function(e){return _(e)===P},isSuspense:function(e){return _(e)===T},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===S||e===x||e===g||e===P||e===T||e===M||"object"==typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===R||e.$$typeof===O||e.$$typeof===w||e.$$typeof===E||e.$$typeof===N||e.$$typeof===q||e.$$typeof===D||e.$$typeof===j)},typeOf:_},W=a((function(e){e.exports=k})),H={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I={};function L(e){return W.isMemo(e)?A:I[e.$$typeof]||H}I[W.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I[W.Memo]=A;var z=Object.defineProperty,K=Object.getOwnPropertyNames,V=Object.getOwnPropertySymbols,B=Object.getOwnPropertyDescriptor,Y=Object.getPrototypeOf,G=Object.prototype;var J=function e(t,r,n){if("string"!=typeof r){if(G){var o=Y(r);o&&o!==G&&e(t,o,n)}var u=K(r);V&&(u=u.concat(V(r)));for(var a=L(t),i=L(r),c=0;u.length>c;++c){var s=u[c];if(!(U[s]||n&&n[s]||i&&i[s]||a&&a[s])){var f=B(r,s);try{z(t,s,f)}catch(e){}}}}return t},Q="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect,X=[],Z=[null,null];function ee(e,t){return[t.payload,e[1]+1]}function te(e,t,r){Q((function(){return e.apply(void 0,t)}),r)}function re(e,t,r,n,o,u,a){e.current=n,t.current=o,r.current=!1,u.current&&(u.current=null,a())}function ne(e,t,r,n,o,u,a,i,c,s){if(e){var f=!1,p=null,l=function(){if(!f){var e,r,l=t.getState();try{e=n(l,o.current)}catch(e){r=e,p=e}r||(p=null),e===u.current?a.current||c():(u.current=e,i.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:r}}))}};r.onStateChange=l,r.trySubscribe(),l();return function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var oe=function(){return[null,0]};function ue(e,r){void 0===r&&(r={});var n=r.getDisplayName,o=void 0===n?function(e){return"ConnectAdvanced("+e+")"}:n,a=r.methodName,i=void 0===a?"connectAdvanced":a,c=r.renderCountProp,f=void 0===c?void 0:c,p=r.shouldHandleStateChanges,l=void 0===p||p,m=r.storeKey,b=void 0===m?"store":m,h=r.forwardRef,S=void 0!==h&&h,P=r.context,g=void 0===P?s:P,O=v(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),w=g;return function(r){var n=r.displayName||r.name||"Component",a=o(n),c=y({},O,{getDisplayName:o,methodName:i,renderCountProp:f,shouldHandleStateChanges:l,storeKey:b,displayName:a,wrappedComponentName:n,WrappedComponent:r}),s=O.pure;var p=s?t.useMemo:function(e){return e()};function m(n){var o=t.useMemo((function(){var e=n.reactReduxForwardedRef,t=v(n,["reactReduxForwardedRef"]);return[n.context,e,t]}),[n]),a=o[0],i=o[1],s=o[2],f=t.useMemo((function(){return a&&a.Consumer&&W.isContextConsumer(u.default.createElement(a.Consumer,null))?a:w}),[a,w]),m=t.useContext(f),b=!!n.store&&!!n.store.getState&&!!n.store.dispatch,h=b?n.store:m.store,S=t.useMemo((function(){return function(t){return e(t.dispatch,c)}(h)}),[h]),P=t.useMemo((function(){if(!l)return Z;var e=new d(h,b?null:m.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[h,b,m]),g=P[0],O=P[1],C=t.useMemo((function(){return b?m:y({},m,{subscription:g})}),[b,m,g]),x=t.useReducer(ee,X,oe),E=x[0][0],T=x[1];if(E&&E.error)throw E.error;var M=t.useRef(),R=t.useRef(s),$=t.useRef(),j=t.useRef(!1),N=p((function(){return $.current&&s===R.current?$.current:S(h.getState(),s)}),[h,E,s]);te(re,[R,M,j,s,N,$,O]),te(ne,[l,h,g,S,R,M,j,$,O,T],[h,g,S]);var q=t.useMemo((function(){return u.default.createElement(r,y({},N,{ref:i}))}),[i,r,N]);return t.useMemo((function(){return l?u.default.createElement(f.Provider,{value:C},q):q}),[f,q,C])}var h=s?u.default.memo(m):m;if(h.WrappedComponent=r,h.displayName=a,S){var P=u.default.forwardRef((function(e,t){return u.default.createElement(h,y({},e,{reactReduxForwardedRef:t}))}));return P.displayName=a,P.WrappedComponent=r,J(P,r)}return J(h,r)}}function ae(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function ie(e,t){if(ae(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var n=0;r.length>n;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!ae(e[r[n]],t[r[n]]))return!1;return!0}function ce(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function se(e){return null!=e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}function fe(e,t){return function(t,r){var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=se(e);var o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=se(o),o=n(t,r)),o},n}}var pe=[function(e){return"function"==typeof e?fe(e):void 0},function(e){return e?void 0:ce((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?ce((function(t){return r.bindActionCreators(e,t)})):void 0}];var le=[function(e){return"function"==typeof e?fe(e):void 0},function(e){return e?void 0:ce((function(){return{}}))}];function de(e,t,r){return y({},r,e,t)}var ye=[function(e){return"function"==typeof e?function(e){return function(t,r){var n,o=r.pure,u=r.areMergedPropsEqual,a=!1;return function(t,r,i){var c=e(t,r,i);return a?o&&u(c,n)||(n=c):(a=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return de}}];function ve(e,t,r,n){return function(o,u){return r(e(o,u),t(n,u),u)}}function me(e,t,r,n,o){var u,a,i,c,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;function y(o,d){var y,v,m=!p(d,a),b=!f(o,u);return u=o,a=d,m&&b?(i=e(u,a),t.dependsOnOwnProps&&(c=t(n,a)),s=r(i,c,a)):m?(e.dependsOnOwnProps&&(i=e(u,a)),t.dependsOnOwnProps&&(c=t(n,a)),s=r(i,c,a)):b?(y=e(u,a),v=!l(y,i),i=y,v&&(s=r(i,c,a)),s):s}return function(o,f){return d?y(o,f):(i=e(u=o,a=f),c=t(n,a),s=r(i,c,a),d=!0,s)}}function be(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,u=v(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=r(e,u),i=n(e,u),c=o(e,u);return(u.pure?me:ve)(a,i,c,e,u)}function he(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function Se(e,t){return e===t}function Pe(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?ue:r,o=t.mapStateToPropsFactories,u=void 0===o?le:o,a=t.mapDispatchToPropsFactories,i=void 0===a?pe:a,c=t.mergePropsFactories,s=void 0===c?ye:c,f=t.selectorFactory,p=void 0===f?be:f;return function(e,t,r,o){void 0===o&&(o={});var a=o.pure,c=void 0===a||a,f=o.areStatesEqual,l=void 0===f?Se:f,d=o.areOwnPropsEqual,m=void 0===d?ie:d,b=o.areStatePropsEqual,h=void 0===b?ie:b,S=o.areMergedPropsEqual,P=void 0===S?ie:S,g=v(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=he(e,u,"mapStateToProps"),w=he(t,i,"mapDispatchToProps"),C=he(r,s,"mergeProps");return n(p,y({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:!!e,initMapStateToProps:O,initMapDispatchToProps:w,initMergeProps:C,pure:c,areStatesEqual:l,areOwnPropsEqual:m,areStatePropsEqual:h,areMergedPropsEqual:P},g))}}var ge=Pe();function Oe(){return t.useContext(s)}function we(e){void 0===e&&(e=s);var r=e===s?Oe:function(){return t.useContext(e)};return function(){return r().store}}var Ce=we();function xe(e){void 0===e&&(e=s);var t=e===s?Ce:we(e);return function(){return t().dispatch}}var Ee=xe(),Te=function(e,t){return e===t};function Me(e){void 0===e&&(e=s);var r=e===s?Oe:function(){return t.useContext(e)};return function(e,n){void 0===n&&(n=Te);var o=r(),u=function(e,r,n,o){var u,a=t.useReducer((function(e){return e+1}),0)[1],i=t.useMemo((function(){return new d(n,o)}),[n,o]),c=t.useRef(),s=t.useRef(),f=t.useRef(),p=t.useRef(),l=n.getState();try{u=e!==s.current||l!==f.current||c.current?e(l):p.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return Q((function(){s.current=e,f.current=l,p.current=u,c.current=void 0})),Q((function(){function e(){try{var e=s.current(n.getState());if(r(e,p.current))return;p.current=e}catch(e){c.current=e}a()}return i.onStateChange=e,i.trySubscribe(),e(),function(){return i.tryUnsubscribe()}}),[n,i]),u}(e,n,o.store,o.subscription);return t.useDebugValue(u),u}}var Re=Me();f=n.unstable_batchedUpdates,Object.defineProperty(e,"batch",{enumerable:!0,get:function(){return n.unstable_batchedUpdates}}),e.Provider=function(e){var r=e.store,n=e.context,o=e.children,a=t.useMemo((function(){var e=new d(r);return e.onStateChange=e.notifyNestedSubs,{store:r,subscription:e}}),[r]),i=t.useMemo((function(){return r.getState()}),[r]);return t.useEffect((function(){var e=a.subscription;return e.trySubscribe(),i!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,i]),u.default.createElement((n||s).Provider,{value:a},o)},e.ReactReduxContext=s,e.connect=ge,e.connectAdvanced=ue,e.createDispatchHook=xe,e.createSelectorHook=Me,e.createStoreHook=we,e.shallowEqual=ie,e.useDispatch=Ee,e.useSelector=Re,e.useStore=Ce,Object.defineProperty(e,"__esModule",{value:!0})}));
