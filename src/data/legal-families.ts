/**
 * Legal Family Classification
 *
 * Classifies each jurisdiction according to the dominant legal tradition
 * following the standard comparative law taxonomy of Zweigert & Kötz
 * (Introduction to Comparative Law, 3rd ed. 1998) and David & Brierley
 * (Major Legal Systems in the World Today, 3rd ed. 1985).
 *
 * Families:
 *   Common Law     – English-origin common law (adversarial, judge-made law dominant)
 *   Civil Law      – Romano-Germanic tradition (comprehensive codes, doctrine-led)
 *   Nordic         – Scandinavian tradition (pragmatic codification, strong welfare state)
 *   Mixed          – Pluralistic systems combining two or more traditions
 *   Islamic Law    – Shari'a as primary source of legislation
 *   Customary      – Customary/Indigenous law predominant or no codified system
 *
 * Note: Classification reflects the dominant tradition relevant to animal
 * protection law specifically. Federal systems are classified by the
 * predominant tradition even where sub-national variation exists.
 */

export type LegalFamily =
  | "Common Law"
  | "Civil Law"
  | "Nordic"
  | "Mixed"
  | "Islamic Law"
  | "Customary";

export interface LegalFamilyInfo {
  family: LegalFamily;
  note?: string; // brief scholarly note on classification rationale
}

export const LEGAL_FAMILY_COLORS: Record<LegalFamily, string> = {
  "Common Law":  "#2563eb", // blue
  "Civil Law":   "#16a34a", // green
  "Nordic":      "#7c3aed", // purple
  "Mixed":       "#d97706", // amber
  "Islamic Law": "#dc2626", // red
  "Customary":   "#6b7280", // gray
};

export const LEGAL_FAMILY_DESCRIPTIONS: Record<LegalFamily, string> = {
  "Common Law":  "English-origin tradition — judge-made law, adversarial procedure, precedent central.",
  "Civil Law":   "Romano-Germanic tradition — comprehensive codes, doctrine-led, inquisitorial procedure.",
  "Nordic":      "Scandinavian tradition — pragmatic codification, consensus-based, strong welfare-state legislation.",
  "Mixed":       "Pluralistic system combining two or more major legal traditions.",
  "Islamic Law": "Shari'a as primary source of positive law; civil codes often modeled on Egyptian or Ottoman precedents.",
  "Customary":   "Customary or indigenous law predominant, or absence of codified national framework.",
};

