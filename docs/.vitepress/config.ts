import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ===== 站点元数据 =====
  title: 'SwixCode Docs',
  description: 'AI 编程工具连接 SwixCode 网关的配置指南 — Claude Code、Codex CLI、Gemini CLI 等',
  lang: 'zh-CN',

  // ===== 构建配置 =====
  cleanUrls: true,
  lastUpdated: true,

  // 如果部署到 GitHub Pages 子路径，取消注释并设置 base
  // base: '/swixcode-docs/',

  // ===== HTML Head =====
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'SwixCode Docs' }],
    ['meta', { property: 'og:description', content: 'AI 编程工具连接 SwixCode 网关的配置指南' }],
  ],

  // ===== Markdown 配置 =====
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
  },

  // ===== 主题配置 =====
  themeConfig: {
    logo: '/logo.jpeg',
    siteTitle: 'SwixCode Docs',

    // --- 搜索 ---
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    // --- 顶部导航 ---
    nav: [
      { text: '快速开始', link: '/guide/getting-started', activeMatch: '/guide/' },
      {
        text: 'CLI 工具',
        items: [
          { text: 'Claude Code', link: '/tools/claude-code' },
          { text: 'Codex CLI', link: '/tools/codex-cli' },
          { text: 'Gemini CLI', link: '/tools/gemini-cli' },
          { text: 'Cursor', link: '/tools/cursor' },
          { text: 'Cline', link: '/tools/cline' },
        ],
      },
      { text: '进阶', link: '/advanced/router', activeMatch: '/advanced/' },
      { text: 'FAQ', link: '/faq/' },
    ],

    // --- 侧边栏 ---
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '入门',
            collapsed: false,
            items: [
              { text: '什么是 SwixCode', link: 'what-is-swixcode' },
              { text: '快速开始', link: 'getting-started' },
              { text: '获取令牌', link: 'get-token' },
            ],
          },
        ],
      },
      '/tools/': {
        base: '/tools/',
        items: [
          {
            text: '终端 CLI 工具',
            collapsed: false,
            items: [
              { text: 'Claude Code', link: 'claude-code' },
              { text: 'Codex CLI', link: 'codex-cli' },
              { text: 'Gemini CLI', link: 'gemini-cli' },
            ],
          },
          {
            text: 'IDE 集成',
            collapsed: false,
            items: [
              { text: 'Cursor', link: 'cursor' },
              { text: 'Cline (VS Code)', link: 'cline' },
            ],
          },
        ],
      },
      '/advanced/': {
        base: '/advanced/',
        items: [
          {
            text: '进阶配置',
            collapsed: false,
            items: [
              { text: 'Claude Code Router', link: 'router' },
              { text: '故障排查', link: 'troubleshooting' },
              { text: '安全最佳实践', link: 'security' },
            ],
          },
        ],
      },
      '/faq/': {
        base: '/faq/',
        items: [
          { text: '常见问题', link: '' },
        ],
      },
    },


    // --- 页脚 ---
    footer: {
      message: '本文档仅供学习交流，请遵守各 AI 服务商使用条款',
      copyright: 'Copyright © -2026present SwixCode',
    },


    // --- 中文化 UI ---
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '页面导航', level: [2, 3] },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true,
  },
})
