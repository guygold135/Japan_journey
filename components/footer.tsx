export function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#333333] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-[#fafafa] mb-2">Japan Lens</p>
            <p className="text-sm text-[#6b6b6b]">
              Exclusive Photography Expeditions
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#a3a3a3] text-sm hover:text-[#fafafa] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#a3a3a3] text-sm hover:text-[#fafafa] transition-colors">
              Terms
            </a>
            <a href="#" className="text-[#a3a3a3] text-sm hover:text-[#fafafa] transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#333333]">
          <p className="text-center text-[#6b6b6b] text-xs">
            &copy; {new Date().getFullYear()} Japan Lens Photography Expeditions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
