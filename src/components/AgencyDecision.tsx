import React, { useState } from 'react';
import { PropertyData, BuyerProfile } from '../types';
import { 
  FileText, 
  Calendar, 
  Send, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Lock 
} from 'lucide-react';

interface AgencyDecisionProps {
  property: PropertyData;
  isQualified: boolean;
  profile: BuyerProfile | null;
}

export const AgencyDecision: React.FC<AgencyDecisionProps> = ({
  property,
  isQualified,
  profile,
}) => {
  const [enquiryName, setEnquiryName] = useState(profile ? profile.name : '');
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState<'viewing' | 'dossier' | 'advisory'>('dossier');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="agency-decision-section" className="relative">
      {/* 1. Transparent Agency & Brokerage Intelligence */}
      <div className="py-12 border-b border-[#E6E1D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E6E1D6]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#526173]">
                Section 06 / Agency & Transaction Intelligence
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#10243E] mt-1 font-normal">
                Representation & Negotiation Advisory
              </h2>
            </div>
            <div className="text-xs text-[#526173] mt-2 sm:mt-0 font-light">
              Costaia independently verifies mandate exclusivity and agency track record
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Agent Profile */}
            <div className="md:col-span-5 flex items-start gap-4">
              <img
                src={property.agentInfo.avatarUrl}
                alt={property.agentInfo.advisorName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#E6E1D6] shadow-xs"
              />
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {property.agentInfo.verifiedStatus}
                </div>
                <h4 className="text-base font-semibold text-[#10243E]">
                  {property.agentInfo.advisorName}
                </h4>
                <div className="text-xs text-[#526173]">
                  {property.agentInfo.advisorRole} · {property.agentInfo.agencyName}
                </div>
                <div className="text-xs text-[#526173] pt-1">
                  Mandate: <strong className="font-medium text-[#10243E]">{property.agentInfo.representationType}</strong>
                </div>
              </div>
            </div>

            {/* Negotiation Advisory Metrics */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-[#E6E1D6]">
              <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                <div className="text-[11px] uppercase tracking-wider text-[#526173]">Market Exposure</div>
                <div className="text-lg font-semibold text-[#10243E] mt-1">
                  {property.agentInfo.listingDurationDays} Days
                </div>
                <div className="text-[11px] text-[#526173]">Active on market</div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                <div className="text-[11px] uppercase tracking-wider text-[#526173]">Historical Margin</div>
                <div className="text-lg font-semibold text-[#10243E] mt-1">
                  {property.agentInfo.historicalNegotiationMargin}
                </div>
                <div className="text-[11px] text-[#526173]">Begur closed sales</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                <div className="text-[11px] uppercase tracking-wider text-[#526173]">Costaia Advocate</div>
                <div className="text-lg font-semibold text-[#1A365D] mt-1">
                  Available
                </div>
                <div className="text-[11px] text-[#526173]">Buyer representation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Emotional Full-Sea-Background High-Converting Conversion Section */}
      <div className="relative text-white py-20 sm:py-28 overflow-hidden">
        {/* Full-bleed high-resolution deep sea image backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
            alt="Mediterranean Coastal Horizon"
            className="w-full h-full object-cover object-center"
          />
          {/* Rich coastal navy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10243E]/95 via-[#1A365D]/85 to-[#10243E]/90 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Emotional & Decisional Call */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D97706] bg-black/30 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Decisional Step</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] font-normal text-[#FDFCFB]">
                Understand this coastline before you make an offer.
              </h2>

              <p className="text-base sm:text-lg text-[#E6E1D6] font-light leading-relaxed max-w-xl">
                Costaia provides independent, buyer-side intelligence dossiers for discerning coastal acquisitions across the Mediterranean. Access title cadastre, acoustic surveys, and microclimate wind records.
              </p>

              {/* What is included in the complete dossier */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-3">
                  Included in the Complete Costaia Begur Dossier:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Ley de Costas Servitude Map & Survey</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>HUTG Tourist Rental Yield Projections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Solar Angles & Tramuntana Exposure Study</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>3 Closest Comparable Sales in Sa Riera</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct High-Fidelity Conversion Dossier Action Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFCFB] text-[#10243E] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-editorial text-2xl font-normal text-[#10243E]">
                      Dossier Dispatched
                    </h3>
                    <p className="text-xs text-[#526173] leading-relaxed max-w-sm mx-auto">
                      The full 18-page Costaia Intelligence Report for Villa Sa Riera has been transmitted to your inbox. A Costaia coastal advisor will follow up confidentially.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-[#1A365D] underline font-medium"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] block">
                        Confidential Buyer Action
                      </span>
                      <h3 className="font-editorial text-2xl text-[#10243E] font-normal mt-0.5">
                        Request Complete Dossier
                      </h3>
                      <p className="text-xs text-[#526173] mt-1 font-light">
                        Direct delivery of unredacted title facts, architectural floor plans & negotiation margin analysis.
                      </p>
                    </div>

                    {/* Action Selector */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setEnquiryType('dossier')}
                        className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          enquiryType === 'dossier'
                            ? 'bg-[#1A365D] text-white border-[#1A365D]'
                            : 'bg-[#F5F2EB] text-[#526173] border-[#E6E1D6] hover:bg-[#E6E1D6]/60'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>Dossier PDF</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setEnquiryType('viewing')}
                        className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          enquiryType === 'viewing'
                            ? 'bg-[#1A365D] text-white border-[#1A365D]'
                            : 'bg-[#F5F2EB] text-[#526173] border-[#E6E1D6] hover:bg-[#E6E1D6]/60'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>Book Viewing</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setEnquiryType('advisory')}
                        className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          enquiryType === 'advisory'
                            ? 'bg-[#1A365D] text-white border-[#1A365D]'
                            : 'bg-[#F5F2EB] text-[#526173] border-[#E6E1D6] hover:bg-[#E6E1D6]/60'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span>Advisory Call</span>
                      </button>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-xs font-medium text-[#526173] mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={enquiryName}
                          onChange={(e) => setEnquiryName(e.target.value)}
                          placeholder="e.g. Marcus Vance"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#E6E1D6] bg-white text-[#10243E] focus:outline-none focus:ring-1 focus:ring-[#1A365D]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#526173] mb-1">
                          Confidential Email
                        </label>
                        <input
                          type="email"
                          required
                          value={enquiryEmail}
                          onChange={(e) => setEnquiryEmail(e.target.value)}
                          placeholder="e.g. m.vance@architects.co.uk"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#E6E1D6] bg-white text-[#10243E] focus:outline-none focus:ring-1 focus:ring-[#1A365D]"
                        />
                      </div>

                      {isQualified && profile && (
                        <div className="p-2.5 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-[11px] text-[#526173] flex items-center justify-between">
                          <span>Search Mandate attached:</span>
                          <span className="font-medium text-[#1A365D]">
                            Max €{profile.budgetMax.toLocaleString()} · {profile.minBedrooms}+ Beds
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {enquiryType === 'dossier' && 'Transmit 18-Page Intelligence Dossier'}
                        {enquiryType === 'viewing' && 'Request Private On-Site Walkthrough'}
                        {enquiryType === 'advisory' && 'Schedule Confidential Acquisition Briefing'}
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-[#526173] pt-1">
                      <Lock className="w-3 h-3 text-[#526173]" />
                      <span>Strict European GDPR discretion. No unsolicited sales calls.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
