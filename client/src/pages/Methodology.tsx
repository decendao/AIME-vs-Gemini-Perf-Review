import { useLanguage } from "@/contexts/LanguageContext";
import {
  Brain, BarChart3, Search, Heart,
  Target, Layers, ArrowRight, Sparkles,
  Star, Code, Zap, Globe, Database
} from "lucide-react";

// ============================================================
// 问题设计思路页 - 行为金融学 + CFA 资产组合管理融合
// 设计风格：Swiss Fintech - 结构化展示、层级清晰
// ============================================================

export default function Methodology() {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {t("测评问题设计思路", "Question Design Methodology")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(
            "散户真实需求 × 模型能力考验 x 我的金融理解表达",
            "Retail Behavior Insights × Model Performance test x My own Financial Intelligence"
          )}
        </p>
      </div>

      {/* ================================================================ */}
      {/* Section 1: Core Philosophy */}
      {/* ================================================================ */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 rounded-2xl border border-indigo-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {t("核心设计理念", "Core Design Philosophy")}
            </h3>
            <p className="mt-2 text-sm text-foreground leading-relaxed">
              {t(
                "我从自身过12年交易生涯出发，结合了问题常见度，计算复杂度，专业程度，跨界程度，以及情绪化程度等综合考量维度，确保问题能全面考察 Agent 在 亲和理解力（User Empathy）、金融模型深度（Quantitative Rigor）、时间感知、交叉检验、多模态协同等领域的表现。",
                "Drawing from my 10+ years of personal retail trading experience, I fuse behavioral pain points and social media community insights with CFA-level professional knowledge, incorporating mainstream trading instruments to comprehensively examine the Agent's boundary between 'User Empathy' and 'Quantitative Rigor'."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}

      {/* Section 2: Three Pillars */}
      {/* ================================================================ */}
      <div>
        <SectionHeader
          number="1"
          title={t("三大核心支柱：心理洞察 X 模型能力 X 市场理解", "Three Core Pillars: Psychology, Model, & Market")}
          color="indigo"
        />

        {/* 🌟 调整为 grid-cols-1 md:grid-cols-3 以支持 3 栏并排布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          
          {/* Pillar 1: Trading Psychology */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {t("1. 交易心理洞察", "1. Trading Psychology")}
                  </h3>
                  <p className="text-xs text-muted-foreground">Behavioral Finance</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t(
                  "结合行为金融学理论，洞察散户投资者（活跃于 Reddit、X 等社群）的情绪化特征、认知偏差（如 FOMO 踏空焦虑、损失厌恶等）和市场噪音痛点，专门设计高情绪压力与“无标准答案”的测试场景。面对爆仓等情况，Agent 需要兼顾 Therapist（心理治疗师）的情绪承接角色。",
                  "Combining behavioral finance theories to analyze retail investors' emotional traits, cognitive biases (FOMO, loss aversion), and market noise, specifically designing high-emotion and 'unsolvable' scenarios. When facing blowouts, the Agent needs to act as a therapist to contain emotional distress."
                )}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-rose-600 mt-2">
              {t("考察维度：亲和理解力 (User Empathy)", "Dimension: User Empathy")}
            </div>
          </div>

          {/* Pillar 2: Model Benchmarking */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {t("2. 模型能力考察", "2. Model Benchmarking")}
                  </h3>
                  <p className="text-xs text-muted-foreground">Quantitative Rigor</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t(
                  "基于现代投资组合理论（MPT）、多因子风险模型、期权及衍生品定价（Black-Scholes 模型）和资产配置框架，严苛检验 Agent 在数理计算、程序化数据处理以及公式调用中的硬核逻辑稳定性，降低幻觉风险。",
                  "Based on Modern Portfolio Theory (MPT), multi-factor risk models, derivative pricing (Black-Scholes), and asset allocation frameworks, rigorously testing the Agent's hardcore logical stability in mathematical calculations and formula execution to mitigate hallucination."
                )}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-blue-600 mt-2">
              {t("考察维度：硬核金融模型深度 (Quantitative Rigor)", "Dimension: Quantitative Rigor")}
            </div>
          </div>

        {/* Pillar 3: Market Understanding (已替换为安全的 BarChart3 图标) */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {t("3. 金融市场理解", "3. Market Understanding")}
                  </h3>
                  <p className="text-xs text-muted-foreground">Macro & Micro Insights</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t(
                  "这个主要是我为了该面试，便于面试官更好的了解我，以及评估我对金融市场的理解深度；许多问题题干体现了我对于全球宏观经济传导、热门美股标的捕捉、以及税务规划的理解。",
                  "Deeply deconstructing global macroeconomic transmission, complex US equities (focusing on AI & Semiconductors), crypto, commodities, and tax planning. Evaluating the Agent's long-chain industrial logic and its capability to extract key insights from complex underlying alerts."
                )}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-600 mt-2">
              {t("考察维度：行业洞察与宏观逻辑 (Market Insights)", "Dimension: Market Insights")}
            </div>
          </div>

        </div>
      </div>
      

     
      {/* ================================================================ */}
      {/* Section 3: 双向解构坐标系 */}
      {/* ================================================================ */}

      
      <div>
        <SectionHeader
          number="2"
          title={t("4大底层需求维度", "Dual Deconstruction: User Empathy (EQ) vs. Quantitative Rigor (IQ)")}
          color="violet"
        />

 {/* 4 Motivation Mapping */}
      <div className="mt-8">
        <p className="text-xs text-muted-foreground mb-4">
          {t(
            "将散户的交易痛点和心理弱点，精准映射到 4 大问题分类中：",
            "Precisely mapping retail traders' pain points and psychological weaknesses to 4 fundamental need motivations:"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MotivationCard
            icon={<Heart className="w-5 h-5" />}
            color="rose"
            title={lang === "zh" ? "情绪化表达问题" : "Emotional Expression"}
            subtitle="Behavioral EQ"
            biases={
              lang === "zh"
                ? ["FOMO（踏空焦虑）", "过度自信/幸存者偏差", "Revenge Trading（报复性交易）"]
                : ["FOMO (Fear of Missing Out)", "Overconfidence / Survivorship Bias", "Revenge Trading"]
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否识别用户的情绪状态，在市场恐慌或狂热时提供心理安抚和理性引导。"
                : "Tests whether the Agent can identify user emotional states and provide psychological comfort during market panic or euphoria."
            }
          />
          <MotivationCard
            icon={<Brain className="w-5 h-5" />}
            color="amber"
            title={lang === "zh" ? "模拟情景 & 金融计算" : "Qualitative & Quantitative Analysis"}
            subtitle="Qualitative & Quantitative Logic"
            biases={
              lang === "zh"
                ? ["假设性问题", "对未来的情景推演-原油未来3个月的价格走势"]
                : ["Hypothetical questions", "Future scenario projection - crude oil 3-month outlook"]
              
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否对于数据新闻的分析和理解能力，同时是否能突破用户的确认偏误，提供多元视角的定量分析，避免只讲用户想听的故事。"
                : "Tests the Agent's ability to analyze data and news, break through confirmation bias, and provide multi-perspective qualitative and quantitative analysis."
            }
          />
          <MotivationCard
            icon={<BarChart3 className="w-5 h-5" />}
            color="blue"
            title={lang === "zh" ? "定性分析&逻辑推演" : "Scenario Projection"}
            subtitle="Scenario Projection"
            biases={
              lang === "zh"
                ? ["基于已有数据和新闻", "财报解读"]
                : ["Based on existing data & news", "Earnings report interpretation"]
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否基于已知的信息对特定问题的分析逻辑能力；用基于概率的情景分析给用户做出综合客观的推演分析，并避免给出具体的带有偏向性的建议，注意法律合规边界，做出风险提示。"
                : "Tests the Agent's ability to project future scenarios based on known information, using probability-based scenario analysis while avoiding biased recommendations and maintaining legal compliance with risk warnings."
            }
          />
          <MotivationCard
            icon={<Search className="w-5 h-5" />}
            color="emerald"
            title={lang === "zh" ? "数据检索与异动扫描" : "Scan & Verify"}
            subtitle="Scan & Verify"
            biases={
              lang === "zh"
                ? ["Information Overload（信息过载）", "FUD（恐慌/不确定/怀疑）"]
                : ["Information Overload", "FUD (Fear/Uncertainty/Doubt)"]
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否从海量噪音中快速提炼关键信号，帮助用户克服信息过载和 FUD 情绪。"
                : "Tests whether the Agent can quickly extract key signals from massive noise, helping users overcome information overload and FUD."
            }
          />
        </div>
      </div>
    </div> 
        
       
      

      {/* ================================================================ */}
      {/* Section 4: Difficulty Rating */}
      {/* ================================================================ */}
      <div>
        <SectionHeader
          number="3"
          title={t("难易度分级设计逻辑", "Difficulty Rating Design Logic")}
          color="amber"
        />
        <p className="text-xs text-muted-foreground mt-2 mb-4">
          {t(
            "在 58 个问题中，将 AI 面临的挑战划分为 1-5 个星级：",
            "Across 58 questions, AI challenges are classified into 5 star levels:"
          )}
        </p>

        <div className="space-y-3">
          <DifficultyRow
            stars={1}
            title={t("基础认知与低情感干预", "Basic Cognition & Low Emotional Intervention")}
            titleEn="Basic Cognition"
            description={t(
              "测试 Agent 的基础财务常识和通俗解释力。这是通用大模型的舒适区。",
              "Tests basic financial literacy and plain-language explanation. This is the comfort zone for general LLMs."
            )}
            color="emerald"
          />
          <DifficultyRow
            stars={2}
            title={t("基础认知与低情感干预", "Basic Cognition & Low Emotional Intervention")}
            titleEn="Basic Cognition"
            description={t(
              "测试 Agent 的基础财务常识和通俗解释力。这是通用大模型的舒适区。",
              "Tests basic financial literacy and plain-language explanation. This is the comfort zone for general LLMs."
            )}
            color="emerald"
            merged
          />
          <DifficultyRow
            stars={3}
            title={t("复合逻辑推演与基础计算", "Compound Logic & Basic Calculation")}
            titleEn="Compound Logic"
            description={t(
              "涉及多标的定性比较、标准衍生品策略计算。需要大模型能够调用基础 API 或运行简单的数学公式。",
              "Involves multi-asset qualitative comparison and standard derivative strategy calculations. Requires basic API calls or simple math formula execution."
            )}
            color="amber"
          />
          <DifficultyRow
            stars={4}
            title={t("跨资产联动与实时高频检索", "Cross-Asset Linkage & Real-Time HF Retrieval")}
            titleEn="Cross-Asset HF"
            description={t(
              "如跨国实物黄金套利计算、链上储备证明（PoR）异动扫描。要求大模型具备极高的搜索引擎检索深度（RAG）和跨标的对齐算力。",
              "E.g., cross-border physical gold arbitrage, on-chain Proof-of-Reserve anomaly scanning. Requires extremely deep RAG retrieval and cross-asset alignment computation."
            )}
            color="orange"
          />
          <DifficultyRow
            stars={5}
            title={t("极限多Agent协同与动态量化编程", "Extreme Multi-Agent Orchestration & Dynamic Quant Programming")}
            titleEn="Multi-Agent Extreme"
            description={t(
              "如 SEC Form 4 实时穿透和链上 Token 解锁精准核算。AI 必须化身多 Agent 协同体（Orchestrator），同时进行多线程的非结构化 RAG、高精度结构化财务解析、以及动态 Python 脚本编写与编译运行，容错率为零。这属于 AI Agent 的无人区。",
              "E.g., SEC Form 4 real-time penetration and on-chain token unlock precise accounting. AI must become a multi-Agent orchestrator, simultaneously performing multi-threaded unstructured RAG, high-precision structured financial parsing, and dynamic Python scripting with zero error tolerance. This is AI Agent's no-man's-land."
            )}
            color="rose"
          />
        </div>
      </div>

      {/* ================================================================ */}
    
// ============================================================
// Motivation Card Component
// ============================================================
function MotivationCard({
  icon,
  color,
  title,
  subtitle,
  biases,
  description,
}: {
  icon: React.ReactNode;
  color: "rose" | "amber" | "blue" | "emerald";
  title: string;
  subtitle: string;
  biases: string[];
  description: string;
}) {
  const colorMap = {
    rose: {
      bg: "bg-rose-50",
      border: "border-rose-100",
      icon: "bg-rose-100 text-rose-600",
      badge: "bg-rose-100 text-rose-700 border-rose-200",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-100",
      icon: "bg-amber-100 text-amber-600",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      icon: "bg-blue-100 text-blue-600",
      badge: "bg-blue-100 text-blue-700 border-blue-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      icon: "bg-emerald-100 text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
  };

  const c = colorMap[color];

  return (
    <div className={`rounded-xl border ${c.border} p-5 ${c.bg}/30`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg ${c.icon} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <p className="text-[10px] text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {biases.map((bias, i) => (
          <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-medium border ${c.badge}`}>
            {bias}
          </span>
        ))}
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ============================================================
// Difficulty Row Component
// ============================================================
function DifficultyRow({
  stars,
  title,
  description,
  color,
  merged,
}: {
  stars: number;
  title: string;
  titleEn: string;
  description: string;
  color: string;
  merged?: boolean;
}) {
  if (merged) return null; // 1-2 stars are merged into one row

  const colorMap: Record<string, { bg: string; border: string; text: string; star: string }> = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700", star: "text-emerald-400" },
    amber: { bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700", star: "text-amber-400" },
    orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", star: "text-orange-400" },
    rose: { bg: "bg-rose-50", border: "border-rose-100", text: "text-rose-700", star: "text-rose-400" },
  };

  const c = colorMap[color] || colorMap.emerald;
  const displayStars = stars <= 2 ? "1-2" : String(stars);

  return (
    <div className={`${c.bg} rounded-xl border ${c.border} p-4 flex items-start gap-4`}>
      <div className="shrink-0 flex items-center gap-0.5 pt-0.5">
        {Array.from({ length: stars <= 2 ? 2 : stars }).map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${c.star} fill-current`} />
        ))}
        {stars <= 2 && <span className="text-[10px] text-muted-foreground ml-1">(1-2)</span>}
      </div>
      <div className="flex-1">
        <h4 className={`text-sm font-semibold ${c.text}`}>{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  );
}
