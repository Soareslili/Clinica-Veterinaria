

import { Card, CardContent } from "../components/ui/card";
import { Facebook, Twitter, Instagram } from "lucide-react";
import vet1 from "../assets/vet1.png";
import vet2 from "../assets/vet2.png";
import vet3 from "../assets/vet3.png";

const team = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Veterinário Chefe",
        image: vet1
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Especialista em Cirurgia",
        image: vet2
    },
    {
        name: "Dr. Emma Williams",
        specialty: "Especialista em animais exóticos",
        image: vet3
    }
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-foreground">
                        Equipe de especialistas incríveis</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                        Conheça nossos profissionais que cuidam dos seus animais de estimação como se fossem seus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}

                            data-aos="fade-down"
                            data-aos-delay={index * 300}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-6 text-center space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group/icon">
                                        <Facebook className="h-4 w-4 text-primary group-hover/icon:text-primary-foreground transition-colors" />
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group/icon">
                                        <Twitter className="h-4 w-4 text-primary group-hover/icon:text-primary-foreground transition-colors" />
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group/icon">
                                        <Instagram className="h-4 w-4 text-primary group-hover/icon:text-primary-foreground transition-colors" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;