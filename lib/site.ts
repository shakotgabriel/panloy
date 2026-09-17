export const company = {
  name: "Panloy",
  group: "Panloy Group",
  division: "South Sudan",
  tagline: "Local capability for responsible energy, engineering, and environmental services.",
  email: "info@panloygroup.com.ss",
  phones: [{ label: "Office", href: "+211912000000", display: "+211 912 000 000" }],
  hours: "Sunday to Thursday, 08:00 to 17:00",
  vision: "A capable, responsible South Sudanese company built for the long term.",
  mission: "Deliver practical services that create value for customers, communities, and the environment.",
  goal: "To be the trusted local partner for South Sudan's energy and industrial future.",
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com" },
  ],
};

export const navigation = [
  {
    label: "Who we are",
    href: "/who-we-are",
    children: [
      { label: "Our purpose", href: "/who-we-are/purpose" },
      { label: "Corporate structure", href: "/who-we-are/corporate-structure" },
      { label: "Panloy quadrant", href: "/who-we-are/quadrant" },
    ],
  },
  {
    label: "What we do",
    href: "/what-we-do",
    children: [
      { label: "Manufacturing", href: "/what-we-do/manufacturing" },
      { label: "Environmental services", href: "/what-we-do/environmental-services" },
      { label: "Hazardous waste", href: "/what-we-do/hazardous-waste" },
      { label: "HSE training", href: "/what-we-do/hse-training" },
      { label: "Supply chain", href: "/what-we-do/supply-chain" },
    ],
  },
  {
    label: "How we do it",
    href: "/how-we-do-it",
    children: [
      { label: "Our process", href: "/how-we-do-it/process" },
      { label: "Technology", href: "/how-we-do-it/technology" },
      { label: "QHSE", href: "/how-we-do-it/qhse" },
      { label: "Sustainability", href: "/how-we-do-it/sustainability" },
      { label: "Ethics", href: "/how-we-do-it/ethics" },
    ],
  },
];

export const locations = [
  { kind: "Head office", name: "Juba", lines: ["Hai Malakal", "South Sudan"] },
  { kind: "Factory", name: "Jebel Kujur", lines: ["Manufacturing and logistics", "South Sudan"] },
  { kind: "Field operations", name: "Paloch", lines: ["Upper Nile State", "South Sudan"] },
  { kind: "Field operations", name: "Unity", lines: ["Unity Oil Field", "South Sudan"] },
];

export const stats = [
  { value: "15+", label: "years in South Sudan" },
  { value: "4", label: "operating locations" },
  { value: "8", label: "service lines" },
  { value: "24/7", label: "field capability" },
];

export const clientProfiles = [
  { short: "DPOC", name: "Dar Petroleum Operating Company", file: "dpoc.png" },
  { short: "GPOC", name: "Greater Pioneer Operating Company", file: "gpoc.png" },
  { short: "SPOC", name: "Sudd Petroleum Operating Company", file: "spoc.jpeg" },
  { short: "WGC", name: "Worley Group", file: "worley.png" },
];

export const partners = [
  { name: "SCOR", country: "Malaysia", folder: "partners/international", file: "scor.png" },
  { name: "Green Energy", country: "China", folder: "partners/international", file: "green-energy.png" },
  { name: "ThermoTech", country: "Germany", folder: "partners/international", file: "thermotech.png" },
  { name: "Anadolu Environmental", country: "Turkey", folder: "partners/international", file: "anadolu.png" },
  { name: "Panloy Technical Partners", country: "International", folder: "partners/international", file: "technical.png" },
];

export const localPartners = [
  { name: "Panloy Engineering", folder: "partners/local", file: "engineering.jpg" },
  { name: "Panloy Manufacturing", folder: "partners/local", file: "manufacturing.jpg" },
  { name: "South Sudan Logistics", folder: "partners/local", file: "logistics.jpg" },
  { name: "Field Services Network", folder: "partners/local", file: "field-services.jpg" },
];

export const services = [
  { number: "01", title: "Manufacturing", href: "/what-we-do/manufacturing", summary: "Practical fabrication and products for South Sudan's energy sector.", photo: "manufacturing.jpg" },
  { number: "02", title: "Environmental services", href: "/what-we-do/environmental-services", summary: "Assessment, remediation, and environmental consultancy.", photo: "environment.jpg" },
  { number: "03", title: "Hazardous waste", href: "/what-we-do/hazardous-waste", summary: "Controlled collection, treatment, and disposal of oilfield waste.", photo: "waste.jpg" },
  { number: "04", title: "HSE training", href: "/what-we-do/hse-training", summary: "Training that helps teams work safely and responsibly.", photo: "training.jpg" },
  { number: "05", title: "Supply chain", href: "/what-we-do/supply-chain", summary: "Procurement and delivery of industrial and oilfield supplies.", photo: "supply.jpg" },
  { number: "06", title: "Engineering consultancy", href: "/what-we-do/engineering-consultancy", summary: "Engineering support from concept through field delivery.", photo: "engineering.jpg" },
  { number: "07", title: "Oil spill response", href: "/what-we-do/oil-spill", summary: "Preparedness and response for hydrocarbon incidents.", photo: "oil-spill.jpg" },
  { number: "08", title: "B2B services", href: "/what-we-do/b2b", summary: "Business services built around local operating knowledge.", photo: "b2b.jpg" },
];

