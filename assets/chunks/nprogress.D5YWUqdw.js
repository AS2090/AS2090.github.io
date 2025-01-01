import{u as xe,d as we,n as be,l as ae,r as K,g as _e,o as Ee,m as ue,w as U,b as Ie,p as Ae,q as Oe,a as Re,c as Le}from"../framework.DTsYX98Z.js";import{g as ke}from"./dayjs.Byk5cVHE.js";function kt(n){return _e()?(Ee(n),!0):!1}function I(n){return typeof n=="function"?n():xe(n)}const Te=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Tt=n=>n!=null,Ce=Object.prototype.toString,Ct=n=>Ce.call(n)==="[object Object]",F=()=>{},Nt=Ne();function Ne(){var n,e;return Te&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function X(n,e){function t(...s){return new Promise((r,i)=>{Promise.resolve(n(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return t}const le=n=>n();function Pe(n,e={}){let t,s,r=F;const i=a=>{clearTimeout(a),r(),r=F};return a=>{const u=I(n),l=I(e.maxWait);return t&&i(t),u<=0||l!==void 0&&l<=0?(s&&(i(s),s=null),Promise.resolve(a())):new Promise((f,d)=>{r=e.rejectOnCancel?d:f,l&&!s&&(s=setTimeout(()=>{t&&i(t),s=null,f(a())},l)),t=setTimeout(()=>{s&&i(s),s=null,f(a())},u)})}}function Fe(...n){let e=0,t,s=!0,r=F,i,o,a,u,l;!ae(n[0])&&typeof n[0]=="object"?{delay:o,trailing:a=!0,leading:u=!0,rejectOnCancel:l=!1}=n[0]:[o,a=!0,u=!0,l=!1]=n;const f=()=>{t&&(clearTimeout(t),t=void 0,r(),r=F)};return m=>{const v=I(o),c=Date.now()-e,h=()=>i=m();return f(),v<=0?(e=Date.now(),h()):(c>v&&(u||!s)?(e=Date.now(),h()):a&&(i=new Promise((g,y)=>{r=l?y:g,t=setTimeout(()=>{e=Date.now(),s=!0,g(h()),f()},Math.max(0,v-c))})),!u&&!t&&(t=setTimeout(()=>s=!0,v)),s=!1,i)}}function $e(n=le){const e=K(!0);function t(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&n(...i)};return{isActive:ue(e),pause:t,resume:s,eventFilter:r}}function he(n){return Ie()}function Pt(...n){if(n.length!==1)return Ae(...n);const e=n[0];return typeof e=="function"?ue(Oe(()=>({get:e,set:F}))):K(e)}function Ft(n,e=200,t={}){return X(Pe(e,t),n)}function $t(n,e=200,t=!1,s=!0,r=!1){return X(Fe(e,t,s,r),n)}function je(n,e,t={}){const{eventFilter:s=le,...r}=t;return U(n,X(s,e),r)}function jt(n,e,t={}){const{eventFilter:s,...r}=t,{eventFilter:i,pause:o,resume:a,isActive:u}=$e(s);return{stop:je(n,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:u}}function Wt(n,e=!0,t){he()?we(n,t):e?n():be(n)}function Dt(n,e){he()&&Re(n,e)}function Kt(n=!1,e={}){const{truthyValue:t=!0,falsyValue:s=!1}=e,r=ae(n),i=K(n);function o(a){if(arguments.length)return i.value=a,i.value;{const u=I(t);return i.value=i.value===u?I(s):u,i.value}}return r?o:[i,o]}function L(n){return Array.isArray?Array.isArray(n):ge(n)==="[object Array]"}const We=1/0;function De(n){if(typeof n=="string")return n;let e=n+"";return e=="0"&&1/n==-We?"-0":e}function Ke(n){return n==null?"":De(n)}function R(n){return typeof n=="string"}function fe(n){return typeof n=="number"}function ze(n){return n===!0||n===!1||Be(n)&&ge(n)=="[object Boolean]"}function de(n){return typeof n=="object"}function Be(n){return de(n)&&n!==null}function A(n){return n!=null}function B(n){return!n.trim().length}function ge(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Ue="Incorrect 'index' type",Ve=n=>`Invalid value for key ${n}`,Ge=n=>`Pattern length exceeds max of ${n}.`,He=n=>`Missing ${n} property in key`,Ye=n=>`Property 'weight' in key '${n}' must be a positive integer`,te=Object.prototype.hasOwnProperty;class Qe{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(s=>{let r=pe(s);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(s=>{s.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function pe(n){let e=null,t=null,s=null,r=1,i=null;if(R(n)||L(n))s=n,e=ne(n),t=V(n);else{if(!te.call(n,"name"))throw new Error(He("name"));const o=n.name;if(s=o,te.call(n,"weight")&&(r=n.weight,r<=0))throw new Error(Ye(o));e=ne(o),t=V(o),i=n.getFn}return{path:e,id:t,weight:r,src:s,getFn:i}}function ne(n){return L(n)?n:n.split(".")}function V(n){return L(n)?n.join("."):n}function Je(n,e){let t=[],s=!1;const r=(i,o,a)=>{if(A(i))if(!o[a])t.push(i);else{let u=o[a];const l=i[u];if(!A(l))return;if(a===o.length-1&&(R(l)||fe(l)||ze(l)))t.push(Ke(l));else if(L(l)){s=!0;for(let f=0,d=l.length;f<d;f+=1)r(l[f],o,a+1)}else o.length&&r(l,o,a+1)}};return r(n,R(e)?e.split("."):e,0),s?t:t[0]}const Xe={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ze={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,e)=>n.score===e.score?n.idx<e.idx?-1:1:n.score<e.score?-1:1},qe={location:0,threshold:.6,distance:100},et={useExtendedSearch:!1,getFn:Je,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var p={...Ze,...Xe,...qe,...et};const tt=/[^ ]+/g;function nt(n=1,e=3){const t=new Map,s=Math.pow(10,e);return{get(r){const i=r.match(tt).length;if(t.has(i))return t.get(i);const o=1/Math.pow(i,.5*n),a=parseFloat(Math.round(o*s)/s);return t.set(i,a),a},clear(){t.clear()}}}class Z{constructor({getFn:e=p.getFn,fieldNormWeight:t=p.fieldNormWeight}={}){this.norm=nt(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,s)=>{this._keysMap[t.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,R(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();R(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,s=this.size();t<s;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!A(e)||B(e))return;let s={v:e,i:t,n:this.norm.get(e)};this.records.push(s)}_addObject(e,t){let s={i:t,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(A(o)){if(L(o)){let a=[];const u=[{nestedArrIndex:-1,value:o}];for(;u.length;){const{nestedArrIndex:l,value:f}=u.pop();if(A(f))if(R(f)&&!B(f)){let d={v:f,i:l,n:this.norm.get(f)};a.push(d)}else L(f)&&f.forEach((d,m)=>{u.push({nestedArrIndex:m,value:d})})}s.$[i]=a}else if(R(o)&&!B(o)){let a={v:o,n:this.norm.get(o)};s.$[i]=a}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function me(n,e,{getFn:t=p.getFn,fieldNormWeight:s=p.fieldNormWeight}={}){const r=new Z({getFn:t,fieldNormWeight:s});return r.setKeys(n.map(pe)),r.setSources(e),r.create(),r}function st(n,{getFn:e=p.getFn,fieldNormWeight:t=p.fieldNormWeight}={}){const{keys:s,records:r}=n,i=new Z({getFn:e,fieldNormWeight:t});return i.setKeys(s),i.setIndexRecords(r),i}function j(n,{errors:e=0,currentLocation:t=0,expectedLocation:s=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const o=e/n.length;if(i)return o;const a=Math.abs(s-t);return r?o+a/r:a?1:o}function rt(n=[],e=p.minMatchCharLength){let t=[],s=-1,r=-1,i=0;for(let o=n.length;i<o;i+=1){let a=n[i];a&&s===-1?s=i:!a&&s!==-1&&(r=i-1,r-s+1>=e&&t.push([s,r]),s=-1)}return n[i-1]&&i-s>=e&&t.push([s,i-1]),t}const C=32;function it(n,e,t,{location:s=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,includeMatches:u=p.includeMatches,ignoreLocation:l=p.ignoreLocation}={}){if(e.length>C)throw new Error(Ge(C));const f=e.length,d=n.length,m=Math.max(0,Math.min(s,d));let v=i,c=m;const h=a>1||u,g=h?Array(d):[];let y;for(;(y=n.indexOf(e,c))>-1;){let S=j(e,{currentLocation:y,expectedLocation:m,distance:r,ignoreLocation:l});if(v=Math.min(S,v),c=y+f,h){let b=0;for(;b<f;)g[y+b]=1,b+=1}}c=-1;let x=[],w=1,M=f+d;const E=1<<f-1;for(let S=0;S<f;S+=1){let b=0,k=M;for(;b<k;)j(e,{errors:S,currentLocation:m+k,expectedLocation:m,distance:r,ignoreLocation:l})<=v?b=k:M=k,k=Math.floor((M-b)/2+b);M=k;let q=Math.max(1,m-k+1),z=o?d:Math.min(m+k,d)+f,N=Array(z+2);N[z+1]=(1<<S)-1;for(let O=z;O>=q;O-=1){let $=O-1,ee=t[n.charAt($)];if(h&&(g[$]=+!!ee),N[O]=(N[O+1]<<1|1)&ee,S&&(N[O]|=(x[O+1]|x[O])<<1|1|x[O+1]),N[O]&E&&(w=j(e,{errors:S,currentLocation:$,expectedLocation:m,distance:r,ignoreLocation:l}),w<=v)){if(v=w,c=$,c<=m)break;q=Math.max(1,2*m-c)}}if(j(e,{errors:S+1,currentLocation:m,expectedLocation:m,distance:r,ignoreLocation:l})>v)break;x=N}const _={isMatch:c>=0,score:Math.max(.001,w)};if(h){const S=rt(g,a);S.length?u&&(_.indices=S):_.isMatch=!1}return _}function ot(n){let e={};for(let t=0,s=n.length;t<s;t+=1){const r=n.charAt(t);e[r]=(e[r]||0)|1<<s-t-1}return e}class ve{constructor(e,{location:t=p.location,threshold:s=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:u=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){if(this.options={location:t,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:u,ignoreLocation:l},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(m,v)=>{this.chunks.push({pattern:m,alphabet:ot(m),startIndex:v})},d=this.pattern.length;if(d>C){let m=0;const v=d%C,c=d-v;for(;m<c;)f(this.pattern.substr(m,C),m),m+=C;if(v){const h=d-C;f(this.pattern.substr(h),h)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:s}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let c={isMatch:!0,score:0};return s&&(c.indices=[[0,e.length-1]]),c}const{location:r,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:u,ignoreLocation:l}=this.options;let f=[],d=0,m=!1;this.chunks.forEach(({pattern:c,alphabet:h,startIndex:g})=>{const{isMatch:y,score:x,indices:w}=it(e,c,h,{location:r+g,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:u,includeMatches:s,ignoreLocation:l});y&&(m=!0),d+=x,y&&w&&(f=[...f,...w])});let v={isMatch:m,score:m?d/this.chunks.length:1};return m&&s&&(v.indices=f),v}}class T{constructor(e){this.pattern=e}static isMultiMatch(e){return se(e,this.multiRegex)}static isSingleMatch(e){return se(e,this.singleRegex)}search(){}}function se(n,e){const t=n.match(e);return t?t[1]:null}class ct extends T{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class at extends T{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ut extends T{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class lt extends T{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ht extends T{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ft extends T{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class ye extends T{constructor(e,{location:t=p.location,threshold:s=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:u=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){super(e),this._bitapSearch=new ve(e,{location:t,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:u,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Me extends T{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,s;const r=[],i=this.pattern.length;for(;(s=e.indexOf(this.pattern,t))>-1;)t=s+i,r.push([s,t-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const G=[ct,Me,ut,lt,ft,ht,at,ye],re=G.length,dt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,gt="|";function pt(n,e={}){return n.split(gt).map(t=>{let s=t.trim().split(dt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=s.length;i<o;i+=1){const a=s[i];let u=!1,l=-1;for(;!u&&++l<re;){const f=G[l];let d=f.isMultiMatch(a);d&&(r.push(new f(d,e)),u=!0)}if(!u)for(l=-1;++l<re;){const f=G[l];let d=f.isSingleMatch(a);if(d){r.push(new f(d,e));break}}}return r})}const mt=new Set([ye.type,Me.type]);class vt{constructor(e,{isCaseSensitive:t=p.isCaseSensitive,includeMatches:s=p.includeMatches,minMatchCharLength:r=p.minMatchCharLength,ignoreLocation:i=p.ignoreLocation,findAllMatches:o=p.findAllMatches,location:a=p.location,threshold:u=p.threshold,distance:l=p.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:a,threshold:u,distance:l},this.pattern=t?e:e.toLowerCase(),this.query=pt(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],a=0;for(let u=0,l=t.length;u<l;u+=1){const f=t[u];o.length=0,i=0;for(let d=0,m=f.length;d<m;d+=1){const v=f[d],{isMatch:c,indices:h,score:g}=v.search(e);if(c){if(i+=1,a+=g,s){const y=v.constructor.type;mt.has(y)?o=[...o,...h]:o.push(h)}}else{a=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:a/i};return s&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const H=[];function yt(...n){H.push(...n)}function Y(n,e){for(let t=0,s=H.length;t<s;t+=1){let r=H[t];if(r.condition(n,e))return new r(n,e)}return new ve(n,e)}const D={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},J=n=>!!(n[D.AND]||n[D.OR]),Mt=n=>!!n[Q.PATH],St=n=>!L(n)&&de(n)&&!J(n),ie=n=>({[D.AND]:Object.keys(n).map(e=>({[e]:n[e]}))});function Se(n,e,{auto:t=!0}={}){const s=r=>{let i=Object.keys(r);const o=Mt(r);if(!o&&i.length>1&&!J(r))return s(ie(r));if(St(r)){const u=o?r[Q.PATH]:i[0],l=o?r[Q.PATTERN]:r[u];if(!R(l))throw new Error(Ve(u));const f={keyId:V(u),pattern:l};return t&&(f.searcher=Y(l,e)),f}let a={children:[],operator:i[0]};return i.forEach(u=>{const l=r[u];L(l)&&l.forEach(f=>{a.children.push(s(f))})}),a};return J(n)||(n=ie(n)),s(n)}function xt(n,{ignoreFieldNorm:e=p.ignoreFieldNorm}){n.forEach(t=>{let s=1;t.matches.forEach(({key:r,norm:i,score:o})=>{const a=r?r.weight:null;s*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:i))}),t.score=s})}function wt(n,e){const t=n.matches;e.matches=[],A(t)&&t.forEach(s=>{if(!A(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let o={indices:r,value:i};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function bt(n,e){e.score=n.score}function _t(n,e,{includeMatches:t=p.includeMatches,includeScore:s=p.includeScore}={}){const r=[];return t&&r.push(wt),s&&r.push(bt),n.map(i=>{const{idx:o}=i,a={item:e[o],refIndex:o};return r.length&&r.forEach(u=>{u(i,a)}),a})}class P{constructor(e,t={},s){this.options={...p,...t},this.options.useExtendedSearch,this._keyStore=new Qe(this.options.keys),this.setCollection(e,s)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Z))throw new Error(Ue);this._myIndex=t||me(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){A(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];e(i,s)&&(this.removeAt(s),s-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:a}=this.options;let u=R(e)?R(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return xt(u,{ignoreFieldNorm:a}),i&&u.sort(o),fe(t)&&t>-1&&(u=u.slice(0,t)),_t(u,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const t=Y(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:o,n:a})=>{if(!A(i))return;const{isMatch:u,score:l,indices:f}=t.searchIn(i);u&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:a,indices:f}]})}),r}_searchLogical(e){const t=Se(e,this.options),s=(a,u,l)=>{if(!a.children){const{keyId:d,searcher:m}=a,v=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(u,d),searcher:m});return v&&v.length?[{idx:l,item:u,matches:v}]:[]}const f=[];for(let d=0,m=a.children.length;d<m;d+=1){const v=a.children[d],c=s(v,u,l);if(c.length)f.push(...c);else if(a.operator===D.AND)return[]}return f},r=this._myIndex.records,i={},o=[];return r.forEach(({$:a,i:u})=>{if(A(a)){let l=s(t,a,u);l.length&&(i[u]||(i[u]={idx:u,item:a,matches:[]},o.push(i[u])),l.forEach(({matches:f})=>{i[u].matches.push(...f)}))}}),o}_searchObjectList(e){const t=Y(e,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:a})=>{if(!A(o))return;let u=[];s.forEach((l,f)=>{u.push(...this._findMatches({key:l,value:o[f],searcher:t}))}),u.length&&i.push({idx:a,item:o,matches:u})}),i}_findMatches({key:e,value:t,searcher:s}){if(!A(t))return[];let r=[];if(L(t))t.forEach(({v:i,i:o,n:a})=>{if(!A(i))return;const{isMatch:u,score:l,indices:f}=s.searchIn(i);u&&r.push({score:l,key:e,value:i,idx:o,norm:a,indices:f})});else{const{v:i,n:o}=t,{isMatch:a,score:u,indices:l}=s.searchIn(i);a&&r.push({score:u,key:e,value:i,norm:o,indices:l})}return r}}P.version="7.0.0";P.createIndex=me;P.parseIndex=st;P.config=p;P.parseQuery=Se;yt(vt);function zt(n,e,t){const s=()=>{var o,a;return new P((o=I(e))!=null?o:[],(a=I(t))==null?void 0:a.fuseOptions)},r=K(s());U(()=>{var o;return(o=I(t))==null?void 0:o.fuseOptions},()=>{r.value=s()},{deep:!0}),U(()=>I(e),o=>{r.value.setCollection(o)},{deep:!0});const i=Le(()=>{const o=I(t);if(o!=null&&o.matchAllWhenSearchEmpty&&!I(n))return I(e).map((u,l)=>({item:u,refIndex:l}));const a=o==null?void 0:o.resultLimit;return r.value.search(I(n),a?{limit:a}:void 0)});return{fuse:r,results:i}}var W={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Et=W.exports,oe;function It(){return oe||(oe=1,function(n,e){(function(t,s){n.exports=s()})(Et,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(c){var h,g;for(h in c)g=c[h],g!==void 0&&c.hasOwnProperty(h)&&(s[h]=g);return this},t.status=null,t.set=function(c){var h=t.isStarted();c=r(c,s.minimum,1),t.status=c===1?null:c;var g=t.render(!h),y=g.querySelector(s.barSelector),x=s.speed,w=s.easing;return g.offsetWidth,a(function(M){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),u(y,o(c,x,w)),c===1?(u(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){u(g,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){t.remove(),M()},x)},x)):setTimeout(M,x)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var c=function(){setTimeout(function(){t.status&&(t.trickle(),c())},s.trickleSpeed)};return s.trickle&&c(),this},t.done=function(c){return!c&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(c){var h=t.status;return h?(typeof c!="number"&&(c=(1-h)*r(Math.random()*h,.1,.95)),h=r(h+c,0,.994),t.set(h)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var c=0,h=0;t.promise=function(g){return!g||g.state()==="resolved"?this:(h===0&&t.start(),c++,h++,g.always(function(){h--,h===0?(c=0,t.done()):t.set((c-h)/c)}),this)}}(),t.render=function(c){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var h=document.createElement("div");h.id="nprogress",h.innerHTML=s.template;var g=h.querySelector(s.barSelector),y=c?"-100":i(t.status||0),x=document.querySelector(s.parent),w;return u(g,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),s.showSpinner||(w=h.querySelector(s.spinnerSelector),w&&v(w)),x!=document.body&&f(x,"nprogress-custom-parent"),x.appendChild(h),h},t.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(s.parent),"nprogress-custom-parent");var c=document.getElementById("nprogress");c&&v(c)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var c=document.body.style,h="WebkitTransform"in c?"Webkit":"MozTransform"in c?"Moz":"msTransform"in c?"ms":"OTransform"in c?"O":"";return h+"Perspective"in c?"translate3d":h+"Transform"in c?"translate":"margin"};function r(c,h,g){return c<h?h:c>g?g:c}function i(c){return(-1+c)*100}function o(c,h,g){var y;return s.positionUsing==="translate3d"?y={transform:"translate3d("+i(c)+"%,0,0)"}:s.positionUsing==="translate"?y={transform:"translate("+i(c)+"%,0)"}:y={"margin-left":i(c)+"%"},y.transition="all "+h+"ms "+g,y}var a=function(){var c=[];function h(){var g=c.shift();g&&g(h)}return function(g){c.push(g),c.length==1&&h()}}(),u=function(){var c=["Webkit","O","Moz","ms"],h={};function g(M){return M.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(E,_){return _.toUpperCase()})}function y(M){var E=document.body.style;if(M in E)return M;for(var _=c.length,S=M.charAt(0).toUpperCase()+M.slice(1),b;_--;)if(b=c[_]+S,b in E)return b;return M}function x(M){return M=g(M),h[M]||(h[M]=y(M))}function w(M,E,_){E=x(E),M.style[E]=_}return function(M,E){var _=arguments,S,b;if(_.length==2)for(S in E)b=E[S],b!==void 0&&E.hasOwnProperty(S)&&w(M,S,b);else w(M,_[1],_[2])}}();function l(c,h){var g=typeof c=="string"?c:m(c);return g.indexOf(" "+h+" ")>=0}function f(c,h){var g=m(c),y=g+h;l(g,h)||(c.className=y.substring(1))}function d(c,h){var g=m(c),y;l(c,h)&&(y=g.replace(" "+h+" "," "),c.className=y.substring(1,y.length-1))}function m(c){return(" "+(c.className||"")+" ").replace(/\s+/gi," ")}function v(c){c&&c.parentNode&&c.parentNode.removeChild(c)}return t})}(W)),W.exports}var At=It();const ce=ke(At),Bt=({isClient:n,router:e})=>{n&&(e.beforeEach((t,s)=>{t.path!==s.path&&ce.start()}),e.afterEach(()=>{ce.done()}))};export{Wt as a,Ct as b,kt as c,Tt as d,Pt as e,Dt as f,Nt as g,Ft as h,Te as i,Kt as j,zt as k,Bt as l,F as n,I as t,$t as u,jt as w};