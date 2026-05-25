import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Trophy, Target, TrendingUp, AlertTriangle, Brain, 
  Search, MessageSquare, Clock, ShieldAlert, Sparkles, Scale, Info, Check, X,
  ChevronDown, ChevronUp, Layers, Activity
} from "lucide-react";

// ============================================================
// 评测结论页 - 深度分析与痛点定义 (支持响应式折叠，极致留白风格)
// ============================================================

export default function Conclusion() {
  const { t } = useLanguage();

  // 🌟 新增：潜在优化思路的折叠控制状态
  const [isOpt1Open, setIsOpt1Open] = useState(false);
  const [isOpt2Open, setIsOpt2Open] = useState(false);
  const [isOpt3Open, setIsOpt3Open] = useState(false);
  // 深度诊断卡片折叠状态
  const [isQuantOpen, setIsQuantOpen] = useState(false);
  const [isQualOpen, setIsQualOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEQOpen, setIsEQOpen] = useState(false);

  // 核心产品痛点折叠状态
  const [isIssue1Open, setIsIssue1Open] = useState(false);
  const [isIssue2Open, setIsIssue2Open] = useState(false);
  const [isIssue3Open, setIsIssue3Open] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in-up max-w-5xl mx-auto pb-12">
      
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Evaluation Report</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {t("最终评测结论", "Final Evaluation Conclusion")}
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t(
            "Aime 在 SEC 申报穿透、链上解锁监控、多因子选股及高频期权/税务计算等硬核场景中构建了绝对的数据查准率，而 Gemini 3.5 Flash 凭借巨量参数的逻辑推演优势，在非结构化产业链博弈拆解以及行为金融学（Behavioral Finance）心理焦虑干预上展现出更强的人文共情力与语言张力。个人认为垂类金融Agent未来的关键在于将**[高精度的金融工具模块]无缝对接[高情商的通用模型认知接口]**",
            "Based on 58 real evaluation cases covering multi-dimensional investment motivations and scenarios, this report deeply analyzes the core barriers and limitations for vertical financial AI Agent (AIME) and general LLM (Gemini 3.5 Flash) under complex trading conditions."
          )}
        </p>
      </div>

      {/* ================================================================ */}
      {/* 1. 总胜负对比 & 4大维度胜负分布 */}
      {/* ================================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* 1.1 总胜负对比 */}
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm lg:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-foreground flex items-center gap-2 mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              {t("总胜负对比", "Overall Results")}
            </h3>
            <p className="text-[11px] text-muted-foreground mb-4">
              {t("在 58 个 Case 的对标评测中，两款助手在不同场景下表现出明显的长短板：", "Across 58 benchmarked cases, both assistants demonstrated distinct strengths and weaknesses:")}
            </p>
          </div>

          <div className="space-y-3">
            {/* Visual Bar */}
            <div className="w-full bg-secondary h-3.5 rounded-full overflow-hidden flex">
              <div style={{ width: "55.2%" }} className="bg-emerald-600 dark:bg-emerald-500 h-full" title="AIME Win" />
              <div style={{ width: "25.8%" }} className="bg-muted-foreground/30 h-full" title="Draw" />
              <div style={{ width: "19.0%" }} className="bg-rose-500 h-full" title="Gemini Win" />
            </div>

            {/* Legend Indicators */}
            <div className="grid grid-cols-3 gap-1 pt-1">
              <div className="text-center p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20">
                <span className="block text-[9px] text-emerald-700 dark:text-emerald-400 font-bold">{t("AIME 胜", "AIME Win")}</span>
                <span className="text-base font-extrabold font-mono text-emerald-800 dark:text-emerald-300">32</span>
                <span className="block text-[8px] text-muted-foreground">55.2%</span>
              </div>
              <div className="text-center p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/40">
                <span className="block text-[9px] text-muted-foreground font-bold">{t("平局", "Draw")}</span>
                <span className="text-base font-extrabold font-mono text-foreground">15</span>
                <span className="block text-[8px] text-muted-foreground">25.8%</span>
              </div>
              <div className="text-center p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/20">
                <span className="block text-[9px] text-rose-700 dark:text-rose-400 font-bold">{t("Gemini 胜", "Gemini Win")}</span>
                <span className="text-base font-extrabold font-mono text-rose-800 dark:text-rose-300">11</span>
                <span className="block text-[8px] text-muted-foreground">19.0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1.2 维度分布对比 */}
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm lg:col-span-2 space-y-3">
          <h3 className="text-xs font-bold text-foreground flex items-center gap-2">
            <Scale className="w-3.5 h-3.5 text-indigo-500" />
            {t("4大需求维度胜负分布对比", "Performance Across 4 Core Dimensions")}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Dimension 1 */}
            <div className="bg-muted/10 rounded-lg p-2.5 border border-border/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold text-foreground">📊 {t("情景模拟&金融计算", "Simulate & Calculate")}</span>
                <span className="text-[9px] text-muted-foreground">15 Cases</span>
              </div>
              <div className="space-y-0.5 text-[10px]">
                <div className="flex justify-between"><span>AIME {t("胜", "Win")}</span><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">11</span></div>
                <div className="flex justify-between"><span>{t("平局", "Draw")}</span><span className="font-mono text-muted-foreground">3</span></div>
                <div className="flex justify-between"><span>Gemini {t("胜", "Win")}</span><span className="font-mono font-bold text-rose-500">1</span></div>
              </div>
            </div>

            {/* Dimension 2 */}
            <div className="bg-muted/10 rounded-lg p-2.5 border border-border/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold text-foreground">🧠 {t("定性分析 & 逻辑推演", "Qualitative & Logic")}</span>
                <span className="text-[9px] text-muted-foreground">15 Cases</span>
              </div>
              <div className="space-y-0.5 text-[10px]">
                <div className="flex justify-between"><span>AIME {t("胜", "Win")}</span><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">5</span></div>
                <div className="flex justify-between"><span>{t("平局", "Draw")}</span><span className="font-mono text-muted-foreground">6</span></div>
                <div className="flex justify-between"><span>Gemini {t("胜", "Win")}</span><span className="font-mono font-bold text-rose-500">4</span></div>
              </div>
            </div>

            {/* Dimension 3 */}
            <div className="bg-muted/10 rounded-lg p-2.5 border border-border/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold text-foreground">🔍 {t("数据检索", "Scan & Verify")}</span>
                <span className="text-[9px] text-muted-foreground">15 Cases</span>
              </div>
              <div className="space-y-0.5 text-[10px]">
                <div className="flex justify-between"><span>AIME {t("胜", "Win")}</span><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">12</span></div>
                <div className="flex justify-between"><span>{t("平局", "Draw")}</span><span className="font-mono text-muted-foreground">1</span></div>
                <div className="flex justify-between"><span>Gemini {t("胜", "Win")}</span><span className="font-mono font-bold text-rose-500">2</span></div>
              </div>
            </div>

            {/* Dimension 4 */}
            <div className="bg-muted/10 rounded-lg p-2.5 border border-border/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold text-foreground">💬 {t("情绪引导", "Behavioral & EQ")}</span>
                <span className="text-[9px] text-muted-foreground">13 Cases</span>
              </div>
              <div className="space-y-0.5 text-[10px]">
                <div className="flex justify-between"><span>AIME {t("胜", "Win")}</span><span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">4</span></div>
                <div className="flex justify-between"><span>{t("平局", "Draw")}</span><span className="font-mono text-muted-foreground">5</span></div>
                <div className="flex justify-between"><span>Gemini {t("胜", "Win")}</span><span className="font-mono font-bold text-rose-500">4</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. 各维度评测结论深度诊断（支持折叠展开） */}
      {/* ================================================================ */}
      <section className="space-y-4">
        <div className="border-b border-border pb-2">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-500" />
            {t("各维度评测结论深度诊断 (点击卡片展开详情)", "In-depth Dimension Diagnosis (Click cards to expand)")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Diagnostic 1 */}
          <div 
            onClick={() => setIsQuantOpen(!isQuantOpen)}
            className="bg-card rounded-xl border border-border p-4 shadow-sm cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-800 transition-all select-none space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">📊</span>
                <h4 className="text-xs font-bold text-foreground">
                  {t("定量分析与金融计算：AIME 拥有极强的“工程化查准率”", "Quant & Math: AIME's Engineering Precision")}
                </h4>
              </div>
              {isQuantOpen ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
            </div>
            
            {!isQuantOpen && (
              <p className="text-[11px] text-muted-foreground line-clamp-1">
                {t("AIME 结合确定性计算、公式模型，极大降低了纯大语言模型在数理计算上的幻觉风险。", "AIME integrates deterministic formulas and code execution to mitigate mathematical hallucinations.")}
              </p>
            )}

            {isQuantOpen && (
              <div className="text-[11px] text-muted-foreground leading-relaxed space-y-2 pt-1 animate-fade-in">
                <p>
                  {t(
                    "AIME 可以在支持的产品环境中接入行情和金融数据库，并结合确定性计算、公式模型或代码执行能力，处理期权损益、杠杆 ETF 路径依赖、税务测算、组合风险等问题。",
                    "AIME connects to live financial feeds and databases, combining deterministic formulas or code execution to process option spreads, leveraged ETF decay, tax optimization, and portfolio risk."
                  )}
                </p>
                <p>
                  {t(
                    "在涉及期权差价（Spreads）到期损益、杠杆损耗以及组合 VaR 计算时表现优异。通过自然语言结构化调用确定性逻辑显著降低了幻觉风险。*注：准确性仍取决于输入数据与数据源质量，模型本身不存储实时市场数据库。*",
                    "AIME excels in option spreads payoff and portfolio VaR. Translating natural language into deterministic code mitigates LLM mathematical hallucinations. *Note: accuracy depends on input and data sources; the model itself does not store a persistent market database.*"
                  )}
                </p>
                <p>
                  {t(
                    "而 Gemini 3.5 即使可以通过内置的代码解释器编写 Python 脚本完成计算，也容易因无法实时获取最底层标准化参数，导致“合理但错误”的计算结果产生。",
                    "While Gemini can run Python scripts, it lacks access to standardized real-time market inputs, resulting in 'logical but inaccurate' results."
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Diagnostic 2 */}
          <div 
            onClick={() => setIsQualOpen(!isQualOpen)}
            className="bg-card rounded-xl border border-border p-4 shadow-sm cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-800 transition-all select-none space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">🧠</span>
                <h4 className="text-xs font-bold text-foreground">
                  {t("定性分析与逻辑推演：Gemini 3.5 展现了“长链条思辨广度”", "Qualitative Analysis: Gemini 3.5's Chain‑of‑Thought")}
                </h4>
              </div>
              {isQualOpen ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
            </div>

            {!isQualOpen && (
              <p className="text-[11px] text-muted-foreground line-clamp-1">
                {t("Gemini 拥有海量人类知识库的概率优势，展现出了极高的商业思维连贯性。", "Gemini dominates qualitative logical reasoning through broad multi-step reasoning stability.")}
              </p>
            )}

            {isQualOpen && (
              <div className="text-[11px] text-muted-foreground leading-relaxed space-y-2 pt-1 animate-fade-in">
                <p className="font-semibold text-foreground/90">
                  {t("Gemini 拥有压倒性的定性推演优势，得益于：", "Gemini dominates logical reasoning through:")}
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>{t("跨领域的语义重组，建立不同领域概念之间的隐含联系。", "Semantic Synthesis: Establishes implicit linkages between diverse domain concepts.")}</li>
                  <li>{t("Flash 架构极高 TPS 支撑多步任务中 Agent 的自动规划、执行与迭代。", "Agentic focus: Parallel agent layout, high TPS, scoring 83.6% on MCP Atlas benchmark.")}</li>
                  <li>{t("战略模型内化（波特五力，LTV/CAC 等分析框架）。", "Built-in strategic tools: Native implementation of Porter's Five Forces, LTV/CAC, and SWOT frameworks.")}</li>
                </ul>
                <p>
                  {t(
                    "相比之下，AIME 此时更像一个数据罗列器。其定性推理受限于 RAG 机制（通常只能抓取研报中的零散段落进行拼接），显得较为教条、干瘪，缺乏连贯的逻辑主线与世界模型纵深。",
                    "In contrast, AIME behaves like a flat data aggregator. Its qualitative logic is bound to rigid RAG lookups, presenting dry facts without a coherent narrative arc or world-model depth."
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Diagnostic 3 (支持折叠表格，极大节省空间) */}
          <div 
            className="bg-card rounded-xl border border-border p-4 shadow-sm space-y-2 md:col-span-2"
          >
            <div 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🔍</span>
                <h4 className="text-xs font-bold text-foreground">
                  {t("数据检索与异动扫描：AIME 具备绝对的“底层数据护城河”", "Data Retrieval: AIME's Proprietary Data Moat")}
                </h4>
              </div>
              {isSearchOpen ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
            </div>

            {!isSearchOpen && (
              <p className="text-[11px] text-muted-foreground line-clamp-1">
                {t("AIME 将 Form 4、暗池大宗交易、期权 Sweeps 等异动数据原生接入，做到 100% 查准并向下穿透。", "Integrating Form 4 insider trades, dark pools, sweeps, and on-chain unlocks allows users to perform perfect filtering.")}
              </p>
            )}

            {isSearchOpen && (
              <div className="text-[11px] text-muted-foreground leading-relaxed space-y-3 pt-1 animate-fade-in">
                <p>
                  {t(
                    "AIME 的优势源于其“数据管道 + 前端结构化看板”。用户可直接筛选、下钻、穿透异动。而 Gemini 3.5 即便外接 Web Search，也只能在互联网上抓取到零散、延迟且充斥噪音的二次报道，在数据颗粒度上存在天然代差。",
                    "AIME's absolute advantage resides in its structural pipelines. Integrating Form 4, dark pools, sweeps, and unlocks allows users to perform perfect filtering. Gemini search is limited to delayed, noisy, second-hand summaries."
                  )}
                </p>

                {/* Collapsible Table */}
                <div className="overflow-x-auto border border-border rounded-lg">
                  <table className="w-full text-left text-[10px] border-collapse">
                    <thead>
                      <tr className="bg-muted/40 text-muted-foreground border-b border-border">
                        <th className="p-2 font-semibold">{t("数据类型", "Data Type")}</th>
                        <th className="p-2 font-semibold text-emerald-600 dark:text-emerald-400">{t("AIME 结构化输出", "AIME Structured Output")}</th>
                        <th className="p-2 font-semibold text-rose-500">{t("Gemini 3.5 Web Search", "Gemini 3.5 Web Search")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-2 font-bold text-foreground">Form 4 {t("内部交易", "Insider Trades")}</td>
                        <td className="p-2 text-emerald-600 dark:text-emerald-400">{t("支持完整字段检索与余额穿透", "Full field filtering & remaining balance")}</td>
                        <td className="p-2 text-rose-500">{t("通常仅提供新闻网页二次摘要", "Secondary text summaries only")}</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-foreground">{t("暗池 & 期权 Sweeps", "Dark Pools & Sweeps")}</td>
                        <td className="p-2 text-emerald-600 dark:text-emerald-400">{t("流式结构化、毫秒级看板展示", "Live streaming structured feeds")}</td>
                        <td className="p-2 text-rose-500">{t("仅能抓取零散网络讨论或帖子", "Noisy forum posts / delay")}</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-foreground">{t("代币解锁/链上数据", "Token Unlocks / On-chain")}</td>
                        <td className="p-2 text-emerald-600 dark:text-emerald-400">{t("直连链上事件，展示精准解锁图表", "On-chain unlocks mapping")}</td>
                        <td className="p-2 text-rose-500">{t("缺乏工具，需人工查询浏览器", "Manual indexing on block explorers")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Diagnostic 4 */}
          <div 
            onClick={() => setIsEQOpen(!isEQOpen)}
            className="bg-card rounded-xl border border-border p-4 shadow-sm cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-800 transition-all select-none space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">💬</span>
                <h4 className="text-xs font-bold text-foreground">
                  {t("情绪引导：Gemini 3.5 具有更高的“情商与沟通张力”", "Behavioral EQ: Gemini's High‑Empathy Guidance")}
                </h4>
              </div>
              {isEQOpen ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
            </div>

            {!isEQOpen && (
              <p className="text-[11px] text-muted-foreground line-clamp-1">
                {t("面对极端焦虑，Gemini 能更好地运用心理学和行为金融学纠偏，做到‘把话说到心里’。", "Facing distressed users, Gemini defuses anxiety with strong emotional containment.")}
              </p>
            )}

            {isEQOpen && (
              <div className="text-[11px] text-muted-foreground leading-relaxed space-y-2 pt-1 animate-fade-in">
                <p>
                  {t(
                    "在开放式安慰、叙事表达、行为心理学类比上，Gemini 表现得更为自然、有温度。例如运用“幸存者偏差”解构社群噪音，并提出务实的 1% 归零预算规则。",
                    "Facing traders experiencing panic over liquidation, Gemini shows stellar empathy, defusing distress with survivor bias explanations, setting clear parameters, and putting 'humanity' into financial logic."
                  )}
                </p>
                <p>
                  {t(
                    "相比之下，AIME 的话术更教条，字数平均比 Gemini 多出 200% 以上。在高压场景中常堆砌冗长的风险提示，容易在用户烦躁时触发抗拒。AIME 过于侧重‘情绪识别 -> 风险警示 -> 强行阻断交易’，难以建立深层信任。",
                    "In contrast, AIME is pedantic—averaging 200% more output length than Gemini. Rigid risk disclaimers and text density risk alienating stressed users, relying too heavily on safety logic rather than emotional de-escalation."
                  )}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. AIME 核心产品与系统问题定义 */}
      {/* ================================================================ */}
      <section className="space-y-4">
        <div className="border-b border-border pb-2">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            {t("AIME 核心产品与系统问题定义 (点击卡片查看痛点详情)", "AIME Core Product & System Problem Definitions (Click to view details)")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Issue 1 */}
          <div 
            onClick={() => setIsIssue1Open(!isIssue1Open)}
            className="bg-card rounded-xl border border-border p-5 shadow-sm cursor-pointer hover:border-rose-300 dark:hover:border-rose-900 transition-all select-none flex flex-col justify-between space-y-2"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-rose-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("延迟与可见性", "Latency & Visibility")}</h4>
                </div>
                {isIssue1Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("复杂研究链路的高延迟 & 过于极客/调试Log式的CoT", "High Latency in Multi‑Agent Flows")}
              </h3>
              
              {!isIssue1Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("面对复杂问题时thinking时间过长，在问题34（期权检索）尤其显著，最终居然花了13分钟输出最终回答。", "Complex multi-factor screening and 3-stage DCF tasks spike latency to 40-60 seconds.")}
                </p>
              )}
            </div>

            {isIssue1Open && (
              <div className="space-y-3 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "面临复杂场景时，系统会触发长链条执行流（意图解析 -> 任务拆解 -> 调库检索 -> 本地运行代码 -> 建模/筛选 -> 校验）。这导致平均输出CoT展示时长高达 60s - 120s。Aime 处理此类问题时更接近一个研究工作流系统，而非简单的一问一答。AIME 在界面中直接将 Agent 底层最原始的 JSON 运行指令、运行超时参数（timeout_ms: 30000）、物理沙盒路径（/tmp/...）以及带有换行非转义字符（\n\n）的原始终端输出（stdout） 毫无保留地展示给了用户。",
                    "Complex tasks trigger a long ReAct sequence (Intent parsed -> tool allocation -> SQL index -> local execution sandbox -> valuation -> advisory output), spiking latency to 40-60 seconds. This is a heavy workflow rather than simple Q&A."
                  )}
                </p>
                <div className="bg-rose-50/20 dark:bg-rose-950/10 p-2 rounded-lg border border-rose-100/50 dark:border-rose-950/30">
                  <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">💡 {t("用户痛点", "User Painpoint")}</span>
                  {t("对于大多数欧美普通的散户而言，这种直接裸露的 系统控制台/调试日志 过于极客。普通用户看到代码、cmd 以及换行符，容易产生 [系统是不是出 Bug 了]或[是不是报错了]的焦虑和失望，不仅无法建立信任，反而增加了认知负荷（Cognitive Load）。", "The UI shows only a generic loading spinner without intermediate state transitions, causing rapid drop-offs under real-time market pressure.")}
                </div>
              </div>
            )}
          </div>

          {/* Issue 2 */}
          <div 
            onClick={() => setIsIssue2Open(!isIssue2Open)}
            className="bg-card rounded-xl border border-border p-5 shadow-sm cursor-pointer hover:border-rose-300 dark:hover:border-rose-900 transition-all select-none flex flex-col justify-between space-y-2"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-rose-500">
                <div className="flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("投研推理框架", "Reasoning Moat")}</h4>
                </div>
                {isIssue2Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("缺少[从数据到决策]的中间推理层”", "Absence of Reusable Reasoning Framework")}
              </h3>

              {!isIssue2Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("AIME 具有极佳的硬核数据查准率，但在无结构定性分析场景中呈现‘数据真实但洞察浅’的现象。", "AIME excels in accuracy but defaults to flat descriptions in qualitative deduction scenarios.")}
                </p>
              )}
            </div>

            {isIssue2Open && (
              <div className="space-y-3 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "AIME 的长板在于基于 API 数据源的硬核查准率，但在非结构化文本分析场景中，回答扁平化、条目化，缺乏逻辑深度。由于缺少一套 投研推理框架层，导致数据无法持续转化为用户可理解、可行动、可复盘的投资洞察。AIME现在“数据调用层”非常强，但似乎缺一套位于数据 与 最终回答之间的“投研推理框架层”。这层的作用是让回答看起来不像生硬的咨询报告，而是像经常上cnbc的顶尖分析师一样，能把各种数据转化为商业逻辑、可验证的投资假设、可行动的仓位建议、可复盘的跟踪指标 以及在1分钟内阐明核心观点，讲重点的能力。                                   与之相反，通用大模型表现出‘叙事顺滑但事实不稳’（容易产生逻辑通顺的幻觉式深度）。真正优秀的投研智能体应该将 AIME 的数据真实度与通用大模型的框架推演能力完美结合。",
                    "AIME excels in data precision, but lacks synthesis depth in unstructured analytical scenarios. Conversely, general LLMs present 'coherent narratives with unstable facts'. A mature system should integrate both strengths."
                  )}
                </p>
                <div className="bg-rose-50/20 dark:bg-rose-950/10 p-2 rounded-lg border border-rose-100/50 dark:border-rose-950/30">
                  <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">💡 {t("用户痛点", "User Painpoint")}</span>
                  {t("单纯的财务指标并不能直接形成投资决策。用户需要系统深度剖析商业模式演变、估值分化源头、共识偏误以及可行动的仓位策略。", "Raw multiples are not immediately actionable. Retailers seek comprehensive frameworks detailing structural moats, consensus consensus divergences, and trading actions.")}
                </div>
              </div>
            )}
          </div>

          {/* Issue 3 */}
          <div 
            onClick={() => setIsIssue3Open(!isIssue3Open)}
            className="bg-card rounded-xl border border-border p-5 shadow-sm cursor-pointer hover:border-rose-300 dark:hover:border-rose-900 transition-all select-none flex flex-col justify-between space-y-2"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-rose-500">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("沟通与 EQ 缺失", "EQ & Communication")}</h4>
                </div>
                {isIssue3Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("高情绪场景下说教式的合规提示导致沟通摩擦", "Regulatory Over-compliance in Panic Situations")}
              </h3>

              {!isIssue3Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("面对保证金追加、爆仓、踏空 FOMO 等极端情绪场景，AI 语调高冷说教，缺乏同理心。", "Failing to read localized retail trading sentiment (e.g., r/wallstreetbets) adds friction during crisis moments.")}
                </p>
              )}
            </div>

            {isIssue3Open && (
              <div className="space-y-3 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "AIME 缺少一套‘情绪识别 -> 行为金融纠偏 -> 本土化沟通 -> 风险动作落地’的干预层。面临爆仓或 FOMO 焦虑时，AIME 现有话术过于刻板说教，常以公式化警告应对，虽然方向绝对正确，但缺失了情绪承接与可执行的下一步柔性风控方案。",
                    "AIME lacks a holistic behavioral intervention chain. When traders face margin calls or FOMO, AIME defaults to formulaic compliance warnings, missing empathetic de-escalation or actionable, low-friction wind-down pathways."
                  )}
                </p>
                <div className="bg-rose-50/20 dark:bg-rose-950/10 p-2 rounded-lg border border-rose-100/50 dark:border-rose-950/30">
                  <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">💡 {t("用户痛点", "User Painpoint")}</span>
                  {t("AI 缺乏对 HODL, Diamond Hands, Ape-in 等欧美散户常用本土黑话和流行的感知，在最需要配合降风控的危机时刻难以与用户建立深层信任。", "AIME fails to read retail lingo (HODL, Diamond Hands), adding systemic communication friction where compliance must meet active trust.")}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

          {/* 4. 🌟 潜在优化方向：代际演进与突破（交互折叠设计） */}
      {/* ================================================================ */}
      <section className="space-y-4">
        <div className="border-b border-border pb-2">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-500" />
            {t("💡 潜在优化方向：Chat Mode, 增加情绪识别模块 & Meta-Prompt 构建", "💡 Strategic Roadmap: Evolving from Tool to Advisor")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Strategy 1 */}
          <div 
            onClick={() => setIsOpt1Open(!isOpt1Open)}
            className={`bg-card rounded-xl border p-5 shadow-sm cursor-pointer transition-all select-none flex flex-col justify-between space-y-2 ${isOpt1Open ? "border-indigo-400 bg-indigo-50/5 dark:bg-indigo-950/10" : "border-border hover:border-indigo-300 dark:hover:border-indigo-800"}`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("架构演进", "Architecture")}</h4>
                </div>
                {isOpt1Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("思路1：增加一个ChatMode聊天模式 确保快速输出", "ChatMode")}
              </h3>
              
              {!isOpt1Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("在网关层部署智能意图路由层，将“硬核量化场景”与“深度定性与行为场景”分流处理，兼顾数据与逻辑。", "Deploy an intent-based router to split quantitative sandboxes and qualitative reasoning chains.")}
                </p>
              )}
            </div>

            {isOpt1Open && (
              <div className="space-y-2 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "不是所有问题都适合深度思考DeepThink。很多交易场景里，用户真正需要的是马上被拉住。",
                    "Intent classification ensures hard analytics go 100% to AIME's Python sandbox, while routing industrial logic to high-reasoning models."
                  )}
                </p>
                <div className="bg-indigo-50/20 dark:bg-indigo-950/10 p-2 rounded-lg border border-indigo-100/50 dark:border-indigo-950/30 text-[10px] leading-relaxed">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5">🌟 {t("投研推理链深度拓展", "Complete Research Chain")}</span>
                  {t("让 AI 摆脱简单的“数据陈列”，深度切入：“数据 ➔ 假设 ➔ 机制 ➔ 反证 ➔ 情景 ➔ 投资动作”的完整投研链路，实现从回答第1/2层到攻克第3层的代际跨越。", "Enable the AI to build structured frameworks: Data ➔ Hypothesis ➔ Mechanism ➔ Disproof ➔ Scenarios ➔ Investment Actions.")}
                </div>
              </div>
            )}
          </div>

          {/* Strategy 2 */}
          <div 
            onClick={() => setIsOpt2Open(!isOpt2Open)}
            className={`bg-card rounded-xl border p-5 shadow-sm cursor-pointer transition-all select-none flex flex-col justify-between space-y-2 ${isOpt2Open ? "border-indigo-400 bg-indigo-50/5 dark:bg-indigo-950/10" : "border-border hover:border-indigo-300 dark:hover:border-indigo-800"}`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("感知交互", "Interaction UX")}</h4>
                </div>
                {isOpt2Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("思路2：CoT呈现优化，渲染为排版整洁、类似人类思考的结构化步骤", "Progressive CoT Display & Async Rendering")}
              </h3>

              {!isOpt2Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("设置“开发日志 / 极客模式”开关，默认在前端自动包装为散户看得懂的结构化步骤，渲染为排版整洁、具备高阅读性的卡片文本", "Turn physical wait times into engaging, step-by-step cognitive feedback showing Agent milestones.")}
                </p>
              )}
            </div>

            {isOpt2Open && (
              <div className="space-y-2 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "交互界面的“极客外溢”：CoT 的呈现缺乏一层面向用户的“翻译包装”。直接将 raw JSON、bash 管道符命令和未转义的 stdout 扔给散户，有损体验。",
                    "The issue isn't the latency itself, but the lack of visibility. Exposing the reasoning chain transforms waiting times into active trust."
                  )}
                </p>
                
                {/* 引入“投研化”步骤组件 */}
                <div className="p-2 rounded-lg bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-950/30 space-y-1 font-mono text-[9px]">
                  <div className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3 shrink-0" /> {t("[✓] 正在实时穿透最新 SEC Form 4 披露文件...", "[✓] Querying SEC Form 4 database...")}
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3 shrink-0" /> {t("[✓] 正在调取 Python 财务计算引擎核对持股盈亏...", "[✓] Computing executive balances via Python engine...")}
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping inline-block shrink-0"></span>
                    {t("[ ] 正在将多维数据渲染为可交互的财务损益卡片...", "[ ] Rendering interactive financial cards...")}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Strategy 3 */}
          <div 
            onClick={() => setIsOpt3Open(!isOpt3Open)}
            className={`bg-card rounded-xl border p-5 shadow-sm cursor-pointer transition-all select-none flex flex-col justify-between space-y-2 ${isOpt3Open ? "border-indigo-400 bg-indigo-50/5 dark:bg-indigo-950/10" : "border-border hover:border-indigo-300 dark:hover:border-indigo-800"}`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <h4 className="text-[9px] font-bold uppercase tracking-wider font-mono">{t("行为陪伴", "EQ Companion")}</h4>
                </div>
                {isOpt3Open ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </div>
              <h3 className="text-xs font-bold text-foreground">
                {t("思路3：不只是脑子好的分析师，还是给情绪价值的交易陪伴搭子", "Behavioral Finance Intervention Closed-Loop")}
              </h3>

              {!isOpt3Open && (
                <p className="text-[11px] text-muted-foreground line-clamp-2">
                  {t("引入“情绪承接 ➔ 本土化解偏 ➔ 风控动作”思维，先共情用户、再拆解偏误，以柔性的表达配合极其坚定的风控硬边界阻断错误交易。", "De-escalate panic trading with strong retail sentiment understanding and rigid risk rules.")}
                </p>
              )}
            </div>

            {isOpt3Open && (
              <div className="space-y-2 pt-1 animate-fade-in text-[11px] text-muted-foreground">
                <p>
                  {t(
                    "喜欢做交易的朋友都知道，真正亏大钱，并不是因为不知道某家公司 PE、营收增速、资金流，而是在情绪最脆弱的时候做了错误动作：亏损后加倍补仓、重仓短期期权、爆仓边缘继续加杠杆、被社群情绪裹挟追高、把一次失败交易变成一场心理战。所以 Aime 不应该只是一个“更会分析股票的 AI”，还应该成为一个能在关键时刻拉住用户的 交易风险陪伴系统。真正有效的交易陪伴系统，不应该只靠固定话术说教，而应该能做到因人而异，根据识别用户的行为，情绪，风险偏好以及文化背景 做到个性化陪伴。 ",
                    "De-escalate high-emotion trading using retail lingo, firmly block revenge trades, and route decisions back to risk budgets, stop-loss ratios, and liquidation checks."
                  )}
                </p>
                <div className="bg-indigo-50/20 dark:bg-indigo-950/10 p-2 rounded-lg border border-indigo-100/50 dark:border-indigo-950/30 text-[10px] italic">
                  {t(
                    "“我理解你现在想补仓，因为亏损会让人想夺回控制感。但现在补仓不是策略，是复仇交易。我们先暂停，核对三个指标：保证金安全、仓位承受上限、以及初始逻辑是否被证伪。”",
                    "\"I know you want to average down because losing feels like losing control. But right now, that is a revenge trade, not a strategy. Let's pause and check: margin safety, leverage ceiling, and thesis invalidation.\""
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Final Wrap-up Card */}
      <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-5 border border-indigo-100 dark:border-indigo-900/40 flex flex-col md:flex-row items-center gap-4">
        <Info className="w-7 h-7 text-indigo-600 dark:text-indigo-400 shrink-0" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-foreground">
            {t("知识产权声明", "Strategic Action Points for AIME")}
          </h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            {t(
              "本评测项目及报告（包括但不限于文字内容、设计思路、58个评测案例、指标打分维度、可视化页面及代码等）的全部知识产权与著作权均归创作者本人所有，并受到《中华人民共和国著作权法》、《中华人民共和国民法典》及国际知识产权条约的严格保护。本评测结论、设计逻辑、比较维度及代码实现，仅限用于个人求职、面试准备及技术交流。",
              "A mature domain assistant must synergize AIME's engineering-level accuracy with Gemini's narrative depth and empathy. Lowering interface latency (via streaming intermediate nodes), integrating reasoning loops, and addressing retail sentiments (r/wallstreetbets) are pivotal to transforming raw numbers into highly actionable, trusted financial intelligence."
            )}
          </p>
        </div>
      </div>

    </div>
  );
}
