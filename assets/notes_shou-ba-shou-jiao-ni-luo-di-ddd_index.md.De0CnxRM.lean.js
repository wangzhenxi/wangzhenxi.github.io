import{_ as r,C as a,o as l,c as m,j as e,a as t,E as o,w as d}from"./chunks/framework.R7EdO4cN.js";const g=JSON.parse('{"title":"手把手教你落地DDD","description":"","frontmatter":{"title":"手把手教你落地DDD"},"headers":[],"relativePath":"notes/shou-ba-shou-jiao-ni-luo-di-ddd/index.md","filePath":"notes/shou-ba-shou-jiao-ni-luo-di-ddd/index.md"}'),p={name:"notes/shou-ba-shou-jiao-ni-luo-di-ddd/index.md"};function u(D,n,c,h,f,x){const i=a("markmap"),s=a("ClientOnly");return l(),m("div",null,[n[1]||(n[1]=e("h1",{id:"手把手教你落地ddd",tabindex:"-1"},[t("手把手教你落地DDD "),e("a",{class:"header-anchor",href:"#手把手教你落地ddd","aria-label":'Permalink to "手把手教你落地DDD"'},"​")],-1)),n[2]||(n[2]=e("h2",{id:"思维导图",tabindex:"-1"},[t("思维导图 "),e("a",{class:"header-anchor",href:"#思维导图","aria-label":'Permalink to "思维导图"'},"​")],-1)),o(s,null,{default:d(()=>[o(i,{containerHeight:"100vh",id:"markmap-1773407796091-zise78qpx"},{default:d(()=>[...n[0]||(n[0]=[e("pre",null,`# 手把手教你落地DDD
## 事件风暴
### 1. 识别领域事件
- 领域事件是业务流程中每个步骤引发的结果。命名上一般是完成时 + 被动语态。
- 注意点：
    - 技术事件不是领域事件： 比如事务已回滚、缓存已命中
    - 查询功能不是领域事件： 比如用户信息已查询
### 2. 识别命令
- 命令是引发领域事件的操作。命名上一般是动词 + 主语。
- 识别过程中，需要考虑命令的执行者、查询数据，并标记出来
### 3. 识别领域名称
从命令、领域事件、执行中、查询数据中，找到的名词性概念。
### 常见问题
- 是否需穷举所有步骤？
    - 只列出主要的、足以用于表达和交流领域知识的步骤，不需要列出所有细节。
- 是否需体现严格的时间顺序？
    - 只要有大致的顺序即可，可以用流程图、时序图补充。
- 每个步骤的颗粒度如何把握？
    - 宜粗不宜细
- 如何保存和维护事件风暴结果？
    - 使用便签或者表格均可
        - ![](./image/2026-02-28-09-43-03.png)
### 领域建模
- UML建模
    - 约束： 注释里增加大括号来表示约束
        - ![](./image/2026-03-10-09-03-04.png)
    - 多重性： 使用 \`0..*\` 表示0到多个， \`1..1\` 表示必须1个等
    - 完整建模
        - ![](./image/2026-03-10-09-27-52.png)
    - 宏观层面 - 包图
        - ![](./image/2026-03-10-09-28-39.png)
`,-1)])]),_:1})]),_:1})])}const b=r(p,[["render",u]]);export{g as __pageData,b as default};
