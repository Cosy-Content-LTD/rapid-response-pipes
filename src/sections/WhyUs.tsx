import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "10+ years of trusted plumbing expertise in Westminster",
  "Fully insured — your property is always protected",
  "Certified professionals, every single job",
  "Rapid response times across Greater London",
  "Transparent, upfront pricing — no hidden charges",
  "Clean, tidy workmanship guaranteed",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80"
                alt="Professional plumber at work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-background rounded-3xl shadow-2xl p-6 border border-border/40"
            >
              <p className="font-display font-black text-primary text-6xl leading-none">10+</p>
              <p className="text-foreground/60 text-sm font-medium mt-1">Years of Experience</p>
            </motion.div>

            {/* CREATIVE TWIST: oversized overlapping label */}
            <div className="absolute -top-6 -left-6 pointer-events-none">
              <p className="font-display font-black text-[7rem] leading-none text-primary/8 select-none">
                PRO
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest text-primary"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-heading text-5xl md:text-6xl leading-none tracking-tight mt-4 mb-8"
            >
              Built on
              <br />
              Trust &amp;
              <br />
              <span className="text-primary">Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-foreground/60 text-lg leading-relaxed mb-10 max-w-md"
            >
              Rapid Response Pipes has been the go-to plumbing company across Westminster and Greater London for over a decade. We don&apos;t cut corners — ever.
            </motion.p>

            <ul className="space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
