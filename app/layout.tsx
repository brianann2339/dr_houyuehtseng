import type { Metadata } from "next";
import "./globals.css";
import { homeUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(homeUrl),
  title: "侯岳岑 Yueh-Tseng Hou｜急診醫師・臨床 AI 研究者",
  description:
    "侯岳岑（Yueh-Tseng Hou, M.D.），急診醫師・臨床 AI 研究者。台北慈濟急診專任主治醫師、臺大生醫電資博士候選人。專注於臨床痛點與 AI 模型的精準轉譯，推動敗血症預測系統進入常態急診流程。",
  alternates: { canonical: homeUrl },
  robots: { index: true, follow: true },
  verification: { google: "z9Oqz_ZatY5FOe1Uk2-7pk9zyFW01yl94YoX3nyf8mA" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- app router 無 _document.js，單頁站由 root layout 載入字體 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@400;700&family=Noto+Sans+TC:wght@400;500;700&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
