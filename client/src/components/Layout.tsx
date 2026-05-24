import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, User, Compass, List, FileText, FileCheck } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { path: "/", labelZh: "评测概览", labelEn: "Overview", icon: BarChart3 },
  { path: "/persona", labelZh: "用户画像", labelEn: "Persona", icon: User },
  { path: "/methodology", labelZh: "设计思路", labelEn: "Methodology", icon: Compass },
  { path: "/details", labelZh: "问题列表", labelEn: "Questions", icon: List },
  { path: "/comparison", labelZh: "对比结果明细", labelEn: "Comparison Details", icon: FileText },
  { path: "/conclusion", labelZh: "评测结论", labelEn: "Review Conclusion", icon: FileCheck },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-foreground leading-tight">
                  {t("AIME vs Gemini 金融agent能力 深度评测", "AIME vs Gemini Financial Agent Deep Evaluation")}
                </h1>
                <p className="text-xs text-muted-foreground">
                  AIME vs Gemini 3.5 Flash · by Marco {t("刘凌鹏", "Liu Lingpeng")}
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location === item.path;
                const Icon = item.icon;
                return (
                  <Link key={item.path} href={item.path}>
                    <button
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                        transition-all duration-150 ease-out
                        ${isActive
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{lang === "zh" ? item.labelZh : item.labelEn}</span>
                    </button>
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === "zh" ? "EN" : "中文"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden border-t border-border px-4 py-2 flex gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path}>
                <button
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lang === "zh" ? item.labelZh : item.labelEn}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer with Creator */}
      <footer className="border-t border-border py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {t("创作者：Marco 刘凌鹏", "Created by: Marco Liu Lingpeng")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("AIME 产品评测 · 2026", "AIME Product Evaluation · 2026")}
          </p>
        </div>
      </footer>
    </div>
  );
}
