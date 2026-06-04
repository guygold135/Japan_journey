import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90"
        alt="Japan landscape with traditional temple and autumn foliage"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121212]/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-[#fafafa]/80 text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          An Exclusive Photography Experience
        </p>
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#fafafa] mb-8 leading-[1.1] animate-fade-in-up text-balance"
          style={{ animationDelay: '100ms' }}
        >
          Japan Through Your Lens
        </h1>
        <p 
          className="text-[#fafafa]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          An intimate expedition through Japan&apos;s most breathtaking landscapes, 
          guided by master photographers.
        </p>
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="#apply"
            className="inline-block bg-[#bc002d] text-white px-10 py-5 text-sm tracking-[0.2em] uppercase hover:bg-[#9a0025] transition-colors duration-300"
          >
            Request an Invitation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-[3px]">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#fafafa]/50" />
        <div className="relative h-3 w-px scale-y-[-1]">
          <span className="absolute top-0 left-1/2 block h-3 w-px origin-top -translate-x-1/2 -rotate-45 bg-[#fafafa]/50" />
          <span className="absolute top-0 left-1/2 block h-3 w-px origin-top -translate-x-1/2 rotate-45 bg-[#fafafa]/50" />
        </div>
      </div>
    </section>
  )
}
