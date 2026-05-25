import { Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-sm">RR</span>
              </div>
              <span className="font-display font-black text-xl text-secondary-foreground tracking-tight">
                Rapid Response Pipes
              </span>
            </div>
            <p className="text-secondary-foreground/60 leading-relaxed text-sm max-w-xs">
              Westminster&apos;s trusted plumbing professionals. Fast, reliable, fully insured — serving Greater London for 10+ years.
            </p>
          </div>

          <div>
            <h4 className="font-display font-black text-secondary-foreground text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/60 text-sm">
              {["Emergency Plumbing", "Leak Detection & Repair", "Boiler & Heating", "Pipe Installation", "Bathroom Fitting", "Drainage & Unblocking"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-secondary-foreground text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:0234567891" className="text-secondary-foreground/80 text-sm hover:text-secondary-foreground transition-colors">0234567891</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/60 text-sm">St James&apos;s Square, Westminster, London SW1Y 4JH</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/60 text-sm">Fully Insured &amp; Certified</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Rapid Response Pipes. All rights reserved.
          </p>
          <p className="text-secondary-foreground/40 text-sm">
            St James&apos;s Square, Westminster, Greater London
          </p>
        </div>
      </div>
    </footer>
  );
}
