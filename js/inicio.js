document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

const OML_STORAGE_KEYS = {
  remember: 'oml_remember',
  persistentLocale: 'oml_locale_code',
  temporaryLocale: 'oml_temp_locale_code'
};

const SUPPORTED_LANGUAGES = new Set([
  'es', 'en', 'pt', 'fr', 'de', 'it', 'nl',
  'zh', 'ja', 'ko', 'ru', 'ar', 'tr', 'hi'
]);

const LOCALE_ALIASES = {
  'pt-br': 'pt',
  'pt-pt': 'pt',
  'fr-fr': 'fr',
  'fr-ca': 'fr',
  'fr-be': 'fr',
  'fr-ch': 'fr',
  'de-de': 'de',
  'de-at': 'de',
  'de-ch': 'de',
  'it-it': 'it',
  'it-ch': 'it',
  'nl-nl': 'nl',
  'nl-be': 'nl',
  'zh-cn': 'zh',
  'zh-hk': 'zh',
  'zh-sg': 'zh',
  'zh-tw': 'zh',
  'ja-jp': 'ja',
  'ko-kr': 'ko',
  'ru-ru': 'ru',
  'ar-sa': 'ar',
  'ar-ae': 'ar',
  'ar-eg': 'ar',
  'tr-tr': 'tr',
  'hi-in': 'hi',
  'es-pe': 'es',
  'es-es': 'es',
  'es-mx': 'es',
  'es-ar': 'es',
  'es-cl': 'es',
  'es-co': 'es',
  'en-us': 'en',
  'en-gb': 'en',
  'en-au': 'en',
  'en-ca': 'en',
  'en-ie': 'en',
  'en-in': 'en',
  'en-nz': 'en',
  'en-ph': 'en',
  'en-sg': 'en',
  'en-za': 'en'
};

