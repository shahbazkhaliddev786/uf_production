import { s as __toESM } from "../__23tanstack-start-server-fn-resolver-HqwT0FNr.mjs";
import { n as V, r as require_react, t as J } from "../_libs/@formspree/react+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { C as AudioLines, S as Check, _ as Layers, b as Facebook, c as Send, d as Play, f as Phone, g as Linkedin, h as Mail, i as WandSparkles, l as Quote, m as Palette, n as X, o as Star, r as Workflow, s as Sparkles, t as Zap, w as ArrowUpRight, x as Clapperboard, y as Film } from "../_libs/lucide-react.mjs";
import { t as Route } from "./routes-Vo98QCkt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DmBXQCEk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOGO_default = "/assets/LOGO-CD_QSEZc.png";
var about_portrait_default = "/assets/about-portrait-BIZBnzd2.jpg";
var thumb_1_default = "/assets/thumb-1-CdMAFlYe.jpg";
var thumb_2_default = "/assets/thumb-2-kGImWjPx.jpg";
var thumb_3_default = "/assets/thumb-3-Cl-L8VoF.jpg";
var thumb_5_default = "/assets/thumb-5-BLOW9Ido.jpg";
var thumb_6_default = "/assets/thumb-6-DDLjLzej.jpg";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24,
		filter: "blur(6px)"
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .7,
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
	show: { transition: {
		staggerChildren: .08,
		delayChildren: .05
	} }
};
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
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
		className: "fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1200px,calc(100%-1.5rem))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 pl-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: LOGO_default,
						alt: "UF Productions Logo",
						className: "h-7 w-7 object-cover rounded-full border border-[color:var(--gold)]/40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: "UF Productions"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							className: "hover:text-foreground transition-colors",
							children: "Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "hover:text-foreground transition-colors",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#process",
							className: "hover:text-foreground transition-colors",
							children: "Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "hover:text-foreground transition-colors",
							children: "About"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact-form",
					className: "group inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)] px-4 py-2 text-xs font-medium text-primary transition-transform hover:scale-[1.03]",
					children: ["Let's talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})
			]
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[color:var(--gold)] via-[color:var(--ember)] to-[color:var(--gold)]"
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 grain",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[color:var(--gold)]/40 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[color:var(--ember)]/35 blur-3xl [animation-delay:-6s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,color-mix(in_oklab,white_60%,transparent),transparent)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1fr_auto] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: stagger,
					initial: "hidden",
					animate: "show",
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold)]" })]
							}), "Available for select projects — Winter 2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							variants: fadeUp,
							className: "mt-6 text-balance font-display text-[13vw] leading-[0.95] font-semibold tracking-tight sm:text-7xl md:text-[92px]",
							children: [
								"Turning ideas into",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative inline-block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-[#c99a2e]",
										children: "cinematic"
									})
								}),
								" ",
								"stories."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl",
							children: "I'm Umer — an independent video editor shaping commercials, AI films, documentaries, podcasts, brand films and social content that feel considered, cinematic and alive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: "#work",
								variant: "primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " View portfolio"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: "#contact",
								variant: "ghost",
								children: ["Let's work together", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mt-16 grid grid-cols-3 gap-6 max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: 180,
									suffix: "+",
									label: "Films delivered"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: 42,
									label: "Global brands"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									value: 9,
									label: "Years crafting"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .2
					},
					className: "relative mx-auto md:mx-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-64 w-64 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": true,
								animate: { rotate: 360 },
								transition: {
									duration: 40,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute -inset-4 rounded-full border border-dashed border-foreground/20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--gold)_55%,transparent),transparent_70%)] blur-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-float relative h-full w-full overflow-hidden rounded-full ring-1 ring-foreground/10 shadow-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_portrait_default,
									alt: "Umer Farooq, video editor",
									loading: "eager",
									decoding: "async",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,rgba(0,0,0,0.35)_100%)]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-2 -left-2 rounded-full border border-foreground/10 bg-surface/90 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" }), "Now editing"]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingReel, {})]
		})]
	});
}
function Stat({ value, suffix = "", label }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const io = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting) return;
			const start = performance.now();
			const dur = 1400;
			const tick = (t) => {
				const p = Math.min(1, (t - start) / dur);
				setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
				if (p < 1) raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
			io.disconnect();
		}, { threshold: .4 });
		if (ref.current) io.observe(ref.current);
		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
		};
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-3xl font-semibold md:text-4xl",
			children: [n, suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		})]
	});
}
function FloatingReel() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
	const y2 = useTransform(scrollYProgress, [0, 1], [-30, 60]);
	const y3 = useTransform(scrollYProgress, [0, 1], [20, -40]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "pointer-events-none relative mt-20 hidden h-[380px] md:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: y1 },
				className: "animate-float absolute right-0 top-0 h-56 w-96 overflow-hidden rounded-3xl shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelArt, {
					src: thumb_6_default,
					label: "COMMERCIAL · 04:12",
					showPlay: true,
					eager: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: y2 },
				className: "animate-float absolute right-[26%] top-[38%] h-44 w-72 overflow-hidden rounded-3xl shadow-soft [animation-delay:-2s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelArt, {
					src: thumb_5_default,
					label: "AI FILM · 02:48",
					showPlay: true,
					eager: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: y3 },
				className: "animate-float absolute right-[52%] top-[12%] h-40 w-64 overflow-hidden rounded-3xl shadow-soft [animation-delay:-4s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelArt, {
					src: thumb_3_default,
					label: "DOC · 12:03",
					showPlay: true,
					eager: true
				})
			})
		]
	});
}
function ReelArt({ src, label, showPlay = false, eager = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden bg-[#111]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: label ? `Cinematic reel for ${label}` : "Cinematic video reel thumbnail",
				loading: eager ? "eager" : "lazy",
				decoding: "async",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_45%,rgba(0,0,0,0.55)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-4 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.85)_0_8px,transparent_8px_16px)] opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-4 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.85)_0_8px,transparent_8px_16px)] opacity-70" }),
			showPlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-4 top-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center rounded-full bg-white/95 text-black shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" })
				})
			}),
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-white/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" }), "REC"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			})
		]
	});
}
function MagneticButton({ children, href, variant = "primary" }) {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		ref,
		href,
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			setPos({
				x: (e.clientX - r.left - r.width / 2) * .25,
				y: (e.clientY - r.top - r.height / 2) * .25
			});
		},
		onMouseLeave: () => setPos({
			x: 0,
			y: 0
		}),
		animate: {
			x: pos.x,
			y: pos.y
		},
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 15,
			mass: .3
		},
		className: "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors " + (variant === "primary" ? "bg-[color:var(--gold)] text-primary hover:brightness-95" : "border border-foreground/15 bg-surface/60 text-foreground hover:bg-surface backdrop-blur"),
		children
	});
}
function getYouTubeId(url) {
	if (!url) return null;
	const longMatch = url.match(/[?&]v=([^&]+)/);
	if (longMatch) return longMatch[1];
	const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
	if (shortMatch) return shortMatch[1];
	const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
	if (shortsMatch) return shortsMatch[1];
	const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
	if (embedMatch) return embedMatch[1];
	return null;
}
function getYouTubeThumbnail(url) {
	const id = getYouTubeId(url);
	return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : thumb_1_default;
}
function VideoModal({ project, onClose }) {
	const videoId = getYouTubeId(project.videoLink);
	(0, import_react.useEffect)(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleEsc);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/85 backdrop-blur-md" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onClose,
				className: "fixed top-6 right-6 z-[110] flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white hover:scale-105 shadow-lg border border-white/10",
				"aria-label": "Close modal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Close" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-white/40 border-l border-white/20 pl-2",
						children: "ESC"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .92,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .92,
					y: 20
				},
				transition: {
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative z-10 w-full max-w-4xl",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video w-full",
						children: videoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
							title: project.title,
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
							allowFullScreen: true,
							className: "absolute inset-0 h-full w-full"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center text-white/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Video not available" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-between gap-4 border-t border-white/10 bg-black/60 p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-white/40",
								children: project.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-lg font-semibold text-white",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/60",
								children: project.desc
							})
						] })
					})]
				})
			})
		]
	});
}
function Portfolio() {
	const { categories } = Route.useLoaderData();
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const hasCategories = Array.isArray(categories) && categories.length > 0;
	const TABS = hasCategories ? categories.map((c) => c.name) : [];
	const PROJECTS = hasCategories ? categories.reduce((acc, c) => {
		acc[c.name] = c.projects.map((p) => ({
			title: p.videoTitle,
			category: c.name,
			desc: p.videoDescription,
			duration: "00:00",
			image: getYouTubeThumbnail(p.videoLink),
			videoLink: p.videoLink
		}));
		return acc;
	}, {}) : {};
	const [active, setActive] = (0, import_react.useState)(TABS[0] || "");
	(0, import_react.useEffect)(() => {
		if (TABS.length > 0 && !TABS.includes(active)) setActive(TABS[0]);
	}, [TABS, active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "relative py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .3
					},
					variants: stagger,
					className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: "Selected work · 2019 — 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							variants: fadeUp,
							className: "mt-4 text-balance font-display text-5xl font-semibold md:text-7xl",
							children: "A reel of stories shaped in the edit."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "max-w-sm text-muted-foreground",
						children: "From feature documentaries to short-form AI experiments — each project sculpted for rhythm, emotion and image."
					})]
				}),
				!hasCategories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-foreground/15 bg-surface/50 py-20 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "h-10 w-10 text-muted-foreground/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xl font-semibold text-muted-foreground",
							children: "No projects yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground/60",
							children: "Check back soon — new work is on the way."
						})
					]
				}),
				hasCategories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap gap-2 rounded-full border border-foreground/10 bg-surface/70 p-1.5 backdrop-blur w-fit max-w-full overflow-x-auto",
					children: TABS.map((t) => {
						const isActive = t === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(t),
							className: "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
							children: [isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "tab-pill",
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 30
								},
								className: "absolute inset-0 rounded-full bg-[color:var(--gold)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative " + (isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"),
								children: t
							})]
						}, t);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: {
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
							children: PROJECTS[active] && PROJECTS[active].length > 0 ? PROJECTS[active].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project: p,
								index: i,
								onPlay: () => setSelectedProject(p)
							}, p.title + i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-foreground/15 bg-surface/50 py-16 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { className: "h-8 w-8 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "No videos in this category yet."
								})]
							})
						}, active)
					})
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
			project: selectedProject,
			onClose: () => setSelectedProject(null)
		}) })]
	});
}
function ProjectCard({ project, index, onPlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: index * .08
		},
		className: "group relative cursor-pointer overflow-hidden rounded-3xl border border-foreground/10 bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-glow",
		onClick: onPlay,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 transition-transform duration-700 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelArt, {
						src: project.image,
						label: `${project.category.toUpperCase()}`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)] text-primary shadow-glow transition-transform duration-500 group-hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5 fill-current" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[color:var(--gold)]/0 transition-all duration-500 group-hover:ring-[color:var(--gold)]/70" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-start justify-between gap-4 p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] uppercase tracking-widest text-muted-foreground",
					children: project.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl font-semibold tracking-tight",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: project.desc
				})
			] })
		})]
	});
}
function Featured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .2
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "overflow-hidden rounded-[36px] border border-foreground/10 bg-surface shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[1.3fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video md:aspect-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelArt, {
							src: thumb_2_default,
							label: "FEATURED · AMBER HOURS · 02:30"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Play trailer",
							className: "absolute inset-0 grid place-items-center transition-transform hover:scale-[1.02]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-24 w-24 place-items-center rounded-full bg-white/95 text-primary shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-8 w-8 fill-current" })
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
								children: "Featured project"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl",
								children: "Amber Hours — a watchmaker's afternoon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "A single-location brand film cut to breathe with the light. Practical lens choices, a warm grade, and a sound design that lets the mechanics speak."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 grid grid-cols-2 gap-6 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Services"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "Edit · Color · Sound"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Tools"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "Resolve · Ableton · AE"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Duration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "02:30"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Delivered"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "May 2026"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#work",
									variant: "primary",
									children: ["Watch full film ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							})
						]
					})]
				})
			})
		})
	});
}
var SERVICES = [
	{
		icon: Sparkles,
		title: "Storytelling",
		desc: "Structure, rhythm and pacing shaped around a single, honest idea."
	},
	{
		icon: Palette,
		title: "Color grading",
		desc: "Emotional palettes crafted in Resolve, from filmic to editorial."
	},
	{
		icon: AudioLines,
		title: "Sound design",
		desc: "Foley, texture and score woven for depth and immersion."
	},
	{
		icon: Layers,
		title: "Motion graphics",
		desc: "Typography, transitions and stylised overlays that feel considered."
	},
	{
		icon: WandSparkles,
		title: "AI video editing",
		desc: "Generative workflows blended into real footage, elegantly."
	},
	{
		icon: Zap,
		title: "Fast delivery",
		desc: "Predictable turnarounds without compromising the craft."
	},
	{
		icon: Workflow,
		title: "Pro workflow",
		desc: "Frame.io reviews, versioned masters, tidy handovers."
	},
	{
		icon: Clapperboard,
		title: "End-to-end",
		desc: "From assembly to final master — one editor, one voice."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-28 md:py-40 bg-surface/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .3
				},
				variants: stagger,
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "Why work with me"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					variants: fadeUp,
					className: "mt-4 font-display text-5xl font-semibold md:text-7xl text-balance",
					children: "Craft you can feel in every frame."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .15
				},
				variants: stagger,
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					whileHover: { y: -4 },
					transition: {
						type: "spring",
						stiffness: 200,
						damping: 18
					},
					className: "group rounded-3xl border border-foreground/10 bg-background p-6 transition-colors hover:border-[color:var(--gold)]/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)]/25 text-foreground transition-transform group-hover:rotate-[-6deg] group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-lg font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						})
					]
				}, s.title))
			})]
		})
	});
}
var STEPS = [
	{
		n: "01",
		t: "Discovery",
		d: "We align on story, audience and the feeling to leave behind."
	},
	{
		n: "02",
		t: "Planning",
		d: "Structure, references, selects and a clear editorial map."
	},
	{
		n: "03",
		t: "AI visuals",
		d: "Generative shots and stylised elements crafted to fit the story."
	},
	{
		n: "04",
		t: "Editing",
		d: "Assemblies to fine cut — rhythm, restraint, intention."
	},
	{
		n: "05",
		t: "Motion graphics",
		d: "Typography, transitions and animated storytelling."
	},
	{
		n: "06",
		t: "Color grading",
		d: "A grade tuned to your palette and platform."
	},
	{
		n: "07",
		t: "Sound design",
		d: "Score, foley and mix crafted for scale."
	},
	{
		n: "08",
		t: "Final delivery",
		d: "Masters, socials and versioned deliverables — on time."
	}
];
function Process() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 30%"]
	});
	const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "The workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-5xl font-semibold md:text-7xl text-balance",
					children: "An editing process built for calm."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mt-20 pl-8 md:pl-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-3 top-0 bottom-0 w-px bg-foreground/10 md:left-1/2 md:-translate-x-1/2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { height },
						className: "absolute left-3 top-0 w-px bg-gradient-to-b from-[color:var(--gold)] to-[color:var(--ember)] md:left-1/2 md:-translate-x-1/2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-14",
						children: STEPS.map((s, i) => {
							const right = i % 2 === 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									amount: .4
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
								className: "relative grid grid-cols-1 md:grid-cols-2 md:gap-12 " + (right ? "md:[&>*:first-child]:col-start-2" : ""),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative " + (right ? "md:text-left" : "md:text-right"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-[-1.35rem] top-2 grid h-3 w-3 place-items-center rounded-full bg-[color:var(--gold)] shadow-glow md:left-auto md:right-[-1.65rem] md:top-3",
											style: right ? {
												left: "-1.65rem",
												right: "auto"
											} : {}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-medium tabular-nums text-[color:var(--ember)]",
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl font-semibold",
											children: s.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-muted-foreground",
											children: s.d
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})]
							}, s.n);
						})
					})
				]
			})]
		})
	});
}
var TESTIMONIALS = [
	{
		name: "Amelia Choi",
		role: "Creative Director, Nine&Co",
		quote: "Umer edits with taste that's hard to find. Every cut felt intentional and the film shipped ahead of schedule."
	},
	{
		name: "Marcus Alderly",
		role: "Founder, Field Studio",
		quote: "He turned a stack of raw footage into a story we're proud to send everywhere. Genuine collaborator."
	},
	{
		name: "Priya Ramanathan",
		role: "Head of Brand, Northwind",
		quote: "Cinematic, precise, and completely calm to work with. Our team asked for him by name on the next project."
	},
	{
		name: "Théo Marchetti",
		role: "Executive Producer, Atrium Films",
		quote: "One of the sharpest editors I've worked with in the past five years. The color and sound feel like a full studio."
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
		return () => clearInterval(id);
	}, []);
	const t = TESTIMONIALS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 md:py-40 bg-surface/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "Kind words"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-10 min-h-[280px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20,
								filter: "blur(6px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							exit: {
								opacity: 0,
								y: -20,
								filter: "blur(6px)"
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
							className: "glass mx-auto max-w-3xl rounded-3xl p-10 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-6 w-6 text-[color:var(--ember)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 font-display text-2xl leading-snug text-balance md:text-3xl",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-[color:var(--gold)] font-display text-sm font-semibold",
										children: t.name.split(" ").map((n) => n[0]).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex items-center justify-center gap-1 text-[color:var(--gold)]",
									children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
								})
							]
						}, i)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center justify-center gap-2",
					children: TESTIMONIALS.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(k),
						"aria-label": `Testimonial ${k + 1}`,
						className: "h-1.5 rounded-full transition-all " + (k === i ? "w-8 bg-primary" : "w-2 bg-foreground/20")
					}, k))
				})
			]
		})
	});
}
var SKILLS = [
	"DaVinci Resolve",
	"Premiere Pro",
	"After Effects",
	"Ableton Live",
	"Runway",
	"Sora",
	"Frame.io",
	"Cinema 4D",
	"Figma",
	"Notion"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.1fr] md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .96
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					amount: .3
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative overflow-hidden rounded-[32px] border border-foreground/10 shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_portrait_default,
							alt: "Portrait of Umer in the edit suite",
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.55)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-8 bottom-8 rounded-2xl glass p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: "Currently"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-semibold",
								children: "Cutting a documentary in Kyoto"
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .3
				},
				variants: stagger,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeUp,
						className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						variants: fadeUp,
						className: "mt-4 font-display text-5xl font-semibold md:text-6xl text-balance",
						children: "I edit like I'm building a small, careful cathedral."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "mt-6 text-lg text-muted-foreground",
						children: "Nine years cutting for brands, agencies and independent filmmakers across three continents. I work best when trusted to shape a story end-to-end — from selects to the final master — and I care about the last five percent as much as the first eighty."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "mt-10 grid grid-cols-3 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: 9,
								label: "Years editing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: 180,
								suffix: "+",
								label: "Projects delivered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: 14,
								label: "Industries served"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Toolkit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: SKILLS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 8
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .4,
									delay: i * .04
								},
								className: "rounded-full border border-foreground/10 bg-surface px-3 py-1.5 text-sm text-foreground/80 hover:border-[color:var(--gold)] hover:text-foreground transition-colors",
								children: s
							}, s))
						})]
					})
				]
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[color:var(--gold)]/40 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-drift absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[color:var(--ember)]/40 blur-3xl [animation-delay:-6s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_120%,rgba(255,255,255,0.15),transparent)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 text-center text-primary-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 30,
						filter: "blur(8px)"
					},
					whileInView: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					viewport: {
						once: true,
						amount: .4
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "font-display text-6xl font-semibold tracking-tight text-balance md:text-8xl",
					children: [
						"Let's create something",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-normal text-[#c99a2e]",
							children: "cinematic."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .4
					},
					transition: {
						duration: .7,
						delay: .15
					},
					className: "mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70",
					children: "Two project slots open for Q1. Bring a brief, a rough cut, or just an idea worth pulling into shape."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .4
					},
					transition: {
						duration: .7,
						delay: .25
					},
					className: "mt-10 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:hello@kaireyes.film",
						className: "group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-medium text-primary transition-transform hover:scale-[1.03]",
						children: ["Book a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@kaireyes.film",
						className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10 transition-colors",
						children: "Contact me"
					})]
				})
			]
		})]
	});
}
function ContactForm() {
	const [state, handleSubmit] = J("mqpzdqdn");
	const field = "w-full rounded-xl border border-foreground/10 bg-surface/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[color:var(--gold)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "contact-form",
		className: "mx-auto w-full max-w-xl rounded-2xl border border-foreground/10 bg-surface/40 p-6 backdrop-blur scroll-mt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs uppercase tracking-widest text-muted-foreground",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 text-center font-display text-2xl font-semibold",
				children: "Let's talk"
			}),
			state.succeeded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3 rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thanks for getting in touch! Your message has been sent successfully. I'll get back to you soon." })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-5 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Name",
						id: "name",
						name: "name",
						className: field,
						placeholder: "Name",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
						prefix: "Name",
						field: "name",
						errors: state.errors,
						className: "mt-1 text-xs text-[color:var(--ember)]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Email",
						id: "email",
						type: "email",
						name: "email",
						className: field,
						placeholder: "Email",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
						prefix: "Email",
						field: "email",
						errors: state.errors,
						className: "mt-1 text-xs text-[color:var(--ember)]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Phone (optional)",
						id: "phone",
						name: "phone",
						className: field,
						placeholder: "Phone (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
						prefix: "Phone",
						field: "phone",
						errors: state.errors,
						className: "mt-1 text-xs text-[color:var(--ember)]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						"aria-label": "Message",
						id: "message",
						name: "message",
						rows: 4,
						className: "w-full rounded-xl border border-foreground/10 bg-surface/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[color:var(--gold)] resize-none",
						placeholder: "Tell me about your project",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
						prefix: "Message",
						field: "message",
						errors: state.errors,
						className: "mt-1 text-xs text-[color:var(--ember)]"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: state.submitting,
						className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
						children: [state.submitting ? "Sending..." : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-foreground/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_default,
								alt: "UF Productions Logo",
								className: "h-9 w-9 object-cover rounded-full border border-[color:var(--gold)]/40"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: "UF Productions"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-sm text-sm text-muted-foreground",
							children: "A premier video production agency crafting cinematic films, commercials, and AI-native stories."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 border-t border-foreground/5 pt-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								className: "hover:text-foreground text-muted-foreground",
								children: "Work"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-foreground text-muted-foreground",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#process",
								className: "hover:text-foreground text-muted-foreground",
								children: "Process"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								className: "hover:text-foreground text-muted-foreground",
								children: "About"
							}) })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " hello@ufproductions.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +351 910 000 000"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "mt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "Facebook",
									href: "https://web.facebook.com/profile.php?id=100084393908084",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "grid h-9 w-9 place-items-center rounded-full border border-foreground/10 hover:border-[color:var(--gold)] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									"aria-label": "LinkedIn",
									href: "https://www.linkedin.com/in/umar-farooq-3ab007299/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "grid h-9 w-9 place-items-center rounded-full border border-foreground/10 hover:border-[color:var(--gold)] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
								})]
							})
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-foreground/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" UF Productions. All rights reserved."
					] })
				})
			]
		})
	});
}
function SpecialtyTicker() {
	const items = [
		"Commercials",
		"AI Films",
		"Documentaries",
		"Podcasts",
		"Brand Films",
		"Social Content",
		"Music Videos",
		"Color Grading"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative border-y border-foreground/10 bg-primary py-6 text-primary-foreground overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-marquee flex w-max items-center gap-14 whitespace-nowrap",
				children: [
					...items,
					...items,
					...items
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-14 font-display text-2xl font-medium tracking-tight md:text-4xl",
					children: [it, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[color:var(--gold)]",
						children: "✱"
					})]
				}, i))
			})
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialtyTicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
