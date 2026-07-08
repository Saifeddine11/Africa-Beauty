import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const PRICING_CATEGORIES = [
  {
    id: "soins",
    title: "Soins Capillaires",
    services: [
      { name: "Shampoing", desc: "Lavage et soin du cuir chevelu.", price: "20–50 Dh" },
      { name: "Shampoing spécial", desc: "Traitement ciblé avec produits adaptés.", price: "70 Dh" },
      { name: "Touching", desc: "Retouche et entretien des racines.", price: "30 Dh" },
      { name: "Brushing", desc: "Mise en forme et lissage.", price: "50 Dh" },
      { name: "Pointe + Brushing", desc: "Rafraîchissement des pointes avec brushing.", price: "100 Dh" },
      { name: "Lissage simple", desc: "Lissage classique sans défrisant.", price: "100 Dh" },
      { name: "Laïfe sans mèche", desc: "Traitement lissant sur cheveux naturels.", price: "100 Dh" },
      { name: "Lissage avec défrisant", desc: "Lissage intensif et durable.", price: "150 Dh" },
      { name: "Traitement cheveux + produit", desc: "Soin réparateur complet avec produit professionnel.", price: "1 000 Dh" },
      { name: "Resserage locks", desc: "Resserrage et entretien des dreadlocks.", price: "250 Dh" },
      { name: "Resserage locks + shampoing", desc: "Resserrage et nettoyage complet des locks.", price: "300 Dh" },
      { name: "Ponytaille", desc: "Queue de cheval soignée et structurée.", price: "400 Dh" },
      { name: "Coiffure cérémonie", desc: "Mise en beauté complète pour grande occasion.", price: "500 Dh" },
    ],
  },
  {
    id: "coloration",
    title: "Coloration",
    services: [
      { name: "Teinture", desc: "Coloration uniforme de la chevelure.", price: "300 Dh" },
      { name: "Coloration racines", desc: "Retouche racines et repousses.", price: "200 Dh" },
      { name: "Écaille sans mèche", desc: "Balayage écaille sur cheveux naturels.", price: "150 Dh" },
      { name: "Écaille avec mèche", desc: "Balayage écaille avec extensions.", price: "200 Dh" },
      { name: "Sous le soleil", desc: "Effet soleil naturel et lumineux.", price: "300 Dh" },
      { name: "Mèche frontale", desc: "Mèches lumineuses placées en front.", price: "600 Dh" },
    ],
  },
  {
    id: "tresses",
    title: "Tresses & Nattes",
    services: [
      { name: "Natte collée grande", desc: "Tresses collées de grande taille.", price: "50 Dh" },
      { name: "Natte collée moyenne", desc: "Tresses collées de taille moyenne.", price: "100 Dh" },
      { name: "Natte collée petite", desc: "Tresses collées fines et détaillées.", price: "150 Dh" },
      { name: "Torsade", desc: "Style torsadé élégant et protecteur.", price: "150 Dh" },
      { name: "Twist sans mèche", desc: "Twist sur cheveux naturels.", price: "200 Dh" },
      { name: "Twist avec mèche", desc: "Twist avec extension pour plus de volume.", price: "350–800 Dh" },
      { name: "Rasta", desc: "Locks et rastas sur mesure.", price: "200–600 Dh" },
      { name: "Tresse frontale", desc: "Tresses frontales précises et soignées.", price: "400 Dh" },
      { name: "Décoiffe", desc: "Retrait délicat des coiffures protectrices.", price: "30–100 Dh" },
    ],
  },
  {
    id: "perruques",
    title: "Perruques & Tissage",
    services: [
      { name: "Pose nouvelle perruque", desc: "Teinte, customisation, brushing, simpote et pose.", price: "300 Dh" },
      { name: "Pose ancienne perruque", desc: "Soin, brushing, simpote et pose.", price: "200 Dh" },
      { name: "Confection nouvelle perruque", desc: "Teinte, customisation et pose sur-mesure.", price: "400 Dh" },
      { name: "Confection ancienne perruque", desc: "Soin et pose sur-mesure.", price: "300 Dh" },
      { name: "Intercaler", desc: "Technique d'ajout de volume et de longueur.", price: "150 Dh" },
      { name: "Raie ouvert", desc: "Installation avec raie naturelle.", price: "200 Dh" },
      { name: "Frontal", desc: "Pose de frontal lace.", price: "350 Dh" },
      { name: "Closure", desc: "Installation de closure.", price: "300 Dh" },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage & Mariages",
    services: [
      { name: "Maquillage simple", desc: "Maquillage naturel pour le quotidien.", price: "200 Dh" },
      { name: "Maquillage cérémonie", desc: "Maquillage sophistiqué pour événements.", price: "400 Dh" },
      { name: "Pack Mariage Formule 1", desc: "Maquillage + coiffure.", price: "750 Dh" },
      { name: "Pack Mariage Formule 2", desc: "Maquillage + coiffure + soin + pédicure + ongle + shampoing + natte.", price: "1 300 Dh" },
    ],
  },
  {
    id: "onglerie",
    title: "Onglerie",
    services: [
      { name: "Manucure sans vernis", desc: "Soin complet des mains.", price: "50 Dh" },
      { name: "Manucure vernis normal", desc: "Soin des mains avec vernis classique.", price: "80 Dh" },
      { name: "Manucure vernis permanent", desc: "Soin des mains avec vernis longue tenue.", price: "150 Dh" },
      { name: "Déco", desc: "Décoration des ongles.", price: "10 Dh" },
      { name: "Sémilac", desc: "Vernis semi-permanent.", price: "20 Dh" },
      { name: "Pédicure sans vernis", desc: "Soin complet des pieds.", price: "100 Dh" },
      { name: "Pédicure vernis normal", desc: "Soin des pieds avec vernis classique.", price: "130 Dh" },
      { name: "Pédicure vernis permanent", desc: "Soin des pieds avec vernis longue tenue.", price: "170 Dh" },
      { name: "Pédicure homme", desc: "Soin des pieds spécial homme.", price: "200 Dh" },
      { name: "Pédicure spa homme", desc: "Soin spa complet des pieds pour homme.", price: "300 Dh" },
      { name: "Pédicure spa femme", desc: "Soin spa complet des pieds pour femme.", price: "250 Dh" },
      { name: "Pédicure faux vernis normal", desc: "Pédicure avec faux vernis classique.", price: "200 Dh" },
      { name: "Pédicure faux vernis permanent", desc: "Pédicure avec faux vernis permanent.", price: "230 Dh" },
      { name: "Gel vernis normal", desc: "Pose gel avec vernis classique.", price: "200 Dh" },
      { name: "Gel vernis permanent", desc: "Pose gel avec vernis permanent.", price: "250 Dh" },
      { name: "Capsule vernis normal", desc: "Pose capsule avec vernis classique.", price: "100 Dh" },
      { name: "Capsule vernis permanent", desc: "Pose capsule avec vernis permanent.", price: "170 Dh" },
      { name: "Biable sans capsule", desc: "Pose biable sur ongles naturels.", price: "130 Dh" },
      { name: "Biable avec capsule", desc: "Pose biable avec capsule.", price: "250 Dh" },
    ],
  },
  {
    id: "soins-beaute",
    title: "Soins & Épilation",
    services: [
      { name: "Mini soin visage", desc: "Soin facial express.", price: "200 Dh" },
      { name: "Soin visage classique", desc: "Soin facial complet.", price: "300 Dh" },
      { name: "Soin Hydrafacial", desc: "Soin facial hydratant haute intensité.", price: "400 Dh" },
      { name: "Cils — volume naturelle", desc: "Extension de cils effet naturel.", price: "200 Dh" },
      { name: "Cils — 2D", desc: "Extension de cils volume 2D.", price: "300 Dh" },
      { name: "Cils — 3D", desc: "Extension de cils volume 3D.", price: "400 Dh" },
      { name: "Cils — volume russe", desc: "Extension de cils volume russe maximal.", price: "500 Dh" },
      { name: "Massage 35 mn", desc: "Massage relaxant ou tonifiant.", price: "300 Dh" },
      { name: "Massage 1H", desc: "Massage long et profond.", price: "600 Dh" },
      { name: "Épilation menton", desc: "", price: "20 Dh" },
      { name: "Épilation buvet", desc: "", price: "20 Dh" },
      { name: "Épilation sourcils", desc: "", price: "30 Dh" },
      { name: "Épilation aisselle", desc: "", price: "40 Dh" },
      { name: "Épilation ½ bras", desc: "", price: "50 Dh" },
      { name: "Épilation ½ jambe", desc: "", price: "50 Dh" },
      { name: "Coloration sourcils", desc: "", price: "50 Dh" },
      { name: "Épilation bras", desc: "", price: "100 Dh" },
      { name: "Épilation visage", desc: "", price: "100 Dh" },
      { name: "Épilation jambe", desc: "", price: "100 Dh" },
      { name: "Épilation complète", desc: "", price: "350 Dh" },
    ],
  },
]

function ServiceRow({ service, index }: { service: { name: string; desc: string; price: string }; index: number }) {
  return (
    <motion.div
      className="pricing-row"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02, duration: 0.25 }}
    >
      <div className="pricing-row-top">
        <span className="pricing-row-name">{service.name}</span>
        <div className="pricing-row-line" />
        <span className="pricing-row-price">{service.price}</span>
      </div>
      {service.desc && (
        <p className="pricing-row-desc">{service.desc}</p>
      )}
    </motion.div>
  )
}

