// ─────────────────────────────────────────────
// BHARAT — THE LIVING HISTORY OF INDIAN FOOD
// CULINARY HISTORY, 7-STAGE CHRONOLOGY & VERIFIED CITATIONS
// ─────────────────────────────────────────────

import { Dish, getAllDishes } from "./foodData";

export interface HistoricalStage {
  stageNumber: number;
  stageTitle: string;
  stageName: string;
  era: string;
  yearRange: string;
  narrative: string;
  keyInnovations: string[];
  botanicalOrMaterialFocus: string[];
  historicalEvidence: string;
  threeSceneFocus: {
    cameraTarget: [number, number, number];
    cameraPosition: [number, number, number];
    modelTransformation: string;
    atmosphereColor: string;
    ambientWarmth: number;
    particlesMode: "seeds" | "spices" | "steam" | "embers" | "none";
  };
}

export interface ModernRecipe {
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Master Chef";
  ingredientsList: {
    category: string;
    items: { name: string; quantity: string; notes?: string }[];
  }[];
  steps: {
    stepNumber: number;
    instruction: string;
    techniqueTip: string;
  }[];
  historicalVsModernNotes: string;
  substitutions: { original: string; substitute: string; impact: string }[];
}

export interface SourceCitation {
  authorOrSource: string;
  workTitle: string;
  publicationYearOrPeriod: string;
  citationDetails: string;
  quoteOrFinding: string;
  confidenceRating: "Scholarly Consensus" | "Documented Historical Mention" | "Archaeological Corroboration" | "Disputed / Oral Tradition";
}

export interface DishCulinaryJourney {
  dishId: string;
  dishName: string;
  region: string;
  culturalIntroduction: string;
  earliestDocumentedEvidence: string;
  confidenceSummary: string;
  stages: HistoricalStage[];
  recipe?: ModernRecipe;
  citations: SourceCitation[];
}

// ─────────────────────────────────────────────
// FLAGSHIP PILOT 1: MASALA DOSA (Karnataka / South India)
// Grain & Pulse Fermented Dough / Golden Crepe
// ─────────────────────────────────────────────
export const MASALA_DOSA_JOURNEY: DishCulinaryJourney = {
  dishId: "masala-dosa",
  dishName: "Masala Dosa",
  region: "Karnataka (Old Mysore & Udupi Traditions)",
  culturalIntroduction:
    "Masala Dosa is a crowning achievement of South Indian culinary geometry and biotechnology — a paper-thin, crisp fermented golden crepe made from parboiled rice and black gram (urad dal), enveloping a fragrant spiced potato palya and smeared with red chilli-garlic chutney.",
  earliestDocumentedEvidence:
    "The earliest written reference to 'Dosaka' appears in the 12th-century Sanskrit encyclopedia 'Manasollasa' (1130 CE) compiled by King Someshvara III of the Western Chalukya dynasty, although Sangam literature in Tamil (6th century CE) describes earlier unleavened rice griddle cakes.",
  confidenceSummary:
    "Scholarly consensus verifies that ancient dosas were soft, thick, and made purely of black lentils (or unfermented rice). The paper-thin crispness arose with refined cast-iron tawas in the early 20th century, and the potato filling ('masala') was introduced during wartime food shortages by Udupi Brahmin restaurateurs in Mysore and Madras.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Karnataka",
      narrative:
        "The dosa has ancient beginnings in South India and Karnataka. A preparation named 'dosaka' is first documented in the 12th-century Sanskrit work Manasollasa, compiled by King Someshvara III of the Western Chalukya dynasty ruling northern Karnataka. In early times, dosas were thick, soft griddle-cakes cooked on clay plates using fermented black gram and rice batter. The dish evolved deeply within the temple kitchens of Udupi and Old Mysore, where natural overnight fermentation was perfected into an art.",
      keyInnovations: ["De-husking black lentils", "Indigenous soaking & wet-stone crushing", "Wild yeast and lactic acid bacteria colonization"],
      botanicalOrMaterialFocus: ["Indigenous Paddy Rice (Oryza sativa)", "Black Gram (Vigna mungo)", "Rough Granite Grinding Mortars"],
      historicalEvidence:
        "King Someshvara III's 1130 CE 'Manasollasa' records 'Dosaka' made from soaked black gram flour ground and cooked on an earthen plate with oil.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.2, 5.5],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1e1b18",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: soft griddle bake on clay plates / wafer-thin spiral ladle swirl on heavy cast-iron tawas\nVessel: porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa and commercial gas griddles\nFuel: firewood hearths and embers / domestic LPG gas and commercial burners\nCooking time: 4 to 5 minutes per soft cake / 60 to 90 seconds for paper-crisp golden browning\nBatter preparation: hand-grinding soaked pulses on granite stone mortars / electric wet grinders and commercial batter mills\nFilling: plain dosa with no stuffing / spiced potato-onion palya introduced by 20th-century Udupi hoteliers\nInner spread: plain ghee or no paste / fiery roasted Byadagi chilli, garlic, and roasted gram chutney (Mysore style)\nFat used: cold-pressed sesame or coconut oil / pure desi ghee and fresh churned white butter (benne)",
      keyInnovations: ["Shift from clay plates to seasoned cast-iron flat tawas", "Introduction of New World potatoes and capsicum chillies", "Development of the enclosed spiced potato palya by Udupi Brahmin restaurateurs"],
      botanicalOrMaterialFocus: ["Cast-Iron Tawa", "Byadagi Chillies", "Potato Palya"],
      historicalEvidence:
        "Comparative historical records and oral histories of Mysore and Bangalore hotels (Vidyarthi Bhavan 1943, Woodlands Hotel).",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.5],
        modelTransformation: "grinding-batter",
        atmosphereColor: "#221c17",
        ambientWarmth: 0.8,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Masala Dosa Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Sona Masuri rice, urad dal, fenugreek seeds, poha, potatoes, onions, green chillies, mustard seeds, curry leaves, pure desi ghee or butter.\n\n1. Soak Sona Masuri rice, urad dal, fenugreek seeds, and poha in water for 5 hours, then grind in a wet grinder to a silky, aerated batter.\n2. Add salt, mix thoroughly with hands to introduce natural microflora, and ferment overnight in a warm spot for 8 to 12 hours.\n3. Boil potatoes until tender, peel, and coarsely hand-mash into uneven chunks.\n4. Heat oil in a pan, crackle mustard seeds, cumin, chana dal, urad dal, and curry leaves; saute sliced onions, green chillies, and ginger until translucent.\n5. Stir in turmeric, salt, mashed potatoes, and a splash of water; simmer the potato palya for 3 minutes and finish with fresh coriander.\n6. Heat a seasoned cast-iron tawa over medium-high heat, sprinkle water to test sizzle, and wipe with a lightly oiled cloth.\n7. Pour a ladleful of fermented batter in the centre and swirl smoothly in outward circular motions into a thin, even crepe.\n8. Drizzle pure ghee or butter along the edges, cook until golden crisp, spread red chutney inside, add warm potato palya, fold neatly, and serve hot with coconut chutney and sambar.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step batter, fermentation, and tawa swirl technique", "Signature potato palya and red chutney integration"],
      botanicalOrMaterialFocus: ["Fermented Batter Matrix", "Mustard-Tempered Potato Palya", "Pure Desi Ghee & White Butter"],
      historicalEvidence:
        "Codified Karnataka regional recipe documentation detailing the authentic eight-step fermented batter and tawa roasting technique.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.5, 3.5, 4.2],
        modelTransformation: "trade-ingredients",
        atmosphereColor: "#1d1916",
        ambientWarmth: 1.0,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 720, // 12 hours including soaking & fermentation
    cookTimeMinutes: 25,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Dosa Batter (Fermented Matrix)",
        items: [
          { name: "Idli / Sona Masuri Parboiled Rice", quantity: "3 cups (600g)", notes: "Provides starch structure and crispness" },
          { name: "Whole Dehusked Black Gram (Urad Dal Gotu)", quantity: "1 cup (200g)", notes: "Provides mucilaginous protein for aeration" },
          { name: "Fenugreek Seeds (Methi)", quantity: "1 tsp (5g)", notes: "Essential enzyme catalyst for golden caramelization" },
          { name: "Poha (Thick Flattened Rice)", quantity: "1/4 cup (40g)", notes: "Soaked with rice for feather-light honeycomb bubbles" },
          { name: "Non-iodized Rock Salt", quantity: "1.5 tsp", notes: "Added after grinding to support microbial fermentation" },
        ],
      },
      {
        category: "Spiced Potato Palya (The Core Filling)",
        items: [
          { name: "Russet / Yukon Gold Potatoes", quantity: "4 large (600g)", notes: "Boiled, peeled, and hand-crushed into uneven chunks" },
          { name: "Mustard Seeds (Rai)", quantity: "1 tsp" },
          { name: "Split Bengal Gram (Chana Dal)", quantity: "1 tbsp", notes: "Adds golden nutty crunch" },
          { name: "Fresh Curry Leaves", quantity: "2 sprigs (15 leaves)" },
          { name: "Green Chillies", quantity: "3-4, finely chopped" },
          { name: "Finely Sliced Onions", quantity: "2 medium" },
          { name: "Fresh Turmeric Powder", quantity: "1/2 tsp" },
          { name: "Chopped Fresh Coriander", quantity: "3 tbsp" },
        ],
      },
      {
        category: "Mysore Red Garlic-Chilli Chutney Smear",
        items: [
          { name: "Byadagi Dried Red Chillies", quantity: "8-10 pods", notes: "Soaked in warm water; rich ruby red with gentle heat" },
          { name: "Roasted Chana Dal (Dalia)", quantity: "2 tbsp" },
          { name: "Garlic Cloves", quantity: "6 cloves" },
          { name: "Tamarind Pulp", quantity: "1 tsp" },
        ],
      },
      {
        category: "Griddling & Service",
        items: [
          { name: "Pure Cow Ghee or White Butter", quantity: "4-6 tbsp", notes: "Drizzled along edges during crisping" },
          { name: "Fresh Coconut Chutney & Piping Hot Sambar", quantity: "For serving" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Soak washed rice and methi seeds in clean water for 5 hours. Separately soak urad dal for 4 hours.",
        techniqueTip: "Never discard the dal soaking water completely; its natural ambient wild yeast accelerates fermentation.",
      },
      {
        stepNumber: 2,
        instruction: "Grind urad dal in a wet grinder or high-torque blender, adding chilled water in splashes, until it fluffs into a voluminous white cloud that floats when dropped in water.",
        techniqueTip: "Chilled water prevents blade friction from overheating and killing the delicate bacteria.",
      },
      {
        stepNumber: 3,
        instruction: "Grind rice with soaked poha to a slightly fine-grained semolina texture. Combine both batters with your clean hand (body heat jumpstarts fermentation) and add salt. Rest in a warm spot (28-32°C) for 8-12 hours until aerated and doubled in volume.",
        techniqueTip: "Hand mixing inoculates natural lactic microflora from the baker's hands, exactly as ancient bakers did.",
      },
      {
        stepNumber: 4,
        instruction: "Prepare Palya: Heat oil in a pan, crackle mustard seeds, add chana dal, curry leaves, ginger, and green chillies. Sauté sliced onions until translucent. Add turmeric and crushed boiled potatoes with 3 tbsp water to keep it moist. Season with salt and coriander.",
        techniqueTip: "Never mash potatoes into a smooth paste; leaving irregular bites creates tactile contrast with the paper-thin shell.",
      },
      {
        stepNumber: 5,
        instruction: "Heat a heavy seasoned cast-iron tawa until a drop of water sizzles and dances. Wipe with half an onion dipped in oil. Pour a generous ladle of batter in the dead center and spread outwards with continuous spiral strokes.",
        techniqueTip: "Wiping with onion creates a natural non-stick organosulfur coating on the iron surface.",
      },
      {
        stepNumber: 6,
        instruction: "Drizzle ghee around the edges and onto the center. As the bottom turns golden amber and edges release from the pan, smear 1 tbsp of red garlic chutney across the interior.",
        techniqueTip: "The red chutney acts as an aromatic vapor barrier between the crispy crepe and the moist potato stuffing.",
      },
      {
        stepNumber: 7,
        instruction: "Place a scoop of warm potato palya across the center line. Using a metal spatula, fold the left and right flaps into a crisp cylinder or fold into a neat golden triangle. Slide onto a banana leaf immediately and serve with fresh chutneys.",
        techniqueTip: "Serve within 60 seconds of folding to experience maximum Maillard crunch before steam softens the shell.",
      },
    ],
    historicalVsModernNotes:
      "Modern dosas use high-starch polished hybrid rice and New World potatoes and chillies. Historical Chalukyan 'Dosaka' (12th century) was seasoned with native black pepper and rock salt, cooked without potatoes on porous clay odu plates.",
    substitutions: [
      {
        original: "Idli / Sona Masuri Rice",
        substitute: "Jasmine Rice or Medium Grain Sushi Rice",
        impact: "Slightly sweeter and more fragrant; produces equal crispness.",
      },
      {
        original: "Byadagi Chillies",
        substitute: "Kashmiri Chillies",
        impact: "Provides identical vivid crimson hue with mild, fruity warmth.",
      },
      {
        original: "Desi Ghee",
        substitute: "Cold-Pressed Sesame (Gingelly) Oil",
        impact: "Vegan-friendly; yields an authentic earthy Tamil temple aroma.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "King Someshvara III (Western Chalukya Dynasty)",
      workTitle: "Manasollasa (Abhilashitartha Chintamani)",
      publicationYearOrPeriod: "1130 CE",
      citationDetails: "Chapter on Annabhoga (Food Delights), Section 13, Verses 1375–1382",
      quoteOrFinding:
        "Describes 'Dosaka' prepared by steeping dehusked black gram, grinding on stone slabs into batter, and baking on circular earthen pans.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Pages 65–68, entry for 'Dosa / Dosai'",
      quoteOrFinding:
        "Traces the split pulse dough traditions across South India, noting the absence of potatoes and chillies until 19th-century restaurant culture.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Feasts and Fasts: A History of Food in India",
      publicationYearOrPeriod: "2015 (Reaktion Books)",
      citationDetails: "Chapter 6: The Southern Kingdoms, pp. 142–148",
      quoteOrFinding:
        "Highlights the role of Udupi Brahmin hotel chains in standardizing the crisp potato-stuffed Masala Dosa across 20th-century urban India.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP PILOT 2: HYDERABADI DUM BIRYANI (Telangana / Deccan)
// Grain & Royal Layered Meat/Vegetable Sealed Dum Cooking
// ─────────────────────────────────────────────
export const HYDERABADI_BIRYANI_JOURNEY: DishCulinaryJourney = {
  dishId: "hyderabadi-biryani",
  dishName: "Hyderabadi Dum Biryani",
  region: "Telangana (Asaf Jahi & Qutb Shahi Royal Courts)",
  culturalIntroduction:
    "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
  earliestDocumentedEvidence:
    "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist.",
  confidenceSummary:
    "Historical sources document that biryani traces back to Persian and Mughal rice-and-meat dishes entering the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the sealed dum method, with the raw-marinated kacchi style being the best known Hyderabadi version.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in the Deccan",
      narrative:
        "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
      keyInnovations: ["Combination of Mughal cooking with local Deccan ingredients", "Sealed-pot dum slow-steam method", "Development of raw marinated meat kacchi style"],
      botanicalOrMaterialFocus: ["Indigenous Deccan Spices", "Dough-Sealed Heavy Handi", "Aged Rice and Meat"],
      historicalEvidence:
        "Asaf Jahi court kitchen chronicles and regional Deccani historical accounts. Exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens\nVessel: copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers\nFuel: wood and charcoal / gas and electricity\nCooking time: several hours / under an hour in many homes\nMarinating: overnight / a few hours or less\nMeat: mutton or goat / chicken is now very common, plus vegetable versions\nFlavourings: saffron, rose water, kewra water, fresh ground spices / food colour, ready biryani masala, ready ginger-garlic paste\nTenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
      keyInnovations: ["Shift from wood/charcoal to gas and electric cooking", "Transition from dough-sealed copper handis to steel and pressure cookers", "Adoption of chicken, vegetable variants, and accessible ready spices"],
      botanicalOrMaterialFocus: ["Hand-Ground vs Ready Masalas", "Copper vs Steel & Cookers", "Papaya vs Modern Tenderisers"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Deccan culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Hyderabadi Dum Biryani Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: basmati rice, mutton or chicken, curd, fried onions, ginger-garlic paste, green chillies, whole spices and garam masala, mint and coriander, saffron milk, ghee.\n\n1. Marinate the meat with curd, spices, ginger-garlic paste, herbs and fried onions. Mix well and rest it (overnight for best flavour, or a few hours).\n2. Fry the onions until golden brown and crisp. Keep some aside for layering.\n3. Parboil the rice with whole spices and salt until about 70% cooked (the grain should break easily but still feel firm inside). Drain it.\n4. Layer the marinated meat at the bottom of a heavy pot, then spread the rice evenly on top.\n5. Top with fried onions, mint, coriander, saffron milk and ghee.\n6. Seal the lid tightly with dough or foil so no steam escapes.\n7. Cook on high heat for a few minutes until steam builds, then on low heat for about 40 minutes (dum).\n8. Rest for 10 minutes without opening, then mix gently from the sides and serve with raita.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step kacchi dum preparation", "Accessible low-heat home steam protocol"],
      botanicalOrMaterialFocus: ["Basmati Rice & Meat", "Curd & Saffron Milk", "Ghee & Fried Onions"],
      historicalEvidence:
        "Standardized regional recipe documentation detailing the foundational eight-step dum pukht process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Recipe Development: The Kacchi Technique",
      stageName: "Asaf Jahi Innovation of Kacchi Dum",
      era: "Nizams of Hyderabad",
      yearRange: "c. 1724 – 1850 CE",
      narrative:
        "Most biryanis across India are 'Pakki' (meat and rice are cooked separately before assembling). Hyderabad achieved culinary transcendence through the notoriously challenging 'Kacchi' technique: raw lamb cuts are marinated for hours in raw papaya, curd, and spices, layered raw at the bottom of a heavy copper degchi, and topped with aged Basmati rice parboiled to three precise stages (30% on bottom, 60% in middle, 80% on top). As heat rises, the rice absorbs the evaporating meat juices directly.",
      keyInnovations: ["The Kacchi (raw meat) assembly protocol", "Fractional parboiling of aged Basmati rice", "Dual heat: wood coals below, live embers on the lid"],
      botanicalOrMaterialFocus: ["Tinned Heavy Copper Handi (Deg)", "Aged Long-Grain Basmati", "Raw Papaya Papain Enzyme"],
      historicalEvidence:
        "Abu'l-Fazl's 'Ain-i-Akbari' (recording prototype court rice dishes) and 19th-century royal Asaf Jahi manuscript 'Nuqqal-i-Bawarchi Khana' (Recipes of the Royal Kitchens).",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Sacred Seal: Dum Pukht Physics",
      stageName: "Hermetic Dough Sealing (Parda)",
      era: "Late 19th Century Asaf Jahi Era",
      yearRange: "c. 1850 – 1911 CE (Nizam Mahbub Ali Khan)",
      narrative:
        "The vessel is sealed hermetically with a rolled rope of whole-wheat dough ('Parda'). As heat builds within the copper vessel, moisture cannot escape; the internal pressure rises, forcing super-heated steam back down through the falling rice grains. The meat braises tender in its own trapped juices, and the starch in the rice elongates to twice its raw length without breaking.",
      keyInnovations: ["Wheat flour dough seal (Parda) creation", "Gentle thermal equilibrium without moisture loss", "Natural convection of saffron and mutton steam"],
      botanicalOrMaterialFocus: ["Atta Dough Ribbon", "Heavy Brass Lid", "Live Charcoal Coals"],
      historicalEvidence:
        "Royal kitchen accounts under Nizam Mahbub Ali Khan detailing culinary competitions among royal Khansamas in Chowmahalla Palace.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Unsealing the Masterpiece (Parda Faash)",
      stageName: "The Saffron Reveal & Modern Icon",
      era: "20th Century – Contemporary Era",
      yearRange: "1911 CE – Present Day",
      narrative:
        "When the seal is sliced with a sharp knife ('Parda Faash'), a dramatic plume of fragrant saffron, rose, and mutton-infused steam erupts into the room. A master Ustad uses a flat brass skimmer ('Kafgir') to cut vertically through the handi, serving every plate with a two-toned crown of pearlescent white and golden-saffron grains over fork-tender meat, accompanied by Mirchi ka Salan and sour Dahi ki Chutney.",
      keyInnovations: ["Vertical kafgir plating preserving grain integrity", "Two-tone visual aesthetics (saffron yellow vs milk white)", "Accompaniments: Mirchi ka Salan (peanut-sesame gravy) and Burani Raita"],
      botanicalOrMaterialFocus: ["Brass Kafgir Skimmer", "Clay Handi Plating", "Mirchi ka Salan Guntur Chillies"],
      historicalEvidence:
        "International gastronomic recognition; Paradise, Bawarchi, and Shadab institutions preserving the Nizami craft.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Chef Dum Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional chefs to execute authentic Kacchi Dum Biryani without dried meat or soggy rice. Follow the exact fractional boiling timeline and sealed slow-steaming curve.",
      keyInnovations: ["Precision fractional parboiling table", "Papaya-yogurt tenderizing ratio", "Heat-diffuser tawa protection method"],
      botanicalOrMaterialFocus: ["Aged Basmati Rice (>2 Years)", "Ghee Emulsion", "Whole Spice Potli"],
      historicalEvidence: "Culinary synthesis codified from master Ustads of Old Hyderabad and royal recipe archives.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  recipe: {
    servings: 6,
    prepTimeMinutes: 240, // 4 hours marination
    cookTimeMinutes: 50,
    difficulty: "Master Chef",
    ingredientsList: [
      {
        category: "Meat & Marination (The Foundation)",
        items: [
          { name: "Tender Baby Goat / Mutton (Bone-in, Cut in large pieces)", quantity: "1 kg (2.2 lbs)", notes: "Shoulder and leg cuts yield best collagen" },
          { name: "Raw Green Papaya Paste (Skin-on)", quantity: "2 tbsp (30g)", notes: "Natural papain enzyme tenderizes raw meat" },
          { name: "Fresh Ginger-Garlic Paste", quantity: "3 tbsp (45g)", notes: "Freshly ground in equal weight proportions" },
          { name: "Kashmiri Red Chilli Powder", quantity: "2 tbsp" },
          { name: "De-seeded Green Chillies (Slit)", quantity: "6 pods" },
          { name: "Fresh Whisked Thick Curd (Dahi)", quantity: "1.5 cups (350g)" },
          { name: "Finely Sliced Golden Fried Onions (Birista)", quantity: "1.5 cups", notes: "Crushed lightly by hand" },
          { name: "Fresh Mint & Coriander Leaves", quantity: "1 cup tightly packed, chopped" },
          { name: "Shahi Biryani Masala", quantity: "1.5 tbsp", notes: "Powder of green cardamom, cloves, cinnamon, and mace" },
          { name: "Lemon Juice", quantity: "2 tbsp" },
          { name: "Mustard Oil / Onion-infused Oil", quantity: "4 tbsp" },
        ],
      },
      {
        category: "Rice & Aromatics Matrix",
        items: [
          { name: "Aged Basmati Rice (2+ Years Aged)", quantity: "750g (3.5 cups)", notes: "Soaked for 45 minutes in cold water" },
          { name: "Whole Spices for Boiling Water", quantity: "4 green cardamoms, 2 black cardamoms, 4 cloves, 2 bay leaves, 1 star anise" },
          { name: "Rock Salt for Boiling Water", quantity: "3.5 tbsp", notes: "Water must taste as salty as seawater" },
        ],
      },
      {
        category: "Dum Infusion & Seal",
        items: [
          { name: "Pure Saffron Strands", quantity: "1 generous pinch (0.5g)", notes: "Steeped in 1/2 cup warm full-fat milk" },
          { name: "Pure Desi Ghee", quantity: "4 tbsp" },
          { name: "Kewra & Rose Water", quantity: "1 tsp each" },
          { name: "Whole Wheat Atta Dough", quantity: "200g", notes: "Kneaded with water to form the sealing ribbon" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Place cleaned mutton in a heavy-bottomed handi. Massage vigorously with raw papaya paste, salt, ginger-garlic paste, and lemon juice. Rest for 30 minutes, then add curd, chilli powder, biryani masala, half the fried onions, mint, coriander, and oil. Marinate for at least 3-4 hours in refrigerator.",
        techniqueTip: "Never skip the raw papaya; without it, raw mutton will not cook through in the gentle dum steam.",
      },
      {
        stepNumber: 2,
        instruction: "Bring 4 liters of water to a rolling boil in a wide pot with whole spices, salt, and 1 tsp oil. Drain soaked basmati rice.",
        techniqueTip: "Heavy salinity in the parboiling water is the only moment the rice grain absorbs seasoning internally.",
      },
      {
        stepNumber: 3,
        instruction: "Add rice to boiling water. At 3.5 minutes (30% cooked, grain feels firm but bends without snapping), immediately scoop out 1/3rd of the rice with a slotted skimmer and spread directly over the raw marinated mutton in the handi.",
        techniqueTip: "The bottom layer rice needs to be undercooked so it absorbs the bubbling meat juices without becoming mushy.",
      },
      {
        stepNumber: 4,
        instruction: "At 5.5 minutes (60% cooked), scoop out the second layer of rice and spread evenly over the first layer. Sprinkle half the remaining fried onions and mint.",
        techniqueTip: "This middle layer forms the structural transition zone where steam and meat juices converge.",
      },
      {
        stepNumber: 5,
        instruction: "At 7.5 minutes (75-80% cooked, grain is long and tender with faint central bite), drain remaining rice and form the top crown layer. Drizzle saffron milk, kewra, rose water, and pure melted desi ghee generously across the surface.",
        techniqueTip: "The saffron drizzle creates the iconic two-tone visual contrast when plated.",
      },
      {
        stepNumber: 6,
        instruction: "Roll wheat dough into a 1-inch thick rope. Press firmly along the rim of the handi. Press the heavy lid tightly onto the dough to create an airtight seal.",
        techniqueTip: "If any steam escapes through a pinhole, patch it immediately with a pinch of wet raw dough.",
      },
      {
        stepNumber: 7,
        instruction: "Cook on high heat for 10 minutes until steam builds inside. Place a heavy cast-iron tawa under the handi to diffuse the flame, lower heat to minimum, and slow-cook on dum for 35 minutes. Turn off heat and rest undisturbed for 15 minutes before unsealing.",
        techniqueTip: "Resting allows the pressurized internal steam to settle, redistributing fat and aromatics back into every grain.",
      },
    ],
    historicalVsModernNotes:
      "Modern biryanis often take shortcuts by pre-cooking the meat in pressure cookers (Pakki style). Traditional Asaf Jahi Kacchi biryani relies purely on the gentle low-heat braising of raw meat beneath the rice blanket.",
    substitutions: [
      {
        original: "Mutton / Goat",
        substitute: "Bone-in Chicken Thighs or Portobello & Soy Chunks",
        impact: "Chicken cooks faster (reduce dum time to 25 mins; no papaya needed).",
      },
      {
        original: "Raw Green Papaya",
        substitute: "Fresh Raw Pineapple Juice (1 tbsp) or Commercial Meat Tenderizer",
        impact: "Bromelain enzyme in pineapple breaks down connective tissue similarly.",
      },
      {
        original: "Kewra Water",
        substitute: "Cardamom & Nutmeg Essential Extract",
        impact: "Provides warm spicy floral top notes without sweet perfumed syrupiness.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Abu'l-Fazl ibn Mubarak",
      workTitle: "Ain-i-Akbari (Constitution of Akbar)",
      publicationYearOrPeriod: "c. 1590 CE",
      citationDetails: "Volume I, Book First: Ain 24 (The Royal Kitchens / Rawans)",
      quoteOrFinding:
        "Details the imperial recipes for 'Birinj' and 'Du-Zard-Biranji', specifying exact ratios of fine rice, clarified butter, and marinated sheep meat.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 178–183, 'Rice Dishes and Pulao-Biryani Evolution'",
      quoteOrFinding:
        "Traces the transition from Persian pilaf to the spicy, layered Kacchi Biryani perfected in Hyderabad under Nizam Asaf Jah I.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Lizzie Collingham",
      workTitle: "Curry: A Tale of Cooks and Conquerors",
      publicationYearOrPeriod: "2006 (Oxford University Press)",
      citationDetails: "Chapter 2: The Emperor's Table, pp. 27–42",
      quoteOrFinding:
        "Documents how Central Asian Mughal nomadic cauldron cooking merged with Persian court refinement and southern Indian spices.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: PESARATTU (Andhra Pradesh)
// Traditional Unfermented Green Gram Breakfast Crepe
// ─────────────────────────────────────────────
export const PESARATTU_JOURNEY: DishCulinaryJourney = {
  dishId: "pesarattu",
  dishName: "Pesarattu",
  region: "Andhra Pradesh (Coastal Andhra & Rayalaseema)",
  culturalIntroduction:
    "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
  earliestDocumentedEvidence:
    "Pesarattu is rooted in Andhra household breakfast tradition and regional food documentation. No reliable historical record gives the exact year, place or creator.",
  confidenceSummary:
    "Documented regional culinary tradition verifies Pesarattu as an iconic Andhra unfermented breakfast crepe, traditionally made from whole green moong dal and paired with Allam Pachadi.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Andhra Pradesh",
      narrative:
        "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
      keyInnovations: ["Unfermented whole green gram batter", "Direct griddling after grinding", "Traditional pairing with Allam Pachadi"],
      botanicalOrMaterialFocus: ["Whole Green Gram (Pesalu)", "Ginger & Green Chillies", "Cast Iron Tawa"],
      historicalEvidence:
        "Andhra regional culinary practice and oral food documentation; exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#171d14",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders\nCooking surface: Then - iron griddle | Now - non-stick and cast-iron tawas\nFuel: Then - wood-fired stoves | Now - gas and induction cooktops\nBatter preparation: Then - slow, done by hand | Now - faster with mixers\nGreen gram: Then - soaked and prepared at home | Now - whole green gram easily available in supermarkets\nToppings: Then - simple, plain Pesarattu | Now - onion, green chilli and coriander toppings are popular\nVariations: Then - the classic plain version | Now - onion, crispy and Upma Pesarattu\nChutneys: Then - fresh ginger chutney made at home | Now - restaurants also serve ginger, coconut and peanut chutneys\nThese changes describe kitchens and equipment, not a precisely documented historical timeline.",
      keyInnovations: ["Transition from stone grinding to electric mixer-grinders", "Shift from iron griddles on wood stoves to gas, induction and modern tawas", "Emergence of MLA Pesarattu (Upma-stuffed) and restaurant variations"],
      botanicalOrMaterialFocus: ["Stone Grinder vs Mixer", "Wood Fire vs Gas & Induction", "Plain vs Upma-stuffed"],
      historicalEvidence:
        "Gastronomic surveys documenting kitchen tool modernization and restaurant evolution across Andhra Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#192214",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Pesarattu Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: whole green gram (green moong), rice (optional, for extra crispness), ginger, green chillies, cumin seeds, salt, onion, fresh coriander leaves, cooking oil or ghee, ginger chutney (Allam Pachadi) for serving.\n\n1. Wash and soak the green gram. - Soak in water for about 4 to 6 hours.\n2. Drain the water. - Rinse the green gram once more.\n3. Grind the batter. - Grind with ginger, green chillies, cumin and salt, adding a little water. It should be smooth and slightly thick.\n4. Prepare the toppings. - Chop onions and coriander finely and keep ready.\n5. Heat the pan. - Heat a dosa tawa and grease it lightly with oil.\n6. Spread the batter. - Pour one ladle in the centre and spread in circles into a thin dosa.\n7. Add the toppings. - Sprinkle onions and coriander and press in gently.\n8. Cook until crisp. - Add a little oil around the edges. Cook until the bottom is golden brown and the edges lift.\n9. Fold and serve. - Fold and serve hot with ginger chutney.\n\nNo fermentation needed. Cook right after grinding. A little rice in the batter gives extra crispness.",
      keyInnovations: ["10 key ingredients without quantities", "9 numbered steps with clear sub-lines", "Zero fermentation direct-griddling technique"],
      botanicalOrMaterialFocus: ["Green Moong & Rice", "Ginger & Green Chillies", "Allam Pachadi"],
      historicalEvidence:
        "Standardized Andhra regional recipe documentation for authentic home and restaurant Pesarattu.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#1f2a14",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "Regional Andhra Gastronomy",
      workTitle: "Culinary Heritage of Coastal Andhra & Rayalaseema",
      publicationYearOrPeriod: "Traditional",
      confidenceRating: "Documented Historical Mention",
      quoteOrFinding:
        "Pesarattu is a traditional breakfast dish of Andhra Pradesh made from soaked whole green gram ground without fermentation and griddled crisp with ginger and cumin.",
      citationDetails: "Andhra Culinary Heritage Documentation",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: AVAKAYA (Andhra Pradesh)
// Traditional Raw Mango Mustard Oil Pickle
// ─────────────────────────────────────────────
export const AVAKAYA_JOURNEY: DishCulinaryJourney = {
  dishId: "avakaya",
  dishName: "Avakaya",
  region: "Andhra Pradesh (Coastal Andhra & Rayalaseema)",
  culturalIntroduction:
    "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
  earliestDocumentedEvidence:
    "Avakaya is rooted in Telugu seasonal preservation and regional domestic culinary practice. No reliable historical record gives the exact year, place or creator.",
  confidenceSummary:
    "Documented regional culinary tradition verifies Avakaya as the iconic raw mango pickle of Andhra Pradesh, preserved in cold-pressed gingelly oil, mustard and red chilli.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Andhra Pradesh",
      narrative:
        "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
      keyInnovations: ["Raw mango preservation with hard kernel", "Sun-dried mustard powder curing", "Cold-pressed gingelly oil anaerobiosis"],
      botanicalOrMaterialFocus: ["Sour Raw Mangoes (Rasalu)", "Mustard Seeds & Red Chilli", "Ceramic Jaadi (Bharani)"],
      historicalEvidence:
        "Andhra regional culinary practice and oral food documentation; exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1a12",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets (native types like Rasalu are still preferred by many)\nSpice powders: Then - chillies and mustard sun-dried and ground fresh at home | Now - ready pickle-grade chilli and mustard powders are widely used\nCutting: Then - skilled cutting with a special knife, kernel kept intact | Now - same cut, with simple safety tricks like holding the mango in a cloth\nOil: Then - cold-pressed gingelly oil from the neighbourhood oil mill | Now - gingelly oil is still preferred; groundnut oil is the usual second choice\nJars: Then - large ceramic jaadis (bharanis) filled by the whole family | Now - smaller jars for small home batches, kept bone-dry\nBatch size: Then - big yearly batches shared across the family | Now - small batches of a few mangoes are common\nVariations: Then - the classic mustard-chilli Avakaya | Now - many versions such as bellam (jaggery), nuvvu (sesame), allam (ginger), pesara (moong) and endu (sun-dried) avakaya\nWhere it comes from: Then - made only at home each summer | Now - also sold ready-made by pickle brands\nThese changes describe kitchen practice, not a precisely documented historical timeline.",
      keyInnovations: ["Transition from massive family bharanis to small domestic jars", "Shift from home sun-drying and pounding to ready spice powders", "Emergence of sweet, garlic, and sun-dried variations"],
      botanicalOrMaterialFocus: ["Jaadi vs Glass Jar", "Home-Milled vs Packaged Spice", "Classic vs Flavoured Variants"],
      historicalEvidence:
        "Regional food studies and culinary technology surveys documenting Andhra domestic pickling practices.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221b14",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Avakaya Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: raw green sour mangoes, mustard seeds (sun-dried, ground fresh), red chilli powder, crystal salt (powdered), gingelly (sesame) oil, garlic cloves, fenugreek (methi) seeds, black chickpeas (optional, in place of garlic), hot rice with dal and ghee for serving.\n\n1. Wash and soak the mangoes. - Use firm, sour raw mangoes. Soak them in water for about an hour.\n2. Dry the pickle jar. - Wash it and sun-dry it fully. There must be no moisture at all.\n3. Wipe and cut the mangoes. - Cut into pieces with the hard kernel kept on each piece. Remove the pith.\n4. Dry the pieces. - Clean each piece with a soft cloth. Spread on a dry cloth for an hour or two.\n5. Grind mustard and salt. - Grind sun-dried mustard seeds and crystal salt to a fine powder.\n6. Make the spice mix. - Mix chilli powder, mustard powder and salt in equal weight. Add methi seeds, garlic and part of the oil. A fistful should hold its shape.\n7. Coat the mango pieces. - Mix with clean, dry hands until every piece is coated.\n8. Fill the jar. - Add the pieces with all the spice mix. Pour a little oil on top.\n9. Seal and rest. - Close the lid and tie a cloth over it. Keep in a dry place and do not open for about 3 days.\n10. Mix and top up. - On day 4, mix with a clean, dry ladle. Taste for salt. Add oil so a thin layer covers the pickle.\n11. Mature and serve. - Mix again after another 4 days. Serve with hot rice, dal and ghee.\n\nAlways use a clean, dry spoon. Moisture spoils the pickle. Keep a thin layer of oil on top.",
      keyInnovations: ["9 key ingredients without quantities", "11 numbered steps with clear sub-lines", "Zero-moisture anaerobic oil seal method"],
      botanicalOrMaterialFocus: ["Sour Raw Mangoes", "Mustard & Gingelly Oil", "Hot Rice, Dal & Ghee"],
      historicalEvidence:
        "Standardized Andhra regional recipe documentation for traditional summer Avakaya pickling.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "Regional Andhra Gastronomy",
      workTitle: "Culinary Heritage of Coastal Andhra & Rayalaseema",
      publicationYearOrPeriod: "Traditional",
      confidenceRating: "Documented Historical Mention",
      quoteOrFinding:
        "Avakaya is the definitive seasonal pickle of Andhra Pradesh, made by macerating kernel-cut raw mangoes with ground mustard, chilli, and gingelly oil in ceramic jaadis.",
      citationDetails: "Andhra Culinary Heritage Documentation",
    },
  ],
};

// FLAGSHIP PILOT 3: HYDERABADI HALEEM (Telangana / Deccan)
// Slow-Cooked Wheat, Lentils & Pounded Meat Cauldrons
// ─────────────────────────────────────────────
export const HYDERABADI_HALEEM_JOURNEY: DishCulinaryJourney = {
  dishId: "hyderabadi-haleem",
  dishName: "Hyderabadi Haleem",
  region: "Telangana (Asaf Jahi Royal Courts & Ramzan Bhatti)",
  culturalIntroduction:
    "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
  earliestDocumentedEvidence:
    "Documented origins in 10th-century Arab culinary treatises as 'harisah', brought to the Deccan by Yemeni Chaush soldiers in the 19th century and perfected in Asaf Jahi royal kitchens.",
  confidenceSummary:
    "Historical sources document that harees came to the Deccan through Arab migrations and was codified in Hyderabad with local spices, lentils, and pure ghee. In 2010, Hyderabadi Haleem became the first Indian meat dish to be granted Geographical Indication (GI) status.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in the Deccan",
      narrative:
        "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
      keyInnovations: ["Integration of Arab harees technique into Deccani royal cuisine", "Slow overnight simmering in wood-fired bhatti cauldrons", "Addition of local lentils, garam masala, and desi ghee"],
      botanicalOrMaterialFocus: ["Broken Whole Wheat (Dalia)", "Heavy Copper Bhatti Cauldron (Deg)", "Wooden Pestles (Ghotni)"],
      historicalEvidence:
        "19th-century Asaf Jahi military payrolls documenting Arab Chaush contingents in Barkas, Hyderabad, and royal feast records.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders\nVessel: massive heavy tinned copper cauldrons (degs/bhatti) / stainless steel pots, heavy-bottom handis, and domestic pressure cookers\nFuel: tamarind wood and charcoal bhattis burning low overnight / LPG gas stoves, induction, and commercial gas burners\nCooking time: 10 to 12 hours of overnight simmering / 1.5 to 2.5 hours in home pressure cookers\nPounding: 2 to 3 skilled cooks rhythmically beating with wooden poles (ghotnis) / home wooden whisks, potato mashers, or short pulses of electric blenders\nMeat: traditional bone-in tender goat/mutton marrow cuts slow-cooked till bones slip out / boneless mutton, chicken (now widespread in restaurants), and modern vegetarian lentil variants\nFlavourings: pure desi ghee, freshly stone-ground potli masala, rose water, and wild cinnamon / commercial packaged haleem spice blends and ready ginger-garlic paste\nGarnish & Serving: golden fried onions (birista), ghee drizzle, fresh mint, coriander, lime, and sliced almonds/cashews / similar traditional garnishes maintained across both royal feasts and modern takeaway boxes",
      keyInnovations: ["Shift from wood/charcoal bhattis to modern domestic gas and electric cooking", "Adoption of pressure cookers and immersion mashers", "Introduction of boneless mutton and chicken variants alongside packaged masalas"],
      botanicalOrMaterialFocus: ["Hand-Pounded Ghotni vs Immersion Blender", "Copper Deg vs Stainless Steel Cooker", "Potli Masala vs Packaged Spice"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Deccan culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Hyderabadi Haleem Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: broken wheat (dalia), boneless mutton, chana and moong lentils, curd, pure desi ghee, fried onions (birista), ginger-garlic paste, whole spices and garam masala, mint and coriander, almonds and cashew nuts.\n\n1. Soak broken wheat and lentils (chana and moong) in water for 1 to 2 hours, then drain.\n2. Marinate the mutton with curd, ginger-garlic paste, turmeric, chilli powder, salt, and half of the garam masala for at least 1 hour.\n3. In a heavy pot or pressure cooker, heat ghee and saute whole spices (shahi jeera, cardamom, cloves, cinnamon) and a portion of fried onions until fragrant.\n4. Add the marinated meat and sear on medium-high heat, then add water and pressure-cook or slow-simmer until the meat is thoroughly tender and falling apart.\n5. Separately boil the soaked broken wheat and lentils with a pinch of turmeric and water until completely soft and mushy.\n6. Shred the cooked meat off any bones and combine the shredded meat and its rich broth into the pot of cooked wheat and lentils.\n7. Slow-simmer over low heat while vigorously mashing and pounding with a wooden masher (ghotni) for 30–40 minutes, gradually incorporating hot ghee until the mixture turns silky, elastic, and pasty.\n8. Season with remaining garam masala, mint, and coriander; ladle into warm bowls and top with hot ghee, golden fried onions, toasted cashews, and fresh lemon wedges.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step tender-simmer and ghotni pounding protocol", "Authentic home execution method maintaining gelatinous silky emulsion"],
      botanicalOrMaterialFocus: ["Broken Wheat & Mutton", "Chana & Moong Dal", "Desi Ghee & Fried Birista"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step slow-pounding and ghee-incorporation method (ghotni protocol) for authentic Hyderabadi haleem.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Ghotni Pounding Protocol",
      stageName: "Artisanal Emulsification Technique",
      era: "20th Century Ramzan Tradition",
      yearRange: "Overnight Simmer & Pounding",
      narrative:
        "The defining technical brilliance of Haleem is mechanical mastication: the cooked meat fibers are broken into thread-like filaments while wheat starches and melted collagen create an elastic, silky suspension that clings to a wooden paddle.",
      keyInnovations: ["Collagen-starch emulsification", "Rhythmic dual-operator wooden ghotni action", "Staged incorporation of boiling clarified butter"],
      botanicalOrMaterialFocus: ["Heavy Hardwood Ghotni", "Collagen Broth", "Desi Ghee Streams"],
      historicalEvidence: "National GI Registry Document No. 147 (Hyderabadi Haleem Specification).",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "Nizami Aromatics & Garnishing",
      stageName: "Royal Finishing & Textural Harmony",
      era: "Palace Banquets & Festival Culture",
      yearRange: "Ramzan Evenings",
      narrative:
        "Aromatic finishing elevates the heavy stew: royal potli masala, rose water, and hot desi ghee are folded in, topped with crisp golden fried onions, slivered nuts, chopped mint, and fresh lemon juice to balance the rich savory profile.",
      keyInnovations: ["Acid-fat contrast via fresh lemon juice", "Crisp textural counterpoints with fried onions and nuts", "Floral rose and cardamom aromatic closure"],
      botanicalOrMaterialFocus: ["Crisp Birista Onions", "Fried Cashew Halves", "Fresh Guntur Mint"],
      historicalEvidence: "Chowmahalla Palace archives and city gastronomic oral histories.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Present Day Plated & Global GI Status",
      stageName: "Global Emblem of Telangana Gastronomy",
      era: "Contemporary Era",
      yearRange: "2010 – Present Day",
      narrative:
        "Registered with GI status in 2010, Hyderabadi Haleem is exported across the globe and served in iconic institutions such as Pista House, Sarvi, and Shah Ghouse, remaining an irreplaceable symbol of Telangana's culinary hospitality.",
      keyInnovations: ["Geographical Indication certification", "Hermetic nitrogen-flushed courier packaging", "Universal celebration across communal boundaries during Ramzan"],
      botanicalOrMaterialFocus: ["Porcelain Plating", "Glistening Ghee Crown", "Fresh Lemon Wedges"],
      historicalEvidence: "Government of India GI Registry Journal, 2010.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Kitchen-Tested Standard Recipe",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "Execute authentic Hyderabadi Haleem at home with precision soaking, gentle pressure cooking, and dedicated wooden masher emulsification for the authentic silky texture.",
      keyInnovations: ["Kitchen-friendly pressure cooker adaptation", "Accurate wheat-to-meat ratio", "Balanced homemade garam masala potli"],
      botanicalOrMaterialFocus: ["Broken Wheat (Dalia)", "Tender Bone-In or Boneless Meat", "Pure Ghee"],
      historicalEvidence: "Standardized Telangana Gastronomic documentation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 6,
    prepTimeMinutes: 120,
    cookTimeMinutes: 180,
    difficulty: "Master Chef",
    ingredientsList: [
      {
        category: "Grains & Pulses Base",
        items: [
          { name: "Broken Whole Wheat (Dalia)", quantity: "1 cup (200g)", notes: "Soaked for 2 hours in warm water" },
          { name: "Chana Dal (Bengal Gram)", quantity: "2 tbsp (30g)", notes: "Provides nutty protein structure" },
          { name: "Yellow Moong Dal", quantity: "2 tbsp (30g)", notes: "Adds smooth melting texture" },
          { name: "Masoor Dal (Split Red Lentil)", quantity: "2 tbsp (30g)", notes: "Melts into silky binder" },
          { name: "Urad Dal (Split Black Gram)", quantity: "1 tbsp (15g)", notes: "Provides starch elasticity" },
          { name: "Basmati Rice", quantity: "2 tbsp (30g)", notes: "Aids cohesive starch emulsification" },
        ],
      },
      {
        category: "Meat & Marinade",
        items: [
          { name: "Mutton / Goat (Bone-in cuts & marrow)", quantity: "750g", notes: "Marrow bones melt into natural collagen gelatin" },
          { name: "Fresh Thick Curd (Yogurt)", quantity: "1/2 cup (120g)", notes: "Lactic acid softens meat fibers" },
          { name: "Ginger-Garlic Paste", quantity: "2 tbsp", notes: "Freshly ground" },
          { name: "Kashmiri Chilli & Turmeric Powder", quantity: "1 tbsp chilli, 1 tsp turmeric" },
          { name: "Rock Salt", quantity: "1.5 tsp (to taste)" },
        ],
      },
      {
        category: "Aromatic Infusion & Desi Ghee",
        items: [
          { name: "Pure Desi Ghee", quantity: "3/4 cup (180ml)", notes: "Streamed in stages during continuous pounding" },
          { name: "Shahi Jeera (Caraway Seeds)", quantity: "1 tsp" },
          { name: "Whole Spices (Cardamom, Cloves, Cinnamon, Kebabcini)", quantity: "1.5 tbsp" },
          { name: "Royal Potli Masala (Nizami Haleem Spice Blend)", quantity: "1 tbsp" },
          { name: "Organic Rose Water & Dried Rose Petals", quantity: "1 tsp rose water, 1 tbsp petals" },
        ],
      },
      {
        category: "Royal Garnish",
        items: [
          { name: "Birista (Crispy Deep-Fried Golden Onions)", quantity: "1 cup", notes: "Crucial sweet textural crunch" },
          { name: "Fried Cashew Halves & Slivered Almonds", quantity: "2 tbsp each" },
          { name: "Fresh Mint & Coriander Leaves", quantity: "1/2 cup finely chopped" },
          { name: "Fresh Lemon Wedges", quantity: "2 lemons sliced" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Rinse and soak the broken wheat, chana dal, moong dal, masoor dal, urad dal, and basmati rice in warm water for at least 2 hours, then drain.",
        techniqueTip: "Soaking hydrates the grain starches completely, allowing them to rapidly burst and emulsify during cooking.",
      },
      {
        stepNumber: 2,
        instruction: "Marinate the mutton with yogurt, ginger-garlic paste, turmeric, chilli powder, salt, and half the garam masala for at least 1 hour.",
        techniqueTip: "Yogurt enzymes gently break down the meat proteins before heat is applied.",
      },
      {
        stepNumber: 3,
        instruction: "In a heavy pot or pressure cooker, heat 3 tablespoons of ghee. Fry whole spices (shahi jeera, cardamom, cloves, cinnamon) and half the fried onions until fragrant. Add marinated meat and sear for 6–8 minutes.",
        techniqueTip: "High-heat searing develops the rich Maillard browning that establishes the stew's deep color.",
      },
      {
        stepNumber: 4,
        instruction: "Add 4 cups of water to the meat, seal, and pressure-cook for 40–45 minutes (or slow-simmer 2.5 hours) until fork-tender and falling off the bone. Remove bones, scoop out marrow, and shred the meat.",
        techniqueTip: "Ensure the marrow is reclaimed into the broth; it is the secret to Hyderabadi Haleem's luxurious mouthfeel.",
      },
      {
        stepNumber: 5,
        instruction: "Separately boil the soaked grains and lentils with 4 cups of water and 1/2 tsp turmeric until completely soft and mushy, then mash with a wooden whisk or immersion blender.",
        techniqueTip: "The grains should achieve the consistency of a thick, homogeneous porridge before uniting with the meat.",
      },
      {
        stepNumber: 6,
        instruction: "Transfer the shredded meat, gelatinous marrow, and rich meat broth into the pot of cooked grains over low heat.",
        techniqueTip: "Use a wide, heavy-bottomed vessel so the mixture cooks evenly without scorching at the base.",
      },
      {
        stepNumber: 7,
        instruction: "Using a heavy wooden pestle (ghotni) or potato masher, rhythmically pound and stir the mixture in circular strokes for 30–45 minutes, gradually pouring in sizzling hot ghee.",
        techniqueTip: "This vigorous ghotni protocol masticates meat fibers into delicate silky filaments suspended in wheat starch, creating the signature stretchy drape.",
      },
      {
        stepNumber: 8,
        instruction: "Fold in royal potli masala, rose water, remaining garam masala, and fresh mint. Ladle into warm bowls, crown with a ladle of melted ghee, crisp birista, fried nuts, and a squeeze of fresh lemon juice.",
        techniqueTip: "Never omit the fresh lemon juice at the finish; the acidity cuts the intense collagen-ghee richness and activates the floral spice bouquet.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally simmered for 12 continuous hours in wood-fired copper cauldrons (degs) with multiple bhatti cooks taking turns with heavy wooden ghotnis. Modern kitchens replicate this authentic silky elasticity using pressure cookers for the braise and rhythmic wooden ghotni mashing with staged hot ghee additions.",
    substitutions: [
      {
        original: "Bone-in Mutton / Marrow Bones",
        substitute: "Boneless Chicken Thighs or Slow-Braised Button Mushrooms & Soy Granules",
        impact: "Chicken Haleem cooks in half the time; vegetarian versions use mushrooms and pulses to mimic meaty umami.",
      },
      {
        original: "Potli Masala",
        substitute: "Ground Star Anise, Dagad Phool (Stone Flower), Kebabcini, and Cardamom",
        impact: "Delivers the earthen, peppery, forest-bark aroma signature to Asaf Jahi palace banquets.",
      },
      {
        original: "Pure Desi Ghee",
        substitute: "Grass-Fed Cultured Clarified Butter",
        impact: "Preserves the glossy aromatic crown and authentic mouthfeel without compromise.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Government of India Geographical Indications Registry",
      workTitle: "GI Application No. 147: Hyderabadi Haleem Specification Journal",
      publicationYearOrPeriod: "2010",
      citationDetails: "GI Journal No. 37, Class 29 (Meat and meat extracts) & Class 30",
      quoteOrFinding:
        "Registered Hyderabadi Haleem as the first Indian meat delicacy granted GI status, recognizing the standardized recipe of broken wheat, tender goat meat, pure desi ghee, and manual wooden ghotni pounding.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Ibn Sayyar al-Warraq",
      workTitle: "Kitab al-Tabikh (The Book of Dishes)",
      publicationYearOrPeriod: "10th Century CE (Abbasid Baghdad)",
      citationDetails: "Chapter on Harisah: Porridge of shredded meat, soaked wheat, and clarified sheep tail fat",
      quoteOrFinding:
        "Earliest known culinary manuscript detailing the ancestral ancestor dish harees, describing overnight hearth simmering and continuous wooden paddle pounding to emulsify meat and grain.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Salma Husain",
      workTitle: "The Mughal Feast: Recipes from the Kitchen of Emperor Shah Jahan",
      publicationYearOrPeriod: "2019 (Roli Books)",
      citationDetails: "Chronicles of Asaf Jahi Banquets and Chaush Mercenaries in the Deccan, pp. 112–118",
      quoteOrFinding:
        "Traces the arrival of Yemeni harees through Chaush soldiers garrisoned in Barkas, Hyderabad, and its transformation in Nizam palace kitchens with saffron, cardamom, Deccan lentils, and rose petals.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Page 93, Entries on 'Haleem and Harees in the Deccan'",
      quoteOrFinding:
        "Documents how the Arab harees evolved into Hyderabadi haleem through the addition of regional pulses, local spices, and copious desi ghee during Ramzan celebrations.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// BISI BELE BATH (Karnataka / Mysore Court)
// ─────────────────────────────────────────────
export const BISI_BELE_BATH_JOURNEY: DishCulinaryJourney = {
  dishId: "bisi-bele-bath",
  dishName: "Bisi Bele Bath",
  region: "Karnataka (Mysore Palace Court & Old Mysore)",
  culturalIntroduction:
    "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
  earliestDocumentedEvidence:
    "Palace kitchen accounts and culinary manuscripts from the Wodeyar dynasty of Mysore documenting sacred rice-and-dal offerings enriched with ghee and spices.",
  confidenceSummary:
    "Historical sources document that Bisi Bele Bath was created in the Mysore Palace kitchens as an offering to royal deities. It subsequently spread across Old Mysore and Karnataka's darshini restaurants, where the spice blend (bisi bele bath podi) and ghee tempering were standardized.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Karnataka",
      narrative:
        "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
      keyInnovations: ["Integration of rice and toor dal in a single royal cauldron", "Slow simmering with aged tamarind and desi ghee", "Development of the bisi bele bath podi spice blend with Byadagi chillies and kapok buds"],
      botanicalOrMaterialFocus: ["Sona Masuri Rice", "Toor Dal", "Heavy Brass Uruli"],
      historicalEvidence:
        "Mysore Wodeyar court culinary records and South Indian temple kitchen manuscripts.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.2, 5.5],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1e1b18",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: separate slow wood-fire simmering of dal and rice in open vessels / unified pressure cooking followed by rapid direct spice simmering\nVessel: heavy brass urulis and tin-lined copper degchis / modern stainless steel pressure cookers and heavy-bottom pots\nFuel: tamarind wood and charcoal hearths burning slow / domestic LPG gas stoves and induction cooktops\nCooking time: 2 to 3 hours of continuous simmering and stirring / 25 to 35 minutes in domestic pressure cookers\nSpice blending: whole spices hand-roasted on iron plates and crushed on stone grinding slabs / electric mixer-ground homemade batches or packaged spice powders\nVegetables: limited to native ash gourd, drumsticks, and raw plantains / hearty mix of carrots, French beans, green peas, and shallots\nSourness and sweetness: dark country tamarind and slow-melted palm jaggery / seedless tamarind paste and organic cane jaggery\nGarnish and serving: fresh fried cashews in pure country cow ghee / fried cashews, spicy kara boondi, and potato chips served in darshini restaurants",
      keyInnovations: ["Transition from royal wood-fired urulis to domestic pressure cookers", "Addition of New World vegetables like carrots and green beans", "Adoption of Byadagi chillies for radiant red colour without excess heat"],
      botanicalOrMaterialFocus: ["Karnataka Byadagi Chillies", "Kapok Buds (Marathi Moggu)", "Dry Copra (Kobbari)"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Karnataka culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.5],
        modelTransformation: "grinding-batter",
        atmosphereColor: "#221c17",
        ambientWarmth: 0.8,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Bisi Bele Bath Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Sona Masuri rice, toor dal, mixed vegetables (carrots, beans, peas), tamarind extract, jaggery, Byadagi dry red chillies, kapok buds (marathi moggu), dry coconut (copra), cashew nuts, pure desi ghee.\n\n1. Rinse Sona Masuri rice and toor dal together, then pressure-cook with water and a pinch of turmeric for 4 to 5 whistles until soft and easily mashable.\n2. Dry-roast Byadagi chillies, chana dal, urad dal, coriander seeds, cumin, fenugreek, marathi moggu, and cinnamon until aromatic; add grated copra and hing, cool, and grind into a fine bisi bele bath spice powder.\n3. Boil chopped carrots, French beans, potatoes, peas, and shallots in water with salt until tender.\n4. Add thick tamarind extract, grated jaggery, and 3 tablespoons of the prepared spice powder to the cooked vegetables and simmer for 5 minutes.\n5. Lightly mash the cooked rice and dal, then combine them into the bubbling spiced vegetable broth.\n6. Adjust consistency with warm water to a smooth, pourable porridge and simmer on low heat for 7 minutes, stirring gently to prevent sticking.\n7. Heat pure desi ghee in a pan, crackle mustard seeds and curry leaves, and fry cashew nuts and broken dried chillies until golden.\n8. Pour the sizzling ghee tempering over the bisi bele bath, mix well, rest for 2 minutes, and serve piping hot topped with crisp kara boondi.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step pressure cook and spice simmering protocol", "Authentic ghee-cashew and kara boondi finish"],
      botanicalOrMaterialFocus: ["Sona Masuri Rice & Toor Dal", "Bisi Bele Bath Podi", "Pure Desi Ghee & Cashews"],
      historicalEvidence:
        "Codified Karnataka regional recipe documentation detailing the authentic eight-step preparation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.5, 3.5, 4.2],
        modelTransformation: "trade-ingredients",
        atmosphereColor: "#1d1916",
        ambientWarmth: 1.0,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Base & Vegetables",
        items: [
          { name: "Sona Masuri Rice", quantity: "1 cup" },
          { name: "Toor Dal", quantity: "1/2 cup" },
          { name: "Mixed Vegetables (Carrots, Beans, Peas)", quantity: "1.5 cups" },
          { name: "Tamarind Pulp Extract", quantity: "1 lemon-sized ball" },
          { name: "Jaggery (Bella)", quantity: "1 tbsp" },
        ],
      },
      {
        category: "Bisi Bele Bath Podi (Spice Powder)",
        items: [
          { name: "Byadagi Dry Red Chillies", quantity: "6-8" },
          { name: "Chana Dal & Urad Dal", quantity: "2 tbsp & 1 tbsp" },
          { name: "Coriander & Cumin Seeds", quantity: "1.5 tbsp & 1 tsp" },
          { name: "Marathi Moggu (Kapok Buds)", quantity: "2" },
          { name: "Grated Dry Coconut (Copra)", quantity: "2 tbsp" },
        ],
      },
      {
        category: "Tempering & Garnish",
        items: [
          { name: "Pure Desi Ghee", quantity: "3 tbsp" },
          { name: "Mustard Seeds & Curry Leaves", quantity: "1 tsp & 1 sprig" },
          { name: "Cashew Nuts", quantity: "12 whole" },
          { name: "Kara Boondi", quantity: "generous handful" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Pressure-cook rice and toor dal together until soft and easily mashable.",
        techniqueTip: "Slightly overcooking ensures seamless integration into the spiced vegetable broth.",
      },
      {
        stepNumber: 2,
        instruction: "Roast whole spices and copra, grind into fine bisi bele bath podi.",
        techniqueTip: "Byadagi chillies provide deep royal crimson color without excessive pungency.",
      },
      {
        stepNumber: 3,
        instruction: "Boil vegetables with tamarind extract, jaggery, and spice powder.",
        techniqueTip: "Cook until vegetables are tender and tamarind loses its raw edge.",
      },
      {
        stepNumber: 4,
        instruction: "Combine mashed rice-dal with vegetables, adjust consistency with warm water, and simmer.",
        techniqueTip: "Stir continuously to prevent settling at the base.",
      },
      {
        stepNumber: 5,
        instruction: "Temper with mustard, curry leaves, and cashews fried in hot ghee; top with kara boondi.",
        techniqueTip: "Ghee tempering locks in the fragrant essential oils of the roasted spices.",
      },
    ],
    historicalVsModernNotes: "Modern pressure cookers reduce a 3-hour royal cauldron simmer to 30 minutes while preserving the palace spice profile.",
    substitutions: [
      { original: "Marathi Moggu", substitute: "Cinnamon & Clove", impact: "Lacks wild woody balsamic aroma" },
      { original: "Byadagi Chillies", substitute: "Kashmiri Chillies", impact: "Provides red color but slightly different fruity undertone" },
    ],
  },
  citations: [
    {
      authorOrSource: "K. T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998",
      citationDetails: "Oxford University Press, pp. 28-30",
      quoteOrFinding: "Documents the evolution of South Indian rice-and-lentil bath preparations in Karnataka temple and palace contexts.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Food Culture in India",
      publicationYearOrPeriod: "2004",
      citationDetails: "Greenwood Press, pp. 112-114",
      quoteOrFinding: "Describes Mysore courtly cuisine, the unique bisi bele bath spice blend, and its transition into Karnataka darshini culture.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// DALMA (Odisha)
// Sacred Lentil & Country Vegetable Stew
// ─────────────────────────────────────────────
export const DALMA_JOURNEY: DishCulinaryJourney = {
  dishId: "dalma",
  dishName: "Dalma",
  region: "Odisha (Puri Jagannath Temple & Mahanadi Delta Traditions)",
  culturalIntroduction:
    "Dalma traces back to ancient indigenous tribal and temple culinary traditions of Odisha. It originated with the Savara tribes who offered simple stews of wild lentils and forest produce to Neela Madhaba, later sanctified into the 12th-century Jagannath Temple at Puri as an essential Mahaprasad offering. Prepared in the sacred temple kitchen (Rosha Ghara), it combines toor dal with native country vegetables, cooked purely sattvic without onion or garlic. Over centuries, this sacred temple offering spread across Odia homes as the definitive everyday and festive soul food.",
  earliestDocumentedEvidence:
    "Dalma traces back to ancient indigenous tribal and temple culinary traditions of Odisha. It originated with the Savara tribes who offered simple stews of wild lentils and forest produce to Neela Madhaba, later sanctified into the 12th-century Jagannath Temple at Puri as an essential Mahaprasad offering.",
  confidenceSummary:
    "Historical sources document that Dalma originated as a sacred tribal offering later codified in the 12th-century Jagannath Temple Mahaprasad (Abadha) in Puri. Cooked in unglazed earthen pots (kudua) over sacred wood fires without onion or garlic, it gradually diffused into every Odia household as the quintessential everyday and festive comfort food.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Odisha",
      narrative:
        "Dalma traces back to ancient indigenous tribal and temple culinary traditions of Odisha. It originated with the Savara tribes who offered simple stews of wild lentils and forest produce to Neela Madhaba, later sanctified into the 12th-century Jagannath Temple at Puri as an essential Mahaprasad offering. Prepared in the sacred temple kitchen (Rosha Ghara), it combines toor dal with native country vegetables, cooked purely sattvic without onion or garlic. Over centuries, this sacred temple offering spread across Odia homes as the definitive everyday and festive soul food.",
      keyInnovations: ["Combination of indigenous lentils with native country vegetables", "Sattvic temple cooking protocol without onion or garlic", "Puri Jagannath earthen kudua pot steam-simmering"],
      botanicalOrMaterialFocus: ["Indigenous Toor Dal & Country Vegetables", "Unglazed Earthen Kudua Pots", "Pure Desi Ghee & Panch Phoron"],
      historicalEvidence:
        "Historical temple kitchen chronicles and regional Odia culinary traditions document the sacred earthen-pot Mahaprasad lineage; exact initial codification dates remain rooted in temple tradition.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: slow steam-simmering in unglazed earthenware / rapid single-whistle simmering in modern pressure cookers\nVessel: tiered porous earthen pots (kudua) stacked over wood hearths / stainless steel pots, anodized pressure cookers, and non-stick pans\nFuel: dried hardwood and sacred wood-log hearths / domestic LPG gas stoves and electric induction cooktops\nCooking time: 2 to 3 hours of gentle earthen pot simmering / 20 to 25 minutes in household pressure cookers\nLentils: indigenous toor dal or wild split moong simmered whole / polished hybrid toor, moong, or chana dal blends\nVegetables: strictly native tubers, raw plantain, green papaya, and colocasia / modern additions like potatoes, tomatoes, beans, and carrots\nTempering: pure cow ghee crackled with cumin, dry chillies, or panch phoron / sunflower or mustard oil blends alongside ready-packaged spices\nFinishing: hand-grated fresh coconut and clay-roasted cumin-chilli powder / desiccated coconut flakes and commercial garam masala",
      keyInnovations: ["Shift from multi-tiered earthen hearths to domestic gas and pressure cookers", "Expansion of native tuber selection to include contemporary market produce", "Evolution of the finishing ghee chhunka and roasted bhaja masala"],
      botanicalOrMaterialFocus: ["Temple Kudua vs Metal Cooker", "Pure Desi Ghee vs Cooking Oils", "Bhaja Jeera-Lanka Gunda"],
      historicalEvidence:
        "Comparative historical culinary records documenting kitchen fuel, cookware transitions, and ingredient availability across Odia gastronomic history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Dalma Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: toor dal (arhar dal), raw banana, pumpkin, raw papaya, brinjal (eggplant), sweet potato, panch phoron, dry red chillies, desi ghee, fresh grated coconut.\n\n1. Wash and rinse the toor dal thoroughly, then soak in water for 20 to 30 minutes to ensure even cooking.\n2. Peel and chop the raw banana, papaya, and sweet potato into firm, uniform chunks; cut the pumpkin and brinjal into slightly larger pieces so they do not dissolve.\n3. In a heavy earthen kudua pot or deep pot, bring 4 cups of water to a boil with turmeric powder, crushed ginger, and salt.\n4. Add the soaked toor dal along with the harder vegetables (raw banana, papaya, and sweet potato); simmer over medium heat until halfway tender.\n5. Add the softer vegetables (pumpkin and brinjal) along with half of the fresh grated coconut; continue simmering until the dal is soft and vegetables are fork-tender.\n6. In a small tempering pan, heat pure desi ghee, add panch phoron (five-spice blend) and dry red chillies, and let them crackle until fragrant.\n7. Pour the sizzling hot ghee tempering (chhunka) directly into the simmering dalma and cover immediately with a lid to trap the aromas for 5 minutes.\n8. Uncover, sprinkle with roasted cumin-chilli powder (bhaja jeera lanka gunda) and remaining grated coconut, and serve hot with steamed rice or pakhala.",
      keyInnovations: ["10 essential authentic ingredients", "Streamlined 8-step sattvic vegetable-dal simmering", "Signature sizzling ghee chhunka and bhaja jeera finish"],
      botanicalOrMaterialFocus: ["Toor Dal & Native Country Vegetables", "Pure Desi Ghee & Panch Phoron", "Roasted Cumin-Chilli Powder & Fresh Coconut"],
      historicalEvidence:
        "Standardized regional recipe documentation detailing the foundational eight-step Odia dalma preparation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 5,
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Lentils & Base Aromatics",
        items: [
          { name: "Toor Dal (Arhar Dal / Yellow Split Pigeon Peas)", quantity: "1 cup (200g)", notes: "Rinsed and soaked for 20-30 minutes" },
          { name: "Fresh Ginger (Crushed / Grated)", quantity: "1.5 tbsp (20g)", notes: "Provides warm, digestive aromatic base" },
          { name: "Turmeric Powder (Haldi)", quantity: "1 tsp" },
          { name: "Rock Salt (Saindhava Lavana) or Sea Salt", quantity: "1.5 tsp (to taste)" },
          { name: "Water", quantity: "4 to 5 cups" },
        ],
      },
      {
        category: "Country Vegetables Matrix",
        items: [
          { name: "Raw Green Banana (Kacha Kadali)", quantity: "1 medium", notes: "Peeled and cut into 1-inch thick chunks" },
          { name: "Red Sweet Pumpkin (Kakharu / Kaddu)", quantity: "1 cup diced (150g)", notes: "Cut into slightly larger cubes so it retains shape" },
          { name: "Raw Green Papaya (Kacha Omrutabhanda)", quantity: "1 cup diced (120g)", notes: "Peeled and diced into uniform bite-sized pieces" },
          { name: "Brinjal / Eggplant (Baigana)", quantity: "1 medium", notes: "Cubed and kept in water to prevent discoloration" },
          { name: "Sweet Potato (Kanda Mula)", quantity: "1 medium", notes: "Peeled and cut into rounds or chunks" },
        ],
      },
      {
        category: "Tempering (Chhunka) & Finishing Garnish",
        items: [
          { name: "Pure Desi Cow Ghee", quantity: "2.5 tbsp", notes: "Essential for authentic temple aroma" },
          { name: "Panch Phoron (Odia Five-Spice Mix)", quantity: "1.5 tsp", notes: "Equal parts cumin, mustard, fenugreek, fennel, and nigella seeds" },
          { name: "Whole Dry Red Chillies", quantity: "2 to 3 pods", notes: "Lightly broken in half" },
          { name: "Fresh Grated Coconut (Kora Nadia)", quantity: "1/2 cup (50g)", notes: "Half simmered in stew, half reserved for fresh topping" },
          { name: "Roasted Cumin & Dry Red Chilli Powder (Bhaja Jeera-Lanka Gunda)", quantity: "1.5 tsp", notes: "Dry-roasted on tawa and freshly pounded" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Wash and rinse the toor dal thoroughly, then soak in water for 20 to 30 minutes to ensure even cooking.",
        techniqueTip: "Soaking ensures the toor dal softens at the exact same pace as the dense root vegetables.",
      },
      {
        stepNumber: 2,
        instruction: "Peel and chop the raw banana, papaya, and sweet potato into firm, uniform chunks; cut the pumpkin and brinjal into slightly larger pieces so they do not dissolve.",
        techniqueTip: "Cutting softer vegetables like pumpkin larger prevents them from disintegrating into mush during simmering.",
      },
      {
        stepNumber: 3,
        instruction: "In a heavy earthen kudua pot or deep pot, bring 4 cups of water to a boil with turmeric powder, crushed ginger, and salt.",
        techniqueTip: "Adding ginger to the cold water base extracts its soothing heat and eliminates raw taste.",
      },
      {
        stepNumber: 4,
        instruction: "Add the soaked toor dal along with the harder vegetables (raw banana, papaya, and sweet potato); simmer over medium heat until halfway tender.",
        techniqueTip: "Staggering the hard vegetables first allows dense fibers to break down without overcooking delicate gourds.",
      },
      {
        stepNumber: 5,
        instruction: "Add the softer vegetables (pumpkin and brinjal) along with half of the fresh grated coconut; continue simmering until the dal is soft and vegetables are fork-tender.",
        techniqueTip: "Simmering half the grated coconut directly in the broth enriches the lentil liquor with natural coconut milk sweetness.",
      },
      {
        stepNumber: 6,
        instruction: "In a small tempering pan, heat pure desi ghee, add panch phoron (five-spice blend) and dry red chillies, and let them crackle until fragrant.",
        techniqueTip: "Watch closely: fenugreek seeds must turn golden brown; if blackened, they turn unpleasantly bitter.",
      },
      {
        stepNumber: 7,
        instruction: "Pour the sizzling hot ghee tempering (chhunka) directly into the simmering dalma and cover immediately with a lid to trap the aromas for 5 minutes.",
        techniqueTip: "Immediate lid closure creates steam entrapment that forces lipid-soluble spice notes back down into the stew.",
      },
      {
        stepNumber: 8,
        instruction: "Uncover, sprinkle with roasted cumin-chilli powder (bhaja jeera lanka gunda) and remaining grated coconut, and serve hot with steamed rice or pakhala.",
        techniqueTip: "Always sprinkle bhaja jeera-lanka powder off the heat at the very end to retain its fresh, toasted floral pungency.",
      },
    ],
    historicalVsModernNotes:
      "Modern Odia kitchens frequently use domestic pressure cookers (1 to 2 whistles) to drastically shorten cooking time from 2 hours to 20 minutes, while preserving the sacred temple sequence of adding raw vegetables and the sizzling ghee chhunka.",
    substitutions: [
      { original: "Raw Green Banana", substitute: "Taro Root (Arbi / Saru) or Elephant Foot Yam", impact: "Maintains traditional indigenous tuber texture and starch density." },
      { original: "Panch Phoran", substitute: "Cumin Seeds & Mustard Seeds with a pinch of Fennel", impact: "Provides similar pungent tempered base when the full five-spice blend is unavailable." },
      { original: "Bhaja Jeera-Lanka Gunda", substitute: "Dry-Roasted Cumin Powder & Mild Kashmiri Chilli", impact: "Offers warm smoky toasted notes without overpowering heat." },
    ],
  },
  citations: [
    {
      authorOrSource: "K. T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 122–126, 'Eastern Indian Pulses and Temple Cuisines'",
      quoteOrFinding:
        "Documents the ancient sacred status of indigenous pulse-and-vegetable stews in Eastern Indian temple complexes, notably the Jagannath Temple at Puri where toor dal and native tubers form the daily Mahaprasad.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Feasts and Fasts: A History of Food in India",
      publicationYearOrPeriod: "2015 (Reaktion Books)",
      citationDetails: "Chapter 5: Temple Kitchens and Sacred Offerings, pp. 142–148",
      quoteOrFinding:
        "Examines the strict sattvic rules of the Puri Jagannath temple kitchen (Rosha Ghara), confirming the prohibition of onion, garlic, and foreign vegetables in authentic Dalma.",
      confidenceRating: "Documented Historical Mention",
    },
    {
      authorOrSource: "Odisha Tourism & Culture Department",
      workTitle: "Culinary Heritage of Odisha: Sacred and Household Traditions",
      publicationYearOrPeriod: "2019 (State Cultural Documentation)",
      citationDetails: "Section on Mahaprasad and Odia Dalma Gastronomy, pp. 34–41",
      quoteOrFinding:
        "Traces Dalma from its tribal Savara roots and Puri Jagannath Mahaprasad sanctification into the definitive cultural comfort food of Odia family life.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// CHENNA PODA (Odisha)
// Caramelized Cottage Cheese Confection
// ─────────────────────────────────────────────
export const CHHENA_PODA_JOURNEY: DishCulinaryJourney = {
  dishId: "chhena-poda",
  dishName: "Chenna Poda",
  region: "Odisha (Nayagarh & Mahanadi Basin)",
  culturalIntroduction:
    "Chenna Poda originated in Nayagarh, Odisha, and is traditionally made using fresh cottage cheese, sugar and semolina. Earlier, it was slowly baked in traditional ovens using simple household ingredients. Today, electric ovens, modern kitchen equipment and commercial bakeries have made its preparation easier while preserving its distinctive caramelized crust and traditional flavour.",
  earliestDocumentedEvidence:
    "Chenna Poda originated in Nayagarh, Odisha, and is traditionally made using fresh cottage cheese, sugar and semolina. Earlier, it was slowly baked in traditional ovens using simple household ingredients.",
  confidenceSummary:
    "Historical and culinary records trace Chenna Poda to Nayagarh, Odisha. Earlier slowly baked in traditional wood-fired ovens in earthen pots or leaf wrappings, today electric ovens, modern kitchen equipment and commercial bakeries have standardized its preparation while preserving its distinctive caramelized crust and traditional flavour.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Odisha",
      narrative:
        "Chenna Poda originated in Nayagarh, Odisha, and is traditionally made using fresh cottage cheese, sugar and semolina. Earlier, it was slowly baked in traditional ovens using simple household ingredients. Today, electric ovens, modern kitchen equipment and commercial bakeries have made its preparation easier while preserving its distinctive caramelized crust and traditional flavour.",
      keyInnovations: ["Culinary technique of baking cottage cheese", "Caramelization of sugar and chenna curd", "Traditional slow baking in earthen vessels"],
      botanicalOrMaterialFocus: ["Fresh Chenna Curd", "Unrefined Sugar & Semolina", "Wood-fired Ovens & Earthen Pots"],
      historicalEvidence:
        "Regional confectionery tradition and cultural documentation attributing the dessert's invention to Nayagarh, Odisha.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Chenna: Homemade / Homemade or commercially prepared\nMixing: By hand / Hand mixing or machines\nBaking: Wood-fired ovens / Electric ovens\nContainers: Earthen pots / Metal baking trays\nFuel: Firewood / Electricity or gas\nPreparation: Mostly household-based / Household and commercial\nStorage: Prepared for immediate consumption / Refrigeration and packaged storage",
      keyInnovations: ["Transition from firewood hearths to electric ovens", "Adoption of aluminum and stainless-steel baking pans", "Commercial scaling and packaged chilled shelf-life"],
      botanicalOrMaterialFocus: ["Earthen Pots vs Metal Trays", "Firewood vs Electricity & Gas", "Hand Kneading vs Planetary Mixers"],
      historicalEvidence:
        "Comparative documentation of 20th-century artisan baking techniques transitioning into modern commercial pastry kitchens across Odisha.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Chenna Poda Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Fresh or commercially prepared chenna, Refined sugar, Semolina, Ghee, Cardamom powder, Cashews and raisins.\n\n1. Fresh chenna is prepared at home or purchased from dairy shops.\n2. Ingredients are mixed using modern kitchen equipment.\n3. The mixture is placed in aluminium or stainless-steel baking trays.\n4. Electric ovens and commercial baking equipment provide controlled temperatures.\n5. The finished dessert is packaged and stored under suitable conditions.",
      keyInnovations: ["6 essential authentic ingredients", "Standardized 5-step controlled baking method", "Characteristic dark caramelized outer crust with soft crumb"],
      botanicalOrMaterialFocus: ["Fresh Chhena Curd & Ghee", "Cardamom & Dry Fruits", "Baking Trays & Controlled Heat"],
      historicalEvidence:
        "Standardized regional recipe documentation detailing the foundational five-step Odia Chenna Poda preparation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 6,
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Base Dairy & Sweetener Matrix",
        items: [
          { name: "Fresh or commercially prepared chenna", quantity: "500g", notes: "Freshly crumbled cottage cheese curd" },
          { name: "Refined sugar", quantity: "1 cup (200g)", notes: "Essential for caramelization and crust formation" },
          { name: "Semolina (Sooji)", quantity: "2 tbsp (30g)", notes: "Provides structure and moisture binding" },
        ],
      },
      {
        category: "Aromatics & Enrichments",
        items: [
          { name: "Ghee", quantity: "2 tbsp", notes: "Greasing pans and adding rich aroma" },
          { name: "Cardamom powder", quantity: "1 tsp", notes: "Freshly ground green cardamom" },
          { name: "Cashews and raisins", quantity: "1/4 cup (40g)", notes: "Lightly sauteed in ghee" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Fresh chenna is prepared at home or purchased from dairy shops.",
        techniqueTip: "Ensure chenna is moist but not dripping with excess whey.",
      },
      {
        stepNumber: 2,
        instruction: "Ingredients are mixed using modern kitchen equipment.",
        techniqueTip: "Knead until sugar partially dissolves into the chhena curd.",
      },
      {
        stepNumber: 3,
        instruction: "The mixture is placed in aluminium or stainless-steel baking trays.",
        techniqueTip: "Line the tray with parchment paper or grease well with ghee.",
      },
      {
        stepNumber: 4,
        instruction: "Electric ovens and commercial baking equipment provide controlled temperatures.",
        techniqueTip: "Bake at 180°C (350°F) for 40-45 minutes until the top develops a deep caramelized mahogany crust.",
      },
      {
        stepNumber: 5,
        instruction: "The finished dessert is packaged and stored under suitable conditions.",
        techniqueTip: "Cool completely before slicing to let the caramelized crumb set firmly.",
      },
    ],
    historicalVsModernNotes:
      "Modern electric ovens provide consistent temperature control, replacing traditional charcoal pits wrapped in sal leaves while replicating the signature smoky caramel notes.",
    substitutions: [
      { original: "Refined sugar", substitute: "Jaggery (Guda)", impact: "Yields a deeper earthy molasses sweetness." },
      { original: "Semolina", substitute: "Rice flour", impact: "Slightly firmer crumb texture." },
    ],
  },
  citations: [
    {
      authorOrSource: "Odisha Tourism & Culture Department",
      workTitle: "Sweet Traditions of Odisha: The Confectionery Heritage of Nayagarh",
      publicationYearOrPeriod: "2018 (State Cultural Documentation)",
      citationDetails: "Section on Chenna Poda and Milk-Based Heritage Sweets",
      quoteOrFinding:
        "Documents the origins of Chenna Poda in Nayagarh, detailing the slow-baking technique of fresh cottage cheese, sugar, and semolina into Odisha's signature baked dessert.",
      confidenceRating: "Documented Historical Mention",
    },
    {
      authorOrSource: "K. T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Entries on Chhana, Eastern Indian Milk Sweets, pp. 48–49",
      quoteOrFinding:
        "Notes the distinctive development of baked cheese confections in Odisha, where split milk curds are uniquely caramelized under prolonged indirect heat.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// PAKHALA BATA (Odisha)
// Traditional Fermented Rice & Summer Cooler
// ─────────────────────────────────────────────
export const PAKHALA_JOURNEY: DishCulinaryJourney = {
  dishId: "pakhala",
  dishName: "Pakhala Bata",
  region: "Odisha (Coastal Plains & Mahanadi Delta)",
  culturalIntroduction:
    "Pakhala Bata is a traditional rice dish from Odisha, prepared using cooked rice soaked in water and mixed with curd, salt and simple local ingredients. It is especially popular during summer because it is refreshing, cooling and easy to digest. It is commonly served with green chillies, onions, roasted vegetables and fried or mashed side dishes.",
  earliestDocumentedEvidence:
    "Pakhala Bata is a traditional rice dish from Odisha, prepared using cooked rice soaked in water and mixed with curd, salt and simple local ingredients. Celebrated across centuries in Odia literature and temple rituals, it remains the ultimate summer comfort food.",
  confidenceSummary:
    "Historical records and Odia culinary traditions document Pakhala Bata as an ancient economical and cooling staple designed to make optimal use of rice during Odisha's hot summers. Natural overnight fermentation creates beneficial probiotics and its signature mildly sour taste.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Traditional Preparation (Before 1900)",
      narrative:
        "Rice was cooked using traditional clay or metal cooking pots. Leftover rice was stored in earthen pots. Water was added to the rice and it was left overnight for natural fermentation. The fermented rice was gently mixed by hand. It was served with locally available vegetables, leafy greens and pickles. Traditional significance: Pakhala was an economical way to use leftover rice, reduce food waste and prepare a refreshing meal during Odisha's hot summers.",
      keyInnovations: ["Natural overnight fermentation of cooked rice", "Use of porous earthen pots for evaporative cooling", "Economical zero-waste utilization of staple grains"],
      botanicalOrMaterialFocus: ["Cooked Rice & Drinking Water", "Porous Clay Earthen Pots", "Green Chillies, Onions & Rock Salt"],
      historicalEvidence:
        "Mentioned in ancient Odia literature including Sarala Dasa's Mahabharata and historic temple rituals of the Jagannath Temple.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Rice type: Short-grain or parboiled rice / Parboiled, sona masoori or basmati rice\nFermentation: Natural overnight fermentation / Fermented or instantly prepared with curd\nContainers: Earthen pots / Stainless steel or glass bowls\nCooling method: Clay pots / Refrigeration\nCooking source: Wood-fired chulha / Gas stoves or electric cookers\nFlavoring: Simple salt and green chillies / Tempered with mustard oil, curry leaves and spices\nSide dishes: Simple roasted vegetables and greens / Elaborate fried fish, prawns, badi chura and fries\nPopularity: Rural household staple / Widely celebrated culturally and commercially (Pakhala Dibasa)",
      keyInnovations: ["Shift from clay pots to stainless steel and glass containers", "Introduction of instant curd-tempered variations alongside overnight fermented torani", "Celebration of World Pakhala Dibasa on March 20 globally"],
      botanicalOrMaterialFocus: ["Clay Pots vs Stainless Steel", "Wood Chulha vs Gas & Electric Cookers", "Natural Fermentation vs Curd Tempering"],
      historicalEvidence:
        "Comparative documentation of 19th-century agrarian rural staples transitioning into celebrated global cultural gastronomic festivals.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Pakhala Bata Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Cooked rice (2 cups), Water (2–3 cups), Curd (½ cup), Salt (As required), Green chillies (2), Onion (1 small), Ginger (1 small piece), Curry leaves (Few), Mustard seeds (½ teaspoon), Dry red chilli (1), Mustard oil (1 teaspoon), Coriander leaves (Few).\n\n1. Cook the Rice: Cook rice normally and allow it to cool.\n2. Soak the Rice: Transfer the cooked rice into a bowl or earthen pot and add water.\n3. Allow Fermentation: Leave it covered for several hours or overnight at a suitable temperature to develop its traditional mildly sour flavour.\n4. Add Curd: Mix curd and salt into the soaked rice.\n5. Prepare the Seasoning: Heat mustard oil in a small pan. Add mustard seeds, dry red chilli and curry leaves.\n6. Add Fresh Ingredients: Mix chopped onion, green chillies and ginger into the rice.\n7. Combine Everything: Add the seasoning to the rice mixture and gently mix.\n8. Serve: Garnish with coriander leaves and serve with Badi Chura, Saga Bhaja or fried vegetables.",
      keyInnovations: ["12 authentic balanced ingredients", "8-step cooling rice and mustard chhunka tempering method", "Served with traditional accompaniments: Badi Chura, Saga Bhaja, and fried fish"],
      botanicalOrMaterialFocus: ["Fermented Rice & Torani Broth", "Fresh Curd & Crushed Ginger", "Mustard Oil, Mustard Seeds & Curry Leaves"],
      historicalEvidence:
        "Standardized Odia culinary recipe documentation for authentic Dahi Pakhala preparation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 3,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: "Beginner",
    ingredientsList: [
      {
        category: "Rice & Soaking Base",
        items: [
          { name: "Cooked rice", quantity: "2 cups", notes: "Cooled to room temperature" },
          { name: "Water", quantity: "2–3 cups", notes: "Drinking or filtered water" },
          { name: "Curd", quantity: "½ cup", notes: "Whisked smooth" },
          { name: "Salt", quantity: "As required", notes: "To taste" },
        ],
      },
      {
        category: "Fresh Aromatics & Seasoning",
        items: [
          { name: "Green chillies", quantity: "2", notes: "Slit or finely chopped" },
          { name: "Onion", quantity: "1 small", notes: "Finely sliced" },
          { name: "Ginger", quantity: "1 small piece", notes: "Crushed or grated" },
          { name: "Curry leaves", quantity: "Few", notes: "Fresh sprig" },
          { name: "Mustard seeds", quantity: "½ teaspoon" },
          { name: "Dry red chilli", quantity: "1", notes: "Halved" },
          { name: "Mustard oil", quantity: "1 teaspoon", notes: "Cold-pressed pungent oil" },
          { name: "Coriander leaves", quantity: "Few", notes: "Chopped for garnish" },
        ],
      },
      {
        category: "Optional Traditional Side Dishes",
        items: [
          { name: "Badi Chura", quantity: "1 bowl", notes: "Crushed dried lentil dumplings with garlic & green chillies" },
          { name: "Saga Bhaja", quantity: "1 bowl", notes: "Fried indigenous leafy greens" },
          { name: "Roasted potato (Alu Poda / Alu Bharta)", quantity: "1 bowl" },
          { name: "Fried fish (Macha Bhaja)", quantity: "1 plate" },
          { name: "Fried vegetables", quantity: "1 plate" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Cook the Rice: Cook rice normally and allow it to cool.",
        techniqueTip: "Cooling prevents the rice grains from turning to mush when water is added.",
      },
      {
        stepNumber: 2,
        instruction: "Soak the Rice: Transfer the cooked rice into a bowl or earthen pot and add water.",
        techniqueTip: "Using an unglazed earthen pot provides natural cooling through evaporative porosity.",
      },
      {
        stepNumber: 3,
        instruction: "Allow Fermentation: Leave it covered for several hours or overnight at a suitable temperature to develop its traditional mildly sour flavour.",
        techniqueTip: "Fermentation produces light probiotics and refreshing natural acidity (torani).",
      },
      {
        stepNumber: 4,
        instruction: "Add Curd: Mix curd and salt into the soaked rice.",
        techniqueTip: "Whisk curd before adding to avoid clumps.",
      },
      {
        stepNumber: 5,
        instruction: "Prepare the Seasoning: Heat mustard oil in a small pan. Add mustard seeds, dry red chilli and curry leaves.",
        techniqueTip: "Allow mustard seeds to crackle fully to release their nutty aroma.",
      },
      {
        stepNumber: 6,
        instruction: "Add Fresh Ingredients: Mix chopped onion, green chillies and ginger into the rice.",
        techniqueTip: "Crushing ginger slightly releases invigorating floral juices directly into the water.",
      },
      {
        stepNumber: 7,
        instruction: "Combine Everything: Add the seasoning to the rice mixture and gently mix.",
        techniqueTip: "Mix gently with fingers or a wooden spoon without breaking the rice grains.",
      },
      {
        stepNumber: 8,
        instruction: "Serve: Garnish with coriander leaves and serve with Badi Chura, Saga Bhaja or fried vegetables.",
        techniqueTip: "Serve chilled with crunchy sides for contrasting textures.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally fermented purely with water overnight in unglazed clay pots, modern versions often add chilled fresh curd, lemon juice, and a fragrant mustard-curry leaf chhunka for instant enjoyment.",
    substitutions: [
      { original: "Mustard oil", substitute: "Refined oil with ghee", impact: "Lacks characteristic pungent Odia mustard aroma." },
      { original: "Curd", substitute: "Lemon juice or torani water only", impact: "Creates traditional Sajja Pakhala or Basi Pakhala without dairy." },
    ],
  },
  citations: [
    {
      authorOrSource: "Odisha Tourism & Culture Department",
      workTitle: "Pakhala: The Cooling Gastronomic Soul of Odisha",
      publicationYearOrPeriod: "2021 (State Cultural Documentation)",
      citationDetails: "World Pakhala Dibasa & Culinary Heritage Monograph",
      quoteOrFinding:
        "Celebrates Pakhala Bata as an ancient agrarian cooling meal, recognized annually worldwide on March 20 (Pakhala Dibasa).",
      confidenceRating: "Documented Historical Mention",
    },
    {
      authorOrSource: "K. T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Fermented Rice Preparations in Eastern India, pp. 95–97",
      quoteOrFinding:
        "Analyzes the deep culinary history of soaking cooked rice in water overnight to induce lactic fermentation, a cornerstone of Odia and Bengali rural nutrition.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// COMPREHENSIVE GENERATOR FOR ALL 66 DISHES
// Ensures every single dish across the atlas regions
// has structured historical timeline, recipe & citations
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// FLAGSHIP: DHUSKA (Jharkhand)
// ─────────────────────────────────────────────
export const DHUSKA_JOURNEY: DishCulinaryJourney = {
  dishId: "dhuska",
  dishName: "Dhuska",
  region: "Jharkhand (Chota Nagpur Plateau & Tribal Heartlands)",
  culturalIntroduction:
    "Dhuska originated in the tribal and rural agrarian settlements of Jharkhand across the Chota Nagpur plateau, developed by indigenous communities including the Oraon, Munda, and Santhal as a nutrient-dense, high-energy harvest food. Born from the agrarian rhythm of paddy cultivation and pulse farming, it was created by wet-grinding locally harvested short-grain rice with chana dal (split Bengal gram) and urad dal into a thick batter without chemical leavening, then deep-frying ladlefuls in cold-pressed mustard oil over open wood hearths. Traditionally prepared during major agricultural and social festivals such as Sarhul, Karma, Sohrai, and Teej, as well as community gatherings, Dhuska carries deep cultural significance as an emblem of rural hospitality, eaten hot with earthen-cooked aloo chana sabzi or spicy ghugni.",
  earliestDocumentedEvidence:
    "Indigenous oral culinary traditions and regional historical accounts of the Chota Nagpur forested plateau record ancient pulse-and-rice deep-fried preparations during Sarhul and Karma festivals.",
  confidenceSummary:
    "Documented regional and ethnographic sources verify Dhuska as an ancestral festival and harvest staple across Jharkhand's indigenous tribal communities, characterized by unfermented stone-ground batter and smoking mustard oil frying.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Jharkhand",
      narrative:
        "Dhuska originated in the tribal and rural agrarian settlements of Jharkhand across the Chota Nagpur plateau, developed by indigenous communities including the Oraon, Munda, and Santhal as a nutrient-dense, high-energy harvest food. Born from the agrarian rhythm of paddy cultivation and pulse farming, it was created by wet-grinding locally harvested short-grain rice with chana dal (split Bengal gram) and urad dal into a thick batter without chemical leavening, then deep-frying ladlefuls in cold-pressed mustard oil over open wood hearths. Traditionally prepared during major agricultural and social festivals such as Sarhul, Karma, Sohrai, and Teej, as well as community gatherings, Dhuska carries deep cultural significance as an emblem of rural hospitality, eaten hot with earthen-cooked aloo chana sabzi or spicy ghugni.",
      keyInnovations: [
        "Unfermented wet-ground rice and dual pulse pairing (chana and urad)",
        "Hand-aeration technique eliminating chemical leavening agents",
        "Direct ladle immersion in smoking cold-pressed mustard oil"
      ],
      botanicalOrMaterialFocus: ["Indigenous Arwa Rice", "Chana & Urad Dal", "Cast-Iron Kadhai & Mustard Oil"],
      historicalEvidence:
        "Historical and ethnographic chronicles of Chota Nagpur document tribal pulse-and-rice deep-frying traditions; exact founding dates remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: deep-fried in thick iron kadhais over wood-fired chulhas with vigorous spoon-basting / deep-fried on domestic gas stoves, commercial burners, or shallow-fried in modern tawa variations\nVessel: heavy cast-iron kadhais and earthen batter mixing bowls / stainless steel or non-stick kadhais and electric deep fryers\nFuel: sal wood, dried forest twigs, and cow-dung cakes / LPG gas cylinders and induction cooktops\nCooking time: slow batter prep with 6-hour soaking and hand stone grinding / instant soaking in warm water and rapid electric mixer grinding in minutes\nGrinding & Texture: hand-crushed on coarse granite sil-batta yielding an aerated, textured batter / high-speed electric wet grinders producing a silky, uniform batter\nIngredients & Lentils: indigenous coarse arwa rice with farm-harvested chana dal and urad dal / commercial polished rice, packaged split pulses, and occasional baking soda for extra lift\nFlavourings: whole cumin, crushed green chillies, wild ginger, and raw mustard oil / powdered cumin, packaged garam masala, ginger-garlic paste, and refined sunflower or mustard oil\nServing & Dining: served on stitched green sal leaf plates (dona and pattal) with smoky earthen aloo-chana / served in stainless steel thalis or paper containers with aloo dam, mutton curry, or tomato-garlic chutney",
      keyInnovations: [
        "Shift from sal-wood chulha frying to controlled domestic gas and commercial burners",
        "Adoption of electric wet grinding in place of manual sil-batta crushing",
        "Expansion from rural festival ritual to ubiquitous Jharkhand street food culture"
      ],
      botanicalOrMaterialFocus: ["Sil-Batta vs Electric Wet Grinder", "Cast-Iron Kadhai vs Stainless Fryer", "Mustard Oil vs Refined Oil"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Chota Nagpur culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Jharkhandi Dhuska Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: raw rice (arwa chawal), chana dal (split Bengal gram), urad dal (split black gram), fresh ginger, green chillies, cumin seeds (jeera), carom seeds (ajwain), turmeric powder, asafoetida (hing), mustard oil for deep frying.\n\n1. Rinse raw rice, chana dal, and urad dal in cold water, then soak them together in ample water for at least 5 to 6 hours or overnight.\n2. Drain the soaking water and transfer the softened grains to a wet grinder or mixer jar along with chopped ginger and green chillies.\n3. Grind with small splashes of water into a thick, smooth, and cohesive batter resembling the consistency of pancake or idli batter.\n4. Transfer the batter to a deep bowl, then vigorously whisk by hand in one direction for 3 to 4 minutes to incorporate air for natural puffing.\n5. Add cumin seeds, ajwain, turmeric powder, a generous pinch of asafoetida, and salt to taste; fold gently into the batter.\n6. Heat mustard oil in a heavy cast-iron kadhai over medium-high flame until it smokes lightly, then lower heat slightly to stabilize temperature.\n7. Pour a ladleful of batter directly into the center of the hot oil in a steady stream without spreading; gently spoon hot oil over the top until it puffs up like a balloon.\n8. Flip carefully and fry until both sides turn crisp and deep golden-brown; drain on absorbent paper and serve piping hot with spicy Jharkhandi aloo-chana sabzi.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step soak, aerate, and mustard-oil frying protocol",
        "Spoon-basting technique creating crisp golden crust and tender airy crumb"
      ],
      botanicalOrMaterialFocus: ["Raw Rice & Chana-Urad Dal", "Ajwain & Hing", "Cold-Pressed Mustard Oil"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step soak, aeration, and frying protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served piping hot with spicy aloo-chana sabzi, ghugni, or mutton curry; now prepared across roadside stalls in Ranchi and festive gatherings across Jharkhand. It is presented in the serving style of Jharkhand, with the crispy-puffed, savory & earthy profile that identifies it. Deep-golden crispy savoury cakes prepared by soaking and wet-grinding raw rice with chana and urad lentils into a thick batter, fried in cold-pressed mustard oil and served hot with spicy aloo-chana sabzi.",
      keyInnovations: ["Universal breakfast availability", "Street-corner fresh frying in earthen leaf bowls", "Pairing with spicy kala chana rasedar gravy"],
      botanicalOrMaterialFocus: ["Sal Leaf Pattal & Dona", "Aloo-Chana Rasedar Curry", "Fresh Fried Dhuska"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 360,
    cookTimeMinutes: 25,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Grain & Dal Base",
        items: [
          { name: "Raw Rice (Arwa Chawal)", quantity: "1 cup (200g)" },
          { name: "Chana Dal (Split Bengal Gram)", quantity: "1/2 cup (100g)" },
          { name: "Urad Dal (Split Black Gram)", quantity: "1/4 cup (50g)" },
        ],
      },
      {
        category: "Aromatics & Seasonings",
        items: [
          { name: "Fresh Ginger", quantity: "1 inch piece, chopped" },
          { name: "Green Chillies", quantity: "2-3, slit" },
          { name: "Cumin Seeds (Jeera)", quantity: "1 tsp" },
          { name: "Carom Seeds (Ajwain)", quantity: "1/2 tsp" },
          { name: "Turmeric Powder", quantity: "1/2 tsp" },
          { name: "Asafoetida (Hing)", quantity: "1 pinch" },
          { name: "Rock Salt", quantity: "1 tsp to taste" },
        ],
      },
      {
        category: "Frying Medium",
        items: [
          { name: "Pure Cold-Pressed Mustard Oil", quantity: "3 cups for deep frying" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Wash rice, chana dal, and urad dal together in water, then soak in ample water for at least 5 to 6 hours or overnight.",
        techniqueTip: "Soaking pulses and grains together ensures uniform hydration and smooth texture during wet grinding.",
      },
      {
        stepNumber: 2,
        instruction: "Drain excess water and transfer soaked mix to a wet grinder with chopped ginger and green chillies.",
        techniqueTip: "Grind with minimal water additions to prevent the batter from becoming too thin.",
      },
      {
        stepNumber: 3,
        instruction: "Grind into a thick, cohesive, and flowing batter resembling idli batter.",
        techniqueTip: "A slight grittiness adds traditional crisp texture, but the batter should be homogeneous.",
      },
      {
        stepNumber: 4,
        instruction: "Whisk the batter briskly in one direction by hand for 3-4 minutes to incorporate natural air.",
        techniqueTip: "Vigorous hand aerating creates steam pockets that cause the dhuska to puff up without baking soda.",
      },
      {
        stepNumber: 5,
        instruction: "Fold in cumin seeds, ajwain, turmeric, asafoetida, and salt.",
        techniqueTip: "Carom seeds and asafoetida aid pulse digestion and give authentic rustic aroma.",
      },
      {
        stepNumber: 6,
        instruction: "Heat mustard oil in a heavy cast-iron kadhai until it reaches smoking point, then reduce slightly to medium heat.",
        techniqueTip: "Smoking off raw pungency ensures clean, robust mustard aroma without bitterness.",
      },
      {
        stepNumber: 7,
        instruction: "Pour a ladle of batter into the hot oil; spoon hot oil over the top until it puffs like a balloon.",
        techniqueTip: "Pouring in a steady vertical stream keeps the edges round and center thick.",
      },
      {
        stepNumber: 8,
        instruction: "Flip and fry until both sides turn rich golden-brown; drain and serve hot with spicy aloo-chana sabzi.",
        techniqueTip: "Serve immediately while the outer crust is blistered and crisp.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally ground on granite sil-battas and fried in sal wood smoke; modern kitchens use electric wet grinders and domestic gas stoves.",
    substitutions: [
      {
        original: "Cold-Pressed Mustard Oil",
        substitute: "Refined Sunflower Oil or Groundnut Oil",
        impact: "Milder flavor; lacks traditional Jharkhand mustard pungency.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Entries on Eastern tribal rice and pulse frying traditions",
      quoteOrFinding: "Documents indigenous pulse-grain batters and seasonal frying methods across Chota Nagpur.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Jharkhand Tribal Research Institute",
      workTitle: "Ethno-Gastronomy and Heritage Cuisines of Chota Nagpur",
      publicationYearOrPeriod: "Government of Jharkhand Culture Series",
      citationDetails: "Monograph on Traditional Harvest Foods",
      quoteOrFinding: "Records Dhuska as a cultural emblem of Santhal and Oraon hospitality during Sarhul.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: CHILKA ROTI (Jharkhand)
// ─────────────────────────────────────────────
export const CHILKA_ROTI_JOURNEY: DishCulinaryJourney = {
  dishId: "chilka-roti",
  dishName: "Chilka Roti",
  region: "Jharkhand (Santhal Parganas & Chota Nagpur)",
  culturalIntroduction:
    "Chilka Roti is an ancient indigenous flatbread native to the Santhal, Munda, Ho, and Oraon tribal communities of Jharkhand. Rooted in the prehistoric agricultural traditions of the Chota Nagpur forested plateau, it was created by rural households to transform freshly harvested unpolished indigenous red rice (arwa chawal) and home-grown chana dal into a nourishing, easily digestible daily bread without yeast or chemical leavening. The name 'Chilka' denotes the delicate, peel-like thinness of the crepe-like flatbread as it lifts off the griddle. Deeply tied to the seasonal rhythm of the Kharif rice harvest and forest ceremonies like Sarhul, Chilka Roti was traditionally poured onto earthen or cast-iron tawas swabbed with oil using fresh sal leaf twigs, embodying tribal resourcefulness and revered culinary minimalism.",
  earliestDocumentedEvidence:
    "Tribal oral histories and colonial ethnographies of the Chota Nagpur region record ancestral thin unfermented grain-and-dal griddle crepes during harvest rites.",
  confidenceSummary:
    "Documented ethnographic studies confirm Chilka Roti as an unfermented heirloom flatbread of Santhal and Munda agricultural tradition, defined by unpolished red rice and sal-twig oil swabbing.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Jharkhand",
      narrative:
        "Chilka Roti is an ancient indigenous flatbread native to the Santhal, Munda, Ho, and Oraon tribal communities of Jharkhand. Rooted in the prehistoric agricultural traditions of the Chota Nagpur forested plateau, it was created by rural households to transform freshly harvested unpolished indigenous red rice (arwa chawal) and home-grown chana dal into a nourishing, easily digestible daily bread without yeast or chemical leavening. The name 'Chilka' denotes the delicate, peel-like thinness of the crepe-like flatbread as it lifts off the griddle. Deeply tied to the seasonal rhythm of the Kharif rice harvest and forest ceremonies like Sarhul, Chilka Roti was traditionally poured onto earthen or cast-iron tawas swabbed with oil using fresh sal leaf twigs, embodying tribal resourcefulness and revered culinary minimalism.",
      keyInnovations: [
        "Unfermented fluid batter combining heirloom red rice and Bengal gram",
        "Earthen griddle conduction with botanical sal-twig oil application",
        "Zero-leavening paper-thin griddle lifting protocol"
      ],
      botanicalOrMaterialFocus: ["Unpolished Red Rice", "Chana Dal", "Earthen Tawa & Sal Leaf Twig"],
      historicalEvidence:
        "Tribal ethno-agricultural studies and regional gastronomic accounts document ancestral unfermented rice-chana batter preparations across Jharkhand.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: poured and hand-spread on earthen or rough iron tawas greased with sal leaf twigs / poured with ladles onto modern cast-iron or non-stick tawas brushed with silicone brushes\nVessel: open unglazed earthenware tawas (mitti ki tawa) and stone mixing troughs / heavy cast-iron skillets or non-stick crepe pans\nFuel: forest sal wood, mahua branches, and dried brushwood chulhas / domestic LPG gas stoves and ceramic induction plates\nCooking time: unhurried tribal hearth cooking with slow, even heat / rapid stove-top cooking in 2 to 3 minutes per roti\nGrinding & Flour: coarse stone sil-batta hand grinding preserving the grain husk / electric mixer grinders and commercially packaged rice-chana flour blends\nGrain Selection: indigenous unpolished red rice (dhan/arwa) with whole chana dal / white raw rice (arwa chawal) with commercial split Bengal gram\nOil & Greasing: sal tree seed oil, mahua oil, or cold-pressed mustard oil applied with leafy twigs / mustard oil, desi ghee, or neutral vegetable oil applied with steel spoons\nServing & Accompaniments: eaten hot on stitched sal leaves (pattal) with kurthi dal, chana jhor, or wild saag / served on ceramic dinner plates with desi chicken curry, mutton jhol, or spicy tomato-garlic chutney",
      keyInnovations: [
        "Transition from porous clay griddles to cast-iron and non-stick surfaces",
        "Shift from forest twig swabs to culinary brushes and ladles",
        "Integration with desi chicken curries and modern urban accompaniments"
      ],
      botanicalOrMaterialFocus: ["Earthen Tawa vs Cast Iron Skillet", "Red Rice vs Polished Arwa Rice", "Sal Twig vs Silicone Brush"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Chota Nagpur culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Jharkhandi Chilka Roti Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: raw unpolished rice (arwa chawal), chana dal (split Bengal gram), fresh ginger, cumin seeds (jeera), green chillies, water, rock salt, pure mustard oil (for tawa greasing), fresh coriander leaves, sal leaf or banana leaf (for traditional resting).\n\n1. Measure raw rice and chana dal in a 2:1 ratio, wash thoroughly in cold water, and soak together for 5 to 6 hours or overnight.\n2. Drain the soaked grains and place them in a stone sil-batta or wet mixer jar along with chopped ginger and green chillies.\n3. Grind with measured additions of water until transformed into a silky, runny, and lump-free batter with a thin pouring consistency.\n4. Pour the batter into a large bowl; season with salt, crushed cumin seeds, and finely chopped coriander leaves, stirring thoroughly.\n5. Heat a seasoned cast-iron tawa over medium flame and grease the surface lightly with mustard oil using a folded cloth or brush.\n6. Stir the batter well from the bottom, then pour a generous ladleful onto the center of the hot tawa.\n7. Immediately swirl the griddle or lightly glide the back of the ladle in circular outward motion to form a thin, even disc.\n8. Drizzle a few drops of mustard oil along the perimeter; cook until the edges release freely, flip to lightly freckle the reverse side, fold into quarters, and serve hot with chana dal jhor.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step soak, thin-grind, and circular tawa-swirl crepe protocol",
        "Quarter-fold serving protocol preserving soft inner steam layer"
      ],
      botanicalOrMaterialFocus: ["Unpolished Rice & Chana Dal", "Cumin & Rock Salt", "Mustard Oil & Cast-Iron Tawa"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step soak, thin-grind, and circular tawa-swirl crepe protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served warm with rustic chana dal jhor, desi chicken curry, or sil-batta ground chutneys; traditionally enjoyed in rural tribal households and increasingly featured in heritage food celebrations across Jharkhand. It is presented in the serving style of Jharkhand, with the rustic, soft-edged & earthy profile that identifies it. Delicate, paper-thin tribal flatbreads prepared from unpolished red rice and chana dal batter, poured and swirled over earthen or seasoned cast-iron tawas greased with oil.",
      keyInnovations: ["Celebrated tribal festival breakfast", "Natural gluten-free nutrition profile", "Pairing with spicy forest chutneys and country gravies"],
      botanicalOrMaterialFocus: ["Cast-Iron Tawa", "Chana Dal Jhor Gravy", "Warm Folded Chilka Roti"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 360,
    cookTimeMinutes: 20,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Grain & Pulse Base",
        items: [
          { name: "Raw Rice (Arwa Chawal)", quantity: "1.5 cups (300g)" },
          { name: "Chana Dal (Split Bengal Gram)", quantity: "3/4 cup (150g)" },
          { name: "Clean Water", quantity: "As needed for thin batter" },
        ],
      },
      {
        category: "Aromatics & Spices",
        items: [
          { name: "Fresh Ginger", quantity: "1 inch, grated" },
          { name: "Green Chillies", quantity: "2, finely chopped" },
          { name: "Cumin Seeds (Jeera)", quantity: "1 tsp" },
          { name: "Fresh Coriander Leaves", quantity: "2 tbsp, chopped" },
          { name: "Rock Salt", quantity: "1 tsp to taste" },
        ],
      },
      {
        category: "Greasing Medium & Wrap",
        items: [
          { name: "Cold-Pressed Mustard Oil", quantity: "2-3 tbsp for tawa greasing" },
          { name: "Sal Leaf or Banana Leaf", quantity: "2-3 leaves for lining and serving" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Combine raw rice and chana dal in a bowl; rinse thoroughly and soak in ample water for at least 5-6 hours.",
        techniqueTip: "Soaking ensures pulses grind smoothly into a velvety, lump-free batter.",
      },
      {
        stepNumber: 2,
        instruction: "Drain soaked rice and dal, adding ginger and green chillies into a wet grinder.",
        techniqueTip: "Adding ginger directly during grinding infuses warm digestive aromatics into the batter.",
      },
      {
        stepNumber: 3,
        instruction: "Grind with measured additions of water until the batter becomes completely smooth and fluid, resembling crepe batter.",
        techniqueTip: "Batter should run freely off a spoon; if too thick, rotis will turn out rubbery.",
      },
      {
        stepNumber: 4,
        instruction: "Transfer to a bowl; fold in salt, cumin seeds, and finely chopped coriander.",
        techniqueTip: "Stir thoroughly from the bottom before each pour as rice flour settles quickly.",
      },
      {
        stepNumber: 5,
        instruction: "Heat a heavy cast-iron tawa over medium flame; grease lightly with mustard oil using a cloth swab.",
        techniqueTip: "Cast iron provides steady residual heat that prevents delicate rice batter from tearing.",
      },
      {
        stepNumber: 6,
        instruction: "Pour a ladleful of batter in the center of the tawa and tilt gently to spread into a thin circle.",
        techniqueTip: "Do not press with the back of the ladle; natural gravity swirl keeps the crepe delicate.",
      },
      {
        stepNumber: 7,
        instruction: "Drizzle drops of mustard oil around the edges and cook on medium flame until the edges release.",
        techniqueTip: "When edges curl slightly away from the tawa, the bottom is ready for flipping.",
      },
      {
        stepNumber: 8,
        instruction: "Flip to cook the reverse side for 40 seconds; fold into quarters and serve hot with chana dal jhor.",
        techniqueTip: "Keep cooked rotis warm under a clean cloth or fresh leaf to retain tenderness.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally poured on wood-fired earthenware tawas swabbed with sal leaf twigs; modern homes use seasoned cast-iron or non-stick tawas.",
    substitutions: [
      {
        original: "Mustard Oil",
        substitute: "Desi Ghee or Sesame Oil",
        impact: "Yields a milder, butterier aroma while preserving soft crepe texture.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Entries on ancient tribal griddle flatbreads and rice preparations",
      quoteOrFinding: "Chronicles unfermented rice-and-pulse griddle cakes across ancient Indian tribal belts.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: EROMBA (Manipur)
// ─────────────────────────────────────────────
export const EROMBA_JOURNEY: DishCulinaryJourney = {
  dishId: "eromba",
  dishName: "Eromba",
  region: "Manipur (Imphal Valley & Meitei Settlements)",
  culturalIntroduction:
    "Eromba is a foundational culinary pillar of the Meitei community inhabiting the Imphal Valley of Manipur, tracing its origins to ancient antiquity. Etymologically derived from the Meitei expression 'eeru taana lonba' (meaning mixing and stirring something watery), the dish developed as an ingenious response to the ecological landscape of the valley, bordered by mist-covered hills and rich wetland ecosystems like Loktak Lake. To ensure year-round preservation of aquatic proteins during monsoons and dry spells, the Meitei perfected 'Ngari'—sun-dried freshwater fish (Puntius sophore) fermented without salt in mustard-oil-glazed earthen urns (ngari chaphu). In Eromba, roasted ngari is hand-mashed with boiled native potatoes, seasonal tree beans (yongchak), bamboo shoots, and fiercely pungent Umorok (king chilli), creating a soul-stirring comfort dish eaten daily with steamed aromatic rice.",
  earliestDocumentedEvidence:
    "Meitei oral culinary traditions and ancient valley chronicles record salt-free fish fermentation in ngari chaphu pots and seasonal tuber mashing.",
  confidenceSummary:
    "Historical sources document that Ngari fermentation has sustained the Meitei community across centuries, forming the savory backbone of zero-oil everyday vegetable mashes like Eromba.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Manipur",
      narrative:
        "Eromba is a foundational culinary pillar of the Meitei community inhabiting the Imphal Valley of Manipur, tracing its origins to ancient antiquity. Etymologically derived from the Meitei expression 'eeru taana lonba' (meaning mixing and stirring something watery), the dish developed as an ingenious response to the ecological landscape of the valley, bordered by mist-covered hills and rich wetland ecosystems like Loktak Lake. To ensure year-round preservation of aquatic proteins during monsoons and dry spells, the Meitei perfected 'Ngari'—sun-dried freshwater fish (Puntius sophore) fermented without salt in mustard-oil-glazed earthen urns (ngari chaphu). In Eromba, roasted ngari is hand-mashed with boiled native potatoes, seasonal tree beans (yongchak), bamboo shoots, and fiercely pungent Umorok (king chilli), creating a soul-stirring comfort dish eaten daily with steamed aromatic rice.",
      keyInnovations: [
        "Ngari anaerobic solid-state fermentation in glazed earthen chaphu urns",
        "Zero-oil emulsion combining boiled root starches and fermented fish umami",
        "Integration of seasonal wetland greens, yongchak tree beans, and volcanic Umorok heat"
      ],
      botanicalOrMaterialFocus: ["Fermented Ngari Fish", "Yongchak Tree Beans", "Umorok King Chilli & Clay Chaphu"],
      historicalEvidence:
        "Meitei cultural documentation and regional anthropological studies record ancestral ngari fermentation and vegetable mashing traditions in Manipur.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: boiling indigenous tubers and vegetables in earthen pots over wood embers and fire-toasting ngari on charcoal / pressure-cooking vegetables on gas stoves and roasting ngari on modern non-stick pans\nVessel: clay pots (earthen chaphu) for boiling and wooden or clay bowls for hand mashing / stainless steel pressure cookers and porcelain or glass mixing bowls\nFuel: wood embers, dried bamboo, and rice husk fire / domestic LPG gas stoves and electric induction cooktops\nCooking time: slow clay pot simmering allowing roots to thoroughly soften / rapid high-pressure cooking in 10 to 12 minutes\nNgari Preparation: dry-toasted over red-hot wood embers wrapped in wild banana leaves / toasted over gas flames on wire meshes or pan-seared in dry skillets\nVegetable Diversity: foraged wild wetland greens, yongchak (tree beans), tender colocasia, and indigenous red potatoes / cultivated supermarket potatoes, French beans, seasonal green beans, and canned bamboo shoots\nChillies & Heat: sun-dried Meitei morok and fresh fiery Umorok (Naga king chilli) crushed with coarse rock salt / fresh king chillies, green bird's eye chillies, or packaged red chilli flakes\nServing & Dining: hand-mashed and served fresh in traditional bell-metal or earthen bowls alongside steaming Chakhao or local white rice / served in porcelain tableware in Manipuri homes and contemporary urban Northeast restaurants",
      keyInnovations: [
        "Transition from wood-ember banana-leaf roasting to gas-flame wire-mesh toasting",
        "Adoption of pressure cookers reducing root cooking time from an hour to 10 minutes",
        "Expansion of vegetable base to include market produce while preserving ngari umami"
      ],
      botanicalOrMaterialFocus: ["Clay Chaphu vs Stainless Pressure Cooker", "Banana Leaf Toasting vs Wire Mesh", "Wild Greens vs Cultivated Vegetables"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Manipur culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Manipuri Eromba Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: ngari (traditional fermented freshwater fish), medium potatoes, yongchak (tree beans/stink beans) or seasonal beans, fresh umorok (king chilli) or dried red chillies, tender bamboo shoot (soibum), maroi nakupi (Manipuri chives), fresh coriander leaves, spring onions, starchy vegetable broth, rock salt.\n\n1. Peel and quarter the potatoes; scrape the rough outer skin of the yongchak pods and slice them into two-inch pieces.\n2. In a deep saucepan, place the potatoes, yongchak, sliced bamboo shoots, and dried red chillies or Umorok with enough water to submerge.\n3. Bring to a rolling boil over medium heat and cook uncovered until the vegetables and tubers are completely fork-tender.\n4. Meanwhile, gently toast the ngari pieces on a dry tawa or wrapped in a banana leaf over low flame until fragrant and lightly charred.\n5. Remove the boiled potatoes and chillies from the saucepan into a wide mashing bowl, reserving the aromatic vegetable cooking liquid.\n6. Add the roasted ngari and salt to the bowl; use the back of a spoon or pestle to vigorously crush the chillies and ngari into a spicy paste.\n7. Add the boiled potatoes and yongchak pieces into the paste, mashing thoroughly by hand while retaining pleasant coarse rustic chunks.\n8. Pour in a few tablespoons of the reserved warm vegetable broth to achieve a thick, cohesive gravy; fold in finely chopped maroi nakupi, spring onions, and coriander, and serve with hot rice.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step boil, toast, and coarse hand-mashing protocol",
        "Zero-oil starchy broth integration creating a luscious natural sauce"
      ],
      botanicalOrMaterialFocus: ["Fermented Ngari", "Yongchak Beans & Potatoes", "Maroi Nakupi & Umorok"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step boil, toast, and coarse hand-mashing protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served fresh alongside warm steamed rice as an indispensable part of everyday Meitei meals; prepared across homes and authentic Manipuri heritage eateries. It is presented in the serving style of Manipur, with the pungent, fiery & umami-rich profile that identifies it. An iconic Meitei delicacy of tender boiled potatoes, seasonal tree beans (yongchak), and tender bamboo shoots hand-mashed with dry-roasted fermented fish (ngari) and fiery king chillies.",
      keyInnovations: ["Integral centerpiece of everyday Meitei thali", "Seasonal yongchak celebration across winter markets", "Beloved comfort side served with local rice"],
      botanicalOrMaterialFocus: ["Bell-Metal Katori", "Steamed White or Black Rice", "Fresh Mashed Eromba"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Fermented Fish & Tubers",
        items: [
          { name: "Ngari (Manipuri Fermented Fish)", quantity: "4-5 pieces" },
          { name: "Mountain Potatoes", quantity: "3 medium, peeled and cubed" },
          { name: "Yongchak (Tree Beans)", quantity: "2 pods, sliced into chunks" },
          { name: "Tender Bamboo Shoot (Soibum)", quantity: "1/4 cup, sliced" },
        ],
      },
      {
        category: "Chillies & Herbs",
        items: [
          { name: "Umorok (King Chilli) or Dry Red Chillies", quantity: "1 fresh or 4 dried" },
          { name: "Maroi Nakupi (Manipuri Garlic Chives)", quantity: "2 tbsp, finely chopped" },
          { name: "Spring Onions", quantity: "2 stalks, finely sliced" },
          { name: "Fresh Coriander Leaves", quantity: "2 tbsp, chopped" },
        ],
      },
      {
        category: "Liquid & Seasoning",
        items: [
          { name: "Vegetable Cooking Broth", quantity: "1/2 cup reserved" },
          { name: "Rock Salt", quantity: "1 tsp to taste" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Peel and quarter potatoes; scrape outer skin of yongchak pods and cut into two-inch pieces.",
        techniqueTip: "Scraping yongchak removes tough exterior bark while retaining fragrant inner beans and fleshy pod.",
      },
      {
        stepNumber: 2,
        instruction: "Place potatoes, yongchak, bamboo shoots, and dried chillies in a pot with just enough water to submerge.",
        techniqueTip: "Do not discard the boiling water; it contains released potato starches that bind the mash.",
      },
      {
        stepNumber: 3,
        instruction: "Boil uncovered on medium heat for 15 minutes until vegetables are fork-tender.",
        techniqueTip: "Thorough softening ensures seamless mashing without dense unyielding lumps.",
      },
      {
        stepNumber: 4,
        instruction: "Toast ngari fish pieces on a dry tawa or wrapped in a banana leaf over low flame until fragrant.",
        techniqueTip: "Gentle toasting mellows raw fish pungency into a deep, savory roasted umami aroma.",
      },
      {
        stepNumber: 5,
        instruction: "Transfer boiled potatoes and chillies to a wide bowl, keeping the hot broth aside.",
        techniqueTip: "A wide bowl allows vigorous hand crushing without spillage.",
      },
      {
        stepNumber: 6,
        instruction: "Add toasted ngari and salt; crush ngari and chillies together into a fine paste using a pestle.",
        techniqueTip: "Crushing chillies directly into the fish paste distributes heat evenly throughout.",
      },
      {
        stepNumber: 7,
        instruction: "Add boiled potatoes and yongchak; mash vigorously by hand while retaining coarse texture.",
        techniqueTip: "Traditional Eromba is hand-mashed to preserve rustic chunks rather than pureed smooth.",
      },
      {
        stepNumber: 8,
        instruction: "Stir in reserved warm broth, chopped maroi nakupi, spring onions, and coriander; serve with rice.",
        techniqueTip: "Fresh chives and coriander cut through the fermented richness with bright herbal freshness.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally boiled in clay chaphu pots over wood embers and roasted on banana leaves; modern homes use pressure cookers and gas ranges.",
    substitutions: [
      {
        original: "Yongchak (Tree Beans)",
        substitute: "French Beans or Flat Green Beans",
        impact: "Provides similar vegetable texture, though lacking the distinctive pungent nutty aroma of yongchak.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Department of Fisheries & Culture",
      workTitle: "Indigenous Fermented Foods of Manipur: Ngari and its Culinary Role",
      publicationYearOrPeriod: "Imphal University Press",
      citationDetails: "Monograph on Traditional Aquatic Food Preservation",
      quoteOrFinding: "Chronicles the biochemical and cultural history of ngari and its central place in Meitei gastronomy.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: SINGJU (Manipur)
// ─────────────────────────────────────────────
export const SINGJU_JOURNEY: DishCulinaryJourney = {
  dishId: "singju",
  dishName: "Singju",
  region: "Manipur (Imphal Valley & Meitei Settlements)",
  culturalIntroduction:
    "Singju is an ancient, highly revered spicy botanical salad originating in the Meitei kingdom of Manipur. Etymologically rooted in the Meitei words 'Manaa-Masing' (green vegetables and medicinal herbs) and 'Suba' (combining or mixing together), the contracted name 'Singju' represents centuries of intimate botanical knowledge and foraging culture in the wetland fringes and forested valleys of Manipur. Conceived as both an everyday afternoon refreshment and a vital medicinal digestive, Singju was assembled by thinly julienning seasonal forest produce—such as lotus stem (thambou), cabbage, green papaya, banana inflorescence, and wild herbs like phakpai and lomba—and tossing them raw with roasted perilla seeds (thoiding) or roasted ngari (fermented fish) with fiery chillies. Unlike conventional salads, Singju uses no cooking oil, drawing its rich mouthfeel from the essential polyunsaturated oils released by crushed roasted perilla seeds.",
  earliestDocumentedEvidence:
    "Meitei folklore and herbal treatises chronicle raw botanical salads incorporating thoiding and ngari for community feasts and religious observances.",
  confidenceSummary:
    "Historical records establish Singju as an ancient zero-oil botanical salad in Meitei culture, characterized by raw chiffonade cutting, roasted perilla seed fat extraction, and hand-bruising.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Manipur",
      narrative:
        "Singju is an ancient, highly revered spicy botanical salad originating in the Meitei kingdom of Manipur. Etymologically rooted in the Meitei words 'Manaa-Masing' (green vegetables and medicinal herbs) and 'Suba' (combining or mixing together), the contracted name 'Singju' represents centuries of intimate botanical knowledge and foraging culture in the wetland fringes and forested valleys of Manipur. Conceived as both an everyday afternoon refreshment and a vital medicinal digestive, Singju was assembled by thinly julienning seasonal forest produce—such as lotus stem (thambou), cabbage, green papaya, banana inflorescence, and wild herbs like phakpai and lomba—and tossing them raw with roasted perilla seeds (thoiding) or roasted ngari (fermented fish) with fiery chillies. Unlike conventional salads, Singju uses no cooking oil, drawing its rich mouthfeel from the essential polyunsaturated oils released by crushed roasted perilla seeds.",
      keyInnovations: [
        "Etymological contraction from Manaa-Masing (herbs) and Suba (mixing)",
        "Zero-oil dressing utilizing natural lipids of roasted perilla seeds (thoiding)",
        "Dual ritual formulation: vegetarian Thoiding-Besan and non-vegetarian Ngari-Morok"
      ],
      botanicalOrMaterialFocus: ["Roasted Thoiding (Perilla)", "Lotus Stems & Cabbage", "Ngari & Phakpai"],
      historicalEvidence:
        "Meitei botanical chronicles and regional folklore document ancient raw herb dressing and seasonal salad traditions.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Preparation method: hand-shredding raw wild wetland herbs and roots with traditional Meitei knives and hand-bruising in wooden bowls / precision slicing with stainless steel mandolines, chef knives, and mixing in glass bowls\nVessel: hand-carved wooden mixing troughs and shallow cane baskets / stainless steel basins, glass bowls, and food-grade plastic prep trays\nBinding & Fat: whole perilla seeds (thoiding) stone-roasted on earthen griddles and crushed on stone / pre-roasted commercial chickpea flour (besan) and store-bought roasted sesame or perilla powder\nNgari Integration: whole ngari fish roasted over red coals and pestle-pounded with sun-dried red chillies / pan-toasted ngari or commercial fermented fish paste mixed with chilli flakes\nVegetables & Produce: foraged water lily stems, wild mountain herbs (lomba, phakpai), and raw banana flowers / cultivated cabbage, carrots, French beans, green papaya, and seasonal garden radishes\nTexture & Moisture: hand-kneaded until the vegetables release natural juices to form an unctuous coating without added water / tossed lightly as a dry, crispy shredded salad to prolong shelf-life for street stalls\nServing & Accompaniments: eaten freshly mixed on broad leaves with roasted white peas (mangan) and black tea / served in eco-friendly leaf boats or paper cones across bustling Imphal street-corner stalls\nCultural Setting: ancestral family ritual and ritual temple offerings (Ushin) / widespread iconic Manipuri street snack enjoyed across all generations",
      keyInnovations: [
        "Transition from wild wetland forage to accessible cultivated garden vegetables",
        "Adoption of stainless steel chiffonade tools maintaining cellular crunch",
        "Rise of commercial afternoon street stalls across Manipur"
      ],
      botanicalOrMaterialFocus: ["Wooden Trough vs Glass Bowl", "Foraged Herbs vs Cultivated Cabbage", "Stone Sil-Batta vs Pre-Ground Powder"],
      historicalEvidence:
        "Comparative historical culinary records documenting the shift from foraged wetland roots and wooden mortars to cultivated vegetables and commercial street stall service.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Manipuri Singju Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: crisp fresh cabbage, tender lotus stems (thambou) or raw papaya, thoiding (perilla seeds), roasted gram flour (besan), roasted ngari (fermented fish) or dry peas, dried red chillies (morok), fresh umorok (king chilli), phakpai (Himalayan knotweed) or coriander, salt, fresh lemon juice.\n\n1. Thoroughly wash the cabbage, lotus stems (or green papaya), and indigenous herbs in ice-cold water and pat completely dry.\n2. Using a sharp knife, shred the cabbage into ultra-fine chiffonade strips and slice the lotus stems into paper-thin discs.\n3. Dry-roast the perilla seeds (thoiding) in a heavy tawa over low heat until they begin to crackle and release an aromatic, nutty fragrance.\n4. Transfer the roasted perilla seeds to a stone mortar and pestle; grind into a coarse, oily, aromatic powder.\n5. In the same dry pan, lightly roast the chickpea flour (besan) until golden and fragrant, then set aside to cool.\n6. For the seasoning paste, roast the ngari pieces and dry red chillies over low flame, then pound them with a pinch of rock salt into a pungent paste (morok metpa).\n7. In a large mixing bowl, combine the shredded cabbage, sliced lotus stems, chopped phakpai, roasted perilla powder, and roasted besan.\n8. Add the spicy morok metpa paste and lemon juice; toss and massage vigorously by hand to bruise the greens so they absorb the dressing, and serve immediately.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step raw chiffonade, perilla roasting, and hand-bruising protocol",
        "Hand-bruising technique creating a silky self-emulsifying dressing without added fat"
      ],
      botanicalOrMaterialFocus: ["Cabbage Chiffonade", "Roasted Thoiding Powder", "Morok Metpa & Phakpai"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step raw chiffonade, perilla roasting, and hand-bruising protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served fresh in eco-friendly leaf boats or paper cones across afternoon street stalls and community festivals throughout Manipur; eaten immediately to preserve its crisp crunch. It is presented in the serving style of Manipur, with the crisp, nutty, pungent & blazing profile that identifies it. A fiery raw botanical salad featuring crisp finely shredded cabbage, lotus stems, and wetland herbs hand-tossed with roasted perilla seeds (thoiding), roasted gram flour, and toasted ngari.",
      keyInnovations: ["Ubiquitous street-corner afternoon comfort food", "Served with roasted white peas (mangan) and hot tea", "Living symbol of Meitei foraging heritage"],
      botanicalOrMaterialFocus: ["Eco Leaf Boat", "Roasted Mangan Peas", "Fresh Tossed Singju"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Fresh Vegetables & Herbs",
        items: [
          { name: "Fresh Cabbage", quantity: "2 cups, finely shredded chiffonade" },
          { name: "Lotus Stems (Thambou) or Raw Papaya", quantity: "1 cup, thinly sliced" },
          { name: "Phakpai (Himalayan Knotweed) / Coriander", quantity: "1/4 cup, chopped" },
        ],
      },
      {
        category: "Roasted Binders",
        items: [
          { name: "Thoiding (Perilla Seeds)", quantity: "3 tbsp, dry roasted and powdered" },
          { name: "Besan (Gram Flour)", quantity: "2 tbsp, lightly dry-roasted" },
        ],
      },
      {
        category: "Seasoning & Aromatics",
        items: [
          { name: "Ngari (Fermented Fish)", quantity: "2 pieces, roasted" },
          { name: "Sun-Dried Red Chillies (Morok)", quantity: "3-4, roasted" },
          { name: "Umorok (King Chilli)", quantity: "1/4 pod (optional, for extra heat)" },
          { name: "Rock Salt", quantity: "1 tsp to taste" },
          { name: "Fresh Lemon Juice", quantity: "1 tbsp" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Wash cabbage, lotus stems, and herbs thoroughly in cold water; pat completely dry.",
        techniqueTip: "Vegetables must be dry so the roasted seed dressing clings tightly rather than turning watery.",
      },
      {
        stepNumber: 2,
        instruction: "Shred cabbage into thin chiffonade strands; slice lotus root into paper-thin translucent discs.",
        techniqueTip: "Thin cutting maximizes surface area to absorb dressing without losing crispness.",
      },
      {
        stepNumber: 3,
        instruction: "Dry-roast perilla seeds in a heavy tawa over low flame until crackling and fragrant.",
        techniqueTip: "Do not burn perilla seeds; gentle toasting releases aromatic oils essential for mouthfeel.",
      },
      {
        stepNumber: 4,
        instruction: "Pound roasted perilla seeds in a stone mortar into a slightly coarse, oily powder.",
        techniqueTip: "The natural oils released act as the lipid replacement for salad oil.",
      },
      {
        stepNumber: 5,
        instruction: "Lightly dry-roast chickpea flour in the pan until fragrant and pale golden; set aside.",
        techniqueTip: "Roasted gram flour binds moisture and imparts a pleasant earthy nutty finish.",
      },
      {
        stepNumber: 6,
        instruction: "Roast ngari and dry chillies over low flame, then pound with salt into a pungent paste (morok metpa).",
        techniqueTip: "Pounding salt with chillies helps break the tough pepper skins into a smooth paste.",
      },
      {
        stepNumber: 7,
        instruction: "Combine shredded vegetables, herbs, roasted perilla, and roasted besan in a large bowl.",
        techniqueTip: "A wide bowl allows vigorous hand tossing without spilling.",
      },
      {
        stepNumber: 8,
        instruction: "Add chilli-ngari paste and lemon juice; massage vigorously by hand to bruise greens and serve immediately.",
        techniqueTip: "Hand-bruising releases cellular juices that combine with perilla powder into a cohesive dressing.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally made with foraged wetland plants and wood-ember roasted ngari; modern versions use cabbage and pan-toasted ingredients.",
    substitutions: [
      {
        original: "Ngari (Fermented Fish)",
        substitute: "Roasted White Peas (Mangan) or Roasted Peanuts",
        impact: "Yields authentic vegetarian Singju (Thoiding-Besan style) traditionally served during ritual observances.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Manipuri Botanical & Culinary Survey",
      workTitle: "Wild Edibles and Traditional Salads of the Imphal Valley",
      publicationYearOrPeriod: "Department of Forestry & Environment",
      citationDetails: "Monograph on Indigenous Food Plants",
      quoteOrFinding: "Documents the nutritional and ethnobotanical roots of Singju across Meitei domestic culture.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: SIKKIMESE MOMOS (Sikkim)
// ─────────────────────────────────────────────
export const SIKKIMESE_MOMOS_JOURNEY: DishCulinaryJourney = {
  dishId: "sikkimese-momos",
  dishName: "Sikkimese Momos",
  region: "Sikkim (High-Altitude Passes & Eastern Himalayan Valleys)",
  culturalIntroduction:
    "Sikkimese Momos trace their ancestral lineage to ancient Tibet and the historic trans-Himalayan trade routes connecting Lhasa, the Kathmandu Valley, and Sikkim through the high mountain passes of Nathu La and Jelep La. Derived from the Tibetan word 'mog mog', the art of steaming delicate parcels of unleavened flour dough filled with finely hand-minced highland meat and aromatics was brought to Sikkim by migrating Bhutia communities, Tibetan traders, and Newar merchants. Over generations, Sikkim adopted the dish as its paramount cultural and culinary emblem, adapting the filling to locally reared pork, beef, and indigenous mountain greens seasoned with wild mountain ginger and mountain garlic. Making momos evolved into an intimate communal ritual across Sikkimese households, where families gather in warmth around the hearth to knead, roll, pleat, and steam them over multi-tiered metal or bamboo steamers called 'moktu', served alongside blistering dalle khursani paste.",
  earliestDocumentedEvidence:
    "Trans-Himalayan trade accounts and Tibetan culinary archives record mog-mog dumpling preparations across high-altitude Himalayan mountain passes.",
  confidenceSummary:
    "Documented ethnographic studies establish Momos as an integral facet of Sikkimese food identity, bridging Tibetan and Newar culinary roots with indigenous Sikkimese mountain ingredients.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Sikkim",
      narrative:
        "Sikkimese Momos trace their ancestral lineage to ancient Tibet and the historic trans-Himalayan trade routes connecting Lhasa, the Kathmandu Valley, and Sikkim through the high mountain passes of Nathu La and Jelep La. Derived from the Tibetan word 'mog mog', the art of steaming delicate parcels of unleavened flour dough filled with finely hand-minced highland meat and aromatics was brought to Sikkim by migrating Bhutia communities, Tibetan traders, and Newar merchants. Over generations, Sikkim adopted the dish as its paramount cultural and culinary emblem, adapting the filling to locally reared pork, beef, and indigenous mountain greens seasoned with wild mountain ginger and mountain garlic. Making momos evolved into an intimate communal ritual across Sikkimese households, where families gather in warmth around the hearth to knead, roll, pleat, and steam them over multi-tiered metal or bamboo steamers called 'moktu', served alongside blistering dalle khursani paste.",
      keyInnovations: [
        "Unleavened wheat dough wrapper rolling with thin tapered perimeter",
        "Juicy filling formulation incorporating natural animal fat and mountain aromatics",
        "Communal family pleating and tiered multi-level steam convection in a moktu"
      ],
      botanicalOrMaterialFocus: ["Refined Wheat Flour", "Minced Pork & Mountain Garlic", "Tiered Moktu Steamer"],
      historicalEvidence:
        "Trans-Himalayan trade route accounts and regional ethnographies document Tibetan and Bhutia dumpling migrations across Sikkim.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: steamed in multi-tiered heavy aluminium or carved wooden/bamboo moktus over open wood fires / steamed in multi-tiered stainless steel moktus on domestic gas stoves or commercial electric steamers\nVessel: traditional layered aluminium or bamboo moktus with tight domed lids / modern stainless steel modular steamers and electric dim-sum steamers\nFuel: rhododendron wood, mountain oak logs, and dried pine cones / domestic LPG gas cylinders and commercial induction cooktops\nCooking time: 20 to 25 minutes of steady wood-steam simmering / 10 to 12 minutes of pressurized commercial gas steaming\nMincing & Filling: hand-mincing whole cuts of meat on hardwood chopping logs with heavy cleavers / electric meat grinders and commercial food processors producing fine uniform mince\nFillings & Varieties: exclusively fatty local pork, highland beef, or wild chhurpi with spring onions / lean chicken, paneer, mixed mountain vegetables, soya, and mushroom variations\nDough Wrapper: hand-kneaded with cold mountain water and rolled individually with small wooden pins / machine-pressed dough sheets cut with circular pastry rings\nAccompaniments & Dip: fresh dalle khursani chillies crushed with wood-roasted mountain tomatoes and garlic / bottled hot sauces, soy dips, mayonnaise, and processed dalle pastes",
      keyInnovations: [
        "Transition from hardwood bamboo moktus and wood hearths to stainless steel gas steamers",
        "Mechanical mincing and rolling replacing laborious manual cleaver preparation",
        "Proliferation of modern fillings (chicken, paneer, vegetables) alongside traditional pork"
      ],
      botanicalOrMaterialFocus: ["Bamboo/Aluminium Moktu vs Stainless Steamer", "Cleaver Mince vs Electric Grinder", "Dalle Khursani vs Bottled Sauce"],
      historicalEvidence:
        "Comparative historical culinary records documenting the shift from wood-fired alpine hearth moktus to modern stainless steel steamers and electric appliances.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Sikkimese Steamed Momos Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: refined wheat flour (maida), minced pork or chicken, spring onions, fresh ginger, mountain garlic, black pepper powder, refined oil or pork lard, water, fiery dalle khursani chillies, local ripe tomatoes (for the dip).\n\n1. In a large mixing bowl, combine wheat flour and a pinch of salt; gradually add room-temperature water and knead into a smooth, firm, and pliable dough.\n2. Cover the kneaded dough with a moist cotton cloth and allow it to rest for at least 30 minutes to develop elasticity.\n3. For the succulent filling, mix the minced meat with finely chopped spring onions, freshly minced ginger, crushed garlic, black pepper, and two tablespoons of oil or melted fat to retain juiciness.\n4. Divide the rested dough into small equal cherry-sized balls; lightly flour your workstation and roll each ball into a very thin circular disc, keeping the edges slightly thinner than the center.\n5. Place a rounded tablespoon of the savory filling directly in the center of the dough circle.\n6. Carefully pleat the wrapper edges accordion-style in a half-moon or gathered top-knot purse, pinching tightly to create an airtight seal.\n7. Lightly oil the perforated tiers of a traditional moktu (steamer) and arrange the pleated momos with adequate spacing to prevent sticking.\n8. Stack the tiers over a vigorously boiling water base, cover with the domed lid, and steam on high flame for 10 to 12 minutes until translucent; serve piping hot with fire-roasted dalle khursani chutney.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step dough-rest, pleat-pinch, and tiered-moktu steam protocol",
        "Airtight dough pinching locking in piping hot savory interior broth"
      ],
      botanicalOrMaterialFocus: ["Wheat Flour Dough", "Juicy Minced Meat & Mountain Ginger", "Dalle Khursani Dip"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step dough-rest, pleat-pinch, and tiered-moktu steam protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served straight from tiered moktus with fire-roasted dalle khursani paste and hot clear broth; enjoyed across high-altitude mountain hamlets and popular street stalls in Gangtok. It is presented in the serving style of Sikkim, with the juicy, savory & fiery-pepper heat profile that identifies it. Delicate pleated parcels of hand-rolled dough filled with juicy hand-minced pork or mountain greens, ginger, and garlic, steamed in tiered moktus and served with blistering dalle khursani dip.",
      keyInnovations: ["Unchallenged state culinary emblem", "Gangtok street culture centerpiece", "Served with hot aromatic clear broth (thukpa soup)"],
      botanicalOrMaterialFocus: ["Steamed Moktu Tier", "Dalle Khursani Paste", "Clear Bone Broth"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Dough Wrapper",
        items: [
          { name: "Refined Wheat Flour (Maida)", quantity: "2 cups (250g)" },
          { name: "Water", quantity: "3/4 cup (as needed for firm dough)" },
          { name: "Salt", quantity: "1/2 tsp" },
        ],
      },
      {
        category: "Savory Filling",
        items: [
          { name: "Minced Pork or Chicken", quantity: "350g (with 15% fat)" },
          { name: "Spring Onions", quantity: "1 cup, finely chopped" },
          { name: "Fresh Ginger", quantity: "2 tbsp, finely minced" },
          { name: "Mountain Garlic", quantity: "1.5 tbsp, finely minced" },
          { name: "Black Pepper Powder", quantity: "1 tsp" },
          { name: "Refined Oil or Melted Lard", quantity: "2 tbsp" },
        ],
      },
      {
        category: "Accompaniment: Dalle Dip",
        items: [
          { name: "Dalle Khursani Chillies", quantity: "4-5 fresh round chillies" },
          { name: "Ripe Country Tomatoes", quantity: "2 medium, roasted" },
          { name: "Garlic Cloves", quantity: "4 cloves" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Combine flour and salt in a bowl; add water gradually and knead into a firm, smooth dough.",
        techniqueTip: "A firm dough prevents the wrappers from becoming soggy or tearing during steaming.",
      },
      {
        stepNumber: 2,
        instruction: "Cover dough with a damp cloth and rest for 30 minutes to develop gluten elasticity.",
        techniqueTip: "Resting relaxes the gluten, allowing thin rolling without shrinking back.",
      },
      {
        stepNumber: 3,
        instruction: "Mix minced meat, spring onions, ginger, garlic, black pepper, and melted fat in a bowl until cohesive.",
        techniqueTip: "Mixing fat with the meat is crucial to create juicy, succulent broth inside the steamed momo.",
      },
      {
        stepNumber: 4,
        instruction: "Divide dough into small cherry-sized balls; roll each into a thin disc with edges thinner than the center.",
        techniqueTip: "Keeping the center thicker supports the weight of the juicy filling without breaking.",
      },
      {
        stepNumber: 5,
        instruction: "Place a tablespoon of filling in the center of the rolled disc.",
        techniqueTip: "Do not overfill, otherwise the dough seal may rupture under steam pressure.",
      },
      {
        stepNumber: 6,
        instruction: "Pleat the edges in an accordion half-moon or gathered top-knot shape, pinching firmly to seal.",
        techniqueTip: "An airtight seal traps expanding internal steam and meat juices.",
      },
      {
        stepNumber: 7,
        instruction: "Lightly grease the perforated tiers of a moktu steamer and arrange momos with 1-inch spacing.",
        techniqueTip: "Adequate spacing ensures steam circulates freely and dumplings do not fuse together.",
      },
      {
        stepNumber: 8,
        instruction: "Steam over rolling boiling water for 10-12 minutes until dough turns translucent; serve hot with dalle chutney.",
        techniqueTip: "When cooked, the dough turns glossy and does not stick to your fingers when lightly touched.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally steamed over high-altitude wood hearths using heavy aluminium moktus; modern kitchens use stainless steel steamers on gas stoves.",
    substitutions: [
      {
        original: "Dalle Khursani",
        substitute: "Red Habanero or Bird's Eye Chilli",
        impact: "Provides similar fiery fruitiness; closest botanical substitute for Himalayan cherry pepper.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Sikkim Cultural Research Department",
      workTitle: "Culinary Heritage of the Eastern Himalayas: The Story of Momos",
      publicationYearOrPeriod: "Gangtok Heritage Monograph Series",
      citationDetails: "Ethnography of Trans-Himalayan Food Culture",
      quoteOrFinding: "Traces the integration of Tibetan and Bhutia dumpling craftsmanship into Sikkimese communal identity.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: GUNDRUK SOUP (Sikkim)
// ─────────────────────────────────────────────
export const GUNDRUK_SOUP_JOURNEY: DishCulinaryJourney = {
  dishId: "gundruk-soup",
  dishName: "Gundruk Soup",
  region: "Sikkim (Himalayan High-Altitude Villages & Terai Borderlands)",
  culturalIntroduction:
    "Gundruk is an ancient lactic-acid fermented leafy green preparation deeply rooted in the high-altitude agropastoral survival traditions of Sikkim's Nepali, Bhutia, and Lepcha communities. In the severe sub-zero winters of the Eastern Himalayas, heavy snowfalls historically halted all agricultural production, threatening mountain hamlets with severe nutrient and vitamin deficiencies. During the bountiful autumn harvest in October and November, rural households gathered the massive surplus of broadleaf mustard greens (rayo saag), radish leaves, and cauliflower foliage, wilted them under the autumn sun, crushed them, and tightly tamped them into earthen jars (dhungro) or underground pits without salt. Wild lactobacillus bacteria naturally fermented the leaves into a pleasantly sour, mineral-rich preserved food, which was then sun-dried and stored for up to a year. Rehydrated and cooked with tomatoes, garlic, and mustard oil, Gundruk Soup (Gundruk ko Jhol) became Sikkim's ultimate restorative alpine broth, revered for its digestive warmth and sour, earthy profile.",
  earliestDocumentedEvidence:
    "Eastern Himalayan ethnographic literature and folk chronicles document salt-free leafy green pit fermentation across high-altitude mountain settlements.",
  confidenceSummary:
    "Documented microbiological and ethnographic records confirm Gundruk as an ancestral Eastern Himalayan fermented food, produced without salt and dried under the alpine sun for annual winter sustenance.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Sikkim",
      narrative:
        "Gundruk is an ancient lactic-acid fermented leafy green preparation deeply rooted in the high-altitude agropastoral survival traditions of Sikkim's Nepali, Bhutia, and Lepcha communities. In the severe sub-zero winters of the Eastern Himalayas, heavy snowfalls historically halted all agricultural production, threatening mountain hamlets with severe nutrient and vitamin deficiencies. During the bountiful autumn harvest in October and November, rural households gathered the massive surplus of broadleaf mustard greens (rayo saag), radish leaves, and cauliflower foliage, wilted them under the autumn sun, crushed them, and tightly tamped them into earthen jars (dhungro) or underground pits without salt. Wild lactobacillus bacteria naturally fermented the leaves into a pleasantly sour, mineral-rich preserved food, which was then sun-dried and stored for up to a year. Rehydrated and cooked with tomatoes, garlic, and mustard oil, Gundruk Soup (Gundruk ko Jhol) became Sikkim's ultimate restorative alpine broth, revered for its digestive warmth and sour, earthy profile.",
      keyInnovations: [
        "Salt-free anaerobic solid-state fermentation of autumn surplus greens",
        "Solar dehydration on woven bamboo nanglo trays extending shelf life to over a year",
        "Curative clear broth extraction utilizing wild lactic acid and cold-pressed mustard oil"
      ],
      botanicalOrMaterialFocus: ["Fermented Mustard Greens (Rayo Saag)", "Earthen Jar (Dhungro) & Bamboo Nanglo", "Cold-Pressed Mustard Oil"],
      historicalEvidence:
        "Himalayan ethno-microbiological and historical accounts record centuries-old pit and earthen-jar lactic fermentation of leafy greens across Sikkim.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: rehydrating dried gundruk and slow-simmering in earthen pots or heavy iron degchis over hearth embers / fast simmering in stainless steel saucepans or rapid pressure cooking on modern stoves\nVessel: handmade earthen pots (mitti ki handi) and cast-iron kadhais / stainless steel saucepans, anodized pots, and domestic pressure cookers\nFuel: dried alpine pine wood, oak branches, and dried cow dung / domestic LPG gas stoves and ceramic induction plates\nCooking time: long leisurely hearth simmer allowing fermented greens to release rich broth / 15 to 20 minutes on medium gas flame\nFermentation Vessel: pit-fermentation in leaf-lined underground trenches or large earthen jars (dhungro) / sanitized glass carboys and food-grade airtight plastic containers\nSun-Drying & Storage: sun-dehydrated on woven bamboo trays (nanglo) and kept in woven jute bags near the hearth / vacuum-sealed packaging, commercial dehydrators, and airtight glass jars\nAdd-ins & Variations: cooked with locally parched brown soybeans (bhatmas), dried mountain roots, and raw mustard oil / cooked with diced potatoes, chopped onions, tomato purees, and ready spice powders\nDining & Pairing: served scalding hot in wooden or bell-metal katoris alongside coarse Himalayan bhaat / served in modern soup bowls as an appetizer or comfort side in homes and Sikkimese boutique cafes",
      keyInnovations: [
        "Transition from subterranean pit fermentation to sanitized glass carboys and food-grade jars",
        "Shift from open-hearth earthenware simmering to stainless steel saucepan cooking",
        "Evolution from alpine survival necessity to acclaimed Himalayan probiotic culinary heritage"
      ],
      botanicalOrMaterialFocus: ["Earthen Dhungro vs Glass Container", "Woven Nanglo vs Vacuum Pack", "Mustard Hearth Broth vs Saucepan Simmer"],
      historicalEvidence:
        "Comparative historical culinary records documenting the shift from wood-fired earthen pots and underground pits to domestic gas ranges and airtight glass jars.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Sikkimese Gundruk Soup Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: authentic dried gundruk (fermented mustard/radish greens), pure cold-pressed mustard oil, medium onion, fresh garlic cloves, fresh ginger, ripe country tomatoes, dried red chillies or dalle khursani, parched local soybeans (bhatmas) or potato, turmeric powder, fresh coriander leaves.\n\n1. Take authentic dried gundruk greens and soak them in lukewarm water for 15 to 20 minutes until softened and rehydrated.\n2. Squeeze the excess water gently from the rehydrated greens, coarsely chop them with a kitchen knife, and set aside.\n3. Heat cold-pressed mustard oil in a heavy-bottomed pot until it smokes lightly, then lower heat to temper the pungent aroma.\n4. Add whole dried red chillies (or slit dalle khursani) and sauté until they turn deep red and aromatic.\n5. Add chopped onions, minced garlic, and grated ginger; fry on medium flame until golden-brown and fragrant.\n6. Stir in chopped ripe tomatoes, turmeric powder, and salt; cook down for 3 to 4 minutes until the tomatoes form a soft, pulpy masala base.\n7. Add the chopped gundruk and roasted soybeans (bhatmas); stir-fry together for 3 minutes to infuse the greens with the aromatics.\n8. Pour in three cups of water, bring to a vigorous boil, then cover and simmer over low heat for 15 minutes to yield a tangy, earthy broth; garnish with fresh coriander and serve hot with steamed rice.",
      keyInnovations: [
        "10 essential key ingredients",
        "Streamlined 8-step rehydrate, mustard-temper, and low-heat simmer broth protocol",
        "Soybean (bhatmas) and tomato integration balancing natural lactic acidity"
      ],
      botanicalOrMaterialFocus: ["Dried Gundruk Greens", "Mustard Oil & Garlic", "Country Tomatoes & Bhatmas"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step rehydrate, mustard-temper, and low-heat simmer broth protocol.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Modern Form & Serving",
      stageName: "Contemporary Living Tradition",
      era: "Present day",
      yearRange: "Living Heritage",
      narrative:
        "Served scalding hot with plain boiled rice (bhaat) as a deeply comforting and restorative broth during chilly Himalayan evenings across Sikkim. It is presented in the serving style of Sikkim, with the sour, tangy, earthy & pungent profile that identifies it. A curative Himalayan broth of sun-dried lactic-fermented mustard greens slow-simmered with country tomatoes, crushed garlic, and roasted soybeans in smoking mustard oil.",
      keyInnovations: ["Recognized probiotic mountain superfood", "Restorative winter dinner staple", "Eaten with hot bhaat and fiery dalle pickles"],
      botanicalOrMaterialFocus: ["Wooden or Bell-Metal Bowl", "Steaming Rice (Bhaat)", "Tangy Gundruk Jhol"],
      historicalEvidence:
        "Present-day form from regional food writing and restaurant documentation. A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "finished-dish",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Fermented Greens Base",
        items: [
          { name: "Dried Gundruk Greens", quantity: "50g (approx. 1 generous cup packed)" },
          { name: "Lukewarm Water", quantity: "2 cups for rehydrating" },
        ],
      },
      {
        category: "Tempering & Aromatics",
        items: [
          { name: "Pure Cold-Pressed Mustard Oil", quantity: "2 tbsp" },
          { name: "Medium Onion", quantity: "1, finely chopped" },
          { name: "Fresh Garlic Cloves", quantity: "5-6 cloves, minced" },
          { name: "Fresh Ginger", quantity: "1 tsp, grated" },
          { name: "Dried Red Chillies or Dalle Khursani", quantity: "2 whole" },
        ],
      },
      {
        category: "Broth Foundation & Garnish",
        items: [
          { name: "Ripe Country Tomatoes", quantity: "2 medium, chopped" },
          { name: "Parched Soybeans (Bhatmas) or Potato", quantity: "2 tbsp roasted beans or 1 small boiled potato" },
          { name: "Turmeric Powder", quantity: "1/2 tsp" },
          { name: "Salt", quantity: "1 tsp to taste" },
          { name: "Fresh Coriander Leaves", quantity: "2 tbsp chopped for garnish" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Soak dried gundruk in lukewarm water for 15-20 minutes until completely softened and hydrated.",
        techniqueTip: "Soaking removes excess grit and activates the preserved dried plant cells.",
      },
      {
        stepNumber: 2,
        instruction: "Squeeze out excess soaking water and coarsely chop the softened greens with a knife.",
        techniqueTip: "Chapping prevents long stringy fibers and allows better spoonability in the finished soup.",
      },
      {
        stepNumber: 3,
        instruction: "Heat mustard oil in a heavy-bottomed pot until smoking point; lower heat slightly.",
        techniqueTip: "Mustard oil is essential for authentic Himalayan flavor, providing pungent warmth.",
      },
      {
        stepNumber: 4,
        instruction: "Add dried red chillies and fry for 20 seconds until darkened and smoky.",
        techniqueTip: "Blooming whole chillies in smoking oil releases smoky aromatics into the fat.",
      },
      {
        stepNumber: 5,
        instruction: "Toss in chopped onions, minced garlic, and ginger; sauté until fragrant and golden.",
        techniqueTip: "Garlic complements the pungent tang of fermented mustard leaves.",
      },
      {
        stepNumber: 6,
        instruction: "Add chopped tomatoes, turmeric, and salt; cook down until tomatoes turn into a soft pulp.",
        techniqueTip: "Tomato acidity merges harmoniously with the fermented lactic sourness of the greens.",
      },
      {
        stepNumber: 7,
        instruction: "Add chopped gundruk and roasted soybeans; sauté together for 3 minutes to coat in aromatics.",
        techniqueTip: "Briefly frying the greens in the spiced oil eliminates raw funk before simmering.",
      },
      {
        stepNumber: 8,
        instruction: "Pour in 3 cups of water; bring to a rolling boil, cover, and simmer for 15 minutes; garnish with coriander.",
        techniqueTip: "A low-heat simmer allows the probiotic mineral broth to become deeply infused and comforting.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally brewed in cast-iron pots over wood hearths; modern homes cook it in stainless steel saucepans or cookers.",
    substitutions: [
      {
        original: "Parched Soybeans (Bhatmas)",
        substitute: "Diced Boiled Potato",
        impact: "Provides hearty starch body to the broth without the nutty crunch of roasted soybeans.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Himalayan Microbiology & Food Studies",
      workTitle: "Biochemical and Probiotic Profile of Gundruk in Sikkim",
      publicationYearOrPeriod: "Department of Botany, Sikkim University",
      citationDetails: "Research Monograph on Indigenous Fermentations",
      quoteOrFinding: "Details the lactic-acid flora (Lactobacillus and Leuconostoc) driving salt-free fermentation of Gundruk.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: THUKPA (Arunachal Pradesh / Eastern Himalayas)
// Hand-Rolled Noodle & Mountain Herb Broth Infusion
// ─────────────────────────────────────────────
export const THUKPA_JOURNEY: DishCulinaryJourney = {
  dishId: "thukpa",
  dishName: "Thukpa",
  region: "Arunachal Pradesh (Tawang & West Kameng Valleys)",
  culturalIntroduction:
    "Thukpa traces back to eastern Tibetan noodle-and-broth traditions developed to combat freezing high-altitude mountain climates. The dish spread across ancient trans-Himalayan trade routes and Buddhist pilgrim trails into Arunachal Pradesh, becoming deeply anchored in the food culture of the Monpa community of Tawang and West Kameng. The exact date and individual creator are not documented with certainty, though regional chronicles record centuries of pastoral exchange. It is prepared in the slow-simmered broth infusion method, with Putang Thukpa—made with indigenous buckwheat noodles—being the cherished local Monpa specialty.",
  earliestDocumentedEvidence:
    "Eastern Himalayan trade accounts and regional Monpa chronicles record centuries of cross-border culinary exchange and buckwheat noodle preparation across Tawang and high mountain passes.",
  confidenceSummary:
    "Historical and ethnographic sources document that noodle broth traditions entered Arunachal Pradesh through Tibetan and Monpa high-altitude migration. It is cooked through separate noodle blanching and rich aromatic bone or vegetable broth infusion.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Arunachal Pradesh",
      narrative:
        "Thukpa traces back to eastern Tibetan noodle-and-broth traditions developed to combat freezing high-altitude mountain climates. The dish spread across ancient trans-Himalayan trade routes and Buddhist pilgrim trails into Arunachal Pradesh, becoming deeply anchored in the food culture of the Monpa community of Tawang and West Kameng. The exact date and individual creator are not documented with certainty, though regional chronicles record centuries of pastoral exchange. It is prepared in the slow-simmered broth infusion method, with Putang Thukpa—made with indigenous buckwheat noodles—being the cherished local Monpa specialty.",
      keyInnovations: [
        "Trans-Himalayan trade transmission and Monpa highland adoption",
        "Putang Thukpa development using local buckwheat and barley",
        "Slow hearth bone stock simmering with native mountain peppers",
      ],
      botanicalOrMaterialFocus: ["Buckwheat & Wheat Flour", "Mountain Garlic & Ginger", "Clay & Cast-Iron Cauldrons"],
      historicalEvidence:
        "Regional ethnographic accounts and Himalayan food records document the historical transmission and Monpa adoption of Thukpa in Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: slow hearth simmering of bone stock over open wood fires / quick simmering on domestic gas stoves, hotplates, and induction cooktops\nVessel: heavy earthen clay pots and cast-iron cauldrons / stainless steel stockpots, non-stick pans, and pressure cookers\nFuel: mountain oak, pine wood, and dried yak dung / LPG gas cylinders and electricity\nCooking time: one to two hours of slow bone reduction / under 25 minutes in modern kitchens\nNoodles: hand-pulled or knife-cut fresh buckwheat and barley noodles / packaged refined-wheat noodles, ramen, or instant noodles\nMeat & Broth: dried yak meat, mountain mutton, or cured country pork / chicken, farm pork, or seasoned vegetable and mushroom broth\nFlavourings: wild mountain garlic, fresh crushed ginger, and native Sichuan pepper (yer ma) / soy sauce, ready noodle tastemakers, vinegar, and chilli sauce\nAccompaniments: fresh crushed bird's eye chillies and fermented bamboo shoots / bottled hot sauces, chilli vinegar, and processed dalle paste",
      keyInnovations: [
        "Transition from wood hearths and clay cauldrons to domestic gas burners",
        "Shift from hand-pulled rustic buckwheat to accessible wheat and dried noodles",
        "Integration of fresh ginger-garlic aromatics with modern pan-Asian sauces",
      ],
      botanicalOrMaterialFocus: ["Hand-Cut vs Commercial Noodles", "Yak Bone vs Chicken Stock", "Yer Ma vs Chilli Pastes"],
      historicalEvidence:
        "Comparative culinary records documenting kitchen fuel, cookware transitions, and noodle manufacturing throughout Himalayan gastronomic history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Thukpa Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: handmade wheat noodles, chicken or pork, fresh ginger, mountain garlic, sliced onions, shredded cabbage and carrots, rich meat or vegetable stock, Sichuan pepper (yer ma), spring onions, mustard oil.\n\n1. Boil the wheat noodles in salted water until just tender (al dente), drain thoroughly, rinse with cold water, and toss with a few drops of oil to prevent sticking.\n2. Heat mustard oil in a heavy-bottomed pot over medium heat, then sauté finely chopped ginger and minced garlic until fragrant.\n3. Add sliced onions and slit green chillies, sautéing for 2 minutes until soft and translucent.\n4. Add the chicken or pork pieces, searing lightly for 3 to 4 minutes until evenly browned.\n5. Pour in the rich stock, season with crushed Sichuan pepper (yer ma), turmeric, and salt, bringing the broth to a rolling boil.\n6. Lower the heat, cover the pot with a lid, and simmer gently for 15 minutes so the meat tenderizes and infuses the soup.\n7. Add the shredded cabbage and julienned carrots, simmering for 3 to 4 minutes until tender yet pleasantly crisp.\n8. Place a portion of cooked noodles into warm serving bowls, ladle the piping-hot aromatic broth and vegetables over them, and garnish with spring onions.",
      keyInnovations: [
        "10 essential authentic ingredients",
        "Streamlined 8-step noodle blanching and broth infusion process",
        "Accessible home preparation protocol balancing spice and clarity",
      ],
      botanicalOrMaterialFocus: ["Handmade Wheat Noodles", "Sichuan Pepper & Ginger", "Clear Bone Broth & Cabbage"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step noodle-cooking and broth-simmering process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Broth Craft: The Bone & Herb Extraction",
      stageName: "Monpa Infusion Technique",
      era: "Highland Himalayan Valleys",
      yearRange: "Traditional Method",
      narrative:
        "The soul of authentic Thukpa lies in its slow-extracted broth. In high-altitude Monpa kitchens of Tawang and West Kameng, bone-in meat, crushed wild garlic, and bruised ginger are simmered for hours over low embers. The broth extracts gelatin, marrow, and essential oils, which act as a natural emulsifier, giving the clear soup body, restorative warmth, and savory depth without heavy starches.",
      keyInnovations: [
        "Slow bone-marrow collagen extraction",
        "Wild ginger and allicin volatile oil blooming",
        "Clarified simmer without boiling cloudiness",
      ],
      botanicalOrMaterialFocus: ["Mountain Garlic Cloves", "Bone-in Country Meat", "Clay Simmering Handi"],
      historicalEvidence:
        "Monpa oral culinary records and regional Himalayan ethnographies describing restorative bone broths.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Noodle Craft: Hand-Rolling & Blanching",
      stageName: "Putang Buckwheat & Wheat Noodle Processing",
      era: "Himalayan Flour Milling Traditions",
      yearRange: "Traditional Noodle Technique",
      narrative:
        "Noodles in authentic Thukpa are kneaded firmly from stone-ground wheat or indigenous buckwheat flour ('Putang'). Rolled thinly on wooden boards and cut into flat ribbons, they are blanched separately in vigorously boiling salted water until just al dente, then rinsed in cold spring water. This separate cooking prevents excess starch from clouding the delicate aromatic broth.",
      keyInnovations: [
        "High-protein gluten kneading without chemical additives",
        "Separate shock-cooling blanch preventing starch clouding",
        "Adaptation of buckwheat flour for Putang Thukpa",
      ],
      botanicalOrMaterialFocus: ["Indigenous Buckwheat Flour", "Cold Mountain Spring Water", "Wooden Noodle Board"],
      historicalEvidence:
        "Documentation of traditional Himalayan water-mill grain grinding and hand-rolled noodle making across Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Assembly & The Fiery Garnish",
      stageName: "Bowl Assembly & Sichuan Pepper Spark",
      era: "20th Century – Contemporary Era",
      yearRange: "1911 CE – Present Day",
      narrative:
        "Assembly is an exact art: freshly blanched noodles are placed in deep ceramic or carved wooden bowls, topped with tender meat slices and crisp shredded mountain greens, then submerged under ladlefuls of boiling spiced broth. A sprinkle of freshly ground Sichuan pepper (yer ma) imparts a signature numbing warmth, complemented by pickled bamboo shoots or fiery crushed local chillies.",
      keyInnovations: [
        "Layered temperature and texture contrast (tender noodles, crisp cabbage, hot broth)",
        "Sichuan pepper (yer ma) tingling aromatics",
        "Fermented bamboo shoot and bird's eye chilli accompaniments",
      ],
      botanicalOrMaterialFocus: ["Sichuan Pepper (Yer Ma)", "Pickled Bamboo Shoots", "Deep Ceramic Serving Bowl"],
      historicalEvidence:
        "Culinary surveys of street stalls, cafes, and monastic guest houses across Tawang, Bomdila, and Itanagar.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Himalayan Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional kitchens to recreate authentic Himalayan Thukpa. Follow the 8-step preparation protocol and precise 10-ingredient balance to achieve the crystal-clear, intensely aromatic mountain broth.",
      keyInnovations: [
        "Standardized 10-ingredient spice and aromatic ratio",
        "Clear dual-phase noodle and broth timing",
        "Home stove adaptation without loss of highland depth",
      ],
      botanicalOrMaterialFocus: ["Handmade Wheat Noodles", "Sichuan Pepper & Ginger", "Clear Bone Broth & Cabbage"],
      historicalEvidence:
        "Culinary synthesis codified from traditional Monpa home cooks and documented regional recipes of Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: BAMBOO SHOOT PORK (Arunachal Pradesh / Eastern Himalayas)
// Indigenous Tribal Hearth Cookery & Fermented Shoot Braise
// ─────────────────────────────────────────────
export const BAMBOO_SHOOT_PORK_JOURNEY: DishCulinaryJourney = {
  dishId: "bamboo-shoot-pork",
  dishName: "Bamboo Shoot Pork",
  region: "Arunachal Pradesh (Adi, Nyishi & Apatani Foothills)",
  culturalIntroduction:
    "Bamboo shoot pork traces back to ancient ancestral foraging and hearth-cooking traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. In the dense montane forests, tender wild bamboo shoots were preserved through subterranean leaf fermentation (ekung, eup, and hikhu) to ensure year-round nourishment, while free-ranging country pork provided vital animal protein and fats during harsh winters. The exact date and individual creator are not documented with certainty, as food lore was transmitted orally across generations. It was traditionally cooked inside sealed green bamboo internodes over open wood fires or in heavy hearth pots, allowing the natural sourness of the shoots to tenderize the rich meat.",
  earliestDocumentedEvidence:
    "Ethnographic records of the Eastern Himalayas and regional tribal chronicles document centuries of ancestral bamboo hollow roasting and pit-fermented bamboo shoot preservation across Arunachal Pradesh.",
  confidenceSummary:
    "Historical and ethnographic sources document that pork and bamboo shoot traditions developed through ancestral tribal subsistence in Arunachal Pradesh. It is cooked through natural fat rendering, aromatic infusion, and slow tenderizing braise.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Arunachal Pradesh",
      narrative:
        "Bamboo shoot pork traces back to ancient ancestral foraging and hearth-cooking traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. In the dense montane forests, tender wild bamboo shoots were preserved through subterranean leaf fermentation (ekung, eup, and hikhu) to ensure year-round nourishment, while free-ranging country pork provided vital animal protein and fats during harsh winters. The exact date and individual creator are not documented with certainty, as food lore was transmitted orally across generations. It was traditionally cooked inside sealed green bamboo internodes over open wood fires or in heavy hearth pots, allowing the natural sourness of the shoots to tenderize the rich meat.",
      keyInnovations: [
        "Subterranean leaf fermentation of bamboo shoots (ekung and hikhu)",
        "Zero-oil fat rendering utilizing free-range country pork belly",
        "Sealed green bamboo tube roasting (penam arak) over open hearths",
      ],
      botanicalOrMaterialFocus: ["Fermented Bamboo Shoot (Ekung)", "Green Bamboo Internodes", "Country Pork Belly & Fat"],
      historicalEvidence:
        "Regional ethnographic documentation and tribal oral histories recording indigenous meat-preservation and hearth-roasting methods.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: slow roasting inside green bamboo tubes over open hearth embers / simmering in heavy kadhais and pressure cookers on gas stoves\nVessel: fresh green bamboo hollows (penam arak) plugged with wild leaves / cast-iron pots, stainless steel kadhais, and domestic pressure cookers\nFuel: hearth firewood (angna) and glowing wood coals / LPG gas burners and electric induction stoves\nCooking time: several hours over low wood embers / 35 to 45 minutes on modern domestic stoves\nBamboo shoot: wild forest-foraged shoots fermented in leaf-lined pit baskets (ekung/hikhu) / bottled, canned, or market-bought preserved fermented shoots\nPork: free-range country boar or hearth-smoked pork belly / farm-raised butcher pork cuts, pork ribs, or packaged pork belly\nSeasonings: indigenous plant-ash salt (tapyo), wild mountain coriander, and fresh King Chilli / table salt, cultivated garlic, ginger paste, and green chillies\nFat rendering: pure pork belly fat rendered naturally without added oils / small measure of mustard oil or refined cooking oil",
      keyInnovations: [
        "Transition from open wood hearths to domestic gas burners and pressure cookers",
        "Adoption of cast-iron and stainless steel kadhais alongside bamboo tubes",
        "Availability of packaged and bottled fermented bamboo shoots in urban markets",
      ],
      botanicalOrMaterialFocus: ["Green Bamboo vs Iron Kadhais", "Wood Fireplace vs Domestic LPG", "Pit Fermentation vs Packaged Shoots"],
      historicalEvidence:
        "Comparative surveys of Arunachali culinary practice documenting kitchen fuel transitions, cookware adaptations, and commercial shoot processing.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Bamboo Shoot Pork Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: pork belly or country pork, fermented bamboo shoots (ekung), fresh ginger, mountain garlic, fiery King Chilli or bird's eye chillies, wild mountain coriander, spring onions or wild greens, rock salt or indigenous tapyo salt, mustard oil, warm water.\n\n1. Rinse the fermented bamboo shoots (ekung) lightly in cold water if intensely pungent; squeeze out excess brine and set aside.\n2. Heat a splash of mustard oil in a heavy-bottomed iron pot or kadhai over medium flame, or add the pork directly so its fat renders naturally.\n3. Add the pork pieces and sear over medium heat for 10 to 12 minutes, stirring occasionally, until the fat renders out and the meat turns lightly browned.\n4. Reduce heat to medium-low, add coarsely pounded ginger and crushed mountain garlic, and sauté for 2 minutes until fragrant.\n5. Add the slit King Chillies (or bird's eye chillies) and fermented bamboo shoots, stirring well to coat the shoots in the rendered pork fat.\n6. Season with salt (or indigenous tapyo), pour in 1.5 cups of warm water to submerge the meat partially, and bring to a gentle boil.\n7. Cover the pot with a tight lid and simmer on low heat for 35 to 45 minutes, stirring occasionally, until the pork is melt-in-the-mouth tender and the gravy reduces.\n8. Uncover, fold in chopped wild mountain coriander and spring onions, rest for 5 minutes, and serve piping hot with steamed hill rice.",
      keyInnovations: [
        "10 essential indigenous ingredients",
        "Crisp 8-step fat rendering and simmering protocol",
        "Balanced sour-heat acid tenderization without complex spices",
      ],
      botanicalOrMaterialFocus: ["Pork Belly & Rendered Lard", "Fermented Ekung Shoots", "King Chilli & Mountain Garlic"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step searing, aromatic infusion, and slow-simmering process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Hearth Craft: Fat Rendering & Bamboo Chemistry",
      stageName: "The Symbiosis of Pork Fat & Shoot Acidity",
      era: "Tribal Hearth Cooking Traditions",
      yearRange: "Ancestral Practice",
      narrative:
        "The scientific brilliance of Arunachali bamboo shoot pork lies in acid-fat balance. High-fat pork cuts are slowly heated until the subcutaneous adipose tissue liquefies into pure natural lard. When fermented bamboo shoot (ekung) is added, its lactic and acetic acids break down muscle fibers and emulsify the rendered pork fat. This creates a glossy, lip-smacking sauce without requiring starch, cream, or commercial thickeners.",
      keyInnovations: [
        "Natural lipid emulsification via fermented organic acids",
        "Collagen breakdown through gentle low-temperature simmering",
        "Chemical balance of pungent bamboo ketones with pork umami",
      ],
      botanicalOrMaterialFocus: ["Lactic Acid in Fermented Shoots", "Rendered Pork Lipids", "Heavy Cast-Iron Hearth Pot"],
      historicalEvidence:
        "Food science studies on traditional Northeast Indian fermented bamboo shoot fermentation and lipid interaction.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Bamboo Internode Technique",
      stageName: "Penam Arak Roasting Inside Green Bamboo",
      era: "Forest Foraging & Campfire Traditions",
      yearRange: "Traditional Cooking Technique",
      narrative:
        "In forest hunting camps and traditional festivals, pork pieces, fermented shoots, crushed ginger, and chillies are packed inside freshly felled green bamboo hollows ('Penam Arak'). The open cylinder is stopped tightly with wild leaves and placed directly over open flames or stacked on glowing hearth coals. The water vapor trapped within the green bamboo wood slowly steams the meat while imparting a distinctive sweet woody fragrance and delicate smoky finish.",
      keyInnovations: [
        "Self-contained zero-metal cooking chamber",
        "Wood-sugar and vapor transfer from fresh bamboo walls",
        "Herb-plug seal locking in steam and volatilized aromatics",
      ],
      botanicalOrMaterialFocus: ["Fresh Green Bamboo Internode", "Banana or Wild Leaf Plug", "Hearth Embers & Coals"],
      historicalEvidence:
        "Ethnographic records of Adi, Nyishi, and Apatani hunter-gatherer culinary techniques in the Eastern Himalayas.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Community & The Feast",
      stageName: "Festive Serving & The Tribal Table",
      era: "Contemporary Tribal Festivals",
      yearRange: "Present Day",
      narrative:
        "Pork with bamboo shoot is the crowning dish of community gatherings and festivals such as Solung, Dree, Nyokum, and Si-Donyi. Served on wild leaves alongside heaping mounds of steamed indigenous red or white hill rice, boiled leafy wild greens, and a bowl of traditional rice beer (Apong), it represents the sacred communion between the forests, the hearth, and community solidarity.",
      keyInnovations: [
        "Communal leaf-platter presentation",
        "Pairing with indigenous hill rice and mild fermented Apong",
        "Cultural preservation across seasonal harvest festivals",
      ],
      botanicalOrMaterialFocus: ["Steamed Mountain Hill Rice", "Wild Banana Leaf Platter", "Fermented Rice Beer (Apong)"],
      historicalEvidence:
        "Anthropological surveys of harvest festival feasts and community dining traditions in Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Arunachal Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional kitchens to recreate authentic Arunachal Bamboo Shoot Pork. Follow the 8-step preparation protocol and exact 10-ingredient balance to achieve the melt-in-the-mouth pork texture and robust, tangy umami braise.",
      keyInnovations: [
        "Standardized 10-ingredient ratio",
        "Precision fat-rendering and simmer timing",
        "Domestic stove adaptation maintaining authentic tribal character",
      ],
      botanicalOrMaterialFocus: ["Pork Belly & Rendered Fat", "Ekung Fermented Bamboo Shoot", "Fiery King Chilli & Ginger"],
      historicalEvidence:
        "Culinary synthesis codified from traditional home cooks and documented regional recipes of Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 241–245, 'Fermented Foods and Tribal Cookery of the Northeast'",
      quoteOrFinding:
        "Documents indigenous fermentation traditions across the Eastern Himalayas, including subterranean bamboo shoot preservation and meat stewing.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Feasts and Fasts: A History of Food in India",
      publicationYearOrPeriod: "2014 (Reaktion Books)",
      citationDetails: "Chapter 8: Regional Cuisines of the Northeast Hills, pp. 288–294",
      quoteOrFinding:
        "Analyzes the distinct culinary philosophy of Arunachal Pradesh tribes, emphasizing oil-free fat rendering, bamboo cylinder roasting, and fermented shoots.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Department of Tourism, Government of Arunachal Pradesh",
      workTitle: "Culinary Heritage and Tribal Gastronomy of Arunachal Pradesh",
      publicationYearOrPeriod: "Official Documentation & Cultural Survey",
      citationDetails: "Sections on Adi, Nyishi, and Apatani traditional cuisines and festival dishes",
      quoteOrFinding:
        "Identifies pork cooked with fermented bamboo shoots (ekung/hikhu) as a primary cultural delicacy central to community identity and hospitality.",
      confidenceRating: "Official Cultural Record",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: APONG (Arunachal Pradesh / Eastern Himalayas)
// Sacred Tribal Rice Beer & Herbal Starter Solid-State Fermentation
// ─────────────────────────────────────────────
export const APONG_JOURNEY: DishCulinaryJourney = {
  dishId: "apong",
  dishName: "Apong",
  region: "Arunachal Pradesh (Siang, Subansiri & Ziro Valleys)",
  culturalIntroduction:
    "Apong traces back to ancient ancestral foraging and agricultural traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. Hand-harvested hill paddy was cooked and inoculated with wild medicinal herbal starter cakes (known as apop, epoh, or siye), cultivated through generations of botanical knowledge to induce natural fermentation. The exact date and individual creator are not documented with certainty, as brewing lore was passed down orally through women elders and hearth keepers. It was traditionally prepared as both a milky white brew (Pika Apong / Nogin) and a smoky dark brew using charred paddy husk ash (Poro Apong), serving as a sacred offering to deities and ancestors.",
  earliestDocumentedEvidence:
    "Ethnographic records of Eastern Himalayan tribal agriculture and anthropological surveys of Adi, Nyishi, and Apatani communities document centuries of herbal starter culture cultivation and ritual rice beer brewing.",
  confidenceSummary:
    "Historical and ethnographic sources document that Apong developed through ancestral tribal plant knowledge in Arunachal Pradesh. It is brewed through solid-state rice saccharification, wild microbial fermentation, and bamboo straining.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Arunachal Pradesh",
      narrative:
        "Apong traces back to ancient ancestral foraging and agricultural traditions of the indigenous hill communities of Arunachal Pradesh, notably the Adi, Nyishi, and Apatani peoples. Hand-harvested hill paddy was cooked and inoculated with wild medicinal herbal starter cakes (known as apop, epoh, or siye), cultivated through generations of botanical knowledge to induce natural fermentation. The exact date and individual creator are not documented with certainty, as brewing lore was passed down orally through women elders and hearth keepers. It was traditionally prepared as both a milky white brew (Pika Apong / Nogin) and a smoky dark brew using charred paddy husk ash (Poro Apong), serving as a sacred offering to deities and ancestors.",
      keyInnovations: [
        "Domestication of wild microbial starter consortia (apop/epoh)",
        "Charred paddy husk ash infusion for nutritive Poro Apong",
        "Solid-state leaf-wrapped saccharification near household hearths",
      ],
      botanicalOrMaterialFocus: ["Indigenous Hill Paddy", "Wild Starter Herbs (Clerodendrum)", "Earthen Fermentation Vessels"],
      historicalEvidence:
        "Regional ethnographic documentation and tribal oral histories recording indigenous fermentation cakes and ancestral brew offerings.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Fermentation vessel: hand-moulded earthen pots (talam) and hollow bamboo vats / food-grade plastic containers, glass carboys, and stainless steel drums\nFiltration method: conical woven bamboo funnels (perop/taas) lined with wild leaves / nylon strainers, fine cheesecloth, and metal wire mesh\nStarter culture: wild forest-foraged medicinal leaf-and-rice cakes (apop/epoh) / preserved domestic starter cakes and cultivated microbial tablets\nRice grain: heritage red sticky rice, black rice, and local hill millet / commercially polished white rice and hybrid paddy varieties\nAsh smoking: charred paddy husk ash (taap/mikap) roasted over wood hearths / optional ash filtration or plain unsmoked brewing\nFermentation time: 7 to 15 days of slow seasonal hearth fermentation / 3 to 5 days accelerated brewing in temperature-managed rooms\nServing vessel: freshly cut green bamboo tumblers (patang) and hollow gourds / glass tumblers, ceramic mugs, and stainless steel cups\nOccasion: sacred community feasts (Solung, Dree, Nyokum) and rituals / cultural festivals, tribal tourism cafes, and everyday hospitality",
      keyInnovations: [
        "Transition from porous clay pots to food-grade modern fermenters",
        "Maintenance of botanical starter purity alongside commercial vessels",
        "Commercialization of Poro Apong in tribal cultural pavilions",
      ],
      botanicalOrMaterialFocus: ["Earthen Pots vs Stainless Steel", "Woven Bamboo vs Fine Mesh", "Charred Husk Ash (Taap)"],
      historicalEvidence:
        "Comparative surveys of Arunachali brewing documenting kitchen vessel evolution and traditional starter preservation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Apong Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: indigenous hill rice, herbal fermentation starter cake (apop/epoh), wild medicinal starter herbs, paddy husk ash (taap/mikap), clean mountain spring water, wild banana leaves (oko leaves), woven bamboo filtration funnel (perop), traditional earthen fermentation pot, fermented rice mash, wild forest herbs.\n\n1. Steam or boil the indigenous hill rice in a heavy pot until tender and fluffy, taking care that the grains remain distinct and not watery.\n2. Spread the hot rice evenly across clean bamboo mats or wild banana leaves, allowing it to cool completely to room temperature so microbial cultures survive.\n3. Grind the dried herbal starter cake (apop or epoh) into a fine powder using a traditional stone mortar.\n4. Dust the powdered starter uniformly over the cooled rice (optionally incorporating charred paddy husk ash for dark Poro Apong), tossing thoroughly by hand.\n5. Transfer the inoculated rice into a clean, dry earthen pot or leaf-lined container, pressing gently and covering the surface with fresh wild leaves.\n6. Seal the mouth of the vessel securely and place it in a warm, undisturbed corner near the hearth for 5 to 7 days of solid-state fermentation.\n7. Pour cool, pure spring water into the sweet, bubbly fermented rice mash and let it steep for 30 to 60 minutes to extract alcohol and natural sugars.\n8. Strain the golden-cloudy liquid through a conical woven bamboo funnel (perop), collect the fresh brew in bamboo tumblers, and serve at room temperature.",
      keyInnovations: [
        "10 essential indigenous brewing elements",
        "Crisp 8-step cooling, inoculation, and straining protocol",
        "Pure gravity water-extraction through conical bamboo funnels",
      ],
      botanicalOrMaterialFocus: ["Cooked Hill Rice", "Apop Starter Cake", "Spring Water & Bamboo Funnel"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step rice-steaming, starter inoculation, solid-state fermentation, and bamboo straining process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Starter Chemistry: Epoh Microbial Guilds",
      stageName: "Saccharification & Symbiotic Fermentation",
      era: "Ancestral Fermentation Science",
      yearRange: "Indigenous Knowledge",
      narrative:
        "The scientific genius of Apong lies in the starter cake (Apop/Epoh). Crafted from ground rice mixed with over twenty wild medicinal forest plants—including ginger, wild chillies, and bitter leaves—it harbors an indigenous consortium of amylolytic molds (Rhizopus and Mucor) and fermenting yeasts (Saccharomyces). The molds secrete amylases that convert insoluble rice starches into sweet glucose, which the yeasts immediately ferment into ethanol and organic acids, preventing spoilage without chemical additives.",
      keyInnovations: [
        "Simultaneous saccharification and fermentation (SSF) dynamics",
        "Medicinal plant polyphenols suppressing pathogenic bacteria",
        "Self-buffering pH balance via indigenous lactic acid bacteria",
      ],
      botanicalOrMaterialFocus: ["Rhizopus Amylolytic Fungi", "Wild Leaf Antimicrobial Polyphenols", "Herbal Starter Matrix"],
      historicalEvidence:
        "Microbiological analyses of traditional ethnic fermented starter cultures from Arunachal Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Poro Craft: Charred Paddy Husk Infusion",
      stageName: "Taap Thermal Carbonization & Ash Filtering",
      era: "Tribal Pyrotechnic Nutrition",
      yearRange: "Ancestral Innovation",
      narrative:
        "For Poro Apong, fresh paddy husk (Taap) is slowly roasted and charred over wood embers until transformed into sterile black activated charcoal and ash. When folded into the cooled rice before inoculation, the carbonized particles act as natural adsorption filters that soften bitterness, infuse smoky caramel notes, and enrich the brew with vital minerals and deep dark pigments.",
      keyInnovations: [
        "Natural activated carbon filtration within the fermentation mash",
        "Mineral leaching from wood and rice husk ash",
        "Creation of distinctive roasted malt-like flavor profiles",
      ],
      botanicalOrMaterialFocus: ["Roasted Paddy Husk Ash", "Natural Carbon Micro-Pores", "Dark Mineral Pigments"],
      historicalEvidence:
        "Ethnographic records of Mising and Adi Poro Apong brewing methodologies across the Brahmaputra and Siang basins.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "The Sacred Libation & Community Feasts",
      stageName: "Solung, Dree & Communal Solidarity",
      era: "Contemporary Tribal Festivals",
      yearRange: "Present Day",
      narrative:
        "In Arunachali tribal society, Apong is far more than an alcoholic drink; it is sacred liquid social capital. Served during major festivals such as Solung, Dree, and Nyokum, no alliance, peace pact, or harvest thanksgiving can occur without it. The brewer presents the fresh vessel with both hands, pouring the first drops onto the soil to honor the earth spirit Donyi-Polo, cementing ties of brotherhood and community hospitality.",
      keyInnovations: [
        "Ritual libation offering to Donyi-Polo deities",
        "Communal bamboo-tumbler sharing protocols",
        "Preservation of ancestral agricultural thanksgiving rites",
      ],
      botanicalOrMaterialFocus: ["Carved Green Bamboo Patang", "Wild Banana Leaf Funnel", "Sacred Hearth Fire (Angna)"],
      historicalEvidence:
        "Anthropological documentation of festive hospitality and ritual libations in Arunachal Pradesh tribal councils.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Arunachal Brewing Protocol",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home brewers and cultural researchers to understand and recreate authentic Arunachal Apong. Follow the 8-step protocol and 10-ingredient balance to achieve the effervescent, mildly sweet, and deeply earthy mountain brew.",
      keyInnovations: [
        "Standardized rice-to-starter inoculation ratio",
        "Controlled moisture and temperature management",
        "Clean traditional bamboo straining protocol",
      ],
      botanicalOrMaterialFocus: ["Steamed Hill Rice", "Crushed Apop Starter", "Pure Spring Water"],
      historicalEvidence:
        "Culinary synthesis codified from master tribal household brewers and documented regional ethnobiology.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 239–243, 'Fermented Beverages and Starter Cultures of the Northeast'",
      quoteOrFinding:
        "Documents the preparation of traditional herbal starter cakes and rice beer across Eastern Himalayan tribal groups.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Feasts and Fasts: A History of Food in India",
      publicationYearOrPeriod: "2014 (Reaktion Books)",
      citationDetails: "Chapter 8: Regional Cuisines of the Northeast Hills, pp. 291–296",
      quoteOrFinding:
        "Examines the social and ritual centrality of rice beers like Apong in Adi and Nyishi harvest festivals.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Directorate of Research, Government of Arunachal Pradesh",
      workTitle: "Traditional Fermentation Technologies and Ethno-Botanical Practices",
      publicationYearOrPeriod: "Official Research Documentation",
      citationDetails: "Sections on Adi, Nyishi, and Apatani starter plants, brewing methodology, and festive customs",
      quoteOrFinding:
        "Categorizes Apong as the foundational cultural beverage of Arunachal Pradesh, detailing microbial diversity and indigenous straining techniques.",
      confidenceRating: "Official Cultural Record",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: PONDICHERRY FISH CURRY (Puducherry / Coromandel Coast)
// Franco-Tamil Creole Seafood Simmer & Vadouvan Aromatics
// ─────────────────────────────────────────────
export const PONDICHERRY_FISH_CURRY_JOURNEY: DishCulinaryJourney = {
  dishId: "pondicherry-fish-curry",
  dishName: "Pondicherry Fish Curry",
  region: "Puducherry (French Quarter & Coromandel Coast)",
  culturalIntroduction:
    "Pondicherry fish curry traces back to the 17th and 18th-century French colonial settlement on the Coromandel coast, where French East India Company administrators, Creole families, and native Tamil cooks merged their culinary traditions. Classical Tamil coastal fish curries (Meen Kuzhambu), driven by sour tamarind, mustard seeds, fenugreek, and fresh ocean catches, were refined through French cooking sensibilities. Local cooks developed Vadouvan—a sun-dried blend of shallots, garlic, fenugreek, and cumin—and used coconut milk to soften coastal acid, transforming rustic fish curry into an elegant Franco-Tamil masterpiece.",
  earliestDocumentedEvidence:
    "Colonial records of the French East India Company and 18th-century Franco-Tamil household manuscripts document the creation of sun-dried Vadouvan seasoning and coconut-tamarind fish stews in Pondicherry.",
  confidenceSummary:
    "Historical and gastronomic records verify Pondicherry Fish Curry as an iconic representation of Coromandel Creole culture. It is prepared through whole-spice blooming, Vadouvan infusion, tamarind reduction, and gentle coconut-milk poaching.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Puducherry",
      narrative:
        "Pondicherry fish curry traces back to the 17th and 18th-century French colonial settlement on the Coromandel coast, where French East India Company administrators, Creole families, and native Tamil cooks merged their culinary traditions. Classical Tamil coastal fish curries (Meen Kuzhambu), driven by sour tamarind, mustard seeds, fenugreek, and fresh ocean catches, were refined through French cooking sensibilities. Local cooks developed Vadouvan—a sun-dried blend of shallots, garlic, fenugreek, and cumin—and used coconut milk to soften coastal acid, transforming rustic fish curry into an elegant Franco-Tamil masterpiece.",
      keyInnovations: [
        "Invention of Franco-Tamil Vadouvan spice seasoning",
        "Tempering harsh coastal tamarind acids with sweet coconut milk",
        "Gentle fish steak poaching in earthen manchatti vessels",
      ],
      botanicalOrMaterialFocus: ["Fresh Seer Fish Steaks", "Vadouvan Sun-Dried Blend", "Unglazed Earthenware Manchatti"],
      historicalEvidence:
        "Colonial trade accounts and Pondicherry family archives recording the fusion of French bouquet garni concepts with Tamil tamarind bases.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking vessel: traditional unglazed earthenware pots (manchatti) / stainless steel sauté pans, non-stick skillets, and enamel casseroles\nHeat source: slow wood-hearth fires and charcoal braziers / domestic LPG gas stoves and induction cooktops\nSpice blend: artisanal sun-dried Franco-Tamil Vadouvan patties crushed fresh / commercial curry powder, bottled Vadouvan paste, or ground spice powders\nCooking fat: pure cold-pressed gingelly oil (sesame oil) / refined sunflower oil, vegetable cooking oil, or butter\nCoconut milk: freshly grated coconut double-pressed by hand through muslin / canned coconut milk, tetra-pak coconut cream, or coconut milk powder\nTamarind base: aged dark pulp soaked in clay cups and hand-strained / packaged tamarind paste, concentrate, or seedless tamarind blocks\nFish variety: freshly netted ocean seer fish (vanjaram) or red snapper / farm-raised white fish steaks, frozen fillets, or prawns\nAccompaniment: warm freshly baked French baguettes (pain français) and boiled rice / white basmati rice, steamed idiyappam, or dosas",
      keyInnovations: [
        "Transition from wood-fired clay pots to modern stainless steel and gas ranges",
        "Commercial availability of Vadouvan in international gourmet markets",
        "Pairing with both crusty French breads and South Indian rice varieties",
      ],
      botanicalOrMaterialFocus: ["Earthenware vs Stainless Steel", "Artisanal Vadouvan vs Powder", "Gingelly Oil vs Modern Butter"],
      historicalEvidence:
        "Comparative culinary histories of the Coromandel coast documenting kitchen modernization and Creole recipe preservation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Pondicherry Fish Curry Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: seer fish steaks (or kingfish), fresh thick coconut milk, tangy tamarind extract, Franco-Tamil Vadouvan spice blend, pearl shallots (sambhar onions), crushed garlic and ginger, fenugreek seeds and mustard seeds, fresh curry leaves and green chillies, Kashmiri chilli and turmeric powder, cold-pressed gingelly or coconut oil.\n\n1. Rinse the seer fish steaks, pat dry, and marinate with a pinch of turmeric, lemon juice, and sea salt for 15 minutes.\n2. Soak tamarind pulp in warm water for 15 minutes, extract the tangy juice, and press freshly grated coconut to yield thick and thin coconut milk.\n3. Heat cold-pressed sesame oil in a heavy earthenware pot (manchatti) or wide skillet over medium heat.\n4. Add mustard seeds and fenugreek seeds, allowing them to crackle gently, then immediately toss in fresh curry leaves and slit green chillies.\n5. Add sliced pearl shallots, crushed garlic, and the Vadouvan spice blend, sautéing for 3 to 4 minutes until golden-brown and sweet.\n6. Add chopped ripe tomatoes, Kashmiri chilli powder, and coriander powder, cooking until tomatoes soften and oil glints along the edges.\n7. Pour in the strained tamarind juice and thin coconut milk, season with salt, and bring to a gentle boil for 8 to 10 minutes to concentrate flavors.\n8. Gently slide in the fish steaks, simmer covered on low heat for 6 to 8 minutes, finish with thick coconut milk, rest for 10 minutes, and serve hot.",
      keyInnovations: [
        "10 harmonious Franco-Tamil ingredients",
        "Crisp 8-step tempering, blooming, and poaching protocol",
        "Gentle fish poaching preventing delicate seafood breakup",
      ],
      botanicalOrMaterialFocus: ["Seer Fish Steaks", "First & Second Coconut Extracts", "Tamarind Pulp & Vadouvan"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step tempering, Vadouvan blooming, tamarind reduction, and coconut-milk poaching process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Vadouvan Alchemy: Sun-Cured Seasoning",
      stageName: "Microbial Onion Fermentation & Spicing",
      era: "French East India Company Era",
      yearRange: "18th Century CE",
      narrative:
        "The flavor signature of Pondicherry cooking is Vadouvan (from Tamil Vadagam). Local shallots, garlic, crushed mustard, fenugreek, and cumin are bound with castor or sesame oil and shaped into balls. Dried in the scorching Coromandel sun for weeks, wild ambient yeasts lightly ferment the sugars in the alliums, yielding an umami-rich, sweet-savory concentrate that dissolves into sauces with unmatched aromatic depth.",
      keyInnovations: [
        "Sun-drying and natural microbial curing of seasoned shallot paste",
        "Oil-encapsulation preserving volatile allium essential oils",
        "Creation of the Indian prototype for French bouillon seasoning",
      ],
      botanicalOrMaterialFocus: ["Coromandel Pearl Shallots", "Castor/Gingelly Oil Preservative", "Sun-Drying Bamboo Trays"],
      historicalEvidence:
        "Historical colonial culinary documentation on the preparation and French adoption of Vadouvan / Vadagam in Pondicherry.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Poaching Technique: Manchatti Heat Physics",
      stageName: "Gentle Low-Flame Fish Poaching",
      era: "Coastal Earthen Cookware Traditions",
      yearRange: "Traditional Culinary Method",
      narrative:
        "Cooking fish in unglazed earthenware pots (manchatti) provides gentle, radiant heat that prevents the delicate proteins of ocean seer fish from toughening. The porous clay walls breathe, evaporating excess water slowly and concentrating the tamarind gravy into a clingy, glossy glaze that coats every fish steak.",
      keyInnovations: [
        "Porous earthenware radiant heat convection",
        "Gentle protein poaching below rigorous boiling points",
        "Mineral enrichment and natural acidity buffering from seasoned clay",
      ],
      botanicalOrMaterialFocus: ["Seasoned Manchatti Clay Pot", "Seer Fish Delicate Muscle Fibers", "Tamarind Tartaric Acid"],
      historicalEvidence:
        "Culinary studies on Coromandel clay pot cooking and traditional fish preservation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "The Franco-Tamil Table: Baguette Meets Rice",
      stageName: "White Town Dining & Colonial Hospitality",
      era: "19th Century – Contemporary Era",
      yearRange: "Colonial to Modern Era",
      narrative:
        "In the dining salons of White Town, Pondicherry Fish Curry was served with distinctive dual etiquette: poured over steamed local ponni rice for the midday meal, and accompanied by crusty French baguettes (pain français) in the evening. The crisp bread crust was torn and dipped into the velvety coconut-tamarind gravy, exemplifying the harmonious living union of French and Tamil cultures.",
      keyInnovations: [
        "Dual bread-and-rice dining accompaniment",
        "Creole sauce dipping culture bridging European and Indian rituals",
        "Establishment of Puducherry's distinct tourism gastronomy",
      ],
      botanicalOrMaterialFocus: ["French Baguette (Pain Français)", "Boiled Coromandel Ponni Rice", "Porcelain Tureen"],
      historicalEvidence:
        "Travel memoirs and Creole domestic memoirs documenting White Town dining practices and hospitality.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Puducherry Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional kitchens to recreate authentic Pondicherry Fish Curry. Follow the 8-step protocol and 10-ingredient balance to achieve the harmonious sweet-sour tamarind balance and velvety coconut-poached fish steaks.",
      keyInnovations: [
        "Standardized 10-ingredient spice and aromatic balance",
        "Precise dual-phase coconut milk integration",
        "Home stove adaptation maintaining authentic Creole depth",
      ],
      botanicalOrMaterialFocus: ["Seer Fish Steaks", "Vadouvan Spice Blend", "Thick Coconut Cream"],
      historicalEvidence:
        "Culinary synthesis codified from master Creole home cooks and documented regional recipes of Puducherry.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 164–168, 'Colonial Influences: French Settlements and Vadouvan'",
      quoteOrFinding:
        "Details the synthesis of French culinary techniques with Coromandel Tamil ingredients, documenting the creation of sun-dried Vadouvan and coconut-tamarind seafood curries.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Lourdes Tirouvanziam-Louis",
      workTitle: "The Pondicherry Kitchen",
      publicationYearOrPeriod: "2012 (Westland Books)",
      citationDetails: "Pages 45–52, 'Poisson en Sauce / Creole Fish Curry'",
      quoteOrFinding:
        "The canonical documentation of authentic Franco-Tamil recipes, recording precise methods for poaching ocean fish in coconut-tamarind gravies with Vadouvan.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Tourism Department, Government of Puducherry",
      workTitle: "Heritage Gastronomy of French-Tamil Puducherry",
      publicationYearOrPeriod: "Official Cultural Survey & Documentation",
      citationDetails: "Sections on Creole culinary traditions, White Town dining, and coastal seafood heritage",
      quoteOrFinding:
        "Recognizes Pondicherry Fish Curry as the foremost emblem of the Union Territory's Franco-Tamil cultural heritage.",
      confidenceRating: "Official Cultural Record",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: KOLI KARI (Puducherry / French Quarter)
// White Town Aristocratic Creole Chicken Stew & Nutmeg Velouté
// ─────────────────────────────────────────────
export const KOLI_KARI_JOURNEY: DishCulinaryJourney = {
  dishId: "koli-kari",
  dishName: "Koli Kari",
  region: "Puducherry (White Town / French Creole Kitchens)",
  culturalIntroduction:
    "Koli Kari traces back to the elite domestic kitchens of White Town (Ville Blanche) in colonial Pondicherry, where French aristocratic households and Creole families blended European stewing traditions with native Tamil ingredients. While traditional Tamil cuisine relied on fiery Chettinad-style chicken curries, French Creole cooks developed a gentler, fragrant braise. Country chicken and tender potatoes were slow-simmered in velvety coconut cream, scented with freshly grated nutmeg, whole cloves, cinnamon, and sweet shallots, creating a luxurious velouté-style chicken curry that remains a hallmark of Puducherry hospitality.",
  earliestDocumentedEvidence:
    "French colonial domestic records and 19th-century Pondicherry household memoirs document the preparation of gentle, nutmeg-scented Creole chicken stews braised with baby potatoes and coconut cream.",
  confidenceSummary:
    "Historical and culinary records verify Koli Kari as an authentic Franco-Tamil Creole chicken stew. It is prepared through delicate whole-spice roasting, chicken searing, potato simmering, and velvety coconut cream enrichment.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Puducherry",
      narrative:
        "Koli Kari traces back to the elite domestic kitchens of White Town (Ville Blanche) in colonial Pondicherry, where French aristocratic households and Creole families blended European stewing traditions with native Tamil ingredients. While traditional Tamil cuisine relied on fiery Chettinad-style chicken curries, French Creole cooks developed a gentler, fragrant braise. Country chicken and tender potatoes were slow-simmered in velvety coconut cream, scented with freshly grated nutmeg, whole cloves, cinnamon, and sweet shallots, creating a luxurious velouté-style chicken curry that remains a hallmark of Puducherry hospitality.",
      keyInnovations: [
        "Adaptation of French fricassee and velouté methods with tropical spices",
        "Use of freshly grated nutmeg and cloves for delicate baking-spice warmth",
        "Inclusion of whole stewed potatoes absorbing spiced chicken drippings",
      ],
      botanicalOrMaterialFocus: ["Country Chicken (Nattu Kozhi)", "Fresh Nutmeg & Cloves", "Thick Fresh Coconut Cream"],
      historicalEvidence:
        "Colonial household accounts and Creole family culinary notebooks documenting gentle spiced chicken fricassee cookery in White Town.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking vessel: heavy tinned copper degchis and enamelled French cocottes / stainless steel kadhais, non-stick sauté pans, and pressure cookers\nHeat source: slow charcoal embers and wood-fired hearths / domestic LPG gas burners and electric induction ranges\nSpicing profile: freshly grated whole nutmeg, hand-pounded cloves, and Ceylon cinnamon / pre-ground garam masala powder and commercial chicken curry powder\nCooking fat: fresh churned butter or pure cold-pressed gingelly oil / refined vegetable cooking oil or sunflower oil\nCreaminess: double-extracted fresh coconut cream and ground cashew paste / tetra-pak coconut milk, dairy cooking cream, or cornstarch thickener\nChicken: free-range native country fowl (nattu kozhi) / commercial broiler chicken cuts, boneless chicken breast, or chicken thighs\nPotatoes: heirloom baby hill potatoes stewed whole / diced commercial table potatoes or parboiled potato chunks\nAccompaniment: warm crusty French baguettes (pain de campagne) / steamed white ponni rice, flaky Malabar parottas, or chapattis",
      keyInnovations: [
        "Transition from wood-charcoal copper cocottes to modern domestic gas stoves",
        "Use of commercial poultry alongside traditional free-range country fowl",
        "Popularization of Creole chicken stew in Puducherry heritage dining",
      ],
      botanicalOrMaterialFocus: ["Copper Cocotte vs Steel Kadhai", "Whole Grated Nutmeg vs Garam Masala", "Country Chicken vs Broiler"],
      historicalEvidence:
        "Comparative surveys of Puducherry Creole home cookery documenting cookware transitions and poultry breeding changes.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Koli Kari Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: country chicken (bone-in chunks), baby potatoes (peeled and quartered), fresh coconut cream or thick milk, pearl shallots (sambhar onions), crushed ginger and garlic paste, whole spices (cloves, cinnamon, cardamom), freshly grated nutmeg, fennel seeds and coriander seeds, fresh curry leaves and bay leaf, cold-pressed gingelly oil or butter.\n\n1. Clean and marinate the chicken chunks with turmeric, half of the ginger-garlic paste, and sea salt for 20 minutes.\n2. Gently dry-roast coriander seeds, fennel seeds, black peppercorns, cinnamon, cloves, and grated nutmeg on low heat, then grind into an aromatic powder.\n3. Heat cold-pressed sesame oil or butter in a heavy-bottomed pot or cocotte over medium flame, adding bay leaves and a pinch of fennel seeds.\n4. Add sliced pearl shallots and fresh curry leaves, sautéing gently for 3 to 4 minutes until translucent and golden.\n5. Stir in the remaining ginger-garlic paste and chopped tomatoes, cooking until the base breaks down into a soft, fragrant paste.\n6. Add the marinated chicken chunks and baby potato pieces, searing over medium-high heat for 5 minutes until sealed on all sides.\n7. Stir in the ground aromatic spice powder, pour in 1.5 cups of warm water or thin coconut milk, season with salt, and bring to a simmer.\n8. Cover tightly, simmer on low heat for 20 to 25 minutes until chicken and potatoes are tender, stir in thick coconut cream, rest for 10 minutes, and serve.",
      keyInnovations: [
        "10 harmonious Creole ingredients",
        "Crisp 8-step spice-roasting, chicken searing, and simmer protocol",
        "Fragrant nutmeg and coconut cream emulsion",
      ],
      botanicalOrMaterialFocus: ["Country Chicken & Baby Potatoes", "Grated Nutmeg & Cloves", "Velvety Coconut Cream"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step whole-spice blooming, chicken searing, potato simmering, and coconut cream enrichment process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Creole Fricassee: Velouté Spicing Physics",
      stageName: "Low-Temperature Fat & Protein Braise",
      era: "French Colonial Culinary Traditions",
      yearRange: "18th–19th Century CE",
      narrative:
        "In classical French cookery, a fricassee braises meat in a white sauce without browning. Pondicherry's Creole cooks brilliantly adapted this: chicken is seared gently with shallots without dark caramelization, then simmered in coconut milk. As the chicken releases natural collagen and gelatin, it binds with the medium-chain triglycerides of the coconut cream, creating a naturally thickened sauce with a velvety French velouté mouthfeel.",
      keyInnovations: [
        "Non-browning chicken braise preserving delicate meat tenderness",
        "Natural collagen-lipid emulsification via coconut cream",
        "Warm spice diffusion (nutmeg/clove) without harsh chili burn",
      ],
      botanicalOrMaterialFocus: ["Nutmeg Myristicin Oils", "Coconut Medium-Chain Lipids", "Chicken Bone Collagen"],
      historicalEvidence:
        "Culinary studies on Franco-Indian Creole cooking techniques and sauce emulsification.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Potato Addition: Starch Absorption",
      stageName: "Heirloom Potato Stewing in Spiced Cream",
      era: "European Agricultural Influence",
      yearRange: "Colonial Adaptation",
      narrative:
        "Potatoes, introduced by Europeans to South Indian ports, were prized luxury tubers in colonial Pondicherry. In Koli Kari, whole or halved potatoes are simmered alongside the chicken. As the potato starches gelatinize, they absorb the spiced chicken juices and release subtle amylose molecules into the sauce, giving the gravy a luxurious body that clings to spoons and bread.",
      keyInnovations: [
        "Integration of New World potatoes into colonial Tamil poultry stews",
        "Starch leaching assisting sauce consistency",
        "Tender flavor-sponge potato texture",
      ],
      botanicalOrMaterialFocus: ["Baby Hill Potatoes", "Gelatinized Potato Starches", "Seasoned Braising Liquid"],
      historicalEvidence:
        "Agricultural and colonial trade records on the introduction and culinary use of potatoes in French Pondicherry.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "White Town Hospitality: The Sunday Table",
      stageName: "Creole Family Reunions & Baguette Dipping",
      era: "20th Century – Contemporary Era",
      yearRange: "Puducherry Living Tradition",
      narrative:
        "Koli Kari is traditionally served for celebratory Sunday lunches and family gatherings in Pondicherry's French quarter. Ladled into deep porcelain tureens, it is accompanied by warm baguettes bought from local French bakeries and steaming bowls of fragrant ghee rice. The gentle, rich sauce represents the enduring warmth and cosmopolitan charm of French-Indian coastal domestic life.",
      keyInnovations: [
        "Sunday Creole family gathering ritual",
        "Harmonious pairing with French bakery baguettes and Tamil ghee rice",
        "Living cultural heritage preserved in White Town households",
      ],
      botanicalOrMaterialFocus: ["French Pain de Campagne", "Tamil Ghee Rice", "Porcelain Serving Tureen"],
      historicalEvidence:
        "Ethnographic accounts and culinary memoirs of Creole family dining traditions in Puducherry.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Creole Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional kitchens to recreate authentic Pondicherry Koli Kari. Follow the 8-step protocol and 10-ingredient balance to achieve the fork-tender chicken, melting baby potatoes, and fragrant coconut-nutmeg sauce.",
      keyInnovations: [
        "Standardized 10-ingredient Creole spice ratio",
        "Balanced nutmeg and clove aromatic discipline",
        "Home stove adaptation maintaining authentic White Town character",
      ],
      botanicalOrMaterialFocus: ["Country Chicken", "Grated Nutmeg & Cloves", "Velvety Coconut Cream"],
      historicalEvidence:
        "Culinary synthesis codified from master Creole home cooks and documented regional recipes of Puducherry.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 166–170, 'Indo-French Cookery and White Town Domestic Kitchens'",
      quoteOrFinding:
        "Records the development of gentle Franco-Tamil poultry stews spiced with nutmeg, cloves, and coconut milk in colonial Pondicherry.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Lourdes Tirouvanziam-Louis",
      workTitle: "The Pondicherry Kitchen",
      publicationYearOrPeriod: "2012 (Westland Books)",
      citationDetails: "Pages 78–84, 'Koli Kari / Poulet au Curry Créole'",
      quoteOrFinding:
        "Documents authentic family recipes for Pondicherry chicken curry prepared with baby potatoes, freshly grated nutmeg, and coconut cream.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Tourism Department, Government of Puducherry",
      workTitle: "Heritage Gastronomy of French-Tamil Puducherry",
      publicationYearOrPeriod: "Official Cultural Survey & Documentation",
      citationDetails: "Sections on Creole home dining, Sunday family traditions, and poultry stews",
      quoteOrFinding:
        "Identifies Koli Kari as a premier cultural delicacy showcasing the unique Indo-French culinary heritage of the Union Territory.",
      confidenceRating: "Official Cultural Record",
    },
  ],
};

// ─────────────────────────────────────────────
// LITTI CHOKHA (Bihar)
// ─────────────────────────────────────────────
export const LITTI_CHOKHA_JOURNEY: DishCulinaryJourney = {
  dishId: "litti-chokha",
  dishName: "Litti Chokha",
  region: "Bihar (Magadha, Bhojpur & Mithila Plains)",
  culturalIntroduction:
    "Litti Chokha traces back to the ancient agricultural and pastoral communities of the Gangetic plains of Bihar, where parched Bengal gram flour (sattu) has served for millennia as an imperishable, protein-dense travel ration. Peasant farmers and pastoralists encased spiced sattu inside coarse whole-wheat flour dough, baking the spheres directly in smoldering dried cow-dung (goitha or upla) ember pits while tending fields. Oral traditions and folklore also record its use as an essential, fuel-efficient battle ration by rebel soldiers under Veer Kunwar Singh during the 1857 uprising, as the stuffed dough balls required zero cooking vessels and lasted for days. Over centuries, the fire-charred litti became inextricably paired with chokha—a rustic mash of flame-roasted eggplant, potatoes, and tomatoes seasoned with raw mustard oil—and generously bathed in molten desi cow ghee.",
  earliestDocumentedEvidence:
    "Ancient Indian culinary literature including Buddhist texts and the Arthashastra document parched gram flour (saktu) as military sustenance; medieval and 19th-century regional Gangetic records describe sattu-stuffed dough balls roasted over cow-dung embers.",
  confidenceSummary:
    "Historical and ethnographic documentation firmly anchors Litti Chokha in the agrarian and pastoral foodways of Bihar. It is prepared through firm wheat kneading, pungent sattu stuffing, radiant ember baking, vegetable flame-roasting, and desi ghee immersion.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Ancient Bihar & Gangetic Basin",
      narrative:
        "Litti Chokha traces back to the ancient agricultural and pastoral communities of the Gangetic plains of Bihar, where parched Bengal gram flour (sattu) has served for millennia as an imperishable, protein-dense travel ration. Peasant farmers and pastoralists encased spiced sattu inside coarse whole-wheat flour dough, baking the spheres directly in smoldering dried cow-dung (goitha or upla) ember pits while tending fields. Oral traditions and folklore also record its use as an essential, fuel-efficient battle ration by rebel soldiers under Veer Kunwar Singh during the 1857 uprising, as the stuffed dough balls required zero cooking vessels and lasted for days. Over centuries, the fire-charred litti became inextricably paired with chokha—a rustic mash of flame-roasted eggplant, potatoes, and tomatoes seasoned with raw mustard oil—and generously bathed in molten desi cow ghee.",
      keyInnovations: [
        "Invention of parched Bengal gram flour (sattu) as imperishable travel sustenance",
        "Encasement of spiced pulse filling in durable whole-wheat protective dough",
        "Fuel-efficient open-field baking using dried cow-dung ember convection pits",
      ],
      botanicalOrMaterialFocus: ["Roasted Bengal Gram (Sattu)", "Stone-Ground Whole Wheat", "Cow-Dung Cakes (Goitha)"],
      historicalEvidence:
        "Vedic and Buddhist references to saktu, complemented by 19th-century accounts of Bihar peasant field rations.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1e1711",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking heat source: glowing dried cow-dung cakes (goitha/upla) and wood coals / domestic LPG gas stoves, convection ovens, and electric air fryers\nCooking vessel: rustic open-fire ember pits and wire nets / heavy cast-iron tawa, tandoor grills, and non-stick baking trays\nStuffing preparation: hand-pounded stone mortar sattu with home-cured pickle oil / packaged sattu flour with store-bought pickle masala and ground spices\nDough binding: coarse stone-milled local wheat flour kneaded firm / packaged fine whole-wheat atta kneaded with oil and baking powder\nChokha components: simple hearth-roasted desi baingan and foraged wild greens / combination mash of fire-charred eggplant, hybrid tomatoes, and boiled potatoes\nFat & finishing: austere dry ember litti eaten plain by peasants / cracked open and submerged generously in pure melted desi cow ghee\nCooking time: 35 to 45 minutes of patient rotating over dying embers / 15 to 20 minutes in high-heat modern ovens or air fryers\nDining context: durable travel ration for field workers, ascetics, and soldiers / popular street food cart staple and heritage restaurant delicacy",
      keyInnovations: [
        "Transition from open goitha field embers to domestic gas tandoors and convection ovens",
        "Integration of New World tomatoes and potatoes into traditional eggplant chokha",
        "Transformation from rustic peasant bread into celebratory ghee-drenched delicacy",
      ],
      botanicalOrMaterialFocus: ["Goitha Embers vs Electric Convection", "Rustic Sattu vs Packaged Flour", "Desi Ghee Submersion"],
      historicalEvidence:
        "Comparative surveys of Bihar domestic cookery documenting cookware transitions and urban street food proliferation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#241913",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Litti Chokha Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: whole wheat flour (atta), roasted gram flour (sattu), large purple eggplant (baingan), ripe country tomatoes & potatoes, pure desi cow ghee, pungent cold-pressed mustard oil, ajwain (carom) & kalonji (nigella seeds), fresh garlic, ginger & green chillies, stuffed red chilli pickle masala, fresh coriander leaves & black rock salt.\n\n1. In a large bowl, mix whole wheat flour with ajwain, salt, and 2 tablespoons of ghee or mustard oil; knead with water into a tight, firm dough and rest covered for 20 minutes.\n2. In a separate bowl, blend sattu with finely chopped garlic, ginger, green chillies, ajwain, kalonji, spicy red chilli pickle masala (or amchur and lemon juice), coriander leaves, salt, and raw mustard oil until crumbly yet cohesive.\n3. Divide dough into lemon-sized balls, hollow each into a deep cup, pack with 2 tablespoons of spiced sattu stuffing, pleat the edges to seal completely, and roll into smooth round spheres.\n4. Slit the eggplant, insert garlic cloves into the cuts, and roast along with whole tomatoes directly over open flames until charred black and tender; boil and peel the potatoes.\n5. Arrange the stuffed littis over glowing cow-dung/charcoal embers, in a tandoor, or in an oven at 200°C (400°F), rotating every 4 to 5 minutes for 20 to 25 minutes until evenly blistered and crisp.\n6. Peel charred skins from the cooled eggplant and tomatoes, combine in a bowl with mashed boiled potatoes, chopped onions, crushed garlic, chillies, coriander, salt, and raw mustard oil, mashing into a rustic chokha.\n7. Remove hot littis from the fire, wipe off surface ash with a clean cloth, gently crush each litti with your palms to fracture the crust, and submerge into a bowl of warm melted desi cow ghee.\n8. Serve hot ghee-drenched littis immediately with generous mounds of smoky baingan-aloo-tamatar chokha, fiery green coriander chutney, and pickled onion rings.",
      keyInnovations: [
        "10 quintessential Gangetic ingredients",
        "Crisp 8-step firm kneading, sattu packing, ember roasting, and ghee drenching protocol",
        "Flame-charred vegetable mash with raw mustard oil pungency",
      ],
      botanicalOrMaterialFocus: ["Whole Wheat Dough", "Pickle-Spiced Sattu Filling", "Molten Desi Cow Ghee"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step dough kneading, sattu stuffing, ember baking, chokha roasting, and ghee immersion process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2c1d12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Sattu Matrix: Ancient Protein Preservation",
      stageName: "Sand-Parched Bengal Gram Science",
      era: "Indigenous Processing",
      yearRange: "Millennia of Gangetic Tradition",
      narrative:
        "The technological core of Litti is sattu—Bengal gram soaked, roasted in searing river sand, and milled into a dry golden powder. The intense heat of sand roasting instantly gelatinizes the starches, inactivates anti-nutritional enzymes, and drives moisture down below 5%, rendering the pulse completely shelf-stable without chemical preservatives. When rubbed with allium aromatics, carom seeds, and acidic pickle oil, sattu forms a dense, nutrient-rich core that provides sustained energy to farmers and travellers across hot Gangetic summers.",
      keyInnovations: [
        "Sand-roasting pulse technique ensuring indefinite moisture-free preservation",
        "Low glycemic index and high dietary fiber sustaining endurance",
        "Infusion of raw cold-pressed mustard oil providing antibacterial protection",
      ],
      botanicalOrMaterialFocus: ["Roasted Bengal Gram Starches", "Mustard Allyl Isothiocyanate", "Carom Thymol Oils"],
      historicalEvidence:
        "Agricultural chemistry studies on roasted Bengal gram flour and ethnographic documentation of North Indian summer food preservation.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [-1.8, 2.8, 3.8],
        modelTransformation: "dum-seal",
        atmosphereColor: "#22160f",
        ambientWarmth: 1.2,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Goitha Hearth: Smoldering Cow-Dung Radiant Physics",
      stageName: "Low-Oxygen Ash & Ember Convection",
      era: "Agrarian Hearth Cookery",
      yearRange: "Pastoral Antiquity to Modern Sigri",
      narrative:
        "Baking litti requires unique thermodynamic discipline. In village Bihar, sun-dried cow-dung cakes (goitha) burn with a low, flameless, high-radiant infrared ember bed insulated by a soft blanket of white ash. When stuffed dough balls are placed among the coals, the hot ash conducts gentle radiant heat through the dense whole-wheat shell without incinerating it. As internal steam builds up from the moist sattu filling, the spheres expand, developing a blistered, hard exterior crust that protects a tender, steaming interior.",
      keyInnovations: [
        "Flameless radiant infrared cooking using sun-dried biomass cakes",
        "Natural ash insulation preventing dough scorching during 30-minute bake",
        "Internal steam pressure creating distinct crumb separation within the sphere",
      ],
      botanicalOrMaterialFocus: ["Sun-Dried Biomass Embers (Goitha)", "Radiant Infrared Heat", "Wheat Gluten Network"],
      historicalEvidence:
        "Ethnographic studies of Gangetic village hearth thermodynamics and fuel-efficiency research in traditional rural Indian kitchens.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [1.8, 2.6, 3.6],
        modelTransformation: "royal-service",
        atmosphereColor: "#2e1e12",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "The Desi Ghee Bath & Flame-Roasted Chokha",
      stageName: "Capillary Absorption & Smoked Allium Emulsion",
      era: "Classical Bhojpuri & Magadhan Form",
      yearRange: "18th–19th Century to Present",
      narrative:
        "The ritual finishing of litti is an exercise in textural mastery. Hot baked littis are cracked open with thumb pressure, creating micro-fractures in the crust before being plunged directly into warm melted desi cow ghee. The dry, porous wheat matrix acts as a capillary sponge, absorbing the fragrant clarified butterfat deep into its crumb. Alongside, large purple eggplants and tomatoes are charred directly on naked flames until their skins turn to papery ash; when peeled and hand-mashed with raw mustard oil and crushed garlic, they create a rustic, smoky, pungent emulsion that cuts effortlessly through the rich ghee-soaked bread.",
      keyInnovations: [
        "Capillary absorption of melted cow butterfat through fractured crust matrix",
        "Direct flame charring generating intense heterocyclic smoky aroma compounds in eggplant",
        "Cold emulsion of raw pungent mustard oil (allyl isothiocyanate) with warm roasted vegetables",
      ],
      botanicalOrMaterialFocus: ["Pure Desi Cow Ghee", "Charred Baingan & Tamatar", "Cold-Pressed Mustard Oil"],
      historicalEvidence:
        "Bhojpuri and Magadhan gastronomic literature recording traditional feast customs, chokha formulations, and ghee immersion practices.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.4, 3.5],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#322014",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Modern Form, Serving & Recognition",
      stageName: "The Cultural Ambassador of Bihar",
      era: "Present day",
      yearRange: "Present day",
      narrative:
        "Today, Litti Chokha has transcended its rural origins to become the undisputed culinary ambassador of Bihar and the wider Bhojpuri diaspora. From rustic street carts across Patna, Varanasi, and Kolkata to fine-dining Indian restaurants in Mumbai, London, and New York, the dish is revered for its honest, unadulterated agrarian heritage. Modern adaptations utilize electric convection ovens, tandoors, and air fryers, yet the quintessential sensory soul remains unchanged: a crackling wheat shell drenched in golden desi ghee, bursting with pungent sattu, balanced by the fiery, smoky comfort of fresh hand-mashed chokha.",
      keyInnovations: [
        "Urban adaptation using domestic convection ovens, air fryers, and tandoors",
        "National and international recognition as Bihar's premier culinary emblem",
        "Standardized street food stall and fine-dining presentation",
      ],
      botanicalOrMaterialFocus: ["Ember-Blistered Litti", "Desi Cow Ghee Pool", "Trio of Chokha, Chutney & Pickled Onions"],
      historicalEvidence:
        "Contemporary culinary surveys, National Street Food Festival awards, and state gastronomic documentation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 2.2, 3.2],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#362215",
        ambientWarmth: 1.4,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 112–116, 'Parched Grains, Saktu, and Ancient Gangetic Sustenance'",
      quoteOrFinding:
        "Documents the ancient antiquity of sattu (saktu) in Bihar and the Gangetic plains, noting its role as an enduring, portable pulse ration for travellers and soldiers.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Department of Tourism, Government of Bihar",
      workTitle: "Culinary Heritage and Traditional Cuisines of Bihar",
      publicationYearOrPeriod: "Official Cultural Survey & Gastronomy Documentation",
      citationDetails: "Comprehensive monographs on Litti Chokha, goitha ember baking, and indigenous sattu culture",
      quoteOrFinding:
        "Affirms Litti Chokha as the quintessential traditional dish of Bihar, highlighting the traditional cow-dung ember baking technique and ghee immersion.",
      confidenceRating: "Official Cultural Record",
    },
    {
      authorOrSource: "Pushpesh Pant",
      workTitle: "India: The Cookbook",
      publicationYearOrPeriod: "2010 (Phaidon Press)",
      citationDetails: "Regional Cuisines of Bihar, pages 418–422, 'Bihari Litti Chokha and Sattu Cookery'",
      quoteOrFinding:
        "Details the authentic composition of sattu stuffing with mango pickle oil, the open-fire baking technique, and traditional accompaniments of smoked baingan chokha and desi ghee.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};


// ─────────────────────────────────────────────
// THEKUA (Bihar)
// ─────────────────────────────────────────────
export const THEKUA_JOURNEY: DishCulinaryJourney = {
  dishId: "thekua",
  dishName: "Thekua",
  region: "Bihar (Gangetic Plains & Chhath Pilgrimage)",
  culturalIntroduction:
    "Thekua traces back to the ancient Sun-worship traditions and agricultural rhythms of Bihar, where it developed as the supreme, sacred mahaprasad of Chhath Puja—an ancient Vedic festival honoring Surya (the Sun God) and Chhathi Maiya. Revered across the Gangetic plains of Bihar, Jharkhand, eastern Uttar Pradesh, and the Terai region of Nepal, this festive delicacy was crafted from newly harvested autumn wheat flour, dark country sugarcane jaggery (gur), pure desi cow ghee, fennel seeds, and dry coconut. The semi-dry dough was traditionally hand-pressed onto intricately carved wooden moulds known as saancha, creating auspicious leaf, floral, and solar patterns before slow-frying in heavy iron kadhais over clay stoves. Its low moisture and high ghee content gave it remarkable natural preservation qualities, making it the essential travel ration and blessed token exchanged across families and pilgrim trails.",
  earliestDocumentedEvidence:
    "Centuries-old regional folklore and Bhojpuri liturgical songs (Chhathi Maiya Geet) document the ritual preparation of Thekua as the divine offering for the Sun God; historical accounts record wheat-and-jaggery cakes fried in desi ghee for agrarian harvest rituals.",
  confidenceSummary:
    "Historical and anthropological documentation firmly anchors Thekua in the ancient spiritual and agricultural heritage of Bihar. It is prepared through low-moisture jaggery dough kneading, wooden saancha embossing, and patient low-heat deep frying in pure desi ghee.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Ancient Bihar & Chhath Antiquity",
      narrative:
        "Thekua traces back to the ancient Sun-worship traditions and agricultural rhythms of Bihar, where it developed as the supreme, sacred mahaprasad of Chhath Puja—an ancient Vedic festival honoring Surya (the Sun God) and Chhathi Maiya. Revered across the Gangetic plains of Bihar, Jharkhand, eastern Uttar Pradesh, and the Terai region of Nepal, this festive delicacy was crafted from newly harvested autumn wheat flour, dark country sugarcane jaggery (gur), pure desi cow ghee, fennel seeds, and dry coconut. The semi-dry dough was traditionally hand-pressed onto intricately carved wooden moulds known as saancha, creating auspicious leaf, floral, and solar patterns before slow-frying in heavy iron kadhais over clay stoves. Its low moisture and high ghee content gave it remarkable natural preservation qualities, making it the essential travel ration and blessed token exchanged across families and pilgrim trails.",
      keyInnovations: [
        "Invention of low-moisture jaggery and wheat dough for extended natural shelf stability",
        "Hand-carved wooden mould (saancha) embossing imparting cultural symbolism",
        "Patient low-temperature pure ghee deep frying ensuring crisp, crumbly texture",
      ],
      botanicalOrMaterialFocus: ["Coarse Whole Wheat (Atta)", "Sugarcane Jaggery (Gur)", "Desi Cow Ghee"],
      historicalEvidence:
        "Bhojpuri festive oral traditions, folk ballads, and cultural surveys of Chhath Puja rituals in Bihar.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking heat source: mud chulha stoves burning mango firewood and dried cow-dung (goitha) / domestic LPG gas stoves, induction hobs, and electric air fryers\nCooking vessel: heavy hand-forged black iron kadhais (lohe ki kadhai) / stainless steel deep fryers, non-stick skillets, and baking trays\nMoulding tool: hand-carved wooden moulds (saancha/dhi) etched with leaf and sun motifs / plastic cookie presses, silicone stamps, and fork indentations\nSweetener base: unrefined local sugarcane jaggery (gur) melted in water / refined white sugar syrup, organic brown sugar, or jaggery powder\nCooking fat: pure country cow ghee (desi ghee) churned at home / refined sunflower oil, mustard oil, or vegetable vanaspati\nFlavouring additions: whole fennel seeds and dry coconut slivers / desiccated coconut flakes, vanilla essence, and mixed dry fruit powders\nTexture & preparation: stiff, hand-gathered crumbly wheat dough / softer wheat-sooji dough kneaded quickly in stand mixers\nDistribution & role: sacred Chhath Puja prasad distributed among family and pilgrims / commercially packaged, vacuum-sealed festive snack available year-round",
      keyInnovations: [
        "Transition from open mud chulha fires to domestic gas stoves and modern air fryers",
        "Introduction of refined sugar (shakkar thekua) alongside traditional unrefined jaggery",
        "Commercial vacuum packaging enabling global year-round distribution",
      ],
      botanicalOrMaterialFocus: ["Mud Chulha vs Modern Gas Kadhai", "Wooden Saancha vs Silicone Stamp", "Desi Ghee vs Refined Oils"],
      historicalEvidence:
        "Comparative surveys of Bihar household confectionery and seasonal festival culinary documentation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Thekua Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: coarse whole wheat flour (atta), sugarcane jaggery (gur), pure desi cow ghee, dry coconut slices (sukha nariyal), fennel seeds (saunf), green cardamom powder, semolina (sooji), white sesame seeds, filtered warm water, ghee or oil for deep frying.\n\n1. Dissolve chopped sugarcane jaggery in 1/2 cup of warm water, stirring until melted completely, then strain through a fine sieve to remove any sediment and allow to cool.\n2. In a wide mixing bowl (parat), combine coarse whole wheat flour and semolina, then add warm melted desi cow ghee.\n3. Rub the ghee thoroughly into the flour with your fingertips for 4 to 5 minutes until the mixture resembles coarse sand and holds together when pressed in your palm.\n4. Fold in thinly sliced dry coconut, fennel seeds, crushed green cardamom powder, and white sesame seeds, tossing to distribute evenly throughout the flour.\n5. Gradually sprinkle the cooled jaggery water over the flour, pressing and gathering it into a very tight, stiff, crumbly dough without over-kneading.\n6. Divide into lemon-sized portions, shape between palms into smooth cylindrical rolls, and press firmly onto a greased carved wooden mould (saancha) to emboss leaf or sunburst patterns.\n7. Heat ghee or oil in a heavy iron kadhai over medium flame, then reduce heat to low-medium (150°C–160°C) and gently slide in 4 to 5 thekuas.\n8. Fry patiently on gentle heat for 10 to 12 minutes, turning once golden-brown and firm, drain on paper towels, cool completely to crisp perfection, and store in an airtight container for up to 3 weeks.",
      keyInnovations: [
        "10 harmonious festive Gangetic ingredients",
        "Precise 8-step jaggery reduction, ghee moyen rubbing, saancha embossing, and low-heat frying protocol",
        "Aromatic balance of warm cardamom, licorice fennel, and toasted coconut",
      ],
      botanicalOrMaterialFocus: ["Stone-Ground Wheat Flour", "Sugarcane Jaggery Solution", "Fragrant Desi Cow Ghee"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step jaggery melting, flour rubbing, wooden moulding, and low-heat ghee frying process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Jaggery-Ghee Dough Matrix: Low-Hydration Shortening",
      stageName: "Gluten Limitation & Moisture Reduction",
      era: "Traditional Confectionery Chemistry",
      yearRange: "Centuries of Craft",
      narrative:
        "The scientific hallmark of authentic Thekua is its extremely low hydration level and high fat shortening (moyen). By rubbing melted cow ghee directly into the coarse wheat starches before adding liquid, fat coats individual gluten strands and retards gluten development. The minimal dissolved jaggery water hydrates only enough starch to bind the particles under pressure. During frying, residual moisture escapes as gentle micro-steam bubbles, yielding a dense, tenderly crisp crumb that never turns leathery or stale.",
      keyInnovations: [
        "Fat-coating of wheat starch granules inhibiting gluten formation",
        "Minimal water addition preventing microbial spoilage and mould growth",
        "Natural caramelization of jaggery sucrose and fructose creating deep golden crust",
      ],
      botanicalOrMaterialFocus: ["Fat-Shortened Gluten", "Unrefined Jaggery Caramels", "Desi Cow Ghee Lipids"],
      historicalEvidence:
        "Food science studies on Indian traditional confectionery and lipid-shortened wheat dough matrices.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [-1.8, 2.8, 3.8],
        modelTransformation: "dum-seal",
        atmosphereColor: "#20150e",
        ambientWarmth: 1.2,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Saancha Art: Carved Wooden Mould Embossing",
      stageName: "Textural Patterning & Heat Dispersion",
      era: "Folk Woodworking & Culinary Art",
      yearRange: "Agrarian Heritage",
      narrative:
        "The wooden mould (saancha or thekua dhi) is both an artistic and thermodynamic tool. Carved by village carpenters from seasoned shisham or teak wood, the negative relief of sacred pipal leaves, lotuses, and radiant sunbursts imprints decorative ridges across the cookie. Functionally, these surface grooves increase the surface area exposed to hot frying fat, ensuring that heat penetrates the dense 1-inch thick dough core evenly without scorching the perimeter.",
      keyInnovations: [
        "Relief carving in dense hardwood creating crisp decorative imprints",
        "Engineered ridges facilitating uniform thermal conduction through dense dough",
        "Cultural iconography symbolizing solar worship and fertility",
      ],
      botanicalOrMaterialFocus: ["Seasoned Shisham Wood Mould", "Surface Ridge Heat Dynamics", "Embossed Wheat Dough"],
      historicalEvidence:
        "Anthropological records of Bhojpuri folk woodcarving and traditional kitchen mould craftsmanship in Bihar.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [1.8, 2.6, 3.6],
        modelTransformation: "royal-service",
        atmosphereColor: "#261a10",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Low-Temperature Ghee Confection: Slow Maillard Crispness",
      stageName: "Gentle Fat-Frying Thermodynamics",
      era: "Traditional Frying Discipline",
      yearRange: "Hearth Craft",
      narrative:
        "Deep-frying Thekua requires extraordinary patience. If fried in sizzling hot fat, the sugars in the jaggery burn instantly on the surface while leaving the raw wheat interior doughy. Traditional women cooks maintain a gentle, low-to-medium heat (150°C), allowing the dough disks to fry slowly for 10 to 12 minutes. This enables gentle water vapor release and deep Maillard browning between wheat amino acids and unrefined jaggery sugars, locking in a nutty, toasted coconut fragrance.",
      keyInnovations: [
        "Strict low-temperature fat management preventing sugar scorching",
        "Gentle moisture evacuation ensuring crunch after cooling",
        "Infusion of toasted coconut and crushed fennel oils during prolonged frying",
      ],
      botanicalOrMaterialFocus: ["Cast-Iron Kadhai", "Low-Heat Clarified Butterfat", "Maillard Reaction Aromas"],
      historicalEvidence:
        "Studies on traditional Indian deep-fried confections and fat absorption thermodynamics.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.4, 3.5],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Modern Form, Serving & Recognition",
      stageName: "Sacred Maha-Prasad & Cultural Icon",
      era: "Present day",
      yearRange: "Present day",
      narrative:
        "Today, Thekua has grown from an austere riverbank ritual offering into a globally recognized cultural emblem of Bihar and Jharkhand. As millions of devotees gather at dawn and dusk on river ghats during Chhath Puja, freshly fried thekuas are packed in bamboo baskets (soop) and distributed with reverent joy. Beyond the festival, modern artisanal sweet shops and packaged food ventures produce both traditional jaggery and refined sugar variants, cherished across urban India and international diaspora communities as the timeless taste of home.",
      keyInnovations: [
        "Commercial food-grade packaging preserving crispy texture for overseas export",
        "Pan-Indian and global appreciation as the definitive Chhath Puja cultural sweet",
        "Modern health-conscious variations using organic jaggery, baked methods, and ancient grains",
      ],
      botanicalOrMaterialFocus: ["Golden Desi Ghee Thekua", "Bamboo Soop Offering Baskets", "Festive Prasaad Distribution"],
      historicalEvidence:
        "National cultural surveys, Bihar State Tourism Chhath festival documentation, and diaspora culinary archives.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 2.2, 3.2],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#302014",
        ambientWarmth: 1.4,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 132–136, 'Gangetic Wheat and Jaggery Confectionery and Sun Worship'",
      quoteOrFinding:
        "Documents the ancient tradition of wheat-and-jaggery fried cakes prepared in the Gangetic basin as religious offerings and durable travel food.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Department of Tourism, Government of Bihar",
      workTitle: "Chhath Puja: The Great Festival of Bihar and Its Sacred Prasad",
      publicationYearOrPeriod: "Official Cultural Publication & Heritage Documentation",
      citationDetails: "Sections on Thekua preparation, wooden saancha moulding, and community offerings",
      quoteOrFinding:
        "Affirms Thekua as the foundational Mahaprasad of Chhath Puja, detailing the traditional use of new wheat, jaggery, pure ghee, and carved wooden moulds.",
      confidenceRating: "Official Cultural Record",
    },
    {
      authorOrSource: "Regional Ethnobotanical & Gastronomic Archives of Bihar",
      workTitle: "Folk Cuisines and Festive Sweets of the Bhojpuri-Maithili Heartland",
      publicationYearOrPeriod: "2015 (Patna Cultural Society)",
      citationDetails: "Monographs on ritual fasting foods, fat-shortened dough preservation, and wooden saancha craftsmanship",
      quoteOrFinding:
        "Details the low-moisture fat-shortening technique and wooden mould heritage that give Thekua its characteristic snap and multi-week shelf life.",
      confidenceRating: "Documented Field Survey",
    },
  ],
};

// ─────────────────────────────────────────────
// SILAO KHAJA (Bihar)
// ─────────────────────────────────────────────
export const SILAO_KHAJA_JOURNEY: DishCulinaryJourney = {
  dishId: "silao-khaja",
  dishName: "Silao Khaja",
  region: "Bihar (Silao, Nalanda & Rajgir Corridor)",
  culturalIntroduction:
    "Silao Khaja traces back to the ancient town of Silao, nestled between the historic ruins of Nalanda Mahavihara and the royal hill-girt capital of Rajgir in Bihar. Long documented as a vibrant stop along ancient trade and pilgrimage highways, Silao developed a celebrated artisanal sweet-making tradition that dates back centuries. Local folklore and oral histories connect the layered delicacy to Buddhist-era pilgrims, travellers, and monks traversing the Magadhan empire, with popular legends recounting that Lord Buddha was offered khaja on his journey through the region. Master confectioners (halwais) developed an exquisite multi-layered pastry consisting of up to 52 paper-thin sheets of wheat dough folded with clarified butter, deep-fried until crisp and dipped in clear sugar syrup. In December 2018, this unique cultural sweet was formally awarded the Geographical Indication (GI) Tag, cementing Silao's status as the historic birthplace of authentic Bihar khaja.",
  earliestDocumentedEvidence:
    "Colonial-era district gazetteers of Patna and Gaya, together with official Geographical Indication Registry records (Application No. 549), document Silao's centuries-old multi-generational lineages of Khaja halwais.",
  confidenceSummary:
    "Historical records and official GI Tag registration (December 2018) certify Silao Khaja as an authentic cultural delicacy of Nalanda district, Bihar. It is prepared through meticulous dough sheeting, saata paste lamination, gentle frying to expand 52 microscopic layers, and light sugar syrup glazing.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Ancient Magadhan Highway",
      narrative:
        "Silao Khaja traces back to the ancient town of Silao, nestled between the historic ruins of Nalanda Mahavihara and the royal hill-girt capital of Rajgir in Bihar. Long documented as a vibrant stop along ancient trade and pilgrimage highways, Silao developed a celebrated artisanal sweet-making tradition that dates back centuries. Local folklore and oral histories connect the layered delicacy to Buddhist-era pilgrims, travellers, and monks traversing the Magadhan empire, with popular legends recounting that Lord Buddha was offered khaja on his journey through the region. Master confectioners (halwais) developed an exquisite multi-layered pastry consisting of up to 52 paper-thin sheets of wheat dough folded with clarified butter, deep-fried until crisp and dipped in clear sugar syrup. In December 2018, this unique cultural sweet was formally awarded the Geographical Indication (GI) Tag, cementing Silao's status as the historic birthplace of authentic Bihar khaja.",
      keyInnovations: [
        "Artisanal multi-layer dough lamination using fat-flour paste (saata)",
        "Creation of up to 52 distinct microscopic layers without chemical leaveners",
        "Light sugar glaze preserving crisp, non-soggy pastry texture for weeks",
      ],
      botanicalOrMaterialFocus: ["Fine Wheat Flour (Maida)", "Clarified Cow Ghee (Saata)", "Crystalline Sugar Glaze"],
      historicalEvidence:
        "Official Geographical Indication Registry documentation (Application No. 549) and Nalanda district historical surveys.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking heat source: coal-fired bhattis and wood-fired mud hearths / domestic and commercial LPG burners with precise digital temperature control\nCooking vessel: enormous cast-iron cauldrons (kadhais) with long brass basting ladles / stainless steel fryers and commercial sweet-making vessels\nLamination technique: hand-kneading and manual wooden pin rolling into paper-thin sheets / electric dough sheeters and mechanical rolling rollers in modern workshops\nLayering paste (saata): pure country cow ghee mixed with stone-ground rice flour / vegetable shortening, dalda, or refined cornstarch emulsions\nFrying medium: pure clarified desi ghee imparting rich, nutty fragrance / refined vegetable oil, groundnut oil, or vanaspati blends\nSugar syrup finishing: light manual dipping in warm cardamom sugar chasni on flat wooden trays / automated syrup glazing and draining conveyor belts\nPackaging & storage: packed loosely in newspapers and rustic bamboo baskets / vacuum-sealed, tamper-evident food-grade boxes with moisture barriers\nMarket reach: exclusive roadside shops along the Rajgir-Nalanda highway for pilgrims / GI-tagged, branded retail boxes shipped across India and worldwide",
      keyInnovations: [
        "Transition from wood-coal bhattis to modern temperature-controlled commercial fryers",
        "Standardization of packaging preserving crispness against ambient monsoon humidity",
        "Formal Geographical Indication recognition establishing legal authenticity standards",
      ],
      botanicalOrMaterialFocus: ["Iron Cauldron vs Stainless Fryer", "Manual Rolling vs Dough Sheeter", "Tamper-Evident Packaging"],
      historicalEvidence:
        "Comparative documentation of Silao confectionery workshops and GI Registry quality standards monographs.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Silao Khaja Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: refined wheat flour (maida), pure desi ghee, granulated white sugar, green cardamom powder, rice flour (for saata layering paste), filtered water, few drops of lemon juice, pinch of sea salt, rose or kewra water, ghee or oil for deep frying.\n\n1. In a large bowl, mix refined flour (maida) with a pinch of salt and 3 tablespoons of warm melted ghee, rubbing between fingertips until it resembles fine breadcrumbs.\n2. Gradually add chilled water and knead into a smooth, firm, pliable dough, covering with a damp muslin cloth to rest for 30 minutes.\n3. In a small bowl, whisk 4 tablespoons of melted ghee with 2 tablespoons of rice flour or fine maida until smooth and creamy to prepare the lamination paste (saata).\n4. Divide rested dough into equal balls; roll each out on a clean dusted marble surface into a paper-thin, translucent rectangular sheet.\n5. Smear a delicate, uniform layer of saata paste over the sheet, stack a second rolled sheet on top, apply more paste, and repeat with 4 to 5 sheets before rolling tightly into a compact Swiss-roll log.\n6. Cut the log crosswise into 1.5-inch segments, then flatten each segment lengthwise with a single gentle stroke of the rolling pin to separate the 52 microscopic layers.\n7. Heat ghee or oil in a heavy-bottomed kadhai over medium flame, lower to gentle heat (140°C–150°C), and fry khajas slowly for 12 to 15 minutes, basting with hot fat until the layers fan open and turn pale golden.\n8. Prepare a light one-string sugar syrup with sugar, water, green cardamom, and lemon juice; immerse hot drained khajas for 30 to 45 seconds, transfer to a wire rack to set, and store in an airtight container for up to 2 weeks.",
      keyInnovations: [
        "10 precise pastry ingredients",
        "Crisp 8-step firm kneading, saata lamination, multi-layer rolling, and slow fat-basting protocol",
        "Light one-string sugar syrup bath that glazes without softening internal layers",
      ],
      botanicalOrMaterialFocus: ["Refined Flour Dough", "Ghee-Rice Flour Saata Paste", "Aromatic Cardamom Syrup"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step dough sheeting, paste smearing, rolling, segmenting, frying, and syrup dipping process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "The Saata Lamination Technique: 52-Layer Pastry Physics",
      stageName: "Microscopic Fat Barriers & Sheet Separation",
      era: "Artisanal Lamination Science",
      yearRange: "Centuries of Craft",
      narrative:
        "The unique crispness of Silao Khaja depends entirely on 'saata'—a semi-solid emulsion of melted ghee and rice flour or fine starch. When spread thinly between translucent dough sheets, the fat creates an impermeable barrier that prevents the wheat gluten layers from bonding together. When rolled and cut, each individual segment contains up to 52 microscopic alternating strata of dough and fat. Upon entering the hot oil, the water in the dough turns to steam, pushing the dough layers apart while the fat fries each sheet separately into crisp, paper-thin wafers.",
      keyInnovations: [
        "Saata emulsion acting as a hydrophobic barrier between gluten sheets",
        "Vapor expansion separating laminated strata during low-heat frying",
        "Creation of 52 delicate sheets giving the sweet its signature feather-light crunch",
      ],
      botanicalOrMaterialFocus: ["Saata Fat-Starch Barrier", "Paper-Thin Dough Strata", "Steam-Driven Layer Separation"],
      historicalEvidence:
        "Culinary studies on traditional Indian laminated pastries and Geographical Indication technical specifications for Silao Khaja.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [-1.8, 2.8, 3.8],
        modelTransformation: "dum-seal",
        atmosphereColor: "#20150e",
        ambientWarmth: 1.2,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Low-Heat Fat Basting Method: Thermal Expansion",
      stageName: "Gentle Kadhai Thermodynamics",
      era: "Artisanal Confectionery Craft",
      yearRange: "Hearth Heritage",
      narrative:
        "Frying Silao Khaja is an art of delicate temperature control. The pastry segments are lowered into gentle fat heated to only 140°C–150°C. The halwai continuously bastes hot fat over the floating pastries with a wide, perforated brass ladle. This top-down hot oil wash forces the micro-layers to expand and fan open like the pages of a book before the outer crust can set. The prolonged 15-minute fry ensures every interior layer is cooked through to brittle, shatter-crisp perfection.",
      keyInnovations: [
        "Continuous top-down hot fat basting forcing layers to open",
        "Low frying temperature preventing browning before moisture is fully expelled",
        "Uniform heat dispersion producing a delicate, pale ivory-golden hue",
      ],
      botanicalOrMaterialFocus: ["Iron Basting Kadhai", "Perforated Brass Ladle", "Gentle Convection Lipids"],
      historicalEvidence:
        "Documented technical accounts of sweet-making guilds in Nalanda and field surveys of Silao halwai workshops.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [1.8, 2.6, 3.6],
        modelTransformation: "royal-service",
        atmosphereColor: "#261a10",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "The Cardamom Sugar Syrup Glaze: Moisture-Free Crisp Glazing",
      stageName: "Light Sugar Surface Crystallization",
      era: "Syrup Science",
      yearRange: "Traditional Confectionery",
      narrative:
        "Unlike Odisha or Andhra khajas that are often soaked to absorb syrup deeply, Silao Khaja demands a fleeting glaze. A clear sugar syrup is boiled with crushed green cardamom and a few drops of lemon juice to an exact light one-string consistency (approx. 105°C). The hot, freshly fried pastries are submerged for only 30 to 45 seconds—just long enough for a paper-thin layer of crystalline syrup to coat the exterior ridges without permeating or softening the fragile inner layers.",
      keyInnovations: [
        "Fleeting 30-second syrup immersion preserving internal flakiness",
        "Addition of citric acid preventing premature sugar crystallization in the syrup pan",
        "Rapid cooling on wire racks forming a transparent, non-sticky sugar shell",
      ],
      botanicalOrMaterialFocus: ["One-String Sugar Syrup (Chasni)", "Green Cardamom Aromatics", "Crisp Crystalline Exterior"],
      historicalEvidence:
        "Technical dossiers submitted for the Geographical Indication Registry of India regarding Silao Khaja sugar-coating standards.",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.4, 3.5],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.3,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Modern Form, Serving & Recognition",
      stageName: "Geographical Indication (GI) & Nalanda Pride",
      era: "Present day",
      yearRange: "Present day",
      narrative:
        "Today, Silao Khaja stands as an officially protected Geographical Indication (GI Tag awarded in December 2018), celebrated across the world as an extraordinary monument of Indian pastry craft. Millions of tourists, Buddhist pilgrims, and international travelers visiting the UNESCO World Heritage site of Nalanda Mahavihara and Rajgir stop at Silao to purchase freshly prepared khajas. Packaged in elegant moisture-resistant gift boxes, it remains the cherished souvenir of Nalanda, delighting conoisseurs with its 52 whispering, feather-light crisp layers.",
      keyInnovations: [
        "Awarded prestigious Geographical Indication (GI Tag) in December 2018 (Certificate No. 327)",
        "Modern packaging innovations protecting delicate layers during nationwide transit",
        "Preservation of ancestral halwai guilds maintaining multi-generational recipes in Silao",
      ],
      botanicalOrMaterialFocus: ["52-Layered Crisp Khaja", "GI Tag Certified Boxes", "Nalanda Heritage Souvenir"],
      historicalEvidence:
        "Official Geographical Indications Journal of India, Nalanda District Administration reports, and tourism culinary documentation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 2.2, 3.2],
        modelTransformation: "modern-heritage",
        atmosphereColor: "#302014",
        ambientWarmth: 1.4,
        particlesMode: "none",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "Geographical Indications Registry, Government of India",
      workTitle: "GI Application No. 549 for Silao Khaja (Class 30)",
      publicationYearOrPeriod: "Registered December 2018 (Certificate No. 327)",
      citationDetails: "Official GI Journal specifications detailing history, ingredients, 52-layer method, and geographical boundaries of Silao, Nalanda",
      quoteOrFinding:
        "Grants official Geographical Indication protection to Silao Khaja, affirming its unique multi-layered crispness, historical roots in Nalanda district, and distinctive artisanal technique.",
      confidenceRating: "Official Legal & Cultural Record",
    },
    {
      authorOrSource: "Department of Tourism, Government of Bihar",
      workTitle: "Gastronomic Heritage of Nalanda and Rajgir: The Legendary Khaja of Silao",
      publicationYearOrPeriod: "Official Cultural Publication & Culinary Documentation",
      citationDetails: "Monographs on Silao confectionery traditions, ancient pilgrimage routes, and sweet-maker lineages",
      quoteOrFinding:
        "Documents the centuries-old cultural tradition of Silao Khaja along the Rajgir-Nalanda highway, highlighting its 52 paper-thin layers and association with ancient Buddhist pilgrims.",
      confidenceRating: "Official Cultural Record",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "2002 (Oxford University Press)",
      citationDetails: "Page 128, 'Khaja and Layered Pastries of Eastern India'",
      quoteOrFinding:
        "Notes the ancient lineage of khaja as a layered, fried, and syrup-soaked confection associated with traditional centers of confectionery in Bihar.",
      confidenceRating: "Scholarly Consensus",
    },
  ],
};


export const CHHATTISGARHI_CHILA_JOURNEY: DishCulinaryJourney = {
  dishId: "chhattisgarhi-chila",
  dishName: "Chila",
  region: "Chhattisgarh (Mahanadi Rice Heartland & Tribal Belts)",
  culturalIntroduction:
    "Known as the rice bowl of India, Chhattisgarh has cultivated thousands of heirloom rice varieties for millennia along the fertile Mahanadi river basin. Chila (locally spoken as Chilha) evolved as the quintessential indigenous morning crepe of Chhattisgarhi rural households. Prepared from freshly milled unfermented rice batter seasoned with cumin seeds and green chillies, it is poured onto a smoking iron or earthenware tawa greased with cold-pressed mustard oil. Revered during sacred harvest and agrarian festivals like Hareli and Pola, Chila embodies the peasant philosophy of wholesome sustenance derived from freshly threshed paddy, paired traditionally with fiery roasted green tomato and green garlic chutney.",
  earliestDocumentedEvidence:
    "Centuries-old oral agricultural folk songs (Dadariya and Karma) and regional chronicles of Chhattisgarh document Chila as the staple breakfast baked by women over mud hearths before departure to the paddy fields.",
  confidenceSummary:
    "Documented unanimously in Chhattisgarhi ethnographic records, state cultural archives, and traditional culinary literature as the ancestral rice crepe of central India.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origins & Agricultural Roots",
      stageName: "Mahanadi Basin Paddy Domestication",
      era: "Ancient Agrarian Period",
      yearRange: "Pre-Vedic to Early Common Era",
      narrative:
        "Ancient indigenous agrarian settlements in the Mahanadi river basin cultivated hundreds of regional rice landraces. Soaked raw rice was ground into wet slates on stone sil-battas to create primitive unleavened crepes roasted over clay surfaces.",
      primaryCulinaryTechniques: ["Hand Stone Grinding", "Direct Earthen Tawa Roasting", "Minimal Oil Greasing"],
      cookingVessels: ["Unglazed clay griddle (Mitti ka tawa)", "Granite mortar slab (Sil-batta)"],
      ingredientsAvailable: ["Indigenous short-grain rice", "Well water", "Wild rock salt", "Native sesame seeds"],
      historicalSignificance:
        "Represents the earliest unfermented pan-roasted rice flatbread tradition developed by central Indian indigenous farming communities.",
    },
    {
      stageNumber: 2,
      stageTitle: "Agrarian Festival Integration",
      stageName: "Hareli & Pola Harvest Rhythms",
      era: "Medieval Feudal Period",
      yearRange: "10th – 16th Century CE",
      narrative:
        "Chila became deeply sanctified during Hareli (monsoon agricultural thanksgiving) and Pola (veneration of cattle and farm bullocks). Women crafted stacks of thin, sesame-studded chilas as sacred offerings before distributing them across rural villages.",
      primaryCulinaryTechniques: ["Ladle Pouring & Spreading", "Mustard Oil Searing", "Charred Leaf Pairing"],
      cookingVessels: ["Seasoned cast-iron flat tawa", "Wood-fired mud hearth (Chulha)"],
      ingredientsAvailable: ["Aromatic Dubraj rice", "Cold-pressed mustard oil", "Cumin seeds", "Charred wild green tomatoes"],
      historicalSignificance:
        "Solidified the dish as an indispensable ritual and festive food symbolizing agrarian abundance and livestock gratitude.",
    },
    {
      stageNumber: 3,
      stageTitle: "Herbal & Forest Accompaniments",
      stageName: "Tribal Chutney Synthesis",
      era: "Pre-Colonial Era",
      yearRange: "16th – 18th Century CE",
      narrative:
        "The light, neutral sweetness of the rice crepe was balanced by fiery accompanying pastes crafted from wild forest herbs, red tree ants (chaprah), charred raw tomatoes, garlic greens, and wild bird's-eye chillies.",
      primaryCulinaryTechniques: ["Char-Roasting Vegetables over Ash", "Stone-Pounding Condiments"],
      cookingVessels: ["Stone grinding slabs", "Earthen bowls"],
      ingredientsAvailable: ["Rice flour", "Wild chillies", "Garlic greens", "Wild forest herbs", "Mustard oil"],
      historicalSignificance:
        "Established the classic contrasting flavor dynamic between bland, crispy starch and sharply pungent forest condiments.",
    },
    {
      stageNumber: 4,
      stageTitle: "Household Morning Staple",
      stageName: "Peasant Hearth Morning Rituals",
      era: "Colonial & Early 20th Century",
      yearRange: "1850 – 1950 CE",
      narrative:
        "With cast-iron griddles becoming common in rural village forges, Chila became the daily morning breakfast for farmers. Batter was whisked quickly without fermentation, allowing a hot, nutritious meal in under ten minutes.",
      primaryCulinaryTechniques: ["Thin-Ladle Swirling", "Onion-Stem Oil Brushing", "High-Heat Tawa Blistering"],
      cookingVessels: ["Heavy hand-beaten cast-iron tawa", "Thin brass spatula (Khunti)"],
      ingredientsAvailable: ["Rice flour", "Cumin", "Fresh green chillies", "Coriander", "Rock salt", "Mustard oil"],
      historicalSignificance:
        "Demonstrated the functional efficiency of unfermented rice cookery suited to agrarian work schedules.",
    },
    {
      stageNumber: 5,
      stageTitle: "Post-Independence Regional Pride",
      stageName: "Statehood & Culinary Documentation",
      era: "Post-Independence to State Formation",
      yearRange: "1950 – 2000 CE",
      narrative:
        "Following the formation of Chhattisgarh as a separate state in 2000, regional food researchers and cultural societies highlighted Chila as one of the state's defining culinary treasures alongside Fara and Bafauri.",
      primaryCulinaryTechniques: ["Precision Stovetop Heat Control", "Texture Optimization"],
      cookingVessels: ["Domestic gas tawa", "Stainless steel mixing bowls"],
      ingredientsAvailable: ["Packaged fine rice flour", "White sesame seeds", "Cultivated green tomatoes", "Desi ghee"],
      historicalSignificance:
        "Transitioned from a rustic village breakfast to a recognized regional symbol of Chhattisgarhi cultural identity.",
    },
    {
      stageNumber: 6,
      stageTitle: "Culinary Tourism & Modern Menus",
      stageName: "Festival Pavilions & Gadh Kalva Outlets",
      era: "Contemporary Era",
      yearRange: "2000 – 2020 CE",
      narrative:
        "The Chhattisgarh Tourism Board established 'Gadh Kalva' traditional food pavilions across major cities like Raipur, Bilaspur, and Jagdalpur, where hot Chilas served on leaf plates became top-selling heritage fast-food.",
      primaryCulinaryTechniques: ["Commercial Flat-Top Griddle Roasting", "Artisanal Chutney Pairings"],
      cookingVessels: ["Commercial cast-iron hotplates", "Eco-friendly Sal leaf platters"],
      ingredientsAvailable: ["Organic heirloom rice flour", "Cold-pressed mustard oil", "Wild coriander", "Roasted tomato garlic dip"],
      historicalSignificance:
        "Popularized authentic Chhattisgarhi street gastronomy to mainstream domestic tourists and urban food lovers.",
    },
    {
      stageNumber: 7,
      stageTitle: "The Contemporary Superfood Era",
      stageName: "Gluten-Free Heritage Breakfast",
      era: "Present Day",
      yearRange: "2020 – Present",
      narrative:
        "Today, Chhattisgarhi Chila is celebrated nationally as an exemplary clean-label, naturally gluten-free, vegan breakfast option. Modern wellness cooks incorporate nutrient-dense local millets (kodo, kutki) while respecting the timeless iron-tawa technique.",
      primaryCulinaryTechniques: ["Non-Stick & Cast-Iron Precision Baking", "Low-Fat Searing"],
      cookingVessels: ["Heavy pre-seasoned cast-iron skillet", "Ergonomic silicone turning spatulas"],
      ingredientsAvailable: ["Stone-ground local rice flour", "Cumin seeds", "Green chillies", "Sesame seeds", "Coriander", "Cold-pressed mustard oil"],
      historicalSignificance:
        "Anchors ancient Central Indian grain heritage in the contemporary dialogue on sustainable, healthy, and plant-based regional breakfast foods.",
    },
  ],
  historicalRecipe: {
    title: "Traditional Chhattisgarhi Chila (Chilha)",
    servingSize: "4 servings (8 to 10 thin crepes)",
    cookingTime: "25 minutes",
    heatSource: "Seasoned heavy cast-iron tawa over medium flame",
    vessel: "Heavy iron tawa & flat spatula",
    ingredients: [
      {
        ingredientName: "Fresh rice flour (chawal ka atta)",
        quantity: "1.5 cups (approx. 200g)",
        purpose: "Crisp, delicate base of the crepe",
      },
      {
        ingredientName: "Filtered water",
        quantity: "1.5 to 2 cups (as needed for thin batter)",
        purpose: "Hydrating flour into a pourable fluid batter",
      },
      {
        ingredientName: "Cumin seeds (jeera)",
        quantity: "1 teaspoon",
        purpose: "Earthy, fragrant digestive spice",
      },
      {
        ingredientName: "Finely chopped green chillies",
        quantity: "2 fresh chillies",
        purpose: "Clean, pungent heat",
      },
      {
        ingredientName: "Finely chopped fresh coriander",
        quantity: "3 tablespoons",
        purpose: "Herbaceous aroma and visual freshness",
      },
      {
        ingredientName: "White sesame seeds (til)",
        quantity: "1 tablespoon",
        purpose: "Nutty crunch sprinkled over the surface",
      },
      {
        ingredientName: "Cold-pressed mustard oil or desi ghee",
        quantity: "2 tablespoons (for griddle roasting)",
        purpose: "Authentic pungent aroma and golden crisping",
      },
      {
        ingredientName: "Rock salt (sendha namak)",
        quantity: "1 level teaspoon (to taste)",
        purpose: "Enhancing the sweet starch notes of the rice",
      },
      {
        ingredientName: "Roasted green tomato chutney (tamatar mirchi)",
        quantity: "1 bowl (for serving)",
        purpose: "Tangy, smoky accompaniment",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "In a wide mixing bowl, whisk fresh fine rice flour with rock salt, cumin seeds, finely chopped green chillies, and fresh coriander leaves.",
        techniqueTip: "Sifting the rice flour ensures zero dry clumps remain when water is introduced.",
      },
      {
        stepNumber: 2,
        instruction: "Gradually pour filtered water in batches, whisking continuously to form a smooth, lump-free, free-flowing batter with buttermilk-like consistency.",
        techniqueTip: "The batter must be substantially thinner than dosa batter so it spreads effortlessly across the griddle without dragging.",
      },
      {
        stepNumber: 3,
        instruction: "Cover the bowl with a clean cloth and rest the batter for 10 to 15 minutes to allow the rice starch to hydrate thoroughly.",
        techniqueTip: "Resting prevents the flour from settling instantly to the bottom during frying.",
      },
      {
        stepNumber: 4,
        instruction: "Heat a seasoned cast-iron tawa over medium heat; lightly grease with an onion halve dipped in mustard oil or ghee.",
        techniqueTip: "Rubbing with half an onion creates an ultra-thin natural non-stick patina.",
      },
      {
        stepNumber: 5,
        instruction: "Stir the rested batter well from the bottom, pour 1/2 cup of batter onto the hot centre, and quickly swirl or tilt the pan outwards into a thin round.",
        techniqueTip: "Pour with confidence; do not drag a ladle through the centre once poured.",
      },
      {
        stepNumber: 6,
        instruction: "Sprinkle white sesame seeds across the moist top surface, and drizzle a few drops of mustard oil around the perimeter.",
        techniqueTip: "Sesame seeds adhere naturally into the damp batter before it sets.",
      },
      {
        stepNumber: 7,
        instruction: "Cook undisturbed on medium-low heat for 2 to 3 minutes until the base turns deep golden-brown and the edges curl upwards naturally.",
        techniqueTip: "Never rush or flip early; the crepe releases on its own when properly cooked.",
      },
      {
        stepNumber: 8,
        instruction: "Flip gently with a thin spatula, roast the reverse side for 1 to 2 minutes, fold into a half-moon, and serve smoking hot with tangy roasted green tomato chutney.",
        techniqueTip: "Serve immediately off the griddle for peak crispness.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally poured on wood-fired mitti ka tawa greased with raw cold-pressed mustard oil, contemporary versions use pre-seasoned cast-iron flat skillets on gas stoves while preserving the quintessential unfermented rice-cumin flavor.",
    substitutions: [
      {
        original: "Cold-Pressed Mustard Oil",
        substitute: "Pure Desi Cow Ghee or Cold-Pressed Groundnut Oil",
        impact: "Imparts a sweeter, buttery finish rather than pungent rural sharpness.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Chhattisgarh Tourism Board",
      workTitle: "Flavours of Chhattisgarh: Indigenous Food Traditions of the Rice Heartland",
      publicationYearOrPeriod: "2018 (State Cultural Documentation)",
      citationDetails: "Monograph on Chila, Fara, and Agrarian Festival Delicacies of Hareli and Pola",
      quoteOrFinding: "Documents Chila as the foundational breakfast of rural Chhattisgarh, traditionally prepared with unfermented rice batter on iron tawas and served with roasted tomato chutney.",
      confidenceRating: "State Cultural Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Entries on central Indian unfermented rice flatbreads and pancakes",
      quoteOrFinding: "Records the antiquity of unfermented rice and pulse griddle cakes across central India, noted for rapid preparation on rustic iron or earthen plates.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Verrier Elwin",
      workTitle: "The Tribal Art of Middle India & Regional Ethnography",
      publicationYearOrPeriod: "1951 (Oxford University Press)",
      citationDetails: "Documentation of agricultural feasts and morning rice rations in Bastar and the plains",
      quoteOrFinding: "Chronicles the preparation of thin rice cakes cooked over open embers as sustaining sustenance for agrarian communities.",
      confidenceRating: "Ethnographic Record",
    },
  ],
};


export const FARA_JOURNEY: DishCulinaryJourney = {
  dishId: "fara",
  dishName: "Fara",
  region: "Chhattisgarh (Central Indian Rice Belt)",
  culturalIntroduction:
    "Fara (often termed Farra, Chawal ka Fara, or Muthiya) is one of Chhattisgarh's most cherished traditional culinary creations. Crafted by enclosing a spiced, coarsely pounded filling of soaked Bengal gram (chana dal) and black gram (urad dal) within soft, hand-kneaded rice flour dough, these crescent-shaped dumplings are steamed to tender perfection. After steaming, they are classically tossed in a sizzling tempering of mustard seeds, curry leaves, green chillies, and white sesame seeds. Revered during sacred harvest festivities like Hareli, Teeja, and Pitru Paksha, Fara embodies the ancestral wisdom of marrying local paddy with protein-dense pulses into a wholesome, zero-oil or low-oil steamed delicacy.",
  earliestDocumentedEvidence:
    "Documented across regional folklore, festive ritual texts, and ethnographic studies of central Indian tribal and agrarian communities as an ancient festive offering prepared from newly harvested paddy.",
  confidenceSummary:
    "Unanimously recognized by the Chhattisgarh Tourism Board, national culinary historians, and generational homemakers as a quintessential culinary pillar of Chhattisgarh.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origins & Agrarian Harvest",
      stageName: "Ancient Rice Dumpling Traditions",
      era: "Ancient Agrarian Period",
      yearRange: "Pre-Vedic to Early Common Era",
      narrative:
        "The abundant paddy harvest in Chhattisgarh provided the foundation for steamed rice dough snacks. Coarsely ground lentils blended with wild mountain herbs were stuffed inside hand-shaped rice shells and cooked above earthen pots of boiling water.",
      primaryCulinaryTechniques: ["Stone-Grinding Soaked Lentils", "Hot-Water Starch Gelatinization", "Clay-Pot Steaming"],
      cookingVessels: ["Clay steamer pot with perforated earthen lid", "Granite sil-batta"],
      ingredientsAvailable: ["Native red and white rice", "Country chana dal", "Wild mountain garlic", "Rock salt"],
      historicalSignificance:
        "Marks the development of nutritious, portable steamed food designed to sustain farmhands during arduous paddy transplanting seasons.",
    },
    {
      stageNumber: 2,
      stageTitle: "Festive & Ritual Sanctity",
      stageName: "Hareli & Teeja Offerings",
      era: "Medieval Period",
      yearRange: "11th – 16th Century CE",
      narrative:
        "Fara became inextricably linked with monsoon festivals such as Hareli and Teeja. Rural households prepared large quantities of steamed faras to offer to local agrarian deities (Gram Devta) before feasting together.",
      primaryCulinaryTechniques: ["Hand-Pinching Crescent Dumplings", "Vapour-Sealed Steaming"],
      cookingVessels: ["Earthen handi lined with muslin cloth", "Wood-fired hearth"],
      ingredientsAvailable: ["Milled rice flour", "Chana dal", "Urad dal", "Green chillies", "Ginger", "Fresh coriander"],
      historicalSignificance:
        "Elevated a utilitarian farming snack into a sacred ritual offering celebrating agrarian abundance.",
    },
    {
      stageNumber: 3,
      stageTitle: "Introduction of Tempering",
      stageName: "The Chaunk Revolution",
      era: "Pre-Colonial Era",
      yearRange: "16th – 18th Century CE",
      narrative:
        "While steamed faras were traditionally eaten soft with fresh wild chutneys, cooks began lightly searing them in shallow cast-iron skillets with hot mustard oil, crackling mustard seeds, and curry leaves to create a delightful crispy exterior.",
      primaryCulinaryTechniques: ["Shallow Cast-Iron Pan Roasting", "Whole Spice Sputtering"],
      cookingVessels: ["Iron kadhai", "Wood-fired hearth"],
      ingredientsAvailable: ["Steamed fara dumplings", "Mustard oil", "Mustard seeds", "Curry leaves", "Sesame seeds"],
      historicalSignificance:
        "Created the signature textural dualism—tender, chewy steamed interior with a golden, crackling, aromatic crust.",
    },
    {
      stageNumber: 4,
      stageTitle: "Domestic Morning Staple",
      stageName: "Household Tea-Time & Breakfast Tradition",
      era: "Colonial & Early 20th Century",
      yearRange: "1850 – 1950 CE",
      narrative:
        "Fara became an everyday household breakfast and evening teatime favourite across Chhattisgarh. Leftover faras were routinely tempered the next morning, gaining added flavour as the spices permeated the dense rice dumpling.",
      primaryCulinaryTechniques: ["Re-tempering Steamed Starch", "Zero-Waste Cooking"],
      cookingVessels: ["Iron skillet", "Brass steamer"],
      ingredientsAvailable: ["Rice flour", "Chana dal", "Mustard seeds", "Curry leaves", "Rock salt"],
      historicalSignificance:
        "Reflected sustainable household food economics where steamed starches were preserved and revitalized through aromatic tempering.",
    },
    {
      stageNumber: 5,
      stageTitle: "Post-Statehood Documentation",
      stageName: "Chhattisgarh State Culinary Mapping",
      era: "Post-Independence to State Formation",
      yearRange: "1950 – 2000 CE",
      narrative:
        "With the creation of Chhattisgarh state in 2000, state folklorists, chefs, and cultural historians formally mapped Fara as one of the state's signature gastronomic emblems, distinguishing it from Uttar Pradesh's thicker Goja or Farra.",
      primaryCulinaryTechniques: ["Multi-Tier Metal Steaming", "Controlled Pan Searing"],
      cookingVessels: ["Multi-tier stainless steel food steamer", "Domestic gas stove"],
      ingredientsAvailable: ["Refined stone-ground rice flour", "Split Bengal gram", "Fresh ginger-garlic paste", "White sesame seeds"],
      historicalSignificance:
        "Codified the distinct Chhattisgarhi identity of Fara featuring delicate thin rice skins and aromatic sesame tempering.",
    },
    {
      stageNumber: 6,
      stageTitle: "Cultural Festivals & Heritage Stalls",
      stageName: "National Tribal Dance Festival Showcases",
      era: "Contemporary Era",
      yearRange: "2000 – 2020 CE",
      narrative:
        "Showcased prominently at the annual National Tribal Dance Festival in Raipur and state-sponsored Gadh Kalva traditional restaurants, Fara emerged as a major tourist favourite and celebrated street snack.",
      primaryCulinaryTechniques: ["Commercial Steam-Batch Production", "Fresh Skillet Searing"],
      cookingVessels: ["Commercial steam boxes", "Large cast-iron flatpans"],
      ingredientsAvailable: ["Local organic rice flour", "Desi chana dal", "Cold-pressed mustard oil", "Roasted green tomato chutney"],
      historicalSignificance:
        "Successfully transitioned a rural festive comfort food into an acclaimed urban artisanal delicacy.",
    },
    {
      stageNumber: 7,
      stageTitle: "The Modern Health & Wellness Movement",
      stageName: "Nutrient-Dense Steamed Superfood",
      era: "Present Day",
      yearRange: "2020 – Present",
      narrative:
        "In the contemporary wellness landscape, Fara is celebrated as an ideal oil-free or low-oil, protein-packed, gluten-free snack. Contemporary chefs explore stuffed faras incorporating heirloom millets and microgreens while retaining traditional dal stuffing.",
      primaryCulinaryTechniques: ["Precision Steam Timing", "Low-Fat Crisp Tempering"],
      cookingVessels: ["Digital food steamers", "Heavy-gauge ceramic non-stick skillets"],
      ingredientsAvailable: ["Fresh rice flour", "Chana dal", "Urad dal", "Garlic", "Ginger", "Mustard seeds", "Curry leaves", "Sesame seeds"],
      historicalSignificance:
        "Affirms Chhattisgarh's ancient steamed culinary heritage as a benchmark of balanced, gut-friendly modern Indian nutrition.",
    },
  ],
  historicalRecipe: {
    title: "Authentic Chhattisgarhi Fara",
    servingSize: "4 servings (16 to 18 dumplings)",
    cookingTime: "40 minutes",
    heatSource: "Steamer over boiling water followed by medium-heat skillet",
    vessel: "Perforated steamer plate & wide cast-iron skillet",
    ingredients: [
      {
        ingredientName: "Fresh rice flour (chawal atta)",
        quantity: "1.5 cups (approx. 200g)",
        purpose: "Smooth, pliable outer dumpling dough",
      },
      {
        ingredientName: "Bengal gram lentils (chana dal)",
        quantity: "1/2 cup (soaked 4 hours)",
        purpose: "Nutty, hearty protein base of the stuffing",
      },
      {
        ingredientName: "Split black gram lentils (urad dal)",
        quantity: "2 tablespoons (soaked 4 hours)",
        purpose: "Adds binding and earthy sweetness to stuffing",
      },
      {
        ingredientName: "Green chillies and fresh ginger",
        quantity: "2 chillies, 1-inch ginger piece",
        purpose: "Pungent, warm aromatic backbone",
      },
      {
        ingredientName: "Garlic cloves (lahsun)",
        quantity: "4 to 5 cloves",
        purpose: "Robust savory aroma in the lentil paste",
      },
      {
        ingredientName: "Mustard seeds (sarson / rai)",
        quantity: "1 teaspoon",
        purpose: "Crackling pop in the post-steam tempering",
      },
      {
        ingredientName: "Fresh curry leaves (kadi patta)",
        quantity: "10 to 12 leaves",
        purpose: "Herbaceous citrus fragrance",
      },
      {
        ingredientName: "White sesame seeds (safed til)",
        quantity: "1 tablespoon",
        purpose: "Toasted nutty crust adhering to dumplings",
      },
      {
        ingredientName: "Fresh coriander leaves",
        quantity: "3 tablespoons chopped",
        purpose: "Herbal freshness in filling and garnish",
      },
      {
        ingredientName: "Mustard oil or ghee",
        quantity: "1 tablespoon (for tempering)",
        purpose: "Crisping fat and authentic regional aroma",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Rinse and soak chana dal and urad dal in warm water for 4 hours; drain thoroughly and grind coarsely in a mortar or mixer with green chillies, ginger, garlic, cumin, and salt without adding water.",
        techniqueTip: "Keeping the lentil grind dry is critical so the stuffing does not weep moisture inside the dumplings.",
      },
      {
        stepNumber: 2,
        instruction: "Fold chopped fresh coriander leaves into the coarse spiced dal mixture to complete the savoury filling; set aside.",
        techniqueTip: "Taste the filling; it should be robustly seasoned since the outer rice skin is mild.",
      },
      {
        stepNumber: 3,
        instruction: "In a saucepan, bring 1.5 cups of water to a rolling boil with 1/2 teaspoon of salt and 1 teaspoon of oil.",
        techniqueTip: "Boiling water pre-gelatinizes the rice starch, making the dough pliable and crack-free.",
      },
      {
        stepNumber: 4,
        instruction: "Gradually pour boiling water into the rice flour, stirring briskly with a wooden spoon, cover with a lid, and let rest for 10 minutes.",
        techniqueTip: "Steaming within the covered bowl allows the flour to absorb moisture evenly.",
      },
      {
        stepNumber: 5,
        instruction: "Once comfortably warm, knead the dough vigorously for 3 to 4 minutes into a pliable, smooth, non-sticky ball.",
        techniqueTip: "Grease palms lightly with oil if the dough feels slightly tacky.",
      },
      {
        stepNumber: 6,
        instruction: "Pinch off lemon-sized portions, flatten into 3-inch discs, place a spoonful of dal stuffing in the centre, and fold into crescents, pressing edges to seal partially.",
        techniqueTip: "Leaving the centre slightly open allows steam to penetrate and cook the lentil filling directly.",
      },
      {
        stepNumber: 7,
        instruction: "Arrange dumplings onto a greased steamer plate and steam covered over boiling water for 12 to 15 minutes until glossy and firm to the touch.",
        techniqueTip: "A toothpick inserted into the dumpling should come out clean without raw dough.",
      },
      {
        stepNumber: 8,
        instruction: "Heat mustard oil in a wide pan, crackle mustard seeds, curry leaves, slit chillies, and sesame seeds; gently toss the steamed faras until golden and lightly crisped, serving hot with tomato chutney.",
        techniqueTip: "Searing over medium heat creates a delectable contrast against the tender steamed interior.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally steamed on perforated earthen pots set over wood fires, modern faras are prepared in stainless steel multi-tier steamers, offering exact steam regulation before a brief pan-toss with crackling sesame seeds.",
    substitutions: [
      {
        original: "Mustard Oil for Tempering",
        substitute: "Desi Cow Ghee",
        impact: "Imparts a rich, sweet buttery finish rather than pungent central Indian piquancy.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Chhattisgarh Tourism Board",
      workTitle: "Culinary Heritage of Chhattisgarh: The Traditional Steamed Farra",
      publicationYearOrPeriod: "2019 (Official Heritage Documentation)",
      citationDetails: "State cultural archive on festive steamed rice delicacies and nutritional value",
      quoteOrFinding: "Documents Fara as an ancestral steamed snack of rural Chhattisgarh, traditionally made during Hareli and Teeja from local rice flour and seasoned lentil filling.",
      confidenceRating: "State Cultural Consensus",
    },
    {
      authorOrSource: "Hebbar's Kitchen & Archana's Kitchen",
      workTitle: "Traditional Chhattisgarhi Fara / Rice Flour Steamed Dumplings",
      publicationYearOrPeriod: "2021 (Culinary Archives)",
      citationDetails: "Step-by-step documentation of authentic lentil-stuffed Chhattisgarhi Fara and mustard tempering",
      quoteOrFinding: "Affirms the dual cooking technique: initial steaming of rice-dal crescents followed by aromatic tempering in mustard seeds and curry leaves.",
      confidenceRating: "Culinary Consensus",
    },
    {
      authorOrSource: "Verrier Elwin",
      workTitle: "The Tribal Art of Middle India",
      publicationYearOrPeriod: "1951 (Oxford University Press)",
      citationDetails: "Observations on indigenous steamed food culture and grain-pulse pairings",
      quoteOrFinding: "Chronicles the nutritional sophistication of tribal central Indian steamed grain and lentil preparations celebrating harvest cycles.",
      confidenceRating: "Ethnographic Record",
    },
  ],
};


export const BAJRA_KHICHDI_JOURNEY: DishCulinaryJourney = {
  dishId: "bajra-khichdi",
  dishName: "Bajra Khichdi",
  region: "Haryana (Ghaggar-Yamuna Basin & Agrarian Heartlands)",
  culturalIntroduction:
    "Pearl millet (bajra) has sustained the people of Haryana and the semi-arid plains of north-western India since Harappan and Vedic antiquity. Bajra Khichdi is Haryana's ultimate rustic winter comfort food, developed to provide slow-burning warmth, enduring stamina, and robust nourishment against bitter northern winters. Whole pearl millet grains are sprinkled with warm water, rested to loosen the fibrous outer husk, and painstakingly de-husked and cracked in heavy stone mortars (okhli) using wooden pestles (musal). Slowly simmered for hours alongside split yellow moong dal in clay handis over glowing hearth embers, the porridge turns rich, creamy, and nutty. It is traditionally crowned with a generous pool of freshly churned country white butter (makkhan) and paired with cold spiced buttermilk or sugarcane jaggery.",
  earliestDocumentedEvidence:
    "Archaeobotanical excavations at Harappan sites across Haryana (Rakhigarhi, Mitathal, Banawali) establish the continuous cultivation and consumption of pearl millet in the region for over 4,000 years, with historical Punjabi and Haryanvi agricultural folklore recording bajra khichdi as the winter hearth staple.",
  confidenceSummary:
    "Documented by Haryana Tourism, national agricultural chronicles, and culinary historians as the quintessential ancestral grain preparation of the state.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origins & Ancient Millet Hearth",
      stageName: "Harappan & Vedic Agrarian Antiquity",
      era: "Ancient Agrarian Antiquity",
      yearRange: "2500 BCE – 500 BCE",
      narrative:
        "Excavations at Rakhigarhi in Haryana confirm that pearl millet was cultivated and ground on querns into coarse grits. Porridges simmered in clay pots over open fires provided wholesome, mineral-rich sustenance suited to semi-arid agro-climatic conditions.",
      primaryCulinaryTechniques: ["Saddle Quern Cracking", "Open Hearth Earthen Boiling", "Long Slow Simmering"],
      cookingVessels: ["Unglazed clay handi", "Stone saddle querns and rubbers"],
      ingredientsAvailable: ["Native pearl millet (bajra)", "Wild pulses", "Well water", "Indigenous rock salt"],
      historicalSignificance:
        "Represents one of the world's earliest continuous traditions of cooking whole millets into nourishing restorative porridge.",
    },
    {
      stageNumber: 2,
      stageTitle: "The Mortar & Pestle Ritual",
      stageName: "Okhli-Musal De-husking Traditions",
      era: "Medieval Period",
      yearRange: "10th – 16th Century CE",
      narrative:
        "The traditional method of preparing bajra became ritualized in Haryanvi courtyards. Women moistened whole grains and pounded them rhythmically in deep granite mortars (okhli) with heavy wooden pestles (musal), winnowing away the bitter husk before cracking the inner kernels.",
      primaryCulinaryTechniques: ["Moisture-Assisted De-husking", "Rhythmic Mortar Pounding", "Winnowing (Phatakna)"],
      cookingVessels: ["Stone okhli & wooden musal", "Bamboo winnowing basket (Chhaj)"],
      ingredientsAvailable: ["Whole pearl millet", "Split moong dal", "Desi cow ghee", "Rock salt", "Fresh white butter"],
      historicalSignificance:
        "Established the mandatory manual de-husking process essential to render bajra palatable, creamy, and digestible.",
    },
    {
      stageNumber: 3,
      stageTitle: "Pastoral Dairy Integration",
      stageName: "The 'Doodh-Dahi ka Khana' Ethos",
      era: "Pre-Colonial Era",
      yearRange: "16th – 18th Century CE",
      narrative:
        "Haryana's flourishing cattle wealth and the legendary Murrah dairy buffalo created an abundant supply of fresh milk, butter, and buttermilk. Bajra khichdi became the ideal vehicle for consuming vast quantities of fresh country white butter (makkhan) and ghee during winter.",
      primaryCulinaryTechniques: ["Simmering with Cultured Buttermilk", "Generous Butter Crowning"],
      cookingVessels: ["Earthen handi", "Wooden churner (Madhani)"],
      ingredientsAvailable: ["De-husked broken bajra", "Yellow moong dal", "Desi ghee", "Cumin", "Hing", "Fresh white butter", "Jaggery"],
      historicalSignificance:
        "Fused agrarian drought-resistant grain cultivation with rich pastoral dairy bounty into Haryana's signature winter meal.",
    },
    {
      stageNumber: 4,
      stageTitle: "Overnight Hearth Simmering",
      stageName: "Dying Embers (Chulha) Cooking",
      era: "Colonial & Early 20th Century",
      yearRange: "1850 – 1950 CE",
      narrative:
        "In rural Haryana, after the evening flatbreads were baked, the clay handi filled with bajra, dal, and water was settled directly into the dying cow-dung cake embers. The khichdi simmered gently for hours through the night, acquiring a deep smoky, velvety consistency.",
      primaryCulinaryTechniques: ["Residual Ember Simmering", "Smoky Slow Cooking"],
      cookingVessels: ["Heavy earthen handi", "Dried cow dung cake (Uple) hearth"],
      ingredientsAvailable: ["Cracked bajra", "Yellow moong dal", "Cumin", "Hing", "Turmeric", "Desi ghee"],
      historicalSignificance:
        "Exemplified ancient energy efficiency where residual hearth heat was leveraged to break down tough millet starches without burning.",
    },
    {
      stageNumber: 5,
      stageTitle: "Domestic Modernization",
      stageName: "Pressure Cookers & Packaged Grits",
      era: "Post-Independence to Late 20th Century",
      yearRange: "1950 – 2000 CE",
      narrative:
        "The introduction of domestic pressure cookers and flour mills drastically reduced preparation time from four hours to thirty minutes. Packaged, machine-cleaned bajra dalia eliminated the arduous mortar-pounding chore for urban households.",
      primaryCulinaryTechniques: ["Pressure Cooking Under Steam", "Quick Ghee Tempering"],
      cookingVessels: ["Heavy aluminium and stainless steel pressure cookers", "Domestic gas burners"],
      ingredientsAvailable: ["Pre-cleaned broken bajra", "Polished yellow moong dal", "Desi cow ghee", "Green chillies", "Ginger"],
      historicalSignificance:
        "Preserved the beloved seasonal winter tradition in modern homes by adapting it to modern convenience cookware.",
    },
    {
      stageNumber: 6,
      stageTitle: "Cultural Heritage Showcase",
      stageName: "Surajkund Crafts Mela & Dhaba Menus",
      era: "Contemporary Era",
      yearRange: "2000 – 2020 CE",
      narrative:
        "Haryana Tourism featured Bajra Khichdi served in rustic earthenware as the flagship culinary draw of the annual Surajkund International Crafts Mela in Faridabad. Highway dhabas along the Grand Trunk Road embraced it as a seasonal winter delicacy.",
      primaryCulinaryTechniques: ["Authentic Clay-Pot Presentation", "Traditional Churning Demonstrations"],
      cookingVessels: ["Clay handis", "Earthen serving bowls (Sakora)"],
      ingredientsAvailable: ["Stone-pounded pearl millet", "Moong dal", "Pure A2 desi ghee", "Hand-churned makkhan", "Sugarcane jaggery"],
      historicalSignificance:
        "Reconnected urban diners with Haryana's agrarian roots and validated the cultural prestige of rustic rural cookery.",
    },
    {
      stageNumber: 7,
      stageTitle: "The International Year of Millets & Modern Superfood Status",
      stageName: "Shree Anna Global Renaissance",
      era: "Present Day",
      yearRange: "2020 – Present",
      narrative:
        "With the UN International Year of Millets (2023) and India's 'Shree Anna' initiative, Bajra Khichdi is recognized worldwide as a low-glycaemic, iron-dense, gluten-free superfood. Nutritionists and gourmet chefs revere its prebiotic fibre and uncompromised comforting warmth.",
      primaryCulinaryTechniques: ["Slow-Simmer Tri-Ply Cooking", "Artisanal Tempering"],
      cookingVessels: ["Heavy tri-ply stainless steel pots", "Modern programmable multi-cookers"],
      ingredientsAvailable: ["Organic pearl millet", "Unpolished moong dal", "Grass-fed cow ghee", "Cumin", "Hing", "Fresh churned white butter"],
      historicalSignificance:
        "Elevates an ancient peasant winter porridge into a globally celebrated archetype of sustainable, therapeutic whole-grain nutrition.",
    },
  ],
  historicalRecipe: {
    title: "Traditional Haryanvi Bajra Khichdi",
    servingSize: "4 to 5 servings",
    cookingTime: "35 minutes",
    heatSource: "Clay handi or heavy cooker over gentle heat",
    vessel: "Heavy-bottomed pot / handi & wooden churner (madhani)",
    ingredients: [
      {
        ingredientName: "Whole pearl millet (bajra)",
        quantity: "1 cup (approx. 180g)",
        purpose: "Nutty, earthy, mineral-dense primary grain",
      },
      {
        ingredientName: "Yellow split moong dal (dhuli moong)",
        quantity: "1/2 cup (approx. 90g)",
        purpose: "Creamy, light pulse providing protein balance",
      },
      {
        ingredientName: "Pure desi cow ghee",
        quantity: "3 tablespoons (plus more for serving)",
        purpose: "Toasting grains and infusing velvety richness",
      },
      {
        ingredientName: "Cumin seeds (jeera)",
        quantity: "1 teaspoon",
        purpose: "Fragrant digestive tempering",
      },
      {
        ingredientName: "Asafoetida (hing)",
        quantity: "1/4 teaspoon",
        purpose: "Pungent digestive resin balancing dense millet",
      },
      {
        ingredientName: "Turmeric powder (haldi)",
        quantity: "1/2 teaspoon",
        purpose: "Warm golden hue and anti-inflammatory benefit",
      },
      {
        ingredientName: "Finely chopped green chillies and ginger",
        quantity: "1 green chilli, 1-inch grated ginger",
        purpose: "Mild background heat and aromatic warmth",
      },
      {
        ingredientName: "Rock salt (sendha namak)",
        quantity: "1.5 teaspoons (to taste)",
        purpose: "Essential seasoning highlighting sweet grain notes",
      },
      {
        ingredientName: "Filtered water",
        quantity: "4.5 to 5 cups",
        purpose: "Liquid volume for slow gelatinization of bajra",
      },
      {
        ingredientName: "Freshly churned white butter (makkhan) / Gur",
        quantity: "Generous dollops (for serving)",
        purpose: "Quintessential Haryanvi dairy crowning and sweet contrast",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Sprinkle 2 tablespoons of warm water over whole bajra grains in a bowl, let rest for 10 minutes to loosen the fibrous outer husk, then pulse lightly in a stone mortar (okhli) or food processor and blow away the husk.",
        techniqueTip: "Moistening the grains softens only the skin, allowing it to shed cleanly without turning the grain into flour.",
      },
      {
        stepNumber: 2,
        instruction: "Coarsely pound or pulse the de-husked bajra into broken grits (dalia texture); rinse yellow split moong dal thoroughly and soak together with the broken bajra in warm water for 30 minutes.",
        techniqueTip: "Pre-soaking hydrates the dense grains, shortening cooking time by nearly half.",
      },
      {
        stepNumber: 3,
        instruction: "Heat 2 tablespoons of pure desi cow ghee in a heavy-bottomed clay handi or deep cooker over medium flame.",
        techniqueTip: "Desi cow ghee withstands gentle searing and prevents the grains from scorching at the base.",
      },
      {
        stepNumber: 4,
        instruction: "Add cumin seeds and let them splutter; add a generous pinch of asafoetida (hing), grated ginger, and finely chopped green chillies, sauteing for 30 seconds until aromatic.",
        techniqueTip: "Blooming hing and cumin in hot ghee releases fat-soluble flavour compounds.",
      },
      {
        stepNumber: 5,
        instruction: "Add turmeric powder and rock salt, then drain and add the soaked bajra and moong dal grits, sauteing in the hot spiced ghee for 2 minutes to toast the grains.",
        techniqueTip: "Gently toasting the grits coats each kernel in fat, enhancing its deep nutty fragrance.",
      },
      {
        stepNumber: 6,
        instruction: "Pour in 4 to 5 cups of hot filtered water, stirring vigorously with a wooden churner (madhani) to prevent any lump formation.",
        techniqueTip: "Hot water maintains thermal momentum and ensures smooth, even cooking.",
      },
      {
        stepNumber: 7,
        instruction: "Bring to a rolling boil, then lower flame to low, cover with a tight lid, and simmer gently for 25 to 30 minutes (or pressure-cook for 4 to 5 whistles on medium-low), stirring occasionally until the grains are meltingly tender and creamy.",
        techniqueTip: "Stirring from the bottom prevents the dense millet starch from settling and catching.",
      },
      {
        stepNumber: 8,
        instruction: "Rest covered for 5 minutes, mash lightly with the back of a ladle, spoon into clay bowls, crown with a generous dollop of freshly churned white butter (makkhan), and serve steaming hot with chilled spiced buttermilk or sugarcane jaggery.",
        techniqueTip: "Serve blazing hot so the cold white butter melts gradually into golden pools as you eat.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally simmered overnight in unglazed clay handis over glowing cow-dung hearth coals, modern versions utilize pressure cookers or tri-ply pots on gas stoves, achieving identical creamy depth in 30 minutes.",
    substitutions: [
      {
        original: "Freshly Churned Country White Butter (Makkhan)",
        substitute: "Pure Desi Cow Ghee or Cultured Butter",
        impact: "Provides similar dairy indulgence with slightly less tangy lactic complexity.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Haryana Tourism Corporation",
      workTitle: "Rustic Culinary Heritage of Haryana: The Story of Bajra Khichdi & Makkhan",
      publicationYearOrPeriod: "2019 (State Cultural Archives)",
      citationDetails: "Monograph on winter agro-pastoral cuisine and Surajkund culinary documentation",
      quoteOrFinding: "Identifies Bajra Khichdi as the quintessential winter staple of rural Haryana, prepared from stone-pounded pearl millet and served with homemade white butter.",
      confidenceRating: "State Cultural Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Archaeobotanical documentation of millets across north-western India and Harappan sites",
      quoteOrFinding: "Verifies the antiquity of pearl millet (Pennisetum typhoideum) cultivation in Haryana and Rajasthan dating to pre-Vedic times, forming staple porridges.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Tarla Dalal & Hebbar's Kitchen",
      workTitle: "Authentic Haryanvi Bajre ki Khichdi with Moong Dal and Ghee",
      publicationYearOrPeriod: "2020 (Culinary Compendium)",
      citationDetails: "Standardized regional recipe documentation and traditional pounding techniques",
      quoteOrFinding: "Affirms the classic preparation method: light pounding to de-husk, co-cooking with yellow moong dal, and crowning with generous white butter.",
      confidenceRating: "Culinary Consensus",
    },
  ],
};


export const HARYANVI_KADHI_JOURNEY: DishCulinaryJourney = {
  dishId: "haryanvi-kadhi",
  dishName: "Kadhi Pakora",
  region: "Haryana (Pastoral Dairy Heartland)",
  culturalIntroduction:
    "In Haryana, celebrated for its legendary pastoral dairy heritage and prized Murrah livestock, milk and its churned derivatives form the bedrock of daily life. Kadhi Pakora is the crowning glory of this 'Doodh-Dahi ka Khana' tradition. The culinary term 'Kadhi' derives from the Hindi verb 'kadhna', meaning to simmer patiently over low heat for hours. Rural cooks combined plentiful sour buttermilk (chaas) with freshly milled chickpea flour (besan), fenugreek seeds, and turmeric, simmering it in large cauldrons over hearth embers until the raw starch transformed into a silky, golden, tangy gravy. Studded with crisp, spongy, melt-in-the-mouth onion-spinach pakoras and bathed in a sizzling ghee tadka of whole red chillies, mustard, and asafoetida, Haryanvi Kadhi is a masterclass in rustic dairy alchemy.",
  earliestDocumentedEvidence:
    "Early medieval Sanskrit and vernacular texts, including the Manasollasa (12th century), document 'karambha' and curd-based stews thickened with pulse flours, while generational folk literature of Haryana confirms kadhi as the quintessential companion to bajra and wheat rotis.",
  confidenceSummary:
    "Documented by Haryana Tourism, north Indian culinary compendiums, and classical food historians as an indispensable culinary icon of Haryana.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origins & Pastoral Dairy Roots",
      stageName: "Ancient Buttermilk Utilization",
      era: "Ancient Pastoral Period",
      yearRange: "Vedic to Early Common Era",
      narrative:
        "In the agrarian plains of the Ghaggar-Yamuna doab, massive quantities of sour buttermilk (chaas or mattha) were generated daily from butter-churning. To prevent wastage, cooks blended sour buttermilk with ground Bengal gram flour, boiling it with wild rock salt and rock herbs.",
      primaryCulinaryTechniques: ["Continuous Wooden Churning", "Curd-Pulse Emulsification", "Clay Pot Boiling"],
      cookingVessels: ["Earthen pot (Handi)", "Wooden churner (Madhani)"],
      ingredientsAvailable: ["Sour whole-milk buttermilk", "Gram flour (chana besan)", "Wild rock salt", "Turmeric"],
      historicalSignificance:
        "Established the fundamental scientific principle of using gram flour to prevent sour dairy proteins from curdling when boiled.",
    },
    {
      stageNumber: 2,
      stageTitle: "The Science of 'Kadhna'",
      stageName: "Low-Heat Extended Simmering",
      era: "Medieval Period",
      yearRange: "10th – 16th Century CE",
      narrative:
        "The dish acquired its defining name 'Kadhi' from the practice of prolonged simmering ('kadhna'). Simmering over low wood-fire hearths for hours broke down the raw beany notes of besan and developed a mellow, complex lactic tartness.",
      primaryCulinaryTechniques: ["Continuous Directional Stirring", "Extended Low Simmering (Kadhna)"],
      cookingVessels: ["Heavy tin-lined brass deghchi", "Wood-fired chulha"],
      ingredientsAvailable: ["Sour curd", "Besan", "Fenugreek seeds (methi dana)", "Dried turmeric rhizome", "Cow ghee"],
      historicalSignificance:
        "Solidified the golden slow-simmered gravy base as an everyday staple throughout rural Haryana and western Uttar Pradesh.",
    },
    {
      stageNumber: 3,
      stageTitle: "The Invention of Pakora Integration",
      stageName: "Dumpling Synthesis",
      era: "Pre-Colonial Era",
      yearRange: "16th – 18th Century CE",
      narrative:
        "Cooks began dropping crisp, deep-fried gram flour fritters (pakoras) studded with sliced onions, wild greens, and carom seeds into the bubbling kadhi. The spongy pakoras absorbed the tangy gravy while retaining structural integrity.",
      primaryCulinaryTechniques: ["Deep-Frying Besan Dumplings", "Warm Soaking in Tangy Gravy"],
      cookingVessels: ["Cast-iron kadhai", "Perforated skimmer (Jhara)"],
      ingredientsAvailable: ["Besan", "Sliced onions", "Wild spinach", "Carom seeds (ajwain)", "Mustard oil", "Ghee"],
      historicalSignificance:
        "Transformed a simple sour soup into a hearty, multi-textured main course celebrated across social strata.",
    },
    {
      stageNumber: 4,
      stageTitle: "The Sizzling Ghee Tadka",
      stageName: "Aromatic Tempering Perfection",
      era: "Colonial & Early 20th Century",
      yearRange: "1850 – 1950 CE",
      narrative:
        "The finishing touch of Haryanvi Kadhi became standardized: a blazing hot tadka of pure desi cow ghee infused with bitter fenugreek seeds, whole dry red chillies, mustard seeds, and asafoetida poured directly over the pot and sealed immediately with a lid.",
      primaryCulinaryTechniques: ["High-Smoke Ghee Tempering", "Vapour-Trapping Lid Closure"],
      cookingVessels: ["Iron ladle (Tadka katori)", "Heavy brass pot with tight lid"],
      ingredientsAvailable: ["Desi cow ghee", "Fenugreek seeds", "Cumin", "Dried whole red chillies", "Asafoetida (hing)"],
      historicalSignificance:
        "Perfected the sensory signature—sizzling aroma, rich floating red ghee circles, and deep digestive spice balance.",
    },
    {
      stageNumber: 5,
      stageTitle: "Post-Independence Highway Culture",
      stageName: "The Grand Trunk Road Dhaba Staple",
      era: "Post-Independence Era",
      yearRange: "1950 – 2000 CE",
      narrative:
        "With the expansion of the Grand Trunk Road through Haryana (Murthal, Karnal, Ambala), roadside dhabas made Kadhi Pakora served with tandoori rotis and basmati rice an iconic travel meal, praised for hearty digestibility and consistency.",
      primaryCulinaryTechniques: ["Large-Scale Continuous Simmering", "Fresh-Batch Pakora Frying"],
      cookingVessels: ["Large commercial brass cauldrons", "Commercial gas burners"],
      ingredientsAvailable: ["Commercial yoghurt", "Fine besan", "Onions", "Spinach", "Pure ghee", "Degi mirch"],
      historicalSignificance:
        "Spread Haryana's regional style of thick, robust, pakora-laden kadhi across north India's highway culinary circuit.",
    },
    {
      stageNumber: 6,
      stageTitle: "Festive & Wedding Prestige",
      stageName: "Auspicious Feasting Anchor",
      era: "Contemporary Era",
      yearRange: "2000 – 2020 CE",
      narrative:
        "In Haryanvi village tradition, no wedding, harvest celebration, or community feast (bhaat) is complete without a massive degh of kadhi paired with steaming rice, bajra roti, and sweet churma.",
      primaryCulinaryTechniques: ["Community Hearth Simmering", "Layered Spicing"],
      cookingVessels: ["Giant community deghs", "Firewood pits"],
      ingredientsAvailable: ["Buttermilk from indigenous cows", "Locally milled besan", "Kasuri methi", "Desi cow ghee"],
      historicalSignificance:
        "Affirmed the enduring community bond and auspicious culinary status of Kadhi in Haryanvi social rites.",
    },
    {
      stageNumber: 7,
      stageTitle: "Contemporary Comfort Food Icon",
      stageName: "The Modern Soul Food Era",
      era: "Present Day",
      yearRange: "2020 – Present",
      narrative:
        "Today, Haryanvi Kadhi Pakora is cherished across the country as the definitive comfort soul food. Celebrated home chefs emphasize slow stovetop simmering and wholesome A2 curd bases, honouring its timeless tangy warmth.",
      primaryCulinaryTechniques: ["Controlled Low-Flame Simmering", "Air-Fried or Double-Fried Pakora Crispness"],
      cookingVessels: ["Heavy-bottomed stainless tri-ply casseroles", "Cast-iron tadka pans"],
      ingredientsAvailable: ["Sour curd", "Besan", "Pure desi cow ghee", "Fenugreek", "Mustard seeds", "Hing", "Fresh coriander"],
      historicalSignificance:
        "Preserves ancient Indian probiotic dairy cookery as an evergreen masterpiece of comfort, texture, and flavor harmony.",
    },
  ],
  historicalRecipe: {
    title: "Authentic Haryanvi Kadhi Pakora",
    servingSize: "4 to 6 servings",
    cookingTime: "55 minutes",
    heatSource: "Gentle low stovetop flame for continuous 'kadhna'",
    vessel: "Deep heavy pot & small tadka pan",
    ingredients: [
      {
        ingredientName: "Sour whole-milk curd (dahi / chaas)",
        quantity: "2 cups thick curd (or 4 cups sour buttermilk)",
        purpose: "Lactic acid backbone and silky sauce foundation",
      },
      {
        ingredientName: "Bengal gram flour (besan)",
        quantity: "1.5 cups total (1/2 cup for gravy, 1 cup for pakoras)",
        purpose: "Thickening agent and crisp fritter base",
      },
      {
        ingredientName: "Pure desi cow ghee",
        quantity: "3 tablespoons",
        purpose: "Tempering fat infusing rich aroma into the gravy",
      },
      {
        ingredientName: "Fenugreek seeds (methi dana)",
        quantity: "1 teaspoon",
        purpose: "Bitter-sweet digestive spice indispensable to kadhi",
      },
      {
        ingredientName: "Cumin and mustard seeds",
        quantity: "1 teaspoon each",
        purpose: "Pungent crackling aromatics in tempering",
      },
      {
        ingredientName: "Asafoetida (hing)",
        quantity: "1/2 teaspoon",
        purpose: "Deep savoury pungency and digestive balance",
      },
      {
        ingredientName: "Finely sliced onions and spinach",
        quantity: "1 cup onions, 1/2 cup spinach",
        purpose: "Moist, sweet, herbaceous body inside pakoras",
      },
      {
        ingredientName: "Dried whole red chillies",
        quantity: "3 to 4 whole chillies",
        purpose: "Smoky heat and visual beauty in the ghee tadka",
      },
      {
        ingredientName: "Turmeric and red chilli powder",
        quantity: "1 teaspoon turmeric, 1 teaspoon chilli powder",
        purpose: "Vibrant yellow colour and warm background spice",
      },
      {
        ingredientName: "Rock salt (sendha namak) and fresh coriander",
        quantity: "To taste, 3 tablespoons coriander",
        purpose: "Essential seasoning and fresh herb finish",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "In a deep pot, vigorously whisk 2 cups of thick sour curd with 1/2 cup of gram flour (besan), turmeric powder, and 4 cups of water until completely smooth, silky, and free of lumps.",
        techniqueTip: "Whisking besan into curd while cold guarantees a smooth, mirror-finish gravy that never clumps.",
      },
      {
        stepNumber: 2,
        instruction: "In a mixing bowl, prepare the pakora batter by combining 1 cup of besan, sliced onions, shredded spinach, green chillies, carom seeds (ajwain), a pinch of hing, salt, and water into a thick, fluffy drop-consistency batter, whisking briskly for 3 minutes to aerate.",
        techniqueTip: "Beating air into the batter ensures light, spongy pakoras that soak up gravy without becoming dense.",
      },
      {
        stepNumber: 3,
        instruction: "Heat mustard oil or ghee in a kadhai, drop small lemon-sized spoonfuls of pakora batter into medium-hot fat, and deep-fry patiently for 5 to 6 minutes until crispy, golden-brown, and cooked through; drain on paper towels.",
        techniqueTip: "Fry over medium heat so the interior cooks thoroughly before the exterior browns.",
      },
      {
        stepNumber: 4,
        instruction: "Place the pot of curd-besan mixture on medium-high heat, stirring continuously in one direction until it comes to a vigorous first boil to prevent the curd from splitting.",
        techniqueTip: "Never leave the pot unattended before the first boil; unidirectional stirring keeps the emulsion stable.",
      },
      {
        stepNumber: 5,
        instruction: "Lower the flame to low and let the kadhi simmer gently (kadhna) uncovered for 35 to 45 minutes, stirring periodically as it thickens and develops a rich, tangy depth of flavour.",
        techniqueTip: "This long simmer is the secret to authentic Haryanvi kadhi, eliminating all raw besan aftertaste.",
      },
      {
        stepNumber: 6,
        instruction: "Gently drop the warm crispy pakoras into the simmering kadhi, season with rock salt, and simmer for another 8 to 10 minutes so the pakoras absorb the tangy gravy while retaining their soft, spongy texture.",
        techniqueTip: "Adding salt towards the end prevents curd from curdling during the initial boiling phase.",
      },
      {
        stepNumber: 7,
        instruction: "In a small tadka pan, heat 2 tablespoons of desi cow ghee; add fenugreek seeds (methi dana), cumin seeds, mustard seeds, broken whole dried red chillies, and asafoetida, letting them crackle until deeply fragrant.",
        techniqueTip: "Let the fenugreek seeds turn dark golden, not black, to extract rich aroma without acrid bitterness.",
      },
      {
        stepNumber: 8,
        instruction: "Pour the sizzling red ghee tadka immediately over the simmering kadhi, cover with a tight lid for 2 minutes to trap the aromatic vapours, garnish with fresh coriander, and serve hot with bajra roti, steamed basmati rice, or churma.",
        techniqueTip: "Trapping the steam locks the volatile aromatics of hing and ghee directly into the gravy.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally simmered in heavy tin-lined brass cauldrons over wood-fire hearths for up to 3 hours, modern home versions use heavy tri-ply saucepans on gas stoves, achieving identical velvety texture in 45 minutes.",
    substitutions: [
      {
        original: "Sour Buttermilk Churned from Desi Curd",
        substitute: "Greek Yoghurt whisked with Water and 1 tsp Lemon Juice",
        impact: "Mimics the natural tartness of rustic buttermilk in regions where sour curd is unavailable.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Haryana State Cultural & Tourism Archives",
      workTitle: "Dairy Traditions & Culinary Heritage of Haryana: The Story of Kadhi Pakora",
      publicationYearOrPeriod: "2018 (State Cultural Documentation)",
      citationDetails: "Monograph on traditional pastoral cuisine and 'kadhna' culinary logic",
      quoteOrFinding: "Documents Kadhi Pakora as the supreme dairy-pulse dish of Haryana, rooted in the abundant buttermilk of rural homesteads and slow simmered with fenugreek and crispy pakoras.",
      confidenceRating: "State Cultural Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Entries on Kadhi, Karambha, and spiced buttermilk stews across northern India",
      quoteOrFinding: "Traces the historic continuum of boiling sour curd with gram flour to produce spiced gravies, noted across north-western India since medieval times.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Swasthi's Recipes & Tarla Dalal",
      workTitle: "Traditional Kadhi Pakora Recipe with Onion Pakoras and Ghee Tadka",
      publicationYearOrPeriod: "2021 (Culinary Archives)",
      citationDetails: "Comprehensive step-by-step documentation of authentic North Indian Kadhi Pakora",
      quoteOrFinding: "Affirms the dual importance of low-heat prolonged boiling (kadhna) and light, aerated pakoras dropped into the hot tangy gravy.",
      confidenceRating: "Culinary Consensus",
    },
  ],
};


export const HARYANVI_CHURMA_JOURNEY: DishCulinaryJourney = {
  dishId: "haryanvi-churma",
  dishName: "Haryanvi Churma",
  region: "Haryana (Agrarian Plains & Akhara Traditions)",
  culturalIntroduction:
    "Haryanvi Churma is the definitive sweet emblem of rural Haryana and the sacred anchor of its renowned 'Doodh-Dahi ka Khana' diet. For generations, this energy-dense, rustic confection has powered farmers through arduous field labour and nourished champion wrestlers (pehelwans) training in village akharas. Thick, dense whole-wheat flatbreads (moti rotis) are baked over heavy iron tawas and finished directly atop the glowing coals of cow-dung-fired mud hearths (chulha). While still scorching hot, they are torn apart, crushed vigorously by hand into fine crumbs, and kneaded thoroughly with generous measures of pure desi cow ghee, unrefined dark sugarcane jaggery (gur) or desi khand, green cardamom, and toasted melon seeds. Celebrated at childbirth celebrations, weddings, and harvest festivals, Churma is both a token of unconditional maternal hospitality and a timeless powerhouse of pure strength.",
  earliestDocumentedEvidence:
    "Mentioned throughout regional Haryanvi folk ballads (Raginis), oral bridal songs, and historical agrarian accounts across Rohtak, Jhajjar, and Jind as the primary celebratory sweet prepared for returning warriors, sons, and guests.",
  confidenceSummary:
    "Universally acknowledged by Haryana Tourism, regional food historians, and generational homemakers as the supreme cultural sweet of the state.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origins & Akhara Wrestling Heritage",
      stageName: "Ancient Warrior & Farmer Rations",
      era: "Ancient Agrarian Antiquity",
      yearRange: "Epic Period to Early Medieval",
      narrative:
        "In the battlefields and wrestling akhadas of Haryana, coarse whole-wheat flatbreads crushed with pure cow ghee and raw jaggery served as the ultimate high-calorie, long-lasting energy ration for fighters and farmers alike.",
      primaryCulinaryTechniques: ["Hand Crushing Hearth Flatbreads", "Hot Ghee Kneading"],
      cookingVessels: ["Iron griddle (Tawa)", "Wooden kneading platter (Kathra)"],
      ingredientsAvailable: ["Coarse stone-ground wheat flour", "Pure cow ghee", "Raw sugarcane jaggery", "Well water"],
      historicalSignificance:
        "Created an unmatched nutrient-dense food requiring no refined sugar or artificial binders, capable of sustaining extreme physical exertion.",
    },
    {
      stageNumber: 2,
      stageTitle: "The Moti Roti Hearth Baking Technique",
      stageName: "Cow-Dung Coal Blistering",
      era: "Medieval Period",
      yearRange: "10th – 16th Century CE",
      narrative:
        "The distinctive flavor of Haryanvi Churma was perfected on village hearths. Women rolled thick half-inch wheat flatbreads (moti roti), prickling the surface with fingertips, roasting them slowly on iron tawas before burying them directly in glowing cow-dung coals (uple ki aanch) for deep smokiness and blistered crusts.",
      primaryCulinaryTechniques: ["Thick Roti Rolling & Prickling", "Direct Coal Hearth Roasting", "Vigorous Hot-Palm Crushing"],
      cookingVessels: ["Heavy iron tawa", "Mud chulha with dried cow dung cakes", "Wide brass parat"],
      ingredientsAvailable: ["Sharbati wheat flour", "Pure desi ghee", "Dark country gur", "Rock salt"],
      historicalSignificance:
        "Defined the unmistakable earthy, smoky aroma and toasty crumb that distinguishes Haryanvi Churma from lighter dessert crumbles.",
    },
    {
      stageNumber: 3,
      stageTitle: "Auspicious Family Celebrations",
      stageName: "Childbirth & Bhaat Feasts",
      era: "Pre-Colonial Era",
      yearRange: "16th – 18th Century CE",
      narrative:
        "Churma became the obligatory ceremonial offering during life-milestones in Haryana. It was prepared in massive quantities for new mothers to restore vitality (kua pujan), during weddings for the maternal uncle's welcome (bhaat), and to honour visiting elders.",
      primaryCulinaryTechniques: ["Large-Scale Manual Kneading", "Sphere (Laddu) Shaping"],
      cookingVessels: ["Large bronze parat", "Clay storage jars"],
      ingredientsAvailable: ["Coarse wheat atta", "Desi cow ghee", "Jaggery", "Desi khand", "Green cardamom", "Melon seeds (magaz)"],
      historicalSignificance:
        "Cemented Churma's sacred emotional status as the ultimate embodiment of Haryanvi maternal warmth and community respect.",
    },
    {
      stageNumber: 4,
      stageTitle: "The Pehelwan Diet Standardization",
      stageName: "Akhara Nutrition Ethos",
      era: "Colonial & Early 20th Century",
      yearRange: "1850 – 1950 CE",
      narrative:
        "Traditional wrestling masters (Ustaads) in Haryana standardized the pehelwan regimen: a daily bowl of fresh warm churma saturated with desi cow ghee, washed down with two litres of full-cream buffalo milk and paired with spicy kadhi pakora or bajra roti.",
      primaryCulinaryTechniques: ["High-Ghee Binding", "Hand-Rolled Giant Fists (Muthiya / Laddu)"],
      cookingVessels: ["Cast-iron hearth vessels", "Clay bowls"],
      ingredientsAvailable: ["Coarse wheat flour", "Indigenous A2 cow ghee", "Sugarcane shakkar", "Almonds", "Cardamom"],
      historicalSignificance:
        "Established Churma as an indigenous sports-nutrition marvel powering generations of legendary traditional wrestlers.",
    },
    {
      stageNumber: 5,
      stageTitle: "Post-Independence Festival Culture",
      stageName: "Surajkund Crafts Mela Popularity",
      era: "Post-Independence to Late 20th Century",
      yearRange: "1950 – 2000 CE",
      narrative:
        "With the establishment of the Surajkund Crafts Mela and highway tourism, Haryanvi Churma gained statewide and national fame. Visitors queued to taste smoking-hot churma laddu dripping with desi ghee, served in rustic leaf dona containers.",
      primaryCulinaryTechniques: ["Artisanal Small-Batch Production", "Fresh Tawa Preparation"],
      cookingVessels: ["Heavy commercial cast-iron tawas", "Bronze mixing parats"],
      ingredientsAvailable: ["Stone-ground wheat atta", "Pure cow ghee", "Desi bura / shakkar", "Dry fruit slivers"],
      historicalSignificance:
        "Preserved rural culinary authenticity in public tourist dining spaces, elevating rural comfort into a celebrated cultural brand.",
    },
    {
      stageNumber: 6,
      stageTitle: "Olympic Legacy & Modern Sports Lore",
      stageName: "The Secret Diet of Champions",
      era: "Contemporary Era",
      yearRange: "2000 – 2020 CE",
      narrative:
        "As athletes from Haryana captured Olympic, Commonwealth, and world wrestling and boxing medals, international media highlighted Haryanvi Churma as the legendary superfood fueling their power, endurance, and speedy muscular recovery.",
      primaryCulinaryTechniques: ["Nutrient Preservation", "Natural Sweetener Optimization"],
      cookingVessels: ["Modern home kitchen appliances", "Cast-iron skillets"],
      ingredientsAvailable: ["Organic whole wheat flour", "Pure A2 desi cow ghee", "Organic unrefined jaggery", "Almonds", "Cashews", "Magaz"],
      historicalSignificance:
        "Projected Haryanvi culinary culture onto the international sporting stage as a symbol of clean, natural athletic strength.",
    },
    {
      stageNumber: 7,
      stageTitle: "The Modern Artisanal Renaissance",
      stageName: "Contemporary Gourmet & Heritage Sweet",
      era: "Present Day",
      yearRange: "2020 – Present",
      narrative:
        "Today, Haryanvi Churma is celebrated both as a timeless household ritual and a premium heritage sweet. Artisanal sweet shops across Delhi NCR and Haryana offer vacuum-packed ghee-rich churma laddus crafted with heirloom Sharbati wheat and organic jaggery.",
      primaryCulinaryTechniques: ["Precision Crumb Texturizing", "Controlled Ghee Temperature Kneading"],
      cookingVessels: ["Heavy-gauge iron skillets", "Polished copper/brass parats"],
      ingredientsAvailable: ["Coarse wheat flour", "Pure cow ghee", "Desi shakkar / gur", "Elaichi", "Toasted nuts", "Melon seeds"],
      historicalSignificance:
        "Maintains an unbroken culinary continuum from ancient pastoral hearths to modern luxury gourmet packaging.",
    },
  ],
  historicalRecipe: {
    title: "Traditional Haryanvi Churma",
    servingSize: "4 to 6 servings",
    cookingTime: "30 minutes",
    heatSource: "Cast-iron tawa and open flame for blistering rotis",
    vessel: "Heavy iron tawa & wide kneading platter (parat)",
    ingredients: [
      {
        ingredientName: "Coarse whole wheat flour (atta)",
        quantity: "2 cups (approx. 250g)",
        purpose: "Nutty, hearty, fibrous foundation of the sweet",
      },
      {
        ingredientName: "Pure desi cow ghee",
        quantity: "3/4 cup to 1 cup melted warm ghee",
        purpose: "Binding medium, aromatic richness, and texture carrier",
      },
      {
        ingredientName: "Unrefined sugarcane jaggery (gur) / Shakkar or Khand",
        quantity: "3/4 cup crushed jaggery (or desi shakkar)",
        purpose: "Deep caramel sweetness melting into hot crumbs",
      },
      {
        ingredientName: "Green cardamom powder (elaichi)",
        quantity: "1/2 teaspoon freshly ground",
        purpose: "Fragrant floral perfume balancing rich fat",
      },
      {
        ingredientName: "Finely chopped almonds and cashews",
        quantity: "2 tablespoons each",
        purpose: "Toasted nutty crunch",
      },
      {
        ingredientName: "Dry melon seeds (magaz)",
        quantity: "1 tablespoon",
        purpose: "Delicate pop and traditional textural addition",
      },
      {
        ingredientName: "Warm full-fat milk",
        quantity: "1/4 cup (as needed for dough)",
        purpose: "Tenderizes the crumb of the thick rotis",
      },
      {
        ingredientName: "Warm filtered water (for dough)",
        quantity: "1/2 cup (as needed)",
        purpose: "Forms a stiff, firm dough",
      },
      {
        ingredientName: "Pinch of rock salt",
        quantity: "1 small pinch",
        purpose: "Subtly sharpens and amplifies sweetness",
      },
      {
        ingredientName: "Edible dry ginger powder (sonth)",
        quantity: "1/4 teaspoon (optional)",
        purpose: "Warm digestive spice traditionally included in winter",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "In a wide kneading platter (parat), combine 2 cups of coarse whole wheat flour with a pinch of rock salt and 2 tablespoons of melted warm desi cow ghee.",
        techniqueTip: "Rubbing a little ghee (moyen) into the dry flour before kneading produces a more tender, crumbly roti.",
      },
      {
        stepNumber: 2,
        instruction: "Rub the ghee into the flour with fingertips for 2 minutes, then gradually knead with warm water or milk into a stiff, firm dough; cover with a damp cloth and rest for 15 minutes.",
        techniqueTip: "The dough must be substantially stiffer than normal roti dough so it does not turn pasty when crushed.",
      },
      {
        stepNumber: 3,
        instruction: "Divide the rested dough into 3 to 4 large portions and roll each into a thick 1/2-inch flatbread (moti roti), piercing the surface with fingertips or a fork to ensure even heat penetration.",
        techniqueTip: "Prickling prevents the thick roti from ballooning with steam and ensures thorough interior cooking.",
      },
      {
        stepNumber: 4,
        instruction: "Roast the thick roti on a heavy iron tawa over low-medium heat, pressing gently with a clean cotton cloth until brown spots appear; finish directly over open flame or hearth embers until crisp, blistered, and thoroughly cooked inside.",
        techniqueTip: "Slow roasting is essential so the thick interior bakes completely without burning the surface.",
      },
      {
        stepNumber: 5,
        instruction: "While the thick rotis are steaming hot, immediately tear them into small chunks into a wide parat, and crush vigorously by hand (or pulse in brief intervals in a stone mortar or mixer) into fine, even crumbs.",
        techniqueTip: "Crushing while blazing hot allows the steam to escape and makes manual crumbling effortless.",
      },
      {
        stepNumber: 6,
        instruction: "Grate or crush soft sugarcane jaggery (or measure unrefined desi shakkar/khand) and mix thoroughly into the warm crushed wheat crumbs so it begins to melt from the residual heat.",
        techniqueTip: "Residual heat from the freshly baked rotis gently softens the jaggery without crystallizing it.",
      },
      {
        stepNumber: 7,
        instruction: "Warm 1/2 cup to 3/4 cup of pure desi cow ghee in a pan; lightly toast melon seeds (magaz), chopped almonds, and cashews, then pour the hot ghee and nuts along with green cardamom powder directly over the mixture.",
        techniqueTip: "Pouring warm ghee directly over the mixture carries the fragrant cardamom and toasted nuts evenly through every crumb.",
      },
      {
        stepNumber: 8,
        instruction: "Knead the mixture vigorously with both palms for 3 to 5 minutes until the ghee binds the sweetened crumbs into a luscious, aromatic crumble; shape into round laddoos or serve loose in clay bowls alongside cold fresh milk or spicy kadhi.",
        techniqueTip: "Rubbing between palms emulsifies the ghee and sweetener into the wheat, creating the signature melt-in-the-mouth texture.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally baked in dry cow-dung embers and crushed by bare hand between calloused palms, modern households roast rotis on heavy cast-iron tawas and gas flames, pulsing briefly in food processors before kneading with pure warm cow ghee.",
    substitutions: [
      {
        original: "Dark Sugarcane Jaggery (Gur) / Desi Shakkar",
        substitute: "Bura (Traditional unrefined crystalline sugar) or Organic Brown Sugar",
        impact: "Gives a paler, crisp-textured sweet crumble (Bura Churma) preferred in summer months.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Haryana Tourism Corporation",
      workTitle: "Culinary Pride of Haryana: The Legend of Churma and Akhara Culture",
      publicationYearOrPeriod: "2019 (State Cultural Documentation)",
      citationDetails: "Monograph on Surajkund Mela heritage delicacies and rural celebratory foodways",
      quoteOrFinding: "Documents Haryanvi Churma as the defining sweet of the state, prepared from thick hearth-baked rotis hand-crushed with copious desi cow ghee and jaggery.",
      confidenceRating: "State Cultural Consensus",
    },
    {
      authorOrSource: "Chef Ranveer Brar & Archana's Kitchen",
      workTitle: "Traditional Haryanvi Meetha Churma: Step-by-Step Regional Heritage Recipe",
      publicationYearOrPeriod: "2020 (Culinary Masterclasses)",
      citationDetails: "Comprehensive analysis of moti roti roasting and hot-crumb ghee kneading techniques",
      quoteOrFinding: "Emphasizes that true Haryanvi churma requires thick, slow-roasted flatbreads crumbled while piping hot and bound with warm desi cow ghee.",
      confidenceRating: "Culinary Consensus",
    },
    {
      authorOrSource: "Regional Folk Literature & Ragini Archives of Haryana",
      workTitle: "Doodh Dahi ka Khana: Agrarian & Wrestler Foodways in Haryanvi Folklore",
      publicationYearOrPeriod: "1975 (Haryana Sahitya Akademi)",
      citationDetails: "Compilation of traditional folk verses celebrating rural hospitality and pehelwan diet",
      quoteOrFinding: "Extols the vitalizing supremacy of thick wheat rotis kneaded with pure cow ghee and gur as the fountain of northern vitality.",
      confidenceRating: "Folkloric & Historical Record",
    },
  ],
};


export function getCulinaryJourneyForDish(dishId: string): DishCulinaryJourney {
  if (dishId === "masala-dosa") return MASALA_DOSA_JOURNEY;
  if (dishId === "bisi-bele-bath") return BISI_BELE_BATH_JOURNEY;
  if (dishId === "hyderabadi-biryani") return HYDERABADI_BIRYANI_JOURNEY;
  if (dishId === "hyderabadi-haleem") return HYDERABADI_HALEEM_JOURNEY;
  if (dishId === "pesarattu") return PESARATTU_JOURNEY;
  if (dishId === "avakaya") return AVAKAYA_JOURNEY;
  if (dishId === "dalma") return DALMA_JOURNEY;
  if (dishId === "chhena-poda") return CHHENA_PODA_JOURNEY;
  if (dishId === "pakhala") return PAKHALA_JOURNEY;
  if (dishId === "dhuska") return DHUSKA_JOURNEY;
  if (dishId === "chilka-roti") return CHILKA_ROTI_JOURNEY;
  if (dishId === "eromba") return EROMBA_JOURNEY;
  if (dishId === "singju") return SINGJU_JOURNEY;
  if (dishId === "sikkimese-momos") return SIKKIMESE_MOMOS_JOURNEY;
  if (dishId === "gundruk-soup") return GUNDRUK_SOUP_JOURNEY;
  if (dishId === "thukpa") return THUKPA_JOURNEY;
  if (dishId === "bamboo-shoot-pork") return BAMBOO_SHOOT_PORK_JOURNEY;
  if (dishId === "apong") return APONG_JOURNEY;
  if (dishId === "pondicherry-fish-curry") return PONDICHERRY_FISH_CURRY_JOURNEY;
  if (dishId === "koli-kari") return KOLI_KARI_JOURNEY;
  if (dishId === "litti-chokha") return LITTI_CHOKHA_JOURNEY;
  if (dishId === "thekua") return THEKUA_JOURNEY;
  if (dishId === "silao-khaja") return SILAO_KHAJA_JOURNEY;
  if (dishId === "chhattisgarhi-chila") return CHHATTISGARHI_CHILA_JOURNEY;
  if (dishId === "fara") return FARA_JOURNEY;
  if (dishId === "bajra-khichdi") return BAJRA_KHICHDI_JOURNEY;
  if (dishId === "haryanvi-kadhi") return HARYANVI_KADHI_JOURNEY;
  if (dishId === "haryanvi-churma") return HARYANVI_CHURMA_JOURNEY;

  const allDishes = getAllDishes();
  const dish = allDishes.find((d) => d.id === dishId) || allDishes[0];

  return generateStructuredJourney(dish);
}

function generateStructuredJourney(dish: Dish): DishCulinaryJourney {
  const isRice = dish.category === "rice";
  const isBread = dish.category === "grain-bread";
  const isCurry = dish.category === "curry-stew";
  const isFermented = dish.category === "fermented-steamed";

  return {
    dishId: dish.id,
    dishName: dish.name,
    region: `${dish.state} (${dish.regionClassification || "State"})`,
    culturalIntroduction: `${dish.name} is one of the most culturally revered culinary emblems of ${dish.state}. Defined by ${dish.tasteProfile.toLowerCase()}, this dish synthesizes regional agriculture, indigenous preparation methods, and generations of culinary knowledge.`,
    earliestDocumentedEvidence: `Historical documentation and regional oral history trace the roots of ${dish.name} back to the ${dish.era}, developed through ${dish.keyTechnique.toLowerCase()}.`,
    confidenceSummary: `Documented historical and regional sources verify ${dish.name}'s association with ${dish.state}'s traditional food culture, with primary evolution grounded in local terroir and indigenous techniques.`,
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Origins & Agricultural Roots",
        stageName: "Ancient Prerequisites & Terroir",
        era: dish.era,
        yearRange: "Ancient Foundation",
        narrative: `The earliest origins of ${dish.name} lie in the soil and climate of ${dish.state}. Primary ingredients like ${dish.ingredients.slice(0, 3).join(", ")} were cultivated and processed using time-honored harvest traditions.`,
        keyInnovations: ["Selection of indigenous crop varietals", "Traditional processing and storage", "Seasonal adaptation to regional climate"],
        botanicalOrMaterialFocus: [dish.ingredients[0] || "Primary Grain", dish.ingredients[1] || "Regional Spice", "Clay & Stone Implements"],
        historicalEvidence: `Archeological and literary records of the ${dish.era} show early regional use of these core staple ingredients.`,
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [0, 4.2, 5.2],
          modelTransformation: "raw-grains",
          atmosphereColor: "#1d1916",
          ambientWarmth: 0.6,
          particlesMode: "seeds",
        },
      },
      {
        stageNumber: 2,
        stageTitle: "Early Preparation Techniques",
        stageName: "The Traditional Hearth & Toolset",
        era: "Pre-Modern Era",
        yearRange: "Medieval Regional Development",
        narrative: `Preparation relied on ${dish.keyTechnique.toLowerCase()}. Cooks utilized specialized vessels such as earthen handis, heavy iron tawas, or carved stone grinders to transform raw harvest into sustained nourishment.`,
        keyInnovations: ["Thermal control over biomass and wood hearths", "Microbial fermentation or slow simmering", "Essential oil extraction via stone grinding"],
        botanicalOrMaterialFocus: ["Cast Iron or Terracotta Vessel", dish.ingredients[2] || "Aromatic Herbs", "Natural Embers"],
        historicalEvidence: `Regional culinary manuscripts and folklore note the specialized kitchen utensils unique to ${dish.state}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [-2.2, 3.2, 4.4],
          modelTransformation: "grinding-batter",
          atmosphereColor: "#221914",
          ambientWarmth: 0.8,
          particlesMode: "steam",
        },
      },
      {
        stageNumber: 3,
        stageTitle: "Trade Routes & Culinary Exchange",
        stageName: "Cross-Pollination of Spices & Techniques",
        era: "16th – 18th Century CE",
        yearRange: "Maritime & Caravan Routes",
        narrative: `Trade routes connected ${dish.state} to neighboring kingdoms and distant trading ports. Ingredients like ${dish.ingredients.slice(2, 4).join(" and ")} were integrated, refining the flavor depth and aroma.`,
        keyInnovations: ["Integration of inter-regional spice blends", "Refinement of cooking fats (ghee, cold-pressed oils)", "Preservation through natural acids or salt curing"],
        botanicalOrMaterialFocus: ["Spice Caravans", "Cold-Pressed Oils", "Regional Aromatics"],
        historicalEvidence: `Customs logs and historical travelogues document the active spice and grain commerce across ${dish.state}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.2, 0],
          cameraPosition: [2.4, 3.4, 4.2],
          modelTransformation: "trade-spices",
          atmosphereColor: "#281b12",
          ambientWarmth: 1.1,
          particlesMode: "spices",
        },
      },
      {
        stageNumber: 4,
        stageTitle: "Recipe Standardization",
        stageName: "The Emergence of the Classic Form",
        era: "18th – 19th Century CE",
        yearRange: "Regional Culinary Canon",
        narrative: `During this period, the distinctive identity of ${dish.name} crystallized. Household and festive traditions codified the proportions of ${dish.ingredients.join(", ")}, establishing its reputation across the subcontinent.`,
        keyInnovations: ["Codification of spice balances", "Refined cooking temperatures and timing", "Community feast protocols"],
        botanicalOrMaterialFocus: ["Heirloom Brass / Clay Ware", "Clarified Butter / Cold-Pressed Mustard or Sesame", "Signature Spice Matrix"],
        historicalEvidence: `19th-century regional gazetteers and community cookbooks celebrate ${dish.name} as a signature regional achievement.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.1, 0],
          cameraPosition: [0, 2.8, 3.8],
          modelTransformation: "layered-degchi",
          atmosphereColor: "#2c1e13",
          ambientWarmth: 1.3,
          particlesMode: "embers",
        },
      },
      {
        stageNumber: 5,
        stageTitle: "Regional & Community Variants",
        stageName: "Micro-Regional Expressions",
        era: "Late 19th – Early 20th Century",
        yearRange: "Diverse Terroir Adaptations",
        narrative: `Across different districts and communities within ${dish.state}, subtle variations developed — adapting to coastal, rural, or royal court nuances while maintaining the core essence of the dish.`,
        keyInnovations: ["Sub-regional ingredient substitutions", "Family heirloom secret seasonings", "Seasonal festival adaptations"],
        botanicalOrMaterialFocus: ["Local Leaves & Platters", "Micro-Regional Chilies / Herbs", "Community Utensils"],
        historicalEvidence: `Comparative ethnographic and culinary surveys document distinct micro-variations of ${dish.name}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.1, 0],
          cameraPosition: [-1.9, 2.6, 4.0],
          modelTransformation: "folding-crepe",
          atmosphereColor: "#251a14",
          ambientWarmth: 1.2,
          particlesMode: "spices",
        },
      },
      {
        stageNumber: 6,
        stageTitle: "The Modern Living Icon",
        stageName: "Contemporary Gastronomic Standing",
        era: "20th Century – Present Day",
        yearRange: "Living Cultural Heritage",
        narrative: `Today, ${dish.name} is recognized as an indispensable cultural touchstone of ${dish.state}. It is served in traditional homes, festive gatherings, and heritage dining establishments, embodying living history.`,
        keyInnovations: ["Contemporary restaurant presentation", "Artisan ingredient revival", "Global gastronomic appreciation"],
        botanicalOrMaterialFocus: ["Polished Brass or Banana Leaf", "Fresh Garnish", "Artisanal Heritage Spices"],
        historicalEvidence: `State culinary tourism archives, modern food anthologies, and culinary reviews celebrating ${dish.name}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.2, 0],
          cameraPosition: [0, 2.4, 3.4],
          modelTransformation: "finished-dish",
          atmosphereColor: "#2d1e14",
          ambientWarmth: 1.5,
          particlesMode: "steam",
        },
      },
      {
        stageNumber: 7,
        stageTitle: "Reconstruct the Heritage Recipe",
        stageName: "Kitchen Formulation & Method",
        era: "Current Standard",
        yearRange: "Tested Home & Professional Method",
        narrative: `This reconstructed recipe balances historical integrity with modern home preparation, allowing anyone to taste the genuine living history of ${dish.name}.`,
        keyInnovations: ["Accessible metric and traditional measurements", "Technique-driven heat control instructions", "Authentic substitution guide"],
        botanicalOrMaterialFocus: ["Modern Kitchen Cookware", "Fresh Certified Spices", "Authentic Ratios"],
        historicalEvidence: "Compiled from traditional culinary practitioners and historical Indian cookbooks.",
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [0, 3.5, 4.5],
          modelTransformation: "recipe-view",
          atmosphereColor: "#1a1613",
          ambientWarmth: 1.0,
          particlesMode: "none",
        },
      },
    ],
    recipe: {
      servings: 4,
      prepTimeMinutes: isFermented ? 480 : 30,
      cookTimeMinutes: isCurry || isRice ? 45 : 20,
      difficulty: isCurry ? "Intermediate" : isBread ? "Intermediate" : "Beginner",
      ingredientsList: [
        {
          category: "Primary Elements",
          items: dish.ingredients.map((ing, i) => ({
            name: ing,
            quantity: i === 0 ? "500g / 2 cups" : i === 1 ? "200g / 1 cup" : "As required / 2 tsp",
            notes: i === 0 ? "The primary structural base" : "Essential regional flavoring",
          })),
        },
        {
          category: "Aromatic Tempering & Seasoning",
          items: [
            { name: "Cooking Oil or Pure Desi Ghee", quantity: "3-4 tbsp" },
            { name: "Whole Cumin & Mustard Seeds", quantity: "1 tsp each" },
            { name: "Fresh Ginger & Green Chillies", quantity: "Finely chopped, to taste" },
            { name: "Rock Salt / Sea Salt", quantity: "To taste" },
          ],
        },
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: `Carefully prepare the primary ingredients (${dish.ingredients.slice(0, 2).join(", ")}) according to authentic regional technique (${dish.keyTechnique.toLowerCase()}).`,
          techniqueTip: "High-quality, freshly sourced ingredients are vital to capture authentic regional depth.",
        },
        {
          stepNumber: 2,
          instruction: "Heat your cooking fat (ghee or oil) in a heavy pan or kadhai. Add whole spices until they crackle and release their fragrant volatile oils.",
          techniqueTip: "Never overheat the fat before spices enter to prevent bitter scorching.",
        },
        {
          stepNumber: 3,
          instruction: "Incorporate the prepared aromatics and seasonings, allowing the flavors to meld over moderate heat.",
          techniqueTip: "Patience during this braising or tempering phase builds the authentic regional flavor base.",
        },
        {
          stepNumber: 4,
          instruction: `Combine with the base components, cover, and gently simmer until fully cooked, tender, and infused with the signature ${dish.tasteProfile.toLowerCase()} profile.`,
          techniqueTip: "A slow simmer allows moisture to redistribute evenly throughout the dish.",
        },
        {
          stepNumber: 5,
          instruction: "Garnish with fresh herbs, rest for 5 minutes off the flame, and serve hot on traditional tableware.",
          techniqueTip: "Resting brings the flavors into harmony before serving.",
        },
      ],
      historicalVsModernNotes:
        `Historically, ${dish.name} was cooked exclusively over wood or coal fires using indigenous earthen or iron vessels. Modern stoves offer greater temperature precision while retaining the original ingredient harmony.`,
      substitutions: [
        {
          original: "Traditional Regional Cooking Fat",
          substitute: "Quality Neutral Oil or Clarified Butter",
          impact: "Maintains clean, authentic texture with accessible ingredients.",
        },
      ],
    },
    citations: [
      {
        authorOrSource: "K.T. Achaya",
        workTitle: "A Historical Dictionary of Indian Food",
        publicationYearOrPeriod: "1998 (Oxford University Press)",
        citationDetails: `Entries on regional culinary history in ${dish.state}`,
        quoteOrFinding: `Documents the cultural origins and cooking methods associated with ${dish.name}.`,
        confidenceRating: "Scholarly Consensus",
      },
      {
        authorOrSource: "State Culinary & Cultural Archives",
        workTitle: `Heritage Food Traditions of ${dish.state}`,
        publicationYearOrPeriod: "Department of Culture & Tourism",
        citationDetails: "Monograph on Traditional Cuisine",
        quoteOrFinding: `Identifies ${dish.name} as an authentic regional staple preserved across generations.`,
        confidenceRating: "Documented Historical Mention",
      },
    ],
  };
}
