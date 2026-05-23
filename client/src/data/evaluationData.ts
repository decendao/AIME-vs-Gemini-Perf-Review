// ============================================================
// AIME vs Gemini 3.5 Flash 评测数据结构与 Mock 数据
// 设计为可替换模式：用户提供真实数据后直接替换此文件
// ============================================================

export type ResultType = "win" | "lose" | "draw";

export interface CaseScreenshot {
  url: string;
  caption: string;
  // 标记点：红色为优点，绿色为缺点
  markers?: Array<{
    x: number; // 百分比位置
    y: number;
    type: "pro" | "con"; // pro=红色优点, con=绿色缺点
    label: string;
  }>;
}

export interface EvaluationCase {
  id: number;
  category: string;
  categoryEn: string;
  question: string;
  questionEn: string;
  result: ResultType;
  aimeTime: number; // 秒
  competitorTime: number; // 秒
  analysis: string;
  analysisEn: string;
  aimePros: string[];
  aimeProsEn: string[];
  aimeCons: string[];
  aimeConsEn: string[];
  competitorPros: string[];
  competitorProsEn: string[];
  competitorCons: string[];
  competitorConsEn: string[];
  aimeScreenshots?: CaseScreenshot[];
  competitorScreenshots?: CaseScreenshot[];
}

export interface CategorySummary {
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  wins: number;
  losses: number;
  draws: number;
  avgAimeTime: number;
  avgCompetitorTime: number;
  strengths: string[];
  strengthsEn: string[];
  weaknesses: string[];
  weaknessesEn: string[];
  improvements: string[];
  improvementsEn: string[];
}

export interface RadarDimension {
  dimension: string;
  dimensionEn: string;
  aimeScore: number; // 0-100
  competitorScore: number; // 0-100
}

// ============================================================
// 问题分类定义
// ============================================================
export const CATEGORIES = [
  { id: "data-query", label: "数据查询与筛选", labelEn: "Data Query & Filtering" },
  { id: "market-analysis", label: "行情分析与解读", labelEn: "Market Analysis" },
  { id: "financial-calc", label: "金融计算", labelEn: "Financial Calculation" },
  { id: "news-events", label: "新闻与事件分析", labelEn: "News & Events" },
  { id: "portfolio", label: "投资组合建议", labelEn: "Portfolio Advice" },
  { id: "risk-assessment", label: "风险评估", labelEn: "Risk Assessment" },
  { id: "knowledge", label: "金融知识问答", labelEn: "Financial Knowledge" },
  { id: "realtime", label: "实时数据获取", labelEn: "Real-time Data" },
  { id: "comparison", label: "多标的对比", labelEn: "Multi-asset Comparison" },
  { id: "prediction", label: "趋势预测", labelEn: "Trend Prediction" },
];

