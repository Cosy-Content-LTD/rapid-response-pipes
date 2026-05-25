import { motion } from "framer-motion";
import { Wrench, Droplets, Thermometer, AlertTriangle, Home, Pipette } from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    desc: "Burst pipes, flooding, and urgent leaks — we arrive fast to minimise damage to your property.",
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    desc: "Precision leak finding using advanced diagnostics, followed by lasting, professional repairs.",
  },
  {
    icon: Thermometer,
    title: "Boiler & Heating",
    desc: "Boiler servicing, repairs, and central heating system maintenance to keep you warm year-round.",
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    desc: "New pipework installations and full replumbing for residential and commercial properties.",
  },
  {
    icon: Home,
    title: "Bathroom Fitting",
    desc: "Complete bathroom installations — from plumbing rough-in to full suite fitting and finishing.",
  },
  {
    icon: Pipette,
    title: "Drainage & Unblocking",
    desc: "Blocked drains cleared fast using professional jetting and rodding equipment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary"
          >
            What We Do
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-heading text-5xl md:text-7xl leading-none tracking-tight max-w-lg"
            >
              Every Plumbing
              <br />
              <span className="text-primary">Need Covered</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-foreground/60 text-lg max-w-sm leading-relaxed"
            >
              From emergency callouts to planned installations, Rapid Response Pipes handles it all with speed and precision.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-background border border-border/40 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-black text-heading text-2xl mb-3">{s.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
