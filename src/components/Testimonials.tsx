import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../lib/content'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const perView = 3
  const maxStart = Math.max(0, testimonials.length - perView)
  const visible = testimonials.slice(idx, idx + perView)

  return (
    <section id="testimonials" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <Badge className="bg-[#F472B6]/15 text-[#f9aed4] border-[#F472B6]/20 rounded-full">Customers</Badge>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">Loved by modern teams</h2>
            <p className="mt-4 text-white/60 text-lg">Thousands of teams have already added AI employees to their roster.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" disabled={idx === 0} onClick={() => setIdx((i) => Math.max(0, i - 1))} className="border-white/15 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-all duration-200"><ChevronLeft className="w-5 h-5" /></Button>
            <Button variant="outline" size="icon" disabled={idx >= maxStart} onClick={() => setIdx((i) => Math.min(maxStart, i + 1))} className="border-white/15 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-all duration-200"><ChevronRight className="w-5 h-5" /></Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <AnimatePresence mode="popLayout">
            {visible.map((t) => (
              <motion.div key={t.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <Card className="bg-white/[0.03] border-white/10 p-6 flex flex-col h-full transition-all duration-300 hover:border-white/20" style={{ boxShadow: 'none' }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />)}
                  </div>
                  <p className="text-white/80 leading-relaxed flex-1">“{t.quote}”</p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                    <Avatar className="w-10 h-10"><AvatarFallback className="bg-[#6D5DFB] text-white text-xs font-bold">{t.initials}</AvatarFallback></Avatar>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}