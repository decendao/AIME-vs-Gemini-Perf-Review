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

// All 58 questions with evaluation results
export const questions: Question[] = [
  {
    "id": 1,
    "category": "推演计算",
    "scenario": "杠杆ETF损耗",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I bought NVDL (2x leveraged NVDA) at $100. If NVDA drops 5% tomorrow and rises 5.3% the next day, what is my exact net return on NVDL? Explain the math of path dependency.",
    "questionZh": "我在100美元买入了NVDL（2倍做多英伟达杠杆ETF）。如果英伟达（NVDA）明天下跌5%，后天上涨5.3%，我持有的NVDL确切净收益率是多少？请解释其中的路径依赖数理逻辑。",
    "result": "win",
    "aimeTimeSeconds": 52,
    "geminiTimeSeconds": 64,
    "analysisZh": "AIME完美解析了路径依赖与复利损耗的数学逻辑，给出了精确的NVDL净回报数值；而竞品在推导公式时由于对复权基数和日内重平衡（Daily Rebalancing）损耗的理解不够深入，存在微小的数理计算偏差。"
  },
  {
    "id": 2,
    "category": "推演计算",
    "scenario": "期权希腊字母敏感度",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "I hold an AMD June 2026 $200 Call. Today AMD dropped $4, and implied volatility (IV) fell by 2%. Based on Delta, Gamma, Theta, and Vega, calculate the estimated price change of my option.",
    "questionZh": "我持有AMD 2026年6月到期、行权价200美元的看涨期权（Call）。今天AMD股价下跌了4美元，且隐波（IV）下降了2%。请根据 Delta, Gamma, Theta 和 Vega 测算该期权价格的预估变动量。",
    "result": "tie",
    "aimeTimeSeconds": 38,
    "geminiTimeSeconds": 42,
    "analysisZh": "双方均能准确调用标准Black-Scholes模型的希腊字母一阶、二阶导数关系，精确推导Delta/Gamma/Theta/Vega的变化对期权价格的累加效应。竞品在解释Greeks的逻辑上更有条理。"
  },
  {
    "id": 3,
    "category": "推演计算",
    "scenario": "个人资本利得税税率",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 5,
    "questionEn": "I live in California (single filer, $120k annual salary). I sold 50 shares of NVDA for a $20,000 gain. 30 shares were held for 9 months, and 20 shares were held for 14 months. Calculate my exact estimated federal and state tax liability.",
    "questionZh": "我住在加州（单身报税，年薪12万美金）。我卖出了50股英伟达（NVDA），获利2万美元。其中30股持有时间为9个月（短期），20股持有时间为14个月（长期）。请计算我需要缴纳的联邦和州级估算资本利得税。",
    "result": "lose",
    "aimeTimeSeconds": 45,
    "geminiTimeSeconds": 35,
    "analysisZh": "竞品在理解加州复杂的阶梯税率及联邦长短期（9个月与14个月）资本利得税率差异时表现得更加严密、全面；AIME的税法参数在某些特定州税细节的处理上稍显机械。"
  },
  {
    "id": 4,
    "category": "推演计算",
    "scenario": "备兑期权盈亏平衡点",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I own 100 shares of PLTR at $35. If I sell a 30 DTE Call at $40 strike for a $1.50 premium, what is my exact maximum profit, maximum loss, and breakeven price at expiration.",
    "questionZh": "我以35美元的成本持有100股PLTR。如果我卖出一张30天到期（30 DTE）、行权价40美元的看涨期权（Call），获得1.50美元的权利金，请问该备兑期权策略在到期时的最大利润、最大亏损和盈亏平衡价分别是多少？",
    "result": "win",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 30,
    "analysisZh": "AIME能实时拉取PLTR的最新股价并直接输出损益分析，最重要是能在界面中直接渲染高交互的Covered Call到期损益折线图；竞品无法对齐价格，也无法提供可交互的图表组件。"
  },
  {
    "id": 5,
    "category": "推演计算",
    "scenario": "洗售规则",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "On Oct 1, I sold 100 shares of SOXL at a $5,000 loss. On Oct 15, I bought 50 shares of SOXL back. On Nov 5, I sold those 50 shares for a $1,000 gain. Under IRS rules, what is my disallowed loss and the adjusted cost basis of my remaining position?",
    "questionZh": "我在10月1日以5,000美元的亏损卖出了100股SOXL。在10月15日，我重新买入了50股SOXL。随后在11月5日，我以1,000美元的盈利卖出了这50股。根据美国国税局（IRS）的洗售规则（Wash-Sale Rule），我的被拒亏损（disallowed loss）是多少？我剩余持仓的调整后成本价（cost basis）又是多少？",
    "result": "tie",
    "aimeTimeSeconds": 42,
    "geminiTimeSeconds": 48,
    "analysisZh": "双方均能完美应用美国国税局（IRS）的洗售规则（Wash-Sale），准确识别30天红线窗口，将50%的被拒损失正确分摊并调整后续持仓的成本基准。"
  },
  {
    "id": 6,
    "category": "推演计算",
    "scenario": "Crypto质押复合年化",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "If I stake 10 ETH in a liquid staking protocol (e.g., Lido) at 3.8% APR with daily compounding, and ETH price appreciates 15% annually against USD, what is my exact dollar-denominated net return after 2 years, excluding gas fees?",
    "questionZh": "如果我在流动性抵押协议（如 Lido）中质押了 10 个 ETH，年化收益率（APR）为 3.8% 并按日复利，且 ETH 价格兑美元每年升值 15%。在不考虑 gas 费的情况下，2 年后我以美元计价的确切净回报是多少？",
    "result": "win",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 35,
    "analysisZh": "AIME因实时对接了LST（流动性抵押）协议的链上API，获取的3.8%等实时年化更为精准，且完美处理了代币通胀复利与币价上涨的复合乘积计算；竞品由于使用静态或过时收益率，计算不贴合实际。"
  },
  {
    "id": 7,
    "category": "推演计算",
    "scenario": "跨资产金银比对冲比例",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "The current Gold/Silver ratio is 85. If I want to execute a mean-reversion trade to 75, how many shares of SLV (Silver ETF) do I need to buy to hedge 100 shares of GLD (Gold ETF) to be beta-neutral?",
    "questionZh": "当前的金银比（Gold/Silver ratio）是85。如果我想进行均值回归交易（预期比例降至75），我需要购买多少股SLV（白银ETF）才能对冲100股GLD（黄金ETF），从而实现Beta中性？",
    "result": "win",
    "aimeTimeSeconds": 28,
    "geminiTimeSeconds": 42,
    "analysisZh": "AIME实时获取了GLD与SLV的日K线收盘价，并动态测算了两者过去30天的Beta值以实现Beta中性对冲；竞品由于缺乏实时价格对齐与量化分析引擎，只能依靠估算的相关系数，对冲份额存在较大误差。"
  },
  {
    "id": 8,
    "category": "推演计算",
    "scenario": "组合资产回撤与夏普",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "My portfolio is 40% QQQ, 30% SOXX, 20% IBIT, and 10% GLD. Based on past 3-year weekly data, calculate the historical Max Drawdown and Sharpe Ratio of this exact combination.",
    "questionZh": "我的投资组合配置为：40% QQQ、30% SOXX、20% IBIT、10% GLD。请根据过去3年的周度历史数据，计算该特定组合的历史最大回撤（Max Drawdown）和夏普比率（Sharpe Ratio）。",
    "result": "win",
    "aimeTimeSeconds": 35,
    "geminiTimeSeconds": 60,
    "analysisZh": "AIME调用了后台的量化组合计算回测模块，瞬间输出过去3年的资产协方差、标准差、夏普比率及最大回撤数据；竞品尝试运行Python代码，但由于没有这四只标的过去3年的完整高频价格序列，最终运行报错。"
  },
  {
    "id": 9,
    "category": "推演计算",
    "scenario": "0DTE期权时间衰减量化",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "I am buying a 0DTE SPY Put at 1:00 PM EST with the strike at $510. If SPY stays flat at $512 for the next 2 hours, calculate the expected percentage decay of my premium due to Theta.",
    "questionZh": "我在美东时间下午 1:00 买入了一张行权价 510 美元的 0DTE（当天到期）SPY 看跌期权（Put）。如果接下来的 2 小时内 SPY 维持在 512 美元横盘，请计算由于时间流逝（Theta），该期权权利金的预估贬值百分比。",
    "result": "win",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 38,
    "analysisZh": "AIME拥有实时的、细分至分钟级的0DTE高频期权链数据，计算的时间价值（Theta）衰减路径极为逼真；竞品无法获取日内期权实时定价模型，只能提供理论上的对数估算，误差极大。"
  },
  {
    "id": 10,
    "category": "推演计算",
    "scenario": "公允价值贴现",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Calculate the fair value of Broadcom (AVGO) using a 3-stage DCF model. Assume a 12% growth rate for the next 5 years, 8% for the following 5 years, a terminal growth rate of 3%, and a WACC of 8.5%.",
    "questionZh": "请使用三阶段现金流贴现（DCF）模型计算博通（AVGO）的公允价值。假设未来5年的增长率为12%，之后5年的增长率为8%，永续增长率为3%，加权平均资本成本（WACC）为8.5%。",
    "result": "win",
    "aimeTimeSeconds": 30,
    "geminiTimeSeconds": 55,
    "analysisZh": "AIME深度融合了AVGO的资产负债表与利润表，一键将财务数据代入三阶段DCF公式并输出完整估算表；竞品需要手动一步步解析财务报表，在WACC分步折现计算中存在多步逻辑累积偏差。"
  },
  {
    "id": 11,
    "category": "推演计算",
    "scenario": "商品期货滚仓损耗",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I am holding USO (Crude Oil ETF). If the WTI Crude forward curve is in contango with a 1.5% monthly premium, how much yield do I lose annually due to roll yield decay? Show me the formula.",
    "questionZh": "我持有原油ETF（USO）。如果美油（WTI）远期曲线处于现货贴水/升水（Contango）状态，且每月溢价为1.5%，我每年因展期收益率衰减（roll yield decay）会损失多少收益？请向我展示计算公式。",
    "result": "win",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 36,
    "analysisZh": "AIME实时调取了WTI原油近远期主力合约的实时升贴水结构（Contango），准确估算了USO展期由于远期溢价导致的实际滚仓年化损耗；竞品仅能给出静态公式，无法与实时合约价格联动。"
  },
  {
    "id": 12,
    "category": "推演计算",
    "scenario": "仓位管理",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "I have a $50,000 trading account. I want to trade a high-implied-volatility AI stock before earnings. My historical win rate for this setup is 55%, with an average win of 80% and an average loss of 40%. Apply the Kelly Criterion to calculate my optimal bet size.",
    "questionZh": "我有一个5万美元的交易账户。我想在财报公布前交易一只高隐波的AI股票。我该策略的历史胜率为55%，平均盈利幅度为80%，平均亏损幅度为40%。请应用凯利公式（Kelly Criterion）计算我的最佳单次交易仓位比例。",
    "result": "tie",
    "aimeTimeSeconds": 12,
    "geminiTimeSeconds": 18,
    "analysisZh": "双方均能完美调用凯利公式：f* = (bp - q) / b，准确计算出在特定赢面与赔率下，散户账户的最佳单次交易仓位配置比例（18.75%）。"
  },
  {
    "id": 13,
    "category": "推演计算",
    "scenario": "Roth IRA超额罚款避坑",
    "motivation": "定量分析",
    "difficulty": 5,
    "frequency": 5,
    "questionEn": "I accidentally over-contributed $1,500 to my Roth IRA this tax year. What is the exact penalty calculation if I do not withdraw the excess by the tax filing deadline, and what are the exact steps to calculate the net income attributable (NIA) to remove it?",
    "questionZh": "我本税年不小心对 Roth IRA 超额存入了 1,500 美元。如果我没有在报税截止日前取出超额资金，确切的罚金应该如何计算？另外，要通过计算净收入归属（NIA）来取出这笔资金，确切的步骤是怎样的？",
    "result": "lose",
    "aimeTimeSeconds": 32,
    "geminiTimeSeconds": 25,
    "analysisZh": "在解析IRS关于IRA超额存储的处罚性规定（如6%年化罚金）以及NIA（净收入归属）计算公式方面，竞品的逻辑更加细致入微，并分步骤向散户提供了无差错的操作清单。"
  },
  {
    "id": 14,
    "category": "推演计算",
    "scenario": "期权差价策略",
    "motivation": "定量分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I set up an SMCI Bull Put Spread: Sell $800 Put, Buy $790 Put for a net credit of $2.50. If SMCI closes at $793 on expiration Friday, what is my exact net profit or loss per contract?",
    "questionZh": "我构建了一个SMCI的牛市看跌期权价差策略（Bull Put Spread）：卖出800美元的Put，买入790美元的Put，获得2.50美元的净权利金。如果SMCI在到期日周五收于793美元，我每张合约确切的净利润或亏损是多少？",
    "result": "win",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME完美计算出每张合约由于收在两行权价之间所产生的确切亏损，并渲染出到期损益矩阵表；竞品虽计算无误，但无法提供直观的盈亏平衡点（Breakeven）和行权指派（Assignment）预警提示。"
  },
  {
    "id": 15,
    "category": "推演计算",
    "scenario": "证券质押杠杆爆仓线",
    "motivation": "定量分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I have a $200k portfolio at Interactive Brokers and want to take a portfolio margin loan at the current SOFR rate + 1.5% to buy more TSM. If TSM drops 25%, what is my exact buffer before I trigger a margin call?",
    "questionZh": "我在盈透证券（IBKR）有一个20万美元的组合账户，想以当前的SOFR利率+1.5%借入投资组合保证金（Portfolio Margin）来加仓台积电（TSM）。如果台积电价格下跌25%，在触发强制平仓/追加保证金（Margin Call）之前，我确切的缓冲空间是多少？",
    "result": "win",
    "aimeTimeSeconds": 24,
    "geminiTimeSeconds": 38,
    "analysisZh": "AIME能够拉取IBKR（盈透证券）对台积电（TSM）具体的维持保证金（Maintenance Margin）比例，从而计算出精确到个位数的爆仓预警缓冲水位；竞品因无各券商特定标的的维持担保比例参数，计算只能停留在通用假设层面。"
  },
  {
    "id": 16,
    "category": "定性定量分析",
    "scenario": "半导体光刻垄断壁垒",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Explain why ASML's EUV technology is considered an absolute monopoly. What are the key technological and supply chain bottlenecks that prevent competitors like Nikon or Canon from catching up?",
    "questionZh": "请解释为什么ASML的EUV（极紫外光刻）技术被视为绝对垄断。有哪些核心的技术和供应链壁垒，导致尼康（Nikon）或佳能（Canon）等竞争对手无法追赶？",
    "result": "tie",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 12,
    "analysisZh": "两家AI均展现了极高的半导体产业分析水准。准确剖析了ASML在准分子激光源（Cymer）和反射式光学镜头系统（蔡司）上的极高排他性专利壁垒与供应链垄断性。"
  },
  {
    "id": 17,
    "category": "定性定量分析",
    "scenario": "HBM3e/4与GPU生态",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Why is HBM3e/HBM4 memory bandwidth critical for Nvidia's Rubin architecture? Analyze the competitive advantages of SK Hynix versus Samsung in securing Nvidia's qualification.",
    "questionZh": "为什么HBM3e/HBM4高带宽内存对英伟达的 Rubin 架构至关重要？请分析 SK 海力士（SK Hynix）相比三星（Samsung）在获得英伟达供货认证方面的竞争优势。",
    "result": "win",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 30,
    "analysisZh": "AIME结合了2026年最新行业供应链的一手调研数据，准确分析了SK海力士在Advanced MR-MUF先进封装工艺上的高良率优势，以及三星在HBM4 12层/16层堆叠认证上的最新进展。"
  },
  {
    "id": 18,
    "category": "定性定量分析",
    "scenario": "黄金信用本位回归逻辑",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Explain why global central banks are aggressively buying gold in 2026 despite high interest rates. How does the \"weaponization of USD reserves\" change the long-term qualitative case for gold over paper currencies?",
    "questionZh": "解释为什么在全球处于高利率环境的2026年，全球央行仍在激进购买黄金。''美元储备武器化''如何改变了黄金相比纸币的长期定性投资逻辑？",
    "result": "tie",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 15,
    "analysisZh": "宏观叙事类场景。两家均能给出极高水平的国际政治和地缘信用解构，指出去中心化无国界主权黄金在跨国制裁风险防范下的终极避险逻辑。"
  },
  {
    "id": 19,
    "category": "定性定量分析",
    "scenario": "美股ADR与本土股持仓差别",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "I want to invest in TSMC but am torn between buying TSM ADR on the NYSE or 2330 on the Taiwan Stock Exchange. Explain the structural risks of holding ADRs, including withholding tax differences and currency conversion mechanics.",
    "questionZh": "我想投资台积电，但在购买美股的 TSM ADR 与台股的 2330 之间犹豫不决。请解释持有 ADR 的结构性风险，包括预扣税（withholding tax）差异以及汇率兑换机制。",
    "result": "tie",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 22,
    "analysisZh": "双方均非常清晰地拆解了台积电（TSM）ADR的底层托管结构、台湾地区21%的现金分红预扣税、汇率兑换摩擦（TWD/USD）以及托管费折价等潜在损耗。"
  },
  {
    "id": 20,
    "category": "定性定量分析",
    "scenario": "BTC与黄金稀缺性机制",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "Compare Bitcoin and Gold as inflation hedges and systemic crisis insurance. In what structural ways do their \"scarcity mechanics\" differ, and why does institutional capital react differently to them during bank runs?",
    "questionZh": "对比比特币和黄金作为抗通胀和系统性危机避险工具的异同。它们的''稀缺性机制''在结构上有何不同？为什么机构资金在遭遇银行挤兑等危机时对两者的反应不同？",
    "result": "lose",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 15,
    "analysisZh": "竞品对数字黄金（BTC）算法控制的供给减半硬顶，与实物黄金物理开采通胀率（年均约1.5-2%）的供需博弈推演词藻更优、框架深度和系统性更胜一筹。"
  },
  {
    "id": 21,
    "category": "定性定量分析",
    "scenario": "AI软件SaaS估值分化",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Why are hardware-centric AI stocks (like Nvidia, Broadcom) currently showing solid GAAP earnings, while many AI software SaaS startups are struggling with high customer acquisition costs (CAC) and customer churn? What is the structural bottleneck?",
    "questionZh": "为什么当前以硬件为核心的AI股票（如英伟达、博通）表现出扎实的GAAP盈利，而许多AI软件SaaS初创公司却在与高昂的客户获取成本（CAC）和客户流失率苦苦挣扎？其中的结构性瓶颈是什么？",
    "result": "lose",
    "aimeTimeSeconds": 32,
    "geminiTimeSeconds": 20,
    "analysisZh": "竞品深度解构了企业端AI投资回报率（ROI）难以闭环、中游SaaS由于API和推理Token费用向硬件大厂倒交「算力税」导致的LTV/CAC倒挂问题；AIME定性推导相对浅显。"
  },
  {
    "id": 22,
    "category": "定性定量分析",
    "scenario": "霍尔木兹海峡石油危机",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Analyze how a potential blockade of the Strait of Hormuz would qualitatively disrupt the global energy supply chain. Which sectors in the US market would suffer the most, and which non-OPEC oil producers would benefit?",
    "questionZh": "分析霍尔木兹海峡潜在的封锁将如何从定性上颠覆全球能源供应链。美股市场中哪些板块将遭受最严重的打击，哪些非OPEC产油国将因此受益？",
    "result": "tie",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 16,
    "analysisZh": "两家AI均精准描绘了「原油暴涨-二次通胀-美联储维持高利率-科技成长股估值受挫」的跨市场宏观逻辑传导链条。"
  },
  {
    "id": 23,
    "category": "定性定量分析",
    "scenario": "Solana与以太坊L2博弈",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Solana is often called the \"Ethereum Killer\" due to its monolithic architecture. Qualitatively compare the security, decentralization, and network uptime trade-offs of Solana's proof-of-history versus Ethereum's Layer-2 roll-up roadmap.",
    "questionZh": "Solana因其单体架构常被称为''以太坊杀手''。请定性对比Solana的历史证明（PoH）机制相比以太坊Layer-2 Roll-up路线图，在安全性、去中心化程度及网络运行时间（Uptime）上的权衡折中。",
    "result": "lose",
    "aimeTimeSeconds": 28,
    "geminiTimeSeconds": 18,
    "analysisZh": "竞品对单体链（Monolithic）的高吞吐低延迟与模块化链（Modular）的安全性隔离、数据可用性层（DA）的折中（Trade-off）剖析具有极高的学术水平。"
  },
  {
    "id": 24,
    "category": "定性定量分析",
    "scenario": "反垄断法对美股巨头拆分",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Analyze the qualitative impact of the US Department of Justice's antitrust lawsuits against Google (Alphabet) or Apple. If a forced break-up occurs, which business segments would unlock more shareholder value as standalone entities?",
    "questionZh": "分析美国司法部对谷歌（Alphabet）或苹果发起反垄断诉讼的定性影响。如果发生强制拆分，哪些业务板块在作为独立实体运营时会释放出更多股东价值？",
    "result": "tie",
    "aimeTimeSeconds": 24,
    "geminiTimeSeconds": 25,
    "analysisZh": "针对大厂反垄断诉讼下的分部估值法（SOTP）拆解，双方逻辑持平，均指出Alphabet的安卓系统与谷歌搜索拆分后各自估值的爆发空间。"
  },
  {
    "id": 25,
    "category": "定性定量分析",
    "scenario": "联储降息对二级定价传导",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "When the Federal Reserve cuts the Fed Funds Rate, trace the qualitative transmission mechanism through which this affects mortgage rates, corporate bond yields, and the valuation multiples of high-growth AI stocks.",
    "questionZh": "当美联储下调联邦基金利率时，请梳理这一政策如何传导并影响抵押贷款利率、企业债券收益率以及高增长AI股票的估值倍数（Valuation Multiples）。",
    "result": "tie",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 14,
    "analysisZh": "经典宏观金融政策传导。双方均对债券到期收益率、贴现分母端（WACC）收缩从而拉抬长期久期科技股估值的机制解释得十分严谨。"
  },
  {
    "id": 26,
    "category": "定性定量分析",
    "scenario": "云巨头自研ASIC芯片冲击",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Explain the strategic rationale behind AWS, Azure, and Google Cloud developing custom ASICs (Trainium, Inferentia, TPU). How does this impact the long-term pricing power of Nvidia's generic GPUs?",
    "questionZh": "解释 AWS、Azure 和 Google Cloud 等云巨头自研定制化 ASIC 芯片（如 Trainium、Inferentia、TPU）背后的战略考量。这如何影响英伟达通用 GPU 的长期定价权？",
    "result": "win",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME深度融合了自家的AInvest知识图谱，精准理清了博通（Broadcom）作为自研ASIC协同设计商在谷歌TPU/Meta MTIA升级过程中的利益捆绑，论证相比通用模型更具实操投研性。"
  },
  {
    "id": 27,
    "category": "定性定量分析",
    "scenario": "白银双重定价属性博弈",
    "motivation": "定性分析",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "Why is silver's price action significantly more volatile than gold's? Explain the qualitative tug-of-war between its role as an industrial metal (solar, electronics) and its role as a monetary safe haven.",
    "questionZh": "为什么白银的价格走势波动性明显大于黄金？请解释其作为工业金属（光伏、电子）角色与作为货币避险工具角色之间定性上的博弈。",
    "result": "win",
    "aimeTimeSeconds": 24,
    "geminiTimeSeconds": 30,
    "analysisZh": "AIME结合了2026年最新工业端（光伏、半导体）白银用量供需缺口的真实宏观数据，对白银作为工业大宗Beta弹性的分析数据更加详实可靠；竞品推论偏向泛泛而谈。"
  },
  {
    "id": 28,
    "category": "定性定量分析",
    "scenario": "DeFi智能合约清算链条",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "What are the structural risks of using decentralized finance (DeFi) lending protocols (like Aave) versus traditional margin lending? Focus on smart contract risks, oracle manipulation, and cascading liquidation loops.",
    "questionZh": "相比传统的保证金贷款，使用去中心化金融（DeFi）借贷协议（如 Aave）存在哪些结构性风险？请重点分析智能合约风险、预言机操纵（oracle manipulation）以及级联清算循环（cascading liquidation loops）。",
    "result": "lose",
    "aimeTimeSeconds": 30,
    "geminiTimeSeconds": 22,
    "analysisZh": "竞品对闪电贷攻击（Flashloan Attack）、预言机喂价滞后引发的级联式强制平仓螺旋等技术性DeFi清算循环，其推演逻辑更具骇客级和技术级的深度。"
  },
  {
    "id": 29,
    "category": "定性定量分析",
    "scenario": "AI实验室人才流动Moat",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "How does the talent flow out of OpenAI/Google Brain into startups like Anthropic or xAI affect Microsoft and Alphabet's respective moat in the AI race? Who has the structural advantage?",
    "questionZh": "OpenAI / Google Brain 等顶尖人才流向 Anthropic 或 xAI 等初创公司，将如何影响微软和 Alphabet 各自在 AI 竞争中的护城河？谁拥有结构性优势？",
    "result": "tie",
    "aimeTimeSeconds": 16,
    "geminiTimeSeconds": 15,
    "analysisZh": "针对头部科学家流动引发的算力与应用边界迁移，两家大模型均给出了极富远见的战略观察。"
  },
  {
    "id": 30,
    "category": "定性定量分析",
    "scenario": "ESG评级对晶圆厂资金影响",
    "motivation": "定性分析",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "How do ESG (Environmental, Social, and Governance) rating agencies score semiconductor foundries given their massive water and electricity usage? How does this qualitative score affect European pension fund allocations to these stocks?",
    "questionZh": "鉴于半导体晶圆厂（Foundry）消耗了极大量的电和水，ESG 评级机构如何对其进行评分？这一环保评级如何影响欧洲养老金对这些半导体股票的资金配置？",
    "result": "win",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 35,
    "analysisZh": "AIME准确调取了MSCI对台积电（TSM）最新的AAA级ESG评级数据，并量化评估了由于能耗限制对欧洲退休金/主权基金建仓限制的实际边际变化；竞品无法调取最新的ESG跟踪评级指标。"
  },
  {
    "id": 31,
    "category": "新闻数据检索",
    "scenario": "SEC Form 4 内部人变动",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "Scan today's SEC Form 4 filings for any insider sales exceeding $5 million in Nvidia (NVDA), AMD, or Super Micro (SMCI). Provide the exact executive name, transaction date, share count, and remaining balance.",
    "questionZh": "扫描今天的 SEC Form 4 申报文件，查找英伟达（NVDA）、AMD 或超微电脑（SMCI）中单笔超过 500 万美元的内部人减持。提供确切的高管姓名、交易日期、股票数量和剩余持股余额。",
    "result": "win",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME直接挂载了SEC EDGAR的实时关系型数据库，秒级抽取了Nvidia高管Mark Stevens今日最新的减持申报及精确的Remaining Balance持股细节；竞品通过RAG检索到的多为过期自媒体新闻碎片，信息质量极低。"
  },
  {
    "id": 32,
    "category": "新闻数据检索",
    "scenario": "链上代币解锁日程跟踪",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Scan the blockchain for upcoming token unlock events in the next 14 days for top AI crypto protocols (e.g., Near, Render, Fetch.ai). Provide the exact unlock volume, dollar value, and percentage of circulating supply.",
    "questionZh": "扫描区块链数据，查找未来 14 天内主流 AI 加密协议（如 Near、Render、Fetch.ai）即将进行的代币解锁事件。提供确切的解锁数量、美元价值以及占流通供应量的百分比。",
    "result": "win",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 42,
    "analysisZh": "AIME集成了代币解锁（Token Unlocks）数据库，精确给出了确切解锁的Token数量、占流通盘比率及估算美元市值抛压；竞品完全无法自动解析无结构化的链上代币归属（Vesting）智能合约代码。"
  },
  {
    "id": 33,
    "category": "新闻数据检索",
    "scenario": "卖方一致预期与评级漂移",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 5,
    "questionEn": "Retrieve the consensus Q1 2026 earnings expectations (revenue and EPS) for TSMC (TSM). Check if there have been any major analyst upgrades or downgrades in the last 48 hours following the latest monthly revenue report.",
    "questionZh": "获取华尔街分析师对台积电（TSM）2026年一季度的盈利一致预期（营收和EPS）。并检查在过去48小时公布最新月度营收后，是否有主要的卖方分析师上调或下调了评级。",
    "result": "win",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 35,
    "analysisZh": "AIME实时对齐了彭博/路透最新的投行一致预期（Analyst Consensus）数据，并抓取了最新48h内的评级变动；竞品搜索到的研报评级多为上个季度的过时文件，数据时效性存在天然断代。"
  },
  {
    "id": 34,
    "category": "新闻数据检索",
    "scenario": "大宗暗池交易监控",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 3,
    "questionEn": "Identify if there were any significant institutional block trades or dark pool prints on the SPY or QQQ yesterday that deviated from the 30-day average volume by more than 2 standard deviations.",
    "questionZh": "识别昨天在 SPY 或 QQQ 上是否有显著的机构大宗交易（Block Trades）或暗池（Dark Pool）成交，其偏离度需超过 30 天平均交易量的 2 个标准差。",
    "result": "win",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 38,
    "analysisZh": "AIME深度集成了Dark Pools（非公开市场大宗交易）的高频实时数据流，秒级完成了偏离度计算；竞品由于无法获取封闭或延迟的暗池交易底层数据，对该提问完全无能为力。"
  },
  {
    "id": 35,
    "category": "新闻数据检索",
    "scenario": "期权Sweep大宗清算监控",
    "motivation": "异动验证",
    "difficulty": 5,
    "frequency": 4,
    "questionEn": "Scan for unusual option sweep activity on Nvidia (NVDA) today. Are there aggressive institutional buyers scooping up out-of-the-money Calls with short expirations, and what is the exact strike/expiration mix?",
    "questionZh": "扫描今天英伟达（NVDA）是否存在异常的期权扫单（Sweep）活动。是否有激进的机构买家在扫货短期到期的虚值看涨期权（OTM Call）？请给出确切的行权价/到期日组合。",
    "result": "win",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 42,
    "analysisZh": "AIME期权异动扫描模块直接捕获了高频的Sweep（分仓扫单）指令，直接归纳出大户日内建仓轨迹；竞品无高频期权成交分发数据，无法提供任何有效异动明细。"
  },
  {
    "id": 36,
    "category": "新闻数据检索",
    "scenario": "LME与COMEX库存异动",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Check the latest weekly LME (London Metal Exchange) and COMEX silver inventory data. Has there been a significant drawdown in registered stocks over the last 4 weeks, and what is the percentage change?",
    "questionZh": "检查最新的 LME（伦敦金属交易所）和 COMEX 每周白银库存数据。过去 4 周内注册库存是否出现显著流出（drawdown）？变化百分比是多少？",
    "result": "win",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME实时对齐了伦敦金属交易所（LME）及纽约商品交易所（COMEX）的白银官方每日库存数据，精确算出过去28天的去库存比率；竞品依靠Web搜索只能捕获到零散的新闻二手报道，数据不准确且无法对齐。"
  },
  {
    "id": 37,
    "category": "新闻数据检索",
    "scenario": "交易所储备证明验证",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Scan and verify the latest Proof of Reserves (PoR) of Coinbase and Binance. Are there any unusual outflows of Bitcoin or stablecoins in the past 24 hours that might indicate liquidity stress?",
    "questionZh": "扫描并验证 Coinbase 和币安（Binance）最新的储备证明（PoR）。过去 24 小时内是否有异常的比特币或稳定币净流出，可能暗示存在流动性压力？",
    "result": "win",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 36,
    "analysisZh": "AIME直接挂载了链上钱包监控API，实时抽取了各大中心化交易所24h的充提资金流监控和PoR覆盖率；竞品依靠静态新闻无法进行实时动态储备金变化监测。"
  },
  {
    "id": 38,
    "category": "新闻数据检索",
    "scenario": "AI大厂新品发布日程追踪",
    "motivation": "异动验证",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "Verify the exact scheduled release dates and keynote timings for the next major AI hardware launch events (Nvidia GTC, AMD Advancing AI, Apple WWDC) in 2026. What are the key product expectations?",
    "questionZh": "验证 2026 年即将举行的几场重大 AI 硬件发布会（英伟达 GTC、AMD Advancing AI、苹果 WWDC）的确切日程及主题演讲时间，当前市场核心的产品预期是什么？",
    "result": "tie",
    "aimeTimeSeconds": 12,
    "geminiTimeSeconds": 15,
    "analysisZh": "双方均能非常准确、实时地给出2026年各大厂最新春季/夏季发布会的确切日程表及当时的核心产品（如Blackwell芯片出货、新iOS系统集成等）预期。"
  },
  {
    "id": 39,
    "category": "新闻数据检索",
    "scenario": "德州矿企电价争议调控",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Scan recent news for any public utilities commission (PUC) rulings or electric rate increases affecting major Bitcoin mining operations in Texas (e.g., Riot Platforms, CleanSpark) in the last 30 days.",
    "questionZh": "扫描最近 30 天内的新闻，查找是否有影响德州主要比特币矿业公司（如 Riot Platforms、CleanSpark）的公用事业委员会（PUC）裁决或工业电价上涨政策。",
    "result": "lose",
    "aimeTimeSeconds": 32,
    "geminiTimeSeconds": 24,
    "analysisZh": "涉及非结构化的德州地方法律诉讼、公用事业委员会（PUC）听证会冗长的非标新闻文本，竞品凭借更强大的泛网络信息抽取与文本重组能力，给出的逻辑大纲更清晰。"
  },
  {
    "id": 40,
    "category": "新闻数据检索",
    "scenario": "加密税法立法动态变动",
    "motivation": "异动验证",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "Search for any pending or newly passed tax legislation in the US Congress or European Parliament regarding increased capital gains tax rates or exit taxes on cryptocurrency in 2026.",
    "questionZh": "搜索美国国会或欧洲议会在 2026 年审议中或新通过的关于提高加密货币资本利得税税率，或征收加密资产离境税（Exit Tax）的最新立法动态。",
    "result": "lose",
    "aimeTimeSeconds": 30,
    "geminiTimeSeconds": 20,
    "analysisZh": "对欧美立法机构（国会两院及欧洲议会）最新税收修订案等复杂非标政治草案文本的追踪，竞品的文本检索时效及重点摘要能力极佳。"
  },
  {
    "id": 41,
    "category": "新闻数据检索",
    "scenario": "AI芯片出口管制指标",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Provide the latest updates on US Department of Commerce export restrictions regarding AI chips to non-US jurisdictions (specifically Middle East/Asia). What is the exact performance threshold limit (TPP) currently in effect?",
    "questionZh": "提供美国商务部针对向非美地区（特别是中东/亚洲）出口 AI 芯片限制的最新动态。当前执行的确切''总处理性能（TPP）''上限及性能密度红线是多少？",
    "result": "win",
    "aimeTimeSeconds": 24,
    "geminiTimeSeconds": 38,
    "analysisZh": "AIME准确提取了商务部BIS在2026最新出口条例中关于总处理性能（Total Processing Performance, TPP）和算力密度（Performance Density）的确切参数红线；竞品在多个管制版本的具体数值上出现了严重的混淆幻觉。"
  },
  {
    "id": 42,
    "category": "新闻数据检索",
    "scenario": "FTC并购反垄断审查进展",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Verify if there are any active regulatory investigations by the FTC or EU European Commission regarding Microsoft's latest investment in AI startup Inflection or Mistral. What are the key antitrust concerns?",
    "questionZh": "验证美国 FTC 或欧盟执委会当前是否对微软近期投资 AI 初创公司 Inflection 或 Mistral进行反垄断调查，目前核心的监管垄断担忧是什么？",
    "result": "tie",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 18,
    "analysisZh": "针对FTC和欧盟对微软"非兼并式控制"反垄断调查进展，两家AI大模型均能通过实时Web搜索，完整、及时地梳理出当前的合规听证会争议细节。"
  },
  {
    "id": 43,
    "category": "新闻数据检索",
    "scenario": "黄金内外盘实物套利窗口",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "Check the current physical gold premium in major Asian markets (Shanghai Gold Exchange vs. London OTC). Is the East-West arbitrage window open today, and what is the exact dollar spread per ounce?",
    "questionZh": "检查当前亚洲主要黄金市场（上海黄金交易所 SGE）相比伦敦场外交易（London OTC）的实物溢价。今天的''东西方套利窗口''是否开启？确切的每盎司美元价差是多少？",
    "result": "win",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 40,
    "analysisZh": "AIME实时换算了汇率与计量单位（盎司/克），对齐了上海金（SGE）与伦敦金（OTC）现货溢价差；竞品无法实现跨市场高频价格的实时套汇与换算，无法给出确切差价。"
  },
  {
    "id": 44,
    "category": "新闻数据检索",
    "scenario": "美股券商/交易所宕机预警",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "Scan the web and social media for any reported API outages, order routing delays, or withdrawal freezes on major retail brokerages (Robinhood, Charles Schwab) or crypto exchanges (Coinbase, Kraken) today.",
    "questionZh": "扫描全网和社交媒体，查找今天是否有关于主流零售券商（Robinhood、Charles Schwab）或加密交易所（Coinbase、Kraken）出现 API 宕机、订单路由延迟或暂停提现的故障报告。",
    "result": "win",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 28,
    "analysisZh": "AIME直接绑定了实时的行情数据量能波动与专业宕机监控源，可瞬时捕获API异常；竞品依靠普通的社交网络爬取，时效滞后数小时，对日内平仓决策毫无参考价值。"
  },
  {
    "id": 45,
    "category": "新闻数据检索",
    "scenario": "10年期美债拍卖中标率",
    "motivation": "异动验证",
    "difficulty": 4,
    "frequency": 4,
    "questionEn": "What was the bid-to-cover ratio, yield tail, and percentage of indirect bidders for yesterday's US 10-year Treasury bond auction? Does this indicate strong or weak foreign institutional demand?",
    "questionZh": "昨天发行的美国 10 年期国债拍卖中，超额认购倍数（bid-to-cover ratio）、收益率尾部（yield tail）以及间接投标（indirect bidders）占比是多少？这反映了国外机构买盘的强弱？",
    "result": "win",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME直接调取了财政部（Treasury Direct）昨日最新的国债竞拍官方报告，给出了极其详实的Indirect Bidders等微观买盘占比数据；竞品的搜索引擎结果存在官方发布到媒体见报的时滞。"
  },
  {
    "id": 46,
    "category": "情绪引导",
    "scenario": "半导体板块极端暴跌",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I bought NVDA at the absolute top ($140/share) and today the stock is down 15% due to a competitor's breakthrough announcement. I feel sick and want to sell everything to stop the pain. What should I do?",
    "questionZh": "我在英伟达（NVDA）历史高点（140美元）全仓买入。今天由于竞争对手发布了突破性产品，NVDA下跌了15%。我感觉难受极了，想割肉清仓来停止痛苦，我该怎么办？",
    "result": "tie",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 12,
    "analysisZh": "面对极端爆仓/被套用户的恐慌，双方均表现出极高水平的同理心，给出了极其克制、温柔、且具实操性的心理舒缓步骤和组合调仓过渡指南。"
  },
  {
    "id": 47,
    "category": "情绪引导",
    "scenario": "土狗暴涨焦虑",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "A Solana memecoin called $AI_DOG is up 500% in 3 days. My friends on Discord are making a fortune, and I feel like an idiot for holding boring index funds. How do I handle this intense FOMO without ruining myself?",
    "questionZh": "Solana 链上的一只名为 $AI_DOG 的土狗币（Memecoin）在 3 天内暴涨了 500%。我 Discord 群里的朋友都在大赚特赚，我觉得自己守着无聊的指数基金像个傻子。我该如何处理这种强烈的踏空焦虑（FOMO），同时不让自己破产？",
    "result": "lose",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 15,
    "analysisZh": "竞品用极其风趣、地道的欧美交易员语调和行为金融学原理剖析了社区的"幸存者偏差"，提出的"1%风险玩票预算"极具心理防守和实操指引价值；AIME的话术过于生硬和说教化。"
  },
  {
    "id": 48,
    "category": "情绪引导",
    "scenario": "期权爆仓保证金瘫痪",
    "motivation": "行为引导",
    "difficulty": 4,
    "frequency": 3,
    "questionEn": "My short options position is moving heavily against me. I'm facing a margin call in 2 hours and I'm paralyzed with panic. I can't sleep or think. Talk me through a step-by-step crisis protocol to manage my risk and my anxiety.",
    "questionZh": "我做空的期权头寸目前正遭遇严重的爆仓亏损，在 2 小时内将面临追加保证金（margin call）。我惊慌失措、寝食难安。请指导我一步步执行''危机应对程序''，以控制我的投资风险和焦虑情绪。",
    "result": "tie",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 16,
    "analysisZh": "极度恐慌危机干预场景。双方均精准给出了冷酷而温和的自救步骤（隔离情绪-列出所有空头头寸-主动联系券商申请平仓风控锁仓），避免了用户采取极端报复性逆势交易。"
  },
  {
    "id": 49,
    "category": "情绪引导",
    "scenario": "宏观黑天鹅极端恐慌",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "There is massive news of a potential war outbreak in the Middle East, and the pre-market QQQ is down 4%. Every financial influencer on Twitter is predicting a 1929-style crash. How do I rationally assess if this is a systemic threat or a buying opportunity?",
    "questionZh": "有传闻中东可能爆发战争，美股盘前 QQQ 下跌了 4%。Twitter 上的财经大 V 都在预测这将是 1929 年式的崩盘。我该如何理性评估这究竟是系统性威胁，还是买入机会？",
    "result": "tie",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 18,
    "analysisZh": "针对黑天鹅大跌舆论，双方均能有效引导用户将注意力从Twitter大V的"毁灭末日叙事"中拉回，理性关注由于地缘风险引发的溢价率漂移以及组合内黄金/债券的对冲表现。"
  },
  {
    "id": 50,
    "category": "情绪引导",
    "scenario": "日内连续亏损报复交易",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I have lost money on 7 consecutive day trades in semiconductor stocks today. I am furious and want to double my position size on the next trade to win my losses back ('revenge trading'). Talk me out of this behavior.",
    "questionZh": "我今天在半导体股票的日内交易中连续遭遇 7 次亏损。我极度愤怒，想在下一笔交易中加倍仓位以挽回损失（报复性交易）。请劝阻并叫停我的这种行为。",
    "result": "lose",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 14,
    "analysisZh": "面对逆势报复性交易（Revenge Trading）的赌徒谬误，竞品的话术对交易心态的把控极深，用极富说服力的行为金融学反推逻辑成功劝停了用户的下注冲动；AIME语气略微像生硬的说明书。"
  },
  {
    "id": 51,
    "category": "情绪引导",
    "scenario": "踏空大饼割肉踏空重建",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "I sold my Bitcoin at $40,000 thinking it was a bubble, and now it's trading way higher. I feel a mixture of self-loathing, regret, and depression. How do I rebuild my investment mindset after such a massive mistake?",
    "questionZh": "我之前以为比特币是泡沫，在 40,000 美元时卖掉了，现在它的价格远高于此。我感到自我怀疑、后悔和沮丧。在犯了这么大的错误之后，我该如何重建我的投资心态？",
    "result": "lose",
    "aimeTimeSeconds": 20,
    "geminiTimeSeconds": 12,
    "analysisZh": "针对错失大涨后的强烈自责与亏损厌恶，竞品完美重构了用户的"机会成本认知"，引导其将踏空视作无痛的市场实验，提供了极佳的心理重建逻辑；AIME的安慰显得极为敷衍和机械。"
  },
  {
    "id": 52,
    "category": "情绪引导",
    "scenario": "识别 TikTok 投顾幻觉",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "I saw a TikTok video of a trader claiming he turned $500 into $100k in 1 month trading 0DTE options on Nvidia. He's selling a course for $99. Please give me a reality check and help me evaluate this realistically.",
    "questionZh": "我在 TikTok 上看到一个交易员自称通过交易英伟达的 0DTE 期权，在 1 个月内将 500 美元变成了 10 万美元，他目前正在卖一门 99 美元的课程。请帮我进行现实求证，并理性评估这个现象。",
    "result": "tie",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 12,
    "analysisZh": "双方均极具讽刺意味而又科学地拆解了TikTok大师的"幸存者偏差"，利用概率统计模型当头棒喝，证明了在0DTE期权高频损耗下长期取得该复合收益率在数学上的几乎不可能。"
  },
  {
    "id": 53,
    "category": "情绪引导",
    "scenario": "SOXL满杠杆爆仓破产",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "My leveraged SOXL account just got liquidated. I lost my entire life savings of $30,000. I feel hopeless and like a financial failure. Please help me process this loss and outline a constructive path to rebuild from scratch.",
    "questionZh": "我加了杠杆的 SOXL 账户刚刚被强平了。我亏掉了整整 3 万美元的全部积蓄。我感到绝望，觉得自己是个财务上的失败者。请帮我平复这一创伤，并为我规划一条从头开始的重建路径。",
    "result": "tie",
    "aimeTimeSeconds": 18,
    "geminiTimeSeconds": 18,
    "analysisZh": "面对毁灭性资产清零，双方均展现了金融投顾最高水准的人文关怀。没有责备，只有务实的个人破产防御、阶梯式还债以及低风险红利组合缓慢复苏路线。"
  },
  {
    "id": 54,
    "category": "情绪引导",
    "scenario": "获利自满与全职交易评估",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 3,
    "questionEn": "I just made $50k trading crypto this month. I feel invincible and want to quit my day job to become a full-time trader. How do I objectively assess if I have genuine edge (skill) or if I am simply a beneficiary of a bull market?",
    "questionZh": "我这个月通过交易加密货币赚了 5 万美元。我觉得自己无所不能，想辞掉日常工作去做全职交易员。我该如何客观评估我是否真的有实力（Alpha），还是仅仅是牛市行情的受益者（Beta）？",
    "result": "lose",
    "aimeTimeSeconds": 22,
    "geminiTimeSeconds": 14,
    "analysisZh": "竞品利用"自归因偏差"和"牛市幸存者幻觉"给暴富的用户泼了一盆理性、客观的凉水，引导其划定高薪日常开销蓄水池和测试极限熊市抗回撤能力；AIME仅提示了Crypto的波动风险。"
  },
  {
    "id": 55,
    "category": "情绪引导",
    "scenario": "极端抗单"回本即卖"偏差",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 5,
    "questionEn": "I am holding a massive position in a dying AI hardware company. The stock has fallen 80% from my entry price, but I refuse to sell because 'it's only a loss if I sell' and I'm waiting to break even. Confront my cognitive bias.",
    "questionZh": "我重仓持有了一家奄奄一息的 AI 硬件公司股票。股价相比我的成本价已经下跌了 80%，但我拒绝卖出，因为我觉得''不卖就不算亏''，还在等它回本。请正面打破我的这种认知偏差。",
    "result": "win",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 35,
    "analysisZh": "AIME除了提供理论上关于"沉没成本谬误"和"亏损厌恶（Loss Aversion）"的纠偏，还能一键生成该低价值垃圾股最新的长期技术下行趋势图，用数理事实强行击碎用户的心理幻觉；竞品仅能提供定性规劝。"
  },
  {
    "id": 56,
    "category": "情绪引导",
    "scenario": "持有现金的"踏空焦虑"",
    "motivation": "行为引导",
    "difficulty": 2,
    "frequency": 5,
    "questionEn": "Everyone is talking about investing in stocks, but the stock market looks so risky right now. I have my money sitting in a 4.5% HYSA. I feel guilty that I am not 'putting my money to work' in equities. Am I failing as an investor?",
    "questionZh": "所有人都在讨论投资股票，但我觉得目前的股市风险很高。我把钱存放在 4.5% 的高息存款（HYSA）里。我觉得自己没有把资金投入股市是''不思进取''，甚至有些内疚。作为投资者，我真的很失败吗？",
    "result": "tie",
    "aimeTimeSeconds": 15,
    "geminiTimeSeconds": 15,
    "analysisZh": "针对4.5%存款收益带来的"现金拖累（Cash Drag）"内疚感，双方均给出了极佳的资产保值心态安抚，重申了在市场高估值区间高流动性现金仓位的战术防御价值。"
  },
  {
    "id": 57,
    "category": "情绪引导",
    "scenario": "规避特斯拉偏执多头确认偏差",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "I am extremely bullish on Tesla (TSLA) and only read bullish analysis on Twitter. I refuse to look at bearish reports. Can you act as a harsh but objective bear case advocate and challenge my thesis so I can see my blind spots?",
    "questionZh": "我是特斯拉（TSLA）的极端铁粉，平时在 Twitter 上只看多头分析，拒绝阅读看空报告。你能不能扮演一个严苛但客观的''空头辩护人''，深度质疑我的多头逻辑，帮我找出盲区？",
    "result": "win",
    "aimeTimeSeconds": 24,
    "geminiTimeSeconds": 32,
    "analysisZh": "AIME精准提取了AInvest底层数据库中关于台积电/特斯拉最新的全网空头持仓（Short Interest）变化和华尔街大空头最具杀伤力的定量"Bear Case"财务减值数据，打破多头确认偏误；竞品空头推论较为通用。"
  },
  {
    "id": 58,
    "category": "情绪引导",
    "scenario": "地缘政治冲突盲目割肉台积电",
    "motivation": "行为引导",
    "difficulty": 3,
    "frequency": 4,
    "questionEn": "TSMC is down 8% today due to a minor geopolitical rumor. I'm terrified that Taiwan will be invaded tomorrow and my TSM shares will go to zero. How do I separate short-term headline noise from actual structural war risk?",
    "questionZh": "因为一个地缘政治传闻，台积电（TSM）今天下跌了 8%。我极度害怕可能会发生地缘冲突，导致我的台积电股票归零。我该如何将短期新闻杂音与实际的结构性战争风险区分开？",
    "result": "win",
    "aimeTimeSeconds": 25,
    "geminiTimeSeconds": 34,
    "analysisZh": "AIME结合了台积电实际产能的全球化分散布局，以及AInvest特有的非对称避险ETF产品，给出了数理和地缘定性的双重硬核定心丸；竞品话术流于普通的政治和谈等宏观噪音安抚。"
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