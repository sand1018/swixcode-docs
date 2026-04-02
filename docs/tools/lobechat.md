# LobeChat

[LobeChat](https://lobehub.com) 是一款现代化的开源 AI 聊天框架，支持丰富的插件生态、多模型对话和知识库功能。

## 配置方式

LobeChat 支持两种配置方式：**界面设置** 和 **环境变量**（适用于 Docker 部署）。

### 方式一：界面配置

1. 打开 LobeChat，进入 **⚙️ 设置**
2. 切换到 **「语言模型」** / **「AI 服务商」** 标签
3. 找到 **OpenAI** 提供商配置
4. 填写以下字段：

| 字段 | 值 | 说明 |
|---|---|---|
| **API Key** | `sk-你的SwixCode令牌` | SwixCode 令牌 |
| **API 代理地址** | `https://www.swixcode.com/v1` | 需要 `/v1` 后缀 |

5. 保存后在聊天界面选择模型即可使用

::: warning Base URL 格式
LobeChat 的代理地址 **需要** `/v1` 后缀：

```
✅ https://www.swixcode.com/v1
❌ https://www.swixcode.com
```

如果 AI 返回空消息，检查是否缺少 `/v1`。
:::

### 方式二：Docker 部署

```bash
docker run -d \
  -p 3210:3210 \
  -e OPENAI_API_KEY=sk-你的SwixCode令牌 \
  -e OPENAI_PROXY_URL=https://www.swixcode.com/v1 \
  lobehub/lobe-chat
```

#### Docker Compose

```yaml
version: '3'
services:
  lobechat:
    image: lobehub/lobe-chat
    ports:
      - "3210:3210"
    environment:
      - OPENAI_API_KEY=sk-你的SwixCode令牌
      - OPENAI_PROXY_URL=https://www.swixcode.com/v1
```

#### 环境变量说明

| 变量 | 说明 |
|---|---|
| `OPENAI_API_KEY` | SwixCode 令牌 |
| `OPENAI_PROXY_URL` | SwixCode 服务地址（需含 `/v1`） |
| `OPENAI_MODEL_LIST` | 可选，自定义模型列表 |
| `ACCESS_CODE` | 可选，访问密码 |

## 验证

部署完成后，访问 `http://localhost:3210`，选择模型并发送消息测试。

## 注意事项

### 插件生态

LobeChat 内置丰富的插件（网页搜索、文件上传、代码执行等）。这些插件不依赖 API 提供商，配置 SwixCode 后可正常使用。

### 多模型并行对话

LobeChat 支持在同一会话中切换不同模型进行对比。你可以通过 SwixCode 同时接入 Claude、GPT、DeepSeek 等模型并随时切换。

### 知识库（RAG）

LobeChat 支持知识库功能。如果你的 SwixCode 配置了 Embedding 模型，可以开启知识库增强对话。

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| AI 返回空消息 | 缺少 `/v1` 后缀 | 在代理地址末尾添加 `/v1` |
| 认证失败 | API Key 错误 | 检查令牌是否正确 |
| 插件不可用 | 与 API 无关 | 检查 LobeChat 插件设置 |
| 页面无法访问 | 端口冲突 | 检查 3210 端口是否被占用 |