const I18N = {
  es: {
    bioHtml: `Exportación de jengibre y cúrcuma del Perú.<br>Todo en un solo lugar.`,
    ariaPromotion: `Promoción`,
    ariaNotifications: `Notificaciones`,
    ariaShare: `Compartir`,
    socialAria: [`Correo Perú`, `Web`, `WhatsApp Perú`, `Correo Europe`],
    tabs: [`Peru`, `Europa`],
    panelLinksTitles: [
      `CONTACTO  -  PERU`,
      `CONTACTO  -  EUROPE`,
      `PLANTA DE PROCESO`,
      `CARGUIO DE CONTENEDOR`
    ],
    fieldLabel: `Campo de Produccion`,
    fieldFooters: [
      `Campo de Producción de Jengibre y Cúrcuma 🪴`,
      `Contenedor en planta OML`
    ],
    panelLinksGridTitles: [
      `Visualización de Producto de calidad`,
      `Visualización de Producto de calidad`,
      `Visualización de Producto de calidad`,
      `Visualización de Producto de calidad`,
      `Visualización de Producto de calidad`,
      `Visualización de Producto de calidad`,
      `Revision Visual de la Autoridad`,
      `Revision Visual de la Autoridad`,
      `Pallets en Almacén`,
      `Carga Consolidada`
    ],
    communityHeading: `APOYO A LA COMUNIDAD`,
    communityCards: [
      {
        dataTitle: `Construcción de puertas y ventanas de seguridad en una escuela de Pichanaqui`,
        imgAlt: `Apoyo a una escuela: construcción de puertas y ventanas de seguridad`,
        text: `Apoyo a una escuela: construcción de puertas y ventanas de seguridad`
      },
      {
        dataTitle: `Colegios de Alto Miricharo reciben apoyo comunitario durante Navidad 2025`,
        imgAlt: `Apoyo comunitario en Alto Miricharo durante Navidad 2025`,
        text: `Apoyo comunitario en Alto Miricharo durante Navidad 2025`
      }
    ],
    instagramTitle: `Curcuma`,
    instagramBtn: `Productos`,
    processLocation: `UBICACIÓN DEL PROCESO`,
    openMaps: `Abrir en Maps`,
    videoTitle: `VIDEO DE LA PLANTA DE PROCESO`,
    videoBannerAria: `Abrir video de YouTube`,
    videoBannerAlt: `Video destacado OML PERÚ`,
    videoSmall: `Video destacado de la comunidad`,
    videoMeta: `YouTube · OML PERÚ`,
    footerRights: `© 2026 OML PERÚ. Todos los derechos reservados. El uso no autorizado de las imágenes y demás contenidos de este sitio está estrictamente prohibido.`,
    panelTiendaHeading: `SOCIOS EN EUROPA`,
    europeCards: {
      dataTitle: `Jengibre y cúrcuma de calidad: el compromiso de OML PERÚ con la excelencia`,
      imgAlt: `Jengibre y cúrcuma orgánicos disponibles todo el año`,
      text: `Jengibre y cúrcuma orgánicos disponibles todo el año`
    },
    panelTiendaTitles: [`ALMACÉN EN EUROPA`, `ALMACEN`],
    storePreviewTitle: `Almacen Europa`,
    storePreviewSub: `2 productos`,
    panelTiendaGridTitles: [
      `Almacén en Europa `,
      `Almacén en Europa`,
      `Almacén en Europa`,
      `Almacén en Europa`,
      `Almacén en Europa`,
      `Almacén en Europa`
    ],
    closeVideoAria: `Cerrar video`,
    loadingPdf: `Cargando PDF...`,
    loadingPdfError: `No se pudo mostrar el PDF aquí. Usa Ver para abrirlo.`,
    view: `Ver`,
    sharePdfAria: `Compartir PDF`,
    closeAria: `Cerrar`,
    counterWord: `de`,
    subscribeTitle: `Suscríbete a Oml Peru`,
    subscribeText: `Manténgase actualizado con todo lo importante.`,
    emailPlaceholder: `Correo electrónico`,
    send: `Enviar`,
    sending: `Enviando...`,
    subscribeLegalHtml: `Al suscribirse, acepta los términos y condiciones de Linktree. <a href="#">T&amp;Cs</a> y el <a href="#">Aviso de Privacidad</a>, y a que sus datos de contacto sean compartidos con OML PERÚ.`,
    promoTitleHtml: `Únete al único link en bio en el que confían más de 70M de <span class="blue">creadores.</span>`,
    promoText: `Un solo enlace para compartir todo lo que creas, seleccionas y vendes en IG, TikTok y mucho más.`,
    promoPlaceholder: `linktr.ee/ tunombre`,
    promoCta: `Crea tu Linktree`,
    promoLink1: `Suscríbete a @fcbdelhincr`,
    promoLink2: `Más información sobre Linktree`,
    promoOutline: `Regístrate gratis`,
    peruWhatsappMessage: `Hola OML PERÚ, quiero más información.`,
    linkCopied: `Enlace copiado`,
    linkCopyFailed: `No se pudo copiar el enlace`,
    emailJsMissing: `Falta conectar EmailJS.`,
    submitButtonMissing: `No se encontró el botón de envío.`,
    subscriptionSent: `Suscripción enviada correctamente`,
    subscriptionFailed: `No se pudo enviar la suscripción. Revisa EmailJS.`,
    fieldSliderAlts: [
      `Campo de Producción OML PERÚ`,
      `Jengibre fresco`,
      `Producción de jengibre`
    ]
  },

  en: {
    bioHtml: `Exports, community and premium products.<br>Everything in one place.`,
    ariaPromotion: `Promotion`,
    ariaNotifications: `Notifications`,
    ariaShare: `Share`,
    socialAria: [`Mail Peru`, `Website`, `WhatsApp Peru`, `Mail Europe`],
    tabs: [`Peru`, `Europe`],
    panelLinksTitles: [
      `CONTACT  -  PERU`,
      `CONTACT  -  EUROPE`,
      `PROCESSING PLANT`,
      `CONTAINER LOADING`
    ],
    fieldLabel: `Production Field`,
    fieldFooters: [
      `Ginger and turmeric production field 🪴`,
      `Container at the OML plant`
    ],
    panelLinksGridTitles: [
      `Quality product display`,
      `Quality product display`,
      `Quality product display`,
      `Quality product display`,
      `Quality product display`,
      `Quality product display`,
      `Authority visual inspection`,
      `Authority visual inspection`,
      `Pallets in warehouse`,
      `Consolidated loading`
    ],
    communityHeading: `COMMUNITY SUPPORT`,
    communityCards: [
      {
        dataTitle: `Construction of secure doors and windows for a school in Pichanaqui`,
        imgAlt: `Support for a school: construction of secure doors and windows`,
        text: `Support for a school: construction of secure doors and windows`
      },
      {
        dataTitle: `Schools in Alto Miricharo receive community support during Christmas 2025`,
        imgAlt: `Community support in Alto Miricharo during Christmas 2025`,
        text: `Community support in Alto Miricharo during Christmas 2025`
      }
    ],
    instagramTitle: `Turmeric`,
    instagramBtn: `Products`,
    processLocation: `PROCESS LOCATION`,
    openMaps: `Open in Maps`,
    videoTitle: `PROCESSING PLANT VIDEO`,
    videoBannerAria: `Open YouTube video`,
    videoBannerAlt: `Featured OML PERU video`,
    videoSmall: `Featured community video`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. All rights reserved. Unauthorized use of the images and other content on this site is strictly prohibited.`,
    panelTiendaHeading: `PARTNERS IN EUROPE`,
    europeCards: {
      dataTitle: `High-quality ginger and turmeric: OML PERU's commitment to excellence`,
      imgAlt: `Organic ginger and turmeric available all year round`,
      text: `Organic ginger and turmeric available all year round`
    },
    panelTiendaTitles: [`EUROPEAN WAREHOUSE`, `WAREHOUSE`],
    storePreviewTitle: `European Warehouse`,
    storePreviewSub: `2 products`,
    panelTiendaGridTitles: [
      `Goods on rack`,
      `Goods preservation`,
      `Stock management`,
      `Warehouse operations`,
      `Load supervision`,
      `Quality control`
    ],
    closeVideoAria: `Close video`,
    loadingPdf: `Loading PDF...`,
    loadingPdfError: `The PDF could not be displayed here. Use View to open it.`,
    view: `View`,
    sharePdfAria: `Share PDF`,
    closeAria: `Close`,
    counterWord: `of`,
    subscribeTitle: `Subscribe to OML Peru`,
    subscribeText: `Stay updated with everything important.`,
    emailPlaceholder: `Email`,
    send: `Send`,
    sending: `Sending...`,
    subscribeLegalHtml: `By subscribing, you accept Linktree's terms and conditions, <a href="#">T&amp;Cs</a> and the <a href="#">Privacy Notice</a>, and agree that your contact details may be shared with OML PERU.`,
    promoTitleHtml: `Join the only link in bio trusted by 70M+ <span class="blue">creatives.</span>`,
    promoText: `One link to share everything you create, curate and sell across IG, TikTok and more.`,
    promoPlaceholder: `linktr.ee/ yourname`,
    promoCta: `Claim your Linktree`,
    promoLink1: `Subscribe to @fcbdelhincr`,
    promoLink2: `Learn more about Linktree`,
    promoOutline: `Sign up free`,
    peruWhatsappMessage: `Hello OML PERU, I want more information.`,
    linkCopied: `Link copied`,
    linkCopyFailed: `The link could not be copied`,
    emailJsMissing: `EmailJS is not connected yet.`,
    submitButtonMissing: `The submit button was not found.`,
    subscriptionSent: `Subscription sent successfully`,
    subscriptionFailed: `The subscription could not be sent. Check EmailJS.`,
    fieldSliderAlts: [
      `OML PERU production field`,
      `Fresh ginger`,
      `Ginger production`
    ]
  },

  pt: {
    bioHtml: `Exportação, comunidade e produtos premium.<br>Tudo em um só lugar.`,
    ariaPromotion: `Promoção`,
    ariaNotifications: `Notificações`,
    ariaShare: `Compartilhar`,
    socialAria: [`E-mail Peru`, `Site`, `WhatsApp Peru`, `E-mail Europe`],
    tabs: [`Peru`, `Europa`],
    panelLinksTitles: [
      `CONTATO  -  PERU`,
      `CONTATO  -  EUROPE`,
      `PLANTA DE PROCESSO`,
      `CARREGAMENTO DO CONTÊINER`
    ],
    fieldLabel: `Campo de Produção`,
    fieldFooters: [
      `Campo de produção de gengibre e cúrcuma 🪴`,
      `Contêiner na planta da OML`
    ],
    panelLinksGridTitles: [
      `Visualização de produto de qualidade`,
      `Visualização de produto de qualidade`,
      `Visualização de produto de qualidade`,
      `Visualização de produto de qualidade`,
      `Visualização de produto de qualidade`,
      `Visualização de produto de qualidade`,
      `Inspeção visual da autoridade`,
      `Inspeção visual da autoridade`,
      `Paletes no armazém`,
      `Carga consolidada`
    ],
    communityHeading: `APOIO À COMUNIDADE`,
    communityCards: [
      {
        dataTitle: `Construção de portas e janelas de segurança para uma escola em Pichanaqui`,
        imgAlt: `Apoio a uma escola: construção de portas e janelas de segurança`,
        text: `Apoio a uma escola: construção de portas e janelas de segurança`
      },
      {
        dataTitle: `Escolas de Alto Miricharo recebem apoio comunitário no Natal de 2025`,
        imgAlt: `Apoio comunitário em Alto Miricharo no Natal de 2025`,
        text: `Apoio comunitário em Alto Miricharo no Natal de 2025`
      }
    ],
    instagramTitle: `Cúrcuma`,
    instagramBtn: `Produtos`,
    processLocation: `LOCALIZAÇÃO DO PROCESSO`,
    openMaps: `Abrir no Maps`,
    videoTitle: `VÍDEO DA PLANTA DE PROCESSO`,
    videoBannerAria: `Abrir vídeo do YouTube`,
    videoBannerAlt: `Vídeo em destaque OML PERU`,
    videoSmall: `Vídeo em destaque da comunidade`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Todos os direitos reservados. O uso não autorizado das imagens e de outros conteúdos deste site é estritamente proibido.`,
    panelTiendaHeading: `PARCEIROS NA EUROPA`,
    europeCards: {
      dataTitle: `Gengibre e cúrcuma de alta qualidade: o compromisso da OML PERU com a excelência`,
      imgAlt: `Gengibre e cúrcuma orgânicos disponíveis o ano todo`,
      text: `Gengibre e cúrcuma orgânicos disponíveis o ano todo`
    },
    panelTiendaTitles: [`ARMAZÉM NA EUROPA`, `ARMAZÉM`],
    storePreviewTitle: `Armazém Europa`,
    storePreviewSub: `2 produtos`,
    panelTiendaGridTitles: [
      `Mercadoria em rack`,
      `Conservação da mercadoria`,
      `Gestão de estoque`,
      `Operações de armazém`,
      `Supervisão de carga`,
      `Controle de qualidade`
    ],
    closeVideoAria: `Fechar vídeo`,
    loadingPdf: `Carregando PDF...`,
    loadingPdfError: `Não foi possível mostrar o PDF aqui. Use Ver para abri-lo.`,
    view: `Ver`,
    sharePdfAria: `Compartilhar PDF`,
    closeAria: `Fechar`,
    counterWord: `de`,
    subscribeTitle: `Inscreva-se na Oml Peru`,
    subscribeText: `Fique atualizado com tudo o que é importante.`,
    emailPlaceholder: `E-mail`,
    send: `Enviar`,
    sending: `Enviando...`,
    subscribeLegalHtml: `Ao se inscrever, você aceita os termos e condições do Linktree, <a href="#">T&amp;Cs</a> e o <a href="#">Aviso de Privacidade</a>, e concorda que seus dados de contato possam ser compartilhados com a OML PERU.`,
    promoTitleHtml: `Junte-se ao único link na bio em que mais de 70 milhões de <span class="blue">criadores</span> confiam.`,
    promoText: `Um único link para compartilhar tudo o que você cria, seleciona e vende no IG, TikTok e muito mais.`,
    promoPlaceholder: `linktr.ee/ seunome`,
    promoCta: `Crie seu Linktree`,
    promoLink1: `Inscreva-se em @fcbdelhincr`,
    promoLink2: `Saiba mais sobre o Linktree`,
    promoOutline: `Cadastre-se grátis`,
    peruWhatsappMessage: `Olá OML PERU, quero mais informações.`,
    linkCopied: `Link copiado`,
    linkCopyFailed: `Não foi possível copiar o link`,
    emailJsMissing: `Falta conectar o EmailJS.`,
    submitButtonMissing: `O botão de envio não foi encontrado.`,
    subscriptionSent: `Inscrição enviada com sucesso`,
    subscriptionFailed: `Não foi possível enviar a inscrição. Verifique o EmailJS.`,
    fieldSliderAlts: [
      `Campo de produção OML PERU`,
      `Gengibre fresco`,
      `Produção de gengibre`
    ]
  },

  fr: {
    bioHtml: `Exportation, communauté et produits premium.<br>Tout en un seul endroit.`,
    ariaPromotion: `Promotion`,
    ariaNotifications: `Notifications`,
    ariaShare: `Partager`,
    socialAria: [`E-mail Pérou`, `Site web`, `WhatsApp Pérou`, `E-mail Europe`],
    tabs: [`Pérou`, `Europe`],
    panelLinksTitles: [
      `CONTACT  -  PÉROU`,
      `CONTACT  -  EUROPE`,
      `USINE DE TRAITEMENT`,
      `CHARGEMENT DU CONTENEUR`
    ],
    fieldLabel: `Champ de production`,
    fieldFooters: [
      `Champ de production de gingembre et de curcuma 🪴`,
      `Conteneur dans l'usine OML`
    ],
    panelLinksGridTitles: [
      `Présentation de produit de qualité`,
      `Présentation de produit de qualité`,
      `Présentation de produit de qualité`,
      `Présentation de produit de qualité`,
      `Présentation de produit de qualité`,
      `Présentation de produit de qualité`,
      `Inspection visuelle de l'autorité`,
      `Inspection visuelle de l'autorité`,
      `Palettes dans l'entrepôt`,
      `Chargement consolidé`
    ],
    communityHeading: `SOUTIEN À LA COMMUNAUTÉ`,
    communityCards: [
      {
        dataTitle: `Construction de portes et fenêtres sécurisées pour une école à Pichanaqui`,
        imgAlt: `Soutien à une école : construction de portes et fenêtres sécurisées`,
        text: `Soutien à une école : construction de portes et fenêtres sécurisées`
      },
      {
        dataTitle: `Les écoles d'Alto Miricharo reçoivent un soutien communautaire à Noël 2025`,
        imgAlt: `Soutien communautaire à Alto Miricharo pendant Noël 2025`,
        text: `Soutien communautaire à Alto Miricharo pendant Noël 2025`
      }
    ],
    instagramTitle: `Curcuma`,
    instagramBtn: `Produits`,
    processLocation: `EMPLACEMENT DU PROCESSUS`,
    openMaps: `Ouvrir dans Maps`,
    videoTitle: `VIDÉO DE L'USINE DE TRAITEMENT`,
    videoBannerAria: `Ouvrir la vidéo YouTube`,
    videoBannerAlt: `Vidéo vedette OML PERU`,
    videoSmall: `Vidéo vedette de la communauté`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Tous droits réservés. L'utilisation non autorisée des images et des autres contenus de ce site est strictement interdite.`,
    panelTiendaHeading: `PARTENAIRES EN EUROPE`,
    europeCards: {
      dataTitle: `Gingembre et curcuma de haute qualité : l'engagement d'OML PERU envers l'excellence`,
      imgAlt: `Gingembre et curcuma biologiques disponibles toute l'année`,
      text: `Gingembre et curcuma biologiques disponibles toute l'année`
    },
    panelTiendaTitles: [`ENTREPÔT EN EUROPE`, `ENTREPÔT`],
    storePreviewTitle: `Entrepôt Europe`,
    storePreviewSub: `2 produits`,
    panelTiendaGridTitles: [
      `Marchandise sur rack`,
      `Conservation de la marchandise`,
      `Gestion du stock`,
      `Opérations d'entrepôt`,
      `Supervision du chargement`,
      `Contrôle qualité`
    ],
    closeVideoAria: `Fermer la vidéo`,
    loadingPdf: `Chargement du PDF...`,
    loadingPdfError: `Le PDF ne peut pas être affiché ici. Utilisez Voir pour l'ouvrir.`,
    view: `Voir`,
    sharePdfAria: `Partager le PDF`,
    closeAria: `Fermer`,
    counterWord: `sur`,
    subscribeTitle: `Abonnez-vous à Oml Peru`,
    subscribeText: `Restez informé de tout ce qui est important.`,
    emailPlaceholder: `E-mail`,
    send: `Envoyer`,
    sending: `Envoi...`,
    subscribeLegalHtml: `En vous abonnant, vous acceptez les conditions générales de Linktree, <a href="#">T&amp;Cs</a> et la <a href="#">Politique de confidentialité</a>, et vous acceptez que vos coordonnées soient partagées avec OML PERU.`,
    promoTitleHtml: `Rejoignez le seul lien en bio auquel font confiance plus de 70M de <span class="blue">créateurs.</span>`,
    promoText: `Un seul lien pour partager tout ce que vous créez, sélectionnez et vendez sur IG, TikTok et plus encore.`,
    promoPlaceholder: `linktr.ee/ votrenom`,
    promoCta: `Créez votre Linktree`,
    promoLink1: `Abonnez-vous à @fcbdelhincr`,
    promoLink2: `En savoir plus sur Linktree`,
    promoOutline: `Inscription gratuite`,
    peruWhatsappMessage: `Bonjour OML PERU, je veux plus d'informations.`,
    linkCopied: `Lien copié`,
    linkCopyFailed: `Impossible de copier le lien`,
    emailJsMissing: `EmailJS n'est pas connecté.`,
    submitButtonMissing: `Le bouton d'envoi est introuvable.`,
    subscriptionSent: `Abonnement envoyé avec succès`,
    subscriptionFailed: `L'abonnement n'a pas pu être envoyé. Vérifiez EmailJS.`,
    fieldSliderAlts: [
      `Champ de production OML PERU`,
      `Gingembre frais`,
      `Production de gingembre`
    ]
  },

  de: {
    bioHtml: `Export, Community und Premiumprodukte.<br>Alles an einem Ort.`,
    ariaPromotion: `Aktion`,
    ariaNotifications: `Benachrichtigungen`,
    ariaShare: `Teilen`,
    socialAria: [`E-Mail Peru`, `Webseite`, `WhatsApp Peru`, `E-Mail Europe`],
    tabs: [`Peru`, `Europa`],
    panelLinksTitles: [
      `KONTAKT  -  PERU`,
      `KONTAKT  -  EUROPE`,
      `VERARBEITUNGSANLAGE`,
      `CONTAINERBELADUNG`
    ],
    fieldLabel: `Produktionsfeld`,
    fieldFooters: [
      `Ingwer- und Kurkumaproduktionsfeld 🪴`,
      `Container in der OML-Anlage`
    ],
    panelLinksGridTitles: [
      `Darstellung eines Qualitätsprodukts`,
      `Darstellung eines Qualitätsprodukts`,
      `Darstellung eines Qualitätsprodukts`,
      `Darstellung eines Qualitätsprodukts`,
      `Darstellung eines Qualitätsprodukts`,
      `Darstellung eines Qualitätsprodukts`,
      `Visuelle Inspektion durch die Behörde`,
      `Visuelle Inspektion durch die Behörde`,
      `Paletten im Lager`,
      `Konsolidierte Beladung`
    ],
    communityHeading: `GEMEINSCHAFTSHILFE`,
    communityCards: [
      {
        dataTitle: `Bau von sicheren Türen und Fenstern für eine Schule in Pichanaqui`,
        imgAlt: `Unterstützung für eine Schule: Bau sicherer Türen und Fenster`,
        text: `Unterstützung für eine Schule: Bau sicherer Türen und Fenster`
      },
      {
        dataTitle: `Schulen in Alto Miricharo erhalten Gemeinschaftshilfe zu Weihnachten 2025`,
        imgAlt: `Gemeinschaftshilfe in Alto Miricharo zu Weihnachten 2025`,
        text: `Gemeinschaftshilfe in Alto Miricharo zu Weihnachten 2025`
      }
    ],
    instagramTitle: `Kurkuma`,
    instagramBtn: `Produkte`,
    processLocation: `STANDORT DES PROZESSES`,
    openMaps: `In Maps öffnen`,
    videoTitle: `VIDEO DER VERARBEITUNGSANLAGE`,
    videoBannerAria: `YouTube-Video öffnen`,
    videoBannerAlt: `OML PERU Featured-Video`,
    videoSmall: `Empfohlenes Community-Video`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Alle Rechte vorbehalten. Die unbefugte Nutzung der Bilder und anderer Inhalte dieser Website ist strengstens untersagt.`,
    panelTiendaHeading: `PARTNER IN EUROPA`,
    europeCards: {
      dataTitle: `Hochwertiger Ingwer und Kurkuma: das Engagement von OML PERU für Exzellenz`,
      imgAlt: `Bio-Ingwer und Bio-Kurkuma das ganze Jahr verfügbar`,
      text: `Bio-Ingwer und Bio-Kurkuma das ganze Jahr verfügbar`
    },
    panelTiendaTitles: [`LAGER IN EUROPA`, `LAGER`],
    storePreviewTitle: `Lager Europa`,
    storePreviewSub: `2 Produkte`,
    panelTiendaGridTitles: [
      `Waren im Regal`,
      `Warenerhaltung`,
      `Bestandsverwaltung`,
      `Lagerbetrieb`,
      `Ladeüberwachung`,
      `Qualitätskontrolle`
    ],
    closeVideoAria: `Video schließen`,
    loadingPdf: `PDF wird geladen...`,
    loadingPdfError: `Das PDF konnte hier nicht angezeigt werden. Öffnen Sie es mit Anzeigen.`,
    view: `Anzeigen`,
    sharePdfAria: `PDF teilen`,
    closeAria: `Schließen`,
    counterWord: `von`,
    subscribeTitle: `Abonnieren Sie Oml Peru`,
    subscribeText: `Bleiben Sie über alles Wichtige informiert.`,
    emailPlaceholder: `E-Mail`,
    send: `Senden`,
    sending: `Wird gesendet...`,
    subscribeLegalHtml: `Mit dem Abonnieren akzeptieren Sie die Geschäftsbedingungen von Linktree, <a href="#">T&amp;Cs</a> und die <a href="#">Datenschutzerklärung</a>, und stimmen zu, dass Ihre Kontaktdaten mit OML PERU geteilt werden dürfen.`,
    promoTitleHtml: `Schließen Sie sich dem einzigen Bio-Link an, dem mehr als 70 Mio. <span class="blue">Kreative</span> vertrauen.`,
    promoText: `Ein einziger Link, um alles zu teilen, was Sie auf IG, TikTok und mehr erstellen, kuratieren und verkaufen.`,
    promoPlaceholder: `linktr.ee/ deinname`,
    promoCta: `Erstellen Sie Ihren Linktree`,
    promoLink1: `Abonnieren Sie @fcbdelhincr`,
    promoLink2: `Mehr über Linktree erfahren`,
    promoOutline: `Kostenlos registrieren`,
    peruWhatsappMessage: `Hallo OML PERU, ich möchte mehr Informationen.`,
    linkCopied: `Link kopiert`,
    linkCopyFailed: `Der Link konnte nicht kopiert werden`,
    emailJsMissing: `EmailJS ist noch nicht verbunden.`,
    submitButtonMissing: `Der Senden-Button wurde nicht gefunden.`,
    subscriptionSent: `Abonnement erfolgreich gesendet`,
    subscriptionFailed: `Das Abonnement konnte nicht gesendet werden. Prüfen Sie EmailJS.`,
    fieldSliderAlts: [
      `OML PERU Produktionsfeld`,
      `Frischer Ingwer`,
      `Ingwerproduktion`
    ]
  },

  it: {
    bioHtml: `Esportazione, comunità e prodotti premium.<br>Tutto in un unico posto.`,
    ariaPromotion: `Promozione`,
    ariaNotifications: `Notifiche`,
    ariaShare: `Condividi`,
    socialAria: [`E-mail Perù`, `Sito web`, `WhatsApp Perù`, `E-mail Europe`],
    tabs: [`Perù`, `Europa`],
    panelLinksTitles: [
      `CONTATTO  -  PERÙ`,
      `CONTATTO  -  EUROPE`,
      `IMPIANTO DI LAVORAZIONE`,
      `CARICO DEL CONTAINER`
    ],
    fieldLabel: `Campo di produzione`,
    fieldFooters: [
      `Campo di produzione di zenzero e curcuma 🪴`,
      `Container presso lo stabilimento OML`
    ],
    panelLinksGridTitles: [
      `Presentazione di prodotto di qualità`,
      `Presentazione di prodotto di qualità`,
      `Presentazione di prodotto di qualità`,
      `Presentazione di prodotto di qualità`,
      `Presentazione di prodotto di qualità`,
      `Presentazione di prodotto di qualità`,
      `Ispezione visiva dell'autorità`,
      `Ispezione visiva dell'autorità`,
      `Pallet in magazzino`,
      `Carico consolidato`
    ],
    communityHeading: `SOSTEGNO ALLA COMUNITÀ`,
    communityCards: [
      {
        dataTitle: `Costruzione di porte e finestre di sicurezza per una scuola a Pichanaqui`,
        imgAlt: `Supporto a una scuola: costruzione di porte e finestre di sicurezza`,
        text: `Supporto a una scuola: costruzione di porte e finestre di sicurezza`
      },
      {
        dataTitle: `Le scuole di Alto Miricharo ricevono sostegno comunitario durante il Natale 2025`,
        imgAlt: `Sostegno comunitario ad Alto Miricharo durante il Natale 2025`,
        text: `Sostegno comunitario ad Alto Miricharo durante il Natale 2025`
      }
    ],
    instagramTitle: `Curcuma`,
    instagramBtn: `Prodotti`,
    processLocation: `POSIZIONE DEL PROCESSO`,
    openMaps: `Apri in Maps`,
    videoTitle: `VIDEO DELL'IMPIANTO DI LAVORAZIONE`,
    videoBannerAria: `Apri video YouTube`,
    videoBannerAlt: `Video in evidenza OML PERU`,
    videoSmall: `Video in evidenza della comunità`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Tutti i diritti riservati. L'uso non autorizzato delle immagini e degli altri contenuti di questo sito è severamente vietato.`,
    panelTiendaHeading: `PARTNER IN EUROPA`,
    europeCards: {
      dataTitle: `Zenzero e curcuma di alta qualità: l'impegno di OML PERU per l'eccellenza`,
      imgAlt: `Zenzero e curcuma biologici disponibili tutto l'anno`,
      text: `Zenzero e curcuma biologici disponibili tutto l'anno`
    },
    panelTiendaTitles: [`MAGAZZINO IN EUROPA`, `MAGAZZINO`],
    storePreviewTitle: `Magazzino Europa`,
    storePreviewSub: `2 prodotti`,
    panelTiendaGridTitles: [
      `Merce su scaffale`,
      `Conservazione della merce`,
      `Gestione dello stock`,
      `Operazioni di magazzino`,
      `Supervisione del carico`,
      `Controllo qualità`
    ],
    closeVideoAria: `Chiudi video`,
    loadingPdf: `Caricamento PDF...`,
    loadingPdfError: `Il PDF non può essere mostrato qui. Usa Visualizza per aprirlo.`,
    view: `Visualizza`,
    sharePdfAria: `Condividi PDF`,
    closeAria: `Chiudi`,
    counterWord: `di`,
    subscribeTitle: `Iscriviti a Oml Peru`,
    subscribeText: `Resta aggiornato su tutto ciò che è importante.`,
    emailPlaceholder: `E-mail`,
    send: `Invia`,
    sending: `Invio in corso...`,
    subscribeLegalHtml: `Iscrivendoti, accetti i termini e le condizioni di Linktree, <a href="#">T&amp;Cs</a> e l'<a href="#">Informativa sulla privacy</a>, e accetti che i tuoi dati di contatto possano essere condivisi con OML PERU.`,
    promoTitleHtml: `Unisciti all'unico link in bio di cui si fidano oltre 70M di <span class="blue">creator.</span>`,
    promoText: `Un solo link per condividere tutto ciò che crei, selezioni e vendi su IG, TikTok e altro.`,
    promoPlaceholder: `linktr.ee/ tuonome`,
    promoCta: `Crea il tuo Linktree`,
    promoLink1: `Iscriviti a @fcbdelhincr`,
    promoLink2: `Scopri di più su Linktree`,
    promoOutline: `Registrati gratis`,
    peruWhatsappMessage: `Ciao OML PERU, voglio maggiori informazioni.`,
    linkCopied: `Link copiato`,
    linkCopyFailed: `Impossibile copiare il link`,
    emailJsMissing: `EmailJS non è ancora collegato.`,
    submitButtonMissing: `Pulsante di invio non trovato.`,
    subscriptionSent: `Iscrizione inviata correttamente`,
    subscriptionFailed: `Impossibile inviare l'iscrizione. Controlla EmailJS.`,
    fieldSliderAlts: [
      `Campo di produzione OML PERU`,
      `Zenzero fresco`,
      `Produzione di zenzero`
    ]
  },

  nl: {
    bioHtml: `Export, community en premiumproducten.<br>Alles op één plek.`,
    ariaPromotion: `Promotie`,
    ariaNotifications: `Meldingen`,
    ariaShare: `Delen`,
    socialAria: [`E-mail Peru`, `Website`, `WhatsApp Peru`, `E-mail Europe`],
    tabs: [`Peru`, `Europa`],
    panelLinksTitles: [
      `CONTACT  -  PERU`,
      `CONTACT  -  EUROPE`,
      `VERWERKINGSPLANT`,
      `CONTAINERLADING`
    ],
    fieldLabel: `Productieveld`,
    fieldFooters: [
      `Productieveld voor gember en kurkuma 🪴`,
      `Container in de OML-fabriek`
    ],
    panelLinksGridTitles: [
      `Weergave van kwaliteitsproduct`,
      `Weergave van kwaliteitsproduct`,
      `Weergave van kwaliteitsproduct`,
      `Weergave van kwaliteitsproduct`,
      `Weergave van kwaliteitsproduct`,
      `Weergave van kwaliteitsproduct`,
      `Visuele inspectie door de autoriteit`,
      `Visuele inspectie door de autoriteit`,
      `Pallets in magazijn`,
      `Geconsolideerde lading`
    ],
    communityHeading: `STEUN AAN DE GEMEENSCHAP`,
    communityCards: [
      {
        dataTitle: `Bouw van veilige deuren en ramen voor een school in Pichanaqui`,
        imgAlt: `Steun aan een school: bouw van veilige deuren en ramen`,
        text: `Steun aan een school: bouw van veilige deuren en ramen`
      },
      {
        dataTitle: `Scholen in Alto Miricharo ontvangen gemeenschapssteun tijdens Kerstmis 2025`,
        imgAlt: `Gemeenschapssteun in Alto Miricharo tijdens Kerstmis 2025`,
        text: `Gemeenschapssteun in Alto Miricharo tijdens Kerstmis 2025`
      }
    ],
    instagramTitle: `Kurkuma`,
    instagramBtn: `Producten`,
    processLocation: `LOCATIE VAN HET PROCES`,
    openMaps: `Openen in Maps`,
    videoTitle: `VIDEO VAN DE VERWERKINGSPLANT`,
    videoBannerAria: `YouTube-video openen`,
    videoBannerAlt: `Uitgelichte OML PERU-video`,
    videoSmall: `Uitgelichte communityvideo`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Alle rechten voorbehouden. Ongeoorloofd gebruik van de afbeeldingen en andere inhoud van deze site is strikt verboden.`,
    panelTiendaHeading: `PARTNERS IN EUROPA`,
    europeCards: {
      dataTitle: `Gember en kurkuma van hoge kwaliteit: OML PERU's toewijding aan uitmuntendheid`,
      imgAlt: `Biologische gember en kurkuma het hele jaar door beschikbaar`,
      text: `Biologische gember en kurkuma het hele jaar door beschikbaar`
    },
    panelTiendaTitles: [`MAGAZIJN IN EUROPA`, `MAGAZIJN`],
    storePreviewTitle: `Magazijn Europa`,
    storePreviewSub: `2 producten`,
    panelTiendaGridTitles: [
      `Goederen op rek`,
      `Behoud van goederen`,
      `Voorraadbeheer`,
      `Magazijnactiviteiten`,
      `Laadtoezicht`,
      `Kwaliteitscontrole`
    ],
    closeVideoAria: `Video sluiten`,
    loadingPdf: `PDF laden...`,
    loadingPdfError: `De PDF kan hier niet worden weergegeven. Gebruik Bekijken om deze te openen.`,
    view: `Bekijken`,
    sharePdfAria: `PDF delen`,
    closeAria: `Sluiten`,
    counterWord: `van`,
    subscribeTitle: `Abonneer je op Oml Peru`,
    subscribeText: `Blijf op de hoogte van alles wat belangrijk is.`,
    emailPlaceholder: `E-mail`,
    send: `Verzenden`,
    sending: `Bezig met verzenden...`,
    subscribeLegalHtml: `Door je te abonneren accepteer je de algemene voorwaarden van Linktree, <a href="#">T&amp;Cs</a> en de <a href="#">Privacyverklaring</a>, en ga je ermee akkoord dat je contactgegevens met OML PERU kunnen worden gedeeld.`,
    promoTitleHtml: `Sluit je aan bij de enige bio-link die door meer dan 70M <span class="blue">creators</span> wordt vertrouwd.`,
    promoText: `Één link om alles te delen wat je maakt, selecteert en verkoopt op IG, TikTok en meer.`,
    promoPlaceholder: `linktr.ee/ jouwnaam`,
    promoCta: `Maak je Linktree`,
    promoLink1: `Abonneer je op @fcbdelhincr`,
    promoLink2: `Meer informatie over Linktree`,
    promoOutline: `Gratis registreren`,
    peruWhatsappMessage: `Hallo OML PERU, ik wil meer informatie.`,
    linkCopied: `Link gekopieerd`,
    linkCopyFailed: `De link kon niet worden gekopieerd`,
    emailJsMissing: `EmailJS is nog niet gekoppeld.`,
    submitButtonMissing: `De verzendknop is niet gevonden.`,
    subscriptionSent: `Abonnement succesvol verzonden`,
    subscriptionFailed: `Het abonnement kon niet worden verzonden. Controleer EmailJS.`,
    fieldSliderAlts: [
      `OML PERU productieveld`,
      `Verse gember`,
      `Gemberproductie`
    ]
  },

  zh: {
    bioHtml: `出口、社区与高端产品。<br>一切尽在一处。`,
    ariaPromotion: `促销`,
    ariaNotifications: `通知`,
    ariaShare: `分享`,
    socialAria: [`秘鲁邮箱`, `网站`, `秘鲁 WhatsApp`, `Europe 邮箱`],
    tabs: [`秘鲁`, `欧洲`],
    panelLinksTitles: [
      `联系  -  秘鲁`,
      `联系  -  EUROPE`,
      `加工厂`,
      `集装箱装载`
    ],
    fieldLabel: `生产田地`,
    fieldFooters: [
      `姜和姜黄生产田 🪴`,
      `OML 工厂内的集装箱`
    ],
    panelLinksGridTitles: [
      `优质产品展示`,
      `优质产品展示`,
      `优质产品展示`,
      `优质产品展示`,
      `优质产品展示`,
      `优质产品展示`,
      `主管部门目视检查`,
      `主管部门目视检查`,
      `仓库中的托盘`,
      `整合装载`
    ],
    communityHeading: `社区支持`,
    communityCards: [
      {
        dataTitle: `为 Pichanaqui 一所学校建设安全门窗`,
        imgAlt: `支持一所学校：建设安全门窗`,
        text: `支持一所学校：建设安全门窗`
      },
      {
        dataTitle: `Alto Miricharo 的学校在 2025 年圣诞节期间获得社区支持`,
        imgAlt: `Alto Miricharo 在 2025 年圣诞节期间的社区支持`,
        text: `Alto Miricharo 在 2025 年圣诞节期间的社区支持`
      }
    ],
    instagramTitle: `姜黄`,
    instagramBtn: `产品`,
    processLocation: `工艺位置`,
    openMaps: `在 Maps 中打开`,
    videoTitle: `加工厂视频`,
    videoBannerAria: `打开 YouTube 视频`,
    videoBannerAlt: `OML PERU 精选视频`,
    videoSmall: `社区精选视频`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU。保留所有权利。严禁未经授权使用本网站的图像和其他内容。`,
    panelTiendaHeading: `欧洲合作伙伴`,
    europeCards: {
      dataTitle: `高品质姜和姜黄：OML PERU 对卓越的承诺`,
      imgAlt: `全年供应的有机姜和姜黄`,
      text: `全年供应的有机姜和姜黄`
    },
    panelTiendaTitles: [`欧洲仓库`, `仓库`],
    storePreviewTitle: `欧洲仓库`,
    storePreviewSub: `2 个产品`,
    panelTiendaGridTitles: [
      `货架上的货物`,
      `货物保存`,
      `库存管理`,
      `仓库运营`,
      `装载监督`,
      `质量控制`
    ],
    closeVideoAria: `关闭视频`,
    loadingPdf: `正在加载 PDF...`,
    loadingPdfError: `无法在此处显示 PDF。请使用“查看”打开。`,
    view: `查看`,
    sharePdfAria: `分享 PDF`,
    closeAria: `关闭`,
    counterWord: `共`,
    subscribeTitle: `订阅 Oml Peru`,
    subscribeText: `及时了解所有重要信息。`,
    emailPlaceholder: `电子邮箱`,
    send: `发送`,
    sending: `发送中...`,
    subscribeLegalHtml: `订阅即表示您接受 Linktree 的条款和条件、<a href="#">T&amp;Cs</a> 以及<a href="#">隐私声明</a>，并同意您的联系信息可与 OML PERU 共享。`,
    promoTitleHtml: `加入唯一一个受到超过 7000 万 <span class="blue">创作者</span> 信赖的个人简介链接。`,
    promoText: `一个链接即可分享您在 IG、TikTok 等平台上创建、整理和销售的所有内容。`,
    promoPlaceholder: `linktr.ee/ 你的名字`,
    promoCta: `创建你的 Linktree`,
    promoLink1: `订阅 @fcbdelhincr`,
    promoLink2: `了解更多关于 Linktree`,
    promoOutline: `免费注册`,
    peruWhatsappMessage: `你好 OML PERU，我想了解更多信息。`,
    linkCopied: `链接已复制`,
    linkCopyFailed: `无法复制链接`,
    emailJsMissing: `尚未连接 EmailJS。`,
    submitButtonMissing: `未找到发送按钮。`,
    subscriptionSent: `订阅发送成功`,
    subscriptionFailed: `无法发送订阅。请检查 EmailJS。`,
    fieldSliderAlts: [
      `OML PERU 生产田地`,
      `新鲜姜`,
      `姜生产`
    ]
  },

  ja: {
    bioHtml: `輸出、コミュニティ、プレミアム製品。<br>すべてを一か所で。`,
    ariaPromotion: `プロモーション`,
    ariaNotifications: `通知`,
    ariaShare: `共有`,
    socialAria: [`ペルーのメール`, `ウェブサイト`, `ペルーのWhatsApp`, `Europeのメール`],
    tabs: [`ペルー`, `ヨーロッパ`],
    panelLinksTitles: [
      `連絡先  -  ペルー`,
      `連絡先  -  EUROPE`,
      `加工工場`,
      `コンテナ積み込み`
    ],
    fieldLabel: `生産畑`,
    fieldFooters: [
      `生姜とウコンの生産畑 🪴`,
      `OML 工場内のコンテナ`
    ],
    panelLinksGridTitles: [
      `高品質製品の表示`,
      `高品質製品の表示`,
      `高品質製品の表示`,
      `高品質製品の表示`,
      `高品質製品の表示`,
      `高品質製品の表示`,
      `当局による目視検査`,
      `当局による目視検査`,
      `倉庫内のパレット`,
      `統合積載`
    ],
    communityHeading: `地域支援`,
    communityCards: [
      {
        dataTitle: `Pichanaqui の学校のための安全なドアと窓の建設`,
        imgAlt: `学校支援：安全なドアと窓の建設`,
        text: `学校支援：安全なドアと窓の建設`
      },
      {
        dataTitle: `Alto Miricharo の学校が 2025 年クリスマスに地域支援を受ける`,
        imgAlt: `2025 年クリスマスの Alto Miricharo での地域支援`,
        text: `2025 年クリスマスの Alto Miricharo での地域支援`
      }
    ],
    instagramTitle: `ウコン`,
    instagramBtn: `製品`,
    processLocation: `工程の場所`,
    openMaps: `Mapsで開く`,
    videoTitle: `加工工場の動画`,
    videoBannerAria: `YouTube 動画を開く`,
    videoBannerAlt: `OML PERU の注目動画`,
    videoSmall: `コミュニティ注目動画`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. 無断で本サイトの画像およびその他のコンテンツを使用することを固く禁じます。`,
    panelTiendaHeading: `ヨーロッパのパートナー`,
    europeCards: {
      dataTitle: `高品質の生姜とウコン：OML PERU の卓越性への取り組み`,
      imgAlt: `一年中利用可能な有機生姜と有機ウコン`,
      text: `一年中利用可能な有機生姜と有機ウコン`
    },
    panelTiendaTitles: [`ヨーロッパ倉庫`, `倉庫`],
    storePreviewTitle: `ヨーロッパ倉庫`,
    storePreviewSub: `2 商品`,
    panelTiendaGridTitles: [
      `ラック上の商品`,
      `商品の保存`,
      `在庫管理`,
      `倉庫業務`,
      `積載監督`,
      `品質管理`
    ],
    closeVideoAria: `動画を閉じる`,
    loadingPdf: `PDFを読み込み中...`,
    loadingPdfError: `ここでは PDF を表示できません。表示を使って開いてください。`,
    view: `表示`,
    sharePdfAria: `PDFを共有`,
    closeAria: `閉じる`,
    counterWord: `/`,
    subscribeTitle: `Oml Peru を購読する`,
    subscribeText: `重要な情報を常に把握できます。`,
    emailPlaceholder: `メール`,
    send: `送信`,
    sending: `送信中...`,
    subscribeLegalHtml: `購読すると、Linktree の利用規約 <a href="#">T&amp;Cs</a> および <a href="#">プライバシー通知</a> に同意し、連絡先情報が OML PERU と共有されることに同意したものとみなされます。`,
    promoTitleHtml: `7000万人以上の<span class="blue">クリエイター</span>に信頼されている唯一のプロフィールリンクに参加しましょう。`,
    promoText: `IG、TikTok などで作成・整理・販売するすべてを共有できる1つのリンク。`,
    promoPlaceholder: `linktr.ee/ あなたの名前`,
    promoCta: `Linktree を作成する`,
    promoLink1: `@fcbdelhincr を購読`,
    promoLink2: `Linktree についてもっと知る`,
    promoOutline: `無料で登録`,
    peruWhatsappMessage: `こんにちは OML PERU、詳しい情報を知りたいです。`,
    linkCopied: `リンクをコピーしました`,
    linkCopyFailed: `リンクをコピーできませんでした`,
    emailJsMissing: `EmailJS が未接続です。`,
    submitButtonMissing: `送信ボタンが見つかりません。`,
    subscriptionSent: `購読が正常に送信されました`,
    subscriptionFailed: `購読を送信できませんでした。EmailJS を確認してください。`,
    fieldSliderAlts: [
      `OML PERU 生産畑`,
      `新鮮な生姜`,
      `生姜の生産`
    ]
  },

  ko: {
    bioHtml: `수출, 커뮤니티 및 프리미엄 제품.<br>모든 것을 한곳에서.`,
    ariaPromotion: `프로모션`,
    ariaNotifications: `알림`,
    ariaShare: `공유`,
    socialAria: [`페루 이메일`, `웹사이트`, `페루 WhatsApp`, `Europe 이메일`],
    tabs: [`페루`, `유럽`],
    panelLinksTitles: [
      `연락처  -  페루`,
      `연락처  -  EUROPE`,
      `가공 공장`,
      `컨테이너 적재`
    ],
    fieldLabel: `생산 농장`,
    fieldFooters: [
      `생강 및 강황 생산 농장 🪴`,
      `OML 공장 내 컨테이너`
    ],
    panelLinksGridTitles: [
      `고품질 제품 표시`,
      `고품질 제품 표시`,
      `고품질 제품 표시`,
      `고품질 제품 표시`,
      `고품질 제품 표시`,
      `고품질 제품 표시`,
      `당국의 시각 검사`,
      `당국의 시각 검사`,
      `창고의 팔레트`,
      `통합 적재`
    ],
    communityHeading: `지역사회 지원`,
    communityCards: [
      {
        dataTitle: `Pichanaqui 학교를 위한 안전한 문과 창문 설치`,
        imgAlt: `학교 지원: 안전한 문과 창문 설치`,
        text: `학교 지원: 안전한 문과 창문 설치`
      },
      {
        dataTitle: `Alto Miricharo 학교들이 2025년 크리스마스에 지역사회 지원을 받음`,
        imgAlt: `2025년 크리스마스 Alto Miricharo 지역사회 지원`,
        text: `2025년 크리스마스 Alto Miricharo 지역사회 지원`
      }
    ],
    instagramTitle: `강황`,
    instagramBtn: `제품`,
    processLocation: `공정 위치`,
    openMaps: `Maps에서 열기`,
    videoTitle: `가공 공장 비디오`,
    videoBannerAria: `YouTube 비디오 열기`,
    videoBannerAlt: `OML PERU 추천 비디오`,
    videoSmall: `커뮤니티 추천 비디오`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. 모든 권리 보유. 본 사이트의 이미지 및 기타 콘텐츠의 무단 사용은 엄격히 금지됩니다.`,
    panelTiendaHeading: `유럽 파트너`,
    europeCards: {
      dataTitle: `고품질 생강과 강황: OML PERU의 우수성에 대한 약속`,
      imgAlt: `연중 제공되는 유기농 생강과 강황`,
      text: `연중 제공되는 유기농 생강과 강황`
    },
    panelTiendaTitles: [`유럽 창고`, `창고`],
    storePreviewTitle: `유럽 창고`,
    storePreviewSub: `2개 상품`,
    panelTiendaGridTitles: [
      `랙의 상품`,
      `상품 보존`,
      `재고 관리`,
      `창고 운영`,
      `적재 감독`,
      `품질 관리`
    ],
    closeVideoAria: `비디오 닫기`,
    loadingPdf: `PDF 로딩 중...`,
    loadingPdfError: `여기에서 PDF를 표시할 수 없습니다. 보기를 눌러 여세요.`,
    view: `보기`,
    sharePdfAria: `PDF 공유`,
    closeAria: `닫기`,
    counterWord: `/`,
    subscribeTitle: `Oml Peru 구독하기`,
    subscribeText: `중요한 모든 정보를 받아보세요.`,
    emailPlaceholder: `이메일`,
    send: `보내기`,
    sending: `전송 중...`,
    subscribeLegalHtml: `구독하면 Linktree의 이용약관 <a href="#">T&amp;Cs</a> 및 <a href="#">개인정보 보호정책</a>에 동의하고, 귀하의 연락처 정보가 OML PERU와 공유될 수 있음에 동의하게 됩니다.`,
    promoTitleHtml: `7천만 명 이상의 <span class="blue">크리에이터</span>가 신뢰하는 유일한 바이오 링크에 참여하세요.`,
    promoText: `IG, TikTok 등에서 만들고 선별하고 판매하는 모든 것을 공유할 수 있는 하나의 링크.`,
    promoPlaceholder: `linktr.ee/ 이름`,
    promoCta: `Linktree 만들기`,
    promoLink1: `@fcbdelhincr 구독`,
    promoLink2: `Linktree 더 알아보기`,
    promoOutline: `무료 가입`,
    peruWhatsappMessage: `안녕하세요 OML PERU, 더 많은 정보를 원합니다.`,
    linkCopied: `링크가 복사되었습니다`,
    linkCopyFailed: `링크를 복사할 수 없습니다`,
    emailJsMissing: `EmailJS가 아직 연결되지 않았습니다.`,
    submitButtonMissing: `전송 버튼을 찾을 수 없습니다.`,
    subscriptionSent: `구독이 성공적으로 전송되었습니다`,
    subscriptionFailed: `구독을 전송할 수 없습니다. EmailJS를 확인하세요.`,
    fieldSliderAlts: [
      `OML PERU 생산 농장`,
      `신선한 생강`,
      `생강 생산`
    ]
  },

  ru: {
    bioHtml: `Экспорт, сообщество и премиальные продукты.<br>Все в одном месте.`,
    ariaPromotion: `Промо`,
    ariaNotifications: `Уведомления`,
    ariaShare: `Поделиться`,
    socialAria: [`Почта Перу`, `Сайт`, `WhatsApp Перу`, `Почта Europe`],
    tabs: [`Перу`, `Европа`],
    panelLinksTitles: [
      `КОНТАКТЫ  -  ПЕРУ`,
      `КОНТАКТЫ  -  EUROPE`,
      `ПЕРЕРАБАТЫВАЮЩИЙ ЗАВОД`,
      `ЗАГРУЗКА КОНТЕЙНЕРА`
    ],
    fieldLabel: `Производственное поле`,
    fieldFooters: [
      `Поле производства имбиря и куркумы 🪴`,
      `Контейнер на заводе OML`
    ],
    panelLinksGridTitles: [
      `Демонстрация качественного продукта`,
      `Демонстрация качественного продукта`,
      `Демонстрация качественного продукта`,
      `Демонстрация качественного продукта`,
      `Демонстрация качественного продукта`,
      `Демонстрация качественного продукта`,
      `Визуальная проверка органом`,
      `Визуальная проверка органом`,
      `Поддоны на складе`,
      `Консолидированная загрузка`
    ],
    communityHeading: `ПОДДЕРЖКА СООБЩЕСТВА`,
    communityCards: [
      {
        dataTitle: `Строительство безопасных дверей и окон для школы в Пичанаки`,
        imgAlt: `Поддержка школы: строительство безопасных дверей и окон`,
        text: `Поддержка школы: строительство безопасных дверей и окон`
      },
      {
        dataTitle: `Школы Альто-Миричаро получают поддержку сообщества на Рождество 2025`,
        imgAlt: `Поддержка сообщества в Альто-Миричаро на Рождество 2025`,
        text: `Поддержка сообщества в Альто-Миричаро на Рождество 2025`
      }
    ],
    instagramTitle: `Куркума`,
    instagramBtn: `Продукты`,
    processLocation: `МЕСТО ПРОЦЕССА`,
    openMaps: `Открыть в Maps`,
    videoTitle: `ВИДЕО ПЕРЕРАБАТЫВАЮЩЕГО ЗАВОДА`,
    videoBannerAria: `Открыть видео YouTube`,
    videoBannerAlt: `Рекомендуемое видео OML PERU`,
    videoSmall: `Рекомендуемое видео сообщества`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Все права защищены. Несанкционированное использование изображений и другого содержимого этого сайта строго запрещено.`,
    panelTiendaHeading: `ПАРТНЕРЫ В ЕВРОПЕ`,
    europeCards: {
      dataTitle: `Высококачественные имбирь и куркума: приверженность OML PERU к совершенству`,
      imgAlt: `Органические имбирь и куркума доступны круглый год`,
      text: `Органические имбирь и куркума доступны круглый год`
    },
    panelTiendaTitles: [`СКЛАД В ЕВРОПЕ`, `СКЛАД`],
    storePreviewTitle: `Склад Европа`,
    storePreviewSub: `2 продукта`,
    panelTiendaGridTitles: [
      `Товар на стеллаже`,
      `Сохранность товара`,
      `Управление запасами`,
      `Складские операции`,
      `Контроль загрузки`,
      `Контроль качества`
    ],
    closeVideoAria: `Закрыть видео`,
    loadingPdf: `Загрузка PDF...`,
    loadingPdfError: `PDF нельзя показать здесь. Используйте «Просмотр», чтобы открыть его.`,
    view: `Просмотр`,
    sharePdfAria: `Поделиться PDF`,
    closeAria: `Закрыть`,
    counterWord: `из`,
    subscribeTitle: `Подпишитесь на Oml Peru`,
    subscribeText: `Будьте в курсе всего важного.`,
    emailPlaceholder: `Эл. почта`,
    send: `Отправить`,
    sending: `Отправка...`,
    subscribeLegalHtml: `Подписываясь, вы принимаете условия Linktree, <a href="#">T&amp;Cs</a> и <a href="#">Уведомление о конфиденциальности</a>, а также соглашаетесь на передачу ваших контактных данных OML PERU.`,
    promoTitleHtml: `Присоединяйтесь к единственной ссылке в био, которой доверяют более 70 млн <span class="blue">креаторов</span>.`,
    promoText: `Одна ссылка, чтобы делиться всем, что вы создаете, отбираете и продаете в IG, TikTok и других сервисах.`,
    promoPlaceholder: `linktr.ee/ вашеимя`,
    promoCta: `Создать Linktree`,
    promoLink1: `Подписаться на @fcbdelhincr`,
    promoLink2: `Узнать больше о Linktree`,
    promoOutline: `Зарегистрироваться бесплатно`,
    peruWhatsappMessage: `Здравствуйте, OML PERU, я хочу получить больше информации.`,
    linkCopied: `Ссылка скопирована`,
    linkCopyFailed: `Не удалось скопировать ссылку`,
    emailJsMissing: `EmailJS еще не подключен.`,
    submitButtonMissing: `Кнопка отправки не найдена.`,
    subscriptionSent: `Подписка успешно отправлена`,
    subscriptionFailed: `Не удалось отправить подписку. Проверьте EmailJS.`,
    fieldSliderAlts: [
      `Производственное поле OML PERU`,
      `Свежий имбирь`,
      `Производство имбиря`
    ]
  },

  ar: {
    bioHtml: `التصدير والمجتمع والمنتجات المميزة.<br>كل شيء في مكان واحد.`,
    ariaPromotion: `عرض`,
    ariaNotifications: `الإشعارات`,
    ariaShare: `مشاركة`,
    socialAria: [`بريد بيرو`, `الموقع`, `واتساب بيرو`, `بريد Europe`],
    tabs: [`بيرو`, `أوروبا`],
    panelLinksTitles: [
      `الاتصال  -  بيرو`,
      `الاتصال  -  EUROPE`,
      `مصنع المعالجة`,
      `تحميل الحاوية`
    ],
    fieldLabel: `حقل الإنتاج`,
    fieldFooters: [
      `حقل إنتاج الزنجبيل والكركم 🪴`,
      `الحاوية في مصنع OML`
    ],
    panelLinksGridTitles: [
      `عرض منتج عالي الجودة`,
      `عرض منتج عالي الجودة`,
      `عرض منتج عالي الجودة`,
      `عرض منتج عالي الجودة`,
      `عرض منتج عالي الجودة`,
      `عرض منتج عالي الجودة`,
      `فحص بصري من الجهة المختصة`,
      `فحص بصري من الجهة المختصة`,
      `طبليات في المستودع`,
      `تحميل موحد`
    ],
    communityHeading: `دعم المجتمع`,
    communityCards: [
      {
        dataTitle: `بناء أبواب ونوافذ آمنة لمدرسة في بيتشاناكي`,
        imgAlt: `دعم مدرسة: بناء أبواب ونوافذ آمنة`,
        text: `دعم مدرسة: بناء أبواب ونوافذ آمنة`
      },
      {
        dataTitle: `مدارس ألتو ميريتشارو تتلقى دعمًا مجتمعيًا خلال عيد الميلاد 2025`,
        imgAlt: `دعم مجتمعي في ألتو ميريتشارو خلال عيد الميلاد 2025`,
        text: `دعم مجتمعي في ألتو ميريتشارو خلال عيد الميلاد 2025`
      }
    ],
    instagramTitle: `الكركم`,
    instagramBtn: `المنتجات`,
    processLocation: `موقع العملية`,
    openMaps: `افتح في Maps`,
    videoTitle: `فيديو مصنع المعالجة`,
    videoBannerAria: `افتح فيديو YouTube`,
    videoBannerAlt: `فيديو مميز OML PERU`,
    videoSmall: `فيديو مميز من المجتمع`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. جميع الحقوق محفوظة. يُحظر تمامًا الاستخدام غير المصرح به للصور والمحتويات الأخرى في هذا الموقع.`,
    panelTiendaHeading: `شركاء في أوروبا`,
    europeCards: {
      dataTitle: `زنجبيل وكركم عالي الجودة: التزام OML PERU بالتميّز`,
      imgAlt: `زنجبيل وكركم عضويان متاحان طوال العام`,
      text: `زنجبيل وكركم عضويان متاحان طوال العام`
    },
    panelTiendaTitles: [`مستودع في أوروبا`, `المستودع`],
    storePreviewTitle: `مستودع أوروبا`,
    storePreviewSub: `2 منتجات`,
    panelTiendaGridTitles: [
      `بضائع على الرف`,
      `حفظ البضائع`,
      `إدارة المخزون`,
      `عمليات المستودع`,
      `الإشراف على التحميل`,
      `مراقبة الجودة`
    ],
    closeVideoAria: `إغلاق الفيديو`,
    loadingPdf: `جارٍ تحميل PDF...`,
    loadingPdfError: `لا يمكن عرض ملف PDF هنا. استخدم عرض لفتحه.`,
    view: `عرض`,
    sharePdfAria: `مشاركة PDF`,
    closeAria: `إغلاق`,
    counterWord: `من`,
    subscribeTitle: `اشترك في Oml Peru`,
    subscribeText: `ابقَ على اطلاع بكل ما هو مهم.`,
    emailPlaceholder: `البريد الإلكتروني`,
    send: `إرسال`,
    sending: `جارٍ الإرسال...`,
    subscribeLegalHtml: `من خلال الاشتراك، فإنك توافق على شروط وأحكام Linktree، <a href="#">T&amp;Cs</a> و<a href="#">إشعار الخصوصية</a>، وتوافق على مشاركة بيانات الاتصال الخاصة بك مع OML PERU.`,
    promoTitleHtml: `انضم إلى الرابط الوحيد في السيرة الذاتية الذي يثق به أكثر من 70 مليون <span class="blue">مبدع</span>.`,
    promoText: `رابط واحد لمشاركة كل ما تنشئه وتنسقه وتبيعه عبر IG وTikTok وغيرهما.`,
    promoPlaceholder: `linktr.ee/ اسمك`,
    promoCta: `أنشئ Linktree الخاص بك`,
    promoLink1: `اشترك في @fcbdelhincr`,
    promoLink2: `اعرف المزيد عن Linktree`,
    promoOutline: `سجّل مجانًا`,
    peruWhatsappMessage: `مرحبًا OML PERU، أريد مزيدًا من المعلومات.`,
    linkCopied: `تم نسخ الرابط`,
    linkCopyFailed: `تعذر نسخ الرابط`,
    emailJsMissing: `لم يتم ربط EmailJS بعد.`,
    submitButtonMissing: `لم يتم العثور على زر الإرسال.`,
    subscriptionSent: `تم إرسال الاشتراك بنجاح`,
    subscriptionFailed: `تعذر إرسال الاشتراك. تحقق من EmailJS.`,
    fieldSliderAlts: [
      `حقل إنتاج OML PERU`,
      `زنجبيل طازج`,
      `إنتاج الزنجبيل`
    ]
  },

  tr: {
    bioHtml: `İhracat, topluluk ve premium ürünler.<br>Hepsi tek bir yerde.`,
    ariaPromotion: `Promosyon`,
    ariaNotifications: `Bildirimler`,
    ariaShare: `Paylaş`,
    socialAria: [`Peru e-posta`, `Web sitesi`, `Peru WhatsApp`, `Europe e-posta`],
    tabs: [`Peru`, `Avrupa`],
    panelLinksTitles: [
      `İLETİŞİM  -  PERU`,
      `İLETİŞİM  -  EUROPE`,
      `İŞLEME TESİSİ`,
      `KONTEYNER YÜKLEME`
    ],
    fieldLabel: `Üretim alanı`,
    fieldFooters: [
      `Zencefil ve zerdeçal üretim alanı 🪴`,
      `OML tesisindeki konteyner`
    ],
    panelLinksGridTitles: [
      `Kaliteli ürün gösterimi`,
      `Kaliteli ürün gösterimi`,
      `Kaliteli ürün gösterimi`,
      `Kaliteli ürün gösterimi`,
      `Kaliteli ürün gösterimi`,
      `Kaliteli ürün gösterimi`,
      `Yetkili kurum görsel denetimi`,
      `Yetkili kurum görsel denetimi`,
      `Depodaki paletler`,
      `Konsolide yükleme`
    ],
    communityHeading: `TOPLULUK DESTEĞİ`,
    communityCards: [
      {
        dataTitle: `Pichanaqui'deki bir okul için güvenli kapı ve pencere yapımı`,
        imgAlt: `Bir okula destek: güvenli kapı ve pencere yapımı`,
        text: `Bir okula destek: güvenli kapı ve pencere yapımı`
      },
      {
        dataTitle: `Alto Miricharo okulları 2025 Noel döneminde topluluk desteği alıyor`,
        imgAlt: `2025 Noel döneminde Alto Miricharo topluluk desteği`,
        text: `2025 Noel döneminde Alto Miricharo topluluk desteği`
      }
    ],
    instagramTitle: `Zerdeçal`,
    instagramBtn: `Ürünler`,
    processLocation: `SÜREÇ KONUMU`,
    openMaps: `Maps'te aç`,
    videoTitle: `İŞLEME TESİSİ VİDEOSU`,
    videoBannerAria: `YouTube videosunu aç`,
    videoBannerAlt: `Öne çıkan OML PERU videosu`,
    videoSmall: `Öne çıkan topluluk videosu`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. Tüm hakları saklıdır. Bu sitedeki görsellerin ve diğer içeriklerin izinsiz kullanımı kesinlikle yasaktır.`,
    panelTiendaHeading: `AVRUPA'DAKİ ORTAKLAR`,
    europeCards: {
      dataTitle: `Yüksek kaliteli zencefil ve zerdeçal: OML PERU'nun mükemmellik taahhüdü`,
      imgAlt: `Yıl boyunca mevcut organik zencefil ve zerdeçal`,
      text: `Yıl boyunca mevcut organik zencefil ve zerdeçal`
    },
    panelTiendaTitles: [`AVRUPA DEPOSU`, `DEPO`],
    storePreviewTitle: `Avrupa Deposu`,
    storePreviewSub: `2 ürün`,
    panelTiendaGridTitles: [
      `Rafdaki ürünler`,
      `Ürün koruma`,
      `Stok yönetimi`,
      `Depo operasyonları`,
      `Yükleme denetimi`,
      `Kalite kontrol`
    ],
    closeVideoAria: `Videoyu kapat`,
    loadingPdf: `PDF yükleniyor...`,
    loadingPdfError: `PDF burada gösterilemedi. Açmak için Görüntüle'yi kullanın.`,
    view: `Görüntüle`,
    sharePdfAria: `PDF paylaş`,
    closeAria: `Kapat`,
    counterWord: `/`,
    subscribeTitle: `Oml Peru'ya abone olun`,
    subscribeText: `Önemli olan her şeyden haberdar olun.`,
    emailPlaceholder: `E-posta`,
    send: `Gönder`,
    sending: `Gönderiliyor...`,
    subscribeLegalHtml: `Abone olarak Linktree'nin şart ve koşullarını, <a href="#">T&amp;Cs</a> ve <a href="#">Gizlilik Bildirimi</a>'ni kabul etmiş olursunuz ve iletişim bilgilerinizin OML PERU ile paylaşılmasını kabul edersiniz.`,
    promoTitleHtml: `70 milyondan fazla <span class="blue">yaratıcının</span> güvendiği tek bio bağlantısına katılın.`,
    promoText: `IG, TikTok ve daha fazlasında oluşturduğunuz, seçtiğiniz ve sattığınız her şeyi paylaşmak için tek bağlantı.`,
    promoPlaceholder: `linktr.ee/ adınız`,
    promoCta: `Linktree'nizi oluşturun`,
    promoLink1: `@fcbdelhincr'e abone olun`,
    promoLink2: `Linktree hakkında daha fazla bilgi`,
    promoOutline: `Ücretsiz kaydol`,
    peruWhatsappMessage: `Merhaba OML PERU, daha fazla bilgi istiyorum.`,
    linkCopied: `Bağlantı kopyalandı`,
    linkCopyFailed: `Bağlantı kopyalanamadı`,
    emailJsMissing: `EmailJS henüz bağlanmadı.`,
    submitButtonMissing: `Gönder butonu bulunamadı.`,
    subscriptionSent: `Abonelik başarıyla gönderildi`,
    subscriptionFailed: `Abonelik gönderilemedi. EmailJS'i kontrol edin.`,
    fieldSliderAlts: [
      `OML PERU üretim alanı`,
      `Taze zencefil`,
      `Zencefil üretimi`
    ]
  },

  hi: {
    bioHtml: `निर्यात, समुदाय और प्रीमियम उत्पाद।<br>सब कुछ एक ही जगह पर।`,
    ariaPromotion: `प्रमोशन`,
    ariaNotifications: `सूचनाएँ`,
    ariaShare: `साझा करें`,
    socialAria: [`पेरू ईमेल`, `वेबसाइट`, `पेरू व्हाट्सऐप`, `Europe ईमेल`],
    tabs: [`पेरू`, `यूरोप`],
    panelLinksTitles: [
      `संपर्क  -  पेरू`,
      `संपर्क  -  EUROPE`,
      `प्रोसेसिंग प्लांट`,
      `कंटेनर लोडिंग`
    ],
    fieldLabel: `उत्पादन क्षेत्र`,
    fieldFooters: [
      `अदरक और हल्दी उत्पादन क्षेत्र 🪴`,
      `OML प्लांट में कंटेनर`
    ],
    panelLinksGridTitles: [
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `उच्च गुणवत्ता उत्पाद प्रदर्शन`,
      `प्राधिकरण द्वारा दृश्य निरीक्षण`,
      `प्राधिकरण द्वारा दृश्य निरीक्षण`,
      `गोदाम में पैलेट`,
      `संयुक्त लोडिंग`
    ],
    communityHeading: `समुदाय सहयोग`,
    communityCards: [
      {
        dataTitle: `पिचानाकी के एक स्कूल के लिए सुरक्षित दरवाजों और खिड़कियों का निर्माण`,
        imgAlt: `एक स्कूल के लिए सहायता: सुरक्षित दरवाजों और खिड़कियों का निर्माण`,
        text: `एक स्कूल के लिए सहायता: सुरक्षित दरवाजों और खिड़कियों का निर्माण`
      },
      {
        dataTitle: `अल्टो मिरीचारो के स्कूलों को क्रिसमस 2025 के दौरान सामुदायिक सहयोग मिला`,
        imgAlt: `क्रिसमस 2025 के दौरान अल्टो मिरीचारो में सामुदायिक सहयोग`,
        text: `क्रिसमस 2025 के दौरान अल्टो मिरीचारो में सामुदायिक सहयोग`
      }
    ],
    instagramTitle: `हल्दी`,
    instagramBtn: `उत्पाद`,
    processLocation: `प्रक्रिया स्थान`,
    openMaps: `Maps में खोलें`,
    videoTitle: `प्रोसेसिंग प्लांट वीडियो`,
    videoBannerAria: `YouTube वीडियो खोलें`,
    videoBannerAlt: `OML PERU विशेष वीडियो`,
    videoSmall: `समुदाय का विशेष वीडियो`,
    videoMeta: `YouTube · OML PERU`,
    footerRights: `© 2026 OML PERU. सर्वाधिकार सुरक्षित। इस साइट की छवियों और अन्य सामग्री का अनधिकृत उपयोग सख्ती से प्रतिबंधित है।`,
    panelTiendaHeading: `यूरोप में साझेदार`,
    europeCards: {
      dataTitle: `उच्च गुणवत्ता वाला अदरक और हल्दी: उत्कृष्टता के लिए OML PERU की प्रतिबद्धता`,
      imgAlt: `साल भर उपलब्ध जैविक अदरक और हल्दी`,
      text: `साल भर उपलब्ध जैविक अदरक और हल्दी`
    },
    panelTiendaTitles: [`यूरोप गोदाम`, `गोदाम`],
    storePreviewTitle: `यूरोप गोदाम`,
    storePreviewSub: `2 उत्पाद`,
    panelTiendaGridTitles: [
      `रैक पर माल`,
      `माल का संरक्षण`,
      `स्टॉक प्रबंधन`,
      `गोदाम संचालन`,
      `लोडिंग पर्यवेक्षण`,
      `गुणवत्ता नियंत्रण`
    ],
    closeVideoAria: `वीडियो बंद करें`,
    loadingPdf: `PDF लोड हो रहा है...`,
    loadingPdfError: `यहाँ PDF नहीं दिखाया जा सका। इसे खोलने के लिए देखें का उपयोग करें।`,
    view: `देखें`,
    sharePdfAria: `PDF साझा करें`,
    closeAria: `बंद करें`,
    counterWord: `में से`,
    subscribeTitle: `Oml Peru की सदस्यता लें`,
    subscribeText: `महत्वपूर्ण हर चीज़ से अपडेट रहें।`,
    emailPlaceholder: `ईमेल`,
    send: `भेजें`,
    sending: `भेजा जा रहा है...`,
    subscribeLegalHtml: `सदस्यता लेने पर आप Linktree की शर्तों एवं नियमों, <a href="#">T&amp;Cs</a> और <a href="#">गोपनीयता सूचना</a> को स्वीकार करते हैं, और इस बात से सहमत होते हैं कि आपकी संपर्क जानकारी OML PERU के साथ साझा की जा सकती है।`,
    promoTitleHtml: `उस एकमात्र बायो लिंक से जुड़ें जिस पर 70M+ <span class="blue">क्रिएटर्स</span> भरोसा करते हैं।`,
    promoText: `एक ही लिंक से वह सब साझा करें जो आप IG, TikTok और अन्य प्लेटफ़ॉर्म पर बनाते, चुनते और बेचते हैं।`,
    promoPlaceholder: `linktr.ee/ आपकानाम`,
    promoCta: `अपना Linktree बनाएँ`,
    promoLink1: `@fcbdelhincr को सब्सक्राइब करें`,
    promoLink2: `Linktree के बारे में और जानें`,
    promoOutline: `मुफ़्त साइन अप करें`,
    peruWhatsappMessage: `नमस्ते OML PERU, मुझे अधिक जानकारी चाहिए।`,
    linkCopied: `लिंक कॉपी हो गया`,
    linkCopyFailed: `लिंक कॉपी नहीं हो सका`,
    emailJsMissing: `EmailJS अभी कनेक्ट नहीं है।`,
    submitButtonMissing: `भेजने वाला बटन नहीं मिला।`,
    subscriptionSent: `सदस्यता सफलतापूर्वक भेजी गई`,
    subscriptionFailed: `सदस्यता भेजी नहीं जा सकी। EmailJS जाँचें।`,
    fieldSliderAlts: [
      `OML PERU उत्पादन क्षेत्र`,
      `ताज़ा अदरक`,
      `अदरक उत्पादन`
    ]
  }
};

