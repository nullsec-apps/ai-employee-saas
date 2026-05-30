import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Sparkles } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { cn } from '../lib/utils'

const links = [
  { label: 'AI Employees', href: '#catalog' },
  { label: 'Product', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' }
]

export default function Navbar() {
  const y = useScrollPosition()
  const [open, setOpen] = useState(false)
  const scrolled = y > 24

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/40' : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg transition-opacity hover:opacity-80">
          <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg,#6D5DFB,#22D3EE)' }}>
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.2} />
          </span>
          Nexa
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200">Sign in</Button>
          <Button asChild className="bg-[#6D5DFB] hover:bg-[#5b4ce0] text-white transition-all duration-200">
            <a href="#cta">Start free trial</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white"><Menu className="w-5 h-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0A0A0F] border-white/10 text-white">
              <div className="flex flex-col gap-2 mt-10">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-base text-white/80 hover:bg-white/5 transition-colors duration-200">
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-4 bg-[#6D5DFB] hover:bg-[#5b4ce0]" onClick={() => setOpen(false)}>
                  <a href="#cta">Start free trial</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}