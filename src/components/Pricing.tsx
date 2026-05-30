import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'
import { plans } from '../lib/pricingPlans'
import { cn } from '../lib/utils'
import toast from 'react-hot-toast'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge className="bg-[#6D5DFB]/15 text-[#a99dff] border-[#6D5DFB]/20 rounded-full">Pricing</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">Pay for outcomes, not headcount</h2>
          <p className="mt-4 text-white/60 text-lg">Simple plans that scale with your AI workforce. Cancel anytime.</p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={cn('text-sm transition-colors', !annual ? 'text-white' : 'text-white/50')}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} className="data-[state=checked]:bg-[#6D5DFB]" />
            <span className={cn('text-sm transition-colors', annual ? 'text-white' : 'text-white/50')}>Annual</span>
            <Badge className="bg-[#34D399]/15 text-[#7eecc0] border-[#34D399]/20">Save 20%</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-12 items-stretch">
          {plans.map((plan) => {
            const price = annual ? plan.annual : plan.monthly
            const isCustom = plan.monthly === 0
            return (
              <Card
                key={plan.name}
                className={cn(
                  'relative p-7 flex flex-col border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1',
                  plan.highlighted && 'border-[#6D5DFB]/60 bg-[#6D5DFB]/[0.06]'
                )}
                style={plan.highlighted ? { boxShadow: '0 20px 60px -20px #6D5DFB66' } : { boxShadow: 'none' }}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6D5DFB] text-white border-0">Most popular</Badge>
                )}
                <h3 className="font-display font-bold text-2xl">{plan.name}</h3>
                <p className="text-white/55 text-sm mt-2 min-h-[40px]">{plan.blurb}</p>
                <div className="mt-5 flex items-end gap-1">
                  {isCustom ? (
                    <span className="font-display font-extrabold text-4xl">Custom</span>
                  ) : (
                    <>
                      <span className="font-display font-extrabold text-4xl">${price}</span>
                      <span className="text-white/50 mb-1">/mo</span>
                    </>
                  )}
                </div>
                <Separator className="bg-white/10 my-6" />
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="w-4 h-4 mt-0.5 text-[#34D399] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => toast.success(isCustom ? 'Our team will reach out shortly!' : `Starting your ${plan.name} trial...`)}
                  className={cn(
                    'w-full mt-7 h-11 transition-all duration-200 hover:scale-[1.02]',
                    plan.highlighted ? 'bg-[#6D5DFB] hover:bg-[#5b4ce0] text-white' : 'bg-white/10 hover:bg-white/15 text-white'
                  )}
                >
                  {plan.cta}
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}