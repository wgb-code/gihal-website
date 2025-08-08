"use client"

import SiteShell from "@/components/site-shell"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const params = useSearchParams()
  const produto = params.get("produto") ?? ""
  const [status, setStatus] = useState<"idle"|"ok">("idle")

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold">Fale Conosco</h1>
        <p className="mt-2 text-muted-foreground">Solicite um orçamento ou tire suas dúvidas com nossa equipe.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); setStatus("ok"); }}
          className="mt-6 grid gap-4"
          aria-describedby="form-desc"
        >
          <div id="form-desc" className="sr-only">Formulário de contato para orçamento e suporte</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="text-sm font-medium">Nome</label>
              <input id="nome" required className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input id="email" type="email" required className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="telefone" className="text-sm font-medium">Telefone</label>
              <input id="telefone" className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label htmlFor="produto" className="text-sm font-medium">Produto de interesse</label>
              <input id="produto" defaultValue={produto} className="mt-1 w-full border rounded-md px-3 py-2" />
            </div>
          </div>
          <div>
            <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
            <textarea id="mensagem" rows={5} className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800" type="submit">Enviar</button>
            <a
              className="px-4 py-2 rounded-md border hover:bg-muted"
              href={`https://wa.me/5500000000000?text=${encodeURIComponent("Olá, tenho interesse: " + (produto || ""))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          {status === "ok" && <div role="status" className="text-sm text-green-700">Mensagem enviada! Em breve entraremos em contato.</div>}
        </form>
      </section>
    </SiteShell>
  )
}
