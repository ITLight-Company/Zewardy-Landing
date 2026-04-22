const fs = require('fs');

const topics = [
  { slug: 'make-money-online-app', en: 'make money online app', es: 'ganar dinero online app', pt: 'ganhar dinheiro online app', fr: 'gagner de l argent en ligne appli' },
  { slug: 'earn-cash-playing-games', en: 'earn cash playing games', es: 'ganar dinero jugando juegos', pt: 'ganhar dinheiro jogando jogos', fr: 'gagner de l argent en jouant' },
  { slug: 'best-paid-surveys-app', en: 'best paid surveys app', es: 'mejor app de encuestas pagadas', pt: 'melhor app de pesquisas pagas', fr: 'meilleure appli de sondages rémunérés' },
  { slug: 'app-to-make-money-fast', en: 'app to make money fast', es: 'app para ganar dinero rápido', pt: 'app para ganhar dinheiro rápido', fr: 'appli pour gagner de l argent rapidement' },
  { slug: 'earn-gift-cards-free', en: 'earn gift cards free', es: 'ganar tarjetas de regalo gratis', pt: 'ganhar cartões de presente grátis', fr: 'gagner des cartes cadeaux gratuites' },
  { slug: 'make-money-from-home-app', en: 'make money from home app', es: 'app para ganar dinero desde casa', pt: 'app para ganhar dinheiro em casa', fr: 'appli pour gagner de l argent à domicile' },
  { slug: 'get-paid-to-play', en: 'get paid to play', es: 'cobrar por jugar', pt: 'receber para jogar', fr: 'être payé pour jouer' },
  { slug: 'real-money-earning-games', en: 'real money earning games', es: 'juegos para ganar dinero real', pt: 'jogos para ganhar dinheiro real', fr: 'jeux pour gagner de l argent réel' },
  { slug: 'legit-cash-games', en: 'legit cash games', es: 'juegos de dinero legítimos', pt: 'jogos de dinheiro legítimos', fr: 'jeux d argent fiables' },
  { slug: 'highest-paying-rewards-app', en: 'highest paying rewards app', es: 'app de recompensas que más paga', pt: 'app de recompensas que mais paga', fr: 'appli de récompenses la plus rémunératrice' },
  { slug: 'earn-money-daily-app', en: 'earn money daily app', es: 'app para ganar dinero diario', pt: 'app para ganhar dinheiro diariamente', fr: 'appli pour gagner de l argent tous les jours' },
  { slug: 'instant-payout-cash-app', en: 'instant payout cash app', es: 'app de pago instantáneo en efectivo', pt: 'app de pagamento instantâneo', fr: 'appli à paiement instantané' },
  { slug: 'make-money-paypal-app', en: 'make money paypal app', es: 'app para ganar dinero por paypal', pt: 'app para ganhar dinheiro no paypal', fr: 'appli pour gagner de l argent paypal' },
  { slug: 'play-games-for-cash', en: 'play games for cash', es: 'jugar por dinero', pt: 'jogar por dinheiro', fr: 'jouer pour de l argent' },
  { slug: 'free-money-making-apps', en: 'free money making apps', es: 'apps gratuitas para hacer dinero', pt: 'apps grátis para fazer dinheiro', fr: 'applis gratuites pour gagner de l argent' },
  { slug: 'legitimate-money-making-apps', en: 'legitimate money making apps', es: 'apps legítimas para ganar dinero', pt: 'apps legítimos para ganhar dinheiro', fr: 'applis fiables pour gagner de l argent' },
  { slug: 'earn-crypto-playing-games', en: 'earn crypto playing games', es: 'ganar criptomonedas jugando', pt: 'ganhar criptomoedas jogando', fr: 'gagner des cryptos en jouant' },
  { slug: 'best-apps-to-make-money', en: 'best apps to make money', es: 'mejores apps para ganar dinero', pt: 'melhores apps para ganhar dinheiro', fr: 'meilleures applis pour gagner de l argent' },
  { slug: 'earn-cash-watching-videos', en: 'earn cash watching videos', es: 'ganar dinero viendo videos', pt: 'ganhar dinheiro assistindo vídeos', fr: 'gagner de l argent en regardant des vidéos' },
  { slug: 'make-extra-cash-online', en: 'make extra cash online', es: 'ganar dinero extra online', pt: 'ganhar dinheiro extra online', fr: 'gagner de l argent extra en ligne' },
  { slug: 'earn-money-nigeria-app', en: 'earn money nigeria app', es: 'ganar dinero en nigeria', pt: 'ganhar dinheiro na nigéria', fr: 'gagner de l argent au nigeria' },
  { slug: 'make-money-south-africa-app', en: 'make money south africa app', es: 'ganar dinero sudáfrica', pt: 'ganhar dinheiro áfrica do sul', fr: 'gagner de l argent afrique du sud' },
  { slug: 'ganar-dinero-colombia-app', en: 'earn money colombia app', es: 'ganar dinero colombia app', pt: 'ganhar dinheiro colômbia', fr: 'gagner de l argent colombie' },
  { slug: 'ganhar-dinheiro-brasil-app', en: 'earn money brazil app', es: 'ganar dinero brasil', pt: 'ganhar dinheiro brasil app', fr: 'gagner de l argent brésil' },
  { slug: 'make-money-philippines-app', en: 'make money philippines app', es: 'ganar dinero filipinas', pt: 'ganhar dinheiro filipinas', fr: 'gagner de l argent philippines' },
  { slug: 'aplicacion-para-ganar-dinero', en: 'app to make money', es: 'aplicacion para ganar dinero', pt: 'aplicativo para ganhar dinheiro', fr: 'application pour gagner de l argent' },
  { slug: 'como-ganar-dinero-por-internet', en: 'how to make money online', es: 'como ganar dinero por internet', pt: 'como ganhar dinheiro na internet', fr: 'comment gagner de l argent sur internet' },
  { slug: 'jogos-que-dão-dinheiro-de-verdade', en: 'games that give real money', es: 'juegos que dan dinero de verdad', pt: 'jogos que dão dinheiro de verdade', fr: 'jeux qui donnent de l argent réel' },
  { slug: 'como-ganhar-dinheiro-pelo-celular', en: 'how to earn money on phone', es: 'como ganar dinero por celular', pt: 'como ganhar dinheiro pelo celular', fr: 'comment gagner de l argent sur mobile' },
  { slug: 'argent-facile-sur-internet', en: 'easy money online', es: 'dinero facil en internet', pt: 'dinheiro fácil na internet', fr: 'argent facile sur internet' },
  { slug: 'best-survey-apps-usa', en: 'best survey apps usa', es: 'mejores apps de encuestas eeuu', pt: 'melhores apps de pesquisas eua', fr: 'meilleures applis de sondages usa' },
  { slug: 'earn-money-india-app', en: 'earn money india app', es: 'ganar dinero india', pt: 'ganhar dinheiro índia', fr: 'gagner de l argent inde' },
  { slug: 'aplicaciones-que-pagan-real', en: 'apps that pay real money', es: 'aplicaciones que pagan real', pt: 'aplicativos que pagam de verdade', fr: 'applications qui paient réellement' },
  { slug: 'gagner-de-l-argent-paypal', en: 'earn paypal money', es: 'ganar dinero paypal', pt: 'ganhar dinheiro paypal', fr: 'gagner de l argent paypal' },
  { slug: 'jogos-para-ganhar-dinheiro-no-pix', en: 'games to earn money pix', es: 'juegos para ganar dinero pix', pt: 'jogos para ganhar dinheiro no pix', fr: 'jeux pour gagner de l argent pix' }
];