function normalizeLocale(locale) {
  return String(locale || '').trim().toLowerCase();
}

function getStoredLocaleCode() {
  const remembered = localStorage.getItem(OML_STORAGE_KEYS.remember) === 'true';
  const persistent = localStorage.getItem(OML_STORAGE_KEYS.persistentLocale);
  const temporary = sessionStorage.getItem(OML_STORAGE_KEYS.temporaryLocale);

  return remembered
    ? (persistent || temporary || navigator.language || 'es-PE')
    : (temporary || persistent || navigator.language || 'es-PE');
}

function resolveLanguageFromLocale(localeCode) {
  const normalized = normalizeLocale(localeCode);

  if (LOCALE_ALIASES[normalized]) {
    return LOCALE_ALIASES[normalized];
  }

  const base = normalized.split('-')[0];
  return SUPPORTED_LANGUAGES.has(base) ? base : 'en';
}

function getAppLanguage() {
  return resolveLanguageFromLocale(getStoredLocaleCode());
}

function tr(key) {
  const lang = getAppLanguage();
  return (
    I18N[lang]?.[key] ??
    I18N.en?.[key] ??
    I18N.es?.[key] ??
    ''
  );
}

function setTextContent(selector, value) {
  const element = document.querySelector(selector);
  if (element && value != null) {
    element.textContent = value;
  }
}

function setInnerHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element && value != null) {
    element.innerHTML = value;
  }
}

function setAttributeValue(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element && value != null) {
    element.setAttribute(attribute, value);
  }
}

function setTextInList(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] != null) {
      element.textContent = values[index];
    }
  });
}

function setAttrInList(selector, attribute, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] != null) {
      element.setAttribute(attribute, values[index]);
    }
  });
}

const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';

const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
const tabsTop = document.getElementById('tabsTop');

const fieldSlideImg = document.getElementById('fieldSlideImg');

const fieldSliderImages = [
  { src: 'img/campoproduccion.jpeg', alt: '' },
  { src: 'img/campoproducto1.jpeg', alt: '' },
  { src: 'img/jengibrecampo2.jpeg', alt: '' }
];

let fieldSliderIndex = 0;
let fieldSliderInterval = null;

function syncFieldSliderLanguage() {
  const alts = tr('fieldSliderAlts');
  if (Array.isArray(alts)) {
    fieldSliderImages.forEach((item, index) => {
      item.alt = alts[index] || alts[0] || '';
    });
  }

  if (fieldSlideImg) {
    paintFieldSlider(fieldSliderIndex);
  }
}

function paintFieldSlider(index) {
  if (!fieldSlideImg || !fieldSliderImages.length) return;

  const current = fieldSliderImages[index % fieldSliderImages.length];
  fieldSlideImg.src = current.src;
  fieldSlideImg.alt = current.alt;
}

