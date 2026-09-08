import React from 'react';
import { X, Sparkles, Layers, ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface DesignDirectorOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignDirectorOverlay: React.FC<DesignDirectorOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#FDFCFB] h-full shadow-2xl border-l border-[#E6E1D6] flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#E6E1D6] flex items-center justify-between bg-[#10243E] text-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D97706]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Director Dossier Specification</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal mt-1 text-[#FDFCFB]">
              Costaia Redesign Architecture
            </h2>
            <p className="text-xs text-[#E6E1D6]/80 mt-1">
              UX Paradigm Shift: From "Listing with Cards" to "Personalized Intelligence Dossier"
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 text-xs sm:text-sm text-[#10243E] leading-relaxed">
          
          {/* 1. The Core UX Problem & Transformation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#D97706]" />
              <span>1. Dismantling the Fragmented Card Antipattern</span>
            </h3>
            <p className="text-[#526173]">
              Conventional real estate portals and previous Costaia iterations treated personalized buyer fit as an isolated, afterthought widget (<em className="italic">"How this fits your search" card</em>) inserted awkwardly at the bottom or an intrusive questionnaire card at the top.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D6] space-y-2 text-xs">
              <div className="font-medium text-[#10243E]">The New Governing Product Equation:</div>
              <div className="font-mono text-[11px] text-[#1A365D] bg-white p-2 rounded border border-[#E6E1D6]">
                Property Facts + Costaia Regional Intelligence + Buyer Mandate = Decisive Action
              </div>
              <p className="text-[#526173] text-[11px]">
                Instead of 15 competing rounded cards, the entire page functions as one cohesive editorial dossier. Information is grouped by cognitive sequence rather than arbitrary UI boxes.
              </p>
            </div>
          </div>

          {/* 2. The 6-Stage Information Hierarchy */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#D97706]" />
              <span>2. The 6-Stage Information Architecture</span>
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">01</span>
                <div>
                  <strong className="text-[#10243E] block">THE PROPERTY (Emotional & Visual Anchor)</strong>
                  <span className="text-[#526173]">Large imagery, architectural identity, €/m² positioning, immediate coastal distances.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">02</span>
                <div>
                  <strong className="text-[#10243E] block">THE FACTS (Objective Specifications Bar)</strong>
                  <span className="text-[#526173]">Pure typographic ledger. Usable sqm, plot topography, Ley de Costas clearance, airport drives.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">03</span>
                <div>
                  <strong className="text-[#10243E] block">THE COSTAIA VERDICT (The Core Product Breakthrough)</strong>
                  <span className="text-[#526173]">Synthesized editorial evaluation. Side-by-side comparative ledger contrasting buyer mandates with property reality.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">04</span>
                <div>
                  <strong className="text-[#10243E] block">WHY (The Decisional Logic & Trade-off Ledger)</strong>
                  <span className="text-[#526173]">Hard constraints, operational lifestyle alignment, positive catalysts, and unvarnished coastal trade-offs.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">05</span>
                <div>
                  <strong className="text-[#10243E] block">ENVIRONMENTAL & MARKET INTELLIGENCE</strong>
                  <span className="text-[#526173]">Begur microclimate, Tramuntana wind buffering, historical 5-year appreciation, and maritime zoning.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E6E1D6] flex items-baseline gap-3">
                <span className="font-mono text-[#D97706] font-bold">06</span>
                <div>
                  <strong className="text-[#10243E] block">THE DECISION & CONVERSION (Emotional Sea Horizon)</strong>
                  <span className="text-[#526173]">Exclusive agency intelligence, negotiation margin metrics, and high-impact full-sea-background conversion.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Handling the Unqualified vs Qualified Transition */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>3. Unqualified State: Invitation, Not Interrogation</span>
            </h3>
            <p className="text-[#526173]">
              When Costaia does not yet know the buyer's search mandate, the page does not feel broken or incomplete. Instead, an editorial invitation appears:
              <br />
              <em className="text-[#10243E] font-medium">"Make this property personal. A coastal home's true viability cannot be judged in isolation..."</em>
              <br />
              Buyers can activate pre-modeled coastal profiles with one click (e.g. Remote Executive Haven vs Family High-Yield Sanctuary) or tune bespoke parameters in seconds.
            </p>
          </div>

          {/* 4. Brand Design Tokens */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
              4. Typography & Color Palette Fidelity
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                <div className="font-editorial text-lg text-[#10243E]">Instrument Serif</div>
                <div className="text-[11px] text-[#526173] mt-1">Editorial headlines, major prices, decisive verdicts</div>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                <div className="font-sans font-semibold text-base text-[#10243E]">Plus Jakarta Sans</div>
                <div className="text-[11px] text-[#526173] mt-1">UI, tabular data, metadata, parameters</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A365D] text-white text-[11px]">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Navy #1A365D</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D97706] text-white text-[11px]">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Amber #D97706</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#10243E] text-white text-[11px]">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Ink #10243E</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E6E1D6] text-[#10243E] text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#10243E]"></span>
                <span>Sand #E6E1D6</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white text-[#10243E] border border-[#E6E1D6] text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#FDFCFB] border"></span>
                <span>Off-White #FDFCFB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E6E1D6] bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1A365D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#10243E] transition-colors"
          >
            Return to Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
