import{_ as s,c as n,o as a,a as l}from"./app.9671b4e7.js";const p="/HuaiGu/abc\u900F\u4F20.png",o="/HuaiGu/Hover.png",t="/HuaiGu/el-title.png",h=JSON.parse('{"title":"attrs/listeners","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001$attrs\u4ECB\u7ECD","slug":"\u4E00\u3001-attrs\u4ECB\u7ECD","link":"#\u4E00\u3001-attrs\u4ECB\u7ECD","children":[{"level":3,"title":"\u4F7F\u7528\u573A\u666F:  A \u7EC4\u4EF6\u4E0E C \u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A \uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09","slug":"\u4F7F\u7528\u573A\u666F-a-\u7EC4\u4EF6\u4E0E-c-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A-\uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09","link":"#\u4F7F\u7528\u573A\u666F-a-\u7EC4\u4EF6\u4E0E-c-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A-\uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09","children":[]}]},{"level":2,"title":"\u4E8C\u3001$listeners\u4ECB\u7ECD","slug":"\u4E8C\u3001-listeners\u4ECB\u7ECD","link":"#\u4E8C\u3001-listeners\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F","slug":"\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F","link":"#\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F","children":[{"level":3,"title":"\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A","slug":"\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A","link":"#\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A","children":[]},{"level":3,"title":"\u6548\u679C\u5B9E\u73B0","slug":"\u6548\u679C\u5B9E\u73B0","link":"#\u6548\u679C\u5B9E\u73B0","children":[]},{"level":3,"title":"log\u6253\u5370","slug":"log\u6253\u5370","link":"#log\u6253\u5370","children":[]}]}],"relativePath":"Vue/\u7EC4\u4EF6\u901A\u4FE1/Api-attrs.md"}'),e={name:"Vue/\u7EC4\u4EF6\u901A\u4FE1/Api-attrs.md"},r=l('<h1 id="attrs-listeners" tabindex="-1">attrs/listeners <a class="header-anchor" href="#attrs-listeners" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001-attrs\u4ECB\u7ECD" tabindex="-1">\u4E00\u3001$attrs\u4ECB\u7ECD <a class="header-anchor" href="#\u4E00\u3001-attrs\u4ECB\u7ECD" aria-hidden="true">#</a></h2><ul><li>\u5F53\u9879\u76EE\u4E2D\u6709\u591A\u5C42\u7EC4\u4EF6\u4F20\u53C2\u53EF\u4EE5\u4F7F\u7528$attrs\uFF0C\u53EF\u4EE5\u4F7F\u4EE3\u7801\u66F4\u52A0\u7F8E\u89C2\uFF0C\u66F4\u52A0\u7B80\u6D01\uFF0C\u7EF4\u62A4\u4EE3\u7801\u7684\u65F6\u5019\u66F4\u65B9\u4FBF\u3002</li><li>\u4E86\u89E3\uFF1A\u5982\u679C\u7ED9\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\uFF0C\u7EC4\u4EF6\u4E0D\u4F7F\u7528props\u63A5\u6536\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u6570\u636E\u5C06\u4F5C\u4E3A\u7EC4\u4EF6\u7684HTML\u5143\u7D20\u7684\u7279\u6027\uFF0C\u8FD9\u4E9B\u7279\u6027\u7ED1\u5B9A\u5728\u7EC4\u4EF6\u7684HTML\u6839\u5143\u7D20\u4E0A</li><li><strong style="color:red;">inheritAttrs: false</strong>\u7684\u542B\u4E49\u662F\u4E0D\u5E0C\u671B\u672C\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684attribute\uFF0C\u540C\u65F6\u7236\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u5C5E\u6027\uFF08\u6CA1\u6709\u88AB\u5B50\u7EC4\u4EF6\u7684props\u63A5\u6536\u7684\u5C5E\u6027\uFF09\uFF0C\u4E5F\u4E0D\u4F1A\u663E\u793A\u5728\u5B50\u7EC4\u4EF6\u7684dom\u5143\u7D20\u4E0A\uFF0C\u4F46\u662F\u5728\u7EC4\u4EF6\u91CC\u53EF\u4EE5\u901A\u8FC7\u5176$attrs\u53EF\u4EE5\u83B7\u53D6\u5230\u6CA1\u6709\u4F7F\u7528\u7684\u6CE8\u518C\u5C5E\u6027, <code>inheritAttrs: false</code>\u662F\u4E0D\u4F1A\u5F71\u54CD style \u548C class \u7684\u7ED1\u5B9A</li></ul><h3 id="\u4F7F\u7528\u573A\u666F-a-\u7EC4\u4EF6\u4E0E-c-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A-\uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09" tabindex="-1">\u4F7F\u7528\u573A\u666F: A \u7EC4\u4EF6\u4E0E C \u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A \uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09 <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F-a-\u7EC4\u4EF6\u4E0E-c-\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A-\uFF08\u8DE8\u591A\u7EA7\u7684\u7EC4\u4EF6\u5D4C\u5957\u5173\u7CFB\uFF09" aria-hidden="true">#</a></h3><p><img src="'+p+`" alt="alt"></p><h2 id="\u4E8C\u3001-listeners\u4ECB\u7ECD" tabindex="-1">\u4E8C\u3001$listeners\u4ECB\u7ECD <a class="header-anchor" href="#\u4E8C\u3001-listeners\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h4 id="listeners\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u76D1\u542C\u5668\uFF0C\u4F60\u5C31\u53EF\u4EE5\u914D\u5408-v-on-listeners-\u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u6307\u5411\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u67D0\u4E2A\u7279\u5B9A\u7684\u5B50\u5143\u7D20\u3002\uFF08\u76F8\u5F53\u4E8E\u5B50\u7EC4\u4EF6\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u4E8B\u4EF6\uFF09" tabindex="-1">$listeners\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u76D1\u542C\u5668\uFF0C\u4F60\u5C31\u53EF\u4EE5\u914D\u5408 v-on=&quot;$listeners&quot; \u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u6307\u5411\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u67D0\u4E2A\u7279\u5B9A\u7684\u5B50\u5143\u7D20\u3002\uFF08\u76F8\u5F53\u4E8E\u5B50\u7EC4\u4EF6\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u4E8B\u4EF6\uFF09 <a class="header-anchor" href="#listeners\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u76D1\u542C\u5668\uFF0C\u4F60\u5C31\u53EF\u4EE5\u914D\u5408-v-on-listeners-\u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u6307\u5411\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u67D0\u4E2A\u7279\u5B9A\u7684\u5B50\u5143\u7D20\u3002\uFF08\u76F8\u5F53\u4E8E\u5B50\u7EC4\u4EF6\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u4E8B\u4EF6\uFF09" aria-hidden="true">#</a></h4><h2 id="\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001attrs\u548Clisteners\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>$attrs/$listeners\u4E00\u822C\u7528\u4E8E\u5BF9\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5B9E\u73B0\u529F\u80FD\u6269\u5C55</p></div><h3 id="\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A" tabindex="-1">\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A <a class="header-anchor" href="#\u9700\u6C42\uFF1A\u5BF9element-ui\u7684button\u7EC4\u4EF6\u5B9E\u73B0\u589E\u52A0\u9F20\u6807\u60AC\u505C\u63D0\u793A" aria-hidden="true">#</a></h3><p>HintButton\u4E3Ael-button\u7684\u4E8C\u6B21\u5C01\u88C5</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u81EA\u5B9A\u4E49\u5E26Hover\u63D0\u793A\u7684\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- \u4E8C\u6B21\u5C01\u88C5\u7684HintButton\u6309\u94AE\u7684\u65F6\u5019\uFF0C\u628Ael-button\u9700\u8981\u7684\u6570\u636E\u4F20\u9012\u8FC7\u53BB --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- title\u4E3A\u9F20\u6807\u60AC\u505C\u63D0\u793A\u5185\u5BB9 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HintButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el-icon-plus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6211\u662F\u4E2D\u56FD\u4EBA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/ecmascript-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> HintButton </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./HintButton</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">     HintButton </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">handler</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F39\u5F39\u5F39</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>HintButton\u7EC4\u4EF6</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">&lt;!-- \u6CE8\u610F\u6B64\u5904\u4E0D\u53EF\u4F7F\u7528\u7B80\u5199\uFF0C\u5FC5\u987B\u4F7F\u7528\u5168\u79F0 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$listeners</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6DFB\u52A0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// props\u63A5\u6536\u4E86\u7684\u5C5E\u6027\uFF0Cthis.$attrs\u5C5E\u6027\u662F\u83B7\u53D6\u4E0D\u5230\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//this.$attrs:\u53EF\u4EE5\u83B7\u53D6\u5230\u7236\u4EB2\u4F20\u9012\u7684\u6570\u636E\u3010props\u3011</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//this.$listeners:\u53EF\u4EE5\u83B7\u53D6\u5230\u7236\u4EB2\u4F20\u9012\u7684\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$listeners</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6548\u679C\u5B9E\u73B0" tabindex="-1">\u6548\u679C\u5B9E\u73B0 <a class="header-anchor" href="#\u6548\u679C\u5B9E\u73B0" aria-hidden="true">#</a></h3><p><img src="`+o+'" alt="alt"></p><h3 id="log\u6253\u5370" tabindex="-1">log\u6253\u5370 <a class="header-anchor" href="#log\u6253\u5370" aria-hidden="true">#</a></h3><p><img src="'+t+'" alt="alt"></p>',18),c=[r];function D(F,y,i,A,C,u){return a(),n("div",null,c)}const g=s(e,[["render",D]]);export{h as __pageData,g as default};
