import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as m}from"./index.SSXOyoI7.js";import{u as S}from"./use-toast.CK2mpur1.js";import{a as C}from"./http.BfNEAXh_.js";import{u as P,A}from"./use-debounce.Drq6oaS6.js";import{u as R}from"./use-outside-click.BWzraQDw.js";import{C as I}from"./chevron-down.DomMxrEq.js";import{C as E}from"./check.Bz-udI6N.js";import{g as M,s as L,d as x}from"./browser.DS5mYzWA.js";import{c as w}from"./classname.B_pfcvI6.js";import{E as T}from"./ellipsis.CgkBCq1J.js";import{c as f}from"./createLucideIcon.BBd35SSe.js";import{M as q}from"./map.S6mQRSrY.js";import{g as B}from"./date.CKNRH15o.js";import{S as F}from"./Spinner.B1Yt5gOc.js";import"./toast.BGQI3kl5.js";import"./index.CEvxOxeV.js";import"./jwt.DjKu0S3o.js";import"./badge-check.DANzPZrD.js";import"./bundle-mjs.CpAuaXBl.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=f("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=f("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=f("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),v=[{label:"Most Viewed",value:"viewCount"},{label:"Newest",value:"createdAt"},{label:"Oldest",value:"-createdAt"}];function D(o){const{sortBy:s,onSortChange:l}=o,[t,n]=m.useState(!1),a=m.useRef(null),i=v.find(r=>r.value===s);return R(a,()=>{n(!1)}),e.jsxs("div",{className:"min-auto relative flex flex-shrink-0 sm:min-w-[140px]",ref:a,children:[e.jsxs("button",{className:"py-15 flex w-full items-center justify-between gap-2 rounded-md border px-2 text-sm",onClick:()=>n(!t),children:[e.jsx("span",{children:i?.label}),e.jsx("span",{children:e.jsx(I,{className:"ml-4 h-3.5 w-3.5"})})]}),t&&e.jsx("div",{className:"absolute right-0 top-10 z-10 min-w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg",children:v.map(r=>e.jsxs("button",{className:"flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100",onClick:()=>{l(r.value),n(!1)},children:[e.jsx("span",{children:r.label}),r.value===s&&e.jsx(E,{className:"ml-auto h-4 w-4"})]},r.value))})]})}function O(o,s,l){return m.useMemo(()=>{const t=[],n=Math.floor(l/2),a=Math.max(1,o-n),i=Math.min(s,o+n);a>1&&t.push(1),a>2&&t.push("more");for(let r=a;r<=i;r++)t.push(r);return i<s-1&&t.push("more"),i<s&&t.push(s),t},[o,s,l])}const V=Intl.NumberFormat("en-US",{useGrouping:!0});function h(o){return V.format(o)}function $(o){const{variant:s="default",onPageChange:l,totalCount:t,totalPages:n,currPage:a,perPage:i,isDisabled:r=!1}=o;if(!n||n===1)return null;const u=O(a,n,5);return e.jsxs("div",{className:w("flex items-center",{"justify-between":s==="default","justify-start":s==="minimal"}),children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium",children:[e.jsx("button",{onClick:()=>{l(a-1)},disabled:a===1||r,className:"rounded-md border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",children:"←"}),s==="default"&&e.jsx(e.Fragment,{children:u.map((d,p)=>d==="more"?e.jsx("span",{className:"hidden sm:block",children:e.jsx(T,{className:"text-gray-400",size:14})},`page-${d}-${p}`):e.jsx("button",{disabled:r,onClick:()=>{l(d)},className:w("hidden rounded-md border px-2 py-1 hover:bg-gray-100 sm:block",{"border-black text-black":a===d}),children:d},`page-${d}`))}),e.jsx("button",{disabled:a===n||r,className:"rounded-md border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",onClick:()=>{l(a+1)},children:"→"})]}),e.jsxs("span",{className:"ml-2 hidden text-sm font-normal text-gray-500 sm:block",children:["Showing ",h((a-1)*i)," to"," ",h((a-1)*i+i)," of"," ",h(t)," entries"]})]})}function _(){return e.jsx("ul",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",children:new Array(21).fill(0).map((o,s)=>e.jsx("li",{className:"h-[95px] animate-pulse rounded-md border bg-gray-100"},s))})}function G(){return e.jsxs("div",{className:"flex min-h-[250px] flex-col items-center justify-center rounded-xl border px-5 py-3 sm:px-0 sm:py-20",children:[e.jsx(N,{className:"mb-4 h-8 w-8 opacity-10 sm:h-14 sm:w-14"}),e.jsx("h2",{className:"mb-1 text-lg font-semibold sm:text-xl",children:"No Roadmaps Found"}),e.jsx("p",{className:"mb-3 text-balance text-center text-xs text-gray-800 sm:text-sm",children:"Try searching for something else or create a new roadmap with AI."}),e.jsxs("div",{className:"flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5",children:[e.jsxs("a",{href:"/ai",className:"flex w-full items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white sm:w-auto sm:text-sm",children:[e.jsx(N,{className:"h-4 w-4"}),"Create one with AI"]}),e.jsxs("a",{href:"/roadmaps",className:"flex w-full items-center gap-1.5 rounded-md bg-yellow-400 px-3 py-1.5 text-xs text-black hover:bg-yellow-500 sm:w-auto sm:text-sm",children:[e.jsx(q,{className:"h-4 w-4"}),"Visit Official Roadmaps"]})]})]})}function H(o){const{response:s}=o;if(!s)return null;const l=s.data||[];return e.jsx("ul",{className:"mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",children:l.map(t=>{const n=`/ai?id=${t._id}`;return e.jsxs("a",{href:n,className:"flex min-h-[95px] flex-col rounded-md border transition-colors hover:bg-gray-100",target:"_blank",children:[e.jsx("h2",{className:"flex-grow px-2.5 py-2.5 text-base font-medium leading-tight",children:t.title}),e.jsxs("div",{className:"flex items-center justify-between gap-2 px-2.5 py-2",children:[e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-400",children:[e.jsx(z,{size:15,className:"inline-block"}),Intl.NumberFormat("en-US",{notation:"compact"}).format(t.viewCount)," ","views"]}),e.jsx("span",{className:"flex items-center gap-1.5 text-xs text-gray-400",children:B(String(t?.createdAt))})]})]},t._id)})})}function W(o){const{onSubmit:s,isLoading:l=!1,total:t,value:n}=o,[a,i]=m.useState(n),r=P(a,500);return m.useEffect(()=>{i(n)},[n]),m.useEffect(()=>{r&&r.length<3||r!==n&&s(r)},[r]),e.jsxs("div",{className:"relative flex w-full items-center gap-3",children:[e.jsxs("div",{className:"relative flex w-full max-w-[310px] items-center",children:[e.jsx("label",{className:"absolute left-3 flex h-full items-center text-gray-500",htmlFor:"search",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx("input",{id:"search",name:"search",type:"text",placeholder:"Type 3 or more characters to search...",className:"w-full rounded-md border border-gray-200 px-3 py-2 pl-9 text-sm transition-colors focus:border-black focus:outline-none",value:a,onChange:u=>i(u.target.value)}),l&&e.jsx("span",{className:"absolute right-3 top-0 flex h-full items-center text-gray-500",children:e.jsx(F,{isDualRing:!1,className:"h-3 w-3"})})]}),t>0&&e.jsxs("p",{className:"flex-shrink-0 text-sm text-gray-500 hidden sm:block",children:[Intl.NumberFormat("en-US",{notation:"compact"}).format(t)," ","results found"]})]})}function xe(){const o=S(),[s,l]=m.useState({searchTerm:"",sortBy:"createdAt",currentPage:0});m.useEffect(()=>{const c=M();l({searchTerm:c.q||"",sortBy:c.s||"createdAt",currentPage:+(c.p||"1")})},[]),m.useEffect(()=>{n(!0),s.currentPage&&(s.currentPage!==1||s.searchTerm!==""||s.sortBy!=="createdAt"?L({q:s.searchTerm,s:s.sortBy,p:String(s.currentPage)}):(x("q"),x("s"),x("p")),r(s.currentPage,s.searchTerm,s.sortBy).finally(()=>{n(!1)}))},[s]);const[t,n]=m.useState(!0),[a,i]=m.useState(null),r=async(c=1,g="",b="createdAt")=>{const{response:y,error:j}=await C("https://api.roadmap.sh/v1-list-ai-roadmaps",{currPage:c,...g&&{term:g},...b&&{sortBy:b}});if(j||!y){o.error(j?.message||"Something went wrong");return}i(y)},u=a?.data||[],d=t&&e.jsx(_,{}),p=!t&&u.length===0&&e.jsx(G,{}),k=!t&&u.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(H,{response:a}),e.jsx($,{currPage:a?.currPage||1,totalPages:a?.totalPages||1,perPage:a?.perPage||0,isDisabled:t,totalCount:a?.totalCount||0,onPageChange:c=>{l({...s,currentPage:c})}})]});return e.jsxs("section",{className:"container mx-auto py-3 sm:py-6",children:[e.jsx(A,{isListing:!0}),e.jsxs("div",{className:"my-3.5 flex items-stretch justify-between gap-2.5",children:[e.jsx(W,{total:a?.totalCount||0,isLoading:t,value:s.searchTerm,onSubmit:c=>{l({...s,searchTerm:c,currentPage:1})}}),e.jsx(D,{sortBy:s.sortBy,onSortChange:c=>{l({...s,sortBy:c,currentPage:1})}})]}),d,p,k]})}export{xe as ExploreAIRoadmap};