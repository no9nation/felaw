"use client";

import { useState, useRef, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { countries, laws, regions } from "@/data/laws";
import type { CountryInfo, LawEntry } from "@/data/laws";
import { getCountryLSI, computeAllLSI } from "@/data/lsi";
import { getLegalFamily, LEGAL_FAMILY_COLORS, LEGAL_FAMILY_DESCRIPTIONS } from "@/data/legal-families";
import type { MapColorMode } from "@/components/LeafletMap";

const LeafletMap = lazy(() => import("@/components/LeafletMap"));

function LegalPersonhoodGlobal({ onCountrySelect }: { onCountrySelect: (code: string) => void }) {
  const lpLaws = laws.filter((l) => l.category === "Animal Rights & Legal Personhood");
  const lpCountryCodes = [...new Set(lpLaws.map((l) => l.countryCode))];
  const lpCountries = lpCountryCodes
    .map((code) => countries.find((c) => c.code === code))
    .filter(Boolean) as CountryInfo[];
  const [expanded, setExpanded] = useState(false);

  const highlights = [
    { code: "EC", label: "Rights of Nature", desc: "Constitutional recognition (2008)" },
    { code: "NZ", label: "Animal Sentience", desc: "Whanganui River personhood (2017)" },
    { code: "IN", label: "Animal Personhood", desc: "Judicial recognition of rights" },
    { code: "CO", label: "Bear & River Rights", desc: "Chucho the bear case (2017)" },
    { code: "AR", label: "Non-Human Person", desc: "Sandra the orangutan (2014)" },
    { code: "BO", label: "Mother Earth Rights", desc: "Ley de Derechos (2010)" },
    { code: "BD", label: "River Personhood", desc: "Turag River ruling (2019)" },
    { code: "CH", label: "Animal Dignity", desc: "Constitutional Wurde der Kreatur" },
    { code: "DE", label: "Constitutional Protection", desc: "Article 20a Basic Law (2002)" },
    { code: "FR", label: "Sentient Beings", desc: "Civil Code reform (2015)" },
  ].filter((h) => lpCountryCodes.includes(h.code));

  return (
    <div className="mb-10 bg-white border border-[var(--border)] overflow-hidden elevation-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-8 py-6 flex items-center gap-5 hover:bg-[var(--muted)] transition-colors"
      >
        <div className="w-1 h-10 bg-[var(--personhood)] shrink-0" />
        <div className="flex-1 text-left">
          <h2 className="font-bold text-base text-[var(--personhood)] tracking-tight">
            Legal Personhood & Rights of Nature
          </h2>
          <p className="text-xs text-[var(--accent-soft)] mt-1">
            {lpCountries.length} jurisdictions with recognized animal rights, legal personhood, or rights of nature
          </p>
        </div>
        <svg
          className={`w-5 h-5 text-[var(--accent-soft)] transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-[var(--border)]">
          {/* Landmark highlights */}
          <div className="px-8 py-6">
            <div className="text-[10px] font-bold text-[var(--personhood)] uppercase tracking-[0.15em] mb-5">
              Landmark Jurisdictions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <button
                  key={h.code}
                  onClick={() => onCountrySelect(h.code)}
                  className="text-left group p-4 border border-[var(--border)] transition-all hover:border-[var(--personhood)] hover:bg-[var(--personhood)]/5 hover:elevation-1"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-[var(--personhood)] bg-[var(--personhood)]/10 px-1.5 py-0.5">
                      {h.code}
                    </span>
                    <span className="text-xs font-bold text-[var(--foreground)] group-hover:text-[var(--personhood)] transition-colors tracking-tight">
                      {h.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--accent-soft)]">{h.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Full country list */}
          <div className="px-8 pb-6 border-t border-[var(--border)] pt-6">
            <div className="text-[10px] font-bold text-[var(--accent-soft)] uppercase tracking-[0.15em] mb-4">
              All Jurisdictions ({lpCountries.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {lpCountries.map((c) => {
                const entryCount = lpLaws.filter((l) => l.countryCode === c.code).length;
                return (
                  <button
                    key={c.code}
                    onClick={() => onCountrySelect(c.code)}
                    className="flex items-center gap-2 border border-[var(--border)] bg-white px-3 py-2 text-xs transition-all hover:border-[var(--personhood)] hover:bg-[var(--personhood)]/5"
                  >
                    <span className="font-mono text-[10px] text-[var(--personhood)] bg-[var(--muted)] px-1.5 py-0.5">{c.code}</span>
                    <span className="font-medium text-[var(--foreground)]">{c.name}</span>
                    <span className="text-[var(--accent-soft)] text-[10px] bg-[var(--muted)] px-1.5 py-0.5">{entryCount}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LegalPersonhoodBanner({ country }: { country: CountryInfo }) {
  const lpLaws = laws.filter(
    (l) => l.countryCode === country.code && l.category === "Animal Rights & Legal Personhood"
  );
  if (lpLaws.length === 0) return null;

  return (
    <div className="bg-white border border-[var(--border)] p-8 mb-8 elevation-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 bg-[var(--personhood)]" />
        <h3 className="font-bold text-sm text-[var(--personhood)] tracking-tight">
          Legal Personhood & Rights of Nature
        </h3>
        <span className="ml-auto text-[10px] text-white bg-[var(--personhood)] px-2.5 py-1 font-bold uppercase tracking-wider">
          {lpLaws.length} {lpLaws.length === 1 ? "entry" : "entries"}
        </span>
      </div>
      <div className="space-y-4">
        {lpLaws.map((law) => (
          <div key={law.id} className="border-l-3 border-[var(--personhood)]/40 pl-5 py-3 bg-[var(--personhood)]/5">
            <div className="font-bold text-sm text-[var(--personhood)] tracking-tight">{law.topic}</div>
            <div className="text-xs text-[var(--accent-soft)] mt-1 leading-relaxed">{law.summary}</div>
            <div className="text-[10px] text-[var(--accent-soft)] mt-2">
              {law.lawName} {law.lastAmended ? ` -- ${law.lastAmended}` : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountryDetail({ country }: { country: CountryInfo }) {
  const countryLaws = laws.filter((l) => l.countryCode === country.code);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const lsi = getCountryLSI(country.code);
  const allScores = computeAllLSI();
  const rank = lsi ? allScores.findIndex((s) => s.country.code === country.code) + 1 : 0;
  const legalFamily = getLegalFamily(country.code);

  const filteredLaws = selectedCategory
    ? countryLaws.filter((l) => l.category === selectedCategory)
    : countryLaws;

  const countryCategories = [...new Set(countryLaws.map((l) => l.category))];

  useEffect(() => {
    setSelectedCategory(null);
  }, [country.code]);

  return (
    <div className="space-y-8">
      {/* Country header */}
      <div className="bg-white border border-[var(--border)] p-10 elevation-1">
        <div className="flex items-start gap-6 mb-6">
          <div className="bg-[var(--muted)] w-16 h-16 flex items-center justify-center shrink-0">
            <span className="text-lg font-mono font-bold text-[var(--highlight)] tracking-wide">
              {country.code}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-2xl text-[var(--foreground)] tracking-tight">{country.name}</h2>
            <p className="text-[var(--accent-soft)] text-sm mt-1">{country.nameLocal}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-[10px] text-white bg-[var(--accent)] px-2.5 py-1 font-bold uppercase tracking-[0.15em] inline-block">
                {country.region}
              </span>
              {lsi && (
                <span className={`text-[10px] font-bold px-2.5 py-1 uppercase tracking-[0.15em] ${
                  lsi.grade === "A" ? "bg-[var(--accent)] text-white" :
                  lsi.grade === "B" ? "bg-[var(--accent)]/15 text-[var(--accent)]" :
                  lsi.grade === "F" ? "bg-[var(--highlight)]/10 text-[var(--highlight)]" :
                  "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]"
                }`}>
                  LSI {lsi.total} · {lsi.grade} · #{rank}
                </span>
              )}
              <span
                className="text-[10px] font-bold px-2.5 py-1 uppercase tracking-[0.12em]"
                style={{
                  color: LEGAL_FAMILY_COLORS[legalFamily.family],
                  background: LEGAL_FAMILY_COLORS[legalFamily.family] + "18",
                  border: `1px solid ${LEGAL_FAMILY_COLORS[legalFamily.family]}40`,
                }}
                title={LEGAL_FAMILY_DESCRIPTIONS[legalFamily.family]}
              >
                {legalFamily.family}
              </span>
              <Link
                href={`/country/${country.code}`}
                className="text-[11px] font-bold text-[var(--highlight)] hover:text-[var(--highlight-soft)] transition-colors"
              >
                View Full Profile &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[var(--muted)] p-5">
            <div className="text-[10px] text-[var(--highlight)] font-bold uppercase tracking-[0.15em] mb-2">
              Primary Legislation
            </div>
            <div className="text-[var(--foreground)] font-bold text-sm tracking-tight">{country.mainLaw}</div>
            {country.mainLawYear > 0 && (
              <div className="text-xs text-[var(--accent-soft)] mt-1">Enacted {country.mainLawYear}</div>
            )}
          </div>
          <div className="bg-[var(--muted)] p-5">
            <div className="text-[10px] text-[var(--accent-soft)] font-bold uppercase tracking-[0.15em] mb-2">
              Definition of &ldquo;Animal&rdquo;
            </div>
            <div className="text-xs text-[var(--accent-soft)] mt-1 line-clamp-4 leading-relaxed">
              {country.animalDefinition}
            </div>
          </div>
        </div>

        {/* Mini LSI bar + coverage indicators */}
        {lsi && (
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">
                LSI {lsi.total}/100
              </span>
              <div className="flex-1 bg-[var(--muted)] h-2 overflow-hidden">
                <div className="h-full bg-[var(--accent)]" style={{ width: `${lsi.total}%` }} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 ${
                lsi.grade === "A" ? "bg-[var(--accent)] text-white" :
                lsi.grade === "B" ? "bg-[var(--accent)]/15 text-[var(--accent)]" :
                "bg-[var(--muted)] text-[var(--accent-soft)]"
              }`}>{lsi.grade}</span>
            </div>
            <div className="flex gap-1">
              {["Anti-Cruelty", "Wildlife Protection", "Companion Animals", "Farm Animals", "Animal Testing", "Slaughter Regulations", "Penalties", "Animal Rights & Legal Personhood"].map((cat) => {
                const has = countryLaws.some((l) => l.category === cat);
                return (
                  <div key={cat} className={`flex-1 h-1.5 ${has ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`}
                    title={`${cat}: ${has ? "covered" : "gap"}`} />
                );
              })}
            </div>
            <div className="text-[9px] text-[var(--accent-soft)] mt-1.5">
              {lsi.coveredCategories.length}/8 categories covered
            </div>
          </div>
        )}
      </div>

      <LegalPersonhoodBanner country={country} />

      {countryLaws.length === 0 ? (
        <div className="bg-white border border-[var(--border)] p-10 text-center elevation-1">
          <p className="text-[var(--accent-soft)] text-sm">
            Detailed law entries for {country.name} are being compiled.
          </p>
        </div>
      ) : (
        <>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 text-xs font-bold tracking-wide transition-all ${
                !selectedCategory
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
              }`}
            >
              All ({countryLaws.length})
            </button>
            {countryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredLaws.map((law) => (
              <LawCard key={law.id} law={law} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function LawCard({ law }: { law: LawEntry }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white border border-[var(--border)] overflow-hidden transition-shadow hover:elevation-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-8 py-5 hover:bg-[var(--muted)] transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--highlight)] bg-[var(--highlight)]/10 px-2 py-0.5">
                {law.category}
              </span>
              {law.lastAmended && (
                <span className="text-[10px] text-[var(--accent-soft)]">
                  Amended {law.lastAmended}
                </span>
              )}
            </div>
            <h3 className="font-bold text-[var(--foreground)] text-sm tracking-tight">{law.topic}</h3>
            <p className="text-xs text-[var(--accent-soft)] mt-1 leading-relaxed">{law.summary}</p>
          </div>
          <svg
            className={`w-4 h-4 text-[var(--accent-soft)] shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="border-t border-[var(--border)] px-8 py-6 space-y-4 bg-[var(--muted)]/30">
          <p className="text-xs text-[var(--accent-soft)] leading-relaxed">{law.details}</p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-4">
              <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--accent-soft)] font-bold">Law</span>
              <div className="text-[var(--foreground)] font-bold mt-1 tracking-tight">{law.lawName}</div>
            </div>
            <div className="bg-white p-4">
              <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--accent-soft)] font-bold">Article</span>
              <div className="text-[var(--foreground)] mt-1">{law.article}</div>
            </div>
            {law.penaltyMax && (
              <div className="col-span-2 bg-white p-4">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--accent-soft)] font-bold">Maximum Penalty</span>
                <div className="text-[var(--highlight)] font-bold mt-1">{law.penaltyMax}</div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {law.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 bg-[var(--muted)] text-[var(--accent-soft)] font-medium border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MapPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [colorMode, setColorMode] = useState<MapColorMode>("lsi");
  const detailRef = useRef<HTMLDivElement>(null);
  const country = countries.find((c) => c.code === selectedCountry);

  const displayedCountries = countries.filter((c) => {
    const matchRegion = !selectedRegion || c.region === selectedRegion;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.nameLocal.includes(search);
    return matchRegion && matchSearch;
  });

  const groupedByRegion = displayedCountries.reduce<Record<string, CountryInfo[]>>((acc, c) => {
    if (!acc[c.region]) acc[c.region] = [];
    acc[c.region].push(c);
    return acc;
  }, {});

  const handleSelect = (code: string) => {
    setSelectedCountry(code);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
      {/* Page header */}
      <div className="mb-16">
        <div className="ll-divider mb-6" />
        <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--highlight)] font-bold block mb-4">
          <span className="text-[var(--highlight)]">01</span> -- Interactive Reference
        </span>
        <h1 className="font-bold text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight">
          Animal Protection Laws<br />by Jurisdiction
        </h1>
        <p className="text-sm text-[var(--accent-soft)] mt-4">
          {countries.length} countries -- {laws.length} laws -- {regions.length} regions
        </p>
      </div>

      {/* Interactive Map */}
      <div className="mb-16">
        {/* Map color mode toggle */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">
            Color by:
          </span>
          <button
            onClick={() => setColorMode("lsi")}
            className={`px-4 py-2 text-xs font-bold tracking-wide transition-all ${
              colorMode === "lsi"
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
            }`}
          >
            LSI Grade
          </button>
          <button
            onClick={() => setColorMode("family")}
            className={`px-4 py-2 text-xs font-bold tracking-wide transition-all ${
              colorMode === "family"
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
            }`}
          >
            Legal Family
          </button>
          {colorMode === "family" && (
            <span className="text-[10px] text-[var(--accent-soft)] ml-2">
              Zweigert &amp; Kötz taxonomy — 6 legal traditions
            </span>
          )}
        </div>
        <Suspense
          fallback={
            <div className="w-full h-[400px] border border-[var(--border)] bg-[var(--muted)] flex items-center justify-center text-[var(--accent-soft)] text-sm">
              Loading map...
            </div>
          }
        >
          <LeafletMap onCountrySelect={handleSelect} selectedCountry={selectedCountry} colorMode={colorMode} />
        </Suspense>
      </div>

      {/* Legal Personhood Section */}
      <LegalPersonhoodGlobal onCountrySelect={handleSelect} />

      {/* Two-column layout */}
      <div className="lg:grid lg:grid-cols-[360px_1fr] lg:gap-10">
        {/* Left: Country list */}
        <div className="lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-3 mb-8 lg:mb-0">
          {/* Search */}
          <div className="mb-5">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries..."
              className="w-full px-5 py-3 border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--highlight)] focus:ring-2 focus:ring-[var(--highlight)]/20 transition-all bg-white"
            />
          </div>

          {/* Region filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                !selectedRegion
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
              }`}
            >
              All ({countries.length})
            </button>
            {regions.map((r) => {
              const count = countries.filter((c) => c.region === r).length;
              return (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                    selectedRegion === r
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--muted)] text-[var(--accent-soft)] hover:bg-[var(--border)]"
                  }`}
                >
                  {r} ({count})
                </button>
              );
            })}
          </div>

          {/* Country list grouped by region */}
          <div className="space-y-6">
            {Object.entries(groupedByRegion).map(([region, regionCountries]) => (
              <div key={region}>
                <div className="text-[10px] font-bold text-[var(--accent-soft)] uppercase tracking-[0.15em] px-1 mb-3">
                  {region} ({regionCountries.length})
                </div>
                <div className="space-y-1">
                  {regionCountries.map((c) => {
                    const lawCount = laws.filter((l) => l.countryCode === c.code).length;
                    const isSelected = selectedCountry === c.code;
                    return (
                      <button
                        key={c.code}
                        onClick={() => handleSelect(c.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-all border-l-3 ${
                          isSelected
                            ? "bg-[var(--accent)] text-white border-l-[var(--highlight)]"
                            : "text-[var(--foreground)] hover:bg-[var(--muted)] border-l-transparent"
                        }`}
                      >
                        <span className={`font-mono text-[10px] tracking-wide px-1.5 py-0.5 shrink-0 ${
                          isSelected ? "bg-white/20 text-white" : "bg-[var(--muted)] text-[var(--highlight)]"
                        }`}>
                          {c.code}
                        </span>
                        <span className="flex-1 truncate font-bold tracking-tight">{c.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 ${
                          isSelected ? "bg-white/20 text-white" : "bg-[var(--muted)] text-[var(--accent-soft)]"
                        }`}>
                          {lawCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detail panel */}
        <div ref={detailRef}>
          {country ? (
            <CountryDetail country={country} />
          ) : (
            <div className="bg-white border border-[var(--border)] p-20 text-center elevation-1">
              <div className="ll-divider mx-auto mb-8" />
              <p className="font-bold text-xl text-[var(--foreground)] tracking-tight">
                Select a Jurisdiction
              </p>
              <p className="text-sm text-[var(--accent-soft)] mt-4 max-w-sm mx-auto leading-relaxed">
                Choose a country from the list or map to view its animal protection laws in detail.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
