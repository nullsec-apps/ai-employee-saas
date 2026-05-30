import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowUpRight, Users } from 'lucide-react'
import { Employee, employees, departments } from '../lib/employees'
import { useInView } from '../hooks/useInView'

interface Props {
  onSelect: (e: Employee) => void
}

export default function AIEmployeeCatalog({ onSelect }: Props) {
  const [dept, setDept] = useState<string>('All')
  const { ref, inView } = useInView(0.1)
  const filtered = dept === 'All' ? employees : employees.filter((e) => e.department === dept)

  return (
    <section id="catalog" ref={ref} className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge className="bg-[#6D5DFB]/15 text-[#a99dff] border-[#6D5DFB]/20 rounded-full">The Catalog</Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">Meet your new team</h2>
          <p className="mt-4 text-white/60 text-lg">Each AI employee is purpose-built for a role. Filter by department and click any card to see exactly what they can do.</p>
        </div>

        <div className="flex justify-center mt-10">
          <Tabs value={dept} onValueChange={setDept}>
            <TabsList className="bg-white/5 border border-white/10 flex-wrap h-auto">
              {departments.map((d) => (
                <TabsTrigger key={d} value={d} className="data-[state=active]:bg-[#6D5DFB] data-[state=active]:text-white text-white/60 transition-all duration-200">{d}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center py-16 rounded-2xl border border-dashed border-white/10">
            <Users className="w-10 h-10 text-white/30 mx-auto" strokeWidth={1.5} />
            <p className="mt-4 text-white/60">No AI employees in this department yet.</p>
            <button onClick={() => setDept('All')} className="mt-3 text-sm text-[#a99dff] hover:text-white transition-colors">View all employees</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {filtered.map((emp, i) => (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card
                  onClick={() => onSelect(emp)}
                  className="group cursor-pointer bg-white/[0.03] border-white/10 hover:border-white/25 p-6 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: 'none' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl grid place-items-center font-bold text-white text-sm transition-transform duration-300 group-hover:scale-110" style={{ background: emp.color, boxShadow: `0 8px 30px ${emp.color}44` }}>{emp.initials}</div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <h3 className="font-display font-bold text-xl mt-4">{emp.name}</h3>
                  <p className="text-sm font-medium" style={{ color: emp.color }}>{emp.role}</p>
                  <p className="text-sm text-white/55 mt-3 leading-relaxed">{emp.capabilities[0]}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {emp.skills.slice(0, 3).map((s) => (
                      <Badge key={s} className="bg-white/5 text-white/60 border-white/10 font-normal">{s}</Badge>
                    ))}
                    {emp.skills.length > 3 && <Badge className="bg-white/5 text-white/40 border-white/10 font-normal">+{emp.skills.length - 3}</Badge>}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}