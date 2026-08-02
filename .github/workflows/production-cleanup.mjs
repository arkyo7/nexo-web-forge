import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content.trimStart(), "utf8");
}

function replace(path, from, to) {
  const current = readFileSync(path, "utf8");
  if (!current.includes(from)) throw new Error(`Expected text not found in ${path}`);
  writeFileSync(path, current.replace(from, to), "utf8");
}

write(
  "package.json",
  String.raw`{
  "name": "arkyo",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-router": "^1.170.16",
    "@tanstack/react-start": "^1.168.26",
    "@tanstack/router-plugin": "^1.168.18",
    "clsx": "^2.1.1",
    "framer-motion": "^12.42.2",
    "i18next": "^26.3.6",
    "i18next-browser-languagedetector": "^8.2.1",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-i18next": "^17.0.11",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "vite-tsconfig-paths": "^6.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "2.7.7",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "nitro": "3.0.260603-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^8.0.16",
    "vitest": "^4.1.10"
  }
}`,
);

replace(
  "vite.config.ts",
  "export default defineConfig({\n  tanstackStart:",
  'export default defineConfig({\n  nitro: { preset: "vercel" },\n  tanstackStart:',
);

write(
  "src/start.ts",
  String.raw`import { createMiddleware, createStart } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));`,
);

write(
  "src/router.tsx",
  String.raw`import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });`,
);

write(
  "src/routes/__root.tsx",
  String.raw`import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider, themeInitScript } from "../hooks/use-theme";
import i18n, { syncDetectedLanguage } from "../i18n";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("errorPage.notFound")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("errorPage.notFoundBody")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("errorPage.goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("errorPage.loadFail")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("errorPage.loadFailBody")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("errorPage.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("errorPage.goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arkyo — Sites que simplificam negócios" },
      {
        name: "description",
        content:
          "Estúdio digital que desenvolve sites, landing pages e sistemas de agendamento para pequenos negócios. Bélgica.",
      },
      { name: "author", content: "Arkyo" },
      { name: "theme-color", content: "#090909" },
      { property: "og:site_name", content: "Arkyo" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function HtmlLangSync() {
  const { i18n: instance } = useTranslation();

  useEffect(() => {
    const langTimer = window.setTimeout(syncDetectedLanguage, 0);
    const apply = () => {
      document.documentElement.lang = instance.resolvedLanguage || "pt";
    };
    apply();
    instance.on("languageChanged", apply);
    return () => {
      window.clearTimeout(langTimer);
      instance.off("languageChanged", apply);
    };
  }, [instance]);

  return null;
}

function RootComponent() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <HtmlLangSync />
          <Outlet />
        </MotionConfig>
      </ThemeProvider>
    </I18nextProvider>
  );
}`,
);

write(
  "src/lib/motion.ts",
  String.raw`import type { Variants } from "framer-motion";

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
  "motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0";`,
);

write(
  "src/components/site/Problems.tsx",
  String.raw`import { motion } from "framer-motion";
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
                className={`group rounded-2xl border border-border bg-card p-6 ${cardInteraction}`}
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
}`,
);

write(
  "src/components/site/Process.tsx",
  String.raw`import { motion } from "framer-motion";
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
              className={`rounded-2xl border border-border bg-card p-8 ${cardInteraction}`}
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
}`,
);

write(
  "src/components/site/Differentials.tsx",
  String.raw`import { motion } from "framer-motion";
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
}`,
);

replace(
  "src/routes/index.tsx",
  'import { Toaster } from "@/components/ui/sonner";\n',
  "",
);
replace("src/routes/index.tsx", '      <Toaster position="bottom-center" />\n', "");

replace(
  "src/components/site/Services.tsx",
  'import { SectionLink } from "./SectionLink";\nimport { requestProjectType } from "@/lib/prefill";',
  'import { whatsappUrl } from "@/data/company";',
);
replace(
  "src/components/site/Services.tsx",
  String.raw`                <SectionLink
                  hash="contato"
                  onClick={() => requestProjectType(s.projectType)}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                  aria-label={t("services.requestFor", { name })}
                >
                  {t("nav.requestQuote")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </SectionLink>`,
  String.raw`                <a
                  href={whatsappUrl(t("contact.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                  aria-label={t("services.requestFor", { name })}
                >
                  {t("nav.requestQuote")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>`,
);

