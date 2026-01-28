"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Facebook, Instagram, Mail, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    edad: '',
    categoria: '',
    mensaje: ''
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          edad: '',
          categoria: '',
          mensaje: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Error al enviar el formulario' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error de conexión. Por favor, intenta de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {/* Header - Estilo Barkley Academy */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl">
        {/* Top Bar */}
        <div className="bg-red-600 text-white text-xs sm:text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <Link href="#contacto" className="font-semibold hover:underline flex items-center gap-2">
              <span>Inscripciones Abiertas</span>
              <span className="hidden sm:inline">-</span>
              <span>INSCRIBIRSE AHORA</span>
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-gradient-to-r from-black to-gray-900 border-t border-red-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 sm:py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative">
                  <div className="bg-white rounded-full p-1.5 sm:p-2">
                    <Image 
                      src="/barkley-logo.png" 
                      alt="Barkley Academy" 
                      width={60} 
                      height={60} 
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-2xl transition-transform group-hover:scale-110 duration-300" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base sm:text-lg lg:text-xl text-white tracking-tight">Club de Fútbol Formativo Barkley</span>
                  <span className="text-[10px] sm:text-xs text-red-500 font-semibold">Excelencia Deportiva</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                <Link 
                  href="#inicio" 
                  className="px-3 xl:px-4 py-2 text-white font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 rounded-lg border-b-2 border-transparent hover:border-red-600"
                >
                  INICIO
                </Link>
                <Link 
                  href="#categorias" 
                  className="px-3 xl:px-4 py-2 text-white font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 rounded-lg border-b-2 border-transparent hover:border-red-600"
                >
                  CATEGORÍAS
                </Link>
                <Link 
                  href="#galeria" 
                  className="px-3 xl:px-4 py-2 text-white font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 rounded-lg border-b-2 border-transparent hover:border-red-600"
                >
                  GALERÍA
                </Link>
                <Link 
                  href="#contacto" 
                  className="px-3 xl:px-4 py-2 text-white font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 rounded-lg border-b-2 border-transparent hover:border-red-600"
                >
                  CONTACTO
                </Link>
                <button className="ml-2 bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-bold text-sm xl:text-base hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/50 border border-red-500/30">
                  INSCRIBIRSE
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-gray-900 border-t border-red-600/30"
            >
              <div className="flex flex-col px-4 py-4 space-y-2">
                <Link 
                  href="#inicio" 
                  className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors border-l-4 border-transparent hover:border-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  INICIO
                </Link>
                <Link 
                  href="#categorias" 
                  className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors border-l-4 border-transparent hover:border-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CATEGORÍAS
                </Link>
                <Link 
                  href="#galeria" 
                  className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors border-l-4 border-transparent hover:border-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GALERÍA
                </Link>
                <Link 
                  href="#contacto" 
                  className="text-white font-semibold py-3 px-4 hover:bg-white/10 rounded-lg transition-colors border-l-4 border-transparent hover:border-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACTO
                </Link>
                <button 
                  className="mt-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors w-full border border-red-500/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  INSCRIBIRSE
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section - Responsive */}
      <motion.section
        id="inicio"
        className="min-h-screen bg-gradient-to-b from-black via-black to-red-900 flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 lg:pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute top-10 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-red-600 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-5 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-red-800 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-white rounded-full p-4 sm:p-5 md:p-6">
                <Image
                  src="/barkley-logo.png"
                  alt="Barkley Academy Shield"
                  width={200}
                  height={200}
                  className="drop-shadow-2xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2">
              Formamos los <span className="text-red-500">Futbolistas del Futuro</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Formación futbolística con propósito, talento y valores.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-red-700 transition-colors text-base sm:text-lg w-full sm:w-auto">
                Explorar Categorías
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors text-base sm:text-lg w-full sm:w-auto">
                Contacta con Nosotros
              </button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex flex-col items-center gap-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="text-white text-sm sm:text-base">Desplázate para explorar</div>
            <ChevronDown className="text-white" size={24} />
          </motion.div>
        </div>
      </motion.section>

      {/* Misión - Visión - Valores - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Nuestra Identidad
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            >
              Conoce los principios que guían nuestra academia
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Misión",
                description:
                  "Formar niños, niñas y jóvenes futbolistas íntegros mediante procesos de enseñanza–aprendizaje del fútbol, potenciando sus capacidades técnicas, tácticas, físicas, cognitivas y socioemocionales. Promovemos valores deportivos, hábitos saludables, disciplina y convivencia para construir deportistas capaces dentro y fuera del campo.",
                color: "from-black to-red-700",
              },
              {
                title: "Visión",
                description:
                  "Para el año 2035, el Club de Fútbol Formativo Barkley será reconocido como una de las escuelas de fútbol más destacadas del país, por su calidad metodológica, proyección de talentos, impacto social y formación integral de jugadores.",
                color: "from-red-700 to-red-500",
              },
              {
                title: "Valores",
                description: (
                  <>
                    <strong>Disciplina:</strong> Base para el rendimiento deportivo.<br />
                    <strong>Respeto:</strong> Pilar del juego limpio.<br />
                    <strong>Trabajo en equipo:</strong> El equipo como una familia.<br />
                    <strong>Equidad:</strong> Igualdad de oportunidades futbolísticas.<br />
                    <strong>Pasión:</strong> Motor de cada entrenamiento.<br />
                    <strong>Resiliencia:</strong> Fortaleza ante la derrota y el error.
                  </>
                ),
                color: "from-red-500 to-black",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-2 border-gray-100 hover:border-red-600">
                  <motion.div
                    className={`bg-gradient-to-br ${item.color} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.span 
                      className="text-xl sm:text-2xl"
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      ⚽
                    </motion.span>
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 group-hover:text-red-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.3) 0%, transparent 50%)'
          }}
        />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Sobre Nosotros
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-red-600 to-black mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 border-gray-200 hover:border-red-600 transition-all duration-500 relative overflow-hidden group">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700"
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <motion.div 
                  className="bg-white rounded-full p-6 sm:p-8 shadow-2xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <Image
                    src="/barkley-logo.png"
                    alt="Barkley Academy Shield"
                    width={120}
                    height={120}
                    className="drop-shadow-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                  />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-2xl sm:text-3xl font-bold text-center text-black mb-4 sm:mb-6"
              >
                ¿Quiénes Somos?
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="relative z-10"
              >
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify space-y-4">
                  El <span className="font-bold text-black">Club de Fútbol Formativo Barkley</span> es una escuela dedicada exclusivamente al desarrollo integral de futbolistas en edades infantiles, juveniles y precompetitivas. Nuestro propósito es crear un entorno seguro y pedagógico donde el fútbol no solo sea un deporte, sino una <span className="font-semibold text-red-600">herramienta de transformación personal y social</span>.
                  <br /><br />
                  A través de procesos sistemáticos, progresivos y metodológicamente estructurados, buscamos formar jugadores con fundamentos técnicos, tácticos, físicos y emocionales sólidos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { icon: "🎓", text: "Formación Integral" },
                  { icon: "⚽", text: "Metodología Estructurada" },
                  { icon: "🌟", text: "Transformación Social" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <motion.span 
                      className="text-4xl mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    <p className="font-semibold text-black text-sm sm:text-base">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas - Responsive */}
      <section className="bg-gradient-to-r from-black via-red-700 to-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            {[
              { numero: "0", label: "Futbolistas Formados" },
              { numero: "0", label: "Años de Experiencia" },
              { numero: "0", label: "Entrenadores Certificados" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.2 }}
                >
                  {stat.numero}
                </motion.div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deportes y Servicios - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-red-500 rounded-full opacity-5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-black rounded-full opacity-5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Deportes y Servicios
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-red-600 to-black mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Programas especializados para el desarrollo integral de nuestros futbolistas
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-gray-200 hover:border-red-600 transition-all duration-500 hover:shadow-red-500/20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 mb-6 sm:mb-8"
              >
                <motion.div
                  className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl sm:text-4xl">⚽</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                    Escuela de Formación en Fútbol Barkley
                  </h3>
                  <p className="text-red-600 font-semibold text-base sm:text-lg">
                    Sub-5 a Sub-17
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: "🎯", titulo: "Entrenamiento técnico–táctico", color: "from-red-500 to-red-600" },
                  { icon: "💪", titulo: "Preparación física básica", color: "from-black to-gray-800" },
                  { icon: "🧠", titulo: "Orientación psicodeportiva", color: "from-red-700 to-black" },
                ].map((servicio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.6 + index * 0.15,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-red-600 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
                        }}
                      />
                      <motion.div
                        className={`bg-gradient-to-br ${servicio.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 relative z-10`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-2xl sm:text-3xl">{servicio.icon}</span>
                      </motion.div>
                      <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-red-600 transition-colors leading-snug relative z-10">
                        {servicio.titulo}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300"
                >
                  Conocer Más Sobre Nuestros Servicios
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entrenadores - Con Animaciones Modernas */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Nuestro Cuerpo Técnico
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-red-600 to-black mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Profesionales comprometidos con tu desarrollo futbolístico
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                nombre: "Dainer Cortes",
                cargo: "Director Técnico",
                especialidad: "Táctica y Estrategia",
                experiencia: "15 años de experiencia",
                descripcion: "Ex jugador profesional con licencia UEFA Pro. Especializado en desarrollo táctico y formación de jugadores de élite.",
                logros: ["3 Campeonatos Regionales", "Formador UEFA", "Mejor entrenador 2023"],
              },
              {
                nombre: "Ricardo Castillo",
                cargo: "Entrenadora Categorías Base",
                especialidad: "Desarrollo Juvenil",
                experiencia: "10 años de experiencia",
                descripcion: "Especialista en psicología deportiva y técnica individual. Enfocada en el desarrollo integral de jóvenes talentos.",
                logros: ["Licencia UEFA B", "Psicóloga Deportiva", "Coach del Año 2022"],
              },
              
            ].map((entrenador, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-600 h-full">
                  {/* Imagen del entrenador */}
                  <motion.div
                    className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-black via-gray-800 to-red-900 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-6xl sm:text-7xl font-bold shadow-2xl">
                        {entrenador.nombre.split(" ").map(n => n[0]).join("")}
                      </div>
                    </motion.div>
                    
                    {/* Badge de especialidad */}
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="absolute top-4 left-4 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold z-20"
                    >
                      {entrenador.especialidad}
                    </motion.div>
                  </motion.div>

                  {/* Contenido */}
                  <div className="p-5 sm:p-6">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-xl sm:text-2xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors"
                    >
                      {entrenador.nombre}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex items-center gap-2 mb-3"
                    >
                      <span className="text-red-600 font-semibold text-sm sm:text-base">{entrenador.cargo}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-xs sm:text-sm">{entrenador.experiencia}</span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed"
                    >
                      {entrenador.descripcion}
                    </motion.p>

                    {/* Logros */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="space-y-2"
                    >
                      <p className="text-xs sm:text-sm font-bold text-black mb-2">Logros Destacados:</p>
                      {entrenador.logros.map((logro, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className="text-red-600 text-sm sm:text-base"
                          >
                            ✓
                          </motion.span>
                          <span className="text-xs sm:text-sm text-gray-700">{logro}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Botón de contacto */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-5 w-full bg-black text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors text-sm sm:text-base"
                    >
                      Conocer Más
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías - Responsive */}
      <section id="categorias" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Nuestras Categorías
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            >
              Programas adaptados para cada etapa del desarrollo futbolístico
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { nombre: "Sub-5", edades: "5 años", icon: "👶", entrenamientos: "2 sesiones semanales" },
              { nombre: "Sub-7", edades: "6 - 7 años", icon: "⚽", entrenamientos: "2 sesiones semanales" },
              { nombre: "Sub-9", edades: "8 - 9 años", icon: "🎯", entrenamientos: "3 sesiones semanales" },
              { nombre: "Sub-11", edades: "10 - 11 años", icon: "⚡", entrenamientos: "3 sesiones semanales" },
              { nombre: "Sub-13", edades: "12 - 13 años", icon: "🔥", entrenamientos: "4 sesiones semanales" },
              { nombre: "Sub-15", edades: "14 - 15 años", icon: "💪", entrenamientos: "4 sesiones semanales" },
              { nombre: "Sub-17", edades: "16 - 17 años", icon: "🏆", entrenamientos: "5 sesiones semanales" },
            ].map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-2 border-transparent hover:border-red-600 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-3 relative z-10"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-black mb-1 group-hover:text-red-600 transition-colors relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {cat.nombre}
                  </motion.h3>
                  <motion.p 
                    className="text-red-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {cat.edades}
                  </motion.p>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    📅 {cat.entrenamientos}
                  </motion.p>
                  <motion.button 
                    className="w-full border-2 border-black text-black px-4 py-2 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base relative z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Más Información
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos - Interactiva */}
      <section id="galeria" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4"
            >
              Galería de Momentos
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-600 to-black mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600"
            >
              Revive nuestros mejores momentos
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: "Entrenamiento", category: "Juvenil", color: "from-red-600 to-red-800" },
              { title: "Partido Final", category: "Amateur", color: "from-black to-gray-800" },
              { title: "Celebración", category: "Femenino", color: "from-red-700 to-black" },
              { title: "Técnica", category: "Infantil", color: "from-gray-800 to-red-900" },
              { title: "Trofeo", category: "Juvenil", color: "from-red-500 to-black" },
              { title: "Equipo", category: "Amateur", color: "from-black to-red-700" },
              { title: "Práctica", category: "Femenino", color: "from-red-800 to-gray-900" },
              { title: "Victoria", category: "Infantil", color: "from-gray-700 to-red-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-white text-center z-10 p-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3"
                      >
                        📸
                      </motion.div>
                      <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1">{item.title}</h3>
                      <span className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                  
                  {/* Overlay al hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm"
                    >
                      Ver Más
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-red-700 transition-colors shadow-lg"
            >
              Ver Galería Completa
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Formulario de Inscripción Interactivo */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-red-900 to-black text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
        {/* Efectos de fondo animados */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-red-800 rounded-full opacity-10 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            >
              ¡Inscríbete Ahora!
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-white to-red-500 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-300"
            >
              Comienza tu camino hacia la excelencia futbolística
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Apellido *</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Tu apellido"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    required
                  />
                </motion.div>
              </div>

              {/* Email y Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+34 123 456 789"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    required
                  />
                </motion.div>
              </div>

              {/* Edad y Categoría */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-semibold mb-2">Edad del Jugador *</label>
                  <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    placeholder="Edad"
                    min="6"
                    max="99"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-semibold mb-2">Categoría de Interés *</label>
                  <select 
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-800">Selecciona una categoría</option>
                    <option value="sub-5" className="bg-gray-800">Sub-5 (5 años)</option>
                    <option value="sub-7" className="bg-gray-800">Sub-7 (6-7 años)</option>
                    <option value="sub-9" className="bg-gray-800">Sub-9 (8-9 años)</option>
                    <option value="sub-11" className="bg-gray-800">Sub-11 (10-11 años)</option>
                    <option value="sub-13" className="bg-gray-800">Sub-13 (12-13 años)</option>
                    <option value="sub-15" className="bg-gray-800">Sub-15 (14-15 años)</option>
                    <option value="sub-17" className="bg-gray-800">Sub-17 (16-17 años)</option>
                  </select>
                </motion.div>
              </div>

              {/* Mensaje */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <label className="block text-sm font-semibold mb-2">Mensaje (Opcional)</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu experiencia previa o consultas..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
                ></textarea>
              </motion.div>

              {/* Estado del formulario */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center font-semibold ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-100 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-100 border border-red-500/30'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Botón de envío */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center pt-2"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full md:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl ${
                    isSubmitting
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-red-600 hover:text-white'
                  }`}
                >
                  {isSubmitting ? 'Enviando... ⏳' : 'Enviar Inscripción 🚀'}
                </motion.button>
              </motion.div>
            </form>

            {/* Información de contacto alternativa */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 pt-8 border-t border-white/20 text-center"
            >
              <p className="text-sm text-gray-300 mb-4">O contáctanos directamente:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm">
                <a href="tel:+34123456789" className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                  <span>📞</span> +34 123 456 789
                </a>
                <a href="mailto:info@barkleyacademy.com" className="flex items-center justify-center gap-2 hover:text-red-400 transition-colors">
                  <span>📧</span> info@barkleyacademy.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Botón de WhatsApp Flotante */}
      <motion.a
        href="https://wa.me/34123456789?text=Hola,%20me%20gustaría%20información%20sobre%20Club%20de%20Fútbol%20Formativo%20Barkley"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <MessageCircle size={28} className="sm:w-8 sm:h-8" />
        </motion.div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all"
        >
          ¡Chatea con nosotros!
        </motion.div>

        {/* Animación de pulso */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </motion.a>

      {/* Footer - Responsive */}
      <footer className="bg-black text-white pt-12 sm:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="bg-white rounded-full p-1">
                  <Image src="/barkley-logo.png" alt="Club de Fútbol Formativo Barkley" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <span className="font-bold text-base sm:text-lg">Club de Fútbol Formativo Barkley</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Formando futbolistas de excelencia</p>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-red-500 text-sm sm:text-base">Menú</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#inicio" className="hover:text-red-500 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#categorias" className="hover:text-red-500 transition-colors">
                    Categorías
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-red-500 transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-red-500 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-red-500 text-sm sm:text-base">Contacto</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                <li>📞 +34 123 456 789</li>
                <li>📧 info@clubdeportivobarkley.com</li>
                <li>
                  📍 Calle Principal 123
                  <br />
                  Barcelona, España
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-red-500 text-sm sm:text-base">Síguenos</h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/share/1AMuAZUD3E/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://instagram.com/barkleyacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:info@clubdeportivobarkley.com"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://wa.me/34123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-red-700 my-6 sm:my-8"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-gray-500">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Club de Fútbol Formativo Barkley. Todos los derechos reservados.</p>
            <p className="text-center sm:text-right">Diseñado con amor para el fútbol</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
