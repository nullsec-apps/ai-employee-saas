import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r) return
      const px = (e.clientX - r.left - r.width / 2) / r.width
      const py = (e.clientY - r.top - r.height / 2) / r.height
      setTilt({ x: py * -6, y: px * 8 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="top" ref={ref} className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-50"
          style={{ background: 'radial-gradient(circle,#6D5DFB,transparent 70%)' }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[0%] right-[5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(circle,#22D3EE,transparent 70%)' }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '54px 54px' }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="bg-white/5 border border-white/10 text-white/80 hover:bg-white/5 rounded-full px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#6D5DFB]" /> Now with autonomous task execution
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-6"
          >
            Hire AI employees that <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#6D5DFB,#22D3EE)' }}>never sleep</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed"
          >
            Nexa gives you a full team of specialized AI employees — for sales, support, recruiting, and ops. They work inside your tools, complete real tasks 24/7, and scale instantly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size="lg" className="bg-[#6D5DFB] hover:bg-[#5b4ce0] text-white h-12 px-6 transition-all duration-200 hover:scale-[1.02]">
              <a href="#cta">Start free trial <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 h-12 px-6 transition-all duration-200">
              <a href="#demo"><Play className="w-4 h-4 mr-2" /> Watch demo</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#34D399]" /> {t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="relative transition-transform duration-100"
        >
          <div className="glass rounded-2xl p-5 shadow-2xl shadow-[#6D5DFB]/10">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full grid place-items-center text-xs font-bold text-white" style={{ background: '#6D5DFB' }}>SR</div>
                <div>
                  <p className="text-sm font-semibold">Sienna — AI Sales Rep</p>
                  <p className="text-xs text-[#34D399] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block animate-pulse" /> Working now</p>
                </div>
              </div>
              <Badge className="bg-white/5 text-white/60 border-white/10">Live</Badge>
            </div>
            <div className="py-4 space-y-3">
              {[
                { t: 'Qualified 14 inbound leads', s: 'done' },
                { t: 'Drafting follow-up to Acme Corp', s: 'active' },
                { t: 'Booked demo with Globex (Thu 2pm)', s: 'done' }
              ].map((row, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15 }} className="flex items-center gap-3 text-sm">
                  {row.s === 'done' ? <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" /> : <span className="w-4 h-4 rounded-full border-2 border-[#6D5DFB] border-t-transparent animate-spin shrink-0" />}
                  <span className={row.s === 'done' ? 'text-white/60' : 'text-white'}>{row.t}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
              {[['Demos', '6'], ['Replies', '87'], ['CSAT', '4.8★']].map(([l, v]) => (
                <div key={l} className="rounded-lg bg-white/5 p-3 text-center">
                  <p className="font-display font-bold text-lg">{v}</p>
                  <p className="text-xs text-white/50">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}