function changeFieldSlider() {
  if (!fieldSlideImg || fieldSliderImages.length < 2) return;

  fieldSlideImg.classList.add('is-fading');

  setTimeout(() => {
    fieldSliderIndex = (fieldSliderIndex + 1) % fieldSliderImages.length;
    paintFieldSlider(fieldSliderIndex);
    fieldSlideImg.classList.remove('is-fading');
  }, 220);
}

function startFieldSlider() {
  if (!fieldSlideImg || fieldSliderImages.length < 2) return;

  paintFieldSlider(fieldSliderIndex);

  if (fieldSliderInterval) {
    clearInterval(fieldSliderInterval);
  }

  fieldSliderInterval = setInterval(changeFieldSlider, 2000);
}

function stopFieldSlider() {
  if (fieldSliderInterval) {
    clearInterval(fieldSliderInterval);
    fieldSliderInterval = null;
  }
}

function switchTab(targetId) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  const button = [...tabButtons].find(btn => btn.getAttribute('data-tab') === targetId);
  const panel = document.getElementById(targetId);

  if (button) button.classList.add('active');
  if (panel) panel.classList.add('active');
}

if (tabButtons.length && panels.length) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');
      switchTab(target);
    });
  });
}

document.querySelectorAll('.openStoreTab').forEach(button => {
  button.addEventListener('click', () => {
    switchTab('panelTienda');
    tabsTop?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const videoModal = document.getElementById('videoModal');
const videoFrameWrap = document.getElementById('videoFrameWrap');
const openVideoBtn = document.getElementById('openVideo');
const closeVideoBtn = document.getElementById('closeVideo');

const storyViewerModal = document.getElementById('storyViewerModal');
const storyViewerTitle = document.getElementById('storyViewerTitle');
const storyViewerCounter = document.getElementById('storyViewerCounter');
const storyViewerDocWrap = document.getElementById('storyViewerDocWrap');
const storyViewerLoading = document.getElementById('storyViewerLoading');
const storyViewerPages = document.getElementById('storyViewerPages');
const storyViewerOpenPdf = document.getElementById('storyViewerOpenPdf');
const closeStoryViewerBtn = document.getElementById('closeStoryViewer');
const shareStoryPdfBtn = document.getElementById('shareStoryPdf');
const storyCards = document.querySelectorAll('.openStoryViewer');

const subscribeModal = document.getElementById('subscribeModal');
const openSubscribeModalBtn = document.getElementById('openSubscribeModal');
const closeSubscribeModalBtn = document.getElementById('closeSubscribeModal');
const subscribeForm = document.getElementById('subscribeForm');
const subscribeSubmitBtn = document.getElementById('subscribeSubmitBtn');

const promoModal = document.getElementById('promoModal');
const openPromoModalBtn = document.getElementById('openPromoModal');
const closePromoModalBtn = document.getElementById('closePromoModal');

const sharePageBtn = document.getElementById('sharePageBtn');

let currentStoryPdf = '';
let currentStoryTitle = '';
let currentPdfTotalPages = 1;
let currentRenderToken = 0;
let currentPageObserver = null;
let resizeTimeout = null;

function applyPageLanguage() {
  const lang = getAppLanguage();
  const dictionary = I18N[lang] || I18N.en;

  document.documentElement.lang = lang;
  document.title = 'OML PERU';

  setAttributeValue('.hero img', 'alt', dictionary.videoBannerAlt);
  setAttributeValue('.avatar', 'alt', 'OML PERU');

  setInnerHtml('.bio', dictionary.bioHtml);

  setAttributeValue('#openPromoModal', 'aria-label', dictionary.ariaPromotion);
  setAttributeValue('#openSubscribeModal', 'aria-label', dictionary.ariaNotifications);
  setAttributeValue('#sharePageBtn', 'aria-label', dictionary.ariaShare);

  setAttrInList('.socials a', 'aria-label', dictionary.socialAria);
  setTextInList('.tab-btn', dictionary.tabs);
  setTextInList('#panelLinks .section-title', dictionary.panelLinksTitles);

  setTextContent('#panelLinks .field-label', dictionary.fieldLabel);

  const panelLinksFooterTexts = document.querySelectorAll('#panelLinks .field-slider-card .footer-text');
  if (panelLinksFooterTexts[0]) panelLinksFooterTexts[0].textContent = dictionary.fieldFooters[0];
  if (panelLinksFooterTexts[1]) panelLinksFooterTexts[1].textContent = dictionary.fieldFooters[1];

  setTextInList('#panelLinks .grid .grid-title', dictionary.panelLinksGridTitles);

  const panelLinksStoryHeading = document.querySelector('#panelLinks .story-heading');
  if (panelLinksStoryHeading) {
    panelLinksStoryHeading.textContent = dictionary.communityHeading;
  }

  const communityCards = document.querySelectorAll('#panelLinks .openStoryViewer');
  if (communityCards[0]) {
    communityCards[0].dataset.title = dictionary.communityCards[0].dataTitle;
    const img = communityCards[0].querySelector('img');
    const title = communityCards[0].querySelector('.story-title');
    if (img) img.alt = dictionary.communityCards[0].imgAlt;
    if (title) title.textContent = dictionary.communityCards[0].text;
  }

  if (communityCards[1]) {
    communityCards[1].dataset.title = dictionary.communityCards[1].dataTitle;
    const img = communityCards[1].querySelector('img');
    const title = communityCards[1].querySelector('.story-title');
    if (img) img.alt = dictionary.communityCards[1].imgAlt;
    if (title) title.textContent = dictionary.communityCards[1].text;
  }

  setTextContent('.instagram-title', dictionary.instagramTitle);
  setTextContent('.instagram-btn', dictionary.instagramBtn);

  setTextContent('.location-title', dictionary.processLocation);

  setInnerHtml('.map-open-btn', `${dictionary.openMaps}
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 3h7v7"></path>
      <path d="M10 14L21 3"></path>
      <path d="M21 14v7h-7"></path>
      <path d="M3 10V3h7"></path>
    </svg>`);

  setTextContent('.video-title', dictionary.videoTitle);
  setAttributeValue('#openVideo', 'aria-label', dictionary.videoBannerAria);
  setAttributeValue('.video-banner img', 'alt', dictionary.videoBannerAlt);
  setTextContent('.video-big', 'OML PERU');
  setTextContent('.video-small', dictionary.videoSmall);
  setTextContent('.video-meta', dictionary.videoMeta);

  setTextContent('#panelLinks .footer-mini a', dictionary.footerRights);

  const panelTiendaHeading = document.querySelector('#panelTienda .story-heading');
  if (panelTiendaHeading) {
    panelTiendaHeading.textContent = dictionary.panelTiendaHeading;
  }

  const europeCards = document.querySelectorAll('#panelTienda .openStoryViewer');
  europeCards.forEach(card => {
    card.dataset.title = dictionary.europeCards.dataTitle;
    const img = card.querySelector('img');
    const title = card.querySelector('.story-title');
    if (img) img.alt = dictionary.europeCards.imgAlt;
    if (title) title.textContent = dictionary.europeCards.text;
  });

  setTextInList('#panelTienda .section-title', dictionary.panelTiendaTitles);
  setTextContent('.store-preview-title', dictionary.storePreviewTitle);
  setTextContent('.store-preview-sub', dictionary.storePreviewSub);
  setTextInList('#panelTienda .grid-title', dictionary.panelTiendaGridTitles);
  setTextContent('#panelTienda .footer-mini a', dictionary.footerRights);

  setAttributeValue('#closeVideo', 'aria-label', dictionary.closeVideoAria);
  setTextContent('#storyViewerLoading', dictionary.loadingPdf);
  setTextContent('#storyViewerOpenPdf', dictionary.view);
  setAttributeValue('#shareStoryPdf', 'aria-label', dictionary.sharePdfAria);
  setAttributeValue('#closeStoryViewer', 'aria-label', dictionary.closeAria);

  setTextContent('.subscribe-title', dictionary.subscribeTitle);
  setTextContent('.subscribe-text', dictionary.subscribeText);
  setAttributeValue('.subscribe-input', 'placeholder', dictionary.emailPlaceholder);
  setTextContent('#subscribeSubmitBtn', dictionary.send);
  setAttributeValue('#closeSubscribeModal', 'aria-label', dictionary.closeAria);
  setInnerHtml('.subscribe-legal', dictionary.subscribeLegalHtml);

  setAttributeValue('#closePromoModal', 'aria-label', dictionary.closeAria);
  setInnerHtml('.promo-title', dictionary.promoTitleHtml);
  setTextContent('.promo-text', dictionary.promoText);
  setAttributeValue('.promo-input', 'placeholder', dictionary.promoPlaceholder);
  setTextContent('.promo-cta', dictionary.promoCta);

  const promoLinks = document.querySelectorAll('.promo-links a');
  if (promoLinks[0]) promoLinks[0].textContent = dictionary.promoLink1;
  if (promoLinks[1]) promoLinks[1].textContent = dictionary.promoLink2;
  setTextContent('.promo-outline', dictionary.promoOutline);

  const encodedPeruMessage = encodeURIComponent(dictionary.peruWhatsappMessage);
  const peruWhatsApps = document.querySelectorAll('a[href*="wa.me/51964347840"]');
  peruWhatsApps.forEach(link => {
    link.href = `https://wa.me/51964347840?text=${encodedPeruMessage}`;
  });

  syncFieldSliderLanguage();
}

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

if (window.emailjs) {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
  });
}

function isModalOpen(modal) {
  return !!modal && modal.classList.contains('active');
}

function resetBodyScroll() {
  if (
    !isModalOpen(videoModal) &&
    !isModalOpen(storyViewerModal) &&
    !isModalOpen(subscribeModal) &&
    !isModalOpen(promoModal)
  ) {
    document.body.style.overflow = '';
  }
}

function buildAbsoluteUrl(path) {
  return new URL(path, window.location.href).href;
}

function shareUrl(url, title = document.title) {
  const dictionary = I18N[getAppLanguage()] || I18N.en;

  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
    return;
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => alert(dictionary.linkCopied))
      .catch(() => alert(dictionary.linkCopyFailed));
    return;
  }

  alert(url);
}

