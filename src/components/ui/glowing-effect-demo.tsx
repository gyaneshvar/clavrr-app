import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react'

import { GlowingEffect } from '@/components/ui/glowing-effect'
import { cn } from '@/lib/utils'

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-2 gap-4">
      <GridItem
        icon={<Box className="h-4 w-4" />}
        title="Map Workflow Bottlenecks"
        description="Expose hidden process friction before you automate."
      />
      <GridItem
        icon={<Sparkles className="h-4 w-4" />}
        title="Deploy in Weeks"
        description="Integrate quickly and start improving cycle times immediately."
      />
      <GridItem
        icon={<Settings className="h-4 w-4" />}
        title="Design Agent Interventions"
        description="Choose high-impact points where AI creates measurable gains."
      />
      <GridItem
        icon={<Search className="h-4 w-4" />}
        title="Measure Real ROI"
        description="Track reduced delays, fewer handoffs, and stronger throughput."
      />
      <GridItem
        className="col-span-2"
        icon={<Lock className="h-4 w-4" />}
        title="Human-Controlled Decisions"
        description="Keep approvals in the loop for trust, safety, and accountability."
      />
    </ul>
  )
}

interface GridItemProps {
  className?: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

function GridItem({ className, icon, title, description }: GridItemProps) {
  return (
    <li className={cn('min-h-[12rem] list-none', className)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border bg-white/40 p-2 backdrop-blur-sm md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-white/85 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-balance pt-0.5 font-sans text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] text-foreground md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.25rem] text-muted-foreground md:text-base md:leading-[1.5rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
