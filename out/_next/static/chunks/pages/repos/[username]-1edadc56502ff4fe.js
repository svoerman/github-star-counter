(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{4715:(n,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/repos/[username]",function(){return r(382)}])},382:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>S});var t=r(8243),s=r(6070),o=r(758),u=r(9464),i=r(3842),a=r(880);function l(){let n=(0,t._)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n"]);return l=function(){return n},n}function c(){let n=(0,t._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n"]);return c=function(){return n},n}function p(){let n=(0,t._)(["\n  font-size: 2rem;\n  color: #333;\n"]);return p=function(){return n},n}function d(){let n=(0,t._)(["\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n"]);return d=function(){return n},n}function _(){let n=(0,t._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n"]);return _=function(){return n},n}function f(){let n=(0,t._)(["\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    transform: translateY(-5px);\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,t._)(["\n  font-size: 1.5rem;\n  color: #0070f3;\n  margin-bottom: 1rem;\n"]);return h=function(){return n},n}function m(){let n=(0,t._)(["\n  font-size: 1rem;\n  color: #666;\n  margin: 0.5rem 0;\n"]);return m=function(){return n},n}let g=a.Ay.div(l()),x=a.Ay.header(c()),y=a.Ay.h1(p()),b=a.Ay.select(d()),v=a.Ay.div(_()),j=a.Ay.div(f()),A=a.Ay.h2(h()),w=a.Ay.p(m()),z="your_github_access_token";function S(){let{username:n}=(0,u.useRouter)().query,[e,r]=(0,o.useState)([]),[t,a]=(0,o.useState)("stars"),[l,c]=(0,o.useState)(!1),[p,d]=(0,o.useState)(null);(0,o.useEffect)(()=>{n&&_()},[n]);let _=async()=>{c(!0),d(null);let e={Accept:"application/vnd.github.v3+json"};z&&(e.Authorization="Bearer ".concat(z));try{let t=await i.A.get("https://api.github.com/users/".concat(n,"/repos"),{headers:e}),s=await Promise.all(t.data.map(async n=>{try{let r=await i.A.get(n.pulls_url.replace("{/number}",""),{headers:e});return{id:n.id,name:n.name,stargazers_count:n.stargazers_count,open_issues_count:n.open_issues_count,pulls_count:r.data.length,pulls_url:n.pulls_url}}catch(e){return{id:n.id,name:n.name,stargazers_count:n.stargazers_count,open_issues_count:n.open_issues_count,pulls_count:0,pulls_url:n.pulls_url}}}));r(s)}catch(n){if(i.A.isAxiosError(n)){var t,s;d((null===(t=n.response)||void 0===t?void 0:t.status)===403?"Rate limit exceeded. Please try again later or add a valid GitHub token.":(null===(s=n.response)||void 0===s?void 0:s.status)===404?"User not found":"Error fetching repositories")}else d("An unexpected error occurred");console.error("Error fetching repos:",n)}finally{c(!1)}},f=[...e].sort((n,e)=>"stars"===t?e.stargazers_count-n.stargazers_count:"issues"===t?e.open_issues_count-n.open_issues_count:"pulls"===t?e.pulls_count-n.pulls_count:0);return(0,s.jsxs)(g,{children:[(0,s.jsxs)(x,{children:[(0,s.jsxs)(y,{children:[n,"'s Repositories"]}),(0,s.jsxs)(b,{value:t,onChange:n=>a(n.target.value),"aria-label":"Sort repositories by",children:[(0,s.jsx)("option",{value:"stars",children:"Sort by Stars"}),(0,s.jsx)("option",{value:"issues",children:"Sort by Issues"}),(0,s.jsx)("option",{value:"pulls",children:"Sort by Pull Requests"})]})]}),l&&(0,s.jsx)("p",{children:"Loading repositories..."}),p&&(0,s.jsx)("p",{style:{color:"red"},children:p}),!l&&!p&&(0,s.jsx)(v,{children:f.map(n=>(0,s.jsxs)(j,{children:[(0,s.jsx)(A,{children:n.name}),(0,s.jsxs)(w,{children:["Stars: ",n.stargazers_count]}),(0,s.jsxs)(w,{children:["Open Issues: ",n.open_issues_count]}),(0,s.jsxs)(w,{children:["Open PRs: ",n.pulls_count]})]},n.id))})]})}}},n=>{var e=e=>n(n.s=e);n.O(0,[761,636,593,792],()=>e(4715)),_N_E=n.O()}]);