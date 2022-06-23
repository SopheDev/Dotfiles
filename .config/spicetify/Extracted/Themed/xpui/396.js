"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[396],{88396:(e,n,o)=>{o.r(n),o.d(n,{EPISODE_SPONSORS_SHELF_TESTID:()=>w,EpisodeSponsorsWrapper:()=>j,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>P,default:()=>T});var r=o(67154),s=o.n(r),t=o(59713),i=o.n(t),a=o(67294),p=o.n(a),c=o(1486),d=o(27716);const u=(0,a.lazy)((()=>Promise.all([o.e(814),o.e(258)]).then(o.bind(o,87258))));function f({fetchedEpisodeSponsorsData:e,fireTrackingEvent:n,numberOfSponsorsToDisplay:o,firedViewedEvents:r,version:t,reason:i,uri:f}){const{displayedEpisodeSponsorsData:l}=function({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:n}){return(0,a.useMemo)((()=>({displayedEpisodeSponsorsData:e.slice(0,n)})),[e,n])}({fetchedEpisodeSponsorsData:e,numberOfSponsorsToDisplay:o}),O=(0,d.s4)(),b=(0,a.useMemo)((()=>l.map(((e,o)=>p().createElement(u,s()({key:`${e.metadata.lineitem_id}-${o}`,fireTrackingEvent:n,firedViewedEvents:r,version:t,onClick:async function(){return O.send((0,c.$)({uri:f,reason:i,lineitem_id:l.map((e=>e.metadata.lineitemId)),ui_navigate:l.map((({clickthrough:e},n)=>o===n?e:"")),navigate_to_external_uri:l.map(((e,n)=>o===n))}))}},e))))),[l,n,r,t,i,f,O]);return{displayedEpisodeSponsorsData:l,displayedSponsors:b}}var l=o(69518),O=o.n(l);var b=o(52883);var S=o(18693);function v({firedViewedEvents:e}){var n;const o=(0,a.useRef)();return{firedViewedEvents:o.current=null!==(n=null!=e?e:o.current)&&void 0!==n?n:new Set}}function y(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function E(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?y(Object(o),!0).forEach((function(n){i()(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function m({uri:e,getEpisodeSponsors:n,fireTrackingEvent:o,numberOfSponsorsToDisplay:r,version:s,reason:t}){const{state:i}=(0,b.TH)(),{episodeBase62Id:p}=function({uri:e,episodeBase62Id:n}){return{episodeBase62Id:(0,a.useMemo)((()=>{var o;return n||(null===(o=O().from(e))||void 0===o?void 0:o.getBase62Id())}),[e,n])}}(E(E({},i),{},{uri:e})),{fetchedEpisodeSponsorsData:c}=(0,S.m)(E(E({},i),{},{episodeBase62Id:p,getEpisodeSponsors:n,version:s})),{firedViewedEvents:d}=v(E({},i));return E(E({uri:e,episodeBase62Id:p,fetchedEpisodeSponsorsData:c},f({fetchedEpisodeSponsorsData:c,fireTrackingEvent:o,numberOfSponsorsToDisplay:r,firedViewedEvents:d,version:s,reason:t,uri:e})),{},{firedViewedEvents:d,reason:t})}function D(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function g(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?D(Object(o),!0).forEach((function(n){i()(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}const h=(0,a.lazy)((()=>o.e(479).then(o.bind(o,27479)))),w="episode-sponsors-shelf",P="see-all-episode-sponsors";function j(e){const{numberOfSponsorsToDisplay:n}=function({numberOfSponsorsToDisplay:e=3}){return{numberOfSponsorsToDisplay:e}}(e),o=m(g(g({},e),{},{numberOfSponsorsToDisplay:n}));return o.episodeBase62Id&&o.displayedSponsors.length?p().createElement(a.Suspense,{fallback:!0},p().createElement(h,s()({},e,{numberOfSponsorsToDisplay:n,state:o}))):null}const T=j},18693:(e,n,o)=>{o.d(n,{F:()=>i,m:()=>a});var r=o(67294),s=o(64005),t=o(31604);const i=420;function a({episodeBase62Id:e,getEpisodeSponsors:n,fetchedEpisodeSponsorsData:a=[],version:p}){const[c,d]=(0,r.useState)(a),u=(0,r.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const r=null!=n?n:(await Promise.resolve().then(o.bind(o,11401))).getEpisodeSponsors;d(await r(e,{version:p}))}catch(e){d([])}}),[e,n,p]),f=(0,s.y)(u,i);return(0,r.useEffect)((function(){a.length||f()}),[f,a.length]),(0,t.H)(f),{fetchedEpisodeSponsorsData:c}}},31604:(e,n,o)=>{o.d(n,{H:()=>c});var r=o(67294),s=o(87577),t=o(49207),i=o(40080),a=o(8341),p=o(89952);function c(e){const n=(0,s.W6)(t.oF),o=(0,a.Y)((e=>{var n,o;const r=null!==(n=null==e?void 0:e.item)&&void 0!==n?n:void 0;return(0,p.k6)(r)&&r.isPodcastAd&&null!==(o=r.id)&&void 0!==o?o:void 0})),c=(0,i.D)(o);(0,r.useEffect)((function(){o!==c&&Boolean(o)&&setTimeout(e,n)}),[e,o,c,n])}}}]);
//# sourceMappingURL=396.js.map