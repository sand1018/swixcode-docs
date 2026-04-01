# Cursor

[Cursor](https://cursor.com) 是一款基于 VS Code 的 AI 驱动 IDE。它内置 AI 编程助手，支持通过自定义 Base URL 接入 SwixCode。

::: info 跨平台
Cursor 的配置通过 GUI 完成，**macOS / Windows / Linux** 操作步骤一致。
:::

## 配置步骤

### 1. 打开设置

| 平台 | 快捷键 |
|---|---|
| **macOS** | `Cmd + ,` |
| **Windows / Linux** | `Ctrl + ,` |

或点击右上角 ⚙️ 齿轮图标。

### 2. 进入模型设置

在设置页面中，切换到 **Models** 选项卡。

### 3. 添加 API Key

1. 找到 **OpenAI API Key** 部分
2. 点击 **Add OpenAI API Key**
3. 输入你的 SwixCode 令牌：`sk-你的SwixCode令牌`

### 4. 覆盖 Base URL

1. 找到并勾选 **Override OpenAI Base URL**
2. 在输入框中填入：

```
https://www.swixcode.com/v1
```

::: warning 注意末尾路径
Cursor 需要 `/v1` 后缀：

```
✅ https://www.swixcode.com/v1
❌ https://www.swixcode.com
```
:::

### 5. 添加模型

1. 点击 **+ Add Model**
2. 输入你想使用的模型名称（必须与 SwixCode 中配置的模型名一致）

常见可用模型：

```
gpt-5.4
gpt-5.4-mini
claude-sonnet-4.6
claude-haiku-4.6
deepseek-v3
deepseek-r1
```

3. 确保模型在列表中被 ✅ **勾选启用**

### 6. 验证

点击设置页面中的 **Verify** 按钮测试连接。

## 注意事项

### 禁用默认模型

如果遇到模型冲突，先取消勾选 Cursor 原有的模型（如官方 GPT-4o），只保留你通过 SwixCode 添加的模型。

### Agent 模式兼容性

Cursor 的 **Agent** 模式某些情况下会使用 OpenAI 特有的 "Responses API" 格式。如果在 Agent 模式下报错：

1. 先在 **Ask** (Chat) 模式下测试确认连接正常
2. 如果 Agent 模式仍有问题，可能需要等待 SwixCode 更新以支持该格式

### HTTP 兼容性

如果遇到连接错误（特别是流式输出异常），尝试：

**Settings → Network → HTTP Compatibility Mode** → 设为 **HTTP/1.1**

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| Verify 失败 | Base URL 或 API Key 错误 | 检查配置是否正确 |
| 模型列表为空 | 未添加自定义模型 | 手动添加模型名称 |
| 流式输出中断 | HTTP/2 不兼容 | 切换为 HTTP/1.1 模式 |
| Agent 模式报错 | API 格式不兼容 | 先用 Ask 模式测试 |