// ============================================================
// Mock 评测数据（10条示例，等待用户提供完整58条替换）
// ============================================================
export const MOCK_CASES: EvaluationCase[] = [
  {
    id: 1,
    category: "数据查询与筛选",
    categoryEn: "Data Query & Filtering",
    question: "2026年一季度，A股股票名称中包含\u201C顺\u201D的股票，及其区间涨跌幅是多少？",
    questionEn: "In Q1 2026, what are the A-share stocks with '顺' in their names and their price changes?",
    result: "win",
    aimeTime: 52,
    competitorTime: 64,
    analysis: "AIME能够全面、正确地解析用户的筛选条件与取数计算意图，抓取了所有带有\u201C顺\u201D字的股票，并正确计算出它们在2026年一季度的区间涨跌幅数据；而Gemini 3.5 Flash在筛选带有\u201C顺\u201D字的股票时样本严重不全，导致基于错误基数的最终分析结果、涨跌幅排序均失去参考价值。",
    analysisEn: "AIME correctly parsed all filtering conditions and retrieved all stocks containing '顺', calculating accurate Q1 2026 price changes. Gemini 3.5 Flash returned severely incomplete samples, making its analysis unreliable.",
    aimePros: ["全面抓取所有符合条件的股票", "正确计算区间涨跌幅", "数据完整性高"],
    aimeProsEn: ["Complete stock retrieval", "Accurate price change calculation", "High data integrity"],
    aimeCons: ["响应时间略长"],
    aimeConsEn: ["Slightly longer response time"],
    competitorPros: ["响应格式清晰"],
    competitorProsEn: ["Clear response format"],
    competitorCons: ["样本严重不全", "数据库覆盖不足", "结果失去参考价值"],
    competitorConsEn: ["Severely incomplete samples", "Insufficient database coverage", "Results lose reference value"],
  },
  {
    id: 2,
    category: "行情分析与解读",
    categoryEn: "Market Analysis",
    question: "分析一下最近一个月沪深300指数的走势，关键支撑位和压力位在哪里？",
    questionEn: "Analyze the CSI 300 index trend over the past month. Where are the key support and resistance levels?",
    result: "win",
    aimeTime: 38,
    competitorTime: 45,
    analysis: "AIME基于实时行情数据，准确识别了沪深300近一个月的震荡区间，给出了具体的支撑位（3850点）和压力位（4020点），并结合成交量变化进行了技术面分析。Gemini 3.5 Flash给出的分析较为笼统，缺乏具体点位数据支撑。",
    analysisEn: "AIME identified specific support (3850) and resistance (4020) levels with volume analysis. Gemini 3.5 Flash provided generic analysis without specific data points.",
    aimePros: ["实时数据支撑", "具体点位分析", "结合量价关系"],
    aimeProsEn: ["Real-time data backed", "Specific price levels", "Volume-price analysis"],
    aimeCons: ["未考虑宏观因素"],
    aimeConsEn: ["Macro factors not considered"],
    competitorPros: ["分析框架完整"],
    competitorProsEn: ["Complete analytical framework"],
    competitorCons: ["缺乏具体数据", "分析偏笼统", "无实时行情接入"],
    competitorConsEn: ["Lacks specific data", "Generic analysis", "No real-time data access"],
  },
  {
    id: 3,
    category: "金融计算",
    categoryEn: "Financial Calculation",
    question: "假设我有100万本金，按年化收益8%复利计算，10年后本息合计是多少？如果考虑每年3%的通胀率，实际购买力是多少？",
    questionEn: "With 1M principal at 8% annual compound interest, what's the total after 10 years? What's the real purchasing power considering 3% annual inflation?",
    result: "draw",
    aimeTime: 15,
    competitorTime: 12,
    analysis: "两者都正确计算了复利结果（215.89万）和考虑通胀后的实际购买力（160.7万）。计算过程清晰，步骤完整。Gemini 3.5 Flash在纯数学计算上响应更快。",
    analysisEn: "Both correctly calculated compound interest (2.1589M) and inflation-adjusted purchasing power (1.607M). Gemini 3.5 Flash was faster for pure math.",
    aimePros: ["计算准确", "展示完整步骤"],
    aimeProsEn: ["Accurate calculation", "Complete steps shown"],
    aimeCons: ["纯计算场景无明显优势"],
    aimeConsEn: ["No clear advantage in pure calculation"],
    competitorPros: ["计算准确", "响应更快"],
    competitorProsEn: ["Accurate calculation", "Faster response"],
    competitorCons: ["无额外投资建议"],
    competitorConsEn: ["No additional investment advice"],
  },
  {
    id: 4,
    category: "新闻与事件分析",
    categoryEn: "News & Events",
    question: "最近有哪些影响A股市场的重大政策或事件？对哪些板块影响最大？",
    questionEn: "What recent major policies or events have impacted the A-share market? Which sectors are most affected?",
    result: "win",
    aimeTime: 42,
    competitorTime: 55,
    analysis: "AIME能够获取最新的政策新闻并进行板块关联分析，列举了具体的政策文件和受影响个股。Gemini 3.5 Flash的信息时效性不足，部分引用的政策已过时。",
    analysisEn: "AIME retrieved latest policy news with sector correlation analysis and specific affected stocks. Gemini 3.5 Flash had outdated information.",
    aimePros: ["信息时效性强", "板块关联分析准确", "列举具体个股"],
    aimeProsEn: ["Timely information", "Accurate sector correlation", "Specific stocks listed"],
    aimeCons: ["部分分析偏乐观"],
    aimeConsEn: ["Some analysis overly optimistic"],
    competitorPros: ["分析逻辑清晰"],
    competitorProsEn: ["Clear analytical logic"],
    competitorCons: ["信息时效性差", "部分政策已过时", "缺乏个股关联"],
    competitorConsEn: ["Poor timeliness", "Outdated policies", "No stock correlation"],
  },
  {
    id: 5,
    category: "投资组合建议",
    categoryEn: "Portfolio Advice",
    question: "我是一个风险偏好中等的投资者，有50万资金，请给我一个A股+基金的资产配置方案。",
    questionEn: "I'm a moderate risk investor with 500K. Please suggest an A-share + fund asset allocation plan.",
    result: "draw",
    aimeTime: 35,
    competitorTime: 40,
    analysis: "两者都给出了合理的资产配置方案，包含股票、债券基金、货币基金的比例分配。AIME给出了具体的基金代码推荐，Gemini 3.5 Flash的配置逻辑解释更详细。",
    analysisEn: "Both provided reasonable allocation plans. AIME recommended specific fund codes; Gemini 3.5 Flash explained allocation logic in more detail.",
    aimePros: ["具体基金代码推荐", "配置比例合理"],
    aimeProsEn: ["Specific fund codes", "Reasonable allocation ratios"],
    aimeCons: ["风险提示不够充分"],
    aimeConsEn: ["Insufficient risk warnings"],
    competitorPros: ["逻辑解释详细", "风险提示完善"],
    competitorProsEn: ["Detailed logic explanation", "Complete risk warnings"],
    competitorCons: ["缺乏具体标的推荐"],
    competitorConsEn: ["No specific asset recommendations"],
  },
  {
    id: 6,
    category: "风险评估",
    categoryEn: "Risk Assessment",
    question: "分析一下宁德时代当前的估值水平，PE、PB分位数处于历史什么位置？",
    questionEn: "Analyze CATL's current valuation. Where do its PE and PB percentiles stand historically?",
    result: "win",
    aimeTime: 28,
    competitorTime: 50,
    analysis: "AIME直接调取了宁德时代的实时估值数据，给出了PE（35.2x，历史分位62%）和PB（5.8x，历史分位45%）的具体数值和分位数。Gemini 3.5 Flash无法获取实时财务数据，只能给出定性分析。",
    analysisEn: "AIME retrieved real-time valuation data with specific PE (35.2x, 62nd percentile) and PB (5.8x, 45th percentile). Gemini 3.5 Flash couldn't access real-time financial data.",
    aimePros: ["实时估值数据", "历史分位数精确", "响应快速"],
    aimeProsEn: ["Real-time valuation", "Precise historical percentiles", "Fast response"],
    aimeCons: ["未给出同行业对比"],
    aimeConsEn: ["No peer comparison provided"],
    competitorPros: ["估值分析框架完整"],
    competitorProsEn: ["Complete valuation framework"],
    competitorCons: ["无实时数据", "只能定性分析", "数据严重滞后"],
    competitorConsEn: ["No real-time data", "Only qualitative analysis", "Severely lagging data"],
  },
  {
    id: 7,
    category: "金融知识问答",
    categoryEn: "Financial Knowledge",
    question: "什么是可转债的强赎条款？触发条件是什么？投资者应该如何应对？",
    questionEn: "What is the forced redemption clause of convertible bonds? What triggers it and how should investors respond?",
    result: "draw",
    aimeTime: 18,
    competitorTime: 15,
    analysis: "两者都准确解释了可转债强赎条款的定义、触发条件（正股价格连续N个交易日高于转股价130%）和投资者应对策略。知识性问题双方表现相当。",
    analysisEn: "Both accurately explained forced redemption clauses, triggers, and investor strategies. Equal performance on knowledge questions.",
    aimePros: ["解释准确", "结合实例说明"],
    aimeProsEn: ["Accurate explanation", "Illustrated with examples"],
    aimeCons: ["无明显优势"],
    aimeConsEn: ["No clear advantage"],
    competitorPros: ["解释准确", "响应更快", "结构化输出"],
    competitorProsEn: ["Accurate explanation", "Faster response", "Structured output"],
    competitorCons: ["缺乏实际案例"],
    competitorConsEn: ["Lacks real cases"],
  },
  {
    id: 8,
    category: "实时数据获取",
    categoryEn: "Real-time Data",
    question: "现在美元兑人民币汇率是多少？最近一周的波动范围？",
    questionEn: "What's the current USD/CNY exchange rate? What's the fluctuation range over the past week?",
    result: "win",
    aimeTime: 10,
    competitorTime: 30,
    analysis: "AIME直接返回了实时汇率（7.2145）和一周波动范围（7.1980-7.2350），数据准确及时。Gemini 3.5 Flash无法获取实时汇率，给出的是训练数据截止时的过期数据。",
    analysisEn: "AIME returned real-time rate (7.2145) and weekly range (7.1980-7.2350). Gemini 3.5 Flash couldn't access real-time rates, providing outdated training data.",
    aimePros: ["实时数据准确", "响应极快", "波动范围精确"],
    aimeProsEn: ["Accurate real-time data", "Very fast response", "Precise fluctuation range"],
    aimeCons: [],
    aimeConsEn: [],
    competitorPros: ["解释了影响汇率的因素"],
    competitorProsEn: ["Explained factors affecting exchange rates"],
    competitorCons: ["无实时数据", "数据严重过期", "失去实用价值"],
    competitorConsEn: ["No real-time data", "Severely outdated", "Lost practical value"],
  },
  {
    id: 9,
    category: "多标的对比",
    categoryEn: "Multi-asset Comparison",
    question: "对比贵州茅台、五粮液、泸州老窖三只白酒股的营收增速、净利润率和股息率。",
    questionEn: "Compare revenue growth, net profit margin, and dividend yield of Moutai, Wuliangye, and Luzhou Laojiao.",
    result: "win",
    aimeTime: 45,
    competitorTime: 60,
    analysis: "AIME给出了三只股票最新财报的具体财务数据对比表格，数据准确且格式清晰。Gemini 3.5 Flash给出的数据部分来自过期财报，且缺少股息率数据。",
    analysisEn: "AIME provided accurate latest financial data comparison table. Gemini 3.5 Flash used outdated reports and missed dividend yield data.",
    aimePros: ["数据最新", "表格对比清晰", "三项指标完整"],
    aimeProsEn: ["Latest data", "Clear table comparison", "All three metrics complete"],
    aimeCons: ["未给出投资建议"],
    aimeConsEn: ["No investment recommendation"],
    competitorPros: ["分析维度丰富"],
    competitorProsEn: ["Rich analysis dimensions"],
    competitorCons: ["数据过期", "缺少股息率", "对比不完整"],
    competitorConsEn: ["Outdated data", "Missing dividend yield", "Incomplete comparison"],
  },
  {
    id: 10,
    category: "趋势预测",
    categoryEn: "Trend Prediction",
    question: "基于当前宏观经济数据，你认为下半年A股大盘的走势如何？",
    questionEn: "Based on current macro data, what's your outlook for A-share market in H2?",
    result: "lose",
    aimeTime: 55,
    competitorTime: 48,
    analysis: "在趋势预测类问题上，Gemini 3.5 Flash给出了更全面的多情景分析框架（乐观/中性/悲观），逻辑链条更完整。AIME虽然引用了更多实时数据，但预测结论过于确定，缺乏不确定性表达。",
    analysisEn: "Gemini 3.5 Flash provided a more comprehensive multi-scenario framework. AIME cited more real-time data but was overly deterministic in predictions.",
    aimePros: ["引用实时宏观数据", "数据支撑充分"],
    aimeProsEn: ["Real-time macro data cited", "Strong data support"],
    aimeCons: ["预测过于确定", "缺乏情景分析", "风险提示不足"],
    aimeConsEn: ["Overly deterministic", "Lacks scenario analysis", "Insufficient risk warnings"],
    competitorPros: ["多情景分析", "逻辑完整", "不确定性表达恰当"],
    competitorProsEn: ["Multi-scenario analysis", "Complete logic", "Appropriate uncertainty expression"],
    competitorCons: ["缺乏实时数据支撑"],
    competitorConsEn: ["Lacks real-time data support"],
  },
];

