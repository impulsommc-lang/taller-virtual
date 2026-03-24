import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  MonitorPlay, 
  Zap, 
  ArrowRight, 
  X, 
  ChevronDown,
  ChevronUp, 
  Star, 
  MessageCircle, 
  Code2, 
  LayoutTemplate, 
  Rocket,
  ShieldCheck,
  PlayCircle,
  Calendar,
  Tag
} from 'lucide-react';

// --- DATA STRUCTURES (Simulating /data/ files) ---

const WA_NUMBER = "51960873225";
const WA_MESSAGE = "Hola, terminé el quiz. Quiero asegurar mi cupo para el Taller de Páginas Web de este sábado a las 8pm (S/ 80).";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const QUIZ_DATA = [
  {
    question: "¿Cuál es tu nivel de experiencia creando páginas web?",
    options: [
      { id: "q1-1", text: "Ninguno (Empiezo de cero)" },
      { id: "q1-2", text: "Básico (He usado plantillas antes)" },
      { id: "q1-3", text: "Intermedio (Conozco algo de código)" }
    ]
  },
  {
    question: "¿Para qué necesitas una página web?",
    options: [
      { id: "q2-1", text: "Página para vender mis servicios" },
      { id: "q2-2", text: "Catálogo para mi negocio" },
      { id: "q2-3", text: "Portafolio profesional" }
    ]
  },
  {
    question: "¿Qué te ha impedido lanzarla hasta ahora?",
    options: [
      { id: "q3-1", text: "Falta de tiempo" },
      { id: "q3-2", text: "Presupuesto limitado" },
      { id: "q3-3", text: "No saber por dónde empezar" }
    ]
  }
];

const CURRICULUM = [
  { time: "Minuto 0-15", title: "Estructura y diseño ganador", desc: "Aprende la anatomía de una página que convierte visitas en clientes.", icon: LayoutTemplate },
  { time: "Minuto 15-30", title: "Creando el contenido sin estrés", desc: "Fórmulas sencillas para escribir textos persuasivos rápidamente.", icon: Code2 },
  { time: "Minuto 30-45", title: "Configurando herramientas clave", desc: "Conecta tu dominio, WhatsApp y formularios de contacto.", icon: Zap },
  { time: "Minuto 45-60", title: "Publicación y lanzamiento en vivo", desc: "Haz clic en 'Publicar' y comparte tu nueva web con el mundo.", icon: Rocket }
];

const BENEFITS = [
  { title: "100% Práctico", desc: "Paso a paso, clic a clic. Cero teoría aburrida.", icon: MonitorPlay },
  { title: "Herramientas Gratuitas", desc: "No gastarás dinero extra en software o plataformas caras.", icon: ShieldCheck },
  { title: "Acceso de por vida", desc: "Vuelve a ver la grabación del taller cuantas veces quieras.", icon: PlayCircle },
  { title: "Plantillas de regalo", desc: "Estructuras pre-diseñadas listas para rellenar con tu información.", icon: CheckCircle2 }
];

const FAQS = [
  { q: "¿Necesito conocimientos previos?", a: "No, en absoluto. El taller está diseñado para principiantes absolutos. Empezamos desde cero y te guiamos paso a paso." },
  { q: "¿Las herramientas que usaremos son de pago?", a: "Te enseñaremos a utilizar herramientas gratuitas de nivel profesional. Solo invertirás si decides comprar tu propio dominio (opcional)." },
  { q: "¿Qué pasa si no puedo asistir en vivo?", a: "No te preocupes. Todos los inscritos reciben la grabación completa en alta calidad y las plantillas para verlo a su propio ritmo." }
];

// --- COMPONENTS ---

const Navbar = ({ onStartQuiz }: { onStartQuiz: () => void }) => (
  <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-violet-500 fill-violet-500" />
        <span className="font-bold text-xl tracking-tight text-white">WebEn<span className="text-violet-500">60</span></span>
      </div>
      <button 
        onClick={onStartQuiz}
        className="text-sm font-semibold bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors"
      >
        Evaluar mi perfil
      </button>
    </div>
  </nav>
);

