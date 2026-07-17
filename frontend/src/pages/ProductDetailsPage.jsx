import Header from '@/components/common/Header'
import { products } from '@/data/Product'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-32 pb-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur">
              <p className="text-slate-900">Product not found</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#081120] via-[#0B1F3A] to-[#123C73] pt-32 pb-24">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(14,155,217,0.35),transparent_30%),radial-gradient(circle_at_left,rgba(47,111,237,0.25),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
              Product Details
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              {product.label}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              {product.desc}
            </p>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 pb-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              {product.description}
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductDetailsPage