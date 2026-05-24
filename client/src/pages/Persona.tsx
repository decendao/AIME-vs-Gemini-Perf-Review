import { useLanguage } from "@/contexts/LanguageContext";
import {
  Smartphone, Users, TrendingUp, Bitcoin, Receipt, PieChart,
  GraduationCap, Calculator, Activity, Shield, Brain
} from "lucide-react";

// ============================================================
// 用户画像页 - 欧美散户投资者画像
// 设计风格：Swiss Fintech - 卡片网格、清晰信息层级
// ============================================================

interface TraitCard {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  tagsEn: string[];
}

const USER_TRAITS: TraitCard[] = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "交易工具移动化与极简化",
    titleEn: "Mobile-First & Commission-Free",
    description: "高度依赖免佣金、高交互性的移动券商平台（如 Robinhood, Webull, Charles Schwab）以及主流加密货币交易所。期望极简的 UI 与即时执行的交易体验。",
    descriptionEn: "Heavily relies on commission-free, highly interactive mobile brokers (Robinhood, Webull, Charles Schwab) and crypto exchanges (Coinbase, Kraken). Expects minimal UI with instant execution.",
    tags: ["Robinhood", "Webull", "Coinbase", "极简UI"],
    tagsEn: ["Robinhood", "Webull", "Coinbase", "Minimal UI"],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "社群驱动与散户抱团文化",
    titleEn: "Community-Driven & Meme Culture",
    description: "信息获取严重依赖去中心化社交网络（Reddit r/wallstreetbets、Twitter/X、Discord、YouTube、TikTok）。比起传统财务顾问，更信任同辈社区共识与动能，容易产生 Meme 股/币的暴涨暴跌效应。",
    descriptionEn: "Information heavily sourced from decentralized social networks (Reddit WSB, Twitter/X, Stocktwits, Discord, YouTube, TikTok FinTok). Trusts peer consensus over traditional advisors, prone to Meme stock/coin volatility.",
    tags: ["r/wallstreetbets", "Meme股", "FOMO", "社群共识"],
    tagsEn: ["r/wallstreetbets", "Meme Stocks", "FOMO", "Community Consensus"],
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "衍生品与高杠杆工具重度使用",
    titleEn: "Derivative & Leverage Lovers",
    description: "风险偏好极高，期权交易高度普及，尤其是 0DTE（零天到期）期权。频繁使用多倍杠杆 ETF（如 SOXL 3x半导体、TQQQ 3x纳指、NVDL 2x英伟达）作为放大收益的日常工具。",
    descriptionEn: "Extremely high risk appetite. Options trading highly prevalent, especially 0DTE options. Frequently uses leveraged ETFs (SOXL 3x Semis, TQQQ 3x Nasdaq, NVDL 2x NVDA) as daily amplification tools.",
    tags: ["0DTE期权", "SOXL", "TQQQ", "高杠杆"],
    tagsEn: ["0DTE Options", "SOXL", "TQQQ", "High Leverage"],
  },
  {
    icon: <Bitcoin className="w-5 h-5" />,
    title: "加密资产主流化",
    titleEn: "Crypto Integration",
    description: "不将 Crypto 视为边缘另类资产，而是资产配置标配。在现货、美股关联股（MSTR、COIN）和 Spot ETFs（IBIT、ETH ETF）之间无缝切换。",
    descriptionEn: "Crypto is not an edge alternative but a portfolio staple. Seamlessly switches between spot, US-listed proxies (MSTR, COIN) and Spot ETFs (IBIT, ETH ETF).",
    tags: ["BTC", "ETH", "IBIT", "MSTR"],
    tagsEn: ["BTC", "ETH", "IBIT", "MSTR"],
  },
  {
    icon: <Receipt className="w-5 h-5" />,
    title: "极强的税务合规与合法省税意识",
    titleEn: "Tax-Conscious & Account-Driven",
    description: "身处复杂欧美财税体系，对资本利得税极其敏感，注重短期与长期税率区别。习惯基于特定属性账户（Roth IRA、401(k)、HSA）进行长线投资组合构建。",
    descriptionEn: "Operates within complex Western tax systems, extremely sensitive to capital gains tax, distinguishing short-term vs long-term rates. Builds long-term portfolios through tax-advantaged accounts (Roth IRA, 401(k), HSA).",
    tags: ["Roth IRA", "401(k)", "HSA", "Tax-Loss Harvesting"],
    tagsEn: ["Roth IRA", "401(k)", "HSA", "Tax-Loss Harvesting"],
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    title: "核心-卫星投资结构",
    titleEn: "Core-Satellite Strategy",
    description: "底层资产保守，持有低成本宽基指数基金（VOO 标普500、QQQM 纳指100）作为核心；卫星资产极度激进，配置 AI 板块、半导体个股、期权和 Crypto 以博取超额 Alpha。",
    descriptionEn: "Conservative core with low-cost broad index funds (VOO S&P500, QQQM Nasdaq100); extremely aggressive satellite with AI sector, semiconductor stocks, options and crypto for alpha generation.",
    tags: ["VOO", "QQQM", "Core-Satellite", "Alpha"],
    tagsEn: ["VOO", "QQQM", "Core-Satellite", "Alpha"],
  },
];

interface NeedCard {
  icon: React.ReactNode;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  examples: string[];
  examplesEn: string[];
}

