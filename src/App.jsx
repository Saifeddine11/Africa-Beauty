import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  Scissors,
  Award,
  Clock,
  Sparkles,
  SparklesIcon,
  ScissorsIcon,
  Droplets,
  Palette,
  Crown,
  Baby,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Flower2,
  MapPin,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from './lib/utils';

const TestimonialsColumn = React.lazy(() =>
  import('./components/ui/testimonials-columns-1').then((module) => ({ default: module.TestimonialsColumn }))
);
const CpuArchitecture = React.lazy(() =>
  import('./components/ui/cpu-architecture').then((module) => ({ default: module.CpuArchitecture }))
);
const PricingSection = React.lazy(() =>
  import('./components/ui/pricing-section').then((module) => ({ default: module.PricingSection }))
);

const HERO_GALLERY_IMAGES = [
  {
    src: '/images/hero-gallery-0.webp',
    alt: 'Tresses africaines réalisées chez Africa Beauty Casablanca',
  },
  { src: '/images/hero-gallery-9.webp', alt: 'Coiffure afro salon Africa Beauty Casablanca' },
  { src: '/images/hero-gallery-apres.webp', alt: 'Résultat après coiffure afro Africa Beauty' },
  { src: '/images/hero-gallery-11.webp', alt: 'Box braids salon afro Casablanca Africa Beauty' },
  { src: '/images/hero-gallery-1.webp', alt: 'Knotless braids Africa Beauty Casablanca' },
  { src: '/images/hero-gallery-2.webp', alt: 'Tresses collées salon Africa Beauty Marrakech' },
  { src: '/images/hero-gallery-3.webp', alt: 'Extensions cheveux afro Africa Beauty Casablanca' },
  { src: '/images/hero-gallery-4.webp', alt: 'Coiffure protectrice salon afro Casablanca' },
  { src: '/images/hero-gallery-5.webp', alt: 'Soin cheveux crépus Africa Beauty Casablanca' },
  { src: '/images/hero-gallery-6.webp', alt: 'Coiffure naturelle afro Africa Beauty Marrakech' },
  { src: '/images/hero-gallery-7.webp', alt: 'Mise en beauté salon afro Casablanca' },
  { src: '/images/hero-gallery-8.webp', alt: 'Transformation coiffure afro Africa Beauty' },
];

const PILLARS = [
  {
    num: '01',
    Icon: Scissors,
    title: 'Textures afro\nmaîtrisées',
    body: 'Cheveux crépus, bouclés ou défrisés : diagnostic complet avant chaque prestation pour adapter la technique, la tension et les produits à votre fibre capillaire.',
  },
  {
    num: '02',
    Icon: Award,
    title: '10 ans\nd\'expérience',
    body: 'Une équipe formée aux techniques afro depuis 2014, présente à Casablanca et Marrakech pour tresses, extensions, soins, coloration, maquillage et onglerie.',
  },
  {
    num: '03',
    Icon: Clock,
    title: 'Ouvert\n7j/7',
    body: 'Salon ouvert tous les jours de 10h à 20h. Casablanca : 63 Bd El Hank, RDC — Bourgogne. Réservation rapide par WhatsApp.',
  },
  {
    num: '04',
    Icon: Sparkles,
    title: 'Beauté\ncomplète',
    body: 'Coiffure afro, soins visage, maquillage et onglerie en un seul rendez-vous. Plus besoin de courir entre plusieurs adresses.',
  },
];

const SERVICES = [
  {
    id: 'braids',
    title: 'Tresses & Nattes',
    desc: 'Natte collée · Torsade · Twist sans mèche · Twist avec mèche · Rasta · Tresse frontale · Décoiffe',
    price: 'À partir de 50 MAD',
    image: '/images/service-braids.webp',
    imageAlt: 'Tresses africaines et nattes réalisées chez Africa Beauty',
    Icon: ScissorsIcon,
  },
  {
    id: 'styling',
    title: 'Perruques & Tissage',
    desc: 'Pose perruque · Confection perruque · Intercaler · Raie ouvert · Frontal · Closure',
    price: 'À partir de 150 MAD',
    image: '/images/service-wigs.webp',
    imageAlt: 'Pose de perruque et coiffage lace chez Africa Beauty',
    Icon: SparklesIcon,
  },
  {
    id: 'care',
    title: 'Soins Capillaires',
    desc: 'Shampoing · Shampoing spécial · Touching · Brushing · Pointe + brushing · Laïfe sans mèche · Lissage simple · Lissage avec défrisant · Traitement profond · Resserage locks',
    price: 'À partir de 20 MAD',
    image: '/images/service-care.webp',
    imageAlt: 'Soin capillaire profond pour cheveux texturés',
    Icon: Droplets,
  },
  {
    id: 'color',
    title: 'Coloration & Coiffure',
    desc: 'Coloration racines · Teinture · Écaille sans mèche · Écaille avec mèche · Sous le soleil · Mèche frontale · Ponytaille · Coiffure cérémonie',
    price: 'À partir de 150 MAD',
    image: '/images/service-color.webp',
    imageAlt: 'Coloration et coiffure brillante Africa Beauty',
    Icon: Palette,
  },
  {
    id: 'events',
    title: 'Maquillage & Mariages',
    desc: 'Maquillage simple · Maquillage cérémonie · Pack Mariage Formule 1 · Pack Mariage Formule 2',
    price: 'À partir de 200 MAD',
    image: '/images/service-makeup.webp',
    imageAlt: 'Mise en beauté et maquillage cérémonie Africa Beauty',
    Icon: Crown,
  },
  {
    id: 'kids',
    title: 'Onglerie, Soins & Épilation',
    desc: 'Manucure · Pédicure · Gel & Capsule · Biable · Soin visage · Pose de cils · Massage · Épilation',
    price: 'À partir de 20 MAD',
    image: '/images/service-nails.webp',
    imageAlt: 'Onglerie et soins beauté Africa Beauty',
    Icon: Baby,
  },
];

const BEFORE_AFTER_ITEM = {
  service: 'Coloration cuivre & coiffage',
  hairType: 'Cheveux longs texturés',
  result: 'Couleur lumineuse, ondulations souples, finition glossy',
  beforeImage: '/images/avant.webp',
  afterImage: '/images/apres.webp',
};

const BEFORE_AFTER_COLORS = {
  badge: '#FAF6F0',
  badgeText: '#C2714A',
  priceRed: '#E8611A',
  beforeLabel: '#3A2215',
  afterLabel: '#C2714A',
};

