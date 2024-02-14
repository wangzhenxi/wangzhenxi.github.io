const fs = require('fs')
const path = require('path')
const markdownIt = require('markdown-it')
const meta = require('markdown-it-meta')

const rootPath = path.join(__dirname, '../')

const dirTitleMap = {
    book: '读书笔记',
    essay: '随笔',
    tool: '工具',
    about: '关于我',
    friend: '友情链接'
}

function genderRoute({ title, path, children, filepath }) {
    let _title = title;
    if (children && children.length) {
        _title = dirTitleMap[title] || _title;
        return {
            title: _title,
            children
        }
    }
    if (filepath) {
        const content = fs.readFileSync(filepath, 'utf-8')
        const md = new markdownIt()
        md.use(meta)
        md.render(content)
        _title = md.meta.title || _title;
        if (md.meta.hide) return
    }
    return {
        title: _title,
        path
    }
}

const roll = (base, parentFilename) => {
    const files = fs.readdirSync(base).filter((item) => !/^\./.test(item))
    const dirs = files.map((filename) => {
        const filepath = path.join(base, filename)
        const fileStat = fs.statSync(filepath)
        if (fileStat.isDirectory()) {
            let children = roll(filepath, filename).filter((item) => !!item)
            if (!children.length) return
            if (children.some((item) => item === 'README.md')) {
                const basepath = `${path.join(base, filename)}`
                // 生成页面路由
                return genderRoute({
                    title: filename,
                    filepath: `${basepath}/README.md`,
                    path: `/${filepath.replace(rootPath, '')}/`
                });
            }
            // 生成目录路由
            return genderRoute({
                title: filename,
                children
            });
        } else if (filename === 'README.md') {
            if (parentFilename) {
                return 'README.md';
            } else {
                // 生成根路径
                return genderRoute({
                    title: dirTitleMap.about,
                    path: '/'
                })
            }
        }
    })
    return dirs
}

const weightMap = {
    [dirTitleMap.about]: 10,
    [dirTitleMap.friend]: 20,
    [dirTitleMap.book]: 30,
    [dirTitleMap.essay]: 40,
    [dirTitleMap.tool]: 50,
}
const weightMax = 100;
const sidebar = roll(rootPath).filter((item) => !!item).sort((a,b) => {
    // 排序
    const aWeight = weightMap[a.title] || weightMax;
    const bWeight = weightMap[b.title] || weightMax;
    return aWeight - bWeight;
});

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Joshwong | 王震西',
    description: '记录点滴',
    head: [],
    plugins: {
        // 百度统计
        'vuepress-plugin-baidu-tongji-analytics': {
            key: '05011c0833edb057b092ef78bbaf7ff5'
        },

        // 评论
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',

            // 其他的 Vssue 配置
            owner: 'wangzhenxi',
            repo: 'wangzhenxi.github.io',
            clientId: '0deb5b15f58c92d3fcf4',
            clientSecret: '97ffc1e39e11dbccb1cf481b58b435e2dc3b87cc'
        },

        // 站点地图
        'sitemap': {
            hostname: 'https://www.wangzhenxi.com'
        },

        // 爬虫
        'robots': {
            /**
             * @host
             * Mandatory, You have to provide the host URL
             */
            host: 'https://www.wangzhenxi.com',
            /**
             * @disallowAll
             * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
             */
            disallowAll: false,
            /**
             * @allowAll
             * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
             */
            allowAll: true,
            /**
             * @sitemap
             * Optional, by default: sitemap.xml
             */
            sitemap: '/sitemap.xml'
            /**
             * @policies
             * Optional, by default: null
             */
            // policies: [
            //     {
            //         userAgent: '*',
            //         disallow: [],
            //         allow: ['/']
            //     }
            // ]
        }
    },

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        smoothScroll: true,
        search: false,
        nav: [{ text: 'Github', link: 'https://github.com/wangzhenxi' }],
        sidebar,
        lastUpdated: 'Last Updated', // string | boolean
    }
}
