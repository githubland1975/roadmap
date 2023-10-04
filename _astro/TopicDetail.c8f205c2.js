import{j as e}from"./jsx-runtime.6940b965.js";import{r as s}from"./index.070054a4.js";import{C as U}from"./close.bb7a0ac2.js";import{S as z}from"./spinner.6a5ba5e9.js";import{u as L}from"./use-keydown.bb1f91bb.js";import{u as B}from"./use-outside-click.d7ce4a3d.js";import{h as Y,a as Z}from"./http.387f5009.js";import{i as G}from"./jwt.ab9b7b25.js";import{g as ee,u as _,a as O,b as K,i as te}from"./resource-progress.9335d95d.js";import{p as q,s as se}from"./page.c1a8a472.js";import{s as P}from"./popup.a359f713.js";import{u as R}from"./use-toast.fb52de5d.js";import{m as ne}from"./markdown.9aebbb7a.js";import{c as re}from"./classname.585fc13a.js";import{g as oe}from"./browser.6245b9a5.js";import{c as Q}from"./createLucideIcon.3c9fdece.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function ie(h){s.useEffect(()=>{function n(l){const{resourceType:u,resourceId:d,topicId:a,isCustomResource:m=!1}=l.detail;h({resourceType:u,resourceId:d,topicId:a,isCustomResource:m})}return window.addEventListener("roadmap.topic.click",n),window.addEventListener("best-practice.topic.click",n),window.addEventListener("roadmap.node.click",n),()=>{window.removeEventListener("roadmap.topic.click",n),window.removeEventListener("best-practice.topic.click",n),window.removeEventListener("roadmap.node.click",n)}},[])}function le(h){s.useEffect(()=>{function n(l){const{resourceType:u,resourceId:d,topicId:a}=l.detail;h({resourceType:u,resourceId:d,topicId:a})}return window.addEventListener("roadmap.topic.toggle",n),window.addEventListener("best-practice.topic.toggle",n),()=>{window.removeEventListener("best-practice.topic.toggle",n)}},[])}const ae={src:"/_astro/down.db2d1800.svg",width:24,height:24,format:"svg"},T={done:"bg-green-500",learning:"bg-yellow-500",pending:"bg-gray-300",skipped:"bg-black",removed:""};function ce(h){const{topicId:n,resourceId:l,resourceType:u,onClose:d}=h,a=R(),[m,p]=s.useState(!0),[t,o]=s.useState("pending"),[b,r]=s.useState(!1),x=s.useRef(null);B(x,()=>{r(!1)});const g=s.useMemo(()=>!G(),[]);s.useEffect(()=>{!n||!l||!u||(p(!0),ee({topicId:n,resourceId:l,resourceType:u}).then(j=>{p(!1),o(j)}).catch(console.error))},[n,l,u]),L("d",()=>{if(t==="done"){d();return}i("done")},[t]),L("l",()=>{if(t==="learning"){d();return}i("learning")},[t]),L("s",()=>{if(t==="skipped"){d();return}i("skipped")},[t]),L("r",()=>{if(console.log(t),t==="pending"){d();return}i("pending")},[t]);const i=j=>{if(g){d(),P();return}p(!0),_({topicId:n,resourceId:l,resourceType:u},j).then(()=>{o(j),d(),O(n,j),K()}).catch(C=>{a.error(C.message||"Error updating progress"),console.error(C)}).finally(()=>{p(!1)})},N=["pending","learning","done"].includes(t),k=["skipped","pending","learning"].includes(t),f=["done","skipped","pending"].includes(t),I=["skipped","done","learning"].includes(t);return m?e.jsxs("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e.jsx("img",{alt:"Check",className:"h-4 w-4 animate-spin",src:z.src}),e.jsx("span",{className:"ml-2",children:"Updating Status.."})]}):e.jsxs("div",{className:"relative inline-flex rounded-md border border-gray-300",children:[e.jsxs("span",{className:"inline-flex cursor-default items-center  p-1 px-2 text-sm text-black",children:[e.jsx("span",{className:"flex h-2 w-2",children:e.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${T[t]}`})}),e.jsx("span",{className:"ml-2 capitalize",children:t==="learning"?"In Progress":t})]}),e.jsxs("button",{className:"inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",onClick:()=>r(!0),children:[e.jsx("span",{className:"mr-0.5",children:"Update Status"}),e.jsx("img",{alt:"Check",className:"h-4 w-4",src:ae.src})]}),b&&e.jsxs("div",{className:"absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",ref:x,children:[k&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("done"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.done}`}),"Done"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"D"})]}),f&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("learning"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.learning}`}),"In Progress"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"L"})]}),I&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("pending"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.pending}`}),"Reset"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"R"})]}),N&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("skipped"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.skipped}`}),"Skip"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"S"})]})]})]})}function de(h){const{isLast:n,totalCount:l,onAdd:u,onRemove:d,onChange:a,id:m,title:p,link:t}=h,o=s.useRef(null),[b,r]=s.useState(""),[x,g]=s.useState(p),[i,N]=s.useState(t);s.useEffect(()=>{o?.current&&o.current.focus()},[]),s.useEffect(()=>{a({id:m,title:x,link:i})},[x,i]);const k=n&&l<5;return e.jsxs("div",{className:"relative mb-3 rounded-md border p-3",children:[e.jsx("p",{className:`mb-1 text-xs uppercase ${b==="title"?"text-black":"text-gray-400"}`,children:"Resource Title"}),e.jsx("input",{ref:o,type:"text",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. Introduction to RESTful APIs",onFocus:()=>r("title"),onBlur:()=>r(""),onChange:f=>g(f.target.value)}),e.jsx("p",{className:`mb-1 mt-3 text-xs uppercase ${b==="link"?"text-black":"text-gray-400"}`,children:"Resource Link"}),e.jsx("input",{type:"url",required:!0,className:"block w-full rounded-md border p-2 text-sm focus:border-gray-400 focus:outline-none",placeholder:"e.g. https://roadmap.sh/guides/some-url",onFocus:()=>r("link"),onBlur:()=>r(""),onChange:f=>N(f.target.value)}),e.jsxs("div",{className:"mb-0 mt-3 flex gap-3",children:[l!==1&&e.jsx("button",{onClick:f=>{f.preventDefault(),d()},className:"rounded-md text-sm font-semibold text-red-500 underline underline-offset-2 hover:text-red-800",children:"- Remove Link"}),k&&e.jsx("button",{onClick:f=>{f.preventDefault(),u()},className:"rounded-md text-sm font-semibold text-gray-600 underline underline-offset-2 hover:text-black",children:"+ Add another Link"})]})]})}function ue(h){const{onClose:n,resourceType:l,resourceId:u,topicId:d}=h,a=R(),[m,p]=s.useState(!1),[t,o]=s.useState([{id:new Date().getTime(),title:"",link:""}]);async function b(r){r.preventDefault(),p(!0);const{response:x,error:g}=await Y("https://api.roadmap.sh/v1-contribute-link",{resourceType:l,resourceId:u,topicId:d,links:t});if(p(!1),!x||g){a.error(g?.message||"Something went wrong. Please try again.");return}n("Thanks for your contribution! We will review it shortly.")}return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 mt-2 rounded-md border bg-gray-100 p-3",children:[e.jsx("h1",{className:"mb-2 text-2xl font-bold",children:"Guidelines"}),e.jsxs("ul",{className:"flex flex-col gap-1 text-sm text-gray-700",children:[e.jsx("li",{children:"Content should only be in English."}),e.jsx("li",{children:"Do not add things you have not evaluated personally."}),e.jsx("li",{children:"It should strictly be relevant to the topic."}),e.jsx("li",{children:"It should not be paid or behind a signup."}),e.jsx("li",{children:"Quality over quantity. Smaller set of quality links is preferred."})]})]}),e.jsxs("form",{onSubmit:b,children:[t.map((r,x)=>e.jsx(de,{id:r.id,title:r.title,link:r.link,isLast:x===t.length-1,totalCount:t.length,onChange:g=>{o(t.map(i=>i.id===r.id?g:i))},onRemove:()=>{o(t.filter(g=>g.id!==r.id))},onAdd:()=>{o([...t,{id:new Date().getTime(),title:"",link:""}])}},r.id)),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{disabled:m,type:"submit",className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-400",children:m?"Please wait ...":"Submit"}),e.jsx("button",{className:"block w-full rounded-md border border-red-500 p-2 text-sm text-red-600 hover:bg-red-600 hover:text-white",onClick:r=>{r.preventDefault(),n()},children:"Cancel"})]})]})]})}const pe=Q("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]),me=Q("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),xe={article:"bg-yellow-200",course:"bg-green-200",opensource:"bg-blue-200",podcast:"bg-purple-200",video:"bg-pink-200",website:"bg-red-200"};function De(h){const{canSubmitContribution:n}=h,[l,u]=s.useState(""),[d,a]=s.useState(!1),[m,p]=s.useState(!1),[t,o]=s.useState(!1),[b,r]=s.useState(""),[x,g]=s.useState(""),[i,N]=s.useState(""),[k,f]=s.useState([]),I=R(),{secret:j}=oe(),C=s.useMemo(()=>!G(),[]),$=s.useRef(null),[D,V]=s.useState(""),[M,W]=s.useState(""),[A,J]=s.useState("roadmap");if(B($,()=>{a(!1),o(!1)}),L("Escape",()=>{a(!1),o(!1)}),le(({topicId:c,resourceType:S,resourceId:w})=>{if(C){P();return}q.set("Updating"),te({topicId:c,resourceId:w,resourceType:S}).then(y=>_({topicId:c,resourceId:w,resourceType:S},y?"pending":"done")).then(({done:y=[]})=>{O(c,y.includes(c)?"done":"pending"),K()}).catch(y=>{I.error(y.message),console.error(y)}).finally(()=>{q.set("")})}),ie(({topicId:c,resourceType:S,resourceId:w,isCustomResource:y})=>{r(""),p(!0),a(!0),se.set(!0),u(""),V(c),J(S),W(w);const F=c.replaceAll(":","/");let H=S==="roadmap"?`/${w}/${F}`:`/best-practices/${w}/${F}`;y&&(H=`https://api.roadmap.sh/v1-get-node-content/${w}/${c}${j?`?secret=${j}`:""}`),Z(H,{},{...!y&&{headers:{Accept:"text/html"}}}).then(({response:v})=>{if(!v){r("Topic not found."),p(!1);return}let E="";y?(f(v?.links||[]),N(v?.title||""),E=ne(v?.description||"",!1)):E=new DOMParser().parseFromString(v,"text/html")?.getElementById("main-content")?.outerHTML||"",p(!1),g(E)}).catch(v=>{r("Something went wrong. Please try again later."),p(!1)})}),!d)return null;const X=x?.length>0||k?.length>0||i;return e.jsxs("div",{className:"relative z-50",children:[e.jsxs("div",{ref:$,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 sm:max-w-[600px] sm:p-6",children:[m&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:z.src,alt:"Loading",className:"h-6 w-6 animate-spin fill-blue-600 text-gray-200 sm:h-12 sm:w-12"})}),!m&&t&&e.jsx(ue,{resourceType:A,resourceId:M,topicId:D,onClose:c=>{c&&u(c),o(!1)}}),!t&&!m&&!b&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(ce,{topicId:D,resourceId:M,resourceType:A,onClose:()=>{a(!1),o(!1)}}),e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{a(!1),o(!1)},children:e.jsx("img",{alt:"Close",className:"h-5 w-5",src:U.src})})]}),X?e.jsxs("div",{className:"prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",children:[i&&e.jsx("h1",{children:i}),e.jsx("div",{id:"topic-content",dangerouslySetInnerHTML:{__html:x}})]}):e.jsxs("div",{className:"flex h-[calc(100%-38px)] flex-col items-center justify-center",children:[e.jsx(me,{className:"h-16 w-16 text-gray-300"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-gray-500",children:"Empty Content"})]}),k.length>0&&e.jsx("ul",{className:"mt-6 space-y-1",children:k.map(c=>e.jsx("li",{children:e.jsxs("a",{href:c.url,target:"_blank",className:"font-medium underline",children:[e.jsx("span",{className:re("mr-2 inline-block rounded px-1.5 py-1 text-xs uppercase no-underline",xe[c.type]),children:c.type.charAt(0).toUpperCase()+c.type.slice(1)}),c.title]})}))}),n&&e.jsxs("div",{className:"mt-8 flex-1 border-t",children:[e.jsxs("p",{className:"mb-2 mt-2 text-sm leading-relaxed text-gray-400",children:["Help others learn by submitting links to learn more about this topic"," "]}),e.jsx("button",{onClick:()=>{if(C){a(!1),P();return}o(!0)},disabled:!!l,className:"block w-full rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",children:l||"Submit a Link"})]})]}),!t&&!m&&b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{a(!1),o(!1)},children:e.jsx("img",{alt:"Close",className:"h-5 w-5",src:U.src})}),e.jsxs("div",{className:"flex h-full flex-col items-center justify-center",children:[e.jsx(pe,{className:"h-16 w-16 text-red-500"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-red-500",children:b})]})]})]}),e.jsx("div",{className:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]})}export{De as TopicDetail};