export const wasteProcess = [
  { step: "01", title: "Receive", body: "Waste is documented, segregated, and received under controlled conditions.", file: "01.jpg" },
  { step: "02", title: "Assess", body: "Sampling and laboratory checks establish the right treatment route.", file: "02.jpg" },
  { step: "03", title: "Treat", body: "Thermal and chemical processes reduce hydrocarbon impact.", file: "03.jpg" },
  { step: "04", title: "Verify", body: "Quality controls confirm that treatment meets the required standard.", file: "04.jpg" },
  { step: "05", title: "Reuse", body: "Recovered materials and treated outputs are managed responsibly.", file: "05.jpg" },
];

export const quadrant = [
  { title: "Customers", body: "Build lasting partnerships through dependable delivery." },
  { title: "Society", body: "Create opportunity and protect the places where we work." },
  { title: "Environment", body: "Reduce impact through responsible engineering and treatment." },
  { title: "Company", body: "Operate profitably so our work can endure." },
];

export const qhseObjectives = ["Protect people and communities", "Prevent pollution and avoidable waste", "Meet customer and regulatory requirements", "Learn continuously from our work"];
export const b2bServices = [
  { title: "Local representation", body: "Business registration, local representation, and stakeholder support." },
  { title: "Facilities support", body: "Reliable facilities and camp support for operating teams." },
  { title: "Procurement and logistics", body: "Local procurement, warehousing, and field logistics." },
  { title: "Mobilisation", body: "Staffing and field mobilisation built around your schedule." },
];
export const engineeringDisciplines = [
  { title: "Civil and structural", body: "Site infrastructure, structures, and civil works." },
  { title: "Mechanical and piping", body: "Mechanical systems, process equipment, and piping support." },
  { title: "Electrical and instrumentation", body: "Electrical, controls, and instrumentation services." },
  { title: "Project delivery", body: "Planning, supervision, and delivery support in the field." },
];
export const environmentalConsultancy = ["Environmental impact assessment", "Baseline surveys and monitoring", "Remediation planning", "Waste and pollution audits"];
export const wasteTypes = ["Hydrocarbon-contaminated soil", "Oilfield sludge", "Produced water", "Contaminated containers and equipment"];
export const manufacturingLines = ["Steel fabrication", "Tanks and process equipment", "Site structures", "Industrial maintenance products"];
export const supplyCategories = [
  { title: "Oilfield chemicals", items: ["Production chemicals", "Water-treatment chemicals", "Laboratory consumables"] },
  { title: "Industrial supplies", items: ["PPE and safety equipment", "Tools and workshop supplies", "General merchandise and stationery"] },
];
export const training = {
  occupationalSafety: ["Permit to work", "Confined space entry", "Working at height", "Incident investigation"],
  occupationalHealth: ["First aid", "Manual handling", "Occupational hygiene", "Health awareness"],
  fireSafety: [{ code: "FS01", title: "Fire awareness" }, { code: "FS02", title: "Fire warden training" }, { code: "FS03", title: "Emergency response" }],
  environmental: [{ code: "ENV01", title: "Waste management" }, { code: "ENV02", title: "Spill prevention" }, { code: "ENV03", title: "Environmental awareness" }],
};
export const partnerProjects = [
  { partner: "SCOR", title: "Scheduled waste treatment", body: "Technology and operating experience for the treatment of scheduled industrial waste." },
  { partner: "SCOR", title: "Oil sludge recovery", body: "Integrated recovery and treatment methods for oil-contaminated materials." },
];
export const scorLicences = ["Scheduled waste treatment licence", "Waste-water treatment licence", "Oil sludge recovery approval"];
export const tduAreas = [
  { step: "01", title: "Feed preparation", body: "Waste is sorted and prepared for a controlled treatment run.", file: "01.jpg" },
  { step: "02", title: "Thermal desorption", body: "Heat separates hydrocarbons from the soil or sludge matrix.", file: "02.jpg" },
  { step: "03", title: "Condensation and recovery", body: "Recovered hydrocarbons are condensed and managed as a useful stream.", file: "03.jpg" },
  { step: "04", title: "Laboratory control", body: "Samples verify treatment performance and quality at each stage.", file: "04.jpg" },
];
export const tduQualityFlow = [
  { step: "01", title: "Sample", body: "Take representative material samples.", file: "01.jpg" },
  { step: "02", title: "Analyse", body: "Establish the treatment target.", file: "02.jpg" },
  { step: "03", title: "Treat", body: "Run the controlled process.", file: "03.jpg" },
  { step: "04", title: "Verify", body: "Confirm the output meets requirements.", file: "04.jpg" },
  { step: "05", title: "Release", body: "Document and release treated material.", file: "05.jpg" },
];
export const tduSteps = [
  { step: "01", title: "Receive and record material", body: "Document the source, volume, and condition of each load.", file: "01.jpg" },
  { step: "02", title: "Prepare the treatment feed", body: "Prepare a consistent feed for the treatment unit.", file: "02.jpg" },
  { step: "03", title: "Run the thermal process", body: "Operate the unit under monitored conditions.", file: "03.jpg" },
  { step: "04", title: "Test treated material", body: "Use laboratory checks to verify the result.", file: "04.jpg" },
  { step: "05", title: "Document and close out", body: "Complete records and manage the final material responsibly.", file: "05.jpg" },
];

export const searchIndex = [
  ...services.map(({ title, href, summary }) => ({ title, href, excerpt: summary })),
  { title: "Gumry treatment plant", href: "/projects/gumry", excerpt: "Integrated hazardous-waste treatment at Paloch." },
  { title: "Our partners", href: "/partners", excerpt: "Local and international business and technology partners." },
  { title: "Contact us", href: "/contact", excerpt: "Find the Panloy Group office and field locations." },
];