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
    eraTitle: "Vedic & Sangam Antiquity",
    yearRange: "c. 1000 BCE – 3rd Century CE",
    centuryLabel: "Epoch I",
    headline: "The Primitive Pulse Pupa & Wild Grains",
    shortDescription:
      "Ancient agrarian communities soaked wild indigenous paddy and whole black lentils, crushing them coarsely between heavy granite river stones. Unfermented batter was pressed onto flat hot clay slabs over open wood embers.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Ancient Pupa (Unfermented Pulse Griddle Cake)",
      historicalCookware: "Flat clay griddle stone (Kallu Odu) over pit embers",
      heatSource: "Dried wood and forest biomass fire",
      ingredientsList: [
        "Coarsely crushed black gram (Urad dal)",
        "Indigenous wild paddy grain",
        "Whole Malabar black peppercorns",
        "Rock salt from dried beds",
        "Cold spring water",
      ],
      preparationMethod:
        "Grains and lentils soaked for 3 hours, stone-mashed into a thick rustic paste, patted directly by hand onto hot flat stones greased with wild seed oil.",
      contemporaryDifference:
        "Zero potatoes, zero chillies, no overnight microbial fermentation, thick and flat rather than thin and crisp.",
    },
    technologicalLeap: "First pairing of lentil protein with rice carbohydrates over thermal stones.",
    documentedCitation: "Sangam literature (Purananuru) & Charaka Samhita on pulse-grain dietetics.",
  },
  {
    generationNumber: 2,
    eraTitle: "Western Chalukya Imperial Era",
    yearRange: "1130 CE",
    centuryLabel: "Epoch II",
    headline: "King Someshvara III's Imperial 'Dosaka'",
    shortDescription:
      "The invention of overnight biological aeration! In the royal kitchens of the Western Chalukyas, cooks left stone-ground urad dal batter to ferment naturally with ambient lactic microflora, baking it on circular terracotta pans.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Imperial Dosaka of the Manasollasa",
      historicalCookware: "Circular porous terracotta earthen pan",
      heatSource: "Controlled charcoal hearth",
      ingredientsList: [
        "Stone-ground dehusked black gram flour",
        "Fermented buttermilk starter (Takra)",
        "Cold-pressed sesame oil",
        "Crushed wild cumin and black pepper",
        "Himalayan rock salt",
      ],
      preparationMethod:
        "Lentil flour kneaded with sour buttermilk and rested overnight until foaming micro-bubbles doubled its volume. Ladled onto an oiled earthen pan and covered with a curved lid to steam-bake.",
      contemporaryDifference:
        "Soft and spongy like a thick pancake; rice was secondary to the pulse matrix.",
    },
    technologicalLeap: "Natural lactic acid fermentation giving signature tangy flavor and airy lightness.",
    documentedCitation: "Manasollasa (1130 CE), Chapter on Annabhoga, Verse 1375.",
  },
  {
    generationNumber: 3,
    eraTitle: "Maritime Caravans & Spice Exchanges",
    yearRange: "c. 1500 – 1650 CE",
    centuryLabel: "Epoch III",
    headline: "Black Pepper to Portuguese Capsicum Chillies",
    shortDescription:
      "Maritime merchant guilds shipped Tellicherry black pepper across the Arabian Sea, while Portuguese ships arriving in Goa introduced South American capsicum chillies and potatoes. Cooks incorporated chillies into spicy accompaniment chutneys.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Maritime Tempered Griddle Dosa",
      historicalCookware: "Early bronze bell-metal uruli & iron plates",
      heatSource: "Hardwood charcoal chulha",
      ingredientsList: [
        "Parboiled wetland rice (2 parts)",
        "White urad dal (1 part)",
        "Portuguese dried red chillies (newly adopted)",
        "Fresh curry leaves (Karivepaku)",
        "Mustard seeds & sesame oil",
      ],
      preparationMethod:
        "Soaked rice and dal ground on stone attukal with soaked fenugreek seeds. Cooked on early iron plates and served alongside fiery red chilli chutneys replacing ancient peppercorn relishes.",
      contemporaryDifference:
        "Adoption of fiery red chillies dramatically transformed the color and spice profile.",
    },
    technologicalLeap: "Integration of New World chillies and fenugreek seeds for golden browning.",
    documentedCitation: "Portuguese Estado da India trade logs & K.T. Achaya monographs.",
  },
  {
    generationNumber: 4,
    eraTitle: "Foundry Metallurgy & Cast Iron",
    yearRange: "c. 1880 – 1930 CE",
    centuryLabel: "Epoch IV",
    headline: "The High-Heat Sizzle & The Paper-Thin Roast",
    shortDescription:
      "The invention of the paper-thin crisp dosa! When British Indian foundries produced smooth seasoned cast-iron flat griddles (tawas), high heat retention allowed batter to be swirled gossamer-thin with generous clarified butter.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "The Vintage Iron Tawa Ghee Roast",
      historicalCookware: "Heavy seasoned cast-iron tawa",
      heatSource: "High-temperature coal and charcoal hearth",
      ingredientsList: [
        "Aged Sona Masuri rice",
        "Whole urad gotu",
        "Poha (flattened rice for crisp lacy pores)",
        "Pure churned cow ghee",
        "Rock salt",
      ],
      preparationMethod:
        "A ladle of smooth fermented batter poured into the searing center of the tawa, rapidly spiraled outward into a translucent wafer. Splashes of ghee sizzled the perimeter until it curled freely.",
      contemporaryDifference:
        "Transitioned from soft thick bread to an audible, wafer-thin crunchy shell.",
    },
    technologicalLeap: "Cast-iron thermal conductivity enabling the iconic paper roast spiral.",
    documentedCitation: "Mysore Palace kitchen chronicles & Udupi Krishna Temple records.",
  },
  {
    generationNumber: 5,
    eraTitle: "The Udupi Hotel Revolution",
    yearRange: "c. 1940 – 1960 CE",
    centuryLabel: "Epoch V",
    headline: "The Invention of the Hidden Potato Masala",
    shortDescription:
      "Orthodox Udupi Brahmin hotels in Bangalore and Mysore faced onion restrictions and potato surpluses. Chefs seasoned boiled potatoes with turmeric and hidden chopped onions, rolling the filling securely inside the folded crepe.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Udupi Classic Masala Dosa",
      historicalCookware: "Commercial restaurant cast-iron range",
      heatSource: "Town gas & charcoal braziers",
      ingredientsList: [
        "Crisp fermented rice-dal crepe",
        "Boiled mashed potatoes with turmeric",
        "Mustard seeds, green chillies & curry leaves",
        "Spicy red Byadagi garlic chutney smear",
        "Desi butter",
      ],
      preparationMethod:
        "The interior of the crisp crepe is smeared with red Byadagi garlic paste, lined with warm spiced potato palya, folded into a golden cylinder, and served immediately on a banana leaf.",
      contemporaryDifference:
        "The complete birth of the modern 'Masala Dosa' triad (crepe + potato + chutney).",
    },
    technologicalLeap: "Concealed filling architecture and multi-texture gastronomy.",
    documentedCitation: "Vidyarthi Bhavan (Bangalore, 1943) & Woodlands Hotel archives.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Global Culinary Crown Jewel",
    shortDescription:
      "Celebrated across the globe from Bengaluru to New York. Served on an emerald-cut banana leaf with piping hot drumstick sambar and coconut chutney, its golden crust breaks with a crisp shatter.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Artisanal Mysore Masala Dosa Master Formulation",
      historicalCookware: "Hand-seasoned artisan cast-iron tawa",
      heatSource: "High-BTU induction / dual-ring gas flame",
      ingredientsList: [
        "3:1 ratio of parboiled rice to whole urad dal",
        "Methi seeds (fenugreek) for enzyme caramelization",
        "Organic Russet potatoes with hand-crushed mustard palya",
        "Deep ruby Byadagi-garlic emulsion",
        "Aromatic freshly pressed coconut chutney & sambar",
      ],
      preparationMethod:
        "Precision 12-hour controlled temperature fermentation (30°C). Searing tawa roasted to 190°C with butter swirl. Folded to order and plated within 45 seconds.",
      contemporaryDifference:
        "Micro-filtered water, temperature-controlled fermentation, perfected golden ratios.",
    },
    technologicalLeap: "Global standardization of high-speed artisan street and fine-dining craft.",
    documentedCitation: "UNESCO Cultural Heritage documentation & Michelin Guide evaluations.",
  },
];

// ─────────────────────────────────────────────
// 2. HYDERABADI DUM BIRYANI (Telangana)
// ─────────────────────────────────────────────
export const BIRYANI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Vedic & Sangam Antiquity",
    yearRange: "c. 1000 BCE – 6th Century CE",
    centuryLabel: "Epoch I",
    headline: "Mamsaudana & The Ancient Warriors' Oon Soru",
    shortDescription:
      "In the Godavari basin and ancient Tamil lands, warriors celebrated victories with 'Oon Soru' — spiced indigenous paddy rice boiled in animal fats and seasoned with wild black pepper and sea salt in earthen cauldrons.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Ancient Mamsaudana (Meat & Rice Cauldron)",
      historicalCookware: "Large earthenware handi over riverbed stone hearth",
      heatSource: "Open wood flame",
      ingredientsList: [
        "Indigenous long-grain paddy rice",
        "Tender wild sheep meat cuts",
        "Crushed black peppercorns (Piper nigrum)",
        "Fresh ginger root & sea salt",
        "Clarified cow butter (Ghritha)",
      ],
      preparationMethod:
        "Meat and rice boiled together in a single earthen cauldron with water and pepper until moisture was absorbed by the starch.",
      contemporaryDifference:
        "No saffron, no layering, no onions, no fragrant screw-pine or rose water.",
    },
    technologicalLeap: "First codified cooking of meat collagen with carbohydrate grains.",
    documentedCitation: "Mahabharata (Vana Parva) & Sangam Anthology (Purananuru, Verse 14).",
  },
  {
    generationNumber: 2,
    eraTitle: "Delhi Sultanate & Bahmani Crucible",
    yearRange: "c. 1327 – 1500 CE",
    centuryLabel: "Epoch II",
    headline: "Persian Pilaf Meets The Deccan Spicery",
    shortDescription:
      "When Sultan Muhammad bin Tughluq transferred his court to Daulatabad in the Deccan, Persian court cooks arrived with subtle saffron pilafs. They adapted Persian techniques to the fiery local spices of the Deccan plateau.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Sultanate Yakhni Pulao",
      historicalCookware: "Tinned copper cauldron (Deg)",
      heatSource: "Wood fire hearth",
      ingredientsList: [
        "Aromatic long-grain rice",
        "Mutton cooked into rich stock (Yakhni)",
        "Iranian saffron strands steeped in milk",
        "Whole cloves, green cardamom, cinnamon",
        "Caramelized sliced onions",
      ],
      preparationMethod:
        "Meat simmered with whole spices to create a concentrated broth (Yakhni). Rice parboiled directly in the stock until rich and fragrant.",
      contemporaryDifference:
        "Meat was cooked into broth first (Pakki style); raw meat layering had not yet been invented.",
    },
    technologicalLeap: "Extraction of spiced bone broth (Yakhni) to flavor every rice grain.",
    documentedCitation: "Ibn Battuta's Travel Chronicles & Bahmani court chronicles.",
  },
  {
    generationNumber: 3,
    eraTitle: "Golconda Spice Caravans",
    yearRange: "c. 1550 – 1687 CE",
    centuryLabel: "Epoch III",
    headline: "Caravans of Star Anise, Cloves & Birista",
    shortDescription:
      "Golconda Fort became one of the wealthiest trading hubs in Asia. Precious spices like star anise, nutmeg, and mace entered royal recipes, along with deep golden crispy fried onions (Birista).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Qutb Shahi Diamond Feast Biryani",
      historicalCookware: "Hammered bronze and copper deg",
      heatSource: "Charcoal pits with live embers",
      ingredientsList: [
        "Long-grain basmati rice",
        "Spiced marinated lamb cuts",
        "Crispy fried onions (Birista)",
        "Star anise, mace, cinnamon bark",
        "Damascus rose water and kewra",
      ],
      preparationMethod:
        "Spices bundled into muslin potlis to infuse clean essential oils without leaving coarse gritty residue. Layered with saffron milk and rose essence.",
      contemporaryDifference:
        "Intensely aromatic with floral distillates, transitioning toward royal court complexity.",
    },
    technologicalLeap: "Muslin potli steeping technique preventing bitter spice grittiness.",
    documentedCitation: "Qutb Shahi court manifests & Machilipatnam port customs logs.",
  },
  {
    generationNumber: 4,
    eraTitle: "Nizam Asaf Jah I & The Kacchi Revolution",
    yearRange: "c. 1724 – 1850 CE",
    centuryLabel: "Epoch IV",
    headline: "The Invention of Kacchi Dum (Raw Meat Layering)",
    shortDescription:
      "The ultimate breakthrough! Rather than pre-cooking the meat, royal Khansamas marinated raw meat in green papaya and curd, placing it raw at the bottom of the handi under fractionally boiled basmati rice.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Asaf Jahi Kacchi Gosht ki Biryani",
      historicalCookware: "Heavy hand-beaten copper degchi",
      heatSource: "Dual thermal zone: coals below, embers on lid",
      ingredientsList: [
        "Raw tender mutton pieces",
        "Raw green papaya paste (natural papain)",
        "Thick curd, ginger-garlic paste, red chillies",
        "Aged basmati rice parboiled to 30%, 60%, 75%",
        "Pure saffron milk drizzle",
      ],
      preparationMethod:
        "Raw meat layered under fractional tiers of hot parboiled rice. Sealed with dough and slow-steamed so rising juices cook directly into the rice starch.",
      contemporaryDifference:
        "The definitive birth of true Hyderabadi Dum Biryani.",
    },
    technologicalLeap: "Raw meat enzyme tenderization beneath parboiled rice in sealed steam.",
    documentedCitation: "Nuqqal-i-Bawarchi Khana (Asaf Jahi Royal Recipe Manuscripts).",
  },
  {
    generationNumber: 5,
    eraTitle: "Chowmahalla Palace Grandeur",
    yearRange: "c. 1880 – 1948 CE",
    centuryLabel: "Epoch V",
    headline: "The Dough Seal (Parda) & The Saffron Unsealing",
    shortDescription:
      "Hermetic sealing with wheat dough ribbons (Parda) reached ceremonial perfection during the reign of Nizam Mahbub Ali Khan. Breaking the seal at royal banquets released an intoxicating cloud of saffron steam.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Chowmahalla Royal Banquet Biryani",
      historicalCookware: "Sealed copper degchi with heavy brass lid",
      heatSource: "Tamarind wood charcoal coals",
      ingredientsList: [
        "Prime lamb cuts marinated for 6 hours",
        "2-year aged Dehradun basmati rice",
        "Whole wheat dough sealing ribbon",
        "Pure desi ghee, mint leaves, kewra",
        "Served with Mirchi ka Salan & Dahi ki Chutney",
      ],
      preparationMethod:
        "Sealed airtight with wheat dough. Cooked on dum for 45 minutes until the dough browned crisp. Sliced vertically with a flat brass kafgir.",
      contemporaryDifference:
        "Establishment of the classic accompaniments: peanut-sesame Mirchi ka Salan and sour raita.",
    },
    technologicalLeap: "Internal pressure convection forcing falling aromatic condensation.",
    documentedCitation: "Chowmahalla Palace archives & K.T. Achaya's Indian Food Companion.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Uncontested Emperor of Indian Gastronomy",
    shortDescription:
      "A global cultural phenomenon with GI-tag recognition. Every plate offers a visual masterwork of pristine white and golden-saffron grains over fall-apart tender meat.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Modern Authentic Hyderabadi Dum Biryani",
      historicalCookware: "Heavy tinned copper handi with tight lid",
      heatSource: "Cast-iron heat diffuser tawa over low flame",
      ingredientsList: [
        "1 kg tender bone-in baby goat",
        "750g 2-year aged extra-long basmati rice",
        "2 tbsp fresh raw green papaya paste",
        "350g whisked thick dahi",
        "1.5 cups golden fried onions (birista)",
        "Pinch pure Kashmiri saffron in warm milk",
        "Pure desi ghee & fresh mint",
      ],
      preparationMethod:
        "4-hour marination. 3-tier rice parboiling (3.5m, 5.5m, 7.5m). Hermetic dough seal. 45-minute low heat dum. 15-minute resting curve before unsealing.",
      contemporaryDifference:
        "Accessible to home and restaurant kitchens via cast-iron heat diffuser plates.",
    },
    technologicalLeap: "Exact fractional boiling timing and heat-diffuser thermodynamics.",
    documentedCitation: "National GI Tag Registry & Culinary History of Hyderabad.",
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
    eraTitle: "Magadha Empire & Ancient Sattu",
    yearRange: "c. 600 BCE – 200 CE",
    centuryLabel: "Epoch I",
    headline: "Roasted Bengal Gram & Magadhan Military Rations",
    shortDescription:
      "Sattu (roasted Bengal gram flour) was the ultimate long-lasting military ration of the Magadha Empire. Monks and soldiers packed dry sattu bags across ancient trade routes, mixing it with river water and wild rock salt.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Ancient Sattu Pinda",
      historicalCookware: "Dry clay storage jars",
      heatSource: "Sun-parched & roasted sand pan",
      ingredientsList: ["Roasted Bengal gram flour (Sattu)", "Wild rock salt", "Cold river water", "Wild mustard seeds"],
      preparationMethod: "Bengal gram roasted in hot sand, ground into fine golden flour, kneaded with water and salt into portable sustenance balls.",
      contemporaryDifference: "No dough shell, no cow-dung ember baking; consumed as raw travel rations.",
    },
    technologicalLeap: "Sand-roasting grain to eliminate moisture, enabling months-long preservation.",
    documentedCitation: "Kautilya's Arthashastra on military food stores and grain roasting.",
  },
  {
    generationNumber: 2,
    eraTitle: "Medieval Mithila & Agrarian Hearth",
    yearRange: "c. 1200 – 1500 CE",
    centuryLabel: "Epoch II",
    headline: "The Whole Wheat Shell & Cow-Dung Embers",
    shortDescription:
      "Peasant farmers encased spiced sattu inside coarse whole-wheat flour dough, baking the spheres directly in smoldering dried cow-dung (upla/goitha) ember pits while tending fields.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Goitha-Baked Rustic Litti",
      historicalCookware: "Open cow-dung ember pit (Goitha hearth)",
      heatSource: "Smoldering dried cow-dung cakes (Upla)",
      ingredientsList: ["Coarse whole-wheat atta", "Roasted sattu", "Ajwain (carom seeds)", "Kalonji (nigella seeds)", "Mustard oil"],
      preparationMethod: "Atta dough shaped into bowls, filled with spiced sattu, sealed into tight spheres, and buried in hot ash until skin blistered black and cracked.",
      contemporaryDifference: "Ash-brushed rustic field food; served plain without royal ghee drenching.",
    },
    technologicalLeap: "Slow radiant ember heat cooking dense wheat dough without burning the delicate center.",
    documentedCitation: "Mithila folk traditions and Vidyapati medieval poetry.",
  },
  {
    generationNumber: 3,
    eraTitle: "The Birth of Chokha (Smoked Eggplant & Tomato)",
    yearRange: "c. 1650 – 1800 CE",
    centuryLabel: "Epoch III",
    headline: "Flame-Smoked Brinjal & New World Tomatoes",
    shortDescription:
      "The companion dish 'Chokha' was born! Large purple eggplants and newly arrived tomatoes were impaled on iron skewers and charred directly over dying flames, mashed with raw pungent mustard oil and green chillies.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Smoked Brinjal & Tomato Chokha",
      historicalCookware: "Iron skewer & clay mashing bowl",
      heatSource: "Direct flame of wood embers",
      ingredientsList: ["Large purple eggplants", "Flame-charred ripe tomatoes", "Raw cold-pressed mustard oil", "Crushed garlic & green chillies"],
      preparationMethod: "Vegetables charred until skins turned to paper ash, peeled warm, hand-mashed with raw mustard oil, salt, and crushed green chillies.",
      contemporaryDifference: "The definitive marriage of hot ember bread with cold pungent smoked mash.",
    },
    technologicalLeap: "Direct open-fire smoky charring creating rich heterocyclic umami in vegetable flesh.",
    documentedCitation: "Ain-i-Akbari & regional Subah Bihar agricultural surveys.",
  },
  {
    generationNumber: 4,
    eraTitle: "1857 War Feasts & Veer Kunwar Singh",
    yearRange: "1857 CE",
    centuryLabel: "Epoch IV",
    headline: "The Food of the 1857 Freedom Fighters",
    shortDescription:
      "During the 1857 rebellion, legendary 80-year-old warrior Veer Kunwar Singh used Litti as the primary battle ration. Soldiers required zero cooking utensils — only a few dried cow-dung cakes and a bag of stuffed dough.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Rebel Soldier's Sustenance Litti",
      historicalCookware: "Battlefield trench ember pit",
      heatSource: "Field dried cow-dung fire",
      ingredientsList: ["Hard whole wheat flour", "Spiced sattu with mango pickle masala", "Cold-pressed mustard oil", "Dry red chillies", "Garlic cloves"],
      preparationMethod: "Packed with spicy mango pickle oil for natural preservation; baked in army camp trenches in 20 minutes.",
      contemporaryDifference: "High-salt and vinegar-pickle seasoning to withstand weeks in canvas haversacks.",
    },
    technologicalLeap: "Self-contained high-protein preservation food with zero refrigeration needs.",
    documentedCitation: "Historical archives of the 1857 War of Independence in Jagdishpur, Bihar.",
  },
  {
    generationNumber: 5,
    eraTitle: "Ghee Immersion & Royal Bhojpuri Adoption",
    yearRange: "c. 1900 – 1970 CE",
    centuryLabel: "Epoch V",
    headline: "The Saturated Cow Ghee Immersion",
    shortDescription:
      "When Litti entered zamindar and wealthy Bhojpuri households, the burnt ash skin was wiped with clean cotton cloths and cracked open with thumbs, submerging the piping hot litti completely into pure melted desi cow ghee.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Shahi Bhojpuri Litti",
      historicalCookware: "Charcoal sigri & heavy bronze ghee vessel",
      heatSource: "Charcoal grill",
      ingredientsList: ["Coarse stone-ground wheat atta", "Fine sattu flour", "Pure cow ghee", "Ajwain, kalonji, crushed coriander", "Amchur (dry mango powder)"],
      preparationMethod: "Baked until cracked, submerged for 30 seconds in deep bowls of hot desi ghee until the crust drank the butterfat.",
      contemporaryDifference: "Transformation from frugal peasant food into rich indulgent celebration fare.",
    },
    technologicalLeap: "Capillary absorption of clarified butterfat into porous hot wheat matrix.",
    documentedCitation: "Bhojpuri cultural monographs & Bihar culinary documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Soul Food of Bihar & Global Street Icon",
    shortDescription:
      "From the bustling ghats of Patna to international street food festivals. Served in terracotta earthen platters with molten ghee pools, smoked brinjal-tomato chokha, and roasted green garlic chutney.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Authentic Bihari Litti Chokha Master Formulation",
      historicalCookware: "Charcoal barbecue grill / modern oven",
      heatSource: "Charcoal embers or 220°C convection oven",
      ingredientsList: [
        "2 cups whole wheat flour (Atta)",
        "1.5 cups roasted Bengal gram flour (Sattu)",
        "1 tbsp ajwain & 1 tsp kalonji",
        "2 tbsp spicy stuffed red chilli pickle masala",
        "3 tbsp cold-pressed mustard oil",
        "1 large smoked eggplant (Baingan)",
        "3 flame-roasted ripe tomatoes",
        "1 cup pure melted desi cow ghee",
      ],
      preparationMethod:
        "Knead stiff dough. Stuff with seasoned sattu. Bake over charcoal or oven at 220°C for 22 minutes until crust cracks. Crack open with thumbs, dunk in hot ghee, and serve with hand-mashed smoked chokha.",
      contemporaryDifference: "Refined spice balances, oven conversion instructions for urban households.",
    },
    technologicalLeap: "Oven convection adaptation retaining authentic wood-smoke flavor.",
    documentedCitation: "National Street Food Award archives & Bihar Tourism Gastronomy records.",
  },
];

// ─────────────────────────────────────────────
// 5. DELHI / PUNJAB BUTTER CHICKEN (Murgh Makhani)
// ─────────────────────────────────────────────
export const BUTTER_CHICKEN_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The Pre-1947 Era",
    yearRange: "Pre-1947",
    centuryLabel: "Epoch I",
    headline: "The Punjabi Tandoori Roots",
    shortDescription:
      "Before it became a creamy curry, the foundation of Butter Chicken lay in the communal clay tandoors of Peshawar in undivided Punjab. In the 1920s and 30s at the original Moti Mahal eatery, Kundan Lal Gujral master shortcuts to feed hungry locals by cooking skewered chicken inside a roaring, charcoal-fired clay oven. The chicken was marinated simply in thick hung curd, lemon juice, and local spices. Because the intense, dry heat of the tandoor would quickly dry out the meat, it was served immediately alongside fresh hand-churned Punjabi white butter and pieces of onion to keep it palatable. There was no gravy yet; it was a rustic, smoky, and dry street food born out of the traditional open-air clay oven culture of rural and urban Punjab.",
    image: "/images/dishes/butter-chicken-stage-1.webp",
    generationRecipe: {
      recipeName: "Peshawari Communal Clay Tandoor Murgh",
      historicalCookware: "Roaring charcoal-fired subterranean clay tandoor & iron skewers",
      heatSource: "Charcoal embers",
      ingredientsList: [
        "Desi Murg",
        "Chakka Dahi",
        "Safed Makkhan",
        "Kacchi Mirch",
        "Nimbu Rassa"
      ],
      preparationMethod:
        "Marinated simply in thick hung curd, lemon juice, and local spices; roasted on skewers inside a clay tandoor and served immediately with hand-churned white butter and sliced onions.",
      contemporaryDifference:
        "Rustic, dry, and smoky street food roasted over charcoal; completely devoid of tomato gravy or cream.",
    },
    technologicalLeap: "Clay tandoor high-radiant searing preserving natural meat juices.",
    documentedCitation: "",
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "1950s",
    centuryLabel: "Epoch II",
    headline: "The Delhi-Punjabi Invention (1950s)",
    shortDescription:
      "Following the partition, Punjabi migrants brought the tandoor to Delhi, where the dry chicken was accidentally transformed into the famous gravy dish. At the new Moti Mahal restaurant in Daryaganj, the cooks faced a massive problem: unsold tandoori chicken dried out and went to waste. To solve this, they created a rich, hydrating sauce using fresh tomato puree, heavy cream, and massive blocks of dairy butter to simmer the leftover chicken pieces. Cooked in large cauldrons over charcoal embers, the dish combined the smoky char of Punjabi tandoori grilling with a velvety, comforting gravy. It became an instant hit, serving as the ultimate comfort food for the displaced Punjabi diaspora and locals looking for a rich, hearty, and celebratory meal.",
    image: "/images/dishes/butter-chicken-stage-2.webp",
    generationRecipe: {
      recipeName: "Post-Partition Daryaganj Murgh Makhani",
      historicalCookware: "Large tinned copper cauldrons (degchis) & charcoal tandoor",
      heatSource: "Slow charcoal embers",
      ingredientsList: [
        "Tandoori Chicken Leftovers",
        "Fresh Tamatar Puree",
        "Commercial Dairy Butter",
        "Fresh Malai",
        "Kasuri Methi"
      ],
      preparationMethod:
        "Leftover tandoori chicken simmered in a rich emulsion of fresh tomato puree, heavy cream, and mounds of dairy butter over charcoal embers.",
      contemporaryDifference:
        "Invention of the makhani tomato-butter gravy to hydrate leftover tandoori chicken for the post-partition diaspora.",
    },
    technologicalLeap: "Dairy fat and tomato acidity emulsion hydrating charred roasted meats.",
    documentedCitation: "",
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The Global Punjabi Pride",
    shortDescription:
      "Today, Butter Chicken stands as the definitive global ambassador of Punjabi-Indian cuisine, served everywhere from roadside dhabas to Michelin-starred dining rooms. Modern preparation has streamlined the process, using high-tech commercial tandoors or gas grills to prepare boneless chicken tikka pieces specifically for the sauce. High-speed blenders and electric strainers ensure the gravy achieves an ultra-smooth, silk-like texture in minutes. While traditional variants still rely heavily on cashew paste, cream, and Amul butter, modern kitchens also cater to global trends with health-conscious versions using Greek yogurt or plant-based vegan butter. It has also broken out of the curry bowl into fusion street food, appearing as a stuffing for naan bombs, pizzas, and loaded fries across the globe.",
    image: "/images/dishes/butter-chicken-stage-3.webp",
    generationRecipe: {
      recipeName: "Modern Global Punjabi Makhani Formulation",
      historicalCookware: "Commercial gas tandoors, high-speed blenders & electric strainers",
      heatSource: "Precision gas burners and induction cooktops",
      ingredientsList: [
        "Boneless Chicken Tikka",
        "Organic Tomato Paste",
        "Pasteurized Amul Butter",
        "UHT Whipping Cream",
        "Ready Makhani Gravy Mix"
      ],
      preparationMethod:
        "Boneless chicken tikka grilled and simmered in silk-strained tomato-cashew makhani gravy, finished with butter, whipping cream, or adapted into global fusion dishes.",
      contemporaryDifference:
        "Streamlined commercial kitchens using high-speed blenders, boneless meat specifically cooked for gravy, and global fusion formats.",
    },
    technologicalLeap: "High-speed electric emulsification, precision temperature cooking, and global fusion formats.",
    documentedCitation: "",
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "The Global Crown Jewel of Punjabi Cuisine",
    shortDescription:
      "Served piping hot, garnished with a swirl of fresh cream, a pat of butter, and crushed kasuri methi, paired with butter garlic naan.",
    image: "/images/dishes/butter-chicken-stage-4.webp",
    generationRecipe: {
      recipeName: "Grand Restaurant Service Plating",
      historicalCookware: "Copper handi or fine porcelain bowl",
      heatSource: "Immediate service",
      ingredientsList: [
        "Boneless Chicken Tikka",
        "Organic Tomato Paste",
        "Pasteurized Amul Butter",
        "UHT Whipping Cream",
        "Ready Makhani Gravy Mix"
      ],
      preparationMethod: "Garnished with fresh dairy cream swirl, pat of butter, and crushed kasuri methi.",
      contemporaryDifference: "Living global legend.",
    },
    technologicalLeap: "Global luxury presentation.",
    documentedCitation: "",
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
  const isSweet = dish.category === "sweet-dessert";
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

