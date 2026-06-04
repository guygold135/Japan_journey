import Image from "next/image"

const expeditionLocations = [
  {
    title: "Kyoto Autumn Nights",
    subtitle: "Ancient Temples & Golden Foliage",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
  },
  {
    title: "Mount Fuji Sunrise",
    subtitle: "The Sacred Peak at Dawn",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
  },
  {
    title: "Tokyo Neon Streets",
    subtitle: "Urban Light & Motion",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    title: "Arashiyama Bamboo",
    subtitle: "Ethereal Forest Pathways",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
  },
  {
    title: "Fushimi Inari Gates",
    subtitle: "Vermillion Trail of Spirits",
    image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80",
  },
  {
    title: "Shibuya Crossing",
    subtitle: "The Pulse of Modern Japan",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
  },
]

export function ExpeditionHighlights() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <p className="text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#121212] mb-6 text-balance">
            Expedition Highlights
          </h2>
          <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto leading-relaxed">
            From the serene temples of Kyoto to the electric streets of Tokyo, 
            each location has been carefully selected for its photographic potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expeditionLocations.map((location, index) => (
            <div 
              key={location.title}
              className="group relative overflow-hidden bg-[#121212] aspect-[4/5]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover image-hover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#bc002d] text-xs tracking-[0.2em] uppercase mb-2">
                  {location.subtitle}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#fafafa]">
                  {location.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
