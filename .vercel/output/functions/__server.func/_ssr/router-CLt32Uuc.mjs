import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation, t as I18nextProvider } from "../_libs/react-i18next.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRoute, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as siteUrl, f as syncDetectedLanguage, i as ThemeProvider, p as themeInitScript, r as SITE_URL, s as i18n_default } from "./company-COw1I3yp.mjs";
import { n as MotionConfig } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLt32Uuc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DzV-g2Ak.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: t("errorPage.notFound")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("errorPage.notFoundBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("errorPage.goHome")
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const { t } = useTranslation();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t("errorPage.loadFail")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("errorPage.loadFailBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("errorPage.tryAgain")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t("errorPage.goHome")
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Arkyo — Sites que simplificam negócios" },
			{
				name: "description",
				content: "Estúdio digital que desenvolve sites, landing pages e sistemas de agendamento para pequenos negócios. Bélgica."
			},
			{
				name: "author",
				content: "Arkyo"
			},
			{
				name: "theme-color",
				content: "#090909"
			},
			{
				property: "og:site_name",
				content: "Arkyo"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeInitScript } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function HtmlLangSync() {
	const { i18n: instance } = useTranslation();
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
		i18n: i18n_default,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionConfig, {
			reducedMotion: "user",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlLangSync, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
		}) })
	});
}
var $$splitComponentImporter$2 = () => import("./termos-C5hSLfuH.mjs");
var Route$3 = createFileRoute("/termos")({
	head: () => ({
		meta: [
			{ title: "Termos de Uso — Arkyo" },
			{
				name: "description",
				content: "Termos e condições de uso dos serviços da Arkyo."
			},
			{
				property: "og:title",
				content: "Termos de Uso — Arkyo"
			},
			{
				property: "og:description",
				content: "Termos e condições de uso dos serviços."
			},
			{
				property: "og:url",
				content: siteUrl("/termos")
			}
		],
		links: [{
			rel: "canonical",
			href: siteUrl("/termos")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var BASE_URL = SITE_URL;
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/privacidade",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/termos",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./privacidade-BJ4hMyWG.mjs");
var Route$1 = createFileRoute("/privacidade")({
	head: () => ({
		meta: [
			{ title: "Política de Privacidade — Arkyo" },
			{
				name: "description",
				content: "Como a Arkyo coleta, utiliza e protege seus dados pessoais em conformidade com o GDPR."
			},
			{
				property: "og:title",
				content: "Política de Privacidade — Arkyo"
			},
			{
				property: "og:description",
				content: "Como tratamos seus dados em conformidade com o GDPR."
			},
			{
				property: "og:url",
				content: siteUrl("/privacidade")
			}
		],
		links: [{
			rel: "canonical",
			href: siteUrl("/privacidade")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Cdh2BvA6.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Arkyo — Sites que simplificam negócios" },
			{
				name: "description",
				content: "Desenvolvimento de sites, landing pages e sistemas de agendamento para pequenos negócios. Design profissional, performance e SEO técnico. Bélgica."
			},
			{
				property: "og:title",
				content: "Arkyo — Sites que simplificam negócios"
			},
			{
				property: "og:description",
				content: "Estúdio digital sob medida para pequenos negócios. Sites, agendamento e soluções que funcionam."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: siteUrl("/")
			},
			{
				property: "og:image",
				content: siteUrl("/jr-massoterapeuta-home.webp")
			},
			{
				property: "og:image:alt",
				content: "Projeto de site desenvolvido pela Arkyo"
			},
			{
				property: "og:image:width",
				content: "1905"
			},
			{
				property: "og:image:height",
				content: "1079"
			},
			{
				name: "twitter:title",
				content: "Arkyo — Sites que simplificam negócios"
			},
			{
				name: "twitter:description",
				content: "Estúdio digital sob medida para pequenos negócios."
			},
			{
				name: "twitter:image",
				content: siteUrl("/jr-massoterapeuta-home.webp")
			}
		],
		links: [{
			rel: "canonical",
			href: siteUrl("/")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfessionalService",
				name: "Arkyo",
				description: "Desenvolvimento de sites e soluções digitais para pequenos negócios.",
				url: siteUrl("/"),
				areaServed: "BE",
				address: {
					"@type": "PostalAddress",
					addressCountry: "BE"
				},
				email: "hello.arkyo@gmail.com",
				telephone: "+32451036953",
				sameAs: ["https://instagram.com/arkyo.co"]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermosRoute = Route$3.update({
	id: "/termos",
	path: "/termos",
	getParentRoute: () => Route$4
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var PrivacidadeRoute = Route$1.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	PrivacidadeRoute,
	SitemapDotxmlRoute,
	TermosRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => createRouter({
	routeTree,
	scrollRestoration: true,
	defaultPreloadStaleTime: 0
});
//#endregion
export { getRouter };
