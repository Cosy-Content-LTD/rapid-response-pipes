import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur shadow-md"
          : "bg-background/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-18 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-sm">RR</span>
          </div>
          <span className="font-display font-black text-xl text-heading tracking-tight">
            Rapid Response Pipes
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Why Us", "Process", "Coverage", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0234567891" className="hidden md:flex">
            <Button className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2">
              <Phone size={14} />
              0234567891
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border/40 px-6 py-6 flex flex-col gap-5">
          {["Services", "Why Us", "Process", "Coverage", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-foreground/80 text-base font-medium"
            >
              {item}
            </a>
          ))}
          <a href="tel:0234567891">
            <Button className="bg-primary text-primary-foreground rounded-full w-full py-3 font-bold flex items-center justify-center gap-2">
              <Phone size={16} />
              0234567891
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
