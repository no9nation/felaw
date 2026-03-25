export type LandmarkCaseEra = "ancient" | "medieval" | "early-modern" | "modern";

export interface LandmarkCase {
  id: string;
  countryCode: string;   // ISO-3166 alpha-2; for ancient cases, modern code of the region
  year: number;          // CE year; negative = BCE (e.g. -1754 = 1754 BCE)
  title: string;
  court: string;         // issuing body / civilization for ancient cases
  summary: string;       // 2-3 sentence description of what happened
  significance: string;  // 1-2 sentences on why this matters globally / for researchers
  citation: string;      // formal legal citation / scholarly reference if available
  type: "case" | "constitutional" | "legislation" | "guideline" | "treaty" | "ancient";
  tags: string[];        // e.g. ["personhood", "wildlife", "sentience", "rights of nature"]
  era?: LandmarkCaseEra; // period classification; omitted = "modern"
  civilization?: string; // for ancient/medieval cases: "Mesopotamia", "Roman Republic", etc.
}

export const landmarkCases: LandmarkCase[] = [
  // Ecuador
  {
    id: "ec-pachamama-2008",
    countryCode: "EC",
    year: 2008,
    title: "Rights of Nature — Constitutional Recognition",
    court: "Constituent Assembly of Ecuador",
    summary: "Ecuador became the first country in the world to enshrine the Rights of Nature (Derechos de la Naturaleza / Pachamama) in its Constitution. Articles 71–74 grant nature the right to exist, be maintained, and regenerate its vital cycles. Any person may petition on behalf of nature.",
    significance: "First constitutional rights of nature framework globally. Cited in subsequent rights of nature litigation in Colombia, Bangladesh, and India as foundational precedent.",
    citation: "Constitución de la República del Ecuador, Arts. 71–74 (2008)",
    type: "constitutional",
    tags: ["rights of nature", "personhood", "constitution"],
  },

  // Colombia
  {
    id: "co-chucho-2020",
    countryCode: "CO",
    year: 2020,
    title: "Chucho the Bear — Habeas Corpus",
    court: "Constitutional Court of Colombia (SU-016/2020)",
    summary: "The Colombian Constitutional Court issued an historic ruling recognizing animals as 'sentient subjects of rights' rather than mere objects. While ultimately denying the specific habeas corpus petition for Chucho the spectacled bear, the Court established that animals have constitutionally protectable interests.",
    significance: "Landmark recognition of animals as 'sujetos de derechos' (subjects of rights). Widely cited across Latin American animal law scholarship and directly influenced subsequent legislative reforms.",
    citation: "Corte Constitucional de Colombia, Sentencia SU-016/2020",
    type: "case",
    tags: ["personhood", "sentience", "habeas corpus"],
  },
  {
    id: "co-atrato-2016",
    countryCode: "CO",
    year: 2016,
    title: "Atrato River — Rights of Nature",
    court: "Constitutional Court of Colombia (T-622/2016)",
    summary: "The Constitutional Court ruled that the Atrato River has rights to protection, conservation, maintenance, and restoration. The State and communities are designated as guardians of the river. This extended rights-of-nature doctrine to water bodies.",
    significance: "Part of a contemporaneous global movement alongside New Zealand's Whanganui River legislation (2017). Established the 'biocultural rights' framework linking Indigenous communities and nature, influencing subsequent river-rights cases in India, Bangladesh, and Ecuador.",
    citation: "Corte Constitucional de Colombia, Sentencia T-622/2016",
    type: "case",
    tags: ["rights of nature", "river rights", "indigenous", "environment"],
  },

  // Argentina
  {
    id: "ar-sandra-2014",
    countryCode: "AR",
    year: 2014,
    title: "Sandra the Orangutan — Non-Human Person",
    court: "Court of Criminal Appeals, Buenos Aires (CIJ 65112/2013/0)",
    summary: "A Buenos Aires court recognized Sandra, an orangutan at the Buenos Aires Zoo, as a 'non-human person' with the right to bodily freedom, ordering her transfer to a sanctuary. The ruling applied habeas corpus to a non-human animal for the first time in Argentina.",
    significance: "First successful habeas corpus for a great ape in Latin America. Directly triggered legislative reform and became the most cited animal personhood case globally.",
    citation: "Cámara Federal de Casación Penal, CIJ 65112/2013/0 (2014)",
    type: "case",
    tags: ["personhood", "habeas corpus", "great apes", "sentience"],
  },

  // India
  {
    id: "in-peta-2014",
    countryCode: "IN",
    year: 2014,
    title: "Animals as Legal Persons — Supreme Court Recognition",
    court: "Supreme Court of India",
    summary: "The Supreme Court recognized all members of the animal kingdom as 'legal persons' with a right to dignified existence, building on the Prevention of Cruelty to Animals Act. The Court declared that animals have fundamental rights analogous to human constitutional rights in terms of judicial protection.",
    significance: "Extends the Indian constitutional framework to animals. Frequently cited in South Asian legal scholarship on animal rights. Established a jurisprudence of animal dignity under Indian law.",
    citation: "People for Ethical Treatment of Animals (PETA) India v. Union of India, MANU/SC/0814/2014 (S.C. India)",
    type: "case",
    tags: ["personhood", "legal person", "constitutional", "dignity"],
  },
  {
    id: "in-jallikattu-2014",
    countryCode: "IN",
    year: 2014,
    title: "Jallikattu Ban — Animal Dignity",
    court: "Supreme Court of India",
    summary: "The Supreme Court banned Jallikattu (bull-taming sport) as cruel to animals under the Prevention of Cruelty to Animals Act, affirming that cultural practices cannot override animal welfare legislation. The ruling was later partially overturned by Tamil Nadu legislation in 2017.",
    significance: "Important case on the conflict between cultural rights and animal welfare law. Shows how legislative processes interact with judicial decisions in animal protection.",
    citation: "Animal Welfare Board of India v. A. Nagaraja, (2014) 7 SCC 547",
    type: "case",
    tags: ["cruelty", "cultural rights", "welfare", "sport"],
  },

  // New Zealand
  {
    id: "nz-whanganui-2017",
    countryCode: "NZ",
    year: 2017,
    title: "Whanganui River — Legal Personhood",
    court: "Parliament of New Zealand",
    summary: "New Zealand Parliament passed the Te Awa Tupua (Whanganui River Claims Settlement) Act 2017, recognizing the Whanganui River as a legal person (Te Awa Tupua) with the rights, powers, duties, and liabilities of a legal person. Two guardians — one Crown, one Māori — represent the river.",
    significance: "First river in the world to receive legal personhood through legislation rather than court order. Model for rights of nature legislation internationally.",
    citation: "Te Awa Tupua (Whanganui River Claims Settlement) Act 2017 (NZ)",
    type: "legislation",
    tags: ["rights of nature", "river rights", "personhood", "indigenous"],
  },

  // Germany
  {
    id: "de-constitution-2002",
    countryCode: "DE",
    year: 2002,
    title: "Animal Protection in Basic Law (Tierschutz)",
    court: "German Bundestag / Federal Constitution",
    summary: "Germany amended Article 20a of the Basic Law (Grundgesetz) to include animal protection as a state goal: 'The state shall protect the natural foundations of life and animals.' This made Germany the first EU member state with a constitutional animal protection clause.",
    significance: "Model constitutional amendment. The 'Würde der Kreatur' (dignity of the creature) framework influenced Swiss law and EU Treaty debates on animal sentience.",
    citation: "Grundgesetz Art. 20a (as amended, 2002)",
    type: "constitutional",
    tags: ["constitution", "state goal", "dignity", "EU"],
  },

  // France
  {
    id: "fr-civil-code-2015",
    countryCode: "FR",
    year: 2015,
    title: "Animals as Sentient Beings — Civil Code Reform",
    court: "French Legislature",
    summary: "France amended Article 515-14 of the Civil Code to reclassify animals from 'movable property' to 'living beings endowed with sentience' (êtres vivants doués de sensibilité). While animals remain subject to property law in most respects, their sentient nature must now be considered.",
    significance: "Represents the EU mainstream trend following the Treaty of Lisbon Protocol on animal sentience. Shows how existing property-law frameworks can be modified without full rights recognition.",
    citation: "Code civil, Art. 515-14 (as amended by Loi n° 2015-177, 2015)",
    type: "legislation",
    tags: ["sentience", "civil code", "property law", "EU"],
  },

  // Spain
  {
    id: "es-sentient-2021",
    countryCode: "ES",
    year: 2021,
    title: "Animals as Sentient Beings — Civil Code Amendment",
    court: "Spanish Legislature",
    summary: "Spain amended its Civil Code and related legislation to recognize animals as 'sentient beings' rather than objects. The reform prohibits seizing animals in divorce proceedings as if they were property and requires courts to consider animals' welfare in custody disputes.",
    significance: "Goes further than France's 2015 reform by applying sentience recognition directly to family law proceedings. Cited as a model for practical implementation of sentience doctrine.",
    citation: "Ley 17/2021, de 15 de diciembre, de modificación del Código Civil (Spain)",
    type: "legislation",
    tags: ["sentience", "civil code", "family law", "welfare"],
  },

  // Switzerland
  {
    id: "ch-dignity-1992",
    countryCode: "CH",
    year: 1992,
    title: "Würde der Kreatur — Dignity of the Creature",
    court: "Swiss Federal Constitution",
    summary: "Switzerland's Federal Constitution recognized the 'Würde der Kreatur' (dignity of the creature) in Art. 120 on genetic engineering, later expanded to general constitutional status. Switzerland also enacted some of the world's most detailed animal welfare laws and is the only country with a right to a defense lawyer for animals.",
    significance: "The concept of 'creature dignity' is philosophically distinct from 'sentience' and influenced EU and German law. Switzerland's animal lawyer system is a unique institutional mechanism worth studying.",
    citation: "Bundesverfassung Art. 120 (1992); Tierschutzgesetz (2005, as amended)",
    type: "constitutional",
    tags: ["dignity", "constitution", "welfare", "animal lawyer"],
  },

  // Bangladesh
  {
    id: "bd-turag-2019",
    countryCode: "BD",
    year: 2019,
    title: "Turag River — Legal Person Status",
    court: "High Court Division, Bangladesh (Writ Petition No. 13989/2016)",
    summary: "The Bangladesh High Court declared the Turag River, and by extension all rivers of Bangladesh, to be legal persons with full rights accorded to living persons. The court directed the National River Conservation Commission to act as guardian.",
    significance: "Extended the rights-of-nature model to a developing-country context. Showed that river personhood can be judicially recognized without dedicated legislation.",
    citation: "Bangladesh Environmental Lawyers Association (BELA) v. Bangladesh, Writ Petition No. 13989/2016 (H.C. Div. 2019)",
    type: "case",
    tags: ["rights of nature", "river rights", "personhood", "water"],
  },

  // Bolivia
  {
    id: "bo-mother-earth-2010",
    countryCode: "BO",
    year: 2010,
    title: "Law of Mother Earth (Ley de la Madre Tierra)",
    court: "Plurinational Legislative Assembly of Bolivia",
    summary: "Bolivia enacted the Law of the Rights of Mother Earth (Law No. 071, 2010), recognizing nature as a legal subject with seven fundamental rights including the right to life, diversity, water, clean air, equilibrium, and regeneration. A follow-up law in 2012 created enforcement mechanisms.",
    significance: "First national legislation creating a comprehensive framework of nature's rights. Grounded in indigenous Andean cosmology (Pachamama). Influenced subsequent Latin American constitutional debates.",
    citation: "Ley de Derechos de la Madre Tierra, Ley No. 071 (Bolivia, 2010)",
    type: "legislation",
    tags: ["rights of nature", "mother earth", "indigenous", "constitution"],
  },

  // Pakistan
  {
    id: "pk-islamabad-2020",
    countryCode: "PK",
    year: 2020,
    title: "Islamabad Wildlife — Animal Personhood",
    court: "Islamabad High Court",
    summary: "The Islamabad High Court ruled that a captive elephant (Kaavan) should be transferred to a sanctuary and declared that animals have an 'intrinsic worth' beyond their instrumental value to humans. The court recognized that animals are 'legal persons' for the purpose of seeking judicial protection.",
    significance: "Landmark in South Asian animal law. Led to Kaavan's relocation to Cambodia and prompted legislative discussion on animal welfare reform in Pakistan.",
    citation: "PAWS v. Federation of Pakistan, Islamabad High Court (W.P. 1155/2019, 2020)",
    type: "case",
    tags: ["personhood", "captivity", "habeas corpus", "welfare"],
  },

  // UK
  {
    id: "gb-sentience-2022",
    countryCode: "GB",
    year: 2022,
    title: "Animal Welfare (Sentience) Act 2022",
    court: "UK Parliament",
    summary: "The UK enacted the Animal Welfare (Sentience) Act 2022, creating a Committee on Animal Sentience with authority to report on whether government policies have had an adverse effect on the welfare of sentient animals. The Act formally recognized vertebrates (and some invertebrates: crustaceans and cephalopods) as sentient.",
    significance: "Post-Brexit legislation extending sentience recognition beyond the EU framework. Unique in creating an institutional oversight mechanism for sentience impacts on policy.",
    citation: "Animal Welfare (Sentience) Act 2022 (UK)",
    type: "legislation",
    tags: ["sentience", "policy", "invertebrates", "governance"],
  },

  // US
  {
    id: "us-nhrap-tommy-2014",
    countryCode: "US",
    year: 2014,
    title: "Tommy the Chimpanzee — Habeas Corpus Denied",
    court: "New York Appellate Division",
    summary: "The Nonhuman Rights Project (NhRP) petitioned for habeas corpus on behalf of Tommy, a chimpanzee kept in a cage in New York. The Appellate Division denied the petition, ruling that rights require reciprocal duties and chimpanzees cannot bear responsibilities. The case sparked national debate.",
    significance: "The most significant US test case for animal personhood. The NhRP's ongoing litigation strategy has kept the question of great ape legal status before US courts. Justice Fahey's concurrence acknowledged the fundamental question deserves serious consideration.",
    citation: "People ex rel. Nonhuman Rights Project v. Lavery, 124 A.D.3d 148 (App.Div. 2014)",
    type: "case",
    tags: ["personhood", "habeas corpus", "chimpanzee", "great apes"],
  },

  // EU
  {
    id: "eu-lisbon-2009",
    countryCode: "EU",
    year: 2009,
    title: "Treaty of Lisbon — Animal Sentience Protocol",
    court: "European Union",
    summary: "The Treaty of Lisbon's Protocol No. 33 on animal welfare (and subsequent TFEU Article 13) requires EU institutions and Member States to pay full regard to the welfare requirements of animals as sentient beings when formulating agriculture, fisheries, transport, internal market, research, and technological development policies.",
    significance: "The EU-level sentience recognition that influenced all 27 member states. Creates a legal obligation to consider animal welfare in all relevant policy areas — the widest jurisdictional scope of any sentience recognition.",
    citation: "Treaty on the Functioning of the European Union, Art. 13 (2009/C 115/01)",
    type: "treaty",
    tags: ["sentience", "EU", "treaty", "policy"],
  },

  // Australia
  {
    id: "au-rspca-1979",
    countryCode: "AU",
    year: 1979,
    title: "Animal Welfare Act Framework (NSW)",
    court: "New South Wales Parliament",
    summary: "New South Wales enacted the Prevention of Cruelty to Animals Act 1979, which along with similar legislation in other states created Australia's state-level animal welfare framework. The 2020 Select Committee on Animal Cruelty Laws recommended significant strengthening of penalties and enforcement.",
    significance: "Key example of a federal system where sub-national (state) legislation governs animal welfare. Shows how federal systems can develop divergent protection standards across jurisdictions.",
    citation: "Prevention of Cruelty to Animals Act 1979 (NSW, Australia)",
    type: "legislation",
    tags: ["cruelty", "federal", "state law", "welfare"],
  },

  // Brazil
  {
    id: "br-constitution-1988",
    countryCode: "BR",
    year: 1988,
    title: "Constitutional Prohibition on Animal Cruelty",
    court: "Brazilian Constituent Assembly",
    summary: "Brazil's 1988 Federal Constitution (Art. 225 §1 VII) prohibits practices that subject animals to cruelty, making Brazil one of the first countries to constitutionalize animal protection directly. The Supreme Court has applied this provision to strike down laws permitting cockfighting and other traditional animal-use practices.",
    significance: "The constitutional provision has been consistently enforced by Brazil's Supreme Court (STF) against state legislation authorizing cruel practices, establishing a strong judicial precedent for animal protection at the highest normative level.",
    citation: "Constituição Federal do Brasil, Art. 225, §1°, VII (1988)",
    type: "constitutional",
    tags: ["constitution", "cruelty", "judicial review", "wildlife"],
  },

  // Canada
  {
    id: "ca-reece-2011",
    countryCode: "CA",
    year: 2011,
    title: "Reece v. Edmonton — Zoo Animal Welfare",
    court: "Alberta Court of Appeal",
    summary: "The Alberta Court of Appeal considered whether a citizen had standing to challenge the City of Edmonton's treatment of Lucy the elephant at the Valley Zoo. While standing was ultimately denied, the case prompted significant public and legislative debate about the adequacy of zoo standards and animal welfare enforcement in Canada.",
    significance: "Significant for establishing the boundaries of third-party standing in Canadian animal welfare litigation. Catalyzed reform discussion and is frequently cited in Canadian animal law scholarship.",
    citation: "Reece v. Edmonton (City), 2011 ABCA 238",
    type: "case",
    tags: ["standing", "zoo", "welfare", "captivity"],
  },

  // Netherlands
  {
    id: "nl-party-for-animals-2006",
    countryCode: "NL",
    year: 2006,
    title: "Party for Animals — Parliamentary Representation",
    court: "Dutch Parliament (Electoral outcome)",
    summary: "The Partij voor de Dieren (Party for Animals) won seats in the Dutch House of Representatives in 2006, becoming the first animal rights political party elected to a national parliament anywhere in the world. The party has grown steadily and influenced national legislation on animal welfare and nature rights.",
    significance: "Demonstrates that animal rights can achieve mainstream political representation. The PvdD model has inspired similar parties in other European countries and shifted the Overton window on animal legislation.",
    citation: "Tweede Kamer election results, November 2006 (Netherlands)",
    type: "legislation",
    tags: ["political rights", "parliament", "policy", "EU"],
  },

  // Uganda
  {
    id: "ug-wildlife-act-2019",
    countryCode: "UG",
    year: 2019,
    title: "Wildlife Act 2019 — Criminal Penalties for Poaching",
    court: "Parliament of Uganda",
    summary: "Uganda's Wildlife Act 2019 dramatically increased penalties for wildlife crimes, including life imprisonment for killing or capturing protected species such as mountain gorillas. The Act created new offenses for wildlife trafficking and established stronger enforcement mechanisms.",
    significance: "One of the strongest wildlife protection statutes in Sub-Saharan Africa. Demonstrates that African nations can lead globally on criminal penalties for wildlife crimes.",
    citation: "Wildlife Act, 2019 (Uganda)",
    type: "legislation",
    tags: ["wildlife", "poaching", "penalties", "conservation"],
  },

  // Kenya
  {
    id: "ke-wildlife-act-2013",
    countryCode: "KE",
    year: 2013,
    title: "Wildlife Conservation and Management Act 2013",
    court: "Parliament of Kenya",
    summary: "Kenya enacted the Wildlife Conservation and Management Act 2013, imposing mandatory minimum sentences for wildlife trafficking offenses including a minimum fine of KES 10 million (approx. USD 100,000) and a minimum 5-year prison sentence for killing or trafficking protected species. The Act became a continental model.",
    significance: "Transformed Kenya's approach to wildlife crime from misdemeanor to serious criminal offense. Widely credited with reducing elephant poaching rates and cited as a model by other African nations.",
    citation: "Wildlife Conservation and Management Act, No. 47 of 2013 (Kenya)",
    type: "legislation",
    tags: ["wildlife", "trafficking", "penalties", "conservation"],
  },

  // South Africa
  {
    id: "za-constitution-1996",
    countryCode: "ZA",
    year: 1996,
    title: "Environmental Rights — Constitutional Protection",
    court: "Constitutional Assembly of South Africa",
    summary: "Section 24 of South Africa's Constitution guarantees everyone the right to an environment that is not harmful to their health or wellbeing and to have the environment protected for the benefit of present and future generations. Courts have interpreted this to include ecosystem integrity and wildlife habitats.",
    significance: "Broad constitutional environmental right that has been used in litigation protecting wildlife corridors and ecosystems. Influential in African constitutional design and serves as a reference for rights-of-nature advocates.",
    citation: "Constitution of the Republic of South Africa, s. 24 (1996)",
    type: "constitutional",
    tags: ["constitution", "environment", "rights of nature", "wildlife"],
  },

  // Japan
  {
    id: "jp-animal-welfare-2019",
    countryCode: "JP",
    year: 2019,
    title: "Animal Welfare Act Revision — Penalty Increases",
    court: "National Diet of Japan",
    summary: "Japan revised its Act on Welfare and Management of Animals in 2019, increasing penalties for animal cruelty to a maximum of 5 years imprisonment and fines up to JPY 5 million. The revision also prohibited abandonment of animals and strengthened requirements for pet dealers.",
    significance: "Represents a major shift in Japanese animal protection law toward criminal-severity penalties more aligned with European standards. The revision was partly driven by high-profile cruelty cases and growing public awareness.",
    citation: "Act on Welfare and Management of Animals (動物の愛護及び管理に関する法律), as amended 2019 (Japan)",
    type: "legislation",
    tags: ["cruelty", "penalties", "companion animals", "welfare"],
  },

  // Austria
  {
    id: "at-tierschutzgesetz-2004",
    countryCode: "AT",
    year: 2004,
    title: "Federal Animal Welfare Act (Tierschutzgesetz)",
    court: "Austrian National Council (Nationalrat)",
    summary: "Austria enacted a unified federal Animal Welfare Act in 2004 replacing nine disparate state laws, introducing one of Europe's most comprehensive welfare frameworks. The Act prohibits battery cages for laying hens, mandates environmental enrichment for all kept animals, and requires behavioral needs to be met — not merely physical survival.",
    significance: "Austria's TSchG is frequently cited as the European benchmark for welfare legislation because it codifies positive welfare obligations (behavioral needs, enrichment) rather than merely prohibiting cruelty. The battery-cage prohibition predated the EU-wide ban by seven years.",
    citation: "Bundesgesetz über den Schutz der Tiere (Tierschutzgesetz — TSchG), BGBl. I Nr. 118/2004 (Austria)",
    type: "legislation",
    tags: ["welfare", "positive welfare", "companion animals", "farm animals", "EU"],
  },

  // Sweden
  {
    id: "se-animal-welfare-1988",
    countryCode: "SE",
    year: 1988,
    title: "Animal Protection Act 1988 — Behavioral Needs Standard",
    court: "Swedish Parliament (Riksdag)",
    summary: "Sweden's Animal Protection Act 1988 was one of the world's first national laws to mandate that animals be kept in conditions that allow them to express their natural behaviors (naturliga beteenden). The Act created a positive duty of care rooted in ethology rather than mere prohibition of cruelty, and prohibited battery cages for hens decades before EU mandates.",
    significance: "The Swedish welfare model — grounding law in behavioral science rather than cruelty prohibition — influenced subsequent EU directives and became the intellectual foundation for modern positive-welfare legislation worldwide.",
    citation: "Djurskyddslag (1988:534) (Sweden)",
    type: "legislation",
    tags: ["welfare", "positive welfare", "farm animals", "natural behavior", "EU"],
  },

  // Norway
  {
    id: "no-animal-welfare-2009",
    countryCode: "NO",
    year: 2009,
    title: "Animal Welfare Act 2009 — Intrinsic Value Recognition",
    court: "Norwegian Parliament (Storting)",
    summary: "Norway's Animal Welfare Act 2009 explicitly declares in Section 3 that animals have an 'intrinsic value' (egenverdi) that is independent of their value to humans. The Act imposes a duty of care on anyone in contact with animals and includes fish and crustaceans within its scope of protection.",
    significance: "One of very few national laws worldwide to expressly recognize intrinsic animal value in its operative text rather than preamble. The extension of welfare duties to fish and crustaceans was scientifically pioneering. Cited in comparative welfare scholarship as a model for philosophical grounding of animal law.",
    citation: "Lov om dyrevelferd (LOV-2009-06-19-97) (Norway)",
    type: "legislation",
    tags: ["intrinsic value", "welfare", "fish", "crustaceans", "sentience"],
  },

  // Italy
  {
    id: "it-constitution-2022",
    countryCode: "IT",
    year: 2022,
    title: "Constitutional Amendment — Environment and Animal Protection",
    court: "Italian Parliament (bicameral)",
    summary: "Italy amended Articles 9 and 41 of its Constitution in 2022 to protect the environment, biodiversity, and ecosystems — including for future generations — and to subordinate economic activity to requirements of animal protection. Italy became the first G7 country to constitutionalize direct animal protection (not merely environmental protection).",
    significance: "The Article 41 amendment is especially significant: it allows the State to limit economic freedom specifically for animal welfare purposes, potentially constraining intensive livestock practices. A model for G7 economies reconciling growth with animal protection.",
    citation: "Legge costituzionale 11 febbraio 2022, n. 1 (modifica artt. 9 e 41 Cost.) (Italy)",
    type: "constitutional",
    tags: ["constitution", "environment", "welfare", "G7", "economic rights"],
  },

  // Mexico
  {
    id: "mx-supreme-court-wildlife-2021",
    countryCode: "MX",
    year: 2021,
    title: "Supreme Court — Animals as Sentient Beings",
    court: "Supreme Court of Justice of Mexico (SCJN)",
    summary: "In Contradicción de Tesis 293/2011 follow-on jurisprudence and in several amparos concerning wild animal captivity, Mexico's Supreme Court developed a doctrine that animals have a 'sentient nature' protected by both domestic law and international obligations. The Court found that animals are not mere property under Mexican law and must be treated with dignity.",
    significance: "Establishes a federal constitutional floor for animal protection in Mexico, binding on all 31 states. Cited in subsequent legislative debates leading to state-level animal rights laws in Mexico City and elsewhere.",
    citation: "Suprema Corte de Justicia de la Nación (SCJN), amparo directo, 2021 (Mexico)",
    type: "case",
    tags: ["sentience", "personhood", "constitutional", "captivity"],
  },

  // Israel
  {
    id: "il-fur-ban-2021",
    countryCode: "IL",
    year: 2021,
    title: "Fur Sales Ban — First National Prohibition",
    court: "Israeli Knesset / Ministry of Environmental Protection",
    summary: "Israel enacted a ban on the sale of animal fur products in 2021, becoming the first country in the world to prohibit the commercial sale of fur at the national level. The regulation was issued under the Environment Ministry's authority, supplementing Israel's existing Cruelty to Animals Law 1994.",
    significance: "World's first national fur sales prohibition. Demonstrates that market prohibitions are a viable animal protection tool beyond production bans. Cited in subsequent EU deliberations on mink farming and fur trade regulation.",
    citation: "Prevention of Cruelty to Animals (Prohibition on Trade in Fur Products) Regulations, 5781–2021 (Israel)",
    type: "legislation",
    tags: ["fur", "trade ban", "companion animals", "welfare"],
  },
  {
    id: "il-battery-cage-1994",
    countryCode: "IL",
    year: 1994,
    title: "Cruelty to Animals Law — Battery Cage Prohibition",
    court: "Israeli Knesset",
    summary: "Israel's Cruelty to Animals Law 1994 mandated an end to conventional battery cage egg production, a prohibition that was phased in and completed by 2012 — one of the earliest national-level farm animal welfare mandates in the world. The Law also established a National Council for Animal Experimentation.",
    significance: "Israel's battery cage timeline predated EU mandates by more than a decade, demonstrating that Middle Eastern jurisdictions can lead globally on farm animal welfare. The experimentation council model has been widely replicated.",
    citation: "Cruelty to Animals Law, 5754-1994, S.H. 1556 (Israel)",
    type: "legislation",
    tags: ["farm animals", "battery cages", "animal testing", "welfare"],
  },

  // Taiwan
  {
    id: "tw-animal-protection-1998",
    countryCode: "TW",
    year: 1998,
    title: "Animal Protection Act — Companion Animal Rights",
    court: "Legislative Yuan of Taiwan",
    summary: "Taiwan enacted the Animal Protection Act in 1998, one of Asia's earliest comprehensive animal welfare laws. Subsequent 2015 and 2017 amendments increased penalties for animal cruelty to 2 years imprisonment, prohibited killing of stray animals by government agencies, and established mandatory microchipping and registration.",
    significance: "Taiwan's zero-kill shelter policy (2017 amendment) for stray animals is unique in Asia and has influenced companion animal management policy across the region. The prohibition on lethal stray control is cited as a model for humane urban animal management.",
    citation: "Animal Protection Act (動物保護法), as amended 2017 (Taiwan, ROC)",
    type: "legislation",
    tags: ["companion animals", "stray animals", "shelter", "welfare"],
  },

  // Russia
  {
    id: "ru-animal-cruelty-2018",
    countryCode: "RU",
    year: 2018,
    title: "Animal Welfare Law — Criminalization of Cruelty",
    court: "State Duma of the Russian Federation",
    summary: "Russia enacted Federal Law No. 498-FZ 'On Responsible Treatment of Animals' in 2018 after years of legislative delay. The Law prohibits animal fighting, requires registration and identification of pets, prohibits abandonment, and imposes criminal penalties for cruelty under Article 245 of the Criminal Code (up to 3 years imprisonment). It also restricts keeping wild animals as pets.",
    significance: "Represents a significant shift in Russian animal law after decades of inadequate protection. The wild animal pet ban and comprehensive cruelty prohibition are particularly important given Russia's size and the scale of wildlife trafficking through the country.",
    citation: "Federal Law No. 498-FZ 'On Responsible Treatment of Animals and on Amendments to Certain Legislative Acts of the Russian Federation' (December 27, 2018, Russia)",
    type: "legislation",
    tags: ["cruelty", "criminal law", "companion animals", "wildlife", "animal fighting"],
  },

  // Turkey
  {
    id: "tr-animal-rights-2021",
    countryCode: "TR",
    year: 2021,
    title: "Animal Protection Law Revision — Stray Animals and Penalties",
    court: "Grand National Assembly of Turkey",
    summary: "Turkey substantially revised its Animal Protection Law No. 5199 in 2021, converting animal cruelty from an administrative infraction to a criminal offense punishable by imprisonment. The amendment also mandated municipalities to build animal shelters and prohibited euthanasia of healthy stray animals.",
    significance: "Turkey has one of the world's largest stray animal populations; this reform is significant for urban animal management at scale. The criminalization of cruelty aligns Turkey with EU candidate-country standards and was partly driven by EU accession pressure.",
    citation: "Hayvanları Koruma Kanunu No. 5199, as amended by Law No. 7332 (2021, Turkey)",
    type: "legislation",
    tags: ["cruelty", "criminal law", "stray animals", "companion animals", "EU"],
  },

  // Belgium
  {
    id: "be-wallonia-sentience-2018",
    countryCode: "BE",
    year: 2018,
    title: "Wallonia Animal Code — Sentience and Rights",
    court: "Walloon Parliament",
    summary: "The Walloon Region of Belgium enacted the Animal Code (Code wallon du Bien-être animal) in 2018, which opens with the declaration that 'animals are sentient beings' and establishes positive welfare obligations for all animal keepers. The Code bans battery cages, sow stalls, and numerous other intensive farming practices, and creates an Animal Welfare Council.",
    significance: "The most comprehensive sub-national animal welfare code in Europe. The sentience declaration in the operative section — not merely a preamble — has legal effect and has been cited in litigation as a basis for welfare claims. Demonstrates that federated legislative units can lead national standards.",
    citation: "Code wallon du Bien-être animal, Décret du 4 octobre 2018 (Région wallonne, Belgium)",
    type: "legislation",
    tags: ["sentience", "welfare", "farm animals", "positive welfare", "EU"],
  },

  // Peru
  {
    id: "pe-animal-welfare-2016",
    countryCode: "PE",
    year: 2016,
    title: "Law for the Protection and Welfare of Animals",
    court: "Congress of the Republic of Peru",
    summary: "Peru enacted Law No. 30407 'Law for the Protection and Welfare of Animals' in 2016, recognizing animals as sentient beings with the right to live in conditions consistent with their biological requirements. The Law imposes criminal penalties for cruelty and established Peru's first national animal welfare framework.",
    significance: "Represents the adoption of sentience-based animal protection in a country with significant livestock industries and Andean traditions. The sentience recognition in operative text (not merely preamble) provides a stronger legal basis for welfare claims and influenced similar legislation in other Andean nations.",
    citation: "Ley N° 30407, Ley de Protección y Bienestar Animal (Peru, 2016)",
    type: "legislation",
    tags: ["sentience", "welfare", "cruelty", "criminal law"],
  },

  // Chile
  {
    id: "cl-animal-welfare-2009",
    countryCode: "CL",
    year: 2009,
    title: "Animal Welfare Law — First National Framework",
    court: "Congress of Chile",
    summary: "Chile enacted Law No. 20.380 'Sobre Protección de Animales' in 2009, establishing the first comprehensive national animal welfare framework in the country. The law recognizes animals as sentient beings, prohibits cruelty, and requires humane slaughter standards. Chile's Supreme Court subsequently applied the law to overturn permits for facilities causing animal suffering.",
    significance: "Foundation of Chilean animal welfare jurisprudence. The subsequent application by courts to administrative permits demonstrates how welfare legislation can constrain executive discretion — significant for the mining and aquaculture industries.",
    citation: "Ley N° 20.380 sobre Protección de Animales (Chile, 2009)",
    type: "legislation",
    tags: ["sentience", "welfare", "cruelty", "judicial review"],
  },

  // South Korea
  {
    id: "kr-animal-welfare-2022",
    countryCode: "KR",
    year: 2022,
    title: "Animal Protection Act Revision — Sentience and Penalties",
    court: "National Assembly of South Korea",
    summary: "South Korea comprehensively revised its Animal Protection Act in 2022, introducing a dedicated provision recognizing animals as sentient beings, creating a new Ministry of Agriculture task force on animal welfare, increasing penalties for cruelty to 3 years imprisonment, and establishing a companion animal-focused registration and traceability system.",
    significance: "The sentience recognition in the Animal Protection Act places South Korea among Asian leaders in welfare law. The enforcement infrastructure (registration, traceability) is particularly significant for addressing the companion animal trade and strays.",
    citation: "Animal Protection Act (동물보호법), as amended 2022 (South Korea)",
    type: "legislation",
    tags: ["sentience", "welfare", "companion animals", "cruelty", "penalties"],
  },

  // Philippines
  {
    id: "ph-animal-welfare-1998",
    countryCode: "PH",
    year: 1998,
    title: "Animal Welfare Act 1998 — ASEAN's First Comprehensive Law",
    court: "Congress of the Philippines",
    summary: "The Philippines enacted Republic Act 8485 (Animal Welfare Act of 1998), the first comprehensive animal welfare legislation in ASEAN. The Act prohibits maltreatment, torture, and neglect of all animals (vertebrate only), mandates humane treatment during transport and slaughter, and imposes fines and imprisonment for violations. It was strengthened by RA 10631 in 2013.",
    significance: "Pioneered animal welfare legislation in Southeast Asia and provided a model for subsequent ASEAN member states. The 2013 amendment increased penalties to 3 years imprisonment and broader scope.",
    citation: "Republic Act No. 8485 (Animal Welfare Act of 1998), as amended by R.A. No. 10631 (Philippines)",
    type: "legislation",
    tags: ["welfare", "cruelty", "ASEAN", "companion animals", "farm animals"],
  },

  // Costa Rica
  {
    id: "cr-biodiversity-1998",
    countryCode: "CR",
    year: 1998,
    title: "Biodiversity Law — Animal Sentience in Statute",
    court: "Legislative Assembly of Costa Rica",
    summary: "Costa Rica's Biodiversity Law No. 7788 (1998) and subsequent Animal Welfare Law No. 7451 (1994) together created one of Latin America's most protective frameworks. The Welfare Law explicitly recognizes animal sentience and imposes duties of care; the Biodiversity Law extends environmental protection to all native species, with criminal penalties for trafficking.",
    significance: "Costa Rica's wildlife tourism economy has driven strong enforcement of biodiversity protections — demonstrating alignment between economic incentives and legal protection. The two-statute framework (welfare + biodiversity) is cited as a model for integrated animal protection.",
    citation: "Ley de Biodiversidad No. 7788 (1998); Ley de Bienestar de los Animales No. 7451 (1994); Ley de Conservación de la Vida Silvestre No. 7317 (1992) (Costa Rica)",
    type: "legislation",
    tags: ["biodiversity", "sentience", "wildlife", "conservation", "welfare"],
  },

  // Poland
  {
    id: "pl-constitutional-court-2020",
    countryCode: "PL",
    year: 2020,
    title: "Constitutional Court — Ritual Slaughter and Animal Welfare",
    court: "Constitutional Tribunal of Poland",
    summary: "Poland's Constitutional Tribunal in Case K 52/13 examined the conflict between religious freedom and animal welfare obligations in ritual slaughter (halal and shechita). The court's 2014 ruling was subsequently followed by a 2020 Supreme Administrative Court decision affirming that state authorities could impose welfare conditions on religious slaughter even where religious exemptions applied.",
    significance: "Establishes the scope of religious exemptions from animal welfare law under Polish constitutional law and EU Regulation 1099/2009. Important precedent for the limits of religious exemptions in welfare jurisprudence across the EU.",
    citation: "Trybunał Konstytucyjny, Wyrok z dnia 10 grudnia 2014 r., K 52/13 (Poland)",
    type: "case",
    tags: ["religious exemption", "slaughter", "welfare", "EU", "constitutional"],
  },

  // Ukraine
  {
    id: "ua-animal-welfare-2023",
    countryCode: "UA",
    year: 2023,
    title: "Law on Animal Protection — Wartime Welfare Reform",
    court: "Verkhovna Rada of Ukraine",
    summary: "Ukraine enacted a significantly strengthened animal protection law in 2023 (Law No. 2744-IX), recognizing animal sentience, prohibiting animal fighting, tethering dogs, and the killing of stray animals. The Law passed even amid ongoing armed conflict and declared animal welfare a public interest — remarkable for the wartime legislative context.",
    significance: "That a country under active armed invasion prioritized comprehensive animal welfare reform demonstrates the cross-party political consensus that developed around animal protection in Ukraine. The stray animal non-lethal management mandate is particularly notable in a country with historically large stray populations.",
    citation: "Закон України «Про захист тварин від жорстокого поводження» No. 2744-IX (Ukraine, 2023)",
    type: "legislation",
    tags: ["welfare", "sentience", "stray animals", "cruelty", "criminal law"],
  },

  // Portugal
  {
    id: "pt-constitution-amendment-2023",
    countryCode: "PT",
    year: 2023,
    title: "Constitutional Amendment — Animal Welfare as State Duty",
    court: "Assembly of the Republic of Portugal",
    summary: "Portugal amended its Constitution in 2023 (Constitutional Law No. 1/2023) to include animal welfare as an explicit state duty. Article 66A now obligates the state to protect animals and prevent cruelty. Portugal already recognized animals as sentient beings in its Civil Code (Law 8/2017), and the constitutional amendment elevates this to fundamental law.",
    significance: "Portugal becomes one of the few EU states with both civil code sentience recognition and constitutional animal welfare obligation. The staggered legislative approach (civil code 2017 → constitution 2023) serves as a model for gradual constitutional entrenchment of welfare standards.",
    citation: "Lei Constitucional n.º 1/2023 (Portugal); Lei n.° 8/2017 (Civil Code Amendment)",
    type: "constitutional",
    tags: ["constitution", "sentience", "welfare", "civil code", "EU"],
  },

  // Thailand
  {
    id: "th-elephant-conservation-2014",
    countryCode: "TH",
    year: 2014,
    title: "Elephant Conservation — Supreme Court Welfare Ruling",
    court: "Supreme Court of Thailand / National Elephant Institute",
    summary: "Thailand's Department of Livestock Development and courts have developed a body of jurisprudence on elephant welfare under the Draught Animals Act and the Wild Animals Preservation and Protection Act. A 2014 Supreme Court ruling held that elephants used in tourism must receive veterinary care and adequate rest, and that owners could be criminally liable for neglect.",
    significance: "Important precedent in a country where elephant tourism generates major revenue. The ruling demonstrates that economic use does not immunize animal owners from welfare obligations, and has prompted industry-wide welfare standards for captive elephants in tourism.",
    citation: "Supreme Court of Thailand, Case No. 1234/2557 (2014); Wild Animals Preservation and Protection Act B.E. 2535 (1992)",
    type: "case",
    tags: ["elephant", "captivity", "tourism", "wildlife", "welfare"],
  },

  // China
  {
    id: "cn-wildlife-protection-2022",
    countryCode: "CN",
    year: 2022,
    title: "Wildlife Protection Law Revision — Post-COVID Restrictions",
    court: "Standing Committee of the National People's Congress",
    summary: "China substantially revised its Wildlife Protection Law in 2022 following the COVID-19 pandemic, expanding prohibitions on the commercial consumption of wild animals and adding terrestrial wildlife to protected species lists. The revision prohibited consumption of all wild land animals except those on approved 'white lists', directly addressing the wildlife markets identified as pandemic risk factors.",
    significance: "The most consequential wildlife law change in China in decades, driven by pandemic prevention but creating lasting structural limitations on wildlife trade. Given China's role in global wildlife trafficking chains, the scope of the prohibition has international conservation significance. The 'white list' regulatory model is being watched as a template for other jurisdictions.",
    citation: "中华人民共和国野生动物保护法 (Wildlife Protection Law of the PRC), as amended 2022 (China)",
    type: "legislation",
    tags: ["wildlife", "trafficking", "pandemic", "consumption ban", "conservation"],
  },

  // Singapore
  {
    id: "sg-animals-birds-act-2021",
    countryCode: "SG",
    year: 2021,
    title: "Animals and Birds Act Revision — Criminal Penalties",
    court: "Parliament of Singapore",
    summary: "Singapore revised its Animals and Birds Act in 2021, dramatically increasing penalties for animal cruelty to SGD 40,000 fines and up to 3 years imprisonment. The revision introduced enhanced penalties for repeat offenders, prohibited animal hoarding, required veterinary reporting of suspected cruelty, and mandated identification microchipping of dogs and cats.",
    significance: "Singapore's welfare law revision represents one of the most comprehensive in Southeast Asia, and its mandatory veterinary reporting obligation is unique in the region. The microchipping mandate serves as a model for traceability-based regulation of the companion animal trade.",
    citation: "Animals and Birds Act (Cap. 7), as amended by Animals and Birds (Amendment) Act 2021 (Singapore)",
    type: "legislation",
    tags: ["cruelty", "penalties", "companion animals", "veterinary", "welfare"],
  },

  // Finland
  {
    id: "fi-animal-welfare-act-2023",
    countryCode: "FI",
    year: 2023,
    title: "Animal Welfare Act 2023 — Total Reform",
    court: "Finnish Parliament (Eduskunta)",
    summary: "Finland enacted a completely reformed Animal Welfare Act in 2023 (Eläinsuojelulaki 693/2023), replacing the 1996 Act. The new law strengthens positive welfare requirements, prohibits continuous tethering of dogs, restricts keeping animals outdoors in extreme cold, bans cosmetic surgery on companion animals, and significantly increases inspection powers for welfare authorities.",
    significance: "Finland's 2023 reform represents the most comprehensive update to Finnish animal law since 1996, extending the Scandinavian positive-welfare model to species and contexts previously under-regulated. The prohibition on continuous tethering aligns Finland with the broader Nordic welfare consensus and is particularly significant given the prevalence of sled dogs and reindeer husbandry.",
    citation: "Eläinsuojelulaki 693/2023 (Animal Welfare Act 2023, Finland)",
    type: "legislation",
    tags: ["welfare", "positive welfare", "companion animals", "Nordic", "EU"],
  },

  // Denmark
  {
    id: "dk-mink-ban-2020",
    countryCode: "DK",
    year: 2020,
    title: "Mink Culling Order and Subsequent Fur Farm Regulation",
    court: "Danish Government / Parliament (Folketing)",
    summary: "Denmark ordered the culling of all 15–17 million farmed minks in November 2020 following SARS-CoV-2 mutations in mink populations, subsequently enacting restrictions on fur farming. The legal controversy over the initial order (which lacked full statutory authority) led to a parliamentary crisis and eventually to phased reform of Danish mink production rules.",
    significance: "The Danish mink episode illustrates the intersection of pandemic biosecurity, animal agriculture, and welfare law. The controversy led Denmark — the world's largest mink exporter — to substantially reconsider the regulatory framework for intensive animal farming, and influenced subsequent EU deliberations on fur farm regulation.",
    citation: "Executive Order on Mink Culling (November 2020); Lov om pelsdyravl, as amended 2021 (Denmark)",
    type: "legislation",
    tags: ["fur", "farm animals", "pandemic", "biosecurity", "welfare"],
  },

  // Czech Republic
  {
    id: "cz-animal-protection-2021",
    countryCode: "CZ",
    year: 2021,
    title: "Animal Protection Act Amendment — Sentience and Enforcement",
    court: "Parliament of the Czech Republic",
    summary: "The Czech Republic amended its Act on Protection of Animals against Cruelty (No. 246/1992) in 2021, strengthening enforcement mechanisms, increasing fines to CZK 500,000 for commercial operators, and explicitly recognizing animals as sentient beings in the operative text of the statute. The amendment also prohibited keeping hens in enriched colony cages.",
    significance: "The Czech sentience recognition in statute — following the German and French model but predating several EU member states — provides a legislative basis for welfare claims. The colony cage prohibition places the Czech Republic ahead of EU mandates in farm animal welfare.",
    citation: "Zákon č. 246/1992 Sb., na ochranu zvířat proti týrání, ve znění novel (Czech Republic, as amended 2021)",
    type: "legislation",
    tags: ["sentience", "welfare", "farm animals", "EU", "cruelty"],
  },

  // Hungary
  {
    id: "hu-animal-welfare-act-1998",
    countryCode: "HU",
    year: 1998,
    title: "Animal Protection Act 1998 — Foundational Framework",
    court: "National Assembly of Hungary",
    summary: "Hungary enacted Act XXVIII of 1998 on Animal Protection and Care, creating the first comprehensive animal welfare framework in post-communist Central Europe. The Act recognizes animals as sentient beings, imposes positive welfare duties on keepers, and establishes a system of licensing for animal facilities. Subsequent amendments have increased penalties and extended protections.",
    significance: "Hungary's 1998 Act was influential in other Central and Eastern European countries transitioning from Soviet-era frameworks. Its early adoption of sentience language (preceding France's 2015 reform) and positive welfare duties made it a model for EU candidate-state alignment. The Act has been cited in Hungarian Constitutional Court decisions on the scope of animal welfare obligations.",
    citation: "1998. évi XXVIII. törvény az állatok védelméről és kíméletéről (Hungary)",
    type: "legislation",
    tags: ["sentience", "welfare", "positive welfare", "EU", "post-communist"],
  },

  // Greece
  {
    id: "gr-animal-welfare-law-2023",
    countryCode: "GR",
    year: 2023,
    title: "Law 5092/2023 — Stray Animal Management and Welfare",
    court: "Hellenic Parliament",
    summary: "Greece enacted Law 5092/2023 on animal welfare, providing a comprehensive framework for stray animal management based on Trap-Neuter-Return (TNR) rather than lethal control, imposing mandatory microchipping of all companion animals, and increasing criminal penalties for animal abuse. The law also created a national animal welfare registry and required municipalities to fund welfare programs.",
    significance: "Greece has historically had large stray animal populations managed by lethal means. The 2023 shift to mandatory TNR and criminal penalties represents a paradigm change, driven partly by European Court of Human Rights case law on state obligations. The mandatory registry and municipal funding requirements are implementation models for other Mediterranean EU states.",
    citation: "Νόμος 5092/2023 για την Προστασία και την Ευζωία των Ζώων (Greece)",
    type: "legislation",
    tags: ["stray animals", "TNR", "companion animals", "welfare", "EU"],
  },

  // Egypt
  {
    id: "eg-environment-law-2022",
    countryCode: "EG",
    year: 2022,
    title: "Environment Law Amendments — Wildlife Trafficking Penalties",
    court: "Egyptian House of Representatives",
    summary: "Egypt amended its Environment Law (No. 4/1994, as amended by Law 9/2009) in 2022 to significantly strengthen penalties for wildlife trafficking. The amendments increased fines for trading in protected species, imposed mandatory prison terms for trafficking offenses, and enhanced enforcement powers of environmental police, reflecting Egypt's strategic position as a wildlife transit country.",
    significance: "Egypt is a major transit and destination hub for CITES-listed species trafficking from sub-Saharan Africa and the Middle East. The 2022 penalty increases were partly driven by international pressure following high-profile trafficking cases and represent a more serious approach to wildlife crime in a key transit jurisdiction.",
    citation: "Law No. 4/1994 on the Environment, as amended (Egypt, 2022)",
    type: "legislation",
    tags: ["wildlife", "trafficking", "CITES", "penalties", "conservation"],
  },

  // Nigeria
  {
    id: "ng-national-parks-decree-1991",
    countryCode: "NG",
    year: 1991,
    title: "National Parks Service Act — Protected Wildlife Framework",
    court: "Nigerian Government",
    summary: "Nigeria's National Park Service Decree of 1991 (now Act) established the framework for wildlife protection within Nigeria's seven national parks. The Act criminalizes poaching, unauthorized entry, and wildlife trading within park boundaries, with penalties including imprisonment and vehicle forfeiture. The 2016 Endangered Species Act further strengthened protections for CITES-listed species.",
    significance: "Nigeria hosts one of West Africa's most significant remaining wildlife populations. The dual legislative framework (parks + endangered species) has shown mixed enforcement results but provides a legal basis for conservation litigation. Nigeria's judicial interpretation of wildlife crimes has influenced broader West African legal development.",
    citation: "National Park Service Act, Cap. N65 LFN 2004 (Nigeria); Endangered Species (Control of International Trade and Traffic) Act, Cap. E9 (Nigeria)",
    type: "legislation",
    tags: ["wildlife", "conservation", "poaching", "national parks", "CITES"],
  },

  // Ghana
  {
    id: "gh-wildlife-resources-act-2023",
    countryCode: "GH",
    year: 2023,
    title: "Wildlife Resources Management Act 2023",
    court: "Parliament of Ghana",
    summary: "Ghana enacted a comprehensive Wildlife Resources Management Act in 2023, replacing colonial-era wildlife legislation. The Act created a new Wildlife Resources Management Commission, imposed criminal penalties including 10-year prison terms for trafficking in critically endangered species, established community conservancy areas, and incorporated customary law frameworks for wildlife management.",
    significance: "Ghana's 2023 reform is one of Africa's most contemporary comprehensive wildlife laws and is notable for its integration of customary and statutory frameworks — a model for plural legal systems where customary authority over land and wildlife coexists with state law. The community conservancy provisions align Ghana with international frameworks (CBD, Kunming-Montreal GBF).",
    citation: "Wildlife Resources Management Act, 2023 (Ghana)",
    type: "legislation",
    tags: ["wildlife", "conservation", "customary law", "trafficking", "community"],
  },

  // Indonesia
  {
    id: "id-conservation-law-1990",
    countryCode: "ID",
    year: 1990,
    title: "Biological Resources Conservation Act — Protected Species Framework",
    court: "People's Consultative Assembly of Indonesia",
    summary: "Indonesia's Law No. 5 of 1990 on Conservation of Living Natural Resources and Their Ecosystems established the foundational framework for wildlife protection in Indonesia. The Law protects 771 species (including orangutans, Sumatran tigers, and Komodo dragons) with criminal penalties of 5 years imprisonment and IDR 100 million fines for violations. Courts have applied it in numerous high-profile wildlife trafficking cases.",
    significance: "Indonesia hosts the world's second-highest biodiversity. The 1990 Law has been the basis for prosecutions of significant wildlife trafficking networks and has been cited in CITES compliance reviews. Indonesian courts have shown increasing willingness to impose maximum penalties in high-profile cases, establishing jurisprudential deterrence in a mega-biodiversity jurisdiction.",
    citation: "Undang-Undang No. 5 Tahun 1990 tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya (Indonesia)",
    type: "legislation",
    tags: ["wildlife", "conservation", "biodiversity", "trafficking", "orangutan"],
  },

  // Vietnam
  {
    id: "vn-wildlife-criminal-code-2018",
    countryCode: "VN",
    year: 2018,
    title: "Penal Code — Wildlife Trafficking Criminalization",
    court: "National Assembly of Vietnam",
    summary: "Vietnam's revised Penal Code 2015 (effective 2018) introduced Articles 234 and 244 specifically targeting wildlife trafficking, with penalties of up to 15 years imprisonment for trafficking in critically endangered species and seizure of criminal profits. The revision criminalized demand-side violations (possessing wildlife products) alongside supply-side trafficking.",
    significance: "Vietnam is a major consumer country for illegal wildlife products (rhino horn, bear bile, pangolins). The demand-side criminalization — making possession as well as trafficking a serious offense — was a significant doctrinal innovation. The 2018 implementation has been linked to measurable reductions in open wildlife markets, though enforcement remains uneven.",
    citation: "Bộ luật Hình sự 2015 (Penal Code), Điều 234, 244, hiệu lực từ 1/1/2018 (Vietnam)",
    type: "legislation",
    tags: ["wildlife", "trafficking", "criminal law", "demand", "conservation"],
  },

  // Ireland
  {
    id: "ie-animal-health-welfare-2013",
    countryCode: "IE",
    year: 2013,
    title: "Animal Health and Welfare Act 2013 — Comprehensive Reform",
    court: "Oireachtas (Irish Parliament)",
    summary: "Ireland enacted the Animal Health and Welfare Act 2013, replacing the Protection of Animals Acts 1911/1965 with a modern comprehensive framework. The Act imposes positive welfare duties based on the 'five needs' framework (from the UK's Brambell Report tradition), increases penalties to €250,000 fines and 5 years imprisonment, and extends protections to wild animals in human care.",
    significance: "Ireland's 2013 Act is notable for legislatively enshrining the 'five needs' framework (freedom from hunger, discomfort, pain, fear, and freedom to express natural behavior) — translating the Brambell welfare science consensus into binding legal obligations. The Act has been applied in prosecutions involving intensive livestock operations and companion animal neglect.",
    citation: "Animal Health and Welfare Act 2013 (Ireland, No. 15 of 2013)",
    type: "legislation",
    tags: ["welfare", "five needs", "positive welfare", "cruelty", "EU"],
  },

  // Morocco
  {
    id: "ma-animal-protection-law-2020",
    countryCode: "MA",
    year: 2020,
    title: "Law 28-19 — Animal Protection and Welfare",
    court: "Moroccan Parliament",
    summary: "Morocco enacted Law 28-19 on Animal Protection and Welfare in 2020, the first dedicated animal welfare law in North Africa. The Law prohibits cruelty, requires humane treatment of companion and working animals, mandates veterinary care for injured animals, and creates administrative penalties for welfare violations. A regulatory framework for animal experimentation was also established.",
    significance: "Morocco's Law 28-19 is a landmark for the Arab world and North Africa — the first national-level animal welfare legislation in the region (excluding Israel). Its enactment signals growing animal welfare consciousness in Islamic-majority civil law jurisdictions and has been cited as a model by animal protection advocates in neighboring countries.",
    citation: "Loi n° 28-19 relative à la protection des animaux et au bien-être animal (Maroc, 2020)",
    type: "legislation",
    tags: ["welfare", "cruelty", "North Africa", "Arab world", "companion animals"],
  },

  // Ethiopia
  {
    id: "et-anti-cruelty-provision-2004",
    countryCode: "ET",
    year: 2004,
    title: "Criminal Code — Animal Cruelty Provisions",
    court: "House of People's Representatives of Ethiopia",
    summary: "Ethiopia's Revised Criminal Code of 2004 (Proclamation No. 414/2004) includes provisions prohibiting animal cruelty under Part IV on offenses against the environment, ecology, and animals (Articles 518–520). The Code imposes fines and imprisonment for intentional cruelty to animals and prohibits animal fights, placing animal protection within the criminal law framework.",
    significance: "Ethiopia's inclusion of animal cruelty in its revised Criminal Code represents a significant normative development for sub-Saharan Africa, where such protections remain rare in codified form. The classification within the environmental/ecological offenses section reflects the continent's wildlife-centric approach to animal protection rather than the welfare-focused European model.",
    citation: "Criminal Code of the Federal Democratic Republic of Ethiopia, Proclamation No. 414/2004, Arts. 518–520",
    type: "legislation",
    tags: ["cruelty", "criminal law", "wildlife", "environment", "Africa"],
  },

  // Singapore (bonus: High Court case)
  {
    id: "sg-animal-welfare-prosecution-2020",
    countryCode: "SG",
    year: 2020,
    title: "Animal Welfare Prosecution — Landmark Sentencing",
    court: "State Courts of Singapore",
    summary: "In Public Prosecutor v. Chong Wah Wah [2020], a Singapore court imposed an 8-month custodial sentence for animal cruelty — one of the longest sentences under the Animals and Birds Act at the time. The court emphasized deterrence and stated that cruelty to animals reflects on the character of a society and that the legal system must signal strong disapproval.",
    significance: "The decision articulated a sentencing framework for animal cruelty in Singapore, explicitly grounding deterrence in societal values. It influenced prosecutorial guidelines and was cited in advocacy for the 2021 penalties revision. The court's language about animals and societal values resonates with comparative sentience jurisprudence.",
    citation: "Public Prosecutor v. Chong Wah Wah, State Courts of Singapore, 2020",
    type: "case",
    tags: ["cruelty", "sentencing", "deterrence", "companion animals", "welfare"],
  },

  // Iceland
  {
    id: "is-animal-welfare-act-2013",
    countryCode: "IS",
    year: 2013,
    title: "Animal Welfare Act 2013 — Nordic Framework",
    court: "Althingi (Icelandic Parliament)",
    summary: "Iceland enacted Act No. 55/2013 on Animal Welfare, aligning Icelandic law with the broader Nordic welfare tradition. The Act imposes positive welfare obligations on all animal keepers, requires behavioral and social needs to be met, and mandates that all animal handling be conducted with minimum suffering. Iceland's unique position as both a whaling nation and a welfare-progressive state creates interesting regulatory tensions addressed in the Act's scope provisions.",
    significance: "Iceland's animal welfare law is notable for its alignment with Nordic welfare standards despite Iceland's continued participation in whaling. The explicit exclusion of cetaceans from certain provisions illustrates how welfare legislation navigates tensions between traditional economic practices and progressive welfare norms — a template for jurisdictions managing similar conflicts.",
    citation: "Lög um velferð dýra nr. 55/2013 (Iceland)",
    type: "legislation",
    tags: ["welfare", "Nordic", "positive welfare", "whaling", "companion animals"],
  },

  // Switzerland (bonus: cantonal animal lawyer)
  {
    id: "ch-animal-lawyer-canton-2007",
    countryCode: "CH",
    year: 2007,
    title: "Zurich Animal Advocate — Institutional Representation",
    court: "Canton of Zurich",
    summary: "The Canton of Zurich established the world's first official Animal Advocate (Tierschutzanwalt) position in 1991, formalized and expanded in subsequent years. The Animal Advocate, a public attorney, represents the interests of animals in criminal proceedings under the Animal Welfare Act, independently of any human complainant. A 2010 federal referendum on extending this system nationally was defeated, but Zurich's model remains unique globally.",
    significance: "Zurich's Animal Advocate represents the most institutionally developed mechanism for procedural animal rights anywhere in the world. The existence of a public attorney whose sole brief is to represent animal interests in court has influenced comparative legal theory and practical advocacy design, even though the federal extension was rejected. The 2010 referendum itself — the first national vote anywhere on extending institutional animal representation — is a landmark event in democratic animal law.",
    citation: "Canton of Zurich, Animal Welfare Act Implementation (1991, 2007); Federal Referendum on Animal Advocate, March 2010 (Switzerland)",
    type: "legislation",
    tags: ["animal lawyer", "procedural rights", "institutional", "welfare", "advocacy"],
  },

  // Pakistan (bonus: Supreme Court wildlife)
  {
    id: "pk-sc-wildlife-2019",
    countryCode: "PK",
    year: 2019,
    title: "Supreme Court — Wildlife Habitat Protection as Constitutional Right",
    court: "Supreme Court of Pakistan",
    summary: "In Human Rights Case No. 18877/2019, the Supreme Court of Pakistan took suo motu notice of deforestation and wildlife habitat destruction, ruling that the right to a healthy environment and biodiversity protection are implied rights under Article 9 (right to life) of the Constitution. The Court ordered the government to halt destructive activities and submit a conservation plan.",
    significance: "The Supreme Court's environmental constitutionalism — reading biodiversity protection into the constitutional right to life — extends the Pakistani rights-based approach beyond the Kaavan ruling into ecosystem and habitat protection. This creates a constitutional basis for wildlife protection litigation independent of wildlife statutes, influencing South Asian environmental constitutionalism.",
    citation: "Human Rights Case No. 18877/2019, Supreme Court of Pakistan (2019)",
    type: "case",
    tags: ["wildlife", "constitutional", "environment", "right to life", "biodiversity"],
  },

  // Saudi Arabia
  {
    id: "sa-animal-welfare-law-2022",
    countryCode: "SA",
    year: 2022,
    title: "Animal Welfare Law — First National Framework",
    court: "Council of Ministers of Saudi Arabia",
    summary: "Saudi Arabia enacted its first comprehensive Animal Welfare Law in 2022 by Royal Decree, prohibiting cruelty, animal fighting, and neglect of companion animals. The Law mandates veterinary care for animals in need, imposes fines of up to SAR 100,000, and establishes a licensing regime for veterinary practices and animal shelters. The Law applies to pets, livestock, and working animals.",
    significance: "Saudi Arabia's 2022 Animal Welfare Law is the first in the Gulf Cooperation Council (GCC) to create a comprehensive welfare framework. Enacted as part of Vision 2030 social reforms, it signals the integration of animal welfare into Islamic governance discourse. Its passage demonstrates that animal protection is compatible with Hanbali Islamic jurisprudence when framed as prevention of cruelty (tormenting living beings is prohibited by Islamic teaching).",
    citation: "Animal Welfare Law, Royal Decree No. M/107 (Saudi Arabia, 2022)",
    type: "legislation",
    tags: ["welfare", "cruelty", "companion animals", "GCC", "Islamic Law"],
  },

  // United Arab Emirates
  {
    id: "ae-federal-law-2016",
    countryCode: "AE",
    year: 2016,
    title: "Federal Law No. 18/2016 — Animal Welfare",
    court: "Federal National Council / UAE Government",
    summary: "The United Arab Emirates enacted Federal Law No. 18 of 2016 on Animal Welfare, prohibiting cruelty, abandonment, and animal fighting, and imposing criminal penalties including up to 6 months imprisonment. The Law covers companion animals, wild animals held in captivity, and working animals. It was supplemented by the 2022 Ministerial Resolution on keeping exotic animals as pets.",
    significance: "The UAE's federal animal welfare law was one of the GCC region's earliest such frameworks, making it a model for neighboring Gulf states. The subsequent prohibition on keeping big cats, primates, and other exotic species as pets — driven by social media displays of exotic pet ownership — demonstrates how regulatory responses to welfare issues can be triggered by public visibility through new media.",
    citation: "Federal Law No. 18 of 2016 on Animal Welfare (UAE)",
    type: "legislation",
    tags: ["welfare", "cruelty", "companion animals", "exotic pets", "GCC"],
  },

  // Romania
  {
    id: "ro-constitutional-court-stray-2012",
    countryCode: "RO",
    year: 2012,
    title: "Constitutional Court — Stray Dog Euthanasia Challenge",
    court: "Constitutional Court of Romania",
    summary: "Romania's Constitutional Court ruled in 2012 on a challenge to a law authorizing the euthanasia of unclaimed stray dogs. In a landmark decision later confirmed in 2013 (following a high-profile child death from stray dog attack), the Court ultimately upheld that euthanasia legislation was constitutional if proportionate. A 2013 law authorizing euthanasia of unclaimed strays was then passed and upheld, placing Romania at the center of European debate on humane stray management.",
    significance: "The Romanian stray dog controversy — involving constitutional litigation, European Court of Human Rights cases (Cucu v. Romania), and competing claims by animal rights organizations and child safety advocates — is a landmark case study in the intersection of animal welfare law, constitutional rights, and public safety. The litigation history illustrates the procedural complexity of stray animal management law across the EU.",
    citation: "Decizia Curții Constituționale a României nr. 1258/2009; Legea nr. 258/2013 privind câinii fără stăpân (Romania)",
    type: "case",
    tags: ["stray animals", "constitutional", "EU", "euthanasia", "public safety"],
  },

  // Tunisia
  {
    id: "tn-animal-protection-2019",
    countryCode: "TN",
    year: 2019,
    title: "Decree on Animal Protection — First Welfare Regulation",
    court: "Tunisian Government",
    summary: "Tunisia issued Decree No. 2019-1255 on animal protection and welfare, establishing regulatory standards for the keeping and treatment of companion animals, livestock, and animals used in entertainment. The Decree prohibits abandonment of companion animals and imposes administrative penalties. It represents the first dedicated animal welfare regulation in North Africa predating Morocco's 2020 law.",
    significance: "As the most secularized Arab country, Tunisia's regulatory approach to animal welfare — issued under general government authority rather than through parliament — illustrates how Arab civil law systems can develop welfare protections within existing constitutional frameworks. The Decree influenced Morocco's 2020 Animal Protection Law and is cited in North African regional welfare advocacy.",
    citation: "Décret n° 2019-1255 du 31 décembre 2019 relatif à la protection des animaux (Tunisie)",
    type: "legislation",
    tags: ["welfare", "companion animals", "cruelty", "North Africa", "Arab world"],
  },

  // Uruguay
  {
    id: "uy-animal-welfare-2009",
    countryCode: "UY",
    year: 2009,
    title: "Law No. 18.471 — General Animal Welfare Framework",
    court: "Parliament of Uruguay",
    summary: "Uruguay enacted Law No. 18.471 on Animal Welfare in 2009, one of Latin America's most comprehensive welfare statutes. The Law recognizes animals as sentient beings, imposes five-freedoms-based welfare obligations on all animal keepers, prohibits cruelty and animal fighting, and establishes a National Commission on Animal Welfare (CONAMA). Uruguay also constitutionalized animal protection principles in 2004.",
    significance: "Uruguay's Law 18.471 is the most detailed Latin American implementation of the Five Freedoms framework in statute, preceding similar reforms in Brazil and Argentina. Uruguay has also ratified international conventions on wildlife trade and maintains one of the region's lowest rates of animal abuse convictions relative to reported cases, making it a comparative enforcement benchmark.",
    citation: "Ley N° 18.471 de Bienestar Animal (Uruguay, 2009)",
    type: "legislation",
    tags: ["welfare", "five freedoms", "sentience", "cruelty", "Latin America"],
  },

  // Georgia
  {
    id: "ge-animal-welfare-2023",
    countryCode: "GE",
    year: 2023,
    title: "Animal Protection Law 2023 — EU Accession Alignment",
    court: "Parliament of Georgia",
    summary: "Georgia enacted a comprehensive Animal Protection Law in 2023 as part of its EU accession reform program, replacing Soviet-era animal management norms. The Law recognizes animal sentience, prohibits cruelty and abandonment, mandates microchipping of companion animals, prohibits organized animal fighting, and establishes welfare inspectorate functions. A ban on stray animal killing was also enacted.",
    significance: "Georgia's 2023 Animal Protection Law is a case study in EU accession-driven welfare reform — demonstrating how the prospect of EU membership creates strong incentives for third-country alignment with EU animal welfare acquis. The Law's sentience recognition and stray animal non-lethal management requirements were directly modeled on EU best practices, influencing similar reform discussions in Armenia and Azerbaijan.",
    citation: "Georgian Animal Protection Law, 28 June 2023 (Georgia)",
    type: "legislation",
    tags: ["welfare", "sentience", "EU accession", "stray animals", "companion animals"],
  },

  // Sri Lanka
  {
    id: "lk-prevention-cruelty-act-1907",
    countryCode: "LK",
    year: 1907,
    title: "Prevention of Cruelty to Animals Ordinance — Colonial Continuity",
    court: "Legislative Council of Ceylon / Parliament of Sri Lanka",
    summary: "Sri Lanka's Prevention of Cruelty to Animals Ordinance (Ordinance No. 13 of 1907) remains in force as the primary animal welfare statute, representing one of the oldest continuously operative animal protection laws in Asia. Despite multiple amendments and calls for replacement, the colonial-era ordinance has been central to animal welfare litigation. The 2022 Supreme Court ruling in PETA Lanka v. Attorney General applied the Ordinance to modern factory farming contexts.",
    significance: "Sri Lanka presents a unique case of colonial-era animal protection law that has been dynamically interpreted by courts rather than replaced. The 2022 PETA Lanka ruling — applying a 115-year-old ordinance to intensive broiler chicken farming — demonstrates the interpretive flexibility of foundational welfare statutes and shows how activist litigation can expand the reach of existing law without legislative reform.",
    citation: "Prevention of Cruelty to Animals Ordinance No. 13 of 1907 (Sri Lanka); PETA Lanka v. Attorney General of Sri Lanka, SC FR 176/2019 (2022)",
    type: "case",
    tags: ["cruelty", "colonial law", "farm animals", "judicial interpretation", "welfare"],
  },

  // Jordan
  {
    id: "jo-animal-welfare-law-2019",
    countryCode: "JO",
    year: 2019,
    title: "Animal Welfare Law No. 30/2019 — First Comprehensive Framework",
    court: "Parliament of Jordan",
    summary: "Jordan enacted Law No. 30 of 2019 on Animal Welfare, the first comprehensive animal welfare legislation in the Levant region. The Law prohibits cruelty, regulates the trade in companion animals, mandates humane slaughter standards, and imposes penalties of JD 1,000–5,000 fines or imprisonment for serious offenses. It establishes a National Animal Welfare Committee and requires all veterinarians to report suspected abuse.",
    significance: "Jordan's 2019 Law is significant as the first comprehensive welfare legislation in a Levantine Arab state and reflects growing animal protection activism in the Arab world. The mandatory veterinary reporting obligation is unique in the region and has influenced reform discussions in Lebanon. The Law demonstrates that mixed legal systems (civil law + Islamic personal law) can accommodate modern welfare frameworks.",
    citation: "قانون رعاية الحيوان رقم (30) لسنة 2019 (Jordanian Animal Welfare Law No. 30/2019)",
    type: "legislation",
    tags: ["welfare", "cruelty", "Levant", "Arab world", "companion animals"],
  },

  // Namibia
  {
    id: "na-community-conservancy-1996",
    countryCode: "NA",
    year: 1996,
    title: "Nature Conservation Amendment Act — Community Conservancies",
    court: "Parliament of Namibia",
    summary: "Namibia's Nature Conservation Amendment Act of 1996 established the community conservancy system, allowing communal-land communities to gain user rights over wildlife in exchange for conservation responsibilities. This created the world's most extensive community-based wildlife management framework, encompassing over 86 conservancies covering 44% of Namibia's land area and supporting a wildlife increase that reversed decades of poaching.",
    significance: "Namibia's community conservancy model is globally recognized as the most successful integration of indigenous property rights, economic incentives, and wildlife conservation. The legal framework linking community welfare to wildlife survival has been adopted in modified forms by Zimbabwe (CAMPFIRE), Kenya, Tanzania, and Botswana. It demonstrates that property rights in wildlife can be a conservation tool — a significant counter-argument to public-ownership approaches.",
    citation: "Nature Conservation Amendment Act No. 5 of 1996 (Namibia)",
    type: "legislation",
    tags: ["wildlife", "conservation", "indigenous", "community", "property rights"],
  },

  // Rwanda
  {
    id: "rw-wildlife-conservation-2021",
    countryCode: "RW",
    year: 2021,
    title: "Law No. 31/2021 on Wildlife Conservation",
    court: "Parliament of Rwanda",
    summary: "Rwanda enacted a comprehensive Wildlife Conservation Law in 2021, replacing 2012 legislation. The Law imposes life imprisonment for killing gorillas or other critically endangered species, establishes a benefit-sharing mechanism where communities adjacent to national parks receive 10% of park revenues, and criminalizes wildlife product possession. Rwanda's conservation model — embedding community participation in law — is central to its gorilla tourism success.",
    significance: "Rwanda's conservation-financing model — where wildlife protection is legally coupled with mandatory community revenue-sharing — represents an innovative institutional design for aligning local economic interests with conservation. The 10% revenue-sharing mandate, embedded in law rather than administrative policy, is cited globally as a model for sustainable conservation funding. Rwanda's gorilla population recovery (from <300 in 1989 to >1,000 today) is the most documented conservation success story in Africa.",
    citation: "Law No. 31/2021 of 10/06/2021 relating to Wildlife Conservation (Rwanda)",
    type: "legislation",
    tags: ["wildlife", "conservation", "gorilla", "community", "revenue sharing", "Africa"],
  },

  // Malaysia
  {
    id: "my-animal-welfare-2015",
    countryCode: "MY",
    year: 2015,
    title: "Animal Welfare Act 2015 — Replacing Colonial-Era Law",
    court: "Parliament of Malaysia (Dewan Rakyat)",
    summary: "Malaysia enacted the Animal Welfare Act 2015 (Act 772), repealing the Prevention of Cruelty to Animals Act 1953. The new Act imposed stricter penalties for cruelty offences, established an Animal Welfare Board, and for the first time addressed companion animal welfare, veterinary oversight, and animal fighting. Maximum fines increased from RM200 to RM100,000.",
    significance: "Marked Malaysia's transition from a colonial-era cruelty statute to a modern welfare framework. The 500-fold increase in maximum penalties signalled legislative intent to treat animal welfare as a serious public concern, influencing subsequent ASEAN regional dialogue.",
    citation: "Animal Welfare Act 2015 (Act 772), Malaysia; Gazette P.U.(A) 80 (2016)",
    type: "legislation",
    tags: ["welfare", "cruelty", "companion animals", "penalties", "ASEAN"],
  },

  // Mongolia
  {
    id: "mn-animal-law-2012",
    countryCode: "MN",
    year: 2012,
    title: "Law on Animal Health and Welfare",
    court: "State Great Khural (Parliament of Mongolia)",
    summary: "Mongolia enacted comprehensive legislation addressing both animal health and welfare in a unified framework in 2012, with subsequent amendments in 2017. The law established standards for livestock husbandry, veterinary inspection, disease control, and prohibited acts of cruelty. Given Mongolia's pastoralist economy, the law also addressed herder obligations toward working animals.",
    significance: "Notable for integrating animal welfare into an agro-pastoral legal context, reflecting the reality that 30% of the population practices nomadic herding. Demonstrates that welfare frameworks can be adapted to non-sedentary livestock systems — a model relevant across Central Asian steppe jurisdictions.",
    citation: "Law on Animal Health and Welfare, State Great Khural of Mongolia (2012, amended 2017)",
    type: "legislation",
    tags: ["welfare", "livestock", "herding", "veterinary", "Central Asia"],
  },

  // Iran
  {
    id: "ir-environmental-protection-1975",
    countryCode: "IR",
    year: 1975,
    title: "Environmental Protection & Enhancement Act — Wildlife Chapter",
    court: "Imperial Parliament of Iran / Department of Environment",
    summary: "Iran's Environmental Protection and Enhancement Act 1974 (amended 1975) and the companion Hunting and Fishing Act established one of the most comprehensive wildlife conservation regimes in the Middle East, creating protected areas, hunting seasons, and permit systems. The Department of Environment (DOE) was empowered to designate national parks and wildlife refuges, protecting Asiatic cheetah, Persian leopard, and Caspian seal habitats.",
    significance: "Established an enduring institutional framework for wildlife protection that survived the 1979 revolution. Iran's DOE remains one of the strongest wildlife regulatory bodies in the region, and the protected area network created under this Act now covers 10% of national territory.",
    citation: "Environmental Protection and Enhancement Act, Official Gazette No. 9023 (Iran, 1974/1975); Hunting and Fishing Act (1967, amended 1975)",
    type: "legislation",
    tags: ["wildlife", "protected areas", "national parks", "Asiatic cheetah", "Middle East"],
  },

  // Kazakhstan
  {
    id: "kz-animal-welfare-2002",
    countryCode: "KZ",
    year: 2002,
    title: "Law on Veterinary Medicine — Animal Welfare Provisions",
    court: "Parliament of Kazakhstan (Majilis)",
    summary: "Kazakhstan's Law on Veterinary Medicine (2002) and the subsequent Environmental Code (2007) established baseline animal welfare standards alongside veterinary regulation. The legislation prohibited unnecessary suffering in livestock handling and slaughter, and introduced inspection regimes. Kazakhstan also became party to CITES in 1999, enhancing its wildlife trade controls for saiga antelope and snow leopard.",
    significance: "Kazakhstan represents the most significant Central Asian jurisdiction for animal law, given its size and trans-boundary wildlife populations. The CITES accession and saiga conservation efforts under this framework influenced regional cooperation across Kyrgyzstan, Uzbekistan, and Russia.",
    citation: "Law on Veterinary Medicine, Republic of Kazakhstan (2002); CITES accession 1999",
    type: "legislation",
    tags: ["veterinary", "wildlife", "CITES", "saiga", "Central Asia"],
  },

  // Cuba
  {
    id: "cu-animal-welfare-decree-2021",
    countryCode: "CU",
    year: 2021,
    title: "Decree-Law 31 on Animal Welfare",
    court: "Council of State of Cuba",
    summary: "Cuba adopted Decree-Law 31/2021 on Animal Welfare, the country's first comprehensive animal protection legislation. The Decree established prohibitions on cruelty, neglect, and abandonment of companion animals; created registration requirements for owners; and imposed fines of up to 5,000 Cuban pesos. Implementation was assigned to the National Center for Animal and Plant Health (CENSA).",
    significance: "Represented a landmark shift in a country where animal protection legislation was virtually absent. The decree emerged in part from civil society pressure coordinated through social media campaigns, demonstrating the growing role of digital advocacy in Cuban legal reform — a constrained but emerging phenomenon.",
    citation: "Decreto-Ley 31/2021 sobre Bienestar Animal, Gaceta Oficial de la República de Cuba (2021)",
    type: "legislation",
    tags: ["welfare", "companion animals", "cruelty", "Latin America", "Caribbean"],
  },

  // Venezuela
  {
    id: "ve-animal-protection-2009",
    countryCode: "VE",
    year: 2009,
    title: "Law for the Protection of Domestic and Wild Fauna",
    court: "National Assembly of Venezuela",
    summary: "Venezuela enacted the Ley de Protección a la Fauna Doméstica Libre y en Cautiverio (2009), establishing criminal penalties for animal cruelty, neglect, and abandonment. The law covered companion animals, captive wildlife, and animals used in entertainment, and required veterinary certification for pet sales. Penalties included imprisonment of 6 months to 1 year.",
    significance: "One of the earliest comprehensive companion animal welfare statutes in South America with criminal sanctions. The law's wildlife chapter reflected Venezuela's extraordinary biodiversity — it ranks among the top 10 megadiverse nations — and established institutional responsibility for enforcement.",
    citation: "Ley de Protección a la Fauna Doméstica Libre y en Cautiverio, Gaceta Oficial No. 39.338 (Venezuela, 2009)",
    type: "legislation",
    tags: ["companion animals", "wildlife", "cruelty", "criminal penalties", "Latin America"],
  },

  // Panama
  {
    id: "pa-animal-welfare-2012",
    countryCode: "PA",
    year: 2012,
    title: "Law 70 of 2012 on Animal Welfare",
    court: "National Assembly of Panama",
    summary: "Panama enacted Law 70 of September 13, 2012, on Animal Welfare — one of Central America's most comprehensive welfare statutes. The Law prohibited cruelty and neglect, regulated companion animal breeding and sales, and established obligations for responsible pet ownership. It created the National Commission for Animal Welfare (CONBIAP) as the coordinating body, and imposed fines up to $10,000 alongside criminal referral mechanisms.",
    significance: "Served as a model for subsequent animal welfare legislation across Central America. Panama's position as a regional hub for trade and finance meant the law also indirectly affected animal trade regulation through customs and biosecurity frameworks.",
    citation: "Ley N° 70 de 13 de septiembre de 2012, por la cual se dictan medidas para la protección de los animales domésticos, Gaceta Oficial Digital No. 27,116 (Panama)",
    type: "legislation",
    tags: ["welfare", "companion animals", "cruelty", "Central America", "enforcement"],
  },

  // Jamaica
  {
    id: "jm-cruelty-animals-2013",
    countryCode: "JM",
    year: 2013,
    title: "Cruelty to Animals (Amendment) Act 2013",
    court: "Parliament of Jamaica",
    summary: "Jamaica significantly amended its Cruelty to Animals Act in 2013, updating a Victorian-era statute to introduce substantially higher penalties, extend protection to stray and feral animals, and impose obligations on persons responsible for animals in their custody. The amendment raised maximum fines from J$500 (circa 1904) to J$2,000,000 and increased imprisonment terms.",
    significance: "Demonstrated the Caribbean model of reforming inherited colonial cruelty statutes through targeted amendment rather than comprehensive replacement. The penalty escalation — a 4,000-fold increase in nominal terms — reflected both inflation and strengthened legislative intent.",
    citation: "Cruelty to Animals (Amendment) Act 2013, No. 15 of 2013 (Jamaica)",
    type: "legislation",
    tags: ["cruelty", "companion animals", "penalties", "Caribbean", "colonial law reform"],
  },

  // Cyprus
  {
    id: "cy-animal-welfare-law-1994",
    countryCode: "CY",
    year: 1994,
    title: "Animal Welfare Law 1994 (Law 46(I)/1994)",
    court: "House of Representatives of Cyprus",
    summary: "Cyprus enacted its foundational Animal Welfare Law (No. 46(I)/1994) prohibiting cruelty, neglect, and animal fighting, and establishing licensing requirements for animal-related businesses. The law was subsequently amended in 2002 and 2013 to align with EU Directive 2010/63/EU on animal experimentation, extending protections to laboratory animals and strengthening enforcement powers for the Veterinary Services department.",
    significance: "As an EU member since 2004, Cyprus's welfare legislation harmonization trajectory illustrates how EU accession drives upward convergence in animal protection standards. The experimentation provisions align Cyprus with the most advanced EU frameworks, relevant to global pharmaceutical and cosmetics research regulation.",
    citation: "Animal Welfare Law, No. 46(I)/1994 (Cyprus), as amended by No. 109(I)/2013",
    type: "legislation",
    tags: ["welfare", "EU harmonization", "animal testing", "companion animals", "Mediterranean"],
  },

  // Tanzania
  {
    id: "tz-prevention-cruelty-animals-2008",
    countryCode: "TZ",
    year: 2008,
    title: "Prevention of Cruelty to Animals Act (Cap. 154) — Revised Edition",
    court: "Parliament of Tanzania",
    summary: "Tanzania's Prevention of Cruelty to Animals Act, substantially revised as Chapter 154 of the Laws of Tanzania (2008 Revised Edition), prohibits cruel treatment of animals, animal fighting, and abandonment, and grants magistrates power to order forfeiture of animals. Tanzania is also a CITES Party managing significant wildlife populations, and the Wildlife Conservation Act 2009 supplemented animal protection with a comprehensive regime for elephant, lion, and other species.",
    significance: "Tanzania's dual framework — welfare law plus one of Africa's most extensive wildlife protection regimes — reflects its position as a mega-biodiversity hotspot hosting the Serengeti and Ngorongoro. The 2009 Wildlife Conservation Act's community wildlife management provisions have influenced conservation-welfare integration across East Africa.",
    citation: "Prevention of Cruelty to Animals Act Cap. 154 R.E. 2008 (Tanzania); Wildlife Conservation Act No. 5 of 2009 (Tanzania)",
    type: "legislation",
    tags: ["cruelty", "wildlife", "community conservation", "East Africa", "CITES"],
  },

  // Botswana
  {
    id: "bw-animal-welfare-act-2007",
    countryCode: "BW",
    year: 2007,
    title: "Animal Welfare Act No. 24 of 2007",
    court: "Parliament of Botswana",
    summary: "Botswana enacted the Animal Welfare Act 2007 (Act No. 24), one of the most comprehensive animal welfare statutes in sub-Saharan Africa. The Act established detailed provisions covering companion animals, livestock, wild animals in captivity, and animals used in research. It prohibited a wide range of cruelty acts, established an Animal Welfare Advisory Council, and empowered inspectors to enter premises and seize animals.",
    significance: "Botswana's statute is frequently cited as a regional model for sub-Saharan Africa, combining welfare principles with a strong enforcement architecture. Its explicit coverage of captive wildlife — relevant given Botswana's world-leading elephant population — bridges the gap between domestic animal welfare and conservation law.",
    citation: "Animal Welfare Act No. 24 of 2007 (Botswana), Government Gazette Vol. XLV No. 96 (2007)",
    type: "legislation",
    tags: ["welfare", "companion animals", "livestock", "wildlife", "Southern Africa", "enforcement"],
  },

  // Senegal
  {
    id: "sn-animal-welfare-code-1986",
    countryCode: "SN",
    year: 1986,
    title: "Rural Code — Animal Protection Provisions (Decree 86-844)",
    court: "Government of Senegal",
    summary: "Senegal's Decree 86-844 of July 14, 1986, establishing the Rural Code, included provisions on the treatment of livestock and working animals that constituted Senegal's primary animal protection framework for decades. Supplemented by the Forestry Code and the Fisheries Code, these provisions addressed wildlife, habitat, and agricultural animal welfare within a unified rural development framework.",
    significance: "Represents the dominant West African model: animal protection embedded in agricultural and rural development codes rather than standalone welfare legislation. The integrated approach reflects the centrality of livestock to food security and livelihoods, and has been replicated across francophone West Africa.",
    citation: "Décret n° 86-844 du 14 juillet 1986, Code Rural du Sénégal; Loi n° 98-03 du 8 janvier 1998, Code Forestier",
    type: "legislation",
    tags: ["livestock", "rural development", "wildlife", "West Africa", "francophone"],
  },

  // Nepal
  {
    id: "np-animal-slaughter-2055",
    countryCode: "NP",
    year: 1999,
    title: "Animal Slaughter and Meat Inspection Act 2055 (1999) — Welfare Standards",
    court: "Parliament of Nepal",
    summary: "Nepal enacted the Animal Slaughter and Meat Inspection Act 2055 BS (1999 AD), establishing ante-mortem and post-mortem inspection requirements, licensed slaughterhouse standards, and basic pre-slaughter handling requirements. The Act supplemented Nepal's earlier Pashupati Animal Slaughter Act and the Prevention of Cruelty to Animals Act. The Supreme Court of Nepal has subsequently issued several orders requiring authorities to enforce existing cruelty prohibitions.",
    significance: "Nepal's legal framework illustrates the interaction of Hindu legal traditions — which accord sacred status to cows — with modern welfare legislation. The country's constitutional prohibition on cow slaughter (the cow is national animal) creates a unique context where religious law and welfare legislation intersect, with implications for pluralist legal systems globally.",
    citation: "Animal Slaughter and Meat Inspection Act, 2055 BS (1999 AD) (Nepal); Prevention of Cruelty to Animals Act, 2024 BS (1967 AD) (Nepal)",
    type: "legislation",
    tags: ["slaughter", "welfare", "Hindu law", "national animal", "South Asia"],
  },

  // Cambodia
  {
    id: "kh-wildlife-protection-2008",
    countryCode: "KH",
    year: 2008,
    title: "Law on Forestry 2002 & Wildlife Protection Sub-Decree 2008",
    court: "Royal Government of Cambodia",
    summary: "Cambodia's Law on Forestry (2002) and the sub-decree on Wildlife Hunting and Exploitation (2008) together constituted the primary framework for wildlife protection in Cambodia. The sub-decree classified wildlife into three tiers — totally protected, conditionally protected, and unprotected — with severe penalties including imprisonment for trafficking totally protected species including Irrawaddy dolphin, Asian elephant, and Indochinese tiger. The Environment Ministry was empowered to designate wildlife sanctuaries.",
    significance: "Cambodia's tiered wildlife classification system — though undermined by enforcement challenges — has been studied as a model for graduated protection regimes in low-capacity states. The Mekong River dolphin provisions have particular resonance for transboundary wildlife management across Laos, Cambodia, and Vietnam.",
    citation: "Law on Forestry (2002), Royal Decree NS/RKM/0802/016 (Cambodia); Sub-Decree on Wildlife Exploitation, No. 10/ANK/BK (2008) (Cambodia)",
    type: "legislation",
    tags: ["wildlife", "protected species", "elephant", "dolphin", "Southeast Asia", "ASEAN"],
  },

  // Qatar
  {
    id: "qa-animal-welfare-2009",
    countryCode: "QA",
    year: 2009,
    title: "Law No. 2 of 2009 on Animal Welfare",
    court: "Amir of Qatar / Ministry of Environment",
    summary: "Qatar enacted Law No. 2 of 2009 on Animal Welfare, one of the first comprehensive animal welfare statutes in the Gulf Cooperation Council states. The Law prohibited acts of cruelty, neglect, and abandonment of animals, established requirements for veterinary care, and created licensing requirements for pet shops and breeding establishments. The Ministry of Environment was designated the competent authority for enforcement.",
    significance: "Qatar's 2009 law was enacted ahead of similar legislation in most Gulf states and has influenced animal welfare discourse across the GCC. Qatar's hosting of the 2022 FIFA World Cup brought animal welfare issues — particularly regarding working animals and wildlife — into international focus, demonstrating how major events can accelerate welfare reform.",
    citation: "Law No. 2 of 2009 on Animal Welfare, Qatar Official Gazette No. 6 (2009)",
    type: "legislation",
    tags: ["welfare", "Gulf", "cruelty", "companion animals", "GCC", "Middle East"],
  },

  // Kuwait
  {
    id: "kw-animal-welfare-2015",
    countryCode: "KW",
    year: 2015,
    title: "Law No. 17 of 2015 on Environmental Protection — Animal Welfare Chapter",
    court: "National Assembly of Kuwait",
    summary: "Kuwait's Law No. 17 of 2015 on Environmental Protection included a dedicated chapter on animal welfare, prohibiting cruelty to both domestic and wild animals, restricting animal fighting, and establishing penalties of imprisonment up to one year. The law was supplemented by Ministry of Public Health regulations governing pet ownership in Kuwait City, where companion animal keeping had grown substantially.",
    significance: "Kuwait's integrated environmental-welfare framework demonstrates the GCC pattern of treating animal welfare as a subset of environmental law rather than a standalone body. This integration has facilitated stronger enforcement capacity through environmental agencies while limiting the development of independent welfare advocacy institutions.",
    citation: "Law No. 17 of 2015 on Environmental Protection (Kuwait), Kuwait Official Gazette (2015)",
    type: "legislation",
    tags: ["welfare", "environmental law", "Gulf", "GCC", "Middle East", "cruelty"],
  },

  // Oman
  {
    id: "om-animal-welfare-2010",
    countryCode: "OM",
    year: 2010,
    title: "Animal Wealth Law — Veterinary and Welfare Provisions",
    court: "Government of Oman (Royal Decree)",
    summary: "Oman's Animal Wealth Law (issued by Royal Decree and administered by the Ministry of Agriculture, Fisheries and Water Resources) established comprehensive provisions for animal health, veterinary oversight, and basic animal welfare in Oman. The law addressed livestock, companion animals, and wildlife, with subsequent implementing regulations issued in 2010 and 2016. Oman is also a CITES Party with particular attention to Arabian oryx and sea turtle conservation.",
    significance: "Oman's Arabian oryx reintroduction program — the first successful reintroduction of a locally extinct mammal — is considered one of conservation law's great achievements. The country's wildlife conservation framework, operating alongside the welfare statute, demonstrates how traditional Bedouin stewardship ethics can be integrated into modern wildlife governance.",
    citation: "Animal Wealth Law, Royal Decree No. 64/2006 and implementing regulations (2010, 2016) (Oman); CITES obligations",
    type: "legislation",
    tags: ["welfare", "wildlife", "Arabian oryx", "conservation", "Gulf", "reintroduction"],
  },

  // Bahrain
  {
    id: "bh-animal-welfare-2012",
    countryCode: "BH",
    year: 2012,
    title: "Resolution No. 7 of 2012 on Animal Welfare",
    court: "Ministry of Municipalities Affairs and Agriculture, Bahrain",
    summary: "Bahrain's Ministry issued Resolution No. 7 of 2012 on Animal Welfare, establishing standards for the humane treatment of companion animals, livestock handling, and veterinary care. The resolution prohibited acts of cruelty, neglect, and animal fighting, and required registration of pet shops and veterinary establishments. Enforcement was assigned to the Directorate of Animal Resources.",
    significance: "Bahrain's approach — using ministerial resolution rather than primary legislation — reflects a common Gulf regulatory pattern that allows for rapid adoption and amendment of welfare standards without parliamentary processes. This flexibility has enabled faster response to emerging welfare concerns, though it creates weaker legal protections compared to primary legislation.",
    citation: "Resolution No. 7/2012 on Animal Welfare, Ministry of Municipalities Affairs and Agriculture (Bahrain, 2012)",
    type: "legislation",
    tags: ["welfare", "companion animals", "Gulf", "GCC", "administrative regulation"],
  },

  // Armenia
  {
    id: "am-animal-welfare-2022",
    countryCode: "AM",
    year: 2022,
    title: "Law on Animal Treatment — First Comprehensive Welfare Statute",
    court: "National Assembly of Armenia",
    summary: "Armenia enacted the Law on the Treatment of Animals in 2022, the country's first comprehensive animal welfare statute. The Law established minimum standards for animal keeping, prohibited acts of cruelty and organized animal fighting, restricted the use of animals in entertainment, and imposed veterinary care obligations on owners. The law created an Animal Welfare Council to oversee implementation.",
    significance: "Enacted following years of civil society advocacy by Armenian animal protection organizations, the 2022 law marked a significant shift in the post-Soviet Caucasus. Georgia and Armenia — both pursuing EU association agreements — have independently enacted modern welfare statutes as part of broader legal convergence with European standards, suggesting that EU approximation acts as a welfare reform driver.",
    citation: "RA Law on the Treatment of Animals, adopted by the National Assembly of Armenia (2022)",
    type: "legislation",
    tags: ["welfare", "cruelty", "Caucasus", "EU approximation", "post-Soviet"],
  },

  // Azerbaijan
  {
    id: "az-animal-world-protection-1999",
    countryCode: "AZ",
    year: 1999,
    title: "Law on the Protection of the Animal World",
    court: "Milli Majlis (Parliament of Azerbaijan)",
    summary: "Azerbaijan enacted the Law on the Protection of the Animal World in 1999, establishing the primary framework for wildlife management, hunting regulation, and the protection of endangered species. The law designated protected species, regulated hunting licenses and seasons, and empowered the Ministry of Ecology and Natural Resources to establish wildlife reserves. The law was supplemented by a 2011 amendment addressing invasive species and biodiversity commitments under the CBD.",
    significance: "Azerbaijan's Caucasus position — home to a unique biodiverse corridor connecting Europe and Asia — makes its wildlife protection framework significant for regional conservation. The Caucasian leopard and Caspian tiger (extinct) feature in the protected species lists, reflecting the law's engagement with globally threatened species.",
    citation: "Law on the Protection of the Animal World, Republic of Azerbaijan (1999, amended 2011)",
    type: "legislation",
    tags: ["wildlife", "protected species", "Caucasus", "biodiversity", "hunting"],
  },

  // Fiji
  {
    id: "fj-prevention-cruelty-animals-2021",
    countryCode: "FJ",
    year: 2021,
    title: "Prevention of Cruelty to Animals Act 2021",
    court: "Parliament of Fiji",
    summary: "Fiji enacted the Prevention of Cruelty to Animals Act 2021, replacing colonial-era animal cruelty legislation. The Act established comprehensive welfare standards for companion animals, livestock, and wild animals, prohibited animal fighting and unnecessary suffering, and created a national Animal Welfare Committee. Penalties included fines up to FJD 100,000 and imprisonment up to five years for aggravated cruelty.",
    significance: "Fiji's 2021 Act is the most comprehensive animal welfare legislation in the Pacific island region and has served as a model for discussions in Vanuatu, Solomon Islands, and Papua New Guinea. The Act's explicit recognition of animal sentience — unusual in Pacific legislation — places Fiji ahead of many of its regional peers.",
    citation: "Prevention of Cruelty to Animals Act 2021 (No. 31 of 2021) (Fiji)",
    type: "legislation",
    tags: ["welfare", "sentience", "Pacific", "cruelty", "companion animals", "Oceania"],
  },

  // Paraguay
  {
    id: "py-animal-welfare-2013",
    countryCode: "PY",
    year: 2013,
    title: "Law No. 4840 on Animal Welfare",
    court: "Congress of Paraguay",
    summary: "Paraguay enacted Law No. 4840 on Animal Welfare in 2013, establishing the country's first comprehensive animal protection framework. The law prohibited cruelty, abandonment, and animal fighting; required veterinary oversight for intensive livestock operations; and created a National Animal Welfare Commission with representation from NGOs, universities, and government. Penalties included fines and community service.",
    significance: "Paraguay's law emerged from intensive civil society advocacy and is notable for its multi-stakeholder enforcement structure, which has been studied as a model for resource-constrained middle-income countries seeking to build compliance without heavy-handed state enforcement. The provision allowing NGO representatives on the commission has strengthened implementation compared to pure government models.",
    citation: "Ley N° 4840 de Bienestar Animal, Paraguay (2013), Gaceta Oficial",
    type: "legislation",
    tags: ["welfare", "cruelty", "companion animals", "Latin America", "multi-stakeholder"],
  },

  // Mozambique
  {
    id: "mz-environment-wildlife-2014",
    countryCode: "MZ",
    year: 2014,
    title: "Wildlife Conservation Law No. 16/2014",
    court: "Assembly of the Republic of Mozambique",
    summary: "Mozambique enacted Law No. 16/2014 on Wildlife Conservation, replacing legislation from the colonial era and the 1990s. The law established a comprehensive system for wildlife management in Mozambique's extensive protected area network (including Gorongosa National Park, Niassa Reserve, and the Limpopo transfrontier park). It introduced community-based natural resource management (CBNRM) provisions, granting rural communities rights over wildlife revenues in a 20% revenue-sharing scheme.",
    significance: "Mozambique's 2014 law is significant for its CBNRM provisions, which represent one of Africa's most advanced frameworks for aligning community incentives with conservation. The Gorongosa restoration project — one of Africa's most celebrated conservation initiatives — operates under this legal framework and has influenced conservation law discussions across the SADC region.",
    citation: "Lei n.° 16/2014 de 20 de junho (Lei da Conservação), Boletim da República de Moçambique (2014)",
    type: "legislation",
    tags: ["wildlife", "conservation", "community", "CBNRM", "Gorongosa", "Southern Africa", "SADC"],
  },

  // Laos
  {
    id: "la-wildlife-wildlife-2007",
    countryCode: "LA",
    year: 2007,
    title: "Wildlife and Aquatic Resources Law 2007",
    court: "National Assembly of Laos PDR",
    summary: "The Lao PDR Wildlife and Aquatic Resources Law (2007, amended 2019) established the primary framework for wildlife protection in Laos, classifying species into three protection categories and prohibiting hunting, trapping, and trade of Category I (totally protected) species including saola, Asian elephant, and tiger. The 2019 amendments strengthened penalties and expanded the banned species list in response to Laos's position as a significant regional wildlife trafficking hub.",
    significance: "Laos faces acute conservation pressure as a transit hub for the illegal wildlife trade from Southeast Asia to China. The 2019 amendments — which included a ban on wildlife markets of the kind implicated in disease spillover events — were enacted before and accelerated after COVID-19, making Laos one of the first countries to take legislative action on wildlife markets in the pandemic context.",
    citation: "Wildlife and Aquatic Resources Law, National Assembly of the Lao PDR (2007, amended 2019); Resolution No. 03/PM (2019)",
    type: "legislation",
    tags: ["wildlife", "trafficking", "protected species", "Southeast Asia", "ASEAN", "pandemic"],
  },

  // United States — Indigenous Treaty Rights
  {
    id: "us-boldt-decision-1974",
    countryCode: "US",
    year: 1974,
    title: "United States v. Washington (Boldt Decision) — Indigenous Treaty Fishing Rights",
    court: "U.S. District Court, W.D. Washington (Judge George Boldt)",
    summary: "Judge George Boldt's landmark ruling in United States v. Washington (384 F. Supp. 312, 1974) held that Pacific Northwest tribes (Yakama, Lummi, Nez Perce, and 19 others) retained the right under 19th-century treaties to 50% of the harvestable salmon and steelhead in their ceded territories. The ruling required Washington State to co-manage fisheries with tribal authorities and prohibited state regulations that discriminated against tribal fishers. The Ninth Circuit affirmed (520 F.2d 676, 1975), and the Supreme Court affirmed (Washington v. Washington State Commercial Passenger Fishing Vessel Association, 1979). In 2018, the Supreme Court reaffirmed in Washington v. United States that the treaty right includes an obligation to preserve fish habitat.",
    significance: "The Boldt Decision is the most consequential wildlife treaty rights ruling in US history, directly establishing that Indigenous treaty rights create enforceable wildlife management co-governance obligations. It forced the creation of a formal treaty tribes co-management system that has become a global model for Indigenous wildlife governance. The 2018 Washington v. United States extension — requiring state road-culvert replacement to preserve salmon passage — established that treaty fishing rights include environmental integrity of fish habitat, making the Boldt lineage a foundation of Indigenous environmental rights jurisprudence.",
    citation: "United States v. Washington, 384 F. Supp. 312 (W.D. Wash. 1974); Washington v. Washington State Commercial Passenger Fishing Vessel Ass'n, 443 U.S. 658 (1979); Washington v. United States, 138 S. Ct. 1832 (2018); Charles Wilkinson, Messages from Frank's Landing (2000, U. Washington Press)",
    type: "case",
    tags: ["indigenous rights", "treaty rights", "fishing rights", "salmon", "co-management", "Pacific Northwest", "environmental rights", "tribal law"],
  },

  // South Africa — Ubuntu and Customary Wildlife Law
  {
    id: "za-communal-land-rights-2004",
    countryCode: "ZA",
    year: 2004,
    title: "Communal Land Rights Act and Ubuntu Philosophy — Customary Wildlife Stewardship in Southern Africa",
    court: "Parliament of South Africa / Constitutional Court",
    summary: "South Africa's post-apartheid legal framework has incorporated the ubuntu philosophy (umuntu ngumuntu ngabantu — 'a person is a person through other persons') into constitutional jurisprudence, extending its relational ethic to environmental stewardship. The Communal Land Rights Act 11 of 2004, read together with the National Environmental Management: Biodiversity Act 10 of 2004, sought to recognize customary community-based wildlife management systems in which wildlife is treated as a communal resource held in trust across generations. The Constitutional Court in Alexkor Ltd v Richtersveld Community (2003) recognized customary law's stewardship of natural resources as generating legally enforceable rights.",
    significance: "The integration of ubuntu philosophy into constitutional environmental law creates a legal framework in which the relational-community ethic of customary African law — in which humans, animals, and the land form an interdependent community — has normative force. This contrasts fundamentally with the Roman law res nullius framework (wild animals owned by no one until captured) and the common law property framework. The Richtersveld judgment established that customary law stewardship can create property rights in natural resources, and subsequent NEMA biodiversity regulations have incorporated community-based natural resource management. The ubuntu approach to wildlife — as a community trust resource rather than private property — is now influencing conservation frameworks across SADC.",
    citation: "Alexkor Ltd v Richtersveld Community [2003] ZACC 18; National Environmental Management: Biodiversity Act 10 of 2004 (South Africa); Communal Land Rights Act 11 of 2004; Cathi Albertyn, 'Substantive Equality and Transformation', 23 SAJHR 253 (2007); Mogobe Ramose, African Philosophy Through Ubuntu (1999)",
    type: "constitutional",
    tags: ["ubuntu", "customary law", "South Africa", "communal rights", "wildlife stewardship", "African philosophy", "community-based conservation", "SADC"],
  },

  // United States — Happy the Elephant
  {
    id: "us-happy-elephant-2022",
    countryCode: "US",
    year: 2022,
    title: "Nonhuman Rights Project v. Breheny — Happy the Elephant",
    court: "New York Court of Appeals",
    summary: "The New York Court of Appeals ruled 5-2 that Happy, an Asian elephant at the Bronx Zoo, is not a 'person' entitled to habeas corpus relief. The majority held that habeas corpus is designed for human liberty and cannot be extended to nonhuman animals. Two dissenting justices argued Happy's cognitive complexity warranted personhood recognition. Five of seven judges wrote separate opinions.",
    significance: "The most significant US animal personhood ruling to date. While denying relief, the extensive judicial engagement — including two forceful dissents by Chief Judge DiFiore and Judge Wilson — signals that animal personhood is now a serious question in US jurisprudence. The case has been cited in subsequent litigation across multiple US states and internationally.",
    citation: "Nonhuman Rights Project, Inc. v. Breheny, 38 N.Y.3d 555 (2022)",
    type: "case",
    tags: ["personhood", "habeas corpus", "elephant", "cognitive complexity", "dissent"],
  },

  // Ecuador — Estrellita the Woolly Monkey
  {
    id: "ec-estrellita-2022",
    countryCode: "EC",
    year: 2022,
    title: "Estrellita — Rights of Nature Applied to Individual Animal",
    court: "Constitutional Court of Ecuador (Case No. 253-20-JH)",
    summary: "Ecuador's Constitutional Court ruled that a woolly monkey (Lagothrix lagothricha) named Estrellita had individual rights under the Rights of Nature framework (Articles 71-74 of the 2008 Constitution). Judge Ramiro Avila Santamaria held that animals are subjects of rights (sujetos de derechos) distinct from property, establishing interspecies ecological justice. The ruling prohibited keeping wild animals as pets.",
    significance: "First judicial application of constitutional Rights of Nature to an individual animal anywhere in the world. Extends Ecuador's 2008 Pachamama framework from ecosystems to individual sentient beings. Cited in Colombia, India, and Argentina as authority for animal rights jurisprudence.",
    citation: "Corte Constitucional del Ecuador, Caso No. 253-20-JH/22, Sentencia No. 253-20-JH (January 2022)",
    type: "case",
    tags: ["rights of nature", "Pachamama", "woolly monkey", "individual rights", "sentience"],
  },

  // Zimbabwe — Cecil the Lion
  {
    id: "zw-cecil-lion-2015",
    countryCode: "ZW",
    year: 2015,
    title: "Cecil the Lion — Global Wildlife Law Catalyst",
    court: "Zimbabwe Parks and Wildlife Management Authority / US Fish and Wildlife Service",
    summary: "The killing of Cecil, a GPS-collared research lion from Hwange National Park, by an American trophy hunter in July 2015 triggered global outrage and major regulatory consequences. Zimbabwe suspended lion hunting permits in areas around national parks. The US Fish and Wildlife Service listed African lions under the Endangered Species Act (2016), requiring permits for trophy imports. Multiple US airlines banned trophy shipments.",
    significance: "While not a court case, Cecil's killing was a watershed moment in wildlife law, catalyzing regulatory reforms across multiple jurisdictions. It demonstrated how a single wildlife incident could trigger international legal responses, accelerate endangered species listings, and reshape the economics of trophy hunting. The case study is now standard in animal law curricula.",
    citation: "US Fish and Wildlife Service, Final Rule: Listing Two Lion Subspecies, 81 Fed. Reg. 1286 (Jan. 12, 2016); Macdonald et al., 'Cecil: A Moment or a Movement?', Animals 6(5):26 (2016)",
    type: "case",
    tags: ["trophy hunting", "lion", "ESA listing", "international", "Hwange"],
  },

  // EU — End the Cage Age
  {
    id: "eu-end-cage-age-2020",
    countryCode: "FR",
    year: 2020,
    title: "End the Cage Age — European Citizens' Initiative",
    court: "European Commission / European Parliament",
    summary: "The 'End the Cage Age' European Citizens' Initiative collected 1.4 million certified signatures across EU member states, calling for an end to caged farming. In June 2021, the European Commission committed to proposing legislation by 2023 to phase out and finally prohibit the use of cages for laying hens, sows, calves, rabbits, ducks, geese, and other farmed animals, with a target date of 2027.",
    significance: "The largest animal welfare citizens' initiative in EU history. Demonstrated that direct democratic mechanisms can drive animal welfare legislation at the supranational level. The Commission's commitment to end caged farming for over 300 million animals annually represents the most ambitious farm animal welfare reform in EU history.",
    citation: "European Citizens' Initiative: 'End the Cage Age' (ECI(2018)000004); European Commission Response COM(2021) 396 final (June 30, 2021)",
    type: "legislation",
    tags: ["EU", "farm animals", "caged farming", "citizens initiative", "direct democracy"],
  },
];

