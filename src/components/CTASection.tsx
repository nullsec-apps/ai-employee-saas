import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) { toast.error('Please enter a valid email'); return }
    setLoading(true)
    setTimeout(() => {
      toast.success('You are on the list! Check your inbox.')
      setEmail('')
      setLoading(false)
    }, 700)
  }
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <Card className="relative overflow-hidden border-white/10 p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(120deg,#15131f,#1b1832)' }}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-40" style={{ background: 'radial-gradient(circle,#6D5DFB,transparent 70%)' }} />
          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto">Build your AI workforce today</h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">Start your 14-day free trial. No credit card required, cancel anytime.</p>
            <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@company.com" className="h-12 bg-white/5 border-white/15 text-white placeholder:text-white/40" />
              <Button type="submit" disabled={loading} className="h-12 px-6 bg-[#6D5DFB] hover:bg-[#5b4ce0] text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.02] disabled:opacity-70">
                {loading ? 'Joining...' : <>Get started <ArrowRight className="w-4 h-4 ml-2" /></>}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}