import type { Metadata } from "next";
import { languageAlternates, pageUrl } from "../../i18n";
import { ResearchPage } from "../../research/page";

export const metadata: Metadata = {
  title: "Research | Yueh-Tseng Hou, M.D.",
  description:
    "Publications, conference presentations, and research projects by Yueh-Tseng Hou in emergency medicine, sepsis decision support, trauma outcomes, shock indices, and medical imaging AI.",
  alternates: {
    canonical: pageUrl("en", "research"),
    languages: languageAlternates("research"),
  },
  robots: { index: true, follow: true },
};

export default function EnglishResearch() {
  return <ResearchPage locale="en" />;
}
