/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mockProperty, defaultBuyerProfiles, calculateVerdict } from './data/mockProperty';
import { BuyerProfile } from './types';
import { Navigation } from './components/Navigation';
import { PropertyHero } from './components/PropertyHero';
import { ObjectiveFacts } from './components/ObjectiveFacts';
import { CostaiaVerdict } from './components/CostaiaVerdict';
import { ReasoningDeepDive } from './components/ReasoningDeepDive';
import { LocationMarketIntelligence } from './components/LocationMarketIntelligence';
import { AgencyDecision } from './components/AgencyDecision';
import { TunePrioritiesModal } from './components/TunePrioritiesModal';
import { DesignDirectorOverlay } from './components/DesignDirectorOverlay';
import { Sparkles, ArrowUp, Compass, Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [property] = useState(mockProperty);
  const [profiles, setProfiles] = useState<BuyerProfile[]>(defaultBuyerProfiles);
  const [activeProfile, setActiveProfile] = useState<BuyerProfile>(defaultBuyerProfiles[0]);
  const [isQualified, setIsQualified] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isTunerOpen, setIsTunerOpen] = useState<boolean>(false);
  const [isDirectorNotesOpen, setIsDirectorNotesOpen] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  // Dynamically calculate the analytical verdict
  const verdictAnalysis = calculateVerdict(property, activeProfile);

  const handleScrollToVerdict = () => {
    const el = document.getElementById('costaia-verdict-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToReasoning = () => {
    const el = document.getElementById('reasoning-deep-dive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDecision = () => {
    const el = document.getElementById('agency-decision-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQualifyNow = (customProfile?: Partial<BuyerProfile>) => {
    if (customProfile) {
      const updated: BuyerProfile = {
        ...activeProfile,
        ...customProfile,
        id: 'custom-' + Date.now(),
      };
      setActiveProfile(updated);
    }
    setIsQualified(true);
    // Smooth scroll down to verdict to show transformation
    setTimeout(() => {
      handleScrollToVerdict();
    }, 100);
  };

  const handleSaveCustomProfile = (updated: BuyerProfile) => {
    setActiveProfile(updated);
    // If not in profiles list, append or replace
    setProfiles(prev => {
      const idx = prev.findIndex(p => p.id === updated.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = updated;
        return next;
      }
      return [...prev, updated];
    });
    setIsQualified(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#10243E] font-sans antialiased selection:bg-[#E6E1D6]">
      {/* Primary Global Navigation & Prototype Controller */}
      <Navigation
        activeProfile={activeProfile}
        isQualified={isQualified}
        onToggleQualified={setIsQualified}
        onSelectProfile={(p) => {
          setActiveProfile(p);
          setIsQualified(true);
        }}
        profiles={profiles}
        onOpenTuner={() => setIsTunerOpen(true)}
        onOpenDirectorNotes={() => setIsDirectorNotesOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        saved={saved}
        onToggleSave={() => setSaved(!saved)}
      />

      {/* Main Dossier Viewport Container (Handles Desktop vs Interactive Mobile Frame) */}
      <div className={viewMode === 'mobile' ? 'py-8 px-4 bg-[#10243E]/10 flex justify-center' : ''}>
        <div 
          className={
            viewMode === 'mobile'
              ? 'w-full max-w-[420px] bg-[#FDFCFB] rounded-[44px] shadow-2xl border-[10px] border-[#10243E] overflow-hidden relative'
              : 'w-full'
          }
        >
          {/* Mobile Status Bar Simulation when in Mobile View Mode */}
          {viewMode === 'mobile' && (
            <div className="bg-[#10243E] text-white px-6 py-2 flex items-center justify-between text-[11px] font-medium tracking-tight">
              <span>9:41</span>
              <div className="w-20 h-4 bg-black rounded-full mx-auto" />
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {/* Dossier Content Stack */}
          <main>
            {/* 1. THE PROPERTY (Editorial Gallery & Identity) */}
            <PropertyHero
              property={property}
              isQualified={isQualified}
              activeProfile={activeProfile}
              onScrollToVerdict={handleScrollToVerdict}
            />

            {/* 2. THE FACTS (Objective Specification Matrix) */}
            <ObjectiveFacts property={property} />

            {/* 3. THE COSTAIA VERDICT (Editorial Property Fit) */}
            <CostaiaVerdict
              property={property}
              profile={activeProfile}
              analysis={verdictAnalysis}
              isQualified={isQualified}
              onQualifyNow={handleQualifyNow}
              onOpenTuner={() => setIsTunerOpen(true)}
              onScrollToReasoning={handleScrollToReasoning}
            />

            {/* 4. WHY (Analytical Reasoning & Trade-off Ledger) */}
            <ReasoningDeepDive
              property={property}
              profile={activeProfile}
              analysis={verdictAnalysis}
              isQualified={isQualified}
              onOpenTuner={() => setIsTunerOpen(true)}
            />

            {/* 5. ENVIRONMENTAL & MARKET INTELLIGENCE */}
            <LocationMarketIntelligence property={property} />

            {/* 6. THE DECISION & ADVISORY CONVERSION */}
            <AgencyDecision
              property={property}
              isQualified={isQualified}
              profile={activeProfile}
            />
          </main>

          {/* Mobile Floating Sticky Verdict Bar */}
          <div className="md:hidden sticky bottom-0 z-30 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#E6E1D6] p-3 px-4 flex items-center justify-between gap-3 shadow-lg">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#526173]">
                {isQualified ? 'Costaia Verdict' : 'Personalize Fit'}
              </div>
              <div className="text-xs font-semibold text-[#10243E] truncate max-w-[170px]">
                {isQualified ? verdictAnalysis.fitTier : 'Evaluate for Your Needs'}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleScrollToVerdict}
                className="px-3 py-2 rounded-lg bg-[#1A365D] text-white text-xs font-medium"
              >
                View Verdict
              </button>
              <button
                onClick={handleScrollToDecision}
                className="px-3 py-2 rounded-lg bg-[#D97706] text-white text-xs font-medium"
              >
                Inquire
              </button>
            </div>
          </div>

          {/* Editorial Footer */}
          <footer className="py-12 bg-[#10243E] text-[#FDFCFB] border-t border-[#526173]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="font-editorial text-2xl tracking-tight block">COSTAIA</span>
                  <span className="text-xs text-[#E6E1D6]/70 mt-1 block">
                    Independent Coastal Property Intelligence · Begur · Costa Brava · Mediterranean
                  </span>
                </div>

                <div className="flex items-center gap-6 text-xs text-[#E6E1D6]/70">
                  <button 
                    onClick={() => setIsDirectorNotesOpen(true)} 
                    className="hover:text-white transition-colors flex items-center gap-1 text-[#D97706]"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Design Director Notes</span>
                  </button>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors flex items-center gap-1">
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>Back to Top</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#526173]/30 flex flex-col sm:flex-row justify-between text-[11px] text-[#526173] gap-2">
                <span>© 2026 Costaia Technologies S.L. All verified registry data protected.</span>
                <span>Dossier Reference: COSTAIA-CB-88204 · Updated September 2026</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Interactive Criteria Tuner Modal */}
      <TunePrioritiesModal
        isOpen={isTunerOpen}
        onClose={() => setIsTunerOpen(false)}
        currentProfile={activeProfile}
        onSave={handleSaveCustomProfile}
        propertyPrice={property.price}
      />

      {/* Design Director Architectural Walkthrough Drawer */}
      <DesignDirectorOverlay
        isOpen={isDirectorNotesOpen}
        onClose={() => setIsDirectorNotesOpen(false)}
      />
    </div>
  );
}
