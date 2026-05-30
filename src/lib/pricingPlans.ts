export interface Plan {
  name: string
  monthly: number
  annual: number
  blurb: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 49,
    annual: 39,
    blurb: 'For small teams hiring their first AI employee.',
    features: [
      '1 AI employee',
      '5,000 tasks / month',
      '3 integrations',
      'Email & chat support',
      'Basic analytics'
    ],
    highlighted: false,
    cta: 'Start free trial'
  },
  {
    name: 'Growth',
    monthly: 149,
    annual: 119,
    blurb: 'For scaling teams building an AI workforce.',
    features: [
      'Up to 5 AI employees',
      '50,000 tasks / month',
      'Unlimited integrations',
      'Priority support',
      'Advanced analytics & reporting',
      'Custom workflows'
    ],
    highlighted: true,
    cta: 'Start free trial'
  },
  {
    name: 'Enterprise',
    monthly: 0,
    annual: 0,
    blurb: 'For organizations with custom needs at scale.',
    features: [
      'Unlimited AI employees',
      'Unlimited tasks',
      'SSO & SAML',
      'Dedicated success manager',
      'SOC 2 & HIPAA compliance',
      'On-prem deployment options'
    ],
    highlighted: false,
    cta: 'Contact sales'
  }
]