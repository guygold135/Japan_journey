import Image from "next/image"

export function VisionSection() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-4">
              The Vision
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#121212] mb-8 leading-[1.2] text-balance">
              Capture the Soul of Japan
            </h2>
            <div className="space-y-6 text-[#6b6b6b] leading-relaxed text-lg">
              <p>
                This is not a tour. It&apos;s a carefully curated journey designed 
                for photographers who seek more than snapshots — those who wish 
                to create lasting visual stories that resonate with emotion and 
                authenticity.
              </p>
              <p>
                From the mist-shrouded temples of Kyoto at dawn to the electric 
                pulse of Tokyo&apos;s neon-lit streets, every moment has been 
                thoughtfully planned to deliver extraordinary photographic 
                opportunities.
              </p>
              <p>
                With intimate group sizes and expert guidance, you&apos;ll access 
                hidden gems that most visitors never discover, while developing 
                your artistic vision alongside fellow passionate photographers.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80"
                  alt="Professional photographer in Japan"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#bc002d] hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
