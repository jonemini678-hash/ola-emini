import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "collections", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleNavigate} 
      />
      
      {/* Main Content */}
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <CollectionsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-mystery text-pure-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="font-display text-2xl font-semibold">
              OLA EMINI
              <span className="block text-sm font-body text-dragon-fire-light uppercase tracking-widest mt-1">
                Couture
              </span>
            </h3>
            <p className="body-text text-pure-white/80 max-w-md mx-auto">
              Luxury couture where artistry meets elegance. Handcrafted corsets 
              and dresses that celebrate the power and beauty of feminine form.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-pure-white/60">
              <span>© 2024 Ola Emini Couture</span>
              <span>•</span>
              <span>Handcrafted with ♥</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
