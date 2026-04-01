# 故障排查

遇到配置问题？按以下步骤排查。

## 通用排查流程

### 第一步：确认 SwixCode 可达

```bash
# 测试网络连通性
curl -s https://www.swixcode.com/v1/models \
  -H "Authorization: Bearer sk-你的SwixCode令牌" | head -20
```

**预期结果**：返回 JSON 格式的模型列表。

如果失败：
- 检查 URL 是否正确
- 检查网络连接（是否需要代理/VPN）
- 确认 SwixCode 服务是否正在运行

### 第二步：确认令牌有效

```bash
# 发送一个简单请求
curl -s https://www.swixcode.com/v1/chat/completions \
  -H "Authorization: Bearer sk-你的SwixCode令牌" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4-mini",
    "messages": [{"role": "user", "content": "hi"}],
    "max_tokens": 5
  }'
```

**预期结果**：返回 AI 生成的回复。

### 第三步：确认环境变量生效

```bash
# 检查环境变量
echo $ANTHROPIC_BASE_URL
echo $ANTHROPIC_API_KEY
echo $SWIXCODE_API_KEY
echo $GEMINI_API_BASE_URL
```

如果为空，说明环境变量未正确设置。重新 `source` 你的 Shell 配置文件。

## 按工具排查

### Claude Code

```bash
# 查看 Claude Code 使用的配置
claude config list

# 检查 settings.json
cat ~/.claude/settings.json
```

常见错误：
- Base URL 末尾多了 `/v1`（Claude Code 通常不需要）
- `settings.json` 语法错误（缺少逗号、引号）

### Codex CLI

```bash
# 查看当前配置
cat ~/.codex/config.toml
```

常见错误：
- Base URL 末尾**缺少** `/v1`（Codex 需要）
- `env_key` 对应的环境变量未设置

### Cursor

常见错误：
- 未勾选 "Override OpenAI Base URL"
- 未手动添加模型名称
- HTTP/2 不兼容（切换为 HTTP/1.1）

### Cline

常见错误：
- API Provider 未选择 "OpenAI Compatible"
- Base URL 末尾有多余的 `/`

## 错误码速查

| HTTP 状态码 | 含义 | 排查方向 |
|---|---|---|
| `401` | 认证失败 | 检查 API Key / Token |
| `403` | 权限不足 | 检查令牌的模型访问范围 |
| `404` | 端点不存在 | 检查 Base URL 格式（有无 `/v1`） |
| `429` | 请求频率超限 | 等待或联系管理员调整限额 |
| `500` | 服务端错误 | 检查 SwixCode 服务状态 |
| `502/503` | 上游不可用 | SwixCode 连接的上游 AI 服务商可能宕机 |

## 仍然无法解决？

1. 查看 [常见问题](/faq/)
2. 在 [GitHub Issues](https://github.com/Calcium-Ion/new-api/issues) 中搜索类似问题
3. 带上错误日志和配置信息提交新 Issue
