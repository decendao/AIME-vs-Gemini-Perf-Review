import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { questions, CATEGORY_LABELS, MOTIVATION_LABELS, type Question } from "@/data/questions";
import ImageLightbox from "@/components/ImageLightbox";
import {
  Trophy, Minus, X, Clock, ChevronDown, ChevronUp,
  CheckCircle2, XCircle, Image as ImageIcon, Filter,
  Star, Zap, HelpCircle
} from "lucide-react";

// ============================================================
// 问题列表页 - 58个问题展示，支持筛选、展开详情、截图展示
// ============================================================

type FilterCategory = "all" | string;
type FilterResult = "all" | "win" | "tie" | "lose" | "pending";
type FilterDifficulty = "all" | "2" | "3" | "4" | "5";

export default function Details() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const [selectedResult, setSelectedResult] = useState<FilterResult>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<FilterDifficulty>("all");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      if (selectedCategory !== "all" && q.category !== selectedCategory) return false;
      if (selectedDifficulty !== "all" && q.difficulty !== parseInt(selectedDifficulty)) return false;
      if (selectedResult !== "all") {
        if (selectedResult === "pending" && q.result) return false;
        if (selectedResult !== "pending" && q.result !== selectedResult) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedResult, selectedDifficulty]);

  const resultCounts = useMemo(() => ({
    all: questions.length,
    win: questions.filter(q => q.result === "win").length,
    tie: questions.filter(q => q.result === "tie").length,
    lose: questions.filter(q => q.result === "lose").length,
    pending: questions.filter(q => !q.result).length,
  }), []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(questions.map(q => q.category)));
    return cats;
  }, []);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {t("问题列表", "Question List")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(
            `共 ${questions.length} 个测试问题，覆盖 4 大分类维度 × 4 大核心动机`,
            `${questions.length} test questions covering 4 categories × 4 core motivations`
          )}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Category Filter */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              {t("分类维度", "Category")}
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              <FilterChip
                active={selectedCategory === "all"}
                onClick={() => setSelectedCategory("all")}
                label={t(`全部 (${questions.length})`, `All (${questions.length})`)}
              />
              {categories.map(cat => {
                const count = questions.filter(q => q.category === cat).length;
                const label = lang === "zh" ? cat : (CATEGORY_LABELS[cat]?.en || cat);
                return (
                  <FilterChip
                    key={cat}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    label={`${label} (${count})`}
                  />
                );
              })}
            </div>
          </div>

          {/* Difficulty + Result Filter Row */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Difficulty Filter */}
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                <Star className="w-3 h-3" />
                {t("难度等级", "Difficulty")}
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                <FilterChip active={selectedDifficulty === "all"} onClick={() => setSelectedDifficulty("all")} label={t("全部", "All")} />
                <FilterChip active={selectedDifficulty === "2"} onClick={() => setSelectedDifficulty("2")} label="⭐⭐" />
                <FilterChip active={selectedDifficulty === "3"} onClick={() => setSelectedDifficulty("3")} label="⭐⭐⭐" />
                <FilterChip active={selectedDifficulty === "4"} onClick={() => setSelectedDifficulty("4")} label="⭐⭐⭐⭐" />
                <FilterChip active={selectedDifficulty === "5"} onClick={() => setSelectedDifficulty("5")} label="⭐⭐⭐⭐⭐" />
              </div>
            </div>

            {/* Result Filter */}
            <div className="md:w-auto">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">
                {t("评测结果", "Result")}
              </label>
              <div className="flex gap-2 mt-1">
                <ResultFilterChip result="all" active={selectedResult === "all"} onClick={() => setSelectedResult("all")} count={resultCounts.all} />
                <ResultFilterChip result="win" active={selectedResult === "win"} onClick={() => setSelectedResult("win")} count={resultCounts.win} />
                <ResultFilterChip result="tie" active={selectedResult === "tie"} onClick={() => setSelectedResult("tie")} count={resultCounts.tie} />
                <ResultFilterChip result="lose" active={selectedResult === "lose"} onClick={() => setSelectedResult("lose")} count={resultCounts.lose} />
                <ResultFilterChip result="pending" active={selectedResult === "pending"} onClick={() => setSelectedResult("pending")} count={resultCounts.pending} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        {t(`显示 ${filteredQuestions.length} / ${questions.length} 条问题`, `Showing ${filteredQuestions.length} / ${questions.length} questions`)}
      </p>

      {/* Question List */}
      <div className="space-y-3">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isExpanded={expandedCase === question.id}
            onToggle={() => setExpandedCase(expandedCase === question.id ? null : question.id)}
          />
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">{t("没有匹配的结果", "No matching results")}</p>
          <p className="text-sm mt-1">{t("请调整筛选条件", "Please adjust your filters")}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Question Card Component
