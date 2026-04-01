# 安全最佳实践

在使用 SwixCode 网关时，请遵循以下安全建议。

## API Key 管理

### ✅ 推荐做法

1. **使用环境变量存储 Key**，不要硬编码在脚本或配置文件中

```bash
# ✅ 使用环境变量
export ANTHROPIC_API_KEY="sk-xxx"

# ❌ 不要写在脚本里
# claude --api-key "sk-xxx"
```

2. **为不同工具创建不同的令牌**，方便追踪和吊销

```
sk-claude-code-xxx   → Claude Code 专用
sk-cursor-xxx        → Cursor 专用
sk-codex-xxx         → Codex CLI 专用
```

3. **设置令牌额度限制**，避免意外消耗

4. **定期轮换令牌**

### ❌ 一定不要

- 将 API Key 提交到 Git 仓库
- 在公共频道分享 API Key
- 使用同一令牌给所有工具和用户

## .gitignore 配置

确保以下文件不会被提交：

```gitignore
# Claude Code
.claude/settings.json

# Codex CLI
.codex/

# Gemini CLI
.gemini/settings.json

# 通用
.env
.env.local
```

## HTTPS

- ✅ 始终使用 HTTPS 连接 SwixCode
- ❌ 避免在生产环境使用 HTTP

```bash
# ✅ 安全
export ANTHROPIC_BASE_URL="https://www.swixcode.com"

# ❌ 不安全
export ANTHROPIC_BASE_URL="http://www.swixcode.com"
```

## 最小权限原则

在 SwixCode 后台创建令牌时：

- 只授权**需要的模型**，不要勾选全部
- 设置合理的**额度上限**
- 设置**过期时间**（适用于临时使用场景）
