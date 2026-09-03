import{a as e,c as t,d as n,g as r,i,l as a,o,r as s,s as c,t as l,u}from"./index-gZEfdcxr.js";import{a as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./x-DL2ZtW0x.js";var v=d(`folder-open`,[[`path`,{d:`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,key:`usdka0`}]]),y=d(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),b=d(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),x=d(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),S=r(n(),1);function C(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=C(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function w(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=C(e))&&(r&&(r+=` `),r+=t);return r}var T=e=>typeof e==`number`&&!isNaN(e),E=e=>typeof e==`string`,D=e=>typeof e==`function`,O=e=>E(e)||T(e),k=e=>E(e)||D(e)?e:null,A=(e,t)=>e===!1||T(e)&&e>0?e:t,j=e=>(0,S.isValidElement)(e)||E(e)||D(e)||T(e);function M(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function N({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,S.useRef)(0);return(0,S.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,S.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?M(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),S.createElement(S.Fragment,null,a)}}function P(e,t){return{content:F(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function F(e,t,n=!1){return(0,S.isValidElement)(e)&&!E(e.type)?(0,S.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):D(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function I({closeToast:e,theme:t,ariaLabel:n=`close`}){return S.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},S.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},S.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function L({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:o,progress:s,rtl:c,isIn:l,theme:u}){let d=i||o&&s===0,f={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};o&&(f.transform=`scaleX(${s})`);let p=w(`Toastify__progress-bar`,o?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),m=D(a)?a({rtl:c,type:r,defaultClassName:p}):w(p,a),h={[o&&s>=1?`onTransitionEnd`:`onAnimationEnd`]:o&&s<1?null:()=>{l&&n()}};return S.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":d},S.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),S.createElement(`div`,{role:`progressbar`,"aria-hidden":d?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":o?Math.round(s*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:m,style:f,...h}))}var R=1,z=()=>`${R++}`;function B(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(P(e,`removed`)))},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(P(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:n,updateId:o,data:l,staleId:u,delay:p}=t,m=o==null;m&&i++;let g={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:l,isIn:!1,className:k(t.className||s.toastClassName),progressClassName:k(t.progressClassName||s.progressClassName),autoClose:!t.isLoading&&A(t.autoClose,s.autoClose),closeToast(e){let t=c.get(n);t&&(t.removalReason=e,h(n))},deleteToast(){if(c.get(n)!=null){if(c.delete(n),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};g.closeButton=s.closeButton,t.closeButton===!1||j(t.closeButton)?g.closeButton=t.closeButton:t.closeButton===!0&&(g.closeButton=!j(s.closeButton)||s.closeButton);let v={content:e,props:g,staleId:u};s.limit&&s.limit>0&&i>s.limit&&m?a.push(v):T(p)?setTimeout(()=>{_(v)},p):_(v)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var V=new Map,H=[],U=new Set,ee=e=>U.forEach(t=>t(e)),W=()=>V.size>0;function te(){H.forEach(e=>oe(e.content,e.options)),H=[]}var ne=(e,{containerId:t})=>V.get(t||1)?.toasts.get(e);function re(e,t){var n;if(t)return!!((n=V.get(t))!=null&&n.isToastActive(e));let r=!1;return V.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function ie(e){if(!W()){H=H.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||O(e))V.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=V.get(e.containerId);t?t.removeToast(e.id):V.forEach(t=>{t.removeToast(e.id)})}}var ae=(e={})=>{V.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function oe(e,t){j(e)&&(W()||H.push({content:e,options:t}),V.forEach(n=>{n.buildToast(e,t)}))}function se(e){var t;(t=V.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function ce(e,t){V.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function le(e){let t=e.containerId||1;return{subscribe(n){let r=B(t,e,ee);V.set(t,r);let i=r.observe(n);return te(),()=>{i(),V.delete(t)}},setProps(e){var n;(n=V.get(t))==null||n.setProps(e)},getSnapshot(){return V.get(t)?.getSnapshot()}}}function ue(e){return U.add(e),()=>{U.delete(e)}}function de(e){return e&&(E(e.toastId)||T(e.toastId))?e.toastId:z()}function G(e,t){return oe(e,t),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:de(t)}}function q(e){return(t,n)=>G(t,K(e,n))}function J(e,t){return G(e,K(`default`,t))}J.loading=(e,t)=>G(e,K(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function fe(e,{pending:t,error:n,success:r},i){let a;t&&(a=E(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){J.dismiss(a);return}let r={type:e,...o,...i,data:n},s=E(t)?{render:t}:t;return a?J.update(a,{...r,...s}):J(s.render,{...r,...s}),n},c=D(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}J.promise=fe,J.success=q(`success`),J.info=q(`info`),J.error=q(`error`),J.warning=q(`warning`),J.warn=J.warning,J.dark=(e,t)=>G(e,K(`default`,{theme:`dark`,...t}));function pe(e){ie(e)}J.dismiss=pe,J.clearWaitingQueue=ae,J.isActive=re,J.update=(e,t={})=>{let n=ne(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:z()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,G(o,a)}},J.done=e=>{J.update(e,{progress:1})},J.onChange=ue,J.play=e=>ce(!0,e),J.pause=e=>ce(!1,e);function me(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,S.useRef)(le(e)).current;r(e);let i=(0,S.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:re,count:i?.length}}function he(e){let[t,n]=(0,S.useState)(!1),[r,i]=(0,S.useState)(!1),a=(0,S.useRef)(null),o=(0,S.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;se({id:e.toastId,containerId:e.containerId,fn:n}),(0,S.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||_(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,_)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,_)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){v();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?_():g()}function g(){n(!0)}function _(){n(!1)}function v(){o.didMove=!1,document.addEventListener(`pointermove`,b),document.addEventListener(`pointerup`,x)}function y(){document.removeEventListener(`pointermove`,b),document.removeEventListener(`pointerup`,x)}function b(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&_(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function x(){y();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=_,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var ge=typeof window<`u`?S.useLayoutEffect:S.useEffect,Y=({theme:e,type:t,isLoading:n,...r})=>S.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function _e(e){return S.createElement(Y,{...e},S.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function ve(e){return S.createElement(Y,{...e},S.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function ye(e){return S.createElement(Y,{...e},S.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function be(e){return S.createElement(Y,{...e},S.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function xe(){return S.createElement(`div`,{className:`Toastify__spinner`})}var X={info:ve,warning:_e,success:ye,error:be,spinner:xe},Se=e=>e in X;function Ce({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(D(r)?i=r({...a,isLoading:n}):(0,S.isValidElement)(r)?i=(0,S.cloneElement)(r,a):n?i=X.spinner():Se(t)&&(i=X[t](a))),i}var we=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=he(e),{closeButton:o,children:s,autoClose:c,onClick:l,type:u,hideProgressBar:d,closeToast:f,transition:p,position:m,className:h,style:g,progressClassName:_,updateId:v,role:y,progress:b,rtl:x,toastId:C,deleteToast:T,isIn:E,isLoading:O,closeOnClick:k,theme:A,ariaLabel:j}=e,M=w(`Toastify__toast`,`Toastify__toast-theme--${A}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":k}),N=D(h)?h({rtl:x,position:m,type:u,defaultClassName:M}):w(M,h),P=Ce(e),R=!!b||!c,z={closeToast:f,type:u,theme:A},B=null;return o===!1||(B=D(o)?o(z):(0,S.isValidElement)(o)?(0,S.cloneElement)(o,z):I(z)),S.createElement(p,{isIn:E,done:T,position:m,preventExitTransition:n,nodeRef:r,playToast:a},S.createElement(`div`,{id:C,tabIndex:0,onClick:l,"data-in":E,className:N,...i,style:g,ref:r,...E&&{role:y,"aria-label":j}},P!=null&&S.createElement(`div`,{className:w(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!O})},P),F(s,e,!t),B,!e.customProgressBar&&S.createElement(L,{...v&&!R?{key:`p-${v}`}:{},rtl:x,theme:A,delay:c,isRunning:t,isIn:E,closeToast:f,hide:d,type:u,className:_,controlledProgress:R,progress:b||0})))},Z=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Te=N(Z(`bounce`,!0));N(Z(`slide`,!0)),N(Z(`zoom`)),N(Z(`flip`));var Ee={position:`top-right`,transition:Te,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function De(e){let t={...Ee,...e},n=e.stacked,[r,i]=(0,S.useState)(!0),a=(0,S.useRef)(null),{getToastToRender:o,isToastActive:s,count:c}=me(t),{className:l,style:u,rtl:d,containerId:f,hotKeys:p}=t;function m(e){let t=w(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return D(l)?l({position:e,rtl:d,defaultClassName:t}):w(t,k(l))}function h(){n&&(i(!0),J.play())}return ge(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t),c=Math.max(.5,1-(r?o:0));a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${c}`),i+=a.offsetHeight,o+=.025})}},[r,c,n]),(0,S.useEffect)(()=>{function e(e){var t;let n=a.current;p(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),J.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p]),S.createElement(`section`,{ref:a,className:`Toastify`,id:f,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:h,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},o((e,t)=>{let r=t.length?{...u}:{...u,pointerEvents:`none`};return S.createElement(`div`,{tabIndex:-1,className:m(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>S.createElement(we,{...t,stacked:n,collapseAll:h,isIn:s(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var Oe=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Q=new Map,ke=(e,t)=>{ge(()=>{if(!e||typeof document>`u`)return;let n=document,r=Q.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),Q.set(n,i)},[t])};function Ae(e){return ke(Oe,e.nonce),S.createElement(De,{...e})}var $=u();function je(e){if(!e)return null;let t=e.match(/[?&]v=([^&]+)/);if(t)return t[1];let n=e.match(/youtu\.be\/([^?&]+)/);if(n)return n[1];let r=e.match(/youtube\.com\/shorts\/([^?&]+)/);if(r)return r[1];let i=e.match(/youtube\.com\/embed\/([^?&]+)/);return i?i[1]:null}function Me(e){let t=je(e);return t?`https://img.youtube.com/vi/${t}/maxresdefault.jpg`:`https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600`}function Ne({project:e,onClose:t}){let n=je(e.videoLink);return(0,S.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[t]),(0,$.jsxs)(m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8`,onClick:t,children:[(0,$.jsx)(`div`,{className:`absolute inset-0 bg-black/85 backdrop-blur-md`}),(0,$.jsxs)(`button`,{onClick:t,className:`fixed top-6 right-6 z-[110] flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white hover:scale-105 shadow-lg border border-white/10`,"aria-label":`Close modal`,children:[(0,$.jsx)(_,{className:`h-4 w-4`}),(0,$.jsx)(`span`,{children:`Close`}),(0,$.jsx)(`span`,{className:`text-xs text-white/40 border-l border-white/20 pl-2`,children:`ESC`})]}),(0,$.jsx)(m.div,{initial:{opacity:0,scale:.92,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92,y:20},transition:{duration:.4,ease:[.22,1,.36,1]},className:`relative z-10 w-full max-w-4xl`,onClick:e=>e.stopPropagation(),children:(0,$.jsxs)(`div`,{className:`overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl`,children:[(0,$.jsx)(`div`,{className:`relative aspect-video w-full`,children:n?(0,$.jsx)(`iframe`,{src:`https://www.youtube.com/embed/${n}?autoplay=1&rel=0&modestbranding=1`,title:e.videoTitle,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,className:`absolute inset-0 h-full w-full`}):(0,$.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center text-white/60`,children:(0,$.jsx)(`p`,{children:`Video not available`})})}),(0,$.jsx)(`div`,{className:`flex items-start justify-between gap-4 border-t border-white/10 bg-black/60 p-5`,children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2`,children:e.categoryName}),(0,$.jsx)(`h3`,{className:`font-display text-lg font-semibold text-white`,children:e.videoTitle}),(0,$.jsx)(`p`,{className:`mt-1 text-sm text-white/60`,children:e.videoDescription})]})})]})})]})}function Pe(){let n=a(),{categories:r}=l.useLoaderData(),[u,d]=(0,S.useState)(``),[m,C]=(0,S.useState)(null),[w,T]=(0,S.useState)(``),[E,D]=(0,S.useState)(``),[O,k]=(0,S.useState)(``),[A,j]=(0,S.useState)(``),[M,N]=(0,S.useState)(``),[P,F]=(0,S.useState)(null),[I,L]=(0,S.useState)(null),R=async e=>{e.preventDefault();try{await s({data:{name:u}}),J.success(`Category created successfully!`),d(``),n.invalidate()}catch(e){J.error(e.message||`Failed to create category`)}},z=async e=>{if(!w.trim()){J.warn(`Category name cannot be empty`);return}try{await c({data:{id:e,name:w}}),J.success(`Category updated successfully!`),C(null),T(``),n.invalidate()}catch(e){J.error(e.message||`Failed to update category`)}},B=async(t,r)=>{if(window.confirm(`Are you sure you want to delete the category "${r}"? All projects under it will be affected.`))try{await e({data:{id:t}}),J.success(`Category deleted successfully!`),n.invalidate()}catch(e){J.error(e.message||`Failed to delete category`)}},V=async e=>{e.preventDefault();try{P?(await t({data:{id:P,videoLink:E,videoTitle:O,videoDescription:A,categoryId:M}}),J.success(`Project updated successfully!`),F(null)):(await i({data:{videoLink:E,videoTitle:O,videoDescription:A,categoryId:M}}),J.success(`Project created successfully!`)),D(``),k(``),j(``),N(``),n.invalidate()}catch(e){J.error(e.message||`Failed to save project`)}},H=e=>{F(e.id),D(e.videoLink),k(e.videoTitle),j(e.videoDescription),N(e.categoryId),document.getElementById(`project-form`)?.scrollIntoView({behavior:`smooth`})},U=()=>{F(null),D(``),k(``),j(``),N(``)},ee=async(e,t)=>{if(window.confirm(`Are you sure you want to delete the project "${t}"?`))try{await o({data:{id:e}}),J.success(`Project deleted successfully!`),n.invalidate()}catch(e){J.error(e.message||`Failed to delete project`)}},W=Array.isArray(r)?r.flatMap(e=>e.projects.map(t=>({...t,categoryName:e.name}))):[];return(0,$.jsxs)(`div`,{className:`p-8 max-w-5xl mx-auto space-y-12`,children:[(0,$.jsx)(Ae,{position:`top-right`,autoClose:3e3,theme:`dark`}),(0,$.jsxs)(`div`,{className:`flex items-center justify-between border-b border-foreground/10 pb-5`,children:[(0,$.jsx)(`h1`,{className:`text-3xl font-bold tracking-tight`,children:`Admin Dashboard`}),(0,$.jsx)(`a`,{href:`/`,className:`text-sm text-muted-foreground hover:text-foreground transition-colors`,children:`View Website →`})]}),(0,$.jsxs)(`section`,{className:`bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2 text-xl font-semibold`,children:[(0,$.jsx)(v,{className:`h-5 w-5 text-[color:var(--gold)]`}),(0,$.jsx)(`h2`,{children:`Manage Categories`})]}),(0,$.jsxs)(`form`,{onSubmit:R,className:`flex gap-4`,children:[(0,$.jsx)(`input`,{type:`text`,placeholder:`New Category Name (e.g. Commercials)`,className:`flex-1 bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm`,value:u,onChange:e=>d(e.target.value),required:!0}),(0,$.jsxs)(`button`,{type:`submit`,className:`bg-[color:var(--gold)] text-primary px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 hover:brightness-95 transition-all`,children:[(0,$.jsx)(b,{className:`h-4 w-4`}),` Add Category`]})]}),(0,$.jsx)(`div`,{className:`border border-foreground/10 rounded-xl overflow-hidden divide-y divide-foreground/10`,children:Array.isArray(r)&&r.length>0?r.map(e=>(0,$.jsxs)(`div`,{className:`flex items-center justify-between p-4 bg-background/40`,children:[m===e.id?(0,$.jsxs)(`div`,{className:`flex items-center gap-2 flex-1 mr-4`,children:[(0,$.jsx)(`input`,{type:`text`,className:`flex-1 max-w-md bg-background border border-foreground/20 rounded-lg px-3 py-1.5 text-sm`,value:w,onChange:e=>T(e.target.value),required:!0}),(0,$.jsx)(`button`,{onClick:()=>z(e.id),className:`p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors`,title:`Save`,children:(0,$.jsx)(f,{className:`h-4 w-4`})}),(0,$.jsx)(`button`,{onClick:()=>C(null),className:`p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors`,title:`Cancel`,children:(0,$.jsx)(_,{className:`h-4 w-4`})})]}):(0,$.jsxs)(`span`,{className:`font-medium text-sm`,children:[e.name,` (`,e.projects?.length||0,` projects)`]}),m!==e.id&&(0,$.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,$.jsx)(`button`,{onClick:()=>{C(e.id),T(e.name)},className:`p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors`,title:`Rename`,children:(0,$.jsx)(y,{className:`h-4 w-4`})}),(0,$.jsx)(`button`,{onClick:()=>B(e.id,e.name),className:`p-2 text-red-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors`,title:`Delete`,children:(0,$.jsx)(x,{className:`h-4 w-4`})})]})]},e.id)):(0,$.jsx)(`div`,{className:`p-4 text-center text-sm text-muted-foreground`,children:`No categories created yet.`})})]}),(0,$.jsxs)(`section`,{className:`bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2 text-xl font-semibold`,children:[(0,$.jsx)(h,{className:`h-5 w-5 text-[color:var(--gold)]`}),(0,$.jsx)(`h2`,{children:`Manage Video Projects`})]}),(0,$.jsxs)(`div`,{id:`project-form`,className:`bg-background/40 p-5 rounded-xl border border-foreground/5 space-y-4`,children:[(0,$.jsx)(`h3`,{className:`text-sm font-semibold text-muted-foreground uppercase tracking-wider`,children:P?`Edit Project`:`Add Project`}),(0,$.jsxs)(`form`,{onSubmit:V,className:`space-y-4`,children:[(0,$.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-4`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{className:`block text-xs mb-1.5 font-medium text-muted-foreground`,children:`Category`}),(0,$.jsxs)(`select`,{className:`w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm`,value:M,onChange:e=>N(e.target.value),required:!0,children:[(0,$.jsx)(`option`,{value:``,children:`Select a category`}),Array.isArray(r)&&r.map(e=>(0,$.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{className:`block text-xs mb-1.5 font-medium text-muted-foreground`,children:`YouTube Video Link`}),(0,$.jsx)(`input`,{type:`url`,placeholder:`https://www.youtube.com/watch?v=...`,className:`w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm`,value:E,onChange:e=>D(e.target.value),required:!0})]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{className:`block text-xs mb-1.5 font-medium text-muted-foreground`,children:`Video Title`}),(0,$.jsx)(`input`,{type:`text`,placeholder:`Cinematic Project Title`,className:`w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm`,value:O,onChange:e=>k(e.target.value),required:!0})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{className:`block text-xs mb-1.5 font-medium text-muted-foreground`,children:`Video Description`}),(0,$.jsx)(`textarea`,{placeholder:`Brief description of the editing, grading, or production details.`,className:`w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm h-24 resize-none`,value:A,onChange:e=>j(e.target.value),required:!0})]}),(0,$.jsxs)(`div`,{className:`flex gap-2`,children:[(0,$.jsx)(`button`,{type:`submit`,className:`bg-[color:var(--gold)] text-primary px-6 py-2.5 rounded-xl font-medium text-sm hover:brightness-95 transition-all`,children:P?`Save Changes`:`Create Project`}),P&&(0,$.jsx)(`button`,{type:`button`,onClick:U,className:`border border-foreground/15 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground/5 transition-all`,children:`Cancel`})]})]})]}),(0,$.jsxs)(`div`,{className:`space-y-3`,children:[(0,$.jsx)(`h3`,{className:`text-sm font-semibold text-muted-foreground uppercase tracking-wider`,children:`Existing Projects`}),(0,$.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:W.length>0?W.map(e=>(0,$.jsxs)(`div`,{className:`bg-background/40 p-4 rounded-xl border border-foreground/10 flex flex-col justify-between overflow-hidden`,children:[(0,$.jsxs)(`div`,{className:`space-y-3`,children:[(0,$.jsxs)(`div`,{onClick:()=>L(e),className:`group/thumb relative aspect-video w-full overflow-hidden rounded-lg bg-black cursor-pointer border border-foreground/10 shadow-sm`,children:[(0,$.jsx)(`img`,{src:Me(e.videoLink),alt:e.videoTitle,className:`h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105`}),(0,$.jsx)(`div`,{className:`absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300`,children:(0,$.jsx)(`div`,{className:`h-10 w-10 bg-[color:var(--gold)] text-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/thumb:scale-110`,children:(0,$.jsx)(p,{className:`h-4 w-4 fill-current`})})}),(0,$.jsxs)(`div`,{className:`absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1 font-medium`,children:[(0,$.jsx)(p,{className:`h-2.5 w-2.5 fill-current`}),` Play Video`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2`,children:e.categoryName}),(0,$.jsx)(`h4`,{className:`font-semibold text-base mb-1`,children:e.videoTitle}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground line-clamp-2 mb-2`,children:e.videoDescription}),(0,$.jsx)(`a`,{href:e.videoLink,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs text-[color:var(--gold)] hover:underline break-all`,children:e.videoLink})]})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-2 mt-4 border-t border-foreground/5 pt-3 justify-end`,children:[(0,$.jsxs)(`button`,{onClick:()=>H(e),className:`px-3 py-1.5 text-xs border border-foreground/10 hover:bg-foreground/5 rounded-lg flex items-center gap-1.5 transition-all`,children:[(0,$.jsx)(y,{className:`h-3.5 w-3.5`}),` Edit`]}),(0,$.jsxs)(`button`,{onClick:()=>ee(e.id,e.videoTitle),className:`px-3 py-1.5 text-xs border border-red-500/20 text-red-400 hover:bg-red-500/10 rounded-lg flex items-center gap-1.5 transition-all`,children:[(0,$.jsx)(x,{className:`h-3.5 w-3.5`}),` Delete`]})]})]},e.id)):(0,$.jsx)(`div`,{className:`col-span-full border border-dashed border-foreground/10 rounded-xl p-8 text-center text-sm text-muted-foreground`,children:`No video projects created yet. Use the form above to add one.`})})]})]}),(0,$.jsx)(g,{children:I&&(0,$.jsx)(Ne,{project:I,onClose:()=>L(null)})})]})}export{Pe as component};