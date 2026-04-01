# Codex CLI

[Codex CLI](https://github.com/openai/codex) 是 OpenAI 推出的终端 AI 编程助手。它原生支持自定义 Provider，可以轻松接入 New API。

## 配置方式

Codex CLI 使用 TOML 配置文件进行配置。

### 第一步：编辑配置文件

::: code-group

```toml [macOS / Linux (~/.codex/config.toml)]
# 使用自定义 Provider
model_provider = "newapi"

[model_providers.newapi]
name = "New API Gateway"
# ⚠️ 注意：base_url 需要包含 /v1 后缀
base_url = "https://www.swixcode.com/v1"
# 环境变量名称（Codex 会从环境变量中读取此 Key）
env_key = "NEW_API_KEY"
```

```toml [Windows (%USERPROFILE%\.codex\config.toml)]
# 使用自定义 Provider
model_provider = "newapi"

[model_providers.newapi]
name = "New API Gateway"
# ⚠️ 注意：base_url 需要包含 /v1 后缀
base_url = "https://www.swixcode.com/v1"
# 环境变量名称（Codex 会从环境变量中读取此 Key）
env_key = "NEW_API_KEY"
```

:::

### 第二步：设置 API Key

::: code-group

```bash [macOS (Zsh)]
# 持久化
echo 'export NEW_API_KEY="sk-你的NewAPI令牌"' >> ~/.zshrc
source ~/.zshrc
```

```bash [Linux (Bash)]
# 持久化
echo 'export NEW_API_KEY="sk-你的NewAPI令牌"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows (PowerShell)]
# 永久写入用户环境变量
[System.Environment]::SetEnvironmentVariable('NEW_API_KEY', 'sk-你的NewAPI令牌', 'User')
# 重新打开终端生效
```

:::

### 第三步：验证

```bash
codex "说 hello"
```

## 使用特定模型

默认情况下，Codex CLI 会使用 Provider 的默认模型。你可以在启动时指定：

```bash
# 使用特定模型
codex --model gpt-5.4 "你的问题"

# 使用 DeepSeek 模型
codex --model deepseek-v3 "你的问题"
```

也可以在配置文件中设置默认模型：

```toml
model = "gpt-5.4"
model_provider = "newapi"

[model_providers.newapi]
name = "New API Gateway"
base_url = "https://www.swixcode.com/v1"
env_key = "NEW_API_KEY"
```

## 临时覆盖配置

不修改配置文件，通过命令行参数临时使用 New API：

```bash
codex \
  --config model_provider="newapi" \
  --config model_providers.newapi.base_url="https://www.swixcode.com/v1" \
  --config model_providers.newapi.env_key="NEW_API_KEY" \
  "你的问题"
```

## 注意事项

::: warning base_url 必须包含 /v1
与其他工具不同，Codex CLI 要求 `base_url` 包含 `/v1` 后缀：

```
✅ https://www.swixcode.com/v1
❌ https://www.swixcode.com
```
:::

### API 协议

Codex CLI 使用 **OpenAI Chat Completions** 格式（`/v1/chat/completions`）。New API 原生支持此格式，无需额外转换。

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| `401 Unauthorized` | API Key 未设置或错误 | 确认 `NEW_API_KEY` 环境变量已设置 |
| `Model not found` | 模型名称不匹配 | 在 New API 后台确认模型名称 |
| `Connection error` | base_url 格式错误 | 确认末尾包含 `/v1` |
| 响应超时 | 网络问题 | 检查到 New API 的网络连通性 |
