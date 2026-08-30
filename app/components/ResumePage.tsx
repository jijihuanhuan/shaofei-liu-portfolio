import { PageHero, SiteShell, type Lang } from "./SiteShell";

const data = {
  zh: {
    title: "在线简历",
    name: "刘绍飞",
    photoAlt: "刘绍飞",
    basic: "基本信息",
    info: [
      ["出生", "2001年8月"],
      ["所在地", "河北石家庄"],
      ["政治面貌", "中共党员"],
      ["电话", "13646301702"],
      ["微信", "13102853505"],
    ],
    edu: "教育背景",
    education: [
      ["2025.09 — 至今", "中国科学院大学 · 计算技术研究所", "电子信息专业硕士研究生 · GPA 3.38"],
      ["2021.09 — 2025.06", "山东大学", "软件工程专业本科 · GPA 3.06"],
    ],
    skills: "专业技能",
    skillGroups: [
      ["扩散模型与生成式推理", "熟悉 Diffusion / Stable Diffusion 的推理流程，掌握 DDPM、DDIM 等采样方法与采样步数优化，理解 Classifier-Free Guidance 及 UNet / DiT 主干的推理计算开销；关注 Sora 类视频生成模型的时空冗余。"],
      ["生成式模型压缩与加速", "探索利用 H.266 / VVC 视频编码消除扩散模型中间特征图的时空冗余，开展张量压缩、编解码参数调优与计算旁路（Bypass）设计，降低推理计算量与访存。"],
      ["算子级改写与 CUDA C++ 优化", "使用 CUDA C++ 进行算子级改写与系统集成，结合 Profiling 定位推理瓶颈与特征图冗余，设计软硬件协同的推理 Pipeline。"],
      ["体系结构建模与 PPA 评估", "熟练使用 gem5、CACTI 进行架构级建模，评估端侧 / 边缘推理场景的性能、功耗与面积（PPA）；了解脉动阵列、FPGA 划分与端侧 LLM Scaling Laws。"],
      ["系统与自动化", "熟练使用 Linux 开发环境，可通过 Makefile、Shell 与 Python 脚本实现模型压缩与推理实验流程的自动化。"],
    ],
    projects: "项目经历",
    projectItems: [
      ["硬件设计空间探索DSE与 PPA 预测框架", "针对异构加速器设计周期较长的问题，构建从 C/C++ 源码到硬件性能、功耗和面积指标的快速评估流程。", "gem5 · CACTI · C/C++ · Python · LLM Fine-tuning"],
      ["扩撒模型推理加速", "使用硬件编解码器对扩散模型的权重进行压缩，并对特征图生成过程中的冗余信息进行复用和跳步计算，减少计算量和访存量", "Verilog · SystemVerilog · Design Compiler · Xilinx FPGA"],
    ],
    honors: "荣誉与社会经历",
    honorItems: [
      "中国科学院大学三好学生",
      "山东大学优秀毕业生",
      "山东大学优秀学生干部",
      "山东大学机电与信息工程学院优秀科研助理",
      "山东大学校田径队队长、田径协会会长，代表学校参加市级和省级赛事",
      "威海市铁人三项协会会员",
      "山东大学青年宣讲中心宣传部部长，负责日常宣讲与组织工作",
    ],
  },
  en: {
    title: "Résumé",
    name: "Shaofei Liu",
    photoAlt: "Shaofei Liu",
    basic: "Basic Information",
    info: [
      ["Born", "August 2001"],
      ["Location", "Shijiazhuang, Hebei"],
      ["Affiliation", "CPC Member"],
      ["Phone", "+86 136 4630 1702"],
      ["WeChat", "13102853505"],
    ],
    edu: "Education",
    education: [
      ["Sep 2025 — Present", "Institute of Computing Technology, UCAS", "M.Eng. in Electronic Information · GPA 3.38"],
      ["Sep 2021 — Jun 2025", "Shandong University", "B.Eng. in Software Engineering · GPA 3.06"],
    ],
    skills: "Technical Skills",
    skillGroups: [
      ["Diffusion Models & Generative Inference", "Familiar with diffusion and Stable Diffusion inference, including DDPM / DDIM samplers, step reduction, classifier-free guidance, and the compute profile of UNet / DiT backbones; attentive to spatiotemporal redundancy in Sora-style video generative models."],
      ["Generative Model Compression & Acceleration", "Exploring H.266/VVC-based compression of intermediate features to remove spatiotemporal redundancy in diffusion models, including tensor compression, codec-parameter tuning, and compute-bypass design to reduce inference compute and memory traffic."],
      ["Operator Rewriting & CUDA C++ Optimization", "Hands-on CUDA C++ for operator-level rewriting and system integration; uses profiling to locate inference bottlenecks and feature-map redundancy and to build hardware–software co-designed pipelines."],
      ["Architecture Modeling & PPA", "Proficient with gem5 and CACTI for architecture-level modeling and PPA evaluation in edge/on-device inference; familiar with systolic arrays, FPGA partitioning, and on-device LLM scaling laws."],
      ["Systems & Automation", "Linux development; Makefile, Shell, and Python scripting to automate model-compression and inference experiment workflows."],
    ],
    projects: "Selected Projects",
    projectItems: [
      ["Hardware Design Space Exploration (DSE) and PPA Prediction", "Built a rapid evaluation pipeline that maps C/C++ source code to performance, power, and area estimates for heterogeneous accelerator design exploration.", "gem5 · CACTI · C/C++ · Python · LLM Fine-tuning"],
      ["Diffusion Model Inference Acceleration", "Used hardware codecs to compress diffusion-model weights, and reused redundant information during feature-map generation with skip computation to reduce compute and memory traffic.", "Verilog · SystemVerilog · Design Compiler · Xilinx FPGA"],
    ],
    honors: "Honors & Leadership",
    honorItems: [
      "Merit Student, University of Chinese Academy of Sciences",
      "Outstanding Graduate, Shandong University",
      "Outstanding Student Leader, Shandong University",
      "Outstanding Research Assistant, School of Mechanical, Electrical & Information Engineering",
      "Captain of the university track and field team and president of its athletics association; represented the university in municipal and provincial competitions",
      "Member, Weihai Triathlon Association",
      "Publicity Director, Shandong University Youth Lecture Center",
    ],
  },
};

export function ResumePage({ lang }: { lang: Lang }) {
  const c = data[lang];
  return (
    <SiteShell lang={lang} active="resume">
      <PageHero title={c.title} />
      <h2>{c.name}</h2>

      <h2>{c.basic}</h2>
      <div className="basic-wrap">
        <ul className="basic-list">
          {c.info.map(([a, b]) => (
            <li key={a}>
              {a}：{b}
            </li>
          ))}
        </ul>
        <div className="basic-photo">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/portrait.jpg`} alt={c.photoAlt} />
        </div>
      </div>

      <h2>{c.edu}</h2>
      <ul>
        {c.education.map(([date, school, major]) => (
          <li key={school}>
            {date}　{school}，{major}
          </li>
        ))}
      </ul>

      <h2>{c.skills}</h2>
      {c.skillGroups.map(([title, desc]) => (
        <section key={title}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </section>
      ))}

      <h2>{c.projects}</h2>
      {c.projectItems.map(([title, desc, tags]) => (
        <section key={title}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p className="tag-line">{tags}</p>
        </section>
      ))}

      <h2>{c.honors}</h2>
      <ul>
        {c.honorItems.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </SiteShell>
  );
}