const langData = {
  en: {
    suffix: '2025 | Zewardy',
    desc: 'The ultimate guide to [KW]. Find out how to earn real cash securely, fast payouts, and the best strategies to maximize your earnings.',
    cta: 'Download App Free',
    step1: 'Install Zewardy', step1D: 'Available safely on the Google Play Store for Android.',
    step2: 'Play & Complete', step2D: 'Take surveys, watch videos, and play new mobile games.',
    step3: 'Fast Cash Out', step3D: 'Redeem your points for PayPal, Gift Cards, or Crypto.',
    articleH2: 'Comprehensive Guide to [KW]',
    articleP1: 'Finding a reliable way for [KW] is essential in today digital economy. With countless apps promising huge rewards but failing to deliver, Zewardy stands out. By focusing on high payouts, user transparency, and real side hustle potential, it allows users to genuinely turn their spare time into passive income.',
    articleH3_1: 'Why Zewardy is the Best Choice',
    articleP2: 'If you want to [KW], you need an app that respects your time. Zewardy offers an optimized experience where every task, from taking quick paid surveys to trying out new legitimate cash games, translates to real points. It eliminates the frustration of unachievable minimum withdrawal limits by keeping thresholds low and payout speeds high.',
    tables: { title: 'Zewardy vs Other Reward Apps', cols: ['Feature', 'Zewardy', 'Others'], r1: ['Payout Speed', 'Instant / 24h', '7-14 Days'], r2: ['Withdrawal Limit', 'Low Threshold', 'Very High'], r3: ['Task Variety', 'Games, Surveys, Videos', 'Surveys Only'] },
    faqTitle: 'Frequently Asked Questions about [KW]',
    faqs: [
      { q: 'Is it completely free to [KW]?', a: 'Yes! Zewardy requires zero investments. It is a 100% free app where you earn real money simply by engaging with content, playing games, and sharing your opinions.' },
      { q: 'How fast can I get paid?', a: 'Once you reach the minimum threshold, payouts are processed securely and swiftly. Many users receive their money within 24 hours via PayPal, local transfers, or as Amazon Gift Cards.' },
      { q: 'Can I do this from anywhere in the world?', a: 'Zewardy is expanding globally. Whether you want to [KW] from home, during your commute, or in your free time, the app connects you with opportunities tailored to your region.' }
    ]
  },
  es: {
    suffix: '2025 | Zewardy',
    desc: 'La guía definitiva sobre [KW]. Descubre cómo generar dinero real de forma segura con retiros rápidos y estrategias comprobadas.',
    cta: 'Descargar Gratis',
    step1: 'Instala Zewardy', step1D: 'Disponible de forma segura en Google Play Store.',
    step2: 'Juega y Completa', step2D: 'Haz encuestas, mira videos y juega nuevos juegos.',
    step3: 'Retiros Rápidos', step3D: 'Cambia tus puntos por PayPal, Tarjetas de Regalo o efecivo.',
    articleH2: 'Guía Completa para [KW]',
    articleP1: 'Encontrar una manera confiable de [KW] es esencial en la economía actual. Con innumerables aplicaciones prometiendo grandes recompensas pero sin cumplir, Zewardy destaca. Al enfocarse en altos pagos, transparencia y potencial real de ingresos extra, te permite convertir tu tiempo libre en dinero real.',
    articleH3_1: '¿Por qué elegir Zewardy?',
    articleP2: 'Si buscas [KW], necesitas una app que valore tu tiempo. Zewardy ofrece encuestas pagadas, juegos legítimos y tareas fáciles con un límite de retiro bajo. Olvídate de esperar semanas por tu dinero; aquí las ganancias por internet son reales y directas a tu cuenta.',
    tables: { title: 'Zewardy vs Otras Apps', cols: ['Característica', 'Zewardy', 'Otras'], r1: ['Velocidad de Pago', 'Instantáneo / 24h', '7-14 Días'], r2: ['Límite de Retiro', 'Muy Bajo', 'Demasiado Alto'], r3: ['Variedad', 'Juegos, Encuestas, Videos', 'Solo Encuestas'] },
    faqTitle: 'Preguntas Frecuentes sobre [KW]',
    faqs: [
      { q: '¿Es totalmente gratis [KW]?', a: '¡Sí! Zewardy requiere cero inversiones. Es una aplicación 100% gratuita donde ganas dinero real simplemente por jugar y dar tu opinión.' },
      { q: '¿Qué tan rápido me pagan?', a: 'Al alcanzar el mínimo, los pagos se procesan de inmediato. La mayoría de los usuarios reciben su saldo en 24 horas por PayPal o transferencias.' },
      { q: '¿Puedo hacerlo desde mi país?', a: 'Zewardy se expande a nivel mundial. Ya sea que busques [KW] desde casa o en tu tiempo libre, te conectamos con las mejores ofertas de tu región.' }
    ]
  },
  pt: {
    suffix: '2025 | Zewardy',
    desc: 'O guia definitivo para [KW]. Descubra como ganhar dinheiro de verdade de forma segura, com saques rápidos via Pix ou PayPal.',
    cta: 'Baixar o App Grátis',
    step1: 'Instale o Zewardy', step1D: 'Disponível com segurança na Google Play Store.',
    step2: 'Jogue e Responda', step2D: 'Faça pesquisas, assista vídeos e jogue no celular.',
    step3: 'Saque Rápido', step3D: 'Troque pontos por Pix, PayPal ou vale-presentes.',
    articleH2: 'Guia Completo: [KW]',
    articleP1: 'Achar uma forma confiável de [KW] é crucial hoje em dia. Com tantos apps falsos no mercado, o Zewardy se destaca pela transparência e pagamentos altos. Transforme o tempo gasto no celular em uma renda extra sólida através de tarefas recompensadas legítimas.',
    articleH3_1: 'Por que o Zewardy é o Melhor?',
    articleP2: 'Se o seu objetivo é [KW], você precisa de um aplicativo que pague de verdade. O sistema do Zewardy oferece pequenos jogos divertidos, pesquisas remuneradas e o limite de saque mais baixo da categoria. Você não precisa esperar meses para ver a cor do seu dinheiro.',
    tables: { title: 'Zewardy vs Outros Apps', cols: ['Funcionalidade', 'Zewardy', 'Concorrentes'], r1: ['Tempo de Saque', 'Rápido (Ex: Pix 24h)', 'Semanas'], r2: ['Limite Mínimo', 'Baixo e Acessível', 'Quase inatingível'], r3: ['Tipos de Tarefas', 'Vídeos, Jogos, Pesquisas', 'Apenas Pesquisas'] },
    faqTitle: 'Perguntas Frequentes: [KW]',
    faqs: [
      { q: 'Custa alguma coisa para [KW]?', a: 'Não! O Zewardy é um aplicativo 100% gratuito. Não há taxas ocultas nem VIPs pagos. Você ganha dinheiro puramente pela sua atividade.' },
      { q: 'Como recebo meu dinheiro?', a: 'Você solicita o saque direto no app. Os métodos variam pelo país, incluindo pagamentos ultrarrápidos e carteiras digitais globais.' },
      { q: 'Funciona em qualquer celular?', a: 'Sim. Se você busca [KW], nosso app foi otimizado para rodar bem até em smartphones mais simples e conexões de internet mais lentas.' }
    ]
  },
  fr: {
    suffix: '2025 | Zewardy',
    desc: 'Le guide ultime pour [KW]. Découvrez comment gagner de largent réel en toute sécurité, des paiements rapides et les meilleures astuces.',
    cta: 'Télécharger Gratuitement',
    step1: 'Installer Zewardy', step1D: 'Disponible en toute sécurité sur Google Play.',
    step2: 'Jouez et Complétez', step2D: 'Répondez aux sondages, regardez des vidéos et jouez.',
    step3: 'Encaissez Vite', step3D: 'Échangez contre PayPal, Cartes Cadeaux ou Crypto.',
    articleH2: 'Guide Complet pour [KW]',
    articleP1: 'Trouver une méthode fiable pour [KW] est indispensable. Avec d innombrables applications promettant de l argent mais ne payant jamais, Zewardy se démarque. En ciblant des revenus passifs réels et des paiements rapides, cette application vous aide à rentabiliser votre temps libre.',
    articleH3_1: 'Pourquoi choisir Zewardy ?',
    articleP2: 'Si vous voulez [KW], vous avez besoin dune appli qui respecte votre temps. Zewardy vous récompense pour tester des jeux légitimes, donner votre avis via des sondages et plus encore, avec un seuil de paiement ultra-bas pour des retraits rapides.',
    tables: { title: 'Zewardy vs Autres Applications', cols: ['Caractéristique', 'Zewardy', 'Les Autres'], r1: ['Paiement', 'Instant / 24h', '7 à 14 jours'], r2: ['Seuil de retrait', 'Très bas', 'Élevé'], r3: ['Tâches', 'Jeux, Vidéos, Sondages', 'Sondages Uniquement'] },
    faqTitle: 'Foire Aux Questions sur [KW]',
    faqs: [
      { q: 'Est-ce vraiment 100% gratuit de [KW] ?', a: 'Oui ! Zewardy ne demande aucun investissement. L application est gratuite et vous récompense pour votre engagement.' },
      { q: 'À quelle vitesse puis-je être payé ?', a: 'Dès que le seuil minimum est atteint, les paiements sont transférés rapidement (souvent sous 24h via PayPal).' },
      { q: 'Est-ce disponible partout ?', a: 'Absolument. Si votre objectif est de [KW] depuis de nombreux pays, Zewardy propose des offres adaptées à chaque région.' }
    ]
  }
}

