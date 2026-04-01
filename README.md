# SwixCode Docs

AI 编程工具连接 New API 网关的配置指南。

## 文档内容

- **Claude Code** — 环境变量 / settings.json 配置
- **Codex CLI** — config.toml 自定义 Provider
- **Gemini CLI** — 环境变量 / settings.json 配置
- **Cursor** — IDE 设置界面配置
- **Cline** — VS Code 扩展 OpenAI Compatible 配置
- **Claude Code Router** — 多 Provider 智能路由

## 本地开发

```bash
npm install
npm run docs:dev
```

访问 http://localhost:5173

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## Docker 部署

```bash
docker compose up -d --build
```

默认端口 `3300`，可在 `docker-compose.yml` 中修改。

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点生成
- [Nginx](https://nginx.org/) — 生产环境托管
- [Docker](https://www.docker.com/) — 容器化部署
