import Image from "next/image"

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    alt: "Traditional Japanese architecture at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80",
    alt: "Cherry blossoms in spring",
  },
  {
    src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=80",
    alt: "Japanese garden with red bridge",
  },
  {
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80",
    alt: "Tokyo skyline at night",
  },
]

export function AboutGuide() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-4">
              Your Guide
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#121212] mb-8 text-balance">
              May Goldstain
            </h2>
            <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
              <p>
                My name is May Goldestain, a photographer based in Israel. Photography has been
                a passion of mine since my parents gifted me my first camera in the 7th grade.
                Growing up with four brothers, I spent a lot of time in the youth movement and on
                trips, where I honed my skills and became known as the go-to photographer among my
                friends and family.
              </p>
              <p>
                In 2015, I enlisted in the Israeli Defense Forces (IDF) and served in the
                &ldquo;School Of Operational Mobility&rdquo; (also known as: &ldquo;Balnam&rdquo;),
                An elite operational unit. Despite the demanding nature of my position, I was still
                able to continue my photography work and was eventually designated the unit&apos;s
                first and only &ldquo;reserve photographer.&rdquo;
              </p>
              <p>
                After my military service ended in 2018, I worked as a youth coordinator in the
                moshav where I grew up. In 2020, I began studying photography at &ldquo;Bezalel
                Academy of Art and Design&rdquo; in Jerusalem.
              </p>
              <p>
                My pictures showcase my unique style and ability to capture the essence of my
                subjects. I really like to dedicate myself to certain topics and themes and I
                believe that there are many stories that can and should be brought to light through
                photography.
              </p>
              <p>
                I have a deep love for capturing moments and preserving memories. I hope to
                continue perfecting my skills, to tell stories, and convey beautiful and meaningful
                messages for many years to come.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://maygoldestain.com/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#bc002d] text-white px-10 py-5 text-sm tracking-[0.2em] uppercase hover:bg-[#9a0025] transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/may-goldestain.png"
                alt="May Goldestain - Professional Photographer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-24">
          <p className="text-center text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-12">
            Selected Works
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square relative overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