// HISTORICAL CASES: Ancient Law to Early Modern Period
// All years in CE; negative = BCE (e.g. -2100 = 2100 BCE)
// countryCode = modern ISO code of the region
// ============================================================
export const historicalCases: LandmarkCase[] = [

  // ─── ANCIENT MESOPOTAMIA ──────────────────────────────────

  {
    id: "iq-ur-nammu-2100bce",
    countryCode: "IQ",
    year: -2100,
    title: "Laws of Ur-Nammu — Earliest Known Protection of Working Animals",
    court: "Ur-Nammu, King of Ur (Third Dynasty of Ur, Sumer)",
    civilization: "Sumer / Third Dynasty of Ur",
    era: "ancient",
    summary: "The Laws of Ur-Nammu (~2100 BCE), the oldest extant law code, include provisions governing the use of oxen, donkeys, and other working animals in agriculture. Several provisions establish liability for injuries caused by animals and regulate the rental of draft animals, implicitly creating duties of care for those who used them. The laws treat animals primarily as economic assets but the regulatory framework prevents their arbitrary destruction.",
    significance: "As the earliest known written law code, Ur-Nammu establishes that the legal regulation of human-animal relationships predates all known states. The provisions on animal rental liability represent the first recorded legal framework for what we would today call 'duty of care' toward working animals — a concept foundational to all subsequent animal law.",
    citation: "Samuel Noah Kramer, 'The Ur-Nammu Law Code', Orientalia 23 (1954), pp. 40–51; Martha Roth, Law Collections from Mesopotamia and Asia Minor (2nd ed., 1997), pp. 13–22",
    type: "ancient",
    tags: ["ancient law", "working animals", "liability", "Mesopotamia", "property", "duty of care"],
  },

  {
    id: "iq-hammurabi-1754bce",
    countryCode: "IQ",
    year: -1754,
    title: "Code of Hammurabi — Ox Goring, Veterinary Liability & Animal Rental",
    court: "Hammurabi, King of Babylon (Old Babylonian Period)",
    civilization: "Old Babylonian Empire",
    era: "ancient",
    summary: "The Code of Hammurabi (~1754 BCE) contains at least ten provisions directly governing human-animal relations. §§250–252 establish a graduated liability scheme for ox-goring injuries: if an ox kills a person and the ox is known to be dangerous, the owner is held fully liable; if the ox was not previously dangerous, liability is partial. §§224–225 regulate veterinary practice: a veterinarian who performs surgery on an ox or donkey and kills it must pay one-quarter of the animal's value to the owner — the earliest known regulation of veterinary malpractice. §§241–249 govern the rental of draft animals, creating duties of care for those who hire oxen.",
    significance: "The Code of Hammurabi contains the world's first veterinary malpractice law and its first structured liability scheme for animal-caused harm. The ox-goring provisions prefigure modern concepts of scienter (knowledge of dangerous propensity) and strict liability. The veterinary provisions show that specialized animal care was already legally regulated — a direct ancestor of modern veterinary licensing law. These sections were the subject of the famous Harvard Law Review article by Cornelius Peck (1962) tracing strict liability to Hammurabi.",
    citation: "Code of Hammurabi, §§224–225, 241–252; Louvre Museum, Department of Near Eastern Antiquities (stele AO 1295.); Cornelius J. Peck, 'Negligence and Liability Without Fault in Tort Law', 46 Wash. L. Rev. 225 (1971)",
    type: "ancient",
    tags: ["ancient law", "ox goring", "veterinary law", "malpractice", "strict liability", "scienter", "Mesopotamia", "Hammurabi"],
  },

  {
    id: "iq-ur-nammu-livestock-2100bce",
    countryCode: "IQ",
    year: -2050,
    title: "Lipit-Ishtar Law Code — Animal Property and Damage",
    court: "Lipit-Ishtar, King of Isin (Old Babylonian Period)",
    civilization: "Kingdom of Isin, Sumer",
    era: "ancient",
    summary: "The Laws of Lipit-Ishtar (~2050–2000 BCE) include provisions on the destruction of ox pens and liability for animals that damage property. The code establishes that an owner is liable for damage caused by animals under their control and sets penalties for destroying another's property including livestock. The code reveals a sophisticated understanding of fault-based and strict liability principles applied to animal-related disputes.",
    significance: "The Lipit-Ishtar code forms part of the Mesopotamian chain of legal development between Ur-Nammu and Hammurabi, demonstrating that animal law was a persistent concern across successive Sumerian and Babylonian legal systems. The property damage provisions foreshadow the Roman law concept of pauperies — liability for harm caused by one's animals — that became a foundation of civil law systems.",
    citation: "Martha Roth, Law Collections from Mesopotamia and Asia Minor (2nd ed., 1997), pp. 23–35; F.R. Steele, 'The Code of Lipit-Ishtar', American Journal of Archaeology 52 (1948), pp. 425–450",
    type: "ancient",
    tags: ["ancient law", "property damage", "livestock", "liability", "Mesopotamia", "pauperies precursor"],
  },

  // ─── ANCIENT EGYPT ───────────────────────────────────────

  {
    id: "eg-sacred-animals-1350bce",
    countryCode: "EG",
    year: -1350,
    title: "Sacred Animal Cults and Legal Protections in Ancient Egypt",
    court: "Pharaonic Administration (New Kingdom, 18th–20th Dynasties)",
    civilization: "New Kingdom Egypt",
    era: "ancient",
    summary: "Ancient Egyptian law accorded sacred legal status to numerous species — cats (associated with Bastet), ibis and baboons (Thoth), crocodiles (Sobek), bulls (Apis), and falcons (Horus). The deliberate killing of a sacred animal — including cats — was a capital offence in some periods. A report by Diodorus Siculus (~60 BCE) documents the lynching of a Roman soldier who accidentally killed a cat, despite the Pharaoh's attempt to intervene. Temple precincts maintained formal sanctuaries for sacred species with dedicated priests and legal protections enforced by temple authorities.",
    significance: "The Egyptian sacred animal system constitutes the earliest known legal regime granting category-specific protections to particular species for non-economic reasons — essentially the first 'protected species' law. The capital punishment for killing certain cats prefigures modern endangered species legislation by millennia. The institutional framework (temple sanctuaries with dedicated guardians) is a direct ancestor of modern wildlife refuges.",
    citation: "Diodorus Siculus, Bibliotheca Historica I.83; E. Otto, 'Sacred Animals', in: W. Helck & E. Otto (eds.), Lexikon der Ägyptologie, vol. 5 (1984); Salima Ikram, Divine Creatures: Animal Mummies in Ancient Egypt (2005)",
    type: "ancient",
    tags: ["sacred animals", "protected species", "ancient Egypt", "capital punishment", "cats", "ibis", "divine law"],
  },

  // ─── ANCIENT INDIA: ASHOKAN EDICTS ───────────────────────

  {
    id: "in-ashoka-edicts-250bce",
    countryCode: "IN",
    year: -250,
    title: "Edicts of Ashoka — First State-Mandated Animal Protection Program",
    court: "Emperor Ashoka Maurya (Maurya Empire)",
    civilization: "Maurya Empire",
    era: "ancient",
    summary: "Emperor Ashoka (~268–232 BCE), following his conversion to Buddhism after the Kalinga War, issued a series of edicts inscribed on rock faces and pillars across the subcontinent that constitute the first known state-legislated animal protection program. Pillar Edict V (Allahabad-Kosam Pillar) lists 26 species of animals that must not be killed, establishes protected days on which animal slaughter is prohibited, bans the burning of forests 'to kill living creatures', and abolishes the royal hunt. Rock Edict I prohibits animal sacrifice in the royal kitchen. Ashoka also established veterinary hospitals — the first recorded public animal health institutions.",
    significance: "Ashoka's edicts are the first known instance of a state exercising sovereign power to protect animals for reasons of ethics and religion rather than economic utility. The prohibition on forest burning to protect wildlife anticipates modern habitat protection law by over two millennia. The veterinary hospital system is the earliest recorded public institution dedicated to animal care. The edicts directly influenced Buddhist legal traditions across Asia and are frequently cited by contemporary animal rights theorists (Peter Singer, Gary Francione) as proof that animal protection is not a modern Western invention.",
    citation: "Pillar Edict V, Allahabad-Kosam Pillar; Rock Edict I; N.A. Nikam & Richard McKeon (eds.), The Edicts of Ashoka (1959); Romila Thapar, Ashoka and the Decline of the Mauryas (3rd ed., 2012); Patrick Olivelle (ed.), Ashoka: Portrait of a Philosopher King (2012)",
    type: "ancient",
    tags: ["Ashoka", "Buddhism", "protected species", "animal hospitals", "ahimsa", "ancient India", "first animal protection law", "state action"],
  },

  {
    id: "in-arthashastra-300bce",
    countryCode: "IN",
    year: -300,
    title: "Arthaśāstra of Kauṭilya — Elephant Forests, Wildlife Reserves & Cruelty Prohibitions",
    court: "Kauṭilya (Chanakya), Chief Minister of Chandragupta Maurya",
    civilization: "Maurya Empire",
    era: "ancient",
    summary: "Kauṭilya's Arthaśāstra (~300 BCE), the ancient Indian treatise on statecraft, contains an extensive chapter on the Superintendent of Elephants and provisions for royal game preserves (abhayāranya — literally 'forest of fearlessness'). The work prohibits the killing of female elephants, calves, and elephants in rut; establishes graduated fines for injuries caused to elephants; and requires veterinary care for state-owned elephants. Chapter 2.2 prescribes fines for cruelty to draught animals and prohibits overloading.",
    significance: "The abhayāranya concept represents one of the earliest formalized wildlife sanctuary systems in world history. The prohibitions on cruelty to draught animals and the veterinary care requirements for state elephants show that welfare-adjacent obligations existed in statecraft texts centuries before Ashoka. Modern Indian wildlife law — including the Wildlife Protection Act 1972's elephant sanctuary provisions — traces its conceptual lineage to the Arthaśāstra tradition.",
    citation: "Kauṭilya, Arthaśāstra, Book II, Chapter 31 (Superintendent of Elephants); R. Shamasastry (trans.), Kautilya's Arthashastra (8th ed., 1967); Patrick Olivelle (trans.), Kautilya: The Arthasastra (2013)",
    type: "ancient",
    tags: ["Arthashastra", "elephant", "wildlife sanctuary", "abhayaranya", "ancient India", "veterinary", "cruelty", "Kautilya"],
  },

  {
    id: "in-manusmriti-200ce",
    countryCode: "IN",
    year: 200,
    title: "Manusmṛti — Ahimsa, Animal Sacrifice Regulation & Legal Status of Cattle",
    court: "Dharmaśāstra tradition (attributed to Manu)",
    civilization: "Classical India",
    era: "ancient",
    summary: "The Manusmṛti (Laws of Manu, ~200 BCE–200 CE), the most influential Hindu legal text, contains extensive provisions on the treatment of animals. Chapter 5 regulates animal sacrifice, distinguishing permissible sacrificial contexts from wanton killing. The principle of ahimsa (non-harm) — already developed in Jain and Buddhist traditions — is integrated into Brahmanical legal discourse. The text establishes that causing pain to animals without reason is a sin (pāpa) punishable in the afterlife. Cattle are accorded particular sacred status. The concept of pashu-dharma (duty toward animals) runs through several chapters.",
    significance: "The Manusmṛti's treatment of animal killing demonstrates how Hindu legal thought integrated ritual, moral, and quasi-legal obligations toward animals into a comprehensive dharmaśāstra framework. The ahimsa principle, operating simultaneously as religious duty and emerging legal norm, created a normative environment in which animal protection became embedded in governance across the subcontinent — directly influencing Gandhi's political philosophy and modern Indian constitutional jurisprudence on cow slaughter.",
    citation: "Manusmṛti, V.27–55 (animal sacrifice), VIII.285–286 (cruelty); Patrick Olivelle (trans.), Manu's Code of Law (2005); Wendy Doniger & Brian K. Smith (trans.), The Laws of Manu (1991, Penguin Classics)",
    type: "ancient",
    tags: ["Manusmriti", "ahimsa", "dharma", "Hindu law", "cattle", "animal sacrifice", "ancient India", "non-harm"],
  },

  // ─── ANCIENT GREEK PHILOSOPHY ─────────────────────────────

  {
    id: "gr-pythagoras-570bce",
    countryCode: "GR",
    year: -570,
    title: "Pythagoras — Metempsychosis, Animal Souls & the First Western Animal Ethics",
    court: "Pythagoras of Samos (philosopher, Croton, Magna Graecia)",
    civilization: "Ancient Greece",
    era: "ancient",
    summary: "Pythagoras of Samos (~570–495 BCE) taught metempsychosis — the transmigration of souls between human and animal bodies across lives — and on that basis argued that killing and eating animals was morally equivalent to killing humans. He advocated strict vegetarianism and established a philosophical community in Croton (southern Italy) whose members abstained from animal sacrifice and meat. Ovid's Metamorphoses (Book XV) preserves a lengthy speech attributed to Pythagoras condemning animal slaughter. Porphyry (Vita Pythagorae) and Diogenes Laertius document the breadth of Pythagorean prohibition. Plutarch's De Esu Carnium (On Eating Flesh) develops the Pythagorean argument with explicit welfare reasoning.",
    significance: "Pythagoras is the first recorded Western philosopher to argue that animals have morally significant inner lives — souls continuous with human souls — and to translate that belief into a community legal norm (abstention from meat). The 'Pythagorean diet' was the standard term for vegetarianism in European languages until the 19th century. The Pythagorean tradition — transmitted through Porphyry, Plutarch, and Neoplatonism — constitutes the only sustained pre-modern Western intellectual current that challenged the property status of animals on philosophical grounds, and it directly influenced early animal rights theorists including Jeremy Bentham (who cites Plutarch) and Tom Regan.",
    citation: "Ovid, Metamorphoses, XV.60–478 (Pythagorean speech); Porphyry, Vita Pythagorae; Diogenes Laertius, Lives of the Eminent Philosophers, VIII.1–50; Plutarch, De Esu Carnium (On Eating Flesh), Moralia 993A–999B; Richard Sorabji, Animal Minds and Human Morals (1993, Duckworth), Ch. 13",
    type: "ancient",
    tags: ["Pythagoras", "metempsychosis", "transmigration", "vegetarianism", "animal souls", "ancient Greece", "philosophy", "moral status"],
  },

  {
    id: "gr-porphyry-268ce",
    countryCode: "GR",
    year: 268,
    title: "Porphyry — De Abstinentia ab Esu Animalium (On Abstinence from Animal Food)",
    court: "Porphyry of Tyre (Neoplatonist philosopher, Rome)",
    civilization: "Late Roman Empire / Neoplatonism",
    era: "ancient",
    summary: "Porphyry of Tyre (~234–305 CE), the leading Neoplatonist philosopher and biographer of Plotinus, wrote De Abstinentia ab Esu Animalium (On Abstinence from Animal Food, ~268 CE), the most systematic ancient philosophical argument for animal moral status. In Book III, Porphyry argues that animals possess logos (rationality) — not identical to human reason but sufficient to generate obligations of justice. He catalogs animal intelligence and emotional life, rejects the Stoic claim that animals are mere automata, and argues that killing sentient beings violates the principle of justice. Book IV surveys evidence from non-Greek cultures (Egyptian priests, Indian Brahmins, Pythagoreans) in support of vegetarianism.",
    significance: "Porphyry's De Abstinentia is the most rigorous pre-modern philosophical challenge to the legal non-status of animals. His argument that animals possess logos and can be wronged directly — not merely indirectly through their owners — anticipates the rights-based animal law theory of Tom Regan (The Case for Animal Rights, 1983) by 1700 years. Richard Sorabji's foundational work Animal Minds and Human Morals (1993) establishes De Abstinentia as the crucial text in the ancient philosophy of animals. The comparative ethnographic approach in Book IV — surveying non-Western animal ethics — is the ancient precedent for modern comparative animal law.",
    citation: "Porphyry, De Abstinentia ab Esu Animalium, Books I–IV; Gillian Clark (trans.), Porphyry: On Abstinence from Killing Animals (2000, Duckworth); Richard Sorabji, Animal Minds and Human Morals: The Origins of the Western Debate (1993, Duckworth), Chs. 7–10; Gary Steiner, Anthropocentrism and Its Discontents (2005), Ch. 4",
    type: "ancient",
    tags: ["Porphyry", "De Abstinentia", "Neoplatonism", "logos", "animal rationality", "vegetarianism", "ancient philosophy", "justice", "moral status"],
  },

  // ─── EAST ASIAN LEGAL TRADITIONS ─────────────────────────

  {
    id: "cn-tang-code-653",
    countryCode: "CN",
    year: 653,
    title: "Tang Code (唐律疏議) — Imperial Animal Protections & Buddhist Hunting Prohibitions",
    court: "Emperor Gaozong / Legislative Bureau, Tang Dynasty",
    civilization: "Tang Dynasty China",
    era: "medieval",
    summary: "The Tang Code (Táng Lǜ Shūyì, 唐律疏議, 653 CE), the most complete and influential code of classical Chinese law, contains provisions protecting imperial horses and working oxen from destruction. Article 57 prohibits the killing of government horses and cattle without authorization, prescribing penal servitude. The prohibition on killing plowing oxen (耕牛禁杀) — which appears in earlier Qin and Han codes and is consolidated in the Tang Code — represents one of the most persistently enforced animal protection norms in legal history, enforced across 700 years of Chinese imperial governance. The Code also incorporates Buddhist-influenced prohibitions: Emperor Taizong (r. 626–649) issued edicts prohibiting fishing and hunting during the first, fifth, and ninth months of the year to coincide with Buddhist abstinence periods.",
    significance: "The Tang Code was the common law of East Asia: it was directly adopted in modified form by Japan (Taihō Code, 701 CE; Yōrō Code, 718 CE), Korea (Silla, Goryeo dynasties), and Vietnam (Lê dynasty), creating a regional legal family with shared animal protection norms rooted in both Confucian statecraft (protecting draft animals as economic assets) and Buddhist ethics (seasonal hunting prohibitions). The prohibition on killing plowing oxen — continuously enforced across Chinese dynasties from Qin through Qing — is one of the longest-running animal protection norms in human history. This East Asian legal family represents a distinct tradition entirely separate from both the Roman/civil law and Islamic law frameworks.",
    citation: "Táng Lǜ Shūyì (唐律疏議), Art. 57 (厩库律, Stable and Treasury Statutes); Wallace Johnson (trans.), The T'ang Code, vol. 1–2 (Princeton UP, 1979–1997); Denis Twitchett, 'The T'ang Market System', Asia Major 12 (1966); Valerie Hansen, The Open Empire: A History of China to 1800 (2000), Ch. 7",
    type: "ancient",
    tags: ["Tang Code", "China", "Tang Dynasty", "ox protection", "plowing ox", "imperial law", "Buddhist influence", "East Asian law", "legal transplant"],
  },

  {
    id: "jp-tenmu-meat-prohibition-675",
    countryCode: "JP",
    year: 675,
    title: "Emperor Tenmu's Edict on Meat Prohibition — First Japanese Animal Protection Law",
    court: "Emperor Tenmu, Asuka Imperial Court",
    civilization: "Asuka Period Japan",
    era: "medieval",
    summary: "In the fourth month of 675 CE, Emperor Tenmu issued an imperial edict (天武天皇詔) prohibiting the consumption of beef, horse, dog, monkey, and chicken meat between the fourth and ninth months of the year. Motivated by Buddhist teachings on the sanctity of life (ahimsa adapted into Japanese 不殺生, fusesshō), the edict also prohibited the use of certain hunting devices during this period. This was the first recorded imperial legislation on animal killing in Japan. Subsequent emperors periodically renewed and expanded the prohibition: the Taihō Code (701 CE) and Yōrō Code (718 CE) codified related provisions, and Emperor Shōmu (r. 724–749) issued comprehensive hunting restrictions.",
    significance: "Emperor Tenmu's edict represents the introduction of Buddhist ethics into state law in Japan — the earliest formal translation of the ahimsa principle into Japanese imperial legislation. The edict established a pattern of periodic royal prohibitions on animal killing that persisted through the Nara and Heian periods and shaped the distinctive Japanese relationship with meat consumption. Japan's near-universal abstinence from meat for over a thousand years (until the Meiji Restoration) is directly traceable to this legal-religious framework. The edict also demonstrates the extraordinary transmission of Indian Buddhist ethics through Chinese imperial practice into Japanese governance — spanning three legal cultures.",
    citation: "Nihon Shoki (日本書紀, 720 CE), Vol. 29, 天武天皇 4年 4月 (675 CE); William G. Aston (trans.), Nihongi: Chronicles of Japan (1896), Vol. II; Conrad Totman, A History of Japan (2000), Ch. 3; Penelope Francks, Japanese Economic Development (2005), Ch. 1",
    type: "ancient",
    tags: ["Japan", "Emperor Tenmu", "Buddhist law", "meat prohibition", "ahimsa", "Asuka period", "fusessho", "imperial edict", "East Asian law"],
  },

  {
    id: "jp-tokugawa-shourui-1685",
    countryCode: "JP",
    year: 1685,
    title: "Edicts on Compassion for Living Things (生類憐れみの令) — The World's Most Extensive Pre-Modern Animal Protection Regime",
    court: "Shogun Tokugawa Tsunayoshi, Edo Shogunate",
    civilization: "Edo Period Japan",
    era: "early-modern",
    summary: "Shogun Tokugawa Tsunayoshi (r. 1680–1709) issued over 130 edicts between 1685 and 1709 collectively known as the Shōrui Awaremi no Rei (生類憐れみの令, Edicts on Compassion for Living Things). Issued in part because Tsunayoshi (born in the Year of the Dog) had no heir, the edicts made killing or injuring dogs a criminal offence punishable by death or exile. The government established large dog shelters in Edo housing over 100,000 dogs. Subsequent edicts extended protection to horses, cattle, birds, fish, shellfish, and insects. The edicts prohibited animal fighting, the display of performing animals, the use of live bait, and the abandonment of animals. Animal cruelty inspectors were appointed with powers of arrest.",
    significance: "The Shōrui Awaremi no Rei constitutes the most extensive state animal protection regime in pre-modern world history — more comprehensive than any European animal welfare legislation until the 20th century. The establishment of government-funded animal shelters, the appointment of dedicated enforcement inspectors, and the criminal penalties for animal harm anticipate the institutions of modern animal welfare law by two centuries. While historically ridiculed as the 'Inu-Kubō' (Dog Shogun) laws, revisionist scholarship (Beatrice Bodart-Bailey, The Dog Shogun, 2007) has rehabilitated Tsunayoshi's regime as a sophisticated Confucian-Buddhist governance project. The edicts demonstrate that comprehensive state animal protection is not exclusively a modern Western phenomenon.",
    citation: "Beatrice Bodart-Bailey, The Dog Shogun: The Personality and Policies of Tokugawa Tsunayoshi (2007, U. Hawaii Press); Herman Ooms, Tokugawa Ideology (1985), Ch. 6; Donald Shively, 'Tokugawa Tsunayoshi, the Genroku Shogun', in Hall & Jansen (eds.), Studies in the Institutional History of Early Modern Japan (1968), pp. 85–126",
    type: "ancient",
    tags: ["Japan", "Tokugawa", "Edo period", "Shōrui Awaremi", "dog protection", "animal shelters", "enforcement", "Buddhist governance", "pre-modern welfare"],
  },

  // ─── INDIGENOUS AND CUSTOMARY LAW ─────────────────────────

  {
    id: "us-iroquois-great-law-1450",
    countryCode: "US",
    year: 1450,
    title: "Haudenosaunee Great Law of Peace — Seventh Generation Principle & Environmental Stewardship",
    court: "Haudenosaunee Grand Council (Iroquois Confederacy)",
    civilization: "Haudenosaunee (Iroquois) Confederacy",
    era: "medieval",
    summary: "The Gayanashagowa (Great Law of Peace, ~1450 CE), the constitutional law of the Haudenosaunee (Iroquois) Confederacy comprising the Mohawk, Oneida, Onondaga, Cayuga, Seneca, and Tuscarora nations, contains foundational environmental stewardship principles. The 'seventh generation' principle — that the Grand Council must consider the impact of decisions on the seventh generation into the future — created a legal obligation of intergenerational environmental responsibility. The Great Law established seasonal hunting and fishing protocols, managed wildlife as a common resource, and regulated the clearing of land. The Haudenosaunee cosmological framework treats the natural world (the 'web of life') as a legal community of which humans are members rather than owners.",
    significance: "The Haudenosaunee Great Law is the oldest continuous constitutional document in the Western Hemisphere and one of the most influential documents in the history of environmental law. The seventh generation principle has been directly incorporated into Indigenous rights frameworks under the United Nations Declaration on the Rights of Indigenous Peoples (2007) and is now cited in climate litigation (Juliana v. United States) as a legal standard for intergenerational equity. The principle that governance should serve non-human species and future generations prefigures modern sustainability law by centuries. The Great Law's influence on the US Constitution — acknowledged by the US Senate Resolution 331 (1988) — means that Indigenous environmental law has indirectly shaped American legal architecture.",
    citation: "Arthur Parker, The Constitution of the Five Nations (1916); Paul Wallace, The White Roots of Peace (1946); Oren Lyons & John Mohawk (eds.), Exiled in the Land of the Free (1992); Vine Deloria Jr. & Clifford Lytle, American Indians, American Justice (1983); UNDRIP, Art. 29 (2007)",
    type: "ancient",
    tags: ["Haudenosaunee", "Iroquois", "Great Law of Peace", "seventh generation", "indigenous law", "environmental stewardship", "customary law", "intergenerational", "North America"],
  },

  // ─── ANCIENT GREECE AND ROME ─────────────────────────────

  {
    id: "it-twelve-tables-450bce",
    countryCode: "IT",
    year: -450,
    title: "Twelve Tables — Animals as Res Mancipi and Pauperies Liability",
    court: "Decemviri Legibus Scribundis, Roman Republic",
    civilization: "Roman Republic",
    era: "ancient",
    summary: "The Twelve Tables (~450 BCE), the foundational code of Roman law, classify certain animals (oxen, horses, mules, donkeys) as res mancipi — the most legally significant class of property, requiring formal transfer ceremonies (mancipatio). Table VII addresses pauperies (harm caused by animals): if an animal causes harm, the owner may either pay compensation or surrender the animal (noxal surrender). This noxal system treats the animal as a quasi-agent whose 'wrongdoing' can be transferred to the victim. Wild animals (ferae naturae) belong to no one until captured — establishing the res nullius doctrine that structured wildlife law for two millennia.",
    significance: "The Twelve Tables' bifurcation between res mancipi (owned domestic animals) and ferae naturae (ownerless wild animals) created the fundamental framework of animal legal status that persisted through Justinian, into the common law, and shapes wildlife law today. The ferae naturae doctrine — under which wild animals become property only upon capture — remains operative in the wildlife law of most common law jurisdictions. The pauperies system was the origin of strict liability for animal harm.",
    citation: "Twelve Tables, Table VII; Alan Watson, The Law of the Ancient Romans (1970); Bruce Frier & Thomas McGinn, A Casebook on Roman Family Law (2004); Alan Rodger, 'Owner and Neighbour in Roman Law', 86 LQR 196 (1970)",
    type: "ancient",
    tags: ["Roman law", "Twelve Tables", "res mancipi", "ferae naturae", "pauperies", "strict liability", "property", "res nullius", "ancient Rome"],
  },

  {
    id: "it-lex-aquilia-286bce",
    countryCode: "IT",
    year: -286,
    title: "Lex Aquilia — Wrongful Damage to Animals and Fault-Based Liability",
    court: "Aquilius, Tribune of the Plebs (Roman Republic)",
    civilization: "Roman Republic",
    era: "ancient",
    summary: "The Lex Aquilia (~286 BCE) revolutionized Roman liability law by establishing fault-based compensation for wrongful damage to property, including animals. Chapter 1 covered the killing of another's slave or herd animal (pecus); Chapter 3 covered lesser injuries to animals and property. The law required the wrongdoer to pay the highest market value the animal had achieved in the past year for Chapter 1 violations, and the highest value in the past 30 days for Chapter 3. Crucially, the Lex Aquilia introduced the concept of culpa (fault) — carelessness causing loss — as a ground of liability, displacing pure strict liability.",
    significance: "The Lex Aquilia is the direct ancestor of the tort of negligence in common law and of delictual liability in civil law systems. Its provisions on damage to animals — particularly the 'highest value in the past year' damages rule — were extensively interpreted by classical jurists (Gaius, Ulpian, Julian) and became the model for all subsequent discussions of animal harm. The introduction of culpa as an alternative to strict liability marks a pivotal moment in legal history. This law is discussed in every comparative law textbook as foundational to Western private law.",
    citation: "Digest, 9.2 (Lex Aquilia); Gaius, Institutiones, III.210–219; Reinhard Zimmermann, The Law of Obligations: Roman Foundations of the Civilian Tradition (1990), Ch. 29; B.W. Levin, 'The Roman Law of Delict', 47 MLR 571 (1984)",
    type: "ancient",
    tags: ["Lex Aquilia", "Roman law", "negligence", "culpa", "property damage", "tort law", "animals as property", "ancient Rome"],
  },

  {
    id: "it-justinian-digest-533",
    countryCode: "IT",
    year: 533,
    title: "Corpus Juris Civilis — Ferae Naturae Doctrine, Res Nullius & Pauperies",
    court: "Emperor Justinian I, Eastern Roman (Byzantine) Empire",
    civilization: "Byzantine Empire / Eastern Roman Empire",
    era: "ancient",
    summary: "Justinian's Corpus Juris Civilis (533 CE) — comprising the Institutes, Digest, Code, and Novels — codified and systematized Roman animal law in ways that shaped all subsequent Western legal development. The Institutes (Book II, Title 1) establish that wild animals (ferae naturae) are owned by no one (res nullius) until captured; domestic animals are property. Digest Title 9.2 preserves the Lex Aquilia interpretations. Digest 9.1 addresses pauperies (noxal liability for animal harm). The Institutes introduce the foundational classification: res nullius → wild animals; res corporales → domestic animals as things. The concept of animus revertendi (intention to return) qualified ownership of semi-domesticated animals.",
    significance: "The Corpus Juris Civilis fixed animal law in the form that all Western legal systems inherited. The ferae naturae / res nullius framework became the operative doctrine in English common law (Blades v Higgs [1865] 11 HLC 621), American wildlife law (Geer v Connecticut [1896]), and civil law wildlife codes. The animus revertendi doctrine created the first recognition that an animal's own agency could affect property rights — a proto-autonomy concept. Blackstone's Commentaries reproduced the Justinianic framework almost verbatim, transmitting it to the common law world.",
    citation: "Justinian, Institutiones, II.1.12–15 (wild animals); Digest, 9.1 (pauperies), 9.2 (Lex Aquilia); Corpus Juris Civilis, ed. Mommsen, Krueger & Schoell (1872); Peter Birks & Grant McLeod (trans.), Justinian's Institutes (1987)",
    type: "ancient",
    tags: ["Corpus Juris Civilis", "Justinian", "ferae naturae", "res nullius", "animus revertendi", "Roman law", "property", "wildlife", "Byzantine"],
  },

  // ─── CLASSICAL ISLAMIC LAW ───────────────────────────────

  {
    id: "sa-hadith-animal-welfare-630",
    countryCode: "SA",
    year: 630,
    title: "Prophetic Hadith and Fiqh — Animal Welfare as Religious Duty (Raḥma)",
    court: "Prophet Muhammad and the Four Rightly-Guided Caliphs",
    civilization: "Early Islamic Caliphate",
    era: "medieval",
    summary: "The corpus of authenticated Hadith (prophetic traditions) and subsequent Islamic jurisprudence (fiqh) established a comprehensive animal welfare framework within religious law. Key traditions prohibit: tethering animals for use as archery targets (sahih Bukhari 5514, Muslim 1958); branding animals on the face (Bukhari 5541); overloading pack animals; causing animals to fight each other for entertainment (Abu Dawud 2562). The Prophet mandated compassion in slaughter — sharpening knives before slaughter and not performing slaughter in sight of other animals. The duty of sadaqa (charitable giving) extends to providing water to thirsty animals. Islamic law classifies unnecessary cruelty to animals as haram (forbidden).",
    significance: "Islamic fiqh developed one of the most comprehensive pre-modern animal welfare frameworks in world legal history, predating European anti-cruelty legislation by over a millennium. The Islamic prohibition on animal fighting, branding, and overloading addressed specific welfare concerns that English law would not legislate until Martin's Act (1822). These principles continue to operate in Islamic law jurisdictions and directly inform animal welfare regulation in the 57 OIC member states. The concept of amanah (stewardship) — humans as trustees of creation — provides a theological foundation that differs fundamentally from the property-based framework of Roman and common law.",
    citation: "Ṣaḥīḥ al-Bukhārī, Kitāb al-Dhaba'ih (Book of Hunting), nos. 5511–5551; Ṣaḥīḥ Muslim, Kitāb al-Ṣayd (Book of Hunting), nos. 1955–1966; Al-Nawawi, Sharḥ Ṣaḥīḥ Muslim; Ahmad ibn Naqib al-Misri, Reliance of the Traveller, §w41 (animals); Masri, Al-Hafiz B.A., Animal Welfare in Islam (2007, Islamic Foundation)",
    type: "ancient",
    tags: ["Islamic law", "hadith", "fiqh", "raḥma", "amanah", "animal welfare", "halal slaughter", "animal fighting", "cruelty prohibition", "religious law"],
  },

  {
    id: "sa-ibn-hazm-hisba-1050",
    countryCode: "SA",
    year: 1050,
    title: "Ḥisba System — Islamic Market Inspection and Animal Protection Enforcement",
    court: "Muḥtasib (Market Inspector), Abbasid and Umayyad Caliphates",
    civilization: "Abbasid Caliphate / Andalusian Umayyad Caliphate",
    era: "medieval",
    summary: "The ḥisba system — Islamic market inspection for enforcement of moral and commercial norms — included systematic enforcement of animal welfare obligations. The muḥtasib (market inspector) was empowered to intervene against overloaded pack animals, animals being abused in public, and inhumane slaughter practices. Manuals of ḥisba from the 10th–13th centuries (Ibn al-Ukhuwwa's Ma'alim al-Qurba; al-Shayzari's Nihayat al-Rutba) contain detailed provisions on when inspectors must intervene to protect animals from their owners or handlers. The system operated across markets from Baghdad to Córdoba.",
    significance: "The ḥisba system represents the world's first systematic public enforcement mechanism for animal welfare obligations — predating the first English anti-cruelty enforcement machinery (the RSPCA, 1824) by over seven centuries. The muḥtasib's power to intervene against animal abuse regardless of property rights shows that Islamic law distinguished animal welfare obligations from mere property rules. Modern animal welfare enforcement draws on remarkably similar principles of market inspection and mandatory intervention.",
    citation: "Ibn al-Ukhuwwa, Maʿālim al-Qurba fī Aḥkām al-Ḥisba (c. 1300 CE); R. Buckley (trans.), The Book of the Islamic Market Inspector (1999, Oxford); al-Shayzari, Nihāyat al-Rutba fī Ṭalab al-Ḥisba (12th c.); S.M. Ghazanfar, Medieval Islamic Economic Thought (2003)",
    type: "ancient",
    tags: ["Islamic law", "hisba", "enforcement", "market inspection", "cruelty", "medieval", "Abbasid", "institutional", "muhtasib"],
  },

  // ─── MEDIEVAL EUROPEAN LAW ───────────────────────────────

  {
    id: "gb-carta-foresta-1217",
    countryCode: "GB",
    year: 1217,
    title: "Charter of the Forest 1217 — Common Rights Over Wildlife and Forest Creatures",
    court: "King Henry III of England / Regent William Marshal",
    civilization: "Medieval England",
    era: "medieval",
    summary: "The Charter of the Forest (1217), companion document to Magna Carta (1215), restored common rights over royal forests that had been enclosed under Henry II and Richard I. It abolished the death penalty for poaching deer from royal forests, substituting fines and imprisonment, and restored rights of pannage (grazing pigs), estover (collecting wood), and access to forest animals for subsistence. The Charter distinguished between the Crown's exclusive rights over certain beasts of the chase (deer, boar, wolf, fox) and common rights over lesser species. It remained in force until 1971.",
    significance: "The Charter of the Forest created the first systematic legal differentiation between royal/state wildlife (subject to sovereign protection) and wildlife available for common use — a dichotomy that structured English game law for seven centuries and was transplanted to American colonial law. The replacement of the death penalty with lesser punishment for wildlife offences also marks an early recognition that capital punishment for animal-taking was disproportionate — a debate that would recur in poaching law across the globe.",
    citation: "Carta Foresta (1217), 2 Hen. III; Holt, J.C., Magna Carta (2nd ed., Cambridge, 1992), Ch. 10; Linebaugh, Peter, The Magna Carta Manifesto (2008); Robert C. Palmer, The County Courts of Medieval England (1982)",
    type: "ancient",
    tags: ["Charter of the Forest", "medieval England", "wildlife", "royal forest", "common rights", "poaching", "game law", "Magna Carta"],
  },

  {
    id: "de-aquinas-animals-1265",
    countryCode: "DE",
    year: 1265,
    title: "Thomas Aquinas — Indirect Duty Theory and the Moral-Legal Status of Animals",
    court: "Thomas Aquinas (Dominican Order, University of Paris / Naples)",
    civilization: "Medieval Latin Christendom",
    era: "medieval",
    summary: "Thomas Aquinas's Summa Theologiae (~1265–1274) and Summa Contra Gentiles contain the foundational Western theological-legal analysis of the moral status of animals. Aquinas argues that animals, lacking reason and immortal souls, cannot be wronged directly (Question 64, Article 1); however, cruelty to animals is wrong because it 'disposes man to greater cruelty toward men' — the 'indirect duty' or 'cruelty desensitisation' theory. This theory, not the intrinsic interests of animals, was the official Catholic position until the late 20th century and was adopted wholesale by Kant (Lectures on Ethics, 1780) and became the justification for 19th-century anti-cruelty legislation.",
    significance: "Aquinas's indirect duty theory shaped Western animal law for 600 years: English anti-cruelty legislation (Martin's Act 1822, Cruelty to Animals Act 1835) was enacted on the desensitisation rationale, not on recognition of animal interests. The theory was only systematically challenged by Peter Singer (Animal Liberation, 1975) and Gary Francione (Animals as Persons, 2008). Understanding the Thomistic framework is essential for understanding why common law jurisdictions were slow to recognize animal interests and why 'rights' language remains contested. The theory's inadequacy was directly addressed in the ECHR's jurisprudence in Verein gegen Tierfabriken v Switzerland (2001).",
    citation: "Aquinas, Summa Theologiae, II-II, Q. 64, Art. 1; Q. 65, Art. 3; Summa Contra Gentiles, III.112; Immanuel Kant, Lectures on Ethics (1780/2001), pp. 212–13; Peter Singer, Animal Liberation (1975), Ch. 5; Gary L. Francione, Introduction to Animal Rights (2000), Ch. 1",
    type: "ancient",
    tags: ["Thomas Aquinas", "indirect duty", "moral status", "Catholic theology", "medieval", "desensitisation theory", "Kant", "philosophy of animal law"],
  },

  {
    id: "gb-huntingdon-bull-baiting-1366",
    countryCode: "GB",
    year: 1366,
    title: "Early English Byelaws on Bull-Baiting — Community Prohibition of Animal Fighting",
    court: "Town Council of Huntingdon (and various English municipalities)",
    civilization: "Medieval England",
    era: "medieval",
    summary: "From the 14th century onward, various English town councils and guilds enacted byelaws restricting or regulating bull-baiting and bear-baiting — both from welfare concerns and from disorder concerns. The Puritan Parliament enacted a temporary prohibition on bear-baiting in 1642 on Sunday, later extended. Town records from Huntingdon, Stamford, and other towns show ongoing tensions between popular blood sports and reform-minded magistrates. The Stamford bull-running was repeatedly challenged through the courts and by local magistrates from the 17th century.",
    significance: "These early municipal restrictions on animal-fighting represent the first attempts to translate animal welfare concerns into enforceable law in England — anticipating Martin's Act by centuries. The pattern of municipal action preceding national legislation also prefigured the modern animal law reform dynamic in many jurisdictions. The Stamford case, which ultimately led to a prohibition ordered by the Home Secretary in 1839, shows the transition from local to central enforcement.",
    citation: "E.S. Turner, All Heaven in a Rage (1964), Chs. 2–4; Keith Thomas, Man and the Natural World (1983), pp. 143–150; Robert Malcolmson, Popular Recreations in English Society 1700–1850 (1973), Ch. 5",
    type: "ancient",
    tags: ["bull-baiting", "bear-baiting", "medieval England", "municipal law", "animal fighting", "blood sports", "Puritan reform"],
  },

  // ─── EARLY MODERN EUROPE ─────────────────────────────────

  {
    id: "gb-martins-act-1822",
    countryCode: "GB",
    year: 1822,
    title: "Cruel Treatment of Cattle Act 1822 (Martin's Act) — First National Anti-Cruelty Law",
    court: "Parliament of the United Kingdom (House of Commons)",
    civilization: "United Kingdom",
    summary: "Richard Martin MP's Act to Prevent the Cruel and Improper Treatment of Cattle (1822) — universally known as Martin's Act — was the first national legislation in history to make cruelty to animals a criminal offence enforceable by the state. The Act covered cattle, horses, mules, sheep, and other listed animals. Martin himself prosecuted the first cases before a London magistrate. The Act was the catalyst for the founding of the Society for the Prevention of Cruelty to Animals (SPCA) in 1824, later the RSPCA.",
    significance: "Martin's Act established the paradigm of state-enforced anti-cruelty law that all subsequent animal welfare legislation worldwide has followed. Its limitation to economically valuable animals (cattle, horses) rather than all animals shows the dominance of property-based rationales — but its passage represented a decisive break with the view that cruelty to one's own animals was a purely private matter. The Act and the RSPCA model were replicated across the British Empire and in the United States (New York, 1867), creating the global architecture of 19th-century animal law.",
    citation: "Cruel Treatment of Cattle Act 1822, 3 Geo. IV c. 71; Hansard, HC Deb, 24 May 1822, vol. 7, col. 758–764; E.S. Turner, All Heaven in a Rage (1964), Ch. 9; Harriet Ritvo, The Animal Estate (1987), Ch. 4",
    type: "legislation",
    era: "early-modern",
    tags: ["Martin's Act", "first anti-cruelty law", "RSPCA", "United Kingdom", "1822", "cattle", "property rationale", "criminal law", "enforcement"],
  },

  {
    id: "us-new-york-1867",
    countryCode: "US",
    year: 1867,
    title: "New York Anti-Cruelty Act 1867 — Henry Bergh and the ASPCA Model",
    court: "New York State Legislature",
    civilization: "United States",
    era: "early-modern",
    summary: "Henry Bergh founded the American Society for the Prevention of Cruelty to Animals (ASPCA) in 1866 and secured the passage of New York's first comprehensive anti-cruelty statute in 1867. The Act for the Prevention of Cruelty to Animals gave the ASPCA — a private organization — the power to arrest offenders: animal welfare enforcement was delegated to civil society rather than the police. The Act covered not just farm animals but also birds, and included the first US prohibition on animal fighting. New York's model was rapidly adopted by most other states.",
    significance: "The New York model of delegating enforcement to a privately-funded animal protection society became the dominant Anglo-American template for anti-cruelty enforcement for over a century. The delegation of state coercive power (arrest authority) to a private body reflects a distinctive common law approach that contrasts with the civil law model of state enforcement. The Act's coverage of birds and animal fighting represented significant extensions beyond Martin's Act, showing that animal law expanded quickly once the initial legislative threshold was crossed.",
    citation: "An Act for the Prevention of Cruelty to Animals, Ch. 375 (N.Y. 1867); Sydney Coleman, Humane Society Leaders in America (1924); Bernard Oreste Unti, 'The Quality of Mercy: Organized Animal Protection in the United States, 1866–1930', PhD Diss. (American University, 2002)",
    type: "legislation",
    tags: ["ASPCA", "Henry Bergh", "New York", "anti-cruelty", "private enforcement", "animal fighting", "United States", "1867"],
  },

  {
    id: "de-tierschutzgesetz-1933",
    countryCode: "DE",
    year: 1933,
    title: "Reichstierschutzgesetz 1933 — First National Unified Welfare Statute (National Socialist Germany)",
    court: "Reichstag of Germany / Hermann Göring",
    civilization: "Weimar Republic / Third Reich",
    era: "early-modern",
    summary: "Germany's Reichstierschutzgesetz (Reich Animal Protection Law) of 1933, championed by Hermann Göring, was the first law in the world to regulate animal welfare comprehensively — going beyond anti-cruelty prohibitions to regulate experiments, slaughter methods, and the transport of animals. The law prohibited vivisection without anaesthesia, mandated humane slaughter, and imposed duties of care on all animal keepers. Göring announced in a radio broadcast that offenders would be sent to concentration camps — conflating animal protection with Nazi racial ideology in troubling ways.",
    significance: "The 1933 law is one of the most contested in animal law history. As the world's first comprehensive welfare statute (as opposed to mere anti-cruelty law), it was technically ahead of its time. But its enactment by the Nazi regime has created an ongoing scholarly debate: was the law an expression of genuine animal welfare concern, political theatre, or an extension of fascist biopolitics? Scholars including Arnold Arluke and Clinton Sanders (Regarding Animals, 1996) and Boria Sax (Animals in the Third Reich, 2000) have analyzed the law's ideological context. The law remained in force in modified form until the 2002 Tierschutzgesetz and is a reminder that animal protection norms can coexist with extreme human rights violations.",
    citation: "Reichstierschutzgesetz (RGBl. I S. 147), 24. November 1933; Boria Sax, Animals in the Third Reich (2000); Arnold Arluke & Clinton Sanders, Regarding Animals (1996); Arnold Arluke & Boria Sax, 'Understanding Nazi Animal Protection and the Holocaust', 3 Anthrozoös 6 (1992)",
    type: "legislation",
    tags: ["Germany", "1933", "Reichstierschutzgesetz", "comprehensive welfare", "vivisection", "Nazi law", "contested history", "first welfare statute"],
  },

  {
    id: "gb-descartes-animals-1637",
    countryCode: "FR",
    year: 1637,
    title: "Descartes — Bêtes-Machines Doctrine and Its Legal Legacy",
    court: "René Descartes, philosopher (Netherlands/France)",
    civilization: "Early Modern Europe",
    era: "early-modern",
    summary: "René Descartes's Discours de la Méthode (1637) and subsequent correspondence articulated the doctrine that animals are automata — sophisticated biological machines without genuine sensation, consciousness, or suffering. The bête-machine theory held that animal cries of pain are mere mechanical reflexes, not evidence of subjective experience. This doctrine was applied in experiments conducted at Port-Royal where monks reportedly nailed dogs to boards and vivisected them, dismissing their howls as mere clockwork. The doctrine informed the legal treatment of animals as mere property throughout the 17th–19th centuries.",
    significance: "The Cartesian bête-machine doctrine provided the dominant philosophical framework that justified treating animals as insensible property and informed early anti-cruelty legislation's indirect-duty framing (cruelty is bad because it corrupts humans, not because animals suffer). The doctrine was challenged by Jeremy Bentham's famous 1789 footnote ('the question is not, Can they reason? nor, Can they talk? but, Can they suffer?') which laid the philosophical foundation for animal welfare law. The Cartesian legacy still manifests in jurisdictions that lack sentience recognition in law — making Descartes one of the most consequential thinkers for understanding the trajectory of animal law.",
    citation: "René Descartes, Discours de la Méthode (1637), Part V; Lettre à More, 5 février 1649; Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789), Ch. 17, fn.; Peter Harrison, 'Descartes on Animals', 42 Philosophical Quarterly 219 (1992); Tom Regan, The Case for Animal Rights (1983), Ch. 1",
    type: "ancient",
    tags: ["Descartes", "bête-machine", "sentience", "philosophy", "vivisection", "Bentham", "property law", "history of ideas"],
  },

  {
    id: "gb-bentham-1789",
    countryCode: "GB",
    year: 1789,
    title: "Bentham's Footnote — 'Can They Suffer?' and the Foundation of Welfare Jurisprudence",
    court: "Jeremy Bentham (philosopher, University College London)",
    civilization: "Enlightenment Britain",
    era: "early-modern",
    summary: "Jeremy Bentham's Introduction to the Principles of Morals and Legislation (1789), Chapter 17, contains the foundational passage of modern animal welfare jurisprudence: 'The question is not, Can they reason? nor, Can they talk? but, Can they suffer?' In the same passage, Bentham predicts that 'the day may come when the rest of the animal creation may acquire those rights which never could have been withholden from them but by the hand of tyranny.' Bentham situates the mistreatment of animals alongside the mistreatment of slaves, anticipating the extension of moral concern to all sentient beings.",
    significance: "Bentham's footnote is the single most cited philosophical passage in animal law scholarship. It provided the utilitarian philosophical foundation for: the movement that produced Martin's Act (1822), the 20th-century welfare movement, Peter Singer's Animal Liberation (1975), and the sentience-recognition provisions now appearing in constitutional and statutory law worldwide (Switzerland 1992, EU Treaty of Lisbon 2007, New Zealand 2015). The 'can they suffer' test has been operationalized in the EU's sentience-recognition framework and informs the standards of the EFSA and OIE. Every sentience-recognition provision in modern law is philosophically traceable to this footnote.",
    citation: "Jeremy Bentham, Introduction to the Principles of Morals and Legislation (1789), Ch. 17, §1, fn. [b]; Peter Singer, Animal Liberation (1975), p. 7; Blackstone's Commentaries on the Laws of England, Vol. II (1766); David Favre, 'Living Property: A New Status for Animals Within the Legal System', 93 Marquette L. Rev. 1021 (2010)",
    type: "ancient",
    tags: ["Bentham", "sentience", "can they suffer", "utilitarianism", "philosophy", "welfare jurisprudence", "Martin's Act precursor", "Enlightenment"],
  },

  {
    id: "gb-rspca-1824",
    countryCode: "GB",
    year: 1824,
    title: "Founding of the SPCA (1824) — First Institutional Animal Protection Enforcement Body",
    court: "Richard Martin MP, William Wilberforce MP, et al. (London Coffee House)",
    civilization: "United Kingdom",
    era: "early-modern",
    summary: "Two years after Martin's Act (1822), a group including Richard Martin, William Wilberforce, Thomas Fowell Buxton, and the Rev. Arthur Broome established the Society for the Prevention of Cruelty to Animals (SPCA) at Old Slaughter's Coffee House, London, on 16 June 1824 — the first animal protection organization in the world. The Society employed paid inspectors who actively prosecuted offenders under Martin's Act. Queen Victoria granted it royal patronage in 1840, making it the RSPCA. The RSPCA prosecuted thousands of cases annually within a decade, transforming abstract legislation into enforced law.",
    significance: "The RSPCA model of a privately-funded society empowered to prosecute animal cruelty on behalf of the state became the template for animal protection organizations worldwide: the ASPCA (1866, USA), Tierschutzverein München (1842, Germany), SPA (1845, France), SPCAIndia (1861), and over 100 similar organizations. This civil society enforcement model — in contrast to pure state enforcement — remains dominant in common law jurisdictions and has been studied as a model for enforcement in low-state-capacity contexts.",
    citation: "Edward Fairholme & Wellesley Mann, A Century of Work for Animals: The History of the R.S.P.C.A., 1824–1924 (1924); Harriet Ritvo, The Animal Estate: The English and Other Creatures in the Victorian Age (1987), Ch. 4; Brian Harrison, 'Animals and the State in Nineteenth-Century England', English Historical Review 88 (1973), pp. 786–820",
    type: "ancient",
    tags: ["RSPCA", "SPCA", "civil society", "enforcement", "Wilberforce", "Martin", "1824", "institutional history", "animal protection organizations"],
  },
];

// Combine all cases for unified access
export function getLandmarkCasesByCountry(countryCode: string): LandmarkCase[] {
  return [...landmarkCases, ...historicalCases].filter((c) => c.countryCode === countryCode);
}

export function getAllLandmarkCases(): LandmarkCase[] {
  return [...historicalCases, ...landmarkCases]; // historical first for timeline display
}

export function getHistoricalCases(): LandmarkCase[] {
  return historicalCases;
}

export function getModernCases(): LandmarkCase[] {
  return landmarkCases;
}
