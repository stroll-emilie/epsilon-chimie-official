const family_map = {
    "1.0": "Phosphonium Salts",
    "2.0": "Phosphonate",
    "3.0": "Phosphorane"
}

export function getMoleculeFamily(molecule){
    const familyID = molecule["Catégorie"];
    const name = molecule["Nom"];


    if(name) {
        const normalized = name.toLowerCase(); 
        if(normalized.includes('phosphonic')) return 'Phosphonic Acids';
        if(normalized.includes('phosphin')) return 'Phosphine';
    }

    if (familyID && family_map[familyID]){
        return family_map[familyID];
    }


    return 'Chemical Intermediate';
}