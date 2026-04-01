# 常见问题

## 通用问题

### SwixCode 地址末尾要不要加 `/v1`？

**取决于工具**：

| 工具 | Base URL 格式 |
|---|---|
| Claude Code | `https://www.swixcode.com`（不加 `/v1`） |
| Codex CLI | `https://www.swixcode.com/v1`（需要 `/v1`） |
| Gemini CLI | `https://www.swixcode.com`（不加 `/v1`） |
| Cursor | `https://www.swixcode.com/v1`（需要 `/v1`） |
| Cline | `https://www.swixcode.com/v1`（需要 `/v1`） |

### 一个令牌可以同时给多个工具用吗？

**技术上可以**，但 **不推荐**。建议为每个工具创建独立的令牌，便于：
- 追踪各工具的用量
- 出问题时单独吊销
- 设置不同的额度上限

### 使用 SwixCode 会影响 AI 工具的功能吗？

大部分功能不受影响。但以下功能可能受限：

- **Claude Code 的 Tool Search**：用非官方 Base URL 时默认禁用，可通过 `ENABLE_TOOL_SEARCH=true` 重新启用
- **Cursor Agent 模式**：某些版本可能使用非标准 API 格式

## 模型相关

### 我可以通过 SwixCode 使用哪些模型？

取决于你的 SwixCode 管理员配置了哪些渠道。常见可用模型：

- OpenAI 系列：`gpt-5.4`、`gpt-5.4-mini`
- Anthropic 系列：`claude-sonnet-4.6`、`claude-haiku-4.6`
- Google 系列：`gemini-3.1-flash`、`gemini-3.1-pro`
- DeepSeek 系列：`deepseek-v3`、`deepseek-r1`

具体可用模型请咨询你的 SwixCode 管理员。

### 模型名称在 SwixCode 后台和工具中不一致怎么办？

你在工具中填写的模型名称必须与 **SwixCode 后台配置的模型名** 完全一致。如有疑问，在 SwixCode 后台的「渠道」或「模型」页面确认实际的模型 ID。

## 网络相关

### 我在公司内网，需要代理才能访问 SwixCode，怎么配置？

设置系统级 HTTP 代理：

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
```

大部分 CLI 工具和 IDE 会自动使用这些代理设置。

### 请求响应很慢怎么办？

1. 检查 SwixCode 和你之间的网络延迟
2. 在 SwixCode 后台查看渠道的响应时间
3. 尝试切换到延迟更低的模型（如 `gpt-5.4-mini`）

## 安全相关

### 我的 API Key 泄露了怎么办？

1. **立即** 到 SwixCode 后台吊销（禁用）该令牌
2. 创建新令牌
3. 更新所有工具的配置
4. 检查该令牌的使用日志，确认是否有异常调用
