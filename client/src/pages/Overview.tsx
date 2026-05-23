import { useLanguage } from "@/contexts/LanguageContext";
import { questions, CATEGORY_LABELS, MOTIVATION_LABELS, getResultStats, getCategoryDistribution, getMotivationDistribution, getDifficultyDistribution } from "@/data/questions";
import { Trophy, Minus, X, Clock, Target, BookOpen, Database, Heart, TrendingUp, AlertTriangle, CheckCircle2, BarChart3, Brain, Search, MessageCircle } from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";

// ============================================================
// 评测概览页 - 完整评测报告内容
// 设计风格：Swiss Fintech - 克制留白、精确数据、层次清晰
// ============================================================

const COLORS = {
  win: "#059669",
  lose: "#E11D48",
  tie: "#6B7280",
  pending: "#D97706",
  aime: "#4F46E5",
  competitor: "#9CA3AF",
};

// Hardcoded final results from user's evaluation
const FINAL_RESULTS = {
  aimeWins: 32,
  ties: 15,
  geminiWins: 11,
  total: 58,
};

// Dimension breakdown data
const DIMENSION_DATA_ZH = [
  { dimension: "定量分析", aimeWins: 11, ties: 3, geminiWins: 1, total: 15 },
  { dimension: "定性分析", aimeWins: 5, ties: 6, geminiWins: 4, total: 15 },
  { dimension: "数据检索", aimeWins: 12, ties: 1, geminiWins: 2, total: 15 },
  { dimension: "情绪引导", aimeWins: 4, ties: 5, geminiWins: 4, total: 13 },
];

const DIMENSION_DATA_EN = [
  { dimension: "Quantitative", aimeWins: 11, ties: 3, geminiWins: 1, total: 15 },
  { dimension: "Qualitative", aimeWins: 5, ties: 6, geminiWins: 4, total: 15 },
  { dimension: "Data Retrieval", aimeWins: 12, ties: 1, geminiWins: 2, total: 15 },
  { dimension: "Behavioral EQ", aimeWins: 4, ties: 5, geminiWins: 4, total: 13 },
];

