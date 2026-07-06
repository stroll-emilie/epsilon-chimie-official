const NEGATIVE_VALUES = new Set([
    "no",
    "not known",
    "not dangerous if wet",
    "n/a",
    "na",
    "-",
    "'",
]);

function isActiveValue(value) {
    if (typeof value !== "string") return false;
    const normalized = value.trim().toLowerCase();
    return normalized.length > 0 && !NEGATIVE_VALUES.has(normalized);
}

export const SAFETY_HAZARDS = [
    { for: "irritant", code: "GHS07", label: "Health hazard", description: "Irritant: can cause skin or eye irritation" },
    { for: "lacrymogène", code: "GHS07", label: "Health hazard", description: "Lachrymatory: can cause serious eye irritation" },
    { for: "nocif", code: "GHS07", label: "Health hazard", description: "Harmful if swallowed, inhaled or in contact with skin" },
    { for: "corrosif", code: "GHS05", label: "Corrosive", description: "Causes severe skin burns and eye damage. May be corrosive to metals" },
    { for: "toxique", code: "GHS06", label: "Severe acute toxicity", description: "Can be fatal if swallowed, inhaled or in contact with skin" },
    { for: "cancérigène", code: "GHS08", label: "Long-term health hazard", description: "Potentially carcinogenic, harmful to organs and reproduction" },
    { for: "dangereux si humide", code: "GHS02", label: "Flammable", description: "Releases flammable gases in contact with water" },
    { for: "sensible à l'humidité", code: "GHS02", label: "Flammable", description: "Moisture sensitive: avoid contact with water" },
    { for: "pyrophorique", code: "GHS02", label: "Flammable", description: "Pyrophoric: catches fire spontaneously in air" },
    { for: "inflammable", code: "GHS02", label: "Flammable", description: "Flammable liquid or solid" },
    { for: "combustible", code: "GHS02", label: "Flammable", description: "Combustible liquid or solid" },
    { for: "oxydant", code: "GHS03", label: "Oxidising", description: "Oxidising agent, can intensify fire" },
];

export function getActiveHazards(prod) {
    return SAFETY_HAZARDS.filter((hazard) => isActiveValue(prod[hazard.for]));
}