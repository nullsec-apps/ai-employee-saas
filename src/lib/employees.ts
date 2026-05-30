export interface Employee {
  id: string
  name: string
  role: string
  department: string
  initials: string
  color: string
  skills: string[]
  capabilities: string[]
  tasks: string[]
  integrations: string[]
}

export const departments = ['All', 'Sales', 'Support', 'People', 'Data', 'Marketing', 'Ops'] as const

export const employees: Employee[] = [
  {
    id: 'sienna',
    name: 'Sienna',
    role: 'AI Sales Rep',
    department: 'Sales',
    initials: 'SR',
    color: '#6D5DFB',
    skills: ['Lead Qualification', 'Outbound Email', 'CRM Updates', 'Demo Booking'],
    capabilities: [
      'Qualifies inbound leads 24/7 using BANT scoring',
      'Writes and sends personalized outreach sequences',
      'Auto-updates Salesforce records after every touch',
      'Books meetings directly into your calendar'
    ],
    tasks: [
      'Researched 142 prospects and enriched their CRM profiles',
      'Sent 87 personalized follow-ups overnight',
      'Booked 6 qualified demos for the AE team',
      'Flagged 3 hot accounts showing buying intent'
    ],
    integrations: ['Salesforce', 'HubSpot', 'Gmail', 'Slack', 'Calendly']
  },
  {
    id: 'marcus',
    name: 'Marcus',
    role: 'AI Support Agent',
    department: 'Support',
    initials: 'SA',
    color: '#22D3EE',
    skills: ['Ticket Triage', 'Live Chat', 'Knowledge Base', 'Refund Handling'],
    capabilities: [
      'Resolves 68% of tickets without human escalation',
      'Replies in under 30 seconds, in 40+ languages',
      'Pulls answers from your live help center',
      'Escalates complex issues with full context attached'
    ],
    tasks: [
      'Resolved 214 support tickets with 4.8★ CSAT',
      'Handled 39 live chats during off-hours',
      'Drafted 12 new knowledge-base articles',
      'Escalated 5 billing disputes to the finance team'
    ],
    integrations: ['Zendesk', 'Intercom', 'Slack', 'Notion', 'Stripe']
  },
  {
    id: 'priya',
    name: 'Priya',
    role: 'AI Recruiter',
    department: 'People',
    initials: 'RC',
    color: '#F472B6',
    skills: ['Resume Screening', 'Candidate Outreach', 'Interview Scheduling', 'Sourcing'],
    capabilities: [
      'Screens hundreds of applications against your rubric',
      'Sources passive candidates from LinkedIn & GitHub',
      'Schedules interviews across multiple calendars',
      'Sends personalized rejection & offer comms'
    ],
    tasks: [
      'Screened 320 applicants for 4 open roles',
      'Surfaced 18 strong passive candidates',
      'Scheduled 22 interviews this week',
      'Reduced time-to-shortlist from 9 days to 2'
    ],
    integrations: ['Greenhouse', 'LinkedIn', 'Gmail', 'Slack', 'Calendly']
  },
  {
    id: 'devon',
    name: 'Devon',
    role: 'AI Data Analyst',
    department: 'Data',
    initials: 'DA',
    color: '#34D399',
    skills: ['SQL Queries', 'Dashboards', 'Anomaly Detection', 'Reporting'],
    capabilities: [
      'Writes and runs SQL against your warehouse',
      'Builds dashboards and weekly metric digests',
      'Detects anomalies and alerts the right team',
      'Answers plain-English questions about your data'
    ],
    tasks: [
      'Generated the Monday revenue digest automatically',
      'Flagged a 23% churn spike in the SMB segment',
      'Built 3 self-serve dashboards for marketing',
      'Answered 41 ad-hoc data questions in Slack'
    ],
    integrations: ['Snowflake', 'BigQuery', 'Looker', 'Slack', 'Notion']
  },
  {
    id: 'lena',
    name: 'Lena',
    role: 'AI Marketer',
    department: 'Marketing',
    initials: 'MK',
    color: '#FBBF24',
    skills: ['Copywriting', 'Campaign Ops', 'SEO', 'Social Scheduling'],
    capabilities: [
      'Drafts on-brand copy for ads, emails & blogs',
      'Plans and schedules multi-channel campaigns',
      'Optimizes pages for SEO and conversion',
      'Reports on campaign performance daily'
    ],
    tasks: [
      'Drafted 9 ad variants and an email nurture flow',
      'Scheduled a week of social content across 3 channels',
      'Optimized 14 landing pages for target keywords',
      'Cut cost-per-lead by 18% this month'
    ],
    integrations: ['HubSpot', 'Google Ads', 'Buffer', 'Webflow', 'Slack']
  },
  {
    id: 'theo',
    name: 'Theo',
    role: 'AI Ops Manager',
    department: 'Ops',
    initials: 'OM',
    color: '#FB7185',
    skills: ['Process Automation', 'Vendor Mgmt', 'Approvals', 'Inventory'],
    capabilities: [
      'Automates repetitive operational workflows',
      'Routes approvals to the right stakeholders',
      'Monitors inventory and reorders proactively',
      'Keeps SOPs and runbooks up to date'
    ],
    tasks: [
      'Automated 11 manual approval workflows',
      'Reordered 4 low-stock SKUs before they ran out',
      'Resolved 7 vendor invoice discrepancies',
      'Saved the ops team ~31 hours this week'
    ],
    integrations: ['Notion', 'Slack', 'Airtable', 'QuickBooks', 'Zapier']
  }
]