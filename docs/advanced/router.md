# Claude Code Router (CCR)

当你需要在 Claude Code 中 **使用多个模型提供商**（如同时走 Claude、GPT、DeepSeek）或需要 **自动协议转换** 时，推荐使用 [Claude Code Router](https://github.com/musistudio/claude-code-router)。

## 什么是 CCR

CCR 是一个本地代理服务，作为 Claude Code 和 SwixCode 之间的 **中间层**：

```
Claude Code  →  CCR (本地:3456)  →  SwixCode  →  AI 服务商
```

它解决了以下痛点：

- ✅ **协议转换**：自动处理 Anthropic ↔ OpenAI 格式转换
- ✅ **多 Provider 路由**：不同模型走不同的后端
- ✅ **故障转移**：主 Provider 不可用时自动切换
- ✅ **模型映射**：将 Claude Code 请求的模型名映射到实际模型

## 安装

::: info 前提条件
Node.js >= 18
:::

```bash
npm install -g @musistudio/claude-code-router
```

## 配置

创建配置文件 `~/.claude-code-router/config.json`：

```json
{
  "APIKEY": "your-local-access-key",
  "Providers": [
    {
      "name": "newapi",
      "api_base_url": "https://www.swixcode.com/v1",
      "api_key": "sk-你的SwixCode令牌",
      "models": [
        "claude-sonnet-4.6",
        "claude-haiku-4.6",
        "gpt-5.4",
        "deepseek-v3"
      ],
      "transformer": {
        "use": ["openai"]
      }
    }
  ],
  "Router": {
    "default": "newapi"
  }
}
```

### 配置说明

| 字段 | 说明 |
|---|---|
| `APIKEY` | CCR 本地访问密钥（自定义，用于 Claude Code 连接 CCR） |
| `Providers[].api_base_url` | SwixCode 地址（需要 `/v1`） |
| `Providers[].api_key` | SwixCode 令牌 |
| `Providers[].models` | 此 Provider 支持的模型列表 |
| `Providers[].transformer` | 协议转换器（`openai` = 转为 OpenAI 格式） |
| `Router.default` | 默认使用的 Provider 名称 |

## 启动

```bash
# 启动 CCR 服务
ccr start

# 查看日志
ccr logs
```

CCR 默认监听 `http://127.0.0.1:3456`。

## 连接 Claude Code

启动 Claude Code 时，将其指向 CCR：

```bash
export ANTHROPIC_BASE_URL="http://127.0.0.1:3456"
export ANTHROPIC_API_KEY="your-local-access-key"
claude
```

或写入 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://127.0.0.1:3456",
    "ANTHROPIC_API_KEY": "your-local-access-key"
  }
}
```

## 多 Provider 路由示例

当你有多个 API 来源时，可以配置智能路由：

```json
{
  "APIKEY": "local-key",
  "Providers": [
    {
      "name": "provider-a",
      "api_base_url": "https://api-a.example.com/v1",
      "api_key": "sk-aaa",
      "models": ["claude-sonnet-4.6", "claude-haiku-4.6"]
    },
    {
      "name": "provider-b",
      "api_base_url": "https://api-b.example.com/v1",
      "api_key": "sk-bbb",
      "models": ["gpt-5.4", "deepseek-v3"]
    }
  ],
  "Router": {
    "default": "provider-a",
    "model_routes": {
      "gpt-5.4": "provider-b",
      "deepseek-v3": "provider-b"
    }
  }
}
```
