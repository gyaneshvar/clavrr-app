import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo'
import { SplineSceneBasic } from '@/components/ui/spline-demo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Security', href: '#security' },
  { label: 'FAQs', href: '#faqs' },
]

const workflowSteps = [
  {
    title: 'Map',
    detail:
      'We map one high-friction workflow, every handoff, and every exception path.',
  },
  {
    title: 'Automate',
    detail:
      'Clavrr deploys AI agents into your existing stack to execute repetitive operations with guardrails.',
  },
  {
    title: 'Optimize',
    detail:
      'You track cycle time, quality, and throughput in real time and continuously improve outcomes.',
  },
]

const useCases = [
  {
    title: 'Architecture Quotation',
    pain: 'Manual estimate preparation can take 5-7 days.',
    impact:
      'Deliver scope-aligned quote packs in hours with faster response and higher conversion.',
  },
  {
    title: 'Retail Shift Operations',
    pain: 'Store managers lose hours weekly to schedule conflicts and overtime leakage.',
    impact:
      'Predict staffing gaps, automate swaps, and stabilize labor cost with less admin load.',
  },
  {
    title: 'Field Service Dispatch',
    pain: 'Critical requests get delayed through fragmented triage and assignment.',
    impact:
      'Route by urgency and skill instantly while keeping teams and customers informed.',
  },
]

const outcomeBullets = [
  '30-60% faster cycle times in targeted workflows',
  'Lower manual coordination and follow-up burden',
  'Higher first-pass output consistency',
  'Operational scale without linear headcount growth',
]

const pilotTimeline = [
  'Week 1: Discovery and baseline metrics',
  'Week 2: Workflow design and integration setup',
  'Week 3: Controlled live deployment',
  'Week 4: KPI validation and scale roadmap',
]

