import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Heart, Brain, Calendar, MapPin, Phone, Instagram, Linkedin, 
  ChevronRight, MessageCircle, Star, Quote, ArrowRight, User, Music2,
  ArrowUp
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

const OFFICIAL_LOGO = "https://i.ibb.co/tTLsP6tr/RYNA-LOGO-FINAL-03.webp";

const services = [
  {
    title: 'Psicoterapia Individual',
    description: 'Focado em adultos e adolescentes, auxiliando no manejo das emoções e comportamentos para uma vida mais saudável.',
    icon: <User className="w-6 h-6" />,
  },
  {
    title: 'Adolescência',
    description: 'Um espaço de escuta e acolhimento para jovens lidarem com as descobertas e pressões dessa fase.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Recursos Humanos',
    description: 'Suporte organizacional e consultoria, integrando minha experiência anterior em psicologia das organizações.',
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: 'Saúde Emocional',
    description: 'Promoção do bem-estar e restabelecimento da saúde mental através da (re)descoberta de si mesmo.',
    icon: <Star className="w-6 h-6" />,
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/20">
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
            <a href="#home" className="flex items-center gap-3">
              <img 
                src={OFFICIAL_LOGO} 
                alt="Ryna Hayashi Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display text-lg md:text-xl font-bold text-on-surface leading-tight">Ryna Hayashi</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-medium">Psicóloga</span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
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
                    onClick={() => setMobileMenuOpen(false)}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary-container text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-6 mx-auto lg:mx-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Atendimento Presencial e Online
                </div>
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-medium text-on-surface leading-[1.1] mb-6 md:mb-8">
                  Um espaço para <br />
                  <span className="text-primary italic">ser e florescer.</span>
                </h1>
                <p className="text-sm md:text-lg text-on-surface-variant max-w-lg mb-8 md:mb-10 leading-relaxed mx-auto lg:mx-0">
                  Acolhimento humanizado baseado na fenomenologia. Auxilio você a encontrar equilíbrio e clareza no processo de autodescoberta e cuidado com a saúde mental.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  <a href="#abordagem">
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(72, 84, 34, 0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-outline px-8 py-4 rounded-full font-medium text-primary flex items-center justify-center gap-2 transition-colors"
                    >
                      Conhecer abordagem
                    </motion.button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative order-1 lg:order-2 w-full max-w-[320px] md:max-w-[450px] mx-auto"
              >
                <div className="relative z-10 hero-arch aspect-[4/5] overflow-hidden border-4 md:border-8 border-surface-container shadow-2xl">
                  <img 
                    src="https://i.ibb.co/rYdM1ZS/ryna01.png" 
                    alt="Ryna Hayashi" 
                    className="w-full h-full object-cover object-top"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/20 mx-auto mb-4 md:mb-6" />
                <h2 className="text-xl md:text-3xl lg:text-5xl mb-6 md:mb-8 leading-tight px-2 md:px-0 font-display italic text-on-surface">
                  "A terapia é o encontro de dois seres humanos em busca de significados e novos horizontes."
                </h2>
                <div className="w-12 md:w-20 h-0.5 bg-primary/30 mx-auto" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto mt-10 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="https://i.ibb.co/vCZc6ysC/ryna-ensaio-novo-10.png" 
                  alt="Ryna Hayashi em atendimento" 
                  className="w-full h-[350px] md:h-[500px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-64 md:h-[450px]"
                >
                  <img 
                    src="https://i.ibb.co/8gwCR0n7/ryna-ensaio-novo-3.png" 
                    alt="Ryna Hayashi Professional" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-64 md:h-[450px]"
                >
                  <img 
                    src="https://i.ibb.co/pBv2HDH1/ryna-ensaio-novo-4.png" 
                    alt="Consultório Acolhedor" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-display mb-4 text-primary">Minha Trajetória</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Sou Ryna Hayashi, CRP 06/104087. Psicóloga humanista formada em 2010, com uma trajetória que transita pela psicologia organizacional e hoje se dedica integralmente à clínica. Atendo em um consultório multiprofissional independente, onde a ética e o cuidado são prioridades.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-display mb-4 text-primary">Abordagem Centrada na Pessoa</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Minha prática é focada na Abordagem Centrada na Pessoa (ACP). Especializo-me continuamente nesta vertente para ajudar pessoas a lidarem com suas emoções e pensamentos de forma mais saudável, possibilitando a promoção do bem-estar e saúde emocional.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Como posso te ajudar</h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
                Ofereço diferentes modalidades de atendimento para atender às suas necessidades específicas em cada momento da vida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-surface-container-highest p-8 rounded-3xl soft-shadow border border-outline-variant/30 group transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display mb-4">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-primary/5 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 border border-primary/10"
            >
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-display mb-2">Atendimento Online para brasileiros no exterior</h3>
                <p className="text-on-surface-variant">Mantendo a conexão com suas raízes e cultura, onde quer que você esteja.</p>
              </div>
              <a 
                href="https://wa.me/5519989578237?text=Olá%20Ryna,%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-bold hover:underline group uppercase tracking-widest text-xs"
              >
                Saiba como funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-display">Acolhimento e Transformação</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Relatos anônimos de quem confiou sua jornada ao nosso espaço de cuidado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Ryna é uma profissional de uma sensibilidade ímpar. O ambiente é seguro e me sinto genuinamente acolhida em todas as sessões.",
                  author: "A.P.",
                  info: "Paciente há 1 ano",
                  initials: "AP"
                },
                {
                  text: "Encontrei na terapia com a Ryna o espaço que precisava para florescer e compreender minhas angústias sem pressa e com muita ética.",
                  author: "M.R.",
                  info: "Paciente Presencial",
                  initials: "MR"
                },
                {
                  text: "O atendimento online superou minhas expectativas. Sinto a mesma proximidade e ética do presencial, facilitando muito minha rotina.",
                  author: "J.S.",
                  info: "Paciente no Exterior",
                  initials: "JS"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface p-8 rounded-[32px] border border-outline-variant/30 relative shadow-sm hover:shadow-md transition-shadow"
                >
                  <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/5" />
                  <p className="text-on-surface-variant italic mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface">{testimonial.author}</span>
                      <span className="text-xs text-on-surface-variant/70">{testimonial.info}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 p-1 px-4 bg-primary/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary border border-primary/10">
                <Star className="w-3 h-3 fill-primary" />
                Sigilo e Ética Profissional garantidos
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action & Image */}
        <section id="abordagem" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.ibb.co/63RW2yH/ryna-ensaio-novo-5.png" 
              alt="Consultório Ryna Hayashi" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-surface-container-lowest p-6 md:p-10 lg:p-20 rounded-[32px] md:rounded-[40px] shadow-xl border border-outline-variant/20 flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1]">Inicie sua jornada hoje</h2>
                  <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed">
                    O primeiro passo é sempre o mais corajoso. Estou aqui para te ouvir sem julgamentos, em um ambiente de total confidencialidade e acolhimento.
                  </p>
                  <div className="space-y-4 mb-8 text-left inline-block md:block">
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm md:text-base">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </div>
                      <span>Cidade Nova II, Indaiatuba - SP / Atendimento Online</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm md:text-base">
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
                    className="block"
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
                      src="https://i.ibb.co/JjjjTc3P/ryna-ensaio-novo-7.png" 
                      alt="Ambiente acolhedor" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section (New) */}
        <section id="blog" className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-5xl mb-6">Reflexões e Bem-estar</h2>
                <p className="text-on-surface-variant">
                  Artigos sobre saúde mental, autoconhecimento e o cotidiano sob a perspectiva fenomenológica.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-bold tracking-widest text-primary/40 uppercase">Em breve novos conteúdos</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-60">
              {[
                {
                  date: '12 Maio, 2024',
                  title: 'O que é a fenomenologia na prática clínica?',
                  category: 'Abordagem'
                },
                {
                  date: '08 Maio, 2024',
                  title: 'Ansiedade: Como o corpo fala o que a mente cala',
                  category: 'Saúde Mental'
                },
                {
                  date: '01 Maio, 2024',
                  title: 'A importância da pausa em um mundo acelerado',
                  category: 'Cotovelo'
                }
              ].map((post, i) => (
                <div key={i} className="group cursor-not-allowed">
                  <div className="aspect-video bg-surface-container-highest rounded-2xl mb-6 overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Star className="w-8 h-8 text-primary/10" />
                     </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-tighter bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-on-surface-variant/60">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display group-hover:text-primary transition-colors">{post.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block p-1 bg-surface-container rounded-full px-6 py-3 border border-outline-variant/30 text-sm italic text-on-surface-variant">
                Blog em construção. Siga no Instagram para pílulas de conteúdo diário.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Direct Contact */}
        <section id="contato" className="py-24 bg-surface-container-highest">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-8">Dúvidas Frequentes</h2>
                <div className="space-y-6">
                  {[
                    { q: 'Como funcionam as sessões?', a: 'As sessões têm duração média de 40 minutos a 1 hora. Atendo adultos e adolescentes em consultório físico em Indaiatuba ou de forma online para todo o mundo.' },
                    { q: 'Quais os horários e urgências?', a: 'Os atendimentos ocorrem em dias úteis. No momento, não realizamos sessões aos finais de semana ou atendimentos de urgência.' },
                    { q: 'Quais as formas de pagamento?', a: 'O pagamento é realizado via Pix ou transferência bancária. Fornecemos recibos para processos de reembolso junto ao seu convênio.' },
                  ].map((faq, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b border-outline-variant pb-6"
                    >
                      <h4 className="text-xl font-display mb-2 text-primary">{faq.q}</h4>
                      <p className="text-on-surface-variant">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 md:p-8 lg:p-16 rounded-[32px] md:rounded-[40px] border border-primary/10 shadow-xl flex flex-col items-center text-center gap-8 md:gap-10">
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

                <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-48 md:h-64 w-full border border-outline-variant/30">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8JwvbSVGQdyePW3Wf3sVSS83zCwlMqynisRPltyi9qRXOHFdjs-p-OZojO7e2J_WISAnQepRGuhuwEmtvajqv2z-8PT_CIg0OyvCj9GYmna4ABcrIrFmB-n00nJKHzeg05E_0sGs-ufG9wReyjaVNT12pSW928b5Q4TiEpfCOY6eOetICJxLfgYIu-w2u_QSYTna03CtTxkMnIcqBR2l6luepKTzi3fBu58-ZoGtHOkfsfkGPriXuQeT7fgaeBp7Pl4HJn3C6PMQ" 
                    alt="Mapa de localização" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
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
                  <span className="text-sm uppercase tracking-[0.3em] text-primary-fixed mt-1 font-medium">Psicóloga Clinica</span>
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
                  <li key={link.name}><a href={link.href} className="hover:text-primary transition-colors duration-300 block w-fit">{link.name}</a></li>
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
                  <span className="font-medium">+55 (19) 98957-8237</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-inverse-on-surface/10 text-center text-xs text-inverse-on-surface/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Ryna Hayashi | Psicóloga Clínica. CRP 06/104087. Todos os direitos reservados.</p>
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
