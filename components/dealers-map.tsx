export default function DealersMap() {
  return (
    <div className="rounded-xl border overflow-hidden">
      <div className="relative">
        <img
          src="/mapa-revendedores-pinos-brasil.png"
          alt="Mapa ilustrativo de revendedores GIHAL"
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-3 left-3 rounded bg-white/90 px-3 py-2 text-xs">
          Mapa ilustrativo. Consulte a lista para detalhes de contato.
        </div>
      </div>
    </div>
  )
}
