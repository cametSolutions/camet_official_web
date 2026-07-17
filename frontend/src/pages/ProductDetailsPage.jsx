import Header from '@/components/common/Header'
import { products } from '@/data/Product'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProductDetailsPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-dvh overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur">
              <p className="text-slate-900">Product not found</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  const ProductIcon = product.icon

  return (
    <>
      <Header />

      <div className="min-h-dvh overflow-hidden bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#374d72] via-[#0B1F3A] to-[#123C73] pt-24 pb-14">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.92),rgba(11,31,58,0.88),rgba(18,60,115,0.82))]" />

          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(14,155,217,0.35),transparent_28%),radial-gradient(circle_at_left,rgba(47,111,237,0.24),transparent_30%)]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 md:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200">
                Product Details
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                {product.label}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                {product.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:scale-[1.03]">
                  Request Demo
                </button>
                <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  Talk to Expert
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex justify-center md:justify-end"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[28px] bg-blue-500/20 blur-3xl" />

                <div className="relative rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${product.iconBg}`}>
                    <ProductIcon className={`text-4xl ${product.iconColor}`} />
                  </div>

                  <div className="mt-4 max-w-[220px]">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200">
                      CAMET Product
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {product.label}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-6 max-w-6xl px-4 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-7"
          >
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>

            <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-700 md:text-[15px]">
              {product.description}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">Reliable</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Consistent support for daily business workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">Scalable</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Built for growing teams and business needs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">Efficient</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Reduces manual effort with smarter workflows.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default ProductDetailsPage