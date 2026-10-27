export interface ServiceZone {
  name: string;
  pincode: string;
  distance: string;
  eta: string;
  covered: boolean;
  aliases?: string[];
}

// Hub / Base Location: Bhimavaram Town, Andhra Pradesh (Shop location)
export const SHOP_LOCATION = {
  area: 'Balusumudi / Main Road',
  city: 'Bhimavaram',
  district: 'West Godavari',
  state: 'Andhra Pradesh',
  pincode: '534201',
  fullAddress: 'Main Road / Balusumudi, Bhimavaram, West Godavari District, Andhra Pradesh 534201',
};

// Accurate coverage zones with driving distance and ETA in and around Bhimavaram, Andhra Pradesh
export const BHIMAVARAM_AREAS: ServiceZone[] = [
  // Central Bhimavaram Town (0 - 2 km from Base) - 10-20 min arrival
  {
    name: 'Balusumudi',
    pincode: '534201',
    distance: '0 - 1 km',
    eta: '10 - 15 mins (Local Base)',
    covered: true,
    aliases: ['balusumudi', 'balusu mudi', 'balusumudi center', 'municipal office'],
  },
  {
    name: 'Gunupudi',
    pincode: '534201',
    distance: '1 - 2 km',
    eta: '10 - 20 mins',
    covered: true,
    aliases: ['gunupudi', 'someswara temple', 'somarama', 'gunupudi center'],
  },
  {
    name: 'Prakasham Chowk / Main Road',
    pincode: '534201',
    distance: '1 km',
    eta: '10 - 15 mins',
    covered: true,
    aliases: ['prakasham chowk', 'main road', 'gandhi statue', 'clock tower bhimavaram', 'old bus stand'],
  },
  {
    name: 'Mavullamma Temple Area',
    pincode: '534201',
    distance: '1.5 km',
    eta: '10 - 20 mins',
    covered: true,
    aliases: ['mavullamma temple', 'mavullamma ammavari temple', 'sunday market', 'ammavari temple road'],
  },
  {
    name: 'Bhimavaram Town Railway Station',
    pincode: '534201',
    distance: '1.5 km',
    eta: '10 - 20 mins',
    covered: true,
    aliases: ['town railway station', 'railway station road', 'bhimavaram town'],
  },
  {
    name: 'Bhimavaram Junction',
    pincode: '534202',
    distance: '2.5 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['bhimavaram junction', 'junction station', 'railway quarters'],
  },
  {
    name: 'DNR College Road',
    pincode: '534202',
    distance: '2 km',
    eta: '15 - 20 mins',
    covered: true,
    aliases: ['dnr college', 'dnr campus', 'rest house road', 'dnr engineering'],
  },
  {
    name: 'J.P. Road (Jana Priya Road)',
    pincode: '534202',
    distance: '1.8 km',
    eta: '15 - 20 mins',
    covered: true,
    aliases: ['jp road', 'jana priya road', 'j.p. road', 'new bus stand road'],
  },
  {
    name: 'Housing Board Colony',
    pincode: '534202',
    distance: '2.2 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['housing board colony', 'housing board', 'hb colony bhimavaram'],
  },
  {
    name: 'Gandhinagar',
    pincode: '534203',
    distance: '2 km',
    eta: '15 - 20 mins',
    covered: true,
    aliases: ['gandhinagar', 'gandhi nagar bhimavaram', 'gandhinagar 1st line', 'gandhinagar 2nd line'],
  },

  // College Hubs & Extensions (2 - 5 km)
  {
    name: 'Chinna Amiram',
    pincode: '534204',
    distance: '3.5 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['chinna amiram', 'chinnamiram', 'amiram road'],
  },
  {
    name: 'SRKR Engineering College Area',
    pincode: '534204',
    distance: '4 km',
    eta: '20 - 30 mins',
    covered: true,
    aliases: ['srkr', 'srkr engineering college', 's.r.k.r', 'srkr college road', 'srkr campus', 'bhimavaram engineering'],
  },
  {
    name: 'Pedda Amiram',
    pincode: '534204',
    distance: '5 km',
    eta: '20 - 30 mins',
    covered: true,
    aliases: ['pedda amiram', 'peddamiram'],
  },
  {
    name: 'Rayalam',
    pincode: '534208',
    distance: '3.5 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['rayalam', 'rayalam road', 'rayalam rural'],
  },
  {
    name: 'Losarigutlapadu',
    pincode: '534202',
    distance: '3 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['losarigutlapadu', 'gutlapadu'],
  },
  {
    name: 'Mentey Vari Thota / Annavaram',
    pincode: '534202',
    distance: '2.8 km',
    eta: '15 - 25 mins',
    covered: true,
    aliases: ['mentey vari thota', 'annavaram bhimavaram', 'mentey thota'],
  },

  // Surrounding Towns & Mandals (< 15 km)
  {
    name: 'Vissakoderu',
    pincode: '534244',
    distance: '6 km',
    eta: '20 - 35 mins',
    covered: true,
    aliases: ['vissakoderu', 'visakoderu'],
  },
  {
    name: 'Undi',
    pincode: '534199',
    distance: '9 km',
    eta: '25 - 40 mins',
    covered: true,
    aliases: ['undi', 'undi road', 'undi center'],
  },
  {
    name: 'Kumudavalli',
    pincode: '534210',
    distance: '6.5 km',
    eta: '20 - 35 mins',
    covered: true,
    aliases: ['kumudavalli'],
  },
  {
    name: 'Gollalakoderu',
    pincode: '534201',
    distance: '5.5 km',
    eta: '20 - 35 mins',
    covered: true,
    aliases: ['gollalakoderu', 'gollala koderu'],
  },
  {
    name: 'Veeravasaram',
    pincode: '534245',
    distance: '11 km',
    eta: '30 - 45 mins',
    covered: true,
    aliases: ['veeravasaram', 'viravasaram'],
  },
  {
    name: 'Palakollu Road Area',
    pincode: '534260',
    distance: '8 - 14 km',
    eta: '30 - 45 mins',
    covered: true,
    aliases: ['palakollu road', 'palakol road'],
  },
  {
    name: 'Tadepalligudem Road Area',
    pincode: '534101',
    distance: '8 - 15 km',
    eta: '30 - 45 mins',
    covered: true,
    aliases: ['tadepalligudem road', 'tpg road'],
  },
];

