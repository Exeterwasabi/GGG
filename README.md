# 機動戰士鋼彈檔案館 (Mobile Suit Archive)

這是一個專為 **GitHub Pages 靜態部署** 打造的機動戰士鋼彈機械檔案館網站，使用 React、TypeScript、Vite 與 Tailwind CSS 建構，所有圖片與資料皆打包為純靜態資產，無須任何後端伺服器即可運作。

## 專案特色

- **純靜態架構**：`vite.config.ts` 已預先設定 `base: './'` 相對路徑，無論部署於根網域或 `https://<username>.github.io/<repo-name>/` 子路徑皆可正常載入。
- **自動部署流程**：內建 `.github/workflows/deploy.yml`，推送至 `main` 分支即可自動建置並發布至 GitHub Pages。
- **機體圖鑑與性能對比**：收錄 RX-78-2、MS-06S、RX-93、RX-0、ZGMF-X10A、ASW-G-08 等經典機體，支援紀元篩選、關鍵字檢索與雙機體規格對比。
- **宇宙世紀編年史與工程解析**：完整呈現各紀元重大戰役脈絡與米諾夫斯基粒子、精神感應框架等設定技術。

## 部署至 GitHub Pages 步驟

1. 在 GitHub 建立一個新的 Repository，並將本專案程式碼推送至 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "feat: initial gundam static archive"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<儲存庫名稱>.git
   git push -u origin main
   ```
2. 前往 GitHub Repository 的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 下拉選單選擇 **GitHub Actions**。
4. 稍待約 1 分鐘讓 Actions 執行完成，即可透過生成的 `github.io` 網址瀏覽網站。

## 本機開發與建置指令

```bash
npm install
npm run dev      # 啟動本機開發預覽 (Port 3000)
npm run build    # 輸出靜態網頁至 dist/ 資料夾
npm run preview  # 預覽打包後的靜態產物
```
