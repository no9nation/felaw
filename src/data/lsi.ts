/**
 * Legislative Strength Index (LSI)
 *
 * A composite score (0–100) measuring the strength of animal protection
 * legislation per country. Methodology:
 *
 * 1. Coverage Breadth (0–40):  % of 8 core categories covered × 40
 * 2. Penalty Severity (0–25):  max imprisonment years, scaled
 * 3. Legislative Recency (0–15): most recent of mainLawYear or lastAmended
 * 4. Legal Personhood (0–10):  graduated — sentience(3), constitutional(6), personhood(10)
 * 5. Legislative Depth (0–10): law entries per category density
 *
 * This produces a defensible, transparent composite index suitable
 * for academic citation and policy comparison.
 */

import { countries, laws, type CountryInfo, type LawEntry } from "./laws";

const CORE_CATEGORIES = [
  "Anti-Cruelty",
  "Wildlife Protection",
  "Companion Animals",
  "Farm Animals",
  "Animal Testing",
  "Slaughter Regulations",
  "Penalties",
  "Animal Rights & Legal Personhood",
] as const;

export interface LSIScore {
  country: CountryInfo;
  total: number;
  breadth: number;       // 0–40
  penalty: number;       // 0–25
  recency: number;       // 0–15
  personhood: number;    // 0–10
  depth: number;         // 0–10
  grade: "A" | "B" | "C" | "D" | "F";
  coveredCategories: string[];
  missingCategories: string[];
  maxImprisonmentYears: number;
  lawCount: number;
  /**
   * Data confidence: how many verified law entries underpin this score.
   * High: 5+ entries across 3+ categories — scores are well-supported.
   * Medium: 2–4 entries or 1–2 categories — treat with caution.
   * Low: 0–1 entries — score reflects minimal data; likely undercounted.
   */
  dataConfidence: "High" | "Medium" | "Low";
}

/** Extract max imprisonment years from penalty text strings */
function parseMaxImprisonment(penaltyText: string): number {
  // Match patterns like "5 years", "10+ years", "1-5 years"
  const patterns = [
    /(\d+)\+?\s*years?\s*(?:imprisonment|prison|jail)/i,
    /up\s*to\s*(\d+)\s*years/i,
    /(\d+)\s*-\s*(\d+)\s*years/i,
    /imprisonment.*?(\d+)\s*years/i,
    /(\d+)\s*years.*?imprisonment/i,
  ];

  let maxYears = 0;
  for (const pattern of patterns) {
    const match = penaltyText.match(pattern);
    if (match) {
      // For range patterns (e.g., "1-5 years"), take the higher number
      const years = match[2] ? parseInt(match[2]) : parseInt(match[1]);
      maxYears = Math.max(maxYears, years);
    }
  }
  return maxYears;
}

