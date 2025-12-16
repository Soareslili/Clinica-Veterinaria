import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Award, Users, Stethoscope } from "lucide-react";

const statistics = [
    {
        icon: Heart,
        value: 15000,
        suffix: "+",
        label: "Animais de estimação tratados",
        description: "Companheiros felizes e saudáveis"
    },
    {
        icon: Award,
        value: 15,
        suffix: "+",
        label: "Anos de experiência",
        description: "Cuidados veterinários de confiança"
    },
    {
        icon: Users,
        value: 12000,
        suffix: "+",
        label: "Clientes Satisfeitos",
        description: "Donos de animais de estimação que confiam em nós"
    },
    {
        icon: Stethoscope,
        value: 25,
        suffix: "+",
        label: "Veterinários especialistas",
        description: "Profissionais dedicados"
    }
];

const useCounterAnimation = (end: number, duration: number = 2000, isVisible: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return count;
};

const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-primary-foreground">Nossas Conquistas</h2>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">

                        Números que refletem nosso compromisso com a excelência no cuidado de animais de estimação
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statistics.map((stat, index) => (
                        <StatCard
                            key={index}
                            {...stat}
                            isVisible={isVisible}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface StatCardProps {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
    description: string;
    isVisible: boolean;
    delay: number;
}

const StatCard = ({ icon: Icon, value, suffix, label, description, isVisible, delay }: StatCardProps) => {
    const animatedValue = useCounterAnimation(value, 2000, isVisible);

    return (
        <Card
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <div className="space-y-1">
                    <div className="text-5xl font-bold text-primary-foreground">
                        {animatedValue.toLocaleString()}{suffix}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-foreground">{label}</h3>
                    <p className="text-sm text-primary-foreground/80">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default Statistics;
