# Claude Code

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) 是 Anthropic 推出的终端 AI 编程助手。本文介绍如何将其配置为使用 New API 转发请求。

## 配置方式

Claude Code 支持两种配置方式：**环境变量** 和 **settings.json**。

### 方式一：环境变量（推荐）

::: code-group

```bash [macOS]
export ANTHROPIC_BASE_URL="https://www.swixcode.com"
export ANTHROPIC_API_KEY="sk-你的NewAPI令牌"
claude
```

```bash [Linux]
export ANTHROPIC_BASE_URL="https://www.swixcode.com"
export ANTHROPIC_API_KEY="sk-你的NewAPI令牌"
claude
```

```powershell [Windows (PowerShell)]
$env:ANTHROPIC_BASE_URL = "https://www.swixcode.com"
$env:ANTHROPIC_API_KEY = "sk-你的NewAPI令牌"
claude
```

```cmd [Windows (CMD)]
set ANTHROPIC_BASE_URL=https://www.swixcode.com
set ANTHROPIC_API_KEY=sk-你的NewAPI令牌
claude
```

:::

::: tip 持久化配置
将环境变量写入 Shell 配置文件，避免每次手动设置。

::: code-group

```bash [macOS (Zsh)]
echo 'export ANTHROPIC_BASE_URL="https://www.swixcode.com"' >> ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-你的NewAPI令牌"' >> ~/.zshrc
source ~/.zshrc
```

```bash [Linux (Bash)]
echo 'export ANTHROPIC_BASE_URL="https://www.swixcode.com"' >> ~/.bashrc
echo 'export ANTHROPIC_API_KEY="sk-你的NewAPI令牌"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows (PowerShell)]
# 写入用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.swixcode.com', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_API_KEY', 'sk-你的NewAPI令牌', 'User')
# 重新打开终端生效
```

:::

### 方式二：settings.json

Claude Code 支持通过 JSON 配置文件设置环境变量。

#### 全局配置

::: code-group

```json [macOS / Linux (~/.claude/settings.json)]
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://www.swixcode.com",
    "ANTHROPIC_API_KEY": "sk-你的NewAPI令牌"
  }
}
```

```json [Windows (%USERPROFILE%\.claude\settings.json)]
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://www.swixcode.com",
    "ANTHROPIC_API_KEY": "sk-你的NewAPI令牌"
  }
}
```

:::

#### 项目级配置

在项目根目录创建 `.claude/settings.json`（所有平台通用）：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://www.swixcode.com",
    "ANTHROPIC_API_KEY": "sk-你的NewAPI令牌"
  }
}
```

::: warning 安全提示
项目级配置文件可能被提交到 Git。务必在 `.gitignore` 中添加：

```
.claude/settings.json
```
:::

## 注意事项

### API 协议兼容性

Claude Code 使用 **Anthropic 原生协议**（`/v1/messages`），而非 OpenAI 格式。

New API 同时支持 Anthropic 和 OpenAI 格式，通常 **无需额外配置**。如果遇到问题，请确认你的 New API 渠道中已正确添加了 Anthropic 格式的渠道。

### Tool Search 功能

当 `ANTHROPIC_BASE_URL` 设置为非官方地址时，Claude Code 默认会 **禁用 MCP Tool Search** 功能。

如需重新启用：

::: code-group

```bash [macOS / Linux]
export ENABLE_TOOL_SEARCH=true
```

```powershell [Windows (PowerShell)]
$env:ENABLE_TOOL_SEARCH = "true"
```

:::

### 自定义请求头

如果你的 New API 网关需要额外的认证头：

::: code-group

```bash [macOS / Linux]
export ANTHROPIC_CUSTOM_HEADERS="X-Custom-Header: value"
```

```powershell [Windows (PowerShell)]
$env:ANTHROPIC_CUSTOM_HEADERS = "X-Custom-Header: value"
```

:::

## 验证

```bash
# 启动 Claude Code 并测试
claude "说 hello"
```

如果返回了正常回复，说明配置成功 🎉

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| `401 Unauthorized` | API Key 错误 | 检查令牌是否正确复制 |
| `404 Not Found` | Base URL 错误 | 确认地址末尾不要加 `/v1` |
| `Connection refused` | 网络不通 | 检查 New API 服务是否在线 |
| 模型不可用 | 令牌权限不足 | 在 New API 后台检查令牌的模型范围 |

## 进阶

如果你需要在 Claude Code 中使用多个模型提供商（如同时使用 Claude 和 GPT），推荐使用 [Claude Code Router](/advanced/router)。