const WHATSAPP_CASABLANCA_LINK = 'https://wa.me/212620503977';
const WHATSAPP_MARRAKECH_LINK = 'https://wa.me/212668558285';
const APPOINTMENT_LINK = '/rendez-vous';
const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps?q=Residence%20Menara%20Garden%20Magasin%20N7%20Gueliz%20Rue%20Lieutenant%20Lamure%20Marrakech&output=embed';
const GOOGLE_MAPS_LINK = 'https://share.google/zFvb1DMBSxr5OZ1rr';
const WHATSAPP_ICON_PATH = 'M12.04 2a9.87 9.87 0 0 0-8.42 15.03L2.5 21.16l4.23-1.11A9.86 9.86 0 1 0 12.04 2Zm0 1.72a8.14 8.14 0 1 1 0 16.28 8.1 8.1 0 0 1-4.14-1.14l-.3-.18-2.51.66.67-2.44-.19-.31a8.14 8.14 0 0 1 6.47-12.87Zm-3.55 4.39c-.17 0-.45.06-.69.32-.24.27-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.18 1.82 2.91 4.48 3.96 2.22.88 2.67.7 3.15.66.48-.05 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.25-.07-.11-.24-.17-.5-.3-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.46.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.49Z';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
}

function setPageSeo({ title, description, url, robots = 'index, follow, max-image-preview:large' }) {
  document.title = title;
  upsertMeta('meta[name="description"]', { name: 'description', content: description });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
  upsertCanonical(url);
}
const SOCIAL_LINKS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@africabeauty',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/africaBeauty21',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M16 3.9c3.43 0 6.12 2.55 6.12 5.98v3.23c0 .55.46.98 1 .93.8-.08 1.55-.3 2.24-.66.43-.22.96-.1 1.25.29.34.45.22 1.1-.26 1.4-.8.5-1.71.88-2.64 1.22-.79.29-1.48.63-1.79 1.21-.25.47-.08 1.05.38 1.32.91.53 1.9.9 2.95 1.09.55.1.85.7.56 1.18-.27.46-.85.68-1.53.79-1.01.17-1.55.59-2.15 1.06-.72.56-1.53 1.2-3.14 1.2-.92 0-1.72-.3-2.36-.54-.25-.1-.45-.17-.63-.17s-.38.07-.63.17c-.64.24-1.44.54-2.36.54-1.61 0-2.42-.64-3.14-1.2-.6-.47-1.14-.89-2.15-1.06-.68-.11-1.26-.33-1.53-.79-.29-.48.01-1.08.56-1.18 1.05-.19 2.04-.56 2.95-1.09.46-.27.63-.85.38-1.32-.31-.58-1-.92-1.79-1.21-.93-.34-1.84-.72-2.64-1.22-.48-.3-.6-.95-.26-1.4.29-.39.82-.51 1.25-.29.69.36 1.44.58 2.24.66.54.05 1-.38 1-.93V9.88C9.88 6.45 12.57 3.9 16 3.9Z"
          stroke="currentColor"
          strokeWidth="2.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=Africabeauty%20thiam',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.68 4.53-4.68 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.88v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aesthetics_and_beauty_africa/',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
];

const RITUAL_STEPS = [
  {
    label: 'Diagnostic',
    title: 'Comprendre votre cheveu, votre style, votre vie',
    body: 'On commence par votre texture, votre routine, votre sensibilité du cuir chevelu et le résultat que vous voulez obtenir. Pas de prestation sans écoute.',
  },
  {
    label: 'Préparation',
    title: 'Un cheveu propre et protégé',
    body: 'Démêlage en douceur, hydratation ciblée et protection thermique ou mécanique avant toute tresse, pose d\'extension ou coloration.',
  },
  {
    label: 'Coiffage',
    title: 'Geste précis, tension contrôlée',
    body: 'Chaque séparation est nette, chaque tension mesurée pour une finition propre — sans tiraillement ni douleur sur les racines.',
  },
  {
    label: 'Conseil',
    title: 'Repartir avec les bons gestes',
    body: 'Foulard de nuit, rythme d\'hydratation, durée recommandée et soins à prévoir : vous avez toutes les clés pour faire durer le résultat.',
  },
];

const TESTIMONIALS = [
  {
    text: 'Mes knotless braids sont impeccables. Les séparations sont parfaites, la tension vraiment douce — ça tient depuis 5 semaines sans aucun problème.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Amina Diallo',
    role: 'Knotless braids',
  },
  {
    text: 'Mes cheveux type 4C étaient cassants et sans éclat. Après le soin protéiné, ils sont plus forts, plus souples et faciles à démêler. Vraiment bluffant.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Sarah Benali',
    role: 'Soin capillaire profond',
  },
  {
    text: 'Pour mon mariage j\'avais besoin de quelque chose d\'élégant et qui tienne. La coiffure était parfaite toute la journée et les nuits qui ont suivi. Merci infiniment.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Mariam Kouassi',
    role: 'Coiffure mariage',
  },
  {
    text: 'Box braids très légères et parfaitement régulières. On voit la maîtrise du geste — chaque tresse est identique à la précédente. Du vrai travail d\'experte.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Nadia El Fassi',
    role: 'Box braids',
  },
  {
    text: 'Elle comprend vraiment les cheveux afro. Elle m\'a expliqué pourquoi mes cheveux se cassaient et ce qu\'il fallait faire. Du vrai conseil, pas juste une prestation.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Fatou Ndiaye',
    role: 'Cheveux naturels',
  },
  {
    text: 'La coloration est exactement comme ma photo d\'inspiration. Lumineux, naturel, et mes cheveux n\'ont pas souffert. Je reviendrai sans hésiter.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Imane Aït Benhaddou',
    role: 'Coloration & mèches',
  },
  {
    text: 'Ma fille de 7 ans est ressortie souriante, les tresses bien faites et pas une larme. C\'est rare pour elle. Accueil doux et patient, on revient bientôt.',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Khadija Sow',
    role: 'Coiffure enfant',
  },
  {
    text: 'J\'avais très peur pour mes racines après une mauvaise expérience ailleurs. Ici les twists sont confortables depuis le premier jour. Aucune douleur, résultat nickel.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Lina Traoré',
    role: 'Twists',
  },
  {
    text: 'Ponctuelle, à l\'écoute et très minutieuse. Ma coupe a redonné une forme parfaite à mes boucles 3C. Je recommande à toutes mes amies.',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    name: 'Sofia Bah',
    role: 'Coupe cheveux bouclés',
  },
];

const FIRST_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(0, 3);
const SECOND_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(3, 6);
const THIRD_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(6, 9);

const SEO_TOPICS = [
  {
    label: 'Tresses',
    title: 'Knotless braids, box braids et coiffures protectrices',
    body: 'Knotless braids, box braids, vanilles, twists et tresses collées sont réalisées avec des séparations nettes et une tension ajustée pour protéger les racines.',
  },
  {
    label: 'Soins',
    title: 'Soins pour cheveux afro, bouclés et texturés',
    body: 'Chaque soin est choisi selon la porosité, la densité, la casse éventuelle et l\'état du cuir chevelu pour aider les cheveux à retrouver souplesse et tenue.',
  },
  {
    label: 'Clientes',
    title: 'Pour qui sont nos prestations ?',
    body: 'Les prestations s\'adressent aux femmes, enfants et clientes de passage à Marrakech qui portent des cheveux afro, bouclés, frisés, crépus ou texturés.',
  },
];

