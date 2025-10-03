import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-model.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center dragon-pattern bg-gradient-luxury">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl text-pure-black">
              OLA
              <br />
              <span className="italic text-dragon-fire">Emini</span>
            </h1>
              <p className="body-text text-xl text-gray-800 max-w-md leading-relaxed">
                Luxury couture where artistry meets elegance. Handcrafted corsets 
                and dresses that celebrate the power and beauty of feminine form.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="fire" 
                size="lg"
                onClick={() => onNavigate("collections")}
                className="text-base px-8 py-4"
              >
                Explore Collections
              </Button>
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => onNavigate("contact")}
                className="text-base px-8 py-4"
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-dragon">
              <img
                src={heroImage}
                alt="Model wearing an elegant ONLY DRAGONS custom dress"
                className="w-full h-auto object-cover transform hover:scale-105 transition-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/20 to-transparent"></div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pure-white rounded-full shadow-subtle luxury-texture opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-dragon-fire rounded-full shadow-luxury"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pure-black/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pure-black/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;