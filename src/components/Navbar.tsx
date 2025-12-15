import { PawPrint } from "lucide-react";

const Navbar = () => {
    return (


        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <PawPrint className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-foreground">Pet Friends</span>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
                    <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sobre Nós</a>
                    <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Serviços</a>
                    <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Galeria</a>
                    <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Depoimento</a>
                    <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
                </div>

               
            </div>
        </nav>
    )
}

export default Navbar;