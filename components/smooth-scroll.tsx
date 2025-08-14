"use client"

import { useEffect, type PropsWithChildren } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import Lenis from "lenis"


export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReduced) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    const gsapTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(gsapTicker)
    gsap.ticker.lagSmoothing(0)

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      gsap.ticker.remove(gsapTicker)
      lenis.destroy()
    }
  }, [])

  return children
}


