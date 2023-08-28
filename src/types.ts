export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames: string[];
  otherAcronyms: string[];
}

export interface CountryType {
  capital: string;
  area: number;
}
