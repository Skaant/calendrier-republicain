export const DAYS_NAME = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

type SpecialDaySource =
  | "natural"
  | "holiday"
  | "republican-month"
  | "chinese-jieqi"
  | "zodiac";

export const SPECIAL_DAYS_SOURCE_NAME: {
  [source: string]: string;
} = {
  natural: "Cycle naturel",
  holiday: "Jour férié",
  "republican-month": "Mois républicain",
  "chinese-jieqi": "Jieqi chinois",
  zodiac: "Zodiaque",
};

export const SPECIAL_DAYS: {
  [month: number]: {
    [day: number]: {
      source: SpecialDaySource;
      title: string;
    }[];
  };
} = {
  [1]: {
    [1]: [{ source: "holiday", title: "Jour de l'an" }],
    [4]: [{ source: "chinese-jieqi", title: "小寒 Froid léger" }],
    [20]: [
      { source: "republican-month", title: "Pluviôse" },
      { source: "chinese-jieqi", title: "大寒 Grand froid" },
    ],
    [21]: [{ source: "zodiac", title: "♒ Verseau" }],
  },
  [2]: {
    [4]: [{ source: "chinese-jieqi", title: "立春 Début du printemps" }],
    [19]: [
      { source: "republican-month", title: "Ventôse" },
      { source: "chinese-jieqi", title: "雨水 Pluie" },
    ],
    [20]: [{ source: "zodiac", title: "♓ Poisson" }],
  },
  [3]: {
    [4]: [{ source: "chinese-jieqi", title: "驚蟄 Réveil des insectes" }],
    [21]: [
      { source: "natural", title: "春分 Équinoxe de printemps" },
      { source: "republican-month", title: "Germinal" },
      { source: "zodiac", title: "♈ Bélier" },
    ],
  },
  [4]: {
    [5]: [{ source: "chinese-jieqi", title: "清明 Clair et brillant" }],
    [20]: [
      { source: "republican-month", title: "Floréal" },
      { source: "chinese-jieqi", title: "穀雨 Pluie pour le grain" },
    ],
    [21]: [
      { source: "holiday", title: "Pâques" },
      { source: "zodiac", title: "♉ Taureau" },
    ],
  },
  [5]: {
    [1]: [{ source: "holiday", title: "Fête du travail" }],
    [6]: [{ source: "chinese-jieqi", title: "立夏 Début de l'été" }],
    [8]: [{ source: "holiday", title: "Victoire 1945" }],
    [20]: [{ source: "republican-month", title: "Prairial" }],
    [21]: [
      { source: "chinese-jieqi", title: "小滿 Petite rondeur" },
      { source: "zodiac", title: "♊ Gémeaux" },
    ],
    [29]: [{ source: "holiday", title: "Ascension" }],
  },
  [6]: {
    [6]: [{ source: "chinese-jieqi", title: "芒種 Grain en épi" }],
    [9]: [{ source: "holiday", title: "Pentecôte" }],
    [19]: [{ source: "republican-month", title: "Messidor" }],
    [21]: [{ source: "natural", title: "夏至 Solstice d'été" }],
    [22]: [{ source: "zodiac", title: "♋ Cancer" }],
  },
  [7]: {
    [7]: [{ source: "chinese-jieqi", title: "Chaleur légère" }],
    [14]: [{ source: "holiday", title: "Fête nationale" }],
    [19]: [{ source: "republican-month", title: "Thermidor" }],
    [23]: [
      { source: "chinese-jieqi", title: "大暑 Grande chaleur" },
      { source: "zodiac", title: "♌ Lion" },
    ],
  },
  [8]: {
    [7]: [{ source: "chinese-jieqi", title: "立秋 Début de l'automne" }],
    [15]: [{ source: "holiday", title: "Assomption" }],
    [18]: [{ source: "republican-month", title: "Fructidor" }],
    [23]: [
      { source: "chinese-jieqi", title: "處暑 Arrêt des chaleurs" },
      { source: "zodiac", title: "♍ Vierge" },
    ],
  },
  [9]: {
    [8]: [{ source: "chinese-jieqi", title: "白露 Rosée blanche" }],
    [22]: [{ source: "republican-month", title: "Vendémiaire" }],
    [23]: [
      { source: "natural", title: "秋分 Équinoxe d'automne" },
      { source: "zodiac", title: "♎ Balance" },
    ],
  },
  [10]: {
    [8]: [{ source: "chinese-jieqi", title: "寒露 Rosée froide" }],
    [22]: [{ source: "republican-month", title: "Brumaire" }],
    [23]: [
      { source: "chinese-jieqi", title: "霜降 Gel possible" },
      { source: "zodiac", title: "♏Scorpion" },
    ],
  },
  [11]: {
    [1]: [{ source: "holiday", title: "Toussaint" }],
    [7]: [{ source: "chinese-jieqi", title: "立冬 Début de l'hiver" }],
    [11]: [{ source: "holiday", title: "Armistice 1918" }],
    [21]: [{ source: "republican-month", title: "Frimaire" }],
    [22]: [
      { source: "chinese-jieqi", title: "小雪 Neige faible" },
      { source: "zodiac", title: "♐ Sagittaire" },
    ],
  },
  [12]: {
    [7]: [{ source: "chinese-jieqi", title: "大雪 Neige forte" }],
    [21]: [{ source: "republican-month", title: "Nivôse" }],
    [22]: [
      { source: "natural", title: "冬至 Solstice d'hiver" },
      { source: "zodiac", title: "♏ Capricorne" },
    ],
    [25]: [{ source: "holiday", title: "Noël" }],
  },
};
