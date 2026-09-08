import { PropertyData, BuyerProfile, VerdictAnalysis, BuyerPriority } from '../types';

export const mockProperty: PropertyData = {
  id: 'cst-88204-begur',
  reference: 'COSTAIA-CB-88204',
  title: 'Villa Sa Riera Cove',
  subtitle: 'Sheltered pine cliffside residence with panoramic maritime exposure',
  town: 'Begur',
  region: 'Costa Brava, Catalonia',
  country: 'Spain',
  coveName: 'Cala Sa Riera',
  price: 740000,
  currency: '€',
  sizeSqm: 190,
  plotSqm: 780,
  pricePerSqm: 3895,
  benchmarkPricePerSqm: 4350,
  bedrooms: 3,
  bathrooms: 3,
  yearBuilt: 1994,
  yearRenovated: 2022,
  distanceToSeaMeters: 450,
  seaAccessType: '7-min pine footpath to protected sandy cove',
  airportCode: 'GRO',
  airportName: 'Girona–Costa Brava',
  airportDriveMin: 48,
  orientation: 'Southeast (Optimum Mediterranean morning & midday light)',
  energyRating: 'B (High thermal efficiency via aerothermal retrofit)',
  coastalZoneClassification: 'Zona Urbana Costera Residencial (Consolidated)',
  images: [
    {
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      caption: 'Main cantilevered living salon opening toward the Sa Riera marine cove',
      tag: 'Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      caption: 'Southeast limestone terrace and sea-facing saltwater plunge pool',
      tag: 'Exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Renovated minimalist kitchen with honed Mares stone surfaces',
      tag: 'Interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Direct coastline view toward Cala Sa Riera cove and surrounding pine bluffs',
      tag: 'Coastal Setting'
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      caption: 'Primary suite overlooking maritime pine canopy with private morning terrace',
      tag: 'Bedroom'
    }
  ],
  description: [
    'Perched within the protected pine canopy above Cala Sa Riera, this three-bedroom residence represents a rare intersection of topographical privacy and direct pedestrian access to one of the Costa Brava’s most coveted coves.',
    'Undergoing a sympathetic architectural restoration in 2022, the residence integrates local Begur schist stone, radiant underfloor heating powered by aerothermal energy, and expansive floor-to-ceiling maritime glazing that captures shifting Mediterranean light from sunrise through afternoon warmth.',
    'Unlike modern developer villas that dominate bare hillside cuts, Villa Sa Riera is embedded naturally within its mature 780 m² pine grove, creating an organic acoustic and wind buffer against the northern Tramuntana while retaining unobstructed southeast maritime horizons.'
  ],
  architecturalStyle: 'Contemporary Mediterranean Organic',
  keyFeatures: [
    'South-East Coastal Aspect',
    'Heated Saltwater Plunge Pool',
    'High-Speed Symmetrical Fiber (600 Mbps)',
    'Aerothermal Heat Pump & Climate Control',
    'Dedicated Architectural Studio / Home Office',
    'Gated Private Driveway with Dual EV Charging',
    'Full Ley de Costas Certificate of Non-Affectation'
  ],
  microclimate: {
    sunHoursPerYear: 2840,
    summerAverageTemp: '27.4°C',
    windExposure: 'Sheltered from Tramuntana by the Begur massif ridge',
    coastalShelterRating: 'High (Natural natural granite headland deflection)',
    humiditySummer: '62% (Moderate marine breeze dispersion)'
  },
  marketContext: {
    pricePositionPercent: -10.5,
    fiveYearAppreciation: '+21.4% in Begur coastal micro-sector',
    medianDaysOnMarket: 84,
    rentalYieldPotential: '5.2% gross prime summer season (HUTG registration feasible)',
    scarcityIndex: 'Very High (Strict Begur moratorium on new coastal ridge construction)'
  },
  legalAndZoning: {
    leyDeCostasStatus: '100% Compliant — Located outside the 100m maritime servitude line',
    coastalBufferZone: 'Zone 2 (Low environmental constraint, fully consolidated urban plot)',
    touristLicenseFeasibility: 'Feasible (Eligible for municipal HUTG tourist license application)',
    cadastralDiscrepancies: 'Zero — Physical boundaries verify within 0.4% of land registry registry'
  },
  agentInfo: {
    agencyName: 'Maresme & Costa Brava Advisory Group',
    advisorName: 'Elena Martorell',
    advisorRole: 'Head of Prime Coastal Acquisitions',
    representationType: 'Sole Agency Exclusive Mandate',
    verifiedStatus: 'Costaia Verified Brokerage Partner',
    historicalNegotiationMargin: '3.2% - 5.5% on Begur transactions',
    listingDurationDays: 42,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  }
};

