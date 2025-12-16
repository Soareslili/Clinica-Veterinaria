import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "../components/ui/card";

import pet1 from "../assets/pet1.png";
import pet2 from "../assets/pet2.png";
import pet3 from "../assets/pet3.png";
import pet4 from "../assets/pet4.png";
import pet5 from "../assets/pet5.png";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    petName: "Max",
    petType: "Golden Retriever",
    petImage: pet1,
    rating: 5,
    review: "A equipe da Clínica PetCare salvou a vida do meu Max. O atendimento de emergência foi incrível e o tratamento de acompanhamento foi excepcional. Não posso agradecê-los o suficiente por sua dedicação e compaixão.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    petName: "Whiskers",
    petType: "Bengal Cat",
    petImage: pet2,
    rating: 5,
    review: "Dr. Martinez é incrível com gatos! Bigodes costuma ficar muito nervoso no veterinário, mas toda a equipe a deixou confortável. A clínica é moderna e limpa, altamente recomendada!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    petName: "Charlie",
    petType: "Labrador Puppy",
    petImage: pet3,
    rating: 5,
    review: "We've been bringing Charlie here since he was 8 weeks old. The vaccination schedule was clearly explained, and the puppy wellness program is fantastic. Best vet clinic in town!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    petName: "Buddy",
    petType: "Beagle",
    petImage: pet4,
    rating: 5,
    review: "Buddy had dental surgery here and the care was outstanding. The staff kept us informed every step of the way and the recovery was smooth. Professional and caring team!",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Lisa Wang",
    petName: "Luna",
    petType: "Siamese Cat",
    petImage: pet5,
    rating: 5,
    review: "Luna needed specialized care for her allergies, and the team here went above and beyond. They worked with us to find the perfect treatment plan. Truly exceptional veterinary care!",
    date: "2 months ago"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the pet parents who trust us with their beloved companions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Pet Image */}
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                            <img
                              src={testimonial.petImage}
                              alt={testimonial.petName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                            <Quote className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          {/* Stars */}
                          <div className="flex justify-center md:justify-start gap-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Review */}
                          <blockquote className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                            "{testimonial.review}"
                          </blockquote>

                          {/* Author Info */}
                          <div>
                            <p className="font-semibold text-foreground text-lg">
                              {testimonial.name}
                            </p>
                            <p className="text-muted-foreground">
                              Pet parent of {testimonial.petName} • {testimonial.petType}
                            </p>
                            <p className="text-muted-foreground text-sm mt-1">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <a
           
           
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-background shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </a>

          <a
           
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-background shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </a>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <a
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
