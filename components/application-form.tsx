"use client"

import { useState } from "react"

const experienceLevels = [
  "Beginner - Just getting started",
  "Intermediate - Comfortable with my camera",
  "Advanced - Several years of experience",
  "Professional - Photography is my career",
]

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#bc002d] text-sm tracking-[0.3em] uppercase mb-4">
            Limited Availability
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#fafafa] mb-6 text-balance">
            Apply for the Upcoming Expedition
          </h2>
          <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-lg mx-auto">
            Complete the form below to begin your application. Our team will 
            contact you within 48 hours to discuss your photography journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm text-[#a3a3a3] mb-2 tracking-wide"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-[#333333] py-4 text-[#fafafa] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#bc002d] transition-colors duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm text-[#a3a3a3] mb-2 tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-[#333333] py-4 text-[#fafafa] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#bc002d] transition-colors duration-300"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label 
              htmlFor="phone" 
              className="block text-sm text-[#a3a3a3] mb-2 tracking-wide"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-transparent border-b border-[#333333] py-4 text-[#fafafa] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#bc002d] transition-colors duration-300"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label 
              htmlFor="experience" 
              className="block text-sm text-[#a3a3a3] mb-2 tracking-wide"
            >
              Photography Experience Level
            </label>
            <select
              id="experience"
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full bg-transparent border-b border-[#333333] py-4 text-[#fafafa] focus:outline-none focus:border-[#bc002d] transition-colors duration-300 cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a3a3a3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0 center',
                backgroundSize: '24px',
              }}
            >
              <option value="" disabled className="bg-[#121212]">Select your experience level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level} className="bg-[#121212]">
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-[#bc002d] text-white py-5 text-sm tracking-[0.2em] uppercase hover:bg-[#9a0025] transition-colors duration-300 font-medium"
            >
              Schedule a Consultation Call
            </button>
          </div>

          <p className="text-center text-[#6b6b6b] text-xs mt-6">
            By submitting this form, you agree to be contacted about the Japan Photography Expedition.
          </p>
        </form>
      </div>
    </section>
  )
}
