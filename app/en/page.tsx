import type { Metadata } from "next";
import { HomePage } from "../page";
import { languageAlternates, pageUrl } from "../i18n";

export const metadata: Metadata = {
  title: "Yueh-Tseng Hou, M.D. | Emergency Physician & Clinical AI Researcher",
  description:
    "Yueh-Tseng Hou, M.D., is an attending emergency physician at Taipei Tzu Chi Hospital and a Ph.D. candidate at National Taiwan University, focused on translating clinical needs into deployable AI systems.",
  alternates: {
    canonical: pageUrl("en", "home"),
    languages: languageAlternates("home"),
  },
  robots: { index: true, follow: true },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
