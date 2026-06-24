// scripts/generate-sitemap.js
import { readFileSync, writeFileSync } from 'node.fs'
import Papa from 'papaparse'

// Même logique que loadProducts() mais en Node.js
const raw = readFileSync('./public/Catalogue.csv', 'utf-8')
const { data } = Papa.parse(raw, {
    delimiter: ";",
    header: true,
    skipEmptyLines: true,
})

// Même logique de groupement que dataService.js
const grouped = {}
data.forEach(row => {
    const ref = String(row["Réf EPSILON"])
    if (!ref) return
    if (!grouped[ref] && row["NomPourTri"]) grouped[ref] = row
})
const products = Object.values(grouped)

const BASE_URL = 'https://www.epsilon-chimie.com'
const TODAY = new Date().toISOString().split('T')[0]

const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${BASE_URL}/</loc><lastmod>${TODAY}</lastmod><priority>1.0</priority></url>
    <url><loc>${BASE_URL}/request-for-quote</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
    <url><loc>${BASE_URL}/catalogue</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>
    <url><loc>${BASE_URL}/custom</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
    <url><loc>${BASE_URL}/about</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority></url>
    <url><loc>${BASE_URL}/legal-notice</loc><lastmod>${TODAY}</lastmod><priority>0.3</priority></url>
    <url><loc>${BASE_URL}/privacy-policy</loc><lastmod>${TODAY}</lastmod><priority>0.3</priority></url>
    <url><loc>${BASE_URL}/general-t&amp;c</loc><lastmod>${TODAY}</lastmod><priority>0.3</priority></url>
    <url><loc>${BASE_URL}/general-terms</loc><lastmod>${TODAY}</lastmod><priority>0.3</priority></url>
</urlset>`

const productsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${products
    .map(p => `    <url>
        <loc>${BASE_URL}/product/${encodeURIComponent(p["Réf EPSILON"])}</loc>
        <lastmod>${TODAY}</lastmod>
        <priority>0.6</priority>
    </url>`).join('\n')}
</urlset>`

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${BASE_URL}/sitemap-pages.xml</loc>
        <lastmod>${TODAY}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-products.xml</loc>
        <lastmod>${TODAY}</lastmod>
    </sitemap>
</sitemapindex>`

writeFileSync('./public/sitemap.xml', indexXml)
writeFileSync('./public/sitemap-pages.xml', pagesXml)
writeFileSync('./public/sitemap-products.xml', productsXml)

