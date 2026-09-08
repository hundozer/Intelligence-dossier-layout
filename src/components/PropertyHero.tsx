import React, { useState } from 'react';
import { 
  Waves, 
  Plane, 
  Sun, 
  Maximize2, 
  ArrowUpRight, 
  MapPin, 
  Compass, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PropertyData, BuyerProfile } from '../types';

interface PropertyHeroProps {
  property: PropertyData;
  isQualified: boolean;
  activeProfile: BuyerProfile | null;
  onScrollToVerdict: () => void;
}

export const PropertyHero: React.FC<PropertyHeroProps> = ({
  property,
  isQualified,
  activeProfile,
  onScrollToVerdict,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const priceDeltaPercent = ((property.pricePerSqm - property.benchmarkPricePerSqm) / property.benchmarkPricePerSqm) * 100;

  return (
    <section className="relative pt-6 pb-12 border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle & Context Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
          <div className="flex items-center gap-2 text-[#526173]">
            <span className="inline-flex items-center gap-1 font-medium text-[#1A365D]">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
              {property.town}, {property.region}
            </span>
            <span>·</span>
            <span>{property.coveName}</span>
            <span>·</span>
            <span className="bg-[#E6E1D6]/60 px-2 py-0.5 rounded text-[11px] text-[#10243E]">
              {property.architecturalStyle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#526173]">Ref: {property.reference}</span>
            <span className="text-[#526173]">·</span>
            <span className="text-emerald-700 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Ley de Costas Cleared
            </span>
          </div>
        </div>

        {/* Major Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8">
          <div className="lg:col-span-8">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#10243E] tracking-tight leading-[1.05] font-normal">
              {property.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#526173] font-light max-w-3xl leading-relaxed">
              {property.subtitle}. Built {property.yearBuilt}, meticulously restored in {property.yearRenovated} with integrated local Begur stone and aerothermal efficiency.
            </p>
          </div>

          {/* Price and Instant Value Position */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-[#E6E1D6]">
            <div className="text-xs uppercase tracking-wider text-[#526173] font-medium">Asking Valuation</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-editorial text-4xl sm:text-5xl text-[#10243E] font-medium">
                {property.currency}{property.price.toLocaleString()}
              </span>
              <span className="text-xs sm:text-sm text-[#526173] font-normal">
                ({property.currency}{property.pricePerSqm.toLocaleString()}/m²)
              </span>
            </div>
            
            <div className="mt-1.5 flex items-center gap-2 text-xs">
              <span className="inline-flex items-center text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {Math.abs(Math.round(priceDeltaPercent))}% below Begur avg (€{property.benchmarkPricePerSqm}/m²)
              </span>
            </div>

            {/* Direct hook to personalized verdict */}
            <div className="mt-3">
              {isQualified ? (
                <button
                  onClick={onScrollToVerdict}
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#1A365D] hover:text-[#D97706] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Costaia Verdict: Evaluated for {activeProfile?.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              ) : (
                <button
                  onClick={onScrollToVerdict}
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#D97706] hover:text-[#1A365D] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Unqualified: Evaluate fit for your criteria →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Editorial Photo Gallery Grid */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[380px] sm:h-[460px] lg:h-[540px]">
            {/* Main Primary Image */}
            <div 
              className="md:col-span-8 relative h-full rounded-xl overflow-hidden cursor-pointer group bg-stone-100"
              onClick={() => setIsGalleryModalOpen(true)}
            >
              <img
                src={property.images[activeImageIndex].url}
                alt={property.images[activeImageIndex].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity" />
              
              {/* Badge & Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div className="max-w-xl">
                  <span className="text-[10px] tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded font-medium inline-block mb-1.5">
                    {property.images[activeImageIndex].tag}
                  </span>
                  <p className="text-xs sm:text-sm font-light text-white/95 line-clamp-1">
                    {property.images[activeImageIndex].caption}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{activeImageIndex + 1} / {property.images.length}</span>
                </div>
              </div>

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : property.images.length - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev < property.images.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Side Secondary Thumbnails */}
            <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-3 h-full">
              {property.images.slice(1, 3).map((img, idx) => (
                <div 
                  key={idx + 1}
                  onClick={() => setActiveImageIndex(idx + 1)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer group bg-stone-100 transition-all ${
                    activeImageIndex === idx + 1 ? 'ring-2 ring-[#1A365D]' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] tracking-wider uppercase font-medium bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                      {img.tag}
                    </span>
                    <p className="text-xs text-white/90 truncate mt-1">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Image Pill Strip for Mobile / Quick Select */}
          <div className="flex md:hidden items-center gap-2 mt-2 overflow-x-auto pb-1 scrollbar-none">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border ${
                  activeImageIndex === i ? 'border-[#1A365D] ring-1 ring-[#1A365D]' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Primary Coastal Intelligence Anchors (No card clutter; clean editorial horizontal ledger) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-5 border-y border-[#E6E1D6]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-[#526173]">
              <Waves className="w-3.5 h-3.5 text-[#1A365D]" />
              <span>Coastal Distance</span>
            </div>
            <div className="mt-1">
              <span className="text-xl sm:text-2xl font-semibold text-[#10243E]">
                {property.distanceToSeaMeters}m
              </span>
              <span className="text-xs text-[#526173] block mt-0.5">
                7-min shaded pine trail
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-[#526173]">
              <Plane className="w-3.5 h-3.5 text-[#1A365D]" />
              <span>Airport Gateway</span>
            </div>
            <div className="mt-1">
              <span className="text-xl sm:text-2xl font-semibold text-[#10243E]">
                {property.airportDriveMin} min
              </span>
              <span className="text-xs text-[#526173] block mt-0.5">
                {property.airportCode} ({property.airportName})
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-[#526173]">
              <Sun className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Solar Exposure</span>
            </div>
            <div className="mt-1">
              <span className="text-xl sm:text-2xl font-semibold text-[#10243E]">
                Southeast
              </span>
              <span className="text-xs text-[#526173] block mt-0.5">
                {property.microclimate.sunHoursPerYear} sun hrs/year
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-[#526173]">
              <Compass className="w-3.5 h-3.5 text-[#1A365D]" />
              <span>Living / Land Scale</span>
            </div>
            <div className="mt-1">
              <span className="text-xl sm:text-2xl font-semibold text-[#10243E]">
                {property.sizeSqm} m²
              </span>
              <span className="text-xs text-[#526173] block mt-0.5">
                3 Beds · 3 Baths · 780 m² Plot
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for High-Res Inspection */}
      {isGalleryModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setIsGalleryModalOpen(false)}
        >
          <div className="flex justify-between items-center text-white">
            <div className="font-editorial text-xl">{property.title} — Dossier Gallery</div>
            <button 
              onClick={() => setIsGalleryModalOpen(false)}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs"
            >
              Close (ESC)
            </button>
          </div>
          <div className="relative max-w-5xl mx-auto my-auto max-h-[75vh]" onClick={e => e.stopPropagation()}>
            <img 
              src={property.images[activeImageIndex].url} 
              alt={property.images[activeImageIndex].caption}
              className="max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/90 text-sm mt-3 font-light">
              {property.images[activeImageIndex].caption} ({property.images[activeImageIndex].tag})
            </p>
          </div>
          <div className="flex justify-center gap-2 pb-2">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeImageIndex === i ? 'bg-[#D97706] scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
