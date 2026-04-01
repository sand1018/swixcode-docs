# Cline (VS Code)

[Cline](https://cline.bot) 是一款强大的 VS Code AI 编程扩展（原名 Claude Dev）。它支持多种 API Provider，可以轻松接入 SwixCode。

::: info 跨平台
Cline 的配置通过 VS Code GUI 完成，**macOS / Windows / Linux** 操作步骤一致。
:::

## 配置步骤

### 1. 安装 Cline

在 VS Code 扩展市场中搜索 **Cline** 并安装。

### 2. 打开 Cline 设置

1. 点击 VS Code 侧边栏的 Cline 图标
2. 点击面板右上角的 **⚙️ 齿轮图标**

### 3. 选择 API Provider

在 **API Provider** 下拉菜单中选择 **OpenAI Compatible**。

### 4. 填写配置

| 字段 | 值 | 说明 |
|---|---|---|
| **Base URL** | `https://www.swixcode.com/v1` | 需要 `/v1` 后缀 |
| **API Key** | `sk-你的SwixCode令牌` | SwixCode 令牌 |
| **Model ID** | `claude-sonnet-4.6` | 要使用的模型名称 |

### 5. 保存

点击 **Done** 或 **Save** 应用配置。

## 使用不同模型

你可以随时在 Cline 设置中切换 Model ID，常见可用模型：

```
claude-sonnet-4.6
claude-haiku-4.6
gpt-5.4
gpt-5.4-mini
deepseek-v3
deepseek-r1
```

::: tip
模型名称必须与你在 SwixCode 后台配置的模型名 **完全一致**。
:::

## 注意事项

### 网络代理

Cline 会自动继承 VS Code 的代理设置。如果你的网络环境需要代理：

1. 打开 VS Code 设置（`Cmd + ,` / `Ctrl + ,`）
2. 搜索 `http.proxy`
3. 填写代理地址

**不需要** 在 Cline 内部单独配置代理。

### Base URL 格式

```
✅ https://www.swixcode.com/v1
❌ https://www.swixcode.com（缺少 /v1）
❌ https://www.swixcode.com/v1/（多了尾部斜杠）
```

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| 无法连接 | Base URL 格式错误 | 确认包含 `/v1` 后缀 |
| 认证失败 | API Key 错误 | 检查令牌是否正确 |
| 模型不可用 | 模型名称不匹配 | 在 SwixCode 后台确认模型名 |
| 超时 | 网络问题 | 检查 VS Code 的代理设置 |
