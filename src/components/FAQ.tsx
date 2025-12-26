import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
    {
        question: "Quais são os horários de funcionamento da clínica?",
        answer: "Atendemos de segunda a sexta-feira das 8h às 19h, aos sábados das 9h às 17h e aos domingos das 10h às 15h. Também oferecemos atendimento de emergência 24 horas para casos urgentes."
    },
    {
        question: "Preciso agendar um horário ou vocês atendem sem agendamento?",
        answer: "Atendemos sem agendamento conforme a disponibilidade, porém recomendamos fortemente que você agende uma consulta para garantir menor tempo de espera e um atendimento dedicado ao seu pet. O agendamento pode ser feito online ou por telefone."
    },
    {
        question: "Quais vacinas meu pet precisa tomar?",
        answer: "As vacinas essenciais para cães incluem raiva, cinomose, parvovirose e adenovírus. Para gatos, as vacinas principais incluem raiva, rinotraqueíte viral felina, calicivirose e panleucopenia. Nossos veterinários irão criar um calendário de vacinação personalizado de acordo com a idade, estilo de vida e condições de saúde do seu pet."
    },
    {
        question: "Com que frequência devo levar meu pet para consultas?",
        answer: "Recomendamos consultas anuais para pets adultos e visitas semestrais para pets idosos (geralmente a partir de 7 anos para cães e 10 anos para gatos). Filhotes precisam de consultas mais frequentes no primeiro ano para vacinação e acompanhamento do desenvolvimento."
    },
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos dinheiro, cartões de crédito (Visa, MasterCard e American Express), cartões de débito e planos de saúde pet. Também oferecemos parcelamento para procedimentos de maior valor. Consulte nossa equipe de atendimento para mais informações sobre financiamento."
    },
    {
        question: "Vocês oferecem serviços de odontologia veterinária?",
        answer: "Sim! Oferecemos atendimento odontológico completo, incluindo limpezas de rotina, radiografias dentárias, extrações e tratamento de doenças periodontais. A saúde bucal é fundamental para o bem-estar geral do seu pet, e recomendamos check-ups odontológicos anuais."
    },
    {
        question: "O que devo fazer em caso de emergência com meu pet?",
        answer: "Entre em contato imediatamente com nossa linha de emergência pelo telefone (555) 123-4567. Temos veterinários disponíveis 24 horas por dia para emergências. Se possível, mantenha seu pet calmo e seguro enquanto o transporta até a clínica. Emergências comuns incluem dificuldade para respirar, sangramento intenso, suspeita de envenenamento ou traumas."
    },
    {
        question: "Vocês atendem pets exóticos?",
        answer: "Sim, contamos com veterinários experientes no atendimento de pets exóticos, como aves, répteis, coelhos, porquinhos-da-índia, hamsters e furões. Informe o tipo do seu pet no momento do agendamento para garantirmos o atendimento com o especialista adequado."
    }

];

const FAQ = () => {
    return (
        <section id="faq" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">

                        Perguntas frequentes
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Encontre respostas para perguntas comuns sobre nossos serviços, cuidados com animais de estimação e políticas clínicas.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                            >
                                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed ">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
