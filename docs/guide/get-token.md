# 获取令牌

在配置任何 AI 编程工具之前，你需要从 SwixCode 获取一个 **API 令牌（Token）**。

## 步骤

### 1. 登录 SwixCode 管理后台

在浏览器中访问：

```
https://www.swixcode.com
```

使用管理员提供的账号密码登录。

### 2. 进入令牌管理

登录后，在左侧菜单中点击 **「令牌」** 进入令牌管理页面。

### 3. 创建新令牌

点击 **「添加令牌」** 按钮，填写以下信息：

| 字段 | 建议 | 说明 |
|---|---|---|
| **名称** | `claude-code` 或 `my-cursor` | 起个有意义的名称，方便区分用途 |
| **过期时间** | 按需设置 | 不设置则永不过期 |
| **额度** | 按需设置 | 限制此令牌的最大使用额度 |
| **模型范围** | 选择需要的模型 | 限制此令牌可使用的模型 |

### 4. 复制令牌

创建成功后，点击 **「复制」** 按钮获取令牌。

::: warning 安全提示
令牌只会显示一次，请立即复制并妥善保管。不要将令牌提交到 Git 仓库或分享给他人。
:::

## 令牌格式

SwixCode 生成的令牌通常以 `sk-` 开头：

```
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 确认你的 Base URL

你的 Base URL 是：

```
https://www.swixcode.com
```

::: tip /v1 后缀
不同工具对 `/v1` 后缀的要求不同：

| 工具 | Base URL |
|---|---|
| Claude Code | `https://www.swixcode.com` |
| Codex CLI | `https://www.swixcode.com/v1` |
| Gemini CLI | `https://www.swixcode.com` |
| Cursor | `https://www.swixcode.com/v1` |
| Cline | `https://www.swixcode.com/v1` |
:::

## 下一步

拿到令牌后，选择你要配置的工具：

- [Claude Code](/tools/claude-code)
- [Codex CLI](/tools/codex-cli)
- [Gemini CLI](/tools/gemini-cli)
- [Cursor](/tools/cursor)
- [Cline](/tools/cline)
