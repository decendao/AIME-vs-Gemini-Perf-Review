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
  { dimension: "模拟计算", aimeWins: 11, ties: 3, geminiWins: 1, total: 15 },
  { dimension: "分析推演", aimeWins: 5, ties: 6, geminiWins: 4, total: 15 },
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
              "在设计思路上，我综合结合了问题常见度，计算复杂度，专业程度，跨界程度，以及情绪化程度等综合考量维度，确保58个问题能最大化个兼顾 1.考验模型综合能力  2.散户真实需求 3.体现我个人对金融理解 的样本代表",
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
                "Google最新一代快速推理模型。主打并行 Agent 编排、极速 TPS（每秒输出 Token 数）以及原生多模态上下文理解，在通用逻辑推理、代码运行（Code Interpreter）以及长文本重组方面代表了当前通用大模型的一线水平。",
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
          title={t("问题类型分布", "Sample Size & Question Type Distribution")}
          icon={<Database className="w-5 h-5" />}
        />
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm mt-3">
          <p className="text-sm text-foreground leading-relaxed mb-4">
            {t(
              "我先原创的准备了超过80个问题题库，借助Gemini按照我的设计思路进行打分和评价相似程度，最终筛选并优化出 58 个高价值测试问题。在设计思路上，我综合结合了问题常见度，计算复杂度，专业程度，跨界程度，以及情绪化程度等综合考量维度，确保58个问题能最大化个兼顾 1.考验模型综合能力  2.散户真实需求 3.体现我个人对金融理解 的样本代表。",
              "This evaluation selected and optimized 58 high-value test cases. The framework abandons traditional 'single-point market Q&A', pivoting toward deep scenarios combining CFA portfolio management theory with behavioral finance bias control."
            )}
          </p>

          {/* Distribution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <DistributionCard
              icon={<BarChart3 className="w-4 h-4 text-blue-600" />}
              label={t("模拟情景与金融计算", "Quantitative & Math")}
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
    </div>
  );
}
      {/* ================================================================ */}
    
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
