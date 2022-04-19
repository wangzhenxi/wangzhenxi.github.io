module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Joshwong | 王震西',
    description: '记录点滴',
    head: [
        ['link', { rel: 'shortcut icon', href: 'https://cdn.joshwong.cn/josh.ico' }]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        smoothScroll: true,
        search: false,
        nav: [
            { text: 'Github', link: 'https://github.com/wangzhenxi' },
        ],
        sidebar: [
            {
                title: '关于我',
                path: '/',
            },
            {
                title: 'Javascript',
                collapsable: false,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                initialOpenGroupIndex: -1, // 可选的, 默认值是 0
                children: [
                    {
                        path: '/javascript/TODO',
                        title: 'TODO'
                    }
                ]
            },
            {
                title: '友情链接',
                path: '/friends/',
            }
        ],
        lastUpdated: 'Last Updated', // string | boolean
    },
}