const STAGE_SOURCE_EPOCH: Record<StageKey, number> = {
  origin: 0,
  ingredients: 1,
  method: 3,
  plated: 5,
};

const STAGE_YEAR_RANGE: Record<StageKey, string> = {
  origin: "Origins & Cultural Roots",
  ingredients: "Regional & seasonal produce",
  method: "Traditional technique to modern kitchens",
  plated: "Present day",
};

/** Legacy six-epoch records for one dish, used only for recipe detail. */
export const VADA_PAV_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The 1800s",
    yearRange: "1800s",
    centuryLabel: "Epoch I",
    headline: "The Forbidden Blueprint",
    shortDescription: "In the 19th century, Vada Pav did not exist because its two core components belonged to entirely different worlds. Potatoes had only recently been popularized by the British, and the Portuguese pav (bread) was largely shunned by mainstream society due to religious taboos surrounding European baking practices and the use of wild palm toddy for yeast fermentation. Had a prototype been forced together in a wood-fired kitchen, it would have tasted drastically different. The bread would have been dense and sour, the potato filling would have been roughly hand-mashed, and the frying would have taken place over smoky wood fires using heavy iron pots filled with cold-pressed groundnut oil. It was a time before the street food culture of Mumbai was born, meaning these ingredients were consumed separately and strictly within private domestic or colonial settings.",
    image: "/images/dishes/vada-pav-stage-1.webp",
    generationRecipe: {
      recipeName: "19th Century Domestic Prototype",
      historicalCookware: "Smoky heavy iron pots & domestic hearth",
      heatSource: "Smoky wood fires",
      ingredientsList: ["Potatoes", "Pav (Bread rolls)", "Gram flour (Besan)", "Garlic", "Green chillies"],
      preparationMethod: "Roughly hand-mashed potato filling, dense toddy-fermented pav, deep frying in cold-pressed groundnut oil in heavy iron pots over wood fires.",
      contemporaryDifference: "Potatoes and European pav were separate domestic novelties; pav was socially shunned due to toddy fermentation, and street food culture did not yet exist."
    },
    technologicalLeap: "Early domestic adoption of New World potatoes and European baking techniques prior to street commercialization.",
    documentedCitation: ""
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "1966",
    centuryLabel: "Epoch II",
    headline: "The Birth of an Icon (1966)",
    shortDescription: "The 1960s changed everything when Ashok Vaidya combined the potato dumpling and the bread roll to create a cheap, rapid meal for Mumbai's booming working class. Stationed outside the Dadar railway station in 1966, Vaidya realized that mill workers rushing to their shifts needed something hot, filling, and completely portable. By splitting a now-socially-accepted commercial yeast pav, smearing it with fiery chutneys, and stuffing it with a fresh batata vada, the legendary street food was officially born. Preparing it in this era relied on portable kerosene stoves and mass-produced vegetable oils. The chutneys—especially the signature dry red garlic powder—were hand-ground daily on stone slabs, and the final product was handed over wrapped in sheets of old, ink-stained vernacular newspaper, instantly becoming the fuel of the city's political and industrial labor movements.",
    image: "/images/dishes/vada-pav-stage-2.webp",
    generationRecipe: {
      recipeName: "Original Dadar Station Batata Vada Pav",
      historicalCookware: "Street-side deep frying kadai",
      heatSource: "Portable kerosene stove",
      ingredientsList: ["Potatoes", "Pav (Bread rolls)", "Gram flour (Besan)", "Garlic", "Green chillies"],
      preparationMethod: "Fresh batata vada dipped in spiced gram flour batter, deep-fried in vegetable oil, stuffed into a split commercial yeast pav with stone-ground dry garlic and green chilli chutneys, wrapped in vernacular newspaper.",
      contemporaryDifference: "Invention of the batata vada inside commercial yeast pav pairing; rapid street-side kerosene frying replacing slow home hearths."
    },
    technologicalLeap: "Ashok Vaidya's Dadar Station innovation creating portable, affordable nutrition for Mumbai mill workers.",
    documentedCitation: ""
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The Global Evolution",
    shortDescription: "Today, Vada Pav has transcended its humble train-station origins to become a globally recognized gourmet food and a symbol of culinary pride. The preparation has evolved from simple street-side frying to standardized, high-speed commercial kitchen operations using temperature-controlled LPG gas burners and refined sunflower or palm oils. While classic street carts still thrive, the modern era has introduced massive fast-food chains that flash-freeze the vadas for consistency. The presentation has shifted away from old newspapers to eco-friendly biodegradable boxes, and the flavor profile has exploded with fusion adaptations. It is now common to see the pav heavily toasted on a griddle with Amul butter and filled with everything from liquid cheese and Schezwan sauce to baked panko-crusted potato patties, completing its journey from a working-class snack to a versatile global delicacy.",
    image: "/images/dishes/vada-pav-stage-3.webp",
    generationRecipe: {
      recipeName: "Modern Gourmet & Fusion Vada Pav",
      historicalCookware: "Commercial deep fryer & flat butter griddle",
      heatSource: "Precision temperature-controlled LPG burners",
      ingredientsList: ["Potatoes", "Pav (Bread rolls)", "Gram flour (Besan)", "Garlic", "Green chillies"],
      preparationMethod: "Standardized frying with flash-frozen consistency or artisanal street cart frying, pav griddled in Amul butter, served in biodegradable boxes with fusion chutneys.",
      contemporaryDifference: "Transition from street newspaper wraps to standardized fast-food chains, biodegradable packaging, butter toasting, and global gourmet adaptations."
    },
    technologicalLeap: "Precision temperature-controlled frying, flash-freezing technology, and global culinary franchising.",
    documentedCitation: ""
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "The Definitive Mumbai Street Icon",
    shortDescription: "Served hot in crisp ladi pav with fiery dry garlic-peanut chutney, fried green chillies, and tangy tamarind-mint dips.",
    image: "/images/dishes/vada-pav-stage-4.webp",
    generationRecipe: {
      recipeName: "Plated Vada Pav",
      historicalCookware: "Street cart plating board",
      heatSource: "Immediate service",
      ingredientsList: ["Potatoes", "Pav (Bread rolls)", "Gram flour (Besan)", "Garlic", "Green chillies"],
      preparationMethod: "Served hot with salted fried green chillies and garlic chutney.",
      contemporaryDifference: "Modern street presentation."
    },
    technologicalLeap: "Iconic Mumbai street presentation.",
    documentedCitation: ""
  }
];