function openVideo() {
  if (!videoModal || !videoFrameWrap) return;

  videoFrameWrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/KGjkBw9RPzg?start=8&autoplay=1&rel=0"
      title="OML PERU video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;

  videoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  if (!videoModal || !videoFrameWrap) return;
  videoModal.classList.remove('active');
  videoFrameWrap.innerHTML = '';
  resetBodyScroll();
}

openVideoBtn?.addEventListener('click', openVideo);
closeVideoBtn?.addEventListener('click', closeVideo);

videoModal?.addEventListener('click', function (e) {
  if (e.target === videoModal) {
    closeVideo();
  }
});

const storySlider = document.getElementById('storySlider');
const storyPrev = document.getElementById('storyPrev');
const storyNext = document.getElementById('storyNext');

function getStoryStep() {
  const firstCard = storySlider?.querySelector('.story-card');
  if (!firstCard) return 300;
  const gap = 14;
  return firstCard.offsetWidth + gap;
}

function updateStoryButtons() {
  if (!storySlider || !storyPrev || !storyNext) return;

  const maxScroll = storySlider.scrollWidth - storySlider.clientWidth;
  storyPrev.style.display = storySlider.scrollLeft <= 10 ? 'none' : 'flex';
  storyNext.style.display = storySlider.scrollLeft >= maxScroll - 10 ? 'none' : 'flex';
}

