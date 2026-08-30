import { PageHero, SiteShell, type Lang } from "./SiteShell";

type Block = {
  year: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

const zh: Block[] = [
  {
    year: "2025 年回顾",
    sections: [
      { heading: "学习", paragraphs: ["上半年提心吊胆参加复试，毕业季也是happy又happy，研一被鞭子抽着打学了点东西，没兴趣"] },
      { heading: "工作与实践", paragraphs: ["上半年无业游民，中间环保园实习，下半年出租屋到学校"] },
      { heading: "运动", paragraphs: ["懒蛋一个"], list: ["优秀毕业生", "优秀班干部"] },
    ],
  },
  {
    year: "2024 年回顾",
    sections: [
      { heading: "学习", paragraphs: ["考研一年，这是真学了"] },
      { heading: "工作与实践", paragraphs: ["家教和兼职赚了点钱"] },
      { heading: "运动", paragraphs: ["偶尔打球，一周运动量还在"], list: ["摩托车是玩儿爽了", "党员入了"] },
    ],
  },
  {
    year: "2023 年回顾",
    sections: [
      { heading: "学习", paragraphs: ["学了好多东西，但是都忘了"] },
      { heading: "工作与实践", paragraphs: ["当了家教，找了工作"] },
      { heading: "运动", paragraphs: ["坚持健身，打球，参加了校运动会"], list: ["特长奖学金"] },
    ],
  },
  {
    year: "2022 年回顾",
    sections: [
      { heading: "学习", paragraphs: ["完成本科一年级下学期课程与期末考试，没挂科"] },
      { heading: "工作与实践", paragraphs: ["在课题组与科研助理看了俩月论文，数学建模给人放鸽子了，水了个挑战杯和暑期社会实践"] },
      { heading: "运动", paragraphs: ["驾驶证考下来了，没咋练过", "校田径队训练与校运动会"] },
      { heading: "荣誉", paragraphs: [], list: ["特长奖学金", "校级优秀自训教官", "院级优秀班干部", "院级劳动之星"] },
    ],
  },
];

const en: Block[] = [
  {
    year: "2025 Review",
    sections: [
      { heading: "Study", paragraphs: ["Spent the first half of the year nervously preparing for the graduate-school interview, then enjoyed a lively graduation season; in my first graduate year I picked up a few things under pressure, though not always out of interest."] },
      { heading: "Work & Practice", paragraphs: ["Unemployed early in the year, then an internship at an environmental park; from the second half of the year, shuttling between a rented room and campus."] },
      { heading: "Sports", paragraphs: ["A bit of a couch potato."], list: ["Outstanding Graduate", "Outstanding Class Leader"] },
    ],
  },
  {
    year: "2024 Review",
    sections: [
      { heading: "Study", paragraphs: ["A full year of graduate-school entrance exam prep — this time I really studied."] },
      { heading: "Work & Practice", paragraphs: ["Earned some money through tutoring and part-time jobs."] },
      { heading: "Sports", paragraphs: ["Occasional basketball; kept a weekly dose of exercise."], list: ["Had a great time on the motorcycle", "Joined the CPC"] },
    ],
  },
  {
    year: "2023 Review",
    sections: [
      { heading: "Study", paragraphs: ["Learned a lot of things, then forgot most of them."] },
      { heading: "Work & Practice", paragraphs: ["Worked as a tutor and found a job."] },
      { heading: "Sports", paragraphs: ["Kept up gym and basketball, and took part in the campus sports meet."], list: ["Special Talent Scholarship"] },
    ],
  },
  {
    year: "2022 Review",
    sections: [
      { heading: "Study", paragraphs: ["Completed the second-semester courses and final exams of my first undergraduate year without failing anything."] },
      { heading: "Work & Practice", paragraphs: ["Read papers in a research group as a research assistant for two months, bailed on a math-modeling commitment, and coasted through a Challenge Cup and summer social practice."] },
      { heading: "Sports", paragraphs: ["Got my driver's license, then barely practiced.", "Trained with the varsity track team and took part in the campus sports meet."] },
      { heading: "Honors", paragraphs: [], list: ["Special Talent Scholarship", "Outstanding Self-Training Instructor (university-level)", "Outstanding Class Leader (college-level)", "Labor Star (college-level)"] },
    ],
  },
];

export function AnnualPage({ lang }: { lang: Lang }) {
  const blocks = lang === "zh" ? zh : en;
  return (
    <SiteShell lang={lang} active="annual">
      <PageHero title={lang === "zh" ? "年度总结" : "Annual Review"} />
      <div className="page-body">
        {blocks.map((b) => (
          <section className="annual-block" key={b.year}>
            <h2>{b.year}</h2>
            {b.sections.map((s) => (
              <div key={s.heading}>
                <h3>{s.heading}</h3>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && s.list.length > 0 && (
                  <ul>
                    {s.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
