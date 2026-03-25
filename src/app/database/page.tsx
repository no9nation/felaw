"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { laws, countries, categories, regions } from "@/data/laws";
import type { LawEntry } from "@/data/laws";
import { getLegalFamily, LEGAL_FAMILY_COLORS, type LegalFamily } from "@/data/legal-families";
import { getCountryLSI } from "@/data/lsi";
import Link from "next/link";

const LEGAL_FAMILIES: LegalFamily[] = ["Common Law", "Civil Law", "Nordic", "Mixed", "Islamic Law", "Customary"];


function exportBibTeX(data: LawEntry[]) {
  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 30);
  const entries = data.map((l) => {
    const id = `law-${l.countryCode}-${slug(l.category)}-${slug(l.topic)}`;
    const title = [l.lawName, l.article].filter(Boolean).join(", ");
    const note = `Animal protection legislation, ${l.country}. Category: ${l.category}. ${l.summary}`;
    return [
      `@misc{felaws_${id},`,
      `  title        = {${title}},`,
      `  author       = {Fe Laws Database},`,
      `  year         = {${l.year || ""}},`,
      `  note         = {${note}},`,
      `  howpublished = {\\url{https://felaws.vercel.app/database#${id}}}`,
      `}`,
    ].join("\n");
  });

  const bib = entries.join("\n\n");
  const blob = new Blob([bib], { type: "text/plain;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "felaws-bibliography.bib";
  a.click();
  URL.revokeObjectURL(url);
}

function exportCSV(data: LawEntry[]) {
  const headers = ["Country", "Country Code", "Legal Family", "LSI Total", "LSI Grade", "Category", "Topic", "Summary", "Law Name", "Article", "Year", "Last Amended", "Penalty Min", "Penalty Max", "Tags"];
  const escape = (s: string) => `"${s.replace(/"/g, '""')}"`;
  const rows = data.map((l) => {
    const { family } = getLegalFamily(l.countryCode);
    const lsi = getCountryLSI(l.countryCode);
    return [
      escape(l.country), l.countryCode, escape(family),
      String(lsi?.total ?? ""), String(lsi?.grade ?? ""),
      escape(l.category), escape(l.topic),
      escape(l.summary), escape(l.lawName), escape(l.article),
      String(l.year || ""), String(l.lastAmended || ""), escape(l.penaltyMin || ""), escape(l.penaltyMax || ""),
      escape(l.tags.join("; ")),
    ].join(",");
  });

  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `felaws-export-${data.length}-entries.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function DatabasePage() {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedFamily, setSelectedFamily] = useState<string>("");
  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");
  const [penaltyFilter, setPenaltyFilter] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;

  const filteredCountries = selectedRegion
    ? countries.filter((c) => c.region === selectedRegion)
    : countries;

  const filtered = useMemo(() => {
    let result = laws;
    if (selectedRegion) {
      const regionCodes = countries.filter((c) => c.region === selectedRegion).map((c) => c.code);
      result = result.filter((l) => regionCodes.includes(l.countryCode));
    }
    if (selectedFamily) {
      result = result.filter((l) => getLegalFamily(l.countryCode).family === selectedFamily);
    }
    if (selectedCountry) {
      result = result.filter((l) => l.countryCode === selectedCountry);
    }
    if (selectedCategory) {
      result = result.filter((l) => l.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (l) =>
          l.summary.toLowerCase().includes(q) ||
          l.details.toLowerCase().includes(q) ||
          l.topic.toLowerCase().includes(q) ||
          l.lawName.toLowerCase().includes(q) ||
          l.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (yearFrom) {
      const from = parseInt(yearFrom, 10);
      if (!isNaN(from)) result = result.filter((l) => l.year >= from);
    }
    if (yearTo) {
      const to = parseInt(yearTo, 10);
      if (!isNaN(to)) result = result.filter((l) => l.year > 0 && l.year <= to);
    }
    if (penaltyFilter === "imprisonment") {
      result = result.filter((l) => {
        const pm = (l.penaltyMax || "").toLowerCase();
        return pm.includes("year") || pm.includes("imprisonment");
      });
    } else if (penaltyFilter === "fine") {
      result = result.filter((l) => {
        const pm = (l.penaltyMax || "").toLowerCase();
        return pm.includes("fine") || pm.includes("$") || pm.includes("\u00a5") || pm.includes("\u20ac") || pm.includes("won");
      });
    } else if (penaltyFilter === "none") {
      result = result.filter((l) => !l.penaltyMin && !l.penaltyMax);
    }
    if (tagFilter.trim()) {
      const tf = tagFilter.toLowerCase();
      result = result.filter((l) => l.tags.some((t) => t.toLowerCase().includes(tf)));
    }
    // Sorting
    if (sortBy === "year-desc") {
      result = [...result].sort((a, b) => b.year - a.year);
    } else if (sortBy === "year-asc") {
      result = [...result].sort((a, b) => a.year - b.year);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.country.localeCompare(b.country));
    }
    return result;
  }, [query, selectedCountry, selectedCategory, selectedRegion, yearFrom, yearTo, penaltyFilter, tagFilter, sortBy]);

  // Read URL params on mount (yearFrom, category, country) for deep-linking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const yr = params.get("yearFrom");
    if (yr) { setYearFrom(yr); setShowAdvanced(true); }
    const cat = params.get("category");
    if (cat && categories.includes(cat as typeof categories[0])) setSelectedCategory(cat);
    const ctry = params.get("country");
    if (ctry && countries.some((c) => c.code === ctry)) setSelectedCountry(ctry);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Permalink: auto-expand law from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#law-")) {
      const lawId = hash.slice(1); // "law-XX-category-topic"
      const target = laws.find((l) => generateLawId(l) === lawId);
      if (target) {
        setExpandedId(target.id);
        // Find which page this law is on in the unfiltered list
        const idx = laws.indexOf(target);
        const targetPage = Math.floor(idx / PAGE_SIZE) + 1;
        setPage(targetPage);
        // Scroll to it after render
        setTimeout(() => {
          document.getElementById(lawId)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const hasFilters = query || selectedCountry || selectedCategory || selectedRegion || selectedFamily || yearFrom || yearTo || penaltyFilter || tagFilter || sortBy !== "default";
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
      {/* Header */}
      <div className="mb-16">
        <div className="ll-divider mb-6" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-4 tracking-tight">
              Legislative Database
            </h1>
            <p className="text-[var(--accent-soft)] text-base leading-relaxed max-w-[640px]">
              {laws.length} entries across {countries.length} jurisdictions in {regions.length} regions.
            </p>
          </div>
          <button
            onClick={() => exportCSV(laws)}
            className="shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-2 border border-[var(--border)] text-[var(--accent-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            title="Download all entries as CSV"
          >
            ↓ Full Dataset ({laws.length} entries)
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <div className="bg-white elevation-1 border border-[var(--border)] p-6 sm:p-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="search" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Keyword or phrase"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] placeholder:text-[var(--accent-soft)]/40 focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
              Region
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => { setSelectedRegion(e.target.value); setSelectedCountry(""); setPage(1); }}
              className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <option value="">All Regions</option>
              {regions.map((r) => (<option key={r} value={r}>{r}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="country" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
              Jurisdiction
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => { setSelectedCountry(e.target.value); setPage(1); }}
              className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <option value="">All Jurisdictions</option>
              {filteredCountries.map((c) => (<option key={c.code} value={c.code}>{c.name}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value); setPage(1); }}
              className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
            </select>
          </div>
        </div>

        {/* Advanced Filters Toggle & Section */}
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="inline-flex items-center gap-1.5 text-[12px] tracking-wider uppercase font-medium text-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors"
          >
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Advanced Filters
          </button>
          {(yearFrom || yearTo || penaltyFilter || tagFilter || sortBy !== "default" || selectedFamily) && (
            <span className="text-[11px] text-[var(--highlight)] font-semibold">Active</span>
          )}
        </div>

        {showAdvanced && (
          <div className="mt-5 pt-5 border-t border-dashed border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Legal Family */}
            <div>
              <label htmlFor="legalFamily" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
                Legal Family
              </label>
              <select
                id="legalFamily"
                value={selectedFamily}
                onChange={(e) => { setSelectedFamily(e.target.value); setPage(1); }}
                className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <option value="">All Legal Families</option>
                {LEGAL_FAMILIES.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Year Range */}
            <div>
              <label className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
                Year Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="From"
                  value={yearFrom}
                  onChange={(e) => { setYearFrom(e.target.value); setPage(1); }}
                  className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] placeholder:text-[var(--accent-soft)]/40 focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors"
                />
                <span className="text-[var(--accent-soft)] text-sm shrink-0">&ndash;</span>
                <input
                  type="number"
                  placeholder="To"
                  value={yearTo}
                  onChange={(e) => { setYearTo(e.target.value); setPage(1); }}
                  className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] placeholder:text-[var(--accent-soft)]/40 focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors"
                />
              </div>
            </div>

            {/* Penalty Filter */}
            <div>
              <label htmlFor="penalty" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
                Penalty
              </label>
              <select
                id="penalty"
                value={penaltyFilter}
                onChange={(e) => { setPenaltyFilter(e.target.value); setPage(1); }}
                className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <option value="">All Penalties</option>
                <option value="imprisonment">Has imprisonment</option>
                <option value="fine">Has fine</option>
                <option value="none">No penalty specified</option>
              </select>
            </div>

            {/* Tag Filter */}
            <div>
              <label htmlFor="tagFilter" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
                Tag
              </label>
              <input
                id="tagFilter"
                type="text"
                placeholder="Filter by tag..."
                value={tagFilter}
                onChange={(e) => { setTagFilter(e.target.value); setPage(1); }}
                className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] placeholder:text-[var(--accent-soft)]/40 focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors"
              />
            </div>

            {/* Sort */}
            <div>
              <label htmlFor="sortBy" className="block text-[12px] tracking-wider uppercase text-[var(--accent-soft)] mb-2 font-medium">
                Sort By
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                className="w-full px-3.5 py-2.5 border border-[var(--border)] text-sm bg-white text-[var(--accent)] focus:outline-none focus:ring-0 focus:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <option value="default">Default (by country)</option>
                <option value="year-desc">By year (newest first)</option>
                <option value="year-asc">By year (oldest first)</option>
                <option value="name">By country name A-Z</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-[var(--border)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--accent-soft)]">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              {filtered.length < laws.length && ` of ${laws.length}`}
            </span>
            {/* Active filter chips */}
            {selectedRegion && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5">
                {selectedRegion}
                <button onClick={() => { setSelectedRegion(""); setPage(1); }} className="hover:text-[var(--highlight)]">&times;</button>
              </span>
            )}
            {selectedCountry && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5">
                {countries.find((c) => c.code === selectedCountry)?.name || selectedCountry}
                <button onClick={() => { setSelectedCountry(""); setPage(1); }} className="hover:text-[var(--highlight)]">&times;</button>
              </span>
            )}
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5">
                {selectedCategory}
                <button onClick={() => { setSelectedCategory(""); setPage(1); }} className="hover:text-[var(--highlight)]">&times;</button>
              </span>
            )}
            {selectedFamily && (
              <span
                className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5"
                style={{
                  background: LEGAL_FAMILY_COLORS[selectedFamily as LegalFamily] + "18",
                  color: LEGAL_FAMILY_COLORS[selectedFamily as LegalFamily],
                }}
              >
                {selectedFamily}
                <button onClick={() => { setSelectedFamily(""); setPage(1); }} className="opacity-70 hover:opacity-100">&times;</button>
              </span>
            )}
            {query && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5">
                &ldquo;{query}&rdquo;
                <button onClick={() => { setQuery(""); setPage(1); }} className="hover:text-[var(--highlight)]">&times;</button>
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => exportCSV(filtered)}
              className="text-sm text-[var(--accent-soft)] hover:text-[var(--accent)] font-medium transition-colors flex items-center gap-1.5"
              title="Export current results as CSV"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={() => exportBibTeX(filtered)}
              className="text-sm text-[var(--accent-soft)] hover:text-[var(--accent)] font-medium transition-colors flex items-center gap-1.5"
              title="Export current results as BibTeX"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              BibTeX
            </button>
            {/* View mode toggle */}
            <div className="flex border border-[var(--border)] text-[11px] font-bold">
              <button
                onClick={() => setViewMode("card")}
                className={`px-3 py-1.5 transition-colors ${viewMode === "card" ? "bg-[var(--accent)] text-white" : "text-[var(--accent-soft)] hover:text-[var(--accent)]"}`}
                title="Card view"
              >☰ Cards</button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 border-l border-[var(--border)] transition-colors ${viewMode === "table" ? "bg-[var(--accent)] text-white" : "text-[var(--accent-soft)] hover:text-[var(--accent)]"}`}
                title="Table view"
              >⊟ Table</button>
            </div>
            {hasFilters && (
              <button
                onClick={() => { setQuery(""); setSelectedCountry(""); setSelectedCategory(""); setSelectedRegion(""); setSelectedFamily(""); setYearFrom(""); setYearTo(""); setPenaltyFilter(""); setTagFilter(""); setSortBy("default"); setPage(1); }}
                className="text-sm text-[var(--highlight)] hover:text-[var(--highlight-soft)] font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-28 text-center">
          <p className="text-[var(--accent-soft)] text-sm mb-1">No results found</p>
          <p className="text-[var(--accent-soft)]/60 text-sm">
            Adjust your search or filters to continue.
          </p>
        </div>
      ) : (
        <>
          {viewMode === "table" ? (
            <div className="overflow-x-auto border border-[var(--border)]">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b-[3px] border-b-[var(--highlight)] bg-[var(--muted)]">
                    <th className="text-left py-3 px-4 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Country</th>
                    <th className="text-left py-3 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden xl:table-cell">Legal Family</th>
                    <th className="text-left py-3 px-4 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Category</th>
                    <th className="text-left py-3 px-4 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Topic</th>
                    <th className="text-left py-3 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Law Name</th>
                    <th className="text-center py-3 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden sm:table-cell">Year</th>
                    <th className="text-left py-3 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell">Penalty (Max)</th>
                  </tr>
                </thead>
                <tbody>
                  {paged.map((law) => (
                    <tr
                      key={law.id}
                      onClick={() => { setViewMode("card"); setExpandedId(law.id); }}
                      className="border-b border-[var(--border)] hover:bg-[var(--muted)] cursor-pointer transition-colors"
                      title="Click to expand in card view"
                    >
                      <td className="py-2.5 px-4">
                        <Link href={`/country/${law.countryCode}`} onClick={(e) => e.stopPropagation()} className="font-bold text-[var(--accent)] hover:text-[var(--highlight)] transition-colors">
                          {law.countryCode}
                        </Link>
                      </td>
                      <td className="py-2.5 px-3 hidden xl:table-cell">
                        {(() => {
                          const { family } = getLegalFamily(law.countryCode);
                          const color = LEGAL_FAMILY_COLORS[family];
                          return (
                            <span
                              className="text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-[0.08em] whitespace-nowrap"
                              style={{ color, background: color + "15" }}
                            >
                              {family}
                            </span>
                          );
                        })()}
                      </td>
                      <td className="py-2.5 px-4 text-[var(--accent-soft)]">
                        <span className="text-[9px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5">
                          {law.category.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-[var(--accent)] font-medium max-w-xs">
                        <span className="line-clamp-1">{law.topic}</span>
                      </td>
                      <td className="py-2.5 px-3 text-[var(--accent-soft)] hidden md:table-cell max-w-[180px]">
                        <span className="line-clamp-1">{law.lawName}</span>
                      </td>
                      <td className="py-2.5 px-3 text-center text-[var(--accent-soft)] font-mono hidden sm:table-cell">
                        {law.year || "—"}
                      </td>
                      <td className="py-2.5 px-3 text-[var(--accent-soft)] hidden lg:table-cell max-w-[160px]">
                        <span className="line-clamp-1">{law.penaltyMax || "—"}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-2 bg-[var(--muted)] border-t border-[var(--border)] text-[10px] text-[var(--accent-soft)]">
                Click any row to open full details in card view
              </div>
            </div>
          ) : (
          <div className="border-t border-[var(--border)]">
            {paged.map((law) => (
              <DatabaseRow
                key={law.id}
                law={law}
                expanded={expandedId === law.id}
                onToggle={() => setExpandedId(expandedId === law.id ? null : law.id)}
              />
            ))}
          </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
              <span className="text-[13px] text-[var(--accent-soft)]">
                Showing {(page - 1) * PAGE_SIZE + 1}--{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
              </span>
              <div className="flex gap-0">
                <button
                  onClick={() => { setPage(Math.max(1, page - 1)); setExpandedId(null); }}
                  disabled={page === 1}
                  className="px-4 py-2 text-xs font-bold border border-[var(--border)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--muted)]"
                >
                  Previous
                </button>
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  let p: number;
                  if (totalPages <= 7) {
                    p = i + 1;
                  } else if (page <= 4) {
                    p = i + 1;
                  } else if (page >= totalPages - 3) {
                    p = totalPages - 6 + i;
                  } else {
                    p = page - 3 + i;
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => { setPage(p); setExpandedId(null); }}
                      className={`px-4 py-2 text-xs font-bold border border-l-0 border-[var(--border)] transition-colors ${
                        page === p
                          ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                          : "hover:bg-[var(--muted)] text-[var(--accent-soft)]"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
                <button
                  onClick={() => { setPage(Math.min(totalPages, page + 1)); setExpandedId(null); }}
                  disabled={page === totalPages}
                  className="px-4 py-2 text-xs font-bold border border-l-0 border-[var(--border)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--muted)]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Generate a stable, URL-safe ID for a law entry */
function generateLawId(law: LawEntry): string {
  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 30);
  return `law-${law.countryCode}-${slug(law.category)}-${slug(law.topic)}`;
}

/** Generate academic citation (Bluebook-style) */
function generateCitation(law: LawEntry): string {
  const parts = [law.lawName];
  if (law.article) parts.push(law.article);
  if (law.year > 0) parts.push(`(${law.country}, ${law.year})`);
  else parts.push(`(${law.country})`);
  if (law.lastAmended) parts.push(`(as amended ${law.lastAmended})`);
  return parts.join(", ");
}

function DatabaseRow({ law, expanded, onToggle }: { law: LawEntry; expanded: boolean; onToggle: () => void }) {
  const country = countries.find((c) => c.code === law.countryCode);
  const [copied, setCopied] = useState<"cite" | "link" | null>(null);
  const lawId = generateLawId(law);
  const { family } = getLegalFamily(law.countryCode);
  const familyColor = LEGAL_FAMILY_COLORS[family];

  const copyToClipboard = useCallback((text: string, type: "cite" | "link") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  return (
    <div id={lawId} className={`bg-white border-b border-[var(--border)] transition-colors ${expanded ? "" : "hover:bg-[var(--muted)]"}`}>
      <button onClick={onToggle} className="w-full text-left px-6 py-5 transition-colors">
        <div className="flex items-start gap-6">
          <Link
            href={`/country/${law.countryCode}`}
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] tracking-[0.12em] uppercase text-[var(--accent-soft)] font-semibold shrink-0 w-10 pt-1 text-center hover:text-[var(--highlight)] transition-colors"
          >
            {country?.code || law.countryCode}
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <span className="text-[12px] font-bold tracking-wider uppercase text-[var(--highlight)]">
                {law.category}
              </span>
              <span className="text-[11px] text-[var(--accent-soft)]">{law.country}</span>
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-[0.1em]"
                style={{ color: familyColor, background: familyColor + "15", border: `1px solid ${familyColor}35` }}
              >
                {family}
              </span>
              {law.lastAmended && (
                <span className="text-[11px] text-[var(--accent-soft)]">Amended {law.lastAmended}</span>
              )}
            </div>
            <h3 className="font-semibold text-[var(--accent)] text-sm leading-snug">{law.topic}</h3>
            <p className="text-sm text-[var(--accent-soft)] mt-1.5 line-clamp-1 leading-relaxed">{law.summary}</p>
          </div>
          <svg
            className={`w-4 h-4 text-[var(--accent-soft)] shrink-0 mt-1.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="border-t border-[var(--border)] mx-6 px-0 py-6 ml-[64px] space-y-6">
          <p className="text-sm text-[var(--accent-soft)] leading-[1.8] max-w-[640px]">{law.details}</p>
          <div className="bg-[var(--muted)] border border-[var(--border)] p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-sm">
              <div>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">Law</span>
                <p className="text-[var(--accent)] mt-1">{law.lawName}</p>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">Article</span>
                <p className="text-[var(--accent)] mt-1">{law.article}</p>
              </div>
              {law.year > 0 && (
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">Enacted</span>
                  <p className="text-[var(--accent)] mt-1">{law.year}</p>
                </div>
              )}
              {law.penaltyMax && (
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">Maximum Penalty</span>
                  <p className="text-[var(--accent)] font-bold mt-1">{law.penaltyMax}</p>
                </div>
              )}
            </div>
          </div>

          {/* Citation & Permalink */}
          <div className="bg-white border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Citation</div>
            <p className="text-xs text-[var(--accent)] font-mono leading-relaxed mb-3">
              {generateCitation(law)}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => copyToClipboard(generateCitation(law), "cite")}
                className="text-[11px] font-bold text-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied === "cite" ? "Copied!" : "Copy Citation"}
              </button>
              <button
                onClick={() => {
                  const url = `${window.location.origin}/database#${lawId}`;
                  copyToClipboard(url, "link");
                  window.history.replaceState(null, "", `#${lawId}`);
                }}
                className="text-[11px] font-bold text-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {copied === "link" ? "Copied!" : "Permalink"}
              </button>
            </div>
          </div>

          {law.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {law.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-[11px] px-2.5 py-1 bg-[var(--muted)] border border-[var(--border)] text-[var(--accent-soft)] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
