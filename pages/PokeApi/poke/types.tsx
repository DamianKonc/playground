export interface AbilityInterface {
  ability: { name: string; url: string };
  is_hidden: Boolean;
  slot: number;
}

export interface SinglePokemonData {
  abilities: AbilityInterface[];
  base_experience: number;
  forms: [{ name: string; url: string }];
  game_indices: [
    { game_index: number; version: { name: string; url: string } }
  ];
  height: number;
  held_items: [
    {
      item: { name: string; url: string };
      version_details: [
        { rarity: number; version: { name: string; url: string } }
      ];
    }
  ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: { name: string; url: string };
      version_group_details: [
        {
          level_learned_at: number;
          move_learn_method: { name: string; url: string };
        }
      ];
      version_group: { name: string; url: string };
    }
  ];
  name: string;
  order: number;
  past_types: [];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: [
    { base_stat: number; effort: number; stat: { name: string; url: string } }
  ];
  types: [{ slot: number; type: { name: string; url: string } }];
  weight: number;
}
