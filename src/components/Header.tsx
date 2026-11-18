interface HeaderProps {
  compareCount: number;
  onOpenCompare: () => void;
}

export function Header({ compareCount, onOpenCompare }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#E2DFD7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean wordmark element */}
        <a
          href="#top"
          className="text-base lg:text-lg font-bold tracking-tight text-[#141619] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
        >
          GUNDAM ARCHIVE
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="主導覽列"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5058]"
        >
          <a
            href="#catalog"
            className="hover:text-[#141619] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            機體圖鑑
          </a>
          <a
            href="#timeline"
            className="hover:text-[#141619] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            紀元編年史
          </a>
          <a
            href="#engineering"
            className="hover:text-[#141619] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            機械工程
          </a>
          <a
            href="#deploy"
            className="hover:text-[#141619] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            GitHub 部署
          </a>
        </nav>

        {/* Zone 3: Single primary action button */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenCompare}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            {compareCount > 0 ? `性能對比 (${compareCount}/2)` : '機體性能對比'}
          </button>
        </div>
      </div>
    </header>
  );
}
