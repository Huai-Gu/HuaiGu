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
                text: "GuideTest",
                link: "/guide/test"
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