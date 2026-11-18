import { useState } from 'react';
import { ENGINEERING_PILLARS } from '../data/mobileSuits';

export function EngineeringSection() {
  const [selectedId, setSelectedId] = useState<string>(ENGINEERING_PILLARS[0].id);

  const activePillar =
    ENGINEERING_PILLARS.find((item) => item.id === selectedId) ??
    ENGINEERING_PILLARS[0];

  return (
    <section id="engineering" className="border-b border-[#E2DFD7] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs text-[#575B62] tracking-wide mb-2">
              03. 技術理論專論 · Mechanical Engineering
            </p>
            <h2
              className="font-editorial font-bold text-[#141619] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              機動戰士動力與裝甲工程解析
            </h2>
          </div>

          <p className="text-sm text-[#4B5058] max-w-md leading-relaxed">
            解析支撐 18 公尺級人型機動兵器運作的物理假設、冶金技術與人機神經感應架構。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Technical Index */}
          <div
            role="tablist"
            aria-label="工程技術主題"
            className="lg:col-span-4 space-y-2.5"
          >
            {ENGINEERING_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(pillar.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#1D4ED8] text-[#141619]'
                      : 'bg-transparent border-[#E2DFD7] text-[#4B5058] hover:bg-white/60 hover:text-[#141619]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-tech text-[#1D4ED8]">
                      {pillar.index}
                    </span>
                    <span className="font-tech text-[#7A7E85]">
                      {pillar.eraOrigin}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#141619]">
                    {pillar.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Detail Monograph Panel */}
          <div className="lg:col-span-8 bg-white border border-[#E2DFD7] rounded-lg p-6 sm:p-10">
            <div className="text-xs font-tech text-[#575B62] mb-2">
              {activePillar.index} · {activePillar.eraOrigin}
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141619] mb-4">
              {activePillar.title}
            </h3>

            <p className="text-base font-medium text-[#141619] leading-relaxed mb-5">
              {activePillar.summary}
            </p>

            <p className="text-sm sm:text-[15px] text-[#4B5058] leading-[1.85] max-w-[68ch] mb-8">
              {activePillar.mechanism}
            </p>

            <div className="pt-6 border-t border-[#EFECE6]">
              <h4 className="text-xs font-semibold text-[#575B62] mb-4">
                關鍵技術參數摘要
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePillar.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 bg-[#F7F6F2] border border-[#E2DFD7] rounded-md"
                  >
                    <dt className="text-xs text-[#575B62] mb-1">{spec.label}</dt>
                    <dd className="text-sm font-medium text-[#141619]">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
