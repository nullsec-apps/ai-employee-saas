import { stats } from '../lib/content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

function formatStat(value: number, raw: number) {
  if (raw >= 1000) return Math.round(value).toLocaleString()
  if (raw % 1 !== 0) return value.toFixed(1)
  return Math.round(value).toString()
}

function Stat({ label, value, suffix, active }: { label: string; value: number; suffix: string; active: boolean }) {
  const v = useCountUp(value, active)
  return (
    <div className="text-center">
      <p className="font-display font-extrabold text-4xl sm:text-5xl text-white">{formatStat(v, value)}<span>{suffix}</span></p>
      <p className="mt-2 text-white/70 text-sm">{label}</p>
    </div>
  )
}

export default function StatsBand() {
  const { ref, inView } = useInView(0.3)
  return (
    <section ref={ref} className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden" style={{ background: 'linear-gradient(120deg,#6D5DFB,#4f3fdb 60%,#22D3EE)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <Stat key={s.label} {...s} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}