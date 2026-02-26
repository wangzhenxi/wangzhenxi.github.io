import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from './Giscus.vue'

// GTM noscript 组件（注入 <body> 顶部）
const GtmNoscript = {
  setup() {
    return () =>
      h('noscript', null, [
        h('iframe', {
          src: 'https://www.googletagmanager.com/ns.html?id=GTM-PF595C3K',
          height: '0',
          width: '0',
          style: 'display:none;visibility:hidden',
        }),
      ])
  },
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(GtmNoscript),
    })
  },
  enhanceApp({ app }) {
    app.component('Giscus', Giscus)
  },
}