// ============================================================
// 雷达图维度数据
// ============================================================
export const RADAR_DATA: RadarDimension[] = [
  { dimension: "数据查询", dimensionEn: "Data Query", aimeScore: 92, competitorScore: 55 },
  { dimension: "行情分析", dimensionEn: "Market Analysis", aimeScore: 85, competitorScore: 70 },
  { dimension: "金融计算", dimensionEn: "Calculation", aimeScore: 80, competitorScore: 82 },
  { dimension: "实时性", dimensionEn: "Real-time", aimeScore: 95, competitorScore: 35 },
  { dimension: "知识深度", dimensionEn: "Knowledge", aimeScore: 78, competitorScore: 85 },
  { dimension: "推理能力", dimensionEn: "Reasoning", aimeScore: 75, competitorScore: 80 },
  { dimension: "多标的处理", dimensionEn: "Multi-asset", aimeScore: 88, competitorScore: 60 },
  { dimension: "风险评估", dimensionEn: "Risk Assessment", aimeScore: 82, competitorScore: 65 },
];

// ============================================================
// 辅助函数
// ============================================================
export function getOverallStats(cases: EvaluationCase[]) {
  const wins = cases.filter(c => c.result === "win").length;
  const losses = cases.filter(c => c.result === "lose").length;
  const draws = cases.filter(c => c.result === "draw").length;
  const total = cases.length;
  const avgAimeTime = cases.reduce((sum, c) => sum + c.aimeTime, 0) / total;
  const avgCompetitorTime = cases.reduce((sum, c) => sum + c.competitorTime, 0) / total;

  return { wins, losses, draws, total, avgAimeTime, avgCompetitorTime };
}

