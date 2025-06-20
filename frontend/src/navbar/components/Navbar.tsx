import { useState } from "react"
import NavElements from "./NavElements"
import { Menu, X } from "lucide-react";

const Navbar = () => {
const [isMobile, setIsMobile] = useState(false)

  return(
  <header className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary">
    <div className="mx-auto spacing max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                &lt;/&gt;
            </a>
             <button
                onClick={() => setIsMobile(!isMobile)}
                className="flex sm:hidden text-neutral-400 hover:text-white focus:outline-none"
                aria-label={isMobile ? "Close menu" : "Open menu"}
            >
                {isMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden sm:flex" aria-label="Main navigation">
                <NavElements/>
            </nav>
        </div>
    </div>
    {isMobile && (
    <div className={`transition-all duration-300 ease-in-out ${isMobile ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden text-center sm:hidden`}>
        <nav className="pb-5">
        <NavElements closeMenu={() => setIsMobile(false)} />
        </nav>
    </div>
    )}
  </header>
  )
}

export default Navbar