// Alias for existing component imports
export const HYDERABAD_AREAS = BHIMAVARAM_AREAS;

export const POPULAR_HYDERABAD_LOCATIONS = [
  'Balusumudi (Shop Base)',
  'SRKR College Road',
  'Gunupudi',
  'DNR College Road',
  'Gandhinagar',
  'Chinna Amiram',
  'Housing Board Colony',
  'J.P. Road',
];

export const POPULAR_BHIMAVARAM_LOCATIONS = POPULAR_HYDERABAD_LOCATIONS;

// List of far outside regions to provide immediate clear rejection feedback
export const OUTSIDE_LOCATIONS_KEYWORDS = [
  // Other states
  'telangana', 'hyderabad', 'karnataka', 'bangalore', 'bengaluru', 'maharashtra', 'mumbai', 'pune',
  'tamil nadu', 'chennai', 'kerala', 'delhi', 'new delhi', 'gujarat', 'rajasthan', 'uttar pradesh',
  'west bengal', 'kolkata',
  // Distant AP cities (> 70 km away)
  'visakhapatnam', 'vizag', 'tirupati', 'kurnool', 'kadapa', 'anantapur', 'nellore', 'chittoor',
  // Countries
  'usa', 'united states', 'uk', 'united kingdom', 'canada', 'australia', 'dubai', 'uae',
];

/**
 * Validates whether a given query corresponds to Bhimavaram & surrounding areas
 * and returns specific ETA from Santhosh Kumar's shop.
 */