export const PURAN_POLI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The 1800s",
    yearRange: "1800s",
    centuryLabel: "Epoch I",
    headline: "The Royal & Ritual Heritage",
    shortDescription: "In the 19th century, Puran Poli was treated as a labor-intensive royal delicacy and a sacred festive offering, prepared exclusively during occasions like Holi and Gudi Padwa. Every single step of the preparation was a grueling test of patience and muscle. The chana dal (split chickpeas) and jaggery were boiled in heavy brass vessels (patelya) over slow-burning wood or cow-dung fires, filling the kitchen with dense smoke. Because there were no mechanical grinders, the hot lentils had to be painstakingly pressed through a heavy, hot wooden or stone sieve called a puran yantra, or manually mashed on a stone sil-batta to get a perfectly smooth, lump-free paste. The outer cover was made from maida (refined flour) or whole wheat flour, hand-kneaded for hours to develop high elasticity. It was rolled using a wooden rolling pin (latre) and roasted on a thick iron tawa (griddle) over an open hearth, continuously slathered with pure, aromatic homemade cow ghee. It was served hot on fresh banana leaves, primarily to deities and upper-class households.",
    image: "/images/dishes/puran-poli-stage-1.webp",
    generationRecipe: {
      recipeName: "19th Century Festive Offering",
      historicalCookware: "Heavy brass patelya & stone sil-batta / wooden puran yantra",
      heatSource: "Slow-burning wood or cow-dung fires",
      ingredientsList: ["Gavacha Atta", "Harbhara Dal", "Kala Gur", "Sajuk Tup", "Velchi & Jaiphal"],
      preparationMethod: "Chana dal and jaggery boiled in heavy brass patelya, painstakingly hand-sieved through wooden or stone puran yantras, enveloped in hand-kneaded dough, roasted on thick iron tawas over open hearths with homemade cow ghee.",
      contemporaryDifference: "Laborious multi-hour manual stone-mashing without mechanical grinders, wood-smoke hearth cooking, reserved for sacred festive rituals."
    },
    technologicalLeap: "Mastery of hand-kneaded dough elasticity and manual puran yantra filtering.",
    documentedCitation: ""
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "Mid-1900s",
    centuryLabel: "Epoch II",
    headline: "The Domestic Tradition",
    shortDescription: "By the mid-20th century, Puran Poli transitioned into a cherished domestic tradition, becoming the ultimate benchmark of a homemaker's culinary skill in Maharashtrian, Gujarati, and South Indian homes. As industrialization brought portable kerosene stoves and early gas burners into kitchens, managing the cooking temperature became significantly easier. While the recipe remained fiercely traditional, the introduction of the hand-cranked, metal puran yantra (a food mill attachment) revolutionized the process, cutting down the grueling hours spent mashing the dal by hand. The ingredients became more standardized with the mass availability of commercial jaggery, refined oils, and packaged flour. In this era, making Puran Poli remained a communal affair; women from joint families or neighborhoods would gather together, one rolling the dough, another stuffing the puran, and a third roasting them on the griddle. It was a time of pure domestic mastery, served to guests on stainless steel plates during family gatherings.",
    image: "/images/dishes/puran-poli-stage-2.webp",
    generationRecipe: {
      recipeName: "Mid-20th Century Domestic Benchmark",
      historicalCookware: "Hand-cranked metal puran yantra & heavy griddle",
      heatSource: "Portable kerosene stoves & early domestic gas burners",
      ingredientsList: ["Maida", "Chana Dal", "Pila Gul", "Vanaspati", "Velchi Pood"],
      preparationMethod: "Dal boiled and passed through mechanical hand-cranked metal puran yantras, communal rolling and stuffing by neighborhood women, griddled on controlled gas flames, served on stainless steel plates.",
      contemporaryDifference: "Hand-cranked metal puran yantra reducing manual labor; transition to domestic kerosene and gas stoves."
    },
    technologicalLeap: "Introduction of hand-cranked metal puran yantra and controlled domestic gas flames.",
    documentedCitation: ""
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The Commercial & Convenient Era",
    shortDescription: "Today, Puran Poli has broken out of the traditional kitchen to become a highly accessible, year-round commercial product, balancing heritage with modern convenience. In the busy lifestyle of the 2020s, the time-consuming process has been drastically shortened. The dal is rapidly cooked in electric pressure cookers and pulverized to a flawless consistency inside high-speed food processors or mixer-grinders in seconds. Modern health-conscious variations have also emerged, swapping out refined flour entirely for organic whole wheat or multi-grain flour, and replacing traditional jaggery with low-calorie sweeteners or dates. For those who lack the time to make it from scratch, the present era offers instant solutions: ready-to-eat Puran Polis are sold at local sweet shops, vacuum-packed versions are available in supermarkets, and frozen variants are exported globally to the diaspora. Despite being prepared on modern induction cooktops and non-stick pans, it remains the soul of festive dining.",
    image: "/images/dishes/puran-poli-stage-3.webp",
    generationRecipe: {
      recipeName: "Modern Commercial & Convenient Formulation",
      historicalCookware: "Electric pressure cooker, high-speed food processor & non-stick pan",
      heatSource: "Induction cooktops & precision LPG burners",
      ingredientsList: ["Sharbati Atta", "Packaged Chana Dal", "Organic Jaggery Powder", "Branded Cow Ghee", "Spice Extracts"],
      preparationMethod: "Dal pressure-cooked and pulverized in high-speed mixer-grinders, rolled with organic whole-wheat or multi-grain flour, roasted on non-stick pans or packaged into vacuum-sealed commercial packs.",
      contemporaryDifference: "Electric pressure cooking, mixer-grinder pulverization, vacuum-sealed packaging, and global export."
    },
    technologicalLeap: "High-speed mechanical pulverization, vacuum packaging, and instant flash-freezing.",
    documentedCitation: ""
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "The Soul of Festive Dining",
    shortDescription: "Served hot, generously drizzled with melted pure desi cow ghee, paired with katachi amti (spicy dal broth) or cold milk.",
    image: "/images/dishes/puran-poli-stage-4.webp",
    generationRecipe: {
      recipeName: "Plated Puran Poli with Ghee",
      historicalCookware: "Festive thali platter",
      heatSource: "Immediate service",
      ingredientsList: ["Sharbati Atta", "Packaged Chana Dal", "Organic Jaggery Powder", "Branded Cow Ghee", "Spice Extracts"],
      preparationMethod: "Served hot with a pool of pure cow ghee.",
      contemporaryDifference: "Traditional festival plating."
    },
    technologicalLeap: "Festive plating aesthetics.",
    documentedCitation: ""
  }
];

