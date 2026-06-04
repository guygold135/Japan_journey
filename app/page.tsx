import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { ExpeditionHighlights } from "@/components/expedition-highlights"
import { PremiumInclusions } from "@/components/premium-inclusions"
import { AboutGuide } from "@/components/about-guide"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <div id="vision">
        <VisionSection />
      </div>
      <div id="expedition">
        <ExpeditionHighlights />
      </div>
      <PremiumInclusions />
      <div id="guide">
        <AboutGuide />
      </div>
      <div id="apply">
        <ApplicationForm />
      </div>
      <Footer />
    </main>
  )
}
