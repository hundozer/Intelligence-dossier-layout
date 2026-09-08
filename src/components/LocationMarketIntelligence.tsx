import React from 'react';
import { PropertyData } from '../types';
import { 
  Sun, 
  Wind, 
  Waves, 
  Anchor, 
  TrendingUp, 
  Scale, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface LocationMarketIntelligenceProps {
  property: PropertyData;
}

export const LocationMarketIntelligence: React.FC<LocationMarketIntelligenceProps> = ({ property }) => {
  return (
    <section className="py-12 sm:py-16 border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E6E1D6]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#526173]">
              Section 05 / Environmental & Market Intelligence
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#10243E] mt-1 font-normal">
              Microclimate, Marine & Market Dynamics
            </h2>
          </div>
          <div className="text-xs text-[#526173] mt-2 sm:mt-0 font-light">
            Contextual data synthesized from regional marine & property registries
          </div>
        </div>

        {/* Narrative Property Architecture Description */}
        <div className="mb-12 max-w-4xl">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] mb-3">
            Architectural Narrative & Site Setting
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-[#526173] font-light leading-relaxed">
            {property.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Structured Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Coastal Microclimate & Exposure (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-2 border-b border-[#E6E1D6] flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10243E] flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#D97706]" />
                <span>Coastal Microclimate & Wind Exposure</span>
              </h3>
              <span className="text-xs text-[#526173]">Begur Massif Sub-basin</span>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              Costa Brava coastal properties face severe winter wind exposure unless topographically sheltered. Villa Sa Riera benefits from direct geological shielding by the Begur granite bluff.
            </p>

            <dl className="divide-y divide-[#E6E1D6] text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173] flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#D97706]" />
                  Annual Sunlight Volume
                </dt>
                <dd className="font-semibold text-[#10243E]">{property.microclimate.sunHoursPerYear} hours / year</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173] flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[#1A365D]" />
                  Tramuntana Wind Buffer
                </dt>
                <dd className="font-medium text-emerald-800 text-right">{property.microclimate.coastalShelterRating}</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173] flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-[#1A365D]" />
                  Average Summer Maritime Temp
                </dt>
                <dd className="font-semibold text-[#10243E]">{property.microclimate.summerAverageTemp}</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">Marine Humidity Dissipation</dt>
                <dd className="font-medium text-[#10243E] text-right">{property.microclimate.humiditySummer}</dd>
              </div>
            </dl>

            {/* Maritime Path & Cove Access */}
            <div className="pt-4 border-t border-[#E6E1D6] space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1A365D] flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#1A365D]" />
                <span>Maritime Access & Cove Dynamics</span>
              </div>
              <p className="text-xs text-[#526173] leading-relaxed">
                Sa Riera cove is the largest sandy beach in Begur municipality, bordered by traditional fishermen’s stone houses and protected cliffs. Direct access to the historic <strong className="font-medium text-[#10243E]">Camí de Ronda</strong> coastal footpath allows scenic hikes to Playa de Pals (north) and Aiguafreda (south) without vehicular interference.
              </p>
            </div>
          </div>

          {/* Right: Market Intelligence & Legal Standing (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-2 border-b border-[#E6E1D6] flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10243E] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>Begur Micro-Market Valuation</span>
              </h3>
              <span className="text-xs text-emerald-700 font-medium">Appreciating Sector</span>
            </div>

            <p className="text-xs text-[#526173] leading-relaxed">
              Begur coastal land faces absolute structural scarcity due to strict municipal moratoriums preventing new hillside subdivisions.
            </p>

            <dl className="divide-y divide-[#E6E1D6] text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">Begur Benchmark Price/m²</dt>
                <dd className="font-medium text-[#10243E]">€{property.benchmarkPricePerSqm}/m²</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">Villa Sa Riera Price/m²</dt>
                <dd className="font-semibold text-emerald-800">
                  €{property.pricePerSqm}/m² ({property.marketContext.pricePositionPercent}% delta)
                </dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">5-Year Capital Appreciation</dt>
                <dd className="font-semibold text-[#10243E]">{property.marketContext.fiveYearAppreciation}</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">Submarket Liquidity / DOM</dt>
                <dd className="font-medium text-[#10243E]">{property.marketContext.medianDaysOnMarket} days median</dd>
              </div>

              <div className="py-2.5 flex justify-between items-center">
                <dt className="text-[#526173]">Tourist License Feasibility</dt>
                <dd className="font-medium text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  HUTG Eligible
                </dd>
              </div>
            </dl>

            {/* Legal & Regulatory Title Confirmation */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D6] space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#10243E] flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#1A365D]" />
                <span>Spanish Coastal Law Compliance (Ley de Costas)</span>
              </div>
              <p className="text-xs text-[#526173] leading-relaxed">
                {property.legalAndZoning.leyDeCostasStatus}. Physical perimeter verified with zero discrepancies against the Spanish Dirección General del Catastro.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
