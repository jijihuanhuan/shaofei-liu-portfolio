import Link from "next/link";

export type Lang = "zh" | "en";
export type PageKey = "home" | "resume" | "research" | "projects";

const labels = {
  zh: { home: "首页", resume: "简历", research: "研究", projects: "项目", switch: "EN" },
  en: { home: "Home", resume: "Résumé", research: "Research", projects: "Projects", switch: "中" },
};

const paths: Record<PageKey, string> = { home: "", resume: "/resume", research: "/research", projects: "/projects" };

export function SiteShell({ lang, active, children }: { lang: Lang; active: PageKey; children: React.ReactNode }) {
  const other = lang === "zh" ? "en" : "zh";
  const l = labels[lang];
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
          <Link className="brand" href={`/${lang}`}>
            <span className="seal" aria-hidden="true">绍<br/>飞</span>
            <span className="brand-text">{lang === "zh" ? "刘绍飞" : "SHAOFEI LIU"}</span>
          </Link>
          <div className="nav-links">
            {(Object.keys(paths) as PageKey[]).map((key) => (
              <Link key={key} className={active === key ? "active" : ""} href={`/${lang}${paths[key]}`}>{l[key]}</Link>
            ))}
            <Link className="lang" href={`/${other}${paths[active]}`} aria-label={lang === "zh" ? "Switch to English" : "切换至中文"}>{l.switch}</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 {lang === "zh" ? "刘绍飞" : "Shaofei Liu"}</div>
          <div className="footer-verse">{lang === "zh" ? "格物以明理 · 造器以致用" : "Understand through inquiry · Build for purpose"}</div>
          <div>{lang === "zh" ? "河北石家庄 · 北京" : "Shijiazhuang · Beijing"}</div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <div className="page-hero"><div><div className="section-kicker">{kicker}</div><h1>{title}</h1></div><p>{description}</p></div>;
}

export function Landscape() {
  return <div className="landscape" aria-hidden="true"><div className="sun"/><div className="mount one"/><div className="mount two"/><div className="mount three"/><div className="mist"/></div>;
}
