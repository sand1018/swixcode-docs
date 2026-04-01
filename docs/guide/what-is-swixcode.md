# 什么是 SwixCode

**SwixCode** 是一个开源的 AI 模型统一网关平台，能将不同厂商的 AI API（OpenAI、Anthropic Claude、Google Gemini、DeepSeek、Midjourney 等）标准化为 **统一的 OpenAI 兼容接口**。

## 核心能力

| 能力 | 说明 |
|---|---|
| **统一接口** | 多厂商 API 统一为 OpenAI 格式，一套代码调用所有模型 |
| **智能路由** | 加权随机、轮询调度、失败自动重试 |
| **计费管理** | 按次/按量计费、倍率配置、在线充值 |
| **权限控制** | 用户分组、令牌管理、模型访问限制 |
| **数据看板** | 实时监控调用量、成本分析、系统状态 |
| **多租户** | 支持个人、团队、企业 SaaS 场景 |

## 本文档的目标

本文档 **不是** SwixCode 的部署运维文档。

本文档聚焦于：**如何将各种 AI 编程工具（CLI / IDE）配置为使用 SwixCode 作为 API 网关**。

适用工具：

- **终端 CLI**：Claude Code、Codex CLI、Gemini CLI
- **IDE 集成**：Cursor、Cline（VS Code）

## 工作原理

```
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐
│ Claude Code │     │             │     │   OpenAI API     │
│ Codex CLI   │────▶│   SwixCode   │────▶│   Anthropic API  │
│ Gemini CLI  │     │   (网关)     │     │   Gemini API     │
│ Cursor      │     │             │     │   DeepSeek API   │
│ Cline       │     │             │     │   ...            │
└─────────────┘     └─────────────┘     └──────────────────┘
    你的工具            统一入口             实际 AI 服务商
```

所有工具的请求都通过 SwixCode 统一转发，你只需要：

1. 一个 SwixCode 地址（Base URL）
2. 一个 SwixCode 令牌（API Key）

## 下一步

→ [快速开始：获取令牌并配置第一个工具](/guide/getting-started)
