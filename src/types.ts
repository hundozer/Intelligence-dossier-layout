export interface BuyerPriority {
  id: string;
  label: string;
  criterion: string;
  propertyValue: string;
  status: 'matched' | 'tradeoff' | 'mismatch';
  importance: 'critical' | 'high' | 'preferred';
  notes: string;
}

export interface BuyerProfile {
  id: string;
  name: string;
  tagline: string;
  budgetMax: number; // in Euros
  minBedrooms: number;
  maxDistanceToCoastKm: number;
  maxAirportDriveMin: number;
  purpose: 'remote_residence' | 'vacation_rental' | 'retirement';
  mustHaves: string[];
  niceToHaves: string[];
}

export interface PropertyData {
  id: string;
  reference: string;
  title: string;
  subtitle: string;
  town: string;
  region: string;
  country: string;
  coveName: string;
  price: number;
  currency: string;
  sizeSqm: number;
  plotSqm: number;
  pricePerSqm: number;
  benchmarkPricePerSqm: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  yearRenovated: number;
  distanceToSeaMeters: number;
  seaAccessType: string;
  airportCode: string;
  airportName: string;
  airportDriveMin: number;
  orientation: string;
  energyRating: string;
  coastalZoneClassification: string;
  images: {
    url: string;
    caption: string;
    tag: string;
  }[];
  description: string[];
  architecturalStyle: string;
  keyFeatures: string[];
  microclimate: {
    sunHoursPerYear: number;
    summerAverageTemp: string;
    windExposure: string;
    coastalShelterRating: string;
    humiditySummer: string;
  };
  marketContext: {
    pricePositionPercent: number; // e.g. -11% vs submarket average
    fiveYearAppreciation: string;
    medianDaysOnMarket: number;
    rentalYieldPotential: string;
    scarcityIndex: string;
  };
  legalAndZoning: {
    leyDeCostasStatus: string;
    coastalBufferZone: string;
    touristLicenseFeasibility: string;
    cadastralDiscrepancies: string;
  };
  agentInfo: {
    agencyName: string;
    advisorName: string;
    advisorRole: string;
    representationType: string;
    verifiedStatus: string;
    historicalNegotiationMargin: string;
    listingDurationDays: number;
    avatarUrl: string;
  };
}

export interface VerdictAnalysis {
  fitTier: 'Exceptional Strategic Fit' | 'Strong Match' | 'Selective Fit with Trade-offs' | 'Critical Misalignment';
  headline: string;
  narrative: string;
  confidenceScore: number;
  matchedCount: number;
  totalPriorities: number;
  priorities: BuyerPriority[];
  positiveSignals: string[];
  tradeoffs: string[];
  hardConstraintsSatisfied: boolean;
}
