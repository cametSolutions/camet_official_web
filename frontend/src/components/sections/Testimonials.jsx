import { motion } from 'framer-motion'
import { FaQuoteRight, FaStar } from 'react-icons/fa'

const fontDisplay = { fontFamily: '"Plus Jakarta Sans", "Poppins", sans-serif' }
const fontMono = { fontFamily: '"JetBrains Mono", "Menlo", monospace' }

const BG_TOP = '#F3F7FF'
const BG_BOTTOM = '#FFFFFF'
const INK = '#0B1F3A'
const MUTED = '#5C6B85'

const NAVY = '#0B1F3A'
const BLUE = '#2F6FED'
const CYAN = '#0E9BD9'
const GOLD = '#E8A317'

const accents = [BLUE, NAVY, CYAN]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'ABC Enterprises',
    role: 'Managing Director',
    text: '"CAMTIT Solutions transformed our business operations with their excellent Tally implementation. Their team is professional."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces',
  },
  {
    name: 'Priya Sharma',
    company: 'XYZ Retail',
    role: 'Operations Manager',
    text: '"Outstanding service! The custom ERP solution they developed has streamlined our entire workflow. Highly recommended."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
  },
  {
    name: 'Arun Menon',
    company: 'Tech Innovations',
    role: 'CEO',
    text: '"Best software development company in Kerala. They delivered our project on time and within budget."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
  },
  {
    name: 'Sneha Reddy',
    company: 'Global Logistics',
    role: 'Director',
    text: '"Their support team is available 24/7 and resolved our server issues instantly. A trustworthy technology partner."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=faces',
  },
  {
    name: 'David John',
    company: 'Creative Hub',
    role: 'Founder',
    text: '"We love the new website and mobile app. The design is modern and the performance is lightning fast."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces',
  },
  {
    name: 'Meera Nair',
    company: 'Coastal Foods',
    role: 'Finance Head',
    text: '"Migration to TallyPrime was smooth from day one. No downtime, no data loss, and clear communication throughout."',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces',
  },
].map((t, i) => ({ ...t, color: accents[i % accents.length] }))

function TestimonialCard({ t }) {
  return (
    <div className="relative w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 pt-5">
      <div className="relative z-10 mb-[-22px] flex items-end justify-between pl-1 pr-1">
        <div className="pb-2">
          <p style={fontDisplay} className="text-[13px] font-extrabold">
            <span style={{ color: t.color }}>{t.name}</span>
          </p>
          <p style={fontMono} className="text-[9px] uppercase tracking-[0.08em]">
            <span style={{ color: MUTED }}>{t.role}</span>
          </p>
        </div>

        <div
          className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_8px_16px_-8px_rgba(11,31,58,0.35)]"
          style={{ border: `2px solid ${t.color}` }}
        >
          <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
        </div>
      </div>

      <div
        className="relative rounded-xl bg-white p-4 pt-8"
        style={{
          border: '1px solid rgba(11,31,58,0.08)',
          boxShadow: '0 14px 30px -24px rgba(11,31,58,0.2)',
        }}
      >
        <div className="mb-2 flex gap-1" style={{ color: GOLD }}>
          {[...Array(t.rating)].map((_, i) => (
            <FaStar key={i} className="text-[10px]" />
          ))}
        </div>

        <p style={fontDisplay} className="text-[12.5px] leading-5 font-normal">
          <span style={{ color: INK }}>{t.text}</span>
        </p>

        <p style={fontDisplay} className="mt-3 text-[10.5px]">
          <span style={{ color: MUTED }}>{t.company}</span>
        </p>

        <span
          className="absolute -bottom-3 right-4 flex h-7 w-7 items-center justify-center rounded-full text-white shadow-md"
          style={{ backgroundColor: t.color }}
        >
          <FaQuoteRight className="text-[11px]" />
        </span>
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left', duration = 28 }) {
  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicated.map((t, index) => (
          <TestimonialCard key={`${t.name}-${index}`} t={t} />
        ))}
      </motion.div>
    </div>
  )
}

function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-14"
      style={{
        background: `linear-gradient(180deg, ${BG_TOP} 0%, ${BG_BOTTOM} 100%)`,
        color: INK,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #DCE6F7 1px, transparent 1px), linear-gradient(to bottom, #DCE6F7 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%)',
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-28 -left-28 z-0 h-[300px] w-[300px] rounded-full blur-[100px]"
        style={{ background: BLUE, opacity: 0.1 }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -35, 20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[-80px] top-[8%] z-0 h-[260px] w-[260px] rounded-full blur-[100px]"
        style={{ background: CYAN, opacity: 0.1 }}
      />

      <div className="relative z-20 mx-auto mb-8 max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-5" style={{ backgroundColor: BLUE }} />
            <p style={fontMono} className="text-[10px] uppercase tracking-[0.25em]">
              <span style={{ color: BLUE }}>Client Feedback</span>
            </p>
            <span className="h-px w-5" style={{ backgroundColor: BLUE }} />
          </div>

          <h2
            style={fontDisplay}
            className="mb-3 text-[24px] font-extrabold leading-tight tracking-tight md:text-[34px]"
          >
            Trusted by{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${NAVY}, ${BLUE} 55%, ${CYAN})`,
              }}
            >
              Industry Leaders
            </span>
          </h2>

          <p
            style={fontDisplay}
            className="mx-auto max-w-lg text-[13px] font-normal leading-6 md:text-[14px]"
          >
            <span style={{ color: MUTED }}>
              Businesses across Kerala rely on us for dependable software, ERP systems,
              and support that doesn't disappear after go-live.
            </span>
          </p>
        </motion.div>
      </div>

      <div className="relative z-20">
        <MarqueeRow items={testimonials} direction="left" duration={28} />
      </div>
    </section>
  )
}

export default Testimonials