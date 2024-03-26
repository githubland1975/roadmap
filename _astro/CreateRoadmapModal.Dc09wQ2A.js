import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as o}from"./index.SSXOyoI7.js";import{M as N}from"./Modal.CKHmOEZZ.js";import{u as w}from"./use-toast.CK2mpur1.js";import{h as k}from"./http.BfNEAXh_.js";import{c as a}from"./classname.B_pfcvI6.js";import{L as y}from"./loader-2.BHhQR-Hp.js";function T(j){const{onClose:l,onCreated:m,teamId:t}=j,u=o.useRef(null),i=w(),[s,d]=o.useState(!1),[c,p]=o.useState(""),[n,x]=o.useState(""),h=n?.trim().length>80;async function b(r,v=!0){if(r.preventDefault(),s)return;if(c.trim()===""||h){i.error("Please fill all the fields");return}d(!0);const{response:f,error:g}=await k("https://api.roadmap.sh/v1-create-roadmap",{title:c,description:n,...t&&{teamId:t},nodes:[],edges:[]});if(g){d(!1),i.error(g?.message||"Something went wrong, please try again");return}if(i.success("Roadmap created successfully"),v){window.location.href=`https://draw.roadmap.sh/${f?._id}`;return}if(m){m(f);return}l(),p(""),x(""),d(!1)}return o.useEffect(()=>{u.current?.focus()},[]),e.jsxs(N,{onClose:l,bodyClassName:"p-4",wrapperClassName:a(t&&"max-w-lg"),children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Create Roadmap"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Add a title and description to your roadmap."})]}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"title",className:"block text-xs uppercase text-gray-400",children:"Roadmap Title"}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{ref:u,type:"text",name:"title",id:"title",required:!0,className:"block text-black w-full rounded-md border border-gray-300 px-2.5 py-2 outline-none focus:border-black sm:text-sm",placeholder:"Enter Title",value:c,onChange:r=>p(r.target.value)})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"description",className:"block text-xs uppercase text-gray-400",children:"Description"}),e.jsxs("div",{className:"relative mt-1",children:[e.jsx("textarea",{id:"description",name:"description",required:!0,className:a("block text-black h-24 w-full resize-none rounded-md border border-gray-300 px-2.5 py-2 outline-none focus:border-black sm:text-sm",h&&"border-red-300 bg-red-100"),placeholder:"Enter Description",value:n,onChange:r=>x(r.target.value)}),e.jsxs("div",{className:"absolute bottom-2 right-2 text-xs text-gray-400",children:[n.length,"/80"]})]})]}),e.jsxs("div",{className:a("mt-4 flex justify-between gap-2",t&&"mt-8"),children:[e.jsx("button",{onClick:l,type:"button",className:a("block h-9 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black outline-none hover:border-gray-300 hover:bg-gray-50 focus:border-gray-300 focus:bg-gray-100",!t&&"w-full"),children:"Cancel"}),e.jsxs("div",{className:a("flex items-center gap-2",!t&&"w-full"),children:[t&&!s&&e.jsx("button",{disabled:s,type:"button",onClick:r=>b(r,!1),className:"flex h-9 items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black outline-none hover:bg-black hover:text-white focus:bg-black focus:text-white",children:s?e.jsx(y,{size:16,className:"animate-spin"}):"Save as Placeholder"}),e.jsx("button",{disabled:s,type:"submit",className:a("flex h-9 items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white outline-none hover:bg-gray-800 focus:bg-gray-800",t?"hidden sm:flex":"w-full"),children:s?e.jsx(y,{size:16,className:"animate-spin"}):t?"Continue to Editor":"Create"})]})]}),t&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mt-4 hidden rounded-md border border-orange-200 bg-orange-50 p-2.5 text-sm text-orange-600 sm:block",children:["Preparing the roadmap might take some time, feel free to save it as a placeholder and anyone with the role ",e.jsx("strong",{children:"admin"})," ","or ",e.jsx("strong",{children:"manager"})," can prepare it later."]}),e.jsx("p",{className:"mt-4 rounded-md border border-orange-200 bg-orange-50 p-2.5 text-sm text-orange-600 sm:hidden",children:"Create a placeholder now and prepare it later."})]})]})]})}export{T as C};