export default function Overview() {
  const { t, lang } = useLanguage();
  const categoryDist = getCategoryDistribution();
  const motivationDist = getMotivationDistribution();
  const difficultyDist = getDifficultyDistribution();
  const dimensionData = lang === "zh" ? DIMENSION_DATA_ZH : DIMENSION_DATA_EN;

  // Pie data for final results
  const pieData = [
    { name: t("AIME 胜", "AIME Win"), value: FINAL_RESULTS.aimeWins, color: COLORS.win },
    { name: t("平局", "Tie"), value: FINAL_RESULTS.ties, color: COLORS.tie },
    { name: t("Gemini 胜", "Gemini Win"), value: FINAL_RESULTS.geminiWins, color: COLORS.lose },
  ];

  // Stacked bar data for dimension breakdown
  const dimensionBarData = dimensionData.map(d => ({
    name: d.dimension,
    [t("AIME胜", "AIME Win")]: d.aimeWins,
    [t("平局", "Tie")]: d.ties,
    [t("Gemini胜", "Gemini Win")]: d.geminiWins,
  }));

  // Difficulty distribution bar
  const difficultyBarData = Object.entries(difficultyDist)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([level, count]) => ({
      name: "\u2B50".repeat(Number(level)),
      [t("问题数", "Questions")]: count,
    }));

  // Motivation radar
  const radarData = Object.entries(motivationDist).map(([mot, count]) => ({
    subject: lang === "zh" ? mot : (MOTIVATION_LABELS[mot]?.en || mot),
    [t("问题数", "Questions")]: count,
    fullMark: 20,
  }));

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* ================================================================ */}
      {/* 1.1 评测目标 */}
      {/* ================================================================ */}
      <section>
        <SectionHeader
          number="1.1"
          title={t("评测目标", "Evaluation Objective")}
          icon={<Target className="w-5 h-5" />}
        />
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm mt-3">
          <p className="text-sm text-foreground leading-relaxed">
            {t(
              "旨在通过多维度的问题矩阵，对比 AIME 和 Gemini 3.5 Flash 面对欧美高净值/散户投资者在美股（重点为 AI 与半导体板块）、加密货币、大宗（黄金、白银、原油）等热门交易标的和个人财务规划中的交互回答表现。",
              "Through a multi-dimensional question matrix, comparing AIME and Gemini 3.5 Flash's interactive response performance for Western high-net-worth/retail investors across US equities (focusing on AI & semiconductor sectors), cryptocurrencies, commodities (gold, silver, crude oil) and personal financial planning."
            )}
          </p>
          <p className="text-sm text-foreground leading-relaxed mt-3">
            {t(
              "本评测体系建立在\"\u53cc向解构\"的坐标系之上：亲和理解力（UX/EQ）vs. 硬核金融数理模型（IQ）",
              "This evaluation framework is built on a 'dual deconstruction' coordinate system: User Empathy (UX/EQ) vs. Hardcore Financial Quantitative Models (IQ)"
            )}
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 1.2 评测对象 */}
      {/* ================================================================ */}
      <section>
        <SectionHeader
          number="1.2"
          title={t("评测对象", "Evaluation Subjects")}
          icon={<BookOpen className="w-5 h-5" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {/* AIME Card */}
          <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-xl border border-indigo-200 p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-sm">AI</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">AIME</h4>
                <p className="text-xs text-muted-foreground">{t("评测主体", "Primary Subject")}</p>
              </div>
            </div>
            <p className="text-xs text-foreground leading-relaxed">
              {t(
                "AInvest 旗下垂直金融大模型助手。核心技术特征为\"模型+金融数据库（Tool-Grounded Agent）\"，将自然语言编译为结构化 API 指令，穿透 SEC 申报文件、期权链、技术指标看板及实时行情。",
                "AInvest's vertical financial LLM assistant. Core technology: 'Model + Financial Database (Tool-Grounded Agent)', compiling natural language into structured API calls, penetrating SEC filings, options chains, technical indicator dashboards, and real-time quotes."
              )}
            </p>
          </div>

          {/* Gemini Card */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-xs">G</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Gemini 3.5 Flash</h4>
                <p className="text-xs text-muted-foreground">{t("对比标杆", "Benchmark")}</p>
              </div>
            </div>
            <p className="text-xs text-foreground leading-relaxed">
              {t(
                "Google 于 2025 年发布的最新一代快速推理模型。主打并行 Agent 编排、极速 TPS（每秒输出 Token 数）以及原生多模态上下文理解，在通用逻辑推理、代码运行（Code Interpreter）以及长文本重组方面代表了当前通用大模型的一线水平。",
                "Google's latest-generation fast reasoning model released in 2025. Features parallel Agent orchestration, ultra-fast TPS, and native multimodal context understanding, representing the frontier of general LLMs in logical reasoning, Code Interpreter, and long-text restructuring."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 1.3 样本规模与问句类型分布 */}
      {/* ================================================================ */}
      <section>
        <SectionHeader
          number="1.3"
          title={t("样本规模与问句类型分布", "Sample Size & Question Type Distribution")}
          icon={<Database className="w-5 h-5" />}
        />
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm mt-3">
          <p className="text-sm text-foreground leading-relaxed mb-4">
            {t(
              "本次评测共筛选并优化出 58 个高价值测试案例 (Cases)。在体系设计上，方案抛弃了传统的\"单点行情问答\"，转向结合 CFA 投资组合管理理论与行为金融学偏误控制的深度场景。",
              "This evaluation selected and optimized 58 high-value test cases. The framework abandons traditional 'single-point market Q&A', pivoting toward deep scenarios combining CFA portfolio management theory with behavioral finance bias control."
            )}
          </p>

          {/* Distribution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <DistributionCard
              icon={<BarChart3 className="w-4 h-4 text-blue-600" />}
              label={t("定量分析与数理计算", "Quantitative & Math")}
              count={15}
              percentage="25.9%"
              color="blue"
              description={t(
                "期权 Greeks、杠杆 ETF 损耗、资本利得税计算、洗售规则成本调整",
                "Options Greeks, leveraged ETF decay, capital gains tax, wash-sale cost basis"
              )}
            />
            <DistributionCard
              icon={<Brain className="w-4 h-4 text-amber-600" />}
              label={t("定性分析与逻辑推演", "Qualitative & Logic")}
              count={15}
              percentage="25.9%"
              color="amber"
              description={t(
                "光刻技术壁垒、HBM/GPU 博弈、公链共识权衡、美联储利率传导",
                "EUV lithography moats, HBM/GPU dynamics, blockchain consensus, Fed rate transmission"
              )}
            />
            <DistributionCard
              icon={<Search className="w-4 h-4 text-emerald-600" />}
              label={t("数据检索与异动扫描", "Scan & Verify")}
              count={15}
              percentage="25.9%"
              color="emerald"
              description={t(
                "SEC Form 4 穿透、链上代币解锁、暗池大宗交易、期权 Sweep 扫单",
                "SEC Form 4 penetration, on-chain token unlocks, dark pool trades, options sweeps"
              )}
            />
            <DistributionCard
              icon={<MessageCircle className="w-4 h-4 text-rose-600" />}
              label={t("情绪安慰与行为引导", "Behavioral & EQ")}
              count={13}
              percentage="22.4%"
              color="rose"
              description={t(
                "亏损厌恶、踏空焦虑 FOMO、报复性交易、信息茧房认知偏差干预",
                "Loss aversion, FOMO, revenge trading, information cocoon bias intervention"
              )}
            />
          </div>

          {/* Charts: Difficulty + Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-foreground mb-3">
                {t("难度等级分布", "Difficulty Distribution")}
              </h4>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={difficultyBarData} margin={{ bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey={t("问题数", "Questions")} fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-foreground mb-3">
                {t("核心动机覆盖", "Core Motivation Coverage")}
              </h4>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 20]} tick={{ fontSize: 9 }} />
                    <Radar
                      name={t("问题数", "Questions")}
                      dataKey={t("问题数", "Questions")}
                      stroke={COLORS.aime}
                      fill={COLORS.aime}
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 1.4 最终评测结论与可视化图表 */}
      {/* ================================================================ */}
      <section>
        <SectionHeader
          number="1.4"
          title={t("最终评测结论与可视化图表", "Final Evaluation Results & Visualizations")}
          icon={<TrendingUp className="w-5 h-5" />}
        />

        {/* 1.4.1 Overall Results */}
        <div className="mt-3 space-y-6">
          <h4 className="text-sm font-bold text-foreground">
            {t("1.4.1 总胜负对比", "1.4.1 Overall Results")}
          </h4>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5 text-center">
              <Trophy className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-700 font-mono">{FINAL_RESULTS.aimeWins}</div>
              <div className="text-xs text-emerald-600 mt-1">{t("AIME 胜出", "AIME Wins")} (55.2%)</div>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 text-center">
              <Minus className="w-6 h-6 text-gray-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-700 font-mono">{FINAL_RESULTS.ties}</div>
              <div className="text-xs text-gray-500 mt-1">{t("平局", "Ties")} (25.8%)</div>
            </div>
            <div className="bg-rose-50 rounded-xl border border-rose-200 p-5 text-center">
              <X className="w-6 h-6 text-rose-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-rose-700 font-mono">{FINAL_RESULTS.geminiWins}</div>
              <div className="text-xs text-rose-600 mt-1">{t("Gemini 3.5 胜出", "Gemini 3.5 Wins")} (19.0%)</div>
            </div>
          </div>

          {/* Result Pie + Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-sm">
              <h4 className="text-xs font-semibold text-foreground mb-3">
                {t("胜负比例分布", "Win/Loss Distribution")}
              </h4>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                      strokeWidth={0}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-muted-foreground">{item.name} ({item.value})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Findings */}
            <div className="lg:col-span-3 bg-card rounded-xl border border-border p-6 shadow-sm space-y-4">
              <h4 className="text-xs font-semibold text-foreground">
                {t("核心发现", "Key Findings")}
              </h4>
              <div className="space-y-3">
                <FindingItem
                  color="emerald"
                  icon={<CheckCircle2 className="w-4 h-4" />}
                  title={t("AIME 胜出 32 例（55.2%）", "AIME Wins 32 Cases (55.2%)")}
                  description={t(
                    "核心胜利点集中在需要实时、精准结构化数据支撑的场景。在需要直接检索底层 API（如 13F、Form 4、实时库存、高频期权链）和执行多因子筛股的场景中，AIME 表现出了极佳的准确性。",
                    "Core victories concentrated in scenarios requiring real-time, precise structured data support. AIME demonstrated excellent accuracy in scenarios requiring direct API retrieval (13F, Form 4, real-time inventory, high-frequency options chains) and multi-factor stock screening."
                  )}
                />
                <FindingItem
                  color="gray"
                  icon={<Minus className="w-4 h-4" />}
                  title={t("平局 15 例（25.8%）", "Ties 15 Cases (25.8%)")}
                  description={t(
                    "主要分布在经典的宏观分析逻辑梳理（如降息传导、地缘冲突对原油价格的影响）以及标准的期权公式、行为金融学基础知识科普上。",
                    "Mainly distributed in classic macro analysis logic (e.g., rate cut transmission, geopolitical impact on crude oil) and standard options formulas and behavioral finance fundamentals."
                  )}
                />
                <FindingItem
                  color="rose"
                  icon={<AlertTriangle className="w-4 h-4" />}
                  title={t("Gemini 3.5 胜出 11 例（19.0%）", "Gemini 3.5 Wins 11 Cases (19.0%)")}
                  description={t(
                    "核心胜利点集中在长文本多步骤推演、非结构化法律/政策文本提取以及充满同理心的行为财务学心理干预。",
                    "Core victories concentrated in long-text multi-step reasoning, unstructured legal/policy text extraction, and empathetic behavioral finance psychological intervention."
                  )}
                />
              </div>
            </div>
          </div>

          {/* 1.4.2 Dimension Breakdown */}
          <h4 className="text-sm font-bold text-foreground pt-4">
            {t("1.4.2 维度胜率细分对比", "1.4.2 Dimension-by-Dimension Performance")}
          </h4>
          <p className="text-xs text-muted-foreground">
            {t(
              "通过将 58 个问题拆解到 4 大需求动机中，可以更清晰地看到垂直金融模型与通用大模型的底层能力对决。",
              "By decomposing 58 questions into 4 core motivations, we can clearly see the fundamental capability showdown between vertical financial models and general LLMs."
            )}
          </p>

          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dimensionBarData} layout="vertical" margin={{ left: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={100} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey={t("AIME胜", "AIME Win")} stackId="a" fill={COLORS.win} radius={[0, 0, 0, 0]} />
                  <Bar dataKey={t("平局", "Tie")} stackId="a" fill={COLORS.tie} />
                  <Bar dataKey={t("Gemini胜", "Gemini Win")} stackId="a" fill={COLORS.lose} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 1.4.3 Dimension Deep Diagnosis */}
          <h4 className="text-sm font-bold text-foreground pt-4">
            {t("1.4.3 各维度评测结论深度诊断", "1.4.3 Dimension Deep Diagnosis")}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DiagnosisCard
              icon={<BarChart3 className="w-5 h-5 text-blue-600" />}
              dimension={t("定量分析与数理计算", "Quantitative & Math")}
              verdict={t("AIME 拥有极强的\"工程化查准率\"", "AIME has exceptional 'engineering precision'")}
              color="blue"
              description={t(
                "在涉及期权差价（Spreads）到期损益、杠杆损耗以及组合 VaR 计算时，AIME 表现优异。这得益于其底层能够将自然语言自动编译为具体的计算代码并调用行情数据库。而 Gemini 3.5 尽管可以通过内置的 Code Interpreter 编写 Python 脚本来完成计算，但在高频期权价格获取、个人报税时效对齐上，其无法实时获取最底层的标准化参数，容易因输入参数不准导致计算结果产生\"合理但错误\"的偏差。",
                "AIME excels in options spread P&L, leverage decay, and portfolio VaR calculations, thanks to its ability to compile natural language into computation code with real-time market data. Gemini 3.5, while capable of writing Python via Code Interpreter, cannot access real-time standardized parameters for high-frequency options pricing or tax timing alignment, leading to 'reasonable but incorrect' deviations."
              )}
            />
            <DiagnosisCard
              icon={<Brain className="w-5 h-5 text-amber-600" />}
              dimension={t("定性分析与逻辑推演", "Qualitative & Logic")}
              verdict={t("Gemini 3.5 展现了\"长链条思辨广度\"", "Gemini 3.5 shows 'long-chain reasoning breadth'")}
              color="amber"
              description={t(
                "在分析 AI 软件 SaaS 商业壁垒或公链技术路线博弈时，Gemini 3.5 Flash 的生成质量极高。其不仅响应速度极快（得益于 Flash 架构的 TPS 提升），而且能够熟练运用商业分析模型（如 LTV/CAC、Porter 五力模型）。相比之下，AIME 此时更像一个\"数据罗列器\"，在定性推论、商业模式的解构深度和行文流畅度上表现得较为教条。",
                "When analyzing AI SaaS business moats or blockchain technology roadmap dynamics, Gemini 3.5 Flash generates extremely high-quality content with fast response times. It skillfully applies business analysis models (LTV/CAC, Porter's Five Forces). In comparison, AIME acts more like a 'data lister', appearing formulaic in qualitative reasoning and business model deconstruction depth."
              )}
            />
            <DiagnosisCard
              icon={<Search className="w-5 h-5 text-emerald-600" />}
              dimension={t("数据检索与异动扫描", "Data Retrieval & Scan")}
              verdict={t("AIME 具备绝对的\"底层数据护城河\"", "AIME has absolute 'data infrastructure moat'")}
              color="emerald"
              description={t(
                "此维度 AIME 呈现压倒性优势。欧美散户对于 SEC Form 4 内部人减持、暗池交易、期权 Sweeps 扫单以及代币解锁等异动数据有着极高的时效要求。AIME 将此类数据直接做成了结构化实时看板，数据 100% 查准且支持穿透。而 Gemini 3.5 即使开启 Web Search，也只能在互联网上抓取到零散、延迟且充斥自媒体杂音的二次报道，在数据颗粒度上存在天然的代差。",
                "AIME shows overwhelming advantage here. Western retail traders demand extreme timeliness for SEC Form 4 insider changes, dark pool trades, options sweeps, and token unlocks. AIME provides structured real-time dashboards with 100% precision and drill-through capability. Gemini 3.5, even with Web Search enabled, can only scrape scattered, delayed secondary reports from the internet, with a natural generational gap in data granularity."
              )}
            />
            <DiagnosisCard
              icon={<Heart className="w-5 h-5 text-rose-600" />}
              dimension={t("情绪安慰与行为引导", "Behavioral & EQ")}
              verdict={t("Gemini 3.5 具有更高的\"情商与沟通张力\"", "Gemini 3.5 has higher 'EQ & communication depth'")}
              color="rose"
              description={t(
                "面对因套牢或爆仓而产生极端焦虑的散户，Gemini 3.5 展现出了极强的人文关怀与行为学纠偏智慧（如运用\"幸存者偏差\"解构 Discord 群组噪音，并提出务实的 1% 归零预算规则）。而 AIME 在此类场景下的回答往往局限于生硬、机械的免责声明或干瘪的数据警示，难以与处于情绪波动中的散户建立深层信任，存在一定的\"沟通摩擦感\"。",
                "Facing extremely anxious traders trapped in losses or margin calls, Gemini 3.5 demonstrates strong humanistic care and behavioral correction wisdom (e.g., using 'survivorship bias' to deconstruct Discord group noise, proposing pragmatic 1% zero-budget rules). AIME's responses in such scenarios are often limited to rigid disclaimers or dry data warnings, struggling to build deep trust with emotionally volatile traders."
              )}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Sub-components
// ============================================================

function SectionHeader({ number, title, icon }: { number: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <span className="text-xs font-mono text-muted-foreground">{number}</span>
        <h3 className="text-base font-bold text-foreground leading-tight">{title}</h3>
      </div>
    </div>
  );
}

function DistributionCard({ icon, label, count, percentage, color, description }: {
  icon: React.ReactNode; label: string; count: number; percentage: string; color: string; description: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100",
    amber: "bg-amber-50 border-amber-100",
    emerald: "bg-emerald-50 border-emerald-100",
    rose: "bg-rose-50 border-rose-100",
  };
  return (
    <div className={`rounded-lg border p-4 ${colorMap[color] || "bg-muted/30 border-border"}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-semibold text-foreground">{label}</span>
      </div>
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-2xl font-bold font-mono text-foreground">{count}</span>
        <span className="text-xs text-muted-foreground">Cases ({percentage})</span>
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FindingItem({ color, icon, title, description }: {
  color: string; icon: React.ReactNode; title: string; description: string;
}) {
  const colorMap: Record<string, string> = {
    emerald: "text-emerald-600",
    gray: "text-gray-500",
    rose: "text-rose-600",
  };
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 shrink-0 ${colorMap[color]}`}>{icon}</div>
      <div>
        <h5 className="text-xs font-bold text-foreground">{title}</h5>
        <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function DiagnosisCard({ icon, dimension, verdict, color, description }: {
  icon: React.ReactNode; dimension: string; verdict: string; color: string; description: string;
}) {
  const borderMap: Record<string, string> = {
    blue: "border-l-blue-500",
    amber: "border-l-amber-500",
    emerald: "border-l-emerald-500",
    rose: "border-l-rose-500",
  };
  return (
    <div className={`bg-card rounded-xl border border-border border-l-4 ${borderMap[color]} p-5 shadow-sm`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-bold text-foreground">{dimension}</span>
      </div>
      <p className="text-xs font-semibold text-foreground mb-2">{verdict}</p>
      <p className="text-[11px] text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