const USER_NEEDS: NeedCard[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "极简化金融衍生品学习与实操",
    titleEn: "ELI5 Options & Derivatives",
    description: "需要 AI Agent 用不带金融黑话的语言解释期权希腊字母（Greeks）、备阅期权（Covered Call）、垂直价差（Spreads）等策略，并给出直观的盈亏平衡点和最大损失计算。",
    descriptionEn: "Needs AI to explain Greeks, Covered Calls, Spreads in plain language with intuitive breakeven points and max loss calculations.",
    examples: ["解释 Covered Call 策略", "计算 Iron Condor 盈亏", "Delta 对冲入门"],
    examplesEn: ["Explain Covered Call", "Calculate Iron Condor P&L", "Delta Hedging 101"],
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "动态合规的税务规划支持",
    titleEn: "Dynamic Tax Optimization",
    description: "需要税收损失收割（Tax-Loss Harvesting）识别亏损持仓抵消资本利得，严格规避 Wash-Sale Rule。询问高增长资产适合放 Roth IRA 还是 Taxable 账户。",
    descriptionEn: "Needs Tax-Loss Harvesting to offset gains while avoiding Wash-Sale Rule. Asks which high-growth assets belong in Roth IRA vs Taxable accounts.",
    examples: ["年底税损收割建议", "Wash-Sale 规则检查", "Roth vs Taxable 配置"],
    examplesEn: ["Year-end TLH suggestions", "Wash-Sale Rule check", "Roth vs Taxable allocation"],
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "异动数据与另类舆情即时提炼",
    titleEn: "Unusual Flow & Alt-Data Parsing",
    description: "渴望获取暗池交易（Dark Pools）、大宗期权成交（Unusual Option Sweeps）、SEC Form 4 内部人减持等高阶数据的白话解读。需要 AI 实时监测社交舆情热度，过滤 Pump and Dump 骗局。",
    descriptionEn: "Craves plain-language interpretation of Dark Pool trades, Unusual Option Sweeps, SEC Form 4 insider selling. Needs AI to monitor social sentiment and filter Pump & Dump schemes.",
    examples: ["今日异常期权流", "Reddit 情绪热度", "内部人交易预警"],
    examplesEn: ["Today's unusual options flow", "Reddit sentiment heat", "Insider trading alerts"],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "杠杆交易与清算风险主动防御",
    titleEn: "Margin & Liquidation Guard",
    description: "使用质押借款（Margin）买入半导体或 AI 个股时，需要 AI 动态测算标的下跌 X% 时触发 Margin Call 或强制清算的具体价格和安全边界。",
    descriptionEn: "When using margin to buy semiconductor/AI stocks, needs AI to dynamically calculate the exact price triggering Margin Call or forced liquidation at X% decline.",
    examples: ["Margin Call 触发价计算", "安全边际测算", "清算风险预警"],
    examplesEn: ["Margin Call trigger price", "Safety margin calculation", "Liquidation risk alert"],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "行为偏误纠正与情绪管理",
    titleEn: "Behavioral Bias & EQ Coaching",
    description: "在黑天鹅暴跌时，需要 AI 稳定情绪，识别报复性交易（Revenge Trading）、确认偏误（Confirmation Bias）和踏空焦虑（FOMO），提供理性的清算或保护性对冲方案。",
    descriptionEn: "During black swan crashes, needs AI to stabilize emotions, identify Revenge Trading, Confirmation Bias, and FOMO, providing rational liquidation or protective hedging plans.",
    examples: ["FOMO 情绪检测", "报复性交易阻断", "恐慌对冲方案"],
    examplesEn: ["FOMO detection", "Revenge trading blocker", "Panic hedging plan"],
  },
];

export default function Persona() {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {t("测评用户画像", "Evaluator User Persona")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(
            "欧美散户投资者的行为特征、工具偏好和核心需求；本次评测的 58 个问题均基于上述用户画像设计，覆盖欧美散户在日常投资中的典型场景与高频需求，旨在检验 AIME 与 Gemini 3.5 Flash 在服务该类用户时的实际表现差异。",
            "Behavioral characteristics, tool preferences and core needs of retail investors in Western (North American & Western European) financial markets"
          )}
        </p>
      </div>

      {/* Section 1: User Characteristics */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">1</span>
          {t("用户特征", "User Characteristics")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {USER_TRAITS.map((trait, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  {trait.icon}
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-tight">
                  {lang === "zh" ? trait.title : trait.titleEn}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {lang === "zh" ? trait.description : trait.descriptionEn}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(lang === "zh" ? trait.tags : trait.tagsEn).map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-muted text-xs text-muted-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Core Needs */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">2</span>
          {t("核心场景与常见需求", "Core Scenarios & Common Needs")}
        </h3>
        <div className="space-y-4">
          {USER_NEEDS.map((need, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  {need.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground">
                    {lang === "zh" ? need.title : need.titleEn}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                    {lang === "zh" ? need.description : need.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {(lang === "zh" ? need.examples : need.examplesEn).map((example, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-xs text-emerald-700 font-medium border border-emerald-100">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Note */}
      <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl border border-slate-200 p-5">
        <p className="text-sm text-slate-700 leading-relaxed">
          {t(
            "本次评测的 58 个问题均基于上述用户画像设计，覆盖欧美散户在日常投资中的典型场景与高频需求，旨在检验 AIME 与 Gemini 3.5 Flash 在服务该类用户时的实际表现差异。",
            "All 58 evaluation questions are designed based on the above persona, covering typical scenarios and high-frequency needs of Western retail investors, aiming to test the practical performance difference between AIME and Gemini 3.5 Flash in serving this user segment."
          )}
        </p>
      </div>
    </div>
  );
}