export function getCategorySummaries(cases: EvaluationCase[]): CategorySummary[] {
  const categoryMap = new Map<string, EvaluationCase[]>();
  cases.forEach(c => {
    const existing = categoryMap.get(c.category) || [];
    existing.push(c);
    categoryMap.set(c.category, existing);
  });

  return Array.from(categoryMap.entries()).map(([category, categoryCases]) => {
    const wins = categoryCases.filter(c => c.result === "win").length;
    const losses = categoryCases.filter(c => c.result === "lose").length;
    const draws = categoryCases.filter(c => c.result === "draw").length;
    const avgAimeTime = categoryCases.reduce((sum, c) => sum + c.aimeTime, 0) / categoryCases.length;
    const avgCompetitorTime = categoryCases.reduce((sum, c) => sum + c.competitorTime, 0) / categoryCases.length;

    return {
      category,
      categoryEn: categoryCases[0].categoryEn,
      description: `${category}类问题共${categoryCases.length}题`,
      descriptionEn: `${categoryCases.length} questions in ${categoryCases[0].categoryEn}`,
      wins,
      losses,
      draws,
      avgAimeTime,
      avgCompetitorTime,
      strengths: [],
      strengthsEn: [],
      weaknesses: [],
      weaknessesEn: [],
      improvements: [],
      improvementsEn: [],
    };
  });
}
