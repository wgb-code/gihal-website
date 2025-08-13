"use client"

import { gsap as coreGsap } from "gsap"
import { ScrollTrigger as coreScrollTrigger } from "gsap/ScrollTrigger"

let isRegistered = false

export const gsap = coreGsap
export const ScrollTrigger = coreScrollTrigger

if (typeof window !== "undefined" && !isRegistered) {
  coreGsap.registerPlugin(coreScrollTrigger)
  isRegistered = true
}

export function ensureGsapRegistered(): void {
  if (typeof window === "undefined") {
    return
  }

  if (!isRegistered) {
    coreGsap.registerPlugin(coreScrollTrigger)
    isRegistered = true
  }
}


