import type { Variants } from "framer-motion";

export const arkyoEase = [0.22, 1, 0.36, 1] as const;

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: arkyoEase },
  },
} satisfies Variants;

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} satisfies Variants;

export const revealViewport = { once: true, amount: 0.18 } as const;

export const cardInteraction =
  "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out " +
  "hover-device:hover:-translate-y-1.5 hover-device:hover:border-foreground/40 hover-device:hover:shadow-elevated " +
  "has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:border-foreground/40 has-[:focus-visible]:shadow-elevated " +
  "motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0";
