(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var W=function(e,t){return W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},W(e,t)};function x(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");W(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Ie(e,t,n,r){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function c(f){try{s(r.next(f))}catch(v){u(v)}}function a(f){try{s(r.throw(f))}catch(v){u(v)}}function s(f){f.done?o(f.value):i(f.value).then(c,a)}s((r=r.apply(e,t||[])).next())})}function z(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(s){return function(f){return a([s,f])}}function a(s){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(n=0)),n;)try{if(r=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1],o=s;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(s);break}o[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(f){s=[6,f],i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function P(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o}function I(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function A(e){return this instanceof A?(this.v=e,this):new A(e)}function Se(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(h){r[h]&&(i[h]=function(y){return new Promise(function(b,d){o.push([h,y,b,d])>1||c(h,y)})})}function c(h,y){try{a(r[h](y))}catch(b){v(o[0][3],b)}}function a(h){h.value instanceof A?Promise.resolve(h.value.v).then(s,f):v(o[0][2],h)}function s(h){c("next",h)}function f(h){c("throw",h)}function v(h,y){h(y),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Ee(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof P=="function"?P(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(u){return new Promise(function(c,a){u=e[o](u),i(c,a,u.done,u.value)})}}function i(o,u,c,a){Promise.resolve(a).then(function(s){o({value:s,done:c})},u)}}function l(e){return typeof e=="function"}function Ae(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var L=Ae(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function k(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var C=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=P(u),a=c.next();!a.done;a=c.next()){var s=a.value;s.remove(this)}}catch(d){t={error:d}}finally{try{a&&!a.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}else u.remove(this);var f=this.initialTeardown;if(l(f))try{f()}catch(d){o=d instanceof L?d.errors:[d]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var h=P(v),y=h.next();!y.done;y=h.next()){var b=y.value;try{Q(b)}catch(d){o=o??[],d instanceof L?o=I(I([],g(o)),g(d.errors)):o.push(d)}}}catch(d){r={error:d}}finally{try{y&&!y.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}if(o)throw new L(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Q(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&k(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&k(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();C.EMPTY;function ee(e){return e instanceof C||e&&"closed"in e&&l(e.remove)&&l(e.add)&&l(e.unsubscribe)}function Q(e){l(e)?e():e.unsubscribe()}var te={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},U={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=U.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,I([e,t],g(n))):setTimeout.apply(void 0,I([e,t],g(n)))},clearTimeout:function(e){var t=U.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function ne(e){U.setTimeout(function(){throw e})}function B(){}function Te(e){e()}var j=function(e){x(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ee(n)&&n.add(r)):r.destination=Pe,r}return t.create=function(n,r,i){return new V(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(C),xe=Function.prototype.bind;function $(e,t){return xe.call(e,t)}var He=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){D(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){D(r)}else D(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){D(n)}},e}(),V=function(e){x(t,e);function t(n,r,i){var o=e.call(this)||this,u;if(l(n)||!n)u={next:n??void 0,error:r??void 0,complete:i??void 0};else{var c;o&&te.useDeprecatedNextContext?(c=Object.create(n),c.unsubscribe=function(){return o.unsubscribe()},u={next:n.next&&$(n.next,c),error:n.error&&$(n.error,c),complete:n.complete&&$(n.complete,c)}):u=n}return o.destination=new He(u),o}return t}(j);function D(e){ne(e)}function _e(e){throw e}var Pe={closed:!0,next:B,error:_e,complete:B},K=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function re(e){return e}function Oe(e){return e.length===0?re:e.length===1?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var m=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,o=Re(t)?t:new V(t,n,r);return Te(function(){var u=i,c=u.operator,a=u.source;o.add(c?c.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=X(n),new n(function(i,o){var u=new V({next:function(c){try{t(c)}catch(a){o(a),u.unsubscribe()}},error:o,complete:i});r.subscribe(u)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[K]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Oe(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=X(t),new t(function(r,i){var o;n.subscribe(function(u){return o=u},function(u){return i(u)},function(){return r(o)})})},e.create=function(t){return new e(t)},e}();function X(e){var t;return(t=e??te.Promise)!==null&&t!==void 0?t:Promise}function De(e){return e&&l(e.next)&&l(e.error)&&l(e.complete)}function Re(e){return e&&e instanceof j||De(e)&&ee(e)}function Ge(e){return l(e==null?void 0:e.lift)}function H(e){return function(t){if(Ge(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function T(e,t,n,r,i){return new Ce(e,t,n,r,i)}var Ce=function(e){x(t,e);function t(n,r,i,o,u,c){var a=e.call(this,n)||this;return a.onFinalize=u,a.shouldUnsubscribe=c,a._next=r?function(s){try{r(s)}catch(f){n.error(f)}}:e.prototype._next,a._error=o?function(s){try{o(s)}catch(f){n.error(f)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:e.prototype._complete,a}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(j),ie={now:function(){return(ie.delegate||Date).now()},delegate:void 0},Le=function(e){x(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t}(C),G={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=G.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,I([e,t],g(n))):setInterval.apply(void 0,I([e,t],g(n)))},clearInterval:function(e){var t=G.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},$e=function(e){x(t,e);function t(n,r){var i=e.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return t.prototype.schedule=function(n,r){var i;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,r)),this.pending=!0,this.delay=r,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,r),this},t.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),G.setInterval(n.flush.bind(n,this),i)},t.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;r!=null&&G.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var i=!1,o;try{this.work(n)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,k(o,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(Le),Z=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=ie.now,e}(),We=function(e){x(t,e);function t(n,r){r===void 0&&(r=Z.now);var i=e.call(this,n,r)||this;return i.actions=[],i._active=!1,i}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},t}(Z),oe=new We($e),ke=oe,Ue=new m(function(e){return e.complete()});function ue(e){return e&&l(e.schedule)}function ce(e){return e[e.length-1]}function Ve(e){return ue(ce(e))?e.pop():void 0}function qe(e,t){return typeof ce(e)=="number"?e.pop():t}var F=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function se(e){return l(e==null?void 0:e.then)}function ae(e){return l(e[K])}function fe(e){return Symbol.asyncIterator&&l(e==null?void 0:e[Symbol.asyncIterator])}function le(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Me(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var he=Me();function de(e){return l(e==null?void 0:e[he])}function ve(e){return Se(this,arguments,function(){var n,r,i,o;return z(this,function(u){switch(u.label){case 0:n=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,A(n.read())];case 3:return r=u.sent(),i=r.value,o=r.done,o?[4,A(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,A(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function ye(e){return l(e==null?void 0:e.getReader)}function S(e){if(e instanceof m)return e;if(e!=null){if(ae(e))return je(e);if(F(e))return Ke(e);if(se(e))return Fe(e);if(fe(e))return pe(e);if(de(e))return Ye(e);if(ye(e))return Je(e)}throw le(e)}function je(e){return new m(function(t){var n=e[K]();if(l(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ke(e){return new m(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Fe(e){return new m(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,ne)})}function Ye(e){return new m(function(t){var n,r;try{for(var i=P(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(t.next(u),t.closed)return}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function pe(e){return new m(function(t){Qe(e,t).catch(function(n){return t.error(n)})})}function Je(e){return pe(ve(e))}function Qe(e,t){var n,r,i,o;return Ie(this,void 0,void 0,function(){var u,c;return z(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=Ee(e),a.label=1;case 1:return[4,n.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(u=r.value,t.next(u),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=a.sent(),i={error:c},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function w(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function me(e,t){return t===void 0&&(t=0),H(function(n,r){n.subscribe(T(r,function(i){return w(r,e,function(){return r.next(i)},t)},function(){return w(r,e,function(){return r.complete()},t)},function(i){return w(r,e,function(){return r.error(i)},t)}))})}function be(e,t){return t===void 0&&(t=0),H(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function Be(e,t){return S(e).pipe(be(t),me(t))}function Xe(e,t){return S(e).pipe(be(t),me(t))}function Ze(e,t){return new m(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Ne(e,t){return new m(function(n){var r;return w(n,t,function(){r=e[he](),w(n,t,function(){var i,o,u;try{i=r.next(),o=i.value,u=i.done}catch(c){n.error(c);return}u?n.complete():n.next(o)},0,!0)}),function(){return l(r==null?void 0:r.return)&&r.return()}})}function we(e,t){if(!e)throw new Error("Iterable cannot be null");return new m(function(n){w(n,t,function(){var r=e[Symbol.asyncIterator]();w(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function ze(e,t){return we(ve(e),t)}function et(e,t){if(e!=null){if(ae(e))return Be(e,t);if(F(e))return Ze(e,t);if(se(e))return Xe(e,t);if(fe(e))return we(e,t);if(de(e))return Ne(e,t);if(ye(e))return ze(e,t)}throw le(e)}function tt(e,t){return t?et(e,t):S(e)}function nt(e){return e instanceof Date&&!isNaN(e)}function ge(e,t){return H(function(n,r){var i=0;n.subscribe(T(r,function(o){r.next(e.call(t,o,i++))}))})}var rt=Array.isArray;function it(e,t){return rt(t)?e.apply(void 0,I([],g(t))):e(t)}function ot(e){return ge(function(t){return it(e,t)})}function ut(e,t,n,r,i,o,u,c){var a=[],s=0,f=0,v=!1,h=function(){v&&!a.length&&!s&&t.complete()},y=function(d){return s<r?b(d):a.push(d)},b=function(d){o&&t.next(d),s++;var J=!1;S(n(d,f++)).subscribe(T(t,function(_){i==null||i(_),o?y(_):t.next(_)},function(){J=!0},void 0,function(){if(J)try{s--;for(var _=function(){var O=a.shift();u?w(t,u,function(){return b(O)}):b(O)};a.length&&s<r;)_();h()}catch(O){t.error(O)}}))};return e.subscribe(T(t,y,function(){v=!0,h()})),function(){c==null||c()}}function Y(e,t,n){return n===void 0&&(n=1/0),l(t)?Y(function(r,i){return ge(function(o,u){return t(r,o,i,u)})(S(e(r,i)))},n):(typeof t=="number"&&(n=t),H(function(r,i){return ut(r,i,e,n)}))}function ct(e){return e===void 0&&(e=1/0),Y(re,e)}var st=["addListener","removeListener"],at=["addEventListener","removeEventListener"],ft=["on","off"];function q(e,t,n,r){if(l(n)&&(r=n,n=void 0),r)return q(e,t,n).pipe(ot(r));var i=g(dt(e)?at.map(function(c){return function(a){return e[c](t,a,n)}}):lt(e)?st.map(N(e,t)):ht(e)?ft.map(N(e,t)):[],2),o=i[0],u=i[1];if(!o&&F(e))return Y(function(c){return q(c,t,n)})(S(e));if(!o)throw new TypeError("Invalid event target");return new m(function(c){var a=function(){for(var s=[],f=0;f<arguments.length;f++)s[f]=arguments[f];return c.next(1<s.length?s:s[0])};return o(a),function(){return u(a)}})}function N(e,t){return function(n){return function(r){return e[n](t,r)}}}function lt(e){return l(e.addListener)&&l(e.removeListener)}function ht(e){return l(e.on)&&l(e.off)}function dt(e){return l(e.addEventListener)&&l(e.removeEventListener)}function vt(e,t,n){e===void 0&&(e=0),n===void 0&&(n=ke);var r=-1;return t!=null&&(ue(t)?n=t:r=t),new m(function(i){var o=nt(e)?+e-n.now():e;o<0&&(o=0);var u=0;return n.schedule(function(){i.closed||(i.next(u++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function yt(e,t){return e===void 0&&(e=0),t===void 0&&(t=oe),e<0&&(e=0),vt(e,e,t)}function pt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Ve(e),r=qe(e,1/0),i=e;return i.length?i.length===1?S(i[0]):ct(r)(tt(i,n)):Ue}function mt(e,t){return H(function(n,r){var i=0;n.subscribe(T(r,function(o){return e.call(t,o,i++)&&r.next(o)}))})}function bt(e,t,n,r,i){return function(o,u){var c=n,a=t,s=0;o.subscribe(T(u,function(f){var v=s++;a=c?e(a,f,v):(c=!0,f),r&&u.next(a)},i&&function(){c&&u.next(a),u.complete()}))}}function wt(e,t){return H(bt(e,t,arguments.length>=2,!0))}const E={CANVAS_WIDTH:200,CANVAS_HEIGHT:400,PREVIEW_WIDTH:160,PREVIEW_HEIGHT:80},M={TICK_RATE_MS:500,GRID_WIDTH:10,GRID_HEIGHT:20},p={WIDTH:E.CANVAS_WIDTH/M.GRID_WIDTH,HEIGHT:E.CANVAS_HEIGHT/M.GRID_HEIGHT},gt={gameEnd:!1},It=e=>{e.setAttribute("visibility","visible"),e.parentNode.appendChild(e)},St=e=>e.setAttribute("visibility","hidden"),R=(e,t,n={})=>{const r=document.createElementNS(e,t);return Object.entries(n).forEach(([i,o])=>r.setAttribute(i,o)),r};function Et(){const e=document.querySelector("#svgCanvas"),t=document.querySelector("#svgPreview"),n=document.querySelector("#gameOver");document.querySelector("#main"),e.setAttribute("height",`${E.CANVAS_HEIGHT}`),e.setAttribute("width",`${E.CANVAS_WIDTH}`),t.setAttribute("height",`${E.PREVIEW_HEIGHT}`),t.setAttribute("width",`${E.PREVIEW_WIDTH}`),document.querySelector("#levelText"),document.querySelector("#scoreText"),document.querySelector("#highScoreText");const r=q(document,"keypress"),i=c=>r.pipe(mt(({code:a})=>a===c));i("KeyA"),i("KeyD"),i("KeyS");const o=yt(M.TICK_RATE_MS),u=c=>{const a=R(e.namespaceURI,"rect",{height:`${p.HEIGHT}`,width:`${p.WIDTH}`,x:"0",y:"0",style:"fill: green"});e.appendChild(a);const s=R(e.namespaceURI,"rect",{height:`${p.HEIGHT}`,width:`${p.WIDTH}`,x:`${p.WIDTH*(3-1)}`,y:`${p.HEIGHT*(20-1)}`,style:"fill: red"});e.appendChild(s);const f=R(e.namespaceURI,"rect",{height:`${p.HEIGHT}`,width:`${p.WIDTH}`,x:`${p.WIDTH*(4-1)}`,y:`${p.HEIGHT*(20-1)}`,style:"fill: red"});e.appendChild(f);const v=R(t.namespaceURI,"rect",{height:`${p.HEIGHT}`,width:`${p.WIDTH}`,x:`${p.WIDTH*2}`,y:`${p.HEIGHT}`,style:"fill: green"});t.appendChild(v)};pt(o).pipe(wt(c=>({gameEnd:!0}),gt)).subscribe(c=>{u(),c.gameEnd?It(n):St(n)})}typeof window<"u"&&(window.onload=()=>{Et()});