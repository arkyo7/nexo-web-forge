import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cardInteraction, reveal, revealViewport, stagger } from "@/lib/motion";

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="container-arkyo">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("process.eyebrow")}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {t("process.title")}
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={reveal}
              className={"rounded-2xl border border-border bg-card p-8 " + cardInteraction}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
