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
const lifeKeys: PageKey[] = ["motorcycle", "photography", "cooking", "friends", "annual", "about"];
const zhKeys: PageKey[] = [...coreKeys, ...lifeKeys];
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

  const linkFor = (key: PageKey) => ({
    key,
    label: labels[key],
    href: `/${lang}${paths[key]}`,
  });

  const navItem = (key: PageKey) => {
    const l = linkFor(key);
    return (
      <li key={l.key}>
        <Link className={active === l.key ? "active" : ""} href={l.href}>
          {l.label}
        </Link>
      </li>
    );
  };

  const core = coreKeys.filter((k) => keys.includes(k));
  const life = lifeKeys.filter((k) => keys.includes(k));

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="side-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="side-slogan">
          <p>{slogan}</p>
        </div>
        <ul className="side-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          {core.map(navItem)}
          {life.length > 0 && <li className="block" key="sep1"><span>&nbsp;</span></li>}
          {life.map(navItem)}
        </ul>
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
        <nav className="topbar-nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          {core.map((k) => {
            const l = linkFor(k);
            return (
              <Link key={l.key} className={active === l.key ? "active" : ""} href={l.href}>
                {l.label}
              </Link>
            );
          })}
          {life.map((k) => {
            const l = linkFor(k);
            return (
              <Link key={l.key} className={active === l.key ? "active" : ""} href={l.href}>
                {l.label}
              </Link>
            );
          })}
          {isCore && (
            <Link className="topbar-lang" href={`/${other}${paths[active]}`}>
              {lang === "zh" ? "EN" : "中文"}
            </Link>
          )}
        </nav>
      </header>

      <div className="content">
        {children}
        <footer className="footer">
          <div>
            © 2026 {name} · {lang === "zh" ? "河北石家庄 · 北京" : "Shijiazhuang · Beijing"}
          </div>
        </footer>
      </div>
    </div>
  );
}

export function PageHero({ title }: { title: string }) {
  return (
    <>
      <header className="page-hero">
        <h1>{title}</h1>
      </header>
      <hr className="leovan" />
    </>
  );
}
