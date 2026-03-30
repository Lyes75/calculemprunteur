export interface GuideSection {
  title: string;
  content: string;
}

export interface GuideData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  updatedDate: string;
  sections: GuideSection[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  ctaTitle: string;
  ctaSubtitle: string;
  relatedGuides: string[];
  relatedProfiles: string[];
  relatedBanks: string[];
}

export const GUIDES: GuideData[] = [
  {
    slug: "loi-lemoine",
    metaTitle: "Loi Lemoine 2026 : Changer d'Assurance Emprunteur à Tout Moment",
    metaDescription: "Loi Lemoine : changez d'assurance emprunteur à tout moment, sans frais, sans date anniversaire. Ce qui change concrètement pour votre prêt.",
    heroTitle: "Loi Lemoine : ce qui change concrètement pour votre assurance emprunteur",
    heroSubtitle: "Depuis juin 2022, la loi Lemoine permet de changer d'assurance emprunteur à tout moment, sans frais et sans attendre la date anniversaire. Voici ce que ça signifie pour vous, et comment en profiter.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Ce que la loi Lemoine a changé",
        content: "Avant la loi Lemoine, changer d'assurance emprunteur était un parcours du combattant. La loi Hamon (2014) permettait un changement uniquement dans les 12 premiers mois du prêt. L'amendement Bourquin (2017) ouvrait une fenêtre de résiliation chaque année à la date anniversaire du contrat, avec un préavis de 2 mois. Dans les deux cas, les emprunteurs rataient souvent les délais ou se heurtaient à des refus mal motivés.\n\nLa loi Lemoine, entrée en vigueur le 1er juin 2022 pour les nouveaux contrats et le 1er septembre 2022 pour tous les contrats en cours, a tout simplifié. Vous pouvez désormais changer d'assurance emprunteur à tout moment, sans frais, sans préavis, et sans attendre de date anniversaire. Il suffit d'envoyer votre demande de substitution à votre banque, accompagnée du nouveau contrat.\n\nLa banque dispose alors de 10 jours ouvrés pour répondre. Le seul motif de refus recevable est la non-équivalence de garanties. Si la banque ne répond pas dans ce délai, elle est réputée avoir accepté. Si elle refuse, elle doit le motiver par écrit, en précisant chaque critère de garantie non respecté."
      },
      {
        title: "Suppression du questionnaire médical",
        content: "L'une des avancées majeures de la loi Lemoine est la suppression du questionnaire de santé dans certains cas. Depuis le 1er juin 2022, l'assureur ne peut pas vous demander de remplir un questionnaire médical si les deux conditions suivantes sont réunies : la part assurée par personne ne dépasse pas 200 000 euros, et le prêt arrive à échéance avant votre 60e anniversaire.\n\nConcrètement, pour un couple qui emprunte 400 000 euros à parts égales (200 000 euros chacun), chaque emprunteur est sous le seuil de 200 000 euros. Si le prêt se termine avant les 60 ans de chaque co-emprunteur, aucun questionnaire médical n'est exigé.\n\nCette suppression est une avancée considérable pour les personnes ayant des antécédents de santé. Plus besoin de déclarer un ancien cancer, un diabète ou une maladie chronique si vous êtes dans les critères. L'assureur ne peut poser aucune question sur votre état de santé, ni exiger d'examen médical."
      },
      {
        title: "Droit à l'oubli renforcé",
        content: "La loi Lemoine a également renforcé le droit à l'oubli pour les anciens malades du cancer et de l'hépatite C. Auparavant fixé à 10 ans après la fin du protocole thérapeutique, le délai a été réduit à 5 ans. Concrètement, si votre traitement contre un cancer ou une hépatite C s'est terminé depuis plus de 5 ans sans rechute, vous n'avez plus à le déclarer à l'assureur.\n\nCe droit à l'oubli s'applique quel que soit le type de cancer, y compris les cancers les plus courants. Il couvre aussi les cancers diagnostiqués avant l'âge de 21 ans, pour lesquels le délai était déjà de 5 ans avant la loi Lemoine.\n\nParallèlement, la grille de référence AERAS a été étendue. Elle liste les pathologies pour lesquelles les assureurs ne peuvent pas appliquer de surprime ou d'exclusion au-delà d'un certain délai. La loi Lemoine a imposé une mise à jour régulière de cette grille pour intégrer les progrès médicaux."
      },
      {
        title: "Comment changer d'assurance avec la loi Lemoine",
        content: "La procédure de changement d'assurance emprunteur avec la loi Lemoine se déroule en 4 étapes simples.\n\nPremièrement, simulez votre économie en ligne. Comparez votre contrat actuel avec les offres du marché pour savoir combien vous pouvez économiser. Un comparateur spécialisé vous donnera un résultat en 2 minutes.\n\nDeuxièmement, souscrivez le nouveau contrat auprès de l'assureur de votre choix. Il doit proposer des garanties au moins équivalentes à celles exigées par votre banque (décès, PTIA, ITT, IPT, IPP selon les cas). L'assureur vous fournira une attestation d'assurance et les conditions générales.\n\nTroisièmement, envoyez votre demande de substitution à votre banque, par courrier recommandé ou par tout autre support durable. Joignez le nouveau contrat, l'attestation d'assurance, et éventuellement la fiche standardisée d'information (FSI) de votre prêt pour faciliter la comparaison.\n\nQuatrièmement, la banque dispose de 10 jours ouvrés pour répondre. En cas d'acceptation, elle émet un avenant à votre contrat de prêt. En cas de refus, elle doit motiver sa décision par écrit. Si elle ne répond pas, c'est un accord tacite."
      },
      {
        title: "Ce que la banque n'a pas le droit de faire",
        content: "La loi Lemoine encadre strictement le comportement des banques face à une demande de changement d'assurance. Voici ce que votre banque n'a pas le droit de faire.\n\nRefuser sans motif écrit. Tout refus doit être motivé par écrit, en précisant exactement quels critères de garantie ne sont pas respectés. Un simple refus oral ou un courrier vague n'est pas recevable.\n\nModifier le taux de votre crédit. La banque ne peut pas augmenter le taux d'intérêt de votre prêt, ni modifier les conditions du crédit, sous prétexte que vous changez d'assurance. C'est interdit par la loi.\n\nFacturer des frais. Le changement d'assurance emprunteur est gratuit. La banque ne peut pas vous facturer de frais de dossier, de frais d'avenant, ni aucun autre frais lié au changement.\n\nDépasser le délai de réponse. La banque a 10 jours ouvrés pour répondre. Si elle dépasse ce délai, la substitution est réputée acceptée. En cas de non-respect, la banque s'expose à une amende de 3 000 euros."
      }
    ],
    faq: [
      {
        question: "La loi Lemoine s'applique-t-elle à mon prêt signé avant 2022 ?",
        answer: "Oui. Depuis le 1er septembre 2022, la loi Lemoine s'applique à tous les contrats d'assurance emprunteur en cours, quelle que soit la date de signature du prêt. Que votre crédit date de 2010, 2018 ou 2021, vous pouvez changer d'assurance à tout moment, sans frais et sans attendre de date anniversaire."
      },
      {
        question: "Puis-je changer plusieurs fois d'assurance emprunteur ?",
        answer: "Oui, il n'y a aucune limite au nombre de changements. Vous pouvez changer d'assurance emprunteur autant de fois que vous le souhaitez pendant la durée de votre prêt. Chaque changement est gratuit et suit la même procédure."
      },
      {
        question: "La loi Lemoine s'applique-t-elle aux prêts professionnels ?",
        answer: "Non, la loi Lemoine ne s'applique qu'aux prêts immobiliers à usage d'habitation, qu'il s'agisse d'une résidence principale, secondaire ou d'un investissement locatif. Les prêts professionnels, les crédits à la consommation et les prêts travaux seuls ne sont pas concernés."
      },
      {
        question: "Mon courtier peut-il faire les démarches de changement pour moi ?",
        answer: "Oui, et c'est même recommandé. Un courtier en assurance emprunteur peut gérer l'intégralité de la procédure : comparaison des offres, vérification de l'équivalence de garanties, envoi de la demande de substitution, suivi du dossier auprès de la banque. Il connaît les critères exigés par chaque banque et sait comment formuler la demande pour maximiser les chances d'acceptation."
      }
    ],
    ctaTitle: "Profitez de la loi Lemoine maintenant",
    ctaSubtitle: "Simulez votre économie en 2 minutes et découvrez combien vous pouvez économiser en changeant d'assurance emprunteur.",
    relatedGuides: ["lettre-resiliation", "equivalence-garanties", "loi-hamon-vs-lemoine"],
    relatedProfiles: ["jeune-emprunteur", "sans-questionnaire-medical", "risque-aggrave"],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"]
  },
  {
    slug: "lettre-resiliation",
    metaTitle: "Lettre de Résiliation Assurance Emprunteur 2026 : Modèle Gratuit",
    metaDescription: "Modèle de lettre de résiliation assurance emprunteur conforme loi Lemoine. Pré-remplie avec vos données, prête à envoyer à votre banque.",
    heroTitle: "Lettre de résiliation assurance emprunteur : modèle et guide complet",
    heroSubtitle: "Votre lettre de changement d'assurance emprunteur doit respecter un format précis pour être recevable par votre banque. Voici le modèle conforme à la loi Lemoine, les mentions obligatoires, et les erreurs à éviter.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Ce que la lettre doit contenir",
        content: "Pour être recevable, votre lettre de changement d'assurance emprunteur doit contenir plusieurs mentions obligatoires. L'absence d'une seule de ces mentions peut donner à la banque un prétexte pour retarder ou refuser le traitement de votre demande.\n\nVos coordonnées complètes (nom, prénom, adresse) et celles de la banque (service assurance emprunteur, adresse du siège ou du centre de gestion). Le numéro de votre prêt immobilier, tel qu'il figure sur votre offre de prêt ou vos relevés. La date de signature du prêt et le montant initial emprunté. La référence de votre contrat d'assurance actuel, si elle est différente du numéro de prêt.\n\nLa mention explicite que vous exercez votre droit de substitution d'assurance au titre de la loi Lemoine (article L.313-30 du Code de la consommation). Le nom de votre nouvel assureur et la référence du nouveau contrat. La date de prise d'effet souhaitée pour le nouveau contrat.\n\nVous devez joindre à la lettre : le certificat d'adhésion ou l'attestation d'assurance du nouveau contrat, les conditions générales et particulières du nouveau contrat, et si possible la fiche standardisée d'information (FSI) de votre prêt pour faciliter la comparaison des garanties."
      },
      {
        title: "Comment envoyer la lettre",
        content: "La loi Lemoine n'impose pas de mode d'envoi spécifique. Vous pouvez envoyer votre demande par courrier recommandé avec accusé de réception, par email, ou par tout autre support durable permettant de prouver la date d'envoi.\n\nEn pratique, le recommandé avec accusé de réception reste le moyen le plus sûr. Il constitue une preuve de la date d'envoi et de la réception par la banque, ce qui est essentiel pour faire courir le délai de 10 jours ouvrés de réponse.\n\nCertaines banques proposent un espace en ligne pour déposer les demandes de changement d'assurance. C'est un canal valable, mais pensez à conserver une copie horodatée de votre envoi (capture d'écran, accusé de réception électronique).\n\nSi vous passez par un courtier, il se chargera généralement de l'envoi de la lettre et du suivi. C'est l'option la plus confortable, car le courtier sait exactement à quelle adresse envoyer la demande et quels documents joindre."
      },
      {
        title: "Les erreurs qui retardent le changement",
        content: "Plusieurs erreurs fréquentes peuvent retarder le traitement de votre demande de changement, voire donner à la banque un motif de refus.\n\nEnvoyer la lettre au mauvais service. Les grandes banques ont des services dédiés à l'assurance emprunteur, souvent centralisés dans un centre de gestion différent de votre agence. Envoyez votre demande à l'adresse spécifique indiquée dans votre contrat de prêt ou sur le site de la banque.\n\nOublier le numéro de prêt ou la référence du contrat d'assurance. Sans ces informations, la banque ne peut pas identifier votre dossier et vous demandera des compléments, ce qui rallonge les délais.\n\nNe pas joindre le nouveau contrat d'assurance. La banque a besoin du contrat complet pour vérifier l'équivalence de garanties. Sans ce document, elle peut légitimement retarder sa réponse.\n\nDemander une date de prise d'effet trop proche. Laissez un délai raisonnable (3 à 4 semaines minimum) entre l'envoi de la lettre et la date de prise d'effet souhaitée, pour que la banque ait le temps de traiter le dossier et d'émettre l'avenant."
      },
      {
        title: "Que faire si la banque ne répond pas",
        content: "Si la banque ne répond pas dans le délai de 10 jours ouvrés, la substitution est réputée acceptée. C'est l'un des apports majeurs de la loi Lemoine. En cas de silence, la banque ne peut plus s'opposer au changement.\n\nEn pratique, si vous n'avez pas de réponse après 10 jours ouvrés, envoyez un courrier de relance rappelant la date de votre demande initiale et citant l'article L.313-30 du Code de la consommation. Précisez que le silence vaut acceptation et que vous considérez le changement comme effectif.\n\nSi la banque persiste à ne pas répondre ou refuse de mettre en place le nouveau contrat, vous pouvez saisir le médiateur bancaire (ses coordonnées figurent sur votre convention de compte ou sur le site de la banque). Vous pouvez également signaler le manquement à l'ACPR (Autorité de contrôle prudentiel et de résolution), le gendarme du secteur bancaire.\n\nConservez tous les documents : accusé de réception de votre envoi initial, copie de la lettre et des pièces jointes, éventuels échanges avec la banque. Ces preuves seront essentielles en cas de litige."
      }
    ],
    faq: [
      {
        question: "Dois-je envoyer ma lettre en recommandé obligatoirement ?",
        answer: "Non, le recommandé n'est pas obligatoire. La loi Lemoine accepte tout support durable (email, courrier simple, espace en ligne). Cependant, le recommandé avec accusé de réception reste vivement conseillé car il constitue une preuve irréfutable de la date d'envoi et de réception, ce qui est essentiel pour faire courir le délai de 10 jours."
      },
      {
        question: "Puis-je donner mandat à mon courtier pour envoyer la lettre ?",
        answer: "Oui, c'est tout à fait possible et même recommandé. Le courtier connaît les adresses exactes des services de changement d'assurance de chaque banque, les documents à joindre, et les formulations qui facilitent l'acceptation. Il peut agir en votre nom avec un mandat de résiliation que vous signerez."
      },
      {
        question: "Que faire si la banque dit que les garanties ne sont pas équivalentes ?",
        answer: "Si la banque refuse pour non-équivalence de garanties, elle doit préciser par écrit chaque critère non respecté. Vérifiez ces critères avec la fiche standardisée d'information (FSI) de votre prêt. Si les critères cités sont bien manquants, demandez à votre nouvel assureur d'ajuster les garanties. Si les critères cités ne figurent pas sur la FSI ou sont mal interprétés, contestez le refus auprès du médiateur bancaire."
      },
      {
        question: "La lettre peut-elle être générée automatiquement ?",
        answer: "Oui, de nombreux comparateurs et courtiers en assurance emprunteur proposent de générer automatiquement votre lettre de changement, pré-remplie avec vos données de prêt et les informations du nouveau contrat. C'est un gain de temps appréciable et cela réduit le risque d'oubli d'une mention obligatoire."
      }
    ],
    ctaTitle: "Générez votre lettre de changement",
    ctaSubtitle: "Simulez votre économie puis recevez votre lettre pré-remplie, conforme à la loi Lemoine.",
    relatedGuides: ["loi-lemoine", "refus-banque", "equivalence-garanties"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire"],
    relatedBanks: ["bnp-paribas", "credit-agricole", "caisse-depargne"]
  },
  {
    slug: "equivalence-garanties",
    metaTitle: "Équivalence de Garanties Assurance Emprunteur : Guide Complet 2026",
    metaDescription: "Équivalence de garanties : la seule condition pour changer d'assurance emprunteur. 18 critères CCSF, fiche standardisée, comment vérifier.",
    heroTitle: "Équivalence de garanties : la clé pour changer d'assurance emprunteur",
    heroSubtitle: "L'équivalence de garanties est le seul critère que votre banque peut exiger pour accepter un changement d'assurance. Voici comment vérifier que votre nouveau contrat respecte cette condition.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Le principe de l'équivalence de garanties",
        content: "Depuis la loi Lagarde (2010), vous avez le droit de choisir une assurance emprunteur différente de celle proposée par votre banque, à condition que les garanties soient au moins équivalentes. C'est le principe de l'équivalence de garanties, aussi appelé principe de libre choix de l'assurance.\n\nConcrètement, votre nouveau contrat doit couvrir les mêmes risques que ceux exigés par la banque, avec un niveau de protection au moins identique. La banque ne peut pas exiger que le nouveau contrat soit strictement identique à l'ancien, mais seulement qu'il soit équivalent sur les critères qu'elle a définis.\n\nLa notion d'équivalence a été précisée par le Comité consultatif du secteur financier (CCSF), qui a établi une liste de 18 critères maximum que les banques peuvent utiliser pour évaluer l'équivalence. Chaque banque choisit dans cette liste les critères qu'elle considère comme essentiels et les communique à l'emprunteur via la fiche standardisée d'information."
      },
      {
        title: "Les 18 critères du CCSF",
        content: "Le CCSF a défini 18 critères répartis entre les différentes garanties de l'assurance emprunteur. Chaque banque en sélectionne au maximum 11 pour les garanties obligatoires (décès et PTIA) et jusqu'à 4 pour chaque garantie complémentaire (ITT, IPT, IPP).\n\nPour la garantie décès et PTIA : la couverture des pathologies dorsales, la couverture des affections psychiatriques, la franchise (en jours), le mode d'indemnisation (forfaitaire ou indemnitaire), la quotité assurée, la durée de couverture, les sports et activités couverts, les exclusions géographiques.\n\nPour les garanties incapacité et invalidité (ITT, IPT, IPP) : la définition de l'incapacité (profession exercée ou toute profession), la franchise (en jours), le délai de carence, la durée maximale d'indemnisation, le mode d'indemnisation (forfaitaire ou indemnitaire), la couverture du temps partiel thérapeutique, les conditions de maintien de la garantie en cas de changement de situation professionnelle.\n\nChaque banque publie les critères qu'elle a retenus dans la fiche standardisée d'information (FSI) remise au moment de l'offre de prêt. C'est ce document de référence qui sert de base à la comparaison lors d'un changement d'assurance."
      },
      {
        title: "La fiche standardisée d'information (FSI)",
        content: "La fiche standardisée d'information (FSI) est le document clé pour vérifier l'équivalence de garanties. Elle est obligatoirement remise par la banque au moment de l'offre de prêt, et vous pouvez la redemander à tout moment.\n\nCette fiche liste précisément les garanties exigées par la banque et les critères retenus parmi les 18 du CCSF. Elle indique, pour chaque garantie, le niveau de couverture minimum requis. C'est sur cette base que la banque évaluera l'équivalence de votre nouveau contrat.\n\nSi vous ne retrouvez pas votre FSI, demandez-la à votre banque par courrier ou email. Elle est tenue de vous la fournir. En attendant, votre nouvel assureur ou votre courtier peut généralement identifier les critères habituels de votre banque, car les exigences sont relativement standardisées au sein de chaque établissement.\n\nAstuce : transmettez votre FSI à votre nouvel assureur dès le début du processus. Il pourra ainsi adapter son offre pour respecter exactement les critères de votre banque et minimiser le risque de refus pour non-équivalence."
      },
      {
        title: "Que faire en cas de refus pour non-équivalence",
        content: "Si la banque refuse votre changement d'assurance pour non-équivalence de garanties, ne baissez pas les bras. Voici la marche à suivre.\n\nD'abord, analysez le motif de refus. La banque doit préciser par écrit quels critères de garantie ne sont pas respectés. Comparez ces critères avec ceux listés sur votre FSI. Si les critères cités par la banque ne figurent pas sur la FSI, le refus est abusif.\n\nEnsuite, demandez à votre nouvel assureur d'ajuster les garanties. Dans la plupart des cas, il est possible d'ajouter ou de renforcer une garantie spécifique pour atteindre l'équivalence. Le surcoût est généralement minime par rapport à l'économie globale du changement.\n\nSi le refus vous semble infondé (critères non listés sur la FSI, interprétation abusive, exigences supérieures à l'équivalence), vous avez plusieurs recours. Contactez d'abord le service réclamation de la banque. En l'absence de réponse satisfaisante, saisissez le médiateur bancaire. Vous pouvez également signaler la pratique à l'ACPR.\n\nEnfin, sachez qu'un courtier spécialisé peut vous aider à contester un refus abusif. Il connaît les critères réels de chaque banque et sait comment formuler une réponse argumentée."
      }
    ],
    faq: [
      {
        question: "Où trouver ma fiche standardisée d'information ?",
        answer: "La FSI vous a été remise avec votre offre de prêt. Vous la trouverez dans le dossier de votre crédit immobilier. Si vous ne la retrouvez pas, demandez-la à votre banque, qui est tenue de vous la fournir. Certaines banques la mettent également à disposition dans votre espace client en ligne."
      },
      {
        question: "Le nouveau contrat doit-il être 100% identique à l'ancien ?",
        answer: "Non, il doit être équivalent, pas identique. Cela signifie que le niveau de couverture doit être au moins aussi protecteur sur les critères retenus par la banque. Le nouveau contrat peut être différent sur des critères non retenus par la banque, ou même offrir une meilleure couverture sur certains points."
      },
      {
        question: "L'assureur vérifie-t-il l'équivalence avant de me proposer un contrat ?",
        answer: "Oui, les assureurs spécialisés en délégation connaissent les critères habituels de chaque banque. Si vous leur transmettez votre FSI, ils adapteront leur offre pour respecter les exigences de votre banque. C'est pourquoi il est important de fournir ce document dès le début de votre démarche."
      },
      {
        question: "Combien de critères la banque peut-elle exiger ?",
        answer: "La banque peut retenir au maximum 11 critères parmi les 18 définis par le CCSF pour les garanties décès et PTIA, et jusqu'à 4 critères supplémentaires pour chaque garantie complémentaire (ITT, IPT, IPP). En pratique, la plupart des banques retiennent entre 8 et 11 critères au total."
      }
    ],
    ctaTitle: "Vérifiez si vous pouvez changer",
    ctaSubtitle: "Simulez votre économie et recevez une offre avec des garanties équivalentes à celles de votre banque.",
    relatedGuides: ["loi-lemoine", "refus-banque", "delegation-assurance"],
    relatedProfiles: ["risque-aggrave", "senior"],
    relatedBanks: ["lcl", "banque-populaire", "credit-mutuel"]
  },
  {
    slug: "taux-assurance-emprunteur",
    metaTitle: "Taux Assurance Emprunteur 2026 : Barème par Âge et Profil",
    metaDescription: "Taux assurance emprunteur 2026 : de 0,08% (25 ans) à 1,20% (65 ans). Barème par âge, fumeur/non-fumeur, groupe vs délégation.",
    heroTitle: "Taux assurance emprunteur 2026 : combien payez-vous vraiment ?",
    heroSubtitle: "Le taux d'assurance emprunteur varie de 0,08% à plus de 1% selon votre âge, votre état de santé et le type de contrat. Voici les barèmes actuels pour savoir si vous payez trop cher.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Taux moyens par tranche d'âge en 2026",
        content: "Les taux d'assurance emprunteur varient considérablement selon l'âge de l'emprunteur. Voici les fourchettes constatées en 2026 pour un emprunteur non-fumeur en bonne santé.\n\nEntre 25 et 35 ans, le taux en délégation se situe entre 0,08% et 0,15% du capital emprunté. Le contrat groupe de la banque propose généralement un taux entre 0,25% et 0,40%. L'écart est déjà significatif.\n\nEntre 35 et 45 ans, le taux en délégation varie de 0,15% à 0,30%, contre 0,35% à 0,55% pour un contrat groupe. C'est souvent dans cette tranche d'âge que l'économie en valeur absolue est la plus importante, car les montants empruntés sont élevés.\n\nEntre 45 et 55 ans, comptez entre 0,30% et 0,55% en délégation, contre 0,55% à 0,80% en contrat groupe. Les écarts se resserrent un peu mais restent significatifs.\n\nAu-delà de 55 ans, les taux augmentent plus fortement : de 0,50% à 0,90% en délégation, contre 0,80% à 1,20% en contrat groupe. Les profils seniors bénéficient malgré tout d'une économie substantielle en passant en délégation."
      },
      {
        title: "L'impact du tabac sur le taux",
        content: "Le statut fumeur ou non-fumeur est l'un des facteurs les plus impactants sur le taux d'assurance emprunteur. En moyenne, un fumeur paie entre 50% et 100% de plus qu'un non-fumeur pour la même couverture.\n\nConcrètement, un emprunteur de 35 ans non-fumeur obtiendra un taux autour de 0,12% en délégation. Le même profil fumeur se verra proposer un taux entre 0,20% et 0,25%. Sur un prêt de 250 000 euros sur 20 ans, cela représente une différence de 2 000 à 3 000 euros sur la durée totale.\n\nBonne nouvelle : si vous avez arrêté de fumer depuis plus de 24 mois, la plupart des assureurs vous considèrent comme non-fumeur. Certains assureurs appliquent même un délai réduit de 12 mois. Il est donc intéressant de changer d'assurance après avoir arrêté le tabac pour bénéficier du tarif non-fumeur.\n\nAttention : la déclaration de statut fumeur/non-fumeur est vérifiable. En cas de sinistre, si l'assureur découvre une fausse déclaration, il peut refuser de vous indemniser. Soyez toujours honnête dans vos déclarations."
      },
      {
        title: "Contrat groupe vs délégation : pourquoi l'écart de taux",
        content: "L'écart de taux entre le contrat groupe de la banque et un contrat en délégation s'explique par plusieurs facteurs structurels.\n\nLa mutualisation. Le contrat groupe de la banque applique un taux moyen à tous les emprunteurs, quel que soit leur profil de risque. Les jeunes emprunteurs en bonne santé payent donc plus cher pour compenser les profils plus âgés ou à risque. À l'inverse, un assureur en délégation propose un tarif personnalisé, adapté à votre profil exact.\n\nLes marges. Les banques réalisent une marge significative sur l'assurance emprunteur, souvent supérieure à 50% du montant de la prime. C'est l'un de leurs postes de revenus les plus rentables. Les assureurs en délégation, en concurrence directe, pratiquent des marges plus faibles pour attirer les clients.\n\nLes frais de structure. Les grandes banques ont des coûts de gestion élevés (réseau d'agences, personnel, systèmes d'information). Les assureurs en délégation, souvent plus agiles et digitalisés, ont des coûts de structure inférieurs qu'ils répercutent sur les tarifs.\n\nRésultat : l'économie moyenne constatée en passant d'un contrat groupe à une délégation est de 30% à 50% du coût de l'assurance. Sur la durée d'un prêt de 20 ans, cela représente souvent 5 000 à 15 000 euros."
      },
      {
        title: "Comment vérifier votre taux actuel",
        content: "Pour savoir si vous payez trop cher, vous devez d'abord connaître votre taux actuel. Voici comment le retrouver et le comparer.\n\nSur votre offre de prêt, le taux d'assurance est indiqué en pourcentage du capital emprunté (ou parfois du capital restant dû). Recherchez la mention TAEA (Taux Annuel Effectif d'Assurance), obligatoirement mentionnée depuis 2014.\n\nSur vos relevés de prêt, le montant de la cotisation d'assurance apparaît chaque mois à côté de l'échéance de remboursement. Pour retrouver le taux, divisez la cotisation annuelle (cotisation mensuelle x 12) par le capital emprunté initial.\n\nSi vous avez un contrat sur le capital restant dû, le calcul est différent : la cotisation diminue chaque année. Comparez alors le coût total de l'assurance sur la durée restante du prêt, plutôt que le taux seul.\n\nUne fois votre taux identifié, comparez-le avec les barèmes du marché pour votre âge et votre profil. Si votre taux est significativement supérieur aux taux moyens en délégation, vous avez probablement intérêt à changer."
      }
    ],
    faq: [
      {
        question: "Quel est le taux moyen d'assurance emprunteur en 2026 ?",
        answer: "Le taux moyen varie fortement selon l'âge et le type de contrat. En contrat groupe bancaire, il se situe autour de 0,35% à 0,45% pour l'ensemble des emprunteurs. En délégation, la moyenne tombe à 0,15% à 0,25%. Pour un profil jeune (moins de 35 ans, non-fumeur), les meilleurs taux en délégation descendent à 0,08%."
      },
      {
        question: "Le taux de mon assurance peut-il évoluer en cours de prêt ?",
        answer: "Cela dépend de votre contrat. Un contrat à taux fixe sur le capital initial ne change pas : vous payez la même cotisation chaque mois pendant toute la durée du prêt. Un contrat sur le capital restant dû évolue : la cotisation diminue au fur et à mesure que vous remboursez. Le taux reste le même, mais la base de calcul diminue."
      },
      {
        question: "J'ai arrêté de fumer il y a un an, puis-je bénéficier du tarif non-fumeur ?",
        answer: "La plupart des assureurs considèrent un ex-fumeur comme non-fumeur après 24 mois d'arrêt complet (cigarettes, cigarettes électroniques avec nicotine, cigares, pipe). Certains assureurs acceptent un délai de 12 mois. Si vous avez arrêté récemment, attendez le délai requis puis changez d'assurance pour bénéficier du meilleur tarif."
      },
      {
        question: "Puis-je négocier le taux de mon assurance emprunteur ?",
        answer: "Avec la banque, la négociation est possible mais rarement fructueuse. Le contrat groupe a un tarif standardisé avec peu de marge de manoeuvre. La meilleure stratégie est de passer en délégation, où la concurrence entre assureurs joue naturellement en votre faveur. Vous pouvez aussi utiliser une offre en délégation comme levier de négociation avec votre banque."
      }
    ],
    ctaTitle: "Comparez votre taux avec le marché",
    ctaSubtitle: "Entrez votre taux actuel et découvrez en 2 minutes si vous payez trop cher.",
    relatedGuides: ["cout-assurance-emprunteur", "delegation-assurance", "loi-lemoine"],
    relatedProfiles: ["jeune-emprunteur", "senior", "fonctionnaire"],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"]
  },
  {
    slug: "questionnaire-medical",
    metaTitle: "Questionnaire Médical Assurance Emprunteur 2026 : Règles et Suppression",
    metaDescription: "Questionnaire médical assurance emprunteur : quand est-il obligatoire ? Quand est-il supprimé (loi Lemoine) ? Ce qu'il faut déclarer ou non.",
    heroTitle: "Questionnaire médical assurance emprunteur : ce que vous devez savoir",
    heroSubtitle: "Le questionnaire de santé est un passage obligé pour la plupart des emprunteurs. Mais la loi Lemoine l'a supprimé dans certains cas. Voici les règles en vigueur, ce que vous devez déclarer, et ce que vous pouvez taire.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Quand le questionnaire médical est-il supprimé",
        content: "Depuis la loi Lemoine du 1er juin 2022, le questionnaire médical est supprimé pour les emprunteurs qui remplissent deux conditions cumulatives : la part assurée par personne ne dépasse pas 200 000 euros, et le remboursement du prêt s'achève avant le 60e anniversaire de l'assuré.\n\nCes deux conditions s'apprécient par personne, pas par prêt. Si vous empruntez en couple et que chaque co-emprunteur est assuré pour 200 000 euros maximum, vous êtes tous les deux dispensés du questionnaire. De même, si vous avez plusieurs prêts en cours, c'est l'encours total assuré qui compte, pas chaque prêt individuellement.\n\nAttention, certains assureurs cumulent les encours pour apprécier le seuil de 200 000 euros. Si vous avez déjà un prêt en cours assuré pour 150 000 euros et que vous contractez un nouveau prêt de 100 000 euros, l'encours total de 250 000 euros dépasse le seuil. Un questionnaire médical pourra alors être exigé pour le nouveau prêt.\n\nSi vous ne remplissez pas ces conditions, le questionnaire médical reste obligatoire. Mais le droit à l'oubli et la convention AERAS vous protègent si vous avez des antécédents de santé."
      },
      {
        title: "Ce que le questionnaire de santé demande",
        content: "Le questionnaire médical de l'assurance emprunteur pose des questions sur votre état de santé actuel et passé. Il se compose généralement de plusieurs parties.\n\nLes questions sur votre état de santé actuel : êtes-vous actuellement en arrêt de travail, en traitement médical, en cours d'hospitalisation ? Prenez-vous des médicaments de façon régulière ?\n\nLes questions sur vos antécédents médicaux : avez-vous été hospitalisé au cours des 10 dernières années ? Avez-vous subi des interventions chirurgicales ? Avez-vous été diagnostiqué pour une maladie chronique, un cancer, un problème cardiaque, du diabète, une maladie psychiatrique ?\n\nLes questions sur votre mode de vie : fumez-vous ou avez-vous fumé ? Consommez-vous de l'alcool régulièrement ? Pratiquez-vous des sports à risque (plongée, parachutisme, escalade, sports mécaniques) ? Exercez-vous une profession à risque ?\n\nIl est essentiel de répondre honnêtement à toutes les questions. Toute omission ou fausse déclaration peut entraîner la nullité du contrat en cas de sinistre. L'assureur ne pourra pas vous reprocher de ne pas avoir déclaré une pathologie dont vous ignoriez l'existence au moment de remplir le questionnaire."
      },
      {
        title: "Droit à l'oubli : ce que vous pouvez ne pas déclarer",
        content: "Le droit à l'oubli vous permet de ne pas déclarer certaines pathologies passées si un délai suffisant s'est écoulé depuis la fin du traitement. Depuis la loi Lemoine, ce délai est de 5 ans (contre 10 ans auparavant).\n\nConcrètement, vous n'avez pas à déclarer un cancer ou une hépatite C si le protocole thérapeutique est terminé depuis plus de 5 ans et qu'il n'y a pas eu de rechute. Cela inclut tous les types de cancer, quel que soit le stade ou la localisation.\n\nPour les cancers diagnostiqués avant l'âge de 21 ans, le délai est également de 5 ans après la fin du protocole thérapeutique, sans condition d'âge au moment de la demande d'assurance.\n\nAu-delà du droit à l'oubli, la grille de référence AERAS liste d'autres pathologies pour lesquelles les assureurs s'engagent à ne pas appliquer de surprime ou d'exclusion après un certain délai. Cette grille est régulièrement mise à jour pour intégrer les progrès médicaux.\n\nSi vous n'êtes pas sûr de ce que vous devez déclarer, consultez un courtier spécialisé ou le site de la convention AERAS. Ne prenez pas le risque de faire une fausse déclaration par méconnaissance de vos droits."
      },
      {
        title: "Les conséquences d'une fausse déclaration",
        content: "La fausse déclaration intentionnelle dans le questionnaire médical peut avoir des conséquences graves. L'article L.113-8 du Code des assurances prévoit la nullité du contrat en cas de fausse déclaration intentionnelle, c'est-à-dire lorsque l'assuré a délibérément caché ou déformé une information qui aurait modifié l'appréciation du risque par l'assureur.\n\nEn pratique, si l'assureur découvre une fausse déclaration après un sinistre (décès, invalidité, incapacité de travail), il peut refuser toute indemnisation. Le capital restant dû ne sera pas pris en charge, et vos proches devront assumer les mensualités du prêt.\n\nLa fausse déclaration peut être découverte même des années après la souscription. En cas de sinistre, l'assureur diligente une enquête médicale et peut accéder à votre dossier médical avec l'accord de vos ayants droit. Les incohérences entre le questionnaire et le dossier médical sont facilement identifiables.\n\nImportant : une omission de bonne foi (vous ne saviez pas que vous étiez malade au moment du questionnaire) n'est pas une fausse déclaration intentionnelle. Dans ce cas, l'assureur ne peut pas annuler le contrat, mais peut réduire l'indemnisation proportionnellement."
      }
    ],
    faq: [
      {
        question: "Dois-je refaire le questionnaire médical si je change d'assurance ?",
        answer: "Oui, en principe. Chaque assureur a son propre questionnaire médical. Cependant, si vous êtes éligible à la suppression du questionnaire (moins de 200 000 euros par personne, prêt remboursé avant 60 ans), le nouvel assureur ne pourra pas non plus vous en demander un. C'est l'un des avantages de la loi Lemoine pour le changement d'assurance."
      },
      {
        question: "L'assureur peut-il vérifier mes réponses au questionnaire ?",
        answer: "L'assureur ne vérifie généralement pas les réponses au moment de la souscription. En revanche, en cas de sinistre, il procède à une enquête médicale et peut accéder à votre dossier médical (avec l'accord de vos ayants droit en cas de décès). C'est à ce moment que les fausses déclarations sont découvertes."
      },
      {
        question: "Je suis diabétique, dois-je le déclarer dans le questionnaire ?",
        answer: "Si vous êtes soumis au questionnaire médical, oui, vous devez déclarer votre diabète. Le diabète est une maladie chronique qui doit être mentionnée. Cela ne signifie pas que vous serez refusé. La plupart des assureurs acceptent les profils diabétiques, parfois avec une surprime modérée selon le type de diabète et son équilibre. Si vous êtes dispensé de questionnaire (loi Lemoine), vous n'avez rien à déclarer."
      },
      {
        question: "Le médecin-conseil de l'assureur a-t-il accès à mon dossier médical ?",
        answer: "Non, le médecin-conseil n'a pas accès automatiquement à votre dossier médical. Il analyse uniquement les réponses que vous fournissez dans le questionnaire et les éventuels examens complémentaires demandés. En cas de sinistre, l'accès au dossier médical complet nécessite une autorisation spécifique, généralement donnée par l'assuré ou ses ayants droit. Les informations médicales sont soumises au secret médical et traitées de manière confidentielle."
      }
    ],
    ctaTitle: "Simulez votre taux sans engagement",
    ctaSubtitle: "Découvrez votre taux d'assurance emprunteur en 2 minutes. Si vous êtes éligible à la suppression du questionnaire, la souscription est encore plus rapide.",
    relatedGuides: ["convention-aeras", "loi-lemoine", "taux-assurance-emprunteur"],
    relatedProfiles: ["risque-aggrave", "sans-questionnaire-medical", "senior"],
    relatedBanks: ["credit-agricole", "banque-postale"]
  },
  {
    slug: "convention-aeras",
    metaTitle: "Convention AERAS 2026 : S'Assurer avec un Risque Aggravé de Santé",
    metaDescription: "Convention AERAS : 3 niveaux d'examen, plafonnement des surprimes, droit à l'oubli. Comment obtenir une assurance emprunteur avec un problème de santé.",
    heroTitle: "Convention AERAS : comment emprunter avec un risque aggravé de santé",
    heroSubtitle: "Diabète, cancer en rémission, VIH, maladie chronique : la convention AERAS garantit un examen de votre dossier à 3 niveaux avant tout refus. Voici comment elle fonctionne et comment en bénéficier.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Les 3 niveaux d'examen AERAS",
        content: "La convention AERAS (s'Assurer et Emprunter avec un Risque Aggravé de Santé) prévoit un examen de votre dossier à trois niveaux successifs avant tout refus définitif d'assurance.\n\nNiveau 1 : l'examen standard. Votre dossier est d'abord analysé selon les critères habituels de l'assureur. Si votre état de santé ne pose pas de problème particulier, vous êtes assuré aux conditions normales. Si le risque est jugé trop élevé pour une acceptation standard, votre dossier passe au niveau 2.\n\nNiveau 2 : l'examen par un service médical spécialisé. Un médecin-conseil analyse votre dossier de manière approfondie. Il peut demander des examens complémentaires ou un rapport de votre médecin traitant. À ce stade, l'assureur peut vous proposer une couverture avec surprime ou exclusion de certaines garanties. Si le risque est toujours jugé trop élevé, le dossier passe au niveau 3.\n\nNiveau 3 : l'examen par un pool d'assureurs spécialisés. Votre dossier est réexaminé par un groupe d'assureurs qui mutualisent les risques les plus élevés. Ce niveau permet d'assurer des profils qui seraient refusés par un assureur individuel. L'ensemble de cette procédure doit se dérouler dans un délai maximum de 5 semaines."
      },
      {
        title: "Plafonnement des surprimes",
        content: "La convention AERAS prévoit un mécanisme de plafonnement des surprimes pour les emprunteurs à revenus modestes. Ce dispositif, appelé écrêtement, vise à ce que le surcoût lié au risque aggravé de santé ne rende pas l'assurance inabordable.\n\nLe plafonnement s'applique si vos revenus ne dépassent pas un certain seuil, révisé chaque année. Le principe : la surprime ne peut pas dépasser 1,4 point du taux effectif global du prêt. La différence entre la surprime réelle et le plafond est prise en charge par un fonds de mutualisation financé par les assureurs et les banques.\n\nCe mécanisme concerne les prêts immobiliers pour l'achat d'une résidence principale, dans la limite de 320 000 euros. Il s'applique automatiquement si vous remplissez les conditions de revenus. Vous n'avez pas de démarche particulière à effectuer.\n\nImportant : même avec le plafonnement, la surprime peut représenter un coût significatif. C'est pourquoi il est essentiel de comparer les offres de plusieurs assureurs. Certains assureurs spécialisés dans les risques aggravés proposent des surprimes moins élevées que les contrats groupe des banques."
      },
      {
        title: "AERAS et loi Lemoine : ce qui a changé",
        content: "La loi Lemoine a renforcé la convention AERAS sur plusieurs points importants, rendant l'accès à l'assurance emprunteur plus facile pour les personnes à risque aggravé de santé.\n\nLe droit à l'oubli a été réduit de 10 à 5 ans. Avant la loi Lemoine, un ancien malade du cancer devait attendre 10 ans après la fin du protocole thérapeutique pour ne plus avoir à déclarer sa maladie. Ce délai est désormais de 5 ans pour les cancers et l'hépatite C.\n\nLa suppression du questionnaire médical pour les prêts de moins de 200 000 euros par personne (remboursés avant 60 ans) bénéficie particulièrement aux personnes qui auraient dû passer par le dispositif AERAS. Si vous remplissez ces conditions, aucune question de santé ne peut vous être posée, quelle que soit votre pathologie.\n\nLa grille de référence AERAS doit être mise à jour plus régulièrement pour tenir compte des progrès médicaux. Cela signifie que de nouvelles pathologies sont progressivement intégrées à la liste de celles bénéficiant de conditions d'assurance favorables.\n\nEnfin, le droit au changement d'assurance à tout moment (loi Lemoine) permet aux personnes assurées via AERAS de renégocier leur contrat si leur état de santé s'améliore ou si de meilleures offres apparaissent sur le marché."
      },
      {
        title: "Comment optimiser votre dossier AERAS",
        content: "Si vous devez passer par le dispositif AERAS, voici comment optimiser vos chances d'obtenir une assurance aux meilleures conditions.\n\nPréparez un dossier médical complet et à jour. Plus votre dossier est précis, plus le médecin-conseil pourra évaluer votre risque avec justesse. Incluez les comptes rendus d'examens récents, les résultats de bilans, et un certificat de votre médecin traitant attestant de votre état de santé actuel.\n\nComparez les assureurs. Tous les assureurs n'évaluent pas les risques aggravés de la même manière. Certains sont spécialisés dans certaines pathologies (diabète, maladies cardiaques, cancers en rémission) et proposent des conditions plus avantageuses. Un courtier spécialisé en risques aggravés peut vous orienter vers les assureurs les plus adaptés à votre profil.\n\nNe vous arrêtez pas au premier refus. Le dispositif AERAS prévoit justement 3 niveaux d'examen pour maximiser vos chances. Si vous êtes refusé au niveau 1, votre dossier doit automatiquement être transmis au niveau 2, puis au niveau 3 si nécessaire.\n\nFaites-vous accompagner par un courtier spécialisé. Il connaît les critères de chaque assureur, sait comment présenter un dossier médical complexe, et peut négocier les surprimes en votre nom. Son accompagnement est particulièrement précieux pour les niveaux 2 et 3 de l'examen AERAS."
      }
    ],
    faq: [
      {
        question: "La convention AERAS garantit-elle l'obtention d'une assurance ?",
        answer: "Non, la convention AERAS ne garantit pas l'obtention d'une assurance. Elle garantit que votre dossier sera examiné à 3 niveaux avant tout refus définitif, ce qui maximise vos chances. En dernier recours, si l'assurance est impossible, des solutions alternatives existent : garantie hypothécaire renforcée, nantissement d'un placement, ou caution d'un tiers."
      },
      {
        question: "Combien de temps dure la procédure AERAS ?",
        answer: "La convention prévoit un délai maximum de 5 semaines pour l'ensemble de la procédure, du dépôt du dossier complet à la réponse finale. En pratique, le niveau 1 prend quelques jours, le niveau 2 environ 2 semaines, et le niveau 3 environ 2 semaines supplémentaires. Prévoyez ce délai dans votre planning d'achat immobilier."
      },
      {
        question: "Puis-je changer d'assurance si j'ai été assuré via AERAS ?",
        answer: "Oui, la loi Lemoine vous donne le droit de changer d'assurance à tout moment, même si vous avez été assuré via le dispositif AERAS. C'est d'ailleurs une opportunité intéressante, car votre état de santé a pu s'améliorer depuis la souscription initiale, ou de nouveaux assureurs peuvent proposer de meilleures conditions pour votre pathologie."
      },
      {
        question: "Où trouver la grille de référence AERAS ?",
        answer: "La grille de référence AERAS est disponible sur le site officiel aeras-infos.fr. Elle liste les pathologies pour lesquelles les assureurs s'engagent à proposer une couverture sans surprime ou avec une surprime limitée, après un certain délai. La grille est mise à jour régulièrement. Votre médecin traitant ou un courtier spécialisé peut vous aider à vérifier si votre pathologie y figure."
      }
    ],
    ctaTitle: "Trouvez une assurance adaptée à votre profil",
    ctaSubtitle: "Simulez votre taux et comparez les assureurs qui acceptent les risques aggravés de santé.",
    relatedGuides: ["questionnaire-medical", "loi-lemoine", "equivalence-garanties"],
    relatedProfiles: ["risque-aggrave", "senior", "sans-questionnaire-medical"],
    relatedBanks: ["credit-agricole", "bnp-paribas"]
  },
  {
    slug: "delegation-assurance",
    metaTitle: "Délégation d'Assurance Emprunteur 2026 : Comment Ça Marche",
    metaDescription: "Délégation d'assurance emprunteur : choisir un assureur externe à votre banque. Économisez 5 000 à 15 000€. Procédure, avantages, pièges à éviter.",
    heroTitle: "Délégation d'assurance emprunteur : le guide pour choisir et changer",
    heroSubtitle: "La délégation d'assurance, c'est le fait de choisir un assureur différent de celui proposé par votre banque. C'est légal depuis 2010, simplifié depuis 2022, et ça peut vous faire économiser 5 000 à 15 000€. Voici comment ça fonctionne.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Qu'est-ce que la délégation d'assurance",
        content: "La délégation d'assurance emprunteur consiste à choisir un contrat d'assurance auprès d'un assureur externe, différent de celui proposé par votre banque. Depuis la loi Lagarde (2010), les banques ont l'obligation d'accepter un contrat en délégation, à condition que les garanties soient au moins équivalentes à celles du contrat groupe.\n\nLe contrat groupe est l'assurance proposée par défaut par la banque. Il est souscrit collectivement par la banque auprès d'un assureur partenaire, et tous les emprunteurs bénéficient des mêmes conditions, quel que soit leur profil de risque. C'est pratique mais souvent plus cher, car le tarif est mutualisé.\n\nLa délégation, à l'inverse, vous permet de bénéficier d'un contrat individuel, adapté à votre profil exact (âge, état de santé, profession, sports pratiqués). Le tarif est calculé sur mesure, ce qui se traduit généralement par un prix inférieur pour les profils à faible risque.\n\nVous pouvez opter pour la délégation à deux moments : au moment de la signature du prêt (délégation initiale), ou en cours de prêt (changement d'assurance, facilité par la loi Lemoine). Dans les deux cas, la banque ne peut pas refuser si les garanties sont équivalentes."
      },
      {
        title: "Pourquoi la délégation est moins chère",
        content: "Le contrat groupe de la banque repose sur la mutualisation des risques. Tous les emprunteurs payent un tarif moyen, indépendamment de leur profil individuel. Les jeunes emprunteurs en bonne santé financent ainsi indirectement les profils plus coûteux (seniors, personnes à risque de santé).\n\nEn délégation, l'assureur calcule votre prime en fonction de votre profil exact. Si vous êtes jeune, non-fumeur, en bonne santé, et que vous exercez une profession sans risque, votre tarif sera nettement inférieur au tarif mutualisé du contrat groupe.\n\nLes assureurs en délégation ont également des structures de coûts plus légères. Beaucoup fonctionnent en ligne, sans réseau d'agences physiques, ce qui réduit les frais de gestion. Ces économies sont répercutées sur les tarifs proposés aux clients.\n\nEnfin, la concurrence entre assureurs en délégation est forte, ce qui tire les prix vers le bas. Contrairement au contrat groupe (où la banque a un partenaire unique), le marché de la délégation compte des dizaines d'acteurs qui se disputent les clients.\n\nRésultat : l'économie moyenne constatée en passant en délégation est de 30% à 50% par rapport au contrat groupe. Sur un prêt de 250 000 euros sur 20 ans, cela représente typiquement entre 5 000 et 15 000 euros."
      },
      {
        title: "Comment choisir son assureur en délégation",
        content: "Tous les assureurs en délégation ne se valent pas. Voici les critères à prendre en compte pour choisir le bon contrat.\n\nLe prix, évidemment, mais pas seulement. Comparez le coût total de l'assurance sur la durée restante de votre prêt, pas seulement la première mensualité. Un contrat sur le capital restant dû sera moins cher au début mais plus cher sur la durée totale qu'un contrat sur le capital initial.\n\nLes garanties proposées. Vérifiez que le contrat couvre bien les garanties exigées par votre banque (décès, PTIA, ITT, IPT, IPP). Comparez les définitions de chaque garantie, les franchises, les exclusions, et les modes d'indemnisation (forfaitaire vs indemnitaire).\n\nLa solidité de l'assureur. Privilégiez les assureurs reconnus, avec une bonne notation financière. L'assurance emprunteur est un engagement de long terme (10, 15, 20 ans ou plus). L'assureur doit être en mesure d'honorer ses engagements sur toute cette durée.\n\nLa qualité du service client. En cas de sinistre, la réactivité et la bienveillance de l'assureur font la différence. Consultez les avis clients, les délais de traitement des sinistres, et la facilité de contact avec le service client."
      },
      {
        title: "Délégation au moment du prêt vs changement en cours",
        content: "Vous pouvez opter pour la délégation à deux moments distincts, chacun avec ses avantages.\n\nLa délégation au moment du prêt (délégation initiale) consiste à refuser le contrat groupe de la banque dès la signature de l'offre de prêt, et à souscrire directement un contrat en délégation. C'est le moment idéal car vous n'avez pas besoin de résilier un contrat existant. Cependant, certaines banques peuvent exercer une pression pour que vous acceptiez leur contrat groupe, en conditionnant (illégalement) l'obtention du prêt à la souscription de leur assurance.\n\nLe changement en cours de prêt est facilité par la loi Lemoine. Vous pouvez changer à tout moment, sans frais et sans préavis. C'est la solution si vous avez accepté le contrat groupe au moment du prêt et que vous souhaitez maintenant passer en délégation.\n\nDans les deux cas, l'économie est significative. En changeant en cours de prêt, l'économie porte sur les années restantes. Plus vous changez tôt, plus l'économie totale est importante. Même après 5 ou 10 ans de prêt, le changement reste intéressant si l'écart de taux est suffisant.\n\nAstuce : si la banque vous met la pression au moment du prêt pour accepter son contrat groupe, acceptez-le pour ne pas bloquer le dossier, puis changez dès le lendemain grâce à la loi Lemoine. Vous obtiendrez votre prêt et économiserez sur l'assurance."
      }
    ],
    faq: [
      {
        question: "La banque peut-elle refuser ma délégation d'assurance ?",
        answer: "La banque ne peut refuser une délégation que si les garanties du nouveau contrat ne sont pas équivalentes à celles qu'elle exige. Elle ne peut pas refuser pour une autre raison, ni modifier les conditions de votre prêt (taux, frais). Si elle refuse, elle doit motiver sa décision par écrit en précisant les critères de garantie non respectés."
      },
      {
        question: "La délégation d'assurance coûte-t-elle des frais ?",
        answer: "Non, la délégation d'assurance est gratuite. La banque ne peut pas vous facturer de frais pour le traitement de votre demande de délégation, ni pour l'émission de l'avenant au contrat de prêt. L'assureur en délégation ne facture pas non plus de frais de souscription dans la plupart des cas."
      },
      {
        question: "La délégation est-elle intéressante pour tous les profils ?",
        answer: "Pour la grande majorité des emprunteurs, oui. Les profils les plus avantagés sont les jeunes (moins de 40 ans), les non-fumeurs, et les personnes en bonne santé. Mais même les profils seniors ou à risque aggravé de santé trouvent souvent de meilleures conditions en délégation, car certains assureurs sont spécialisés dans ces profils."
      },
      {
        question: "Puis-je revenir au contrat groupe de la banque après être passé en délégation ?",
        answer: "En théorie, vous pouvez demander à réintégrer le contrat groupe de la banque, mais celle-ci n'a aucune obligation de vous accepter. En pratique, si vous souhaitez changer de contrat après être passé en délégation, il est plus simple de souscrire une nouvelle délégation auprès d'un autre assureur."
      }
    ],
    ctaTitle: "Passez en délégation et économisez",
    ctaSubtitle: "Comparez votre contrat groupe avec les meilleures offres en délégation en 2 minutes.",
    relatedGuides: ["loi-lemoine", "equivalence-garanties", "taux-assurance-emprunteur"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire", "investissement-locatif"],
    relatedBanks: ["credit-agricole", "bnp-paribas", "societe-generale"]
  },
  {
    slug: "cout-assurance-emprunteur",
    metaTitle: "Coût Assurance Emprunteur 2026 : Combien Ça Coûte Vraiment ?",
    metaDescription: "Coût assurance emprunteur : 5 000 à 20 000€ sur la durée du prêt. Comment le calculer, le comparer, et le réduire. Exemples chiffrés.",
    heroTitle: "Combien coûte réellement l'assurance emprunteur ?",
    heroSubtitle: "L'assurance emprunteur représente le deuxième poste de coût d'un crédit immobilier, juste après les intérêts. Sur un prêt de 200 000€ sur 20 ans, le coût varie de 4 000€ à 20 000€ selon votre contrat. Voici comment le calculer et le réduire.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Le coût réel de l'assurance emprunteur",
        content: "L'assurance emprunteur représente en moyenne 25% à 35% du coût total d'un crédit immobilier. C'est le deuxième poste de dépense après les intérêts du prêt, et souvent le premier levier d'économie disponible.\n\nSur un prêt de 200 000 euros sur 20 ans, voici les ordres de grandeur. Avec un contrat groupe bancaire à 0,36%, l'assurance coûte environ 14 400 euros sur la durée du prêt, soit 60 euros par mois. Avec un contrat en délégation à 0,12%, le coût tombe à 4 800 euros, soit 20 euros par mois. La différence : 9 600 euros d'économie.\n\nCe coût est d'autant plus significatif qu'il s'ajoute à un crédit déjà lourd. Quand les taux d'intérêt sont bas (ce qui réduit le coût des intérêts), l'assurance emprunteur peut représenter jusqu'à 40% du coût total du crédit.\n\nMalgré ces montants, l'assurance emprunteur reste le poste le moins négocié par les emprunteurs. Beaucoup acceptent le contrat groupe de la banque sans comparer, par manque d'information ou par crainte de compromettre l'obtention du prêt."
      },
      {
        title: "Les deux modes de calcul",
        content: "Il existe deux méthodes de calcul de la prime d'assurance emprunteur, qui influencent le coût total et les mensualités.\n\nLe calcul sur le capital initial (CI). La prime est calculée une fois pour toutes sur le montant emprunté. Vous payez la même cotisation chaque mois pendant toute la durée du prêt. C'est le mode le plus courant pour les contrats groupe des banques. Avantage : la mensualité est stable et prévisible. Inconvénient : vous payez le même montant même quand le capital restant dû diminue.\n\nLe calcul sur le capital restant dû (CRD). La prime est recalculée chaque année (ou chaque mois) en fonction du capital restant dû. Au début du prêt, la cotisation est plus élevée qu'en CI (car le taux appliqué est plus élevé pour compenser la diminution progressive). Puis elle diminue au fil du temps. Avantage : le coût total est souvent légèrement inférieur au CI. Inconvénient : les premières années sont plus chères, et la comparaison avec un contrat CI n'est pas évidente.\n\nPour comparer deux contrats avec des modes de calcul différents, la seule méthode fiable est de comparer le coût total sur la durée restante du prêt, ou le TAEA (Taux Annuel Effectif d'Assurance) qui intègre les deux modes de calcul."
      },
      {
        title: "Exemples chiffrés par profil",
        content: "Voici des exemples concrets pour différents profils d'emprunteurs, sur un prêt de 250 000 euros sur 20 ans.\n\nJeune emprunteur de 30 ans, non-fumeur, cadre. Contrat groupe : 0,34%, soit 17 000 euros. Délégation : 0,10%, soit 5 000 euros. Économie : 12 000 euros.\n\nCouple de 38 ans, non-fumeurs, professions libérales. Contrat groupe : 0,38% chacun (quotité 50/50), soit 19 000 euros. Délégation : 0,18% chacun, soit 9 000 euros. Économie : 10 000 euros.\n\nEmprunteur de 50 ans, non-fumeur, fonctionnaire. Contrat groupe : 0,55%, soit 27 500 euros. Délégation : 0,35%, soit 17 500 euros. Économie : 10 000 euros.\n\nJeune emprunteur de 28 ans, fumeur. Contrat groupe : 0,40%, soit 20 000 euros. Délégation : 0,22%, soit 11 000 euros. Économie : 9 000 euros.\n\nCes chiffres sont des moyennes constatées en 2026. L'économie réelle dépend de votre profil exact, de votre banque, et des offres disponibles au moment de votre changement."
      },
      {
        title: "Comment réduire le coût de votre assurance",
        content: "Plusieurs stratégies permettent de réduire significativement le coût de votre assurance emprunteur.\n\nChangez de contrat. C'est le levier le plus efficace. En passant d'un contrat groupe à une délégation, l'économie moyenne est de 30% à 50%. Avec la loi Lemoine, vous pouvez changer à tout moment, sans frais.\n\nAjustez les quotités. Si vous empruntez en couple, vous n'êtes pas obligé d'assurer chaque emprunteur à 100%. Une quotité de 50/50 ou 60/40 réduit le coût de l'assurance, tout en maintenant une couverture suffisante. Attention toutefois : en cas de décès d'un co-emprunteur, seule la quotité assurée est prise en charge.\n\nRenégociez en cours de prêt. Même si vous avez déjà changé d'assurance, les tarifs évoluent. Un changement effectué il y a 3 ou 4 ans peut être dépassé par de nouvelles offres plus compétitives.\n\nArrêtez de fumer. Si vous êtes fumeur et que vous arrêtez depuis plus de 24 mois, vous pouvez obtenir le tarif non-fumeur en changeant d'assurance. L'économie est de 50% à 100% sur la prime d'assurance.\n\nFaites jouer la concurrence. Ne comparez pas seulement deux ou trois offres. Utilisez un comparateur ou un courtier qui interroge plusieurs dizaines d'assureurs pour trouver le meilleur tarif pour votre profil exact."
      }
    ],
    faq: [
      {
        question: "Quel pourcentage du coût total du crédit représente l'assurance ?",
        answer: "L'assurance emprunteur représente en moyenne 25% à 35% du coût total d'un crédit immobilier. Ce pourcentage varie selon le taux d'intérêt du prêt et le taux d'assurance. Quand les taux d'intérêt sont bas, la part de l'assurance dans le coût total augmente mécaniquement, pouvant atteindre 40%."
      },
      {
        question: "Le coût de l'assurance est-il négociable ?",
        answer: "Le contrat groupe de la banque est peu négociable, car il applique un tarif standardisé. En revanche, en délégation, la concurrence entre assureurs joue naturellement en votre faveur. Vous pouvez aussi utiliser une offre concurrente comme levier de négociation auprès de votre banque, bien que le résultat ne soit pas garanti."
      },
      {
        question: "L'assurance emprunteur est-elle déductible des impôts ?",
        answer: "Pour un investissement locatif, oui. Les cotisations d'assurance emprunteur sont déductibles des revenus fonciers si le prêt finance un bien destiné à la location. Pour une résidence principale, non, les cotisations ne sont pas déductibles. C'est un avantage supplémentaire pour les investisseurs qui changent d'assurance : l'économie est amplifiée par la déductibilité fiscale."
      },
      {
        question: "Comment calculer le coût de mon assurance actuelle ?",
        answer: "Consultez votre tableau d'amortissement ou votre dernier relevé de prêt. La cotisation d'assurance apparaît chaque mois à côté de l'échéance de remboursement. Multipliez la cotisation mensuelle par le nombre de mois restants pour obtenir le coût total sur la durée restante du prêt. Vous pouvez aussi retrouver le TAEA (Taux Annuel Effectif d'Assurance) sur votre offre de prêt initiale."
      }
    ],
    ctaTitle: "Calculez votre économie exacte",
    ctaSubtitle: "Entrez les données de votre prêt et découvrez en 2 minutes combien vous pouvez économiser.",
    relatedGuides: ["taux-assurance-emprunteur", "delegation-assurance", "loi-lemoine"],
    relatedProfiles: ["jeune-emprunteur", "investissement-locatif"],
    relatedBanks: ["bnp-paribas", "caisse-depargne", "credit-mutuel"]
  },
  {
    slug: "refus-banque",
    metaTitle: "La Banque Refuse le Changement d'Assurance : Que Faire ?",
    metaDescription: "Votre banque refuse votre changement d'assurance emprunteur ? Motifs légaux, refus abusifs, recours (médiateur, ACPR). Guide pas à pas.",
    heroTitle: "Votre banque refuse le changement d'assurance : vos recours",
    heroSubtitle: "Un refus de changement d'assurance emprunteur n'est pas toujours définitif. Souvent, il est mal motivé ou abusif. Voici comment identifier un refus légitime d'un refus illégal, et les démarches pour faire valoir vos droits.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "Le seul motif de refus recevable",
        content: "La loi est claire : le seul motif pour lequel une banque peut refuser un changement d'assurance emprunteur est la non-équivalence de garanties. Aucun autre motif n'est recevable. La banque ne peut pas refuser parce qu'elle préfère garder son contrat groupe, parce que le dossier est \"en cours de traitement\", ou parce que le nouveau contrat vient d'un assureur qu'elle ne connaît pas.\n\nLa non-équivalence de garanties signifie que le nouveau contrat ne couvre pas les risques au même niveau que celui exigé par la banque. Mais attention, la banque ne peut exiger que les critères qu'elle a elle-même définis dans la fiche standardisée d'information (FSI). Elle ne peut pas inventer de nouveaux critères au moment du refus.\n\nPour être valable, le refus doit être motivé par écrit. La banque doit préciser chaque critère de garantie qui n'est pas respecté par le nouveau contrat. Un refus oral, un email vague, ou une lettre qui ne détaille pas les critères manquants n'est pas conforme à la loi.\n\nSi la banque ne répond pas dans le délai de 10 jours ouvrés, le changement est réputé accepté. Le silence vaut accord."
      },
      {
        title: "Comment analyser un refus",
        content: "Vous avez reçu un refus de votre banque. Avant de vous décourager, analysez-le méthodiquement.\n\nVérifiez d'abord que le refus est écrit et motivé. Si vous avez reçu un simple appel téléphonique ou un email sans détail, demandez une confirmation écrite avec les motifs précis. La banque est tenue de vous fournir cette justification.\n\nEnsuite, comparez les critères cités dans le refus avec ceux de votre fiche standardisée d'information (FSI). Si la banque cite des critères qui ne figurent pas sur la FSI, le refus est abusif. Si les critères cités figurent bien sur la FSI, vérifiez si votre nouveau contrat les respecte réellement.\n\nDans de nombreux cas, le refus repose sur une interprétation erronée ou excessivement stricte des critères. Par exemple, la banque peut exiger une couverture ITT en mode forfaitaire, alors que votre FSI n'impose pas de mode d'indemnisation spécifique.\n\nEnfin, vérifiez le délai de réponse. Si la banque a mis plus de 10 jours ouvrés à répondre depuis la réception de votre demande complète, le changement est légalement accepté, quel que soit le contenu de la réponse."
      },
      {
        title: "Les recours en cas de refus abusif",
        content: "Si vous estimez que le refus de votre banque est abusif, plusieurs recours s'offrent à vous, du plus simple au plus contraignant.\n\nPremier recours : le service réclamation de la banque. Envoyez un courrier recommandé au service réclamation (adresse différente de l'agence, généralement au siège ou centre de gestion). Citez les articles de loi (L.313-30 du Code de la consommation), joignez votre FSI, et démontrez que les garanties sont bien équivalentes. Le service réclamation a 2 mois pour répondre.\n\nDeuxième recours : le médiateur bancaire. Si le service réclamation ne donne pas satisfaction, saisissez le médiateur bancaire. Ses coordonnées figurent sur votre convention de compte, sur vos relevés, ou sur le site de la banque. La saisine est gratuite et le médiateur rend un avis dans un délai de 90 jours. Bien que cet avis ne soit pas contraignant, les banques le suivent dans la grande majorité des cas.\n\nTroisième recours : l'ACPR (Autorité de contrôle prudentiel et de résolution). Vous pouvez signaler le comportement de la banque à l'ACPR via sa plateforme en ligne. L'ACPR ne traite pas les litiges individuels mais peut sanctionner les pratiques abusives récurrentes. Un signalement à l'ACPR envoie un signal fort à la banque.\n\nQuatrième recours : l'action en justice. En dernier recours, vous pouvez saisir le tribunal judiciaire. Cette démarche est plus longue et coûteuse, mais elle peut aboutir à des dommages et intérêts en plus de l'obligation de changement."
      }
    ],
    faq: [
      {
        question: "Quel est le délai légal de réponse de la banque ?",
        answer: "La banque dispose de 10 jours ouvrés à compter de la réception de votre demande complète (lettre de résiliation + nouveau contrat d'assurance) pour répondre. Si elle ne répond pas dans ce délai, le changement est réputé accepté. En cas de non-respect du délai, la banque s'expose à une amende de 3 000 euros."
      },
      {
        question: "La banque peut-elle refuser sans donner de raison ?",
        answer: "Non, c'est illégal. Tout refus doit être motivé par écrit, en précisant chaque critère de garantie non respecté. Un refus sans motif ou avec un motif vague (\"garanties insuffisantes\" sans détail) n'est pas recevable. Contestez-le immédiatement par courrier recommandé."
      },
      {
        question: "Puis-je faire une nouvelle demande après un refus ?",
        answer: "Oui, vous pouvez faire autant de demandes que vous le souhaitez. Si le refus portait sur un critère de garantie spécifique, demandez à votre nouvel assureur d'ajuster le contrat pour respecter ce critère, puis renvoyez une demande. La banque devra à nouveau répondre dans les 10 jours ouvrés."
      },
      {
        question: "Le médiateur bancaire est-il vraiment efficace ?",
        answer: "Oui, dans la grande majorité des cas. Le médiateur bancaire est indépendant de la banque et rend un avis impartial. Les statistiques montrent que les médiateurs donnent raison au client dans environ 30% à 40% des cas, et que les banques suivent l'avis du médiateur dans plus de 90% des cas. La saisine est gratuite et la procédure est simple."
      }
    ],
    ctaTitle: "Votre changement d'assurance est un droit",
    ctaSubtitle: "Simulez votre économie et recevez une lettre de changement conforme. Si la banque refuse, nous vous guidons dans les démarches.",
    relatedGuides: ["loi-lemoine", "lettre-resiliation", "equivalence-garanties"],
    relatedProfiles: ["risque-aggrave", "senior"],
    relatedBanks: ["bnp-paribas", "societe-generale", "caisse-depargne"]
  },
  {
    slug: "loi-hamon-vs-lemoine",
    metaTitle: "Loi Hamon vs Loi Lemoine : Quelles Différences pour Votre Assurance",
    metaDescription: "Loi Hamon vs loi Lemoine : la Lemoine remplace et améliore la Hamon. Plus de délai, plus de date anniversaire, plus de questionnaire médical.",
    heroTitle: "Loi Hamon vs loi Lemoine : ce qui a changé pour votre assurance emprunteur",
    heroSubtitle: "La loi Hamon (2014) permettait de changer d'assurance dans les 12 premiers mois. L'amendement Bourquin (2017) ouvrait une fenêtre annuelle. La loi Lemoine (2022) a tout simplifié. Voici les différences concrètes.",
    updatedDate: "Mars 2026",
    sections: [
      {
        title: "L'évolution du droit au changement",
        content: "Le droit de changer d'assurance emprunteur a évolué en trois étapes majeures, chacune apportant plus de liberté aux emprunteurs.\n\nLa loi Hamon (2014) a été la première à permettre le changement d'assurance emprunteur sans l'accord de la banque. Mais elle limitait ce droit aux 12 premiers mois suivant la signature du prêt. Passé ce délai, vous étiez bloqué avec votre contrat.\n\nL'amendement Bourquin (2017) a étendu ce droit au-delà de la première année. Il permettait de changer d'assurance chaque année, à la date anniversaire du contrat, avec un préavis de 2 mois. C'était un progrès, mais la contrainte de la date anniversaire et du préavis faisait que beaucoup d'emprunteurs rataient la fenêtre de changement.\n\nLa loi Lemoine (2022) a supprimé toutes ces contraintes. Plus de délai, plus de date anniversaire, plus de préavis. Vous pouvez changer d'assurance emprunteur à tout moment, quand vous le souhaitez, sans justification. La banque a 10 jours ouvrés pour répondre, et le seul motif de refus est la non-équivalence de garanties."
      },
      {
        title: "Comparatif détaillé Hamon vs Bourquin vs Lemoine",
        content: "Voici un comparatif point par point des trois lois qui ont successivement encadré le changement d'assurance emprunteur.\n\nSur le délai de changement : la loi Hamon limitait le changement aux 12 premiers mois du prêt. L'amendement Bourquin permettait un changement annuel, à date anniversaire. La loi Lemoine permet un changement à tout moment, sans restriction.\n\nSur le préavis : la loi Hamon exigeait un préavis de 15 jours avant la date anniversaire du premier mois. L'amendement Bourquin imposait un préavis de 2 mois avant la date anniversaire. La loi Lemoine ne prévoit aucun préavis. Vous envoyez votre demande quand vous le souhaitez.\n\nSur le questionnaire médical : ni la loi Hamon ni l'amendement Bourquin n'avaient modifié les règles du questionnaire de santé. La loi Lemoine a supprimé le questionnaire médical pour les prêts de moins de 200 000 euros par personne remboursés avant 60 ans.\n\nSur le droit à l'oubli : la loi Hamon et l'amendement Bourquin n'avaient pas touché au droit à l'oubli (10 ans). La loi Lemoine l'a réduit à 5 ans pour les cancers et l'hépatite C.\n\nSur le délai de réponse de la banque : la loi Hamon et l'amendement Bourquin ne fixaient pas de délai précis. La loi Lemoine impose 10 jours ouvrés, avec une amende de 3 000 euros en cas de dépassement."
      },
      {
        title: "Pourquoi la loi Hamon n'est plus pertinente",
        content: "Depuis l'entrée en vigueur de la loi Lemoine, la loi Hamon et l'amendement Bourquin sont devenus obsolètes en pratique. Voici pourquoi.\n\nLa loi Lemoine englobe et dépasse les droits accordés par les textes précédents. Le changement à tout moment inclut évidemment la première année (loi Hamon) et la date anniversaire (amendement Bourquin). Il n'y a plus aucun intérêt à se référer à ces anciens textes pour changer d'assurance.\n\nLes anciens textes restent formellement en vigueur, mais ils sont entièrement absorbés par la loi Lemoine. Si un conseiller bancaire vous parle de \"date anniversaire\" ou de \"délai de 12 mois\", c'est qu'il n'est pas à jour ou qu'il tente de vous décourager.\n\nEn pratique, certaines banques continuent d'envoyer des courriers de rappel pour la date anniversaire de l'assurance. Ignorez-les. Vous n'avez plus besoin d'attendre cette date pour agir.\n\nLa seule situation où l'historique des lois reste pertinent est pour comprendre un refus ancien. Si votre banque a refusé un changement d'assurance en 2016, elle pouvait légitimement invoquer le dépassement du délai Hamon. Mais depuis septembre 2022, cette raison n'est plus valable."
      }
    ],
    faq: [
      {
        question: "La loi Hamon est-elle toujours en vigueur ?",
        answer: "Oui, formellement la loi Hamon est toujours en vigueur. Mais elle est entièrement absorbée par la loi Lemoine, qui accorde des droits plus étendus. En pratique, il n'y a plus aucun intérêt à se référer à la loi Hamon pour changer d'assurance emprunteur, puisque la loi Lemoine permet un changement à tout moment, sans la contrainte des 12 mois."
      },
      {
        question: "Dois-je respecter un préavis pour changer d'assurance ?",
        answer: "Non, la loi Lemoine a supprimé tout préavis. Vous pouvez envoyer votre demande de changement à tout moment. La banque dispose ensuite de 10 jours ouvrés pour répondre. Les anciens préavis (15 jours pour la loi Hamon, 2 mois pour l'amendement Bourquin) ne s'appliquent plus."
      },
      {
        question: "Ma banque me parle de date anniversaire. Est-ce encore pertinent ?",
        answer: "Non, depuis la loi Lemoine (septembre 2022 pour tous les contrats), la date anniversaire n'a plus aucune importance. Vous pouvez changer d'assurance emprunteur à tout moment, quel que soit le jour de l'année. Si votre banque insiste sur la date anniversaire, elle n'est pas à jour ou tente de retarder votre changement."
      },
      {
        question: "Quelle loi dois-je mentionner dans ma lettre de changement ?",
        answer: "Mentionnez la loi Lemoine (article L.313-30 du Code de la consommation). C'est le texte le plus récent et le plus favorable. Il n'est pas nécessaire de citer la loi Hamon ou l'amendement Bourquin, sauf si vous souhaitez rappeler l'historique de votre droit au changement pour renforcer votre argumentation."
      }
    ],
    ctaTitle: "Profitez du droit au changement à tout moment",
    ctaSubtitle: "Simulez votre économie en 2 minutes. Plus besoin d'attendre une date anniversaire.",
    relatedGuides: ["loi-lemoine", "lettre-resiliation", "delegation-assurance"],
    relatedProfiles: ["jeune-emprunteur", "fonctionnaire"],
    relatedBanks: ["credit-agricole", "societe-generale", "lcl"]
  }
];

export const GUIDE_SLUGS = GUIDES.map((guide) => guide.slug);

export function getGuideBySlug(slug: string): GuideData | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

export const GUIDE_LABELS: Record<string, string> = {
  "loi-lemoine": "Loi Lemoine",
  "lettre-resiliation": "Lettre de résiliation",
  "equivalence-garanties": "Équivalence de garanties",
  "taux-assurance-emprunteur": "Taux d'assurance",
  "questionnaire-medical": "Questionnaire médical",
  "convention-aeras": "Convention AERAS",
  "delegation-assurance": "Délégation d'assurance",
  "cout-assurance-emprunteur": "Coût de l'assurance",
  "refus-banque": "Refus de la banque",
  "loi-hamon-vs-lemoine": "Hamon vs Lemoine",
};
