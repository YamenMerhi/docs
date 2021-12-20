"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Introduction",sidebar_position:5.1},c="NFT 2.0",l={unversionedId:"standards/nft-2.0/introduction",id:"standards/nft-2.0/introduction",isDocsHomePage:!1,title:"NFT 2.0",description:"NFT2.0 is a collective name for the new token standards LSP7-DigitalAsset and LSP8-IdentifiableDigitalAsset, those replace ERC20 and ERC721, which you would usually use on Ethereum. We have LSP7 and LSP8 implementations that are backwards compatible to ERC20 and ERC721, but we highly recommend using the native ones.",source:"@site/docs/standards/nft-2.0/introduction.md",sourceDirName:"standards/nft-2.0",slug:"/standards/nft-2.0/introduction",permalink:"/standards/nft-2.0/introduction",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/nft-2.0/introduction.md",tags:[],version:"current",sidebarPosition:5.1,frontMatter:{sidebar_label:"Introduction",sidebar_position:5.1},sidebar:"standardsSidebar",previous:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/universal-profile/Universal-Receiver-Delegate"},next:{title:"LSP7 - Digital Asset",permalink:"/standards/nft-2.0/LSP7-Digital-Asset"}},u=[{value:"References",id:"references",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nft-20"},"NFT 2.0"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"This section is a work in progress.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"NFT2.0 is a collective name for the new token standards ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7-DigitalAsset")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LSP8-IdentifiableDigitalAsset"),", those replace ERC20 and ERC721, which you would usually use on Ethereum. We have ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/main/contracts"},"LSP7 and LSP8 implementations that are backwards compatible to ERC20 and ERC721"),", but we highly recommend using the native ones."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-4-DigitalCertificate.md"},"LUKSO Standards Proposals: LSP4 - Digital Certificate (Standard Specification, GitHub)"))))}p.isMDXComponent=!0}}]);