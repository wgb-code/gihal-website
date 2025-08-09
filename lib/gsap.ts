"use client"

import { gsap as coreGsap } from "gsap"
import { ScrollTrigger as coreScrollTrigger } from "gsap/ScrollTrigger"

// Keep single registration across the app
let isRegistered = false

export const gsap = coreGsap
export const ScrollTrigger = coreScrollTrigger

if (typeof window !== "undefined" && !isRegistered) {
  coreGsap.registerPlugin(coreScrollTrigger)
  isRegistered = true
}

/**
 * Ensures GSAP plugins are registered. Safe to call multiple times.
 * Useful in dynamic scenarios where module initialization order varies.
 */
export function ensureGsapRegistered(): void {
  if (typeof window === "undefined") return
  if (!isRegistered) {
    coreGsap.registerPlugin(coreScrollTrigger)
    isRegistered = true
  }
}