storyNext?.addEventListener('click', () => {
  storySlider?.scrollBy({ left: getStoryStep(), behavior: 'smooth' });
});

storyPrev?.addEventListener('click', () => {
  storySlider?.scrollBy({ left: -getStoryStep(), behavior: 'smooth' });
});

storySlider?.addEventListener('scroll', updateStoryButtons);
window.addEventListener('load', updateStoryButtons);
window.addEventListener('resize', updateStoryButtons);

function setStoryLoading(isLoading, message = tr('loadingPdf')) {
  if (!storyViewerDocWrap || !storyViewerLoading) return;

  storyViewerLoading.textContent = message;

  if (isLoading) {
    storyViewerDocWrap.classList.add('is-loading');
  } else {
    storyViewerDocWrap.classList.remove('is-loading');
  }
}

function updateStoryCounter(current, total) {
  if (!storyViewerCounter) return;
  const dictionary = I18N[getAppLanguage()] || I18N.en;
  storyViewerCounter.textContent = `${current} ${dictionary.counterWord} ${total}`;
}

function clearStoryPages() {
  if (storyViewerPages) {
    storyViewerPages.innerHTML = '';
  }

  if (currentPageObserver) {
    currentPageObserver.disconnect();
    currentPageObserver = null;
  }
}

function observeVisiblePages(totalPages) {
  if (!storyViewerDocWrap || !storyViewerPages) return;

  const pages = [...storyViewerPages.querySelectorAll('.story-viewer-pdf-page')];
  if (!pages.length) return;

  if (currentPageObserver) {
    currentPageObserver.disconnect();
  }

  currentPageObserver = new IntersectionObserver(
    entries => {
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const pageNumber = Number(visibleEntry.target.dataset.page || 1);
      updateStoryCounter(pageNumber, totalPages);
    },
    {
      root: storyViewerDocWrap,
      threshold: [0.5, 0.7, 0.9]
    }
  );

  pages.forEach(page => currentPageObserver.observe(page));
}

