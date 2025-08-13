"use client"

import { useEffect, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatCepMask, haversineDistanceKm, keepOnlyDigits } from "@/lib/utils"
import { revendedores } from "@/lib/revendedores-data"
import type { Revendedor } from "@/types/revendedores"

type ViaCepResponse = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

type BrasilApiCepResponse = {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    service: string
}

async function fetchCepLocation(cepDigits: string): Promise<{ city: string; state: string } | null> {
    try {
        const cleanedCep = cepDigits
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cleanedCep}`, { cache: "no-store" })

        if (response.ok) {
            const data = (await response.json()) as BrasilApiCepResponse

            return {
                city: data.city,
                state: data.state,
            }
        }
    } catch {
        return null
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`, { cache: "no-store" })

        if (response.ok) {
            const data = (await response.json()) as ViaCepResponse & { erro?: boolean }

            if (!data.erro) {
                return { city: data.localidade, state: data.uf }
            }
        }
    } catch {
        return null
    }

    return null
}

async function geocodeCityStateToCoords(city: string, state: string): Promise<{ lat: number; lng: number } | null> {
    const query = encodeURIComponent(`${city}, ${state}, Brasil`)

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=0&limit=1`,
            {
                headers: { "User-Agent": "gihal-website/1.0" },
                cache: "no-store",
            },
        )

        if (!response.ok) {
            return null
        }

        const results = (await response.json()) as Array<{ lat: string; lon: string }>

        if (!results.length) {
            return null
        }

        return {
            lat: parseFloat(results[0].lat),
            lng: parseFloat(results[0].lon)
        }
    } catch {
        return null
    }
}

function computeNearestReseller(
    userPoint: { lat: number; lng: number },
    resellerList: Revendedor[],
): { reseller: Revendedor | null; distanceKm: number | null } {
    let nearest: { reseller: Revendedor | null; distanceKm: number } = {
        reseller: null,
        distanceKm: Number.POSITIVE_INFINITY,
    }

    for (const reseller of resellerList) {
        if (typeof reseller.lat !== "number" || typeof reseller.lng !== "number") {
            continue
        }

        const distance = haversineDistanceKm(userPoint.lat, userPoint.lng, reseller.lat, reseller.lng)

        if (distance < nearest.distanceKm) {
            nearest = { reseller, distanceKm: distance }
        }
    }

    return { reseller: nearest.reseller, distanceKm: isFinite(nearest.distanceKm) ? nearest.distanceKm : null }
}

export default function DealerFinder() {
    const [cepMasked, setCepMasked] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [nearestResult, setNearestResult] = useState<{
        reseller: Revendedor | null
        distanceKm: number | null
    } | null>(null)

    const isCepComplete = useMemo(() => keepOnlyDigits(cepMasked).length === 8, [cepMasked])

    async function handleSearch() {
        setErrorMessage(null)
        setNearestResult(null)

        const cepDigits = keepOnlyDigits(cepMasked)

        if (cepDigits.length !== 8) {
            return
        }

        setIsLoading(true)

        try {
            const location = await fetchCepLocation(cepDigits)

            if (!location) {
                throw new Error("CEP não encontrado")
            }

            const coordinates = await geocodeCityStateToCoords(location.city, location.state)

            if (!coordinates) {
                throw new Error("Não foi possível localizar sua região")
            }

            const nearest = computeNearestReseller(coordinates, revendedores)

            if (!nearest.reseller) {
                throw new Error("Nenhum revendedor disponível para calcular distância")
            }

            setNearestResult(nearest)
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Erro ao buscar CEP"
            setErrorMessage(message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const digits = keepOnlyDigits(cepMasked)

        if (digits.length === 8 && !isLoading) {
            handleSearch()
        }
    }, [cepMasked])

    return (
        <div className="rounded-xl border p-4">
            <div className="font-semibold">Encontre o revendedor mais próximo pelo CEP</div>
            <div className="text-sm text-muted-foreground mt-1">
                Digite seu CEP. Ao completar 8 dígitos, buscamos automaticamente o revendedor mais próximo.
            </div>

            <div className="mt-3 flex gap-2">
                <Input
                    value={cepMasked}
                    onChange={(event) => setCepMasked(formatCepMask(event.target.value))}
                    placeholder="00000-000"
                    inputMode="numeric"
                    maxLength={9}
                    className="max-w-[180px]"
                    aria-label="Buscar revendedor por CEP"
                />
                <Button disabled={!isCepComplete || isLoading} onClick={handleSearch} className="bg-green-700 hover:bg-green-800 text-white">
                    {isLoading ? "Buscando..." : "Buscar"}
                </Button>
            </div>

            {errorMessage && <div className="mt-3 text-sm text-red-600">{errorMessage}</div>}

            {nearestResult?.reseller && (
                <div className="mt-4 text-sm">
                    <div className="font-semibold">
                        Revendedor mais próximo
                    </div>

                    <div>
                        {nearestResult.reseller.nome}
                    </div>

                    <div className="text-muted-foreground">
                        {nearestResult.reseller.cidade}
                    </div>

                    {typeof nearestResult.distanceKm === "number" && (
                        <div className="mt-2 font-semibold">Distância aproximada: {nearestResult.distanceKm.toFixed(0)} km</div>
                    )}

                    {nearestResult.reseller.telefone && (
                        <div className="mt-1">Tel: {nearestResult.reseller.telefone}</div>
                    )}

                    {nearestResult.reseller.email && <div>Email: {nearestResult.reseller.email}</div>}
                </div>
            )}
        </div>
    )
}


