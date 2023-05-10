import{_ as s,c as a,o as e,a as n}from"./app.46505ed0.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"merge","slug":"merge","link":"#merge","children":[]},{"level":2,"title":"Git merge有两种主要的合并策略：fast-forward和recursive","slug":"git-merge有两种主要的合并策略-fast-forward和recursive","link":"#git-merge有两种主要的合并策略-fast-forward和recursive","children":[{"level":3,"title":"fast-forward","slug":"fast-forward","link":"#fast-forward","children":[]},{"level":3,"title":"recursive","slug":"recursive","link":"#recursive","children":[]}]}],"relativePath":"计算机基础/git/命令/merge.md"}'),r={name:"计算机基础/git/命令/merge.md"},l=n(`<h2 id="merge" tabindex="-1">merge <a class="header-anchor" href="#merge" aria-hidden="true">#</a></h2><p>当我们想合并某一个分支时可以存在冲突</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//A分支</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world Branch A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//B分支</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world Branch B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>在这个时候合并就会出现问题(同一行，不是同一行默认是增量提交了)</p><p>且合并会多出一个新的提交，这里和rebase是有<a href="https://zhuanlan.zhihu.com/p/57872388" target="_blank" rel="noreferrer">区别</a>的</p><h2 id="git-merge有两种主要的合并策略-fast-forward和recursive" tabindex="-1">Git merge有两种主要的合并策略：fast-forward和recursive <a class="header-anchor" href="#git-merge有两种主要的合并策略-fast-forward和recursive" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">B</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">C dev</span></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">E master</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="fast-forward" tabindex="-1">fast-forward <a class="header-anchor" href="#fast-forward" aria-hidden="true">#</a></h3><p>如果一个分支的提交历史是另一个分支的子集，那么Git会简单地将当前分支指向另一个分支的最新提交，这样就完成了合并操作</p><h3 id="recursive" tabindex="-1">recursive <a class="header-anchor" href="#recursive" aria-hidden="true">#</a></h3><p>在recursive合并策略中，Git会创建一个新的提交来表示合并结果，这个提交会包含两个分支的所有变更内容。</p>`,12),t=[l];function o(p,c,i,d,h,g){return e(),a("div",null,t)}const D=s(r,[["render",o]]);export{f as __pageData,D as default};
