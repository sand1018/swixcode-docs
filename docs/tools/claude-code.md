# Claude Code

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) 是 Anthropic 推出的终端 AI 编程助手。本文介绍如何将其配置为使用 SwixCode 转发请求。

## 安装

::: info 前置要求
- 操作系统：macOS、Linux 或 Windows
- 使用 SwixCode 网关无需 Anthropic 官方账户，只需 SwixCode 令牌即可
:::

### 方式一：原生安装器（推荐）

无需 Node.js 依赖，支持自动后台更新。

::: code-group

```bash [macOS / Linux]
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell [Windows (PowerShell)]
irm https://claude.ai/install.ps1 | iex
```

:::

### 方式二：npm 安装

需要 [Node.js](https://nodejs.org/) **v18** 或更高版本。

```bash
npm install -g @anthropic-ai/claude-code
```

::: tip 更新到最新版
```bash
npm install -g @anthropic-ai/claude-code@latest
```
:::

安装完成后，在终端输入 `claude` 即可启动。

## 配置方式

Claude Code 支持两种配置方式：**环境变量** 和 **settings.json**。

### 方式一：环境变量（推荐）

::: code-group

```bash [macOS (Zsh)]
export ANTHROPIC_BASE_URL="https://www.swixcode.com"
export ANTHROPIC_API_KEY="sk-你的SwixCode令牌"
claude
```

```bash [Linux (Bash)]
export ANTHROPIC_BASE_URL="https://www.swixcode.com"
export ANTHROPIC_API_KEY="sk-你的SwixCode令牌"
claude
```

```powershell [Windows (PowerShell)]
$env:ANTHROPIC_BASE_URL = "https://www.swixcode.com"
$env:ANTHROPIC_API_KEY = "sk-你的SwixCode令牌"
claude
```

```cmd [Windows (CMD)]
set ANTHROPIC_BASE_URL=https://www.swixcode.com
set ANTHROPIC_API_KEY=sk-你的SwixCode令牌
claude
```

:::

::: tip 持久化配置
将环境变量写入 Shell 配置文件，避免每次手动设置。
:::

::: code-group

```bash [macOS (Zsh)]
echo 'export ANTHROPIC_BASE_URL="https://www.swixcode.com"' >> ~/.zshrc
echo 'export ANTHROPIC_API_KEY="sk-你的SwixCode令牌"' >> ~/.zshrc
source ~/.zshrc
```

```bash [Linux (Bash)]
echo 'export ANTHROPIC_BASE_URL="https://www.swixcode.com"' >> ~/.bashrc
echo 'export ANTHROPIC_API_KEY="sk-你的SwixCode令牌"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows (PowerShell)]
# 写入用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://www.swixcode.com', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_API_KEY', 'sk-你的SwixCode令牌', 'User')
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
    "ANTHROPIC_API_KEY": "sk-你的SwixCode令牌"
  }
}
```

```json [Windows (%USERPROFILE%\.claude\settings.json)]
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://www.swixcode.com",
    "ANTHROPIC_API_KEY": "sk-你的SwixCode令牌"
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
    "ANTHROPIC_API_KEY": "sk-你的SwixCode令牌"
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

SwixCode 同时支持 Anthropic 和 OpenAI 格式，通常 **无需额外配置**。如果遇到问题，请确认你的 SwixCode 渠道中已正确添加了 Anthropic 格式的渠道。

### Tool Search 功能

当 `ANTHROPIC_BASE_URL` 设置为非官方地址时，Claude Code 默认会 **禁用 MCP Tool Search** 功能。

如需重新启用：

::: code-group

```bash
export ENABLE_TOOL_SEARCH=true
```

```powershell
$env:ENABLE_TOOL_SEARCH = "true"
```

:::

### 自定义请求头

如果你的 SwixCode 网关需要额外的认证头：

::: code-group

```bash
export ANTHROPIC_CUSTOM_HEADERS="X-Custom-Header: value"
```

```powershell
$env:ANTHROPIC_CUSTOM_HEADERS = "X-Custom-Header: value"
```

:::

## 验证

```bash
# 启动 Claude Code 并测试
claude "说 hello"
```

如果返回了正常回复，说明配置成功 🎉

## VSCode 扩展强制登录解决方案

如果 Claude Code 的 VSCode 扩展要求强制登录，可以通过以下方式解决：

### 1. 创建配置文件

在 `~/.claude/` 目录下创建 `config.json` 文件：

::: code-group

```bash
mkdir -p ~/.claude
touch ~/.claude/config.json
```

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude"
New-Item -ItemType File -Force -Path "$env:USERPROFILE\.claude\config.json"
```

:::

### 2. 添加配置内容

编辑 `config.json`，写入以下内容：

```json
{
  "primaryApiKey": "swixcode"
}
```

### 3. 重启 VSCode

重启 VSCode 使配置生效。重启后扩展将不再要求登录，直接使用 SwixCode 提供的 API。

::: warning 注意
此方法同时需要配合 `ANTHROPIC_BASE_URL` 环境变量使用，确保请求发送到 SwixCode 而非 Anthropic 官方服务器。
:::

## 常见问题

| 问题                   | 原因                   | 解决方案                                                         |
| ---------------------- | ---------------------- | ---------------------------------------------------------------- |
| `401 Unauthorized`   | API Key 错误           | 检查令牌是否正确复制                                             |
| `404 Not Found`      | Base URL 错误          | 确认地址末尾不要加 `/v1`                                       |
| `Connection refused` | 网络不通               | 检查 SwixCode 服务是否在线                                       |
| 模型不可用             | 令牌权限不足           | 在 SwixCode 后台检查令牌的模型范围                               |
| VSCode 扩展要求登录    | 未配置 `config.json` | 参考上方[VSCode 扩展强制登录解决方案](#vscode-扩展强制登录解决方案) |

## 进阶

如果你需要在 Claude Code 中使用多个模型提供商（如同时使用 Claude 和 GPT），推荐使用 [Claude Code Router](/advanced/router)。
