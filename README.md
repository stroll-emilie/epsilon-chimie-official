# epsilon-chimie-official# Mise à jour du catalogue produit

Ce document décrit la procédure complète pour mettre à jour le catalogue produit affiché sur le site.

---

## Prérequis

- Accès à **Microsoft Access** avec les droits de lecture sur la base de données produit
- **FileZilla** installé et configuré avec les identifiants FTP du serveur
- Le fichier final doit s'appeler `Catalogue.csv`

---

## Étape 1 — Préparer les données dans Microsoft Access

Ouvrir Microsoft Access et accéder à la **table contenant les produits à afficher dans le catalogue**.

> ⚠️ Cette table ne doit contenir **que les produits destinés au catalogue** — vérifier les filtres avant d'exporter.

<!-- ILLUSTRATION : capture d'écran de la table Access avec les produits sélectionnés -->

---

## Étape 2 — Exporter les données en CSV

Suivre les étapes suivantes dans l'ordre :

### 2.1 Lancer l'export
- Aller dans **Données Externes → Fichier texte**
- Ne cocher **aucune case** sur le premier écran
- Cliquer sur **Ok**

<!-- ILLUSTRATION : capture d'écran de la fenêtre "Données Externes > Fichier texte" -->

### 2.2 Configurer le format
- Cocher **"Délimité — des caractères (tabulation, point…) séparent chaque champ"**
- Cliquer sur **Suivant**

<!-- ILLUSTRATION : capture d'écran de l'option "Délimité" cochée -->

### 2.3 Configurer le délimiteur
- Cocher **Point-virgule** comme délimiteur
- Cocher **"Inclure les noms des champs sur la première ligne"**

<!-- ILLUSTRATION : capture d'écran avec point-virgule et noms de champs cochés -->

### 2.4 Configurer l'encodage
- Cliquer sur **Avancé**
- Changer **Page de codes** en **Unicode (UTF-8)**
- Cliquer sur **Ok**

> ⚠️ L'encodage UTF-8 est obligatoire pour que les caractères spéciaux (accents, symboles chimiques) s'affichent correctement sur le site.

<!-- ILLUSTRATION : capture d'écran de la fenêtre "Avancé" avec UTF-8 sélectionné -->

### 2.5 Finaliser l'export
- Cliquer sur **Suivant**
- Nommer le fichier **`Catalogue`** et changer l'extension en **`.csv`**
- Cliquer sur **Terminé**

<!-- ILLUSTRATION : capture d'écran du champ de nom de fichier avec "Catalogue.csv" -->

---

## Étape 3 — Mettre en ligne le fichier via FileZilla

- Ouvrir **FileZilla** et se connecter au serveur
- Naviguer vers le répertoire cible sur le serveur
- Glisser-déposer le fichier `Catalogue.csv` depuis le panneau local vers le panneau distant
- Confirmer le remplacement si le fichier existe déjà

<!-- ILLUSTRATION : capture d'écran FileZilla avec le fichier Catalogue.csv en cours de transfert -->

> ✅ Le catalogue est maintenant à jour sur le site.

---

## Résumé des points critiques

| Point | Détail |
|---|---|
| Encodage | UTF-8 obligatoire |
| Délimiteur | Point-virgule `;` |
| Nom du fichier | `Catalogue.csv` (respecter la casse) |
| Première ligne | Noms des champs inclus |
| Contenu | Uniquement les produits du catalogue |
