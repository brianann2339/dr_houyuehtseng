import type { Metadata } from "next";
import { HomePage } from "../page";
import { languageAlternates, pageUrl } from "../i18n";

export const metadata: Metadata = {
  title: "侯岳岑（Yueh-Tseng Hou）｜救急医・臨床AI研究者",
  description:
    "侯岳岑（Yueh-Tseng Hou, M.D.）。台北慈済病院救急部の専任主治医、国立台湾大学の博士候補。臨床課題とAIモデルをつなぎ、敗血症予測システムの臨床実装に取り組んでいます。",
  alternates: {
    canonical: pageUrl("ja", "home"),
    languages: languageAlternates("home"),
  },
  robots: { index: true, follow: true },
};

export default function JapaneseHome() {
  return <HomePage locale="ja" />;
}
