import { PageHero, SiteShell, type Lang } from "./SiteShell";

const data = {
  zh: {
    title: "研究",
    intro:
      "我关注 AI 计算中的冗余如何被发现、编码并转化为真实的系统收益。",
    directions: "核心研究方向",
    directionItems: [
      "生成式模型 × 视频编码：探索 H.266/VVC 对 Diffusion、Transformer 与视频生成模型中间特征的压缩能力。",
    ],
    current: "当前课题",
    currentTitle: "面向生成式模型的 H.266/VVC 张量压缩与计算旁路",
    currentDesc:
      "项目处于研究与原型开发阶段。当前工作包括特征图冗余分析、VVenC/VVdeC 数据适配、编解码参数搜索、Bypass 算子设计及 CUDA C++ 集成。实验结果将在验证后公开。",
  },
  en: {
    title: "Research",
    intro:
      "I study how redundancy in AI computation can be discovered, encoded, and converted into real system-level gains.",
    directions: "Core Directions",
    directionItems: [
      "Generative Models × Video Coding: explore H.266/VVC compression of intermediate features in diffusion, Transformer, and video-generation models.",
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
