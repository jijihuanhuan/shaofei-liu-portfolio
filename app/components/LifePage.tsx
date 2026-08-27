import { PageHero, SiteShell } from "./SiteShell";
import type { LifeItem } from "../data/life";

const base = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}`;

export function LifePage({
  kind,
  title,
  items,
  mode = "list",
}: {
  kind: "motorcycle" | "photography" | "cooking" | "friends";
  title: string;
  items: LifeItem[];
  mode?: "list" | "gallery";
}) {
  return (
    <SiteShell lang="zh" active={kind}>
      <PageHero title={title} />
      {items.length === 0 ? (
        <p className="empty-hint">内容待添加。</p>
      ) : mode === "gallery" ? (
        <div className="gallery">
          {items.map((item) => (
            <figure key={item.title}>
              <div className="gallery-img">
                {item.image && <img src={`${base}${item.image}`} alt={item.title} />}
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <section className="life-item" key={item.title}>
              {item.image && (
                <div className="life-thumb">
                  <img src={`${base}${item.image}`} alt={item.title} />
                </div>
              )}
              <h3>{item.link ? <a href={item.link}>{item.title}</a> : item.title}</h3>
              {item.date && <p className="life-date">{item.date}</p>}
              {item.description && <p>{item.description}</p>}
            </section>
          ))}
        </div>
      )}
    </SiteShell>
  );
}