const SEO_KEYWORDS = [
  'salon de coiffure afro Marrakech',
  'coiffeur afro Marrakech',
  'tresse africaine Marrakech',
  'tresses Marrakech',
  'knotless braids Marrakech',
  'box braids Marrakech',
  'soin cheveux afro Marrakech',
  'coiffure africaine Marrakech',
];

const SEO_FEATURES = [
  {
    Icon: ScissorsIcon,
    label: 'Expertise afro',
    title: 'Une expertise adaptée à votre texture',
    body: 'Diagnostic capillaire inclus, conseils honnêtes et gestes adaptés aux textures afro, bouclées, frisées et crépues.',
    tone: 'dark',
  },
  {
    Icon: MapPin,
    label: 'Marrakech',
    title: 'Une adresse à Guéliz',
    body: 'Le salon vous accueille à la Résidence Menara Garden Magasin N°7, Guéliz, Rue Lieutenant Lamure.',
    tone: 'light',
  },
  {
    Icon: SparklesIcon,
    label: 'Rendez-vous',
    title: 'Réservation simple par WhatsApp',
    body: 'Réservation rapide par WhatsApp. Envoyez votre service souhaité, une photo d\'inspiration et vos disponibilités.',
    tone: 'accent',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Où faire des tresses africaines à Marrakech ?',
    a: 'Africa Beauty accueille les clientes à Marrakech pour les tresses africaines, braids, twists et coiffures protectrices. Chaque prestation commence par un échange sur votre texture, votre longueur et le résultat souhaité.',
  },
  {
    q: 'Africa Beauty propose-t-il des knotless braids à Marrakech ?',
    a: 'Oui. Le salon réalise des knotless braids à Marrakech avec une attention particulière à la tension, aux séparations et au confort des racines pour un rendu naturel et durable.',
  },
  {
    q: 'Faites-vous des soins pour cheveux afro et texturés ?',
    a: 'Oui. Africa Beauty propose des soins adaptés aux cheveux afro, bouclés, frisés, crépus et texturés : hydratation, soin profond, soin protéiné et conseils de routine selon l\'état du cheveu.',
  },
  {
    q: 'Comment prendre rendez-vous chez Africa Beauty ?',
    a: 'Le plus simple est de passer par le bouton de rendez-vous ou WhatsApp. Indiquez le service souhaité, votre type de cheveux, une photo de référence si vous en avez une et vos disponibilités.',
  },
  {
    q: 'Le salon convient-il aux cheveux bouclés, frisés et crépus ?',
    a: 'Oui. Les prestations sont pensées pour les textures bouclées, frisées, crépues et afro, avec un diagnostic avant la coiffure ou le soin pour choisir la technique la plus adaptée.',
  },
  {
    q: 'Combien de temps dure une prestation de tresses ou braids ?',
    a: 'La durée dépend de la longueur, de la densité, du style choisi et de la taille des tresses. Pour une estimation réaliste, envoyez une photo de référence et quelques informations sur vos cheveux avant le rendez-vous.',
  },
];

const AUTO_PLAY_INTERVAL = 3200;

const sectionReveal = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const reducedSectionReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const reducedStaggerReveal = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

const reducedItemReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

function wrap(min, max, value) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('faq-accordion-item', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="faq-accordion-header">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn('faq-accordion-trigger', className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        width={18}
        height={18}
        className="faq-accordion-icon"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="faq-accordion-content"
    {...props}
  >
    <div className={cn('faq-accordion-body', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const DOT_SERVICES = [
  'Tresses Africaines', 'Extensions & Lace', 'Soins Capillaires',
  'Coloration', 'Maquillage', 'Onglerie',
];

function DotBrandSection() {
  const bgRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
  const [isVideoActive, setIsVideoActive] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const el = bgRef.current;
    if (!el || prefersReducedMotion) return;
    const restart = () => {
      el.classList.remove('is-animating');
      void el.offsetWidth;
      el.classList.add('is-animating');
    };
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) restart(); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    restart();
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNearVideo = entry.isIntersecting;
        if (isNearVideo) {
          setShouldLoadVideo(true);
        }
        setIsVideoActive(isNearVideo);
      },
      { rootMargin: '520px 0px', threshold: 0.01 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    if (prefersReducedMotion || !shouldLoadVideo) {
      video.pause();
      return undefined;
    }

    const playVideo = () => {
      if (!isVideoActive || document.visibilityState === 'hidden') return;
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => {});
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      } else {
        video.pause();
      }
    };

    if (isVideoActive) {
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('canplay', playVideo, { once: true });
        video.load();
      }
    } else {
      video.pause();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      video.removeEventListener('canplay', playVideo);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVideoActive, prefersReducedMotion, shouldLoadVideo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40, filter: prefersReducedMotion ? "none" : "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="dot-brand-section">
      <p className="sr-only">
        Vidéo du salon Africa Beauty à Casablanca et Marrakech, salon afro spécialisé en coiffure, soins capillaires, maquillage et beauté.
      </p>
      <motion.video
        ref={videoRef}
        className="dot-brand-video"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload={shouldLoadVideo ? 'auto' : 'none'}
        src={shouldLoadVideo ? '/videos/salon-video-optimized.mp4' : undefined}
        poster="/images/accueil-signature.webp"
        title="Vidéo du salon Africa Beauty"
        aria-label="Vidéo du salon Africa Beauty à Casablanca et Marrakech"
        disablePictureInPicture
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'Africa Beauty - salon afro et beauté',
            description:
              'Vidéo du salon Africa Beauty à Casablanca et Marrakech, spécialisé en coiffure afro, tresses africaines, extensions, soins capillaires, maquillage et beauté.',
            thumbnailUrl: 'https://salonafricabeauty.com/images/accueil-signature.webp',
            contentUrl: 'https://salonafricabeauty.com/videos/salon-video-optimized.mp4',
            uploadDate: '2026-04-29',
          }),
        }}
      />
      <div className="dot-brand-overlay" />
      <motion.div
        className="dot-brand-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="dot-brand-eyebrow" variants={itemVariants}>
          Casablanca · Marrakech
        </motion.p>
        <motion.h2 className="dot-brand-title" variants={itemVariants}>
          Africa<br />Beauty
        </motion.h2>
        <motion.p className="dot-brand-subtitle" variants={itemVariants}>
          L'éclat africain · Salon de Coiffure & Beauté
        </motion.p>
        <motion.div className="dot-brand-divider" variants={itemVariants} />
        <motion.div className="dot-brand-chips" variants={itemVariants}>
          {DOT_SERVICES.map((s) => (
            <span key={s} className="dot-brand-chip">{s}</span>
          ))}
        </motion.div>
        <motion.a
          href={APPOINTMENT_LINK}
          className="dot-brand-cta"
          variants={itemVariants}
        >
          Réserver maintenant
          <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}

