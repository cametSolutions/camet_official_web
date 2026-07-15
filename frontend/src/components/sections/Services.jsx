import { motion } from 'framer-motion'
import {
  FaCloud,
  FaDatabase,
  FaPuzzlePiece,
  FaCogs,
  FaNetworkWired,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Software Customization',
    desc: 'Adapt business software to match your workflow, reporting logic, and operational needs.',
    stat: 'Workflow-first delivery',
    icon: FaPuzzlePiece,
    points: [
      'Custom reports and forms',
      'Workflow-aligned features',
      'Business-specific configurations',
    ],
  },
  {
    title: 'System Integration',
    desc: 'Connect ERP, CRM, payment, tax, cloud, and legacy systems for smoother data exchange.',
    stat: 'Connected business tools',
    icon: FaNetworkWired,
    points: [
      'ERP and CRM connectivity',
      'Cloud and third-party sync',
      'Reliable data flow between systems',
    ],
  },
  {
    title: 'Support & AMC',
    desc: 'Ensure continuity with upgrades, issue tracking, remote help, and long-term maintenance.',
    stat: 'Stable post-sales support',
    icon: FaHeadset,
    points: [
      'Issue resolution and monitoring',
      'Upgrade and maintenance support',
      'Long-term technical continuity',
    ],
  },
]

const miniFeatures = [
  { icon: FaCloud, label: 'Cloud readiness' },
  { icon: FaDatabase, label: 'Structured data flow' },
  { icon: FaCogs, label: 'Operational efficiency' },
]

const glassStyles = [
  {
    card: 'bg-sky-100/45 border-sky-200/60',
    iconWrap: 'bg-sky-200/45 text-sky-800',
    badge: 'bg-sky-100/60 text-sky-800 border-sky-200/70',
    glow: 'from-sky-200/40 to-cyan-100/10',
  },
  {
    card: 'bg-violet-100/40 border-violet-200/60',
    iconWrap: 'bg-violet-200/40 text-violet-800',
    badge: 'bg-violet-100/60 text-violet-800 border-violet-200/70',
    glow: 'from-violet-200/35 to-fuchsia-100/10',
  },
  {
    card: 'bg-emerald-100/40 border-emerald-200/60',
    iconWrap: 'bg-emerald-200/45 text-emerald-800',
    badge: 'bg-emerald-100/60 text-emerald-800 border-emerald-200/70',
    glow: 'from-emerald-200/40 to-lime-100/10',
  },
]

function Services() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f7f4_0%,#f4f7fb_48%,#f7f8f5_100%)] py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-10 top-40 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero image block with text on image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[30px] border border-slate-200 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.22)]"
        >
          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80')",
            }}
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/55" />

          {/* gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-slate-950/55" /> */}

          {/* optional soft texture */}
          {/* <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" /> */}

          {/* text content */}
          <div className="relative z-10 px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:w-[62%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
              Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl leading-[1.08]">
              Practical services for connected business operations.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              We help businesses improve the way their systems work together through customization,
              integration, and dependable long-term support.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {miniFeatures.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md"
                  >
                    <Icon className="text-white/70 text-xs" />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="relative mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon
            const style = glassStyles[index]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-[22px] border p-5 backdrop-blur-xl shadow-[0_18px_40px_-26px_rgba(15,23,42,0.18)] transition-all duration-300 hover:shadow-[0_22px_44px_-26px_rgba(15,23,42,0.24)] ${style.card}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-80`} />
                <div className="absolute inset-0 bg-white/25" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/70" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-md ${style.iconWrap}`}>
                      <Icon className="text-sm" />
                    </div>

                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${style.badge}`}>
                      Core Service
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-md">
                    {item.stat}
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <FaCheckCircle className="mt-1 shrink-0 text-slate-500 text-xs" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-slate-200/80 bg-white/75 px-5 py-5 text-center shadow-sm backdrop-blur-md md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Need a more tailored solution path?
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              We can assess your process and recommend the right customization,
              integration, or support model.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Talk to our team
            <FaArrowRight className="text-[10px]" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services