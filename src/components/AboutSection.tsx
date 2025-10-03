const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-pure-white luxury-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-pure-black tracking-tight">
              The Designer's 
              <br />
              <span className="italic text-dragon-fire">Vision</span>
            </h2>
              
              <div className="space-y-4 body-text text-gray-800">
                <p className="text-lg leading-relaxed">
                  In the world of luxury couture, where fabric becomes sculpture 
                  and silhouette speaks to the soul, Ola Emini crafts more than garments—
                  she creates transformations.
                </p>
                
                <p className="leading-relaxed">
                  Each corset and dress is meticulously handcrafted to celebrate 
                  the feminine form, combining traditional corseting techniques with 
                  contemporary design innovation. From structured bodices to flowing 
                  evening gowns, every piece tells a story of elegance and empowerment.
                </p>
                
                <p className="leading-relaxed">
                  With a passion for precision and an eye for timeless beauty, 
                  Ola has dedicated her craft to creating bespoke pieces that honor 
                  both heritage techniques and modern sophistication. Her atelier 
                  is where dreams take shape, one stitch at a time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-dragon-fire mb-2">12+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-dragon-fire mb-2">180+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Bespoke Creations</div>
              </div>
            </div>
          </div>

          {/* Designer Portrait Placeholder */}
          <div className="relative">
            <div className="bg-gradient-mystery rounded-lg shadow-luxury p-12 text-center">
              <div className="space-y-6 text-pure-white">
                <div className="w-24 h-24 bg-pure-white/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-display text-dragon-fire-light">OE</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Ola Emini</h3>
                  <p className="text-pure-white/80 text-sm">Founder & Creative Director</p>
                </div>
                <blockquote className="italic text-sm text-pure-white/90">
                  "Every corset tells a story, every dress holds a dream. 
                  I create to celebrate the art of being beautifully, powerfully feminine."
                </blockquote>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pure-white rounded-full shadow-subtle"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-pure-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;