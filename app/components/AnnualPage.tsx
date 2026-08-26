import { PageHero, SiteShell } from "./SiteShell";

export function AnnualPage() {
  return (
    <SiteShell lang="zh" active="annual">
      <PageHero
        kicker="ANNUAL REVIEW"
        title="年度总结"
        description="以年为单位，记录走过的路与沉淀下来的东西。"
      />
      <div className="page-body">
        <section className="annual-block">
          <h2>2023 年回顾</h2>
          <h3>学习</h3>
          <p>完成数据库、Java、机器学习等课程与期末答辩；期末复习期间体会到规律作息、避免熬夜的重要。</p>
          <h3>工作与实践</h3>
          <p>担任家教，并推进专业实习与实习求职。</p>
          <h3>运动</h3>
          <p>坚持体育课、田径训练与健身，参加校运动会。</p>
        </section>

        <section className="annual-block">
          <h2>2022 年回顾</h2>
          <h3>学习与考试</h3>
          <p>完成本科一年级下学期课程与期末考试，全年保持程序设计、Linux、离散数学、电子技术基础等基础课程的学习节奏。</p>
          <h3>科研与实践</h3>
          <p>持续参与课题组与科研助理工作，尝试组建数学建模队伍，并参与云支教与校园志愿服务。</p>
          <h3>驾驶与生活</h3>
          <p>寒假通过驾驶证科目一、科目二，暑期完成科目四并取得驾驶证。</p>
          <h3>运动与体育</h3>
          <p>参加校田径队训练与校运动会，自 8 月起开始系统健身并长期坚持。</p>
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
