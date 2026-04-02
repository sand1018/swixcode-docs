# 快速开始

本指南将帮助你在 **5 分钟内** 完成一个 AI 编程工具的配置。

## 前提条件

- ✅ 你已有一个可用的 SwixCode 服务地址（`https://www.swixcode.com`）
- ✅ 你已有一个 SwixCode 的 **令牌（Token）**

::: tip 还没有令牌？
查看 [获取令牌](/guide/get-token) 了解如何创建。
:::

## 你需要的两个信息

| 信息 | 值 | 说明 |
|---|---|---|
| **Base URL** | `https://www.swixcode.com` | SwixCode 服务地址 |
| **API Key** | `sk-xxxxxxxxxxxxxxxx` | 你在 SwixCode 中创建的令牌 |

## 选择你的工具

### 终端 CLI 工具

| 工具 | 一行配置（macOS / Linux） | 详细教程 |
|---|---|---|
| **Claude Code** | `export ANTHROPIC_BASE_URL=https://www.swixcode.com` | [完整指南 →](/tools/claude-code) |
| **Codex CLI** | 编辑 `~/.codex/config.toml` 设置 `base_url` | [完整指南 →](/tools/codex-cli) |
| **Gemini CLI** | `export GEMINI_API_BASE_URL=https://www.swixcode.com` | [完整指南 →](/tools/gemini-cli) |

::: info Windows 用户
以上 `export` 命令适用于 macOS / Linux。Windows 用户请查看各工具的 [详细教程] 获取 PowerShell / CMD 配置方式。
:::

### IDE 集成

| 工具 | 配置方式 | 详细教程 |
|---|---|---|
| **Cursor** | Settings → Models → Override OpenAI Base URL | [完整指南 →](/tools/cursor) |
| **Cline** | 选择 OpenAI Compatible → 填入 Base URL | [完整指南 →](/tools/cline) |

### 桌面客户端

| 工具 | 配置方式 | 详细教程 |
|---|---|---|
| **ChatBox** | 添加自定义提供商 → OpenAI API Compatible | [完整指南 →](/tools/chatbox) |
| **Cherry Studio** | 模型服务 → 添加 OpenAI 类型提供商 | [完整指南 →](/tools/cherry-studio) |
| **NextChat** | 设置 → 自定义接口 → 填入 Base URL | [完整指南 →](/tools/nextchat) |
| **LobeChat** | 设置 → AI 服务商 → 填入 API 代理地址 | [完整指南 →](/tools/lobechat) |

## 验证配置

每个工具的详细教程中都包含了验证步骤。完成配置后，请参照对应工具页面的 **「验证」** 部分确认连接是否成功。

## 遇到问题？

- 查看 [故障排查](/advanced/troubleshooting)
- 查看 [常见问题](/faq/)
