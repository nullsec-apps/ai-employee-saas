import { Separator } from '@/components/ui/separator'
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react'

const cols = [
  { title: 'Product', links: ['AI Employees', 'Integrations', 'Pricing', 'Changelog', 'Security'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'API Reference', 'Help Center', 'Community', 'Status'] }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg transition-opacity hover:opacity-80">
              <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg,#6D5DFB,#22D3EE)' }}><Sparkles className="w-4 h-4 text-white" /></span>
              Nexa
            </a>
            <p className="text-white/55 text-sm mt-4 max-w-xs leading-relaxed">The fastest way to hire AI employees that work inside your tools, 24/7.</p>
            <div className="flex gap-3 mt-5">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200"><Icon className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/55 hover:text-white transition-colors duration-200">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-white/10 my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/45">
          <p>© {new Date().getFullYear()} Nexa Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}