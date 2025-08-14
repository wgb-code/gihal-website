import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  telefone: z.string().optional(),
  produto: z.string().optional(),
  mensagem: z.string().min(5),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const data = schema.parse(json)

    // TODO: enviar para e-mail/CRM. Mantemos mock por ora.
    // Ex.: await sendEmail(data)

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 })
  }
}


