"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { trackEvent } from "@/lib/analytics"
import { toast } from "@/hooks/use-toast"

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().optional(),
  produto: z.string().optional(),
  mensagem: z.string().min(5, "Descreva sua necessidade"),
})

type FormValues = z.infer<typeof schema>

function ContatoContent() {
  const params = useSearchParams()
  const produto = params.get("produto") ?? ""
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { produto },
  })

  return (
    <section className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold">Fale Conosco</h1>
      <p className="mt-2 text-muted-foreground">Solicite um orçamento ou tire suas dúvidas com nossa equipe.</p>
      <form
        onSubmit={handleSubmit(async (data) => {
          trackEvent("form_submit", { form: "contato", produto: data.produto })
          const res = await fetch("/api/contato", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
          if (res.ok) {
            toast({ title: "Mensagem enviada", description: "Em breve nossa equipe entrará em contato." })
            reset({ produto })
          } else {
            toast({ title: "Erro ao enviar", description: "Tente novamente em instantes." })
          }
        })}
        className="mt-6 grid gap-4"
        aria-describedby="form-desc"
      >
        <div id="form-desc" className="sr-only">
          Formulário de contato para orçamento e suporte
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome" className="text-sm font-medium">Nome</label>
            <input id="nome" {...register("nome")} className="mt-1 w-full border rounded-md px-3 py-2" />
            {errors.nome && <div className="text-xs text-red-600 mt-1">{errors.nome.message}</div>}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input id="email" type="email" {...register("email")} className="mt-1 w-full border rounded-md px-3 py-2" />
            {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email.message}</div>}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefone" className="text-sm font-medium">
              Telefone
            </label>
            <input id="telefone" {...register("telefone")} className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="produto" className="text-sm font-medium">
              Produto de interesse
            </label>
            <input id="produto" {...register("produto")} className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
        </div>
        <div>
          <label htmlFor="mensagem" className="text-sm font-medium">
            Mensagem
          </label>
          <textarea id="mensagem" rows={5} {...register("mensagem")} className="mt-1 w-full border rounded-md px-3 py-2" />
          {errors.mensagem && <div className="text-xs text-red-600 mt-1">{errors.mensagem.message}</div>}
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 disabled:opacity-60" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          <a
            className="px-4 py-2 rounded-md border hover:bg-muted"
            href={`https://wa.me/5500000000000?text=${encodeURIComponent("Olá, tenho interesse: " + (produto || ""))}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { cta: "contato_whatsapp", produto })}
          >
            WhatsApp
          </a>
        </div>
        {isSubmitSuccessful && (
          <div role="status" className="text-sm text-green-700">
            Mensagem enviada! Em breve entraremos em contato.
          </div>
        )}
      </form>
    </section>
  )
}

export default function ContatoClient() {
  return (
    <Suspense>
      <ContatoContent />
    </Suspense>
  )
}