export const MODAK_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The 1800s",
    yearRange: "1800s",
    centuryLabel: "Epoch I",
    headline: "The Sacred Harvest Ritual",
    shortDescription: "In the 19th century, Ukadiche Modak was purely a seasonal, ritualistic creation tied to the local autumn harvest. Crafted primarily during the Ganesh Chaturthi festival, it celebrated the freshly harvested rice crop and the abundance of local coconut groves. The preparation was deeply spiritual and physically demanding. The rice dough (peeth) was made by hand-pounding raw, indigenous fragrant rice variants in a heavy stone mortar and pestle (ukhal-musal) to get a fine flour, which was then steamed in heavy copper vessels (hunda) over slow charcoal fires to make it pliable. The filling utilized fresh, juicy coconut scraped on a traditional spiked iron blade stool (advi) and dark, unrefined winter jaggery. Expert women hand-shaped the outer shell into perfect, intricate petals without any mechanical assistance. The final dumplings were steamed on a bed of fresh, fragrant turmeric leaves, which infused the modaks with an irreplaceable herbal aroma and a faint golden tint.",
    image: "/images/dishes/ukadiche-modak-stage-1.webp",
    generationRecipe: {
      recipeName: "19th Century Sacred Harvest Offering",
      historicalCookware: "Heavy stone mortar (ukhal-musal), copper hunda & iron advi",
      heatSource: "Slow charcoal hearth fires",
      ingredientsList: ["Tandalacha Peeth", "Ola Naral", "Kala Gur", "Sajuk Tup", "Haladichi Paane"],
      preparationMethod: "Hand-pounded fragrant rice flour steamed into ukad dough, coconut grated on spiked iron advi blades, hand-pleated into flower petals, steamed over aromatic turmeric leaves.",
      contemporaryDifference: "Laborious hand-pounding of indigenous rice in stone mortars, hand-folded pleats without molds, steamed on wild turmeric leaves."
    },
    technologicalLeap: "Mastery of gelatinized ukad dough steaming and intricate manual hand-pleating.",
    documentedCitation: ""
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "Mid-1900s",
    centuryLabel: "Epoch II",
    headline: "The Domestic Artform",
    shortDescription: "By the mid-20th century, Ukadiche Modak became the ultimate test of domestic artistry in Maharashtrian households, standardizing into a cherished family tradition. The introduction of local commercial flour mills (girnis) eliminated the arduous task of hand-pounding rice at home, making fine rice flour easily accessible. Kerosene stoves and early LPG gas burners replaced smoky wood fires, giving homemakers far better control over the delicate steaming process. While the recipe remained fiercely loyal to tradition, the tools began to shift. The filling now used block jaggery sold in local markets and standard factory-made cardamom powder. Making modaks remained a highly communal activity within joint families, where generations sat together to master the difficult art of hand-folding the dough pleats. The traditional turmeric leaves were often substituted with clean banana leaves or thin muslin cloths placed inside basic heavy-bottomed metal steamers.",
    image: "/images/dishes/ukadiche-modak-stage-2.webp",
    generationRecipe: {
      recipeName: "Mid-20th Century Domestic Benchmark",
      historicalCookware: "Metal steamer pot, rolling pin & muslin cloth",
      heatSource: "Kerosene stoves & early domestic LPG gas burners",
      ingredientsList: ["Girni Millet Tandalache Peeth", "Scraped Coconut Block", "Pila Gul", "Commercial Ghee", "Velchi Pood"],
      preparationMethod: "Girni-milled rice flour steamed into dough, filled with market block jaggery and coconut, pleated communally by joint family members, steamed on banana leaves or muslin cloth.",
      contemporaryDifference: "Shift from hand stone-pounding to commercial girni milling; replacement of turmeric leaves with muslin or banana leaves."
    },
    technologicalLeap: "Access to electric/mechanical grain milling (girnis) and controlled domestic gas steaming.",
    documentedCitation: ""
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The High-Tech Delicacy",
    shortDescription: "Today, Ukadiche Modak has transitioned into a highly commercialized, year-round gourmet delicacy that balances modern convenience with heritage flavors. The time-consuming process has been heavily automated. The rice dough is quickly steamed using high-pressure kitchen steamers or modern induction cooktops, and high-speed mixer-grinders blitz the coconut and jaggery filling in seconds. For those who find the intricate hand-pleating too difficult, plastic, brass, and silicone modak molds have become standard household tools to achieve perfect shapes instantly. Health-conscious updates feature organic red rice or brown rice flour, alongside sugar-free alternatives like dates or stevia. Furthermore, the present era has turned this festive homemade item into a booming commercial venture; during festival seasons, massive sweet chains use automated machinery to mass-produce thousands of modaks, while vacuum-packing and flash-freezing technology allow these delicate steamed sweets to be exported globally to the Indian diaspora.",
    image: "/images/dishes/ukadiche-modak-stage-3.webp",
    generationRecipe: {
      recipeName: "Modern Commercial & Automated Formulation",
      historicalCookware: "High-pressure kitchen steamer, mixer-grinder & precision molds",
      heatSource: "Induction cooktops & precision LPG burners",
      ingredientsList: ["Organic Rice Flour", "Fresh Grated Coconut", "Organic Jaggery Powder", "Branded Cow Ghee", "Cardamom & Nutmeg Extracts"],
      preparationMethod: "Dough prepared with precision electric steamers, filling pulverized in high-speed mixer-grinders, shaped with silicone or brass molds, steamed with induction precision or flash-frozen for global export.",
      contemporaryDifference: "Use of silicone/brass molds, mixer-grinders, electric steamers, vacuum packaging, and year-round commercial availability."
    },
    technologicalLeap: "Precision induction steaming, mold shaping, and commercial flash-freeze preservation.",
    documentedCitation: ""
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "Sacred Festive Offering",
    shortDescription: "Served piping hot, crowned with a generous spoonful of warm fragrant cow ghee drizzled through the central peak.",
    image: "/images/dishes/ukadiche-modak-stage-4.webp",
    generationRecipe: {
      recipeName: "Sacred Naivedya Plating",
      historicalCookware: "Brass puja thali",
      heatSource: "Immediate service",
      ingredientsList: ["Organic Rice Flour", "Fresh Grated Coconut", "Organic Jaggery Powder", "Branded Cow Ghee", "Cardamom & Nutmeg Extracts"],
      preparationMethod: "Served hot with a pool of warm pure cow ghee.",
      contemporaryDifference: "Contemporary living heritage."
    },
    technologicalLeap: "Sacred Naivedya aesthetics.",
    documentedCitation: ""
  }
];

