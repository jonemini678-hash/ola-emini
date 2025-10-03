import { useState } from "react";
import { Button } from "@/components/ui/button";
import corset1 from "@/assets/corset-1.jpg";
import corset2 from "@/assets/corset-2.jpg"; 
import corset3 from "@/assets/corset-3.jpg";

const CollectionsSection = () => {
  const [selectedCollection, setSelectedCollection] = useState("signature-corsets");

  const collections = [
    {
      id: "signature-corsets",
      name: "Signature Corsets",
      description: "Structured elegance with traditional corseting techniques",
      pieces: 8
    },
    {
      id: "evening-couture", 
      name: "Evening Couture",
      description: "Dramatic gowns for unforgettable moments",
      pieces: 6
    },
    {
      id: "bridal-collection",
      name: "Bridal Collection", 
      description: "Timeless pieces for your most precious day",
      pieces: 5
    }
  ];

  // Gallery items with actual corset images
  const galleryItems = [
    {
      id: 1,
      title: "Midnight Elegance Corset",
      collection: "signature-corsets",
      description: "Classic black corset with intricate lacing details",
      image: corset1
    },
    {
      id: 2, 
      title: "Pearl Duchess Corset",
      collection: "signature-corsets",
      description: "White corset with architectural lines and flowing elements",
      image: corset2
    },
    {
      id: 3,
      title: "Shadow Queen Gown",
      collection: "evening-couture", 
      description: "Dramatic corset gown with flowing silhouette",
      image: corset3
    },
    {
      id: 4,
      title: "Crimson Romance", 
      collection: "evening-couture",
      description: "Bold statement piece for evening glamour",
      image: null // Will show placeholder
    },
    {
      id: 5,
      title: "Ivory Dreams",
      collection: "bridal-collection",
      description: "Romantic bridal corset with delicate details", 
      image: null // Will show placeholder
    },
    {
      id: 6,
      title: "Rose Gold Goddess",
      collection: "bridal-collection", 
      description: "Luxurious bridal gown with corset bodice",
      image: null // Will show placeholder
    }
  ];

  // Filter items by selected collection
  const filteredItems = galleryItems.filter(item => item.collection === selectedCollection);

  return (
    <section id="collections" className="py-20 bg-gradient-luxury dragon-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-pure-black mb-6 tracking-tight">
            Couture <span className="italic text-dragon-fire">Collections</span>
          </h2>
          <p className="body-text text-lg text-gray-800 max-w-2xl mx-auto">
            Each collection represents the pinnacle of corseting artistry, 
            from structured elegance to flowing romance.
          </p>
        </div>

        {/* Collection Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection) => (
            <Button
              key={collection.id}
              variant={selectedCollection === collection.id ? "fire" : "minimal"}
              onClick={() => setSelectedCollection(collection.id)}
              className="px-6 py-3"
            >
              {collection.name}
            </Button>
          ))}
        </div>

        {/* Collection Info */}
        <div className="text-center mb-12">
          {collections
            .filter((c) => c.id === selectedCollection)
            .map((collection) => (
              <div key={collection.id} className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-pure-black">
                  {collection.name}
                </h3>
                <p className="body-text text-gray-700">{collection.description}</p>
                <p className="text-sm text-gray-600">{collection.pieces} unique pieces</p>
              </div>
            ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-pure-white rounded-lg shadow-subtle hover:shadow-luxury transition-luxury overflow-hidden"
            >
              {/* Corset image or placeholder */}
              <div className="aspect-[3/4] overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 border-2 border-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="font-display text-lg text-dragon-fire">OE</span>
                      </div>
                      <p className="font-display text-sm">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold text-pure-black mb-2">
                  {item.title}
                </h4>
                <p className="body-text text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <Button variant="minimal" size="sm" className="w-full">
                  View Details
                </Button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dragon-fire/0 group-hover:bg-dragon-fire/5 transition-luxury pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="body-text text-gray-700 mb-6">
            Ready to commission your own legendary piece?
          </p>
          <Button variant="luxury" size="lg" className="px-8 py-4">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;