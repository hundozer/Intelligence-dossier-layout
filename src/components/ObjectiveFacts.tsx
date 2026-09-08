import React from 'react';
import { PropertyData } from '../types';
import { Check, Shield, Zap, Sparkles, Thermometer, TreePine, Droplets } from 'lucide-react';

interface ObjectiveFactsProps {
  property: PropertyData;
}

export const ObjectiveFacts: React.FC<ObjectiveFactsProps> = ({ property }) => {
  return (
    <section className="py-12 border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Editorial & Restrained */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E6E1D6]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#526173]">
              Section 02 / Objective Property Dossier
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#10243E] mt-1 font-normal">
              Verified Coastal Specifications
            </h2>
          </div>
          <div className="text-xs text-[#526173] mt-2 sm:mt-0 font-light">
            Independently audited cadastral & architectural metrics
          </div>
        </div>

        {/* Coherent Editorial Ledger Grid (No isolated cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Spatial & Structural Architecture (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
              Spatial Dimensions & Physical Footprint
            </h3>

            <dl className="divide-y divide-[#E6E1D6] text-sm">
              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Interior Enclosed Surface</dt>
                <dd className="font-medium text-[#10243E] text-right">{property.sizeSqm} m² usable</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Plot Land Registry Surface</dt>
                <dd className="font-medium text-[#10243E] text-right">{property.plotSqm} m² pine grove plot</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Bedrooms & Suites</dt>
                <dd className="font-medium text-[#10243E] text-right">
                  {property.bedrooms} double bedrooms (1 primary master suite)
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Bathrooms</dt>
                <dd className="font-medium text-[#10243E] text-right">{property.bathrooms} full bathrooms (2 en-suite)</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Construction & Renovation</dt>
                <dd className="font-medium text-[#10243E] text-right">
                  Built {property.yearBuilt} · Re-engineered {property.yearRenovated}
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Energy Certification</dt>
                <dd className="font-medium text-emerald-800 text-right flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  {property.energyRating}
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 2: Coastal Geography & Transit Logistics (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
              Maritime Geography & Access
            </h3>

            <dl className="divide-y divide-[#E6E1D6] text-sm">
              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Linear Distance to Water</dt>
                <dd className="font-medium text-[#10243E] text-right">{property.distanceToSeaMeters} meters</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Pedestrian Descent</dt>
                <dd className="font-medium text-[#10243E] text-right">7 min (Sa Riera pine footpath)</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Topographical Elevation</dt>
                <dd className="font-medium text-[#10243E] text-right">+42m above mean sea level</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Girona Airport (GRO)</dt>
                <dd className="font-medium text-[#10243E] text-right">48 min drive (54 km)</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Barcelona El Prat (BCN)</dt>
                <dd className="font-medium text-[#10243E] text-right">1h 28 min direct tollway</dd>
              </div>

              <div className="py-3 flex justify-between items-baseline">
                <dt className="text-[#526173]">Nearest Marina / Moorings</dt>
                <dd className="font-medium text-[#10243E] text-right">Aiguafreda (8 min drive)</dd>
              </div>
            </dl>
          </div>

          {/* Column 3: Structural Highlights & Infrastructure (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
              Essential Infrastructure
            </h3>

            <ul className="space-y-3 text-xs text-[#10243E]">
              {property.keyFeatures.slice(0, 5).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D97706] mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-3 bg-[#E6E1D6]/30 rounded-lg text-xs space-y-1.5 border border-[#E6E1D6]/60">
              <div className="font-medium text-[#10243E] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#1A365D]" />
                <span>Legal Classification</span>
              </div>
              <p className="text-[#526173] leading-relaxed">
                Consolidated urban plot. Full compliance with the Spanish Ley de Costas servitude zones with independent title clearance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
