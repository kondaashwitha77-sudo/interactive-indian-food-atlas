// ─────────────────────────────────────────────
// GENERATION RECIPES DATA FOR GSAP MOTIONPATH
// Chronological Recipes at each Historical Waypoint
// Accurate and unique for every dish across the atlas regions
// ─────────────────────────────────────────────

import { Dish, getAllDishes } from "./foodData";
import {
  UNRESOLVED_IMAGE,
  epochPhoto,
  getDishPhotography,
  historicalStageImageUrl,
} from "./photography";
import {
  getDishStageHistory,
  getStageCitations,
  type StageKey,
} from "./dishStages";

// Legacy era imagery keys survive only inside the six-epoch source records
// below, which are mined for cookware, heat source and recipe detail. The
// timeline itself is now built from the FOUR primary stages in dishStages.json
// and every image it emits is that dish's own stage photograph or the neutral
// unresolved frame — never a shared era photograph.
const ERA_PHOTO: Record<string, string> = {
  ancient_grains: epochPhoto("ancient_grains", 1280),
  stone_ferment: epochPhoto("stone_ferment", 1280),
  spice_trade: epochPhoto("spice_trade", 1280),
  tawa_sizzle: epochPhoto("tawa_sizzle", 1280),
  dum_seal: epochPhoto("dum_seal", 1280),
  masala_dosa_hero: epochPhoto("masala_dosa_hero", 1280),
  biryani_royal_hero: epochPhoto("biryani_royal_hero", 1280),
  rogan_josh_hero: epochPhoto("rogan_josh_hero", 1280),
  litti_chokha_hero: epochPhoto("litti_chokha_hero", 1280),
  butter_chicken_hero: epochPhoto("butter_chicken_hero", 1280),
};


export interface GenerationWaypoint {
  generationNumber: number;
  eraTitle: string;
  yearRange: string;
  centuryLabel: string;
  headline: string;
  shortDescription: string;
  image: string;
  generationRecipe: {
    recipeName: string;
    historicalCookware: string;
    heatSource: string;
    ingredientsList: string[];
    preparationMethod: string;
    contemporaryDifference: string;
  };
  technologicalLeap: string;
  documentedCitation: string;
}

// ─────────────────────────────────────────────
// 1. MASALA DOSA (Karnataka)
// ─────────────────────────────────────────────
export const DOSA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Masala Dosa in Karnataka & the South",
    shortDescription:
      "The dosa has ancient beginnings in South India and Karnataka. A preparation named 'dosaka' is first documented in the 12th-century Sanskrit work Manasollasa, compiled by King Someshvara III of the Western Chalukya dynasty ruling northern Karnataka. In early times, dosas were thick, soft griddle-cakes cooked on clay plates using fermented black gram and rice batter. The dish evolved deeply within the temple kitchens of Udupi and Old Mysore, where natural overnight fermentation was perfected into an art.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen griddle plate (Kallu Odu) over open wood hearth",
      heatSource: "Firewood hearth and glowing embers",
      ingredientsList: [],
      preparationMethod:
        "Soaked black gram and rice stone-ground into a thick batter, rested for natural leavening, and patted onto heated clay plates greased with cold-pressed sesame oil.",
      contemporaryDifference:
        "Thick, soft, and unadorned pulse-rice griddle cakes without potatoes or modern crisping.",
    },
    technologicalLeap: "Natural wild lactic fermentation of stone-ground pulse and rice batter.",
    documentedCitation: "Western Chalukya Manasollasa (1130 CE) & Udupi temple culinary archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: soft griddle bake on clay plates / wafer-thin spiral ladle swirl on heavy cast-iron tawas\nVessel: porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa and commercial gas griddles\nFuel: firewood hearths and embers / domestic LPG gas and commercial burners\nCooking time: 4 to 5 minutes per soft cake / 60 to 90 seconds for paper-crisp golden browning\nBatter preparation: hand-grinding soaked pulses on granite stone mortars / electric wet grinders and commercial batter mills\nFilling: plain dosa with no stuffing / spiced potato-onion palya introduced by 20th-century Udupi hoteliers\nInner spread: plain ghee or no paste / fiery roasted Byadagi chilli, garlic, and roasted gram chutney (Mysore style)\nFat used: cold-pressed sesame or coconut oil / pure desi ghee and fresh churned white butter (benne)",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa",
      heatSource: "Firewood hearths / domestic LPG gas burners",
      ingredientsList: [],
      preparationMethod:
        "Transitioned from thick, soft earthen-baked cakes to wafer-thin golden crepes rolled around spiced potato palya and smeared with red Byadagi garlic chutney.",
      contemporaryDifference:
        "Cast-iron metallurgy, New World potato and chilli adoption, and 20th-century Udupi hotel innovation created the modern crisp Masala Dosa.",
    },
    technologicalLeap: "Cast-iron heat conduction enabling wafer-thin crisping and concealed spiced potato stuffing.",
    documentedCitation: "Comparative historical culinary records & Mysore-Bangalore hotel archives.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Masala Dosa Recipe: 8 Steps",
    shortDescription:
      "Sona Masuri rice, urad dal, fenugreek seeds, poha, potatoes, onions, green chillies, mustard seeds, curry leaves, pure desi ghee or butter.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Masala Dosa Recipe",
      historicalCookware: "Seasoned cast-iron flat tawa with curved ladle",
      heatSource: "Medium-high gas flame with water-sizzle testing",
      ingredientsList: [
        "Sona Masuri rice",
        "urad dal",
        "fenugreek seeds (methi)",
        "poha (flattened rice)",
        "potatoes",
        "onions",
        "green chillies",
        "mustard seeds",
        "curry leaves",
        "pure desi ghee or butter",
      ],
      preparationMethod:
        "1. Soak Sona Masuri rice, urad dal, fenugreek seeds, and poha in water for 5 hours, then grind in a wet grinder to a silky, aerated batter.\n2. Add salt, mix thoroughly with hands to introduce natural microflora, and ferment overnight in a warm spot for 8 to 12 hours.\n3. Boil potatoes until tender, peel, and coarsely hand-mash into uneven chunks.\n4. Heat oil in a pan, crackle mustard seeds, cumin, chana dal, urad dal, and curry leaves; saute sliced onions, green chillies, and ginger until translucent.\n5. Stir in turmeric, salt, mashed potatoes, and a splash of water; simmer the potato palya for 3 minutes and finish with fresh coriander.\n6. Heat a seasoned cast-iron tawa over medium-high heat, sprinkle water to test sizzle, and wipe with a lightly oiled cloth.\n7. Pour a ladleful of fermented batter in the centre and swirl smoothly in outward circular motions into a thin, even crepe.\n8. Drizzle pure ghee or butter along the edges, cook until golden crisp, spread red chutney inside, add warm potato palya, fold neatly, and serve hot with coconut chutney and sambar.",
      contemporaryDifference:
        "Numbered 8-step authentic fermented batter and iron tawa roasting method using 10 essential Karnataka ingredients.",
    },
    technologicalLeap: "Precision 8-step fermentation, potato palya seasoning, and iron-tawa crisp folding protocol.",
    documentedCitation: "Codified Karnataka regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// BISI BELE BATH (Karnataka)
// ─────────────────────────────────────────────
export const BISI_BELE_BATH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bisi Bele Bath in Karnataka & the Mysore Palace",
    shortDescription:
      "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Heavy brass uruli or tin-lined copper degchi",
      heatSource: "Hardwood and charcoal embers burning slow",
      ingredientsList: [],
      preparationMethod:
        "Short-grain rice and toor dal simmered slowly over gentle wood embers with aged country tamarind, ghee, and freshly roasted palace spice paste.",
      contemporaryDifference:
        "Royal Mysore court origin as a sacred one-pot lentil-rice offering with hand-roasted local spices and pure ghee.",
    },
    technologicalLeap: "Royal palace formulation of a complete balanced grain, pulse, spice, and ghee one-pot preparation.",
    documentedCitation: "Mysore Wodeyar court culinary chronicles & regional temple manuscripts.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: separate slow wood-fire simmering of dal and rice in open vessels / unified pressure cooking followed by rapid direct spice simmering\nVessel: heavy brass urulis and tin-lined copper degchis / modern stainless steel pressure cookers and heavy-bottom pots\nFuel: tamarind wood and charcoal hearths burning slow / domestic LPG gas stoves and induction cooktops\nCooking time: 2 to 3 hours of continuous simmering and stirring / 25 to 35 minutes in domestic pressure cookers\nSpice blending: whole spices hand-roasted on iron plates and crushed on stone grinding slabs / electric mixer-ground homemade batches or packaged spice powders\nVegetables: limited to native ash gourd, drumsticks, and raw plantains / hearty mix of carrots, French beans, green peas, and shallots\nSourness and sweetness: dark country tamarind and slow-melted palm jaggery / seedless tamarind paste and organic cane jaggery\nGarnish and serving: fresh fried cashews in pure country cow ghee / fried cashews, spicy kara boondi, and potato chips served in darshini restaurants",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy brass uruli / modern domestic pressure cooker",
      heatSource: "Charcoal hearths / domestic LPG gas and induction",
      ingredientsList: [],
      preparationMethod:
        "Transitioned from a 3-hour royal cauldron slow-cook to a streamlined one-pot pressure-cook enriched with vibrant Byadagi chillies, vegetables, and kara boondi.",
      contemporaryDifference:
        "Modern pressure cooking, multi-vegetable additions, and darshini restaurant culture popularized the royal preparation for everyday households.",
    },
    technologicalLeap: "Unified pressure cooking and Byadagi-copra spice blending preserving royal aroma in minutes.",
    documentedCitation: "Karnataka regional food surveys & commercial darshini culinary monographs.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Bisi Bele Bath Recipe: 8 Steps",
    shortDescription:
      "Sona Masuri rice, toor dal, mixed vegetables (carrots, beans, peas), tamarind extract, jaggery, Byadagi dry red chillies, kapok buds (marathi moggu), dry coconut (copra), cashew nuts, pure desi ghee.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Bisi Bele Bath Recipe",
      historicalCookware: "Heavy-bottomed pot and pressure cooker with tadka pan",
      heatSource: "Medium pressure-cook followed by low ghee simmer",
      ingredientsList: [
        "Sona Masuri rice",
        "toor dal (pigeon peas)",
        "mixed vegetables (carrots, beans, peas)",
        "tamarind extract",
        "jaggery (bella)",
        "Byadagi dry red chillies",
        "kapok buds (marathi moggu)",
        "dry coconut (copra)",
        "cashew nuts",
        "pure desi ghee",
      ],
      preparationMethod:
        "1. Rinse Sona Masuri rice and toor dal together, then pressure-cook with water and a pinch of turmeric for 4 to 5 whistles until soft and easily mashable.\n2. Dry-roast Byadagi chillies, chana dal, urad dal, coriander seeds, cumin, fenugreek, marathi moggu, and cinnamon until aromatic; add grated copra and hing, cool, and grind into a fine bisi bele bath spice powder.\n3. Boil chopped carrots, French beans, potatoes, peas, and shallots in water with salt until tender.\n4. Add thick tamarind extract, grated jaggery, and 3 tablespoons of the prepared spice powder to the cooked vegetables and simmer for 5 minutes.\n5. Lightly mash the cooked rice and dal, then combine them into the bubbling spiced vegetable broth.\n6. Adjust consistency with warm water to a smooth, pourable porridge and simmer on low heat for 7 minutes, stirring gently to prevent sticking.\n7. Heat pure desi ghee in a pan, crackle mustard seeds and curry leaves, and fry cashew nuts and broken dried chillies until golden.\n8. Pour the sizzling ghee tempering over the bisi bele bath, mix well, rest for 2 minutes, and serve piping hot topped with crisp kara boondi.",
      contemporaryDifference:
        "Numbered 8-step authentic one-pot lentil rice, spice powder roasting, and ghee tempering process using 10 essential Karnataka ingredients.",
    },
    technologicalLeap: "Streamlined 8-step pressure cook, fresh bisi bele bath podi roasting, and ghee-cashew tempering protocol.",
    documentedCitation: "Codified Karnataka regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// 2. HYDERABADI DUM BIRYANI (Telangana)
// ─────────────────────────────────────────────
export const BIRYANI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Hyderabadi Dum Biryani in the Deccan",
    shortDescription:
      "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Copper or brass handi sealed with dough",
      heatSource: "Wood and charcoal fire with live embers",
      ingredientsList: [],
      preparationMethod:
        "Raw marinated meat layered beneath part-boiled rice in a heavy pot, sealed airtight with dough, and slow-steamed (dum method) over wood and charcoal embers.",
      contemporaryDifference:
        "Developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, marrying Persian-Mughal cooking with local Deccan ingredients and tastes.",
    },
    technologicalLeap: "Kacchi dum protocol: sealed trapped steam cooking raw marinated meat with rice.",
    documentedCitation: "Asaf Jahi court kitchen records & regional food documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens\nVessel: copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers\nFuel: wood and charcoal / gas and electricity\nCooking time: several hours / under an hour in many homes\nMarinating: overnight / a few hours or less\nMeat: mutton or goat / chicken is now very common, plus vegetable versions\nFlavourings: saffron, rose water, kewra water, fresh ground spices / food colour, ready biryani masala, ready ginger-garlic paste\nTenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers",
      heatSource: "Wood and charcoal / gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens",
      contemporaryDifference:
        "Tenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
    },
    technologicalLeap: "Adaptation from royal artisan charcoal cooking to modern domestic gas and electric appliances.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Hyderabadi Dum Biryani Recipe: 8 Steps",
    shortDescription:
      "basmati rice, mutton or chicken, curd, fried onions, ginger-garlic paste, green chillies, whole spices and garam masala, mint and coriander, saffron milk, ghee.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Hyderabadi Dum Biryani Recipe",
      historicalCookware: "Heavy pot or handi with tight-fitting lid",
      heatSource: "High heat for a few minutes, then low heat for about 40 minutes (dum)",
      ingredientsList: [
        "basmati rice",
        "mutton or chicken",
        "curd",
        "fried onions",
        "ginger-garlic paste",
        "green chillies",
        "whole spices and garam masala",
        "mint and coriander",
        "saffron milk",
        "ghee",
      ],
      preparationMethod:
        "1. Marinate the meat with curd, spices, ginger-garlic paste, herbs and fried onions. Mix well and rest it (overnight for best flavour, or a few hours).\n2. Fry the onions until golden brown and crisp. Keep some aside for layering.\n3. Parboil the rice with whole spices and salt until about 70% cooked (the grain should break easily but still feel firm inside). Drain it.\n4. Layer the marinated meat at the bottom of a heavy pot, then spread the rice evenly on top.\n5. Top with fried onions, mint, coriander, saffron milk and ghee.\n6. Seal the lid tightly with dough or foil so no steam escapes.\n7. Cook on high heat for a few minutes until steam builds, then on low heat for about 40 minutes (dum).\n8. Rest for 10 minutes without opening, then mix gently from the sides and serve with raita.",
      contemporaryDifference:
        "Numbered 8-step kacchi dum process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step home kacchi dum execution protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  }, {
    generationNumber: 4,
    eraTitle: "Recipe Dum Execution",
    yearRange: "Dum Technique",
    centuryLabel: "Dum Method",
    headline: "The Kacchi Layering & Sealing Technique",
    shortDescription:
      "Layering raw marinated meat beneath parboiled rice and sealing the lid tightly with dough or foil ensures trapped steam cooks meat and elongates rice grains.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kacchi Dum Execution",
      historicalCookware: "Heavy pot with dough or foil seal",
      heatSource: "High heat briefly, then low flame dum",
      ingredientsList: [
        "Basmati rice",
        "Mutton or chicken",
        "Curd",
        "Fried onions",
        "Ginger-garlic paste",
        "Green chillies",
        "Whole spices and garam masala",
        "Mint and coriander",
        "Saffron milk",
        "Ghee",
      ],
      preparationMethod:
        "Raw marinated meat placed at base; 70% parboiled rice layered above; garnished with fried onions, mint, saffron milk, and ghee; sealed tightly with dough or foil.",
      contemporaryDifference:
        "The quintessential kacchi dum method of Hyderabad.",
    },
    technologicalLeap: "Hermetic sealing for internal steam convection.",
    documentedCitation: "Asaf Jahi royal recipe manuscripts (Nuqqal-i-Bawarchi Khana).",
  },
  {
    generationNumber: 5,
    eraTitle: "Resting and Unsealing",
    yearRange: "Finishing",
    centuryLabel: "Serving Protocol",
    headline: "Resting, Unsealing & Serving with Raita",
    shortDescription:
      "After 40 minutes on low heat, resting for 10 minutes allows juices to redistribute before unsealing, gentle mixing, and serving with raita.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Resting and Unsealing Protocol",
      historicalCookware: "Sealed pot with tight lid",
      heatSource: "Residual heat during 10-minute rest",
      ingredientsList: [
        "Steamed biryani layers",
        "Fresh raita",
        "Fried onions garnish",
      ],
      preparationMethod:
        "Rest for 10 minutes off heat, open the seal, mix gently from the sides, and serve with cool raita.",
      contemporaryDifference:
        "Preserves delicate rice grains from breaking upon opening.",
    },
    technologicalLeap: "Resting curve preventing steam collapse and grain breakage.",
    documentedCitation: "Regional food tradition & service documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hyderabadi Dum Biryani Plated & Served",
    shortDescription:
      "Served with raita and mirchi ka salan; enjoyed across Telangana and globally as the benchmark of Deccan royal cookery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Hyderabadi Dum Biryani Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served freshly cooked",
      ingredientsList: [
        "Basmati rice",
        "Mutton or chicken",
        "Curd",
        "Fried onions",
        "Saffron milk",
        "Ghee",
      ],
      preparationMethod:
        "Gently mixed and served hot with raita and mirchi ka salan.",
      contemporaryDifference:
        "Celebrated signature dish of Hyderabad and Telangana.",
    },
    technologicalLeap: "Dual-tone grain presentation over tender marinated meat.",
    documentedCitation: "National GI Tag Registry & Telangana Gastronomic Survey.",
  },
];

// ─────────────────────────────────────────────
// HYDERABADI HALEEM (Telangana)
// ─────────────────────────────────────────────
export const HALEEM_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Hyderabadi Haleem in the Deccan",
    shortDescription:
      "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Large copper or brass cauldrons (Degs) over bhatti fire",
      heatSource: "Wood and charcoal bhatti fire burning overnight",
      ingredientsList: [],
      preparationMethod:
        "Slow-simmered for 8 to 12 hours and vigorously pounded with heavy wooden pestles (ghotni) until meat and wheat merge into a smooth, cohesive porridge.",
      contemporaryDifference:
        "Introduced by Yemeni Chaush soldiers and refined in Asaf Jahi royal kitchens with fragrant Deccan spices and pure ghee.",
    },
    technologicalLeap: "Bhatti simmer and rhythmic wooden ghotni pounding extracting gelatinous collagen and wheat starches.",
    documentedCitation: "Medieval Arab culinary compendiums & Asaf Jahi court kitchen archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders\nVessel: massive heavy tinned copper cauldrons (degs/bhatti) / stainless steel pots, heavy-bottom handis, and domestic pressure cookers\nFuel: tamarind wood and charcoal bhattis burning low overnight / LPG gas stoves, induction, and commercial gas burners\nCooking time: 10 to 12 hours of overnight simmering / 1.5 to 2.5 hours in home pressure cookers\nPounding: 2 to 3 skilled cooks rhythmically beating with wooden poles (ghotnis) / home wooden whisks, potato mashers, or short pulses of electric blenders\nMeat: traditional bone-in tender goat/mutton marrow cuts slow-cooked till bones slip out / boneless mutton, chicken (now widespread in restaurants), and modern vegetarian lentil variants\nFlavourings: pure desi ghee, freshly stone-ground potli masala, rose water, and wild cinnamon / commercial packaged haleem spice blends and ready ginger-garlic paste\nGarnish & Serving: golden fried onions (birista), ghee drizzle, fresh mint, coriander, lime, and sliced almonds/cashews / similar traditional garnishes maintained across both royal feasts and modern takeaway boxes",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Massive copper bhatti cauldrons / stainless steel pots and pressure cookers",
      heatSource: "Tamarind wood and charcoal / domestic LPG gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders",
      contemporaryDifference:
        "Transition from overnight wood-fired bhatti cauldrons to rapid pressure cooking and domestic handheld blenders.",
    },
    technologicalLeap: "Mechanical and thermal evolution shortening 12-hour manual labor to domestic accessibility.",
    documentedCitation: "Gastronomic surveys and regional technology documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Hyderabadi Haleem Recipe: 8 Steps",
    shortDescription:
      "broken wheat (dalia), boneless mutton, chana and moong lentils, curd, pure desi ghee, fried onions (birista), ginger-garlic paste, whole spices and garam masala, mint and coriander, almonds and cashew nuts.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Hyderabadi Haleem Recipe",
      historicalCookware: "Heavy-bottomed pot or pressure cooker with wooden masher (ghotni)",
      heatSource: "Medium sear followed by low simmering and continuous pounding",
      ingredientsList: [
        "broken wheat (dalia)",
        "boneless mutton",
        "chana and moong lentils",
        "curd (yoghurt)",
        "pure desi ghee",
        "fried onions (birista)",
        "ginger-garlic paste",
        "whole spices and garam masala",
        "mint and coriander",
        "almonds and cashew nuts",
      ],
      preparationMethod:
        "1. Soak broken wheat and lentils (chana and moong) in water for 1 to 2 hours, then drain.\n2. Marinate the mutton with curd, ginger-garlic paste, turmeric, chilli powder, salt, and half of the garam masala for at least 1 hour.\n3. In a heavy pot or pressure cooker, heat ghee and saute whole spices (shahi jeera, cardamom, cloves, cinnamon) and a portion of fried onions until fragrant.\n4. Add the marinated meat and sear on medium-high heat, then add water and pressure-cook or slow-simmer until the meat is thoroughly tender and falling apart.\n5. Separately boil the soaked broken wheat and lentils with a pinch of turmeric and water until completely soft and mushy.\n6. Shred the cooked meat off any bones and combine the shredded meat and its rich broth into the pot of cooked wheat and lentils.\n7. Slow-simmer over low heat while vigorously mashing and pounding with a wooden masher (ghotni) for 30–40 minutes, gradually incorporating hot ghee until the mixture turns silky, elastic, and pasty.\n8. Season with remaining garam masala, mint, and coriander; ladle into warm bowls and top with hot ghee, golden fried onions, toasted cashews, and fresh lemon wedges.",
      contemporaryDifference:
        "Numbered 8-step ghotni pounding process with 10 key ingredients for kitchen-tested authentic texture.",
    },
    technologicalLeap: "Dual-cooking and emulsification combining grain starches, gelatinized meat strands, and ghee into a continuous silky matrix.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Pounding Technique",
    yearRange: "Ghotni Mastery",
    centuryLabel: "Pounding Method",
    headline: "The Wooden Ghotni Emulsification Protocol",
    shortDescription:
      "Vigorous, rhythmic mashing with heavy wooden pestles breaks meat fibers into tender silk threads while bursting wheat starches to produce the iconic stretchable, velvety texture.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Ghotni Emulsification Technique",
      historicalCookware: "Heavy cauldron with hardwood ghotni",
      heatSource: "Constant low ember heat",
      ingredientsList: [
        "Simmered broken wheat and lentils",
        "Tender shredded meat broth",
        "Warm desi ghee additions",
      ],
      preparationMethod:
        "Pound and swirl in clockwise circles for 30 to 40 minutes, adding hot ghee in streams until the spoon stands upright.",
      contemporaryDifference:
        "Manual ghotni produces authentic silky fiber threads unlike blenders that turn meat into mush.",
    },
    technologicalLeap: "Mechanical shear stress yielding natural collagen-starch emulsion.",
    documentedCitation: "Hyderabadi Master Chefs Oral Tradition & GI Guidelines.",
  },
  {
    generationNumber: 5,
    eraTitle: "Finishing & Aromatics",
    yearRange: "Royal Garnishing",
    centuryLabel: "Garnish Protocol",
    headline: "Finishing with Desi Ghee & Nizami Aromatics",
    shortDescription:
      "Final seasoning with royal garam masala, fried onions, roasted cashew nuts, and fresh mint leaves creates an intoxicating balance of rich, savory, and tangy notes.",
    image: ERA_PHOTO.modern_kitchen,
    generationRecipe: {
      recipeName: "Royal Nizami Garnish Protocol",
      historicalCookware: "Lidded serving bowl",
      heatSource: "Residual steam warmth",
      ingredientsList: [
        "Golden fried onions (birista)",
        "Slivered almonds and fried cashews",
        "Chopped mint and coriander leaves",
        "Hot ghee drizzle and lemon wedges",
      ],
      preparationMethod:
        "Ladle into deep porcelain or copper bowls, top with hot aromatic ghee, crisp birista, roasted dry fruits, fresh herbs, and a squeeze of fresh lime.",
      contemporaryDifference:
        "Traditional festive garnish providing contrast in texture against the silky smooth stew.",
    },
    technologicalLeap: "Multi-textural temperature and crunch contrast layering.",
    documentedCitation: "Chowmahalla Palace Banquet Archives.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hyderabadi Haleem Plated & Served",
    shortDescription:
      "A GI-tagged culinary wonder distributed during Ramzan across Hyderabad and shipped globally as the jewel of Telangana meat cookery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Hyderabadi Haleem Plated",
      historicalCookware: "Serving bowl",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Broken wheat (dalia)",
        "Mutton",
        "Lentils",
        "Desi ghee",
        "Fried onions",
        "Cashews & almonds",
      ],
      preparationMethod:
        "Served hot, rich and glistening with desi ghee and garnished with fresh lemon wedges.",
      contemporaryDifference:
        "GI-protected cultural emblem of Hyderabad and Telangana.",
    },
    technologicalLeap: "Standardized GI-specification composition and global delivery packaging.",
    documentedCitation: "National GI Tag Registry & Telangana Gastronomic Survey.",
  },
];

// ─────────────────────────────────────────────
// PESARATTU (Andhra Pradesh)
// ─────────────────────────────────────────────
export const PESARATTU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pesarattu in Andhra Pradesh",
    shortDescription:
      "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional stone grinder (rubburoyalu) and iron tawa",
      heatSource: "Wood-fired stoves",
      ingredientsList: [],
      preparationMethod:
        "Soaked whole green gram stone-ground without fermentation with ginger and cumin, griddled directly on an iron tawa.",
      contemporaryDifference:
        "A distinctive part of Andhra breakfast culture; cooked right after grinding with zero fermentation.",
    },
    technologicalLeap: "Unfermented wet-ground whole pulse batter for direct crisp griddling.",
    documentedCitation: "Regional food tradition; no exact date, place or creator recorded.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders\nCooking surface: Then - iron griddle | Now - non-stick and cast-iron tawas\nFuel: Then - wood-fired stoves | Now - gas and induction cooktops\nBatter preparation: Then - slow, done by hand | Now - faster with mixers\nGreen gram: Then - soaked and prepared at home | Now - whole green gram easily available in supermarkets\nToppings: Then - simple, plain Pesarattu | Now - onion, green chilli and coriander toppings are popular\nVariations: Then - the classic plain version | Now - onion, crispy and Upma Pesarattu\nChutneys: Then - fresh ginger chutney made at home | Now - restaurants also serve ginger, coconut and peanut chutneys\nThese changes describe kitchens and equipment, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional grinding stone and iron griddle / modern electric mixers and non-stick or cast-iron tawas",
      heatSource: "Wood-fired stoves / gas and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders",
      contemporaryDifference:
        "These changes describe kitchens and equipment, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Evolution from manual stone grinding and wood hearths to modern mixer-grinders, induction, and upma-stuffed restaurant variants.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pesarattu Recipe: 9 Steps",
    shortDescription:
      "whole green gram (green moong), rice (optional, for extra crispness), ginger, green chillies, cumin seeds, salt, onion, fresh coriander leaves, cooking oil or ghee, ginger chutney (Allam Pachadi) for serving.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pesarattu Recipe",
      historicalCookware: "Dosa tawa or flat griddle",
      heatSource: "Medium-high heat on tawa",
      ingredientsList: [
        "whole green gram (green moong)",
        "rice (optional, for extra crispness)",
        "ginger",
        "green chillies",
        "cumin seeds",
        "salt",
        "onion",
        "fresh coriander leaves",
        "cooking oil or ghee",
        "ginger chutney (Allam Pachadi) for serving",
      ],
      preparationMethod:
        "1. Wash and soak the green gram. - Soak in water for about 4 to 6 hours.\n2. Drain the water. - Rinse the green gram once more.\n3. Grind the batter. - Grind with ginger, green chillies, cumin and salt, adding a little water. It should be smooth and slightly thick.\n4. Prepare the toppings. - Chop onions and coriander finely and keep ready.\n5. Heat the pan. - Heat a dosa tawa and grease it lightly with oil.\n6. Spread the batter. - Pour one ladle in the centre and spread in circles into a thin dosa.\n7. Add the toppings. - Sprinkle onions and coriander and press in gently.\n8. Cook until crisp. - Add a little oil around the edges. Cook until the bottom is golden brown and the edges lift.\n9. Fold and serve. - Fold and serve hot with ginger chutney.",
      contemporaryDifference:
        "Numbered 8-step tender-simmer and ghotni pounding protocol using 10 essential ingredients.",
    },
    technologicalLeap: "Collagen-rich slow-pounding emulsification protocol.",
    documentedCitation: "National GI Registry Document No. 147 & Telangana Gastronomic Survey.",
  },
];

// ─────────────────────────────────────────────
// VADA PAV (Maharashtra)
// ─────────────────────────────────────────────
export const VADA_PAV_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Vada Pav in Mumbai, Maharashtra",
    shortDescription:
      "Before the 1960s, Vada Pav did not exist, because its two core parts belonged to different worlds. Potatoes had only recently been popularized by the British. The Portuguese pav (bread) was largely shunned by mainstream society because of religious taboos around European baking and the use of wild palm toddy for yeast fermentation.\n\nForced together in a 19th-century wood-fired kitchen, the result would have been very different: dense, sour bread, a roughly hand-mashed potato filling, and frying over smoky wood fires in heavy iron pots of cold-pressed groundnut oil. The two were eaten separately, only in private domestic or colonial settings, before Mumbai's street food culture was born.\n\nVada Pav is credited to Ashok Vaidya. In 1966, outside Dadar railway station, he combined the potato dumpling (batata vada) and the bread roll into a cheap, quick meal for Mumbai's booming working class. Mill workers rushing to their shifts needed something hot, filling and portable. He split a commercial yeast pav (now socially accepted), smeared it with fiery chutneys, including the signature dry red garlic powder, and stuffed it with a fresh batata vada.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Cast-iron kadai & wooden ladle",
      heatSource: "Wood and charcoal fire with live embers",
      ingredientsList: [],
      preparationMethod:
        "Origin in Mumbai: In 1966, outside Dadar railway station, Ashok Vaidya combined the potato dumpling (batata vada) and the bread roll into a cheap, quick meal for Mumbai's booming working class.",
      contemporaryDifference:
        "Cultural background: Before the 1960s, Vada Pav did not exist; potatoes were popularized by the British while Portuguese pav was shunned due to religious taboos around European baking and wild palm toddy fermentation.",
    },
    technologicalLeap: "Ashok Vaidya combining batata vada and Portuguese pav outside Dadar station in 1966.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: Then - simple street-side frying | Now - standardized, high-speed frying in commercial kitchens\nFuel: Then - portable kerosene stoves | Now - temperature-controlled LPG gas burners\nFrying oil: Then - mass-produced vegetable oils | Now - refined sunflower or palm oils\nPav: Then - commercial yeast pav, split and smeared with chutney | Now - pav heavily toasted on a griddle with Amul butter\nChutneys and sauces: Then - fiery chutneys, with signature dry red garlic powder hand-ground daily on stone slabs | Now - liquid cheese and Schezwan sauce as part of a fusion flavour profile\nVada: Then - a fresh batata vada | Now - baked panko-crusted potato patties are also used\nSelling: Then - sold outside Dadar railway station to mill workers | Now - classic street carts still thrive, plus fast-food chains that flash-freeze the vadas for consistency\nPackaging: Then - wrapped in old, ink-stained vernacular newspaper | Now - eco-friendly biodegradable boxes\nReputation: Then - a cheap meal that fuelled the city's political and industrial labor movements | Now - a globally recognized gourmet food and a symbol of culinary pride",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Cast-iron kadai & wooden ladle / stainless steel commercial fryers",
      heatSource: "Portable kerosene stoves / LPG gas burners",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: Then - simple street-side frying | Now - standardized, high-speed frying in commercial kitchens",
      contemporaryDifference:
        "Reputation: Then - a cheap meal that fuelled the city's political and industrial labor movements | Now - a globally recognized gourmet food and a symbol of culinary pride",
    },
    technologicalLeap: "Adaptation from street-corner kerosene carts to standardized quick-service food chains across India and the globe.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Mumbai Vada Pav Recipe: 7 Steps",
    shortDescription:
      "potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.\n\n1. Boil the potatoes, then peel and mash them roughly. (Sign: a knife goes in easily.)\n2. Make the filling: fry chopped garlic and green chillies in a little oil, add the mashed potatoes and salt, and mix well. (Sign: it smells fragrant and is dry enough to shape. Let it cool a little.)\n3. Shape the filling into round, slightly flat balls. (Sign: they hold their shape without cracking.)\n4. Make the batter: whisk gram flour with water and a pinch of salt. (Sign: thick and smooth, with no lumps, and it coats the back of a spoon.)\n5. Dip each ball in the batter and fry it in hot oil on medium heat, turning it once or twice. (Sign: golden brown and crisp all over. Drain on paper.)\n6. Make the dry garlic chutney: crush garlic with salt and red chilli powder into a coarse powder. (Sign: it looks red and crumbly and smells strong.)\n7. Slit the pav without cutting it fully, spread the chutney inside, place the hot vada and press lightly. (Sign: the vada sits snugly. For a modern twist, toast the pav on a griddle with butter first. Serve hot.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Mumbai Vada Pav Recipe",
      historicalCookware: "Deep kadai or frying pan with slotted skimmer",
      heatSource: "Medium flame / moderate oil temperature (approx 175°C / 350°F)",
      ingredientsList: [
        "Potatoes",
        "Pav (Bread rolls)",
        "Gram flour (Besan)",
        "Garlic",
        "Green chillies",
      ],
      preparationMethod:
        "Tempered Potato Mash & Precision Deep Frying. potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.",
      contemporaryDifference:
        "7. Slit the pav without cutting it fully, spread the chutney inside, place the hot vada and press lightly. (Sign: the vada sits snugly. For a modern twist, toast the pav on a griddle with butter first. Serve hot.)",
    },
    technologicalLeap: "Precision 7-step batata vada deep-frying and pav assembly protocol.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
];

// ─────────────────────────────────────────────
// PURAN POLI (Maharashtra)
// ─────────────────────────────────────────────
export const PURAN_POLI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Puran Poli in Maharashtra",
    shortDescription:
      "Puran Poli is a sweet flatbread: a puran (filling) of chana dal and jaggery stuffed into a wheat or maida cover. In the 19th century it was a labor-intensive royal delicacy and a sacred festive offering, prepared only on occasions like Holi and Gudi Padwa. Every step was a test of patience and muscle, because there were no mechanical grinders. It was served hot on fresh banana leaves, mainly to deities and upper-class households. The exact date and creator of Puran Poli are not documented with certainty. The earliest form described here is this 19th-century royal and ritual one.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Heavy brass patelya & wooden puran yantra",
      heatSource: "Slow-burning wood or cow-dung fires and an open hearth",
      ingredientsList: [],
      preparationMethod:
        "Royal and ritual origin: In the 19th century it was a labor-intensive royal delicacy and a sacred festive offering, prepared only on occasions like Holi and Gudi Padwa.",
      contemporaryDifference:
        "Served hot on fresh banana leaves, mainly to deities and upper-class households; exact date and creator are not documented with certainty.",
    },
    technologicalLeap: "Hand-kneaded elastic wheat cover stuffed with slow-boiled lentil-jaggery puran.",
    documentedCitation: "",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: 1800s - slow boiling of the dal and jaggery, then hand-roasting the poli with ghee | Mid-1900s - the recipe stayed fiercely traditional | Now - dal cooked quickly in electric pressure cookers\nVessel: 1800s - heavy brass patelya for boiling, thick iron tawa for roasting | Now - electric pressure cookers and non-stick pans\nFuel: 1800s - slow-burning wood or cow-dung fires and an open hearth, with dense smoke | Mid-1900s - portable kerosene stoves and early gas burners, so heat was easier to control | Now - induction cooktops\nDal and mashing: 1800s - harbhara dal, pressed through a hot wooden or stone puran yantra or mashed on a stone sil-batta | Mid-1900s - chana dal, with a hand-cranked metal puran yantra (food mill) | Now - packaged chana dal, blended in seconds in mixer-grinders or food processors\nFlour: 1800s - gavacha atta or maida, hand-kneaded for hours for elasticity | Mid-1900s - maida and other packaged flour, widely available | Now - Sharbati atta, with organic whole wheat or multi-grain flour replacing refined flour\nSweetener: 1800s - kala gur | Mid-1900s - commercial jaggery (pila gul) | Now - organic jaggery powder, or low-calorie sweeteners and dates in health-conscious versions\nFat: 1800s - sajuk tup, pure aromatic homemade cow ghee | Mid-1900s - vanaspati and refined oils | Now - branded cow ghee\nSpices: 1800s - velchi and jaiphal (cardamom and nutmeg) | Mid-1900s - velchi pood (cardamom powder) | Now - spice extracts\nMaking it: 1800s - hours of hand work, with the dough rolled using a wooden latre | Mid-1900s - a communal affair, with one person rolling, one stuffing and one roasting | Now - the time-consuming process is drastically shortened, with instant ready-to-eat versions\nServing: 1800s - hot on fresh banana leaves, for deities and upper-class households | Mid-1900s - stainless steel plates, for guests at family gatherings | Now - ready-to-eat Puran Polis at sweet shops, vacuum-packed versions in supermarkets, frozen exports to the diaspora\nOccasion: 1800s - only at Holi and Gudi Padwa | Mid-1900s - a cherished domestic tradition and the benchmark of a homemaker's skill in Maharashtrian, Gujarati and South Indian homes | Now - a year-round commercial product that remains the soul of festive dining",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy brass patelya & iron tawa / non-stick pans",
      heatSource: "Slow-burning wood fires / gas & induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: 1800s - slow boiling of the dal and jaggery, then hand-roasting the poli with ghee | Mid-1900s - the recipe stayed fiercely traditional | Now - dal cooked quickly in electric pressure cookers",
      contemporaryDifference:
        "Occasion: 1800s - only at Holi and Gudi Padwa | Mid-1900s - a cherished domestic tradition and the benchmark of a homemaker's skill in Maharashtrian, Gujarati and South Indian homes | Now - a year-round commercial product that remains the soul of festive dining",
    },
    technologicalLeap: "Transition from manual puran yantra stone mashing and open hearths to food processors and year-round convenience.",
    documentedCitation: "",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Puran Poli Recipe: 8 Steps",
    shortDescription:
      "wheat flour (atta or maida), chana dal, jaggery, ghee, cardamom powder, nutmeg powder, salt, oil.\n\n1. Wash and boil the chana dal until soft but not mushy. (Sign: a grain mashes easily between two fingers.)\n2. Drain the dal and cook it with jaggery on low heat, stirring often. (Sign: it thickens, leaves the sides of the pan and holds its shape on a spoon.)\n3. Mash it smooth and mix in cardamom and nutmeg. (Use a puran yantra, food mill or mixer-grinder. Sign: no lumps. Cool it fully, then roll it into smooth balls.)\n4. Make the dough: knead flour with water, a little oil and salt, and rest it. (Sign: soft and stretchy, and it springs back when pressed.)\n5. Flatten a dough ball, place a puran ball in the centre, bring the edges together and seal. (Sign: no filling is showing.)\n6. Dust lightly with flour and roll gently into a round. (Sign: even thickness, no tears, and the filling spread to the edges.)\n7. Roast on a hot tawa on medium heat, flipping once, and brush with ghee. (Sign: light brown spots on both sides.)\n8. Serve hot with a little ghee on top. (Sign: soft, with the sweet filling visible at the edge.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Puran Poli Recipe",
      historicalCookware: "Heavy iron tawa & rolling pin (latre)",
      heatSource: "Medium heat griddle with pure cow ghee",
      ingredientsList: [
        "Wheat flour",
        "Chana dal",
        "Jaggery",
        "Ghee",
        "Cardamom powder",
        "Nutmeg powder",
      ],
      preparationMethod:
        "Puran Stone-Straining & Translucent Rolling. wheat flour, chana dal, jaggery, ghee, cardamom powder, nutmeg powder.",
      contemporaryDifference:
        "8. Serve hot with a little ghee on top. (Sign: soft, with the sweet filling visible at the edge.)",
    },
    technologicalLeap: "Numbered 8-step delicate stuffing, translucent rolling, and tawa roasting with pure ghee.",
    documentedCitation: "",
  },
];

// ─────────────────────────────────────────────
// DHOKLA (Gujarat)
// ─────────────────────────────────────────────
export const DHOKLA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dhokla in Gujarat",
    shortDescription:
      "Dhokla is a steamed, fermented savoury cake from Gujarat, now eaten across India. A pulse-based dish called dukkia, seen as a precursor, is mentioned in a Jain text dated to the 11th century (sources give 1066 or 1068 CE). The word “dhokla” itself appears in the Gujarati text Varanaka Samuchaya, dated to about 1520 CE. The traditional version uses a fermented batter of rice and split chickpeas (chana dal), steamed rather than fried. The exact creator and date are not documented, so treat dukkia as a likely ancestor rather than the same dish. Khaman, made entirely from chickpea batter, is a related but separate preparation.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Pot with a steaming rack or plate",
      heatSource: "Traditional hearth fire (wood or charcoal)",
      ingredientsList: [],
      preparationMethod:
        "Origin in Gujarat: rice and chana dal soaked and ground, fermented, then steamed in slabs.",
      contemporaryDifference:
        "Cooking method: steaming, not frying, with fermentation giving the sour taste and sponge.",
    },
    technologicalLeap: "Fermenting combined rice and pulse batter and steaming in aerated slabs rather than frying.",
    documentedCitation:
      "Wikipedia, “Dhokla”; K. T. Achaya, A Historical Dictionary of Indian Food; Knocksense (Ahmedabad), “Steaming through centuries”.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Batter: Then - rice and chana dal soaked and ground, or rice flour and besan mixed 2:1 | Now - besan-based instant mixes, with ready-made dhokla flour sold in shops\nFermentation: Then - overnight, with curd | Now - skipped; fruit salt (Eno) or baking soda raises it in minutes\nCooking time: Then - overnight prep plus steaming | Now - about 30 minutes in many homes\nVessel: Then - pot with a steaming plate | Now - idli stand, steamer, pressure cooker without the whistle, microwave or electric cooker\nFuel: Then - wood or charcoal | Now - gas and electricity\nVarieties: Then - fermented rice-and-gram dhokla | Now - khaman, nylon, rava, sandwich and other dhokla\nWhere eaten: Then - home, as a snack or breakfast | Now - sweet and farsan shops, restaurants, packaged and instant mixes\nScale: Then - household | Now - Ahmedabad was reported to consume about 10,000 kg of dhokla daily (2018)",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Pot with a steaming plate → idli stand, steamer or pressure cooker",
      heatSource: "Wood and charcoal → gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Overnight fermented batter → instant batter raised with fruit salt",
      contemporaryDifference:
        "Leavening: overnight curd fermentation / fruit salt or baking soda in minutes",
    },
    technologicalLeap: "Transition from overnight wild curd fermentation to instant aeration using fruit salt and modern commercial steaming.",
    documentedCitation:
      "Wikipedia, “Dhokla”; Knocksense; K. T. Achaya.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dhokla Recipe: 8 Steps",
    shortDescription:
      "besan (gram flour), curd, ginger–green chilli paste, turmeric, salt, sugar, lemon juice, fruit salt (Eno), oil with mustard seeds, curry leaves and coriander.\n\n1. Mix besan, curd, ginger–green chilli paste, turmeric, salt, sugar and lemon juice with water into a smooth, pourable batter. Rest it for about 10 minutes.\n2. Heat water in a steamer and grease a tray with oil.\n3. Add fruit salt to the batter just before cooking and stir gently, once, until it froths.\n4. Pour the batter into the greased tray straight away.\n5. Steam on medium heat for about 15 minutes, until a skewer comes out clean.\n6. Let it cool slightly, then cut into squares.\n7. Heat oil, crackle mustard seeds, add green chillies and curry leaves, then pour in a little water and sugar. Pour this tempering over the dhokla.\n8. Garnish with coriander and grated coconut and serve with green chutney and fried chillies.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Dhokla Recipe",
      historicalCookware: "Steamer or idli stand with a greased tray",
      heatSource: "Medium flame for about 15 minutes",
      ingredientsList: [
        "Besan (gram flour)",
        "Curd",
        "Ginger–green chilli paste",
        "Turmeric",
        "Salt",
        "Sugar",
        "Lemon juice",
        "Fruit salt (Eno)",
        "Oil with mustard seeds",
        "Curry leaves and coriander",
      ],
      preparationMethod:
        "Instant Khaman Layering & Tempering (Vaghar). Batter, steam, cut, temper.",
      contemporaryDifference:
        "8. Garnish with coriander and coconut; serve with chutney.",
    },
    technologicalLeap: "Instant Khaman aeration, steam vapor lift, and sweet-sour tempering (vaghar).",
    documentedCitation:
      "Wikipedia, “Dhokla”; K. T. Achaya, A Historical Dictionary of Indian Food; Knocksense.",
  },
];

// ─────────────────────────────────────────────
// UNDHIYU (Gujarat)
// ─────────────────────────────────────────────
export const UNDHIYU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Undhiyu in Gujarat",
    shortDescription:
      "Undhiyu (also spelled undhiyo or oondhiya) is a mixed winter-vegetable dish of Gujarat, closely tied to Surat. Its name comes from the Gujarati word undhu, \"upside down\", because the pot was traditionally buried upside down with fire on top. One account says it evolved from umbadiyo, a southern Gujarat dish cooked in a buried pit; this is a \"said to\" claim, not documented fact. Surti papdi (flat green beans) is its base, and it is cooked from November to February, when its vegetables are in season. It is the dish most associated with Uttarayan, the kite-flying harvest festival. No creator or date is documented.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (matlu or matla), coated with mud and sealed",
      heatSource: "Pit in the ground with lit charcoal or embers layered over the upturned pot",
      ingredientsList: [],
      preparationMethod:
        "Origin in Gujarat: vegetables and spice mix packed in the pot with no water, buried upside down, and cooked in their own juices for about 3 to 4 hours.",
      contemporaryDifference:
        "Cooking method: slow indirect heat from above, giving a smoky flavour.",
    },
    technologicalLeap: "Burying mud-sealed earthen pots upside down under charcoal pit embers with no water.",
    documentedCitation:
      "Harper's Bazaar India, “Decoding the many layers and flavours of undhiyo”; Knocksense (Ahmedabad), traditional preparation of undhiyu; Tarla Dalal, Surti undhiyu.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Undhiyu moved from a buried earthen pot cooked for hours over charcoal to gas stoves, pressure cookers and restaurant reinventions, while village kitchens still make the matla version.\n\nVessel: Then - Sealed earthen pot (matlu or matla), coated with mud | Now - Large vessels, pressure cookers and non-stick pans\nHeat source: Then - Pit with charcoal or embers on top | Now - Gas stove\nCooking time: Then - About 3 to 4 hours | Now - Two pressure-cooker whistles, then a short finish on low heat\nWater: Then - None; vegetables cook in their own juices | Now - A little hot water added (about 2 cups in one recipe)\nFlavour: Then - Smoky, from indirect heat | Now - Fresh green masala; less smoke\nOil: Then - More oil in the traditional method | Now - Pressure-cooker version uses less oil and can turn dry\nRegional styles: Then - Village matla undhiyo | Now - Surat (garlic-heavy), Ahmedabad (spicier, oilier), Kathiyawadi (spices only, no green masala)\nReinventions: Then - Home and festival dish | Now - Restaurants offer a baked oil-free version, a Jain version and an undhiyo okonomiyaki",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Sealed earthen pot → pressure cooker and large pan",
      heatSource: "Charcoal pit → gas stove",
      ingredientsList: [],
      preparationMethod:
        "Buried upside-down slow cook → pressure cook, then finish with muthiya and banana",
      contemporaryDifference:
        "Cooking time: 3 to 4 hours in the pit / about 2 whistles plus a short finish",
    },
    technologicalLeap: "Transition from subterranean earthen pit roasting to modern two-whistle pressure cooking and non-stick pans.",
    documentedCitation:
      "Harper's Bazaar India; Knocksense; Tarla Dalal.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Undhiyu Recipe: 8 Steps",
    shortDescription:
      "Surti papdi, purple yam and yam, baby potatoes, raw banana, small black brinjals, fresh toovar seeds, muthiya (fenugreek dumplings), coconut-coriander green masala with green garlic, ginger–green chilli paste, and oil with carom seeds and asafoetida.\n\n1. Make the muthiya: squeeze salted chopped methi leaves, mix with wheat flour, besan, ginger–green chilli paste, sugar, turmeric, chilli powder and oil into a soft dough. Shape 18 to 20 pieces and deep fry on medium heat until golden. They can be made a day ahead.\n2. Mix the green masala by hand: grated coconut, coriander, green garlic, coriander-cumin powder, ginger–green chilli paste, chilli powder, sugar, lemon juice and salt. It should taste spicy and sweet.\n3. Slit the baby potatoes, brinjals and raw banana without separating the segments, and stuff them with about half the masala.\n4. Combine the surti papdi, purple yam, yam and toovar seeds with the remaining masala. Rest for 8 to 10 minutes.\n5. Heat oil in a pressure cooker, add carom seeds, asafoetida and a pinch of soda bicarbonate, then add the stuffed potatoes and brinjals, followed by the marinated vegetables.\n6. Add salt and about 2 cups hot water, mix gently and pressure cook on high for 2 whistles. Let the steam release before opening.\n7. Move to a large non-stick pan, add the stuffed bananas and muthiya, and cook on low heat, stirring gently, until the bananas are tender.\n8. Serve hot, garnished with coriander, with poori and shrikhand.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Undhiyu Recipe",
      historicalCookware: "Pressure cooker, then a large non-stick pan",
      heatSource: "High heat for 2 whistles, then low flame to finish",
      ingredientsList: [
        "Surti papdi",
        "Purple yam and yam",
        "Baby potatoes",
        "Raw banana",
        "Small black brinjals",
        "Fresh toovar seeds",
        "Muthiya (fenugreek dumplings)",
        "Coconut-coriander green masala with green garlic",
        "Ginger–green chilli paste",
        "Oil with carom seeds and asafoetida",
      ],
      preparationMethod:
        "Stuffed-vegetable layering and pressure cook, finished with fried muthiya.",
      contemporaryDifference:
        "8. Serve hot with poori and shrikhand.",
    },
    technologicalLeap: "Layered pressure cooking of tender stuffed winter vegetables finished with crispy methi muthias.",
    documentedCitation:
      "Harper's Bazaar India; Knocksense; Tarla Dalal.",
  },
];

// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// INDORI POHA (Madhya Pradesh)
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// DAL BAATI CHURMA (Rajasthan)
// ─────────────────────────────────────────────
export const DAL_BAATI_CHURMA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dal Baati Churma in Mewar, Rajasthan",
    shortDescription:
      "Dal baati churma is a traditional Rajasthani meal made of three parts: baati (baked wheat balls), dal (lentils) and churma (a sweet crumble). Popular stories link the baati to the time of Bappa Rawal, founder of the Mewar kingdom, when it was a practical wartime meal for soldiers. Baati was first eaten with ghee and curd. According to the story, dal (panchmel, a five-lentil dal) came later and the pairing became popular. The story names the Gupta-era traders; do not state this as proven history. Folklore says the churma was found by accident, when a cook of the Guhilot clan of Mewar poured sugarcane juice on baatis. These are traditional stories and folklore. The exact date and origin are not documented. State this clearly. It is linked to festivals such as Makar Sankranti and Diwali (in the Dhundhand region) and to weddings and celebrations.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Open-hearth pit or earthen embers",
      heatSource: "Sun-heated sand or wood-and-dung campfire embers",
      ingredientsList: [],
      preparationMethod:
        "Wheat dough balls baked until hard, then dressed with ghee and eaten with curd or buttermilk.",
      contemporaryDifference:
        "Wartime soldiers' ration evolved into celebratory regional feast.",
    },
    technologicalLeap: "Sand and open-hearth radiative baking of leavening-free wheat balls for wartime durability.",
    documentedCitation:
      "Homegrown, “Dal Baati Churma: The Origin Of The Iconic Rajasthani Dish”; The Better India; Wikipedia; Whisk Affair.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: baked on open fire, coals or embers / oven, gas tandoor, appe pan or pressure cooker\nBaati dough: unsalted wheat, ghee and milk, coarse wheat / wheat flour with semolina, salt, ajwain and sometimes baking soda or powder\nPairing: baati eaten with ghee, curd or buttermilk / baati with panchmel dal, churma, chutney, onions and chaas\nDal: added later to the baati meal (story) / panchmel dal (five lentils) is the standard partner\nChurma: sweetened, crushed baati (folklore: sugarcane juice) / crushed or separately made dough with ghee, powdered sugar or jaggery, nuts and cardamom\nOccasion: wartime food for soldiers (story) / festival, wedding and special-occasion meal",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Open fire embers → gas tandoor, baati oven, appe pan or pressure cooker",
      heatSource: "Wood and cow-dung embers → LPG gas and electric ovens",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: baked on open fire, coals or embers / oven, gas tandoor, appe pan or pressure cooker",
      contemporaryDifference:
        "Wartime survival bread → grand royal celebratory triad with Panchmel dal and sweet churma",
    },
    technologicalLeap: "Evolution from desert sand-baking to codified royal thali assembly with multi-grain dal and caramelized churma.",
    documentedCitation:
      "Homegrown; The Better India; Wikipedia; Whisk Affair.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dal Baati Churma Recipe: 8 Steps",
    shortDescription:
      "Key ingredients: whole wheat flour, semolina, ghee, panchmel dal (five lentils), onion, tomato, garlic, cumin and mustard seeds, powdered sugar, almonds and cardamom.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Dal Baati Churma Recipe",
      historicalCookware: "Gas tandoor, baati oven, and heavy pressure cooker",
      heatSource: "Medium heat baking & sizzling desi ghee tadka",
      ingredientsList: [
        "whole wheat flour",
        "semolina",
        "ghee",
        "panchmel dal (five lentils)",
        "onion",
        "tomato",
        "garlic",
        "cumin and mustard seeds",
        "powdered sugar",
        "almonds and cardamom",
      ],
      preparationMethod:
        "1. Knead a stiff dough with wheat flour, semolina, ghee, salt and ajwain. Add water slowly. Rest it for 30 minutes.\n2. Wash and boil the panchmel dal until soft. Cook it with turmeric and salt.\n3. Make the dal tadka: heat ghee, add cumin, garlic, onion and tomato. Cook until soft, then mix into the dal.\n4. Shape the dough into round balls. Press a small dent in the centre of each.\n5. Bake the baatis in an oven, tandoor or covered pan. Turn them now and then until golden brown and cracked on top.\n6. Dip or brush each hot baati in ghee. Keep some baatis aside for churma.\n7. Crush the kept baatis into coarse crumbs. Mix with ghee, powdered sugar, chopped almonds and cardamom.\n8. Break a baati, pour hot dal over it and add more ghee. Serve with churma, onions and chaas.",
      contemporaryDifference:
        "Triad assembly: crisp golden baati, piping hot tempered Panchmel dal, and fragrant cardamom churma.",
    },
    technologicalLeap: "Perfected triple-component culinary balance of ghee-soaked crust, earthy protein stew, and sweet grain crumble.",
    documentedCitation:
      "Traditional Rajasthani culinary practice and codified thali recipes.",
  },
];

// ─────────────────────────────────────────────
// LAAL MAAS (Rajasthan)
// ─────────────────────────────────────────────
export const LAAL_MAAS_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Laal Maas in Rajasthan",
    shortDescription:
      "\"Laal\" means red and \"maas\" means meat. It is a fiery red meat curry from Rajasthan, also called Ratto Maas. It is linked to the Rajput royalty and their hunting trips. The popular story says it was first made with game such as wild boar, deer or jungle fowl, and that chillies were used to hide the gamey smell. The red colour and heat are linked to the Mathania chilli from Mathania near Jodhpur. The details are disputed. Some chefs say it was always a mutton dish made in royal kitchens by the khansamas (royal cooks), not on hunts. Some say each region used its own local chilli, not only Mathania. State this clearly and do not pick a side as fact. Traditional laal maas uses curd or buttermilk for tang, not tomatoes (many chefs say tomato versions are a later change).",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.17.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Camp pot or earthen pot",
      heatSource: "Open wood fire in the hunting camp",
      ingredientsList: [],
      preparationMethod:
        "Game meat marinated with garlic, chillies and curd, cooked slowly over a wood fire.",
      contemporaryDifference:
        "Traditional hunting camp game curry masking gamey aroma with fiery local chillies.",
    },
    technologicalLeap: "Hunting camp braising of wild game with dense garlic, yoghurt, and high concentrations of Mathania chillies.",
    documentedCitation:
      "The National, “The story behind laal maas”; The Better India, laal maas history and recipe; Wikipedia, “Laal maas”.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Meat: wild boar, deer, jungle fowl and rabbit / mutton or lamb, since hunting is banned\nChilli: Mathania chilli, or the local variety / Mathania where available, otherwise Kashmiri or other red chillies\nHeat: reported to be much hotter in old versions / milder in many modern versions\nCooking method: slow cooking over fire in hunting camps and desert pits / handi or heavy pot on the stove, or pressure cooker\nCooking fat: ghee or mustard oil (wild boar fat was prized in hunting kitchens) / ghee or mustard oil\nSmoky flavour: cooked over fire / dhungar - smoking the finished curry with live coal, ghee and cloves\nWho made it: royal khansamas / homes and restaurants across Rajasthan\nServed with: bread and rice / bajra roti, rice or paratha",
    image: "/images/dishes/laal-maas-1.png",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Camp pot or earthen pot → heavy copper handi or brass lagan",
      heatSource: "Camp wood fire → low flame gas stove with Dhungar charcoal smoke",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow cooking over fire in hunting camps and desert pits / handi or heavy pot on the stove, or pressure cooker",
      contemporaryDifference:
        "Rustic royal hunt game braise → refined scarlet royal mutton curry with rich ghee and smoky aroma",
    },
    technologicalLeap: "Transition from campfire wild game braising to slow-braised tender goat meat finished with charcoal Dhungar infuser.",
    documentedCitation:
      "The National; The Better India; Wikipedia.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Laal Maas Recipe: 8 Steps",
    shortDescription:
      "Key ingredients: mutton on the bone, Mathania (or Kashmiri) dried red chillies, garlic, ginger, onions, curd, ghee, whole spices (cloves, cardamom, cinnamon), coriander and turmeric powder, a small piece of charcoal.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.17.jpeg",
    generationRecipe: {
      recipeName: "Laal Maas Recipe",
      historicalCookware: "Heavy-bottomed handi or lagan and small katori for Dhungar",
      heatSource: "Medium flame slow-braise & red-hot charcoal smoke",
      ingredientsList: [
        "mutton on the bone",
        "Mathania (or Kashmiri) dried red chillies",
        "garlic",
        "ginger",
        "onions",
        "curd",
        "ghee",
        "whole spices (cloves, cardamom, cinnamon)",
        "coriander and turmeric powder",
        "a small piece of charcoal",
      ],
      preparationMethod:
        "1. Soak the dried chillies in hot water. Grind them to a smooth red paste.\n2. Mix the mutton with curd, ginger-garlic paste, some chilli paste, coriander and turmeric. Rest for at least 1 hour.\n3. Heat ghee, add the whole spices and sliced onions. Fry until the onions are golden.\n4. Add the marinated mutton. Cook on high heat for a few minutes until the meat changes colour.\n5. Add the rest of the chilli paste and salt. Cook on low heat until the ghee separates from the masala.\n6. Add a little water and cover. Cook on low heat until the mutton is soft. The time depends on the meat.\n7. For the smoky taste (dhungar), place a hot charcoal piece in a small steel bowl in the centre. Add cloves and ghee and cover for about 3 minutes.\n8. Remove the bowl and stir. Rest for a few minutes. Serve with bajra roti, rice or paratha.",
      contemporaryDifference:
        "Intense scarlet appearance, rich ghee release, and aromatic clove-charcoal smoke layer.",
    },
    technologicalLeap: "Mastery of fat-soluble carotenoid extraction from Mathania peppers combined with closed-lid volatile charcoal smoke infusion.",
    documentedCitation:
      "Traditional Rajasthani royal kitchen practice and codified recipes.",
  },
];

// ─────────────────────────────────────────────
// GHEWAR (Rajasthan)
// ─────────────────────────────────────────────
export const GHEWAR_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Ghewar in Rajasthan",
    shortDescription:
      "Ghewar is a crisp, honeycomb-textured disc-shaped sweet, soaked in sugar syrup and often topped with rabri. It is associated with Rajasthan, and many sources trace it to Jaipur and royal kitchens. It is linked to the monsoon festivals Teej, Raksha Bandhan and Gangaur. It is tied to the custom of sinjhara, where sweets and gifts are sent to married daughters before Teej. The exact origin, date and creator are not documented. Some stories name other places or periods. State this clearly.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.42.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Deep frying vessel or special ring mould",
      heatSource: "Traditional wood or coal hearth",
      ingredientsList: [],
      preparationMethod:
        "Thin flour-and-ghee batter poured into hot ghee in concentric rings, forming a honeycomb disc soaked in sugar syrup.",
      contemporaryDifference:
        "Traditional Teej and Raksha Bandhan monsoon festival sweet associated with Jaipur royal sweet-makers.",
    },
    technologicalLeap: "Concentric ring pouring of cold emulsion into piping hot ghee creating porous honeycomb structure.",
    documentedCitation: "Regional food tradition & festival confectionery documentation of Rajasthan.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Season: made mainly for monsoon festivals / sold through the year, and for Diwali, Holi and weddings\nSkill and tools: skilled sweet-makers (halwais) and a special mould / home recipes with a mould, a metal ring, or no mould\nFrying fat: ghee / ghee or oil\nVarieties: plain ghewar with syrup / mawa, malai, rabri and paneer ghewar\nToppings: sugar syrup / rabri, nuts, saffron and silver leaf\nGifting: sinjhara gifts at Teej and Raksha Bandhan / boxes from sweet shops, still exchanged at Teej",
    image: "/images/dishes/ghewar-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Special halwai moulds / Domestic metal rings or moulds",
      heatSource: "Bhatti hearth / Modern domestic gas stoves",
      ingredientsList: [],
      preparationMethod:
        "Frying fat: ghee / ghee or oil",
      contemporaryDifference:
        "Evolution from seasonal monsoon festival halwai preparation to year-round confectionery and rabri varieties.",
    },
    technologicalLeap: "Adaptation to modern home ring moulds and diverse dairy toppings including rabri and malai.",
    documentedCitation: "Comparative sweet-making documentation across Rajasthan.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Ghewar Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: refined flour (maida), ghee, chilled milk, ice-cold water, ice cubes, sugar, cardamom powder, saffron, rabri, chopped pistachios.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.42.jpeg",
    generationRecipe: {
      recipeName: "Ghewar Recipe",
      historicalCookware: "Tall narrow pan with metal ring mould",
      heatSource: "Medium-high heat for frying; gentle heat for one-string syrup",
      ingredientsList: [
        "refined flour (maida)",
        "ghee",
        "chilled milk",
        "ice-cold water",
        "ice cubes",
        "sugar",
        "cardamom powder",
        "saffron",
        "rabri",
        "chopped pistachios",
      ],
      preparationMethod:
        "1. Rub cold ghee with ice cubes until it turns white and creamy. Remove the ice.\n2. Add maida slowly with chilled milk and ice-cold water. Whisk to a smooth, thin, pouring batter and keep it cold.\n3. Boil sugar, water, cardamom and saffron to a one-string syrup. Keep it lukewarm.\n4. Heat ghee or oil in a tall, narrow pan. Place the mould or metal ring in it.\n5. Pour the batter in a thin stream into the centre of the mould. Pour in small batches so a lacy honeycomb forms.\n6. Fry until golden and crisp. Lift it out and drain.\n7. Dip briefly in lukewarm syrup or pour a little syrup over it.\n8. Top with rabri, pistachios and saffron. Serve.",
      contemporaryDifference:
        "Crisp honeycomb disc soaked in saffron syrup and garnished with fresh rabri and pistachios.",
    },
    technologicalLeap: "Ice-rubbed ghee fat crystallization yielding micro-droplet batter suspension for crisp lacy expansion.",
    documentedCitation: "Traditional Rajasthani sweet-making practice and codified recipes.",
  },
];

// ─────────────────────────────────────────────
// GOAN FISH CURRY (Goa)
// ─────────────────────────────────────────────
export const GOAN_FISH_CURRY_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Goan Fish Curry in Coastal Goa",
    shortDescription:
      "Goan fish curry is a daily staple of coastal Goan homes. Fish and rice are the base of Goan food. Goa was under Portuguese rule from 1510 to 1961. The Portuguese brought new ingredients, including the chilli, which now defines much of Goan cooking. The dish blends local Konkan ingredients (coconut, kokum, fresh local fish) with Portuguese-era influence on spices and chillies. The exact date and creator of the curry are not documented. It grew out of everyday home and fishing-community cooking, not from one known inventor. Hindu and Catholic Goan households each have their own versions. Hindu homes call the fish curry \"humann\" or \"ambot\" (sour). It is a coconut-based curry. Kashmiri chilli gives the red-orange colour. Kokum or tamarind gives the sourness.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.33.36.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (kundlem) or clay pot",
      heatSource: "Traditional wood-fired hearth",
      ingredientsList: [],
      preparationMethod:
        "Fresh coastal fish simmered gently with ground fresh coconut, indigenous kokum or tamarind, and aromatic spices over an open hearth.",
      contemporaryDifference:
        "Centuries of coastal Konkan culinary practice fused with Portuguese-era spice and chilli introductions.",
    },
    technologicalLeap: "Stone-ground coconut emulsion and gentle clay-pot poaching of fresh coastal catch.",
    documentedCitation: "Regional Goan culinary history and coastal gastronomic records.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Heat and colour: black pepper and local spices, then chillies arrived with the Portuguese / Kashmiri chilli is now the main chilli for colour with mild heat\nSouring agent: kokum / tamarind paste or ready tamarind concentrate (kokum still used)\nCoconut: freshly grated and ground coconut / canned or tetra-pack coconut milk, also coconut cream\nMasala: spices ground fresh by hand / mixer-grinder, and ready chilli and masala powders\nFish: local catch such as kingfish, pomfret, mackerel / any white fish, including cod, tilapia, salmon, pollock\nCooking time: slow home simmer / a quick curry, ready in about 20-30 minutes\nServing: steamed rice and Goan bread (poi) / still rice and pav or poi, and also served at restaurants and fish thali spots",
    image: "/images/dishes/goan-fish-curry-stage-3.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pot / modern stainless steel and non-stick cookware",
      heatSource: "Firewood hearth / domestic LPG gas and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking time: slow home simmer / a quick curry, ready in about 20-30 minutes",
      contemporaryDifference:
        "Transition from hand stone grinding and local fresh catch to mixer-grinders, packaged coconut milk, and global fish varieties.",
    },
    technologicalLeap: "Adaptation to modern electric wet grinding, commercial paste packaging, and restaurant thali service.",
    documentedCitation: "Comparative Goan food documentation and oral culinary traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Goan Fish Curry Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: fresh fish (kingfish, pomfret or mackerel), grated coconut, dried Kashmiri red chillies, coriander seeds, cumin seeds, turmeric, tamarind or kokum, onion, garlic, coconut oil.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.33.36.jpeg",
    generationRecipe: {
      recipeName: "Goan Fish Curry Recipe",
      historicalCookware: "Heavy pot or deep pan",
      heatSource: "Medium heat to fry masala, then gentle low simmer for 5-8 minutes",
      ingredientsList: [
        "fresh fish (kingfish, pomfret or mackerel)",
        "grated coconut",
        "dried Kashmiri red chillies",
        "coriander seeds",
        "cumin seeds",
        "turmeric",
        "tamarind or kokum",
        "onion",
        "garlic",
        "coconut oil",
      ],
      preparationMethod:
        "1. Marinate the fish pieces with salt, turmeric and a little tamarind or lemon. Keep aside for 15-20 minutes.\n2. Grind the coconut, dried red chillies, coriander seeds, cumin and garlic with a little water. Grind to a smooth, thin paste.\n3. Heat coconut oil and fry the sliced onions until soft and golden.\n4. Add the ground paste and fry on medium heat. Stir until it smells fragrant and the raw smell is gone.\n5. Add water and the tamarind or kokum. Stir and bring to a gentle boil.\n6. Simmer for 8-10 minutes so the flavours join. The gravy should be bright orange-red and smooth.\n7. Add the fish and cook gently on low heat for 5-8 minutes. Do not stir hard. The fish is done when it turns opaque and flakes easily.\n8. Switch off the heat and rest for 5 minutes. Serve hot with steamed rice or Goan poi.",
      contemporaryDifference:
        "Precise 8-step home method balancing rich coconut gravy, tart kokum/tamarind, and gently poached fish.",
    },
    technologicalLeap: "Balanced two-phase cooking: aromatic ground paste reduction followed by gentle low-temperature fish poaching.",
    documentedCitation: "Codified Goan regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// PORK VINDALOO (Goa)
// ─────────────────────────────────────────────
export const PORK_VINDALOO_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pork Vindaloo in Coastal Goa",
    shortDescription:
      "Vindaloo comes from the Portuguese dish \"carne de vinha d'alhos\" (meat in wine/wine vinegar and garlic), which came to Goa with the Portuguese. The name \"vindaloo\" is a changed form of \"vinha d'alhos\". It has nothing to do with \"aloo\" (potato). In Portugal (Madeira and the Azores) the marinade used wine or wine vinegar. In Goa, cooks adapted it with local palm (coconut toddy) vinegar and added chillies and spices, and it became a Goan dish of its own. It is a Goan Catholic festive dish, made at Christmas, New Year and Easter. It is traditionally made with pork. The marinade was also a way to keep meat from spoiling on long sea voyages. The exact date and the cook who first made it are not documented. Food writers disagree on details, such as whether vinegar was already known in India. Traditional Goan vindaloo is tangy and mildly spicy, with deep red colour from Kashmiri-type chillies. It is different from the very hot British curry-house \"vindaloo\".",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.34.14.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (kundlem) or heavy copper pot",
      heatSource: "Traditional wood-fired hearth",
      ingredientsList: [],
      preparationMethod:
        "Pork marinated in local palm toddy vinegar with garlic and native Konkan spices, braised slowly in its own rendered fat.",
      contemporaryDifference:
        "Indo-Portuguese seafaring preservation technique transformed into a celebratory Goan Catholic staple.",
    },
    technologicalLeap: "Acid-cure marination using fermented palm toddy vinegar combined with slow copper-pot braising.",
    documentedCitation: "Regional Goan culinary writing and Indo-Portuguese gastronomic documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Marinade liquid: wine or wine vinegar (Portugal/Madeira) / palm toddy vinegar in Goa, white or malt vinegar in many kitchens today\nPurpose: keeping meat from spoiling on sea voyages / a festive, flavour-first dish for Christmas and Easter\nChilli: mild local chillies for colour (Bedige/Byadgi type) / Kashmiri chilli, now common for deep red colour with mild heat\nSpice base: garlic, pepper, turmeric and cloves added to the Portuguese idea / a thick masala of chillies, garlic, ginger, cumin, pepper, cinnamon and cloves\nGrinding: mortar and pestle or stone / electric blender or grinder\nCooking style: meat cooked in vinegar and garlic liquid / seared, then simmered slowly until tender and the oil separates\nMeat: pork was traditional and standard / chicken, beef, lamb and vegetarian adaptations now common\nHeat level: balanced tangy-spicy Goan festive profile / often made extremely fiery outside India, especially in the UK\nServed with: Goan sannas, crusty poi or steamed rice / still eaten with sannas or poi at festivals, and with rice, naan or rotis in restaurants",
    image: "/images/dishes/pork-vindaloo-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy copper handi or clay pot / stainless steel pots and pressure cookers",
      heatSource: "Wood fire / modern gas ranges and electric cookers",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: meat cooked in vinegar and garlic liquid / seared, then simmered slowly until tender and the oil separates",
      contemporaryDifference:
        "From shipboard wine-vinegar barrel preservation to modern restaurant curries and domestic vinegar substitutions.",
    },
    technologicalLeap: "Shift from stone-mortar grinding and prolonged wood-hearth braising to electric blenders and domestic pressure cooking.",
    documentedCitation: "Comparative Indo-Portuguese culinary history and contemporary Goan food records.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pork Vindaloo Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: pork shoulder, dried Kashmiri red chillies, garlic, ginger, cumin seeds, black peppercorns, cloves and cinnamon, turmeric, palm vinegar (or white vinegar), onions.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.34.14.jpeg",
    generationRecipe: {
      recipeName: "Pork Vindaloo Recipe",
      historicalCookware: "Heavy-bottomed pot or handi",
      heatSource: "High heat to sear, then gentle low heat for 40-50 minutes",
      ingredientsList: [
        "pork shoulder",
        "dried Kashmiri red chillies",
        "garlic",
        "ginger",
        "cumin seeds",
        "black peppercorns",
        "cloves and cinnamon",
        "turmeric",
        "palm vinegar (or white vinegar)",
        "onions",
      ],
      preparationMethod:
        "1. Cut the pork shoulder into bite-sized cubes and wash well. Drain completely and pat dry with a cloth.\n2. Grind the dried Kashmiri chillies, garlic, ginger, cumin, peppercorns, cloves, cinnamon and turmeric with palm vinegar. Grind into a thick, smooth, deep-red paste without adding water.\n3. Marinate the pork thoroughly with the ground spice paste and salt. Cover and rest in the refrigerator (overnight for best flavour, or at least 3-4 hours).\n4. Heat a little oil in a heavy-bottomed pot and fry the sliced onions. Cook on medium heat until soft and golden brown.\n5. Add the marinated pork along with all the marinade to the pot. Sear on high heat for 5-8 minutes, stirring until the meat changes colour and seals.\n6. Lower the heat, cover tightly with a lid, and slow-cook in its own juices and vinegar for 40-50 minutes. The pork is done when the meat is fork-tender and oil separates at the edges.\n7. Taste and adjust the seasoning with a splash of extra palm vinegar or a pinch of sugar. Simmer uncovered for 3-5 minutes until the gravy is rich and glossy.\n8. Switch off the heat and rest for at least 15-20 minutes before serving. Serve hot with Goan sannas, crusty poi or steamed rice.",
      contemporaryDifference:
        "Authentic 8-step Goan method featuring waterless vinegar grinding, high-heat searing, and long slow braising.",
    },
    technologicalLeap: "Waterless vinegar spice suspension combined with sealed internal steam and fat rendering.",
    documentedCitation: "Codified Goan Catholic recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// BEBINCA (Goa)
// ─────────────────────────────────────────────
export const BEBINCA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bebinca in Old Goa",
    shortDescription:
      "Bebinca is Goa's best-known layered dessert, often called the \"Queen of Goan Desserts\". It is a Portuguese-era sweet from Goan Catholic cooking, made for Christmas and other feasts. The most popular legend says it was created in the 17th century by a nun named Bebiana (also written Bibiona) at the Santa Monica Convent in Old Goa. In the legend, the convent used egg whites to starch clothing, so many yolks were left over. She used the yolks to make a sweet. The legend says she made seven layers to stand for the seven hills of Lisbon and the old city of Goa. The priests found it too small and asked for more layers. After her death, the sweet was named after her. This is a legend and oral tradition. The true origin is not documented with certainty. In Goa it is also called bibik. In Portuguese it is known as \"Bebinca das Sete Folhas\" (seven leaves). Bebinca received a Geographical Indication (GI) tag in 2023. It is made from egg yolks, coconut milk, sugar, flour and ghee, baked one thin layer at a time.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.36.07.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (tizal) or heavy baking dish",
      heatSource: "Traditional wood-fired embers and top coal heat",
      ingredientsList: [],
      preparationMethod:
        "Layer-by-layer sequential baking of rich egg yolk and coconut milk batter in an earthen tizal with coconut-husk embers placed on the lid for overhead heat.",
      contemporaryDifference:
        "Oral legend attributing creation to Santa Monica Convent nun Bebiana; true origin remains undocumented with certainty.",
    },
    technologicalLeap: "Multi-layered overhead grill baking using hot charcoal on lid of an earthen tizal.",
    documentedCitation: "Oral tradition and regional Goan Catholic culinary history.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking vessel: earthen pot (tizal), still used by a few families / oven or grill and a baking tin\nCoconut milk: fresh coconut grated and pressed for thick and thin milk / canned or packaged coconut milk in many kitchens\nLayers: seven layers (Bebinca das Sete Folhas) / six to sixteen or more layers\nLayer colour: pale and caramelised layers using caramelised sugar / some versions use food colouring\nFlavouring: nutmeg / nutmeg, with cardamom or vanilla essence in some recipes\nMaking it: a slow, long, labour-heavy home sweet made for Christmas / fewer people make it at home today\nOccasions: Christmas and feasts / Christmas, weddings and other celebrations\nServing: sliced into wedges, warm or at room temperature / often served with vanilla ice cream",
    image: "/images/dishes/bebinca-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen tizal / modern oven with top broiler or grill",
      heatSource: "Coconut husk embers / modern domestic electric ovens",
      ingredientsList: [],
      preparationMethod:
        "Cooking vessel: earthen pot (tizal), still used by a few families / oven or grill and a baking tin",
      contemporaryDifference:
        "Evolution from labor-intensive hearth baking of seven layers to commercial multi-tier ovens, packaged coconut milk, and cafe dessert plating with ice cream.",
    },
    technologicalLeap: "Adaptation to modern electric oven top-grills and commercial bakery production.",
    documentedCitation: "Comparative Goan food documentation and oral baking traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Bebinca Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: egg yolks, thick coconut milk, thin coconut milk, sugar, refined flour (maida), ghee, nutmeg, salt, caramelised sugar, cardamom powder (optional).",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.36.07.jpeg",
    generationRecipe: {
      recipeName: "Bebinca Recipe",
      historicalCookware: "Baking tin or round cake pan",
      heatSource: "Oven grill / top heat element",
      ingredientsList: [
        "egg yolks",
        "thick coconut milk",
        "thin coconut milk",
        "sugar",
        "refined flour (maida)",
        "ghee",
        "nutmeg",
        "salt",
        "caramelised sugar",
        "cardamom powder (optional)",
      ],
      preparationMethod:
        "1. Make thick and thin coconut milk from fresh coconut. Canned coconut milk also works.\n2. Whisk the egg yolks with the sugar. Whisk until pale and creamy.\n3. Add the thick coconut milk, salt and nutmeg. Then add the flour and thin coconut milk in small batches. Whisk until there are no lumps.\n4. Strain the batter and rest it for a few minutes. This gives a smooth texture.\n5. Divide the batter into two parts. Colour one part with caramelised sugar to make a darker batter.\n6. Grease the pan with ghee and pour in a thin first layer. Bake or grill from above until just set and lightly golden.\n7. Brush ghee on top, then pour the next thin layer. Alternate light and dark layers. Repeat until all the batter is used.\n8. Cool a little, loosen the edges and turn out onto a plate. Cut into wedges and serve warm or at room temperature.",
      contemporaryDifference:
        "Precise 8-step layered baking alternating light and dark batters under overhead grill heat.",
    },
    technologicalLeap: "Sequential layer setting with top heat and clarified butter brushing between strata.",
    documentedCitation: "Standardized Goan convent and household recipe documentation.",
  },
];

export const INDORI_POHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Indori Poha: Origin & Street Food Heritage",
    shortDescription:
      "Indori poha is a famous breakfast and street food of Indore, in Madhya Pradesh. Poha is the Hindi name for flattened rice. \"Indori\" means \"of Indore\". Poha is a widely eaten Indian food. What makes this version Indori is how it is cooked and topped. Unlike many other poha styles, it is steamed instead of being cooked directly with other ingredients, and the onions are not sauteed. Chopped raw onions go on top. It is finished with toppings such as sev, masala boondi (nukti), pomegranate and jeeravan masala, and is often served with hot jalebi. No reliable historical record gives the exact year, place or creator of Indori poha. One popular account says rulers from Maharashtra brought poha to this region, but this is not documented.\n\nWhy it is famous:\n- Its own cooking style: the poha is steamed, which gives it a distinct soft texture and taste.\n- Balanced flavour: sweet, tangy and spicy together, with fennel seeds adding a light sweetness.\n- Many textures in one plate: soft poha, crunchy sev and boondi, fresh onion and juicy pomegranate.\n- Jeeravan masala: a spice blend from Madhya Pradesh whose taste is different from chaat masala or garam masala.\n- Poha-jalebi: hot, sweet jalebi with savoury poha is the classic Indore pairing.\n- Morning street food: vendors across Indore sell it in the morning, often next to kachori and samosa.\n- Wide reach: it is also sold in nearby cities such as Ujjain, Dewas, Ratlam and Bhopal, and is becoming popular in other states.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Indori Poha",
      historicalCookware: "Steamer pot or colander over boiling water",
      heatSource: "Traditional wood or coal hearth",
      ingredientsList: [],
      preparationMethod:
        "Steamed instead of being cooked directly with other ingredients, and the onions are not sauteed. Chopped raw onions go on top.",
      contemporaryDifference:
        "Famous breakfast and street food of Indore, Madhya Pradesh.",
    },
    technologicalLeap: "Steam-cooking flattened rice for soft texture without pan-frying.",
    documentedCitation: "Regional food tradition & street food documentation of Indore.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Poha flakes: Then - hand-pounded and sun-dried in villages | Now - machine-made flakes sold ready in packets\nCooking style: Then - poha as cooked in Maharashtra, with sauteed onions | Now - Indori style, steamed, with raw onions on top\nToppings: Then - simple toppings like chopped onion | Now - sev, masala boondi (nukti), pomegranate and jeeravan masala\nJeeravan masala: Then - mixed fresh at home | Now - ready-made packets are widely available\nFuel: Then - wood or coal fires | Now - gas stoves and induction cooktops\nReach: Then - a local street breakfast of Indore | Now - sold in nearby cities and growing popular in other states\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional wood/coal stoves / Modern gas stoves and induction cooktops",
      heatSource: "Wood or coal fires / Gas stoves and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - poha as cooked in Maharashtra, with sauteed onions | Now - Indori style, steamed, with raw onions on top",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Transition to machine-made flakes and ready-made packaged jeeravan masala.",
    documentedCitation: "Regional food practices across Madhya Pradesh.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Indori Poha Recipe: 10 Steps",
    shortDescription:
      "Thick or medium-thick poha (flattened rice), Turmeric, sugar and salt, Oil, Mustard seeds and fennel seeds, Green chilli, Onion (raw, chopped), Fresh coriander leaves, Jeeravan masala, Ratlami or Indori sev, and masala boondi (nukti), Lemon, Pomegranate (optional), Hot jalebi (for serving, optional).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Indori Poha Recipe",
      historicalCookware: "Strainer, pan for tempering, pot with lid for steaming",
      heatSource: "Low to medium-low heat for tempering, low heat for steaming",
      ingredientsList: [
        "Thick or medium-thick poha (flattened rice)",
        "Turmeric, sugar and salt",
        "Oil",
        "Mustard seeds and fennel seeds",
        "Green chilli",
        "Onion (raw, chopped)",
        "Fresh coriander leaves",
        "Jeeravan masala",
        "Ratlami or Indori sev, and masala boondi (nukti)",
        "Lemon",
        "Pomegranate (optional)",
        "Hot jalebi (for serving, optional)",
      ],
      preparationMethod:
        "1. Rinse the poha. - Rinse thick poha in a strainer under clean running water. Do not over-rinse, or it turns mushy.\n2. Drain and rest. - Drain well. The flakes should be soft but whole. If still firm, sprinkle a little water and wait a few minutes.\n3. Add the dry seasoning. - Add turmeric, sugar and salt to the poha and mix lightly.\n4. Make the tempering. - Heat oil on low to medium-low heat. Add mustard seeds, then fennel seeds, then green chilli.\n5. Add the poha. - Keep the heat low and mix gently until the colour turns light yellow.\n6. Steam the poha. - Cover with a lid and steam on low heat for about 1 to 2 minutes. Stir and switch off the heat.\n7. Plate it hot. - Take the hot poha on a plate.\n8. Add the fresh toppings. - Top with chopped raw onion and coriander, sprinkle jeeravan masala, and add pomegranate.\n9. Add the crunch. - Top with masala boondi (nukti) and Ratlami or Indori sev.\n10. Finish and serve. - Squeeze lemon juice on top. Serve straight away, with hot jalebi.",
      contemporaryDifference:
        "Use thick or medium-thick poha. Steam it; the onions are not sauteed. Recipes differ from vendor to vendor, and some vendors add peas.",
    },
    technologicalLeap: "Trapped steam cooking covered with a lid for 1 to 2 minutes.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Steaming Technique",
    yearRange: "Steam Method",
    centuryLabel: "Stage 4",
    headline: "Low Heat Steam Finishing",
    shortDescription:
      "Covering with a lid and steaming on low heat for 1 to 2 minutes softens the poha without making it mushy.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Steam Finishing Protocol",
      historicalCookware: "Covered pot with tight lid",
      heatSource: "Low heat",
      ingredientsList: [
        "Thick or medium-thick poha (flattened rice)",
        "Turmeric, sugar and salt",
        "Oil",
        "Mustard seeds and fennel seeds",
        "Green chilli",
      ],
      preparationMethod:
        "Cover with a lid and steam on low heat for about 1 to 2 minutes. Stir and switch off the heat.",
      contemporaryDifference:
        "Use thick or medium-thick poha. Steam it; the onions are not sauteed.",
    },
    technologicalLeap: "Precise low heat steaming preserving flake texture.",
    documentedCitation: "Regional street food preparation technique.",
  },
  {
    generationNumber: 5,
    eraTitle: "Topping and Assembly",
    yearRange: "Assembly",
    centuryLabel: "Stage 5",
    headline: "Fresh Toppings & Crunchy Textures",
    shortDescription:
      "Raw chopped onion, coriander, jeeravan masala, pomegranate, masala boondi and sev are layered on hot poha.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Plate Assembly Protocol",
      historicalCookware: "Serving plate",
      heatSource: "Residual heat from hot poha",
      ingredientsList: [
        "Onion (raw, chopped)",
        "Fresh coriander leaves",
        "Jeeravan masala",
        "Ratlami or Indori sev, and masala boondi (nukti)",
        "Lemon",
        "Pomegranate (optional)",
      ],
      preparationMethod:
        "Take hot poha on a plate. Top with raw onion, coriander, jeeravan masala, pomegranate, boondi, and sev.",
      contemporaryDifference:
        "Raw onions go on top rather than being sauteed.",
    },
    technologicalLeap: "Layering raw crunch over soft warm steamed rice flakes.",
    documentedCitation: "Indore street food vendor service traditions.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Indori Poha Served with Hot Jalebi",
    shortDescription:
      "Finished with a squeeze of fresh lemon juice and served immediately with hot, sweet jalebi.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Indori Poha Plated",
      historicalCookware: "Serving plate",
      heatSource: "Served fresh and hot",
      ingredientsList: [
        "Thick or medium-thick poha (flattened rice)",
        "Ratlami or Indori sev",
        "Masala boondi (nukti)",
        "Lemon",
        "Hot jalebi (for serving, optional)",
      ],
      preparationMethod:
        "Squeeze lemon juice on top. Serve straight away, with hot jalebi.",
      contemporaryDifference:
        "The classic morning breakfast pairing of Indore.",
    },
    technologicalLeap: "Savoury, tangy poha paired with hot crisp sweet jalebi.",
    documentedCitation: "Regional culinary culture of Madhya Pradesh.",
  },
];

// ─────────────────────────────────────────────
// BHUTTE KA KEES (Madhya Pradesh)
// ─────────────────────────────────────────────
export const BHUTTE_KA_KEES_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Bhutte Ka Kees: Origin & Malwa Heritage",
    shortDescription:
      "Bhutte Ka Kees is a famous street food and traditional delicacy of Madhya Pradesh, especially celebrated across the Malwa region including Indore (famous in Sarafa Bazaar night market and Chappan Dukan). \"Bhutta\" means corn on the cob, and \"Kees\" comes from \"keesna\" (to grate in Hindi). Fresh tender corn kernels are grated fresh, releasing sweet corn pulp and juice, then slow-braised in full-cream milk, tempered with mustard seeds, cumin, hing (asafoetida), and green chillies, and finished with freshly grated coconut, coriander, and lemon juice. No reliable historical record gives the exact year, place or creator of Bhutte Ka Kees, though local tradition associates it with Holkar-era royal banquets and Malwa monsoon harvest feasts.\n\nWhy it is famous:\n- Its own cooking style: fresh corn is grated to extract juices and slow-braised in milk, yielding a luscious creamy and grainy texture.\n- Balanced flavour: natural corn sweetness harmonized with spicy green chillies, aromatic hing, and tangy fresh lemon.\n- Night street food royalty: an iconic attraction at Indore's legendary Sarafa Bazaar and Chappan Dukan.\n- Seasonal harvest celebration: traditionally crafted during monsoons when tender desi bhutta is harvested in Malwa.\n- Rich garnishes: served steaming hot topped with freshly grated coconut, coriander, crunchy sev, and a dash of jeeravan masala.\n- Wide reach: popular across Indore, Ujjain, Ratlam, Bhopal, and now featured on menus nationwide.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Bhutte Ka Kees",
      historicalCookware: "Heavy iron kadhai or brass lagan",
      heatSource: "Traditional wood or charcoal sigri",
      ingredientsList: [],
      preparationMethod:
        "Fresh tender corn is coarsely grated, releasing starch and milk, then slow-braised in dairy milk and tempered with whole spices.",
      contemporaryDifference:
        "Signature street delicacy and monsoon culinary pride of Indore, Madhya Pradesh.",
    },
    technologicalLeap: "Extracting fresh corn milk and starch via fine grating to create a rich braised emulsion without thickeners.",
    documentedCitation: "Regional culinary traditions and oral documentation of Indore, Madhya Pradesh.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Corn: Then - seasonal desi white/yellow maize grated by hand on coarse iron graters | Now - sweet corn or american corn cobs, readily grated or ground in food processors\nDairy & Braise: Then - full-cream fresh buffalo milk simmered slowly in heavy iron kadhais | Now - packaged dairy milk or cream, non-stick pans or pressure cookers\nTempering fat: Then - pure desi cow/buffalo ghee | Now - vegetable oil or a blend of ghee and oil\nToppings: Then - simple fresh scraped coconut, green chillies, and rock salt | Now - Ratlami sev, pomegranate arils, jeeravan masala, and fresh lemon\nFuel: Then - smouldering wood or coal sigris | Now - commercial gas burners and induction cooktops\nReach: Then - seasonal monsoon household dish in Malwa | Now - renowned year-round street food across Indore and central India\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional iron kadhai / Modern non-stick pan",
      heatSource: "Charcoal sigri / Modern gas burners and induction",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - fresh seasonal field maize simmered slowly with ghee and rock salt | Now - sweet corn braised in milk with jeeravan masala, sev, and lemon",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adoption of tender sweet corn varieties, modern grating appliances, and complex street seasonings.",
    documentedCitation: "Comparative food practice surveys across Indore and the Malwa region.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Step-by-Step",
    centuryLabel: "Stage 3",
    headline: "Bhutte Ka Kees: 10 Preparation Steps",
    shortDescription:
      "Fresh tender sweet corn (bhutta, grated), Full cream milk, Desi ghee or oil, Mustard seeds and cumin seeds (jeera), Asafoetida (hing), Green chillies (finely chopped), Fresh ginger (grated), Turmeric powder, Sugar and salt, Fresh coconut (scraped/grated), Fresh coriander leaves, Lemon (for tang) and jeeravan masala / sev (optional).\n\n1. Grate the corn. - Husk fresh tender corn cobs and grate using a medium grater to collect pulp and juices.\n2. Heat the fat. - Heat ghee or oil in a heavy kadhai over medium-low heat.\n3. Splutter the spices. - Add mustard seeds and cumin seeds; once they crackle, add asafoetida (hing).\n4. Sauté the aromatics. - Add finely chopped green chillies and grated ginger; sauté for 30 seconds until aromatic.\n5. Cook the corn pulp. - Add grated corn, turmeric powder, salt, and a pinch of sugar; sauté on low heat for 3-4 minutes.\n6. Pour the milk. - Slowly pour in full cream milk while stirring continuously to blend evenly.\n7. Simmer and thicken. - Cover with a lid and cook on low heat for 8-10 minutes, stirring occasionally, until milk is absorbed and corn is tender.\n8. Stir in fresh garnish. - Turn off the heat and stir in half of the freshly grated coconut and chopped coriander leaves.\n9. Season to taste. - Squeeze fresh lemon juice and dust with jeeravan masala for signature Indori tang.\n10. Finish and serve. - Spoon hot into bowls, garnish with remaining grated coconut, coriander, and crispy sev.\n\nUse fresh tender corn. Grating rather than blending retains the quintessential texture. Add milk gradually on low heat to achieve creamy consistency.",
    image: ERA_PHOTO.spice_caravan,
    generationRecipe: {
      recipeName: "Bhutte Ka Kees Culinary Protocol",
      historicalCookware: "Heavy-bottomed kadhai with lid",
      heatSource: "Medium-low to low steady flame",
      ingredientsList: [
        "Fresh tender sweet corn (bhutta, grated)",
        "Full cream milk",
        "Desi ghee or oil",
        "Mustard seeds and cumin seeds (jeera)",
        "Asafoetida (hing)",
        "Green chillies (finely chopped)",
        "Fresh ginger (grated)",
        "Turmeric powder",
        "Sugar and salt",
        "Fresh coconut (scraped/grated)",
        "Fresh coriander leaves",
        "Lemon (for tang) and jeeravan masala / sev (optional)",
      ],
      preparationMethod:
        "Grate fresh corn kernels, splutter mustard, cumin, and hing in ghee, sauté ginger and chillies, add corn and milk, simmer until creamy, and finish with coconut, coriander, lemon, and sev.",
      contemporaryDifference:
        "Use fresh tender sweet corn and grate it fresh. Slow milk-emulsion braise without browning or curdling.",
    },
    technologicalLeap: "Slow milk-emulsion simmer covered with a lid for 8-10 minutes to yield a creamy texture.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Milk-Braise Technique",
    yearRange: "Slow Simmer",
    centuryLabel: "Stage 4",
    headline: "Gentle Low Heat Simmering",
    shortDescription:
      "Gradual incorporation of dairy milk into grated corn starches over gentle heat ensures a velvety texture without curdling.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Milk Braise Protocol",
      historicalCookware: "Covered heavy pan",
      heatSource: "Gentle low heat",
      ingredientsList: [
        "Fresh tender sweet corn (bhutta, grated)",
        "Full cream milk",
        "Desi ghee or oil",
        "Turmeric powder",
        "Sugar and salt",
      ],
      preparationMethod:
        "Slowly pour in full cream milk while stirring continuously. Cover with a lid and cook on low flame until thick.",
      contemporaryDifference:
        "Gentle heat prevents dairy separation and binds the natural corn starch.",
    },
    technologicalLeap: "Dairy-starch gelatinization creating rich body without artificial thickeners.",
    documentedCitation: "Regional street food preparation technique.",
  },
  {
    generationNumber: 5,
    eraTitle: "Garnish and Seasoning",
    yearRange: "Finishing",
    centuryLabel: "Stage 5",
    headline: "Indori Spice Dusting & Fresh Garnishes",
    shortDescription:
      "Hot braised corn is topped with freshly scraped coconut, cilantro, a squeeze of lemon juice, and a sprinkle of jeeravan masala.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Street Finishing Protocol",
      historicalCookware: "Serving bowl",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Fresh coconut (scraped/grated)",
        "Fresh coriander leaves",
        "Lemon (for tang)",
        "Jeeravan masala & Sev (optional)",
      ],
      preparationMethod:
        "Turn off the heat, stir in coconut and coriander, squeeze lemon juice, and dust with jeeravan masala.",
      contemporaryDifference:
        "Signature Indori street food balance of sweet, creamy, spicy, and tangy notes.",
    },
    technologicalLeap: "Combining warm creamy corn with crisp raw coconut and zesty spice dust.",
    documentedCitation: "Sarafa Bazaar street food vendor service traditions.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Bhutte Ka Kees at Sarafa Bazaar",
    shortDescription:
      "Served steaming hot in bowls garnished with fresh coconut, coriander, crunchy sev, and lemon juice — the midnight jewel of Indore.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Bhutte Ka Kees Plated",
      historicalCookware: "Serving bowl / dona",
      heatSource: "Freshly braised and hot",
      ingredientsList: [
        "Fresh tender sweet corn (bhutta, grated)",
        "Full cream milk",
        "Fresh coconut (scraped/grated)",
        "Fresh coriander leaves",
        "Lemon",
        "Ratlami sev",
      ],
      preparationMethod:
        "Spoon piping hot into bowls, finish with lemon juice and a generous scattering of sev and fresh coconut.",
      contemporaryDifference:
        "The quintessential Indore midnight street food experience.",
    },
    technologicalLeap: "Iconic street snack celebrated across Central India.",
    documentedCitation: "Regional culinary culture of Madhya Pradesh.",
  },
];

// ─────────────────────────────────────────────
// DAL BAFLA (Madhya Pradesh)
// ─────────────────────────────────────────────
export const DAL_BAFLA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Dal Bafla: Origin & Festive Malwa Heritage",
    shortDescription:
      "Dal Bafla is the signature celebratory feast of Madhya Pradesh, celebrated throughout the Malwa and Bundelkhand regions (notably in Ujjain, Indore, Ratlam, and Maheshwar). It is related to Rajasthani baati but distinguished by its unique two-stage cooking: dough balls of coarse whole-wheat flour, semolina, and ghee are boiled in spiced water first, then roasted over cow-dung embers or baked in an oven until blistered and golden. The boiling gelatinizes the starch, ensuring the inside remains incredibly tender and fluffy, while the baking creates a crisp outer crust. Hot baflas are cracked open, drenched completely in melted desi ghee, and paired with spicy five-lentil Panchmel Dal, fiery garlic chutney, and sweet churma.\n\nWhy it is famous:\n- Unique boil-then-bake method: boiling before baking ensures a soft, tender crumb unlike the firmer, dry Rajasthani baati.\n- Desi ghee immersion: hot baflas are cracked open and fully bathed in warm desi ghee, soaking up rich aroma.\n- Panchmel Dal accompaniment: served with a harmonious blend of five pulses (toor, moong, chana, urad, masoor) tempered with hing and cumin.\n- Sacred banquet centerpiece: standard community meal at weddings, festivals, and pilgrimage feasts across Malwa and the Narmada valley.\n- Complex accompaniments: traditionally paired with fiery raw garlic chutney, sweet churma or laddu, and tangy kadhi.\n- Wide cultural reverence: celebrated in thali restaurants and royal heritage banquets across Central India.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Dal Bafla",
      historicalCookware: "Large open brass boiling cauldron & cow-dung cake (kanda) hearth",
      heatSource: "Wood fire for boiling / Smouldering kanda embers for roasting",
      ingredientsList: [],
      preparationMethod:
        "Coarse wheat dough balls are boiled in water with turmeric until buoyant, then roasted over embers until charred and blistered.",
      contemporaryDifference:
        "The premier celebratory and community banquet feast of Madhya Pradesh.",
    },
    technologicalLeap: "Two-step boil-then-bake method producing a fluffy steamed crumb inside a crisp baked crust.",
    documentedCitation: "Malwa ethnographies, temple banquet records, and regional food documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Flour & Kneading: Then - freshly ground coarse Malwi durum wheat flour stone-milled in village chakkis | Now - commercial packaged atta combined with semolina (sooji) and a pinch of baking soda for lightness\nBoiling & Baking: Then - boiled in brass cauldrons over wood fire, then roasted in cow-dung cake (kanda) ashes | Now - boiled in stainless steel pots, then baked in gas baati cookers, OTGs, or air fryers\nDal: Then - slow-simmered for hours over low hearth embers with local farm lentils | Now - pressure-cooked panchmel dal tempered in minutes with modern spice powders\nGhee usage: Then - lavishly drowned in pure bilona churned village ghee | Now - measured immersion or brushed with ghee for modern dietary preferences\nAccompaniments: Then - rustic stone-ground red garlic chutney, fresh onions, and jaggery | Now - multi-course thali arrays with assorted chutneys, kadhi, and gulab jamun\nReach: Then - community feast restricted to Malwa and Bundelkhand festivals | Now - celebrated specialty in royal heritage restaurants and Indian banquets nationwide\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional brass degh & cow-dung embers / Stainless steel pot & gas baati oven",
      heatSource: "Wood fire & charcoal embers / Modern gas range and electric convection",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - stone-ground wheat dough boiled on wood flame, baked on embers | Now - packaged atta with sooji baked in gas baati cooker or air fryer",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Domestic gas baati-ovens and electric OTGs replacing rustic open-fire hearths.",
    documentedCitation: "Central Indian food technology surveys and household cookbooks.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Step-by-Step",
    centuryLabel: "Stage 3",
    headline: "Dal Bafla: 10 Preparation Steps",
    shortDescription:
      "Coarse whole-wheat flour (atta), Semolina (sooji / rava), Pure desi ghee, Ajwain (carom seeds), Turmeric powder and pinch of baking soda, Panchmel dal (toor, chana, moong, urad, masoor), Tomatoes and green chillies, Fresh ginger (grated), Cumin seeds and mustard seeds, Asafoetida (hing), Fresh coriander leaves, Spicy red garlic chutney & lemon wedges.\n\n1. Make the dough. - Mix coarse wheat flour, sooji, ajwain, turmeric, salt, and melted ghee (moyen). Rub until crumbly, then knead into a stiff dough with warm water.\n2. Shape the baflas. - Divide dough into smooth, medium round balls and make a slight dimple in the center with your thumb.\n3. Boil water. - In a large pot, bring water to a rolling boil with 1/2 tsp turmeric and salt.\n4. Boil the baflas. - Gently lower the dough balls into boiling water and cook for 12-15 minutes until they float to the surface.\n5. Drain and dry. - Lift baflas out with a slotted spoon and dry on a clean towel for 5-10 minutes.\n6. Bake until crisp. - Bake in a preheated baati oven or conventional oven at 200°C (390°F) for 20-25 minutes, turning until golden and blistered.\n7. Cook the dal. - Pressure cook mixed five lentils with turmeric and salt until soft and creamy.\n8. Temper the dal. - Heat ghee in a pan, crackle cumin and mustard seeds, add hing, green chillies, ginger, tomatoes, and spices; pour into dal.\n9. Crush and ghee-soak. - Gently crush the hot baked baflas in a napkin and immerse them completely in a bowl of warm desi ghee.\n10. Assemble and serve. - Serve piping hot ghee-drenched baflas with Panchmel dal, fiery garlic chutney, sliced onions, and lemon.\n\nBoiling before baking is mandatory for authentic bafla texture. Submerge baflas in ghee while piping hot for complete absorption.",
    image: ERA_PHOTO.spice_caravan,
    generationRecipe: {
      recipeName: "Dal Bafla Feast Protocol",
      historicalCookware: "Large stockpot, baking tray / baati oven, and deep tempering pan",
      heatSource: "High boiling heat, followed by 200°C dry baking",
      ingredientsList: [
        "Coarse whole-wheat flour (atta)",
        "Semolina (sooji / rava)",
        "Pure desi ghee",
        "Ajwain (carom seeds)",
        "Turmeric powder and pinch of baking soda",
        "Panchmel dal (toor, chana, moong, urad, masoor)",
        "Tomatoes and green chillies",
        "Fresh ginger (grated)",
        "Cumin seeds and mustard seeds",
        "Asafoetida (hing)",
        "Fresh coriander leaves",
        "Spicy red garlic chutney & lemon wedges",
      ],
      preparationMethod:
        "Knead wheat-semolina dough with ghee moyen, shape into balls, boil in turmeric water until floating, bake until blistered, crack open, submerge in melted desi ghee, and serve with Panchmel dal.",
      contemporaryDifference:
        "Boil-then-bake ensures a tender, melt-in-the-mouth texture unlike dry baati.",
    },
    technologicalLeap: "Mastery of two distinct thermal stages: wet gelatinization followed by dry radiative roasting.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Boil-Then-Bake Technique",
    yearRange: "Two-Stage Cook",
    centuryLabel: "Stage 4",
    headline: "Pre-Gelatinization & Radiative Baking",
    shortDescription:
      "Poaching the dough balls in boiling water sets the exterior and hydrates internal starches, preventing toughness during baking.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Boil-Then-Bake Protocol",
      historicalCookware: "Deep boiling pot & baati oven",
      heatSource: "Boiling water / 200°C radiant heat",
      ingredientsList: [
        "Coarse whole-wheat flour (atta)",
        "Semolina (sooji / rava)",
        "Pure desi ghee",
        "Ajwain (carom seeds)",
        "Turmeric powder",
      ],
      preparationMethod:
        "Boil dough rounds for 12-15 minutes until buoyant, dry thoroughly, and bake at 200°C for 20-25 minutes until golden.",
      contemporaryDifference:
        "The definitive signature technique that sets bafla apart from Rajasthani baati.",
    },
    technologicalLeap: "Thermal par-cooking in water followed by dry convective baking.",
    documentedCitation: "Malwa domestic cookery records.",
  },
  {
    generationNumber: 5,
    eraTitle: "Ghee Immersion & Dal Tadka",
    yearRange: "Assembly",
    centuryLabel: "Stage 5",
    headline: "Desi Ghee Bath & Five-Lentil Stew",
    shortDescription:
      "Hot blistered baflas are cracked by hand and immersed in warm melted desi ghee to saturate the interior crumb.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Immersion & Tadka Protocol",
      historicalCookware: "Deep ghee bowl and iron tadka pan",
      heatSource: "Direct ghee immersion & tadka sizzle",
      ingredientsList: [
        "Pure desi ghee",
        "Panchmel dal (toor, chana, moong, urad, masoor)",
        "Tomatoes and green chillies",
        "Cumin seeds and mustard seeds",
        "Asafoetida (hing)",
      ],
      preparationMethod:
        "Crush baked baflas gently and soak in warm ghee. Temper cooked panchmel dal with ghee, hing, and spices.",
      contemporaryDifference:
        "Ensures every bite is rich, moist, and infused with ghee aroma.",
    },
    technologicalLeap: "Hydraulic absorption of fat into warm expanding starch pores.",
    documentedCitation: "Regional feast banquet documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "The Royal Malwa Thali Feast",
    shortDescription:
      "Served on brass or copper thalis with hot ghee-soaked baflas, Panchmel dal, fiery red garlic chutney, sweet churma, and kadhi.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Dal Bafla Thali Plated",
      historicalCookware: "Traditional Kansa or brass thali",
      heatSource: "Piping hot service",
      ingredientsList: [
        "Coarse whole-wheat flour (atta)",
        "Pure desi ghee",
        "Panchmel dal (toor, chana, moong, urad, masoor)",
        "Spicy red garlic chutney",
        "Sweet churma laddu",
        "Lemon and sliced onions",
      ],
      preparationMethod:
        "Arrange ghee-drenched baflas alongside a generous bowl of panchmel dal, garlic chutney, churma, and sliced onions.",
      contemporaryDifference:
        "The undisputed grand feast of Madhya Pradesh.",
    },
    technologicalLeap: "Complete multi-textured royal thali balancing buttery bread, spicy dal, pungent chutney, and sweet grain.",
    documentedCitation: "Central Indian gastronomic culture.",
  },
];

// ─────────────────────────────────────────────
// AVAKAYA (Andhra Pradesh)
// ─────────────────────────────────────────────
export const AVAKAYA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Avakaya in Andhra Pradesh",
    shortDescription:
      "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Large ceramic jaadi (bharani) and stone mortar",
      heatSource: "Sun-drying (zero heat cooking)",
      ingredientsList: [],
      preparationMethod:
        "Firm sour raw mango pieces cut with hard kernel, coated in sun-dried powdered mustard, red chilli and sea salt, submerged in cold-pressed gingelly oil.",
      contemporaryDifference:
        "Preservation tradition of summer mangoes; matured slowly in sealed ceramic bharanis without artificial preservatives.",
    },
    technologicalLeap: "Anaerobic oil maceration and high-acid microbial preservation in ceramic vessels.",
    documentedCitation: "Regional food tradition; no exact date, place or creator recorded.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets (native types like Rasalu are still preferred by many)\nSpice powders: Then - chillies and mustard sun-dried and ground fresh at home | Now - ready pickle-grade chilli and mustard powders are widely used\nCutting: Then - skilled cutting with a special knife, kernel kept intact | Now - same cut, with simple safety tricks like holding the mango in a cloth\nOil: Then - cold-pressed gingelly oil from the neighbourhood oil mill | Now - gingelly oil is still preferred; groundnut oil is the usual second choice\nJars: Then - large ceramic jaadis (bharanis) filled by the whole family | Now - smaller jars for small home batches, kept bone-dry\nBatch size: Then - big yearly batches shared across the family | Now - small batches of a few mangoes are common\nVariations: Then - the classic mustard-chilli Avakaya | Now - many versions such as bellam (jaggery), nuvvu (sesame), allam (ginger), pesara (moong) and endu (sun-dried) avakaya\nWhere it comes from: Then - made only at home each summer | Now - also sold ready-made by pickle brands\nThese changes describe kitchen practice, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Ceramic bharanis / modern glass jars and food-grade containers",
      heatSource: "Sun-drying / ambient maturation",
      ingredientsList: [],
      preparationMethod:
        "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets",
      contemporaryDifference:
        "These changes describe kitchen practice, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adaptation from massive joint-family ceramic bharani batches to small modern domestic jars and commercial packaged variants.",
    documentedCitation: "Regional food studies and Andhra domestic culinary practice surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Avakaya Recipe: 11 Steps",
    shortDescription:
      "raw green sour mangoes, mustard seeds (sun-dried, ground fresh), red chilli powder, crystal salt (powdered), gingelly (sesame) oil, garlic cloves, fenugreek (methi) seeds, black chickpeas (optional, in place of garlic), hot rice with dal and ghee for serving.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Avakaya Recipe",
      historicalCookware: "Ceramic jaadi or bone-dry glass jar",
      heatSource: "Ambient room maturation (no heat)",
      ingredientsList: [
        "raw green sour mangoes",
        "mustard seeds (sun-dried, ground fresh)",
        "red chilli powder",
        "crystal salt (powdered)",
        "gingelly (sesame) oil",
        "garlic cloves",
        "fenugreek (methi) seeds",
        "black chickpeas (optional, in place of garlic)",
        "hot rice with dal and ghee for serving",
      ],
      preparationMethod:
        "1. Wash and soak the mangoes. - Use firm, sour raw mangoes. Soak them in water for about an hour.\n2. Dry the pickle jar. - Wash it and sun-dry it fully. There must be no moisture at all.\n3. Wipe and cut the mangoes. - Cut into pieces with the hard kernel kept on each piece. Remove the pith.\n4. Dry the pieces. - Clean each piece with a soft cloth. Spread on a dry cloth for an hour or two.\n5. Grind mustard and salt. - Grind sun-dried mustard seeds and crystal salt to a fine powder.\n6. Make the spice mix. - Mix chilli powder, mustard powder and salt in equal weight. Add methi seeds, garlic and part of the oil. A fistful should hold its shape.\n7. Coat the mango pieces. - Mix with clean, dry hands until every piece is coated.\n8. Fill the jar. - Add the pieces with all the spice mix. Pour a little oil on top.\n9. Seal and rest. - Close the lid and tie a cloth over it. Keep in a dry place and do not open for about 3 days.\n10. Mix and top up. - On day 4, mix with a clean, dry ladle. Taste for salt. Add oil so a thin layer covers the pickle.\n11. Mature and serve. - Mix again after another 4 days. Serve with hot rice, dal and ghee.",
      contemporaryDifference:
        "Always use a clean, dry spoon. Moisture spoils the pickle. Keep a thin layer of oil on top.",
    },
    technologicalLeap: "Precision 11-step zero-moisture mustard spice curing and oil maceration protocol.",
    documentedCitation: "Codified Andhra domestic pickle formulation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Present Day",
    yearRange: "Present Day",
    centuryLabel: "Stage 4",
    headline: "Avakaya Plated & Served",
    shortDescription:
      "Served with steaming hot rice, mudda pappu and a spoonful of melted ghee.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Avakaya Plated",
      historicalCookware: "Ceramic pickle bowl",
      heatSource: "Served at room temperature",
      ingredientsList: [
        "raw green sour mangoes",
        "gingelly (sesame) oil",
        "hot rice with dal and ghee for serving",
      ],
      preparationMethod:
        "Served with hot rice, dal and pure ghee.",
      contemporaryDifference:
        "The quintessential symbol of Andhra home gastronomy.",
    },
    technologicalLeap: "Timeless culinary pairing of spicy pungent pickle with rich ghee and lentils.",
    documentedCitation: "Andhra Pradesh Culinary Heritage Surveys.",
  },
];

// ─────────────────────────────────────────────
// 3. KASHMIRI ROGAN JOSH (Jammu & Kashmir)
// ─────────────────────────────────────────────
export const ROGAN_JOSH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Ancient Himalayan Pastoral Antiquity",
    yearRange: "c. 800 BCE – 4th Century CE",
    centuryLabel: "Epoch I",
    headline: "Himalayan Sheep & Wild Highland Fennel",
    shortDescription:
      "Nomadic shepherds in the Kashmir valley slow-cooked mountain mutton in earthen pots with wild mountain caraway, Himalayan rock salt, and dried ginger roots to withstand severe sub-zero winters.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Pahadi Mutton Winter Broth",
      historicalCookware: "Unglazed mountain clay pot",
      heatSource: "Pine wood and charcoal hearth",
      ingredientsList: ["Mountain goat meat cuts", "Wild dry ginger (Sonth)", "Wild caraway seeds", "Cold spring water", "Rock salt"],
      preparationMethod: "Slow-simmered for several hours over dying embers until bones softened and natural broth gelatinized.",
      contemporaryDifference: "No red chillies or ratanjot; clear brown herbal broth rather than rich crimson oil.",
    },
    technologicalLeap: "Use of warming rhizomes (sonth) for high-altitude thermal preservation.",
    documentedCitation: "Nilamata Purana (c. 6th Century CE) describing meat and ginger feasts.",
  },
  {
    generationNumber: 2,
    eraTitle: "Zain-ul-Abidin & Wazwan Guilds",
    yearRange: "1420 – 1470 CE",
    centuryLabel: "Epoch II",
    headline: "The Arrival of Samarkand Masters & The Brass Deg",
    shortDescription:
      "Sultan Zain-ul-Abidin brought master cooks (Wazas) from Samarkand who introduced hand-beaten tinned brass degchis, whole aromatic spices, and slow mustard-oil braising techniques.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Sultanate Roghan-i-Gosht",
      historicalCookware: "Tinned hand-beaten brass degchi",
      heatSource: "Fruitwood charcoal pits",
      ingredientsList: ["Prime mutton cuts", "Cold-pressed mustard oil", "Green cardamom", "Fennel seed powder (Saunf)", "Dry ginger powder"],
      preparationMethod: "Meat browned in smoking mustard oil until juices caramelized, then simmered with freshly stone-pounded fennel and ginger water.",
      contemporaryDifference: "Fennel and ginger powder became the fundamental non-pungent spice architecture.",
    },
    technologicalLeap: "Mustard oil smoking technique neutralizing sulfur pungency into nutty richness.",
    documentedCitation: "Rajatarangini chronicles & Royal Wazwan Guild records.",
  },
  {
    generationNumber: 3,
    eraTitle: "Botanical Color: The Ratanjot Discovery",
    yearRange: "c. 1550 – 1650 CE",
    centuryLabel: "Epoch III",
    headline: "The Extraction of Ratanjot Alkanet Root",
    shortDescription:
      "Kashmiri cooks made a groundbreaking discovery: infusing hot mustard oil with the root bark of wild Himalayan Ratanjot (Alkanna tinctoria) produced an intensely vivid royal crimson oil without adding harsh heat.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Ratanjot-Infused Wazwan Rogan Josh",
      historicalCookware: "Heavy tinned copper deg",
      heatSource: "Gentle charcoal embers",
      ingredientsList: ["Mutton shank and shoulder", "Ratanjot root bark extract", "Mustard oil", "Whole cloves & cinnamon", "Asafoetida (Hing) water"],
      preparationMethod: "Ratanjot roots steeped in hot mustard oil, strained, and poured over the simmering lamb to create the shimmering crimson 'Rogan' (clarified oil surface).",
      contemporaryDifference: "Permanent establishment of the signature jewel-toned crimson sheen.",
    },
    technologicalLeap: "Fat-soluble natural botanical pigmentation creating visual grandeur.",
    documentedCitation: "Ain-i-Akbari (1590 CE) records of imperial Kashmiri expeditions.",
  },
  {
    generationNumber: 4,
    eraTitle: "Mughal Imperial Summer Court",
    yearRange: "c. 1650 – 1800 CE",
    centuryLabel: "Epoch IV",
    headline: "Kashmiri Mirch & The Yoghurt Emulsion",
    shortDescription:
      "The arrival of mild, fruity Kashmiri red peppers (Capsicum annuum) cultivated around Pampore. Combined with whisked yoghurt, it added velvety body to the thin crimson broth.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Imperial Kashmir Court Rogan Josh",
      historicalCookware: "Brass degchi with domed brass lid",
      heatSource: "Low-flame charcoal sigri",
      ingredientsList: ["Lamb ribs and shoulder", "Kashmiri red chilli paste", "Whisked mountain yoghurt", "Fennel & ginger infusion", "Mustard oil"],
      preparationMethod: "Yoghurt tempered with spices and poured slowly into the boiling oil to prevent curdling, creating a silk-smooth suspension.",
      contemporaryDifference: "The introduction of sun-dried Kashmiri chillies giving deep flavor alongside ratanjot.",
    },
    technologicalLeap: "Acid-fat emulsion technique creating a velvety, cling-worthy glaze.",
    documentedCitation: "Jahangir's Tuzuk-i-Jahangiri describing royal retreats at Shalimar Bagh.",
  },
  {
    generationNumber: 5,
    eraTitle: "Wazwan vs Pandit Divergence",
    yearRange: "c. 1850 – 1950 CE",
    centuryLabel: "Epoch V",
    headline: "The Great Culinary Duality: Pran vs Hing",
    shortDescription:
      "Two distinct legendary styles emerged: Muslim Wazwan cooks incorporated shallots (Pran) and garlic, while Kashmiri Pandits prepared it sattvically with asafoetida (Hing), yoghurt, and excessive fennel.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Pandit Spiced Rogan Josh",
      historicalCookware: "Heavy brass degchi",
      heatSource: "Indoor chulha hearth",
      ingredientsList: ["Tender lamb cuts", "Pure asafoetida water", "Whisked sour yoghurt", "Fennel seed powder", "Ginger powder (Sonth)", "Mustard oil"],
      preparationMethod: "Zero onion, zero garlic. Relying entirely on the medicinal digestive harmony of hing, saunf, and sonth braised tenderly.",
      contemporaryDifference: "Clear cultural bifurcation between Wazwan (pran-based) and Pandit (hing-curd based).",
    },
    technologicalLeap: "Mastery of umami extraction without alliums using asafoetida and fermented curd.",
    documentedCitation: "K.T. Achaya's Historical Dictionary of Indian Food, Kashmiri entries.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Crown Jewel of the 36-Course Wazwan",
    shortDescription:
      "Recognized globally as one of the finest braised meat dishes in gastronomy. Served steaming over fragrant long-grain walnut-oil rice with saffron kehwa on the side.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Master Wazwan Rogan Josh Formulation",
      historicalCookware: "Heavy copper or brass handi",
      heatSource: "Low-heat gas flame with diffuser",
      ingredientsList: [
        "1 kg tender bone-in baby goat / lamb",
        "100ml cold-pressed mustard oil",
        "2 tbsp Kashmiri red chilli powder",
        "2 tbsp fennel powder (Saunf)",
        "1 tbsp dry ginger powder (Sonth)",
        "1 cup whisked thick curd",
        "Infused Ratanjot extract or pure Kashmiri paprika oil",
      ],
      preparationMethod:
        "Brown lamb in smoking mustard oil. Lower heat, add whole spices, chilli paste, and whisked curd. Simmer on low heat for 50 minutes until meat is fork-tender and crimson oil separates cleanly.",
      contemporaryDifference: "Standardized measurements, precise slow-cook temperatures.",
    },
    technologicalLeap: "Modern temperature-controlled braising achieving melting collagen breakdown.",
    documentedCitation: "UNESCO Intangible Heritage nominations for Kashmiri Wazwan craft.",
  },
];

// ─────────────────────────────────────────────
// 4. BIHARI LITTI CHOKHA (Bihar)
// ─────────────────────────────────────────────
export const LITTI_CHOKHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Litti Chokha in Bihar & the Gangetic Heartland",
    shortDescription:
      "Litti Chokha traces back to the ancient agricultural and pastoral communities of the Gangetic plains of Bihar, where parched Bengal gram flour (sattu) has served for millennia as an imperishable, protein-dense travel ration. Peasant farmers and pastoralists encased spiced sattu inside coarse whole-wheat flour dough, baking the spheres directly in smoldering dried cow-dung (goitha or upla) ember pits while tending fields. Oral traditions and folklore also record its use as an essential, fuel-efficient battle ration by rebel soldiers under Veer Kunwar Singh during the 1857 uprising, as the stuffed dough balls required zero cooking vessels and lasted for days. Over centuries, the fire-charred litti became inextricably paired with chokha—a rustic mash of flame-roasted eggplant, potatoes, and tomatoes seasoned with raw mustard oil—and generously bathed in molten desi cow ghee.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Open-fire cow-dung ember pit (goitha hearth)",
      heatSource: "Smoldering dried cow-dung cakes (upla/goitha)",
      ingredientsList: [],
      preparationMethod:
        "Firm whole-wheat dough stuffed with spiced roasted Bengal gram flour (sattu), baked slowly over smoldering cow-dung (goitha) embers, and drenched in molten desi cow ghee.",
      contemporaryDifference:
        "Ancestral agrarian sustenance food developed by Gangetic farmers and travellers using durable sattu stuffing without elaborate cookware.",
    },
    technologicalLeap: "Sand-parched gram flour encapsulation in durable whole-wheat protective dough, baked via biomass ember convection.",
    documentedCitation: "Ancient Indian references to saktu, complemented by 19th-century accounts of Bihar peasant field rations.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking heat source: glowing dried cow-dung cakes (goitha/upla) and wood coals / domestic LPG gas stoves, convection ovens, and electric air fryers\nCooking vessel: rustic open-fire ember pits and wire nets / heavy cast-iron tawa, tandoor grills, and non-stick baking trays\nStuffing preparation: hand-pounded stone mortar sattu with home-cured pickle oil / packaged sattu flour with store-bought pickle masala and ground spices\nDough binding: coarse stone-milled local wheat flour kneaded firm / packaged fine whole-wheat atta kneaded with oil and baking powder\nChokha components: simple hearth-roasted desi baingan and foraged wild greens / combination mash of fire-charred eggplant, hybrid tomatoes, and boiled potatoes\nFat & finishing: austere dry ember litti eaten plain by peasants / cracked open and submerged generously in pure melted desi cow ghee\nCooking time: 35 to 45 minutes of patient rotating over dying embers / 15 to 20 minutes in high-heat modern ovens or air fryers\nDining context: durable travel ration for field workers, ascetics, and soldiers / popular street food cart staple and heritage restaurant delicacy",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Rustic open-fire ember pit / cast-iron tawa, gas tandoor, and convection oven",
      heatSource: "Dried cow-dung (goitha) embers / domestic LPG gas burner and electric oven",
      ingredientsList: [],
      preparationMethod:
        "Cooking heat source: glowing dried cow-dung cakes (goitha/upla) and wood coals / domestic LPG gas stoves, convection ovens, and electric air fryers",
      contemporaryDifference:
        "Shift from open cow-dung field embers and rustic plain dough to domestic gas ovens and generous desi cow ghee immersion.",
    },
    technologicalLeap: "Evolution from rustic open-air biomass ember roasting to domestic oven convection and air-fryer technology.",
    documentedCitation: "Comparative surveys of Bihar domestic cookery documenting cookware transitions and urban street food proliferation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Litti Chokha Recipe: 8 Steps",
    shortDescription:
      "whole wheat flour (atta), roasted gram flour (sattu), large purple eggplant (baingan), ripe country tomatoes & potatoes, pure desi cow ghee, pungent cold-pressed mustard oil, ajwain (carom) & kalonji (nigella seeds), fresh garlic, ginger & green chillies, stuffed red chilli pickle masala, fresh coriander leaves & black rock salt.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Litti Chokha Recipe",
      historicalCookware: "Ember grill, tandoor, or baking tray with mashing bowl",
      heatSource: "Medium heat radiant embers or 200°C (400°F) oven",
      ingredientsList: [
        "Whole wheat flour (atta)",
        "Roasted gram flour (sattu)",
        "Large purple eggplant (baingan)",
        "Ripe country tomatoes & potatoes",
        "Pure desi cow ghee",
        "Pungent cold-pressed mustard oil",
        "Ajwain (carom) & kalonji (nigella seeds)",
        "Fresh garlic, ginger & green chillies",
        "Stuffed red chilli pickle masala",
        "Fresh coriander leaves & black rock salt",
      ],
      preparationMethod:
        "1. In a large bowl, mix whole wheat flour with ajwain, salt, and 2 tablespoons of ghee or mustard oil; knead with water into a tight, firm dough and rest covered for 20 minutes.\n2. In a separate bowl, blend sattu with finely chopped garlic, ginger, green chillies, ajwain, kalonji, spicy red chilli pickle masala (or amchur and lemon juice), coriander leaves, salt, and raw mustard oil until crumbly yet cohesive.\n3. Divide dough into lemon-sized balls, hollow each into a deep cup, pack with 2 tablespoons of spiced sattu stuffing, pleat the edges to seal completely, and roll into smooth round spheres.\n4. Slit the eggplant, insert garlic cloves into the cuts, and roast along with whole tomatoes directly over open flames until charred black and tender; boil and peel the potatoes.\n5. Arrange the stuffed littis over glowing cow-dung/charcoal embers, in a tandoor, or in an oven at 200°C (400°F), rotating every 4 to 5 minutes for 20 to 25 minutes until evenly blistered and crisp.\n6. Peel charred skins from the cooled eggplant and tomatoes, combine in a bowl with mashed boiled potatoes, chopped onions, crushed garlic, chillies, coriander, salt, and raw mustard oil, mashing into a rustic chokha.\n7. Remove hot littis from the fire, wipe off surface ash with a clean cloth, gently crush each litti with your palms to fracture the crust, and submerge into a bowl of warm melted desi cow ghee.\n8. Serve hot ghee-drenched littis immediately with generous mounds of smoky baingan-aloo-tamatar chokha, fiery green coriander chutney, and pickled onion rings.",
      contemporaryDifference:
        "Numbered 8-step firm kneading, sattu packing, ember roasting, and ghee drenching process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step whole-wheat dough kneading, spiced sattu stuffing, ember roasting, chokha mashing, and ghee immersion protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The Biomass Ember Radiant Baking & Ghee Immersion Technique",
    shortDescription:
      "Baking stuffed dough spheres in smoldering cow-dung embers to build internal steam, fracturing the blistered crust, and drenching in warm desi cow ghee.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Biomass Ember Baking & Ghee Immersion Execution",
      historicalCookware: "Cow-dung ember pit (goitha) or clay tandoor",
      heatSource: "Smoldering flameless radiant coals (200°C to 220°C)",
      ingredientsList: [
        "Whole wheat flour (atta)",
        "Roasted gram flour (sattu)",
        "Large purple eggplant (baingan)",
        "Ripe country tomatoes & potatoes",
        "Pure desi cow ghee",
        "Pungent cold-pressed mustard oil",
        "Ajwain (carom) & kalonji (nigella seeds)",
        "Fresh garlic, ginger & green chillies",
        "Stuffed red chilli pickle masala",
        "Fresh coriander leaves & black rock salt",
      ],
      preparationMethod:
        "Baking spiced sattu-filled wheat balls in gentle biomass ash embers until blistered, cracking open hot crusts with thumb pressure, and submerging completely into pure melted desi cow ghee before serving with flame-smoked vegetable chokha.",
      contemporaryDifference:
        "Ancestral ash-baking and capillary ghee-saturation technique creating crisp outer shell and melt-in-mouth core.",
    },
    technologicalLeap: "Biomass radiant ember baking combined with capillary butterfat saturation.",
    documentedCitation: "Regional culinary anthropology and Bihar gastronomy surveys.",
  },
];

// ─────────────────────────────────────────────
// 5. MAKKI DI ROTI & SARSON DA SAAG (Punjab)
// ─────────────────────────────────────────────
export const MAKKI_SARSON_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Makki di Roti & Sarson da Saag: Rural Hearth Tradition",
    shortDescription:
      "Makki di roti and sarson da saag is a famous winter staple and comfort food of Punjab. \"Makki\" means maize or corn, \"roti\" means flatbread, and \"sarson\" is the Hindi and Punjabi name for mustard greens. \"Saag\" refers to cooked leafy greens. It is an agricultural hearth food traditionally cooked during the cold harvest months when fresh mustard leaves are abundant in the fields. The greens are slow-cooked and churned into a thick, coarse mash, while the flatbread is hand-patted from coarse maize flour and griddled on a tawa. It is finished with a generous dollop of freshly churned white butter (makhan) and served with jaggery (gur). No reliable historical record gives the exact year, place or creator of this combination; it has been a rural staple across Punjabi farming households for generations.\n\nWhy it is famous:\n- Seasonal harmony: fresh winter mustard greens paired with hearty yellow corn flatbread.\n- Earthy, robust flavour: mild natural bitterness of mustard greens balanced by sweet jaggery and rich churned butter.\n- Traditional churning: slow-cooked greens mashed with a wooden churner (ghotna) produce a distinct rustic texture.\n- Gluten-free flatbread technique: hand-patted cornmeal dough griddled until golden and crisp on the edges.\n- Classic accompaniment: served with white butter and jaggery, creating a comforting sweet-savoury balance.\n- Hearty farm nutrition: traditionally eaten by farmers for energy and warmth through long winter days.\n- Wide popularity: a signature emblem of Punjabi hospitality enjoyed across roadside dhabas and homes throughout northern India.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Makki di Roti & Sarson da Saag",
      historicalCookware: "Earthen pot (handi), wooden churner (ghotna), cast-iron tawa",
      heatSource: "Open earthen hearth (chulha) fired by dried wood",
      ingredientsList: [],
      preparationMethod:
        "Greens are slow-cooked and churned into a coarse mash, while flatbreads are hand-patted from coarse maize flour and griddled on a tawa.",
      contemporaryDifference:
        "Rural winter staple across Punjabi farming households served with white butter and jaggery.",
    },
    technologicalLeap: "Slow simmering and manual wood-churning of fibrous leafy winter greens.",
    documentedCitation: "Regional rural agricultural food traditions of Punjab.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Greens: Then - fresh mustard, bathua and spinach plucked straight from village fields | Now - store-bought bundled greens widely sold in urban vegetable markets\nChurning method: Then - slow-cooked in earthen pots and hand-churned with a wooden ghotna for hours | Now - pressure-cooked and blended with immersion hand blenders\nCornmeal: Then - coarse stone-ground maize flour milled locally | Now - packaged fine or medium corn flour from grocery stores\nFuel: Then - open earthen chulhas burning dried wood and cow-dung cakes | Now - domestic gas stoves and induction cooktops\nButter: Then - freshly hand-churned raw white butter (makhan) from buffalo milk | Now - commercial cultured white butter or dairy butter blocks\nReach: Then - a rustic rural winter meal cooked in Punjabi farm kitchens | Now - a celebrated pan-Indian winter special served in restaurants and homes across the country\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen pots and chulhas / Pressure cookers and modern non-stick or iron tawas",
      heatSource: "Wood or cow-dung embers / Domestic gas burners and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Churning method: Then - slow-cooked in earthen pots and hand-churned with a wooden ghotna for hours | Now - pressure-cooked and blended with immersion hand blenders",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adoption of pressure cooking and electric blending for rapid greens tenderization.",
    documentedCitation: "Comparative Punjabi kitchen surveys and agricultural culinary traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Makki di Roti & Sarson da Saag Recipe: 10 Steps",
    shortDescription:
      "Fresh mustard leaves (sarson), bathua, and spinach (palak), Maize flour (makki ka atta), Ginger and garlic, Green chillies, Onions, Mustard oil or ghee, Salt, Freshly churned white butter (makhan), Warm water (for kneading), Jaggery (gur, for serving).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Makki di Roti & Sarson da Saag Recipe",
      historicalCookware: "Deep heavy pot, wooden churner, cast-iron tawa",
      heatSource: "Low to medium heat on stovetop",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Ginger and garlic",
        "Green chillies",
        "Onions",
        "Mustard oil or ghee",
        "Salt",
        "Freshly churned white butter (makhan)",
        "Warm water (for kneading)",
        "Jaggery (gur, for serving)",
      ],
      preparationMethod:
        "1. Wash and chop the greens. - Clean fresh mustard, bathua and spinach leaves thoroughly under running water, then chop them finely.\n2. Boil with aromatics. - Place the greens in a pot with green chillies, ginger, garlic and salt. Add a splash of water and cook until tender.\n3. Mash the saag. - Mash the tender greens thoroughly using a wooden churner (ghotna) or potato masher to reach a coarse texture.\n4. Stir in cornmeal. - Dissolve a spoonful of maize flour in a little warm water and stir it into the simmering greens to thicken the saag.\n5. Simmer on low heat. - Cook the mashed greens gently on low heat until creamy and well combined.\n6. Prepare the tempering. - Heat mustard oil or ghee in a pan. Add chopped onions, ginger and garlic, and saute until golden brown.\n7. Combine and finish saag. - Stir the tempering into the cooked greens and let it simmer for 2 to 3 minutes.\n8. Knead the dough. - In a wide dish, combine maize flour with a pinch of salt. Gradually add warm water and knead with the palm into a soft dough.\n9. Pat and griddle the roti. - Pat a portion of dough between moist palms into a flat round disc. Place on a hot tawa and cook both sides until golden spots appear.\n10. Top and serve hot. - Brush the hot roti with ghee. Serve immediately with a bowl of steaming saag, a dollop of white butter, and jaggery.",
      contemporaryDifference:
        "Sarson da saag tastes best when slow-cooked. Knead maize flour with warm water using the palm of your hand for smooth flatbreads.",
    },
    technologicalLeap: "Hand-patting gluten-free cornmeal flatbreads and thickening greens with dissolved maize slurry.",
    documentedCitation: "Codified Punjabi regional cookbook documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Slow Cooking & Churning",
    yearRange: "Saag Simmering",
    centuryLabel: "Stage 4",
    headline: "Simmering Greens with Maize Flour Slurry",
    shortDescription:
      "Dissolving a spoonful of maize flour in warm water and stirring it into the mashed greens thickens the saag naturally while slow simmering.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Saag Thickening Technique",
      historicalCookware: "Deep heavy pot",
      heatSource: "Low simmer heat",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Ginger and garlic",
        "Green chillies",
        "Salt",
      ],
      preparationMethod:
        "Cook mashed greens gently on low heat with maize flour slurry until creamy and well combined.",
      contemporaryDifference:
        "Sarson da saag tastes best when slow-cooked.",
    },
    technologicalLeap: "Starch gelatinization from maize flour binding earthy leafy greens.",
    documentedCitation: "Traditional Punjabi cooking techniques.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tawa Griddling",
    yearRange: "Roti Technique",
    centuryLabel: "Stage 5",
    headline: "Hand-Patting & Tawa Griddling",
    shortDescription:
      "Kneading coarse cornmeal with warm water using the base of the palm enables hand-patting without gluten.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Makki Roti Griddling",
      historicalCookware: "Heavy cast-iron tawa",
      heatSource: "Medium heat",
      ingredientsList: [
        "Maize flour (makki ka atta)",
        "Warm water (for kneading)",
        "Salt",
        "Mustard oil or ghee",
      ],
      preparationMethod:
        "Pat dough between moist palms into a disc. Cook on hot tawa until golden spots appear on both sides.",
      contemporaryDifference:
        "Knead maize flour with warm water using the palm of your hand for smooth flatbreads.",
    },
    technologicalLeap: "Hydration and manual compaction of gluten-free maize flour dough.",
    documentedCitation: "Farmstead hearth practices across rural Punjab.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Steaming Saag Served with White Butter & Jaggery",
    shortDescription:
      "Served piping hot with freshly churned white butter melting over the greens, accompanied by golden rotis and sweet jaggery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Makki di Roti & Sarson da Saag Plated",
      historicalCookware: "Thali or clay serving plate",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Freshly churned white butter (makhan)",
        "Jaggery (gur, for serving)",
      ],
      preparationMethod:
        "Brush hot roti with ghee. Serve immediately with a bowl of steaming saag, a dollop of white butter, and jaggery.",
      contemporaryDifference:
        "Served with fresh white butter and jaggery.",
    },
    technologicalLeap: "Iconic regional pairing balancing bitter greens with sweet jaggery and dairy fat.",
    documentedCitation: "Modern regional culinary documentation.",
  },
];

// ─────────────────────────────────────────────
// 6. BUTTER CHICKEN (Punjab / Delhi)
// ─────────────────────────────────────────────
export const BUTTER_CHICKEN_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Butter Chicken: Origin & Makhani Sauce Heritage",
    shortDescription:
      "Butter chicken is a globally famous Indian chicken curry known for its rich, mildly spiced tomato, butter and cream gravy. It originated in restaurant kitchens in northern India during the mid-twentieth century. Cooks created the dish by simmering roasted tandoori chicken pieces in a silky, spiced tomato-butter gravy to keep the meat tender and moist. The dish is known in Hindi as murgh makhani, where \"murgh\" means chicken and \"makhani\" means cooked with butter. It is distinguished by its velvety sauce, smoky charred chicken pieces, and a balanced sweet-tangy flavor finished with fragrant dried fenugreek leaves (kasuri methi). No single person or exact year of invention is universally documented, and multiple culinary traditions and historic eateries claim its earliest preparation.\n\nWhy it is famous:\n- Velvety sauce texture: pureed tomatoes simmered with butter and finished with fresh cream create an exceptionally smooth gravy.\n- Smoky aroma: roasting or grilling the chicken beforehand gives the pieces a characteristic charred, tandoor-style flavour.\n- Balanced flavours: natural tomato acidity is softened by butter, cream, and a subtle touch of sweetness.\n- Distinct aroma of kasuri methi: crushed dried fenugreek leaves provide a unique, appetizing fragrance.\n- Mild spice profile: fragrant rather than sharply hot, making it accessible and beloved by diners of all palates.\n- Universal pairing: pairs exceptionally well with tandoori garlic naan, butter roti, or fragrant basmati rice.\n- Global icon: one of the most recognized and ordered Indian restaurant dishes across the world.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Butter Chicken",
      historicalCookware: "Clay tandoor oven, heavy copper degchi",
      heatSource: "Charcoal embers and coal pit",
      ingredientsList: [],
      preparationMethod:
        "Simmering roasted tandoori chicken pieces in a silky, spiced tomato-butter gravy to keep the meat tender and moist.",
      contemporaryDifference:
        "Originated in restaurant kitchens in northern India during the mid-twentieth century.",
    },
    technologicalLeap: "Emulsifying rich dairy butter and cream into strained tomato reduction to rehydrate roasted poultry.",
    documentedCitation: "Culinary histories and restaurant traditions of northern India.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Chicken cooking: Then - skewered whole or bone-in pieces roasted in deep coal-fired clay tandoors | Now - boneless chicken tikka cooked in electric ovens, air fryers, or stovetop grill pans\nTomato gravy: Then - whole fresh tomatoes hand-boiled, mashed, and strained through fine muslin | Now - commercially canned purees and mechanical food processors\nDairy enrichment: Then - fresh farm-churned white butter and hand-skimmed malai | Now - pasteurized commercial butter blocks and heavy whipping cream cartons\nTexture refinement: Then - rustic strained tomato reduction with basic spices | Now - enriched with cashew nut paste for a glossy restaurant sheen\nFuel: Then - charcoal-burning tandoors and hard-coke fire pits | Now - modern commercial gas ranges, combi-ovens, and domestic cooktops\nReach: Then - a specialty restaurant dish in northern Indian cities | Now - an iconic staple on Indian menus across the world\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Charcoal tandoor and copper degchi / Stovetop pans and electric ovens",
      heatSource: "Charcoal fire pits / Commercial gas ranges and domestic stovetops",
      ingredientsList: [],
      preparationMethod:
        "Chicken cooking: Then - skewered bone-in cuts in deep coal tandoors | Now - boneless chicken tikka in stovetop pans or ovens",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Fine-mesh straining of tomato reduction and blending cashew paste for high sheen.",
    documentedCitation: "Modern restaurant kitchen practice surveys across northern India.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Butter Chicken Recipe: 10 Steps",
    shortDescription:
      "Chicken (boneless pieces or bone-in cuts), Thick curd (yogurt), Ginger-garlic paste, Kashmiri red chilli powder, Ripe tomatoes (pureed), Butter, Fresh dairy cream, Kasuri methi (dried fenugreek leaves), Garam masala, Oil or ghee (for roasting), Salt and sugar (or honey).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Butter Chicken Recipe",
      historicalCookware: "Mixing bowl, grill pan or oven, heavy-bottomed pan, fine strainer",
      heatSource: "Medium heat on stovetop",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Thick curd (yogurt)",
        "Ginger-garlic paste",
        "Kashmiri red chilli powder",
        "Ripe tomatoes (pureed)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Garam masala",
        "Oil or ghee (for roasting)",
        "Salt and sugar (or honey)",
      ],
      preparationMethod:
        "1. Marinate the chicken. - Mix chicken pieces with thick curd, ginger-garlic paste, Kashmiri red chilli powder and salt. Rest for at least 30 minutes.\n2. Roast the chicken. - Cook the marinated pieces in an oven, pan or grill with a little oil until tender with light charred edges.\n3. Prepare tomato base. - Cook pureed ripe tomatoes in a pan with ginger-garlic paste and Kashmiri chilli powder until the raw aroma softens.\n4. Strain for smoothness. - Pass the cooked tomato mixture through a fine strainer to get a silky, smooth sauce base.\n5. Add the butter. - Return the strained puree to the pan and stir in butter on low heat until melted and glossy.\n6. Add the roasted chicken. - Add the roasted chicken pieces into the simmering sauce and mix gently.\n7. Simmer gently. - Let the chicken simmer in the sauce on low heat for about 8 to 10 minutes so flavours combine.\n8. Season and balance. - Add garam masala, salt, and a pinch of sugar or honey to balance the natural acidity of the tomatoes.\n9. Finish with cream and herbs. - Crush kasuri methi between your palms and sprinkle on top, then stir in fresh dairy cream.\n10. Garnish and serve. - Take into a serving bowl, swirl extra cream on top, and serve hot with naan, roti or steamed rice.",
      contemporaryDifference:
        "Strain the tomato puree for a velvety gravy. Crush kasuri methi between your palms right before adding to release maximum aroma.",
    },
    technologicalLeap: "Balancing tomato acidity with gentle butter simmering, cream finish, and palm-crushed fenugreek.",
    documentedCitation: "Standardized northern Indian restaurant formulations.",
  },
  {
    generationNumber: 4,
    eraTitle: "Tandoori Roasting",
    yearRange: "Roasting Protocol",
    centuryLabel: "Stage 4",
    headline: "High Heat Skewer Roasting",
    shortDescription:
      "Marinating chicken in spiced curd and roasting until edges are charred seals in juices before entering the sauce.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Charred Chicken Roasting",
      historicalCookware: "Grill pan or oven",
      heatSource: "High radiant heat",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Thick curd (yogurt)",
        "Ginger-garlic paste",
        "Kashmiri red chilli powder",
        "Oil or ghee (for roasting)",
      ],
      preparationMethod:
        "Cook marinated chicken pieces in an oven, pan or grill with a little oil until tender with light charred edges.",
      contemporaryDifference:
        "Charred edges impart the classic smoky note to the dish.",
    },
    technologicalLeap: "Pre-charring marinated chicken for dual flavor contrast against sweet-tangy gravy.",
    documentedCitation: "Restaurant tandoor techniques across Punjab and Delhi.",
  },
  {
    generationNumber: 5,
    eraTitle: "Velvet Gravy Emulsion",
    yearRange: "Makhani Sauce",
    centuryLabel: "Stage 5",
    headline: "Strained Tomato & Dairy Emulsion",
    shortDescription:
      "Passing cooked tomatoes through a fine mesh and simmering with generous butter creates the signature velvet texture.",
    image: ERA_PHOTO.butter_chicken_hero,
    generationRecipe: {
      recipeName: "Velvet Makhani Sauce",
      historicalCookware: "Heavy pan with fine mesh strainer",
      heatSource: "Low simmering flame",
      ingredientsList: [
        "Ripe tomatoes (pureed)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Salt and sugar (or honey)",
      ],
      preparationMethod:
        "Pass cooked tomato mixture through a fine strainer, return to pan with butter, and simmer with cream and crushed kasuri methi.",
      contemporaryDifference:
        "Strain the tomato puree for a velvety gravy.",
    },
    technologicalLeap: "Fine-straining eliminating seeds and skin fibers for pure velvet sauce consistency.",
    documentedCitation: "Classic makhani gravy culinary principles.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Murgh Makhani Served with Naan & Cream Swirl",
    shortDescription:
      "Presented in a warm bowl with a swirl of cream, butter gloss, and crushed kasuri methi, accompanied by garlic naan or basmati rice.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Murgh Makhani Plated",
      historicalCookware: "Serving bowl",
      heatSource: "Served hot",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
      ],
      preparationMethod:
        "Take into a serving bowl, swirl extra cream on top, and serve hot with naan, roti or steamed rice.",
      contemporaryDifference:
        "Crush kasuri methi between your palms right before adding to release maximum aroma.",
    },
    technologicalLeap: "Globally iconic presentation balancing rich dairy fat with aromatic herbs.",
    documentedCitation: "Contemporary northern Indian gastronomic surveys.",
  },
];

// ─────────────────────────────────────────────
// 7. AMRITSARI KULCHA (Punjab)
// ─────────────────────────────────────────────
export const AMRITSARI_KULCHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Amritsari Kulcha: Tandoori Crisp Bread Tradition",
    shortDescription:
      "Amritsari kulcha is a famous crisp, layered stuffed flatbread from the historic city of Amritsar, in Punjab. Unlike softer yeast-leavened kulchas or fluffy bhatoore, an authentic Amritsari kulcha is prepared from unleavened layered dough that is rolled with ghee, stuffed with a spicy potato filling, and baked inside an intense clay tandoor until blistered and golden. When pulled from the oven, it is gently crushed by hand to crack its flaky layers, slathered with freshly churned white butter, and served with spicy chole (chickpeas) and tangy tamarind-onion chutney. It is renowned as Amritsar's quintessential breakfast and street delicacy. No reliable historical record names an individual inventor or founding year; it evolved out of the vibrant community tandoor and street-food culture of Amritsar's historic walled city.\n\nWhy it is famous:\n- Flaky, layered texture: repeated folding with ghee creates delicate crisp layers that shatter when hand-crushed.\n- Tandoor blistering: direct baking against blistering clay oven walls produces a distinct smoky aroma and golden crunch.\n- Spicy tangy filling: mashed potatoes seasoned with roasted cumin, carom seeds (ajwain), and tangy dried pomegranate seeds (anardana).\n- Hand-crush tradition: pressing the hot baked kulcha between palms cracks the crust and releases trapped steam.\n- Generous butter topping: finished with a melting pool of freshly churned white butter.\n- Classic food pairing: traditionally eaten with slow-simmered Amritsari chole and sliced onions in sweet-sour tamarind water.\n- Cultural icon of Amritsar: a legendary breakfast specialty that visitors travel to the city specifically to experience.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Amritsari Kulcha",
      historicalCookware: "Earthen clay tandoor, dough rolling board (chakla)",
      heatSource: "High-radiant charcoal or hardwood fire inside clay pit oven",
      ingredientsList: [],
      preparationMethod:
        "Unleavened layered dough rolled with ghee, stuffed with seasoned potatoes, slapped against hot inner tandoor walls, and baked until crisp.",
      contemporaryDifference:
        "Quintessential street breakfast of Amritsar, Punjab, crushed by hand and served with white butter and chole.",
    },
    technologicalLeap: "Multi-layered dough lamination combined with high-radiant vertical wall clay tandoor baking.",
    documentedCitation: "Regional street food history and culinary heritage of Amritsar.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Dough preparation: Then - hand-kneaded refined flour rested and laminated using pure desi ghee | Now - machine-kneaded dough batches using commercial butter, shortening, or refined oil blends\nBaking equipment: Then - slapped onto the clay walls of deep, coal-fired earthen tandoors | Now - adapted for domestic kitchens using inverted iron tawas, convection ovens, or air fryers\nStuffing: Then - hand-mashed local potatoes seasoned with whole toasted spices and wild pomegranate seeds | Now - diverse stuffings including grated paneer, cauliflower, and packaged spice mixes\nFuel: Then - hardwood and charcoal burning at extreme heat in brick-lined pit ovens | Now - modern domestic gas burners and electric baking appliances\nButter: Then - hand-churned farm-fresh white butter slapped onto the steaming bread | Now - commercial dairy butter blocks and clarified ghee\nReach: Then - an urban street breakfast confined to Amritsar's bazaar lanes | Now - celebrated on restaurant menus and street-food stalls across India and worldwide\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Coal tandoor pit / Inverted heavy iron tawa or convection oven",
      heatSource: "Charcoal embers / Domestic stovetop gas flame",
      ingredientsList: [],
      preparationMethod:
        "Baking equipment: Then - slapped onto clay walls of coal-fired tandoors | Now - adapted on inverted iron tawas over gas burners",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Inverted tawa technique enabling tandoor-like radiant blistering on domestic gas burners.",
    documentedCitation: "Comparative street culinary traditions of Amritsar and contemporary home adaptations.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Amritsari Kulcha Recipe: 10 Steps",
    shortDescription:
      "Refined wheat flour (maida), Boiled and mashed potatoes, Ghee or butter (for lamination and topping), Carom seeds (ajwain) and cumin, Crushed coriander seeds, Dried pomegranate seeds (anardana powder), Green chilli and fresh coriander, Chopped onion, Salt, Water (for kneading), Fresh white butter (for serving).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Amritsari Kulcha Recipe",
      historicalCookware: "Mixing bowl, rolling pin, heavy iron tawa or tandoor",
      heatSource: "High direct flame or tandoor embers",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Boiled and mashed potatoes",
        "Ghee or butter (for lamination and topping)",
        "Carom seeds (ajwain) and cumin",
        "Crushed coriander seeds",
        "Dried pomegranate seeds (anardana powder)",
        "Green chilli and fresh coriander",
        "Chopped onion",
        "Salt",
        "Water (for kneading)",
        "Fresh white butter (for serving)",
      ],
      preparationMethod:
        "1. Knead the dough. - Mix refined flour, a pinch of salt and water. Knead into a soft, smooth dough, cover with a damp cloth, and rest for 30 minutes.\n2. Laminate the layers. - Roll the dough flat, smear generously with ghee, fold in thirds like an envelope, and repeat to build flaky layers.\n3. Prepare the filling. - Mash boiled potatoes with chopped onion, green chilli, fresh coriander, crushed coriander seeds, anardana, ajwain and salt.\n4. Portion and stuff. - Divide the layered dough into balls. Flatten each ball slightly, place a generous portion of stuffing in the centre, and seal tightly.\n5. Roll and flatten. - Gently pat or roll the stuffed dough with your fingers into a thick round disc, taking care not to tear the edges.\n6. Apply moisture and herbs. - Wet the top with a splash of water and press fresh coriander and crushed coriander seeds onto the surface.\n7. Bake in tandoor or tawa. - Press the wet side onto the hot inner tandoor wall or an inverted hot iron tawa so it sticks firmly.\n8. Crisp both sides. - Cook until the base is firmly set, then invert the tawa directly over the open flame until blisters turn golden brown and crisp.\n9. Hand-crush for layers. - Carefully remove the blistering kulcha and crush it gently between your palms to crack the flaky layers open.\n10. Butter and serve. - Top immediately with a melting dollop of fresh white butter. Serve piping hot with spicy chole and tamarind onion chutney.",
      contemporaryDifference:
        "Coarsely crushed coriander seeds and anardana in the stuffing provide the signature Amritsari crunch and tang. Do not use non-stick pans if baking on a tawa.",
    },
    technologicalLeap: "Hand-cracking hot laminated flatbread to expose shattering crisp layers.",
    documentedCitation: "Codified Amritsari kulcha culinary formulations.",
  },
  {
    generationNumber: 4,
    eraTitle: "Lamination Technique",
    yearRange: "Dough Folding",
    centuryLabel: "Stage 4",
    headline: "Repeated Ghee Envelope Folding",
    shortDescription:
      "Smearing flattened dough with ghee and repeatedly folding into thirds creates paper-thin buttery strata.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kulcha Dough Lamination",
      historicalCookware: "Rolling board and pin",
      heatSource: "Ambient kitchen resting temperature",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Ghee or butter (for lamination and topping)",
        "Water (for kneading)",
        "Salt",
      ],
      preparationMethod:
        "Roll dough flat, smear with ghee, fold in thirds like an envelope, and repeat to build flaky layers.",
      contemporaryDifference:
        "Resting between folds ensures tender, pliable dough layers.",
    },
    technologicalLeap: "Physical fat-barrier lamination producing delicate pastry-like flakiness.",
    documentedCitation: "Traditional Amritsari baker techniques.",
  },
  {
    generationNumber: 5,
    eraTitle: "Inverted Tawa Blistering",
    yearRange: "Baking Technique",
    centuryLabel: "Stage 5",
    headline: "Direct Flame Blistering on Inverted Tawa",
    shortDescription:
      "Moistening one side makes the flatbread adhere to the hot iron tawa, which is then flipped directly over the open flame.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Inverted Tawa Baking Protocol",
      historicalCookware: "Concave heavy iron tawa",
      heatSource: "Direct stovetop flame",
      ingredientsList: [
        "Crushed coriander seeds",
        "Green chilli and fresh coriander",
        "Water (for kneading)",
      ],
      preparationMethod:
        "Press wet side onto hot iron tawa. Once base sets, invert directly over open flame until blisters turn golden brown.",
      contemporaryDifference:
        "Do not use non-stick pans if baking on a tawa.",
    },
    technologicalLeap: "Replication of intense radiant tandoor environment via inverted iron cookware.",
    documentedCitation: "Domestic Punjabi adaptations of traditional tandoor cooking.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hand-Crushed Amritsari Kulcha with White Butter",
    shortDescription:
      "Crushed gently between palms to crack open flaky layers, slathered with fresh white butter, and served hot with chole and chutney.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Amritsari Kulcha Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Boiled and mashed potatoes",
        "Fresh white butter (for serving)",
      ],
      preparationMethod:
        "Carefully remove blistering kulcha and crush gently between palms. Top with melting white butter and serve hot with chole.",
      contemporaryDifference:
        "Coarsely crushed coriander seeds and anardana provide signature crunch and tang.",
    },
    technologicalLeap: "Hand-crush ritual breaking structural tension to maximize buttery mouthfeel.",
    documentedCitation: "Contemporary street culinary surveys of Amritsar.",
  },
];
export const DALMA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dalma in Odisha & the Jagannath Tradition",
    shortDescription:
      "Dalma traces back to ancient indigenous tribal and temple culinary traditions of Odisha. It originated with the Savara tribes who offered simple stews of wild lentils and forest produce to Neela Madhaba, later sanctified into the 12th-century Jagannath Temple at Puri as an essential Mahaprasad offering. Prepared in the sacred temple kitchen (Rosha Ghara), it combines toor dal with native country vegetables, cooked purely sattvic without onion or garlic. Over centuries, this sacred temple offering spread across Odia homes as the definitive everyday and festive soul food.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Unglazed earthen pots (kudua) over sacred hearths",
      heatSource: "Dried wood-log fire inside temple earthen hearths",
      ingredientsList: [],
      preparationMethod:
        "Lentils and native forest vegetables slow-steamed together in earthen kudua pots, finished without onion or garlic with pure cow ghee and roasted cumin.",
      contemporaryDifference:
        "Sacred temple Mahaprasad lineage of Puri Jagannath Temple combining toor dal with native country vegetables and pure desi ghee.",
    },
    technologicalLeap: "Earthen kudua pot stacking technique utilizing rising steam convection across porous clay.",
    documentedCitation: "Puri Jagannath Temple kitchen chronicles & regional Odia culinary history.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: slow steam-simmering in unglazed earthenware / rapid single-whistle simmering in modern pressure cookers\nVessel: tiered porous earthen pots (kudua) stacked over wood hearths / stainless steel pots, anodized pressure cookers, and non-stick pans\nFuel: dried hardwood and sacred wood-log hearths / domestic LPG gas stoves and electric induction cooktops\nCooking time: 2 to 3 hours of gentle earthen pot simmering / 20 to 25 minutes in household pressure cookers\nLentils: indigenous toor dal or wild split moong simmered whole / polished hybrid toor, moong, or chana dal blends\nVegetables: strictly native tubers, raw plantain, green papaya, and colocasia / modern additions like potatoes, tomatoes, beans, and carrots\nTempering: pure cow ghee crackled with cumin, dry chillies, or panch phoron / sunflower or mustard oil blends alongside ready-packaged spices\nFinishing: hand-grated fresh coconut and clay-roasted cumin-chilli powder / desiccated coconut flakes and commercial garam masala",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Tiered earthen pots (kudua) / stainless steel pots and pressure cookers",
      heatSource: "Hardwood fire / domestic LPG gas stoves and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow steam-simmering in unglazed earthenware / rapid single-whistle simmering in modern pressure cookers",
      contemporaryDifference:
        "Transition from wood-fired earthen temple kuduas to domestic pressure cookers and contemporary market produce.",
    },
    technologicalLeap: "Thermal and vessel evolution reducing multi-hour earthen simmering to rapid domestic pressure cooking.",
    documentedCitation: "Comparative historical culinary records and Odia domestic surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dalma Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: toor dal (arhar dal), raw banana, pumpkin, raw papaya, brinjal (eggplant), sweet potato, panch phoron, dry red chillies, desi ghee, fresh grated coconut.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Dalma Recipe",
      historicalCookware: "Heavy earthen kudua pot or deep heavy-bottomed pot",
      heatSource: "Medium heat to boil, followed by gentle low-flame simmering",
      ingredientsList: [
        "Toor dal (arhar dal)",
        "Raw banana",
        "Pumpkin",
        "Raw papaya",
        "Brinjal (eggplant)",
        "Sweet potato",
        "Panch phoron",
        "Dry red chillies",
        "Desi ghee",
        "Fresh grated coconut",
      ],
      preparationMethod:
        "1. Wash and rinse the toor dal thoroughly, then soak in water for 20 to 30 minutes to ensure even cooking.\n2. Peel and chop the raw banana, papaya, and sweet potato into firm, uniform chunks; cut the pumpkin and brinjal into slightly larger pieces so they do not dissolve.\n3. In a heavy earthen kudua pot or deep pot, bring 4 cups of water to a boil with turmeric powder, crushed ginger, and salt.\n4. Add the soaked toor dal along with the harder vegetables (raw banana, papaya, and sweet potato); simmer over medium heat until halfway tender.\n5. Add the softer vegetables (pumpkin and brinjal) along with half of the fresh grated coconut; continue simmering until the dal is soft and vegetables are fork-tender.\n6. In a small tempering pan, heat pure desi ghee, add panch phoron (five-spice blend) and dry red chillies, and let them crackle until fragrant.\n7. Pour the sizzling hot ghee tempering (chhunka) directly into the simmering dalma and cover immediately with a lid to trap the aromas for 5 minutes.\n8. Uncover, sprinkle with roasted cumin-chilli powder (bhaja jeera lanka gunda) and remaining grated coconut, and serve hot with steamed rice or pakhala.",
      contemporaryDifference:
        "Numbered 8-step sattvic temple-style cooking protocol using 10 authentic ingredients.",
    },
    technologicalLeap: "Staggered vegetable simmering preventing overcooking of soft gourds while fully softening dense root tubers.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Earthen Pot Technique",
    yearRange: "Kudua Method",
    centuryLabel: "Steaming Method",
    headline: "The Kudua Earthen Pot Steam Layering Protocol",
    shortDescription:
      "Porous unglazed earthenware allows water to evaporate steadily at sub-boiling temperatures, producing tender, non-mushy vegetables while infusing subtle mineral notes.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kudua Pot Steam Protocol",
      historicalCookware: "Unglazed earthenware kudua",
      heatSource: "Slow wood-log embers",
      ingredientsList: [
        "Toor dal",
        "Raw vegetables",
        "Turmeric and ginger water",
      ],
      preparationMethod:
        "Layer dal and root vegetables in earthen pots, cover loosely, and simmer slowly over residual embers.",
      contemporaryDifference:
        "Earthen pot cooking imparts natural alkaline balance and earthy aroma unobtainable in metal pans.",
    },
    technologicalLeap: "Sub-boiling clay porosity convection preserving vegetable cellular integrity.",
    documentedCitation: "Puri Jagannath Temple Mahaprasad Traditions.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tempering & Finishing",
    yearRange: "Chhunka Technique",
    centuryLabel: "Tempering Protocol",
    headline: "Ghee, Panch Phoran & Roasted Cumin-Chilli Aromatics",
    shortDescription:
      "The defining moment of Dalma occurs when sputtering panch phoran and red chillies bloomed in hot desi ghee are poured into the pot and sealed immediately.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Chhunka Tempering Protocol",
      historicalCookware: "Cast-iron or brass tadka ladle",
      heatSource: "High direct heat for fat bloom",
      ingredientsList: [
        "Pure cow ghee",
        "Panch phoron (five spices)",
        "Dry red chillies",
        "Bhaja jeera-lanka powder",
        "Grated coconut",
      ],
      preparationMethod:
        "Heat ghee until shimmering, bloom whole spices until aromatic, pour sizzling over dal, cover tightly, and garnish with fresh coconut.",
      contemporaryDifference:
        "Signature Odia aroma combination of ghee-fried panch phoran and freshly roasted cumin-chilli powder.",
    },
    technologicalLeap: "Lipophilic flavor extraction: blooming whole aromatic essential oils directly in hot butterfat.",
    documentedCitation: "Regional food tradition & service documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Dalma Plated & Served",
    shortDescription:
      "Served steaming hot in bell-metal kansa bowls with fragrant steamed rice or cooling fermented pakhala, beloved across Odisha and globally.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Dalma Plated",
      historicalCookware: "Traditional Kansa (bell-metal) bowl or plate",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Finished Dalma",
        "Fresh grated coconut garnish",
        "Puri Jagannath ghee drizzle",
      ],
      preparationMethod:
        "Ladle into deep kansa bowls, sprinkle with extra roasted spice powder and coconut, and serve alongside hot rice and ghee.",
      contemporaryDifference:
        "Soulful cultural centerpiece of everyday Odia family meals and grand festive thalis.",
    },
    technologicalLeap: "Ayurvedic tridoshic balance combining legumes, native vegetables, healthy saturated fats, and digestive spices.",
    documentedCitation: "Odisha Tourism & Cultural Heritage Culinary Archive.",
  },
];

// ─────────────────────────────────────────────
// CHHENA PODA (Odisha)
// Caramelized Baked Cottage Cheese Dessert
// ─────────────────────────────────────────────
export const CHHENA_PODA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chenna Poda in Nayagarh, Odisha",
    shortDescription:
      "Chenna Poda originated in Nayagarh, Odisha, and is traditionally made using fresh cottage cheese, sugar and semolina. Earlier, it was slowly baked in traditional ovens using simple household ingredients. Today, electric ovens, modern kitchen equipment and commercial bakeries have made its preparation easier while preserving its distinctive caramelized crust and traditional flavour.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional clay ovens and sal leaves",
      heatSource: "Dying coal embers and wood-fire residual heat",
      ingredientsList: [],
      preparationMethod:
        "Fresh cottage cheese kneaded by hand with sugar and semolina, wrapped in sal tree leaves and slowly baked in traditional ovens until caramelized.",
      contemporaryDifference:
        "Originated in Nayagarh, Odisha as India's premier indigenous baked cheese dessert.",
    },
    technologicalLeap: "Sugar caramelization over dying embers forming a natural protective crust around moist curd cheese.",
    documentedCitation: "Regional gastronomic documentation & Nayagarh district culinary records.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Chenna: Homemade / Homemade or commercially prepared\nMixing: By hand / Hand mixing or machines\nBaking: Wood-fired ovens / Electric ovens\nContainers: Earthen pots / Metal baking trays\nFuel: Firewood / Electricity or gas\nPreparation: Mostly household-based / Household and commercial\nStorage: Prepared for immediate consumption / Refrigeration and packaged storage",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen pots and sal leaves / metal baking trays and electric ovens",
      heatSource: "Firewood embers / electricity or gas",
      ingredientsList: [],
      preparationMethod:
        "Chenna: Homemade / Homemade or commercially prepared. Baking: Wood-fired ovens / Electric ovens.",
      contemporaryDifference:
        "Transition from wood-fired household ovens and earthen pots to electric ovens, metal baking trays, and packaged storage.",
    },
    technologicalLeap: "Controlled electric oven baking replacing manual coal-ember monitoring.",
    documentedCitation: "Comparative food studies & modern Odia bakery surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Chenna Poda Recipe: 6 Key Ingredients, 5 Steps",
    shortDescription:
      "Key ingredients: fresh or commercially prepared chenna, refined sugar, semolina, ghee, cardamom powder, cashews and raisins.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Chenna Poda Recipe",
      historicalCookware: "Aluminium or stainless-steel baking tray",
      heatSource: "Electric oven or commercial baking equipment at controlled temperature",
      ingredientsList: [
        "Fresh or commercially prepared chenna",
        "Refined sugar",
        "Semolina",
        "Ghee",
        "Cardamom powder",
        "Cashews and raisins",
      ],
      preparationMethod:
        "1. Fresh chenna is prepared at home or purchased from dairy shops.\n2. Ingredients are mixed using modern kitchen equipment.\n3. The mixture is placed in aluminium or stainless-steel baking trays.\n4. Electric ovens and commercial baking equipment provide controlled temperatures.\n5. The finished dessert is packaged and stored under suitable conditions.",
      contemporaryDifference:
        "Standardized 5-step preparation with 6 key ingredients using modern equipment while preserving the classic caramelized crust.",
    },
    technologicalLeap: "Precise temperature regulation ensuring even caramel crust formation without drying the cheese core.",
    documentedCitation: "Codified recipe documentation detailing Chenna Poda preparation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Mixing & Kneading Technique",
    yearRange: "Texture Mastery",
    centuryLabel: "Kneading Protocol",
    headline: "Fresh Chenna & Sugar Matrix Kneading",
    shortDescription:
      "Thorough kneading of fresh chenna with sugar and semolina releases whey moisture, dissolving sugar granules into a smooth paste that caramelizes evenly upon baking.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Chenna Kneading Protocol",
      historicalCookware: "Mixing bowl or mechanical mixer",
      heatSource: "Frictional warmth during kneading",
      ingredientsList: [
        "Fresh chenna",
        "Refined sugar",
        "Semolina",
      ],
      preparationMethod:
        "Knead fresh chenna with sugar until smooth, fold in semolina, ghee, cardamom, and dry fruits.",
      contemporaryDifference:
        "Modern hand mixing or mechanical machines ensure uniform sugar dispersion for consistent caramelization.",
    },
    technologicalLeap: "Curd protein and sucrose matrix stabilization preventing curd separation under baking heat.",
    documentedCitation: "Odia Confectionery Technical Manual.",
  },
  {
    generationNumber: 5,
    eraTitle: "Baking & Caramelization",
    yearRange: "Baking Protocol",
    centuryLabel: "Baking Technique",
    headline: "Controlled Baking & Caramel Crust Development",
    shortDescription:
      "Baking in ghee-greased trays at controlled heat browns external sugars through Maillard reaction and caramelization, giving Chenna Poda its signature mahogany exterior.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Baking & Caramelization Protocol",
      historicalCookware: "Baking tray lined with ghee or parchment",
      heatSource: "Electric oven (180°C to 200°C) or commercial deck oven",
      ingredientsList: [
        "Kneaded cheese mixture",
        "Desi ghee for greasing",
        "Cashews and raisins",
      ],
      preparationMethod:
        "Transfer mixture into metal tray, bake until top and edges turn deep golden brown, then cool before slicing.",
      contemporaryDifference:
        "Electric ovens ensure reproducible golden-brown crust without scorched bitterness.",
    },
    technologicalLeap: "Thermal convection balancing internal moisture retention with external caramel crust formation.",
    documentedCitation: "Bakery and Confectionery Science Surveys.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Chenna Poda Plated & Served",
    shortDescription:
      "Celebrated across Odisha and worldwide as the definitive crown jewel of Odia desserts, sliced into caramelized wedges and enjoyed fresh or refrigerated.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Chenna Poda Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served at room temperature or gently chilled",
      ingredientsList: [
        "Caramelized Chenna Poda slice",
        "Cashew and raisin garnish",
      ],
      preparationMethod:
        "Slice into thick wedges, package for takeaway or serve immediately with its glistening caramelized crust.",
      contemporaryDifference:
        "Available in homes, traditional sweet shops, and commercial vacuum-sealed packages.",
    },
    technologicalLeap: "Modified atmosphere packaging and refrigeration extending shelf life for national and international distribution.",
    documentedCitation: "National Dairy and Confectionery Survey.",
  },
];

// ─────────────────────────────────────────────
// PAKHALA BATA (Odisha)
// Traditional Fermented Water Rice & Cooling Meal
// ─────────────────────────────────────────────
export const PAKHALA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pakhala Bata in Odisha",
    shortDescription:
      "Pakhala Bata is a traditional food of Odisha, prepared by soaking cooked rice in water and allowing it to develop a mildly sour flavour through natural fermentation. Earlier, families stored rice in earthen pots and enjoyed it with green chillies, onions and seasonal vegetables. Today, modern cooking equipment, refrigerators and filtered water have changed its preparation and storage, while its traditional taste and cultural importance remain popular.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Clay and earthen pots",
      heatSource: "Firewood stove for boiling rice, ambient summer air for natural fermentation",
      ingredientsList: [],
      preparationMethod:
        "Rice cooked in clay vessels, transferred to earthen pots, submerged in water, and left overnight for natural fermentation.",
      contemporaryDifference:
        "Ancient agrarian and temple staple of Odisha, celebrated for its natural cooling and digestive properties.",
    },
    technologicalLeap: "Overnight submerged lactic acid fermentation lowering glycemic index and enhancing mineral bioavailability.",
    documentedCitation: "Historical Odia literature & Jagannath Temple Mahaprasad chronicles.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Rice cooking: Clay or metal pots / Rice cookers and pressure cookers\nStorage: Earthen pots / Steel or glass containers\nFermentation: Natural overnight fermentation / Natural fermentation or quick preparation\nWater: Locally available drinking water / Filtered drinking water\nSeasoning: Simple local ingredients / Different spices and seasonings\nCooling: Earthen pots and natural surroundings / Refrigerators\nPreparation: Entirely manual / Manual and modern kitchen methods\nServing: Seasonal vegetables and homemade sides / Traditional sides and restaurant-style accompaniments",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pots and earthen jars / steel containers, pressure cookers, and refrigerators",
      heatSource: "Firewood stoves / modern gas and electric cookers",
      ingredientsList: [],
      preparationMethod:
        "Rice cooking: Clay or metal pots / Rice cookers and pressure cookers. Storage: Earthen pots / Steel or glass containers.",
      contemporaryDifference:
        "Modern transition to electric rice cookers, filtered water, and refrigeration while preserving traditional fermentation.",
    },
    technologicalLeap: "Domestic refrigeration and pressure cooking streamlining traditional summer food preparation.",
    documentedCitation: "Regional gastronomic surveys & Odia domestic culinary history.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pakhala Bata Recipe: 12 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: cooked rice, water, curd, salt, green chillies, onion, ginger, curry leaves, mustard seeds, dry red chilli, mustard oil, coriander leaves.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pakhala Bata Recipe",
      historicalCookware: "Earthen pot or wide bowl and small tempering pan",
      heatSource: "Gentle stove heat for mustard oil seasoning",
      ingredientsList: [
        "Cooked rice",
        "Water",
        "Curd",
        "Salt",
        "Green chillies",
        "Onion",
        "Ginger",
        "Curry leaves",
        "Mustard seeds",
        "Dry red chilli",
        "Mustard oil",
        "Coriander leaves",
      ],
      preparationMethod:
        "1. Cook rice normally and allow it to cool.\n2. Transfer the cooked rice into a bowl or earthen pot and add water.\n3. Leave it covered for several hours or overnight at a suitable temperature to develop its traditional mildly sour flavour.\n4. Mix curd and salt into the soaked rice.\n5. Heat mustard oil in a small pan; add mustard seeds, dry red chilli and curry leaves.\n6. Mix chopped onion, green chillies and ginger into the rice.\n7. Add the seasoning to the rice mixture and gently mix.\n8. Garnish with coriander leaves and serve with Badi Chura, Saga Bhaja or fried vegetables.",
      contemporaryDifference:
        "Standardized 8-step preparation using 12 authentic ingredients for traditional refreshing flavor.",
    },
    technologicalLeap: "Mustard oil tempering (chhunka) infused into cold fermented rice water, creating emulsified aromatic layers.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Fermentation Technique",
    yearRange: "Fermentation Method",
    centuryLabel: "Fermentation Protocol",
    headline: "Submerged Lactic Acid Overnight Fermentation",
    shortDescription:
      "Submerging parboiled rice under water in porous clay jars facilitates natural colonization by beneficial lactic acid bacteria, yielding cooling organic acids and mild effervescence.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Submerged Fermentation Protocol",
      historicalCookware: "Unglazed earthen handi",
      heatSource: "Ambient room temperature (8 to 12 hours)",
      ingredientsList: [
        "Cooked rice",
        "Fresh water",
        "A pinch of salt",
      ],
      preparationMethod:
        "Soak cooked parboiled rice completely under water, cover loosely with an earthen plate, and rest overnight in a cool corner.",
      contemporaryDifference:
        "Traditional overnight rest creates natural probiotics and subtle sour tang impossible to duplicate with vinegar.",
    },
    technologicalLeap: "Microbial enzymatic starch breakdown releasing bioavailable B-complex vitamins and minerals.",
    documentedCitation: "Journal of Food Science and Nutrition Odia Fermented Foods Survey.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tempering & Sides",
    yearRange: "Chhunka & Accompaniments",
    centuryLabel: "Tempering Protocol",
    headline: "Mustard Oil Chhunka & Classic Accompaniments",
    shortDescription:
      "Crackling pungent black mustard seeds, fiery red chillies, and curry leaves in smoking virgin mustard oil, poured sizzling over the cold rice, balances chill and pungency.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pakhala Chhunka Protocol",
      historicalCookware: "Cast-iron tadka ladle",
      heatSource: "Direct high heat for mustard oil flash point",
      ingredientsList: [
        "Kachi ghani mustard oil",
        "Mustard seeds",
        "Dry red chilli and curry leaves",
        "Badi chura side dish",
      ],
      preparationMethod:
        "Heat mustard oil till lightly smoking, crackle whole seeds and chillies, pour directly over cold rice, and serve with crushed badi chura.",
      contemporaryDifference:
        "Temperature and texture contrast between ice-cold tangy broth and sizzling pungent mustard seasoning.",
    },
    technologicalLeap: "Thermal shock contrast: boiling aromatic oil emulsifying across cold probiotic rice liquor.",
    documentedCitation: "Traditional Odia Domestic Gastronomy.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Pakhala Bata Plated & Pakhala Dibasa",
    shortDescription:
      "Celebrated across Odisha and by the global diaspora on March 20 (Pakhala Dibasa), served with roasted potatoes, saga bhaja, and badi chura.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Pakhala Bata Plated",
      historicalCookware: "Heavy bell-metal kansa bowl or broad earthen plate",
      heatSource: "Served chilled",
      ingredientsList: [
        "Chilled Dahi Pakhala",
        "Badi Chura",
        "Saga Bhaja",
        "Fried fish or roasted potato",
      ],
      preparationMethod:
        "Ladle into large kansa bowls, garnish with coriander and green chillies, and arrange traditional sides around the rim.",
      contemporaryDifference:
        "Statewide cultural celebration on Pakhala Dibasa (March 20) in homes, luxury hotels, and community festivals.",
    },
    technologicalLeap: "Standardized regional culinary tourism presentation and gastro-diplomacy celebration.",
    documentedCitation: "Odisha Tourism Department Pakhala Dibasa Archive.",
  },
];

export const APPAM_STEW_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Appam with Vegetable Stew in Kerala",
    shortDescription:
      "Appam is a lacy, fermented rice-and-coconut pancake of Kerala. It is also eaten in Tamil Nadu and in Sri Lanka, where it is called a hopper. Food historian K. T. Achaya is cited as saying appam appears in ancient Tamil Sangam literature, with poems describing appams sold in the markets of ancient Madurai. No date is given in the source. Another view, from food researcher Dr Tanya Abraham, is that an early form may have come to Kerala with Kochi's Jewish community, whose dish Oppo is \"believed to have gradually evolved\" into appam. Cochin Jews are also said to have used fresh toddy instead of yeast to ferment it. The name may come from the Sanskrit \"apupa\" (a fried dainty). This is uncertain. Appam is traditionally cooked in an appachatti, a deep wok-shaped pan. The vegetable stew is a mild coconut-milk stew served with appam, and the pairing is often served at festive meals such as Christmas and Easter in Kerala. The origin of the stew itself is not documented in the sources. No single origin, date or creator is documented with certainty. Appam seems to have more than one origin, shaped by several communities over centuries.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Appachatti (deep curved wok pan)",
      heatSource: "Traditional wood hearth fire",
      ingredientsList: [],
      preparationMethod:
        "Appam is traditionally cooked in an appachatti, a deep wok-shaped pan, paired with coconut milk vegetable stew for festive meals.",
      contemporaryDifference:
        "No single origin or date documented; shaped by diverse Kerala communities over centuries.",
    },
    technologicalLeap: "Fermented raw rice and coconut batter swirled in a curved pan to achieve lacy crisp margins and a pillowy steamed core.",
    documentedCitation:
      "K. T. Achaya, A Historical Dictionary of Indian Food; Dr Tanya Abraham; ancient Tamil Sangam literature.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Fermenting agent: Then - fresh toddy, as in kallappam | Now - instant or active dry yeast with a little sugar\nFermentation time: Then - overnight, about 8 to 10 hours | Now - about 2 to 3 hours with yeast in some recipes\nPan: Then - appachatti, a deep wok-shaped pan | Now - non-stick appam pan or a small wok\nStew cooking: Then - vegetables simmered in thin coconut milk, thick milk added at the end | Now - vegetables often pressure cooked first, then simmered with coconut milk\nStew spices: Then - cloves, peppercorns, cinnamon and cardamom with curry leaves in coconut oil | Now - fewer whole spices in some recipes (cloves and pounded peppercorns only)\nEaten with: Then - vegetable or egg curry, or chickpea curry | Now - the coconut-milk vegetable stew, which is also paired with parotta, idiyappam or ghee rice\nRecipe: Then - largely unchanged for centuries, according to one source | Now - faster yeast and instant versions",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen / cast-iron appachatti → non-stick appam pan or small wok",
      heatSource: "Wood fire hearth → domestic gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Fresh toddy fermentation → commercial instant yeast; open simmering → modern pressure cooking",
      contemporaryDifference:
        "Fermenting agent: fresh toddy / instant or active dry yeast with a little sugar",
    },
    technologicalLeap: "Transition from wild palm toddy leavening and heavy cast pans to controlled active yeast and non-stick curve pans.",
    documentedCitation:
      "Comparative regional culinary records of Kerala household cooking and contemporary adaptations.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Appam with Vegetable Stew Recipe: 8 Steps",
    shortDescription:
      "raw rice, cooked rice, coconut milk (thin and thick), yeast, sugar, salt, mixed vegetables (potato, carrot, beans, peas), onion, green chilli and ginger, whole spices (cloves, peppercorns, cinnamon, cardamom) with curry leaves and coconut oil.\n\n1. Soak the rice. Rinse the raw rice and soak it for 4 to 5 hours, then drain. (The grains should look swollen.)\n2. Grind the batter. Grind the soaked rice with a little cooked rice and water. (The batter should be smooth, with no gritty grains.)\n3. Ferment the batter. Mix yeast and sugar in warm water, stir it in with some coconut milk, cover and leave overnight, about 8 to 10 hours. (It is ready when the batter has risen and is bubbly. Keep it warm in cold weather.)\n4. Start the stew. Heat coconut oil, fry the whole spices, then add onion, green chilli, ginger and curry leaves. (The onion should turn soft and see-through, and the spices should smell fragrant.)\n5. Cook the vegetables. Add the mixed vegetables, fry for about 2 minutes, then pour in the thin coconut milk and simmer. (The vegetables are done when they are tender but still hold their shape.)\n6. Finish the stew. Stir in the thick coconut milk, adjust the salt and warm it gently. Do not boil. (The stew should look creamy and not split.)\n7. Cook the appam. Add salt to the batter. Heat the appam pan, pour in a ladle of batter, swirl it, cover and cook on low heat without flipping. (The centre should be soft and thick, and the edges thin, lacy and golden.)\n8. Serve. Serve the hot appam with the warm stew, garnished with curry leaves and a drizzle of coconut oil. (Serve right away while the appam is soft.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Appam with Vegetable Stew Recipe",
      historicalCookware: "Appam pan / appachatti with domed lid, deep stew pot",
      heatSource: "Gentle low to medium flame",
      ingredientsList: [
        "Raw rice",
        "Cooked rice",
        "Coconut milk (thin and thick)",
        "Yeast",
        "Sugar",
        "Salt",
        "Mixed vegetables (potato, carrot, beans, peas)",
        "Onion",
        "Green chilli and ginger",
        "Whole spices (cloves, peppercorns, cinnamon, cardamom) with curry leaves and coconut oil",
      ],
      preparationMethod:
        "1. Soak the rice.\n2. Grind the batter.\n3. Ferment the batter.\n4. Start the stew.\n5. Cook the vegetables.\n6. Finish the stew.\n7. Cook the appam.\n8. Serve.",
      contemporaryDifference:
        "8. Serve hot appam with warm vegetable stew, garnished with curry leaves and coconut oil.",
    },
    technologicalLeap: "Synchronized dual-component preparation: aerated swirl batter steaming paired with gentle two-stage coconut milk vegetable simmering.",
    documentedCitation:
      "Traditional Kerala culinary practice and codified Palappam and Ishtu recipes.",
  },
];

export const FISH_MOLEE_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Fish Molee in Kerala",
    shortDescription:
      "Fish molee (also spelled moilee, and called meen moilee in Malayalam) is a mild, creamy Kerala fish curry cooked in coconut milk with green chillies, ginger, garlic and curry leaves. It is said to have originated in central Kerala. Its cooking is linked to Portuguese influence on Kerala's coast. Some sources say the recipe dates to the 15th century, but this is a legend and is not documented history. A popular legend says traditional Kerala fish curries were too hot for Portuguese officials, so a woman named Molly cooked it with coconut milk and mild green chillies instead of red chillies, and the dish became known as \"fish molee\". This is a folk story, not a proven origin of the name. The sources do not explain the name's etymology any further, and no date, creator or exact place is documented with certainty.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen meen chatti (clay fish pot)",
      heatSource: "Traditional wood hearth fire",
      ingredientsList: [],
      preparationMethod:
        "Fish molee is a mild, creamy Kerala fish curry gently cooked in coconut milk with green chillies, ginger, garlic and curry leaves.",
      contemporaryDifference:
        "No date, creator or exact place is documented with certainty; linked by folklore to coastal Portuguese interactions.",
    },
    technologicalLeap: "Gentle coconut milk fish poaching using mild green chillies rather than fiery red chilli paste.",
    documentedCitation:
      "Central Kerala culinary history and documented Portuguese Malabar coastal maritime trade influences.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Spice level: Then - red-chilli Kerala fish curries, according to the legend | Now - a mild molee with green chillies, adjusted to taste\nCoconut milk: Then - first (thick) and second (thin) extracts from freshly grated coconut | Now - canned coconut milk diluted with water\nFish: Then - seer fish, king fish or pomfret | Now - any fish, including thawed frozen fish\nFish preparation: Then - marinated with turmeric and salt, then shallow-fried | Now - also added raw straight into the gravy in some recipes\nGravy: Then - thickened with a paste of coconut, cashew and spices in one recipe | Now - thickened by simmering with tomato in others\nEaten with: Then - steamed rice or appam | Now - also roti, bread, Kerala parotta, dosa and idiyappam\nReach: Then - a dish of central Kerala | Now - popular with locals and tourists, and also in Malaysia and Singapore",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen meen chatti → modern stainless steel or non-stick saute pan",
      heatSource: "Wood fire hearth → domestic gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Fresh dual-press coconut milk extraction → modern canned or carton coconut milk; traditional shallow-fry → raw poaching",
      contemporaryDifference:
        "Coconut milk: fresh extracts from grated coconut / canned coconut milk diluted with water",
    },
    technologicalLeap: "Adaptation from traditional fresh coconut extraction and local catch to commercial coconut extracts and global diaspora variations.",
    documentedCitation:
      "Comparative regional culinary records of Kerala household cooking and contemporary adaptations.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Fish Molee Recipe: 8 Steps",
    shortDescription:
      "seer fish (or pomfret), coconut milk (thin and thick), coconut oil, green chillies, ginger and garlic, onion, tomato, curry leaves, whole spices (cloves, cardamom, cinnamon), turmeric with black pepper, salt and lime juice.\n\n1. Marinate the fish. Rub the fish with turmeric, black pepper, salt and lime juice and rest it for 30 minutes. (Every piece should be coated evenly.)\n2. Fry the fish lightly. Shallow fry the fish in coconut oil for 3 to 4 minutes on each side, then set it aside. (It should be lightly browned, not dark.)\n3. Temper the spices. In the same oil, fry the cloves, cardamom, cinnamon, curry leaves and slit green chillies for a few seconds. (They should smell fragrant and the curry leaves should crackle.)\n4. Cook the base. Add the onions, ginger and garlic and cook, then stir in the turmeric. (The onions should turn soft and pinkish with no raw smell.)\n5. Add the thin coconut milk. Lower the heat, add the thin coconut milk, tomato and a little water, and bring to a gentle simmer. (Small bubbles only. Do not boil hard.)\n6. Cook the fish. Return the fish and shake the pan to coat it instead of stirring. Cover and cook for about 10 minutes. (The fish should be opaque and the pieces should stay whole.)\n7. Add the thick coconut milk. On low heat, add the thick coconut milk and a little lime juice, and heat until it just simmers. (The gravy should look creamy and not split. Do not overcook.)\n8. Serve. Garnish with curry leaves and serve hot with appam or steamed rice. (Serve right away while the gravy is silky.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Fish Molee Recipe",
      historicalCookware: "Earthen meen chatti or heavy skillet with lid",
      heatSource: "Low to gentle medium flame",
      ingredientsList: [
        "Seer fish (or pomfret)",
        "Coconut milk (thin and thick)",
        "Coconut oil",
        "Green chillies",
        "Ginger and garlic",
        "Onion",
        "Tomato",
        "Curry leaves",
        "Whole spices (cloves, cardamom, cinnamon)",
        "Turmeric with black pepper, salt and lime juice",
      ],
      preparationMethod:
        "1. Marinate the fish.\n2. Fry the fish lightly.\n3. Temper the spices.\n4. Cook the base.\n5. Add the thin coconut milk.\n6. Cook the fish.\n7. Add the thick coconut milk.\n8. Serve.",
      contemporaryDifference:
        "8. Garnish with curry leaves and serve hot with appam or steamed rice.",
    },
    technologicalLeap: "Two-stage coconut milk simmer with gentle pan swirling preserving delicate fish steaks without breaking.",
    documentedCitation:
      "Traditional Kerala culinary practice and codified Meen Moilee recipes.",
  },
];

export const PUTTU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Puttu in Kerala and Tamil Traditions",
    shortDescription:
      "Puttu is a steamed cylinder of coarsely ground rice flour layered with grated coconut. The name is said to mean \"portioned\" in Malayalam and Tamil. It is Kerala's best-known breakfast dish, but many historians point to Tamil Nadu as its earliest home, so Kerala cannot claim to be first. The earliest known reference is said to be in the Tamil devotional work Thiruppugazh by Arunagirinathar, dated to the 15th century. The 16th-century Thiruvilaiyadal Puranam tells a legend of Lord Ganesha helping an old woman who sells puttu near a Madurai temple. This is a legend, not evidence of origin. Early Malayalam literature does not mention puttu. This suggests Tamil and Malayalam speakers shared a food culture, and puttu may also have developed in Kerala. This is a suggestion, not proof. A popular claim says Portuguese sailors introduced puttu to Kerala because it was easy to steam. One article argues this is a myth, because puttu was likely cooked in clay, metal or bamboo steamers long before the Portuguese arrived. Puttu was traditionally steamed in bamboo logs. Similar dishes exist elsewhere, such as pittu in Sri Lanka and sunga pitha in Assam. No single date, creator or place of origin is documented with certainty.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Hollow bamboo logs (bamboo puttu kutti) / coconut shell (chiratta)",
      heatSource: "Traditional hearth with boiling clay pot",
      ingredientsList: [],
      preparationMethod:
        "Coarsely ground rice flour layered with grated coconut in bamboo cylinders and steamed over boiling earthenware vessels.",
      contemporaryDifference:
        "No single date, creator or place of origin is documented with certainty.",
    },
    technologicalLeap: "Steam-column infusion through perforated bamboo discs yielding tender crumb without boiling water contact.",
    documentedCitation:
      "15th-century Tamil devotional text Thiruppugazh by Arunagirinathar; 16th-century Thiruvilaiyadal Puranam.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Steamer: Then - bamboo logs or coconut shells | Now - metal puttu kudam (a cylinder with a perforated disc), or idli moulds if there is no maker\nFlour: Then - rice flour | Now - coarse rice puttu flour, plus wheat, ragi and corn flours, and red rice flour in Sri Lanka\nVariations: Then - plain rice flour and coconut | Now - shredded carrot added, sugar-free and sprouted-curry versions\nEaten with: Then - kadala (black chickpea) curry, bananas and pappadam | Now - also vegetable or potato stew, moong dal curry, and egg, fish or meat curries; sugar or jaggery for a sweet snack\nReach: Then - earliest known references in Tamil literature | Now - eaten in Kerala, Tamil Nadu, Puducherry and Sri Lanka, with a similar dish in Assam\nBreakfast role: Then - an everyday Kerala breakfast | Now - still an everyday breakfast, with nutritionists calling puttu with kadala curry one of Kerala's healthier breakfasts",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Bamboo logs & coconut shells → Stainless steel / aluminum puttu kudam",
      heatSource: "Wood fire chulha → Domestic LPG gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Bamboo / coconut shell steaming → modern metal puttu kudam and diverse whole-grain flours (ragi, wheat, corn).",
      contemporaryDifference:
        "Steamer: bamboo logs or coconut shells / metal puttu kudam (a cylinder with a perforated disc), or idli moulds if there is no maker",
    },
    technologicalLeap: "Engineered metal pressure vents and specialized coarsely milled puttu podi replacing laborious hand-pounded grain.",
    documentedCitation:
      "Comparative regional culinary records of Kerala and Tamil Nadu household breakfast traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Puttu Recipe: 8 Steps",
    shortDescription:
      "puttu flour (coarse rice flour) or parboiled rice, grated coconut, salt, water.\n\n1. Mix the flour. Put the puttu flour in a wide bowl, add salt and some of the grated coconut, and mix. (The coconut should be spread evenly through the flour.)\n2. Moisten the flour. Sprinkle in water a little at a time and mix gently with your fingers. (A pressed handful should hold as a lump, then crumble when pressed again.)\n3. No puttu flour? Make it from rice. Soak parboiled rice for 4 hours, drain it, and dry it on a cloth for 30 minutes. Grind it to a powder, sieve it, and grind the coarse leftovers again. Mix in salt and coconut, then moisten it as in step 2. (The flour should feel coarse and sandy, not like a fine powder.)\n4. Heat the steamer. Boil water in the bottom vessel of the puttu steamer. (The water should be boiling before you add the cylinder.)\n5. Layer the puttu. In the puttu cylinder, add a spoon of coconut, then the flour mixture up to halfway, then another spoon of coconut. Repeat once more until the cylinder is full. (Do not pack the flour down. Keep it loose.)\n6. Steam the puttu. Cover with the lid and steam for about 10 minutes. (Steam should come out of the vent at the top.)\n7. Unmould the puttu. Let it cool for 3 to 4 minutes, then push it out with the skewer. (It should come out as a whole cylinder that crumbles softly.)\n8. Serve. Serve hot, traditionally with kadala (black chickpea) curry, bananas or pappadam. (Serve while the puttu is still warm and soft.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Puttu Recipe",
      historicalCookware: "Two-piece metal puttu kudam and pressure cooker",
      heatSource: "Medium gas flame",
      ingredientsList: [
        "Puttu flour (coarse rice flour) or parboiled rice",
        "Grated coconut",
        "Salt",
        "Water",
      ],
      preparationMethod:
        "1. Mix the flour.\n2. Moisten the flour.\n3. Make from rice if needed.\n4. Heat the steamer.\n5. Layer the puttu.\n6. Steam the puttu.\n7. Unmould the puttu.\n8. Serve.",
      contemporaryDifference:
        "8. Serve hot, traditionally with kadala (black chickpea) curry, bananas or pappadam.",
    },
    technologicalLeap: "Perforated steam column cooking achieving fluffy, uncompressed crumb with fragrant coconut partitions.",
    documentedCitation:
      "Traditional Kerala culinary practice and codified Puttu recipes.",
  },
];

export const SIDDU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Siddu in Himachal Pradesh",
    shortDescription:
      "Siddu (also spelled sidu or sidku) is a steamed, stuffed wheat bread of Himachal Pradesh, traditionally made by the Pahari people of the mountain areas and mostly eaten in winter.\n\nIt is believed to have started in the Mahasu region, now part of Shimla district, and later spread to Kullu, Mandi and Sirmaur. It is made today in places such as Kullu, Manali, Shimla, Mandi and Rohru.\n\nIt is described as a portable food of shepherds and travellers. This comes from popular accounts without cited sources.\n\nOne theory says the name may come from a Tibetan word meaning steamed bread, and that siddu is a likely relative of the Chinese-Tibetan bao, spread by cross-Himalayan trade. This is a theory, not proven.\n\nThe dough is made from wheat flour and leavened with yeast. It is wrapped around a savoury or sweet filling, steamed, and served with melted ghee. In Shimla it is shaped oval and in Kullu it is shaped like a disc.\n\nA cook in Old Manali says her family has made and changed the recipe for 200 years. This is one cook's claim, not documented history.\n\nThe exact origin, date and creator are not documented with certainty. Its development is tied to local customs, seasonal ingredients and cultural exchange.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional tiered wooden or metal steamer, brass mixing vessel",
      heatSource: "Traditional hearth fire (chulha)",
      ingredientsList: [],
      preparationMethod:
        "Wheat flour dough leavened with yeast, wrapped around savory or sweet fillings, steamed until puffy, and eaten with melted ghee.",
      contemporaryDifference:
        "The exact origin, date and creator are not documented with certainty; development is tied to local customs and cross-Himalayan trade.",
    },
    technologicalLeap: "Fermented wheat dough shaped into oval or disc envelopes, enclosing mountain harvest fillings and steamed over boiling water.",
    documentedCitation:
      "Regional oral traditions, popular mountain accounts, and cultural history of the western Himalayas.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Fillings: Then - ground lentils, spinach or turnip greens, and poppy seeds with jaggery in Kullu | Now - paneer, chicken, mutton, potato, peas and rajma as well\nDough: Then - whole wheat flour | Now - wheat mixed with rice flour in some Manali homes for a softer dough\nSweet versions: Then - mainly savoury fillings | Now - sweet siddu with coconut, walnuts, sesame and jaggery\nServing: Then - melted ghee | Now - ghee with green and red chutney, and jaggery syrup instead of ghee in vegan versions\nRising time: Then - overnight in some households | Now - about 1 to 2 hours in quicker home recipes\nRole: Then - a portable food of shepherds | Now - festival, wedding and family food, and a breakfast dish\nReach: Then - hill-town kitchens in Kullu, Shimla, Mandi and Sirmaur | Now - restaurants, food festivals and siddu workshops for travellers across India",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Rustic chulha and wood/brass steamer → modern multi-tier aluminium and stainless steel steamers",
      heatSource: "Wood fire hearth → domestic gas stovetop and induction",
      ingredientsList: [],
      preparationMethod:
        "Slow overnight natural fermentation → rapid 1-2 hour commercial yeast dough; rustic hearth fare → celebrated festival delicacy.",
      contemporaryDifference:
        "Fillings: ground lentils and wild greens / paneer, chicken, potato, peas and more.",
    },
    technologicalLeap: "Evolution from rustic shepherd hearth bread with wild greens to diverse multi-protein and sweet artisan festival variations.",
    documentedCitation:
      "Comparative regional culinary records of Himachal Pradesh household cookery and contemporary food festival documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Siddu Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: whole wheat flour, yeast, ghee, salt, lukewarm water, poppy seeds, walnuts, onion, ginger, garlic and green chilli, red chilli, turmeric and garam masala powders.\n\n1. Make the dough. Mix the flour, salt, ghee and yeast, add lukewarm water and knead. (The dough should be smooth and pliable, neither too hard nor too soft.)\n2. Let the dough rise. Rub it with a little ghee, cover it and leave it to rise, about 1 to 1 and a half hours. (It is ready when it has doubled in size. Some households leave it overnight.)\n3. Make the filling paste. Soak the walnuts for 20 to 30 minutes, dry roast the poppy seeds on low heat for about a minute, then grind both together. (The poppy seeds should smell nutty but not brown. The paste should be thick, not watery.)\n4. Season the filling. Mix the paste with the onion, a few chopped walnuts, ginger, garlic, green chilli, the spice powders and salt. (It should hold together when you pinch it.)\n5. Shape the siddu. Knock back the dough, divide it, roll each piece into a ball, press a small cup, add filling, pinch the edges shut and flatten slightly. (The seams should be sealed with no filling showing.)\n6. Prepare the steamer. Boil water in a steamer, grease the perforated tray well and arrange the buns on it. (The water must stay below the tray and not touch the buns.)\n7. Steam the siddu. Cover and steam for about 20 minutes. (The buns should look puffy and be cooked through, and they should lift off the tray without sticking.)\n8. Serve. Serve warm with plenty of melted ghee and green chutney. (Siddu tastes best hot.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Siddu Recipe",
      historicalCookware: "Steamer with perforated tray, kneading parat, mortar and pestle or grinding stone",
      heatSource: "Steaming over briskly boiling water",
      ingredientsList: [
        "Whole wheat flour",
        "Yeast",
        "Ghee",
        "Salt",
        "Lukewarm water",
        "Poppy seeds",
        "Walnuts",
        "Onion",
        "Ginger, garlic and green chilli",
        "Red chilli, turmeric and garam masala powders",
      ],
      preparationMethod:
        "1. Make the dough.\n2. Let the dough rise.\n3. Make the filling paste.\n4. Season the filling.\n5. Shape the siddu.\n6. Prepare the steamer.\n7. Steam the siddu.\n8. Serve.",
      contemporaryDifference:
        "8. Serve warm with plenty of melted ghee and green chutney. (Siddu tastes best hot.)",
    },
    technologicalLeap: "Precise two-phase technique: tender yeast-fermented wheat envelope enclosing aromatic walnut-poppy seed filling, gently steam-cooked.",
    documentedCitation:
      "Authentic Pahari culinary tradition and documented home kitchen recipes of Himachal Pradesh.",
  },
];
export const CHETTINAD_CHICKEN_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chettinad Chicken in Tamil Nadu",
    shortDescription:
      "Chettinad chicken (Chettinad kozhi) is a spicy chicken curry from the Chettinad region of Tamil Nadu, around Karaikudi in the Sivaganga and Pudukkottai districts. It is linked to the Nattukottai Chettiars, a community of traders, merchants and bankers. The Chettiars traded with Burma, Java, Cambodia, Sri Lanka and Mauritius, and some sources say their travels across Southeast Asia brought new spices and influences into an already bold local cooking culture. A legend says a major 8th-century flood drove the community from the Chola-era coastal towns of Poompuhar and Kaveripatnam to the dry Tamil heartland. This is a legend, not documented history. The cuisine is known for whole spices that are dry-roasted and ground fresh, such as star anise, black pepper and kalpasi (stone flower, a dried lichen). Women traditionally pounded the spices by hand in stone grinders, and each household kept its own proportions. Chettinad chicken is made by simmering chicken in roasted spices and coconut. One source says it was traditionally cooked in clay pots over a wood fire, which gave a slight smokiness. No date or creator of the dish itself is documented with certainty, and the sources give no record of who first made it.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Clay pot (mann paanai) / heavy uruli over wood fire",
      heatSource: "Wood fire hearth",
      ingredientsList: [],
      preparationMethod:
        "Chicken simmered in fresh hand-pounded roasted spices and coconut in clay pots over wood fire.",
      contemporaryDifference:
        "No single date, creator or place of origin is documented with certainty.",
    },
    technologicalLeap: "Dry-roasting whole spices with kalpasi and stone hand-pounding yielding layered depth without pre-made powders.",
    documentedCitation:
      "Regional maritime history of the Nattukottai Chettiars and Tamil food traditions.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Grinding: Then - spices pounded by hand in stone grinders | Now - roasted whole spices ground in a home grinder\nMarinade: Then - traditionally the chicken is not marinated | Now - many modern recipes marinate with turmeric, salt, lemon juice or yoghurt to remove the raw chicken smell\nThickener: Then - poppy seeds in the traditional paste | Now - roasted chana dal in many restaurants, or cashews\nVessel: Then - clay pot over a wood fire, according to one source | Now - pressure cooker, then a pan, or a heavy pan\nTomato: Then - Chettinad curry is not primarily tomato-based | Now - many recipes use tomato, which cooks can reduce\nOil: Then - gingelly (sesame) oil | Now - any cooking oil, with gingelly oil optional\nMeat: Then - chicken, with game birds such as jungle fowl and quail also eaten inland | Now - chicken is the most popular choice\nEaten with: Then - rice and rice-based foods such as dosa, appam and idiyappam | Now - also idli, chapati and porotta",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pot over wood fire → Pressure cooker / heavy pan",
      heatSource: "Wood fire chulha → Domestic LPG gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Stone-ground whole spice paste → home electric mixer-grinder; clay pot simmer → modern heavy pan / pressure cooker.",
      contemporaryDifference:
        "Grinding: Then - spices pounded by hand in stone grinders | Now - roasted whole spices ground in a home grinder",
    },
    technologicalLeap: "Domestic electric mixer-grinders and pressure cookers preserving the intense roasted spice profile with shortened preparation times.",
    documentedCitation:
      "Comparative regional culinary records of Chettinad household and restaurant traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Chettinad Chicken Curry Recipe: 8 Steps",
    shortDescription:
      "chicken, onion, tomato, ginger-garlic paste, dried red chillies, coriander, fennel and cumin seeds, black pepper, cardamom, cloves, cinnamon and star anise, kalpasi (stone flower), grated coconut, curry leaves with oil (gingelly if you like), turmeric, salt and lemon juice.\n\n1. Marinate the chicken. Coat the chicken with turmeric, salt, ginger-garlic paste and lemon juice and rest it for 15 to 20 minutes. (Every piece should be coated evenly.)\n2. Roast the spices. Dry roast the dried chillies, coriander, fennel, cumin, black pepper, cardamom, cloves, cinnamon, star anise and a tiny piece of kalpasi on low heat, then let them cool. (They should be golden and fragrant, not burnt. Use only a tiny piece of kalpasi, as too much makes the dish bitter.)\n3. Roast the coconut. Roast the grated coconut with a curry leaf sprig until lightly golden. (It should smell nutty and look light golden, not brown.)\n4. Grind the masala. Grind the cooled spices and the coconut with a little water into a smooth paste. (The paste should feel smooth, not gritty.)\n5. Cook the base. Heat oil and fry the onions and curry leaves until light golden, add the chicken and fry for a few minutes, then add the tomato and cook. (The tomato is ready when the raw smell is gone and oil floats at the edges.)\n6. Add the masala. Stir in the ground masala paste and a little hot water. (Add the water in small batches to get a gravy that is not too thin.)\n7. Simmer the curry. Cover and simmer until the chicken is cooked through. (The juices should run clear and the chicken should be tender.)\n8. Finish and serve. Adjust the salt and lemon juice, garnish with coriander leaves and serve hot with rice, idli, dosa, appam or porotta. (The gravy should coat the chicken and be neither watery nor dry.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Chettinad Chicken Curry Recipe",
      historicalCookware: "Heavy bottomed pan or kadaai",
      heatSource: "Medium gas flame",
      ingredientsList: [
        "Chicken",
        "Onion",
        "Tomato",
        "Ginger-garlic paste",
        "Dried red chillies, coriander, fennel and cumin seeds",
        "Black pepper, cardamom, cloves, cinnamon and star anise",
        "Kalpasi (stone flower)",
        "Grated coconut",
        "Curry leaves with oil (gingelly if you like)",
        "Turmeric, salt and lemon juice",
      ],
      preparationMethod:
        "1. Marinate the chicken.\n2. Roast the spices.\n3. Roast the coconut.\n4. Grind the masala.\n5. Cook the base.\n6. Add the masala.\n7. Simmer the curry.\n8. Finish and serve.",
      contemporaryDifference:
        "8. Finish and serve. Adjust the salt and lemon juice, garnish with coriander leaves and serve hot with rice, idli, dosa, appam or porotta.",
    },
    technologicalLeap: "Two-stage dry spice and coconut toasting followed by smooth wet emulsification producing a thick, coating gravy.",
    documentedCitation:
      "Traditional Chettinad culinary practice and codified Chettinad kozhi recipes.",
  },
];

export const IDLI_SAMBAR_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Idli and Sambar in South Indian Traditions",
    shortDescription:
      "Idli sambar is a South Indian meal of steamed idlis (soft cakes of fermented rice and black gram batter) served with sambar, a lentil and tamarind vegetable stew. It is eaten across South India and is closely linked with Tamil Nadu. Idli: the earliest mentions are in Kannada and Sanskrit texts of the 9th to 13th centuries. These include Vaddaradhane (c. 920 CE, \"iddalige\") and Manasollasa (1130 CE, \"iddarika\"). Those early versions are described as made from black gram, without rice, without long fermentation and without steaming. The modern idli is mentioned only from about 1250 CE onwards. Food historian K. T. Achaya has suggested that the steamed idli may have reached India from present-day Indonesia (a dish called \"kedli\") between 800 and 1200 CE. Others argue that batter fermentation developed independently in India. A third theory credits Arab traders. These are theories, and none is settled. Sambar: an early reference to a similar dish appears in the Telugu poem Amuktamalyada (c. 1517). Another appears in a Kannada text of 1648 (Kanthirava Narasaraja Vijaya), which describes a similar curry of vegetables and toor dal. A popular legend says sambar was first made in the Thanjavur Maratha court (in the time of Shahuji I) and named after Sambhaji. Historians treat this as a story, not proven history. The exact origin, date and creator of idli and of sambar are not documented with certainty.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthenware pots, woven leaf cups & stone mortar",
      heatSource: "Traditional wood fire hearth",
      ingredientsList: [],
      preparationMethod:
        "Ancient black-gram batter preparations evolving into steamed fermented cakes paired with early lentil-tamarind stews.",
      contemporaryDifference:
        "The exact origin, date and creator of idli and of sambar are not documented with certainty.",
    },
    technologicalLeap: "Discovery of ambient microbial lactic-yeast aeration producing pillowy steamed texture from soaked pulses and rice.",
    documentedCitation:
      "9th-13th century Kannada and Sanskrit culinary records (Vaddaradhane, Manasollasa) and early sambar citations in Telugu and Kannada texts.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Batter: Then - early idli of black gram and buttermilk, without rice, long fermentation or steaming | Now - rice and black gram batter, fermented overnight\nGrinding: Then - manual rocking stone grinder | Now - electric wet grinder or blender\nMoulds: Then - leaves (such as jackfruit leaves), coconut shells or bamboo baskets | Now - greased perforated steel idli plates\nCooking method: Then - steamed in leaves or baskets over boiling water | Now - steamed in a pressure-free cooker, idli steamer or electric steamer for about 10 to 25 minutes\nSize: Then - large temple idlis, such as the kudalai idli of Kanchipuram, steamed in bamboo baskets and said to be about 400 years old | Now - small, round, soft idlis made in standard plates\nConvenience: Then - batter made from scratch at home | Now - ready-made batter, packaged mixes and instant versions such as rava idli\nSambar: Then - a thick dal-and-vegetable stew with tamarind, in early forms | Now - a thinner stew of toor dal, tamarind and vegetables such as drumstick, brinjal, carrot and potato, finished with a spice powder and tempering\nEaten with: Then - sambar and chutney | Now - sambar, coconut chutney, medu vada and idli podi",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Manual stone grinder & leaf moulds → Electric wet grinder & perforated stainless steel idli stands",
      heatSource: "Wood fire hearth → Domestic LPG gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Manual stone grinding & leaf basket steaming → domestic electric wet grinders, stainless steel multi-tier steamers, and pressure-cooked toor dal sambar.",
      contemporaryDifference:
        "Batter: Then - early idli of black gram and buttermilk, without rice, long fermentation or steaming | Now - rice and black gram batter, fermented overnight",
    },
    technologicalLeap: "Perforated stainless steel idli plates and electric tilting wet grinders streamlining uniform fermentation and rapid domestic steaming.",
    documentedCitation:
      "Comparative regional culinary records of Tamil Nadu household and temple breakfast traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Idli Sambar Recipe: 8 Steps",
    shortDescription:
      "idli rice (parboiled rice), whole black gram (urad dal), fenugreek seeds, salt, toor dal, tamarind, mixed vegetables (drumstick, carrot, brinjal, potato), shallots or onion and tomato, sambar powder with turmeric, mustard seeds, curry leaves and asafoetida (hing).\n\n1. Soak the rice and dal. Wash the idli rice, and soak it separately from the black gram and fenugreek for a few hours. (The grains should be soft enough to press between two fingers.)\n2. Grind the batter. Grind the black gram and fenugreek with a little water until light and fluffy, then grind the rice more coarsely. (The black gram batter should look airy and smooth, and the rice batter slightly grainy.)\n3. Ferment the batter. Mix the two batters with salt and leave the batter covered in a warm place overnight. (It is ready when it has risen and smells mildly sour.)\n4. Steam the idlis. Grease the idli plates, pour in the batter and steam over boiling water for about 10 to 15 minutes. (A knife pushed in should come out clean.)\n5. Cook the dal. Pressure cook the toor dal with turmeric until it is very soft, then mash it lightly. (It should look creamy with no whole grains.)\n6. Cook the vegetables. Fry shallots or onion and tomato, add the vegetables and cook until they soften. (They should be soft but still hold their shape.)\n7. Make the sambar. Add tamarind extract, salt and sambar powder to the vegetables, stir in the dal and simmer. (The raw smell of the tamarind should go, and the sambar should thicken slightly.)\n8. Temper and serve. Splutter mustard seeds, curry leaves and hing in hot oil, pour it over the sambar and serve it with the hot idlis. (The sambar should smell fragrant. Serve while the idlis are still soft and steaming.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Idli Sambar Recipe",
      historicalCookware: "Idli steamer stand & deep saucepan or pressure cooker",
      heatSource: "Medium gas flame",
      ingredientsList: [
        "Idli rice (parboiled rice)",
        "Whole black gram (urad dal)",
        "Fenugreek seeds",
        "Salt",
        "Toor dal",
        "Tamarind",
        "Mixed vegetables (drumstick, carrot, brinjal, potato)",
        "Shallots or onion and tomato",
        "Sambar powder with turmeric",
        "Mustard seeds, curry leaves and asafoetida (hing)",
      ],
      preparationMethod:
        "1. Soak the rice and dal.\n2. Grind the batter.\n3. Ferment the batter.\n4. Steam the idlis.\n5. Cook the dal.\n6. Cook the vegetables.\n7. Make the sambar.\n8. Temper and serve.",
      contemporaryDifference:
        "8. Splutter mustard seeds, curry leaves and hing in hot oil, pour it over the sambar and serve it with the hot idlis.",
    },
    technologicalLeap: "Two-stage separately ground batter with overnight ambient fermentation yielding cloud-soft steamed idlis paired with fragrant tempered toor dal stew.",
    documentedCitation:
      "Traditional South Indian culinary practice and codified Idli Sambar recipes.",
  },
];

export const FILTER_COFFEE_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Filter Coffee in South India",
    shortDescription:
      "Filter coffee (filter kaapi) is a South Indian drink of strong coffee decoction mixed with hot milk and sugar. It is made in a two-part metal filter and served in a steel tumbler and dabara. It is popular across Tamil Nadu, Karnataka, Kerala and Andhra Pradesh, and is especially linked with Tamil households. A popular belief says a Sufi named Baba Budan brought seven coffee beans from the Middle East (accounts say Mecca or Yemen) and planted them in the Chandragiri hills of Chikmagalur, Karnataka. This is widely told as a belief and is not established fact. Sources place it in the 16th or the 17th century, and they do not agree. Coffee was expensive at first. Cultivation was promoted in the colonial era, and the drink moved from the elite to ordinary people. By the early 20th century, filter coffee was a staple in homes, restaurants and roadside stalls. Chicory, a roasted ground root, was added to the coffee. Sources say it gives body and a bold flavour. Outlook Traveller says it was reportedly added for medicinal reasons. The Indian Coffee House, which emerged in the mid-20th century, helped carry coffee to northern India. The exact origin, date and creator of filter coffee are not documented with certainty.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pots, brass vessels & early cloth or metal drips",
      heatSource: "Traditional wood fire hearth",
      ingredientsList: [],
      preparationMethod:
        "Early decoction brewing moving from elite colonial households to broad regional South Indian adoption.",
      contemporaryDifference:
        "The exact origin, date and creator of filter coffee are not documented with certainty.",
    },
    technologicalLeap: "Introduction of coffee cultivation in Chikmagalur hills and the evolution of the slow-gravity drip extraction process.",
    documentedCitation:
      "Legends of Baba Budan, colonial plantation records, and South Indian coffee-house literature.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Price and access: a costly drink of the elite at first | Now - an everyday drink in homes, hotels and roadside stalls\nBlend: pure coffee | Now - coffee with chicory (sources suggest about 20 to 30 percent) for body and a bold flavour\nSweetener: jaggery or honey in some households | Now - mostly sugar\nBrewing: a two-part metal filter with the decoction dripping slowly | Now - the same filter, plus electric and instant versions\nDecoction strength: \"first, second or third degree\" coffee, by how many times the grounds were decocted | Now - the strength is chosen by taste\nServing: steel tumbler and dabara, poured back and forth to cool and froth the coffee | Now - the same set, still used, with paper cups and takeaway cups in cafes\nMilk: \"degree milk\" meant pure milk | Now - full-cream milk heated until hot\nWhere it is drunk: homes and local coffee houses | Now - homes, Indian Coffee House-style coffee houses and modern cafes that sell new variants at higher prices",
    image: ERA_PHOTO.colonial_modern,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Brass filter & dabara -> Stainless steel two-chamber drip filter & tumbler-dabara set",
      heatSource: "Charcoal sigri -> Domestic LPG gas stovetop",
      ingredientsList: [],
      preparationMethod:
        "Slow drip gravity filtration through perforated stainless steel chamber cut with scalding fresh milk and aerated back and forth.",
      contemporaryDifference:
        "Price and access: a costly drink of the elite at first | Now - an everyday drink in homes, hotels and roadside stalls",
    },
    technologicalLeap: "Adoption of chicory blending for depth and viscosity, paired with the two-piece perforated metal gravity filter and aerodynamic dabara aeration.",
    documentedCitation:
      "Early 20th-century Madras coffee-house chronicles and Coffee Board historical documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Filter Coffee Recipe: 8 Steps",
    shortDescription:
      "filter coffee powder (medium to dark roast), chicory (blended into the powder), freshly boiled water, full-cream milk, sugar (or jaggery).\n\n1. Set up the filter. Place the upper cup of the filter on the lower cup. (The perforated base should sit flat with no gaps.)\n2. Add the coffee powder. Put the coffee-chicory powder into the upper cup and press it gently with the disc. (Press lightly, because packing it too hard slows the drip too much.)\n3. Add boiling water. Pour freshly boiled water over the powder and put the lid on. (The water must be boiling, not just warm.)\n4. Let the decoction drip. Leave it for about 10 to 15 minutes. (The decoction should collect in the lower cup as a thick, dark liquid. Do not leave it much beyond 20 minutes, or it turns bitter.)\n5. Heat the milk. Warm full-cream milk on the stove until it is hot. (It should be steaming, and not boiled over.)\n6. Mix the coffee. Pour a little decoction into the tumbler, add the hot milk and sugar, and stir. (The colour should be a rich brown. Adjust the decoction and milk to taste.)\n7. Aerate the coffee. Pour the coffee back and forth between the tumbler and the dabara in a high arc. (It should turn frothy and cool to a drinkable temperature.)\n8. Serve. Set the tumbler in the dabara and serve at once. (Serve it hot, while the froth is still on top.)",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Filter Coffee Recipe",
      historicalCookware: "Two-tier stainless steel or brass coffee filter & dabara tumbler set",
      heatSource: "Medium gas flame",
      ingredientsList: [
        "Filter coffee powder (medium to dark roast)",
        "Chicory (blended into the powder)",
        "Freshly boiled water",
        "Full-cream milk",
        "Sugar (or jaggery)",
      ],
      preparationMethod:
        "1. Set up the filter.\n2. Add the coffee powder.\n3. Add boiling water.\n4. Let the decoction drip.\n5. Heat the milk.\n6. Mix the coffee.\n7. Aerate the coffee.\n8. Serve.",
      contemporaryDifference:
        "8. Set the tumbler in the dabara and serve at once. (Serve it hot, while the froth is still on top.)",
    },
    technologicalLeap: "Precision gravity percolation producing viscous decoction emulsified with hot boiled milk and aerated for crown froth.",
    documentedCitation:
      "Traditional South Indian coffee-making practice and codified filter kaapi preparation.",
  },
];
// ─────────────────────────────────────────────
// DYNAMIC GENERATION SYNTHESIZER FOR ALL OTHER DISHES
// Accurately builds 6 historical generations based on
// the dish's actual name, state, ingredients, technique, era & category
// ─────────────────────────────────────────────

function generateDynamicGenerationsForDish(dish: Dish): GenerationWaypoint[] {
  const isRice = dish.category === "rice";
  const isBread = dish.category === "grain-bread";
  const isCurry = dish.category === "curry-stew";
  const isFermented = dish.category === "fermented-steamed";
  const isMeat = dish.category === "meat" || dish.category === "roast-fried";

  // Pick appropriate thematic image based on category
  const img1 = ERA_PHOTO.ancient_grains;
  const img2 = isFermented ? ERA_PHOTO.stone_ferment : ERA_PHOTO.spice_trade;
  const img3 = ERA_PHOTO.spice_trade;
  const img4 = isCurry ? ERA_PHOTO.rogan_josh_hero : isBread ? ERA_PHOTO.litti_chokha_hero : ERA_PHOTO.tawa_sizzle;
  const img5 = isMeat ? ERA_PHOTO.rogan_josh_hero : isCurry ? ERA_PHOTO.butter_chicken_hero : ERA_PHOTO.litti_chokha_hero;
  const img6 = isMeat ? ERA_PHOTO.rogan_josh_hero : isCurry ? ERA_PHOTO.butter_chicken_hero : isRice ? ERA_PHOTO.biryani_royal_hero : ERA_PHOTO.litti_chokha_hero;

  const ing1 = dish.ingredients[0] || "Regional Harvest Staple";
  const ing2 = dish.ingredients[1] || "Indigenous Spices";
  const ing3 = dish.ingredients[2] || "Traditional Seasoning";

  return [
    {
      generationNumber: 1,
      eraTitle: "Ancient Regional Terroir",
      yearRange: `Pre-Common Era (${dish.era})`,
      centuryLabel: "Epoch I",
      headline: `The Agricultural Genesis of ${dish.name}`,
      shortDescription: `In ancient ${dish.state}, indigenous farmers and foragers cultivated ${ing1} and ${ing2}. Earliest ancestral versions were cooked simply in unglazed clay pots over wood embers, seasoned with wild rock salt and native herbs.`,
      image: img1,
      generationRecipe: {
        recipeName: `Ancient ${dish.name} Prototype`,
        historicalCookware: "Unglazed riverbed earthenware handi",
        heatSource: "Wild forest wood fire hearth",
        ingredientsList: [ing1, ing2, "Native black pepper", "Wild rock salt", "Spring water"],
        preparationMethod: `Ingredients soaked and boiled slowly in earthenware with wild aromatics until tender and naturally infused.`,
        contemporaryDifference: `Lacked modern spices and commercial cookware; relied purely on local terroir and biomass smoke.`,
      },
      technologicalLeap: `Domestication and early fire-processing of ${ing1} in ${dish.state}.`,
      documentedCitation: `Archeological and Vedic literature on agricultural origins in ${dish.state}.`,
    },
    {
      generationNumber: 2,
      eraTitle: "Medieval Toolset & Technique",
      yearRange: "c. 10th – 14th Century CE",
      centuryLabel: "Epoch II",
      headline: `The Mastery of ${dish.keyTechnique}`,
      shortDescription: `Regional cooks developed specialized cookware — using heavy cast bronze vessels, carved stone mortars, and slow simmer techniques that elevated ${dish.name} into temple offerings and community feasts.`,
      image: img2,
      generationRecipe: {
        recipeName: `Medieval Temple & Court ${dish.name}`,
        historicalCookware: "Hand-beaten brass or heavy stone vessel",
        heatSource: "Hardwood charcoal chulha",
        ingredientsList: [ing1, ing2, ing3, "Cold-pressed local oil or pure cow ghee", "Indigenous herbs"],
        preparationMethod: `Prepared using ${dish.keyTechnique.toLowerCase()}, developing the signature ${dish.tasteProfile.toLowerCase()} profile.`,
        contemporaryDifference: `Cooked over wood and charcoal embers, infusing subtle natural smoky notes.`,
      },
      technologicalLeap: `Development of ${dish.keyTechnique.toLowerCase()} for enhanced nutrient and flavor release.`,
      documentedCitation: `Medieval Sanskrit and regional culinary records documenting ${dish.state} cuisine.`,
    },
    {
      generationNumber: 3,
      eraTitle: "Trade Routes & Spice Influx",
      yearRange: "c. 1500 – 1700 CE",
      centuryLabel: "Epoch III",
      headline: "The Integration of Caravan Spices",
      shortDescription: `Trade caravans and maritime routes brought new aromatics to ${dish.state}. Cooks integrated newly arrived peppers, aromatics, and techniques that deepened the color and aroma of ${dish.name}.`,
      image: img3,
      generationRecipe: {
        recipeName: `Spice Route Era ${dish.name}`,
        historicalCookware: "Tinned copper or heavy iron kadai",
        heatSource: "Controlled charcoal hearth",
        ingredientsList: [ing1, ing2, ing3, "Dried chillies or whole peppercorns", "Aromatic tempering spices"],
        preparationMethod: `Tempered with whole spices in smoking hot fat before gentle simmering with core ingredients.`,
        contemporaryDifference: `Transition from ancient mild herbal seasoning to bold complex spice layering.`,
      },
      technologicalLeap: `Layered tempering (tadka/chhonk) extracting volatile essential oils into cooking fats.`,
      documentedCitation: `Mughal, Portuguese, and regional court trade records for ${dish.state}.`,
    },
    {
      generationNumber: 4,
      eraTitle: "18th & 19th Century Refinement",
      yearRange: "c. 1750 – 1880 CE",
      centuryLabel: "Epoch IV",
      headline: "Codification in Regional Kitchens",
      shortDescription: `Family heirloom recipes and royal kitchens codified the exact ingredient proportions for ${dish.name}. It became an essential culinary marker across celebrations and harvest festivals in ${dish.state}.`,
      image: img4,
      generationRecipe: {
        recipeName: `Heirloom Standard ${dish.name}`,
        historicalCookware: "Cast iron or heavy brass cookware",
        heatSource: "Indoor chulha hearth with dried hardwood",
        ingredientsList: dish.ingredients,
        preparationMethod: `Slow-cooked according to strict family and community methods, perfecting texture and spice balance.`,
        contemporaryDifference: `Labor-intensive manual stone grinding and extended low-heat cooking curves.`,
      },
      technologicalLeap: `Standardization of spice ratios and precise thermal control.`,
      documentedCitation: `19th-century regional gazetteers and domestic heritage cookbooks.`,
    },
    {
      generationNumber: 5,
      eraTitle: "20th Century Regional Icon",
      yearRange: "c. 1920 – 1980 CE",
      centuryLabel: "Epoch V",
      headline: "Community Pride & Commercial Flourishing",
      shortDescription: `Local dining halls, street stalls, and community banquets across ${dish.state} popularized ${dish.name}, establishing its status as an iconic regional specialty cherished by all social strata.`,
      image: img5,
      generationRecipe: {
        recipeName: `Classic Traditional ${dish.name}`,
        historicalCookware: "Commercial restaurant grade cookware",
        heatSource: "Gas burner range / traditional sigri",
        ingredientsList: dish.ingredients,
        preparationMethod: `Refined for rapid service while maintaining the authentic ${dish.tasteProfile.toLowerCase()} depth.`,
        contemporaryDifference: `Consistent ingredient availability year-round through improved transport networks.`,
      },
      technologicalLeap: `Commercial standardization preserving authentic regional taste profile.`,
      documentedCitation: `State cultural documentation and regional food anthologies.`,
    },
    {
      generationNumber: 6,
      eraTitle: "Contemporary Living Legend",
      yearRange: "Present Day",
      centuryLabel: "Epoch VI",
      headline: `The Definitive Signature of ${dish.state}`,
      shortDescription: `Today, ${dish.name} stands as an irreplaceable cultural treasure of ${dish.state}, celebrated nationwide and globally as a pinnacle of authentic Indian gastronomy.`,
      image: img6,
      generationRecipe: {
        recipeName: `Modern Master ${dish.name} Formulation`,
        historicalCookware: "Modern kitchen enameled cookware / heavy pan",
        heatSource: "Precision stovetop or induction flame",
        ingredientsList: dish.ingredients,
        preparationMethod: `Carefully prepared using authentic technique (${dish.keyTechnique.toLowerCase()}) with balanced seasoning and fresh garnishes.`,
        contemporaryDifference: `Accessible home kitchen metrics while honoring ancestral culinary principles.`,
      },
      technologicalLeap: `Precision temperature control and high-grade organic sourcing.`,
      documentedCitation: `National Culinary Heritage Registry & State Tourism Gastronomy Monographs.`,
    },
  ];
}

// ─────────────────────────────────────────────
// FOUR-STAGE TIMELINE SELECTOR
//
// The historical timeline is exactly four primary stages, read from the
// canonical dishStages.json record. The legacy six-epoch arrays above are
// retained as source material for cookware, heat source and recipe detail —
// no dish ever sees another dish's data, and every emitted image belongs to
// that dish and that stage (or is the neutral unresolved frame).
//
// The GSAP MotionPath, ScrollTrigger, pinned sections, parallax, skiper6 and
// reverse-scroll logic all read waypoints.length, so the animation
// calculations stay data-driven and untouched.
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// DHUSKA (Jharkhand)
// ─────────────────────────────────────────────
export const DHUSKA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dhuska in Jharkhand & Chota Nagpur Heartlands",
    shortDescription:
      "Dhuska originated in the tribal and rural agrarian settlements of Jharkhand across the Chota Nagpur plateau, developed by indigenous communities including the Oraon, Munda, and Santhal as a nutrient-dense, high-energy harvest food. Born from the agrarian rhythm of paddy cultivation and pulse farming, it was created by wet-grinding locally harvested short-grain rice with chana dal (split Bengal gram) and urad dal into a thick batter without chemical leavening, then deep-frying ladlefuls in cold-pressed mustard oil over open wood hearths. Traditionally prepared during major agricultural and social festivals such as Sarhul, Karma, Sohrai, and Teej, as well as community gatherings, Dhuska carries deep cultural significance as an emblem of rural hospitality, eaten hot with earthen-cooked aloo chana sabzi or spicy ghugni.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Thick cast-iron kadhai and earthen batter mixing bowls",
      heatSource: "Sal wood and dried forest twig chulha fire",
      ingredientsList: [],
      preparationMethod:
        "Raw rice and split pulses wet-ground on a granite sil-batta into a thick unfermented batter, hand-aerated, and deep-fried in smoking cold-pressed mustard oil until puffed and crisp.",
      contemporaryDifference:
        "Developed by indigenous Chota Nagpur farming communities as a sustaining harvest food, traditionally fried over sal wood embers and eaten on stitched sal leaf pattals.",
    },
    technologicalLeap: "Hand-aerated wet-pulse batter immersion frying without chemical leavening.",
    documentedCitation: "Regional food studies and Chota Nagpur tribal ethnographic archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: deep-fried in thick iron kadhais over wood-fired chulhas with vigorous spoon-basting / deep-fried on domestic gas stoves, commercial burners, or shallow-fried in modern tawa variations\nVessel: heavy cast-iron kadhais and earthen batter mixing bowls / stainless steel or non-stick kadhais and electric deep fryers\nFuel: sal wood, dried forest twigs, and cow-dung cakes / LPG gas cylinders and induction cooktops\nCooking time: slow batter prep with 6-hour soaking and hand stone grinding / instant soaking in warm water and rapid electric mixer grinding in minutes\nGrinding & Texture: hand-crushed on coarse granite sil-batta yielding an aerated, textured batter / high-speed electric wet grinders producing a silky, uniform batter\nIngredients & Lentils: indigenous coarse arwa rice with farm-harvested chana dal and urad dal / commercial polished rice, packaged split pulses, and occasional baking soda for extra lift\nFlavourings: whole cumin, crushed green chillies, wild ginger, and raw mustard oil / powdered cumin, packaged garam masala, ginger-garlic paste, and refined sunflower or mustard oil\nServing & Dining: served on stitched green sal leaf plates (dona and pattal) with smoky earthen aloo-chana / served in stainless steel thalis or paper containers with aloo dam, mutton curry, or tomato-garlic chutney",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Cast-iron kadhai over wood chulha / modern stainless steel kadhai or deep fryer",
      heatSource: "Sal wood and dried twigs / domestic LPG gas and commercial burners",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: deep-fried in thick iron kadhais over wood-fired chulhas with vigorous spoon-basting / deep-fried on domestic gas stoves, commercial burners, or shallow-fried in modern tawa variations",
      contemporaryDifference:
        "Transition from forest hearth sal wood frying to domestic gas stoves, commercial street food setups, and electric mixers.",
    },
    technologicalLeap: "Adaptation from rustic village stone grinding to modern electric appliances and commercial street-side fryers.",
    documentedCitation: "Gastronomic surveys and regional technology documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Jharkhandi Dhuska Recipe: 8 Steps",
    shortDescription:
      "raw rice (arwa chawal), chana dal (split Bengal gram), urad dal (split black gram), fresh ginger, green chillies, cumin seeds (jeera), carom seeds (ajwain), turmeric powder, asafoetida (hing), mustard oil for deep frying.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Jharkhandi Dhuska Recipe",
      historicalCookware: "Heavy cast-iron kadhai with deep frying slotted spoon (jhara)",
      heatSource: "Medium-high heat for steady frying without smoking excessively",
      ingredientsList: [
        "raw rice (arwa chawal)",
        "chana dal (split Bengal gram)",
        "urad dal (split black gram)",
        "fresh ginger",
        "green chillies",
        "cumin seeds (jeera)",
        "carom seeds (ajwain)",
        "turmeric powder",
        "asafoetida (hing)",
        "mustard oil for deep frying",
      ],
      preparationMethod:
        "1. Rinse raw rice, chana dal, and urad dal in cold water, then soak them together in ample water for at least 5 to 6 hours or overnight.\n2. Drain the soaking water and transfer the softened grains to a wet grinder or mixer jar along with chopped ginger and green chillies.\n3. Grind with small splashes of water into a thick, smooth, and cohesive batter resembling the consistency of pancake or idli batter.\n4. Transfer the batter to a deep bowl, then vigorously whisk by hand in one direction for 3 to 4 minutes to incorporate air for natural puffing.\n5. Add cumin seeds, ajwain, turmeric powder, a generous pinch of asafoetida, and salt to taste; fold gently into the batter.\n6. Heat mustard oil in a heavy cast-iron kadhai over medium-high flame until it smokes lightly, then lower heat slightly to stabilize temperature.\n7. Pour a ladleful of batter directly into the center of the hot oil in a steady stream without spreading; gently spoon hot oil over the top until it puffs up like a balloon.\n8. Flip carefully and fry until both sides turn crisp and deep golden-brown; drain on absorbent paper and serve piping hot with spicy Jharkhandi aloo-chana sabzi.",
      contemporaryDifference:
        "Standardized 8-step aerated batter and mustard oil frying protocol with 10 authentic ingredients.",
    },
    technologicalLeap: "Controlled oil temperature and continuous spoon-basting enabling dramatic steam puff without chemical leaveners.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// CHILKA ROTI (Jharkhand)
// ─────────────────────────────────────────────
export const CHILKA_ROTI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chilka Roti in Jharkhand & Tribal Antiquity",
    shortDescription:
      "Chilka Roti is an ancient indigenous flatbread native to the Santhal, Munda, Ho, and Oraon tribal communities of Jharkhand. Rooted in the prehistoric agricultural traditions of the Chota Nagpur forested plateau, it was created by rural households to transform freshly harvested unpolished indigenous red rice (arwa chawal) and home-grown chana dal into a nourishing, easily digestible daily bread without yeast or chemical leavening. The name 'Chilka' denotes the delicate, peel-like thinness of the crepe-like flatbread as it lifts off the griddle. Deeply tied to the seasonal rhythm of the Kharif rice harvest and forest ceremonies like Sarhul, Chilka Roti was traditionally poured onto earthen or cast-iron tawas swabbed with oil using fresh sal leaf twigs, embodying tribal resourcefulness and revered culinary minimalism.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen tawa (mitti ki tawa) or rough cast-iron plate with sal-twig swab",
      heatSource: "Forest wood and dried mahua branch hearth",
      ingredientsList: [],
      preparationMethod:
        "Unpolished coarse red rice and chana dal soaked, stone-ground with water into a flowing batter, poured onto an earthen tawa oiled with a sal-leaf twig, and cooked into a delicate crepe.",
      contemporaryDifference:
        "Rooted in Santhal and Munda agrarian traditions celebrating the Kharif paddy harvest with unpolished heirloom grains.",
    },
    technologicalLeap: "Zero-leavening fluid batter pouring and swirled griddle roasting using indigenous botanical leaf oil swabs.",
    documentedCitation: "Tribal ethno-agricultural studies and regional gastronomic accounts of Jharkhand.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: poured and hand-spread on earthen or rough iron tawas greased with sal leaf twigs / poured with ladles onto modern cast-iron or non-stick tawas brushed with silicone brushes\nVessel: open unglazed earthenware tawas (mitti ki tawa) and stone mixing troughs / heavy cast-iron skillets or non-stick crepe pans\nFuel: forest sal wood, mahua branches, and dried brushwood chulhas / domestic LPG gas stoves and ceramic induction plates\nCooking time: unhurried tribal hearth cooking with slow, even heat / rapid stove-top cooking in 2 to 3 minutes per roti\nGrinding & Flour: coarse stone sil-batta hand grinding preserving the grain husk / electric mixer grinders and commercially packaged rice-chana flour blends\nGrain Selection: indigenous unpolished red rice (dhan/arwa) with whole chana dal / white raw rice (arwa chawal) with commercial split Bengal gram\nOil & Greasing: sal tree seed oil, mahua oil, or cold-pressed mustard oil applied with leafy twigs / mustard oil, desi ghee, or neutral vegetable oil applied with steel spoons\nServing & Accompaniments: eaten hot on stitched sal leaves (pattal) with kurthi dal, chana jhor, or wild saag / served on ceramic dinner plates with desi chicken curry, mutton jhol, or spicy tomato-garlic chutney",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen tawa / cast-iron tawa or non-stick crepe skillet",
      heatSource: "Forest sal wood chulha / domestic LPG gas stove",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: poured and hand-spread on earthen or rough iron tawas greased with sal leaf twigs / poured with ladles onto modern cast-iron or non-stick tawas brushed with silicone brushes",
      contemporaryDifference:
        "Transition from forest earthenware griddles and sal leaf swabs to domestic non-stick cookware and electric grinding.",
    },
    technologicalLeap: "Thermal transition from porous clay hearth conduction to rapid domestic metal pan induction.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Jharkhandi Chilka Roti Recipe: 8 Steps",
    shortDescription:
      "raw unpolished rice (arwa chawal), chana dal (split Bengal gram), fresh ginger, cumin seeds (jeera), green chillies, water, rock salt, pure mustard oil (for tawa greasing), fresh coriander leaves, sal leaf or banana leaf (for traditional resting).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Jharkhandi Chilka Roti Recipe",
      historicalCookware: "Heavy cast-iron tawa with flat steel turner (khunti)",
      heatSource: "Medium flame for uniform golden-brown speckled roasting",
      ingredientsList: [
        "raw unpolished rice (arwa chawal)",
        "chana dal (split Bengal gram)",
        "fresh ginger",
        "cumin seeds (jeera)",
        "green chillies",
        "water",
        "rock salt",
        "pure mustard oil (for tawa greasing)",
        "fresh coriander leaves",
        "sal leaf or banana leaf",
      ],
      preparationMethod:
        "1. Measure raw rice and chana dal in a 2:1 ratio, wash thoroughly in cold water, and soak together for 5 to 6 hours or overnight.\n2. Drain the soaked grains and place them in a stone sil-batta or wet mixer jar along with chopped ginger and green chillies.\n3. Grind with measured additions of water until transformed into a silky, runny, and lump-free batter with a thin pouring consistency.\n4. Pour the batter into a large bowl; season with salt, crushed cumin seeds, and finely chopped coriander leaves, stirring thoroughly.\n5. Heat a seasoned cast-iron tawa over medium flame and grease the surface lightly with mustard oil using a folded cloth or brush.\n6. Stir the batter well from the bottom, then pour a generous ladleful onto the center of the hot tawa.\n7. Immediately swirl the griddle or lightly glide the back of the ladle in circular outward motion to form a thin, even disc.\n8. Drizzle a few drops of mustard oil along the perimeter; cook until the edges release freely, flip to lightly freckle the reverse side, fold into quarters, and serve hot with chana dal jhor.",
      contemporaryDifference:
        "Numbered 8-step thin-batter tawa swirl protocol with 10 traditional ingredients.",
    },
    technologicalLeap: "Fluid batter surface tension management producing a feather-light crepe without flour leaveners.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// EROMBA (Manipur)
// ─────────────────────────────────────────────
export const EROMBA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Eromba in Manipur & Meitei Valley Antiquity",
    shortDescription:
      "Eromba is a foundational culinary pillar of the Meitei community inhabiting the Imphal Valley of Manipur, tracing its origins to ancient antiquity. Etymologically derived from the Meitei expression 'eeru taana lonba' (meaning mixing and stirring something watery), the dish developed as an ingenious response to the ecological landscape of the valley, bordered by mist-covered hills and rich wetland ecosystems like Loktak Lake. To ensure year-round preservation of aquatic proteins during monsoons and dry spells, the Meitei perfected 'Ngari'—sun-dried freshwater fish (Puntius sophore) fermented without salt in mustard-oil-glazed earthen urns (ngari chaphu). In Eromba, roasted ngari is hand-mashed with boiled native potatoes, seasonal tree beans (yongchak), bamboo shoots, and fiercely pungent Umorok (king chilli), creating a soul-stirring comfort dish eaten daily with steamed aromatic rice.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (chaphu) for boiling and wooden mashing bowl",
      heatSource: "Wood embers and dried bamboo fire",
      ingredientsList: [],
      preparationMethod:
        "Fresh wetland tubers, tree beans, and shoots boiled tender in an earthen pot, then mashed by hand with banana-leaf toasted fermented fish (ngari) and fiery Umorok.",
      contemporaryDifference:
        "Born from ancient Meitei wetland ecology and the indigenous technology of oil-glazed ngari chaphu earthen urn fermentation.",
    },
    technologicalLeap: "Salt-free solid-state anaerobic fish fermentation combined with zero-oil vegetable mashing.",
    documentedCitation: "Meitei cultural documentation and regional food anthropology compendiums.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: boiling indigenous tubers and vegetables in earthen pots over wood embers and fire-toasting ngari on charcoal / pressure-cooking vegetables on gas stoves and roasting ngari on modern non-stick pans\nVessel: clay pots (earthen chaphu) for boiling and wooden or clay bowls for hand mashing / stainless steel pressure cookers and porcelain or glass mixing bowls\nFuel: wood embers, dried bamboo, and rice husk fire / domestic LPG gas stoves and electric induction cooktops\nCooking time: slow clay pot simmering allowing roots to thoroughly soften / rapid high-pressure cooking in 10 to 12 minutes\nNgari Preparation: dry-toasted over red-hot wood embers wrapped in wild banana leaves / toasted over gas flames on wire meshes or pan-seared in dry skillets\nVegetable Diversity: foraged wild wetland greens, yongchak (tree beans), tender colocasia, and indigenous red potatoes / cultivated supermarket potatoes, French beans, seasonal green beans, and canned bamboo shoots\nChillies & Heat: sun-dried Meitei morok and fresh fiery Umorok (Naga king chilli) crushed with coarse rock salt / fresh king chillies, green bird's eye chillies, or packaged red chilli flakes\nServing & Dining: hand-mashed and served fresh in traditional bell-metal or earthen bowls alongside steaming Chakhao or local white rice / served in porcelain tableware in Manipuri homes and contemporary urban Northeast restaurants",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pot and wooden pestle / stainless steel cooker and glass mixing bowl",
      heatSource: "Charcoal and wood embers / domestic gas stove",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: boiling indigenous tubers and vegetables in earthen pots over wood embers and fire-toasting ngari on charcoal / pressure-cooking vegetables on gas stoves and roasting ngari on modern non-stick pans",
      contemporaryDifference:
        "Transition from wild wetland forage and earthen pots to pressure-cooked market vegetables and domestic kitchen appliances.",
    },
    technologicalLeap: "Adaptation of ancient hand-mash fish-and-tuber emulsion into modern domestic kitchens.",
    documentedCitation: "Comparative gastronomic surveys and Northeast India culinary studies.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Manipuri Eromba Recipe: 8 Steps",
    shortDescription:
      "ngari (traditional fermented freshwater fish), medium potatoes, yongchak (tree beans/stink beans) or seasonal beans, fresh umorok (king chilli) or dried red chillies, tender bamboo shoot (soibum), maroi nakupi (Manipuri chives), fresh coriander leaves, spring onions, starchy vegetable broth, rock salt.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Manipuri Eromba Recipe",
      historicalCookware: "Deep boiling saucepan and wide earthenware or stainless steel mashing bowl",
      heatSource: "Gentle simmer followed by ambient hand mashing",
      ingredientsList: [
        "ngari (traditional fermented freshwater fish)",
        "medium potatoes",
        "yongchak (tree beans/stink beans) or seasonal beans",
        "fresh umorok (king chilli) or dried red chillies",
        "tender bamboo shoot (soibum)",
        "maroi nakupi (Manipuri chives)",
        "fresh coriander leaves",
        "spring onions",
        "starchy vegetable broth",
        "rock salt",
      ],
      preparationMethod:
        "1. Peel and quarter the potatoes; scrape the rough outer skin of the yongchak pods and slice them into two-inch pieces.\n2. In a deep saucepan, place the potatoes, yongchak, sliced bamboo shoots, and dried red chillies or Umorok with enough water to submerge.\n3. Bring to a rolling boil over medium heat and cook uncovered until the vegetables and tubers are completely fork-tender.\n4. Meanwhile, gently toast the ngari pieces on a dry tawa or wrapped in a banana leaf over low flame until fragrant and lightly charred.\n5. Remove the boiled potatoes and chillies from the saucepan into a wide mashing bowl, reserving the aromatic vegetable cooking liquid.\n6. Add the roasted ngari and salt to the bowl; use the back of a spoon or pestle to vigorously crush the chillies and ngari into a spicy paste.\n7. Add the boiled potatoes and yongchak pieces into the paste, mashing thoroughly by hand while retaining pleasant coarse rustic chunks.\n8. Pour in a few tablespoons of the reserved warm vegetable broth to achieve a thick, cohesive gravy; fold in finely chopped maroi nakupi, spring onions, and coriander, and serve with hot rice.",
      contemporaryDifference:
        "Standardized 8-step boiling, banana-leaf ngari roasting, and hand-mashing protocol with 10 authentic ingredients.",
    },
    technologicalLeap: "Hand-masticated emulsion integrating potato starches, fermented fish umami, and capsaicin without oil.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// SINGJU (Manipur)
// ─────────────────────────────────────────────
export const SINGJU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Singju in Manipur & Ancient Herbal Traditions",
    shortDescription:
      "Singju is an ancient, highly revered spicy botanical salad originating in the Meitei kingdom of Manipur. Etymologically rooted in the Meitei words 'Manaa-Masing' (green vegetables and medicinal herbs) and 'Suba' (combining or mixing together), the contracted name 'Singju' represents centuries of intimate botanical knowledge and foraging culture in the wetland fringes and forested valleys of Manipur. Conceived as both an everyday afternoon refreshment and a vital medicinal digestive, Singju was assembled by thinly julienning seasonal forest produce—such as lotus stem (thambou), cabbage, green papaya, banana inflorescence, and wild herbs like phakpai and lomba—and tossing them raw with roasted perilla seeds (thoiding) or roasted ngari (fermented fish) with fiery chillies. Unlike conventional salads, Singju uses no cooking oil, drawing its rich mouthfeel from the essential polyunsaturated oils released by crushed roasted perilla seeds.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Hand-carved wooden bowl and granite pestle",
      heatSource: "Dry tawa roasting for perilla seeds and charcoal toast for ngari",
      ingredientsList: [],
      preparationMethod:
        "Wild seasonal greens and wetland lotus stems shredded finely by hand, dressed with stone-crushed roasted perilla seeds (thoiding), roasted chickpea flour, and pounded ngari-chilli paste.",
      contemporaryDifference:
        "Developed by Meitei healers and households as an oil-free raw botanical preparation packed with indigenous phytonutrients.",
    },
    technologicalLeap: "Lipid extraction through dry-roasted seed pulverization replacing liquid cooking oil in raw vegetable dressing.",
    documentedCitation: "Meitei botanical chronicles and regional folklore compendiums.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Preparation method: hand-shredding raw wild wetland herbs and roots with traditional Meitei knives and hand-bruising in wooden bowls / precision slicing with stainless steel mandolines, chef knives, and mixing in glass bowls\nVessel: hand-carved wooden mixing troughs and shallow cane baskets / stainless steel basins, glass bowls, and food-grade plastic prep trays\nBinding & Fat: whole perilla seeds (thoiding) stone-roasted on earthen griddles and crushed on stone / pre-roasted commercial chickpea flour (besan) and store-bought roasted sesame or perilla powder\nNgari Integration: whole ngari fish roasted over red coals and pestle-pounded with sun-dried red chillies / pan-toasted ngari or commercial fermented fish paste mixed with chilli flakes\nVegetables & Produce: foraged water lily stems, wild mountain herbs (lomba, phakpai), and raw banana flowers / cultivated cabbage, carrots, French beans, green papaya, and seasonal garden radishes\nTexture & Moisture: hand-kneaded until the vegetables release natural juices to form an unctuous coating without added water / tossed lightly as a dry, crispy shredded salad to prolong shelf-life for street stalls\nServing & Accompaniments: eaten freshly mixed on broad leaves with roasted white peas (mangan) and black tea / served in eco-friendly leaf boats or paper cones across bustling Imphal street-corner stalls\nCultural Setting: ancestral family ritual and ritual temple offerings (Ushin) / widespread iconic Manipuri street snack enjoyed across all generations",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Carved wooden bowl / stainless steel basin or mandoline slicer",
      heatSource: "Dry earthen griddle / modern domestic gas range",
      ingredientsList: [],
      preparationMethod:
        "Preparation method: hand-shredding raw wild wetland herbs and roots with traditional Meitei knives and hand-bruising in wooden bowls / precision slicing with stainless steel mandolines, chef knives, and mixing in glass bowls",
      contemporaryDifference:
        "Shift from wild seasonal foraging and ceremonial temple offerings to popular everyday commercial street food culture across Imphal.",
    },
    technologicalLeap: "Transition from home pestle-macerated wet dressing to commercial dry-roasted powders extending shelf life.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Manipuri Singju Recipe: 8 Steps",
    shortDescription:
      "crisp fresh cabbage, tender lotus stems (thambou) or raw papaya, thoiding (perilla seeds), roasted gram flour (besan), roasted ngari (fermented fish) or dry peas, dried red chillies (morok), fresh umorok (king chilli), phakpai (Himalayan knotweed) or coriander, salt, fresh lemon juice.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Manipuri Singju Recipe",
      historicalCookware: "Large ceramic or stainless steel mixing bowl and granite pestle",
      heatSource: "Dry skillet roasting for seeds and flours",
      ingredientsList: [
        "crisp fresh cabbage",
        "tender lotus stems (thambou) or raw papaya",
        "thoiding (perilla seeds)",
        "roasted gram flour (besan)",
        "roasted ngari (fermented fish) or dry peas",
        "dried red chillies (morok)",
        "fresh umorok (king chilli)",
        "phakpai (Himalayan knotweed) or coriander",
        "salt",
        "fresh lemon juice",
      ],
      preparationMethod:
        "1. Thoroughly wash the cabbage, lotus stems (or green papaya), and indigenous herbs in ice-cold water and pat completely dry.\n2. Using a sharp knife, shred the cabbage into ultra-fine chiffonade strips and slice the lotus stems into paper-thin discs.\n3. Dry-roast the perilla seeds (thoiding) in a heavy tawa over low heat until they begin to crackle and release an aromatic, nutty fragrance.\n4. Transfer the roasted perilla seeds to a stone mortar and pestle; grind into a coarse, oily, aromatic powder.\n5. In the same dry pan, lightly roast the chickpea flour (besan) until golden and fragrant, then set aside to cool.\n6. For the seasoning paste, roast the ngari pieces and dry red chillies over low flame, then pound them with a pinch of rock salt into a pungent paste (morok metpa).\n7. In a large mixing bowl, combine the shredded cabbage, sliced lotus stems, chopped phakpai, roasted perilla powder, and roasted besan.\n8. Add the spicy morok metpa paste and lemon juice; toss and massage vigorously by hand to bruise the greens so they absorb the dressing, and serve immediately.",
      contemporaryDifference:
        "Streamlined 8-step chiffonade shredding, perilla roasting, and hand-bruising protocol with 10 authentic ingredients.",
    },
    technologicalLeap: "Hand-bruising raw cellular matrix to release natural vegetable juices into roasted perilla seed emulsion.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// SIKKIMESE MOMOS (Sikkim)
// ─────────────────────────────────────────────
export const SIKKIMESE_MOMOS_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Sikkimese Momos in Sikkim & Trans-Himalayan Routes",
    shortDescription:
      "Sikkimese Momos trace their ancestral lineage to ancient Tibet and the historic trans-Himalayan trade routes connecting Lhasa, the Kathmandu Valley, and Sikkim through the high mountain passes of Nathu La and Jelep La. Derived from the Tibetan word 'mog mog', the art of steaming delicate parcels of unleavened flour dough filled with finely hand-minced highland meat and aromatics was brought to Sikkim by migrating Bhutia communities, Tibetan traders, and Newar merchants. Over generations, Sikkim adopted the dish as its paramount cultural and culinary emblem, adapting the filling to locally reared pork, beef, and indigenous mountain greens seasoned with wild mountain ginger and mountain garlic. Making momos evolved into an intimate communal ritual across Sikkimese households, where families gather in warmth around the hearth to knead, roll, pleat, and steam them over multi-tiered metal or bamboo steamers called 'moktu', served alongside blistering dalle khursani paste.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Multi-tiered layered aluminium or bamboo moktu steamer",
      heatSource: "Oak and rhododendron wood hearth fire",
      ingredientsList: [],
      preparationMethod:
        "Hand-kneaded flour wrappers filled with cleaver-minced local meat, wild mountain ginger, garlic, and onions, pleated into half-moons and steamed in tiered moktus over herb-infused boiling water.",
      contemporaryDifference:
        "Introduced via high-altitude Buddhist trading passes and refined in Bhutia and Lepcha households as an alpine communal ritual.",
    },
    technologicalLeap: "Tiered multi-level steam convection cooking delicate unleavened pastry wrappers while trapping interior meat juices.",
    documentedCitation: "Tibetan culinary treatises and Eastern Himalayan ethnographic records.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: steamed in multi-tiered heavy aluminium or carved wooden/bamboo moktus over open wood fires / steamed in multi-tiered stainless steel moktus on domestic gas stoves or commercial electric steamers\nVessel: traditional layered aluminium or bamboo moktus with tight domed lids / modern stainless steel modular steamers and electric dim-sum steamers\nFuel: rhododendron wood, mountain oak logs, and dried pine cones / domestic LPG gas cylinders and commercial induction cooktops\nCooking time: 20 to 25 minutes of steady wood-steam simmering / 10 to 12 minutes of pressurized commercial gas steaming\nMincing & Filling: hand-mincing whole cuts of meat on hardwood chopping logs with heavy cleavers / electric meat grinders and commercial food processors producing fine uniform mince\nFillings & Varieties: exclusively fatty local pork, highland beef, or wild chhurpi with spring onions / lean chicken, paneer, mixed mountain vegetables, soya, and mushroom variations\nDough Wrapper: hand-kneaded with cold mountain water and rolled individually with small wooden pins / machine-pressed dough sheets cut with circular pastry rings\nAccompaniments & Dip: fresh dalle khursani chillies crushed with wood-roasted mountain tomatoes and garlic / bottled hot sauces, soy dips, mayonnaise, and processed dalle pastes",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Bamboo or heavy aluminium moktu / modular stainless steel steamer",
      heatSource: "Alpine wood hearth / domestic gas stove and commercial steam counters",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: steamed in multi-tiered heavy aluminium or carved wooden/bamboo moktus over open wood fires / steamed in multi-tiered stainless steel moktus on domestic gas stoves or commercial electric steamers",
      contemporaryDifference:
        "Transition from rustic hearthwood bamboo steamers and cleaver-chopped local game to commercial electric steamers and automated mincers.",
    },
    technologicalLeap: "Modernization of high-volume tiered steaming while preserving delicate pleated wrapper integrity.",
    documentedCitation: "Himalayan gastronomic documentation and urban food surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Sikkimese Steamed Momos Recipe: 8 Steps",
    shortDescription:
      "refined wheat flour (maida), minced pork or chicken, spring onions, fresh ginger, mountain garlic, black pepper powder, refined oil or pork lard, water, fiery dalle khursani chillies, local ripe tomatoes (for the dip).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Sikkimese Steamed Momos Recipe",
      historicalCookware: "Tiered aluminium or stainless steel moktu steamer with lid",
      heatSource: "Vigorous boiling water base providing high steam pressure",
      ingredientsList: [
        "refined wheat flour (maida)",
        "minced pork or chicken",
        "spring onions",
        "fresh ginger",
        "mountain garlic",
        "black pepper powder",
        "refined oil or pork lard",
        "water",
        "fiery dalle khursani chillies",
        "local ripe tomatoes",
      ],
      preparationMethod:
        "1. In a large mixing bowl, combine wheat flour and a pinch of salt; gradually add room-temperature water and knead into a smooth, firm, and pliable dough.\n2. Cover the kneaded dough with a moist cotton cloth and allow it to rest for at least 30 minutes to develop elasticity.\n3. For the succulent filling, mix the minced meat with finely chopped spring onions, freshly minced ginger, crushed garlic, black pepper, and two tablespoons of oil or melted fat to retain juiciness.\n4. Divide the rested dough into small equal cherry-sized balls; lightly flour your workstation and roll each ball into a very thin circular disc, keeping the edges slightly thinner than the center.\n5. Place a rounded tablespoon of the savory filling directly in the center of the dough circle.\n6. Carefully pleat the wrapper edges accordion-style in a half-moon or gathered top-knot purse, pinching tightly to create an airtight seal.\n7. Lightly oil the perforated tiers of a traditional moktu (steamer) and arrange the pleated momos with adequate spacing to prevent sticking.\n8. Stack the tiers over a vigorously boiling water base, cover with the domed lid, and steam on high flame for 10 to 12 minutes until translucent; serve piping hot with fire-roasted dalle khursani chutney.",
      contemporaryDifference:
        "Precision 8-step dough-rest, accordion pleat, and tiered moktu steam protocol with 10 traditional ingredients.",
    },
    technologicalLeap: "Hermetic edge pinch trapping aromatic broth and collagen inside the steamed wrapper.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// GUNDRUK SOUP (Sikkim)
// ─────────────────────────────────────────────
export const GUNDRUK_SOUP_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Gundruk Soup in Sikkim & Alpine Winter Preservation",
    shortDescription:
      "Gundruk is an ancient lactic-acid fermented leafy green preparation deeply rooted in the high-altitude agropastoral survival traditions of Sikkim's Nepali, Bhutia, and Lepcha communities. In the severe sub-zero winters of the Eastern Himalayas, heavy snowfalls historically halted all agricultural production, threatening mountain hamlets with severe nutrient and vitamin deficiencies. During the bountiful autumn harvest in October and November, rural households gathered the massive surplus of broadleaf mustard greens (rayo saag), radish leaves, and cauliflower foliage, wilted them under the autumn sun, crushed them, and tightly tamped them into earthen jars (dhungro) or underground pits without salt. Wild lactobacillus bacteria naturally fermented the leaves into a pleasantly sour, mineral-rich preserved food, which was then sun-dried and stored for up to a year. Rehydrated and cooked with tomatoes, garlic, and mustard oil, Gundruk Soup (Gundruk ko Jhol) became Sikkim's ultimate restorative alpine broth, revered for its digestive warmth and sour, earthy profile.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (mitti ki handi) or heavy iron degchi",
      heatSource: "Alpine hearth embers burning dried pine and oak",
      ingredientsList: [],
      preparationMethod:
        "Sun-wilted mustard greens fermented salt-free in earthen jars, dehydrated on bamboo trays, rehydrated in spring water, and simmered with mountain garlic and mustard oil into a curative broth.",
      contemporaryDifference:
        "Developed by Eastern Himalayan agropastoralists as an ingenious winter survival strategy against high-altitude vitamin scarcity.",
    },
    technologicalLeap: "Non-salted wild lactic acid bacterial fermentation followed by solar dehydration for multi-season preservation.",
    documentedCitation: "Eastern Himalayan ethnographic studies and folklore archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: rehydrating dried gundruk and slow-simmering in earthen pots or heavy iron degchis over hearth embers / fast simmering in stainless steel saucepans or rapid pressure cooking on modern stoves\nVessel: handmade earthen pots (mitti ki handi) and cast-iron kadhais / stainless steel saucepans, anodized pots, and domestic pressure cookers\nFuel: dried alpine pine wood, oak branches, and dried cow dung / domestic LPG gas stoves and ceramic induction plates\nCooking time: long leisurely hearth simmer allowing fermented greens to release rich broth / 15 to 20 minutes on medium gas flame\nFermentation Vessel: pit-fermentation in leaf-lined underground trenches or large earthen jars (dhungro) / sanitized glass carboys and food-grade airtight plastic containers\nSun-Drying & Storage: sun-dehydrated on woven bamboo trays (nanglo) and kept in woven jute bags near the hearth / vacuum-sealed packaging, commercial dehydrators, and airtight glass jars\nAdd-ins & Variations: cooked with locally parched brown soybeans (bhatmas), dried mountain roots, and raw mustard oil / cooked with diced potatoes, chopped onions, tomato purees, and ready spice powders\nDining & Pairing: served scalding hot in wooden or bell-metal katoris alongside coarse Himalayan bhaat / served in modern soup bowls as an appetizer or comfort side in homes and Sikkimese boutique cafes",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen handi over hearth / stainless steel saucepan on gas stove",
      heatSource: "Alpine pine and oak hearth / domestic LPG gas burner",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: rehydrating dried gundruk and slow-simmering in earthen pots or heavy iron degchis over hearth embers / fast simmering in stainless steel saucepans or rapid pressure cooking on modern stoves",
      contemporaryDifference:
        "Transition from rustic pit-fermentation and wood embers to sanitized glass containers, rapid gas stove simmering, and boutique cafe service.",
    },
    technologicalLeap: "Evolution from subsistence mountain winter survival food to recognized probiotic gastronomic heritage.",
    documentedCitation: "Gastronomic surveys and regional technology documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Sikkimese Gundruk Soup Recipe: 8 Steps",
    shortDescription:
      "authentic dried gundruk (fermented mustard/radish greens), pure cold-pressed mustard oil, medium onion, fresh garlic cloves, fresh ginger, ripe country tomatoes, dried red chillies or dalle khursani, parched local soybeans (bhatmas) or potato, turmeric powder, fresh coriander leaves.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Sikkimese Gundruk Soup Recipe",
      historicalCookware: "Heavy-bottomed pot or deep saucepan with ladle",
      heatSource: "Medium flame for oil tempering followed by gentle low-heat simmering",
      ingredientsList: [
        "authentic dried gundruk (fermented mustard/radish greens)",
        "pure cold-pressed mustard oil",
        "medium onion",
        "fresh garlic cloves",
        "fresh ginger",
        "ripe country tomatoes",
        "dried red chillies or dalle khursani",
        "parched local soybeans (bhatmas) or potato",
        "turmeric powder",
        "fresh coriander leaves",
      ],
      preparationMethod:
        "1. Take authentic dried gundruk greens and soak them in lukewarm water for 15 to 20 minutes until softened and rehydrated.\n2. Squeeze the excess water gently from the rehydrated greens, coarsely chop them with a kitchen knife, and set aside.\n3. Heat cold-pressed mustard oil in a heavy-bottomed pot until it smokes lightly, then lower heat to temper the pungent aroma.\n4. Add whole dried red chillies (or slit dalle khursani) and sauté until they turn deep red and aromatic.\n5. Add chopped onions, minced garlic, and grated ginger; fry on medium flame until golden-brown and fragrant.\n6. Stir in chopped ripe tomatoes, turmeric powder, and salt; cook down for 3 to 4 minutes until the tomatoes form a soft, pulpy masala base.\n7. Add the chopped gundruk and roasted soybeans (bhatmas); stir-fry together for 3 minutes to infuse the greens with the aromatics.\n8. Pour in three cups of water, bring to a vigorous boil, then cover and simmer over low heat for 15 minutes to yield a tangy, earthy broth; garnish with fresh coriander and serve hot with steamed rice.",
      contemporaryDifference:
        "Codified 8-step rehydration, mustard oil tempering, and simmer protocol with 10 authentic ingredients.",
    },
    technologicalLeap: "Oil-bloomed allicin and capsaicin integration with rehydrated lactic acid plant broth.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// THUKPA (Arunachal Pradesh)
// ─────────────────────────────────────────────
export const THUKPA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Thukpa in Arunachal Pradesh & the Himalayan Belt",
    shortDescription:
      "Thukpa traces back to eastern Tibetan noodle-and-broth traditions developed to combat freezing high-altitude mountain climates. The dish spread across ancient trans-Himalayan trade routes and Buddhist pilgrim trails into Arunachal Pradesh, becoming deeply anchored in the food culture of the Monpa community of Tawang and West Kameng. The exact date and individual creator are not documented with certainty, though regional chronicles record centuries of pastoral exchange. It is prepared in the slow-simmered broth infusion method, with Putang Thukpa—made with indigenous buckwheat noodles—being the cherished local Monpa specialty.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Rustic clay pot or cast-iron cauldron over hearth stones",
      heatSource: "Pine wood and mountain oak open hearth fire",
      ingredientsList: [],
      preparationMethod:
        "Fresh hand-rolled wheat or buckwheat noodles simmered in a slow-reduced bone stock scented with wild mountain ginger, crushed garlic, and native Himalayan peppers.",
      contemporaryDifference:
        "Developed in high-altitude Tibetan-Monpa pastoral settlements as a restorative hearth noodle soup.",
    },
    technologicalLeap: "Separate gentle noodle blanching combined with a prolonged aromatic meat-and-herb broth infusion.",
    documentedCitation: "Eastern Himalayan ethnographic records and regional Monpa culinary archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: slow hearth simmering of bone stock over open wood fires / quick simmering on domestic gas stoves, hotplates, and induction cooktops\nVessel: heavy earthen clay pots and cast-iron cauldrons / stainless steel stockpots, non-stick pans, and pressure cookers\nFuel: mountain oak, pine wood, and dried yak dung / LPG gas cylinders and electricity\nCooking time: one to two hours of slow bone reduction / under 25 minutes in modern kitchens\nNoodles: hand-pulled or knife-cut fresh buckwheat and barley noodles / packaged refined-wheat noodles, ramen, or instant noodles\nMeat & Broth: dried yak meat, mountain mutton, or cured country pork / chicken, farm pork, or seasoned vegetable and mushroom broth\nFlavourings: wild mountain garlic, fresh crushed ginger, and native Sichuan pepper (yer ma) / soy sauce, ready noodle tastemakers, vinegar, and chilli sauce\nAccompaniments: fresh crushed bird's eye chillies and fermented bamboo shoots / bottled hot sauces, chilli vinegar, and processed dalle paste",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen clay pot / stainless steel stockpot and pressure cooker",
      heatSource: "Wood hearth / domestic gas burner and induction cooktop",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow hearth simmering of bone stock over open wood fires / quick simmering on modern LPG gas stoves, hotplates, and induction cooktops",
      contemporaryDifference:
        "Shift from rustic hand-pulled buckwheat noodles in wood-fired bone cauldrons to swift domestic gas boiling with modern seasonings.",
    },
    technologicalLeap: "Adaptation from rustic alpine hearth bone reductions to fast domestic gas boiling without losing aromatic depth.",
    documentedCitation: "Himalayan gastronomic documentation and North-Eastern culinary field surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Thukpa Recipe: 8 Steps",
    shortDescription:
      "handmade wheat noodles, chicken or pork, fresh ginger, mountain garlic, sliced onions, shredded cabbage and carrots, rich meat or vegetable stock, Sichuan pepper (yer ma), spring onions, mustard oil.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Thukpa Recipe",
      historicalCookware: "Deep heavy-bottomed stockpot or Dutch oven",
      heatSource: "Medium-high heat for searing, steady gentle simmer for broth infusion",
      ingredientsList: [
        "handmade wheat noodles",
        "chicken or pork",
        "fresh ginger",
        "mountain garlic",
        "sliced onions",
        "shredded cabbage and carrots",
        "rich meat or vegetable stock",
        "Sichuan pepper (yer ma)",
        "spring onions",
        "mustard oil",
      ],
      preparationMethod:
        "1. Boil the wheat noodles in salted water until just tender (al dente), drain thoroughly, rinse with cold water, and toss with a few drops of oil to prevent sticking.\n2. Heat mustard oil in a heavy-bottomed pot over medium heat, then sauté finely chopped ginger and minced garlic until fragrant.\n3. Add sliced onions and slit green chillies, sautéing for 2 minutes until soft and translucent.\n4. Add the chicken or pork pieces, searing lightly for 3 to 4 minutes until evenly browned.\n5. Pour in the rich stock, season with crushed Sichuan pepper (yer ma), turmeric, and salt, bringing the broth to a rolling boil.\n6. Lower the heat, cover the pot with a lid, and simmer gently for 15 minutes so the meat tenderizes and infuses the soup.\n7. Add the shredded cabbage and julienned carrots, simmering for 3 to 4 minutes until tender yet pleasantly crisp.\n8. Place a portion of cooked noodles into warm serving bowls, ladle the piping-hot aromatic broth and vegetables over them, and garnish with spring onions.",
      contemporaryDifference:
        "Numbered 8-step noodle blanching and broth simmering process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step home noodle blanching and aromatic broth reduction protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
];

export const BAMBOO_SHOOT_PORK_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bamboo Shoot Pork in Arunachal Pradesh & the Eastern Himalayas",
    shortDescription:
      "Bamboo shoot pork traces back to ancient ancestral foraging and hearth-cooking traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. In the dense montane forests, tender wild bamboo shoots were preserved through subterranean leaf fermentation (ekung, eup, and hikhu) to ensure year-round nourishment, while free-ranging country pork provided vital animal protein and fats during harsh winters. The exact date and individual creator are not documented with certainty, as food lore was transmitted orally across generations. It was traditionally cooked inside sealed green bamboo internodes over open wood fires or in heavy hearth pots, allowing the natural sourness of the shoots to tenderize the rich meat.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Fresh green bamboo internodes (penam arak) plugged with wild leaves or heavy hearth pots",
      heatSource: "Open wood fire and glowing hearth embers (angna)",
      ingredientsList: [],
      preparationMethod:
        "Tender pork pieces packed with fermented bamboo shoots (ekung) inside green bamboo hollows, plugged tightly with wild leaves, and roasted slowly over wood fire embers until the meat stews in its own juices.",
      contemporaryDifference:
        "Ancestral indigenous sustenance cooking developed by Eastern Himalayan hill tribes using subterranean leaf-fermented bamboo shoots without added oil or powdered spices.",
    },
    technologicalLeap: "Green bamboo hollow steam-roasting and underground leaf-fermentation preservation protocol.",
    documentedCitation: "Ethnographic records of Eastern Himalayan tribal food culture and regional documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: slow roasting inside green bamboo tubes over open hearth embers / simmering in heavy kadhais and pressure cookers on gas stoves\nVessel: fresh green bamboo hollows (penam arak) plugged with wild leaves / cast-iron pots, stainless steel kadhais, and domestic pressure cookers\nFuel: hearth firewood (angna) and glowing wood coals / LPG gas burners and electric induction stoves\nCooking time: several hours over low wood embers / 35 to 45 minutes on modern domestic stoves\nBamboo shoot: wild forest-foraged shoots fermented in leaf-lined pit baskets (ekung/hikhu) / bottled, canned, or market-bought preserved fermented shoots\nPork: free-range country boar or hearth-smoked pork belly / farm-raised butcher pork cuts, pork ribs, or packaged pork belly\nSeasonings: indigenous plant-ash salt (tapyo), wild mountain coriander, and fresh King Chilli / table salt, cultivated garlic, ginger paste, and green chillies\nFat rendering: pure pork belly fat rendered naturally without added oils / small measure of mustard oil or refined cooking oil",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Fresh green bamboo hollows / cast-iron pots, stainless steel kadhais, and pressure cookers",
      heatSource: "Hearth firewood (angna) and glowing wood coals / LPG gas burners and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow roasting inside green bamboo tubes over open hearth embers / simmering in heavy kadhais and pressure cookers on gas stoves",
      contemporaryDifference:
        "Fat rendering: pure pork belly fat rendered naturally without added oils / small measure of mustard oil or refined cooking oil",
    },
    technologicalLeap: "Transition from forest bamboo-internode open hearth cookery to domestic gas burners and pressure cookers.",
    documentedCitation: "Comparative studies of Northeast Indian tribal foodways and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Bamboo Shoot Pork Recipe: 8 Steps",
    shortDescription:
      "pork belly or country pork, fermented bamboo shoots (ekung), fresh ginger, mountain garlic, fiery King Chilli or bird's eye chillies, wild mountain coriander, spring onions or wild greens, rock salt or indigenous tapyo salt, mustard oil, warm water.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Bamboo Shoot Pork Recipe",
      historicalCookware: "Heavy-bottomed cast-iron pot or kadhai with lid",
      heatSource: "Medium flame for fat rendering, then low heat simmer for 35 to 45 minutes",
      ingredientsList: [
        "pork belly or country pork",
        "fermented bamboo shoots (ekung)",
        "fresh ginger",
        "mountain garlic",
        "fiery King Chilli or bird's eye chillies",
        "wild mountain coriander",
        "spring onions or wild greens",
        "rock salt or indigenous tapyo salt",
        "mustard oil",
        "warm water",
      ],
      preparationMethod:
        "1. Rinse the fermented bamboo shoots (ekung) lightly in cold water if intensely pungent; squeeze out excess brine and set aside.\n2. Heat a splash of mustard oil in a heavy-bottomed iron pot or kadhai over medium flame, or add the pork directly so its fat renders naturally.\n3. Add the pork pieces and sear over medium heat for 10 to 12 minutes, stirring occasionally, until the fat renders out and the meat turns lightly browned.\n4. Reduce heat to medium-low, add coarsely pounded ginger and crushed mountain garlic, and sauté for 2 minutes until fragrant.\n5. Add the slit King Chillies (or bird's eye chillies) and fermented bamboo shoots, stirring well to coat the shoots in the rendered pork fat.\n6. Season with salt (or indigenous tapyo), pour in 1.5 cups of warm water to submerge the meat partially, and bring to a gentle boil.\n7. Cover the pot with a tight lid and simmer on low heat for 35 to 45 minutes, stirring occasionally, until the pork is melt-in-the-mouth tender and the gravy reduces.\n8. Uncover, fold in chopped wild mountain coriander and spring onions, rest for 5 minutes, and serve piping hot with steamed hill rice.",
      contemporaryDifference:
        "Numbered 8-step fat rendering and simmering process using 10 key indigenous ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step home fat-rendering and fermented shoot acid-simmer protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The Natural Fat-Rendering & Fermented Shoot Technique",
    shortDescription:
      "Searing fatty pork pieces over medium heat allows natural lard to render out, creating an authentic oil-free cooking base that emulsifies with fermented bamboo shoot acids.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Hearth Fat-Rendering Execution",
      historicalCookware: "Cast-iron kadhai or bamboo tube with tight lid",
      heatSource: "Medium heat rendering, followed by gentle low-heat braise",
      ingredientsList: [
        "Pork belly or country pork",
        "Fermented bamboo shoots (ekung)",
        "Fresh ginger",
        "Mountain garlic",
        "Fiery King Chilli or bird's eye chillies",
        "Wild mountain coriander",
        "Spring onions or wild greens",
        "Rock salt or indigenous tapyo salt",
        "Mustard oil",
        "Warm water",
      ],
      preparationMethod:
        "Searing pork chunks directly in a heavy iron pot without added oil until natural lard melts out, then braising with fermented bamboo shoots, crushed aromatics, and hot water until richly emulsified.",
      contemporaryDifference:
        "Ancestral oil-free acid-emulsion technique creating a savory, glossy coating around tender pork pieces.",
    },
    technologicalLeap: "Natural animal-fat rendering combined with organic lactic acid tenderization.",
    documentedCitation: "Regional culinary anthropology and Northeast gastronomy surveys.",
  },
];

export const APONG_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Apong in Arunachal Pradesh & the Eastern Himalayas",
    shortDescription:
      "Apong traces back to ancient ancestral foraging and agricultural traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. Hand-harvested hill paddy was cooked and inoculated with wild medicinal herbal starter cakes (known as apop, epoh, or siye), cultivated through generations of botanical knowledge to induce natural fermentation. The exact date and individual creator are not documented with certainty, as brewing lore was passed down orally through women elders and hearth keepers. It was traditionally prepared as both a milky white brew (Pika Apong / Nogin) and a smoky dark brew using charred paddy husk ash (Poro Apong), serving as a sacred offering to deities and ancestors.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pots (tibuk) and woven bamboo cones (perop)",
      heatSource: "Hearth fire for grain steaming, ambient room fermentation near the hearth",
      ingredientsList: [],
      preparationMethod:
        "Steamed hill rice cooled on wild banana leaves, blended with crushed herbal yeast cake (apop/epoh), packed into leaf-lined earthen pots, and slowly fermented for 5 to 7 days before water extraction.",
      contemporaryDifference:
        "Ancestral solid-state cereal fermentation developed by Adi, Nyishi, and Mising communities using wild medicinal plants as microbial starter cultures.",
    },
    technologicalLeap: "Solid-state rice fermentation enabled by wild botanical starter cakes (apop/epoh) and conical bamboo filtration (perop).",
    documentedCitation: "Eastern Himalayan ethnobotanical documentation and anthropological records of Arunachal Pradesh tribal brewing.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Fermentation vessel: hand-moulded earthen pots (talam) and hollow bamboo vats / food-grade plastic containers, glass carboys, and stainless steel drums\nFiltration method: conical woven bamboo funnels (perop/taas) lined with wild leaves / nylon strainers, fine cheesecloth, and metal wire mesh\nStarter culture: wild forest-foraged medicinal leaf-and-rice cakes (apop/epoh) / preserved domestic starter cakes and cultivated microbial tablets\nRice grain: heritage red sticky rice, black rice, and local hill millet / commercially polished white rice and hybrid paddy varieties\nAsh smoking: charred paddy husk ash (taap/mikap) roasted over wood hearths / optional ash filtration or plain unsmoked brewing\nFermentation time: 7 to 15 days of slow seasonal hearth fermentation / 3 to 5 days accelerated brewing in temperature-managed rooms\nServing vessel: freshly cut green bamboo tumblers (patang) and hollow gourds / glass tumblers, ceramic mugs, and stainless steel cups\nOccasion: sacred community feasts (Solung, Dree, Nyokum) and rituals / cultural festivals, tribal tourism cafes, and everyday hospitality",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen terracotta pots (tibuk) / food-grade plastic barrels and glass carboys",
      heatSource: "Wood hearth / domestic gas stove and modern ambient storage",
      ingredientsList: [],
      preparationMethod:
        "Fermentation vessel: hand-moulded earthen pots (talam) and hollow bamboo vats / food-grade plastic containers, glass carboys, and stainless steel drums",
      contemporaryDifference:
        "Shift from smoked bamboo tubes and wild herbal starter cakes to domestic plastic vessels and modern kitchen strainers.",
    },
    technologicalLeap: "Evolution from wild forest botanical starter cultures and bamboo cone filtration to modern home brewing adaptations.",
    documentedCitation: "North-Eastern ethnobotanical studies and regional fermentation technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Apong Recipe: 8 Steps",
    shortDescription:
      "indigenous hill rice, herbal fermentation starter cake (apop/epoh), wild medicinal starter herbs, paddy husk ash (taap/mikap), clean mountain spring water, wild banana leaves (oko leaves), woven bamboo filtration funnel (perop), traditional earthen fermentation pot, fermented rice mash, wild forest herbs.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Apong Recipe",
      historicalCookware: "Large steaming pot, banana leaves, earthen pot or fermenter, bamboo funnel",
      heatSource: "Medium flame for steaming, ambient warm room (22-28°C) for 5-7 days fermentation",
      ingredientsList: [
        "Indigenous hill rice",
        "Herbal fermentation starter cake (apop/epoh)",
        "Wild medicinal starter herbs",
        "Paddy husk ash (taap/mikap)",
        "Clean mountain spring water",
        "Wild banana leaves (oko leaves)",
        "Woven bamboo filtration funnel (perop)",
        "Traditional earthen fermentation pot",
        "Fermented rice mash",
        "Wild forest herbs",
      ],
      preparationMethod:
        "1. Steam or boil the indigenous hill rice in a heavy pot until tender and fluffy, taking care that the grains remain distinct and not watery.\n2. Spread the hot rice evenly across clean bamboo mats or wild banana leaves, allowing it to cool completely to room temperature so microbial cultures survive.\n3. Grind the dried herbal starter cake (apop or epoh) into a fine powder using a traditional stone mortar.\n4. Dust the powdered starter uniformly over the cooled rice (optionally incorporating charred paddy husk ash for dark Poro Apong), tossing thoroughly by hand.\n5. Transfer the inoculated rice into a clean, dry earthen pot or leaf-lined container, pressing gently and covering the surface with fresh wild leaves.\n6. Seal the mouth of the vessel securely and place it in a warm, undisturbed corner near the hearth for 5 to 7 days of solid-state fermentation.\n7. Pour cool, pure spring water into the sweet, bubbly fermented rice mash and let it steep for 30 to 60 minutes to extract alcohol and natural sugars.\n8. Strain the golden-cloudy liquid through a conical woven bamboo funnel (perop), collect the fresh brew in bamboo tumblers, and serve at room temperature.",
      contemporaryDifference:
        "Numbered 8-step solid-state brewing and filtration process using 10 key indigenous ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Standardized 8-step home rice brewing, herbal starter inoculation, and perop filtration protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The Herbal Inoculation & Perop Funnel Extraction Technique",
    shortDescription:
      "Thoroughly blending cooled steamed grain with finely powdered botanical starter cake (apop), followed by solid-state fermentation and slow conical bamboo funnel (perop) filtration.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Herbal Inoculation & Bamboo Filtration Execution",
      historicalCookware: "Terracotta tibuk pot and conical woven bamboo perop funnel",
      heatSource: "Gentle ambient hearth warmth (22°C to 28°C)",
      ingredientsList: [
        "Indigenous hill rice",
        "Herbal fermentation starter cake (apop/epoh)",
        "Wild medicinal starter herbs",
        "Paddy husk ash (taap/mikap)",
        "Clean mountain spring water",
        "Wild banana leaves (oko leaves)",
        "Woven bamboo filtration funnel (perop)",
        "Traditional earthen fermentation pot",
        "Fermented rice mash",
        "Wild forest herbs",
      ],
      preparationMethod:
        "Blending tender cooled hill rice with crushed wild botanical starter cakes, fermenting undisturbed in sealed earthen containers, and gravity-filtering the diluted mash through woven bamboo funnels into bamboo tumblers.",
      contemporaryDifference:
        "Ancestral solid-phase fermentation yielding sweet, mildly alcoholic beverage packed with organic acids and living probiotics.",
    },
    technologicalLeap: "Indigenous botanical starter fermentation combined with conical gravity bamboo filtration.",
    documentedCitation: "Regional anthropological research and tribal fermentation archives of Arunachal Pradesh.",
  },
];

export const PONDICHERRY_FISH_CURRY_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pondicherry Fish Curry in Puducherry & the Coromandel Coast",
    shortDescription:
      "Pondicherry fish curry traces back to the 17th and 18th-century French colonial settlement on the Coromandel coast, where French East India Company administrators, Creole families, and native Tamil cooks merged their culinary traditions. Classical Tamil coastal fish curries (Meen Kuzhambu), driven by sour tamarind, mustard seeds, and pungent fenugreek, met French kitchen techniques like bouquet garni aromatics, deliberate shallot reductions, and gentle braising. The result was a distinct Creole curry (kari creole) enriched with freshly pressed coconut milk and the signature vadouvan spice blend—an indigenous Franco-Tamil adaptation of French shallot seasoning that defined colonial Pondicherry gastronomy.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional clay pot (manpanai / manchatti) or heavy bell-metal pot",
      heatSource: "Coconut shell embers and casuarina wood hearth fire",
      ingredientsList: [],
      preparationMethod:
        "Fresh Coromandel seer fish simmered in cold-pressed gingelly oil with shallots, sun-dried Vadouvan seasoning, tamarind water, and velvety coconut milk in a rustic clay manpanai.",
      contemporaryDifference:
        "18th-century Franco-Tamil colonial fusion adapting French bouquet garni and sauce reduction principles to coastal Tamil tamarind and coconut fish curries.",
    },
    technologicalLeap: "Creation of Vadouvan (fermented onion-garlic spice orb) integrated into slow coconut-tamarind reduction.",
    documentedCitation: "Colonial archives of the French East India Company and Puducherry culinary heritage studies.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking vessel: earthenware manpanai or manchatti / stainless steel pans, non-stick skillets, and enameled cast-iron pots\nHeat source: coconut shell embers and casuarina firewood / domestic LPG gas stoves and induction cooktops\nSpice blend: sun-dried fermented Vadouvan balls pounded fresh on stone / store-bought Vadouvan powder, sambhar powder, or quick onion paste\nOil medium: cold-pressed unrefined gingelly (sesame) or coconut oil / refined sunflower or blended vegetable oil\nCoconut milk: freshly grated coconut milk extracted in two presses / canned coconut milk, ready coconut cream, or coconut milk powder\nTamarind base: aged dark country tamarind soaked and hand-pulled / bottled tamarind paste or seedless concentrate\nCooking time: 45 to 60 minutes slow reduction on low embers / 20 to 25 minutes quick simmer on domestic gas burners\nServing style: rested overnight in clay pot, served on banana leaves / served immediately in ceramic bowls with baguettes or steamed ponni rice",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthenware manpanai / stainless steel skillet and enameled Dutch oven",
      heatSource: "Coconut shell embers / domestic LPG gas burner and induction cooktop",
      ingredientsList: [],
      preparationMethod:
        "Cooking vessel: earthenware manpanai or manchatti / stainless steel pans, non-stick skillets, and enameled cast-iron pots",
      contemporaryDifference:
        "Shift from wood-fired manpanai pots and artisanal fermented Vadouvan orbs to domestic gas stoves with modern coconut extracts.",
    },
    technologicalLeap: "Evolution from open-fire clay pot tamarind reductions to domestic precision simmering.",
    documentedCitation: "Coromandel culinary historical surveys and Franco-Tamil gastronomy studies.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pondicherry Fish Curry Recipe: 8 Steps",
    shortDescription:
      "seer fish steaks (or kingfish), fresh thick coconut milk, tangy tamarind extract, Franco-Tamil Vadouvan spice blend, pearl shallots (sambhar onions), crushed garlic and ginger, fenugreek seeds and mustard seeds, fresh curry leaves and green chillies, Kashmiri chilli and turmeric powder, cold-pressed gingelly or coconut oil.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pondicherry Fish Curry Recipe",
      historicalCookware: "Clay manpanai or wide heavy-bottomed sauté pan with lid",
      heatSource: "Medium heat tempering, then gentle low-heat simmer for 15 minutes",
      ingredientsList: [
        "Seer fish steaks (or kingfish)",
        "Fresh thick coconut milk",
        "Tangy tamarind extract",
        "Franco-Tamil Vadouvan spice blend",
        "Pearl shallots (sambhar onions)",
        "Crushed garlic and ginger",
        "Fenugreek seeds and mustard seeds",
        "Fresh curry leaves and green chillies",
        "Kashmiri chilli and turmeric powder",
        "Cold-pressed gingelly or coconut oil",
      ],
      preparationMethod:
        "1. Rinse the seer fish steaks, pat dry, and marinate with a pinch of turmeric, lemon juice, and sea salt for 15 minutes.\n2. Soak tamarind pulp in warm water for 15 minutes, extract the tangy juice, and press freshly grated coconut to yield thick and thin coconut milk.\n3. Heat cold-pressed sesame oil in a heavy earthenware pot (manchatti) or wide skillet over medium heat.\n4. Add mustard seeds and fenugreek seeds, allowing them to crackle gently, then immediately toss in fresh curry leaves and slit green chillies.\n5. Add sliced pearl shallots, crushed garlic, and the Vadouvan spice blend, sautéing for 3 to 4 minutes until golden-brown and sweet.\n6. Add chopped ripe tomatoes, Kashmiri chilli powder, and coriander powder, cooking until tomatoes soften and oil glints along the edges.\n7. Pour in the strained tamarind juice and thin coconut milk, season with salt, and bring to a gentle boil for 8 to 10 minutes to concentrate flavors.\n8. Gently slide in the fish steaks, simmer covered on low heat for 6 to 8 minutes, finish with thick coconut milk, rest for 10 minutes, and serve hot.",
      contemporaryDifference:
        "Numbered 8-step tempering, reduction, and gentle fish poaching process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step Vadouvan tempering, tamarind-coconut simmer, and delicate fish poaching protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The Vadouvan Tempering & Coconut-Tamarind Reduction Technique",
    shortDescription:
      "Tempering cured Vadouvan spice orbs in warm gingelly oil, reducing tangy tamarind extract, and finishing with sweet first-press coconut milk.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Vadouvan Tempering & Coconut-Tamarind Poaching Execution",
      historicalCookware: "Earthenware manchatti or wide shallow copper-core skillet",
      heatSource: "Medium flame for spice blooming, low flame for gentle fish poaching",
      ingredientsList: [
        "Seer fish steaks (or kingfish)",
        "Fresh thick coconut milk",
        "Tangy tamarind extract",
        "Franco-Tamil Vadouvan spice blend",
        "Pearl shallots (sambhar onions)",
        "Crushed garlic and ginger",
        "Fenugreek seeds and mustard seeds",
        "Fresh curry leaves and green chillies",
        "Kashmiri chilli and turmeric powder",
        "Cold-pressed gingelly or coconut oil",
      ],
      preparationMethod:
        "Tempering mustard, fenugreek, shallots, and Vadouvan in sesame oil until sweet and caramelized, reducing tamarind and thin coconut milk, and poaching seer fish steaks gently before enriching with thick coconut cream.",
      contemporaryDifference:
        "Franco-Tamil balance of sharp tamarind acid, rich coconut fats, and fermented Vadouvan allium aromatics.",
    },
    technologicalLeap: "Harmonization of French velouté/sauce finishing with Tamil sour-spicy kuzhambu technique.",
    documentedCitation: "Puducherry culinary anthropology and coastal Tamil heritage monographs.",
  },
];

export const KOLI_KARI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Koli Kari in Puducherry & White Town Creole Mansions",
    shortDescription:
      "Koli Kari traces back to the elite domestic kitchens of White Town (Ville Blanche) in colonial Pondicherry, where French aristocratic households and Creole families blended European stewing traditions with native Tamil ingredients. While traditional Tamil cuisine relied on fiery Chettinad-style chicken curries, French Creole cooks developed a gentler, fragrant braise. Country chicken and tender potatoes were slow-simmered in velvety coconut cream, scented with freshly grated nutmeg, whole cloves, cinnamon, and sweet shallots, creating a luxurious velouté-style chicken curry that remains a hallmark of Puducherry hospitality.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Heavy brass or copper cocotte (stew pot) with snug lid",
      heatSource: "Gentle charcoal hearth embers (fourneau)",
      ingredientsList: [],
      preparationMethod:
        "Country chicken and baby potatoes braised slowly in cold-pressed oil or butter with pearl shallots, ginger-garlic, toasted spices, fragrant nutmeg, and rich coconut cream.",
      contemporaryDifference:
        "Franco-Tamil Creole grand-house chicken stew blending French fricassée braising techniques with Tamil coconut and warm spice profiles.",
    },
    technologicalLeap: "French fricassée braising combined with tropical coconut-cream finishing and whole-spice aromatics.",
    documentedCitation: "Pondicherry colonial domestic memoirs and Franco-Indian culinary documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking vessel: heavy tinned copper degchis and enamelled French cocottes / stainless steel kadhais, non-stick sauté pans, and pressure cookers\nHeat source: slow charcoal embers and wood-fired hearths / domestic LPG gas burners and electric induction ranges\nSpicing profile: freshly grated whole nutmeg, hand-pounded cloves, and Ceylon cinnamon / pre-ground garam masala powder and commercial chicken curry powder\nCooking fat: fresh churned butter or pure cold-pressed gingelly oil / refined vegetable cooking oil or sunflower oil\nCreaminess: double-extracted fresh coconut cream and ground cashew paste / tetra-pak coconut milk, dairy cooking cream, or cornstarch thickener\nChicken: free-range native country fowl (nattu kozhi) / commercial broiler chicken cuts, boneless chicken breast, or chicken thighs\nPotatoes: heirloom baby hill potatoes stewed whole / diced commercial table potatoes or parboiled potato chunks\nAccompaniment: warm crusty French baguettes (pain de campagne) / steamed white ponni rice, flaky Malabar parottas, or chapattis",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy tin-lined copper cocottes / stainless steel casserole and pressure cooker",
      heatSource: "Charcoal hearth (fourneau) / domestic LPG gas burner and induction cooktop",
      ingredientsList: [],
      preparationMethod:
        "Cooking vessel: heavy tinned copper degchis and enamelled French cocottes / stainless steel kadhais, non-stick sauté pans, and pressure cookers",
      contemporaryDifference:
        "Shift from slow charcoal-braised copper cocottes with country fowl to swift domestic gas braising with farm chicken and ready coconut cream.",
    },
    technologicalLeap: "Evolution from French bourgeois charcoal braising to modern domestic stove simmer.",
    documentedCitation: "Puducherry domestic culinary archives and Franco-Tamil gastronomic studies.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Koli Kari Recipe: 8 Steps",
    shortDescription:
      "country chicken (bone-in chunks), baby potatoes (peeled and quartered), fresh coconut cream or thick milk, pearl shallots (sambhar onions), crushed ginger and garlic paste, whole spices (cloves, cinnamon, cardamom), freshly grated nutmeg, fennel seeds and coriander seeds, fresh curry leaves and bay leaf, cold-pressed gingelly oil or butter.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Koli Kari Recipe",
      historicalCookware: "Heavy-bottomed Dutch oven, cocotte, or deep sauté pan with lid",
      heatSource: "Medium heat searing, followed by gentle low-heat braise for 25 minutes",
      ingredientsList: [
        "Country chicken (bone-in chunks)",
        "Baby potatoes (peeled and quartered)",
        "Fresh coconut cream or thick milk",
        "Pearl shallots (sambhar onions)",
        "Crushed ginger and garlic paste",
        "Whole spices (cloves, cinnamon, cardamom)",
        "Freshly grated nutmeg",
        "Fennel seeds and coriander seeds",
        "Fresh curry leaves and bay leaf",
        "Cold-pressed gingelly oil or butter",
      ],
      preparationMethod:
        "1. Clean and marinate the chicken chunks with turmeric, half of the ginger-garlic paste, and sea salt for 20 minutes.\n2. Gently dry-roast coriander seeds, fennel seeds, black peppercorns, cinnamon, cloves, and grated nutmeg on low heat, then grind into an aromatic powder.\n3. Heat cold-pressed sesame oil or butter in a heavy-bottomed pot or cocotte over medium flame, adding bay leaves and a pinch of fennel seeds.\n4. Add sliced pearl shallots and fresh curry leaves, sautéing gently for 3 to 4 minutes until translucent and golden.\n5. Stir in the remaining ginger-garlic paste and chopped tomatoes, cooking until the base breaks down into a soft, fragrant paste.\n6. Add the marinated chicken chunks and baby potato pieces, searing over medium-high heat for 5 minutes until sealed on all sides.\n7. Stir in the ground aromatic spice powder, pour in 1.5 cups of warm water or thin coconut milk, season with salt, and bring to a simmer.\n8. Cover tightly, simmer on low heat for 20 to 25 minutes until chicken and potatoes are tender, stir in thick coconut cream, rest for 10 minutes, and serve.",
      contemporaryDifference:
        "Numbered 8-step searing, aromatic braising, and coconut-cream enrichment process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step country chicken braise, potato tenderization, and coconut-cream emulsion protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The French Fricassée Braise & Coconut-Cream Velouté Technique",
    shortDescription:
      "Searing seasoned country chicken and baby potatoes in fragrant oil, braising gently in an aromatic broth, and enriching with velvety coconut cream.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Franco-Tamil Braise & Coconut Emulsion Execution",
      historicalCookware: "Heavy cast-iron Dutch oven or enamel cocotte with tight lid",
      heatSource: "Medium searing flame, followed by gentle low-heat braise",
      ingredientsList: [
        "Country chicken (bone-in chunks)",
        "Baby potatoes (peeled and quartered)",
        "Fresh coconut cream or thick milk",
        "Pearl shallots (sambhar onions)",
        "Crushed ginger and garlic paste",
        "Whole spices (cloves, cinnamon, cardamom)",
        "Freshly grated nutmeg",
        "Fennel seeds and coriander seeds",
        "Fresh curry leaves and bay leaf",
        "Cold-pressed gingelly oil or butter",
      ],
      preparationMethod:
        "Searing marinated chicken pieces and baby potatoes with caramelized shallots and roasted warm spices, slow-braising until fork-tender, and finishing with freshly grated nutmeg and thick coconut cream.",
      contemporaryDifference:
        "French braising discipline creating silky, non-greasy sauce layered with sweet coconut and delicate nutmeg aromatics.",
    },
    technologicalLeap: "Integration of French braising and velouté finishing with tropical Tamil spices.",
    documentedCitation: "Franco-Tamil culinary monographs and Puducherry colonial gastronomy surveys.",
  },
];


export const THEKUA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Thekua in Bihar & the Chhath Festival Tradition",
    shortDescription:
      "Thekua traces back to the ancient Sun-worship traditions and agricultural rhythms of Bihar, where it developed as the supreme, sacred mahaprasad of Chhath Puja—an ancient Vedic festival honoring Surya (the Sun God) and Chhathi Maiya. Revered across the Gangetic plains of Bihar, Jharkhand, eastern Uttar Pradesh, and the Terai region of Nepal, this festive delicacy was crafted from newly harvested autumn wheat flour, dark country sugarcane jaggery (gur), pure desi cow ghee, fennel seeds, and dry coconut. The semi-dry dough was traditionally hand-pressed onto intricately carved wooden moulds known as saancha, creating auspicious leaf, floral, and solar patterns before slow-frying in heavy iron kadhais over clay stoves. Its low moisture and high ghee content gave it remarkable natural preservation qualities, making it the essential travel ration and blessed token exchanged across families and pilgrim trails.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen chulha with black iron kadhai and wooden saancha",
      heatSource: "Dried mango wood and cow-dung (goitha) fire",
      ingredientsList: [],
      preparationMethod:
        "Coarse wheat flour rubbed with cow ghee, moistened with dissolved sugarcane jaggery, pressed on hand-carved wooden moulds (saancha), and deep-fried slowly in pure desi ghee over clay stoves.",
      contemporaryDifference:
        "Ancestral sacred festival confection developed for solar worship rituals, using unrefined seasonal jaggery and hand-carved hardwood moulds without modern leaveners.",
    },
    technologicalLeap: "Low-moisture fat-shortened dough matrix and relief-carved hardwood moulding enabling prolonged shelf preservation.",
    documentedCitation: "Ancient Indian references to wheat-jaggery offerings and Bihar Chhath festival documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking heat source: mud chulha stoves burning mango firewood and dried cow-dung (goitha) / domestic LPG gas stoves, induction hobs, and electric air fryers\nCooking vessel: heavy hand-forged black iron kadhais (lohe ki kadhai) / stainless steel deep fryers, non-stick skillets, and baking trays\nMoulding tool: hand-carved wooden moulds (saancha/dhi) etched with leaf and sun motifs / plastic cookie presses, silicone stamps, and fork indentations\nSweetener base: unrefined local sugarcane jaggery (gur) melted in water / refined white sugar syrup, organic brown sugar, or jaggery powder\nCooking fat: pure country cow ghee (desi ghee) churned at home / refined sunflower oil, mustard oil, or vegetable vanaspati\nFlavouring additions: whole fennel seeds and dry coconut slivers / desiccated coconut flakes, vanilla essence, and mixed dry fruit powders\nTexture & preparation: stiff, hand-gathered crumbly wheat dough / softer wheat-sooji dough kneaded quickly in stand mixers\nDistribution & role: sacred Chhath Puja prasad distributed among family and pilgrims / commercially packaged, vacuum-sealed festive snack available year-round",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Black iron kadhai / stainless steel kadhai, non-stick pan, and electric air fryer",
      heatSource: "Mango firewood chulha / domestic LPG gas burner and induction hob",
      ingredientsList: [],
      preparationMethod:
        "Cooking heat source: mud chulha stoves burning mango firewood and dried cow-dung (goitha) / domestic LPG gas stoves, induction hobs, and electric air fryers",
      contemporaryDifference:
        "Shift from wood-fired earthen hearths and seasonal ritual preparation to domestic gas stoves, sugar variants, and commercial year-round packaging.",
    },
    technologicalLeap: "Evolution from sacred ritual earthen hearth confection to domestic gas frying and vacuum-packaged commercial retail.",
    documentedCitation: "Comparative studies of Bihar domestic confectionery and festival foodways.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Thekua Recipe: 8 Steps",
    shortDescription:
      "coarse whole wheat flour (atta), sugarcane jaggery (gur), pure desi cow ghee, dry coconut slices (sukha nariyal), fennel seeds (saunf), green cardamom powder, semolina (sooji), white sesame seeds, filtered warm water, ghee or oil for deep frying.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Thekua Recipe",
      historicalCookware: "Heavy-bottomed iron kadhai with wooden saancha mould",
      heatSource: "Low-medium flame (150°C to 160°C) for gentle 10 to 12 minute deep fry",
      ingredientsList: [
        "Coarse whole wheat flour (atta)",
        "Sugarcane jaggery (gur)",
        "Pure desi cow ghee",
        "Dry coconut slices (sukha nariyal)",
        "Fennel seeds (saunf)",
        "Green cardamom powder",
        "Semolina (sooji)",
        "White sesame seeds",
        "Filtered warm water",
        "Ghee or oil for deep frying",
      ],
      preparationMethod:
        "1. Dissolve chopped sugarcane jaggery in 1/2 cup of warm water, stirring until melted completely, then strain through a fine sieve to remove any sediment and allow to cool.\n2. In a wide mixing bowl (parat), combine coarse whole wheat flour and semolina, then add warm melted desi cow ghee.\n3. Rub the ghee thoroughly into the flour with your fingertips for 4 to 5 minutes until the mixture resembles coarse sand and holds together when pressed in your palm.\n4. Fold in thinly sliced dry coconut, fennel seeds, crushed green cardamom powder, and white sesame seeds, tossing to distribute evenly throughout the flour.\n5. Gradually sprinkle the cooled jaggery water over the flour, pressing and gathering it into a very tight, stiff, crumbly dough without over-kneading.\n6. Divide into lemon-sized portions, shape between palms into smooth cylindrical rolls, and press firmly onto a greased carved wooden mould (saancha) to emboss leaf or sunburst patterns.\n7. Heat ghee or oil in a heavy iron kadhai over medium flame, then reduce heat to low-medium (150°C–160°C) and gently slide in 4 to 5 thekuas.\n8. Fry patiently on gentle heat for 10 to 12 minutes, turning once golden-brown and firm, drain on paper towels, cool completely to crisp perfection, and store in an airtight container for up to 3 weeks.",
      contemporaryDifference:
        "Numbered 8-step jaggery dissolution, flour rubbing, saancha embossing, and low-heat frying process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step low-hydration dough rubbing, wooden relief embossing, and low-heat fat frying protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The Wooden Saancha & Low-Heat Ghee Confection Technique",
    shortDescription:
      "Embossing firm jaggery-wheat dough on carved wooden moulds and deep-frying slowly in pure desi cow ghee to achieve crisp, caramelized crumb perfection.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Saancha Embossing & Pure Ghee Confection Execution",
      historicalCookware: "Hand-carved wooden saancha and black cast-iron kadhai",
      heatSource: "Gentle radiant frying temperature (150°C)",
      ingredientsList: [
        "Coarse whole wheat flour (atta)",
        "Sugarcane jaggery (gur)",
        "Pure desi cow ghee",
        "Dry coconut slices (sukha nariyal)",
        "Fennel seeds (saunf)",
        "Green cardamom powder",
        "Semolina (sooji)",
        "White sesame seeds",
        "Filtered warm water",
        "Ghee or oil for deep frying",
      ],
      preparationMethod:
        "Forming stiff, fat-shortened dough into oval cylinders, pressing on oil-brushed wooden moulds to imprint ridges, and frying very slowly in pure cow ghee until deeply caramelized, crisp, and fragrant.",
      contemporaryDifference:
        "Sacred Chhath Puja technique combining thermal ridge conduction with low-temperature fat confection.",
    },
    technologicalLeap: "Mould-guided heat dispersion combined with controlled sugar caramelization in pure cow butterfat.",
    documentedCitation: "Bihar cultural anthropology and regional gastronomy monographs.",
  },
];

export const SILAO_KHAJA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Silao Khaja in Nalanda & the Ancient Magadhan Route",
    shortDescription:
      "Silao Khaja traces back to the ancient town of Silao, nestled between the historic ruins of Nalanda Mahavihara and the royal hill-girt capital of Rajgir in Bihar. Long documented as a vibrant stop along ancient trade and pilgrimage highways, Silao developed a celebrated artisanal sweet-making tradition that dates back centuries. Local folklore and oral histories connect the layered delicacy to Buddhist-era pilgrims, travellers, and monks traversing the Magadhan empire, with popular legends recounting that Lord Buddha was offered khaja on his journey through the region. Master confectioners (halwais) developed an exquisite multi-layered pastry consisting of up to 52 paper-thin sheets of wheat dough folded with clarified butter, deep-fried until crisp and dipped in clear sugar syrup. In December 2018, this unique cultural sweet was formally awarded the Geographical Indication (GI) Tag, cementing Silao's status as the historic birthplace of authentic Bihar khaja.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Cast-iron cauldron (kadhai) with wide perforated brass basting ladle",
      heatSource: "Coal bhatti and wood-fired hearth",
      ingredientsList: [],
      preparationMethod:
        "Fine wheat flour laminated with ghee-rice flour paste (saata), folded repeatedly into 52 micro-layers, gently fried in deep ghee, and glazed with warm cardamom sugar syrup.",
      contemporaryDifference:
        "Ancestral multi-layer artisanal lamination developed along the ancient Rajgir-Nalanda pilgrimage corridor, awarded official Geographical Indication protection in 2018.",
    },
    technologicalLeap: "Hand-rolled microscopic dough lamination using saata barrier paste to create 52 distinct crisp layers without chemical leaveners.",
    documentedCitation: "Official GI Registry records (Application No. 549) and Nalanda district historical archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking heat source: coal-fired bhattis and wood-fired mud hearths / domestic and commercial LPG burners with precise digital temperature control\nCooking vessel: enormous cast-iron cauldrons (kadhais) with long brass basting ladles / stainless steel fryers and commercial sweet-making vessels\nLamination technique: hand-kneading and manual wooden pin rolling into paper-thin sheets / electric dough sheeters and mechanical rolling rollers in modern workshops\nLayering paste (saata): pure country cow ghee mixed with stone-ground rice flour / vegetable shortening, dalda, or refined cornstarch emulsions\nFrying medium: pure clarified desi ghee imparting rich, nutty fragrance / refined vegetable oil, groundnut oil, or vanaspati blends\nSugar syrup finishing: light manual dipping in warm cardamom sugar chasni on flat wooden trays / automated syrup glazing and draining conveyor belts\nPackaging & storage: packed loosely in newspapers and rustic bamboo baskets / vacuum-sealed, tamper-evident food-grade boxes with moisture barriers\nMarket reach: exclusive roadside shops along the Rajgir-Nalanda highway for pilgrims / GI-tagged, branded retail boxes shipped across India and worldwide",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Cast-iron cauldron / stainless steel commercial fryer and temperature-regulated kettle",
      heatSource: "Coal bhatti / commercial LPG burner with precise digital heat control",
      ingredientsList: [],
      preparationMethod:
        "Cooking heat source: coal-fired bhattis and wood-fired mud hearths / domestic and commercial LPG burners with precise digital temperature control",
      contemporaryDifference:
        "Shift from open coal bhattis and local pilgrimage stall sales to temperature-controlled stainless fryers and moisture-sealed GI retail boxes.",
    },
    technologicalLeap: "Evolution from manual wayside bhatti frying to standardized GI-certified confectionery packaging.",
    documentedCitation: "Comparative studies of Nalanda confectionery guilds and GI Registry quality standards monographs.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Silao Khaja Recipe: 8 Steps",
    shortDescription:
      "refined wheat flour (maida), pure desi ghee, granulated white sugar, green cardamom powder, rice flour (for saata layering paste), filtered water, few drops of lemon juice, pinch of sea salt, rose or kewra water, ghee or oil for deep frying.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Silao Khaja Recipe",
      historicalCookware: "Deep kadhai with perforated basting skimmer and wire draining rack",
      heatSource: "Gentle low heat (140°C to 150°C) for 12 to 15 minute slow expansion fry",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Pure desi ghee",
        "Granulated white sugar",
        "Green cardamom powder",
        "Rice flour (for saata layering paste)",
        "Filtered water",
        "Few drops of lemon juice",
        "Pinch of sea salt",
        "Rose or kewra water",
        "Ghee or oil for deep frying",
      ],
      preparationMethod:
        "1. In a large bowl, mix refined flour (maida) with a pinch of salt and 3 tablespoons of warm melted ghee, rubbing between fingertips until it resembles fine breadcrumbs.\n2. Gradually add chilled water and knead into a smooth, firm, pliable dough, covering with a damp muslin cloth to rest for 30 minutes.\n3. In a small bowl, whisk 4 tablespoons of melted ghee with 2 tablespoons of rice flour or fine maida until smooth and creamy to prepare the lamination paste (saata).\n4. Divide rested dough into equal balls; roll each out on a clean dusted marble surface into a paper-thin, translucent rectangular sheet.\n5. Smear a delicate, uniform layer of saata paste over the sheet, stack a second rolled sheet on top, apply more paste, and repeat with 4 to 5 sheets before rolling tightly into a compact Swiss-roll log.\n6. Cut the log crosswise into 1.5-inch segments, then flatten each segment lengthwise with a single gentle stroke of the rolling pin to separate the 52 microscopic layers.\n7. Heat ghee or oil in a heavy-bottomed kadhai over medium flame, lower to gentle heat (140°C–150°C), and fry khajas slowly for 12 to 15 minutes, basting with hot fat until the layers fan open and turn pale golden.\n8. Prepare a light one-string sugar syrup with sugar, water, green cardamom, and lemon juice; immerse hot drained khajas for 30 to 45 seconds, transfer to a wire rack to set, and store in an airtight container for up to 2 weeks.",
      contemporaryDifference:
        "Numbered 8-step firm kneading, saata lamination, multi-layer rolling, and slow fat-basting process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step translucent dough sheeting, saata paste lamination, and gentle oil-basting expansion protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Recipe Hearth Execution",
    yearRange: "Hearth Technique",
    centuryLabel: "Hearth Method",
    headline: "The 52-Layer Saata Lamination & Basting Expansion Technique",
    shortDescription:
      "Laminating paper-thin dough sheets with ghee-rice flour saata paste and basting with gentle hot fat to expand 52 microscopic layers like a book.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Saata Lamination & Hot Oil Basting Execution",
      historicalCookware: "Marble rolling slab, wooden pin, heavy kadhai, and brass basting ladle",
      heatSource: "Gentle low frying heat (140°C to 150°C)",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Pure desi ghee",
        "Granulated white sugar",
        "Green cardamom powder",
        "Rice flour (for saata layering paste)",
        "Filtered water",
        "Few drops of lemon juice",
        "Pinch of sea salt",
        "Rose or kewra water",
        "Ghee or oil for deep frying",
      ],
      preparationMethod:
        "Rolling translucent sheets, spreading hydrophobic saata paste, stacking 5 layers, rolling into a snug log, cutting segments, and basting gently in 145°C fat so internal steam forces 52 layers to fan open before quick syrup glazing.",
      contemporaryDifference:
        "Ancestral Nalanda halwai technique producing feather-light, shatter-crisp pastry that remains crisp for weeks.",
    },
    technologicalLeap: "Micro-lamination vapor separation combined with continuous hot fat ladle basting.",
    documentedCitation: "GI Application No. 549 technical dossier and Bihar culinary heritage surveys.",
  },
];

const STAGE_SOURCE_EPOCH: Record<StageKey, number> = {
  origin: 0,
  ingredients: 1,
  method: 3,
  plated: 5,
};

const STAGE_YEAR_RANGE: Record<StageKey, string> = {
  origin: "Origins & documented references",
  ingredients: "Regional & seasonal produce",
  method: "Traditional technique to modern kitchens",
  plated: "Present day",
};

/** Legacy six-epoch records for one dish, used only for recipe detail. */
export const CHHATTISGARHI_CHILA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chila in Chhattisgarh & the Mahanadi Basin",
    shortDescription: "Origin in the Mahanadi Basin: Known as the rice bowl of central India, Chhattisgarh has cultivated thousands of indigenous rice landraces for millennia. Chila (locally pronounced Chilha) evolved as an essential indigenous peasant breakfast crafted from freshly harvested rice. Tribal & agricultural festivals: Chila holds deep cultural sanctimony during agrarian festivals such as Hareli (celebrating agricultural tools and monsoon crops) and Pola (venerating bullocks and livestock), where women prepare baskets of chilas as festive offerings. Historical documentation: Folk oral traditions and regional Chhattisgarhi lore document chila as an ancient, unfermented quick crepe baked by rural households before heading to work in lush paddy fields. Cooking method: Traditionally poured onto a heated earthen or rough-hewn cast-iron griddle (lohe ka tawa) over a wood-fire hearth, gently swirled thin with a leaf or wooden paddle, and roasted with minimal indigenous oil.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Mahanadi Basin: Known as the rice bowl of central India, Chhattisgarh has cultivated thousands of indigenous rice landraces for millennia. Chila (locally pronounced Chilha) evolved as an essential indigenous peasant breakfast crafted from freshly harvested rice.","Tribal & agricultural festivals: Chila holds deep cultural sanctimony during agrarian festivals such as Hareli (celebrating agricultural tools and monsoon crops) and Pola (venerating bullocks and livestock), where women prepare baskets of chilas as festive offerings.","Historical documentation: Folk oral traditions and regional Chhattisgarhi lore document chila as an ancient, unfermented quick crepe baked by rural households before heading to work in lush paddy fields.","Cooking method: Traditionally poured onto a heated earthen or rough-hewn cast-iron griddle (lohe ka tawa) over a wood-fire hearth, gently swirled thin with a leaf or wooden paddle, and roasted with minimal indigenous oil."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay or seasoned iron cookware",
      documentedCitation: "Chhattisgarh Tourism Board: Indigenous Food Traditions of the Rice Heartland (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Grinding grain: soaked raw rice crushed by hand on heavy granite sil-batta slabs / packaged stone-ground fine rice flour whisked effortlessly with water in modern kitchens. Cooking surface: crude earthen clay tawa (mitti ka tawa) seasoned with mustard oil / heavy cast-iron tawas and modern non-stick griddles. Fuel & heat: crackling open wood-fired mud hearths (chulha) / uniform domestic gas flames and digital induction cooktops. Seasoning & herbs: simple mountain rock salt and wild green chillies / fragrant additions of roasted cumin, fresh coriander, ginger, and sesame seeds. Batter fermentation: purely unfermented instant batter whisked fresh / modern cooks occasionally rest batter or blend in urad dal for softer flexibility. Oil usage: bare greasing using halved onions or brinjal stems dipped in cold-pressed mustard oil / light brushings of desi ghee or sunflower oil. Accompaniments: rustic raw red ant chutney (chaprah) or green forest leaf pastes / fiery charred green tomato chutney, sweet mango pickle, and spiced lentil stews. Cultural presence: exclusive sacred festival and farmworker household breakfast / celebrated regional delicacy showcased in state tourism food festivals and ethnic restaurants.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Grinding grain: soaked raw rice crushed by hand on heavy granite sil-batta slabs / packaged stone-ground fine rice flour whisked effortlessly with water in modern kitchens.","Cooking surface: crude earthen clay tawa (mitti ka tawa) seasoned with mustard oil / heavy cast-iron tawas and modern non-stick griddles.","Fuel & heat: crackling open wood-fired mud hearths (chulha) / uniform domestic gas flames and digital induction cooktops.","Seasoning & herbs: simple mountain rock salt and wild green chillies / fragrant additions of roasted cumin, fresh coriander, ginger, and sesame seeds.","Batter fermentation: purely unfermented instant batter whisked fresh / modern cooks occasionally rest batter or blend in urad dal for softer flexibility.","Oil usage: bare greasing using halved onions or brinjal stems dipped in cold-pressed mustard oil / light brushings of desi ghee or sunflower oil.","Accompaniments: rustic raw red ant chutney (chaprah) or green forest leaf pastes / fiery charred green tomato chutney, sweet mango pickle, and spiced lentil stews.","Cultural presence: exclusive sacred festival and farmworker household breakfast / celebrated regional delicacy showcased in state tourism food festivals and ethnic restaurants."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "K.T. Achaya: A Historical Dictionary of Indian Food (Oxford University Press, 1998)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Chila Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. In a wide mixing bowl, whisk 1.5 cups of fresh fine rice flour with rock salt, cumin seeds, finely chopped green chillies, and fresh coriander leaves. 2. Gradually pour 1.5 to 2 cups of filtered water in batches, whisking continuously to form a smooth, lump-free, free-flowing batter of pouring consistency similar to dosa or buttermilk. 3. Cover the bowl with a clean cloth and let the batter rest for 10 to 15 minutes, allowing the rice starch to hydrate evenly. 4. Heat a heavy seasoned cast-iron flat griddle (tawa) on medium flame until hot; lightly grease the surface using a halved onion dipped in mustard oil or ghee. 5. Stir the rested batter well from the bottom, pour a generous ladleful (about 1/2 cup) onto the centre of the hot tawa, and gently swirl or tilt the pan outwards to spread it into a thin circular round. 6. Optionally sprinkle a pinch of white sesame seeds or finely diced onions across the moist top surface, and drizzle a few drops of mustard oil around the circumference. 7. Cook undisturbed on medium-low heat for 2 to 3 minutes until the underside turns crisp, golden-brown, and the edges naturally release from the tawa. 8. Flip gently with a thin spatula, roast the other side for 1 to 2 minutes until lightly speckled, fold into a half-moon, and serve piping hot alongside tangy roasted green tomato (tamatar-mirchi) chutney or spicy bathua dal.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Rice flour (chawal ka atta)","Filtered water","Cumin seeds (jeera)","Finely chopped green chillies","Finely chopped fresh coriander","Finely chopped onions (optional)","White sesame seeds (til)","Mustard oil or ghee (for roasting)","Rock salt (sendha namak)","Roasted tomato and green garlic chutney (for serving)"],
      preparationMethod: ["1. In a wide mixing bowl, whisk 1.5 cups of fresh fine rice flour with rock salt, cumin seeds, finely chopped green chillies, and fresh coriander leaves.","2. Gradually pour 1.5 to 2 cups of filtered water in batches, whisking continuously to form a smooth, lump-free, free-flowing batter of pouring consistency similar to dosa or buttermilk.","3. Cover the bowl with a clean cloth and let the batter rest for 10 to 15 minutes, allowing the rice starch to hydrate evenly.","4. Heat a heavy seasoned cast-iron flat griddle (tawa) on medium flame until hot; lightly grease the surface using a halved onion dipped in mustard oil or ghee.","5. Stir the rested batter well from the bottom, pour a generous ladleful (about 1/2 cup) onto the centre of the hot tawa, and gently swirl or tilt the pan outwards to spread it into a thin circular round.","6. Optionally sprinkle a pinch of white sesame seeds or finely diced onions across the moist top surface, and drizzle a few drops of mustard oil around the circumference.","7. Cook undisturbed on medium-low heat for 2 to 3 minutes until the underside turns crisp, golden-brown, and the edges naturally release from the tawa.","8. Flip gently with a thin spatula, roast the other side for 1 to 2 minutes until lightly speckled, fold into a half-moon, and serve piping hot alongside tangy roasted green tomato (tamatar-mirchi) chutney or spicy bathua dal."],
      heatSource: "Medium regulated heat on domestic gas stove",
      vessel: "Heavy-bottomed pan, tawa, or steamer as required",
      documentedCitation: "Archana's Kitchen: Traditional Chhattisgarhi Chila with Green Tomato Chutney (2020)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Chila today",
    shortDescription: "Present-day form & serving: Served piping hot straight off the tawa, folded into half-moons, accompanied by traditional Chhattisgarhi roasted green tomato chutney, sweet tomato sauce, or spicy aloo chana curry. Flavour identity: Savoury, crisp on the edges, delicately chewy in the centre, nutty from cumin and roasted rice, with pungent accents of mustard oil. Variations: Plain Chhattisgarhi chila, sesame-crusted til chila, onion-stuffed chila, and modern vegetable-enriched rice crepes. Recognition: Celebrated as the official flagship breakfast of Chhattisgarh under state tourism food promotions and featured widely at the annual National Tribal Dance Festival in Raipur.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Rice flour (chawal ka atta)","Filtered water","Cumin seeds (jeera)","Finely chopped green chillies","Finely chopped fresh coriander","Finely chopped onions (optional)","White sesame seeds (til)","Mustard oil or ghee (for roasting)","Rock salt (sendha namak)","Roasted tomato and green garlic chutney (for serving)"],
      preparationMethod: ["Present-day form & serving: Served piping hot straight off the tawa, folded into half-moons, accompanied by traditional Chhattisgarhi roasted green tomato chutney, sweet tomato sauce, or spicy aloo chana curry.","Flavour identity: Savoury, crisp on the edges, delicately chewy in the centre, nutty from cumin and roasted rice, with pungent accents of mustard oil.","Variations: Plain Chhattisgarhi chila, sesame-crusted til chila, onion-stuffed chila, and modern vegetable-enriched rice crepes.","Recognition: Celebrated as the official flagship breakfast of Chhattisgarh under state tourism food promotions and featured widely at the annual National Tribal Dance Festival in Raipur."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Chhattisgarh Tourism Board: Indigenous Food Traditions of the Rice Heartland (2018)",
    },
  },
];

export const FARA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Fara in Chhattisgarh Tribal & Agrarian Festivals",
    shortDescription: "Origin in tribal heartlands: Fara (often called Farra or Muthiya) is an indigenous steamed dumpling deeply rooted in the rural and tribal culinary traditions of Chhattisgarh, born from the abundant harvests of indigenous paddy. Festive importance: Central to harvest celebrations including Hareli, Teeja, and Pitru Paksha, where steamed rice confections are prepared as sacred offerings and wholesome family sustenance. Historical documentation: Mentioned in regional ethnographic chronicles and local folklore of central India as a zero-waste, protein-rich innovation combining local rice flour with indigenous wild or farm-grown pulses. Cooking method: Prepared by hand-shaping rice dough around seasoned lentil mash, steaming in perforated earthenware over bubbling pots, and lightly crisping with mustard seeds in a cast-iron skillet.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in tribal heartlands: Fara (often called Farra or Muthiya) is an indigenous steamed dumpling deeply rooted in the rural and tribal culinary traditions of Chhattisgarh, born from the abundant harvests of indigenous paddy.","Festive importance: Central to harvest celebrations including Hareli, Teeja, and Pitru Paksha, where steamed rice confections are prepared as sacred offerings and wholesome family sustenance.","Historical documentation: Mentioned in regional ethnographic chronicles and local folklore of central India as a zero-waste, protein-rich innovation combining local rice flour with indigenous wild or farm-grown pulses.","Cooking method: Prepared by hand-shaping rice dough around seasoned lentil mash, steaming in perforated earthenware over bubbling pots, and lightly crisping with mustard seeds in a cast-iron skillet."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay or seasoned iron cookware",
      documentedCitation: "Chhattisgarh Tourism Board: Culinary Heritage of Chhattisgarh — Steamed Farra (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Rice processing: paddy parboiled and pounded in wooden dhenki huskers / commercial fine-milled rice flour available year-round. Pulse grinding: soaked split lentils crushed coarsely on granite sil-batta without water / pulse-mode electric mixer grinders. Steaming apparatus: perforated earthen clay bowls set over boiling pots lined with muslin / multi-tiered stainless steel food steamers and idli cookers. Dough technique: boiling water stirred into freshly milled rice flour in clay cauldrons / pre-measured hot water kneading in stainless mixing bowls. Tempering fat: cold-pressed artisanal mustard oil / refined groundnut oil or fragrant desi cow ghee. Dumpling shape: long tapered hand-rolled cylinders or crescent dumplings / uniform, decorative bite-sized dumplings. Texture profile: firm, hearty, highly filling steamed dumplings / softer, tender steamed dumplings pan-tossed until golden and blistered. Dining environment: served on fresh Sal leaf plates (patravali) around village courtyards / plated elegantly in urban dining spaces, street-food stalls, and culinary festivals.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Rice processing: paddy parboiled and pounded in wooden dhenki huskers / commercial fine-milled rice flour available year-round.","Pulse grinding: soaked split lentils crushed coarsely on granite sil-batta without water / pulse-mode electric mixer grinders.","Steaming apparatus: perforated earthen clay bowls set over boiling pots lined with muslin / multi-tiered stainless steel food steamers and idli cookers.","Dough technique: boiling water stirred into freshly milled rice flour in clay cauldrons / pre-measured hot water kneading in stainless mixing bowls.","Tempering fat: cold-pressed artisanal mustard oil / refined groundnut oil or fragrant desi cow ghee.","Dumpling shape: long tapered hand-rolled cylinders or crescent dumplings / uniform, decorative bite-sized dumplings.","Texture profile: firm, hearty, highly filling steamed dumplings / softer, tender steamed dumplings pan-tossed until golden and blistered.","Dining environment: served on fresh Sal leaf plates (patravali) around village courtyards / plated elegantly in urban dining spaces, street-food stalls, and culinary festivals."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Hebbar's Kitchen & Archana's Kitchen: Traditional Chhattisgarhi Fara (2021)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Fara Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Rinse and soak chana dal and urad dal in warm water for 4 hours; drain thoroughly and grind coarsely in a stone mortar or mixer with green chillies, ginger, garlic, cumin, and rock salt without adding water. 2. Fold chopped fresh coriander leaves into the coarse spiced dal mixture to form the savoury stuffing; set aside in a cool bowl. 3. In a saucepan, bring 1.5 cups of water to a rolling boil with 1/2 teaspoon of salt and 1 teaspoon of mustard oil or ghee. 4. Gradually pour the boiling water into 1.5 cups of fine rice flour, stirring briskly with a wooden spoon, cover with a lid, and rest for 10 minutes to let the rice flour steam-cook. 5. Once comfortably warm, knead the mixture vigorously for 3 to 4 minutes into a pliable, smooth, non-sticky rice dough; grease palms lightly with oil. 6. Pinch off lemon-sized dough portions, roll into smooth rounds, flatten between palms into 3-inch discs, place a spoonful of dal stuffing in the centre, and fold over into crescent or cylindrical dumplings, pinching edges to seal partially. 7. Arrange dumplings onto a greased perforated steamer plate and steam covered over vigorous boiling water for 12 to 15 minutes until the dough turns glossy, translucent, and firm to the touch. 8. Heat mustard oil in a wide pan, crackle mustard seeds, curry leaves, slit green chillies, and white sesame seeds; gently toss the steamed faras until golden and lightly crisped, serving hot with fiery roasted tomato chutney.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh rice flour (chawal atta)","Bengal gram lentils (chana dal)","Split black gram lentils (urad dal)","Green chillies and fresh ginger","Garlic cloves (lahsun)","Mustard seeds (sarson / rai)","Fresh curry leaves (kadi patta)","White sesame seeds (safed til)","Fresh coriander leaves","Mustard oil or ghee (for dough and tempering)"],
      preparationMethod: ["1. Rinse and soak chana dal and urad dal in warm water for 4 hours; drain thoroughly and grind coarsely in a stone mortar or mixer with green chillies, ginger, garlic, cumin, and rock salt without adding water.","2. Fold chopped fresh coriander leaves into the coarse spiced dal mixture to form the savoury stuffing; set aside in a cool bowl.","3. In a saucepan, bring 1.5 cups of water to a rolling boil with 1/2 teaspoon of salt and 1 teaspoon of mustard oil or ghee.","4. Gradually pour the boiling water into 1.5 cups of fine rice flour, stirring briskly with a wooden spoon, cover with a lid, and rest for 10 minutes to let the rice flour steam-cook.","5. Once comfortably warm, knead the mixture vigorously for 3 to 4 minutes into a pliable, smooth, non-sticky rice dough; grease palms lightly with oil.","6. Pinch off lemon-sized dough portions, roll into smooth rounds, flatten between palms into 3-inch discs, place a spoonful of dal stuffing in the centre, and fold over into crescent or cylindrical dumplings, pinching edges to seal partially.","7. Arrange dumplings onto a greased perforated steamer plate and steam covered over vigorous boiling water for 12 to 15 minutes until the dough turns glossy, translucent, and firm to the touch.","8. Heat mustard oil in a wide pan, crackle mustard seeds, curry leaves, slit green chillies, and white sesame seeds; gently toss the steamed faras until golden and lightly crisped, serving hot with fiery roasted tomato chutney."],
      heatSource: "Medium regulated heat on domestic gas stove",
      vessel: "Heavy-bottomed pan, tawa, or steamer as required",
      documentedCitation: "Verrier Elwin: The Tribal Art of Middle India (Oxford University Press, 1951)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Fara today",
    shortDescription: "Present-day form & serving: Served piping hot either directly from the steamer or lightly pan-tossed in fragrant mustard seeds and sesame, paired with fiery roasted green tomato chutney or coriander-mint dip. Flavour identity: Comforting, herbaceous, mildly spiced, featuring tender, chewy rice skins yielding to a savory, protein-rich spiced lentil core. Variations: Stuffed dal fara, plain seasoned muthiya fara (made from leftover cooked rice and flour), and crisp pan-fried festive faras. Recognition: Endorsed by the Chhattisgarh Tourism Board as a quintessential healthy superfood of the state, celebrated for being oil-free, gluten-free, and wholesome.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh rice flour (chawal atta)","Bengal gram lentils (chana dal)","Split black gram lentils (urad dal)","Green chillies and fresh ginger","Garlic cloves (lahsun)","Mustard seeds (sarson / rai)","Fresh curry leaves (kadi patta)","White sesame seeds (safed til)","Fresh coriander leaves","Mustard oil or ghee (for dough and tempering)"],
      preparationMethod: ["Present-day form & serving: Served piping hot either directly from the steamer or lightly pan-tossed in fragrant mustard seeds and sesame, paired with fiery roasted green tomato chutney or coriander-mint dip.","Flavour identity: Comforting, herbaceous, mildly spiced, featuring tender, chewy rice skins yielding to a savory, protein-rich spiced lentil core.","Variations: Stuffed dal fara, plain seasoned muthiya fara (made from leftover cooked rice and flour), and crisp pan-fried festive faras.","Recognition: Endorsed by the Chhattisgarh Tourism Board as a quintessential healthy superfood of the state, celebrated for being oil-free, gluten-free, and wholesome."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Chhattisgarh Tourism Board: Culinary Heritage of Chhattisgarh — Steamed Farra (2019)",
    },
  },
];

export const BAJRA_KHICHDI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bajra Khichdi in Haryana & Harappan Agrarian Antiquity",
    shortDescription: "Ancient millet hearths: Pearl millet (bajra) has been cultivated across the semi-arid plains of Haryana and the Ghaggar-Hakra valley since Harappan and Vedic times, providing robust sustenance through harsh northern winters. Pastoral & agrarian lifestyle: Haryana's traditional farming community relied on bajra khichdi as a slow-burning source of warmth, stamina, and nutrition during freezing winter nights and long days in the fields. Historical documentation: Mentioned in historical Punjabi and Haryanvi agricultural chronicles as the staple evening meal of rural homesteads, prepared as the wood-fire chulha burned low after cooking flatbreads. Cooking method: Pounded meticulously in deep stone mortars (okhli) using heavy iron-ringed pestles (musal) to strip the tough fibrous outer skin, then slow-simmered in earthen pots over dying embers.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Ancient millet hearths: Pearl millet (bajra) has been cultivated across the semi-arid plains of Haryana and the Ghaggar-Hakra valley since Harappan and Vedic times, providing robust sustenance through harsh northern winters.","Pastoral & agrarian lifestyle: Haryana's traditional farming community relied on bajra khichdi as a slow-burning source of warmth, stamina, and nutrition during freezing winter nights and long days in the fields.","Historical documentation: Mentioned in historical Punjabi and Haryanvi agricultural chronicles as the staple evening meal of rural homesteads, prepared as the wood-fire chulha burned low after cooking flatbreads.","Cooking method: Pounded meticulously in deep stone mortars (okhli) using heavy iron-ringed pestles (musal) to strip the tough fibrous outer skin, then slow-simmered in earthen pots over dying embers."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay or seasoned iron cookware",
      documentedCitation: "Haryana Tourism Corporation: Rustic Culinary Heritage of Haryana — Bajra Khichdi (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "De-husking bajra: tedious hand-pounding in heavy stone okhlis with wooden musal / packaged pre-cleaned, machine de-husked, or ready-cut bajra grits. Cooking vessel: large unglazed clay pots (handi) or thick iron cauldrons / heavy-bottomed stainless steel pressure cookers and instant pots. Cooking heat: slow glowing cow-dung cake (uple) and acacia wood embers / efficient domestic gas burners and electric induction stoves. Cooking duration: patient simmering for 3 to 4 hours over dying hearth fires / rapid cooking under pressure within 25 to 30 minutes. Grain pairing: wild native moong or moth beans / split polished yellow moong dal or green split chilka moong. Tempering medium: freshly churned indigenous A2 desi cow or buffalo ghee / refined oils or commercial pasteurised butter. Accompaniments: warm unrefined gur (jaggery) and earthen bowls of spiced buttermilk / chilled creamy lassi, spicy kadhi pakora, and mixed pickles. Cultural status: rustic agrarian survival sustenance / modern celebrated nutrient-dense, gluten-free superfood featured on gourmet wellness menus.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["De-husking bajra: tedious hand-pounding in heavy stone okhlis with wooden musal / packaged pre-cleaned, machine de-husked, or ready-cut bajra grits.","Cooking vessel: large unglazed clay pots (handi) or thick iron cauldrons / heavy-bottomed stainless steel pressure cookers and instant pots.","Cooking heat: slow glowing cow-dung cake (uple) and acacia wood embers / efficient domestic gas burners and electric induction stoves.","Cooking duration: patient simmering for 3 to 4 hours over dying hearth fires / rapid cooking under pressure within 25 to 30 minutes.","Grain pairing: wild native moong or moth beans / split polished yellow moong dal or green split chilka moong.","Tempering medium: freshly churned indigenous A2 desi cow or buffalo ghee / refined oils or commercial pasteurised butter.","Accompaniments: warm unrefined gur (jaggery) and earthen bowls of spiced buttermilk / chilled creamy lassi, spicy kadhi pakora, and mixed pickles.","Cultural status: rustic agrarian survival sustenance / modern celebrated nutrient-dense, gluten-free superfood featured on gourmet wellness menus."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "K.T. Achaya: Indian Food — A Historical Companion (Oxford University Press, 1994)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Bajra Khichdi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Sprinkle 2 tablespoons of warm water over whole bajra grains in a bowl, let rest for 10 minutes to loosen the fibrous outer husk, then pulse lightly in a stone mortar (okhli) or food processor and blow away the husk. 2. Coarsely pound or pulse the de-husked bajra into broken grits (dalia texture); rinse yellow split moong dal thoroughly and soak together with the broken bajra in warm water for 30 minutes. 3. Heat 2 tablespoons of pure desi cow ghee in a heavy-bottomed clay handi or deep cooker over medium flame. 4. Add cumin seeds and let them splutter; add a generous pinch of asafoetida (hing), grated ginger, and finely chopped green chillies, sauteing for 30 seconds until aromatic. 5. Add turmeric powder and rock salt, then drain and add the soaked bajra and moong dal grits, sauteing in the hot spiced ghee for 2 minutes to toast the grains. 6. Pour in 4 to 5 cups of hot filtered water, stirring vigorously with a wooden churner (madhani) to prevent any lump formation. 7. Bring to a rolling boil, then lower flame to low, cover with a tight lid, and simmer gently for 25 to 30 minutes (or pressure-cook for 4 to 5 whistles on medium-low), stirring occasionally until the grains are meltingly tender and creamy. 8. Rest covered for 5 minutes, mash lightly with the back of a ladle, spoon into clay bowls, crown with a generous dollop of freshly churned white butter (makkhan), and serve steaming hot with chilled spiced buttermilk or sugarcane jaggery.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Whole pearl millet (bajra)","Yellow split moong dal (dhuli moong)","Pure desi cow ghee","Cumin seeds (jeera)","Asafoetida (hing)","Turmeric powder (haldi)","Finely chopped green chillies and ginger","Rock salt (sendha namak)","Filtered water","Freshly churned white butter (desi makkhan) / Jaggery (gur) (for serving)"],
      preparationMethod: ["1. Sprinkle 2 tablespoons of warm water over whole bajra grains in a bowl, let rest for 10 minutes to loosen the fibrous outer husk, then pulse lightly in a stone mortar (okhli) or food processor and blow away the husk.","2. Coarsely pound or pulse the de-husked bajra into broken grits (dalia texture); rinse yellow split moong dal thoroughly and soak together with the broken bajra in warm water for 30 minutes.","3. Heat 2 tablespoons of pure desi cow ghee in a heavy-bottomed clay handi or deep cooker over medium flame.","4. Add cumin seeds and let them splutter; add a generous pinch of asafoetida (hing), grated ginger, and finely chopped green chillies, sauteing for 30 seconds until aromatic.","5. Add turmeric powder and rock salt, then drain and add the soaked bajra and moong dal grits, sauteing in the hot spiced ghee for 2 minutes to toast the grains.","6. Pour in 4 to 5 cups of hot filtered water, stirring vigorously with a wooden churner (madhani) to prevent any lump formation.","7. Bring to a rolling boil, then lower flame to low, cover with a tight lid, and simmer gently for 25 to 30 minutes (or pressure-cook for 4 to 5 whistles on medium-low), stirring occasionally until the grains are meltingly tender and creamy.","8. Rest covered for 5 minutes, mash lightly with the back of a ladle, spoon into clay bowls, crown with a generous dollop of freshly churned white butter (makkhan), and serve steaming hot with chilled spiced buttermilk or sugarcane jaggery."],
      heatSource: "Medium regulated heat on domestic gas stove",
      vessel: "Heavy-bottomed pan, tawa, or steamer as required",
      documentedCitation: "Tarla Dalal & Hebbar's Kitchen: Traditional Haryanvi Bajre ki Khichdi (2020)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Bajra Khichdi today",
    shortDescription: "Present-day form & serving: Served piping hot in earthenware, topped with a melting pool of country white butter (makkhan), accompanied by raw onion rings, jaggery pieces, and a glass of chilled salted chaas. Flavour identity: Deeply earthy, nutty, creamy, comfortingly rich with ghee, subtly highlighted by cumin and asafoetida. Variations: Traditional Haryana plain bajra khichdi, vegetable bajra khichdi with green peas and carrots, and garlic-infused lehsun bajra khichdi. Recognition: Showcased by Haryana Tourism at the Surajkund International Crafts Mela as the signature culinary heritage dish of the state and promoted nationally as an exemplary Shree Anna millet preparation.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Whole pearl millet (bajra)","Yellow split moong dal (dhuli moong)","Pure desi cow ghee","Cumin seeds (jeera)","Asafoetida (hing)","Turmeric powder (haldi)","Finely chopped green chillies and ginger","Rock salt (sendha namak)","Filtered water","Freshly churned white butter (desi makkhan) / Jaggery (gur) (for serving)"],
      preparationMethod: ["Present-day form & serving: Served piping hot in earthenware, topped with a melting pool of country white butter (makkhan), accompanied by raw onion rings, jaggery pieces, and a glass of chilled salted chaas.","Flavour identity: Deeply earthy, nutty, creamy, comfortingly rich with ghee, subtly highlighted by cumin and asafoetida.","Variations: Traditional Haryana plain bajra khichdi, vegetable bajra khichdi with green peas and carrots, and garlic-infused lehsun bajra khichdi.","Recognition: Showcased by Haryana Tourism at the Surajkund International Crafts Mela as the signature culinary heritage dish of the state and promoted nationally as an exemplary Shree Anna millet preparation."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Haryana Tourism Corporation: Rustic Culinary Heritage of Haryana — Bajra Khichdi (2019)",
    },
  },
];

export const HARYANVI_KADHI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Kadhi Pakora in Haryana Pastoral Dairy Heartland",
    shortDescription: "Pastoral dairy heritage: With Haryana's legendary dairy culture celebrated for the prized Murrah buffalo and dairy cows, sour buttermilk (chaas) has always been churned in abundance every morning in every village courtyard. The culinary logic of 'kadhna': The word 'Kadhi' originates from the Hindi verb 'kadhna', meaning to simmer patiently over low heat for hours. Slow simmering curd with gram flour prevented curdling while imparting a rich velvet consistency. Historical documentation: Rooted in centuries-old rural culinary practices documented across Haryana, Punjab, and western Uttar Pradesh, where kadhi served as the hearty companion to wheat and pearl millet rotis. Cooking method: Slowly simmered in large brass or iron cauldrons over low-burning hearth embers, studded with crispy deep-fried onion and spinach pakoras, and finished with a sizzling ghee-spiced tempering.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Pastoral dairy heritage: With Haryana's legendary dairy culture celebrated for the prized Murrah buffalo and dairy cows, sour buttermilk (chaas) has always been churned in abundance every morning in every village courtyard.","The culinary logic of 'kadhna': The word 'Kadhi' originates from the Hindi verb 'kadhna', meaning to simmer patiently over low heat for hours. Slow simmering curd with gram flour prevented curdling while imparting a rich velvet consistency.","Historical documentation: Rooted in centuries-old rural culinary practices documented across Haryana, Punjab, and western Uttar Pradesh, where kadhi served as the hearty companion to wheat and pearl millet rotis.","Cooking method: Slowly simmered in large brass or iron cauldrons over low-burning hearth embers, studded with crispy deep-fried onion and spinach pakoras, and finished with a sizzling ghee-spiced tempering."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay or seasoned iron cookware",
      documentedCitation: "Haryana State Cultural & Tourism Archives: Dairy Traditions & Kadhi Pakora (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Dairy base: natural whole-milk sour buttermilk churned daily with wooden madhani / commercially cultured whole-milk yoghurt or store-bought buttermilk. Gram flour: coarse chana dal milled fresh in village chakkis / fine packaged besan sifted for ultra-smooth gravies. Pakora composition: rustic wild greens, sliced country onions, and carom seeds / fluffy spiced onion, spinach, or potato pakoras. Cooking vessel: tin-lined heavy brass deghchis or thick iron kadhais / stainless steel saucepans and tri-ply cookware. Simmering time: patient bubbling for 2 to 3 hours over glowing dung-cake fires / measured 35 to 45 minutes of stovetop simmering. Tempering fat: rich unpasteurised desi cow ghee / mustard oil, refined oils, or clarified butter. Spice infusion: whole fenugreek seeds, dry red chillies, and crushed asafoetida / added garnishes of kasuri methi, degi mirch, and fresh ginger juliennes. Dining style: served in deep brass katoris with rustic bajra or jowar rotis / popular centrepiece served alongside fragrant basmati jeera rice at weddings and dhabas.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Dairy base: natural whole-milk sour buttermilk churned daily with wooden madhani / commercially cultured whole-milk yoghurt or store-bought buttermilk.","Gram flour: coarse chana dal milled fresh in village chakkis / fine packaged besan sifted for ultra-smooth gravies.","Pakora composition: rustic wild greens, sliced country onions, and carom seeds / fluffy spiced onion, spinach, or potato pakoras.","Cooking vessel: tin-lined heavy brass deghchis or thick iron kadhais / stainless steel saucepans and tri-ply cookware.","Simmering time: patient bubbling for 2 to 3 hours over glowing dung-cake fires / measured 35 to 45 minutes of stovetop simmering.","Tempering fat: rich unpasteurised desi cow ghee / mustard oil, refined oils, or clarified butter.","Spice infusion: whole fenugreek seeds, dry red chillies, and crushed asafoetida / added garnishes of kasuri methi, degi mirch, and fresh ginger juliennes.","Dining style: served in deep brass katoris with rustic bajra or jowar rotis / popular centrepiece served alongside fragrant basmati jeera rice at weddings and dhabas."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "K.T. Achaya: A Historical Dictionary of Indian Food (Oxford University Press, 1998)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Kadhi Pakora Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. In a deep earthen or stainless pot, vigorously whisk 2 cups of thick sour curd (or churned buttermilk) with 1/2 cup of gram flour (besan), turmeric powder, and 4 cups of water until completely smooth, silky, and free of lumps. 2. In a mixing bowl, prepare the pakora batter by combining 1 cup of besan, sliced onions, shredded spinach, green chillies, carom seeds (ajwain), a pinch of hing, salt, and water into a thick, fluffy drop-consistency batter, whisking briskly for 3 minutes to aerate. 3. Heat mustard oil or ghee in a kadhai, drop small lemon-sized spoonfuls of pakora batter into medium-hot fat, and deep-fry patiently for 5 to 6 minutes until crispy, golden-brown, and cooked through; drain on paper towels. 4. Place the pot of curd-besan mixture on medium-high heat, stirring continuously in one direction until it comes to a vigorous first boil to prevent the curd from splitting. 5. Lower the flame to low and let the kadhi simmer gently (kadhna) uncovered for 35 to 45 minutes, stirring periodically as it thickens and develops a rich, tangy depth of flavour. 6. Gently drop the warm crispy pakoras into the simmering kadhi, season with rock salt, and simmer for another 8 to 10 minutes so the pakoras absorb the tangy gravy while retaining their soft, spongy texture. 7. In a small tadka pan, heat 2 tablespoons of desi cow ghee; add fenugreek seeds (methi dana), cumin seeds, mustard seeds, broken whole dried red chillies, and asafoetida, letting them crackle until deeply fragrant. 8. Pour the sizzling red ghee tadka immediately over the simmering kadhi, cover with a tight lid for 2 minutes to trap the aromatic vapours, garnish with fresh coriander, and serve hot with bajra roti, steamed basmati rice, or churma.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Sour whole-milk curd (dahi / chaas)","Bengal gram flour (besan)","Pure desi cow ghee","Fenugreek seeds (methi dana)","Cumin and mustard seeds","Asafoetida (hing)","Finely sliced onions and spinach (for pakoras)","Dried whole red chillies","Turmeric and red chilli powder","Rock salt (sendha namak) and fresh coriander"],
      preparationMethod: ["1. In a deep earthen or stainless pot, vigorously whisk 2 cups of thick sour curd (or churned buttermilk) with 1/2 cup of gram flour (besan), turmeric powder, and 4 cups of water until completely smooth, silky, and free of lumps.","2. In a mixing bowl, prepare the pakora batter by combining 1 cup of besan, sliced onions, shredded spinach, green chillies, carom seeds (ajwain), a pinch of hing, salt, and water into a thick, fluffy drop-consistency batter, whisking briskly for 3 minutes to aerate.","3. Heat mustard oil or ghee in a kadhai, drop small lemon-sized spoonfuls of pakora batter into medium-hot fat, and deep-fry patiently for 5 to 6 minutes until crispy, golden-brown, and cooked through; drain on paper towels.","4. Place the pot of curd-besan mixture on medium-high heat, stirring continuously in one direction until it comes to a vigorous first boil to prevent the curd from splitting.","5. Lower the flame to low and let the kadhi simmer gently (kadhna) uncovered for 35 to 45 minutes, stirring periodically as it thickens and develops a rich, tangy depth of flavour.","6. Gently drop the warm crispy pakoras into the simmering kadhi, season with rock salt, and simmer for another 8 to 10 minutes so the pakoras absorb the tangy gravy while retaining their soft, spongy texture.","7. In a small tadka pan, heat 2 tablespoons of desi cow ghee; add fenugreek seeds (methi dana), cumin seeds, mustard seeds, broken whole dried red chillies, and asafoetida, letting them crackle until deeply fragrant.","8. Pour the sizzling red ghee tadka immediately over the simmering kadhi, cover with a tight lid for 2 minutes to trap the aromatic vapours, garnish with fresh coriander, and serve hot with bajra roti, steamed basmati rice, or churma."],
      heatSource: "Medium regulated heat on domestic gas stove",
      vessel: "Heavy-bottomed pan, tawa, or steamer as required",
      documentedCitation: "Swasthi's Recipes & Tarla Dalal: Authentic Kadhi Pakora with Ghee Tadka (2021)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Kadhi Pakora today",
    shortDescription: "Present-day form & serving: Ladled generously into clay bowls, garnished with chopped fresh coriander leaves and a final swirl of aromatic ghee-tadka, paired with hot steamed basmati rice or thick bajra rotis. Flavour identity: Boldly tangy, comforting, silky-smooth gravy contrasted against crisp-crusted, tender-centred spongy pakoras with aromatic notes of methi and hing. Variations: Haryanvi onion-spinach pakora kadhi, boondi kadhi, seasonal methi pakora kadhi, and rustic no-onion fasting kadhis. Recognition: Revered as an iconic north Indian comfort food, celebrated in iconic highway dhabas across the Grand Trunk Road and featured prominently in Haryana Tourism promotions.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Sour whole-milk curd (dahi / chaas)","Bengal gram flour (besan)","Pure desi cow ghee","Fenugreek seeds (methi dana)","Cumin and mustard seeds","Asafoetida (hing)","Finely sliced onions and spinach (for pakoras)","Dried whole red chillies","Turmeric and red chilli powder","Rock salt (sendha namak) and fresh coriander"],
      preparationMethod: ["Present-day form & serving: Ladled generously into clay bowls, garnished with chopped fresh coriander leaves and a final swirl of aromatic ghee-tadka, paired with hot steamed basmati rice or thick bajra rotis.","Flavour identity: Boldly tangy, comforting, silky-smooth gravy contrasted against crisp-crusted, tender-centred spongy pakoras with aromatic notes of methi and hing.","Variations: Haryanvi onion-spinach pakora kadhi, boondi kadhi, seasonal methi pakora kadhi, and rustic no-onion fasting kadhis.","Recognition: Revered as an iconic north Indian comfort food, celebrated in iconic highway dhabas across the Grand Trunk Road and featured prominently in Haryana Tourism promotions."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Haryana State Cultural & Tourism Archives: Dairy Traditions & Kadhi Pakora (2018)",
    },
  },
];

export const HARYANVI_CHURMA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Haryanvi Churma in Haryana Agrarian & Pehelwan Traditions",
    shortDescription: "Agrarian & wrestling heartland: Renowned throughout the rural belts of Rohtak, Jhajjar, Sonipat, and Jind, Churma is the supreme emblem of Haryana's legendary 'Doodh-Dahi ka Khana' diet that has powered generations of farmers and wrestlers (pehelwans). Celebratory & harvest role: Prepared during auspicious occasions, family reunions, childbirth ceremonies, and harvest festivals, churma represents heartfelt maternal hospitality and rustic agricultural bounty. Historical documentation: Documented in regional folk songs (Raginis) and oral literature of Haryana as the essential wholesome confection carried by travellers, warriors, and youth training in traditional akharas. Cooking method: Thick, whole-wheat flatbreads (moti rotis) are baked over iron griddles and finished directly on cow-dung hearth embers, torn apart while steaming hot, crushed by hand, and kneaded with unrefined jaggery and pure cow ghee.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Agrarian & wrestling heartland: Renowned throughout the rural belts of Rohtak, Jhajjar, Sonipat, and Jind, Churma is the supreme emblem of Haryana's legendary 'Doodh-Dahi ka Khana' diet that has powered generations of farmers and wrestlers (pehelwans).","Celebratory & harvest role: Prepared during auspicious occasions, family reunions, childbirth ceremonies, and harvest festivals, churma represents heartfelt maternal hospitality and rustic agricultural bounty.","Historical documentation: Documented in regional folk songs (Raginis) and oral literature of Haryana as the essential wholesome confection carried by travellers, warriors, and youth training in traditional akharas.","Cooking method: Thick, whole-wheat flatbreads (moti rotis) are baked over iron griddles and finished directly on cow-dung hearth embers, torn apart while steaming hot, crushed by hand, and kneaded with unrefined jaggery and pure cow ghee."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay or seasoned iron cookware",
      documentedCitation: "Haryana Tourism Corporation: Culinary Pride of Haryana — Authentic Churma (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Wheat processing: coarse indigenous Sharbati wheat stone-ground in household chakkis / fine packaged stone-ground whole wheat atta. Roti baking: baked over glowing dry cow-dung cake (uple) coals imparting smoky aromas / roasted on heavy cast-iron tawas and finished over gas burner flames. Crushing technique: vigorous hand-crushing and rubbing between calloused palms while scorching hot / electric mixer grinder pulsing or food processors. Sweetener: unrefined dark sugarcane jaggery (gur) or indigenous khandsari (desi khand) / refined white sugar, bura, or organic powdered jaggery. Fats & binders: generous pools of freshly churned homemade A2 desi cow ghee / commercially packaged pure ghee or clarified butter. Nut & spice enrichments: plain rustic bread-and-jaggery crumble / additions of toasted almonds, cashews, melon seeds (magaz), and green cardamom. Serving format: served loose and steaming warm in wide bronze thalis or shaped into massive fists (laddus) / packaged in decorative gift boxes in sweet shops. Cultural symbolism: powerhouse diet for akhara wrestlers and agrarian field hands / celebrated cultural dessert showcased at weddings, festivals, and folk fairs.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Wheat processing: coarse indigenous Sharbati wheat stone-ground in household chakkis / fine packaged stone-ground whole wheat atta.","Roti baking: baked over glowing dry cow-dung cake (uple) coals imparting smoky aromas / roasted on heavy cast-iron tawas and finished over gas burner flames.","Crushing technique: vigorous hand-crushing and rubbing between calloused palms while scorching hot / electric mixer grinder pulsing or food processors.","Sweetener: unrefined dark sugarcane jaggery (gur) or indigenous khandsari (desi khand) / refined white sugar, bura, or organic powdered jaggery.","Fats & binders: generous pools of freshly churned homemade A2 desi cow ghee / commercially packaged pure ghee or clarified butter.","Nut & spice enrichments: plain rustic bread-and-jaggery crumble / additions of toasted almonds, cashews, melon seeds (magaz), and green cardamom.","Serving format: served loose and steaming warm in wide bronze thalis or shaped into massive fists (laddus) / packaged in decorative gift boxes in sweet shops.","Cultural symbolism: powerhouse diet for akhara wrestlers and agrarian field hands / celebrated cultural dessert showcased at weddings, festivals, and folk fairs."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Chef Ranveer Brar & Archana's Kitchen: Traditional Haryanvi Meetha Churma (2020)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Haryanvi Churma Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. In a wide kneading platter (parat), combine 2 cups of coarse whole wheat flour with a pinch of rock salt and 2 tablespoons of melted warm desi cow ghee. 2. Rub the ghee into the flour with fingertips for 2 minutes, then gradually knead with warm water or milk into a stiff, firm dough; cover with a damp cloth and rest for 15 minutes. 3. Divide the rested dough into 3 to 4 large portions and roll each into a thick 1/2-inch flatbread (moti roti), piercing the surface with fingertips or a fork to ensure even heat penetration. 4. Roast the thick roti on a heavy iron tawa over low-medium heat, pressing gently with a clean cotton cloth until brown spots appear; finish directly over open flame or hearth embers until crisp, blistered, and thoroughly cooked inside. 5. While the thick rotis are steaming hot, immediately tear them into small chunks into a wide parat, and crush vigorously by hand (or pulse in brief intervals in a stone mortar or mixer) into fine, even crumbs. 6. Grate or crush soft sugarcane jaggery (or measure unrefined desi shakkar/khand) and mix thoroughly into the warm crushed wheat crumbs so it begins to melt from the residual heat. 7. Warm 1/2 cup to 3/4 cup of pure desi cow ghee in a pan; lightly toast melon seeds (magaz), chopped almonds, and cashews, then pour the hot ghee and nuts along with green cardamom powder directly over the mixture. 8. Knead the mixture vigorously with both palms for 3 to 5 minutes until the ghee binds the sweetened crumbs into a luscious, aromatic crumble; shape into round laddoos or serve loose in clay bowls alongside cold fresh milk or spicy kadhi.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Coarse whole wheat flour (atta)","Pure desi cow ghee","Unrefined sugarcane jaggery (gur) / Shakkar or Khand","Green cardamom powder (elaichi)","Finely chopped almonds and cashews","Dry melon seeds (magaz)","Warm full-fat milk","Warm filtered water (for dough)","Pinch of rock salt","Edible dry ginger powder (sonth)"],
      preparationMethod: ["1. In a wide kneading platter (parat), combine 2 cups of coarse whole wheat flour with a pinch of rock salt and 2 tablespoons of melted warm desi cow ghee.","2. Rub the ghee into the flour with fingertips for 2 minutes, then gradually knead with warm water or milk into a stiff, firm dough; cover with a damp cloth and rest for 15 minutes.","3. Divide the rested dough into 3 to 4 large portions and roll each into a thick 1/2-inch flatbread (moti roti), piercing the surface with fingertips or a fork to ensure even heat penetration.","4. Roast the thick roti on a heavy iron tawa over low-medium heat, pressing gently with a clean cotton cloth until brown spots appear; finish directly over open flame or hearth embers until crisp, blistered, and thoroughly cooked inside.","5. While the thick rotis are steaming hot, immediately tear them into small chunks into a wide parat, and crush vigorously by hand (or pulse in brief intervals in a stone mortar or mixer) into fine, even crumbs.","6. Grate or crush soft sugarcane jaggery (or measure unrefined desi shakkar/khand) and mix thoroughly into the warm crushed wheat crumbs so it begins to melt from the residual heat.","7. Warm 1/2 cup to 3/4 cup of pure desi cow ghee in a pan; lightly toast melon seeds (magaz), chopped almonds, and cashews, then pour the hot ghee and nuts along with green cardamom powder directly over the mixture.","8. Knead the mixture vigorously with both palms for 3 to 5 minutes until the ghee binds the sweetened crumbs into a luscious, aromatic crumble; shape into round laddoos or serve loose in clay bowls alongside cold fresh milk or spicy kadhi."],
      heatSource: "Medium regulated heat on domestic gas stove",
      vessel: "Heavy-bottomed pan, tawa, or steamer as required",
      documentedCitation: "Regional Folk Literature & Ragini Archives of Haryana: Pehelwan Diet & Agrarian Foodways (1975)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Haryanvi Churma today",
    shortDescription: "Present-day form & serving: Served warm in brass or clay platters, either loose or pressed into hearty spheres (churma laddus), classically paired with a tall glass of fresh buttermilk, creamy milk, or savoury kadhi. Flavour identity: Rich, nutty, toasty, deeply comforting with the caramel warmth of jaggery, fragrant cardamom, and the opulent aroma of pure desi cow ghee. Variations: Classic Gur ka Churma, Shakkar-Ghee Churma, Bura Churma, and festive Bajra Churma (made from winter pearl millet rotis). Recognition: Revered as the definitive culinary pride of Haryana, celebrated at the Surajkund Crafts Mela, and cherished by Olympians and traditional athletes as an unmatched source of pure energy.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Coarse whole wheat flour (atta)","Pure desi cow ghee","Unrefined sugarcane jaggery (gur) / Shakkar or Khand","Green cardamom powder (elaichi)","Finely chopped almonds and cashews","Dry melon seeds (magaz)","Warm full-fat milk","Warm filtered water (for dough)","Pinch of rock salt","Edible dry ginger powder (sonth)"],
      preparationMethod: ["Present-day form & serving: Served warm in brass or clay platters, either loose or pressed into hearty spheres (churma laddus), classically paired with a tall glass of fresh buttermilk, creamy milk, or savoury kadhi.","Flavour identity: Rich, nutty, toasty, deeply comforting with the caramel warmth of jaggery, fragrant cardamom, and the opulent aroma of pure desi cow ghee.","Variations: Classic Gur ka Churma, Shakkar-Ghee Churma, Bura Churma, and festive Bajra Churma (made from winter pearl millet rotis).","Recognition: Revered as the definitive culinary pride of Haryana, celebrated at the Surajkund Crafts Mela, and cherished by Olympians and traditional athletes as an unmatched source of pure energy."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Haryana Tourism Corporation: Culinary Pride of Haryana — Authentic Churma (2019)",
    },
  },
];

export const HIMACHALI_DHAM_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Himachali Dham in Himachal Royal Courts & Temples",
    shortDescription: "Origin in royal Chamba & Kangra: Traditionally said to have originated around the 10th century CE under King Jaistambh of Chamba, who was inspired by Kashmiri royal feasts to create a multi-course vegetarian temple banquet dedicated to Lord Shiva. The hereditary Boti guild: Cooked exclusively by hereditary Brahmin culinary masters known as 'Botis', who observe sacred purity, passing down precise spice measurements and cooking sequences across generations. Community pangat tradition: Served during weddings, auspicious religious festivals, and community celebrations to guests seated in egalitarian rows (pangat) directly on fresh leaf plates (pattals). Cooking method: Prepared strictly without onion, garlic, or tomatoes, slow-simmered in colossal narrow-mouthed heavy brass or bronze cauldrons (charotis) nested in deep wood-fire earthen trench ovens (chulhas).",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in royal Chamba & Kangra: Traditionally said to have originated around the 10th century CE under King Jaistambh of Chamba, who was inspired by Kashmiri royal feasts to create a multi-course vegetarian temple banquet dedicated to Lord Shiva.","The hereditary Boti guild: Cooked exclusively by hereditary Brahmin culinary masters known as 'Botis', who observe sacred purity, passing down precise spice measurements and cooking sequences across generations.","Community pangat tradition: Served during weddings, auspicious religious festivals, and community celebrations to guests seated in egalitarian rows (pangat) directly on fresh leaf plates (pattals).","Cooking method: Prepared strictly without onion, garlic, or tomatoes, slow-simmered in colossal narrow-mouthed heavy brass or bronze cauldrons (charotis) nested in deep wood-fire earthen trench ovens (chulhas)."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Himachal Pradesh State Tourism & Boti Culinary Traditions (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Cooking vessels: massive hand-beaten bronze and brass charotis / modern commercial stainless steel degs and gas ranges. Cooking hearth: long wood-fired earthen trench pits (bhatti) fuelled by slow-burning hardwood / commercial LPG burners in modern banquet halls. Ingredient sourcing: indigenous Chamba rajma, Kangra red rice, and mountain herbs / commercially packaged pulses, basmati rice, and dry ginger powder. Dairy stabilization: whole-milk village curd hand-whisked for hours to prevent curdling in madra / commercial full-cream yoghurt whisked with gram flour. Dining setting: village courtyard seated on jute mats in pangat rows / standing buffet arrangements and catered indoor dining spaces. Serving ware: biodegradable stitched Sal and Tor leaves (pattal and dona) / disposable paper plates or melamine catering thalis. Course progression: strict ritual serving order starting with rice and madra, followed by dals and khatta, ending with mitha bhaat / often served simultaneously at urban buffets. Cultural preservation: treasured living heritage safeguarded by Himachali communities and officially showcased by Himachal Tourism.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Cooking vessels: massive hand-beaten bronze and brass charotis / modern commercial stainless steel degs and gas ranges.","Cooking hearth: long wood-fired earthen trench pits (bhatti) fuelled by slow-burning hardwood / commercial LPG burners in modern banquet halls.","Ingredient sourcing: indigenous Chamba rajma, Kangra red rice, and mountain herbs / commercially packaged pulses, basmati rice, and dry ginger powder.","Dairy stabilization: whole-milk village curd hand-whisked for hours to prevent curdling in madra / commercial full-cream yoghurt whisked with gram flour.","Dining setting: village courtyard seated on jute mats in pangat rows / standing buffet arrangements and catered indoor dining spaces.","Serving ware: biodegradable stitched Sal and Tor leaves (pattal and dona) / disposable paper plates or melamine catering thalis.","Course progression: strict ritual serving order starting with rice and madra, followed by dals and khatta, ending with mitha bhaat / often served simultaneously at urban buffets.","Cultural preservation: treasured living heritage safeguarded by Himachali communities and officially showcased by Himachal Tourism."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Himachal Pradesh State Tourism & Boti Culinary Traditions (2018)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Himachali Dham Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Soak chickpeas (or Chamba rajma) and split black gram (maah ki dal) overnight in separate bowls of water; rinse thoroughly. 2. Boil chickpeas in lightly salted water with black cardamom and cinnamon until completely tender and creamy; drain and reserve stock. 3. In a heavy-bottomed brass pot or deep pan, heat pure desi cow ghee over medium heat and crackle cloves, cinnamon, green cardamom, and bay leaves until aromatic. 4. Lower flame and gradually whisk in 2 cups of thick beaten curd, stirring continuously in one direction for 15 minutes to prevent splitting until ghee separates and the gravy turns golden. 5. Fold the boiled chickpeas, dry ginger powder (saunth), fennel powder, turmeric, and rock salt into the curd gravy, simmering on gentle heat for 20 minutes to make the signature Chana Madra. 6. In a second pot, simmer split black gram (maah ki dal) with mustard oil, hing, and whole spices until dark and velvety. 7. Prepare the tangy Khatta by simmering soaked tamarind pulp or amchur water with fried chickpea flour dumplings (boondi), jaggery, and crackled mustard seeds. 8. Cook fragrant long-grain basmati rice and sweet Mitha Bhaat (rice simmered with sugar, saffron, raisins, and ghee); serve the feast sequentially onto leaf pattals in traditional pangat order.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Basmati rice","Kabuli chickpeas (chana) / Rajma","Split black gram (maah ki dal)","Thick whole-milk curd (dahi)","Pure desi cow ghee","Dried tamarind pulp or amchur (for khatta)","Sugarcane jaggery or sugar (for mitha bhaat)","Whole spices (cloves, cardamom, cinnamon)","Dry ginger powder (saunth) and fennel seeds","Mustard oil and rock salt"],
      preparationMethod: ["1. Soak chickpeas (or Chamba rajma) and split black gram (maah ki dal) overnight in separate bowls of water; rinse thoroughly.","2. Boil chickpeas in lightly salted water with black cardamom and cinnamon until completely tender and creamy; drain and reserve stock.","3. In a heavy-bottomed brass pot or deep pan, heat pure desi cow ghee over medium heat and crackle cloves, cinnamon, green cardamom, and bay leaves until aromatic.","4. Lower flame and gradually whisk in 2 cups of thick beaten curd, stirring continuously in one direction for 15 minutes to prevent splitting until ghee separates and the gravy turns golden.","5. Fold the boiled chickpeas, dry ginger powder (saunth), fennel powder, turmeric, and rock salt into the curd gravy, simmering on gentle heat for 20 minutes to make the signature Chana Madra.","6. In a second pot, simmer split black gram (maah ki dal) with mustard oil, hing, and whole spices until dark and velvety.","7. Prepare the tangy Khatta by simmering soaked tamarind pulp or amchur water with fried chickpea flour dumplings (boondi), jaggery, and crackled mustard seeds.","8. Cook fragrant long-grain basmati rice and sweet Mitha Bhaat (rice simmered with sugar, saffron, raisins, and ghee); serve the feast sequentially onto leaf pattals in traditional pangat order."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Himachal Pradesh State Tourism & Boti Culinary Traditions (2018)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Himachali Dham today",
    shortDescription: "Present-day form & serving: Served ceremonially on broad leaf pattals in rows, beginning with fragrant rice and rich Madra, followed by Maah ki Dal, Kadhi, palate-cleansing Khatta, and luscious Mitha Bhaat. Flavour identity: A symphonic balance of rich buttery dairy, warm aromatic spices, deep earthen pulses, sharp fruit sourness, and delicate floral sweetness. Variations: Kangri Dham (featuring Madra, Telia Mah, and sweet rice), Chamba Dham (famed for Rajma Madra), Mandi Dham (famed for Sepu Badi), and Bilaspur Dham. Recognition: Celebrated as the ultimate culinary heritage of Himachal Pradesh, officially promoted by Himachal Tourism and treasured in community culture.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Basmati rice","Kabuli chickpeas (chana) / Rajma","Split black gram (maah ki dal)","Thick whole-milk curd (dahi)","Pure desi cow ghee","Dried tamarind pulp or amchur (for khatta)","Sugarcane jaggery or sugar (for mitha bhaat)","Whole spices (cloves, cardamom, cinnamon)","Dry ginger powder (saunth) and fennel seeds","Mustard oil and rock salt"],
      preparationMethod: ["Present-day form & serving: Served ceremonially on broad leaf pattals in rows, beginning with fragrant rice and rich Madra, followed by Maah ki Dal, Kadhi, palate-cleansing Khatta, and luscious Mitha Bhaat.","Flavour identity: A symphonic balance of rich buttery dairy, warm aromatic spices, deep earthen pulses, sharp fruit sourness, and delicate floral sweetness.","Variations: Kangri Dham (featuring Madra, Telia Mah, and sweet rice), Chamba Dham (famed for Rajma Madra), Mandi Dham (famed for Sepu Badi), and Bilaspur Dham.","Recognition: Celebrated as the ultimate culinary heritage of Himachal Pradesh, officially promoted by Himachal Tourism and treasured in community culture."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Himachal Pradesh State Tourism & Boti Culinary Traditions (2018)",
    },
  },
];

export const CHANA_MADRA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chana Madra in Chamba & Kangra Valley Kitchens",
    shortDescription: "Origin in the Himachal hills: Chana Madra is the undisputed jewel of Himachali festive cooking, originating in the royal state of Chamba and perfected across the Kangra valley as the centerpiece of ceremonial Dham feasts. Sattvic culinary ethos: Prepared without onion or garlic, Madra relies entirely on the complex transformation of thick whole-milk curd (dahi), pure desi cow ghee, and warming dry spices to achieve its luxurious gravy. The art of curd stabilization: Hereditary cooks (Botis) developed the patient technique of slow-whisking curd over medium heat until the whey evaporates, the curds emulsify into ghee, and a fragrant golden sauce emerges. Cooking method: Tender boiled white chickpeas (kabuli chana) or red kidney beans (rajma) are braised slowly in the stabilized spiced yoghurt gravy inside heavy tin-lined brass vessels over wood-fire embers.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Himachal hills: Chana Madra is the undisputed jewel of Himachali festive cooking, originating in the royal state of Chamba and perfected across the Kangra valley as the centerpiece of ceremonial Dham feasts.","Sattvic culinary ethos: Prepared without onion or garlic, Madra relies entirely on the complex transformation of thick whole-milk curd (dahi), pure desi cow ghee, and warming dry spices to achieve its luxurious gravy.","The art of curd stabilization: Hereditary cooks (Botis) developed the patient technique of slow-whisking curd over medium heat until the whey evaporates, the curds emulsify into ghee, and a fragrant golden sauce emerges.","Cooking method: Tender boiled white chickpeas (kabuli chana) or red kidney beans (rajma) are braised slowly in the stabilized spiced yoghurt gravy inside heavy tin-lined brass vessels over wood-fire embers."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Chamba Royal Heritage & Kangra Culinary Archives (2020)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Curd base: thick curd churned from pahadi cow's milk in wooden vessels / whole-milk commercial yoghurt whisked smooth. Cooking fat: freshly churned pure desi cow ghee / clarified butter or blended vegetable fats. Chickpeas: small native mountain chickpeas (kala chana) or Chamba rajma / plump Kabuli chickpeas. Vessel: heavy hand-beaten brass or bronze deghchis / heavy-gauge tri-ply stainless steel pots. Simmering technique: continuous hand-stirring over slow wood fires for 40 minutes / regulated stovetop flame. Spice profile: hand-ground dry ginger (saunth), whole green cardamom, cloves, and wild fennel / pre-ground packaged spice powders. Dining context: sacred temple feasts and wedding pangats on leaf plates / daily household delicacy and specialty restaurant thalis. Modern presence: revered regional icon preserved with pride across north Indian heritage restaurants.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Curd base: thick curd churned from pahadi cow's milk in wooden vessels / whole-milk commercial yoghurt whisked smooth.","Cooking fat: freshly churned pure desi cow ghee / clarified butter or blended vegetable fats.","Chickpeas: small native mountain chickpeas (kala chana) or Chamba rajma / plump Kabuli chickpeas.","Vessel: heavy hand-beaten brass or bronze deghchis / heavy-gauge tri-ply stainless steel pots.","Simmering technique: continuous hand-stirring over slow wood fires for 40 minutes / regulated stovetop flame.","Spice profile: hand-ground dry ginger (saunth), whole green cardamom, cloves, and wild fennel / pre-ground packaged spice powders.","Dining context: sacred temple feasts and wedding pangats on leaf plates / daily household delicacy and specialty restaurant thalis.","Modern presence: revered regional icon preserved with pride across north Indian heritage restaurants."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Chamba Royal Heritage & Kangra Culinary Archives (2020)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Chana Madra Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Rinse and soak 1 cup of Kabuli chickpeas in plenty of water overnight for 8 to 10 hours; drain thoroughly. 2. Pressure-cook the soaked chickpeas in 3 cups of water with black cardamom, a cinnamon stick, and 1/2 teaspoon of salt for 4 to 5 whistles until completely soft but retaining their shape; drain and reserve stock. 3. In a bowl, vigorously whisk 2 cups of thick fresh curd until completely silky, smooth, and free of lumps. 4. Heat 3 tablespoons of pure desi cow ghee in a heavy-bottomed brass pot or kadhai over medium flame. 5. Add green cardamom pods, cloves, cinnamon, bay leaf, and a generous pinch of asafoetida (hing), sauteing for 30 seconds until crackling and fragrant. 6. Lower the heat to low, add turmeric powder and dry ginger powder (saunth), then immediately pour in the whisked curd while stirring briskly and continuously in one direction. 7. Cook the curd mixture patiently on medium-low heat for 12 to 15 minutes, stirring without interruption, until the moisture evaporates, the curd turns rich and glossy, and golden ghee separates at the edges. 8. Add the boiled chickpeas, fennel powder, and rock salt; simmer gently on low flame for 10 to 12 minutes until the chickpeas absorb the rich spiced yoghurt gravy, serving hot with steamed basmati rice.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Kabuli chickpeas (white chana)","Thick whole-milk curd (dahi)","Pure desi cow ghee","Green cardamom and black cardamom","Cinnamon stick (dalchini)","Cloves and bay leaves","Dry ginger powder (saunth)","Fennel seed powder (saunf)","Turmeric powder and asafoetida (hing)","Rock salt (sendha namak)"],
      preparationMethod: ["1. Rinse and soak 1 cup of Kabuli chickpeas in plenty of water overnight for 8 to 10 hours; drain thoroughly.","2. Pressure-cook the soaked chickpeas in 3 cups of water with black cardamom, a cinnamon stick, and 1/2 teaspoon of salt for 4 to 5 whistles until completely soft but retaining their shape; drain and reserve stock.","3. In a bowl, vigorously whisk 2 cups of thick fresh curd until completely silky, smooth, and free of lumps.","4. Heat 3 tablespoons of pure desi cow ghee in a heavy-bottomed brass pot or kadhai over medium flame.","5. Add green cardamom pods, cloves, cinnamon, bay leaf, and a generous pinch of asafoetida (hing), sauteing for 30 seconds until crackling and fragrant.","6. Lower the heat to low, add turmeric powder and dry ginger powder (saunth), then immediately pour in the whisked curd while stirring briskly and continuously in one direction.","7. Cook the curd mixture patiently on medium-low heat for 12 to 15 minutes, stirring without interruption, until the moisture evaporates, the curd turns rich and glossy, and golden ghee separates at the edges.","8. Add the boiled chickpeas, fennel powder, and rock salt; simmer gently on low flame for 10 to 12 minutes until the chickpeas absorb the rich spiced yoghurt gravy, serving hot with steamed basmati rice."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Chamba Royal Heritage & Kangra Culinary Archives (2020)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Chana Madra today",
    shortDescription: "Present-day form & serving: Served piping hot in clay or brass bowls with a glossy sheen of ghee on top, paired traditionally with steamed basmati rice or hot phulkas. Flavour identity: Rich, creamy, mildly tangy with a deep dairy fragrance, warm notes of dry ginger and cardamom, and nutty soft chickpeas. Variations: Chamba Rajma Madra, Rongi Madra (black-eyed peas), Dry Fruit Madra, and Mushroom Madra. Recognition: Widely acclaimed as the quintessential vegetarian dish of Himachal Pradesh, featured in national heritage menus and state tourism promotions.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Kabuli chickpeas (white chana)","Thick whole-milk curd (dahi)","Pure desi cow ghee","Green cardamom and black cardamom","Cinnamon stick (dalchini)","Cloves and bay leaves","Dry ginger powder (saunth)","Fennel seed powder (saunf)","Turmeric powder and asafoetida (hing)","Rock salt (sendha namak)"],
      preparationMethod: ["Present-day form & serving: Served piping hot in clay or brass bowls with a glossy sheen of ghee on top, paired traditionally with steamed basmati rice or hot phulkas.","Flavour identity: Rich, creamy, mildly tangy with a deep dairy fragrance, warm notes of dry ginger and cardamom, and nutty soft chickpeas.","Variations: Chamba Rajma Madra, Rongi Madra (black-eyed peas), Dry Fruit Madra, and Mushroom Madra.","Recognition: Widely acclaimed as the quintessential vegetarian dish of Himachal Pradesh, featured in national heritage menus and state tourism promotions."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Chamba Royal Heritage & Kangra Culinary Archives (2020)",
    },
  },
];

export const MIZO_BAI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Mizo Bai in the Lushai Hills & Forest Foraging Traditions",
    shortDescription: "Origin in the Lushai Hills: Bai is the indispensable soul of traditional Mizo daily nutrition, created by indigenous highlanders from fresh seasonal wild greens, bamboo shoots, and garden vegetables. Zero-oil alkaline philosophy: Unique among global culinary traditions, authentic Bai uses zero cooking oil, relying instead on pure spring water infused with a touch of natural alkaline filtrate (chingal) to soften fibrous greens and retain vibrant colour. Historical documentation: Rooted in centuries-old Mizo hearth cookery, where every household boiled a fresh pot of Bai twice daily over the kitchen fire to accompany steaming mountain rice. Cooking method: Fresh mustard greens, tender local beans, and fermented bamboo shoots are boiled together in spring water with pork rind or smoked meat, ginger, and green chillies.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Lushai Hills: Bai is the indispensable soul of traditional Mizo daily nutrition, created by indigenous highlanders from fresh seasonal wild greens, bamboo shoots, and garden vegetables.","Zero-oil alkaline philosophy: Unique among global culinary traditions, authentic Bai uses zero cooking oil, relying instead on pure spring water infused with a touch of natural alkaline filtrate (chingal) to soften fibrous greens and retain vibrant colour.","Historical documentation: Rooted in centuries-old Mizo hearth cookery, where every household boiled a fresh pot of Bai twice daily over the kitchen fire to accompany steaming mountain rice.","Cooking method: Fresh mustard greens, tender local beans, and fermented bamboo shoots are boiled together in spring water with pork rind or smoked meat, ginger, and green chillies."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Mizoram State Tourism & Highland Botanical Foodways (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Alkaline medium: indigenous filtered wood-ash water (chingal) / food-grade sodium bicarbonate (cooking soda). Greens sourcing: freshly foraged mountain forest leaves and wild mustard greens / garden-grown mustard leaves (lai pat) and French beans. Pork component: wood-smoke cured pork rind and fat strips / fresh pork chunks or vegetable-only preparations. Cooking vessel: unglazed clay pots and hand-beaten cast iron cauldrons / stainless steel saucepans and domestic gas burners. Salt source: rare mineral salt blocks obtained through ancient trade / iodized rock salt. Flavoring: local ginger root, birds-eye chillies, and fermented pork / fresh chillies, ginger, and aromatic local herbs. Dining format: ladled generously over steaming hill rice in family courtyards / served as a comforting clear soup course in urban Mizo dining. Cultural preservation: universally cherished as the quintessential comfort food defining Mizo identity across generations.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Alkaline medium: indigenous filtered wood-ash water (chingal) / food-grade sodium bicarbonate (cooking soda).","Greens sourcing: freshly foraged mountain forest leaves and wild mustard greens / garden-grown mustard leaves (lai pat) and French beans.","Pork component: wood-smoke cured pork rind and fat strips / fresh pork chunks or vegetable-only preparations.","Cooking vessel: unglazed clay pots and hand-beaten cast iron cauldrons / stainless steel saucepans and domestic gas burners.","Salt source: rare mineral salt blocks obtained through ancient trade / iodized rock salt.","Flavoring: local ginger root, birds-eye chillies, and fermented pork / fresh chillies, ginger, and aromatic local herbs.","Dining format: ladled generously over steaming hill rice in family courtyards / served as a comforting clear soup course in urban Mizo dining.","Cultural preservation: universally cherished as the quintessential comfort food defining Mizo identity across generations."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Mizoram State Tourism & Highland Botanical Foodways (2018)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Mizo Bai Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Wash fresh mustard greens (lai pat) thoroughly in cold water; drain and coarsely chop the leaves and tender stems. 2. Cut local green beans into 2-inch pieces, slice small local eggplants into halves, and prepare fresh fermented bamboo shoots (rawtuai). 3. In a wide pot, bring 3 cups of filtered spring water to a rolling boil over medium-high heat. 4. Add pork rind or smoked pork pieces, crushed fresh ginger root, and slit green chillies, letting them simmer vigorously for 8 minutes to render savoury depth into the broth. 5. Add 1/4 teaspoon of natural alkaline extract (or baking soda) and a level teaspoon of salt into the boiling broth; stir once as it foams gently. 6. Add the sliced eggplants, beans, and fermented bamboo shoots, cooking for 5 minutes until tender-crisp. 7. Drop the chopped mustard greens into the pot, pressing them gently below the bubbling liquid without covering the pot to preserve their bright emerald colour. 8. Simmer on medium flame for 4 to 5 minutes until the greens are tender, remove from heat, let rest for 2 minutes, and ladle hot into traditional wooden or clay bowls to enjoy alongside steamed rice.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh mustard greens (lai pat)","Fermented bamboo shoot (rawtuai)","Pork rind or smoked pork pieces","Local green beans or eggplant","Natural alkaline extract (chingal) or cooking soda","Fresh ginger root","Fresh green hill chillies","Local aromatic herbs","Sea salt","Filtered spring water"],
      preparationMethod: ["1. Wash fresh mustard greens (lai pat) thoroughly in cold water; drain and coarsely chop the leaves and tender stems.","2. Cut local green beans into 2-inch pieces, slice small local eggplants into halves, and prepare fresh fermented bamboo shoots (rawtuai).","3. In a wide pot, bring 3 cups of filtered spring water to a rolling boil over medium-high heat.","4. Add pork rind or smoked pork pieces, crushed fresh ginger root, and slit green chillies, letting them simmer vigorously for 8 minutes to render savoury depth into the broth.","5. Add 1/4 teaspoon of natural alkaline extract (or baking soda) and a level teaspoon of salt into the boiling broth; stir once as it foams gently.","6. Add the sliced eggplants, beans, and fermented bamboo shoots, cooking for 5 minutes until tender-crisp.","7. Drop the chopped mustard greens into the pot, pressing them gently below the bubbling liquid without covering the pot to preserve their bright emerald colour.","8. Simmer on medium flame for 4 to 5 minutes until the greens are tender, remove from heat, let rest for 2 minutes, and ladle hot into traditional wooden or clay bowls to enjoy alongside steamed rice."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Mizoram State Tourism & Highland Botanical Foodways (2018)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Mizo Bai today",
    shortDescription: "Present-day form & serving: Ladled hot with its fragrant clear broth into bowls, eaten directly over steaming hill rice alongside roasted meat and fiery local chutneys. Flavour identity: Fresh, botanical, earthy, mildly alkaline, naturally sweet from tender greens, with subtle pork savouriness and fermented bamboo tang. Variations: Lai Pat Bai (mustard greens), Rawtuai Bai (bamboo shoots), Chhanchhuata Bai (vegetable medley), and simple vegetarian Bai. Recognition: Revered as the definitive culinary staple of Mizoram, officially celebrated in state cultural festivals and culinary heritage publications.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh mustard greens (lai pat)","Fermented bamboo shoot (rawtuai)","Pork rind or smoked pork pieces","Local green beans or eggplant","Natural alkaline extract (chingal) or cooking soda","Fresh ginger root","Fresh green hill chillies","Local aromatic herbs","Sea salt","Filtered spring water"],
      preparationMethod: ["Present-day form & serving: Ladled hot with its fragrant clear broth into bowls, eaten directly over steaming hill rice alongside roasted meat and fiery local chutneys.","Flavour identity: Fresh, botanical, earthy, mildly alkaline, naturally sweet from tender greens, with subtle pork savouriness and fermented bamboo tang.","Variations: Lai Pat Bai (mustard greens), Rawtuai Bai (bamboo shoots), Chhanchhuata Bai (vegetable medley), and simple vegetarian Bai.","Recognition: Revered as the definitive culinary staple of Mizoram, officially celebrated in state cultural festivals and culinary heritage publications."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Mizoram State Tourism & Highland Botanical Foodways (2018)",
    },
  },
];

export const SAWHCHIAR_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Sawhchiar in Mizo Community Feasts & Hunting Expeditions",
    shortDescription: "Origin in community feasts: Sawhchiar is the beloved celebratory one-pot rice and meat congee of Mizoram, prepared during community hunting gatherings (Khuangchawi), festivals (Chapchar Kut), and church fellowships. Highland comfort heritage: Developed by Mizo highlanders to produce a deeply nourishing, warming, and easily digestible dish from local hill rice and meat slow-simmered over outdoor wood fires. Historical documentation: Documented in Mizo oral history and colonial records as the supreme communal dish prepared in massive cauldrons for entire villages to celebrate successful hunts and weddings. Cooking method: Short-grain hill rice and bone-in pork or chicken are simmered together with ginger, garlic, and peppercorns, constantly beaten with a wooden paddle into a rich, creamy porridge.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in community feasts: Sawhchiar is the beloved celebratory one-pot rice and meat congee of Mizoram, prepared during community hunting gatherings (Khuangchawi), festivals (Chapchar Kut), and church fellowships.","Highland comfort heritage: Developed by Mizo highlanders to produce a deeply nourishing, warming, and easily digestible dish from local hill rice and meat slow-simmered over outdoor wood fires.","Historical documentation: Documented in Mizo oral history and colonial records as the supreme communal dish prepared in massive cauldrons for entire villages to celebrate successful hunts and weddings.","Cooking method: Short-grain hill rice and bone-in pork or chicken are simmered together with ginger, garlic, and peppercorns, constantly beaten with a wooden paddle into a rich, creamy porridge."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Mizo Cultural & Community Feast Documentation (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Meat choice: wild game or country-reared pig / farm-fresh country chicken or pork. Rice variety: indigenous sticky hill rice grown on jhum slopes / locally milled short-grain aromatic rice. Vessel & fire: colossal cast-iron cauldrons stirred with wooden oar paddles over wood logs / stainless steel pressure cookers and domestic stockpots. Spicing: wild crushed black peppercorns and fresh hill ginger / freshly ground black pepper and garlic. Cooking duration: patient 2-hour outdoor simmering / 30-minute rapid pressure cooking. Fat content: natural pork lard rendered from fatty cuts / minimal oil or light broth. Garnish & greens: wild mustard greens folded in at the end / fresh spring onions and coriander. Cultural role: sacred village feast and church banquet staple / universally adored highland winter comfort food.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Meat choice: wild game or country-reared pig / farm-fresh country chicken or pork.","Rice variety: indigenous sticky hill rice grown on jhum slopes / locally milled short-grain aromatic rice.","Vessel & fire: colossal cast-iron cauldrons stirred with wooden oar paddles over wood logs / stainless steel pressure cookers and domestic stockpots.","Spicing: wild crushed black peppercorns and fresh hill ginger / freshly ground black pepper and garlic.","Cooking duration: patient 2-hour outdoor simmering / 30-minute rapid pressure cooking.","Fat content: natural pork lard rendered from fatty cuts / minimal oil or light broth.","Garnish & greens: wild mustard greens folded in at the end / fresh spring onions and coriander.","Cultural role: sacred village feast and church banquet staple / universally adored highland winter comfort food."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Mizo Cultural & Community Feast Documentation (2019)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Sawhchiar Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Rinse 1.5 cups of indigenous short-grain rice in cold water and soak for 20 minutes; cut bone-in chicken or pork into bite-sized chunks. 2. In a heavy-bottomed pot, heat 1 teaspoon of lard or oil over medium heat; add crushed fresh ginger root and crushed garlic, sauteing for 1 minute until fragrant. 3. Add the meat pieces and 1 teaspoon of sea salt, searing for 4 to 5 minutes until the meat changes colour and releases its natural juices. 4. Add 6 cups of water and freshly crushed wild black peppercorns; bring to a vigorous rolling boil, skim off any foam from the surface, cover, and simmer for 15 minutes. 5. Drain the soaked rice and add it directly into the boiling meat broth, stirring well to prevent any sticking at the base. 6. Lower heat to medium-low, cover partially, and let simmer for 20 minutes, stirring periodically as the rice grains break down and absorb the flavourful meat stock. 7. Beat the mixture vigorously with a wooden ladle for 2 minutes to break down the starch into a rich, velvety, creamy congee-like porridge. 8. Stir in fresh tender mustard leaves and slit green chillies, simmer for another 2 minutes until wilted, remove from heat, and serve steaming hot in deep bowls.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous short-grain hill rice","Bone-in country pork or chicken","Crushed fresh ginger root","Garlic cloves","Fresh green hill chillies","Crushed wild black peppercorns","Mustard leaves (for finishing)","Filtered spring water","Pure lard or drop of mustard oil","Sea salt"],
      preparationMethod: ["1. Rinse 1.5 cups of indigenous short-grain rice in cold water and soak for 20 minutes; cut bone-in chicken or pork into bite-sized chunks.","2. In a heavy-bottomed pot, heat 1 teaspoon of lard or oil over medium heat; add crushed fresh ginger root and crushed garlic, sauteing for 1 minute until fragrant.","3. Add the meat pieces and 1 teaspoon of sea salt, searing for 4 to 5 minutes until the meat changes colour and releases its natural juices.","4. Add 6 cups of water and freshly crushed wild black peppercorns; bring to a vigorous rolling boil, skim off any foam from the surface, cover, and simmer for 15 minutes.","5. Drain the soaked rice and add it directly into the boiling meat broth, stirring well to prevent any sticking at the base.","6. Lower heat to medium-low, cover partially, and let simmer for 20 minutes, stirring periodically as the rice grains break down and absorb the flavourful meat stock.","7. Beat the mixture vigorously with a wooden ladle for 2 minutes to break down the starch into a rich, velvety, creamy congee-like porridge.","8. Stir in fresh tender mustard leaves and slit green chillies, simmer for another 2 minutes until wilted, remove from heat, and serve steaming hot in deep bowls."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Mizo Cultural & Community Feast Documentation (2019)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Sawhchiar today",
    shortDescription: "Present-day form & serving: Served piping hot in large ceramic or clay bowls, accompanied by spicy fresh chilli dips, roasted smoked meat, or raw local herbs. Flavour identity: Deeply savoury, comforting, peppery, with rich gelatinous meat notes and creamy, soft rice starch. Variations: Vawk-sa Sawhchiar (pork), Ar-sa Sawhchiar (chicken), and light breakfast sawhchiar. Recognition: Celebrated across the state of Mizoram during Chapchar Kut and Christmas feasts as the ultimate communal culinary symbol.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous short-grain hill rice","Bone-in country pork or chicken","Crushed fresh ginger root","Garlic cloves","Fresh green hill chillies","Crushed wild black peppercorns","Mustard leaves (for finishing)","Filtered spring water","Pure lard or drop of mustard oil","Sea salt"],
      preparationMethod: ["Present-day form & serving: Served piping hot in large ceramic or clay bowls, accompanied by spicy fresh chilli dips, roasted smoked meat, or raw local herbs.","Flavour identity: Deeply savoury, comforting, peppery, with rich gelatinous meat notes and creamy, soft rice starch.","Variations: Vawk-sa Sawhchiar (pork), Ar-sa Sawhchiar (chicken), and light breakfast sawhchiar.","Recognition: Celebrated across the state of Mizoram during Chapchar Kut and Christmas feasts as the ultimate communal culinary symbol."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Mizo Cultural & Community Feast Documentation (2019)",
    },
  },
];

export const VAWKSA_REP_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Vawksa Rep in Mizo Hearth Smoking & Village Preservation",
    shortDescription: "Origin in highland hearth preservation: In the hilly terrain of Mizoram, smoking pork above the open family hearth (rap) was an essential traditional preservation method, transforming fresh cuts into deeply cured, flavourful meat. The architecture of the 'Rap': Strips of country pork were suspended on bamboo racks directly above the wood-burning cooking fire, allowing the rising smoke of mountain oak and pine to cure the meat over several weeks. Culinary role: Vawksa Rep is both a cured ingredient and a celebrated finished preparation, cooked simply with fermented bamboo shoots and wild greens to highlight the natural smoke flavour. Cooking method: Smoked pork slices are boiled in pure spring water with fermented bamboo shoots (rawtuai), crushed mountain ginger, and fresh green chillies without any added cooking oil.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in highland hearth preservation: In the hilly terrain of Mizoram, smoking pork above the open family hearth (rap) was an essential traditional preservation method, transforming fresh cuts into deeply cured, flavourful meat.","The architecture of the 'Rap': Strips of country pork were suspended on bamboo racks directly above the wood-burning cooking fire, allowing the rising smoke of mountain oak and pine to cure the meat over several weeks.","Culinary role: Vawksa Rep is both a cured ingredient and a celebrated finished preparation, cooked simply with fermented bamboo shoots and wild greens to highlight the natural smoke flavour.","Cooking method: Smoked pork slices are boiled in pure spring water with fermented bamboo shoots (rawtuai), crushed mountain ginger, and fresh green chillies without any added cooking oil."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Mizo Hearth-Preservation & Food Traditions (2020)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Curing apparatus: multi-tiered bamboo smoke-racks (rap) above mud hearths / modern smoking chambers and oven drying. Wood fuel: wild mountain hardwoods and dried bamboo / commercially cured firewood. Stewing technique: gentle boiling in unglazed earthenware with wild spring water / pressure cooking in stainless steel pots. Fermented accompaniments: fresh wet fermented bamboo shoots (rawtuai) / jarred bamboo shoots. Spices: minimal additions of wild ginger, garlic, and fiery birds-eye chillies / fresh garden chillies and local herbs. Greens pairing: seasonal wild mountain leaves and mustard greens / tender mustard greens and bok choy. Fat content: natural pork fat rendered slowly during boiling / trimmed lean pork cuts. Modern presence: household staple served with pride in traditional Mizo restaurants and festival food stalls.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Curing apparatus: multi-tiered bamboo smoke-racks (rap) above mud hearths / modern smoking chambers and oven drying.","Wood fuel: wild mountain hardwoods and dried bamboo / commercially cured firewood.","Stewing technique: gentle boiling in unglazed earthenware with wild spring water / pressure cooking in stainless steel pots.","Fermented accompaniments: fresh wet fermented bamboo shoots (rawtuai) / jarred bamboo shoots.","Spices: minimal additions of wild ginger, garlic, and fiery birds-eye chillies / fresh garden chillies and local herbs.","Greens pairing: seasonal wild mountain leaves and mustard greens / tender mustard greens and bok choy.","Fat content: natural pork fat rendered slowly during boiling / trimmed lean pork cuts.","Modern presence: household staple served with pride in traditional Mizo restaurants and festival food stalls."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Mizo Hearth-Preservation & Food Traditions (2020)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Vawksa Rep Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Take hearth-smoked pork, rinse in warm water to clean surface soot, and slice into thick 1/2-inch bite-sized pieces. 2. Place the sliced smoked pork in a pot, cover with 3 cups of water, and bring to a rolling boil over medium-high heat. 3. Boil vigorously for 10 minutes, allowing the tough smoked fibers to soften and render their aromatic smoky fat into the broth. 4. Add crushed fresh ginger root, crushed garlic cloves, and slit green chillies into the bubbling pot. 5. Fold in 1/2 cup of fermented bamboo shoots (rawtuai), stirring gently to combine with the smoked pork and aromatics. 6. Season with sea salt to taste, lower the flame to medium, cover the pot with a lid, and simmer gently for 15 to 20 minutes until the pork is meltingly tender. 7. Add fresh mustard greens or local wild mountain leaves on top, letting them steam and wilt in the fragrant broth for 3 minutes. 8. Remove from heat, garnish with fresh local chives or wild coriander, and serve hot in deep bowls alongside steaming white rice and fresh local chutneys.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Hearth-smoked country pork (vawksa rep)","Fermented bamboo shoots (rawtuai)","Fresh ginger root","Garlic cloves","Fresh green hill chillies","Local wild mustard greens","Filtered spring water","Local aromatic mountain herbs","Sea salt","Fresh coriander or local chives (for garnish)"],
      preparationMethod: ["1. Take hearth-smoked pork, rinse in warm water to clean surface soot, and slice into thick 1/2-inch bite-sized pieces.","2. Place the sliced smoked pork in a pot, cover with 3 cups of water, and bring to a rolling boil over medium-high heat.","3. Boil vigorously for 10 minutes, allowing the tough smoked fibers to soften and render their aromatic smoky fat into the broth.","4. Add crushed fresh ginger root, crushed garlic cloves, and slit green chillies into the bubbling pot.","5. Fold in 1/2 cup of fermented bamboo shoots (rawtuai), stirring gently to combine with the smoked pork and aromatics.","6. Season with sea salt to taste, lower the flame to medium, cover the pot with a lid, and simmer gently for 15 to 20 minutes until the pork is meltingly tender.","7. Add fresh mustard greens or local wild mountain leaves on top, letting them steam and wilt in the fragrant broth for 3 minutes.","8. Remove from heat, garnish with fresh local chives or wild coriander, and serve hot in deep bowls alongside steaming white rice and fresh local chutneys."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Mizo Hearth-Preservation & Food Traditions (2020)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Vawksa Rep today",
    shortDescription: "Present-day form & serving: Served hot with its deeply flavourful smoky broth, paired with steaming mountain rice and fresh green chilli condiments. Flavour identity: Pronounced wood-smoke aroma, savoury umami, tangy fermented bamboo notes, with clean ginger heat and rich pork tenderness. Variations: Vawksa Rep with Bamboo Shoot, dry pan-fried Vawksa Rep, and Vawksa Rep cooked with local mustard greens. Recognition: Regarded as the definitive meat dish of Mizoram, acclaimed by North-East food writers and celebrated in cultural documentaries.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Hearth-smoked country pork (vawksa rep)","Fermented bamboo shoots (rawtuai)","Fresh ginger root","Garlic cloves","Fresh green hill chillies","Local wild mustard greens","Filtered spring water","Local aromatic mountain herbs","Sea salt","Fresh coriander or local chives (for garnish)"],
      preparationMethod: ["Present-day form & serving: Served hot with its deeply flavourful smoky broth, paired with steaming mountain rice and fresh green chilli condiments.","Flavour identity: Pronounced wood-smoke aroma, savoury umami, tangy fermented bamboo notes, with clean ginger heat and rich pork tenderness.","Variations: Vawksa Rep with Bamboo Shoot, dry pan-fried Vawksa Rep, and Vawksa Rep cooked with local mustard greens.","Recognition: Regarded as the definitive meat dish of Mizoram, acclaimed by North-East food writers and celebrated in cultural documentaries."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Mizo Hearth-Preservation & Food Traditions (2020)",
    },
  },
];

export const NAGA_SMOKED_PORK_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Naga Smoked Pork in Village Kitchen Hearths",
    shortDescription: "Origin in ancestral Naga preservation: In the hills of Nagaland, pork cured over family wood-fire kitchen hearths for weeks provided long-lasting sustenance for warriors, hunters, and farming families. The sacred trinity of Naga cooking: Smoked pork, fermented bamboo shoots (wet bastenga or dry khorisa), and the legendary Naga King Chilli (Bhut Jolokia / Raja Mircha) form the foundational flavor trio of Naga gastronomy. Historical documentation: Chronicled in anthropological studies of the Angami, Ao, Sema, and Lotha tribes as the quintessential celebratory meat prepared for major festivals such as Moatsu, Sekrenyi, and Tokhu Emong. Cooking method: Cut into hearty chunks, braised purely in water with fermented bamboo shoots, crushed ginger, garlic, and fresh King Chilli without a single drop of added cooking oil.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in ancestral Naga preservation: In the hills of Nagaland, pork cured over family wood-fire kitchen hearths for weeks provided long-lasting sustenance for warriors, hunters, and farming families.","The sacred trinity of Naga cooking: Smoked pork, fermented bamboo shoots (wet bastenga or dry khorisa), and the legendary Naga King Chilli (Bhut Jolokia / Raja Mircha) form the foundational flavor trio of Naga gastronomy.","Historical documentation: Chronicled in anthropological studies of the Angami, Ao, Sema, and Lotha tribes as the quintessential celebratory meat prepared for major festivals such as Moatsu, Sekrenyi, and Tokhu Emong.","Cooking method: Cut into hearty chunks, braised purely in water with fermented bamboo shoots, crushed ginger, garlic, and fresh King Chilli without a single drop of added cooking oil."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Nagaland State Tourism & Hornbill Heritage Archives (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Smoking process: weeks of passive smoking above home wood hearths / dedicated smoke-houses and artisanal curing units. Bamboo shoot: fresh village-fermented wet bamboo shoot (bastenga) / vacuum-packed fermented bamboo shoots. Chilli heat: freshly plucked fiery Raja Mircha / dried King Chilli flakes and pastes. Cookware: unglazed earthen pots and heavy cast-iron cauldrons / stainless steel cookware and pressure cookers. Cooking medium: pure spring water with zero added oil / water braising with traditional spices. Herbal additions: wild mountain Sichuan pepper leaves (michinga) and local herbs / fresh coriander and spring garlic. Fat rendering: natural rendered pork fat creating its own rich glossy gravy / trimmed cuts with balanced fat. Cultural prestige: mandatory festive banquet centerpiece across all Naga tribes and a star attraction at the annual Hornbill Festival.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Smoking process: weeks of passive smoking above home wood hearths / dedicated smoke-houses and artisanal curing units.","Bamboo shoot: fresh village-fermented wet bamboo shoot (bastenga) / vacuum-packed fermented bamboo shoots.","Chilli heat: freshly plucked fiery Raja Mircha / dried King Chilli flakes and pastes.","Cookware: unglazed earthen pots and heavy cast-iron cauldrons / stainless steel cookware and pressure cookers.","Cooking medium: pure spring water with zero added oil / water braising with traditional spices.","Herbal additions: wild mountain Sichuan pepper leaves (michinga) and local herbs / fresh coriander and spring garlic.","Fat rendering: natural rendered pork fat creating its own rich glossy gravy / trimmed cuts with balanced fat.","Cultural prestige: mandatory festive banquet centerpiece across all Naga tribes and a star attraction at the annual Hornbill Festival."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Nagaland State Tourism & Hornbill Heritage Archives (2019)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Naga Smoked Pork with Bamboo Shoots Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Clean hearth-smoked pork chunks by scrubbing under warm water; cut into thick 1.5-inch pieces with skin and fat intact. 2. Place the pork chunks in a heavy pot or iron kadhai, add 2.5 cups of filtered spring water, and bring to a rolling boil over medium-high heat. 3. Simmer for 10 to 12 minutes as the smoked pork releases its rich natural fat and infuses the water with deep wood-smoke aroma. 4. Crush fresh ginger root and garlic cloves coarsely in a wooden mortar; add to the boiling pork along with rock salt. 5. Add 1/2 cup of fermented bamboo shoots (bastenga) and 1 small chopped local tomato to balance the rich pork fat. 6. Wearing gloves, lightly pierce or crush half a fresh Naga King Chilli (Raja Mircha) and drop it into the pot, adjusting carefully for heat. 7. Lower the heat to medium-low, cover tightly with a lid, and simmer gently for 25 to 30 minutes until the pork is fork-tender and the gravy thickens to a glossy reduction. 8. Toss in fresh Sichuan pepper leaves or wild local herbs, cook uncovered for 2 minutes, remove from heat, rest for 5 minutes, and serve hot with steamed hill rice.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Hearth-smoked pork chunks","Fermented bamboo shoots (wet bastenga or dry khorisa)","Fresh Naga King Chilli (Bhut Jolokia / Raja Mircha)","Fresh ginger root","Garlic cloves","Sichuan pepper leaves or local wild herbs","Local sour tomato (for body)","Filtered spring water","Rock salt","Fresh coriander or local chives (for garnish)"],
      preparationMethod: ["1. Clean hearth-smoked pork chunks by scrubbing under warm water; cut into thick 1.5-inch pieces with skin and fat intact.","2. Place the pork chunks in a heavy pot or iron kadhai, add 2.5 cups of filtered spring water, and bring to a rolling boil over medium-high heat.","3. Simmer for 10 to 12 minutes as the smoked pork releases its rich natural fat and infuses the water with deep wood-smoke aroma.","4. Crush fresh ginger root and garlic cloves coarsely in a wooden mortar; add to the boiling pork along with rock salt.","5. Add 1/2 cup of fermented bamboo shoots (bastenga) and 1 small chopped local tomato to balance the rich pork fat.","6. Wearing gloves, lightly pierce or crush half a fresh Naga King Chilli (Raja Mircha) and drop it into the pot, adjusting carefully for heat.","7. Lower the heat to medium-low, cover tightly with a lid, and simmer gently for 25 to 30 minutes until the pork is fork-tender and the gravy thickens to a glossy reduction.","8. Toss in fresh Sichuan pepper leaves or wild local herbs, cook uncovered for 2 minutes, remove from heat, rest for 5 minutes, and serve hot with steamed hill rice."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Nagaland State Tourism & Hornbill Heritage Archives (2019)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Naga Smoked Pork with Bamboo Shoots today",
    shortDescription: "Present-day form & serving: Served piping hot in traditional Naga bowls alongside steaming sticky rice, boiled wild greens, and spicy Naga chutney. Flavour identity: Powerfully smoky, fiercely spicy from Raja Mircha, sharply tangy from fermented bamboo shoots, with deeply savoury and unctuous pork. Variations: Smoked pork with fermented bamboo shoot (classic), smoked pork with axone, and smoked pork with dried yam leaves (anishi). Recognition: Acclaimed worldwide as the iconic ambassador of Naga cuisine, celebrated annually at the Hornbill Festival in Kisama.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Hearth-smoked pork chunks","Fermented bamboo shoots (wet bastenga or dry khorisa)","Fresh Naga King Chilli (Bhut Jolokia / Raja Mircha)","Fresh ginger root","Garlic cloves","Sichuan pepper leaves or local wild herbs","Local sour tomato (for body)","Filtered spring water","Rock salt","Fresh coriander or local chives (for garnish)"],
      preparationMethod: ["Present-day form & serving: Served piping hot in traditional Naga bowls alongside steaming sticky rice, boiled wild greens, and spicy Naga chutney.","Flavour identity: Powerfully smoky, fiercely spicy from Raja Mircha, sharply tangy from fermented bamboo shoots, with deeply savoury and unctuous pork.","Variations: Smoked pork with fermented bamboo shoot (classic), smoked pork with axone, and smoked pork with dried yam leaves (anishi).","Recognition: Acclaimed worldwide as the iconic ambassador of Naga cuisine, celebrated annually at the Hornbill Festival in Kisama."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Nagaland State Tourism & Hornbill Heritage Archives (2019)",
    },
  },
];

export const GALHO_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Galho in Angami, Ao & Lotha Agrarian Feasts",
    shortDescription: "Origin in the Naga highlands: Galho is the traditional savoury one-pot rice and meat porridge of Nagaland, affectionately referred to as the 'Naga Khichdi', developed by agrarian communities to nourish field workers. The umami power of Axone: Central to authentic Galho is 'Axone' (fermented soybean paste), an indigenous superfood that imparts an earthy, mushroom-like umami depth to the rice and meat. Seasonal forest greens: Incorporates freshly foraged indigenous mountain greens such as mustard leaves, bitter nightshade leaves, wild coriander, and stinging nettle shoots. Cooking method: Indigenous hill rice, smoked pork or beef scraps, and axone are simmered together in pure water with ginger, garlic, and fresh birds-eye chillies into a creamy, soul-soothing porridge.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Naga highlands: Galho is the traditional savoury one-pot rice and meat porridge of Nagaland, affectionately referred to as the 'Naga Khichdi', developed by agrarian communities to nourish field workers.","The umami power of Axone: Central to authentic Galho is 'Axone' (fermented soybean paste), an indigenous superfood that imparts an earthy, mushroom-like umami depth to the rice and meat.","Seasonal forest greens: Incorporates freshly foraged indigenous mountain greens such as mustard leaves, bitter nightshade leaves, wild coriander, and stinging nettle shoots.","Cooking method: Indigenous hill rice, smoked pork or beef scraps, and axone are simmered together in pure water with ginger, garlic, and fresh birds-eye chillies into a creamy, soul-soothing porridge."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Angami & Ao Agrarian Hearth Traditions (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Rice source: freshly harvested unpolished hill rice grown on terraced slopes / locally milled broken rice. Protein: scraps of wood-smoked pork, beef, or dried meat / fresh meat cuts or purely vegetarian versions. Fermented seasoning: traditional village-fermented axone wrapped in banana leaves / commercially packed fermented beans. Greens variety: foraged mountain leaves and wild medicinal herbs / garden-fresh mustard greens and spinach. Cookware: broad-mouthed iron cauldrons over open wood-fire hearths / domestic pressure cookers and stainless steel pots. Texture: thick, rustic, soupy rice stew / velvety smooth porridge. Dining role: wholesome midday ration eaten in terraced paddy huts / beloved comfort food prepared across Naga homes and cafes. Modern prestige: recognized as the quintessential comfort food and culinary soul of Nagaland.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Rice source: freshly harvested unpolished hill rice grown on terraced slopes / locally milled broken rice.","Protein: scraps of wood-smoked pork, beef, or dried meat / fresh meat cuts or purely vegetarian versions.","Fermented seasoning: traditional village-fermented axone wrapped in banana leaves / commercially packed fermented beans.","Greens variety: foraged mountain leaves and wild medicinal herbs / garden-fresh mustard greens and spinach.","Cookware: broad-mouthed iron cauldrons over open wood-fire hearths / domestic pressure cookers and stainless steel pots.","Texture: thick, rustic, soupy rice stew / velvety smooth porridge.","Dining role: wholesome midday ration eaten in terraced paddy huts / beloved comfort food prepared across Naga homes and cafes.","Modern prestige: recognized as the quintessential comfort food and culinary soul of Nagaland."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Angami & Ao Agrarian Hearth Traditions (2018)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Galho Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Rinse 1 cup of indigenous Naga hill rice in cold water and soak for 15 minutes; chop smoked pork or beef into small 1/2-inch bits. 2. In a deep heavy pot, combine the smoked meat scraps with 5 cups of filtered spring water and bring to a vigorous rolling boil over medium-high flame. 3. Add 1 tablespoon of fermented soybean cake (axone), pressing it against the side of the pot with a wooden spoon so it dissolves and disperses completely into the broth. 4. Crush fresh ginger root, garlic cloves, and fresh bird's-eye chillies in a mortar; add to the pot along with rock salt and a chopped sour tomato. 5. Drain the soaked rice and add it into the boiling seasoned broth, stirring well to prevent any grains from catching at the bottom. 6. Lower heat to medium, cover partially, and let simmer for 20 minutes, stirring occasionally as the rice grains soften and expand. 7. Coarsely chop seasonal wild mountain greens (mustard leaves or bitter greens) and stir them into the simmering porridge. 8. Beat gently with a wooden ladle for 2 minutes to create a rich, creamy consistency, simmer for another 3 minutes until greens are tender, remove from heat, and serve piping hot.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous Naga hill rice","Hearth-smoked pork or beef cuts","Axone (fermented soybean cake)","Seasonal wild mountain greens (mustard leaves)","Fresh ginger root","Garlic cloves","Fresh Naga bird's-eye chillies","Local sour tomato or wild plum","Filtered spring water","Rock salt"],
      preparationMethod: ["1. Rinse 1 cup of indigenous Naga hill rice in cold water and soak for 15 minutes; chop smoked pork or beef into small 1/2-inch bits.","2. In a deep heavy pot, combine the smoked meat scraps with 5 cups of filtered spring water and bring to a vigorous rolling boil over medium-high flame.","3. Add 1 tablespoon of fermented soybean cake (axone), pressing it against the side of the pot with a wooden spoon so it dissolves and disperses completely into the broth.","4. Crush fresh ginger root, garlic cloves, and fresh bird's-eye chillies in a mortar; add to the pot along with rock salt and a chopped sour tomato.","5. Drain the soaked rice and add it into the boiling seasoned broth, stirring well to prevent any grains from catching at the bottom.","6. Lower heat to medium, cover partially, and let simmer for 20 minutes, stirring occasionally as the rice grains soften and expand.","7. Coarsely chop seasonal wild mountain greens (mustard leaves or bitter greens) and stir them into the simmering porridge.","8. Beat gently with a wooden ladle for 2 minutes to create a rich, creamy consistency, simmer for another 3 minutes until greens are tender, remove from heat, and serve piping hot."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Angami & Ao Agrarian Hearth Traditions (2018)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Galho today",
    shortDescription: "Present-day form & serving: Served piping hot in large ceramic bowls, enjoyed as a complete one-bowl meal, accompanied by raw green chillies and roasted dry fish. Flavour identity: Deeply savoury, earthy, pungent with rich axone umami, smoky from cured meat, and refreshed by aromatic mountain greens. Variations: Pork Galho, Vegetarian Galho (with axone and seasonal greens), Chicken Galho, and Beef Galho. Recognition: Beloved across Nagaland as the ultimate comfort food for cold monsoon evenings, sickness, and family reunions.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous Naga hill rice","Hearth-smoked pork or beef cuts","Axone (fermented soybean cake)","Seasonal wild mountain greens (mustard leaves)","Fresh ginger root","Garlic cloves","Fresh Naga bird's-eye chillies","Local sour tomato or wild plum","Filtered spring water","Rock salt"],
      preparationMethod: ["Present-day form & serving: Served piping hot in large ceramic bowls, enjoyed as a complete one-bowl meal, accompanied by raw green chillies and roasted dry fish.","Flavour identity: Deeply savoury, earthy, pungent with rich axone umami, smoky from cured meat, and refreshed by aromatic mountain greens.","Variations: Pork Galho, Vegetarian Galho (with axone and seasonal greens), Chicken Galho, and Beef Galho.","Recognition: Beloved across Nagaland as the ultimate comfort food for cold monsoon evenings, sickness, and family reunions."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Angami & Ao Agrarian Hearth Traditions (2018)",
    },
  },
];

export const ZUTHO_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Zutho in Angami Naga Ancient Fermentation Traditions",
    shortDescription: "Origin among the Angami Nagas: Zutho is the traditional cloudy, mildly effervescent fermented rice beverage of the Angami Nagas, crafted in villages around Kohima and Dimapur for millennia. The miracle of 'Piazu': The fermentation relies on an indigenous sprouted-grain starter culture called 'Piazu', prepared by soaking unpolished paddy until sprouted, drying it in the sun, and grinding it into an enzyme-rich malt. Cultural & community vitality: Central to major agrarian festivals such as Sekrenyi, Zutho is consumed during communal agricultural labor (Mhasie) and shared as an auspicious token of peace and goodwill. Brewing method: Cooked glutinous rice is cooled, blended with sprouted grain starter (piazu), fermented in clay pots for several days, strained, and diluted with pure spring water.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin among the Angami Nagas: Zutho is the traditional cloudy, mildly effervescent fermented rice beverage of the Angami Nagas, crafted in villages around Kohima and Dimapur for millennia.","The miracle of 'Piazu': The fermentation relies on an indigenous sprouted-grain starter culture called 'Piazu', prepared by soaking unpolished paddy until sprouted, drying it in the sun, and grinding it into an enzyme-rich malt.","Cultural & community vitality: Central to major agrarian festivals such as Sekrenyi, Zutho is consumed during communal agricultural labor (Mhasie) and shared as an auspicious token of peace and goodwill.","Brewing method: Cooked glutinous rice is cooled, blended with sprouted grain starter (piazu), fermented in clay pots for several days, strained, and diluted with pure spring water."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Angami Traditional Brewing & Fermentation Documentation (2017)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Starter culture: wild sprouted paddy starter (piazu) crafted by elders / traditional malted grain starters. Rice base: local sticky glutinous hill rice / indigenous red and white rice blends. Fermentation vessels: large porous terracotta jars and hollowed wooden vats / food-grade ceramic crocks and glass carboys. Brewing duration: 4 to 7 days of slow ambient mountain fermentation / controlled seasonal brewing. Serving container: polished bamboo mugs and hollow horn tumblers / traditional bamboo tumblers and glassware. Beverage character: unpasteurized, cloudy, naturally probiotic, frothy / freshly drawn unpasteurized traditional beverage. Occasion: communal field transplanting and seasonal rituals / celebratory gatherings and tourist tastings. Heritage status: legally protected and culturally preserved traditional indigenous fermented beverage of Nagaland.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Starter culture: wild sprouted paddy starter (piazu) crafted by elders / traditional malted grain starters.","Rice base: local sticky glutinous hill rice / indigenous red and white rice blends.","Fermentation vessels: large porous terracotta jars and hollowed wooden vats / food-grade ceramic crocks and glass carboys.","Brewing duration: 4 to 7 days of slow ambient mountain fermentation / controlled seasonal brewing.","Serving container: polished bamboo mugs and hollow horn tumblers / traditional bamboo tumblers and glassware.","Beverage character: unpasteurized, cloudy, naturally probiotic, frothy / freshly drawn unpasteurized traditional beverage.","Occasion: communal field transplanting and seasonal rituals / celebratory gatherings and tourist tastings.","Heritage status: legally protected and culturally preserved traditional indigenous fermented beverage of Nagaland."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Angami Traditional Brewing & Fermentation Documentation (2017)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Zutho Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Thoroughly rinse 2 kg of indigenous glutinous sticky rice in clean spring water and soak for 2 hours. 2. Steam the soaked rice in a traditional perforated wooden or bamboo steamer until fully cooked, soft, and translucent. 3. Spread the hot steamed rice evenly onto clean bamboo mats or wide platters to cool down completely to ambient room temperature (25°C). 4. Prepare the sprouted starter culture (piazu) by finely grinding dried sprouted unpolished paddy into a fragrant, enzyme-rich malt powder. 5. Evenly sprinkle the piazu powder across the cooled rice, tossing gently with clean hands to ensure every grain is inoculated with the natural brewing enzymes. 6. Transfer the inoculated rice into sterilized, pre-warmed terracotta fermentation pots (earthen vats); seal the mouth tightly with banana leaves and clean cloth. 7. Place the pots in a dark, warm corner of the kitchen and let ferment undisturbed for 4 to 6 days until liquid mash forms and a sweet, fruity, mildly alcoholic aroma develops. 8. Strain the fermented rice mash through fine muslin, press gently to extract the milky white liquor, dilute with clean chilled spring water to desired strength, and pour into bamboo tumblers to serve.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous glutinous sticky rice","Sprouted unpolished paddy starter (piazu)","Clean filtered spring water","Milled sprouted rice malt","Natural wild fermentation yeast enzymes","Wild herbal starter plant leaves","Fermented rice mash liquor","Natural grain brewing sugars","Dilution pure spring water","Bamboo tumblers (for serving)"],
      preparationMethod: ["1. Thoroughly rinse 2 kg of indigenous glutinous sticky rice in clean spring water and soak for 2 hours.","2. Steam the soaked rice in a traditional perforated wooden or bamboo steamer until fully cooked, soft, and translucent.","3. Spread the hot steamed rice evenly onto clean bamboo mats or wide platters to cool down completely to ambient room temperature (25°C).","4. Prepare the sprouted starter culture (piazu) by finely grinding dried sprouted unpolished paddy into a fragrant, enzyme-rich malt powder.","5. Evenly sprinkle the piazu powder across the cooled rice, tossing gently with clean hands to ensure every grain is inoculated with the natural brewing enzymes.","6. Transfer the inoculated rice into sterilized, pre-warmed terracotta fermentation pots (earthen vats); seal the mouth tightly with banana leaves and clean cloth.","7. Place the pots in a dark, warm corner of the kitchen and let ferment undisturbed for 4 to 6 days until liquid mash forms and a sweet, fruity, mildly alcoholic aroma develops.","8. Strain the fermented rice mash through fine muslin, press gently to extract the milky white liquor, dilute with clean chilled spring water to desired strength, and pour into bamboo tumblers to serve."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Angami Traditional Brewing & Fermentation Documentation (2017)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Zutho today",
    shortDescription: "Present-day form & serving: Served freshly drawn in tall carved bamboo tumblers, frothy and naturally effervescent, enjoyed at room temperature. Flavour identity: Mildly tart, fruity, gently sweet, effervescent, with pleasant sourdough and lactic notes and a clean, refreshing finish. Variations: Fresh Zutho (mildly sweet, 4 days), aged Zutho (stronger, tangier), and festive dark grain Zutho. Recognition: Celebrated as the official cultural welcome drink of Nagaland, showcased prominently at the annual Hornbill Festival.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous glutinous sticky rice","Sprouted unpolished paddy starter (piazu)","Clean filtered spring water","Milled sprouted rice malt","Natural wild fermentation yeast enzymes","Wild herbal starter plant leaves","Fermented rice mash liquor","Natural grain brewing sugars","Dilution pure spring water","Bamboo tumblers (for serving)"],
      preparationMethod: ["Present-day form & serving: Served freshly drawn in tall carved bamboo tumblers, frothy and naturally effervescent, enjoyed at room temperature.","Flavour identity: Mildly tart, fruity, gently sweet, effervescent, with pleasant sourdough and lactic notes and a clean, refreshing finish.","Variations: Fresh Zutho (mildly sweet, 4 days), aged Zutho (stronger, tangier), and festive dark grain Zutho.","Recognition: Celebrated as the official cultural welcome drink of Nagaland, showcased prominently at the annual Hornbill Festival."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Angami Traditional Brewing & Fermentation Documentation (2017)",
    },
  },
];

export const MUI_BOROK_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Mui Borok in the Manikya Kingdom & Borok Forest Hearth",
    shortDescription: "Origin among the Borok people: Mui Borok (meaning 'Borok Curry' in the indigenous Kokborok language) is the foundational culinary staple of the Tripuri people, celebrated throughout the history of the Manikya dynasty. The soul of 'Berma': Central to Mui Borok is 'Berma'—sun-dried, naturally fermented small river fish packed into earthen jars (taler) and matured for months to yield an intensely savory, umami-rich paste. Zero-oil health philosophy: Prepared entirely without cooking oil, the dish highlights the pristine flavours of fresh freshwater catch, mountain green chillies, garlic, and wild herbs. Cooking method: River fish is stewed in spring water with berma, crushed ginger, garlic, and green chillies in earthenware pots, finished with fragrant wild lemon basil leaves.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin among the Borok people: Mui Borok (meaning 'Borok Curry' in the indigenous Kokborok language) is the foundational culinary staple of the Tripuri people, celebrated throughout the history of the Manikya dynasty.","The soul of 'Berma': Central to Mui Borok is 'Berma'—sun-dried, naturally fermented small river fish packed into earthen jars (taler) and matured for months to yield an intensely savory, umami-rich paste.","Zero-oil health philosophy: Prepared entirely without cooking oil, the dish highlights the pristine flavours of fresh freshwater catch, mountain green chillies, garlic, and wild herbs.","Cooking method: River fish is stewed in spring water with berma, crushed ginger, garlic, and green chillies in earthenware pots, finished with fragrant wild lemon basil leaves."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Tripuri Manikya Royal & Tribal Gastronomy (2018)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Fermented fish: traditionally jar-fermented river fish (berma) prepared by elders / artisanal village-made berma paste. Fish catch: fresh wild river fish (puntius, chanda, or carp) / fresh local freshwater fish. Cookware: unglazed earthen pots (mitti ki handi) / stainless steel saucepans and domestic gas burners. Aromatics: fresh green mountain chillies, wild coriander (khundrupwi), and lemon basil / locally sourced herbs. Cooking medium: pure spring water with zero added cooking oil / traditional zero-oil water boiling. Vegetable pairing: tender bamboo shoots or local wild eggplant / seasonal hill vegetables. Dining setting: served over hot local rice on traditional banana leaves / everyday household meal and ethnic food festivals. Cultural significance: universally revered as the defining culinary soul of indigenous Tripuri culture.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Fermented fish: traditionally jar-fermented river fish (berma) prepared by elders / artisanal village-made berma paste.","Fish catch: fresh wild river fish (puntius, chanda, or carp) / fresh local freshwater fish.","Cookware: unglazed earthen pots (mitti ki handi) / stainless steel saucepans and domestic gas burners.","Aromatics: fresh green mountain chillies, wild coriander (khundrupwi), and lemon basil / locally sourced herbs.","Cooking medium: pure spring water with zero added cooking oil / traditional zero-oil water boiling.","Vegetable pairing: tender bamboo shoots or local wild eggplant / seasonal hill vegetables.","Dining setting: served over hot local rice on traditional banana leaves / everyday household meal and ethnic food festivals.","Cultural significance: universally revered as the defining culinary soul of indigenous Tripuri culture."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Tripuri Manikya Royal & Tribal Gastronomy (2018)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Mui Borok Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Clean freshwater fish steaks thoroughly under running water, rub with a pinch of turmeric and salt, and set aside. 2. Cut local tender eggplant or bamboo shoots into bite-sized segments; crush fresh ginger, garlic cloves, and green hill chillies coarsely in a mortar. 3. In a small bowl, dissolve 2 tablespoons of traditional berma paste in 1/2 cup of warm water, straining lightly to ensure smooth dispersion. 4. In an earthenware pot or deep saucepan, bring 2.5 cups of filtered spring water to a rolling boil over medium-high heat. 5. Pour the dissolved berma mixture into the boiling water along with crushed ginger, garlic, green chillies, and sea salt, boiling for 5 minutes until intensely fragrant. 6. Add the tender seasonal vegetables into the bubbling broth and cook for 4 minutes until half-cooked. 7. Gently slide the fresh fish steaks into the boiling broth, lower the flame to medium, and simmer uncovered for 6 to 8 minutes until the fish is tender and fully infused. 8. Toss in torn wild coriander leaves (khundrupwi) and fresh lemon basil leaves, remove from heat immediately, cover for 2 minutes to trap the aroma, and serve hot with steamed white rice.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh local river fish (chanda or rohu steaks)","Berma (traditional fermented dried fish paste)","Fresh green hill chillies","Fresh ginger paste","Crushed garlic cloves","Wild coriander leaves (khundrupwi)","Fresh lemon basil leaves","Tender seasonal vegetables (eggplant or bamboo shoots)","Pinch of turmeric powder","Sea salt and spring water"],
      preparationMethod: ["1. Clean freshwater fish steaks thoroughly under running water, rub with a pinch of turmeric and salt, and set aside.","2. Cut local tender eggplant or bamboo shoots into bite-sized segments; crush fresh ginger, garlic cloves, and green hill chillies coarsely in a mortar.","3. In a small bowl, dissolve 2 tablespoons of traditional berma paste in 1/2 cup of warm water, straining lightly to ensure smooth dispersion.","4. In an earthenware pot or deep saucepan, bring 2.5 cups of filtered spring water to a rolling boil over medium-high heat.","5. Pour the dissolved berma mixture into the boiling water along with crushed ginger, garlic, green chillies, and sea salt, boiling for 5 minutes until intensely fragrant.","6. Add the tender seasonal vegetables into the bubbling broth and cook for 4 minutes until half-cooked.","7. Gently slide the fresh fish steaks into the boiling broth, lower the flame to medium, and simmer uncovered for 6 to 8 minutes until the fish is tender and fully infused.","8. Toss in torn wild coriander leaves (khundrupwi) and fresh lemon basil leaves, remove from heat immediately, cover for 2 minutes to trap the aroma, and serve hot with steamed white rice."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Tripuri Manikya Royal & Tribal Gastronomy (2018)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Mui Borok today",
    shortDescription: "Present-day form & serving: Ladled hot with its aromatic zero-oil broth over steaming white rice, accompanied by mashed vegetable chakhwi or fresh mountain salads. Flavour identity: Intensely pungent, deep umami from berma, vibrant citrus notes from lemon basil, with clean, fiery green chilli heat. Variations: Fish Mui Borok, Vegetable Mui Borok with bamboo shoots, and festive dry fish Mui Borok. Recognition: Celebrated as the ultimate gastronomic emblem of Tripura's indigenous heritage, featured in state cultural festivals.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh local river fish (chanda or rohu steaks)","Berma (traditional fermented dried fish paste)","Fresh green hill chillies","Fresh ginger paste","Crushed garlic cloves","Wild coriander leaves (khundrupwi)","Fresh lemon basil leaves","Tender seasonal vegetables (eggplant or bamboo shoots)","Pinch of turmeric powder","Sea salt and spring water"],
      preparationMethod: ["Present-day form & serving: Ladled hot with its aromatic zero-oil broth over steaming white rice, accompanied by mashed vegetable chakhwi or fresh mountain salads.","Flavour identity: Intensely pungent, deep umami from berma, vibrant citrus notes from lemon basil, with clean, fiery green chilli heat.","Variations: Fish Mui Borok, Vegetable Mui Borok with bamboo shoots, and festive dry fish Mui Borok.","Recognition: Celebrated as the ultimate gastronomic emblem of Tripura's indigenous heritage, featured in state cultural festivals."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Tripuri Manikya Royal & Tribal Gastronomy (2018)",
    },
  },
];

export const CHAKHWI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chakhwi in Borok Alkaline Botanical Traditions",
    shortDescription: "Origin in ancient Tripuri botany: Chakhwi is a revered ancestral delicacy of the Borok (Tripuri) people, built around the sophisticated use of natural plant-ash alkaline water known as 'Khar' or 'Khang'. The chemistry of Khar: Plant ash obtained by burning dried pseudo-stems of banana plants or specific wild bamboos is filtered through water, creating an alkaline solution that tenderizes fibrous bamboo shoots and imparts a distinct silky mouthfeel. Zero-oil festive preparation: Cooked entirely without oil, Chakhwi blends tender bamboo shoots, country pork or dried fish, and jackfruit seeds into a deeply satisfying, silky stew. Cooking method: Sliced bamboo shoots and pork are simmered in the khar filtrate with ginger, green chillies, and berma, lightly thickened with a spoonful of rice flour paste.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in ancient Tripuri botany: Chakhwi is a revered ancestral delicacy of the Borok (Tripuri) people, built around the sophisticated use of natural plant-ash alkaline water known as 'Khar' or 'Khang'.","The chemistry of Khar: Plant ash obtained by burning dried pseudo-stems of banana plants or specific wild bamboos is filtered through water, creating an alkaline solution that tenderizes fibrous bamboo shoots and imparts a distinct silky mouthfeel.","Zero-oil festive preparation: Cooked entirely without oil, Chakhwi blends tender bamboo shoots, country pork or dried fish, and jackfruit seeds into a deeply satisfying, silky stew.","Cooking method: Sliced bamboo shoots and pork are simmered in the khar filtrate with ginger, green chillies, and berma, lightly thickened with a spoonful of rice flour paste."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Borok Forest Botanical & Alkaline Culinary Archives (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Alkaline filtrate: traditional banana plant-ash water (khar / khang) / food-grade alkaline cooking extract. Bamboo shoot: freshly harvested tender forest bamboo shoots / garden-fresh bamboo shoots. Protein component: country pork cuts with skin or dried river fish / lean pork or vegetarian jackfruit seed stew. Cooking medium: pure water and khar filtrate with zero cooking oil / traditional zero-oil simmering. Spicing: fresh ginger root, green chillies, and berma / fresh mountain aromatics. Vessel: unglazed earthen pots / heavy stainless steel cookware. Thickening: stone-ground sticky rice paste / fine rice flour slurry. Cultural preservation: cherished as an authentic ceremonial dish served during festivals and family feasts.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Alkaline filtrate: traditional banana plant-ash water (khar / khang) / food-grade alkaline cooking extract.","Bamboo shoot: freshly harvested tender forest bamboo shoots / garden-fresh bamboo shoots.","Protein component: country pork cuts with skin or dried river fish / lean pork or vegetarian jackfruit seed stew.","Cooking medium: pure water and khar filtrate with zero cooking oil / traditional zero-oil simmering.","Spicing: fresh ginger root, green chillies, and berma / fresh mountain aromatics.","Vessel: unglazed earthen pots / heavy stainless steel cookware.","Thickening: stone-ground sticky rice paste / fine rice flour slurry.","Cultural preservation: cherished as an authentic ceremonial dish served during festivals and family feasts."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Borok Forest Botanical & Alkaline Culinary Archives (2019)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Chakhwi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Prepare natural khar filtrate by pouring 1 cup of warm water over clean banana-stem ash in a bamboo sieve, collecting the clear alkaline liquid. 2. Slice tender fresh bamboo shoots into thin 2-inch matchsticks; boil in water for 10 minutes to remove bitterness and drain. 3. Cut pork into bite-sized chunks; peel and halve boiled jackfruit seeds. 4. In an earthenware pot, combine 2 cups of spring water and 1/2 cup of the prepared khar filtrate; bring to a boil over medium heat. 5. Add the pork chunks, fresh ginger paste, slit green chillies, and 1 teaspoon of berma paste (if using), boiling vigorously for 10 minutes until pork starts to soften. 6. Add the blanched bamboo shoots and halved jackfruit seeds, seasoning with sea salt to taste. 7. In a small cup, mix 1 tablespoon of rice flour with 2 tablespoons of water into a smooth paste; stir into the bubbling pot to impart a silky body. 8. Lower heat to medium-low and simmer gently for 8 to 10 minutes until the pork is tender, garnish with wild aromatic leaves, and serve hot with steamed rice.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh tender bamboo shoots (sliced)","Country pork chunks or dried fish","Natural plant-ash alkaline filtrate (khar / khang)","Boiled jackfruit seeds (halved)","Fresh ginger paste","Fresh green chillies","Berma (traditional fermented fish paste)","Wild aromatic mountain leaves","Rice flour paste (for subtle thickening)","Sea salt and spring water"],
      preparationMethod: ["1. Prepare natural khar filtrate by pouring 1 cup of warm water over clean banana-stem ash in a bamboo sieve, collecting the clear alkaline liquid.","2. Slice tender fresh bamboo shoots into thin 2-inch matchsticks; boil in water for 10 minutes to remove bitterness and drain.","3. Cut pork into bite-sized chunks; peel and halve boiled jackfruit seeds.","4. In an earthenware pot, combine 2 cups of spring water and 1/2 cup of the prepared khar filtrate; bring to a boil over medium heat.","5. Add the pork chunks, fresh ginger paste, slit green chillies, and 1 teaspoon of berma paste (if using), boiling vigorously for 10 minutes until pork starts to soften.","6. Add the blanched bamboo shoots and halved jackfruit seeds, seasoning with sea salt to taste.","7. In a small cup, mix 1 tablespoon of rice flour with 2 tablespoons of water into a smooth paste; stir into the bubbling pot to impart a silky body.","8. Lower heat to medium-low and simmer gently for 8 to 10 minutes until the pork is tender, garnish with wild aromatic leaves, and serve hot with steamed rice."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Borok Forest Botanical & Alkaline Culinary Archives (2019)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Chakhwi today",
    shortDescription: "Present-day form & serving: Served piping hot in clay bowls with steamed rice, enjoyed for its soothing, non-greasy, silky broth. Flavour identity: Earthy, silky, mildly alkaline, naturally savoury, with gentle ginger heat and complex bamboo sweetness. Variations: Pork Chakhwi, Dried Fish Chakhwi, Vegetarian Chakhwi with jackfruit seeds and raw papaya. Recognition: Honoured as an ancestral culinary heritage dish of Tripura, showcased at national ethnic food exhibitions.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh tender bamboo shoots (sliced)","Country pork chunks or dried fish","Natural plant-ash alkaline filtrate (khar / khang)","Boiled jackfruit seeds (halved)","Fresh ginger paste","Fresh green chillies","Berma (traditional fermented fish paste)","Wild aromatic mountain leaves","Rice flour paste (for subtle thickening)","Sea salt and spring water"],
      preparationMethod: ["Present-day form & serving: Served piping hot in clay bowls with steamed rice, enjoyed for its soothing, non-greasy, silky broth.","Flavour identity: Earthy, silky, mildly alkaline, naturally savoury, with gentle ginger heat and complex bamboo sweetness.","Variations: Pork Chakhwi, Dried Fish Chakhwi, Vegetarian Chakhwi with jackfruit seeds and raw papaya.","Recognition: Honoured as an ancestral culinary heritage dish of Tripura, showcased at national ethnic food exhibitions."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Borok Forest Botanical & Alkaline Culinary Archives (2019)",
    },
  },
];

export const AWAN_BANGWI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Awan Bangwi in Tripuri Harvest Festivals & Leaf Weaving",
    shortDescription: "Origin in Tripuri harvest celebrations: Awan Bangwi is the supreme festive delicacy of the indigenous Borok people of Tripura, prepared during harvest festivals, family celebrations, and sacred rituals. The art of Lairu leaf cones: The hallmark of Awan Bangwi is the skillful rolling of fresh Lairu leaves (wild banana or mountain turmeric leaves) into tight conical packets that infuse the steaming rice with an enchanting botanical perfume. Fragrant Guria rice: Crafted from indigenous glutinous sticky rice (guria chawal), seasoned delicately with crushed ginger, cashews, raisins, and pork or freshly grated coconut. Cooking method: Cones of seasoned sticky rice are tied securely with fine bamboo twine and boiled submerged in a cauldron of boiling water for over an hour until firm, fragrant, and chewy.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Tripuri harvest celebrations: Awan Bangwi is the supreme festive delicacy of the indigenous Borok people of Tripura, prepared during harvest festivals, family celebrations, and sacred rituals.","The art of Lairu leaf cones: The hallmark of Awan Bangwi is the skillful rolling of fresh Lairu leaves (wild banana or mountain turmeric leaves) into tight conical packets that infuse the steaming rice with an enchanting botanical perfume.","Fragrant Guria rice: Crafted from indigenous glutinous sticky rice (guria chawal), seasoned delicately with crushed ginger, cashews, raisins, and pork or freshly grated coconut.","Cooking method: Cones of seasoned sticky rice are tied securely with fine bamboo twine and boiled submerged in a cauldron of boiling water for over an hour until firm, fragrant, and chewy."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Tripuri Harvest Festival & Leaf Weaving Heritage (2020)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Wrapping leaf: wild mountain Lairu leaves (wild turmeric/banana leaves) / cultivated banana leaves. Rice variety: indigenous harvested Guria sticky rice / local aromatic glutinous rice. Enrichments: country pork bits, dried coconut, and local nuts / cashews, raisins, and grated coconut. Binding material: fine hand-split bamboo strips / food-grade cotton kitchen twine. Boiling vessel: large outdoor iron cauldrons over wood fires / heavy stockpots on domestic gas stoves. Flavoring: fresh hill ginger and green cardamom / ginger, raisins, and cardamom. Serving format: unwrapped fresh from steaming leaf parcels at festivals / served as a specialty heritage delicacy. Cultural preservation: cherished emblem of Tripuri culinary craftsmanship and hospitality.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Wrapping leaf: wild mountain Lairu leaves (wild turmeric/banana leaves) / cultivated banana leaves.","Rice variety: indigenous harvested Guria sticky rice / local aromatic glutinous rice.","Enrichments: country pork bits, dried coconut, and local nuts / cashews, raisins, and grated coconut.","Binding material: fine hand-split bamboo strips / food-grade cotton kitchen twine.","Boiling vessel: large outdoor iron cauldrons over wood fires / heavy stockpots on domestic gas stoves.","Flavoring: fresh hill ginger and green cardamom / ginger, raisins, and cardamom.","Serving format: unwrapped fresh from steaming leaf parcels at festivals / served as a specialty heritage delicacy.","Cultural preservation: cherished emblem of Tripuri culinary craftsmanship and hospitality."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Tripuri Harvest Festival & Leaf Weaving Heritage (2020)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Awan Bangwi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Thoroughly rinse 2 cups of indigenous sticky rice (guria chawal) in cold water and soak for 1 hour; drain completely in a colander. 2. In a wide mixing bowl, combine the drained rice with crushed fresh ginger root, chopped cashews, golden raisins, finely sliced shallots, a pinch of green cardamom, and 1/2 teaspoon of sea salt. 3. Fold in small bite-sized cooked pork chunks or fresh grated coconut, tossing gently to distribute evenly through the rice. 4. Clean fresh Lairu or banana leaves, soften lightly over a gentle flame, and shape each leaf into a tight, leak-proof conical pocket. 5. Spoon the seasoned sticky rice mixture into the leaf cone, filling about three-quarters full to allow room for the rice grains to expand. 6. Fold the top edges of the leaf neatly over the opening to form a compact triangular parcel; bind tightly with fine bamboo twine or cotton string. 7. Bring a large stockpot of water to a rolling boil; gently immerse the wrapped bangwi packets so they are completely submerged. 8. Boil covered on medium heat for 60 to 75 minutes, remove from water with tongs, let drain and cool for 10 minutes, unwrap the fragrant leaf cone, and serve warm.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous sticky rice (guria chawal)","Pork chunks or fresh grated coconut","Crushed fresh ginger root","Chopped cashews and golden raisins","Finely sliced shallots","Pinch of green cardamom powder","Lairu leaves (banana or wild turmeric leaves for wrapping)","Fine bamboo or cotton twine (for binding)","Pinch of sea salt","Filtered spring water (for immersion boiling)"],
      preparationMethod: ["1. Thoroughly rinse 2 cups of indigenous sticky rice (guria chawal) in cold water and soak for 1 hour; drain completely in a colander.","2. In a wide mixing bowl, combine the drained rice with crushed fresh ginger root, chopped cashews, golden raisins, finely sliced shallots, a pinch of green cardamom, and 1/2 teaspoon of sea salt.","3. Fold in small bite-sized cooked pork chunks or fresh grated coconut, tossing gently to distribute evenly through the rice.","4. Clean fresh Lairu or banana leaves, soften lightly over a gentle flame, and shape each leaf into a tight, leak-proof conical pocket.","5. Spoon the seasoned sticky rice mixture into the leaf cone, filling about three-quarters full to allow room for the rice grains to expand.","6. Fold the top edges of the leaf neatly over the opening to form a compact triangular parcel; bind tightly with fine bamboo twine or cotton string.","7. Bring a large stockpot of water to a rolling boil; gently immerse the wrapped bangwi packets so they are completely submerged.","8. Boil covered on medium heat for 60 to 75 minutes, remove from water with tongs, let drain and cool for 10 minutes, unwrap the fragrant leaf cone, and serve warm."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Tripuri Harvest Festival & Leaf Weaving Heritage (2020)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Awan Bangwi today",
    shortDescription: "Present-day form & serving: Served warm, unwrapped at the table to reveal the glistening, leaf-embossed rice cake, enjoyed as a festive delicacy. Flavour identity: Chewy, fragrant, subtly sweet, deeply leaf-perfumed, with nutty crunch from cashews and savory-sweet accents. Variations: Pork Awan Bangwi (savory classic), Coconut Awan Bangwi (vegetarian festive), and simple Guria Bangwi. Recognition: Acclaimed as the crown jewel of Tripuri culinary arts, celebrated during Garia Puja and state tourism events.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous sticky rice (guria chawal)","Pork chunks or fresh grated coconut","Crushed fresh ginger root","Chopped cashews and golden raisins","Finely sliced shallots","Pinch of green cardamom powder","Lairu leaves (banana or wild turmeric leaves for wrapping)","Fine bamboo or cotton twine (for binding)","Pinch of sea salt","Filtered spring water (for immersion boiling)"],
      preparationMethod: ["Present-day form & serving: Served warm, unwrapped at the table to reveal the glistening, leaf-embossed rice cake, enjoyed as a festive delicacy.","Flavour identity: Chewy, fragrant, subtly sweet, deeply leaf-perfumed, with nutty crunch from cashews and savory-sweet accents.","Variations: Pork Awan Bangwi (savory classic), Coconut Awan Bangwi (vegetarian festive), and simple Guria Bangwi.","Recognition: Acclaimed as the crown jewel of Tripuri culinary arts, celebrated during Garia Puja and state tourism events."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Tripuri Harvest Festival & Leaf Weaving Heritage (2020)",
    },
  },
];

export const GALOUTI_KEBAB_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of the Galouti Kebab in the Royal Court of Lucknow (1784 CE)",
    shortDescription: "Royal origin in Awadh: Created in 1784 CE in the royal kitchens of Lucknow for Nawab Asaf-ud-Daula, who lost his teeth in his advancing years but refused to compromise on his passion for succulent kebabs. The secret Potli Masala: Royal Khansamas developed a legendary blend of over 160 secret botanical aromatics, including rose petals, sandalwood, allspice, mace, star anise, and stone flowers (patthar ke phool). Natural tenderization: The meat was minced up to sixteen times on fine granite sil-battas and rested with raw green papaya paste, whose natural enzymes dissolve meat fibers into a paste of velvet smoothness. Cooking method: Infused with live charcoal and clove smoke (dhungar), shaped into delicate patties, and pan-seared in pure desi cow ghee on a concave cast-iron griddle (mahi tawa).",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Royal origin in Awadh: Created in 1784 CE in the royal kitchens of Lucknow for Nawab Asaf-ud-Daula, who lost his teeth in his advancing years but refused to compromise on his passion for succulent kebabs.","The secret Potli Masala: Royal Khansamas developed a legendary blend of over 160 secret botanical aromatics, including rose petals, sandalwood, allspice, mace, star anise, and stone flowers (patthar ke phool).","Natural tenderization: The meat was minced up to sixteen times on fine granite sil-battas and rested with raw green papaya paste, whose natural enzymes dissolve meat fibers into a paste of velvet smoothness.","Cooking method: Infused with live charcoal and clove smoke (dhungar), shaped into delicate patties, and pan-seared in pure desi cow ghee on a concave cast-iron griddle (mahi tawa)."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Royal Awadh Khansama Guild & Lucknow Court Archives (1784 CE)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Mincing technique: sixteen passes on stone sil-batta slabs / commercial heavy-duty meat grinders and food processors. Tenderizer: freshly grated raw green papaya / raw papaya paste or meat tenderizer. Aromatic spicing: hand-tied muslin potli of 160 royal spices / authentic Awadhi galouti spice blends. Smoking fat: live charcoal with cloves and pure desi cow ghee / traditional dhungar method retained by connoisseurs. Cooking griddle: heavy concave cast-iron mahi tawa / heavy cast-iron skillets. Frying fat: pure unpasteurized desi cow ghee / clarified butter or refined oil. Accompaniment: Ulte Tawe ka Paratha and mint chutney / parathas, onion rings, and lime wedges. Global prestige: revered worldwide as the pinnacle of Indian kebab artistry and royal Awadhi culinary heritage.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Mincing technique: sixteen passes on stone sil-batta slabs / commercial heavy-duty meat grinders and food processors.","Tenderizer: freshly grated raw green papaya / raw papaya paste or meat tenderizer.","Aromatic spicing: hand-tied muslin potli of 160 royal spices / authentic Awadhi galouti spice blends.","Smoking fat: live charcoal with cloves and pure desi cow ghee / traditional dhungar method retained by connoisseurs.","Cooking griddle: heavy concave cast-iron mahi tawa / heavy cast-iron skillets.","Frying fat: pure unpasteurized desi cow ghee / clarified butter or refined oil.","Accompaniment: Ulte Tawe ka Paratha and mint chutney / parathas, onion rings, and lime wedges.","Global prestige: revered worldwide as the pinnacle of Indian kebab artistry and royal Awadhi culinary heritage."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Royal Awadh Khansama Guild & Lucknow Court Archives (1784 CE)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Awadhi Galouti Kebab Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. Grind 500g of fine minced mutton or lamb through a meat mincer or on a sil-batta 4 to 5 times until it achieves an ultra-smooth, silky paste. 2. Mix in 2 tablespoons of freshly grated raw green papaya paste and 1 teaspoon of rock salt; knead thoroughly with palms and rest for 30 minutes to tenderize. 3. Add ginger-garlic paste, fried brown onion paste (birista), roasted gram flour (bhuna besan), Kashmiri red chilli powder, and 1.5 tablespoons of royal Awadhi potli masala. 4. Infuse with kewra water, rose water, and saffron strands dissolved in 1 tablespoon of warm milk; knead vigorously for 5 minutes into a cohesive, velvety paste. 5. Place a small metal bowl in the centre of the meat mixture; place a glowing red piece of live charcoal inside, sprinkle 2 cloves and 1/2 teaspoon of ghee over the coal, and instantly seal the container tightly with a lid for 10 minutes for smoke infusion (dhungar). 6. Remove the charcoal bowl; lightly grease palms with ghee, divide the silky mince into lemon-sized portions, and gently flatten into delicate patties. 7. Heat 3 tablespoons of pure desi cow ghee on a concave cast-iron mahi tawa over medium-low heat. 8. Carefully place the delicate patties onto the hot ghee and sear patiently for 2 to 3 minutes on each side without disturbing, until deeply caramelized on the outside while meltingly soft inside; serve hot with Ulte Tawe ka Paratha and mint-coriander chutney.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Finely minced mutton or lamb","Raw green papaya paste (natural tenderizer)","Roasted gram flour (bhuna besan)","Awadhi potli masala (cardamom, mace, nutmeg, star anise)","Pure desi cow ghee","Fried brown onion paste (birista)","Fresh ginger-garlic paste","Kewra and rose water with saffron strands","Kashmiri red chilli powder and rock salt","Live charcoal and cloves (for dhungar smoke infusion)"],
      preparationMethod: ["1. Grind 500g of fine minced mutton or lamb through a meat mincer or on a sil-batta 4 to 5 times until it achieves an ultra-smooth, silky paste.","2. Mix in 2 tablespoons of freshly grated raw green papaya paste and 1 teaspoon of rock salt; knead thoroughly with palms and rest for 30 minutes to tenderize.","3. Add ginger-garlic paste, fried brown onion paste (birista), roasted gram flour (bhuna besan), Kashmiri red chilli powder, and 1.5 tablespoons of royal Awadhi potli masala.","4. Infuse with kewra water, rose water, and saffron strands dissolved in 1 tablespoon of warm milk; knead vigorously for 5 minutes into a cohesive, velvety paste.","5. Place a small metal bowl in the centre of the meat mixture; place a glowing red piece of live charcoal inside, sprinkle 2 cloves and 1/2 teaspoon of ghee over the coal, and instantly seal the container tightly with a lid for 10 minutes for smoke infusion (dhungar).","6. Remove the charcoal bowl; lightly grease palms with ghee, divide the silky mince into lemon-sized portions, and gently flatten into delicate patties.","7. Heat 3 tablespoons of pure desi cow ghee on a concave cast-iron mahi tawa over medium-low heat.","8. Carefully place the delicate patties onto the hot ghee and sear patiently for 2 to 3 minutes on each side without disturbing, until deeply caramelized on the outside while meltingly soft inside; serve hot with Ulte Tawe ka Paratha and mint-coriander chutney."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Royal Awadh Khansama Guild & Lucknow Court Archives (1784 CE)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Awadhi Galouti Kebab today",
    shortDescription: "Present-day form & serving: Served piping hot atop warm, flaky Ulte Tawe ka Paratha, garnished with onion rings, fresh mint sprigs, and lemon wedges. Flavour identity: Silky, melt-in-the-mouth velvet texture, delicate smokiness from clove embers, with opulent floral, sweet, and warm royal spice aromas. Variations: Classic Awadhi Mutton Galouti, Kakori Kebab, and modern vegetarian Rajma Galouti. Recognition: Globally celebrated as an unparalleled triumph of Awadhi gastronomy, acclaimed in international food guides and Michelin-starred restaurants.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Finely minced mutton or lamb","Raw green papaya paste (natural tenderizer)","Roasted gram flour (bhuna besan)","Awadhi potli masala (cardamom, mace, nutmeg, star anise)","Pure desi cow ghee","Fried brown onion paste (birista)","Fresh ginger-garlic paste","Kewra and rose water with saffron strands","Kashmiri red chilli powder and rock salt","Live charcoal and cloves (for dhungar smoke infusion)"],
      preparationMethod: ["Present-day form & serving: Served piping hot atop warm, flaky Ulte Tawe ka Paratha, garnished with onion rings, fresh mint sprigs, and lemon wedges.","Flavour identity: Silky, melt-in-the-mouth velvet texture, delicate smokiness from clove embers, with opulent floral, sweet, and warm royal spice aromas.","Variations: Classic Awadhi Mutton Galouti, Kakori Kebab, and modern vegetarian Rajma Galouti.","Recognition: Globally celebrated as an unparalleled triumph of Awadhi gastronomy, acclaimed in international food guides and Michelin-starred restaurants."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Royal Awadh Khansama Guild & Lucknow Court Archives (1784 CE)",
    },
  },
];

export const BANARASI_KACHORI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Banarasi Kachori Sabzi in Ancient Kashi Morning Traditions",
    shortDescription: "Origin on the Ghats of Varanasi: Banarasi Kachori Sabzi is the sacred, timeless breakfast ritual of Varanasi, perfected across centuries in the labyrinthine alleys (galis) of the ancient city. The unique unpeeled potato sabzi: The accompanying potato curry (aloo sabzi) is simmered with whole unpeeled potatoes in a thin, tangy, spicy gravy flavored with whole fenugreek seeds (methi dana) and asafoetida (hing), cooked strictly without onion or garlic. Urad dal pithi stuffing: The kachori dough is stuffed with a coarsely ground, dry-roasted paste of soaked black gram (urad dal) spiced with fennel, crushed coriander seeds, and dry ginger. Cooking method: Hand-shaped dough pockets are rolled thin and deep-fried in bubbling iron kadhais until golden and puffed, served hot in leaf donas with sabzi and a piece of jalebi.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and earthy.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin on the Ghats of Varanasi: Banarasi Kachori Sabzi is the sacred, timeless breakfast ritual of Varanasi, perfected across centuries in the labyrinthine alleys (galis) of the ancient city.","The unique unpeeled potato sabzi: The accompanying potato curry (aloo sabzi) is simmered with whole unpeeled potatoes in a thin, tangy, spicy gravy flavored with whole fenugreek seeds (methi dana) and asafoetida (hing), cooked strictly without onion or garlic.","Urad dal pithi stuffing: The kachori dough is stuffed with a coarsely ground, dry-roasted paste of soaked black gram (urad dal) spiced with fennel, crushed coriander seeds, and dry ginger.","Cooking method: Hand-shaped dough pockets are rolled thin and deep-fried in bubbling iron kadhais until golden and puffed, served hot in leaf donas with sabzi and a piece of jalebi."],
      heatSource: "Wood-fired hearth or direct traditional embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Varanasi Morning Culinary Rituals & Kashi Halwai Heritage (2019)",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Grinding technique: manual sil-batta coarse dal crushing / electric pulse grinding. Cooking oil: pure cold-pressed mustard oil or desi cow ghee / refined peanut or mustard oil. Vessel: giant cast-iron kadhais over coal-fire bhattis / commercial gas-fired fryers. Serving container: fresh dried Sal or Banyan leaf donas (patravali) / paper bowls or partitioned steel plates. Spice sourcing: stone-ground whole spices and strong Hing from Hathras / packaged spice powders. Sabzi style: rustic watery unpeeled potato curry with methi dana / rich tomato-based spiced aloo curry. Morning accompaniment: hot crisp syrupy jalebis straight from the kadhai / jalebis and kulhad lassi. Cultural longevity: unbroken morning ritual uniting pilgrims, scholars, and locals across centuries in Varanasi.",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving rustic depth while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Grinding technique: manual sil-batta coarse dal crushing / electric pulse grinding.","Cooking oil: pure cold-pressed mustard oil or desi cow ghee / refined peanut or mustard oil.","Vessel: giant cast-iron kadhais over coal-fire bhattis / commercial gas-fired fryers.","Serving container: fresh dried Sal or Banyan leaf donas (patravali) / paper bowls or partitioned steel plates.","Spice sourcing: stone-ground whole spices and strong Hing from Hathras / packaged spice powders.","Sabzi style: rustic watery unpeeled potato curry with methi dana / rich tomato-based spiced aloo curry.","Morning accompaniment: hot crisp syrupy jalebis straight from the kadhai / jalebis and kulhad lassi.","Cultural longevity: unbroken morning ritual uniting pilgrims, scholars, and locals across centuries in Varanasi."],
      heatSource: "Traditional hearth evolved to domestic gas burners",
      vessel: "Seasoned iron and brass evolved to modern cookware",
      documentedCitation: "Varanasi Morning Culinary Rituals & Kashi Halwai Heritage (2019)",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Banarasi Kachori Sabzi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "1. In a mixing bowl, combine 2 cups of whole wheat flour, 2 tablespoons of semolina (sooji), 2 tablespoons of warm melted ghee, and 1/2 teaspoon of salt; knead with water into a smooth, semi-stiff dough, cover, and rest for 20 minutes. 2. Prepare the filling (pithi) by dry-sauteing soaked coarsely ground urad dal in 1 tablespoon of oil with cumin, coarse fennel seeds, coriander powder, asafoetida, red chilli powder, amchur, and salt for 5 minutes until fragrant and crumbly; allow to cool. 3. Prepare the sabzi: in a pot, heat 2 tablespoons of mustard oil; add fenugreek seeds (methi dana), cumin, hing, and grated ginger, sauteing until fenugreek turns golden. 4. Add roughly crushed boiled unpeeled potatoes, turmeric, red chilli powder, coriander powder, and salt, sauteing for 3 minutes to coat the potatoes in spices. 5. Pour in 3 cups of water and chopped green chillies; bring to a vigorous boil, then simmer on medium flame for 15 minutes, mashing a few potato pieces to naturally thicken the gravy, finishing with amchur and fresh coriander. 6. Divide the rested kachori dough into lemon-sized balls, flatten slightly, place a spoonful of the spiced urad dal pithi in the centre, bring the edges together, pinch to seal, and gently roll out into 4-inch discs. 7. Heat mustard oil or ghee in a heavy kadhai over medium flame (160°C–170°C); gently slide in kachoris and press lightly with a skimmer until they puff up fully into crisp golden balloons. 8. Fry patiently for 4 to 5 minutes on both sides until crisp and golden-brown, drain on paper towels, and serve piping hot in leaf donas flooded with hot rasedar aloo sabzi and paired with sweet hot jalebi.",
    culturalContext: "Standardized authentic 8-step culinary methodology.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Whole wheat flour (atta) and fine semolina (sooji)","Split black gram (urad dal, soaked and coarsely ground)","Boiled unpeeled potatoes (aloo)","Pure desi ghee or mustard oil (for dough and frying)","Strong asafoetida (hing)","Fenugreek seeds (methi dana) and cumin seeds","Coarse fennel seeds (saunf) and coriander powder","Dry mango powder (amchur) and fresh ginger","Fresh green chillies and red chilli powder","Rock salt and chopped fresh coriander"],
      preparationMethod: ["1. In a mixing bowl, combine 2 cups of whole wheat flour, 2 tablespoons of semolina (sooji), 2 tablespoons of warm melted ghee, and 1/2 teaspoon of salt; knead with water into a smooth, semi-stiff dough, cover, and rest for 20 minutes.","2. Prepare the filling (pithi) by dry-sauteing soaked coarsely ground urad dal in 1 tablespoon of oil with cumin, coarse fennel seeds, coriander powder, asafoetida, red chilli powder, amchur, and salt for 5 minutes until fragrant and crumbly; allow to cool.","3. Prepare the sabzi: in a pot, heat 2 tablespoons of mustard oil; add fenugreek seeds (methi dana), cumin, hing, and grated ginger, sauteing until fenugreek turns golden.","4. Add roughly crushed boiled unpeeled potatoes, turmeric, red chilli powder, coriander powder, and salt, sauteing for 3 minutes to coat the potatoes in spices.","5. Pour in 3 cups of water and chopped green chillies; bring to a vigorous boil, then simmer on medium flame for 15 minutes, mashing a few potato pieces to naturally thicken the gravy, finishing with amchur and fresh coriander.","6. Divide the rested kachori dough into lemon-sized balls, flatten slightly, place a spoonful of the spiced urad dal pithi in the centre, bring the edges together, pinch to seal, and gently roll out into 4-inch discs.","7. Heat mustard oil or ghee in a heavy kadhai over medium flame (160°C–170°C); gently slide in kachoris and press lightly with a skimmer until they puff up fully into crisp golden balloons.","8. Fry patiently for 4 to 5 minutes on both sides until crisp and golden-brown, drain on paper towels, and serve piping hot in leaf donas flooded with hot rasedar aloo sabzi and paired with sweet hot jalebi."],
      heatSource: "Regulated flame on domestic gas or induction stove",
      vessel: "Heavy-bottomed pot, kadhai, steamer, or tawa as required",
      documentedCitation: "Varanasi Morning Culinary Rituals & Kashi Halwai Heritage (2019)",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Banarasi Kachori Sabzi today",
    shortDescription: "Present-day form & serving: Served piping hot in rustic dried-leaf donas, the crisp puffed kachori cracked open and submerged in hot, spicy, tangy rasedar aloo sabzi, paired with crisp golden jalebis. Flavour identity: Explosively crisp, flaky dough with nutty spiced dal notes, set against a fiery, tangy, fenugreek-scented potato curry with deep hing aromas. Variations: Badi Kachori (served morning), Chhoti Kachori (evening tea-time snack), and Bedmi Puri style kachoris. Recognition: Revered as an iconic cultural breakfast of northern India, documented by national food historians and travel programs.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Whole wheat flour (atta) and fine semolina (sooji)","Split black gram (urad dal, soaked and coarsely ground)","Boiled unpeeled potatoes (aloo)","Pure desi ghee or mustard oil (for dough and frying)","Strong asafoetida (hing)","Fenugreek seeds (methi dana) and cumin seeds","Coarse fennel seeds (saunf) and coriander powder","Dry mango powder (amchur) and fresh ginger","Fresh green chillies and red chilli powder","Rock salt and chopped fresh coriander"],
      preparationMethod: ["Present-day form & serving: Served piping hot in rustic dried-leaf donas, the crisp puffed kachori cracked open and submerged in hot, spicy, tangy rasedar aloo sabzi, paired with crisp golden jalebis.","Flavour identity: Explosively crisp, flaky dough with nutty spiced dal notes, set against a fiery, tangy, fenugreek-scented potato curry with deep hing aromas.","Variations: Badi Kachori (served morning), Chhoti Kachori (evening tea-time snack), and Bedmi Puri style kachoris.","Recognition: Revered as an iconic cultural breakfast of northern India, documented by national food historians and travel programs."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or brass tableware and eco-friendly platters",
      documentedCitation: "Varanasi Morning Culinary Rituals & Kashi Halwai Heritage (2019)",
    },
  },
];


export const BANARASI_MALAIYO_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Banarasi Malaiyo in the Ancient Alleyways of Varanasi",
    shortDescription: "Malaiyo traces its lineage to the ancient dairy culture of Purvanchal and the refined milk foams developed across Awadh and Varanasi. Confectioners in the Chowk and Thatheri Bazar alleys harnessed cold northern winter night temperatures and natural dewfall to chill and aerate rich milk. Historical records associate this seasonal preparation with winter morning rituals along the ghats of the Ganges, where light foam was prized for lightness. The preparation relies on extensive open-air cooling followed by vigorous manual churning before dawn. The Varanasi style is renowned for its golden saffron hue and concentrated sweet milk puddle resting beneath the foam.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Purvanchal: Malaiyo traces its lineage to the ancient dairy culture of Purvanchal and the refined milk foams developed across Awadh and Varanasi.","Artisanal winter craft: Confectioners in the Chowk and Thatheri Bazar alleys harnessed cold northern winter night temperatures and natural dewfall to chill and aerate rich milk.","Seasonal cultural documentation: Historical records associate this seasonal preparation with winter morning rituals along the ghats of the Ganges, where light foam was prized for lightness.","Traditional aeration technique: The preparation relies on extensive open-air cooling followed by vigorous manual churning before dawn, resulting in a golden saffron foam over sweet saffron milk."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Cooling method: open brass vats exposed overnight to night mist and winter dew on rooftops / refrigerated chillers or outdoor ice baths in modern sweet shops Churning equipment: hand-operated grooved wooden churners (mathani / bilona) pulled with ropes / electric immersion blenders and commercial foam whips Vessels for service: unglazed porous terracotta cups (kulhad / purva) / clay kulhads preserved for heritage, alongside lined paper cups and plastic tubs Availability window: strictly three winter months (mid-November to mid-February) / extended winter season in specialized Varanasi and heritage sweet parlours Dairy base: raw unpasteurised local dairy milk blended with fresh heavy clotted cream / standardized high-fat pasteurised buffalo milk with dairy cream Aromatics & colour: pure Kashmiri saffron steeped in warm milk with green cardamom / saffron extracts, edible yellow food colouring, and rose/kewra essence Garnishing: hand-cut green Iranian pistachios and blanched almond slivers / pre-sliced machine nuts and silver vark for festive display Sweetening: raw cane sugar boora or fine batasha powder dissolved slowly / refined granulated white sugar syrup mixed uniformly into the dairy base",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Cooling method: open brass vats exposed overnight to night mist and winter dew on rooftops / refrigerated chillers or outdoor ice baths in modern sweet shops","Churning equipment: hand-operated grooved wooden churners (mathani / bilona) pulled with ropes / electric immersion blenders and commercial foam whips","Vessels for service: unglazed porous terracotta cups (kulhad / purva) / clay kulhads preserved for heritage, alongside lined paper cups and plastic tubs","Availability window: strictly three winter months (mid-November to mid-February) / extended winter season in specialized Varanasi and heritage sweet parlours","Dairy base: raw unpasteurised local dairy milk blended with fresh heavy clotted cream / standardized high-fat pasteurised buffalo milk with dairy cream","Aromatics & colour: pure Kashmiri saffron steeped in warm milk with green cardamom / saffron extracts, edible yellow food colouring, and rose/kewra essence","Garnishing: hand-cut green Iranian pistachios and blanched almond slivers / pre-sliced machine nuts and silver vark for festive display","Sweetening: raw cane sugar boora or fine batasha powder dissolved slowly / refined granulated white sugar syrup mixed uniformly into the dairy base"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Banarasi Malaiyo Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Full-fat cow and buffalo milk, Kashmiri saffron strands, Green cardamom powder, Powdered sugar (boora), Fresh milk cream (malai), Finely slivered pistachios, Finely slivered almonds, Kewra or rose water, Overnight winter morning dew (ambient cool aeration), Yellow food essence or turmeric hue (optional traditional tint)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Full-fat cow and buffalo milk","Kashmiri saffron strands","Green cardamom powder","Powdered sugar (boora)","Fresh milk cream (malai)","Finely slivered pistachios","Finely slivered almonds","Kewra or rose water","Overnight winter morning dew (ambient cool aeration)","Yellow food essence or turmeric hue (optional traditional tint)"],
      preparationMethod: ["1. Boil full-fat milk with fresh cream in a heavy-bottomed pan, simmering until slightly reduced, then dissolve crushed saffron strands and green cardamom powder into the warm mixture.","2. Stir in powdered sugar until completely dissolved, then transfer the flavoured milk into a wide, shallow earthen or brass container.","3. Place the container out in the open on a high rooftop or terrace under the clear winter night sky, allowing natural fog, cool breezes, and dew to chill the milk for 6 to 8 hours.","4. Before sunrise, bring the chilled milk indoors while it is icy cold, adding a couple of drops of fragrant kewra water.","5. Churn the cold saffron milk vigorously using a traditional wooden bilona (mathani) or a chilled electric whisk until a thick, airy, cloud-like frothy foam gathers on the surface.","6. Skim the delicate golden foam gently with a flat perforated spoon and spoon it directly into unglazed earthen clay cups (kulhads).","7. Continue whisking the remaining cold milk in bursts, collecting and layering consecutive waves of light foam until the cups are mounded high.","8. Garnish generously with slivered pistachios and almonds, pour a spoonful of the concentrated saffron-cardamom milk settled at the base, and serve immediately in the cool morning air."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Banarasi Malaiyo today",
    shortDescription: "Served fresh at dawn in earthen kulhads in the bylanes of Chaukhamba and Thatheri Bazar; now also prepared with electric whisks for winter weddings and city festivals across northern India. It is presented in the serving style of Uttar Pradesh, with the delicate, creamy & saffron-infused profile that identifies it. Varanasi's ethereal winter froth: raw milk infused with saffron and sugar, chilled overnight under open morning dew, churned into cloud-light foam and crowned with pistachios and almonds in earthen kulhads.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Full-fat cow and buffalo milk","Kashmiri saffron strands","Green cardamom powder","Powdered sugar (boora)","Fresh milk cream (malai)","Finely slivered pistachios","Finely slivered almonds","Kewra or rose water","Overnight winter morning dew (ambient cool aeration)","Yellow food essence or turmeric hue (optional traditional tint)"],
      preparationMethod: ["Present-day form & serving: Served fresh at dawn in earthen kulhads in the bylanes of Chaukhamba and Thatheri Bazar; now also prepared with electric whisks for winter weddings and city festivals across northern India.","Flavour identity: Delicate, Creamy & Saffron-Infused.","Variations: household, festival, street-stall and restaurant versions differ in sweetness level, foam density and richness of dry fruit toppings.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const KAFULI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Kafuli in the Mountain Terraces of Garhwal and Kumaon",
    shortDescription: "Kafuli has sustained the mountain communities of Garhwal and Kumaon for generations through harsh Himalayan winters and monsoon planting cycles. The dish originated as a wholesome, warming preparation combining locally cultivated hillside spinach and wild mountain greens. Cooked traditionally in heavy cast-iron pots (lohe ki kadhai), the greens absorb dietary iron and take on an unmistakable deep olive-green hue. Thickening with a slurry of ground soaked hill rice or mandua flour provided sustaining energy for agricultural life. Mountain cooks temper the mash with jakhiya (wild cleome seeds), a botanical seasoning unique to the Uttarakhand hills.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Central Himalayas: Kafuli has sustained the mountain communities of Garhwal and Kumaon for generations through harsh Himalayan winters and monsoon planting cycles.","Agrarian sustenance: The dish originated as a wholesome, warming preparation combining locally cultivated hillside spinach and wild mountain greens.","Nutritional & metallurgical tradition: Cooked traditionally in heavy cast-iron pots (lohe ki kadhai), the greens absorb dietary iron and take on an unmistakable deep olive-green hue.","Distinctive mountain seasoning: Thickened with a rice slurry and tempered with crackling jakhiya seeds, Kafuli embodies the minimalist culinary ethos of Uttarakhand."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Cooking vessel: untreated heavy black cast-iron kadhai / stainless steel pans or non-stick cookware in urban domestic kitchens Greens processing: slow hand-mashing with a grooved wooden churner (mathani / dal ghotni) / quick electric blending or food processors Thickening agent (aalam): hand-ground wet hill rice paste soaked on stone querns / commercial white rice flour or roasted gram flour (besan) Tempering seeds: wild mountain jakhiya (Cleome viscosa) harvested from hill roadsides / cumin seeds (jeera) or brown mustard seeds Cooking fuel: pine and oak firewood hearths (chulhas) imparting gentle smokiness / domestic piped natural gas (PNG) and LPG stoves Greens mix: wild native mountain greens (lai, bicchu booti, pahadi palak) / market-bought farm-grown spinach and tender methi bunches Fats used: pure cold-pressed unrefined mustard oil (sarson tel) / refined vegetable cooking oil or clarified cow ghee Service accompaniment: thick hot mandua (finger millet) rotis or red hill rice / warm phulkas, parathas, and polished basmati rice",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Cooking vessel: untreated heavy black cast-iron kadhai / stainless steel pans or non-stick cookware in urban domestic kitchens","Greens processing: slow hand-mashing with a grooved wooden churner (mathani / dal ghotni) / quick electric blending or food processors","Thickening agent (aalam): hand-ground wet hill rice paste soaked on stone querns / commercial white rice flour or roasted gram flour (besan)","Tempering seeds: wild mountain jakhiya (Cleome viscosa) harvested from hill roadsides / cumin seeds (jeera) or brown mustard seeds","Cooking fuel: pine and oak firewood hearths (chulhas) imparting gentle smokiness / domestic piped natural gas (PNG) and LPG stoves","Greens mix: wild native mountain greens (lai, bicchu booti, pahadi palak) / market-bought farm-grown spinach and tender methi bunches","Fats used: pure cold-pressed unrefined mustard oil (sarson tel) / refined vegetable cooking oil or clarified cow ghee","Service accompaniment: thick hot mandua (finger millet) rotis or red hill rice / warm phulkas, parathas, and polished basmati rice"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Kafuli Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Fresh spinach leaves (palak), Fresh fenugreek leaves (methi), Mountain Cleome seeds (jakhiya), Cold-pressed mustard oil, Rice paste or roasted rice flour (aalam), Garlic cloves, Fresh ginger root, Green chillies, Turmeric powder and coriander powder, Asafoetida (hing) and rock salt",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh spinach leaves (palak)","Fresh fenugreek leaves (methi)","Mountain Cleome seeds (jakhiya)","Cold-pressed mustard oil","Rice paste or roasted rice flour (aalam)","Garlic cloves","Fresh ginger root","Green chillies","Turmeric powder and coriander powder","Asafoetida (hing) and rock salt"],
      preparationMethod: ["1. Thoroughly wash fresh spinach and fenugreek leaves in cold running water, trim tough stems, and coarsely chop the greens.","2. In an iron kadhai, boil the greens with a splash of water, green chillies, crushed ginger, sliced garlic, and rock salt until completely wilted and tender (about 7 to 8 minutes).","3. Allow the boiled greens to cool slightly, then mash them coarsely using a wooden mathani or pulse briefly in a blender to retain a rustic, fibrous texture.","4. Return the iron kadhai to low heat with the mashed greens and bring them to a gentle simmer.","5. In a small bowl, whisk soaked rice paste (or rice flour) with water into a smooth, lump-free slurry (aalam), then stir it gradually into the bubbling greens.","6. Add turmeric powder and coriander powder, cooking on low flame for 10 to 12 minutes while stirring continuously until the gravy thickens to a glossy, velvety consistency.","7. In a separate small iron tadka pan, heat pure cold-pressed mustard oil until it reaches smoking point, add asafoetida (hing), and crackle wild jakhiya seeds until nutty and aromatic.","8. Pour the sizzling aromatic tadka directly over the bubbling kafuli, cover immediately with a lid to trap the mountain aromas for 2 minutes, and serve hot with steaming rice or mandua roti."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Kafuli today",
    shortDescription: "Served hot with mandua (finger millet) rotis, hot steamed rice, and fresh bhang ki chutney; now featured in Himalayan heritage retreats, authentic Garhwali home-stays, and regional Pahadi food festivals. It is presented in the serving style of Uttarakhand, with the earthy, velvety & gently spiced profile that identifies it. Uttarakhand's iconic emerald mountain stew: tender leafy spinach and fenugreek greens simmered with garlic and green chillies in an iron kadhai, thickened with a rice-paste slurry, and tempered with crackling jakhiya seeds in cold-pressed mustard oil.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh spinach leaves (palak)","Fresh fenugreek leaves (methi)","Mountain Cleome seeds (jakhiya)","Cold-pressed mustard oil","Rice paste or roasted rice flour (aalam)","Garlic cloves","Fresh ginger root","Green chillies","Turmeric powder and coriander powder","Asafoetida (hing) and rock salt"],
      preparationMethod: ["Present-day form & serving: Served hot with mandua (finger millet) rotis, hot steamed rice, and fresh bhang ki chutney; now featured in Himalayan heritage retreats, authentic Garhwali home-stays, and regional Pahadi food festivals.","Flavour identity: Earthy, Velvety & Gently Spiced.","Variations: household, festival, street-stall and restaurant versions differ in greens ratio (spinach to methi or mustard leaves) and slurry thickness.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const BAL_MITHAI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bal Mithai in the Regal Hill Town of Almora",
    shortDescription: "Bal Mithai originated in the historic cultural capital of Kumaon, Almora, in the early decades of the twentieth century. Confectioner Lala Joga Sah is widely credited with perfecting this distinctive sweet in Almora's Lala Bazar during the British colonial period. The sweet was developed by slow-roasting fresh mawa obtained from hill cattle until the milk sugars naturally caramelized into a rich dark brown chocolate-like shade without any cocoa. To balance the dense, chewy, sweet fudge, it was coated with tiny white sugar globule beads known as dana. The confection became a cherished gift carried by travellers across the Kumaon hills.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Kumaon: Bal Mithai originated in the historic cultural capital of Kumaon, Almora, in the early decades of the twentieth century.","Pioneering confectionery: Confectioner Lala Joga Sah is widely credited with perfecting this distinctive sweet in Almora's Lala Bazar during the British colonial period.","Natural caramelization science: The sweet was developed by slow-roasting fresh mawa obtained from hill cattle until the milk sugars naturally caramelized into a dark brown shade without cocoa.","Signature bead encrusting: Rolled in crunchy white sugar-coated beads (dana), the sweet created an unforgettable tactile contrast between the soft chewy fudge and crisp exterior."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Roasting duration: 6 to 8 hours of patient roasting over low wood embers / 2 to 3 hours in heavy commercial gas-fired iron vessels Caramelization technique: continuous manual stirring with heavy iron spatulas / mechanized tilting planetary sweet-making kettles in large production units Milk source: pure unpasteurised grass-fed Kumaoni hill cow milk / standardized cooperative dairy whole-milk mawa Coating beads: handcrafted sugar-encrusted poppy seeds (khas-khas dana) / homeopathic-style sugar pills or manufactured sugar globule sprinkles Vessels: heavy untreated black iron kadhais ensuring even roasting / food-grade stainless steel jacketed steam pans Fuel: seasoned oak and rhododendron firewood / clean commercial LPG gas burners and electric induction kettles Packaging: traditional wooden boxes lined with parchment paper / moisture-resistant printed cardboard gift boxes with vacuum sealing Distribution: exclusive heritage sweet shops in Almora, Nainital, and Haldwani / statewide railway stalls, highway sweet parlours, and online courier gifting",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Roasting duration: 6 to 8 hours of patient roasting over low wood embers / 2 to 3 hours in heavy commercial gas-fired iron vessels","Caramelization technique: continuous manual stirring with heavy iron spatulas / mechanized tilting planetary sweet-making kettles in large production units","Milk source: pure unpasteurised grass-fed Kumaoni hill cow milk / standardized cooperative dairy whole-milk mawa","Coating beads: handcrafted sugar-encrusted poppy seeds (khas-khas dana) / homeopathic-style sugar pills or manufactured sugar globule sprinkles","Vessels: heavy untreated black iron kadhais ensuring even roasting / food-grade stainless steel jacketed steam pans","Fuel: seasoned oak and rhododendron firewood / clean commercial LPG gas burners and electric induction kettles","Packaging: traditional wooden boxes lined with parchment paper / moisture-resistant printed cardboard gift boxes with vacuum sealing","Distribution: exclusive heritage sweet shops in Almora, Nainital, and Haldwani / statewide railway stalls, highway sweet parlours, and online courier gifting"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Bal Mithai Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Pure full-fat cow milk khoya (mawa), Granulated cane sugar, Water (for syrup), Cardamom powder, Pure desi cow ghee, Tiny white sugar-coated confectionery globules (khas-khas dana), Light sugar syrup (chashni for glazing), Buffalo milk mawa (occasional firming blend), Rose water or kewra extract (subtle aroma), Nutmeg powder (subtle warm undertone)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Pure full-fat cow milk khoya (mawa)","Granulated cane sugar","Water (for syrup)","Cardamom powder","Pure desi cow ghee","Tiny white sugar-coated confectionery globules (khas-khas dana)","Light sugar syrup (chashni for glazing)","Buffalo milk mawa (occasional firming blend)","Rose water or kewra extract (subtle aroma)","Nutmeg powder (subtle warm undertone)"],
      preparationMethod: ["1. Place fresh, crumbled full-fat cow milk khoya in a heavy iron kadhai and warm it over low flame, stirring constantly as it melts into a smooth, glossy mass.","2. Continue roasting the khoya on gentle, even heat for 45 to 60 minutes, turning it continuously from the sides to prevent scorching, until it turns a deep reddish-golden color.","3. Add granulated cane sugar along with a touch of ghee, and continue roasting as the sugar melts, caramelizes, and darkens the mawa to a rich, deep chocolate-brown hue.","4. Stir in finely ground cardamom and a hint of nutmeg powder, cooking until the mixture becomes dense, aromatic, and begins to leave the sides of the pan cleanly.","5. Transfer the hot, molten fudge into a greased rectangular steel tray or wooden setting frame, pressing down firmly with a greased spatula to form a smooth, even 1-inch thick slab.","6. Allow the mawa slab to cool and set completely at room temperature for 3 to 4 hours until firm and sliceable.","7. Cut the set caramelized fudge into neat, bite-sized rectangular pieces using a sharp, greased knife.","8. Lightly brush each fudge block with warm, thin sugar syrup, then roll it immediately in a tray filled with crisp white sugar beads (dana) until evenly coated on all sides."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Bal Mithai today",
    shortDescription: "Packed in traditional souvenir boxes in Almora's Lala Bazar, Nainital, and Ranikhet; now shipped across India as Uttarakhand's most recognizable confectionery gift. It is presented in the serving style of Uttarakhand, with the rich, caramelized & chewy with crunchy sugar coating profile that identifies it. Almora's legendary Kumaoni brown fudge: pure hill-cow milk khoya roasted patiently over embers until deep chocolate-caramelized, formed into solid rectangular blocks, and encrusted in tiny crisp white sugar globules.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Pure full-fat cow milk khoya (mawa)","Granulated cane sugar","Water (for syrup)","Cardamom powder","Pure desi cow ghee","Tiny white sugar-coated confectionery globules (khas-khas dana)","Light sugar syrup (chashni for glazing)","Buffalo milk mawa (occasional firming blend)","Rose water or kewra extract (subtle aroma)","Nutmeg powder (subtle warm undertone)"],
      preparationMethod: ["Present-day form & serving: Packed in traditional souvenir boxes in Almora's Lala Bazar, Nainital, and Ranikhet; now shipped across India as Uttarakhand's most recognizable confectionery gift.","Flavour identity: Rich, Caramelized & Chewy with Crunchy Sugar Coating.","Variations: household, festival, street-stall and restaurant versions differ in roasting depth, sugar proportion and density of white bead coating.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const SINGORI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Singori in the Forest-Clad Valleys of Almora and Kumaon",
    shortDescription: "Singori represents one of the most ingenious marriages of dairy confectionery and Himalayan ethnobotany found in the Kumaon region. Confectioners in old Almora combined concentrated hill-cow milk khoya with grated coconut and sugar to create a luscious, soft-textured fudge. The defining genius of Singori lies in its vessel: it is wrapped in the broad, sturdy leaves of the wild climbing shrub Malu (Bauhinia vahlii). The leaf is rolled into an elegant cone, filled with warm fudge, and sealed with a clove or slender bamboo tooth. As the hot confection rests inside the leaf, the natural tannins and herbal oils seep into the sweet, imparting its signature aroma.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Kumaon: Singori represents one of the most ingenious marriages of dairy confectionery and Himalayan ethnobotany found in the Kumaon region.","Old Almora heritage: Confectioners in old Almora combined concentrated hill-cow milk khoya with grated coconut and sugar to create a soft-textured fudge.","The Malu leaf tradition: It is wrapped in the broad leaves of the wild climbing shrub Malu (Bauhinia vahlii), fashioned into conical cones.","Herbal infusion: As the warm fudge rests inside the cone, the leaf's natural herbal aromas infuse into the sweet while keeping it moist and fresh."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Leaf wrapper: freshly foraged wild Malu leaves (Bauhinia vahlii) gathered from mountain slopes / Malu leaves preserved in moist cloth or occasional parchment substitutes Sweet filling: hand-stirred fresh cow-milk khoya roasted with grated dry coconut / commercial mawa with desiccated coconut flakes Fastening method: whole natural cloves (laung) or slender wooden slivers / toothpicks or decorative food-grade stickers Cooking vessel: shallow heavy brass or iron kadhais / stainless steel halwai vessels over gas ranges Heat source: slow wood-fired bhatti embers / regulated commercial LPG flame Sweetening: raw unrefined sugar crystals or boora / refined granulated white sugar Aromatics: freshly crushed green cardamom pods / commercial cardamom essence and rose water drops Consumption window: enjoyed fresh within 24 to 48 hours for optimal leaf aroma / kept in cool storage for up to 3 to 4 days",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Leaf wrapper: freshly foraged wild Malu leaves (Bauhinia vahlii) gathered from mountain slopes / Malu leaves preserved in moist cloth or occasional parchment substitutes","Sweet filling: hand-stirred fresh cow-milk khoya roasted with grated dry coconut / commercial mawa with desiccated coconut flakes","Fastening method: whole natural cloves (laung) or slender wooden slivers / toothpicks or decorative food-grade stickers","Cooking vessel: shallow heavy brass or iron kadhais / stainless steel halwai vessels over gas ranges","Heat source: slow wood-fired bhatti embers / regulated commercial LPG flame","Sweetening: raw unrefined sugar crystals or boora / refined granulated white sugar","Aromatics: freshly crushed green cardamom pods / commercial cardamom essence and rose water drops","Consumption window: enjoyed fresh within 24 to 48 hours for optimal leaf aroma / kept in cool storage for up to 3 to 4 days"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Singori Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Fresh whole-milk khoya (mawa), Finely grated dry coconut (copra), Granulated cane sugar, Green cardamom powder, Fresh wild Malu leaves (Bauhinia vahlii), Whole cloves (laung for pinning the cone), Pure desi cow ghee, Crushed pistachios or almonds (optional garnish), Kewra or rose water (subtle floral accent), Warm milk (for loosening fudge consistency)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh whole-milk khoya (mawa)","Finely grated dry coconut (copra)","Granulated cane sugar","Green cardamom powder","Fresh wild Malu leaves (Bauhinia vahlii)","Whole cloves (laung for pinning the cone)","Pure desi cow ghee","Crushed pistachios or almonds (optional garnish)","Kewra or rose water (subtle floral accent)","Warm milk (for loosening fudge consistency)"],
      preparationMethod: ["1. Carefully wash fresh Malu leaves in lukewarm water, wipe them completely dry with a soft cloth, trim the stems, and keep them moist under a damp towel.","2. In a heavy-bottomed kadhai, heat a teaspoon of pure desi ghee over low heat and add fresh crumbled khoya.","3. Roast the khoya gently on low flame for 12 to 15 minutes, stirring continuously until it turns a light cream-fawn colour and releases a sweet, rich aroma.","4. Add granulated sugar and finely grated dry coconut, continuing to stir as the sugar dissolves and the coconut absorbs the warm milk fats.","5. Fold in freshly ground green cardamom powder and a few drops of rose water, cooking until the mixture forms a soft, supple, non-sticky fudge mass.","6. Remove the pan from heat and allow the fudge to cool slightly until warm and comfortable to handle.","7. Take a clean Malu leaf, roll it into a neat, tight conical cornet shape, and secure the pointed flap at the bottom with a whole clove.","8. Spoon the warm coconut-khoya fudge generously into the Malu leaf cone, press gently to fill the cavity, level the top, sprinkle with chopped pistachios, and let cool to set."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Singori today",
    shortDescription: "Displayed in tall glass tiers in sweet shops across Almora, Ranikhet, and Tehri Garhwal; served as an artisanal climax to traditional Pahadi celebratory feasts. It is presented in the serving style of Uttarakhand, with the sweet, milky & earthy with forest herbal aroma profile that identifies it. Uttarakhand's delicate conical sweet: slow-cooked khoya enriched with grated coconut and green cardamom, folded gently into a fragrant wild Malu leaf cone that infuses the fudge with a subtle herbal mountain perfume.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh whole-milk khoya (mawa)","Finely grated dry coconut (copra)","Granulated cane sugar","Green cardamom powder","Fresh wild Malu leaves (Bauhinia vahlii)","Whole cloves (laung for pinning the cone)","Pure desi cow ghee","Crushed pistachios or almonds (optional garnish)","Kewra or rose water (subtle floral accent)","Warm milk (for loosening fudge consistency)"],
      preparationMethod: ["Present-day form & serving: Displayed in tall glass tiers in sweet shops across Almora, Ranikhet, and Tehri Garhwal; served as an artisanal climax to traditional Pahadi celebratory feasts.","Flavour identity: Sweet, Milky & Earthy with Forest Herbal Aroma.","Variations: household, festival, street-stall and restaurant versions differ in sweetness, ratio of coconut to khoya, and size of the leaf cones.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const SHORSHE_ILISH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Shorshe Ilish in the Riverine Delta of Bengal",
    shortDescription: "Shorshe Ilish is the definitive monsoon culinary icon across the fertile Gangetic delta and the floodplains of the Padma, Meghna, and Rupnarayan rivers. Bengali domestic lore and riverine literature record the reverence accorded to the arrival of the silvery Hilsa during the rainy season. Culinary historians document how the natural high fat content and delicate sweetness of the fish found its ideal culinary counterbalance in stone-ground mustard paste. Grinding mustard seeds on a traditional shil-nora with green chillies and salt neutralizes bitterness while releasing sharp allyl isothiocyanate aromatics. Tempered in pure pungent mustard oil with nigella seeds, the dish became the gold standard of Bengali hospitality.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Riverine origin: Shorshe Ilish is the definitive monsoon culinary icon across the fertile Gangetic delta and the river systems of Bengal.","Monsoon culinary literature: Bengali records document the deep cultural reverence for the arrival of fresh Hilsa during the monsoon rains.","Mustard grinding balance: The natural fat of the Hilsa is balanced by freshly ground yellow and black mustard seeds stone-ground with salt and chillies.","Pungent mustard oil technique: Simmered briefly and finished with a swirl of raw cold-pressed mustard oil, preserving the fish's tender delicacy."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Grinding technique: fresh mustard ground with chillies on a stone quern (shil-nora) / electric dry-and-wet grinder jars Mustard blend: balanced combination of mild yellow and pungent black mustard seeds / packaged mustard powder or yellow mustard paste Fish cooking style: raw marinated steaks gently slid directly into bubbling gravy / occasional light flash-frying in hot mustard oil Vessels: heavy bell-metal or cast-iron korai / stainless steel and non-stick frying pans Cooking duration: gentle 8 to 10 minute simmer to retain moisture / fast-cooked in pressure cookers or microwave-steamed in tiffin boxes (Bhapa style) Fuel: slow coal or wood earthen unons / domestic piped natural gas and induction stoves Oil grade: pure cold-pressed unrefined kachi ghani mustard oil with intense pungency (jhaal) / blended refined mustard oils Serving custom: served first after rice and dal with piping hot Gobindobhog or Basmati rice / restaurant festive thalis and monsoon food festivals",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Grinding technique: fresh mustard ground with chillies on a stone quern (shil-nora) / electric dry-and-wet grinder jars","Mustard blend: balanced combination of mild yellow and pungent black mustard seeds / packaged mustard powder or yellow mustard paste","Fish cooking style: raw marinated steaks gently slid directly into bubbling gravy / occasional light flash-frying in hot mustard oil","Vessels: heavy bell-metal or cast-iron korai / stainless steel and non-stick frying pans","Cooking duration: gentle 8 to 10 minute simmer to retain moisture / fast-cooked in pressure cookers or microwave-steamed in tiffin boxes (Bhapa style)","Fuel: slow coal or wood earthen unons / domestic piped natural gas and induction stoves","Oil grade: pure cold-pressed unrefined kachi ghani mustard oil with intense pungency (jhaal) / blended refined mustard oils","Serving custom: served first after rice and dal with piping hot Gobindobhog or Basmati rice / restaurant festive thalis and monsoon food festivals"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Shorshe Ilish Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Fresh Hilsa (Ilish) fish steaks, Yellow mustard seeds (shorshe), Black mustard seeds (rai), Pure cold-pressed mustard oil (kachi ghani shorsher tel), Fresh green chillies (slit lengthwise), Nigella seeds (kalo jeere), Turmeric powder (holud), Rock salt or sea salt, Water (to adjust gravy consistency), Whisked curd or sour cream (optional variant in some family styles)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh Hilsa (Ilish) fish steaks","Yellow mustard seeds (shorshe)","Black mustard seeds (rai)","Pure cold-pressed mustard oil (kachi ghani shorsher tel)","Fresh green chillies (slit lengthwise)","Nigella seeds (kalo jeere)","Turmeric powder (holud)","Rock salt or sea salt","Water (to adjust gravy consistency)","Whisked curd or sour cream (optional variant in some family styles)"],
      preparationMethod: ["1. Gently wash the Hilsa fish steaks under cold water, drain thoroughly, and marinate with half a teaspoon of turmeric powder and salt for 10 minutes.","2. Soak yellow and black mustard seeds in warm water with two green chillies and a pinch of salt for 15 minutes, then grind them on a shil-nora or blender into a very smooth, fine paste.","3. Pass the mustard paste through a fine strainer with half a cup of water to discard the coarse black husks, ensuring a smooth, non-bitter gravy.","4. Heat pure cold-pressed mustard oil in a heavy korai until it reaches its aromatic smoking point, then reduce heat and allow it to cool slightly.","5. Add nigella seeds (kalo jeere) and 3 to 4 slit green chillies to the oil, letting them crackle for 30 seconds until fragrant.","6. Pour in the strained mustard paste mixture, remaining turmeric powder, salt, and half a cup of warm water, bringing the gravy to a gentle, steady boil.","7. Gently slide the marinated raw Hilsa steaks into the bubbling mustard gravy, cover with a tight lid, and simmer on medium-low heat for 6 to 8 minutes until the fish is tender.","8. Uncover, flip the fish steaks delicately once, drizzle two tablespoons of raw cold-pressed mustard oil over the top, scatter fresh slit chillies, turn off heat, and rest covered for 5 minutes before serving with hot steamed rice."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Shorshe Ilish today",
    shortDescription: "Served steaming hot alongside fragrant Gobindobhog or aged parboiled rice with green chillies on banana leaves; revered in Kolkata households, heritage club kitchens, and monsoon festivals across West Bengal. It is presented in the serving style of West Bengal, with the pungent, rich & delicately sweet-savory profile that identifies it. The crown jewel of Bengali cuisine: succulent silver Hilsa fish steaks simmered with nigella seeds and green chillies in a pungent stone-ground paste of yellow and black mustard, finished with a raw swirl of cold-pressed mustard oil.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh Hilsa (Ilish) fish steaks","Yellow mustard seeds (shorshe)","Black mustard seeds (rai)","Pure cold-pressed mustard oil (kachi ghani shorsher tel)","Fresh green chillies (slit lengthwise)","Nigella seeds (kalo jeere)","Turmeric powder (holud)","Rock salt or sea salt","Water (to adjust gravy consistency)","Whisked curd or sour cream (optional variant in some family styles)"],
      preparationMethod: ["Present-day form & serving: Served steaming hot alongside fragrant Gobindobhog or aged parboiled rice with green chillies on banana leaves; revered in Kolkata households, heritage club kitchens, and monsoon festivals across West Bengal.","Flavour identity: Pungent, Rich & Delicately Sweet-Savory.","Variations: household, festival, street-stall and restaurant versions differ in pungency level, mustard husk straining, and addition of yoghurt or coconut milk.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const MISHTI_DOI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Mishti Doi in the Earthen Kilns and Dairy Centers of Bengal",
    shortDescription: "Mishti Doi has flourished in Bengal since the eighteenth and nineteenth centuries, with prominent historical origins rooted in Nabadwip (Nadia district) and Bogra. Traditional sweet-makers (moiras) perfected the science of simmering fresh village milk in wide open iron cauldrons until reduced by nearly half. The milk was sweetened with sugar that had been carefully cooked until deeply caramelized, imparting both an amber hue and a toffee-like complexity. When cooled to lukewarm, the milk was seeded with active cultured yoghurt and poured into unglazed porous earthenware pots (bhar). The breathable terracotta walls absorb excess whey during slow incubation, creating a thick, firm, custard-like set.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Bengal dairy centers: Mishti Doi flourished across Bengal from the 18th century, with famed heritage hubs in Nabadwip and Bogra.","Art of reduction: Moira confectioners slow-simmered rich cow and buffalo milk in large cauldrons to concentrate milk solids and natural sugars.","Caramelization chemistry: Cane sugar is cooked until golden caramel, imparting the distinctive amber tone, butterscotch sweetness, and creamy body.","Terracotta absorption science: Fermented in unglazed earthen pots (bhar), the porous clay wicks away excess moisture to yield a dense, sliceable set."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Fermentation vessel: unglazed porous red clay pots (bhar / matir shora) / glass jars, ceramic bowls, or food-grade plastic tubs in commercial retail Incubation method: wrapped in thick jute sacks or woolen blankets in warm hay boxes / commercial temperature-controlled fermentation proofing ovens Caramelization: slow open-pan browning of dry sugar over coal stoves / liquid caramelized sugar syrup or artificial caramel flavours Milk reduction: slow 2-hour boiling in wide shallow iron kadhais until volume halves / addition of condensed milk or milk powder to speed thickening Sweetening: pure caramelized cane sugar or seasonal date palm jaggery (nolen gur) / refined white sugar and commercial jaggery essence Culture: heirloom starter culture (tok doi) maintained by halwai families / commercial freeze-dried yoghurt bacterial cultures Fuel: wood and coal hearths imparting subtle smokiness / LPG gas burners and steam-jacketed dairy tanks Texture finish: thick, sliceable, dense curd holding its shape on a spoon / softer, commercial pourable yoghurt consistency",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Fermentation vessel: unglazed porous red clay pots (bhar / matir shora) / glass jars, ceramic bowls, or food-grade plastic tubs in commercial retail","Incubation method: wrapped in thick jute sacks or woolen blankets in warm hay boxes / commercial temperature-controlled fermentation proofing ovens","Caramelization: slow open-pan browning of dry sugar over coal stoves / liquid caramelized sugar syrup or artificial caramel flavours","Milk reduction: slow 2-hour boiling in wide shallow iron kadhais until volume halves / addition of condensed milk or milk powder to speed thickening","Sweetening: pure caramelized cane sugar or seasonal date palm jaggery (nolen gur) / refined white sugar and commercial jaggery essence","Culture: heirloom starter culture (tok doi) maintained by halwai families / commercial freeze-dried yoghurt bacterial cultures","Fuel: wood and coal hearths imparting subtle smokiness / LPG gas burners and steam-jacketed dairy tanks","Texture finish: thick, sliceable, dense curd holding its shape on a spoon / softer, commercial pourable yoghurt consistency"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Mishti Doi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Full-fat cow and buffalo milk, Granulated cane sugar (for caramelization), Date palm jaggery (nolen gur - seasonal winter variant), Active plain starter curd (tok doi / culture), Crushed green cardamom pods, Porous unglazed terracotta earthen pots (bhar / matka), Water (splash for melting caramel), Full cream (malai - added for extra richness), Bay leaf (boiled briefly during reduction in traditional homes), Crushed pistachios or saffron strands (occasional festive garnish)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Full-fat cow and buffalo milk","Granulated cane sugar (for caramelization)","Date palm jaggery (nolen gur - seasonal winter variant)","Active plain starter curd (tok doi / culture)","Crushed green cardamom pods","Porous unglazed terracotta earthen pots (bhar / matka)","Water (splash for melting caramel)","Full cream (malai - added for extra richness)","Bay leaf (boiled briefly during reduction in traditional homes)","Crushed pistachios or saffron strands (occasional festive garnish)"],
      preparationMethod: ["1. In a wide, heavy-bottomed pan, bring full-fat milk and cream to a boil, then simmer over medium-low heat for 35 to 45 minutes, stirring often, until reduced to nearly half its volume.","2. In a separate saucepan, place half of the sugar with two tablespoons of water over low flame without stirring, allowing the sugar to melt and turn a deep golden-amber caramel.","3. Carefully pour a ladleful of the hot reduced milk into the caramelized sugar, whisking rapidly to integrate the amber caramel smoothly into the dairy.","4. Pour the caramel back into the main pot of reduced milk along with the remaining sugar and crushed cardamom, stirring until fully dissolved, then remove from heat.","5. Allow the sweetened milk to cool until it is lukewarm (approximately 40°C–42°C, comfortable to a finger held in the milk for 10 seconds).","6. Whisk the active starter curd in a small bowl until completely smooth, then gently fold it into the lukewarm milk until thoroughly incorporated.","7. Pour the cultured milk mixture immediately into clean, dry, unglazed terracotta earthen pots (bhars) and cover the tops securely with foil or butter paper.","8. Wrap the earthen pots in a thick towel or blanket and place in a warm, undisturbed dark spot for 6 to 8 hours until fully set, then chill in the refrigerator for 2 hours before serving cold."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Mishti Doi today",
    shortDescription: "Served chilled straight from porous clay bhars at weddings, Durga Puja feasts, and family Sunday lunches across Kolkata; now produced by leading Bengal sweetmakers and exported worldwide in vacuum-sealed earthen pots. It is presented in the serving style of West Bengal, with the caramel-sweet, creamy & gently tangy profile that identifies it. Bengal's iconic terracotta sweet yoghurt: rich full-cream milk simmered to thick reduction, sweetened with golden caramelized sugar or date-palm jaggery, and slow-fermented in porous earthenware pots that produce a dense, sliceable curd.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Full-fat cow and buffalo milk","Granulated cane sugar (for caramelization)","Date palm jaggery (nolen gur - seasonal winter variant)","Active plain starter curd (tok doi / culture)","Crushed green cardamom pods","Porous unglazed terracotta earthen pots (bhar / matka)","Water (splash for melting caramel)","Full cream (malai - added for extra richness)","Bay leaf (boiled briefly during reduction in traditional homes)","Crushed pistachios or saffron strands (occasional festive garnish)"],
      preparationMethod: ["Present-day form & serving: Served chilled straight from porous clay bhars at weddings, Durga Puja feasts, and family Sunday lunches across Kolkata; now produced by leading Bengal sweetmakers and exported worldwide in vacuum-sealed earthen pots.","Flavour identity: Caramel-Sweet, Creamy & Gently Tangy.","Variations: household, festival, street-stall and restaurant versions differ in sweetness, caramel darkness and seasonal use of nolen gur.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const ROSOGOLLA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Banglar Rosogolla in the Confectionery Quarters of Bagbazar",
    shortDescription: "The modern spongy Rosogolla was perfected in Bagbazar, Kolkata, in 1868 by the celebrated Bengali confectioner Nobin Chandra Das. Before this breakthrough, chhana-based sweets were prone to disintegrating when boiled in hot syrup. Through exhaustive experimentation, Nobin Das mastered the precise kneading of fresh cow milk chhana with a minuscule trace of semolina to trap steam within the dough without toughness. Boiling the shaped balls vigorously in rolling, bubbling light sugar syrup caused them to expand dramatically, creating a resilient, spongy internal honeycomb matrix. In 2017, this heritage was officially recognized with the award of the Geographical Indication (GI) tag for 'Banglar Rosogolla'.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Kolkata: The modern spongy Rosogolla was perfected in Bagbazar, Kolkata, in 1868 by the celebrated confectioner Nobin Chandra Das.","Chhana physics breakthrough: Confectioners overcame the tendency of delicate milk curd (chhana) to crumble by developing precise kneading and starch-binding methods.","Rapid boiling expansion: Boiled in rolling light sugar syrup, the spheres expand into an airy, porous honeycomb that traps sweet syrup while maintaining elastic springiness.","Geographical Indication recognition: The distinctive spongy confection earned formal legal recognition as 'Banglar Rosogolla' under India's GI registry in November 2017."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Kneading technique: rhythmic heel-of-the-palm rubbing on marble or stone slabs / mechanized horizontal spiral kneading mixers in modern dairy factories Milk base: strictly pure cow milk yielding soft, fine-grained chhana / standardized mixed milk with regulated fat and acidity percentages Cooking vessel: large wide-mouthed brass or copper karahis over open flames / automated stainless steel boiling vats and pressurized sweet kettles Boiling technique: rolling open boil with continuous addition of hot water to maintain syrup lightness / closed automated steam-jacketed boiling chambers Packaging: unglazed clay handis and earthenware bowls / hermetically sealed tin cans and aseptic thermoformed cups with extended shelf life Fuel: seasoned wood and coal fires generating intense heat / piped industrial natural gas burners and electrical steam generators Aromatics: pure green cardamom pods and natural rose water / food-grade ethyl vanillin, rose essence, and cardamom distillates Serving temperature: freshly boiled warm or room temperature on porcelain saucers / chilled refrigerated portions widely popular today",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Kneading technique: rhythmic heel-of-the-palm rubbing on marble or stone slabs / mechanized horizontal spiral kneading mixers in modern dairy factories","Milk base: strictly pure cow milk yielding soft, fine-grained chhana / standardized mixed milk with regulated fat and acidity percentages","Cooking vessel: large wide-mouthed brass or copper karahis over open flames / automated stainless steel boiling vats and pressurized sweet kettles","Boiling technique: rolling open boil with continuous addition of hot water to maintain syrup lightness / closed automated steam-jacketed boiling chambers","Packaging: unglazed clay handis and earthenware bowls / hermetically sealed tin cans and aseptic thermoformed cups with extended shelf life","Fuel: seasoned wood and coal fires generating intense heat / piped industrial natural gas burners and electrical steam generators","Aromatics: pure green cardamom pods and natural rose water / food-grade ethyl vanillin, rose essence, and cardamom distillates","Serving temperature: freshly boiled warm or room temperature on porcelain saucers / chilled refrigerated portions widely popular today"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Rosogolla Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Pure fresh cow milk, Sour whey or fresh lemon juice (for curdling chhana), Granulated white sugar (for light syrup), Water (for boiling syrup and steeping), Fine semolina (suji - minuscule binding pinch), Green cardamom pods, Rose water or kewra essence, Ice cubes or cold water (for washing chhana), Refined wheat flour (maida - optional dusting pinch), Thin sugar steeping syrup (patla chashni for cooling)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Pure fresh cow milk","Sour whey or fresh lemon juice (for curdling chhana)","Granulated white sugar (for light syrup)","Water (for boiling syrup and steeping)","Fine semolina (suji - minuscule binding pinch)","Green cardamom pods","Rose water or kewra essence","Ice cubes or cold water (for washing chhana)","Refined wheat flour (maida - optional dusting pinch)","Thin sugar steeping syrup (patla chashni for cooling)"],
      preparationMethod: ["1. Bring fresh cow milk to a gentle boil in a heavy pot, turn off the heat, let it rest for 2 minutes, then slowly pour in diluted lemon juice or sour whey until the milk separates into clear greenish whey and soft chhana.","2. Immediately drain the curds through a muslin cloth, rinse thoroughly with chilled water to halt cooking and remove acidity, and hang the cloth for 45 minutes to drain excess moisture without drying out.","3. Transfer the soft, moist chhana onto a clean, flat surface, add a tiny pinch of fine semolina, and knead gently with the heel of the palm for 6 to 8 minutes until silky, pliable, and completely crack-free.","4. Divide the smooth chhana dough into equal marble-sized portions and roll between greased palms into perfectly smooth, glossy, seamless spherical balls.","5. In a wide, deep pan, combine granulated sugar and water (in a 1:4 ratio) with bruised cardamom pods, bringing it to a rapid, rolling boil over high heat to create a very light syrup.","6. Gently drop the chhana balls one by one into the violently bubbling syrup, cover with a tight-fitting lid, and boil vigorously on high heat for 10 minutes undisturbed.","7. Uncover, ladle in half a cup of boiling water along the pan's edges to keep the syrup light and prevent crystallization, cover again, and cook for another 5 minutes until the rosogollas swell to double their size and become buoyant.","8. Test doneness by dropping a rosogolla into a cup of fresh water (it will sink to the bottom if cooked through), turn off heat, stir in a splash of rose water, and let cool completely in light steeping syrup for 4 hours before serving."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Rosogolla today",
    shortDescription: "Served fresh at room temperature in earthenware handis across sweetshops in Kolkata; canned and exported worldwide as India's benchmark dairy confectionery. It is presented in the serving style of West Bengal, with the spongy, juicy & delicately floral-sweet profile that identifies it. Bengal's iconic spongy sweet: pristine cow-milk chhana kneaded with delicate fingertip mastery, shaped into smooth spherical balls, and boiled vigorously in light bubbling sugar syrup until buoyant, porous, and syrup-soaked.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Pure fresh cow milk","Sour whey or fresh lemon juice (for curdling chhana)","Granulated white sugar (for light syrup)","Water (for boiling syrup and steeping)","Fine semolina (suji - minuscule binding pinch)","Green cardamom pods","Rose water or kewra essence","Ice cubes or cold water (for washing chhana)","Refined wheat flour (maida - optional dusting pinch)","Thin sugar steeping syrup (patla chashni for cooling)"],
      preparationMethod: ["Present-day form & serving: Served fresh at room temperature in earthenware handis across sweetshops in Kolkata; canned and exported worldwide as India's benchmark dairy confectionery.","Flavour identity: Spongy, Juicy & Delicately Floral-Sweet.","Variations: household, festival, street-stall and restaurant versions differ in syrup density, sphere size and seasonal infusions like date palm jaggery (Nolen Gur Rosogolla).","Recognition: Officially granted Geographical Indication (GI) status as 'Banglar Rosogolla' (GI Application No. 533) in November 2017."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const DELHI_NIHARI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Nihari in the Royal Quarters of Shahjahanabad",
    shortDescription: "Nihari originated in Old Delhi (Shahjahanabad) during the late Mughal era in the eighteenth century, deriving its name from the Arabic word 'Nahar' (morning). Developed to sustain workers, soldiers, and nobles through freezing winter mornings, it was simmered in massive copper cauldrons (degs) sealed with wheat dough overnight over glowing coal embers. Royal hakeems (physicians) formulated the complex spice mixtures—incorporating long pepper (pipli), fennel, and dried ginger—to stave off colds and fortify digestion. Served immediately following pre-dawn Fajr prayers alongside fresh hot khameeri rotis straight from the tandoor, it became the quintessential street-food anthem of the Jama Masjid and Ballimaran quarters.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Shahjahanabad: Nihari originated in Old Delhi during the late Mughal era, deriving its name from the Arabic word 'Nahar' meaning morning.","Overnight cauldron alchemy: Simmered in massive copper cauldrons (degs) sealed with dough over dying coal embers throughout the cold winter night.","Medicinal spice heritage: Royal court physicians (hakeems) formulated the potli spice mix with long pepper, mace, and dried ginger to build stamina and combat winter chills.","The pre-dawn breakfast ritual: Consumed right after morning Fajr prayers with hot tandoori khameeri rotis in the historic alleys surrounding the Jama Masjid."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Cooking vessel: large hand-hammered tinned copper cauldrons (degs) sealed with atta / stainless steel heavy pots, commercial pressure cookers, and domestic slow-cookers Cooking time: 6 to 8 hours of uninterrupted overnight slow simmering / 1.5 to 2 hours in modern domestic pressure cookers Heat source: low glowing charcoal and wood embers buried under ashes / domestic LPG gas stoves and commercial high-pressure burners Spice infusion: whole spices bundled into an unbleached muslin cloth pouch (potli) / pre-packaged commercial nihari spice powders and pastes Meat selection: traditional beef or goat shank (bong) and whole bone marrow tubes (nalli) / goat meat, lamb shanks, or boneless chicken pieces Thickening method: stone-milled whole wheat flour (atta) roasted and whisked into a thin slurry (aalam) / all-purpose maida or roasted gram flour (besan) Fat separation (tari): separating spicy red oil during cooking and ladling it hot over individual bowls / blended cooking oil skimmed directly Accompaniments: fresh thick leavened tandoor-baked khameeri roti / home-made tawa rotis, naan, or parathas",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Cooking vessel: large hand-hammered tinned copper cauldrons (degs) sealed with atta / stainless steel heavy pots, commercial pressure cookers, and domestic slow-cookers","Cooking time: 6 to 8 hours of uninterrupted overnight slow simmering / 1.5 to 2 hours in modern domestic pressure cookers","Heat source: low glowing charcoal and wood embers buried under ashes / domestic LPG gas stoves and commercial high-pressure burners","Spice infusion: whole spices bundled into an unbleached muslin cloth pouch (potli) / pre-packaged commercial nihari spice powders and pastes","Meat selection: traditional beef or goat shank (bong) and whole bone marrow tubes (nalli) / goat meat, lamb shanks, or boneless chicken pieces","Thickening method: stone-milled whole wheat flour (atta) roasted and whisked into a thin slurry (aalam) / all-purpose maida or roasted gram flour (besan)","Fat separation (tari): separating spicy red oil during cooking and ladling it hot over individual bowls / blended cooking oil skimmed directly","Accompaniments: fresh thick leavened tandoor-baked khameeri roti / home-made tawa rotis, naan, or parathas"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Old Delhi Nihari Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Mutton or beef shank cuts (bong) with bone marrow (nalli), Pure desi ghee or mustard oil, Finely sliced onions (browned to golden crispness), Ginger-garlic paste, Roasted whole-wheat flour or besan slurry (aalam), Nihari potli spice blend (mace, nutmeg, star anise, pipli, cloves), Kashmiri red chilli powder and turmeric, Coriander powder and fennel powder (saunf), Fresh julienned ginger and chopped green chillies, Fresh coriander leaves and juicy lemon wedges",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Mutton or beef shank cuts (bong) with bone marrow (nalli)","Pure desi ghee or mustard oil","Finely sliced onions (browned to golden crispness)","Ginger-garlic paste","Roasted whole-wheat flour or besan slurry (aalam)","Nihari potli spice blend (mace, nutmeg, star anise, pipli, cloves)","Kashmiri red chilli powder and turmeric","Coriander powder and fennel powder (saunf)","Fresh julienned ginger and chopped green chillies","Fresh coriander leaves and juicy lemon wedges"],
      preparationMethod: ["1. In a large, heavy-bottomed pot or copper deg, heat desi ghee over medium flame, add thinly sliced onions, and fry patiently until deeply golden and fragrant.","2. Add the shank meat cuts and marrow bones, searing on high heat for 6 to 8 minutes until browned on all sides and the meat juices are sealed.","3. Add ginger-garlic paste, Kashmiri red chilli powder, turmeric, coriander powder, and salt, frying for 3 to 4 minutes until the oil begins to separate from the masala.","4. Tie the whole spices (pipli, star anise, mace, nutmeg, cloves, and fennel seeds) securely inside a clean muslin cloth square to make the aromatic spice potli.","5. Drop the spice potli into the pot, pour in 6 cups of warm water, bring to a rolling boil, then reduce heat to the lowest setting, cover tightly, and simmer gently for 4 hours until the shank meat is nearly falling off the bone.","6. In a bowl, whisk dry-roasted whole-wheat flour with cold water into a completely lump-free, thin slurry (aalam), then stir it gradually into the simmering stew to build a velvety body.","7. Carefully skim off the floating layer of bright red spiced oil (tari) from the surface and reserve it in a separate bowl to prevent it from being absorbed by the flour.","8. Simmer on lowest heat for an additional 30 minutes, squeeze the juices from the potli before discarding it, ladle the tender meat and rich gravy into bowls, spoon hot reserved tari on top, and garnish with fresh ginger matchsticks, green chillies, coriander, and fresh lemon wedges."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Old Delhi Nihari today",
    shortDescription: "Served at dawn in the historic eateries of Matia Mahal, Jama Masjid, and Ballimaran with hot tandoori khameeri rotis; celebrated across global Mughlai dining rooms as the supreme slow-cooked culinary craft of Delhi. It is presented in the serving style of Delhi, with the robust, fiery & intensely gelatinous profile that identifies it. Old Delhi's legendary pre-dawn breakfast: shank meat and marrow bones slow-simmered overnight in large copper cauldrons with aromatic potli spices, thickened with roasted flour slurry, and topped with spicy tari and fresh ginger.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Mutton or beef shank cuts (bong) with bone marrow (nalli)","Pure desi ghee or mustard oil","Finely sliced onions (browned to golden crispness)","Ginger-garlic paste","Roasted whole-wheat flour or besan slurry (aalam)","Nihari potli spice blend (mace, nutmeg, star anise, pipli, cloves)","Kashmiri red chilli powder and turmeric","Coriander powder and fennel powder (saunf)","Fresh julienned ginger and chopped green chillies","Fresh coriander leaves and juicy lemon wedges"],
      preparationMethod: ["Present-day form & serving: Served at dawn in the historic eateries of Matia Mahal, Jama Masjid, and Ballimaran with hot tandoori khameeri rotis; celebrated across global Mughlai dining rooms as the supreme slow-cooked culinary craft of Delhi.","Flavour identity: Robust, Fiery & Intensely Gelatinous.","Variations: household, festival, street-stall and restaurant versions differ in heat level, gravy viscosity, and proportion of marrow bones (Nalli) vs brain (Maghaz).","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const DELHI_CHAAT_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Papdi Chaat in the Bustling Bazaars of Chandni Chowk",
    shortDescription: "Chaat culture in Delhi reached its zenith in the labyrinthine bazaars of Shahjahanabad, centered around Chandni Chowk, Dariba Kalan, and Khari Baoli. Legend attributes the emergence of spicy, sour street chaat to late seventeenth-century Mughal court directives, which encouraged citizens to consume hot spices and sour tamarind to counteract water impurities during the monsoon. Local street halwais combined brittle deep-fried wheat crisps (papdi) with native pulses, boiled mountain potatoes, and cooling churned curd. The interplay of fiery mint chutney, sweet sundried tamarind pulp (saunth), and digestive black salt created an iconic balance of tastes.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in Shahjahanabad: Chaat culture in Delhi flourished in the bustling markets of Chandni Chowk, Dariba Kalan, and Khari Baoli.","Royal medicinal lore: Folk memory attributes the origin of spiced, acidic chaats to court hakeems recommending sour tamarind and hot spices to ward off seasonal sickness.","The art of contrasting textures: Brittle deep-fried ajwain crackers (papdi) provide structural crunch beneath cool creamy curd and soft starchy tubers.","Flavour architecture: The balance of sweet jaggery, sharp green chilli, sour tamarind, and pungent black salt established Delhi as the chaat capital of India."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Plating surface: hand-stitched dried sal leaf bowls (dona / pattal) / disposable biodegradable plates and commercial glazed porcelain dishes Curd treatment: fresh whole-milk dahi hung in muslin and whisked by hand with sugar / commercial homogenized set curd whisked with electric blenders Sweet chutney base: dried sour mango powder (amchur) or aged tamarind simmered with old dark jaggery and sonth / factory-processed commercial bottled chaat syrups Herbal green chutney: fresh riverbank mint, young coriander, and fiery green chillies stone-ground on stone slabs / mechanized mixer-grinder purées Cracker craft: manual dough rolling and fork-docking before frying in hot ghee or peanut oil / machine-pressed par-fried papdis Spice blending: freshly dry-roasted whole cumin, rock salt, and wild asafoetida hand-pounded in mortars / pre-blended commercial chaat masala boxes Topping flourishes: fresh ruby pomegranate arils, ginger matchsticks, and beetroot curls / fine processed nylon sev and packaged boondi Serving style: assembled live in seconds at curbside carts / self-service chaat counters and modern quick-service restaurant platters",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Plating surface: hand-stitched dried sal leaf bowls (dona / pattal) / disposable biodegradable plates and commercial glazed porcelain dishes","Curd treatment: fresh whole-milk dahi hung in muslin and whisked by hand with sugar / commercial homogenized set curd whisked with electric blenders","Sweet chutney base: dried sour mango powder (amchur) or aged tamarind simmered with old dark jaggery and sonth / factory-processed commercial bottled chaat syrups","Herbal green chutney: fresh riverbank mint, young coriander, and fiery green chillies stone-ground on stone slabs / mechanized mixer-grinder purées","Cracker craft: manual dough rolling and fork-docking before frying in hot ghee or peanut oil / machine-pressed par-fried papdis","Spice blending: freshly dry-roasted whole cumin, rock salt, and wild asafoetida hand-pounded in mortars / pre-blended commercial chaat masala boxes","Topping flourishes: fresh ruby pomegranate arils, ginger matchsticks, and beetroot curls / fine processed nylon sev and packaged boondi","Serving style: assembled live in seconds at curbside carts / self-service chaat counters and modern quick-service restaurant platters"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Chandni Chowk Papdi Chaat Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Crisp fried flour crackers (papdis made with maida and ajwain), Boiled and diced potatoes (aloo), Boiled white chickpeas or sprouted moong (kabuli chana), Thick chilled whisked curd (dahi sweetened with sugar), Tangy sweet tamarind-jaggery chutney (saunth with dry ginger), Spicy fresh green mint-coriander chutney, Roasted cumin powder (bhuna jeera), Black salt (kala namak) and red chilli powder, Crisp gram-flour sev (nylon sev), Fresh pomegranate arils and finely chopped coriander",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Crisp fried flour crackers (papdis made with maida and ajwain)","Boiled and diced potatoes (aloo)","Boiled white chickpeas or sprouted moong (kabuli chana)","Thick chilled whisked curd (dahi sweetened with sugar)","Tangy sweet tamarind-jaggery chutney (saunth with dry ginger)","Spicy fresh green mint-coriander chutney","Roasted cumin powder (bhuna jeera)","Black salt (kala namak) and red chilli powder","Crisp gram-flour sev (nylon sev)","Fresh pomegranate arils and finely chopped coriander"],
      preparationMethod: ["1. In a mixing bowl, combine all-purpose flour, ajwain seeds, melted ghee, and salt, rubbing to a crumbly texture, then knead with cold water into a stiff dough and rest for 20 minutes.","2. Roll the dough thinly, prick thoroughly with a fork to prevent puffing, cut into 2-inch circles, and deep-fry in medium-hot oil until light golden and shatteringly crisp.","3. Whisk cold, fresh full-fat curd with two tablespoons of powdered sugar and a pinch of black salt until silky, rich, and completely smooth, then chill in the refrigerator.","4. Prepare sweet tamarind saunth chutney by simmering seedless tamarind, jaggery, dry ginger powder (sonth), and roasted cumin until thick, glossy, and tangy-sweet.","5. Blend fresh mint leaves, coriander leaves, green chillies, ginger, lemon juice, and rock salt into a vibrant, fiery green chutney.","6. On a broad shallow plate or leaf donaa, arrange 6 to 8 crisp papdis in a single layer, lightly cracking the center of each cracker with your fingertip.","7. Top the crackers evenly with tender boiled diced potatoes and boiled soft chickpeas, seasoning lightly with black salt and roasted cumin powder.","8. Smother generously with cold sweet whisked curd, drizzle both sweet tamarind saunth and spicy green chutney over the curd, and crown with fine crisp sev, ruby pomegranate arils, and fresh chopped coriander."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Chandni Chowk Papdi Chaat today",
    shortDescription: "Served fresh on leaf dona bowls in the packed alleys of Chandni Chowk, Kinari Bazar, and Bengali Market; celebrated across India and worldwide as the gold standard of Delhi's street food culture. It is presented in the serving style of Delhi, with the tangy, sweet, crisp & refreshingly spiced profile that identifies it. Old Delhi's iconic street symphony: crisp ajwain-flavoured flour crackers layered with boiled potatoes and chickpeas, chilled sweet dahi, tangy tamarind saunth, spicy mint chutney, and roasted cumin chaat masala.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Crisp fried flour crackers (papdis made with maida and ajwain)","Boiled and diced potatoes (aloo)","Boiled white chickpeas or sprouted moong (kabuli chana)","Thick chilled whisked curd (dahi sweetened with sugar)","Tangy sweet tamarind-jaggery chutney (saunth with dry ginger)","Spicy fresh green mint-coriander chutney","Roasted cumin powder (bhuna jeera)","Black salt (kala namak) and red chilli powder","Crisp gram-flour sev (nylon sev)","Fresh pomegranate arils and finely chopped coriander"],
      preparationMethod: ["Present-day form & serving: Served fresh on leaf dona bowls in the packed alleys of Chandni Chowk, Kinari Bazar, and Bengali Market; celebrated across India and worldwide as the gold standard of Delhi's street food culture.","Flavour identity: Tangy, Sweet, Crisp & Refreshingly Spiced.","Variations: household, festival, street-stall and restaurant versions differ in curd sweetness, crisp toppings, and addition of dahi bhallas or sprouted lentils.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const JADOH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Jadoh in the Pine Hills of Meghalaya",
    shortDescription: "Jadoh is the undisputed ceremonial centerpiece of the indigenous Khasi community in the rolling pine-forested plateau of Meghalaya. The name derives directly from the Khasi words 'Ja' (cooked rice) and 'Doh' (meat). Historically prepared during milestone community gatherings, sacred clan rituals, and harvest festivals like Nongkrem, Jadoh honours the sacred staple grain—indigenous hill red rice—by cooking it directly in rich rendered pork juices. Unlike plains pulaos that emphasize whole dry spices, authentic Khasi cooking relies on the elemental power of fiery mountain ginger, locally grown Lakadong turmeric, pungent onions, and high-fat pork cuts slow-braised together in a heavy iron or aluminium pot.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Khasi Hills: Jadoh is the foundational ceremonial dish of the indigenous Khasi people across the Khasi and Jaintia Hills of Meghalaya.","Etymological identity: Deriving directly from 'Ja' (rice) and 'Doh' (meat), the dish celebrates the sacred union of highland rice and pork sustenance.","Ritual & festival role: Historically prepared during major clan rites, family gatherings, and community festivals like Shad Suk Mynsiem and Nongkrem.","Indigenous flavour philosophy: Relies on minimal aromatics—fresh hill ginger, wild bay leaves, black pepper, and Lakadong turmeric—allowing the pure meat and rice to shine."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Cooking vessel: large heavy cast-aluminium or black iron pots (degchi) / modern stainless steel cooking vessels and electric rice cookers Heat source: open firewood hearths fueled by pine and oak logs / domestic LPG gas stoves in Shillong homes and commercial burners Rice variety: native unpolished hill red rice (Khaw Khasi / Jaha) / commercially milled local rice varieties or parboiled hill grains Meat quality: indigenous country pork with generous skin and belly fat / butcher-cut commercial farm pork or occasionally broiler chicken Stock richness: slow-rendered bone broth (or ceremonial pig's blood in traditional Jadoh Snam) / light home-made meat stock or hot water Turmeric grade: locally ground high-curcumin Lakadong turmeric / standard commercial packaged turmeric powder Eating setting: intimate pine-wood traditional tea stalls (ja cha) and weekly markets (Iewduh) / modern specialty Khasi restaurants and urban food festivals Accompaniments: fresh Tungrymbai (fermented soybean mash), Dohneiiong, and spicy radish salad / modern onion-chilli salads and bottled pickles",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Cooking vessel: large heavy cast-aluminium or black iron pots (degchi) / modern stainless steel cooking vessels and electric rice cookers","Heat source: open firewood hearths fueled by pine and oak logs / domestic LPG gas stoves in Shillong homes and commercial burners","Rice variety: native unpolished hill red rice (Khaw Khasi / Jaha) / commercially milled local rice varieties or parboiled hill grains","Meat quality: indigenous country pork with generous skin and belly fat / butcher-cut commercial farm pork or occasionally broiler chicken","Stock richness: slow-rendered bone broth (or ceremonial pig's blood in traditional Jadoh Snam) / light home-made meat stock or hot water","Turmeric grade: locally ground high-curcumin Lakadong turmeric / standard commercial packaged turmeric powder","Eating setting: intimate pine-wood traditional tea stalls (ja cha) and weekly markets (Iewduh) / modern specialty Khasi restaurants and urban food festivals","Accompaniments: fresh Tungrymbai (fermented soybean mash), Dohneiiong, and spicy radish salad / modern onion-chilli salads and bottled pickles"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Jadoh Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Indigenous Khasi red hill rice (Jaha / Khaw Khasi), Fresh pork with fat and skin intact (doh sniang), Cold-pressed mustard oil, Finely chopped local shallots or onions, Freshly crushed ginger root, Crushed garlic cloves, Freshly cracked black peppercorns, Ground turmeric powder (Meghalaya Lakadong turmeric), Bay leaves (sla tejpat), Fresh pork broth or rich meat stock",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous Khasi red hill rice (Jaha / Khaw Khasi)","Fresh pork with fat and skin intact (doh sniang)","Cold-pressed mustard oil","Finely chopped local shallots or onions","Freshly crushed ginger root","Crushed garlic cloves","Freshly cracked black peppercorns","Ground turmeric powder (Meghalaya Lakadong turmeric)","Bay leaves (sla tejpat)","Fresh pork broth or rich meat stock"],
      preparationMethod: ["1. Thoroughly wash the indigenous Khasi red rice in cold water until the rinse runs clear, then drain completely in a colander and set aside for 20 minutes.","2. Cut the pork into bite-sized cubes, ensuring each piece contains a balanced layer of skin, succulent fat, and tender meat.","3. Heat mustard oil in a heavy-bottomed iron pot or deep degchi over medium heat until fragrant, then add bay leaves (sla tejpat) and chopped onions.","4. Fry the onions for 4 to 5 minutes until soft and translucent, then add freshly crushed ginger and garlic, sautéing until their raw aroma disappears.","5. Add the pork pieces, Lakadong turmeric powder, cracked black pepper, and salt, stirring vigorously to coat the meat evenly in the aromatics.","6. Sauté the pork on medium flame for 12 to 15 minutes, allowing its natural fats to render out and lightly brown the exterior of the meat.","7. Add the drained red rice into the pot, stirring gently for 2 to 3 minutes so each grain is thoroughly coated in the glistening rendered pork fat and spices.","8. Pour in hot pork broth (in a 1:2 ratio with rice), bring to a rapid boil, then cover with a heavy lid, reduce heat to the lowest setting, and cook for 18 to 20 minutes until the rice is fluffy, tender, and all broth is fully absorbed before resting for 5 minutes."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Jadoh today",
    shortDescription: "Served hot in local Khasi food stalls (ja cha) in Shillong's Bara Bazar (Iewduh) and Police Bazar with Dohneiiong, Tungrymbai, and fermented bamboo chutney; revered across Meghalaya as the state's signature gastronomic pride. It is presented in the serving style of Meghalaya, with the rich, meaty & earthy with peppery warmth profile that identifies it. Meghalaya's iconic Khasi feast: indigenous short-grain hill red rice slow-cooked with succulent fatty pork cuts, ginger, onions, and black pepper, absorbing rich rendered pork stock until every grain is infused with savory depth.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous Khasi red hill rice (Jaha / Khaw Khasi)","Fresh pork with fat and skin intact (doh sniang)","Cold-pressed mustard oil","Finely chopped local shallots or onions","Freshly crushed ginger root","Crushed garlic cloves","Freshly cracked black peppercorns","Ground turmeric powder (Meghalaya Lakadong turmeric)","Bay leaves (sla tejpat)","Fresh pork broth or rich meat stock"],
      preparationMethod: ["Present-day form & serving: Served hot in local Khasi food stalls (ja cha) in Shillong's Bara Bazar (Iewduh) and Police Bazar with Dohneiiong, Tungrymbai, and fermented bamboo chutney; revered across Meghalaya as the state's signature gastronomic pride.","Flavour identity: Rich, Meaty & Earthy with Peppery Warmth.","Variations: household, festival, street-stall and restaurant versions differ in pork-to-rice ratio, inclusion of ceremonial pork blood (Jadoh Snam), or substitution with chicken.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const DOHNEIIONG_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dohneiiong in the Hill Villages of Meghalaya",
    shortDescription: "Dohneiiong is one of the most distinctive and visually striking meat preparations of the Khasi and Jaintia peoples of Meghalaya. Its name is derived from 'Doh' (meat, specifically pork) and 'Nei-iong' (black sesame seeds). The indigenous black sesame grown in the Meghalaya hills is prized for its high oil content, earthy minerality, and intense nutty fragrance. Khasi homemakers developed the technique of dry-roasting the raw black sesame seeds on hot iron griddles until popping, then grinding them on flat stone querns with a little water into a thick, glossy black paste. Simmered patiently with country pork, the sesame oils emulsify with the melting pork fat to produce an unctuous, pitch-black gravy rich in natural nutrients.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Khasi Hills: Dohneiiong is an ancestral pork specialty native to the Khasi and Jaintia communities of Meghalaya.","Etymological significance: Named from 'Doh' (meat/pork) and 'Nei-iong' (black sesame seeds), reflecting its two vital culinary pillars.","Unique sesame processing: Indigenous black sesame seeds are gently dry-toasted to unlock deep nutty aromatics and stone-ground into a rich, jet-black paste.","Nutritive cold-climate alchemy: The combination of sesame plant oils and slow-rendered pork fat provided vital calories and heat in misty Himalayan winters."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Sesame processing: manual dry-toasting in iron pans followed by flat stone quern grinding / electric spice grinders producing smooth paste Cooking vessel: heavy cast-iron or thick-walled cast-aluminium pots / modern stainless steel sauciers and non-stick pans Heat source: gentle firewood hearths over glowing oak and pine embers / domestic LPG gas stoves on low-medium flame Meat selection: traditional locally raised indigenous village pork with thick skin and rich fat / leaner commercial pork chops or belly cuts Aromatic balance: heavy presence of freshly pounded hill ginger and raw green chillies / standard domestic ginger-garlic paste with chilli flakes Gravy body: thick, glossy, clingy charcoal-black sesame sauce coating the meat / looser curried sauce in commercial restaurants Meal role: served as a prime companion to steaming white hill rice or Jadoh / featured in ethnic food platters, tribal pop-up dinners, and Shillong cafes Pairings: fresh local herb salads, boiled greens, and fermented soybean chutney / urban accompaniments of phulkas or modern salads",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Sesame processing: manual dry-toasting in iron pans followed by flat stone quern grinding / electric spice grinders producing smooth paste","Cooking vessel: heavy cast-iron or thick-walled cast-aluminium pots / modern stainless steel sauciers and non-stick pans","Heat source: gentle firewood hearths over glowing oak and pine embers / domestic LPG gas stoves on low-medium flame","Meat selection: traditional locally raised indigenous village pork with thick skin and rich fat / leaner commercial pork chops or belly cuts","Aromatic balance: heavy presence of freshly pounded hill ginger and raw green chillies / standard domestic ginger-garlic paste with chilli flakes","Gravy body: thick, glossy, clingy charcoal-black sesame sauce coating the meat / looser curried sauce in commercial restaurants","Meal role: served as a prime companion to steaming white hill rice or Jadoh / featured in ethnic food platters, tribal pop-up dinners, and Shillong cafes","Pairings: fresh local herb salads, boiled greens, and fermented soybean chutney / urban accompaniments of phulkas or modern salads"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Dohneiiong Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Fresh pork with fat and skin intact (doh sniang), Indigenous black sesame seeds (nei-iong), Cold-pressed mustard oil, Finely sliced onions, Freshly pounded ginger paste, Freshly pounded garlic paste, Green chillies (slit lengthwise), Lakadong turmeric powder, Freshly ground black pepper, Warm water (for adjusting gravy consistency)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Fresh pork with fat and skin intact (doh sniang)","Indigenous black sesame seeds (nei-iong)","Cold-pressed mustard oil","Finely sliced onions","Freshly pounded ginger paste","Freshly pounded garlic paste","Green chillies (slit lengthwise)","Lakadong turmeric powder","Freshly ground black pepper","Warm water (for adjusting gravy consistency)"],
      preparationMethod: ["1. In a dry heavy iron pan over low heat, gently toast the black sesame seeds (nei-iong) for 3 to 4 minutes until they begin to crackle and release a warm, nutty aroma.","2. Transfer the toasted sesame seeds onto a stone quern or small blender, add 3 to 4 tablespoons of warm water, and grind into a thick, smooth, glistening jet-black paste.","3. Cut the pork into bite-sized cubes, ensuring each piece carries a combination of meat, fat, and skin, then rinse and pat dry.","4. Heat mustard oil in a heavy-bottomed pot over medium heat, add the sliced onions and slit green chillies, and sauté for 4 minutes until soft and translucent.","5. Add the pounded ginger paste, garlic paste, Lakadong turmeric powder, and black pepper, stirring continuously for 2 minutes to cook out raw aromatics.","6. Add the pork pieces and rock salt, frying over medium-high heat for 8 to 10 minutes until the exterior of the pork is lightly seared and the fat starts rendering.","7. Stir in the prepared black sesame paste thoroughly, coating every piece of pork until the dish turns dramatically dark and glossy.","8. Pour in one cup of warm water, cover with a tight-fitting lid, reduce heat to low, and simmer gently for 30 to 35 minutes until the pork is meltingly tender and the black sesame gravy is thick, glossy, and clinging to the meat."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Dohneiiong today",
    shortDescription: "Served hot with steamed hill rice or Jadoh at traditional Khasi food joints across Shillong and Jowai; celebrated nationwide as an emblem of Meghalaya's sophisticated, herb-driven tribal gastronomy. It is presented in the serving style of Meghalaya, with the nutty, smoky & deeply savory profile that identifies it. Meghalaya's celebrated black sesame pork curry: tender bite-sized pork cubes braised with crushed mountain ginger, garlic, and chillies in a thick, glistening charcoal-black gravy made from dry-roasted indigenous black sesame seeds.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Fresh pork with fat and skin intact (doh sniang)","Indigenous black sesame seeds (nei-iong)","Cold-pressed mustard oil","Finely sliced onions","Freshly pounded ginger paste","Freshly pounded garlic paste","Green chillies (slit lengthwise)","Lakadong turmeric powder","Freshly ground black pepper","Warm water (for adjusting gravy consistency)"],
      preparationMethod: ["Present-day form & serving: Served hot with steamed hill rice or Jadoh at traditional Khasi food joints across Shillong and Jowai; celebrated nationwide as an emblem of Meghalaya's sophisticated, herb-driven tribal gastronomy.","Flavour identity: Nutty, Smoky & Deeply Savory.","Variations: household, festival, street-stall and restaurant versions differ in gravy thickness, sesame-to-meat ratio, and occasional substitution with chicken or beef.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

export const PUMALOI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pumaloi in the Hearthside Kitchens of the Khasi Hills",
    shortDescription: "Pumaloi is one of the oldest and most revered traditional breakfast and festive rice foods of the Khasi people of Meghalaya. Deeply tied to the agricultural cycle of the wet, mist-shrouded Meghalaya hills, it showcases the Khasi mastery of gentle steam cookery without direct boiling. Indigenous varieties of hill rice are washed, sun-dried, and hand-pounded in heavy wooden pestles into a coarse, grainy flour. Rather than kneading into a dense dough, the flour is delicately moistened with drops of salted water until it reaches the consistency of damp breadcrumbs. Cooked in a unique traditional two-tiered terracotta steamer (khiew ranei / khiew pumaloi) over boiling water, the rising vapor cooks the grains into a tender, porous, and fragrant steamed cake.",
    culturalContext: "Ancient regional heritage and indigenous cooking tradition.",
    flavorProfileSummary: "Authentic, ancestral, wholesome and traditional.",
    generationRecipe: {
      title: "Origin: Birth of the food",
      ingredientsList: [],
      preparationMethod: ["Origin in the Khasi Hills: Pumaloi is an ancient steamed rice staple developed by the Khasi people across the Meghalaya plateau.","Mastery of steam cookery: Perfected to cook native hill rice using gentle steam rather than boiling, preserving the grain's natural aroma and minerals.","The damp-crumb technique: Rather than forming a paste, the flour is rubbed with water droplets into moist crumbs that allow steam to circulate freely.","Two-tier earthen apparatus: Traditionally prepared using a special two-tiered terracotta pot (khiew ranei) with a perforated clay partition over surging boiling water."],
      heatSource: "Traditional wood-fired hearth or embers",
      vessel: "Traditional clay, brass, or seasoned iron cookware",
      documentedCitation: "Regional food writing and historical culinary documentation.",
    },
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Evolution of Food",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription: "Steaming vessel: specialized two-tiered earthenware pots (khiew ranei / khiew pumaloi) / modern metal idli steamers, couscoussieres, or pressure cookers without whistle Grain processing: hand-pounding in heavy wooden mortars (thlong) into coarse flour / modern commercial mechanized flour mills and packaged rice flour Heat source: slow wood-fired hearths (chulhas) fueled by pine and oak wood / clean domestic LPG gas stoves and electric induction cooktops Rice cultivar: locally harvested unpolished Khasi hill rice varieties / commercially available parboiled rice flour or white rice meal Flavor variations: purely savory and minimalist with salt / festive layered variations incorporating freshly grated coconut and cane jaggery Service occasion: family morning breakfast with hot black tea (sha saw) / featured in cultural festivals, Sunday church gatherings, and indigenous heritage markets Texture characteristics: porous, tender, crumbly yet cohesive steamed cake / denser texture when prepared with finely milled commercial flours Accompaniments: traditional Tungrymbai, spicy Dohneiiong, or jadoh / modern butter spreads, tea, and egg curries",
    culturalContext: "Comparative culinary evolution from hearth practices to modern kitchens.",
    flavorProfileSummary: "Transitional adaptation preserving authentic taste while adopting modern precision.",
    generationRecipe: {
      title: "Evolution of Food: Evolution of Food",
      ingredientsList: [],
      preparationMethod: ["Steaming vessel: specialized two-tiered earthenware pots (khiew ranei / khiew pumaloi) / modern metal idli steamers, couscoussieres, or pressure cookers without whistle","Grain processing: hand-pounding in heavy wooden mortars (thlong) into coarse flour / modern commercial mechanized flour mills and packaged rice flour","Heat source: slow wood-fired hearths (chulhas) fueled by pine and oak wood / clean domestic LPG gas stoves and electric induction cooktops","Rice cultivar: locally harvested unpolished Khasi hill rice varieties / commercially available parboiled rice flour or white rice meal","Flavor variations: purely savory and minimalist with salt / festive layered variations incorporating freshly grated coconut and cane jaggery","Service occasion: family morning breakfast with hot black tea (sha saw) / featured in cultural festivals, Sunday church gatherings, and indigenous heritage markets","Texture characteristics: porous, tender, crumbly yet cohesive steamed cake / denser texture when prepared with finely milled commercial flours","Accompaniments: traditional Tungrymbai, spicy Dohneiiong, or jadoh / modern butter spreads, tea, and egg curries"],
      heatSource: "Wood embers and charcoal / domestic LPG gas and induction",
      vessel: "Traditional regional cookware / contemporary domestic equipment",
      documentedCitation: "Comparative regional culinary records documenting modern evolution.",
    },
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Recipe",
    centuryLabel: "Stage 3",
    headline: "Pumaloi Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription: "Indigenous Khasi hill rice (khaw pumaloi / unpolished red or white rice), Cold water (for sprinkling and moistening the flour), Fine sea salt or rock salt (subtle pinch for dough balance), Boiling water (for generating steam in the lower vessel), Freshly grated coconut (traditional sweet festive variation), Finely grated jaggery (optional layered filling in sweet versions), Bamboo mesh or perforated clay disc (siew ranei / internal steam plate), Banana leaves (optional liner for the steamer pot), Fresh whole milk (accompanying tea or drizzle in morning meals), Tungrymbai or spicy pork curry (traditional savory meal accompaniments)",
    culturalContext: "Mastery of authentic cooking techniques, timing, and ingredient balance.",
    flavorProfileSummary: "Perfect harmony of texture, spicing, and traditional aroma.",
    generationRecipe: {
      title: "Recipe: 10 Key Ingredients, 8 Steps",
      ingredientsList: ["Indigenous Khasi hill rice (khaw pumaloi / unpolished red or white rice)","Cold water (for sprinkling and moistening the flour)","Fine sea salt or rock salt (subtle pinch for dough balance)","Boiling water (for generating steam in the lower vessel)","Freshly grated coconut (traditional sweet festive variation)","Finely grated jaggery (optional layered filling in sweet versions)","Bamboo mesh or perforated clay disc (siew ranei / internal steam plate)","Banana leaves (optional liner for the steamer pot)","Fresh whole milk (accompanying tea or drizzle in morning meals)","Tungrymbai or spicy pork curry (traditional savory meal accompaniments)"],
      preparationMethod: ["1. Wash the indigenous Khasi rice thoroughly in cold water, drain, and spread out on a clean cloth to dry completely in the shade for 2 to 3 hours.","2. Grind the dried rice in a heavy mortar or blender into a coarse, sand-like meal (neither too fine like cornstarch nor too coarse like grits).","3. Sieve the flour into a wide mixing bowl, add a light pinch of salt, and mix evenly with your fingertips.","4. Gradually sprinkle cold water a tablespoon at a time over the flour, rubbing and tossing gently with both hands until the flour becomes moist, damp, and crumbly (it should hold its shape when squeezed in your palm, but crumble easily when nudged).","5. Sieve the moist flour through a coarse mesh or colander to break up any large wet clumps and ensure uniform, airy granule distribution.","6. Fill the lower earthen boiling pot (or steamer base) with water and bring it to a vigorous rolling boil to produce a steady stream of steam.","7. Place a perforated clay disc or moistened clean cloth in the upper steamer pot (khiew ranei), loosely spoon in the damp rice flour without pressing or compacting it (optionally layering grated coconut and jaggery in the middle), and level the surface gently.","8. Set the upper pot securely over the boiling base, cover with a tight-fitting clay lid, and steam over medium-high heat for 12 to 15 minutes until fragrant, firm, and fully cooked through before unmoulding onto a warm serving plate."],
      heatSource: "Medium regulated heat on domestic gas stove or hearth",
      vessel: "Heavy-bottomed pan, tawa, kadhai, or steamer as required",
      documentedCitation: "Codified authentic regional recipe documentation.",
    },
  },
  {
    generationNumber: 4,
    eraTitle: "Present day",
    yearRange: "Present day",
    centuryLabel: "Stage IV",
    headline: "Pumaloi today",
    shortDescription: "Served warm at morning tea stalls across Shillong with hot red tea (sha saw), spicy pork curry, or Tungrymbai; cherished at community gatherings and heritage cultural celebrations across Meghalaya. It is presented in the serving style of Meghalaya, with the delicate, earthy & mildly sweet-nutty profile that identifies it. Meghalaya's cherished Khasi steamed staple: coarse indigenous hill rice flour lightly sprinkled with salted water into a moist, crumbly texture, gently steamed in an artisanal two-tier earthen pot until fluffy and aromatic.",
    culturalContext: "Contemporary serving traditions, commercial distribution, and cultural pride.",
    flavorProfileSummary: "Vibrant, celebrated, universally beloved regional classic.",
    generationRecipe: {
      title: "Modern Form, Serving & Recognition: Modern Form & Serving",
      ingredientsList: ["Indigenous Khasi hill rice (khaw pumaloi / unpolished red or white rice)","Cold water (for sprinkling and moistening the flour)","Fine sea salt or rock salt (subtle pinch for dough balance)","Boiling water (for generating steam in the lower vessel)","Freshly grated coconut (traditional sweet festive variation)","Finely grated jaggery (optional layered filling in sweet versions)","Bamboo mesh or perforated clay disc (siew ranei / internal steam plate)","Banana leaves (optional liner for the steamer pot)","Fresh whole milk (accompanying tea or drizzle in morning meals)","Tungrymbai or spicy pork curry (traditional savory meal accompaniments)"],
      preparationMethod: ["Present-day form & serving: Served warm at morning tea stalls across Shillong with hot red tea (sha saw), spicy pork curry, or Tungrymbai; cherished at community gatherings and heritage cultural celebrations across Meghalaya.","Flavour identity: Delicate, Earthy & Mildly Sweet-Nutty.","Variations: household, festival, street-stall and restaurant versions differ in sweetness (plain savory vs jaggery-coconut filled) and grain grind coarseness.","Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources."],
      heatSource: "Modern stovetop or artisanal hearth",
      vessel: "Traditional clay or metal tableware and eco-friendly platters",
      documentedCitation: "Modern regional culinary surveys.",
    },
  },
];

function legacyGenerationsForDish(dishId: string, dish: Dish): GenerationWaypoint[] {
  switch (dishId) {
    case "masala-dosa":
      return DOSA_GENERATIONS;
    case "bisi-bele-bath":
      return BISI_BELE_BATH_GENERATIONS;
    case "hyderabadi-biryani":
      return BIRYANI_GENERATIONS;
    case "hyderabadi-haleem":
      return HALEEM_GENERATIONS;
    case "pesarattu":
      return PESARATTU_GENERATIONS;
    case "vada-pav":
      return VADA_PAV_GENERATIONS;
    case "puran-poli":
      return PURAN_POLI_GENERATIONS;
    case "dhokla":
      return DHOKLA_GENERATIONS;
    case "undhiyu":
      return UNDHIYU_GENERATIONS;
    case "dal-baati-churma":
      return DAL_BAATI_CHURMA_GENERATIONS;
    case "laal-maas":
      return LAAL_MAAS_GENERATIONS;
    case "goan-fish-curry":
      return GOAN_FISH_CURRY_GENERATIONS;
    case "pork-vindaloo":
      return PORK_VINDALOO_GENERATIONS;
    case "bebinca":
      return BEBINCA_GENERATIONS;
    case "ghewar":
      return GHEWAR_GENERATIONS;
    case "indori-poha":
      return INDORI_POHA_GENERATIONS;
    case "bhutte-ka-kees":
      return BHUTTE_KA_KEES_GENERATIONS;
    case "dal-bafla":
      return DAL_BAFLA_GENERATIONS;
    case "avakaya":
      return AVAKAYA_GENERATIONS;
    case "rogan-josh":
      return ROGAN_JOSH_GENERATIONS;
    case "litti-chokha":
      return LITTI_CHOKHA_GENERATIONS;
    case "makki-di-roti-sarson-saag":
      return MAKKI_SARSON_GENERATIONS;
    case "butter-chicken":
      return BUTTER_CHICKEN_GENERATIONS;
    case "amritsari-kulcha":
      return AMRITSARI_KULCHA_GENERATIONS;
    case "dalma":
      return DALMA_GENERATIONS;
    case "chhena-poda":
      return CHHENA_PODA_GENERATIONS;
    case "pakhala":
      return PAKHALA_GENERATIONS;
    case "appam-stew":
      return APPAM_STEW_GENERATIONS;
    case "fish-molee":
      return FISH_MOLEE_GENERATIONS;
    case "puttu":
      return PUTTU_GENERATIONS;
    case "siddu":
      return SIDDU_GENERATIONS;
    case "dhuska":
      return DHUSKA_GENERATIONS;
    case "chilka-roti":
      return CHILKA_ROTI_GENERATIONS;
    case "eromba":
      return EROMBA_GENERATIONS;
    case "singju":
      return SINGJU_GENERATIONS;
    case "sikkimese-momos":
      return SIKKIMESE_MOMOS_GENERATIONS;
    case "gundruk-soup":
      return GUNDRUK_SOUP_GENERATIONS;
    case "chettinad-chicken":
      return CHETTINAD_CHICKEN_GENERATIONS;
    case "idli-sambar":
      return IDLI_SAMBAR_GENERATIONS;
    case "filter-coffee":
      return FILTER_COFFEE_GENERATIONS;
     case "thukpa":
      return THUKPA_GENERATIONS;
    case "bamboo-shoot-pork":
      return BAMBOO_SHOOT_PORK_GENERATIONS;
    case "apong":
      return APONG_GENERATIONS;
    case "pondicherry-fish-curry":
      return PONDICHERRY_FISH_CURRY_GENERATIONS;
    case "koli-kari":
      return KOLI_KARI_GENERATIONS;
    case "thekua":
      return THEKUA_GENERATIONS;
    case "silao-khaja":
      return SILAO_KHAJA_GENERATIONS;
    case "chhattisgarhi-chila":
      return CHHATTISGARHI_CHILA_GENERATIONS;
    case "fara":
      return FARA_GENERATIONS;
    case "bajra-khichdi":
      return BAJRA_KHICHDI_GENERATIONS;
    case "haryanvi-kadhi":
      return HARYANVI_KADHI_GENERATIONS;
    case "haryanvi-churma":
      return HARYANVI_CHURMA_GENERATIONS;
        case "banarasi-malaiyo":
      return BANARASI_MALAIYO_GENERATIONS;
    case "kafuli":
      return KAFULI_GENERATIONS;
    case "bal-mithai":
      return BAL_MITHAI_GENERATIONS;
    case "singori":
      return SINGORI_GENERATIONS;
    case "shorshe-ilish":
      return SHORSHE_ILISH_GENERATIONS;
    case "mishti-doi":
      return MISHTI_DOI_GENERATIONS;
    case "rosogolla":
      return ROSOGOLLA_GENERATIONS;
    case "delhi-nihari":
      return DELHI_NIHARI_GENERATIONS;
    case "delhi-chaat":
      return DELHI_CHAAT_GENERATIONS;
    case "jadoh":
      return JADOH_GENERATIONS;
    case "dohneiiong":
      return DOHNEIIONG_GENERATIONS;
    case "pumaloi":
      return PUMALOI_GENERATIONS;

      
      
    default:
      return generateDynamicGenerationsForDish(dish);
  }
}

export function getGenerationsForDish(dishId: string): GenerationWaypoint[] {
  const history = getDishStageHistory(dishId);
  const photography = getDishPhotography(dishId);
  const allDishes = getAllDishes();
  const dish = allDishes.find((d) => d.id === dishId) || allDishes[0];
  const legacy = legacyGenerationsForDish(dishId, dish);

  if (!history || legacy.length === 0) {
    const stageKeys: StageKey[] = ["origin", "ingredients", "method", "plated"];
    return legacy.slice(0, 4).map((generation, index) => ({
      ...generation,
      generationNumber: index + 1,
      image: historicalStageImageUrl(stageKeys[index], undefined) ?? UNRESOLVED_IMAGE,
    }));
  }

  return history.stages.map((stage) => {
    const source = legacy[Math.min(STAGE_SOURCE_EPOCH[stage.key], legacy.length - 1)];
    const photo = photography ? photography[stage.key] : null;
    const citations = getStageCitations(stage)
      .map((entry) => `${entry.author}, ${entry.title}${entry.year ? ` (${entry.year})` : ""}`)
      .join("; ");

    return {
      generationNumber: stage.number,
      eraTitle: stage.era,
      yearRange: STAGE_YEAR_RANGE[stage.key],
      centuryLabel: stage.eyebrow,
      headline: stage.headline,
      shortDescription: stage.narrative || (stage.details ? stage.details.join("\n") : "") || "",
      image: historicalStageImageUrl(stage.key, photo) ?? UNRESOLVED_IMAGE,
      generationRecipe: {
        recipeName: stage.title,
        historicalCookware: source.generationRecipe.historicalCookware,
        heatSource: source.generationRecipe.heatSource,
        ingredientsList:
          dishId === "hyderabadi-biryani" ||
            dishId === "hyderabadi-haleem" ||
            dishId === "masala-dosa" ||
            dishId === "bisi-bele-bath" ||
            dishId === "vada-pav" ||
            dishId === "puran-poli" ||
            dishId === "dhokla" ||
            dishId === "undhiyu" ||
            dishId === "dal-baati-churma" ||
            dishId === "laal-maas" ||
            dishId === "dalma" ||
            dishId === "chhena-poda" ||
            dishId === "pakhala" ||
            dishId === "goan-fish-curry" ||
            dishId === "pork-vindaloo" ||
            dishId === "bebinca" ||
            dishId === "ghewar" ||
            dishId === "appam-stew" ||
            dishId === "fish-molee" ||

            dishId === "puttu" ||
            dishId === "siddu" ||
            dishId === "dhuska" ||
            dishId === "chilka-roti" ||
            dishId === "eromba" ||
            dishId === "singju" ||
            dishId === "sikkimese-momos" ||
            dishId === "gundruk-soup" ||
            dishId === "chettinad-chicken" ||
            dishId === "idli-sambar" ||
            dishId === "filter-coffee" ||
            dishId === "thukpa" ||
            dishId === "bamboo-shoot-pork" ||
            dishId === "apong" ||
            dishId === "pondicherry-fish-curry" ||
            dishId === "koli-kari" ||
            dishId === "litti-chokha" ||
            dishId === "thekua" ||
            dishId === "silao-khaja" ||
            dishId === "chhattisgarhi-chila" ||
            dishId === "fara" ||
            dishId === "bajra-khichdi" ||
            dishId === "haryanvi-kadhi" ||
            dishId === "haryanvi-churma" ||
            dishId === "banarasi-malaiyo" ||
            dishId === "kafuli" ||
            dishId === "bal-mithai" ||
            dishId === "singori" ||
            dishId === "shorshe-ilish" ||
            dishId === "mishti-doi" ||
            dishId === "rosogolla" ||
            dishId === "delhi-nihari" ||
            dishId === "delhi-chaat" ||
            dishId === "jadoh" ||
            dishId === "dohneiiong" ||
            dishId === "pumaloi" ||
            dishId === "himachali-dham" ||
            dishId === "chana-madra" ||
            dishId === "mizo-bai" ||
            dishId === "sawhchiar" ||
            dishId === "vawksa-rep" ||
            dishId === "naga-smoked-pork" ||
            dishId === "galho" ||
            dishId === "zutho" ||
            dishId === "mui-borok" ||
            dishId === "chakhwi" ||
            dishId === "awan-bangwi" ||
            dishId === "galouti-kebab" ||
            dishId === "banarasi-kachori"



            ? (stage.number === 3 && legacy[2]?.generationRecipe.ingredientsList?.length
              ? legacy[2].generationRecipe.ingredientsList
              : source.generationRecipe.ingredientsList)
            : dishId === "indori-poha" ||
              dishId === "bhutte-ka-kees" ||
              dishId === "dal-bafla" ||
              dishId === "makki-di-roti-sarson-saag" ||
              dishId === "butter-chicken" ||
              dishId === "amritsari-kulcha"
              ? source.generationRecipe.ingredientsList
              : stage.key === "ingredients" && dish.ingredients.length
                ? dish.ingredients
                : source.generationRecipe.ingredientsList,
        preparationMethod:
          (dishId === "hyderabadi-biryani" ||
            dishId === "hyderabadi-haleem" ||
            dishId === "masala-dosa" ||
            dishId === "bisi-bele-bath" ||
            dishId === "vada-pav" ||
            dishId === "puran-poli" ||
            dishId === "dhokla" ||
            dishId === "undhiyu" ||
            dishId === "dal-baati-churma" ||
            dishId === "laal-maas" ||
            dishId === "dalma" ||
            dishId === "chhena-poda" ||
            dishId === "pakhala" ||
            dishId === "goan-fish-curry" ||
            dishId === "pork-vindaloo" ||
            dishId === "bebinca" ||
            dishId === "ghewar" ||
            dishId === "appam-stew" ||
            dishId === "fish-molee" ||
            dishId === "puttu" ||
            dishId === "siddu" ||
            dishId === "chettinad-chicken" ||
            dishId === "idli-sambar" ||
            dishId === "filter-coffee" ||
            dishId === "dhuska" ||
            dishId === "chilka-roti" ||
            dishId === "eromba" ||
            dishId === "singju" ||
            dishId === "sikkimese-momos" ||
            dishId === "gundruk-soup" ||
            dishId === "thukpa" ||
            dishId === "bamboo-shoot-pork" ||
            dishId === "apong" ||
            dishId === "pondicherry-fish-curry" ||
            dishId === "koli-kari" ||
            dishId === "litti-chokha" ||
            dishId === "thekua" ||
            dishId === "silao-khaja" ||
            dishId === "chhattisgarhi-chila" ||
            dishId === "fara" ||
            dishId === "bajra-khichdi" ||
            dishId === "haryanvi-kadhi" ||
            dishId === "haryanvi-churma" ||
            dishId === "banarasi-malaiyo" ||
            dishId === "kafuli" ||
            dishId === "bal-mithai" ||
            dishId === "singori" ||
            dishId === "shorshe-ilish" ||
            dishId === "mishti-doi" ||
            dishId === "rosogolla" ||
            dishId === "delhi-nihari" ||
            dishId === "delhi-chaat" ||
            dishId === "jadoh" ||
            dishId === "dohneiiong" ||
            dishId === "pumaloi" ||
            dishId === "himachali-dham" ||
            dishId === "chana-madra" ||
            dishId === "mizo-bai" ||
            dishId === "sawhchiar" ||
            dishId === "vawksa-rep" ||
            dishId === "naga-smoked-pork" ||
            dishId === "galho" ||
            dishId === "zutho" ||
            dishId === "mui-borok" ||
            dishId === "chakhwi" ||
            dishId === "awan-bangwi" ||
            dishId === "galouti-kebab" ||
            dishId === "banarasi-kachori") &&
           
            stage.number === 3 &&
            legacy[2]?.generationRecipe.preparationMethod
            ? legacy[2].generationRecipe.preparationMethod
            : stage.key === "method"
              ? `${dish.keyTechnique}. ${stage.details[0]}`
              : stage.details[0],
        contemporaryDifference:
          stage.details[stage.details.length - 1] || source.generationRecipe.contemporaryDifference,
      },
      technologicalLeap: stage.details[0],
      documentedCitation:
            dishId === "thekua" ||
        dishId === "dhokla" || dishId === "undhiyu" || dishId === "dal-baati-churma" || dishId === "laal-maas" || dishId === "dalma" || dishId === "chhena-poda" || dishId === "pakhala" || dishId === "goan-fish-curry" || dishId === "pork-vindaloo" || dishId === "bebinca" || dishId === "ghewar" || dishId === "appam-stew" || dishId === "fish-molee" || dishId === "puttu" || dishId === "siddu" || dishId === "chettinad-chicken" || dishId === "idli-sambar" || dishId === "filter-coffee" 
        || dishId === "thukpa" || dishId === "bamboo-shoot-pork" || dishId === "apong" || dishId === "pondicherry-fish-curry" || dishId === "koli-kari" || dishId === "litti-chokha" ||
            dishId === "thekua" ||
            dishId === "silao-khaja" ||
            dishId === "chhattisgarhi-chila" ||
            dishId === "fara" ||
            dishId === "bajra-khichdi" ||
            dishId === "haryanvi-kadhi" ||
            dishId === "haryanvi-churma" ||
            dishId === "banarasi-malaiyo" ||
            dishId === "kafuli" ||
            dishId === "bal-mithai" ||
            dishId === "singori" ||
            dishId === "shorshe-ilish" ||
            dishId === "mishti-doi" ||
            dishId === "rosogolla" ||
            dishId === "delhi-nihari" ||
            dishId === "delhi-chaat" ||
            dishId === "jadoh" ||
            dishId === "dohneiiong" ||
            dishId === "pumaloi" ||
            dishId === "himachali-dham" ||
            dishId === "chana-madra" ||
            dishId === "mizo-bai" ||
            dishId === "sawhchiar" ||
            dishId === "vawksa-rep" ||
            dishId === "naga-smoked-pork" ||
            dishId === "galho" ||
            dishId === "zutho" ||
            dishId === "mui-borok" ||
            dishId === "chakhwi" ||
            dishId === "awan-bangwi" ||
            dishId === "galouti-kebab" || 
             dishId === "banarasi-kachori"
          ? source.documentedCitation
          : citations || "Regional food writing; no securely dated first reference established.",
    } satisfies GenerationWaypoint;
  });
}