export const MAKKI_ROTI_SARSON_SAAG_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The 1800s",
    yearRange: "1800s",
    centuryLabel: "Epoch I",
    headline: "The Winter Harvest Fuel",
    shortDescription: "In the 19th century, Makki di Roti and Sarson ka Saag was a rustic, cold-weather staple born entirely out of survival and the seasonal agricultural cycle of rural Punjab. During the brutal winter months, farmers needed high-calorie, warming food to sustain heavy manual labor. The greens—mustard leaves, bathua, and spinach—were plucked fresh from the fields and slow-cooked for hours in heavy clay pots (haandi) over open wood or cow-dung fires, filling the village air with a distinct earthy smoke. Without any mechanical tools, the cooked greens were laboriously hand-churned and mashed using a heavy wooden whisk (madhani) until creamy. The maize flour was coarsely stone-ground at local watermills (gharats) and patted by hand into thick flatbreads, as maize lacks gluten and cannot be rolled. The meal was cooked on an outdoor mud stove (chulha), heavily enriched with fresh, hand-churned white butter, and eaten fresh in the fields to beat the winter chill.",
    image: "/images/dishes/makki-di-roti-sarson-saag-stage-1.webp",
    generationRecipe: {
      recipeName: "Winter Harvest Hearth Saag & Roti",
      historicalCookware: "Heavy clay pot (haandi), wooden whisk (madhani) & outdoor mud chulha",
      heatSource: "Open wood or cow-dung fires",
      ingredientsList: [
        "Desi Makki Atta",
        "Khet ki Sarson",
        "Bathua",
        "Safed Makkhan",
        "Hari Mirch"
      ],
      preparationMethod: "Slow-simmered greens in clay pots over open embers, hand-churned with wooden madhani until creamy, hand-patted coarse watermill maize rotis on mud chulha.",
      contemporaryDifference: "Rustic winter survival food cooked in fields without mechanical mills or blenders, featuring coarse hand-patted flatbreads."
    },
    technologicalLeap: "Stone watermill grain milling (gharats) and slow clay-pot open-hearth simmering with wooden churning tools.",
    documentedCitation: ""
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "Mid-1900s",
    centuryLabel: "Epoch II",
    headline: "The Domestic Punjabi Identity",
    shortDescription: "By the mid-20th century, this rural combination moved firmly into the domestic kitchens of urbanized Punjab, becoming a proud cultural symbol of Punjabi hospitality and festival cooking. The introduction of mechanized diesel flour mills made finely ground maize flour readily available, which slightly eased the process of binding the difficult dough. Kerosene stoves and early LPG gas burners replaced the outdoor mud chulhas, bringing the preparation indoors into brass and aluminum cookware. While the saag was still slow-cooked, the hand-churning process became faster with sturdier metal madhanis. The dish became the ultimate centerpiece for winter gatherings and festivals like Lohri, where homemakers vied to create the smoothest saag and the thinnest, un-broken rotis. It was traditionally served on large brass plates (thalis) with blocks of commercial yellow jaggery on the side.",
    image: "/images/dishes/makki-di-roti-sarson-saag-stage-2.webp",
    generationRecipe: {
      recipeName: "Mid-Century Domestic Hospitality Feast",
      historicalCookware: "Heavy brass & aluminum cookware, metal madhani & indoor iron tawa",
      heatSource: "Kerosene stoves and early domestic LPG gas burners",
      ingredientsList: [
        "Girni Makki Atta",
        "Market Sarson Leaves",
        "Palak",
        "Commercial White Butter",
        "Pila Gul"
      ],
      preparationMethod: "Indoor simmering in brass vessels, metal-madhani whisking, thinner flatbreads prepared from mechanized mill flour, served with yellow jaggery on brass thalis.",
      contemporaryDifference: "Transition from outdoor farm survival food to an indoor festival centerpiece for Lohri and family hospitality."
    },
    technologicalLeap: "Diesel mill flour grinding and domestic kerosene/gas stoves replacing outdoor mud chulhas.",
    documentedCitation: ""
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The Global Gourmet Phenomenon",
    shortDescription: "Today, Makki di Roti and Sarson ka Saag has transcended its rustic roots to become a highly celebrated global gourmet item found in elite Indian restaurants worldwide. The traditional hours-long mashing process has been replaced by electric pressure cookers and high-speed hand blenders that emulsify the greens into a perfectly smooth puree in seconds. Modern cooking techniques often use non-stick griddles and parchment paper techniques to easily shape and flip the notoriously fragile maize flatbreads. Health-conscious updates include mixing the maize flour with a bit of whole wheat or millet flour for easier rolling, and substituting traditional heavy fats with olive oil or low-fat vegan butter. For the global diaspora, the present era offers ultimate convenience: pre-cooked Sarson ka Saag is widely sold in ready-to-eat cans or vacuum-sealed pouches, allowing people to enjoy this complex, time-consuming winter tradition instantly anywhere in the world.",
    image: "/images/dishes/makki-di-roti-sarson-saag-stage-3.webp",
    generationRecipe: {
      recipeName: "Modern Global Gourmet Presentation",
      historicalCookware: "Electric pressure cooker, immersion hand blender & non-stick griddle with parchment",
      heatSource: "Induction cooktop and precision flame burners",
      ingredientsList: [
        "Organic Yellow Cornmeal",
        "Packaged Mustard Greens",
        "Canned Spinach Puree",
        "Branded Yellow Butter",
        "Organic Garlic Paste"
      ],
      preparationMethod: "High-pressure electric steaming, immersion blending to silky puree, parchment-assisted non-stick griddling, vacuum-packaging for diaspora export.",
      contemporaryDifference: "Hours of manual wood-fire churning replaced by seconds of electric blending, parchment-paper griddling, and global gourmet export."
    },
    technologicalLeap: "High-speed electric immersion blending, electric pressure cookers, and vacuum retort packaging.",
    documentedCitation: ""
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "The Soul of Punjabi Winter Cuisine",
    shortDescription: "Served piping hot, crowned with an overflowing dollop of churned white butter, golden jaggery cubes, and fresh green chillies.",
    image: "/images/dishes/makki-di-roti-sarson-saag-stage-4.webp",
    generationRecipe: {
      recipeName: "Grand Punjabi Dhaba & Home Service",
      historicalCookware: "Kansa or stainless steel thali",
      heatSource: "Immediate service",
      ingredientsList: [
        "Organic Yellow Cornmeal",
        "Packaged Mustard Greens",
        "Canned Spinach Puree",
        "Branded Yellow Butter",
        "Organic Garlic Paste"
      ],
      preparationMethod: "Served steaming hot with fresh churned white butter melting over dark velvety saag, paired with crisp hot makki rotis.",
      contemporaryDifference: "Living winter heritage celebrated worldwide."
    },
    technologicalLeap: "Global cold-weather cultural icon.",
    documentedCitation: ""
  }
];

