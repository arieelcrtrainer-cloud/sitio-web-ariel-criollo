import { PrimaryHeader } from '@/components/home/primary-header'
import { HeroSection } from '@/components/home/hero-section'
import { ResultsSection } from '@/components/home/results-section'
import { VslSection } from '@/components/home/vsl-section'
import { ProblemSection } from '@/components/home/problem-section'
import { ReframeSection } from '@/components/home/reframe-section'
import { ProcessSection } from '@/components/home/process-section'
import { CoachingDimensionsSection } from '@/components/home/coaching-dimensions-section'
import { ExperiencesSection } from '@/components/home/experiences-section'
import { AboutArielSection } from '@/components/home/about-ariel-section'
import { OnlineCoachingSection } from '@/components/home/online-coaching-section'
import { CoachingOffersSection } from '@/components/home/coaching-offers-section'
import { CoachingComparisonSection } from '@/components/home/coaching-comparison-section'
import { CoachingDiagnostic } from '@/components/home/coaching-diagnostic'
import { RiskReductionSection } from '@/components/home/risk-reduction-section'
import { FaqSection } from '@/components/home/faq-section'
import { FinalCtaSection } from '@/components/home/final-cta-section'
import { SiteFooter } from '@/components/home/site-footer'

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
        <ExperiencesSection />
        <AboutArielSection />
        <OnlineCoachingSection />
        <CoachingOffersSection />
        <CoachingComparisonSection />
        <CoachingDiagnostic />
        <RiskReductionSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

