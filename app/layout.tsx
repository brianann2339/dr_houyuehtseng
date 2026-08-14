import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "侯岳岑 Yueh-Tseng Hou｜急診醫師・臨床 AI 研究者",
  description:
    "侯岳岑（Yueh-Tseng Hou, M.D.），急診醫師・臨床 AI 研究者。台北慈濟醫院急診部專任主治醫師、國立臺灣大學生醫電子與資訊學研究所博士候選人；與跨領域團隊一起把敗血症預測模型帶進急診的日常流程。",
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
