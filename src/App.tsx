import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, X, Heart, Brain, Calendar, MapPin, Phone, Instagram, Linkedin, 
  ChevronRight, MessageCircle, Star, Quote, ArrowRight, User, Music2,
  ArrowUp, ChevronDown, Sparkles
} from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Abordagem', href: '#abordagem' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contato' },
];

const OFFICIAL_LOGO = "/logoryna.png";

const services = [
  {
    title: 'Psicoterapia Individual',
    description: 'Focada em adultos e adolescentes, auxiliando no manejo das emoções e comportamentos para uma vida mais saudável.',
    Icon: User,
    number: '01',
  },
  {
    title: 'Adolescência',
    description: 'Um espaço de escuta e acolhimento para jovens lidarem com as descobertas e pressões dessa fase.',
    Icon: Heart,
    number: '02',
  },
  {
    title: 'Recursos Humanos',
    description: 'Suporte organizacional e consultoria, integrando minha experiência anterior em psicologia das organizações.',
    Icon: Brain,
    number: '03',
  },
  {
    title: 'Saúde Emocional',
    description: 'Promoção do bem-estar e restabelecimento da saúde mental através da (re)descoberta de si mesmo.',
    Icon: Star,
    number: '04',
  },
];

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 88; // Height of the sticky navigation header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]" 
        style={{ scaleX }}
      />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ryna Hayashi | Psicóloga Clínica",
            "description": "Psicóloga clínica que atua na Abordagem Centrada na Pessoa. Oferece psicoterapia presencial em Indaiatuba e atendimento online.",
            "image": [
              "https://rynahayashi.com.br/ryna002.webp",
              "https://rynahayashi.com.br/logoryna.png"
            ],
            "logo": "https://rynahayashi.com.br/logoryna.png",
            "telephone": "+5519989578237",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Alm. Tamandaré, 54, Cidade Nova II",
              "addressLocality": "Indaiatuba",
              "addressRegion": "SP",
              "postalCode": "13334-200",
              "addressCountry": "BR"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/psi.rynahayashi",
              "https://www.tiktok.com/@rynahayashi.psi",
              "https://www.linkedin.com/in/ryna-mie-hayashi-wolf-76b15b2a"
            ]
          })
        }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface/80 backdrop-blur-md py-4 border-b border-outline-variant/30' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 md:gap-4 select-none group">
              <img 
                src={OFFICIAL_LOGO} 
                alt="Ryna Hayashi Logo" 
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col border-l border-outline-variant/60 pl-3 md:pl-4">
                <span className="font-display text-base md:text-lg font-bold text-on-surface leading-tight transition-colors duration-300 group-hover:text-primary whitespace-nowrap">
                  Ryna Hayashi
                </span>
                <span className="text-[10px] md:text-xs text-on-surface-variant/80 font-medium tracking-wide whitespace-nowrap">
                  Psicóloga CRP 06/104087
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                isScrolled 
                  ? 'bg-primary text-on-primary shadow-xl scale-105 px-8 py-3' 
                  : 'bg-primary/5 text-primary border border-primary/20 px-6 py-2.5'
              } rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2`}
            >
              Agendar Consulta
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface-container border-b border-outline-variant overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleScrollTo(e, link.href);
                    }}
                    className="text-lg font-display text-on-surface-variant hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary text-on-primary px-6 py-3 rounded-xl text-center font-bold mt-4 flex items-center justify-center gap-2 shadow-lg"
                >
                  Agendar Consulta
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-5 md:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-center order-2 lg:order-1 flex flex-col items-center justify-center w-full"
              >
                <motion.div 
                  variants={staggerItemVariants}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary-container text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-6 mx-auto"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Atendimento Presencial e Online
                </motion.div>
                <motion.h1 
                  variants={staggerItemVariants}
                  className="text-3xl md:text-6xl lg:text-7xl font-display font-medium text-on-surface leading-[1.1] mb-6 md:mb-8 text-center"
                >
                  Um espaço para <br />
                  <span className="text-primary italic">ser e florescer.</span>
                </motion.h1>
                <motion.p 
                  variants={staggerItemVariants}
                  className="text-sm md:text-lg text-on-surface-variant max-w-lg mb-8 md:mb-10 leading-relaxed mx-auto text-center"
                >
                  Baseada na abordagem humanista, facilito você a encontrar equilíbrio e clareza no processo de autodescoberta e cuidado com a saúde mental.
                </motion.p>
                <motion.div 
                  variants={staggerItemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a 
                    href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shadow-lg rounded-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-on-primary px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                    >
                      Começar minha jornada
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </a>
                  <a href="#abordagem" onClick={(e) => handleScrollTo(e, '#abordagem')}>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(72, 84, 34, 0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-outline px-8 py-4 rounded-full font-medium text-primary flex items-center justify-center gap-2 transition-colors"
                    >
                      Conhecer a abordagem
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
 
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative order-1 lg:order-2 w-full max-w-[320px] md:max-w-[450px] mx-auto"
              >
                <div className="relative z-10 hero-arch aspect-[4/5] overflow-hidden border-4 md:border-8 border-surface-container shadow-2xl">
                  <img 
                    src="/ryna002.webp" 
                    alt="Ryna Hayashi" 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 md:w-32 h-24 md:h-32 bg-secondary-container/50 rounded-full blur-2xl md:blur-3xl -z-10" />
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 md:w-48 h-32 md:h-48 bg-tertiary-container/30 rounded-full blur-2xl md:blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Intro */}
        <section id="sobre" className="py-16 md:py-20 bg-surface-container-low">
          <div className="container mx-auto px-5 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-8"
              >
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/20 mx-auto mb-4 md:mb-6" />
                <h2 className="text-xl md:text-3xl lg:text-5xl mb-6 md:mb-8 leading-tight px-2 md:px-0 font-display italic text-on-surface">
                  "A terapia é o encontro de dois seres humanos em busca de significados e novos horizontes."
                </h2>
                <div className="w-12 md:w-20 h-0.5 bg-primary/30 mx-auto" />
              </motion.div>
              
              <motion.div 
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12 max-w-4xl mx-auto"
              >
                <motion.div
                  variants={staggerItemVariants}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-64 md:h-[450px]"
                >
                  <img 
                    src="/ryna003.webp" 
                    alt="Ryna Hayashi Professional" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  variants={staggerItemVariants}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-64 md:h-[450px]"
                >
                  <img 
                    src="/ryna004.webp" 
                    alt="Consultório Acolhedor" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-12 text-center mt-16"
              >
                <motion.div variants={staggerItemVariants} className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-display mb-4 text-primary text-center">Minha Trajetória</h3>
                  <p className="text-on-surface-variant leading-relaxed text-center">
                    Sou Ryna Hayashi, CRP 06/104087. Psicóloga humanista formada em 2010, com uma trajetória que transita pela psicologia organizacional e hoje se dedica integralmente à clínica. Atendo em um consultório multiprofissional independente, onde a ética e o cuidado são prioridades.
                  </p>
                </motion.div>
                <motion.div variants={staggerItemVariants} className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-display mb-4 text-primary text-center">Abordagem Centrada na Pessoa</h3>
                  <p className="text-on-surface-variant leading-relaxed text-center">
                    A Abordagem Centrada na Pessoa compreende cada indivíduo como único, valorizando sua história, experiências e potencial de crescimento. O processo terapêutico acontece em um espaço de escuta, acolhimento e respeito, favorecendo o autoconhecimento, a autonomia e a construção de novos caminhos de forma autêntica.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Como posso te ajudar?</h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
                Ofereço diferentes modalidades de atendimento para atender às suas necessidades específicas em cada momento da vida.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, idx) => {
                const IconComponent = service.Icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={staggerItemVariants}
                    whileHover={{ y: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/30 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 group flex flex-col justify-between h-full min-h-[320px] text-center items-center cursor-pointer select-none transition-shadow transition-colors duration-300"
                  >
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 w-full flex flex-col items-center">
                      {/* Top Row: Icon + Number */}
                      <div className="flex justify-between items-start w-full mb-8">
                        {/* Modern dual-layer Icon Container */}
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/5 to-primary/12 border border-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-container group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_8px_20px_-4px_rgba(96,108,56,0.3)]">
                          {/* Inner decorative subtle ring */}
                          <div className="absolute inset-1 border border-dashed border-primary/20 rounded-xl group-hover:border-white/20 group-hover:scale-95 transition-all duration-500" />
                          <IconComponent className="w-6 h-6 stroke-[1.5] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                        </div>
                        
                        {/* Elegant luxury number marker */}
                        <span className="font-display text-4xl italic text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none">
                          {service.number}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-xl md:text-2xl font-display text-on-surface mb-3 group-hover:text-primary transition-colors duration-300 text-center">
                        {service.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-sans mb-6 text-center">
                        {service.description}
                      </p>
                    </div>


                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div 
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 bg-primary/5 rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center text-center gap-8 border border-primary/10 w-full"
            >
              <div className="flex-1 text-center flex flex-col items-center">
                <h3 className="text-2xl font-display mb-2 text-center">Atendimento Online para brasileiros no exterior</h3>
                <p className="text-on-surface-variant text-center">Mantendo a conexão com suas raízes e cultura, onde quer que você esteja.</p>
              </div>
              <a 
                href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary font-bold hover:underline group uppercase tracking-widest text-xs"
              >
                Saiba como funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-display">Opinião de quem confia</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Depoimentos reais de pacientes que vivenciaram o processo de cuidado e autoconhecimento.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  text: "Excelente profissional! Me senti bem desde a primeira consulta, ela traz um conforto enorme durante as sessões, um profissionalismo espetacular! Super recomendo.",
                  author: "Laura Brienza",
                  info: "Avaliação 5 estrelas no Google",
                  initials: "LB"
                },
                {
                  text: "Minha experiência com a Ryna foi transformadora, excelente profissional e muito responsável. Super recomendo ☺️",
                  author: "Márcia Costa Lima",
                  info: "Avaliação 5 estrelas no Google",
                  initials: "ML"
                },
                {
                  text: "Lugar excelente, calmo tranquilo e a Dra Ryna um doce de pessoa. Só posso agradecer por ter sido tão bem cuidada!! Obrigada por TD Dra!! 💗",
                  author: "Vanessa Mendes Teixeira Pires",
                  info: "Avaliação 5 estrelas no Google",
                  initials: "VP"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={staggerItemVariants}
                  className="bg-surface p-8 rounded-[32px] border border-outline-variant/30 relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/5" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <p className="text-on-surface-variant italic mb-8 relative z-10 text-sm md:text-base leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-on-surface leading-tight">{testimonial.author}</span>
                      <span className="text-xs text-on-surface-variant/70 mt-0.5">{testimonial.info}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <div className="inline-flex items-center gap-2 p-1 px-4 bg-primary/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary border border-primary/10 h-8">
                <Star className="w-3 h-3 fill-primary" />
                Sigilo e Ética Profissional garantidos
              </div>
              <a 
                href="https://www.google.com/search?q=rryna+hayashi&oq=rryna+hayashi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTILCAEQABgNGBMYgAQyBwgCEAAY7wUyBwgDEAAY7wUyBwgEEAAY7wXSAQgzNjk2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 bg-surface hover:bg-primary/5 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary rounded-full transition-colors h-8 hover:shadow-sm"
              >
                Ver mais avaliações no Google <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Call to Action & Image */}
        <section id="abordagem" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/ryna-ensaio-novo-5.png" 
              alt="Consultório Ryna Hayashi" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                variants={sectionRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-surface-container-lowest p-6 md:p-10 lg:p-20 rounded-[32px] md:rounded-[40px] shadow-xl border border-outline-variant/20 flex flex-col lg:flex-col gap-10 md:gap-12 items-center"
              >
                <div className="flex-1 text-center lg:text-center flex flex-col items-center justify-center w-full">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1] text-center">Inicie sua jornada hoje</h2>
                  <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed text-center max-w-2xl">
                    O primeiro passo é sempre o mais corajoso. Estou aqui para te ouvir sem julgamentos, em um ambiente de total confidencialidade e acolhimento.
                  </p>
                  <div className="space-y-4 mb-8 text-center flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-3 text-on-surface-variant text-sm md:text-base text-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </div>
                      <span>Cidade Nova II, Indaiatuba - SP / Atendimento Online</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-on-surface-variant text-sm md:text-base text-center">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary flex-shrink-0">
                        <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </div>
                      <span>Primeira conversa de alinhamento gratuita</span>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shadow-lg rounded-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto bg-primary text-on-primary px-10 py-5 rounded-full font-medium flex items-center justify-center gap-3 shadow-lg hover:bg-primary-container transition-all"
                    >
                      Agendar pelo WhatsApp
                      <Phone className="w-5 h-5" />
                    </motion.button>
                  </a>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden lg:rotate-3 shadow-lg hover:rotate-0 transition-transform duration-500 max-w-[300px] mx-auto lg:max-w-none">
                    <img 
                      src="/ryna007.webp" 
                      alt="Ambiente acolhedor" 
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Section (New) */}
        <section id="blog" className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center text-center mb-12 gap-6 w-full"
            >
              <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl lg:text-5xl mb-6 text-center">Reflexões e Bem-estar</h2>
                <p className="text-on-surface-variant text-center max-w-xl">
                  Artigos sobre saúde mental, autoconhecimento e o cotidiano.
                </p>
              </div>
              <div className="hidden lg:block text-center">
                <span className="text-sm font-bold tracking-widest text-primary/40 uppercase">Em breve novos conteúdos</span>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center py-16 px-6 bg-surface-container-low border border-outline-variant/30 rounded-[2.5rem] max-w-2xl mx-auto shadow-sm text-center"
            >
              <motion.div variants={staggerItemVariants} className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
                <Sparkles className="w-7 h-7" />
              </motion.div>
              <motion.h3 variants={staggerItemVariants} className="text-2xl md:text-3xl font-display font-medium text-on-surface mb-6 text-center">
                Novos artigos em breve
              </motion.h3>
              <motion.div variants={staggerItemVariants}>
                <a 
                  href="https://www.instagram.com/psi.rynahayashi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:text-primary-container hover:border-primary-container transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 hover:scale-110 transition-transform" />
                  Acompanhe novidades no Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ / Direct Contact */}
        <section id="contato" className="py-24 bg-surface-container-highest">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-20"
            >
              <motion.div variants={staggerItemVariants} className="flex flex-col">
                <h2 className="text-4xl lg:text-5xl mb-8 lg:text-center text-center">Dúvidas Frequentes</h2>
                <div className="space-y-2 bg-surface-container-lowest/50 p-6 rounded-3xl border border-outline-variant/20 shadow-sm">
                  {[
                    { q: 'Como funcionam as sessões?', a: 'As sessões têm duração de 50 minutos e ocorrem de forma semanal ou quinzenal, dependendo da necessidade de cada paciente. O atendimento é estruturado para oferecer um espaço seguro de escuta e acolhimento.' },
                    { q: 'Qual o horário de atendimento?', a: 'Os atendimentos são realizados de segunda a sexta-feira, em horários flexíveis sob agendamento prévio, garantindo flexibilidade para sua rotina.' },
                    { q: 'Quais as formas de pagamento?', a: 'O pagamento pode ser feito via Pix ou transferência bancária de forma mensal ou por sessão. Disponibilizamos recibos completos para que você possa solicitar reembolso junto ao seu plano de saúde.' },
                    { q: 'Atende convênios médicos?', a: 'Trabalho exclusivamente na modalidade particular, porém forneço recibos com todas as informações obrigatórias (como CRP e dados do atendimento) para você solicitar o reembolso parcial ou integral diretamente com seu convênio/plano de saúde.' },
                    { q: 'Como funciona a primeira sessão?', a: 'A primeira sessão é um momento de acolhimento e aproximação, onde você poderá compartilhar suas queixas iniciais, dúvidas e objetivos com a terapia, além de conhecer meu estilo de trabalho.' }
                  ].map((faq, i) => {
                    const isOpen = openFaqIndex === i;
                    return (
                      <motion.div 
                        key={i}
                        variants={staggerItemVariants}
                        className="border-b border-outline-variant/30 last:border-0 pb-2 pt-1"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                          className="w-full text-left py-4 flex justify-between items-center gap-4 group focus:outline-none cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-lg md:text-xl font-display text-primary font-medium transition-colors duration-300 group-hover:text-primary-container">
                            {faq.q}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary transition-colors"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.span>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                            marginTop: isOpen ? 4 : 0
                          }}
                          transition={{ 
                            height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] },
                            opacity: { duration: 0.25, ease: "linear" }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pb-4 pr-6">
                            {faq.a}
                          </p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
 
              <motion.div 
                variants={staggerItemVariants}
                className="bg-primary/5 p-6 md:p-8 lg:p-16 rounded-[32px] md:rounded-[40px] border border-primary/10 shadow-xl flex flex-col items-center text-center gap-8 md:gap-10"
              >
                <div className="max-w-md">
                   <h3 className="text-3xl md:text-4xl font-display mb-6">Vamos conversar?</h3>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
                     Clique no botão abaixo para iniciarmos seu atendimento pelo WhatsApp de forma direta e acolhedora.
                  </p>
                  
                  <a 
                    href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-on-primary py-5 md:py-6 rounded-2xl md:rounded-3xl font-bold text-lg md:text-xl flex items-center justify-center gap-4 shadow-2xl hover:bg-primary-container transition-all"
                    >
                      Agendar via WhatsApp
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.button>
                  </a>
                </div>

                <div className="w-full h-px bg-outline-variant/30 max-w-sm" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Acolhimento</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Humanismo</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Ética</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Liberdade</span>
                  </div>
                </div>

                <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-64 md:h-80 w-full border border-outline-variant/30 shadow-inner relative">
                  <iframe 
                    title="Mapa de localização do Consultório de Ryna Hayashi"
                    src="https://maps.google.com/maps?q=Rua%20Almirante%20Tamandar%C3%A9,%2054%20-%20Cidade%20Nova%20II,%20Indaiatuba%20-%20SP,%2013334-200&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-inverse-surface text-inverse-on-surface pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="mb-8">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-inverse-on-surface">Ryna Hayashi</span>
                  <span className="text-sm uppercase tracking-[0.3em] text-primary-fixed mt-1 font-medium">Psicóloga — CRP 06/104087</span>
                </div>
              </div>
              <p className="text-inverse-on-surface/50 max-w-sm mb-10 leading-relaxed italic text-lg font-display">
                "Cuidado é, antes de tudo, presença."
              </p>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/psi.rynahayashi" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-inverse-on-surface/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@rynahayashi.psi" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-inverse-on-surface/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                  <Music2 className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ryna-mie-hayashi-wolf-76b15b2a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-inverse-on-surface/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-primary-fixed/80">Links rápidos</h4>
              <ul className="space-y-4 text-inverse-on-surface/60">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleScrollTo(e, link.href)} 
                      className="hover:text-primary transition-colors duration-300 block w-fit"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-primary-fixed/80">Atendimento</h4>
              <ul className="space-y-6 text-inverse-on-surface/60">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-fixed/40 group-hover:text-primary transition-colors" />
                  <span className="leading-relaxed">R. Alm. Tamandaré, 54<br/>Cidade Nova II, Indaiatuba - SP<br/>13334-200</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary-fixed/40 group-hover:text-primary transition-colors" />
                  <a 
                    href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium hover:text-primary transition-colors cursor-pointer"
                  >
                    +55 (19) 98957-8237
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-inverse-on-surface/10 text-center text-xs text-inverse-on-surface/40 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p>&copy; 2026 Ryna Hayashi | Psicóloga CRP 06/104087</p>
              <p>Todos os direitos reservados.</p>
            </div>
            <p className="uppercase tracking-[0.1em] font-medium">
              Desenvolvido por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-turquesa hover:opacity-80 transition-opacity">Orvalia Studio</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Scroll to Top */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-surface backdrop-blur-md border border-outline-variant/30 text-on-surface shadow-xl rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Float */}
        <motion.a
          href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white shadow-2xl rounded-full flex items-center justify-center hover:brightness-110 transition-all group relative"
          aria-label="Agendar via WhatsApp"
        >
          <div className="absolute -left-40 bg-surface px-4 py-2 rounded-lg shadow-xl border border-outline-variant/30 text-on-surface text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Agendar Consulta
          </div>
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>
    </div>
  );
}
