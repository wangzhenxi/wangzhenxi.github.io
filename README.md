# Josh's Digital Card — joshwong 的个人名片

joshwong（王震西）的个人数字名片页面，部署于 [wangzhenxi.github.io](https://github.com/wangzhenxi/wangzhenxi.github.io)（[www.wangzhenxi.com](https://www.wangzhenxi.com)）。

页面透出以下信息：

- 英文名 joshwong 与头像
- GitHub：https://github.com/wangzhenxi
- 微信号 the_best_josh（点击复制到剪贴板，二维码图标点击弹窗展示）

技术特性：

- 纯前端（TanStack Start + React 19 + Tailwind CSS 4，构建时预渲染为静态页面）
- 响应式布局，Apple 极简风格
- SEO 友好（预渲染 HTML + Open Graph / Twitter Card 元信息）

## 开发

需要 Node.js 与 bun：

```sh
bun install
bun run dev
```

## 构建与部署

```sh
bun run build
```

构建产物位于 `.output/public`（静态站点）。将 `.output/public` 的内容提交到 `gh-pages` 分支即可通过 GitHub Pages 发布。

仓库分支说明：

- `main`：源码
- `gh-pages`：构建产物（GitHub Pages 从此分支发布，绑定自定义域名 www.wangzhenxi.com）
