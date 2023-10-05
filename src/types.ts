export type Card = {
  name: string;
  type: string;
  color: string;
  stage: string;
  digi_type: string;
  attribute: string;
  level: number;
  play_cost: number;
  evolution_cost: number;
  cardrarity: string;
  artist: null | string;
  dp: number;
  cardnumber: string;
  maineffect: null;
  soureeffect: null | string;
  set_name: string;
  card_sets: string[];
  image_url: string;
};
