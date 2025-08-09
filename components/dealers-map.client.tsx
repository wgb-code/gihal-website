"use client"

import dynamic from "next/dynamic"

const DealersMapInner = dynamic(() => import("@/components/dealers-map"), {
  ssr: false,
})

export default function DealersMapClient() {
  return <DealersMapInner />
}


