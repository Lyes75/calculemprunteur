// --------------------------------------------------------------------------
// profiles.ts -- Complete profile database for CalculEmprunteur.fr
// Contains all 8 borrower profiles with SEO, editorial & cross-linking data
// --------------------------------------------------------------------------

export interface ProfileFAQ {
  question: string;
  answer: string;
}

export interface RecommendedInsurer {
  name: string;
  why: string;
}

export interface ComparisonExample {
  scenario: string;
  groupRate: string;
  groupMonthly: string;
  groupTotal: string;
  delegRate: string;
  delegMonthly: string;
  delegTotal: string;
  savings: string;
}

export interface ProfileData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;

  metaTitle: string;
  metaDescription: string;

  heroTitle: string;
  heroSubtitle: string;

  contextTitle: string;
  contextText: string;

  comparisonExample: ComparisonExample;

  advantagesTitle: string;
  specificChallenges: string[];
  specificAdvantages: string[];

  recommendedInsurers: RecommendedInsurer[];

  switchTips: string;

  ctaTitle: string;
  ctaSubtitle: string;

  faq: ProfileFAQ[];

  relatedProfiles: string[];
  relatedBanks: string[];

  defaultAge?: string;
  defaultSmoker?: boolean;
}

export const PROFILES: ProfileData[] = [
  // -----------------------------------------------------------------------
  // 1. Seniors (60+)
  // -----------------------------------------------------------------------
  {
    slug: "senior",
    name: "Seniors (60+)",
    shortName: "Senior",
    icon: "shield-check",

    metaTitle:
      "Assurance Emprunteur Senior : Comparez et Économisez",
    metaDescription:
      "Assurance emprunteur après 60 ans : les taux augmentent mais des assureurs spécialisés proposent des offres compétitives. Simulez votre économie en 2 min.",

    heroTitle:
      "Assurance emprunteur senior : comment payer moins après 60 ans ?",
    heroSubtitle:
      "Après 60 ans, les taux d'assurance emprunteur augmentent fortement en contrat groupe bancaire. Pourtant, des assureurs spécialisés proposent des tarifs compétitifs sans exclusion d'âge. Simulez votre économie et découvrez les meilleures offres pour votre profil.",

    contextTitle:
      "Assurance emprunteur après 60 ans : ce que vous devez savoir",
    contextText:
      "L'âge est le premier facteur de tarification de l'assurance emprunteur. Après 60 ans, les contrats groupe bancaires appliquent des taux qui peuvent dépasser 0,80% à 1,20% du capital emprunté, contre 0,30% à 0,45% pour un emprunteur de 35 ans. Cette différence s'explique par la mutualisation : le contrat groupe ne distingue pas les profils, mais les assureurs internes ajustent les barèmes par tranche d'âge.\n\nEn délégation d'assurance, la situation est très différente. Les assureurs individuels proposent des tarifs personnalisés qui tiennent compte de votre état de santé réel, pas seulement de votre âge. Un senior de 62 ans en bonne santé, non-fumeur, peut obtenir un taux de 0,35% à 0,55% en délégation — soit 30 à 50% de moins que le contrat groupe.\n\nLa loi Lemoine s'applique pleinement aux seniors : vous pouvez changer d'assurance emprunteur à tout moment, sans frais, quel que soit votre âge. Il n'y a pas de limite d'âge pour exercer ce droit.\n\nAttention toutefois : certains contrats en délégation fixent un âge limite de souscription (70 ou 75 ans selon les assureurs) ou un âge limite de couverture (80 ou 85 ans). Vérifiez ces limites avant de souscrire.",

    comparisonExample: {
      scenario: "Senior 62 ans, non-fumeur, prêt de 150 000\u00a0\u20ac sur 12 ans",
      groupRate: "0,95\u00a0%", groupMonthly: "119\u00a0\u20ac", groupTotal: "17 100\u00a0\u20ac",
      delegRate: "0,42\u00a0%", delegMonthly: "53\u00a0\u20ac", delegTotal: "7 560\u00a0\u20ac",
      savings: "9 540\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les seniors",
    specificChallenges: [
      "Les taux d'assurance groupe augmentent fortement après 60 ans (0,80% à 1,20% vs 0,35% à 35 ans)",
      "Le questionnaire médical est plus détaillé et peut entraîner des exclusions ou surprimes",
      "Certains contrats en délégation fixent un âge limite de souscription (70 ou 75 ans)",
      "Les garanties ITT/IPT sont parfois limitées ou exclues après 65 ans",
      "La durée résiduelle du prêt est souvent plus courte, ce qui réduit l'économie absolue (mais le taux reste plus avantageux)",
    ],

    specificAdvantages: [
      "L'écart de taux entre groupe et délégation est le plus important après 60 ans — c'est là que l'économie est la plus significative en pourcentage",
      "Les assureurs en délégation évaluent votre état de santé réel, pas votre âge seul — un senior en bonne santé obtient un meilleur taux",
      "La loi Lemoine s'applique sans limite d'âge — vous pouvez changer à tout moment",
      "Certains assureurs spécialisés (Swiss Life, Generali) proposent des couvertures sans limite d'âge de souscription",
    ],

    recommendedInsurers: [
      {
        name: "Swiss Life",
        why: "Spécialiste des profils seniors et cadres. Couverture possible au-delà de 70 ans. Tarifs compétitifs pour les seniors en bonne santé.",
      },
      {
        name: "Generali",
        why: "Acceptation large des profils seniors. Bon rapport garanties/prix. Souscription possible jusqu'à 75 ans.",
      },
      {
        name: "April",
        why: "Spécialiste des risques aggravés et des profils atypiques. Étude individuelle de chaque dossier senior.",
      },
    ],

    switchTips:
      "En tant que senior, demandez systématiquement à votre nouvel assureur les limites d'âge de couverture (pas seulement de souscription). Vérifiez aussi les conditions de maintien des garanties ITT/IPT après 65 ans — certains contrats les suppriment automatiquement à cet âge. Privilégiez les contrats qui maintiennent au minimum les garanties décès et PTIA sans limite d'âge.",

    ctaTitle: "Senior : simulez votre économie en assurance emprunteur",
    ctaSubtitle: "Découvrez combien vous pouvez économiser après 60 ans. Simulation gratuite en 2\u00a0minutes.",

    faq: [
      {
        question: "Peut-on changer d'assurance emprunteur après 60 ans ?",
        answer:
          "Oui, la loi Lemoine s'applique sans aucune limite d'âge. Vous pouvez changer d'assurance emprunteur à tout moment après 60 ans, sans frais et sans justification. La seule condition est que votre nouveau contrat offre des garanties au moins équivalentes.",
      },
      {
        question:
          "Les taux d'assurance emprunteur augmentent-ils vraiment après 60 ans ?",
        answer:
          "Oui, significativement. En contrat groupe bancaire, les taux passent de 0,30-0,45% (30-40 ans) à 0,80-1,20% (60-70 ans). En délégation, l'augmentation existe aussi mais reste plus modérée : 0,35-0,55% pour un senior en bonne santé. L'écart entre groupe et délégation est donc le plus important pour les seniors.",
      },
      {
        question:
          "Y a-t-il un âge limite pour souscrire une assurance emprunteur en délégation ?",
        answer:
          "Cela dépend de l'assureur. La plupart acceptent les souscriptions jusqu'à 70-75 ans. Certains assureurs spécialisés (Swiss Life, Generali) n'ont pas de limite stricte et étudient chaque dossier individuellement. Vérifiez aussi l'âge limite de couverture, qui est différent de l'âge limite de souscription.",
      },
      {
        question: "Quelles garanties sont maintenues après 65 ans ?",
        answer:
          "Les garanties décès et PTIA sont généralement maintenues sans limite d'âge. En revanche, les garanties ITT (incapacité de travail) et IPT (invalidité) sont souvent supprimées ou limitées après 65 ans, car elles sont liées à l'activité professionnelle. Pour un senior retraité, les garanties décès et PTIA sont les plus importantes.",
      },
    ],

    relatedProfiles: [
      "risque-aggrave",
      "sans-questionnaire-medical",
      "investissement-locatif",
    ],
    relatedBanks: ["credit-agricole", "banque-postale", "caisse-depargne"],
    defaultAge: "60-70",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 2. Risque de santé aggravé
  // -----------------------------------------------------------------------
  {
    slug: "risque-aggrave",
    name: "Risque de santé aggravé",
    shortName: "Risque aggravé",
    icon: "heart",

    metaTitle:
      "Assurance Emprunteur Risque Aggravé : Solutions et Économies",
    metaDescription:
      "Diabète, cancer, VIH, dépression : la convention AERAS garantit l'accès à l'assurance emprunteur. Comparez les offres adaptées à votre situation.",

    heroTitle:
      "Assurance emprunteur et risque aggravé de santé : vos droits et solutions",
    heroSubtitle:
      "Diabète, cancer en rémission, VIH, dépression, maladie chronique : la convention AERAS et le droit à l'oubli facilitent votre accès à l'assurance emprunteur. Des assureurs spécialisés proposent des couvertures adaptées, souvent moins chères que le contrat groupe de votre banque.",

    contextTitle:
      "Assurance emprunteur et problèmes de santé : ce que la loi prévoit",
    contextText:
      "Si vous avez ou avez eu un problème de santé grave, l'assurance emprunteur peut sembler être un obstacle insurmontable. Surprimes, exclusions de garanties, refus de couverture : les difficultés sont réelles mais pas insurmontables grâce à deux dispositifs légaux majeurs.\n\nLa convention AERAS (S'Assurer et Emprunter avec un Risque Aggravé de Santé) oblige les assureurs à examiner votre dossier à trois niveaux successifs avant de prononcer un refus définitif. Elle plafonne également les surprimes à 1,4 point au-dessus du taux standard pour les revenus modestes.\n\nLe droit à l'oubli, renforcé par la loi Lemoine (2022), vous dispense de déclarer certaines pathologies après un délai de 5 ans sans rechute. Cela concerne notamment les cancers, l'hépatite C et d'autres pathologies listées dans une grille de référence régulièrement mise à jour.\n\nEn pratique, les assureurs en délégation sont souvent plus souples que les contrats groupe bancaires pour les risques aggravés. Certains (April, MetLife) sont spécialisés dans l'étude de ces profils et proposent des couvertures adaptées à des tarifs compétitifs.\n\nLa suppression du questionnaire médical (loi Lemoine) pour les prêts de moins de 200 000€ remboursés avant 60 ans est une avancée majeure pour les personnes avec un risque de santé.",

    comparisonExample: {
      scenario: "Emprunteur 45 ans, diabète type 2 stabilisé, prêt de 200 000\u00a0\u20ac sur 20 ans",
      groupRate: "0,55\u00a0%", groupMonthly: "92\u00a0\u20ac", groupTotal: "22 000\u00a0\u20ac",
      delegRate: "0,28\u00a0%", delegMonthly: "47\u00a0\u20ac", delegTotal: "11 200\u00a0\u20ac",
      savings: "10 800\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les emprunteurs avec un risque aggravé",
    specificChallenges: [
      "Les surprimes peuvent atteindre 100 à 300% du tarif standard selon la pathologie",
      "Certaines garanties (ITT, IPT) peuvent être exclues pour la pathologie déclarée",
      "Le questionnaire médical est plus détaillé et peut nécessiter des examens complémentaires",
      "Les délais de traitement du dossier sont plus longs (2 à 6 semaines vs quelques jours)",
    ],

    specificAdvantages: [
      "La convention AERAS garantit un examen de votre dossier à 3 niveaux avant tout refus",
      "Le droit à l'oubli dispense de déclarer certaines pathologies après 5 ans sans rechute",
      "La suppression du questionnaire médical (prêts < 200 000€, remboursés avant 60 ans) élimine l'obstacle pour de nombreux emprunteurs",
      "Les assureurs spécialisés (April, MetLife) obtiennent souvent de meilleurs résultats que les banques pour les risques aggravés",
    ],

    recommendedInsurers: [
      {
        name: "April",
        why: "Leader en France sur les risques aggravés de santé. Expertise reconnue dans l'étude des dossiers complexes. Souscription 100% en ligne.",
      },
      {
        name: "MetLife",
        why: "Assureur international spécialisé dans les profils à risque. Grille médicale plus souple que la plupart des concurrents français.",
      },
      {
        name: "Generali",
        why: "Acceptation large des profils. Bon track record sur les dossiers AERAS. Étude individuelle systématique.",
      },
    ],

    switchTips:
      "Si vous avez un risque aggravé de santé, ne vous contentez pas d'un seul devis. Les grilles médicales varient énormément d'un assureur à l'autre — une pathologie qui entraîne une surprime de 200% chez l'un peut n'entraîner que 50% chez un autre. Faites au minimum 3 demandes. Et vérifiez si votre pathologie est couverte par le droit à l'oubli avant de remplir le questionnaire médical.",

    ctaTitle: "Risque aggravé : découvrez vos options en assurance emprunteur",
    ctaSubtitle: "Convention AERAS, droit à l'oubli, suppression du questionnaire : simulez votre économie.",

    faq: [
      {
        question:
          "Puis-je changer d'assurance emprunteur avec un risque aggravé de santé ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer à tout moment. La convention AERAS s'applique aussi au changement, pas seulement à la souscription initiale. Un assureur en délégation peut être plus favorable que votre contrat groupe actuel, même avec un risque aggravé.",
      },
      {
        question:
          "Qu'est-ce que le droit à l'oubli en assurance emprunteur ?",
        answer:
          "Le droit à l'oubli vous dispense de déclarer certaines pathologies (cancers, hépatite C, et d'autres maladies) si vous n'avez eu aucune rechute dans les 5 ans suivant la fin du traitement. Cela signifie que l'assureur ne peut pas appliquer de surprime ou d'exclusion pour cette pathologie.",
      },
      {
        question:
          "La convention AERAS garantit-elle l'accès à l'assurance ?",
        answer:
          "La convention AERAS ne garantit pas l'obtention d'une assurance mais impose un processus d'examen à 3 niveaux. Si le premier niveau refuse, le dossier est automatiquement examiné au deuxième niveau (pool d'assureurs spécialisés), puis au troisième niveau (bureau commun) si nécessaire. Les surprimes sont plafonnées pour les revenus modestes.",
      },
      {
        question:
          "Le questionnaire médical est-il supprimé pour les risques aggravés ?",
        answer:
          "La suppression du questionnaire médical (loi Lemoine) s'applique à tous les emprunteurs dont le prêt est inférieur à 200 000€ et remboursé avant 60 ans, y compris les personnes avec un risque aggravé. Si vous remplissez ces conditions, l'assureur ne peut pas vous poser de question sur votre santé — c'est une avancée majeure pour les profils à risque.",
      },
    ],

    relatedProfiles: [
      "senior",
      "sans-questionnaire-medical",
      "profession-risque",
    ],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"],
    defaultAge: "35-50",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 3. Professions à risque
  // -----------------------------------------------------------------------
  {
    slug: "profession-risque",
    name: "Professions à risque",
    shortName: "Profession à risque",
    icon: "flame",

    metaTitle:
      "Assurance Emprunteur Profession à Risque : Comparez les Offres",
    metaDescription:
      "Militaire, policier, pompier, pilote, marin : votre profession entraîne des surprimes. Comparez les assureurs spécialisés et économisez.",

    heroTitle:
      "Assurance emprunteur et profession à risque : comment éviter les surprimes ?",
    heroSubtitle:
      "Militaire, policier, pompier, pilote, marin, ouvrier du BTP : certaines professions entraînent des surprimes ou des exclusions en assurance emprunteur. Des assureurs spécialisés couvrent ces métiers à des tarifs compétitifs.",

    contextTitle:
      "Professions à risque et assurance emprunteur : ce qui change",
    contextText:
      "Les assureurs classent les professions en catégories de risque. Les métiers comportant un danger physique (forces de l'ordre, militaires, pompiers, marins, BTP), une exposition à des matières dangereuses (chimie, nucléaire), ou des déplacements fréquents (pilotes, routiers) entraînent des surprimes qui peuvent aller de 25% à 200% du tarif standard.\n\nEn contrat groupe bancaire, ces surprimes sont souvent absorbées dans le taux mutualisé — ce qui veut dire que vous ne les voyez pas directement. Mais le taux de base est déjà élevé (0,38% à 0,46%). En délégation, la surprime est visible mais appliquée sur un taux de base bien plus bas (0,10% à 0,15%). Résultat : même avec une surprime de 50%, le contrat en délégation reste souvent moins cher que le contrat groupe.\n\nLes sports à risque pratiqués en loisir (parachutisme, plongée sous-marine, escalade, sports de combat) sont aussi concernés, même si votre profession est classique. Les assureurs distinguent la pratique professionnelle de la pratique amateur, mais les deux entraînent des surprimes.\n\nCertaines professions bénéficient de mutuelles spécialisées qui proposent des contrats emprunteur dédiés : la GMF pour les fonctionnaires de police, la MNM pour les marins, la MGEN pour les enseignants. Ces contrats méritent d'être comparés avec les offres en délégation.\n\nLa loi Lemoine s'applique indépendamment de votre profession — vous pouvez changer d'assurance à tout moment.",

    comparisonExample: {
      scenario: "Pompier 38 ans, non-fumeur, prêt de 250 000\u00a0\u20ac sur 20 ans",
      groupRate: "0,44\u00a0%", groupMonthly: "92\u00a0\u20ac", groupTotal: "22 000\u00a0\u20ac",
      delegRate: "0,18\u00a0%", delegMonthly: "38\u00a0\u20ac", delegTotal: "9 000\u00a0\u20ac",
      savings: "13 000\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les professions à risque",
    specificChallenges: [
      "Les surprimes professionnelles peuvent atteindre 25% à 200% du tarif standard",
      "Certaines activités professionnelles sont exclues des garanties ITT/IPT (interventions militaires, missions en zone de conflit)",
      "Les sports à risque en loisir (parachutisme, plongée, escalade) entraînent aussi des surprimes, même avec une profession classique",
      "Le changement de profession en cours de contrat peut modifier les conditions",
    ],

    specificAdvantages: [
      "Même avec une surprime, la délégation reste souvent moins chère que le contrat groupe (surprime sur un taux de base plus bas)",
      "Les assureurs spécialisés connaissent mieux ces métiers et appliquent des surprimes plus justes",
      "Les mutuelles professionnelles (GMF, MNM, MGEN) proposent parfois des contrats emprunteur avantageux",
      "La loi Lemoine permet de changer à tout moment, même en cas de changement de profession",
    ],

    recommendedInsurers: [
      {
        name: "April",
        why: "Large couverture des professions à risque. Étude individuelle de chaque métier. Surprimes souvent inférieures à la moyenne du marché.",
      },
      {
        name: "Generali",
        why: "Acceptation large des profils professionnels. Couverture des sports liés à la profession incluse dans certains contrats.",
      },
      {
        name: "MetLife",
        why: "Grille professionnelle détaillée avec des distinctions fines entre les métiers. Pas de surprime forfaitaire — chaque cas est évalué.",
      },
    ],

    switchTips:
      "Vérifiez précisément la liste des professions à risque chez chaque assureur — elle varie considérablement. Un pompier peut avoir une surprime de 100% chez un assureur et seulement 25% chez un autre. Demandez aussi si les activités sportives liées à votre profession (parachutisme pour les militaires, plongée pour les marins) sont couvertes ou exclues.",

    ctaTitle: "Profession à risque : comparez les assurances emprunteur adaptées",
    ctaSubtitle: "Surprimes, exclusions, couvertures spécialisées : simulez votre économie en 2\u00a0minutes.",

    faq: [
      {
        question:
          "Ma profession à risque entraîne-t-elle forcément une surprime ?",
        answer:
          "Pas forcément. Chaque assureur a sa propre classification des professions à risque. Certains métiers considérés comme risqués chez un assureur ne le sont pas chez un autre. C'est pourquoi il est essentiel de comparer au moins 3 offres. De plus, en contrat groupe bancaire, la surprime est cachée dans le taux mutualisé — vous la payez sans le savoir.",
      },
      {
        question:
          "Quelles professions sont considérées comme à risque ?",
        answer:
          "Les professions les plus couramment surtaxées sont : militaires, policiers, gendarmes, pompiers, agents de sécurité, pilotes (avion et hélicoptère), marins, pêcheurs, ouvriers du BTP, travailleurs en hauteur, manipulateurs de matières dangereuses (chimie, nucléaire), et les métiers avec des déplacements fréquents à l'étranger.",
      },
      {
        question:
          "Puis-je utiliser ma mutuelle professionnelle comme assurance emprunteur ?",
        answer:
          "Certaines mutuelles professionnelles proposent des contrats d'assurance emprunteur dédiés (GMF pour la police, MGEN pour l'éducation, MNM pour les marins). Ces contrats peuvent être compétitifs car ils sont conçus pour votre métier. Comparez-les avec les offres en délégation — parfois la mutuelle est meilleure, parfois non.",
      },
      {
        question:
          "Que se passe-t-il si je change de profession en cours de contrat ?",
        answer:
          "Si vous quittez une profession à risque pour un métier classique, vous pouvez demander une révision de votre tarif à votre assureur (ou changer d'assureur via la loi Lemoine pour obtenir un meilleur taux). À l'inverse, si vous passez à une profession plus risquée, vous devez en informer votre assureur — ne pas le faire pourrait invalider vos garanties en cas de sinistre.",
      },
    ],

    relatedProfiles: ["fonctionnaire", "expatrie", "risque-aggrave"],
    relatedBanks: ["societe-generale", "credit-mutuel", "bnp-paribas"],
    defaultAge: "30-45",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 4. Fonctionnaires
  // -----------------------------------------------------------------------
  {
    slug: "fonctionnaire",
    name: "Fonctionnaires",
    shortName: "Fonctionnaire",
    icon: "building",

    metaTitle:
      "Assurance Emprunteur Fonctionnaire : Tarifs Avantageux",
    metaDescription:
      "Fonctionnaire ? Votre statut vous donne accès à des tarifs d'assurance emprunteur avantageux. Mutuelles spécialisées (MGEN, MNH) ou délégation : comparez.",

    heroTitle:
      "Assurance emprunteur fonctionnaire : profitez de tarifs avantageux",
    heroSubtitle:
      "Agents de la fonction publique d'État, territoriale ou hospitalière : votre statut stable et votre sécurité de l'emploi sont des atouts pour obtenir les meilleurs taux d'assurance emprunteur. Mutuelles spécialisées ou délégation : comparez les offres.",

    contextTitle:
      "Pourquoi les fonctionnaires paient moins cher leur assurance emprunteur",
    contextText:
      "Le statut de fonctionnaire est l'un des profils les plus favorables en assurance emprunteur. La raison est simple : la sécurité de l'emploi réduit considérablement le risque de défaut de paiement. Les assureurs en tiennent compte dans leur tarification.\n\nEn contrat groupe bancaire, cet avantage n'apparaît pas — le taux est mutualisé et identique quel que soit votre statut professionnel. Un fonctionnaire titulaire paie le même taux qu'un intérimaire chez la même banque. C'est en délégation que la différence se fait sentir.\n\nLes fonctionnaires bénéficient aussi de mutuelles spécialisées qui proposent des contrats emprunteur dédiés : la MGEN (Éducation nationale), la MNH (hospitaliers), la MAIF, la GMF. Ces contrats sont souvent compétitifs mais ne sont pas toujours les moins chers — comparez-les systématiquement avec les offres en délégation.\n\nUn avantage spécifique des fonctionnaires : le maintien de salaire en cas d'arrêt maladie (3 mois à plein traitement, 9 mois à demi-traitement pour les titulaires) permet de supporter un délai de franchise ITT plus long (90 jours) et donc de réduire le coût de cette garantie.\n\nPrécision importante : les avantages décrits ici concernent principalement les fonctionnaires titulaires. Les contractuels et stagiaires bénéficient d'un statut moins protecteur (maintien de salaire plus court, pas de garantie d'emploi), mais restent avantagés par rapport au secteur privé en délégation.",

    comparisonExample: {
      scenario: "Enseignant 35 ans, non-fumeur, prêt de 220 000\u00a0\u20ac sur 20 ans",
      groupRate: "0,42\u00a0%", groupMonthly: "77\u00a0\u20ac", groupTotal: "18 480\u00a0\u20ac",
      delegRate: "0,11\u00a0%", delegMonthly: "20\u00a0\u20ac", delegTotal: "4 840\u00a0\u20ac",
      savings: "13 640\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les fonctionnaires",
    specificChallenges: [
      "Le contrat groupe bancaire ne tient pas compte de la sécurité de l'emploi — vous payez le même taux que tout le monde",
      "Les mutuelles de la fonction publique ne sont pas toujours les moins chères malgré leur réputation",
      "Les contractuels et vacataires ne bénéficient pas des mêmes avantages que les titulaires",
      "Certains fonctionnaires hospitaliers ou policiers cumulent le statut fonctionnaire avec une profession à risque",
    ],

    specificAdvantages: [
      "La sécurité de l'emploi = taux plus bas en délégation (risque de défaut réduit)",
      "Le maintien de salaire (3 mois plein + 9 mois demi-traitement) permet d'accepter un délai de franchise ITT plus long = cotisation réduite",
      "Les mutuelles spécialisées (MGEN, MNH, GMF, MAIF) proposent des contrats dédiés",
      "Profil considéré comme stable par tous les assureurs — peu de refus ou de surprimes",
    ],

    recommendedInsurers: [
      {
        name: "April",
        why: "Tarifs très compétitifs pour les profils stables. Souscription rapide. Bon rapport qualité/prix pour les fonctionnaires.",
      },
      {
        name: "MGEN / MNH",
        why: "Mutuelles de la fonction publique avec des contrats emprunteur dédiés. À comparer avec la délégation — parfois meilleur, parfois non.",
      },
      {
        name: "Suravenir",
        why: "Très compétitif sur les profils jeunes fonctionnaires. Souscription via les courtiers en ligne (Magnolia, Wedou).",
      },
    ],

    switchTips:
      "En tant que fonctionnaire, vous avez le profil idéal pour la délégation d'assurance. Demandez un devis en précisant votre statut (titulaire, contractuel, stagiaire) et votre maintien de salaire. Si vous êtes hospitalier (PH, infirmier), vérifiez la définition ITT — optez pour la définition 'professionnelle' (incapacité à exercer votre profession) plutôt que 'fonctionnelle'.",

    ctaTitle: "Fonctionnaire : profitez des meilleurs taux en assurance emprunteur",
    ctaSubtitle: "Votre statut vous avantage en délégation. Simulez votre économie gratuitement.",

    faq: [
      {
        question:
          "Les fonctionnaires paient-ils moins cher l'assurance emprunteur ?",
        answer:
          "En délégation, oui. La sécurité de l'emploi des fonctionnaires titulaires est un facteur de tarification favorable. En contrat groupe bancaire, non — le taux est mutualisé et ne tient pas compte du statut professionnel. C'est pourquoi le changement est particulièrement avantageux pour les fonctionnaires.",
      },
      {
        question:
          "Ma mutuelle de fonctionnaire (MGEN, MNH) est-elle le meilleur choix ?",
        answer:
          "Pas forcément. Les mutuelles de la fonction publique proposent des contrats emprunteur corrects mais pas toujours les moins chers. Comparez systématiquement avec 2-3 offres en délégation. Le meilleur contrat dépend de votre âge, votre situation de santé et le montant de votre prêt.",
      },
      {
        question:
          "Le maintien de salaire fonctionnaire impacte-t-il l'assurance emprunteur ?",
        answer:
          "Oui, positivement. Le maintien de traitement (3 mois à 100%, 9 mois à 50% pour les titulaires) vous permet d'accepter un délai de franchise ITT de 90 jours au lieu de 30. Un délai de franchise plus long = une cotisation d'assurance moins chère.",
      },
      {
        question:
          "Je suis contractuel, ai-je les mêmes avantages ?",
        answer:
          "Les contractuels de la fonction publique bénéficient d'un statut moins protecteur que les titulaires (maintien de salaire plus court, pas de garantie d'emploi). Les tarifs d'assurance seront légèrement plus élevés qu'un titulaire mais restent avantageux par rapport au secteur privé. La délégation est toujours intéressante.",
      },
    ],

    relatedProfiles: [
      "profession-risque",
      "jeune-emprunteur",
      "investissement-locatif",
    ],
    relatedBanks: ["banque-postale", "credit-agricole", "caisse-depargne"],
    defaultAge: "30-45",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 5. Investissement locatif
  // -----------------------------------------------------------------------
  {
    slug: "investissement-locatif",
    name: "Investissement locatif",
    shortName: "Investissement locatif",
    icon: "building-storefront",

    metaTitle:
      "Assurance Emprunteur Investissement Locatif : Optimisez",
    metaDescription:
      "Prêt locatif : l'assurance emprunteur peut être optimisée différemment. Quotité, garanties, déductibilité fiscale. Simulez vos économies.",

    heroTitle:
      "Assurance emprunteur pour un investissement locatif : comment optimiser ?",
    heroSubtitle:
      "L'assurance d'un prêt locatif obéit à des règles différentes de la résidence principale. La quotité, les garanties exigées et la déductibilité fiscale changent. Découvrez comment optimiser votre assurance emprunteur pour un investissement locatif.",

    contextTitle:
      "Assurance emprunteur locative : les différences avec la résidence principale",
    contextText:
      "L'assurance emprunteur d'un prêt immobilier locatif présente des spécificités importantes par rapport à un prêt pour la résidence principale.\n\nPremière différence : les garanties exigées par la banque sont souvent réduites. Pour un investissement locatif, la plupart des banques n'exigent que les garanties décès et PTIA, sans les garanties ITT et IPT qui sont obligatoires pour une résidence principale. Cela réduit mécaniquement le coût de l'assurance.\n\nDeuxième différence : la quotité peut être optimisée. Pour un couple qui investit, une répartition 50/50 au lieu de 100/100 divise le coût de l'assurance par deux tout en maintenant une couverture suffisante (les loyers couvrent une partie des mensualités).\n\nTroisième différence : les primes d'assurance emprunteur sont déductibles des revenus fonciers en location nue, ou déductibles en charges en LMNP au régime réel. C'est un avantage fiscal que les propriétaires de résidence principale n'ont pas.\n\nCes trois leviers combinés peuvent réduire le coût réel de votre assurance emprunteur de 40 à 60% par rapport à une résidence principale.",

    comparisonExample: {
      scenario: "Investisseur 40 ans, prêt locatif 200 000\u00a0\u20ac sur 20 ans, décès + PTIA seuls",
      groupRate: "0,42\u00a0%", groupMonthly: "70\u00a0\u20ac", groupTotal: "16 800\u00a0\u20ac",
      delegRate: "0,08\u00a0%", delegMonthly: "13\u00a0\u20ac", delegTotal: "3 200\u00a0\u20ac",
      savings: "13 600\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour l'investissement locatif",
    specificChallenges: [
      "Les banques exigent parfois les mêmes garanties que pour une résidence principale (ITT/IPT), même si ce n'est pas justifié",
      "La quotité optimale dépend de votre situation patrimoniale globale, pas seulement de ce prêt",
      "En SCI à l'IS, les règles d'assurance emprunteur sont différentes",
      "Les investisseurs multi-biens doivent gérer plusieurs contrats d'assurance",
    ],

    specificAdvantages: [
      "Garanties réduites (décès + PTIA uniquement dans la plupart des cas) = coût d'assurance plus bas",
      "Quotité optimisable (50/50 au lieu de 100/100 pour un couple) = coût divisé",
      "Primes d'assurance déductibles fiscalement (revenus fonciers ou LMNP réel)",
      "Le changement d'assurance peut être effectué sur chaque prêt locatif séparément",
    ],

    recommendedInsurers: [
      {
        name: "Suravenir",
        why: "Tarifs très compétitifs pour les contrats décès + PTIA seuls. Souscription simplifiée pour les investisseurs avec plusieurs biens.",
      },
      {
        name: "Generali",
        why: "Offres spécifiques pour les investisseurs immobiliers. Possibilité de regrouper plusieurs contrats.",
      },
      {
        name: "April",
        why: "Souplesse sur la quotité et les garanties. Bonne prise en charge des profils multi-investisseurs.",
      },
    ],

    switchTips:
      "Pour un investissement locatif, négociez la réduction des garanties à décès + PTIA uniquement (pas d'ITT/IPT). Si votre banque refuse, demandez-le par écrit — dans la majorité des cas, c'est négociable. Et n'oubliez pas de déduire vos primes d'assurance de vos revenus fonciers ou BIC (LMNP réel).",

    ctaTitle: "Investissement locatif : optimisez votre assurance emprunteur",
    ctaSubtitle: "Quotité, garanties réduites, déductibilité fiscale : simulez votre économie.",

    faq: [
      {
        question:
          "Les garanties ITT/IPT sont-elles obligatoires pour un prêt locatif ?",
        answer:
          "Non, dans la majorité des cas. Pour un investissement locatif, les banques exigent généralement uniquement les garanties décès et PTIA. Les garanties ITT et IPT ne sont pas justifiées car les loyers perçus couvrent les mensualités en cas d'arrêt de travail. Certaines banques les imposent quand même — négociez ou changez d'assurance.",
      },
      {
        question:
          "Les primes d'assurance emprunteur sont-elles déductibles en locatif ?",
        answer:
          "Oui. En location nue, les primes sont déductibles des revenus fonciers (régime réel). En LMNP au régime réel, elles sont déductibles en charges. En micro-foncier ou micro-BIC, elles sont couvertes par l'abattement forfaitaire. C'est un avantage fiscal que les propriétaires de résidence principale n'ont pas.",
      },
      {
        question:
          "Quelle quotité choisir pour un investissement locatif en couple ?",
        answer:
          "Pour un investissement locatif en couple, une quotité de 50/50 est souvent suffisante. En cas de décès d'un des co-emprunteurs, l'assurance rembourse 50% du capital et les loyers perçus contribuent à rembourser le reste. Une quotité 100/100 offre plus de sécurité mais coûte deux fois plus cher.",
      },
      {
        question:
          "Puis-je avoir une assurance différente pour chaque prêt locatif ?",
        answer:
          "Oui, chaque prêt immobilier a son propre contrat d'assurance emprunteur. Vous pouvez optimiser chacun séparément avec des assureurs différents, des garanties adaptées et des quotités spécifiques. La loi Lemoine vous permet de changer chaque contrat indépendamment.",
      },
    ],

    relatedProfiles: ["fonctionnaire", "senior", "expatrie"],
    relatedBanks: ["credit-mutuel", "bnp-paribas", "societe-generale"],
    defaultAge: "35-50",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 6. Expatriés
  // -----------------------------------------------------------------------
  {
    slug: "expatrie",
    name: "Expatriés",
    shortName: "Expatrié",
    icon: "globe",

    metaTitle:
      "Assurance Emprunteur Expatrié : Solutions et Comparatif",
    metaDescription:
      "Expatrié ? Résider à l'étranger complique l'assurance emprunteur. Des courtiers spécialisés couvrent les expatriés. Comparez les offres.",

    heroTitle:
      "Assurance emprunteur expatrié : comment s'assurer depuis l'étranger ?",
    heroSubtitle:
      "Résider à l'étranger complique l'accès à l'assurance emprunteur pour un prêt immobilier en France. Des assureurs et courtiers spécialisés couvrent les expatriés dans la plupart des pays. Comparez les offres adaptées à votre situation.",

    contextTitle:
      "Expatriés et assurance emprunteur : les spécificités",
    contextText:
      "L'assurance emprunteur pour un expatrié est plus complexe que pour un résident français. Le pays de résidence, la zone géographique, les conditions sanitaires locales et le système de santé du pays d'accueil sont autant de facteurs qui influencent la tarification et les garanties.\n\nLes contrats groupe bancaires acceptent rarement les expatriés, ou avec des surprimes importantes. Les assureurs en délégation spécialisés (April International, Generali, AXA) sont souvent la seule option viable — et paradoxalement, ils peuvent être moins chers que le contrat groupe.\n\nLes zones géographiques sont classées en catégories de risque : l'Europe et l'Amérique du Nord sont généralement en zone 1 (sans surprime), l'Asie du Sud-Est et l'Amérique latine en zone 2 (surprime modérée), l'Afrique subsaharienne et le Moyen-Orient en zone 3 (surprime élevée ou refus).\n\nLa loi Lemoine s'applique aux prêts immobiliers souscrits en France, quel que soit le lieu de résidence de l'emprunteur. Vous pouvez donc changer d'assurance depuis l'étranger.",

    comparisonExample: {
      scenario: "Expatrié 38 ans (zone Europe), prêt de 300 000\u00a0\u20ac sur 20 ans",
      groupRate: "0,50\u00a0%", groupMonthly: "125\u00a0\u20ac", groupTotal: "30 000\u00a0\u20ac",
      delegRate: "0,16\u00a0%", delegMonthly: "40\u00a0\u20ac", delegTotal: "9 600\u00a0\u20ac",
      savings: "20 400\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les expatriés",
    specificChallenges: [
      "Les contrats groupe bancaires acceptent rarement les expatriés ou appliquent des surprimes élevées",
      "Le pays de résidence détermine le niveau de surprime (zone 1, 2 ou 3)",
      "Les garanties ITT/IPT dépendent du système de santé local — les conditions d'indemnisation varient",
      "La souscription à distance peut être plus longue (examens médicaux, pièces justificatives)",
      "En cas de sinistre, les procédures d'indemnisation sont plus complexes depuis l'étranger",
    ],

    specificAdvantages: [
      "Les assureurs spécialisés (April International, Generali) ont l'expertise des dossiers expatriés",
      "La loi Lemoine s'applique depuis l'étranger — vous pouvez changer à tout moment",
      "Le contrat en délégation est souvent la seule option viable — et elle peut être moins chère que le groupe",
      "Certains pays (UE, Suisse, USA, Canada) sont en zone 1 sans surprime",
    ],

    recommendedInsurers: [
      {
        name: "April International",
        why: "Le leader de l'assurance expatriés en France. Couverture dans plus de 190 pays. Expertise reconnue dans les dossiers complexes.",
      },
      {
        name: "Generali",
        why: "Présence internationale. Acceptation large des pays de résidence. Souscription possible à distance.",
      },
      {
        name: "Swiss Life",
        why: "Couverture des expatriés en Europe et Suisse. Bon rapport qualité/prix pour les zones 1 et 2.",
      },
    ],

    switchTips:
      "En tant qu'expatrié, précisez toujours votre pays de résidence dès le premier contact avec l'assureur. Certains pays entraînent un refus automatique — inutile de perdre du temps. Vérifiez aussi les conditions de rapatriement en cas de sinistre et la devise de remboursement (euros ou devise locale). Si vous prévoyez de revenir en France, certains contrats permettent un ajustement de tarif à votre retour.",

    ctaTitle: "Expatrié : trouvez une assurance emprunteur adaptée",
    ctaSubtitle: "Couverture internationale, souscription à distance : simulez votre économie.",

    faq: [
      {
        question:
          "Puis-je souscrire une assurance emprunteur française depuis l'étranger ?",
        answer:
          "Oui, les assureurs en délégation spécialisés (April International, Generali) acceptent les souscriptions depuis l'étranger. La souscription se fait généralement en ligne ou par correspondance. Le pays de résidence influence le tarif et les garanties proposées.",
      },
      {
        question:
          "La loi Lemoine s'applique-t-elle aux expatriés ?",
        answer:
          "Oui, la loi Lemoine s'applique à tous les prêts immobiliers souscrits en France, quel que soit le lieu de résidence de l'emprunteur. Vous pouvez donc changer d'assurance emprunteur à tout moment depuis l'étranger.",
      },
      {
        question:
          "Quels pays entraînent une surprime en assurance emprunteur ?",
        answer:
          "Les assureurs classent les pays en zones de risque. L'Europe, l'Amérique du Nord, l'Australie, le Japon sont généralement en zone 1 (sans surprime). L'Asie du Sud-Est, l'Amérique latine en zone 2 (surprime 10-30%). L'Afrique subsaharienne, le Moyen-Orient en zone 3 (surprime 50-100% ou refus selon le pays exact).",
      },
      {
        question:
          "Que se passe-t-il si je rentre en France après avoir souscrit comme expatrié ?",
        answer:
          "Votre contrat reste valable. Vous pouvez demander une révision tarifaire à la baisse à votre assureur (votre risque géographique diminue) ou changer de contrat via la loi Lemoine pour obtenir un meilleur taux de résident français.",
      },
    ],

    relatedProfiles: [
      "profession-risque",
      "investissement-locatif",
      "fonctionnaire",
    ],
    relatedBanks: ["bnp-paribas", "societe-generale", "credit-agricole"],
    defaultAge: "30-45",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 7. Sans questionnaire médical
  // -----------------------------------------------------------------------
  {
    slug: "sans-questionnaire-medical",
    name: "Sans questionnaire médical",
    shortName: "Sans questionnaire",
    icon: "document",

    metaTitle:
      "Assurance Emprunteur Sans Questionnaire Médical | Loi Lemoine",
    metaDescription:
      "Depuis la loi Lemoine, les prêts < 200 000€ remboursés avant 60 ans sont exemptés de questionnaire de santé. Simulez votre économie.",

    heroTitle:
      "Assurance emprunteur sans questionnaire médical : qui est concerné ?",
    heroSubtitle:
      "Depuis la loi Lemoine (2022), les prêts de moins de 200 000€ remboursés avant 60 ans sont exemptés de questionnaire de santé. Plus besoin de déclarer vos antécédents médicaux. Découvrez si vous êtes éligible et combien vous pouvez économiser.",

    contextTitle:
      "Suppression du questionnaire médical : ce que prévoit la loi Lemoine",
    contextText:
      "La loi Lemoine a introduit une avancée majeure : la suppression du questionnaire de santé pour certains emprunteurs. Concrètement, vous n'avez plus à répondre à aucune question sur votre état de santé si vous remplissez deux conditions cumulatives.\n\nPremière condition : la part du prêt assurée par chaque emprunteur ne dépasse pas 200 000€. Attention, c'est la part assurée par emprunteur, pas le montant total du prêt. Pour un couple empruntant 400 000€ à quotité 50/50, chaque part est de 200 000€ — la condition est remplie. Pour un emprunteur seul à 250 000€, elle ne l'est pas.\n\nDeuxième condition : le prêt est intégralement remboursé avant le 60ème anniversaire de l'emprunteur. Un emprunteur de 38 ans qui prend un prêt sur 20 ans (remboursé à 58 ans) est éligible. Un emprunteur de 42 ans avec le même prêt (remboursé à 62 ans) ne l'est pas.\n\nCette suppression s'applique à la souscription initiale ET au changement d'assurance. Si vous remplissez les conditions, vous pouvez changer d'assurance sans aucune question de santé — c'est un avantage considérable pour les personnes ayant des antécédents médicaux.",

    comparisonExample: {
      scenario: "Emprunteur 32 ans, prêt de 180 000\u00a0\u20ac sur 25 ans (remboursé à 57 ans)",
      groupRate: "0,40\u00a0%", groupMonthly: "60\u00a0\u20ac", groupTotal: "18 000\u00a0\u20ac",
      delegRate: "0,09\u00a0%", delegMonthly: "14\u00a0\u20ac", delegTotal: "4 050\u00a0\u20ac",
      savings: "13 950\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages de la suppression du questionnaire médical",
    specificChallenges: [
      "Les conditions sont cumulatives : < 200 000€ de part assurée ET remboursé avant 60 ans",
      "Le seuil de 200 000€ s'apprécie par emprunteur, pas par prêt — un couple peut emprunter 400 000€ à 50/50",
      "Certains assureurs tentent de poser des questions de santé malgré l'éligibilité — c'est illégal",
      "L'absence de questionnaire ne signifie pas que le taux est identique pour tous — l'âge et le tabagisme restent des critères",
    ],

    specificAdvantages: [
      "Aucune déclaration de santé = aucune exclusion liée à une pathologie",
      "Pas de surprime santé possible — le taux dépend uniquement de l'âge et du tabagisme",
      "Processus de souscription plus rapide (pas d'examens médicaux, pas d'attente de décision)",
      "Particulièrement avantageux pour les personnes avec des antécédents médicaux (diabète, cancer en rémission, etc.)",
    ],

    recommendedInsurers: [
      {
        name: "April",
        why: "Processus de souscription sans questionnaire médical parfaitement rodé. Tarifs compétitifs pour les profils éligibles.",
      },
      {
        name: "Suravenir",
        why: "Souscription rapide et simplifiée pour les dossiers sans questionnaire. Taux parmi les plus bas du marché.",
      },
      {
        name: "Generali",
        why: "Application rigoureuse de la loi Lemoine. Pas de questionnaire déguisé. Couverture complète.",
      },
    ],

    switchTips:
      "Si vous êtes éligible à la suppression du questionnaire médical, assurez-vous que l'assureur ne vous pose aucune question de santé — c'est interdit par la loi. Si un assureur vous demande de remplir un questionnaire alors que vous remplissez les conditions (< 200 000€ par tête, remboursé avant 60 ans), signalez-le et changez d'assureur. C'est une infraction à la loi Lemoine.",

    ctaTitle: "Sans questionnaire médical : changez d'assurance emprunteur simplement",
    ctaSubtitle: "Éligible à la loi Lemoine ? Simulez votre économie sans déclarer votre santé.",

    faq: [
      {
        question:
          "Comment savoir si je suis éligible à la suppression du questionnaire médical ?",
        answer:
          "Vous êtes éligible si vous remplissez deux conditions cumulatives : votre part assurée ne dépasse pas 200 000€ (par emprunteur, pas par prêt) et votre prêt est intégralement remboursé avant votre 60ème anniversaire. Un couple empruntant 400 000€ à 50/50 est éligible (200 000€ par tête).",
      },
      {
        question:
          "La suppression du questionnaire s'applique-t-elle au changement d'assurance ?",
        answer:
          "Oui, la suppression du questionnaire médical s'applique aussi bien à la souscription initiale qu'au changement d'assurance via la loi Lemoine. Si vous remplissez les conditions, votre nouvel assureur ne peut pas vous poser de questions de santé.",
      },
      {
        question:
          "Sans questionnaire médical, le taux est-il le même pour tout le monde ?",
        answer:
          "Non. L'absence de questionnaire supprime les critères de santé, mais l'âge et le statut fumeur/non-fumeur restent des facteurs de tarification. Un non-fumeur de 30 ans paiera moins cher qu'un fumeur de 55 ans, même sans questionnaire médical.",
      },
      {
        question:
          "Mon assureur me demande quand même un questionnaire médical, est-ce légal ?",
        answer:
          "Non, si vous remplissez les conditions d'éligibilité (< 200 000€ par tête, remboursé avant 60 ans). La loi Lemoine interdit formellement le questionnaire de santé dans ce cas. Si un assureur vous le demande, refusez et signalez-le. C'est une infraction à la loi.",
      },
    ],

    relatedProfiles: ["risque-aggrave", "jeune-emprunteur", "senior"],
    relatedBanks: ["credit-agricole", "banque-postale", "credit-mutuel"],
    defaultAge: "25-40",
    defaultSmoker: false,
  },

  // -----------------------------------------------------------------------
  // 8. Jeunes emprunteurs (25-35 ans)
  // -----------------------------------------------------------------------
  {
    slug: "jeune-emprunteur",
    name: "Jeunes emprunteurs (25-35 ans)",
    shortName: "Jeune emprunteur",
    icon: "smile",

    metaTitle:
      "Assurance Emprunteur Jeune : Taux dès 0,08% en Délégation",
    metaDescription:
      "25-35 ans ? Vous êtes la tranche d'âge la plus avantagée en assurance emprunteur. Taux dès 0,08% en délégation vs 0,38-0,46% en banque. Simulez.",

    heroTitle:
      "Assurance emprunteur jeune : pourquoi vous payez 3 à 4 fois trop cher",
    heroSubtitle:
      "Entre 25 et 35 ans, vous êtes le profil le plus avantagé en assurance emprunteur. Les taux en délégation démarrent à 0,08%, soit 3 à 4 fois moins que le contrat groupe de votre banque. C'est la tranche d'âge qui économise le plus en changeant.",

    contextTitle:
      "Pourquoi les jeunes emprunteurs sont les grands gagnants du changement",
    contextText:
      "Entre 25 et 35 ans, non-fumeur, en bonne santé : c'est le profil d'emprunteur le plus favorable pour l'assurance emprunteur. Et c'est aussi celui qui est le plus pénalisé par le contrat groupe de la banque.\n\nEn contrat groupe, vous payez un taux mutualisé (0,38% à 0,46%) identique à celui d'un emprunteur de 55 ans fumeur. Le contrat groupe ne tient pas compte de votre jeune âge ni de votre bonne santé. C'est structurellement injuste — vous subventionnez les profils plus risqués.\n\nEn délégation, les taux pour un jeune emprunteur de 25-35 ans non-fumeur démarrent à 0,08% et plafonnent à 0,15%. Sur un prêt de 200 000€ sur 20 ans, c'est une différence de 10 000 à 15 000€. C'est la plus grosse économie possible parmi tous les profils.\n\nDe plus, si votre prêt est inférieur à 200 000€ et remboursé avant 60 ans (ce qui est le cas de la majorité des primo-accédants), vous bénéficiez de la suppression du questionnaire médical — la souscription est ultra-rapide.\n\nLe piège le plus fréquent : signer le contrat groupe de la banque 'pour aller plus vite' lors de l'achat immobilier, puis ne jamais changer. La loi Lemoine vous permet de corriger cette erreur à tout moment.",

    comparisonExample: {
      scenario: "Primo-accédant 28 ans, non-fumeur, prêt de 200 000\u00a0\u20ac sur 25 ans",
      groupRate: "0,42\u00a0%", groupMonthly: "70\u00a0\u20ac", groupTotal: "21 000\u00a0\u20ac",
      delegRate: "0,08\u00a0%", delegMonthly: "13\u00a0\u20ac", delegTotal: "4 000\u00a0\u20ac",
      savings: "17 000\u00a0\u20ac",
    },

    advantagesTitle: "Défis et avantages pour les jeunes emprunteurs",
    specificChallenges: [
      "Le contrat groupe bancaire ne tient pas compte de votre jeune âge — vous payez le même taux que tout le monde",
      "Le réflexe du 'package' : signer l'assurance de la banque avec le prêt pour simplifier l'achat",
      "Le manque d'information : beaucoup de primo-accédants ne savent pas qu'ils peuvent changer",
      "L'inertie : une fois le prêt signé, on n'y pense plus pendant 20 ans",
    ],

    specificAdvantages: [
      "C'est la tranche d'âge qui obtient les meilleurs taux en délégation (dès 0,08%)",
      "L'écart entre groupe et délégation est le plus important (x3 à x4)",
      "L'économie absolue est la plus élevée (10 000 à 15 000€ sur 20 ans)",
      "Éligibilité quasi-systématique à la suppression du questionnaire médical (< 200 000€, remboursé avant 60 ans)",
    ],

    recommendedInsurers: [
      {
        name: "Suravenir",
        why: "Les taux les plus bas du marché pour les 25-35 ans non-fumeurs. Filiale Crédit Mutuel Arkéa. Souscription rapide.",
      },
      {
        name: "April",
        why: "Très compétitif sur les profils jeunes. Souscription 100% en ligne en quelques minutes.",
      },
      {
        name: "Cardif Liberté",
        why: "Le contrat en délégation de BNP Paribas Cardif — paradoxalement moins cher que le contrat groupe de la même banque.",
      },
    ],

    switchTips:
      "En tant que jeune emprunteur, vous avez le profil idéal pour négocier. Demandez au minimum 3 devis et jouez la concurrence. Le changement est gratuit, immédiat, et l'économie est la plus importante de tous les profils. Si vous avez signé le contrat groupe il y a quelques mois, changez maintenant — chaque mois qui passe, c'est 30 à 50€ de trop.",

    ctaTitle: "25-35 ans : vous payez votre assurance emprunteur 3 à 4 fois trop cher",
    ctaSubtitle: "Taux dès 0,08% en délégation. Simulez votre économie en 2\u00a0minutes.",

    faq: [
      {
        question:
          "Quel est le meilleur taux d'assurance emprunteur pour un jeune de 25-35 ans ?",
        answer:
          "Les meilleurs taux en délégation pour un 25-35 ans non-fumeur en bonne santé démarrent à 0,08% du capital emprunté. C'est environ 4 fois moins cher que le taux groupe moyen (0,38-0,46%). Sur un prêt de 200 000€ sur 20 ans, la différence représente 10 000 à 15 000€.",
      },
      {
        question:
          "J'ai signé le contrat groupe de la banque il y a quelques mois, puis-je encore changer ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer à tout moment, même le lendemain de la signature. Il n'y a pas de délai minimum. Plus vous changez tôt, plus l'économie est importante car vous avez plus d'années restantes à rembourser.",
      },
      {
        question:
          "Suis-je éligible à la suppression du questionnaire médical ?",
        answer:
          "Très probablement. Si votre part assurée est inférieure à 200 000€ et que votre prêt sera remboursé avant vos 60 ans, vous n'avez pas à remplir de questionnaire de santé. Pour un primo-accédant de 28 ans avec un prêt de 200 000€ sur 25 ans (remboursé à 53 ans), c'est le cas.",
      },
      {
        question:
          "L'assurance emprunteur est-elle vraiment importante quand on est jeune et en bonne santé ?",
        answer:
          "Oui, elle est obligatoire de fait (aucune banque ne prête sans). Mais justement, puisque vous êtes jeune et en bonne santé, vous pouvez obtenir les taux les plus bas du marché. Ne payez pas 4 fois trop cher parce que 'vous n'y pensez pas' — changez maintenant et économisez 10 000€+.",
      },
    ],

    relatedProfiles: [
      "sans-questionnaire-medical",
      "fonctionnaire",
      "investissement-locatif",
    ],
    relatedBanks: ["bnp-paribas", "societe-generale", "lcl"],
    defaultAge: "25-35",
    defaultSmoker: false,
  },
];

// ---------------------------------------------------------------------------
// Helper: look up a profile by slug
// ---------------------------------------------------------------------------
export function getProfileBySlug(slug: string): ProfileData | undefined {
  return PROFILES.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------------------
// Helper: list of all valid profile slugs
// ---------------------------------------------------------------------------
export function getAllProfileSlugs(): string[] {
  return PROFILES.map((p) => p.slug);
}

// ---------------------------------------------------------------------------
// Profile labels for cross-linking (used by bank pages)
// ---------------------------------------------------------------------------
export const PROFILE_LABELS: Record<string, string> = {
  senior: "Senior (60+)",
  "jeune-emprunteur": "Jeune emprunteur",
  fonctionnaire: "Fonctionnaire",
  "risque-aggrave": "Risque aggravé",
  "investissement-locatif": "Investissement locatif",
  expatrie: "Expatrié",
  "sans-questionnaire-medical": "Sans questionnaire médical",
  "profession-risque": "Profession à risque",
};
