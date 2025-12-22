import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { X } from "lucide-react";
import pet1 from "../assets/dog1.png";
import pet2 from "../assets/cat2.png";
import pet3 from "../assets/dog2.png";
import pet4 from "../assets/cat3.png";
import pet5 from "../assets/dog3.png";
import pet6 from "../assets/cat4.png";
import clinic1 from "../assets/clinic1.png";
import clinic2 from "../assets/clinic2.png";
import clinic3 from "../assets/clinic3.png";

const galleryImages = [
    { src: pet1, alt: "Happy Golden Retriever", category: "pets" },
    { src: clinic1, alt: "Modern Clinic Reception", category: "clinic" },
    { src: pet2, alt: "Persian Cat", category: "pets" },
    { src: pet3, alt: "Playful Beagle Puppy", category: "pets" },
    { src: clinic2, alt: "Examination Room", category: "clinic" },
    { src: pet4, alt: "Orange Tabby Cat", category: "pets" },
    { src: pet5, alt: "French Bulldog", category: "pets" },
    { src: clinic3, alt: "Surgery Room", category: "clinic" },
    { src: pet6, alt: "Scottish Fold Cat", category: "pets" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    const navigateImage = (direction: "prev" | "next") => {
        if (selectedImage === null) return;

        if (direction === "next") {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        } else {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-foreground">Nossa Galeria</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

                        Dê uma olhada em nossos pacientes satisfeitos e instalações de última geração
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-medium text-lg">{image.alt}</p>
                                    <p className="text-white/80 text-sm capitalize">{image.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>

                        {selectedImage !== null && (
                            <div className="relative w-full h-full flex items-center justify-center p-8">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("prev");
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-white text-2xl">‹</span>
                                </button>

                                <img
                                    src={galleryImages[selectedImage].src}
                                    alt={galleryImages[selectedImage].alt}
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg"
                                />

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("next");
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-white text-2xl">›</span>
                                </button>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
                                    <p className="text-white font-medium">{galleryImages[selectedImage].alt}</p>
                                    <p className="text-white/70 text-sm text-center">
                                        {selectedImage + 1} / {galleryImages.length}
                                    </p>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Gallery;
