import { useLanguage } from "@/contexts/LanguageContext";
import { getResultStats } from "@/data/questions";
import {
  AlertTriangle, CheckCircle2, Lightbulb, Target,
  TrendingUp, TrendingDown, ArrowRight, Sparkles
} from "lucide-react";

// ============================================================
// 评测结论页 - 问题定义、优劣势总结、改进方案
// 设计风格：Swiss Fintech - 结构化卡片、清晰层级
// ============================================================

interface Problem {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  severity: "high" | "medium" | "low";
  category: string;
  categoryEn: string;
  solution: string;
  solutionEn: string;
}

// Mock 问题定义数据（待用户数据替换）
const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "趋势预测过于确定性",
    titleEn: "Overly Deterministic Predictions",
    description: "在涉及市场走势预测的问题中，AIME倾向于给出确定性结论，缺乏多情景分析和不确定性表达，可能误导投资者。",
    descriptionEn: "AIME tends to give deterministic conclusions in market prediction questions, lacking multi-scenario analysis and uncertainty expression.",
    severity: "high",
    category: "趋势预测",
    categoryEn: "Trend Prediction",
    solution: "引入概率化表达框架，对预测类问题强制输出乐观/中性/悲观三种情景及其概率权重，并明确标注预测的置信度区间。",
    solutionEn: "Introduce probabilistic expression framework with mandatory optimistic/neutral/pessimistic scenarios and confidence intervals.",
  },
  {
    id: 2,
    title: "风险提示不够充分",
    titleEn: "Insufficient Risk Warnings",
    description: "在投资建议类回答中，AIME的风险提示往往放在末尾且篇幅较短，不够醒目，可能导致用户忽视潜在风险。",
    descriptionEn: "Risk warnings in investment advice are often brief and placed at the end, potentially causing users to overlook risks.",
    severity: "high",
    category: "投资组合建议",
    categoryEn: "Portfolio Advice",
    solution: "将风险提示前置并视觉强化，采用结构化风险评级（高/中/低），并在给出具体标的推荐时强制附带止损建议和最大回撤预警。",
    solutionEn: "Front-load risk warnings with visual emphasis, use structured risk ratings, and mandate stop-loss suggestions with max drawdown alerts.",
  },
  {
    id: 3,
    title: "纯推理场景无差异化优势",
    titleEn: "No Differentiation in Pure Reasoning",
    description: "在金融知识问答和纯逻辑推理场景中，AIME与通用大模型表现相当，未能体现专业金融AI的差异化价值。",
    descriptionEn: "In financial knowledge Q&A and pure reasoning, AIME performs similarly to general LLMs without showing differentiated value.",
    severity: "medium",
    category: "金融知识问答",
    categoryEn: "Financial Knowledge",
    solution: "在知识类回答中融入实时市场数据验证和实际案例关联，将静态知识转化为动态洞察。例如解释可转债强赎时，同步展示当前市场中即将触发强赎的具体标的。",
    solutionEn: "Integrate real-time market data validation and case studies into knowledge answers, transforming static knowledge into dynamic insights.",
  },
  {
    id: 4,
    title: "缺乏同行业横向对比",
    titleEn: "Lacking Peer Comparison",
    description: "在个股分析中，AIME往往只给出单一标的的数据，缺少同行业或同板块的横向对比视角，限制了分析的深度。",
    descriptionEn: "Single-stock analysis lacks peer comparison perspective, limiting analytical depth.",
    severity: "medium",
    category: "风险评估",
    categoryEn: "Risk Assessment",
    solution: "在个股分析回答中自动补充行业均值对比和同板块TOP5标的的关键指标对照表，帮助用户建立相对估值视角。",
    solutionEn: "Auto-append industry average comparison and top-5 peer metrics table in single-stock analysis.",
  },
  {
    id: 5,
    title: "响应时间在复杂查询中偏长",
    titleEn: "Slow Response for Complex Queries",
    description: "在涉及大量数据筛选和计算的复杂查询中（如全市场股票筛选），AIME的响应时间超过50秒，影响用户体验。",
    descriptionEn: "Response time exceeds 50s for complex queries involving large-scale data filtering, affecting user experience.",
    severity: "low",
    category: "数据查询与筛选",
    categoryEn: "Data Query & Filtering",
    solution: "实施渐进式响应策略：先快速返回部分结果和进度指示，再逐步补全完整数据。同时优化后端数据索引和缓存策略。",
    solutionEn: "Implement progressive response: return partial results quickly with progress indicators, then complete data incrementally.",
  },
];

