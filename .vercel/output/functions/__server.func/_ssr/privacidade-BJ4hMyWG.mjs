import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as company, l as legalUpdatedLabel, o as contact } from "./company-COw1I3yp.mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as SeoLocalized, n as Header, t as Footer } from "./SeoLocalized-_E0v3OEp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacidade-BJ4hMyWG.js
var import_jsx_runtime = require_jsx_runtime();
function Privacidade() {
	const { t, i18n } = useTranslation();
	const country = t("footer.country");
	const email = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: contact.emailUrl,
		className: "underline",
		children: contact.email
	});
	const section = (key) => t(`legal.privacy.sections.${key}`, { returnObjects: true });
	const who = section("who");
	const data = section("data");
	const purpose = section("purpose");
	const legal = section("legal");
	const share = section("share");
	const retention = section("retention");
	const rights = section("rights");
	const cookies = section("cookies");
	const contactSec = section("contact");
	const whoBody = who.body.replace("{{company}}", company.name).replace("{{country}}", country);
	const rightsBody = rights.body.replace("{{email}}", contact.email);
	const contactBody = contactSec.body.replace("{{email}}", contact.email);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLocalized, {
				page: "privacy",
				path: "/privacidade"
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
							children: t("legal.privacy.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								t("legal.lastUpdate"),
								" ",
								legalUpdatedLabel(i18n.resolvedLanguage)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-8 text-[15px] leading-relaxed text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: who.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											whoBody.split(contact.email)[0],
											email,
											whoBody.split(contact.email)[1] ?? "."
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: data.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "list-disc space-y-1 pl-5 text-muted-foreground",
										children: data.items.map((li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: li }, li))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title: purpose.title,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: purpose.intro
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "list-disc space-y-1 pl-5 text-muted-foreground",
										children: purpose.items.map((li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: li }, li))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: legal.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: legal.body
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: share.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: share.body
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: retention.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: retention.body
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: rights.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											rightsBody.split(contact.email)[0],
											email,
											rightsBody.split(contact.email)[1] ?? "."
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: cookies.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: cookies.body
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									title: contactSec.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											contactBody.split(contact.email)[0],
											email,
											contactBody.split(contact.email)[1] ?? "."
										]
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xl font-semibold tracking-tight",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3",
		children
	})] });
}
//#endregion
export { Privacidade as component };
