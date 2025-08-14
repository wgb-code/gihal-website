import SiteShell from "@/components/site-shell"
import Hero from "@/components/hero"
import FeatureIcons from "@/components/feature-icons"
import Testimonials from "@/components/testimonials"
import NewsCards from "@/components/news-cards"
import CtaBanner from "@/components/cta-banner"
import HighlightsGrid from "@/components/highlights-grid"
import { produtos } from "@/lib/data"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "GIHAL - Implementos Agrícolas",
  description: "Implementos agrícolas robustos e acessíveis: plantadeiras, semeadeiras, carretas e mais.",
}

export default function Page() {
  const destaques = produtos.slice(0, 3)

  return (
    <SiteShell>
      <Hero />
      <HighlightsGrid items={destaques as any} />
      <FeatureIcons />

      <section className="container mx-auto px-4 py-12">
        <div className="rounded-2xl overflow-hidden border">
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/gihal-institutional-video-thumb.png"
              alt="Vídeo institucional GIHAL"
              fill
              className="object-cover"
              priority={false}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="sr-only">Vídeo institucional (coloque aqui seu player quando disponível)</div>
      </section>

      <Testimonials />
      <NewsCards />
      <CtaBanner />
    </SiteShell>
  )
}
