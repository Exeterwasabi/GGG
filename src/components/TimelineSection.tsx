import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HISTORICAL_ERAS, MOBILE_SUITS, MobileSuit } from '../data/mobileSuits';

interface TimelineSectionProps {
  onSelectSuit: (suit: MobileSuit) => void;
}

export function TimelineSection({ onSelectSuit }: TimelineSectionProps) {
  const [activeEraId, setActiveEraId] = useState<string>(HISTORICAL_ERAS[0].id);

  const activeEra =
    HISTORICAL_ERAS.find((era) => era.id === activeEraId) ?? HISTORICAL_ERAS[0];

  const featuredSuits = MOBILE_SUITS.filter((suit) =>
    activeEra.featuredSuitIds.includes(suit.id)
  );

  return (
    <section
      id="timeline"
      className="border-b border-[#E2DFD7] py-16 lg:py-24 bg-[#EFECE6]/45"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-xs text-[#575B62] tracking-wide mb-2">
            02. 戰史與紀元脈絡 · Historical Chronicle
          </p>
          <h2
            className="font-editorial font-bold text-[#141619] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            宇宙世紀與跨紀元編年史
          </h2>
        </div>

        {/* Era Navigation Rail */}
        <div
          role="tablist"
          aria-label="歷史紀元時間軸"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
        >
          {HISTORICAL_ERAS.map((era) => {
            const isActive = era.id === activeEra.id;
            return (
              <button
                key={era.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveEraId(era.id)}
                className={`text-left p-4 rounded-lg border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#1D4ED8] text-[#141619]'
                    : 'bg-[#F7F6F2] border-[#E2DFD7] text-[#4B5058] hover:border-[#BEB8AA] hover:text-[#141619]'
                }`}
              >
                <span className="block font-tech text-xs text-[#575B62] mb-1">
                  {era.index}. {era.eraCode}
                </span>
                <span className="block text-sm font-semibold truncate">
                  {era.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric 2-Column Reading Canvas (70% Main Essay / 30% Margin Notes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Essay Column */}
          <article className="lg:col-span-8 bg-white border border-[#E2DFD7] rounded-lg p-6 sm:p-10">
            <div className="text-xs text-[#575B62] font-tech mb-3">
              {activeEra.span}
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141619] mb-2">
              {activeEra.title}
            </h3>
            <p className="text-sm text-[#575B62] pb-6 mb-6 border-b border-[#EFECE6]">
              {activeEra.subtitle}
            </p>

            {/* Editorial Pull Quote (Top & bottom hairline dividers, no thick left bar) */}
            <blockquote className="py-5 my-6 border-t border-b border-[#E2DFD7] font-editorial italic text-lg sm:text-xl text-[#141619] leading-relaxed">
              {activeEra.leadQuote}
            </blockquote>

            <div className="space-y-5 text-[15px] sm:text-base text-[#34383E] leading-[1.85] max-w-[68ch]">
              <p className="first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#141619]">
                {activeEra.essayLead}
              </p>
              <p>{activeEra.essayBody}</p>
            </div>
          </article>

          {/* Margin Sidebar: Turning Points & Cross-Linked Suits */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E2DFD7] rounded-lg p-6">
              <h4 className="text-sm font-semibold text-[#141619] mb-4">
                關鍵戰役節點
              </h4>
              <ol className="space-y-4">
                {activeEra.keyTurningPoints.map((point) => (
                  <li
                    key={`${point.year}-${point.event}`}
                    className="pb-3 border-b border-[#EFECE6] last:pb-0 last:border-b-0"
                  >
                    <span className="block font-tech text-xs text-[#1D4ED8] mb-1">
                      {point.year}
                    </span>
                    <p className="text-sm text-[#34383E] leading-relaxed">
                      {point.event}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white border border-[#E2DFD7] rounded-lg p-6">
              <h4 className="text-sm font-semibold text-[#141619] mb-3">
                當期主力機體檔案
              </h4>
              <div className="space-y-3">
                {featuredSuits.map((suit) => (
                  <button
                    key={suit.id}
                    type="button"
                    onClick={() => onSelectSuit(suit)}
                    className="w-full text-left p-3.5 rounded-md border border-[#E2DFD7] hover:border-[#1D4ED8] transition-colors flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div>
                      <span className="block font-tech text-xs text-[#575B62]">
                        {suit.modelNumber}
                      </span>
                      <span className="block text-sm font-semibold text-[#141619] group-hover:text-[#1D4ED8]">
                        {suit.nameZh}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#575B62] group-hover:text-[#1D4ED8] shrink-0"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-4 pt-4 border-t border-[#EFECE6] text-xs text-[#575B62] leading-relaxed">
                {activeEra.casualtyOrScaleNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
