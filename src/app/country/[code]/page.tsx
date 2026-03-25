import Link from "next/link";
import { countries, laws, type LawEntry } from "@/data/laws";
import { computeAllLSI, getCountryLSI, type LSIScore } from "@/data/lsi";
import { getLandmarkCasesByCountry, getAllLandmarkCases, type LandmarkCase } from "@/data/landmark-cases";
import { getLegalFamily, LEGAL_FAMILY_COLORS } from "@/data/legal-families";
import { PrintButton } from "@/components/PrintButton";

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

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

const CATEGORY_LABELS: Record<string, { short: string; desc: string }> = {
  "Anti-Cruelty": { short: "Anti-Cruelty", desc: "Criminal penalties for animal abuse" },
  "Wildlife Protection": { short: "Wildlife", desc: "Endangered species & habitat protection" },
  "Companion Animals": { short: "Companions", desc: "Pet ownership, registration, welfare" },
  "Farm Animals": { short: "Farm Animals", desc: "Livestock welfare standards" },
  "Animal Testing": { short: "Testing", desc: "Regulation of animal experiments" },
  "Slaughter Regulations": { short: "Slaughter", desc: "Humane slaughter requirements" },
  "Penalties": { short: "Penalties", desc: "Criminal enforcement & sentencing" },
  "Animal Rights & Legal Personhood": { short: "Legal Personhood", desc: "Rights of nature, sentience recognition" },
};

// Tags that are relevant to each core category, for matching landmark cases
const CATEGORY_TAGS: Record<string, string[]> = {
  "Anti-Cruelty": ["cruelty", "welfare", "criminal law", "dignity", "sentience"],
  "Wildlife Protection": ["wildlife", "conservation", "biodiversity", "environment", "rights of nature"],
  "Companion Animals": ["companion animals", "stray animals", "shelter", "welfare"],
  "Farm Animals": ["farm animals", "battery cages", "positive welfare", "natural behavior", "slaughter"],
  "Animal Testing": ["animal testing"],
  "Slaughter Regulations": ["slaughter", "religious exemption", "welfare"],
  "Penalties": ["penalties", "criminal law", "poaching", "trafficking"],
  "Animal Rights & Legal Personhood": ["personhood", "rights of nature", "sentience", "habeas corpus", "constitution", "intrinsic value", "legal person", "river rights"],
};

function gradeColor(grade: string) {
  switch (grade) {
    case "A": return "bg-[var(--accent)] text-white";
    case "B": return "bg-[var(--accent)]/15 text-[var(--accent)]";
    case "C": return "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]";
    case "D": return "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]";
    default: return "bg-[var(--highlight)]/10 text-[var(--highlight)]";
  }
}

function findComparableCountries(targetScore: LSIScore, allScores: LSIScore[]): LSIScore[] {
  return allScores
    .filter((s) => s.country.code !== targetScore.country.code)
    .map((s) => ({ score: s, diff: Math.abs(s.total - targetScore.total) }))
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 3)
    .map((s) => s.score);
}

