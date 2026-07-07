import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  Film,
  Mic,
  Wand2,
  Clapperboard,
  Palette,
  AudioLines,
  Zap,
  Workflow,
  Layers,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  Quote,
  Star,
} from "lucide-react";

import heroStill from "@/assets/hero-still.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200" },
    ],
  }),
});

/* ---------------- Shared motion helpers ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1200px,calc(100%-1.5rem))]"
    >
      <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-soft">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
            KR
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">Kai Reyes</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Let's talk
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------------- Scroll progress ---------------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[color:var(--gold)] via-[color:var(--ember)] to-[color:var(--gold)]"
    />
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 grain">
      {/* Drifting blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[color:var(--gold)]/40 blur-3xl" />
        <div className="animate-drift absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[color:var(--ember)]/35 blur-3xl [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,color-mix(in_oklab,white_60%,transparent),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold)]" />
            </span>
            Available for select projects — Winter 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-display text-[13vw] leading-[0.95] font-semibold tracking-tight sm:text-7xl md:text-[104px]"
          >
            Turning ideas into{" "}
            <span className="relative inline-block">
              <span className="italic font-normal bg-gradient-to-br from-[color:var(--foreground)] via-[color:var(--ember)] to-[color:var(--gold)] bg-clip-text text-transparent">
                cinematic
              </span>
            </span>{" "}
            stories.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          >
            I'm Kai — an independent video editor shaping commercials, AI films, documentaries,
            podcasts, brand films and social content that feel considered, cinematic and alive.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton href="#work" variant="primary">
              <Play className="h-4 w-4" /> View portfolio
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let's work together
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            <Stat value={180} suffix="+" label="Films delivered" />
            <Stat value={42} label="Global brands" />
            <Stat value={9} label="Years crafting" />
          </motion.div>
        </motion.div>

        {/* Floating cinematic composition */}
        <FloatingReel />
      </div>
    </section>
  );
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value]);
  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-semibold md:text-4xl">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function FloatingReel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -40]);

  return (
    <div ref={ref} className="pointer-events-none relative mt-20 hidden h-[380px] md:block">
      <motion.div
        style={{ y: y1 }}
        className="animate-float absolute right-0 top-0 h-56 w-96 overflow-hidden rounded-3xl shadow-soft"
      >
        <ReelArt src={thumb6} label="COMMERCIAL · 04:12" showPlay eager />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="animate-float absolute right-[26%] top-[38%] h-44 w-72 overflow-hidden rounded-3xl shadow-soft [animation-delay:-2s]"
      >
        <ReelArt src={thumb5} label="AI FILM · 02:48" showPlay eager />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="animate-float absolute right-[52%] top-[12%] h-40 w-64 overflow-hidden rounded-3xl shadow-soft [animation-delay:-4s]"
      >
        <ReelArt src={thumb3} label="DOC · 12:03" showPlay eager />
      </motion.div>

      {/* Timeline strip */}
      <div className="absolute bottom-0 left-0 right-0 rounded-2xl border border-foreground/10 bg-surface/70 p-3 backdrop-blur">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> Timeline · Sequence 01
        </div>
        <div className="mt-2 grid grid-cols-24 gap-[3px]">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded-[3px]"
              style={{
                background:
                  i % 7 === 0
                    ? "var(--gold)"
                    : i % 5 === 0
                    ? "var(--ember)"
                    : "color-mix(in oklab, var(--foreground) 12%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReelArt({
  src,
  label,
  showPlay = false,
  eager = false,
}: {
  src: string;
  label?: string;
  showPlay?: boolean;
  eager?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111]">
      <img
        src={src}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      {/* film strip perforations */}
      <div className="absolute inset-x-0 top-0 h-4 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.85)_0_8px,transparent_8px_16px)] opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.85)_0_8px,transparent_8px_16px)] opacity-70" />
      {showPlay && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-black shadow-lg">
            <Play className="h-4 w-4 fill-current" />
          </div>
        </div>
      )}
      {label && (
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-white/90">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            REC
          </span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors " +
        (variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-foreground"
          : "border border-foreground/15 bg-surface/60 text-foreground hover:bg-surface backdrop-blur")
      }
    >
      {children}
    </motion.a>
  );
}

