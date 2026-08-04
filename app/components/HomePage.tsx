import Link from "next/link";
import { Landscape, SiteShell, type Lang } from "./SiteShell";

const copy = {
  zh: {
    eyebrow:"DIGITAL IC · AI SYSTEMS · ARCHITECTURE", name:"刘绍飞", roman:"SHAOFEI LIU",
    lead:"格物以明理，造器以致用。", desc:"中国科学院大学计算技术研究所硕士研究生，聚焦数字 IC 设计、AI 软硬件协同、体系结构仿真与生成式模型压缩。",
    primary:"查看研究", secondary:"在线简历", verse:"知行合一 · 器以载道", focus:"研究与工程", focusEn:"FOCUS",
    cards:[
      ["数字 IC 设计","面向同步与异步电路、FIFO、状态机、流水线及存储器接口的 RTL 建模、综合与验证。"],
      ["AI 软硬件协同","围绕 AI 加速器、端侧计算和 PPA 评估，连接模型算法、体系结构与底层实现。"],
      ["生成式模型压缩","探索以 H.266/VVC 消除中间特征图的时空冗余，并实现 CUDA C++ 系统集成。"],
    ], quote:"在算法与器件之间，寻找可以被测量、被验证、被实现的路径。"
  },
  en: {
    eyebrow:"DIGITAL IC · AI SYSTEMS · ARCHITECTURE", name:"Shaofei Liu", roman:"刘 绍 飞",
    lead:"Understand through inquiry. Build for purpose.", desc:"M.Eng. student at the Institute of Computing Technology, University of Chinese Academy of Sciences, working across digital IC design, AI hardware–software co-design, architecture simulation, and generative-model compression.",
    primary:"Explore research", secondary:"View résumé", verse:"KNOW · BUILD · VERIFY", focus:"Research & Engineering", focusEn:"FOCUS",
    cards:[
      ["Digital IC Design","RTL modeling, synthesis, and verification for synchronous/asynchronous circuits, FIFOs, FSMs, pipelines, and memory interfaces."],
      ["AI Hardware–Software Co-Design","Connecting model algorithms, architecture, and implementation through accelerator design, edge computing, and PPA evaluation."],
      ["Generative Model Compression","Using H.266/VVC to remove spatiotemporal redundancy in intermediate features and integrating the pipeline in CUDA C++."],
    ], quote:"Between algorithms and silicon, I look for paths that can be measured, verified, and built."
  }
};

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return <SiteShell lang={lang} active="home">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">{c.eyebrow}</div>
        <h1>{c.name}</h1><span className="roman">{c.roman}</span>
        <p className="hero-lead">{c.lead}</p><p className="hero-desc">{c.desc}</p>
        <div className="actions"><Link className="btn primary" href={`/${lang}/research`}>{c.primary}</Link><Link className="btn ghost" href={`/${lang}/resume`}>{c.secondary}</Link></div>
      </div>
      <Landscape/><div className="vertical-verse">{c.verse}</div>
    </section>
    <section className="home-section">
      <div className="section-kicker">{c.focusEn}</div><h2 className="section-title">{c.focus}</h2>
      <div className="focus-grid">{c.cards.map((card,i)=><article className="focus-card" key={card[0]}><span className="num">0{i+1}</span><h3>{card[0]}</h3><p>{card[1]}</p></article>)}</div>
    </section>
    <div className="quote-band"><span className="mark">“</span><blockquote>{c.quote}</blockquote></div>
  </SiteShell>;
}