// ============================================================
interface QuestionCardProps {
  question: Question;
  isExpanded: boolean;
  onToggle: () => void;
}

function QuestionCard({ question, isExpanded, onToggle }: QuestionCardProps) {
  const { t, lang } = useLanguage();

  const resultConfig = {
    win: { icon: Trophy, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", label: t("AIME\u80dc", "AIME Win") },
    lose: { icon: X, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200", label: t("AIME\u8d1f", "AIME Lose") },
    tie: { icon: Minus, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200", label: t("\u5e73\u5c40", "Draw") },
    pending: { icon: HelpCircle, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", label: t("\u5f85\u8bc4\u6d4b", "Pending") },
  };

  const resultKey = question.result || "pending";
  const config = resultConfig[resultKey];
  const ResultIcon = config.icon;

  const categoryLabel = lang === "zh" ? question.category : (CATEGORY_LABELS[question.category]?.en || question.category);
  const motivationLabel = lang === "zh" ? question.motivation : (MOTIVATION_LABELS[question.motivation]?.en || question.motivation);

  return (
    <div className={`bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all duration-200 ${isExpanded ? "ring-1 ring-primary/20" : "hover:shadow-md"}`}>
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center gap-4 text-left"
      >
        {/* Case Number */}
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-muted-foreground font-mono">
            {String(question.id).padStart(2, "0")}
          </span>
        </div>

        {/* Question */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {lang === "zh" ? question.questionZh : question.questionEn}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 font-medium">
              {categoryLabel}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-50 text-violet-600 font-medium">
              {motivationLabel}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {"⭐".repeat(question.difficulty)}
            </span>
          </div>
        </div>

        {/* Time comparison (if evaluated) */}
        {question.aimeTimeSeconds && question.geminiTimeSeconds && (
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">AIME</p>
              <p className="text-sm font-mono font-medium text-indigo-600">{question.aimeTimeSeconds}s</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Gemini</p>
              <p className="text-sm font-mono font-medium text-gray-500">{question.geminiTimeSeconds}s</p>
            </div>
          </div>
        )}

        {/* Result Badge */}
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color} ${config.border} border shrink-0`}>
          <span className="flex items-center gap-1">
            <ResultIcon className="w-3 h-3" />
            {config.label}
          </span>
        </div>

        {/* Expand icon */}
        <div className="shrink-0 text-muted-foreground">
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Detail */}
      {isExpanded && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-5 animate-fade-in-up">
          {/* Full Question */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {t("完整问题", "Full Question")}
            </h4>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-foreground leading-relaxed">
                {lang === "zh" ? question.questionZh : question.questionEn}
              </p>
            </div>
            {/* Show other language version */}
            <details className="mt-2">
              <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                {lang === "zh" ? "English Version" : "\u4e2d\u6587\u7248\u672c"}
              </summary>
              <div className="bg-muted/30 rounded-lg p-3 mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "zh" ? question.questionEn : question.questionZh}
                </p>
              </div>
            </details>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-3">
            <MetaBadge label={t("\u5206\u7c7b", "Category")} value={categoryLabel} color="indigo" />
            <MetaBadge label={t("\u573a\u666f", "Scenario")} value={question.scenario} color="violet" />
            <MetaBadge label={t("\u52a8\u673a", "Motivation")} value={motivationLabel} color="amber" />
            <MetaBadge label={t("\u96be\u5ea6", "Difficulty")} value={"⭐".repeat(question.difficulty)} color="orange" />
            <MetaBadge label={t("\u5e38\u89c1\u5ea6", "Frequency")} value={`${question.frequency}/5`} color="emerald" />
          </div>

          {/* Analysis (if evaluated) */}
          {question.analysisZh && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {t("\u5bf9\u6bd4\u5206\u6790", "Comparative Analysis")}
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {lang === "zh" ? question.analysisZh : question.analysisEn}
              </p>
            </div>
          )}

          {/* Time comparison mobile */}
          {question.aimeTimeSeconds && question.geminiTimeSeconds && (
            <div className="md:hidden flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs text-muted-foreground">AIME:</span>
                <span className="text-sm font-mono font-medium">{question.aimeTimeSeconds}s</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-muted-foreground">Gemini:</span>
                <span className="text-sm font-mono font-medium">{question.geminiTimeSeconds}s</span>
              </div>
            </div>
          )}

          {/* Pros & Cons Grid (if evaluated) */}
          {question.aimeProsCons && question.geminiProsCons && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">AIME</h4>
                <div className="space-y-1.5">
                  {question.aimeProsCons.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {question.aimeProsCons.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Gemini 3.5 Flash</h4>
                <div className="space-y-1.5">
                  {question.geminiProsCons.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {question.geminiProsCons.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Screenshots Section */}
          {question.screenshots && (question.screenshots.aime || question.screenshots.gemini) && (
            <div className="border-t border-border pt-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" />
                {t("\u622a\u56fe\u5bf9\u6bd4", "Screenshot Comparison")}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.screenshots.aime && (
                  <div>
                    <p className="text-xs text-indigo-600 font-medium mb-2">AIME</p>
                    <ImageLightbox images={[{ url: question.screenshots.aime, caption: "AIME Response" }]} />
                  </div>
                )}
                {question.screenshots.gemini && (
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-2">Gemini 3.5 Flash</p>
                    <ImageLightbox images={[{ url: question.screenshots.gemini, caption: "Gemini Response" }]} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Placeholder for screenshots when none provided */}
          {(!question.screenshots || (!question.screenshots.aime && !question.screenshots.gemini)) && (
            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ImageIcon className="w-4 h-4" />
                <span className="text-xs">{t("\u622a\u56fe\u5f85\u8865\u5145\uff08\u70b9\u51fb\u53ef\u5c55\u5f00\u67e5\u770b\u5927\u56fe\uff09", "Screenshots to be added (click to expand)")}</span>
              </div>
            </div>
          )}

          {/* Pending evaluation notice */}
          {!question.result && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <p className="text-xs text-amber-700">
                {t(
                  "\u8be5\u95ee\u9898\u5c1a\u672a\u5b8c\u6210\u8bc4\u6d4b\uff0c\u7b49\u5f85\u586b\u5145\u5bf9\u6bd4\u7ed3\u679c\u3001\u5206\u6790\u548c\u622a\u56fe\u3002",
                  "This question has not been evaluated yet. Awaiting comparison results, analysis, and screenshots."
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Meta Badge Component
// ============================================================
function MetaBadge({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  };
  return (
    <div className={`px-2.5 py-1 rounded-lg border text-[11px] ${colorMap[color] || colorMap.indigo}`}>
      <span className="font-medium">{label}:</span> {value}
    </div>
  );
}

// ============================================================
// Filter Chips
// ============================================================
function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function ResultFilterChip({ result, active, onClick, count }: { result: FilterResult; active: boolean; onClick: () => void; count: number }) {
  const { t } = useLanguage();
  const labels: Record<FilterResult, string> = {
    all: t("\u5168\u90e8", "All"),
    win: t("\u80dc", "Win"),
    tie: t("\u5e73", "Tie"),
    lose: t("\u8d1f", "Lose"),
    pending: t("\u5f85\u8bc4", "Pending"),
  };
  const colors: Record<FilterResult, string> = {
    all: active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
    win: active ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700",
    tie: active ? "bg-gray-600 text-white" : "bg-gray-100 text-gray-600",
    lose: active ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-700",
    pending: active ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-700",
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${colors[result]}`}
    >
      {labels[result]} ({count})
    </button>
  );
}
