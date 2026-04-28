import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  MessageCircle,
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
  PlusCircle,
  Menu,
  MapPin,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from './lib/utils';
import { TestimonialsColumn } from './components/ui/testimonials-columns-1';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';

const SLOTS = [0, 1, 2, 3];

const PILLARS = [
  {
    num: '01',
    Icon: Scissors,
    title: 'Textures afro\nmaitrisees',
    body: 'Diagnostic cheveux crepus, boucles ou defrises pour adapter la technique, la tension et les produits a votre fibre.',
  },
  {
    num: '02',
    Icon: Award,
    title: '10 ans\nd experience',
    body: 'Une equipe experimentee a Casablanca pour les tresses, extensions, soins, coloration, maquillage et onglerie.',
  },
  {
    num: '03',
    Icon: Clock,
    title: 'Ouvert\n6j/7',
    body: 'Le salon vous accueille du mardi au dimanche, de 10h a 20h, dans le quartier Bourgogne - El Hank.',
  },
  {
    num: '04',
    Icon: Sparkles,
    title: 'Beaute\ncomplete',
    body: 'Coiffure afro, soins visage, maquillage et ongles au meme endroit pour une mise en beaute complete.',
  },
];

const SERVICES = [
  {
    id: 'braids',
    title: 'Tresses Africaines',
    desc: 'Tresses collees, box braids, knotless, vanilles et coiffures protectrices realisees avec une tension maitrisee.',
    price: 'a partir de 250 MAD',
    Icon: ScissorsIcon,
  },
  {
    id: 'styling',
    title: 'Extensions & Lace',
    desc: 'Pose d extensions, perruques, lace front et finitions naturelles pour changer de look sans abimer le cheveu.',
    price: 'a partir de 120 MAD',
    Icon: SparklesIcon,
  },
  {
    id: 'care',
    title: 'Soins Capillaires',
    desc: 'Soins hydratants et reparateurs pour cheveux afro, crepus, boucles ou fragilises par la chaleur et la coloration.',
    price: 'a partir de 180 MAD',
    Icon: Droplets,
  },
  {
    id: 'color',
    title: 'Coloration',
    desc: 'Coloration, meches et patine avec conseil couleur pour illuminer le teint tout en respectant la fibre.',
    price: 'a partir de 350 MAD',
    Icon: Palette,
  },
  {
    id: 'events',
    title: 'Maquillage',
    desc: 'Make-up naturel, glam ou evenementiel pour mariage, soiree, shooting ou rendez-vous important.',
    price: 'a partir de 300 MAD',
    Icon: Crown,
  },
  {
    id: 'kids',
    title: 'Onglerie & Soins Visage',
    desc: 'Manucure, pose d ongles et soins visage pour completer votre rendez-vous beaute au salon.',
    price: 'a partir de 100 MAD',
    Icon: Baby,
  },
];

const BEFORE_AFTER_ITEM = {
  service: 'Tresses & Braids',
  hairType: 'Type 4A/4B',
  result: 'Raie nette, longueur preservee, finition naturelle',
  beforeImage: '/images/africa-beauty-illustration.webp',
  afterImage: '/images/africa-beauty-illustration.webp',
};

const BEFORE_AFTER_COLORS = {
  badge: '#FAF6F0',
  badgeText: '#C2714A',
  priceRed: '#E8611A',
  beforeLabel: '#3A2215',
  afterLabel: '#C2714A',
};

const WHATSAPP_LINK = 'https://wa.me/212620503977';

const NAV_LINKS = [
  { href: '#promesse', label: 'Approche' },
  { href: '#services', label: 'Services' },
  { href: '#avant-apres', label: 'Avant / Apres' },
  { href: '#rituel', label: 'Rituel' },
  { href: '#avis', label: 'Avis' },
  { href: '#salon-afro-casablanca', label: 'Casablanca' },
  { href: '#faq', label: 'FAQ' },
];

