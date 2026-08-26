import Link from "next/link";
import { SiteShell, type Lang } from "./SiteShell";

type HomeEntry = [kind: string, title: string, href: string];
type YearGroup = [year: string, rows: HomeEntry[]];

const zhEntries: YearGroup[] = [
  ["2025", [
    ["研究", "面向生成式模型的 VVC 张量压缩与计算旁路", "/zh/research"],
    ["项目", "硬件设计空间探索与 PPA 预测框架", "/zh/projects"],
  ]],
  ["2024", [
    ["项目", "数字电路设计与 FPGA 验证", "/zh/projects"],
  ]],
  ["2023", [
    ["年度总结", "2023 年回顾", "/zh/annual"],
  ]],
  ["2022", [
    ["年度总结", "2022 年回顾", "/zh/annual"],
  ]],
];

const enEntries: YearGroup[] = [
  ["2025", [
    ["Research", "VVC Tensor Compression & Compute Bypass for Generative Models", "/en/research"],
    ["Project", "ML-driven DSE and PPA Prediction", "/en/projects"],
  ]],
  ["2024", [
    ["Project", "Digital Circuit Design & FPGA Verification", "/en/projects"],
  ]],
];

export function HomePage({ lang }: { lang: Lang }) {
  const entries = lang === "zh" ? zhEntries : enEntries;
  const name = lang === "zh" ? "刘绍飞" : "Shaofei Liu";
  const sub =
    lang === "zh"
      ? "数字 IC 设计 · AI 软硬件协同 · 体系结构"
      : "Digital IC design · AI hardware–software co-design · Architecture";

  return (
    <SiteShell lang={lang} active="home">
      <header className="home-head">
        <h1>{name}</h1>
        <p className="home-sub">{sub}</p>
      </header>
      <hr className="leovan" />
      <div className="year-list">
        {entries.map(([year, rows]) => (
          <section key={year}>
            <h2 className="year">{year}</h2>
            {rows.map(([kind, title, href]) => (
              <p className="entry-row" key={`${year}-${title}`}>
                <span className="entry-kind">{kind}</span>{" "}
                <Link className="entry-title" href={href}>{title}</Link>
              </p>
            ))}
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