export const defaultBuyerProfiles: BuyerProfile[] = [
  {
    id: 'buyer-vance',
    name: 'Marcus & Hélène Vance',
    tagline: 'London / Remote Architecture Director & Writer',
    budgetMax: 800000,
    minBedrooms: 3,
    maxDistanceToCoastKm: 1.0,
    maxAirportDriveMin: 60,
    purpose: 'remote_residence',
    mustHaves: ['Walking distance to sea (<1km)', 'Dedicated office/studio with fiber', 'Natural privacy / low noise'],
    niceToHaves: ['South/Southeast light orientation', 'Renovated condition', 'Sea view']
  },
  {
    id: 'buyer-lindqvist',
    name: 'Sofia & Henrik Lindqvist',
    tagline: 'Stockholm / Family Summer Sanctuary & High Yield',
    budgetMax: 680000,
    minBedrooms: 4,
    maxDistanceToCoastKm: 0.3,
    maxAirportDriveMin: 45,
    purpose: 'vacation_rental',
    mustHaves: ['Flat walk with young children', '4+ bedrooms for guest capacity', 'Under €680,000 hard ceiling'],
    niceToHaves: ['High tourist rental demand', 'Turnkey finish']
  }
];

export function calculateVerdict(property: PropertyData, profile: BuyerProfile): VerdictAnalysis {
  const isBudgetMatched = property.price <= profile.budgetMax;
  const isBedsMatched = property.bedrooms >= profile.minBedrooms;
  const propertyDistanceKm = property.distanceToSeaMeters / 1000;
  const isDistanceMatched = propertyDistanceKm <= profile.maxDistanceToCoastKm;
  const isAirportMatched = property.airportDriveMin <= profile.maxAirportDriveMin;

  const priorities: BuyerPriority[] = [
    {
      id: 'p-budget',
      label: 'Acquisition Budget',
      criterion: `Up to €${profile.budgetMax.toLocaleString()}`,
      propertyValue: `€${property.price.toLocaleString()} (€${property.pricePerSqm}/m²)`,
      status: isBudgetMatched ? 'matched' : 'mismatch',
      importance: 'critical',
      notes: isBudgetMatched
        ? `€${(profile.budgetMax - property.price).toLocaleString()} buffer remains below your ceiling.`
        : `Exceeds specified budget ceiling by €${(property.price - profile.budgetMax).toLocaleString()}.`
    },
    {
      id: 'p-beds',
      label: 'Bedrooms & Space',
      criterion: `${profile.minBedrooms}+ bedrooms required`,
      propertyValue: `${property.bedrooms} bedrooms (${property.sizeSqm} m²)`,
      status: isBedsMatched ? 'matched' : 'tradeoff',
      importance: 'critical',
      notes: isBedsMatched
        ? `Configured with 3 double bedrooms plus a distinct ground studio.`
        : `Deficit of ${profile.minBedrooms - property.bedrooms} bedrooms against target.`
    },
    {
      id: 'p-coastal',
      label: 'Coastal Proximity',
      criterion: `Within ${profile.maxDistanceToCoastKm * 1000}m to shoreline`,
      propertyValue: `${property.distanceToSeaMeters}m (7-min path)`,
      status: isDistanceMatched ? 'matched' : 'tradeoff',
      importance: 'high',
      notes: isDistanceMatched
        ? `Direct pine trail to Cala Sa Riera without crossing main vehicular arteries.`
        : `Distance is ${property.distanceToSeaMeters}m; exceeds strict target by ${Math.round(property.distanceToSeaMeters - profile.maxDistanceToCoastKm * 1000)}m.`
    },
    {
      id: 'p-transit',
      label: 'Airport Accessibility',
      criterion: `Under ${profile.maxAirportDriveMin} min drive`,
      propertyValue: `${property.airportDriveMin} min (${property.airportCode})`,
      status: isAirportMatched ? 'matched' : 'tradeoff',
      importance: 'preferred',
      notes: isAirportMatched
        ? `48 min scenic highway connection to Girona-Costa Brava (GRO).`
        : `Girona is 48 min, marginally exceeding your 45-min target by 3 minutes.`
    }
  ];

  const matchedCount = priorities.filter(p => p.status === 'matched').length;
  const totalPriorities = priorities.length;

  let fitTier: VerdictAnalysis['fitTier'] = 'Strong Match';
  let headline = '';
  let narrative = '';
  let confidenceScore = 92;

  if (matchedCount === 4) {
    fitTier = 'Exceptional Strategic Fit';
    headline = 'Rare alignment with your lifestyle and geographic criteria';
    narrative = `This €${property.price.toLocaleString()} Begur residence satisfies your acquisition budget with a comfortable buffer, satisfies your ${profile.minBedrooms}-bedroom baseline, and offers pedestrian access to Cala Sa Riera cove while staying well within your airport travel limit.`;
    confidenceScore = 96;
  } else if (matchedCount === 3 && isBudgetMatched) {
    fitTier = 'Strong Match';
    headline = 'Cohesive match with manageable spatial or transit nuances';
    narrative = `Villa Sa Riera sits within your €${profile.budgetMax.toLocaleString()} ceiling and provides direct pine footpath access to the shoreline. The primary compromise is airport drive time or exact bedroom count, both mitigated by local amenities.`;
    confidenceScore = 88;
  } else if (!isBudgetMatched) {
    fitTier = 'Selective Fit with Trade-offs';
    headline = 'Compelling coastal architecture with primary financial friction';
    narrative = `While the property provides exceptional microclimate and cove proximity, the asking price of €${property.price.toLocaleString()} exceeds your ceiling by €${(property.price - profile.budgetMax).toLocaleString()}. Consider if negotiation margin (typically 3-5% locally) bridges the gap.`;
    confidenceScore = 74;
  } else {
    fitTier = 'Critical Misalignment';
    headline = 'Multiple core parameters diverge from your search mandate';
    narrative = `The property falls short across multiple non-negotiable criteria including space requirements and access geography. Costaia recommends cataloging this only for comparative market benchmarking.`;
    confidenceScore = 58;
  }

  const positiveSignals = [
    `Priced at €${property.pricePerSqm}/m² — approximately 10.5% below the Begur coastal average (€${property.benchmarkPricePerSqm}/m²).`,
    `Protected orientation: The Begur granite massif blocks prevailing north Tramuntana winds, preserving outdoor terrace use year-round.`,
    `Fully documented Ley de Costas compliance with zero maritime servitude encumbrances.`,
    `Symmetrical 600 Mbps fiber line active on site, supporting high-throughput remote executive workflows.`
  ];

  const tradeoffs = [
    `The 450m pine trail down to Cala Sa Riera involves an elevation change of ~42m (steep stepped ascent on the return walk).`,
    `July and August bring dense visitor traffic to Sa Riera cove parking below, though the elevated property perimeter remains private.`,
    `Plot geometry includes stepped stone terracing rather than a single flat lawn, requiring light maintenance of natural dry-stone walls.`
  ];

  return {
    fitTier,
    headline,
    narrative,
    confidenceScore,
    matchedCount,
    totalPriorities,
    priorities,
    positiveSignals,
    tradeoffs,
    hardConstraintsSatisfied: isBudgetMatched && isBedsMatched
  };
}
