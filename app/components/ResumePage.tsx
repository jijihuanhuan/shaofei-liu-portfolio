import { PageHero, SiteShell, type Lang } from "./SiteShell";
import { PrintButton } from "./PrintButton";

const data = {
  zh: {
    kicker:"CURRICULUM VITAE", title:"在线简历", desc:"数字 IC 设计、体系结构仿真与 AI 软硬件协同方向。页面支持浏览器打印为 PDF。",
    photoAlt:"刘绍飞", info:[["出生","2001年8月"],["所在地","河北石家庄"],["政治面貌","中共党员"],["电话","13646301702"],["微信","13102853505"]],
    edu:"教育背景", skills:"专业技能", projects:"项目经历", honors:"荣誉与社会经历",
    education:[
      ["2025.09 — 至今","中国科学院大学 · 计算技术研究所","电子信息专业硕士研究生 · GPA 3.38"],
      ["2021.09 — 2025.06","山东大学","软件工程专业本科 · GPA 3.06"],
    ],
    skillGroups:[
      ["硬件描述与验证","熟练使用 Verilog，熟悉 VHDL，可完成 RTL 建模与 Testbench 编写；具备 SystemVerilog 随机约束与覆盖率驱动验证实践，了解 UVM 方法学。"],
      ["数字芯片设计基础","掌握同步/异步电路、时钟与复位、状态机、FIFO、流水线、仲裁逻辑、寄存器及存储器接口设计。"],
      ["EDA 工具链","熟悉 Synopsys / Cadence 工具体系，具备 Design Compiler 综合与 SDC 约束经验，了解 PrimeTime 时序分析及形式验证。"],
      ["体系结构与仿真","熟练使用 gem5、CACTI 进行架构级建模，具备 DRAM / 3D NAND 存储系统建模经验；使用 Python、C++ 与 CUDA C++。"],
      ["系统与自动化","熟练使用 Linux 开发环境，可通过 Makefile、Shell 与 Python 脚本实现 EDA 流程自动化。"],
    ],
    projectItems:[
      ["硬件设计空间探索与 PPA 预测框架","针对异构加速器设计周期较长的问题，构建从 C/C++ 源码到硬件性能、功耗和面积指标的快速评估流程。","gem5 · CACTI · C/C++ · Python · LLM Fine-tuning"],
      ["数字电路设计与 FPGA 验证","实现多时钟域异步 FIFO，完成逻辑综合、SDC 约束优化、随机约束验证，并在 Xilinx FPGA 上进行时序收敛与硬件调试。","Verilog · SystemVerilog · Design Compiler · Xilinx FPGA"],
    ],
    honorItems:["山东大学优秀毕业生","山东大学优秀学生干部","山东大学机电与信息工程学院优秀科研助理","山东大学校田径队队长、田径协会会长，代表学校参加市级和省级赛事","威海市铁人三项协会会员","山东大学青年宣讲中心宣传部部长，负责日常宣讲与组织工作"],
  },
  en: {
    kicker:"CURRICULUM VITAE", title:"Résumé", desc:"Digital IC design, architecture simulation, and AI hardware–software co-design. This page is optimized for browser-to-PDF printing.",
    photoAlt:"Shaofei Liu", info:[["Born","August 2001"],["Location","Shijiazhuang, Hebei"],["Affiliation","CPC Member"],["Phone","+86 136 4630 1702"],["WeChat","13102853505"]],
    edu:"Education", skills:"Technical Skills", projects:"Selected Projects", honors:"Honors & Leadership",
    education:[
      ["Sep 2025 — Present","Institute of Computing Technology, UCAS","M.Eng. in Electronic Information · GPA 3.38"],
      ["Sep 2021 — Jun 2025","Shandong University","B.Eng. in Software Engineering · GPA 3.06"],
    ],
    skillGroups:[
      ["HDL & Verification","Proficient in Verilog and familiar with VHDL; RTL modeling and testbench development; hands-on experience with SystemVerilog constrained-random and coverage-driven verification; familiar with UVM concepts."],
      ["Digital Design","Synchronous/asynchronous circuits, clock and reset design, FSMs, FIFOs, pipelines, arbitration, register interfaces, and memory interfaces."],
      ["EDA Toolchain","Synopsys/Cadence flows; hands-on logic synthesis and SDC constraint work with Design Compiler; familiar with PrimeTime timing analysis and formal verification."],
      ["Architecture & Simulation","gem5 and CACTI modeling; DRAM and 3D NAND system experience; Python, C++, and CUDA C++."],
      ["Systems & Automation","Linux development, Makefile, Shell, and Python scripting for EDA workflow automation."],
    ],
    projectItems:[
      ["ML-driven DSE and PPA Prediction","Built a rapid evaluation pipeline that maps C/C++ source code to performance, power, and area estimates for heterogeneous accelerator design exploration.","gem5 · CACTI · C/C++ · Python · LLM Fine-tuning"],
      ["Digital Circuit Design & FPGA Verification","Implemented a multi-clock asynchronous FIFO; performed synthesis, SDC optimization, constrained-random verification, FPGA timing closure, and hardware debugging.","Verilog · SystemVerilog · Design Compiler · Xilinx FPGA"],
    ],
    honorItems:["Outstanding Graduate, Shandong University","Outstanding Student Leader, Shandong University","Outstanding Research Assistant, School of Mechanical, Electrical & Information Engineering","Captain of the university track and field team and president of its athletics association","Member, Weihai Triathlon Association","Publicity Director, Shandong University Youth Lecture Center"],
  }
};

export function ResumePage({ lang }: { lang: Lang }) {
  const c=data[lang];
  return <SiteShell lang={lang} active="resume"><PageHero kicker={c.kicker} title={c.title} description={c.desc}/><div className="page-body resume-grid">
    <aside className="profile-card"><div className="photo-frame"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/portrait.jpg`} alt={c.photoAlt}/></div><div className="contact-list">{c.info.map(([a,b])=><div key={a}><strong>{a}</strong>{b}</div>)}</div><PrintButton label={lang==="zh"?"浏览器打印 / PDF":"Print / Save PDF"}/></aside>
    <div className="resume-main">
      <section><h2>{c.edu}</h2>{c.education.map(([date,title,desc])=><div className="entry" key={title}><div className="date">{date}</div><div><h3>{title}</h3><p>{desc}</p></div></div>)}</section>
      <section><h2>{c.skills}</h2>{c.skillGroups.map(([title,desc])=><div className="skill-block" key={title}><h3>{title}</h3><p>{desc}</p></div>)}</section>
      <section><h2>{c.projects}</h2>{c.projectItems.map(([title,desc,tags])=><div className="skill-block" key={title}><h3>{title}</h3><p>{desc}</p><div className="tag-list">{tags.split(" · ").map(x=><span className="tag" key={x}>{x}</span>)}</div></div>)}</section>
      <section><h2>{c.honors}</h2><ul className="honors">{c.honorItems.map(x=><li key={x}>{x}</li>)}</ul></section>
    </div>
  </div></SiteShell>;
}
