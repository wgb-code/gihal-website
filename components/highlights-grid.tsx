"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProductCard, { type Product } from "@/components/product-card"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  items: Product[]
  title?: string
  moreHref?: string
  moreLabel?: string
}

export default function HighlightsGrid({
  items = [],
  title = "Destaques",
  moreHref = "/produtos",
  moreLabel = "Ver catálogo completo",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduce) return

    // Context para escopo/cleanup
    const ctx = gsap.context(() => {
      // Anima título e link
      const header = root.querySelector("[data-anim='header']")
      if (header) {
        gsap.fromTo(
          header,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
            },
          }
        )
      }

      // Seleciona os wrappers dos cards
      const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-anim='card']"))

      // Stagger nos cards
      gsap.fromTo(
        cards,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        }
      )

      // Sutil parallax/scale nas imagens dos cards
      cards.forEach((c) => {
        const img = c.querySelector("img")
        if (!img) return
        gsap.fromTo(
          img,
          { scale: 1.035, y: 0 },
          {
            scale: 1,
            y: -6,
            ease: "none",
            scrollTrigger: {
              trigger: c,
              start: "top 90%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="container mx-auto px-4 py-12">
      <div data-anim="header" className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <a href={moreHref} className="text-sm text-green-700 hover:underline">
          {moreLabel}
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map((p) => (
          <div key={p.id} data-anim="card" className="will-change-transform">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
