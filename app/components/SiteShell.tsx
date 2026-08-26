import Link from "next/link";

export type Lang = "zh" | "en";
export type PageKey =
  | "home"
  | "resume"
  | "research"
  | "projects"
  | "motorcycle"
  | "photography"
  | "cooking"
  | "annual"
  | "about"
  | "friends";

const zhLabels: Record<PageKey, string> = {
  home: "首页",
  resume: "简历",
  research: "研究",
  projects: "项目",
  motorcycle: "摩托车",
  photography: "摄影",
  cooking: "烹饪",
  annual: "年度总结",
  about: "关于",
  friends: "挚友",
};

const enLabels: Record<PageKey, string> = {
  home: "Home",
  resume: "Résumé",
  research: "Research",
  projects: "Projects",
  motorcycle: "",
  photography: "",
  cooking: "",
  annual: "",
  about: "",
  friends: "",
};

const paths: Record<PageKey, string> = {
  home: "",
  resume: "/resume",
  research: "/research",
  projects: "/projects",
  motorcycle: "/motorcycle",
  photography: "/photography",
  cooking: "/cooking",
  annual: "/annual",
  about: "/about",
  friends: "/friends",
};

const coreKeys: PageKey[] = ["home", "resume", "research", "projects"];
const zhKeys: PageKey[] = [...coreKeys, "motorcycle", "photography", "cooking", "annual", "about", "friends"];
const enKeys: PageKey[] = coreKeys;

export function SiteShell({
  lang,
  active,
  children,
}: {
  lang: Lang;
  active: PageKey;
  children: React.ReactNode;
}) {
  const labels = lang === "zh" ? zhLabels : enLabels;
  const keys = lang === "zh" ? zhKeys : enKeys;
  const other = lang === "zh" ? "en" : "zh";
  const isCore = coreKeys.includes(active);

  const name = lang === "zh" ? "刘绍飞" : "Shaofei Liu";
  const slogan =
    lang === "zh" ? "学会独处，连接世界" : "Learn to be alone, connect to the world";
  const avatar = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/portrait.jpg`;

  const nav = (extraClass: string, activeClass: string) =>
    keys.map((key) => (
      <Link
        key={key}
        className={`${extraClass}${active === key ? ` ${activeClass}` : ""}`}
        href={`/${lang}${paths[key]}`}
      >
        {labels[key]}
      </Link>
    ));

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="side-brand">
          <div className="side-avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="side-name">{name}</div>
          <div className="side-slogan">{slogan}</div>
        </div>
        <nav className="side-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          {nav("", "active")}
        </nav>
        <div className="side-foot">
          <div>© 2026 {name}</div>
          {isCore && (
            <Link className="side-lang" href={`/${other}${paths[active]}`}>
              {lang === "zh" ? "EN" : "中文"}
            </Link>
          )}
        </div>
      </aside>

      <header className="topbar">
        <div className="topbar-head">
          <div className="topbar-avatar">
            <img src={avatar} alt={name} />
          </div>
          <div>
            <div className="topbar-name">{name}</div>
            <div className="topbar-slogan">{slogan}</div>
          </div>
        </div>
        <nav className="topbar-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          {nav("", "active")}
          {isCore && (
            <Link className="topbar-lang" href={`/${other}${paths[active]}`}>
              {lang === "zh" ? "EN" : "中文"}
            </Link>
          )}
        </nav>
      </header>

      <main className="main">
        <div className="content">{children}</div>
        <footer className="footer">
          <div>© 2026 {name} · {lang === "zh" ? "河北石家庄 · 北京" : "Shijiazhuang · Beijing"}</div>
        </footer>
      </main>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-hero">
      <div className="page-kicker">{kicker}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
