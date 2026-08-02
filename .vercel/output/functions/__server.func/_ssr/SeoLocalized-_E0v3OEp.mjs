import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as company, c as languageMeta, d as siteUrl, h as whatsappUrl, m as useTheme, n as SITE_HOST, o as contact, t as LANGS, u as navItems } from "./company-COw1I3yp.mjs";
import { r as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { O as ArrowUpRight, S as ChevronRight, _ as Globe, n as X, p as Menu, r as Sun, u as Moon, w as Check, x as Circle } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SeoLocalized-_E0v3OEp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ size = 22, className = "", showWordmark = true, wordmarkClassName = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2 text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 200 200",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 48 158 C 55 120, 78 62, 97 44 C 98.5 42.5, 101.5 42.5, 103 44 C 122 62, 145 120, 152 158",
				stroke: "currentColor",
				strokeWidth: "14",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		}), showWordmark && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-[15px] font-semibold tracking-tight", wordmarkClassName),
			children: "Arkyo"
		})]
	});
}
function ThemeToggle({ className = "" }) {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": isDark ? t("theme.toLight") : t("theme.toDark"),
		title: t("theme.change"),
		className: "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " + className,
		children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-[18px] w-[18px]" })
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function LanguageSwitcher({ className = "" }) {
	const { i18n, t } = useTranslation();
	const current = LANGS.includes(i18n.resolvedLanguage ?? "") ? i18n.resolvedLanguage : "pt";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": t("lang.change"),
			title: t("lang.change"),
			className: "inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " + className,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }), current]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-[160px]",
		children: LANGS.map((lng) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onSelect: () => {
				i18n.changeLanguage(lng);
				if (typeof document !== "undefined") document.documentElement.lang = lng;
			},
			className: "flex items-center justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: languageMeta[lng].flag
				}), languageMeta[lng].label]
			}), current === lng && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "h-1.5 w-1.5 rounded-full bg-foreground"
			})]
		}, lng))
	})] });
}
/**
* Links to a landing-page section from anywhere in the app.
* On internal routes (/termos, /privacidade) it navigates to "/" first,
* so anchors never dead-end; on the home page it just scrolls.
*/
var SectionLink = (0, import_react.forwardRef)(function SectionLink({ hash, children, className, onClick, "aria-label": ariaLabel }, ref) {
	const handleClick = (event) => {
		onClick?.();
		if (typeof window === "undefined" || window.location.pathname !== "/") return;
		const target = document.getElementById(hash);
		if (!target) return;
		event.preventDefault();
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		target.scrollIntoView({
			behavior: reduced ? "auto" : "smooth",
			block: "start"
		});
		(target.querySelector("[data-section-focus]") ?? (target instanceof HTMLElement ? target : null))?.focus({ preventScroll: true });
		window.history.replaceState(null, "", `#${hash}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		ref,
		to: "/",
		hash,
		className,
		"aria-label": ariaLabel,
		onClick: handleClick,
		children
	});
});
function Header() {
	const { t } = useTranslation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const triggerRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	const closeBtnRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		let last = window.scrollY > 8;
		setScrolled(last);
		const onScroll = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(() => {
				frame = 0;
				const next = window.scrollY > 8;
				if (next !== last) {
					last = next;
					setScrolled(next);
				}
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				setOpen(false);
				return;
			}
			if (e.key !== "Tab" || !panelRef.current) return;
			const focusables = panelRef.current.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])");
			if (focusables.length === 0) return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];
			const active = document.activeElement;
			if (e.shiftKey && active === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && active === last) {
				e.preventDefault();
				first.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		const timer = window.setTimeout(() => closeBtnRef.current?.focus(), 20);
		return () => {
			document.body.style.overflow = prevOverflow;
			document.removeEventListener("keydown", onKey);
			window.clearTimeout(timer);
			triggerRef.current?.focus();
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
					hash: "top",
					"aria-label": t("nav.arkyoStart"),
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": t("nav.primary"),
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
						hash: item.hash,
						className: "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: t(`nav.${item.key}`)
					}, item.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(t("contact.whatsappMessage")),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px",
							children: [t("nav.requestQuote"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: triggerRef,
							onClick: () => setOpen(true),
							className: "rounded-md p-2 text-foreground",
							"aria-label": open ? t("nav.closeMenu") : t("nav.openMenu"),
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				"aria-label": t("nav.closeMenu"),
				tabIndex: -1,
				onClick: () => setOpen(false),
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .25 },
				className: "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				id: "mobile-nav",
				ref: panelRef,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": t("nav.primary"),
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				transition: {
					duration: .25,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "fixed inset-x-0 top-0 z-[70] bg-background shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-arkyo flex h-16 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: closeBtnRef,
						onClick: () => setOpen(false),
						className: "rounded-md p-2",
						"aria-label": t("nav.closeMenu"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "container-arkyo mt-2 flex flex-col gap-1 pb-8",
					"aria-label": t("nav.mobile"),
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
						hash: item.hash,
						onClick: () => setOpen(false),
						className: "rounded-lg px-3 py-3 text-lg font-medium text-foreground hover:bg-muted",
						children: t(`nav.${item.key}`)
					}, item.hash)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl(t("contact.whatsappMessage")),
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setOpen(false),
						className: "mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background",
						children: [t("nav.requestQuote"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})]
				})]
			})]
		}) })]
	});
}
function Footer() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-arkyo py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted-foreground",
							children: t("footer.description")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("footer.nav")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2",
						children: [navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
							hash: n.hash,
							className: "text-sm text-foreground hover:text-muted-foreground",
							children: t(`nav.${n.key}`)
						}) }, n.hash)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
							hash: "contato",
							className: "text-sm text-foreground hover:text-muted-foreground",
							children: t("nav.contact")
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
						children: t("footer.contact")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl(t("contact.whatsappMessage")),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-muted-foreground",
								children: "WhatsApp"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.emailUrl,
								className: "hover:text-muted-foreground",
								children: contact.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.instagramUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-muted-foreground",
								children: contact.instagram
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted-foreground",
								children: t("footer.country")
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". ",
					t("footer.rights")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacidade",
						className: "hover:text-foreground",
						children: t("footer.privacy")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/termos",
						className: "hover:text-foreground",
						children: t("footer.terms")
					})]
				})]
			})]
		})
	});
}
var OG_LOCALES = {
	pt: "pt_BR",
	en: "en_GB",
	fr: "fr_BE"
};
function setMeta(selector, attr, key, content) {
	let el = document.head.querySelector(selector);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}
function setLink(rel, href) {
	let el = document.head.querySelector(`link[rel="${rel}"]`);
	if (!el) {
		el = document.createElement("link");
		el.rel = rel;
		document.head.appendChild(el);
	}
	el.href = href;
}
function setOgLocaleAlternates(activeLocale) {
	document.head.querySelectorAll("meta[property=\"og:locale:alternate\"]").forEach((element) => element.remove());
	Object.values(OG_LOCALES).filter((locale) => locale !== activeLocale).forEach((locale) => {
		const element = document.createElement("meta");
		element.setAttribute("property", "og:locale:alternate");
		element.setAttribute("content", locale);
		document.head.appendChild(element);
	});
}
/**
* Keeps title, description and social metadata in sync with the active
* language. The route head() still ships the default (PT) tags for crawlers.
*/
function SeoLocalized({ page, path }) {
	const { t, i18n } = useTranslation();
	const lang = (i18n.resolvedLanguage ?? "pt").slice(0, 2);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		const title = t(`seo.${page}.title`);
		const description = t(`seo.${page}.description`);
		const ogDescription = t(`seo.${page}.ogDescription`, { defaultValue: description });
		const imageAlt = t("portfolio.items.clinica-massoterapia.imageAlt");
		const url = siteUrl(path);
		const socialImage = siteUrl("/jr-massoterapeuta-home.webp");
		const ogLocale = OG_LOCALES[lang] ?? OG_LOCALES.pt;
		document.title = title;
		setMeta("meta[name=\"description\"]", "name", "description", description);
		setMeta("meta[property=\"og:title\"]", "property", "og:title", title);
		setMeta("meta[property=\"og:description\"]", "property", "og:description", ogDescription);
		setMeta("meta[property=\"og:url\"]", "property", "og:url", url);
		setMeta("meta[property=\"og:locale\"]", "property", "og:locale", ogLocale);
		setMeta("meta[property=\"og:image\"]", "property", "og:image", socialImage);
		setMeta("meta[property=\"og:image:alt\"]", "property", "og:image:alt", imageAlt);
		setMeta("meta[name=\"twitter:title\"]", "name", "twitter:title", title);
		setMeta("meta[name=\"twitter:description\"]", "name", "twitter:description", ogDescription);
		setMeta("meta[name=\"twitter:image\"]", "name", "twitter:image", socialImage);
		setOgLocaleAlternates(ogLocale);
		setLink("canonical", url);
		if (!((typeof window !== "undefined" ? window.location.host : "") === SITE_HOST)) setMeta("meta[name=\"robots\"]", "name", "robots", "noindex, nofollow");
		else document.head.querySelector("meta[name=\"robots\"]")?.remove();
	}, [
		t,
		lang,
		page,
		path
	]);
	return null;
}
//#endregion
export { cn as a, SeoLocalized as i, Header as n, SectionLink as r, Footer as t };
