"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLayoutEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const mediaRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    // Garantir registro (idempotente)
    // ensureGsapRegistered()
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
        )
      }

      if (sectionRef.current && mediaRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={sectionRef} className="relative select-none min-h-[100svh] overflow-hidden">
      <div ref={mediaRef} className="absolute inset-0 z-0 will-change-transform">
        <video
          className="h-full w-full object-cover object-center pointer-events-none z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/background-video-gihal.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 pointer-events-none bg-green-950/40" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:py-24 md:py-28 flex items-center min-h-[100svh]">
        <div ref={textRef} className="max-w-3xl text-white will-change-transform">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            GIHAL: Inovação e Produtividade no Campo
          </h1>

          <p className="mt-3 text-white/90 max-w-2xl">
            Implementos agrícolas robustos, de alta qualidade e preço competitivo. Mais de 30 anos de tradição impulsionando a agricultura sustentável.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/produtos">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                Explore Nossos Produtos
              </Button>
            </Link>
            <Link href="/revendedores">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                Encontre um Revendedor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
