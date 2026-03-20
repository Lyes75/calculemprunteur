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
  // 1. Credit Agricole
  // -----------------------------------------------------------------------
  {
    slug: "credit-agricole",
    name: "Credit Agricole",
    shortName: "CA",
    badgeColor: "#006A4E",
    insurerName: "Predica",
    contractName: "Assurance Emprunteur Credit Agricole (Predica)",
    groupRate: 0.42,
    metaTitle:
      "Changer l'assurance emprunteur Credit Agricole | Economisez jusqu'a 15 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Credit Agricole (contrat Predica). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "Le Credit Agricole est la premiere banque de detail en France avec plus de 25 millions de clients. Son contrat d'assurance emprunteur groupe est gere par Predica, la filiale assurance du groupe Credit Agricole. Comme pour la plupart des contrats groupe bancaires, le taux applique est un taux mutualisé qui ne tient pas compte de votre profil individuel. Resultat : les emprunteurs jeunes et en bonne sante paient souvent bien plus cher que necessaire.",
    insurerDescription:
      "Predica est la compagnie d'assurance de personnes du groupe Credit Agricole. Fondee en 1986, elle est l'un des premiers assureurs vie en France. Le contrat groupe Predica propose les garanties standard (deces, PTIA, ITT, IPT) mais avec des conditions generales souvent moins favorables que les contrats individuels en delegation : delais de franchise plus longs, exclusions plus nombreuses, et surtout un tarif unique qui ne s'adapte pas a votre age et votre etat de sante.",
    clientReproaches: [
      "Taux groupe eleve (0,42%) qui ne reflete pas le profil individuel de l'emprunteur",
      "Delais de franchise ITT de 90 jours contre 30 a 60 jours en delegation",
      "Exclusions sportives et professionnelles plus restrictives que la moyenne",
      "Difficulte a obtenir des informations claires sur le cout reel de l'assurance",
      "Pression commerciale forte pour conserver le contrat groupe lors d'une demande de changement",
    ],
    strengths: [
      "Reseau d'agences tres dense sur tout le territoire",
      "Souscription simplifiee car integree au pret",
      "Marque de confiance historique pour les Francais",
      "Possibilite de regrouper tous ses contrats d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Credit Agricole, vous devez envoyer votre demande de substitution a votre agence Credit Agricole par lettre recommandee avec accuse de reception. La banque dispose de 10 jours ouvrés pour accepter ou refuser (uniquement si le nouveau contrat ne presente pas des garanties equivalentes). Le changement est possible a tout moment grace a la loi Lemoine (2022), sans attendre la date anniversaire.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Credit Agricole a tout moment ?",
        answer:
          "Oui, depuis la loi Lemoine du 28 fevrier 2022, vous pouvez changer votre assurance emprunteur a tout moment, sans frais et sans attendre la date anniversaire de votre contrat. Il suffit que le nouveau contrat presente des garanties au moins equivalentes a celles du contrat Credit Agricole/Predica.",
      },
      {
        question:
          "Combien puis-je economiser en changeant l'assurance emprunteur Credit Agricole ?",
        answer:
          "Les economies varient selon votre profil, mais en moyenne les clients Credit Agricole economisent entre 5 000 et 15 000 euros sur la duree totale de leur pret en passant a une assurance en delegation. Un emprunteur de 30 ans non-fumeur peut diviser son taux par 3 ou 4.",
      },
      {
        question:
          "Le Credit Agricole peut-il refuser mon changement d'assurance emprunteur ?",
        answer:
          "Le Credit Agricole ne peut refuser votre changement que si le nouveau contrat ne presente pas des garanties equivalentes au contrat Predica. En cas de refus, la banque doit motiver sa decision par ecrit dans un delai de 10 jours ouvrés. Tout refus non motive ou hors delai vaut acceptation.",
      },
      {
        question:
          "Quels documents fournir pour changer l'assurance emprunteur au Credit Agricole ?",
        answer:
          "Vous devez fournir : le nouveau contrat d'assurance signe, les conditions generales et particulieres, un tableau comparatif des garanties (fourni par le nouvel assureur), et une lettre de demande de substitution en recommande avec AR adressee a votre agence Credit Agricole.",
      },
    ],
    relatedBanks: ["lcl", "caisse-epargne", "bnp-paribas"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "primo-accedant"],
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
      "Changer l'assurance emprunteur BNP Paribas | Economisez jusqu'a 18 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur BNP Paribas (contrat Cardif). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "BNP Paribas est l'une des plus grandes banques francaises et europeennes. Son contrat d'assurance emprunteur groupe est gere par Cardif, filiale a 100% du groupe BNP Paribas et leader mondial de l'assurance emprunteur. Malgre l'expertise de Cardif, le contrat groupe propose par BNP Paribas reste un contrat mutualisé avec un taux unique eleve de 0,45%, nettement superieur aux offres individuelles disponibles sur le marche.",
    insurerDescription:
      "Cardif (BNP Paribas Cardif) est le numero un mondial de l'assurance emprunteur. Presente dans 30 pays, Cardif assure plus de 100 millions de personnes. Si Cardif propose aussi des contrats individuels competitifs (Cardif Liberte Emprunteur), le contrat groupe distribue via les agences BNP Paribas reste un produit standard avec un tarif mutualisé qui penalise les profils a faible risque.",
    clientReproaches: [
      "Taux groupe parmi les plus eleves du marche (0,45%)",
      "Cardif propose des contrats individuels bien moins chers que son propre contrat groupe BNP",
      "Prise en charge ITT limitee a la perte de revenus reelle (indemnitaire vs forfaitaire)",
      "Exclusions de garanties nombreuses, notamment sur les affections psy et dorsales",
      "Processus de changement parfois ralenti volontairement par les conseillers en agence",
    ],
    strengths: [
      "Cardif est un assureur solide et reconnu mondialement",
      "Gestion des sinistres rapide grace a l'expertise de Cardif",
      "Reseau d'agences important en zones urbaines",
      "Possibilite de souscrire a Cardif Liberte (delegation) tout en restant chez Cardif",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur BNP Paribas, adressez votre demande de substitution a votre conseiller BNP Paribas ou au service assurance emprunteur de votre agence. BNP Paribas a 10 jours ouvrés pour accepter ou refuser. A noter : vous pouvez opter pour le contrat Cardif Liberte Emprunteur (delegation) qui est gere par le meme assureur (Cardif) mais avec des tarifs individuels bien plus competitifs.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur BNP Paribas a tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer a tout moment, sans frais ni penalite. Votre nouveau contrat doit simplement offrir des garanties equivalentes au contrat Cardif groupe. BNP Paribas dispose de 10 jours ouvrés pour vous repondre.",
      },
      {
        question:
          "Combien puis-je economiser en changeant l'assurance emprunteur BNP Paribas ?",
        answer:
          "Avec un taux groupe de 0,45%, les economies sont souvent parmi les plus importantes. Un emprunteur de 35 ans non-fumeur avec un pret de 250 000 euros sur 20 ans peut economiser entre 10 000 et 18 000 euros en passant a une assurance en delegation.",
      },
      {
        question:
          "Quelle est la difference entre Cardif groupe et Cardif Liberte ?",
        answer:
          "Le contrat Cardif groupe est le contrat standard propose par BNP Paribas avec un taux mutualisé (0,45%). Cardif Liberte Emprunteur est un contrat individuel en delegation propose par le meme assureur, mais avec des tarifs personnalises selon votre profil, souvent 2 a 4 fois moins chers.",
      },
      {
        question:
          "BNP Paribas peut-elle refuser mon changement d'assurance emprunteur ?",
        answer:
          "BNP Paribas ne peut refuser que si les garanties du nouveau contrat ne sont pas equivalentes a celles du contrat Cardif. Le refus doit etre motive par ecrit sous 10 jours ouvrés. En cas de non-reponse dans ce delai, l'acceptation est tacite.",
      },
    ],
    relatedBanks: ["societe-generale", "credit-agricole", "lcl"],
    relatedProfiles: ["cadre-superieur", "investisseur-locatif", "jeune-emprunteur"],
  },

  // -----------------------------------------------------------------------
  // 3. Caisse d'Epargne
  // -----------------------------------------------------------------------
  {
    slug: "caisse-epargne",
    name: "Caisse d'Epargne",
    shortName: "CE",
    badgeColor: "#E4002B",
    insurerName: "CNP Assurances",
    contractName: "Assurance Emprunteur Caisse d'Epargne (CNP Assurances)",
    groupRate: 0.44,
    metaTitle:
      "Changer l'assurance emprunteur Caisse d'Epargne | Economisez jusqu'a 16 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Caisse d'Epargne (contrat CNP). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "La Caisse d'Epargne fait partie du groupe BPCE (Banque Populaire Caisse d'Epargne), le deuxieme groupe bancaire en France. Son contrat d'assurance emprunteur groupe est gere par CNP Assurances, le premier assureur de personnes en France. Avec un taux groupe de 0,44%, le contrat CNP de la Caisse d'Epargne se situe dans la fourchette haute du marche et peut etre avantageusement remplace par une assurance en delegation.",
    insurerDescription:
      "CNP Assurances est le leader francais de l'assurance de personnes. Partenaire historique des banques du secteur public (Caisse d'Epargne, Banque Postale), CNP gere les contrats groupe de plusieurs millions d'emprunteurs. Le contrat groupe CNP offre des garanties de base correctes mais standardisées : les conditions sont identiques pour tous les emprunteurs, quel que soit leur age ou leur etat de sante.",
    clientReproaches: [
      "Taux groupe de 0,44% eleve pour les jeunes emprunteurs en bonne sante",
      "Questionnaire medical simplifie mais avec des exclusions nombreuses en contrepartie",
      "Garantie IPP (Invalidite Permanente Partielle) souvent absente du contrat de base",
      "Prise en charge ITT indemnitaire et non forfaitaire dans certaines formules",
      "Communication peu transparente sur les couts reels de l'assurance dans l'offre de pret",
    ],
    strengths: [
      "CNP Assurances est un assureur de confiance, adossé a l'Etat",
      "Grand reseau d'agences, notamment en zones rurales",
      "Historique solide en assurance emprunteur",
      "Bonne gestion des sinistres pour les garanties de base",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Caisse d'Epargne, envoyez votre lettre de demande de substitution a votre agence Caisse d'Epargne par recommande avec AR. Vous pouvez egalement passer par l'espace client en ligne pour initier la demarche. La Caisse d'Epargne, en tant que membre du groupe BPCE, applique les memes procedures que la Banque Populaire pour la substitution d'assurance.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Caisse d'Epargne a tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer votre assurance emprunteur Caisse d'Epargne a tout moment, sans attendre la date anniversaire. Il suffit de souscrire un contrat en delegation avec des garanties equivalentes au contrat CNP et d'envoyer votre demande a la Caisse d'Epargne.",
      },
      {
        question:
          "Combien puis-je economiser en quittant l'assurance groupe CNP de la Caisse d'Epargne ?",
        answer:
          "Les economies moyennes constatees sont de 8 000 a 16 000 euros sur la duree totale du pret. Pour un emprunteur de 30 ans non-fumeur avec un pret de 200 000 euros sur 25 ans, le passage d'un taux de 0,44% a un taux en delegation de 0,10% represente plus de 17 000 euros d'economies.",
      },
      {
        question:
          "La Caisse d'Epargne peut-elle refuser mon changement d'assurance ?",
        answer:
          "La Caisse d'Epargne ne peut refuser votre demande que si le nouveau contrat ne presente pas des garanties equivalentes. Le refus doit etre motive par ecrit. En pratique, les refus sont rares si vous choisissez un contrat en delegation de qualite.",
      },
      {
        question:
          "Quel est le delai pour changer d'assurance emprunteur a la Caisse d'Epargne ?",
        answer:
          "La Caisse d'Epargne dispose de 10 jours ouvrés pour accepter ou refuser votre demande. Si elle accepte, le changement prend effet a la date convenue dans l'avenant au contrat de pret. Comptez en general 3 a 4 semaines entre votre demande et la prise d'effet du nouveau contrat.",
      },
    ],
    relatedBanks: ["banque-populaire", "banque-postale", "credit-agricole"],
    relatedProfiles: ["primo-accedant", "fonctionnaire", "senior-emprunteur"],
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
      "Changer l'assurance emprunteur LCL | Economisez jusqu'a 15 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur LCL (contrat Predica). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "LCL (Le Credit Lyonnais) est une banque de detail francaise filiale du groupe Credit Agricole. Son contrat d'assurance emprunteur groupe est gere par Predica, le meme assureur que le Credit Agricole. Avec un taux groupe de 0,43%, le contrat LCL se situe dans la moyenne haute du marche. Les emprunteurs LCL disposent cependant d'un avantage : le reseau LCL est souvent plus reactif que le Credit Agricole pour traiter les demandes de changement d'assurance.",
    insurerDescription:
      "Predica assure les contrats groupe de LCL comme ceux du Credit Agricole. Le contrat groupe LCL/Predica est quasiment identique a celui du Credit Agricole dans ses conditions generales, avec les memes garanties de base et les memes limites. La seule difference notable reside dans le taux, legerement inferieur (0,43% contre 0,42% au Credit Agricole), et dans la politique commerciale de chaque reseau.",
    clientReproaches: [
      "Meme contrat Predica que le Credit Agricole mais avec un taux legerement superieur",
      "Franchise ITT de 90 jours identique a celle du Credit Agricole",
      "Offre de pret presentant l'assurance comme obligatoirement souscrite chez LCL",
      "Manque de transparence sur la possibilite de deleguer l'assurance des la souscription",
      "Service telephonique peu accessible pour les questions relatives a l'assurance emprunteur",
    ],
    strengths: [
      "Reseau urbain bien implanté dans les grandes villes",
      "Traitement des demandes de changement souvent plus rapide que le Credit Agricole",
      "Banque digitale avec un bon espace client en ligne",
      "Conseillers souvent plus ouverts a la delegation d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur LCL, adressez votre demande de substitution par lettre recommandee a votre agence LCL. LCL etant filiale du Credit Agricole, le contrat groupe est gere par Predica avec les memes conditions de substitution. Les retours d'experience montrent que LCL est generalement plus reactif que le Credit Agricole pour traiter les demandes de changement.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur LCL a tout moment ?",
        answer:
          "Oui, comme pour toutes les banques, la loi Lemoine vous permet de changer votre assurance emprunteur LCL a tout moment. Il vous suffit de trouver un contrat en delegation offrant des garanties equivalentes et d'envoyer votre demande a LCL.",
      },
      {
        question:
          "Le contrat assurance emprunteur LCL est-il le meme que celui du Credit Agricole ?",
        answer:
          "Oui, LCL et le Credit Agricole utilisent tous deux Predica comme assureur pour leur contrat groupe. Les conditions generales sont tres proches, meme si le taux peut varier legerement. Cela signifie que les memes alternatives en delegation conviennent aux deux banques.",
      },
      {
        question:
          "Combien puis-je economiser en changeant l'assurance emprunteur LCL ?",
        answer:
          "Les economies sont comparables a celles du Credit Agricole : entre 5 000 et 15 000 euros sur la duree du pret pour un emprunteur de moins de 45 ans. Plus vous etes jeune et en bonne sante, plus les economies seront importantes.",
      },
      {
        question:
          "LCL peut-elle modifier les conditions de mon pret si je change d'assurance ?",
        answer:
          "Non, la loi interdit formellement a la banque de modifier les conditions de votre pret (taux, duree, etc.) en raison d'un changement d'assurance emprunteur. Si LCL tente de le faire, vous pouvez saisir le mediateur bancaire ou l'ACPR.",
      },
    ],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"],
    relatedProfiles: ["jeune-emprunteur", "cadre-superieur", "primo-accedant"],
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
      "Changer l'assurance emprunteur Banque Postale | Economisez jusqu'a 20 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur La Banque Postale (contrat CNP). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "La Banque Postale est la banque du groupe La Poste, historiquement positionnee sur une clientele grand public et accessible. Son contrat d'assurance emprunteur groupe est gere par CNP Assurances, le meme assureur que la Caisse d'Epargne. Avec le taux groupe le plus eleve de notre comparatif (0,46%), La Banque Postale est la banque ou le changement d'assurance emprunteur permet les economies les plus significatives.",
    insurerDescription:
      "CNP Assurances gere les contrats groupe de La Banque Postale depuis sa creation. Le contrat CNP propose via La Banque Postale est similaire a celui de la Caisse d'Epargne, avec les memes garanties de base. Cependant, le taux applique est plus eleve (0,46% contre 0,44% a la Caisse d'Epargne), ce qui s'explique par le profil moyen de la clientele Banque Postale et la politique tarifaire de l'etablissement.",
    clientReproaches: [
      "Taux groupe le plus eleve du marche (0,46%)",
      "Delais de traitement des demandes de changement souvent longs (jusqu'a 30 jours)",
      "Reseau postal pas toujours forme aux procedures de delegation d'assurance",
      "Conditions generales du contrat CNP identiques a la Caisse d'Epargne mais taux plus eleve",
      "Difficulte a joindre un interlocuteur competent sur les questions d'assurance emprunteur",
    ],
    strengths: [
      "Reseau de bureaux de poste tres dense, y compris en zones rurales",
      "Accessibilite pour les clienteles modestes et les primo-accedants",
      "Assureur CNP solide avec garantie de l'Etat",
      "Pas de frais de dossier pour le changement d'assurance",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur La Banque Postale, envoyez votre demande par lettre recommandee avec AR au centre financier qui gere votre pret (les coordonnees figurent sur vos releves de pret). Attention : les delais de traitement a La Banque Postale sont souvent plus longs que dans les autres banques. Prevoyez 3 a 5 semaines entre votre demande et la prise d'effet effective du nouveau contrat.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur La Banque Postale a tout moment ?",
        answer:
          "Oui, la loi Lemoine s'applique a La Banque Postale comme a toutes les banques. Vous pouvez changer a tout moment, sans frais. Toutefois, les retours d'experience montrent que La Banque Postale est souvent plus lente que les autres banques pour traiter les demandes.",
      },
      {
        question:
          "Combien puis-je economiser en changeant l'assurance emprunteur La Banque Postale ?",
        answer:
          "Avec le taux groupe le plus eleve du marche (0,46%), les economies potentielles sont tres importantes. Pour un pret de 200 000 euros sur 25 ans, un emprunteur de 30 ans peut economiser jusqu'a 20 000 euros en passant a un taux en delegation de 0,08% a 0,12%.",
      },
      {
        question:
          "Le contrat La Banque Postale est-il le meme que celui de la Caisse d'Epargne ?",
        answer:
          "Les deux banques utilisent CNP Assurances comme assureur groupe. Les conditions generales sont tres proches, mais le taux est plus eleve a La Banque Postale (0,46% contre 0,44%). Les garanties de base sont comparables.",
      },
      {
        question:
          "Comment accelerer le changement d'assurance a La Banque Postale ?",
        answer:
          "Pour eviter les delais, envoyez votre demande avec un dossier complet (nouveau contrat, conditions generales, tableau d'equivalence des garanties). Relancez par ecrit si vous n'avez pas de reponse sous 10 jours ouvrés. Vous pouvez egalement saisir le mediateur de La Banque Postale en cas de blocage.",
      },
    ],
    relatedBanks: ["caisse-epargne", "credit-agricole", "banque-populaire"],
    relatedProfiles: ["primo-accedant", "fonctionnaire", "senior-emprunteur"],
  },

  // -----------------------------------------------------------------------
  // 6. Societe Generale
  // -----------------------------------------------------------------------
  {
    slug: "societe-generale",
    name: "Societe Generale",
    shortName: "SG",
    badgeColor: "#E4002B",
    insurerName: "Sogecap",
    contractName: "Assurance Emprunteur Societe Generale (Sogecap)",
    groupRate: 0.40,
    metaTitle:
      "Changer l'assurance emprunteur Societe Generale | Economisez jusqu'a 12 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Societe Generale (contrat Sogecap). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "La Societe Generale est l'une des trois grandes banques cotees en France. Son contrat d'assurance emprunteur groupe est gere par Sogecap, la filiale assurance du groupe. Avec un taux de 0,40%, la Societe Generale se positionne dans la fourchette basse des contrats groupe bancaires. Neanmoins, ce taux reste largement superieur aux offres en delegation, surtout pour les emprunteurs jeunes et en bonne sante.",
    insurerDescription:
      "Sogecap est la compagnie d'assurance vie du groupe Societe Generale. Filiale a 100%, elle gere l'ensemble des contrats d'assurance emprunteur des clients de la banque. Le contrat groupe Sogecap propose des garanties correctes et un taux parmi les plus bas des contrats groupe, mais il reste un contrat mutualisé qui ne s'adapte pas au profil individuel de chaque emprunteur.",
    clientReproaches: [
      "Taux plus bas que la moyenne des contrats groupe mais toujours superieur aux offres en delegation",
      "Questionnaire medical plus exigeant que certaines banques concurrentes",
      "Garanties rachats d'exclusion (dos et psy) payantes en supplement",
      "Conditions de prise en charge de l'ITT assez restrictives",
      "Frais de dossier parfois factures pour le traitement de la demande de substitution",
    ],
    strengths: [
      "Taux groupe parmi les plus bas du marche bancaire (0,40%)",
      "Sogecap est un assureur solide et bien capitalise",
      "Espace client en ligne performant avec suivi des contrats",
      "Traitement des demandes de substitution relativement fluide",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Societe Generale, envoyez votre demande au Service Assurance Emprunteur de votre agence ou directement au centre de gestion dont les coordonnees figurent sur votre offre de pret. La Societe Generale est generalement reputee pour traiter les demandes de substitution dans les delais reglementaires. Le taux groupe etant deja relativement bas, les economies seront moins spectaculaires que chez BNP Paribas ou La Banque Postale, mais restent significatives.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Societe Generale a tout moment ?",
        answer:
          "Oui, la loi Lemoine vous permet de changer a tout moment. La Societe Generale est generalement reputee pour traiter les demandes de substitution de maniere relativement fluide, dans les 10 jours ouvrés reglementaires.",
      },
      {
        question:
          "Le taux Sogecap est deja bas, est-ce quand meme interessant de changer ?",
        answer:
          "Oui, meme avec un taux groupe de 0,40%, les economies restent significatives. Un emprunteur de 30 ans peut obtenir un taux en delegation de 0,08% a 0,12%, soit 3 a 5 fois moins cher. Sur un pret de 200 000 euros sur 20 ans, cela represente 5 000 a 12 000 euros d'economies.",
      },
      {
        question:
          "Sogecap est-elle fiable comme assureur emprunteur ?",
        answer:
          "Oui, Sogecap est une compagnie d'assurance solide, filiale du groupe Societe Generale. Sa solidite financiere n'est pas en question. Le probleme n'est pas la fiabilite de l'assureur mais le cout du contrat groupe mutualisé par rapport aux offres individuelles en delegation.",
      },
      {
        question:
          "La Societe Generale facture-t-elle des frais pour le changement d'assurance ?",
        answer:
          "La loi interdit aux banques de facturer des frais pour le changement d'assurance emprunteur. Si votre conseiller mentionne des frais, rappelez-lui que la loi Lemoine prevoit la gratuite totale de la procedure de substitution.",
      },
    ],
    relatedBanks: ["bnp-paribas", "lcl", "credit-mutuel"],
    relatedProfiles: ["cadre-superieur", "investisseur-locatif", "jeune-emprunteur"],
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
      "Changer l'assurance emprunteur Banque Populaire | Economisez jusqu'a 13 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Banque Populaire (contrat BPCE Vie). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "La Banque Populaire fait partie du groupe BPCE, deuxieme groupe bancaire francais, aux cotes de la Caisse d'Epargne. Son contrat d'assurance emprunteur groupe est gere par BPCE Vie (anciennement Natixis Assurances). Avec un taux groupe de 0,41%, la Banque Populaire se situe dans la fourchette basse des contrats groupe, mais un changement en delegation reste tres avantageux pour la majorite des profils.",
    insurerDescription:
      "BPCE Vie (anciennement Natixis Assurances) est la filiale assurance du groupe BPCE. Elle gere les contrats groupe de la Banque Populaire et, indirectement, participe a l'offre d'assurance emprunteur du groupe aux cotes de CNP Assurances (qui gere le contrat de la Caisse d'Epargne). Le contrat BPCE Vie est un contrat groupe classique avec des garanties standard et un taux mutualisé.",
    clientReproaches: [
      "Taux groupe de 0,41% qui reste superieur aux offres en delegation",
      "Structure regionale des Banques Populaires : les conditions peuvent varier d'une region a l'autre",
      "Garanties IPP parfois non incluses dans le contrat de base",
      "Delais de carence et de franchise parfois superieurs a ceux des contrats en delegation",
      "Information insuffisante sur le droit de changer d'assurance au moment de la souscription du pret",
    ],
    strengths: [
      "Taux groupe relativement competitif (0,41%)",
      "Banque cooperative avec une culture de proximite",
      "Bonne couverture des professions independantes et artisanales",
      "Conseils souvent personnalises grace au modele mutualiste",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Banque Populaire, adressez votre demande de substitution a votre agence locale par lettre recommandee avec AR. Attention : la Banque Populaire est organisee en banques regionales (BPCE, Banque Populaire du Sud, Banque Populaire Rives de Paris, etc.), chacune avec sa propre organisation. Identifiez bien l'entite qui gere votre pret avant d'envoyer votre courrier. La procedure reste la meme dans toutes les regions.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Banque Populaire a tout moment ?",
        answer:
          "Oui, la loi Lemoine vous donne le droit de changer votre assurance emprunteur Banque Populaire a tout moment. Les Banques Populaires, quelle que soit la region, sont tenues de respecter le delai de 10 jours ouvrés pour vous repondre.",
      },
      {
        question:
          "Le taux de la Banque Populaire varie-t-il selon les regions ?",
        answer:
          "Oui, les Banques Populaires sont des banques regionales cooperatives. Le taux du contrat groupe peut legerement varier d'une region a l'autre. Le taux de 0,41% est une moyenne nationale. Verifiez le taux exact sur votre offre de pret ou votre echeancier.",
      },
      {
        question:
          "La Banque Populaire est-elle le meme groupe que la Caisse d'Epargne ?",
        answer:
          "Oui, la Banque Populaire et la Caisse d'Epargne font partie du meme groupe BPCE. Cependant, leurs contrats d'assurance emprunteur sont differents : BPCE Vie pour la Banque Populaire et CNP Assurances pour la Caisse d'Epargne.",
      },
      {
        question:
          "Combien puis-je economiser en changeant l'assurance emprunteur Banque Populaire ?",
        answer:
          "Pour un pret de 200 000 euros sur 20 ans, un emprunteur de 35 ans non-fumeur peut economiser entre 6 000 et 13 000 euros en passant d'un taux groupe de 0,41% a un taux en delegation de 0,10% a 0,15%. Les economies sont d'autant plus importantes que vous etes jeune et en bonne sante.",
      },
    ],
    relatedBanks: ["caisse-epargne", "credit-mutuel", "credit-agricole"],
    relatedProfiles: ["professionnel-independant", "primo-accedant", "fonctionnaire"],
  },

  // -----------------------------------------------------------------------
  // 8. Credit Mutuel
  // -----------------------------------------------------------------------
  {
    slug: "credit-mutuel",
    name: "Credit Mutuel",
    shortName: "CM",
    badgeColor: "#004A99",
    insurerName: "ACM (Assurances du Credit Mutuel)",
    contractName: "Assurance Emprunteur Credit Mutuel (ACM)",
    groupRate: 0.38,
    metaTitle:
      "Changer l'assurance emprunteur Credit Mutuel | Economisez jusqu'a 10 000 euros",
    metaDescription:
      "Comparez et changez votre assurance emprunteur Credit Mutuel (contrat ACM). Calculez vos economies et trouvez une assurance moins chere en delegation.",
    introText:
      "Le Credit Mutuel est une banque mutualiste francaise, souvent plébiscitée pour sa relation client de proximite. Son contrat d'assurance emprunteur groupe est gere par ACM (Assurances du Credit Mutuel), la filiale assurance du groupe. Avec un taux groupe de 0,38%, le Credit Mutuel affiche le taux le plus bas des contrats groupe bancaires de notre comparatif. Neanmoins, meme ce taux reste significativement superieur aux offres individuelles en delegation.",
    insurerDescription:
      "ACM (Assurances du Credit Mutuel) est un groupe d'assurance mutualiste qui gere l'ensemble des produits d'assurance des clients du Credit Mutuel et du CIC. ACM est un acteur solide du marche de l'assurance en France. Le contrat groupe ACM est repute pour la qualite de ses garanties, avec des conditions generales souvent plus favorables que celles de ses concurrents bancaires (franchise ITT plus courte, meilleure couverture psy/dos).",
    clientReproaches: [
      "Taux groupe bas mais toujours superieur aux offres individuelles en delegation",
      "Forte culture de fidelisation qui peut rendre le changement d'assurance plus difficile en pratique",
      "Les conseillers insistent beaucoup sur le 'package' assurance + pret",
      "Information parfois incomplete sur le droit au changement d'assurance",
      "Structure federale : chaque federation du Credit Mutuel peut avoir des pratiques differentes",
    ],
    strengths: [
      "Taux groupe le plus bas du marche bancaire (0,38%)",
      "ACM propose des garanties parmi les meilleures des contrats groupe",
      "Franchise ITT de 60 jours (contre 90 jours dans beaucoup de banques)",
      "Bonne reputation en gestion des sinistres",
      "Modele mutualiste avec une relation client de proximite",
    ],
    switchSpecificInfo:
      "Pour changer votre assurance emprunteur Credit Mutuel, adressez votre demande a votre caisse locale du Credit Mutuel. Attention : le Credit Mutuel est organise en federations regionales (Credit Mutuel de Bretagne, Credit Mutuel du Sud-Ouest, Credit Mutuel Alliance Federale, etc.) avec des pratiques qui peuvent varier. Le Credit Mutuel est repute pour etre plus resistant que d'autres banques aux demandes de changement d'assurance, en raison de sa culture mutualiste forte. Soyez prepare a insister et n'hesitez pas a citer la loi Lemoine.",
    faq: [
      {
        question:
          "Puis-je changer mon assurance emprunteur Credit Mutuel a tout moment ?",
        answer:
          "Oui, la loi Lemoine s'applique au Credit Mutuel comme a toutes les banques, y compris les banques mutualistes. Vous pouvez changer a tout moment, sans frais. Le Credit Mutuel ne peut refuser que si les garanties ne sont pas equivalentes.",
      },
      {
        question:
          "Le taux du Credit Mutuel est deja le plus bas, vaut-il quand meme le coup de changer ?",
        answer:
          "Oui, meme avec le taux groupe le plus bas (0,38%), les economies restent interessantes. Un emprunteur de 30 ans peut obtenir un taux de 0,08% en delegation, soit environ 4 fois moins cher. Sur un pret de 200 000 euros sur 20 ans, cela represente 5 000 a 10 000 euros d'economies.",
      },
      {
        question:
          "Les garanties ACM sont-elles meilleures que celles d'un contrat en delegation ?",
        answer:
          "Les garanties ACM sont parmi les meilleures des contrats groupe, mais un bon contrat en delegation offrira des garanties equivalentes voire superieures a un cout bien inferieur. Les contrats individuels permettent en plus de personnaliser les garanties selon vos besoins specifiques.",
      },
      {
        question:
          "Le Credit Mutuel est-il difficile pour les changements d'assurance ?",
        answer:
          "Le Credit Mutuel est repute pour etre plus resistant que d'autres banques aux demandes de changement, en raison de sa culture mutualiste. Cependant, la loi est de votre cote : le Credit Mutuel a l'obligation legale de repondre sous 10 jours ouvrés et ne peut refuser que si les garanties ne sont pas equivalentes.",
      },
    ],
    relatedBanks: ["banque-populaire", "societe-generale", "credit-agricole"],
    relatedProfiles: ["jeune-emprunteur", "professionnel-independant", "primo-accedant"],
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