function capitalize(str) { return str.replace(/\b\w/g, l => l.toUpperCase()); }

const db = {};

topics.forEach(t => {
  db[t.slug] = {};
  ['en', 'es', 'pt', 'fr'].forEach(lang => {
    const kw = t[lang];
    const map = langData[lang];
    db[t.slug][lang] = {
      title: capitalize(kw) + ' ' + map.suffix,
      desc: map.desc.replace(/\[KW\]/g, kw),
      keyword: kw,
      cta: map.cta,
      step1: map.step1, step1Desc: map.step1D,
      step2: map.step2, step2Desc: map.step2D,
      step3: map.step3, step3Desc: map.step3D,
      
      articleH2: map.articleH2.replace(/\[KW\]/g, kw),
      articleP1: map.articleP1.replace(/\[KW\]/g, kw),
      articleH3_1: map.articleH3_1.replace(/\[KW\]/g, kw),
      articleP2: map.articleP2.replace(/\[KW\]/g, kw),
      
      tables: map.tables,
      faqTitle: map.faqTitle.replace(/\[KW\]/g, kw),
      faqs: map.faqs.map(f => ({ q: f.q.replace(/\[KW\]/g, kw), a: f.a.replace(/\[KW\]/g, kw) }))
    };
  });
});

fs.writeFileSync('src/app/seo-landing/seo-db.ts', 'export const SEO_CONTENT_DB: any = ' + JSON.stringify(db, null, 2) + ';\n');
console.log('Rich SEO Content generated for 100/100 Score!');
