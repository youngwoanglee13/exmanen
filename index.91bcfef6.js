var e=function(e){return 0==e.length?"error-publicacion":e};const r=document.querySelector("#mensaje"),n=document.querySelector("#sumar-form"),o=document.querySelector("#resultado-div"),t=document.querySelector("#observaciones");n.addEventListener("submit",(n=>{n.preventDefault(),console.log(r.value),"error-publicacion"!=e(r.value)?(t.innerHTML="",o.innerHTML=o.innerHTML+"<p>"+e(r.value)+"</p>"):t.innerHTML="<p>No se puede ingresar un post sin texto</p>"}));
//# sourceMappingURL=index.91bcfef6.js.map
