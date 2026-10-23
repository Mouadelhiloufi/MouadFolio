# Mouad El Hiloufi — Portfolio

Portfolio de **Mouad El Hiloufi**, développeur Full Stack (Java / Spring Boot, Laravel, PHP, React) en formation à YouCode Safi (UM6P).

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Présentation, formation, expérience, compétences, méthodes de travail, langues et centres d'intérêt |
| `/works` | Projets GitHub filtrables (Java / Spring, Laravel, PHP, Front-end) |
| `/contact` | Formulaire de contact (EmailJS) |

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Router · EmailJS

## Lancer le projet

```bash
npm install
cp .env.example .env   # puis remplir les clés EmailJS (voir plus bas)
npm run dev            # http://localhost:5173
npm run build          # build de production dans dist/
npm run lint
```

---

## Configurer EmailJS (formulaire de contact)

Le formulaire de la page `/contact` envoie les messages directement depuis le navigateur grâce à
[EmailJS](https://www.emailjs.com) — pas besoin de serveur. Le plan gratuit permet 200 emails par mois.

> ⚠️ Utilisez **votre propre compte** EmailJS. Si les clés d'un autre compte sont configurées,
> les messages des visiteurs arriveront chez quelqu'un d'autre.

### 1. Créer le compte

Inscrivez-vous sur https://dashboard.emailjs.com/sign-up avec `mouad.elhiloufi4@gmail.com`.

### 2. Ajouter un service email → `VITE_EMAILJS_SERVICE_ID`

1. Menu **Email Services** → **Add New Service** → **Gmail**.
2. Cliquez sur **Connect Account**, choisissez votre compte Gmail et autorisez l'envoi.
3. **Create Service**. Copiez le **Service ID** (ex. `service_abc123`).

### 3. Créer le modèle d'email → `VITE_EMAILJS_TEMPLATE_ID`

Menu **Email Templates** → **Create New Template**, puis remplissez :

| Champ | Valeur |
|-------|--------|
| **Subject** | `Portfolio — {{subject}}` |
| **To Email** | `mouad.elhiloufi4@gmail.com` |
| **From Name** | `{{name}}` |
| **Reply To** | `{{email}}` |

**Content** :

```
Nouveau message depuis le portfolio

Nom : {{name}}
Email : {{email}}
Sujet : {{subject}}

{{message}}
```

Les variables `{{name}}`, `{{email}}`, `{{subject}}` et `{{message}}` doivent avoir **exactement** ces noms :
ce sont les attributs `name` des champs du formulaire dans `src/pages/Contact.jsx`.
Grâce à **Reply To**, il suffit de cliquer sur « Répondre » dans Gmail pour écrire au visiteur.

**Save**, puis copiez le **Template ID** (ex. `template_xyz789`).

### 4. Récupérer la clé publique → `VITE_EMAILJS_PUBLIC_KEY`

Menu **Account** → onglet **General** → **Public Key** (ex. `AbCdEfGh123456789`).

### 5. Sécuriser le compte (recommandé)

Menu **Account** → **Security** :

- **Allowed origins / domains** : ajoutez l'URL du site (ex. `https://mouadfolio.vercel.app`) et
  `http://localhost:5173` pour le développement. Personne ne pourra utiliser vos clés depuis un autre site.
- Activez la protection anti-spam (CAPTCHA) si vous recevez des messages indésirables.

La clé publique est faite pour être visible dans le navigateur ; la **Private Key** ne doit jamais être mise dans ce projet.

### 6. Renseigner les clés

**En local** — fichier `.env` à la racine (déjà ignoré par Git) :

```
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGh123456789
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

Redémarrez `npm run dev` après chaque modification du `.env` (Vite ne lit ce fichier qu'au démarrage).

**Sur Vercel** — *Project → Settings → Environment Variables* : ajoutez les 3 mêmes variables
(environnements Production et Preview), puis **Redeploy**. Sans cette étape, le formulaire affiche
« Oups ! Une erreur est survenue » en production.

### 7. Tester

Ouvrez `/contact`, envoyez un message de test et vérifiez votre boîte Gmail (et les spams la première fois).
En cas d'erreur, ouvrez la console du navigateur (F12) : le détail s'affiche après `EmailJS Error:`.

| Erreur | Cause probable |
|--------|----------------|
| `The Public Key is invalid` | `VITE_EMAILJS_PUBLIC_KEY` vide ou incorrecte, ou serveur non redémarré |
| `The service ID is invalid` / `template ID not found` | mauvais ID, ou variables absentes sur Vercel |
| `403` / origin not allowed | le domaine du site n'est pas dans *Allowed origins* |
| Email reçu mais champs vides | noms de variables du modèle différents de `name`, `email`, `subject`, `message` |

---

## Déployer sur Vercel

1. https://vercel.com/new → importer le dépôt GitHub qui héberge ce code (actuellement `ISTIFANO/Mouadfolio`).
2. Framework : **Vite** (détecté automatiquement). Build : `npm run build`, dossier : `dist`.
3. Ajouter les 3 variables EmailJS (étape 6), puis **Deploy**.
4. `vercel.json` redirige toutes les routes vers `index.html` : `/works` et `/contact` fonctionnent au rechargement.

---

## Ce qu'il reste à compléter

- [ ] **EmailJS** : créer le compte de Mouad et renseigner les clés (sections ci-dessus), en local et sur Vercel.
- [ ] **LinkedIn** : l'URL du profil n'est pas sur le CV. Une fois connue, l'ajouter :
  - `src/components/Footer.jsx` — ajouter un lien/icône `faLinkedin` à côté de GitHub ;
  - `src/pages/Contact.jsx` — ajouter `{ icon: faLinkedin, url: '...' }` dans la liste « Retrouvez-moi sur » (et l'import `faLinkedin`).
- [ ] **URL du site** dans `index.html` : après le premier déploiement, remplacer `og:image` par l'URL complète
  (ex. `https://mouadfolio.vercel.app/mouad.jpg`) et ajouter
  `<link rel="canonical" href="https://mouadfolio.vercel.app/" />` + `<meta property="og:url" ...>`,
  sinon l'aperçu LinkedIn/WhatsApp n'affiche pas la photo.
- [ ] **Localisation** : la page contact indique « Safi, Maroc » (déduit de YouCode Safi) — à corriger si besoin dans `src/pages/Contact.jsx`.
- [ ] **FitManager** : la base de données (MySQL) est supposée — vérifier dans `src/components/works/Projects.jsx`.
- [ ] **Captures d'écran** : 11 projets utilisent une couverture générée. Remplacer par de vraies captures
  (1200 × 750 px, format `.webp`) dans `public/projects/` en gardant le même nom de fichier.
- [ ] **README des dépôts GitHub** : e-Diagnostic-Pro, subtrack, NexaBank, Coach-PRO-V3-MVC, Buy-Tickets- et Fit-manager
  n'ont pas de README, et PlayStayHome / EasyColoc gardent celui de Laravel par défaut. Les recruteurs cliquent sur « Code ».

## Mettre à jour le contenu

| Quoi | Où |
|------|----|
| Projets (titre, description, tags, démo) | `src/components/works/Projects.jsx` — images dans `public/projects/` |
| Présentation (hero) | `src/components/Hero.jsx` |
| À propos | `src/components/About.jsx` |
| Formation | `src/components/Education.jsx` |
| Expérience | `src/components/Experience.jsx` |
| Compétences | `src/components/Skills.jsx` (tableau `skillGroups`) |
| Langues & centres d'intérêt | `src/components/Interests.jsx` |
| Email / GitHub (pied de page) | `src/components/Footer.jsx` |
| CV téléchargeable | `public/Mouad_El_Hiloufi_CV.pdf` (garder ce nom) |
| Photo | `public/mouad.jpg` — favicon : `public/logo.png` |
| Titre & description Google | `index.html` |