function PricingSection() {
  const [activeTab, setActiveTab] = useState(0)
  const activeCategory = PRICING_CATEGORIES[activeTab]

  // Split services into 2 equal columns
  const half = Math.ceil(activeCategory.services.length / 2)
  const leftCol = activeCategory.services.slice(0, half)
  const rightCol = activeCategory.services.slice(half)

  return (
    <section className="pricing-section">
      <div className="pricing-inner">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "6px", color: "#C2714A", fontWeight: 300, textTransform: "uppercase", marginBottom: "12px" }}>
            Nos Prestations
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(26px, 4vw, 42px)", letterSpacing: "8px", textTransform: "uppercase", color: "#3A2215", fontWeight: 600, margin: 0 }}>
            Tarifs
          </h2>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#C2714A", margin: "20px auto 0" }} />
        </div>

        {/* Tabs */}
        <div className="pricing-tabs">
          {PRICING_CATEGORIES.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              style={{
                padding: "11px 22px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: activeTab === index ? 500 : 400,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "all 0.22s ease",
                backgroundColor: activeTab === index ? "#E8DDD0" : "transparent",
                color: activeTab === index ? "#3A2215" : "rgba(58,34,21,0.4)",
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Services */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="pricing-cols"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="pricing-col">
              {leftCol.map((service, i) => (
                <ServiceRow key={service.name} service={service} index={i} />
              ))}
            </div>
            <div className="pricing-col">
              {rightCol.map((service, i) => (
                <ServiceRow key={service.name} service={service} index={i + leftCol.length} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "56px" }}>
          <a
            href="/rendez-vous"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 36px",
              borderRadius: "999px",
              backgroundColor: "#3A2215",
              color: "#E8DDD0",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#C2714A")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3A2215")}
          >
            Réserver maintenant
          </a>
        </div>

      </div>
    </section>
  )
}

export { PricingSection, PRICING_CATEGORIES }
