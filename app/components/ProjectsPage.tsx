import { PageHero, SiteShell, type Lang } from "./SiteShell";

const data = {
  zh: {
    title: "项目",
    heading: "项目经历",
    projects: [
      {
        name: "硬件设计空间探索与 PPA 预测框架",
        status: "研究项目 · 进行中",
        desc: "针对异构加速器设计周期较长的问题，构建从 C/C++ 源码直接预测硬件性能、功耗与面积的评估流程。",
        points: [
          "使用 gem5 搭建多核处理器与存储系统模型，并组织硬件平台—模拟器平台 PPA 数据对。",
          "使用 CACTI 建立缓存面积、功耗与延迟模型，形成可用于学习的 PPA 数据集。",
          "探索微调大模型提取 C/C++ 静态特征，学习源码到硬件指标的映射。",
        ],
        tags: "gem5 · CACTI · Python · C/C++ · LLM",
      },
      {
        name: "Agent生成体系结构模拟器和DSE空间探索",
        status: "工程项目 · 进行中",
        desc: "利用大模型 Agent 自动生成体系结构模拟器，并在生成结果上开展设计空间探索，缩短架构评估与迭代周期。",
        points: [
          "用 Agent 将架构描述转化为可运行的模拟器代码与配置，降低手工建模成本。",
          "在生成模拟器上组织参数空间搜索，评估不同架构点的性能、功耗与面积。",
          "对照 gem5 等参考模型校验生成模拟器，保证 DSE 结果可复现、可解释。",
        ],
        tags: "LLM Agent · Architecture Simulation · DSE · Python · gem5",
      },
      {
        name: "生成式模型的 VVC 张量压缩系统",
        status: "前沿研究 · 进行中",
        desc: "利用传统视频编码工具消除生成式模型中间特征的时空冗余，探索压缩与计算旁路的协同收益。",
        points: [
          "离线分析 Diffusion / Transformer 中间特征图的冗余结构。",
          "针对张量数据适配 VVenC / VVdeC，并开展编解码参数搜索。",
          "设计计算 Bypass 机制，推进 CUDA C++ 级系统集成与端到端评估。",
        ],
        tags: "H.266/VVC · CUDA C++ · Diffusion · Profiling",
      },
    ],
  },
  en: {
    title: "Projects",
    heading: "Projects",
    projects: [
      {
        name: "ML-driven DSE and PPA Prediction",
        status: "Research · In progress",
        desc: "A pipeline for predicting hardware performance, power, and area directly from C/C++ source code to shorten heterogeneous-accelerator exploration cycles.",
        points: [
          "Model multi-core processors and memory systems in gem5 and organize paired platform–simulator PPA data.",
          "Use CACTI to model cache area, power, and latency and construct a learning-ready PPA dataset.",
          "Explore fine-tuned language models for extracting static code features and mapping source code to hardware metrics.",
        ],
        tags: "gem5 · CACTI · Python · C/C++ · LLM",
      },
      {
        name: "Agent-Generated Architecture Simulators and DSE",
        status: "Engineering · In progress",
        desc: "Use LLM agents to auto-generate architecture simulators and run design-space exploration on the generated models, shortening architecture evaluation cycles.",
        points: [
          "Translate architecture descriptions into runnable simulator code and configurations via agents, reducing manual modeling effort.",
          "Search the design space on generated simulators to evaluate performance, power, and area across architecture points.",
          "Cross-check generated simulators against reference models such as gem5 so DSE results remain reproducible and interpretable.",
        ],
        tags: "LLM Agent · Architecture Simulation · DSE · Python · gem5",
      },
      {
        name: "VVC Tensor Compression for Generative Models",
        status: "Research · In progress",
        desc: "A system that uses video-coding tools to remove spatiotemporal redundancy in generative-model features and coordinate compression with compute bypass.",
        points: [
          "Profile redundancy in intermediate features of diffusion and Transformer models.",
          "Adapt tensors to VVenC / VVdeC and search codec parameters.",
          "Design compute-bypass operators and integrate the pipeline in CUDA C++ for end-to-end evaluation.",
        ],
        tags: "H.266/VVC · CUDA C++ · Diffusion · Profiling",
      },
    ],
  },
};

export function ProjectsPage({ lang }: { lang: Lang }) {
  const c = data[lang];
  return (
    <SiteShell lang={lang} active="projects">
      <PageHero title={c.title} />
      <h2>{c.heading}</h2>
      {c.projects.map((p) => (
        <section key={p.name}>
          <h3>{p.name}</h3>
          <p className="tag-line">{p.status}</p>
          <p>{p.desc}</p>
          <ul>
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          <p className="tag-line">{p.tags}</p>
        </section>
      ))}
    </SiteShell>
  );
}
