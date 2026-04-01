# Gemini CLI

[Gemini CLI](https://github.com/google-gemini/gemini-cli) 是 Google 推出的终端 AI 编程助手。本文介绍如何配置它通过 New API 网关进行请求。

## 配置方式

### 方式一：环境变量

::: code-group

```bash [macOS (Zsh)]
export GEMINI_API_BASE_URL="https://www.swixcode.com"
export GEMINI_API_KEY="sk-你的NewAPI令牌"
gemini
```

```bash [Linux (Bash)]
export GEMINI_API_BASE_URL="https://www.swixcode.com"
export GEMINI_API_KEY="sk-你的NewAPI令牌"
gemini
```

```powershell [Windows (PowerShell)]
$env:GEMINI_API_BASE_URL = "https://www.swixcode.com"
$env:GEMINI_API_KEY = "sk-你的NewAPI令牌"
gemini
```

:::

持久化设置：

::: code-group

```bash [macOS (Zsh)]
echo 'export GEMINI_API_BASE_URL="https://www.swixcode.com"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-你的NewAPI令牌"' >> ~/.zshrc
source ~/.zshrc
```

```bash [Linux (Bash)]
echo 'export GEMINI_API_BASE_URL="https://www.swixcode.com"' >> ~/.bashrc
echo 'export GEMINI_API_KEY="sk-你的NewAPI令牌"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows (PowerShell)]
[System.Environment]::SetEnvironmentVariable('GEMINI_API_BASE_URL', 'https://www.swixcode.com', 'User')
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'sk-你的NewAPI令牌', 'User')
# 重新打开终端生效
```

:::

### 方式二：settings.json

::: code-group

```json [macOS / Linux (~/.gemini/settings.json)]
{
  "apiBaseUrl": "https://www.swixcode.com",
  "apiKey": "sk-你的NewAPI令牌"
}
```

```json [Windows (%USERPROFILE%\.gemini\settings.json)]
{
  "apiBaseUrl": "https://www.swixcode.com",
  "apiKey": "sk-你的NewAPI令牌"
}
```

:::

也可以在项目根目录创建 `.gemini/settings.json`（所有平台通用）：

```json
{
  "apiBaseUrl": "https://www.swixcode.com"
}
```

::: info 配置优先级
从低到高：系统默认 → 用户配置 (`~/.gemini/settings.json`) → 项目配置 (`.gemini/settings.json`) → 环境变量 → 命令行参数
:::

## 验证

```bash
gemini "说 hello"
```

## 注意事项

### API 协议转换

Gemini CLI 使用 **Google Gemini 原生协议**（`/v1beta/models/...`）。如果你的 New API 不支持 Gemini 协议直通，有两种解决方案：

1. **在 New API 中添加 Gemini 格式渠道**（如果支持）
2. **通过 OpenAI 兼容模式**：某些版本的 Gemini CLI 支持通过 OpenAI 兼容端点调用

::: tip
请在 New API 后台确认你的渠道配置支持 Gemini 协议。如果只支持 OpenAI 格式，考虑使用 [Claude Code Router](/advanced/router) 进行协议转换。
:::

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| `401 Unauthorized` | API Key 错误 | 检查令牌和环境变量 |
| `Model not supported` | 协议不兼容 | 检查 New API 渠道是否支持 Gemini 格式 |
| 无响应 | 网络问题 | 检查 Base URL 是否可访问 |
