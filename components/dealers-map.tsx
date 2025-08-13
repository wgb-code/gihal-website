"use client"

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { revendedores } from "@/lib/revendedores-data"

export default function DealersMap() {
  const mapInitialCenter: [number, number] = [-14.235004, -51.92528]

  return (
    <div className="rounded-xl border overflow-hidden">
      <MapContainer
        {...({ center: mapInitialCenter, zoom: 4, scrollWheelZoom: true } as any)}
        className="h-72 w-full"
      >
        <TileLayer
          {...({
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          } as any)}
        />

        {revendedores
          .filter((dealer) => typeof dealer.lat === "number" && typeof dealer.lng === "number")
          .map((dealer, index) => (
            <CircleMarker
              key={`${dealer.nome}-${index}`}
              {...({
                center: [dealer.lat as number, dealer.lng as number],
                radius: 8,
                pathOptions: {
                  color: "#16a34a",
                  weight: 2,
                  fillColor: "#22c55e",
                  fillOpacity: 0.9,
                },
              } as any)}
            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{dealer.nome}</div>
                  <div className="text-muted-foreground">{dealer.cidade}</div>
                  {dealer.telefone && <div className="mt-1">{dealer.telefone}</div>}
                  {dealer.email && <div>{dealer.email}</div>}
                </div>
              </Popup>
            </CircleMarker>
          ))}
      </MapContainer>
    </div>
  )
}
