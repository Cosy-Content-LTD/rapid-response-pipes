import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "St James&apos;s Square",
  "Westminster",
  "Victoria",
  "City of Westminster",
  "Greater London",
  "St James&apos;s",
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest text-primary"
            >
              Where We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-heading text-5xl md:text-6xl leading-none tracking-tight mt-4 mb-8"
            >
              Covering
              <br />
              <span className="text-primary">Westminster</span>
              <br />
              &amp; Beyond
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-foreground/60 text-lg leading-relaxed mb-10 max-w-md"
            >
              Based in St James&apos;s Square, SW1Y — we&apos;re on your doorstep. Our rapid response team covers all of Westminster and Greater London.
            </motion.p>

            <div className="flex flex-wrap gap-3 mb-10">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2 bg-background border border-border/40 rounded-full px-4 py-2 shadow-sm"
                >
                  <MapPin size={14} className="text-primary" />
                  <span
                    className="text-foreground/80 text-sm font-medium"
                    dangerouslySetInnerHTML={{ __html: area }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="tel:0234567891">
                <Button className="bg-primary text-primary-foreground rounded-2xl py-5 px-10 text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3">
                  <Phone size={20} />
                  Book a Plumber
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="Plumbing work in Westminster"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
