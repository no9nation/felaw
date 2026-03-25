import { countries, laws } from "./laws";
import type { CountryInfo } from "./laws";

export interface CountryScore {
  country: CountryInfo;
  score: number; // 0-100
  grade: "A" | "B" | "C" | "D" | "F";
  gradeLabel: string;
  lawCount: number;
  hasAntiCruelty: boolean;
  hasWildlife: boolean;
  hasFarmAnimal: boolean;
  hasCompanionAnimal: boolean;
  hasTestingRegulation: boolean;
  hasCriminalPenalties: boolean;
  isModernLaw: boolean; // enacted or amended after 2010
  hasLegalPersonhood: boolean;
}

export function scoreCountry(code: string): CountryScore {
  const country = countries.find((c) => c.code === code)!;
  const countryLaws = laws.filter((l) => l.countryCode === code);

  let score = 0;

  // Has dedicated/comprehensive animal welfare law (0-20)
  const hasDedicatedLaw = country.mainLawYear > 0 && !country.mainLaw.toLowerCase().includes("no dedicated");
  if (hasDedicatedLaw) score += 15;
  if (country.mainLaw.toLowerCase().includes("welfare") || country.mainLaw.toLowerCase().includes("protection")) score += 5;

  // Anti-cruelty provisions (0-15)
  const hasAntiCruelty = countryLaws.some(
    (l) => l.category === "Anti-Cruelty" && !l.tags.includes("gap") && !l.tags.includes("no legislation")
  );
  if (hasAntiCruelty) score += 15;

  // Wildlife protection (0-15)
  const hasWildlife = countryLaws.some((l) => l.category === "Wildlife Protection");
  if (hasWildlife) score += 10;
  if (countryLaws.some((l) => l.category === "Wildlife Protection" && l.penaltyMax)) score += 5;

  // Companion animal protections (0-10)
  const hasCompanionAnimal = countryLaws.some((l) => l.category === "Companion Animals");
  if (hasCompanionAnimal) score += 10;

  // Farm animal welfare (0-10)
  const hasFarmAnimal = countryLaws.some((l) => l.category === "Farm Animals");
  if (hasFarmAnimal) score += 10;

  // Animal testing regulation (0-10)
  const hasTestingRegulation = countryLaws.some((l) => l.category === "Animal Testing");
  if (hasTestingRegulation) score += 10;

  // Criminal penalties for cruelty (0-10)
  const hasCriminalPenalties = countryLaws.some(
    (l) => l.penaltyMax && (l.penaltyMax.toLowerCase().includes("imprisonment") || l.penaltyMax.toLowerCase().includes("years"))
  );
  if (hasCriminalPenalties) score += 10;

  // Modern/recently updated law (0-5)
  const isModernLaw =
    country.mainLawYear >= 2010 ||
    countryLaws.some((l) => (l.lastAmended ?? 0) >= 2015);
  if (isModernLaw) score += 5;

  // Animal Rights & Legal Personhood (0-10)
  const hasLegalPersonhood = countryLaws.some((l) => l.category === "Animal Rights & Legal Personhood");
  if (hasLegalPersonhood) score += 10;

  // Landmark achievements bonus (0-5)
  if (countryLaws.some((l) => l.tags.includes("landmark") || l.tags.includes("first in Asia") || l.tags.includes("first in world"))) {
    score += 5;
  }

  // Cap at 100
  score = Math.min(100, score);

  // Grade
  let grade: CountryScore["grade"];
  let gradeLabel: string;
  if (score >= 80) { grade = "A"; gradeLabel = "Strong"; }
  else if (score >= 60) { grade = "B"; gradeLabel = "Moderate"; }
  else if (score >= 40) { grade = "C"; gradeLabel = "Basic"; }
  else if (score >= 20) { grade = "D"; gradeLabel = "Weak"; }
  else { grade = "F"; gradeLabel = "Minimal/None"; }

  return {
    country,
    score,
    grade,
    gradeLabel,
    lawCount: countryLaws.length,
    hasAntiCruelty,
    hasWildlife,
    hasFarmAnimal,
    hasCompanionAnimal,
    hasTestingRegulation,
    hasCriminalPenalties,
    isModernLaw,
    hasLegalPersonhood,
  };
}

export function getAllScores(): CountryScore[] {
  return countries.map((c) => scoreCountry(c.code)).sort((a, b) => b.score - a.score);
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "#15803d"; // green-700
  if (score >= 60) return "#65a30d"; // lime-600
  if (score >= 40) return "#ca8a04"; // yellow-600
  if (score >= 20) return "#ea580c"; // orange-600
  return "#dc2626"; // red-600
}

export function getScoreColorLight(score: number): string {
  if (score >= 80) return "#bbf7d0"; // green-200
  if (score >= 60) return "#d9f99d"; // lime-200
  if (score >= 40) return "#fef08a"; // yellow-200
  if (score >= 20) return "#fed7aa"; // orange-200
  return "#fecaca"; // red-200
}
