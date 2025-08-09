"use client"

import { useMemo } from "react"
import type { ProductFull } from "@/lib/data"
import Image from "next/image"

export default function CompareTable({ items = [] as ProductFull[] }) {
  const specsKeys = useMemo(() => {
    const specificationKeysSet = new Set<string>()

    items.forEach((product) => {
      Object.keys(product.especificacoes).forEach((specKey) => {
        specificationKeysSet.add(specKey)
      })
    })
    return Array.from(specificationKeysSet)
  }, [items])

  if (items.length === 0) {
    return <div className="text-sm text-muted-foreground">Selecione até 3 produtos para comparar.</div>
  }

  return (
    <div className="overflow-x-auto rounded-xl border shadow-sm">
      <table className="min-w-[700px] w-full bg-white">
        <thead>
          <tr className="bg-gray-50/70">
            <th className="text-left p-3 w-56">Especificação</th>

            {items.map((product) => (
              <th key={product.id} className="text-left p-3 align-middle">
                <div className="group flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md ring-1 ring-gray-200 bg-white">
                    <Image
                      src={product.imagem}
                      alt={product.nome}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="leading-tight">
                    <div className="font-medium">{product.nome}</div>
                    <div className="text-xs text-muted-foreground">{product.categoria}</div>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {specsKeys.map((specKey) => (
            <tr key={specKey} className="border-t even:bg-gray-50/50">
              <td className="p-3 font-medium">{specKey}</td>
              {items.map((product) => (
                <td key={product.id + specKey} className="p-3 text-sm text-muted-foreground">
                  {product.especificacoes[specKey] ?? "-"}
                </td>
              ))}
            </tr>
          ))}

          <tr className="border-t">
            <td className="p-3 font-medium">Benefícios</td>

            {items.map((product) => (
              <td key={product.id + "benef"} className="p-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {product.beneficios.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
