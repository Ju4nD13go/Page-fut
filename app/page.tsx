"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Facebook, Instagram, Mail, MessageCircle, ChevronDown, Trophy, Target, Users, Heart, Shield, Flame, Star, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedUniform, setSelectedUniform] = useState<'both' | 'titular' | 'alternativo'>('both')
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', email: '', telefono: '', edad: '', categoria: '', mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({ nombre: '', apellido: '', email: '', telefono: '', edad: '', categoria: '', mensaje: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Error al enviar el formulario' })
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Error de conexión. Por favor, intenta de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const navLinks = [
    { href: "#inicio", label: "INICIO" },
    { href: "#nosotros", label: "NOSOTROS" },
    { href: "#metodologia", label: "METODOLOGÍA" },
    { href: "#entrenadores", label: "ENTRENADORES" },
    { href: "#categorias", label: "CATEGORÍAS" },
    { href: "#uniforme", label: "UNIFORME" },
    { href: "#contacto", label: "CONTACTO" },
  ]

  const categorias = [
    {
      nombre: "Iniciación", edades: "5 – 7 años", icon: "🌱",
      color: "from-red-500 to-red-700",
      items: ["Desarrollo motriz básico", "Coordinación y equilibrio", "Juegos lúdicos y recreativos", "Primer contacto con el balón"]
    },
    {
      nombre: "Formación", edades: "8 – 10 años", icon: "⚽",
      color: "from-red-600 to-red-800",
      items: ["Fundamentos técnicos (pase, control, conducción)", "Juegos reducidos", "Introducción a la táctica básica", "Desarrollo de la coordinación"]
    },
    {
      nombre: "Desarrollo", edades: "11 – 13 años", icon: "🎯",
      color: "from-gray-800 to-black",
      items: ["Mejora técnica individual", "Toma de decisiones", "Principios tácticos ofensivos y defensivos", "Inicio del pensamiento estratégico"]
    },
    {
      nombre: "Perfeccionamiento", edades: "14 – 16 años", icon: "🔥",
      color: "from-red-700 to-black",
      items: ["Entrenamiento físico estructurado", "Sistemas de juego", "Competencia formal", "Especialización por posiciones"]
    },
    {
      nombre: "Alto Rendimiento", edades: "17 – 18 años", icon: "🏆",
      color: "from-black to-red-900",
      items: ["Preparación competitiva avanzada", "Estrategia de juego", "Alto nivel físico y mental", "Proyección a clubes profesionales"]
    },
  ]

  const valores = [
    { icon: <Shield size={24} />, nombre: "Disciplina", desc: "Base del crecimiento deportivo y personal" },
    { icon: <Heart size={24} />, nombre: "Respeto", desc: "Hacia compañeros, entrenadores y rivales" },
    { icon: <Target size={24} />, nombre: "Responsabilidad", desc: "Compromiso con el proceso formativo" },
    { icon: <Users size={24} />, nombre: "Trabajo en equipo", desc: "Entender el fútbol como juego colectivo" },
    { icon: <Flame size={24} />, nombre: "Compromiso", desc: "Entrega total en cada entrenamiento" },
    { icon: <Star size={24} />, nombre: "Perseverancia", desc: "Superar obstáculos y mejorar constantemente" },
    { icon: <Trophy size={24} />, nombre: "Honestidad", desc: "Actuar con integridad dentro y fuera del campo" },
  ]

  return (
    <div className="w-full" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50">
        <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-xs sm:text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
            <Link href="#contacto" className="font-semibold hover:underline flex items-center gap-2">
              <span>🔥 Inscripciones Abiertas</span>
              <span className="hidden sm:inline">–</span>
              <span className="bg-white/20 px-3 py-0.5 rounded-full">INSCRIBIRSE AHORA</span>
            </Link>
          </div>
        </div>

        <nav className="bg-black/95 backdrop-blur-xl border-t border-red-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-1.5 sm:py-2.5">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-1.5 shadow-lg border border-red-600/30 flex items-center justify-center shrink-0">
                  <div className="relative w-full h-full">
                    <Image src="/escudo.png" alt="Barkley FC" fill
                      className="object-contain transition-transform group-hover:scale-110 duration-300" priority />
                  </div>
                </div>
                <div className="flex flex-col leading-none text-left">
                  <span className="font-extrabold text-sm sm:text-base lg:text-lg text-white tracking-tight">BARBACOAS FC</span>
                  <span className="text-[9px] sm:text-[10px] text-red-400 font-semibold tracking-[0.18em] mt-1">- FORMACIÓN DEPORTIVA</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className="px-2.5 xl:px-3 py-1.5 text-white font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 rounded-lg border-b-2 border-transparent hover:border-red-500">
                    {link.label}
                  </Link>
                ))}
                <Link href="#contacto">
                  <button className="ml-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-bold text-sm xl:text-base hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/40 border border-red-500/30">
                    INSCRIBIRSE
                  </button>
                </Link>
              </div>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle mobile menu">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden bg-gray-900/98 border-t border-red-600/30">
              <div className="flex flex-col px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors border-l-4 border-transparent hover:border-red-500"
                    onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <button className="mt-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors w-full"
                  onClick={() => setMobileMenuOpen(false)}>INSCRIBIRSE</button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section id="inicio"
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 lg:pt-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <motion.div className="absolute top-10 left-5 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-red-600 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-5 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-red-800 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500 rounded-full opacity-5 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6 sm:mb-8">
              <motion.div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-[0_0_50px_rgba(233,50,12,0.25)] border-4 border-red-600 flex items-center justify-center overflow-hidden p-6 sm:p-8"
                animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <div className="relative w-full h-full">
                  <Image src="/escudo.png" alt="Barkley FC - Escudo Oficial" fill
                    className="object-contain drop-shadow-xl" priority />
                </div>
              </motion.div>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-red-400 font-semibold text-sm sm:text-base tracking-[0.3em] uppercase mb-4">
              Formación Deportiva
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 px-2 leading-tight">
              Formando <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Talento</span>,{" "}
              Construyendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Futuro</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              Academia de formación futbolística comprometida con el desarrollo integral de niños y jóvenes
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="#categorias">
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all text-base sm:text-lg w-full sm:w-auto shadow-xl shadow-red-600/30 hover:shadow-red-600/50">
                  Explorar Categorías
                </button>
              </Link>
              <Link href="#contacto">
                <button className="border-2 border-red-400/50 text-red-300 px-8 py-4 rounded-2xl font-bold hover:bg-red-500/10 transition-all text-base sm:text-lg w-full sm:w-auto backdrop-blur-sm">
                  Contáctanos
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1"
            animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="text-gray-400 text-sm">Descubre más</div>
            <ChevronDown className="text-red-400" size={24} />
          </motion.div>
        </div>
      </motion.section>

      {/* ¿Quiénes Somos? */}
      <section id="nosotros" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
        <motion.div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm tracking-[0.2em] uppercase">Conócenos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">¿Quiénes Somos?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900 text-xl">Barkley FC</span> es una academia de formación futbolística comprometida con el desarrollo integral de niños y jóvenes, que nace con el propósito de formar no solo deportistas, sino también personas con <span className="font-semibold text-red-600">valores, disciplina y visión de futuro</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Nuestra identidad tiene raíces en <strong>Barbacoas, Nariño</strong>, lo que nos permite conservar un fuerte sentido de pertenencia, cultura y orgullo. Al mismo tiempo, desarrollamos nuestras actividades en la ciudad de <strong>Cali, Valle del Cauca</strong>, un entorno con mayores oportunidades deportivas, infraestructura y proyección competitiva.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                En Barkley FC creemos que el fútbol es una <span className="font-semibold text-red-600">herramienta de transformación social</span>. Por eso, nuestro enfoque va más allá del rendimiento deportivo: buscamos impactar positivamente la vida de cada niño, brindándole herramientas para su crecimiento personal, social y académico.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🌍", label: "Identidad", sub: "Cali, Valle del Cauca" },
                { icon: "🏙️", label: "Proyección", sub: "Cali, Valle del Cauca" },
                { icon: "⚽", label: "Propósito", sub: "Transformación social" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:border-red-500 transition-all text-center">
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-sm text-red-600 font-medium">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión - Visión */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Misión", icon: "🎯",
                gradient: "from-red-600 to-red-800",
                text: "Formar niños y jóvenes a través del fútbol, desarrollando sus capacidades físicas, técnicas, tácticas y cognitivas, dentro de un ambiente educativo basado en valores como el respeto, la disciplina, la responsabilidad y el trabajo en equipo. Nos enfocamos en un proceso de formación integral que permita a cada deportista alcanzar su máximo potencial, no solo en el ámbito deportivo, sino también en su desarrollo personal y social."
              },
              {
                title: "Visión", icon: "🔭",
                gradient: "from-gray-900 to-black",
                text: "Para el año 2030, Barkley FC será reconocida como una academia líder en formación futbolística en la ciudad de Cali y el departamento del Valle del Cauca, destacándose por la calidad de sus procesos formativos, su metodología de entrenamiento y la proyección de talentos hacia el fútbol competitivo y profesional."
              },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.2 }} whileHover={{ y: -6 }} className="group">
                <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 sm:p-8 text-white h-full shadow-xl hover:shadow-2xl transition-all relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm tracking-[0.2em] uppercase">Nuestros Principios</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">Valores que Nos Definen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">En Barkley FC formamos bajo principios que construyen personas</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {valores.map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -8, scale: 1.03 }}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-red-500 transition-all h-full text-center group">
                  <div className="bg-gradient-to-br from-red-500 to-red-700 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{val.nombre}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque Metodológico */}
      <section id="metodologia" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-red-950 text-white relative overflow-hidden scroll-mt-24">
        <motion.div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 40, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-red-400 font-semibold text-sm tracking-[0.2em] uppercase">Ciencia del Deporte</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-4">Enfoque Metodológico</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Nuestra metodología se fundamenta en principios modernos del entrenamiento deportivo</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-400 mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "📈", title: "Desarrollo a Largo Plazo", desc: "Modelo LTAD del deportista" },
              { icon: "🧠", title: "Entrenamiento Integral", desc: "Técnico, táctico, físico y psicológico" },
              { icon: "🎮", title: "Aprendizaje Basado en el Juego", desc: "Metodología activa y divertida" },
              { icon: "📊", title: "Adaptación por Edad", desc: "Según la etapa de desarrollo" },
              { icon: "👦", title: "Centrado en el Niño", desc: "Formación por encima del resultado" },
              { icon: "⚡", title: "Progresión Continua", desc: "Evolución constante y medible" },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all h-full group hover:bg-white/10">
                  <motion.span className="text-3xl block mb-3" whileHover={{ scale: 1.3, rotate: 10 }}>{item.icon}</motion.span>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entrenadores */}
      <section id="entrenadores" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm tracking-[0.2em] uppercase">Cuerpo Técnico</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">Nuestros Entrenadores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Profesionales capacitados y apasionados por la formación deportiva integral.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch justify-center max-w-5xl mx-auto">
            {/* Christian */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100 hover:border-red-500 transition-all group overflow-hidden relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full overflow-hidden border-4 border-red-500 mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <Image src="/christian.png" alt="Christian Eduardo Hurtado" fill className="object-cover object-top" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center group-hover:text-red-600 transition-colors">Christian Eduardo Hurtado - Directivo</h3>
                  <div className="w-12 h-1 bg-red-500 rounded-full mb-4" />
                  <ul className="text-gray-600 text-center space-y-2 text-sm sm:text-base font-medium flex-grow">
                    <li>Tarjeta profesional</li>
                    <li>Licencia C</li>
                    <li>Carnets de liga</li>
                    <li>Profesional en deportes</li>
                    <li>Especializado en mercadeo deportivo</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Dainer */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100 hover:border-red-500 transition-all group overflow-hidden relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full overflow-hidden border-4 border-red-500 mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <Image src="/dai.jpeg" alt="Dainer Miguel Cortes Ferrin - Directivo" fill className="object-cover object-top" priority />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center group-hover:text-red-600 transition-colors">Dainer Miguel Cortes Ferrin - Directivo</h3>
                  <div className="w-12 h-1 bg-gray-800 rounded-full mb-4 group-hover:bg-red-500 transition-colors" />
                  <ul className="text-gray-600 text-center space-y-2 text-sm sm:text-base font-medium flex-grow">
                    <li>Licenciado en Ciencias del Deporte<br />y la Educación Física</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categorías de Formación */}
      <section id="categorias" className="py-16 sm:py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm tracking-[0.2em] uppercase">Fútbol Base</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">Categorías de Formación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Programas adaptados para cada etapa del desarrollo futbolístico</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categorias.map((cat, idx) => (
              <motion.button key={idx} onClick={() => setActiveCategory(idx)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${activeCategory === idx
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                <span className="mr-1 sm:mr-2">{cat.icon}</span> {cat.nombre}
              </motion.button>
            ))}
          </div>

          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto">
            <div className={`bg-gradient-to-br ${categorias[activeCategory].color} rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl sm:text-6xl">{categorias[activeCategory].icon}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">{categorias[activeCategory].nombre}</h3>
                    <p className="text-white/80 font-semibold text-lg">{categorias[activeCategory].edades}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorias[activeCategory].items.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 backdrop-blur-sm">
                      <span className="text-white font-bold">✓</span>
                      <span className="text-sm sm:text-base font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uniforme Oficial */}
      <section id="uniforme" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden scroll-mt-24">
        <motion.div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full opacity-10 blur-[120px]" />
        <motion.div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-600 rounded-full opacity-10 blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-red-400 font-semibold text-sm tracking-[0.2em] uppercase">Indumentaria Oficial</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Nuestra Indumentaria</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">Porta con orgullo los uniformes oficiales de Barkley FC: diseño de élite y máxima pasión en la cancha</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-400 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Selector de Uniformes */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'both', label: 'Ver Ambos' },
              { id: 'titular', label: 'Uniforme Titular' },
              { id: 'alternativo', label: 'Uniforme Alternativo' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedUniform(tab.id as 'both' | 'titular' | 'alternativo')}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${selectedUniform === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Uniformes */}
          <div className={`grid gap-8 lg:gap-10 items-stretch ${selectedUniform === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'max-w-3xl mx-auto grid-cols-1'
            }`}>
            {/* Uniforme 1 - Titular */}
            {(selectedUniform === 'both' || selectedUniform === 'titular') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-white/10 hover:border-red-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30">
                      Uniforme 1 • Titular
                    </span>
                    <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Local</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Camiseta Titular <span className="text-red-400">Negro & Rojo</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    Nuestra indumentaria titular luce una elegante base negra con franja vertical carmesí central delimitada por líneas blancas. Simboliza la fuerza, la garra y la disciplina con la que nuestros jugadores compiten.
                  </p>

                  {/* Imagen Uniforme 1 */}
                  <div className="relative h-[380px] sm:h-[430px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800/40 via-gray-900/60 to-black/80 border border-white/10 mb-6 flex items-center justify-center p-4">
                    <Image
                      src="/uniforme1.jpeg"
                      alt="Uniforme 1 Titular - Barkley FC"
                      fill
                      className="object-contain p-2 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">Colores Oficiales</h4>
                    <div className="flex items-center gap-4">
                      {[
                        { name: "Negro", hex: "bg-black border border-white/20" },
                        { name: "Rojo Barkley", hex: "bg-red-600" },
                        { name: "Blanco", hex: "bg-white text-gray-900" },
                      ].map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full ${c.hex} shadow-md`} />
                          <span className="text-xs text-gray-300 font-medium">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <div className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/10 flex items-center gap-2">
                      <span></span> Escudo Barkley FC
                    </div>
                    <div className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/10 flex items-center gap-2">
                      <span></span> Cuello 'V' Atlético
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Uniforme 2 - Alternativo */}
            {(selectedUniform === 'both' || selectedUniform === 'alternativo') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: selectedUniform === 'both' ? 0.15 : 0 }}
                className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-white/10 hover:border-orange-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-600/20 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-600/20 text-orange-400 border border-orange-500/30">
                      Uniforme 2 • Alternativo
                    </span>
                    <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Visitante</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Camiseta Alternativa <span className="text-orange-400">Blanco & Naranja</span>
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    Diseñada con una base blanca y un dinámico patrón chevron geométrico en degradé de tonos naranja y terracota en pecho y mangas. Refleja energía, modernidad y la vitalidad de nuestra cantera.
                  </p>

                  {/* Imagen Uniforme 2 */}
                  <div className="relative h-[380px] sm:h-[430px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800/40 via-gray-900/60 to-black/80 border border-white/10 mb-6 flex items-center justify-center p-4">
                    <Image
                      src="/uniforme2.jpeg"
                      alt="Uniforme 2 Alternativo - Barkley FC"
                      fill
                      className="object-contain p-2 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">Colores Oficiales</h4>
                    <div className="flex items-center gap-4">
                      {[
                        { name: "Blanco", hex: "bg-white" },
                        { name: "Naranja Fuego", hex: "bg-orange-500" },
                        { name: "Terracota", hex: "bg-amber-800" },
                      ].map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full ${c.hex} shadow-md`} />
                          <span className="text-xs text-gray-300 font-medium">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <div className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/10 flex items-center gap-2">
                      <span></span> Patrón Geométrico
                    </div>
                    <div className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/10 flex items-center gap-2">
                      <span></span> Sello Auténtico BF
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Características Generales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10">
            {[
              { icon: "", title: "Diseño Exclusivo", desc: "Identidad Barkley FC" },
              { icon: "", title: "Tela Dry-Fit", desc: "Transpirable y ligera" },
              { icon: "", title: "Escudos Oficiales", desc: "Calidad profesional" },
              { icon: "", title: "Corte Ergonómico", desc: "Libertad de movimiento" },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
              >
                <div className="text-2xl mb-1">{feat.icon}</div>
                <h5 className="font-bold text-white text-sm">{feat.title}</h5>
                <p className="text-xs text-gray-400 mt-0.5">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Impacto Social</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">Barbacoas FC busca generar un impacto positivo en la sociedad</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🤝", title: "Inclusión Social", desc: "A través del deporte" },
              { icon: "🛡️", title: "Prevención", desc: "De problemáticas sociales" },
              { icon: "🏃", title: "Vida Saludable", desc: "Promoción de hábitos sanos" },
              { icon: "🏘️", title: "Tejido Social", desc: "Fortalecimiento comunitario" },
              { icon: "🌟", title: "Oportunidades", desc: "Generación deportiva" },
              { icon: "🏠", title: "Identidad", desc: "Raíces y Proyección" },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5, scale: 1.03 }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all h-full text-center group">
                  <motion.span className="text-4xl block mb-3" whileHover={{ scale: 1.2 }}>{item.icon}</motion.span>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir Barbacoas FC? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">🏆 ¿Por qué elegir Barbacoas FC?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🎓", title: "Formación Integral", desc: "No solo deportiva, sino personal y social" },
              { icon: "🔬", title: "Ciencia del Deporte", desc: "Metodología basada en evidencia científica" },
              { icon: "📚", title: "Valores y Educación", desc: "Enfoque formativo con principios sólidos" },
              { icon: "🚀", title: "Proyección Real", desc: "A nivel competitivo y profesional" },
              { icon: "❤️", title: "Sentido de Pertenencia", desc: "Identidad y orgullo por nuestras raíces" },
              { icon: "🌉", title: "Puente de Oportunidades", desc: "Conectamos talento con el fútbol competitivo" },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-red-500 transition-all h-full group">
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-16 sm:py-20 bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden scroll-mt-24">
        <motion.div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">¡Inscríbete Ahora!</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-white to-red-400 mx-auto rounded-full mb-4" />
            <p className="text-gray-300 text-lg">Comienza tu camino hacia la excelencia futbolística</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre *</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Tu nombre" required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Apellido *</label>
                  <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} placeholder="Tu apellido" required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="tu@email.com" required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="+57 321 687 9114" required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Edad del Jugador *</label>
                  <input type="number" name="edad" value={formData.edad} onChange={handleInputChange} placeholder="Edad" min="5" max="18" required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Categoría de Interés *</label>
                  <select name="categoria" value={formData.categoria} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-gray-800">Selecciona una categoría</option>
                    <option value="iniciacion" className="bg-gray-800">Iniciación (5-7 años)</option>
                    <option value="formacion" className="bg-gray-800">Formación (8-10 años)</option>
                    <option value="desarrollo" className="bg-gray-800">Desarrollo (11-13 años)</option>
                    <option value="perfeccionamiento" className="bg-gray-800">Perfeccionamiento (14-16 años)</option>
                    <option value="alto-rendimiento" className="bg-gray-800">Alto Rendimiento (17-18 años)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje (Opcional)</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} placeholder="Cuéntanos sobre tu experiencia previa o consultas..."
                  rows={4} className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none" />
              </div>
              {submitStatus && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center font-semibold ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-100 border border-green-500/30' : 'bg-red-500/20 text-red-100 border border-red-500/30'}`}>
                  {submitStatus.message}
                </motion.div>
              )}
              <div className="text-center pt-2">
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.05 }} whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl ${isSubmitting ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-red-500/30'
                    }`}>
                  {isSubmitting ? 'Enviando... ⏳' : 'Enviar Inscripción 🚀'}
                </motion.button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4 text-center">O contáctanos directamente:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm">
                <a href="https://wa.me/573216879114?text=Hola,%20me%20gustaría%20información%20sobre%20Barbacoas%20FC" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                  <MessageCircle size={18} /> WhatsApp: 3216879114
                </a>
                <a href="mailto:Barbacoasfc.oficial@gmail.com" className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                  <Mail size={18} /> Barbacoasfc.oficial@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Flotante */}
      <motion.a href="https://wa.me/573216879114?text=Hola,%20me%20gustaría%20información%20sobre%20Barbacoas%20FC"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}>
          <MessageCircle size={28} />
        </motion.div>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-black text-white pt-12 sm:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-lg border border-red-600/20">
                  <div className="relative w-full h-full">
                    <Image src="/escudo.png" alt="Barkley FC" fill className="object-contain" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg block leading-tight">Barbacoas FC</span>
                  <span className="text-red-400 text-[10px] tracking-widest">FORMACIÓN DEPORTIVA</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm italic">&ldquo;Formando talento, construyendo futuro&rdquo;</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} className="text-red-500" />
                <span>Barbacoas, Nariño → Cali, Valle del Cauca</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-red-400 text-sm sm:text-base">Menú</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href} className="hover:text-red-400 transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-red-400 text-sm sm:text-base">Contacto</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-2"><MessageCircle size={14} /> WhatsApp: 3216879114</li>
                <li className="flex items-center gap-2"><Mail size={14} /> Barbacoasfc.oficial@gmail.com</li>
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" /> Cali, Valle del Cauca<br />Colombia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-red-400 text-sm sm:text-base">Síguenos</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1AMuAZUD3E/?mibextid=wwXIfr", label: "Facebook" },
                  { icon: <Instagram size={18} />, href: "https://instagram.com/barbacoasfc", label: "Instagram" },
                  { icon: <Mail size={18} />, href: "mailto:Barbacoasfc.oficial@gmail.com", label: "Email" },
                  { icon: <MessageCircle size={18} />, href: "https://wa.me/573216879114", label: "WhatsApp" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-all hover:scale-110">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-red-900 my-6 sm:my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Barkley FC – Formación Deportiva. Todos los derechos reservados.</p>
            <p>Formando talento, construyendo futuro ⚽</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
