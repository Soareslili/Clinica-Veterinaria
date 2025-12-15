
import { ArrowRight } from "lucide-react";
import AboutCat from "../assets/AboutCat.png";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] rounded-lg overflow-hidden animate-fade-in">
                        <img
                            src={AboutCat}
                            alt="Veterinarian examining a cat"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                        <h2 className="text-4xl font-bold text-foreground">
                            Como chegamos <span className="text-accent">aqui.?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nossa história, missão e valores que nos fazem seguir em frente.
                            Nós nos dedicamos a fornecer cuidados excepcionais para animais de estimação,
                            combinando tecnologia moderna com serviço compassivo para garantir
                            cada animal recebe o tratamento que merece.
                        </p>
                        <a
                            href="#contato"
                            className="inline-flex items-center gap-2 
             bg-accent text-accent-foreground 
             px-6 py-3 rounded-md 
             font-semibold 
             hover:bg-accent/90 
             transition-all duration-300 
             hover:gap-3"
                        >
                            Entre em Contato
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
