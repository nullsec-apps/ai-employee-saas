import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { faqs } from '../lib/content'

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Badge className="bg-white/5 text-white/70 border-white/10 rounded-full">FAQ</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">Questions, answered</h2>
          <p className="mt-4 text-white/60 text-lg">Everything you need to know about hiring AI employees.</p>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-white/80 hover:no-underline font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-white/60 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}