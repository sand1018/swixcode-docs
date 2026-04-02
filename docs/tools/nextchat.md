# NextChat

[NextChat](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)（原 ChatGPT-Next-Web）是一款流行的开源 AI 聊天界面，支持网页端和桌面端，可一键部署。

## 配置方式

NextChat 支持两种配置方式：**界面设置** 和 **环境变量**（适用于 Docker 部署）。

### 方式一：界面配置

1. 点击左下角 **⚙️ 设置**
2. 滚动到 **「自定义接口」** 部分
3. 勾选 **启用自定义接口**
4. 填写以下字段：

| 字段 | 值 | 说明 |
|---|---|---|
| **接口地址** | `https://www.swixcode.com` | SwixCode 服务地址 |
| **API Key** | `sk-你的SwixCode令牌` | SwixCode 令牌 |

5. 在 **「自定义模型名」** 中输入可用模型（逗号分隔）：

```
claude-sonnet-4.6,gpt-5.4,gpt-5.4-mini,deepseek-v3,deepseek-r1
```

::: warning Base URL 格式
NextChat 的接口地址通常 **不需要** `/v1` 后缀，应用会自动拼接：

```
✅ https://www.swixcode.com
❌ https://www.swixcode.com/v1（大部分情况不需要）
```

如果请求失败，再尝试加上 `/v1`。
:::

### 方式二：Docker 部署

通过环境变量在部署时配置：

```bash
docker run -d \
  -p 3000:3000 \
  -e BASE_URL=https://www.swixcode.com \
  -e OPENAI_API_KEY=sk-你的SwixCode令牌 \
  -e CUSTOM_MODELS=claude-sonnet-4.6,gpt-5.4,deepseek-v3 \
  yidadaa/chatgpt-next-web
```

#### Docker Compose

```yaml
version: '3'
services:
  nextchat:
    image: yidadaa/chatgpt-next-web
    ports:
      - "3000:3000"
    environment:
      - BASE_URL=https://www.swixcode.com
      - OPENAI_API_KEY=sk-你的SwixCode令牌
      - CUSTOM_MODELS=claude-sonnet-4.6,gpt-5.4,deepseek-v3
```

#### 环境变量说明

| 变量 | 说明 |
|---|---|
| `BASE_URL` | SwixCode 服务地址 |
| `OPENAI_API_KEY` | SwixCode 令牌 |
| `CUSTOM_MODELS` | 自定义模型列表，逗号分隔 |
| `PROXY_URL` | 可选，HTTP 代理地址 |

## 验证

部署完成后，访问 `http://localhost:3000`，选择模型并发送消息测试。

## 注意事项

### 访问密码

如果你需要保护 NextChat 实例，可以设置访问密码：

```bash
-e CODE=your-password
```

用户需要在设置页面输入密码后才能使用。

### 多模型切换

NextChat 支持在对话中随时切换模型。点击聊天界面顶部的模型名称即可选择其他模型。

## 常见问题

| 问题 | 原因 | 解决方案 |
|---|---|---|
| 请求失败 | Base URL 格式问题 | 尝试添加或移除 `/v1` |
| 认证失败 | API Key 错误 | 检查 `OPENAI_API_KEY` 值 |
| 模型不可用 | 未配置自定义模型 | 设置 `CUSTOM_MODELS` 或在界面中手动输入 |
| 页面空白 | 端口冲突 | 检查 3000 端口是否被占用 |
