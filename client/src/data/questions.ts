// ============================================================
// 58 Questions Evaluation Data - Auto-generated from Excel
// AIME vs Gemini 3.5 Flash Comparative Evaluation
// ============================================================

export interface Question {
  id: number;
  category: string;
  scenario: string;
  motivation: string;
  difficulty: number;
  frequency: number;
  questionEn: string;
  questionZh: string;
  // Fields to be filled after evaluation
  result?: "win" | "tie" | "lose"; // AIME win/tie/lose
  aimeTimeSeconds?: number;
  geminiTimeSeconds?: number;
  analysisZh?: string;
  analysisEn?: string;
  aimeProsCons?: { pros: string[]; cons: string[] };
  geminiProsCons?: { pros: string[]; cons: string[] };
  screenshots?: { aime?: string; gemini?: string };
}

// Category labels for i18n
export const CATEGORY_LABELS: Record<string, { zh: string; en: string }> = {
  "数理计算": { zh: "数理计算", en: "Quantitative Calculation" },
  "定性分析": { zh: "定性分析", en: "Qualitative Analysis" },
  "数据检索": { zh: "数据检索", en: "Data Retrieval & Scan" },
  "情绪引导": { zh: "情绪引导", en: "Emotional Guidance" },
};

// Motivation labels for i18n
export const MOTIVATION_LABELS: Record<string, { zh: string; en: string }> = {
  "定量分析": { zh: "定量分析", en: "Quantitative Rigor" },
  "定性分析": { zh: "定性分析", en: "Qualitative Logic" },
  "异动验证": { zh: "异动验证", en: "Scan & Verify" },
  "行为引导": { zh: "行为引导", en: "Behavioral EQ" },
};

