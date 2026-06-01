import Papa from 'papaparse';
import { getMoleculeFamily } from '../utils/getMoleculeFamily';

import vide from '../assets/images/mollecules/vide.png'
import Fuse from 'fuse.js'

let cache = null

// Chargement des données | découpage | groupement
export async function loadProducts() {
    if (cache) return cache
    const res = await fetch(`${import.meta.env.BASE_URL}Catalogue.csv`)
    const buffer = await res.arrayBuffer()
    const csv = new TextDecoder("utf-8").decode(buffer)
    const { data } = Papa.parse(csv, {
        delimiter: ";", header: true,
        skipEmptyLines: true,
    })

    // Récupéré le nom de la molécule et la pureté stocker dans le champs "Nom"
    const parsed = data.map(row => {
        const { name, purity } = parseNom(row["Nom"])
        row["NomClean"] = name
        row["Purity"] = purity
        return row
    })

    
    const grouped = {}
    parsed.forEach(row => {
        const ref = String(row["Réf EPSILON"])
        if (!ref) return
        if (!grouped[ref] && row["NomPourTri"]) grouped[ref] = row
    })

    cache = Object.values(grouped)
    return cache
}

// applique les tries et filtres
export function filterAndSort(products, {search, selectedFamily, sortOrder}) {

    // traitement dans un premier temps de la recherche dans la barre de recherche
    
    let result = products

    if (search) {
        const cleanSearch = search.replace(/^EC-/i, "").trim()
        
        const fuse = new Fuse(products, {
            keys: [
                { name: "NomClean", getFn: p => String(p["NomClean"] ?? "") },
                { name: "CAS", getFn: p => String(p["CAS"] ?? "") },
                { name: "NomPourTri", getFn: p => String(p["NomPourTri"] ?? "") },
                { name: "Réf EPSILON", getFn: p => String(p["Réf EPSILON"] ?? "") },
            ],
            threshold: 0.4,
        })
        result = fuse.search(cleanSearch).map(r => r.item)
    }


    return result
        // par famille à gauche
        .filter(p => selectedFamily === "All" || getMoleculeFamily(p) === selectedFamily)
        // par tri en haut
        .sort((a,b) => {
            switch(sortOrder) {
                case "nameAsc" :    return a["NomPourTri"].localeCompare(b["NomPourTri"]);
                case "nameDesc" :   return b["NomPourTri"].localeCompare(a["NomPourTri"]);
                case "casAsc":      return a["CAS"].localeCompare(b["CAS"]);
                case "casDesc":     return b["CAS"].localeCompare(a["CAS"]);
                case "purityAsc": {
                    
                    const pA = Number.parseFloat(a["Purity"]);
                    const pB = Number.parseFloat(b["Purity"]);
                    if (Number.isNaN(pA)) return 1;   // a va en bas
                    if (Number.isNaN(pB)) return -1;  // b va en bas
                    return pB - pA;
                }
                case "purityDesc": {
                    const pA = Number.parseFloat(a["Purity"]);
                    const pB = Number.parseFloat(b["Purity"]);
                    if (Number.isNaN(pA)) return 1;   // a va en bas
                    if (Number.isNaN(pB)) return -1;  // b va en bas
                    return pA - pB;
                    
                }default: return 0;
            }
        });
}

// compte le nombre d'élement de chaque 
export function countByFamily(products) {
    const families = ["Phosphonic Acids", "Phosphonates", "Phosphonium Salts", "Phosphoranes", "Phosphines", "Chemical Intermediates"]
    const counts = { "All" : products.length }
    families.forEach(f => {
        counts[f] = products.filter(p => getMoleculeFamily(p) === f).length
    })
    return counts
}

// Récupéré les infos sur un seul produit
export function getProductById(products, id) {
    return products.find(p => String(p["Réf EPSILON"]) === String(id))
}

// Formater la formule chimique de la molécule
export function formatFormula(formula) {
    if(!formula) return ""
    return formula
        .replace(/([A-Z][a-z]?)/g, match => `<span>${match}</span>`)
        .replace(/(\d+)/g, match => `<sub>${match}</sub>`)
}

//**************************** Gestion des images ***********************************//

const images = import.meta.glob('../assets/images/mollecules/*.png', { eager: true });

const imageMap = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const ref = path.split('/').pop().replace('.png', '');
        return [ref, module.default];
    })
);

export function getProductImage(ref) {
    return imageMap[ref]
        ?? imageMap[ref.padStart(5, '0')]
        ?? imageMap[ref.padStart(6, '0')]
        ?? vide
}
//***********************************************************************************//

export function parseNom(nom) {
    if (!nom) return { name: "", purity: "" }
    const match = nom.match(/,\s*(min\.\s*)?([\d.]+\s*%)\s*(\([^)]+\))?/)
    if (match) return { name: nom.slice(0, match.index).trim(), purity: match[2].trim() }
    return { name: nom, purity: "" }
}