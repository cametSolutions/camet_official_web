import { motion } from 'framer-motion'
import {
  FaTrophy,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaHeadset,
  FaCertificate,
  FaCheckCircle,
  FaMicrosoft,
} from 'react-icons/fa'
import { SiSap, SiZoho } from 'react-icons/si'
import { MdOutlineSecurity, MdBusinessCenter } from 'react-icons/md'
import Button from '../components/common/Button'

import ceoImg from '../assets/image3.png'
import coFounder1Img from '../assets/image4.png'
import coFounder2Img from '../assets/WhatsApp Image 2026-07-14 at 11.41.54 AM.jpeg'
import coFounder3Img from '../assets/image.png'
import coFounder4Img from '../assets/image2.png'

function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      icon: FaTrophy,
      description:
        'We aim for quality, reliability, and precision in every implementation, customization, and software delivery.',
    },
    {
      title: 'Innovation',
      icon: FaLightbulb,
      description:
        'We adopt practical technology that improves business efficiency, reduces manual work, and supports growth.',
    },
    {
      title: 'Integrity',
      icon: FaHandshake,
      description:
        'We build lasting client relationships through honest guidance, clear communication, and accountable execution.',
    },
    {
      title: 'Customer First',
      icon: FaStar,
      description:
        'Every solution is shaped around real business operations, user adoption, and measurable long-term value.',
    },
  ]

  const credentials = [
    { icon: FaAward, value: '5-Star', label: 'Tally Partner Rating' },
    { icon: FaCalendarAlt, value: '10+', label: 'Years in Business' },
    { icon: FaUsers, value: '250+', label: 'Business Clients' },
    { icon: FaHeadset, value: '24/7', label: 'Support Coverage' },
  ]

  const certifications = [
    'Tally Certified Partner',
    'Structured Delivery Process',
    'Data Security Practices',
    'Documentation-led Implementation',
  ]

  const expertise = [
    'ERP implementation and business process digitization',
    'Tally customization and third-party integration support',
    'Custom software development for operational workflows',
    'Business automation, reporting, and process optimization',
    'Long-term support, AMC, and user enablement services',
    'Technology consulting for finance, inventory, HR, and operations',
  ]

  const partners = [
    {
      name: 'Microsoft',
      icon: FaMicrosoft,
      desc: 'Supports business productivity, collaboration, and modern digital infrastructure alignment.',
    },
    {
      name: 'SAP',
      icon: SiSap,
      desc: 'Brings enterprise process discipline and large-scale workflow understanding into solution planning.',
    },
    {
      name: 'Zoho',
      icon: SiZoho,
      desc: 'Enables CRM, workflow, and business productivity integration opportunities.',
    },
    {
      name: 'Tally',
      icon: MdBusinessCenter,
      desc: 'Supports accounting, inventory, compliance, and connected business operations.',
    },
  ]

  const ceoPillars = [
    {
      title: 'Client Trust First',
      description:
        'We prioritize long-term relationships by delivering dependable systems and clear business outcomes.',
    },
    {
      title: 'Operational Practicality',
      description:
        'Technology should simplify work on the ground and fit the realities of daily business operations.',
    },
    {
      title: 'Continuous Innovation',
      description:
        'We evolve with new tools and methods that create measurable value for our clients.',
    },
    {
      title: 'Accountable Delivery',
      description:
        'Execution matters as much as strategy, so we own timelines, communication, and support quality.',
    },
  ]

  const coFounders = [
    {
      name: 'Co-Founder 1',
      role: 'Strategy & Business Growth',
      image: coFounder1Img,
    },
    {
      name: 'Co-Founder 2',
      role: 'Technology & Architecture',
      image: coFounder2Img,
    },
    {
      name: 'Co-Founder 3',
      role: 'Implementation & Delivery',
      image: coFounder3Img,
    },
    {
      name: 'Co-Founder 4',
      role: 'Support & Client Success',
      image: coFounder4Img,
    },
  ]

  const teamStats = [
    { value: '40+', label: 'Implementation & Support Professionals' },
    { value: '12+', label: 'Domain Specialists' },
    { value: '250+', label: 'Active Business Relationships' },
    { value: '4', label: 'Leadership Verticals' },
  ]

  const compliance = [
    'Role-based project ownership and escalation process',
    'Documented implementation and handover workflow',
    'Controlled access and data handling practices',
    'Support ticketing and response management discipline',
  ]

  const slidingPartners = [...partners, ...partners]

  return (
    <div className="min-h-screen bg-[#d7e7fa]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1F2937] pb-10 pt-20 md:pb-12 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_-10%,rgba(20,184,166,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0F766E]/20 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#99F6E4] backdrop-blur-md">
                About CAMET
              </div>

              <h1 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
                Building trust through practical technology and business-focused execution.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                CAMET IT Solutions helps businesses modernize operations with ERP implementation,
                software integration, custom solutions, and structured support designed for long-term growth.
              </p>

              <div className="mt-6">
                <Button
                  variant="primary"
                  to="/contact"
                  className="bg-[#0F766E] px-6 py-2.5 font-semibold text-white hover:bg-[#0b5f59]"
                >
                  Schedule a Meeting
                </Button>
              </div>
            </motion.div>

            <div className="relative hidden h-[300px] lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute left-8 top-0 h-48 w-44 overflow-hidden rounded-[20px] border border-white/10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
                  alt="Modern business workspace"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-0 right-2 h-56 w-52 overflow-hidden rounded-[20px] border border-white/10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Business strategy and collaboration"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="absolute bottom-8 left-0 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 shadow-xl backdrop-blur-lg">
                <p className="text-sm font-semibold text-white">Trusted business technology partner</p>
                <p className="mt-1 text-xs text-white/65">ERP · Integrations · Custom Software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + mission + credentials */}
      <section className="bg-[#e8eef5] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
                Company Overview
              </p>
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
                Technology solutions built around real business needs
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                CAMET IT Solutions delivers implementation, integration, support, and custom development
                services for organizations that need better control over operations, reporting, scalability,
                and business continuity.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Our mission is to help businesses transform with practical systems that improve execution,
                reduce manual effort, and create long-term operational value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[22px] border border-slate-200 bg-[#F0FDFA] p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                Mission Focus
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#1F2937]">
                Deliver business-ready technology that is dependable, scalable, and aligned with operational reality.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {credentials.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[#1F2937] text-[#99F6E4]">
                        <Icon className="text-sm" />
                      </div>
                      <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
                      <p className="mt-1 text-[11px] text-slate-500">{item.label}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                <FaCertificate className="text-[11px] text-[#0F766E]" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise + compliance */}
      <section className="border-t border-slate-200 bg-[#f0f7ff] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-[#1F2937] md:text-3xl">Experience & Expertise</h2>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-[#0F766E]" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold text-[#1F2937] md:text-3xl">Compliance & Process</h2>
              <div className="grid gap-3">
                {compliance.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <MdOutlineSecurity className="mt-1 text-[#0F766E]" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners + stats */}
      <section className="overflow-hidden border-t border-slate-200 bg-[#f6f9fd] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-[#1F2937] md:text-3xl">Partners & Team Strength</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
              We work across leading software ecosystems while supporting clients through a strong implementation team.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Sliding partners */}
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-[#eaeaeb] px-3 py-4 sm:px-4">
              <motion.div
                className="flex w-max gap-4"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 18,
                  ease: 'linear',
                }}
              >
                {slidingPartners.map((partner, index) => {
                  const Icon = partner.icon
                  return (
                    <motion.div
                      key={`${partner.name}-${index}`}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="w-[260px] flex-shrink-0 rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0FDFA] text-[#0F766E]">
                        <Icon className="text-xl" />
                      </div>
                      <h3 className="mt-3 text-base font-bold text-[#1F2937]">{partner.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{partner.desc}</p>
                    </motion.div>
                  )
                })}
              </motion.div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
            </div>

            {/* Team stats */}
            <div className="grid grid-cols-2 gap-3">
              {teamStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-center shadow-sm"
                >
                  <p className="text-2xl font-bold text-[#0F766E]">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership + cofounders */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="overflow-hidden rounded-[18px]">
                <img src={ceoImg} alt="CAMET CEO" className="h-[280px] w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1F2937]">CEO Name</h3>
              <p className="text-sm font-medium text-[#0F766E]">Chief Executive Officer</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Leading CAMET with a focus on trust, operational value, and business-centered digital transformation.
              </p>
            </motion.div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
                Leadership Philosophy
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#1F2937] md:text-3xl">
                Practical leadership for business growth
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                {ceoPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[18px] border border-slate-200 bg-[#F0FDFA] p-4"
                  >
                    <h3 className="text-base font-bold text-[#1F2937]">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-xl font-bold text-[#1F2937]">Co-Founders</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {coFounders.map((person, index) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="overflow-hidden rounded-[16px]">
                        <img src={person.image} alt={person.name} className="h-[200px] w-full object-cover" />
                      </div>
                      <h3 className="mt-3 text-base font-bold text-[#1F2937]">{person.name}</h3>
                      <p className="text-sm text-[#0F766E]">{person.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-slate-200 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-[#1F2937] md:text-3xl">Core Values</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
              The principles that guide our decisions, delivery, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1F2937] text-[#99F6E4]">
                    <Icon className="text-base" />
                  </div>
                  <h3 className="mb-2 mt-4 text-base font-bold text-[#1F2937]">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[22px] bg-[#1F2937] px-6 py-8 text-center shadow-[0_30px_70px_-30px_rgba(31,41,55,0.45)] ring-1 ring-white/[0.06] sm:px-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(45,212,191,0.18),transparent_60%)]" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
                Partner with a team focused on business outcomes.
              </h2>
              <p className="mb-6 text-sm text-white/75 md:text-base">
                Let’s discuss how CAMET can help improve operations, connect systems, and support your next stage of growth.
              </p>
              <Button
                variant="primary"
                to="/contact"
                className="bg-[#0F766E] px-6 py-2.5 font-semibold text-white hover:bg-[#0b5f59]"
              >
                Schedule a Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage