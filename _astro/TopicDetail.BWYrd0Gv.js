import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as s}from"./index.SSXOyoI7.js";import{u as N}from"./use-keydown.DCIacX8c.js";import{u as F}from"./use-outside-click.BWzraQDw.js";import{a as re}from"./http.BfNEAXh_.js";import{i as q}from"./jwt.DjKu0S3o.js";import{g as ne,u as z,a as A,b as G,i as oe}from"./resource-progress.CaCjaD4j.js";import{p as H,s as ie}from"./page.C3ddTGlS.js";import{s as _}from"./popup.CdCAhVM2.js";import{u as B}from"./use-toast.CK2mpur1.js";import{S as O}from"./Spinner.B1Yt5gOc.js";import{C as ae}from"./chevron-down.DomMxrEq.js";import{s as le,m as ce}from"./markdown.BDsSah-D.js";import{c as de}from"./classname.B_pfcvI6.js";import{g as pe}from"./browser.z0e42_13.js";import{G as me}from"./GitHubIcon.HAaceZOS.js";import{X as D}from"./x.wVDa2hJ0.js";import{F as ue,B as ge}from"./file-text.De6zITgx.js";import"./roadmap.SDi3zlny.js";import"./index.Bhz7cRIx.js";import"./index.CEvxOxeV.js";import"./toast.BGQI3kl5.js";import"./createLucideIcon.BBd35SSe.js";import"./bundle-mjs.CpAuaXBl.js";function xe(u){s.useEffect(()=>{function r(a){const{resourceType:l,resourceId:o,topicId:p,isCustomResource:b=!1}=a.detail;u({resourceType:l,resourceId:o,topicId:p,isCustomResource:b})}return window.addEventListener("roadmap.topic.click",r),window.addEventListener("best-practice.topic.click",r),window.addEventListener("roadmap.node.click",r),()=>{window.removeEventListener("roadmap.topic.click",r),window.removeEventListener("best-practice.topic.click",r),window.removeEventListener("roadmap.node.click",r)}},[])}function he(u){s.useEffect(()=>{function r(a){const{resourceType:l,resourceId:o,topicId:p}=a.detail;u({resourceType:l,resourceId:o,topicId:p})}return window.addEventListener("roadmap.topic.toggle",r),window.addEventListener("best-practice.topic.toggle",r),()=>{window.removeEventListener("best-practice.topic.toggle",r)}},[])}const v={done:"bg-green-500",learning:"bg-yellow-500",pending:"bg-gray-300",skipped:"bg-black",removed:""};function fe(u){const{topicId:r,resourceId:a,resourceType:l,onClose:o}=u,p=B(),[b,m]=s.useState(!0),[t,x]=s.useState("pending"),[h,y]=s.useState(!1),S=s.useRef(null);F(S,()=>{y(!1)});const j=s.useMemo(()=>!q(),[]);s.useEffect(()=>{!r||!a||!l||(m(!0),ne({topicId:r,resourceId:a,resourceType:l}).then(d=>{m(!1),x(d)}).catch(console.error))},[r,a,l]),N("d",()=>{if(t==="done"){o();return}i("done")},[t]),N("l",()=>{if(t==="learning"){o();return}i("learning")},[t]),N("s",()=>{if(t==="skipped"){o();return}i("skipped")},[t]),N("r",()=>{if(console.log(t),t==="pending"){o();return}i("pending")},[t]);const i=d=>{if(j){o(),_();return}m(!0),z({topicId:r,resourceId:a,resourceType:l},d).then(()=>{x(d),o(),A(r,d),G()}).catch(E=>{p.error(E.message||"Error updating progress"),console.error(E)}).finally(()=>{m(!1)})},T=["pending","learning","done"].includes(t),I=["skipped","pending","learning"].includes(t),w=["done","skipped","pending"].includes(t),P=["skipped","done","learning"].includes(t);return b?e.jsxs("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Updating Status.."})]}):e.jsxs("div",{className:"relative inline-flex rounded-md border border-gray-300",children:[e.jsxs("span",{className:"inline-flex cursor-default items-center  p-1 px-2 text-sm text-black",children:[e.jsx("span",{className:"flex h-2 w-2",children:e.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${v[t]}`})}),e.jsx("span",{className:"ml-2 capitalize",children:t==="learning"?"In Progress":t})]}),e.jsxs("button",{className:"inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",onClick:()=>y(!0),children:[e.jsx("span",{className:"mr-0.5",children:"Update Status"}),e.jsx(ae,{className:"h-4 w-4"})]}),h&&e.jsxs("div",{className:"absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",ref:S,children:[I&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("done"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${v.done}`}),"Done"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"D"})]}),w&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("learning"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${v.learning}`}),"In Progress"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"L"})]}),P&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("pending"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${v.pending}`}),"Reset"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"R"})]}),T&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>i("skipped"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${v.skipped}`}),"Skip"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"S"})]})]})]})}const be={article:"bg-yellow-200",course:"bg-green-200",opensource:"bg-blue-200",podcast:"bg-purple-200",video:"bg-pink-200",website:"bg-red-200"};function Be(u){const{canSubmitContribution:r,isEmbed:a=!1}=u,[l,o]=s.useState(!1),[p,b]=s.useState(""),[m,t]=s.useState(!1),[x,h]=s.useState(!1),[y,S]=s.useState(!1),[j,i]=s.useState(""),[T,I]=s.useState(""),[w,P]=s.useState(""),[d,E]=s.useState([]),K=B(),{secret:U}=pe(),X=s.useMemo(()=>!q(),[]),$=s.useRef(null),[J,Q]=s.useState(""),[V,W]=s.useState(""),[Y,Z]=s.useState("roadmap");if(F($,()=>{t(!1)}),N("Escape",()=>{t(!1)}),he(({topicId:n,resourceType:k,resourceId:g})=>{if(X){_();return}H.set("Updating"),oe({topicId:n,resourceId:g,resourceType:k}).then(c=>z({topicId:n,resourceId:g,resourceType:k},c?"pending":"done")).then(({done:c=[]})=>{A(n,c.includes(n)?"done":"pending"),G()}).catch(c=>{K.error(c.message),console.error(c)}).finally(()=>{H.set("")})}),xe(({topicId:n,resourceType:k,resourceId:g,isCustomResource:c})=>{i(""),h(!0),t(!0),ie.set(!0),Q(n),Z(k),W(g);const M=n.replaceAll(":","/");let R=k==="roadmap"?`/${g}/${M}`:`/best-practices/${g}/${M}`;c&&(R=`https://api.roadmap.sh/v1-get-node-content/${g}/${n}${U?`?secret=${U}`:""}`),re(R,{},{...!c&&{headers:{Accept:"text/html"}}}).then(({response:f})=>{if(!f){i("Topic not found."),h(!1);return}let C="";if(c){E(f?.links||[]),P(f?.title||"");const L=le(f.description||"");C=ce(L,!1)}else{C=f;const L=new DOMParser().parseFromString(C,"text/html"),te=L.querySelectorAll("a"),se=L.querySelector("[data-github-url]")?.dataset?.githubUrl||"";b(se),o(te.length>=3)}h(!1),I(C)}).catch(f=>{i("Something went wrong. Please try again later."),h(!1)})}),s.useEffect(()=>{m&&$?.current?.focus()},[m]),!m)return null;const ee=T?.length>0||d?.length>0||w;return e.jsxs("div",{className:"relative z-50",children:[e.jsxs("div",{ref:$,tabIndex:0,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6",children:[x&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(O,{outerFill:"#d1d5db",className:"h-6 w-6 sm:h-12 sm:w-12",innerFill:"#2563eb"})}),!y&&!x&&!j&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-2",children:[!a&&e.jsx(fe,{topicId:J,resourceId:V,resourceType:Y,onClose:()=>{t(!1)}}),e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{t(!1)},children:e.jsx(D,{className:"h-5 w-5"})})]}),ee?e.jsxs("div",{className:"prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",children:[w&&e.jsx("h1",{children:w}),e.jsx("div",{id:"topic-content",dangerouslySetInnerHTML:{__html:T}})]}):e.jsxs("div",{className:"flex h-[calc(100%-38px)] flex-col items-center justify-center",children:[e.jsx(ue,{className:"h-16 w-16 text-gray-300"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-gray-500",children:"Empty Content"})]}),d.length>0&&e.jsx("ul",{className:"mt-6 space-y-1",children:d.map(n=>e.jsx("li",{children:e.jsxs("a",{href:n.url,target:"_blank",className:"font-medium underline",children:[e.jsx("span",{className:de("mr-2 inline-block rounded px-1.5 py-1 text-xs uppercase no-underline",be[n.type]),children:n.type.charAt(0).toUpperCase()+n.type.slice(1)}),n.title]})}))}),r&&!l&&p&&e.jsxs("div",{className:"mt-8 flex-1 border-t",children:[e.jsx("p",{className:"mb-2 mt-2 text-sm leading-relaxed text-gray-400",children:"Help us improve this introduction and submit a link to a good article, podcast, video, or any other resource that helped you understand this topic better."}),e.jsxs("a",{href:p,target:"_blank",className:"flex w-full items-center justify-center rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",children:[e.jsx(me,{className:"mr-2 inline-block h-4 w-4 text-white"}),"Edit this Content"]})]})]}),!y&&!x&&j&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{t(!1),S(!1)},children:e.jsx(D,{className:"h-5 w-5"})}),e.jsxs("div",{className:"flex h-full flex-col items-center justify-center",children:[e.jsx(ge,{className:"h-16 w-16 text-red-500"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-red-500",children:j})]})]})]}),e.jsx("div",{className:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]})}export{Be as TopicDetail};