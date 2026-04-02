# ChatBox

[ChatBox](https://chatboxai.app) 是一款跨平台（macOS / Windows / Linux / iOS / Android）的 AI 对话桌面客户端，界面简洁，支持多种 API Provider。

::: info 跨平台
ChatBox 的配置通过 GUI 完成，**所有平台** 操作步骤一致。
:::

## 配置步骤

### 1. 打开设置

点击左下角 **⚙️ 设置**。

### 2. 添加自定义提供商

1. 进入 **「模型提供商」（Model Provider）**
2. 点击 **「+ 添加」** 添加自定义提供商

### 3. 填写配置

| 字段 | 值 | 说明 |
|---|---|---|
| **名称** | `SwixCode` | 自定义名称，方便识别 |
| **API 模式** | `OpenAI API Compatible` | 从下拉菜单选择 |
| **API Host** | `https://www.swixcode.com` | SwixCode 服务地址 |
| **API Path** | `/v1/chat/completions` | 通常留空即可（默认值） |
| **API Key** | `sk-你的SwixCode令牌` | SwixCode 令牌 |

::: warning Base URL 格式
ChatBox 会自动拼接路径，**不需要** 手动添加 `/v1`：

```
✅ https://www.swixcode.com
❌ https://www.swixcode.com/v1
```
:::

### 4. 获取模型

保存后，点击 **「获取模型列表」** 或手动输入模型名称：

```
claude-sonnet-4.6
gpt-5.4
gpt-5.4-mini
deepseek-v3
deepseek-r1
gemini-3.1-flash
```

### 5. 验证

在聊天界面选择 SwixCode 提供商，发送一条消息测试连接。

## 注意事项

### 多模态支持

ChatBox 支持发送图片进行对话。如果你在 SwixCode 中配置了支持视觉的模型（如 `gpt-5.4`、`claude-sonnet-4.6`），可以直接在聊天中上传图片。

### 流式输出

ChatBox 默认启用流式输出（Streaming）。SwixCode 原生支持流式响应，无需额外配置。

### 网络代理

如果需要通过代理访问 SwixCode，在 ChatBox 设置中的 **「网络」** 部分配置代理地址。

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| 连接失败 | API Host 格式错误 | 确认不要添加 `/v1` 后缀 |
| 认证失败 | API Key 错误 | 检查令牌是否正确复制 |
| 模型列表为空 | 自动获取失败 | 手动输入模型名称 |
| 图片发送失败 | 模型不支持多模态 | 切换到支持视觉的模型 |
