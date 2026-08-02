import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { h as whatsappUrl } from "./company-COw1I3yp.mjs";
import { r as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { C as ChevronDown, D as Building2, E as CalendarCheck, O as ArrowUpRight, T as CalendarX, a as ShoppingBag, b as CodeXml, c as Rocket, d as MessageSquare, f as MessageCircle, g as HeartHandshake, h as Image, i as Sparkles, l as Palette, m as Layers, o as Settings2, s as Search, t as Zap, v as Gauge, w as Check, y as Eye } from "../_libs/lucide-react.mjs";
import { a as cn, i as SeoLocalized, n as Header$1, r as SectionLink, t as Footer } from "./SeoLocalized-_E0v3OEp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cdh2BvA6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 grid-lines"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), t("hero.badge")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem]",
						children: [
							t("hero.titleA"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" ",
							t("hero.titleB")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg",
						children: t("hero.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(t("contact.whatsappMessage")),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-1.5 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							children: [t("nav.requestQuote"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
							hash: "servicos",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted",
							children: t("hero.viewServices")
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					delay: .15,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative mx-auto mt-16 max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-center text-xs text-muted-foreground",
					children: t("hero.mockDisclaimer")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card shadow-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 border-b border-border px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-[11px] text-muted-foreground",
								children: "arkyo.co"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-6 md:grid-cols-3 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
								title: t("hero.mockScheduling"),
								value: "24",
								trend: "+8%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
								title: t("hero.mockLeads"),
								value: "152",
								trend: "+18%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
								title: t("hero.mockTime"),
								value: "1m 42s",
								trend: "+12%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-surface p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: t("hero.mockRange")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: t("hero.mockSessions")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartMock, {})]
								})
							})
						]
					})]
				})]
			})]
		})]
	});
}
function MockCard({ title, value, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl font-semibold tracking-tight text-foreground",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-foreground",
				children: trend
			})]
		})]
	});
}
function ChartMock() {
	const points = [
		8,
		14,
		10,
		18,
		15,
		22,
		19,
		26,
		24,
		30,
		27,
		34,
		32,
		40
	];
	const max = Math.max(...points);
	const w = 100;
	const h = 40;
	const step = w / (points.length - 1);
	const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(2)} ${(h - p / max * h).toFixed(2)}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "h-24 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "g",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "currentColor",
					stopOpacity: "0.15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "currentColor",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `${path} L ${w} ${h} L 0 ${h} Z`,
				fill: "url(#g)",
				className: "text-foreground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "0.8",
				className: "text-foreground"
			})
		]
	});
}
var reveal = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .65,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = {
	hidden: {},
	visible: { transition: {
		staggerChildren: .08,
		delayChildren: .04
	} }
};
var revealViewport = {
	once: true,
	amount: .18
};
var cardInteraction$1 = "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover-device:hover:-translate-y-1.5 hover-device:hover:border-foreground/40 hover-device:hover:shadow-elevated has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:border-foreground/40 has-[:focus-visible]:shadow-elevated motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0";
var icons$1 = [
	MessageSquare,
	CalendarX,
	Layers,
	Eye
];
function Problems() {
	const { t } = useTranslation();
	const items = t("problems.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: reveal,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
					children: t("problems.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
					children: t("problems.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2",
				children: items.map((item, index) => {
					const Icon = icons$1[index];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: reveal,
						className: "group rounded-2xl border border-border bg-card p-6 " + cardInteraction$1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transform-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold tracking-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.desc
							})
						]
					}, item.title);
				})
			})]
		})
	});
}
var services = [
	{
		id: "landing-page",
		price: "€400+",
		icon: Rocket
	},
	{
		id: "site-institucional",
		price: "€500+",
		icon: Building2
	},
	{
		id: "site-agendamento",
		price: "€650+",
		icon: CalendarCheck
	},
	{
		id: "portfolio",
		price: "€300+",
		icon: Image
	},
	{
		id: "pagina-vendas",
		price: "€800+",
		icon: ShoppingBag
	},
	{
		id: "personalizado",
		price: "custom",
		icon: Settings2
	}
];
function Services() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicos",
		className: "border-y border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("services.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
						children: t("services.title")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: t("services.note")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => {
					const name = t(`services.items.${s.id}.name`);
					const description = t(`services.items.${s.id}.description`);
					const features = t(`services.items.${s.id}.features`, { returnObjects: true });
					const priceLabel = s.price === "custom" ? t("services.custom") : s.price;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .5,
							delay: i * .04,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover-device:hover:-translate-y-1.5 hover-device:hover:border-foreground/40 hover-device:hover:shadow-soft has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:border-foreground/40 has-[:focus-visible]:shadow-soft motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground",
									children: priceLabel
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold tracking-tight",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 border-t border-border pt-5",
								children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground"
									}), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl(t("contact.whatsappMessage")),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground",
								"aria-label": t("services.requestFor", { name }),
								children: [t("nav.requestQuote"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					}, s.id);
				})
			})]
		})
	});
}
function Process() {
	const { t } = useTranslation();
	const steps = t("process.steps", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "processo",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: reveal,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
					children: t("process.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
					children: t("process.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: reveal,
					className: "rounded-2xl border border-border bg-card p-8 " + cardInteraction$1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold tracking-tight",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: step.desc
						})
					]
				}, step.title))
			})]
		})
	});
}
var projects = [{
	id: "clinica-massoterapia",
	year: 2025,
	image: "/jr-massoterapeuta-home.png",
	imageWebp: "/jr-massoterapeuta-home.webp"
}];
function Portfolio() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "border-y border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("portfolio.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
						children: t("portfolio.title")
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: [projects.map((p, i) => {
					const base = `portfolio.items.${p.id}`;
					const tags = t(`${base}.tags`, { returnObjects: true });
					const challenges = t(`${base}.challenges`, { returnObjects: true });
					const solutions = t(`${base}.solutions`, { returnObjects: true });
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .5,
							delay: i * .05,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "group overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 ease-out hover-device:hover:-translate-y-1.5 hover-device:hover:border-foreground/40 hover-device:hover:shadow-elevated has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:border-foreground/40 has-[:focus-visible]:shadow-elevated motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] w-full overflow-hidden bg-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 z-10 rounded-full border border-background/20 bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground",
								children: t("portfolio.status")
							}), p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [p.imageWebp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								srcSet: p.imageWebp,
								type: "image/webp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: t(`${base}.imageAlt`),
								width: 1600,
								height: 1e3,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover object-left-top transition-transform duration-[450ms] ease-out hover-device:group-hover:scale-[1.05] group-has-[:focus-visible]:scale-[1.05] motion-reduce:transform-none motion-reduce:group-hover:scale-100"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 grid-lines opacity-30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-sm rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/20" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/20" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/20" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-2 w-2/3 rounded bg-white/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-2 w-1/2 rounded bg-white/10" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 grid grid-cols-3 gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 rounded bg-white/10" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 rounded bg-white/10" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 rounded bg-white/20" })
											]
										})
									]
								})
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground",
										children: tag
									}, tag))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-semibold tracking-tight",
									children: t(`${base}.title`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t(`${base}.summary`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
										children: t("portfolio.challenges")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-2",
										children: challenges.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
										}, c))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
										children: t("portfolio.solutions")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-2",
										children: solutions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
										}, c))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(`${base}.category`) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.year })]
								})
							]
						})]
					}, p.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center rounded-2xl border border-dashed border-border p-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: t("portfolio.openSlot.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm text-muted-foreground",
							children: t("portfolio.openSlot.desc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionLink, {
							hash: "contato",
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground",
							children: [
								t("portfolio.cta"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
							]
						})
					] })
				})]
			})]
		})
	});
}
var icons = [
	Palette,
	HeartHandshake,
	Gauge,
	Search,
	Zap,
	CodeXml
];
function Differentials() {
	const { t } = useTranslation();
	const items = t("differentials.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: reveal,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
					children: t("differentials.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
					children: t("differentials.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "visible",
				viewport: revealViewport,
				className: "mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item, index) => {
					const Icon = icons[index];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: reveal,
						className: "group rounded-2xl border border-transparent p-5 transition-colors duration-300 hover:border-border hover:bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold tracking-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: item.desc
							})
						]
					}, item.title);
				})
			})]
		})
	});
}
function About() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-arkyo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .5,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("about.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
						children: t("about.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: t("about.body")
					})
				]
			})
		})
	});
}
var plans = [
	{
		id: "essencial",
		price: "€39,90"
	},
	{
		id: "profissional",
		price: "€59,90",
		highlighted: true
	},
	{
		id: "evolucao",
		price: "€89,90"
	}
];
var cardInteraction = "transition-[transform,box-shadow,border-color] duration-300 ease-out hover-device:hover:-translate-y-1.5 hover-device:hover:shadow-elevated has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:shadow-elevated motion-reduce:hover-device:hover:translate-y-0 motion-reduce:has-[:focus-visible]:translate-y-0";
function Pricing() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "planos",
		className: "border-y border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
							children: t("pricing.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
							children: t("pricing.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: t("pricing.subtitle")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-14 grid max-w-5xl items-stretch gap-4 md:grid-cols-3",
					children: plans.map((p, i) => {
						const base = `pricing.plans.${p.id}`;
						const features = t(`${base}.features`, { returnObjects: true });
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .5,
								delay: i * .05
							},
							className: cn("relative flex h-full flex-col rounded-2xl border p-7", cardInteraction, p.highlighted ? "border-foreground bg-foreground text-background shadow-elevated ring-1 ring-foreground hover-device:hover:border-foreground" : "border-border bg-card hover-device:hover:border-foreground/40"),
							children: [
								p.highlighted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-3 right-6 rounded-full bg-background px-3 py-1 text-[11px] font-medium text-foreground ring-1 ring-foreground",
									children: t("pricing.recommended")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold tracking-tight",
									children: t(`${base}.name`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-1 text-sm", p.highlighted ? "text-background/70" : "text-muted-foreground"),
									children: t(`${base}.description`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl font-semibold tracking-tight",
										children: p.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-sm", p.highlighted ? "text-background/70" : "text-muted-foreground"),
										children: t("pricing.perMonth")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: cn("mt-6 flex-1 space-y-3 border-t pt-6", p.highlighted ? "border-background/25" : "border-border"),
									children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 h-4 w-4 shrink-0", p.highlighted ? "text-background" : "text-foreground") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: p.highlighted ? "text-background" : "text-foreground",
											children: f
										})]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappUrl(t("contact.whatsappMessage")),
									target: "_blank",
									rel: "noopener noreferrer",
									className: cn("mt-7 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-px", p.highlighted ? "bg-background text-foreground" : "border border-foreground text-foreground"),
									children: t("pricing.cta")
								})
							]
						}, p.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 max-w-3xl space-y-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t("pricing.scopeNote")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t("pricing.hostingNote")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: t("pricing.fineprint")
						})
					]
				})
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQ() {
	const { t } = useTranslation();
	const items = t("faq.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo grid gap-12 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("faq.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl",
						children: t("faq.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("faq.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappUrl(t("contact.whatsappMessage")),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
						children: t("faq.whatsappCta")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					className: "border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-base font-medium hover:no-underline",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: item.a
					})]
				}, i))
			})]
		})
	});
}
function Contact() {
	const { t } = useTranslation();
	const href = whatsappUrl(t("contact.whatsappMessage"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "border-y border-border bg-surface py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-arkyo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .5 },
				className: "mx-auto max-w-4xl rounded-2xl border border-border bg-card p-7 text-center md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("contact.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						"data-section-focus": true,
						tabIndex: -1,
						className: "mt-4 text-balance text-3xl font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card md:text-4xl",
						children: t("contact.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-balance leading-relaxed text-muted-foreground",
						children: t("contact.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-8 max-w-xl rounded-2xl border border-border bg-surface p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base font-medium text-foreground",
								children: t("contact.whatsappHint")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:w-auto",
								children: [t("contact.whatsappCta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: t("contact.whatsappNote")
							})
						]
					})
				]
			})
		})
	});
}
var STORAGE_KEY = "arkyo-cookie-consent-v1";
function CookieBanner() {
	const { t } = useTranslation();
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			try {
				if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
			} catch {}
		}, 600);
		return () => clearTimeout(timer);
	}, []);
	const decide = (value) => {
		try {
			localStorage.setItem(STORAGE_KEY, value);
		} catch {}
		setVisible(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 24
		},
		transition: {
			duration: .35,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-3 bottom-3 z-40 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-elevated md:inset-x-6 md:bottom-6",
		role: "dialog",
		"aria-live": "polite",
		"aria-label": t("cookies.aria"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground md:pr-6",
				children: [
					t("cookies.text"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/privacidade",
						className: "text-foreground underline underline-offset-4",
						children: t("cookies.privacy")
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("rejected"),
					className: "rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted",
					children: t("cookies.reject")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("accepted"),
					className: "rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background",
					children: t("cookies.accept")
				})]
			})]
		})
	}) });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLocalized, {
				page: "home",
				path: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problems, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Differentials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
		]
	});
}
//#endregion
export { Index as component };
