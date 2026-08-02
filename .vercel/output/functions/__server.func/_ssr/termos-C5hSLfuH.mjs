import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as company, l as legalUpdatedLabel, o as contact } from "./company-COw1I3yp.mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as SeoLocalized, n as Header, t as Footer } from "./SeoLocalized-_E0v3OEp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/termos-C5hSLfuH.js
var import_jsx_runtime = require_jsx_runtime();
function Termos() {
	const { t, i18n } = useTranslation();
	const country = t("footer.country");
	const section = (key) => t(`legal.terms.sections.${key}`, { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLocalized, {
				page: "terms",
				path: "/termos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-32 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-arkyo max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
								" ",
								t("legal.back")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-4xl font-semibold tracking-tight md:text-5xl",
							children: t("legal.terms.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								t("legal.lastUpdate"),
								" ",
								legalUpdatedLabel(i18n.resolvedLanguage)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-8 text-[15px] leading-relaxed text-foreground",
							children: [
								"accept",
								"services",
								"ip",
								"liability",
								"changes",
								"law"
							].map((k) => {
								const s = section(k);
								const body = s.body.replaceAll("{{company}}", company.name).replaceAll("{{country}}", country).replaceAll("{{email}}", contact.email);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold tracking-tight",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: body
								})] }, k);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Termos as component };
