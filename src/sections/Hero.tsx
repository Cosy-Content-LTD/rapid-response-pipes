import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image right side */}
      <div className="absolute inset-0">
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        </div>
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-background" />
      </div>

      {/* CREATIVE TWIST: Large overlapping boundary text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <p
          className="font-display font-black text-[clamp(5rem,18vw,16rem)] leading-none tracking-tight text-primary/5 select-none whitespace-nowrap -mb-8"
          style={{ transform: "translateY(20%)" }}
        >
          RAPID RESPONSE
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Westminster&apos;s Most Trusted Plumbers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-heading leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Pipes Fixed.
            <br />
            <span className="text-primary">Fast.</span>
            <br />
            Every Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground/70 leading-relaxed mb-8 max-w-md"
          >
            10+ years serving St James&apos;s, Westminster & Greater London. Fully insured, certified plumbing professionals — available when you need us most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a href="tel:0234567891">
              <Button className="bg-primary text-primary-foreground rounded-2xl py-5 px-10 text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3">
                <Phone size={20} />
                Call Now
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="rounded-2xl py-5 px-10 text-lg font-bold border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center gap-3">
                Our Services
                <ArrowRight size={20} />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 text-sm text-foreground/60 font-medium"
          >
            <ShieldCheck size={18} className="text-primary" />
            Fully Insured &amp; Certified Professionals
            <span className="mx-2 text-border">|</span>
            <span>10+ Years Experience</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
