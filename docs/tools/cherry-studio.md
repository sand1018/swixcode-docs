# Cherry Studio

[Cherry Studio](https://cherry-ai.com) 是一款功能丰富的 AI 桌面客户端，支持多模型对话、知识库、AI 绘图等功能。

::: info 跨平台
Cherry Studio 支持 macOS / Windows / Linux，配置方式一致。
:::

## 配置步骤

### 1. 打开设置

点击左下角 **⚙️ 设置**。

### 2. 添加提供商

1. 进入 **「模型服务」** 标签
2. 点击底部 **「+ 添加」** 按钮

### 3. 填写配置

| 字段 | 值 | 说明 |
|---|---|---|
| **提供商名称** | `SwixCode` | 自定义名称 |
| **提供商类型** | `OpenAI` | 从下拉菜单选择 |
| **API 地址** | `https://www.swixcode.com` | SwixCode 服务地址 |
| **API Key** | `sk-你的SwixCode令牌` | SwixCode 令牌 |

::: warning Base URL 格式
Cherry Studio 会自动拼接路径，**不需要** `/v1` 后缀：

```
✅ https://www.swixcode.com
❌ https://www.swixcode.com/v1
```
:::

### 4. 启用并验证

1. 保存后，确保 **启用开关** 已打开
2. 点击 **「检查」** 按钮验证连接

### 5. 添加模型

点击 **「管理」** 添加可用模型：

- **自动获取**：点击 **「从服务获取」** 一键导入所有可用模型
- **手动添加**：点击 **「+ 添加」** 输入模型 ID

常见可用模型：

```
claude-sonnet-4.6
claude-haiku-4.6
gpt-5.4
gpt-5.4-mini
deepseek-v3
deepseek-r1
gemini-3.1-flash
```

::: tip 推荐使用自动获取
Cherry Studio 的自动获取功能可以直接拉取 SwixCode 后台所有已配置的模型，无需逐个手动输入。
:::

## 注意事项

### 知识库功能

Cherry Studio 支持知识库（RAG）功能。如果你的 SwixCode 配置了 Embedding 模型（如 `text-embedding-3-small`），可以在 Cherry Studio 中使用知识库进行增强对话。

### AI 绘图

如果 SwixCode 配置了图片生成模型（如 DALL·E），Cherry Studio 的 AI 绘图功能也可以通过 SwixCode 使用。

### 多模态支持

Cherry Studio 支持发送图片进行对话，需选择支持视觉的模型。

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| 连接检查失败 | API 地址或 Key 错误 | 检查配置是否正确 |
| 自动获取模型为空 | API 不支持 `/models` 端点 | 手动输入模型名称 |
| 启用开关无效 | 配置未保存 | 先保存再启用 |
| 知识库不可用 | 缺少 Embedding 模型 | 在 SwixCode 后台添加 Embedding 渠道 |
