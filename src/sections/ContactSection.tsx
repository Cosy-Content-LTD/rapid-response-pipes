import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Full bleed background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
          alt="Plumbing background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* CREATIVE TWIST: overlapping large text */}
      <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden">
        <p className="font-display font-black leading-none text-primary-foreground/5 select-none" style={{ fontSize: "clamp(5rem,16vw,14rem)" }}>
          CALL US
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-primary-foreground text-5xl md:text-7xl leading-none tracking-tight mt-4 mb-8"
            >
              Need a
              <br />
              Plumber
              <br />
              Now?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 text-xl leading-relaxed max-w-md"
            >
              Don&apos;t wait. Call us directly and we&apos;ll have a certified plumber with you in Westminster as quickly as possible.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-background rounded-[2rem] p-10 shadow-2xl"
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Phone</p>
                  <a href="tel:0234567891" className="text-heading font-black text-2xl font-display hover:text-primary transition-colors">0234567891</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Location</p>
                  <p className="text-heading font-bold leading-snug">St James&apos;s Square, Westminster,<br />London SW1Y 4JH</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Availability</p>
                  <p className="text-heading font-bold">7 Days a Week</p>
                </div>
              </div>
            </div>

            <a href="tel:0234567891" className="block">
              <Button className="bg-primary text-primary-foreground w-full rounded-2xl py-5 text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
                <Phone size={20} />
                Call 0234567891
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
