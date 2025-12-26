import { useState } from "react";
import { PawPrint, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
    
        <div className="flex items-center gap-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Pet Friends</span>
        </div>

       
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">Sobre Nós</a>
          <a href="#services" className="nav-link">Serviços</a>
          <a href="#gallery" className="nav-link">Galeria</a>
          <a href="#testimonials" className="nav-link">Depoimento</a>
          <a href="#contact" className="nav-link">Contato</a>
        </div>

     
        <button
          onClick={() => setOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col items-center gap-6 py-6">
            <a onClick={() => setOpen(false)} href="#home" className="nav-link">Home</a>
            <a onClick={() => setOpen(false)} href="#about" className="nav-link">Sobre Nós</a>
            <a onClick={() => setOpen(false)} href="#services" className="nav-link">Serviços</a>
            <a onClick={() => setOpen(false)} href="#gallery" className="nav-link">Galeria</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="nav-link">Depoimento</a>
            <a onClick={() => setOpen(false)} href="#contact" className="nav-link">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
