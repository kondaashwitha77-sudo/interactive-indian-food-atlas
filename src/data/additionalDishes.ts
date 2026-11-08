// ─────────────────────────────────────────────
// ADDITIONAL DISHES — one authentic, regionally significant dish per state
//
// These are merged into FOOD_DATA at the end of foodData.ts. Every dish here
// has four historical stages in
// src/data/dishStages.json and a per-dish photographic record in
// src/data/photography.json. A stage with no verified photograph is recorded
// as unresolved rather than filled with a borrowed picture.
//
// Batch 1 (2026-11-02, commit 954d836): Kerala, Tamil Nadu, Punjab,
//   Maharashtra.
// Batch 2 (2026-11-02, this continuation): the remaining 24 states, bringing
//   the atlas to 28 states x 3 dishes + 6 UTs x 2 dishes = 96 dishes.
// ─────────────────────────────────────────────

import type { Dish } from "./foodData";

export const ADDITIONAL_DISHES: Record<string, Dish[]> = {
  Kerala: [
    {
      id: "puttu",
      name: "Puttu",
      alternateName: "Pittu / steamed rice-flour cylinders",
      state: "Kerala",
      category: "fermented-steamed",
      description:
        "Cylinders of coarsely moistened rice flour and grated coconut steamed in a two-part puttu kutti, eaten hot with kadala curry, banana or a spoon of sugar.",
      ingredients: [
        "Puttu flour (coarse rice flour) or parboiled rice",
        "Grated coconut",
        "Salt",
        "Water",
      ],
      tasteProfile: "Nutty, Soft-Steamed & Coconut-Fragrant",
      era: "Sangam-era Kerala & Tamil kitchen continuity (tradition; no securely dated first reference)",
      keyTechnique: "Puttu Kutti Steam-Column Layering",
    },
  ],

  "Tamil Nadu": [
    {
      id: "filter-coffee",
      name: "Filter Coffee",
      alternateName: "Kaapi / Degree Coffee",
      state: "Tamil Nadu",
      category: "beverage",
      description:
        "A two-tier steel filter drips a dark coffee-chicory decoction overnight; it is cut with boiling milk and pulled between a dabarah and tumbler until a crown of froth forms.",
      ingredients: [
        "Filter coffee powder (medium to dark roast)",
        "Chicory (blended into the powder)",
        "Freshly boiled water",
        "Full-cream milk",
        "Sugar (or jaggery)",
      ],
      tasteProfile: "Bittersweet, Milky-Heavy & Deeply Roasted",
      era: "Madras coffee-house culture, documented from the early 20th century",
      keyTechnique: "Two-Tier Drip Filter & Dabarah Frothing",
    },
  ],

  Punjab: [
    {
      id: "amritsari-kulcha",
      name: "Amritsari Kulcha",
      alternateName: "Amritsari Aloo Kulcha",
      state: "Punjab",
      category: "grain-bread",
      description:
        "A stuffed bread of refined wheat flour, layered with ghee and spiced potato or paneer, slapped into a tandoor wall until it blisters, then crushed with white butter and served with chole.",
      ingredients: [
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
        "Fresh white butter (for serving)"
      ],
      tasteProfile: "Crisp, Buttery & Ghee-Layered",
      era: "Amritsar tandoor culture, documented in 20th-century food writing",
      keyTechnique: "Tandoor-Charged Stuffed Kulcha Baking",
    },
  ],

  Maharashtra: [],

  // ── Batch 2: the 24 states that were still at two dishes ──────────────
  "Andhra Pradesh": [],

  "Arunachal Pradesh": [
    {
      id: "apong",
      name: "Apong",
      alternateName: "Rice Beer of the Adi and Nyishi",
      state: "Arunachal Pradesh",
      category: "beverage",
      description:
        "A lightly effervescent rice beer brewed from fermented rice and a herbal starter cake, strained and diluted with water; central to Adi and Nyishi hospitality, festivals and communal labour.",
      ingredients: ["Rice", "Fermentation starter (apop/epo)", "Water", "Local herbs"],
      tasteProfile: "Mildly Sour, Earthy & Effervescent",
      era: "Indigenous fermentation tradition; documented in ethnographic accounts, not in a dated recipe",
      keyTechnique: "Starter-Cake Fermentation & Bamboo Straining",
    },
  ],

  Assam: [
    {
      id: "til-pitha",
      name: "Til Pitha",
      alternateName: "Assamese Sesame Rice Cake",
      state: "Assam",
      category: "sweet-dessert",
      description:
        "A thin rice-flour pancake dry-roasted on a hot tawa, rolled around a filling of toasted black sesame and jaggery, and made in quantity for Magh Bihu and Bohag Bihu.",
      ingredients: ["Glutinous rice flour", "Black sesame seeds", "Jaggery", "Water"],
      tasteProfile: "Toasty, Sesame-Rich & Gently Sweet",
      era: "Bihu harvest tradition; documented in Assamese household and festival cookery",
      keyTechnique: "Dry-Tawa Rice Crepe & Sesame-Jaggery Rolling",
    },
  ],

  Bihar: [
    {
      id: "silao-khaja",
      name: "Silao Khaja",
      alternateName: "Silao ka Khaja",
      state: "Bihar",
      category: "sweet-dessert",
      description:
        "Paper-thin layers of wheat-flour dough, folded repeatedly with ghee, deep-fried until crisp and saturated with sugar syrup; the layered sweet of Silao near Nalanda, now GI-registered.",
      ingredients: ["Wheat flour", "Ghee", "Sugar", "Water", "Cardamom"],
      tasteProfile: "Flaky, Syrup-Sweet & Ghee-Fragrant",
      era: "Silao sweet-making tradition, documented in 20th-century regional accounts and the GI Registry",
      keyTechnique: "Repeated Lamination, Frying & Syrup Saturation",
    },
  ],

  Chhattisgarh: [],

  Goa: [
    {
      id: "bebinca",
      name: "Bebinca",
      alternateName: "Bibik / Goan Layer Cake",
      state: "Goa",
      category: "sweet-dessert",
      description:
        "Seven (or more) thin coconut-milk, egg-yolk and flour layers, each grilled or baked before the next is poured, finished with a glossy top layer and cut in diamond slices.",
      ingredients: [
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
      tasteProfile: "Caramelised, Coconut-Rich & Custardy",
      era: "Indo-Portuguese Goan baking tradition, documented in 20th-century Goan cookery",
      keyTechnique: "Sequential Layer Baking Under Grill Heat",
    },
  ],

  Gujarat: [],

  Haryana: [],

  "Himachal Pradesh": [],

  Jharkhand: [],

  Karnataka: [],

  "Madhya Pradesh": [
    {
      id: "dal-bafla",
      name: "Dal Bafla",
      alternateName: "Bafla / Malwa Baati",
      state: "Madhya Pradesh",
      category: "grain-bread",
      description:
        "Wheat-flour balls boiled first and then baked until blistered — unlike a dry baati — cracked open, drenched in ghee and served with a slow-cooked panchmel dal from the Malwa and Bundelkhand regions.",
      ingredients: [
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
        "Spicy red garlic chutney & lemon wedges"
      ],
      tasteProfile: "Buttery, Hearty & Dal-Soaked",
      era: "Malwa–Bundelkhand household tradition; documented in regional cookery",
      keyTechnique: "Boil-Then-Bake Wheat Dumpling",
    },
  ],

  Manipur: [],

  Meghalaya: [
    {
      id: "pumaloi",
      name: "Pumaloi",
      alternateName: "Khasi Steamed Powdered Rice / Khaw Pumaloi",
      state: "Meghalaya",
      category: "fermented-steamed",
      description: "Meghalaya's cherished Khasi steamed staple: coarse indigenous hill rice flour lightly sprinkled with salted water into a moist, crumbly texture, gently steamed in an artisanal two-tier earthen pot until fluffy and aromatic.",
      ingredients: ["Indigenous Khasi hill rice (khaw pumaloi / unpolished red or white rice)","Cold water (for sprinkling and moistening the flour)","Fine sea salt or rock salt (subtle pinch for dough balance)","Boiling water (for generating steam in the lower vessel)","Freshly grated coconut (traditional sweet festive variation)","Finely grated jaggery (optional layered filling in sweet versions)","Bamboo mesh or perforated clay disc (siew ranei / internal steam plate)","Banana leaves (optional liner for the steamer pot)","Fresh whole milk (accompanying tea or drizzle in morning meals)","Tungrymbai or spicy pork curry (traditional savory meal accompaniments)"],
      tasteProfile: "Delicate, Earthy & Mildly Sweet-Nutty",
      era: "Ancient Khasi Steaming Tradition (East & West Khasi Hills)",
      keyTechnique: "Cold Water Crumb Moistening & Two-Tier Earthen Steaming (Khiew Ranei)",
    },
  ],

  Mizoram: [
    {
      id: "vawksa-rep",
      name: "Vawksa Rep",
      alternateName: "Traditional Mizo Smoked Pork with Bamboo Shoot",
      state: "Mizoram",
      category: "meat",
      description:
        "Traditional Mizo smoked pork cured over home kitchen hearths (rap), braised tender in water with fermented bamboo shoots, fresh mountain ginger, garlic, and fiery green chillies without oil.",
      ingredients: [
        "Hearth-smoked country pork (vawksa rep)",
        "Fermented bamboo shoots (rawtuai)",
        "Fresh ginger root",
        "Garlic cloves",
        "Fresh green hill chillies",
        "Local wild mustard greens",
        "Filtered spring water",
        "Local aromatic mountain herbs",
        "Sea salt",
        "Fresh coriander or local chives (for garnish)"
      ],
      tasteProfile: "Smoky, Fiery, Tangy & Deeply Savoury",
      era: "Mizo Hearth-Preservation & Village Kitchen Heritage",
      keyTechnique: "Hearth Smoke-Curing & Zero-Oil Bamboo Shoot Braising",
    },
  ],

  Nagaland: [
    {
      id: "zutho",
      name: "Zutho",
      alternateName: "Traditional Angami Fermented Rice Beverage",
      state: "Nagaland",
      category: "beverage",
      description:
        "Traditional frothy, milky-white fermented rice beverage of the Angami Nagas, crafted from local sticky rice and an indigenous sprouted-grain starter culture (piazu), offering a mildly sweet, sour, and refreshing natural effervescence.",
      ingredients: [
        "Indigenous glutinous sticky rice",
        "Sprouted unpolished paddy starter (piazu)",
        "Clean filtered spring water",
        "Milled sprouted rice malt",
        "Natural wild fermentation yeast enzymes",
        "Wild herbal starter plant leaves",
        "Fermented rice mash liquor",
        "Natural grain brewing sugars",
        "Dilution pure spring water",
        "Bamboo tumblers (for serving)"
      ],
      tasteProfile: "Fruity, Tangy, Mildly Sweet & Effervescent",
      era: "Ancestral Angami Naga Fermentation & Harvest Rites",
      keyTechnique: "Piazu Sprouted Starter Fermentation & Terracotta Brewing",
    },
  ],

  Odisha: [
    {
      id: "pakhala",
      name: "Pakhala Bhata",
      alternateName: "Pakhala / Fermented Rice",
      state: "Odisha",
      category: "rice",
      description:
        "A refreshing traditional Odia rice dish made by soaking cooked rice in water, often naturally fermented and served with curd, green chillies and local accompaniments.",
      ingredients: [
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
      tasteProfile: "Cool, Gently Sour & Refreshing",
      era: "Traditional Odia household & summer heritage",
      keyTechnique: "Natural Rice Fermentation & Mustard Oil Chhunka",
    },
  ],

  Rajasthan: [
    {
      id: "ghewar",
      name: "Ghewar",
      alternateName: "Rajasthani Honeycomb Disc Sweet",
      state: "Rajasthan",
      category: "sweet-dessert",
      description:
        "A lacy, honeycombed disc made by pouring a thin flour-and-ghee batter into hot ghee in concentric rings, then drenched in sugar syrup and often finished with rabri; a Teej and Raksha Bandhan sweet.",
      ingredients: [
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
      tasteProfile: "Crisp, Syrup-Drenched & Creamy",
      era: "Rajasthani monsoon-festival sweet, documented in 20th-century sweet-making accounts",
      keyTechnique: "Ring-Poured Batter Frying & Syrup Soaking",
    },
  ],

  Sikkim: [],


  Tripura: [
    {
      id: "awan-bangwi",
      name: "Awan Bangwi",
      alternateName: "Traditional Tripuri Leaf-Wrapped Steamed Rice Cake",
      state: "Tripura",
      category: "fermented-steamed",
      description:
        "A celebrated festive delicacy of the indigenous Tripuri (Borok) people: fragrant indigenous sticky rice mixed with cashews, raisins, ginger, and pork or coconut, shaped into cones within fresh Lairu (banana/turmeric) leaves, and boiled to fragrant, chewy perfection.",
      ingredients: [
        "Indigenous sticky rice (guria chawal)",
        "Pork chunks or fresh grated coconut",
        "Crushed fresh ginger root",
        "Chopped cashews and golden raisins",
        "Finely sliced shallots",
        "Pinch of green cardamom powder",
        "Lairu leaves (banana or wild turmeric leaves for wrapping)",
        "Fine bamboo or cotton twine (for binding)",
        "Pinch of sea salt",
        "Filtered spring water (for immersion boiling)"
      ],
      tasteProfile: "Fragrant, Chewy, Leaf-Perfumed & Subtle Savoury-Sweet",
      era: "Ancient Tripuri Royal & Agrarian Harvest Festivities",
      keyTechnique: "Lairu Leaf Cone Wrapping, Tight Binding & Immersion Boiling",
    },
  ],

  "Uttar Pradesh": [
    {
      id: "banarasi-malaiyo",
      name: "Banarasi Malaiyo",
      alternateName: "Kesar Malaiyo / Makhan Malai",
      state: "Uttar Pradesh",
      category: "sweet-dessert",
      description: "Varanasi's ethereal winter froth: raw milk infused with saffron and sugar, chilled overnight under open morning dew, churned into cloud-light foam and crowned with pistachios and almonds in earthen kulhads.",
      ingredients: ["Full-fat cow and buffalo milk","Kashmiri saffron strands","Green cardamom powder","Powdered sugar (boora)","Fresh milk cream (malai)","Finely slivered pistachios","Finely slivered almonds","Kewra or rose water","Overnight winter morning dew (ambient cool aeration)","Yellow food essence or turmeric hue (optional traditional tint)"],
      tasteProfile: "Delicate, Creamy & Saffron-Infused",
      era: "Winter Tradition of Varanasi (Awadh & Purvanchal Confectionery)",
      keyTechnique: "Dew-Cooled Aeration & Wooden Bilona Frothing",
    },
  ],

  Uttarakhand: [
    {
      id: "singori",
      name: "Singori",
      alternateName: "Singauri / Malu-Leaf Cone Sweet",
      state: "Uttarakhand",
      category: "sweet-dessert",
      description: "Uttarakhand's delicate conical sweet: slow-cooked khoya enriched with grated coconut and green cardamom, folded gently into a fragrant wild Malu leaf cone that infuses the fudge with a subtle herbal mountain perfume.",
      ingredients: ["Fresh whole-milk khoya (mawa)","Finely grated dry coconut (copra)","Granulated cane sugar","Green cardamom powder","Fresh wild Malu leaves (Bauhinia vahlii)","Whole cloves (laung for pinning the cone)","Pure desi cow ghee","Crushed pistachios or almonds (optional garnish)","Kewra or rose water (subtle floral accent)","Warm milk (for loosening fudge consistency)"],
      tasteProfile: "Sweet, Milky & Earthy with Forest Herbal Aroma",
      era: "Historic Kumaoni Hill Tradition (Almora & Tehri Heritage)",
      keyTechnique: "Khoya Reduction, Coconut Folding & Malu Leaf Cone Wrapping",
    },
  ],

  "West Bengal": [
    {
      id: "rosogolla",
      name: "Rosogolla",
      alternateName: "Banglar Rosogolla / Rasgulla",
      state: "West Bengal",
      category: "sweet-dessert",
      description: "Bengal's iconic spongy sweet: pristine cow-milk chhana kneaded with delicate fingertip mastery, shaped into smooth spherical balls, and boiled vigorously in light bubbling sugar syrup until buoyant, porous, and syrup-soaked.",
      ingredients: ["Pure fresh cow milk","Sour whey or fresh lemon juice (for curdling chhana)","Granulated white sugar (for light syrup)","Water (for boiling syrup and steeping)","Fine semolina (suji - minuscule binding pinch)","Green cardamom pods","Rose water or kewra essence","Ice cubes or cold water (for washing chhana)","Refined wheat flour (maida - optional dusting pinch)","Thin sugar steeping syrup (patla chashni for cooling)"],
      tasteProfile: "Spongy, Juicy & Delicately Floral-Sweet",
      era: "19th-Century Renaissance Kolkata (Bagbazar Confectionery Heritage)",
      keyTechnique: "Fresh Chhana Kneading & Rapid Light-Syrup Boiling",
    },
  ],
};

export const ADDITIONAL_DISH_IDS = Object.values(ADDITIONAL_DISHES)
  .flat()
  .map((dish) => dish.id);