const RITUAL_STEPS = [
  {
    label: 'Diagnostic',
    title: 'Cheveu, objectif, style de vie',
    body: 'On commence par comprendre votre texture, votre routine, votre sensibilite du cuir chevelu et le resultat souhaite.',
  },
  {
    label: 'Preparation',
    title: 'Preparation douce et propre',
    body: 'Le cheveu est prepare avec demelage, hydratation et protection avant les tresses, extensions ou la coloration.',
  },
  {
    label: 'Coiffage',
    title: 'Technique precise, tension maitrisee',
    body: 'Le geste est regulier pour obtenir une finition nette sans tirer inutilement sur les racines.',
  },
  {
    label: 'Conseil',
    title: 'Conseils d entretien',
    body: 'Vous repartez avec les bons gestes: hydratation, foulard, rythme de retouche et soins a prevoir.',
  },
];

const TESTIMONIALS = [
  {
    text: 'Accueil très doux, diagnostic clair et tresses super propres. Les raies sont nettes et je n ai pas eu mal au cuir chevelu.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Amina Diallo',
    role: 'Knotless braids',
  },
  {
    text: 'Mes cheveux naturels étaient secs et difficiles à coiffer. Après le soin, ils sont plus souples, brillants et faciles à démêler.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Sarah Benali',
    role: 'Soin profond',
  },
  {
    text: 'Je voulais une coiffure élégante pour un mariage. Le résultat était magnifique et a tenu toute la soirée.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Mariam Kouassi',
    role: 'Coiffure événement',
  },
  {
    text: 'Travail patient et très propre. Les box braids sont légères, régulières et la finition fait vraiment professionnelle.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Nadia El Fassi',
    role: 'Box braids',
  },
  {
    text: 'On sent qu elle connaît les cheveux afro. Elle m a conseillé une routine simple pour garder l hydratation après le rendez-vous.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Fatou Ndiaye',
    role: 'Cheveux naturels',
  },
  {
    text: 'Couleur réussie sans agresser mes cheveux. Le rendu est lumineux, naturel, et exactement comme la photo d inspiration.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Imane Ait',
    role: 'Coloration',
  },
  {
    text: 'Très bonne expérience pour ma fille. Coiffure douce, rapide, jolie, et surtout elle est sortie souriante.',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Khadija Sow',
    role: 'Coiffure enfant',
  },
  {
    text: 'J avais peur de la tension sur mes racines. Elle a pris le temps, et mes twists sont confortables depuis le premier jour.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Lina Traoré',
    role: 'Twists',
  },
  {
    text: 'Ponctuelle, à l écoute et très minutieuse. La coupe a redonné une vraie forme à mes boucles.',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    name: 'Sofia Bah',
    role: 'Coupe boucles',
  },
];

const FIRST_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(0, 3);
const SECOND_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(3, 6);
const THIRD_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(6, 9);

const SEO_TOPICS = [
  {
    label: 'Tresses',
    title: 'Tresses africaines a Casablanca',
    body: 'Box braids, knotless, tresses collees, vanilles et coiffures protectrices sont realisees avec des separations nettes et une tension controlee.',
  },
  {
    label: 'Soins',
    title: 'Soins cheveux afro, crepus et boucles',
    body: 'Chaque soin est adapte a la densite, la porosite et l etat du cuir chevelu pour hydrater, renforcer et faciliter le coiffage.',
  },
  {
    label: 'Beaute',
    title: 'Maquillage, onglerie et soins visage',
    body: 'Le salon propose aussi maquillage, manucure, pose d ongles et soins visage pour une mise en beaute complete a Casablanca.',
  },
];

const SEO_KEYWORDS = [
  'salon afro Casablanca',
  'coiffeuse afro Casablanca',
  'tresses africaines Casablanca',
  'extensions cheveux Casablanca',
  'salon de beaute Bourgogne Casablanca',
];

