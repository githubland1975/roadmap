import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as m}from"./index.SSXOyoI7.js";import{u}from"./use-outside-click.BWzraQDw.js";import{u as d}from"./use-keydown.DCIacX8c.js";import{c as o}from"./classname.B_pfcvI6.js";function v(r){const{onClose:s,children:a,bodyClassName:t,wrapperClassName:i,overlayClassName:p}=r,l=m.useRef(null);return d("Escape",()=>{s()}),u(l,()=>{s()}),e.jsx("div",{className:o("popup fixed left-0 right-0 top-0 z-[99] flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",p),children:e.jsx("div",{className:o("relative h-full w-full max-w-md p-4 md:h-auto",i),children:e.jsx("div",{ref:l,className:o("popup-body relative h-full rounded-lg bg-white shadow",t),children:a})})})}export{v as M};