import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarX, Eye, Layers, MessageSquare } from "lucide-react";
import { cardInteraction, reveal, revealViewport, stagger } from "@/lib/motion";

const icons = [MessageSquare, CalendarX, Layers, Eye];

export function Problems() {
  const { t } = useTranslation();
  const items = t("problems.items", { returnObjects: true }) as Array<{
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
            {t("problems.eyebrow")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {t("problems.title")}
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2"
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                variants={reveal}
                className={"group rounded-2xl border border-border bg-card p-6 " + cardInteraction}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transform-none">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