const faqs = [
  {
    question: 'How quickly can we go live?',
    answer:
      'Most pilots launch in 2-4 weeks depending on complexity and integration scope.',
  },
  {
    question: 'Do we need to replace current tools?',
    answer:
      'No. Clavrr is designed to orchestrate across your existing systems and workflows.',
  },
  {
    question: 'What process should we automate first?',
    answer:
      'Start where delays are frequent, handoffs are manual, and business impact is measurable.',
  },
  {
    question: 'How do we define success?',
    answer:
      'We baseline KPIs first, then measure cycle time, throughput, quality, and cost impact.',
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="relative">
      <div className="ambient ambient-top" />
      <div className="ambient ambient-bottom" />

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(248,245,240,0.86)] backdrop-blur-md">
        <nav className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Clavrr mark"
              className="h-10 w-10 rounded-xl border border-teal-800/20 object-cover shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-sm leading-none font-extrabold tracking-[0.15em] text-[#17314B]">
                CLAVRR
              </span>
              <span className="mt-1 text-[10px] leading-none tracking-[0.16em] text-[#35667c] uppercase">
                Clarity. Control. Compliance.
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#cta" className="btn-primary hidden md:inline-flex">
            Start Pilot
          </a>
        </nav>
      </header>

      <main
        id="top"
        className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-10 lg:px-10 lg:py-14"
      >
        <section className="hero-shell overflow-hidden rounded-[2rem] border border-[#dde5e9]">
          <div className="hero-grid p-7 md:p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <p className="section-eyebrow">AI WORKFLOW ORCHESTRATION</p>
              <h1 className="hero-title mt-4">
                Automate the Delays. Accelerate the Outcomes.
              </h1>
              <p className="hero-copy mt-5 max-w-xl">
                Clavrr transforms repetitive operational bottlenecks into reliable,
                measurable AI-driven execution across quoting, staffing, and core
                service workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#cta" className="btn-primary">
                  Start a 30-Day Pilot
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#use-cases" className="btn-secondary">
                  Explore Use Cases
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Faster cycle time', 'Lower manual effort', 'Transparent ROI'].map(
                  (item) => (
                    <div key={item} className="chip-item">
                      <Sparkles className="h-4 w-4" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="hero-logo-card"
            >
              <img
                src="/clavrr-logo.png"
                alt="Clavrr logo"
                className="h-auto w-full rounded-3xl object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-[#dce5e9] bg-[#ecf7fb] p-6 md:grid-cols-3 md:p-8">
          {[
            'Architecture and design teams',
            'Multi-location retail operators',
            'Service operations with high-volume handoffs',
          ].map((item, index) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-2 text-sm font-semibold text-[#17415c]"
            >
              <CheckCircle2 className="h-4 w-4" />
              {item}
            </motion.p>
          ))}
        </section>

        <section id="how-it-works" className="section-wrap">
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="Most teams are not short on tools. They are short on flow."
            description="We remove workflow drag by combining process mapping, practical AI automation, and KPI instrumentation in one execution model."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="glass-card"
              >
                <p className="font-mono text-xs tracking-[0.2em] text-[#4f7f96] uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#15344f]">{step.title}</h3>
                <p className="mt-3 text-[#2f4e61]">{step.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="use-cases" className="section-wrap">
          <SectionHeader
            eyebrow="USE CASES"
            title="Deploy where delays are expensive and outcomes are measurable."
            description="Begin with one painful process and prove value quickly, then scale across adjacent workflows."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.article
                key={useCase.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                viewport={{ once: true, amount: 0.35 }}
                className="usecase-card"
              >
                <h3 className="text-xl font-bold text-[#17314b]">{useCase.title}</h3>
                <p className="mt-3 text-sm text-[#436173]">Pain: {useCase.pain}</p>
                <p className="mt-3 text-[#25495f]">Impact: {useCase.impact}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <SplineSceneBasic />
        </section>

        <section id="outcomes" className="section-wrap grid gap-8 xl:grid-cols-[1.05fr_1fr]">
          <div className="rounded-3xl border border-[#dbe4e8] bg-white/85 p-7 md:p-9">
            <SectionHeader
              eyebrow="OUTCOMES"
              title="Operating gains you can present to leadership."
              description="Clavrr tracks the metrics that matter to both operators and investors."
            />

            <ul className="mt-7 space-y-3">
              {outcomeBullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#24485c]">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#1f8ea4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="metric-grid mt-8">
              <div>
                <p className="metric-value">30-60%</p>
                <p className="metric-label">Cycle Time Reduction</p>
              </div>
              <div>
                <p className="metric-value">2-4x</p>
                <p className="metric-label">Workflow Throughput Lift</p>
              </div>
              <div>
                <p className="metric-value">2-4 Weeks</p>
                <p className="metric-label">Pilot to Go-Live</p>
              </div>
            </div>
          </div>

          <GlowingEffectDemo />
        </section>

        <section className="section-wrap rounded-3xl border border-[#d4e3ea] bg-[#f5fbfe] p-7 md:p-10">
          <SectionHeader
            eyebrow="PILOT TIMELINE"
            title="A focused 30-day sprint from diagnosis to proof."
            description="Tight scope, fast deployment, measurable outcomes."
          />

          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {pilotTimeline.map((item, index) => (
              <li
                key={item}
                className={cn('timeline-item', index % 2 !== 0 && 'md:translate-y-6')}
              >
                <span className="timeline-index">0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="security"
          className="section-wrap rounded-3xl border border-[#d5dfe5] bg-[#13293f] p-8 text-[#dbe8ef] md:p-10"
        >
          <SectionHeader
            eyebrow="SECURITY AND COMPLIANCE"
            title="Enterprise controls from day one."
            description="Built for security-conscious operations with role boundaries, traceability, and deployment discipline."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              'Role-based access control with operational permissions',
              'Encrypted data handling across transit and storage',
              'Comprehensive activity and decision audit trails',
              'Deployment patterns aligned with enterprise IT governance',
            ].map((item) => (
              <div key={item} className="security-item">
                <ShieldCheck className="h-4 w-4 text-[#7bd6e9]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="faqs" className="section-wrap">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers for operators, buyers, and implementation teams."
            description="Short and practical responses based on real deployment conversations."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3 className="text-lg font-bold text-[#163550]">{item.question}</h3>
                <p className="mt-2 text-[#3b5a6d]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="relative overflow-hidden rounded-[2rem] border border-[#164461]/30 bg-[linear-gradient(135deg,#17324b_0%,#1d8ca1_100%)] p-8 text-white md:p-11"
        >
          <div className="pointer-events-none absolute right-0 bottom-[-4.5rem] h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-[-4.5rem] h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
          <p className="section-eyebrow !text-[#b5e9f4]">START HERE</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Pick one workflow. We will make it measurable, automated, and scalable.
          </h2>
          <p className="mt-4 max-w-2xl text-[#daf4fb]">
            Launch a Clavrr pilot to move from process friction to operational
            momentum in weeks.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#top" className="btn-contrast">
              Launch Your Clavrr Pilot
            </a>
            <a href="#how-it-works" className="btn-ghost">
              Review Method
            </a>
          </div>
        </section>

        <footer className="mb-4 rounded-3xl border border-[#d9e0e4] bg-white/70 px-6 py-7">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-[#244760] uppercase">
                CLAVRR
              </p>
              <p className="mt-1 text-sm text-[#476677]">
                AI Workflow Automation for High-Execution Teams
              </p>
            </div>
            <p className="font-mono text-xs tracking-[0.14em] text-[#4c748a] uppercase">
              Automate the Delays. Accelerate the Outcomes.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
