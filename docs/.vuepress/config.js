
const fs = require('fs');
const path = require('path');
const markdownIt = require("markdown-it");
const meta = require("markdown-it-meta");

const rootPath = path.join(__dirname, '../');

function genderRoute({ title, path, children, filepath }) {
    if (children && children.length) {
        return {
            title,
            children
        }
    }
    if (filepath) {
        const content = fs.readFileSync(filepath, 'utf-8');
        const md = new markdownIt();
        md.use(meta);
        md.render(content);
        if (md.meta.hide) return;
    }
    return {
        title,
        path
    }
}

const roll = (base, parentFilename) => {
    const files = fs
        .readdirSync(base)
        .filter(item => !/^\./.test(item));
    const dirs = files.map(filename => {
        const filepath = path.join(base, filename);
        const fileStat = fs.statSync(filepath);
        if (fileStat.isDirectory()) {
            let children = roll(filepath, filename).filter(item => !!item);
            if (!children.length) return;
            if (children.some(item => item === 'README.md')) {
                const basepath = `${path.join(base, filename)}`;
                return genderRoute({
                    title: filename,
                    filepath: `${basepath}/README.md`,
                    path: `/${filepath.replace(rootPath, '')}/`
                })
            }
            return genderRoute({
                title: filename,
                children
            })
        } else if (filename !== 'README.md') {
            const basepath = `${path.join(base, filename)}`;
            return genderRoute({
                title: parentFilename,
                filepath: basepath,
                path: `/${filepath.replace(rootPath, '')}/`
            })
        } else {
            if (parentFilename) {
                return 'README.md';
            } else {
                return genderRoute({
                    title: '关于我',
                    path: '/'
                });
            }
        }
    })
    return dirs;
}

const sidebar = roll(rootPath).filter(item => !!item);

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Joshwong | 王震西',
    description: '记录点滴',
    head: [
        ['link', { rel: 'shortcut icon', href: 'https://cdn.joshwong.cn/josh.ico' }]
    ],
    plugins: [
        // 百度统计
        ['vuepress-plugin-baidu-tongji-analytics', {
            key: '78bf3c2cd36fd85e0d02fe895c4ee964',
        }]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        smoothScroll: true,
        search: false,
        nav: [
            { text: 'Github', link: 'https://github.com/wangzhenxi' },
        ],
        sidebar,
        lastUpdated: 'Last Updated', // string | boolean
    },
}
