import{_ as a,c as l,b as s,t as o,d as n,a as p,o as e}from"./app.136603a1.js";const E=JSON.parse('{"title":"Vue的diff算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"废话","slug":"废话","link":"#废话","children":[]},{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"diff","slug":"diff","link":"#diff","children":[]},{"level":3,"title":"patchVnode","slug":"patchvnode","link":"#patchvnode","children":[]},{"level":3,"title":"updateChildren","slug":"updatechildren","link":"#updatechildren","children":[]}]}],"relativePath":"面试/NONI/Vue/diff算法.md"}'),t={name:"面试/NONI/Vue/diff算法.md"},c=s("h1",{id:"vue的diff算法",tabindex:"-1"},[n("Vue的diff算法 "),s("a",{class:"header-anchor",href:"#vue的diff算法","aria-hidden":"true"},"#")],-1),r=s("h2",{id:"废话",tabindex:"-1"},[n("废话 "),s("a",{class:"header-anchor",href:"#废话","aria-hidden":"true"},"#")],-1),y=s("p",null,"Vue是一款声明式框架，比起关注过程的命令式框架，在性能消耗上还需要考虑找出差异的消耗，因此声明式的性能消耗要更多一些，如果要减小性能的消耗，就要减小找出差异这块的消耗，这个时候就需要使用diff算法。",-1),F=p("",19);function D(A,i,d,C,f,V){return e(),l("div",null,[c,r,y,s("blockquote",null,[s("p",null,"关于Vue的声明式，比如说我们在template中的某个标签里使用了插值语法"+o()+"，在dara里定义了相关的数据，那么这个插值语法中的数据就会在视图中渲染出来，这个过程就是使用模板语法来声明式地将数据渲染到DOM上。",1)]),F])}const u=a(t,[["render",D]]);export{E as __pageData,u as default};
