import{u as n,j as e,L as a,C as t}from"./index-aff0c4fc.js";const c=()=>{const{memoryWalls:i}=n(),l=23;return e.jsx(e.Fragment,{children:i.map((s,r)=>e.jsx(a,{to:"/memory-wall",state:{index:r},style:{textDecoration:"none"},children:e.jsx("div",{className:"card-style",style:{width:"15rem",display:"inline-block",margin:"1rem",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:e.jsxs(t,{style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f5f5f5"},children:[e.jsx(t.Img,{variant:"top",style:{height:"15rem",width:"15rem",objectFit:"cover"},src:s.sliderUpdates[0].imagePath}),e.jsxs(t.Body,{children:[e.jsx(t.Title,{children:s.title}),e.jsxs(t.Text,{style:{direction:"rtl",textAlign:"right",height:"100px"},children:[s.about.split(" ").slice(0,l).join(" "),"..."]})]})]})})},r))})};export{c as default};
