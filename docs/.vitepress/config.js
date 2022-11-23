const sidebarConfig = require('./sidebar.config.json')

module.exports = {
  title: '怀谷',
  description: 'vue react leetcode angular',
  base: '/HuaiGu/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    [
      'script',
      {},
      `    
      (function() {
        document.addEventListener('copy',(event)=>{
            let clipboardData = event.clipboardData || window.clipboardData;

            if (!clipboardData) { return; }
                
        let text = window.getSelection().toString()
        text=text+'\\n\\n\\n\\n'+'本资源来自'+'\\n'+this.location.href
        event.clipboardData.setData('text/plain', text);
        event.preventDefault();
        })



    })()`
    ]
  ],
  themeConfig: {
    siteTitle: '怀谷',
    // assetesPublicPath:"./",
    // logo: "/logo.png",
    nav: [
      {
        text: 'Vue',
        link: '/Vue/组件通信/Api-attrs'
      },
      {
        text: '开发总结',
        link: '/开发总结/Adobe-pr插件'
      },
      {
        text: '计算机基础',
        link: '/计算机基础/'
      },
      {
        text: '算法',
        link: '/算法/二叉树/层序遍历'
      }
    ],
    lastUpdated: '最近更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Huai-Gu/HuaiGu'
      }
    ],
    sidebar: sidebarConfig,
    base: '/fantastic-admin/'
  }
}
