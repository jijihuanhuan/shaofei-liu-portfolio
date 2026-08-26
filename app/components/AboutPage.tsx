import { PageHero, SiteShell } from "./SiteShell";

export function AboutPage() {
  return (
    <SiteShell lang="zh" active="about">
      <PageHero
        kicker="ABOUT"
        title="关于"
        description="工作中的我，与生活中的我。"
      />
      <div className="page-body about">
        <h2>我是谁？</h2>
        <p>
          我叫刘绍飞，河北石家庄人，2001 年 8 月生。中国科学院大学计算技术研究所电子信息专业硕士研究生，研究方向为数字 IC 设计、AI 软硬件协同、体系结构仿真与生成式模型压缩。想了解我的工作与研究，请看简历与研究页面；这一页，让你认识生活中的我。
        </p>

        <h2>喜欢啥？</h2>
        <p>喜欢沉下心做事，也喜欢在路上。下面的音乐、书籍与影视，记录我的一部分。</p>

        <h3>音乐</h3>
        <h4>民谣</h4>
        <p>喜欢安静的旋律与耐听的词，一首歌喜欢了，会去把整张专辑听完。</p>
        <h4>摇滚</h4>
        <p>偶尔也听一些经典摇滚，喜欢现场感与节奏里的力量。</p>

        <h3>书籍</h3>
        <p>技术书之外，也读一些闲书。人躁的时候，一本好书、一杯茶，就能让心静下来。</p>

        <h3>影视</h3>
        <p>偏爱剧情扎实、细节耐品的片子，也喜欢军事与历史题材；影视给的是比文字更直接的画面感。</p>
      </div>
    </SiteShell>
  );
}
