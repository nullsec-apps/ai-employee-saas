import { trustLogos } from '../lib/content'

export default function TrustBar() {
  const doubled = [...trustLogos, ...trustLogos]
  return (
    <section className="py-10 border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Trusted by 2,000+ teams worldwide</p>
        <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
          <div className="flex gap-12 w-max animate-marquee">
            {doubled.map((logo, i) => (
              <span key={i} className="font-display font-bold text-xl text-white/30 whitespace-nowrap">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}