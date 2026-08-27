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
        name: "数字电路设计与 FPGA 验证",
        status: "工程项目 · 已完成原型",
        desc: "面向高性能计算模块完成 RTL 实现、综合约束、覆盖率驱动验证与 FPGA 调试。",
        points: [
          "基于 Verilog 设计多时钟域异步 FIFO，处理跨时钟域数据传输。",
          "使用 Design Compiler 完成逻辑综合与 SDC 约束优化。",
          "通过 SystemVerilog 构建随机约束验证环境，并在 Xilinx FPGA 上完成时序收敛与硬件调试。",
        ],
        tags: "Verilog · SystemVerilog · Synopsys DC · FPGA",
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
        name: "Digital Circuit Design & FPGA Verification",
        status: "Engineering · Prototype complete",
        desc: "End-to-end RTL implementation, synthesis constraints, coverage-driven verification, timing closure, and FPGA debugging for a high-performance computing module.",
        points: [
          "Designed a multi-clock asynchronous FIFO in Verilog for clock-domain crossing.",
          "Performed logic synthesis and SDC constraint optimization with Design Compiler.",
          "Built a SystemVerilog constrained-random environment and completed timing closure and debugging on Xilinx FPGA.",
        ],
        tags: "Verilog · SystemVerilog · Synopsys DC · FPGA",
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
