import { Badge } from '@/components/ui/badge'
import { integrations } from '../lib/content'

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)' }}>
      <div className="flex gap-4 w-max animate-marquee" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {doubled.map((name, i) => (
          <Badge key={i} className="bg-white/5 border-white/10 text-white/70 text-sm px-4 py-2 font-medium whitespace-nowrap rounded-full">{name}</Badge>
        ))}
      </div>
    </div>
  )
}

export default function IntegrationsMarquee() {
  const half = Math.ceil(integrations.length / 2)
  return (
    <section className="py-20 sm:py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge className="bg-[#FBBF24]/15 text-[#fcd877] border-[#FBBF24]/20 rounded-full">Integrations</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-4">Works inside your stack</h2>
          <p className="mt-4 text-white/60 text-lg">Connect the tools your team already uses. Your AI employees work where you work.</p>
        </div>
        <div className="space-y-4">
          <Row items={integrations.slice(0, half)} />
          <Row items={integrations.slice(half)} reverse />
        </div>
      </div>
    </section>
  )
}