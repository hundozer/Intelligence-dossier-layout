import React from 'react';
import { 
  Compass, 
  Smartphone, 
  Monitor, 
  UserCheck, 
  UserPlus, 
  SlidersHorizontal, 
  FileText, 
  Bookmark, 
  Share2,
  Sparkles
} from 'lucide-react';
import { BuyerProfile } from '../types';

interface NavigationProps {
  activeProfile: BuyerProfile | null;
  isQualified: boolean;
  onToggleQualified: (qualified: boolean) => void;
  onSelectProfile: (profile: BuyerProfile) => void;
  profiles: BuyerProfile[];
  onOpenTuner: () => void;
  onOpenDirectorNotes: () => void;
  viewMode: 'desktop' | 'mobile';
  onToggleViewMode: (mode: 'desktop' | 'mobile') => void;
  saved: boolean;
  onToggleSave: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeProfile,
  isQualified,
  onToggleQualified,
  onSelectProfile,
  profiles,
  onOpenTuner,
  onOpenDirectorNotes,
  viewMode,
  onToggleViewMode,
  saved,
  onToggleSave,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E6E1D6]">
      {/* Top Utility & Prototype Controller Bar */}
      <div className="bg-[#10243E] text-[#FDFCFB] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium tracking-wide text-[#E6E1D6]">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              COSTAIA PROTOTYPE SYSTEM
            </span>
            <span className="text-[#526173]">|</span>
            <span className="text-[#E6E1D6]/80 hidden sm:inline">
              Redesigned Property Dossier & Personalized Verdict
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Qualified vs Unqualified Switch */}
            <div className="flex items-center bg-[#1A365D] rounded-full p-0.5 border border-[#526173]/40">
              <button
                id="toggle-qualified-btn"
                onClick={() => onToggleQualified(true)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isQualified 
                    ? 'bg-[#FDFCFB] text-[#10243E] shadow-sm' 
                    : 'text-[#E6E1D6] hover:text-white'
                }`}
              >
                <UserCheck className="w-3 h-3" />
                <span>Qualified</span>
              </button>
              <button
                id="toggle-unqualified-btn"
                onClick={() => onToggleQualified(false)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  !isQualified 
                    ? 'bg-[#FDFCFB] text-[#10243E] shadow-sm' 
                    : 'text-[#E6E1D6] hover:text-white'
                }`}
              >
                <UserPlus className="w-3 h-3" />
                <span>Unqualified</span>
              </button>
            </div>

            {/* Profile Picker when qualified */}
            {isQualified && (
              <div className="hidden md:flex items-center gap-1 text-xs">
                <span className="text-[#526173]">Persona:</span>
                {profiles.map(p => (
                  <button
                    key={p.id}
                    onClick={() => onSelectProfile(p)}
                    className={`px-2 py-0.5 rounded text-xs transition-colors ${
                      activeProfile?.id === p.id 
                        ? 'bg-[#D97706] text-white font-medium' 
                        : 'text-[#E6E1D6]/80 hover:bg-[#1A365D]'
                    }`}
                  >
                    {p.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            )}

            {/* Custom Criteria Tuner */}
            {isQualified && (
              <button
                onClick={onOpenTuner}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1A365D] hover:bg-[#1A365D]/80 text-[#E6E1D6] text-xs transition-colors"
                title="Adjust buyer criteria in real time"
              >
                <SlidersHorizontal className="w-3 h-3 text-[#D97706]" />
                <span className="hidden sm:inline">Tune Criteria</span>
              </button>
            )}

            {/* Device Frame Switcher */}
            <div className="flex items-center bg-[#1A365D] rounded-lg p-0.5 border border-[#526173]/40">
              <button
                onClick={() => onToggleViewMode('desktop')}
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'desktop' 
                    ? 'bg-[#FDFCFB] text-[#10243E]' 
                    : 'text-[#E6E1D6] hover:text-white'
                }`}
                title="Desktop Dossier Layout"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onToggleViewMode('mobile')}
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'mobile' 
                    ? 'bg-[#FDFCFB] text-[#10243E]' 
                    : 'text-[#E6E1D6] hover:text-white'
                }`}
                title="Mobile Phone Simulation"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Design Director Notes Trigger */}
            <button
              onClick={onOpenDirectorNotes}
              className="flex items-center gap-1 px-2 py-1 rounded bg-[#D97706]/20 text-[#D97706] hover:bg-[#D97706]/30 font-medium transition-colors border border-[#D97706]/30"
              title="View Design Director rationale and architecture breakdown"
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden lg:inline">Design Rationale</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#10243E] font-medium leading-none">
              COSTAIA
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#526173] mt-0.5">
              Coastal Property Intelligence
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-[#526173] pl-6 border-l border-[#E6E1D6]">
            <span>Spain</span>
            <span>/</span>
            <span>Costa Brava</span>
            <span>/</span>
            <span>Begur</span>
            <span>/</span>
            <span className="text-[#10243E] font-medium">Sa Riera Cove Dossier #CB-88204</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-[#526173] bg-[#E6E1D6]/40 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Verified Coastal Intelligence Active</span>
          </div>

          <button
            onClick={onToggleSave}
            className={`p-2 sm:px-3.5 sm:py-2 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 ${
              saved
                ? 'bg-[#1A365D] text-white border-[#1A365D]'
                : 'border-[#E6E1D6] text-[#10243E] hover:bg-[#E6E1D6]/40'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-white' : ''}`} />
            <span className="hidden sm:inline">{saved ? 'Saved in Portfolio' : 'Save Property'}</span>
          </button>

          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Costaia Property Dossier', url: window.location.href }).catch(() => {});
              }
            }}
            className="p-2 sm:px-3.5 sm:py-2 rounded-full text-xs font-medium border border-[#E6E1D6] text-[#10243E] hover:bg-[#E6E1D6]/40 transition-colors flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5 text-[#526173]" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </header>
  );
};
