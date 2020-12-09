interface CardAsset {
  gameAbsolutePath: string;
  fullAbsolutePath: string;
}

export interface Card {
  associatedCards: [];
  associatedCardRefs: string[];
  assets: Array<CardAsset>;
  region: string;
  regionRef: string;
  attack: number;
  cost: number;
  health: number;
  description: string;
  descriptionRaw: string;
  levelupDescription: string;
  levelupDescriptionRaw: string;
  flavorText: string;
  name: string;
  cardCode: string;
  keywords: Array<string>;
  keywordRefs: Array<string>;
  spellSpeed: string;
  spellSpeedRef: string;
  rarity: string;
  rarityRef: string;
  subType: string;
  subtypes: [];
  supertype: string;
  type: string;
  collectible: boolean;
  set: string;
}