const families: Record<string, LegalFamilyInfo> = {
  // East Asia
  JP: { family: "Civil Law",   note: "German-influenced civil code tradition (Meiji-era reception)" },
  KR: { family: "Civil Law",   note: "German/Japanese civil law influence; post-1945 codification" },
  KP: { family: "Civil Law",   note: "Soviet-influenced code tradition" },
  CN: { family: "Civil Law",   note: "Hybrid socialist-civil law; Civil Code 2020" },
  MN: { family: "Civil Law",   note: "Soviet-origin civil law tradition" },
  TW: { family: "Civil Law",   note: "German-influenced; ROC Civil Code 1929" },

  // Southeast Asia
  VN: { family: "Civil Law",   note: "French colonial civil law influence; socialist overlay" },
  TH: { family: "Civil Law",   note: "Continental European influence (German/French)" },
  PH: { family: "Mixed",       note: "Spanish civil law + US common law post-1898" },
  ID: { family: "Civil Law",   note: "Dutch colonial civil law base; customary adat law persists" },
  MY: { family: "Mixed",       note: "English common law + Islamic family law for Muslims" },
  SG: { family: "Common Law",  note: "English common law; Application of English Law Act 1993" },
  MM: { family: "Mixed",       note: "English common law base; customary law significant" },
  KH: { family: "Civil Law",   note: "French colonial tradition; post-1993 reconstruction" },
  LA: { family: "Civil Law",   note: "French colonial; socialist civil code tradition" },
  BN: { family: "Mixed",       note: "English common law + Islamic law (Syariah)" },
  TL: { family: "Civil Law",   note: "Portuguese civil law; post-independence codification" },

  // South Asia
  IN: { family: "Common Law",  note: "English common law; largest common law jurisdiction by population" },
  PK: { family: "Mixed",       note: "English common law + Islamic law (constitutional supremacy of Shari'a)" },
  BD: { family: "Common Law",  note: "English common law post-independence" },
  LK: { family: "Mixed",       note: "Roman-Dutch law + English common law + customary" },
  NP: { family: "Civil Law",   note: "Hindu legal tradition + modern civil codification" },
  BT: { family: "Mixed",       note: "Customary law + modern statutory framework" },
  MV: { family: "Mixed",       note: "English common law + Islamic law" },
  AF: { family: "Islamic Law", note: "Islamic law (Hanafi school) predominant" },

  // Central Asia
  KZ: { family: "Civil Law",   note: "Soviet civil law tradition; post-1991 codification" },
  UZ: { family: "Civil Law",   note: "Soviet civil law tradition" },
  TM: { family: "Civil Law",   note: "Soviet civil law tradition" },
  TJ: { family: "Civil Law",   note: "Soviet civil law tradition" },
  KG: { family: "Civil Law",   note: "Soviet civil law tradition" },

  // West Asia / Middle East
  TR: { family: "Civil Law",   note: "Swiss-influenced civil code (1926 reception)" },
  IR: { family: "Islamic Law", note: "Shi'a Islamic law (Ja'fari school); civil code derived from Shari'a" },
  IQ: { family: "Mixed",       note: "Egyptian-influenced civil code + Islamic personal law" },
  SA: { family: "Islamic Law", note: "Sunni Islamic law (Hanbali school); no codified civil code" },
  AE: { family: "Mixed",       note: "Egyptian civil law model + Islamic personal law + federal/emirate variation" },
  QA: { family: "Mixed",       note: "Civil law code + Islamic personal law" },
  BH: { family: "Mixed",       note: "Egyptian civil law model + Islamic law" },
  KW: { family: "Mixed",       note: "Egyptian civil law model + Islamic personal law" },
  OM: { family: "Mixed",       note: "Islamic law + civil law codes" },
  YE: { family: "Mixed",       note: "Islamic law + civil law" },
  JO: { family: "Mixed",       note: "Egyptian-inspired civil code + Islamic personal law" },
  LB: { family: "Mixed",       note: "French civil law + Ottoman legacy + 18 confessional personal law systems" },
  SY: { family: "Mixed",       note: "French civil law influence + Islamic personal law" },
  IL: { family: "Mixed",       note: "Ottoman Mejelle + English mandate law + Israeli civil legislation" },
  PS: { family: "Mixed",       note: "Ottoman/Jordanian law (West Bank) + Egyptian law (Gaza)" },
  GE: { family: "Civil Law",   note: "Soviet civil law; European-oriented reform post-1991" },
  AM: { family: "Civil Law",   note: "Soviet civil law; continental European reform" },
  AZ: { family: "Civil Law",   note: "Soviet civil law tradition" },
  CY: { family: "Mixed",       note: "English common law + Greek civil law influence" },

  // Europe — Nordic
  SE: { family: "Nordic",      note: "Scandinavian legal tradition; 1988 animal welfare act" },
  NO: { family: "Nordic",      note: "Scandinavian legal tradition; 2009 intrinsic value recognition" },
  DK: { family: "Nordic",      note: "Scandinavian legal tradition" },
  FI: { family: "Nordic",      note: "Scandinavian legal tradition; Finnish/Swedish bilingual" },
  IS: { family: "Nordic",      note: "Scandinavian legal tradition; 2013 animal welfare act" },

  // Europe — Civil Law
  DE: { family: "Civil Law",   note: "German civil law (BGB); major source tradition for civil law family" },
  FR: { family: "Civil Law",   note: "French civil law (Code Napoléon); foundational civil law tradition" },
  IT: { family: "Civil Law",   note: "Italian civil code; 2022 constitutional animal protection amendment" },
  ES: { family: "Civil Law",   note: "Spanish civil code; 2021 sentience amendment" },
  NL: { family: "Civil Law",   note: "Dutch civil code (BW); Party for Animals parliamentary model" },
  AT: { family: "Civil Law",   note: "Austrian civil code (ABGB, 1811); TSchG 2004 welfare model" },
  CH: { family: "Civil Law",   note: "Swiss civil code (ZGB); Würde der Kreatur framework" },
  BE: { family: "Civil Law",   note: "Belgian civil code; Wallonia Animal Code 2018" },
  PT: { family: "Civil Law",   note: "Portuguese civil code; 2017 sentience + 2023 constitutional amendment" },
  PL: { family: "Civil Law",   note: "Polish civil code; post-communist codification" },
  CZ: { family: "Civil Law",   note: "Czech civil code; post-1989 reform" },
  GR: { family: "Civil Law",   note: "Greek civil code (1946); Byzantine-Roman tradition" },
  RO: { family: "Civil Law",   note: "Romanian civil code; French-influenced" },
  HU: { family: "Civil Law",   note: "Hungarian civil code; German-influenced" },
  UA: { family: "Civil Law",   note: "Soviet civil law; post-1991 European-oriented reform" },
  RU: { family: "Civil Law",   note: "Soviet civil law tradition; 2018 animal welfare law" },

  // Europe — Common Law / Mixed
  GB: { family: "Common Law",  note: "English common law; foundational common law jurisdiction" },
  IE: { family: "Common Law",  note: "English common law post-independence" },

  // Africa
  ZA: { family: "Mixed",       note: "Roman-Dutch law + English common law (Cape Colony legacy)" },
  KE: { family: "Common Law",  note: "English common law; East Africa jurisdiction" },
  NG: { family: "Mixed",       note: "English common law + Islamic law in northern states + customary" },
  EG: { family: "Civil Law",   note: "Egyptian civil code (1948, Sanhuri); model for Arab civil codes" },
  ET: { family: "Civil Law",   note: "French-influenced civil code (1960, Rene David)" },
  GH: { family: "Common Law",  note: "English common law + customary law" },
  TZ: { family: "Mixed",       note: "English common law + customary law + Islamic personal law" },
  MA: { family: "Mixed",       note: "French civil law + Islamic personal law (Maliki school)" },
  TN: { family: "Mixed",       note: "French civil law + Islamic personal law; most secular Arab state" },
  UG: { family: "Common Law",  note: "English common law; 2019 Wildlife Act" },
  RW: { family: "Mixed",       note: "Belgian civil law + English common law (2009 Commonwealth accession)" },
  BW: { family: "Mixed",       note: "Roman-Dutch law + English common law + customary" },
  NA: { family: "Mixed",       note: "Roman-Dutch law + English common law; South African legal heritage" },
  SN: { family: "Civil Law",   note: "French civil law; OHADA harmonized commercial law" },
  MZ: { family: "Civil Law",   note: "Portuguese civil code" },
  DZ: { family: "Mixed",       note: "French civil law + Islamic personal law (Maliki school)" },
  AO: { family: "Civil Law",   note: "Portuguese civil law" },
  CM: { family: "Mixed",       note: "French civil law (8 regions) + English common law (2 regions)" },
  CI: { family: "Civil Law",   note: "French civil law; OHADA harmonized commercial law" },
  CD: { family: "Civil Law",   note: "Belgian civil law tradition" },
  ZW: { family: "Mixed",       note: "Roman-Dutch law + English common law" },
  ZM: { family: "Common Law",  note: "English common law" },
  MW: { family: "Common Law",  note: "English common law" },
  MG: { family: "Civil Law",   note: "French civil law" },
  MU: { family: "Mixed",       note: "French civil law + English common law" },
  LY: { family: "Mixed",       note: "Italian/French civil law + Islamic law" },
  SD: { family: "Mixed",       note: "English common law + Islamic law" },
  ML: { family: "Civil Law",   note: "French civil law; OHADA member" },
  BF: { family: "Civil Law",   note: "French civil law; OHADA member" },
  NE: { family: "Civil Law",   note: "French civil law; OHADA member" },
  TD: { family: "Civil Law",   note: "French civil law" },
  SO: { family: "Mixed",       note: "English/Italian colonial law + Islamic law + customary (xeer)" },
  SL: { family: "Common Law",  note: "English common law + customary" },
  GM: { family: "Common Law",  note: "English common law" },
  GA: { family: "Civil Law",   note: "French civil law; OHADA member" },
  CG: { family: "Civil Law",   note: "French civil law" },

  // Oceania
  AU: { family: "Common Law",  note: "English common law; federated; state-level welfare variation" },
  NZ: { family: "Common Law",  note: "English common law; Te Awa Tupua river personhood 2017" },
  FJ: { family: "Common Law",  note: "English common law post-independence" },
  PG: { family: "Mixed",       note: "English common law + customary law" },

  // Americas — Common Law
  US: { family: "Common Law",  note: "English common law; federated; state + federal variation" },
  CA: { family: "Mixed",       note: "English common law (9 provinces) + French civil law (Québec)" },
  JM: { family: "Common Law",  note: "English common law" },
  CU: { family: "Civil Law",   note: "Spanish civil law base; socialist overlay" },
  TT: { family: "Common Law",  note: "English common law" },
  DO: { family: "Civil Law",   note: "French-influenced civil code" },
  BS: { family: "Common Law",  note: "English common law" },
  BB: { family: "Common Law",  note: "English common law" },
  GY: { family: "Common Law",  note: "English common law; Roman-Dutch influence" },
  SR: { family: "Civil Law",   note: "Dutch civil law" },

  // Americas — Civil Law
  MX: { family: "Civil Law",   note: "Spanish civil law; codified; SCJN animal sentience doctrine 2021" },
  BR: { family: "Civil Law",   note: "Portuguese civil law; 1988 constitutional anti-cruelty clause" },
  AR: { family: "Civil Law",   note: "Argentine civil code; Sandra orangutan personhood 2014" },
  CL: { family: "Civil Law",   note: "Chilean civil code (Bello, 1855); model for Latin America" },
  CO: { family: "Civil Law",   note: "Colombian civil code; Atrato River + Chucho bear rulings" },
  PE: { family: "Civil Law",   note: "Peruvian civil code; Law 30407 sentience 2016" },
  EC: { family: "Civil Law",   note: "Ecuadorian civil code; first Pachamama constitution 2008" },
  UY: { family: "Civil Law",   note: "Uruguayan civil code; strong anti-cruelty tradition" },
  BO: { family: "Civil Law",   note: "Bolivian civil code; Mother Earth Law 2010" },
  VE: { family: "Civil Law",   note: "Venezuelan civil code" },
  PY: { family: "Civil Law",   note: "Paraguayan civil code" },
  CR: { family: "Civil Law",   note: "Costa Rican civil code; biodiversity + welfare integration" },
  PA: { family: "Civil Law",   note: "Panamanian civil code; Spanish-influenced" },
  GT: { family: "Civil Law",   note: "Spanish civil law" },
  HN: { family: "Civil Law",   note: "Spanish civil law" },
  SV: { family: "Civil Law",   note: "Spanish civil law" },
  NI: { family: "Civil Law",   note: "Spanish civil law" },

  // Europe (Expansion)
  RS: { family: "Civil Law",   note: "Austrian/German civil law influence; Serbian Civil Code" },
  HR: { family: "Civil Law",   note: "Austrian civil law tradition; EU member since 2013" },
  BA: { family: "Civil Law",   note: "Austrian/Ottoman civil law heritage" },
  AL: { family: "Civil Law",   note: "Italian/French civil law influence" },
  MK: { family: "Civil Law",   note: "Yugoslav civil law tradition" },
  ME: { family: "Civil Law",   note: "Austrian civil law tradition" },
  SK: { family: "Civil Law",   note: "Austrian/German civil law; EU member" },
  SI: { family: "Civil Law",   note: "Austrian civil law; EU member since 2004" },
  MT: { family: "Mixed",       note: "Italian civil law + English common law (British colonial legacy)" },
  LU: { family: "Civil Law",   note: "French civil code tradition; EU founding member" },
  MD: { family: "Civil Law",   note: "Soviet civil law; Romanian/French-influenced reform" },
};

/** Get legal family info for a country code */
export function getLegalFamily(countryCode: string): LegalFamilyInfo {
  return families[countryCode] ?? { family: "Customary", note: "No classification available" };
}

/** Group country codes by legal family */
export function groupByLegalFamily(codes: string[]): Record<LegalFamily, string[]> {
  const result: Record<LegalFamily, string[]> = {
    "Common Law": [],
    "Civil Law": [],
    "Nordic": [],
    "Mixed": [],
    "Islamic Law": [],
    "Customary": [],
  };
  for (const code of codes) {
    const { family } = getLegalFamily(code);
    result[family].push(code);
  }
  return result;
}