function ServicesCarousel() {
  const [step, setStep] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const sectionRef = React.useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const currentIndex = ((step % SERVICES.length) + SERVICES.length) % SERVICES.length;

  React.useEffect(() => {
    if (prefersReducedMotion || isPaused || !isInView) return undefined;
    const timer = setInterval(() => setStep((prev) => prev + 1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isInView, isPaused, prefersReducedMotion]);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '240px 0px', threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChipClick = (index) => {
    const forward = (index - currentIndex + SERVICES.length) % SERVICES.length;
    const backward = forward - SERVICES.length;
    const shortest = Math.abs(forward) <= Math.abs(backward) ? forward : backward;
    if (shortest !== 0) setStep((prev) => prev + shortest);
  };

  const goPrev = () => setStep((prev) => prev - 1);
  const goNext = () => setStep((prev) => prev + 1);

  const getCardStatus = (index) => {
    const diff = index - currentIndex;
    const len = SERVICES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1) return 'prev';
    if (normalizedDiff === 1) return 'next';
    return 'hidden';
  };

  return (
    <motion.section
      ref={sectionRef}
      className="srv-section"
      id="services"
      variants={prefersReducedMotion ? reducedSectionReveal : sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.header className="srv-header" variants={prefersReducedMotion ? reducedStaggerReveal : staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.span className="srv-eyebrow" variants={prefersReducedMotion ? reducedItemReveal : itemReveal}>Services & tarifs</motion.span>
        <motion.h2 className="srv-title" variants={prefersReducedMotion ? reducedItemReveal : itemReveal}>
          Nos prestations de coiffure afro à Marrakech
        </motion.h2>
        <motion.p className="srv-subtitle" variants={prefersReducedMotion ? reducedItemReveal : itemReveal}>
          Tresses, braids, soins capillaires, coiffures protectrices et mise en beauté : choisissez votre service ci-dessous. Les tarifs affichés sont des points de départ, ajustés selon la longueur, la densité et le temps nécessaire.
        </motion.p>
        <motion.div
          className="srv-header-actions srv-header-actions-desktop"
          variants={prefersReducedMotion ? reducedItemReveal : itemReveal}
        >
          <button type="button" className="srv-nav-btn" onClick={goPrev} aria-label="Service précédent">
            <ChevronLeft size={16} />
          </button>
          <button type="button" className="srv-nav-btn srv-nav-btn-primary" onClick={goNext} aria-label="Service suivant">
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </motion.header>

      <div className="srv-carousel">
        <div className="srv-rail" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="srv-rail-fade srv-rail-fade-top" />
          <div className="srv-rail-fade srv-rail-fade-bottom" />
          <div className="srv-rail-items">
            {SERVICES.map((service, index) => {
              const distance = wrap(-(SERVICES.length / 2), SERVICES.length / 2, index - currentIndex);
              const isRailVisible = Math.abs(distance) <= 2;
              const isActive = index === currentIndex;
              const Icon = service.Icon;
              return (
                <button
                  key={service.id}
                  className={`${isActive ? 'srv-chip is-active' : 'srv-chip'}${isRailVisible ? '' : ' is-rail-hidden'}`}
                  style={{
                    transform: `translateY(${distance * 58}px)`,
                    opacity: isRailVisible ? 1 - Math.abs(distance) * 0.22 : 0,
                    pointerEvents: isRailVisible ? 'auto' : 'none',
                  }}
                  onClick={() => handleChipClick(index)}
                >
                  <Icon size={16} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="srv-header-actions srv-carousel-actions">
          <button type="button" className="srv-nav-btn" onClick={goPrev} aria-label="Service précédent">
            <ChevronLeft size={16} />
          </button>
          <button type="button" className="srv-nav-btn srv-nav-btn-primary" onClick={goNext} aria-label="Service suivant">
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="srv-stage" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {SERVICES.map((service, index) => {
            const status = getCardStatus(index);
            return (
              <article key={service.id} className={`srv-showcard is-${status}`}>
                <img
                  className="srv-showcard-image"
                  src={service.image}
                  alt={service.imageAlt}
                  loading={status === 'active' ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="srv-showcard-overlay">
                  <p className="srv-showcard-kicker">{service.title}</p>
                  <p className="srv-showcard-desc">{service.desc}</p>
                  <p className="srv-showcard-price">{service.price}</p>
                  <a className="srv-showcard-cta" href={APPOINTMENT_LINK}>
                    Réserver ce service
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="srv-dots" aria-hidden="true">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            type="button"
            className={index === currentIndex ? 'srv-dot is-active' : 'srv-dot'}
            onClick={() => handleChipClick(index)}
          />
        ))}
      </div>
    </motion.section>
  );
}

function ImageColumn({ images, scrollUp, duration, priority = false }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="ig-col">
      <div
        className={scrollUp ? 'ig-inner ig-up' : 'ig-inner ig-down'}
        style={{ animationDuration: prefersReducedMotion ? '1ms' : duration }}
      >
        {[...images, ...images].map((image, i) => (
          <div key={i} className="ig-img-wrap">
            <img
              className="ig-img"
              src={image.src}
              alt={image.alt}
              loading={priority && i === 0 ? 'eager' : 'lazy'}
              fetchPriority={priority && i === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CpuSection() {
  return (
    <motion.section
      className="cpu-section"
      id="expertise"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="cpu-head">
        <span className="cpu-eyebrow">Notre méthode</span>
        <h2 className="cpu-title">Une méthode pensée pour votre texture.</h2>
        <p className="cpu-desc">
          Du diagnostic initial à la finition, chaque étape est pensée pour respecter votre texture, préserver vos racines et vous offrir un résultat qui dure vraiment.
        </p>
      </div>

      <div className="cpu-visual" aria-hidden="true">
        <React.Suspense fallback={null}>
          <CpuArchitecture className="cpu-svg" />
        </React.Suspense>
      </div>
    </motion.section>
  );
}

function BeforeAfterSection({
  badge = 'Transformation réelle',
  heading = 'Une couleur\nqui révèle le visage',
  priceLabel = 'Service :',
  priceValue = BEFORE_AFTER_ITEM.service,
  description = "Glissez le curseur pour voir la transformation. D'une base foncée à un cuivré chaud, avec des longueurs ondulées, brillantes et mises en forme pour encadrer le visage.",
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  beforeImage = BEFORE_AFTER_ITEM.beforeImage,
  afterImage = BEFORE_AFTER_ITEM.afterImage,
  initialSliderPosition = 50,
}) {
  const colors = BEFORE_AFTER_COLORS;
  const [sliderPosition, setSliderPosition] = React.useState(initialSliderPosition);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef(null);
  const touchStartRef = React.useRef({ x: 0, y: 0, locked: false });

  const handleMove = React.useCallback(
    (clientX) => {
      if (!containerRef.current || !isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (event) => handleMove(event.clientX);

  const handleTouchStart = React.useCallback((event) => {
    const t = event.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY, locked: false };
  }, []);

  const handleTouchMove = React.useCallback((event) => {
    const t = event.touches[0];
    const ref = touchStartRef.current;
    const dx = Math.abs(t.clientX - ref.x);
    const dy = Math.abs(t.clientY - ref.y);
    if (!ref.locked && dy > dx) return; // scroll vertical — ne pas capturer
    ref.locked = true;
    setIsDragging(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = t.clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  const handleTouchEnd = React.useCallback(() => {
    setIsDragging(false);
    touchStartRef.current.locked = false;
  }, []);

  return (
    <section className="ba-exact-section" id="avant-apres">
      <div className="ba-exact-container">
        <div className="ba-exact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ba-exact-copy"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ backgroundColor: colors.badge, color: colors.badgeText }}
              className="ba-exact-badge"
            >
              {badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="ba-exact-heading"
            >
              {heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: colors.priceRed }}
              className="ba-exact-price"
            >
              {priceLabel} {priceValue}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="ba-exact-description"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ba-exact-visual"
          >
            <div
              ref={containerRef}
              className="ba-exact-slider"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
            >
              <div
                className="ba-exact-layer"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="ba-exact-image-wrap">
                  <img
                    src={beforeImage}
                    alt="Avant : cheveux avant la prestation Africa Beauty"
                    className="ba-exact-image"
                    style={{ filter: 'saturate(0.7) contrast(0.9) brightness(0.95)' }}
                    draggable={false}
                  />
                </div>
              </div>

              <div
                className="ba-exact-layer"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="ba-exact-image-wrap">
                  <img
                    src={afterImage}
                    alt="Après : résultat coloration cuivrée Africa Beauty Casablanca"
                    className="ba-exact-image"
                    style={{ filter: 'saturate(1.2) contrast(1.05) brightness(1.02)' }}
                    draggable={false}
                  />
                </div>
              </div>

              <div
                className="ba-exact-label ba-exact-label-before"
                style={{ backgroundColor: `${colors.beforeLabel}E6` }}
              >
                {beforeLabel}
              </div>

              <div
                className="ba-exact-label ba-exact-label-after"
                style={{ backgroundColor: colors.afterLabel }}
              >
                {afterLabel}
              </div>

              <div
                className="ba-exact-line"
                style={{ left: `${sliderPosition}%` }}
              />

              <div
                className="ba-exact-handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <MoveHorizontal size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RitualSection() {
  return (
    <motion.section
      className="ritual-section"
      id="rituel"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="ritual-head">
        <span className="ritual-eyebrow">Votre rendez-vous</span>
        <h2 className="ritual-title">De l'accueil à la finition, une méthode pensée pour vous.</h2>
        <p className="ritual-subtitle">
          Les plus beaux résultats viennent d'une méthode, pas d'une improvisation. Voici comment chaque rendez-vous chez Africa Beauty se déroule.
        </p>
      </div>

      <motion.div
        className="ritual-grid"
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {RITUAL_STEPS.map((step, index) => (
          <motion.article className="ritual-card" key={step.label} variants={itemReveal}>
            <span className="ritual-index">{String(index + 1).padStart(2, '0')}</span>
            <p className="ritual-label">{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function SocialProofSection() {
  return (
    <section
      className="proof-columns-section"
      id="avis"
    >
      <div className="proof-columns-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="proof-columns-head"
        >
          <div className="proof-columns-badge">Avis vérifiés</div>

          <h2 className="proof-title">
            Ce que nos clientes racontent
          </h2>
          <p>
            Des retours authentiques après une coiffure, un soin ou une transformation chez Africa Beauty à Casablanca et Marrakech.
          </p>
        </motion.div>

        <React.Suspense fallback={null}>
          <div className="proof-columns-mask">
            <TestimonialsColumn testimonials={FIRST_TESTIMONIAL_COLUMN} duration={15} />
            <TestimonialsColumn
              testimonials={SECOND_TESTIMONIAL_COLUMN}
              className="testimonial-column-md"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={THIRD_TESTIMONIAL_COLUMN}
              className="testimonial-column-lg"
              duration={17}
            />
          </div>
        </React.Suspense>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <motion.section
      className="seo-section"
      id="salon-afro-casablanca"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="seo-shell">
        <motion.div
          className="seo-head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="seo-eyebrow">Coiffure afro Marrakech</span>
          <h2 className="seo-title">Tresses africaines et braids à Marrakech</h2>
          <p className="seo-intro">
            Africa Beauty accompagne les clientes à Marrakech pour les tresses africaines, braids, knotless braids, box braids et soins des cheveux afro, bouclés, frisés et texturés.
          </p>
        </motion.div>

        <div className="seo-layout">
          <motion.div
            className="seo-copy"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2>Pourquoi choisir Africa Beauty à Marrakech ?</h2>
            <p>
              Trouver une vraie experte en cheveux afro ne se résume pas à une adresse sur Google. C'est trouver quelqu'un qui connaît les textures, adapte la tension selon la densité, et prend le temps nécessaire sans raccourcis.
            </p>
            <p>
              À Marrakech, le salon réunit coiffure afro, soins capillaires et mise en beauté dans un cadre professionnel. L'objectif reste simple : un résultat net, confortable et fidèle à votre style.
            </p>
            <div className="seo-keywords" aria-label="Services recherchés">
              {SEO_KEYWORDS.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <a className="seo-cta" href={APPOINTMENT_LINK}>
              Prendre rendez-vous
            </a>
          </motion.div>

          <motion.div
            className="seo-topic-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.08 },
              },
            }}
          >
            {SEO_TOPICS.map((topic, index) => (
              <motion.article
                className="seo-topic"
                key={topic.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <span className="seo-topic-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{topic.label}</p>
                  <h2>{topic.title}</h2>
                  <span>{topic.body}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="seo-feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {SEO_FEATURES.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.article
                className={`seo-feature seo-feature-${item.tone}`}
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 44, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
              >
                <div className="seo-feature-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={21} />
                </div>
                <p>{item.label}</p>
                <h2>{item.title}</h2>
                <span>{item.body}</span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function FaqSection() {
  return (
    <motion.section
      className="faq-section"
      id="faq"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="faq-head">
        <span className="faq-eyebrow">Questions fréquentes</span>
        <h2 className="faq-title">Questions fréquentes</h2>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />
      <Accordion className="faq-accordion" type="single" defaultValue="item-0" collapsible>
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={item.q}>
            <AccordionTrigger>
              <span className="faq-accordion-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-accordion-question">{item.q}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}

function AppointmentPage() {
  React.useEffect(() => {
    setPageSeo({
      title: 'Prendre rendez-vous · Africa Beauty',
      description: 'Prenez rendez-vous chez Africa Beauty à Casablanca ou Marrakech via WhatsApp.',
      url: 'https://salonafricabeauty.com/rendez-vous',
    });
  }, []);

  const whatsappOptions = [
    {
      city: 'Casablanca',
      phone: '+212 620 50 39 77',
      address: 'Sur rendez-vous',
      href: `${WHATSAPP_CASABLANCA_LINK}?text=${encodeURIComponent(
        'Bonjour Africa Beauty Casablanca, je souhaite prendre un rendez-vous beauté. Pouvez-vous me confirmer vos disponibilités ?'
      )}`,
    },
    {
      city: 'Marrakech',
      phone: '+212 668-558285',
      address: 'Résidence Menara Garden Magasin N°7, Guéliz, Rue Lieutenant Lamure',
      href: `${WHATSAPP_MARRAKECH_LINK}?text=${encodeURIComponent(
        'Bonjour Africa Beauty Marrakech, je souhaite prendre un rendez-vous beauté. Pouvez-vous me confirmer vos disponibilités ?'
      )}`,
    },
  ];

  return (
    <main className="ab-rdv-page">
      <section className="ab-rdv-shell" aria-labelledby="rdv-title">
        <div className="ab-rdv-hero">
          <a className="ab-rdv-logo" href="/">Africa Beauty</a>
          <div className="ab-rdv-hero-copy">
            <p className="ab-rdv-eyebrow">Rendez-vous beauté</p>
            <h1 id="rdv-title">Choisissez votre salon</h1>
            <p>
              Sélectionnez Casablanca ou Marrakech, puis contactez-nous sur WhatsApp pour confirmer le service, le créneau et les disponibilités.
            </p>
          </div>
          <div className="ab-rdv-service-row" aria-label="Services principaux">
            <span>Tresses</span>
            <span>Perruques</span>
            <span>Soins</span>
            <span>Coloration</span>
            <span>Maquillage</span>
            <span>Onglerie</span>
          </div>
        </div>

        <div className="ab-rdv-panel">
          <p className="ab-rdv-panel-kicker">Réponse rapide sur WhatsApp</p>
          <div className="ab-rdv-options">
            {whatsappOptions.map((option) => (
              <article className="ab-rdv-option" key={option.city}>
                <div>
                  <span className="ab-rdv-city">{option.city}</span>
                  <p>{option.address}</p>
                  <a className="ab-rdv-phone" href={`tel:${option.phone.replace(/[^\d+]/g, '')}`}>{option.phone}</a>
                </div>
                <a
                  className="ab-rdv-whatsapp"
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Prendre rendez-vous sur WhatsApp à ${option.city}`}
                >
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path fill="currentColor" d={WHATSAPP_ICON_PATH} />
                    </svg>
                  </span>
                  Prendre rendez-vous
                </a>
              </article>
            ))}
          </div>

          <div className="ab-rdv-contact">
            <h2>Contacts & adresses</h2>
            <p><strong>Marrakech</strong> Résidence Menara Garden Magasin N°7, Guéliz, Rue Lieutenant Lamure</p>
            <p><strong>Casablanca</strong> Sur rendez-vous</p>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer">Ouvrir l’adresse Marrakech sur Google Maps</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormulairePage() {
  React.useEffect(() => {
    setPageSeo({
      title: 'Réservez votre rendez-vous beauté à Marrakech · Africa Beauty',
      description: 'Contactez Africa Beauty Marrakech sur WhatsApp pour choisir votre service beauté et confirmer votre rendez-vous rapidement.',
      url: 'https://salonafricabeauty.com/formulaire',
    });
  }, []);

  const marrakechWhatsappLink = `${WHATSAPP_MARRAKECH_LINK}?text=${encodeURIComponent(
    'Bonjour Africa Beauty Marrakech, je souhaite prendre un rendez-vous beauté. Pouvez-vous me confirmer vos disponibilités ?'
  )}`;

  return (
    <main className="ab-form-page">
      <section className="ab-form-card" aria-labelledby="formulaire-title">
        <div className="ab-form-visual" aria-hidden="true">
          <div className="ab-form-brand">Africa Beauty</div>
        </div>

        <div className="ab-form-content">
          <p className="ab-form-eyebrow">Marrakech</p>
          <h1 id="formulaire-title" className="ab-form-title">Réservez votre rendez-vous beauté</h1>
          <p className="ab-form-subtitle">
            Contactez-nous directement sur WhatsApp pour choisir votre service, vérifier les disponibilités et confirmer votre rendez-vous rapidement.
          </p>

          <ul className="ab-form-facts" aria-label="Informations utiles">
            <li>Ouvert 7j/7</li>
            <li>10h à 20h</li>
            <li>WhatsApp direct</li>
          </ul>

          <div className="ab-form-services" aria-label="Services principaux">
            <span>Tresses & Nattes</span>
            <span>Perruques & Tissage</span>
            <span>Soins Capillaires</span>
            <span>Coloration & Coiffure</span>
            <span>Maquillage & Mariages</span>
            <span>Onglerie</span>
          </div>

          <a
            className="ab-form-whatsapp ab-form-whatsapp-single"
            href={marrakechWhatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Prendre rendez-vous sur WhatsApp à Marrakech"
          >
            <span className="ab-form-wa-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path fill="currentColor" d={WHATSAPP_ICON_PATH} />
              </svg>
            </span>
            <span className="ab-form-wa-copy">
              <strong>Marrakech</strong>
              <small>+212 668-558285</small>
            </span>
          </a>

          <p className="ab-form-hint">Réponse rapide sur WhatsApp pendant les horaires d’ouverture.</p>
          <p className="ab-form-address">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer">
              Marrakech : Résidence Menara Garden Magasin N°7, Guéliz.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

function ErrorPage({ status = '403' }) {
  React.useEffect(() => {
    setPageSeo({
      title: `${status} · Africa Beauty`,
      description: 'Page non accessible sur le site Africa Beauty.',
      url: `https://salonafricabeauty.com/${status}`,
      robots: 'noindex, follow',
    });
  }, [status]);

  const title = status === '404' ? 'Cette page n’existe pas.' : 'Cette page n’est pas accessible.';
  const copy = status === '404'
    ? 'Le lien demandé ne correspond à aucune page active du site Africa Beauty.'
    : 'Cette adresse n’est pas disponible. Vous pouvez revenir à l’accueil ou passer par la page de rendez-vous.';

  return (
    <main className="ab-error-page">
      <section className="ab-error-card" aria-labelledby="error-title">
        <div className="ab-error-visual" aria-hidden="true">
          <a className="ab-error-brand" href="/">Africa Beauty</a>
          <div>
            <p className="ab-error-eyebrow">Accès réservé</p>
            <span className="ab-error-code">{status}</span>
          </div>
        </div>
        <div className="ab-error-content">
          <span className="ab-error-status">{status === '404' ? 'Page introuvable' : 'Forbidden'}</span>
          <h1 id="error-title">{title}</h1>
          <p>{copy}</p>
          <div className="ab-error-actions">
            <a className="ab-error-btn" href="/">Retour à l’accueil</a>
            <a className="ab-error-btn is-soft" href={APPOINTMENT_LINK}>Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') : '';
  if (pathname === '/rendez-vous') {
    return <AppointmentPage />;
  }

  if (pathname === '/formulaire') {
    return <FormulairePage />;
  }

  if (pathname && pathname !== '/') {
    return <ErrorPage status="403" />;
  }

  const [isHeaderPinned, setIsHeaderPinned] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const heroRef = React.useRef(null);
  const headerBarRef = React.useRef(null);
  const pendingMobileNavTargetRef = React.useRef(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return undefined;

    let frameId = 0;
    let lastEvent = null;

    const syncPointer = (event) => {
      lastEvent = event;
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        if (!lastEvent) return;

        const x = lastEvent.clientX;
        const y = lastEvent.clientY;

        document.querySelectorAll('[data-glow-card]').forEach((card) => {
          card.style.setProperty('--x', x.toFixed(2));
          card.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
          card.style.setProperty('--y', y.toFixed(2));
          card.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        });
      });
    };

    document.addEventListener('pointermove', syncPointer);
    return () => {
      document.removeEventListener('pointermove', syncPointer);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  React.useEffect(() => {
    let frameId = 0;
    let lastPinned = null;

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const nextPinned = window.scrollY > 8;
        if (nextPinned !== lastPinned) {
          lastPinned = nextPinned;
          setIsHeaderPinned(nextPinned);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  React.useEffect(() => {
    const { body, documentElement } = document;
    if (!isMobileMenuOpen) return undefined;

    const scrollY = window.scrollY;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.classList.add('is-menu-locked');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    return () => {
      body.classList.remove('is-menu-locked');
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);

      const targetId = pendingMobileNavTargetRef.current;
      if (targetId) {
        pendingMobileNavTargetRef.current = null;
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        });
      }
    };
  }, [isMobileMenuOpen, prefersReducedMotion]);

  const handleMobileNavClick = React.useCallback((event, targetId) => {
    event.preventDefault();
    pendingMobileNavTargetRef.current = targetId;
    setIsMobileMenuOpen(false);
  }, []);

  const headerClassName = cn(
    'site-mark',
    isHeaderPinned && 'is-pinned'
  );

  return (
    <>
      <header className={headerClassName} aria-label="Africa Beauty">
        <div ref={headerBarRef} className="site-mark-bar">
          <nav className="site-nav-left" aria-label="Navigation principale">
            <a className="is-active" href="#top">Accueil</a>
            <a href="#promesse">À propos</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="site-mark-link" href="#top" aria-label="Africa Beauty accueil">
            <span className="site-header-brand" style={{ textTransform: 'uppercase' }}>Africa Beauty</span>
          </a>

          <div className="site-right-section">
            <a
              className="site-appointment"
              href={APPOINTMENT_LINK}
            >
              <span className="site-appointment-icon" aria-hidden>
                <ArrowRight size={16} strokeWidth={2} />
              </span>
              <span>Prendre RDV</span>
            </a>

            <button
              className="site-menu-toggle md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="site-mobile-menu md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="site-mobile-nav" aria-label="Navigation mobile">
              <a
                className="site-mobile-nav-link"
                href="#top"
                onClick={(event) => handleMobileNavClick(event, 'top')}
              >
                Accueil
              </a>
              <a
                className="site-mobile-nav-link"
                href="#promesse"
                onClick={(event) => handleMobileNavClick(event, 'promesse')}
              >
                À propos
              </a>
              <a
                className="site-mobile-nav-link"
                href="#services"
                onClick={(event) => handleMobileNavClick(event, 'services')}
              >
                Services
              </a>
              <a
                className="site-mobile-nav-link"
                href="#contact"
                onClick={(event) => handleMobileNavClick(event, 'contact')}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <motion.section
        id="top"
        ref={heroRef}
        className="ig-hero"
        variants={prefersReducedMotion ? reducedSectionReveal : sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="ig-noise" aria-hidden="true" />

        <div className="ig-text">
          <a className="ig-brand-anchor" href="#top" aria-label="Africa Beauty">
            <span>Africa</span>
            <span>Beauty</span>
          </a>
          <span className="ig-eyebrow">Salon de coiffure afro · Marrakech</span>
          <h1 className={isHeaderPinned ? 'ig-title is-pinned' : 'ig-title'}>
            Salon de coiffure<br />afro à Marrakech
          </h1>
          <p className="ig-desc">
            Africa Beauty est un salon spécialisé en coiffure afro, tresses,
            braids, soins cheveux afro et cheveux bouclés, frisés ou texturés
            à Marrakech.
          </p>
          <div className="ig-actions">
            <a
              className="ig-btn-primary"
              href={APPOINTMENT_LINK}
            >
              <ArrowRight size={16} />
              Prendre rendez-vous
            </a>
            <a className="ig-btn-ghost" href="#services">
              Découvrir les services
            </a>
          </div>
        </div>

        <div className="ig-grid-wrap">
          <div className="ig-fade ig-fade-left" />
          <div className="ig-fade ig-fade-top" />
          <div className="ig-fade ig-fade-bottom" />
          <div className="ig-grid">
            <ImageColumn images={HERO_GALLERY_IMAGES.slice(0, 4)} scrollUp={true} duration="22s" priority />
            <ImageColumn images={HERO_GALLERY_IMAGES.slice(4, 8)} scrollUp={false} duration="28s" />
            <ImageColumn images={HERO_GALLERY_IMAGES.slice(8, 12)} scrollUp={true} duration="18s" />
          </div>
        </div>
      </motion.section>

      {/* ══ PROMESSE ══════════════════════════════════════ */}
      <motion.section
        className="prom-section"
        id="promesse"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="prom-header">
          <span className="prom-eyebrow">Notre approche</span>
          <h2 className="prom-title">
            Une expertise afro,<br />une beauté complète.
          </h2>
          <p className="prom-subtitle">
            À Marrakech, Africa Beauty prend le temps de comprendre votre texture, votre style et votre routine avant chaque prestation. Parce que vos cheveux le méritent.
          </p>
        </header>

        <motion.div
          className="prom-grid"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {PILLARS.map(({ num, Icon, title, body }) => (
            <motion.article key={num} className="prom-card" variants={itemReveal} data-glow-card>
              <span className="prom-card-glow" aria-hidden="true" />
              <div className="prom-card-top">
                <span className="prom-num">{num}</span>
                <Icon size={28} className="prom-icon" />
              </div>
              <h3 className="prom-card-title">
                {title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                ))}
              </h3>
              <p className="prom-card-body">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* ══ DOT BRAND SECTION (VIDEO) ═══════════════════════ */}
      <DotBrandSection />

      {/* ══ TARIFS ════════════════════════════════════════ */}
      <React.Suspense fallback={null}>
        <PricingSection />
      </React.Suspense>

      {/* ══ SERVICES & PRIX ═══════════════════════════════ */}
      <ServicesCarousel />

      {/* ══ AVANT / APRES ═════════════════════════════════ */}
      <BeforeAfterSection />

      {/* ══ RITUEL CLIENT ══════════════════════════════════ */}
      <RitualSection />

      {/* ══ PREUVE SOCIALE ═════════════════════════════════ */}
      <SocialProofSection />

      {/* ══ EXPERTISE VISUELLE ═══════════════════════════════ */}
      <CpuSection />

      {/* ══ SEO LOCAL ═════════════════════════════════════ */}
      <InfoSection />

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <FaqSection />

      <div className="ab-end-stack">
        <motion.section
          className="ab-reserve"
          id="reserver"
          aria-labelledby="ab-reserve-title"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="ab-reserve-bg" aria-hidden="true">
            <img
              src="/images/africa-beauty-illustration.webp"
              alt=""
              className="ab-reserve-bg-img"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <div className="ab-reserve-bg-scrim" />
          </div>
          <div className="ab-reserve-inner">
            <p className="ab-reserve-kicker">Prête pour votre transformation ?</p>
            <h2 id="ab-reserve-title" className="ab-reserve-title">
              Prendre rendez-vous chez Africa Beauty
            </h2>
            <a
              className="ab-reserve-wa"
              href={APPOINTMENT_LINK}
            >
              <span className="ab-reserve-wa-text">Choisir mon salon</span>
              <span className="ab-reserve-wa-badge" aria-hidden>
                <svg className="ab-reserve-wa-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </motion.section>

        <motion.footer
          className="ab-foot"
          id="contact"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div className="ab-foot-inner" variants={staggerReveal}>
            <motion.div className="ab-foot-main" variants={staggerReveal}>
              <motion.div
                className="ab-foot-brand"
                variants={itemReveal}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="ab-foot-logo-row">
                  <span className="ab-foot-name">Africa Beauty</span>
                </div>
                <p className="ab-foot-desc">
                  Salon spécialisé en coiffure afro à Marrakech : tresses africaines, braids, soins cheveux afro, coloration, maquillage, onglerie et soins visage. Une mise en beauté précise et soignée, avec Casablanca sur rendez-vous.
                </p>
                <div className="ab-foot-actions">
                  <motion.a className="ab-foot-primary" href={APPOINTMENT_LINK} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    Prendre RDV
                  </motion.a>
                  <motion.a className="ab-foot-secondary" href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    Itinéraire
                  </motion.a>
                </div>
                <div className="ab-foot-badges" aria-label="Informations du salon">
                  <span>Marrakech : Résidence Menara Garden Magasin N°7, Guéliz</span>
                  <span>Casablanca : sur rendez-vous</span>
                </div>
                <nav className="ab-foot-socials" aria-label="Réseaux sociaux Africa Beauty">
                  {SOCIAL_LINKS.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                      <span aria-hidden>{social.svg}</span>
                    </a>
                  ))}
                </nav>
              </motion.div>

              <motion.div
                className="ab-foot-map-card"
                variants={itemReveal}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <motion.div
                  className="ab-foot-map-head"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div>
                    <span className="ab-foot-map-kicker">Nous trouver</span>
                    <h3>Marrakech · Guéliz</h3>
                  </div>
                  <motion.a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" aria-label="Ouvrir Africa Beauty dans Google Maps" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
                    Ouvrir
                  </motion.a>
                </motion.div>
                <iframe
                  className="ab-foot-map"
                  title="Carte Google Maps du salon Africa Beauty Marrakech"
                  src={GOOGLE_MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="ab-foot-map-meta">
                  <span>Résidence Menara Garden Magasin N°7</span>
                  <span>Rue Lieutenant Lamure, Marrakech</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="ab-foot-grid" variants={staggerReveal}>
              <motion.div className="ab-foot-col" variants={itemReveal} whileHover={{ y: -4 }}>
                <h3 className="ab-foot-heading">Liens rapides</h3>
                <nav className="ab-foot-links" aria-label="Sections du site">
                  <a href="#top">Accueil</a>
                  <a href="#promesse">À propos</a>
                  <a href="#services">Services</a>
                  <a href="#avant-apres">Avant / Après</a>
                  <a href="#rituel">Rituel</a>
                </nav>
              </motion.div>

              <motion.div className="ab-foot-col" variants={itemReveal} whileHover={{ y: -4 }}>
                <h3 className="ab-foot-heading">Clientes</h3>
                <nav className="ab-foot-links" aria-label="Informations clientes">
                  <a href="#faq">FAQ</a>
                  <a href="#avis">Avis clientes</a>
                  <a href={APPOINTMENT_LINK}>Réservation</a>
                  <a href={APPOINTMENT_LINK}>WhatsApp</a>
                </nav>
              </motion.div>

              <motion.div className="ab-foot-col ab-foot-contact" variants={itemReveal} whileHover={{ y: -4 }}>
                <h3 className="ab-foot-heading">Contact</h3>
                <a className="ab-foot-contact-item" href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer">
                  Marrakech : Résidence Menara Garden Magasin N°7, Guéliz, Rue Lieutenant Lamure
                </a>
                <a className="ab-foot-contact-item" href={APPOINTMENT_LINK}>
                  Marrakech : +212 668-558285
                </a>
                <a className="ab-foot-contact-item" href="tel:+212620503977">
                  Casablanca : +212 620 50 39 77
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="ab-foot-bottom" variants={itemReveal}>
              <p>Salon de coiffure et de beauté · Marrakech & Casablanca</p>
              <p>&copy; {new Date().getFullYear()} Africa Beauty. Tous droits réservés</p>
            </motion.div>
          </motion.div>
        </motion.footer>

        <motion.a
          className="float-whatsapp"
          href={APPOINTMENT_LINK}
          aria-label="Prendre rendez-vous"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          <span className="float-whatsapp-label">Prendre RDV</span>
          <span className="float-whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path
                fill="currentColor"
                d="M12.04 2a9.87 9.87 0 0 0-8.42 15.03L2.5 21.16l4.23-1.11A9.86 9.86 0 1 0 12.04 2Zm0 1.72a8.14 8.14 0 1 1 0 16.28 8.1 8.1 0 0 1-4.14-1.14l-.3-.18-2.51.66.67-2.44-.19-.31a8.14 8.14 0 0 1 6.47-12.87Zm-3.55 4.39c-.17 0-.45.06-.69.32-.24.27-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.18 1.82 2.91 4.48 3.96 2.22.88 2.67.7 3.15.66.48-.05 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.25-.07-.11-.24-.17-.5-.3-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.46.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.49Z"
              />
            </svg>
          </span>
        </motion.a>
      </div>
      </main>
    </>
  );
}
