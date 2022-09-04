const sidebarConfig = require('./sidebar.config.json')
module.exports = {
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: "怀谷",
        // logo: "/logo.png",
        nav: [{
                text: "Guide",
                link: "/Vue源码分析/"
            },
            {
                text: "开发总结",
                link: "/开发总结/"
            },
        ],
        lastUpdated: "最近更新时间",
        socialLinks: [{
            icon: "github",
            link: "https://gitee.com/cn-zyh12/huai-gu"
        }, ],
        sidebar: sidebarConfig
    },
}