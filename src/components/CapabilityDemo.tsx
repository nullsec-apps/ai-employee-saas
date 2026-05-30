import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Terminal, CheckCircle2, Sparkles } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { useInView } from '../hooks/useInView'

const useCases: Record<string, { title: string; desc: string; lines: string[] }> = {
  Sales: {
    title: 'Close more deals on autopilot',
    desc: 'Your AI sales rep researches prospects, writes personalized outreach, and books meetings — so your closers only talk to ready buyers.',
    lines: [
      'Pulling 142 new leads from inbound forms...',
      'Enriching profiles with firmographic data...',
      'Scoring leads — 38 marked high-intent.',
      'Drafting personalized emails for top 38...',
      'Sent. Booked 6 demos directly to calendar.'
    ]
  },
  Support: {
    title: 'Answer every ticket in seconds',
    desc: 'Your AI support agent resolves common issues instantly, pulls answers from your help center, and escalates the hard cases with full context.',
    lines: [
      'New ticket: "Where is my refund?"',
      'Looking up order #48213 in Stripe...',
      'Found: refund issued, ETA 3-5 days.',
      'Replying to customer with status + link...',
      'Resolved in 22s. CSAT logged: 5★.'
    ]
  },
  Data: {
    title: 'Get answers, not just dashboards',
    desc: 'Your AI analyst queries the warehouse, spots anomalies, and explains what is happening in plain English — right inside Slack.',
    lines: [
      'Question: "Why did SMB churn rise?"',
      'Running SQL against warehouse...',
      'Detected: 23% churn spike in SMB tier.',
      'Root cause: failed payment retries.',
      'Posted summary + chart to #revenue.'
    ]
  }
}

export default function CapabilityDemo() {
  const [tab, setTab] = useState('Sales')
  const { ref, inView } = useInView(0.3)
  const uc = useCases[tab]
  const { displayed, current, done } = useTypewriter(uc.lines, inView)

  return (
    <section id="demo" ref={ref} className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-[#22D3EE]/15 text-[#7de8f7] border-[#22D3EE]/20 rounded-full">Live demo</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">See an AI employee work</h2>
          <p className="mt-4 text-white/60 text-lg">Switch use cases to watch how Nexa employees complete real tasks, end to end.</p>

          <Tabs value={tab} onValueChange={setTab} className="mt-6">
            <TabsList className="bg-white/5 border border-white/10">
              {Object.keys(useCases).map((k) => (
                <TabsTrigger key={k} value={k} className="data-[state=active]:bg-[#6D5DFB] data-[state=active]:text-white text-white/60 transition-all duration-200">{k}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <h3 className="font-display font-bold text-2xl mt-8">{uc.title}</h3>
          <p className="text-white/60 mt-3 leading-relaxed">{uc.desc}</p>
        </div>

        <Card className="bg-[#0c0c14] border-white/10 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-[#FB7185]" />
            <span className="w-3 h-3 rounded-full bg-[#FBBF24]" />
            <span className="w-3 h-3 rounded-full bg-[#34D399]" />
            <span className="ml-2 flex items-center gap-1.5 text-xs text-white/50"><Terminal className="w-3.5 h-3.5" /> nexa-agent · {tab.toLowerCase()}</span>
          </div>
          <div className="p-5 font-mono text-sm min-h-[280px] space-y-2.5">
            {displayed.map((line, i) => (
              <div key={i} className="flex items-start gap-2 text-white/65">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#34D399] shrink-0" />
                <span>{line}</span>
              </div>
            ))}
            {!done && current && (
              <div className="flex items-start gap-2 text-white">
                <span className="w-4 h-4 mt-0.5 rounded-full border-2 border-[#6D5DFB] border-t-transparent animate-spin shrink-0" />
                <span>{current}<span className="inline-block w-1.5 h-4 bg-[#6D5DFB] ml-0.5 animate-pulse" /></span>
              </div>
            )}
            {done && (
              <div className="flex items-center gap-2 text-[#34D399] pt-2"><Sparkles className="w-4 h-4" /> Task chain complete.</div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}