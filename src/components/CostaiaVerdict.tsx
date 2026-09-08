import React, { useState } from 'react';
import { 
  PropertyData, 
  BuyerProfile, 
  VerdictAnalysis 
} from '../types';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  SlidersHorizontal, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  HelpCircle,
  Clock,
  Euro,
  Waves,
  Plane,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CostaiaVerdictProps {
  property: PropertyData;
  profile: BuyerProfile | null;
  analysis: VerdictAnalysis;
  isQualified: boolean;
  onQualifyNow: (customProfile?: Partial<BuyerProfile>) => void;
  onOpenTuner: () => void;
  onScrollToReasoning: () => void;
}

export const CostaiaVerdict: React.FC<CostaiaVerdictProps> = ({
  property,
  profile,
  analysis,
  isQualified,
  onQualifyNow,
  onOpenTuner,
  onScrollToReasoning,
}) => {
  // Quick qualification mini-form state for unqualified users
  const [quickBudget, setQuickBudget] = useState<number>(800000);
  const [quickPurpose, setQuickPurpose] = useState<BuyerProfile['purpose']>('remote_residence');
  const [quickBeds, setQuickBeds] = useState<number>(3);
  const [quickDistance, setQuickDistance] = useState<number>(1.0);
  const [showFullSignals, setShowFullSignals] = useState(true);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQualifyNow({
      name: 'Independent Investor / Buyer',
      tagline: 'Custom Search Criteria',
      budgetMax: quickBudget,
      purpose: quickPurpose,
      minBedrooms: quickBeds,
      maxDistanceToCoastKm: quickDistance,
      maxAirportDriveMin: 60,
    });
  };

  // Helper styling for verdict tier
  const getBadgeStyle = (tier: VerdictAnalysis['fitTier']) => {
    switch (tier) {
      case 'Exceptional Strategic Fit':
        return 'bg-emerald-900/10 text-emerald-900 border-emerald-900/20';
      case 'Strong Match':
        return 'bg-[#1A365D]/10 text-[#1A365D] border-[#1A365D]/20';
      case 'Selective Fit with Trade-offs':
        return 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20';
      default:
        return 'bg-rose-900/10 text-rose-900 border-rose-900/20';
    }
  };

  const getStatusIcon = (status: 'matched' | 'tradeoff' | 'mismatch') => {
    switch (status) {
      case 'matched':
        return <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />;
      case 'tradeoff':
        return <AlertCircle className="w-4 h-4 text-[#D97706] flex-shrink-0" />;
      case 'mismatch':
        return <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />;
    }
  };

  const getStatusLabel = (status: 'matched' | 'tradeoff' | 'mismatch') => {
    switch (status) {
      case 'matched':
        return <span className="text-emerald-800 font-medium text-xs">Aligned</span>;
      case 'tradeoff':
        return <span className="text-[#D97706] font-medium text-xs">Trade-off</span>;
      case 'mismatch':
        return <span className="text-rose-700 font-medium text-xs">Divergence</span>;
    }
  };

  return (
    <section id="costaia-verdict-section" className="py-12 sm:py-16 bg-[#FDFCFB] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            STATE 1: UNQUALIFIED STATE (Elegant Editorial Invitation)
           ========================================================= */}
        {!isQualified && (
          <div className="relative rounded-2xl border border-[#E6E1D6] bg-gradient-to-b from-[#FDFCFB] to-[#F5F2EB] p-8 sm:p-12 overflow-hidden shadow-xs">
            {/* Subtle background compass watermark */}
            <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-5 pointer-events-none">
              <Compass className="w-96 h-96 text-[#1A365D]" />
            </div>

            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D97706]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Property Intelligence</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-[#10243E] mt-2 font-normal leading-tight">
                Make this property personal.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#526173] font-light leading-relaxed">
                A coastal home’s true viability cannot be judged in isolation. Its value depends entirely on how you intend to inhabit it—your tolerance for seasonal crowds, your commute requirements, your budget headroom, and your coastal walk threshold.
              </p>

              <div className="mt-6 pt-6 border-t border-[#E6E1D6]">
                <p className="text-sm font-medium text-[#10243E] mb-3">
                  Select your primary intention to activate the Costaia Verdict for Villa Sa Riera:
                </p>

                {/* Quick 1-click persona activation buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => onQualifyNow({
                      name: 'Remote Executive Profile',
                      tagline: 'Year-Round Coastal Living & Dedicated Studio',
                      budgetMax: 800000,
                      minBedrooms: 3,
                      maxDistanceToCoastKm: 1.0,
                      maxAirportDriveMin: 60,
                      purpose: 'remote_residence'
                    })}
                    className="p-4 text-left rounded-xl border border-[#E6E1D6] bg-white hover:border-[#1A365D] hover:shadow-xs transition-all group cursor-pointer"
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#1A365D] block mb-1">
                      Option A
                    </span>
                    <span className="text-sm font-medium text-[#10243E] block group-hover:text-[#1A365D]">
                      Year-Round Remote Haven
                    </span>
                    <span className="text-xs text-[#526173] block mt-1 font-light">
                      Budget €800k · 3+ Beds · Fiber · &lt;1km to water
                    </span>
                  </button>

                  <button
                    onClick={() => onQualifyNow({
                      name: 'Family Sanctuary Profile',
                      tagline: 'Multi-Generation Summer Retreat & High Rental Yield',
                      budgetMax: 680000,
                      minBedrooms: 4,
                      maxDistanceToCoastKm: 0.3,
                      maxAirportDriveMin: 45,
                      purpose: 'vacation_rental'
                    })}
                    className="p-4 text-left rounded-xl border border-[#E6E1D6] bg-white hover:border-[#D97706] hover:shadow-xs transition-all group cursor-pointer"
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D97706] block mb-1">
                      Option B
                    </span>
                    <span className="text-sm font-medium text-[#10243E] block group-hover:text-[#D97706]">
                      Strict Budget & Yield Focus
                    </span>
                    <span className="text-xs text-[#526173] block mt-1 font-light">
                      Budget €680k · 4 Beds · Direct flat walk to sand
                    </span>
                  </button>

                  <button
                    onClick={onOpenTuner}
                    className="p-4 text-left rounded-xl border border-dashed border-[#526173]/50 bg-white/60 hover:bg-white hover:border-[#10243E] transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#526173] block mb-1">
                        Custom
                      </span>
                      <span className="text-sm font-medium text-[#10243E] block">
                        Define Exact Search Mandate
                      </span>
                      <span className="text-xs text-[#526173] block mt-1 font-light">
                        Tune budget ceiling, bedrooms & transit criteria
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#1A365D] mt-3 inline-flex items-center gap-1">
                      Configure parameters <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            STATE 2: QUALIFIED STATE (The Editorial Property Verdict)
           ========================================================= */}
        {isQualified && profile && (
          <div className="relative">
            {/* Section Eyebrow & Buyer Linkage */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E6E1D6]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#526173]">
                  Section 03 / The Costaia Verdict
                </span>
                <span className="text-[#526173]">·</span>
                <span className="text-xs font-medium text-[#1A365D]">
                  Custom Evaluated for {profile.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenTuner}
                  className="inline-flex items-center gap-1.5 text-xs text-[#526173] hover:text-[#10243E] bg-[#E6E1D6]/40 hover:bg-[#E6E1D6]/80 px-2.5 py-1 rounded-md transition-colors"
                >
                  <SlidersHorizontal className="w-3 h-3 text-[#D97706]" />
                  <span>Adjust Search Mandate</span>
                </button>
              </div>
            </div>

            {/* Verdict Editorial Master Container */}
            <div className="rounded-2xl border border-[#E6E1D6] bg-white overflow-hidden shadow-xs">
              {/* Verdict Header Bar */}
              <div className="p-6 sm:p-10 border-b border-[#E6E1D6] bg-gradient-to-r from-[#FDFCFB] to-[#FAF8F5]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Verdict Classification & Editorial Synthesis */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${getBadgeStyle(analysis.fitTier)}`}>
                        {analysis.fitTier}
                      </span>
                      <span className="text-xs text-[#526173]">
                        {analysis.matchedCount} of {analysis.totalPriorities} Core Parameters Satisfied
                      </span>
                    </div>

                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#10243E] font-normal leading-tight">
                      {analysis.headline}
                    </h3>

                    <p className="text-base sm:text-lg text-[#526173] font-light leading-relaxed max-w-2xl">
                      {analysis.narrative}
                    </p>
                  </div>

                  {/* Right: Confidence Metric & Decisional Clarity */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between lg:items-end lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E6E1D6] gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#526173] font-medium">
                        Suitability Confidence
                      </div>
                      <div className="flex items-baseline lg:justify-end gap-1.5 mt-1">
                        <span className="font-editorial text-4xl sm:text-5xl text-[#10243E] font-medium">
                          {analysis.confidenceScore}
                        </span>
                        <span className="text-lg text-[#526173] font-light">/100</span>
                      </div>
                      <div className="text-xs text-[#526173] mt-0.5">
                        High algorithmic & local market certainty
                      </div>
                    </div>

                    <button
                      onClick={onScrollToReasoning}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A365D] hover:text-[#D97706] transition-colors mt-2"
                    >
                      <span>Explore Trade-off Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Horizontal Signal Alignment System: Priority vs Property Reality */}
              <div className="p-6 sm:p-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
                    Comparative Parameter Alignment
                  </h4>
                  <span className="text-xs text-[#526173] hidden sm:inline">
                    Direct contrast between buyer search mandate and verified title facts
                  </span>
                </div>

                {/* The Alignment Ledger */}
                <div className="divide-y divide-[#E6E1D6] border-t border-[#E6E1D6]">
                  {analysis.priorities.map((item) => (
                    <div 
                      key={item.id}
                      className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center text-sm hover:bg-[#FDFCFB] transition-colors px-2 rounded-md"
                    >
                      {/* Priority Name & Importance */}
                      <div className="md:col-span-3 flex items-center gap-2.5">
                        {getStatusIcon(item.status)}
                        <div>
                          <div className="font-medium text-[#10243E]">{item.label}</div>
                          <div className="text-[11px] text-[#526173] uppercase tracking-wider">
                            {item.importance} priority
                          </div>
                        </div>
                      </div>

                      {/* Buyer Search Mandate */}
                      <div className="md:col-span-3">
                        <div className="text-xs text-[#526173] md:hidden">Your Mandate:</div>
                        <div className="font-medium text-[#526173]">{item.criterion}</div>
                      </div>

                      {/* Property Fact */}
                      <div className="md:col-span-3">
                        <div className="text-xs text-[#526173] md:hidden">Property Reality:</div>
                        <div className="font-semibold text-[#10243E]">{item.propertyValue}</div>
                      </div>

                      {/* Status & Costaia Insight */}
                      <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3">
                        <div className="text-xs text-[#526173] text-right hidden sm:block">
                          {item.notes}
                        </div>
                        <div className="flex-shrink-0">
                          {getStatusLabel(item.status)}
                        </div>
                      </div>

                      {/* Mobile note */}
                      <div className="md:hidden text-xs text-[#526173] bg-[#E6E1D6]/20 p-2 rounded">
                        {item.notes}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-Ledger Summary Note */}
                <div className="mt-6 pt-4 border-t border-[#E6E1D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#526173]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <span>
                      Financial & legal criteria independently verified against current Begur title registry.
                    </span>
                  </div>

                  <button
                    onClick={() => setShowFullSignals(!showFullSignals)}
                    className="text-[#1A365D] hover:text-[#D97706] font-medium flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>{showFullSignals ? 'Collapse Details' : 'Expand Positive Windfalls & Nuances'}</span>
                    {showFullSignals ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Expandable Signals & Friction Preview */}
                {showFullSignals && (
                  <div className="mt-6 pt-6 border-t border-[#E6E1D6] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 rounded-xl">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Key Advantages for Your Search</span>
                      </div>
                      <ul className="space-y-2 text-xs text-[#10243E]">
                        {analysis.positiveSignals.slice(0, 2).map((sig, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-700 font-bold">•</span>
                            <span className="leading-relaxed">{sig}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Primary Coastal Nuances</span>
                      </div>
                      <ul className="space-y-2 text-xs text-[#10243E]">
                        {analysis.tradeoffs.slice(0, 2).map((trade, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D97706] font-bold">•</span>
                            <span className="leading-relaxed">{trade}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
