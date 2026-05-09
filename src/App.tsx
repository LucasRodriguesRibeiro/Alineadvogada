import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, CheckCircle2, Globe, Layout, Zap, MessageCircle, Search, Star, ArrowUpRight } from 'lucide-react';

const WA_LINK = "https://wa.me/5574999249182";

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
    { label: 'Processo', href: '#processo' },
    { label: 'Diferenciais', href: '#diferenciais' },
  ];
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src="/logo-jurissites.png" alt="JurisSites" className="h-10 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-xs font-medium tracking-widest uppercase transition-colors duration-300">{l.label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-3">Solicitar Orçamento</a>
        </div>
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 py-10 flex flex-col items-center gap-8 text-center">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={()=>setOpen(false)} className="text-white/70 hover:text-[#C9A24A] text-sm font-medium tracking-[0.2em] uppercase transition-colors">{l.label}</a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-xs">Solicitar Orçamento</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-24 pb-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-5" style={{background:'radial-gradient(circle,#C9A24A,transparent 70%)'}}/>
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full opacity-3" style={{background:'radial-gradient(circle,#C9A24A,transparent 70%)'}}/>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(201,162,74,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(201,162,74,0.5) 1px,transparent 1px)',backgroundSize:'80px 80px'}}/>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.9,ease:[0.25,0.8,0.25,1]}}>
        <div className="tag-gold mb-6 justify-center">
          <span className="w-5 h-px bg-[#C9A24A]"/>
          Atendimento em todo o Brasil · Projetos personalizados
          <span className="w-5 h-px bg-[#C9A24A]"/>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6" style={{fontFamily:'Cormorant Garamond,serif',fontWeight:300}}>
          Sites que posicionam{' '}
          <span className="text-gold-gradient italic">advogados</span>
          <br/>como referência no digital
        </h1>
        <p className="text-white/55 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          Para advogados que desejam crescer sua autoridade e seu escritório com uma presença digital profissional e estratégica.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            Solicitar Orçamento <ArrowRight size={15}/>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
            <MessageCircle size={15}/> Falar no WhatsApp
          </a>
        </div>
        <p className="tag-gold justify-center text-[10px] opacity-60">
          Atendimento em todo o Brasil · Projetos personalizados
        </p>
      </motion.div>
    </div>
    <motion.div animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20">
      <ChevronDown size={20}/>
    </motion.div>
  </section>
);

const AboutUs = () => (
  <section id="sobre" className="section-padding bg-section-card border-y border-white/5 overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="tag-gold mb-5 justify-center lg:justify-start">
            <span className="w-5 h-px bg-[#C9A24A]"/> Sobre a JurisSites
          </div>
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond,serif' }}>
            A união entre o <span className="text-gold-gradient italic">Direito</span> e a <span className="text-gold-gradient italic">Tecnologia</span>
          </h2>
          <div className="gold-divider mx-auto lg:ml-0 mb-8"/>
          
          <div className="space-y-6 text-white/70 text-sm lg:text-base leading-relaxed font-light">
            <p>
              A JurisSites nasceu da união de duas visões complementares para resolver um problema real: a dificuldade que grandes advogados enfrentam para transmitir sua autoridade no mundo digital.
            </p>
            <p>
              Fundada por <span className="text-white font-medium">Layla Marreta</span>, advogada que entende profundamente as dores e a ética do mercado jurídico, e <span className="text-white font-medium">Lucas Rodrigues</span>, analista de sistemas e marketing estratégico, nossa agência combina o rigor técnico do Direito com a inovação da tecnologia.
            </p>
            <div className="card-premium p-6 border-l-2 border-l-[#C9A24A] bg-[#C9A24A]/5">
              <h4 className="text-[#C9A24A] font-medium mb-2 text-xs tracking-widest uppercase">Nossa Missão</h4>
              <p className="text-white/80 italic">
                "Transformar a presença digital de advogados através de tecnologia e marketing estratégico, garantindo que sua autoridade no mundo real seja refletida com excelência no digital."
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#C9A24A]/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 rounded-sm">
            <img 
              src="/images/lucas-e-layla.png" 
              alt="Lucas e Layla - Fundadores da JurisSites" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"/>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white font-light text-xl" style={{ fontFamily: 'Cormorant Garamond,serif' }}>Lucas & Layla</div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Fundadores JurisSites</div>
            </div>
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-12 grid grid-cols-1 gap-2">
            <div className="card-premium py-3 px-5 rounded-sm whitespace-nowrap shadow-2xl">
              <div className="text-lg text-[#C9A24A] font-light" style={{ fontFamily: 'Cormorant Garamond,serif' }}>100%</div>
              <div className="text-white/40 text-[9px] uppercase tracking-wider">Foco Jurídico</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="section-padding bg-section-dark">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
        <div className="tag-gold justify-center mb-5">
          <span className="w-5 h-px bg-[#C9A24A]"/> O problema
          <span className="w-5 h-px bg-[#C9A24A]"/>
        </div>
        <h2 className="text-3xl lg:text-5xl font-light text-white mb-4 leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
          Você está sendo <span className="text-gold-gradient italic">escolhido</span> ou ignorado no digital?
        </h2>
        <div className="gold-divider-center mb-8"/>
        <p className="text-white/55 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-4">
          Antes de entrar em contato, o cliente pesquisa, compara e analisa quem transmite mais confiança.
        </p>
        <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Se sua presença digital não acompanha o nível do seu trabalho, você perde espaço — mesmo sendo um excelente advogado.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            'Seu perfil não transmite autoridade',
            'Você não aparece com relevância no Google',
            'Seu posicionamento digital é fraco ou inexistente',
            'Outros advogados estão sendo escolhidos no seu lugar',
          ].map(item => (
            <div key={item} className="card-premium rounded-sm p-5 flex items-start gap-3 text-left">
              <span className="text-[#C9A24A] mt-0.5 shrink-0">✕</span>
              <span className="text-white/60 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Solution = () => (
  <section className="section-padding bg-section-card border-y border-white/5">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
        <div className="tag-gold justify-center mb-5">
          <span className="w-5 h-px bg-[#C9A24A]"/> A solução
          <span className="w-5 h-px bg-[#C9A24A]"/>
        </div>
        <h2 className="text-3xl lg:text-5xl font-light text-white mb-4 leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
          Posicionamento digital que gera{' '}
          <span className="text-gold-gradient italic">oportunidades reais</span>
        </h2>
        <div className="gold-divider-center mb-8"/>
        <p className="text-white/55 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-4">
          Desenvolvemos sites jurídicos com foco em posicionamento, clareza e conversão.
        </p>
        <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
          Cada detalhe é pensado para valorizar sua imagem profissional e facilitar o contato com potenciais clientes.
        </p>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const items = [
    { icon: <Globe size={22}/>, title: 'Sites profissionais personalizados', desc: 'Projetos únicos que refletem sua identidade profissional e transmitem credibilidade imediata.' },
    { icon: <Layout size={22}/>, title: 'Landing pages estratégicas', desc: 'Páginas focadas em conversão, criadas para transformar visitantes em clientes potenciais.' },
    { icon: <Zap size={22}/>, title: 'Estrutura de conversão', desc: 'Arquitetura de informação pensada para guiar o cliente ao contato de forma natural.' },
    { icon: <MessageCircle size={22}/>, title: 'Integração com WhatsApp', desc: 'Contato direto e imediato com seus clientes, integrado de forma estratégica ao site.' },
  ];
  return (
    <section id="servicos" className="section-padding bg-section-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} className="mb-16 lg:mb-20 text-center lg:text-left">
          <div className="tag-gold mb-5 justify-center lg:justify-start"><span className="w-5 h-px bg-[#C9A24A]"/> Serviços</div>
          <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
            Soluções para advogados que <span className="text-gold-gradient italic">querem crescer</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.1}}
              className="card-premium rounded-sm p-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center text-[#C9A24A] bg-[#C9A24A]/10">{item.icon}</div>
              <h3 className="text-white font-medium text-sm leading-snug">{item.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { n: '01', title: 'Diagnóstico', desc: 'Entendemos seu perfil, público e objetivos para construir a estratégia certa.' },
    { n: '02', title: 'Planejamento', desc: 'Definimos arquitetura, copy e estrutura de conversão do seu site.' },
    { n: '03', title: 'Criação', desc: 'Desenvolvemos um site premium, moderno e alinhado com sua identidade.' },
    { n: '04', title: 'Entrega', desc: 'Publicamos, testamos e entregamos com suporte completo na transição.' },
  ];
  return (
    <section id="processo" className="section-padding bg-section-card border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16 lg:mb-20">
          <div className="tag-gold justify-center mb-5"><span className="w-5 h-px bg-[#C9A24A]"/> Como funciona <span className="w-5 h-px bg-[#C9A24A]"/></div>
          <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
            Um processo simples, estratégico <span className="text-gold-gradient italic">e eficiente</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.12}}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#C9A24A]/30 to-transparent z-0"/>}
              <div className="relative z-10">
                <div className="step-number mb-2">{s.n}</div>
                <div className="w-8 h-px bg-[#C9A24A]/40 mb-4 mx-auto lg:ml-0"/>
                <h3 className="text-white font-semibold text-sm mb-3 tracking-wide">{s.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    'Especialização no mercado jurídico',
    'Foco em posicionamento e resultado',
    'Projetos personalizados',
    'Design moderno e profissional',
    'Atendimento próximo e estratégico',
  ];
  return (
    <section id="diferenciais" className="section-padding bg-section-dark">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}} className="text-center lg:text-left">
          <div className="tag-gold mb-5 justify-center lg:justify-start"><span className="w-5 h-px bg-[#C9A24A]"/> Diferenciais</div>
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
            Por que escolher <span className="text-gold-gradient italic">a JurisSites</span>
          </h2>
          <div className="gold-divider mx-auto lg:ml-0 mb-8"/>
          <div className="space-y-4 inline-block text-left">
            {items.map((item, i) => (
              <motion.div key={item} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}}
                className="flex items-center gap-4">
                <CheckCircle2 size={16} className="text-[#C9A24A] shrink-0"/>
                <span className="text-white/70 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}
          className="card-premium rounded-sm p-10 lg:p-12">
          <div className="tag-gold mb-6"><span className="w-5 h-px bg-[#C9A24A]"/> Resultados</div>
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
            O impacto de um posicionamento <span className="text-gold-gradient italic">profissional</span>
          </h3>
          <div className="space-y-5">
            {['Mais autoridade','Mais visibilidade','Mais confiança','Mais oportunidades de clientes'].map((r, i) => (
              <div key={r} className="flex items-center gap-4 pb-5 border-b border-white/5 last:border-0 last:pb-0">
                <span className="text-[#C9A24A] font-light text-lg" style={{fontFamily:'Cormorant Garamond,serif'}}>0{i+1}</span>
                <span className="text-white/75 text-sm font-medium">{r}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section-padding relative overflow-hidden bg-section-card border-t border-white/5">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{background:'radial-gradient(ellipse,rgba(201,162,74,0.08) 0%,transparent 70%)'}}/>
    </div>
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
        <div className="tag-gold justify-center mb-5">
          <span className="w-5 h-px bg-[#C9A24A]"/> Próximo passo <span className="w-5 h-px bg-[#C9A24A]"/>
        </div>
        <h2 className="text-3xl lg:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily:'Cormorant Garamond,serif'}}>
          Eleve seu posicionamento <span className="text-gold-gradient italic">no digital</span>
        </h2>
        <div className="gold-divider-center mb-8"/>
        <p className="text-white/55 text-sm lg:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Se você deseja crescer sua autoridade e fortalecer seu escritório, o primeiro passo é ter uma presença digital à altura do seu trabalho.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            Solicitar meu site profissional <ArrowRight size={15}/>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
            <MessageCircle size={15}/> Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#080808] border-t border-white/5 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src="/logo-jurissites.png" alt="JurisSites" className="h-8 w-auto object-contain" />
        <div className="text-white/35 text-xs">Sites para Advogados</div>
      </div>
      <p className="text-white/25 text-xs text-center">Atendimento em todo o Brasil</p>
      <p className="text-white/25 text-xs">© {new Date().getFullYear()} JurisSites. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const WhatsAppBtn = () => (
  <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
    initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:1.2,duration:0.4}}
    whileHover={{scale:1.05,y:-2}}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl animate-pulse-gold group">
    <MessageCircle size={20}/>
    <span className="text-xs font-semibold tracking-wide hidden sm:block">Falar no WhatsApp</span>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Problem/>
      <Solution/>
      <Services/>
      <Process/>
      <Differentials/>
      <FinalCTA/>
      <Footer/>
      <WhatsAppBtn/>
    </div>
  );
}
