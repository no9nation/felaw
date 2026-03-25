import type { Metadata } from "next";
import { countries, laws } from "@/data/laws";
import { getCountryLSI } from "@/data/lsi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const upperCode = code.toUpperCase();
  const country = countries.find((c) => c.code === upperCode);

  if (!country) {
    return { title: "Country Not Found — Fe Laws" };
  }

  const lsi = getCountryLSI(upperCode);
  const lawCount = laws.filter((l) => l.countryCode === upperCode).length;

  return {
    title: `${country.name} — Animal Protection Law Profile`,
    description: `${country.name} animal protection legislation: LSI ${lsi?.total || 0}/100 (Grade ${lsi?.grade || "N/A"}). ${lawCount} law entries across ${lsi?.coveredCategories.length || 0} categories. Region: ${country.region}.`,
    openGraph: {
      title: `${country.name} — Animal Protection Law | Fe Laws`,
      description: `LSI Score: ${lsi?.total || 0}/100 · Grade ${lsi?.grade || "N/A"} · ${lawCount} legislative entries`,
    },
  };
}

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
