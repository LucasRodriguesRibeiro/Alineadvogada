import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, CheckCircle2, Scale, Shield, Landmark, MessageCircle, FileText, Gavel, ArrowUpRight } from 'lucide-react';

const WA_LINK = "https://wa.me/5574999644051";
const BRAND_NAME = "Cavalcante Dourado";
const BRAND_FULL = "Cavalcante Dourado Advocacia & Consultoria Jurídica";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Contato', href: '#contato' },
  ];
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 md:py-4 bg-white/98 backdrop-blur-md border-b border-brand-gold/15 shadow-sm' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center transition-transform hover:scale-102 ml-2 md:ml-4">
          <img 
            src="/imagens/logo aline dourada.png" 
            alt={BRAND_NAME} 
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled 
                ? 'h-14 md:h-20' 
                : 'h-20 md:h-36'
            } ${!scrolled ? 'brightness-0 invert' : ''}`} 
          />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a 
              key={l.label} 
              href={l.href} 
              className={`text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 relative group ${scrolled ? 'text-brand-burgundy/80 hover:text-brand-burgundy' : 'text-white/80 hover:text-white'}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full"/>
            </a>
          ))}
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`py-3 px-6 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-[2px] ${
              scrolled 
                ? 'btn-primary' 
                : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-burgundy'
            }`}
          >
            Agendar Consulta
          </a>
        </div>
        <button className={`md:hidden transition-colors ${scrolled ? 'text-brand-burgundy/90' : 'text-white/90'}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-brand-gold/15 px-8 py-12 flex flex-col items-center gap-8 text-center shadow-2xl">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={()=>setOpen(false)} className="text-brand-burgundy/80 hover:text-brand-gold text-sm font-bold tracking-[0.15em] uppercase transition-colors">{l.label}</a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-xs">Agendar Consulta</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-burgundy-premium pt-40 md:pt-48 pb-20 md:pb-24">
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[0.2,0.8,0.2,1]}}>
        <div className="tag-premium mb-8 justify-center">
          <span className="accent-line"/> Advocacia & Consultoria Estratégica
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.15] mb-8">
          Excelência jurídica para <br/>
          <span className="text-gold-gradient italic font-medium">momentos decisivos</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-normal">
          Protegendo seus direitos com atendimento humanizado, <br className="hidden md:block"/> 
          visão estratégica e resultados sólidos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-gold text-brand-burgundy font-semibold hover:bg-brand-gold-light py-4 px-8 text-sm tracking-wider uppercase rounded-[2px] transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[240px]"
          >
            Iniciar Atendimento <ArrowRight size={16} className="ml-2"/>
          </a>
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/40 text-white font-semibold hover:bg-white/5 py-4 px-8 text-sm tracking-wider uppercase rounded-[2px] transition-all inline-flex items-center justify-center min-w-[240px]"
          >
            <MessageCircle size={18} className="mr-2"/> WhatsApp
          </a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-90">
          {['Atendimento Ágil', 'Transparência Total', 'Foco em Resultados'].map(text => (
            <div key={text} className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-brand-gold"/>
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-white/90">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    
    <motion.div animate={{y:[0,10,0]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer hover:text-white transition-colors">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Descobrir</span>
        <ChevronDown size={20}/>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 lg:py-32 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="tag-premium mb-6">
            <span className="accent-line"/> Dra. Aline Cavalcante Dourado
          </div>
          <h2 className="text-3xl lg:text-5xl font-normal text-brand-burgundy mb-8 leading-tight">
            Advocacia pautada na <br/>
            <span className="text-gold-gradient italic">ética e no resultado</span>
          </h2>
          
          <div className="space-y-8 text-text-muted text-base lg:text-lg leading-relaxed font-normal">
            <p>
              A <span className="text-brand-burgundy font-semibold">Cavalcante Dourado Advocacia & Consultoria Jurídica</span> nasceu do propósito de oferecer um atendimento jurídico diferenciado, onde a técnica se une à empatia para resolver conflitos de forma eficiente.
            </p>
            <p>
              Sob a liderança de <span className="text-brand-burgundy font-medium font-serif italic text-xl">Aline Cavalcante Dourado</span>, nosso escritório preza pela transparência e pela busca incansável pelos melhores resultados, tratando cada caso como único e prioritário.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              {[
                { title: 'Personalização', desc: 'Cada cliente recebe uma estratégia exclusiva para seu caso.' },
                { title: 'Segurança', desc: 'Fundamentação técnica rigorosa para garantir sua proteção.' }
              ].map(item => (
                <div key={item.title} className="border-l-2 border-brand-gold/40 pl-6">
                  <h4 className="text-brand-burgundy font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted/90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"/>
          <div className="image-reveal-mask aspect-[3/4] shadow-2xl">
            <img 
              src="/imagens/Aline Cavalcante Dourado.jpeg" 
              alt="Dra. Aline Cavalcante Dourado" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 via-transparent to-transparent opacity-40"/>
            <div className="absolute bottom-10 left-10 right-10 border-l border-white/40 pl-6">
              <div className="text-white font-light text-2xl mb-1" style={{ fontFamily: 'Cormorant Garamond,serif' }}>Dra. Aline Dourado</div>
              <div className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">OAB/BA 89.622</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const items = [
    { icon: <Scale size={24}/>, title: 'Direito Civil', desc: 'Resolução de conflitos contratuais, responsabilidade civil e assessoria preventiva especializada.' },
    { icon: <Landmark size={24}/>, title: 'Família e Sucessões', desc: 'Divórcios, inventários e planejamento sucessório conduzidos com máxima discrição e sensibilidade.' },
    { icon: <Shield size={24}/>, title: 'Consultoria Jurídica', desc: 'Pareceres técnicos e orientação estratégica preventiva para pessoas físicas e empresas de alto padrão.' },
    { icon: <FileText size={24}/>, title: 'Direito Imobiliário', desc: 'Segurança em transações, regularização de imóveis e gestão de contratos complexos de locação.' },
  ];
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-burgundy-premium">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} className="mb-20 text-center">
          <div className="tag-premium mb-6 justify-center">
            <span className="accent-line"/> Especialidades
          </div>
          <h2 className="text-3xl lg:text-5xl font-normal text-white leading-tight">
            Soluções jurídicas de <span className="text-gold-gradient italic">alta performance</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.1}}
              className="card-dark-premium p-8 sm:p-10 flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className="w-16 h-16 rounded-sm flex items-center justify-center text-brand-gold bg-brand-gold-soft mb-8 transition-colors group-hover:bg-brand-gold group-hover:text-brand-burgundy">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-normal">{item.desc}</p>
              <div className="mt-8 pt-6 border-t border-brand-gold/10 w-full opacity-100 transition-opacity">
                <a href={WA_LINK} className="text-brand-gold hover:text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-colors">
                  Saiba Mais <ArrowUpRight size={14}/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { n: '01', title: 'Agendamento', desc: 'Primeiro contato para entender sua demanda de forma exclusiva.' },
    { n: '02', title: 'Análise Técnica', desc: 'Estudo aprofundado com transparência e fundamentação jurídica sólida.' },
    { n: '03', title: 'Estratégia', desc: 'Definição do caminho mais eficiente para garantir seus direitos.' },
    { n: '04', title: 'Reporte Regular', desc: 'Acompanhamento próximo e atualizações constantes do seu processo.' },
  ];
  return (
    <section id="atuacao" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="lg:col-span-1">
            <div className="tag-premium mb-6">
              <span className="accent-line"/> Metodologia
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal text-brand-burgundy leading-tight mb-8">
              Excelência em <br/>
              <span className="text-gold-gradient italic">cada movimento</span>
            </h2>
            <p className="text-text-muted font-normal leading-relaxed">
              Nosso processo foi desenhado para oferecer segurança e previsibilidade em todas as etapas da sua jornada jurídica.
            </p>
          </motion.div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.1}}
                className="relative flex flex-col">
                <div className="text-6xl font-light text-brand-gold/15 font-serif mb-2 leading-none">{s.n}</div>
                <h3 className="text-brand-burgundy font-bold text-base mb-4 tracking-wide uppercase">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed font-normal">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 lg:py-32 bg-burgundy-premium border-y border-brand-gold/15">
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
        <div className="tag-premium justify-center mb-8 text-brand-gold">
          <span className="accent-line"/> Contato Direto
        </div>
        <h2 className="text-4xl lg:text-6xl font-normal text-white mb-10 leading-tight">
          Sua tranquilidade jurídica <br/>
          <span className="text-gold-gradient italic">começa aqui</span>
        </h2>
        <div className="divider-gold mb-10"/>
        <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-16 font-normal">
          Agende uma consulta exclusiva para uma análise detalhada do seu caso. Atendimento humanizado e estratégico para todo o Brasil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-gold text-brand-burgundy font-semibold hover:bg-brand-gold-light py-4 px-8 text-sm tracking-wider uppercase rounded-[2px] transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[280px] animate-pulse-burgundy"
          >
            Agendar Consulta Online <ArrowRight size={16} className="ml-2"/>
          </a>
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/40 text-white font-semibold hover:bg-white/5 py-4 px-8 text-sm tracking-wider uppercase rounded-[2px] transition-all inline-flex items-center justify-center min-w-[280px]"
          >
            <MessageCircle size={18} className="mr-2"/> Falar no WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-12 border-t border-brand-gold/15 text-white/90">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
              <MessageCircle size={18}/>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold mb-1 font-bold">WhatsApp</span>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-brand-gold transition-colors font-normal">(74) 99964-4051</a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
              <span className="font-bold text-base">@</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold mb-1 font-bold">Instagram</span>
            <a href="https://instagram.com/cavalcantedourado.adv" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-brand-gold transition-colors font-normal">@cavalcantedourado.adv</a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
              <span className="text-base">✉</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold mb-1 font-bold">E-mail</span>
            <a href="mailto:cavalcantedourado.adv@gmail.com" className="text-xs hover:text-brand-gold transition-colors font-normal break-all px-2">cavalcantedourado.adv@gmail.com</a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-3">
              <span className="text-base">📍</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold mb-1 font-bold">Localidade</span>
            <span className="text-xs font-normal">Irecê - BA</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#220506] py-20 px-6 border-t border-brand-gold/15">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2 flex flex-col items-center text-center">
          <img 
            src="/imagens/logo aline dourada.png" 
            alt={BRAND_NAME} 
            className="h-36 w-auto object-contain mb-8 brightness-0 invert" 
          />
          <p className="text-white/70 text-sm max-w-sm font-normal leading-relaxed">
            Excelência jurídica e consultoria estratégica pautada na ética e na busca incessante pelos melhores resultados.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest">Navegação</h4>
          <a href="#home" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal">Início</a>
          <a href="#sobre" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal">Sobre</a>
          <a href="#servicos" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal">Serviços</a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">Contato</h4>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal">
            (74) 99964-4051
          </a>
          <a href="https://instagram.com/cavalcantedourado.adv" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal">
            @cavalcantedourado.adv
          </a>
          <a href="mailto:cavalcantedourado.adv@gmail.com" className="text-white/70 hover:text-brand-gold text-sm transition-colors font-normal break-all">
            cavalcantedourado.adv@gmail.com
          </a>
          <span className="text-white/70 text-sm font-normal">Irecê - BA</span>
          <span className="text-white font-bold text-sm uppercase tracking-tighter mt-2 border-t border-white/10 pt-2 w-full">OAB/BA 89.622</span>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">© {new Date().getFullYear()} {BRAND_FULL}</p>
        <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
          Desenvolvido por <a href="https://instagram.com/jurissites" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">@jurissites</a>
        </p>
      </div>
    </div>
  </footer>
);

const WhatsAppBtn = () => (
  <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
    initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:1.5,duration:0.5}}
    whileHover={{scale:1.05,y:-4}}
    className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl group transition-all">
    <div className="relative">
      <MessageCircle size={24}/>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] animate-ping"/>
    </div>
    <span className="text-xs font-bold tracking-[0.1em] hidden sm:block uppercase">Falar com a Dra. Aline</span>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Process/>
      <Contact/>
      <Footer/>
      <WhatsAppBtn/>
    </div>
  );
}
