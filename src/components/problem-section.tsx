import { Brain, Zap, Shield } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className=" py-24 sm:py-32">
      <div className="space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm font-semibold tracking-wide text-red-500">
            PROBLEM
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
          Learning without Financial Barriers is Hard to Find.
          </h2>
        </div>

        <div className="flex p-5 text-center mx-10">
          <div className="flex flex-col items-center space-y-4 ">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100/10">
              <Brain className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold">No Cost for Learning</h3>
            <p className="text-muted-foreground">
            Many learning resources are expensive. SkillSwap lets people share their skills for free, so anyone can learn without worrying about costs.
            </p>
          </div>

          <div className="flex flex-col items-center  space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100/10">
              <Zap className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold">Access to Experts            </h3>
            <p className="text-muted-foreground">
It can be hard to find mentors or experts. SkillSwap connects people with experts from all over, making it easier to learn from the best.
</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100/10">
              <Shield className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold">Learn Anytime, Anywhere
            </h3>
            <p className="text-muted-foreground">
            Life is busy, and finding time to learn can be tough. SkillSwap allows users to exchange skills on their own time, making learning flexible and convenient.            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

