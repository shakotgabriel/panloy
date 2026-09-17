export type Shot = {
  src: string;
  caption: string;
  fileHint: string;
  fit?: "cover" | "contain";
};

function shot(file: string, caption = "", fit?: Shot["fit"]): Shot {
  return { src: `/${file}`, caption, fileHint: file, fit };
}

export const pictures = {
  lab: shot("panloy-fieldlab.JPG", "Field laboratory"),
  team: shot("team-1.JPG", "Field team"),
  site: shot("treatment-plant.JPG", "Treatment plant"),
  unity: shot("unity-plant.JPG", "Unity plant"),
  unityWide: shot("unity-plant2.JPG", "Unity field"),
  tdu: shot("tdu1.JPG", "Thermal desorption unit"),
  thermal: shot("thermal-treatment.JPG", "Thermal treatment"),
  thermal2: shot("thermal-treatment2.JPG", "Thermal treatment"),
  control: shot("control-unit.JPG", "Control unit"),
  soilArea: shot("soil-area.JPG", "Soil area"),
  collected: shot("collected-soil.JPG", "Collected soil"),
  untreated: shot("untreated-soil.JPG", "Untreated soil"),
  untreatedAlt: shot("untreatedsoil.JPG", "Untreated soil"),
  untreatedPile: shot("untreated-3.JPG", "Untreated soil"),
  treated: shot("treated-soil.JPG", "Treated soil"),
  transport: shot("transportation.JPG", "Transport"),
  safety: shot("Panloy-safetyrules.JPG", "Safety rules"),
  dpoc: shot("DAR-LOGO.png", "Dar Petroleum Operating Company", "contain"),
} as const;

export const photoSets: Record<string, Shot[]> = {
  clients: [
    pictures.site,
    pictures.unity,
    pictures.dpoc,
    pictures.unityWide,
  ],
  process: [
    pictures.soilArea,
    pictures.transport,
    pictures.untreatedPile,
    pictures.thermal,
    pictures.treated,
  ],
  tdu: [
    pictures.tdu,
    pictures.thermal,
    pictures.control,
    pictures.lab,
  ],
  gumry: [
    pictures.site,
    pictures.collected,
    pictures.thermal,
    pictures.soilArea,
    pictures.treated,
    pictures.lab,
  ],
  unity: [
    pictures.unity,
    pictures.unityWide,
    pictures.tdu,
    pictures.thermal2,
    pictures.control,
    pictures.safety,
  ],
  projects: [pictures.site, pictures.unity, pictures.unityWide, pictures.tdu],
  "who-we-are": [pictures.team, pictures.lab, pictures.safety, pictures.site],
  "how-we-do-it": [
    pictures.tdu,
    pictures.control,
    pictures.safety,
    pictures.treated,
  ],
  technology: [pictures.tdu, pictures.control, pictures.lab, pictures.thermal],
  qhse: [pictures.safety, pictures.team, pictures.lab],
  ethics: [pictures.team, pictures.safety],
  sustainability: [pictures.treated, pictures.soilArea, pictures.lab],
  "what-we-do": [pictures.tdu, pictures.site, pictures.unity, pictures.lab],
  "services/waste": [
    pictures.tdu,
    pictures.untreated,
    pictures.treated,
    pictures.lab,
  ],
  "services/municipal": [pictures.transport, pictures.untreatedAlt],
  "services/training": [pictures.team, pictures.safety],
  "services/environment": [pictures.soilArea, pictures.lab, pictures.treated],
  "services/engineering": [pictures.control, pictures.tdu, pictures.thermal2],
  "services/supply": [pictures.transport, pictures.collected],
  "services/manufacturing": [pictures.site],
  "services/b2b": [pictures.team],
  office: [pictures.team],
  factory: [pictures.site],
  home: [pictures.team, pictures.site, pictures.unity, pictures.lab],
  heroes: [pictures.team, pictures.site, pictures.lab],
  contact: [pictures.team, pictures.site],
};
