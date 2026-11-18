import { ArrowDownRight } from 'lucide-react';
import { HERO_FEATURE_IMAGE } from '../data/mobileSuits';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onSelectHeroSuit: () => void;
}

export function HeroSection({ onSelectHeroSuit }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-[#E2DFD7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* 2-Column Split Grid with matched stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs text-[#575B62] tracking-wide mb-4">
                <span>宇宙世紀典藏檔案</span>
                <span aria-hidden="true" className="mx-2 text-[#B8B2A6]">
                  ·
                </span>
                <span className="font-tech">U.C. 0079 — P.D. 323</span>
                <span aria-hidden="true" className="mx-2 text-[#B8B2A6]">
                  ·
                </span>
                <span>純靜態網頁架構</span>
              </p>

              <h1
                className="font-editorial font-bold text-[#141619] tracking-tight leading-[1.15] mb-6"
                style={{
                  fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)',
                  textWrap: 'balance',
                }}
              >
                機動戰士的鋼鐵紀元與工程美學
              </h1>

              <p className="text-[15px] sm:text-base text-[#4B5058] leading-[1.75] max-w-[65ch] mb-8">
                從 Side 7 格納庫首次啟動的 RX-78-2 初代鋼彈，到搭載精神感應框架與亞哈雙爐的各世代主力機體。本檔案館以博物館目錄形式收錄機體技術規格、戰史脈絡與工程解析，並預先整合 GitHub Pages 自動化靜態部署配置。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                瀏覽機體圖鑑
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onSelectHeroSuit}
                className="text-sm font-medium text-[#141619] hover:text-[#1D4ED8] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2"
              >
                查閱 RX-78-2 初代檔案
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <figure className="flex-1 flex flex-col">
              <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] bg-[#EAE7DF] border border-[#DFDBD0] rounded-lg overflow-hidden">
                <ResilientImage
                  src={HERO_FEATURE_IMAGE}
                  alt="RX-78-2 初代鋼彈於 Side 7 鋼骨混凝土格納庫站立展示"
                  className="w-full h-full object-cover object-center"
                  fallbackTitle="RX-78-2 GUNDAM"
                  fallbackSubtitle="U.C. 0079 格納庫檔案"
                />
              </div>
              <figcaption className="mt-3 text-xs text-[#575B62] font-editorial italic flex items-center justify-between gap-4">
                <span>Fig. 01 — RX-78-2 初代鋼彈 · 地球聯邦軍 V 作戰原型機</span>
                <span className="font-tech not-italic text-[#4B5058] shrink-0">
                  18.0m / 1,380kW
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Archive Specification Strip */}
        <div className="mt-12 pt-8 border-t border-[#E2DFD7] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-xs text-[#575B62] mb-1">典藏機體數量</p>
            <p className="font-tech text-2xl font-semibold text-[#141619] tabular-nums">
              06 <span className="text-sm font-normal text-[#575B62]">架旗艦實機</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-[#575B62] mb-1">涵蓋時間紀元</p>
            <p className="font-tech text-2xl font-semibold text-[#141619] tabular-nums">
              03 <span className="text-sm font-normal text-[#575B62]">大宇宙曆法</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-[#575B62] mb-1">核心工程解析</p>
            <p className="font-tech text-2xl font-semibold text-[#141619] tabular-nums">
              04 <span className="text-sm font-normal text-[#575B62]">項推進與裝甲系統</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-[#575B62] mb-1">部署相容性</p>
            <p className="font-tech text-2xl font-semibold text-[#1D4ED8] tabular-nums">
              GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
