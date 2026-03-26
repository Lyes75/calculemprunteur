// --------------------------------------------------------------------------
// banks.ts -- Complete bank database for CalculEmprunteur.fr
// Contains all 8 major French banks with SEO, editorial & cross-linking data
// --------------------------------------------------------------------------

export interface FAQ {
  question: string;
  answer: string;
}

export interface BankData {
  slug: string;
  name: string;
  shortName: string;
  badgeColor: string;
  insurerName: string;
  contractName: string;
  groupRate: number;
  metaTitle: string;
  metaDescription: string;
  introText: string;
  insurerDescription: string;
  clientReproaches: string[];
  strengths: string[];
  switchSpecificInfo: string;
  faq: FAQ[];
  relatedBanks: string[];
  relatedProfiles: string[];
}

export const BANKS: BankData[] = [
  // -----------------------------------------------------------------------
  // 1. Crédit Agricole
  // -----------------------------------------------------------------------
  {
    slug: "credit-agricole",
    name: "Crédit Agricole",
    shortName: "CA",
    badgeColor: "#006A4E",
    insurerName: "Predica",
    contractName: "Assurance Emprunteur Crédit Agricole (Predica)",
    groupRate: 0.42,
    metaTitle:
      "Changer l'assurance emprunteur Crédit Agricole | Économisez jusqu'à 15 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Crédit Agricole (contrat Predica). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "Le Crédit Agricole est la première banque de détail en France avec plus de 25 millions de clients. Son contrat d'assurance emprunteur groupe est géré par Predica, la filiale assurance du groupe Crédit Agricole. Comme pour la plupart des contrats groupe bancaires, le taux appliqué est un taux mutualisé qui ne tient pas compte de votre profil individuel. Résultat : les emprunteurs jeunes et en bonne santé paient souvent bien plus cher que nécessaire.",
    insurerDescription:
      "Predica est la compagnie d'assurance de personnes du groupe Crédit Agricole. Fondée en 1986, elle est l'un des premiers assureurs vie en France. Le contrat groupe Predica propose les garanties standard (décès, PTIA, ITT, IPT) mais avec des conditions générales souvent moins favorables que les contrats individuels en délégation : délais de franchise plus longs, exclusions plus nombreuses, et surtout un tarif unique qui ne s'adapte pas à votre âge et votre état de santé.",
    clientReproaches: [
      "Taux groupe élevé (0,42%) qui ne reflète pas le profil individuel de l'emprunteur",
      "Délais de franchise ITT de 90 jours contre 30 à 60 jours en délégation",
      "Exclusions sportives et professionnelles plus restrictives que la moyenne",
      "Difficulté à obtenir des informations claires sur le coût réel de l'assurance",
      "Pression commerciale forte pour conserver le contrat groupe lors d'une demande de changement",
    ],
    strengths: [
      "Réseau d'agences très dense sur tout le territoire",
      "Souscription simplifiée car intégrée au prêt",
      "Marque de confiance historique pour les Français",
      "Possibilité de regrouper tous ses contrats d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Crédit Agricole, vous devez envoyer votre demande de substitution à votre agence Crédit Agricole par lettre recommandée avec accusé de réception. La banque dispose de 10 jours ouvrés pour accepter ou refuser (uniquement si le nouveau contrat ne présente pas des garanties équivalentes). Le changement est possible à tout moment grâce à la loi Lemoine (2022), sans attendre la date anniversaire.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Crédit Agricole à tout moment ?",
        answer:
          "Oui, depuis la loi Lemoine du 28 février 2022, vous pouvez changer votre assurance emprunteur à tout moment, sans frais et sans attendre la date anniversaire de votre contrat. Il suffit que le nouveau contrat présente des garanties au moins équivalentes à celles du contrat Crédit Agricole/Predica.",
      },
      {
        question:
          "Combien puis-je économiser en changeant l'assurance emprunteur Crédit Agricole ?",
        answer:
          "Les économies varient selon votre profil, mais en moyenne les clients Crédit Agricole économisent entre 5 000 et 15 000 euros sur la durée totale de leur prêt en passant à une assurance en délégation. Un emprunteur de 30 ans non-fumeur peut diviser son taux par 3 ou 4.",
      },
      {
        question:
          "Le Crédit Agricole peut-il refuser mon changement d'assurance emprunteur ?",
        answer:
          "Le Crédit Agricole ne peut refuser votre changement que si le nouveau contrat ne présente pas des garanties équivalentes au contrat Predica. En cas de refus, la banque doit motiver sa décision par écrit dans un délai de 10 jours ouvrés. Tout refus non motivé ou hors délai vaut acceptation.",
      },
      {
        question:
          "Quels documents fournir pour changer l'assurance emprunteur au Crédit Agricole ?",
        answer:
          "Vous devez fournir : le nouveau contrat d'assurance signé, les conditions générales et particulières, un tableau comparatif des garanties (fourni par le nouvel assureur), et une lettre de demande de substitution en recommandé avec AR adressée à votre agence Crédit Agricole.",
      },
    ],
    relatedBanks: ["lcl", "caisse-depargne", "bnp-paribas"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "sans-questionnaire-medical"],
  },

  // -----------------------------------------------------------------------
  // 2. BNP Paribas
  // -----------------------------------------------------------------------
  {
    slug: "bnp-paribas",
    name: "BNP Paribas",
    shortName: "BNP",
    badgeColor: "#00915A",
    insurerName: "Cardif",
    contractName: "Assurance Emprunteur BNP Paribas (Cardif)",
    groupRate: 0.45,
    metaTitle:
      "Changer l'assurance emprunteur BNP Paribas | Économisez jusqu'à 18 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur BNP Paribas (contrat Cardif). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "BNP Paribas est l'une des plus grandes banques françaises et européennes. Son contrat d'assurance emprunteur groupe est géré par Cardif, filiale à 100% du groupe BNP Paribas et leader mondial de l'assurance emprunteur. Malgré l'expertise de Cardif, le contrat groupe proposé par BNP Paribas reste un contrat mutualisé avec un taux unique élevé de 0,45%, nettement supérieur aux offres individuelles disponibles sur le marché.",
    insurerDescription:
      "Cardif (BNP Paribas Cardif) est le numéro un mondial de l'assurance emprunteur. Présente dans 30 pays, Cardif assure plus de 100 millions de personnes. Si Cardif propose aussi des contrats individuels compétitifs (Cardif Liberté Emprunteur), le contrat groupe distribué via les agences BNP Paribas reste un produit standard avec un tarif mutualisé qui pénalise les profils à faible risque.",
    clientReproaches: [
      "Taux groupe parmi les plus élevés du marché (0,45%)",
      "Cardif propose des contrats individuels bien moins chers que son propre contrat groupe BNP",
      "Prise en charge ITT limitée à la perte de revenus réelle (indemnitaire vs forfaitaire)",
      "Exclusions de garanties nombreuses, notamment sur les affections psy et dorsales",
      "Processus de changement parfois ralenti volontairement par les conseillers en agence",
    ],
    strengths: [
      "Cardif est un assureur solide et reconnu mondialement",
      "Gestion des sinistres rapide grâce à l'expertise de Cardif",
      "Réseau d'agences important en zones urbaines",
      "Possibilité de souscrire à Cardif Liberté (délégation) tout en restant chez Cardif",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur BNP Paribas, adressez votre demande de substitution à votre conseiller BNP Paribas ou au service assurance emprunteur de votre agence. BNP Paribas a 10 jours ouvrés pour accepter ou refuser. À noter : vous pouvez opter pour le contrat Cardif Liberté Emprunteur (délégation) qui est géré par le même assureur (Cardif) mais avec des tarifs individuels bien plus compétitifs.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur BNP Paribas à tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer à tout moment, sans frais ni pénalité. Votre nouveau contrat doit simplement offrir des garanties équivalentes au contrat Cardif groupe. BNP Paribas dispose de 10 jours ouvrés pour vous répondre.",
      },
      {
        question:
          "Combien puis-je économiser en changeant l'assurance emprunteur BNP Paribas ?",
        answer:
          "Avec un taux groupe de 0,45%, les économies sont souvent parmi les plus importantes. Un emprunteur de 35 ans non-fumeur avec un prêt de 250 000 euros sur 20 ans peut économiser entre 10 000 et 18 000 euros en passant à une assurance en délégation.",
      },
      {
        question:
          "Quelle est la différence entre Cardif groupe et Cardif Liberté ?",
        answer:
          "Le contrat Cardif groupe est le contrat standard proposé par BNP Paribas avec un taux mutualisé (0,45%). Cardif Liberté Emprunteur est un contrat individuel en délégation proposé par le même assureur, mais avec des tarifs personnalisés selon votre profil, souvent 2 à 4 fois moins chers.",
      },
      {
        question:
          "BNP Paribas peut-elle refuser mon changement d'assurance emprunteur ?",
        answer:
          "BNP Paribas ne peut refuser que si les garanties du nouveau contrat ne sont pas équivalentes à celles du contrat Cardif. Le refus doit être motivé par écrit sous 10 jours ouvrés. En cas de non-réponse dans ce délai, l'acceptation est tacite.",
      },
    ],
    relatedBanks: ["societe-generale", "credit-agricole", "lcl"],
    relatedProfiles: ["fonctionnaire", "investissement-locatif", "jeune-emprunteur"],
  },

  // -----------------------------------------------------------------------
  // 3. Caisse d'Épargne
  // -----------------------------------------------------------------------
  {
    slug: "caisse-depargne",
    name: "Caisse d'Épargne",
    shortName: "CE",
    badgeColor: "#E4002B",
    insurerName: "CNP Assurances",
    contractName: "Assurance Emprunteur Caisse d'Épargne (CNP Assurances)",
    groupRate: 0.44,
    metaTitle:
      "Changer l'assurance emprunteur Caisse d'Épargne | Économisez jusqu'à 16 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Caisse d'Épargne (contrat CNP). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "La Caisse d'Épargne fait partie du groupe BPCE (Banque Populaire Caisse d'Épargne), le deuxième groupe bancaire en France. Son contrat d'assurance emprunteur groupe est géré par CNP Assurances, le premier assureur de personnes en France. Avec un taux groupe de 0,44%, le contrat CNP de la Caisse d'Épargne se situe dans la fourchette haute du marché et peut être avantageusement remplacé par une assurance en délégation.",
    insurerDescription:
      "CNP Assurances est le leader français de l'assurance de personnes. Partenaire historique des banques du secteur public (Caisse d'Épargne, Banque Postale), CNP gère les contrats groupe de plusieurs millions d'emprunteurs. Le contrat groupe CNP offre des garanties de base correctes mais standardisées : les conditions sont identiques pour tous les emprunteurs, quel que soit leur âge ou leur état de santé.",
    clientReproaches: [
      "Taux groupe de 0,44% élevé pour les jeunes emprunteurs en bonne santé",
      "Questionnaire médical simplifié mais avec des exclusions nombreuses en contrepartie",
      "Garantie IPP (Invalidité Permanente Partielle) souvent absente du contrat de base",
      "Prise en charge ITT indemnitaire et non forfaitaire dans certaines formules",
      "Communication peu transparente sur les coûts réels de l'assurance dans l'offre de prêt",
    ],
    strengths: [
      "CNP Assurances est un assureur de confiance, adossé à l'État",
      "Grand réseau d'agences, notamment en zones rurales",
      "Historique solide en assurance emprunteur",
      "Bonne gestion des sinistres pour les garanties de base",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Caisse d'Épargne, envoyez votre lettre de demande de substitution à votre agence Caisse d'Épargne par recommandé avec AR. Vous pouvez également passer par l'espace client en ligne pour initier la démarche. La Caisse d'Épargne, en tant que membre du groupe BPCE, applique les mêmes procédures que la Banque Populaire pour la substitution d'assurance.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Caisse d'Épargne à tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer votre assurance emprunteur Caisse d'Épargne à tout moment, sans attendre la date anniversaire. Il suffit de souscrire un contrat en délégation avec des garanties équivalentes au contrat CNP et d'envoyer votre demande à la Caisse d'Épargne.",
      },
      {
        question:
          "Combien puis-je économiser en quittant l'assurance groupe CNP de la Caisse d'Épargne ?",
        answer:
          "Les économies moyennes constatées sont de 8 000 à 16 000 euros sur la durée totale du prêt. Pour un emprunteur de 30 ans non-fumeur avec un prêt de 200 000 euros sur 25 ans, le passage d'un taux de 0,44% à un taux en délégation de 0,10% représente plus de 17 000 euros d'économies.",
      },
      {
        question:
          "La Caisse d'Épargne peut-elle refuser mon changement d'assurance ?",
        answer:
          "La Caisse d'Épargne ne peut refuser votre demande que si le nouveau contrat ne présente pas des garanties équivalentes. Le refus doit être motivé par écrit. En pratique, les refus sont rares si vous choisissez un contrat en délégation de qualité.",
      },
      {
        question:
          "Quel est le délai pour changer d'assurance emprunteur à la Caisse d'Épargne ?",
        answer:
          "La Caisse d'Épargne dispose de 10 jours ouvrés pour accepter ou refuser votre demande. Si elle accepte, le changement prend effet à la date convenue dans l'avenant au contrat de prêt. Comptez en général 3 à 4 semaines entre votre demande et la prise d'effet du nouveau contrat.",
      },
    ],
    relatedBanks: ["banque-populaire", "banque-postale", "credit-agricole"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "senior"],
  },

  // -----------------------------------------------------------------------
  // 4. LCL
  // -----------------------------------------------------------------------
  {
    slug: "lcl",
    name: "LCL",
    shortName: "LCL",
    badgeColor: "#002D72",
    insurerName: "Predica",
    contractName: "Assurance Emprunteur LCL (Predica)",
    groupRate: 0.43,
    metaTitle:
      "Changer l'assurance emprunteur LCL | Économisez jusqu'à 15 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur LCL (contrat Predica). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "LCL (Le Crédit Lyonnais) est une banque de détail française filiale du groupe Crédit Agricole. Son contrat d'assurance emprunteur groupe est géré par Predica, le même assureur que le Crédit Agricole. Avec un taux groupe de 0,43%, le contrat LCL se situe dans la moyenne haute du marché. Les emprunteurs LCL disposent cependant d'un avantage : le réseau LCL est souvent plus réactif que le Crédit Agricole pour traiter les demandes de changement d'assurance.",
    insurerDescription:
      "Predica assure les contrats groupe de LCL comme ceux du Crédit Agricole. Le contrat groupe LCL/Predica est quasiment identique à celui du Crédit Agricole dans ses conditions générales, avec les mêmes garanties de base et les mêmes limites. La seule différence notable réside dans le taux, légèrement inférieur (0,43% contre 0,42% au Crédit Agricole), et dans la politique commerciale de chaque réseau.",
    clientReproaches: [
      "Même contrat Predica que le Crédit Agricole mais avec un taux légèrement supérieur",
      "Franchise ITT de 90 jours identique à celle du Crédit Agricole",
      "Offre de prêt présentant l'assurance comme obligatoirement souscrite chez LCL",
      "Manque de transparence sur la possibilité de déléguer l'assurance dès la souscription",
      "Service téléphonique peu accessible pour les questions relatives à l'assurance emprunteur",
    ],
    strengths: [
      "Réseau urbain bien implanté dans les grandes villes",
      "Traitement des demandes de changement souvent plus rapide que le Crédit Agricole",
      "Banque digitale avec un bon espace client en ligne",
      "Conseillers souvent plus ouverts à la délégation d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur LCL, adressez votre demande de substitution par lettre recommandée à votre agence LCL. LCL étant filiale du Crédit Agricole, le contrat groupe est géré par Predica avec les mêmes conditions de substitution. Les retours d'expérience montrent que LCL est généralement plus réactif que le Crédit Agricole pour traiter les demandes de changement.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur LCL à tout moment ?",
        answer:
          "Oui, comme pour toutes les banques, la loi Lemoine vous permet de changer votre assurance emprunteur LCL à tout moment. Il vous suffit de trouver un contrat en délégation offrant des garanties équivalentes et d'envoyer votre demande à LCL.",
      },
      {
        question:
          "Le contrat assurance emprunteur LCL est-il le même que celui du Crédit Agricole ?",
        answer:
          "Oui, LCL et le Crédit Agricole utilisent tous deux Predica comme assureur pour leur contrat groupe. Les conditions générales sont très proches, même si le taux peut varier légèrement. Cela signifie que les mêmes alternatives en délégation conviennent aux deux banques.",
      },
      {
        question:
          "Combien puis-je économiser en changeant l'assurance emprunteur LCL ?",
        answer:
          "Les économies sont comparables à celles du Crédit Agricole : entre 5 000 et 15 000 euros sur la durée du prêt pour un emprunteur de moins de 45 ans. Plus vous êtes jeune et en bonne santé, plus les économies seront importantes.",
      },
      {
        question:
          "LCL peut-elle modifier les conditions de mon prêt si je change d'assurance ?",
        answer:
          "Non, la loi interdit formellement à la banque de modifier les conditions de votre prêt (taux, durée, etc.) en raison d'un changement d'assurance emprunteur. Si LCL tente de le faire, vous pouvez saisir le médiateur bancaire ou l'ACPR.",
      },
    ],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "sans-questionnaire-medical"],
  },

  // -----------------------------------------------------------------------
  // 5. La Banque Postale
  // -----------------------------------------------------------------------
  {
    slug: "banque-postale",
    name: "La Banque Postale",
    shortName: "LBP",
    badgeColor: "#003DA5",
    insurerName: "CNP Assurances",
    contractName: "Assurance Emprunteur La Banque Postale (CNP Assurances)",
    groupRate: 0.46,
    metaTitle:
      "Changer l'assurance emprunteur Banque Postale | Économisez jusqu'à 20 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur La Banque Postale (contrat CNP). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "La Banque Postale est la banque du groupe La Poste, historiquement positionnée sur une clientèle grand public et accessible. Son contrat d'assurance emprunteur groupe est géré par CNP Assurances, le même assureur que la Caisse d'Épargne. Avec le taux groupe le plus élevé de notre comparatif (0,46%), La Banque Postale est la banque où le changement d'assurance emprunteur permet les économies les plus significatives.",
    insurerDescription:
      "CNP Assurances gère les contrats groupe de La Banque Postale depuis sa création. Le contrat CNP proposé via La Banque Postale est similaire à celui de la Caisse d'Épargne, avec les mêmes garanties de base. Cependant, le taux appliqué est plus élevé (0,46% contre 0,44% à la Caisse d'Épargne), ce qui s'explique par le profil moyen de la clientèle Banque Postale et la politique tarifaire de l'établissement.",
    clientReproaches: [
      "Taux groupe le plus élevé du marché (0,46%)",
      "Délais de traitement des demandes de changement souvent longs (jusqu'à 30 jours)",
      "Réseau postal pas toujours formé aux procédures de délégation d'assurance",
      "Conditions générales du contrat CNP identiques à la Caisse d'Épargne mais taux plus élevé",
      "Difficulté à joindre un interlocuteur compétent sur les questions d'assurance emprunteur",
    ],
    strengths: [
      "Réseau de bureaux de poste très dense, y compris en zones rurales",
      "Accessibilité pour les clientèles modestes et les primo-accédants",
      "Assureur CNP solide avec garantie de l'État",
      "Pas de frais de dossier pour le changement d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur La Banque Postale, envoyez votre demande par lettre recommandée avec AR au centre financier qui gère votre prêt (les coordonnées figurent sur vos relevés de prêt). Attention : les délais de traitement à La Banque Postale sont souvent plus longs que dans les autres banques. Prévoyez 3 à 5 semaines entre votre demande et la prise d'effet effective du nouveau contrat.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur La Banque Postale à tout moment ?",
        answer:
          "Oui, la loi Lemoine s'applique à La Banque Postale comme à toutes les banques. Vous pouvez changer à tout moment, sans frais. Toutefois, les retours d'expérience montrent que La Banque Postale est souvent plus lente que les autres banques pour traiter les demandes.",
      },
      {
        question:
          "Combien puis-je économiser en changeant l'assurance emprunteur La Banque Postale ?",
        answer:
          "Avec le taux groupe le plus élevé du marché (0,46%), les économies potentielles sont très importantes. Pour un prêt de 200 000 euros sur 25 ans, un emprunteur de 30 ans peut économiser jusqu'à 20 000 euros en passant à un taux en délégation de 0,08% à 0,12%.",
      },
      {
        question:
          "Le contrat La Banque Postale est-il le même que celui de la Caisse d'Épargne ?",
        answer:
          "Les deux banques utilisent CNP Assurances comme assureur groupe. Les conditions générales sont très proches, mais le taux est plus élevé à La Banque Postale (0,46% contre 0,44%). Les garanties de base sont comparables.",
      },
      {
        question:
          "Comment accélérer le changement d'assurance à La Banque Postale ?",
        answer:
          "Pour éviter les délais, envoyez votre demande avec un dossier complet (nouveau contrat, conditions générales, tableau d'équivalence des garanties). Relancez par écrit si vous n'avez pas de réponse sous 10 jours ouvrés. Vous pouvez également saisir le médiateur de La Banque Postale en cas de blocage.",
      },
    ],
    relatedBanks: ["caisse-depargne", "credit-agricole", "banque-populaire"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "senior"],
  },

  // -----------------------------------------------------------------------
  // 6. Société Générale
  // -----------------------------------------------------------------------
  {
    slug: "societe-generale",
    name: "Société Générale",
    shortName: "SG",
    badgeColor: "#E4002B",
    insurerName: "Sogecap",
    contractName: "Assurance Emprunteur Société Générale (Sogecap)",
    groupRate: 0.40,
    metaTitle:
      "Changer l'assurance emprunteur Société Générale | Économisez jusqu'à 12 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Société Générale (contrat Sogecap). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "La Société Générale est l'une des trois grandes banques cotées en France. Son contrat d'assurance emprunteur groupe est géré par Sogecap, la filiale assurance du groupe. Avec un taux de 0,40%, la Société Générale se positionne dans la fourchette basse des contrats groupe bancaires. Néanmoins, ce taux reste largement supérieur aux offres en délégation, surtout pour les emprunteurs jeunes et en bonne santé.",
    insurerDescription:
      "Sogecap est la compagnie d'assurance vie du groupe Société Générale. Filiale à 100%, elle gère l'ensemble des contrats d'assurance emprunteur des clients de la banque. Le contrat groupe Sogecap propose des garanties correctes et un taux parmi les plus bas des contrats groupe, mais il reste un contrat mutualisé qui ne s'adapte pas au profil individuel de chaque emprunteur.",
    clientReproaches: [
      "Taux plus bas que la moyenne des contrats groupe mais toujours supérieur aux offres en délégation",
      "Questionnaire médical plus exigeant que certaines banques concurrentes",
      "Garanties rachats d'exclusion (dos et psy) payantes en supplément",
      "Conditions de prise en charge de l'ITT assez restrictives",
      "Frais de dossier parfois facturés pour le traitement de la demande de substitution",
    ],
    strengths: [
      "Taux groupe parmi les plus bas du marché bancaire (0,40%)",
      "Sogecap est un assureur solide et bien capitalisé",
      "Espace client en ligne performant avec suivi des contrats",
      "Traitement des demandes de substitution relativement fluide",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Société Générale, envoyez votre demande au Service Assurance Emprunteur de votre agence ou directement au centre de gestion dont les coordonnées figurent sur votre offre de prêt. La Société Générale est généralement réputée pour traiter les demandes de substitution dans les délais réglementaires. Le taux groupe étant déjà relativement bas, les économies seront moins spectaculaires que chez BNP Paribas ou La Banque Postale, mais restent significatives.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Société Générale à tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer à tout moment. La Société Générale est généralement réputée pour traiter les demandes de substitution de manière relativement fluide, dans les 10 jours ouvrés réglementaires.",
      },
      {
        question:
          "Le taux Sogecap est déjà bas, est-ce quand même intéressant de changer ?",
        answer:
          "Oui, même avec un taux groupe de 0,40%, les économies restent significatives. Un emprunteur de 30 ans peut obtenir un taux en délégation de 0,08% à 0,12%, soit 3 à 5 fois moins cher. Sur un prêt de 200 000 euros sur 20 ans, cela représente 5 000 à 12 000 euros d'économies.",
      },
      {
        question:
          "Sogecap est-elle fiable comme assureur emprunteur ?",
        answer:
          "Oui, Sogecap est une compagnie d'assurance solide, filiale du groupe Société Générale. Sa solidité financière n'est pas en question. Le problème n'est pas la fiabilité de l'assureur mais le coût du contrat groupe mutualisé par rapport aux offres individuelles en délégation.",
      },
      {
        question:
          "La Société Générale facture-t-elle des frais pour le changement d'assurance ?",
        answer:
          "La loi interdit aux banques de facturer des frais pour le changement d'assurance emprunteur. Si votre conseiller mentionne des frais, rappelez-lui que la loi Lemoine prévoit la gratuité totale de la procédure de substitution.",
      },
    ],
    relatedBanks: ["bnp-paribas", "lcl", "credit-mutuel"],
    relatedProfiles: ["expatrie", "investissement-locatif", "jeune-emprunteur"],
  },

  // -----------------------------------------------------------------------
  // 7. Banque Populaire
  // -----------------------------------------------------------------------
  {
    slug: "banque-populaire",
    name: "Banque Populaire",
    shortName: "BP",
    badgeColor: "#0072CE",
    insurerName: "BPCE Vie",
    contractName: "Assurance Emprunteur Banque Populaire (BPCE Vie)",
    groupRate: 0.41,
    metaTitle:
      "Changer l'assurance emprunteur Banque Populaire | Économisez jusqu'à 13 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Banque Populaire (contrat BPCE Vie). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "La Banque Populaire fait partie du groupe BPCE, deuxième groupe bancaire français, aux côtés de la Caisse d'Épargne. Son contrat d'assurance emprunteur groupe est géré par BPCE Vie (anciennement Natixis Assurances). Avec un taux groupe de 0,41%, la Banque Populaire se situe dans la fourchette basse des contrats groupe, mais un changement en délégation reste très avantageux pour la majorité des profils.",
    insurerDescription:
      "BPCE Vie (anciennement Natixis Assurances) est la filiale assurance du groupe BPCE. Elle gère les contrats groupe de la Banque Populaire et, indirectement, participe à l'offre d'assurance emprunteur du groupe aux côtés de CNP Assurances (qui gère le contrat de la Caisse d'Épargne). Le contrat BPCE Vie est un contrat groupe classique avec des garanties standard et un taux mutualisé.",
    clientReproaches: [
      "Taux groupe de 0,41% qui reste supérieur aux offres en délégation",
      "Structure régionale des Banques Populaires : les conditions peuvent varier d'une région à l'autre",
      "Garanties IPP parfois non incluses dans le contrat de base",
      "Délais de carence et de franchise parfois supérieurs à ceux des contrats en délégation",
      "Information insuffisante sur le droit de changer d'assurance au moment de la souscription du prêt",
    ],
    strengths: [
      "Taux groupe relativement compétitif (0,41%)",
      "Banque coopérative avec une culture de proximité",
      "Bonne couverture des professions indépendantes et artisanales",
      "Conseils souvent personnalisés grâce au modèle mutualiste",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Banque Populaire, adressez votre demande de substitution à votre agence locale par lettre recommandée avec AR. Attention : la Banque Populaire est organisée en banques régionales (BPCE, Banque Populaire du Sud, Banque Populaire Rives de Paris, etc.), chacune avec sa propre organisation. Identifiez bien l'entité qui gère votre prêt avant d'envoyer votre courrier. La procédure reste la même dans toutes les régions.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Banque Populaire à tout moment ?",
        answer:
          "Oui, la loi Lemoine vous donne le droit de changer votre assurance emprunteur Banque Populaire à tout moment. Les Banques Populaires, quelle que soit la région, sont tenues de respecter le délai de 10 jours ouvrés pour vous répondre.",
      },
      {
        question:
          "Le taux de la Banque Populaire varie-t-il selon les régions ?",
        answer:
          "Oui, les Banques Populaires sont des banques régionales coopératives. Le taux du contrat groupe peut légèrement varier d'une région à l'autre. Le taux de 0,41% est une moyenne nationale. Vérifiez le taux exact sur votre offre de prêt ou votre échéancier.",
      },
      {
        question:
          "La Banque Populaire est-elle le même groupe que la Caisse d'Épargne ?",
        answer:
          "Oui, la Banque Populaire et la Caisse d'Épargne font partie du même groupe BPCE. Cependant, leurs contrats d'assurance emprunteur sont différents : BPCE Vie pour la Banque Populaire et CNP Assurances pour la Caisse d'Épargne.",
      },
      {
        question:
          "Combien puis-je économiser en changeant l'assurance emprunteur Banque Populaire ?",
        answer:
          "Pour un prêt de 200 000 euros sur 20 ans, un emprunteur de 35 ans non-fumeur peut économiser entre 6 000 et 13 000 euros en passant d'un taux groupe de 0,41% à un taux en délégation de 0,10% à 0,15%. Les économies sont d'autant plus importantes que vous êtes jeune et en bonne santé.",
      },
    ],
    relatedBanks: ["caisse-depargne", "credit-mutuel", "credit-agricole"],
    relatedProfiles: ["profession-risque", "jeune-emprunteur", "fonctionnaire"],
  },

  // -----------------------------------------------------------------------
  // 8. Crédit Mutuel
  // -----------------------------------------------------------------------
  {
    slug: "credit-mutuel",
    name: "Crédit Mutuel",
    shortName: "CM",
    badgeColor: "#004A99",
    insurerName: "ACM (Assurances du Crédit Mutuel)",
    contractName: "Assurance Emprunteur Crédit Mutuel (ACM)",
    groupRate: 0.38,
    metaTitle:
      "Changer l'assurance emprunteur Crédit Mutuel | Économisez jusqu'à 10 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Crédit Mutuel (contrat ACM). Calculez vos économies et trouvez une assurance moins chère en délégation.",
    introText:
      "Le Crédit Mutuel est une banque mutualiste française, souvent plébiscitée pour sa relation client de proximité. Son contrat d'assurance emprunteur groupe est géré par ACM (Assurances du Crédit Mutuel), la filiale assurance du groupe. Avec un taux groupe de 0,38%, le Crédit Mutuel affiche le taux le plus bas des contrats groupe bancaires de notre comparatif. Néanmoins, même ce taux reste significativement supérieur aux offres individuelles en délégation.",
    insurerDescription:
      "ACM (Assurances du Crédit Mutuel) est un groupe d'assurance mutualiste qui gère l'ensemble des produits d'assurance des clients du Crédit Mutuel et du CIC. ACM est un acteur solide du marché de l'assurance en France. Le contrat groupe ACM est réputé pour la qualité de ses garanties, avec des conditions générales souvent plus favorables que celles de ses concurrents bancaires (franchise ITT plus courte, meilleure couverture psy/dos).",
    clientReproaches: [
      "Taux groupe bas mais toujours supérieur aux offres individuelles en délégation",
      "Forte culture de fidélisation qui peut rendre le changement d'assurance plus difficile en pratique",
      "Les conseillers insistent beaucoup sur le 'package' assurance + prêt",
      "Information parfois incomplète sur le droit au changement d'assurance",
      "Structure fédérale : chaque fédération du Crédit Mutuel peut avoir des pratiques différentes",
    ],
    strengths: [
      "Taux groupe le plus bas du marché bancaire (0,38%)",
      "ACM propose des garanties parmi les meilleures des contrats groupe",
      "Franchise ITT de 60 jours (contre 90 jours dans beaucoup de banques)",
      "Bonne réputation en gestion des sinistres",
      "Modèle mutualiste avec une relation client de proximité",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Crédit Mutuel, adressez votre demande à votre caisse locale du Crédit Mutuel. Attention : le Crédit Mutuel est organisé en fédérations régionales (Crédit Mutuel de Bretagne, Crédit Mutuel du Sud-Ouest, Crédit Mutuel Alliance Fédérale, etc.) avec des pratiques qui peuvent varier. Le Crédit Mutuel est réputé pour être plus résistant que d'autres banques aux demandes de changement d'assurance, en raison de sa culture mutualiste forte. Soyez préparé à insister et n'hésitez pas à citer la loi Lemoine.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Crédit Mutuel à tout moment ?",
        answer:
          "Oui, la loi Lemoine s'applique au Crédit Mutuel comme à toutes les banques, y compris les banques mutualistes. Vous pouvez changer à tout moment, sans frais. Le Crédit Mutuel ne peut refuser que si les garanties ne sont pas équivalentes.",
      },
      {
        question:
          "Le taux du Crédit Mutuel est déjà le plus bas, vaut-il quand même le coup de changer ?",
        answer:
          "Oui, même avec le taux groupe le plus bas (0,38%), les économies restent intéressantes. Un emprunteur de 30 ans peut obtenir un taux de 0,08% en délégation, soit environ 4 fois moins cher. Sur un prêt de 200 000 euros sur 20 ans, cela représente 5 000 à 10 000 euros d'économies.",
      },
      {
        question:
          "Les garanties ACM sont-elles meilleures que celles d'un contrat en délégation ?",
        answer:
          "Les garanties ACM sont parmi les meilleures des contrats groupe, mais un bon contrat en délégation offrira des garanties équivalentes voire supérieures à un coût bien inférieur. Les contrats individuels permettent en plus de personnaliser les garanties selon vos besoins spécifiques.",
      },
      {
        question:
          "Le Crédit Mutuel est-il difficile pour les changements d'assurance ?",
        answer:
          "Le Crédit Mutuel est réputé pour être plus résistant que d'autres banques aux demandes de changement, en raison de sa culture mutualiste. Cependant, la loi est de votre côté : le Crédit Mutuel a l'obligation légale de répondre sous 10 jours ouvrés et ne peut refuser que si les garanties ne sont pas équivalentes.",
      },
    ],
    relatedBanks: ["banque-populaire", "societe-generale", "credit-agricole"],
    relatedProfiles: ["jeune-emprunteur", "profession-risque", "risque-aggrave"],
  },
];

// ---------------------------------------------------------------------------
// Helper: look up a bank by slug
// ---------------------------------------------------------------------------
export function getBankBySlug(slug: string): BankData | undefined {
  return BANKS.find((b) => b.slug === slug);
}

// ---------------------------------------------------------------------------
// Helper: list of all valid slugs (useful for generateStaticParams)
// ---------------------------------------------------------------------------
export function getAllBankSlugs(): string[] {
  return BANKS.map((b) => b.slug);
}