/* ---------------- Marquee ---------------- */
function TrustedBy() {
  const brands = ["Netflix", "Nike", "Airbnb", "Vogue", "Spotify", "Figma", "Notion", "Ferrari", "Nespresso", "Louis Vuitton"];
  return (
    <section className="py-16 border-y border-foreground/5 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by teams that care about craft
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl font-semibold tracking-tight text-foreground/50 hover:text-foreground transition-colors"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */
type Project = {
  title: string;
  category: string;
  desc: string;
  duration: string;
  image: string;
};
const PROJECTS: Record<string, Project[]> = {
  "AI Videos": [
    { title: "Neon Cartographers", category: "AI Short Film", desc: "A stylised AI-generated journey through invented cities.", duration: "03:24", image: thumb1 },
    { title: "Echoes of Tomorrow", category: "AI Commercial", desc: "Product story blending live plates with generative motion.", duration: "01:12", image: thumb5 },
    { title: "The Silent Loop", category: "AI Music Video", desc: "Rhythmic edit synced to a generative aesthetic.", duration: "02:48", image: thumb3 },
  ],
  Documentaries: [
    { title: "Salt & Iron", category: "Feature Doc", desc: "Shipbuilders on the northern coast, told over one year.", duration: "12:03", image: thumb3 },
    { title: "Between the Peaks", category: "Travel Doc", desc: "Andean guides and the geography of memory.", duration: "18:41", image: thumb6 },
    { title: "Small Fires", category: "Social Impact", desc: "Community storytellers rebuilding after loss.", duration: "22:10", image: thumb4 },
  ],
  "Cinematic Videos": [
    { title: "Amber Hours", category: "Brand Film", desc: "A watchmaker's studio filmed in a single golden afternoon.", duration: "02:30", image: thumb2 },
    { title: "Atrium", category: "Commercial", desc: "Architectural showcase with slow motion and warm grade.", duration: "01:45", image: thumb1 },
    { title: "Northbound", category: "Automotive", desc: "A road film with practical light and analog textures.", duration: "03:12", image: thumb6 },
  ],
  Podcasts: [
    { title: "The Long Take", category: "Podcast Series", desc: "Editorial cutdowns and animated pull-quotes.", duration: "45:00", image: thumb4 },
    { title: "After Hours", category: "Interview Show", desc: "Multi-cam edits with cinematic B-roll interludes.", duration: "38:14", image: thumb4 },
    { title: "Signal & Noise", category: "Tech Podcast", desc: "Motion-graphic explainers between conversation.", duration: "51:22", image: thumb2 },
  ],
  "AI Stories": [
    { title: "Paper Weather", category: "AI Narrative", desc: "A miniature world where forecasts become fables.", duration: "04:02", image: thumb5 },
    { title: "The Cartographer's Dream", category: "AI Short", desc: "A dream sequence stitched from thousands of frames.", duration: "05:18", image: thumb1 },
    { title: "Chorus", category: "AI Anthology", desc: "Six voices, six cities, one continuous edit.", duration: "07:44", image: thumb3 },
  ],
};
const TABS = Object.keys(PROJECTS);

function Portfolio() {
  const [active, setActive] = useState(TABS[0]);
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Selected work · 2019 — 2026
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-5xl font-semibold md:text-7xl">
              A reel of stories shaped in the edit.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-muted-foreground">
            From feature documentaries to short-form AI experiments — each project sculpted for
            rhythm, emotion and image.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 rounded-full border border-foreground/10 bg-surface/70 p-1.5 backdrop-blur w-fit max-w-full overflow-x-auto">
          {TABS.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
                <span className={"relative " + (isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
                  {t}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS[active].map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ReelArt src={project.image} label={`${project.category.toUpperCase()} · ${project.duration}`} />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)] text-primary shadow-glow transition-transform duration-500 group-hover:scale-110">
            <Play className="h-5 w-5 fill-current" />
          </div>
        </div>
        {/* Animated border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[color:var(--gold)]/0 transition-all duration-500 group-hover:ring-[color:var(--gold)]/70" />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{project.category}</div>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
        </div>
        <div className="shrink-0 rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] font-medium tabular-nums text-muted-foreground">
          {project.duration}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Featured project ---------------- */
function Featured() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="overflow-hidden rounded-[36px] border border-foreground/10 bg-surface shadow-soft"
        >
          <div className="grid md:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-video md:aspect-auto">
              <ReelArt src={thumb2} label="FEATURED · AMBER HOURS · 02:30" />
              <button
                aria-label="Play trailer"
                className="absolute inset-0 grid place-items-center transition-transform hover:scale-[1.02]"
              >
                <span className="grid h-24 w-24 place-items-center rounded-full bg-white/95 text-primary shadow-glow">
                  <Play className="h-8 w-8 fill-current" />
                </span>
              </button>
            </div>
            <div className="p-8 md:p-12">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured project</div>
              <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Amber Hours — a watchmaker's afternoon.
              </h3>
              <p className="mt-4 text-muted-foreground">
                A single-location brand film cut to breathe with the light. Practical lens choices,
                a warm grade, and a sound design that lets the mechanics speak.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-muted-foreground">Services</dt>
                  <dd className="mt-1 font-medium">Edit · Color · Sound</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Tools</dt>
                  <dd className="mt-1 font-medium">Resolve · Ableton · AE</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="mt-1 font-medium">02:30</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Delivered</dt>
                  <dd className="mt-1 font-medium">May 2026</dd>
                </div>
              </dl>

              <div className="mt-10">
                <MagneticButton href="#work" variant="primary">
                  Watch full film <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Services / Why me ---------------- */
const SERVICES = [
  { icon: Sparkles, title: "Storytelling", desc: "Structure, rhythm and pacing shaped around a single, honest idea." },
  { icon: Palette, title: "Color grading", desc: "Emotional palettes crafted in Resolve, from filmic to editorial." },
  { icon: AudioLines, title: "Sound design", desc: "Foley, texture and score woven for depth and immersion." },
  { icon: Layers, title: "Motion graphics", desc: "Typography, transitions and stylised overlays that feel considered." },
  { icon: Wand2, title: "AI video editing", desc: "Generative workflows blended into real footage, elegantly." },
  { icon: Zap, title: "Fast delivery", desc: "Predictable turnarounds without compromising the craft." },
  { icon: Workflow, title: "Pro workflow", desc: "Frame.io reviews, versioned masters, tidy handovers." },
  { icon: Clapperboard, title: "End-to-end", desc: "From assembly to final master — one editor, one voice." },
];
function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-surface/70">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Why work with me
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-5xl font-semibold md:text-7xl text-balance">
            Craft you can feel in every frame.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group rounded-3xl border border-foreground/10 bg-background p-6 transition-colors hover:border-[color:var(--gold)]/60"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)]/25 text-foreground transition-transform group-hover:rotate-[-6deg] group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Process / Timeline ---------------- */
const STEPS = [
  { n: "01", t: "Discovery", d: "We align on story, audience and the feeling to leave behind." },
  { n: "02", t: "Planning", d: "Structure, references, selects and a clear editorial map." },
  { n: "03", t: "Editing", d: "Assemblies to fine cut — rhythm, restraint, intention." },
  { n: "04", t: "Motion graphics", d: "Typography, transitions and animated storytelling." },
  { n: "05", t: "Color grading", d: "A grade tuned to your palette and platform." },
  { n: "06", t: "Sound design", d: "Score, foley and mix crafted for scale." },
  { n: "07", t: "Final delivery", d: "Masters, socials and versioned deliverables — on time." },
];
function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The workflow</div>
          <h2 className="mt-4 font-display text-5xl font-semibold md:text-7xl text-balance">
            An editing process built for calm.
          </h2>
        </div>

        <div ref={ref} className="relative mt-20 pl-8 md:pl-0">
          {/* central line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-foreground/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-3 top-0 w-px bg-gradient-to-b from-[color:var(--gold)] to-[color:var(--ember)] md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-14">
            {STEPS.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                  className={"relative grid grid-cols-1 md:grid-cols-2 md:gap-12 " + (right ? "md:[&>*:first-child]:col-start-2" : "")}
                >
                  <div className={"relative " + (right ? "md:text-left" : "md:text-right")}>
                    <div className="absolute left-[-1.35rem] top-2 grid h-3 w-3 place-items-center rounded-full bg-[color:var(--gold)] shadow-glow md:left-auto md:right-[-1.65rem] md:top-3" style={right ? { left: "-1.65rem", right: "auto" } : {}} />
                    <div className="text-xs font-medium tabular-nums text-[color:var(--ember)]">{s.n}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground">{s.d}</p>
                  </div>
                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { name: "Amelia Choi", role: "Creative Director, Nine&Co", quote: "Kai edits with taste that's hard to find. Every cut felt intentional and the film shipped ahead of schedule." },
  { name: "Marcus Alderly", role: "Founder, Field Studio", quote: "He turned a stack of raw footage into a story we're proud to send everywhere. Genuine collaborator." },
  { name: "Priya Ramanathan", role: "Head of Brand, Northwind", quote: "Cinematic, precise, and completely calm to work with. Our team asked for him by name on the next project." },
  { name: "Théo Marchetti", role: "Executive Producer, Atrium Films", quote: "One of the sharpest editors I've worked with in the past five years. The color and sound feel like a full studio." },
];
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative py-28 md:py-40 bg-surface/70">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Kind words</div>
        <div className="relative mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="glass mx-auto max-w-3xl rounded-3xl p-10 shadow-soft"
            >
              <Quote className="mx-auto h-6 w-6 text-[color:var(--ember)]" />
              <p className="mt-6 font-display text-2xl leading-snug text-balance md:text-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--gold)] font-display text-sm font-semibold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={"h-1.5 rounded-full transition-all " + (k === i ? "w-8 bg-primary" : "w-2 bg-foreground/20")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
const SKILLS = ["DaVinci Resolve", "Premiere Pro", "After Effects", "Ableton Live", "Runway", "Sora", "Frame.io", "Cinema 4D", "Figma", "Notion"];
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-[32px] border border-foreground/10 shadow-soft"
        >
          <div className="relative aspect-[4/5]">
            <img
              src={aboutPortrait}
              alt="Portrait of Kai in the edit suite"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl glass p-4">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Currently</div>
              <div className="mt-1 font-display text-lg font-semibold">Cutting a documentary in Kyoto</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-5xl font-semibold md:text-6xl text-balance">
            I edit like I'm building a small, careful cathedral.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground">
            Nine years cutting for brands, agencies and independent filmmakers across three
            continents. I work best when trusted to shape a story end-to-end — from selects to the
            final master — and I care about the last five percent as much as the first eighty.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6">
            <Stat value={9} label="Years editing" />
            <Stat value={180} suffix="+" label="Projects delivered" />
            <Stat value={14} label="Industries served" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Toolkit</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-full border border-foreground/10 bg-surface px-3 py-1.5 text-sm text-foreground/80 hover:border-[color:var(--gold)] hover:text-foreground transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary" />
        <div className="animate-drift absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[color:var(--gold)]/40 blur-3xl" />
        <div className="animate-drift absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[color:var(--ember)]/40 blur-3xl [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_120%,rgba(255,255,255,0.15),transparent)]" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center text-primary-foreground">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display text-6xl font-semibold tracking-tight text-balance md:text-8xl"
        >
          Let's create something{" "}
          <span className="italic font-normal bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--ember)] bg-clip-text text-transparent">
            cinematic.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70"
        >
          Two project slots open for Q1. Bring a brief, a rough cut, or just an idea worth pulling
          into shape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@kaireyes.film"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-medium text-primary transition-transform hover:scale-[1.03]"
          >
            Book a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:hello@kaireyes.film"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10 transition-colors"
          >
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                KR
              </span>
              <span className="font-display text-lg font-semibold">Kai Reyes</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              An independent editor cutting cinematic film, commercials and AI-native stories.
              Based between Lisbon and Kyoto.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#work" className="hover:text-foreground text-muted-foreground">Work</a></li>
              <li><a href="#services" className="hover:text-foreground text-muted-foreground">Services</a></li>
              <li><a href="#process" className="hover:text-foreground text-muted-foreground">Process</a></li>
              <li><a href="#about" className="hover:text-foreground text-muted-foreground">About</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> hello@kaireyes.film</li>
              <li className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> +351 910 000 000</li>
              <li className="mt-4 flex items-center gap-3">
                <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 hover:border-[color:var(--gold)] transition-colors"><Instagram className="h-4 w-4" /></a>
                <a aria-label="YouTube" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 hover:border-[color:var(--gold)] transition-colors"><Youtube className="h-4 w-4" /></a>
                <a aria-label="LinkedIn" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 hover:border-[color:var(--gold)] transition-colors"><Linkedin className="h-4 w-4" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-foreground/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Kai Reyes Studio. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Film className="h-3.5 w-3.5" /> Crafted with intent.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Specialty ticker ---------------- */
function SpecialtyTicker() {
  const items = [
    "Commercials",
    "AI Films",
    "Documentaries",
    "Podcasts",
    "Brand Films",
    "Social Content",
    "Music Videos",
    "Color Grading",
  ];
  return (
    <div className="relative border-y border-foreground/10 bg-primary py-6 text-primary-foreground overflow-hidden">
      <div className="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center gap-14 font-display text-2xl font-medium tracking-tight md:text-4xl">
              {it}
              <span className="text-[color:var(--gold)]">✱</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
function Index() {
  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Nav />
      <Hero />
      <SpecialtyTicker />
      <TrustedBy />
      <Portfolio />
      <Featured />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
