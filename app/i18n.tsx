import Link from "next/link";
import { siteUrl } from "./site";

export type Locale = "zh" | "en" | "ja";
export type PageKind = "home" | "research";

export const localeTags: Record<Locale, string> = {
  zh: "zh-Hant",
  en: "en",
  ja: "ja",
};

const pagePaths: Record<PageKind, Record<Locale, string>> = {
  home: {
    zh: "/",
    en: "/en/",
    ja: "/ja/",
  },
  research: {
    zh: "/research/",
    en: "/en/research/",
    ja: "/ja/research/",
  },
};

const languageLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
};

export function pagePath(locale: Locale, page: PageKind) {
  return pagePaths[page][locale];
}

export function pageUrl(locale: Locale, page: PageKind) {
  return `${siteUrl}${pagePath(locale, page)}`;
}

export function languageAlternates(page: PageKind) {
  return {
    "zh-Hant": pageUrl("zh", page),
    en: pageUrl("en", page),
    ja: pageUrl("ja", page),
    "x-default": pageUrl("zh", page),
  };
}

export function LanguageSwitcher({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKind;
}) {
  const label =
    locale === "zh" ? "切換語言" : locale === "ja" ? "言語を切り替える" : "Switch language";

  return (
    <nav className="language-switcher" aria-label={label}>
      {(Object.keys(languageLabels) as Locale[]).map((item) => (
        <Link
          href={pagePath(item, page)}
          hrefLang={localeTags[item]}
          aria-current={item === locale ? "page" : undefined}
          key={item}
        >
          {languageLabels[item]}
        </Link>
      ))}
    </nav>
  );
}
