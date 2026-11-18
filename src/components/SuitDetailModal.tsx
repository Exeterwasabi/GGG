import { useEffect } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { MobileSuit } from '../data/mobileSuits';
import { ResilientImage } from './ResilientImage';

interface SuitDetailModalProps {
  suit: MobileSuit | null;
  isInCompare: boolean;
  onClose: () => void;
  onToggleCompare: (suitId: string) => void;
}

export function SuitDetailModal({
  suit,
  isInCompare,
  onClose,
  onToggleCompare,
}: SuitDetailModalProps) {
  useEffect(() => {
    if (!suit) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [suit, onClose]);

  if (!suit) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141619]/65 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="suit-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F6F2] border border-[#D8D4CA] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#E2DFD7] px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-xs text-[#575B62] flex items-center gap-2 truncate">
            <span className="font-tech font-medium text-[#141619]">
              {suit.accessionNo}
            </span>
            <span aria-hidden="true">/</span>
            <span className="font-tech">{suit.modelNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{suit.timelineLabel}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="關閉檔案視窗"
            className="p-2 rounded-md text-[#4B5058] hover:text-[#141619] hover:bg-[#EAE7DF] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Exhibition Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <figure className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#EAE7DF] border border-[#DFDBD0] rounded-lg overflow-hidden">
                <ResilientImage
                  src={suit.image}
                  alt={`${suit.modelNumber} ${suit.nameZh}`}
                  className="w-full h-full object-cover"
                  fallbackTitle={suit.modelNumber}
                  fallbackSubtitle={suit.nameZh}
                />
              </div>
              <figcaption className="mt-2.5 text-xs font-editorial italic text-[#575B62]">
                {suit.caption}
              </figcaption>
            </figure>

            <div className="lg:col-span-6">
              <p className="text-xs text-[#1D4ED8] font-medium mb-1">
                {suit.faction}
              </p>
              <h2
                id="suit-modal-title"
                className="font-editorial text-2xl sm:text-3xl font-bold text-[#141619] mb-1"
              >
                {suit.nameZh}
              </h2>
              <p className="text-sm text-[#575B62] mb-4">{suit.nameEn}</p>

              <p className="text-sm text-[#34383E] leading-relaxed mb-6">
                {suit.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onToggleCompare(suit.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isInCompare
                      ? 'bg-[#EFF6FF] border-[#1D4ED8] text-[#1D4ED8]'
                      : 'bg-white border-[#D8D4CA] text-[#141619] hover:border-[#141619]'
                  }`}
                >
                  {isInCompare ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>已加入性能對比</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      <span>加入性能對比</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Museum Accession Definition List */}
          <div className="bg-white border border-[#E2DFD7] rounded-lg p-6">
            <h3 className="text-sm font-semibold text-[#141619] mb-4">
              技術規格紀錄 (Technical Specifications)
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">主要駕駛員</dt>
                <dd className="font-medium text-[#141619]">{suit.pilot}</dd>
              </div>
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">開發機構</dt>
                <dd className="font-medium text-[#141619]">{suit.manufacturer}</dd>
              </div>
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">裝甲材質</dt>
                <dd className="font-medium text-[#141619]">{suit.armorMaterial}</dd>
              </div>
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">頭頂高 / 全備重量</dt>
                <dd className="font-tech font-medium text-[#141619] tabular-nums">
                  {suit.heightMeters.toFixed(1)} m / {suit.weightTons.toFixed(1)} t
                </dd>
              </div>
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">動力爐出力</dt>
                <dd className="font-tech font-medium text-[#141619] tabular-nums">
                  {suit.reactorOutputKw.toLocaleString()} kW
                </dd>
              </div>
              <div className="pb-3 border-b border-[#EFECE6]">
                <dt className="text-xs text-[#7A7E85] mb-1">推進器總推力 / 感測半徑</dt>
                <dd className="font-tech font-medium text-[#141619] tabular-nums">
                  {suit.thrusterKg.toLocaleString()} kg /{' '}
                  {suit.sensorRadiusM.toLocaleString()} m
                </dd>
              </div>
            </dl>
          </div>

          {/* Engineering Notes & Armaments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-white border border-[#E2DFD7] rounded-lg p-6">
              <h3 className="text-sm font-semibold text-[#141619] mb-3">
                工程設計備註
              </h3>
              <p className="text-sm text-[#4B5058] leading-relaxed">
                {suit.engineeringNote}
              </p>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#E2DFD7] rounded-lg p-6">
              <h3 className="text-sm font-semibold text-[#141619] mb-3">
                標準配備武裝清單
              </h3>
              <ul className="divide-y divide-[#EFECE6]">
                {suit.armaments.map((item) => (
                  <li key={item.name} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-sm font-medium text-[#141619]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#575B62] mt-0.5">{item.spec}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
