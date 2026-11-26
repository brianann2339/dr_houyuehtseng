import type { Metadata } from "next";
import { languageAlternates, pageUrl } from "../../i18n";
import { ResearchPage } from "../../research/page";

export const metadata: Metadata = {
  title: "研究業績｜侯岳岑（Yueh-Tseng Hou）",
  description:
    "侯岳岑の論文、学会発表、研究プロジェクトを掲載。救急医学、敗血症意思決定支援、外傷予後、ショックインデックス、医用画像AIを研究しています。",
  alternates: {
    canonical: pageUrl("ja", "research"),
    languages: languageAlternates("research"),
  },
  robots: { index: true, follow: true },
};

export default function JapaneseResearch() {
  return <ResearchPage locale="ja" />;
}
