import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="font-black text-2xl text-green-700">GIHAL</div>
          <p className="text-sm text-muted-foreground">
            Inovação e produtividade no campo há mais de 30 anos.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Institucional</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/empresa" className="hover:underline">Sobre</Link></li>
            <li><Link href="/tecnologia" className="hover:underline">Tecnologia</Link></li>
            <li><Link href="/carreiras" className="hover:underline">Carreiras</Link></li>
            <li><Link href="/noticias" className="hover:underline">Notícias</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Suporte</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/suporte" className="hover:underline">Pós-venda</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            <li><Link href="/privacidade" className="hover:underline">Privacidade</Link></li>
            <li><Link href="/termos" className="hover:underline">Termos de Uso</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Siga a GIHAL</div>
          <div className="flex items-center gap-3">
            <Link aria-label="Facebook" href="#" className="p-2 rounded-md border hover:bg-muted"><Facebook className="h-4 w-4" /></Link>
            <Link aria-label="Instagram" href="#" className="p-2 rounded-md border hover:bg-muted"><Instagram className="h-4 w-4" /></Link>
            <Link aria-label="YouTube" href="#" className="p-2 rounded-md border hover:bg-muted"><Youtube className="h-4 w-4" /></Link>
            <Link aria-label="LinkedIn" href="#" className="p-2 rounded-md border hover:bg-muted"><Linkedin className="h-4 w-4" /></Link>
          </div>
          <form className="mt-4">
            <label htmlFor="newsletter" className="text-sm block mb-2">Assine a newsletter</label>
            <div className="flex gap-2">
              <input id="newsletter" type="email" placeholder="Seu e-mail" className="w-full border rounded-md px-3 py-2 text-sm" />
              <button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" type="button">Assinar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground">
          {'© '}{new Date().getFullYear()} {'GIHAL Indústria de Implementos Agrícolas. Todos os direitos reservados.'}
        </div>
      </div>
    </footer>
  )
}