const SEO_FEATURES = [
  {
    Icon: ScissorsIcon,
    label: 'Expertise afro',
    title: 'Cheveux afro, crepus, boucles et textures',
    body: 'Un diagnostic avant chaque prestation pour adapter la technique, la tension et les produits.',
    tone: 'dark',
  },
  {
    Icon: MapPin,
    label: 'Local',
    title: 'Salon a Casablanca Bourgogne',
    body: 'Adresse: 10 rue Ibnou Katir, quartier Bourgogne - El Hank, Casablanca.',
    tone: 'light',
  },
  {
    Icon: SparklesIcon,
    label: 'Horaires',
    title: 'Ouvert mardi-dimanche, 10h-20h',
    body: 'Reservation rapide par telephone ou WhatsApp au +212 620 50 39 77.',
    tone: 'accent',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Ou se trouve le salon Africa Beauty a Casablanca ?',
    a: 'Le salon est situe au 10 rue Ibnou Katir, dans le quartier Bourgogne - El Hank a Casablanca.',
  },
  {
    q: 'Quels sont les horaires du salon ?',
    a: 'Africa Beauty vous accueille du mardi au dimanche, de 10h a 20h. Le salon est ferme le lundi.',
  },
  {
    q: 'Quels services propose Africa Beauty ?',
    a: 'Le salon propose coiffure afro, tresses africaines, extensions, coloration, soins capillaires, maquillage, onglerie et soins visage.',
  },
  {
    q: 'Comment reserver un rendez-vous ?',
    a: 'Vous pouvez reserver par WhatsApp ou telephone au +212 620 50 39 77. Un diagnostic peut etre confirme avant la prestation.',
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

function ServicesCarousel() {
  const [step, setStep] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const currentIndex = ((step % SERVICES.length) + SERVICES.length) % SERVICES.length;

  React.useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => setStep((prev) => prev + 1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      className="srv-section"
      id="services"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.header className="srv-header" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.span className="srv-eyebrow" variants={itemReveal}>Services & tarifs</motion.span>
        <motion.h2 className="srv-title" variants={itemReveal}>
          Des prestations claires,<br />avec prix de depart.
        </motion.h2>
        <motion.p className="srv-subtitle" variants={itemReveal}>
          Les meilleures landing pages salon ne cachent pas les prix. Nous affichons des tarifs "a partir de" pour filtrer les demandes et rassurer les bons clients.
        </motion.p>
        <motion.div className="srv-header-actions" variants={itemReveal}>
          <button type="button" className="srv-nav-btn" onClick={goPrev} aria-label="Service precedent">
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
              const isActive = index === currentIndex;
              const Icon = service.Icon;
              return (
                <button
                  key={service.id}
                  className={isActive ? 'srv-chip is-active' : 'srv-chip'}
                  style={{
                    transform: `translateY(${distance * 64}px)`,
                    opacity: 1 - Math.abs(distance) * 0.2,
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

        <div className="srv-stage" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {SERVICES.map((service, index) => {
            const status = getCardStatus(index);
            return (
              <article key={service.id} className={`srv-showcard is-${status}`}>
                <div className="srv-showcard-overlay">
                  <p className="srv-showcard-kicker">{service.title}</p>
                  <p className="srv-showcard-desc">{service.desc}</p>
                  <p className="srv-showcard-price">{service.price}</p>
                  <a className="srv-showcard-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Reserver ce service
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

function ImageColumn({ scrollUp, duration }) {
  return (
    <div className="ig-col">
      <div
        className={scrollUp ? 'ig-inner ig-up' : 'ig-inner ig-down'}
        style={{ animationDuration: duration }}
      >
        {[...SLOTS, ...SLOTS].map((_, i) => (
          <div key={i} className="ig-img-wrap">
            <div className="ig-placeholder" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandMediaSection() {
  return (
    <section className="expand-media-section">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
        posterSrc="https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg"
        bgImageSrc="/images/africa-beauty-illustration.webp"
        title="Africa Beauty"
        date="Casablanca"
        scrollToExpand="Scroll to expand"
        textBlend
      >
        <div className="expand-media-copy">
          <span>Experience</span>
          <h2>Un salon afro a Casablanca pense pour toute votre beaute.</h2>
          <p>
            Coiffure afro, tresses africaines, extensions, coloration, maquillage, onglerie et soins visage au quartier Bourgogne - El Hank.
          </p>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}

function BeforeAfterSection({
  badge = 'Resultat client',
  heading = 'Avant / Apres\ncheveux textures',
  priceLabel = 'Service:',
  priceValue = BEFORE_AFTER_ITEM.service,
  description = "Faites glisser le curseur pour comparer le rendu avant et apres. Une finition nette, une longueur preservee et un resultat naturel que vous pouvez vraiment porter au quotidien.",
  beforeLabel = 'Avant',
  afterLabel = 'Apres',
  beforeImage = BEFORE_AFTER_ITEM.beforeImage,
  afterImage = BEFORE_AFTER_ITEM.afterImage,
  initialSliderPosition = 50,
}) {
  const colors = BEFORE_AFTER_COLORS;
  const [sliderPosition, setSliderPosition] = React.useState(initialSliderPosition);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef(null);

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
  const handleTouchMove = (event) => handleMove(event.touches[0].clientX);

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
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              <div
                className="ba-exact-layer"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="ba-exact-image-wrap">
                  <img
                    src={beforeImage}
                    alt="Before"
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
                    alt="After"
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
        <span className="ritual-eyebrow">Le rendez-vous</span>
        <h2 className="ritual-title">Un rituel clair, du diagnostic a la finition.</h2>
        <p className="ritual-subtitle">
          Les plus beaux resultats viennent rarement d un geste rapide. Ils viennent d une methode calme, lisible et adaptee a votre cheveu.
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
          <div className="proof-columns-badge">Avis clientes</div>

          <h2 className="proof-title">
            CE QUE NOS CLIENTES DISENT
          </h2>
          <p>
            Des retours après une coiffure, un soin ou une transformation chez Africa Beauty.
          </p>
        </motion.div>

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
          <span className="seo-eyebrow">Salon afro Casablanca</span>
          <h2 className="seo-title">Coiffure afro, tresses et beaute complete a Bourgogne.</h2>
          <p className="seo-intro">
            Africa Beauty accompagne les cheveux crepus, boucles et texturés avec des prestations adaptees: tresses africaines, extensions, soins profonds, coloration, maquillage, ongles et soins visage.
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
            <h3>Un salon de beaute a Casablanca pense pour les cheveux texturés.</h3>
            <p>
              Chercher une coiffeuse afro a Casablanca, ce n est pas seulement trouver une adresse. C est trouver une equipe qui comprend la densite, la porosite, la sensibilite du cuir chevelu et le temps necessaire pour une coiffure propre.
            </p>
            <p>
              Situe a Bourgogne - El Hank, Africa Beauty reunit coiffure, soins et mise en beaute dans un espace professionnel ouvert du mardi au dimanche.
            </p>
            <div className="seo-keywords" aria-label="Services recherches">
              {SEO_KEYWORDS.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <a className="seo-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Reserver au +212 620 50 39 77
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
                  <h3>{topic.title}</h3>
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
                <h3>{item.title}</h3>
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
        <span className="faq-eyebrow">Questions frequentes</span>
        <h2 className="faq-title">Les bonnes reponses avant de reserver.</h2>
      </div>
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

export default function App() {
  const [isHeaderPinned, setIsHeaderPinned] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const heroRef = React.useRef(null);
  const headerBarRef = React.useRef(null);

  React.useEffect(() => {
    const syncPointer = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      document.querySelectorAll('[data-glow-card]').forEach((card) => {
        card.style.setProperty('--x', x.toFixed(2));
        card.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        card.style.setProperty('--y', y.toFixed(2));
        card.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      });
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsHeaderPinned(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const headerClassName = cn(
    'site-mark',
    isHeaderPinned && 'is-pinned'
  );

  return (
    <>
      <header className={headerClassName} aria-label="Africa Beauty">
        <div ref={headerBarRef} className="site-mark-bar">
          <a className="site-mark-side site-mark-side-left" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <PlusCircle size={18} />
            <span>Reserver</span>
          </a>

          <a className="site-mark-link" href="#top" aria-label="Africa Beauty">
            <span className="site-header-brand">Africa Beauty</span>
          </a>

          <button
            type="button"
            className="site-mark-side site-mark-side-right"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span>Menu</span>
          </button>
        </div>
      </header>

      <nav className={cn('ab-menu', isMenuOpen && 'is-open')} aria-label="Navigation principale">
        <div className="ab-menu-inner">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <motion.section
        id="top"
        ref={heroRef}
        className="ig-hero"
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="ig-noise" aria-hidden="true" />

        <div className="ig-text">
          <a className="ig-brand-anchor" href="#top" aria-label="Africa Beauty">
            <span>Africa</span>
            <span>Beauty</span>
          </a>
          <span className="ig-eyebrow">Salon afro & beaute · Casablanca Bourgogne</span>
          <h1 className={isHeaderPinned ? 'ig-title is-pinned' : 'ig-title'}>
            Africa<br />Beauty
          </h1>
          <p className="ig-desc">
            Salon afro a Casablanca specialise en tresses africaines,
            extensions, soins capillaires, coloration, maquillage,
            onglerie et soins visage.
          </p>
          <div className="ig-actions">
            <a
              className="ig-btn-primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              Réserver maintenant
            </a>
            <a className="ig-btn-ghost" href="#services">
              Voir nos tarifs
            </a>
          </div>
        </div>

        <div className="ig-grid-wrap">
          <div className="ig-fade ig-fade-left" />
          <div className="ig-fade ig-fade-top" />
          <div className="ig-fade ig-fade-bottom" />
          <div className="ig-grid">
            <ImageColumn scrollUp={true}  duration="22s" />
            <ImageColumn scrollUp={false} duration="28s" />
            <ImageColumn scrollUp={true}  duration="18s" />
          </div>
        </div>
      </motion.section>

      {/* ══ SCROLL EXPANSION VIDEO ═══════════════════════ */}
      <ExpandMediaSection />

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
            Une expertise afro,<br />une beaute complete.
          </h2>
          <p className="prom-subtitle">
            A Casablanca, Africa Beauty prend le temps de comprendre votre texture, votre style et votre routine avant chaque prestation.
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

      {/* ══ SERVICES & PRIX ═══════════════════════════════ */}
      <ServicesCarousel />

      {/* ══ AVANT / APRES ═════════════════════════════════ */}
      <BeforeAfterSection />

      {/* ══ RITUEL CLIENT ══════════════════════════════════ */}
      <RitualSection />

      {/* ══ PREUVE SOCIALE ═════════════════════════════════ */}
      <SocialProofSection />

      {/* ══ INFOS PRATIQUES ════════════════════════════════ */}
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
            <p className="ab-reserve-kicker">Réservation</p>
            <h2 id="ab-reserve-title" className="ab-reserve-title">
              Réserver votre rendez-vous
            </h2>
            <a
              className="ab-reserve-wa"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ab-reserve-wa-text">Réserver par WhatsApp</span>
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

        <footer className="ab-foot" id="contact">
          <div className="ab-foot-inner">
            <div className="ab-foot-grid">
              <div className="ab-foot-brand">
                <div className="ab-foot-logo-row">
                  <Flower2 className="ab-foot-logo-icon" size={22} strokeWidth={1.6} aria-hidden />
                  <span className="ab-foot-name">Africa Beauty</span>
                </div>
                <p className="ab-foot-desc">
                  Salon afro et beaute a Casablanca Bourgogne : tresses africaines, extensions, soins capillaires,
                  coloration, maquillage, onglerie et soins visage.
                </p>
                <p className="ab-foot-legal">&copy; {new Date().getFullYear()} Africa Beauty — Tous droits réservés</p>
              </div>

              <div className="ab-foot-col">
                <h3 className="ab-foot-heading">Sections</h3>
                <nav className="ab-foot-links" aria-label="Sections du site">
                  <a href="#promesse">À propos</a>
                  <a href="#services">Services</a>
                  <a href="#rituel">Rituel</a>
                  <a href="#avis">Avis</a>
                  <a href="#salon-afro-casablanca">Infos pratiques</a>
                  <a href="#faq">FAQ</a>
                  <a href="#reserver">Réservation</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>

              <div className="ab-foot-col">
                <h3 className="ab-foot-heading">Réseaux sociaux</h3>
                <nav className="ab-foot-links" aria-label="Réseaux sociaux">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    WhatsApp +212 620 50 39 77
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer">
                    Snapchat
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
