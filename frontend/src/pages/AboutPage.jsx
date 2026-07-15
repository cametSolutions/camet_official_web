import { motion } from 'framer-motion'
import Button from '../components/common/Button'

function AboutPage() {
  const values = [
    { title: 'Excellence', icon: '🏆', description: 'We strive for perfection in every line of code we write.' },
    { title: 'Innovation', icon: '💡', description: 'Leveraging cutting-edge tech to solve complex business problems.' },
    { title: 'Integrity', icon: '🤝', description: 'Building trust through transparent and honest business practices.' },
    { title: 'Customer First', icon: '⭐', description: 'Your success is our primary metric of achievement.' }
  ]

  const timeline = [
    { year: '2015', title: 'Inception', description: 'Founded in Kerala with a vision to digitize local businesses.' },
    { year: '2018', title: 'Expansion', description: 'Expanded operations to serve 100+ enterprise clients across the state.' },
    { year: '2021', title: 'Innovation', description: 'Launched proprietary custom software division for specialized industries.' },
    { year: '2026', title: 'Leadership', description: 'Recognized as a premier ERP implementation partner in South India.' }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section with full background image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-900/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-[0.18em] text-white uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                Who We Are
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
                Driving Digital Transformation with Practical Software Solutions
              </h1>

              <p className="text-lg text-slate-200 max-w-xl leading-8 mb-8">
                We help businesses modernize operations through ERP implementation, integrations, and custom software built for real business growth.
              </p>

              <Button
                variant="primary"
                to="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3"
              >
                Schedule a Meeting
              </Button>
            </motion.div>

            {/* right side rounded image cards */}
            <div className="relative h-[540px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-0 left-8 w-64 h-80 rounded-[32px] overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="absolute top-20 right-0 w-72 h-52 rounded-[28px] overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="absolute bottom-10 left-0 w-56 h-44 rounded-[28px] overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
                  alt="Office planning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -8 }}
                className="absolute bottom-0 right-8 w-64 h-72 rounded-[32px] overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
                  alt="Modern workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-56 left-44 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-white text-sm font-semibold">Trusted by growing businesses</p>
                <p className="text-slate-200 text-xs mt-1">ERP • Integrations • Custom Software</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Story section with full width image background strip */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <div
            className="w-full h-full bg-cover bg-center rounded-l-[48px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/30 rounded-l-[48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-brand-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-brand-600"></span>
                Our Story
              </h2>

              <div className="space-y-5 text-slate-600 leading-8 text-lg">
                <p>
                  Established in 2015, <span className="font-semibold text-brand-700">CAMTIT Solutions</span> began with a simple mission: bringing enterprise-grade technology to businesses across Kerala.
                </p>
                <p>
                  Over time, we evolved from a small passionate team into a full-service IT consultancy focused on implementation, integration, and custom business platforms.
                </p>
                <p>
                  Today, we support growing companies with software systems that improve day-to-day operations and long-term scalability.
                </p>
              </div>
            </motion.div>

            <div className="lg:hidden">
              <div className="rounded-[28px] overflow-hidden h-80 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Office team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide our every decision and line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-900 mb-16">Our Milestones</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-full md:w-5/12 bg-slate-50 p-6 rounded-[24px] border border-slate-100 hover:border-brand-200 transition-colors">
                    <div className="text-brand-600 font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-sm z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brand-900/85" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with Kerala's Top IT Experts
          </h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage technology to accelerate your business growth.
          </p>
          <Button
            variant="primary"
            to="/contact"
            className="bg-white text-brand-900 hover:bg-brand-50 font-semibold px-8 py-3"
          >
            Schedule a Meeting
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage