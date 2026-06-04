import { Users, Building, UserCheck, MapPin } from "lucide-react"

const inclusions = [
  {
    icon: Users,
    title: "Intimate Small Group",
    description: "Maximum 8 photographers ensuring personalized attention and authentic experiences at each location.",
  },
  {
    icon: Building,
    title: "Luxury Boutique Accommodations",
    description: "Stay in carefully selected ryokans and boutique hotels that embody the essence of Japanese hospitality.",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Professional Mentorship",
    description: "Receive dedicated guidance from our lead photographer throughout the journey, refining your unique vision.",
  },
  {
    icon: MapPin,
    title: "Curated Hidden Locations",
    description: "Access to exclusive spots beyond the tourist trail, discovered through years of local relationships.",
  },
]

export function PremiumInclusions() {
  return (
    <section className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-4">
            What&apos;s Included
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#fafafa] mb-6 text-balance">
            A Premium Experience
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto leading-relaxed">
            Every aspect of the expedition has been thoughtfully designed 
            to maximize your creative potential and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {inclusions.map((item, index) => (
            <div 
              key={item.title}
              className="flex gap-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 border border-[#333333] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#bc002d]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#fafafa] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