export default function Conclusion() {
  const { t, lang } = useLanguage();
  const stats = getResultStats();

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {t("评测结论", "Evaluation Conclusion")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("基于对比评测的问题定义与改进方案", "Problem identification and improvement proposals based on evaluation")}
        </p>
      </div>

      {/* Overall Verdict */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {t("总体评价", "Overall Assessment")}
            </h3>
            <p className="mt-2 text-sm text-foreground leading-relaxed">
              {t(
                `在 ${stats.total} 个投资场景测试中，AIME 以 ${stats.wins}胜${stats.ties}平${stats.losses}负 的成绩显著领先 Gemini 3.5 Flash（胜率 ${((stats.wins / stats.total) * 100).toFixed(0)}%）。AIME 的核心竞争力在于实时金融数据接入能力和专业数据库的广度覆盖，这使其在数据查询、行情分析、实时报价等场景中具有压倒性优势。但在纯推理、趋势预测和知识问答等不依赖实时数据的场景中，AIME 需要进一步强化差异化能力。`,
                `In ${stats.total} investment scenario tests, AIME significantly leads Gemini 3.5 Flash with ${stats.wins}W-${stats.ties}D-${stats.losses}L (${((stats.wins / stats.total) * 100).toFixed(0)}% win rate). AIME's core competitiveness lies in real-time financial data access and comprehensive database coverage. However, in scenarios not relying on real-time data (reasoning, prediction, knowledge Q&A), AIME needs to further strengthen differentiation.`
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-card rounded-xl border border-emerald-100 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4" />
            {t("AIME 核心优势", "AIME Core Strengths")}
          </h3>
          <div className="space-y-3">
            {[
              t("实时金融数据接入，信息时效性远超通用模型", "Real-time financial data access far exceeding general models"),
              t("全量A股数据库覆盖，筛选查询完整准确", "Complete A-share database coverage with accurate filtering"),
              t("金融专业术语理解准确，意图解析精准", "Accurate financial terminology understanding and intent parsing"),
              t("多标的对比分析能力强，数据格式化输出清晰", "Strong multi-asset comparison with clear formatted output"),
              t("平均响应速度优于竞品", "Average response speed faster than competitor"),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="bg-card rounded-xl border border-rose-100 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-rose-700 flex items-center gap-2 mb-4">
            <TrendingDown className="w-4 h-4" />
            {t("AIME 待改进项", "AIME Areas for Improvement")}
          </h3>
          <div className="space-y-3">
            {[
              t("趋势预测过于确定，缺乏概率化表达", "Overly deterministic predictions lacking probabilistic expression"),
              t("风险提示不够前置和醒目", "Risk warnings not prominent enough"),
              t("纯知识问答场景缺乏差异化", "No differentiation in pure knowledge Q&A"),
              t("个股分析缺少行业横向对比", "Single-stock analysis lacks peer comparison"),
              t("复杂查询响应时间偏长", "Slow response for complex queries"),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Cards */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          {t("问题定义与改进方案", "Problem Definition & Solutions")}
        </h3>
        <div className="space-y-4">
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </div>

      {/* Future Outlook */}
      <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl border border-indigo-100 p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-indigo-900">
              {t("改进优先级建议", "Improvement Priority Recommendation")}
            </h3>
            <p className="mt-2 text-sm text-indigo-700 leading-relaxed">
              {t(
                "建议按照「高严重度 → 中严重度 → 低严重度」的优先级推进改进。短期内优先解决趋势预测的确定性偏差和风险提示前置问题（影响用户决策安全），中期补强知识问答的差异化能力（提升产品壁垒），长期优化复杂查询的响应速度（改善体验）。",
                "Recommend prioritizing improvements by severity: short-term fix prediction determinism and risk warning placement (user safety), mid-term strengthen knowledge Q&A differentiation (product moat), long-term optimize complex query response time (UX improvement)."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Problem Card Component
// ============================================================
function ProblemCard({ problem }: { problem: Problem }) {
  const { t, lang } = useLanguage();

  const severityConfig = {
    high: { label: t("高", "High"), color: "bg-rose-100 text-rose-700 border-rose-200" },
    medium: { label: t("中", "Medium"), color: "bg-amber-100 text-amber-700 border-amber-200" },
    low: { label: t("低", "Low"), color: "bg-blue-100 text-blue-700 border-blue-200" },
  };

  const config = severityConfig[problem.severity];

  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow duration-150">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-0.5 rounded text-xs font-medium border ${config.color}`}>
              {config.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {lang === "zh" ? problem.category : problem.categoryEn}
            </span>
          </div>
          <h4 className="text-sm font-semibold text-foreground">
            {lang === "zh" ? problem.title : problem.titleEn}
          </h4>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
            {lang === "zh" ? problem.description : problem.descriptionEn}
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-start gap-2">
          <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-medium text-indigo-600">
              {t("改进方案", "Solution")}
            </span>
            <p className="mt-0.5 text-xs text-foreground leading-relaxed">
              {lang === "zh" ? problem.solution : problem.solutionEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
