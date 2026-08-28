import { PageHero, SiteShell } from "./SiteShell";

export function AnnualPage() {
  return (
    <SiteShell lang="zh" active="annual">
      <PageHero title="年度总结" />
      <div className="page-body">
      <section className="annual-block">
          <h2>2025 年回顾</h2>
          <h3>学习</h3>
          <p>上半年提心吊胆参加复试，毕业季也是happy又happy，研一被鞭子抽着打学了点东西，没兴趣</p>
          <h3>工作与实践</h3>
          <p>上半年无业游民，中间环保园实习，下半年出租屋到学校</p>
          <h3>运动</h3>
          <p>懒蛋一个</p>
          <ul>
            <li>优秀毕业生</li>
            <li>优秀班干部</li>
          </ul>
        </section>
        <section className="annual-block">
          <h2>2024 年回顾</h2>
          <h3>学习</h3>
          <p>考研一年，这是真学了</p>
          <h3>工作与实践</h3>
          <p>家教和兼职赚了点钱</p>
          <h3>运动</h3>
          <p>偶尔打球，一周运动量还在</p>
          <ul>
            <li>摩托车是玩儿爽了</li>
            <li>党员入了</li>
          </ul>
        </section>
        <section className="annual-block">
          <h2>2023 年回顾</h2>
          <h3>学习</h3>
          <p>学了好多东西，但是都忘了</p>
          <h3>工作与实践</h3>
          <p>当了家教，找了工作</p>
          <h3>运动</h3>
          <p>坚持健身，打球，参加了校运动会</p>
          <ul>
            <li>特长奖学金</li>
          </ul>
        </section>

        <section className="annual-block">
          <h2>2022 年回顾</h2>
          <h3>学习与考试</h3>
          <p>完成本科一年级下学期课程与期末考试，没挂科</p>
          <h3>科研与实践</h3>
          <p>在课题组与科研助理看了俩月论文，数学建模给人放鸽子了，水了个挑战杯和暑期社会实践</p>
          <h3>驾驶与生活</h3>
          <p>驾驶证考下来了，没咋练过</p>
          <h3>运动与体育</h3>
          <p>校田径队训练与校运动会</p>
          <h3>荣誉</h3>
          <ul>
            <li>特长奖学金</li>
            <li>校级优秀自训教官</li>
            <li>院级优秀班干部</li>
            <li>院级劳动之星</li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