export function checkLocationServiceability(input: string): {
  isHyderabad: boolean; // maintained for interface backward-compatibility
  matchedZone?: ServiceZone;
  areaName: string;
  distanceFromAmeerpet?: string;
  etaFromAmeerpet?: string;
  pincode?: string;
  reason?: string;
} {
  const query = input.trim().toLowerCase();
  if (!query) {
    return { isHyderabad: false, areaName: input, reason: 'Empty location entered' };
  }

  // 1. Check if user typed an explicit far outside location (e.g. Hyderabad, Bangalore, Vizag, etc.)
  const isExplicitOutside = OUTSIDE_LOCATIONS_KEYWORDS.some((kw) => {
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    return regex.test(query);
  });

  if (isExplicitOutside) {
    return {
      isHyderabad: false,
      areaName: input.trim(),
      reason: `Outside service boundary. Santhosh Kumar operates from Bhimavaram, Andhra Pradesh. Home mobile repair service is strictly available in Bhimavaram and surrounding areas.`,
    };
  }

  // 2. Check if user entered a 6-digit postal pincode
  const pincodeMatch = query.match(/\b\d{6}\b/);
  if (pincodeMatch) {
    const code = pincodeMatch[0];
    // Bhimavaram and West Godavari regional pincodes start with 534xxx
    if (!code.startsWith('534')) {
      return {
        isHyderabad: false,
        areaName: input.trim(),
        pincode: code,
        reason: `Pincode ${code} is outside Bhimavaram. Doorstep service is available for Bhimavaram & nearby regional pincodes (534201, 534202, 534203, 534204, 534208, 534xxx).`,
      };
    }

    // Match pincode in our known zones
    const zoneByPin = BHIMAVARAM_AREAS.find((z) => z.pincode === code);
    if (zoneByPin) {
      return {
        isHyderabad: true,
        matchedZone: zoneByPin,
        areaName: zoneByPin.name,
        pincode: code,
        distanceFromAmeerpet: zoneByPin.distance,
        etaFromAmeerpet: zoneByPin.eta,
      };
    }

    // Generic Bhimavaram 534xxx pincode
    return {
      isHyderabad: true,
      areaName: `Bhimavaram Area (Pincode ${code})`,
      pincode: code,
      distanceFromAmeerpet: '3 - 8 km',
      etaFromAmeerpet: '15 - 30 mins from Bhimavaram center',
    };
  }

  // 3. Match against known Bhimavaram localities and their aliases
  for (const zone of BHIMAVARAM_AREAS) {
    const nameMatch = zone.name.toLowerCase();
    if (query === nameMatch || query.includes(nameMatch) || nameMatch.includes(query)) {
      return {
        isHyderabad: true,
        matchedZone: zone,
        areaName: zone.name,
        pincode: zone.pincode,
        distanceFromAmeerpet: zone.distance,
        etaFromAmeerpet: zone.eta,
      };
    }

    if (zone.aliases) {
      for (const alias of zone.aliases) {
        if (query === alias || query.includes(alias) || alias.includes(query)) {
          return {
            isHyderabad: true,
            matchedZone: zone,
            areaName: zone.name,
            pincode: zone.pincode,
            distanceFromAmeerpet: zone.distance,
            etaFromAmeerpet: zone.eta,
          };
        }
      }
    }
  }

  // 4. Check if the query specifically contains "bhimavaram", "bvrm", or "andhra"
  if (query.includes('bhimavaram') || query.includes('bvrm') || query.includes('amiram') || query.includes('west godavari')) {
    return {
      isHyderabad: true,
      areaName: input.trim(),
      distanceFromAmeerpet: '2 - 6 km',
      etaFromAmeerpet: '15 - 30 mins from Bhimavaram center',
      pincode: '534201',
    };
  }

  // 5. Default outside response
  return {
    isHyderabad: false,
    areaName: input.trim(),
    reason: `"${input.trim()}" is not recognized as a Bhimavaram locality. Santhosh Kumar provides doorstep service across Bhimavaram, Andhra Pradesh (534201 - 534208).`,
  };
}
