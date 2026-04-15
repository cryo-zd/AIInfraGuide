# AIInfraGuide（内容持续更新中）

> 从零开始深入理解 AI Infra 的核心技术

**在线浏览：[https://caomaolufei.github.io/AIInfraGuide/](https://caomaolufei.github.io/AIInfraGuide/)**

AI Infra 正在成为大模型时代最关键的工程能力之一。本项目系统梳理从 GPU 硬件到分布式训练、从 CUDA 编程到推理优化的完整技术栈，帮助工程师构建扎实的 AI 基础设施知识体系。

<img src="https://caomaolufei.github.io/AIInfraGuide/images/AIinfraGuideWeb.png" alt="AIinfraGuideWeb" style="max-width: 100%; display: block; margin: 0 auto;" />

---

## 🗺️ AIInfra 学习路线

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 0 | [从零理解 AI Infra](https://caomaolufei.github.io/AIInfraGuide/guides/ai-infra-introduction/) | AI Infra 的定义、技术栈全貌与核心组件 |
| 1 | [AI Infra 学习路线](https://caomaolufei.github.io/AIInfraGuide/guides/ai-infra学习路线/) | 系统化的学习路径与知识图谱 |

## 📚 AIInfra 前置基础

### GPU 与硬件

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 1 | [GPU 基础知识：从硬件架构到 AI 计算](https://caomaolufei.github.io/AIInfraGuide/guides/前置知识/gpu/gpu-basics/) | CPU vs GPU、SM 架构、显存层级、Tensor Core、CUDA 编程模型 |
| 2 | [NVIDIA GPU 架构演进：从 Volta 到 Blackwell](https://caomaolufei.github.io/AIInfraGuide/guides/前置知识/gpu/nvidia-gpu-evolution/) | V100 → A100 → H100 → B200 架构演进与关键特性 |

### Transformer

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 3 | [Transformer 架构：快速入门篇](https://caomaolufei.github.io/AIInfraGuide/guides/前置知识/transformer/20-transformer架构入门/) | Encoder-Decoder 结构、Self-Attention 机制入门 |
| 4 | [AI Infra 工程师为什么必须懂 Transformer](https://caomaolufei.github.io/AIInfraGuide/guides/前置知识/transformer/21-ai-infra工程师为什么必须懂transformer/) | 从 Infra 视角理解 Transformer 的计算与显存特性 |
| 5 | [Transformer 全貌及代码实现](https://caomaolufei.github.io/AIInfraGuide/guides/前置知识/transformer/22-transformer全貌及代码实现/) | 完整 Transformer 架构拆解与 PyTorch 实现 |

## ⚡ CUDA 编程与算子优化

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 0 | [CUDA 编程入门指南](https://caomaolufei.github.io/AIInfraGuide/guides/cuda编程与算子优化/cuda编程入门指南/) | CUDA 编程模型、线程层级、内存模型与 Kernel 编写 |

## 🌐 分布式训练

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 1 | [PyTorch 分布式训练：从原理到实战](https://caomaolufei.github.io/AIInfraGuide/guides/分布式训练/pytorch-distributed/) | DDP、FSDP、ZeRO、通信原语、torchrun 多机训练 |

## 🚀 推理优化

| 序号 | 文章 | 说明 |
|:---:|------|------|
| 1 | [vLLM 快速入门](https://caomaolufei.github.io/AIInfraGuide/guides/推理优化/vllm/vllm快速入门/) | 从安装到部署你的第一个 LLM 推理服务 |

## 📊 性能分析

> 🚧 施工中，敬请期待...

---

## 项目结构

```
AIInfraGuide/
├── docs/                    # 内容文件（Markdown）
│   ├── guides/              # 知识库文章
│   │   ├── 前置知识/
│   │   │   ├── gpu/
│   │   │   └── transformer/
│   │   ├── CUDA编程与算子优化/
│   │   ├── 分布式训练/
│   │   └── 推理优化/
│   └── posts/               # 博客文章
├── src/                     # 网页代码
├── public/                  # 静态资源
└── astro.config.mjs         # Astro 配置
```

## 参与贡献

欢迎提交 Issue 和 Pull Request 来完善内容。

在 `docs/guides/` 对应分类目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "一句话描述"
pubDate: 2026-04-15
category: "distributed-training"
order: 2
tags: ["PyTorch", "分布式训练"]
---

正文内容...
```

**可选分类**：`learning-path` / `prerequisites` / `cuda-optimization` / `distributed-training` / `inference-optimization` / `performance-analysis`

## License

MIT
