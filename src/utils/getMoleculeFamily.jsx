const family_map = {
    "1.0": "Phosphonium Salts",
    "2.0": "Phosphonates",
    "3.0": "Phosphoranes",
    "1": "Phosphonium Salts",
    "2": "Phosphonates",
    "3": "Phosphoranes"
}

export function getMoleculeFamily(molecule){
    const familyID = molecule["Catégorie"];
    const name = molecule["Nom"];


    if(name) {
        const normalized = name.toLowerCase(); 
        if(normalized.includes('phosphonic')) return 'Phosphonic Acids';
        if(normalized.includes('phosphin')) return 'Phosphines';
    }

    if (familyID && family_map[familyID]){
        return family_map[familyID];
    }


    return 'Chemical Intermediates';
}