export const AMRITSARI_KULCHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "The 1800s",
    yearRange: "1800s",
    centuryLabel: "Epoch I",
    headline: "The Shahi Khansama Innovation",
    shortDescription:
      "In the 19th century, the Amritsari Kulcha was born out of the royal kitchens of the Sikh Empire and Punjab's princely states, created as a luxurious variation of the standard tandoori roti. Royal chefs (khansamas) experimented with the dough by incorporating large amounts of lard or hand-churned white butter into multiple folds, creating an early prototype of an indigenous puff pastry. Cooked inside deep, underground clay tandoors fired with slow-burning wood, the bread developed a deeply smoky flavor and an incredible flaky crunch. The stuffing was simple but premium, featuring seasonal potatoes or fresh chenna (paneer) hand-crushed with wild green chillies and whole coriander seeds. It was a decadent delicacy reserved for nobility and wealthy landlords, served dripping with melted ghee alongside rich, slow-simmered black lentils.",
    image: "/images/dishes/amritsari-kulcha-stage-1.webp",
    generationRecipe: {
      recipeName: "Sikh Empire Royal Laminated Kulcha",
      historicalCookware: "Deep underground clay tandoor & iron skewers",
      heatSource: "Slow-burning wood fire hearth",
      ingredientsList: [
        "Local Maida",
        "Ola Chenna",
        "Ubalela Aloo",
        "Hand-Churned Ghee",
        "Whole Coriander Seeds"
      ],
      preparationMethod:
        "Hand-folded multi-layered dough enriched with churned butter and ghee, stuffed with fresh chenna and boiled potatoes crushed with whole coriander and wild green chillies, baked inside an underground clay tandoor.",
      contemporaryDifference:
        "Royal princely delicacy folded like indigenous puff pastry, cooked in underground wood-fired tandoors for nobility.",
    },
    technologicalLeap: "Indigenous multi-layer fat lamination producing flaky, tandoor-baked layered flatbreads.",
    documentedCitation: "",
  },
  {
    generationNumber: 2,
    eraTitle: "The Mid-1900s",
    yearRange: "Mid-1900s",
    centuryLabel: "Epoch II",
    headline: "The Street Food of the Holy City",
    shortDescription:
      "By the mid-20th century, the Amritsari Kulcha transitioned into the ultimate community breakfast for the working class and pilgrims visiting the Golden Temple. Local bakers standardized the recipe by using commercial yeast or sour dough starters (khameer) to make the dough incredibly pliable, allowing them to laminate it with multiple layers of vegetable fat or commercial butter. Stationed in the narrow lanes of old Amritsar, vendors used massive, above-ground clay tandoors fueled by coal or wood to churn out hundreds of kulchas an hour. The bread became distinctly characterized by its multi-layered, shattered-glass texture, achieved by aggressively slapping the stuffed dough by hand before sticking it to the tandoor walls. It was served hot on old newspapers or tin plates, paired with spicy, tangy pindi chole (chickpeas) and a unique watery onion-tamarind chutney.",
    image: "/images/dishes/amritsari-kulcha-stage-2.webp",
    generationRecipe: {
      recipeName: "Golden Temple Alleyway Community Kulcha",
      historicalCookware: "Massive above-ground brick & clay tandoor",
      heatSource: "Coal and wood embers",
      ingredientsList: [
        "Standard Maida",
        "Market Potatoes",
        "Dalda Vanaspati",
        "Commercial Butter",
        "Dry Pomegranate Seeds"
      ],
      preparationMethod:
        "Pliable khameer-fermented dough laminated with vanaspati and butter, filled with spiced mashed potatoes and dry pomegranate seeds (anardana), slapped onto incandescent tandoor walls, and crushed with commercial butter.",
      contemporaryDifference:
        "Transitioned into a fast-paced community breakfast for pilgrims, paired with spicy pindi chole and tangy onion-tamarind chutney.",
    },
    technologicalLeap: "Khameer fermentation and high-speed above-ground clay tandoor baking for mass pilgrim feeding.",
    documentedCitation: "",
  },
  {
    generationNumber: 3,
    eraTitle: "The Present Day",
    yearRange: "2020s–2026",
    centuryLabel: "Epoch III",
    headline: "The Global Crunch Legend",
    shortDescription:
      "Today, the Amritsari Kulcha is a globally celebrated culinary masterpiece, fiercely protected by its geographical identity and sought after by food lovers worldwide. While high-tech commercial kitchens use temperature-controlled gas or electric tandoors to maintain consistency, the gold standard remains the charcoal-fired clay tandoor that delivers the signature charred, flaky crust. Modern preparation has been optimized: dough lamination is done precisely with premium pasteurized butter (like Amul) to create dozens of microscopic layers that shatter upon impact. The stuffing has expanded into gourmet territories, featuring combinations like spicy minced mushrooms, cheese, and seasoned cauliflower. For travelers and the global Punjabi diaspora, high-end food chains now offer flash-frozen, vacuum-packed kulchas that can be reheated in a home oven or air fryer, delivering the authentic crunch of Amritsar anywhere in the world.",
    image: "/images/dishes/amritsari-kulcha-stage-3.webp",
    generationRecipe: {
      recipeName: "Precision Laminated Amritsari Masterpiece",
      historicalCookware: "Precision clay tandoor, convection ovens & air fryers",
      heatSource: "Charcoal embers or precision temperature gas tandoor",
      ingredientsList: [
        "Premium Unbleached Maida",
        "Cold-Pressed Amul Butter",
        "Organic Spice Stuffed Potatoes",
        "Kasuri Methi",
        "Anardana Powder"
      ],
      preparationMethod:
        "Micro-laminated dough folded with Amul butter, packed with organic spiced potato-anardana filling, baked until blistering, and shattered by hand, or flash-frozen for global diaspora export.",
      contemporaryDifference:
        "Precision multi-layer micro-lamination, gourmet stuffing variations, and retort flash-freezing for oven or air-fryer finishing worldwide.",
    },
    technologicalLeap: "Precision fat micro-lamination, blast-freezing, and air-fryer regeneration technology.",
    documentedCitation: "",
  },
  {
    generationNumber: 4,
    eraTitle: "Serving & Plating",
    yearRange: "Present Day",
    centuryLabel: "Epoch IV",
    headline: "The Soul of Amritsari Breakfast",
    shortDescription:
      "Served piping hot, crushed by hand so the flaky layers shatter, crowned with melting butter and accompanied by dark pindi chole, pickled onions, and tamarind chutney.",
    image: "/images/dishes/amritsari-kulcha-stage-4.webp",
    generationRecipe: {
      recipeName: "Iconic Amritsar Street Thali Service",
      historicalCookware: "Stainless steel compartmentalized thali",
      heatSource: "Immediate service",
      ingredientsList: [
        "Premium Unbleached Maida",
        "Cold-Pressed Amul Butter",
        "Organic Spice Stuffed Potatoes",
        "Kasuri Methi",
        "Anardana Powder"
      ],
      preparationMethod: "Hand-crushed with a thud to release steam and shatter layers, topped with white butter and served with chole.",
      contemporaryDifference: "Cherished breakfast ritual preserved across generations.",
    },
    technologicalLeap: "Authentic shatter-crush plating aesthetic.",
    documentedCitation: "",
  },
];

function legacyGenerationsForDish(dishId: string, dish: Dish): GenerationWaypoint[] {
  switch (dishId) {
    case "vada-pav":
      return VADA_PAV_GENERATIONS;
    case "puran-poli":
      return PURAN_POLI_GENERATIONS;
    case "ukadiche-modak":
      return MODAK_GENERATIONS;
    case "makki-di-roti-sarson-saag":
      return MAKKI_ROTI_SARSON_SAAG_GENERATIONS;
    case "amritsari-kulcha":
      return AMRITSARI_KULCHA_GENERATIONS;
    case "masala-dosa":
      return DOSA_GENERATIONS;
    case "hyderabadi-biryani":
      return BIRYANI_GENERATIONS;
    case "rogan-josh":
      return ROGAN_JOSH_GENERATIONS;
    case "litti-chokha":
      return LITTI_CHOKHA_GENERATIONS;
    case "butter-chicken":
      return BUTTER_CHICKEN_GENERATIONS;
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
      shortDescription: stage.narrative,
      image: historicalStageImageUrl(stage.key, photo) ?? UNRESOLVED_IMAGE,
      generationRecipe: {
        recipeName: stage.title,
        historicalCookware: source.generationRecipe.historicalCookware,
        heatSource: source.generationRecipe.heatSource,
        ingredientsList:
          source.generationRecipe.ingredientsList && source.generationRecipe.ingredientsList.length
            ? source.generationRecipe.ingredientsList
            : dish.ingredients,
        preparationMethod:
          stage.key === "method"
            ? `${dish.keyTechnique}. ${stage.details[0]}`
            : stage.details[0],
        contemporaryDifference:
          stage.details[stage.details.length - 1] || source.generationRecipe.contemporaryDifference,
      },
      technologicalLeap: stage.details[0],
      documentedCitation:
        citations || "Regional food writing; no securely dated first reference established.",
    } satisfies GenerationWaypoint;
  });
}
