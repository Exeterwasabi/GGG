import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { MOBILE_SUITS, MobileSuit } from '../data/mobileSuits';
import { ResilientImage } from './ResilientImage';

interface ComparisonModalProps {
  isOpen: boolean;
  initialIds: string[];
  onClose: () => void;
}

export function ComparisonModal({
  isOpen,
  initialIds,
  onClose,
}: ComparisonModalProps) {
  const [leftId, setLeftId] = useState<string>(initialIds[0] ?? 'rx-78-2');
  const [rightId, setRightId] = useState<string>(initialIds[1] ?? 'ms-06s');

  useEffect(() => {
    if (initialIds[0]) setLeftId(initialIds[0]);
    if (initialIds[1]) {
      setRightId(initialIds[1]);
    } else if (initialIds[0]) {
      const fallback = MOBILE_SUITS.find((s) => s.id !== initialIds[0]);
      if (fallback) setRightId(fallback.id);
    }
  }, [initialIds]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const leftSuit: MobileSuit =
    MOBILE_SUITS.find((s) => s.id === leftId) ?? MOBILE_SUITS[0];
  const rightSuit: MobileSuit =
    MOBILE_SUITS.find((s) => s.id === rightId) ?? MOBILE_SUITS[1];

  const metrics = [
    {
      label: '反應爐出力 (kW)',
      leftVal: leftSuit.reactorOutputKw,
      rightVal: rightSuit.reactorOutputKw,
      unit: 'kW',
      format: (n: number) => n.toLocaleString(),
    },
    {
      label: '推進器總推力 (kg)',
      leftVal: leftSuit.thrusterKg,
      rightVal: rightSuit.thrusterKg,
      unit: 'kg',
      format: (n: number) => n.toLocaleString(),
    },
    {
      label: '感測器有效半徑 (m)',
      leftVal: leftSuit.sensorRadiusM,
      rightVal: rightSuit.sensorRadiusM,
      unit: 'm',
      format: (n: number) => n.toLocaleString(),
    },
    {
      label: '機體頭頂高 (m)',
      leftVal: leftSuit.heightMeters,
      rightVal: rightSuit.heightMeters,
      unit: 'm',
      format: (n: number) => n.toFixed(1),
    },
    {
      label: '全備作戰重量 (t)',
      leftVal: leftSuit.weightTons,
      rightVal: rightSuit.weightTons,
      unit: 't',
      format: (n: number) => n.toFixed(1),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141619]/65 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F6F2] border border-[#D8D4CA] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#E2DFD7] px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h2
              id="compare-modal-title"
              className="font-editorial text-lg font-bold text-[#141619]"
            >
              雙機體技術規格並列對比
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="關閉性能對比視窗"
            className="p-2 rounded-md text-[#4B5058] hover:text-[#141619] hover:bg-[#EAE7DF] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Selector & Preview Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { side: '機體 A', suit: leftSuit, setId: setLeftId, accent: '#1D4ED8' },
              { side: '機體 B', suit: rightSuit, setId: setRightId, accent: '#B91C1C' },
            ].map((slot) => (
              <div
                key={slot.side}
                className="bg-white border border-[#E2DFD7] rounded-lg p-5"
              >
                <label className="block text-xs text-[#575B62] mb-2">
                  選擇{slot.side}
                </label>
                <select
                  value={slot.suit.id}
                  onChange={(e) => slot.setId(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#F7F6F2] border border-[#D8D4CA] rounded-md text-[#141619] mb-4 cursor-pointer focus:outline-none focus:border-[#1D4ED8]"
                >
                  {MOBILE_SUITS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.modelNumber} · {item.nameZh} ({item.timelineLabel})
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-4">
                  <div className="w-28 aspect-[4/3] bg-[#EAE7DF] rounded overflow-hidden shrink-0">
                    <ResilientImage
                      src={slot.suit.image}
                      alt={slot.suit.nameZh}
                      className="w-full h-full object-cover"
                      fallbackTitle={slot.suit.modelNumber}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-tech text-xs font-medium mb-0.5"
                      style={{ color: slot.accent }}
                    >
                      {slot.suit.modelNumber} · {slot.suit.timelineLabel}
                    </p>
                    <p className="font-editorial text-lg font-bold text-[#141619] truncate">
                      {slot.suit.nameZh}
                    </p>
                    <p className="text-xs text-[#575B62] truncate">
                      駕駛員：{slot.suit.pilot}
                    </p>
                    <p className="text-xs text-[#575B62] truncate">
                      裝甲：{slot.suit.armorMaterial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quantitative Proportional Comparison */}
          <div className="bg-white border border-[#E2DFD7] rounded-lg p-6 space-y-5">
            <h3 className="text-sm font-semibold text-[#141619]">
              核心數值對照表
            </h3>

            {metrics.map((metric) => {
              const max = Math.max(metric.leftVal, metric.rightVal, 1);
              const leftPct = Math.round((metric.leftVal / max) * 100);
              const rightPct = Math.round((metric.rightVal / max) * 100);

              return (
                <div key={metric.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-tech font-medium text-[#1D4ED8] tabular-nums">
                      {metric.format(metric.leftVal)} {metric.unit}
                    </span>
                    <span className="text-[#4B5058] font-medium">
                      {metric.label}
                    </span>
                    <span className="font-tech font-medium text-[#B91C1C] tabular-nums">
                      {metric.format(metric.rightVal)} {metric.unit}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-2 bg-[#EFECE6] rounded-full overflow-hidden flex justify-end">
                      <div
                        className="h-full bg-[#1D4ED8] rounded-full transition-all duration-300"
                        style={{ width: `${leftPct}%` }}
                      />
                    </div>
                    <div className="h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#B91C1C] rounded-full transition-all duration-300"
                        style={{ width: `${rightPct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