export default async function CountryProfilePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const upperCode = code.toUpperCase();

  const country = countries.find((c) => c.code === upperCode);
  const countryLaws = laws.filter((l) => l.countryCode === upperCode);
  const landmarkCases = getLandmarkCasesByCountry(upperCode);
  const lsi = getCountryLSI(upperCode);
  const allScores = computeAllLSI();
  const comparable = lsi ? findComparableCountries(lsi, allScores) : [];
  const allLandmarkCases = getAllLandmarkCases();
  const legalFamily = getLegalFamily(upperCode);

  if (!country || !lsi) {
    return (
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
        <div className="ll-divider mb-6" />
        <h1 className="text-4xl font-bold tracking-tight text-[var(--accent)] mb-4">Country Not Found</h1>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          No data available for country code &ldquo;{code}&rdquo;.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white text-sm font-bold hover:bg-[var(--highlight)] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Group laws by category
  const lawsByCategory: Record<string, LawEntry[]> = {};
  for (const law of countryLaws) {
    if (!lawsByCategory[law.category]) lawsByCategory[law.category] = [];
    lawsByCategory[law.category].push(law);
  }

  const rank = allScores.findIndex((s) => s.country.code === upperCode) + 1;
  // Percentile: proportion of countries scoring strictly below this one
  const percentile = rank > 0
    ? Math.round(((allScores.length - rank) / allScores.length) * 100)
    : 0;
  // Family rank: rank within same legal family
  const familyScores = allScores.filter((s) => getLegalFamily(s.country.code).family === legalFamily.family);
  const familyRank = familyScores.findIndex((s) => s.country.code === upperCode) + 1;

  const dimensions = [
    { label: "Coverage Breadth", value: lsi.breadth, max: 40 },
    { label: "Penalty Severity", value: lsi.penalty, max: 25 },
    { label: "Legislative Recency", value: lsi.recency, max: 15 },
    { label: "Legal Personhood", value: lsi.personhood, max: 10 },
    { label: "Legislative Depth", value: lsi.depth, max: 10 },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: `Animal Protection Legislation — ${country.name}`,
            description: `${country.name} animal protection laws: LSI ${lsi.total}/100 (Grade ${lsi.grade}), Legal Family: ${legalFamily.family}. ${countryLaws.length} law entries across ${lsi.coveredCategories.length} categories. ${landmarkCases.length > 0 ? `${landmarkCases.length} landmark case${landmarkCases.length > 1 ? "s" : ""}.` : ""}`,
            keywords: ["animal law", "animal protection", country.name, country.region, "legislation", legalFamily.family, "comparative law"],
            spatialCoverage: country.name,
            variableMeasured: [
              { "@type": "PropertyValue", name: "LSI Total", value: lsi.total, maxValue: 100 },
              { "@type": "PropertyValue", name: "Grade", value: lsi.grade },
              { "@type": "PropertyValue", name: "Global Rank", value: rank, maxValue: allScores.length },
              { "@type": "PropertyValue", name: "Legal Family", value: legalFamily.family },
              { "@type": "PropertyValue", name: "Category Coverage", value: lsi.coveredCategories.length, maxValue: 8 },
            ],
          }),
        }}
      />

      {/* Breadcrumb + actions */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--accent-soft)]">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/map" className="hover:text-[var(--accent)] transition-colors">{country.region}</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[var(--accent)] font-bold" aria-current="page">{country.name}</span>
        </nav>
        <PrintButton />
      </div>

      {/* Table of Contents — sticky sidebar on desktop */}
      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-12">
      <div>

      {/* ===== HEADER ===== */}
      <div id="overview" className="mb-16">
        <div className="ll-divider mb-6" />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">{country.flag}</span>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--accent)]">{country.name}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em] bg-[var(--muted)] border border-[var(--border)] px-3 py-1.5 text-[var(--accent-soft)]">
                {country.code}
              </span>
              <span className="text-xs text-[var(--accent-soft)]">{country.region}</span>
              {country.nameLocal && country.nameLocal !== country.name && (
                <span className="text-xs text-[var(--accent-soft)] italic">{country.nameLocal}</span>
              )}
              <span
                className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 border"
                style={{
                  color: LEGAL_FAMILY_COLORS[legalFamily.family],
                  borderColor: LEGAL_FAMILY_COLORS[legalFamily.family] + "40",
                  backgroundColor: LEGAL_FAMILY_COLORS[legalFamily.family] + "0d",
                }}
              >
                {legalFamily.family}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-bold px-5 py-2 ${gradeColor(lsi.grade)}`}>
              {lsi.grade}
            </span>
            <div>
              <div className="text-3xl font-bold tracking-tight text-[var(--accent)]">{lsi.total}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">LSI Score</div>
            </div>
          </div>
        </div>

        {/* Key info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-10 border border-[var(--border)]">
          <div className="p-6 border-b sm:border-b-0 sm:border-r border-[var(--border)]">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Primary Law</div>
            <div className="text-sm font-bold text-[var(--accent)]">{country.mainLaw}</div>
            {country.mainLawYear > 0 && (
              <div className="text-xs text-[var(--accent-soft)] mt-1">Enacted {country.mainLawYear}</div>
            )}
          </div>
          <div className="p-6 border-b sm:border-b-0 sm:border-r border-[var(--border)]">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Animal Definition</div>
            <div className="text-xs text-[var(--accent-soft)] leading-relaxed line-clamp-4">{country.animalDefinition}</div>
          </div>
          <div className="p-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Global Rank</div>
            <div className="text-sm font-bold text-[var(--accent)]">#{rank} <span className="text-[var(--accent-soft)] font-normal text-xs">of {allScores.length}</span></div>
            <div className="text-[10px] text-[var(--accent-soft)] mt-1">
              {percentile}th percentile
              {familyRank > 0 && (
                <> · #{familyRank} in {legalFamily.family}</>
              )}
            </div>
            <div className="text-xs text-[var(--accent-soft)] mt-1">{lsi.lawCount} law entries</div>
            <div className={`inline-block mt-2 text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 ${
              lsi.dataConfidence === "High"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : lsi.dataConfidence === "Medium"
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}>
              {lsi.dataConfidence} confidence
            </div>
          </div>
        </div>
      </div>

      {/* ===== LSI SCORE CARD ===== */}
      <div id="lsi" className="mb-16 scroll-mt-6">
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Legislative Strength Index</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          Composite score breakdown across 5 dimensions (0--100)
        </p>

        <div className="bg-white border border-[var(--border)] p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="text-[4rem] font-bold tracking-tight text-[var(--accent)] leading-none">{lsi.total}</div>
            <div>
              <span className={`inline-block text-lg font-bold px-4 py-1.5 ${gradeColor(lsi.grade)}`}>
                Grade {lsi.grade}
              </span>
              <div className="text-xs text-[var(--accent-soft)] mt-2">
                {lsi.total >= 70 ? "Strong legislative framework" :
                 lsi.total >= 55 ? "Moderate legislative framework" :
                 lsi.total >= 40 ? "Basic legislative framework" :
                 lsi.total >= 25 ? "Weak legislative framework" :
                 "Minimal legislative framework"}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {dimensions.map((dim) => {
              const pct = dim.max > 0 ? (dim.value / dim.max) * 100 : 0;
              return (
                <div key={dim.label} className="flex items-center gap-4">
                  <div className="w-40 shrink-0">
                    <div className="text-xs font-bold text-[var(--accent)]">{dim.label}</div>
                  </div>
                  <div className="flex-1 bg-[var(--muted)] h-3 overflow-hidden">
                    <div
                      className={`h-full ${pct >= 70 ? "bg-[var(--accent)]" : pct >= 40 ? "bg-[var(--accent)]/60" : "bg-[var(--highlight)]"}`}
                      style={{ width: `${Math.max(pct, 2)}%` }}
                    />
                  </div>
                  <div className="w-16 text-xs font-bold text-[var(--accent)] text-right shrink-0">
                    {dim.value}/{dim.max}
                  </div>
                </div>
              );
            })}
          </div>

          {lsi.maxImprisonmentYears > 0 && (
            <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--accent-soft)]">
              Maximum imprisonment: <span className="font-bold text-[var(--accent)]">{lsi.maxImprisonmentYears} years</span>
            </div>
          )}
        </div>
      </div>

      {/* ===== COVERAGE MATRIX ===== */}
      <div id="coverage" className="mb-16 scroll-mt-6">
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Coverage Matrix</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          {lsi.coveredCategories.length} of {CORE_CATEGORIES.length} core categories covered
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[var(--border)]">
          {CORE_CATEGORIES.map((cat) => {
            const covered = lsi.coveredCategories.includes(cat);
            return (
              <div
                key={cat}
                className={`p-5 border-b border-r border-[var(--border)] last:border-r-0 ${
                  covered ? "bg-white" : "bg-[var(--muted)]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {covered ? (
                    <span className="text-[var(--highlight)] text-sm font-bold">&#10003;</span>
                  ) : (
                    <span className="text-[var(--border)] text-sm">&mdash;</span>
                  )}
                  <span className={`text-xs font-bold ${covered ? "text-[var(--accent)]" : "text-[var(--accent-soft)]"}`}>
                    {CATEGORY_LABELS[cat]?.short || cat}
                  </span>
                </div>
                <div className="text-[10px] text-[var(--accent-soft)] leading-relaxed">
                  {CATEGORY_LABELS[cat]?.desc}
                </div>
                {covered && (
                  <div className="text-[10px] font-bold text-[var(--highlight)] mt-2">
                    {lawsByCategory[cat]?.length || 0} {(lawsByCategory[cat]?.length || 0) === 1 ? "entry" : "entries"}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {lsi.missingCategories.length > 0 && (
          <div className="bg-white border border-[var(--border)] border-l-[3px] border-l-[var(--highlight)] p-6 mt-4">
            <div className="text-xs font-bold text-[var(--accent)]">
              Missing {lsi.missingCategories.length} {lsi.missingCategories.length === 1 ? "category" : "categories"}
            </div>
            <div className="text-xs text-[var(--accent-soft)] mt-1">
              {lsi.missingCategories.map((c) => CATEGORY_LABELS[c]?.short || c).join(", ")}
            </div>
          </div>
        )}
      </div>

      {/* ===== LAWS BY CATEGORY ===== */}
      <div id="laws" className="mb-16 scroll-mt-6">
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Laws by Category</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          {countryLaws.length} law entries across {Object.keys(lawsByCategory).length} categories
        </p>

        <div className="space-y-8">
          {Object.entries(lawsByCategory)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, entries]) => (
              <div key={category}>
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-[0.1em]">
                    {CATEGORY_LABELS[category]?.short || category}
                  </h3>
                  <div className="flex-1 border-t border-[var(--border)]" />
                  <span className="text-xs text-[var(--accent-soft)]">{entries.length} {entries.length === 1 ? "entry" : "entries"}</span>
                </div>

                <div className="border border-[var(--border)]">
                  {entries.map((law, idx) => (
                    <div
                      key={law.id}
                      className={`p-6 hover:bg-[var(--muted)] transition-colors ${
                        idx < entries.length - 1 ? "border-b border-[var(--border)]" : ""
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[var(--accent)] tracking-tight mb-1">{law.topic}</div>
                          <div className="text-xs text-[var(--accent-soft)] leading-relaxed mb-3">{law.summary}</div>
                          <div className="flex flex-wrap items-center gap-3 text-[10px]">
                            <span className="font-bold text-[var(--accent-soft)] uppercase tracking-[0.1em]">{law.lawName}</span>
                            {law.article && (
                              <span className="text-[var(--accent-soft)]">Art. {law.article}</span>
                            )}
                            {law.year > 0 && (
                              <span className="text-[var(--accent-soft)]">{law.year}</span>
                            )}
                            {law.lastAmended && (
                              <span className="text-[var(--accent-soft)]">amended {law.lastAmended}</span>
                            )}
                          </div>
                        </div>
                        {(law.penaltyMin || law.penaltyMax) && (
                          <div className="shrink-0 md:text-right md:ml-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-1">Penalties</div>
                            {law.penaltyMin && (
                              <div className="text-[10px] text-[var(--accent-soft)]">
                                Min: <span className="text-[var(--accent)]">{law.penaltyMin}</span>
                              </div>
                            )}
                            {law.penaltyMax && (
                              <div className="text-[10px] text-[var(--accent-soft)]">
                                Max: <span className="font-bold text-[var(--highlight)]">{law.penaltyMax}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* ===== COMPARABLE JURISDICTIONS ===== */}
      <div id="comparable" className="mb-16 scroll-mt-6">
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Comparable Jurisdictions</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          Countries with the most similar LSI scores
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)]">
          {comparable.map((comp, idx) => (
            <Link
              key={comp.country.code}
              href={`/country/${comp.country.code}`}
              className={`group p-8 hover:bg-[var(--muted)] transition-colors ${
                idx < comparable.length - 1 ? "border-b md:border-b-0 md:border-r border-[var(--border)]" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{comp.country.flag}</span>
                <div>
                  <div className="text-sm font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors tracking-tight">
                    {comp.country.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] text-[var(--accent-soft)]">{comp.country.region}</div>
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5"
                      style={{ color: LEGAL_FAMILY_COLORS[getLegalFamily(comp.country.code).family], opacity: 0.85 }}
                    >
                      {getLegalFamily(comp.country.code).family}
                    </span>
                  </div>
                </div>
                <span className={`ml-auto text-xs font-bold px-2.5 py-1 ${gradeColor(comp.grade)}`}>
                  {comp.grade}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold tracking-tight text-[var(--accent)]">{comp.total}</span>
                <span className="text-xs text-[var(--accent-soft)]">LSI</span>
                <span className="text-xs text-[var(--accent-soft)] ml-auto">
                  {Math.abs(comp.total - lsi.total) === 0
                    ? "same score"
                    : `${comp.total > lsi.total ? "+" : ""}${comp.total - lsi.total} pts`}
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { label: "Breadth", value: comp.breadth, max: 40 },
                  { label: "Penalty", value: comp.penalty, max: 25 },
                  { label: "Recency", value: comp.recency, max: 15 },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span className="text-[10px] text-[var(--accent-soft)] w-14 shrink-0">{d.label}</span>
                    <div className="flex-1 bg-[var(--muted)] h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)]"
                        style={{ width: `${(d.value / d.max) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[var(--accent)] w-8 text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {comparable.length > 0 && (
          <div className="mt-6">
            <Link
              href={`/compare?countries=${upperCode},${comparable.map((c) => c.country.code).join(",")}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--highlight)] hover:text-[var(--highlight-soft)] transition-colors"
            >
              Compare {country.name} with these jurisdictions &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* ===== INSPIRATION FROM PEER JURISDICTIONS ===== */}
      {(() => {
        // Group 1: landmark cases from comparable-LSI countries
        const peerCases = comparable
          .flatMap((comp) => allLandmarkCases.filter((c) => c.countryCode === comp.country.code))
          .slice(0, 4);

        // Group 2: landmark cases from same-legal-family countries (not already shown, not this country)
        const sameFamilyCases = allLandmarkCases
          .filter((c) => {
            if (c.countryCode === upperCode) return false;
            if (peerCases.some((p) => p.id === c.id)) return false;
            return getLegalFamily(c.countryCode).family === legalFamily.family;
          })
          .slice(0, 3);

        if (peerCases.length === 0 && sameFamilyCases.length === 0) return null;

        // Build a map of country code → country info for lookup
        const countryMap = new Map(allScores.map((s) => [s.country.code, s]));
        const compSet = new Set(comparable.map((c) => c.country.code));

        const renderCase = (c: (typeof allLandmarkCases)[0], tag?: string) => {
          const compEntry = countryMap.get(c.countryCode);
          const familyColor = LEGAL_FAMILY_COLORS[getLegalFamily(c.countryCode).family];
          return (
            <div key={c.id} className="border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl shrink-0">{compEntry?.country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <Link href={`/country/${c.countryCode}`} className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--accent-soft)] hover:text-[var(--highlight)] transition-colors">
                        {compEntry?.country.name}
                      </Link>
                      <span className="text-[10px] text-[var(--accent-soft)]">·</span>
                      <span className="text-[10px] font-bold text-[var(--personhood)] bg-[var(--personhood)]/10 px-2 py-0.5">{c.year}</span>
                      <span className="text-[10px] font-bold bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)] uppercase tracking-[0.1em]">{c.type}</span>
                      {tag && (
                        <span className="text-[9px] font-bold px-2 py-0.5 uppercase tracking-[0.08em]" style={{ color: familyColor, background: familyColor + "15" }}>
                          {tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--accent)] tracking-tight">{c.title}</h3>
                    <div className="text-[10px] text-[var(--accent-soft)] mt-0.5">{c.court}</div>
                  </div>
                  {compEntry && compSet.has(c.countryCode) && (
                    <span className="text-[10px] font-bold text-[var(--accent-soft)] shrink-0">LSI {compEntry.total}</span>
                  )}
                </div>
                <p className="text-xs text-[var(--accent-soft)] leading-relaxed mb-3">{c.significance}</p>
                {c.citation && (
                  <div className="text-[10px] font-mono text-[var(--accent-soft)] bg-[var(--muted)] border border-[var(--border)] px-3 py-2 select-all">
                    {c.citation}
                  </div>
                )}
              </div>
            </div>
          );
        };

        return (
          <div id="inspiration" className="mb-16 scroll-mt-6">
            <div className="ll-divider mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Inspiration from Peer Jurisdictions</h2>
            <p className="text-sm text-[var(--accent-soft)] mb-8">
              Landmark cases and legislative milestones from similar-LSI countries and same-legal-family jurisdictions — selected for cross-jurisdictional research and citation
            </p>

            {peerCases.length > 0 && (
              <>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">
                  Similar LSI Score — Comparable Legislative Context
                </div>
                <div className="space-y-4 mb-8">
                  {peerCases.map((c) => renderCase(c, undefined))}
                </div>
              </>
            )}

            {sameFamilyCases.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">
                    Same Legal Family — {legalFamily.family} Tradition
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 uppercase tracking-[0.08em]"
                    style={{ color: LEGAL_FAMILY_COLORS[legalFamily.family], background: LEGAL_FAMILY_COLORS[legalFamily.family] + "18" }}
                  >
                    {legalFamily.family}
                  </span>
                </div>
                <div className="space-y-4 mb-6">
                  {sameFamilyCases.map((c) => renderCase(c, legalFamily.family))}
                </div>
              </>
            )}

            <div className="mt-4 flex gap-4">
              <Link href="/insights#cases" className="text-xs font-bold text-[var(--highlight)] hover:underline">
                Browse all {allLandmarkCases.length} landmark cases &rarr;
              </Link>
            </div>
          </div>
        );
      })()}

      {/* ===== POLICY RECOMMENDATIONS ===== */}
      {lsi.missingCategories.length > 0 && (
        <div id="policy" className="mb-16 scroll-mt-6">
          <div className="ll-divider mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Policy Recommendations</h2>
          <p className="text-sm text-[var(--accent-soft)] mb-8">
            Legislative gaps and model jurisdictions for each missing category
          </p>

          <div className="space-y-4">
            {lsi.missingCategories.map((missingCat) => {
              // Find best model countries for this category
              // Prefer same region, then global
              const modelsInRegion = allScores
                .filter((s) =>
                  s.country.region === country.region &&
                  s.country.code !== upperCode &&
                  s.coveredCategories.includes(missingCat)
                )
                .sort((a, b) => b.total - a.total)
                .slice(0, 2);

              const modelsGlobal = allScores
                .filter((s) =>
                  s.country.code !== upperCode &&
                  s.coveredCategories.includes(missingCat) &&
                  !modelsInRegion.some((m) => m.country.code === s.country.code)
                )
                .sort((a, b) => b.total - a.total)
                .slice(0, 2);

              const models = [...modelsInRegion, ...modelsGlobal].slice(0, 3);
              const catLabel = CATEGORY_LABELS[missingCat]?.short || missingCat;
              const catDesc = CATEGORY_LABELS[missingCat]?.desc || "";

              // Count how many laws model countries have in this category
              const modelDetails = models.map((m) => {
                const modelLaws = laws.filter(
                  (l) => l.countryCode === m.country.code && l.category === missingCat
                );
                return { ...m, catLawCount: modelLaws.length };
              });

              return (
                <div key={missingCat} className="border border-[var(--border)] border-l-[3px] border-l-[var(--highlight)]">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="text-sm font-bold text-[var(--accent)] tracking-tight">{catLabel}</div>
                        <div className="text-[10px] text-[var(--accent-soft)] mt-1">{catDesc}</div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] bg-[var(--highlight)]/10 px-2.5 py-1 shrink-0">
                        Gap
                      </span>
                    </div>

                    {models.length > 0 ? (
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3 mt-4">Model Jurisdictions</div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {modelDetails.map((m) => (
                            <Link
                              key={m.country.code}
                              href={`/country/${m.country.code}`}
                              className="group flex items-center gap-2 border border-[var(--border)] px-3 py-2 hover:bg-[var(--muted)] transition-colors"
                            >
                              <span className="text-sm">{m.country.flag}</span>
                              <span className="text-xs font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">{m.country.name}</span>
                              <span className="text-[10px] text-[var(--accent-soft)]">
                                {m.catLawCount} {m.catLawCount === 1 ? "law" : "laws"}
                              </span>
                              {m.country.region === country.region && (
                                <span className="text-[9px] font-bold text-[var(--personhood)] bg-[var(--personhood)]/10 px-1.5 py-0.5">Same region</span>
                              )}
                            </Link>
                          ))}
                        </div>
                        {/* Landmark cases from model jurisdictions relevant to this category */}
                        {(() => {
                          const catTags = CATEGORY_TAGS[missingCat] || [];
                          const relevantCases = models
                            .flatMap((m) =>
                              allLandmarkCases.filter(
                                (c) =>
                                  c.countryCode === m.country.code &&
                                  c.tags.some((t) => catTags.includes(t))
                              )
                            )
                            .slice(0, 2);
                          if (relevantCases.length === 0) return null;
                          return (
                            <div>
                              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Key Cases for Reference</div>
                              <div className="space-y-2">
                                {relevantCases.map((rc) => {
                                  const rCountry = allScores.find((s) => s.country.code === rc.countryCode)?.country;
                                  return (
                                    <div key={rc.id} className="bg-[var(--muted)] border border-[var(--border)] p-4">
                                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <span className="text-base">{rCountry?.flag}</span>
                                        <span className="text-[10px] font-bold text-[var(--accent)]">{rCountry?.name}</span>
                                        <span className="text-[10px] font-bold text-[var(--personhood)] bg-[var(--personhood)]/10 px-1.5 py-0.5">{rc.year}</span>
                                      </div>
                                      <div className="text-xs font-bold text-[var(--accent)] mb-1">{rc.title}</div>
                                      <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed mb-2">{rc.significance}</p>
                                      {rc.citation && (
                                        <div className="text-[10px] font-mono text-[var(--accent-soft)] select-all">{rc.citation}</div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    ) : (
                      <div className="text-xs text-[var(--accent-soft)] italic mt-3">
                        No model jurisdictions available for this category.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[var(--muted)] border border-[var(--border)] p-6 mt-6">
            <p className="text-xs text-[var(--accent-soft)] leading-relaxed">
              Recommendations identify legislative gaps and suggest model jurisdictions based on
              category coverage and LSI scores. Same-region models are prioritized for cultural
              and legal system compatibility. These are analytical suggestions, not prescriptive policy advice.
            </p>
          </div>

          {/* What-If Analysis */}
          <div className="mt-10">
            <div className="text-xs font-bold text-[var(--accent-soft)] uppercase tracking-[0.15em] mb-4">Projected Impact Analysis</div>
            <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl leading-relaxed">
              If {country.name} were to adopt legislation in its missing categories, the LSI score
              would increase as shown below. This illustrates the potential impact of targeted legislative reform.
            </p>
            <div className="border border-[var(--border)]">
              {/* Current score baseline */}
              <div className="flex items-center gap-4 px-5 py-3 bg-[var(--muted)] border-b border-[var(--border)]">
                <span className="text-xs font-bold text-[var(--accent)] w-48 shrink-0">Current Score</span>
                <div className="flex-1 bg-white h-3 overflow-hidden border border-[var(--border)]">
                  <div className="h-full bg-[var(--accent)]" style={{ width: `${lsi.total}%` }} />
                </div>
                <span className="text-sm font-bold text-[var(--accent)] w-16 text-right">{lsi.total}/100</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 w-8 text-center ${gradeColor(lsi.grade)}`}>{lsi.grade}</span>
              </div>
              {/* Cumulative what-if projections */}
              {(() => {
                // Calculate what adding each missing category would do
                const projections: { category: string; newBreadth: number; newTotal: number; newGrade: string; gain: number }[] = [];
                let cumulativeCovered = lsi.coveredCategories.length;

                for (const cat of lsi.missingCategories) {
                  cumulativeCovered++;
                  const newBreadth = Math.round((cumulativeCovered / 8) * 40);
                  // Depth would also improve slightly with new entries
                  const estimatedNewDepth = Math.min(10, Math.round(((countryLaws.length + 2) / cumulativeCovered) * 3.3));
                  const newTotal = Math.round(
                    newBreadth + lsi.penalty + lsi.recency +
                    (cat === "Animal Rights & Legal Personhood" ? 10 : lsi.personhood) +
                    estimatedNewDepth
                  );
                  const newGrade = newTotal >= 70 ? "A" : newTotal >= 55 ? "B" : newTotal >= 40 ? "C" : newTotal >= 25 ? "D" : "F";
                  projections.push({
                    category: CATEGORY_LABELS[cat]?.short || cat,
                    newBreadth,
                    newTotal,
                    newGrade,
                    gain: newTotal - lsi.total,
                  });
                }

                return projections.map((p, i) => (
                  <div key={p.category} className={`flex items-center gap-4 px-5 py-3 hover:bg-[var(--muted)] transition-colors ${i < projections.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                    <span className="text-xs text-[var(--accent)] w-48 shrink-0">
                      <span className="font-bold">+ {p.category}</span>
                    </span>
                    <div className="flex-1 bg-[var(--muted)] h-3 overflow-hidden">
                      <div className="h-full bg-[var(--highlight)]" style={{ width: `${p.newTotal}%` }} />
                    </div>
                    <span className="text-sm font-bold text-[var(--accent)] w-16 text-right">{p.newTotal}/100</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 w-8 text-center ${gradeColor(p.newGrade)}`}>{p.newGrade}</span>
                  </div>
                ));
              })()}
              {/* Full coverage projection */}
              {(() => {
                const fullBreadth = 40;
                const fullPersonhood = 10;
                const fullDepth = Math.min(10, Math.round(((countryLaws.length + lsi.missingCategories.length * 2) / 8) * 3.3));
                const fullTotal = Math.round(fullBreadth + lsi.penalty + lsi.recency + fullPersonhood + fullDepth);
                const fullGrade = fullTotal >= 70 ? "A" : fullTotal >= 55 ? "B" : fullTotal >= 40 ? "C" : fullTotal >= 25 ? "D" : "F";
                return (
                  <div className="flex items-center gap-4 px-5 py-3 bg-[var(--accent)] text-white">
                    <span className="text-xs font-bold w-48 shrink-0">Full Coverage (all 8)</span>
                    <div className="flex-1 bg-white/20 h-3 overflow-hidden">
                      <div className="h-full bg-white" style={{ width: `${fullTotal}%` }} />
                    </div>
                    <span className="text-sm font-bold w-16 text-right">{fullTotal}/100</span>
                    <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 w-8 text-center">{fullGrade}</span>
                  </div>
                );
              })()}
            </div>
            <p className="text-[10px] text-[var(--accent-soft)] mt-3 italic">
              Projections assume minimal legislation (2 entries) per new category. Actual scores would vary based on law quality, penalty provisions, and depth of coverage.
            </p>
          </div>
        </div>
      )}

      {/* ===== LANDMARK CASES ===== */}
      {landmarkCases.length > 0 && (
        <div id="cases" className="mb-16 scroll-mt-6">
          <div className="ll-divider mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Landmark Cases & Key Decisions</h2>
          <p className="text-sm text-[var(--accent-soft)] mb-8">
            Significant judicial decisions, legislative milestones, and guidelines that shaped animal protection law in {country.name} — useful for comparative research and citation
          </p>
          <div className="space-y-4">
            {landmarkCases.map((c) => (
              <div key={c.id} className="border border-[var(--border)] border-l-[3px] border-l-[var(--personhood)]">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-[var(--accent)] tracking-tight">{c.title}</h3>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--personhood)] bg-[var(--personhood)]/10 px-2 py-0.5">{c.year}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)]">{c.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[var(--accent-soft)] mb-2 font-medium">{c.court}</div>
                  <p className="text-sm text-[var(--accent-soft)] leading-relaxed mb-3">{c.summary}</p>
                  <div className="bg-[var(--muted)] p-4 mb-3">
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--personhood)] mb-1">Global Significance</div>
                    <p className="text-xs text-[var(--accent-soft)] leading-relaxed">{c.significance}</p>
                  </div>
                  {c.citation && (
                    <div className="text-[10px] font-mono text-[var(--accent-soft)] bg-[var(--muted)] border border-[var(--border)] px-3 py-2 select-all">
                      {c.citation}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[var(--muted)] border border-[var(--border)] p-5 mt-6">
            <p className="text-xs text-[var(--accent-soft)] leading-relaxed">
              Case summaries are for research orientation. Always verify against primary sources and consult qualified legal counsel for specific legal matters.
              Citation text is formatted for academic use — highlight to copy.
            </p>
          </div>
        </div>
      )}

      {/* ===== HOW TO CITE ===== */}
      <section id="cite" className="mt-16 border-t border-[var(--border)] pt-10 mb-10">
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">How to Cite This Profile</div>
        <div className="space-y-3">
          <div className="bg-[var(--muted)] p-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">Bluebook</div>
            <p className="font-mono text-xs text-[var(--accent)] leading-relaxed select-all">
              Fe Laws, <em>Animal Protection Law Profile: {country.name}</em>, felaws.vercel.app/country/{upperCode} (last visited {new Date().getFullYear()}).
            </p>
          </div>
          <div className="bg-[var(--muted)] p-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">APA 7th</div>
            <p className="font-mono text-xs text-[var(--accent)] leading-relaxed select-all">
              Fe Laws. ({new Date().getFullYear()}). <em>Animal protection law profile: {country.name}</em> (LSI {lsi.total}/100, Grade {lsi.grade}). felaws.vercel.app/country/{upperCode}
            </p>
          </div>
        </div>
        <p className="text-[10px] text-[var(--accent-soft)] mt-3 leading-relaxed">
          For individual law entries, use the Bluebook citation available in the{" "}
          <Link href={`/database?country=${upperCode}`} className="text-[var(--highlight)] font-bold hover:underline">Database</Link>.
          Highlight the citation text above to copy it.
        </p>
      </section>

      {/* ===== METHODOLOGY NOTE ===== */}
      <section id="methodology" className="mt-0 border-t border-[var(--border)] pt-10">
        <div className="bg-[var(--muted)] p-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">
            Methodology & Limitations
          </h3>
          <div className="text-xs text-[var(--accent-soft)] leading-[1.8] space-y-2">
            <p>
              The Legislative Strength Index (LSI) is a composite indicator designed for <strong>relative comparison</strong>, not
              absolute measurement of animal welfare outcomes. It scores legislation on the books, not enforcement
              effectiveness, judicial interpretation, or real-world compliance.
            </p>
            <p>
              <strong>Key limitations:</strong> (1) Equal weighting assumptions may not reflect jurisdictional priorities;
              (2) Penalty data reflects statutory maxima, not typical sentences; (3) Coverage breadth does not capture
              the quality or specificity of individual provisions; (4) Data currency varies by jurisdiction.
            </p>
            <p>
              Grade boundaries: A (&ge;70), B (55&ndash;69), C (40&ndash;54), D (25&ndash;39), F (&lt;25).
              Full methodology available on the <Link href="/about#methodology" className="text-[var(--highlight)] font-bold hover:underline">About page</Link>.
            </p>
            <p>
              <strong>Data confidence: {lsi.dataConfidence}</strong> — based on {lsi.lawCount} law {lsi.lawCount === 1 ? "entry" : "entries"} across {lsi.coveredCategories.length} {lsi.coveredCategories.length === 1 ? "category" : "categories"}.
              {lsi.dataConfidence === "Low" && " This country may have more legislation not yet captured in this database. Treat the LSI score as a lower-bound estimate."}
              {lsi.dataConfidence === "Medium" && " Moderate data coverage — the score is indicative but may not capture all relevant legislation."}
            </p>
          </div>
        </div>
      </section>

      </div>{/* end main content column */}

      {/* Sticky Table of Contents sidebar */}
      <aside className="hidden lg:block">
        <nav className="sticky top-6 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-soft)] mb-3">On this page</div>
          {[
            { id: "overview", label: "Overview" },
            { id: "lsi", label: "LSI Score" },
            { id: "coverage", label: "Coverage Matrix" },
            { id: "laws", label: "Laws" },
            { id: "comparable", label: "Comparable" },
            ...(comparable.some((c) => allLandmarkCases.some((lc) => lc.countryCode === c.country.code)) ||
               allLandmarkCases.some((lc) => lc.countryCode !== upperCode && getLegalFamily(lc.countryCode).family === legalFamily.family)
               ? [{ id: "inspiration", label: "Inspiration" }] : []),
            ...(lsi.missingCategories.length > 0 ? [{ id: "policy", label: "Policy Recs" }] : []),
            ...(landmarkCases.length > 0 ? [{ id: "cases", label: "Cases" }] : []),
            { id: "cite", label: "Citation" },
            { id: "methodology", label: "Methodology" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-xs text-[var(--accent-soft)] hover:text-[var(--accent)] py-1.5 border-l-2 border-transparent hover:border-[var(--highlight)] pl-3 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="border-t border-[var(--border)] mt-4 pt-4">
            <div className="text-[10px] font-bold text-[var(--accent-soft)] mb-2">
              LSI {lsi.total}/100
            </div>
            <div className="bg-[var(--muted)] h-2 overflow-hidden">
              <div className="h-full bg-[var(--accent)]" style={{ width: `${lsi.total}%` }} />
            </div>
            <div className={`text-[10px] font-bold mt-1 ${lsi.grade === "A" || lsi.grade === "B" ? "text-[var(--accent)]" : "text-[var(--highlight)]"}`}>
              Grade {lsi.grade} · #{rank}
            </div>
          </div>
        </nav>
      </aside>
      </div>{/* end grid */}

      {/* Bottom navigation */}
      {(() => {
        const prevCountry = allScores[rank - 2]?.country;
        const nextCountry = allScores[rank]?.country;
        return (
          <div className="border-t border-[var(--border)] pt-8 mt-8">
            {/* Rank navigation */}
            <div className="flex items-center justify-between gap-4 mb-6">
              {prevCountry ? (
                <Link
                  href={`/country/${prevCountry.code}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors"
                >
                  ← {prevCountry.flag} <span>#{rank - 1} {prevCountry.name}</span>
                </Link>
              ) : <span />}
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">#{rank} of {allScores.length}</span>
              {nextCountry ? (
                <Link
                  href={`/country/${nextCountry.code}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>#{rank + 1} {nextCountry.name}</span> {nextCountry.flag} →
                </Link>
              ) : <span />}
            </div>
            {/* Core action links */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-[var(--border)] text-sm font-bold text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
              >
                All Countries
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center px-6 py-3 border border-[var(--border)] text-sm font-bold text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
              >
                Insights & Rankings
              </Link>
              <Link
                href={`/map?country=${upperCode}`}
                className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white text-sm font-bold hover:bg-[var(--highlight)] transition-colors"
              >
                View on Map
              </Link>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
