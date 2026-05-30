export const trustLogos: string[] = ['Acme', 'Northwind', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark', 'Wayne']

export const integrations: string[] = [
  'Slack', 'Salesforce', 'Gmail', 'Notion', 'HubSpot', 'Zendesk', 'Intercom', 'Stripe',
  'Snowflake', 'BigQuery', 'Looker', 'Airtable', 'Greenhouse', 'LinkedIn', 'Calendly', 'Zapier'
]

export const stats: { label: string; value: number; suffix: string }[] = [
  { label: 'Hours saved monthly', value: 184000, suffix: '+' },
  { label: 'Tasks automated', value: 12, suffix: 'M' },
  { label: 'Average cost reduction', value: 62, suffix: '%' },
  { label: 'Platform uptime', value: 99.9, suffix: '%' }
]

export const steps: { title: string; desc: string }[] = [
  { title: 'Choose an employee', desc: 'Pick from our catalog of specialized AI employees or describe the role you need filled.' },
  { title: 'Connect your tools', desc: 'Securely link the apps your AI employee will work in — Slack, your CRM, email, and more.' },
  { title: 'Watch them work', desc: 'Your AI employee starts handling tasks immediately, working 24/7 with full transparency.' }
]

export const testimonials: { name: string; role: string; company: string; quote: string; initials: string }[] = [
  { name: 'Sarah Chen', role: 'VP Sales', company: 'Northwind', quote: 'Sienna books more qualified demos than two of our SDRs combined. Our pipeline has never been healthier.', initials: 'SC' },
  { name: 'Marcus Hill', role: 'Head of Support', company: 'Globex', quote: 'We deflected 68% of tickets in the first month. Our human agents now focus only on the hard stuff.', initials: 'MH' },
  { name: 'Priya Nair', role: 'Talent Lead', company: 'Initech', quote: 'Time-to-shortlist dropped from 9 days to 2. The recruiter AI never drops a candidate in the cracks.', initials: 'PN' },
  { name: 'Devon Brooks', role: 'Data Director', company: 'Hooli', quote: 'Devon answers data questions in Slack instantly. My analysts finally have time for deep work.', initials: 'DB' },
  { name: 'Lena Park', role: 'CMO', company: 'Stark Industries', quote: 'Cost-per-lead is down 18% and our content calendar runs itself. It feels like a 3-person team.', initials: 'LP' },
  { name: 'Theo Vance', role: 'COO', company: 'Wayne Enterprises', quote: 'We reclaimed 30+ hours a week in ops overhead. The ROI was obvious within the first sprint.', initials: 'TV' }
]

export const faqs: { q: string; a: string }[] = [
  { q: 'What exactly is an AI employee?', a: 'An AI employee is an autonomous agent trained for a specific role — like a sales rep or support agent. It works inside your existing tools, completes real tasks, and operates 24/7 without breaks.' },
  { q: 'How secure is my data?', a: 'We are SOC 2 Type II compliant with end-to-end encryption. Your data is never used to train shared models, and you control exactly which tools each AI employee can access.' },
  { q: 'How long does setup take?', a: 'Most teams have their first AI employee working within an afternoon. Choose an employee, connect your tools via OAuth, and approve its first tasks.' },
  { q: 'Can I control what an AI employee does?', a: 'Absolutely. You set guardrails, approval thresholds, and scopes. You can require human approval for sensitive actions and review a full audit log of everything it does.' },
  { q: 'What happens if I exceed my task limit?', a: 'We notify you well before you hit your limit. You can upgrade instantly, and tasks are never silently dropped — they queue until capacity is available.' },
  { q: 'Do AI employees replace my team?', a: 'No — they amplify it. They handle repetitive, high-volume work so your people can focus on strategy, relationships, and the work that needs a human touch.' }
]