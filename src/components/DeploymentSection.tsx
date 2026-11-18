import { useState } from 'react';
import { Check, Copy, CheckCircle2 } from 'lucide-react';

type DeployMethod = 'actions' | 'manual';

const GIT_PUSH_SNIPPET = `git init
git add .
git commit -m "feat: deploy gundam static archive"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<儲存庫名稱>.git
git push -u origin main`;

const MANUAL_BUILD_SNIPPET = `npm install
npm run build
# 靜態檔案將完整輸出至 dist/ 資料夾
# 可直接將 dist/ 上傳至 gh-pages 分支或任一靜態託管服務`;

export function DeploymentSection() {
  const [method, setMethod] = useState<DeployMethod>('actions');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  const readinessItems = [
    {
      title: '相對路徑資源設定 (base: "./")',
      detail:
        'vite.config.ts 已設定相對基準路徑，部署於 github.io/<repo-name>/ 子目錄時不會發生圖片或腳本 404 錯誤。',
    },
    {
      title: '內建 GitHub Actions 自動化腳本',
      detail:
        '已預置 .github/workflows/deploy.yml，推送程式碼至 main 分支後將自動執行建置並發布至 GitHub Pages。',
    },
    {
      title: '零後端相依與本地靜態圖片封裝',
      detail:
        '所有機體資料與高解析圖片皆由前端模組直接封裝打包至 dist/，無須伺服器或外部圖床即可穩定運行。',
    },
  ];

  const activeSnippet = method === 'actions' ? GIT_PUSH_SNIPPET : MANUAL_BUILD_SNIPPET;

  return (
    <section
      id="deploy"
      className="border-b border-[#E2DFD7] py-16 lg:py-24 bg-[#EFECE6]/45"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Static Readiness Explanation */}
          <div className="lg:col-span-5">
            <p className="text-xs text-[#575B62] tracking-wide mb-2">
              04. 靜態託管配置 · GitHub Pages Ready
            </p>
            <h2
              className="font-editorial font-bold text-[#141619] text-2xl sm:text-3xl tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              開箱即用的 GitHub 靜態部署架構
            </h2>
            <p className="text-sm sm:text-[15px] text-[#4B5058] leading-relaxed mb-8">
              本專案已針對 GitHub Pages 完成靜態化組態。只需將程式碼推送至你的 GitHub Repository，並於設定頁面啟用 GitHub Actions 來源，即可在數十秒內完成全球 CDN 上線。
            </p>

            <ul className="space-y-4">
              {readinessItems.map((item) => (
                <li
                  key={item.title}
                  className="bg-white border border-[#E2DFD7] rounded-lg p-4 flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#141619]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#575B62] leading-relaxed mt-1">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Deployment Instructions & CLI Commands */}
          <div className="lg:col-span-7 bg-white border border-[#E2DFD7] rounded-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#EFECE6]">
              <div>
                <h3 className="text-base font-semibold text-[#141619]">
                  部署流程與指令面板
                </h3>
                <p className="text-xs text-[#575B62] mt-1">
                  切換下方頁籤以查看自動部署或手動打包步驟
                </p>
              </div>

              <div
                role="tablist"
                aria-label="部署方式切換"
                className="flex items-center gap-1 p-1 bg-[#EAE7DF] rounded-md self-start"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={method === 'actions'}
                  onClick={() => setMethod('actions')}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    method === 'actions'
                      ? 'bg-white text-[#141619] shadow-xs'
                      : 'text-[#4B5058] hover:text-[#141619]'
                  }`}
                >
                  GitHub Actions 自動部署
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={method === 'manual'}
                  onClick={() => setMethod('manual')}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    method === 'manual'
                      ? 'bg-white text-[#141619] shadow-xs'
                      : 'text-[#4B5058] hover:text-[#141619]'
                  }`}
                >
                  本機建置輸出
                </button>
              </div>
            </div>

            {method === 'actions' ? (
              <ol className="space-y-4 mb-6 text-sm text-[#34383E]">
                <li className="flex gap-3">
                  <span className="font-tech text-xs font-semibold text-[#1D4ED8] mt-0.5 shrink-0">
                    01
                  </span>
                  <span>
                    在 GitHub 建立新的公開或私人 Repository，並使用下方指令將專案推送至{' '}
                    <code className="font-tech text-xs bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E2DFD7]">
                      main
                    </code>{' '}
                    分支。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-tech text-xs font-semibold text-[#1D4ED8] mt-0.5 shrink-0">
                    02
                  </span>
                  <span>
                    進入該 Repository 的 <strong>Settings → Pages</strong>，將{' '}
                    <strong>Build and deployment → Source</strong> 切換為{' '}
                    <strong>GitHub Actions</strong>。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-tech text-xs font-semibold text-[#1D4ED8] mt-0.5 shrink-0">
                    03
                  </span>
                  <span>
                    等待 Actions 自動跑完{' '}
                    <code className="font-tech text-xs bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E2DFD7]">
                      npm run build
                    </code>{' '}
                    與部署步驟，即可開啟專屬的{' '}
                    <code className="font-tech text-xs bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E2DFD7]">
                      github.io
                    </code>{' '}
                    靜態網站連結。
                  </span>
                </li>
              </ol>
            ) : (
              <p className="text-sm text-[#34383E] leading-relaxed mb-6">
                若希望自行管理靜態產物，或部署至任何靜態檔案伺服器（如 GitHub Pages 的{' '}
                <code className="font-tech text-xs bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E2DFD7]">
                  gh-pages
                </code>{' '}
                分支、Cloudflare Pages 或 Netlify），請於專案根目錄執行以下建置指令：
              </p>
            )}

            {/* Terminal Code Block */}
            <div className="bg-[#141619] text-[#EAE7DF] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2A2E35] text-xs">
                <span className="font-tech text-[#9CA3AF]">
                  {method === 'actions' ? 'bash · git push' : 'bash · npm run build'}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(activeSnippet, method)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-[#EAE7DF] hover:bg-[#2A2E35] transition-colors cursor-pointer"
                >
                  {copiedKey === method ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>複製指令</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto font-tech text-xs sm:text-[13px] leading-relaxed">
                <code>{activeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
