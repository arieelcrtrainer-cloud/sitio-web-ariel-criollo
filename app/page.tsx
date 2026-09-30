import { PrimaryHeader } from '@/components/home/primary-header'
import { HeroSection } from '@/components/home/hero-section'
import { ResultsSection } from '@/components/home/results-section'
import { VslSection } from '@/components/home/vsl-section'
import { ProblemSection } from '@/components/home/problem-section'
import { ReframeSection } from '@/components/home/reframe-section'
import { ProcessSection } from '@/components/home/process-section'
import { CoachingDimensionsSection } from '@/components/home/coaching-dimensions-section'

export default function Page() {
  return (
    <>
      <PrimaryHeader />
      <main id="inicio">
        <HeroSection />
        <ResultsSection />
        <VslSection />
        <ProblemSection />
        <ReframeSection />
        <ProcessSection />
        <CoachingDimensionsSection />
      </main>
    </>
  )
}