write(
  "src/data/services.ts",
  String.raw`import {
  Building2,
  CalendarCheck,
  ImageIcon,
  Rocket,
  Settings2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type ServiceMeta = {
  id: string;
  price: string;
  icon: LucideIcon;
};

export const services: ServiceMeta[] = [
  { id: "landing-page", price: "€400+", icon: Rocket },
  { id: "site-institucional", price: "€500+", icon: Building2 },
  { id: "site-agendamento", price: "€650+", icon: CalendarCheck },
  { id: "portfolio", price: "€300+", icon: ImageIcon },
  { id: "pagina-vendas", price: "€800+", icon: ShoppingBag },
  { id: "personalizado", price: "custom", icon: Settings2 },
];`,
);

replace(
  "src/components/site/Pricing.tsx",
  'import { SectionLink } from "./SectionLink";',
  'import { whatsappUrl } from "@/data/company";',
);
replace(
  "src/components/site/Pricing.tsx",
  String.raw`                <SectionLink
                  hash="contato"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-px",
                    p.highlighted
                      ? "bg-background text-foreground"
                      : "border border-foreground text-foreground",
                  )}
                >
                  {t("pricing.cta")}
                </SectionLink>`,
  String.raw`                <a
                  href={whatsappUrl(t("contact.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-px",
                    p.highlighted
                      ? "bg-background text-foreground"
                      : "border border-foreground text-foreground",
                  )}
                >
                  {t("pricing.cta")}
                </a>`,
);

replace(
  "src/components/site/Header.tsx",
  'import { navItems } from "@/data/company";',
  'import { navItems, whatsappUrl } from "@/data/company";',
);
replace(
  "src/components/site/Header.tsx",
  String.raw`          <SectionLink
            hash="contato"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px"
          >
            {t("nav.requestQuote")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SectionLink>`,
  String.raw`          <a
            href={whatsappUrl(t("contact.whatsappMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px"
          >
            {t("nav.requestQuote")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>`,
);
replace(
  "src/components/site/Header.tsx",
  String.raw`                <SectionLink
                  hash="contato"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  {t("nav.requestQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </SectionLink>`,
  String.raw`                <a
                  href={whatsappUrl(t("contact.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  {t("nav.requestQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>`,
);

replace(
  "src/__tests__/seo-files.test.ts",
  "const locales = { pt, en, fr } as Record<string, any>;",
  "const locales = { pt, en, fr } as Record<string, { seo: Record<string, { title: string; description: string }> }>;",
);
replace("src/styles.css", '@import "tw-animate-css";\n', "");

write(
  ".env.example",
  String.raw`# Optional canonical production URL used by SEO metadata and sitemap.
# Set this in Vercel when the final domain is connected.
VITE_SITE_URL=https://arkyo.co`,
);

write(
  "README.md",
  String.raw`# Arkyo

Site institucional multilíngue da Arkyo, construído com React, TanStack Start, Tailwind CSS e Framer Motion.

## Desenvolvimento

- Instale as dependências com Bun: \`bun install\`
- Inicie o ambiente local: \`bun run dev\`
- Execute a validação completa: \`bun run lint && bun run typecheck && bun run test && bun run build\`

## Publicação na Vercel

Importe o repositório na Vercel e mantenha a detecção automática do framework TanStack Start. O preset Nitro para Vercel já está configurado em \`vite.config.ts\`; não defina manualmente Build Command nem Output Directory.

A variável \`VITE_SITE_URL\` é opcional até o domínio final ser conectado. Quando configurada, deve conter a URL canônica pública, por exemplo \`https://arkyo.co\`.

## Estrutura principal

- \`src/components/site\`: seções da página e navegação
- \`src/data\`: dados comerciais e conteúdo estruturado
- \`src/i18n\`: traduções em português, inglês e francês
- \`src/routes\`: páginas, sitemap e metadados
- \`public\`: imagens, favicon e arquivos de SEO

Os contatos comerciais abrem o WhatsApp com uma mensagem pré-preenchida e editável; nenhuma mensagem é enviada automaticamente.`,
);

const keepUi = new Set(["accordion.tsx", "dropdown-menu.tsx"]);
for (const name of existsSync("src/components/ui") ? await Array.fromAsync(new Bun.Glob("*.tsx").scan("src/components/ui")) : []) {
  if (!keepUi.has(name)) rmSync(`src/components/ui/${name}`);
}

for (const path of [
  "components.json",
  "src/components/site/ValueProp.tsx",
  "src/data/contact.ts",
  "src/data/faq.ts",
  "src/lib/prefill.ts",
  "src/lib/leads.functions.ts",
  "src/lib/leads.server.ts",
  "src/lib/email",
  "src/integrations/supabase",
]) {
  if (existsSync(path)) rmSync(path, { recursive: true, force: true });
}

rmSync(".github/workflows/production-cleanup.yml", { force: true });
rmSync(".github/workflows/production-cleanup.mjs", { force: true });
