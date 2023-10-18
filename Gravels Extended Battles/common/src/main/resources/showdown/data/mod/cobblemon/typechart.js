"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var typechart_exports = {};
__export(typechart_exports, {
  TypeChart: () => TypeChart
});
module.exports = __toCommonJS(typechart_exports);
const TypeChart = {
  bug: {
    damageTaken: {
      fallout: 3,
	  Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 2,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 2,
      Fire: 1,
      Flying: 1,
      Ghost: 0,
      Grass: 2,
      Ground: 2,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 2,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 1,
	  Shadow: 1,
	  Slime: 1,
	  Sound: 2,
      Steel: 0,
      Water: 0,
	  Wind: 1
    },
    inherit: true
  },
  cosmic: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 2,
	  Crystal: 0,
      Dark: 0,
	  Digital: 1,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 2,
	  light: 2,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 1,
	  Questionmark: 0,
      Rock: 2,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 3,
      Steel: 1,
      Water: 0,
	  Wind: 3
    }
  },
  crystal: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 2,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 3,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 0,
	  Slime: 0,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 0
    }
  },
  dark: {
    damageTaken: {
      prankster: 3,
      Bug: 1,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 2,
	  Digital: 2,
      Dragon: 0,
      Electric: 0,
      Fairy: 1,
      Fighting: 1,
      Fire: 0,
      Flying: 0,
      Ghost: 2,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 1,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 3,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 1,
      Steel: 0,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  digital: {
    damageTaken: {
      Bug: 1,
	  Cosmic: 2,
	  Crystal: 0,
      Dark: 2,
	  Digital: 1,
      Dragon: 0,
      Electric: 1,
      Fairy: 2,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 2,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 2,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 2,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 1,
	  Sound: 1,
      Steel: 0,
      Water: 0,
	  Wind: 0
    }
  },
  dragon: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 1,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 1,
      Electric: 2,
      Fairy: 1,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 0,
      Ice: 1,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 2,
	  Wind: 0
    },
    inherit: true
  },
  electric: {
    damageTaken: {
      par: 3,
      thunderstorm: 3,
	  Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 1,
      Dragon: 0,
      Electric: 2,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 2,
      Ghost: 0,
      Grass: 0,
      Ground: 1,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 1,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 2,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  fairy: {
    damageTaken: {
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 2,
	  Digital: 1,
      Dragon: 3,
      Electric: 0,
      Fairy: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 0,
      Poison: 1,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 1,
      Steel: 1,
      Water: 0,
	  Wind: 0
    }
  },
  fighting: {
    damageTaken: {
      Bug: 2,
	  Cosmic: 0,
	  
      Dark: 2,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 1,
      Fighting: 0,
      Fire: 0,
      Flying: 1,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 2,
      Poison: 0,
      Psychic: 1,
	  Questionmark: 0,
      Rock: 2,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 1,
      Steel: 0,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  fire: {
    damageTaken: {
      brn: 3,
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 2,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 1,
      Ice: 2,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 2,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 1,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 2,
      Water: 1,
	  Wind: 2
    },
    inherit: true
  },
  flying: {
    damageTaken: {
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 1,
      Fairy: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 3,
      Ice: 1,
	  light: 1,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 1,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 1,
      Steel: 0,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  ghost: {
    damageTaken: {
      trapped: 3,
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 1,
	  Digital: 1,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 3,
      Fire: 0,
      Flying: 0,
      Ghost: 1,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 1,
      Normal: 3,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 2,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  grass: {
    damageTaken: {
      powder: 3,
      Bug: 1,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 2,
      Fairy: 0,
      Fighting: 0,
      Fire: 1,
      Flying: 1,
      Ghost: 0,
      Grass: 2,
      Ground: 2,
      Ice: 1,
	  light: 2,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 0,
      Poison: 1,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 2,
	  Wind: 0
    },
    inherit: true
  },
  ground: {
    damageTaken: {
      sandstorm: 3,
      thunderstorm: 3,
	  Bug: 0,
	  Cosmic: 2,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 3,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 1,
      Ground: 0,
      Ice: 1,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 2,
      Poison: 2,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 2,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 1,
	  Wind: 1
    },
    inherit: true
  },
  ice: {
    damageTaken: {
      hail: 3,
      frz: 3,
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 2,
	  light: 2,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 1,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 1,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  light: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 1,
      Dark: 1,
	  Digital: 0,
      Dragon: 2,
      Electric: 2,
      Fairy: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 2,
      Grass: 1,
      Ground: 0,
      Ice: 0,
	  light: 2,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
      Rock: 0,
	  Shadow: 2,
	  Slime: 0,
	  Sound: 0,
      Steel: 1,
      Water: 0,
	  Wind: 0
    }
  },
  normal: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 0,
      Flying: 0,
      Ghost: 3,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 0
    }
  },
  nuclear: {
    damageTaken: {
      fallout: 3,
	  Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 1,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 0,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 1,
      Ice: 1,
	  light: 0,
      Normal: 0,
	  Nuclear: 3,
	  Plastic: 0,
      Poison: 2,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 1,
      Water: 1,
	  Wind: 0
    }
  },
  plastic: {
    damageTaken: {
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 2,
      Fairy: 2,
      Fighting: 0,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 0,
      Ice: 1,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 2,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 2,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 0
    }
  },
  poison: {
    damageTaken: {
      psn: 3,
      tox: 3,
	  acidrain: 3,
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 2,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 2,
      Ground: 1,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 2,
      Poison: 2,
      Psychic: 1,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 2,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 1
    },
    inherit: true
  },
  psychic: {
    damageTaken: {
      Bug: 1,
	  Cosmic: 2,
	  Crystal: 0,
      Dark: 1,
	  Digital: 2,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 2,
      Fire: 0,
      Flying: 0,
      Ghost: 1,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 2,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 1,
      Steel: 0,
      Water: 0,
	  Wind: 0
    },
    inherit: true
  },
  questionmark: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 0,
      Fire: 0,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 0,
	  Slime: 0,
	  Sound: 0,
      Steel: 0,
      Water: 0,
	  Wind: 0
    }
  },
  rock: {
    damageTaken: {
      sandstorm: 3,
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 2,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 1,
      Fire: 2,
      Flying: 2,
      Ghost: 0,
      Grass: 1,
      Ground: 1,
      Ice: 0,
	  light: 0,
      Normal: 2,
	  Nuclear: 2,
	  Plastic: 2,
      Poison: 2,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 0,
      Steel: 1,
      Water: 1,
	  Wind: 0
    },
    inherit: true
  },
  shadow: {
    damageTaken: {
      Bug: 1,
	  Cosmic: 1,
	  Crystal: 0,
      Dark: 1,
	  Digital: 1,
      Dragon: 1,
      Electric: 1,
      Fairy: 1,
      Fighting: 1,
      Fire: 1,
      Flying: 1,
      Ghost: 1,
      Grass: 1,
      Ground: 1,
      Ice: 1,
	  light: 1,
      Normal: 1,
	  Nuclear: 1,
	  Plastic: 1,
      Poison: 1,
      Psychic: 1,
	  Questionmark: 1,
      Rock: 1,
	  Shadow: 2,
	  Slime: 1,
	  Sound: 1,
      Steel: 1,
      Water: 1,
	  Wind: 1
    }
  },
  slime: {
    damageTaken: {
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 2,
      Fire: 1,
      Flying: 0,
      Ghost: 0,
      Grass: 0,
      Ground: 2,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 1,
      Poison: 1,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 2,
	  Wind: 0
    }
  },
  sound: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 1,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 1,
      Electric: 1,
      Fairy: 2,
      Fighting: 0,
      Fire: 0,
      Flying: 2,
      Ghost: 2,
      Grass: 0,
      Ground: 0,
      Ice: 0,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 1,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 2,
	  Wind: 1
    }
  },
  steel: {
    damageTaken: {
      psn: 3,
      tox: 3,
	  acidrain: 3,
      fallout: 3,
	  sandstorm: 3,
      Bug: 2,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 2,
      Electric: 0,
      Fairy: 2,
      Fighting: 1,
      Fire: 1,
      Flying: 2,
      Ghost: 0,
      Grass: 2,
      Ground: 1,
      Ice: 2,
	  light: 0,
      Normal: 2,
	  Nuclear: 2,
	  Plastic: 0,
      Poison: 3,
      Psychic: 2,
	  Questionmark: 0,
      Rock: 2,
	  Shadow: 1,
	  Slime: 2,
	  Sound: 0,
      Steel: 2,
      Water: 0,
	  Wind: 2
    },
    inherit: true
  },
  water: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 0,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 1,
      Fairy: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 0,
      Ghost: 0,
      Grass: 1,
      Ground: 0,
      Ice: 2,
	  light: 0,
      Normal: 0,
	  Nuclear: 1,
	  Plastic: 1,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 2,
	  Sound: 0,
      Steel: 2,
      Water: 2,
	  Wind: 0
    },
    inherit: true
  },
  wind: {
    damageTaken: {
      Bug: 0,
	  Cosmic: 1,
	  Crystal: 0,
      Dark: 0,
	  Digital: 0,
      Dragon: 0,
      Electric: 0,
      Fairy: 0,
      Fighting: 0,
      Fire: 2,
      Flying: 2,
      Ghost: 0,
      Grass: 0,
      Ground: 2,
      Ice: 1,
	  light: 0,
      Normal: 0,
	  Nuclear: 0,
	  Plastic: 0,
      Poison: 0,
      Psychic: 0,
	  Questionmark: 0,
      Rock: 0,
	  Shadow: 1,
	  Slime: 0,
	  Sound: 2,
      Steel: 0,
      Water: 0,
	  Wind: 2
    }
  }
};
//# sourceMappingURL=typechart.js.map
