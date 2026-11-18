/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ComparisonModal } from './components/ComparisonModal';
import { DeploymentSection } from './components/DeploymentSection';
import { EngineeringSection } from './components/EngineeringSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MobileSuitCatalog } from './components/MobileSuitCatalog';
import { SuitDetailModal } from './components/SuitDetailModal';
import { TimelineSection } from './components/TimelineSection';
import { MOBILE_SUITS, MobileSuit } from './data/mobileSuits';

export default function App() {
  const [selectedSuit, setSelectedSuit] = useState<MobileSuit | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>(['rx-78-2', 'ms-06s']);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleToggleCompare = (suitId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(suitId)) {
        return prev.filter((id) => id !== suitId);
      }
      if (prev.length >= 2) {
        return [prev[1], suitId];
      }
      return [...prev, suitId];
    });
  };

  const handleSelectHeroSuit = () => {
    const rx78 = MOBILE_SUITS.find((s) => s.id === 'rx-78-2') ?? MOBILE_SUITS[0];
    setSelectedSuit(rx78);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#141619]">
      <Header
        compareCount={compareIds.length}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      <main className="flex-1">
        <HeroSection onSelectHeroSuit={handleSelectHeroSuit} />
        <MobileSuitCatalog
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
          onSelectSuit={setSelectedSuit}
        />
        <TimelineSection onSelectSuit={setSelectedSuit} />
        <EngineeringSection />
        <DeploymentSection />
      </main>

      <Footer />

      <SuitDetailModal
        suit={selectedSuit}
        isInCompare={selectedSuit ? compareIds.includes(selectedSuit.id) : false}
        onClose={() => setSelectedSuit(null)}
        onToggleCompare={handleToggleCompare}
      />

      <ComparisonModal
        isOpen={isCompareOpen}
        initialIds={compareIds}
        onClose={() => setIsCompareOpen(false)}
      />
    </div>
  );
}
