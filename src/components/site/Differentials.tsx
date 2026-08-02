import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Gauge, HeartHandshake, Palette, Search, Zap } from "lucide-react";
import { reveal, revealViewport, stagger } from "@/lib/motion";

const icons = [Palette, HeartHandshake, Gauge, Search, Zap, Code2];

export function Differentials() {
  const { t } = useTranslation();
  const items = t("differentials.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24 md:py-32">
      <div className="container-arkyo">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("differentials.eyebrow")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {t("differentials.title")}
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                variants={reveal}
                className="group rounded-2xl border border-transparent p-5 transition-colors duration-300 hover:border-border hover:bg-card"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
