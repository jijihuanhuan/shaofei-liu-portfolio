import { PageHero, SiteShell, type Lang } from "./SiteShell";

const data = {
  zh: {
    title: "研究",
    intro:
      "我关注 AI 计算中的冗余如何被发现、编码并转化为真实的系统收益。研究跨越模型算子、压缩算法、体系结构仿真与 CUDA C++ 集成。",
    directions: "核心研究方向",
    directionItems: [
      "AI 软硬件协同设计：面向 AI 加速器与端侧计算，从模型特征、算子行为和硬件约束共同寻找设计空间。",
      "生成式模型 × 视频编码：探索 H.266/VVC 对 Diffusion、Transformer 与视频生成模型中间特征的压缩能力。",
      "体系结构建模与 PPA：通过 gem5、CACTI 及综合流程建立性能、功耗与面积的多层次评估链路。",
      "系统级集成与优化：以 CUDA C++、Profiling 和软硬件协同 Pipeline 将算法原型推进到可运行系统。",
    ],
    current: "当前课题",
    currentTitle: "面向生成式模型的 H.266/VVC 张量压缩与计算旁路",
    currentDesc:
      "项目处于研究与原型开发阶段。当前工作包括特征图冗余分析、VVenC/VVdeC 数据适配、编解码参数搜索、Bypass 算子设计及 CUDA C++ 集成。实验结果将在验证后公开。",
  },
  en: {
    title: "Research",
    intro:
      "I study how redundancy in AI computation can be discovered, encoded, and converted into real system-level gains. My work spans model operators, compression, architecture simulation, and CUDA C++ integration.",
    directions: "Core Directions",
    directionItems: [
      "AI Hardware–Software Co-Design: explore the joint design space of model characteristics, operator behavior, accelerators, and edge-computing constraints.",
      "Generative Models × Video Coding: investigate H.266/VVC compression of intermediate features in diffusion, Transformer, and video-generation models.",
      "Architecture Modeling & PPA: build multi-level performance, power, and area evaluation pipelines using gem5, CACTI, and synthesis flows.",
      "System Integration & Optimization: turn algorithmic prototypes into runnable systems with CUDA C++, profiling, and co-designed pipelines.",
    ],
    current: "Current Project",
    currentTitle: "H.266/VVC Tensor Compression and Compute Bypass for Generative Models",
    currentDesc:
      "This project is in the research and prototype stage. Current work covers feature-redundancy profiling, VVenC/VVdeC data adaptation, codec-parameter search, bypass operator design, and CUDA C++ integration. Results will be published after validation.",
  },
};

export function ResearchPage({ lang }: { lang: Lang }) {
  const c = data[lang];
  return (
    <SiteShell lang={lang} active="research">
      <PageHero title={c.title} />
      <p>{c.intro}</p>

      <h2>{c.directions}</h2>
      <ul>
        {c.directionItems.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2>{c.current}</h2>
      <h3>{c.currentTitle}</h3>
      <p>{c.currentDesc}</p>
    </SiteShell>
  );
}
