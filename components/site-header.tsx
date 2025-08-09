"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/revendedores", label: "Revendedores" },
  { href: "/noticias", label: "Notícias" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contato", label: "Contato" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-[2000] w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center gap-3">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <nav className="grid gap-1 p-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-base font-medium hover:bg-muted",
                      pathname === item.href ? "bg-muted" : "bg-transparent"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-black tracking-tight text-xl md:text-2xl text-green-700">
            GIHAL
          </Link>
        </div>

        <nav className="ml-2 hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium hover:bg-muted",
                pathname === item.href ? "text-green-700 bg-green-50" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/revendedores">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <MapPin className="h-4 w-4 mr-2" />
              Encontre um Revendedor
            </Button>
          </Link>
          <Link href="/contato">
            <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
