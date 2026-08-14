# 侯岳岑醫師個人網站

侯岳岑醫師的個人品牌與研究成果網站，使用 vinext 維護內容，並預先渲染為純靜態檔案發布至 GitHub Pages。

- 正式網址：<https://brianann2339.github.io/dr_houyuehtseng/>
- 首頁：`app/page.tsx`
- 研究成果：`app/research/page.tsx`

## 本機開發

```bash
npm ci
npm run dev
```

## 驗證與靜態匯出

```bash
npm run lint
npm test
```

`npm test` 會建置 vinext 網站、產生 `pages-dist/` 靜態網站，並同時驗證伺服器渲染內容與 GitHub Pages 產物。推送至 `main` 後，GitHub Actions 會自動發布 `pages-dist/`。