// All 58 questions
export const questions: Question[] = [
  {
    "id": 1,
    "category": "推演计算",
    "scenario": "杠杆ETF损耗",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I bought NVDL (2x leveraged NVDA) at $100. If NVDA drops 5% tomorrow and rises 5.3% the next day, what is my exact net return on NVDL? Explain the math of path dependency.",
    "questionZh": "我在100美元买入了NVDL（2倍做多英伟达杠杆ETF）。如果英伟达（NVDA）明天下跌5%，后天上涨5.3%，我持有的NVDL确切净收益率是多少？请解释其中的路径依赖数理逻辑。"
  },
  {
    "id": 2,
    "category": "推演计算",
    "scenario": "期权希腊字母敏感度",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "I hold an AMD June 2026 $200 Call. Today AMD dropped $4, and implied volatility (IV) fell by 2%. Based on Delta, Gamma, Theta, and Vega, calculate the estimated price change of my option.",
    "questionZh": "我持有AMD 2026年6月到期、行权价200美元的看涨期权（Call）。今天AMD股价下跌了4美元，且隐波（IV）下降了2%。请根据 Delta, Gamma, Theta 和 Vega 测算该期权价格的预估变动量。"
  },
  {
    "id": 3,
    "category": "推演计算",
    "scenario": "个人资本利得税税率",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 5,
    "questionEn": "I live in California (single filer, $120k annual salary). I sold 50 shares of NVDA for a $20,000 gain. 30 shares were held for 9 months, and 20 shares were held for 14 months. Calculate my exact estimated federal and state tax liability.",
    "questionZh": "我住在加州（单身报税，年薪12万美金）。我卖出了50股英伟达（NVDA），获利2万美元。其中30股持有时间为9个月（短期），20股持有时间为14个月（长期）。请计算我需要缴纳的联邦和州级估算资本利得税。"
  },
  {
    "id": 4,
    "category": "推演计算",
    "scenario": "备兑期权盈亏平衡点",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I own 100 shares of PLTR at $35. If I sell a 30 DTE Call at $40 strike for a $1.50 premium, what is my exact maximum profit, maximum loss, and breakeven price at expiration.",
    "questionZh": "我以35美元的成本持有100股PLTR。如果我卖出一张30天到期（30 DTE）、行权价40美元的看涨期权（Call），获得1.50美元的权利金，请问该备兑期权策略在到期时的最大利润、最大亏损和盈亏平衡价分别是多少？"
  },
  {
    "id": 5,
    "category": "推演计算",
    "scenario": "洗售规则",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "On Oct 1, I sold 100 shares of SOXL at a $5,000 loss. On Oct 15, I bought 50 shares of SOXL back. On Nov 5, I sold those 50 shares for a $1,000 gain. Under IRS rules, what is my disallowed loss and the adjusted cost basis of my remaining position?",
    "questionZh": "我在10月1日以5,000美元的亏损卖出了100股SOXL。在10月15日，我重新买入了50股SOXL。随后在11月5日，我以1,000美元的盈利卖出了这50股。根据美国国税局（IRS）的洗售规则（Wash-Sale Rule），我的被拒亏损（disallowed loss）是多少？我剩余持仓的调整后成本价（cost basis）又是多少？"
  },
  {
    "id": 6,
    "category": "推演计算",
    "scenario": "Crypto质押复合年化",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "If I stake 10 ETH in a liquid staking protocol (e.g., Lido) at 3.8% APR with daily compounding, and ETH price appreciates 15% annually against USD, what is my exact dollar-denominated net return after 2 years, excluding gas fees?",
    "questionZh": "如果我在流动性抵押协议（如 Lido）中质押了 10 个 ETH，年化收益率（APR）为 3.8% 并按日复利，且 ETH 价格兑美元每年升值 15%。在不考虑 gas 费的情况下，2 年后我以美元计价的确切净回报是多少？"
  },
  {
    "id": 7,
    "category": "推演计算",
    "scenario": "跨资产金银比对冲比例",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "The current Gold/Silver ratio is 85. If I want to execute a mean-reversion trade to 75, how many shares of SLV (Silver ETF) do I need to buy to hedge 100 shares of GLD (Gold ETF) to be beta-neutral?",
    "questionZh": "当前的金银比（Gold/Silver ratio）是85。如果我想进行均值回归交易（预期比例降至75），我需要购买多少股SLV（白银ETF）才能对冲100股GLD（黄金ETF），从而实现Beta中性？"
  },
  {
    "id": 8,
    "category": "推演计算",
    "scenario": "组合资产回撤与夏普",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "My portfolio is 40% QQQ, 30% SOXX, 20% IBIT, and 10% GLD. Based on past 3-year weekly data, calculate the historical Max Drawdown and Sharpe Ratio of this exact combination.",
    "questionZh": "我的投资组合配置为：40% QQQ、30% SOXX、20% IBIT、10% GLD。请根据过去3年的周度历史数据，计算该特定组合的历史最大回撤（Max Drawdown）和夏普比率（Sharpe Ratio）。"
  },
  {
    "id": 9,
    "category": "推演计算",
    "scenario": "0DTE期权时间衰减量化",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "I am buying a 0DTE SPY Put at 1:00 PM EST with the strike at $510. If SPY stays flat at $512 for the next 2 hours, calculate the expected percentage decay of my premium due to Theta.",
    "questionZh": "我在美东时间下午 1:00 买入了一张行权价 510 美元的 0DTE（当天到期）SPY 看跌期权（Put）。如果接下来的 2 小时内 SPY 维持在 512 美元横盘，请计算由于时间流逝（Theta），该期权权利金的预估贬值百分比。"
  },
  {
    "id": 10,
    "category": "推演计算",
    "scenario": "公允价值贴现",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Calculate the fair value of Broadcom (AVGO) using a 3-stage DCF model. Assume a 12% growth rate for the next 5 years, 8% for the following 5 years, a terminal growth rate of 3%, and a WACC of 8.5%.",
    "questionZh": "请使用三阶段现金流贴现（DCF）模型计算博通（AVGO）的公允价值。假设未来5年的增长率为12%，之后5年的增长率为8%，永续增长率为3%，加权平均资本成本（WACC）为8.5%。"
  },
  {
    "id": 11,
    "category": "推演计算",
    "scenario": "商品期货滚仓损耗",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I am holding USO (Crude Oil ETF). If the WTI Crude forward curve is in contango with a 1.5% monthly premium, how much yield do I lose annually due to roll yield decay? Show me the formula.",
    "questionZh": "我持有原油ETF（USO）。如果美油（WTI）远期曲线处于现货贴水/升水（Contango）状态，且每月溢价为1.5%，我每年因展期收益率衰减（roll yield decay）会损失多少收益？请向我展示计算公式。"
  },
  {
    "id": 12,
    "category": "推演计算",
    "scenario": "仓位管理",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "I have a $50,000 trading account. I want to trade a high-implied-volatility AI stock before earnings. My historical win rate for this setup is 55%, with an average win of 80% and an average loss of 40%. Apply the Kelly Criterion to calculate my optimal bet size.",
    "questionZh": "我有一个5万美元的交易账户。我想在财报公布前交易一只高隐波的AI股票。我该策略的历史胜率为55%，平均盈利幅度为80%，平均亏损幅度为40%。请应用凯利公式（Kelly Criterion）计算我的最佳单次交易仓位比例。"
  },
  {
    "id": 13,
    "category": "推演计算",
    "scenario": "Roth IRA超额罚款避坑",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 5,
    "questionEn": "I accidentally over-contributed $1,500 to my Roth IRA this tax year. What is the exact penalty calculation if I do not withdraw the excess by the tax filing deadline, and what are the exact steps to calculate the net income attributable (NIA) to remove it?",
    "questionZh": "我本税年不小心对 Roth IRA 超额存入了 1,500 美元。如果我没有在报税截止日前取出超额资金，确切的罚金应该如何计算？另外，要通过计算净收入归属（NIA）来取出这笔资金，确切的步骤是怎样的？"
  },
  {
    "id": 14,
    "category": "推演计算",
    "scenario": "期权差价策略",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I set up an SMCI Bull Put Spread: Sell $800 Put, Buy $790 Put for a net credit of $2.50. If SMCI closes at $793 on expiration Friday, what is my exact net profit or loss per contract?",
    "questionZh": "我构建了一个SMCI的牛市看跌期权价差策略（Bull Put Spread）：卖出800美元的Put，买入790美元的Put，获得2.50美元的净权利金。如果SMCI在到期日周五收于793美元，我每张合约确切的净利润或亏损是多少？"
  },
  {
    "id": 15,
    "category": "推演计算",
    "scenario": "证券质押杠杆爆仓线",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I have a $200k portfolio at Interactive Brokers and want to take a portfolio margin loan at the current SOFR rate + 1.5% to buy more TSM. If TSM drops 25%, what is my exact buffer before I trigger a margin call?",
    "questionZh": "我在盈透证券（IBKR）有一个20万美元的组合账户，想以当前的SOFR利率+1.5%借入投资组合保证金（Portfolio Margin）来加仓台积电（TSM）。如果台积电价格下跌25%，在触发强制平仓/追加保证金（Margin Call）之前，我确切的缓冲空间是多少？"
  },
  {
    "id": 16,
    "category": "定性定量分析",
    "scenario": "半导体光刻垄断壁垒",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Explain why ASML’s EUV technology is considered an absolute monopoly. What are the key technological and supply chain bottlenecks that prevent competitors like Nikon or Canon from catching up?",
    "questionZh": "请解释为什么ASML的EUV（极紫外光刻）技术被视为绝对垄断。有哪些核心的技术和供应链壁垒，导致尼康（Nikon）或佳能（Canon）等竞争对手无法追赶？"
  },
  {
    "id": 17,
    "category": "定性定量分析",
    "scenario": "HBM3e/4与GPU生态",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Why is HBM3e/HBM4 memory bandwidth critical for Nvidia’s Rubin architecture? Analyze the competitive advantages of SK Hynix versus Samsung in securing Nvidia's qualification.",
    "questionZh": "为什么HBM3e/HBM4高带宽内存对英伟达的 Rubin 架构至关重要？请分析 SK 海力士（SK Hynix）相比三星（Samsung）在获得英伟达供货认证方面的竞争优势。"
  },
  {
    "id": 18,
    "category": "定性定量分析",
    "scenario": "黄金信用本位回归逻辑",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Explain why global central banks are aggressively buying gold in 2026 despite high interest rates. How does the \"weaponization of USD reserves\" change the long-term qualitative case for gold over paper currencies?",
    "questionZh": "解释为什么在全球处于高利率环境的2026年，全球央行仍在激进购买黄金。‘’美元储备武器化‘’如何改变了黄金相比纸币的长期定性投资逻辑？"
  },
  {
    "id": 19,
    "category": "定性定量分析",
    "scenario": "美股ADR与本土股持仓差别",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I want to invest in TSMC but am torn between buying TSM ADR on the NYSE or 2330 on the Taiwan Stock Exchange. Explain the structural risks of holding ADRs, including withholding tax differences and currency conversion mechanics.",
    "questionZh": "我想投资台积电，但在购买美股的 TSM ADR 与台股的 2330 之间犹豫不决。请解释持有 ADR 的结构性风险，包括预扣税（withholding tax）差异以及汇率兑换机制。"
  },
  {
    "id": 20,
    "category": "定性定量分析",
    "scenario": "BTC与黄金稀缺性机制",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "Compare Bitcoin and Gold as inflation hedges and systemic crisis insurance. In what structural ways do their \"scarcity mechanics\" differ, and why does institutional capital react differently to them during bank runs?",
    "questionZh": "对比比特币和黄金作为抗通胀和系统性危机避险工具的异同。它们的‘’稀缺性机制‘’在结构上有何不同？为什么机构资金在遭遇银行挤兑等危机时对两者的反应不同？"
  },
  {
    "id": 21,
    "category": "定性定量分析",
    "scenario": "AI软件SaaS估值分化",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Why are hardware-centric AI stocks (like Nvidia, Broadcom) currently showing solid GAAP earnings, while many AI software SaaS startups are struggling with high customer acquisition costs (CAC) and customer churn? What is the structural bottleneck?",
    "questionZh": "为什么当前以硬件为核心的AI股票（如英伟达、博通）表现出扎实的GAAP盈利，而许多AI软件SaaS初创公司却在与高昂的客户获取成本（CAC）和客户流失率苦苦挣扎？其中的结构性瓶颈是什么？"
  },
  {
    "id": 22,
    "category": "定性定量分析",
    "scenario": "霍尔木兹海峡石油危机",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Analyze how a potential blockade of the Strait of Hormuz would qualitatively disrupt the global energy supply chain. Which sectors in the US market would suffer the most, and which non-OPEC oil producers would benefit?",
    "questionZh": "分析霍尔木兹海峡潜在的封锁将如何从定性上颠覆全球能源供应链。美股市场中哪些板块将遭受最严重的打击，哪些非OPEC产油国将因此受益？"
  },
  {
    "id": 23,
    "category": "定性定量分析",
    "scenario": "Solana与以太坊L2博弈",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Solana is often called the \"Ethereum Killer\" due to its monolithic architecture. Qualitatively compare the security, decentralization, and network uptime trade-offs of Solana’s proof-of-history versus Ethereum’s Layer-2 roll-up roadmap.",
    "questionZh": "Solana因其单体架构常被称为‘’以太坊杀手‘’。请定性对比Solana的历史证明（PoH）机制相比以太坊Layer-2 Roll-up路线图，在安全性、去中心化程度及网络运行时间（Uptime）上的权衡折中。"
  },
  {
    "id": 24,
    "category": "定性定量分析",
    "scenario": "反垄断法对美股巨头拆分",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Analyze the qualitative impact of the US Department of Justice’s antitrust lawsuits against Google (Alphabet) or Apple. If a forced break-up occurs, which business segments would unlock more shareholder value as standalone entities?",
    "questionZh": "分析美国司法部对谷歌（Alphabet）或苹果发起反垄断诉讼的定性影响。如果发生强制拆分，哪些业务板块在作为独立实体运营时会释放出更多股东价值？"
  },
  {
    "id": 25,
    "category": "定性定量分析",
    "scenario": "联储降息对二级定价传导",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "When the Federal Reserve cuts the Fed Funds Rate, trace the qualitative transmission mechanism through which this affects mortgage rates, corporate bond yields, and the valuation multiples of high-growth AI stocks.",
    "questionZh": "当美联储下调联邦基金利率时，请梳理这一政策如何传导并影响抵押贷款利率、企业债券收益率以及高增长AI股票的估值倍数（Valuation Multiples）。"
  },
  {
    "id": 26,
    "category": "定性定量分析",
    "scenario": "云巨头自研ASIC芯片冲击",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Explain the strategic rationale behind AWS, Azure, and Google Cloud developing custom ASICs (Trainium, Inferentia, TPU). How does this impact the long-term pricing power of Nvidia’s generic GPUs?",
    "questionZh": "解释 AWS、Azure 和 Google Cloud 等云巨头自研定制化 ASIC 芯片（如 Trainium、Inferentia、TPU）背后的战略考量。这如何影响英伟达通用 GPU 的长期定价权？"
  },
  {
    "id": 27,
    "category": "定性定量分析",
    "scenario": "白银双重定价属性博弈",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Why is silver's price action significantly more volatile than gold's? Explain the qualitative tug-of-war between its role as an industrial metal (solar, electronics) and its role as a monetary safe haven.",
    "questionZh": "为什么白银的价格走势波动性明显大于黄金？请解释其作为工业金属（光伏、电子）角色与作为货币避险工具角色之间定性上的博弈。"
  },
  {
    "id": 28,
    "category": "定性定量分析",
    "scenario": "DeFi智能合约清算链条",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "What are the structural risks of using decentralized finance (DeFi) lending protocols (like Aave) versus traditional margin lending? Focus on smart contract risks, oracle manipulation, and cascading liquidation loops.",
    "questionZh": "相比传统的保证金贷款，使用去中心化金融（DeFi）借贷协议（如 Aave）存在哪些结构性风险？请重点分析智能合约风险、预言机操纵（oracle manipulation）以及级联清算循环（cascading liquidation loops）。"
  },
  {
    "id": 29,
    "category": "定性定量分析",
    "scenario": "AI实验室人才流动Moat",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "How does the talent flow out of OpenAI/Google Brain into startups like Anthropic or xAI affect Microsoft and Alphabet’s respective moat in the AI race? Who has the structural advantage?",
    "questionZh": "OpenAI / Google Brain 等顶尖人才流向 Anthropic 或 xAI 等初创公司，将如何影响微软和 Alphabet 各自在 AI 竞争中的护城河？谁拥有结构性优势？"
  },
  {
    "id": 30,
    "category": "定性定量分析",
    "scenario": "ESG评级对晶圆厂资金影响",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "How do ESG (Environmental, Social, and Governance) rating agencies score semiconductor foundries given their massive water and electricity usage? How does this qualitative score affect European pension fund allocations to these stocks?",
    "questionZh": "鉴于半导体晶圆厂（Foundry）消耗了极大量的电和水，ESG 评级机构如何对其进行评分？这一环保评级如何影响欧洲养老金对这些半导体股票的资金配置？"
  },
  {
    "id": 31,
    "category": "新闻数据检索",
    "scenario": "SEC Form 4 内部人变动",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "Scan today's SEC Form 4 filings for any insider sales exceeding $5 million in Nvidia (NVDA), AMD, or Super Micro (SMCI). Provide the exact executive name, transaction date, share count, and remaining balance.",
    "questionZh": "扫描今天的 SEC Form 4 申报文件，查找英伟达（NVDA）、AMD 或超微电脑（SMCI）中单笔超过 500 万美元的内部人减持。提供确切的高管姓名、交易日期、股票数量和剩余持股余额。"
  },
  {
    "id": 32,
    "category": "新闻数据检索",
    "scenario": "链上代币解锁日程跟踪",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Scan the blockchain for upcoming token unlock events in the next 14 days for top AI crypto protocols (e.g., Near, Render, Fetch.ai). Provide the exact unlock volume, dollar value, and percentage of circulating supply.",
    "questionZh": "扫描区块链数据，查找未来 14 天内主流 AI 加密协议（如 Near、Render、Fetch.ai）即将进行的代币解锁事件。提供确切的解锁数量、美元价值以及占流通供应量的百分比。"
  },
  {
    "id": 33,
    "category": "新闻数据检索",
    "scenario": "卖方一致预期与评级漂移",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "Retrieve the consensus Q1 2026 earnings expectations (revenue and EPS) for TSMC (TSM). Check if there have been any major analyst upgrades or downgrades in the last 48 hours following the latest monthly revenue report.",
    "questionZh": "获取华尔街分析师对台积电（TSM）2026年一季度的盈利一致预期（营收和EPS）。并检查在过去48小时公布最新月度营收后，是否有主要的卖方分析师上调或下调了评级。"
  },
  {
    "id": 34,
    "category": "新闻数据检索",
    "scenario": "大宗暗池交易监控",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Identify if there were any significant institutional block trades or dark pool prints on the SPY or QQQ yesterday that deviated from the 30-day average volume by more than 2 standard deviations.",
    "questionZh": "识别昨天在 SPY 或 QQQ 上是否有显著的机构大宗交易（Block Trades）或暗池（Dark Pool）成交，其偏离度需超过 30 天平均交易量的 2 个标准差。"
  },
  {
    "id": 35,
    "category": "新闻数据检索",
    "scenario": "期权Sweep大宗清算监控",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "Scan for unusual option sweep activity on Nvidia (NVDA) today. Are there aggressive institutional buyers scooping up out-of-the-money Calls with short expirations, and what is the exact strike/expiration mix?",
    "questionZh": "扫描今天英伟达（NVDA）是否存在异常的期权扫单（Sweep）活动。是否有激进的机构买家在扫货短期到期的虚值看涨期权（OTM Call）？请给出确切的行权价/到期日组合。"
  },
  {
    "id": 36,
    "category": "新闻数据检索",
    "scenario": "LME与COMEX库存异动",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Check the latest weekly LME (London Metal Exchange) and COMEX silver inventory data. Has there been a significant drawdown in registered stocks over the last 4 weeks, and what is the percentage change?",
    "questionZh": "检查最新的 LME（伦敦金属交易所）和 COMEX 每周白银库存数据。过去 4 周内注册库存是否出现显著流出（drawdown）？变化百分比是多少？"
  },
  {
    "id": 37,
    "category": "新闻数据检索",
    "scenario": "交易所储备证明验证",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Scan and verify the latest Proof of Reserves (PoR) of Coinbase and Binance. Are there any unusual outflows of Bitcoin or stablecoins in the past 24 hours that might indicate liquidity stress?",
    "questionZh": "扫描并验证 Coinbase 和币安（Binance）最新的储备证明（PoR）。过去 24 小时内是否有异常的比特币或稳定币净流出，可能暗示存在流动性压力？"
  },
  {
    "id": 38,
    "category": "新闻数据检索",
    "scenario": "AI大厂新品发布日程追踪",
    "motivation": "异动验证",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "Verify the exact scheduled release dates and keynote timings for the next major AI hardware launch events (Nvidia GTC, AMD Advancing AI, Apple WWDC) in 2026. What are the key product expectations?",
    "questionZh": "验证 2026 年即将举行的几场重大 AI 硬件发布会（英伟达 GTC、AMD Advancing AI、苹果 WWDC）的确切日程及主题演讲时间，当前市场核心的产品预期是什么？"
  },
  {
    "id": 39,
    "category": "新闻数据检索",
    "scenario": "德州矿企电价争议调控",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Scan recent news for any public utilities commission (PUC) rulings or electric rate increases affecting major Bitcoin mining operations in Texas (e.g., Riot Platforms, CleanSpark) in the last 30 days.",
    "questionZh": "扫描最近 30 天内的新闻，查找是否有影响德州主要比特币矿业公司（如 Riot Platforms、CleanSpark）的公用事业委员会（PUC）裁决或工业电价上涨政策。"
  },
  {
    "id": 40,
    "category": "新闻数据检索",
    "scenario": "加密税法立法动态变动",
    "motivation": "异动验证",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Search for any pending or newly passed tax legislation in the US Congress or European Parliament regarding increased capital gains tax rates or exit taxes on cryptocurrency in 2026.",
    "questionZh": "搜索美国国会或欧洲议会在 2026 年审议中或新通过的关于提高加密货币资本利得税税率，或征收加密资产离境税（Exit Tax）的最新立法动态。"
  },
  {
    "id": 41,
    "category": "新闻数据检索",
    "scenario": "AI芯片出口管制指标",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Provide the latest updates on US Department of Commerce export restrictions regarding AI chips to non-US jurisdictions (specifically Middle East/Asia). What is the exact performance threshold limit (TPP) currently in effect?",
    "questionZh": "提供美国商务部针对向非美地区（特别是中东/亚洲）出口 AI 芯片限制的最新动态。当前执行的确切‘’总处理性能（TPP）‘’上限及性能密度红线是多少？"
  },
  {
    "id": 42,
    "category": "新闻数据检索",
    "scenario": "FTC并购反垄断审查进展",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Verify if there are any active regulatory investigations by the FTC or EU European Commission regarding Microsoft’s latest investment in AI startup Inflection or Mistral. What are the key antitrust concerns?",
    "questionZh": "验证美国 FTC 或欧盟执委会当前是否对微软近期投资 AI 初创公司 Inflection 或 Mistral进行反垄断调查，目前核心的监管垄断担忧是什么？"
  },
  {
    "id": 43,
    "category": "新闻数据检索",
    "scenario": "黄金内外盘实物套利窗口",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Check the current physical gold premium in major Asian markets (Shanghai Gold Exchange vs. London OTC). Is the East-West arbitrage window open today, and what is the exact dollar spread per ounce?",
    "questionZh": "检查当前亚洲主要黄金市场（上海黄金交易所 SGE）相比伦敦场外交易（London OTC）的实物溢价。今天的‘’东西方套利窗口‘’是否开启？确切的每盎司美元价差是多少？"
  },
  {
    "id": 44,
    "category": "新闻数据检索",
    "scenario": "美股券商/交易所宕机预警",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Scan the web and social media for any reported API outages, order routing delays, or withdrawal freezes on major retail brokerages (Robinhood, Charles Schwab) or crypto exchanges (Coinbase, Kraken) today.",
    "questionZh": "扫描全网和社交媒体，查找今天是否有关于主流零售券商（Robinhood、Charles Schwab）或加密交易所（Coinbase、Kraken）出现 API 宕机、订单路由延迟或暂停提现的故障报告。"
  },
  {
    "id": 45,
    "category": "新闻数据检索",
    "scenario": "10年期美债拍卖中标率",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "What was the bid-to-cover ratio, yield tail, and percentage of indirect bidders for yesterday's US 10-year Treasury bond auction? Does this indicate strong or weak foreign institutional demand?",
    "questionZh": "昨天发行的美国 10 年期国债拍卖中，超额认购倍数（bid-to-cover ratio）、收益率尾部（yield tail）以及间接投标（indirect bidders）占比是多少？这反映了国外机构买盘的强弱？"
  },
  {
    "id": 46,
    "category": "情绪引导",
    "scenario": "半导体板块极端暴跌",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I bought NVDA at the absolute top ($140/share) and today the stock is down 15% due to a competitor's breakthrough announcement. I feel sick and want to sell everything to stop the pain. What should I do?",
    "questionZh": "我在英伟达（NVDA）历史高点（140美元）全仓买入。今天由于竞争对手发布了突破性产品，NVDA下跌了15%。我感觉难受极了，想割肉清仓来停止痛苦，我该怎么办？"
  },
  {
    "id": 47,
    "category": "情绪引导",
    "scenario": "土狗暴涨焦虑",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "A Solana memecoin called $AI_DOG is up 500% in 3 days. My friends on Discord are making a fortune, and I feel like an idiot for holding boring index funds. How do I handle this intense FOMO without ruining myself?",
    "questionZh": "Solana 链上的一只名为 $AI_DOG 的土狗币（Memecoin）在 3 天内暴涨了 500%。我 Discord 群里的朋友都在大赚特赚，我觉得自己守着无聊的指数基金像个傻子。我该如何处理这种强烈的踏空焦虑（FOMO），同时不让自己破产？"
  },
  {
    "id": 48,
    "category": "情绪引导",
    "scenario": "期权爆仓保证金瘫痪",
    "motivation": "行为引导",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "My short options position is moving heavily against me. I'm facing a margin call in 2 hours and I'm paralyzed with panic. I can't sleep or think. Talk me through a step-by-step crisis protocol to manage my risk and my anxiety.",
    "questionZh": "我做空的期权头寸目前正遭遇严重的爆仓亏损，在 2 小时内将面临追加保证金（margin call）。我惊慌失措、寝食难安。请指导我一步步执行‘’危机应对程序‘’，以控制我的投资风险和焦虑情绪。"
  },
  {
    "id": 49,
    "category": "情绪引导",
    "scenario": "宏观黑天鹅极端恐慌",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "There is massive news of a potential war outbreak in the Middle East, and the pre-market QQQ is down 4%. Every financial influencer on Twitter is predicting a 1929-style crash. How do I rationally assess if this is a systemic threat or a buying opportunity?",
    "questionZh": "有传闻中东可能爆发战争，美股盘前 QQQ 下跌了 4%。Twitter 上的财经大 V 都在预测这将是 1929 年式的崩盘。我该如何理性评估这究竟是系统性威胁，还是买入机会？"
  },
  {
    "id": 50,
    "category": "情绪引导",
    "scenario": "日内连续亏损报复交易",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I have lost money on 7 consecutive day trades in semiconductor stocks today. I am furious and want to double my position size on the next trade to win my losses back ('revenge trading'). Talk me out of this behavior.",
    "questionZh": "我今天在半导体股票的日内交易中连续遭遇 7 次亏损。我极度愤怒，想在下一笔交易中加倍仓位以挽回损失（报复性交易）。请劝阻并叫停我的这种行为。"
  },
  {
    "id": 51,
    "category": "情绪引导",
    "scenario": "踏空大饼割肉踏空重建",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "I sold my Bitcoin at $40,000 thinking it was a bubble, and now it's trading way higher. I feel a mixture of self-loathing, regret, and depression. How do I rebuild my investment mindset after such a massive mistake?",
    "questionZh": "我之前以为比特币是泡沫，在 40,000 美元时卖掉了，现在它的价格远高于此。我感到自我怀疑、后悔和沮丧。在犯了这么大的错误之后，我该如何重建我的投资心态？"
  },
  {
    "id": 52,
    "category": "情绪引导",
    "scenario": "识别 TikTok 投顾幻觉",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "I saw a TikTok video of a trader claiming he turned $500 into $100k in 1 month trading 0DTE options on Nvidia. He's selling a course for $99. Please give me a reality check and help me evaluate this realistically.",
    "questionZh": "我在 TikTok 上看到一个交易员自称通过交易英伟达的 0DTE 期权，在 1 个月内将 500 美元变成了 10 万美元，他目前正在卖一门 99 美元的课程。请帮我进行现实求证，并理性评估这个现象。"
  },
  {
    "id": 53,
    "category": "情绪引导",
    "scenario": "SOXL满杠杆爆仓破产",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "My leveraged SOXL account just got liquidated. I lost my entire life savings of $30,000. I feel hopeless and like a financial failure. Please help me process this loss and outline a constructive path to rebuild from scratch.",
    "questionZh": "我加了杠杆的 SOXL 账户刚刚被强平了。我亏掉了整整 3 万美元的全部积蓄。我感到绝望，觉得自己是个财务上的失败者。请帮我平复这一创伤，并为我规划一条从头开始的重建路径。"
  },
  {
    "id": 54,
    "category": "情绪引导",
    "scenario": "获利自满与全职交易评估",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "I just made $50k trading crypto this month. I feel invincible and want to quit my day job to become a full-time trader. How do I objectively assess if I have genuine edge (skill) or if I am simply a beneficiary of a bull market?",
    "questionZh": "我这个月通过交易加密货币赚了 5 万美元。我觉得自己无所不能，想辞掉日常工作去做全职交易员。我该如何客观评估我是否真的有实力（Alpha），还是仅仅是牛市行情的受益者（Beta）？"
  },
  {
    "id": 55,
    "category": "情绪引导",
    "scenario": "极端抗单“回本即卖”偏差",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I am holding a massive position in a dying AI hardware company. The stock has fallen 80% from my entry price, but I refuse to sell because 'it's only a loss if I sell' and I'm waiting to break even. Confront my cognitive bias.",
    "questionZh": "我重仓持有了一家奄奄一息的 AI 硬件公司股票。股价相比我的成本价已经下跌了 80%，但我拒绝卖出，因为我觉得‘’不卖就不算亏‘’，还在等它回本。请正面打破我的这种认知偏差。"
  },
  {
    "id": 56,
    "category": "情绪引导",
    "scenario": "持有现金的“踏空焦虑”",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "Everyone is talking about investing in stocks, but the stock market looks so risky right now. I have my money sitting in a 4.5% HYSA. I feel guilty that I am not 'putting my money to work' in equities. Am I failing as an investor?",
    "questionZh": "所有人都在讨论投资股票，但我觉得目前的股市风险很高。我把钱存放在 4.5% 的高息存款（HYSA）里。我觉得自己没有把资金投入股市是‘’不思进取‘’，甚至有些内疚。作为投资者，我真的很失败吗？"
  },
  {
    "id": 57,
    "category": "情绪引导",
    "scenario": "规避特斯拉偏执多头确认偏差",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I am extremely bullish on Tesla (TSLA) and only read bullish analysis on Twitter. I refuse to look at bearish reports. Can you act as a harsh but objective bear case advocate and challenge my thesis so I can see my blind spots?",
    "questionZh": "我是特斯拉（TSLA）的极端铁粉，平时在 Twitter 上只看多头分析，拒绝阅读看空报告。你能不能扮演一个严苛但客观的‘’空头辩护人‘’，深度质疑我的多头逻辑，帮我找出盲区？"
  },
  {
    "id": 58,
    "category": "情绪引导",
    "scenario": "地缘政治冲突盲目割肉台积电",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "TSMC is down 8% today due to a minor geopolitical rumor. I'm terrified that Taiwan will be invaded tomorrow and my TSM shares will go to zero. How do I separate short-term headline noise from actual structural war risk?",
    "questionZh": "因为一个地缘政治传闻，台积电（TSM）今天下跌了 8%。我极度害怕可能会发生地缘冲突，导致我的台积电股票归零。我该如何将短期新闻杂音与实际的结构性战争风险区分开？"
  }
];

// ============================================================
// Statistics helpers
// ============================================================

export function getCategories(): string[] {
  return Array.from(new Set(questions.map(q => q.category)));
}

export function getMotivations(): string[] {
  return Array.from(new Set(questions.map(q => q.motivation)));
}

export function getDifficultyDistribution(): Record<number, number> {
  const dist: Record<number, number> = {};
  questions.forEach(q => {
    dist[q.difficulty] = (dist[q.difficulty] || 0) + 1;
  });
  return dist;
}

export function getCategoryDistribution(): Record<string, number> {
  const dist: Record<string, number> = {};
  questions.forEach(q => {
    dist[q.category] = (dist[q.category] || 0) + 1;
  });
  return dist;
}

export function getMotivationDistribution(): Record<string, number> {
  const dist: Record<string, number> = {};
  questions.forEach(q => {
    dist[q.motivation] = (dist[q.motivation] || 0) + 1;
  });
  return dist;
}

export function getResultStats() {
  const wins = questions.filter(q => q.result === "win").length;
  const ties = questions.filter(q => q.result === "tie").length;
  const losses = questions.filter(q => q.result === "lose").length;
  const pending = questions.filter(q => !q.result).length;
  return { wins, ties, losses, pending, total: questions.length };
}
