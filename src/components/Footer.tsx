import { PawPrint, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[hsl(210,30%,10%)] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <PawPrint className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">Clínica Amigos de Animais de Estimação</span>
                        </div>
                        <p className="text-white/70 text-sm">
                            Fornecendo atendimento veterinário excepcional com amor,
                            experiência e tecnologia moderna desde 2010.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">
                            Links rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="text-white/70 hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#team" className="text-white/70 hover:text-primary transition-colors">Galeria</a></li>
                            <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Depoimento</a></li>
                            <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">
                            Conecte-se conosco</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
                    © 2025 Clínica Amigos de Animais de Estimação — Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
