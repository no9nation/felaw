"use client";

import { useEffect, useRef, useState } from "react";
import { countries, laws } from "@/data/laws";
import type { CountryInfo } from "@/data/laws";
import { getCountryLSI } from "@/data/lsi";
import { getLegalFamily, LEGAL_FAMILY_COLORS, LEGAL_FAMILY_DESCRIPTIONS, type LegalFamily } from "@/data/legal-families";

export type MapColorMode = "lsi" | "family";

interface LeafletMapProps {
  onCountrySelect: (code: string) => void;
  selectedCountry: string | null;
  colorMode?: MapColorMode;
}

const LSI_GRADE_COLORS: Record<string, string> = {
  A: "#1a1a2e",
  B: "#2a5aa6",
  C: "#b45309",
  D: "#ea580c",
  F: "#c8102e",
};

function getMarkerColor(code: string, mode: MapColorMode): string {
  if (mode === "family") {
    const { family } = getLegalFamily(code);
    return LEGAL_FAMILY_COLORS[family];
  }
  const lsi = getCountryLSI(code);
  const grade = lsi?.grade || "F";
  return LSI_GRADE_COLORS[grade] || "#6b7280";
}

export default function LeafletMap({ onCountrySelect, selectedCountry, colorMode = "lsi" }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load Leaflet CSS via head link
  useEffect(() => {
    if (document.querySelector('link[href*="leaflet"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    import("leaflet")
      .then((L) => {
        if (cancelled || !mapRef.current) return;

        // Fix default icon
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        const map = L.map(mapRef.current!, {
          center: [20, 0],
          zoom: 2,
          minZoom: 2,
          maxZoom: 8,
          scrollWheelZoom: true,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Add markers for each country
        countries.forEach((c) => {
          const lawCount = laws.filter((l) => l.countryCode === c.code).length;
          const lsi = getCountryLSI(c.code);
          const fillColor = getMarkerColor(c.code, colorMode);

          const marker = L.circleMarker([c.coordinates.lat, c.coordinates.lng], {
            radius: Math.max(8, Math.min(16, 6 + lawCount)),
            fillColor,
            color: "#fff",
            weight: 2,
            opacity: 1,
            fillOpacity: lsi ? 0.85 : 0.4,
          });

          marker.bindPopup(createPopupContent(c, lawCount));
          marker.on("click", () => onCountrySelect(c.code));
          marker.addTo(map);
          markersRef.current.push(marker);

          // Flag label
          const label = L.tooltip({
            permanent: true,
            direction: "center",
            className: "country-flag-label",
          });
          label.setContent(c.flag);
          label.setLatLng([c.coordinates.lat, c.coordinates.lng]);
          label.addTo(map);
          markersRef.current.push(label);
        });

        mapInstanceRef.current = map;

        // Force a resize after a short delay to ensure proper rendering
        setTimeout(() => map.invalidateSize(), 100);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load Leaflet:", err);
        setError("Failed to load map library");
      });

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [onCountrySelect]);

  // Update marker colors when colorMode changes
  useEffect(() => {
    if (!isLoaded) return;
    let markerIndex = 0;
    countries.forEach((c) => {
      const marker = markersRef.current[markerIndex];
      if (marker && marker.setStyle) {
        marker.setStyle({ fillColor: getMarkerColor(c.code, colorMode) });
      }
      markerIndex += 2; // skip flag tooltip
    });
  }, [isLoaded, colorMode]);

  // Highlight selected country and pan
  useEffect(() => {
    if (!isLoaded || !mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      const map = mapInstanceRef.current;

      // Update marker styles
      let markerIndex = 0;
      countries.forEach((c) => {
        const marker = markersRef.current[markerIndex];
        if (marker && marker.setStyle) {
          const isSelected = selectedCountry === c.code;
          marker.setStyle({
            color: isSelected ? "#000" : "#fff",
            weight: isSelected ? 3 : 2,
            fillOpacity: isSelected ? 1 : 0.8,
            radius: isSelected ? 14 : Math.max(8, Math.min(16, 6 + laws.filter((l) => l.countryCode === c.code).length)),
          });
        }
        markerIndex += 2; // skip flag tooltip
      });

      // Pan to selected
      if (selectedCountry) {
        const c = countries.find((c) => c.code === selectedCountry);
        if (c) {
          map.setView([c.coordinates.lat, c.coordinates.lng], 5, { animate: true });
        }
      }
    });
  }, [isLoaded, selectedCountry]);

  return (
    <div className="relative">
      <style>{`
        .country-flag-label {
          background: none !important;
          border: none !important;
          box-shadow: none !important;
          font-size: 16px !important;
          pointer-events: none;
        }
        .country-flag-label::before {
          display: none;
        }
      `}</style>
      <div
        ref={mapRef}
        className="w-full rounded-xl overflow-hidden border"
        style={{ height: "500px", zIndex: 0 }}
      />
      {/* Legend */}
      {isLoaded && colorMode === "lsi" && (
        <div className="absolute bottom-4 left-4 z-[1000] bg-white border border-gray-200 shadow-lg p-3 text-xs">
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">LSI Grade</div>
          <div className="space-y-1.5">
            {[
              { grade: "A", label: "≥70", color: "#1a1a2e" },
              { grade: "B", label: "55–69", color: "#2a5aa6" },
              { grade: "C", label: "40–54", color: "#b45309" },
              { grade: "D", label: "25–39", color: "#ea580c" },
              { grade: "F", label: "<25", color: "#c8102e" },
            ].map((g) => (
              <div key={g.grade} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: g.color }} />
                <span className="font-bold" style={{ color: g.color }}>{g.grade}</span>
                <span className="text-gray-500">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {isLoaded && colorMode === "family" && (
        <div className="absolute bottom-4 left-4 z-[1000] bg-white border border-gray-200 shadow-lg p-3 text-xs max-w-[200px]">
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">Legal Family</div>
          <div className="space-y-1.5">
            {(Object.entries(LEGAL_FAMILY_COLORS) as [LegalFamily, string][]).map(([family, color]) => (
              <div key={family} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: color }} />
                <span className="font-medium text-gray-700 text-[10px]">{family}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading map...
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-red-50 rounded-xl flex items-center justify-center">
          <div className="text-red-500">{error}</div>
        </div>
      )}
    </div>
  );
}

function createPopupContent(c: CountryInfo, lawCount: number): string {
  const lsi = getCountryLSI(c.code);
  const { family, note } = getLegalFamily(c.code);
  const familyColor = LEGAL_FAMILY_COLORS[family];
  const gradeColor = lsi ? (LSI_GRADE_COLORS[lsi.grade] || "#6b7280") : "#6b7280";

  return `
    <div style="min-width:200px;font-family:system-ui,sans-serif">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:28px">${c.flag}</span>
        <div>
          <div style="font-weight:700;font-size:14px">${c.name}</div>
          <div style="font-size:11px;color:#666">${c.region}</div>
        </div>
        ${lsi ? `<span style="margin-left:auto;font-size:11px;font-weight:700;color:white;background:${gradeColor};padding:2px 8px">${lsi.total} · ${lsi.grade}</span>` : ""}
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
        <span style="font-size:10px;font-weight:700;color:white;background:${familyColor};padding:2px 7px;letter-spacing:0.05em">${family}</span>
        ${note ? `<span style="font-size:10px;color:#777;font-style:italic">${note.slice(0, 50)}${note.length > 50 ? "…" : ""}</span>` : ""}
      </div>
      <div style="font-size:12px;color:#333;margin-bottom:4px">
        <strong>Main Law:</strong> ${c.mainLaw}${c.mainLawYear > 0 ? ` (${c.mainLawYear})` : ""}
      </div>
      ${lsi ? `
      <div style="margin:6px 0;background:#f4f4f6;height:4px;overflow:hidden">
        <div style="height:100%;background:${gradeColor};width:${lsi.total}%"></div>
      </div>
      <div style="font-size:10px;color:#666;margin-bottom:4px">LSI ${lsi.total}/100 · ${lsi.coveredCategories.length}/8 categories covered</div>
      ` : ""}
      <div style="font-size:11px;color:#555;margin-bottom:4px">
        ${lawCount} law ${lawCount === 1 ? "entry" : "entries"} in database
      </div>
    </div>
  `;
}
