const sidebarConfig = require('./sidebar.config.json')

module.exports = {
    title:'怀谷',
    description: 'vue react leetcode angular',
    // base: '/dist/',
    themeConfig: {
        siteTitle: "怀谷",
        // assetesPublicPath:"./",
        // logo: "/logo.png",
        nav: [{
                text: "Vue",
                link: "/Vue/组件通信/Api-attrs"
            },
            {
                text: "开发总结",
                link: "/开发总结/"
            },
            {
                text: "计算机基础",
                link: "/计算机基础/"
            },
            {
                text: "算法",
                link: "/算法/"
            }
        ],
        lastUpdated: "最近更新时间",
        socialLinks: [{
            icon: "github",
            link: "https://gitee.com/cn-zyh12/huai-gu"
        }, ],
        sidebar: sidebarConfig
    },
}