/** Compute LSI for a single country */
function computeCountryLSI(country: CountryInfo, countryLaws: LawEntry[]): LSIScore {
  const coveredCategories = [...new Set(countryLaws.map((l) => l.category))];
  const missingCategories = CORE_CATEGORIES.filter((c) => !coveredCategories.includes(c));

  // 1. Coverage Breadth (0–40)
  const breadth = (coveredCategories.length / CORE_CATEGORIES.length) * 40;

  // 2. Penalty Severity (0–25)
  let maxImprisonmentYears = 0;
  for (const law of countryLaws) {
    if (law.penaltyMax) {
      maxImprisonmentYears = Math.max(maxImprisonmentYears, parseMaxImprisonment(law.penaltyMax));
    }
  }
  // Scale: 0 years = 0, 1 year = 10, 3 years = 18, 5+ years = 25
  // Uses sqrt scaling for diminishing returns on longer sentences
  let penalty = 0;
  if (maxImprisonmentYears >= 5) penalty = 25;
  else if (maxImprisonmentYears > 0) penalty = Math.round(25 * Math.sqrt(maxImprisonmentYears / 5));

  // 3. Legislative Recency (0–15)
  // Uses the most recent of mainLawYear or any lastAmended date
  // Scale: pre-1990 = 2, 1990s = 5, 2000s = 8, 2010s = 12, 2020+ = 15
  let mostRecentYear = country.mainLawYear;
  for (const law of countryLaws) {
    if (law.lastAmended && law.lastAmended > mostRecentYear) {
      mostRecentYear = law.lastAmended;
    }
  }
  let recency = 0;
  if (mostRecentYear > 0) {
    if (mostRecentYear >= 2020) recency = 15;
    else if (mostRecentYear >= 2010) recency = 12;
    else if (mostRecentYear >= 2000) recency = 8;
    else if (mostRecentYear >= 1990) recency = 5;
    else recency = 2;
  }

  // 4. Legal Personhood (0–10)
  // Graduated: 0 = none, 3 = sentience in statute, 6 = constitutional protection, 10 = personhood/rights
  const hasPersonhood = coveredCategories.includes("Animal Rights & Legal Personhood");
  let personhood = 0;
  if (hasPersonhood) {
    // Check details for personhood/rights indicators vs sentience-only
    const personhoodLaws = countryLaws.filter(l => l.category === "Animal Rights & Legal Personhood");
    const detailsText = personhoodLaws.map(l => l.details.toLowerCase()).join(" ");
    if (detailsText.includes("person") || detailsText.includes("rights of nature") || detailsText.includes("sujeto de derecho")) {
      personhood = 10; // Full personhood or rights recognition
    } else if (detailsText.includes("constitutional") || detailsText.includes("grundgesetz") || detailsText.includes("constitución")) {
      personhood = 6; // Constitutional animal protection
    } else {
      personhood = 3; // Statutory sentience recognition
    }
  }

  // 5. Legislative Depth (0–10)
  // Average entries per covered category, scaled
  const avgEntriesPerCat = coveredCategories.length > 0
    ? countryLaws.length / coveredCategories.length
    : 0;
  // Scale: 1 entry/cat = 3, 2 = 6, 3+ = 10
  const depth = Math.min(10, Math.round(avgEntriesPerCat * 3.3));

  const total = Math.round(breadth + penalty + recency + personhood + depth);

  let grade: LSIScore["grade"];
  if (total >= 70) grade = "A";
  else if (total >= 55) grade = "B";
  else if (total >= 40) grade = "C";
  else if (total >= 25) grade = "D";
  else grade = "F";

  // Data confidence: based on law entry count and category spread
  let dataConfidence: LSIScore["dataConfidence"];
  if (countryLaws.length >= 5 && coveredCategories.length >= 3) {
    dataConfidence = "High";
  } else if (countryLaws.length >= 2 || coveredCategories.length >= 2) {
    dataConfidence = "Medium";
  } else {
    dataConfidence = "Low";
  }

  return {
    country,
    total,
    breadth: Math.round(breadth),
    penalty,
    recency,
    personhood,
    depth,
    grade,
    coveredCategories,
    missingCategories,
    maxImprisonmentYears,
    lawCount: countryLaws.length,
    dataConfidence,
  };
}

/** Compute LSI scores for all countries, sorted by total descending */
export function computeAllLSI(): LSIScore[] {
  return countries
    .map((c) => {
      const countryLaws = laws.filter((l) => l.countryCode === c.code);
      return computeCountryLSI(c, countryLaws);
    })
    .sort((a, b) => b.total - a.total);
}

/** Get LSI score for a specific country */
export function getCountryLSI(code: string): LSIScore | undefined {
  const country = countries.find((c) => c.code === code);
  if (!country) return undefined;
  const countryLaws = laws.filter((l) => l.countryCode === code);
  return computeCountryLSI(country, countryLaws);
}

/** Compute regional average LSI */
export function computeRegionalLSI(): { region: string; avgScore: number; countries: number; topCountry: LSIScore }[] {
  const allScores = computeAllLSI();
  const regionMap = new Map<string, LSIScore[]>();

  for (const score of allScores) {
    const region = score.country.region;
    if (!regionMap.has(region)) regionMap.set(region, []);
    regionMap.get(region)!.push(score);
  }

  return [...regionMap.entries()]
    .map(([region, scores]) => ({
      region,
      avgScore: Math.round(scores.reduce((sum, s) => sum + s.total, 0) / scores.length),
      countries: scores.length,
      topCountry: scores[0], // already sorted by total
    }))
    .sort((a, b) => b.avgScore - a.avgScore);
}

/** Timeline data: countries grouped by decade of primary law adoption */
export function computeTimeline(): { decade: string; countries: { code: string; name: string; year: number; score: number }[] }[] {
  const allScores = computeAllLSI();
  const decadeMap = new Map<string, { code: string; name: string; year: number; score: number }[]>();

  for (const s of allScores) {
    if (s.country.mainLawYear > 0) {
      const decade = `${Math.floor(s.country.mainLawYear / 10) * 10}s`;
      if (!decadeMap.has(decade)) decadeMap.set(decade, []);
      decadeMap.get(decade)!.push({
        code: s.country.code,
        name: s.country.name,
        year: s.country.mainLawYear,
        score: s.total,
      });
    }
  }

  return [...decadeMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([decade, countries]) => ({
      decade,
      countries: countries.sort((a, b) => a.year - b.year),
    }));
}
