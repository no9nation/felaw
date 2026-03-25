export interface LawEntry {
  id: string;
  country: string;
  countryCode: string;
  category: string;
  topic: string;
  summary: string;
  details: string;
  lawName: string;
  article: string;
  year: number;
  lastAmended?: number;
  penaltyMin?: string;
  penaltyMax?: string;
  tags: string[];
}

export interface CountryInfo {
  code: string;
  name: string;
  nameLocal: string;
  flag: string;
  mainLaw: string;
  mainLawYear: number;
  animalDefinition: string;
  region: string;
  coordinates: { lat: number; lng: number };
  color: string;
}

export const regions = [
  "East Asia",
  "Southeast Asia",
  "South Asia",
  "Central Asia",
  "West Asia",
  "Europe",
  "North America",
  "South America",
  "Africa",
  "Oceania",
] as const;

export type Region = (typeof regions)[number];

export const countries: CountryInfo[] = [
  // ===== EAST ASIA =====
  {
    code: "JP",
    name: "Japan",
    nameLocal: "日本",
    flag: "🇯🇵",
    mainLaw: "Act on Welfare and Management of Animals",
    mainLawYear: 1973,
    animalDefinition:
      "Mammals, birds, and reptiles kept by humans. The 2019 amendment expanded protections but still excludes fish and invertebrates from the core welfare provisions.",
    region: "East Asia",
    coordinates: { lat: 36.2, lng: 138.3 },
    color: "#E74C3C",
  },
  {
    code: "KR",
    name: "South Korea",
    nameLocal: "대한민국",
    flag: "🇰🇷",
    mainLaw: "Animal Protection Act",
    mainLawYear: 1991,
    animalDefinition:
      "Cattle, horses, pigs, dogs, cats, rabbits, chickens, ducks, goats, sheep, deer, foxes, minks, and other animals prescribed by Presidential Decree. The 2023 amendment banned dog meat consumption.",
    region: "East Asia",
    coordinates: { lat: 35.9, lng: 127.8 },
    color: "#3498DB",
  },
  {
    code: "KP",
    name: "North Korea",
    nameLocal: "조선민주주의인민공화국",
    flag: "🇰🇵",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No legal definition specific to animal welfare. Animals are regulated through agricultural and wildlife management provisions.",
    region: "East Asia",
    coordinates: { lat: 40.3, lng: 127.5 },
    color: "#C0392B",
  },
  {
    code: "CN",
    name: "China",
    nameLocal: "中国",
    flag: "🇨🇳",
    mainLaw: "Wildlife Protection Law",
    mainLawYear: 1988,
    animalDefinition:
      "The Wildlife Protection Law covers wild animals that are rare, endangered, or of ecological, scientific, or social value. No comprehensive animal welfare law exists for domestic or farm animals.",
    region: "East Asia",
    coordinates: { lat: 35.9, lng: 104.2 },
    color: "#E74C3C",
  },
  {
    code: "MN",
    name: "Mongolia",
    nameLocal: "Монгол улс",
    flag: "🇲🇳",
    mainLaw: "Law on Fauna",
    mainLawYear: 2000,
    animalDefinition:
      "Wild animals and their habitats are covered under the Law on Fauna. Livestock welfare is addressed through traditional herding customs and veterinary legislation.",
    region: "East Asia",
    coordinates: { lat: 46.9, lng: 103.8 },
    color: "#3498DB",
  },
  {
    code: "TW",
    name: "Taiwan",
    nameLocal: "臺灣",
    flag: "🇹🇼",
    mainLaw: "Animal Protection Act",
    mainLawYear: 1998,
    animalDefinition:
      "Dogs, cats, and other vertebrate animals kept by humans for purposes including companionship, economic use, or experimentation. Taiwan's law is considered one of the most progressive in Asia.",
    region: "East Asia",
    coordinates: { lat: 23.7, lng: 121.0 },
    color: "#2ECC71",
  },

  // ===== SOUTHEAST ASIA =====
  {
    code: "VN",
    name: "Vietnam",
    nameLocal: "Việt Nam",
    flag: "🇻🇳",
    mainLaw: "Law on Animal Husbandry & Penal Code provisions",
    mainLawYear: 2018,
    animalDefinition:
      "Livestock and poultry are covered under the Law on Animal Husbandry (2018). Wildlife is covered under the Law on Biodiversity (2008) and Penal Code. No unified animal welfare law exists.",
    region: "Southeast Asia",
    coordinates: { lat: 14.1, lng: 108.3 },
    color: "#E67E22",
  },
  {
    code: "TH",
    name: "Thailand",
    nameLocal: "ประเทศไทย",
    flag: "🇹🇭",
    mainLaw: "Cruelty Prevention and Welfare of Animal Act",
    mainLawYear: 2014,
    animalDefinition:
      "All vertebrate animals other than humans, covering both domestic and wild animals. Thailand's 2014 Act is one of the most comprehensive standalone animal welfare laws in Southeast Asia.",
    region: "Southeast Asia",
    coordinates: { lat: 15.9, lng: 100.9 },
    color: "#3498DB",
  },
  {
    code: "PH",
    name: "Philippines",
    nameLocal: "Pilipinas",
    flag: "🇵🇭",
    mainLaw: "Animal Welfare Act (RA 8485, amended by RA 10631)",
    mainLawYear: 1998,
    animalDefinition:
      "All living non-human creatures, including but not limited to animals raised for food, work, companionship, or entertainment.",
    region: "Southeast Asia",
    coordinates: { lat: 12.9, lng: 121.8 },
    color: "#2ECC71",
  },
  {
    code: "ID",
    name: "Indonesia",
    nameLocal: "Indonesia",
    flag: "🇮🇩",
    mainLaw: "Law No. 18/2009 on Animal Husbandry and Health",
    mainLawYear: 2009,
    animalDefinition:
      "Animals regulated under husbandry law include livestock and companion animals. Wildlife is covered under Conservation of Natural Resources and Ecosystems Act (1990).",
    region: "Southeast Asia",
    coordinates: { lat: -0.8, lng: 113.9 },
    color: "#E74C3C",
  },
  {
    code: "MY",
    name: "Malaysia",
    nameLocal: "Malaysia",
    flag: "🇲🇾",
    mainLaw: "Animal Welfare Act 2015",
    mainLawYear: 2015,
    animalDefinition:
      "Any living creature other than a human being, including any beast, bird, fish, reptile, or insect. One of the broadest definitions in Asia.",
    region: "Southeast Asia",
    coordinates: { lat: 4.2, lng: 101.9 },
    color: "#F39C12",
  },
  {
    code: "SG",
    name: "Singapore",
    nameLocal: "新加坡",
    flag: "🇸🇬",
    mainLaw: "Animals and Birds Act",
    mainLawYear: 1965,
    animalDefinition:
      "Any mammal, bird, fish, reptile, amphibian, or invertebrate (whether wild or captive). Singapore's law was significantly strengthened in 2014.",
    region: "Southeast Asia",
    coordinates: { lat: 1.4, lng: 103.8 },
    color: "#E74C3C",
  },
  {
    code: "MM",
    name: "Myanmar",
    nameLocal: "မြန်မာ",
    flag: "🇲🇲",
    mainLaw: "Prevention of Cruelty to Animals Act (colonial-era)",
    mainLawYear: 1878,
    animalDefinition:
      "Any domestic or captive animal. The law is a colonial-era statute that has seen limited updates. Wildlife is covered under the Conservation of Biodiversity and Protected Areas Law (2018).",
    region: "Southeast Asia",
    coordinates: { lat: 21.9, lng: 95.9 },
    color: "#F1C40F",
  },
  {
    code: "KH",
    name: "Cambodia",
    nameLocal: "កម្ពុជា",
    flag: "🇰🇭",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal definition for animal welfare purposes. Some protections exist for wildlife under the Forestry Law (2002) and Law on Natural Protected Areas.",
    region: "Southeast Asia",
    coordinates: { lat: 12.6, lng: 104.9 },
    color: "#3498DB",
  },
  {
    code: "LA",
    name: "Laos",
    nameLocal: "ລາວ",
    flag: "🇱🇦",
    mainLaw: "Wildlife and Aquatic Law",
    mainLawYear: 2007,
    animalDefinition:
      "Wildlife and aquatic animals in natural habitats. No comprehensive domestic animal welfare legislation exists.",
    region: "Southeast Asia",
    coordinates: { lat: 19.9, lng: 102.5 },
    color: "#E74C3C",
  },
  {
    code: "BN",
    name: "Brunei",
    nameLocal: "بروني",
    flag: "🇧🇳",
    mainLaw: "Animals Act (Chapter 16)",
    mainLawYear: 1962,
    animalDefinition:
      "Any horse, mare, bull, ox, cow, heifer, calf, ass, mule, sheep, goat, pig, dog, cat, or domestic fowl. Limited to traditional domestic species.",
    region: "Southeast Asia",
    coordinates: { lat: 4.5, lng: 114.7 },
    color: "#F1C40F",
  },
  {
    code: "TL",
    name: "Timor-Leste",
    nameLocal: "Timor-Leste",
    flag: "🇹🇱",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal framework for animal welfare. Some provisions exist under agricultural regulations.",
    region: "Southeast Asia",
    coordinates: { lat: -8.9, lng: 125.7 },
    color: "#E74C3C",
  },

  // ===== SOUTH ASIA =====
  {
    code: "IN",
    name: "India",
    nameLocal: "भारत",
    flag: "🇮🇳",
    mainLaw: "Prevention of Cruelty to Animals Act",
    mainLawYear: 1960,
    animalDefinition:
      "Any living creature other than a human being. India has one of the oldest and most comprehensive animal protection frameworks in Asia, supplemented by constitutional provisions (Article 51A(g)).",
    region: "South Asia",
    coordinates: { lat: 20.6, lng: 78.9 },
    color: "#FF9933",
  },
  {
    code: "PK",
    name: "Pakistan",
    nameLocal: "پاکستان",
    flag: "🇵🇰",
    mainLaw: "Prevention of Cruelty to Animals Act",
    mainLawYear: 1890,
    animalDefinition:
      "Any domestic or captive animal. The law is a colonial-era statute. The Islamabad Wildlife Management Board Ordinance (2020) strengthened wildlife protections in the capital territory.",
    region: "South Asia",
    coordinates: { lat: 30.4, lng: 69.3 },
    color: "#2ECC71",
  },
  {
    code: "BD",
    name: "Bangladesh",
    nameLocal: "বাংলাদেশ",
    flag: "🇧🇩",
    mainLaw: "Cruelty to Animals Act (inherited from colonial era)",
    mainLawYear: 1920,
    animalDefinition:
      "Any domestic or captive animal. The Animal Welfare Act 2019 was drafted but not yet fully enacted. Wildlife is protected under the Wildlife Conservation and Security Act 2012.",
    region: "South Asia",
    coordinates: { lat: 23.7, lng: 90.4 },
    color: "#2ECC71",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    nameLocal: "ශ්‍රී ලංකාව",
    flag: "🇱🇰",
    mainLaw: "Prevention of Cruelty to Animals Ordinance",
    mainLawYear: 1907,
    animalDefinition:
      "Any domestic or captive animal. Sri Lanka has additional protections for elephants under the Fauna and Flora Protection Ordinance.",
    region: "South Asia",
    coordinates: { lat: 7.9, lng: 80.8 },
    color: "#8E44AD",
  },
  {
    code: "NP",
    name: "Nepal",
    nameLocal: "नेपाल",
    flag: "🇳🇵",
    mainLaw: "Animal Health and Livestock Services Act",
    mainLawYear: 1999,
    animalDefinition:
      "Livestock and domesticated animals under the Health Act. Wildlife covered under National Parks and Wildlife Conservation Act (1973). Nepal's constitution (2015) recognizes animal welfare principles.",
    region: "South Asia",
    coordinates: { lat: 28.4, lng: 84.1 },
    color: "#E74C3C",
  },
  {
    code: "BT",
    name: "Bhutan",
    nameLocal: "འབྲུག",
    flag: "🇧🇹",
    mainLaw: "Livestock Act of Bhutan",
    mainLawYear: 2001,
    animalDefinition:
      "Livestock and domesticated animals. Bhutan's Buddhist traditions provide strong cultural protections for animals. The Forest and Nature Conservation Act protects wildlife.",
    region: "South Asia",
    coordinates: { lat: 27.5, lng: 90.4 },
    color: "#F39C12",
  },
  {
    code: "MV",
    name: "Maldives",
    nameLocal: "ދިވެހިރާއްޖެ",
    flag: "🇲🇻",
    mainLaw: "Environmental Protection and Preservation Act",
    mainLawYear: 1993,
    animalDefinition:
      "Marine and terrestrial wildlife under environmental law. No specific domestic animal welfare legislation. Shark and turtle protections are notable.",
    region: "South Asia",
    coordinates: { lat: 3.2, lng: 73.2 },
    color: "#3498DB",
  },
  {
    code: "AF",
    name: "Afghanistan",
    nameLocal: "افغانستان",
    flag: "🇦🇫",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal framework for animal welfare. Some provisions exist under the Environment Law (2007) for wildlife.",
    region: "South Asia",
    coordinates: { lat: 33.9, lng: 67.7 },
    color: "#1ABC9C",
  },

  // ===== CENTRAL ASIA =====
  {
    code: "KZ",
    name: "Kazakhstan",
    nameLocal: "Қазақстан",
    flag: "🇰🇿",
    mainLaw: "Law on the Animal World",
    mainLawYear: 2004,
    animalDefinition:
      "All species of animals living in the wild. A separate law on responsible treatment of animals was adopted in 2022 covering domestic and stray animals.",
    region: "Central Asia",
    coordinates: { lat: 48.0, lng: 68.0 },
    color: "#3498DB",
  },
  {
    code: "UZ",
    name: "Uzbekistan",
    nameLocal: "Oʻzbekiston",
    flag: "🇺🇿",
    mainLaw: "Law on Protection and Use of the Animal World",
    mainLawYear: 1997,
    animalDefinition:
      "Wild fauna in natural habitats. Limited protections for domestic animals through veterinary and sanitary legislation.",
    region: "Central Asia",
    coordinates: { lat: 41.4, lng: 64.6 },
    color: "#2ECC71",
  },
  {
    code: "TM",
    name: "Turkmenistan",
    nameLocal: "Türkmenistan",
    flag: "🇹🇲",
    mainLaw: "Law on Protection and Rational Use of the Animal World",
    mainLawYear: 2013,
    animalDefinition:
      "Wild animal species and their habitats. Turkmenistan has cultural reverence for the Akhal-Teke horse with specific protections.",
    region: "Central Asia",
    coordinates: { lat: 38.9, lng: 59.6 },
    color: "#2ECC71",
  },
  {
    code: "TJ",
    name: "Tajikistan",
    nameLocal: "Тоҷикистон",
    flag: "🇹🇯",
    mainLaw: "Law on the Animal World",
    mainLawYear: 2008,
    animalDefinition:
      "Wild animals and their habitats. No comprehensive domestic animal welfare law.",
    region: "Central Asia",
    coordinates: { lat: 38.9, lng: 71.3 },
    color: "#E74C3C",
  },
  {
    code: "KG",
    name: "Kyrgyzstan",
    nameLocal: "Кыргызстан",
    flag: "🇰🇬",
    mainLaw: "Law on the Animal World",
    mainLawYear: 1999,
    animalDefinition:
      "Wild fauna species. A draft law on responsible treatment of animals has been under discussion since 2021.",
    region: "Central Asia",
    coordinates: { lat: 41.2, lng: 74.8 },
    color: "#E74C3C",
  },

  // ===== WEST ASIA =====
  {
    code: "TR",
    name: "Turkey",
    nameLocal: "Türkiye",
    flag: "🇹🇷",
    mainLaw: "Animal Protection Law No. 5199",
    mainLawYear: 2004,
    animalDefinition:
      "All animals capable of feeling pain. The 2021 amendment reclassified animals from 'property' to 'living beings' and introduced criminal penalties for cruelty.",
    region: "West Asia",
    coordinates: { lat: 38.9, lng: 35.2 },
    color: "#E74C3C",
  },
  {
    code: "IR",
    name: "Iran",
    nameLocal: "ایران",
    flag: "🇮🇷",
    mainLaw: "Environmental Protection and Enhancement Act / Penal Code",
    mainLawYear: 1974,
    animalDefinition:
      "Wildlife under the Department of Environment's jurisdiction. The Islamic Penal Code contains some provisions against animal cruelty. No standalone animal welfare law.",
    region: "West Asia",
    coordinates: { lat: 32.4, lng: 53.7 },
    color: "#2ECC71",
  },
  {
    code: "IQ",
    name: "Iraq",
    nameLocal: "العراق",
    flag: "🇮🇶",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal framework for animal welfare. Some agricultural and veterinary regulations address livestock health.",
    region: "West Asia",
    coordinates: { lat: 33.2, lng: 43.7 },
    color: "#C0392B",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    nameLocal: "المملكة العربية السعودية",
    flag: "🇸🇦",
    mainLaw: "Executive Regulation for Animal Welfare",
    mainLawYear: 2019,
    animalDefinition:
      "All animals including livestock, pets, and wildlife. Saudi Arabia introduced animal welfare regulations under the Ministry of Environment, Water and Agriculture.",
    region: "West Asia",
    coordinates: { lat: 23.9, lng: 45.1 },
    color: "#2ECC71",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    nameLocal: "الإمارات",
    flag: "🇦🇪",
    mainLaw: "Federal Law No. 18/2016 on Animal Welfare",
    mainLawYear: 2016,
    animalDefinition:
      "Any living non-human organism that can feel and move voluntarily, including mammals, birds, reptiles, amphibians, fish, and other animals. One of the most comprehensive in the Gulf.",
    region: "West Asia",
    coordinates: { lat: 23.4, lng: 53.8 },
    color: "#C0392B",
  },
  {
    code: "QA",
    name: "Qatar",
    nameLocal: "قطر",
    flag: "🇶🇦",
    mainLaw: "Law No. 2 on Animal Resources",
    mainLawYear: 2004,
    animalDefinition:
      "Domesticated and wild animals under the Ministry of Municipality and Environment's jurisdiction.",
    region: "West Asia",
    coordinates: { lat: 25.4, lng: 51.2 },
    color: "#8E44AD",
  },
  {
    code: "BH",
    name: "Bahrain",
    nameLocal: "البحرين",
    flag: "🇧🇭",
    mainLaw: "Law on Animal Welfare (Decree No. 38)",
    mainLawYear: 2017,
    animalDefinition:
      "All animals including domestic, captive, and wild species. Bahrain's 2017 law was a significant step forward in Gulf region animal welfare.",
    region: "West Asia",
    coordinates: { lat: 26.0, lng: 50.6 },
    color: "#E74C3C",
  },
  {
    code: "KW",
    name: "Kuwait",
    nameLocal: "الكويت",
    flag: "🇰🇼",
    mainLaw: "Animal Welfare Law",
    mainLawYear: 2015,
    animalDefinition:
      "Domesticated and wild animals. Kuwait was among the first Gulf states to enact dedicated animal welfare legislation.",
    region: "West Asia",
    coordinates: { lat: 29.3, lng: 47.5 },
    color: "#2ECC71",
  },
  {
    code: "OM",
    name: "Oman",
    nameLocal: "عُمان",
    flag: "🇴🇲",
    mainLaw: "Nature Conservation Law (Royal Decree 114/2001)",
    mainLawYear: 2001,
    animalDefinition:
      "Wild animals and their habitats. Livestock welfare is addressed through agricultural and veterinary legislation. Notable for Arabian Oryx conservation program.",
    region: "West Asia",
    coordinates: { lat: 21.5, lng: 55.9 },
    color: "#C0392B",
  },
  {
    code: "YE",
    name: "Yemen",
    nameLocal: "اليمن",
    flag: "🇾🇪",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal framework for animal welfare. Environmental law provides limited wildlife protections.",
    region: "West Asia",
    coordinates: { lat: 15.6, lng: 48.5 },
    color: "#C0392B",
  },
  {
    code: "JO",
    name: "Jordan",
    nameLocal: "الأردن",
    flag: "🇯🇴",
    mainLaw: "Animal Welfare Law No. 30/2019",
    mainLawYear: 2019,
    animalDefinition:
      "Any animal, domestic or wild. Jordan's 2019 Animal Welfare Law is the first comprehensive animal welfare legislation in the Levant region, covering cruelty prevention, transport, and slaughter.",
    region: "West Asia",
    coordinates: { lat: 30.6, lng: 36.2 },
    color: "#2ECC71",
  },
  {
    code: "LB",
    name: "Lebanon",
    nameLocal: "لبنان",
    flag: "🇱🇧",
    mainLaw: "Animal Protection and Welfare Law (Law 47)",
    mainLawYear: 2015,
    animalDefinition:
      "All vertebrate and invertebrate animals, whether domestic, stray, captive, or wild. Lebanon was the first Arab country to pass a comprehensive animal welfare law.",
    region: "West Asia",
    coordinates: { lat: 33.9, lng: 35.9 },
    color: "#E74C3C",
  },
  {
    code: "SY",
    name: "Syria",
    nameLocal: "سوريا",
    flag: "🇸🇾",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific animal welfare legislation. Some provisions exist under agricultural and environmental laws.",
    region: "West Asia",
    coordinates: { lat: 34.8, lng: 39.0 },
    color: "#C0392B",
  },
  {
    code: "IL",
    name: "Israel",
    nameLocal: "ישראל",
    flag: "🇮🇱",
    mainLaw: "Animal Welfare (Protection of Animals) Law",
    mainLawYear: 1994,
    animalDefinition:
      "Any vertebrate animal that is not a human. Israel has one of the strongest animal welfare frameworks in Asia/Middle East, with a 2022 ban on fur trade and strong enforcement.",
    region: "West Asia",
    coordinates: { lat: 31.0, lng: 34.9 },
    color: "#3498DB",
  },
  {
    code: "PS",
    name: "Palestine",
    nameLocal: "فلسطين",
    flag: "🇵🇸",
    mainLaw: "No dedicated animal welfare law",
    mainLawYear: 0,
    animalDefinition:
      "No specific legal framework for animal welfare. Some environmental provisions exist under the Palestinian Environmental Law (1999).",
    region: "West Asia",
    coordinates: { lat: 31.9, lng: 35.2 },
    color: "#2ECC71",
  },
  {
    code: "GE",
    name: "Georgia",
    nameLocal: "საქართველო",
    flag: "🇬🇪",
    mainLaw: "Law on Veterinary Medicine / Animal Welfare bill",
    mainLawYear: 2012,
    animalDefinition:
      "Domesticated and stray animals under veterinary law. A dedicated animal welfare bill has been in parliamentary consideration.",
    region: "West Asia",
    coordinates: { lat: 42.3, lng: 43.4 },
    color: "#C0392B",
  },
  {
    code: "AM",
    name: "Armenia",
    nameLocal: "Հայաստան",
    flag: "🇦🇲",
    mainLaw: "Law on Fauna",
    mainLawYear: 2000,
    animalDefinition:
      "Wild animal species. Domestic animal welfare is addressed through veterinary legislation. A stray animal management law was adopted in 2020.",
    region: "West Asia",
    coordinates: { lat: 40.1, lng: 45.0 },
    color: "#E74C3C",
  },
  {
    code: "AZ",
    name: "Azerbaijan",
    nameLocal: "Azərbaycan",
    flag: "🇦🇿",
    mainLaw: "Law on the Animal World",
    mainLawYear: 1999,
    animalDefinition:
      "Wild animals and their habitats. The Law on Veterinary Medicine addresses livestock welfare. A draft law on domestic animal welfare has been proposed.",
    region: "West Asia",
    coordinates: { lat: 40.1, lng: 47.6 },
    color: "#3498DB",
  },
  {
    code: "CY",
    name: "Cyprus",
    nameLocal: "Κύπρος",
    flag: "🇨🇾",
    mainLaw: "Protection and Welfare of Animals Law",
    mainLawYear: 1994,
    animalDefinition:
      "Any vertebrate animal other than a human. Cyprus follows EU standards on animal welfare, with comprehensive protections aligned with EU directives.",
    region: "West Asia",
    coordinates: { lat: 35.1, lng: 33.4 },
    color: "#F39C12",
  },
  // ===== EUROPE =====
  {
    code: "GB",
    name: "United Kingdom",
    nameLocal: "United Kingdom",
    flag: "🇬🇧",
    mainLaw: "Animal Welfare Act 2006",
    mainLawYear: 2006,
    animalDefinition:
      "Any vertebrate other than a human. The Animal Welfare (Sentience) Act 2022 formally recognizes all vertebrates and some invertebrates (decapod crustaceans and cephalopod molluscs) as sentient beings.",
    region: "Europe",
    coordinates: { lat: 51.5, lng: -0.1 },
    color: "#166534",
  },
  {
    code: "DE",
    name: "Germany",
    nameLocal: "Deutschland",
    flag: "🇩🇪",
    mainLaw: "Tierschutzgesetz (Animal Welfare Act)",
    mainLawYear: 1972,
    animalDefinition:
      "All animals, including vertebrates and invertebrates. Germany elevated animal welfare to constitutional status in 2002 via Article 20a of the Basic Law, making it one of the first countries to do so.",
    region: "Europe",
    coordinates: { lat: 51.2, lng: 10.4 },
    color: "#166534",
  },
  {
    code: "FR",
    name: "France",
    nameLocal: "France",
    flag: "🇫🇷",
    mainLaw: "Code Rural et de la Pêche Maritime",
    mainLawYear: 1976,
    animalDefinition:
      "Since 2015, animals are recognized as 'living beings endowed with sentience' under Article 515-14 of the Civil Code, distinguishing them from property.",
    region: "Europe",
    coordinates: { lat: 46.2, lng: 2.2 },
    color: "#166534",
  },
  {
    code: "IT",
    name: "Italy",
    nameLocal: "Italia",
    flag: "🇮🇹",
    mainLaw: "Legge 189/2004 (Animal Protection Law)",
    mainLawYear: 2004,
    animalDefinition:
      "All animals. Italy's 2004 law introduced criminal penalties for animal cruelty and abandonment. The 2022 constitutional amendment added environmental and animal protection to Article 9.",
    region: "Europe",
    coordinates: { lat: 41.9, lng: 12.5 },
    color: "#166534",
  },
  {
    code: "ES",
    name: "Spain",
    nameLocal: "España",
    flag: "🇪🇸",
    mainLaw: "Ley 7/2023 de protección de los derechos y el bienestar de los animales",
    mainLawYear: 2023,
    animalDefinition:
      "Vertebrate animals, with specific protections for companion animals. The 2023 Animal Welfare Act significantly expanded national protections. Since 2022, the Civil Code recognizes animals as sentient beings.",
    region: "Europe",
    coordinates: { lat: 40.5, lng: -3.7 },
    color: "#166534",
  },
  {
    code: "NL",
    name: "Netherlands",
    nameLocal: "Nederland",
    flag: "🇳🇱",
    mainLaw: "Wet dieren (Animals Act)",
    mainLawYear: 2011,
    animalDefinition:
      "All vertebrate animals and designated invertebrate species. The Animals Act recognizes the intrinsic value of animals and imposes a duty of care on all persons interacting with animals.",
    region: "Europe",
    coordinates: { lat: 52.1, lng: 5.3 },
    color: "#166534",
  },
  {
    code: "SE",
    name: "Sweden",
    nameLocal: "Sverige",
    flag: "🇸🇪",
    mainLaw: "Djurskyddslag (Animal Welfare Act)",
    mainLawYear: 2018,
    animalDefinition:
      "All animals kept in captivity, including vertebrates and invertebrates. Sweden's 2018 Animal Welfare Act replaced the 1988 law and is considered among the strongest in Europe.",
    region: "Europe",
    coordinates: { lat: 60.1, lng: 18.6 },
    color: "#166534",
  },
  {
    code: "NO",
    name: "Norway",
    nameLocal: "Norge",
    flag: "🇳🇴",
    mainLaw: "Dyrevelferdsloven (Animal Welfare Act)",
    mainLawYear: 2009,
    animalDefinition:
      "All animals, including mammals, birds, reptiles, amphibians, fish, and selected invertebrates (decapods and cephalopods). The law explicitly recognizes animals' intrinsic value.",
    region: "Europe",
    coordinates: { lat: 60.5, lng: 8.5 },
    color: "#166534",
  },
  {
    code: "DK",
    name: "Denmark",
    nameLocal: "Danmark",
    flag: "🇩🇰",
    mainLaw: "Dyrevelfærdsloven (Animal Welfare Act)",
    mainLawYear: 2021,
    animalDefinition:
      "All vertebrate animals. Denmark's 2021 Animal Welfare Act consolidated previous legislation and strengthened protections, including a ban on bestiality and enhanced penalties for cruelty.",
    region: "Europe",
    coordinates: { lat: 56.3, lng: 9.5 },
    color: "#166534",
  },
  {
    code: "FI",
    name: "Finland",
    nameLocal: "Suomi",
    flag: "🇫🇮",
    mainLaw: "Eläinten hyvinvointilaki (Animal Welfare Act)",
    mainLawYear: 2023,
    animalDefinition:
      "All vertebrate animals and cephalopods and decapod crustaceans. Finland's 2023 Animal Welfare Act replaced the 1996 law and introduced stronger protections.",
    region: "Europe",
    coordinates: { lat: 61.9, lng: 25.7 },
    color: "#166534",
  },
  {
    code: "AT",
    name: "Austria",
    nameLocal: "Österreich",
    flag: "🇦🇹",
    mainLaw: "Bundesgesetz über den Schutz der Tiere (Tierschutzgesetz)",
    mainLawYear: 2004,
    animalDefinition:
      "All animals. Austria's Federal Animal Protection Act is considered one of the strictest in Europe, with comprehensive bans on wild animal circuses, fur farming, and battery cages.",
    region: "Europe",
    coordinates: { lat: 47.5, lng: 14.6 },
    color: "#166534",
  },
  {
    code: "CH",
    name: "Switzerland",
    nameLocal: "Schweiz",
    flag: "🇨🇭",
    mainLaw: "Tierschutzgesetz (Animal Welfare Act)",
    mainLawYear: 2005,
    animalDefinition:
      "All vertebrates, cephalopods, and decapod crustaceans. Switzerland has constitutional animal protection (Article 80) and recognizes animal dignity as a legal concept.",
    region: "Europe",
    coordinates: { lat: 46.8, lng: 8.2 },
    color: "#166534",
  },
  {
    code: "BE",
    name: "Belgium",
    nameLocal: "België / Belgique",
    flag: "🇧🇪",
    mainLaw: "Loi relative à la protection et au bien-être des animaux",
    mainLawYear: 1986,
    animalDefinition:
      "All vertebrate animals, cephalopods, and decapod crustaceans. Animal welfare is a regional competency; Flanders, Wallonia, and Brussels each have their own animal welfare codes.",
    region: "Europe",
    coordinates: { lat: 50.5, lng: 4.5 },
    color: "#166534",
  },
  {
    code: "PT",
    name: "Portugal",
    nameLocal: "Portugal",
    flag: "🇵🇹",
    mainLaw: "Lei n.º 92/1995 (Animal Protection Law)",
    mainLawYear: 1995,
    animalDefinition:
      "All vertebrate animals. Portugal criminalized animal cruelty in 2014 (Lei 69/2014) and in 2017 recognized animals as sentient beings in the Civil Code.",
    region: "Europe",
    coordinates: { lat: 39.4, lng: -8.2 },
    color: "#166534",
  },
  {
    code: "PL",
    name: "Poland",
    nameLocal: "Polska",
    flag: "🇵🇱",
    mainLaw: "Ustawa o ochronie zwierząt (Animal Protection Act)",
    mainLawYear: 1997,
    animalDefinition:
      "All vertebrate animals. The Act declares that animals are not things and are living beings capable of suffering.",
    region: "Europe",
    coordinates: { lat: 51.9, lng: 19.1 },
    color: "#166534",
  },
  {
    code: "CZ",
    name: "Czech Republic",
    nameLocal: "Česko",
    flag: "🇨🇿",
    mainLaw: "Zákon na ochranu zvířat proti týrání (Act on Protection of Animals Against Cruelty)",
    mainLawYear: 1992,
    animalDefinition:
      "All vertebrate animals, with some provisions extending to invertebrates. The Czech Civil Code (2014) recognizes animals as sentient living beings distinct from objects.",
    region: "Europe",
    coordinates: { lat: 49.8, lng: 15.5 },
    color: "#166534",
  },
  {
    code: "GR",
    name: "Greece",
    nameLocal: "Ελλάδα",
    flag: "🇬🇷",
    mainLaw: "Law 4039/2012 on Companion Animals and Stray Management",
    mainLawYear: 2012,
    animalDefinition:
      "All vertebrate animals. Greece enacted comprehensive stray animal management legislation in 2012, with significant amendments in 2021 (Law 4830/2021) strengthening penalties.",
    region: "Europe",
    coordinates: { lat: 39.1, lng: 21.8 },
    color: "#166534",
  },
  {
    code: "IE",
    name: "Ireland",
    nameLocal: "Éire",
    flag: "🇮🇪",
    mainLaw: "Animal Health and Welfare Act 2013",
    mainLawYear: 2013,
    animalDefinition:
      "All vertebrate animals and any invertebrate prescribed by the Minister. The Act imposes a duty of care on anyone responsible for an animal and recognizes animal sentience.",
    region: "Europe",
    coordinates: { lat: 53.1, lng: -7.7 },
    color: "#166534",
  },
  {
    code: "RO",
    name: "Romania",
    nameLocal: "România",
    flag: "🇷🇴",
    mainLaw: "Legea 205/2004 privind protecția animalelor",
    mainLawYear: 2004,
    animalDefinition:
      "All vertebrate animals. Romania's animal protection law covers companion animals, farm animals, and wildlife. Significant amendments in 2014 increased penalties for cruelty.",
    region: "Europe",
    coordinates: { lat: 45.9, lng: 24.9 },
    color: "#166534",
  },
  {
    code: "HU",
    name: "Hungary",
    nameLocal: "Magyarország",
    flag: "🇭🇺",
    mainLaw: "1998. évi XXVIII. törvény az állatok védelméről (Act XXVIII of 1998 on Animal Protection)",
    mainLawYear: 1998,
    animalDefinition:
      "All vertebrate animals. The Act covers animal welfare, protection against cruelty, and regulation of animal husbandry.",
    region: "Europe",
    coordinates: { lat: 47.2, lng: 19.5 },
    color: "#166534",
  },
  {
    code: "UA",
    name: "Ukraine",
    nameLocal: "Україна",
    flag: "🇺🇦",
    mainLaw: "Law on Protection of Animals from Cruel Treatment",
    mainLawYear: 2006,
    animalDefinition:
      "All vertebrate animals, including domestic, farm, wild, and laboratory animals. Ukraine's 2006 law prohibits cruelty, animal fighting, and imposes care obligations on animal owners.",
    region: "Europe",
    coordinates: { lat: 48.4, lng: 31.2 },
    color: "#166534",
  },
  {
    code: "RU",
    name: "Russia",
    nameLocal: "Россия",
    flag: "🇷🇺",
    mainLaw: "Federal Law on Responsible Treatment of Animals",
    mainLawYear: 2018,
    animalDefinition:
      "All animals, including companion animals, service animals, and stray animals. The 2018 Federal Law introduced comprehensive protections including bans on animal fighting and contact zoos.",
    region: "Europe",
    coordinates: { lat: 55.8, lng: 37.6 },
    color: "#166534",
  },
  // ===== AFRICA =====
  {
    code: "ZA",
    name: "South Africa",
    nameLocal: "South Africa",
    flag: "🇿🇦",
    mainLaw: "Animals Protection Act",
    mainLawYear: 1962,
    animalDefinition:
      "Any equine, bovine, sheep, goat, pig, fowl, ostrich, dog, cat, or other domestic animal or bird, or any wild animal, wild bird, or reptile that is in captivity or under the control of any person.",
    region: "Africa",
    coordinates: { lat: -30.6, lng: 22.9 },
    color: "#166534",
  },
  {
    code: "KE",
    name: "Kenya",
    nameLocal: "Kenya",
    flag: "🇰🇪",
    mainLaw: "Prevention of Cruelty to Animals Act",
    mainLawYear: 1962,
    animalDefinition:
      "Any domestic or captive animal. Kenya's wildlife legislation extends protections to wild animals through the Wildlife Conservation and Management Act 2013.",
    region: "Africa",
    coordinates: { lat: -0.02, lng: 37.9 },
    color: "#166534",
  },
  {
    code: "NG",
    name: "Nigeria",
    nameLocal: "Nigeria",
    flag: "🇳🇬",
    mainLaw: "Animal Diseases Control Act",
    mainLawYear: 1988,
    animalDefinition:
      "Any vertebrate animal. Nigeria's animal welfare legislation is primarily focused on disease control, with limited general anti-cruelty provisions under the Criminal Code Act.",
    region: "Africa",
    coordinates: { lat: 9.1, lng: 8.7 },
    color: "#166534",
  },
  {
    code: "EG",
    name: "Egypt",
    nameLocal: "مصر",
    flag: "🇪🇬",
    mainLaw: "Environmental Law No. 4",
    mainLawYear: 1994,
    animalDefinition:
      "Wildlife and natural resources. Egypt's environmental law covers biodiversity and wildlife protection, while animal cruelty provisions exist under the Penal Code.",
    region: "Africa",
    coordinates: { lat: 26.8, lng: 30.8 },
    color: "#166534",
  },
  {
    code: "ET",
    name: "Ethiopia",
    nameLocal: "ኢትዮጵያ",
    flag: "🇪🇹",
    mainLaw: "Wildlife Development and Conservation Authority Establishment Proclamation",
    mainLawYear: 2008,
    animalDefinition:
      "Any wild animal species indigenous or migratory to Ethiopia. The Criminal Code also contains provisions against cruelty to domesticated animals.",
    region: "Africa",
    coordinates: { lat: 9.1, lng: 40.5 },
    color: "#166534",
  },
  {
    code: "GH",
    name: "Ghana",
    nameLocal: "Ghana",
    flag: "🇬🇭",
    mainLaw: "Wild Animals Preservation Act",
    mainLawYear: 1961,
    animalDefinition:
      "Any wild animal or bird specified in the schedules. Ghana's animal protection framework combines wildlife preservation legislation with criminal code anti-cruelty provisions.",
    region: "Africa",
    coordinates: { lat: 7.9, lng: -1.0 },
    color: "#166534",
  },
  {
    code: "TZ",
    name: "Tanzania",
    nameLocal: "Tanzania",
    flag: "🇹🇿",
    mainLaw: "Animal Welfare Act",
    mainLawYear: 2008,
    animalDefinition:
      "Any live vertebrate animal other than a human being. Tanzania's 2008 Act is one of Africa's more comprehensive animal welfare laws.",
    region: "Africa",
    coordinates: { lat: -6.4, lng: 34.9 },
    color: "#166534",
  },
  {
    code: "MA",
    name: "Morocco",
    nameLocal: "المغرب",
    flag: "🇲🇦",
    mainLaw: "Law 28-19 on Animal Protection and Welfare",
    mainLawYear: 2020,
    animalDefinition:
      "Any domestic, farm, or captive animal. Morocco's Law 28-19 (2020) is the first dedicated animal welfare law in North Africa, replacing the colonial-era Dahir of 1914.",
    region: "Africa",
    coordinates: { lat: 31.8, lng: -7.1 },
    color: "#166534",
  },
  {
    code: "TN",
    name: "Tunisia",
    nameLocal: "تونس",
    flag: "🇹🇳",
    mainLaw: "Animal Health and Veterinary Control Law",
    mainLawYear: 2005,
    animalDefinition:
      "Any domestic, farmed, or captive animal. Tunisia's framework focuses on veterinary health and animal disease control, with limited general welfare protections.",
    region: "Africa",
    coordinates: { lat: 33.9, lng: 9.5 },
    color: "#166534",
  },
  {
    code: "UG",
    name: "Uganda",
    nameLocal: "Uganda",
    flag: "🇺🇬",
    mainLaw: "Animal (Prevention of Cruelty) Act",
    mainLawYear: 1957,
    animalDefinition:
      "Any domestic or captive animal. Uganda's colonial-era anti-cruelty law is supplemented by the Uganda Wildlife Act 2019 for wild animal protections.",
    region: "Africa",
    coordinates: { lat: 1.4, lng: 32.3 },
    color: "#166534",
  },
  {
    code: "RW",
    name: "Rwanda",
    nameLocal: "Rwanda",
    flag: "🇷🇼",
    mainLaw: "Law Relating to the Environment",
    mainLawYear: 2005,
    animalDefinition:
      "Any animal species, wild or domestic. Rwanda's environmental law provides a framework for biodiversity conservation and animal welfare.",
    region: "Africa",
    coordinates: { lat: -1.9, lng: 29.9 },
    color: "#166534",
  },
  {
    code: "BW",
    name: "Botswana",
    nameLocal: "Botswana",
    flag: "🇧🇼",
    mainLaw: "Animal Protection Act",
    mainLawYear: 1936,
    animalDefinition:
      "Any horse, mare, gelding, ass, mule, bull, cow, ox, heifer, calf, sheep, goat, pig, dog, cat, or domestic fowl, and any animal of whatever kind in a state of captivity.",
    region: "Africa",
    coordinates: { lat: -22.3, lng: 24.7 },
    color: "#166534",
  },
  {
    code: "NA",
    name: "Namibia",
    nameLocal: "Namibia",
    flag: "🇳🇦",
    mainLaw: "Animal Protection Act",
    mainLawYear: 1962,
    animalDefinition:
      "Any horse, mule, donkey, bull, cow, pig, sheep, goat, dog, cat, or poultry, and any other domestic animal or bird, or any wild animal or bird in captivity.",
    region: "Africa",
    coordinates: { lat: -22.6, lng: 17.1 },
    color: "#166534",
  },
  {
    code: "SN",
    name: "Senegal",
    nameLocal: "Sénégal",
    flag: "🇸🇳",
    mainLaw: "Environmental Code",
    mainLawYear: 2001,
    animalDefinition:
      "Any wild or domestic animal species. Senegal's Environmental Code provides protections for fauna and flora, supplemented by pastoral and hunting regulations.",
    region: "Africa",
    coordinates: { lat: 14.5, lng: -14.5 },
    color: "#166534",
  },
  {
    code: "MZ",
    name: "Mozambique",
    nameLocal: "Moçambique",
    flag: "🇲🇿",
    mainLaw: "Conservation Areas Law",
    mainLawYear: 2014,
    animalDefinition:
      "Any wild animal species within conservation areas or under specific protection. Mozambique's framework focuses on wildlife conservation and biodiversity.",
    region: "Africa",
    coordinates: { lat: -18.7, lng: 35.5 },
    color: "#166534",
  },
  // ===== OCEANIA =====
  {
    code: "AU",
    name: "Australia",
    nameLocal: "Australia",
    flag: "🇦🇺",
    mainLaw: "Prevention of Cruelty to Animals Act (state-level)",
    mainLawYear: 1979,
    animalDefinition:
      "Any live vertebrate animal (including mammals, birds, reptiles, amphibians, and fish). Australia regulates animal welfare at the state and territory level, with national standards providing harmonization.",
    region: "Oceania",
    coordinates: { lat: -25.3, lng: 133.8 },
    color: "#166534",
  },
  {
    code: "NZ",
    name: "New Zealand",
    nameLocal: "Aotearoa",
    flag: "🇳🇿",
    mainLaw: "Animal Welfare Act",
    mainLawYear: 1999,
    animalDefinition:
      "Any live member of the animal kingdom that is a mammal, bird, reptile, amphibian, fish, octopus, squid, crab, lobster, or crayfish. The 2015 amendment formally recognized animals as sentient beings.",
    region: "Oceania",
    coordinates: { lat: -40.9, lng: 174.9 },
    color: "#166534",
  },
  {
    code: "FJ",
    name: "Fiji",
    nameLocal: "Fiji",
    flag: "🇫🇯",
    mainLaw: "Animal (Control and Protection) Act",
    mainLawYear: 1953,
    animalDefinition:
      "Any domestic or captive animal. Fiji's legislation covers prevention of cruelty and control of stray animals, with additional protections under the Endangered and Protected Species Act 2002.",
    region: "Oceania",
    coordinates: { lat: -17.7, lng: 178.1 },
    color: "#166534",
  },
  {
    code: "PG",
    name: "Papua New Guinea",
    nameLocal: "Papua New Guinea",
    flag: "🇵🇬",
    mainLaw: "Fauna (Protection and Control) Act",
    mainLawYear: 1966,
    animalDefinition:
      "Any indigenous or migratory fauna. Papua New Guinea's legislation primarily focuses on wildlife conservation and the regulation of hunting and trade in fauna.",
    region: "Oceania",
    coordinates: { lat: -6.3, lng: 143.9 },
    color: "#166534",
  },
  // ===== NORTH AMERICA =====
  {
    code: "US",
    name: "United States",
    nameLocal: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    mainLaw: "Animal Welfare Act",
    mainLawYear: 1966,
    animalDefinition:
      "Any live or dead dog, cat, monkey, guinea pig, hamster, rabbit, or other warm-blooded animal determined by the Secretary of Agriculture. Excludes birds, rats, mice bred for research, horses, and farm animals used for food or fiber.",
    region: "North America",
    coordinates: { lat: 38.9, lng: -77.0 },
    color: "#166534",
  },
  {
    code: "CA",
    name: "Canada",
    nameLocal: "Canada",
    flag: "\ud83c\udde8\ud83c\udde6",
    mainLaw: "Criminal Code (Animal Cruelty Provisions)",
    mainLawYear: 1892,
    animalDefinition:
      "Any animal that has the capacity to feel pain. The Criminal Code provisions apply to all vertebrate animals other than human beings.",
    region: "North America",
    coordinates: { lat: 45.4, lng: -75.7 },
    color: "#166534",
  },
  {
    code: "MX",
    name: "Mexico",
    nameLocal: "M\u00e9xico",
    flag: "\ud83c\uddf2\ud83c\uddfd",
    mainLaw: "Federal Animal Health Law",
    mainLawYear: 2007,
    animalDefinition:
      "Any living non-human organism with voluntary movement capacity and sensory abilities. Mexico City enacted a landmark animal protection law in 2002, and most states have adopted their own animal welfare legislation.",
    region: "North America",
    coordinates: { lat: 19.4, lng: -99.1 },
    color: "#166534",
  },
  // ===== SOUTH AMERICA =====
  {
    code: "BR",
    name: "Brazil",
    nameLocal: "Brasil",
    flag: "\ud83c\udde7\ud83c\uddf7",
    mainLaw: "Environmental Crimes Law (Lei de Crimes Ambientais)",
    mainLawYear: 1998,
    animalDefinition:
      "All domestic or domesticated animals, native or exotic wildlife. The Federal Constitution Article 225 prohibits cruelty to animals, and a 2020 amendment elevated animal cruelty to a non-bailable crime.",
    region: "South America",
    coordinates: { lat: -15.8, lng: -47.9 },
    color: "#166534",
  },
  {
    code: "AR",
    name: "Argentina",
    nameLocal: "Argentina",
    flag: "\ud83c\udde6\ud83c\uddf7",
    mainLaw: "National Animal Protection Law 14.346",
    mainLawYear: 1954,
    animalDefinition:
      "All animals. Law 14.346 criminalizes animal cruelty and mistreatment, applying broadly to all animals without species-specific exclusions.",
    region: "South America",
    coordinates: { lat: -34.6, lng: -58.4 },
    color: "#166534",
  },
  {
    code: "CL",
    name: "Chile",
    nameLocal: "Chile",
    flag: "\ud83c\udde8\ud83c\uddf1",
    mainLaw: "Animal Protection Law (Ley 20.380)",
    mainLawYear: 2009,
    animalDefinition:
      "All animals, defined as living beings with a nervous system that makes them sentient. Chile's law recognizes animal sentience and establishes duties of care for animal owners.",
    region: "South America",
    coordinates: { lat: -33.4, lng: -70.7 },
    color: "#166534",
  },
  {
    code: "CO",
    name: "Colombia",
    nameLocal: "Colombia",
    flag: "\ud83c\udde8\ud83c\uddf4",
    mainLaw: "Animal Protection Statute (Law 1774)",
    mainLawYear: 2016,
    animalDefinition:
      "All sentient animals. Law 1774 of 2016 recognized animals as sentient beings, amending the Civil Code to distinguish animals from property.",
    region: "South America",
    coordinates: { lat: 4.7, lng: -74.1 },
    color: "#166534",
  },
  {
    code: "PE",
    name: "Peru",
    nameLocal: "Per\u00fa",
    flag: "\ud83c\uddf5\ud83c\uddea",
    mainLaw: "Animal Protection and Welfare Law (Law 30407)",
    mainLawYear: 2016,
    animalDefinition:
      "All vertebrate domestic and wild animals kept in captivity. The law recognizes animals as sentient beings and establishes that the state has a duty to protect them.",
    region: "South America",
    coordinates: { lat: -12.0, lng: -77.0 },
    color: "#166534",
  },
  {
    code: "EC",
    name: "Ecuador",
    nameLocal: "Ecuador",
    flag: "\ud83c\uddea\ud83c\udde8",
    mainLaw: "Organic Code of the Environment (C\u00f3digo Org\u00e1nico del Ambiente)",
    mainLawYear: 2017,
    animalDefinition:
      "All living animals. Ecuador's 2008 Constitution is notable for granting rights to nature (Pachamama). The Organic Code of the Environment includes wildlife protections.",
    region: "South America",
    coordinates: { lat: -0.2, lng: -78.5 },
    color: "#166534",
  },
  {
    code: "UY",
    name: "Uruguay",
    nameLocal: "Uruguay",
    flag: "\ud83c\uddfa\ud83c\uddfe",
    mainLaw: "Animal Protection Law (Law 18.471)",
    mainLawYear: 2009,
    animalDefinition:
      "All vertebrate animals. Uruguay's law establishes protections against cruelty and promotes responsible pet ownership.",
    region: "South America",
    coordinates: { lat: -34.9, lng: -56.2 },
    color: "#166534",
  },
  {
    code: "BO",
    name: "Bolivia",
    nameLocal: "Bolivia",
    flag: "\ud83c\udde7\ud83c\uddf4",
    mainLaw: "Law for the Defense of Animals Against Cruelty (Law 700)",
    mainLawYear: 2015,
    animalDefinition:
      "All animals forming part of the animal kingdom. The law declares animals as beings that deserve humane treatment and protection against cruelty.",
    region: "South America",
    coordinates: { lat: -16.5, lng: -68.1 },
    color: "#166534",
  },
  {
    code: "VE",
    name: "Venezuela",
    nameLocal: "Venezuela",
    flag: "\ud83c\uddfb\ud83c\uddea",
    mainLaw: "Domestic Animal Protection Law (Ley para la Protecci\u00f3n de la Fauna Dom\u00e9stica)",
    mainLawYear: 2010,
    animalDefinition:
      "All domestic animals and wild animals in captivity. The law addresses animal protection and responsible pet ownership.",
    region: "South America",
    coordinates: { lat: 10.5, lng: -66.9 },
    color: "#166534",
  },
  {
    code: "PY",
    name: "Paraguay",
    nameLocal: "Paraguay",
    flag: "\ud83c\uddf5\ud83c\uddfe",
    mainLaw: "Animal Protection and Welfare Law (Law 4840)",
    mainLawYear: 2013,
    animalDefinition:
      "All vertebrate animals, domestic and wild, that are in human care or under human influence.",
    region: "South America",
    coordinates: { lat: -25.3, lng: -57.6 },
    color: "#166534",
  },
  {
    code: "CR",
    name: "Costa Rica",
    nameLocal: "Costa Rica",
    flag: "\ud83c\udde8\ud83c\uddf7",
    mainLaw: "Animal Welfare Law (Law 7451)",
    mainLawYear: 1994,
    animalDefinition:
      "All animals that are kept, raised, or used by humans. Costa Rica is recognized as a leader in wildlife conservation in Central America.",
    region: "South America",
    coordinates: { lat: 9.9, lng: -84.1 },
    color: "#166534",
  },
  {
    code: "PA",
    name: "Panama",
    nameLocal: "Panam\u00e1",
    flag: "\ud83c\uddf5\ud83c\udde6",
    mainLaw: "Animal Protection Law (Law 308)",
    mainLawYear: 2012,
    animalDefinition:
      "All domestic and wild animals within the national territory. The law aims to guarantee animal welfare and prevent mistreatment.",
    region: "South America",
    coordinates: { lat: 9.0, lng: -79.5 },
    color: "#166534",
  },
  {
    code: "CU",
    name: "Cuba",
    nameLocal: "Cuba",
    flag: "\ud83c\udde8\ud83c\uddfa",
    mainLaw: "Animal Welfare Decree (Decree-Law 31)",
    mainLawYear: 2021,
    animalDefinition:
      "All animals, both domestic and wild. Cuba's 2021 decree-law was a milestone, enacted after significant public advocacy for animal rights.",
    region: "South America",
    coordinates: { lat: 23.1, lng: -82.4 },
    color: "#166534",
  },
  {
    code: "JM",
    name: "Jamaica",
    nameLocal: "Jamaica",
    flag: "\ud83c\uddef\ud83c\uddf2",
    mainLaw: "Cruelty to Animals Act",
    mainLawYear: 1904,
    animalDefinition:
      "Any domestic or captive animal. The Act, originally from the colonial era, covers basic anti-cruelty protections.",
    region: "South America",
    coordinates: { lat: 18.1, lng: -77.3 },
    color: "#166534",
  },
  // ===== AFRICA (Expansion) =====
  {
    code: "DZ",
    name: "Algeria",
    nameLocal: "الجزائر",
    flag: "🇩🇿",
    mainLaw: "Penal Code (Ordonnance No. 66-156) / Law No. 04-07 on Hunting",
    mainLawYear: 1966,
    animalDefinition:
      "Any domestic, farm, or captive animal. Algeria's animal welfare protections derive from Penal Code Articles 449-450 (cruelty provisions) and Law No. 04-07 on Hunting (2004) for wildlife.",
    region: "Africa",
    coordinates: { lat: 28.0, lng: 1.7 },
    color: "#166534",
  },
  {
    code: "AO",
    name: "Angola",
    nameLocal: "Angola",
    flag: "🇦🇴",
    mainLaw: "Wildlife Conservation Law (Lei da Conservação da Fauna Selvagem)",
    mainLawYear: 2017,
    animalDefinition:
      "Any wild animal species, especially those classified as endangered or protected. Angola's framework focuses on wildlife conservation in the context of post-conflict biodiversity recovery.",
    region: "Africa",
    coordinates: { lat: -11.2, lng: 17.9 },
    color: "#166534",
  },
  {
    code: "CM",
    name: "Cameroon",
    nameLocal: "Cameroun",
    flag: "🇨🇲",
    mainLaw: "Law No. 94/01 on Forestry, Wildlife and Fisheries",
    mainLawYear: 1994,
    animalDefinition:
      "Any wild animal species classified under the law's protection schedules. Cameroon's wildlife law establishes three classes of protected species with varying hunting restrictions.",
    region: "Africa",
    coordinates: { lat: 7.4, lng: 12.4 },
    color: "#166534",
  },
  {
    code: "CI",
    name: "Côte d'Ivoire",
    nameLocal: "Côte d'Ivoire",
    flag: "🇨🇮",
    mainLaw: "Law No. 65-255 on Fauna Protection and Hunting",
    mainLawYear: 1965,
    animalDefinition:
      "Any wild animal species. Côte d'Ivoire's legislation focuses on wildlife protection through hunting regulation and habitat conservation.",
    region: "Africa",
    coordinates: { lat: 7.5, lng: -5.5 },
    color: "#166534",
  },
  {
    code: "CD",
    name: "Democratic Republic of the Congo",
    nameLocal: "République Démocratique du Congo",
    flag: "🇨🇩",
    mainLaw: "Law No. 14/003 on Nature Conservation",
    mainLawYear: 2014,
    animalDefinition:
      "Any wild animal species, with special protections for species classified as integrally or partially protected. The DRC's vast biodiversity makes wildlife conservation a priority.",
    region: "Africa",
    coordinates: { lat: -4.0, lng: 21.8 },
    color: "#166534",
  },
  {
    code: "ZW",
    name: "Zimbabwe",
    nameLocal: "Zimbabwe",
    flag: "🇿🇼",
    mainLaw: "Prevention of Cruelty to Animals Act (Chapter 19:09)",
    mainLawYear: 1960,
    animalDefinition:
      "Any domestic or captive animal. Zimbabwe's anti-cruelty legislation is supplemented by the Parks and Wild Life Act (1975) for wildlife protection, including the landmark Cecil the Lion case context.",
    region: "Africa",
    coordinates: { lat: -19.0, lng: 29.2 },
    color: "#166534",
  },
  {
    code: "ZM",
    name: "Zambia",
    nameLocal: "Zambia",
    flag: "🇿🇲",
    mainLaw: "Zambia Wildlife Act No. 14",
    mainLawYear: 2015,
    animalDefinition:
      "Any wild animal species. The 2015 Wildlife Act significantly strengthened penalties for poaching, with up to 25 years imprisonment for killing protected species.",
    region: "Africa",
    coordinates: { lat: -13.1, lng: 27.9 },
    color: "#166534",
  },
  {
    code: "MW",
    name: "Malawi",
    nameLocal: "Malaŵi",
    flag: "🇲🇼",
    mainLaw: "National Parks and Wildlife Act",
    mainLawYear: 2004,
    animalDefinition:
      "Any wild animal species, with specific schedules for protected and specially protected species. Malawi's 2017 amendment introduced severe penalties for wildlife trafficking.",
    region: "Africa",
    coordinates: { lat: -13.3, lng: 34.3 },
    color: "#166534",
  },
  {
    code: "MG",
    name: "Madagascar",
    nameLocal: "Madagasikara",
    flag: "🇲🇬",
    mainLaw: "Protected Areas Code (Law No. 2015-005)",
    mainLawYear: 2015,
    animalDefinition:
      "Any wild animal species, particularly endemic species. Madagascar's unique biodiversity (90%+ endemic species) drives strict protections under the Protected Areas Code and CITES-implementing legislation (Law No. 2005-018).",
    region: "Africa",
    coordinates: { lat: -18.8, lng: 46.9 },
    color: "#166534",
  },
  {
    code: "MU",
    name: "Mauritius",
    nameLocal: "Maurice",
    flag: "🇲🇺",
    mainLaw: "Animal Welfare Act",
    mainLawYear: 2013,
    animalDefinition:
      "Any live vertebrate animal other than a human being. Mauritius's 2013 Act is among the most comprehensive animal welfare laws in Africa, covering companion animals, farm animals, and wildlife.",
    region: "Africa",
    coordinates: { lat: -20.3, lng: 57.6 },
    color: "#166534",
  },
  {
    code: "LY",
    name: "Libya",
    nameLocal: "ليبيا",
    flag: "🇱🇾",
    mainLaw: "Environmental Protection Law No. 15",
    mainLawYear: 2003,
    animalDefinition:
      "Wildlife and natural resources. Libya's environmental law includes provisions for wildlife conservation, though enforcement has been limited due to political instability.",
    region: "Africa",
    coordinates: { lat: 26.3, lng: 17.2 },
    color: "#166534",
  },
  {
    code: "SD",
    name: "Sudan",
    nameLocal: "السودان",
    flag: "🇸🇩",
    mainLaw: "Wildlife Conservation and National Parks Act",
    mainLawYear: 2003,
    animalDefinition:
      "Any wild animal species within Sudan's territory. The 2003 Act establishes national parks and wildlife reserves with protections for listed species.",
    region: "Africa",
    coordinates: { lat: 12.9, lng: 30.2 },
    color: "#166534",
  },
  {
    code: "ML",
    name: "Mali",
    nameLocal: "Mali",
    flag: "🇲🇱",
    mainLaw: "Law No. 95-031 on Wildlife Management",
    mainLawYear: 1995,
    animalDefinition:
      "Any wild animal species subject to hunting or conservation regulations. Mali's legislation focuses on regulating hunting and protecting designated wildlife areas.",
    region: "Africa",
    coordinates: { lat: 17.6, lng: -4.0 },
    color: "#166534",
  },
  {
    code: "BF",
    name: "Burkina Faso",
    nameLocal: "Burkina Faso",
    flag: "🇧🇫",
    mainLaw: "Code Forestier (Forestry Code)",
    mainLawYear: 2011,
    animalDefinition:
      "Any wild animal species. Burkina Faso's Forestry Code includes wildlife protection provisions alongside forest management, with three categories of protected species.",
    region: "Africa",
    coordinates: { lat: 12.4, lng: -1.6 },
    color: "#166534",
  },
  {
    code: "NE",
    name: "Niger",
    nameLocal: "Niger",
    flag: "🇳🇪",
    mainLaw: "Law No. 98-07 on Hunting and Wildlife Protection",
    mainLawYear: 1998,
    animalDefinition:
      "Any wild animal species, particularly those in the Sahel and Sahara regions. Niger's legislation protects addax, scimitar-horned oryx, and other desert wildlife.",
    region: "Africa",
    coordinates: { lat: 17.6, lng: 8.1 },
    color: "#166534",
  },
  {
    code: "TD",
    name: "Chad",
    nameLocal: "Tchad",
    flag: "🇹🇩",
    mainLaw: "Law No. 14/PR/2008 on Forests, Fauna and Fisheries",
    mainLawYear: 2008,
    animalDefinition:
      "Any wild animal species. Chad's law protects wildlife including elephants and large carnivores, with enhanced penalties for poaching in protected areas.",
    region: "Africa",
    coordinates: { lat: 15.5, lng: 18.7 },
    color: "#166534",
  },
  {
    code: "SO",
    name: "Somalia",
    nameLocal: "Soomaaliya",
    flag: "🇸🇴",
    mainLaw: "Provisional Constitution (2012) / Environmental Conservation Law (2019)",
    mainLawYear: 2012,
    animalDefinition:
      "Any wild animal species. Somalia's constitutional and environmental framework provides wildlife protections, though enforcement has been severely disrupted by decades of conflict.",
    region: "Africa",
    coordinates: { lat: 5.2, lng: 46.2 },
    color: "#166534",
  },
  {
    code: "SL",
    name: "Sierra Leone",
    nameLocal: "Sierra Leone",
    flag: "🇸🇱",
    mainLaw: "Wildlife Conservation Act",
    mainLawYear: 1972,
    animalDefinition:
      "Any wild animal species listed in the schedules. Sierra Leone's legislation protects chimpanzees, pygmy hippopotamus, and other West African wildlife.",
    region: "Africa",
    coordinates: { lat: 8.5, lng: -11.8 },
    color: "#166534",
  },
  {
    code: "GM",
    name: "Gambia",
    nameLocal: "Gambia",
    flag: "🇬🇲",
    mainLaw: "Biodiversity and Wildlife Act",
    mainLawYear: 2003,
    animalDefinition:
      "Any wild animal species within The Gambia. The Act provides comprehensive biodiversity protections with community involvement in conservation management.",
    region: "Africa",
    coordinates: { lat: 13.4, lng: -16.6 },
    color: "#166534",
  },
  {
    code: "GA",
    name: "Gabon",
    nameLocal: "Gabon",
    flag: "🇬🇦",
    mainLaw: "Code Forestier (Forestry Code) and National Parks Law",
    mainLawYear: 2001,
    animalDefinition:
      "Any wild animal species, with emphasis on great apes and forest elephants. Gabon created 13 national parks in 2002, protecting 11% of its territory.",
    region: "Africa",
    coordinates: { lat: -0.8, lng: 11.6 },
    color: "#166534",
  },
  {
    code: "CG",
    name: "Republic of the Congo",
    nameLocal: "Congo",
    flag: "🇨🇬",
    mainLaw: "Law No. 37-2008 on Wildlife and Protected Areas",
    mainLawYear: 2008,
    animalDefinition:
      "Any wild animal species, with three categories of protection. Congo-Brazzaville's legislation includes strong protections for great apes and forest elephants.",
    region: "Africa",
    coordinates: { lat: -0.2, lng: 15.8 },
    color: "#166534",
  },
  // ===== CARIBBEAN =====
  {
    code: "TT",
    name: "Trinidad and Tobago",
    nameLocal: "Trinidad and Tobago",
    flag: "🇹🇹",
    mainLaw: "Cruelty to Animals Act",
    mainLawYear: 1921,
    animalDefinition:
      "Any domestic or captive animal. Trinidad and Tobago's colonial-era legislation provides basic anti-cruelty protections, supplemented by the Conservation of Wildlife Act.",
    region: "South America",
    coordinates: { lat: 10.7, lng: -61.2 },
    color: "#166534",
  },
  {
    code: "DO",
    name: "Dominican Republic",
    nameLocal: "República Dominicana",
    flag: "🇩🇴",
    mainLaw: "Law No. 248-12 on Animal Protection and Responsible Ownership",
    mainLawYear: 2012,
    animalDefinition:
      "Any domestic or wild animal. Law No. 248-12 (2012) is the Dominican Republic's dedicated animal welfare statute, prohibiting cruelty, abandonment, and mistreatment, supplemented by the Environmental Law 64-00 (2000) for wildlife.",
    region: "South America",
    coordinates: { lat: 18.7, lng: -70.2 },
    color: "#166534",
  },
  {
    code: "BS",
    name: "Bahamas",
    nameLocal: "Bahamas",
    flag: "🇧🇸",
    mainLaw: "Animal Protection and Control Act (Chapter 224A)",
    mainLawYear: 2015,
    animalDefinition:
      "Any vertebrate animal, including companion animals, livestock, and wildlife. The 2015 Act modernized the Bahamas' animal welfare framework with enhanced penalties.",
    region: "South America",
    coordinates: { lat: 25.0, lng: -77.4 },
    color: "#166534",
  },
  {
    code: "BB",
    name: "Barbados",
    nameLocal: "Barbados",
    flag: "🇧🇧",
    mainLaw: "Prevention of Cruelty to Animals Act",
    mainLawYear: 1954,
    animalDefinition:
      "Any domestic or captive animal. Barbados' legislation provides basic anti-cruelty protections with an ongoing effort to modernize through proposed new animal welfare legislation.",
    region: "South America",
    coordinates: { lat: 13.2, lng: -59.5 },
    color: "#166534",
  },
  {
    code: "GY",
    name: "Guyana",
    nameLocal: "Guyana",
    flag: "🇬🇾",
    mainLaw: "Wildlife Conservation and Management Act",
    mainLawYear: 2016,
    animalDefinition:
      "Any living vertebrate animal. Guyana's legislation combines colonial-era anti-cruelty provisions (Summary Jurisdiction Offences Act) with the Wildlife Conservation and Management Act (2016) and Iwokrama International Centre Act (1996) for rainforest conservation.",
    region: "South America",
    coordinates: { lat: 4.9, lng: -58.9 },
    color: "#166534",
  },
  {
    code: "SR",
    name: "Suriname",
    nameLocal: "Suriname",
    flag: "🇸🇷",
    mainLaw: "Nature Conservation Act (Natuurbeschermingswet)",
    mainLawYear: 1954,
    animalDefinition:
      "Any wild animal species, with schedules of protected species. Suriname's legislation protects wildlife in the context of its extensive tropical rainforest (>90% forest cover).",
    region: "South America",
    coordinates: { lat: 3.9, lng: -56.0 },
    color: "#166534",
  },
  // ===== CENTRAL AMERICA =====
  {
    code: "GT",
    name: "Guatemala",
    nameLocal: "Guatemala",
    flag: "🇬🇹",
    mainLaw: "Decree 5-2017 (Animal Welfare and Protection Law)",
    mainLawYear: 2017,
    animalDefinition:
      "Any domestic, farm, or wild animal. Guatemala's 2017 law was a landmark in Central America, establishing comprehensive anti-cruelty protections with criminal penalties.",
    region: "South America",
    coordinates: { lat: 14.6, lng: -90.5 },
    color: "#166534",
  },
  {
    code: "HN",
    name: "Honduras",
    nameLocal: "Honduras",
    flag: "🇭🇳",
    mainLaw: "Decree No. 115-2015 (Law for the Protection and Welfare of Domestic Animals and Wild Animals in Captivity)",
    mainLawYear: 2015,
    animalDefinition:
      "Any domestic animal or wild animal in captivity. Honduras' 2015 law establishes criminal penalties for animal cruelty and mandates humane treatment standards.",
    region: "South America",
    coordinates: { lat: 14.1, lng: -87.2 },
    color: "#166534",
  },
  {
    code: "SV",
    name: "El Salvador",
    nameLocal: "El Salvador",
    flag: "🇸🇻",
    mainLaw: "Decree No. 330 (Animal Protection Law)",
    mainLawYear: 2016,
    animalDefinition:
      "Any sentient animal, domestic or wild. El Salvador's 2016 law recognizes animal sentience and establishes protections against cruelty, abandonment, and inappropriate confinement.",
    region: "South America",
    coordinates: { lat: 13.7, lng: -89.2 },
    color: "#166534",
  },
  {
    code: "NI",
    name: "Nicaragua",
    nameLocal: "Nicaragua",
    flag: "🇳🇮",
    mainLaw: "Law No. 747 (Law for the Protection and Welfare of Domestic Animals and Domesticated Wild Animals)",
    mainLawYear: 2011,
    animalDefinition:
      "Any domestic animal or domesticated wild animal. Nicaragua's 2011 law was one of Central America's earliest comprehensive animal welfare statutes.",
    region: "South America",
    coordinates: { lat: 12.9, lng: -85.2 },
    color: "#166534",
  },
  // ===== EUROPE (Expansion) =====
  {
    code: "IS",
    name: "Iceland",
    nameLocal: "Ísland",
    flag: "🇮🇸",
    mainLaw: "Animal Welfare Act (Lög um velferð dýra, No. 55/2013)",
    mainLawYear: 2013,
    animalDefinition:
      "Any live vertebrate animal and any live cephalopod. Iceland's 2013 Act is comprehensive, covering animal husbandry, transport, slaughter, and companion animal welfare.",
    region: "Europe",
    coordinates: { lat: 64.1, lng: -21.9 },
    color: "#166534",
  },
  {
    code: "RS",
    name: "Serbia",
    nameLocal: "Србија",
    flag: "🇷🇸",
    mainLaw: "Animal Welfare Act (Zakon o dobrobiti životinja)",
    mainLawYear: 2009,
    animalDefinition:
      "Any vertebrate animal, including domestic, farm, wild, and laboratory animals. Serbia's 2009 Act provides comprehensive welfare protections aligned with EU standards.",
    region: "Europe",
    coordinates: { lat: 44.0, lng: 20.9 },
    color: "#166534",
  },
  {
    code: "HR",
    name: "Croatia",
    nameLocal: "Hrvatska",
    flag: "🇭🇷",
    mainLaw: "Animal Protection Act (Zakon o zaštiti životinja)",
    mainLawYear: 2017,
    animalDefinition:
      "Any vertebrate animal and cephalopod. Croatia's 2017 Act replaced earlier legislation with strengthened protections, banning fur farming and wild animals in circuses.",
    region: "Europe",
    coordinates: { lat: 45.1, lng: 15.2 },
    color: "#166534",
  },
  {
    code: "BA",
    name: "Bosnia and Herzegovina",
    nameLocal: "Bosna i Hercegovina",
    flag: "🇧🇦",
    mainLaw: "Animal Protection and Welfare Act",
    mainLawYear: 2009,
    animalDefinition:
      "Any vertebrate animal. Bosnia's entity-level legislation (Federation and Republika Srpska) provides baseline anti-cruelty protections, though enforcement varies between entities.",
    region: "Europe",
    coordinates: { lat: 43.9, lng: 17.7 },
    color: "#166534",
  },
  {
    code: "AL",
    name: "Albania",
    nameLocal: "Shqipëria",
    flag: "🇦🇱",
    mainLaw: "Law No. 10465 on Veterinary Service",
    mainLawYear: 2011,
    animalDefinition:
      "Any domestic or farm animal. Albania's veterinary service law includes animal welfare provisions, though a dedicated animal protection law remains under development.",
    region: "Europe",
    coordinates: { lat: 41.2, lng: 20.2 },
    color: "#166534",
  },
  {
    code: "MK",
    name: "North Macedonia",
    nameLocal: "Северна Македонија",
    flag: "🇲🇰",
    mainLaw: "Law on Animal Welfare",
    mainLawYear: 2014,
    animalDefinition:
      "Any vertebrate animal, including companion, farm, laboratory, and wild animals. North Macedonia's 2014 law aligned domestic legislation with EU acquis on animal welfare.",
    region: "Europe",
    coordinates: { lat: 41.5, lng: 21.7 },
    color: "#166534",
  },
  {
    code: "ME",
    name: "Montenegro",
    nameLocal: "Crna Gora",
    flag: "🇲🇪",
    mainLaw: "Animal Welfare Act (Zakon o zaštiti dobrobiti životinja)",
    mainLawYear: 2008,
    animalDefinition:
      "Any vertebrate animal. Montenegro's 2008 Act was adopted as part of EU accession preparations, establishing welfare standards for domestic, farm, and stray animals.",
    region: "Europe",
    coordinates: { lat: 42.7, lng: 19.4 },
    color: "#166534",
  },
  {
    code: "SK",
    name: "Slovakia",
    nameLocal: "Slovensko",
    flag: "🇸🇰",
    mainLaw: "Act No. 39/2007 on Veterinary Care (Zákon o veterinárnej starostlivosti)",
    mainLawYear: 2007,
    animalDefinition:
      "Any vertebrate animal. Slovakia's veterinary care law includes comprehensive animal welfare provisions as an EU member state, implementing EU Directive 2010/63/EU.",
    region: "Europe",
    coordinates: { lat: 48.7, lng: 19.7 },
    color: "#166534",
  },
  {
    code: "SI",
    name: "Slovenia",
    nameLocal: "Slovenija",
    flag: "🇸🇮",
    mainLaw: "Animal Protection Act (Zakon o zaščiti živali)",
    mainLawYear: 1999,
    animalDefinition:
      "Any vertebrate animal and cephalopod. Slovenia's 1999 Act, amended multiple times, provides comprehensive protections including a constitutional amendment recognizing animal welfare.",
    region: "Europe",
    coordinates: { lat: 46.2, lng: 14.8 },
    color: "#166534",
  },
  {
    code: "MT",
    name: "Malta",
    nameLocal: "Malta",
    flag: "🇲🇹",
    mainLaw: "Animal Welfare Act (Chapter 439)",
    mainLawYear: 2001,
    animalDefinition:
      "Any vertebrate animal and any cephalopod. Malta's Animal Welfare Act provides comprehensive protections for all kept animals, including a ban on the use of wild animals in circuses.",
    region: "Europe",
    coordinates: { lat: 35.9, lng: 14.5 },
    color: "#166534",
  },
  {
    code: "LU",
    name: "Luxembourg",
    nameLocal: "Lëtzebuerg",
    flag: "🇱🇺",
    mainLaw: "Law of 27 June 2018 on Animal Protection",
    mainLawYear: 2018,
    animalDefinition:
      "Any vertebrate animal and cephalopod. Luxembourg's 2018 law recognizes animal sentience and provides one of Europe's strongest frameworks, with penalties up to 3 years imprisonment.",
    region: "Europe",
    coordinates: { lat: 49.8, lng: 6.1 },
    color: "#166534",
  },
  {
    code: "MD",
    name: "Moldova",
    nameLocal: "Moldova",
    flag: "🇲🇩",
    mainLaw: "Law on Animal Protection (Law No. 105/2016)",
    mainLawYear: 2016,
    animalDefinition:
      "Any vertebrate animal, domestic or wild. Moldova's 2016 law addresses animal cruelty, stray animal management, and transport of live animals, aligned with EU association standards.",
    region: "Europe",
    coordinates: { lat: 47.4, lng: 28.4 },
    color: "#166534",
  },
];

export const categories = [
  "Animal Definition",
  "Anti-Cruelty",
  "Companion Animals",
  "Wildlife Protection",
  "Farm Animals",
  "Animal Testing",
  "Slaughter Regulations",
  "Penalties",
  "Animal Rights & Legal Personhood",
] as const;

export type Category = (typeof categories)[number];

export const laws: LawEntry[] = [
  // ==================== JAPAN ====================
  {
    id: "jp-001",
    country: "Japan",
    countryCode: "JP",
    category: "Anti-Cruelty",
    topic: "Killing or injuring animals",
    summary: "Killing or injuring animals without justification is a criminal offense.",
    details:
      "Under Article 44(1) of the Act on Welfare and Management of Animals (Law No. 105 of 1973, substantially amended by Law No. 39 of 2019), any person who kills or injures a protected animal (mammals, birds, reptiles) without justification is subject to criminal penalties of up to 5 years imprisonment and/or a fine up to ¥5,000,000. The 2019 amendment more than doubled the previous maximum of 2 years imprisonment and ¥2,000,000 fine, reflecting public outrage following high-profile animal abuse cases shared on social media. The Ministry of the Environment oversees enforcement through prefectural animal welfare centers. Japan's penalties are now among the strictest in Asia, comparable to Taiwan's framework. However, critics note that prosecution rates remain low, with police often treating animal cruelty cases as minor offenses. The Act was originally enacted in 1973 as Law No. 105, with major revisions in 1999, 2005, 2012, and 2019.",
    lawName: "Act on Welfare and Management of Animals",
    article: "Article 44(1)",
    year: 1973,
    lastAmended: 2019,
    penaltyMin: "Fine up to ¥500,000",
    penaltyMax: "Up to 5 years imprisonment or fine up to ¥5,000,000",
    tags: ["cruelty", "criminal", "penalty"],
  },
  {
    id: "jp-002",
    country: "Japan",
    countryCode: "JP",
    category: "Anti-Cruelty",
    topic: "Animal neglect and abuse",
    summary: "Neglecting or abandoning animals is prohibited.",
    details:
      "Article 44(2) of the Act on Welfare and Management of Animals (Law No. 105 of 1973) criminalizes neglect, defined as failing to provide necessary food, water, or veterinary care, punishable by up to 1 year imprisonment or a fine up to ¥1,000,000. Article 44(3) separately prohibits abandonment of animals, carrying the same penalties. The 2019 amendment (Law No. 39) introduced mandatory standards for breeding facilities including numerical limits on animals per staff member, specified minimum cage sizes, and required veterinary care plans. Enforcement is conducted by prefectural animal welfare inspectors under the Ministry of the Environment. In 2020, Nagoya police prosecuted a breeder under Article 44(2) for keeping over 400 dogs in squalid conditions, marking one of the largest neglect cases in Japanese history. Compared to the EU's more prescriptive welfare standards, Japan's framework relies heavily on self-regulation, which animal welfare groups such as JAVA (Japan Anti-Vivisection Association) have criticized as insufficient.",
    lawName: "Act on Welfare and Management of Animals",
    article: "Article 44(2)-(3)",
    year: 1973,
    lastAmended: 2019,
    penaltyMin: "Fine up to ¥300,000",
    penaltyMax: "Up to 1 year imprisonment or fine up to ¥1,000,000",
    tags: ["neglect", "abandonment", "welfare"],
  },
  {
    id: "jp-003",
    country: "Japan",
    countryCode: "JP",
    category: "Companion Animals",
    topic: "Pet ownership registration",
    summary: "Dog owners must register and vaccinate against rabies.",
    details:
      "Under Articles 4-5 of the Rabies Prevention Act (Law No. 247 of 1950), all dog owners must register their dogs with the local municipality within 30 days of acquisition and obtain annual rabies vaccinations, with violations punishable by a fine up to ¥200,000. The Act on Welfare and Management of Animals was amended in 2019 (effective June 2022) to mandate microchipping for all dogs and cats sold by breeders and pet shops, with existing owners strongly encouraged to comply. The Ministry of the Environment and local prefectural governments enforce registration through animal welfare centers. Japan's microchip database is managed by the Japan Animal Microchip Information Registration Organization (AIPO). As of 2023, Japan's dog registration rate exceeds 90% in urban areas but drops significantly in rural prefectures. The '56-day rule' (8-week rule), also introduced in the 2019 amendment, prohibits the sale of puppies and kittens younger than 56 days to reduce impulse purchases and socialization problems.",
    lawName: "Rabies Prevention Act / Animal Welfare Act",
    article: "Articles 4-5 (Rabies Act)",
    year: 1950,
    lastAmended: 2022,
    tags: ["registration", "vaccination", "microchip", "dogs", "cats"],
  },
  {
    id: "jp-004",
    country: "Japan",
    countryCode: "JP",
    category: "Animal Testing",
    topic: "3Rs principle in animal experiments",
    summary: "The 3Rs (Replacement, Reduction, Refinement) are promoted but not mandatory.",
    details:
      "Article 41 of the Act on Welfare and Management of Animals (Law No. 105 of 1973) promotes the 3Rs principle (Replacement, Reduction, Refinement) for animal experimentation but relies primarily on voluntary self-regulation by research institutions rather than mandatory licensing. Unlike the EU Directive 2010/63/EU, Japan has no compulsory inspection or licensing regime for animal testing facilities. The Science Council of Japan issued Guidelines for Proper Conduct of Animal Experiments (2006), and individual institutions are expected to establish their own Institutional Animal Care and Use Committees (IACUCs). The Ministry of Education, Culture, Sports, Science and Technology (MEXT) and the Ministry of Health, Labour and Welfare issue non-binding guidance. Japan uses an estimated 5-10 million animals annually in research, though exact figures are unavailable due to the absence of mandatory reporting. Animal welfare organizations including JAVA have campaigned for mandatory oversight, citing a 2014 OECD review that identified Japan's self-regulatory approach as an outlier among developed nations.",
    lawName: "Act on Welfare and Management of Animals",
    article: "Article 41",
    year: 1973,
    lastAmended: 2019,
    tags: ["testing", "research", "3Rs", "self-regulation"],
  },
  {
    id: "jp-005",
    country: "Japan",
    countryCode: "JP",
    category: "Slaughter Regulations",
    topic: "Humane slaughter requirements",
    summary: "Animals must be slaughtered with minimal suffering.",
    details:
      "Article 40 of the Act on Welfare and Management of Animals (Law No. 105 of 1973) requires that animals be killed using methods that minimize pain and distress, but does not specify mandatory stunning. The Slaughterhouse Act (Law No. 114 of 1953, amended 2014) regulates slaughter facility standards and meat inspection under the Ministry of Health, Labour and Welfare. While electrical stunning is widely practiced for pigs and captive-bolt stunning for cattle, it is not legally mandated, and some facilities still use non-stun methods. The Ministry of the Environment's Guidelines for Methods of Killing Animals (2007, revised 2013) recommend humane killing procedures including pre-slaughter stunning. Japan slaughters approximately 1.3 million cattle, 16 million pigs, and 700 million chickens annually. Compared to the EU's Council Regulation (EC) 1099/2009, which mandates pre-slaughter stunning with limited religious exemptions, Japan's approach is less prescriptive. Animal welfare groups such as Animal Rights Center Japan have documented welfare concerns at slaughterhouses and campaigned for mandatory stunning legislation.",
    lawName: "Act on Welfare and Management of Animals / Slaughterhouse Act",
    article: "Article 40",
    year: 1973,
    lastAmended: 2019,
    tags: ["slaughter", "stunning", "welfare"],
  },
  {
    id: "jp-006",
    country: "Japan",
    countryCode: "JP",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary: "Hunting and capture of wildlife is regulated by permit system.",
    details:
      "The Wildlife Protection and Hunting Management Act (Law No. 88 of 2002, replacing the 1918 Hunting Act) regulates hunting permits, seasons, methods, and protected species under the Ministry of the Environment. Hunters must pass prefectural examinations and obtain licenses renewed every 3 years. The Act designates National Wildlife Protection Areas and Special Protection Zones where hunting is prohibited. Violations carry penalties of up to 1 year imprisonment or a fine up to ¥1,000,000 under Article 83. Japan designates certain species as Natural Monuments under the Cultural Properties Protection Act (1950), including the Japanese serow (kamoshika), Japanese crane (tancho), and Iriomote cat. Japan ratified CITES in 1980 and the Convention on Biological Diversity in 1993. The Specified Invasive Alien Species Act (2004) regulates non-native species including raccoons and green iguanas. Despite legal frameworks, human-wildlife conflict with bears (approximately 150 incidents annually) and boar populations remains a significant management challenge.",
    lawName: "Wildlife Protection and Hunting Management Act",
    article: "Various",
    year: 2002,
    tags: ["wildlife", "hunting", "conservation", "CITES"],
  },
  {
    id: "jp-007",
    country: "Japan",
    countryCode: "JP",
    category: "Farm Animals",
    topic: "Livestock welfare standards",
    summary: "Farm animal welfare guidelines exist but are non-binding.",
    details:
      "The Guidelines for Proper Keeping of Industrial Animals, issued by the Ministry of the Environment in 2004 (revised 2013) under Article 7 of the Act on Welfare and Management of Animals, establish non-binding welfare standards for farm animals based on WOAH (formerly OIE) Terrestrial Animal Health Code recommendations. Battery cages for egg-laying hens and gestation crates for sows remain legal, placing Japan behind the EU which banned battery cages in 2012 under Directive 1999/74/EC. Japan houses approximately 140 million layer hens, with 92% in battery cages as of 2022. The Ministry of Agriculture, Forestry and Fisheries (MAFF) issues separate technical standards focused on productivity. Unlike the Five Freedoms framework in EU and UK legislation, Japan's guidelines are advisory with no penalties for non-compliance. Animal welfare organizations including Animal Rights Center Japan have campaigned for mandatory cage-free transitions, prompting some major food corporations to adopt voluntary commitments.",
    lawName: "Guidelines for Proper Keeping of Industrial Animals",
    article: "Ministry of Environment Guidelines",
    year: 2004,
    lastAmended: 2013,
    tags: ["farming", "livestock", "guidelines", "voluntary"],
  },
  {
    id: "jp-008",
    country: "Japan",
    countryCode: "JP",
    category: "Penalties",
    topic: "Maximum penalties overview",
    summary: "Japan significantly increased animal cruelty penalties in 2019.",
    details:
      "The 2019 amendment to the Act on Welfare and Management of Animals (Law No. 39 of 2019) raised the maximum penalty under Article 44(1) for animal killing or injury from 2 years to 5 years imprisonment and from ¥2,000,000 to ¥5,000,000 in fines, making these among the strictest animal cruelty penalties in Asia, comparable to Taiwan's Animal Protection Act. Article 44(2) penalties for neglect were increased from 6 months to 1 year imprisonment and fines up to ¥1,000,000. Article 44(3) for abandonment carries up to 1 year imprisonment or ¥1,000,000 fine. The Ministry of the Environment enforces through prefectural animal welfare centers and police cooperation. Despite the increased statutory penalties, conviction rates remain low; in 2021, only 170 animal cruelty cases were prosecuted nationwide. The National Police Agency has issued guidance to prefectural police to treat animal cruelty as a serious offense, partly due to research linking animal abuse to violent crimes against humans.",
    lawName: "Act on Welfare and Management of Animals",
    article: "Article 44",
    year: 2019,
    tags: ["penalties", "enforcement", "criminal"],
  },

  // ==================== SOUTH KOREA ====================
  {
    id: "kr-001",
    country: "South Korea",
    countryCode: "KR",
    category: "Anti-Cruelty",
    topic: "Animal cruelty prohibition",
    summary: "Cruel acts against animals are prohibited with criminal penalties.",
    details:
      "Article 8 of the Animal Protection Act (Act No. 4379, enacted 1991, comprehensively amended by Act No. 19774 in 2024) prohibits killing animals by cruel methods including hanging, inflicting excessive physical pain, or killing in the presence of other animals of the same species. The Act is enforced by the Animal and Plant Quarantine Agency (APQA) under the Ministry of Agriculture, Food and Rural Affairs. Penalties under Article 46 include up to 3 years imprisonment or a fine up to 30 million won for first offenses, with enhanced penalties for repeat offenders. In the landmark 2018 Bucheon dog slaughterhouse case, a court ruled that killing dogs for meat could constitute an act of cruelty under Article 8, setting precedent for future prosecutions. The Act has been amended over 20 times since 1991, with the most significant reforms in 2007, 2011, 2017, and 2024, progressively expanding the definition of cruelty and increasing penalties.",
    lawName: "Animal Protection Act",
    article: "Article 8",
    year: 1991,
    lastAmended: 2024,
    penaltyMin: "Fine up to ₩5,000,000",
    penaltyMax: "Up to 3 years imprisonment or fine up to ₩30,000,000",
    tags: ["cruelty", "criminal", "penalty"],
  },
  {
    id: "kr-002",
    country: "South Korea",
    countryCode: "KR",
    category: "Companion Animals",
    topic: "Dog meat ban",
    summary: "Korea banned dog meat slaughter and consumption effective 2024.",
    details:
      "The Special Act on Ending Dog Meat Consumption (Act No. 20236) was passed by the National Assembly on January 9, 2024, with a 3-year grace period. By February 2027, breeding, slaughtering, distributing, and selling dogs for human consumption will be fully prohibited. Violations will carry penalties of up to 3 years imprisonment or a fine up to 30 million won. The Act mandates government support for business transition, including compensation and retraining for approximately 1,100 dog meat farms and 1,600 restaurants. Enforced by the Ministry of Agriculture, Food and Rural Affairs, the law represents a historic shift in Korean cultural policy, driven by declining consumption (from 60% of citizens having eaten dog meat in 2015 to under 8% in 2024) and sustained campaigns by organizations including the Korea Animal Rights Advocates (KARA) and Humane Society International. South Korea is the largest country by GDP to enact a comprehensive ban on the dog meat trade.",
    lawName: "Special Act on Ending Dog Meat Consumption",
    article: "Full Act",
    year: 2024,
    penaltyMax: "Up to 3 years imprisonment or fine up to ₩30,000,000",
    tags: ["dog meat", "ban", "landmark", "companion animals"],
  },
  {
    id: "kr-003",
    country: "South Korea",
    countryCode: "KR",
    category: "Companion Animals",
    topic: "Pet registration system",
    summary: "Dogs must be registered with microchips; expanding to cats.",
    details:
      "Article 12 of the Animal Protection Act (amended 2023) mandates that all dogs over 2 months old must be registered with the local government through microchip implantation within 30 days of acquisition. The registration database is managed by the Animal and Plant Quarantine Agency (APQA) and is accessible via the Animal Protection Management System (APMS). Failure to register carries administrative fines of up to 1 million won under Article 47. As of 2023, approximately 3.5 million dogs are registered in South Korea, though the actual pet dog population is estimated at over 6 million, indicating significant non-compliance. The 2023 amendment expanded registration to include cats on a voluntary basis, with discussions ongoing for mandatory feline registration by 2026. Lost pet reunification rates increased from 15% to over 40% following microchip implementation. The Ministry of Agriculture, Food and Rural Affairs has partnered with veterinary clinics to provide subsidized microchipping services to promote compliance.",
    lawName: "Animal Protection Act",
    article: "Article 12",
    year: 1991,
    lastAmended: 2023,
    tags: ["registration", "microchip", "dogs"],
  },
  {
    id: "kr-004",
    country: "South Korea",
    countryCode: "KR",
    category: "Wildlife Protection",
    topic: "Wildlife protection and management",
    summary: "Endangered wildlife species are strictly protected.",
    details:
      "The Wildlife Protection and Management Act (Act No. 7167, enacted 2004, amended by Act No. 18523 in 2022) designates endangered species in two classes under Article 2: Class I (critically endangered, including the Amur leopard, red-crowned crane, and Korean tiger, with 67 species listed) and Class II (vulnerable, 195 species). Articles 14-16 completely prohibit hunting, capture, possession, and trade of Class I species, with penalties under Article 67 of up to 5 years imprisonment or a fine up to 50 million won. The Ministry of Environment and the Korea National Park Service enforce the Act through wildlife monitoring and anti-poaching patrols. South Korea has established the National Institute of Ecology (2013) and the Species Restoration Technology Institute for captive breeding programs. The DMZ (Demilitarized Zone) is recognized as one of the world's most important unintentional wildlife refuges, supporting populations of red-crowned cranes, Asiatic black bears, and endangered plants.",
    lawName: "Wildlife Protection and Management Act",
    article: "Various",
    year: 2004,
    lastAmended: 2022,
    tags: ["wildlife", "endangered", "conservation"],
  },
  {
    id: "kr-005",
    country: "South Korea",
    countryCode: "KR",
    category: "Animal Testing",
    topic: "Animal testing regulations",
    summary: "Animal testing requires institutional ethics committee approval.",
    details:
      "Under Articles 7-8 of the Laboratory Animal Act (Act No. 9025, enacted 2008, amended 2023), all institutions conducting animal experiments must establish an Institutional Animal Care and Use Committee (IACUC) comprising at least 3 members including a veterinarian and an external animal welfare representative. The Act mandates the 3Rs principles (Replacement, Reduction, Refinement) and requires annual reporting of animal use statistics to the Animal and Plant Quarantine Agency (APQA). In 2017, South Korea banned cosmetics animal testing through amendments to the Cosmetics Act (Article 15-2), becoming the first Asian country to do so. Approximately 4.1 million animals were used in experiments in 2022, primarily rodents. The Korean Ministry of Food and Drug Safety has invested in developing alternative testing methods, establishing the Korean Center for the Validation of Alternative Methods (KoCVAM) in 2009 to promote OECD-validated non-animal testing approaches.",
    lawName: "Laboratory Animal Act",
    article: "Articles 7-8",
    year: 2008,
    lastAmended: 2023,
    tags: ["testing", "IACUC", "ethics", "cosmetics"],
  },
  {
    id: "kr-006",
    country: "South Korea",
    countryCode: "KR",
    category: "Farm Animals",
    topic: "Livestock welfare",
    summary: "Farm animal welfare standards are established by government certification.",
    details:
      "Under Articles 29-30 of the Animal Protection Act, Korea operates an Animal Welfare Livestock Farm Certification system administered by the Animal and Plant Quarantine Agency (APQA). Certified farms must meet enhanced space requirements, environmental enrichment standards, and humane handling protocols exceeding the minimum standards in the Livestock Industry Act (Act No. 4759). As of 2023, approximately 300 farms have received certification, representing less than 1% of Korean livestock operations. Certified egg farms must provide a minimum of 0.075 sq m per hen with access to nesting boxes, perches, and dust bathing areas. The Ministry of Agriculture, Food and Rural Affairs provides financial incentives including subsidized facility upgrades for farms seeking certification. Battery cage egg production still accounts for over 90% of Korean egg production, though major retailers including E-Mart and Coupang have announced cage-free transition commitments. Korea slaughters approximately 1 billion chickens, 18 million pigs, and 900,000 cattle annually.",
    lawName: "Animal Protection Act / Livestock Industry Act",
    article: "Articles 29-30",
    year: 2012,
    lastAmended: 2023,
    tags: ["farming", "certification", "welfare standards"],
  },
  {
    id: "kr-007",
    country: "South Korea",
    countryCode: "KR",
    category: "Slaughter Regulations",
    topic: "Humane slaughter",
    summary: "Animals must be stunned before slaughter in licensed facilities.",
    details:
      "The Livestock Products Sanitary Control Act (Act No. 6022, enacted 2000, amended 2021) requires all commercial slaughter to occur in licensed facilities inspected by the Animal and Plant Quarantine Agency (APQA). Article 7 mandates pre-slaughter stunning for cattle, pigs, and poultry through approved methods including captive bolt, electrical stunning, and controlled atmosphere stunning. South Korea operates approximately 130 licensed slaughterhouses nationwide. The Ministry of Agriculture, Food and Rural Affairs issues detailed Humane Slaughter Guidelines specifying stunning parameters, maximum stun-to-stick intervals, and handling procedures during lairage. CCTV monitoring was mandated in all slaughterhouses from 2018 under Article 7-2, making South Korea one of the first Asian countries to require video surveillance of slaughter operations. Halal slaughter is permitted under exemption for religious purposes. Animal welfare organizations including KARA have advocated for improved enforcement, citing documented instances of ineffective stunning, particularly in poultry processing.",
    lawName: "Livestock Products Sanitary Control Act",
    article: "Various",
    year: 2000,
    lastAmended: 2021,
    tags: ["slaughter", "stunning", "humane"],
  },
  {
    id: "kr-008",
    country: "South Korea",
    countryCode: "KR",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Korea has progressively increased animal cruelty penalties.",
    details:
      "Under Articles 46-50 of the Animal Protection Act (comprehensively amended 2024), maximum penalties for animal cruelty include 3 years imprisonment or a fine of 30 million won, with enhanced penalties for repeat offenders reaching 5 years imprisonment or 50 million won. Article 46-2, introduced in the 2023 amendment, specifically addresses animal sexual abuse with penalties of up to 3 years imprisonment. The Act empowers courts to impose supplementary orders including prohibition of animal ownership for up to 5 years under Article 48, mandatory animal welfare education under Article 49, and psychological counseling. The Ministry of Justice established dedicated animal crime investigation units in major metropolitan police agencies starting in 2020. Korea's penalty framework has been progressively strengthened from maximum fines of 5 million won in 2007 to the current structure, reflecting growing public concern over animal welfare. Enforcement is coordinated by the APQA and local government animal protection officers.",
    lawName: "Animal Protection Act",
    article: "Articles 46-50",
    year: 1991,
    lastAmended: 2024,
    tags: ["penalties", "enforcement"],
  },

  // ==================== CHINA ====================
  {
    id: "cn-001",
    country: "China",
    countryCode: "CN",
    category: "Wildlife Protection",
    topic: "Wildlife protection law",
    summary: "Comprehensive wildlife protection with enhanced 2022 amendments.",
    details:
      "The Wildlife Protection Law of the People's Republic of China (adopted by the NPC Standing Committee in 1988, comprehensively revised December 30, 2022) protects wildlife classified as 'national key protected' under two categories: Class I (giant panda, South China tiger, snow leopard, Chinese alligator, and approximately 230 other species) and Class II (approximately 640 species). Articles 21-27 prohibit hunting, killing, purchasing, selling, and transporting protected wildlife. The 2022 revision, driven by the COVID-19 pandemic, added Article 31 banning consumption of wildlife listed in protection inventories, with penalties under Article 55 including up to 10 years imprisonment and fines of 2-10 times the value of the wildlife for trafficking Class I species. Enforcement is shared between the National Forestry and Grassland Administration and the Ministry of Agriculture and Rural Affairs. Despite strong statutory penalties, China's wildlife law does not extend welfare protections to domestic or companion animals, a significant gap compared to comprehensive frameworks in the EU and other developed jurisdictions.",
    lawName: "Wildlife Protection Law",
    article: "Full Law",
    year: 1988,
    lastAmended: 2022,
    penaltyMax: "Up to 10 years imprisonment for trafficking endangered species",
    tags: ["wildlife", "endangered", "trafficking", "COVID-19"],
  },
  {
    id: "cn-002",
    country: "China",
    countryCode: "CN",
    category: "Wildlife Protection",
    topic: "Wildlife consumption ban",
    summary: "Comprehensive ban on consuming wild animals enacted after COVID-19.",
    details:
      "On February 24, 2020, the Standing Committee of the 13th National People's Congress adopted the Decision on Comprehensively Banning Illegal Wildlife Trade and Eliminating the Bad Habit of Consuming Wild Animals, an emergency legislative response to the COVID-19 pandemic believed to have originated from a Wuhan wildlife market. The Decision extended beyond existing Wildlife Protection Law coverage to ban consumption of all terrestrial wild animals, including those bred in captivity, with immediate effect. Penalties reference the Criminal Law Articles 341 and 151, carrying up to 10 years imprisonment. This Decision prompted closure of approximately 20,000 wildlife breeding facilities and required the government to arrange livelihood transitions for affected farmers. The State Administration for Market Regulation and the Ministry of Agriculture and Rural Affairs jointly enforce the ban. The Decision was subsequently codified into the comprehensive 2022 Wildlife Protection Law revision. China Daily reported that illegal wildlife trade investigations increased 66% in 2020. This remains one of the most sweeping wildlife consumption bans globally.",
    lawName: "Decision on Comprehensively Banning Illegal Wildlife Trade",
    article: "Standing Committee Decision",
    year: 2020,
    tags: ["wildlife", "consumption ban", "COVID-19", "landmark"],
  },
  {
    id: "cn-003",
    country: "China",
    countryCode: "CN",
    category: "Anti-Cruelty",
    topic: "Animal cruelty provisions",
    summary: "No comprehensive national anti-cruelty law exists.",
    details:
      "China has no national animal welfare or anti-cruelty statute, a significant legislative gap for the world's second-largest economy. Draft Animal Protection Laws were submitted to the NPC by legal scholars including Professor Chang Jiwen of the Chinese Academy of Social Sciences in 2009 and 2010, and similar proposals were raised during NPC sessions in 2012, 2014, 2018, and 2022, but none have advanced past committee stage. The Criminal Law and Public Security Administration Punishments Law contain no provisions specifically criminalizing animal cruelty. Some local regulations address specific issues: Shenzhen's Comprehensive Ban on Wild Animal Consumption Regulation (2020) was the first local ban, and Beijing's dog management regulations impose standards on pet ownership. In 2020, the Ministry of Agriculture and Rural Affairs published a National Catalogue of Livestock and Poultry Genetic Resources that excluded dogs, effectively recognizing them as companion rather than food animals. Animal welfare advocacy from organizations including Capital Animal Welfare Association and ACTAsia has grown, but cultural and economic factors including the scale of China's livestock industry continue to present legislative challenges.",
    lawName: "No national law (draft proposals pending)",
    article: "N/A",
    year: 2009,
    tags: ["cruelty", "gap", "draft law", "pending"],
  },
  {
    id: "cn-004",
    country: "China",
    countryCode: "CN",
    category: "Companion Animals",
    topic: "Stray animal management",
    summary: "Local regulations vary widely; no national companion animal law.",
    details:
      "In the absence of national companion animal legislation, Chinese cities have enacted local regulations with varying scope. The Shenzhen Special Economic Zone Regulation on Comprehensive Ban of Wild Animal Consumption (2020) became the first municipal regulation in China to ban dog and cat meat consumption, effective May 1, 2020. Beijing's Dog Management Regulations (2003, amended 2016) limit ownership to one dog per household in urban areas, mandate registration and vaccination, and prohibit dogs over 35cm in height in restricted zones. Shanghai's Dog Management Regulations (2011) impose similar restrictions. Hangzhou's regulations prohibit walking dogs without leashes and restrict dog walking hours. Despite these local efforts, no national law addresses companion animal welfare, and an estimated 50 million stray dogs and cats remain largely unmanaged. The Yulin Dog Meat Festival, held annually in Guangxi province since 2010, continues to draw international criticism but remains legally permissible. China's companion animal population has grown to approximately 100 million dogs and 60 million cats as of 2023, creating growing public demand for welfare legislation.",
    lawName: "Various local regulations",
    article: "Various",
    year: 2020,
    tags: ["companion animals", "local regulations", "Shenzhen", "dog meat"],
  },
  {
    id: "cn-005",
    country: "China",
    countryCode: "CN",
    category: "Farm Animals",
    topic: "Livestock welfare",
    summary: "Farm animal welfare governed by technical standards, not welfare law.",
    details:
      "China regulates farm animals through national technical standards (GB/T series) issued by the Standardization Administration and the Ministry of Agriculture and Rural Affairs, but these focus primarily on productivity and food safety rather than animal welfare. GB/T 17824 sets housing standards for pig production, GB/T 19525 addresses layer hen management, and GB/T 20014.3 covers good agricultural practices for cattle, but none mandate welfare outcomes comparable to the EU's Council Directive 98/58/EC on farm animal welfare. China is the world's largest producer of pork (approximately 53 million tonnes annually), poultry, eggs, and farmed fish, housing over 440 million pigs, 5 billion poultry, and conducting the majority of global aquaculture production. Battery cages, gestation crates, and close-confinement systems remain standard practice with no legal restrictions. The China Animal Agriculture Association has published voluntary welfare guidelines, and international companies including Nestlé and Mars have promoted welfare standards in their Chinese supply chains. Some provincial pilots, including Zhejiang's welfare-labeling initiative, have begun introducing market-based welfare incentives.",
    lawName: "National Standards for Livestock Farming",
    article: "Various GB/T standards",
    year: 2010,
    tags: ["farming", "technical standards", "food safety"],
  },
  {
    id: "cn-006",
    country: "China",
    countryCode: "CN",
    category: "Animal Testing",
    topic: "Cosmetics animal testing",
    summary: "China eased mandatory cosmetics animal testing requirements in 2021.",
    details:
      "Under the Cosmetics Supervision and Administration Regulation (State Council Decree No. 727, effective January 1, 2021), China significantly reformed its cosmetics testing requirements. The regulation, enforced by the National Medical Products Administration (NMPA), removed mandatory animal testing requirements for 'ordinary' (non-special use) imported cosmetics when manufacturers can provide safety assessments using internationally accepted alternative methods including in vitro testing. However, 'special use' cosmetics (sunscreens, hair dyes, whitening products) and products with new ingredients still require animal testing. Previously, all imported cosmetics required animal testing under the 2007 Cosmetics Hygiene Supervision Regulations, making China the largest market requiring such testing. The reform was driven by industry pressure, particularly from European companies compliant with the EU's Regulation (EC) No. 1223/2009 cosmetics animal testing ban. China's IIVS (Institute for In Vitro Sciences) and NIFDC (National Institutes for Food and Drug Control) have been developing validated alternative test methods recognized by the OECD.",
    lawName: "Cosmetics Supervision and Administration Regulation",
    article: "Various",
    year: 2021,
    tags: ["testing", "cosmetics", "alternatives", "reform"],
  },
  {
    id: "cn-007",
    country: "China",
    countryCode: "CN",
    category: "Penalties",
    topic: "Wildlife crime penalties",
    summary: "Severe penalties for wildlife trafficking; weak for domestic animal abuse.",
    details:
      "Under the Criminal Law of the People's Republic of China (1997, amended 2020), Article 341 imposes penalties of up to 10 years imprisonment and confiscation of property for illegal hunting, killing, purchasing, transporting, or selling endangered wildlife species. Article 151 provides 5-15 years for smuggling protected species across borders. The 2022 Wildlife Protection Law revision further strengthened administrative penalties under Article 55 to include fines of 2-10 times the value of traded wildlife. The Supreme People's Court and Supreme People's Procuratorate issued a Joint Interpretation in 2022 clarifying sentencing standards for wildlife crimes and expanding the scope of prosecutable offenses. However, there are no criminal or administrative penalties for cruelty to domestic or companion animals, as no national animal welfare law exists. This creates a significant enforcement gap: viral animal abuse videos frequently generate public outrage but cannot be prosecuted. The Public Security Administration Punishments Law (Article 75) prohibits inciting animal attacks on others, but does not address cruelty to animals as a standalone offense.",
    lawName: "Criminal Law / Wildlife Protection Law",
    article: "Articles 341, 151",
    year: 1997,
    lastAmended: 2022,
    penaltyMax: "Up to 10+ years imprisonment for serious wildlife crimes",
    tags: ["penalties", "wildlife", "gap"],
  },

  // ==================== NORTH KOREA ====================
  {
    id: "kp-001",
    country: "North Korea",
    countryCode: "KP",
    category: "Wildlife Protection",
    topic: "Wildlife and environmental protection",
    summary: "Environmental protection laws provide some wildlife coverage.",
    details:
      "The Environmental Protection Law (adopted 1986, revised 2009) under Article 42 and related provisions addresses protection of natural habitats and wildlife across DPRK territory. North Korea has designated approximately 32 nature reserves covering roughly 6% of its land area, including the Mount Kumgang Nature Reserve and Myohyang-san Biosphere Reserve (designated by UNESCO in 2009). The law requires state agencies to prevent environmental degradation and protect flora and fauna. DPRK ratified CITES in 2000, committing to regulate trade in endangered species. Despite these legal frameworks, international monitoring remains extremely limited.",
    lawName: "Environmental Protection Law",
    article: "Articles 42-50",
    year: 1986,
    lastAmended: 2009,
    tags: ["wildlife", "environment", "limited data"],
  },
  {
    id: "kp-002",
    country: "North Korea",
    countryCode: "KP",
    category: "Anti-Cruelty",
    topic: "Animal welfare provisions",
    summary: "No known dedicated animal welfare or anti-cruelty legislation.",
    details:
      "There is no publicly available information on dedicated animal welfare legislation in North Korea. Animals are primarily regulated through agricultural production laws and the Law on Veterinary and Anti-Epizootic Measures (2002), which focuses on livestock disease prevention, quarantine procedures, and animal health inspections rather than welfare. The Penal Code does not contain specific animal cruelty provisions. Working animals including oxen used in agriculture are managed under collective farm regulations. International animal welfare organizations have no operational access to the country.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "no data", "limited information"],
  },
  {
    id: "kp-003",
    country: "North Korea",
    countryCode: "KP",
    category: "Wildlife Protection",
    topic: "Forestry and wildlife habitat management",
    summary: "Forestry Law provides indirect protections for wildlife habitats.",
    details:
      "The DPRK Forestry Law (1992, amended 2015) establishes protections for forest ecosystems that indirectly benefit wildlife. Articles 18-25 address forest conservation zones and prohibit unauthorized logging in protected areas. North Korea's forests support populations of Amur leopards, Asiatic black bears, red-crowned cranes, and white-naped cranes. The country participates in transboundary crane conservation along the Demilitarized Zone (DMZ), which has become an unintentional wildlife sanctuary hosting over 5,000 migratory birds. Deforestation due to energy shortages and agricultural expansion remains a significant threat to wildlife habitat.",
    lawName: "Forestry Law of DPRK",
    article: "Articles 18-25",
    year: 1992,
    lastAmended: 2015,
    tags: ["forestry", "habitat", "DMZ", "cranes", "deforestation"],
  },

  // ==================== MONGOLIA ====================
  {
    id: "mn-001",
    country: "Mongolia",
    countryCode: "MN",
    category: "Wildlife Protection",
    topic: "Fauna protection",
    summary: "Law on Fauna regulates wildlife conservation and hunting.",
    details:
      "The Law on Fauna (2000, revised 2012) establishes three categories of protected species: very rare, rare, and common. Articles 7-9 completely prohibit hunting of 'very rare' species, which include snow leopards (estimated 800-1,000 in Mongolia), Gobi bears (fewer than 40 remaining), wild Bactrian camels, and Przewalski's horses. Article 15 requires environmental impact assessments before any development in wildlife habitats. Mongolia's Criminal Code (Article 202) imposes penalties of 1-5 years imprisonment for illegal hunting of very rare species. The country established the Great Gobi Strictly Protected Area and Khan Khentii Strictly Protected Area as key wildlife refuges.",
    lawName: "Law on Fauna",
    article: "Articles 7-9, 15",
    year: 2000,
    lastAmended: 2012,
    penaltyMax: "1-5 years imprisonment for poaching very rare species under Criminal Code Article 202",
    tags: ["wildlife", "fauna", "hunting", "snow leopard"],
  },
  {
    id: "mn-002",
    country: "Mongolia",
    countryCode: "MN",
    category: "Farm Animals",
    topic: "Livestock and herding traditions",
    summary: "Livestock welfare governed by veterinary law and traditional customs.",
    details:
      "Mongolia's pastoral herding culture, where over 70 million livestock are raised by approximately 300,000 nomadic herding families, provides traditional protections for the five traditional animals (horse, camel, cattle, sheep, goat). The Law on Veterinary and Animal Breeding (2001, amended 2017) addresses animal health, disease prevention, vaccination requirements, and breeding standards under Articles 5-12. The Mongolian Criminal Code (2015) Article 200 penalizes mass livestock death caused by negligence with fines of 450-5,400 MNT units or 1-5 years imprisonment. No specific animal welfare law addressing cruelty prevention or humane treatment standards exists, though traditional Mongolian customs (yos zanshil) strongly discourage mistreatment of livestock.",
    lawName: "Law on Veterinary and Animal Breeding",
    article: "Articles 5-12",
    year: 2001,
    lastAmended: 2017,
    tags: ["livestock", "herding", "traditional", "veterinary"],
  },
  {
    id: "mn-003",
    country: "Mongolia",
    countryCode: "MN",
    category: "Anti-Cruelty",
    topic: "Criminal code provisions and animal welfare gaps",
    summary: "Limited anti-cruelty provisions exist in the Criminal Code; no standalone welfare law.",
    details:
      "Mongolia lacks a dedicated animal welfare or anti-cruelty statute. The Criminal Code of Mongolia (2015, effective 2017) contains limited provisions: Article 202 covers illegal hunting and Article 200 addresses negligent livestock losses, but neither specifically addresses animal cruelty or abuse. The Law on Animal Health (2017) focuses on disease control and food safety rather than welfare. Animal welfare advocates, including the Mongolian National Federation of Animal Protection established in 2016, have lobbied for a comprehensive animal protection law. In 2019, a draft Animal Welfare Law was discussed in parliamentary committees but has not yet been enacted. Horse racing involving child jockeys and the traditional practice of eagle hunting remain culturally significant but increasingly debated.",
    lawName: "Criminal Code of Mongolia",
    article: "Articles 200, 202",
    year: 2015,
    tags: ["anti-cruelty", "gap", "criminal code", "advocacy"],
  },

  // ==================== TAIWAN ====================
  {
    id: "tw-001",
    country: "Taiwan",
    countryCode: "TW",
    category: "Anti-Cruelty",
    topic: "Animal cruelty and killing prohibition",
    summary: "Intentional cruelty or killing of animals carries severe penalties.",
    details:
      "Taiwan's Animal Protection Act (動物保護法), originally enacted in 1998 and substantially amended in 2017 and 2021, prohibits intentional harm, abuse, or killing of animals under Articles 6 and 12. The Council of Agriculture (now the Ministry of Agriculture, established 2023) serves as the primary enforcement agency. Under Article 25, animal cruelty is punishable by imprisonment of one to two years and fines ranging from NT$100,000 to NT$2,000,000. The 2017 amendment (Legislative Yuan resolution of April 11, 2017) significantly elevated penalties from the previous maximum of one year. In the landmark 2019 Taipei District Court case, a repeat offender received the maximum two-year sentence for systematic dog abuse, establishing judicial precedent for aggravated sentencing. Taiwan's framework is considered the most progressive in East Asia, comparable to Japan's 2019 amended Act on Welfare and Management of Animals but with notably higher penalty ceilings.",
    lawName: "Animal Protection Act",
    article: "Articles 6, 12, 25",
    year: 1998,
    lastAmended: 2021,
    penaltyMin: "Fine from NT$150,000",
    penaltyMax: "Up to 2 years imprisonment or fine up to NT$2,000,000",
    tags: ["cruelty", "criminal", "progressive"],
  },
  {
    id: "tw-002",
    country: "Taiwan",
    countryCode: "TW",
    category: "Companion Animals",
    topic: "Dog and cat meat ban",
    summary: "Taiwan was the first in Asia to ban eating dog and cat meat.",
    details:
      "In 2017, Taiwan amended the Animal Protection Act (Article 12-1) to ban the purchase, sale, and consumption of dog and cat meat, making it the first jurisdiction in Asia to enact such a prohibition. The amendment, passed by the Legislative Yuan on April 11, 2017, is enforced by the Council of Agriculture (now Ministry of Agriculture) in coordination with local animal health inspection offices. Under Article 27, violations carry fines of NT$50,000 to NT$250,000, with offenders' names publicly disclosed — a unique shaming mechanism in animal welfare law. Repeat offenders face doubled fines up to NT$500,000. The legislation was driven by advocacy from the Taiwan SPCA following high-profile dog meat trafficking cases in Changhua County (2016). While South Korea passed a similar ban in 2024, Taiwan's law remains the regional benchmark with over 30 prosecutions in its first three years.",
    lawName: "Animal Protection Act",
    article: "Article 12-1, 27",
    year: 2017,
    penaltyMin: "Fine NT$50,000",
    penaltyMax: "Fine NT$250,000 + public disclosure of name",
    tags: ["dog meat", "cat meat", "ban", "landmark", "first in Asia"],
  },
  {
    id: "tw-003",
    country: "Taiwan",
    countryCode: "TW",
    category: "Companion Animals",
    topic: "No-kill shelter policy",
    summary: "Taiwan implemented a no-kill policy for animal shelters in 2017.",
    details:
      "Taiwan banned the routine euthanasia of shelter animals effective February 6, 2017, through an amendment to Article 12 of the Animal Protection Act, with a two-year grace period from the 2015 legislative passage. Exceptions remain for animals with severe, incurable illness or verified public safety threats, as determined by licensed veterinarians. The Ministry of Agriculture oversees implementation, while municipal and county governments operate public shelters. The policy was inspired by the 2013 documentary 'Twelve Nights' (十二夜), which exposed the 12-day euthanasia countdown and generated public outcry. Implementation challenges include overcrowding — Taoyuan and Pingtung shelters reported occupancy exceeding 150% by 2019. The government responded with expanded TNR (trap-neuter-return) programs and adoption subsidies. Taiwan's model has influenced policy discussions in South Korea and Japan, though critics note funding and veterinary care shortfalls.",
    lawName: "Animal Protection Act",
    article: "Article 12",
    year: 2017,
    tags: ["shelters", "no-kill", "adoption", "landmark"],
  },
  {
    id: "tw-004",
    country: "Taiwan",
    countryCode: "TW",
    category: "Animal Testing",
    topic: "Animal testing oversight",
    summary: "All animal experiments require ethics committee approval.",
    details:
      "Under Articles 15-16 of the Animal Protection Act, all institutions conducting animal experiments in Taiwan must establish an Institutional Animal Care and Use Committee (IACUC) comprising at least three members, including a veterinarian and an external member. The Ministry of Agriculture administers oversight through the Animal Protection Division. Taiwan adopted the 3Rs principle (Replacement, Reduction, Refinement) in its 2001 amendment and established the National Laboratory Animal Center (NLAC) to develop alternative methods. The 2021 amendment mandates annual disclosure of animal usage statistics by species and purpose. In 2020, approximately 3.2 million animals were used in research, with rodents comprising over 85%. Cosmetic testing was banned in 2019 through Article 15-1. Violations carry fines of NT$30,000 to NT$150,000 under Article 29, with potential permit revocation for repeat offenders.",
    lawName: "Animal Protection Act",
    article: "Articles 15-16",
    year: 1998,
    lastAmended: 2021,
    tags: ["testing", "IACUC", "ethics", "3Rs"],
  },
  {
    id: "tw-005",
    country: "Taiwan",
    countryCode: "TW",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary: "Comprehensive wildlife protection with strict enforcement.",
    details:
      "Taiwan's Wildlife Conservation Act (野生動物保育法), enacted in 1989 and last amended in 2013, provides tiered protections for species classified as Class I (Endangered) and Class II (Rare and Valuable). The Forestry Bureau under the Ministry of Agriculture serves as the primary enforcement authority. Under Articles 41-42, illegal hunting or trade of Class I species carries imprisonment of six months to five years and fines up to NT$1,500,000. For Class II species, penalties include up to two years imprisonment or fines up to NT$500,000. The Act has been instrumental in recovering the Formosan black bear and Mikado pheasant populations. In 2020, the Taichung District Court sentenced ivory traffickers to three years imprisonment under Article 40, reinforcing CITES compliance. Taiwan maintains a protected species list of over 200 species and has established 95 wildlife refuges covering approximately 55,000 hectares.",
    lawName: "Wildlife Conservation Act",
    article: "Various",
    year: 1989,
    lastAmended: 2013,
    penaltyMax: "Up to 5 years imprisonment or fine up to NT$1,500,000",
    tags: ["wildlife", "conservation", "endangered", "enforcement"],
  },
  {
    id: "tw-006",
    country: "Taiwan",
    countryCode: "TW",
    category: "Slaughter Regulations",
    topic: "Humane slaughter requirements",
    summary: "Animals must be humanely slaughtered with proper stunning.",
    details:
      "Under Article 13 of the Animal Protection Act and the Livestock Slaughter Management Regulations (畜禽屠宰管理辦法), Taiwan mandates that animals be rendered unconscious before slaughter via approved methods including electrical stunning, CO2 gas, or captive bolt. All slaughter must occur in facilities licensed by municipal or county governments, with on-site veterinary inspection required under the Animal Husbandry Act. The Ministry of Agriculture issues technical guidelines specifying parameters for electrical stunning of pigs (minimum 1.3 amperes for 3 seconds). Religious slaughter exemptions are narrowly construed and rarely granted, distinguishing Taiwan from Western jurisdictions. Unlicensed slaughter carries fines of NT$50,000 to NT$500,000 under Article 29. The 2018 enforcement campaign targeted illegal poultry slaughter at traditional markets, resulting in 142 citations. Taiwan's approach aligns with WOAH Terrestrial Animal Health Code Chapter 7.5 standards.",
    lawName: "Animal Protection Act / Livestock Slaughter Regulations",
    article: "Article 13",
    year: 1998,
    lastAmended: 2021,
    tags: ["slaughter", "stunning", "humane", "licensed"],
  },
  {
    id: "tw-007",
    country: "Taiwan",
    countryCode: "TW",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Taiwan has comprehensive and progressive penalty structures.",
    details:
      "Taiwan's Animal Protection Act establishes a tiered penalty framework under Articles 25-33. Criminal penalties for intentional killing or serious cruelty (Article 25) include one to two years imprisonment and fines of NT$100,000 to NT$2,000,000. Administrative penalties for negligence (Articles 26-30) range from NT$15,000 to NT$750,000. Article 27-1 authorizes public disclosure of offenders' names — a distinctive reputational sanction. Article 33 empowers confiscation of abused animals and prohibits offenders from keeping animals for one to five years. The 2021 amendment introduced mandatory welfare counseling for offenders. Enforcement is carried out by local animal health inspection offices under the Ministry of Agriculture. Between 2018 and 2022, over 1,200 administrative penalties and 85 criminal prosecutions were recorded. The structure exceeds Japan's (one year/JPY 1 million) and South Korea's (three years/KRW 30 million), positioning Taiwan as the strictest in East Asia.",
    lawName: "Animal Protection Act",
    article: "Articles 25-33",
    year: 1998,
    lastAmended: 2021,
    tags: ["penalties", "enforcement", "progressive", "public disclosure"],
  },

  // ==================== VIETNAM ====================
  {
    id: "vn-001",
    country: "Vietnam",
    countryCode: "VN",
    category: "Anti-Cruelty",
    topic: "Animal cruelty provisions",
    summary: "Limited anti-cruelty provisions exist in the Penal Code.",
    details:
      "Vietnam has no comprehensive animal welfare or anti-cruelty statute. Limited protections exist through the Penal Code (Law No. 100/2015/QH13, effective 2018) for wildlife crimes under Articles 234 and 244, and through the Law on Animal Husbandry (Law No. 32/2018/QH14) which includes basic livestock welfare provisions in Chapter IV. The Penal Code does not criminalize cruelty to domestic or companion animals. The Ministry of Agriculture and Rural Development (MARD) oversees animal health through the Department of Animal Health, focusing on disease control and food safety rather than welfare. Vietnam's National Assembly has discussed an Animal Welfare Law proposal since 2018, supported by organizations including Animals Asia Foundation and Four Paws International, but no draft has been formally introduced. Compared to Thailand's 2014 Cruelty Prevention Act and Malaysia's 2015 Animal Welfare Act, Vietnam represents a significant legislative gap in the ASEAN region. Cultural practices including traditional medicine using animal products and widespread dog and cat meat consumption (estimated 5 million dogs annually) complicate legislative progress.",
    lawName: "Penal Code / Law on Animal Husbandry",
    article: "Various",
    year: 2018,
    tags: ["cruelty", "limited protection", "gap"],
  },
  {
    id: "vn-002",
    country: "Vietnam",
    countryCode: "VN",
    category: "Wildlife Protection",
    topic: "Wildlife trafficking penalties",
    summary: "Wildlife trafficking carries heavy criminal penalties.",
    details:
      "Under Articles 234 and 244 of the Penal Code (Law No. 100/2015/QH13, amended by Law No. 12/2017/QH14), Vietnam imposes severe penalties for wildlife trafficking: Article 234 provides 1-15 years imprisonment for illegal trading, storing, and transporting endangered wild animals, with fines of 50 million to 2 billion dong. Article 244 specifically addresses violations of wildlife protection regulations with similar penalties. The 2017 amendment critically expanded criminal liability to include organizations (not just individuals), imposed stricter penalties for trafficking involving cross-border transport, and removed the requirement to prove commercial intent. Enforcement is led by the Environmental Police Department (C05) under the Ministry of Public Security and the Forest Protection Department under MARD. Vietnam is a signatory to CITES (since 1994) and a member of the ASEAN Wildlife Enforcement Network. Despite strong statutory penalties, Vietnam remains a major transit and consumer country for illegal wildlife products, with approximately 2,000 wildlife crime cases reported annually.",
    lawName: "Penal Code",
    article: "Articles 234, 244",
    year: 2015,
    lastAmended: 2017,
    penaltyMin: "Fine from ₫50,000,000",
    penaltyMax: "Up to 15 years imprisonment",
    tags: ["wildlife", "trafficking", "criminal"],
  },
  {
    id: "vn-003",
    country: "Vietnam",
    countryCode: "VN",
    category: "Farm Animals",
    topic: "Livestock husbandry standards",
    summary: "The Law on Animal Husbandry sets basic livestock welfare requirements.",
    details:
      "The Law on Animal Husbandry (Law No. 32/2018/QH14, effective January 1, 2020) is Vietnam's first legislation to include explicit animal welfare provisions. Chapter IV, Articles 69-73 require livestock keepers to provide adequate food, clean water, appropriate shelter, disease prevention, and humane handling during transport and slaughter. Article 70 mandates that transport of live animals must minimize stress, injury, and mortality, with specific vehicle ventilation and space requirements. The Ministry of Agriculture and Rural Development (MARD) issues implementing circulars, including Circular 04/2020/TT-BNNPTNT on livestock welfare standards. Vietnam has approximately 28 million pigs, 80 million poultry, and 8 million cattle. Enforcement through provincial Departments of Agriculture and Rural Development remains inconsistent, particularly in smallholder operations that account for approximately 60% of livestock production. The law represents progress compared to the previous Law on Animal Husbandry 2006 which contained no welfare provisions, making Vietnam one of few Southeast Asian nations with statutory farm animal welfare requirements.",
    lawName: "Law on Animal Husbandry",
    article: "Chapter IV",
    year: 2018,
    tags: ["farming", "livestock", "husbandry"],
  },
  {
    id: "vn-004",
    country: "Vietnam",
    countryCode: "VN",
    category: "Wildlife Protection",
    topic: "Bear farming regulations",
    summary: "Bear bile farming is being phased out.",
    details:
      "Under Prime Minister's Directive 29/2006/CT-TTg and subsequent regulations, Vietnam committed to phasing out bear bile farming. The Forestry Law (Law No. 16/2017/QH14, effective 2019) under Article 12 strictly prohibits commercial exploitation of bears listed as endangered species. New bear farm registrations were banned in 2005, and all remaining captive bears were required to be microchipped and registered with the Vietnam Administration of Forestry (VNFOREST) under MARD. From a peak of approximately 4,300 bears on 430 farms in 2005, the population declined to approximately 300 bears on 100 farms by 2024. The Animals Asia Foundation, operational in Vietnam since 1998, has operated the Tam Dao Bear Rescue Centre in partnership with the government, housing over 200 rescued bears. Despite legal prohibitions, bear bile extraction continues on some illegal farms, particularly in Halong Bay area. Penalties under Article 234 of the Penal Code include up to 15 years imprisonment. Vietnam's phase-out timeline has been extended multiple times, with full elimination now targeted for 2026.",
    lawName: "Government Directive / Forestry Law",
    article: "Directive 29/2006/CT-TTg",
    year: 2006,
    lastAmended: 2022,
    tags: ["bears", "bile farming", "phase-out"],
  },
  {
    id: "vn-005",
    country: "Vietnam",
    countryCode: "VN",
    category: "Companion Animals",
    topic: "Dog and cat meat trade",
    summary: "No national ban on dog/cat meat; some cities have taken action.",
    details:
      "Vietnam has no national law prohibiting the consumption, sale, or trade of dog or cat meat. An estimated 5 million dogs and 1 million cats are slaughtered annually for consumption, making Vietnam the second-largest consumer of dog meat in the world after China. In September 2018, the Hanoi People's Committee issued an official appeal urging residents to stop eating dog meat by 2021, citing public health risks including rabies and food safety concerns, though this was non-binding and largely ineffective. Hoi An city banned the dog meat trade in 2021, becoming the first Vietnamese city to do so. The trade is associated with significant animal welfare concerns including long-distance transport without food or water and methods of killing that include drowning and electrocution. Four Paws International and the Humane Society International have operated campaigns in Vietnam since 2015. The Law on Animal Husbandry (2018) does not address companion animal welfare. Proposals for a national ban have been discussed in National Assembly committees but face cultural resistance, particularly in northern provinces where consumption is more prevalent.",
    lawName: "No specific national law",
    article: "N/A",
    year: 2018,
    tags: ["dog meat", "cat meat", "campaign", "no ban"],
  },
  {
    id: "vn-006",
    country: "Vietnam",
    countryCode: "VN",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Strong penalties for wildlife crimes; weak for domestic animal abuse.",
    details:
      "Vietnam's penalty framework for animal-related crimes is bifurcated: wildlife offenses carry severe penalties under the Penal Code (Law No. 100/2015/QH13, amended 2017), with Articles 234 and 244 imposing 1-15 years imprisonment and fines of 50 million to 2 billion dong for illegal wildlife trade and exploitation. Article 244 was specifically strengthened in 2017 to address violations of regulations on the management and protection of endangered species, with maximum penalties of 15 years for offenses involving organized crime or cross-border trafficking. However, no criminal penalties exist for cruelty to domestic or companion animals, as Vietnam lacks a comprehensive animal welfare statute. Administrative penalties under the Law on Animal Husbandry (2018) for violation of livestock welfare provisions are limited to fines of 3-5 million dong under Government Decree 14/2021/ND-CP. The Environmental Police Department and VNFOREST serve as primary enforcement bodies for wildlife crimes, but are understaffed with approximately 1,200 officers nationwide covering a country of 100 million people.",
    lawName: "Penal Code",
    article: "Articles 234, 244",
    year: 2015,
    tags: ["penalties", "wildlife", "gap"],
  },

  // ==================== THAILAND ====================
  {
    id: "th-001",
    country: "Thailand",
    countryCode: "TH",
    category: "Anti-Cruelty",
    topic: "Animal cruelty prohibition",
    summary: "Comprehensive anti-cruelty law covers all vertebrate animals.",
    details:
      "The Cruelty Prevention and Welfare of Animal Act B.E. 2557 (2014), enacted by the National Legislative Assembly, is one of the most comprehensive animal welfare laws in Southeast Asia. Sections 20-22 prohibit cruelty to all vertebrate animals, defined to include torture, beating, overworking, confining in a manner causing suffering, abandoning without reasonable cause, and sexual abuse. Section 20 specifically lists prohibited acts including unnecessary mutilation and use of animals in fighting (with an exemption for traditional Thai cockfighting under Section 22). Penalties under Sections 31-32 include up to 2 years imprisonment and/or fines up to 40,000 baht. The Department of Livestock Development (DLD) under the Ministry of Agriculture and Cooperatives serves as the primary enforcement authority. Thailand was the first ASEAN nation to enact a standalone comprehensive animal welfare law, predating Malaysia's Animal Welfare Act 2015 by one year. However, enforcement remains inconsistent, particularly in rural provinces, and animal welfare organizations including Soi Dog Foundation and Wildlife Friends Foundation Thailand have reported ongoing challenges in prosecution.",
    lawName: "Cruelty Prevention and Welfare of Animal Act B.E. 2557",
    article: "Sections 20-22",
    year: 2014,
    penaltyMin: "Fine up to ฿40,000",
    penaltyMax: "Up to 2 years imprisonment or fine up to ฿40,000 or both",
    tags: ["cruelty", "comprehensive", "welfare"],
  },
  {
    id: "th-002",
    country: "Thailand",
    countryCode: "TH",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and elephant protection",
    summary: "Strong wildlife protections with special status for elephants.",
    details:
      "The Wildlife Conservation Act B.E. 2562 (2019) replaced the outdated 1992 Act and modernized Thailand's wildlife protections. The Act classifies protected species into 'reserved' (highest protection, including tigers, Asian elephants, and dugongs) and 'protected' categories under Sections 6-9. Penalties under Section 92 include up to 10 years imprisonment and/or fines up to 1 million baht for killing or trading reserved species. The Elephant Ivory Tusks Act B.E. 2558 (2015) regulates domestic ivory trade, requiring registration of all ivory and prohibiting sale without permits, with penalties of up to 3 years and 6 million baht. Thailand has approximately 3,800 domesticated elephants and 3,000-3,500 wild elephants, with human-elephant conflict management under the Department of National Parks, Wildlife and Plant Conservation (DNP). The Thai Elephant Conservation Center in Lampang operates breeding and veterinary programs. Thailand is a CITES signatory since 1983. Despite strong laws, Thailand remains a significant transit country for wildlife trafficking, particularly to China and Vietnam.",
    lawName: "Wildlife Conservation Act B.E. 2562",
    article: "Various",
    year: 2019,
    penaltyMax: "Up to 10 years imprisonment or fine up to ฿1,000,000",
    tags: ["wildlife", "elephants", "ivory", "conservation"],
  },
  {
    id: "th-003",
    country: "Thailand",
    countryCode: "TH",
    category: "Companion Animals",
    topic: "Pet animal welfare",
    summary: "Owners must provide adequate care; abandonment is prohibited.",
    details:
      "Sections 17-19 of the Cruelty Prevention and Welfare of Animal Act B.E. 2557 (2014) establish mandatory care standards for animal owners: Section 17 requires adequate food, water, shelter, and veterinary care appropriate to the species; Section 18 mandates safe and humane transportation; Section 19 prohibits abandonment, punishable by up to 40,000 baht and/or 1 year imprisonment. Thailand has an estimated 8.5 million stray dogs and 3 million stray cats, managed primarily through TNR (Trap-Neuter-Return) programs coordinated by the DLD and local administrative organizations. The Rabies Act B.E. 2535 (1992) requires dog registration and vaccination. The Soi Dog Foundation, established in Phuket in 2003, has sterilized over 800,000 animals and partnered with the Bangkok Metropolitan Administration on urban stray management. Thailand's pet ownership has grown rapidly, with approximately 9 million pet dogs and 3 million pet cats as of 2023. Despite legislative protections, enforcement gaps persist particularly regarding online pet sales and puppy mills in breeding provinces.",
    lawName: "Cruelty Prevention and Welfare of Animal Act",
    article: "Sections 17-19",
    year: 2014,
    tags: ["companion animals", "abandonment", "care standards"],
  },
  {
    id: "th-004",
    country: "Thailand",
    countryCode: "TH",
    category: "Animal Testing",
    topic: "Animal experimentation oversight",
    summary: "Ethics committees required for animal research.",
    details:
      "Under Section 24 of the Cruelty Prevention and Welfare of Animal Act B.E. 2557 (2014), all institutions conducting animal experiments must obtain approval from an Institutional Animal Care and Use Committee (IACUC). The National Research Council of Thailand (NRCT) issued the Ethical Principles and Guidelines for the Use of Animals for Scientific Purposes (2015), aligned with the CIOMS International Guiding Principles. Thailand's National Institute for Animal Health provides laboratory animal care standards. The NRCT maintains a registry of approved IACUCs across approximately 150 research institutions. Thailand uses an estimated 500,000 animals annually in research, primarily rodents and fish. The Thai Food and Drug Administration accepts alternative testing methods validated by the OECD for cosmetics safety assessments, though no formal ban on cosmetics animal testing exists. Compared to the EU's Directive 2010/63/EU, Thailand's regulatory framework relies more heavily on institutional self-governance with NRCT oversight rather than mandatory government inspection and licensing.",
    lawName: "Cruelty Prevention and Welfare of Animal Act / NRCT Guidelines",
    article: "Section 24",
    year: 2014,
    tags: ["testing", "ethics", "IACUC", "research"],
  },
  {
    id: "th-005",
    country: "Thailand",
    countryCode: "TH",
    category: "Farm Animals",
    topic: "Livestock welfare standards",
    summary: "The 2014 Act extends welfare protections to farm animals.",
    details:
      "Farm animals are covered under Sections 20-22 of the Cruelty Prevention and Welfare of Animal Act B.E. 2557 (2014), which mandates humane treatment including adequate space, feed, water, and freedom from unnecessary suffering. The Department of Livestock Development (DLD) under the Ministry of Agriculture and Cooperatives issues specific welfare standards through Ministerial Regulations and DLD Notifications. The Good Agricultural Practices (GAP) certification program, based on ASEAN GAP standards, includes animal welfare criteria for poultry, pig, and cattle farms. Thailand is the world's 4th-largest poultry exporter, producing approximately 2.5 million tonnes annually, primarily for EU and Japanese markets, which has driven adoption of welfare standards in export-oriented operations. The DLD's Notification on Broiler Chicken Welfare (2019) establishes stocking density limits of 33 kg/sq m. However, standards for domestic market production remain lower. Battery cages remain legal though the Thai Broiler Processing Exporters Association has adopted enriched colony cage standards for export markets. Gestation crates for sows are not regulated.",
    lawName: "Cruelty Prevention and Welfare of Animal Act",
    article: "Sections 20-22",
    year: 2014,
    tags: ["farming", "welfare", "livestock"],
  },
  {
    id: "th-006",
    country: "Thailand",
    countryCode: "TH",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Up to 2 years imprisonment for animal cruelty.",
    details:
      "The Cruelty Prevention and Welfare of Animal Act B.E. 2557 (2014) under Sections 31-32 provides penalties of up to 2 years imprisonment and/or fines up to 40,000 baht for animal cruelty offenses. Section 31 covers violations of the cruelty prohibitions in Sections 20-22, while Section 32 addresses failure to meet care standards under Sections 17-19. Wildlife crimes under the Wildlife Conservation Act B.E. 2562 (2019) carry substantially higher penalties: up to 10 years imprisonment and/or 1 million baht for offenses involving reserved species under Section 92, and up to 5 years and/or 500,000 baht for protected species. The Elephant Ivory Tusks Act B.E. 2558 adds penalties of up to 3 years and 6 million baht for illegal ivory trade. The Department of National Parks (DNP) maintains wildlife crime investigation units in all regions. Thailand's penalty structure for animal cruelty is considered moderate by international standards; animal welfare advocates have proposed amendments to increase maximum penalties to 5 years and 200,000 baht to strengthen deterrence.",
    lawName: "Cruelty Prevention and Welfare of Animal Act",
    article: "Sections 31-32",
    year: 2014,
    penaltyMax: "Up to 2 years imprisonment or fine up to ฿40,000",
    tags: ["penalties", "enforcement"],
  },

  // ==================== PHILIPPINES ====================
  {
    id: "ph-001",
    country: "Philippines",
    countryCode: "PH",
    category: "Anti-Cruelty",
    topic: "Animal welfare act",
    summary: "Comprehensive anti-cruelty protections with 2013 strengthening.",
    details:
      "The Animal Welfare Act of 1998 (Republic Act No. 8485), substantially amended by RA 10631 in 2013, prohibits cruelty, maltreatment, neglect, and abandonment of all animals including companion, farm, laboratory, and wild animals. Section 6 of RA 10631 increased penalties to imprisonment of 6 months to 2 years and/or fines of 30,000 to 250,000 pesos for cruelty offenses, with enhanced penalties of 1-3 years and fines up to 250,000 pesos for offenses resulting in animal death or involving animal fighting. The Bureau of Animal Industry (BAI) under the Department of Agriculture enforces the Act. The National Meat Inspection Service oversees slaughter welfare standards. The Committee on Animal Welfare (CAW), a multi-stakeholder body, advises on implementation. The 2013 amendment was driven by public campaigns following viral animal abuse videos and advocacy by the Philippine Animal Welfare Society (PAWS, founded 1954). Animal fighting, particularly cockfighting (sabong), is exempted when conducted in licensed cockpits under Presidential Decree 449 (1974), a culturally significant but controversial exemption making the Philippines unique in Southeast Asian animal welfare law.",
    lawName: "Animal Welfare Act (RA 8485 / RA 10631)",
    article: "Various",
    year: 1998,
    lastAmended: 2013,
    penaltyMin: "Fine from ₱30,000",
    penaltyMax: "Up to 3 years imprisonment or fine up to ₱250,000",
    tags: ["cruelty", "welfare", "comprehensive"],
  },
  {
    id: "ph-002",
    country: "Philippines",
    countryCode: "PH",
    category: "Companion Animals",
    topic: "Dog and cat protection",
    summary: "Dog meat trade is illegal in most areas; strong companion animal protections.",
    details:
      "Republic Act No. 8485 Section 6(d) and RA 9482 (Anti-Rabies Act of 2007) jointly prohibit the commercial dog meat trade across most of the Philippines. RA 8485 as amended prohibits the killing of dogs for trade or human consumption, with penalties of up to 3 years imprisonment and 250,000 pesos fine. The Anti-Rabies Act (RA 9482, 2007) mandates dog registration and vaccination and prohibits the trade, slaughter, and consumption of dogs, with penalties of up to 25,000 pesos and/or imprisonment. A cultural exemption exists under Section 6 for indigenous cultural communities in the Cordillera Administrative Region, where ritual dog consumption is a protected cultural practice. The Bureau of Animal Industry and the National Rabies Prevention and Control Program coordinate enforcement. Despite legal prohibition, an estimated 500,000 dogs are consumed annually, primarily in northern Luzon and parts of Visayas. The Dog Meat Free Indonesia coalition and PAWS have partnered with local government units to strengthen enforcement. The Philippines' framework is one of the most comprehensive dog meat prohibitions in Southeast Asia, predating South Korea's 2024 ban by nearly two decades.",
    lawName: "Anti-Rabies Act (RA 9482)",
    article: "Various",
    year: 2007,
    penaltyMax: "Up to ₱25,000 fine for dog meat trade",
    tags: ["dog meat", "companion animals", "trade ban"],
  },
  {
    id: "ph-003",
    country: "Philippines",
    countryCode: "PH",
    category: "Wildlife Protection",
    topic: "Wildlife resources conservation",
    summary: "Strong protections for Philippine wildlife and biodiversity.",
    details:
      "The Wildlife Resources Conservation and Protection Act (Republic Act No. 9147, enacted 2001) provides comprehensive protections for the Philippines' exceptional biodiversity as one of 17 megadiverse countries. Sections 27-28 impose penalties of 6 months to 12 years imprisonment and fines of 100,000 to 1 million pesos for illegal collection, possession, or trade of wildlife, with higher penalties for endangered species listed in CITES Appendices I and II. The Biodiversity Management Bureau (BMB) under the Department of Environment and Natural Resources (DENR) administers the Act. The Philippines hosts approximately 52,000 described species, with over 50% endemism rate including the Philippine eagle (national bird), tamaraw (Bubalus mindorensis), and Philippine crocodile. The DENR manages 240 protected areas under the National Integrated Protected Areas System (NIPAS) Act (RA 7586). The Philippines ratified CITES in 1981 and the Convention on Biological Diversity in 1993. Illegal wildlife trade, particularly involving parrots, reptiles, and marine turtles, remains a significant challenge despite the Wildlife Law Enforcement Action Plan.",
    lawName: "Wildlife Resources Conservation and Protection Act (RA 9147)",
    article: "Various",
    year: 2001,
    penaltyMax: "Up to 12 years imprisonment and fine up to ₱1,000,000",
    tags: ["wildlife", "biodiversity", "endemic", "conservation"],
  },
  {
    id: "ph-004",
    country: "Philippines",
    countryCode: "PH",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Penalties strengthened significantly by the 2013 amendment.",
    details:
      "Republic Act No. 10631 (2013) restructured the penalty framework for animal welfare offenses: Section 6 prescribes 6 months to 2 years imprisonment and/or fines of 30,000 to 250,000 pesos for cruelty, with enhanced penalties of 1-3 years for offenses causing death or involving animal fighting. Wildlife crimes under RA 9147 carry heavier penalties of up to 12 years imprisonment and 1 million pesos fine for offenses involving critically endangered species. The Anti-Rabies Act (RA 9482) adds penalties of up to 25,000 pesos for illegal dog meat trade. The Bureau of Animal Industry (BAI) and DENR are the primary enforcement agencies. The Philippine National Police has issued Memorandum Circular 2013-025 directing all police units to enforce animal welfare laws. However, conviction rates remain low, with PAWS reporting fewer than 100 successful prosecutions annually nationwide. In the 2019 case of People v. Acosta, a Quezon City court imposed the maximum 3-year sentence for animal cruelty, one of the first cases to apply the full penalties of RA 10631, serving as an important deterrent precedent.",
    lawName: "Animal Welfare Act (RA 10631)",
    article: "Section 6",
    year: 2013,
    penaltyMax: "Up to 3 years imprisonment or fine up to ₱250,000",
    tags: ["penalties", "enforcement", "amendment"],
  },

  // ==================== INDONESIA ====================
  {
    id: "id-001",
    country: "Indonesia",
    countryCode: "ID",
    category: "Anti-Cruelty",
    topic: "Animal welfare provisions",
    summary: "Animal husbandry law includes welfare obligations.",
    details:
      "Law No. 18 of 2009 on Animal Husbandry and Health (amended by Law No. 41 of 2014) contains Indonesia's primary animal welfare provisions. Articles 66-67 mandate proper care, handling, and transportation of animals, requiring owners to provide adequate feed, shelter, veterinary care, and freedom from mistreatment. Article 66(2)(c) specifically prohibits actions causing pain or suffering to animals. Penalties under Article 91 include up to 2 years imprisonment and/or fines up to 500 million rupiah (approximately US$32,000). Enforcement falls under the Directorate General of Livestock and Animal Health within the Ministry of Agriculture. However, with approximately 270 million people across 17,000 islands, enforcement is severely inconsistent, particularly in rural and remote areas. Indonesia has no standalone animal welfare statute, placing it behind ASEAN peers Thailand and Malaysia. The Jakarta Animal Aid Network (JAAN) and Bali Animal Welfare Association (BAWA) have documented widespread enforcement gaps. A dedicated draft Animal Welfare Bill has been discussed in the DPR (People's Representative Council) since 2017 but has not progressed to formal reading.",
    lawName: "Law No. 18/2009 on Animal Husbandry and Health",
    article: "Articles 66-67",
    year: 2009,
    lastAmended: 2014,
    penaltyMax: "Up to 2 years imprisonment or fine up to IDR 500,000,000",
    tags: ["cruelty", "welfare", "husbandry"],
  },
  {
    id: "id-002",
    country: "Indonesia",
    countryCode: "ID",
    category: "Wildlife Protection",
    topic: "Conservation of natural resources",
    summary: "Strong legal protections for Indonesia's unique biodiversity.",
    details:
      "The Conservation of Natural Resources and Ecosystems Act (Law No. 5 of 1990, amended by Government Regulation in Lieu of Law No. 1/2004) protects Indonesia's extraordinary biodiversity across the world's largest archipelago. Articles 21-22 prohibit killing, capturing, keeping, possessing, or trading protected species without permits. Penalties under Articles 40-42 include up to 5 years imprisonment and fines up to 100 million rupiah. Protected species include Sumatran orangutans (estimated 13,000 remaining), Sumatran tigers (fewer than 400), Komodo dragons (approximately 3,000), Javan rhinos (fewer than 80), and Sumatran elephants. The Ministry of Environment and Forestry (KLHK) administers the Act through the Directorate General of Conservation of Natural Resources and Ecosystems (KSDAE). Indonesia manages 554 conservation areas covering approximately 27 million hectares. Indonesia ratified CITES in 1978 and the Convention on Biological Diversity in 1994. Despite strong statutory penalties, deforestation for palm oil plantations, illegal logging, and wildlife trafficking remain critical threats, with Transparency International ranking wildlife crime as Indonesia's third-largest illegal economy.",
    lawName: "Conservation of Natural Resources and Ecosystems Act (Law 5/1990)",
    article: "Various",
    year: 1990,
    lastAmended: 2018,
    penaltyMax: "Up to 5 years imprisonment and fine up to IDR 100,000,000",
    tags: ["wildlife", "biodiversity", "orangutan", "conservation"],
  },
  {
    id: "id-003",
    country: "Indonesia",
    countryCode: "ID",
    category: "Companion Animals",
    topic: "Dog meat trade",
    summary: "No national ban on dog meat; local efforts to restrict the trade.",
    details:
      "Indonesia has no national legislation banning dog or cat meat consumption, which occurs primarily in North Sulawesi (Minahasa), North Sumatra (Batak regions), parts of Java, and Bali. An estimated 1 million dogs are slaughtered annually for meat. The Dog Meat Free Indonesia coalition, comprising JAAN, Change for Animals Foundation, Humane Society International, and Four Paws, has documented extreme cruelty during transport and slaughter. In 2018, the government issued a joint letter from the Director General of Livestock and Animal Health urging local authorities to restrict the trade on food safety grounds, citing rabies transmission risks. Several local actions followed: Karangasem regency (Bali) issued a ban in 2019, and Surakarta (Solo) restricted the trade in live animal markets. However, these remain voluntary and unenforceable at national level. The Law on Animal Husbandry and Health (2009) Article 66 could theoretically apply to cruel slaughter methods but has never been prosecuted in this context. Indonesia's Constitutional Court has not addressed the issue, unlike South Korea's precedent-setting cases.",
    lawName: "No specific national law",
    article: "N/A",
    year: 0,
    tags: ["dog meat", "no ban", "local action"],
  },
  {
    id: "id-004",
    country: "Indonesia",
    countryCode: "ID",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Moderate penalties with enforcement challenges.",
    details:
      "Indonesia's penalty framework for animal-related crimes operates under two primary statutes: the Law on Animal Husbandry and Health (Law No. 18/2009) prescribes up to 2 years imprisonment and/or fines up to 500 million rupiah for cruelty and welfare violations under Article 91, while the Conservation of Natural Resources Act (Law No. 5/1990) imposes up to 5 years imprisonment and fines up to 100 million rupiah for wildlife crimes under Articles 40-42. The Criminal Code (KUHP) Article 302, a colonial-era provision, prohibits intentional cruelty to animals with penalties of up to 9 months imprisonment or fines, though it is rarely invoked. Enforcement across Indonesia's 17,000 islands presents exceptional logistical challenges. The Directorate General of Law Enforcement under the Ministry of Environment and Forestry (Gakkum KLHK) oversees wildlife crime investigations with approximately 8,000 forest rangers nationwide. In 2019, the Palangkaraya District Court sentenced orangutan killers to 1 year imprisonment, considered a landmark prosecution. The ASEAN Wildlife Enforcement Network and INTERPOL's Project Thunderball assist Indonesian authorities in combating cross-border trafficking.",
    lawName: "Law No. 18/2009 / Law 5/1990",
    article: "Various",
    year: 2009,
    penaltyMax: "Up to 5 years imprisonment for wildlife crimes",
    tags: ["penalties", "enforcement challenges"],
  },

  // ==================== MALAYSIA ====================
  {
    id: "my-001",
    country: "Malaysia",
    countryCode: "MY",
    category: "Anti-Cruelty",
    topic: "Animal welfare act",
    summary: "Comprehensive animal welfare law enacted in 2015.",
    details:
      "Malaysia's Animal Welfare Act 2015 (Act 772), which came into force on July 1, 2017, replaced the colonial-era Prevention of Cruelty to Animals Act 1953 (Act 266). Part IV establishes comprehensive cruelty offenses: Section 29 prohibits causing unnecessary suffering to any animal, Section 30 addresses animal fighting, and Section 31 prohibits poisoning animals. Penalties under Section 29 include up to 3 years imprisonment and/or fines of 20,000 to 100,000 ringgit. The Department of Veterinary Services (DVS) under the Ministry of Agriculture and Food Security is the primary enforcement body, supported by the Royal Malaysia Police. The Act introduced mandatory licensing for animal welfare organizations (Section 34), pet shops, and boarding facilities. Malaysia's Act is considered one of the most comprehensive in ASEAN, covering companion animals, farm animals, laboratory animals, and performing animals. The Malaysian Animal Welfare Association (MAWA) and SPCA Selangor were instrumental in advocating for the legislation. However, enforcement gaps persist, particularly regarding stray animal management and illegal puppy mills in Peninsular Malaysia.",
    lawName: "Animal Welfare Act 2015 (Act 772)",
    article: "Part IV",
    year: 2015,
    penaltyMin: "Fine from RM20,000",
    penaltyMax: "Up to 3 years imprisonment and/or fine up to RM100,000",
    tags: ["cruelty", "welfare", "comprehensive", "modern"],
  },
  {
    id: "my-002",
    country: "Malaysia",
    countryCode: "MY",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary: "Strong wildlife protections for Peninsular Malaysia; Sabah and Sarawak have separate laws.",
    details:
      "The Wildlife Conservation Act 2010 (Act 716) provides comprehensive wildlife protections for Peninsular Malaysia, with separate legislation in Sabah (Wildlife Conservation Enactment 1997) and Sarawak (Wild Life Protection Ordinance 1998) due to Malaysia's federal structure. Act 716, Section 68 imposes penalties of up to 5 years imprisonment and/or fines up to 500,000 ringgit for hunting, keeping, or trading totally protected species, which include the Malayan tiger (fewer than 150 in the wild), Bornean orangutan, Malayan tapir, and all eight hornbill species found in Malaysia. The Department of Wildlife and National Parks (PERHILITAN) enforces the Act in Peninsular Malaysia. The National Tiger Conservation Task Force was established following the alarming decline from approximately 3,000 tigers in the 1950s to fewer than 150 today. The Sabah Wildlife Department manages the Sepilok Orangutan Rehabilitation Centre and Bornean Sun Bear Conservation Centre. Malaysia ratified CITES in 1977. TRAFFIC Southeast Asia has identified Malaysia as a significant wildlife trafficking hub, particularly for pangolins, turtles, and exotic birds.",
    lawName: "Wildlife Conservation Act 2010 (Act 716)",
    article: "Various",
    year: 2010,
    penaltyMax: "Up to 5 years imprisonment and fine up to RM500,000",
    tags: ["wildlife", "orangutan", "tiger", "conservation"],
  },
  {
    id: "my-003",
    country: "Malaysia",
    countryCode: "MY",
    category: "Farm Animals",
    topic: "Halal slaughter and welfare",
    summary: "Animal welfare standards integrate with halal requirements.",
    details:
      "The Animal Welfare Act 2015 (Act 772) extends protections to farm animals under Part IV, requiring humane treatment throughout the production cycle including housing, transport, and slaughter. Malaysia Standard MS1500:2019 (revised from MS1500:2009) establishes halal food requirements including specific animal welfare provisions for pre-slaughter handling: animals must be healthy, rested, and provided water; stunning is permitted if it does not kill the animal before halal slaughter (reversible stunning). The Department of Veterinary Services (DVS) and the Department of Islamic Development Malaysia (JAKIM) jointly oversee compliance. Malaysia produces approximately 1.6 million tonnes of poultry meat and 280,000 tonnes of eggs annually. The DVS's Malaysian Good Animal Husbandry Practices (myGAP) certification program includes welfare criteria for livestock farms. Malaysia's integration of halal requirements with animal welfare standards has made it a model for other Muslim-majority countries. The Malaysia Halal Council and International Halal Integrity Alliance promote Malaysian halal standards internationally, and MS1500 is recognized by over 80 countries.",
    lawName: "Animal Welfare Act 2015 / MS1500:2009",
    article: "Various",
    year: 2015,
    tags: ["farming", "halal", "slaughter", "welfare"],
  },
  {
    id: "my-004",
    country: "Malaysia",
    countryCode: "MY",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Up to 3 years imprisonment and RM100,000 fine under the 2015 Act.",
    details:
      "The Animal Welfare Act 2015 (Act 772) dramatically increased penalties from the colonial-era Prevention of Cruelty to Animals Act 1953, which provided maximum fines of only RM200. Under Act 772, Section 29 prescribes penalties of up to 3 years imprisonment and/or fines of 20,000 to 100,000 ringgit for animal cruelty. Section 30 imposes up to 3 years and/or 50,000 to 100,000 ringgit for animal fighting. Section 44 provides up to 100,000 ringgit for operating unlicensed animal welfare activities. The Wildlife Conservation Act 2010 carries higher penalties of up to 5 years and/or 500,000 ringgit for wildlife offenses. The DVS has reported increasing prosecutions since the Act's enforcement began in 2017, with over 200 cases investigated annually. In the 2019 case of PP v. Vellasamy, the Petaling Jaya Sessions Court sentenced a dog abuser to 2 years imprisonment and an 80,000 ringgit fine, one of the first cases to impose near-maximum penalties, demonstrating judicial willingness to impose deterrent sentences. The Malaysian Society for Animal Welfare has called for further increases to match Singapore's penalty levels.",
    lawName: "Animal Welfare Act 2015",
    article: "Part VII",
    year: 2015,
    penaltyMax: "Up to 3 years imprisonment and/or fine up to RM100,000",
    tags: ["penalties", "enforcement"],
  },

  // ==================== SINGAPORE ====================
  {
    id: "sg-001",
    country: "Singapore",
    countryCode: "SG",
    category: "Anti-Cruelty",
    topic: "Animal cruelty prohibition",
    summary: "One of Asia's strictest animal cruelty laws with high penalties.",
    details:
      "The Animals and Birds Act (Chapter 7, originally enacted 1965, significantly amended by Act No. 46 of 2014) is one of Asia's strictest animal cruelty laws. Section 42(1) prohibits cruelty to any animal including unnecessary suffering, beating, kicking, mutilation, and overloading. The 2014 amendment increased first-offense penalties to fines up to S$15,000 and/or imprisonment up to 18 months; repeat offenders face fines up to S$30,000 and/or 3 years imprisonment. The National Parks Board (NParks) and its Animal and Veterinary Service (AVS), established in 2019 to replace the Agri-Food & Veterinary Authority, enforce the Act with dedicated investigation officers. Singapore's courts have demonstrated strong enforcement: in Public Prosecutor v. Lee Sze Yong (2020), the offender received the maximum 18-month sentence for torturing cats, setting a benchmark for sentencing. Singapore is one of the few Asian jurisdictions where animal cruelty cases regularly result in custodial sentences. The 2020 Animals and Birds (Amendment) Act introduced mandatory minimum penalties and community service orders for animal cruelty, further strengthening the deterrent framework.",
    lawName: "Animals and Birds Act (Chapter 7)",
    article: "Section 42",
    year: 1965,
    lastAmended: 2014,
    penaltyMin: "Fine up to S$15,000",
    penaltyMax: "Up to 18 months imprisonment and fine up to S$15,000 (first offense); up to 3 years and S$30,000 (repeat)",
    tags: ["cruelty", "strict", "high penalties"],
  },
  {
    id: "sg-002",
    country: "Singapore",
    countryCode: "SG",
    category: "Companion Animals",
    topic: "Responsible pet ownership",
    summary: "Strict licensing and ownership requirements for pets.",
    details:
      "Under the Animals and Birds (Dog Licensing and Control) Rules, all dogs in Singapore must be licensed with NParks' Animal and Veterinary Service (AVS) and microchipped within the first 3 months of age. The Housing and Development Board (HDB), which manages public housing occupied by approximately 80% of the population, restricts dog ownership to approved breeds under 15kg and limits households to one dog under the HDB Pet Policy (2014). Approximately 60 dog breeds are approved for HDB flats. Licensing fees range from S$15 for sterilized dogs to S$180 for non-sterilized dogs annually. Singapore banned certain breeds classified as dangerous including Pit Bull Terriers and Akitas under the Animals and Birds (Dangerous Dogs) Rules. The Responsible Pet Ownership Programme, run by AVS in partnership with the SPCA (Singapore), promotes education and adoption. Cat ownership in HDB flats was legalized on September 1, 2024, after decades of prohibition, with mandatory microchipping and a limit of 2 cats per household. Singapore's comprehensive regulatory framework for pet ownership is among the most detailed in Asia.",
    lawName: "Animals and Birds Act / Animals and Birds (Dog Licensing) Rules",
    article: "Various",
    year: 1965,
    lastAmended: 2020,
    tags: ["licensing", "pets", "microchip", "breed restrictions"],
  },
  {
    id: "sg-003",
    country: "Singapore",
    countryCode: "SG",
    category: "Wildlife Protection",
    topic: "Wildlife trade control",
    summary: "Strict enforcement of CITES and wildlife trade regulations.",
    details:
      "The Endangered Species (Import and Export) Act (ESIA, Chapter 92A, enacted 2006, amended 2020) implements CITES obligations in Singapore with strict penalties. Section 4 prohibits import, export, and re-export of CITES-listed species without permits issued by NParks' AVS. Penalties under Section 4 include fines up to S$500,000 per specimen and/or imprisonment up to 2 years. The 2020 amendment introduced enhanced penalties for repeat offenders and commercial-scale trafficking. Singapore's strategic position as a global logistics hub and transshipment port makes it a critical node in combating illegal wildlife trade. The Inter-Agency Task Force on Illegal Wildlife Trade, established in 2016, coordinates enforcement between the AVS, Singapore Customs, Immigration & Checkpoints Authority (ICA), and Singapore Police Force. In 2019, Singapore seized 38.8 tonnes of pangolin scales (from approximately 70,000 pangolins) worth S$52 million, the world's largest pangolin seizure. Singapore has also seized significant ivory shipments and hosted the CITES Conference of Parties. The ESIA framework is considered among the most effective in the Asia-Pacific region.",
    lawName: "Endangered Species (Import and Export) Act",
    article: "Various",
    year: 2006,
    lastAmended: 2020,
    penaltyMax: "Up to S$500,000 fine and/or 2 years imprisonment",
    tags: ["wildlife trade", "CITES", "trafficking", "enforcement"],
  },
  {
    id: "sg-004",
    country: "Singapore",
    countryCode: "SG",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "High penalties with strong enforcement track record.",
    details:
      "Singapore's penalty framework reflects its reputation for strict enforcement across all animal-related legislation. The Animals and Birds Act provides graduated penalties: first-offense cruelty carries fines up to S$15,000 and/or 18 months imprisonment, while repeat offenses carry up to S$30,000 and/or 3 years. The 2020 amendment introduced mandatory minimum penalties and empowered courts to impose Community Service Orders and prohibition orders preventing offenders from owning animals for up to 12 months. The Endangered Species (Import and Export) Act imposes fines up to S$500,000 per specimen and/or 2 years for wildlife trade violations. The Wild Animals and Birds Act adds penalties for feeding wildlife and disturbing habitats. Singapore's courts actively enforce these provisions: NParks AVS investigated approximately 600 animal-related cases annually as of 2023, with a high prosecution rate. The Inter-Agency Forensics Division provides DNA analysis capabilities for wildlife crime prosecution. Singapore's penalty levels and enforcement consistency are frequently cited as best practice in the Asia-Pacific region by TRAFFIC and the CITES Secretariat.",
    lawName: "Animals and Birds Act / Endangered Species Act",
    article: "Various",
    year: 2014,
    penaltyMax: "Up to S$500,000 for wildlife trade violations",
    tags: ["penalties", "strict enforcement", "deterrence"],
  },

  // ==================== MYANMAR ====================
  {
    id: "mm-001",
    country: "Myanmar",
    countryCode: "MM",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty (colonial-era law)",
    summary: "Colonial-era anti-cruelty law remains in effect with limited updates.",
    details:
      "The Prevention of Cruelty to Animals Act (1878, inherited from British India) remains the primary anti-cruelty legislation in Myanmar. Sections 3-5 prohibit overloading, beating, torturing, and causing unnecessary suffering to domestic animals including cattle, horses, dogs, and cats. Section 3 specifically criminalizes overdriving, overloading, cruelly beating, and torturing animals. The maximum penalty under Section 6 is a fine of 500 Kyats (less than US$0.25) and/or up to 3 months imprisonment for a first offense, and up to 6 months for subsequent offenses. These penalties have never been updated for inflation, rendering them largely ineffective as deterrents.",
    lawName: "Prevention of Cruelty to Animals Act",
    article: "Various",
    year: 1878,
    penaltyMax: "Fine up to 500 Kyats (extremely low)",
    tags: ["colonial era", "outdated", "low penalties"],
  },
  {
    id: "mm-002",
    country: "Myanmar",
    countryCode: "MM",
    category: "Wildlife Protection",
    topic: "Biodiversity conservation",
    summary: "Conservation law updated in 2018 with stronger protections.",
    details:
      "The Conservation of Biodiversity and Protected Areas Law (Pyidaungsu Hluttaw Law No. 12/2018) replaced the Protection of Wildlife and Protected Areas and Conservation of Natural Areas Law of 1994. It establishes three categories of protected species: completely protected, normally protected, and seasonally protected under Sections 16-20. Penalties under Section 40 include up to 10 years imprisonment and fines up to 10 million Kyats for killing or trading completely protected species such as tigers, Asian elephants, Irrawaddy dolphins, and Burmese star tortoises. Myanmar has 43 protected areas covering approximately 5.75% of its territory.",
    lawName: "Conservation of Biodiversity and Protected Areas Law (No. 12/2018)",
    article: "Sections 16-20, 40",
    year: 2018,
    penaltyMin: "Fine up to 5 million Kyats for normally protected species",
    penaltyMax: "Up to 10 years imprisonment and fine up to 10 million Kyats for completely protected species",
    tags: ["wildlife", "biodiversity", "conservation", "updated"],
  },
  {
    id: "mm-003",
    country: "Myanmar",
    countryCode: "MM",
    category: "Wildlife Protection",
    topic: "CITES implementation and wildlife trade regulation",
    summary: "Myanmar is a CITES signatory with export/import controls on endangered species.",
    details:
      "Myanmar acceded to CITES in 1997, and the Export and Import Law (2012) provides the legal framework for regulating international wildlife trade. Section 15 of the Conservation of Biodiversity Law requires permits for any trade in protected species. Myanmar is a critical country for combating illegal wildlife trafficking, sitting at the junction of major trade routes between China, Thailand, and India. The Mong La and Tachilek border markets have historically been identified as major illegal wildlife trade hubs. The Forest Department serves as the CITES Management Authority. Myanmar is a member of the ASEAN Wildlife Enforcement Network (WEN) established in 2005 to coordinate cross-border anti-trafficking efforts.",
    lawName: "Export and Import Law / Conservation of Biodiversity Law",
    article: "Section 15",
    year: 2012,
    tags: ["CITES", "wildlife trade", "trafficking", "ASEAN"],
  },

  // ==================== CAMBODIA ====================
  {
    id: "kh-001",
    country: "Cambodia",
    countryCode: "KH",
    category: "Wildlife Protection",
    topic: "Forestry law and wildlife",
    summary: "Wildlife protected under forestry and environmental legislation.",
    details:
      "The Forestry Law (2002) Articles 49-55 prohibit hunting, capturing, and transporting endangered wildlife without authorization from the Ministry of Agriculture, Forestry and Fisheries. The Law on Natural Protected Areas (2008) establishes four categories of protected zones: national parks, wildlife sanctuaries, protected landscapes, and multiple-use areas. Cambodia's 2016 Criminal Code under Article 449 penalizes destruction of classified forests and wildlife with up to 5 years imprisonment and fines up to 100 million Riels. Key protected species include the Irrawaddy dolphin (Mekong population of approximately 90 individuals), Siamese crocodile, and giant ibis (Cambodia's national bird). The Ministry of Environment manages 47 protected areas covering 41% of Cambodia's territory.",
    lawName: "Forestry Law / Law on Natural Protected Areas",
    article: "Various",
    year: 2002,
    lastAmended: 2008,
    tags: ["wildlife", "forestry", "conservation"],
  },
  {
    id: "kh-002",
    country: "Cambodia",
    countryCode: "KH",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare or anti-cruelty legislation.",
    details:
      "Cambodia has no specific animal welfare or anti-cruelty law. Animal welfare organizations including the Cambodia Animal Welfare Alliance and Animal Rescue Cambodia have been advocating for legislation since 2015. The dog and cat meat trade remains legally unregulated, with an estimated 3 million dogs consumed annually. In 2020, Siem Reap province became the first to voluntarily ban the dog meat trade. The Criminal Code (2009) does not contain animal cruelty provisions. Some protection is offered indirectly through property law when animals are owned. The Ministry of Agriculture has veterinary regulations addressing livestock disease, but these do not address welfare standards or humane treatment.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "no legislation", "advocacy"],
  },
  {
    id: "kh-003",
    country: "Cambodia",
    countryCode: "KH",
    category: "Wildlife Protection",
    topic: "Wildlife trafficking enforcement and Penal Code",
    summary: "Criminal Code provisions address wildlife crimes with significant penalties.",
    details:
      "Cambodia's Criminal Code (2009) includes environmental crime provisions under Articles 401-410 that can be applied to wildlife offenses. Article 449 imposes penalties of 1-5 years imprisonment and fines of 2-100 million Riels for unauthorized destruction of classified forests and wildlife. Cambodia is a signatory to CITES (acceded 1997) and the ASEAN Wildlife Enforcement Network. The Wildlife Rapid Rescue Team (WRRT), established in 2001 as a partnership between the Forestry Administration and Wildlife Alliance, has rescued over 80,000 animals and made thousands of arrests. A 2016 Sub-Decree on Wildlife Trade Management strengthened permit requirements for captive breeding and trade in CITES-listed species.",
    lawName: "Criminal Code / Sub-Decree on Wildlife Trade Management",
    article: "Articles 401-410, 449",
    year: 2009,
    penaltyMin: "Fine from 2 million Riels",
    penaltyMax: "Up to 5 years imprisonment and fine up to 100 million Riels",
    tags: ["criminal code", "wildlife trafficking", "WRRT", "CITES"],
  },

  // ==================== LAOS ====================
  {
    id: "la-001",
    country: "Laos",
    countryCode: "LA",
    category: "Wildlife Protection",
    topic: "Wildlife and aquatic resources",
    summary: "Wildlife protected under dedicated law; enforcement challenges persist.",
    details:
      "The Wildlife and Aquatic Law (No. 07/NA, 2007, amended 2019) establishes three categories of protected species under Articles 11-13: Prohibition Category I (critically endangered, including saola, kouprey, and Siamese crocodile), Management Category II (threatened species requiring permits), and General Category III (common species). Articles 38-40 impose penalties of 5-10 years imprisonment and fines of 50-500 million Kip for poaching or trading Prohibition Category I species. Laos is a member of CITES (acceded 2004) and the ASEAN Wildlife Enforcement Network. However, enforcement remains severely challenged, and Laos has been identified as a major transit country for illegal wildlife trade between Vietnam, China, and Thailand.",
    lawName: "Wildlife and Aquatic Law",
    article: "Various",
    year: 2007,
    tags: ["wildlife", "aquatic", "conservation", "Mekong"],
  },
  {
    id: "la-002",
    country: "Laos",
    countryCode: "LA",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated domestic animal welfare legislation.",
    details:
      "Laos has no specific animal welfare legislation for domestic or companion animals. Animal welfare is primarily addressed through traditional Buddhist cultural practices and the Law on Livestock Production and Veterinary Matters (No. 03/NA, 2008), which focuses on livestock disease prevention, vaccination, and meat inspection rather than animal welfare. The Penal Law (2005) does not contain animal cruelty provisions. Working elephants, historically important in the logging industry, receive some protection through the Lao Elephant Conservation Center in Sayaboury Province, but no specific legal protections for elephant welfare exist. International NGOs including the Wildlife Conservation Society operate welfare-related programs.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "no legislation"],
  },
  {
    id: "la-003",
    country: "Laos",
    countryCode: "LA",
    category: "Wildlife Protection",
    topic: "Penal Law wildlife crime provisions",
    summary: "Penal Law includes environmental and wildlife crime provisions.",
    details:
      "The Penal Law of Laos (No. 12/NA, 2005, revised 2017) includes provisions on environmental crimes under Articles 177-180 that address illegal exploitation of natural resources including wildlife. Article 178 penalizes illegal logging and destruction of natural resources with 3-7 years imprisonment and fines. The Forestry Law (No. 06/NA, 2007) under Articles 89-97 further regulates wildlife in forest areas and prohibits hunting in conservation forests and protection forests. Laos has 24 National Biodiversity Conservation Areas covering approximately 14% of its territory, established under the Prime Minister's Decree 164 (1993). The Department of Forestry under the Ministry of Agriculture and Forestry serves as the primary enforcement agency.",
    lawName: "Penal Law / Forestry Law",
    article: "Articles 177-180 (Penal Law), Articles 89-97 (Forestry Law)",
    year: 2005,
    lastAmended: 2017,
    penaltyMin: "Fine and 1-3 years imprisonment for minor offenses",
    penaltyMax: "3-7 years imprisonment for serious natural resource crimes",
    tags: ["penal law", "forestry", "conservation areas", "enforcement"],
  },

  // ==================== BRUNEI ====================
  {
    id: "bn-001",
    country: "Brunei",
    countryCode: "BN",
    category: "Anti-Cruelty",
    topic: "Animals Act protections",
    summary: "Colonial-era Animals Act provides basic cruelty protections.",
    details:
      "Brunei's Animals Act (Chapter 16, Laws of Brunei) provides basic protections against cruelty to domestic animals. Section 3 prohibits overdriving, overloading, cruelly beating, ill-treating, torturing, or causing unnecessary suffering to any domestic or captive animal. Section 4 specifically addresses cruelty to animals during transport. Section 8 empowers police officers and authorized persons to enter premises where cruelty is suspected. Penalties under Section 3 include fines up to B$1,000 and/or imprisonment up to 3 months for a first offense, increasing to B$2,000 and/or 6 months for subsequent offenses. The law has not been substantially modernized and does not address contemporary welfare standards.",
    lawName: "Animals Act (Chapter 16)",
    article: "Various",
    year: 1962,
    tags: ["colonial era", "basic protections"],
  },
  {
    id: "bn-002",
    country: "Brunei",
    countryCode: "BN",
    category: "Wildlife Protection",
    topic: "Wildlife protection order",
    summary: "Wildlife protected under the Wild Fauna and Flora Order.",
    details:
      "The Wild Fauna and Flora Order (S 60/2007) implements CITES in Brunei (a party since 1990) and provides comprehensive protections for Brunei's rich biodiversity. Section 4 prohibits import, export, re-export, or possession of CITES-listed species without permits from the Director of Museums. Penalties under Section 15 include fines up to B$50,000 and/or imprisonment up to 2 years. Brunei has maintained over 70% primary forest cover, protecting habitats for proboscis monkeys (endemic to Borneo), sun bears, clouded leopards, and over 620 bird species. The Ulu Temburong National Park (550 sq km) serves as the principal wildlife refuge. The Brunei Heart of Borneo initiative protects 58% of Brunei's total land area as forest reserves.",
    lawName: "Wild Fauna and Flora Order 2007 (S 60/2007)",
    article: "Sections 4, 15",
    year: 2007,
    penaltyMax: "Fine up to B$50,000 and/or up to 2 years imprisonment",
    tags: ["wildlife", "rainforest", "biodiversity", "CITES"],
  },
  {
    id: "bn-003",
    country: "Brunei",
    countryCode: "BN",
    category: "Companion Animals",
    topic: "Dog control and stray animal management",
    summary: "Dogs Order regulates dog ownership and controls stray populations.",
    details:
      "The Dogs Order (Chapter 19, Laws of Brunei) requires all dogs to be licensed and registered with the authorities. Section 6 mandates that dog owners prevent their dogs from being at large, and Section 10 authorizes the impounding and destruction of stray dogs. The Halal Meat Act (Chapter 183) regulates slaughter of animals for food according to Islamic requirements, mandating that slaughter be performed by licensed Muslim slaughtermen following halal procedures. Brunei's Syariah Penal Code Order (2013) does not directly address animal welfare but Islamic principles of animal care (rifq) are culturally influential. Pet ownership is regulated through municipal bylaws requiring proper containment and care.",
    lawName: "Dogs Order (Chapter 19) / Halal Meat Act (Chapter 183)",
    article: "Sections 6, 10 (Dogs Order)",
    year: 1962,
    tags: ["dogs", "stray management", "halal", "Islamic principles"],
  },

  // ==================== TIMOR-LESTE ====================
  {
    id: "tl-001",
    country: "Timor-Leste",
    countryCode: "TL",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare legislation in the young nation.",
    details:
      "As one of the world's youngest nations (independent in 2002), Timor-Leste has not yet enacted dedicated animal welfare legislation. The Penal Code (Decree-Law 19/2009) does not contain specific animal cruelty provisions, though destruction of another person's livestock could be prosecuted as property damage under Articles 257-258. The Ministry of Agriculture and Fisheries oversees veterinary matters under Decree-Law 5/2004 establishing the National Directorate of Livestock and Veterinary Services, which focuses on disease control, livestock vaccination campaigns, and food safety rather than animal welfare. Traditional Timorese culture includes ritual animal sacrifice (particularly of buffalo and roosters) in ceremonies, which has no legal restrictions.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "developing", "young nation"],
  },
  {
    id: "tl-002",
    country: "Timor-Leste",
    countryCode: "TL",
    category: "Wildlife Protection",
    topic: "Biodiversity and protected area legislation",
    summary: "Biodiversity Decree-Law establishes framework for wildlife and habitat protection.",
    details:
      "Decree-Law 5/2016 on Biodiversity establishes the legal framework for protecting Timor-Leste's wildlife and natural habitats. It defines categories of protected areas including strict nature reserves, national parks, and wildlife management areas. Timor-Leste's Nino Konis Santana National Park (established 2007 under Decree-Law 5/2007), the country's first national park, covers 1,236 sq km of terrestrial and marine area and protects habitats for Timor-Leste's endemic bird species including the critically endangered Timor sparrow. The country is home to over 250 bird species. CITES accession has been under discussion but Timor-Leste has not yet become a party. The Coral Triangle Initiative involvement provides some marine species protections.",
    lawName: "Decree-Law 5/2016 on Biodiversity",
    article: "Various",
    year: 2016,
    tags: ["biodiversity", "national park", "endemic species", "marine"],
  },
  {
    id: "tl-003",
    country: "Timor-Leste",
    countryCode: "TL",
    category: "Farm Animals",
    topic: "Livestock management and veterinary services",
    summary: "Veterinary and livestock regulations address animal health but not welfare.",
    details:
      "Decree-Law 5/2004 established the National Directorate of Livestock and Veterinary Services under the Ministry of Agriculture and Fisheries, responsible for animal health, disease control, and meat inspection. Government Regulation 2/2010 sets quarantine and sanitary requirements for import and export of live animals and animal products. Timor-Leste has approximately 200,000 cattle, 350,000 pigs, and 1 million poultry, primarily raised by smallholder farmers. The FAO and international partners support vaccination programs for Newcastle disease in poultry and classical swine fever. No humane slaughter requirements exist; traditional slaughter methods are practiced without regulation. Cockfighting remains culturally prevalent and is not prohibited by law.",
    lawName: "Decree-Law 5/2004 / Government Regulation 2/2010",
    article: "Various",
    year: 2004,
    tags: ["livestock", "veterinary", "smallholder farming", "disease control"],
  },

  // ==================== INDIA ====================
  {
    id: "in-001",
    country: "India",
    countryCode: "IN",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary: "Comprehensive anti-cruelty law with constitutional backing since 1960.",
    details:
      "The Prevention of Cruelty to Animals Act (PCA Act, Act No. 59 of 1960) under Section 11(1) prohibits cruelty to all animals including beating, kicking, overloading, torture, and causing unnecessary suffering. India's Constitution, Article 51A(g), makes it a fundamental duty of every citizen to protect wildlife and have compassion for living creatures. The Animal Welfare Board of India (AWBI), established under Section 4 of the PCA Act and operating under the Ministry of Fisheries, Animal Husbandry and Dairying, oversees enforcement. In the landmark case of Animal Welfare Board of India v. A. Nagaraja (2014), the Supreme Court recognized animals' right to life under Article 21, banned jallikattu (bull-taming), and articulated the Five Freedoms as constitutional principles. The Punjab & Haryana High Court in 2019 declared all animals as legal persons. Current penalties under Section 11 are notoriously low: first offense carries a fine of INR 10-50 with maximum 3 months imprisonment. The Animal Welfare (Amendment) Bill proposed in 2022 would increase penalties to INR 75,000-5,00,000 and 1-5 years imprisonment, but remains pending in Parliament.",
    lawName: "Prevention of Cruelty to Animals Act",
    article: "Sections 11-12",
    year: 1960,
    lastAmended: 2023,
    penaltyMin: "Fine from ₹50 (being updated)",
    penaltyMax: "Up to 3 months imprisonment or fine up to ₹100 (proposed increase to ₹75,000-₹5,00,000)",
    tags: ["cruelty", "constitutional", "fundamental duty"],
  },
  {
    id: "in-002",
    country: "India",
    countryCode: "IN",
    category: "Wildlife Protection",
    topic: "Wildlife protection act",
    summary: "One of the strongest wildlife protection laws in Asia.",
    details:
      "The Wildlife Protection Act (1972, Act No. 53, comprehensively amended by Act No. 18 of 2022) provides one of Asia's strongest wildlife protection frameworks with protected species listed across six Schedules. Schedule I species (Bengal tiger, Asian elephant, one-horned rhinoceros, snow leopard, lion-tailed macaque) receive the highest protection, with penalties under Section 51 of up to 7 years imprisonment and fines up to INR 25,00,000. Project Tiger (launched 1973, now operating through the National Tiger Conservation Authority established 2006) has increased tiger numbers from 1,827 in 2010 to 3,682 in 2023 across 56 tiger reserves. The 2022 amendment implemented CITES provisions through a new Chapter VB, established the Standing Committee of the National Board for Wildlife, and rationalized protected species schedules from six to four. The Ministry of Environment, Forest and Climate Change, state forest departments, and the Wildlife Crime Control Bureau (WCCB, established 2007) enforce the Act. India manages 106 national parks, 567 wildlife sanctuaries, and 18 biosphere reserves. India ratified CITES in 1976. The Supreme Court in Centre for Environmental Law v. Union of India (1995) established the doctrine of intergenerational equity for wildlife conservation.",
    lawName: "Wildlife Protection Act",
    article: "Various",
    year: 1972,
    lastAmended: 2022,
    penaltyMax: "Up to 7 years imprisonment and fine up to ₹25,00,000",
    tags: ["wildlife", "Project Tiger", "conservation", "CITES"],
  },
  {
    id: "in-003",
    country: "India",
    countryCode: "IN",
    category: "Farm Animals",
    topic: "Cow slaughter laws",
    summary: "Most states prohibit cow slaughter; laws vary significantly.",
    details:
      "Most Indian states have enacted laws prohibiting or restricting cow slaughter under Article 48 of the Constitution (Directive Principles of State Policy), which directs the state to prohibit slaughter of cows and calves. As of 2024, 24 of 28 states have cow slaughter bans of varying scope: states including Uttar Pradesh, Gujarat, Rajasthan, and Madhya Pradesh impose total bans on cow slaughter with penalties of up to 10 years imprisonment (Gujarat Prevention of Animal Sacrifice and Cow Slaughter Act, 2017). In State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat (2005), the Supreme Court upheld comprehensive cow slaughter bans as constitutionally valid. Kerala, West Bengal, and the northeastern states have fewer restrictions. The Prevention of Cruelty to Animals (Transport of Livestock) Rules, 2009, regulate transport conditions. The Food Safety and Standards Authority of India (FSSAI) oversees slaughter hygiene under the FSSAI Act 2006. The Transport of Animals Rules (2001) mandate rest, feed, and water during transport. The cattle slaughter issue remains politically charged, with vigilante attacks on cattle traders prompting Supreme Court intervention in Tehseen S. Poonawalla v. Union of India (2018) directing states to prevent mob violence.",
    lawName: "Various state-level laws",
    article: "Various",
    year: 1955,
    tags: ["cow protection", "state laws", "cultural", "religious"],
  },
  {
    id: "in-004",
    country: "India",
    countryCode: "IN",
    category: "Animal Testing",
    topic: "Cosmetics testing ban",
    summary: "India banned animal testing for cosmetics in 2014.",
    details:
      "India banned animal testing for cosmetics on October 13, 2014, through an amendment to the Drugs and Cosmetics Rules (Rule 148-C), and subsequently banned the import of cosmetics tested on animals through an amendment to Rule 135-B, making India the first South Asian country to implement both manufacturing and import bans. The Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), established under Section 15 of the PCA Act 1960, regulates all animal experimentation in India, requiring registration of laboratories and Institutional Animal Ethics Committee (IAEC) approval. The Bureau of Indian Standards issued IS 4011:2018 guidelines for alternative testing methods. The ban was driven by campaigns from Humane Society International/India, PETA India, and the Beauty Without Cruelty Trust (founded 1970). India has invested in developing alternative testing capacity through the National Centre for Alternatives to Animal Experiments (NCAAE). Approximately 2 million animals are used annually in Indian research. India's dual ban framework (manufacturing and import) is more comprehensive than the EU's approach, which initially banned only domestic testing before extending to imports in 2013.",
    lawName: "Drugs and Cosmetics Rules / PCA Act",
    article: "Rule 148-C, 135-B",
    year: 2014,
    tags: ["cosmetics", "testing ban", "CPCSEA", "landmark"],
  },
  {
    id: "in-005",
    country: "India",
    countryCode: "IN",
    category: "Companion Animals",
    topic: "Stray animal protections",
    summary: "Stray dogs and cats protected; ABC (Animal Birth Control) program mandated.",
    details:
      "The Animal Birth Control (Dogs) Rules 2023, issued under Section 38 of the PCA Act 1960, mandate that municipal authorities implement sterilization and anti-rabies vaccination programs for stray dogs through Animal Birth Control (ABC) centers, explicitly prohibiting culling or relocation. Rule 7 requires that sterilized dogs be returned to their original territory. In the landmark case of Animal Welfare Board of India v. People for Elimination of Stray Troubles (2023), the Supreme Court upheld the right of community dogs to live and be fed, ruling that citizens have the right to feed strays and municipalities cannot interfere unless protocols are violated. The AWBI monitors ABC program implementation by approximately 800 municipal bodies. India has an estimated 62 million stray dogs, the largest population globally. The Rules mandate that sterilization be performed by qualified veterinarians following AWBI-prescribed surgical protocols. The 2023 revision introduced monitoring committees at state, district, and municipality levels. Approximately 200,000-300,000 sterilizations are performed annually, though the target of 70% coverage to stabilize populations requires approximately 8 million operations. Rabies kills an estimated 20,000 Indians annually, underscoring the public health importance of ABC programs.",
    lawName: "Animal Birth Control Rules / PCA Act",
    article: "ABC Rules 2023",
    year: 2001,
    lastAmended: 2023,
    tags: ["stray animals", "ABC", "sterilization", "Supreme Court"],
  },
  {
    id: "in-006",
    country: "India",
    countryCode: "IN",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Current penalties are low but amendments pending to increase them significantly.",
    details:
      "The PCA Act 1960's penalty provisions under Section 11 are notoriously inadequate: first offense cruelty carries a fine of INR 10-50 (less than US$1), while subsequent offenses carry INR 25-100 and/or up to 3 months imprisonment. These penalties, unchanged since 1960, have been widely criticized by the judiciary, with the Bombay High Court in the 2017 Lalit Waghela case describing them as 'absurdly low.' The Animal Welfare (Amendment) Bill, first proposed in 2011 and revised in 2022, proposes increasing penalties to INR 75,000-5,00,000 and 1-5 years imprisonment for cruelty, with enhanced penalties for repeat offenses, but remains pending in Parliament. By contrast, the Wildlife Protection Act (amended 2022) provides up to 7 years imprisonment and INR 25,00,000 for Schedule I species offenses. The IPC Section 428-429 (destruction of property exceeding INR 50) provides up to 5 years imprisonment for killing animals as a property crime, and is sometimes invoked as a workaround for the PCA Act's low penalties. The AWBI and animal welfare organizations including Humane Society International/India and Federation of Indian Animal Protection Organisations (FIAPO) continue campaigning for the amendment bill.",
    lawName: "Prevention of Cruelty to Animals Act / Wildlife Protection Act",
    article: "Various",
    year: 1960,
    penaltyMax: "Up to 7 years for wildlife crimes; domestic animal cruelty penalties being increased",
    tags: ["penalties", "reform", "amendment pending"],
  },

  // ==================== PAKISTAN ====================
  {
    id: "pk-001",
    country: "Pakistan",
    countryCode: "PK",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary: "Colonial-era anti-cruelty law remains in effect.",
    details:
      "The Prevention of Cruelty to Animals Act (1890), inherited from British colonial legislation, prohibits overloading, beating, torturing, and causing unnecessary suffering to domestic animals under Section 3. Penalties remain at the original levels: fines of up to PKR 500 (less than US$2) and/or imprisonment up to 3 months, among the lowest animal cruelty penalties globally. Enforcement falls under provincial governments and local police. In the landmark case of Islamabad Wildlife Management Board v. Metropolitan Corporation Islamabad (2020), Justice Athar Minallah of the Islamabad High Court ordered the transfer of Kaavan, a lone Asian elephant held at Marghazar Zoo for 35 years, recognizing animal rights to dignity and freedom from cruelty under the Constitution's right to life provisions. The judgment cited Islamic principles of animal welfare and the AWBI v. Nagaraja precedent from India. The case attracted global attention, with Cher personally funding Kaavan's relocation to Cambodia. Following this ruling, the Islamabad Wildlife Management Board (IWMB) was established under Ordinance 2020, strengthening wildlife protection in the capital territory. Provincial assemblies in Punjab and Sindh have discussed draft animal welfare bills to replace the colonial-era Act, but none have been enacted.",
    lawName: "Prevention of Cruelty to Animals Act",
    article: "Various",
    year: 1890,
    penaltyMax: "Fine up to PKR 500 (extremely outdated)",
    tags: ["colonial era", "outdated", "Kaavan", "landmark ruling"],
  },
  {
    id: "pk-002",
    country: "Pakistan",
    countryCode: "PK",
    category: "Wildlife Protection",
    topic: "Wildlife management",
    summary: "Provincial wildlife laws with growing enforcement efforts.",
    details:
      "Wildlife protection in Pakistan is a provincial matter under the Constitution's 18th Amendment (2010), with each province maintaining separate legislation: the Punjab Wildlife Act (1974, amended 2007), Sindh Wildlife Protection Ordinance (1972), Khyber Pakhtunkhwa Wildlife Act (1975, amended 2015), and Balochistan Wildlife Protection Act (1974). These laws establish hunting permits, protected species lists, and wildlife sanctuaries. Penalties vary by province: Punjab provides up to 3 years imprisonment and PKR 500,000 for killing protected species. The Islamabad Wildlife Management Board (IWMB) Ordinance (2020), enacted following the Kaavan case, established a modern conservation body for the capital territory with enhanced enforcement powers. Pakistan hosts globally significant populations of snow leopards (estimated 200-420 in Gilgit-Baltistan and Chitral), markhor (national animal, approximately 5,700), Indus river dolphins (fewer than 2,000), and the critically endangered woolly flying squirrel. Pakistan ratified CITES in 1976. The WWF-Pakistan and Snow Leopard Foundation have operated community-based conservation programs. Deforestation, poaching, and human-wildlife conflict, particularly with common leopards in the Galiyat hills, remain significant challenges.",
    lawName: "Various provincial wildlife acts / IWMB Ordinance 2020",
    article: "Various",
    year: 2020,
    tags: ["wildlife", "provincial", "Kaavan", "IWMB"],
  },
  {
    id: "pk-003",
    country: "Pakistan",
    countryCode: "PK",
    category: "Companion Animals",
    topic: "Dog management and animal fighting",
    summary: "Animal fighting is prohibited; stray dog management remains challenging.",
    details:
      "Animal fighting, including dog fighting, cock fighting, bear-baiting, and bull fighting, is prohibited under Section 3(e) of the Prevention of Cruelty to Animals Act (1890) and reinforced by provincial wildlife laws. However, enforcement is extremely weak, with dog fighting remaining prevalent in Punjab (particularly Rawalpindi and Faisalabad districts), cock fighting continuing as a widespread cultural practice, and bear-baiting persisting in parts of Sindh and Punjab despite the Bioresource Research Centre's campaigns since 1999 which have reduced incidents from over 300 annually to fewer than 10. Stray dog management varies dramatically: Karachi has an estimated 35,000-50,000 stray dogs with periodic culling campaigns criticized by animal welfare organizations, while Islamabad has adopted TNR approaches under IWMB guidance. The Ayesha Chundrigar Foundation (ACF), Pakistan's largest animal welfare organization, operates rescue and TNR programs in Karachi. Rabies remains a significant public health concern, with approximately 2,000-5,000 deaths annually. Provincial drafts of modern animal welfare legislation would strengthen prohibitions against animal fighting and introduce higher penalties, but political will remains limited.",
    lawName: "Prevention of Cruelty to Animals Act",
    article: "Various",
    year: 1890,
    tags: ["animal fighting", "stray dogs", "enforcement"],
  },

  // ==================== BANGLADESH ====================
  {
    id: "bd-001",
    country: "Bangladesh",
    countryCode: "BD",
    category: "Anti-Cruelty",
    topic: "Cruelty to animals prevention",
    summary: "Colonial-era cruelty law with proposed modern replacement.",
    details:
      "The Cruelty to Animals Act (1920, Act I of 1920), a colonial-era statute inherited from British India, provides basic protections against cruelty including prohibitions on overdriving, overloading, beating, and causing unnecessary suffering to domestic animals. Penalties remain at the original levels: fines of up to BDT 200 (less than US$2) for first offenses and BDT 500 for subsequent offenses, with maximum imprisonment of 3 months, making these among the lowest animal cruelty penalties globally. The Act is enforced nominally by local police under the Ministry of Fisheries and Livestock. A comprehensive Animal Welfare Act was drafted in 2019 by the Ministry of Fisheries and Livestock with technical support from the World Animal Protection organization, proposing modern welfare standards, increased penalties, and establishment of an Animal Welfare Board, but the bill has not progressed through the Jatiya Sangsad (Parliament). The Obhoyaronno-Bangladesh Animal Welfare Foundation and Animal Planet Foundation Bangladesh have led advocacy efforts. Bangladesh has an estimated 15-20 million stray dogs, with limited TNR programs operating primarily in Dhaka. The country lacks animal welfare education in veterinary curricula, contributing to persistent enforcement gaps.",
    lawName: "Cruelty to Animals Act",
    article: "Various",
    year: 1920,
    penaltyMax: "Fine up to BDT 200 (extremely outdated)",
    tags: ["colonial era", "draft law", "outdated"],
  },
  {
    id: "bd-002",
    country: "Bangladesh",
    countryCode: "BD",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary: "Wildlife Conservation and Security Act provides modern protections.",
    details:
      "The Wildlife Conservation and Security Act (2012, Act No. 30 of 2012) replaced the colonial-era Wildlife (Conservation) (Amendment) Act of 1974, providing modernized protections for Bangladesh's biodiversity. The Act establishes three categories of protected wildlife under the Schedule: endangered (e.g., Bengal tiger, approximately 114 in the Sundarbans as of 2024), critical (Asian elephant, approximately 400), and common protected species. Penalties under Section 36 include up to 2 years imprisonment and fines up to BDT 100,000 for killing endangered species, with up to 1 year for other protected species. The Forest Department under the Ministry of Environment, Forest and Climate Change serves as the primary enforcement body. Bangladesh manages 38 protected areas covering approximately 4.6% of territory, including the Sundarbans (UNESCO World Heritage Site, 1997). Transboundary conservation with India focuses on tiger corridors and elephant migration routes. Bangladesh ratified CITES in 1981. The Bangladesh Wildlife Crime Control Unit (WLCCU), established in 2012 with USAID support, coordinates anti-trafficking efforts. Despite legal protections, habitat loss from urbanization and the world's densest population (1,265/sq km) poses severe conservation challenges.",
    lawName: "Wildlife Conservation and Security Act",
    article: "Various",
    year: 2012,
    penaltyMax: "Up to 2 years imprisonment and fine up to BDT 100,000",
    tags: ["wildlife", "Bengal tiger", "conservation"],
  },

  // ==================== SRI LANKA ====================
  {
    id: "lk-001",
    country: "Sri Lanka",
    countryCode: "LK",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty ordinance",
    summary: "Colonial-era ordinance supplemented by modern regulations.",
    details:
      "The Prevention of Cruelty to Animals Ordinance No. 13 of 1907 (amended in 1955 and 2006) provides basic protections against cruelty to domestic and captive animals. Section 2 prohibits overdriving, overloading, cruelly beating, torturing, and causing unnecessary suffering. Penalties under the 2006 amendment increased to fines up to LKR 100,000 and/or imprisonment up to 3 months, a significant increase from the original colonial penalties but still considered inadequate. The Department of Animal Production and Health under the Ministry of Agriculture enforces the Ordinance. The Animal Welfare Bill (drafted 2006, revised 2016) proposes comprehensive modernization including establishing an Animal Welfare Authority, increasing penalties to LKR 500,000 and/or 2 years imprisonment, and introducing Five Freedoms standards. The Bill has been delayed in parliamentary process. Sri Lanka's Animal Welfare Act Coalition, comprising the Animal Welfare Trust Lanka, Dogstar Foundation, and Embark, has campaigned for its adoption. Sri Lanka has an estimated 3 million stray dogs managed through government TNR programs in collaboration with the World Organisation for Animal Health (WOAH). The country enacted a dog breeding regulation in 2019 requiring registration of breeders.",
    lawName: "Prevention of Cruelty to Animals Ordinance",
    article: "Various",
    year: 1907,
    tags: ["colonial era", "reform pending"],
  },
  {
    id: "lk-002",
    country: "Sri Lanka",
    countryCode: "LK",
    category: "Wildlife Protection",
    topic: "Elephant and wildlife protection",
    summary: "Strong protections for elephants and diverse wildlife.",
    details:
      "The Fauna and Flora Protection Ordinance No. 2 of 1937 (substantially amended in 1993, 2003, and 2009) provides comprehensive wildlife protection in Sri Lanka. The 2009 amendment under Section 30 increased penalties for killing elephants to fines of LKR 100,000-500,000 and imprisonment of 2-5 years. Sri Lanka has approximately 5,900 wild Asian elephants, the highest density of Asian elephants in the world, with human-elephant conflict killing approximately 100 elephants and 70-80 people annually. The Department of Wildlife Conservation (DWLC) under the Ministry of Wildlife manages 26 national parks, 7 strict nature reserves, and 65 other protected areas covering approximately 13% of the country. The Pinnawala Elephant Orphanage (established 1975) and the Elephant Transit Home in Udawalawe rehabilitate orphaned calves. Sri Lanka ratified CITES in 1979. The Elephant Conservation Act No. 1 of 1997 specifically regulates ownership and management of captive elephants, requiring registration and prohibiting capture from the wild. The Supreme Court in Bulankulama v. Secretary, Ministry of Industrial Development (2000) established the public trust doctrine for wildlife protection. Illegal elephant capture for temple festivals remains a persistent enforcement challenge.",
    lawName: "Fauna and Flora Protection Ordinance",
    article: "Various",
    year: 1937,
    lastAmended: 2009,
    penaltyMax: "Up to 5 years imprisonment for killing protected species",
    tags: ["elephants", "wildlife", "conservation"],
  },

  // ==================== NEPAL ====================
  {
    id: "np-001",
    country: "Nepal",
    countryCode: "NP",
    category: "Wildlife Protection",
    topic: "National parks and wildlife conservation",
    summary: "Strong national park system with successful conservation programs.",
    details:
      "Nepal's National Parks and Wildlife Conservation Act (2029 BS / 1973 AD, amended 2017) established a robust protected area system covering over 23% of the country's total area. Section 10 lists fully protected species including the one-horned rhinoceros, Bengal tiger, snow leopard, red panda, and Asian elephant. Section 26 imposes penalties of 5-15 years imprisonment and fines of NPR 100,000-1,000,000 for killing fully protected species. Nepal achieved remarkable zero poaching years for rhinos in 2011 and 2013, and tiger numbers have nearly doubled from 121 in 2009 to 235 in 2022. The Department of National Parks and Wildlife Conservation (DNPWC) manages 12 national parks, 1 wildlife reserve, 6 conservation areas, and 1 hunting reserve.",
    lawName: "National Parks and Wildlife Conservation Act",
    article: "Various",
    year: 1973,
    lastAmended: 2017,
    penaltyMax: "Up to 15 years imprisonment for killing protected species",
    tags: ["national parks", "rhino", "tiger", "zero poaching"],
  },
  {
    id: "np-002",
    country: "Nepal",
    countryCode: "NP",
    category: "Anti-Cruelty",
    topic: "Animal welfare provisions",
    summary: "Constitutional recognition of animal welfare; limited legislation.",
    details:
      "Nepal's Constitution (2015) under Article 30 guarantees the right to a clean environment, and Article 51(g)(3) directs the state to adopt policies for protection and sustainable use of biodiversity. The Animal Health and Livestock Services Act (2055 BS / 1999 AD) addresses animal disease control, quarantine, and veterinary services under the Department of Livestock Services. The Animal Slaughterhouse and Meat Inspection Act (2055 BS / 1999 AD) regulates slaughter conditions but does not mandate humane stunning. Nepal's Muluki Criminal Code (2074 BS / 2017 AD) Section 295 penalizes causing unnecessary suffering to animals with fines up to NPR 15,000 and/or imprisonment up to 3 months. A comprehensive Animal Welfare Bill has been in parliamentary discussion since 2016 but remains unpassed.",
    lawName: "Animal Health and Livestock Services Act / Constitution of Nepal / Muluki Criminal Code",
    article: "Section 295 (Criminal Code), Article 30 (Constitution)",
    year: 1999,
    penaltyMax: "Fine up to NPR 15,000 and/or up to 3 months imprisonment under Criminal Code Section 295",
    tags: ["constitutional", "livestock", "welfare", "criminal code"],
  },
  {
    id: "np-003",
    country: "Nepal",
    countryCode: "NP",
    category: "Wildlife Protection",
    topic: "CITES implementation and cross-border enforcement",
    summary: "Nepal implements CITES with dedicated anti-poaching units and buffer zone programs.",
    details:
      "Nepal ratified CITES in 1975, and the National Parks and Wildlife Conservation Act serves as the primary implementing legislation. The Nepal Army deploys dedicated anti-poaching battalions in national parks including Chitwan, Bardia, and Sagarmatha. Nepal's community-based anti-poaching units (CPAUs) in buffer zones have been instrumental in achieving zero-poaching milestones. The CITES Management Authority operates under the Department of National Parks and Wildlife Conservation. Cross-border cooperation with India and China targets trafficking of tiger parts, rhino horns, and red sandalwood. The Nepal Transit Country Wildlife Enforcement Protocol addresses the country's position as a transit route between India and China. Penalties for wildlife trafficking were increased in the 2017 amendment to include up to 15 years imprisonment.",
    lawName: "National Parks and Wildlife Conservation Act / CITES Implementation",
    article: "Section 26",
    year: 1975,
    lastAmended: 2017,
    penaltyMax: "Up to 15 years imprisonment and fine up to NPR 1,000,000",
    tags: ["CITES", "anti-poaching", "community conservation", "cross-border"],
  },

  // ==================== BHUTAN ====================
  {
    id: "bt-001",
    country: "Bhutan",
    countryCode: "BT",
    category: "Anti-Cruelty",
    topic: "Buddhist-influenced animal protections",
    summary: "Strong cultural and legal protections influenced by Buddhist principles.",
    details:
      "Bhutan's Buddhist culture provides exceptionally strong animal protections. The Livestock Act of Bhutan (2001) under Sections 42-48 prohibits cruelty to animals and mandates proper care of domestic animals. Bhutan has effectively banned commercial slaughterhouses since the 1990s, and approximately 50% of all meat consumed is imported from India. The National Stray Dog Population Management and Rabies Control Programme, launched in 2009 with support from the Humane Society International, uses TNR (trap-neuter-return) methods exclusively. By 2023, over 150,000 dogs had been sterilized and vaccinated. The 1995 Bhutan Penal Code (Amendment 2011) Section 349 penalizes cruelty to animals with imprisonment of 1 month to 1 year. Animal sacrifice is prohibited throughout the kingdom.",
    lawName: "Livestock Act of Bhutan",
    article: "Various",
    year: 2001,
    tags: ["Buddhist", "cultural protection", "no slaughterhouses", "TNR"],
  },
  {
    id: "bt-002",
    country: "Bhutan",
    countryCode: "BT",
    category: "Wildlife Protection",
    topic: "Forest and nature conservation",
    summary: "Over 70% forest cover maintained with constitutional environmental commitment.",
    details:
      "Bhutan's Constitution (2008) Article 5 mandates maintaining a minimum of 60% forest cover for all time, currently at approximately 71%. The Forest and Nature Conservation Act (1995, amended 2022) under Chapter V establishes protected areas and lists protected wildlife species. Penalties under Section 39 include fines of Nu 5,000-100,000 and/or imprisonment up to 5 years for killing protected species. Bhutan protects snow leopards (estimated 100-200), takins (national animal, classified as vulnerable), Bengal tigers (estimated 131 in 2022), black-necked cranes, and golden langurs. The country has designated over 51% of its land area as protected areas and biological corridors, making it one of the world's highest ratios. Bhutan is a CITES party since 2002.",
    lawName: "Forest and Nature Conservation Act",
    article: "Chapter V, Section 39",
    year: 1995,
    lastAmended: 2022,
    penaltyMax: "Fine up to Nu 100,000 and/or up to 5 years imprisonment",
    tags: ["conservation", "forest cover", "takin", "snow leopard"],
  },
  {
    id: "bt-003",
    country: "Bhutan",
    countryCode: "BT",
    category: "Farm Animals",
    topic: "Livestock management and slaughter restrictions",
    summary: "Buddhist principles shape strict livestock and slaughter regulations unique in the world.",
    details:
      "Bhutan's approach to livestock is uniquely shaped by Buddhist principles of non-violence (ahimsa). The Livestock Act (2001) Sections 12-18 regulate livestock management, breeding, and disease control under the Department of Livestock. Commercial slaughter for domestic sale has been effectively prohibited since the 1990s through local government regulations and cultural norms. The import of meat is regulated under the Bhutan Food and Drug Authority (established by the Food Act 2005). The Biodiversity Act of Bhutan (2003) under Section 23 prohibits the use of genetically modified organisms in livestock. Bhutan's Gross National Happiness philosophy, enshrined in the Constitution, explicitly recognizes environmental and ecological values, extending protections to all sentient beings. Yak and cattle herding in highland areas follows traditional practices with strong cultural taboos against mistreatment.",
    lawName: "Livestock Act / Food Act 2005 / Biodiversity Act 2003",
    article: "Sections 12-18 (Livestock Act), Section 23 (Biodiversity Act)",
    year: 2001,
    tags: ["Buddhist", "slaughter ban", "livestock", "GNH", "non-violence"],
  },

  // ==================== MALDIVES ====================
  {
    id: "mv-001",
    country: "Maldives",
    countryCode: "MV",
    category: "Wildlife Protection",
    topic: "Marine and environmental protection",
    summary: "Strong marine conservation with shark and turtle protections.",
    details:
      "The Environmental Protection and Preservation Act (Law No. 4/93) under Section 7 authorizes the Ministry of Environment to establish protected areas and regulate wildlife. The Maldives declared a nationwide ban on shark fishing in 2010 through a regulation under the Fisheries Act (Law No. 5/87), protecting all shark species within the country's exclusive economic zone of approximately 900,000 sq km. Sea turtles have been protected since 1995 under Regulation on the Protection of Turtles. The 2009 regulation designated 42 marine protected areas. Whale sharks, manta rays, Napoleon wrasse, and all species of sea turtles receive explicit legal protection. Coral mining was banned in 1990. The Maldives ratified CITES in 2012.",
    lawName: "Environmental Protection and Preservation Act (Law No. 4/93)",
    article: "Section 7",
    year: 1993,
    lastAmended: 2014,
    tags: ["marine", "sharks", "turtles", "coral reef", "conservation"],
  },
  {
    id: "mv-002",
    country: "Maldives",
    countryCode: "MV",
    category: "Anti-Cruelty",
    topic: "Animal welfare provisions and Islamic principles",
    summary: "No standalone animal welfare law; Islamic principles provide cultural framework.",
    details:
      "The Maldives has no dedicated animal welfare or anti-cruelty statute. The Penal Code (Law No. 9/2014) does not contain specific animal cruelty provisions. However, Islamic Sharia principles, which form the constitutional basis of Maldivian law under Article 10 of the Constitution, emphasize mercy toward animals (rahma). The Prophet Muhammad's teachings on animal welfare, including prohibitions on animal fighting and unnecessary harm, carry significant cultural weight. Animal Control Regulation (2014) issued by the Male City Council addresses stray dog and cat management in the capital. Import of dogs requires permits under the Animal Import Regulation. Livestock management falls under the Ministry of Fisheries, Marine Resources and Agriculture.",
    lawName: "Penal Code (Law No. 9/2014) / Animal Control Regulation",
    article: "Various",
    year: 2014,
    tags: ["gap", "Islamic principles", "no standalone law", "Penal Code"],
  },
  {
    id: "mv-003",
    country: "Maldives",
    countryCode: "MV",
    category: "Wildlife Protection",
    topic: "Marine megafauna and ecotourism-driven protections",
    summary: "Strong protections for marine megafauna driven by the ecotourism economy.",
    details:
      "The Maldives Fisheries Act (Law No. 5/87, amended 2014) and associated regulations provide strong protections for marine megafauna. The 2014 regulation established the Maldives as one of the world's largest shark sanctuaries, prohibiting all shark fishing and trade. The Manta Ray Regulation (2014) prohibits capture, killing, and trade of all manta ray species. Dolphin protection regulations prohibit hunting and harassment. These protections are economically driven: marine tourism generates over US$3 billion annually, with shark and manta ray diving contributing significantly. The Biosphere Reserve of Baa Atoll (UNESCO designated 2011) protects critical feeding grounds. Export of live reef fish and corals is regulated under the Export/Import Act with strict permitting.",
    lawName: "Fisheries Act (Law No. 5/87) / Manta Ray Regulation / Shark Protection Regulation",
    article: "Various",
    year: 2014,
    tags: ["marine megafauna", "shark sanctuary", "manta rays", "ecotourism"],
  },

  // ==================== AFGHANISTAN ====================
  {
    id: "af-001",
    country: "Afghanistan",
    countryCode: "AF",
    category: "Wildlife Protection",
    topic: "Environmental law provisions",
    summary: "Environment Law provides limited wildlife protections.",
    details:
      "The Environment Law (2007) under Chapter 5, Articles 35-42 includes provisions for wildlife protection, biodiversity conservation, and establishment of protected areas. Afghanistan has critical habitats for snow leopards (estimated 100-200 individuals), Marco Polo sheep in the Wakhan Corridor, markhor (the national animal), Asiatic black bears, and Afghan brook salamanders. The law authorizes the National Environmental Protection Agency (NEPA) to designate protected areas and regulate hunting. Afghanistan's first national park, Band-e-Amir, was established in 2009 under this law. The country signed CITES in 1985. However, decades of conflict have severely limited enforcement capacity. The Wildlife Conservation Society has operated conservation programs in the Wakhan Corridor since 2006.",
    lawName: "Environment Law",
    article: "Articles 35-42",
    year: 2007,
    tags: ["environment", "wildlife", "limited enforcement", "conflict"],
  },
  {
    id: "af-002",
    country: "Afghanistan",
    countryCode: "AF",
    category: "Anti-Cruelty",
    topic: "Animal welfare legal gap and cultural provisions",
    summary: "No dedicated anti-cruelty legislation; Islamic principles provide limited cultural protections.",
    details:
      "Afghanistan has no dedicated animal welfare or anti-cruelty legislation. The Penal Code (1976, partially amended 2017) does not contain specific animal cruelty provisions. Islamic principles of animal welfare (rahma/mercy and the prohibition of unnecessary harm) carry moral authority but are not codified into enforceable animal protection law. The traditional practice of buzkashi (goat-pulling sport) involves rough handling of goat carcasses and is culturally protected. Dog fighting and bird fighting (quail, partridge) remain common and unregulated. The Afghan Veterinary Law (2003) focuses on livestock disease control and food safety under the Ministry of Agriculture, Irrigation and Livestock (MAIL). International organizations including Nowzad (established 2007) operate animal welfare programs, particularly for stray dogs in urban areas.",
    lawName: "No dedicated law / Veterinary Law (2003)",
    article: "N/A",
    year: 0,
    tags: ["gap", "no legislation", "Islamic principles", "cultural practices"],
  },
  {
    id: "af-003",
    country: "Afghanistan",
    countryCode: "AF",
    category: "Wildlife Protection",
    topic: "Hunting regulation and protected areas",
    summary: "Hunting Law regulates wildlife harvest; enforcement severely hampered by conflict.",
    details:
      "The Hunting and Wildlife Management Law (2009) establishes hunting permits, seasonal restrictions, and prohibited species lists under the authority of NEPA and the Ministry of Agriculture. Articles 8-12 define prohibited hunting zones and protected species categories. Penalties include fines of 5,000-50,000 Afghani and potential imprisonment for hunting prohibited species. Afghanistan has established Band-e-Amir National Park (2009), Wakhan National Park (2014), and Shah Foladi Protected Area (2015) covering approximately 1.5% of national territory. The country's biodiversity includes over 150 mammal species, 500 bird species, and 100 reptile species. The Afghanistan Biodiversity and Climate Change Assessment (2013) identified critical conservation priorities. Despite legal frameworks, widespread firearms availability, poverty, and institutional weakness severely undermine enforcement.",
    lawName: "Hunting and Wildlife Management Law",
    article: "Articles 8-12",
    year: 2009,
    penaltyMin: "Fine from 5,000 Afghani",
    penaltyMax: "Fine up to 50,000 Afghani and potential imprisonment",
    tags: ["hunting", "protected areas", "Band-e-Amir", "Wakhan", "enforcement gap"],
  },

  // ==================== KAZAKHSTAN ====================
  {
    id: "kz-001",
    country: "Kazakhstan",
    countryCode: "KZ",
    category: "Anti-Cruelty",
    topic: "Responsible treatment of animals law",
    summary: "Dedicated animal welfare law adopted in 2022.",
    details:
      "Kazakhstan adopted the Law on Responsible Treatment of Animals (No. 106-VII) on March 2, 2022, becoming the first Central Asian country to enact a comprehensive animal welfare statute. The law covers domestic, stray, captive, laboratory, and service animals. Article 11 prohibits cruelty including beating, torture, starvation, and abandonment. Article 15 mandates that animal shelters maintain humane conditions and prohibits euthanasia of healthy animals after a minimum holding period of 30 days. Article 17 regulates companion animal breeding and sale. Penalties under the Administrative Offenses Code include fines of 20-100 Monthly Calculation Indices (MCI, approximately KZT 69,000-345,000 as of 2024) for cruelty violations, with criminal liability under Criminal Code Article 316-1 for severe cruelty carrying up to 1 year imprisonment. Enforcement falls under local executive bodies (akimats) and the Committee on Veterinary Control and Supervision under the Ministry of Agriculture. The law was driven by public petitions and advocacy by organizations including KazAnimal and the Kazakhstan Society for the Protection of Animals. This legislation places Kazakhstan ahead of all other Central Asian states in animal welfare protection.",
    lawName: "Law on Responsible Treatment of Animals",
    article: "Various",
    year: 2022,
    penaltyMax: "Administrative fines and potential criminal liability",
    tags: ["welfare", "modern law", "domestic animals", "shelters"],
  },
  {
    id: "kz-002",
    country: "Kazakhstan",
    countryCode: "KZ",
    category: "Wildlife Protection",
    topic: "Animal world protection",
    summary: "Law on the Animal World protects wildlife and biodiversity.",
    details:
      "The Law on Protection, Reproduction and Use of the Animal World (2004, amended 2021) regulates wildlife conservation in Kazakhstan, administered by the Committee of Forestry and Wildlife under the Ministry of Ecology and Natural Resources. Kazakhstan hosts globally significant populations of saiga antelope (estimated 1.3 million in 2023, recovered from fewer than 50,000 in 2005 through one of the most successful wildlife recovery programs in history), snow leopards (estimated 130-150), steppe eagles, and Bukhara deer. Articles 16-22 establish protected species categories with hunting prohibitions. The Criminal Code Article 337 provides penalties of up to 5 years imprisonment for illegal hunting of particularly valuable species. Kazakhstan manages 14 state nature reserves, 14 national parks, and 5 state nature reserves covering over 8% of territory. The 2010 mass die-off of 12,000 saiga antelope and the catastrophic 2015 event killing over 200,000 saiga (attributed to Pasteurella multocida bacteria) prompted international conservation mobilization. Kazakhstan ratified CITES in 1999. The Altyn Dala Conservation Initiative, partnering the government with ACBK and the Frankfurt Zoological Society, coordinates steppe ecosystem conservation.",
    lawName: "Law on the Animal World",
    article: "Various",
    year: 2004,
    tags: ["wildlife", "saiga antelope", "snow leopard", "conservation"],
  },

  // ==================== UZBEKISTAN ====================
  {
    id: "uz-001",
    country: "Uzbekistan",
    countryCode: "UZ",
    category: "Wildlife Protection",
    topic: "Animal world protection",
    summary: "Wildlife regulated under the Law on Protection and Use of the Animal World.",
    details:
      "The Law on Protection and Use of the Animal World (1997, amended 2016) governs wildlife conservation in Uzbekistan, administered by the State Committee for Ecology and Environmental Protection. The law classifies species based on the Red Book of Uzbekistan (2019 edition), which lists 184 animal species including the snow leopard (estimated 50-80 in Uzbekistan's Tien Shan and Gissar mountain ranges), Bukhara deer (hangul, approximately 1,500 reintroduced since the 1970s), goitered gazelle, and Severtzov's ram. Article 28 prohibits hunting, capture, and trade of Red Book species. Penalties under the Administrative Liability Code include fines, while the Criminal Code Article 202 provides up to 5 years imprisonment for illegal hunting of protected species causing significant damage. Uzbekistan manages 2 biosphere reserves, 2 national parks, and 9 state nature reserves covering approximately 5% of territory. Uzbekistan ratified CITES in 1997. The Ecology Party (Uzbekiston Ekologik Partiyasi) has been active in promoting environmental legislation. No dedicated animal welfare legislation for domestic or companion animals exists; a draft animal welfare law has been discussed since 2020, influenced by Kazakhstan's 2022 legislation.",
    lawName: "Law on Protection and Use of the Animal World",
    article: "Various",
    year: 1997,
    tags: ["wildlife", "conservation", "snow leopard"],
  },

  // ==================== TURKMENISTAN ====================
  {
    id: "tm-001",
    country: "Turkmenistan",
    countryCode: "TM",
    category: "Wildlife Protection",
    topic: "Animal world and Akhal-Teke horse protection",
    summary: "Wildlife protection law with special reverence for Akhal-Teke horses.",
    details:
      "The Law on Protection and Rational Use of the Animal World (2013) provides the framework for wildlife conservation in Turkmenistan, administered by the Ministry of Agriculture and Environmental Protection. The law classifies protected species based on the Red Book of Turkmenistan (2011 edition), listing 152 animal species. The Akhal-Teke horse, Turkmenistan's national symbol featured on the state emblem and currency, receives exceptional cultural and legal protection under Presidential decrees and the State Committee on Akhal-Teke Horse Breeding; harming or illegally trading Akhal-Teke horses carries severe penalties. Conservation programs target the goitered gazelle, onager (Turkmenistan hosts the largest population of the kulan subspecies), and Transcaspian urial. Turkmenistan manages 8 nature reserves (zapovedniki) including the Badkhyz Nature Reserve (critical for onager) and Repetek Biosphere Reserve (UNESCO), covering approximately 4% of territory. The Criminal Code Article 308 imposes up to 3 years imprisonment for illegal hunting of protected species. Turkmenistan ratified CITES in 1996. No dedicated domestic animal welfare legislation exists, and the country's closed political system limits NGO advocacy for animal welfare reform.",
    lawName: "Law on Protection and Rational Use of the Animal World",
    article: "Various",
    year: 2013,
    tags: ["wildlife", "Akhal-Teke", "horse", "cultural"],
  },

  // ==================== TAJIKISTAN ====================
  {
    id: "tj-001",
    country: "Tajikistan",
    countryCode: "TJ",
    category: "Wildlife Protection",
    topic: "Animal world law",
    summary: "Wildlife conservation focus on mountain ecosystems.",
    details:
      "The Law on the Animal World (2008, amended 2015) protects wildlife across Tajikistan's predominantly mountainous territory (93% of land area is mountains), administered by the Committee on Environmental Protection under the Government. The law is supplemented by the Law on Protected Natural Areas (2011). Tajikistan's Red Book (2015 edition) lists 210 animal species including Marco Polo sheep (Ovis ammon polii, estimated 14,000 in the Eastern Pamirs, the world's largest population), markhor (approximately 2,500), snow leopards (estimated 200-300), Bukhara deer, and the endangered Syr Darya shovelnose sturgeon. Trophy hunting of Marco Polo sheep is regulated through a permit system generating approximately US$2-4 million annually for conservation. The Criminal Code Article 235 provides penalties of up to 5 years imprisonment for illegal hunting of protected species. Tajikistan manages 4 nature reserves, 2 national parks (including Tajik National Park, a UNESCO World Heritage Site since 2013), and 13 wildlife sanctuaries covering approximately 22% of territory. Tajikistan ratified CITES in 2016 and the Convention on Biological Diversity in 1997. No domestic animal welfare legislation exists.",
    lawName: "Law on the Animal World",
    article: "Various",
    year: 2008,
    tags: ["wildlife", "mountains", "Marco Polo sheep", "snow leopard"],
  },

  // ==================== KYRGYZSTAN ====================
  {
    id: "kg-001",
    country: "Kyrgyzstan",
    countryCode: "KG",
    category: "Wildlife Protection",
    topic: "Animal world law",
    summary: "Wildlife protection with growing domestic animal welfare efforts.",
    details:
      "The Law on the Animal World (1999, amended 2014) governs wildlife conservation in Kyrgyzstan, administered by the State Agency on Environmental Protection and Forestry under the Government. Kyrgyzstan is a priority country for snow leopard conservation, hosting an estimated 300-400 individuals (approximately 5-10% of the global population) in the Tien Shan and Pamir-Alay mountain ranges. The Snow Leopard National Strategy (2013) and the Global Snow Leopard and Ecosystem Protection Program (GSLEP), launched in Bishkek in 2013, coordinate international conservation efforts. The Red Book of Kyrgyzstan lists 83 animal species including the Tien Shan brown bear, ibex, and saker falcon. The Criminal Code Article 270 imposes penalties of up to 3 years imprisonment for illegal hunting of protected species. Kyrgyzstan manages 10 state nature reserves, 13 national parks, and 64 wildlife sanctuaries covering approximately 7% of territory. A draft law on responsible treatment of domestic animals has been under parliamentary discussion since 2021, influenced by Kazakhstan's 2022 legislation and growing public concern over stray animal welfare in Bishkek. Kyrgyzstan ratified CITES in 2007.",
    lawName: "Law on the Animal World",
    article: "Various",
    year: 1999,
    tags: ["wildlife", "snow leopard", "draft domestic law"],
  },

  // ==================== TURKEY ====================
  {
    id: "tr-001",
    country: "Turkey",
    countryCode: "TR",
    category: "Anti-Cruelty",
    topic: "Animal rights and welfare",
    summary: "2021 landmark amendment reclassified animals from 'property' to 'living beings'.",
    details:
      "Turkey's Animal Protection Law No. 5199, enacted July 1, 2004 and significantly amended by Law No. 7332 on July 14, 2021, reclassified animals from 'movable property' (tasinir mal) to 'living beings' (canli varlik) in Article 2, a landmark philosophical and legal shift. The 2021 amendment replaced administrative fines with criminal penalties under the Turkish Penal Code: Article 14/A prescribes 4 months to 3 years imprisonment for torturing or abusing animals, and Article 14/B prescribes 1-4 years for intentionally killing animals. Sexual abuse of animals was criminalized for the first time (1-4 years imprisonment). The Ministry of Agriculture and Forestry and local municipalities enforce the law through veterinary inspectors and municipal animal protection officers. The amendment was driven by sustained public campaigns following viral animal abuse incidents, particularly the 2021 social media outcry over mass stray dog poisonings. Turkey has an estimated 10 million stray dogs and 10 million stray cats. The Turkish Animal Rights Federation (HAYTAP) and other NGOs were instrumental in advocating for the reform.",
    lawName: "Animal Protection Law No. 5199",
    article: "Various",
    year: 2004,
    lastAmended: 2021,
    penaltyMin: "Fine from ₺5,000",
    penaltyMax: "Up to 4 years imprisonment for killing animals",
    tags: ["landmark", "living beings", "criminal penalties", "reform"],
  },
  {
    id: "tr-002",
    country: "Turkey",
    countryCode: "TR",
    category: "Companion Animals",
    topic: "Stray animal management",
    summary: "Large-scale stray animal programs with TNR approach.",
    details:
      "Article 6 of Animal Protection Law No. 5199 (2004, amended 2021) mandates TNR (trap-neuter-return) as the exclusive legal method for managing stray animal populations. Under Article 6(a), municipalities are required to establish and operate animal shelters (hayvan barinagi), provide feeding stations, and implement mass sterilization and vaccination programs. Killing, poisoning, or relocating stray animals outside their habitual territory is prohibited under Article 14, with the 2021 amendment introducing criminal penalties of 1-4 years imprisonment for killing strays. Turkey has an estimated 10 million stray dogs and 10 million stray cats, the largest free-roaming animal population in any OECD country. Municipalities receive funding from the Ministry of Agriculture and Forestry for TNR operations, but implementation varies dramatically: Istanbul has invested heavily in stray animal management while smaller municipalities often lack resources. The 2024 draft amendment proposing euthanasia of unclaimed shelter animals after 30 days sparked massive public protests and was withdrawn. Animal welfare organizations including HAYTAP and Yedikule Hayvan Barinagi monitor municipal compliance.",
    lawName: "Animal Protection Law No. 5199",
    article: "Article 6",
    year: 2004,
    lastAmended: 2021,
    tags: ["stray animals", "TNR", "shelters", "municipal responsibility"],
  },
  {
    id: "tr-003",
    country: "Turkey",
    countryCode: "TR",
    category: "Wildlife Protection",
    topic: "Wildlife and hunting regulation",
    summary: "Comprehensive wildlife protection under the Hunting Law.",
    details:
      "Hunting Law No. 4915 (enacted 2003) and the National Parks Law No. 2873 (1983) regulate wildlife conservation in Turkey. The Hunting Law classifies wildlife into categories: totally protected species (hunting prohibited under all circumstances), game species (seasonal hunting with permits), and harmful species. Article 23 imposes penalties of up to 2 years imprisonment and fines of up to 300,000 Turkish lira for hunting protected species. The Ministry of Agriculture and Forestry's General Directorate of Nature Conservation and National Parks (DKMP) administers 44 national parks, 31 nature parks, and 110 wildlife development areas. Turkey sits at the junction of three major bird migration flyways (East Africa-West Asia, Mediterranean/Black Sea, and Central Asian flyways), hosting over 480 bird species. The Anatolian leopard (Panthera pardus tulliana), considered critically endangered with fewer than 10 individuals, and the Caucasian lynx receive strict protection. Turkey ratified CITES in 1996 and the Bern Convention on Conservation of European Wildlife. The KuzeyDoga Society and Doga Dernegi conduct monitoring and conservation programs.",
    lawName: "Hunting Law No. 4915",
    article: "Various",
    year: 2003,
    tags: ["wildlife", "hunting", "birds", "migration"],
  },
  {
    id: "tr-004",
    country: "Turkey",
    countryCode: "TR",
    category: "Penalties",
    topic: "Penalty framework",
    summary: "Criminal penalties introduced in 2021 amendment.",
    details:
      "The 2021 amendment (Law No. 7332) to Animal Protection Law No. 5199 fundamentally restructured Turkey's penalty framework by replacing administrative fines with criminal sanctions under the Turkish Penal Code. Article 14/B prescribes 1-4 years imprisonment for intentionally killing animals, making Turkey one of the strictest countries globally for this offense. Article 14/A provides 4 months to 3 years for torture or abuse. Article 14/C criminalizes sexual abuse of animals with 1-4 years imprisonment. The Hunting Law No. 4915 provides separate penalties of up to 2 years and fines up to 300,000 lira for wildlife offenses. Under the pre-2021 framework, maximum penalties were administrative fines of 1,500-25,000 lira, widely criticized as non-deterrent. The Ministry of Agriculture and Forestry, municipalities, and the Turkish National Police share enforcement responsibilities. The Union of Turkish Bar Associations established Animal Rights Commissions in major cities to support prosecution. As of 2023, Turkish courts have handed down approximately 500 criminal sentences for animal cruelty, a significant increase from the administrative fine regime.",
    lawName: "Animal Protection Law No. 5199 (amended 2021)",
    article: "Various",
    year: 2021,
    penaltyMax: "Up to 4 years imprisonment for killing animals",
    tags: ["penalties", "criminal", "reform"],
  },

  // ==================== IRAN ====================
  {
    id: "ir-001",
    country: "Iran",
    countryCode: "IR",
    category: "Wildlife Protection",
    topic: "Environmental and wildlife protection",
    summary: "Department of Environment manages wildlife; Asiatic cheetah conservation.",
    details:
      "Iran's Environmental Protection and Enhancement Act (1974, amended 2004) established the Department of Environment (DOE) as an independent governmental body reporting directly to the President. The DOE manages 262 protected areas covering approximately 10% of Iran's territory, including wildlife refuges, national parks, and protected zones. Iran is the last refuge of the critically endangered Asiatic cheetah (Acinonyx jubatus venaticus), with fewer than 50 individuals remaining in Kavir, Touran, and Miandasht wildlife refuges. The Conservation of Asiatic Cheetah Project (CACP), jointly funded by the Iranian DOE and UNDP since 2001, operates anti-poaching ranger units and monitoring programs. The Persian leopard (Panthera pardus saxicolor, estimated 800-1,000 in Iran) receives protection under the Hunting and Fishing Law (1967, amended 1996). Article 10 of the Hunting Law prohibits killing protected species with penalties of 3-10 years imprisonment. Iran ratified CITES in 1976. The Islamic Revolutionary Guard Corps has been involved in anti-poaching operations in border areas. Iran's wildlife protection budget remains limited despite hosting globally significant populations of several endangered species.",
    lawName: "Environmental Protection and Enhancement Act",
    article: "Various",
    year: 1974,
    tags: ["wildlife", "Asiatic cheetah", "Persian leopard", "conservation"],
  },
  {
    id: "ir-002",
    country: "Iran",
    countryCode: "IR",
    category: "Anti-Cruelty",
    topic: "Islamic Penal Code provisions",
    summary: "Some anti-cruelty provisions exist within the Islamic Penal Code.",
    details:
      "The Islamic Penal Code of Iran (2013) contains limited provisions addressing animal welfare: Article 679 prohibits killing or injuring animals belonging to others as a property crime with penalties of 91 days to 6 months imprisonment and/or fines, and ta'zir penalties apply for intentional destruction of livestock. However, these provisions protect property rights rather than animal welfare per se. No standalone animal welfare or anti-cruelty statute exists. Islamic jurisprudential principles of rahma (mercy) and the prohibition of israf (wastefulness/excess) in treatment of animals carry moral and cultural authority, supported by Quranic verses (6:38, 16:5-8) and hadith emphasizing animal care. The Veterinary Organization of Iran under the Ministry of Agriculture regulates livestock health and food safety but not animal welfare. The Iranian Animal Welfare Society and Vafa Animal Shelter (Tehran, established 2004) operate as private organizations. Iran's Parliament (Majlis) has received draft animal welfare proposals from NGOs but none have been formally introduced. Compared to other West Asian nations, Iran lags behind the UAE (Federal Law 16/2016) and Turkey (Law 5199/2004) in dedicated animal welfare legislation.",
    lawName: "Islamic Penal Code / Environmental Law",
    article: "Various",
    year: 2013,
    tags: ["Islamic law", "Penal Code", "cultural", "no standalone law"],
  },

  // ==================== SAUDI ARABIA ====================
  {
    id: "sa-001",
    country: "Saudi Arabia",
    countryCode: "SA",
    category: "Anti-Cruelty",
    topic: "Animal welfare regulations",
    summary: "Executive regulations for animal welfare introduced in 2019.",
    details:
      "Saudi Arabia introduced Executive Regulations for Animal Welfare in 2019 through the Ministry of Environment, Water and Agriculture (MEWA), representing the Kingdom's first dedicated animal welfare framework. The regulations address five key areas: proper animal care and housing, humane transport conditions, slaughter welfare aligned with Islamic halal requirements, regulation of animal exhibitions and entertainment, and prohibition of animal cruelty including fighting and baiting. Enforcement is conducted by MEWA inspectors and the Saudi Food and Drug Authority (SFDA). Saudi Arabia's halal slaughter standards follow the Gulf Standardization Organization (GSO) requirements, mandating that animals be conscious, healthy, and handled humanely before slaughter by a trained Muslim slaughterman. The Saudi Wildlife Authority (SWA) manages wildlife conservation programs. Penalties for violations include administrative fines, facility closure, and potential criminal referral under the Environmental Law (Royal Decree M/34 of 2001). The regulations were developed partly in response to the 2018 NEOM smart city vision which incorporates environmental sustainability and animal welfare principles. Saudi Arabia has also invested in developing alternatives to animal testing through King Abdullah University of Science and Technology (KAUST).",
    lawName: "Executive Regulation for Animal Welfare",
    article: "Various",
    year: 2019,
    tags: ["welfare", "regulations", "Islamic principles"],
  },
  {
    id: "sa-002",
    country: "Saudi Arabia",
    countryCode: "SA",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and Arabian species",
    summary: "Significant conservation programs for Arabian oryx and other native species.",
    details:
      "Saudi Arabia operates one of the Middle East's most ambitious wildlife conservation programs. The Saudi Wildlife Authority (SWA) manages 15 protected areas covering approximately 4% of the Kingdom's territory. The Arabian oryx (Oryx leucoryx) was reintroduced after near-extinction through captive breeding programs at the National Wildlife Research Center (NWRC) in Taif, established in 1986 by the Saudi government. From 7 individuals in the 1970s, the global population now exceeds 1,200 with reintroduced wild populations in the Uruq Bani Ma'arid Protected Area (UNESCO Natural Heritage Site since 2023). The Royal Commission for AlUla manages the Arabian Leopard Conservation Programme, targeting recovery of the critically endangered Arabian leopard (fewer than 200 remaining in the Arabian Peninsula). The Environmental Law (Royal Decree M/34 of 2001) and Hunting Regulation prohibit hunting without permits, with penalties including fines up to SAR 100,000 and imprisonment. Saudi Arabia ratified CITES in 1996. The Saudi Green Initiative (2021), part of Vision 2030, pledged to protect 30% of land and sea areas by 2030, significantly expanding the conservation framework.",
    lawName: "Environmental regulations / Royal Commissions",
    article: "Various",
    year: 2019,
    tags: ["Arabian oryx", "Arabian leopard", "conservation", "reintroduction"],
  },

  // ==================== UAE ====================
  {
    id: "ae-001",
    country: "United Arab Emirates",
    countryCode: "AE",
    category: "Anti-Cruelty",
    topic: "Federal animal welfare law",
    summary: "One of the most comprehensive animal welfare laws in the Gulf region.",
    details:
      "Federal Law No. 16 of 2016 on Animal Welfare is among the most comprehensive animal welfare statutes in the Middle East, covering animal care (Chapter 2), transport (Chapter 3), slaughter (Chapter 4), research use (Chapter 5), and entertainment and exhibition (Chapter 6). Article 4 establishes basic welfare standards including adequate food, water, shelter, veterinary care, and protection from pain and suffering. Article 16 regulates animal experimentation requiring ethics committee approval and promotion of alternatives. Penalties under Article 38 include fines of up to AED 500,000 and/or imprisonment for serious offenses including animal cruelty, unlicensed trade, and violations of slaughter standards. The Ministry of Climate Change and Environment (MOCCAE) and municipal authorities (including Abu Dhabi Agriculture and Food Safety Authority and Dubai Municipality) enforce the law. The UAE's law was influenced by international best practices and drafted with consultation from WOAH and international animal welfare organizations. The Emirates has also established the Mohammed bin Zayed Species Conservation Fund (2008) which has awarded over US$25 million to conservation projects across 160 countries.",
    lawName: "Federal Law No. 16 on Animal Welfare",
    article: "Various",
    year: 2016,
    penaltyMax: "Fine up to AED 500,000 and/or imprisonment",
    tags: ["comprehensive", "welfare", "Gulf leader"],
  },
  {
    id: "ae-002",
    country: "United Arab Emirates",
    countryCode: "AE",
    category: "Companion Animals",
    topic: "Exotic pet regulation",
    summary: "Strict regulations on keeping wild and dangerous animals as pets.",
    details:
      "Federal Law No. 22 of 2016 on Regulating the Possession of Dangerous Animals was enacted specifically to address the widespread practice of keeping exotic predators and venomous species as pets in the UAE. Article 3 prohibits private possession of animals classified as dangerous, including all big cats (lions, tigers, cheetahs, leopards), bears, wolves, hyenas, venomous snakes, and crocodilians, except in licensed zoos, wildlife parks, and research facilities. Penalties under Article 11 include fines of up to AED 700,000 and/or imprisonment up to 6 months, with enhanced penalties for repeat offenses or incidents causing injury to persons. The Ministry of Interior and local police enforce the law through inspections and social media monitoring. Prior to the law, exotic pet ownership, particularly of cheetahs and lions, was common among wealthy Emirati citizens and frequently displayed on social media. Confiscated animals are transferred to licensed facilities including Al Ain Zoo and the Breeding Centre for Endangered Arabian Wildlife (Sharjah). The UAE is one of the few jurisdictions globally to have enacted specific legislation targeting exotic pet ownership, making it a regional model for the Gulf Cooperation Council states.",
    lawName: "Federal Law No. 22 on Regulating Possession of Dangerous Animals",
    article: "Various",
    year: 2016,
    penaltyMax: "Fine up to AED 700,000 and/or imprisonment up to 6 months",
    tags: ["exotic pets", "dangerous animals", "regulation"],
  },

  // ==================== ISRAEL ====================
  {
    id: "il-001",
    country: "Israel",
    countryCode: "IL",
    category: "Anti-Cruelty",
    topic: "Animal protection law",
    summary: "One of the strongest animal welfare frameworks in the Middle East.",
    details:
      "Israel's Animal Welfare (Protection of Animals) Law 5754-1994 prohibits cruelty to all vertebrate animals and mandates proper care standards including adequate food, water, shelter, and veterinary treatment. Penalties under Section 17 include up to 3 years imprisonment and fines of NIS 75,300 for cruelty offenses. The Ministry of Agriculture's Veterinary Services and Animal Health Division enforce the law, with the Israel Police investigating criminal cases. Israel's Supreme Court has issued landmark rulings: in Noa'h v. Attorney General (2003), the Court banned force-feeding of geese for foie gras production, finding it constituted cruelty under the Act. In Let the Animals Live v. Hamat Gader (2006), the court recognized animals' intrinsic right to be free from suffering. In 2022, Israel became the first country to ban the commercial fur trade (Amendment 11 to the Animal Welfare Law), prohibiting sale and trade of fur products except for limited religious exemptions (shtreimels). Israel banned cosmetics animal testing in 2007 and import of animal-tested cosmetics in 2013. The Israeli NGO sector is notably active, with Anonymous for Animal Rights and Let the Animals Live driving legislative campaigns.",
    lawName: "Animal Welfare (Protection of Animals) Law",
    article: "Various",
    year: 1994,
    lastAmended: 2022,
    penaltyMax: "Up to 3 years imprisonment and fine of ₪75,300",
    tags: ["welfare", "progressive", "fur ban", "landmark"],
  },
  {
    id: "il-002",
    country: "Israel",
    countryCode: "IL",
    category: "Farm Animals",
    topic: "Farm animal welfare and foie gras ban",
    summary: "Israel banned foie gras production; progressive farm animal standards.",
    details:
      "In Noa'h - The Israeli Federation of Animal Protection Organizations v. Attorney General (2003), Israel's Supreme Court banned force-feeding of geese for foie gras production, ruling that the practice violated Section 2 of the Animal Welfare Law. This made Israel one of the earliest countries to ban foie gras production, preceding the EU's directive implementation in most member states. The judgment, authored by Justice Eliezer Rivlin, applied a proportionality analysis balancing economic interests against animal suffering. Farm animal welfare is further regulated through the Animal Welfare (Protection of Animals)(Keeping of Farm Animals) Regulations 5761-2001, which set space requirements for poultry, cattle, and pigs. The Egg and Poultry Board has committed to transitioning to cage-free egg production by 2037, with approximately 15% of hens in enriched or cage-free systems as of 2023. Israel banned battery cages under regulations effective 2029. The Ministry of Agriculture issues permits for livestock operations and conducts welfare inspections. Israel's farm animal welfare framework is among the most progressive in Asia/Middle East, though critics note that enforcement in the intensive poultry sector remains inconsistent.",
    lawName: "Animal Welfare Law / Supreme Court ruling",
    article: "Various",
    year: 2003,
    tags: ["foie gras", "ban", "farm welfare", "Supreme Court"],
  },
  {
    id: "il-003",
    country: "Israel",
    countryCode: "IL",
    category: "Animal Testing",
    topic: "Cosmetics testing ban",
    summary: "Israel banned cosmetics animal testing; promotes alternatives.",
    details:
      "Israel banned animal testing for cosmetics through an amendment to the Animal Welfare Law in 2007 (Amendment 7), becoming one of the earliest countries globally to do so, predating the full EU ban which took effect in 2013 under Regulation (EC) No. 1223/2009. In 2013, Israel extended the prohibition to ban the import and marketing of cosmetics and toiletries tested on animals anywhere in the world. The Ministry of Health and the Ministry of Agriculture jointly enforce the ban through import inspection and product registration requirements. Israel is a global leader in developing alternative testing technologies: the Hebrew University's Hadassah Medical Center and companies including MatTek, Epithelix, and Israeli startup VitroBioTech develop in vitro skin and eye models. Israel's innovation ecosystem has produced OECD-validated alternative methods for skin corrosion, irritation, and genotoxicity testing. The ban enjoys broad public support; a 2022 survey by Let the Animals Live found 82% of Israelis support animal welfare legislation. Israel's approach has served as a model for other Middle Eastern countries, with the UAE and Saudi Arabia considering similar restrictions.",
    lawName: "Animal Welfare Law / Cosmetics regulations",
    article: "Various",
    year: 2013,
    tags: ["cosmetics", "testing ban", "alternatives", "leader"],
  },
  {
    id: "il-004",
    country: "Israel",
    countryCode: "IL",
    category: "Companion Animals",
    topic: "Fur trade ban",
    summary: "First country in the world to ban the fur trade (2022).",
    details:
      "Amendment 11 to the Animal Welfare (Protection of Animals) Law, enacted in June 2021 with a 6-month implementation period taking effect in January 2022, made Israel the first country in the world to ban the commercial sale and trade of fur for fashion purposes. The amendment prohibits dealing in, importing, and selling fur and fur products, with penalties including fines up to NIS 75,300 and/or imprisonment. Exemptions exist for scientific research, educational purposes, and religious practice, specifically accommodating the Hasidic tradition of wearing shtreimels (fur hats) during Sabbath and holidays. The legislation was championed by MK Sharren Haskel and supported by a coalition of animal welfare organizations including Anonymous for Animal Rights and the Jane Goodall Institute Israel. The ban was driven by public campaigns highlighting the suffering of mink, foxes, and raccoon dogs in fur farming. Prior to the ban, Israel's fur import market was estimated at approximately US$100 million annually. The law has inspired legislative initiatives in other countries, with California (2023) and the UK considering similar bans. Israel's status as a fur-ban pioneer reinforces its position as a leader in global animal welfare policy.",
    lawName: "Amendment to Animal Welfare Law",
    article: "Various",
    year: 2022,
    tags: ["fur ban", "first in world", "landmark", "fashion"],
  },

  // ==================== LEBANON ====================
  {
    id: "lb-001",
    country: "Lebanon",
    countryCode: "LB",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare law",
    summary: "First Arab country to pass a comprehensive animal welfare law (2015).",
    details:
      "Lebanon's Law 47 on Animal Protection and Welfare, enacted on August 27, 2015, was the first comprehensive animal welfare law in the Arab world. The law covers protection from cruelty (Chapter 2), proper care standards for companion animals (Chapter 3), regulation of zoos, circuses, and pet shops (Chapter 4), and animal experimentation oversight (Chapter 5). Article 4 prohibits cruelty, beating, torture, overwork, abandonment, and animal fighting. Article 7 mandates that pet shops and breeders meet minimum welfare standards. Penalties under Articles 35-40 include fines up to 30 million Lebanese pounds and/or imprisonment for serious offenses. The Ministry of Agriculture is the designated enforcement authority. The law was championed by the Animals Lebanon organization (founded 2008) and MP Ghassan Moukheiber through a multi-year parliamentary campaign. Despite the landmark legislation, Lebanon's severe economic crisis since 2019, hyperinflation, and governmental dysfunction have severely hampered enforcement, with the Ministry of Agriculture operating at diminished capacity. The abandonment of pets surged during the economic crisis, overwhelming NGO-operated shelters.",
    lawName: "Animal Protection and Welfare Law (Law 47)",
    article: "Various",
    year: 2015,
    penaltyMax: "Fine up to LBP 30,000,000 and/or imprisonment",
    tags: ["comprehensive", "first in Arab world", "landmark"],
  },

  // ==================== BAHRAIN ====================
  {
    id: "bh-001",
    country: "Bahrain",
    countryCode: "BH",
    category: "Anti-Cruelty",
    topic: "Animal welfare decree",
    summary: "Dedicated animal welfare law enacted in 2017.",
    details:
      "Bahrain's Law on Animal Welfare (Legislative Decree No. 38 of 2017) addresses animal care, protection from cruelty, regulation of the pet trade, and standards for animal transport and slaughter. The decree prohibits cruelty, neglect, abandonment, and animal fighting, with penalties including fines of BD 500-5,000 (approximately US$1,300-13,250) and/or imprisonment up to 6 months. The Ministry of Works, Municipalities Affairs and Urban Planning, through the National Agricultural Affairs Authority, serves as the enforcement body. The law requires licensing of pet shops, breeding facilities, and veterinary clinics. Bahrain's law was influenced by the UAE's Federal Law No. 16 (2016) and represented the second dedicated animal welfare statute in the Gulf region. The Bahrain Society for the Prevention of Cruelty to Animals (BSPCA), one of the oldest animal welfare organizations in the Gulf, advocated for the legislation. Bahrain ratified CITES in 2012. The Al Areen Wildlife Park serves as the primary conservation center for Arabian oryx and gazelle populations. Enforcement has been moderate, with the law's implementation complicated by limited inspection resources and ongoing urbanization pressures.",
    lawName: "Law on Animal Welfare (Decree No. 38)",
    article: "Various",
    year: 2017,
    tags: ["welfare", "Gulf region", "modern"],
  },

  // ==================== KUWAIT ====================
  {
    id: "kw-001",
    country: "Kuwait",
    countryCode: "KW",
    category: "Anti-Cruelty",
    topic: "Animal welfare law",
    summary: "Among the first Gulf states with dedicated animal welfare legislation.",
    details:
      "Kuwait's Animal Welfare Law (2015) prohibits cruelty to animals, mandates proper care and housing standards, and regulates the pet trade, animal transport, and veterinary practice. The law establishes penalties including fines of KD 500-5,000 (approximately US$1,600-16,400) and potential imprisonment for cruelty offenses. The Public Authority for Agriculture Affairs and Fish Resources (PAAFR) enforces the law through inspection of pet shops, farms, and livestock markets. Kuwait was among the first Gulf Cooperation Council (GCC) states to enact dedicated animal welfare legislation, influenced by growing public awareness and social media campaigns highlighting animal abuse cases. The law requires all pet shops and breeding facilities to obtain licenses and maintain minimum welfare standards including cage sizes, veterinary access, and proper nutrition. Kuwait's Environment Public Authority manages wildlife conservation, particularly for marine turtles and migratory birds in Kuwait Bay and Bubiyan Island. The Kuwait Society for the Protection of Animals and the Environment (K'S PATH) has been active since 2008 in stray animal management, operating TNR programs and adoption services. Implementation challenges include inconsistent enforcement and the prevalence of illegal animal markets.",
    lawName: "Animal Welfare Law",
    article: "Various",
    year: 2015,
    tags: ["welfare", "Gulf pioneer"],
  },

  // ==================== JORDAN ====================
  {
    id: "jo-001",
    country: "Jordan",
    countryCode: "JO",
    category: "Wildlife Protection",
    topic: "Wildlife and environmental protection",
    summary: "Growing wildlife protection framework with important conservation programs.",
    details:
      "Jordan's Agriculture Law No. 44 (2002) and the Environment Protection Law No. 6 (2017) provide the primary framework for wildlife protection. The Royal Society for the Conservation of Nature (RSCN), established in 1966 under the patronage of King Hussein, manages 12 nature reserves covering approximately 1,500 sq km. The RSCN's Shaumari Wildlife Reserve has been instrumental in reintroducing the Arabian oryx (declared extinct in the wild in 1972, now with over 1,200 globally). The Dana Biosphere Reserve hosts populations of Nubian ibex, sand cats, and Blanford's foxes. Article 47 of the Agriculture Law prohibits hunting without permits, with penalties including fines up to JOD 5,000 and confiscation of equipment. Jordan ratified CITES in 1978 and the Convention on Biological Diversity in 1993. The Environmental Police force, established under the Public Security Directorate, assists in enforcement. Jordan has no standalone animal welfare law, though the Jordanian Society for the Prevention of Cruelty to Animals (JSPCA) has advocated for such legislation. The RSCN's community-based conservation model, employing local communities in ecotourism operations, is recognized as a global best practice by IUCN.",
    lawName: "Agriculture Law / Environment Protection Law",
    article: "Various",
    year: 2002,
    tags: ["wildlife", "RSCN", "Arabian oryx", "conservation"],
  },

  // ==================== OMAN ====================
  {
    id: "om-001",
    country: "Oman",
    countryCode: "OM",
    category: "Wildlife Protection",
    topic: "Nature conservation and Arabian oryx",
    summary: "Pioneer in Arabian oryx reintroduction with strong conservation tradition.",
    details:
      "Oman's Nature Conservation Law (Royal Decree 114/2001) provides the primary framework for wildlife and habitat protection, administered by the Environment Authority (formerly the Ministry of Environment and Climate Affairs). The law establishes categories of protected areas including nature reserves, natural scenic areas, and areas of special scientific interest. The Arabian Oryx Sanctuary was designated in 1994 as the first natural UNESCO World Heritage Site in the Middle East (later delisted in 2007 following boundary reductions). Oman's Ras al-Jinz Turtle Reserve protects nesting sites for green turtles, loggerhead turtles, and the critically endangered hawksbill turtle, hosting approximately 20,000 nesting females annually, one of the largest concentrations globally. The Royal Decree on Conservation of the Environment and Prevention of Pollution (Royal Decree 114/2001) provides penalties including fines of OMR 5,000-20,000 and/or imprisonment for harming protected species. Oman ratified CITES in 2008 and the Convention on Biological Diversity in 1995. The Diwan of Royal Court's Office for Conservation of the Environment manages flagship programs including the Arabian Leopard Recovery Programme.",
    lawName: "Nature Conservation Law (Royal Decree 114/2001)",
    article: "Various",
    year: 2001,
    tags: ["Arabian oryx", "UNESCO", "turtles", "conservation"],
  },

  // ==================== QATAR ====================
  {
    id: "qa-001",
    country: "Qatar",
    countryCode: "QA",
    category: "Anti-Cruelty",
    topic: "Animal resource management",
    summary: "Animal welfare addressed through resource management laws.",
    details:
      "Qatar's Law No. 2 of 2004 on Animal Resources addresses animal health, disease control, import/export of live animals, and basic welfare provisions. The law is enforced by the Ministry of Municipality and Environment through the Department of Animal Resources. Additional wildlife protections are provided under the Environmental Protection Law No. 30 (2002), which regulates biodiversity conservation and establishes protected areas. Penalties for violations include fines up to QAR 100,000 and/or imprisonment. Qatar has developed stricter welfare standards for livestock in line with Gulf Standardization Organization (GSO) halal requirements, particularly for the annual Eid al-Adha season when approximately 500,000 animals are slaughtered. The Qatar National Vision 2030 includes environmental sustainability goals encompassing wildlife protection. Qatar hosts the Al Reem Biosphere Reserve, one of the largest protected areas in the Gulf region, supporting Arabian oryx and gazelle populations. The Qatar Animal Welfare Society (QAWS), established in 2003, provides stray animal rescue and TNR programs. Qatar has invested in the development of camel welfare standards, recognizing the cultural significance of camel racing and breeding, including the prohibition of child camel jockeys replaced by robot jockeys since 2005.",
    lawName: "Law No. 2 on Animal Resources",
    article: "Various",
    year: 2004,
    tags: ["animal resources", "welfare", "livestock"],
  },

  // ==================== YEMEN ====================
  {
    id: "ye-001",
    country: "Yemen",
    countryCode: "YE",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare legislation; limited by ongoing conflict.",
    details:
      "Yemen has no dedicated animal welfare or anti-cruelty legislation. The Environmental Protection Law (Law No. 26 of 1995) includes provisions for biodiversity conservation and wildlife protection under Chapter 4, but the ongoing civil conflict since 2014 has rendered enforcement virtually non-existent. The Ministry of Agriculture and Irrigation previously managed livestock health programs under the Veterinary Services Law, but institutional capacity has collapsed in most areas. Yemen hosts important biodiversity including the Socotra Archipelago, a UNESCO World Heritage Site (2008) with over 700 endemic plant and animal species, including the dragon's blood tree and Socotra cormorant. Prior to the conflict, Yemen had acceded to CITES (1997) and the Convention on Biological Diversity (1996). The conflict has led to severe deterioration of animal welfare conditions, with an estimated 20 million livestock affected by feed shortages and veterinary service collapse. International organizations including FAO and ICRC have attempted emergency livestock vaccination campaigns. No animal welfare NGOs currently operate within Yemen due to security conditions.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "conflict", "no legislation"],
  },

  // ==================== SYRIA ====================
  {
    id: "sy-001",
    country: "Syria",
    countryCode: "SY",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare law; limited by conflict.",
    details:
      "Syria has no dedicated animal welfare or anti-cruelty statute. Prior to the conflict, the Environmental Protection Law (Legislative Decree No. 12 of 2012) and the Agricultural Relations Law (1958, amended 2004) provided limited protections for wildlife and livestock. The Ministry of State for Environmental Affairs, established in 2009, was responsible for biodiversity conservation. Syria designated 29 protected areas including the Al-Shouf Cedar Nature Reserve and Palmyra Steppe protected zone, covering approximately 1% of national territory. The ongoing conflict since 2011 has devastated institutional capacity and enforcement. The Damascus Zoo, home to endangered Arabian oryx and other species, suffered extensive damage during fighting. Syria ratified CITES in 2003 and the Convention on Biological Diversity in 1996. The conflict has had catastrophic impacts on both wildlife and domestic animals: an estimated 50% of livestock were lost between 2011 and 2020. International humanitarian organizations including the FAO have implemented emergency livestock support programs in accessible areas. The Four Paws organization conducted animal rescue operations in conflict zones, evacuating animals from damaged zoos and private collections.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "conflict", "no legislation"],
  },

  // ==================== IRAQ ====================
  {
    id: "iq-001",
    country: "Iraq",
    countryCode: "IQ",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare legislation.",
    details:
      "Iraq has no dedicated animal welfare or anti-cruelty statute. Livestock health and disease control are regulated under the Veterinary Law (Law No. 32 of 2013), administered by the General Directorate of Veterinary Services under the Ministry of Agriculture. Environmental Law No. 27 (2009) provides general biodiversity protection provisions but lacks specific animal welfare enforcement mechanisms. The Penal Code (Law No. 111 of 1969) does not contain animal cruelty provisions. Iraq's Marshlands (Ahwar), inscribed as a UNESCO World Heritage Site in 2016, host important wildlife populations including the endangered smooth-coated otter, Basra reed warbler, and sacred ibis. Iraq signed CITES in 1979. The Kurdistan Region of Iraq operates under separate environmental legislation, with the Board of Environment of Kurdistan managing wildlife protection. Post-2003 conflict and subsequent instability severely impacted wildlife and zoo animal welfare, notably the Baghdad Zoo crisis (2003) documented by Lawrence Anthony. Iraqi animal welfare advocates, including the Kurdistan Organization for Animal Rights Protection (KOARP) established in 2013, have lobbied for national animal welfare legislation. The Iraqi Animal Rescue organization operates in Baghdad providing stray animal management.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "no legislation", "advocacy"],
  },

  // ==================== PALESTINE ====================
  {
    id: "ps-001",
    country: "Palestine",
    countryCode: "PS",
    category: "Anti-Cruelty",
    topic: "Animal welfare gap",
    summary: "No dedicated animal welfare legislation.",
    details:
      "Palestine has no dedicated animal welfare or anti-cruelty statute. The Palestinian Environmental Law (Law No. 7 of 1999) provides general environmental protection provisions under the Palestinian Environmental Quality Authority (EQA), including limited biodiversity conservation measures, but does not specifically address animal welfare or cruelty. The Agriculture Law (Law No. 2 of 2003) regulates veterinary services, livestock disease control, and food safety under the Ministry of Agriculture. The Palestinian Penal Code (based on the 1936 British Mandate Criminal Ordinance in Gaza and the 1960 Jordanian Penal Code in the West Bank) does not contain animal cruelty provisions. The Palestine Wildlife Society (established 2000) has documented over 530 bird species and advocates for biodiversity conservation. Animal welfare organizations including the Palestinian Animal League (2011), the SPCA Palestine, and Four Paws International operate rescue and sterilization programs in the West Bank and Gaza, though access restrictions significantly limit operations. The Qalqilya Zoo and Biblical Zoo initiatives promote wildlife education. The political situation severely complicates legislative progress on animal welfare.",
    lawName: "No dedicated law",
    article: "N/A",
    year: 0,
    tags: ["gap", "no legislation"],
  },

  // ==================== GEORGIA ====================
  {
    id: "ge-001",
    country: "Georgia",
    countryCode: "GE",
    category: "Anti-Cruelty",
    topic: "Animal welfare developments",
    summary: "Growing legislative efforts for animal welfare.",
    details:
      "Georgia has been developing animal welfare legislation, with the Parliament adopting the Law on the Protection of Animals (2022) after years of advocacy. Previously, the Law on Veterinary Medicine (2012) provided limited protections focused on disease control and food safety under the National Food Agency. The new 2022 law establishes basic welfare standards for companion animals, mandates humane stray animal management through TNR programs, and prohibits cruelty with penalties including fines of GEL 500-5,000 (approximately US$185-1,850) and potential criminal liability. The Tbilisi Municipal Animal Shelter, established in 2016, conducts TNR operations for the city's estimated 60,000 stray dogs. Georgia ratified the European Convention for the Protection of Pet Animals in 2022, committing to European welfare standards. The Law on the Red List and Red Book (2003) protects endangered species including the Caucasian leopard, Bezoar ibex, and East Caucasian tur. Georgia's protected areas cover approximately 10% of national territory. International organizations including FOUR PAWS and the Georgian Society for the Protection of Animals (GSPA) have been instrumental in shaping legislation and operating TNR programs in Tbilisi, Batumi, and Kutaisi.",
    lawName: "Law on Veterinary Medicine / proposed Animal Welfare Bill",
    article: "Various",
    year: 2012,
    tags: ["reform pending", "stray animals", "veterinary"],
  },

  // ==================== ARMENIA ====================
  {
    id: "am-001",
    country: "Armenia",
    countryCode: "AM",
    category: "Anti-Cruelty",
    topic: "Stray animal management and welfare",
    summary: "Law on Fauna with 2020 stray animal management law.",
    details:
      "Armenia adopted the Law on Keeping and Maintaining Homeless Animals in 2020, mandating humane management through TNR (trap-neuter-return) methods and prohibiting mass culling of stray animals. The law requires municipal authorities to establish registered shelters, conduct sterilization campaigns, and maintain stray animal databases. The Law on Fauna (2000, amended 2017) protects wildlife under the Ministry of Environment, establishing the Red Book of Armenia listing over 450 endangered species including the Caucasian leopard, Armenian mouflon, bezoar goat, and Armenian viper. Penalties under the Criminal Code Article 286 include fines up to AMD 200,000 and imprisonment up to 2 years for illegal hunting of protected species. Armenia ratified CITES in 2008 and the Bern Convention on European Wildlife in 2008. The Yerevan Municipality operates a TNR program sterilizing approximately 5,000 stray dogs annually. International organizations including the Armenian Society for the Protection of Animals (ASPA) and Yerevan-based Save the Animals NGO provide rescue and adoption services. Armenia's animal welfare framework remains developing, with advocates pushing for a comprehensive animal protection law covering companion animal standards, anti-cruelty provisions, and farm animal welfare.",
    lawName: "Law on Fauna / Stray Animal Management Law",
    article: "Various",
    year: 2000,
    lastAmended: 2020,
    tags: ["stray animals", "humane management", "wildlife"],
  },

  // ==================== AZERBAIJAN ====================
  {
    id: "az-001",
    country: "Azerbaijan",
    countryCode: "AZ",
    category: "Wildlife Protection",
    topic: "Animal world protection",
    summary: "Law on the Animal World provides wildlife protections.",
    details:
      "The Law on the Animal World (1999, amended 2014) regulates wildlife conservation in Azerbaijan, administered by the Ministry of Ecology and Natural Resources. The law classifies species into protection categories listed in Azerbaijan's Red Book (2013), which includes 223 animal species, notably the Caucasian leopard (Panthera pardus ciscaucasica, estimated 10-13 in Azerbaijan), goitered gazelle, East Caucasian tur, and striped hyena. Articles 30-35 prohibit unauthorized hunting, capture, and trade of protected species, with penalties under the Administrative Offenses Code including fines of AZN 1,000-5,000 and the Criminal Code Article 247 providing up to 3 years imprisonment for serious wildlife offenses. Azerbaijan manages 10 national parks, 11 state nature reserves, and 24 state wildlife sanctuaries covering approximately 10% of national territory. Azerbaijan ratified CITES in 1998 and the Convention on Biological Diversity in 2000. A draft law on the responsible keeping and treatment of companion animals has been under parliamentary discussion since 2019, driven by growing urban stray animal populations in Baku. The IDEA (International Dialogue for Environmental Action) campaign led by VP Leyla Aliyeva has promoted wildlife conservation awareness.",
    lawName: "Law on the Animal World",
    article: "Various",
    year: 1999,
    tags: ["wildlife", "Caucasian leopard", "conservation"],
  },

  // ==================== CYPRUS ====================
  {
    id: "cy-001",
    country: "Cyprus",
    countryCode: "CY",
    category: "Anti-Cruelty",
    topic: "Animal welfare law (EU-aligned)",
    summary: "Comprehensive animal welfare aligned with EU standards.",
    details:
      "Cyprus follows EU animal welfare directives through the Protection and Welfare of Animals Law (N. 46(I)/1994), which provides comprehensive protections including farm animal welfare, pet welfare, and wildlife conservation. As an EU member state since 2004, Cyprus implements all EU animal welfare regulations including Council Directive 98/58/EC on farm animals and Regulation (EC) 1/2005 on animal transport. The Veterinary Services of the Ministry of Agriculture enforce these provisions. Penalties were significantly increased by the 2020 amendments to deter animal cruelty and illegal poisoning of animals.",
    lawName: "Protection and Welfare of Animals Law",
    article: "Various",
    year: 1994,
    lastAmended: 2020,
    penaltyMax: "Up to 3 years imprisonment and/or €50,000 fine",
    tags: ["EU standards", "comprehensive", "modern"],
  },

  // ==================== UNITED KINGDOM ====================
  {
    id: "gb-001",
    country: "United Kingdom",
    countryCode: "GB",
    category: "Anti-Cruelty",
    topic: "Animal Welfare Act 2006",
    summary:
      "Comprehensive animal welfare legislation establishing duty of care and criminalizing cruelty.",
    details:
      "The Animal Welfare Act 2006 (c.45) is the primary animal welfare legislation in England and Wales, replacing the Protection of Animals Act 1911. Sections 4-8 criminalize cruelty and unnecessary suffering, while Section 9 imposes a statutory duty of care requiring owners to provide for five welfare needs: suitable environment, appropriate diet, ability to exhibit normal behaviour, appropriate companionship, and protection from pain, suffering, injury, and disease. Enforcement is carried out by DEFRA, local authorities, and RSPCA inspectors acting as private prosecutors. The Animal Welfare (Sentencing) Act 2021 increased maximum penalties from 6 months to 5 years imprisonment and unlimited fines, following campaigns highlighting inadequate sentences. The landmark case R v. Carpenter (2017) established precedent for custodial sentences in serious neglect cases. The Act transposed elements of Council Directive 98/58/EC on farm animal welfare. Scotland has separate equivalent legislation under the Animal Health and Welfare (Scotland) Act 2006.",
    lawName: "Animal Welfare Act 2006",
    article: "Sections 4-9",
    year: 2006,
    lastAmended: 2022,
    penaltyMin: "Unlimited fine",
    penaltyMax:
      "Up to 5 years imprisonment (increased from 6 months by the Animal Welfare (Sentencing) Act 2021)",
    tags: ["duty of care", "cruelty", "welfare", "sentencing"],
  },
  {
    id: "gb-002",
    country: "United Kingdom",
    countryCode: "GB",
    category: "Wildlife Protection",
    topic: "Wildlife and Countryside Act 1981",
    summary:
      "Primary legislation protecting wild birds, animals, and plants in the UK.",
    details:
      "The Wildlife and Countryside Act 1981 (c.69) is the principal UK legislation for wildlife protection, implementing the EU Birds Directive (79/409/EEC) and Bern Convention. Part I (Sections 1-27) makes it an offence to kill, injure, or take any wild bird, destroy nests, or take eggs, with Schedule 1 listing specially protected species including peregrine falcons and red kites. Part II designates Sites of Special Scientific Interest (SSSIs). Enforcement falls to Natural England, NatureScot, and Natural Resources Wales, with police wildlife crime officers. Penalties include up to 6 months imprisonment and unlimited fines per offence. The Countryside and Rights of Way Act 2000 strengthened SSSI protections. Notable cases include R v. Sissen (2001) on egg collecting and RSPB v. various defendants in raptor persecution prosecutions. Post-Brexit, retained EU law maintains Habitats Directive protections, though conservation groups have raised concerns about potential regulatory divergence from EU standards.",
    lawName: "Wildlife and Countryside Act 1981",
    article: "Parts I-III",
    year: 1981,
    lastAmended: 2019,
    penaltyMax: "Up to 6 months imprisonment and/or unlimited fine",
    tags: ["wildlife", "birds", "conservation", "SSSI"],
  },
  {
    id: "gb-003",
    country: "United Kingdom",
    countryCode: "GB",
    category: "Companion Animals",
    topic: "Animal Welfare (Sentience) Act 2022",
    summary:
      "Formally recognizes animals as sentient beings and establishes the Animal Sentience Committee.",
    details:
      "The Animal Welfare (Sentience) Act 2022 (c.22) formally enshrines in UK law the recognition that animals are sentient beings capable of experiencing feelings such as pain, distress, and joy. Sections 1-2 establish the Animal Sentience Committee (ASC), an independent body empowered to scrutinize any government policy and issue reports on whether ministers have had 'all due regard' to animal welfare in decision-making. The Act covers all vertebrates and, via secondary legislation, extends to decapod crustaceans and cephalopod molluscs, following the findings of the Birch et al. (2021) LSE report on sentience. Enforced through DEFRA, the ASC published its first reports in 2023 examining trade policy impacts on animal welfare. The Act replaced the EU Treaty of Lisbon Article 13 TFEU recognition of sentience that was lost following Brexit. Critics argue the Committee lacks binding enforcement power, while supporters view it as a world-leading institutional mechanism for mainstreaming animal welfare across government.",
    lawName: "Animal Welfare (Sentience) Act 2022",
    article: "Sections 1-5",
    year: 2022,
    tags: ["sentience", "committee", "policy"],
  },

  // ==================== GERMANY ====================
  {
    id: "de-001",
    country: "Germany",
    countryCode: "DE",
    category: "Anti-Cruelty",
    topic: "Tierschutzgesetz (Animal Welfare Act)",
    summary:
      "Comprehensive animal welfare law protecting animals as fellow creatures.",
    details:
      "Germany's Tierschutzgesetz (TierSchG, enacted 24 July 1972, BGBl. I S. 1277) is among Europe's most comprehensive animal welfare statutes. Section 1 declares its purpose: to protect the life and well-being of animals as 'Mitgeschöpfe' (fellow creatures). Section 17 criminalizes killing a vertebrate without reasonable cause or causing prolonged suffering, punishable by up to 3 years imprisonment. Administrative violations under Section 18 carry fines up to EUR 25,000. Enforcement is conducted by the Veterinärämter (veterinary offices) at Länder level and the Bundesministerium für Ernährung und Landwirtschaft (BMEL) federally. The law implements Council Directive 98/58/EC and Regulation (EC) 1/2005 on transport. Major amendments in 2013 banned piglet castration without anaesthesia (delayed to 2021). The BVerwG in its 2019 ruling on male chick culling (BVerwG 3 C 28.16) held that economic interests alone do not justify killing, later codified by the 2021 ban on chick shredding. Germany's standards consistently exceed EU minimums.",
    lawName: "Tierschutzgesetz",
    article: "Sections 1-21",
    year: 1972,
    lastAmended: 2022,
    penaltyMin: "Fine up to 25,000 EUR",
    penaltyMax: "Up to 3 years imprisonment for criminal violations",
    tags: ["welfare", "fellow creatures", "comprehensive"],
  },
  {
    id: "de-002",
    country: "Germany",
    countryCode: "DE",
    category: "Anti-Cruelty",
    topic: "Constitutional protection of animals (Article 20a Basic Law)",
    summary:
      "Germany became one of the first countries to enshrine animal protection in its constitution.",
    details:
      "In 2002, Germany amended Article 20a of the Grundgesetz (Basic Law, BGBl. I S. 2862) to add 'und die Tiere' (and the animals) as a Staatsziel (state objective), making it one of the first nations worldwide to constitutionally protect animals. This amendment means animal welfare must be weighed against other fundamental rights including freedom of research (Article 5(3)) and religious freedom (Article 4). The Federal Constitutional Court (BVerfG) applied this balance in its landmark 2002 ritual slaughter decision (BVerfGE 104, 337), holding that religious slaughter rights must be reconciled with animal protection. The BVerfG also referenced Article 20a in its 2019 caged hen ruling. Enforcement occurs through constitutional review by the BVerfG and administrative courts. The amendment was driven by cross-party support following BSE and foot-and-mouth crises. Compared to Switzerland's constitutional Article 80 on animal protection, Germany's provision is broader as a general state objective. The provision has influenced subsequent constitutional reforms in Luxembourg (2007) and Austria.",
    lawName: "Grundgesetz (Basic Law)",
    article: "Article 20a",
    year: 2002,
    tags: ["constitution", "fundamental rights", "Staatsziel"],
  },
  {
    id: "de-003",
    country: "Germany",
    countryCode: "DE",
    category: "Farm Animals",
    topic: "Tierschutz-Nutztierhaltungsverordnung",
    summary:
      "Regulation on the welfare of farm animals specifying housing and care standards.",
    details:
      "The Tierschutz-Nutztierhaltungsverordnung (TierSchNutztV, BGBl. I S. 2043, enacted 2001) sets detailed minimum standards for keeping farm animals. For laying hens, it mandates 800 cm² per bird in enriched cages (exceeding Council Directive 1999/74/EC minimums). For pigs, it implements Council Directive 2008/120/EC with stricter space allowances: at least 0.75 m² per fattening pig up to 110 kg. Calves must be group-housed after 8 weeks per Council Directive 2008/119/EC. Enforcement falls to the Länder veterinary authorities with inspections coordinated through the Federal Office of Consumer Protection (BVL). The 2021 amendment introduced mandatory outdoor access provisions for certain pig categories, and the Borchert Commission recommended transitioning to higher welfare tiers by 2040. Penalties for violations reach EUR 25,000 under Section 18 TierSchG. The OVG Münster (2020) ruled that prolonged tethering of dairy cattle violated the regulation. Germany's farm animal standards are among Europe's highest, though critics note enforcement gaps across the 16 Länder.",
    lawName: "Tierschutz-Nutztierhaltungsverordnung",
    article: "Various sections",
    year: 2001,
    lastAmended: 2021,
    penaltyMax: "Fine up to 25,000 EUR",
    tags: ["farm animals", "housing", "husbandry standards"],
  },

  // ==================== FRANCE ====================
  {
    id: "fr-001",
    country: "France",
    countryCode: "FR",
    category: "Anti-Cruelty",
    topic: "Code Penal - Animal cruelty provisions",
    summary:
      "Criminal penalties for acts of cruelty and serious abuse against animals.",
    details:
      "Articles 521-1 and 521-2 of the Code Pénal criminalize acts of cruelty (sévices graves) and serious mistreatment (actes de cruauté) against domestic, tamed, or captive animals. Loi n°2021-1539 of 30 November 2021 significantly strengthened these provisions, increasing maximum penalties to 5 years imprisonment and EUR 75,000 fine for cruelty causing death, and criminalizing sexual abuse of animals (Article 521-1-1) and zoophilic pornography (Article 521-1-2). The Direction Départementale de la Protection des Populations (DDPP) and gendarmerie enforce these provisions. Before the 2021 reform, the Cour de Cassation in Crim. 13 January 2004 (No. 03-85.801) established that a single act of violence suffices for cruelty charges. France processes approximately 12,000 animal cruelty complaints annually, though conviction rates remain low. The provisions implement Article 13 TFEU sentience obligations. Compared to the UK (5 years maximum) and Germany (3 years), France's penalties are now among Europe's highest.",
    lawName: "Code Penal",
    article: "Articles 521-1, 521-2",
    year: 1994,
    lastAmended: 2021,
    penaltyMin: "30,000 EUR fine",
    penaltyMax:
      "Up to 5 years imprisonment and 75,000 EUR fine (2021 amendment)",
    tags: ["cruelty", "criminal", "penalties"],
  },
  {
    id: "fr-002",
    country: "France",
    countryCode: "FR",
    category: "Companion Animals",
    topic: "Recognition of animal sentience in Civil Code",
    summary:
      "Animals recognized as sentient beings in French Civil Code since 2015.",
    details:
      "Loi n°2015-177 of 16 February 2015 amended Article 515-14 of the Code Civil to declare that 'les animaux sont des êtres vivants doués de sensibilité' (animals are living beings endowed with sentience), creating a new legal category between persons and property. While animals remain subject to the property regime (régime des biens) where no specific law applies, this reform by the Assemblée Nationale marked a historic departure from the Napoleonic Code's classification of animals as movable property (biens meubles) under former Article 528. The amendment built on existing protections in the Code Rural (Article L214-1, enacted 1976) and implemented France's obligations under Article 13 TFEU. The Cour de Cassation has since referenced Article 515-14 in custody disputes involving companion animals (Civ. 1ère, 9 December 2015). The reform inspired similar amendments in Portugal (2017), Spain (2021), and Belgium. Critics including the Fondation 30 Millions d'Amis argue the reform remains insufficient as animals still lack true legal personhood and can be commercially traded.",
    lawName: "Loi 2015-177",
    article: "Article 515-14 Code Civil",
    year: 2015,
    tags: ["sentience", "civil code", "legal status"],
  },
  {
    id: "fr-003",
    country: "France",
    countryCode: "FR",
    category: "Wildlife Protection",
    topic: "Loi relative a la protection de la nature",
    summary:
      "Framework law for wildlife and nature protection in France.",
    details:
      "Loi n°76-629 of 10 July 1976 relative à la protection de la nature established France's foundational framework for wildlife conservation, now codified in the Code de l'environnement at Articles L411-1 et seq. Article L411-1 prohibits destruction, capture, and disturbance of protected species listed by arrêté ministériel, implementing the EU Habitats Directive (92/43/EEC) and Birds Directive (2009/147/EC). France hosts over 900 Natura 2000 sites covering 12.9% of metropolitan territory. Enforcement is carried out by the Office Français de la Biodiversité (OFB, created 2020, merging ONCFS and AFB). Penalties under Article L415-3 include up to 3 years imprisonment and EUR 150,000 fine. The Conseil d'État in its 2018 ruling (CE, 8 December 2018, No. 419918) upheld strict species protection against development interests. Loi n°2016-1087 on biodiversity (Loi Biodiversité) strengthened the framework by introducing the principle of zero net biodiversity loss and creating the ecological prejudice remedy (préjudice écologique, Article 1246 Code Civil).",
    lawName: "Loi 76-629 relative a la protection de la nature",
    article: "Various (now Code de l'environnement L411-1 et seq.)",
    year: 1976,
    lastAmended: 2016,
    tags: ["wildlife", "nature", "protected species"],
  },

  // ==================== ITALY ====================
  {
    id: "it-001",
    country: "Italy",
    countryCode: "IT",
    category: "Anti-Cruelty",
    topic: "Criminal penalties for animal cruelty (Legge 189/2004)",
    summary:
      "Criminal law provisions against animal cruelty, abandonment, and animal fighting.",
    details:
      "Legge 20 luglio 2004, n. 189 introduced Title IX-bis ('Dei delitti contro il sentimento per gli animali') to the Codice Penale, marking Italy's first dedicated criminal provisions for animal welfare. Article 544-bis punishes killing an animal out of cruelty or without necessity with 4 months to 2 years imprisonment. Article 544-ter criminalizes mistreatment causing injury or death with 3-18 months imprisonment and EUR 5,000-30,000 fine. Article 544-quater penalizes organizing animal fighting with 1-3 years imprisonment and EUR 50,000-160,000 fine. Enforcement is carried out by the Carabinieri (NAS and CITES units), Corpo Forestale dello Stato, and local veterinary services (ASL). The Corte di Cassazione in Cass. Pen. Sez. III, 17 September 2014 (n. 38034) clarified that abandonment under Article 727 applies even to leaving animals in inadequate conditions. Italy implements Council Directive 98/58/EC through D.Lgs. 146/2001. Compared to other EU states, Italy's criminal approach is distinctive, though enforcement varies significantly between northern and southern regions.",
    lawName: "Legge 20 luglio 2004, n. 189",
    article: "Articles 544-bis to 544-sexies Codice Penale",
    year: 2004,
    penaltyMin: "10,000 EUR fine",
    penaltyMax:
      "Up to 3 years imprisonment and 160,000 EUR fine (for animal fighting)",
    tags: ["cruelty", "abandonment", "animal fighting"],
  },
  {
    id: "it-002",
    country: "Italy",
    countryCode: "IT",
    category: "Anti-Cruelty",
    topic: "Constitutional protection of animals (2022 amendment)",
    summary:
      "Italy amended its constitution to include animal and environmental protection.",
    details:
      "Constitutional Law No. 1 of 11 February 2022 (Legge costituzionale n. 1/2022, GU n. 44) amended Articles 9 and 41 of the Costituzione della Repubblica Italiana. The new Article 9, paragraph 3 states: 'La legge dello Stato disciplina i modi e le forme di tutela degli animali' (State law regulates the ways and forms of animal protection). Article 41 was amended to declare that economic activity may not damage health or the environment. The reform passed with two-thirds supermajority in both chambers of Parliament, avoiding the need for a confirmatory referendum. Italy joins Germany (Article 20a GG, 2002), Austria, and Switzerland among European nations with constitutional animal protection. The Corte Costituzionale has not yet issued major rulings interpreting the new provision, but legal scholars anticipate it will strengthen judicial review of animal welfare legislation. The amendment was supported by the LAV (Lega Anti Vivisezione) and Enpa. Implementation remains pending through enabling legislation. Compared to Germany's Staatsziel model, Italy's provision is more specifically directive.",
    lawName: "Costituzione della Repubblica Italiana",
    article: "Article 9, paragraph 3",
    year: 2022,
    tags: ["constitution", "environment", "biodiversity"],
  },
  {
    id: "it-003",
    country: "Italy",
    countryCode: "IT",
    category: "Companion Animals",
    topic: "Regulation of companion animals and strays",
    summary:
      "National framework law on companion animals and stray prevention.",
    details:
      "Legge 14 agosto 1991, n. 281 ('Legge quadro in materia di animali di affezione e prevenzione del randagismo') established Italy's national framework for companion animal protection and stray prevention, making Italy one of the first European countries to enact a comprehensive no-kill policy for healthy stray dogs. Article 2 prohibits euthanasia of shelter dogs except in cases of incurable disease or proven dangerousness, certified by a veterinarian. The law mandates municipalities to establish canili (shelters), implement sterilization programs, and maintain anagrafe canina (dog registries) with mandatory microchipping (expanded by Ordinanza Martini, 2008). Enforcement falls to the ASL veterinary services, Polizia Municipale, and regional authorities. Regions implement the framework law with their own legislation, creating significant regional disparities. The Corte di Cassazione in Cass. Civ. Sez. III, 2017 (n. 25546) held municipalities liable for damages caused by unmanaged strays. Italy's estimated 500,000-700,000 stray dogs remain a challenge, particularly in southern regions. Compared to Romania's more permissive approach, Italy's no-kill model is considered progressive within the EU.",
    lawName: "Legge 14 agosto 1991, n. 281",
    article: "Various",
    year: 1991,
    lastAmended: 2004,
    tags: ["strays", "companion animals", "no-kill", "microchip"],
  },

  // ==================== SPAIN ====================
  {
    id: "es-001",
    country: "Spain",
    countryCode: "ES",
    category: "Anti-Cruelty",
    topic: "National Animal Welfare Act 2023",
    summary:
      "Comprehensive national animal welfare law with strong companion animal protections.",
    details:
      "Ley 7/2023, de 28 de marzo, de protección de los derechos y el bienestar de los animales (BOE n. 75) is Spain's first comprehensive national animal welfare law, replacing a fragmented system of 17 autonomous community laws. Article 25 requires mandatory training courses for dog owners. Article 26 bans the sale of companion animals in pet shops. Article 41 mandates sterilization of cats. Article 31 prohibits keeping wild animals as pets. The law establishes the Sistema Central de Registros de Protección Animal (SIRCPA). Enforcement is carried out by the Dirección General de Derechos de los Animales (created 2020, the first such ministry-level body in Spain) and autonomous community authorities. Infractions range from EUR 500 (minor) to EUR 200,000 (very serious). The law notably excludes bullfighting and hunting dogs from its scope, drawing criticism from animal welfare organizations including PACMA and AnimaNaturalis. Spain implements Council Directive 98/58/EC through Royal Decree 348/2000. Compared to Germany and Austria, Spain's law arrived decades late but is among the EU's most detailed on companion animals.",
    lawName: "Ley 7/2023",
    article: "Various",
    year: 2023,
    penaltyMin: "500 EUR fine (minor infractions)",
    penaltyMax: "Up to 200,000 EUR fine (very serious infractions)",
    tags: ["companion animals", "welfare", "registration", "comprehensive"],
  },
  {
    id: "es-002",
    country: "Spain",
    countryCode: "ES",
    category: "Anti-Cruelty",
    topic: "Criminal Code animal cruelty provisions",
    summary:
      "Penal Code provisions criminalizing animal abuse with enhanced penalties since 2023.",
    details:
      "Ley Orgánica 3/2023, de 28 de marzo (BOE n. 75) reformed the Código Penal by introducing Articles 340 bis through 340 septies, creating a comprehensive criminal framework for animal protection. Article 340 bis criminalizes unjustified animal cruelty causing death with up to 24 months imprisonment and 18-48 months disqualification from animal ownership. Article 340 ter penalizes cruelty causing serious injury with 12-18 months imprisonment. Article 340 quater addresses abandonment of animals in danger with fines and disqualification. Enforcement is carried out by the Guardia Civil's SEPRONA unit (Servicio de Protección de la Naturaleza) and Policía Nacional. The Tribunal Supremo in STS 185/2019 previously interpreted the old Article 337 broadly to include psychological suffering. Spain processes approximately 200,000 animal abandonment cases annually. The reform implements obligations under Article 13 TFEU. Previously, Spain's penal provisions were among Europe's weakest; the 2023 reform brings penalties closer to those in France (5 years) and the UK (5 years), though still below those countries' maximums.",
    lawName: "Codigo Penal (Ley Organica 3/2023)",
    article: "Articles 340 bis, 340 ter",
    year: 2023,
    penaltyMax:
      "Up to 24 months imprisonment for causing death through cruelty",
    tags: ["criminal", "cruelty", "abandonment", "penal code"],
  },
  {
    id: "es-003",
    country: "Spain",
    countryCode: "ES",
    category: "Companion Animals",
    topic: "Animals as sentient beings in Civil Code",
    summary:
      "Spanish Civil Code reformed to recognize animals as sentient beings.",
    details:
      "Ley 17/2021 amended the Spanish Civil Code to recognize animals as sentient beings (seres dotados de sensibilidad), removing them from the legal category of property (bienes muebles). Article 333 bis establishes that animals are living beings endowed with sensitivity whose welfare must be ensured by their owners. This reform significantly impacts family law, requiring courts to consider the welfare of companion animals in divorce custody disputes, and shields pets from seizure in debt enforcement proceedings. Spain joined France, Portugal, and Germany in this civil code modernization trend.",
    lawName: "Ley 17/2021",
    article: "Article 333 bis Codigo Civil",
    year: 2021,
    tags: ["sentience", "civil code", "legal status", "family law"],
  },

  // ==================== NETHERLANDS ====================
  {
    id: "nl-001",
    country: "Netherlands",
    countryCode: "NL",
    category: "Anti-Cruelty",
    topic: "Animals Act (Wet dieren)",
    summary:
      "Comprehensive legislation recognizing the intrinsic value of animals.",
    details:
      "The Wet dieren (Animals Act, Stb. 2011, 345), effective 1 January 2013, is the Netherlands' primary animal welfare legislation, replacing the Gezondheids- en welzijnswet voor dieren (1992). Article 1.3 explicitly recognizes the 'intrinsic value' (intrinsieke waarde) of animals, a groundbreaking legal concept in EU law. Article 2.1 prohibits causing pain or harm to animals without reasonable purpose. The law covers companion, production, and laboratory animals. Enforcement is carried out by the Nederlandse Voedsel- en Warenautoriteit (NVWA) with support from the Landelijke Inspectiedienst Dierenbescherming (animal police, established 2011). Criminal violations under Article 8.11 carry up to 3 years imprisonment; administrative fines reach EUR 83,000. The Raad van State in ECLI:NL:RVS:2019:3216 upheld NVWA enforcement powers in farm inspections. The Act implements Council Directive 98/58/EC and Regulation (EC) 1099/2009 on slaughter. The 2023 amendment strengthened provisions on breeding practices and online animal sales. Compared to Germany's TierSchG, the Dutch law's intrinsic value concept is considered more philosophically advanced.",
    lawName: "Wet dieren",
    article: "Various",
    year: 2011,
    lastAmended: 2023,
    penaltyMax: "Up to 3 years imprisonment",
    tags: ["intrinsic value", "comprehensive", "welfare"],
  },
  {
    id: "nl-002",
    country: "Netherlands",
    countryCode: "NL",
    category: "Farm Animals",
    topic: "Besluit houders van dieren (Decree on Animal Keepers)",
    summary:
      "Detailed regulations for housing and care standards for farm animals.",
    details:
      "The Besluit houders van dieren (Stb. 2014, 210) implements the Wet dieren with detailed requirements for animal keepers across all species. For laying hens, it requires minimum 750 cm² per bird in enriched cages, implementing Council Directive 1999/74/EC. For pigs, it mandates group housing for sows from 4 weeks after service per Directive 2008/120/EC, with the Netherlands exceeding minimums on enrichment materials. For broilers, maximum stocking density is 42 kg/m² under Directive 2007/43/EC. The NVWA conducts over 10,000 annual farm inspections. Administrative fines for violations range from EUR 500 to EUR 83,000. The Rechtbank Den Haag in ECLI:NL:RBDHA:2021:5337 ruled on minimum welfare standards for dairy cattle housing. The Netherlands, with approximately 100 million farm animals, has committed to halving livestock numbers through the 2023 nitrogen crisis buyout scheme (Nationaal Programma Landelijk Gebied). The Beter Leven quality mark, operated by Dierenbescherming, provides three welfare tiers above legal minimums. Dutch standards generally exceed EU minimums but face criticism from Wakker Dier and other NGOs for permitting intensive practices in pig and poultry sectors.",
    lawName: "Besluit houders van dieren",
    article: "Various",
    year: 2014,
    lastAmended: 2023,
    tags: ["farm animals", "housing standards", "animal keepers"],
  },
  {
    id: "nl-003",
    country: "Netherlands",
    countryCode: "NL",
    category: "Wildlife Protection",
    topic: "Wet natuurbescherming (Nature Conservation Act)",
    summary: "Comprehensive nature and wildlife protection legislation.",
    details:
      "The Wet natuurbescherming (Nature Conservation Act, Stb. 2016, 34) consolidated three earlier laws (Natuurbeschermingswet 1998, Flora- en faunawet, Boswet) and implements the EU Birds Directive (2009/147/EC) and Habitats Directive (92/43/EEC). Chapter 3 protects over 500 wild species from killing, capturing, or deliberate disturbance, while Chapter 2 establishes 161 Natura 2000 areas covering approximately 15% of Dutch territory. Enforcement falls to the NVWA, Rijksdienst voor Ondernemend Nederland (RVO), and provincial authorities. Penalties include up to 6 years imprisonment under the Wet op de economische delicten. The Raad van State's landmark nitrogen ruling (ECLI:NL:RVS:2019:1603, PAS-uitspraak) invalidated the national nitrogen approach, halting thousands of construction and farming projects near Natura 2000 sites. This decision triggered a national crisis and accelerated the livestock reduction program. The Netherlands also hosts key populations of harbour seals, spoonbills, and Eurasian oystercatchers. Compared to Germany's Bundesnaturschutzgesetz, the Dutch law is notable for its strict application of the precautionary principle in Natura 2000 permitting.",
    lawName: "Wet natuurbescherming",
    article: "Various",
    year: 2017,
    lastAmended: 2023,
    tags: ["wildlife", "Natura 2000", "habitats", "birds directive"],
  },

  // ==================== SWEDEN ====================
  {
    id: "se-001",
    country: "Sweden",
    countryCode: "SE",
    category: "Anti-Cruelty",
    topic: "Djurskyddslag (Animal Welfare Act 2018)",
    summary:
      "One of Europe's strongest animal welfare laws with comprehensive protections.",
    details:
      "Sweden's Djurskyddslag (2018:1192, SFS 2018:1192) replaced the pioneering 1988 Act and maintains Sweden's position as a global animal welfare leader. Chapter 2, Section 2 mandates that animals shall be treated well and protected from unnecessary suffering and disease. Section 4 requires that animals have the opportunity to behave naturally (naturligt beteende), a uniquely strong provision in EU context. Enforcement is carried out by the Jordbruksverket (Swedish Board of Agriculture) and 21 county administrative boards (Länsstyrelser) with approximately 250 animal welfare inspectors. Criminal violations under Chapter 10 carry up to 2 years imprisonment; aggravated offenses up to 4 years. The Högsta Domstolen (Supreme Court) in NJA 2016 s. 453 clarified the standard for 'unnecessary suffering.' Sweden banned antibiotic growth promoters in 1986, three decades before the EU ban under Regulation (EC) 1831/2003. The law implements Council Directive 98/58/EC but significantly exceeds EU minimums. Sweden was among the first to ratify the European Convention for the Protection of Animals kept for Farming Purposes (ETS No. 087). Compared to the UK and Germany, Sweden's natural behaviour requirement is considered the strongest in Europe.",
    lawName: "Djurskyddslag (2018:1192)",
    article: "Various chapters",
    year: 2018,
    penaltyMax: "Up to 2 years imprisonment",
    tags: ["welfare", "natural behaviour", "progressive"],
  },
  {
    id: "se-002",
    country: "Sweden",
    countryCode: "SE",
    category: "Farm Animals",
    topic: "Farm animal welfare regulations",
    summary:
      "Strict regulations requiring natural behaviour opportunities for farm animals.",
    details:
      "Sweden maintains the EU's strictest farm animal welfare standards through the Djurskyddsförordning (2019:66) and Jordbruksverkets föreskrifter. Chapter 5 of SJVFS 2019:18 mandates summer pasture access for all dairy and beef cattle from April to October, a requirement unique in the EU. Sow gestation crates were banned in 1988 under the original Djurskyddslag, decades before Directive 2008/120/EC partially restricted them. Tail docking of pigs is prohibited without exception (compared to the EU allowance under Directive 2008/120/EC, Annex I, Chapter I). Sweden banned antibiotics as growth promoters in 1986 via the Foderlag (1985:295), 20 years before the EU ban under Regulation (EC) 1831/2003, resulting in Sweden having the EU's lowest antimicrobial usage in livestock. Enforcement is by the Länsstyrelser, with Jordbruksverket conducting approximately 5,000 farm inspections annually. Fines range from SEK 5,000 to SEK 500,000. The Kammarrätten in Stockholm (2020) upheld revocation of a cattle farmer's animal-keeping permit for persistent welfare violations. Critics note that Sweden's high standards create competitive disadvantages vis-à-vis imports from countries with weaker welfare provisions.",
    lawName: "Djurskyddslag and Djurskyddsforordning",
    article: "Various",
    year: 2018,
    tags: ["farm animals", "grazing", "antibiotics ban", "sow stalls"],
  },
  {
    id: "se-003",
    country: "Sweden",
    countryCode: "SE",
    category: "Animal Testing",
    topic: "Regulation of animal experimentation",
    summary:
      "Strict controls on animal testing with mandatory ethical review.",
    details:
      "Sweden's regulation of animal experimentation under Chapter 7 of the Djurskyddslag (2018:1192) and Djurskyddsförordning (2019:66) implements EU Directive 2010/63/EU on the protection of animals used for scientific purposes. All experiments require prior approval from one of six regional Djurförsöksetiska nämnder (animal ethics committees), composed of researchers, lay members, and animal welfare representatives. The 3Rs principle (Replace, Reduce, Refine) is legally mandated under Section 7:1. Sweden reports approximately 250,000 animal experiments annually to Jordbruksverket. Violations carry fines or up to 2 years imprisonment. The Kammarrätten in Göteborg (2019) overturned an ethics committee approval for primate experiments, establishing stricter proportionality review. Sweden established its first 3R center (Swedish 3Rs Center at Jordbruksverket) in 2017. Compared to other EU member states, Sweden has among the lowest per-capita rates of animal experimentation and was among the first to ban cosmetic testing. Great ape experiments have been prohibited since 2003, prior to the EU-wide ban under Directive 2010/63/EU, Article 8.",
    lawName: "Djurskyddslag (2018:1192)",
    article: "Chapter 7",
    year: 2018,
    tags: ["animal testing", "ethics committee", "3Rs"],
  },

  // ==================== NORWAY ====================
  {
    id: "no-001",
    country: "Norway",
    countryCode: "NO",
    category: "Anti-Cruelty",
    topic: "Dyrevelferdsloven (Animal Welfare Act)",
    summary:
      "Progressive animal welfare law recognizing animals' intrinsic value.",
    details:
      "Norway's Dyrevelferdsloven (LOV-2009-06-19-97) is among the world's most progressive animal welfare statutes. Section 3 declares that 'Dyr har egenverdi uavhengig av den nytteverdien de måtte ha for mennesker' (animals have intrinsic value irrespective of their utility to humans), a philosophically groundbreaking provision. Section 14 establishes a duty of care, and Section 37 criminalizes cruelty with up to 3 years imprisonment (1 year for negligence). Fines are set at the court's discretion based on severity. Enforcement is carried out by the Mattilsynet (Norwegian Food Safety Authority) with approximately 1,300 staff across 5 regional offices. Although not an EU member, Norway voluntarily adopts EU animal welfare acquis through the EEA Agreement, including Council Directive 98/58/EC and Regulation (EC) 1/2005. The Høyesterett (Supreme Court) in HR-2016-295-A upheld strict liability for animal welfare violations on farms. Norway was the first country to establish a dedicated animal police unit (dyrepoliti) in 2015 in Rogaland, later expanded nationally. Compared to EU member states, Norway's intrinsic value provision goes further than any EU directive.",
    lawName: "Dyrevelferdsloven",
    article: "Sections 1-38",
    year: 2009,
    penaltyMax:
      "Up to 3 years imprisonment (up to 1 year for negligence)",
    tags: ["intrinsic value", "welfare", "progressive"],
  },
  {
    id: "no-002",
    country: "Norway",
    countryCode: "NO",
    category: "Farm Animals",
    topic: "Regulations on pig, poultry and cattle welfare",
    summary:
      "Detailed farm animal welfare regulations exceeding EU standards.",
    details:
      "Norway maintains strict farm animal welfare regulations through forskrifter (regulations) under the Dyrevelferdsloven. Forskrift om hold av svin (FOR-2003-02-18-175) bans sow gestation crates entirely and mandates straw bedding, exceeding EU Directive 2008/120/EC which allows partial crate use. Forskrift om hold av storfe (FOR-2004-04-22-665) requires outdoor access for cattle during summer months. Through the EEA Agreement, Norway implements EU welfare directives including Regulation (EC) 1099/2009 on slaughter and Directive 2007/43/EC on broiler welfare. The Mattilsynet conducts approximately 7,000 annual farm inspections, with authority to issue immediate compliance orders, fines, or closure. Administrative fines under Matloven range from NOK 5,000 to NOK 500,000 per violation. Norway's farmed salmon welfare regulations (Forskrift om hold av akvakulturdyr, FOR-2008-06-17-822) are uniquely detailed, covering stocking density and water quality for over 400 million fish. The Mattilsynet reported 1,200 animal welfare violations in 2022. Compared to neighbouring Sweden, Norway's standards are comparable, though Sweden's pasture requirements for cattle are considered stricter.",
    lawName: "Various forskrifter (regulations)",
    article: "Various",
    year: 2003,
    lastAmended: 2022,
    tags: ["farm animals", "pigs", "cattle", "poultry"],
  },
  {
    id: "no-003",
    country: "Norway",
    countryCode: "NO",
    category: "Wildlife Protection",
    topic: "Naturmangfoldloven (Nature Diversity Act)",
    summary:
      "Comprehensive biodiversity and wildlife protection legislation.",
    details:
      "The Naturmangfoldloven (LOV-2009-06-19-100, Nature Diversity Act) is Norway's comprehensive biodiversity framework. Section 4 establishes the precautionary principle, Section 5 mandates ecosystem-based management, and Section 8 requires decisions to be based on scientific knowledge. Chapter V protects priority species (prioriterte arter) through individual regulations, including Arctic fox, lesser white-fronted goose, and freshwater pearl mussel. Chapter VI designates protected areas covering approximately 17% of Norway's land area. Enforcement is carried out by the Miljødirektoratet (Norwegian Environment Agency) and Statsforvalteren (County Governors). Violations under Section 75 carry fines or up to 1 year imprisonment (3 years for aggravated offenses). The Høyesterett in HR-2021-1975-S ruled on the scope of habitat protection for wolves, a highly controversial species in Norway. Norway's Rødlista (Red List) identifies 2,752 threatened species. While not subject to EU Habitats Directive (92/43/EEC) or Birds Directive (2009/147/EC), Norway implements Bern Convention obligations and cooperates with EU Natura 2000 through the Emerald Network. Wolf management remains contentious, with the Storting authorizing culling to maintain population at 4-6 breeding pairs.",
    lawName: "Naturmangfoldloven",
    article: "Various chapters",
    year: 2009,
    tags: ["biodiversity", "wildlife", "sustainability"],
  },

  // ==================== DENMARK ====================
  {
    id: "dk-001",
    country: "Denmark",
    countryCode: "DK",
    category: "Anti-Cruelty",
    topic: "Dyrevelfaerdsloven (Animal Welfare Act 2021)",
    summary:
      "Consolidated animal welfare legislation with strengthened protections.",
    details:
      "Denmark's Dyrevelfaerdsloven (2021) consolidated and modernized previous animal welfare legislation, replacing the 1991 Animal Protection Act and the 2003 Animal Husbandry Act. It strengthens penalties for animal cruelty, bans bestiality, and establishes a comprehensive framework for the welfare of all vertebrate animals. The Danish Veterinary and Food Administration (Fodevarestyrelsen) is the primary enforcement agency. The law mandates that animals must be treated responsibly with regard to their physiological, behavioural, and health needs, and grants inspectors the right to enter premises without a warrant.",
    lawName: "Dyrevelfaerdsloven",
    article: "Various",
    year: 2021,
    penaltyMax:
      "Up to 1 year imprisonment (up to 2 years for repeat offenders)",
    tags: ["welfare", "consolidated", "modernized"],
  },
  {
    id: "dk-002",
    country: "Denmark",
    countryCode: "DK",
    category: "Farm Animals",
    topic: "Farm animal welfare standards",
    summary:
      "Progressive standards for farm animal welfare including pig welfare.",
    details:
      "Denmark's farm animal welfare standards, governed by the Dyrevelfaerdsloven (2021) and sector-specific bekendtgorelser, are among the most advanced globally. The Bekendtgorelse om beskyttelse af svin (BEK nr 1742/2006, amended 2020) restricted sow gestation crates from four weeks post-service, preceding EU Directive 2008/120/EC. Tail docking is being phased out under ministerial order. The Fodevarestyrelsen (Danish Veterinary and Food Administration) enforces compliance through unannounced inspections. The Dyrevelfaerdsmaerket (Animal Welfare Label), launched in 2017, provides a three-tier consumer-facing certification system. Violations carry fines from DKK 25,000 and up to one year imprisonment under Section 58, with repeat offenders facing two years. Denmark's 2024 agreement to phase out cage farming by 2035 further advances its position beyond the EU baseline.",
    lawName: "Dyrevelfaerdsloven and associated bekendtgorelser",
    article: "Various",
    year: 2021,
    tags: ["farm animals", "pigs", "welfare label", "farrowing"],
  },

  // ==================== FINLAND ====================
  {
    id: "fi-001",
    country: "Finland",
    countryCode: "FI",
    category: "Anti-Cruelty",
    topic: "Elainten hyvinvointilaki (Animal Welfare Act 2023)",
    summary:
      "Modernized animal welfare law replacing the 1996 legislation.",
    details:
      "Finland's Elainten hyvinvointilaki (Animal Welfare Act, 693/2023), effective January 1, 2024, replaced the Elainsuojelulaki (247/1996) after a decade-long legislative process. The Act expands protected animals to include cephalopods and decapod crustaceans under Section 4, aligning with EU Directive 2010/63. The Ruokavirasto (Finnish Food Authority) serves as primary enforcement agency. Section 85 establishes fines up to EUR 5,000 for administrative violations, while aggravated offenses under Chapter 17, Section 14a of the Rikoslaki (Criminal Code, 39/1889) carry up to two years imprisonment. The law introduces mandatory competence requirements for keepers (Section 21), emergency seizure provisions (Section 70), and prohibitions on unnecessary suffering (Section 6). Finland's fur farming sector faces enhanced standards under Sections 38-42, though a full ban was debated but not enacted.",
    lawName: "Elainten hyvinvointilaki (693/2023)",
    article: "Various",
    year: 2023,
    penaltyMax:
      "Up to 2 years imprisonment for aggravated animal welfare offenses",
    tags: ["welfare", "modernized", "fur farming"],
  },
  {
    id: "fi-002",
    country: "Finland",
    countryCode: "FI",
    category: "Wildlife Protection",
    topic: "Metsastyslaki (Hunting Act)",
    summary:
      "Regulation of hunting and protection of game animals and wildlife.",
    details:
      "Finland's Metsastyslaki (Hunting Act, 615/1993), last amended in 2023, provides a comprehensive framework for hunting and wildlife management. Sections 10-20 establish hunting seasons, bag limits, and mandatory hunter examination (metsastajan tutkinto) administered by the Suomen riistakeskus (Finnish Wildlife Agency). Protected species are designated under Section 5, with humane hunting requirements under Section 33. Large carnivore management uses annual population-based quotas: the wolf population (approximately 300) is managed under EU Habitats Directive (92/43/EEC) constraints, with the CJEU ruling (Case C-674/17) limiting derogation hunting. Violations carry fines or up to two years imprisonment under Section 74, with aggravated offenses (Section 48a, Criminal Code) carrying up to four years. The 2020 Eastern Finland Court of Appeal imposed EUR 15,000 damages per illegally killed wolf.",
    lawName: "Metsastyslaki (615/1993)",
    article: "Various",
    year: 1993,
    lastAmended: 2023,
    tags: ["hunting", "wildlife", "large carnivores"],
  },

  // ==================== AUSTRIA ====================
  {
    id: "at-001",
    country: "Austria",
    countryCode: "AT",
    category: "Anti-Cruelty",
    topic: "Bundestierschutzgesetz (Federal Animal Protection Act)",
    summary:
      "One of Europe's strictest animal welfare laws with comprehensive bans.",
    details:
      "Austria's Tierschutzgesetz (BGBl. I Nr. 118/2004), effective January 1, 2005, last amended 2022 (BGBl. I Nr. 86/2022), is one of Europe's strictest animal welfare laws. Section 5 prohibits causing unjustified pain, suffering, or injury. The law bans wild animals in circuses (Section 27), fur farming (Section 25), battery cages for hens (Section 18, effective 2009, preceding the EU 2012 deadline), and permanent dog tethering (Section 16). The Bundesministerium fuer Soziales, Gesundheit, Pflege und Konsumentenschutz oversees enforcement; Laender authorities conduct inspections. Administrative penalties under Section 38 reach EUR 7,500 (EUR 15,000 for repeat offenses). Criminal cruelty under Section 222 Strafgesetzbuch carries up to two years imprisonment. The Constitutional Court (VfSlg. 17.321/2004) affirmed federal competence over animal welfare. Austria's framework exceeds the EU baseline under Article 13 TFEU.",
    lawName:
      "Bundesgesetz ueber den Schutz der Tiere (Tierschutzgesetz - TSchG)",
    article: "Various",
    year: 2004,
    lastAmended: 2022,
    penaltyMin: "Fine up to 3,750 EUR",
    penaltyMax:
      "Up to 15,000 EUR fine (up to 2 years imprisonment for criminal cruelty under Penal Code)",
    tags: ["strict", "circus ban", "fur farming ban", "battery cage ban"],
  },
  {
    id: "at-002",
    country: "Austria",
    countryCode: "AT",
    category: "Farm Animals",
    topic: "Farm animal housing regulations",
    summary:
      "Detailed regulations for livestock housing exceeding EU standards.",
    details:
      "Austria's 1. Tierhaltungsverordnung (BGBl. II Nr. 485/2004, amended BGBl. II Nr. 151/2022), implementing Section 24 of the Tierschutzgesetz, sets minimum standards for farm animals exceeding EU Directive 98/58/EC. Battery cages for hens were banned January 1, 2009, three years before the EU-wide prohibition. For pigs, minimum space exceeds EU Directive 2008/120/EC: sows require 5.5 square meters in group housing, and fully slatted floors are prohibited. Cattle must have sufficient lying areas with soft bedding. The AGES supports Laender veterinary authorities in enforcement. Violations carry fines up to EUR 7,500 (EUR 15,000 for repeat offenses) under Section 38 TSchG. Austria's AMA-Guetesiegel program incorporates welfare standards beyond statutory minimums, covering approximately 45,000 farms. The 2022 amendment introduced enhanced enrichment requirements for pigs, including mandatory manipulable material.",
    lawName: "1. Tierhaltungsverordnung",
    article: "Various",
    year: 2004,
    lastAmended: 2022,
    tags: ["farm animals", "housing", "battery cage ban"],
  },
  {
    id: "at-003",
    country: "Austria",
    countryCode: "AT",
    category: "Animal Testing",
    topic: "Tierversuchsgesetz (Animal Experiments Act)",
    summary:
      "Strict regulation of animal experimentation with mandatory ethical review.",
    details:
      "Austria's Tierversuchsgesetz 2012 (BGBl. I Nr. 114/2012, amended BGBl. I Nr. 86/2022) transposes EU Directive 2010/63/EU, with provisions exceeding the Directive's minimum requirements. Section 3 mandates prior authorization by the Bundesministerium fuer Bildung, Wissenschaft und Forschung for all experiments, evaluated by an independent commission. The 3Rs principle is codified in Sections 6-8. Experiments on great apes are prohibited under Section 10; non-human primate experiments require exceptional justification. Each institution must establish a Tierschutzorgan (animal welfare body) under Section 24. Austria reported approximately 220,000 animals used in 2021, with mice comprising over 70%. Violations carry fines up to EUR 15,000 under Section 35, with criminal liability under Section 222 StGB for severe cases. The RepRefRed Society promotes alternative methods nationally.",
    lawName: "Tierversuchsgesetz 2012",
    article: "Various",
    year: 2012,
    lastAmended: 2022,
    tags: ["animal testing", "3Rs", "ethics", "great apes ban"],
  },

  // ==================== SWITZERLAND ====================
  {
    id: "ch-001",
    country: "Switzerland",
    countryCode: "CH",
    category: "Anti-Cruelty",
    topic: "Tierschutzgesetz (Animal Welfare Act)",
    summary:
      "Pioneering welfare law recognizing animal dignity as a legal concept.",
    details:
      "Switzerland's Tierschutzgesetz (TSchG, SR 455), enacted December 16, 2005, last amended 2022, is anchored in Article 80 of the Federal Constitution. The law protects 'Wuerde des Tieres' (animal dignity) under Article 3, interpreted by the Federal Supreme Court (BGE 135 II 384) as prohibiting instrumentalization beyond inherent value. The Act covers vertebrates, cephalopods, and decapod crustaceans (Article 2). The BLV/FSVO administers federal oversight; cantonal veterinary offices conduct inspections. Competence certificates are mandatory for keepers of dogs, farm animals, and wild animals under Articles 31-32. Criminal penalties under Article 26 include up to three years imprisonment and fines up to CHF 40,000 for intentional cruelty; administrative violations carry fines up to CHF 20,000 under Article 28. The 2018 Hornkuh-Initiative on dehorning, though rejected, demonstrated high public engagement with animal welfare in Swiss direct democracy.",
    lawName: "Tierschutzgesetz (TSchG)",
    article: "Various articles",
    year: 2005,
    lastAmended: 2022,
    penaltyMax:
      "Up to 3 years imprisonment and fine up to CHF 20,000 (administrative) or CHF 40,000 (criminal)",
    tags: ["dignity", "pioneering", "comprehensive"],
  },
  {
    id: "ch-002",
    country: "Switzerland",
    countryCode: "CH",
    category: "Farm Animals",
    topic: "Tierschutzverordnung (Animal Welfare Ordinance)",
    summary:
      "Detailed regulations for keeping farm and companion animals.",
    details:
      "The Tierschutzverordnung (TSchV, SR 455.1), effective September 1, 2008, last amended 2023, implements the Tierschutzgesetz across 13 annexes covering over 30 species. The BLV/FSVO issues the Ordinance under delegation from Articles 4-12 TSchG. Battery cages have been banned since 1992 (first country globally), sow gestation crates are prohibited under Article 48, and free-range access is required for cattle, sheep, goats, and horses (Articles 36-40). Minimum space exceeds EU standards: fattening pigs require 0.9 square meters versus the EU's 0.65. Environmental enrichment is mandated for all species (Article 3), including straw for pigs and perches for poultry. The BTS and RAUS federal programs provide direct payments to farmers exceeding minimums, with over 60% participation. Cantonal veterinary authorities conduct approximately 10,000 farm inspections annually.",
    lawName: "Tierschutzverordnung (TSchV)",
    article: "Various",
    year: 2008,
    lastAmended: 2023,
    tags: ["farm animals", "detailed standards", "outdoor access"],
  },
  {
    id: "ch-003",
    country: "Switzerland",
    countryCode: "CH",
    category: "Companion Animals",
    topic: "Social animal keeping requirements",
    summary:
      "Unique requirements for social species to be kept in pairs or groups.",
    details:
      "Switzerland's Tierschutzverordnung (TSchV, SR 455.1) uniquely requires that social species be kept with conspecific companions. Under annexes to Articles 64-72, guinea pigs, rabbits, parrots, and over twenty other species cannot legally be kept alone. If a paired animal dies, keepers must obtain a replacement or rehome the survivor. Dog regulations under Articles 68-73 previously required mandatory training (Sachkundenachweis, SKN, introduced 2008), though the federal mandate was discontinued in 2016; cantons including Zurich retained requirements. Dogs must receive adequate daily exercise and social contact (Article 71), with tethering prohibited except temporarily. These provisions reflect constitutional animal dignity protection (Article 120, paragraph 2, Federal Constitution) and have no EU law equivalent. Violations carry fines up to CHF 20,000 under Article 28 TSchG, enforced by cantonal veterinary authorities.",
    lawName: "Tierschutzverordnung (TSchV)",
    article: "Various species-specific annexes",
    year: 2008,
    lastAmended: 2023,
    tags: ["social animals", "companion animals", "pairs", "training"],
  },

  // ==================== BELGIUM ====================
  {
    id: "be-001",
    country: "Belgium",
    countryCode: "BE",
    category: "Anti-Cruelty",
    topic: "Animal Welfare Law 1986 (regionalized)",
    summary:
      "Federal animal welfare law with strong regional implementations.",
    details:
      "Belgium's Loi du 14 aout 1986 relative a la protection et au bien-etre des animaux (Moniteur belge, 03.12.1986) established the national framework. Following the Sixth State Reform (2014), animal welfare became a regional competency under Article 6, paragraph 1, XI of the Loi speciale de reformes institutionnelles. Brussels-Capital adopted the Code bruxellois du Bien-etre animal (2018), banning fur farming, force-feeding for foie gras, and wild animal circus acts, with penalties up to five years imprisonment and EUR 100,000 under Article 36. Wallonia enacted the Code wallon du Bien-etre des animaux (2018), recognizing animal sentience in Article D.1. Flanders amended the federal law through the Vlaamse Codex Dierenwelzijn. Enforcement is managed by Bruxelles Environnement, SPW Agriculture (Wallonia), and Vlaamse dienst Dierenwelzijn. The regionalization created regulatory divergence — Brussels imposes higher penalties than Flanders (EUR 100,000 versus EUR 25,000).",
    lawName: "Loi du 14 aout 1986 / Regional Codes",
    article: "Various",
    year: 1986,
    lastAmended: 2018,
    penaltyMax:
      "Up to 5 years imprisonment and 100,000 EUR fine (Brussels Code)",
    tags: ["regional", "welfare", "fur farming ban"],
  },
  {
    id: "be-002",
    country: "Belgium",
    countryCode: "BE",
    category: "Companion Animals",
    topic: "Flanders positive list for companion animals",
    summary:
      "Flanders maintains a positive list of species allowed as companion animals.",
    details:
      "Flanders pioneered the 'positive list' (positieflijst) approach through the Besluit van de Vlaamse Regering of June 19, 2009 (Belgisch Staatsblad, 28.08.2009), specifying which mammal species may legally be kept as pets. The initial list included 42 mammal species; all unlisted species are prohibited. The Vlaamse dienst Dierenwelzijn administers the list and enforces compliance. In 2019, the system was extended to reptiles (Besluit of March 22, 2019), approving 422 species. The methodology applies a precautionary principle, evaluating species against welfare needs, invasive species risk, zoonotic disease potential, and public safety. Violations carry fines from EUR 100 to EUR 25,000. The Raad van State upheld the list's legality against challenges by exotic animal trade organizations. The European Parliament's 2022 resolution on exotic pet trade referenced the Flemish system. Luxembourg adopted a similar approach in 2018, creating a regional regulatory cluster.",
    lawName: "Besluit van de Vlaamse Regering (Flemish Government Decree)",
    article: "Various",
    year: 2009,
    lastAmended: 2019,
    tags: ["positive list", "companion animals", "exotic pets"],
  },

  // ==================== PORTUGAL ====================
  {
    id: "pt-001",
    country: "Portugal",
    countryCode: "PT",
    category: "Anti-Cruelty",
    topic: "Criminalization of animal cruelty (Lei 69/2014)",
    summary:
      "Law criminalizing animal abuse and abandonment of companion animals.",
    details:
      "Lei n.º 69/2014, de 29 de agosto (Diário da República n.º 166/2014) amended the Código Penal to criminalize mistreatment and abandonment of companion animals, creating a new Title VI ('Dos crimes contra animais de companhia'). Article 387 punishes cruelty causing unjustified pain or suffering with up to 1 year imprisonment or 120 daily fines. Article 388 criminalizes abandonment with up to 6 months imprisonment or 80 daily fines. Article 389 punishes killing a companion animal without necessity with 6-24 months imprisonment (extended to 36 months if aggravated). Enforcement is carried out by the GNR (Guarda Nacional Republicana), PSP (Polícia de Segurança Pública), and the ICNF (Instituto da Conservação da Natureza e das Florestas). Lei n.º 110/2015 extended provisions to stray animals. The Tribunal da Relação de Lisboa in Acórdão de 22/01/2019 established that psychological suffering also constitutes mistreatment. Portugal processes approximately 5,000 animal cruelty complaints annually, though conviction rates remain below 10%. Before 2014, animal cruelty was only a misdemeanor under Lei n.º 92/1995. Compared to Spain (up to 24 months) and France (5 years), Portugal's maximum penalties are relatively modest, though the 2020 amendment (Lei 39/2020) increased them.",
    lawName: "Lei 69/2014",
    article: "Articles 387-389 Codigo Penal",
    year: 2014,
    lastAmended: 2020,
    penaltyMax:
      "Up to 2 years imprisonment (up to 3 years if death results)",
    tags: ["criminal", "companion animals", "abandonment"],
  },
  {
    id: "pt-002",
    country: "Portugal",
    countryCode: "PT",
    category: "Companion Animals",
    topic: "Animals as sentient beings in Civil Code",
    summary:
      "Portuguese Civil Code amended to recognize animals as sentient beings.",
    details:
      "Lei n.º 8/2017, de 3 de março (Diário da República n.º 45/2017) amended the Código Civil to establish animals as 'seres vivos dotados de sensibilidade' (living beings endowed with sensitivity) under new Article 201.º-B, creating a juridical category sui generis between persons and things. Article 201.º-C provides that the legal regime of things (coisas) applies subsidiarily where no specific provision exists. Article 1305.º-A establishes duties of care for animal owners: adequate feeding, shelter, veterinary care, and exercise. Article 1793.º-A mandates that family courts consider animal welfare in divorce proceedings, enabling pet custody arrangements. Enforcement of civil provisions falls to the Tribunais Cíveis. The Supremo Tribunal de Justiça has not yet issued definitive jurisprudence on Article 201.º-B, though several Tribunais da Relação have applied it in custody cases. Portugal follows the model established by Austria (ABGB §285a, 1988), Germany (BGB §90a, 1990), and France (Article 515-14, 2015). The reform was championed by PAN (Pessoas-Animais-Natureza), Portugal's animal rights party (elected to Parliament in 2015). Critics note that bullfighting remains legal under cultural heritage exemptions, creating a tension with sentience recognition.",
    lawName: "Lei 8/2017",
    article: "Articles 201-B to 201-D Codigo Civil",
    year: 2017,
    tags: ["sentience", "civil code", "legal status"],
  },
  {
    id: "pt-003",
    country: "Portugal",
    countryCode: "PT",
    category: "Wildlife Protection",
    topic: "Nature conservation and biodiversity law",
    summary:
      "Framework legislation for wildlife and habitat conservation.",
    details:
      "Decreto-Lei n.º 142/2008, de 24 de julho (Diário da República n.º 142/2008) establishes Portugal's Regime Jurídico da Conservação da Natureza e da Biodiversidade, implementing EU Habitats Directive (92/43/EEC) and Birds Directive (2009/147/EC). Article 5 creates the Rede Nacional de Áreas Protegidas (RNAP) covering approximately 23% of Portugal's territory, including 60 Natura 2000 sites. Article 44 establishes protection for species listed in Directive Annexes II and IV, including Iberian lynx (Lynx pardinus), Iberian imperial eagle, and Mediterranean monk seal. Enforcement is by the ICNF (Instituto da Conservação da Natureza e das Florestas) with approximately 1,200 vigilantes da natureza (nature wardens). Penalties under Article 71 include fines from EUR 500 to EUR 2,500,000 for corporate entities. The Supremo Tribunal Administrativo in Proc. 01017/12 ruled on habitat protection obligations near Natura 2000 sites. Portugal's Livro Vermelho dos Vertebrados (Red Book) lists 156 threatened species. The 2015 amendment (Decreto-Lei 242/2015) strengthened marine protected area provisions. Compared to Spain's Ley 42/2007 on Natural Heritage, Portugal's framework is less comprehensive but actively enforced.",
    lawName: "Decreto-Lei 142/2008",
    article: "Various",
    year: 2008,
    lastAmended: 2015,
    tags: ["wildlife", "biodiversity", "protected areas"],
  },

  // ==================== POLAND ====================
  {
    id: "pl-001",
    country: "Poland",
    countryCode: "PL",
    category: "Anti-Cruelty",
    topic: "Ustawa o ochronie zwierzat (Animal Protection Act)",
    summary:
      "Declares animals are not things and establishes criminal penalties for cruelty.",
    details:
      "Poland's Ustawa z dnia 21 sierpnia 1997 r. o ochronie zwierząt (Dz.U. 1997 Nr 111 poz. 724) opens with the landmark declaration in Article 1(1): 'Zwierzę, jako istota żyjąca, zdolna do odczuwania cierpienia, nie jest rzeczą' (an animal, as a living being capable of suffering, is not a thing). Article 6 prohibits cruelty including beating, overworking, and abandonment. Article 35(1a) criminalizes cruelty with up to 3 years imprisonment, increased to 5 years for aggravated cruelty by the 2018 amendment (Dz.U. 2018 poz. 663). Article 33 prohibits killing animals except in listed circumstances. Enforcement is by the Inspekcja Weterynaryjna (Veterinary Inspection) and Policja, with TOZ (Towarzystwo Opieki nad Zwierzętami) holding statutory inspection rights. The Sąd Najwyższy (Supreme Court) in II KK 290/17 (2018) established that a single act of severe violence suffices for aggravated cruelty charges. Poland implements EU Directives including 98/58/EC and Regulation (EC) 1/2005. The 2020 'Piątka dla zwierząt' (Five for Animals) amendment attempt to ban fur farming failed in the Senat after industry lobbying, though Poland remains Europe's third-largest fur producer. Compared to Czech Republic and Hungary, Poland's penalties are among the strictest in Central Europe.",
    lawName: "Ustawa z dnia 21 sierpnia 1997 r. o ochronie zwierzat",
    article: "Various",
    year: 1997,
    lastAmended: 2023,
    penaltyMax:
      "Up to 5 years imprisonment (for aggravated cruelty, amended 2018)",
    tags: ["not things", "cruelty", "suffering"],
  },
  {
    id: "pl-002",
    country: "Poland",
    countryCode: "PL",
    category: "Wildlife Protection",
    topic: "Nature Conservation Act",
    summary:
      "Comprehensive legislation for protection of wild species and habitats.",
    details:
      "Ustawa z dnia 16 kwietnia 2004 r. o ochronie przyrody (Dz.U. 2004 Nr 92 poz. 880) is Poland's comprehensive nature conservation law, implementing EU Habitats Directive (92/43/EEC) and Birds Directive (2009/147/EC). Poland hosts 985 Natura 2000 sites (145 SACs and 840 SPAs) covering approximately 20% of national territory. Article 52 protects 486 animal species and 715 plant species through strict protection regimes. Enforcement is by the Generalna Dyrekcja Ochrony Środowiska (GDOŚ, General Directorate for Environmental Protection) and 16 regional directorates. Article 127 provides for fines from PLN 500 to PLN 1,000,000 and up to 5 years imprisonment for serious violations. Poland's Białowieża Forest case was a landmark at the CJEU: in C-441/17 (Commission v Poland, 2018), the Court ruled that Poland violated the Habitats Directive by authorizing logging in the primeval forest, ordering immediate cessation. The case established significant precedent on precautionary principle obligations. Poland's Red List (Czerwona Lista) includes the European bison (żubr), of which Poland hosts the world's largest population (approximately 2,000 individuals). Compared to Germany's Bundesnaturschutzgesetz, Poland's law provides stronger criminal penalties but faces enforcement challenges due to limited staffing.",
    lawName: "Ustawa z dnia 16 kwietnia 2004 r. o ochronie przyrody",
    article: "Various",
    year: 2004,
    lastAmended: 2022,
    tags: ["wildlife", "Natura 2000", "habitats directive"],
  },

  // ==================== CZECH REPUBLIC ====================
  {
    id: "cz-001",
    country: "Czech Republic",
    countryCode: "CZ",
    category: "Anti-Cruelty",
    topic: "Act on Protection of Animals Against Cruelty",
    summary:
      "Comprehensive law prohibiting cruelty to all vertebrate animals.",
    details:
      "Zákon č. 246/1992 Sb. na ochranu zvířat proti týrání (Act on Protection of Animals Against Cruelty) is the Czech Republic's primary animal welfare legislation. Section 4 prohibits tyrání (cruelty) including beating, overworking, abandonment, and subjecting animals to unnecessary suffering. Section 302 of the Trestní zákoník (Criminal Code, Act No. 40/2009 Coll.) criminalizes animal cruelty with up to 3 years imprisonment, increased to 5 years for aggravated offenses involving particular brutality or multiple animals. Administrative violations under Section 27a carry fines up to CZK 500,000 (approximately EUR 20,000). Enforcement is conducted by the Státní veterinární správa (State Veterinary Administration, SVS) with approximately 400 inspectors, and Krajské veterinární správy (regional offices). The law implements Council Directive 98/58/EC and Regulation (EC) 1/2005. The Ústavní soud (Constitutional Court) in Pl. ÚS 18/14 reviewed proportionality of welfare restrictions against property rights. The 2022 amendment strengthened provisions on dog breeding (puppy mills) and online animal sales. Compared to Poland (5 years maximum), Czech penalties are moderate. The Czech Republic banned fur farming in 2019, effective 2024, following campaigns by Společnost pro zvířata (Society for Animals). The Nejvyšší soud in 8 Tdo 1444/2018 clarified the scope of 'unnecessary suffering.'",
    lawName: "Zakon c. 246/1992 Sb.",
    article: "Various",
    year: 1992,
    lastAmended: 2022,
    penaltyMax: "Up to 3 years imprisonment (Criminal Code Section 302)",
    tags: ["cruelty", "welfare", "veterinary enforcement"],
  },
  {
    id: "cz-002",
    country: "Czech Republic",
    countryCode: "CZ",
    category: "Companion Animals",
    topic: "Animals as sentient beings in Civil Code",
    summary:
      "Czech Civil Code recognizes animals as living sentient beings.",
    details:
      "The Czech Občanský zákoník (Civil Code, Act No. 89/2012 Coll., effective 1 January 2014) contains a progressive provision in Section 494: 'Živé zvíře má zvláštní význam a hodnotu již jako smysluplný živý tvor. Živé zvíře není věc' (A living animal has special significance and value as a sentient living creature. A living animal is not a thing). Section 494 further provides that provisions regarding things apply to animals only to the extent not contrary to their nature as living beings endowed with senses. This follows the Austrian ABGB §285a (1988) and German BGB §90a (1990) models. The Nejvyšší soud (Supreme Court) in 22 Cdo 3631/2017 applied Section 494 in a companion animal custody dispute during divorce, holding that the animal's welfare must be considered alongside property division principles. The provision was championed by the Czech Ministry of Justice during the comprehensive Civil Code recodification (2008-2012). Enforcement occurs through civil courts. While the provision does not grant animals legal personhood or standing, it creates interpretive obligations for judges. Compared to France's Article 515-14 and Spain's Article 333 bis, the Czech provision is among the most philosophically developed, explicitly referencing sensory capacity.",
    lawName: "Obcansky zakonik (Civil Code No. 89/2012 Coll.)",
    article: "Section 494",
    year: 2014,
    tags: ["sentience", "civil code", "living beings"],
  },

  // ==================== GREECE ====================
  {
    id: "gr-001",
    country: "Greece",
    countryCode: "GR",
    category: "Companion Animals",
    topic: "Companion Animals and Stray Management Law",
    summary:
      "Comprehensive law on companion animal welfare and stray management.",
    details:
      "Nomos 4039/2012 (ΦΕΚ Α΄ 15/2.2.2012) established Greece's framework for companion animal protection and stray management, significantly strengthened by Nomos 4830/2021 (ΦΕΚ Α΄ 169/18.9.2021). Article 16 of Law 4830/2021 introduces Greece's harshest-ever animal cruelty penalties: up to 10 years imprisonment for intentionally killing an animal, the highest such penalty in the EU. Article 4 mandates microchipping via the ARTEMIS national pet registry. Article 9 requires neutering of companion animals unless registered breeders. Article 13 established the Αστυνομία Ζώων (Animal Police) unit within the Ελληνική Αστυνομία (Hellenic Police). Euthanasia of healthy strays is banned under Article 10; only certified veterinarians can euthanize terminally ill animals. Enforcement is by municipal authorities, Animal Police, and the GEOTEE (Γεωτεχνικό Επιμελητήριο Ελλάδας). Fines range from EUR 5,000 to EUR 50,000. The Areios Pagos (Supreme Civil and Criminal Court) has not yet issued significant rulings under the 2021 law. Greece's estimated 3 million stray animals remain a major enforcement challenge. Greece implements EU Regulation (EU) 576/2013 on pet travel. Compared to Italy's no-kill model (since 1991), Greece's approach arrived 30 years later but carries heavier penalties.",
    lawName: "Law 4039/2012 as amended by Law 4830/2021",
    article: "Various",
    year: 2012,
    lastAmended: 2021,
    penaltyMax:
      "Up to 10 years imprisonment for animal killing (Law 4830/2021)",
    tags: ["strays", "companion animals", "animal police", "microchipping"],
  },
  {
    id: "gr-002",
    country: "Greece",
    countryCode: "GR",
    category: "Wildlife Protection",
    topic: "Biodiversity and nature protection",
    summary:
      "Framework for protecting wildlife and natural habitats.",
    details:
      "Nomos 1650/1986 (ΦΕΚ Α΄ 160/16.10.1986) on the Protection of the Environment, supplemented by Nomos 3937/2011 on Biodiversity, provides Greece's wildlife protection framework, implementing EU Habitats Directive (92/43/EEC) and Birds Directive (2009/147/EC). Greece hosts 446 Natura 2000 sites covering approximately 28% of national territory (the third-highest proportion in the EU). Article 18 of Law 1650/1986 and Presidential Decree 67/1981 protect endangered species including the Mediterranean monk seal (Monachus monachus, approximately 400 individuals, the world's largest population), loggerhead sea turtles (Caretta caretta), and over 300 endemic species. Enforcement falls to the Υπουργείο Περιβάλλοντος και Ενέργειας (Ministry of Environment and Energy) and the Οργανισμός Φυσικού Περιβάλλοντος και Κλιματικής Αλλαγής (OFYPEKA, Natural Environment and Climate Change Organization, established 2020). Penalties under Law 1650/1986 Article 28 include fines from EUR 2,000 to EUR 2,000,000 and imprisonment up to 10 years. The CJEU in C-504/14 (Commission v Greece, 2016) found Greece in violation of the Habitats Directive for inadequate Natura 2000 site protection. Compared to Italy and Spain, Greece's protected area network is extensive but enforcement capacity remains limited.",
    lawName: "Law 1650/1986 and subsequent legislation",
    article: "Various",
    year: 1986,
    lastAmended: 2020,
    tags: ["wildlife", "biodiversity", "protected areas", "endemic species"],
  },

  // ==================== IRELAND ====================
  {
    id: "ie-001",
    country: "Ireland",
    countryCode: "IE",
    category: "Anti-Cruelty",
    topic: "Animal Health and Welfare Act 2013",
    summary:
      "Comprehensive modern legislation imposing a duty of care for all animals.",
    details:
      "The Animal Health and Welfare Act 2013 (No. 15 of 2013, Irish Statute Book) is Ireland's primary animal welfare legislation, consolidating and replacing fragmented provisions from the Protection of Animals Act 1911 and the Control of Dogs Act 1986. Section 11 imposes a statutory duty of care on any person with an animal in their possession or control. Section 12 prohibits cruelty, including acts or omissions causing unnecessary suffering. On summary conviction, Section 53 provides Class A fines (up to EUR 5,000) and/or 6 months imprisonment; on indictment, fines up to EUR 250,000 and/or 5 years imprisonment. Enforcement is carried out by the Department of Agriculture, Food and the Marine (DAFM) authorized officers, An Garda Síochána, and the ISPCA (Irish Society for the Prevention of Cruelty to Animals), which has statutory inspection powers under Section 40. The law implements Council Directive 98/58/EC and Regulation (EC) 1/2005. The Court of Appeal in DPP v. O'Sullivan [2018] IECA 368 upheld custodial sentences for severe animal neglect. Ireland processes approximately 15,000 animal welfare concerns annually through the DAFM helpline. The Act also addresses animal health emergencies (Part 4), drawing from lessons of the 2001 foot-and-mouth crisis. Compared to the UK's Animal Welfare Act 2006, Ireland's Act is broader in scope but was enacted 7 years later.",
    lawName: "Animal Health and Welfare Act 2013",
    article: "Sections 11-12",
    year: 2013,
    penaltyMin: "Class A fine (up to 5,000 EUR)",
    penaltyMax:
      "Up to 5 years imprisonment and/or 250,000 EUR fine on indictment",
    tags: ["duty of care", "welfare", "modern"],
  },
  {
    id: "ie-002",
    country: "Ireland",
    countryCode: "IE",
    category: "Wildlife Protection",
    topic: "Wildlife Act 1976 (as amended)",
    summary:
      "Primary legislation for the conservation of wildlife in Ireland.",
    details:
      "The Wildlife Act 1976 (No. 39 of 1976), substantially amended by the Wildlife (Amendment) Act 2000 (No. 38 of 2000), is Ireland's primary wildlife protection legislation, implementing EU Birds Directive (2009/147/EC) and Habitats Directive (92/43/EEC). Section 23 protects all wild birds, their nests, and eggs. Sections 22-23 establish open and closed hunting seasons regulated by the Minister for Housing, Local Government and Heritage. Ireland hosts 439 Natura 2000 sites (SACs and SPAs) covering approximately 13.5% of national territory. Enforcement is by the National Parks and Wildlife Service (NPWS) under the Department of Housing, with approximately 70 conservation rangers. Section 72 provides for fines up to EUR 100,000 and/or 2 years imprisonment on indictment. The High Court in An Taisce v. An Bord Pleanála [2021] IEHC 254 reinforced habitat assessment obligations under Article 6(3) of the Habitats Directive. Ireland's wildlife includes protected species such as the Killarney fern, Natterjack toad, and freshwater pearl mussel. The CJEU in C-183/05 (Commission v Ireland, 2007) found Ireland in violation of the Habitats Directive for inadequate site protection. Compared to the UK's Wildlife and Countryside Act 1981, Ireland's penalties are higher but ranger numbers are criticized as insufficient by the Irish Wildlife Trust.",
    lawName: "Wildlife Act 1976 (as amended)",
    article: "Various",
    year: 1976,
    lastAmended: 2012,
    penaltyMax: "Up to 100,000 EUR fine and/or 2 years imprisonment",
    tags: ["wildlife", "conservation", "habitats"],
  },

  // ==================== ROMANIA ====================
  {
    id: "ro-001",
    country: "Romania",
    countryCode: "RO",
    category: "Anti-Cruelty",
    topic: "Animal protection law (Legea 205/2004)",
    summary:
      "Comprehensive law protecting animals from cruelty and establishing welfare standards.",
    details:
      "Legea nr. 205/2004 privind protecția animalelor (Monitorul Oficial nr. 531/14.06.2004) provides comprehensive protection for companion, farm, and wild animals. Article 4 prohibits cruelty including beating, mutilation, and abandonment. The 2014 amendment (Legea nr. 187/2012 implementing the new Cod Penal) integrated animal cruelty into the Codul Penal at Article 325, carrying up to 3 years imprisonment for serious offenses; aggravated cruelty resulting in death carries up to 5 years. Administrative fines under the law range from RON 200 to RON 8,000 (approximately EUR 40-1,600). Enforcement is conducted by the ANSVSA (Autoritatea Națională Sanitară Veterinară și pentru Siguranța Alimentelor) with approximately 2,000 inspectors and the Poliția Română. Romania implements EU Council Directive 98/58/EC and Regulation (EC) 1/2005. The Înalta Curte de Casație și Justiție (High Court) in Decizia nr. 15/2019 clarified the standard of proof for animal cruelty. Romania's large stray dog population (estimated over 2 million) remains a major welfare challenge. EU infringement proceedings (Case 2013/4075) prompted Romania to improve enforcement. Compared to neighbouring Hungary and Bulgaria, Romania's penalties are higher on paper but enforcement gaps persist, particularly in rural areas.",
    lawName: "Legea 205/2004",
    article: "Various",
    year: 2004,
    lastAmended: 2014,
    penaltyMax:
      "Up to 3 years imprisonment (Criminal Code Article 325)",
    tags: ["cruelty", "welfare", "criminal penalties"],
  },
  {
    id: "ro-002",
    country: "Romania",
    countryCode: "RO",
    category: "Companion Animals",
    topic: "Stray dog management",
    summary:
      "Legislation regulating the management of stray dog populations.",
    details:
      "Legea nr. 258/2013 pentru modificarea OUG 155/2001 (Monitorul Oficial nr. 601/27.09.2013) established Romania's legal framework for stray dog management following a fatal attack on a child in Bucharest that prompted emergency legislation. Article 4 mandates that municipalities establish and maintain adăposturi publice (public shelters) meeting ANSVSA standards. Article 5 requires a 14-day holding period during which animals must be microchipped and registered in the Registrul de Evidență a Câinilor (Dog Registry). Euthanasia may only be authorized after this period if adoption is not possible, by veterinary decision. Article 7 promotes sterilization programs with co-funding from local budgets. Enforcement falls to the ANSVSA (Autoritatea Națională Sanitară Veterinară și pentru Siguranța Alimentelor) and primării (municipal authorities). Violations carry fines from RON 500 to RON 5,000. The Curtea Constituțională (Constitutional Court) in Decizia nr. 1/2014 upheld the law against challenges from animal welfare organizations. Romania allocates approximately EUR 50 million annually to stray management. The CJEU has indirectly addressed Romania's stray situation in EU citizenship cases. Compared to Italy's no-kill model (Legge 281/1991), Romania's law is more permissive on euthanasia, drawing criticism from VIER PFOTEN (Four Paws) and other international organizations.",
    lawName: "Legea 258/2013",
    article: "Various",
    year: 2013,
    tags: ["stray dogs", "management", "shelters"],
  },

  // ==================== HUNGARY ====================
  {
    id: "hu-001",
    country: "Hungary",
    countryCode: "HU",
    category: "Anti-Cruelty",
    topic: "Act XXVIII of 1998 on Animal Protection",
    summary:
      "Comprehensive animal protection act covering welfare and anti-cruelty measures.",
    details:
      "Hungary's 1998. évi XXVIII. törvény az állatok védelméről és kíméletéről (Magyar Közlöny 1998/30) provides comprehensive animal protection. Section 3 establishes a general prohibition against animal cruelty. Section 6 mandates appropriate feeding, housing, and veterinary care. Section 7 regulates breeding to prevent genetic disorders. The Büntető Törvénykönyv (Criminal Code, 2012. évi C. törvény) at Section 244 criminalizes állatkínzás (animal torture) with up to 3 years imprisonment; special cruelty or acts committed before minors carries up to 5 years. Administrative violations carry fines from HUF 30,000 to HUF 500,000 (approximately EUR 80-1,300). Enforcement is conducted by the NÉBIH (Nemzeti Élelmiszerlánc-biztonsági Hivatal, National Food Chain Safety Office) with approximately 650 inspectors and the Rendőrség (Police). The law implements Council Directive 98/58/EC, Regulation (EC) 1099/2009 on slaughter, and Directive 2010/63/EU on animal testing. The Kúria (Supreme Court) in Kfv.III.37.123/2019/5 upheld seizure of animals from a puppy mill operation. Hungary banned fur farming in 2020, effective 2024. Hungary processes approximately 4,000 animal welfare complaints annually. Compared to Austria and the Czech Republic, Hungary's penalties are moderate, and enforcement resources are considered insufficient by Állatbarát Jogvédő Alapítvány (Animal Rights Foundation).",
    lawName: "1998. evi XXVIII. torveny az allatok vedelmerol",
    article: "Various",
    year: 1998,
    lastAmended: 2021,
    penaltyMax:
      "Up to 3 years imprisonment (Criminal Code Section 244 for animal torture)",
    tags: ["welfare", "cruelty", "comprehensive"],
  },
  {
    id: "hu-002",
    country: "Hungary",
    countryCode: "HU",
    category: "Farm Animals",
    topic: "Farm animal welfare regulations",
    summary:
      "EU-aligned regulations for the welfare of farm animals.",
    details:
      "Hungary implements EU animal welfare directives through kormányrendeletek (government decrees): 32/1999. (III. 31.) FVM rendelet on laying hens (implementing Directive 1999/74/EC), 33/2005. (IV. 27.) FVM rendelet on pigs (Directive 2008/120/EC), and 7/2000. (II. 18.) FVM rendelet on calves (Directive 2008/119/EC). As an EU member state since 2004, Hungary must comply with EU minimum standards on housing, transport (Regulation (EC) 1/2005), and slaughter (Regulation (EC) 1099/2009). Enforcement is through NÉBIH (Nemzeti Élelmiszerlánc-biztonsági Hivatal), which conducts approximately 3,000 annual farm inspections. Administrative fines under 244/1998. (XII. 31.) Korm. rendelet range from HUF 30,000 to HUF 1,000,000 per violation. The Közigazgatási és Munkaügyi Bíróság (Administrative Court) in several cases has upheld NÉBIH farm closure orders. Hungary's intensive poultry sector (approximately 30 million birds) and pig sector (approximately 3 million pigs) face regular EU audit scrutiny by the European Commission's DG SANTE. The European Court of Auditors' 2018 Special Report on farm animal welfare noted enforcement gaps in several member states including Hungary. Compared to Austria and Germany, Hungary generally adheres to EU minimums without substantially exceeding them, reflecting economic constraints in the agricultural sector.",
    lawName: "Various government decrees implementing EU directives",
    article: "Various",
    year: 2004,
    lastAmended: 2022,
    tags: ["farm animals", "EU directives", "NEBIH"],
  },

  // ==================== UKRAINE ====================
  {
    id: "ua-001",
    country: "Ukraine",
    countryCode: "UA",
    category: "Anti-Cruelty",
    topic: "Law on Protection of Animals from Cruel Treatment",
    summary:
      "Comprehensive legislation prohibiting cruelty to animals and establishing welfare standards.",
    details:
      "Ukraine's Zakon Ukraïny 'Pro zakhyst tvaryn vid zhorstokoho povodzhennia' (No. 3447-IV, adopted 21 February 2006, Vidomosti Verkhovnoï Rady 2006, No. 27) prohibits cruelty, torture, and mistreatment of domestic, farm, wild, and laboratory animals. Article 7 bans animal fighting and cruel entertainment. Article 8 imposes obligations on owners for proper feeding, housing, and veterinary care. Criminal enforcement falls under Kryminal'nyy kodeks (Criminal Code) Article 299, which punishes animal cruelty with up to 3 years imprisonment; aggravated cruelty (involving minors or causing multiple deaths) carries up to 5 years and a ban on animal keeping for 3-5 years. Administrative fines under the Code of Administrative Offenses range from UAH 3,400 to UAH 17,000. Enforcement is by the Derzhavna sluzhba Ukraïny z pytan' bezpechnosti kharchovykh produktiv (State Service for Food Safety and Consumer Protection, DPSS) and Natsional'na politsiia (National Police). The Verkhovna Rada strengthened penalties in 2017 (Law No. 2205-VIII). Ongoing armed conflict since 2022 has severely impacted enforcement capacity and animal welfare, with millions of abandoned animals. Prior to the war, Ukraine was pursuing EU approximation of animal welfare standards under the EU-Ukraine Association Agreement (Chapter 4). Compared to EU member states, Ukraine's legal framework is conceptually sound but enforcement remains inconsistent.",
    lawName: "Zakon Ukrainy Pro zakhyst tvaryn vid zhorstokoho povodzhennia",
    article: "Various",
    year: 2006,
    lastAmended: 2017,
    penaltyMax: "Up to 3 years imprisonment (Criminal Code Article 299)",
    tags: ["cruelty", "animal fighting ban", "welfare"],
  },
  {
    id: "ua-002",
    country: "Ukraine",
    countryCode: "UA",
    category: "Wildlife Protection",
    topic: "Law on the Red Book of Ukraine",
    summary:
      "Legal protection for endangered species listed in the Red Book.",
    details:
      "The Zakon Ukraïny 'Pro Chervonu knyhu Ukraïny' (No. 3055-III, adopted 7 February 2002, Vidomosti Verkhovnoï Rady 2002, No. 30) establishes legal protection for rare and threatened species. The Chervona knyha Ukraïny (Red Book of Ukraine), last comprehensively revised in 2009, lists 542 animal species and 826 plant species requiring special protection. Article 11 prohibits collection, destruction, or trade in Red Book species. Criminal Code Article 248 punishes illegal taking of Red Book species with fines from UAH 8,500 to UAH 17,000 or imprisonment up to 3 years; aggravated offenses carry up to 5 years. Enforcement is by the Ministerstvo zakhystu dovkillia ta pryrodnykh resursiv (Ministry of Environmental Protection and Natural Resources) and the Derzhavna ekolohichna inspektsiia (State Ecological Inspection). Ukraine hosts critical populations of European bison (Bison bonasus, approximately 250 individuals in Polissia reserves), steppe eagle (Aquila nipalensis), great bustard (Otis tarda), and Dnieper stellate sturgeon (Acipenser stellatus). Ukraine signed but has not ratified the Bern Convention on wildlife. The 2022-present armed conflict has caused severe ecological damage to protected habitats in eastern and southern Ukraine, with Askania-Nova Biosphere Reserve and Chornobyl Exclusion Zone affected. Compared to Poland's system, Ukraine's Red Book framework is comprehensive but enforcement is weaker.",
    lawName: "Zakon Ukrainy Pro Chervonu knyhu Ukrainy",
    article: "Various",
    year: 2002,
    lastAmended: 2010,
    tags: ["endangered species", "Red Book", "conservation"],
  },
  {
    id: "ua-003",
    country: "Ukraine",
    countryCode: "UA",
    category: "Companion Animals",
    topic: "Regulation of companion animal keeping",
    summary:
      "Rules for responsible companion animal ownership in urban areas.",
    details:
      "Ukrainian companion animal regulation operates through the 2006 Law on Protection of Animals from Cruel Treatment (Articles 17-19) and municipal regulations (rishenia miskykh rad). Article 17 mandates registration and microchipping of dogs, though compliance remains below 30% in most cities. Article 18 requires annual rabies vaccination. Municipal TNR (trap-neuter-return) programs operate in Kyiv (regulated by Kyiv City Council Decision No. 758/758, 2011), Odesa, Lviv, and Kharkiv. The Derzhavna sluzhba z pytan' bezpechnosti kharchovykh produktiv (DPSS) oversees veterinary compliance. Administrative fines for unregistered dogs range from UAH 170 to UAH 510 under the Code of Administrative Offenses (Article 154). Before the 2022 conflict, Ukraine's estimated 50,000 stray dogs in Kyiv alone presented significant management challenges. Organizations including UAnimals, Happy Paw, and VIER PFOTEN (Four Paws) provide operational capacity that supplements limited government resources. The 2022 armed conflict created an unprecedented animal welfare crisis: an estimated 2 million companion animals were displaced or abandoned. International organizations including IFAW and Humane Society International provided emergency relief. Ukraine's 2017 amendment strengthened companion animal provisions as part of EU approximation under the Association Agreement. Compared to EU member states' requirements under Regulation (EU) 576/2013 on pet movement, Ukraine's registration system remains underdeveloped.",
    lawName: "Various municipal regulations and national law",
    article: "Various",
    year: 2006,
    tags: ["companion animals", "registration", "TNR", "urban"],
  },

  // ==================== RUSSIA ====================
  {
    id: "ru-001",
    country: "Russia",
    countryCode: "RU",
    category: "Anti-Cruelty",
    topic: "Federal Law on Responsible Treatment of Animals",
    summary:
      "Comprehensive federal law establishing animal welfare standards and prohibitions.",
    details:
      "Federal'nyy zakon No. 498-FZ 'Ob otvetstvennom obrashchenii s zhivotnymi' (adopted 27 December 2018, Sobranie zakonodatel'stva RF, 2018, No. 53) was Russia's first comprehensive animal welfare legislation after 20 years of legislative proposals. Article 11 prohibits cruelty and establishes general welfare principles. Article 12 bans animal fighting (including dog fighting and cockfighting). Article 15 prohibits contact zoos, animal cafés, and keeping wild animals in bars and restaurants. Article 16 establishes the OSVV (Otlov-Sterilizatsiya-Vaktsinatsiya-Vozvrat, trap-sterilize-vaccinate-release) program as the primary stray management method. Criminal enforcement falls under Ugolovnyy kodeks (Criminal Code) Article 245, punishing cruelty with up to 5 years imprisonment (amended 2017 after the 'Khabarovsk schoolgirls' animal torture case that sparked national outrage). Administrative fines under KoAP range from RUB 5,000 to RUB 100,000. Enforcement is by Rosselkhoznadzor (Federal Service for Veterinary and Phytosanitary Supervision) and regional authorities. The Verkhovnyy Sud (Supreme Court) in Plenum Resolution No. 56 (2020) clarified standards for Article 245 prosecution. Implementation varies drastically across 85 federal subjects. Russia is not an EU member and is not subject to EU animal welfare acquis. Compared to Ukraine's 2006 law, Russia's legislation is more comprehensive but arrived 12 years later.",
    lawName: "Federal Law No. 498-FZ",
    article: "Various",
    year: 2018,
    lastAmended: 2023,
    penaltyMax:
      "Up to 5 years imprisonment (Criminal Code Article 245 for cruelty)",
    tags: ["welfare", "animal fighting ban", "contact zoo ban"],
  },
  {
    id: "ru-002",
    country: "Russia",
    countryCode: "RU",
    category: "Wildlife Protection",
    topic: "Federal Law on Fauna",
    summary:
      "Protection of wild animals and regulation of wildlife use.",
    details:
      "Federal'nyy zakon No. 52-FZ 'O zhivotnom mire' (adopted 24 April 1995, Sobranie zakonodatel'stva RF, 1995, No. 17) establishes Russia's framework for wildlife conservation across the world's largest national territory (17.1 million km²). Article 22 mandates environmental impact assessment for activities affecting wildlife habitats. Article 24 establishes the Krasnaya kniga Rossii (Red Book of Russia), listing 443 animal species requiring protection. Hunting is regulated by separate Federal Law No. 209-FZ 'On Hunting' (2009). Criminal Code Articles 256-258.1 punish illegal wildlife trade with up to 7 years imprisonment for organized trafficking. Enforcement is by Rosprirodnadzor (Federal Service for Supervision of Natural Resources) and the Minprirody (Ministry of Natural Resources and Environment). Russia maintains 103 zapovedniki (strict nature reserves), 69 natsional'nye parki (national parks), and 59 federal zakazniki (wildlife refuges), collectively covering approximately 3% of national territory. The Konstitutsionnyy Sud (Constitutional Court) in Postanovlenie No. 12-P (2017) upheld regional hunting restrictions as constitutional. Russia hosts critical populations of Amur tiger (approximately 600), Amur leopard (approximately 120), and polar bear (approximately 5,000). Russia ratified the Convention on Biological Diversity but has not ratified the Bern Convention. Compared to EU Habitats Directive standards, Russia's species-specific protections are less systematic but cover an unparalleled territory.",
    lawName: "Federal Law No. 52-FZ on Fauna",
    article: "Various",
    year: 1995,
    lastAmended: 2023,
    tags: ["wildlife", "Red Book", "hunting", "endangered species"],
  },
  {
    id: "ru-003",
    country: "Russia",
    countryCode: "RU",
    category: "Companion Animals",
    topic: "Stray animal management (OSVV program)",
    summary:
      "Federal framework for humane management of stray animal populations.",
    details:
      "Federal Law No. 498-FZ (Articles 16-18) established the OSVV (Otlov-Sterilizatsiya-Vaktsinatsiya-Vozvrat) program as Russia's mandated stray animal management method, effective 1 January 2020. Article 16 requires that captured strays undergo veterinary examination, sterilization, vaccination (particularly against rabies), tagging, and return to their original habitat. Article 17 mandates that priyuty (shelters) provide humane conditions including adequate space, feeding, and veterinary care; euthanasia of healthy animals is prohibited except where an animal poses a documented public safety threat. Article 18 requires sub'yekty Rossiyskoy Federatsii (regional authorities) to fund OSVV programs from regional budgets. Enforcement is by regional veterinary services and Rosselkhoznadzor. However, implementation has been controversial: several regions (including Buryatia, Yakutia, and Astrakhan Oblast) have sought amendments allowing culling after fatal stray dog attacks. The Gosudarstvennaya Duma amended the law in 2023 to allow regional governments to establish temporary shelters and extend holding periods. Administrative fines for shelter standard violations range from RUB 10,000 to RUB 150,000. Russia's estimated 4-5 million stray dogs present ongoing management challenges, particularly in Siberian and Far Eastern regions. Compared to Turkey's similar TNR program and the EU's lack of harmonized stray management policy, Russia's federal mandate is ambitious but unevenly implemented.",
    lawName: "Federal Law No. 498-FZ",
    article: "Articles 16-18",
    year: 2018,
    lastAmended: 2023,
    tags: ["stray animals", "OSVV", "shelters", "TNR"],
  },

  // ==================== SOUTH AFRICA ====================
  {
    id: "za-001",
    country: "South Africa",
    countryCode: "ZA",
    category: "Anti-Cruelty",
    topic: "Animals Protection Act",
    summary:
      "Prohibits cruelty to animals including overloading, overdriving, torturing, and neglecting animals.",
    details:
      "The Animals Protection Act 71 of 1962 is South Africa's primary animal welfare legislation. Section 2(1) criminalizes various forms of cruelty including beating, kicking, ill-treating, overloading, torturing, or terrifying any animal, while Section 2(1)(r) prohibits confining animals in insufficient space. Enforcement is carried out by the National Council of SPCAs (NSPCA), empowered under Section 8 to inspect premises and seize mistreated animals. The Act was last amended in 1993 and penalties under Section 2(2) include fines or imprisonment up to 12 months. The NSPCA v. Minister of Justice (2016) Constitutional Court case affirmed the NSPCA's standing to privately prosecute animal cruelty cases. South Africa's Animal Protection Index rating remains moderate, as the 1962 Act lacks modern welfare concepts such as sentience recognition and the Five Freedoms framework, prompting ongoing calls for comprehensive reform.",
    lawName: "Animals Protection Act 71 of 1962",
    article: "Sections 2-3",
    year: 1962,
    lastAmended: 1993,
    penaltyMax: "Fine or imprisonment up to 12 months",
    tags: ["anti-cruelty", "SPCA enforcement", "welfare"],
  },
  {
    id: "za-002",
    country: "South Africa",
    countryCode: "ZA",
    category: "Wildlife Protection",
    topic: "Biodiversity Act",
    summary:
      "Comprehensive biodiversity management including protection of threatened species and regulation of trade in wildlife.",
    details:
      "The National Environmental Management: Biodiversity Act 10 of 2004 (NEMBA) provides for the management and conservation of South Africa's biological diversity. Chapters 4-5 establish listed threatened or protected species (TOPS), regulating activities through a permit system administered by the Department of Forestry, Fisheries and the Environment (DFFE). NEMBA implements CITES obligations and was amended in 2013 (Act 14 of 2013) to strengthen biodiversity management plans. The South African National Biodiversity Institute (SANBI) provides scientific support. Penalties under Section 101 include fines up to ZAR 10 million or imprisonment up to 10 years. In 2024, the lion bone trade regulations under NEMBA drew international attention. South Africa hosts the world's largest rhino population, and NEMBA's anti-poaching provisions are critical, though enforcement challenges persist in Kruger National Park and other biodiversity hotspots.",
    lawName:
      "National Environmental Management: Biodiversity Act 10 of 2004",
    article: "Chapters 4-5",
    year: 2004,
    lastAmended: 2013,
    penaltyMax: "Fine up to ZAR 10 million or imprisonment up to 10 years",
    tags: ["biodiversity", "threatened species", "CITES"],
  },
  {
    id: "za-003",
    country: "South Africa",
    countryCode: "ZA",
    category: "Farm Animals",
    topic: "Meat Safety Act",
    summary:
      "Regulates hygiene at slaughter facilities and provides standards for humane slaughter.",
    details:
      "The Meat Safety Act 40 of 2000 regulates the slaughter of animals for human and animal consumption. Sections 7-11 require that animals be slaughtered at registered abattoirs and prescribe standards for humane handling and slaughter practices. The Department of Agriculture, Land Reform and Rural Development (DALRRD) enforces the Act through veterinary inspections. Supplementary regulations include the Livestock Welfare Coordinating Committee standards and the Red Meat Regulations (R.1072 of 2004) governing transport and lairage conditions. Pre-slaughter stunning is mandatory under the Act, with religious slaughter exemptions permitted under strict veterinary supervision. Penalties include fines or imprisonment up to 2 years. South Africa processes approximately 3.2 million cattle and 6.5 million sheep annually, making farm animal welfare a significant concern. The Act aligns with OIE (WOAH) Terrestrial Animal Health Code standards, though compliance monitoring at rural abattoirs remains a challenge identified by the NSPCA.",
    lawName: "Meat Safety Act 40 of 2000",
    article: "Sections 7-11",
    year: 2000,
    penaltyMax: "Fine or imprisonment up to 2 years",
    tags: ["slaughter", "meat safety", "farm animals"],
  },
  // ==================== KENYA ====================
  {
    id: "ke-001",
    country: "Kenya",
    countryCode: "KE",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Prohibits cruelty to domestic and captive animals including beating, kicking, overloading, and neglect.",
    details:
      "The Prevention of Cruelty to Animals Act (Cap 360), originally enacted in 1962 during the colonial era, criminalizes various forms of cruelty under Section 3, including beating, overloading, infuriating, terrifying, and torturing any animal. Section 4 prohibits conveying animals in a manner likely to cause unnecessary suffering, and Section 5 addresses failure to provide food, water, and shelter. The Kenya Society for the Protection and Care of Animals (KSPCA) assists in enforcement alongside the Kenya Police Service. Penalties are modest at fines up to KES 3,000 or imprisonment up to 6 months, widely criticized as inadequate given inflation since 1962. The Act lacks modern provisions for sentience recognition or positive welfare duties. A draft Animal Welfare Bill has been under consideration since 2015 to modernize protections. Compared to Tanzania's comprehensive Animal Welfare Act 2008, Kenya's framework remains colonial-era and significantly outdated.",
    lawName: "Prevention of Cruelty to Animals Act (Cap 360)",
    article: "Section 3",
    year: 1962,
    lastAmended: 2012,
    penaltyMax: "Fine up to KES 3,000 or imprisonment up to 6 months",
    tags: ["anti-cruelty", "domestic animals", "welfare"],
  },
  {
    id: "ke-002",
    country: "Kenya",
    countryCode: "KE",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and management",
    summary:
      "Comprehensive wildlife protection law establishing the Kenya Wildlife Service and protecting endangered species.",
    details:
      "The Wildlife Conservation and Management Act 2013 (No. 47 of 2013) provides for the protection, conservation, and management of wildlife in Kenya. Part V establishes the Kenya Wildlife Service (KWS) as the principal conservation agency, while Part VII creates the Wildlife Compensation Fund for human-wildlife conflict. Sections 92-95 impose severe penalties for wildlife crimes: poaching of endangered species such as elephants and rhinos carries fines up to KES 20 million or life imprisonment under Section 92. The Act replaced the 1976 Wildlife Act and was amended in 2019 to strengthen community conservancy provisions. Kenya's 1977 hunting ban remains one of Africa's oldest. The Ivory Stockpile Destruction of 2016, where Kenya burned 105 tonnes of ivory, demonstrated its commitment. The Northern Rangelands Trust coordinates community conservancies covering over 44,000 sq km alongside KWS enforcement.",
    lawName: "Wildlife Conservation and Management Act 2013",
    article: "Parts V-VII",
    year: 2013,
    penaltyMax:
      "Fine up to KES 20 million or life imprisonment for endangered species",
    tags: ["wildlife", "KWS", "endangered species", "poaching"],
  },
  {
    id: "ke-003",
    country: "Kenya",
    countryCode: "KE",
    category: "Wildlife Protection",
    topic: "Ivory trade ban",
    summary:
      "Complete ban on the trade and possession of ivory and trophy hunting in Kenya.",
    details:
      "Kenya has implemented one of the world's strictest ivory trade bans under Section 92 of the Wildlife Conservation and Management Act 2013. Ivory trafficking carries fines up to KES 20 million (approximately USD 150,000) or life imprisonment, among the harshest penalties globally. Kenya banned trophy hunting in 1977 via Presidential Decree, making it one of the earliest African nations to do so. The country has conducted dramatic public ivory burns, most notably the 2016 destruction of 105 tonnes of ivory valued at USD 172 million, overseen by President Uhuru Kenyatta. KWS anti-poaching units operate with paramilitary training and equipment. Kenya's elephant population has recovered from approximately 16,000 in 1989 to over 36,000 by 2023. The Kenya Wildlife Conservancies Association coordinates over 160 community and private conservancies. At CITES CoP19 (2022), Kenya co-sponsored proposals to maintain the ivory trade ban against lobbying from southern African nations favoring controlled trade.",
    lawName: "Wildlife Conservation and Management Act 2013",
    article: "Section 92",
    year: 2013,
    penaltyMax: "Fine up to KES 20 million or life imprisonment",
    tags: ["ivory ban", "trophy hunting ban", "conservation"],
  },
  // ==================== NIGERIA ====================
  {
    id: "ng-001",
    country: "Nigeria",
    countryCode: "NG",
    category: "Anti-Cruelty",
    topic: "Criminal Code animal cruelty provisions",
    summary:
      "Criminalizes cruelty to animals under the Criminal Code Act provisions.",
    details:
      "Nigeria's Criminal Code Act (Cap C38 LFN 2004, applicable in southern states) contains provisions against cruelty to animals under Section 495, which prohibits wanton, unreasonable, or negligent acts of cruelty toward any animal, carrying penalties of fines or imprisonment up to 6 months. The Penal Code (applicable in 19 northern states) contains parallel provisions under Sections 450-452. Nigeria operates a dual legal system, and enforcement varies significantly between the 36 states and the Federal Capital Territory. There is no comprehensive standalone animal welfare legislation at the federal level, and the Nigerian Society for the Prevention of Cruelty to Animals remains inactive. The National Environmental Standards and Regulations Enforcement Agency (NESREA), established under the NESREA Act 2007, has some jurisdiction over animal welfare but focuses primarily on environmental protection. Nigeria's Animal Protection Index rating by World Animal Protection ranks among the lowest globally (Grade G), reflecting the absence of modern welfare legislation.",
    lawName: "Criminal Code Act",
    article: "Section 495",
    year: 1916,
    penaltyMax: "Fine or imprisonment up to 6 months",
    tags: ["anti-cruelty", "criminal code", "limited enforcement"],
  },
  {
    id: "ng-002",
    country: "Nigeria",
    countryCode: "NG",
    category: "Wildlife Protection",
    topic: "Endangered species regulation",
    summary:
      "Regulates hunting, capture, and trade of endangered species through permit systems.",
    details:
      "The Endangered Species (Control of International Trade and Traffic) Act 1985 (Cap E9 LFN 2004) regulates international trade in endangered species in accordance with CITES, which Nigeria ratified in 1974. Sections 1-5 prohibit the hunting, capture, trade, or export of species listed in the Act's schedules without a permit from the Federal Ministry of Environment. The National Park Service Act (Cap N65 LFN 2004) protects wildlife within eight designated national parks. NESREA (National Environmental Standards and Regulations Enforcement Agency), established under the NESREA Act 2007, oversees biodiversity protection and environmental enforcement. Penalties include fines up to NGN 1 million or imprisonment up to 3 years. The Act was amended in 2016 to update species listings. Nigeria faces significant challenges with illegal wildlife trade, particularly in pangolin scales and African grey parrots. The country serves as a transit hub for ivory trafficking from Central Africa, prompting increased INTERPOL cooperation.",
    lawName: "Endangered Species Act",
    article: "Sections 1-5",
    year: 1985,
    lastAmended: 2016,
    penaltyMax: "Fine up to NGN 1 million or imprisonment up to 3 years",
    tags: ["endangered species", "CITES", "wildlife trade"],
  },
  {
    id: "ng-003",
    country: "Nigeria",
    countryCode: "NG",
    category: "Wildlife Protection",
    topic: "National Park Service and protected areas",
    summary:
      "Establishes and manages national parks for wildlife conservation across Nigeria's diverse ecosystems.",
    details:
      "The National Park Service Act (Cap N65, Laws of the Federation 2004) established the National Park Service to manage Nigeria's national parks including Cross River, Yankari, Gashaka-Gumti, Kainji Lake, Old Oyo, Okomu, Chad Basin, and Kamuku. The Service is responsible for wildlife conservation, anti-poaching patrols, and ecological research within park boundaries. Hunting, logging, and unauthorized entry are prohibited. The Act empowers park rangers with powers of arrest and provides for the prosecution of offenders who kill, capture, or trade in protected wildlife species within park boundaries.",
    lawName: "National Park Service Act (Cap N65 LFN 2004)",
    article: "Sections 28-36",
    year: 1999,
    lastAmended: 2004,
    penaltyMax: "Fine up to NGN 500,000 or imprisonment up to 5 years",
    tags: ["national parks", "conservation", "anti-poaching", "Cross River"],
  },

  // ==================== EGYPT ====================
  {
    id: "eg-001",
    country: "Egypt",
    countryCode: "EG",
    category: "Wildlife Protection",
    topic: "Environmental protection and biodiversity",
    summary:
      "Provides for environmental protection including wildlife conservation and natural reserves.",
    details:
      "Environmental Law No. 4 of 1994 (amended by Law No. 9 of 2009) is Egypt's primary environmental legislation. Articles 28-38 govern biodiversity and wildlife protection, establishing the Egyptian Environmental Affairs Agency (EEAA) under the Ministry of Environment as the principal enforcement body. The law provides for the creation of natural protectorates under a Prime Ministerial decree system and prohibits hunting, killing, or disturbing wildlife in protected areas. Egypt ratified CITES in 1978, and the EEAA serves as the Management Authority. Penalties under Article 84 include fines up to EGP 500,000 or imprisonment up to 5 years. Egypt has declared 30 protectorates covering approximately 15% of the country, including Ras Mohammed National Park (1983) and St. Katherine Protectorate. The law's effectiveness is limited by enforcement capacity in remote desert protectorates. Compared to other North African nations, Egypt has the region's most developed protected area network but lacks a standalone animal welfare statute.",
    lawName: "Environmental Law No. 4 of 1994",
    article: "Articles 28-38",
    year: 1994,
    lastAmended: 2009,
    penaltyMax: "Fine up to EGP 500,000 or imprisonment up to 5 years",
    tags: ["environment", "natural reserves", "wildlife"],
  },
  {
    id: "eg-002",
    country: "Egypt",
    countryCode: "EG",
    category: "Anti-Cruelty",
    topic: "Penal Code animal cruelty provisions",
    summary:
      "Criminalizes killing or poisoning domestic animals and livestock under the Penal Code.",
    details:
      "Egypt's Penal Code (Qanun al-Uqubat) contains provisions criminalizing the killing or poisoning of animals belonging to others. Article 355 penalizes the intentional killing of livestock or domestic animals with imprisonment up to one year and fines, while Articles 356-357 address poisoning animals with enhanced penalties. These provisions are primarily framed as property crimes rather than welfare protections. The General Directorate of Veterinary Services under the Ministry of Agriculture regulates animal health and slaughter practices. There is no comprehensive standalone animal welfare law in Egypt, though Ministerial Decree No. 27 of 1967 established basic slaughter standards. Egypt's Society for the Prevention of Cruelty to Animals (ESPCA, founded 1891) is one of Africa's oldest animal welfare organizations but lacks enforcement powers. The country faces challenges with stray animal management, particularly in Cairo. Compared to Tunisia and Morocco, Egypt's anti-cruelty framework remains the most fragmented in North Africa.",
    lawName: "Egyptian Penal Code",
    article: "Articles 355-357",
    year: 1937,
    penaltyMax: "Fine or imprisonment up to 1 year",
    tags: ["penal code", "property protection", "livestock"],
  },
  {
    id: "eg-003",
    country: "Egypt",
    countryCode: "EG",
    category: "Wildlife Protection",
    topic: "Natural protectorates and biodiversity",
    summary:
      "Establishes and manages natural protectorates to conserve Egypt's biodiversity and unique ecosystems.",
    details:
      "Prime Ministerial Decree No. 1067 of 1983, later strengthened by Environmental Law No. 4 of 1994 (Articles 28-38), created the framework for designating natural protectorates across Egypt. As of 2023, Egypt has 30 declared protectorates covering approximately 15% of the country's total area, including Ras Mohammed National Park (established 1983), St. Katherine Protectorate, and the White Desert. The Egyptian Environmental Affairs Agency (EEAA) manages these areas. Violations including hunting, collecting specimens, or damaging habitats within protectorates carry fines up to EGP 500,000 and imprisonment up to one year. Egypt is home to endangered species including the Egyptian tortoise, Barbary sheep, and Nubian ibex.",
    lawName: "Law No. 102 of 1983 on Natural Protectorates",
    article: "Articles 1-8",
    year: 1983,
    lastAmended: 2009,
    penaltyMax: "Fine up to EGP 500,000 or imprisonment up to 1 year",
    tags: ["natural protectorates", "Ras Mohammed", "EEAA", "biodiversity"],
  },

  // ==================== ETHIOPIA ====================
  {
    id: "et-001",
    country: "Ethiopia",
    countryCode: "ET",
    category: "Wildlife Protection",
    topic: "Wildlife development and conservation",
    summary:
      "Establishes the framework for wildlife conservation including protected areas and species management.",
    details:
      "The Wildlife Development, Conservation, and Utilization Proclamation No. 541/2007 provides for the conservation and sustainable use of wildlife resources across Ethiopia's diverse ecosystems. Articles 4-15 establish three categories of protected wildlife (completely protected, conditionally protected, and utilized species) and regulate hunting through a licensing system administered by the Ethiopian Wildlife Conservation Authority (EWCA). The Proclamation replaced earlier wildlife legislation from 1972 and was supplemented by Proclamation No. 575/2008 establishing EWCA as an autonomous federal agency. Penalties under Article 32 include fines up to ETB 100,000 or imprisonment up to 10 years for killing or trading in protected species. Ethiopia hosts unique endemic fauna including the Ethiopian wolf (Canis simensis, fewer than 500 remaining), Walia ibex, mountain nyala, and gelada baboon. The Simien Mountains National Park, a UNESCO World Heritage Site, is the flagship conservation area. Enforcement remains challenging due to limited ranger capacity and human-wildlife conflict in rural regions.",
    lawName:
      "Wildlife Development, Conservation, and Utilization Proclamation No. 541/2007",
    article: "Articles 4-15",
    year: 2007,
    penaltyMax:
      "Fine up to ETB 100,000 or imprisonment up to 10 years for protected species",
    tags: ["wildlife", "conservation", "protected areas"],
  },
  {
    id: "et-002",
    country: "Ethiopia",
    countryCode: "ET",
    category: "Anti-Cruelty",
    topic: "Criminal Code animal cruelty provisions",
    summary:
      "Prohibits cruelty to animals under the Criminal Code including mistreatment and overworking.",
    details:
      "Ethiopia's Criminal Code (Proclamation No. 414/2004) contains provisions against cruelty to animals under Articles 793-794. Article 793 prohibits ill-treating, overworking, or tormenting animals, carrying penalties of simple imprisonment up to one year or fines. Article 794 specifically addresses carrying out surgical operations on animals without proper anesthesia when required, with similar penalties. These provisions cover both domestic and wild animals and represent some of the few anti-cruelty provisions in East African criminal codes. The Ethiopian Federal Police and regional police forces are responsible for enforcement, though prosecution of animal cruelty cases is rare due to competing priorities and limited public awareness. Ethiopia has over 60 million livestock (one of Africa's largest herds), and working animals including horses and donkeys face particular welfare concerns. Organizations such as the Donkey Sanctuary Ethiopia and SPANA work alongside government agencies. Compared to neighboring Kenya and Tanzania, Ethiopia's anti-cruelty provisions are notably basic and lack a dedicated animal welfare statute.",
    lawName: "Criminal Code of Ethiopia",
    article: "Articles 793-794",
    year: 2004,
    penaltyMax: "Fine or imprisonment up to 1 year",
    tags: ["criminal code", "anti-cruelty", "domestic animals"],
  },
  {
    id: "et-003",
    country: "Ethiopia",
    countryCode: "ET",
    category: "Wildlife Protection",
    topic: "Ethiopian Wildlife Conservation Authority",
    summary:
      "Establishes the Ethiopian Wildlife Conservation Authority to manage national parks and wildlife conservation.",
    details:
      "Proclamation No. 575/2008 established the Ethiopian Wildlife Conservation Authority (EWCA) as an autonomous federal agency responsible for managing national parks, wildlife sanctuaries, and wildlife reserves. EWCA oversees the Simien Mountains National Park (UNESCO World Heritage Site, home to the endemic Walia ibex and Ethiopian wolf), Bale Mountains National Park, and Awash National Park, among others. The Authority regulates hunting through a permit system, manages human-wildlife conflict, and coordinates conservation efforts with regional states. Ethiopia has nine national parks protecting endemic species including the gelada baboon, mountain nyala, and Ethiopian wolf, one of the world's rarest canids with fewer than 500 individuals remaining.",
    lawName: "Ethiopian Wildlife Conservation Authority Establishment Proclamation No. 575/2008",
    article: "Articles 5-16",
    year: 2008,
    lastAmended: 2015,
    penaltyMax: "Fine up to ETB 200,000 or imprisonment up to 15 years for protected species",
    tags: ["EWCA", "national parks", "Simien Mountains", "Ethiopian wolf", "endemic species"],
  },

  // ==================== GHANA ====================
  {
    id: "gh-001",
    country: "Ghana",
    countryCode: "GH",
    category: "Wildlife Protection",
    topic: "Wild animals preservation",
    summary:
      "Protects wild animals and regulates hunting through a licensing and closed season system.",
    details:
      "The Wild Animals Preservation Act 1961 (Act 43) and the Wildlife Conservation Regulations 1971 (L.I. 685) establish a framework for wildlife protection in Ghana. Sections 1-8 of Act 43 designate protected species across three schedules, establish closed seasons for hunting, and create wildlife reserves. The Wildlife Division of the Forestry Commission, established under the Forestry Commission Act 1999 (Act 571), is responsible for enforcement with ranger patrols across six national parks and 16 wildlife reserves. Penalties include fines or imprisonment up to 2 years. The Regulations were last substantially amended in 1971, and advocacy groups including the Ghana Wildlife Society have called for modernization. Ghana's wildlife faces threats from bushmeat hunting and habitat loss, with forest elephant and chimpanzee populations declining. Ghana ratified CITES in 1975, and the Forestry Commission serves as the Management Authority for wildlife trade controls. The Act is among the oldest active wildlife statutes in West Africa.",
    lawName: "Wild Animals Preservation Act 1961 (Act 43)",
    article: "Sections 1-8",
    year: 1961,
    lastAmended: 1971,
    penaltyMax: "Fine or imprisonment up to 2 years",
    tags: ["wildlife", "hunting regulation", "preservation"],
  },
  {
    id: "gh-002",
    country: "Ghana",
    countryCode: "GH",
    category: "Anti-Cruelty",
    topic: "Criminal Offences Act animal provisions",
    summary:
      "Criminalizes cruelty to animals under Ghana's criminal law provisions.",
    details:
      "The Criminal Offences Act 1960 (Act 29) contains provisions prohibiting cruelty to animals. Section 274 criminalizes cruelly beating, kicking, ill-treating, overdriving, overloading, or torturing any animal, with penalties of fines or imprisonment up to 12 months. The Domestic Animals Act (Cap 83) regulates the keeping and control of domestic animals, requiring licensing of dogs and establishing liability for damage caused by straying animals. The Ghana Police Service is responsible for enforcement of criminal animal cruelty provisions, though prosecutions are rare. Ghana's Animal Protection Index rating (World Animal Protection) is Grade E, reflecting the absence of a comprehensive standalone welfare statute. The Ghana Veterinary Services Directorate under the Ministry of Food and Agriculture oversees animal health standards. Advocacy organizations including the Ghana Animal Welfare Society have pushed for a dedicated Animal Welfare Bill. Compared to Nigeria and other West African neighbors, Ghana's criminal code provisions provide slightly stronger textual protections but face similar enforcement gaps.",
    lawName: "Criminal Offences Act 1960 (Act 29)",
    article: "Section 274",
    year: 1960,
    penaltyMax: "Fine or imprisonment up to 12 months",
    tags: ["criminal code", "anti-cruelty", "domestic animals"],
  },
  {
    id: "gh-003",
    country: "Ghana",
    countryCode: "GH",
    category: "Wildlife Protection",
    topic: "Forestry Commission and wildlife reserves",
    summary:
      "Establishes the Forestry Commission to manage Ghana's forest and wildlife resources including national parks.",
    details:
      "The Forestry Commission Act 1999 (Act 571) established the Forestry Commission as the government body responsible for regulation and management of forest and wildlife resources. The Wildlife Division under the Commission manages Ghana's wildlife reserves including Mole National Park (Ghana's largest wildlife refuge covering 4,840 sq km), Kakum National Park, and Bui National Park. The Commission enforces the Wildlife Conservation Regulations 1971 (L.I. 685) which designate protected species in three schedules: completely protected animals (Schedule 1), partially protected animals (Schedule 2), and animals with closed seasons (Schedule 3). Ghana's protected wildlife includes forest elephants, bongo antelope, Diana monkeys, and various parrot species targeted by illegal trade.",
    lawName: "Forestry Commission Act 1999 (Act 571)",
    article: "Sections 1-15",
    year: 1999,
    penaltyMax: "Fine or imprisonment up to 5 years",
    tags: ["Forestry Commission", "Mole National Park", "wildlife reserves", "forest elephants"],
  },

  // ==================== TANZANIA ====================
  {
    id: "tz-001",
    country: "Tanzania",
    countryCode: "TZ",
    category: "Anti-Cruelty",
    topic: "Animal welfare",
    summary:
      "Comprehensive animal welfare law covering domestic, farm, and captive animals with duties of care.",
    details:
      "The Animal Welfare Act 2008 (Act No. 19 of 2008) is one of the most comprehensive animal welfare laws in Africa. Parts II-V establish positive duties of care for animal owners (Section 8), regulate the use of animals in scientific experiments requiring ethics committee approval (Part IV), and set standards for animal transport and slaughter including mandatory pre-slaughter stunning (Part V). The Act created the Animal Welfare Advisory Council (Section 5) to advise the Minister responsible for livestock on welfare matters. Penalties under Section 44 include fines up to TZS 5 million or imprisonment up to 3 years. The Ministry of Livestock and Fisheries oversees implementation. Tanzania's Act is notable in the African context for covering both domestic and wild animals and requiring institutional ethics review for animal research, provisions absent in most African legislation. The law was influenced by the UK's Animal Welfare Act 2006 and represents a significant departure from the colonial-era anti-cruelty model prevalent across East Africa.",
    lawName: "Animal Welfare Act 2008",
    article: "Parts II-V",
    year: 2008,
    penaltyMax: "Fine up to TZS 5 million or imprisonment up to 3 years",
    tags: ["comprehensive", "welfare", "duty of care"],
  },
  {
    id: "tz-002",
    country: "Tanzania",
    countryCode: "TZ",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary:
      "Protects wildlife through a national park system and anti-poaching measures.",
    details:
      "The Wildlife Conservation Act 2009 (Act No. 5 of 2009) provides for the conservation and management of wildlife resources in Tanzania. Parts IV-VII establish the Tanzania Wildlife Authority (TAWA), replacing the Wildlife Division as the principal management body. The Act regulates hunting through a block allocation and annual quota system managed by TAWA's Hunting Section, requiring professional hunter licensing. Sections 59-72 impose severe penalties for poaching: killing a protected species (Schedule I) carries fines up to TZS 50 million or imprisonment up to 20 years. The Act works alongside the National Parks Act (Cap 282) for protected area management by TANAPA. Tanzania hosts approximately 40% of East Africa's large mammal populations across 22 national parks, including the Serengeti's annual wildebeest migration. The 2016 Wildlife Conservation Regulations strengthened anti-trafficking provisions in response to the elephant poaching crisis that reduced Tanzania's elephant population from 109,000 (2009) to 43,000 (2014).",
    lawName: "Wildlife Conservation Act 2009",
    article: "Parts IV-VII",
    year: 2009,
    penaltyMax:
      "Fine up to TZS 50 million or imprisonment up to 20 years for protected species",
    tags: ["wildlife", "anti-poaching", "national parks"],
  },
  {
    id: "tz-003",
    country: "Tanzania",
    countryCode: "TZ",
    category: "Wildlife Protection",
    topic: "National Parks management and Serengeti protection",
    summary:
      "Manages Tanzania's national parks including the Serengeti ecosystem and Ngorongoro Conservation Area.",
    details:
      "The National Parks Act (Cap 282, revised 2002) and the Ngorongoro Conservation Area Act (Cap 284) govern Tanzania's world-renowned protected areas. Tanzania has 22 national parks managed by TANAPA (Tanzania National Parks Authority), including the Serengeti National Park (UNESCO World Heritage Site, 14,750 sq km), Kilimanjaro National Park, and Gombe Stream National Park where Jane Goodall conducted pioneering chimpanzee research. The Ngorongoro Conservation Area is uniquely managed to allow Maasai pastoralists to coexist with wildlife. Anti-poaching operations are coordinated with INTERPOL and employ ranger teams equipped with modern surveillance technology. Penalties for poaching in national parks include fines up to TZS 200 million or imprisonment up to 30 years for trafficking ivory or rhino horn.",
    lawName: "National Parks Act (Cap 282)",
    article: "Parts II-V",
    year: 2002,
    lastAmended: 2019,
    penaltyMax: "Fine up to TZS 200 million or imprisonment up to 30 years for ivory/rhino horn",
    tags: ["TANAPA", "Serengeti", "Ngorongoro", "anti-poaching", "UNESCO"],
  },

  // ==================== MOROCCO ====================
  {
    id: "ma-001",
    country: "Morocco",
    countryCode: "MA",
    category: "Anti-Cruelty",
    topic: "Protection of domestic animals",
    summary:
      "Colonial-era law prohibiting cruelty to domestic and captive animals.",
    details:
      "The Dahir (Royal Decree) of August 4, 1914 on the Protection of Animals prohibits acts of cruelty to domestic animals and animals held in captivity. Articles 1-6 criminalize beating, overloading, and ill-treating animals, as well as causing unnecessary suffering, with penalties of short-term imprisonment and modest fines. Originally enacted during the French Protectorate, this legislation remains Morocco's primary anti-cruelty law over a century later. The Direction de l'Elevage (Directorate of Livestock) under the Ministry of Agriculture has some oversight, but enforcement is minimal. Morocco's Penal Code (Articles 601-607) supplements these protections with provisions against destruction of animals belonging to others. Working equines (an estimated 3 million horses, mules, and donkeys) face particular welfare challenges, prompting NGOs such as SPANA Morocco and the Society for the Protection of Animals and Nature (SPANA) to operate veterinary clinics. Morocco's Animal Protection Index rating is Grade D, and activists have called for a modern animal welfare law to replace the colonial-era Dahir, which lacks sentience recognition and positive welfare duties.",
    lawName: "Dahir on the Protection of Animals (1914)",
    article: "Articles 1-6",
    year: 1914,
    penaltyMax: "Fine or short-term imprisonment",
    tags: ["colonial-era", "anti-cruelty", "domestic animals"],
  },
  {
    id: "ma-002",
    country: "Morocco",
    countryCode: "MA",
    category: "Wildlife Protection",
    topic: "Hunting and wildlife conservation",
    summary:
      "Regulates hunting and protects certain wildlife species through seasonal restrictions.",
    details:
      "The Dahir of 1923 on the Police of Hunting and the subsequent Law No. 29-05 (2011) on the Protection of Flora and Fauna Species and the Control of their Trade regulate wildlife conservation in Morocco. Law 29-05 modernized the framework by establishing comprehensive species protection categories, regulating hunting seasons through annual ministerial decrees, and implementing CITES obligations (Morocco ratified CITES in 1975). The Haut Commissariat aux Eaux et Forets et a la Lutte Contre la Desertification (HCEFLCD) serves as the principal enforcement agency, managing 10 national parks and over 150 Sites of Biological and Ecological Interest. Penalties include fines up to MAD 200,000 or imprisonment up to 2 years. Morocco's protected species include the Barbary macaque (the only African primate north of the Sahara), the Northern bald ibis (successfully restored through captive breeding at Souss-Massa), and the Cuvier's gazelle. Illegal trade in Barbary macaques as pets, particularly to Europe, remains a significant enforcement challenge.",
    lawName: "Law No. 29-05 on Protection of Flora and Fauna",
    article: "Various",
    year: 2011,
    penaltyMax: "Fine up to MAD 200,000 or imprisonment up to 2 years",
    tags: ["wildlife", "hunting", "CITES"],
  },
  {
    id: "ma-003",
    country: "Morocco",
    countryCode: "MA",
    category: "Wildlife Protection",
    topic: "Haut Commissariat aux Eaux et Forets and endangered species",
    summary:
      "Morocco's forestry agency manages wildlife conservation including protection of endangered Barbary macaques and other species.",
    details:
      "The Haut Commissariat aux Eaux et Forets et a la Lutte Contre la Desertification (HCEFLCD) is the primary agency responsible for wildlife conservation in Morocco. Under Law No. 29-05 on the Protection of Flora and Fauna Species (2011) and the Forestry Code (Dahir of 1917, amended), Morocco protects endangered species including the Barbary macaque (the only wild primate population in Africa north of the Sahara), the Barbary leopard (critically endangered), the Northern bald ibis (restored through captive breeding at Souss-Massa National Park), and the Cuvier's gazelle. Morocco has 10 national parks and over 150 Sites of Biological and Ecological Interest. The country is a signatory to CITES and prohibits commercial trade in listed species, with violations carrying fines up to MAD 200,000 and imprisonment up to two years.",
    lawName: "Law No. 29-05 on Protection of Flora and Fauna / Forestry Code",
    article: "Various",
    year: 2011,
    penaltyMax: "Fine up to MAD 200,000 or imprisonment up to 2 years",
    tags: ["HCEFLCD", "Barbary macaque", "Northern bald ibis", "national parks", "CITES"],
  },

  // ==================== TUNISIA ====================
  {
    id: "tn-001",
    country: "Tunisia",
    countryCode: "TN",
    category: "Anti-Cruelty",
    topic: "Animal health and veterinary control",
    summary:
      "Regulates animal health, veterinary practices, and establishes standards for animal care.",
    details:
      "Law No. 2005-95 of October 18, 2005 on Animal Health and Veterinary Control provides a comprehensive framework for animal health surveillance, disease control, and veterinary practices across Tunisia. Articles 1-45 establish standards for animal care, regulate the veterinary profession through the National Council of the Order of Veterinarians, and require veterinary inspection of animals in trade and at slaughter. The Direction Generale des Services Veterinaires (DGSV) under the Ministry of Agriculture is the principal enforcement body. Penalties include fines up to TND 50,000 or imprisonment up to 2 years for violations of veterinary health standards. The law requires humane handling during veterinary procedures and transport, and mandates vaccination campaigns for livestock diseases. Tunisia has approximately 7 million sheep and 1.5 million cattle, making livestock welfare economically significant. The law implements OIE (WOAH) standards and aligns with EU veterinary frameworks under the Tunisia-EU Association Agreement. However, it lacks explicit anti-cruelty provisions, which are instead found in the Penal Code.",
    lawName: "Law No. 2005-95 on Animal Health and Veterinary Control",
    article: "Articles 1-45",
    year: 2005,
    penaltyMax: "Fine up to TND 50,000 or imprisonment up to 2 years",
    tags: ["veterinary", "animal health", "disease control"],
  },
  {
    id: "tn-002",
    country: "Tunisia",
    countryCode: "TN",
    category: "Wildlife Protection",
    topic: "Hunting and wildlife conservation",
    summary:
      "Regulates hunting activities and protects certain wild species through seasonal controls.",
    details:
      "The Forestry Code (Code Forestier, Law No. 88-20 of 1988, amended 2005) and related regulations govern wildlife protection and hunting in Tunisia. The Code establishes protected species lists, regulates hunting seasons and methods through annual ministerial orders, and provides for the creation of nature reserves and national parks. The Direction Generale des Forets (DGF) under the Ministry of Agriculture serves as the principal enforcement body, managing eight national parks including Ichkeul (a UNESCO World Heritage and Ramsar site) and El Feija, where the reintroduced Barbary stag thrives. Tunisia ratified CITES in 1974, and the DGF serves as the Management Authority. Penalties include fines or imprisonment up to 1 year. Hunting permits are issued annually with species-specific quotas. Tunisia's protected species include the slender-horned gazelle, the striped hyena, the Barbary stag (the only native deer in Africa), and the Mediterranean monk seal. The country's 17 nature reserves face pressures from agricultural expansion and urbanization.",
    lawName: "Forestry Code",
    article: "Various",
    year: 1988,
    lastAmended: 2005,
    penaltyMax: "Fine or imprisonment up to 1 year",
    tags: ["forestry", "hunting", "protected species"],
  },
  {
    id: "tn-003",
    country: "Tunisia",
    countryCode: "TN",
    category: "Anti-Cruelty",
    topic: "Penal Code animal cruelty provisions",
    summary:
      "Tunisia's Penal Code criminalizes cruelty to animals and destruction of livestock.",
    details:
      "The Tunisian Penal Code (Code Penal, Articles 316-317) criminalizes the willful killing or poisoning of domestic animals belonging to others, as well as acts of cruelty toward animals. Article 316 addresses the killing or maiming of livestock and domestic animals with penalties of imprisonment up to one year and fines. Article 317 addresses poisoning of animals with enhanced penalties. Additionally, Law No. 2005-95 on Veterinary Health supplements these provisions by requiring humane handling during veterinary procedures, transport, and at slaughter. Tunisia ratified CITES in 1974 and enacted implementing legislation through the Forestry Code. The Direction Generale des Forets (General Directorate of Forests) oversees enforcement of wildlife trade provisions. Tunisia's protected species include the Barbary stag (reintroduced in El Feija National Park), the slender-horned gazelle, and the Mediterranean monk seal.",
    lawName: "Tunisian Penal Code / Law No. 2005-95",
    article: "Articles 316-317 (Penal Code)",
    year: 1913,
    lastAmended: 2005,
    penaltyMax: "Fine up to TND 10,000 or imprisonment up to 1 year",
    tags: ["penal code", "cruelty", "livestock", "veterinary health"],
  },

  // ==================== UGANDA ====================
  {
    id: "ug-001",
    country: "Uganda",
    countryCode: "UG",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Prohibits cruelty to domestic and captive animals including beating, overloading, and neglect.",
    details:
      "The Animal (Prevention of Cruelty) Act (Cap 39, Laws of Uganda) was originally enacted in 1957 during the British colonial era. Sections 2-6 criminalize various forms of cruelty to animals including beating, kicking, overloading, torturing, and failing to provide adequate food, water, and shelter. Section 4 regulates the transport of animals, and Section 5 prohibits animal fighting. Penalties are limited to fines or imprisonment up to 6 months, reflecting the colonial-era origins. The Uganda Police Force is nominally responsible for enforcement, but prosecutions are exceedingly rare. The Uganda Society for the Protection and Care of Animals (USPCA) has advocated for modernization of this legislation. Uganda's working animals, particularly donkeys used in transport (estimated at over 250,000), face welfare challenges. Compared to Tanzania's comprehensive Animal Welfare Act 2008, Uganda's colonial-era statute lacks positive welfare duties, sentience recognition, and adequate penalties, though the National Environment Act 2019 introduced some progressive provisions regarding nature's rights.",
    lawName: "Animal (Prevention of Cruelty) Act (Cap 39)",
    article: "Sections 2-6",
    year: 1957,
    penaltyMax: "Fine or imprisonment up to 6 months",
    tags: ["anti-cruelty", "colonial-era", "domestic animals"],
  },
  {
    id: "ug-002",
    country: "Uganda",
    countryCode: "UG",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary:
      "Comprehensive wildlife protection including anti-poaching measures and community conservation.",
    details:
      "The Uganda Wildlife Act 2019 replaced the earlier Uganda Wildlife Statute of 1996 and provides for the conservation and sustainable management of wildlife. Parts III-VI established the Uganda Wildlife Authority (UWA) as an autonomous body under the Ministry of Tourism, Wildlife and Antiquities. The Act introduced dramatically stronger penalties: trafficking in protected species now carries fines up to UGX 20 billion (approximately USD 5.4 million) or life imprisonment, among the harshest in Africa. The Act incorporates community wildlife management under Part V, enabling wildlife use rights for local communities adjacent to protected areas. UWA manages 10 national parks and 12 wildlife reserves, including Bwindi Impenetrable and Queen Elizabeth National Parks. Uganda hosts approximately half of the world's remaining mountain gorillas. The 2019 Act also strengthened provisions against bushmeat poaching and introduced wildlife DNA forensics for prosecution. Uganda participates in the Greater Virunga Transboundary Collaboration with Rwanda and the DRC for cross-border conservation.",
    lawName: "Uganda Wildlife Act 2019",
    article: "Parts III-VI",
    year: 2019,
    penaltyMax:
      "Fine up to UGX 20 billion or life imprisonment for trafficking protected species",
    tags: ["wildlife", "anti-poaching", "community conservation"],
  },
  {
    id: "ug-003",
    country: "Uganda",
    countryCode: "UG",
    category: "Wildlife Protection",
    topic: "Mountain gorilla protection and tourism regulation",
    summary:
      "Uganda's wildlife framework provides special protections for mountain gorillas and regulates gorilla tourism.",
    details:
      "Under the Uganda Wildlife Act 2019 and the Uganda Wildlife Authority (UWA) regulations, mountain gorillas (Gorilla beringei beringei) in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park receive the highest level of legal protection. Bwindi is home to approximately half of the world's remaining mountain gorilla population (about 459 individuals as of the 2018 census). Gorilla tourism is strictly regulated with permits limited to groups of 8 visitors per gorilla family per day, maintaining a 7-meter minimum distance. Poaching or harming a mountain gorilla is punishable by life imprisonment and/or fines up to UGX 20 billion under the 2019 Act. Uganda collaborates with Rwanda and the DRC through the Greater Virunga Transboundary Collaboration for cross-border gorilla conservation.",
    lawName: "Uganda Wildlife Act 2019",
    article: "Parts III-IV, Schedules",
    year: 2019,
    penaltyMax: "Life imprisonment and/or fine up to UGX 20 billion",
    tags: ["mountain gorillas", "Bwindi", "gorilla tourism", "UWA", "transboundary"],
  },

  // ==================== RWANDA ====================
  {
    id: "rw-001",
    country: "Rwanda",
    countryCode: "RW",
    category: "Wildlife Protection",
    topic: "Environment and biodiversity",
    summary:
      "Protects biodiversity including endangered species such as mountain gorillas.",
    details:
      "The Organic Law No. 04/2005 on the Protection, Conservation, and Promotion of the Environment provides the framework for biodiversity conservation in Rwanda. Articles 47-62 establish protections for wildlife, regulate hunting and collection of biological resources, and require environmental impact assessments. The Rwanda Development Board (RDB), through its Tourism and Conservation Department, manages three national parks: Volcanoes (mountain gorillas), Akagera (savanna wildlife), and Nyungwe (chimpanzees and primates). Penalties include fines up to RWF 10 million or imprisonment up to 5 years. Rwanda's gorilla conservation is a global success story: the mountain gorilla population in Volcanoes National Park has grown from approximately 250 in the 1980s to over 600 by 2023. Gorilla tourism permits at USD 1,500 per person generate over USD 19 million annually, with 10% distributed to surrounding communities under the revenue-sharing program. Law No. 70/2008 on Biodiversity further strengthened species protection, and Rwanda's conservation model is widely cited as a benchmark for community-based wildlife tourism in Africa.",
    lawName:
      "Organic Law No. 04/2005 on Protection of the Environment",
    article: "Articles 47-62",
    year: 2005,
    penaltyMax: "Fine up to RWF 10 million or imprisonment up to 5 years",
    tags: ["biodiversity", "gorilla conservation", "environment"],
  },
  {
    id: "rw-002",
    country: "Rwanda",
    countryCode: "RW",
    category: "Anti-Cruelty",
    topic: "Penal Code animal provisions",
    summary:
      "Criminalizes cruelty to animals and destruction of livestock under the Penal Code.",
    details:
      "Rwanda's Penal Code (Organic Law No. 01/2012/OL of 2 May 2012) contains provisions criminalizing cruelty to animals and the destruction of livestock belonging to others. These provisions, while primarily framed as property offenses with penalties of fines or imprisonment up to 2 years, also serve animal welfare functions. The Rwanda National Police is responsible for enforcement, though prosecutions for animal cruelty are uncommon. Rwanda has been developing more comprehensive animal welfare regulations, with the Rwanda Agriculture and Animal Resources Development Board (RAB) overseeing livestock health and welfare standards. The country has approximately 1.3 million cattle (primarily under the government's Girinka one-cow-per-family program), 3.5 million goats, and 700,000 sheep. Rwanda's 2020 Animal Health Law strengthened veterinary standards and slaughter requirements. Compared to its East African neighbors, Rwanda lacks a dedicated animal welfare statute but compensates through strong wildlife conservation enforcement and progressive environmental legislation, including Rights of Nature provisions.",
    lawName: "Organic Law No. 01/2012 (Penal Code)",
    article: "Various",
    year: 2012,
    penaltyMax: "Fine or imprisonment up to 2 years",
    tags: ["penal code", "anti-cruelty", "livestock"],
  },
  {
    id: "rw-003",
    country: "Rwanda",
    countryCode: "RW",
    category: "Wildlife Protection",
    topic: "Volcanoes National Park and gorilla conservation",
    summary:
      "Rwanda's conservation framework provides world-leading protection for mountain gorillas in Volcanoes National Park.",
    details:
      "Law No. 70/2008 on Biodiversity and its implementing regulations establish Rwanda's framework for biodiversity conservation and protected area management. Volcanoes National Park (Parc National des Volcans), established in 1925 and covering 160 sq km of the Virunga massif, is the flagship of Rwanda's conservation efforts. The park is home to approximately 340 mountain gorillas and the Rwanda Development Board (RDB) manages gorilla tourism permits at USD 1,500 per person (among the highest in the world). This revenue-sharing model allocates 10% of park revenues to surrounding communities, creating strong local incentives for conservation. The Dian Fossey Gorilla Fund maintains a permanent research presence. Killing or injuring a gorilla carries penalties of 5-7 years imprisonment under the Penal Code. Rwanda also protects golden monkeys, over 200 bird species, and unique Afromontane forest habitats.",
    lawName: "Law No. 70/2008 on Biodiversity",
    article: "Various",
    year: 2008,
    penaltyMax: "Imprisonment of 5-7 years for killing protected species",
    tags: ["Volcanoes National Park", "mountain gorillas", "RDB", "community conservation"],
  },

  // ==================== BOTSWANA ====================
  {
    id: "bw-001",
    country: "Botswana",
    countryCode: "BW",
    category: "Anti-Cruelty",
    topic: "Animal protection",
    summary:
      "Prohibits cruelty to domestic and captive animals including neglect and mistreatment.",
    details:
      "The Animal Protection Act (Cap 37:01), originally enacted in 1936 during the colonial period, is Botswana's primary animal welfare legislation. Sections 2-5 criminalize cruelty to animals including beating, ill-treating, overloading, and failing to provide adequate food, water, and shelter, with penalties of fines or imprisonment up to 6 months. The Botswana Police Service is responsible for formal enforcement, while the Botswana Society for the Prevention of Cruelty to Animals (Botswana SPCA) assists with investigations and public education. The Act covers all domestic and captive animals but lacks modern provisions such as sentience recognition, positive welfare duties, or regulation of animals in research. Botswana has approximately 2.3 million cattle under traditional and commercial farming systems, and livestock welfare during the country's extensive cattle trek movements remains a concern. The Department of Veterinary Services under the Ministry of Agriculture oversees animal health standards. Compared to South Africa's Animals Protection Act 71 of 1962, Botswana's 1936 statute is even more antiquated and has never been substantially amended, prompting calls for modernization from animal welfare advocates.",
    lawName: "Animal Protection Act (Cap 37:01)",
    article: "Sections 2-5",
    year: 1936,
    penaltyMax: "Fine or imprisonment up to 6 months",
    tags: ["anti-cruelty", "SPCA", "colonial-era"],
  },
  {
    id: "bw-002",
    country: "Botswana",
    countryCode: "BW",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and national parks",
    summary:
      "Protects wildlife through national parks and game reserves with strict anti-poaching measures.",
    details:
      "The Wildlife Conservation and National Parks Act (Cap 38:01, enacted 1992, amended 2019) provides for the establishment and management of national parks and game reserves. Parts III-V establish the framework for protected areas, wildlife management, and licensing. In January 2014, President Ian Khama imposed a blanket hunting moratorium through Executive Order to protect declining wildlife populations, though limited quota-based hunting was controversially reintroduced in 2019 under President Mokgweetsi Masisi. The Department of Wildlife and National Parks (DWNP) manages protected areas covering 17% of Botswana's territory, including Chobe National Park (11,700 sq km) and the Central Kalahari Game Reserve (52,800 sq km). Penalties under the Act include fines up to BWP 100,000 or imprisonment up to 10 years. Botswana hosts approximately 130,000 elephants, Africa's largest population, creating intense human-wildlife conflict in northern regions. The country's controversial 'shoot-to-kill' anti-poaching policy for armed intruders, implemented by the Botswana Defence Force, has drawn both praise and criticism internationally.",
    lawName: "Wildlife Conservation and National Parks Act (Cap 38:01)",
    article: "Parts III-V",
    year: 1992,
    lastAmended: 2019,
    penaltyMax: "Fine up to BWP 100,000 or imprisonment up to 10 years",
    tags: ["wildlife", "hunting ban", "national parks", "elephants"],
  },
  {
    id: "bw-003",
    country: "Botswana",
    countryCode: "BW",
    category: "Wildlife Protection",
    topic: "Elephant conservation and anti-poaching",
    summary:
      "Botswana hosts Africa's largest elephant population with comprehensive protections and anti-poaching measures.",
    details:
      "Botswana hosts Africa's largest elephant population, estimated at approximately 130,000 individuals concentrated primarily in the Chobe and northern regions. The Wildlife Conservation and National Parks Act (Cap 38:01) and Executive Order of 2014 imposed a blanket hunting ban (partially lifted in 2019 under quota systems). The Botswana Defence Force (BDF) is authorized to conduct anti-poaching operations under a controversial 'shoot-to-kill' policy for armed poachers implemented in 2013. The Department of Wildlife and National Parks (DWNP) manages 17% of the country as protected areas, including Chobe National Park (11,700 sq km), the Central Kalahari Game Reserve (one of the world's largest at 52,800 sq km), and the Makgadikgadi Pans. Botswana is a CITES member and has consistently opposed ivory trade at CITES Conferences of the Parties. Penalties for elephant poaching include fines up to BWP 100,000 or imprisonment up to 10 years.",
    lawName: "Wildlife Conservation and National Parks Act (Cap 38:01)",
    article: "Parts III-VI",
    year: 1992,
    lastAmended: 2019,
    penaltyMax: "Fine up to BWP 100,000 or imprisonment up to 10 years; shoot-to-kill for armed poachers",
    tags: ["elephants", "anti-poaching", "Chobe", "CITES", "hunting ban"],
  },

  // ==================== NAMIBIA ====================
  {
    id: "na-001",
    country: "Namibia",
    countryCode: "NA",
    category: "Anti-Cruelty",
    topic: "Animal protection",
    summary:
      "Prohibits cruelty to animals including beating, overloading, and neglect of domestic and captive animals.",
    details:
      "The Animal Protection Act 71 of 1962, inherited from South Africa upon Namibia's independence in 1990, is the country's primary animal welfare legislation. Sections 2-3 criminalize various forms of cruelty to animals including beating, ill-treating, overloading, and neglect, with penalties of fines or imprisonment up to 12 months. The Namibia SPCA (NSPCA Namibia) is empowered under Section 8 to investigate and enforce animal welfare standards. The Act covers all domestic and captive animals but lacks modern welfare concepts such as sentience recognition. The Ministry of Agriculture, Water and Land Reform oversees animal health through the Directorate of Veterinary Services. Namibia's commercial farming sector manages approximately 2.5 million cattle and 3 million small stock, with the Livestock Identification and Traceability System (NamLITS) providing some welfare monitoring during trade. The colonial-era Act has never been substantially amended for Namibian conditions, and the Legal Assistance Centre has advocated for comprehensive reform. Compared to South Africa's evolving welfare jurisprudence, Namibia's enforcement framework remains underdeveloped.",
    lawName: "Animal Protection Act 71 of 1962",
    article: "Sections 2-3",
    year: 1962,
    penaltyMax: "Fine or imprisonment up to 12 months",
    tags: ["anti-cruelty", "SPCA", "inherited legislation"],
  },
  {
    id: "na-002",
    country: "Namibia",
    countryCode: "NA",
    category: "Wildlife Protection",
    topic: "Nature conservation and communal conservancies",
    summary:
      "Pioneering communal conservancy model for wildlife management giving communities ownership of wildlife.",
    details:
      "The Nature Conservation Ordinance 4 of 1975 and the Nature Conservation Amendment Act of 1996 established Namibia's groundbreaking communal conservancy system, widely regarded as one of Africa's most successful conservation models. The 1996 Amendment granted communal area residents the same rights over wildlife that commercial farmers had held since 1975, enabling communities to form registered conservancies with legal rights to manage, use, and benefit from wildlife. The Ministry of Environment, Forestry and Tourism (MEFT) administers the system. As of 2023, 86 registered communal conservancies cover over 166,000 sq km (approximately 20% of the country). Penalties for wildlife crimes under the Ordinance include fines up to NAD 200,000 or imprisonment up to 20 years. The conservancy model has driven dramatic wildlife recoveries, including desert-adapted elephants, black rhinos, and cheetahs. Namibia hosts the world's largest free-roaming black rhino population. The Community-Based Natural Resource Management (CBNRM) program generated over NAD 180 million in community income in 2019 through tourism and sustainable hunting.",
    lawName: "Nature Conservation Amendment Act of 1996",
    article: "Various",
    year: 1996,
    penaltyMax: "Fine up to NAD 200,000 or imprisonment up to 20 years",
    tags: [
      "communal conservancy",
      "community-based",
      "wildlife management",
    ],
  },
  {
    id: "na-003",
    country: "Namibia",
    countryCode: "NA",
    category: "Wildlife Protection",
    topic: "Communal conservancy wildlife management",
    summary:
      "Namibia's pioneering communal conservancy model has become a global benchmark for community-based natural resource management.",
    details:
      "The Nature Conservation Amendment Act of 1996 granted communal conservancies the right to manage and benefit from wildlife on communal lands, creating one of Africa's most successful conservation models. As of 2023, Namibia has 86 registered communal conservancies covering over 166,000 sq km (approximately 20% of the country). Conservancies earned over NAD 180 million in 2019 from trophy hunting, tourism lodges, and wildlife credits. This model has led to dramatic wildlife recoveries: desert-adapted elephants, black rhinos (Namibia hosts the largest free-roaming population), lions, and cheetahs have all increased in conservancy areas. The Community-Based Natural Resource Management (CBNRM) program, coordinated by the Ministry of Environment, Forestry and Tourism (MEFT), provides technical support. Illegal hunting or trade in protected species carries fines up to NAD 200,000 or imprisonment up to 20 years under the Nature Conservation Ordinance.",
    lawName: "Nature Conservation Amendment Act of 1996 / Nature Conservation Ordinance 4 of 1975",
    article: "Various",
    year: 1996,
    lastAmended: 2017,
    penaltyMax: "Fine up to NAD 200,000 or imprisonment up to 20 years",
    tags: ["communal conservancies", "CBNRM", "black rhino", "community benefits", "desert elephants"],
  },

  // ==================== SENEGAL ====================
  {
    id: "sn-001",
    country: "Senegal",
    countryCode: "SN",
    category: "Wildlife Protection",
    topic: "Environmental code and fauna protection",
    summary:
      "Provides for the protection of fauna and flora as part of Senegal's environmental framework.",
    details:
      "The Environmental Code (Law No. 2001-01 of January 15, 2001) provides a comprehensive framework for environmental protection in Senegal, including provisions for biodiversity conservation and fauna protection under Title IV. The Code regulates activities that may harm wildlife and their habitats, establishes mandatory environmental impact assessment requirements for development projects, and creates the National Environmental Commission. The Direction de l'Environnement et des Etablissements Classes (DEEC) under the Ministry of Environment serves as the principal enforcement body. Penalties include fines up to CFA 50 million (approximately USD 80,000) or imprisonment up to 5 years for serious environmental offenses. Senegal ratified CITES in 1977, and the Code implements trade controls on listed species. The country's six national parks and 213 classified forests harbor important West African wildlife populations. The Code replaced earlier environmental legislation from 1983 and aligns with the African Convention on the Conservation of Nature and Natural Resources. Enforcement remains challenging in rural areas where subsistence hunting and habitat conversion for agriculture are prevalent.",
    lawName: "Environmental Code (Law No. 2001-01)",
    article: "Title IV",
    year: 2001,
    penaltyMax: "Fine up to CFA 50 million or imprisonment up to 5 years",
    tags: ["environment", "biodiversity", "fauna protection"],
  },
  {
    id: "sn-002",
    country: "Senegal",
    countryCode: "SN",
    category: "Wildlife Protection",
    topic: "Hunting and wildlife conservation",
    summary:
      "Regulates hunting and establishes protected areas and wildlife reserves.",
    details:
      "The Hunting and Wildlife Protection Code (Law No. 86-04 of January 24, 1986, amended by Law 2001-01) regulates hunting activities, establishes national parks and wildlife reserves, and designates protected species in Senegal. The Code categorizes wildlife into fully protected species (Class A), partially protected species (Class B), and game species with seasonal quotas. The Direction des Parcs Nationaux (DPN) and the Direction des Eaux, Forets, Chasses et de la Conservation des Sols jointly enforce hunting regulations. Niokolo-Koba National Park (UNESCO World Heritage Site since 1981, covering 9,130 sq km) is the flagship protected area, harboring the endangered Derby eland, chimpanzees, and lions, though it was placed on UNESCO's Danger List in 2007 due to poaching and infrastructure threats. Hunting permits are issued annually through prefectural offices with species-specific bag limits. Penalties include fines or imprisonment up to 2 years. Senegal's position on West African bird migration flyways also brings it under the African-Eurasian Migratory Waterbird Agreement (AEWA).",
    lawName: "Hunting and Wildlife Protection Code (Law No. 86-04)",
    article: "Various",
    year: 1986,
    lastAmended: 2001,
    penaltyMax: "Fine or imprisonment up to 2 years",
    tags: ["hunting", "national parks", "protected species"],
  },
  {
    id: "sn-003",
    country: "Senegal",
    countryCode: "SN",
    category: "Anti-Cruelty",
    topic: "Pastoral Code and livestock welfare",
    summary:
      "Senegal's Pastoral Code regulates livestock keeping, transport, and welfare across its extensive pastoralist economy.",
    details:
      "The Pastoral Code (Law No. 2004-16, known as the Loi Agro-Sylvo-Pastorale) regulates animal husbandry, livestock welfare, and pastoral activities in Senegal. Given that livestock constitutes a major sector of the Senegalese economy (approximately 7% of GDP), the Code establishes requirements for animal housing, feeding, veterinary care, and humane treatment during transport and at markets. The Direction de l'Elevage (Directorate of Livestock) under the Ministry of Livestock oversees enforcement. Senegal's Penal Code (Articles 474-475) also criminalizes the willful killing or injuring of animals belonging to others, with penalties including fines and imprisonment up to two years. Senegal hosts the Niokolo-Koba National Park (a UNESCO World Heritage Site since 1981) which protects West African wildlife including Derby eland, chimpanzees, lions, and the endangered West African manatee.",
    lawName: "Pastoral Code (Law No. 2004-16) / Penal Code",
    article: "Various",
    year: 2004,
    penaltyMax: "Fine or imprisonment up to 2 years",
    tags: ["pastoral code", "livestock welfare", "Niokolo-Koba", "pastoralism"],
  },

  // ==================== MOZAMBIQUE ====================
  {
    id: "mz-001",
    country: "Mozambique",
    countryCode: "MZ",
    category: "Wildlife Protection",
    topic: "Conservation areas and biodiversity",
    summary:
      "Establishes and manages conservation areas for biodiversity protection.",
    details:
      "The Conservation Areas Law (Law No. 16/2014 of June 20, 2014) provides for the creation, management, and protection of conservation areas in Mozambique. Articles 1-45 establish categories of protected areas including national parks, national reserves, community conservation areas, and environmental protection zones. The National Administration of Conservation Areas (ANAC), under the Ministry of Land and Environment, serves as the principal management body overseeing 7 national parks, 6 national reserves, and 20 community conservancies. Penalties under the Act include fines or imprisonment up to 12 years for serious offenses including poaching of protected species. The Niassa Special Reserve (Africa's third-largest protected area at 42,000 sq km) and Gorongosa National Park (restored through a public-private partnership with the Carr Foundation) are flagship conservation areas. Mozambique faces significant ivory poaching challenges linked to transnational criminal networks. The 2017 amendments strengthened penalties, introducing up to 16 years imprisonment for killing elephants, rhinos, or pangolins within conservation areas.",
    lawName: "Conservation Areas Law (Law No. 16/2014)",
    article: "Articles 1-45",
    year: 2014,
    penaltyMax: "Fine or imprisonment up to 12 years for serious offences",
    tags: ["conservation areas", "national parks", "biodiversity"],
  },
  {
    id: "mz-002",
    country: "Mozambique",
    countryCode: "MZ",
    category: "Wildlife Protection",
    topic: "Forestry and wildlife",
    summary:
      "Regulates forestry and wildlife resources including anti-poaching provisions.",
    details:
      "The Forestry and Wildlife Law (Law No. 10/99 of July 7, 1999, amended by the Conservation Areas Law No. 16/2014) regulates the conservation and sustainable use of forest and wildlife resources. Chapters III-V establish the framework for hunting licenses (simple and sport hunting), wildlife trade controls, and anti-poaching measures. The National Directorate of Forests (DINAF) under the Ministry of Land and Environment administers hunting quotas and concession areas. Penalties include fines or imprisonment up to 8 years. Mozambique ratified CITES in 1981, and the country has strengthened enforcement significantly since 2014 in response to rhino and elephant poaching pressures, particularly cross-border poaching from South Africa's Kruger National Park into the Limpopo National Park. The Great Limpopo Transfrontier Conservation Area (linking Kruger, Limpopo, and Zimbabwe's Gonarezhou parks) is managed jointly. Mozambique's elephant population was devastated during the civil war (1977-1992), and recovery efforts continue. The country's marine resources, including dugongs and whale sharks along the Bazaruto Archipelago, receive additional protections under fisheries legislation.",
    lawName: "Forestry and Wildlife Law (Law No. 10/99)",
    article: "Chapters III-V",
    year: 1999,
    lastAmended: 2014,
    penaltyMax: "Fine or imprisonment up to 8 years",
    tags: ["forestry", "wildlife", "anti-poaching"],
  },
  {
    id: "mz-003",
    country: "Mozambique",
    countryCode: "MZ",
    category: "Anti-Cruelty",
    topic: "Penal Code animal protection provisions",
    summary:
      "Mozambique's Penal Code criminalizes cruelty to animals and destruction of livestock.",
    details:
      "The Mozambican Penal Code (Codigo Penal, Articles 402-406) criminalizes the destruction, killing, or maiming of domestic animals and livestock belonging to others. While primarily framed as property crimes, these provisions also serve an animal welfare function. Article 402 addresses the intentional killing of livestock with penalties of imprisonment up to two years and fines. The more recent Animal Health Law (Law No. 13/2020) establishes a modern veterinary framework requiring humane treatment of animals during veterinary procedures, transport, and slaughter. Mozambique faces significant wildlife crime challenges, particularly ivory poaching linked to the Niassa Special Reserve (Africa's third-largest protected area at 42,000 sq km). In response, the Conservation Areas Law (Law No. 16/2014) was strengthened in 2017 with enhanced penalties including imprisonment up to 16 years for illegal hunting of protected species such as elephants, rhinos, and pangolins within conservation areas. The National Administration of Conservation Areas (ANAC) coordinates anti-poaching operations.",
    lawName: "Penal Code / Animal Health Law (Law No. 13/2020)",
    article: "Articles 402-406 (Penal Code)",
    year: 2014,
    lastAmended: 2020,
    penaltyMax: "Imprisonment up to 16 years for poaching in conservation areas",
    tags: ["penal code", "Niassa Reserve", "anti-poaching", "ANAC", "veterinary"],
  },

  // ==================== AUSTRALIA ====================
  {
    id: "au-001",
    country: "Australia",
    countryCode: "AU",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals (state-level)",
    summary:
      "State and territory laws prohibit cruelty to animals with comprehensive welfare standards.",
    details:
      "Australia regulates animal welfare at the state and territory level through eight separate legislative frameworks. Key legislation includes the Prevention of Cruelty to Animals Act 1979 (NSW), the Prevention of Cruelty to Animals Act 1986 (Vic), the Animal Care and Protection Act 2001 (Qld), and the Animal Welfare Act 1992 (ACT). Each jurisdiction's RSPCA holds delegated enforcement powers alongside state authorities. Penalties vary significantly: NSW imposes fines up to AUD 110,000 and/or 5 years imprisonment for aggravated cruelty under Section 530 of the Crimes Act 1900, while Victoria allows fines up to AUD 99,132. The Australian Animal Welfare Strategy (2005, revised 2008) provides national coordination but is non-binding. In 2023, the federal government announced plans for a national Inspector-General of Animal Welfare. The ACT became the first jurisdiction to formally recognize animal sentience in 2019 (Animal Welfare Legislation Amendment Act 2019). Live animal export has been a major controversy, with the 2018 Awassi Express scandal leading to the Export Control (Animals) Order 2020 reforms.",
    lawName: "Prevention of Cruelty to Animals Act 1979 (NSW)",
    article: "Sections 4-8",
    year: 1979,
    lastAmended: 2022,
    penaltyMax:
      "Fine up to AUD 110,000 and/or imprisonment up to 5 years (varies by state)",
    tags: ["state-level", "anti-cruelty", "duty of care"],
  },
  {
    id: "au-002",
    country: "Australia",
    countryCode: "AU",
    category: "Wildlife Protection",
    topic: "Environment protection and biodiversity conservation",
    summary:
      "Federal law protecting nationally threatened species and regulating wildlife trade.",
    details:
      "The Environment Protection and Biodiversity Conservation Act 1999 (EPBC Act) is Australia's key federal environmental legislation, administered by the Department of Climate Change, Energy, the Environment and Water. Parts 13-13A protect matters of national environmental significance including listed threatened species and ecological communities under Sections 178-196. The Act implements CITES through the Wildlife Trade Regulations 2020. Penalties include fines up to AUD 555,000 for individuals or imprisonment up to 7 years (Section 471). The 2020 Samuel Review found the EPBC Act was 'not fit for purpose' and recommended an independent Environmental Protection Agency. As of 2023, 1,939 species and ecological communities are listed as threatened under the Act. Australia has one of the world's highest mammal extinction rates, with 34 mammal species lost since European settlement. The Act was amended in 2023 to establish Nature Repair Market legislation. Key protected species include the koala (listed as endangered in QLD, NSW, ACT in 2022), the platypus, and the Leadbeater's possum. The Act also regulates whale watching and marine protected areas across Australia's extensive Exclusive Economic Zone.",
    lawName:
      "Environment Protection and Biodiversity Conservation Act 1999",
    article: "Parts 13-13A",
    year: 1999,
    lastAmended: 2023,
    penaltyMax:
      "Fine up to AUD 555,000 for individuals or 7 years imprisonment",
    tags: ["federal", "EPBC", "threatened species", "CITES"],
  },
  {
    id: "au-003",
    country: "Australia",
    countryCode: "AU",
    category: "Farm Animals",
    topic: "Australian Animal Welfare Standards",
    summary:
      "National standards and guidelines for livestock welfare covering transport, slaughter, and husbandry.",
    details:
      "The Australian Animal Welfare Standards and Guidelines are developed nationally through Animal Health Australia (AHA) and implemented through state and territory legislation, creating a harmonized but non-uniform framework. Key standards include the Land Transport of Livestock Standards (2012), the Cattle Standards (2016), and the Sheep and Goat Standards (under development). The standards development process involves scientific risk assessment, public consultation, and Regulation Impact Statements. Once endorsed by the Agriculture Ministers Forum, states incorporate the standards into their respective Prevention of Cruelty to Animals Acts. Australia processes approximately 30 million cattle, 32 million sheep, and 700 million poultry annually, making livestock welfare economically significant. The Model Codes of Practice for Animal Welfare (developed from the 1980s) preceded the current standards framework. Australia's Animal Welfare Standards have been criticized by organizations such as Voiceless and Animals Australia for permitting practices banned elsewhere, including mulesing of sheep and sow stalls, though several states have announced phase-out timelines for battery cages.",
    lawName: "Australian Animal Welfare Standards and Guidelines",
    article: "Various",
    year: 2012,
    lastAmended: 2023,
    tags: ["national standards", "livestock", "transport", "slaughter"],
  },
  {
    id: "au-004",
    country: "Australia",
    countryCode: "AU",
    category: "Animal Testing",
    topic: "Australian code for the care and use of animals for scientific purposes",
    summary:
      "National code governing the use of animals in research with mandatory ethics committee oversight.",
    details:
      "The Australian Code for the Care and Use of Animals for Scientific Purposes (8th Edition, 2013), published jointly by the National Health and Medical Research Council (NHMRC) and the Australian Research Council (ARC), governs the use of animals in research and teaching. The Code mandates institutional Animal Ethics Committees (AECs) to review and approve all animal research under the 3Rs framework (Replacement, Reduction, Refinement). It is implemented through state legislation including the Animal Research Act 1985 (NSW) and the Prevention of Cruelty to Animals Act 1986 (Vic, Part 3). Approximately 7.8 million animals are used annually in Australian research, primarily mice, fish, and livestock. AECs must include a veterinarian, a scientist, an animal welfare representative, and an independent community member. Australia banned cosmetic testing on animals through the Industrial Chemicals Act 2019 (effective 2020). The NHMRC monitors compliance and can withdraw funding from non-compliant institutions. Compared to New Zealand's approach, Australia lacks a statutory ban on great ape experimentation but has maintained a de facto moratorium since the 2000s.",
    lawName:
      "Australian Code for the Care and Use of Animals for Scientific Purposes",
    article: "Various",
    year: 2013,
    tags: ["animal testing", "ethics committee", "3Rs", "research"],
  },
  // ==================== NEW ZEALAND ====================
  {
    id: "nz-001",
    country: "New Zealand",
    countryCode: "NZ",
    category: "Anti-Cruelty",
    topic: "Animal welfare and sentience recognition",
    summary:
      "Comprehensive animal welfare law recognizing animals as sentient beings with duties of care for owners.",
    details:
      "The Animal Welfare Act 1999 (No. 142), amended significantly in 2015 (Animal Welfare Amendment Act No. 49) to formally recognize animals as sentient beings under Section 4, is globally regarded as one of the most progressive animal welfare laws. Section 10 establishes positive duties of care requiring owners to provide proper food, water, shelter, and veterinary treatment. Section 28 prohibits cruelty, and Section 29 prohibits wilful ill-treatment, with penalties up to NZD 500,000 or 5 years imprisonment for individuals under Section 37. The Ministry for Primary Industries (MPI) enforces the Act through Animal Welfare Inspectors and the National Animal Welfare Advisory Committee (NAWAC). The Act covers all animals including cephalopods and decapod crustaceans, an exceptionally broad scope. New Zealand banned cosmetic testing on animals in 2015 and prohibited use of great apes in research. The Act serves as a model cited in comparative animal law scholarship, particularly for its combination of sentience recognition with enforceable positive welfare obligations.",
    lawName: "Animal Welfare Act 1999",
    article: "Parts 1-2",
    year: 1999,
    lastAmended: 2015,
    penaltyMax:
      "Fine up to NZD 500,000 or imprisonment up to 5 years for individuals",
    tags: ["sentience", "comprehensive", "progressive", "duty of care"],
  },
  {
    id: "nz-002",
    country: "New Zealand",
    countryCode: "NZ",
    category: "Animal Testing",
    topic: "Regulation of animal testing",
    summary:
      "Strict regulation of animal testing with mandatory ethics committee approval and promotion of alternatives.",
    details:
      "Part 6 of the Animal Welfare Act 1999 (Sections 80-100) establishes a comprehensive regulatory framework for the use of animals in research, testing, and teaching. All animal research must be approved by an institutional Animal Ethics Committee (AEC) under Section 83, and proposals must demonstrate compliance with the 3Rs principles (Replacement, Reduction, Refinement). The National Animal Ethics Advisory Committee (NAEAC) provides oversight of all AECs. New Zealand banned cosmetic testing on animals in 2015 under Section 84A (inserted by the 2015 Amendment Act) and prohibited the use of great apes in research under Section 85A, becoming one of the first countries globally to do so. Approximately 300,000 animals are used annually in New Zealand research, with MPI publishing annual animal use statistics. The Animal Welfare (Care and Procedures) Regulations 2018 further detail requirements for research facilities. New Zealand has been actively promoting the New Zealand Centre for Human-Animal Studies and funding alternatives development. Compared to Australia's Code-based approach, New Zealand's statutory framework provides stronger legal enforceability.",
    lawName: "Animal Welfare Act 1999",
    article: "Part 6",
    year: 1999,
    lastAmended: 2015,
    penaltyMax:
      "Fine up to NZD 500,000 or imprisonment up to 5 years",
    tags: [
      "animal testing",
      "cosmetics ban",
      "ethics committee",
      "3Rs",
    ],
  },
  {
    id: "nz-003",
    country: "New Zealand",
    countryCode: "NZ",
    category: "Wildlife Protection",
    topic: "Wildlife protection and endangered species",
    summary:
      "Protects native wildlife including iconic species like kiwi and tuatara.",
    details:
      "The Wildlife Act 1953 (No. 31) provides for the protection of wildlife in New Zealand, with Section 3 establishing that all native wildlife is absolutely protected by default unless specifically exempted. The Act is administered by the Department of Conservation (DOC) and supplemented by the Conservation Act 1987 and the Trade in Endangered Species Act 1989 (implementing CITES). Penalties under Section 67A include fines up to NZD 250,000 or imprisonment up to 2 years. New Zealand has approximately 4,000 endemic species, with 80% of birds, all bats, and all reptiles found nowhere else. DOC manages extensive species recovery programs including Operation Nest Egg for kiwi (approximately 68,000 remaining), the kakapo recovery program (247 individuals as of 2023, one of the world's rarest parrots), and predator-free island sanctuaries for tuatara. The government's Predator Free 2050 initiative aims to eliminate introduced rats, stoats, and possums. New Zealand's conservation approach is unique globally for its focus on predator eradication to protect native species rather than traditional habitat-based conservation alone.",
    lawName: "Wildlife Act 1953",
    article: "Sections 3-9",
    year: 1953,
    lastAmended: 2020,
    penaltyMax: "Fine up to NZD 250,000 or imprisonment up to 2 years",
    tags: ["native wildlife", "kiwi", "endangered species", "conservation"],
  },
  // ==================== FIJI ====================
  {
    id: "fj-001",
    country: "Fiji",
    countryCode: "FJ",
    category: "Anti-Cruelty",
    topic: "Animal control and protection",
    summary:
      "Prohibits cruelty to animals and provides for the control of stray animals.",
    details:
      "The Animal (Control and Protection) Act 1953 (Cap 160, Laws of Fiji) is Fiji's primary animal welfare legislation. Sections 4-8 prohibit cruelty to animals including beating, kicking, overloading, and neglect, with penalties of fines or imprisonment up to 6 months. The Act also provides for the control of stray dogs and other animals through licensing and impoundment provisions. Enforcement is carried out by the Fiji Society for the Prevention of Cruelty to Animals (Fiji SPCA) and local municipal authorities. The Act is a colonial-era statute that has not been substantially modernized and lacks provisions for sentience recognition, positive welfare duties, or regulation of animals in research. The Ministry of Agriculture's Animal Health and Production Division oversees livestock health standards. Fiji has approximately 320,000 cattle and significant populations of feral goats and pigs. The Act's penalties are widely considered inadequate, and the Fiji Law Reform Commission has recommended comprehensive revision. Compared to New Zealand's Animal Welfare Act 1999, Fiji's legislation remains rudimentary, reflecting the Pacific Islands' generally limited animal welfare legal frameworks.",
    lawName: "Animal (Control and Protection) Act 1953",
    article: "Sections 4-8",
    year: 1953,
    penaltyMax: "Fine or imprisonment up to 6 months",
    tags: ["anti-cruelty", "stray animals", "SPCA"],
  },
  {
    id: "fj-002",
    country: "Fiji",
    countryCode: "FJ",
    category: "Wildlife Protection",
    topic: "Endangered and protected species",
    summary:
      "Protects endangered species and regulates trade in wildlife in accordance with CITES.",
    details:
      "The Endangered and Protected Species Act 2002 (Act No. 29 of 2002) implements Fiji's obligations under CITES, which Fiji ratified in 1997. Parts 2-4 regulate the import, export, and trade of endangered species through a permit system administered by the Department of Environment. Penalties under Section 24 include fines up to FJD 100,000 or imprisonment up to 5 years for trafficking in CITES-listed species. The Act covers terrestrial and marine species, with particular importance for Fiji's rich marine biodiversity including over 400 coral species and 1,500 fish species. The Fiji crested iguana (Brachylophus vitiensis, critically endangered and found only in Fiji) and the Fiji banded iguana are listed as fully protected. Marine species including green sea turtles, hawksbill turtles, and giant clams receive specific protection. The Act works alongside the Offshore Fisheries Management Act 2012 and the Inshore Fisheries Management Act 2023 for comprehensive marine resource management. Fiji's over 400 Locally Managed Marine Areas (LMMAs), using traditional tabu (no-take) zones, supplement formal legal protections with customary governance.",
    lawName: "Endangered and Protected Species Act 2002",
    article: "Parts 2-4",
    year: 2002,
    penaltyMax: "Fine up to FJD 100,000 or imprisonment up to 5 years",
    tags: ["CITES", "endangered species", "wildlife trade", "marine"],
  },
  {
    id: "fj-003",
    country: "Fiji",
    countryCode: "FJ",
    category: "Wildlife Protection",
    topic: "Marine species and reef protection",
    summary:
      "Fiji's environmental legislation provides extensive protections for marine biodiversity including coral reefs and sea turtles.",
    details:
      "The Environment Management Act 2005 and the Offshore Fisheries Management Act 2012 establish Fiji's framework for marine biodiversity protection. Fiji's waters contain over 400 coral species and 1,500 fish species. The Great Sea Reef (Cakaulevu), the world's third-longest continuous barrier reef at 200 km, receives special protections. Sea turtles (green, hawksbill, leatherback, and loggerhead) are fully protected under the Endangered and Protected Species Act 2002, with penalties of up to FJD 100,000 or imprisonment up to 5 years for killing, capturing, or trading in turtle products. Fiji has established over 400 Locally Managed Marine Areas (LMMAs) using traditional tabu (no-take) zones enforced by local communities. The Department of Environment under the Ministry of Waterways and Environment coordinates national marine conservation policy and CITES implementation for marine species.",
    lawName: "Environment Management Act 2005 / Endangered and Protected Species Act 2002",
    article: "Various",
    year: 2005,
    penaltyMax: "Fine up to FJD 100,000 or imprisonment up to 5 years",
    tags: ["marine biodiversity", "coral reefs", "sea turtles", "LMMA", "Great Sea Reef"],
  },

  // ==================== PAPUA NEW GUINEA ====================
  {
    id: "pg-001",
    country: "Papua New Guinea",
    countryCode: "PG",
    category: "Wildlife Protection",
    topic: "Fauna protection and control",
    summary:
      "Protects indigenous and migratory fauna and regulates hunting and wildlife trade.",
    details:
      "The Fauna (Protection and Control) Act 1966 (Chapter 154) provides for the protection and control of fauna in Papua New Guinea. Sections 4-15 establish categories of protected fauna under three schedules: protected fauna (Schedule 1, including all birds of paradise), restricted fauna (Schedule 2), and open fauna. The Act regulates hunting through a licensing system administered by the Conservation and Environment Protection Authority (CEPA) and controls the trade and export of wildlife. Penalties include fines up to PGK 5,000 or imprisonment up to 1 year. The Act is particularly important for protecting all 38 species of birds of paradise, PNG's national symbol, which are fully protected from commercial hunting. PNG's forests cover approximately 70% of its land area and host 5-10% of the world's biodiversity. Customary land ownership (97% of land) creates unique conservation challenges, as wildlife management must accommodate traditional hunting rights. The Wildlife Management Area system allows communities to establish protected zones on customary land.",
    lawName: "Fauna (Protection and Control) Act 1966",
    article: "Sections 4-15",
    year: 1966,
    lastAmended: 2014,
    penaltyMax: "Fine up to PGK 5,000 or imprisonment up to 1 year",
    tags: ["fauna", "birds of paradise", "hunting regulation"],
  },
  {
    id: "pg-002",
    country: "Papua New Guinea",
    countryCode: "PG",
    category: "Wildlife Protection",
    topic: "International trade in endangered species",
    summary:
      "Regulates international trade in fauna and flora species in accordance with CITES.",
    details:
      "The International Trade (Fauna and Flora) Act 1979 (Chapter 391) implements Papua New Guinea's obligations under CITES, which PNG ratified in 1975. Sections 2-10 regulate the import, export, and re-export of wildlife species and products through a permit system administered by the Conservation and Environment Protection Authority (CEPA), which serves as both the Management Authority and Scientific Authority. Penalties include fines up to PGK 10,000 or imprisonment up to 2 years. The Act is critical for controlling the trade in birds of paradise feathers, crocodile skins (PNG has a regulated crocodile skin industry worth approximately USD 2 million annually), and orchids. PNG's position within the Coral Triangle makes it a biodiversity hotspot with over 2,000 reef fish species. Illegal trade in marine species including seahorses and giant clams poses ongoing enforcement challenges. The Act works alongside the Environment Act 2000 and the International Fauna and Flora Trade Regulation 2003. CEPA has limited enforcement capacity across PNG's remote terrain and 600+ islands, and the country has sought international assistance through the CITES Compliance Assistance Programme.",
    lawName: "International Trade (Fauna and Flora) Act 1979",
    article: "Sections 2-10",
    year: 1979,
    penaltyMax: "Fine up to PGK 10,000 or imprisonment up to 2 years",
    tags: ["CITES", "wildlife trade", "conservation"],
  },
  {
    id: "pg-003",
    country: "Papua New Guinea",
    countryCode: "PG",
    category: "Anti-Cruelty",
    topic: "Criminal Code animal cruelty provisions",
    summary:
      "Prohibits cruelty to animals under Criminal Code provisions.",
    details:
      "Papua New Guinea's Criminal Code Act 1974 (Chapter 262) contains provisions against cruelty to animals under Section 244, which criminalizes the willful and unnecessary infliction of pain or suffering on any animal, with penalties of fines or imprisonment up to 6 months. This is the sole anti-cruelty provision in PNG's legal system and applies to all domestic and captive animals. Enforcement is severely limited, particularly in rural and remote areas where over 85% of the population lives and where customary practices including traditional pig-killing ceremonies and cassowary hunting may conflict with formal legal protections. The Royal Papua New Guinea Constabulary has responsibility for enforcement but lacks specialized animal welfare training. PNG has no standalone animal welfare legislation, no SPCA or equivalent organization with enforcement powers, and no provisions regulating animals in research or farming. The country's Animal Health and Production Division under the National Agriculture Research Institute focuses on livestock disease control rather than welfare. Compared to neighboring Australia and New Zealand, PNG's animal protection framework is among the weakest in the Oceania region.",
    lawName: "Criminal Code Act 1974",
    article: "Section 244",
    year: 1974,
    penaltyMax: "Fine or imprisonment up to 6 months",
    tags: ["criminal code", "anti-cruelty", "limited enforcement"],
  },

  // ==================== UNITED STATES ====================
  {
    id: "us-001",
    country: "United States",
    countryCode: "US",
    category: "Anti-Cruelty",
    topic: "Federal animal welfare standards",
    summary:
      "The Animal Welfare Act sets minimum standards for treatment of animals in research, exhibition, transport, and by dealers.",
    details:
      "The Animal Welfare Act (7 U.S.C. sections 2131-2159, enacted 1966) is the primary federal law regulating the treatment of animals in research, exhibition, transport, and by dealers. The USDA's Animal and Plant Health Inspection Service (APHIS) enforces the Act through facility licensing, annual inspections, and compliance investigations. The 1985 amendments (Public Law 99-198) strengthened protections for primates requiring psychological enrichment and established Institutional Animal Care and Use Committees (IACUCs). The PETS Act of 2006 added disaster planning provisions. Penalties include fines up to $10,000 per violation per day and/or 1 year imprisonment under Section 2149. Notably, the AWA excludes birds, rats, and mice bred for research (approximately 95% of research animals), farm animals, and cold-blooded animals, creating a significant coverage gap criticized in Silver Spring monkeys (1981) and subsequent advocacy. All 50 states have independent felony-level animal cruelty statutes. The Act has been amended eight times since 1966, most recently by the Puppy Protection Act provisions. Annual APHIS inspection reports are publicly available under FOIA.",
    lawName: "Animal Welfare Act",
    article: "7 U.S.C. §2131–2159",
    year: 1966,
    lastAmended: 2008,
    penaltyMax: "Up to $10,000 per violation and/or 1 year imprisonment",
    tags: ["research animals", "dealers", "exhibitors", "USDA"],
  },
  {
    id: "us-002",
    country: "United States",
    countryCode: "US",
    category: "Wildlife Protection",
    topic: "Endangered species conservation",
    summary:
      "The Endangered Species Act protects threatened and endangered species and their habitats.",
    details:
      "The Endangered Species Act (16 U.S.C. sections 1531-1544, enacted 1973) provides for the conservation of species that are endangered or threatened throughout all or a significant portion of their range. Administered by the U.S. Fish and Wildlife Service (USFWS) for terrestrial species and NOAA Fisheries for marine species, the Act prohibits 'take' (harass, harm, pursue, hunt, shoot, wound, kill, trap, capture, or collect) of listed species under Section 9. Section 7 requires all federal agencies to consult with USFWS to ensure their actions do not jeopardize listed species or destroy critical habitat. As of 2023, over 1,660 U.S. species are listed. Penalties include criminal fines up to $50,000 and/or 1 year imprisonment; civil penalties up to $25,000 per violation. Landmark cases include TVA v. Hill (1978, snail darter), Babbitt v. Sweet Home Chapter (1995, defining 'harm'), and Weyerhaeuser v. USFWS (2018, critical habitat). The Act's Habitat Conservation Plan (Section 10) process has been used for balancing development with species protection. The ESA is widely considered the world's strongest endangered species law but faces ongoing legislative challenges.",
    lawName: "Endangered Species Act",
    article: "16 U.S.C. §1531–1544",
    year: 1973,
    lastAmended: 1988,
    penaltyMax:
      "Up to $50,000 fine and/or 1 year imprisonment (criminal); $25,000 civil penalty",
    tags: ["endangered species", "habitat", "conservation", "federal"],
  },
  {
    id: "us-003",
    country: "United States",
    countryCode: "US",
    category: "Anti-Cruelty",
    topic: "Federal animal cruelty felony",
    summary:
      "The PACT Act makes certain acts of animal cruelty a federal felony.",
    details:
      "The Preventing Animal Cruelty and Torture (PACT) Act of 2019 (18 U.S.C. section 48, Public Law 116-72) makes it a federal crime to engage in intentional acts of crushing, burning, drowning, suffocating, or impaling animals, or engaging in sexual exploitation of animals, when the offense involves interstate or foreign commerce. Penalties include up to 7 years imprisonment. The PACT Act expanded the earlier Animal Crush Video Prohibition Act of 2010 by criminalizing the underlying acts of cruelty themselves, not just their depiction. The FBI began tracking animal cruelty as a Group A offense in the National Incident-Based Reporting System (NIBRS) in 2016. Prior to the PACT Act, animal cruelty was exclusively a state-level offense, and all 50 states now have felony animal cruelty provisions (the last state, South Dakota, enacted its law in 2014). Federal enforcement is led by the FBI and the Department of Justice. The Act was passed unanimously by both chambers of Congress, reflecting bipartisan consensus. It exempts hunting, veterinary practices, slaughter for food, pest control, and medical research conducted in compliance with the AWA.",
    lawName: "Preventing Animal Cruelty and Torture (PACT) Act",
    article: "18 U.S.C. §48",
    year: 2019,
    penaltyMax: "Up to 7 years imprisonment",
    tags: ["federal felony", "cruelty", "torture", "interstate"],
  },

  // ==================== CANADA ====================
  {
    id: "ca-001",
    country: "Canada",
    countryCode: "CA",
    category: "Anti-Cruelty",
    topic: "Criminal animal cruelty provisions",
    summary:
      "Canada's Criminal Code criminalizes willful neglect and cruelty to animals.",
    details:
      "Sections 444-447 of the Criminal Code (R.S.C. 1985, c. C-46) address animal cruelty offenses. Section 445 prohibits willfully causing unnecessary pain, suffering, or injury to animals, while Section 446 addresses failure to provide adequate food, water, shelter, and care. Bill C-84 (2019, Royal Assent June 2019) amended the Code to ban bestiality (new Section 160) and animal fighting including training animals for fighting. Offenses are hybrid: prosecution by indictment carries up to 5 years imprisonment, while summary conviction carries up to 2 years less a day and/or $5,000 fine. The landmark R. v. D.L.W. (2016 SCC) clarified bestiality definitions, prompting legislative reform. Provincial SPCAs and humane societies enforce animal welfare through parallel provincial legislation (e.g., Ontario's PAWS Act 2019). Multiple attempts to modernize federal animal cruelty law (Bills C-10, C-15B, C-50, S-203) failed between 1999-2018 due to agricultural industry concerns. Canada's Animal Protection Index rating is Grade C, reflecting the fragmented federal-provincial enforcement structure and the absence of sentience recognition in federal law.",
    lawName: "Criminal Code of Canada",
    article: "Sections 444–447",
    year: 1892,
    lastAmended: 2019,
    penaltyMax: "Up to 5 years imprisonment (indictable offense)",
    tags: ["criminal code", "cruelty", "neglect", "animal fighting"],
  },
  {
    id: "ca-002",
    country: "Canada",
    countryCode: "CA",
    category: "Wildlife Protection",
    topic: "Species at risk protection",
    summary:
      "The Species at Risk Act protects endangered wildlife and their habitats in Canada.",
    details:
      "The Species at Risk Act (SARA, S.C. 2002, c. 29) prevents wildlife species from becoming extinct and secures recovery of extirpated, endangered, or threatened species. Section 32 prohibits killing, harming, harassing, or capturing listed species, while Section 33 prohibits damage to their residences. COSEWIC independently assesses species status under Section 14. Environment and Climate Change Canada, Fisheries and Oceans Canada, and Parks Canada Agency share enforcement. Penalties under Section 97 include fines up to $1,000,000 CAD and imprisonment up to 5 years for indictable offenses. Over 800 species are listed under Schedule 1. The Act was amended in 2019 to strengthen habitat protections. SARA complements provincial laws such as Ontario's Endangered Species Act (2007).",
    lawName: "Species at Risk Act",
    article: "S.C. 2002, c. 29",
    year: 2002,
    lastAmended: 2019,
    penaltyMax:
      "Up to $1,000,000 fine and/or 5 years imprisonment (indictable)",
    tags: ["endangered species", "COSEWIC", "habitat", "conservation"],
  },
  {
    id: "ca-003",
    country: "Canada",
    countryCode: "CA",
    category: "Farm Animals",
    topic: "Humane transport of animals",
    summary:
      "Federal regulations govern the humane transport of animals to prevent suffering.",
    details:
      "The Health of Animals Regulations (C.R.C., c. 296, Part XII, Sections 138-163) govern the humane transportation of animals in Canada. Substantially amended in February 2020, the regulations set species-specific maximum transport times: 28 hours for cattle and sheep, 24 hours for pigs, and 24 hours for poultry without feed, water, and rest. Section 141 prohibits transporting unfit animals, including those unable to stand without assistance. The Canadian Food Inspection Agency (CFIA) enforces these rules, conducting inspections at livestock markets, assembly yards, and slaughter facilities. Violations under Section 65 of the Health of Animals Act (S.C. 1990, c. 21) carry fines up to $250,000 CAD. The 2020 amendments aligned Canada with OIE guidelines, though welfare organizations argued the transport times still exceed EU standards under Council Regulation (EC) No. 1/2005.",
    lawName: "Health of Animals Regulations",
    article: "Part XII, C.R.C., c. 296",
    year: 1990,
    lastAmended: 2020,
    penaltyMax: "Up to $250,000 fine",
    tags: ["transport", "farm animals", "welfare", "CFIA"],
  },

  // ==================== MEXICO ====================
  {
    id: "mx-001",
    country: "Mexico",
    countryCode: "MX",
    category: "Anti-Cruelty",
    topic: "Federal animal health and welfare",
    summary:
      "The Federal Animal Health Law regulates animal welfare and prohibits cruelty at the federal level.",
    details:
      "The Federal Animal Health Law (Ley Federal de Sanidad Animal, 2007, Articles 1-175) establishes provisions for animal health, welfare, and good practices in animal husbandry across Mexico. Article 19 mandates humane treatment in production, transport, and slaughter, while Article 21 requires compliance with Official Mexican Standards (NOMs) including NOM-033-SAG/ZOO-2014 on humane slaughter. SENASICA (Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria), under SADER (Secretariat of Agriculture), enforces federal provisions. In June 2022, a constitutional reform to Article 4 elevated animal protection to constitutional rank, prohibiting cruelty and recognizing animals as sentient beings. Violations carry administrative fines of 1,000 to 75,000 UMA (Unidad de Medida y Actualizacion, approximately MXN 108-8,100,000). While federal law provides the framework, each of Mexico's 32 states maintains independent animal protection statutes with varying penalty structures.",
    lawName: "Federal Animal Health Law (Ley Federal de Sanidad Animal)",
    article: "Various",
    year: 2007,
    lastAmended: 2022,
    penaltyMax:
      "Varies by state; in Mexico City, up to 6 years imprisonment",
    tags: ["animal health", "husbandry", "sentience", "federal"],
  },
  {
    id: "mx-002",
    country: "Mexico",
    countryCode: "MX",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and sustainable use",
    summary:
      "The General Wildlife Law governs conservation and sustainable use of wildlife in Mexico.",
    details:
      "The General Wildlife Law (Ley General de Vida Silvestre, 2000, Articles 1-130) regulates conservation and sustainable use of wildlife and its habitat. Article 60 Bis prohibits capture, transport, and trade of marine mammals, while Article 55 establishes Environmental Impact Assessment requirements. SEMARNAT and PROFEPA (Federal Environmental Protection Agency) share enforcement authority. Mexico, as one of 17 megadiverse countries harboring 10% of global biodiversity, protects over 2,600 species listed in NOM-059-SEMARNAT-2010. Penalties include fines of 20-75,000 UMA and imprisonment up to 9 years for trafficking under Federal Penal Code Article 420. The vaquita porpoise crisis led to permanent gillnet bans in the Upper Gulf of California. The law was amended in 2022 to strengthen pollinator protections and ban wild animals in circuses.",
    lawName: "General Wildlife Law (Ley General de Vida Silvestre)",
    article: "Various",
    year: 2000,
    lastAmended: 2022,
    penaltyMax:
      "Up to 9 years imprisonment and fines up to 50,000 times the daily minimum wage",
    tags: ["wildlife", "biodiversity", "megadiversity", "conservation"],
  },
  {
    id: "mx-003",
    country: "Mexico",
    countryCode: "MX",
    category: "Companion Animals",
    topic: "Responsible pet ownership (Mexico City)",
    summary:
      "Mexico City's animal protection law is among the most progressive in Latin America.",
    details:
      "The Mexico City Animal Protection Law (Ley de Proteccion a los Animales de la Ciudad de Mexico, enacted 2002, reformed January 2021) was among the first comprehensive animal protection statutes in Latin America. Articles 24-30 mandate responsible pet ownership including vaccination and identification, while Article 35 prohibits all animal fighting. The 2021 reform significantly increased penalties: cruelty causing death carries 2-6 years imprisonment and fines of 200-400 UMA, while abandonment carries 6 months-2 years imprisonment. SEDEMA and the Brigada de Vigilancia Animal enforce compliance. Mandatory sterilization programs operate through the 16 alcaldias. By 2023, all 32 Mexican states adopted similar legislation. The Registro de Animales de Compania was established and commercial breeders must obtain permits under Article 42.",
    lawName: "Mexico City Animal Protection Law",
    article: "Various",
    year: 2002,
    lastAmended: 2021,
    penaltyMax: "Up to 6 years imprisonment and fines",
    tags: [
      "companion animals",
      "responsible ownership",
      "Mexico City",
      "breeding",
    ],
  },

  // ==================== BRAZIL ====================
  {
    id: "br-001",
    country: "Brazil",
    countryCode: "BR",
    category: "Anti-Cruelty",
    topic: "Constitutional prohibition of animal cruelty",
    summary:
      "Brazil's Constitution prohibits practices that subject animals to cruelty.",
    details:
      "Article 225, Paragraph 1, Item VII of the Federal Constitution of 1988 prohibits practices subjecting animals to cruelty. Constitutional Amendment 96 (2017) added Paragraph 7, permitting cultural practices registered as intangible heritage, overriding the STF's ADI 4983 ruling banning vaquejada. Lei 14.064/2020 amended Article 32 of Lei 9.605/1998 to create aggravated penalties for cruelty to dogs and cats: 2-5 years imprisonment plus fines and custody prohibition, making such offenses non-bailable (inafianavel). The STF also banned farra do boi in RE 153.531/SC (1997) and cockfighting in ADI 1856 (2011). IBAMA and state environmental police share enforcement. Brazil's constitutional framework is among the most progressive in the Americas for animal protection.",
    lawName: "Federal Constitution of Brazil",
    article: "Article 225, §1, VII",
    year: 1988,
    lastAmended: 2020,
    penaltyMax:
      "Up to 5 years imprisonment for cruelty to dogs and cats (Law 14.064/2020)",
    tags: ["constitution", "cruelty", "non-bailable", "dogs", "cats"],
  },
  {
    id: "br-002",
    country: "Brazil",
    countryCode: "BR",
    category: "Wildlife Protection",
    topic: "Environmental crimes including wildlife offenses",
    summary:
      "The Environmental Crimes Law criminalizes abuse, mistreatment, and trafficking of wildlife.",
    details:
      "The Environmental Crimes Law (Lei 9.605/1998) criminalizes acts against fauna under Articles 29-37. Article 29 prohibits killing, pursuing, or capturing wildlife without authorization, carrying 6 months to 1 year detention, increased for endangered species (Paragraph 4). Article 32 addresses abuse and mistreatment of wild, domestic, or domesticated animals, with 3 months to 1 year detention. Wildlife trafficking is estimated at R$2-3 billion annually in Brazil. IBAMA leads enforcement through Operation Cobra, while the Policia Federal investigates trafficking networks. Lei 14.064/2020 created aggravated penalties of 2-5 years for cruelty to dogs and cats. Decree 6.514/2008 established administrative fines of R$500 to R$50,000,000. State environmental military police conduct routine inspections.",
    lawName: "Environmental Crimes Law (Lei 9.605)",
    article: "Articles 29–37",
    year: 1998,
    lastAmended: 2020,
    penaltyMax:
      "Up to 1 year imprisonment and fine; increased for endangered species",
    tags: [
      "environmental crimes",
      "wildlife trafficking",
      "IBAMA",
      "biodiversity",
    ],
  },
  {
    id: "br-003",
    country: "Brazil",
    countryCode: "BR",
    category: "Animal Testing",
    topic: "Regulation of animal use in scientific research",
    summary:
      "The Arouca Law regulates the use of animals in scientific research and education.",
    details:
      "Law 11.794/2008 (the Arouca Law, named after researcher Sergio Arouca) regulates use of animals in scientific research, teaching, and testing in Brazil. Article 1 limits scope to vertebrate animals of Phylum Chordata. The law created CONCEA (Conselho Nacional de Controle de Experimentacao Animal) under the Ministry of Science, Technology, and Innovation, issuing binding normative resolutions. All research institutions must establish CEUAs (Comissoes de Etica no Uso de Animais) under Article 8. Article 14 mandates alternative methods validated by CONCEA when available, and Resolution 17/2014 banned cosmetic testing on animals. Penalties under Article 17 include institutional disqualification, research suspension, and laboratory interdiction. Individual violations may be prosecuted under Article 32 of Lei 9.605/1998. The 3Rs principle (Replacement, Reduction, Refinement) is mandated throughout.",
    lawName: "Arouca Law (Lei 11.794)",
    article: "Various",
    year: 2008,
    penaltyMax: "Institutional sanctions, license revocation, fines",
    tags: ["animal testing", "research", "CONCEA", "alternatives"],
  },

  // ==================== ARGENTINA ====================
  {
    id: "ar-001",
    country: "Argentina",
    countryCode: "AR",
    category: "Anti-Cruelty",
    topic: "National animal protection and anti-cruelty",
    summary:
      "Law 14.346 criminalizes acts of cruelty and mistreatment against animals.",
    details:
      "Law 14.346 (1954) is Argentina's primary animal protection law, enacted during the Peron presidency. Article 1 establishes imprisonment of 15 days to 1 year for mistreatment or cruelty to animals. Article 2 defines mistreatment as failing to provide adequate food, using unfit animals in labor, or overworking draft animals. Article 3 specifies cruelty including vivisection for non-scientific purposes, mutilation, unnecessary surgery without anesthesia, and abandonment. The Ministerio Publico Fiscal prosecutes violations. In 2016, Judge Elena Liberatori ruled Sandra, a Sumatran orangutan at Buenos Aires Zoo, a 'non-human person' (persona no humana) with fundamental rights. SENASA enforces farm animal provisions. Several provinces have supplementary laws, including Buenos Aires Province Law 14.107 (2009) with stronger penalties.",
    lawName: "National Animal Protection Law (Ley 14.346)",
    article: "Articles 1–3",
    year: 1954,
    penaltyMin: "15 days imprisonment",
    penaltyMax: "1 year imprisonment",
    tags: ["cruelty", "mistreatment", "animal rights", "legal personhood"],
  },
  {
    id: "ar-002",
    country: "Argentina",
    countryCode: "AR",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and hunting regulation",
    summary:
      "National wildlife law regulates conservation, hunting, and trade of wild fauna.",
    details:
      "Law 22.421 (1981) on Wildlife Conservation (Ley de Conservacion de la Fauna) regulates protection and rational use of wild fauna. Article 3 classifies species as threatened, vulnerable, or indeterminate. Articles 14-18 regulate hunting permits, seasons, and prohibited methods including poisons and explosives. The Direccion Nacional de Biodiversidad serves as CITES Management Authority. Decree 666/97 regulates implementation. Penalties under Article 25 include 1 month to 1 year imprisonment for illegal hunting, with aggravated penalties for commercial trafficking. Argentina hosts Andean condors, jaguars in the Gran Chaco, Southern right whales at Peninsula Valdes (UNESCO World Heritage Site), and Patagonian guanacos. The 2005 amendment strengthened migratory species protections. Provincial agencies coordinate through COFEMA.",
    lawName: "Wildlife Conservation Law (Ley 22.421)",
    article: "Various",
    year: 1981,
    lastAmended: 2005,
    penaltyMax:
      "Fines and imprisonment for illegal hunting and trafficking",
    tags: ["wildlife", "hunting", "conservation", "native fauna"],
  },
  {
    id: "ar-003",
    country: "Argentina",
    countryCode: "AR",
    category: "Farm Animals",
    topic: "Humane slaughter regulations",
    summary:
      "Law 18.819 mandates pre-slaughter stunning to prevent unnecessary suffering.",
    details:
      "Law 18.819 (1970) regulates humane slaughter of livestock in Argentina, mandating pre-slaughter stunning. SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria) enforces compliance through Resolution 37/2001, establishing requirements for slaughterhouse design, handling facilities, and stunning equipment. Approved methods include captive bolt for cattle, electrical stunning for pigs and sheep, and controlled atmosphere for poultry. Resolution 581/2014 strengthened transport welfare standards, limiting journey times and requiring rest intervals. Argentina processes approximately 14 million cattle annually as the world's fifth-largest beef producer. Ritual slaughter (faena ritual) is permitted for kosher and halal practices with certification. Non-compliance penalties include facility suspension and permanent closure, aligned with OIE Terrestrial Code Chapter 7.5.",
    lawName: "Humane Slaughter Law (Ley 18.819)",
    article: "Various",
    year: 1970,
    lastAmended: 2001,
    tags: ["slaughter", "stunning", "livestock", "SENASA"],
  },

  // ==================== CHILE ====================
  {
    id: "cl-001",
    country: "Chile",
    countryCode: "CL",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Law 20.380 establishes animal protection norms and recognizes animal sentience.",
    details:
      "Law 20.380 (2009) on Animal Protection (Ley sobre Proteccion de Animales) establishes in Article 1 that animals are sentient beings deserving protection. Article 3 mandates adequate food, shelter, and veterinary care, while Article 11 regulates animal use in entertainment. The Servicio Agricola y Ganadero (SAG) is the primary enforcement agency. Law 21.020 (2017), the Responsible Pet Ownership Law, strengthened protections by creating a National Pet Registry and mandating microchip identification. Law 21.398 (2021) amended the Penal Code: cruelty causing death carries 541 days to 3 years imprisonment and fines of 20-30 UTM (Unidades Tributarias Mensuales, approximately CLP 1,200,000-1,800,000). Chile's framework is among the strongest in South America. The Ministerio Publico prosecutes serious cases.",
    lawName: "Animal Protection Law (Ley 20.380)",
    article: "Various",
    year: 2009,
    lastAmended: 2017,
    penaltyMax:
      "Up to 3 years imprisonment and fines (under Law 21.020 amendments)",
    tags: [
      "sentience",
      "protection",
      "responsible ownership",
      "companion animals",
    ],
  },
  {
    id: "cl-002",
    country: "Chile",
    countryCode: "CL",
    category: "Wildlife Protection",
    topic: "Hunting and wildlife conservation",
    summary:
      "The Hunting Law regulates wildlife conservation and prohibits hunting of protected species.",
    details:
      "Law 19.473 (1996) on Hunting (Ley de Caza) and Supreme Decree 5/1998 MINAGRI regulate hunting, capture, breeding, and conservation of wild terrestrial fauna. Article 3 classifies species into permanently prohibited, regulated seasons, and open seasons. SAG issues hunting permits under Article 7. Penalties under Article 22 include fines of 3-500 UTM and 541 days to 3 years imprisonment for hunting protected species. Chile's unique wildlife includes the huemal (Hippocamelus bisulcus, national animal with fewer than 2,000 remaining), Chilean flamingo, pudu (world's smallest deer), and culpeo fox. Law 20.473 (2011) prohibited leg-hold traps. CONAF manages national parks totaling approximately 20% of territory. Chile participates in the Convention on Migratory Species.",
    lawName: "Hunting Law (Ley 19.473)",
    article: "Various",
    year: 1996,
    lastAmended: 2011,
    penaltyMax: "Fines and imprisonment; enhanced for endangered species",
    tags: ["hunting", "wildlife", "huémul", "conservation"],
  },

  {
    id: "cl-003",
    country: "Chile",
    countryCode: "CL",
    category: "Companion Animals",
    topic: "Responsible pet ownership",
    summary:
      "Law 21.020 establishes comprehensive regulations for responsible pet ownership including mandatory registration and sterilization.",
    details:
      "Law 21.020 (2017) on Responsible Pet Ownership (Ley de Tenencia Responsable de Mascotas y Animales de Compania) established one of Latin America's most comprehensive companion animal frameworks. The law created a National Registry of Pets and mandates microchip identification for dogs and cats. It requires owners to provide adequate food, shelter, and veterinary care, prohibits abandonment, and regulates breeding activities. Municipalities must implement sterilization and adoption programs, and dangerous breed owners face additional requirements including liability insurance and secure containment. Penalties for animal cruelty were significantly increased: mistreatment carries fines of 2-30 UTM (Unidades Tributarias Mensuales, approximately USD 200-3,000) and cruelty resulting in death carries imprisonment up to 3 years and fines of 20-30 UTM. The Servicio Agricola y Ganadero (SAG) and municipal authorities share enforcement responsibilities.",
    lawName: "Responsible Pet Ownership Law (Ley 21.020)",
    article: "Various",
    year: 2017,
    penaltyMax: "Up to 3 years imprisonment and fines of 20-30 UTM for cruelty causing death",
    tags: ["responsible ownership", "pet registry", "microchip", "sterilization", "SAG"],
  },

  // ==================== COLOMBIA ====================
  {
    id: "co-001",
    country: "Colombia",
    countryCode: "CO",
    category: "Anti-Cruelty",
    topic: "Animal sentience recognition and anti-cruelty",
    summary:
      "Law 1774 of 2016 recognizes animals as sentient beings and criminalizes cruelty.",
    details:
      "Law 1774 (2016) amended Article 655 of the Colombian Civil Code to recognize animals as sentient beings (seres sintientes), removing them from movable property. Article 339A of the Penal Code establishes 12-36 months imprisonment and fines of 5-60 SMLMV (approximately COP 6,500,000-78,000,000) for cruelty to domestic or domesticated animals. Article 339B provides aggravated penalties for cruelty causing death. The Policia Nacional's Grupo de Proteccion Ambiental and Fiscalia General enforce criminal provisions. The Constitutional Court in Sentencia C-467/16 upheld constitutionality. Colombia's framework influenced Peru's Law 30407 and Ecuador's COIP reforms. Municipal Inspecciones de Policia handle administrative sanctions.",
    lawName: "Animal Protection Statute (Law 1774)",
    article: "Various",
    year: 2016,
    penaltyMin: "12 months imprisonment",
    penaltyMax:
      "36 months imprisonment and fines of 5–60 minimum wages",
    tags: [
      "sentience",
      "civil code reform",
      "criminal penalties",
      "landmark",
    ],
  },
  {
    id: "co-002",
    country: "Colombia",
    countryCode: "CO",
    category: "Wildlife Protection",
    topic: "Biodiversity and wildlife protection",
    summary:
      "Colombia's Natural Resources Code protects its megadiverse wildlife.",
    details:
      "The Natural Renewable Resources Code (Decreto 2811/1974, Articles 247-309 on fauna) and Law 99 of 1993 (creating SINA) establish Colombia's biodiversity framework. As the world's second most megadiverse country, Colombia hosts approximately 1,950 bird species, 500+ mammals, and over 56,000 plant species. The Ministerio de Ambiente and ANLA regulate environmental permits, while Corporaciones Autonomas Regionales (CARs) enforce regionally. Law 1453 (2011) established up to 108 months imprisonment for wildlife trafficking under Penal Code Article 328. Resolution 1912/2017 lists over 1,200 threatened species. The Andean condor, harpy eagle, and pink river dolphin receive special protections. IDEAM coordinates the Biodiversity Information System. The PNGIBSE (2012) provides strategic policy aligned with CBD targets.",
    lawName: "Natural Resources Code (Decree 2811) and Law 99",
    article: "Various",
    year: 1974,
    lastAmended: 2011,
    penaltyMax:
      "Up to 108 months imprisonment for wildlife trafficking (Law 1453)",
    tags: [
      "megadiversity",
      "wildlife trafficking",
      "Andean condor",
      "biodiversity",
    ],
  },
  {
    id: "co-003",
    country: "Colombia",
    countryCode: "CO",
    category: "Anti-Cruelty",
    topic: "Prohibition of animal use in entertainment",
    summary:
      "Law 1638 of 2013 prohibits the use of wild animals in circuses.",
    details:
      "Law 1638 (2013) banned wild and exotic animals in circuses throughout Colombia, among the first such bans in the Americas. Article 1 prohibits wild or exotic animals in circus acts, shows, and traveling exhibitions. Article 3 granted a two-year transition until 2015. The Constitutional Court upheld the law in Sentencia C-283/14, ruling the prohibition served the legitimate purpose of preventing cruelty. The Policia Nacional's Grupo de Proteccion Ambiental and CARs enforce compliance, with fines and confiscation under Decree 1076/2015. Confiscated animals are relocated to sanctuaries overseen by the Ministerio de Ambiente. The law influenced similar bans in Peru (2015), Ecuador (2015), and Chile (2020). Animal Defenders International documented circus conditions supporting the legislative effort.",
    lawName: "Law 1638 (Circus Animal Ban)",
    article: "Various",
    year: 2013,
    tags: [
      "circus ban",
      "wild animals",
      "entertainment",
      "Constitutional Court",
    ],
  },

  // ==================== PERU ====================
  {
    id: "pe-001",
    country: "Peru",
    countryCode: "PE",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Law 30407 recognizes animals as sentient beings and criminalizes cruelty.",
    details:
      "Law 30407 (2016) on Animal Protection and Welfare (Ley de Proteccion y Bienestar Animal) recognizes animals as sentient beings under Article 1. Article 5 prohibits cruelty, abandonment, and abuse against domestic animals, captive wildlife, and research animals. Article 27 mandates ethical slaughter using approved stunning. Article 22 requires authorization for experimentation. Article 36 criminalizes cruelty with 3-5 years imprisonment when causing death (modified by Law 31311 of 2021). SENASA and the Ministerio del Ambiente share enforcement. The Second Complementary Provision controversially exempts bullfighting and cockfighting as cultural heritage, generating constitutional challenges. The Fiscalia Especializada en Materia Ambiental prosecutes criminal cases. Peru's framework drew from Colombia's Law 1774.",
    lawName: "Animal Protection and Welfare Law (Law 30407)",
    article: "Various",
    year: 2016,
    penaltyMax: "Up to 5 years imprisonment for cruelty causing death",
    tags: [
      "sentience",
      "cruelty",
      "animal fighting",
      "bullfighting exception",
    ],
  },
  {
    id: "pe-002",
    country: "Peru",
    countryCode: "PE",
    category: "Wildlife Protection",
    topic: "Forestry and wildlife protection",
    summary:
      "The Forestry and Wildlife Law protects Peru's rich biodiversity.",
    details:
      "Law 29763 (2011), the Forestry and Wildlife Law (Ley Forestal y de Fauna Silvestre), regulates conservation under SERFOR (Servicio Nacional Forestal y de Fauna Silvestre). Article 80 classifies wildlife into endangered, vulnerable, and near-threatened, with Supreme Decree 004-2014-MINAGRI listing over 535 threatened species. Peru ranks among the top five megadiverse countries, hosting approximately 1,850 bird species and 500 mammal species. The Penal Code (Articles 308-308C, amended by Law 29263) criminalizes wildlife trafficking with 3-5 years imprisonment, increased to 4-7 years for CITES-listed species or offenses in protected areas. OSINFOR conducts compliance audits. Implementation proceeds through Supreme Decrees 018-021/2015-MINAGRI. Peru participates in the Amazon Cooperation Treaty Organization.",
    lawName: "Forestry and Wildlife Law (Law 29763)",
    article: "Various",
    year: 2011,
    lastAmended: 2015,
    penaltyMax: "Up to 7 years imprisonment for wildlife trafficking",
    tags: [
      "forestry",
      "wildlife",
      "vicuna",
      "biodiversity",
      "trafficking",
    ],
  },

  {
    id: "pe-003",
    country: "Peru",
    countryCode: "PE",
    category: "Wildlife Protection",
    topic: "Vicuna protection and SERNANP conservation",
    summary:
      "Peru protects the vicuna as a national heritage species through specialized conservation programs managed by SERNANP.",
    details:
      "The Vicuna Conservation Law (Law 26496, 1995) and Supreme Decree No. 004-2014-MINAGRI designate the vicuna as a national heritage species with strict protections. Peru holds the world's largest vicuna population (approximately 208,000 animals). Only authorized indigenous communities may conduct chacu (traditional communal roundups) for shearing live vicunas, with the fiber sold under controlled conditions. SERNANP (Servicio Nacional de Areas Naturales Protegidas por el Estado) manages Peru's 76 natural protected areas covering over 17% of the country. Key protected areas include Manu National Park (UNESCO Biosphere Reserve, one of the most biodiverse places on Earth), Tambopata National Reserve, and Huascaran National Park. Peru's Penal Code (Article 308-C, amended by Law 29263 of 2008) criminalizes wildlife trafficking with penalties of 3-5 years imprisonment, increased to 4-7 years when involving CITES-listed species or when committed within protected areas.",
    lawName: "Vicuna Conservation Law (Law 26496) / Penal Code Articles 308-308C",
    article: "Various",
    year: 1995,
    lastAmended: 2014,
    penaltyMax: "Up to 7 years imprisonment for trafficking CITES-listed species",
    tags: ["vicuna", "SERNANP", "Manu", "chacu", "wildlife trafficking"],
  },

  // ==================== ECUADOR ====================
  {
    id: "ec-001",
    country: "Ecuador",
    countryCode: "EC",
    category: "Anti-Cruelty",
    topic: "Rights of nature and animal protection",
    summary:
      "Ecuador's Constitution is the first in the world to grant rights to nature.",
    details:
      "Ecuador's 2008 Constitution (Articles 71-74) is the world's first to grant inalienable rights to nature (Pachamama). Article 71 provides nature the right to integral respect for its existence and regeneration. Article 72 establishes the right to restoration, Article 73 mandates precautionary measures. The Organic Code of the Environment (2017, Articles 140-147) regulates animal welfare and establishes the National Registry of Wild Fauna. MAATE enforces environmental provisions. The Estrellita ruling (Case No. 253-20-JH/22, 2022) recognized a woolly monkey's individual rights, establishing interspecies justice. Quito's Ordenanza Metropolitana No. 048 (reformed 2022) mandates sterilization, prohibits animal entertainment, and establishes fines of 2-10 SBU. Ecuador's approach has influenced reforms in Chile, Mexico, and Bolivia.",
    lawName:
      "Constitution of Ecuador / Organic Code of the Environment",
    article: "Articles 71–74 (Constitution); Various (Code)",
    year: 2008,
    lastAmended: 2017,
    penaltyMax:
      "Up to 3 years imprisonment for animal cruelty (Penal Code)",
    tags: [
      "rights of nature",
      "Pachamama",
      "constitution",
      "environmental code",
    ],
  },
  {
    id: "ec-002",
    country: "Ecuador",
    countryCode: "EC",
    category: "Wildlife Protection",
    topic: "Galápagos wildlife protection",
    summary:
      "Special legislation protects the unique wildlife of the Galápagos Islands.",
    details:
      "The Special Law for the Galapagos (Ley Organica de Regimen Especial de Galapagos, 1998, reformed 2015) protects the unique flora and fauna of the Galapagos Islands (UNESCO World Heritage Site, 1978). Article 73 prohibits alien species introduction, Articles 60-72 regulate the Galapagos Marine Reserve (133,000 sq km), expanded in 2022 to include the Hermandad Reserve (60,000 sq km). The Galapagos National Park Directorate under MAATE enforces protections, with 1-3 years imprisonment and fines of 10-50 SBU for harming protected species. The archipelago hosts 2,900 marine species (19% endemic), including marine iguanas, giant tortoises (11 extant species), and the Galapagos penguin. The Charles Darwin Foundation provides scientific support. COIP Articles 247-248 establish additional penalties for environmental crimes.",
    lawName: "Special Law for the Galápagos",
    article: "Various",
    year: 2015,
    penaltyMax:
      "Severe fines and imprisonment for harming protected species",
    tags: [
      "Galápagos",
      "endemic species",
      "marine reserve",
      "UNESCO",
    ],
  },

  {
    id: "ec-003",
    country: "Ecuador",
    countryCode: "EC",
    category: "Anti-Cruelty",
    topic: "Penal Code animal cruelty offenses",
    summary:
      "Ecuador's Organic Integral Penal Code criminalizes animal cruelty with graduated penalties based on severity.",
    details:
      "The Organic Integral Penal Code (COIP, 2014) of Ecuador criminalizes animal cruelty under Articles 249-250. Article 249 prohibits acts of cruelty causing injury to domestic or domesticated animals, with penalties of 50-100 hours of community service for minor injuries and 1-3 years imprisonment for injuries causing permanent disability or death. Article 250 addresses organized animal fighting (dogfighting, cockfighting) with penalties of 3-7 days imprisonment, though cockfighting has cultural exceptions in some jurisdictions. The 2022 Estrellita case (Constitutional Court ruling No. 253-20-JH) was a landmark decision recognizing that a woolly monkey kept as a pet had individual rights under the Rights of Nature framework, establishing that animals are subjects of rights distinct from property. Municipal ordinances in Quito (Ordenanza 048 of 2011) and Guayaquil provide additional protections including mandatory sterilization of companion animals and prohibition of animal use in entertainment.",
    lawName: "Organic Integral Penal Code (COIP)",
    article: "Articles 249-250",
    year: 2014,
    penaltyMax: "Up to 3 years imprisonment for cruelty causing death",
    tags: ["COIP", "Estrellita case", "animal fighting", "municipal ordinances"],
  },

  // ==================== URUGUAY ====================
  {
    id: "uy-001",
    country: "Uruguay",
    countryCode: "UY",
    category: "Anti-Cruelty",
    topic: "Animal protection and responsible ownership",
    summary:
      "Law 18.471 establishes norms for animal protection and responsible ownership.",
    details:
      "Law 18.471 (2009) on Animal Protection, Use, and Ownership (Ley de Proteccion, Tenencia y Uso de los Animales) establishes humane treatment rules under Article 1. Articles 3-5 prohibit cruelty, abandonment, and animal fighting including dogfighting and cockfighting. COTRYBA (Comision Honoraria de Bienestar Animal), created under Article 18, advises MGAP. Penalties under Article 14 include fines of 20-500 UR (Unidades Reajustables, approximately UYU 30,000-750,000), and Penal Code Article 279 provides 3-24 months imprisonment for aggravated cruelty. Law 19.430 (2016) mandated municipal sterilization and registration. Uruguay banned cosmetic animal testing through Law 19.839 (2019), the first in Latin America. MGAP and departmental intendencias handle enforcement.",
    lawName: "Animal Protection Law (Law 18.471)",
    article: "Various",
    year: 2009,
    lastAmended: 2019,
    penaltyMax:
      "Fines and up to 2 years imprisonment for severe cruelty",
    tags: [
      "responsible ownership",
      "COTRYBA",
      "population control",
      "animal fighting",
    ],
  },
  {
    id: "uy-002",
    country: "Uruguay",
    countryCode: "UY",
    category: "Farm Animals",
    topic: "Livestock welfare and humane slaughter",
    summary:
      "Regulations ensure humane treatment of livestock in production and slaughter.",
    details:
      "Uruguay, as the world's seventh-largest beef exporter processing approximately 2.3 million cattle annually, maintains rigorous livestock welfare regulations. INAC (Instituto Nacional de Carnes) sets quality standards, while MGAP enforces welfare through Decree 369/983 on humane slaughter and Decree 253/012 on transport. Pre-slaughter stunning via captive bolt is mandatory for cattle, electrical stunning for sheep and pigs. Transport regulations limit journeys to 12 hours without rest. MGAP Resolution DGSG/No. 68/013 established OIE-compliant on-farm welfare guidelines. Uruguay's traceability system (SNIG), mandatory since 2006, tracks individual animals via electronic ear tags from birth to slaughter. Ritual slaughter is permitted for kosher exports. Welfare standards facilitate EU export access under the Mercosur-EU agreement.",
    lawName: "Livestock Welfare Regulations (MGAP Decrees)",
    article: "Various MGAP decrees",
    year: 2003,
    lastAmended: 2018,
    tags: ["livestock", "humane slaughter", "INAC", "OIE standards"],
  },

  {
    id: "uy-003",
    country: "Uruguay",
    countryCode: "UY",
    category: "Wildlife Protection",
    topic: "Native fauna conservation and SNAP protected areas",
    summary:
      "Uruguay's environmental legislation protects native wildlife through the National System of Protected Areas.",
    details:
      "The General Law on Environmental Protection (Law 17.283 of 2000) and the National System of Protected Areas Law (Law 17.234 of 2000) establish Uruguay's wildlife conservation framework. SNAP (Sistema Nacional de Areas Protegidas) manages 17 protected areas covering over 350,000 hectares, including Quebrada de los Cuervos (Uruguay's first protected landscape), Cabo Polonio, and Esteros de Farrapos e Islas del Rio Uruguay (a Ramsar wetland site). The Fauna Law (Decree-Law 9.481 of 1935, with amendments) prohibits hunting of protected species and regulates hunting seasons through DINAMA (National Directorate of Environment). Protected species include the pampas deer (Ozotoceros bezoarticus, critically endangered in Uruguay), Southern right whales (protected in coastal waters), sea lions, and the broad-snouted caiman. Violation of wildlife protection provisions carries fines and confiscation of equipment, with criminal penalties for trafficking protected species.",
    lawName: "SNAP Law (Law 17.234) / General Environmental Protection Law (Law 17.283)",
    article: "Various",
    year: 2000,
    lastAmended: 2019,
    penaltyMax: "Fines, confiscation, and criminal penalties for trafficking",
    tags: ["SNAP", "protected areas", "pampas deer", "DINAMA", "Ramsar"],
  },

  // ==================== BOLIVIA ====================
  {
    id: "bo-001",
    country: "Bolivia",
    countryCode: "BO",
    category: "Anti-Cruelty",
    topic: "Defense of animals against cruelty",
    summary:
      "Law 700 establishes protections for animals against acts of cruelty.",
    details:
      "Law 700 (2015) for the Defense of Animals Against Acts of Cruelty (Ley para la Defensa de los Animales contra Actos de Crueldad y Maltrato) declares in Article 2 that animals deserve humane treatment and protection. Article 5 prohibits cruelty, mistreatment, abandonment, and overwork for domestic and wild animals. Articles 7-9 assign enforcement to Gobiernos Autonomos Municipales, which must establish animal protection units. Penalties under Article 6 include 6 months to 5 years imprisonment, increased to 2-6 years when causing death. Fines range from 30-90 dias multa. The law followed advocacy by Animales SOS Bolivia. Bolivia's 2009 Constitution (Article 33) recognizes the right to a healthy environment, and Law 071 (2010) grants nature rights including the right to life and biodiversity.",
    lawName:
      "Law for the Defense of Animals Against Cruelty (Law 700)",
    article: "Various",
    year: 2015,
    penaltyMax:
      "Up to 6 years imprisonment for cruelty causing death",
    tags: [
      "cruelty",
      "mistreatment",
      "Mother Earth",
      "municipal enforcement",
    ],
  },
  {
    id: "bo-002",
    country: "Bolivia",
    countryCode: "BO",
    category: "Wildlife Protection",
    topic: "Biodiversity and protected areas",
    summary:
      "Bolivia's environmental laws protect its diverse wildlife and ecosystems.",
    details:
      "The Environment Law (Law 1333/1992, Articles 52-64) and the Law of Mother Earth (Law 071/2010) establish Bolivia's environmental and wildlife framework. Articles 52-57 regulate hunting, wildlife trade, and conservation, while Articles 58-64 establish protected area categories. SERNAP manages 22 protected areas covering 17% of territory, including Madidi National Park, Noel Kempff Mercado (UNESCO World Heritage Site), and Sajama. Bolivia hosts approximately 1,450 bird species and 400 mammals including jaguars, Andean condors, and vicunas. The Penal Code (Articles 206-210) criminalizes environmental destruction with 1-6 years imprisonment. Law 071 grants Mother Earth rights including life, biodiversity, and restoration. The ABT oversees forest resources and Supreme Decree 3048/2017 restricts wildlife trade.",
    lawName:
      "Environment Law (Law 1333) and Law of Mother Earth (Law 071)",
    article: "Various",
    year: 1992,
    lastAmended: 2012,
    tags: [
      "biodiversity",
      "Mother Earth",
      "protected areas",
      "Amazon",
    ],
  },

  {
    id: "bo-003",
    country: "Bolivia",
    countryCode: "BO",
    category: "Anti-Cruelty",
    topic: "Circus animal ban and wildlife entertainment prohibition",
    summary:
      "Bolivia was the first country in the world to ban all animals in circuses through Law 4040 of 2009.",
    details:
      "Law 4040 (2009) made Bolivia the first country in the world to ban the use of both wild and domestic animals in circuses and traveling shows. The law was the result of an 18-month investigation by Animal Defenders International (ADI) documenting widespread abuse in Bolivian circuses. Circus operators were given one year to comply, and ADI subsequently organized the rescue and rehoming of confiscated circus animals including lions transported to wildlife sanctuaries in the United States and Colorado. The law imposes fines and confiscation of animals for violations. This groundbreaking legislation inspired similar bans across Latin America and worldwide. Additionally, Bolivia's Penal Code (Articles 350-352) criminalizes the destruction of domesticated animals belonging to others, with penalties including fines and imprisonment up to one year. The Law of Mother Earth (Law 071 of 2010) further established philosophical protections by recognizing the rights of Mother Earth and all living systems.",
    lawName: "Law 4040 (Circus Animal Ban) / Law 700 (Defense of Animals)",
    article: "Various",
    year: 2009,
    penaltyMax: "Fines and confiscation of animals; up to 6 years imprisonment for cruelty (Law 700)",
    tags: ["circus ban", "first in world", "ADI", "Mother Earth", "animal entertainment"],
  },

  // ==================== VENEZUELA ====================
  {
    id: "ve-001",
    country: "Venezuela",
    countryCode: "VE",
    category: "Anti-Cruelty",
    topic: "Domestic animal protection",
    summary:
      "Venezuela's Domestic Fauna Protection Law prohibits mistreatment of domestic animals.",
    details:
      "The Law for the Protection of Domestic Fauna (Ley para la Proteccion de la Fauna Domestica Libre y en Cautiverio, Gaceta Oficial No. 39.338, 2010) protects domestic and captive animals. Article 4 prohibits beating, mutilation, starvation, abandonment, and animal fighting. Articles 12-18 regulate pet ownership requiring vaccination, identification, and shelter. The Ministerio del Poder Popular para Ecosocialismo and Concejos Municipales enforce the law. Penalties include 200-600 hours community service for mistreatment and fines of 50-500 Unidades Tributarias. Severe cases may be prosecuted under the Penal Law on the Environment (2012, Article 80) with 1-3 years imprisonment. Municipal ordinances in Caracas, Maracaibo, and Valencia provide supplementary protections. Venezuela's economic crisis has hampered enforcement, with NGOs like FUNDASVA filling gaps.",
    lawName:
      "Domestic Animal Protection Law (Ley de Protección de Fauna Doméstica)",
    article: "Various",
    year: 2010,
    penaltyMax:
      "Fines and community service; imprisonment for severe cases",
    tags: [
      "domestic animals",
      "responsible ownership",
      "municipal enforcement",
    ],
  },
  {
    id: "ve-002",
    country: "Venezuela",
    countryCode: "VE",
    category: "Wildlife Protection",
    topic: "Wildlife protection and biodiversity",
    summary:
      "Venezuela's wildlife laws protect its rich biodiversity and regulate hunting.",
    details:
      "The Wildlife Protection Law (Ley de Proteccion a la Fauna Silvestre, 1970, reformed 2008) and the Biological Diversity Law (2000) establish Venezuela's wildlife conservation framework. The Wildlife Law (Articles 1-72) regulates hunting, capture permits, and commercial use, while the Diversity Law (Articles 46-58) addresses species conservation. Venezuela's ecosystems spanning the Amazon, Andes, Llanos, Caribbean, and tepui formations support approximately 1,420 bird species and 390 mammals. INPARQUES and the Oficina Nacional de Diversidad Biologica share enforcement. The Penal Law on the Environment (2012, Articles 77-82) establishes 1-5 years imprisonment for illegal hunting and 4-8 years for trafficking CITES Appendix I species. The Orinoco crocodile, harpy eagle, and giant anteater receive special protections. Venezuela has 43 national parks and 36 natural monuments.",
    lawName: "Wildlife Protection Law and Biological Diversity Law",
    article: "Various",
    year: 1970,
    lastAmended: 2008,
    penaltyMax:
      "Up to 6 years imprisonment for wildlife trafficking",
    tags: [
      "wildlife",
      "biodiversity",
      "Orinoco crocodile",
      "hunting",
    ],
  },

  {
    id: "ve-003",
    country: "Venezuela",
    countryCode: "VE",
    category: "Wildlife Protection",
    topic: "CITES implementation and endangered species trade controls",
    summary:
      "Venezuela regulates international wildlife trade through CITES implementation and protects key endangered species.",
    details:
      "The Penal Law on the Environment (Ley Penal del Ambiente, 2012) and the Wildlife Protection Law (Ley de Proteccion a la Fauna Silvestre, 1970, reformed 2008) establish Venezuela's framework for wildlife crime enforcement and CITES compliance. Venezuela joined CITES in 1977 and the Ministry of Ecosocialism (formerly the Ministry of Environment) serves as the Management Authority. Protected species include the Orinoco crocodile (Crocodylus intermedius, critically endangered with fewer than 1,500 in the wild), the harpy eagle, the giant otter, the Venezuelan red howler monkey, and the Caribbean flamingo. The Penal Law on the Environment imposes penalties of 1-5 years imprisonment for illegal hunting of endangered species and 4-8 years for wildlife trafficking involving CITES Appendix I species. Venezuela has 43 national parks managed by INPARQUES (Instituto Nacional de Parques), including Canaima National Park (UNESCO World Heritage Site, home to Angel Falls) and Morrocoy National Park.",
    lawName: "Penal Law on the Environment / Wildlife Protection Law",
    article: "Various",
    year: 2012,
    penaltyMax: "Up to 8 years imprisonment for trafficking CITES Appendix I species",
    tags: ["CITES", "Orinoco crocodile", "INPARQUES", "Canaima", "environmental crime"],
  },

  // ==================== PARAGUAY ====================
  {
    id: "py-001",
    country: "Paraguay",
    countryCode: "PY",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Law 4840 establishes norms for animal protection and welfare in Paraguay.",
    details:
      "Law 4840 (2013) on Animal Protection and Welfare (Ley de Proteccion y Bienestar Animal) protects domestic and wild animals in human care. Article 3 prohibits cruelty, abandonment, and mistreatment including beating, mutilation, and poisoning. Articles 8-12 mandate responsible pet ownership including vaccination, identification, and shelter. The law regulates animals in work (Article 15), entertainment (Article 18), and research (Article 20), requiring ethical review. SENACSA enforces livestock provisions, while MADES oversees wildlife welfare. Penalties under Article 30 include fines of 50-500 jornales minimos (approximately PYG 5,000,000-50,000,000) and imprisonment up to 1 year for aggravated cruelty. Municipal intendencias must establish sterilization campaigns. The law drew upon Uruguay's Law 18.471 as a Mercosur legislative model.",
    lawName: "Animal Protection and Welfare Law (Law 4840)",
    article: "Various",
    year: 2013,
    penaltyMax: "Fines and up to 1 year imprisonment",
    tags: [
      "protection",
      "welfare",
      "SENACSA",
      "responsible ownership",
    ],
  },
  {
    id: "py-002",
    country: "Paraguay",
    countryCode: "PY",
    category: "Wildlife Protection",
    topic: "Wildlife conservation",
    summary:
      "Paraguay's wildlife laws protect species in the Chaco and Atlantic Forest.",
    details:
      "Law 96/92 on Wildlife (Ley de Vida Silvestre) and Law 352/94 on Protected Areas establish Paraguay's wildlife conservation framework. Articles 10-25 regulate hunting permits, closed seasons, and prohibited methods, while Articles 30-40 control wildlife trade and breeding. Paraguay encompasses the Gran Chaco (largest dry forest in South America, 647,500 sq km) and remnants of the Upper Parana Atlantic Forest (7% of original extent). MADES enforces wildlife provisions and serves as CITES Management Authority. Penalties under Law 716/96 include 1-5 years imprisonment for wildlife trafficking. Key species include the jaguar, maned wolf (Chrysocyon brachyurus), hyacinth macaw, and Chacoan peccary (Catagonus wagneri). Protected areas cover approximately 6% of territory.",
    lawName: "Wildlife Law (Law 96/92)",
    article: "Various",
    year: 1992,
    lastAmended: 2006,
    tags: [
      "Chaco",
      "Atlantic Forest",
      "jaguar",
      "wildlife trade",
    ],
  },

  {
    id: "py-003",
    country: "Paraguay",
    countryCode: "PY",
    category: "Wildlife Protection",
    topic: "Pantanal and Chaco ecosystem protection",
    summary:
      "Paraguay's environmental legislation protects the Chaco and Pantanal ecosystems and their unique wildlife.",
    details:
      "Law 352/94 on Protected Wilderness Areas and the National Parks and Wildlife Reserves Law establish Paraguay's framework for ecosystem and wildlife conservation. Paraguay contains portions of two globally significant ecosystems: the Gran Chaco (the largest dry forest in South America, shared with Argentina and Bolivia) and the Pantanal (the world's largest tropical wetland system). The Secretariat of the Environment (SEAM, now MADES - Ministry of Environment and Sustainable Development) manages 40 protected areas covering approximately 6% of the country. Key protected species include the jaguar (Panthera onca, with the Dry Chaco hosting an important population), the Chacoan peccary (Catagonus wagneri, a 'living fossil' rediscovered in 1975), the hyacinth macaw, and the marsh deer. Wildlife trafficking penalties under Law 716/96 on Environmental Crimes include imprisonment up to 5 years and fines. Paraguay participates in the Trinational Initiative for the Conservation of the Atlantic Forest corridor.",
    lawName: "Law 352/94 on Protected Wilderness Areas / Law 716/96 on Environmental Crimes",
    article: "Various",
    year: 1994,
    lastAmended: 2017,
    penaltyMax: "Up to 5 years imprisonment and fines for wildlife trafficking",
    tags: ["Chaco", "Pantanal", "jaguar", "Chacoan peccary", "MADES"],
  },

  // ==================== COSTA RICA ====================
  {
    id: "cr-001",
    country: "Costa Rica",
    countryCode: "CR",
    category: "Anti-Cruelty",
    topic: "Animal welfare and anti-cruelty",
    summary:
      "Law 7451 and its 2017 reform establish comprehensive animal welfare protections.",
    details:
      "Law 7451 (1994) on Animal Welfare (Ley de Bienestar de los Animales) was reformed by Law 9458 (2017), adding Chapter VII-BIS to the Penal Code. Article 279 bis establishes 3 months to 1 year imprisonment for mistreatment; Article 279 ter provides 6 months to 3 years for cruelty causing death. The 2017 reform recognizes animals as sentient beings. SENASA under MAG enforces farm animal welfare, while the Fuerza Publica and OIJ handle criminal cases. Costa Rica banned sport hunting through Law 9106 (2012), with fines of 5-50 base salaries (approximately CRC 2,250,000-22,500,000). The Fiscalia Adjunta Agrario-Ambiental prosecutes cruelty cases. Costa Rica leads Central America in animal welfare; its hunting ban was the first in Latin America. Wild pets are prohibited under Resolution SINAC-CONAC-092-2012.",
    lawName: "Animal Welfare Law (Law 7451, reformed by Law 9458)",
    article: "Various",
    year: 1994,
    lastAmended: 2017,
    penaltyMax: "Up to 3 years imprisonment for severe cruelty",
    tags: [
      "sentience",
      "hunting ban",
      "reform",
      "Central America leader",
    ],
  },
  {
    id: "cr-002",
    country: "Costa Rica",
    countryCode: "CR",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and biodiversity",
    summary:
      "Costa Rica's conservation laws protect 5% of the world's biodiversity.",
    details:
      "The Wildlife Conservation Law (Law 7317/1992) and Biodiversity Law (Law 7788/1998) protect Costa Rica's extraordinary biodiversity, hosting 5% of the world's species on 0.03% of the planet's surface. SINAC manages 11 conservation areas covering over 25% of terrestrial territory. Articles 14-28 regulate wildlife management with fines of 1-12 base salaries and up to 3 years imprisonment for hunting protected species. Law 7788 establishes CONAGEBIO to regulate genetic resource access under the Nagoya Protocol. Costa Rica hosts approximately 900 bird species and 250 mammals. The quetzal, scarlet macaw, sea turtles, and jaguar receive special protections. Recreational hunting was banned through Law 9106 (2012), reformed by Law 9919 (2021). Forest cover increased from 21% (1987) to over 52% (2023). MINAE coordinates environmental policy.",
    lawName:
      "Wildlife Conservation Law (Law 7317) and Biodiversity Law (Law 7788)",
    article: "Various",
    year: 1992,
    lastAmended: 2012,
    penaltyMax: "Up to 3 years imprisonment and significant fines",
    tags: [
      "biodiversity",
      "hunting ban",
      "conservation",
      "protected areas",
    ],
  },

  {
    id: "cr-003",
    country: "Costa Rica",
    countryCode: "CR",
    category: "Wildlife Protection",
    topic: "Sea turtle conservation and marine protection",
    summary:
      "Costa Rica's marine wildlife protections include pioneering sea turtle conservation and marine protected areas.",
    details:
      "The Wildlife Conservation Law (Law 7317/1992, reformed by Law 8325/2002) and the Marine Turtle Conservation Regulation (Executive Decree No. 32756-MINAE, 2005) establish comprehensive protections for Costa Rica's marine wildlife. Five species of sea turtles nest on Costa Rican beaches: leatherback, green, hawksbill, olive ridley, and loggerhead. The Tortuguero National Park on the Caribbean coast is one of the Western Hemisphere's most important nesting sites for green sea turtles. Taking, possessing, or trading sea turtle eggs or products carries penalties of up to 3 years imprisonment under Law 8325. Costa Rica also established the Cocos Island Marine Conservation Area (UNESCO World Heritage Site, 1,997 sq km), protecting hammerhead sharks, whale sharks, and manta rays. SINAC (Sistema Nacional de Areas de Conservacion) manages 11 conservation areas covering 25% of the country's territory, and Costa Rica banned recreational hunting in 2012 through Law 9106, with penalties of up to 4 months imprisonment for violations.",
    lawName: "Wildlife Conservation Law (Law 7317) / Marine Turtle Regulation (Decree 32756)",
    article: "Various",
    year: 1992,
    lastAmended: 2012,
    penaltyMax: "Up to 3 years imprisonment for sea turtle crimes; 4 months for illegal hunting",
    tags: ["sea turtles", "Tortuguero", "Cocos Island", "SINAC", "marine conservation"],
  },

  // ==================== PANAMA ====================
  {
    id: "pa-001",
    country: "Panama",
    countryCode: "PA",
    category: "Anti-Cruelty",
    topic: "Animal protection",
    summary:
      "Law 308 of 2012 establishes the framework for animal protection in Panama.",
    details:
      "Law 308 (2012) on Animal Protection establishes animal welfare rules in Panama. Article 3 prohibits cruelty, mistreatment, and abandonment. Articles 15-22 regulate pet ownership and breeding. Articles 28-33 address animals in entertainment and experimentation. MiAMBIENTE and Juntas Comunales share enforcement under Article 8. Law 256 (2021) reformed penalties: 1-3 years imprisonment for cruelty causing injury and 2-4 years for causing death. The reform mandates psychological evaluation for offenders and prohibits animal ownership for 5-10 years post-conviction. The Comite Nacional de Bienestar Animal advises MiAMBIENTE. Fines range from B/. 500-5,000 (balboas, pegged 1:1 to USD). The framework has been progressively strengthened through civil society advocacy.",
    lawName: "Animal Protection Law (Law 308)",
    article: "Various",
    year: 2012,
    lastAmended: 2021,
    penaltyMax: "Up to 3 years imprisonment (2021 reform)",
    tags: ["protection", "MiAMBIENTE", "breeding", "reform"],
  },
  {
    id: "pa-002",
    country: "Panama",
    countryCode: "PA",
    category: "Wildlife Protection",
    topic: "Wildlife conservation in the Panama Canal region",
    summary:
      "Panama's wildlife laws protect diverse species along the biological corridor.",
    details:
      "Law 24 of 1995 on Wildlife (Ley de Vida Silvestre) and the General Environment Law (Law 41/1998) protect Panama's wildlife within a critical biological corridor. Articles 40-55 regulate hunting permits and closed seasons, Articles 60-70 control wildlife trade with 1-5 years imprisonment for trafficking and fines of B/. 5,000-100,000. MiAMBIENTE serves as CITES Management Authority. The Panama Canal watershed (552,761 hectares) receives special protection under Law 44/1999. Panama hosts approximately 1,000 bird species and 260 mammals. The harpy eagle (national bird), Baird's tapir, sea turtles, and jaguars receive protections under Resolution DM-0123-2018. SINAP manages over 100 protected areas covering 35% of territory, including Darien National Park (UNESCO World Heritage Site).",
    lawName:
      "Wildlife Law (Law 24) and General Environment Law (Law 41)",
    article: "Various",
    year: 1995,
    lastAmended: 2015,
    penaltyMax:
      "Fines and up to 5 years imprisonment for trafficking protected species",
    tags: [
      "biological corridor",
      "harpy eagle",
      "Canal watershed",
      "biodiversity",
    ],
  },

  {
    id: "pa-003",
    country: "Panama",
    countryCode: "PA",
    category: "Anti-Cruelty",
    topic: "Animal cruelty criminal penalties reform",
    summary:
      "Panama's 2021 reform strengthened criminal penalties for animal cruelty with specific sentencing guidelines.",
    details:
      "Law 256 of 2021 (amending Law 308 of 2012) significantly strengthened animal cruelty penalties in Panama. The reform established specific criminal sentences: animal abuse causing injury is punishable by 1-3 years imprisonment, cruelty resulting in death carries 2-4 years imprisonment, and organized animal fighting (including dogfighting and cockfighting, with exceptions for cultural cockfighting events) carries 2-4 years imprisonment. The law also mandates psychological evaluation for individuals convicted of animal cruelty and prohibits convicted offenders from owning animals for 5-10 years. MiAMBIENTE (Ministry of Environment) and the Autoridad Nacional para la Innovacion Gubernamental coordinate a national animal abuse registry. Panama's Animal Welfare Committee (Comite Nacional de Bienestar Animal), created under Law 308, advises the government on welfare policy. The 2021 reform was driven by public outcry following high-profile animal abuse cases widely shared on social media.",
    lawName: "Law 256 of 2021 (amending Law 308 of 2012)",
    article: "Various",
    year: 2021,
    penaltyMax: "Up to 4 years imprisonment for cruelty causing death or animal fighting",
    tags: ["reform", "criminal penalties", "animal fighting", "MiAMBIENTE", "ownership ban"],
  },

  // ==================== CUBA ====================
  {
    id: "cu-001",
    country: "Cuba",
    countryCode: "CU",
    category: "Anti-Cruelty",
    topic: "Animal welfare decree-law",
    summary:
      "Decree-Law 31 of 2021 established Cuba's first comprehensive animal welfare legislation.",
    details:
      "Decree-Law 31 (2021) on Animal Welfare (Decreto-Ley 31, Gaceta Oficial Extraordinaria No. 4, February 2021) was Cuba's first comprehensive animal protection legislation. Article 4 establishes animals as sentient beings. Articles 15-22 prohibit cruelty, abandonment, and fighting. Articles 23-30 regulate pet ownership including vaccination and registration. Articles 31-40 address working, farm, and experimental animal welfare. MINAGRI, CENSA, and Consejos de la Administracion Municipal enforce the law. Penalties include fines of 500-10,000 CUP for administrative violations, with severe cruelty referred for criminal prosecution. The law resulted from an unprecedented social media campaign (#YoIncluyo) and advocacy by CEDA (Cubanos en Defensa de los Animales), a landmark in Cuban civil society.",
    lawName: "Animal Welfare Decree-Law (Decreto-Ley 31)",
    article: "Various",
    year: 2021,
    penaltyMax:
      "Fines of up to 10,000 CUP; potential criminal referral for severe cases",
    tags: [
      "first legislation",
      "civil society",
      "social media campaign",
      "landmark",
    ],
  },
  {
    id: "cu-002",
    country: "Cuba",
    countryCode: "CU",
    category: "Wildlife Protection",
    topic: "Environmental and wildlife protection",
    summary:
      "Cuba's Environmental Law protects the island's unique endemic species.",
    details:
      "Law 81 on the Environment (1997, Articles 82-95 on biological diversity) and CITMA Resolution 160/2011 protect Cuba's biodiversity. As the largest Caribbean island (110,860 sq km), Cuba has exceptional endemism: over 50% of plant species and 30% of vertebrates are found nowhere else. Protected endemic fauna include the bee hummingbird (Mellisuga helenae, world's smallest bird), the Cuban crocodile (Crocodylus rhombifer, restricted to the Zapata Swamp), the Cuban hutia, and the almiqui (Solenodon cubanus, critically endangered). CNAP manages over 200 protected areas covering 20% of territory. Cuba's coral reef system (3,200 km) is among the best-preserved in the Caribbean. Violations carry fines of 200-50,000 CUP and imprisonment under Penal Code Articles 194-200. Cuba is party to CITES, CBD, and the SPAW Protocol.",
    lawName: "Environment Law (Law 81)",
    article: "Various",
    year: 1997,
    lastAmended: 2020,
    tags: [
      "endemic species",
      "bee hummingbird",
      "Caribbean",
      "coral reefs",
    ],
  },

  {
    id: "cu-003",
    country: "Cuba",
    countryCode: "CU",
    category: "Wildlife Protection",
    topic: "National System of Protected Areas and endemic species conservation",
    summary:
      "Cuba's protected areas system conserves the largest island biodiversity in the Caribbean including numerous endemic species.",
    details:
      "The National System of Protected Areas (SNAP, established under Law 81 of 1997 and Executive Decree No. 268 of 2010) manages over 200 protected areas covering approximately 20% of Cuba's territory and 25% of its marine shelf. Cuba has the highest endemism rate in the Caribbean with over 50% of its plant species and 30% of its vertebrate species found nowhere else. Protected endemic species include the bee hummingbird (Mellisuga helenae, the world's smallest bird at 5-6 cm), the Cuban crocodile (Crocodylus rhombifer, restricted to the Zapata Swamp), the Cuban hutia (Capromys pilorides, the island's largest native land mammal), and the Cuban tody. The Zapata Swamp (Cienaga de Zapata) is a Ramsar Wetland of International Importance and one of the Caribbean's most important wildlife habitats. The Centro Nacional de Areas Protegidas (CNAP) coordinates management. Violations of protected area regulations, including unauthorized hunting or collection of protected species, are punishable under Law 81 and the Penal Code with fines and imprisonment up to 5 years.",
    lawName: "Law 81 on the Environment / Executive Decree No. 268 of 2010",
    article: "Various",
    year: 1997,
    lastAmended: 2020,
    penaltyMax: "Fines and imprisonment up to 5 years for violations in protected areas",
    tags: ["SNAP", "Zapata Swamp", "bee hummingbird", "Cuban crocodile", "endemism"],
  },

  // ==================== JAMAICA ====================
  {
    id: "jm-001",
    country: "Jamaica",
    countryCode: "JM",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "The Cruelty to Animals Act provides basic protections against animal abuse.",
    details:
      "The Cruelty to Animals Act (enacted 1904, Chapter 81, last amended 1948) prohibits unnecessary cruelty to domestic and captive animals. Section 3 makes it an offense to cruelly beat, kick, ill-treat, overdrive, or torture any animal, or to cause suffering by failing to provide adequate food, water, or shelter. Section 5 prohibits animal fighting including cockfighting and dogfighting. Penalties include fines up to JMD 2,000 (approximately USD 13, reflecting the outdated scale) and/or imprisonment up to 6 months. The JSPCA (established 1904) assists the Jamaica Constabulary Force in enforcement. Welfare advocates have called for modernization, arguing colonial-era penalties are inadequate. A draft Animal Welfare Bill has been under consideration since 2017 proposing higher penalties and mandatory reporting. The Animals (Control of Dogs) Act (1972) provides supplementary provisions.",
    lawName: "Cruelty to Animals Act",
    article: "Various",
    year: 1904,
    lastAmended: 1948,
    penaltyMax: "Fines and/or up to 6 months imprisonment",
    tags: [
      "colonial-era",
      "basic protections",
      "JSPCA",
      "reform needed",
    ],
  },
  {
    id: "jm-002",
    country: "Jamaica",
    countryCode: "JM",
    category: "Wildlife Protection",
    topic: "Wildlife protection and endangered species",
    summary:
      "The Wildlife Protection Act safeguards Jamaica's endemic species.",
    details:
      "The Wildlife Protection Act (1945, amended 1982 and 1998) and Endangered Species Act (2000) protect Jamaica's wildlife. Sections 4-9 designate protected species and regulate hunting through permits administered by NEPA, with closed seasons by ministerial order. The Endangered Species Act implements CITES, with NEPA as Management Authority. Penalties include fines up to JMD 2,000,000 (approximately USD 13,000) and imprisonment up to 2 years for trafficking. Jamaica hosts extraordinary endemism: over 30 endemic bird species including the streamertail hummingbird (national bird). The Jamaican iguana (Cyclura collei), rediscovered in 1990 after presumed extinction, has a dedicated recovery program. The giant swallowtail butterfly (Papilio homerus) is the Western Hemisphere's largest. The Blue and John Crow Mountains (UNESCO World Heritage Site) provide critical habitat.",
    lawName: "Wildlife Protection Act and Endangered Species Act",
    article: "Various",
    year: 1945,
    lastAmended: 2000,
    penaltyMax:
      "Fines and imprisonment for trafficking endangered species",
    tags: [
      "endemic species",
      "Jamaican iguana",
      "NEPA",
      "Caribbean biodiversity",
    ],
  },

  // ============================================================
  {
    id: "jm-003",
    country: "Jamaica",
    countryCode: "JM",
    category: "Anti-Cruelty",
    topic: "Animals (Control of Dogs) Act and rabies prevention",
    summary:
      "Jamaica regulates dog control and rabies prevention through specialized legislation alongside general animal cruelty provisions.",
    details:
      "The Animals (Control of Dogs) Act (1972, amended 2007) regulates dog ownership, licensing, and control in Jamaica. All dogs must be licensed and vaccinated against rabies under the Act, which is administered by the Veterinary Services Division of the Ministry of Agriculture. Owners of dangerous dogs must maintain secure enclosures and liability insurance. The Act authorizes the destruction of stray, rabid, or dangerous dogs by authorized officers. Combined with the Cruelty to Animals Act (originally 1904), these laws form Jamaica's primary animal legislation. The Jamaica Veterinary Board (established under the Veterinary Act 2004) regulates veterinary standards and animal health. Jamaica is also party to the Specially Protected Areas and Wildlife Protocol (SPAW) under the Cartagena Convention, which protects marine species including West Indian manatees, sea turtles, and whale sharks in Jamaican waters. NEPA (National Environment and Planning Agency) enforces the Wildlife Protection Act and manages 11 protected areas.",
    lawName: "Animals (Control of Dogs) Act / Cruelty to Animals Act",
    article: "Various",
    year: 1972,
    lastAmended: 2007,
    penaltyMax: "Fines and/or imprisonment up to 12 months for violations",
    tags: ["dog control", "rabies", "SPAW Protocol", "Veterinary Board", "NEPA"],
  },

  // ==================== ALGERIA ====================
  {
    id: "dz-001",
    country: "Algeria",
    countryCode: "DZ",
    category: "Anti-Cruelty",
    topic: "Animal protection under the penal code and veterinary law",
    summary:
      "Algeria prohibits animal cruelty through its Penal Code and veterinary health legislation.",
    details:
      "The Algerian Penal Code (Ordonnance No. 66-156 of 1966, amended by Law No. 06-23 of 2006) addresses animal cruelty under Articles 449-450, penalizing acts of cruelty toward domestic animals with fines and short-term imprisonment. Law No. 88-08 on Veterinary Medicine (1988) regulates animal health, disease control, and the treatment of animals under veterinary care. Executive Decree No. 10-253 (2010) sets conditions for animal transport and slaughter. Algeria's framework is largely focused on animal health and agricultural productivity rather than welfare per se. The Ministry of Agriculture and Rural Development oversees enforcement through the Direction des Services Vétérinaires. Penalties for cruelty range from fines of DZD 500 to DZD 20,000 and imprisonment up to 10 days under the Penal Code.",
    lawName: "Penal Code (Ordonnance No. 66-156) / Law No. 88-08 on Veterinary Medicine",
    article: "Articles 449-450 (Penal Code)",
    year: 1966,
    lastAmended: 2006,
    penaltyMin: "Fine of DZD 500",
    penaltyMax: "Fine up to DZD 20,000 and/or up to 10 days imprisonment",
    tags: ["penal code", "veterinary law", "animal health", "transport"],
  },
  {
    id: "dz-002",
    country: "Algeria",
    countryCode: "DZ",
    category: "Wildlife Protection",
    topic: "Hunting regulation and protected species",
    summary:
      "Algeria regulates hunting and protects wildlife through dedicated legislation covering Saharan and Mediterranean ecosystems.",
    details:
      "Law No. 04-07 on Hunting (2004) establishes Algeria's framework for wildlife conservation and hunting regulation. It designates protected species, regulates hunting seasons and permits, and establishes nature reserves. Executive Decree No. 12-235 (2012) lists protected non-domestic animal species including the Barbary macaque (Macaca sylvanus), the addax (Addax nasomaculatus), the Saharan cheetah (Acinonyx jubatus hecki), and the Mediterranean monk seal. Algeria maintains 11 national parks including Tassili n'Ajjer and Ahaggar in the Sahara. The Direction Générale des Forêts serves as CITES Management Authority. Law No. 03-10 on Environmental Protection (2003) provides the broader framework for biodiversity conservation. Violations of hunting laws carry fines up to DZD 500,000 and imprisonment up to 2 years.",
    lawName: "Law No. 04-07 on Hunting",
    article: "Various",
    year: 2004,
    lastAmended: 2012,
    penaltyMax: "Fines up to DZD 500,000 and up to 2 years imprisonment",
    tags: ["hunting", "Saharan wildlife", "Barbary macaque", "national parks", "CITES"],
  },

  // ==================== ANGOLA ====================
  {
    id: "ao-001",
    country: "Angola",
    countryCode: "AO",
    category: "Anti-Cruelty",
    topic: "Animal welfare under veterinary and livestock regulations",
    summary:
      "Angola addresses animal welfare primarily through veterinary health legislation and livestock regulations.",
    details:
      "Angola's animal welfare framework is rooted in veterinary and agricultural legislation rather than standalone anti-cruelty law. The Veterinary Statute (Decreto No. 46/04 of 2004) regulates animal health, disease prevention, and veterinary practice. Presidential Decree No. 179/18 (2018) on Livestock Regulation addresses housing conditions, transport, and slaughter standards for farm animals. The National Directorate of Livestock and Veterinary Services (DNSPV) within the Ministry of Agriculture and Fisheries oversees enforcement. Angola's Penal Code (Law No. 38/20 of 2020) includes provisions against destruction of property that can apply to animals as property. Enforcement remains limited due to institutional capacity constraints, particularly in rural provinces where subsistence farming predominates.",
    lawName: "Veterinary Statute (Decreto No. 46/04) / Presidential Decree No. 179/18",
    article: "Various",
    year: 2004,
    lastAmended: 2018,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["veterinary law", "livestock", "animal health", "DNSPV"],
  },
  {
    id: "ao-002",
    country: "Angola",
    countryCode: "AO",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and protected areas",
    summary:
      "Angola protects wildlife through environmental legislation covering its diverse ecosystems from rainforest to desert.",
    details:
      "The Environmental Framework Law (Lei de Bases do Ambiente, Law No. 5/98 of 1998) and the Law on Biological Aquatic Resources (Law No. 6-A/04 of 2004) form Angola's wildlife protection framework. Presidential Decree No. 81/11 (2011) designates protected areas including Quiçama, Iona, Cangandala, and Bicuar national parks. Angola hosts the giant sable antelope (Hippotragus niger variani), a critically endangered endemic subspecies and national symbol, protected under special conservation programs since 2002. The Ministry of Environment oversees wildlife through the National Institute of Biodiversity and Conservation Areas (INBAC). Angola ratified CITES in 2013. Illegal hunting and wildlife trafficking penalties under the Environmental Crimes provisions include fines and imprisonment up to 3 years. The Okavango-Zambezi Transfrontier Conservation Area (KAZA TFCA) represents cross-border conservation efforts.",
    lawName: "Environmental Framework Law (Law No. 5/98) / Presidential Decree No. 81/11",
    article: "Various",
    year: 1998,
    lastAmended: 2011,
    penaltyMax: "Fines and up to 3 years imprisonment",
    tags: ["giant sable antelope", "INBAC", "national parks", "CITES", "KAZA"],
  },

  // ==================== CAMEROON ====================
  {
    id: "cm-001",
    country: "Cameroon",
    countryCode: "CM",
    category: "Anti-Cruelty",
    topic: "Animal welfare under the Penal Code and pastoral regulations",
    summary:
      "Cameroon addresses animal cruelty through Penal Code provisions and pastoral legislation.",
    details:
      "The Cameroon Penal Code (Law No. 2016/007 of 2016) includes provisions against animal cruelty under Section 370, penalizing the unnecessary killing or cruel treatment of domestic animals. Law No. 2000/017 on Pastoral Regulation (2000) governs livestock management, transhumance, and animal health in pastoral communities. The Ministry of Livestock, Fisheries and Animal Industries (MINEPIA) oversees animal health and welfare enforcement. Decree No. 86/755 (1986) regulates veterinary inspections and slaughter conditions. Cameroon's diverse agro-pastoral systems, from the Adamawa Plateau to the southern forest zone, present distinct animal welfare challenges. Penalties for animal cruelty under the Penal Code include imprisonment of 15 days to 2 months and/or fines of FCFA 5,000 to 25,000.",
    lawName: "Penal Code (Law No. 2016/007) / Law No. 2000/017 on Pastoral Regulation",
    article: "Section 370 (Penal Code)",
    year: 2000,
    lastAmended: 2016,
    penaltyMin: "Fine of FCFA 5,000",
    penaltyMax: "Up to 2 months imprisonment and/or fine of FCFA 25,000",
    tags: ["penal code", "pastoral law", "MINEPIA", "livestock"],
  },
  {
    id: "cm-002",
    country: "Cameroon",
    countryCode: "CM",
    category: "Wildlife Protection",
    topic: "Wildlife and forestry conservation",
    summary:
      "Cameroon protects its exceptional biodiversity through forestry and wildlife legislation covering rainforest, savanna, and montane ecosystems.",
    details:
      "Law No. 94/01 on Forestry, Wildlife and Fisheries (1994) is Cameroon's primary wildlife conservation statute. It establishes three classes of protected species (Class A fully protected, Class B requiring permits, Class C partially protected) and regulates hunting through a permit system. Decree No. 95/466 (1995) provides implementing regulations. Cameroon hosts exceptional biodiversity including the Cross River gorilla (Gorilla gorilla diehli), the drill (Mandrillus leucophaeus), forest elephants, and over 900 bird species. The Ministry of Forestry and Wildlife (MINFOF) manages 23 national parks and over 60 wildlife reserves. The Dja Faunal Reserve is a UNESCO World Heritage Site. Penalties for poaching Class A species include imprisonment of 1-3 years and fines of FCFA 3,000,000-10,000,000. Cameroon is a CITES party and participates in the Congo Basin Forest Partnership.",
    lawName: "Law No. 94/01 on Forestry, Wildlife and Fisheries",
    article: "Various",
    year: 1994,
    lastAmended: 1995,
    penaltyMin: "Fine of FCFA 3,000,000 for Class A species violations",
    penaltyMax: "Up to 3 years imprisonment and fines up to FCFA 10,000,000",
    tags: ["Cross River gorilla", "Dja Reserve", "MINFOF", "Congo Basin", "CITES"],
  },

  // ==================== COTE D'IVOIRE ====================
  {
    id: "ci-001",
    country: "Côte d'Ivoire",
    countryCode: "CI",
    category: "Anti-Cruelty",
    topic: "Animal welfare under veterinary and pastoral legislation",
    summary:
      "Côte d'Ivoire addresses animal welfare through veterinary health and livestock management laws.",
    details:
      "Law No. 96-563 on Animal Health (1996) governs animal welfare in the context of veterinary care, disease control, and livestock management in Côte d'Ivoire. The law mandates proper treatment of animals during transport, at markets, and at slaughter facilities. Decree No. 96-435 (1996) establishes veterinary inspection standards. The Ministry of Animal and Fishery Resources (MIRAH) oversees enforcement through the Direction des Services Vétérinaires. The Penal Code (Loi No. 2019-574 of 2019) includes general provisions against property destruction applicable to animals. Livestock plays a significant economic role, particularly in the northern savanna regions. Enforcement of animal welfare provisions remains limited, with greater emphasis on disease prevention (particularly rinderpest and avian influenza control) than on welfare per se.",
    lawName: "Law No. 96-563 on Animal Health",
    article: "Various",
    year: 1996,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["animal health", "veterinary services", "MIRAH", "livestock"],
  },
  {
    id: "ci-002",
    country: "Côte d'Ivoire",
    countryCode: "CI",
    category: "Wildlife Protection",
    topic: "Wildlife protection and forest conservation",
    summary:
      "Côte d'Ivoire protects wildlife through legislation governing its Guinea-Congolian forests and savanna ecosystems.",
    details:
      "Law No. 94-442 on Wildlife Protection (1994) regulates hunting, establishes protected species lists, and designates conservation areas in Côte d'Ivoire. The law classifies species into fully protected (Annexe I) and partially protected (Annexe II) categories. Law No. 2014-427 on the Forestry Code (2014) reinforces habitat protection. Côte d'Ivoire's Taï National Park (UNESCO World Heritage Site since 1982) is one of West Africa's last significant remnants of primary rainforest, harboring pygmy hippopotamus (Choeropsis liberiensis), chimpanzees, and the Jentink's duiker. The Office Ivoirien des Parcs et Réserves (OIPR) manages 8 national parks and 21 reserves. Comoé National Park in the northeast is one of the largest protected areas in West Africa. Poaching penalties include imprisonment of 1-5 years and fines up to FCFA 5,000,000. Côte d'Ivoire ratified CITES in 1994.",
    lawName: "Law No. 94-442 on Wildlife Protection / Law No. 2014-427 Forestry Code",
    article: "Various",
    year: 1994,
    lastAmended: 2014,
    penaltyMax: "Up to 5 years imprisonment and fines up to FCFA 5,000,000",
    tags: ["Taï National Park", "pygmy hippo", "OIPR", "Comoé", "CITES"],
  },

  // ==================== DEMOCRATIC REPUBLIC OF THE CONGO ====================
  {
    id: "cd-001",
    country: "Democratic Republic of the Congo",
    countryCode: "CD",
    category: "Anti-Cruelty",
    topic: "Animal welfare under agricultural and veterinary legislation",
    summary:
      "The DRC addresses animal welfare through veterinary regulations and agricultural codes inherited from the colonial era and updated post-independence.",
    details:
      "The Democratic Republic of the Congo's animal welfare provisions derive from colonial-era legislation updated by post-independence decrees. The Hunting Ordinance (Ordonnance-Loi No. 82-002 of 1982) and the Agricultural Code (Law No. 11/022 of 2011) contain provisions relevant to animal treatment. The National Veterinary Service (Service National de Vétérinaire) regulates animal health under the Ministry of Agriculture. Decree No. 05/160 (2005) governs veterinary practice standards. The Penal Code (Décret du 30 janvier 1940, as amended) includes provisions on property destruction applicable to animals. Animal welfare enforcement is severely constrained by ongoing conflict, limited state capacity, and the country's vast territory (2.3 million sq km). Humanitarian priorities have historically taken precedence over animal welfare legislation development.",
    lawName: "Agricultural Code (Law No. 11/022) / Ordonnance-Loi No. 82-002",
    article: "Various",
    year: 1982,
    lastAmended: 2011,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["agricultural code", "veterinary services", "animal health"],
  },
  {
    id: "cd-002",
    country: "Democratic Republic of the Congo",
    countryCode: "CD",
    category: "Wildlife Protection",
    topic: "Wildlife conservation in the Congo Basin",
    summary:
      "The DRC protects its extraordinary biodiversity, including endemic gorillas and okapi, through national and international conservation frameworks.",
    details:
      "Law No. 14/003 on Nature Conservation (2014) is the DRC's primary wildlife protection statute, replacing the colonial-era hunting ordinance. It establishes protected area categories, regulates wildlife trade, and designates protected species including the mountain gorilla (Gorilla beringei beringei), Grauer's gorilla (Gorilla beringei graueri), okapi (Okapia johnstoni), and bonobo (Pan paniscus). The Institut Congolais pour la Conservation de la Nature (ICCN) manages 7 national parks and numerous reserves, including 5 UNESCO World Heritage Sites (Virunga, Garamba, Kahuzi-Biega, Salonga, and Okapi Wildlife Reserve). The DRC contains the largest portion of the Congo Basin rainforest, the world's second-largest tropical forest. Penalties under Law No. 14/003 include imprisonment of 2-10 years and fines for poaching protected species. Despite robust legislation, enforcement is critically undermined by armed conflict, particularly in eastern provinces.",
    lawName: "Law No. 14/003 on Nature Conservation",
    article: "Various",
    year: 2014,
    penaltyMax: "Up to 10 years imprisonment and substantial fines",
    tags: ["mountain gorilla", "bonobo", "okapi", "ICCN", "Congo Basin", "UNESCO"],
  },

  // ==================== ZIMBABWE ====================
  {
    id: "zw-001",
    country: "Zimbabwe",
    countryCode: "ZW",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Zimbabwe maintains comprehensive anti-cruelty legislation through the Prevention of Cruelty to Animals Act.",
    details:
      "The Prevention of Cruelty to Animals Act (Chapter 19:09, originally enacted in 1960, substantially amended) is Zimbabwe's primary animal welfare statute. Section 3 prohibits cruelty including beating, kicking, overdriving, overloading, torturing, infuriating, or terrifying any animal. Section 4 prohibits the conveyance of animals in a manner causing unnecessary suffering. Section 5 addresses animal fighting and baiting. The Act empowers the SPCA (Society for the Prevention of Cruelty to Animals) as an authorized enforcement body alongside police. The Animal Health Act (Chapter 19:01) governs livestock health and disease control. Penalties for cruelty offenses include fines up to level 5 and/or imprisonment up to 1 year. For repeat offenses, penalties increase to fines up to level 7 and/or imprisonment up to 2 years. Zimbabwe's SPCA operates shelters and conducts inspections in major cities.",
    lawName: "Prevention of Cruelty to Animals Act (Chapter 19:09)",
    article: "Sections 3-5",
    year: 1960,
    lastAmended: 2001,
    penaltyMin: "Fine up to level 5",
    penaltyMax: "Up to 2 years imprisonment for repeat offenses",
    tags: ["SPCA", "anti-cruelty", "animal fighting", "transport"],
  },
  {
    id: "zw-002",
    country: "Zimbabwe",
    countryCode: "ZW",
    category: "Wildlife Protection",
    topic: "Parks and wildlife conservation",
    summary:
      "Zimbabwe protects its iconic megafauna through the Parks and Wild Life Act and manages one of Africa's largest elephant populations.",
    details:
      "The Parks and Wild Life Act (Chapter 20:14, originally 1975, substantially amended in 1996 and 2001) governs wildlife conservation in Zimbabwe. It establishes national parks, safari areas, sanctuaries, and recreational parks under the Zimbabwe Parks and Wildlife Management Authority (ZimParks). The Act classifies animals into specially protected (First Schedule), protected (Second Schedule), and restricted (Third Schedule) species. Zimbabwe hosts approximately 85,000 elephants (Africa's second-largest population), significant populations of black and white rhinoceros, and the 'Big Five.' The Communal Areas Management Programme for Indigenous Resources (CAMPFIRE) is a pioneering community-based conservation model. Hwange, Mana Pools (UNESCO World Heritage), and Gonarezhou are major national parks. Penalties for poaching specially protected species include mandatory imprisonment of up to 15 years. Zimbabwe implements CITES with particular attention to elephant ivory and rhinoceros horn trade.",
    lawName: "Parks and Wild Life Act (Chapter 20:14)",
    article: "Various",
    year: 1975,
    lastAmended: 2001,
    penaltyMax: "Mandatory imprisonment up to 15 years for poaching specially protected species",
    tags: ["ZimParks", "CAMPFIRE", "elephants", "rhinoceros", "Hwange", "CITES"],
  },

  // ==================== ZAMBIA ====================
  {
    id: "zm-001",
    country: "Zambia",
    countryCode: "ZM",
    category: "Anti-Cruelty",
    topic: "Cruelty to animals prohibition",
    summary:
      "Zambia prohibits animal cruelty through the Cruelty to Animals Act inherited from the colonial era.",
    details:
      "The Cruelty to Animals Act (Chapter 244 of the Laws of Zambia) prohibits cruel treatment of domestic and captive animals. Section 3 criminalizes beating, kicking, overdriving, overloading, torturing, or otherwise causing unnecessary suffering to any animal. Section 4 addresses animal transport conditions. Section 6 prohibits animal fighting and baiting. The Veterinary and Livestock Development Act (No. 13 of 2010) provides a modern framework for animal health, regulating veterinary practice and livestock disease control. The Department of Veterinary Services under the Ministry of Fisheries and Livestock oversees animal health. The Zambia SPCA, headquartered in Lusaka, assists enforcement and operates animal shelters. Penalties under the Cruelty to Animals Act include fines and imprisonment up to 6 months for first offenses, increasing for subsequent convictions.",
    lawName: "Cruelty to Animals Act (Chapter 244)",
    article: "Sections 3-6",
    year: 1955,
    penaltyMax: "Fines and up to 6 months imprisonment",
    tags: ["anti-cruelty", "SPCA", "veterinary services", "livestock"],
  },
  {
    id: "zm-002",
    country: "Zambia",
    countryCode: "ZM",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and national parks",
    summary:
      "Zambia protects wildlife through the Zambia Wildlife Act, managing 20 national parks and significant populations of large mammals.",
    details:
      "The Zambia Wildlife Act No. 14 of 2015 replaced the earlier Wildlife Act of 1998, establishing a comprehensive framework for wildlife conservation. It created the Department of National Parks and Wildlife (DNPW) under the Ministry of Tourism and Arts. The Act designates national parks, game management areas (GMAs), and bird sanctuaries. Zambia hosts 20 national parks including South Luangwa, North Luangwa, Kafue (one of Africa's largest at 22,400 sq km), and Lower Zambezi. Key species include the African wild dog, elephant, lion, leopard, and the endemic Kafue lechwe (Kobus leche kafuensis). Community-Based Natural Resource Management (CBNRM) programs operate in GMAs. Penalties for poaching protected species include imprisonment of 5-25 years and fines. The Act specifically addresses ivory and rhino horn trafficking with enhanced penalties. Zambia participates in KAZA TFCA, the world's largest transfrontier conservation area.",
    lawName: "Zambia Wildlife Act No. 14 of 2015",
    article: "Various",
    year: 2015,
    penaltyMin: "5 years imprisonment for wildlife offenses",
    penaltyMax: "Up to 25 years imprisonment for poaching protected species",
    tags: ["DNPW", "South Luangwa", "Kafue", "KAZA", "community conservation"],
  },

  // ==================== MALAWI ====================
  {
    id: "mw-001",
    country: "Malawi",
    countryCode: "MW",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Malawi prohibits animal cruelty through legislation addressing the welfare of domestic and captive animals.",
    details:
      "The Penal Code (Chapter 7:01) of Malawi addresses animal cruelty under Section 270, which prohibits wanton, unreasonable, or negligent acts or omissions causing unnecessary suffering to animals. The section covers beating, overdriving, overloading, and failure to provide adequate food, water, or shelter. The Animal Diseases Act (Chapter 66:02) governs livestock health and disease control through the Department of Animal Health and Livestock Development. The Veterinary, Para-Veterinary and Livestock Technicians Act (2008) regulates professional standards. The Lilongwe Society for the Protection and Care of Animals (LSPCA) is the primary animal welfare organization assisting enforcement. Penalties for cruelty under the Penal Code include imprisonment up to 3 months and/or fines. Malawi's animal welfare enforcement is limited by resource constraints in a predominantly agrarian economy.",
    lawName: "Penal Code (Chapter 7:01)",
    article: "Section 270",
    year: 1930,
    penaltyMax: "Up to 3 months imprisonment and/or fines",
    tags: ["penal code", "cruelty prevention", "LSPCA", "livestock"],
  },
  {
    id: "mw-002",
    country: "Malawi",
    countryCode: "MW",
    category: "Wildlife Protection",
    topic: "National parks and wildlife conservation",
    summary:
      "Malawi protects its diverse wildlife through the National Parks and Wildlife Act, covering Lake Malawi's endemic fish species and terrestrial fauna.",
    details:
      "The National Parks and Wildlife Act (Chapter 66:07, revised 2017) is Malawi's primary wildlife conservation statute. It establishes national parks, wildlife reserves, and nature sanctuaries under the Department of National Parks and Wildlife (DNPW). The Act protects listed species including elephants, rhinoceros, hippos, and the endemic Lake Malawi cichlid fishes (over 800 species). Lake Malawi National Park is a UNESCO World Heritage Site for its cichlid diversity. Key protected areas include Liwonde, Nyika, Kasungu, and Majete (successfully restocked with black rhinos in 2003 through African Parks). The 2017 amendment significantly increased penalties: imprisonment of up to 30 years for killing, taking, or trading in listed species. Malawi participates in the SADC Law Enforcement and Anti-Poaching Strategy. The Lilongwe Wildlife Trust provides conservation support.",
    lawName: "National Parks and Wildlife Act (Chapter 66:07)",
    article: "Various",
    year: 1992,
    lastAmended: 2017,
    penaltyMax: "Up to 30 years imprisonment for listed species offenses",
    tags: ["Lake Malawi cichlids", "DNPW", "Majete", "African Parks", "UNESCO"],
  },

  // ==================== MADAGASCAR ====================
  {
    id: "mg-001",
    country: "Madagascar",
    countryCode: "MG",
    category: "Anti-Cruelty",
    topic: "Animal welfare and livestock protection",
    summary:
      "Madagascar addresses animal welfare primarily through livestock and veterinary legislation.",
    details:
      "Madagascar's animal welfare framework derives from veterinary and agricultural legislation. Ordonnance No. 62-019 (1962) on Animal Health and Sanitary Police (Police Sanitaire des Animaux) governs livestock health, disease control, and animal treatment standards. The Penal Code addresses destruction and mistreatment of animals as property offenses. Decree No. 2006-098 on Veterinary Practice regulates professional standards for animal treatment. The Ministry of Agriculture, Livestock and Fisheries oversees animal health through the Direction des Services Vétérinaires. Zebu cattle hold exceptional cultural significance in Malagasy society, with an estimated population exceeding 10 million head. Traditional practices around zebu, including the Savika bull-wrestling tradition, present unique welfare considerations. Enforcement of welfare standards is limited by veterinary capacity constraints, particularly in rural areas.",
    lawName: "Ordonnance No. 62-019 on Animal Health / Penal Code",
    article: "Various",
    year: 1962,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["animal health", "veterinary services", "zebu", "livestock"],
  },
  {
    id: "mg-002",
    country: "Madagascar",
    countryCode: "MG",
    category: "Wildlife Protection",
    topic: "Protection of endemic wildlife and lemurs",
    summary:
      "Madagascar protects its extraordinary endemic biodiversity, including over 100 lemur species, through comprehensive conservation legislation.",
    details:
      "Law No. 2005-018 on International Trade in Wild Species of Fauna and Flora (CITES implementation) and the Protected Areas Code (Loi No. 2015-005, Code des Aires Protégées) form Madagascar's wildlife protection framework. Decree No. 2006-400 lists protected species. Madagascar is a mega-diverse country with approximately 90% endemism among its fauna, including all 112+ lemur species (Infraorder Lemuriformes), over 400 reptile species, and unique carnivores like the fossa (Cryptoprocta ferox). Madagascar National Parks (formerly ANGAP) manages over 40 protected areas covering approximately 10% of the island. The 'Durban Vision' (2003) committed to tripling protected area coverage. Penalties for wildlife trafficking include imprisonment of 2-5 years and fines of MGA 2,000,000-20,000,000 under the CITES implementation law. Madagascar has been a CITES party since 1975. Illegal rosewood logging and lemur poaching remain critical enforcement challenges.",
    lawName: "Protected Areas Code (Law No. 2015-005) / Law No. 2005-018 (CITES)",
    article: "Various",
    year: 2005,
    lastAmended: 2015,
    penaltyMax: "Up to 5 years imprisonment and fines up to MGA 20,000,000",
    tags: ["lemurs", "endemism", "Madagascar National Parks", "CITES", "fossa"],
  },

  // ==================== MAURITIUS ====================
  {
    id: "mu-001",
    country: "Mauritius",
    countryCode: "MU",
    category: "Anti-Cruelty",
    topic: "Animal welfare and prevention of cruelty",
    summary:
      "Mauritius enforces animal welfare through the Animal Welfare Act, one of the more comprehensive statutes in the African region.",
    details:
      "The Animal Welfare Act 2013 (Act No. 10 of 2013) is Mauritius's primary animal welfare statute, replacing older colonial-era provisions. The Act establishes duties of care for animal owners (Section 4), prohibits cruelty and abandonment (Section 5), regulates animal transport (Section 9), and controls animal experiments (Section 11). It created the Animal Welfare Advisory Committee to advise the Minister on welfare matters. The Act applies to all vertebrate animals and defines cruelty broadly, including causing unnecessary suffering, failure to provide adequate food, water, shelter, and veterinary care. The Mauritius Society for Animal Welfare (MSAW), formerly the MSPCA, assists enforcement. Penalties include fines up to MUR 100,000 and imprisonment up to 5 years for serious cruelty offenses. The Act also regulates dog breeding, pet shops, and animal sanctuaries.",
    lawName: "Animal Welfare Act 2013 (Act No. 10 of 2013)",
    article: "Sections 4-11",
    year: 2013,
    penaltyMin: "Fines up to MUR 25,000",
    penaltyMax: "Fines up to MUR 100,000 and/or up to 5 years imprisonment",
    tags: ["animal welfare act", "MSAW", "duty of care", "animal experiments"],
  },
  {
    id: "mu-002",
    country: "Mauritius",
    countryCode: "MU",
    category: "Wildlife Protection",
    topic: "Native species conservation and invasive species management",
    summary:
      "Mauritius protects its remaining endemic species through the Wildlife and National Parks Act, with a focus on preventing extinctions.",
    details:
      "The Wildlife and National Parks Act 1993 (Act No. 13 of 1993) governs wildlife conservation in Mauritius. The Native Terrestrial Biodiversity and National Parks Act 2015 (Act No. 14 of 2015) provides updated protections for endemic species. Mauritius is home to some of the world's rarest species including the Mauritius kestrel (Falco punctatus, recovered from 4 individuals in 1974), the pink pigeon (Nesoenas mayeri), and the echo parakeet (Psittacula eques). The Mauritian Wildlife Foundation (MWF) conducts critical captive breeding programs. Black River Gorges National Park protects the island's remaining native forest (2% of original extent). The Marine Protected Area framework protects coral reef ecosystems. The National Parks and Conservation Service under the Ministry of Agro-Industry enforces wildlife laws. Penalties for wildlife offenses include fines and imprisonment. Mauritius's conservation success with the kestrel is considered one of the greatest achievements in species recovery.",
    lawName: "Native Terrestrial Biodiversity and National Parks Act 2015",
    article: "Various",
    year: 1993,
    lastAmended: 2015,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Mauritius kestrel", "pink pigeon", "MWF", "Black River Gorges", "endemism"],
  },

  // ==================== LIBYA ====================
  {
    id: "ly-001",
    country: "Libya",
    countryCode: "LY",
    category: "Anti-Cruelty",
    topic: "Animal welfare under veterinary and agricultural legislation",
    summary:
      "Libya addresses animal welfare through veterinary health legislation and Penal Code provisions.",
    details:
      "Libya's animal welfare provisions are found in veterinary health legislation and general penal provisions rather than standalone welfare law. Law No. 17 of 1992 on Animal Health governs livestock welfare, disease control, and veterinary practice standards. The Penal Code includes provisions against property damage applicable to animals. The Ministry of Agriculture, Livestock and Marine Resources oversees animal health through the National Centre for Animal Health. Libya's agricultural sector, including sheep and goat herding in the Fezzan and Cyrenaica regions, is the primary context for animal welfare regulation. The political instability since 2011 has severely disrupted institutional enforcement capacity. Islamic jurisprudence (Sharia), which prohibits unnecessary cruelty to animals, informs customary animal treatment practices alongside statutory law.",
    lawName: "Law No. 17 of 1992 on Animal Health / Penal Code",
    article: "Various",
    year: 1992,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["animal health", "veterinary law", "livestock", "Islamic jurisprudence"],
  },
  {
    id: "ly-002",
    country: "Libya",
    countryCode: "LY",
    category: "Wildlife Protection",
    topic: "Wildlife and desert ecosystem protection",
    summary:
      "Libya protects Saharan and Mediterranean wildlife through environmental legislation and protected area designations.",
    details:
      "Law No. 15 of 2003 on Environmental Protection and Improvement provides the framework for wildlife conservation in Libya. The Hunting Regulation Law (Law No. 29 of 1978) regulates hunting seasons, prohibited species, and hunting methods. Libya's wildlife includes Saharan species such as the Barbary sheep (Ammotragus lervia), dorcas gazelle (Gazella dorcas), striped hyena, and the critically endangered addax. The Mediterranean coast supports marine turtles (loggerhead and green turtles). Libya designated protected areas including the Bel Rhanem Nature Reserve, Gharabulli Nature Reserve, and El Kouf National Park. The Environment General Authority (EGA) was responsible for environmental enforcement prior to 2011. Libya ratified CITES in 2003. Post-2011 political instability has severely undermined enforcement, with reports of increased illegal hunting and wildlife trade.",
    lawName: "Law No. 15 of 2003 on Environmental Protection / Law No. 29 of 1978 on Hunting",
    article: "Various",
    year: 1978,
    lastAmended: 2003,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Saharan wildlife", "Barbary sheep", "CITES", "marine turtles"],
  },

  // ==================== SUDAN ====================
  {
    id: "sd-001",
    country: "Sudan",
    countryCode: "SD",
    category: "Anti-Cruelty",
    topic: "Animal welfare under veterinary and Islamic law traditions",
    summary:
      "Sudan addresses animal welfare through veterinary legislation and Islamic legal principles prohibiting animal cruelty.",
    details:
      "The Animal Diseases Act (2001) and the Veterinary Council Act (2004) form Sudan's primary framework for animal health and welfare. The laws regulate livestock health, veterinary practice, and animal treatment standards. Sudan's Criminal Act (1991) includes provisions on property damage applicable to animals. Islamic jurisprudence, which is constitutionally significant in Sudan, prohibits unnecessary cruelty to animals (based on Hadith traditions) and prescribes humane slaughter methods. The Ministry of Animal Resources and Fisheries oversees animal health through state veterinary services. Sudan has one of the largest livestock populations in Africa (estimated 100+ million head), making animal health economically critical. The Livestock Marketing and Resilience Programme (LMRP) addresses animal welfare in pastoral contexts. Enforcement varies significantly between urban areas and pastoralist regions in Darfur, Kordofan, and the east.",
    lawName: "Animal Diseases Act (2001) / Veterinary Council Act (2004)",
    article: "Various",
    year: 2001,
    lastAmended: 2004,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Islamic jurisprudence", "livestock", "pastoral systems", "veterinary services"],
  },
  {
    id: "sd-002",
    country: "Sudan",
    countryCode: "SD",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and national parks",
    summary:
      "Sudan protects wildlife through the Wildlife Conservation and National Parks Act covering Saharan, Sahelian, and Nile Valley ecosystems.",
    details:
      "The Wildlife Conservation and National Parks Act (2003) is Sudan's primary wildlife statute, administered by the Wildlife Conservation General Administration under the Ministry of Environment. The Act designates national parks, game reserves, and bird sanctuaries, and lists protected species. Sudan's diverse ecosystems include the Sudd wetland (one of the world's largest), the Sahara, and Red Sea coral reefs. Dinder National Park (designated a UNESCO Biosphere Reserve in 1979) protects savanna species along the Ethiopian border. Key species include the tiang (Damaliscus lunatus tiang), Nubian ibex, Barbary sheep, and migratory birds using the Nile flyway. Marine protected areas along the Red Sea coast protect dugong, sea turtles, and reef sharks. Penalties for wildlife offenses include fines and imprisonment. Sudan ratified CITES in 1982. Ongoing conflict has severely impacted wildlife conservation, particularly in Darfur and southern border regions.",
    lawName: "Wildlife Conservation and National Parks Act (2003)",
    article: "Various",
    year: 2003,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Dinder National Park", "Sudd", "CITES", "tiang", "Red Sea"],
  },

  // ==================== MALI ====================
  {
    id: "ml-001",
    country: "Mali",
    countryCode: "ML",
    category: "Anti-Cruelty",
    topic: "Animal welfare under pastoral and veterinary law",
    summary:
      "Mali addresses animal welfare through its Pastoral Charter and veterinary legislation governing one of West Africa's largest livestock populations.",
    details:
      "The Pastoral Charter (Loi No. 01-004 of 2001, Charte Pastorale) is Mali's foundational legislation governing livestock management and pastoral practices. It recognizes pastoralism as a legitimate livelihood and addresses animal treatment in the context of transhumance and livestock management. Law No. 01-062 (2001) on Animal Health and Veterinary Police governs disease control, veterinary inspections, and animal transport conditions. The Direction Nationale des Services Vétérinaires (DNSV) under the Ministry of Livestock and Fisheries oversees enforcement. Mali has an estimated 12+ million cattle and 35+ million small ruminants, making livestock central to the economy. The Penal Code contains general property protection provisions applicable to animals. Enforcement is concentrated in southern agricultural zones, with limited reach in northern pastoral and Saharan regions.",
    lawName: "Pastoral Charter (Law No. 01-004) / Law No. 01-062 on Animal Health",
    article: "Various",
    year: 2001,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["pastoral charter", "transhumance", "DNSV", "livestock"],
  },
  {
    id: "ml-002",
    country: "Mali",
    countryCode: "ML",
    category: "Wildlife Protection",
    topic: "Wildlife and natural resource conservation",
    summary:
      "Mali protects Sahelian and Saharan wildlife through hunting and environmental legislation.",
    details:
      "Law No. 95-031 on Wildlife Management and its Habitat (1995) regulates hunting, establishes protected species lists, and designates conservation areas in Mali. The law classifies species into fully protected (liste A) and partially protected (liste B) categories. Key protected areas include the Boucle du Baoulé National Park and Biosphere Reserve, and the Gourma elephant range (hosting the northernmost population of African elephants, approximately 350 individuals). The Inner Niger Delta is a Ramsar Wetland of International Importance, critical for migratory waterbirds. Law No. 10-028 on Environmental Protection (2010) provides the broader framework. The Direction Nationale des Eaux et Forêts (DNEF) enforces wildlife laws. Mali ratified CITES in 1994. Penalties for wildlife violations include fines and imprisonment. Insecurity in northern and central regions since 2012 has severely impacted conservation efforts, particularly for the Gourma elephants.",
    lawName: "Law No. 95-031 on Wildlife Management",
    article: "Various",
    year: 1995,
    lastAmended: 2010,
    penaltyMax: "Fines and imprisonment for wildlife offenses",
    tags: ["Gourma elephants", "Inner Niger Delta", "DNEF", "Sahel", "CITES"],
  },

  // ==================== BURKINA FASO ====================
  {
    id: "bf-001",
    country: "Burkina Faso",
    countryCode: "BF",
    category: "Anti-Cruelty",
    topic: "Animal welfare under pastoral and veterinary legislation",
    summary:
      "Burkina Faso regulates animal welfare through its pastoral code and veterinary health laws.",
    details:
      "The Pastoral Law (Loi No. 034-2002/AN of 2002, Loi d'Orientation Relative au Pastoralisme) governs livestock management and pastoral practices in Burkina Faso. It establishes standards for animal treatment during transhumance, at markets, and in livestock facilities. Law No. 023-2012/AN on Animal Health (2012) regulates disease control, veterinary practice, and animal welfare standards. The Direction Générale des Services Vétérinaires (DGSV) under the Ministry of Animal and Fishery Resources oversees enforcement. The Penal Code (Loi No. 025-2018/AN of 2018) includes provisions on property destruction. Burkina Faso's livestock sector contributes approximately 18% of GDP and employs 80% of the population. The Sahel Pastoral Region in the north and the Sudanian zone in the south present different animal welfare challenges. International standards are promoted through OIE (WOAH) partnership programs.",
    lawName: "Pastoral Law (Law No. 034-2002/AN) / Law No. 023-2012/AN on Animal Health",
    article: "Various",
    year: 2002,
    lastAmended: 2012,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["pastoral law", "transhumance", "DGSV", "livestock", "WOAH"],
  },
  {
    id: "bf-002",
    country: "Burkina Faso",
    countryCode: "BF",
    category: "Wildlife Protection",
    topic: "Wildlife and forest conservation",
    summary:
      "Burkina Faso protects Sahelian and Sudanian wildlife through forestry and hunting legislation.",
    details:
      "The Forestry Code (Loi No. 003-2011/AN of 2011, Code Forestier) and the earlier Wildlife Regulation (Décret No. 96-061 of 1996) govern wildlife conservation in Burkina Faso. The laws establish national parks, classified forests, and game reserves, and regulate hunting through a permit system. Key protected areas include the W-Arly-Pendjari (WAP) Complex (shared with Niger and Benin, designated a UNESCO World Heritage Site in 2017), which hosts West Africa's largest populations of elephants (approximately 4,000), lions, and cheetahs. Burkina Faso's portion includes Arly National Park and several game reserves. The Office National des Aires Protégées (OFINAP) manages protected areas. Law No. 006-2013/AN on the Environment Code provides the broader environmental framework. Penalties for poaching protected species include imprisonment of 1-5 years and fines of FCFA 500,000-5,000,000. Burkina Faso ratified CITES in 1989.",
    lawName: "Forestry Code (Law No. 003-2011/AN) / Wildlife Regulation",
    article: "Various",
    year: 1996,
    lastAmended: 2011,
    penaltyMax: "Up to 5 years imprisonment and fines up to FCFA 5,000,000",
    tags: ["WAP Complex", "Arly", "West African elephants", "OFINAP", "CITES"],
  },

  // ==================== NIGER ====================
  {
    id: "ne-001",
    country: "Niger",
    countryCode: "NE",
    category: "Anti-Cruelty",
    topic: "Animal welfare under pastoral and rural codes",
    summary:
      "Niger addresses animal welfare through its Rural Code and pastoral legislation governing Sahelian livestock systems.",
    details:
      "The Rural Code (Ordonnance No. 93-015 of 1993, Code Rural) provides the foundational framework for animal management in Niger, including provisions on pastoral rights, livestock corridors, and animal treatment standards. Ordonnance No. 2010-029 on Pastoralism (2010) specifically addresses pastoral practices, transhumance management, and animal welfare in pastoral contexts. The Direction de la Santé Animale under the Ministry of Livestock oversees veterinary and animal health enforcement. Niger's livestock sector (cattle, sheep, goats, camels) represents the second-largest contributor to GDP after agriculture. The Penal Code includes general provisions on property destruction. Animal welfare enforcement is concentrated around major livestock markets such as Niamey, Maradi, and Zinder. The Sahel's harsh climate conditions present unique challenges for animal welfare during seasonal migrations.",
    lawName: "Rural Code (Ordonnance No. 93-015) / Ordonnance No. 2010-029 on Pastoralism",
    article: "Various",
    year: 1993,
    lastAmended: 2010,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["rural code", "pastoralism", "transhumance", "Sahel", "livestock"],
  },
  {
    id: "ne-002",
    country: "Niger",
    countryCode: "NE",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and desert ecosystem protection",
    summary:
      "Niger protects Saharan and Sahelian wildlife, including the last wild West African giraffe population.",
    details:
      "Law No. 98-07 on Hunting and Wildlife Protection (1998, Régime de la Chasse et de la Protection de la Faune) governs wildlife conservation in Niger. The law establishes wildlife reserves, regulates hunting through permits and closed seasons, and lists protected species. Niger hosts the last remaining population of West African giraffes (Giraffa camelopardalis peralta, approximately 600 individuals near Kouré, south of Niamey), protected through a dedicated conservation program since 1996. The Aïr and Ténéré Natural Reserves (UNESCO World Heritage Site, 7.7 million hectares) protect Saharan addax, dama gazelle, and Barbary sheep. The W National Park (part of the WAP Complex) hosts elephants, lions, and hippos. The Direction de la Faune, de la Chasse et des Aires Protégées enforces wildlife laws. Penalties include fines and imprisonment up to 3 years for poaching. Niger ratified CITES in 1975.",
    lawName: "Law No. 98-07 on Hunting and Wildlife Protection",
    article: "Various",
    year: 1998,
    penaltyMax: "Up to 3 years imprisonment and fines",
    tags: ["West African giraffe", "Aïr-Ténéré", "W National Park", "CITES", "Sahara"],
  },

  // ==================== CHAD ====================
  {
    id: "td-001",
    country: "Chad",
    countryCode: "TD",
    category: "Anti-Cruelty",
    topic: "Animal welfare and pastoral regulation",
    summary:
      "Chad addresses animal welfare through pastoral legislation and veterinary health laws governing its substantial livestock sector.",
    details:
      "The Pastoral Code (Loi No. 004/PR/2015 of 2015, Code Pastoral) governs livestock management, transhumance, and animal treatment standards in Chad. It addresses animal welfare in the context of pastoral movements, livestock markets, and watering points. Law No. 09/PR/2004 on Veterinary Health (2004) regulates animal health, disease control, and veterinary practice. The Direction des Services Vétérinaires et de Santé Animale under the Ministry of Pastoral Development and Animal Production oversees enforcement. Chad has approximately 94 million head of livestock (2019 FAO estimate), making it one of Africa's largest pastoral economies. The Penal Code (Loi No. 001/PR/2017) includes property protection provisions. Enforcement is particularly challenging given ongoing insecurity in the Lake Chad Basin region and the seasonal nature of transhumance across international borders.",
    lawName: "Pastoral Code (Law No. 004/PR/2015) / Law No. 09/PR/2004 on Veterinary Health",
    article: "Various",
    year: 2004,
    lastAmended: 2015,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["pastoral code", "transhumance", "veterinary health", "Lake Chad"],
  },
  {
    id: "td-002",
    country: "Chad",
    countryCode: "TD",
    category: "Wildlife Protection",
    topic: "Wildlife and protected area management",
    summary:
      "Chad protects Saharan and Sahelian wildlife through hunting legislation and national park management.",
    details:
      "Law No. 14/PR/2008 on Forests, Wildlife and Fishery Resources (Régime des Forêts, de la Faune et des Ressources Halieutiques, 2008) is Chad's primary wildlife conservation statute. It establishes national parks, game reserves, and classified forests, and regulates hunting. Zakouma National Park in southeastern Chad is the country's flagship conservation area, hosting a recovering elephant population (from 450 in 2010 to approximately 570+ by 2020) managed with African Parks support since 2010. The Ennedi Massif Natural and Cultural Reserve (UNESCO World Heritage Site, 2016) protects Saharan species. Key species include the Saharan cheetah, addax, Kordofan giraffe, and scimitar-horned oryx (reintroduced). The Direction de la Faune et des Aires Protégées enforces wildlife laws. Penalties include fines and imprisonment up to 5 years for poaching protected species. Chad ratified CITES in 1989.",
    lawName: "Law No. 14/PR/2008 on Forests, Wildlife and Fishery Resources",
    article: "Various",
    year: 2008,
    penaltyMax: "Up to 5 years imprisonment and fines",
    tags: ["Zakouma", "African Parks", "Ennedi", "Saharan cheetah", "CITES"],
  },

  // ==================== SOMALIA ====================
  {
    id: "so-001",
    country: "Somalia",
    countryCode: "SO",
    category: "Anti-Cruelty",
    topic: "Animal welfare under Islamic law and livestock regulations",
    summary:
      "Somalia addresses animal welfare primarily through Islamic legal principles and livestock export regulations.",
    details:
      "Somalia's animal welfare framework is shaped by Islamic jurisprudence (Sharia) and livestock regulations rather than standalone welfare legislation. The Provisional Constitution (2012, Article 45) establishes environmental protection principles. The Livestock Professional Act (Law No. 23 of 2000, Somaliland) and federal veterinary regulations govern animal health standards. Islamic principles (based on Quranic verses and Hadith) mandate humane treatment of animals and prohibit unnecessary cruelty, forming the customary basis for animal welfare. The Ministry of Livestock, Forestry and Range oversees animal health at the federal level. Livestock constitutes approximately 60% of Somalia's GDP and 80% of export earnings, making animal health economically critical. The livestock export trade to Gulf states (primarily through Berbera port) drives compliance with OIE/WOAH animal welfare standards for transport and slaughter. Enforcement capacity varies significantly between federal member states.",
    lawName: "Provisional Constitution (2012) / Livestock regulations",
    article: "Article 45 (Constitution)",
    year: 2012,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Islamic law", "livestock exports", "pastoral economy", "WOAH"],
  },
  {
    id: "so-002",
    country: "Somalia",
    countryCode: "SO",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and marine protection",
    summary:
      "Somalia protects its diverse wildlife, from Saharan-Arabian drylands to the longest African coastline, through environmental legislation.",
    details:
      "The Environmental Conservation Law (Federal Law, 2019) and the earlier Fauna and Flora Protection Law (Law No. 15 of 1969) provide Somalia's wildlife conservation framework. The country hosts diverse ecosystems including the Somali-Masai bushland, the Jubba and Shabelle river systems, and the longest coastline in mainland Africa (3,025 km). Key species include the Somali wild ass (Equus africanus somaliensis, critically endangered), dibatag (Ammodorcas clarkei, endemic), Speke's gazelle (Gazella spekei, endemic), and the hirola (Beatragus hunteri). Somaliland maintains its own Environmental Protection Law (2007). The Daallo and Cal Madow mountains harbor endemic flora and fauna. Marine biodiversity along the coast includes whale sharks, sea turtles, and coral reefs. Decades of conflict have severely impacted wildlife populations and enforcement capacity. Somalia ratified CITES in 1985, though implementation remains limited.",
    lawName: "Environmental Conservation Law (2019) / Fauna and Flora Protection Law (1969)",
    article: "Various",
    year: 1969,
    lastAmended: 2019,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Somali wild ass", "dibatag", "hirola", "marine biodiversity", "CITES"],
  },

  // ==================== SIERRA LEONE ====================
  {
    id: "sl-001",
    country: "Sierra Leone",
    countryCode: "SL",
    category: "Anti-Cruelty",
    topic: "Cruelty to animals prohibition",
    summary:
      "Sierra Leone prohibits animal cruelty through provisions in the criminal law inherited from the common law tradition.",
    details:
      "Sierra Leone's animal welfare framework derives from English common law traditions and the Malicious Damage Act (1861, inherited) and the general criminal law provisions against animal cruelty. The Penal Code addresses wanton destruction and mistreatment of animals. The Veterinary Surgeons Act regulates veterinary practice. The Ministry of Agriculture, Forestry and Food Security oversees animal health through the Livestock and Veterinary Division. The Sierra Leone Animal Welfare Society (SLAWS) advocates for improved animal welfare standards. Livestock management, including cattle, goats, and poultry, is largely governed by customary practices in rural areas. The Animal Welfare Bill has been under consideration but has not yet been enacted into law. Enforcement of existing provisions is limited by institutional capacity and competing development priorities following the civil war (1991-2002) and Ebola crisis (2014-2016).",
    lawName: "Penal Code / Malicious Damage Act",
    article: "Various",
    year: 1965,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["common law", "penal code", "SLAWS", "veterinary services"],
  },
  {
    id: "sl-002",
    country: "Sierra Leone",
    countryCode: "SL",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and chimpanzee protection",
    summary:
      "Sierra Leone protects its Upper Guinean forest wildlife, including significant chimpanzee populations, through conservation legislation.",
    details:
      "The Wildlife Conservation Act (1972, amended 1990) is Sierra Leone's primary wildlife statute, regulating hunting, establishing protected areas, and designating protected species. The Forestry Act (1988) and the Environment Protection Agency Act (2008) provide complementary protections. Sierra Leone hosts approximately 5,500 western chimpanzees (Pan troglodytes verus), one of West Africa's largest populations, primarily in the Outamba-Kilimi National Park and the Gola Rainforest National Park (established 2011, managed with the Royal Society for the Protection of Birds). The Tacugama Chimpanzee Sanctuary near Freetown rehabilitates orphaned chimpanzees. Key species also include pygmy hippopotamus, forest elephants, and Diana monkeys. The National Protected Area Authority (NPAA, established 2012) manages conservation areas. Penalties for wildlife offenses include fines and imprisonment. Sierra Leone ratified CITES in 1994.",
    lawName: "Wildlife Conservation Act (1972) / Environment Protection Agency Act (2008)",
    article: "Various",
    year: 1972,
    lastAmended: 2012,
    penaltyMax: "Fines and imprisonment for wildlife offenses",
    tags: ["chimpanzees", "Gola Rainforest", "Tacugama", "NPAA", "CITES"],
  },

  // ==================== GAMBIA ====================
  {
    id: "gm-001",
    country: "Gambia",
    countryCode: "GM",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Gambia prohibits animal cruelty through the Cruelty to Animals Act inherited from the British colonial legal framework.",
    details:
      "The Cruelty to Animals Act (Chapter 42:03 of the Laws of The Gambia) prohibits cruel treatment of domestic and captive animals. The Act criminalizes beating, kicking, overdriving, overloading, and causing unnecessary suffering to any animal. It also prohibits animal fighting and regulates transport conditions. The Livestock Development Services under the Ministry of Agriculture administer animal health. The Veterinary Services Act regulates veterinary practice standards. Gambia's small geographic size (11,300 sq km, the smallest country in mainland Africa) and predominantly rural economy mean that livestock welfare is closely tied to agricultural livelihoods. The Gambia Horse and Donkey Trust, established in 2002, provides veterinary care and promotes welfare standards for working equines, which remain important for transport and agriculture. Penalties under the Cruelty to Animals Act include fines and imprisonment.",
    lawName: "Cruelty to Animals Act (Chapter 42:03)",
    article: "Various",
    year: 1933,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["cruelty prevention", "working equines", "Horse and Donkey Trust"],
  },
  {
    id: "gm-002",
    country: "Gambia",
    countryCode: "GM",
    category: "Wildlife Protection",
    topic: "Biodiversity and wildlife conservation",
    summary:
      "Gambia protects its riverine and coastal wildlife through the Biodiversity and Wildlife Act.",
    details:
      "The Biodiversity and Wildlife Act (2003) replaced the earlier Wildlife Conservation Act, providing an updated framework for wildlife protection in The Gambia. It establishes community wildlife reserves, national parks, and nature reserves, and regulates hunting and wildlife trade. The Gambia River basin and its associated wetlands are critical habitats supporting West African manatees, hippos, Nile crocodiles, and over 560 bird species (making Gambia a renowned birding destination). Key protected areas include Kiang West National Park, River Gambia National Park (hosting rehabilitated chimpanzees on Baboon Islands through the Chimpanzee Rehabilitation Project since 1969), and Abuko Nature Reserve. The Department of Parks and Wildlife Management (DPWM) under the Ministry of Environment enforces wildlife laws. Penalties include fines up to GMD 50,000 and imprisonment up to 2 years. Gambia ratified CITES in 1977.",
    lawName: "Biodiversity and Wildlife Act (2003)",
    article: "Various",
    year: 2003,
    penaltyMax: "Fines up to GMD 50,000 and up to 2 years imprisonment",
    tags: ["River Gambia", "chimpanzee rehabilitation", "DPWM", "birding", "CITES"],
  },

  // ==================== GABON ====================
  {
    id: "ga-001",
    country: "Gabon",
    countryCode: "GA",
    category: "Anti-Cruelty",
    topic: "Animal welfare under veterinary and environmental law",
    summary:
      "Gabon addresses animal welfare through environmental protection and veterinary health legislation.",
    details:
      "Law No. 16/2001 on the Environment Code (Code de l'Environnement) includes provisions on the ethical treatment of animals in the context of environmental protection. The Veterinary Health Law regulates animal treatment, disease control, and slaughter standards. Decree No. 164/PR/MAEPDR (2011) governs veterinary inspection and animal health. The Ministry of Agriculture, Livestock and Rural Development oversees animal health enforcement. Gabon's extensive tropical rainforest (covering 88% of the country) means that wildlife welfare intersects significantly with domestic animal regulation. The Penal Code includes provisions on property destruction applicable to animals. Gabon has emerged as a Central African leader in conservation policy, with President Omar Bongo's 2002 declaration establishing 13 national parks covering 11% of territory, reflecting a broader governmental commitment to animal and environmental protection.",
    lawName: "Environment Code (Law No. 16/2001) / Veterinary Health Law",
    article: "Various",
    year: 2001,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["environment code", "veterinary health", "conservation leadership"],
  },
  {
    id: "ga-002",
    country: "Gabon",
    countryCode: "GA",
    category: "Wildlife Protection",
    topic: "National parks and great ape conservation",
    summary:
      "Gabon protects its exceptional rainforest biodiversity, including the largest forest elephant and western lowland gorilla populations, through a landmark national park system.",
    details:
      "Law No. 003/2007 on National Parks (2007) and Law No. 016/01 on the Forestry Code govern wildlife conservation in Gabon. In 2002, Gabon established 13 national parks covering 30,000 sq km (11% of territory), a landmark conservation decision. Lopé National Park (UNESCO World Heritage Site, 2007) harbors western lowland gorillas, chimpanzees, and forest elephants. Gabon hosts an estimated 60,000 forest elephants (Loxodonta cyclotis), the largest remaining population. Ivindo National Park protects pristine rainforest. The National Parks Agency (Agence Nationale des Parcs Nationaux, ANPN) manages all parks with significant international support. The Wildlife Protection Law (Decree No. 189/PR/MEFEPEPN of 2004) lists protected species and regulates hunting. Penalties for poaching protected species include imprisonment of 6 months to 5 years and fines of FCFA 100,000-10,000,000. Gabon ratified CITES in 1989 and imposed a domestic ivory trade ban in 2004.",
    lawName: "Law No. 003/2007 on National Parks / Forestry Code",
    article: "Various",
    year: 2002,
    lastAmended: 2007,
    penaltyMin: "Fine of FCFA 100,000 and 6 months imprisonment",
    penaltyMax: "Up to 5 years imprisonment and fines up to FCFA 10,000,000",
    tags: ["forest elephants", "gorillas", "ANPN", "Lopé", "Ivindo", "CITES"],
  },

  // ==================== REPUBLIC OF THE CONGO ====================
  {
    id: "cg-001",
    country: "Republic of the Congo",
    countryCode: "CG",
    category: "Anti-Cruelty",
    topic: "Animal welfare under environmental and veterinary legislation",
    summary:
      "The Republic of the Congo addresses animal welfare through environmental and veterinary health legislation.",
    details:
      "Law No. 003/91 on Environmental Protection (1991) and veterinary health regulations form the basis for animal welfare in the Republic of the Congo. The Veterinary Services Directorate under the Ministry of Agriculture, Livestock and Fisheries regulates animal health, disease control, and treatment standards. The Penal Code includes provisions on property damage applicable to domestic animals. Congo-Brazzaville's economy includes significant livestock and fisheries sectors, regulated under the Ministry's framework. The Jane Goodall Institute and other international organizations have supported animal welfare initiatives, particularly for great apes in sanctuary settings. The Tchimpounga Chimpanzee Rehabilitation Centre (established 1992) is one of Africa's largest chimpanzee sanctuaries. Enforcement of welfare provisions is limited by institutional capacity, though urban areas such as Brazzaville and Pointe-Noire have more active enforcement.",
    lawName: "Law No. 003/91 on Environmental Protection / Veterinary regulations",
    article: "Various",
    year: 1991,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["environmental law", "Tchimpounga", "veterinary services", "great apes"],
  },
  {
    id: "cg-002",
    country: "Republic of the Congo",
    countryCode: "CG",
    category: "Wildlife Protection",
    topic: "Wildlife protection and Congo Basin conservation",
    summary:
      "The Republic of the Congo protects its Congo Basin rainforest wildlife, including gorillas and forest elephants, through comprehensive wildlife legislation.",
    details:
      "Law No. 37-2008 on Wildlife and Protected Areas (2008) is the Republic of the Congo's primary wildlife conservation statute. It establishes national parks, wildlife reserves, and community hunting zones, and designates protected species in three categories (fully protected, partially protected, and game species). The country hosts significant populations of western lowland gorillas (estimated 73,000+ in the northern forests, one of the largest concentrations globally), forest elephants, and chimpanzees. Nouabalé-Ndoki National Park (established 1993, part of the Sangha Trinational UNESCO World Heritage Site since 2012) protects pristine rainforest. Odzala-Kokoua National Park is one of Central Africa's oldest parks (1935). The Wildlife Conservation Society (WCS) provides significant technical support. Penalties under Law 37-2008 include imprisonment of 2-5 years and fines up to FCFA 5,000,000 for poaching fully protected species. Congo ratified CITES in 1983.",
    lawName: "Law No. 37-2008 on Wildlife and Protected Areas",
    article: "Various",
    year: 2008,
    penaltyMax: "Up to 5 years imprisonment and fines up to FCFA 5,000,000",
    tags: ["western lowland gorilla", "Nouabalé-Ndoki", "Odzala-Kokoua", "Sangha Trinational", "CITES"],
  },

  // ==================== TRINIDAD AND TOBAGO ====================
  {
    id: "tt-001",
    country: "Trinidad and Tobago",
    countryCode: "TT",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Trinidad and Tobago prohibits animal cruelty through the Cruelty to Animals Act and the Summary Offences Act.",
    details:
      "The Cruelty to Animals Act (Chapter 67:01) is Trinidad and Tobago's primary animal welfare statute. It prohibits cruelty to domestic and captive animals including beating, kicking, overdriving, overloading, and causing unnecessary suffering. Section 3 defines cruelty offenses; Section 6 addresses animal transport; Section 8 prohibits animal fighting. The Summary Offences Act (Chapter 11:02) provides additional protections including provisions against abandonment. The Trinidad and Tobago Society for the Prevention of Cruelty to Animals (TTSPCA, founded 1874) is one of the oldest SPCAs in the Americas and assists enforcement. The Animal Health Authority regulates livestock and veterinary standards. Penalties for cruelty include fines up to TTD 2,000 and/or imprisonment up to 6 months. The Animal Welfare Bill (drafted in 2020) proposes significantly enhanced penalties and expanded protections but has not yet been enacted.",
    lawName: "Cruelty to Animals Act (Chapter 67:01)",
    article: "Sections 3-8",
    year: 1921,
    penaltyMin: "Fine up to TTD 1,000",
    penaltyMax: "Fine up to TTD 2,000 and/or up to 6 months imprisonment",
    tags: ["TTSPCA", "anti-cruelty", "animal fighting", "Summary Offences Act"],
  },
  {
    id: "tt-002",
    country: "Trinidad and Tobago",
    countryCode: "TT",
    category: "Wildlife Protection",
    topic: "Conservation of wild animals and marine species",
    summary:
      "Trinidad and Tobago protects its Caribbean biodiversity, including leatherback turtles and scarlet ibis, through the Conservation of Wild Life Act.",
    details:
      "The Conservation of Wild Life Act (Chapter 67:01, 1958, amended 1963 and 1980) regulates hunting, establishes closed seasons, and designates protected species in Trinidad and Tobago. The Environmentally Sensitive Areas Rules (2001) under the Environmental Management Act (2000) provide habitat protection. Trinidad hosts one of the world's largest nesting populations of leatherback sea turtles (Dermochelys coriacea) at Matura and Grande Riviere beaches (2,000+ nests annually). The scarlet ibis (Eudocimus ruber), the national bird, is protected at the Caroni Bird Sanctuary. Tobago's Main Ridge Forest Reserve (1776) is the oldest legally protected forest in the Western Hemisphere. The Environmental Management Authority (EMA) and the Forestry Division enforce wildlife laws. The Buccoo Reef Marine Park protects coral reef ecosystems. Penalties include fines and imprisonment. Trinidad and Tobago ratified CITES in 1984.",
    lawName: "Conservation of Wild Life Act (Chapter 67:01) / Environmental Management Act (2000)",
    article: "Various",
    year: 1958,
    lastAmended: 2001,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["leatherback turtles", "scarlet ibis", "Main Ridge", "EMA", "CITES"],
  },

  // ==================== DOMINICAN REPUBLIC ====================
  {
    id: "do-001",
    country: "Dominican Republic",
    countryCode: "DO",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "The Dominican Republic enacted dedicated animal protection legislation in 2018 strengthening welfare standards.",
    details:
      "Law No. 248-12 on Animal Protection and Responsible Ownership (Ley de Protección Animal y Tenencia Responsable de Animales de Compañía, 2012) is the Dominican Republic's primary animal welfare statute. It prohibits cruelty, abandonment, and mistreatment of animals, and establishes responsible pet ownership standards. The law mandates vaccination, identification, and sterilization programs. Article 4 defines prohibited acts including beating, mutilation, poisoning, and using animals in fights. Cockfighting, deeply embedded in Dominican culture, remains legally practiced under regulated conditions despite advocacy for its prohibition. The Penal Code (Law No. 550-14 of 2014) includes provisions on animal cruelty. The Ministry of Agriculture through the Dirección General de Ganadería oversees livestock welfare. Penalties for cruelty under Law 248-12 include fines of RD$5,000-50,000 and imprisonment of 6 months to 3 years for severe offenses.",
    lawName: "Law No. 248-12 on Animal Protection and Responsible Ownership",
    article: "Article 4",
    year: 2012,
    penaltyMin: "Fine of RD$5,000",
    penaltyMax: "Up to 3 years imprisonment and fine up to RD$50,000",
    tags: ["animal protection", "responsible ownership", "cockfighting", "companion animals"],
  },
  {
    id: "do-002",
    country: "Dominican Republic",
    countryCode: "DO",
    category: "Wildlife Protection",
    topic: "Biodiversity and protected area management",
    summary:
      "The Dominican Republic protects its Caribbean island biodiversity through environmental and wildlife legislation.",
    details:
      "The Sectoral Law on Protected Areas (Law No. 202-04 of 2004) and the General Law on Environment and Natural Resources (Law No. 64-00 of 2000) form the Dominican Republic's wildlife conservation framework. Law 64-00 created the Ministry of Environment and Natural Resources, which oversees the National System of Protected Areas (SINAP) covering approximately 25% of the territory. Key protected areas include Jaragua National Park, Los Haitises National Park, and the East National Park. Endemic species include the Hispaniolan solenodon (Solenodon paradoxus), the Hispaniolan hutia (Plagiodontia aedium), and Ricord's iguana (Cyclura ricordii). Marine protected areas shelter manatees, humpback whales (breeding in Samaná Bay), and sea turtles. Penalties for wildlife offenses under Law 64-00 include fines and imprisonment of 6 months to 3 years. The Dominican Republic ratified CITES in 1987.",
    lawName: "Law No. 202-04 on Protected Areas / Law No. 64-00 on Environment",
    article: "Various",
    year: 2000,
    lastAmended: 2004,
    penaltyMax: "Up to 3 years imprisonment and fines",
    tags: ["solenodon", "humpback whales", "SINAP", "Hispaniola", "CITES"],
  },

  // ==================== BAHAMAS ====================
  {
    id: "bs-001",
    country: "Bahamas",
    countryCode: "BS",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "The Bahamas prohibits animal cruelty through the Animal Protection and Control Act.",
    details:
      "The Animal Protection and Control Act (Chapter 224A, 2015) modernized animal welfare legislation in The Bahamas, replacing older provisions. The Act prohibits cruelty including beating, kicking, mutilating, poisoning, and abandoning animals. Section 5 establishes a duty of care requiring adequate food, water, shelter, and veterinary treatment. Section 8 prohibits animal fighting including dogfighting and cockfighting. The Act created the Animal Control Unit under the Royal Bahamas Police Force for enforcement. The Bahamas Humane Society (founded 1924) operates the primary animal shelter in Nassau and assists enforcement. The Act regulates dangerous dogs, pet shops, and commercial breeders. Penalties for cruelty offenses include fines up to BSD 5,000 and/or imprisonment up to 1 year. For aggravated cruelty, penalties increase to fines up to BSD 15,000 and/or imprisonment up to 3 years. The Act also authorizes court-ordered prohibition on animal ownership.",
    lawName: "Animal Protection and Control Act (Chapter 224A)",
    article: "Sections 5-8",
    year: 2015,
    penaltyMin: "Fine up to BSD 5,000",
    penaltyMax: "Fine up to BSD 15,000 and/or up to 3 years imprisonment",
    tags: ["animal protection", "Bahamas Humane Society", "animal fighting", "duty of care"],
  },
  {
    id: "bs-002",
    country: "Bahamas",
    countryCode: "BS",
    category: "Wildlife Protection",
    topic: "Marine and terrestrial wildlife conservation",
    summary:
      "The Bahamas protects its marine biodiversity, including sharks, sea turtles, and coral reefs, through wildlife conservation legislation.",
    details:
      "The Wild Animals (Protection) Act (Chapter 249) and the Fisheries Resources (Jurisdiction and Conservation) Act (Chapter 244) form the wildlife conservation framework of The Bahamas. The Bahamas National Trust Act (1959) established the Bahamas National Trust (BNT), which manages 32 national parks covering over 2 million acres. The Bahamas became the first country to establish a shark sanctuary (2011), banning commercial shark fishing throughout its exclusive economic zone of 243,244 sq miles. The Wild Birds Protection Act (Chapter 250) protects native and migratory birds. Key species include the Bahama parrot (Amazona leucocephala bahamensis), the Allen Cay iguana (Cyclura cychlura inornata), and various marine species. The Exuma Cays Land and Sea Park (1958) was the world's first land-and-sea protected area. Sea turtle protection is regulated through dedicated legislation. Penalties include fines and imprisonment for wildlife offenses. The Bahamas ratified CITES in 1979.",
    lawName: "Wild Animals (Protection) Act / Bahamas National Trust Act",
    article: "Various",
    year: 1959,
    lastAmended: 2011,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["shark sanctuary", "BNT", "marine conservation", "Exuma Cays", "CITES"],
  },

  // ==================== BARBADOS ====================
  {
    id: "bb-001",
    country: "Barbados",
    countryCode: "BB",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Barbados prohibits animal cruelty through the Prevention of Cruelty to Animals Act with penalties including imprisonment.",
    details:
      "The Prevention of Cruelty to Animals Act (Chapter 143, Laws of Barbados) is the primary animal welfare statute. It prohibits cruelty to domestic and captive animals, including beating, kicking, overdriving, and causing unnecessary suffering. The Act regulates animal transport, prohibits animal fighting, and addresses the treatment of working animals. The Barbados SPCA (founded 1907) assists enforcement and operates animal shelters. The Veterinary Surgeons Registration Act regulates veterinary practice. The Chief Veterinary Officer in the Ministry of Agriculture administers animal health regulations. Barbados has a relatively high standard of companion animal care compared to the broader Caribbean region. The Animal Control Authority manages stray animal populations. Penalties for cruelty include fines up to BBD 1,000 and/or imprisonment up to 6 months. The Green Monkey (Chlorocebus sabaeus), an introduced species, presents unique animal management challenges on the island.",
    lawName: "Prevention of Cruelty to Animals Act (Chapter 143)",
    article: "Various",
    year: 1954,
    penaltyMax: "Fine up to BBD 1,000 and/or up to 6 months imprisonment",
    tags: ["SPCA", "anti-cruelty", "companion animals", "working animals"],
  },
  {
    id: "bb-002",
    country: "Barbados",
    countryCode: "BB",
    category: "Wildlife Protection",
    topic: "Marine and terrestrial wildlife protection",
    summary:
      "Barbados protects its marine environment, including sea turtles and coral reefs, through dedicated conservation legislation.",
    details:
      "The Marine Areas (Preservation and Enhancement) Act (1976) and the Wild Birds Protection Act (Chapter 264) form Barbados's wildlife conservation framework. The Barbados Marine Management Plan provides a comprehensive approach to marine conservation. The Hawksbill sea turtle (Eretmochelys imbricata) nests on Barbados beaches and is protected under the Fisheries Act and dedicated turtle conservation programs. The Barbados Sea Turtle Project (founded 1987) monitors nesting populations. The Folkestone Marine Park and Reserve protects coral reef ecosystems. The National Conservation Commission manages terrestrial conservation areas including Turner's Hall Wood, one of the last remnants of native tropical forest. The Coastal Zone Management Unit regulates marine environmental protection. Green monkeys are managed under the Wildlife Management Programme. Barbados ratified CITES in 1992. Penalties for wildlife offenses include fines and imprisonment.",
    lawName: "Marine Areas (Preservation and Enhancement) Act / Wild Birds Protection Act",
    article: "Various",
    year: 1976,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["hawksbill turtles", "Folkestone Marine Park", "coral reefs", "CITES"],
  },

  // ==================== GUYANA ====================
  {
    id: "gy-001",
    country: "Guyana",
    countryCode: "GY",
    category: "Anti-Cruelty",
    topic: "Prevention of cruelty to animals",
    summary:
      "Guyana prohibits animal cruelty through the Animals (Control of Experiments) Act and the criminal law.",
    details:
      "The Summary Jurisdiction (Offences) Act (Chapter 8:02) contains Guyana's primary anti-cruelty provisions, prohibiting unnecessary suffering caused to any domestic or captive animal. The Animals (Control of Experiments) Act (Chapter 71:02) regulates the use of animals in scientific experiments. The Guyana Society for the Prevention of Cruelty to Animals (GSPCA, founded 1871) is one of the oldest animal welfare organizations in South America and assists enforcement. The Veterinary Surgeons Act (Chapter 73:04) regulates veterinary practice. The Ministry of Agriculture's Guyana Livestock Development Authority (GLDA) oversees animal health. Guyana's Penal Code also addresses animal cruelty. Penalties include fines and imprisonment for cruelty offenses. Working animals, particularly horses and donkeys used in agriculture and mining, are a specific welfare concern. Dogfighting is prohibited under the criminal law.",
    lawName: "Summary Jurisdiction (Offences) Act (Chapter 8:02)",
    article: "Various",
    year: 1894,
    penaltyMax: "Fines and imprisonment for cruelty offenses",
    tags: ["GSPCA", "anti-cruelty", "working animals", "animal experiments"],
  },
  {
    id: "gy-002",
    country: "Guyana",
    countryCode: "GY",
    category: "Wildlife Protection",
    topic: "Wildlife management and rainforest conservation",
    summary:
      "Guyana protects its vast rainforest ecosystems and wildlife through the Wildlife Conservation and Management Act.",
    details:
      "The Wildlife Conservation and Management Act (2016) is Guyana's modern wildlife statute, replacing the Conservation Act of 1919. It establishes the Guyana Wildlife Conservation and Management Commission (GWCMC) to regulate wildlife trade, hunting, and conservation. Guyana's rainforest covers approximately 87% of the country (18 million hectares) and is one of the most intact forest ecosystems in the world. Key species include the jaguar, giant otter (Pteronura brasiliensis), harpy eagle (Harpia harpyja), giant anteater, and black caiman. The Iwokrama International Centre for Rain Forest Conservation and Development manages 371,000 hectares of protected rainforest. Kaieteur National Park protects the Kaieteur Falls ecosystem. The Low Carbon Development Strategy (LCDS) links forest conservation to climate finance. Penalties for wildlife trafficking include fines up to GYD 5,000,000 and imprisonment up to 5 years. Guyana ratified CITES in 1977.",
    lawName: "Wildlife Conservation and Management Act (2016)",
    article: "Various",
    year: 2016,
    penaltyMax: "Fines up to GYD 5,000,000 and up to 5 years imprisonment",
    tags: ["Iwokrama", "jaguar", "giant otter", "rainforest", "CITES"],
  },

  // ==================== SURINAME ====================
  {
    id: "sr-001",
    country: "Suriname",
    countryCode: "SR",
    category: "Anti-Cruelty",
    topic: "Animal welfare under criminal and veterinary law",
    summary:
      "Suriname addresses animal cruelty through provisions in the Criminal Code inherited from Dutch law.",
    details:
      "Suriname's Criminal Code (Wetboek van Strafrecht, derived from the Dutch colonial legal framework) contains provisions against animal cruelty under Articles 476-478, prohibiting unnecessary suffering to domestic and captive animals. The Veterinary Ordinance (Veeartseny-verordening) regulates veterinary practice and animal health standards. The Ministry of Agriculture, Animal Husbandry and Fisheries (LVV) oversees animal health through the Veterinary Services Division. Suriname's animal welfare framework retains its Dutch colonial legal heritage but has not been significantly updated. The Foundation for Animal Protection Suriname (Stichting Dierenbescherming Suriname) advocates for improved welfare standards. Enforcement is concentrated in Paramaribo and the coastal populated zone. Penalties for animal cruelty under the Criminal Code include fines and imprisonment. Working animals, particularly in the mining and agricultural sectors, present specific welfare concerns.",
    lawName: "Criminal Code (Wetboek van Strafrecht)",
    article: "Articles 476-478",
    year: 1911,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["criminal code", "Dutch law", "veterinary services", "animal protection"],
  },
  {
    id: "sr-002",
    country: "Suriname",
    countryCode: "SR",
    category: "Wildlife Protection",
    topic: "Nature conservation and rainforest protection",
    summary:
      "Suriname protects its pristine Guiana Shield rainforests, covering 93% of the country, through nature conservation legislation.",
    details:
      "The Nature Conservation Law (Natuurbeschermingswet, 1954, amended 1992) and the Game Law (Jachtwet, 1954) are Suriname's primary wildlife statutes. The Nature Conservation Law establishes nature reserves and regulates protected species. The Central Suriname Nature Reserve (1.6 million hectares, UNESCO World Heritage Site since 2000) is one of the largest tropical forest reserves in the world. Suriname's forests cover 93% of the country (15.2 million hectares), among the highest forest cover percentages globally. Key species include the jaguar, giant armadillo, giant river otter, harpy eagle, and leatherback sea turtles (nesting at Galibi Nature Reserve). The Foundation for Nature Conservation in Suriname (STINASU) manages nature reserves. The National Institute for Environment and Development (NIMOS) provides environmental oversight. Penalties for wildlife offenses include fines and imprisonment. Suriname ratified CITES in 1981.",
    lawName: "Nature Conservation Law (Natuurbeschermingswet) / Game Law (Jachtwet)",
    article: "Various",
    year: 1954,
    lastAmended: 1992,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Central Suriname Reserve", "Guiana Shield", "STINASU", "leatherback turtles", "CITES"],
  },

  // ==================== GUATEMALA ====================
  {
    id: "gt-001",
    country: "Guatemala",
    countryCode: "GT",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Guatemala enacted comprehensive animal welfare legislation in 2017 through the Animal Protection and Welfare Law.",
    details:
      "Decree No. 5-2017, the Law for the Protection and Welfare of Animals (Ley de Protección y Bienestar Animal), is Guatemala's primary animal welfare statute. Article 4 prohibits cruelty, mistreatment, and abandonment of domestic and wild animals. Article 5 establishes a duty of care including adequate food, water, shelter, and veterinary attention. The law regulates animals in entertainment (Article 12), work (Article 14), and scientific research (Article 16). It prohibits animal fighting including cockfighting (Article 24), though enforcement of the cockfighting ban faces cultural resistance. The Ministry of Agriculture, Livestock and Food (MAGA) and the National Council for Protected Areas (CONAP) share enforcement responsibilities. Penalties under Articles 30-35 include fines of GTQ 5,000-50,000 and imprisonment of 1-5 years for aggravated cruelty. The Asociación de Amigos de los Animales (AALA) is a leading welfare organization.",
    lawName: "Law for the Protection and Welfare of Animals (Decree No. 5-2017)",
    article: "Articles 4-5, 24, 30-35",
    year: 2017,
    penaltyMin: "Fine of GTQ 5,000",
    penaltyMax: "Up to 5 years imprisonment and fine up to GTQ 50,000",
    tags: ["animal protection", "duty of care", "cockfighting ban", "MAGA", "CONAP"],
  },
  {
    id: "gt-002",
    country: "Guatemala",
    countryCode: "GT",
    category: "Wildlife Protection",
    topic: "Protected areas and biodiversity conservation",
    summary:
      "Guatemala protects its Maya Forest biodiversity and endemic species through the Protected Areas Law.",
    details:
      "The Protected Areas Law (Decree No. 4-89 of 1989, amended by Decrees 110-96 and 117-97) establishes the Guatemalan System of Protected Areas (SIGAP) administered by the National Council for Protected Areas (CONAP). Guatemala hosts exceptional biodiversity with over 720 bird species, including the resplendent quetzal (Pharomachrus mocinno), the national bird and symbol. The Maya Biosphere Reserve in Petén (2.1 million hectares, established 1990) is the largest protected area in Central America and harbors jaguars, scarlet macaws, Baird's tapir, and white-lipped peccaries. Tikal National Park is a UNESCO World Heritage Site. The Biotopo del Quetzal protects cloud forest habitat. The Wildlife Trade Law (Decree No. 36-2004) regulates CITES implementation. Penalties for wildlife trafficking include imprisonment of 5-10 years and fines under the Penal Code. Guatemala ratified CITES in 1979.",
    lawName: "Protected Areas Law (Decree No. 4-89) / Wildlife Trade Law (Decree No. 36-2004)",
    article: "Various",
    year: 1989,
    lastAmended: 2004,
    penaltyMax: "Up to 10 years imprisonment for wildlife trafficking",
    tags: ["quetzal", "Maya Biosphere Reserve", "CONAP", "SIGAP", "CITES"],
  },

  // ==================== HONDURAS ====================
  {
    id: "hn-001",
    country: "Honduras",
    countryCode: "HN",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Honduras enacted the Animal Protection and Welfare Law in 2015, establishing comprehensive anti-cruelty provisions.",
    details:
      "Decree No. 115-2015, the Law for the Protection and Welfare of Animals (Ley de Protección y Bienestar Animal), is Honduras's primary animal welfare statute. Article 3 establishes the five freedoms of animal welfare. Article 5 prohibits cruelty including beating, mutilation, poisoning, abandonment, and sexual abuse of animals. Article 8 regulates companion animal ownership including mandatory vaccination and identification. The law prohibits dogfighting (Article 17) but permits cockfighting under regulated conditions, reflecting cultural practices. The Secretariat of Agriculture and Livestock (SAG) and the Institute of Forest Conservation (ICF) share enforcement responsibilities. Penalties under Articles 29-33 include fines of HNL 10,000-100,000 and imprisonment of 1-3 years for aggravated cruelty. The Asociación Nacional Protectora de Animales de Honduras advocates for stricter enforcement.",
    lawName: "Law for the Protection and Welfare of Animals (Decree No. 115-2015)",
    article: "Articles 3, 5, 17, 29-33",
    year: 2015,
    penaltyMin: "Fine of HNL 10,000",
    penaltyMax: "Up to 3 years imprisonment and fine up to HNL 100,000",
    tags: ["five freedoms", "animal protection", "dogfighting ban", "SAG"],
  },
  {
    id: "hn-002",
    country: "Honduras",
    countryCode: "HN",
    category: "Wildlife Protection",
    topic: "Forest and wildlife conservation",
    summary:
      "Honduras protects its Mesoamerican biodiversity, including the scarlet macaw national bird, through forestry and wildlife legislation.",
    details:
      "The Forestry, Protected Areas and Wildlife Law (Decree No. 98-2007, Ley Forestal, Áreas Protegidas y Vida Silvestre) is Honduras's comprehensive conservation statute. It established the Institute of Forest Conservation and Development, Protected Areas and Wildlife (ICF) as the primary enforcement authority. Honduras hosts over 700 bird species including the scarlet macaw (Ara macao, national bird), the resplendent quetzal, and the harpy eagle. The Río Plátano Biosphere Reserve (UNESCO World Heritage Site, 1982) in La Mosquitia protects one of Central America's largest remaining rainforests. The Mesoamerican Biological Corridor traverses Honduras. The Bay Islands (Roatán, Útila, Guanaja) support the Mesoamerican Barrier Reef System. The whale shark aggregation off Útila is one of the largest in the Caribbean. Penalties for wildlife trafficking include imprisonment of 3-10 years and substantial fines. Honduras ratified CITES in 1985.",
    lawName: "Forestry, Protected Areas and Wildlife Law (Decree No. 98-2007)",
    article: "Various",
    year: 2007,
    penaltyMax: "Up to 10 years imprisonment for wildlife trafficking",
    tags: ["scarlet macaw", "Río Plátano", "ICF", "Mesoamerican Corridor", "CITES"],
  },

  // ==================== EL SALVADOR ====================
  {
    id: "sv-001",
    country: "El Salvador",
    countryCode: "SV",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "El Salvador enacted animal protection legislation prohibiting cruelty and establishing welfare standards.",
    details:
      "The Law for the Protection and Promotion of Animal Welfare (Decreto Legislativo No. 330 of 2016, Ley de Protección y Promoción del Bienestar de Animales de Compañía) focuses primarily on companion animals. It prohibits cruelty, abandonment, and mistreatment (Article 4), establishes responsible ownership duties (Article 6), and regulates animal commerce (Article 10). The Penal Code (Decreto Legislativo No. 1030 of 1997, reformed 2021) was amended to include Article 255-A on animal cruelty, establishing penalties of 1-3 years imprisonment. The amendment also addresses animal fighting. The Ministry of Agriculture and Livestock (MAG) and the Ministry of Environment and Natural Resources (MARN) share oversight. El Salvador is the smallest and most densely populated country in Central America, creating particular pressures on animal welfare in urban areas. The Fundación Salvadoreña para la Protección Animal (FUSALPA) advocates for enforcement.",
    lawName: "Law for Animal Welfare (Decree No. 330/2016) / Penal Code Art. 255-A",
    article: "Articles 4, 6, 255-A",
    year: 2016,
    lastAmended: 2021,
    penaltyMax: "Up to 3 years imprisonment under Penal Code Art. 255-A",
    tags: ["companion animals", "penal code reform", "responsible ownership", "MAG"],
  },
  {
    id: "sv-002",
    country: "El Salvador",
    countryCode: "SV",
    category: "Wildlife Protection",
    topic: "Natural heritage and wildlife conservation",
    summary:
      "El Salvador protects its remaining wildlife through the Wildlife Conservation Law and protected area system.",
    details:
      "The Wildlife Conservation Law (Decreto Legislativo No. 844 of 1994, Ley de Conservación de Vida Silvestre) and the Environmental Law (Decreto No. 233 of 1998) form El Salvador's wildlife protection framework. The laws regulate hunting, wildlife trade, and habitat protection. Despite being Central America's smallest country with significant deforestation (original forest cover reduced to approximately 2%), El Salvador maintains important wildlife areas. The El Imposible National Park and the Montecristo Cloud Forest (part of the Trifinio Biosphere Reserve shared with Guatemala and Honduras) protect remaining biodiversity including spider monkeys, king vultures, and the emerald toucanet. The Ministry of Environment and Natural Resources (MARN) manages 168 natural protected areas. Marine protected areas along the Pacific coast protect olive ridley sea turtles. Penalties for wildlife offenses include fines and imprisonment of 3-5 years. El Salvador ratified CITES in 1986.",
    lawName: "Wildlife Conservation Law (Decree No. 844/1994) / Environmental Law (Decree No. 233/1998)",
    article: "Various",
    year: 1994,
    lastAmended: 1998,
    penaltyMax: "Up to 5 years imprisonment for wildlife offenses",
    tags: ["El Imposible", "Montecristo", "MARN", "sea turtles", "CITES"],
  },

  // ==================== NICARAGUA ====================
  {
    id: "ni-001",
    country: "Nicaragua",
    countryCode: "NI",
    category: "Anti-Cruelty",
    topic: "Animal welfare and protection",
    summary:
      "Nicaragua enacted the Animal Protection and Welfare Law in 2011, establishing comprehensive anti-cruelty standards.",
    details:
      "Law No. 747, the Law for the Protection and Welfare of Domestic Animals and Domesticated Wild Animals (Ley para la Protección y el Bienestar de los Animales Domésticos y Animales Silvestres Domesticados, 2011), is Nicaragua's primary animal welfare statute. Article 4 establishes animal welfare principles including freedom from hunger, pain, and distress. Article 6 prohibits cruelty, torture, mutilation, and abandonment. Article 12 regulates animal transport conditions. Article 15 prohibits animal fighting including dogfighting. The Institute for Agricultural Protection and Health (IPSA) and the Ministry of Family, Community, Cooperative and Associative Economy (MEFCCA) share enforcement. Penalties under Articles 20-25 include fines of 1-50 times the minimum monthly wage and imprisonment up to 1 year for aggravated cruelty. The Nicaraguan Society for the Protection of Animals advocates for enforcement.",
    lawName: "Law No. 747 on Animal Protection and Welfare",
    article: "Articles 4, 6, 12, 15, 20-25",
    year: 2011,
    penaltyMax: "Up to 1 year imprisonment and fines up to 50x minimum wage",
    tags: ["animal protection", "five freedoms", "IPSA", "dogfighting ban"],
  },
  {
    id: "ni-002",
    country: "Nicaragua",
    countryCode: "NI",
    category: "Wildlife Protection",
    topic: "Biodiversity and protected area conservation",
    summary:
      "Nicaragua protects its diverse ecosystems from Caribbean rainforests to Pacific dry forests through environmental and wildlife legislation.",
    details:
      "The General Law on the Environment and Natural Resources (Law No. 217 of 1996, reformed 2014) and the Law on Conservation, Promotion and Sustainable Development of the Forestry Sector (Law No. 462 of 2003) provide Nicaragua's wildlife conservation framework. The National System of Protected Areas (SINAP) encompasses 72 protected areas covering approximately 18% of the territory. The Bosawás Biosphere Reserve (UNESCO, 1997) in the Caribbean lowlands is Central America's second-largest forest area, harboring jaguars, Baird's tapir, scarlet macaws, and three-wattled bellbirds. The Indio Maíz Biological Reserve protects Caribbean rainforest. The Ometepe Island Biosphere Reserve in Lake Nicaragua hosts unique flora. MARENA (Ministry of Environment and Natural Resources) enforces wildlife laws. Sea turtles, including olive ridleys at La Flor Wildlife Refuge, are specifically protected. Penalties for environmental crimes include imprisonment of 2-7 years under the Penal Code. Nicaragua ratified CITES in 1977.",
    lawName: "General Law on Environment (Law No. 217) / Forestry Law (Law No. 462)",
    article: "Various",
    year: 1996,
    lastAmended: 2014,
    penaltyMax: "Up to 7 years imprisonment for environmental crimes",
    tags: ["Bosawás", "Indio Maíz", "MARENA", "SINAP", "CITES"],
  },

  // ==================== ICELAND ====================
  {
    id: "is-001",
    country: "Iceland",
    countryCode: "IS",
    category: "Anti-Cruelty",
    topic: "Animal welfare legislation",
    summary:
      "Iceland maintains comprehensive animal welfare legislation with strong protections for animals.",
    details:
      "The Animal Welfare Act (Lög um velferð dýra, No. 55/2013) is Iceland's primary animal welfare statute, replacing the earlier Act No. 15/1994. Article 1 establishes the purpose of protecting animals from unnecessary suffering and ensuring welfare. Article 3 defines the duty of care including adequate food, water, shelter, and veterinary treatment. Article 10 regulates animal transport. Article 14 addresses animal slaughter requirements. Article 16 regulates animal experiments with mandatory ethical review. The Icelandic Food and Veterinary Authority (Matvælastofnun, MAST) enforces the Act. Iceland has no tradition of industrialized factory farming; sheep farming is largely extensive and free-range. Animal experiments are regulated by an ethics committee. Penalties under Article 42 include fines or imprisonment up to 2 years. Iceland's high welfare standards align with EEA/EU standards through the EEA Agreement, though Iceland is not an EU member state.",
    lawName: "Animal Welfare Act (Lög um velferð dýra, No. 55/2013)",
    article: "Articles 1-42",
    year: 2013,
    penaltyMax: "Up to 2 years imprisonment",
    tags: ["MAST", "EEA standards", "duty of care", "animal experiments", "sheep farming"],
  },
  {
    id: "is-002",
    country: "Iceland",
    countryCode: "IS",
    category: "Wildlife Protection",
    topic: "Wildlife conservation and marine species protection",
    summary:
      "Iceland protects its seabird colonies, Arctic fox, and marine mammals through nature conservation and wildlife management legislation.",
    details:
      "The Nature Conservation Act (Lög um náttúruvernd, No. 60/2013) and the Wildlife Management Act (Lög um vernd, friðun og veiðar á villtum fuglum og villtum spendýrum, No. 64/1994, amended 2017) form Iceland's wildlife protection framework. Iceland hosts globally significant seabird colonies including the Atlantic puffin (Fratercula arctica, approximately 3-4 million breeding pairs), northern gannet, and Arctic tern. The Arctic fox (Vulpes lagopus) is Iceland's only native land mammal. The Marine and Freshwater Research Institute monitors whale populations (minke, humpback, blue whales). Iceland controversially resumed commercial whaling in 2006 under IWC objection, though the last whaling company suspended operations in 2024. Vatnajökull National Park (UNESCO World Heritage Site, 2019) is Europe's second-largest national park. The Environment Agency of Iceland oversees nature conservation. Penalties include fines and imprisonment for wildlife offenses.",
    lawName: "Nature Conservation Act (No. 60/2013) / Wildlife Management Act (No. 64/1994)",
    article: "Various",
    year: 1994,
    lastAmended: 2017,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Atlantic puffin", "Arctic fox", "whaling", "Vatnajökull", "seabirds"],
  },

  // ==================== SERBIA ====================
  {
    id: "rs-001",
    country: "Serbia",
    countryCode: "RS",
    category: "Anti-Cruelty",
    topic: "Animal welfare and protection",
    summary:
      "Serbia enacted comprehensive animal welfare legislation in 2009 with strong anti-cruelty provisions and penalties.",
    details:
      "The Animal Welfare Act (Zakon o dobrobiti životinja, Official Gazette RS No. 41/2009) is Serbia's primary animal welfare statute. Article 4 prohibits cruelty, torture, abuse, and abandonment. Article 5 establishes duties of care including adequate food, water, shelter, and veterinary treatment. Article 7 regulates animal transport. Article 15 addresses animal experiments with mandatory ethical review and the 3Rs principle (Replacement, Reduction, Refinement). Article 22 prohibits animal fighting. The law recognizes animal sentience and establishes the principle that animals are not objects (Article 2). The Veterinary Directorate within the Ministry of Agriculture enforces the Act. The Criminal Code (Article 269) criminalizes animal cruelty with imprisonment of up to 1 year, increased to 3 years for cruelty resulting in death. Serbia's EU accession process drives harmonization with EU animal welfare acquis communautaire.",
    lawName: "Animal Welfare Act (Zakon o dobrobiti životinja, 2009)",
    article: "Articles 2-22, Criminal Code Art. 269",
    year: 2009,
    penaltyMin: "Fines under the Animal Welfare Act",
    penaltyMax: "Up to 3 years imprisonment under Criminal Code",
    tags: ["animal sentience", "EU harmonization", "3Rs principle", "animal fighting ban"],
  },
  {
    id: "rs-002",
    country: "Serbia",
    countryCode: "RS",
    category: "Wildlife Protection",
    topic: "Nature conservation and biodiversity protection",
    summary:
      "Serbia protects its Balkan biodiversity through comprehensive nature conservation legislation.",
    details:
      "The Nature Conservation Act (Zakon o zaštiti prirode, Official Gazette RS No. 36/2009, amended 2016) is Serbia's primary nature and wildlife conservation statute. It establishes protected area categories (strict nature reserves, national parks, nature parks, and monuments of nature) and lists protected species. Serbia has 5 national parks: Đerdap, Tara, Kopaonik, Fruška Gora, and Šar Mountain (designated 2023). Key species include the Balkan lynx (Lynx lynx balcanicus, critically endangered), brown bear, grey wolf, griffon vulture, and the Danube sturgeon species. The Danube River corridor is a critical biodiversity zone. The Environmental Protection Agency and the Institute for Nature Conservation of Serbia oversee implementation. Serbia participates in the Bern Convention on European Wildlife. Penalties for wildlife offenses include fines and imprisonment under the Criminal Code. Serbia is a CITES party.",
    lawName: "Nature Conservation Act (Zakon o zaštiti prirode, 2009)",
    article: "Various",
    year: 2009,
    lastAmended: 2016,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Balkan lynx", "Đerdap", "Danube corridor", "Bern Convention", "CITES"],
  },

  // ==================== CROATIA ====================
  {
    id: "hr-001",
    country: "Croatia",
    countryCode: "HR",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Croatia's Animal Protection Act is one of Europe's more progressive welfare statutes, recognizing animal sentience and prohibiting fur farming.",
    details:
      "The Animal Protection Act (Zakon o zaštiti životinja, Official Gazette NN 102/2017, consolidated) is Croatia's primary animal welfare statute. Article 4 recognizes animals as sentient beings and prohibits treatment causing pain, suffering, or injury. Article 5 establishes duties of care. Article 7 prohibits animal abuse, abandonment, and neglect. Article 53 banned fur farming, with a transition period ending in 2017 — making Croatia among the first European countries to implement this ban. The Act regulates companion animals (Articles 48-62), animal experiments under the 3Rs principle (Articles 16-28), and animals in entertainment (Articles 64-71). The Ministry of Agriculture and the Veterinary and Food Safety Directorate enforce the Act. The Criminal Code (Article 205) penalizes animal cruelty with imprisonment up to 1 year, or up to 2 years for cruelty resulting in death. As an EU member since 2013, Croatia implements EU animal welfare directives.",
    lawName: "Animal Protection Act (Zakon o zaštiti životinja, NN 102/2017)",
    article: "Articles 4-7, 53, Criminal Code Art. 205",
    year: 2006,
    lastAmended: 2017,
    penaltyMax: "Up to 2 years imprisonment for cruelty causing death",
    tags: ["animal sentience", "fur farming ban", "EU member", "3Rs principle"],
  },
  {
    id: "hr-002",
    country: "Croatia",
    countryCode: "HR",
    category: "Wildlife Protection",
    topic: "Nature and biodiversity conservation",
    summary:
      "Croatia protects its Adriatic and Balkan biodiversity through nature protection legislation and an extensive system of protected areas.",
    details:
      "The Nature Protection Act (Zakon o zaštiti prirode, Official Gazette NN 80/2013, amended 2019) is Croatia's primary nature conservation statute, aligned with EU Habitats and Birds Directives. Croatia has 8 national parks including Plitvice Lakes (UNESCO World Heritage Site, 1979), Krka, Brijuni, and Mljet. The Natura 2000 network covers approximately 37% of Croatia's territory, among the highest proportions in the EU. Key species include the Eurasian lynx, brown bear (estimated 1,000+ individuals in Gorski Kotar and Lika), grey wolf, griffon vulture, and the olm (Proteus anguinus, a cave-dwelling amphibian endemic to the Dinaric karst). Adriatic marine biodiversity includes the Mediterranean monk seal, bottlenose dolphins, and loggerhead turtles. The State Institute for Nature Protection and the Ministry of Economy and Sustainable Development oversee conservation. Penalties for wildlife offenses include fines up to HRK 700,000 and imprisonment. Croatia ratified CITES as an EU member.",
    lawName: "Nature Protection Act (Zakon o zaštiti prirode, NN 80/2013)",
    article: "Various",
    year: 2013,
    lastAmended: 2019,
    penaltyMax: "Fines up to HRK 700,000 and/or imprisonment",
    tags: ["Plitvice Lakes", "brown bear", "Natura 2000", "olm", "Adriatic"],
  },

  // ==================== BOSNIA AND HERZEGOVINA ====================
  {
    id: "ba-001",
    country: "Bosnia and Herzegovina",
    countryCode: "BA",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Bosnia and Herzegovina enacted animal welfare legislation at entity and state levels addressing cruelty and welfare standards.",
    details:
      "The Law on Animal Welfare (Zakon o zaštiti i dobrobiti životinja, Official Gazette BiH No. 25/09 of 2009) is the state-level animal welfare statute. It prohibits cruelty, abandonment, and mistreatment (Article 4), establishes duties of care (Article 5), and regulates animal transport (Article 14), experiments (Article 20), and slaughter (Article 26). Both entities (Federation of Bosnia and Herzegovina and Republika Srpska) have complementary legislation. The Federation's Criminal Code (Article 330) and Republika Srpska's Criminal Code (Article 361) criminalize animal cruelty with imprisonment up to 1 year. The law prohibits animal fighting (Article 8). The State Veterinary Office and entity-level veterinary inspectorates enforce the law. Bosnia's complex governmental structure (state, entity, and cantonal levels) creates enforcement coordination challenges. The law was adopted as part of EU approximation efforts in the Stabilisation and Association Process.",
    lawName: "Law on Animal Welfare (Zakon o zaštiti i dobrobiti životinja, 2009)",
    article: "Articles 4-8, 14, 20, 26",
    year: 2009,
    penaltyMax: "Up to 1 year imprisonment under entity Criminal Codes",
    tags: ["entity legislation", "EU approximation", "animal fighting ban", "veterinary office"],
  },
  {
    id: "ba-002",
    country: "Bosnia and Herzegovina",
    countryCode: "BA",
    category: "Wildlife Protection",
    topic: "Nature protection and biodiversity conservation",
    summary:
      "Bosnia and Herzegovina protects its Dinaric Alps and river biodiversity through entity-level nature conservation legislation.",
    details:
      "Nature protection in Bosnia and Herzegovina is primarily regulated at the entity level: the Federation Law on Nature Protection (2003, amended 2013) and Republika Srpska Law on Nature Protection (2008, amended 2015). These laws establish protected area categories and designate protected species. Key biodiversity assets include Europe's last wild rivers (the Neretva, Una, and Vrbas), old-growth forests in Perućica (one of Europe's last primeval forests), and the Hutovo Blato wetland (Ramsar site). Sutjeska National Park protects the Perućica forest and populations of brown bear, chamois, and golden eagle. The Una National Park (2008) protects the Una River ecosystem. Bosnia hosts the largest brown bear population in southeastern Europe. The olm (Proteus anguinus) inhabits Dinaric karst caves. Entity environmental agencies and the state-level Ministry of Foreign Trade and Economic Relations coordinate conservation. Bosnia ratified CITES in 2009.",
    lawName: "Entity Laws on Nature Protection (2003/2008)",
    article: "Various",
    year: 2003,
    lastAmended: 2015,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Perućica", "wild rivers", "brown bear", "Hutovo Blato", "Dinaric karst"],
  },

  // ==================== ALBANIA ====================
  {
    id: "al-001",
    country: "Albania",
    countryCode: "AL",
    category: "Anti-Cruelty",
    topic: "Veterinary and animal welfare legislation",
    summary:
      "Albania addresses animal welfare through veterinary legislation and Penal Code provisions as part of EU approximation efforts.",
    details:
      "The Veterinary Law (Law No. 10465 of 2011, Ligji për Shërbimin Veterinar) and the Law on Animal Welfare (Law No. 10253 of 2010) form Albania's animal welfare framework. The 2010 law establishes standards for the keeping, transport, and slaughter of animals, and prohibits cruelty and abandonment. The Penal Code (Article 207) criminalizes cruel treatment of animals with fines or imprisonment. The National Food Authority (Autoriteti Kombëtar i Ushqimit, AKU) and the veterinary service enforce animal welfare provisions. Albania faces significant stray dog and cat population management challenges, particularly in urban areas. The country's EU candidate status (since 2014) drives harmonization with EU animal welfare standards under the acquis communautaire. International organizations including Four Paws and local NGOs advocate for improved enforcement. Penalties include fines and imprisonment up to 6 months under the Penal Code.",
    lawName: "Law on Animal Welfare (Law No. 10253/2010) / Veterinary Law (No. 10465/2011)",
    article: "Penal Code Article 207",
    year: 2010,
    lastAmended: 2011,
    penaltyMax: "Fines and up to 6 months imprisonment",
    tags: ["EU candidate", "AKU", "stray animal management", "veterinary law"],
  },
  {
    id: "al-002",
    country: "Albania",
    countryCode: "AL",
    category: "Wildlife Protection",
    topic: "Biodiversity and protected area conservation",
    summary:
      "Albania protects its Mediterranean and Balkan biodiversity through the Protected Areas Law and biodiversity legislation.",
    details:
      "The Law on Protected Areas (Law No. 8906 of 2002, amended by Law No. 81/2017) and the Law on Biodiversity Protection (Law No. 9867 of 2008) form Albania's nature conservation framework. Albania has 15 national parks and numerous protected areas covering approximately 17% of the territory. Key sites include Butrint National Park (UNESCO World Heritage Site), Lake Ohrid (shared with North Macedonia, UNESCO), and the Albanian Alps (Valbona and Theth national parks). The Prespa National Park protects the Dalmatian pelican (Pelecanus crispus) colony at Lake Prespa. Key species include the Balkan lynx (critically endangered, fewer than 50 individuals), brown bear, grey wolf, and golden eagle (the national symbol). The National Agency for Protected Areas (NAPA, established 2015) manages conservation areas. Albania ratified CITES in 2003 and the Bern Convention in 1999. Penalties for wildlife offenses include fines and imprisonment under the Criminal Code.",
    lawName: "Law on Protected Areas (No. 8906/2002) / Law on Biodiversity (No. 9867/2008)",
    article: "Various",
    year: 2002,
    lastAmended: 2017,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Balkan lynx", "Prespa", "golden eagle", "NAPA", "Bern Convention"],
  },

  // ==================== NORTH MACEDONIA ====================
  {
    id: "mk-001",
    country: "North Macedonia",
    countryCode: "MK",
    category: "Anti-Cruelty",
    topic: "Animal welfare and protection",
    summary:
      "North Macedonia enacted comprehensive animal welfare legislation in 2014 as part of EU approximation.",
    details:
      "The Law on Animal Welfare (Закон за заштита и благосостојба на животните, Official Gazette No. 149/2014, amended 2018) is North Macedonia's primary animal welfare statute. It prohibits cruelty, torture, abuse, and abandonment (Article 4), establishes a duty of care (Article 5), regulates animal transport (Article 10), experiments (Article 17), and slaughter (Article 25). Article 8 prohibits animal fighting. The Criminal Code (Article 325-a, added 2014) criminalizes animal cruelty with imprisonment of 3 months to 3 years. The Food and Veterinary Agency (Агенција за храна и ветеринарство) enforces welfare provisions. Stray dog management is a significant urban welfare challenge, addressed through trap-neuter-return (TNR) programs in Skopje and other cities. North Macedonia's EU candidate status (since 2005) drives alignment with EU animal welfare standards. Penalties under the law include fines of MKD 500-4,000 EUR equivalents for violations.",
    lawName: "Law on Animal Welfare (Official Gazette No. 149/2014)",
    article: "Articles 4-8, Criminal Code Art. 325-a",
    year: 2014,
    lastAmended: 2018,
    penaltyMax: "Up to 3 years imprisonment under Criminal Code",
    tags: ["EU candidate", "Food and Veterinary Agency", "TNR", "animal fighting ban"],
  },
  {
    id: "mk-002",
    country: "North Macedonia",
    countryCode: "MK",
    category: "Wildlife Protection",
    topic: "Nature and biodiversity conservation",
    summary:
      "North Macedonia protects its Balkan biodiversity, including ancient Lake Ohrid, through nature protection legislation.",
    details:
      "The Law on Nature Protection (Закон за заштита на природата, Official Gazette No. 67/2004, amended 2015) is North Macedonia's primary nature conservation statute. It establishes national parks, nature reserves, and monuments of nature, and designates protected species. North Macedonia has 3 national parks: Mavrovo, Galičica, and Pelister. Lake Ohrid (shared with Albania, UNESCO World Heritage Natural and Cultural Site) is one of Europe's oldest and deepest lakes, harboring over 200 endemic species including the Ohrid trout (Salmo letnica). The Prespa region hosts the Dalmatian pelican. Key species include the Balkan lynx (Lynx lynx balcanicus, estimated fewer than 50 individuals, subject to the Balkan Lynx Recovery Programme since 2006), brown bear, grey wolf, and imperial eagle. The Ministry of Environment and Physical Planning oversees conservation. North Macedonia ratified CITES in 2000 and the Bern Convention in 1997.",
    lawName: "Law on Nature Protection (Official Gazette No. 67/2004)",
    article: "Various",
    year: 2004,
    lastAmended: 2015,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Lake Ohrid", "Balkan lynx", "Mavrovo", "Prespa", "Bern Convention"],
  },

  // ==================== MONTENEGRO ====================
  {
    id: "me-001",
    country: "Montenegro",
    countryCode: "ME",
    category: "Anti-Cruelty",
    topic: "Animal welfare and protection",
    summary:
      "Montenegro adopted animal welfare legislation in 2008 with strong protections as part of its EU accession process.",
    details:
      "The Law on Animal Welfare (Zakon o zaštiti dobrobiti životinja, Official Gazette MNE No. 14/2008, amended 2016) is Montenegro's primary animal welfare statute. Article 4 prohibits cruelty, torture, abuse, and abandonment. Article 5 establishes duties of care. The law regulates companion animal keeping (Article 15), animal transport (Article 23), experiments (Article 28), and slaughter (Article 34). Animal fighting is prohibited (Article 10). The Criminal Code (Article 325a) criminalizes animal cruelty with imprisonment up to 1 year. The Veterinary Directorate within the Ministry of Agriculture and Rural Development enforces the Act. Montenegro, an EU candidate since 2010, actively aligns with EU animal welfare acquis. Stray animal management remains a challenge, with TNR programs in Podgorica and coastal municipalities. The Montenegrin animal welfare NGO sector has grown significantly since independence (2006), advocating for stricter enforcement.",
    lawName: "Law on Animal Welfare (Zakon o zaštiti dobrobiti životinja, 2008)",
    article: "Articles 4-10, Criminal Code Art. 325a",
    year: 2008,
    lastAmended: 2016,
    penaltyMax: "Up to 1 year imprisonment under Criminal Code",
    tags: ["EU candidate", "veterinary directorate", "TNR", "animal fighting ban"],
  },
  {
    id: "me-002",
    country: "Montenegro",
    countryCode: "ME",
    category: "Wildlife Protection",
    topic: "Nature conservation and biodiversity",
    summary:
      "Montenegro protects its Adriatic, karst, and mountain biodiversity through nature protection legislation.",
    details:
      "The Law on Nature Protection (Zakon o zaštiti prirode, Official Gazette MNE No. 54/2016) is Montenegro's primary nature conservation statute. It establishes 5 national parks: Durmitor (UNESCO World Heritage Site, 1980), Biogradska Gora (one of Europe's last primeval forests), Lovćen, Prokletije, and Skadar Lake. The Skadar Lake National Park hosts the largest bird reserve in Europe's southern region with over 280 species including the Dalmatian pelican. Durmitor hosts brown bears, chamois, and golden eagles. The Tara River Canyon (the deepest in Europe, 1,300m) is a UNESCO-protected landscape. Marine biodiversity along the Adriatic coast includes Mediterranean monk seal habitat. Montenegro covers only 13,812 sq km but boasts exceptional biodiversity density. The Environmental Protection Agency oversees nature conservation. Montenegro ratified CITES and the Bern Convention. Penalties for nature protection offenses include fines and imprisonment.",
    lawName: "Law on Nature Protection (Official Gazette MNE No. 54/2016)",
    article: "Various",
    year: 2016,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Durmitor", "Skadar Lake", "Tara Canyon", "Biogradska Gora", "Bern Convention"],
  },

  // ==================== SLOVAKIA ====================
  {
    id: "sk-001",
    country: "Slovakia",
    countryCode: "SK",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Slovakia enforces comprehensive animal welfare legislation aligned with EU standards, with significant Criminal Code penalties for cruelty.",
    details:
      "The Act on Veterinary Care (Zákon o veterinárnej starostlivosti, Act No. 39/2007, amended) and the Animal Protection Act (Act No. 488/2002, amended by Act No. 274/2009) form Slovakia's animal welfare framework. The laws prohibit cruelty, abandonment, and mistreatment, and establish standards for keeping, transport, and slaughter of animals. The Criminal Code (Act No. 300/2005, Section 305a) criminalizes animal cruelty with imprisonment of 6 months to 3 years; where the act causes death of the animal, penalties increase to 1-5 years. Aggravated offenses (involving particular cruelty or multiple animals) carry 3-8 years. Slovakia's penalties are among the strictest in Central Europe. The State Veterinary and Food Administration (Štátna veterinárna a potravinová správa) enforces the law. As an EU member since 2004, Slovakia implements all EU animal welfare directives. The Slovak Animal Protection Society (Slovenská spoločnosť ochrancov zvierat) monitors enforcement.",
    lawName: "Animal Protection Act (No. 488/2002) / Criminal Code Section 305a",
    article: "Criminal Code Section 305a",
    year: 2002,
    lastAmended: 2009,
    penaltyMin: "6 months imprisonment for cruelty",
    penaltyMax: "Up to 8 years imprisonment for aggravated cruelty",
    tags: ["EU member", "Criminal Code", "strict penalties", "veterinary administration"],
  },
  {
    id: "sk-002",
    country: "Slovakia",
    countryCode: "SK",
    category: "Wildlife Protection",
    topic: "Nature and landscape conservation",
    summary:
      "Slovakia protects its Carpathian mountain biodiversity through comprehensive nature conservation legislation and the Natura 2000 network.",
    details:
      "The Nature and Landscape Protection Act (Zákon o ochrane prírody a krajiny, Act No. 543/2002, amended) is Slovakia's primary nature conservation statute. Slovakia has 9 national parks including the High Tatras (Tatranský národný park, the oldest, established 1949), Slovak Paradise, and Poloniny (part of the UNESCO Primeval Beech Forests). The Carpathian Mountains host significant populations of brown bear (estimated 1,200-1,600, the largest in Central Europe outside Romania), grey wolf (300-400), Eurasian lynx (300-400), and golden eagle. The Natura 2000 network covers approximately 30% of Slovakia's territory. The Slovak Caves are a UNESCO World Heritage Site harboring unique cave fauna. The State Nature Conservancy of the Slovak Republic (Štátna ochrana prírody SR) manages conservation. Penalties for wildlife offenses include fines and imprisonment under the Criminal Code. Slovakia implements CITES and the EU Birds and Habitats Directives.",
    lawName: "Nature and Landscape Protection Act (Act No. 543/2002)",
    article: "Various",
    year: 2002,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Carpathians", "brown bear", "High Tatras", "Natura 2000", "primeval forests"],
  },

  // ==================== SLOVENIA ====================
  {
    id: "si-001",
    country: "Slovenia",
    countryCode: "SI",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Slovenia's Animal Protection Act provides comprehensive welfare protections including recognition of animal sentience, aligned with EU standards.",
    details:
      "The Animal Protection Act (Zakon o zaščiti živali, ZZZiv, Official Gazette RS No. 38/2013, consolidated) is Slovenia's primary animal welfare statute. Article 3 recognizes animals as sentient beings. Article 4 prohibits cruelty, abuse, abandonment, and neglect. Article 9 establishes duties of care. The Act regulates companion animals (Articles 10-15), stray animal management (Article 26), animal experiments under the 3Rs principle (Articles 21-24), and animals in entertainment (Article 18). The Criminal Code (Kazenski zakonik, Article 341) criminalizes animal cruelty with imprisonment of up to 1 year, or up to 2 years if the act involves particular cruelty or results in the animal's death. The Veterinary Administration of the Republic of Slovenia (VURS) enforces welfare provisions. As an EU member since 2004, Slovenia implements all EU animal welfare directives. The Slovenian Animal Protection Act is considered one of the more progressive in Central Europe.",
    lawName: "Animal Protection Act (ZZZiv, Official Gazette RS No. 38/2013)",
    article: "Articles 3-9, Criminal Code Art. 341",
    year: 1999,
    lastAmended: 2013,
    penaltyMax: "Up to 2 years imprisonment for aggravated cruelty",
    tags: ["animal sentience", "EU member", "3Rs principle", "VURS"],
  },
  {
    id: "si-002",
    country: "Slovenia",
    countryCode: "SI",
    category: "Wildlife Protection",
    topic: "Nature conservation and biodiversity",
    summary:
      "Slovenia protects its exceptional biodiversity density, from Alpine to Mediterranean ecosystems, through comprehensive nature conservation law.",
    details:
      "The Nature Conservation Act (Zakon o ohranjanju narave, ZON, Official Gazette RS No. 96/2004, amended 2014) is Slovenia's primary nature protection statute. Despite its small size (20,273 sq km), Slovenia has exceptional biodiversity: approximately 1% of the world's surface area but 2% of known species. Triglav National Park (established 1924/1981) protects Alpine ecosystems. Slovenia hosts the olm (Proteus anguinus, 'human fish,' the only European cave vertebrate) in the Postojna Cave system. The country has approximately 500-700 brown bears (the densest population in Europe relative to area), 40-80 wolves, and a small lynx population (reintroduced from the Carpathians). The Natura 2000 network covers approximately 37% of the territory. The Slovenian Environment Agency (ARSO) and the Institute of the Republic of Slovenia for Nature Conservation oversee implementation. Slovenia implements CITES and the EU Birds and Habitats Directives.",
    lawName: "Nature Conservation Act (ZON, Official Gazette RS No. 96/2004)",
    article: "Various",
    year: 2004,
    lastAmended: 2014,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["olm", "brown bear", "Triglav", "Natura 2000", "cave biodiversity"],
  },

  // ==================== MALTA ====================
  {
    id: "mt-001",
    country: "Malta",
    countryCode: "MT",
    category: "Anti-Cruelty",
    topic: "Animal welfare and protection",
    summary:
      "Malta enforces comprehensive animal welfare legislation with strong penalties, aligned with EU standards.",
    details:
      "The Animal Welfare Act (Chapter 439 of the Laws of Malta, Act XI of 2001, substantially amended 2014 and 2018) is Malta's primary animal welfare statute. Article 3 establishes duties of care including adequate food, water, shelter, and veterinary treatment. Article 4 prohibits cruelty, torture, abuse, and abandonment. Article 5 regulates animal transport. Article 12 addresses animal experiments. The Act prohibits animal fighting (Article 7) and the use of animals in entertainment causing suffering (Article 10). The 2018 amendments introduced significantly enhanced penalties: fines up to EUR 50,000 and/or imprisonment up to 3 years for cruelty offenses. Malta's Directorate for Veterinary and Phytosanitary Regulation within the Ministry for Agriculture enforces the Act. The Animal Welfare Commissioner post was created to strengthen enforcement. As an EU member since 2004, Malta implements all EU animal welfare directives including those on farm animals, transport, and slaughter.",
    lawName: "Animal Welfare Act (Chapter 439, Act XI of 2001)",
    article: "Articles 3-12",
    year: 2001,
    lastAmended: 2018,
    penaltyMin: "Fines for minor violations",
    penaltyMax: "Fines up to EUR 50,000 and/or up to 3 years imprisonment",
    tags: ["EU member", "Animal Welfare Commissioner", "strong penalties", "duty of care"],
  },
  {
    id: "mt-002",
    country: "Malta",
    countryCode: "MT",
    category: "Wildlife Protection",
    topic: "Bird and marine conservation",
    summary:
      "Malta protects migratory birds and marine biodiversity through EU-aligned conservation legislation, addressing the historically contentious practice of bird hunting.",
    details:
      "The Environment Protection Act (Chapter 435, Act V of 2016) and the Conservation of Wild Birds Regulations (S.L. 504.71) form Malta's wildlife protection framework, implementing the EU Birds and Habitats Directives. Bird conservation is Malta's most significant wildlife issue: the Maltese archipelago lies on a major Mediterranean flyway, and traditional spring hunting of turtle doves and quail has been contentious, leading to an EU derogation arrangement. The 2015 referendum on spring hunting narrowly voted to retain it. Malta has established 35 Natura 2000 sites covering 13% of land area and significant marine areas. The Maltese Islands host endemic species including the Maltese freshwater crab (Potamon fluviatile lanfrancoi). Marine protected areas protect Posidonia seagrass meadows, dolphins, and sea turtles. The Environment and Resources Authority (ERA) oversees nature conservation. BirdLife Malta is a prominent conservation NGO. Penalties include fines and imprisonment for wildlife offenses.",
    lawName: "Environment Protection Act (Chapter 435) / Conservation of Wild Birds Regulations",
    article: "Various",
    year: 2003,
    lastAmended: 2016,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["bird migration", "Natura 2000", "spring hunting", "BirdLife Malta", "ERA"],
  },

  // ==================== LUXEMBOURG ====================
  {
    id: "lu-001",
    country: "Luxembourg",
    countryCode: "LU",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Luxembourg enforces robust animal welfare legislation with among the highest penalties in Europe for animal cruelty.",
    details:
      "The Law on the Protection of Animals (Loi du 27 juin 2018 sur la protection des animaux) is Luxembourg's comprehensive animal welfare statute, replacing the 1983 law. Article 4 recognizes animals as sentient beings (êtres vivants doués de sensibilité). Article 5 establishes a general prohibition on causing unjustified pain, suffering, or injury to animals. Article 9 prohibits animal abandonment. Article 13 regulates animal experiments under the 3Rs principle. Article 17 prohibits the use of wild animals in circuses. The law introduced significantly enhanced penalties: fines of EUR 500-200,000 and imprisonment of 8 days to 3 years for cruelty offenses. The 2018 reform was among the most comprehensive in Europe. The Administration des Services Vétérinaires (ASV) enforces the law. Luxembourg implements all EU animal welfare directives as an EU founding member. The Lëtzebuerger Déiereschutzliga advocates for enforcement.",
    lawName: "Law on the Protection of Animals (Loi du 27 juin 2018)",
    article: "Articles 4-17",
    year: 2018,
    penaltyMin: "Fine of EUR 500",
    penaltyMax: "Fine up to EUR 200,000 and/or up to 3 years imprisonment",
    tags: ["animal sentience", "circus ban", "EU founding member", "strong penalties"],
  },
  {
    id: "lu-002",
    country: "Luxembourg",
    countryCode: "LU",
    category: "Wildlife Protection",
    topic: "Nature conservation and biodiversity",
    summary:
      "Luxembourg protects its biodiversity through comprehensive nature conservation legislation and the Natura 2000 network.",
    details:
      "The Law on Nature Protection and Natural Resources (Loi du 18 juillet 2018 concernant la protection de la nature et des ressources naturelles) is Luxembourg's primary nature conservation statute. Despite its small size (2,586 sq km), Luxembourg has diverse habitats including the Ardennes forests, Moselle Valley, and the sandstone region of Müllerthal. The Natura 2000 network covers approximately 27% of the territory. Key species include the European wildcat (Felis silvestris silvestris, with a recovering population), otter (recolonizing from the Ardennes), various bat species (19 of 22 European species present), and the white stork (reintroduced). The Our Nature Park and Müllerthal Region are important conservation areas. The Administration de la nature et des forêts (ANF) manages conservation. Luxembourg implements CITES and the EU Birds and Habitats Directives. Penalties for nature protection violations include fines and imprisonment. Luxembourg also participates in the Benelux Nature Convention.",
    lawName: "Law on Nature Protection (Loi du 18 juillet 2018)",
    article: "Various",
    year: 2018,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Natura 2000", "European wildcat", "Ardennes", "ANF", "Benelux Convention"],
  },

  // ==================== MOLDOVA ====================
  {
    id: "md-001",
    country: "Moldova",
    countryCode: "MD",
    category: "Anti-Cruelty",
    topic: "Animal protection and welfare",
    summary:
      "Moldova enacted animal protection legislation addressing cruelty and welfare standards as part of EU association efforts.",
    details:
      "The Law on Animal Protection (Legea privind protecția animalelor, Law No. 105 of 2016) is Moldova's primary animal welfare statute. Article 4 establishes the principles of animal protection including avoidance of unnecessary suffering. Article 7 prohibits cruelty, including beating, torture, poisoning, and abandonment. Article 10 regulates animal keeping and establishes duties of care. Article 14 addresses stray animal management through trap-neuter-return programs. Article 18 regulates animal experiments. The Criminal Code (Article 222) criminalizes animal cruelty with fines or imprisonment up to 1 year; where cruelty results in the animal's death or involves particular brutality, penalties increase to up to 3 years. The National Food Safety Agency (ANSA) and the Ministry of Agriculture enforce the law. Moldova's Association Agreement with the EU (2014) drives harmonization with EU animal welfare standards. Stray animal management, particularly dogs, remains a significant welfare challenge.",
    lawName: "Law on Animal Protection (Law No. 105/2016) / Criminal Code Art. 222",
    article: "Articles 4-18, Criminal Code Art. 222",
    year: 2016,
    penaltyMax: "Up to 3 years imprisonment for aggravated cruelty",
    tags: ["EU association", "ANSA", "stray management", "TNR"],
  },
  {
    id: "md-002",
    country: "Moldova",
    countryCode: "MD",
    category: "Wildlife Protection",
    topic: "Biodiversity and nature conservation",
    summary:
      "Moldova protects its steppe, wetland, and forest biodiversity through environmental and nature conservation legislation.",
    details:
      "The Law on the Animal Kingdom (Legea regnului animal, Law No. 439 of 1995, amended 2018) and the Law on the Fund of Natural Areas Protected by the State (Law No. 1538 of 1998) form Moldova's wildlife conservation framework. Moldova's biodiversity includes steppe, forest-steppe, and wetland ecosystems, though the country is one of Europe's most heavily farmed landscapes (75% agricultural land). Protected areas cover approximately 5.7% of the territory. Key sites include the Codru Scientific Reserve (Moldova's oldest reserve, 1971), the Lower Dniester wetlands (Ramsar site), and the Pădurea Domnească nature reserve (forest habitat for European bison reintroduced in 2005). Protected species include the steppe eagle, great bustard, European mink, and sturgeons in the Dniester River. The Agency for Environment (Agenția de Mediu) oversees conservation. Moldova ratified CITES in 2001 and the Bern Convention in 1993. Penalties for wildlife offenses include fines and imprisonment.",
    lawName: "Law on the Animal Kingdom (Law No. 439/1995) / Law on Protected Areas (No. 1538/1998)",
    article: "Various",
    year: 1995,
    lastAmended: 2018,
    penaltyMax: "Fines and/or imprisonment",
    tags: ["Codru Reserve", "Dniester", "European bison", "steppe", "Bern Convention"],
  },

  // ============ ANIMAL RIGHTS & LEGAL PERSONHOOD ==============
  // ============================================================

  // --- Ecuador: Rights of Nature (Constitutional) ---
  {
    id: "ec-rights-001",
    country: "Ecuador",
    countryCode: "EC",
    category: "Animal Rights & Legal Personhood",
    topic: "Rights of Nature — constitutional recognition",
    summary:
      "Ecuador is the first country to enshrine Rights of Nature in its constitution (2008).",
    details:
      "Ecuador's 2008 Constitution (Articles 71-74) grants Nature (Pachamama) the right to exist, persist, maintain, and regenerate its vital cycles and evolutionary processes. Article 71 provides that any person or community may demand enforcement of nature's rights, establishing universal standing (accion popular). The Estrellita ruling (Case No. 253-20-JH, January 2022, Judge Ramiro Avila Santamaria) recognized a woolly monkey (Lagothrix lagothricha) as having individual rights under the Rights of Nature framework. The Court established interspecies ecological justice, holding animals are subjects of rights (sujetos de derechos) distinct from property. The ruling prohibited keeping wild animals as pets and mandated MAATE to develop rehabilitation standards. This decision has been cited in Colombia, India, and Argentina. The Defensoria del Pueblo may intervene under Article 215.",
    lawName: "Constitución de la República del Ecuador",
    article: "Articles 71–74",
    year: 2008,
    lastAmended: 2022,
    penaltyMax: "Constitutional remedies; injunctions and restoration orders",
    tags: [
      "Rights of Nature",
      "Pachamama",
      "constitutional rights",
      "Estrellita case",
      "animal sentience",
      "legal personhood",
    ],
  },

  // --- India: Ganges & Yamuna Rivers + Animal Legal Personhood ---
  {
    id: "in-rights-001",
    country: "India",
    countryCode: "IN",
    category: "Animal Rights & Legal Personhood",
    topic: "Animal legal personhood — judicial recognition",
    summary:
      "Indian courts have recognized animals as legal entities with rights.",
    details:
      "In Animal Welfare Board of India v. A. Nagaraja (2014), the Supreme Court ruled that animals have a right to life under Article 21 of the Constitution and recognized the five freedoms of animal welfare. The Punjab & Haryana High Court in 2019 declared all animals in the state as legal persons with corresponding rights and duties of a living person. The Uttarakhand High Court in 2018 declared all animals in the animal kingdom as legal entities with rights, duties, and liabilities. These rulings establish animals as rights-bearing entities, though enforcement varies by state.",
    lawName: "Judicial Precedent (A. Nagaraja & subsequent cases)",
    article: "Article 21 (Right to Life)",
    year: 2014,
    lastAmended: 2019,
    penaltyMax: "Varies by state and violation; constitutional remedies available",
    tags: [
      "legal personhood",
      "Nagaraja case",
      "right to life",
      "five freedoms",
      "Punjab High Court",
      "judicial activism",
    ],
  },

  // --- New Zealand: Te Awa Tupua (Whanganui River) + Animal Sentience ---
  {
    id: "nz-rights-001",
    country: "New Zealand",
    countryCode: "NZ",
    category: "Animal Rights & Legal Personhood",
    topic: "Animal sentience & Rights of Nature",
    summary:
      "New Zealand recognizes animal sentience in law and granted legal personhood to natural entities.",
    details:
      "New Zealand's Animal Welfare Act 1999 (Public Act 1999 No 142), amended in 2015 by the Animal Welfare Amendment Act (No 2), was among the first to recognize animals as sentient beings under Section 4. The 2015 amendment banned cosmetic testing (Section 84A), enforced by the Ministry for Primary Industries. Penalties under Section 28 include up to five years imprisonment and NZD 100,000 fines for willful ill-treatment. The Te Awa Tupua Act 2017 (Public Act 2017 No 7) granted the Whanganui River legal personhood (Section 14), following a 140-year campaign by Whanganui iwi. Te Urewera Act 2014 similarly granted a former national park legal personhood. These precedents, rooted in Te Ao Maori, establish a framework recognizing inherent rights of non-human entities. The High Court in NZSPCA v. MPI [2020] applied the sentience provision to strengthen enforcement standards.",
    lawName: "Te Awa Tupua Act 2017 / Animal Welfare Act 1999",
    article: "Various",
    year: 2017,
    lastAmended: 2017,
    penaltyMax: "Constitutional and statutory remedies",
    tags: [
      "sentience",
      "Te Awa Tupua",
      "Whanganui River",
      "legal personhood",
      "Rights of Nature",
      "Te Urewera",
    ],
  },

  // --- Colombia: Atrato River + Bear Legal Personhood ---
  {
    id: "co-rights-001",
    country: "Colombia",
    countryCode: "CO",
    category: "Animal Rights & Legal Personhood",
    topic: "Animal & river legal personhood — judicial precedent",
    summary:
      "Colombian courts granted legal personhood to rivers, ecosystems, and individual animals.",
    details:
      "Colombia's judiciary established groundbreaking non-human legal personhood precedents. In the Chucho case (AHC4806-2017), the Supreme Court granted habeas corpus for a spectacled bear at Barranquilla Zoo as a subject of rights, though the Constitutional Court reversed this in SU-016/2020 while affirming constitutional protection under Article 79. Sentencia T-622/16 granted legal personhood to the Atrato River with appointed guardians. STC4360-2018 declared the Colombian Amazon a subject of rights, ordering deforestation reduction. In 2020, a U.S. court recognized Escobar's hippos as 'interested persons' under 28 U.S.C. Section 1782. The Fiscalia General and Defensoria del Pueblo participate in enforcement. These decisions position Colombia as a global leader in rights-of-nature jurisprudence.",
    lawName: "Constitutional Court & Supreme Court Jurisprudence",
    article: "T-622/16, STC4360-2018, AHC4806-2017",
    year: 2016,
    lastAmended: 2020,
    penaltyMax: "Constitutional remedies; ecosystem restoration orders",
    tags: [
      "Chucho the bear",
      "habeas corpus",
      "Atrato River",
      "Amazon personhood",
      "Escobar hippos",
      "subject of rights",
    ],
  },

  // --- Argentina: Sandra the Orangutan ---
  {
    id: "ar-rights-001",
    country: "Argentina",
    countryCode: "AR",
    category: "Animal Rights & Legal Personhood",
    topic: "Non-human person — judicial recognition",
    summary:
      "Argentina's courts recognized an orangutan as a 'non-human person' with rights.",
    details:
      "In 2014, an Argentine court declared Sandra, a Sumatran orangutan at Buenos Aires Zoo, a 'non-human person' with the right to liberty via habeas corpus (Asociación de Funcionarios y Abogados por los Derechos de los Animales case). This was the first time a court granted an animal legal personhood. Sandra was later transferred to a sanctuary in Florida. In 2016, Judge Elena Liberatori further ruled Sandra had rights as a 'sentient being.' Argentina's Civil Code was also amended in 2015 to distinguish animals from objects.",
    lawName: "Judicial Precedent (Sandra the Orangutan case)",
    article: "Habeas Corpus Ruling, Chamber III",
    year: 2014,
    lastAmended: 2016,
    penaltyMax: "Habeas corpus remedy; relocation to sanctuary",
    tags: [
      "Sandra orangutan",
      "non-human person",
      "habeas corpus",
      "sentient being",
      "Buenos Aires Zoo",
      "animal rights landmark",
    ],
  },

  // --- France: Animal Sentience in Civil Code ---
  {
    id: "fr-rights-001",
    country: "France",
    countryCode: "FR",
    category: "Animal Rights & Legal Personhood",
    topic: "Animals as sentient beings in Civil Code",
    summary:
      "France amended its Civil Code in 2015 to recognize animals as sentient beings, not property.",
    details:
      "Loi n°2015-177 of 16 February 2015 amended Article 515-14 of the Code Civil to classify animals as 'êtres vivants doués de sensibilité' (living beings endowed with sentience), distinguishing them from mere property (biens meubles) under the Napoleonic Code. While animals remain subject to property rules subsidiarily, this represents a fundamental juridical shift. The amendment built on Code Rural Article L214-1 (1976) and fulfilled obligations under Article 13 TFEU. Loi n°2021-1539 of 30 November 2021 banned wild animals in traveling circuses (effective 2028) and mink fur farming (effective 2025). The Rapport Toubon (2020) recommended further strengthening animal legal status toward a 'statut juridique autonome.' The Cour de cassation in Civ. 1ère, 9 December 2015 referenced Article 515-14 in a companion animal custody dispute. Enforcement of welfare provisions is by the DDPP (Direction Départementale de la Protection des Populations). Maximum penalties for serious cruelty reach 5 years imprisonment and EUR 75,000 fine under Code Pénal Article 521-1. France's reform inspired similar civil code amendments in Portugal (2017), Spain (2021), and Belgium. Compared to Germany's BGB §90a, France's provision is more declarative but less systematically integrated into the civil code framework.",
    lawName: "Code Civil, Article 515-14 (Loi n°2015-177)",
    article: "Article 515-14",
    year: 2015,
    lastAmended: 2021,
    penaltyMax: "Up to 5 years imprisonment and €75,000 fine for serious cruelty",
    tags: [
      "sentience",
      "Civil Code reform",
      "êtres vivants",
      "property distinction",
      "circus ban",
      "fur farming ban",
    ],
  },

  // --- Germany: Constitutional Animal Protection ---
  {
    id: "de-rights-001",
    country: "Germany",
    countryCode: "DE",
    category: "Animal Rights & Legal Personhood",
    topic: "Constitutional state objective — animal protection",
    summary:
      "Germany added animal protection as a constitutional state objective in 2002.",
    details:
      "Germany amended Article 20a of the Grundgesetz (BGBl. I S. 2862, 2002) to add 'und die Tiere' (and the animals) as a Staatsziel (constitutional state objective) alongside environmental protection, effective 1 August 2002. BGB §90a (BGBl. I S. 2002, 1990) declares 'Tiere sind keine Sachen' (animals are not things), though property rules apply subsidiarily. The BVerfG (Federal Constitutional Court) applied Article 20a in its landmark ritual slaughter decision (BVerfGE 104, 337, 2002), balancing animal protection against religious freedom under Article 4 GG. The BVerwG in BVerwG 3 C 28.16 (2019) relied on Article 20a to hold that economic interests do not justify killing male chicks. Combined with the Tierschutzgesetz (BGBl. I S. 1277, 1972), Germany has one of the world's strongest legal frameworks. Enforcement is by Länder Veterinärämter and the BMEL. Criminal penalties under TierSchG §17 reach 3 years imprisonment. Germany's dual approach (constitutional objective plus civil code reform) has been influential: Austria adopted ABGB §285a in 1988, Switzerland has Article 80 BV, and the Czech Republic followed with §494 Občanský zákoník. The European Parliament has cited Germany's model in discussions on Article 13 TFEU implementation. Critics argue that Article 20a remains insufficiently enforced in intensive animal agriculture.",
    lawName: "Grundgesetz Article 20a / BGB §90a",
    article: "Article 20a, §90a",
    year: 2002,
    lastAmended: 2022,
    penaltyMax: "Up to 3 years imprisonment under Tierschutzgesetz; constitutional remedies",
    tags: [
      "constitutional protection",
      "Grundgesetz",
      "Tiere sind keine Sachen",
      "state objective",
      "BGB §90a",
      "animal dignity",
    ],
  },

  // --- Switzerland: Animal Dignity ---
  {
    id: "ch-rights-001",
    country: "Switzerland",
    countryCode: "CH",
    category: "Animal Rights & Legal Personhood",
    topic: "Constitutional animal dignity (Würde der Kreatur)",
    summary:
      "Switzerland constitutionally protects the dignity of living beings, including animals.",
    details:
      "Switzerland's Bundesverfassung (BV) Article 120 protects the 'Würde der Kreatur' (dignity of living beings), a globally unique constitutional concept applied to animals through the Tierschutzgesetz (TSchG, SR 455, 2005). TSchG Article 1 explicitly protects animal dignity (Würde des Tieres), and Article 4 prohibits practices violating it. The Bundesgericht (Federal Supreme Court) in BGE 135 II 384 applied the dignity concept to genetically modified animals. Battery cages were banned in 1992, decades before the EU. TSchV Article 36 requires social species (guinea pigs, rabbits, parrots) to be kept in pairs. Zurich established the world's first Tieranwalt (animal lawyer) in 2007 under cantonal law, abolished by referendum in 2010 (55.3% against). The 2022 Massentierhaltungsinitiative (factory farming ban) was rejected by 62.9% but prompted legislative discussion. Enforcement is by BLV (Bundesamt für Lebensmittelsicherheit und Veterinärwesen) and 26 cantonal Veterinärämter. Criminal penalties under TSchG Article 26 reach 3 years imprisonment; fines up to CHF 20,000 (administrative) or CHF 40,000 (criminal). ZGB Article 641a (amended 2003) declares animals are not things. Switzerland's dignity framework has no equivalent in EU law or any other jurisdiction, making it the most philosophically developed animal protection system globally.",
    lawName: "Federal Constitution Article 120 / Tierschutzgesetz 2005",
    article: "Article 120",
    year: 2005,
    lastAmended: 2022,
    penaltyMax: "Up to 3 years imprisonment; fines up to CHF 20,000",
    tags: [
      "animal dignity",
      "Würde der Kreatur",
      "social animals",
      "Tieranwalt",
      "intrinsic value",
      "constitutional dignity",
    ],
  },

  // --- Bolivia: Law of Mother Earth ---
  {
    id: "bo-rights-001",
    country: "Bolivia",
    countryCode: "BO",
    category: "Animal Rights & Legal Personhood",
    topic: "Rights of Mother Earth (Ley de Derechos de la Madre Tierra)",
    summary:
      "Bolivia grants legal rights to Mother Earth, including the right to biodiversity.",
    details:
      "Bolivia's Law of the Rights of Mother Earth (Ley 071, 2010) and the Framework Law of Mother Earth and Integral Development (Ley 300, 2012) grant nature legal rights including: the right to life, biodiversity, water, clean air, equilibrium, and freedom from genetic modification. Mother Earth is defined as a collective subject of public interest. While focused on ecosystems rather than individual animals, the law creates a legal framework where nature and its inhabitants are rights-bearing entities. Bolivia's 2009 Constitution also recognizes the rights of Pachamama.",
    lawName: "Ley 071 (2010) / Ley 300 (2012)",
    article: "Various",
    year: 2010,
    lastAmended: 2012,
    penaltyMax: "Administrative sanctions; ecosystem restoration obligations",
    tags: [
      "Mother Earth",
      "Pachamama",
      "Rights of Nature",
      "biodiversity rights",
      "Ley 071",
      "collective subject",
    ],
  },

  // --- Spain: Great Ape Legal Rights ---
  {
    id: "es-rights-001",
    country: "Spain",
    countryCode: "ES",
    category: "Animal Rights & Legal Personhood",
    topic: "Great ape rights & animal sentience reform",
    summary:
      "Spain recognized great apes' rights and reformed its Civil Code to recognize animal sentience.",
    details:
      "In June 2008, the Congreso de los Diputados passed a resolution supporting the Great Ape Project (Proyecto Gran Simio), committing Spain to protect the life, liberty, and freedom from torture of great apes (chimpanzees, gorillas, orangutans, bonobos), making Spain the first country to pass a parliamentary resolution in support of rights for non-human primates (note: the 2008 resolution was non-binding). The Balearic Islands (Illes Balears) declared great apes as legal persons in 2007 via parliamentary motion. Ley 17/2021, de 15 de diciembre (BOE n. 300) amended the Código Civil to recognize animals as 'seres dotados de sensibilidad' (sentient beings), introducing Article 333 bis and removing animals from the category of bienes muebles (movable property). Article 94 bis requires divorce courts to consider animal welfare in custody disputes. Enforcement of civil provisions falls to Juzgados de Primera Instancia. The Tribunal Supremo has not yet issued definitive jurisprudence under Article 333 bis. Criminal penalties under Ley Orgánica 3/2023 reach 24 months imprisonment for cruelty causing death. Spain's dual approach (great ape rights plus general sentience reform) is unique in EU law. The Dirección General de Derechos de los Animales oversees implementation. Compared to France's Article 515-14 and Germany's BGB §90a, Spain's reform is the most recent and explicitly addresses family law implications.",
    lawName: "Parliamentary Resolution 2008 / Ley 17/2021",
    article: "Civil Code reform, Articles 333 bis et seq.",
    year: 2008,
    lastAmended: 2022,
    penaltyMax: "Up to 24 months imprisonment for animal cruelty; civil remedies for custody",
    tags: [
      "Great Ape Project",
      "sentient beings",
      "Civil Code reform",
      "great ape rights",
      "animal custody",
      "Balearic Islands",
    ],
  },

  // --- Uganda: Rights of Nature ---
  {
    id: "ug-rights-001",
    country: "Uganda",
    countryCode: "UG",
    category: "Animal Rights & Legal Personhood",
    topic: "Rights of Nature in environmental legislation",
    summary:
      "Uganda's National Environment Act 2019 includes Rights of Nature provisions.",
    details:
      "Uganda's National Environment Act (2019) includes provisions recognizing the rights of nature, making it one of the first African nations to incorporate this framework. Section 4 states that nature has the right to exist, persist, and maintain its vital cycles. Any person can bring an action to enforce these rights. Uganda's constitutional framework (Article 245) also mandates environmental protection. While enforcement remains challenging, the legal recognition creates a basis for protecting ecosystems and their animal inhabitants.",
    lawName: "National Environment Act 2019",
    article: "Section 4",
    year: 2019,
    lastAmended: 2019,
    penaltyMax: "Fines and restoration orders under environmental law",
    tags: [
      "Rights of Nature",
      "Africa",
      "environmental rights",
      "National Environment Act",
      "ecosystem rights",
    ],
  },

  // --- Bangladesh: River Legal Personhood ---
  {
    id: "bd-rights-001",
    country: "Bangladesh",
    countryCode: "BD",
    category: "Animal Rights & Legal Personhood",
    topic: "River legal personhood — Turag River ruling",
    summary:
      "Bangladesh's High Court declared all rivers as living entities with legal rights.",
    details:
      "In 2019, Bangladesh's High Court declared the Turag River a living entity with legal rights, and subsequently extended this status to all rivers in Bangladesh. The National River Conservation Commission was appointed as the legal guardian. This ruling draws from the Rights of Nature movement and creates legal personhood for natural entities. While primarily focused on waterway protection, the ruling establishes precedent for non-human legal personhood and ecosystem rights that encompasses aquatic wildlife and biodiversity.",
    lawName: "High Court Judgment (Turag River case, 2019)",
    article: "Writ Petition No. 13989/2016",
    year: 2019,
    lastAmended: 2019,
    penaltyMax: "Contempt of court; environmental restoration orders",
    tags: [
      "river personhood",
      "Turag River",
      "living entity",
      "legal guardian",
      "Rights of Nature",
      "aquatic ecosystems",
    ],
  },

  // --- South Korea: Animal Sentience Amendment ---
  {
    id: "kr-rights-001",
    country: "South Korea",
    countryCode: "KR",
    category: "Animal Rights & Legal Personhood",
    topic: "Civil Code amendment — animals are not objects",
    summary:
      "South Korea amended its Civil Code in 2022 to declare animals are not objects.",
    details:
      "South Korea amended its Civil Code in 2022 (effective 2023) to add Article 98-2 stating 'Animals are not objects' (동물은 물건이 아니다). This follows the German BGB §90a model. The amendment means animals can no longer be legally treated as mere chattels, though property rules still apply subsidiarily. Combined with the strengthened Animal Protection Act (revised 2023 with maximum penalties increased to 5 years/50 million won), this represents a major shift in Korean animal law. The amendment was driven by public outcry over dog meat and animal abuse cases.",
    lawName: "Civil Code Article 98-2 (2022 Amendment)",
    article: "Article 98-2",
    year: 2022,
    lastAmended: 2023,
    penaltyMax: "Up to 5 years imprisonment and 50 million won fine",
    tags: [
      "animals are not objects",
      "Civil Code reform",
      "sentience",
      "dog meat debate",
      "동물은 물건이 아니다",
      "property distinction",
    ],
  },

  // --- Austria: Animals are not things ---
  {
    id: "at-rights-001",
    country: "Austria",
    countryCode: "AT",
    category: "Animal Rights & Legal Personhood",
    topic: "Civil Code — animals are not things (1988 pioneer)",
    summary:
      "Austria was the first country to declare animals are not things in its Civil Code (1988).",
    details:
      "Austria pioneered the legal distinction between animals and objects with its 1988 amendment to ABGB §285a (Allgemeines Bürgerliches Gesetzbuch, BGBl. Nr. 179/1988): 'Tiere sind keine Sachen; sie werden durch besondere Gesetze geschützt' (Animals are not things; they are protected by special laws). This was the world's first civil code reform recognizing animals' non-object status, subsequently adopted by Germany (BGB §90a, 1990), Switzerland (ZGB §641a, 2003), Czech Republic (§494, 2014), France (Article 515-14, 2015), and Spain (Article 333 bis, 2021). The Bundestierschutzgesetz (TSchG, BGBl. I Nr. 118/2004) banned battery cages (2009, ahead of EU Directive 1999/74/EC), fur farming, wild animals in circuses, and dog tethering. The 2023 amendment (BGBl. I Nr. 37/2023) banned chick shredding (Kükentöten). Enforcement is by Tierschutzombudspersonen in each Bundesland and Bezirksverwaltungsbehörden. Criminal cruelty under StGB §222 carries up to 2 years imprisonment; TSchG §38 fines reach EUR 15,000. The VwGH (Verwaltungsgerichtshof) in VwGH 2013/02/0203 upheld seizure powers. Austria's pioneering §285a has been cited by the European Parliament and academic literature as the foundational model for civil code animal status reform across Europe.",
    lawName: "ABGB §285a / Bundestierschutzgesetz 2004",
    article: "§285a ABGB",
    year: 1988,
    lastAmended: 2023,
    penaltyMax: "Up to 2 years imprisonment; fines up to €15,000",
    tags: [
      "Tiere sind keine Sachen",
      "ABGB pioneer",
      "first civil code reform",
      "fur farming ban",
      "circus ban",
      "chick shredding ban",
    ],
  },

  // --- Portugal: Animal Sentience Statute ---
  {
    id: "pt-rights-001",
    country: "Portugal",
    countryCode: "PT",
    category: "Animal Rights & Legal Personhood",
    topic: "Animal sentience legal status",
    summary:
      "Portugal recognized animals as sentient beings with independent legal status in 2017.",
    details:
      "Lei n.º 8/2017, de 3 de março (Diário da República n.º 45/2017) amended the Código Civil to establish a juridical category sui generis for animals as 'seres vivos dotados de sensibilidade' (living beings endowed with sensibility) under Article 201.º-B, distinct from both pessoas (persons) and coisas (things). Article 201.º-C provides subsidiary application of property rules. Article 1305.º-A establishes positive duties of care: ensuring the animal's well-being, including access to food, water, and veterinary care. Article 1793.º-A mandates consideration of animal welfare in divorce custody proceedings. Lei n.º 69/2014 (Diário da República n.º 166/2014) criminalized animal mistreatment under Código Penal Articles 387-389, with penalties up to 2 years (extended to 3 years if death results). Lei n.º 39/2020 strengthened penalties. Enforcement is by GNR, PSP, and ICNF. The Tribunal da Relação de Évora in Acórdão de 2019 applied Article 201.º-B in interpreting welfare standards. The reform was championed by PAN (Pessoas-Animais-Natureza) party. Bullfighting (tourada) remains legal under cultural heritage exemptions (Lei n.º 92/1995, Article 3.º), creating a notable tension with the sentience framework. Portugal follows Austria's §285a model. Compared to Spain's 2021 reform, Portugal's provision preceded it by 4 years and is considered more detailed on care duties.",
    lawName: "Law No. 8/2017 (Civil Code Amendment)",
    article: "Article 1305°-A",
    year: 2017,
    lastAmended: 2020,
    penaltyMax: "Up to 2 years imprisonment for cruelty",
    tags: [
      "sentient beings",
      "Civil Code reform",
      "sensibilidade",
      "animal custody",
      "bullfighting exception",
    ],
  },

  // --- Israel: Animal Rights Landmark Cases ---
  {
    id: "il-rights-001",
    country: "Israel",
    countryCode: "IL",
    category: "Animal Rights & Legal Personhood",
    topic: "Progressive animal rights jurisprudence",
    summary:
      "Israel has some of the world's most progressive animal rights rulings and legislation.",
    details:
      "Israel's Animal Protection Law (1994) combined with progressive court rulings makes it a leader in animal rights. The Supreme Court banned force-feeding geese for foie gras (2003, Noah v. Attorney General), a world first. Israel banned cosmetic testing on animals (2007, first country), banned fur sales (2021), and banned wild animals in circuses. Tel Aviv declared itself the world's first 'vegan-friendly city.' The Knesset has actively expanded animal protections, with the 2022 amendment adding mandatory sterilization programs. Israeli courts have recognized animals' inherent right to be free from suffering.",
    lawName: "Animal Protection Law 5754-1994",
    article: "Various sections",
    year: 1994,
    lastAmended: 2022,
    penaltyMax: "Up to 4 years imprisonment for cruelty offenses",
    tags: [
      "foie gras ban",
      "cosmetic testing ban",
      "fur ban",
      "vegan city",
      "Noah v Attorney General",
      "progressive jurisprudence",
    ],
  },

  // --- Japan: Animal Welfare Management Law & Sentience ---
  {
    id: "jp-rights-001",
    country: "Japan",
    countryCode: "JP",
    category: "Animal Rights & Legal Personhood",
    topic: "Animal welfare evolution and sentience recognition",
    summary:
      "Japan's 2019 animal law reform significantly strengthened penalties and recognized animal sentience.",
    details:
      "Japan's Act on Welfare and Management of Animals was significantly reformed in 2019, increasing maximum penalties for animal killing to 5 years imprisonment (from 2 years) and cruelty to 1 year (from 6 months). The law recognizes that animals are sentient beings whose lives and bodies should be respected. The 2019 amendment introduced microchipping requirements for dogs and cats, stricter breeding standards, and a ban on the 8-week rule (no selling puppies/kittens under 56 days). While Japan has not granted legal personhood to animals, the progressive strengthening of protections reflects growing recognition of animal rights.",
    lawName: "Act on Welfare and Management of Animals (2019 Amendment)",
    article: "Articles 1, 44",
    year: 2019,
    lastAmended: 2019,
    penaltyMax: "Up to 5 years imprisonment and 5 million yen fine",
    tags: [
      "sentience recognition",
      "penalty strengthening",
      "microchipping",
      "56-day rule",
      "breeding standards",
    ],
  },

  // --- Taiwan: Animal Protection Act + Sentience ---
  {
    id: "tw-rights-001",
    country: "Taiwan",
    countryCode: "TW",
    category: "Animal Rights & Legal Personhood",
    topic: "Asia's most progressive animal protection framework",
    summary:
      "Taiwan has Asia's strongest animal protection laws with explicit sentience recognition.",
    details:
      "Taiwan's Animal Protection Act (1998, extensively amended) is considered Asia's most comprehensive animal protection law. The 2017 amendment banned the slaughter of cats and dogs for meat — a first in Asia. The 2015 amendment increased maximum penalties to 2 years imprisonment and NT$2 million fines. Taiwan recognizes animals as sentient beings in law. The Act covers companion animals, economic animals, laboratory animals, and wild animals. Taiwan also established Asia's first government-funded animal welfare fund and mandatory pet registration system. The 2021 amendment added protections for fish welfare in aquaculture.",
    lawName: "Animal Protection Act (動物保護法)",
    article: "Various",
    year: 1998,
    lastAmended: 2021,
    penaltyMax: "Up to 2 years imprisonment and NT$2 million fine",
    tags: [
      "Asia's strongest",
      "dog meat ban",
      "sentience",
      "animal welfare fund",
      "pet registration",
      "aquaculture welfare",
    ],
  },
];

export function getLawsByCountry(countryCode: string): LawEntry[] {
  return laws.filter((l) => l.countryCode === countryCode);
}

export function getLawsByCategory(category: string): LawEntry[] {
  return laws.filter((l) => l.category === category);
}

export function getCountriesByRegion(region: string): CountryInfo[] {
  return countries.filter((c) => c.region === region);
}

export function searchLaws(query: string): LawEntry[] {
  const q = query.toLowerCase();
  return laws.filter(
    (l) =>
      l.summary.toLowerCase().includes(q) ||
      l.details.toLowerCase().includes(q) ||
      l.topic.toLowerCase().includes(q) ||
      l.lawName.toLowerCase().includes(q) ||
      l.tags.some((t) => t.toLowerCase().includes(q))
  );
}
