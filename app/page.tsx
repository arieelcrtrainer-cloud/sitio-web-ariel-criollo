import { PrimaryHeader } from '@/components/home/primary-header'
import { HeroSection } from '@/components/home/hero-section'
import { ResultsSection } from '@/components/home/results-section'
import { VslSection } from '@/components/home/vsl-section'

export default function Page() {
  return (
    <>
      <PrimaryHeader />
      <main id="inicio">
        <HeroSection />
        <ResultsSection />
        <VslSection />
      </main>
    </>
  )
}

