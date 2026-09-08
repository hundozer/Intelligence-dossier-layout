import React, { useState } from 'react';
import { BuyerProfile } from '../types';
import { X, Sliders, Check, RotateCcw, Sparkles } from 'lucide-react';

interface TunePrioritiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: BuyerProfile;
  onSave: (updated: BuyerProfile) => void;
  propertyPrice: number;
}

export const TunePrioritiesModal: React.FC<TunePrioritiesModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSave,
  propertyPrice,
}) => {
  const [budgetMax, setBudgetMax] = useState(currentProfile.budgetMax);
  const [minBedrooms, setMinBedrooms] = useState(currentProfile.minBedrooms);
  const [maxDistanceToCoastKm, setMaxDistanceToCoastKm] = useState(currentProfile.maxDistanceToCoastKm);
  const [maxAirportDriveMin, setMaxAirportDriveMin] = useState(currentProfile.maxAirportDriveMin);
  const [purpose, setPurpose] = useState(currentProfile.purpose);

  if (!isOpen) return null;

  const handleApply = () => {
    onSave({
      ...currentProfile,
      budgetMax,
      minBedrooms,
      maxDistanceToCoastKm,
      maxAirportDriveMin,
      purpose,
    });
    onClose();
  };

  const handleResetToBaseline = () => {
    setBudgetMax(800000);
    setMinBedrooms(3);
    setMaxDistanceToCoastKm(1.0);
    setMaxAirportDriveMin(60);
    setPurpose('remote_residence');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FDFCFB] rounded-2xl max-w-xl w-full border border-[#E6E1D6] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E6E1D6] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D97706]">
              <Sliders className="w-3.5 h-3.5" />
              <span>Real-Time Intelligence Tuner</span>
            </div>
            <h3 className="font-editorial text-2xl text-[#10243E] mt-0.5 font-normal">
              Adjust Your Search Mandate
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E6E1D6]/60 text-[#526173] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sliders and Selectors */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* 1. Budget Max */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
                Maximum Acquisition Budget
              </label>
              <span className="font-semibold text-base text-[#10243E]">
                €{budgetMax.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={550000}
              max={1200000}
              step={25000}
              value={budgetMax}
              onChange={(e) => setBudgetMax(Number(e.target.value))}
              className="w-full accent-[#1A365D] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#526173] mt-1">
              <span>€550k (Below asking)</span>
              <span className={budgetMax >= propertyPrice ? 'text-emerald-700 font-medium' : 'text-rose-700 font-medium'}>
                {budgetMax >= propertyPrice 
                  ? `€${(budgetMax - propertyPrice).toLocaleString()} Headroom` 
                  : `€${(propertyPrice - budgetMax).toLocaleString()} Below Asking`}
              </span>
              <span>€1.2M (Generous)</span>
            </div>
          </div>

          {/* 2. Minimum Bedrooms */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
                Minimum Bedroom Baseline
              </label>
              <span className="font-semibold text-sm text-[#10243E]">
                {minBedrooms} {minBedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[2, 3, 4, 5].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setMinBedrooms(count)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    minBedrooms === count
                      ? 'bg-[#1A365D] text-white border-[#1A365D]'
                      : 'bg-white text-[#526173] border-[#E6E1D6] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {count}+ Beds
                </button>
              ))}
            </div>
          </div>

          {/* 3. Max Distance to Sea */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
                Maximum Distance to Shoreline
              </label>
              <span className="font-semibold text-sm text-[#10243E]">
                {maxDistanceToCoastKm * 1000} meters
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0.2, 0.45, 0.8, 1.5].map((km) => (
                <button
                  key={km}
                  type="button"
                  onClick={() => setMaxDistanceToCoastKm(km)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    maxDistanceToCoastKm === km
                      ? 'bg-[#1A365D] text-white border-[#1A365D]'
                      : 'bg-white text-[#526173] border-[#E6E1D6] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {km < 1 ? `${km * 1000}m` : `${km}km`}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Airport Drive Max */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1A365D]">
                Maximum Airport Commute
              </label>
              <span className="font-semibold text-sm text-[#10243E]">
                {maxAirportDriveMin} Minutes
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[30, 45, 60, 90].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setMaxAirportDriveMin(mins)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    maxAirportDriveMin === mins
                      ? 'bg-[#1A365D] text-white border-[#1A365D]'
                      : 'bg-white text-[#526173] border-[#E6E1D6] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          {/* 5. Inhabitance Purpose */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A365D] mb-2">
              Primary Habitational Focus
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'remote_residence', label: 'Remote Haven' },
                { id: 'vacation_rental', label: 'Summer & Yield' },
                { id: 'retirement', label: 'Retirement Solitude' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPurpose(item.id as BuyerProfile['purpose'])}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-center transition-all ${
                    purpose === item.id
                      ? 'bg-[#D97706] text-white border-[#D97706]'
                      : 'bg-white text-[#526173] border-[#E6E1D6] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#E6E1D6] bg-[#FAF8F5] flex items-center justify-between">
          <button
            type="button"
            onClick={handleResetToBaseline}
            className="flex items-center gap-1.5 text-xs text-[#526173] hover:text-[#10243E] font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Baseline</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#526173] hover:text-[#10243E]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="px-5 py-2 rounded-xl bg-[#1A365D] hover:bg-[#10243E] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Recalculate Dossier Fit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
