import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, Zap, ListChecks } from 'lucide-react'
import toast from 'react-hot-toast'
import { Employee } from '../lib/employees'

interface Props {
  employee: Employee | null
  onClose: () => void
}

export default function EmployeeDetailDialog({ employee, onClose }: Props) {
  return (
    <Dialog open={!!employee} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-[#101018] border-white/10 text-white max-w-lg max-h-[90vh] overflow-y-auto">
        {employee && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl grid place-items-center font-bold text-white" style={{ background: employee.color, boxShadow: `0 8px 30px ${employee.color}55` }}>{employee.initials}</div>
                <div className="text-left">
                  <DialogTitle className="font-display text-2xl">{employee.name}</DialogTitle>
                  <p className="text-sm" style={{ color: employee.color }}>{employee.role}</p>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-5 mt-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white/80 mb-2"><Zap className="w-4 h-4 text-[#6D5DFB]" /> Capabilities</p>
                <ul className="space-y-2">
                  {employee.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-white/65"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#34D399] shrink-0" /> {c}</li>
                  ))}
                </ul>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white/80 mb-2"><ListChecks className="w-4 h-4 text-[#22D3EE]" /> Recent tasks completed</p>
                <ul className="space-y-2">
                  {employee.tasks.map((t) => (
                    <li key={t} className="text-sm text-white/65 pl-3 border-l-2" style={{ borderColor: employee.color }}>{t}</li>
                  ))}
                </ul>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="text-sm font-semibold text-white/80 mb-2">Works with</p>
                <div className="flex flex-wrap gap-1.5">
                  {employee.integrations.map((i) => (
                    <Badge key={i} className="bg-white/5 text-white/70 border-white/10 font-normal">{i}</Badge>
                  ))}
                </div>
              </div>
              <Button
                className="w-full h-11 text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ background: employee.color }}
                onClick={() => { toast.success(`${employee.name} is being deployed to your workspace!`); onClose() }}
              >
                Deploy {employee.name}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}