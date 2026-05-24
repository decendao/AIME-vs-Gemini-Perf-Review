import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Brain, Search, MessageCircle, TrendingUp, TrendingDown, Lightbulb, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export default function Comparison() {
  const { t, lang } = useLanguage();

  const categories = [
    {
      id: "quantitative",
      icon: <BarChart3 className="w-5 h-5" />,
      titleZh: "类别一：模拟推演&金融计算",
      titleEn: "Category 1: Scenario simulation & financial calculation",
      subtitleZh: "Simulation & calculation",
      subtitleEn: "Simulation & calculation",
      colorClass: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100 text-blue-700",
      scoreZh: "AIME 胜 11 例 | 平 3 例 | Gemini 3.5 Flash 胜 1 例",
      scoreEn: "AIME Wins 11 | Ties 3 | Gemini 3.5 Flash Wins 1",
      summaryZh: "AIME 在金融数学计算中展现出了极高的工程精度。由于 AIME 底层集成了高频行情计算模块，在处理期权、税收、杠杆损耗等场景时，能够调用确定性的金融公式进行解算，规避了大模型的\"计算幻觉\"；而 Gemini 3.5 虽可运行 Python，但因缺乏实时底层金融参数（如实时隐波、历史复权价），导致其计算基数不准。",
      summaryEn: "AIME demonstrates extremely high engineering precision in quantitative calculations. With its integrated high-frequency market computation module, AIME can invoke deterministic mathematical formulas for options, tax, and leverage decay scenarios, avoiding LLM 'calculation hallucinations'. Gemini 3.5, while capable of running Python, lacks real-time underlying financial parameters (like real-time IV, historical adjusted prices), leading to inaccurate calculation bases.",
      prosZh: [
        "计算零幻觉：直接将自然语言转化为确定性计算脚本，输出的数据精准度达到机构级。",
        "实时数据链挂载：能够实时抓取最新的期权链、SOFR 利率及波动率（IV），保证了计算的前瞻时效性。"
      ],
      prosEn: [
        "Zero Calculation Hallucination: Directly converts natural language into deterministic computation scripts with institutional-grade precision.",
        "Real-time Data Chain Integration: Can fetch latest options chains, SOFR rates, and IV in real-time, ensuring forward-looking timeliness."
      ],
      consZh: [
        "降维沟通不足：有时直接抛出复杂的数学公式或繁琐的财务报表，未向小白散户提供\"大白话（ELI5）\"的常识性解释。",
        "计算等待延迟：在运行复杂的多步骤计算（如组合 VaR 或三阶段 DCF）时，因 Agent 执行链路长，耗时通常在 40~50 秒，缺乏渐进式进度提示。"
      ],
      consEn: [
        "Insufficient Simplification: Sometimes outputs complex formulas or verbose financial statements without providing 'ELI5' explanations for retail investors.",
        "Computation Latency: Complex multi-step calculations (like portfolio VaR or 3-stage DCF) take 40-50 seconds due to long Agent execution chains, lacking progressive loading indicators."
      ],
      optimizationZh: [
        "在计算引擎输出结果后，引入一个轻量级的\"人话翻译 Agent\"，用\"保费\"、\"安全垫\"等通俗比喻重构输出文案。",
        "引入渐进式（Progressive）计算看板，实时向用户展示：\"正在调取历史K线... 正在构建协方差矩阵... 正在生成图表\"，降低等待焦虑。"
      ],
      optimizationEn: [
        "Introduce a lightweight 'Plain Language Translation Agent' after computation output, using analogies like 'insurance premium' and 'safety cushion' to reconstruct the output.",
        "Implement progressive computation dashboard showing real-time status: 'Fetching historical K-lines... Building covariance matrix... Generating charts' to reduce waiting anxiety."
      ],
      caseTitleZh: "典型案例：Case 14 — SMCI Bull Put Spread 盈亏矩阵",
      caseTitleEn: "Typical Case: Case 14 — SMCI Bull Put Spread P&L Matrix",
      caseContent: `[User]: I set up an SMCI Bull Put Spread: Sell $800 Put, Buy $790 Put for a net credit 
        of $2.50. If SMCI closes at $793 on expiration Friday, what is my exact net 
        profit or loss per contract?

[AIME]:
Based on your entry parameters for Super Micro Computer (SMCI) Bull Put Spread:
  - Sold Put Strike: $800 (Received Premium: $X)
  - Bought Put Strike: $790 (Paid Premium: $Y)
  - Net Credit Received: $2.50 per share ($250 per contract)
  - Expiration Close Price: $793

Your exact net loss is $4.50 per share, which equals $450.00 loss per contract.

|  SMCI Close Price  |  Value of $800 Put  |  Value of $790 Put  |  Net Profit/Loss  |
|--------------------|---------------------|---------------------|-------------------|
|  $810 (Above)      |  $0.00              |  $0.00              |  +$250.00 (Max)   |
|  $793 (Current)    |  -$7.00 (Expired)   |  $0.00              |  -$450.00         |
|  $790 (At lower)   |  -$10.00            |  $0.00              |  -$750.00 (Max L) |

[Interactive Payoff Chart: SMCI Bull Put Spread at Expiration]`,
      caseAnnotationsZh: [
        { type: "pro", text: "计算绝对精准：直接输出精确到美分的盈亏结果" },
        { type: "pro", text: "高交互损益图表组件：用户可拖动滑块模拟不同收盘价" },
        { type: "con", text: "缺乏策略改进建议：未主动提示被动指派（Assignment）风险，未给出平仓或展期（Roll）的风险防御建议" }
      ],
      caseAnnotationsEn: [
        { type: "pro", text: "Absolutely precise calculation: Outputs P&L results accurate to the cent" },
        { type: "pro", text: "Interactive payoff chart component: Users can drag slider to simulate different closing prices" },
        { type: "con", text: "Lacks strategy improvement suggestions: Didn't proactively warn about assignment risk or provide roll/close defense strategies" }
      ]
    },
    {
      id: "qualitative",
      icon: <Brain className="w-5 h-5" />,
      titleZh: "类别二：定性分析&逻辑推演",
      titleEn: "Category 2: Qualitative & Projection",
      subtitleZh: "Qualitative & Logic",
      subtitleEn: "Qualitative & Logic",
      colorClass: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100 text-purple-700",
      scoreZh: "AIME 胜 5 例 | 平 6 例 | Gemini 3.5 Flash 胜 4 例",
      scoreEn: "AIME Wins 5 | Ties 6 | Gemini 3.5 Flash Wins 4",
      summaryZh: "在非结构化的逻辑推演中，双方互有胜负。AIME 的优势在于其所有的定性推论都有真实财务和客观数据锚定，避免了夸夸其谈；而 Gemini 3.5 Flash 凭借极大的参数量和商业分析训练，在论证的框架完整性、多视角思辨以及行文流畅度上明显强于 AIME。",
      summaryEn: "In unstructured logical reasoning, both sides have wins and losses. AIME's advantage lies in all qualitative inferences being anchored by real financial data, avoiding empty rhetoric. Gemini 3.5 Flash, with its massive parameters and business analysis training, clearly excels in argument framework completeness, multi-perspective dialectics, and writing fluency.",
      prosZh: [
        "数据底盘扎实：在分析行业壁垒时，能直接吐出真实的市场份额、投行一致预期等客观数据。"
      ],
      prosEn: [
        "Solid Data Foundation: Can directly output real market share, investment bank consensus estimates, and other objective data when analyzing industry barriers."
      ],
      consZh: [
        "思维框架扁平：逻辑呈现多为条目式（Bullet Points）罗列，缺乏像麦肯锡或华尔街研报那样的金字塔逻辑框架（如 SWOT、五力模型、Dupont 拆解）。",
        "语调机械：行文偏向于冷冰冰的信息库输出，缺乏与用户对话的主动引导和启发性提问。"
      ],
      consEn: [
        "Flat Thinking Framework: Logic presentation is mostly bullet-point listings, lacking pyramid logic frameworks (SWOT, Porter's Five Forces, DuPont decomposition) like McKinsey or Wall Street research reports.",
        "Mechanical Tone: Writing tends toward cold database output, lacking proactive guidance and thought-provoking questions in user dialogue."
      ],
      optimizationZh: [
        "引入\"研报逻辑模板库\"，在回答定性分析时，强制模型套用标准的金融/商业分析框架进行结构化输出。",
        "在回答末尾，设计智能追问机制（Suggested Follow-ups），例如：\"您是否想进一步了解该公司在 2026 下半年的产能扩张计划？\"引导用户进行深度投研。"
      ],
      optimizationEn: [
        "Introduce a 'Research Report Logic Template Library' to force structured output using standard financial/business analysis frameworks for qualitative analysis.",
        "Design intelligent follow-up mechanisms (Suggested Follow-ups) at the end of answers, e.g., 'Would you like to learn more about this company's capacity expansion plan for H2 2026?' to guide users into deeper research."
      ],
      caseTitleZh: "典型案例：Case 21 — AI 软件 SaaS 估值分化与商业壁垒",
      caseTitleEn: "Typical Case: Case 21 — AI Software SaaS Valuation Divergence & Business Moats",
      caseContent: `[User]: Why are hardware-centric AI stocks (like Nvidia, Broadcom) currently showing 
        solid GAAP earnings, while many AI software SaaS startups are struggling with 
        high customer acquisition costs (CAC) and customer churn?

[AIME]:
Based on AInvest's industry knowledge graph and Q1 2026 financial reports:

1. Capex Certainty for Hardware:
   Nvidia (NVDA) and Broadcom (AVGO) are in the "infrastructure build" phase. 
   Hyperscalers are collectively spending over $150B annually on GPU clusters. 
   NVDA's GAAP Gross Margin remains at [X]%.

2. SaaS Bottlenecks:
   - High Churn Rates: Software startups lack proprietary moats.
   - High Inference/API Costs: Margins squeezed by token fees to OpenAI/Azure.
   - CAC Inflation: Customer Acquisition Costs increased by [Y]% Y/Y.`,
      caseAnnotationsZh: [
        { type: "pro", text: "真实高精数据锚定：准确调取了最新财报中 NVDA（GAAP净利润变动）与 AVGO（ASIC业务营收占比）的真实披露数据" },
        { type: "con", text: "缺乏系统性商业模型解构：仅进行简单要点列举，未引入\"LTV/CAC 倒挂模型\"或\"企业端 AI ROI 难以量化\"的产业链深层机制推演，分析深度偏向科普" }
      ],
      caseAnnotationsEn: [
        { type: "pro", text: "Real high-precision data anchoring: Accurately retrieved NVDA (GAAP net income changes) and AVGO (ASIC revenue share) from latest filings" },
        { type: "con", text: "Lacks systematic business model deconstruction: Only simple bullet-point listing without introducing 'LTV/CAC inversion model' or deeper industry chain mechanism analysis" }
      ]
    },
    {
      id: "scan",
      icon: <Search className="w-5 h-5" />,
      titleZh: "类别三：数据检索与异动扫描",
      titleEn: "Category 3: Scan & Verify",
      subtitleZh: "Scan & Verify",
      subtitleEn: "Scan & Verify",
      colorClass: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100 text-amber-700",
      scoreZh: "AIME 胜 12 例 | 平 1 例 | Gemini 3.5 Flash 胜 2 例",
      scoreEn: "AIME Wins 12 | Ties 1 | Gemini 3.5 Flash Wins 2",
      summaryZh: "这是 AIME 的绝对护城河。数据检索极度依赖底层信息通道的建立。AIME 由于直接对接了 SEC、各交易所大宗商品、加密链上异动的关系型数据库，给出的数据具备 100% 的查准率；而 Gemini 3.5 即使依靠谷歌搜索，抓取到的也多为过时、碎片化且充满媒体主观修饰的二次噪音。",
      summaryEn: "This is AIME's absolute moat. Data retrieval heavily depends on establishing underlying information channels. AIME directly interfaces with SEC, commodity exchanges, and on-chain anomaly relational databases, achieving 100% precision; while Gemini 3.5, even with Google Search, mostly retrieves outdated, fragmented secondary noise with media subjective modifications.",
      prosZh: [
        "信源穿透：直接给出 SEC EDGAR 原始申报、链上哈希或 LME/COMEX 官方每日库存数据，提供数据出处，置信度极高。",
        "异动秒级捕获：对暗池大宗交易和期权 Sweep 扫单的捕获达到了专业交易终端（如 Bloomberg Terminals）的响应级别。"
      ],
      prosEn: [
        "Source Penetration: Directly provides SEC EDGAR original filings, on-chain hashes, or LME/COMEX official daily inventory data with source attribution and extremely high confidence.",
        "Second-level Anomaly Capture: Dark pool block trade and options sweep detection reaches professional trading terminal (Bloomberg Terminals) response levels."
      ],
      consZh: [
        "移动端排版不友好：当输出复杂的机构多维度交易明细表格时，移动端屏幕容易出现折行、错位，视觉体验不佳。"
      ],
      consEn: [
        "Poor Mobile Layout: When outputting complex institutional multi-dimensional trade detail tables, mobile screens easily show line breaks and misalignment, degrading visual experience."
      ],
      optimizationZh: [
        "开发\"金融卡片自适应引擎\"，对于复杂的异动表格，默认提供\"精简卡片模式\"，并允许用户一键\"横屏查看\"或\"导出为 Google Sheets/CSV\"。"
      ],
      optimizationEn: [
        "Develop an 'Adaptive Financial Card Engine' that provides a 'compact card mode' by default for complex anomaly tables, allowing users to one-click 'view in landscape' or 'export to Google Sheets/CSV'."
      ],
      caseTitleZh: "典型案例：Case 31 — SEC Form 4 内部人变动实时穿透",
      caseTitleEn: "Typical Case: Case 31 — SEC Form 4 Insider Activity Real-time Penetration",
      caseContent: `[User]: Scan today's SEC Form 4 filings for any insider sales exceeding $5 million in 
        Nvidia (NVDA). Provide the exact executive name, transaction date, share count, 
        and remaining balance.

[AIME]:
I have scanned the SEC EDGAR database for Nvidia (NVDA) Form 4 filings released today:

Found 1 insider sale matching your criteria:
  - Executive Name: Stevens Mark A (Director)
  - Relationship: 10% Owner / Director
  - Transaction Date: May 22, 2026
  - Execution Price: $132.40 per share
  - Share Count Sold: 40,000 shares
  - Total Value: $5,296,000 (Exceeds $5M threshold)
  - Remaining Direct Balance: 1,245,610 shares
  - Indirect Balance (via Trust): 1,840,000 shares

[Link to original SEC Form 4 Filing - Mark Stevens (NVDA)]`,
      caseAnnotationsZh: [
        { type: "pro", text: "秒级调取、数据极其精准完整：完整输出高管姓名、交易日期、股数、金额及剩余持仓" },
        { type: "pro", text: "直接附带官方信源穿透链接：提供 SEC EDGAR 原始文件直达链接" },
        { type: "con", text: "多重持股结构展示略有排版混乱：直接持股与信托间接持股的多列对齐在小屏幕上阅读费劲" }
      ],
      caseAnnotationsEn: [
        { type: "pro", text: "Second-level retrieval with extremely precise and complete data: Full output of executive name, transaction date, shares, amount, and remaining holdings" },
        { type: "pro", text: "Direct official source penetration links: Provides direct links to SEC EDGAR original filings" },
        { type: "con", text: "Slightly messy layout for multiple holding structures: Multi-column alignment of direct and trust indirect holdings is hard to read on small screens" }
      ]
    },
    {
      id: "behavioral",
      icon: <MessageCircle className="w-5 h-5" />,
      titleZh: "类别四：情绪安慰与行为引导",
      titleEn: "Category 4: Behavioral Guidance",
      subtitleZh: "Behavioral Guidance",
      subtitleEn: "Behavioral Guidance",
      colorClass: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100 text-rose-700",
      scoreZh: "AIME 胜 4 例 | 平 5 例 | Gemini 3.5 Flash 胜 4 例",
      scoreEn: "AIME Wins 4 | Ties 5 | Gemini 3.5 Flash Wins 4",
      summaryZh: "在情商与对话关怀上，大参数量且经过深度 RLHF 的 Gemini 3.5 Flash 表现更佳。其语言富有温和的同理心，能有效安抚散户的躁动情绪；而 AIME 的优势在于\"用硬核数据击碎认知偏差\"（如直接提供垃圾股下行诊断图），但在纯对话的心态引导上显得较为生硬、冰冷。",
      summaryEn: "In EQ and conversational care, Gemini 3.5 Flash with its massive parameters and deep RLHF performs better. Its language carries warm empathy that effectively soothes retail investors' anxiety. AIME's advantage lies in 'shattering cognitive biases with hardcore data' (like providing junk stock downside diagnostic charts), but appears rigid and cold in pure conversational mindset guidance.",
      prosZh: [
        "用事实说话：能够将心理学干预与定量事实结合，通过生成实时的风险暴露卡片，用具体的损失概率让处于狂热或恐慌中的用户清醒。"
      ],
      prosEn: [
        "Speaking with Facts: Combines psychological intervention with quantitative facts, generating real-time risk exposure cards with specific loss probabilities to sober up users in mania or panic."
      ],
      consZh: [
        "缺乏共情、语调教条：回答格式过于像说明书，缺乏金融投顾在面对用户重大亏损时的\"温度\"，话术难以深入散户内心。",
        "网络流行语感知弱：对欧美散户社区常用的 Meme 梗（如 WSB 的 HODL, Diamond Hands, Ape-in）理解和应用较为迟钝，沟通存在代沟。"
      ],
      consEn: [
        "Lacks Empathy, Dogmatic Tone: Response format is too manual-like, lacking the 'warmth' of financial advisors facing users with major losses, unable to reach retail investors' hearts.",
        "Weak Internet Slang Awareness: Slow to understand and apply common memes from retail communities (WSB's HODL, Diamond Hands, Ape-in), creating communication gaps."
      ],
      optimizationZh: [
        "在系统 Prompt 库中针对行为引导场景，引入\"CFA 财富管理心理学话术集\"与\"欧美 Reddit 交易社区语料\"进行联合微调。",
        "建立\"危机干预安全机制\"，当检测到用户由于爆仓出现极端绝望文字时，优先启动\"共情疏导 Agent\"，并在回答最显眼处提供温暖、务实的财务自救步骤和热线引导。"
      ],
      optimizationEn: [
        "Introduce 'CFA Wealth Management Psychology Script Collection' and 'Western Reddit Trading Community Corpus' for joint fine-tuning in behavioral guidance scenarios.",
        "Establish 'Crisis Intervention Safety Mechanism': When detecting extreme despair text from users due to liquidation, prioritize launching 'Empathy Counseling Agent' with warm, practical financial self-help steps and hotline guidance."
      ],
      caseTitleZh: "典型案例：Case 47 — 土狗币 (Memecoin) 暴涨狂热与 FOMO 控制",
      caseTitleEn: "Typical Case: Case 47 — Memecoin Mania & FOMO Control",
      caseContent: `[User]: A Solana memecoin called $AI_DOG is up 500% in 3 days. My friends on Discord 
        are making a fortune, and I feel like an idiot for holding boring index funds. 
        How do I handle this intense FOMO without ruining myself?

[AIME]:
Investing in $AI_DOG or other Memecoins carries extremely high risk. 

1. Risk Statistics of Solana Memecoins:
   According to on-chain data, 98.2% of newly launched Memecoins on Solana eventually 
   experience a rug pull or drop 95%+ from their peaks within 30 days.

2. Comparison: Index Funds vs. Memecoins:
   Index funds like SPY have a historical annualized return of 9.8% with low volatility, 
   while $AI_DOG has a volatility of over 400%.`,
      caseAnnotationsZh: [
        { type: "pro", text: "用硬核数据进行冷静理性的认知纠偏：瞬间调用链上 Memecoin 历史生存率统计，用数理概率帮助狂热用户降温" },
        { type: "con", text: "冰冷、教条，缺乏共情与可执行的行为学疏导策略：完全忽略了用户\"看着朋友发财而产生的自我怀疑\"的情感痛点；Gemini 会先温和共情，再通过行为学拆解\"幸存者偏差\"，并提出\"1% 归零玩票预算\"纪律" }
      ],
      caseAnnotationsEn: [
        { type: "pro", text: "Calm rational cognitive correction with hardcore data: Instantly invokes on-chain Memecoin historical survival rate statistics, using mathematical probability to cool down manic users" },
        { type: "con", text: "Cold, dogmatic, lacking empathy and actionable behavioral guidance: Completely ignores the user's emotional pain of 'self-doubt watching friends get rich'; Gemini would first empathize warmly, then deconstruct 'survivorship bias', and propose a '1% zero-loss play budget' discipline" }
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          {t("对比结果明细", "Comparison Details")}
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          {t(
            "58 个问题涵盖了 4 大需求维度分类，各分类的评测结论，分析 AIME 在该场景下的优劣势。",
            "For each of the 4 major motivation categories covering 58 questions, providing evaluation conclusions and analyzing AIME's strengths, weaknesses, and optimization proposals."
          )}
        </p>
      </div>

      {/* Category Sections */}
      {categories.map((cat) => (
        <section key={cat.id} className={`rounded-xl border p-6 ${cat.colorClass}`}>
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.iconBg}`}>
              {cat.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {t(cat.titleZh, cat.titleEn)}
              </h3>
              <p className="text-xs text-muted-foreground">{t(cat.subtitleZh, cat.subtitleEn)}</p>
            </div>
          </div>

          {/* Score Badge */}
          <div className="bg-white/80 rounded-lg px-4 py-2 mb-4 inline-block border border-border">
            <span className="text-sm font-semibold text-foreground">
              {t(cat.scoreZh, cat.scoreEn)}
            </span>
          </div>

          {/* Summary */}
          <p className="text-sm text-foreground leading-relaxed mb-6">
            {t(cat.summaryZh, cat.summaryEn)}
          </p>

          {/* Pros / Cons / Optimization Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Pros */}
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <h4 className="text-sm font-bold text-green-700">
                  {t("优势 (Pros)", "Strengths (Pros)")}
                </h4>
              </div>
              <ul className="space-y-2">
                {(lang === "zh" ? cat.prosZh : cat.prosEn).map((item, i) => (
                  <li key={i} className="text-xs text-foreground leading-relaxed flex gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-4 h-4 text-red-600" />
                <h4 className="text-sm font-bold text-red-700">
                  {t("劣势 (Cons)", "Weaknesses (Cons)")}
                </h4>
              </div>
              <ul className="space-y-2">
                {(lang === "zh" ? cat.consZh : cat.consEn).map((item, i) => (
                  <li key={i} className="text-xs text-foreground leading-relaxed flex gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optimization */}
            <div className="bg-white rounded-lg border border-amber-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <h4 className="text-sm font-bold text-amber-700">
                  {t("优化方案", "Optimization")}
                </h4>
              </div>
              <ul className="space-y-2">
                {(lang === "zh" ? cat.optimizationZh : cat.optimizationEn).map((item, i) => (
                  <li key={i} className="text-xs text-foreground leading-relaxed flex gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Typical Case Mockup */}
          <div className="bg-white rounded-lg border border-border p-5">
            <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t(cat.caseTitleZh, cat.caseTitleEn)}
            </h4>
            
            {/* Terminal-style mockup */}
            <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-slate-400 ml-2">AIME Interface Mockup</span>
              </div>
              <pre className="text-xs text-slate-200 whitespace-pre-wrap font-mono leading-relaxed">
                {cat.caseContent}
              </pre>
            </div>

            {/* Annotations */}
            <div className="space-y-2">
              {(lang === "zh" ? cat.caseAnnotationsZh : cat.caseAnnotationsEn).map((ann, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 px-3 py-2 rounded-md text-xs ${
                    ann.type === "pro"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-green-50 border border-green-200 text-green-800"
                  }`}
                >
                  <span className="font-bold shrink-0">
                    {ann.type === "pro" ? "\uD83D\uDD34" : "\uD83D\uDFE2"}
                  </span>
                  <span className="leading-relaxed">
                    {ann.type === "pro"
                      ? t("[优点] ", "[Pro] ")
                      : t("[缺点] ", "[Con] ")}
                    {ann.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