async function renderPdfWithPdfJs(pdfPath) {
  if (!window.pdfjsLib || !storyViewerPages || !storyViewerDocWrap) {
    setStoryLoading(true, tr('loadingPdfError'));
    return;
  }

  const renderToken = ++currentRenderToken;

  clearStoryPages();
  setStoryLoading(true, tr('loadingPdf'));
  updateStoryCounter(1, 1);

  try {
    const loadingTask = pdfjsLib.getDocument(pdfPath);
    const pdf = await loadingTask.promise;

    if (renderToken !== currentRenderToken) return;

    currentPdfTotalPages = pdf.numPages || 1;
    updateStoryCounter(1, currentPdfTotalPages);

    const wrapStyle = getComputedStyle(storyViewerDocWrap);
    const horizontalPadding =
      parseFloat(wrapStyle.paddingLeft) + parseFloat(wrapStyle.paddingRight);

    const availableWidth = Math.max(280, storyViewerDocWrap.clientWidth - horizontalPadding);

    for (let pageNumber = 1; pageNumber <= currentPdfTotalPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      if (renderToken !== currentRenderToken) return;

      const unscaledViewport = page.getViewport({ scale: 1 });
      const scale = availableWidth / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const renderViewport = page.getViewport({ scale: scale * dpr });

      const pageBox = document.createElement('div');
      pageBox.className = 'story-viewer-pdf-page';
      pageBox.dataset.page = pageNumber;

      const canvas = document.createElement('canvas');
      canvas.className = 'story-viewer-canvas';

      const context = canvas.getContext('2d', { alpha: false });

      canvas.width = Math.floor(renderViewport.width);
      canvas.height = Math.floor(renderViewport.height);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      pageBox.appendChild(canvas);
      storyViewerPages.appendChild(pageBox);

      await page.render({
        canvasContext: context,
        viewport: renderViewport
      }).promise;
    }

    if (renderToken !== currentRenderToken) return;

    setStoryLoading(false);
    storyViewerDocWrap.scrollTop = 0;
    observeVisiblePages(currentPdfTotalPages);
  } catch (error) {
    if (renderToken !== currentRenderToken) return;
    setStoryLoading(true, tr('loadingPdfError'));
  }
}

function openStoryViewer(title, pdfPath) {
  if (!storyViewerModal || !storyViewerTitle || !storyViewerOpenPdf) return;

  currentStoryTitle = title;
  currentStoryPdf = pdfPath;
  currentPdfTotalPages = 1;

  storyViewerTitle.textContent = title;
  storyViewerOpenPdf.href = pdfPath;
  storyViewerOpenPdf.setAttribute('aria-label', title);

  storyViewerModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  renderPdfWithPdfJs(pdfPath);
}

function closeStoryViewer() {
  if (!storyViewerModal) return;

  currentRenderToken++;
  currentStoryPdf = '';
  currentStoryTitle = '';
  currentPdfTotalPages = 1;

  storyViewerModal.classList.remove('active');
  clearStoryPages();
  setStoryLoading(true, tr('loadingPdf'));
  resetBodyScroll();
}

storyCards.forEach(card => {
  card.addEventListener('click', () => {
    openStoryViewer(
      card.getAttribute('data-title') || 'Documento',
      card.getAttribute('data-pdf') || ''
    );
  });
});

closeStoryViewerBtn?.addEventListener('click', closeStoryViewer);

storyViewerModal?.addEventListener('click', function (e) {
  if (e.target === storyViewerModal) {
    closeStoryViewer();
  }
});

shareStoryPdfBtn?.addEventListener('click', () => {
  if (!currentStoryPdf) return;
  shareUrl(buildAbsoluteUrl(currentStoryPdf), currentStoryTitle || 'PDF');
});

function openSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.remove('active');
  resetBodyScroll();
}

openSubscribeModalBtn?.addEventListener('click', openSubscribeModal);
closeSubscribeModalBtn?.addEventListener('click', closeSubscribeModal);

subscribeModal?.addEventListener('click', function (e) {
  if (e.target === subscribeModal) {
    closeSubscribeModal();
  }
});

subscribeForm?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const dictionary = I18N[getAppLanguage()] || I18N.en;

  if (!window.emailjs) {
    alert(dictionary.emailJsMissing);
    return;
  }

  if (!subscribeSubmitBtn) {
    alert(dictionary.submitButtonMissing);
    return;
  }

  const originalText = subscribeSubmitBtn.textContent;
  subscribeSubmitBtn.disabled = true;
  subscribeSubmitBtn.textContent = dictionary.sending;

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      '#subscribeForm'
    );

    alert(dictionary.subscriptionSent);
    subscribeForm.reset();
    closeSubscribeModal();
  } catch (error) {
    console.error('Error al enviar suscripción:', error);
    alert(dictionary.subscriptionFailed);
  } finally {
    subscribeSubmitBtn.disabled = false;
    subscribeSubmitBtn.textContent = dictionary.send;
  }
});

function openPromoModal() {
  if (!promoModal) return;
  promoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromoModal() {
  if (!promoModal) return;
  promoModal.classList.remove('active');
  resetBodyScroll();
}

openPromoModalBtn?.addEventListener('click', openPromoModal);
closePromoModalBtn?.addEventListener('click', closePromoModal);

promoModal?.addEventListener('click', function (e) {
  if (e.target === promoModal) {
    closePromoModal();
  }
});

sharePageBtn?.addEventListener('click', () => {
  shareUrl(window.location.href, document.title);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopFieldSlider();
  } else {
    startFieldSlider();
  }
});

window.addEventListener('resize', () => {
  if (!isModalOpen(storyViewerModal) || !currentStoryPdf) return;

  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    renderPdfWithPdfJs(currentStoryPdf);
  }, 180);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeVideo();
    closeStoryViewer();
    closeSubscribeModal();
    closePromoModal();
  }
});

window.addEventListener('beforeunload', stopFieldSlider);

applyPageLanguage();
startFieldSlider();
