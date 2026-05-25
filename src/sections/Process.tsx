import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Call Us",
    desc: "Ring 0234567891 anytime. We&apos;ll ask a few quick questions to understand your situation.",
  },
  {
    num: "02",
    title: "We Arrive Fast",
    desc: "Our certified plumber heads to your address in Westminster — prompt, professional, prepared.",
  },
  {
    num: "03",
    title: "Diagnose & Quote",
    desc: "We assess the issue thoroughly and provide a clear, upfront price before any work begins.",
  },
  {
    num: "04",
    title: "Problem Solved",
    desc: "Work completed to the highest standard, site left clean and tidy. Job done.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-background relative overflow-hidden">
      {/* CREATIVE TWIST: Massive background word spanning section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display font-black text-[clamp(6rem,20vw,18rem)] text-primary/4 leading-none select-none whitespace-nowrap">
          PROCESS
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-heading text-5xl md:text-7xl leading-none tracking-tight mt-4"
          >
            Simple. Fast.
            <br />
            <span className="text-primary">Stress-Free.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-background border border-border/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="font-display font-black text-7xl text-primary/15 leading-none mb-4">
                {step.num}
              </div>
              <h3 className="font-display font-black text-heading text-2xl mb-3">{step.title}</h3>
              <p
                className="text-foreground/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.desc }}
              />
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
