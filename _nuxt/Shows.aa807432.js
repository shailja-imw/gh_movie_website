import{f as C,m as l,o as s,a as o,b as t,u as i,F as m,r as L,j as h,C as v,t as a,D as M}from"./entry.7424cb38.js";import{r as $,u as S}from"./fetch.b7e5dfa8.js";const D=""+new URL("edit.f12bd222.svg",import.meta.url).href,E=""+new URL("delete.918c133b.svg",import.meta.url).href;const B={key:0,class:"text-center mt-5"},N=t("div",{class:"spinner-border text-info",role:"status"},null,-1),j=t("div",{class:"mt-3"},"Loading...",-1),F=[N,j],P={key:1,class:"row"},R={class:"card card-show-brief"},U=["src","alt"],V={class:"card-body"},A={class:"card-title text-truncate"},H={class:"card-text"},T={class:"show-desc text-gray mt-2"},Y={class:"d-flex justify-content-between mt-3"},q={class:"text-truncate text-gray"},z={class:"text-truncate text-gray"},G={class:"text-truncate text-gray"},I={class:"d-flex justify-content-between mt-3"},J=t("img",{src:D,class:"main__table-btn btn_edit"},null,-1),K=["onClick"],O=["aria-hidden"],Q={class:"modal-dialog"},W={class:"modal-content modal-dark"},X=t("div",{class:"modal-header"},[t("h5",{id:"deleteModalLabel",class:"modal-title"},"Delete Show")],-1),Z=t("div",{class:"modal-body"},"Are you sure You want to remove the show ?",-1),tt={class:"modal-footer"},at={__name:"Shows",props:["shows"],setup(b){const c=b,{base_url:f}=C(),g=l(c.shows.data),p=l(c.isPending),d=l(!1);let r;function x(_){d.value=!0,r=_}function y(){d.value=!1,$()}async function w(){await S(`${f}/title/${r}`,{method:"DELETE"},"$4vHlCB7Eva"),window.location.href="/discover?_page=1"}return(_,n)=>{const u=M;return s(),o(m,null,[t("div",null,[i(p)?(s(),o("div",B,F)):(s(),o("div",P,[(s(!0),o(m,null,L(i(g),(e,k)=>(s(),o("div",{key:k,class:"col-md-4 col-lg-3 col-sm-10 g-4"},[t("div",R,[t("img",{src:e.img_url,class:"card-img-top img-show",alt:e.title},null,8,U),t("div",V,[h(u,{to:e.id,class:"text-decoration-none white-text-link"},{default:v(()=>[t("h5",A,a(e.title),1)]),_:2},1032,["to"]),t("div",H,[t("div",T,a(e.desc),1),t("div",Y,[t("div",q," Played: "+a(e.runtime),1),t("div",z,a(e.type),1),t("div",G,a(e.release_year),1)]),t("div",I,[h(u,{to:`/${e.id}/update`},{default:v(()=>[J]),_:2},1032,["to"]),t("img",{src:E,class:"main__table-btn btn_delete cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#deleteModal",onClick:et=>x(e.id)},null,8,K)])])])])]))),128))]))]),t("div",{id:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":!!i(d)},[t("div",Q,[t("div",W,[X,Z,t("div",tt,[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:n[0]||(n[0]=e=>y())}," Close "),t("button",{type:"button",class:"btn btn-theme-blue",onClick:n[1]||(n[1]=e=>w())}," Save changes ")])])])],8,O)],64)}}};export{at as _};
