export interface InsurerData {
  slug: string;
  name: string;
  fullName: string;
  parentCompany?: string;
  logo: string;
  type: "delegation" | "groupe" | "mutualiste";
  typeLabel: string;
  rating: number;

  metaTitle: string;
  metaDescription: string;

  heroTitle: string;
  heroSubtitle: string;

  overviewTitle: string;
  overviewText: string;

  startingRate: string;
  rateLabel: string;
  keyFacts: Array<{ label: string; value: string }>;

  pros: string[];
  cons: string[];

  rateGrid: Array<{ profile: string; rate: string; monthlyExample: string }>;

  guarantees: Array<{
    name: string;
    included: boolean;
    detail: string;
  }>;

  vsGroupRate: string;
  vsGroupSavings: string;
  vsGroupText: string;
  vsGroupComparison: {
    scenario: string;
    groupRate: string;
    groupMonthly: string;
    groupTotal: string;
    insurerRate: string;
    insurerMonthly: string;
    insurerTotal: string;
    savings: string;
  };

  faq: Array<{ question: string; answer: string }>;

  relatedInsurers: string[];
  relatedProfiles: string[];
  relatedBanks: string[];

  ctaTitle: string;
  ctaSubtitle: string;
}

export const INSURERS: InsurerData[] = [
  {
    slug: "april",
    name: "April",
    fullName: "April",
    type: "delegation",
    typeLabel: "Assureur en d\u00e9l\u00e9gation",
    rating: 4,
    logo: "/logos/insurers/april.png",

    metaTitle:
      "Avis April Assurance Emprunteur 2026 : Tarifs, Garanties, Notre Analyse",
    metaDescription:
      "April assurance emprunteur : taux d\u00e8s 0,08%, sp\u00e9cialiste des profils \u00e0 risque, souscription 100% en ligne. Notre avis complet et comparatif.",

    heroTitle: "April assurance emprunteur : notre avis complet",
    heroSubtitle:
      "April est l'un des assureurs en d\u00e9l\u00e9gation les plus comp\u00e9titifs du march\u00e9 fran\u00e7ais. Taux \u00e0 partir de 0,08%, souscription 100% en ligne, sp\u00e9cialiste des risques aggrav\u00e9s. Voici notre analyse d\u00e9taill\u00e9e.",

    overviewTitle: "April en bref : qui est cet assureur ?",
    overviewText:
      "April est un groupe d'assurance lyonnais fond\u00e9 en 1988, cot\u00e9 en bourse jusqu'en 2019. C'est l'un des pionniers de la d\u00e9l\u00e9gation d'assurance emprunteur en France.\n\nLeur point fort, c'est la souplesse. L\u00e0 o\u00f9 les contrats groupe appliquent le m\u00eame taux \u00e0 tout le monde, April personnalise en fonction de votre \u00e2ge, votre sant\u00e9, votre profession. R\u00e9sultat : si vous \u00eates jeune, en bonne sant\u00e9, non-fumeur, vous obtenez un taux 3 \u00e0 4 fois inf\u00e9rieur \u00e0 celui de votre banque.\n\nApril est aussi reconnu pour son expertise sur les profils atypiques. Risques aggrav\u00e9s de sant\u00e9, professions \u00e0 risque, seniors : leur \u00e9quipe m\u00e9dicale \u00e9tudie chaque dossier individuellement au lieu d'appliquer des grilles automatiques. C'est un vrai avantage si vous avez un ant\u00e9c\u00e9dent de sant\u00e9.\n\nLa souscription est 100% en ligne, le processus est rapide (r\u00e9ponse sous 48h pour les dossiers simples), et le service client est bien not\u00e9. C'est l'un des rares assureurs o\u00f9 vous pouvez souscrire sans parler \u00e0 un commercial.",

    startingRate: "0,08%",
    rateLabel: "\u00c0 partir de",
    keyFacts: [
      { label: "Ann\u00e9e de cr\u00e9ation", value: "1988" },
      { label: "Souscription", value: "100% en ligne" },
      { label: "D\u00e9lai de r\u00e9ponse", value: "24-48h" },
      { label: "Sp\u00e9cialit\u00e9", value: "Risques aggrav\u00e9s" },
    ],

    pros: [
      "Taux parmi les plus bas du march\u00e9 pour les profils standard (d\u00e8s 0,08%)",
      "Sp\u00e9cialiste reconnu des risques aggrav\u00e9s de sant\u00e9, \u00e9tude individuelle de chaque dossier",
      "Souscription 100% en ligne, r\u00e9ponse sous 24-48h pour les dossiers simples",
      "D\u00e9finition ITT professionnelle disponible (pas seulement fonctionnelle)",
      "Pas de limite d'\u00e2ge stricte pour la souscription, \u00e9tude au cas par cas",
    ],
    cons: [
      "Service client parfois lent sur les dossiers complexes (risques aggrav\u00e9s = 2 \u00e0 4 semaines)",
      "Les taux les plus bas sont r\u00e9serv\u00e9s aux profils sans aucun facteur de risque",
      "Pas de couverture perte d'emploi dans l'offre standard",
    ],

    rateGrid: [
      {
        profile: "25-35 ans, non-fumeur",
        rate: "0,08%",
        monthlyExample: "13\u20ac/mois",
      },
      {
        profile: "35-45 ans, non-fumeur",
        rate: "0,12%",
        monthlyExample: "20\u20ac/mois",
      },
      {
        profile: "45-55 ans, non-fumeur",
        rate: "0,22%",
        monthlyExample: "37\u20ac/mois",
      },
      {
        profile: "55-65 ans, non-fumeur",
        rate: "0,38%",
        monthlyExample: "63\u20ac/mois",
      },
      {
        profile: "25-35 ans, fumeur",
        rate: "0,15%",
        monthlyExample: "25\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Capital restant d\u00fb rembours\u00e9 int\u00e9gralement",
      },
      {
        name: "PTIA (Perte Totale et Irr\u00e9versible d'Autonomie)",
        included: true,
        detail: "Remboursement int\u00e9gral du capital",
      },
      {
        name: "ITT (Incapacit\u00e9 Temporaire de Travail)",
        included: true,
        detail:
          "Prise en charge des mensualit\u00e9s. Franchise 30, 60 ou 90 jours au choix",
      },
      {
        name: "IPT (Invalidit\u00e9 Permanente Totale)",
        included: true,
        detail:
          "Taux d'invalidit\u00e9 \u2265 66%. Remboursement int\u00e9gral",
      },
      {
        name: "IPP (Invalidit\u00e9 Permanente Partielle)",
        included: true,
        detail:
          "Taux d'invalidit\u00e9 33-66%. Remboursement proportionnel",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Non disponible dans l'offre standard",
      },
    ],

    vsGroupRate: "0,38% \u00e0 0,46%",
    vsGroupSavings: "8 000 \u00e0 15 000\u20ac",
    vsGroupText:
      "En moyenne, un emprunteur de 30-40 ans qui passe du contrat groupe de sa banque \u00e0 April \u00e9conomise entre 8 000 et 15 000\u20ac sur la dur\u00e9e totale de son pr\u00eat. Le taux passe de 0,38-0,46% (groupe) \u00e0 0,08-0,15% (April), soit une division par 3 \u00e0 4. Les garanties sont \u00e9quivalentes voire sup\u00e9rieures. April propose la d\u00e9finition ITT professionnelle que la plupart des contrats groupe n'incluent pas.",
    vsGroupComparison: {
      scenario: "Emprunteur 35 ans, non-fumeur, prêt de 200 000€ sur 20 ans",
      groupRate: "0,42%",
      groupMonthly: "70€",
      groupTotal: "16 800€",
      insurerRate: "0,12%",
      insurerMonthly: "20€",
      insurerTotal: "4 800€",
      savings: "12 000€",
    },

    faq: [
      {
        question: "April est-il fiable pour l'assurance emprunteur ?",
        answer:
          "Oui. April est un groupe d'assurance \u00e9tabli depuis 1988, r\u00e9gul\u00e9 par l'ACPR. C'est l'un des leaders de la d\u00e9l\u00e9gation d'assurance en France avec plusieurs centaines de milliers de contrats actifs. Leur solidit\u00e9 financi\u00e8re n'est pas en question.",
      },
      {
        question:
          "Quel est le taux April pour un emprunteur de 30 ans ?",
        answer:
          "Pour un emprunteur de 30 ans, non-fumeur, en bonne sant\u00e9, le taux April d\u00e9marre \u00e0 0,08% du capital emprunt\u00e9. Sur un pr\u00eat de 200 000\u20ac sur 20 ans, cela repr\u00e9sente environ 13\u20ac/mois, soit 3 120\u20ac sur la dur\u00e9e totale, contre 12 000 \u00e0 18 000\u20ac en contrat groupe bancaire.",
      },
      {
        question:
          "April accepte-t-il les profils \u00e0 risque aggrav\u00e9 ?",
        answer:
          "Oui, c'est m\u00eame leur sp\u00e9cialit\u00e9. April dispose d'une \u00e9quipe m\u00e9dicale d\u00e9di\u00e9e qui \u00e9tudie chaque dossier individuellement. Les surprimes appliqu\u00e9es sont souvent inf\u00e9rieures \u00e0 celles des contrats groupe. Pour les cancers en r\u00e9mission, le droit \u00e0 l'oubli (5 ans) s'applique.",
      },
      {
        question:
          "Combien de temps prend la souscription chez April ?",
        answer:
          "Pour un dossier simple (pas de risque aggrav\u00e9), la r\u00e9ponse arrive sous 24-48h et la souscription est 100% en ligne. Pour un dossier avec questionnaire m\u00e9dical d\u00e9taill\u00e9, comptez 2 \u00e0 4 semaines, des examens compl\u00e9mentaires peuvent \u00eatre demand\u00e9s.",
      },
    ],

    relatedInsurers: ["generali", "swisslife"],
    relatedProfiles: [
      "jeune-emprunteur",
      "risque-aggrave",
      "profession-risque",
    ],
    relatedBanks: ["credit-agricole", "bnp-paribas"],

    ctaTitle: "Comparer April avec les autres assureurs",
    ctaSubtitle:
      "Simulez votre \u00e9conomie et d\u00e9couvrez si April est le meilleur choix pour votre profil.",
  },
  {
    slug: "cardif",
    name: "Cardif",
    fullName: "Cardif (BNP Paribas)",
    parentCompany: "BNP Paribas",
    type: "groupe",
    typeLabel: "Assurance groupe bancaire",
    rating: 3,
    logo: "/logos/insurers/cardif.png",

    metaTitle:
      "Avis Cardif Assurance Emprunteur 2026 : Faut-il Changer ?",
    metaDescription:
      "Cardif (BNP Paribas) assurance emprunteur : taux moyen 0,45%, contrat groupe mutualis\u00e9. Faut-il changer ? Notre analyse et comparatif.",

    heroTitle:
      "Cardif (BNP Paribas) assurance emprunteur : faut-il changer ?",
    heroSubtitle:
      "Cardif est la filiale assurance de BNP Paribas. C'est le contrat groupe propos\u00e9 par d\u00e9faut \u00e0 tous les emprunteurs BNP. Avec un taux moyen de 0,45%, il est 3 \u00e0 4 fois plus cher que les meilleurs contrats en d\u00e9l\u00e9gation. Voici notre analyse.",

    overviewTitle: "Cardif : l'assureur derri\u00e8re BNP Paribas",
    overviewText:
      "BNP Paribas Cardif est l'un des plus gros assureurs emprunteur au monde. Filiale de BNP Paribas, elle g\u00e8re les contrats groupe de la banque. Si vous avez un pr\u00eat BNP, votre assurance est probablement chez Cardif.\n\nLe contrat groupe Cardif fonctionne sur un principe de mutualisation : tous les emprunteurs BNP paient un taux similaire, ind\u00e9pendamment de leur \u00e2ge ou de leur \u00e9tat de sant\u00e9. C'est avantageux si vous \u00eates un profil \u00e0 risque (senior, fumeur, ant\u00e9c\u00e9dents m\u00e9dicaux) mais d\u00e9savantageux si vous \u00eates jeune et en bonne sant\u00e9. Vous subventionnez les autres.\n\nLe taux moyen du contrat groupe Cardif se situe autour de 0,45% du capital emprunt\u00e9. En d\u00e9l\u00e9gation, un profil standard de 30-40 ans peut obtenir 0,10-0,15%, soit 3 \u00e0 4 fois moins cher.\n\nCardif propose aussi un contrat en d\u00e9l\u00e9gation (Cardif Libert\u00e9) qui est paradoxalement moins cher que leur propre contrat groupe. C'est la preuve que le contrat groupe est surtarif\u00e9 pour les bons profils.",

    startingRate: "0,45%",
    rateLabel: "Taux moyen :",
    keyFacts: [
      { label: "Maison m\u00e8re", value: "BNP Paribas" },
      { label: "Type", value: "Contrat groupe mutualis\u00e9" },
      {
        label: "Emprunteurs couverts",
        value: "Millions (France)",
      },
      {
        label: "Contrat alternatif",
        value: "Cardif Libert\u00e9 (d\u00e9l\u00e9gation)",
      },
    ],

    pros: [
      "Souscription imm\u00e9diate avec le pr\u00eat BNP, pas de d\u00e9marche suppl\u00e9mentaire",
      "Solidit\u00e9 financi\u00e8re du groupe BNP Paribas, aucun risque de d\u00e9faillance",
      "La mutualisation avantage les profils \u00e0 risque (seniors, fumeurs) qui paient moins cher que leur risque r\u00e9el",
      "Large r\u00e9seau d'agences pour le service apr\u00e8s-vente",
    ],
    cons: [
      "Taux moyen de 0,45%, 3 \u00e0 4 fois plus cher que la d\u00e9l\u00e9gation pour les bons profils",
      "Tarification mutualis\u00e9e : les jeunes non-fumeurs subventionnent les profils \u00e0 risque",
      "Pas de personnalisation des garanties (contrat standard pour tous)",
      "Peu de flexibilit\u00e9 sur la quotit\u00e9 et les options",
      "Cardif Libert\u00e9 (leur propre contrat en d\u00e9l\u00e9gation) est moins cher que le contrat groupe",
    ],

    rateGrid: [
      {
        profile: "25-35 ans (contrat groupe)",
        rate: "0,42%",
        monthlyExample: "70\u20ac/mois",
      },
      {
        profile: "35-45 ans (contrat groupe)",
        rate: "0,45%",
        monthlyExample: "75\u20ac/mois",
      },
      {
        profile: "45-55 ans (contrat groupe)",
        rate: "0,48%",
        monthlyExample: "80\u20ac/mois",
      },
      {
        profile: "55-65 ans (contrat groupe)",
        rate: "0,52%",
        monthlyExample: "87\u20ac/mois",
      },
      {
        profile: "25-35 ans (Cardif Libert\u00e9)",
        rate: "0,11%",
        monthlyExample: "18\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Couverture standard",
      },
      {
        name: "PTIA",
        included: true,
        detail: "Couverture standard",
      },
      {
        name: "ITT",
        included: true,
        detail:
          "Franchise 90 jours. D\u00e9finition fonctionnelle (pas professionnelle)",
      },
      {
        name: "IPT",
        included: true,
        detail: "Taux d'invalidit\u00e9 \u2265 66%",
      },
      {
        name: "IPP",
        included: false,
        detail: "Non incluse dans le contrat groupe standard",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Option payante, rarement avantageuse",
      },
    ],

    vsGroupRate: "0,42% \u00e0 0,52%",
    vsGroupSavings: "10 000 \u00e0 18 000\u20ac",
    vsGroupText:
      "Le contrat groupe Cardif est l'un des plus chers du march\u00e9. Un emprunteur BNP de 30 ans qui passe en d\u00e9l\u00e9gation \u00e9conomise en moyenne 10 000 \u00e0 18 000\u20ac sur un pr\u00eat de 200 000\u20ac sur 20 ans. Ironie : Cardif Libert\u00e9 (le contrat en d\u00e9l\u00e9gation de Cardif) est 3 fois moins cher que le contrat groupe Cardif.",
    vsGroupComparison: {
      scenario: "Emprunteur BNP 35 ans, non-fumeur, prêt de 200 000€ sur 20 ans",
      groupRate: "0,45%",
      groupMonthly: "75€",
      groupTotal: "18 000€",
      insurerRate: "0,11%",
      insurerMonthly: "18€",
      insurerTotal: "4 400€",
      savings: "13 600€",
    },

    faq: [
      {
        question:
          "Puis-je quitter le contrat groupe Cardif de BNP Paribas ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer \u00e0 tout moment, sans frais. BNP Paribas ne peut pas refuser si votre nouveau contrat offre des garanties au moins \u00e9quivalentes. La banque a 10 jours pour r\u00e9pondre.",
      },
      {
        question:
          "Cardif Libert\u00e9 est-il mieux que le contrat groupe Cardif ?",
        answer:
          "Oui, pour les bons profils. Cardif Libert\u00e9 est le contrat en d\u00e9l\u00e9gation de BNP Paribas Cardif. Il est individualis\u00e9 et souvent 3 fois moins cher que le contrat groupe pour un emprunteur jeune et en bonne sant\u00e9. Mais comparez-le aussi avec April et Generali, ils sont souvent encore moins chers.",
      },
      {
        question:
          "Pourquoi le contrat groupe Cardif est-il si cher ?",
        answer:
          "Parce qu'il est mutualis\u00e9. Tous les emprunteurs BNP paient un taux similaire. Les jeunes non-fumeurs en bonne sant\u00e9 paient le m\u00eame prix que les seniors fumeurs. En d\u00e9l\u00e9gation, le taux est personnalis\u00e9 : vous payez pour votre risque r\u00e9el, pas celui des autres.",
      },
      {
        question:
          "BNP Paribas peut-elle refuser mon changement d'assurance ?",
        answer:
          "Le seul motif de refus valable est la non-\u00e9quivalence de garanties. Si votre nouveau contrat couvre au moins les m\u00eames risques (v\u00e9rifiez avec la fiche standardis\u00e9e FSI), BNP ne peut pas refuser. En cas de refus abusif, vous pouvez saisir le m\u00e9diateur bancaire.",
      },
    ],

    relatedInsurers: ["april", "generali"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire"],
    relatedBanks: ["bnp-paribas"],

    ctaTitle: "Payez-vous trop cher chez Cardif ?",
    ctaSubtitle:
      "Comparez votre contrat groupe BNP avec les meilleures offres en d\u00e9l\u00e9gation.",
  },
  {
    slug: "cnp",
    name: "CNP Assurances",
    fullName: "CNP Assurances (Caisse d'\u00c9pargne, Banque Postale)",
    parentCompany: "Caisse d'\u00c9pargne, Banque Postale",
    type: "groupe",
    typeLabel: "Assurance groupe bancaire",
    rating: 3,
    logo: "/logos/insurers/cnp.png",

    metaTitle:
      "Avis CNP Assurance Emprunteur 2026 : Tarifs, Garanties, Faut-il Changer ?",
    metaDescription:
      "CNP Assurances (Caisse d'\u00c9pargne, Banque Postale) : taux moyen 0,44%, premier assureur emprunteur de France. Notre analyse et alternatives.",

    heroTitle:
      "CNP Assurances emprunteur : notre avis et alternatives",
    heroSubtitle:
      "CNP Assurances est le premier assureur emprunteur de France par le volume de contrats. C'est le contrat groupe de la Caisse d'\u00c9pargne et de La Banque Postale. Un taux moyen de 0,44% qui cache des \u00e9carts importants selon les profils.",

    overviewTitle:
      "CNP Assurances : le g\u00e9ant de l'assurance emprunteur",
    overviewText:
      "CNP Assurances est un mastodonte. Premier assureur emprunteur en France, il g\u00e8re les contrats groupe de deux grands r\u00e9seaux bancaires : la Caisse d'\u00c9pargne et La Banque Postale. Si vous avez un pr\u00eat dans l'une de ces banques, votre assurance est chez CNP.\n\nLe probl\u00e8me est le m\u00eame que chez Cardif : la mutualisation. Tout le monde paie \u00e0 peu pr\u00e8s le m\u00eame taux, quel que soit son profil. Un primo-acc\u00e9dant de 28 ans non-fumeur paie presque autant qu'un emprunteur de 55 ans avec des ant\u00e9c\u00e9dents m\u00e9dicaux.\n\nCNP a l'avantage de la solidit\u00e9. C'est un groupe adoss\u00e9 \u00e0 La Banque Postale (et donc indirectement \u00e0 l'\u00c9tat). Aucun risque de d\u00e9faillance. Mais la solidit\u00e9 ne justifie pas de payer 3 fois trop cher.\n\nLe changement est particuli\u00e8rement rentable pour les emprunteurs Caisse d'\u00c9pargne et Banque Postale jeunes. L'\u00e9cart avec la d\u00e9l\u00e9gation est parmi les plus importants du march\u00e9.",

    startingRate: "0,44%",
    rateLabel: "Taux moyen :",
    keyFacts: [
      {
        label: "Position",
        value: "1er assureur emprunteur France",
      },
      {
        label: "Banques couvertes",
        value: "Caisse d'\u00c9pargne, Banque Postale",
      },
      { label: "Type", value: "Contrat groupe mutualis\u00e9" },
      {
        label: "Actionnariat",
        value: "La Banque Postale (groupe CDC)",
      },
    ],

    pros: [
      "Premier assureur emprunteur de France, solidit\u00e9 financi\u00e8re maximale",
      "Souscription automatique avec le pr\u00eat Caisse d'\u00c9pargne ou Banque Postale",
      "La mutualisation avantage les profils \u00e0 risque",
      "R\u00e9seau d'agences dense pour le service apr\u00e8s-vente",
    ],
    cons: [
      "Taux moyen de 0,44%, significativement au-dessus du march\u00e9 en d\u00e9l\u00e9gation",
      "Tarification mutualis\u00e9e, aucune personnalisation",
      "Peu de flexibilit\u00e9 sur les garanties et les options",
      "D\u00e9finition ITT fonctionnelle seulement (pas professionnelle)",
      "Les jeunes emprunteurs sont les plus p\u00e9nalis\u00e9s par la mutualisation",
    ],

    rateGrid: [
      {
        profile: "25-35 ans (contrat groupe)",
        rate: "0,40%",
        monthlyExample: "67\u20ac/mois",
      },
      {
        profile: "35-45 ans (contrat groupe)",
        rate: "0,44%",
        monthlyExample: "73\u20ac/mois",
      },
      {
        profile: "45-55 ans (contrat groupe)",
        rate: "0,48%",
        monthlyExample: "80\u20ac/mois",
      },
      {
        profile: "55-65 ans (contrat groupe)",
        rate: "0,55%",
        monthlyExample: "92\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Couverture standard",
      },
      {
        name: "PTIA",
        included: true,
        detail: "Couverture standard",
      },
      {
        name: "ITT",
        included: true,
        detail: "Franchise 90 jours. D\u00e9finition fonctionnelle",
      },
      {
        name: "IPT",
        included: true,
        detail: "Taux d'invalidit\u00e9 \u2265 66%",
      },
      {
        name: "IPP",
        included: false,
        detail: "Non incluse dans le contrat standard",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Option payante",
      },
    ],

    vsGroupRate: "0,40% \u00e0 0,55%",
    vsGroupSavings: "8 000 \u00e0 14 000\u20ac",
    vsGroupText:
      "Les emprunteurs Caisse d'\u00c9pargne et Banque Postale qui passent en d\u00e9l\u00e9gation \u00e9conomisent en moyenne 8 000 \u00e0 14 000\u20ac sur un pr\u00eat de 200 000\u20ac sur 20 ans. L'\u00e9cart est particuli\u00e8rement important pour les moins de 40 ans non-fumeurs.",
    vsGroupComparison: {
      scenario: "Emprunteur Caisse d'Épargne 35 ans, non-fumeur, prêt de 200 000€ sur 20 ans",
      groupRate: "0,44%",
      groupMonthly: "73€",
      groupTotal: "17 600€",
      insurerRate: "0,12%",
      insurerMonthly: "20€",
      insurerTotal: "4 800€",
      savings: "12 800€",
    },

    faq: [
      {
        question:
          "Puis-je quitter CNP Assurances si j'ai un pr\u00eat Caisse d'\u00c9pargne ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer \u00e0 tout moment. Votre pr\u00eat Caisse d'\u00c9pargne reste identique, seule l'assurance change. La Caisse d'\u00c9pargne a 10 jours pour accepter ou motiver un refus.",
      },
      {
        question: "CNP Assurances est-il un mauvais assureur ?",
        answer:
          "Non, CNP est solide et fiable. Le probl\u00e8me n'est pas la qualit\u00e9 de la couverture mais le prix. La mutualisation fait que les bons profils paient trop cher. Si vous \u00eates senior ou avec un risque aggrav\u00e9, le contrat groupe CNP peut \u00eatre comp\u00e9titif. Si vous \u00eates jeune et en bonne sant\u00e9, vous payez pour les autres.",
      },
      {
        question:
          "Combien puis-je \u00e9conomiser en quittant CNP ?",
        answer:
          "Pour un emprunteur de 30-40 ans non-fumeur avec un pr\u00eat de 200 000\u20ac sur 20 ans, l'\u00e9conomie est g\u00e9n\u00e9ralement de 8 000 \u00e0 14 000\u20ac. Simulez votre cas pour avoir un chiffre pr\u00e9cis.",
      },
      {
        question:
          "La Banque Postale peut-elle refuser mon changement ?",
        answer:
          "Le seul motif de refus est la non-\u00e9quivalence de garanties. Si votre nouveau contrat couvre les m\u00eames risques, La Banque Postale ne peut pas refuser. En cas de difficult\u00e9, saisissez le m\u00e9diateur.",
      },
    ],

    relatedInsurers: ["april", "generali"],
    relatedProfiles: ["senior", "fonctionnaire"],
    relatedBanks: ["caisse-depargne", "banque-postale"],

    ctaTitle:
      "Emprunteur Caisse d'\u00c9pargne ou Banque Postale ?",
    ctaSubtitle:
      "Comparez votre contrat CNP avec les meilleures offres en d\u00e9l\u00e9gation.",
  },
  {
    slug: "generali",
    name: "Generali",
    fullName: "Generali",
    type: "delegation",
    typeLabel: "Assureur en d\u00e9l\u00e9gation",
    rating: 4,
    logo: "/logos/insurers/generali.png",

    metaTitle:
      "Avis Generali Assurance Emprunteur 2026 : Tarifs et Garanties",
    metaDescription:
      "Generali assurance emprunteur : taux d\u00e8s 0,09%, acceptation large des profils, bon rapport garanties/prix. Notre avis complet.",

    heroTitle: "Generali assurance emprunteur : notre avis complet",
    heroSubtitle:
      "Generali est un assureur international de premier plan. Taux \u00e0 partir de 0,09%, acceptation large des profils (seniors, risques aggrav\u00e9s), et un bon \u00e9quilibre entre prix et garanties. Voici notre analyse.",

    overviewTitle:
      "Generali : l'assureur international qui joue la personnalisation",
    overviewText:
      "Generali est le troisi\u00e8me assureur mondial. En assurance emprunteur fran\u00e7aise, ils se positionnent comme un acteur en d\u00e9l\u00e9gation polyvalent, comp\u00e9titif sur les profils standards et souple sur les profils atypiques.\n\nLeur avantage principal : l'acceptation large. L\u00e0 o\u00f9 certains assureurs refusent les seniors ou les risques aggrav\u00e9s, Generali \u00e9tudie la plupart des dossiers. Leur grille m\u00e9dicale est r\u00e9put\u00e9e plus favorable que la moyenne du march\u00e9.\n\nLes taux sont comp\u00e9titifs (\u00e0 partir de 0,09% pour les profils jeunes) sans \u00eatre syst\u00e9matiquement les plus bas. April affiche g\u00e9n\u00e9ralement des taux inf\u00e9rieurs de 0,01 \u00e0 0,03 point sur les moins de 40 ans. \u00c0 partir de 45 ans, Generali reprend l'avantage avec des taux de 0,20% \u00e0 0,35% quand les contrats groupe montent \u00e0 0,48% et plus.\n\nGenerali est distribu\u00e9 via les courtiers (Magnolia, Meilleurtaux, Empruntis) plut\u00f4t qu'en direct. La souscription passe donc par un interm\u00e9diaire, ce qui ajoute un conseil personnalis\u00e9 mais allonge l\u00e9g\u00e8rement le processus.",

    startingRate: "0,09%",
    rateLabel: "\u00c0 partir de",
    keyFacts: [
      { label: "Rang mondial", value: "3\u00e8me assureur mondial" },
      {
        label: "Distribution",
        value: "Via courtiers (Magnolia, Meilleurtaux)",
      },
      {
        label: "Point fort",
        value: "Acceptation large des profils",
      },
      { label: "Souscription", value: "Via courtier, 2-5 jours" },
    ],

    pros: [
      "Acceptation large des profils, seniors, risques aggrav\u00e9s, professions \u00e0 risque",
      "Taux comp\u00e9titifs d\u00e8s 0,09% pour les profils standard",
      "Solidit\u00e9 financi\u00e8re d'un groupe international (3\u00e8me assureur mondial)",
      "Bon rapport garanties/prix, couverture compl\u00e8te \u00e0 tarif contenu",
      "Distribu\u00e9 via courtiers = conseil personnalis\u00e9 inclus",
    ],
    cons: [
      "Pas le moins cher sur les profils jeunes standard (April est 0,01 \u00e0 0,03 point en dessous)",
      "Pas de souscription directe, il faut passer par un courtier",
      "Processus un peu plus long que la souscription en ligne directe (2-5 jours)",
    ],

    rateGrid: [
      {
        profile: "25-35 ans, non-fumeur",
        rate: "0,09%",
        monthlyExample: "15\u20ac/mois",
      },
      {
        profile: "35-45 ans, non-fumeur",
        rate: "0,13%",
        monthlyExample: "22\u20ac/mois",
      },
      {
        profile: "45-55 ans, non-fumeur",
        rate: "0,20%",
        monthlyExample: "33\u20ac/mois",
      },
      {
        profile: "55-65 ans, non-fumeur",
        rate: "0,35%",
        monthlyExample: "58\u20ac/mois",
      },
      {
        profile: "25-35 ans, fumeur",
        rate: "0,16%",
        monthlyExample: "27\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Capital restant d\u00fb",
      },
      {
        name: "PTIA",
        included: true,
        detail: "Remboursement int\u00e9gral",
      },
      {
        name: "ITT",
        included: true,
        detail:
          "Franchise 30, 60 ou 90 jours. D\u00e9finition professionnelle disponible",
      },
      {
        name: "IPT",
        included: true,
        detail: "Taux \u2265 66%",
      },
      {
        name: "IPP",
        included: true,
        detail: "Taux 33-66%. Remboursement proportionnel",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Non propos\u00e9e",
      },
    ],

    vsGroupRate: "0,38% \u00e0 0,46%",
    vsGroupSavings: "7 000 \u00e0 14 000\u20ac",
    vsGroupText:
      "Par rapport aux contrats groupe bancaires, Generali permet une \u00e9conomie de 7 000 \u00e0 14 000\u20ac sur un pr\u00eat standard. L'avantage est particuli\u00e8rement net pour les 45-60 ans o\u00f9 Generali combine un taux comp\u00e9titif avec une acceptation que peu d'assureurs offrent.",
    vsGroupComparison: {
      scenario: "Emprunteur 35 ans, non-fumeur, prêt de 200 000€ sur 20 ans",
      groupRate: "0,42%",
      groupMonthly: "70€",
      groupTotal: "16 800€",
      insurerRate: "0,13%",
      insurerMonthly: "22€",
      insurerTotal: "5 280€",
      savings: "11 520€",
    },

    faq: [
      {
        question:
          "Generali est-il un bon choix en assurance emprunteur ?",
        answer:
          "Oui, c'est l'un des meilleurs rapports qualit\u00e9/prix du march\u00e9. Generali n'est pas toujours le moins cher sur les profils jeunes (April peut \u00eatre un peu moins cher) mais il excelle sur les profils 40+ et les dossiers atypiques. Sa solidit\u00e9 financi\u00e8re est incontestable.",
      },
      {
        question: "Comment souscrire chez Generali ?",
        answer:
          "Generali ne vend pas en direct aux particuliers. Vous passez par un courtier : Magnolia, Meilleurtaux, Empruntis, ou d'autres. Le courtier compare Generali avec d'autres assureurs et vous recommande le meilleur contrat pour votre profil.",
      },
      {
        question:
          "Generali accepte-t-il les profils seniors ?",
        answer:
          "Oui, c'est m\u00eame l'un de ses points forts. Generali accepte les souscriptions jusqu'\u00e0 75 ans et propose des tarifs comp\u00e9titifs pour les seniors en bonne sant\u00e9. La couverture peut \u00eatre maintenue au-del\u00e0 de 80 ans selon le contrat.",
      },
      {
        question:
          "Quel est le d\u00e9lai de souscription chez Generali ?",
        answer:
          "Comptez 2 \u00e0 5 jours ouvr\u00e9s pour un dossier standard (via courtier). Les dossiers avec questionnaire m\u00e9dical d\u00e9taill\u00e9 peuvent prendre 2 \u00e0 3 semaines. C'est un peu plus long que la souscription en ligne directe chez April.",
      },
    ],

    relatedInsurers: ["april", "swisslife"],
    relatedProfiles: [
      "senior",
      "risque-aggrave",
      "investissement-locatif",
    ],
    relatedBanks: ["societe-generale", "credit-mutuel"],

    ctaTitle:
      "Generali est-il le meilleur choix pour votre profil ?",
    ctaSubtitle:
      "Comparez Generali avec les autres assureurs en 2 minutes.",
  },
  {
    slug: "macif",
    name: "Macif",
    fullName: "Macif",
    type: "mutualiste",
    typeLabel: "Assureur mutualiste",
    rating: 4,
    logo: "/logos/insurers/macif.png",

    metaTitle:
      "Avis Macif Assurance Emprunteur 2026 : Tarifs, Garanties, Notre Analyse",
    metaDescription:
      "Macif assurance emprunteur : mutuelle de confiance, taux d\u00e8s 0,15%, bon service client. Notre avis complet et comparatif avec la d\u00e9l\u00e9gation.",

    heroTitle: "Macif assurance emprunteur : notre avis complet",
    heroSubtitle:
      "La Macif est une mutuelle r\u00e9put\u00e9e pour sa proximit\u00e9 et son service client. En assurance emprunteur, ses taux d\u00e9marrent \u00e0 0,15%. Comp\u00e9titifs pour une mutuelle, mais pas toujours les plus bas du march\u00e9. Voici notre analyse.",

    overviewTitle: "Macif : la mutuelle de confiance",
    overviewText:
      "La Macif est l'une des mutuelles pr\u00e9f\u00e9r\u00e9es des Fran\u00e7ais. Fond\u00e9e en 1960, elle assure plus de 5 millions de soci\u00e9taires. En assurance emprunteur, elle se positionne comme une alternative de confiance aux assureurs en d\u00e9l\u00e9gation pure.\n\nSon point fort : le service client. La Macif est r\u00e9guli\u00e8rement class\u00e9e parmi les meilleurs assureurs en termes de satisfaction client. Pour les emprunteurs qui veulent une interlocution humaine et un accompagnement de proximit\u00e9, c'est un vrai avantage.\n\nC\u00f4t\u00e9 tarif, la Macif est comp\u00e9titive par rapport aux contrats groupe bancaires (nettement moins cher) mais environ 0,05 \u00e0 0,07 point au-dessus des pure players en d\u00e9l\u00e9gation comme April (0,08%) ou Suravenir (0,09%). Le taux Macif d\u00e9marre \u00e0 0,15% pour les profils les plus favorables.\n\nLa Macif convient particuli\u00e8rement aux emprunteurs qui privil\u00e9gient la confiance et le service plut\u00f4t que le prix le plus bas. Si votre priorit\u00e9 est d'\u00e9conomiser le maximum, April ou Generali seront probablement moins chers.",

    startingRate: "0,15%",
    rateLabel: "\u00c0 partir de",
    keyFacts: [
      { label: "Fond\u00e9e en", value: "1960" },
      { label: "Soci\u00e9taires", value: "5+ millions" },
      {
        label: "Type",
        value: "Mutuelle (pas de but lucratif)",
      },
      {
        label: "Point fort",
        value: "Service client, proximit\u00e9",
      },
    ],

    pros: [
      "Mutuelle de confiance, satisfaction client \u00e9lev\u00e9e",
      "Pas de but lucratif, les b\u00e9n\u00e9fices sont redistribu\u00e9s aux soci\u00e9taires",
      "Nettement moins cher que les contrats groupe bancaires",
      "Bon accompagnement humain et r\u00e9seau d'agences",
      "Couverture solide avec de bonnes garanties",
    ],
    cons: [
      "Taux \u00e0 partir de 0,15%, plus cher que les pure players (April \u00e0 0,08%, Generali \u00e0 0,09%)",
      "Souscription moins digitalis\u00e9e que les concurrents en ligne",
      "Moins de souplesse sur les dossiers atypiques que les sp\u00e9cialistes (April, MetLife)",
    ],

    rateGrid: [
      {
        profile: "25-35 ans, non-fumeur",
        rate: "0,15%",
        monthlyExample: "25\u20ac/mois",
      },
      {
        profile: "35-45 ans, non-fumeur",
        rate: "0,20%",
        monthlyExample: "33\u20ac/mois",
      },
      {
        profile: "45-55 ans, non-fumeur",
        rate: "0,30%",
        monthlyExample: "50\u20ac/mois",
      },
      {
        profile: "55-65 ans, non-fumeur",
        rate: "0,45%",
        monthlyExample: "75\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Couverture compl\u00e8te",
      },
      {
        name: "PTIA",
        included: true,
        detail: "Couverture compl\u00e8te",
      },
      {
        name: "ITT",
        included: true,
        detail:
          "Franchise 90 jours. D\u00e9finition professionnelle disponible",
      },
      {
        name: "IPT",
        included: true,
        detail: "Taux \u2265 66%",
      },
      {
        name: "IPP",
        included: true,
        detail: "Selon contrat",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Non propos\u00e9e en standard",
      },
    ],

    vsGroupRate: "0,38% \u00e0 0,46%",
    vsGroupSavings: "4 000 \u00e0 10 000\u20ac",
    vsGroupText:
      "Par rapport aux contrats groupe bancaires, la Macif permet une \u00e9conomie de 4 000 \u00e0 10 000\u20ac. C'est moins que les pure players en d\u00e9l\u00e9gation (8 000 \u00e0 15 000\u20ac avec April ou Generali) mais avec un service client et un accompagnement sup\u00e9rieurs.",
    vsGroupComparison: {
      scenario: "Emprunteur 35 ans, non-fumeur, prêt de 200 000€ sur 20 ans",
      groupRate: "0,42%",
      groupMonthly: "70€",
      groupTotal: "16 800€",
      insurerRate: "0,20%",
      insurerMonthly: "33€",
      insurerTotal: "7 920€",
      savings: "8 880€",
    },

    faq: [
      {
        question:
          "La Macif est-elle comp\u00e9titive en assurance emprunteur ?",
        answer:
          "Oui, par rapport aux contrats groupe bancaires. La Macif est nettement moins ch\u00e8re que votre banque. En revanche, les pure players en d\u00e9l\u00e9gation (April, Generali, Suravenir) sont souvent un peu moins chers. La Macif compense par un meilleur service client et accompagnement.",
      },
      {
        question:
          "Faut-il \u00eatre soci\u00e9taire Macif pour souscrire ?",
        answer:
          "Non, l'assurance emprunteur Macif est ouverte \u00e0 tous, pas seulement aux soci\u00e9taires. Cependant, \u00eatre soci\u00e9taire peut donner acc\u00e8s \u00e0 des tarifs pr\u00e9f\u00e9rentiels sur d'autres produits.",
      },
      {
        question:
          "Macif ou April pour l'assurance emprunteur ?",
        answer:
          "April est g\u00e9n\u00e9ralement moins cher (taux d\u00e8s 0,08% vs 0,15% chez Macif). Mais la Macif offre un meilleur accompagnement humain et un r\u00e9seau d'agences. Si le prix est votre priorit\u00e9, April. Si le service et la confiance comptent autant que le prix, Macif.",
      },
      {
        question:
          "Comment souscrire l'assurance emprunteur Macif ?",
        answer:
          "Vous pouvez souscrire en agence, par t\u00e9l\u00e9phone, ou en ligne sur macif.fr. Le processus est un peu moins digitalis\u00e9 que chez April ou Generali mais l'accompagnement est plus personnalis\u00e9.",
      },
    ],

    relatedInsurers: ["april", "generali"],
    relatedProfiles: ["fonctionnaire", "jeune-emprunteur"],
    relatedBanks: ["credit-agricole", "credit-mutuel"],

    ctaTitle: "La Macif est-elle le bon choix pour vous ?",
    ctaSubtitle:
      "Comparez la Macif avec les autres assureurs pour trouver le meilleur tarif.",
  },
  {
    slug: "swisslife",
    name: "SwissLife",
    fullName: "SwissLife",
    type: "delegation",
    typeLabel: "Assureur en d\u00e9l\u00e9gation",
    rating: 4,
    logo: "/logos/insurers/swisslife.png",

    metaTitle:
      "Avis SwissLife Assurance Emprunteur 2026 : Sp\u00e9cialiste Seniors et Cadres",
    metaDescription:
      "SwissLife assurance emprunteur : taux d\u00e8s 0,11%, sp\u00e9cialiste des profils seniors et cadres, couverture au-del\u00e0 de 70 ans. Notre avis.",

    heroTitle:
      "SwissLife assurance emprunteur : notre avis complet",
    heroSubtitle:
      "SwissLife se distingue sur un segment pr\u00e9cis : les seniors et les cadres. Taux \u00e0 partir de 0,11%, couverture possible au-del\u00e0 de 70 ans, et une expertise reconnue sur les profils patrimoniaux. Voici notre analyse.",

    overviewTitle:
      "SwissLife : le sp\u00e9cialiste des profils patrimoniaux",
    overviewText:
      "SwissLife est un assureur suisse fond\u00e9 en 1857, l'un des plus anciens d'Europe. En France, ils se sont positionn\u00e9s sur un cr\u00e9neau sp\u00e9cifique : les profils patrimoniaux. Cadres sup\u00e9rieurs, professions lib\u00e9rales, investisseurs, seniors ais\u00e9s.\n\nLeur avantage d\u00e9cisif, c'est la couverture des seniors. L\u00e0 o\u00f9 la plupart des assureurs fixent une limite de souscription \u00e0 65-70 ans, SwissLife accepte les profils au-del\u00e0 de 70 ans et maintient la couverture jusqu'\u00e0 85 ans voire plus. Pour un emprunteur senior, c'est souvent le seul choix viable en dehors du contrat groupe.\n\nLes taux sont comp\u00e9titifs sans \u00eatre les plus bas. \u00c0 partir de 0,11% pour les profils jeunes. SwissLife ne cherche pas \u00e0 \u00eatre le moins cher sur les 25-35 ans (April et Suravenir sont souvent moins chers) mais excelle sur les 50+ o\u00f9 sa tarification devient tr\u00e8s agressive.\n\nLa souscription passe par des courtiers sp\u00e9cialis\u00e9s ou des conseillers en gestion de patrimoine (CGP). C'est un processus plus premium, moins mass-market, qui convient aux profils qui veulent un accompagnement sur-mesure.",

    startingRate: "0,11%",
    rateLabel: "\u00c0 partir de",
    keyFacts: [
      { label: "Fond\u00e9e en", value: "1857 (Suisse)" },
      {
        label: "Sp\u00e9cialit\u00e9",
        value: "Seniors et cadres",
      },
      {
        label: "\u00c2ge limite souscription",
        value: "Au-del\u00e0 de 70 ans",
      },
      { label: "Distribution", value: "Courtiers et CGP" },
    ],

    pros: [
      "Sp\u00e9cialiste des profils seniors, couverture possible au-del\u00e0 de 70 ans",
      "Tarification tr\u00e8s comp\u00e9titive sur les 50+ ans",
      "Solidit\u00e9 financi\u00e8re d'un groupe suisse centenaire",
      "Adapt\u00e9 aux profils patrimoniaux (cadres, professions lib\u00e9rales, investisseurs)",
      "Garanties personnalisables et couverture haut de gamme",
    ],
    cons: [
      "Pas le moins cher sur les profils jeunes (25-35 ans), April et Suravenir sont souvent mieux plac\u00e9s",
      "Souscription uniquement via courtier ou CGP, pas de canal direct",
      "Processus de souscription plus long (orientation premium)",
      "Moins connu du grand public que les assureurs grand public",
    ],

    rateGrid: [
      {
        profile: "25-35 ans, non-fumeur",
        rate: "0,11%",
        monthlyExample: "18\u20ac/mois",
      },
      {
        profile: "35-45 ans, non-fumeur",
        rate: "0,15%",
        monthlyExample: "25\u20ac/mois",
      },
      {
        profile: "45-55 ans, non-fumeur",
        rate: "0,22%",
        monthlyExample: "37\u20ac/mois",
      },
      {
        profile: "55-65 ans, non-fumeur",
        rate: "0,33%",
        monthlyExample: "55\u20ac/mois",
      },
      {
        profile: "65-75 ans, non-fumeur",
        rate: "0,50%",
        monthlyExample: "83\u20ac/mois",
      },
    ],

    guarantees: [
      {
        name: "D\u00e9c\u00e8s",
        included: true,
        detail: "Sans limite d'\u00e2ge dans certains contrats",
      },
      {
        name: "PTIA",
        included: true,
        detail: "Couverture maintenue au-del\u00e0 de 70 ans",
      },
      {
        name: "ITT",
        included: true,
        detail:
          "Franchise modulable. D\u00e9finition professionnelle disponible",
      },
      {
        name: "IPT",
        included: true,
        detail: "Taux \u2265 66%",
      },
      {
        name: "IPP",
        included: true,
        detail: "Selon contrat",
      },
      {
        name: "Perte d'emploi",
        included: false,
        detail: "Non propos\u00e9e",
      },
    ],

    vsGroupRate: "0,38% \u00e0 0,46%",
    vsGroupSavings: "5 000 \u00e0 12 000\u20ac",
    vsGroupText:
      "Pour les profils jeunes, l'\u00e9conomie vs le contrat groupe est de 5 000 \u00e0 12 000\u20ac, moins qu'April car le taux de base est un peu plus \u00e9lev\u00e9. Mais pour les 55+ ans, SwissLife devient souvent le meilleur choix car les contrats groupe montent \u00e0 0,80-1,20% tandis que SwissLife reste \u00e0 0,33-0,50%.",
    vsGroupComparison: {
      scenario: "Emprunteur 55 ans, non-fumeur, prêt de 150 000€ sur 15 ans",
      groupRate: "0,80%",
      groupMonthly: "100€",
      groupTotal: "18 000€",
      insurerRate: "0,33%",
      insurerMonthly: "41€",
      insurerTotal: "7 425€",
      savings: "10 575€",
    },

    faq: [
      {
        question:
          "SwissLife est-il le meilleur choix pour les seniors ?",
        answer:
          "Souvent, oui. SwissLife est l'un des rares assureurs \u00e0 accepter les souscriptions au-del\u00e0 de 70 ans et \u00e0 maintenir une tarification comp\u00e9titive pour les 55+. Comparez quand m\u00eame avec Generali et April qui acceptent aussi les seniors, mais avec des limites d'\u00e2ge parfois plus basses.",
      },
      {
        question:
          "Quel est le taux SwissLife pour un senior de 65 ans ?",
        answer:
          "Pour un senior de 65 ans, non-fumeur, en bonne sant\u00e9, le taux SwissLife est g\u00e9n\u00e9ralement autour de 0,50%. C'est bien en dessous des contrats groupe bancaires qui montent \u00e0 0,80-1,20% \u00e0 cet \u00e2ge. Sur un pr\u00eat de 150 000\u20ac sur 10 ans, l'\u00e9conomie est significative.",
      },
      {
        question: "Comment souscrire chez SwissLife ?",
        answer:
          "SwissLife ne vend pas en direct. Vous passez par un courtier (Magnolia, Meilleurtaux) ou un conseiller en gestion de patrimoine (CGP). Le courtier compare SwissLife avec d'autres assureurs et vous recommande le meilleur contrat.",
      },
      {
        question:
          "SwissLife est-il adapt\u00e9 aux jeunes emprunteurs ?",
        answer:
          "SwissLife est comp\u00e9titif mais pas le moins cher pour les 25-35 ans. April (0,08%) et Suravenir (0,09%) sont souvent mieux plac\u00e9s sur ce segment. SwissLife prend l'avantage \u00e0 partir de 45-50 ans.",
      },
    ],

    relatedInsurers: ["april", "generali"],
    relatedProfiles: [
      "senior",
      "investissement-locatif",
      "expatrie",
    ],
    relatedBanks: ["bnp-paribas", "societe-generale"],

    ctaTitle: "SwissLife est-il adapt\u00e9 \u00e0 votre profil ?",
    ctaSubtitle:
      "Comparez SwissLife avec les autres assureurs en 2 minutes.",
  },
];
