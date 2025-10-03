import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "collections", label: "Collections" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pure-white/95 backdrop-blur-md border-b border-pure-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h1 className="text-2xl font-display font-bold text-pure-black tracking-tight">
              OLA EMINI
              <span className="block text-xs font-body text-dragon-fire uppercase tracking-widest mt-1">
                Couture
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="minimal"
                onClick={() => scrollToSection(section.id)}
                className={`text-sm ${
                  activeSection === section.id 
                    ? "border-pure-black" 
                    : "border-transparent"
                }`}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span className="w-4 h-0.5 bg-pure-black block"></span>
              <span className="w-4 h-0.5 bg-pure-black block"></span>
              <span className="w-4 h-0.5 bg-pure-black block"></span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-pure-black/10 py-4">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  onClick={() => scrollToSection(section.id)}
                  className="justify-start text-pure-black hover:bg-gray-50"
                >
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;