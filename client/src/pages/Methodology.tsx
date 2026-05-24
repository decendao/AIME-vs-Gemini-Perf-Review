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

          {/* Pillar 3: Market Understanding */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
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

      {/* 4 Motivation Mapping */}
      <div className="mt-8">
        <p className="text-xs text-muted-foreground mb-4">
          {t(
            "将散户的交易痛点和心理弱点，精准映射到 4 大底层需求动机中：",
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
            title={lang === "zh" ? "定性 & 定量分析" : "Qualitative & Quantitative Analysis"}
            subtitle="Qualitative & Quantitative Logic"
            biases={
              lang === "zh"
                ? ["基于已有数据和新闻", "财报解读"]
                : ["Based on existing data & news", "Earnings report interpretation"]
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否对于数据新闻的分析和理解能力，同时是否能突破用户的确认偏误，提供多元视角的定性定量分析，避免只讲用户想听的故事。"
                : "Tests the Agent's ability to analyze data and news, break through confirmation bias, and provide multi-perspective qualitative and quantitative analysis."
            }
          />
          <MotivationCard
            icon={<BarChart3 className="w-5 h-5" />}
            color="blue"
            title={lang === "zh" ? "推演预测能力" : "Scenario Projection"}
            subtitle="Scenario Projection"
            biases={
              lang === "zh"
                ? ["假设性问题", "对未来的情景推演-原油未来3个月的价格走势"]
                : ["Hypothetical questions", "Future scenario projection - crude oil 3-month outlook"]
            }
            description={
              lang === "zh"
                ? "考察 Agent 能否基于已知的信息对未来的推演能力；用基于概率的情景分析给用户做出综合客观的推演分析，并避免给出具体的带有偏向性的建议，注意法律合规边界，做出风险提示。"
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

      {/* ================================================================ */}
      {/* Section 3: 双向解构坐标系 */}
      {/* ================================================================ */}
      <div>
        <SectionHeader
          number="2"
          title={t("双向解构：亲和理解力 (EQ) vs. 硬核金融数理模型 (IQ)", "Dual Deconstruction: User Empathy (EQ) vs. Quantitative Rigor (IQ)")}
          color="violet"
        />

        {/* Coordinate System Visualization */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm mt-4">
          <div className="relative w-full max-w-xl mx-auto aspect-square max-h-[360px]">
            {/* Y Axis */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />
            {/* X Axis */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300 -translate-y-1/2" />

            {/* Y Arrow */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 text-center">
              <div className="text-xs font-bold text-blue-700">
                {t("高金融硬核度 (IQ)", "High Quant Rigor (IQ)")}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                DCF, Greeks, MPT
              </div>
            </div>

            {/* Y Bottom */}
            <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-center">
              <div className="text-[10px] text-muted-foreground mb-0.5">
                {t("基础问答", "Basic Q&A")}
              </div>
              <div className="text-xs font-bold text-slate-400">
                {t("低金融硬核度 (IQ)", "Low Quant Rigor (IQ)")}
              </div>
            </div>

            {/* X Left */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <div className="text-xs font-bold text-slate-400">
                {t("低 EQ", "Low EQ")}
              </div>
            </div>

            {/* X Right */}
            <div className="absolute top-1/2 right-2 -translate-y-1/2 text-right">
              <div className="text-xs font-bold text-rose-600">
                {t("高亲和理解力 (EQ)", "High Empathy (EQ)")}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {t("情绪共情, 行为阻断", "Emotional Empathy, Behavioral Blocking")}
              </div>
            </div>

            {/* AIME Zone - Top Left Quadrant */}
            <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold text-indigo-700">AIME</div>
                <div className="text-[10px] text-indigo-500">{t("优势区", "Strength Zone")}</div>
              </div>
            </div>

            {/* Gemini Zone - Bottom Right Quadrant */}
            <div className="absolute bottom-[15%] right-[15%] w-[30%] h-[30%] bg-rose-50 border-2 border-dashed border-rose-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold text-rose-700">Gemini 3.5 Flash</div>
                <div className="text-[10px] text-rose-500">{t("优势区", "Strength Zone")}</div>
              </div>
            </div>

            {/* Ideal Zone - Top Right */}
            <div className="absolute top-[18%] right-[18%] w-[24%] h-[24%] bg-emerald-50 border-2 border-emerald-300 rounded-xl flex items-center justify-center opacity-60">
              <div className="text-center">
                <div className="text-[10px] font-bold text-emerald-700">{t("理想区", "Ideal Zone")}</div>
                <div className="text-[9px] text-emerald-500">IQ + EQ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Sub-dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Empathy */}
          <div className="bg-card rounded-xl border border-rose-100 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">
                {t("亲和力与降维沟通", "Empathy & Comprehensibility")}
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "投资是一个门槛极高的领域，如果 Agent 满嘴学术黑话（Jargon），只会将散户拒之门外。一个优秀的个人金融 Agent 必须具备「把复杂事物说简单（Explain Like I'm 5）」的沟通减摩力。",
                "Investing has an extremely high barrier to entry. If the Agent speaks only in academic jargon, it will alienate retail investors. An excellent personal finance Agent must possess the ability to 'Explain Like I'm 5' — reducing communication friction."
              )}
            </p>
            <div className="mt-3 bg-rose-50 rounded-lg p-3 border border-rose-100">
              <p className="text-[11px] text-rose-700 leading-relaxed">
                {t(
                  "\u5728\u8bc4\u6d4b\u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u770b AI \u80fd\u4e0d\u80fd\u7b97\u51fa\u671f\u6743\u7684 Greeks\uff0c\u66f4\u770b\u5b83\u80fd\u4e0d\u80fd\u7528\u901a\u4fd7\u7684\u6bd4\u55bb\uff08\u4f8b\u5982\u7528\u2018\u4fdd\u8d39\u2019\u89e3\u91ca\u770b\u8dcc\u671f\u6743\u6743\u5229\u91d1\uff0c\u7528\u2018\u623f\u5c4b\u635f\u8017\u2019\u89e3\u91ca\u65f6\u95f4\u4ef7\u503c Theta \u8870\u51cf\uff09\uff0c\u5e76\u81ea\u52a8\u6e32\u67d3\u51fa\u9ad8\u4ea4\u4e92\u6027\u7684\u635f\u76ca\u56fe\u8868\uff0c\u5e2e\u52a9\u6563\u6237\u7528\u6700\u5c11\u7684\u8ba4\u77e5\u8d1f\u8377\u8fbe\u6210\u4ea4\u6613\u7406\u89e3\u3002",
                  "In evaluation, we test not only whether AI can calculate option Greeks, but whether it can use plain analogies (e.g., 'insurance premium' for put option premium, 'house depreciation' for Theta decay), and auto-render interactive P&L charts to minimize cognitive load."
                )}
              </p>
            </div>
          </div>

          {/* Quantitative Rigor */}
          <div className="bg-card rounded-xl border border-blue-100 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">
                {t("硬核金融数理模型", "Quantitative Rigor")}
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "与普通闲聊 AI 不同，金融 AI 容不得半点胡言乱语（Hallucination）。一个标点符号的错误就可能导致用户爆仓或征信受损。",
                "Unlike casual chat AI, financial AI tolerates zero hallucination. A single punctuation error could cause user liquidation or credit damage."
              )}
            </p>
            <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-100">
              <p className="text-[11px] text-blue-700 leading-relaxed mb-2">
                {t(
                  "在数理计算维度中，我们严格测试了杠杆损耗路径依赖、期权差价到期损益矩阵等极易出错的算力陷阱。这要求 Agent 底层必须具备：",
                  "In the quantitative dimension, we rigorously test leverage decay path dependency, options spread expiration P&L matrices and other error-prone computational traps. This requires the Agent to possess:"
                )}
              </p>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <Zap className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-[11px] text-blue-700">
                    <strong>Tool-Use</strong>{t("：能自动将自然语言翻译成 Python 代码并运行（如 numpy 计算标准差和协方差）", ": Auto-translate natural language to Python code and execute (e.g., numpy for std dev and covariance)")}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-[11px] text-blue-700">
                    <strong>API {t("穿透深度", "Penetration Depth")}</strong>{t("：能实时提取毫秒级的期权链数据、高频行情及 SEC 原始文件", ": Real-time extraction of millisecond-level options chain data, high-frequency quotes, and SEC raw filings")}
                  </span>
                </div>
              </div>
            </div>
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
      {/* Integration Framework */}
      {/* ================================================================ */}
      <div className="bg-gradient-to-r from-indigo-50 via-violet-50 to-rose-50 rounded-xl border border-indigo-100 p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-indigo-900">
              {t("评测方案总结", "Evaluation Framework Summary")}
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {t(
                "本评测方案通过 58 个精心设计的双向坐标系问题，不仅能测出 AIME 的垂直数据深度，更能测出 Gemini 3.5 Flash 的通用逻辑极限，为下一代金融 Agent 的打磨提供了最真实的散户痛点靶向测试。",
                "This evaluation framework, through 58 carefully designed dual-axis questions, tests not only AIME's vertical data depth but also Gemini 3.5 Flash's general logic limits, providing the most authentic retail investor pain-point targeted testing for next-generation financial Agent development."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Integration Diagram */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-indigo-500" />
          {t("融合评测框架", "Integrated Evaluation Framework")}
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 bg-rose-50 rounded-lg p-4 border border-rose-100 text-center">
            <p className="text-xs font-bold text-rose-700">
              {t("行为金融学", "Behavioral Finance")}
            </p>
            <p className="text-[10px] text-rose-500 mt-1">User Empathy (EQ)</p>
          </div>
          <div className="text-2xl text-muted-foreground font-light">+</div>
          <div className="flex-1 bg-blue-50 rounded-lg p-4 border border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-700">
              {t("CFA 组合管理", "CFA Portfolio Mgmt")}
            </p>
            <p className="text-[10px] text-blue-500 mt-1">Quantitative Rigor (IQ)</p>
          </div>
          <div className="text-2xl text-muted-foreground font-light">=</div>
          <div className="flex-1 bg-indigo-50 rounded-lg p-4 border border-indigo-200 text-center">
            <p className="text-xs font-bold text-indigo-700">
              {t("综合边界考察", "Comprehensive Boundary Test")}
            </p>
            <p className="text-[10px] text-indigo-500 mt-1">58 Questions × 5 Levels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Section Header Component
// ============================================================
function SectionHeader({ number, title, color }: { number: string; title: string; color: string }) {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-100 text-indigo-600",
    violet: "bg-violet-100 text-violet-600",
    amber: "bg-amber-100 text-amber-600",
  };
  return (
    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
      <span className={`w-6 h-6 rounded-md ${colorMap[color] || colorMap.indigo} flex items-center justify-center text-xs font-bold`}>
        {number}
      </span>
      {title}
    </h3>
  );
}

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
