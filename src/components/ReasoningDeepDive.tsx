import React from 'react';
import { PropertyData, BuyerProfile, VerdictAnalysis } from '../types';
import { 
  ShieldCheck, 
  Check, 
  AlertTriangle, 
  TrendingUp, 
  Compass, 
  HelpCircle,
  Footprints,
  Wind,
  Wifi,
  Users
} from 'lucide-react';

interface ReasoningDeepDiveProps {
  property: PropertyData;
  profile: BuyerProfile | null;
  analysis: VerdictAnalysis;
  isQualified: boolean;
  onOpenTuner: () => void;
}

export const ReasoningDeepDive: React.FC<ReasoningDeepDiveProps> = ({
  property,
  profile,
  analysis,
  isQualified,
  onOpenTuner,
}) => {
  return (
    <section id="reasoning-deep-dive" className="py-12 sm:py-16 border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E6E1D6]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#526173]">
              Section 04 / The Decisional Logic
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#10243E] mt-1 font-normal">
              Why Costaia Reached This Verdict
            </h2>
          </div>
          <div className="text-xs text-[#526173] mt-2 sm:mt-0 font-light">
            Deconstructing objective property signals against buyer mandates
          </div>
        </div>

        {/* 4-Pillar Structural Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 1: Hard Constraints & Non-Negotiables */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E6E1D6]">
              <ShieldCheck className="w-4 h-4 text-[#1A365D]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10243E]">
                1. Structural & Hard Constraints
              </h3>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              Non-negotiable parameters that dictate fundamental acquisition feasibility.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-white border border-[#E6E1D6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#10243E]">Financial Threshold</span>
                  <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {profile ? (property.price <= profile.budgetMax ? 'Within Budget' : 'Exceeds Budget') : 'Baseline Verified'}
                  </span>
                </div>
                <p className="text-xs text-[#526173] leading-relaxed">
                  Priced at €{property.price.toLocaleString()}. At €{property.pricePerSqm}/m², this provides exceptional structural capital safety compared to the Begur average of €{property.benchmarkPricePerSqm}/m².
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E6E1D6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#10243E]">Title & Coastal Law Tenure</span>
                  <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    100% Freehold Cleared
                  </span>
                </div>
                <p className="text-xs text-[#526173] leading-relaxed">
                  Full compliance with Ley de Costas. Situated outside the 100-meter maritime protection zone with verified cadastral boundaries and zero public easement restrictions.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Lifestyle & Functional Alignment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E6E1D6]">
              <Wifi className="w-4 h-4 text-[#1A365D]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10243E]">
                2. Lifestyle & Operational Workflow
              </h3>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              How the residence supports daily Mediterranean inhabitancy and professional obligations.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-white border border-[#E6E1D6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#10243E]">High-Throughput Connectivity</span>
                  <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    600 Mbps Active Fiber
                  </span>
                </div>
                <p className="text-xs text-[#526173] leading-relaxed">
                  Direct underground optical fiber connection. Dedicated ground-floor studio space allows frictionless remote video conferences with international teams.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E6E1D6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#10243E]">Year-Round Thermal Comfort</span>
                  <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Aerothermal Underfloor
                  </span>
                </div>
                <p className="text-xs text-[#526173] leading-relaxed">
                  Unlike conventional summer cottages that lack insulation, the 2022 overhaul introduced high-efficiency aerothermal heating, ensuring comfortable winter coastal residency.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Positive Market Signals & Hidden Value */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E6E1D6]">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-900">
                3. Positive Signals & Value Windfalls
              </h3>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              Distinguishing catalysts that substantiate long-term appreciation and desirability.
            </p>

            <div className="space-y-2.5">
              {analysis.positiveSignals.map((signal, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-emerald-900/5 border border-emerald-900/15 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#10243E] leading-relaxed">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 4: Objective Trade-offs & Nuances */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#E6E1D6]">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
                4. Realistic Coastal Trade-offs & Friction
              </h3>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              Unvarnished compromises that conventional estate agents routinely obscure.
            </p>

            <div className="space-y-2.5">
              {analysis.tradeoffs.map((tradeoff, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#D97706]/5 border border-[#D97706]/20 flex items-start gap-2.5">
                  <span className="text-[#D97706] font-bold text-xs mt-0.5">△</span>
                  <span className="text-xs text-[#10243E] leading-relaxed">{tradeoff}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Narrative Synthesis Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#FAF8F5] border border-[#E6E1D6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
              Costaia Advisory Perspective
            </div>
            <p className="text-sm text-[#10243E] font-medium">
              "A buyer seeking flat manicured turf or elevator strolls to the beach will find the topography challenging. However, for a discerning purchaser prioritizing privacy, authentic pine atmosphere, and rock-solid legal purity, Villa Sa Riera is an exceptional acquisition."
            </p>
          </div>

          <button
            onClick={onOpenTuner}
            className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-[#10243E] text-[#FDFCFB] text-xs font-medium hover:bg-[#1A365D] transition-colors"
          >
            Adjust Criteria Weights
          </button>
        </div>

      </div>
    </section>
  );
};
