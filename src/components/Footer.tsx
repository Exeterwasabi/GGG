export function Footer() {
  return (
    <footer className="py-12 bg-[#F7F6F2]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-tight text-[#141619]">
            GUNDAM ARCHIVE
          </p>
          <p className="text-xs text-[#575B62] mt-1">
            機動戰士鋼彈靜態典藏網站 · 支援 GitHub Pages 一鍵靜態託管
          </p>
        </div>

        <nav
          aria-label="頁尾導覽"
          className="flex flex-wrap items-center gap-6 text-xs text-[#4B5058]"
        >
          <a href="#top" className="hover:text-[#141619] transition-colors">
            返回頂部
          </a>
          <a href="#catalog" className="hover:text-[#141619] transition-colors">
            機體圖鑑
          </a>
          <a href="#timeline" className="hover:text-[#141619] transition-colors">
            紀元編年史
          </a>
          <a href="#engineering" className="hover:text-[#141619] transition-colors">
            機械工程
          </a>
          <a href="#deploy" className="hover:text-[#141619] transition-colors">
            GitHub 部署
          </a>
        </nav>
      </div>
    </footer>
  );
}