const Hero = ({ onStartQuiz }: { onStartQuiz: () => void }) => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Taller Virtual Intensivo En Vivo
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Crea tu propia página web profesional en <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">solo 60 minutos.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sin experiencia previa, sin programar y listo para lanzar hoy mismo. Descubre si este taller interactivo es exactamente lo que necesitas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-3 rounded-full border border-slate-800 shadow-sm">
            <Calendar className="w-5 h-5 text-violet-400" />
            <span className="font-medium">Sábado, 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-3 rounded-full border border-slate-800 shadow-sm">
            <Tag className="w-5 h-5 text-green-400" />
            <span className="font-medium">Inversión: S/ 80</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 group"
          >
            ¿Este taller es para mí?
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#temario"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold text-lg transition-colors flex items-center justify-center"
          >
            Ver temario
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const CurriculumSection = () => (
  <section id="temario" className="py-24 bg-slate-900 border-y border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qué aprenderás paso a paso</h2>
        <p className="text-slate-400 text-lg">Un método probado para ir de cero a publicado en una hora.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {CURRICULUM.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex gap-4 hover:border-violet-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <div className="text-violet-400 text-sm font-bold mb-1">{item.time}</div>
              <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-24 bg-slate-950">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Todo lo que incluye el taller</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((item, idx) => (
          <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-800 flex items-center justify-center mb-4">
              <item.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InstructorTestimonialSection = () => (
  <section className="py-24 bg-slate-900 border-y border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Instructor */}
        <div>
          <span className="text-violet-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Sobre el Instructor</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Aprende con un experto en producto y diseño.</h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            He ayudado a cientos de emprendedores y freelancers a lanzar su presencia digital sin complicaciones técnicas. Mi objetivo es que dejes de procrastinar y tengas tu web lista hoy mismo, usando las mejores prácticas de la industria de forma simplificada.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-violet-500 overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=1e293b" alt="Instructor" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Alex Dev</div>
              <div className="text-slate-400 text-sm">Senior Frontend & UX Specialist</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={`star1-${i}`} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-slate-300 italic mb-6 text-lg">
              "Pensé que necesitaba saber código o gastar miles en una agencia, pero en una hora ya tenía mi página arriba. El método es increíblemente fácil de seguir."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=1e293b" alt="User" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">María Fernández</div>
                <div className="text-slate-500 text-xs">Consultora Independiente</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative ml-0 lg:ml-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={`star2-${i}`} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-slate-300 italic mb-6 text-lg">
              "Súper práctico y directo al grano. Ahorré muchísimo dinero y tiempo. Ahora mi negocio tiene un catálogo profesional online."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=1e293b" alt="User" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Carlos Ruiz</div>
                <div className="text-slate-500 text-xs">Dueño de Negocio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-semibold text-lg">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    key={`faq-ans-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-violet-500 fill-violet-500" />
        <span className="font-bold text-xl tracking-tight text-white">WebEn<span className="text-violet-500">60</span></span>
      </div>
      <div className="text-slate-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Taller Web en 60 Minutos. Todos los derechos reservados.
      </div>
      <div className="flex gap-6 text-sm text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = ({ isHidden }: { isHidden: boolean }) => (
  <AnimatePresence>
    {!isHidden && (
      <motion.a
        key="floating-wa-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-slate-800">
          ¡Inscríbete ahora!
        </span>
      </motion.a>
    )}
  </AnimatePresence>
);

// --- QUIZ FUNNEL COMPONENT ---

const QuizOverlay = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (answerText: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answerText;
    setAnswers(newAnswers);

    if (currentStep < QUIZ_DATA.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300); // Micro-delay for better UX
    } else {
      // Finish Quiz
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
      }, 2500); // Fake analysis loading
    }
  };

  const progress = showResult ? 100 : (currentStep / QUIZ_DATA.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col"
    >
      {/* Quiz Header & Progress */}
      <div className="w-full max-w-3xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between">
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors">
          <X className="w-6 h-6" />
        </button>
        {!showResult && !isAnalyzing && (
          <span className="text-slate-400 text-sm font-medium">Paso {currentStep + 1} de {QUIZ_DATA.length}</span>
        )}
      </div>
      <div className="w-full h-1.5 bg-slate-900">
        <motion.div 
          className="h-full bg-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Quiz Content Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        <div className="w-full my-auto flex flex-col items-center justify-center py-8">
          <AnimatePresence mode="wait">
          
          {/* FASE 1: PREGUNTAS */}
          {!isAnalyzing && !showResult && (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center leading-tight">
                {QUIZ_DATA[currentStep].question}
              </h2>
              <div className="space-y-4">
                {QUIZ_DATA[currentStep].options.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.text)}
                    className="w-full p-5 md:p-6 text-left bg-slate-900 hover:bg-violet-600 border border-slate-800 hover:border-violet-400 rounded-2xl transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg md:text-xl text-slate-300 group-hover:text-white font-medium">
                      {opt.text}
                    </span>
                    <div className="w-6 h-6 rounded-full border-2 border-slate-700 group-hover:border-white flex items-center justify-center">
                       <div className="w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* FASE 2: ANALIZANDO (Loading state) */}
          {isAnalyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-t-4 border-violet-500 rounded-full animate-spin" />
                <div className="absolute inset-2 border-r-4 border-indigo-400 rounded-full animate-spin direction-reverse opacity-70" />
                <Zap className="absolute inset-0 m-auto w-8 h-8 text-violet-400 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Analizando tus respuestas...</h2>
              <p className="text-slate-400">Preparando tu plan personalizado</p>
            </motion.div>
          )}

          {/* FASE 3: RESULTADO FINAL */}
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl text-center bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-violet-600/30 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  ¡Eres el candidato ideal!
                </h2>
                
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                  El taller está diseñado exactamente para quienes buscan crear su <span className="text-violet-400 font-bold">{answers[1]?.toLowerCase()}</span> y que actualmente están frenados por <span className="text-violet-400 font-bold">{answers[2]?.toLowerCase()}</span>.
                </p>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 text-left">
                  <h3 className="font-semibold text-white mb-4">Tu plan de acción para hoy:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Superar la barrera técnica empezando desde tu nivel ({answers[0]?.split(' ')[0]}).
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Aplicar las plantillas exactas para tu objetivo.
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                      Tener tu web 100% publicada en 60 minutos.
                    </li>
                  </ul>
                </div>

                <div className="mb-8 flex flex-col items-center justify-center gap-2 bg-violet-900/20 py-4 rounded-2xl border border-violet-500/30">
                   <div className="text-3xl md:text-4xl font-extrabold text-white">S/ 80 <span className="text-lg text-slate-400 font-normal">pago único</span></div>
                   <div className="text-violet-300 flex items-center gap-2 font-medium">
                     <Calendar className="w-5 h-5"/> 
                     Clase en vivo: Este Sábado 8:00 PM
                   </div>
                </div>
                
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-xl shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all group"
                >
                  <MessageCircle className="w-6 h-6" />
                  Inscribirme por WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-4 text-sm text-slate-500">Cupos limitados. Atención inmediata por WhatsApp.</p>
              </div>
            </motion.div>
          )}

          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isQuizOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isQuizOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-violet-500/30">
      <Navbar onStartQuiz={() => setIsQuizOpen(true)} />
      
      <main>
        <Hero onStartQuiz={() => setIsQuizOpen(true)} />
        <CurriculumSection />
        <BenefitsSection />
        <InstructorTestimonialSection />
        <FAQSection />
      </main>

      <Footer />
      
      {/* WhatsApp flota visible siempre, excepto cuando el quiz está activo para evitar distracciones */}
      <FloatingWhatsApp isHidden={isQuizOpen} />

      <AnimatePresence>
        {isQuizOpen && <QuizOverlay key="quiz-overlay-main" onClose={() => setIsQuizOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
