import { PageHero, SiteShell } from "./SiteShell";

export function AboutPage() {
  return (
    <SiteShell lang="zh" active="about">
      <PageHero title="关于" />
      <div className="about">
        <h2>我是谁？</h2>
        <p>
          我叫刘绍飞，2001 年 8 月生。本科山大（威海），专业软件工程（已跑路），硕士计算所SKLP，研究方向为生成式模型推理加速和计算机体系结构模拟器。马上就是无业游民了，很高兴认识你。
        </p>

        <h2>喜欢啥？</h2>
        <p>喜欢沉下心做事，看看书，听听歌。</p>

        <h3>音乐</h3>
        我的网易云歌单:  https://163cn.tv/beggki83 那必须是蓝调和民谣
        <h4>民谣</h4>
        <p>什么时候网易云能直接分类啊</p>
        <h4>蓝调</h4>
        <p>什么时候能直接自动分类啊（其实有了，但是不准，我的耳朵就是尺）</p>

        <h3>书籍</h3>
        <p>晚上睡觉前不看手机看半小时书真的是不要太爽</p>

        <h3>影视</h3>
        <p>影视就得用大屏看，以前吃的都是什么粗粮</p>
      </div>
    </SiteShell>
  );
}
