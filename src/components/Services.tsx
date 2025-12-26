import { Card, CardContent } from "../components/ui/card";

import { Activity, Award, Phone, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Diagnóstico completo",
    description: "Exames de saúde completos e serviços de diagnóstico avançados para seus animais de estimação."
  },
  {
    icon: Award,
    title: "Serviço premiado",
    description: "Excelência reconhecida em atendimento veterinário e satisfação do cliente."
  },
  {
    icon: Phone,
    title: "Ligado - 24 Chamadas",
    description: "Suporte de emergência 24 horas por dia para seus queridos companheiros."
  },
  {
    icon: Users,
    title: "Os melhores especialistas",
    description: "Veterinários experientes dedicados ao bem-estar do seu animal de estimação."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Nossos serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}

                data-aos="fade-down"
                data-aos-delay={index * 300}
            >
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <a className=" flex items-center gap-4 cursor-pointer text-accent hover:text-accent/80 transition-all duration-300 
             hover:gap-3">
                  Entre em Contato <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;