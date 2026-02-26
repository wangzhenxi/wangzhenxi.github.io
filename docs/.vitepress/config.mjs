import { defineConfig } from 'vitepress'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import plantuml from 'markdown-it-plantuml'
import { buildSidebar } from './sidebar.mjs'

const docsPath = join(dirname(fileURLToPath(import.meta.url)), '..')

const dirConfig = [
  { name: 'notes', title: '笔记' },
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'Joshwong | 王震西',
  description: '记录点滴',

  head: [
    // Google Tag Manager
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PF595C3K');`],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-K9LXC60XXJ' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-K9LXC60XXJ');`],
    // Google AdSense
    ['script', { async: '', crossorigin: 'anonymous', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8528418355033370' }],
    // 百度统计
    ['script', {}, `var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?05011c0833edb057b092ef78bbaf7ff5";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();`],
  ],

  sitemap: {
    hostname: 'https://www.wangzhenxi.com',
  },

  markdown: {
    config: md => md.use(plantuml),
  },

  themeConfig: {
    nav: [
      { text: '关于我',  link: '/' },
      { text: '友情链接', link: '/friend/' },
      { text: '笔记',    link: '/notes/' },
    ],
    sidebar: buildSidebar(docsPath, dirConfig),
    socialLinks: [{ icon: 'github', link: 'https://github.com/wangzhenxi' }],
    footer: {
      message: '<a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备17064264号</a>',
      copyright: 'Copyright © 2022 Joshwong',
    },
  },
})
