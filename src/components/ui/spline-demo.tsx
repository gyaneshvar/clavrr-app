import { Card } from '@/components/ui/card'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[500px] w-full overflow-hidden border-0 bg-black/95">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-200 uppercase">
            Workflow Intelligence Layer
          </p>
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            From Manual Handoffs to Autonomous Execution
          </h2>
          <p className="mt-4 max-w-lg text-neutral-300">
            Clavrr coordinates the right task, person, and decision at the right
            moment, so your teams move faster with less operational friction and
            measurable performance gains.
          </p>
        </div>

        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}
