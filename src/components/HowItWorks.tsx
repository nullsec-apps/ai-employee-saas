import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { MousePointerClick, Plug, Rocket } from 'lucide-react'
import { steps } from '../lib/content'
import { useInView } from '../hooks/useInView'

const icons = [MousePointerClick, Plug, Rocket]

export default function HowItWorks() {
  const { ref, inView } = useInView(0.2)
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge className="bg-[#34D399]/15 text-[#7eecc0] border-[#34D399]/20 rounded-full">How it works</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">Live in an afternoon</h2>
          <p className="mt-4 text-white/60 text-lg">Three steps from sign-up to your first AI employee completing real work.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 mt-14">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#6D5DFB]/40 via-[#22D3EE]/40 to-[#34D399]/40" />
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative glass rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl grid place-items-center mb-4" style={{ background: 'linear-gradient(135deg,#6D5DFB,#22D3EE)' }}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <span className="font-display font-bold text-sm text-white/40">STEP {i + 1}</span>
                <h3 className="font-display font-bold text-xl mt-1">{step.title}</h3>
                <p className="text-white/60 mt-3 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}