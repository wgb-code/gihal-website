import SiteShell from "@/components/site-shell"
import { supportFaq } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold">Suporte e Pós-venda</h1>
        <p className="mt-2 text-muted-foreground">Assistência técnica, peças e manuais para manter sua operação no topo.</p>
        <div className="mt-6">
          <Accordion type="single" collapsible>
            {supportFaq.map((faqItem, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                <AccordionContent>{faqItem.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteShell>
  )
}
