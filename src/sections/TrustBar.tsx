import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Certified Professionals" },
  { icon: Clock, label: "10+ Years Experience" },
  { icon: MapPin, label: "Westminster & Greater London" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <span className="text-primary-foreground font-bold text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
