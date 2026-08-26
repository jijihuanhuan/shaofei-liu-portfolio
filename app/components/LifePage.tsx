import { PageHero, SiteShell } from "./SiteShell";
import type { LifeItem } from "../data/life";

const base = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}`;

function Thumb({ src, alt }: { src?: string; alt: string }) {
  if (!src) return <div className="life-thumb" />;
  return (
    <div className="life-thumb">
      <img src={`${base}${src}`} alt={alt} />
    </div>
  );
}

export function LifePage({
  kind,
  kicker,
  title,
  description,
  items,
  mode = "list",
}: {
  kind: "motorcycle" | "photography" | "cooking" | "friends";
  kicker: string;
  title: string;
  description: string;
  items: LifeItem[];
  mode?: "list" | "gallery";
}) {
  return (
    <SiteShell lang="zh" active={kind}>
      <PageHero kicker={kicker} title={title} description={description} />
      <div className="page-body">
        {items.length === 0 ? (
          <p className="empty-hint">内容待添加。</p>
        ) : mode === "gallery" ? (
          <div className="gallery">
            {items.map((item) => (
              <figure key={item.title}>
                <div className="gallery-img">
                  {item.image ? (
                    <img src={`${base}${item.image}`} alt={item.title} />
                  ) : (
                    <span />
                  )}
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="life-list">
            {items.map((item) => (
              <article className="life-item" key={item.title}>
                <Thumb src={item.image} alt={item.title} />
                <div>
                  <h3>{item.link ? <a href={item.link}>{item.title}</a> : item.title}</h3>
                  {item.date && <span className="life-date">{item.date}</span>}
                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </SiteShell>
  );
}
