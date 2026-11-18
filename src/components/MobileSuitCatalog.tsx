import { useMemo, useState } from 'react';
import { ArrowUpDown, Check, Plus, Search } from 'lucide-react';
import { EraCategory, MOBILE_SUITS, MobileSuit } from '../data/mobileSuits';
import { ResilientImage } from './ResilientImage';

interface MobileSuitCatalogProps {
  compareIds: string[];
  onToggleCompare: (suitId: string) => void;
  onSelectSuit: (suit: MobileSuit) => void;
}

type SortKey = 'era' | 'output' | 'height';

const ERA_FILTERS: { id: EraCategory; label: string }[] = [
  { id: 'all', label: '全部機體' },
  { id: 'uc', label: '宇宙世紀 U.C.' },
  { id: 'ce', label: '宇宙紀元 C.E.' },
  { id: 'pd', label: '災厄戰後 P.D.' },
];

export function MobileSuitCatalog({
  compareIds,
  onToggleCompare,
  onSelectSuit,
}: MobileSuitCatalogProps) {
  const [selectedEra, setSelectedEra] = useState<EraCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('era');

  const filteredSuits = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matched = MOBILE_SUITS.filter((suit) => {
      if (selectedEra !== 'all' && suit.eraCategory !== selectedEra) {
        return false;
      }
      if (!query) return true;
      return (
        suit.modelNumber.toLowerCase().includes(query) ||
        suit.nameZh.toLowerCase().includes(query) ||
        suit.nameEn.toLowerCase().includes(query) ||
        suit.pilot.toLowerCase().includes(query) ||
        suit.faction.toLowerCase().includes(query)
      );
    });

    return [...matched].sort((a, b) => {
      if (sortBy === 'output') return b.reactorOutputKw - a.reactorOutputKw;
      if (sortBy === 'height') return b.heightMeters - a.heightMeters;
      return a.accessionNo.localeCompare(b.accessionNo);
    });
  }, [selectedEra, searchQuery, sortBy]);

  return (
    <section id="catalog" className="border-b border-[#E2DFD7] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs text-[#575B62] tracking-wide mb-2">
              01. 館藏機體目錄 · Mobile Suit Collection
            </p>
            <h2
              className="font-editorial font-bold text-[#141619] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              經典機動戰士典藏圖鑑
            </h2>
          </div>

          <p className="text-sm text-[#4B5058] max-w-md leading-relaxed">
            點選任一機體卡片可開啟完整博物館館藏檔案，或勾選兩架機體進行動力出力與武裝配置並列對比。
          </p>
        </div>

        {/* Interactive Toolbar: Era Segmented Control + Search + Sort */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E2DFD7]">
          <div
            role="tablist"
            aria-label="紀元分類篩選"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE7DF] rounded-lg self-start"
          >
            {ERA_FILTERS.map((tab) => {
              const isActive = selectedEra === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedEra(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#141619] shadow-xs'
                      : 'text-[#4B5058] hover:text-[#141619]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#575B62] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋型號、名稱或駕駛員..."
                aria-label="搜尋機體型號、名稱或駕駛員"
                className="w-full sm:w-64 pl-10 pr-4 py-2 text-sm bg-white border border-[#D8D4CA] rounded-md text-[#141619] placeholder:text-[#7A7E85] focus:outline-none focus:border-[#1D4ED8]"
              />
            </div>

            <div className="relative flex items-center">
              <ArrowUpDown
                className="w-3.5 h-3.5 text-[#575B62] absolute left-3 pointer-events-none"
                aria-hidden="true"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                aria-label="機體排序方式"
                className="w-full sm:w-auto pl-8 pr-8 py-2 text-sm bg-white border border-[#D8D4CA] rounded-md text-[#141619] focus:outline-none focus:border-[#1D4ED8] cursor-pointer"
              >
                <option value="era">依館藏編號排序</option>
                <option value="output">依反應爐出力（高至低）</option>
                <option value="height">依機體全高（高至低）</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Grid or Empty State */}
        {filteredSuits.length === 0 ? (
          <div className="py-16 px-6 bg-white border border-[#E2DFD7] rounded-lg text-center">
            <p className="font-editorial text-lg font-medium text-[#141619] mb-2">
              查無符合條件的機體檔案
            </p>
            <p className="text-sm text-[#575B62] mb-6">
              請嘗試調整紀元分類或清除關鍵字條件以瀏覽全部館藏機體。
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedEra('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              顯示全部機體
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredSuits.map((suit) => {
              const isInCompare = compareIds.includes(suit.id);
              const isZeon = suit.id === 'ms-06s';

              return (
                <article
                  key={suit.id}
                  className="bg-white border border-[#E2DFD7] hover:border-[#BEB8AA] rounded-lg overflow-hidden flex flex-col transition-colors"
                >
                  {/* 4:3 Image Frame */}
                  <button
                    type="button"
                    onClick={() => onSelectSuit(suit)}
                    className="block w-full aspect-[4/3] bg-[#EAE7DF] overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1D4ED8]"
                    aria-label={`檢視 ${suit.modelNumber} ${suit.nameZh} 詳細檔案`}
                  >
                    <ResilientImage
                      src={suit.image}
                      alt={`${suit.modelNumber} ${suit.nameZh}`}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                      fallbackTitle={suit.modelNumber}
                      fallbackSubtitle={suit.nameZh}
                    />
                  </button>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="text-xs text-[#575B62] flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                      <span
                        className={`font-tech font-medium ${
                          isZeon ? 'text-[#B91C1C]' : 'text-[#1D4ED8]'
                        }`}
                      >
                        {suit.modelNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-tech">{suit.timelineLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{suit.faction}</span>
                    </div>

                    <h3 className="font-editorial text-xl font-bold text-[#141619] mb-1">
                      {suit.nameZh}
                    </h3>
                    <p className="text-xs text-[#575B62] mb-3">{suit.nameEn}</p>

                    <p className="text-sm text-[#4B5058] leading-relaxed mb-5 line-clamp-2 flex-1">
                      {suit.summary}
                    </p>

                    {/* Key Tabular Metrics */}
                    <div className="grid grid-cols-3 gap-3 py-3 border-t border-b border-[#EFECE6] mb-5 text-xs">
                      <div>
                        <span className="block text-[#7A7E85] mb-0.5">全高</span>
                        <span className="font-tech font-medium text-[#141619] tabular-nums">
                          {suit.heightMeters.toFixed(1)} m
                        </span>
                      </div>
                      <div>
                        <span className="block text-[#7A7E85] mb-0.5">全備重量</span>
                        <span className="font-tech font-medium text-[#141619] tabular-nums">
                          {suit.weightTons.toFixed(1)} t
                        </span>
                      </div>
                      <div>
                        <span className="block text-[#7A7E85] mb-0.5">出力</span>
                        <span className="font-tech font-medium text-[#141619] tabular-nums">
                          {suit.reactorOutputKw.toLocaleString()} kW
                        </span>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectSuit(suit)}
                        className="flex-1 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#141619] hover:bg-[#2A2E35] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        檢視機體檔案
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleCompare(suit.id)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isInCompare
                            ? 'bg-[#EFF6FF] border-[#1D4ED8] text-[#1D4ED8]'
                            : 'bg-white border-[#D8D4CA] text-[#4B5058] hover:border-[#141619] hover:text-[#141619]'
                        }`}
                        aria-pressed={isInCompare}
                      >
                        {isInCompare ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>已選對比</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>加入對比</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
