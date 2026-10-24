import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export interface CinematicStage {
  id: string;
  image: string;
  imageAlt: string;
  /** Smaller mid-ground image; omit to hide it. */
  secondaryImage?: string;
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  highlight?: { label: string; text: string };
  /** Floating mid-ground chips (first 4 are shown). */
  tags?: string[];
  /** Large outlined background numeral, e.g. "01". */
  numeral?: string;
}

interface CinematicParallaxJourneyProps {
  stages: CinematicStage[];
  label?: string;
  /** Height of any sticky header above the section, in px. */
  pinOffset?: number;
  /** Viewport heights of scrolling allotted to each stage. */
  scrollPerStage?: number;
}

// Timeline units: each stage moves for MOVE, then crossfades to the next over FADE.
const MOVE = 1;
const FADE = 0.3;
const STEP = MOVE + FADE;
const END_HOLD = 0.15;

const TAG_POSITIONS: React.CSSProperties[] = [
  { top: "9%", left: "5%" },
  { top: "46%", left: "3%" },
  { top: "14%", right: "6%" },
  { top: "31%", right: "5%" },
];
const TAG_DEPTHS = [0.22, 0.38, 0.3, 0.5];

const PARTICLES = [
  { top: "18%", left: "22%", size: 4, depth: 0.5 },
  { top: "62%", left: "12%", size: 3, depth: 0.8 },
  { top: "30%", left: "70%", size: 5, depth: 0.35 },
  { top: "70%", left: "58%", size: 3, depth: 0.65 },
  { top: "12%", left: "48%", size: 2, depth: 0.9 },
  { top: "52%", left: "88%", size: 4, depth: 0.45 },
];

const pad2 = (n: number) => String(n).padStart(2, "0");

function preloadImages(srcs: string[]) {
  srcs.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.decode?.().catch(() => {});
  });
}

export const CinematicParallaxJourney: React.FC<CinematicParallaxJourneyProps> = ({
  stages,
  label = "Cinematic Journey",
  pinOffset = 64,
  scrollPerStage = 1.1,
}) => {
  const { isLight } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const activeRef = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const stageCount = stages.length;
  const totalDuration = (stageCount - 1) * STEP + MOVE + END_HOLD;

  useEffect(() => {
    preloadImages(
      stages.flatMap((s) => (s.secondaryImage ? [s.image, s.secondaryImage] : [s.image]))
    );
  }, [stages]);

  useLayoutEffect(() => {
    if (reducedMotion || stageCount === 0) return;
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>("[data-stage]", pin);
      const width = () => pin.clientWidth;
      const travel = () => {
        const card = pin.querySelector<HTMLElement>("[data-fg]");
        const cw = card?.offsetWidth ?? width() * 0.5;
        const overshoot = width() < 768 ? 0.3 : 0.12;
        return (width() - cw) / 2 + cw * overshoot;
      };

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: `top top+=${pinOffset}`,
          end: () => `+=${pin.clientHeight * scrollPerStage * groups.length}`,
          pin,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const t = self.progress * totalDuration;
            const idx = gsap.utils.clamp(0, groups.length - 1, Math.floor((t + FADE / 2) / STEP));
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActiveIdx(idx);
            }
          },
        },
      });
      triggerRef.current = tl.scrollTrigger ?? null;

      groups.forEach((group, i) => {
        const start = i * STEP;
        const q = gsap.utils.selector(group);
        const texts = q("[data-text]");

        gsap.set(group, { autoAlpha: i === 0 ? 1 : 0 });

        // Foreground: the hero image crosses the screen left → right.
        tl.fromTo(q("[data-fg]"), { x: () => -travel() }, { x: () => travel(), duration: MOVE }, start);
        tl.fromTo(
          q("[data-fg-img]"),
          { scale: 1.14, xPercent: -3 },
          { scale: 1.02, xPercent: 3, duration: MOVE },
          start
        );

        // Mid-ground: chips & secondary image follow at slower, varied speeds.
        q("[data-depth]").forEach((el) => {
          const depth = parseFloat((el as HTMLElement).dataset.depth || "0.4");
          tl.fromTo(
            el,
            { x: () => -travel() * depth },
            { x: () => travel() * depth, duration: MOVE },
            start
          );
        });

        // Background: drifts subtly in the opposite direction.
        tl.fromTo(
          q("[data-bg]"),
          { x: () => width() * 0.04 },
          { x: () => -width() * 0.04, duration: MOVE },
          start
        );
        tl.fromTo(
          q("[data-numeral]"),
          { x: () => width() * 0.1 },
          { x: () => -width() * 0.1, duration: MOVE },
          start
        );

        const mids = q("[data-depth]");
        if (i > 0) {
          tl.fromTo(mids, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, start - FADE * 0.3);
        }
        if (i < groups.length - 1) {
          tl.to(mids, { autoAlpha: 0, duration: 0.15 }, start + MOVE - 0.15);
        }

        if (i > 0) {
          // Incoming stage is opaque and stacked above, so the crossfade never shows a blank frame.
          tl.to(group, { autoAlpha: 1, duration: FADE, ease: "power1.inOut" }, start - FADE);
          tl.set(groups[i - 1], { autoAlpha: 0 }, start);
          tl.fromTo(
            texts,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 0.22, stagger: 0.04, ease: "power2.out" },
            start - FADE * 0.5
          );
        }
        if (i < groups.length - 1) {
          tl.to(
            texts,
            { autoAlpha: 0, y: -28, duration: 0.18, stagger: 0.03, ease: "power1.in" },
            start + 0.8
          );
        }
      });

      tl.to({}, { duration: END_HOLD }, (groups.length - 1) * STEP + MOVE);
      tl.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: totalDuration }, 0);
      tl.to("[data-hint]", { autoAlpha: 0, y: 12, duration: 0.15 }, 0.05);

      gsap.utils.toArray<HTMLElement>("[data-particle]", pin).forEach((el) => {
        const depth = parseFloat(el.dataset.particle || "0.5");
        tl.fromTo(
          el,
          { x: () => -width() * 0.12 * depth, y: 10 * depth },
          { x: () => width() * 0.12 * depth, y: -10 * depth, duration: totalDuration },
          0
        );
      });

      // Entrance before pinning: first frame and heading settle in as the section arrives.
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: `top top+=${pinOffset}`,
            scrub: 0.6,
          },
        })
        .fromTo(groups[0].querySelector("[data-fg-frame]"), { scale: 0.88, opacity: 0.5 }, { scale: 1, opacity: 1 }, 0)
        .fromTo(groups[0].querySelector("[data-intro]"), { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      triggerRef.current = null;
      activeRef.current = 0;
      ctx.revert();
    };
  }, [reducedMotion, stageCount, pinOffset, scrollPerStage, totalDuration]);

  const scrollToStage = useCallback(
    (idx: number) => {
      const st = triggerRef.current;
      if (!st) return;
      const time = Math.min(idx * STEP + 0.02, totalDuration);
      const top = st.start + (time / totalDuration) * (st.end - st.start);
      window.scrollTo({ top, behavior: "smooth" });
    },
    [totalDuration]
  );

  if (stageCount === 0) return null;

  const panelBg = isLight ? "#f5efe4" : "#07090e";
  const headingColor = isLight ? "text-slate-900" : "text-white";
  const bodyColor = isLight ? "text-slate-700" : "text-slate-200";
  const accentColor = isLight ? "text-amber-800" : "text-amber-400";

  if (reducedMotion) {
    return (
      <section key="static" aria-label={label} className="relative w-full py-12 space-y-16">
        {stages.map((stage) => (
          <article key={stage.id} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            <img
              src={stage.image}
              alt={stage.imageAlt}
              className="w-full aspect-[16/10] object-cover rounded-3xl shadow-xl"
            />
            <div className="space-y-2">
              <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>{stage.eyebrow}</p>
              <h3 className={`font-cinzel font-bold text-2xl sm:text-3xl ${headingColor}`}>{stage.title}</h3>
              <p className={`text-sm leading-relaxed ${bodyColor}`}>{stage.description}</p>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <section key="animated" ref={sectionRef} aria-label={label} className="relative w-full">
      <div
        ref={pinRef}
        className="relative w-full h-[calc(100svh-4rem)] min-h-[480px] overflow-hidden"
        style={{ background: panelBg }}
      >
        {stages.map((stage, i) => (
          <div
            key={stage.id}
            data-stage
            aria-hidden={activeIdx !== i}
            className="absolute inset-0 overflow-hidden"
            style={{ background: panelBg, visibility: i === 0 ? "visible" : "hidden" }}
          >
            {/* Background */}
            <div data-bg className="absolute -inset-[8%] will-change-transform">
              <img
                src={stage.image}
                alt=""
                className={`w-full h-full object-cover blur-2xl scale-110 ${isLight ? "opacity-30" : "opacity-40"}`}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: isLight
                  ? "radial-gradient(ellipse at 50% 30%, rgba(245,239,228,0.1) 0%, rgba(245,239,228,0.75) 60%, #f5efe4 100%)"
                  : "radial-gradient(ellipse at 50% 30%, rgba(7,9,14,0.05) 0%, rgba(7,9,14,0.7) 60%, #07090e 100%)",
              }}
            />
            {stage.numeral && (
              <div
                data-numeral
                aria-hidden
                className="absolute right-[3%] top-[4%] font-cinzel font-black leading-none select-none text-[34vw] sm:text-[24vw] lg:text-[17vw] text-transparent will-change-transform"
                style={{
                  WebkitTextStroke: isLight ? "1.5px rgba(180,83,9,0.18)" : "1.5px rgba(245,158,11,0.16)",
                }}
              >
                {stage.numeral}
              </div>
            )}

            {/* Mid-ground */}
            {stage.secondaryImage && (
              <div
                data-depth="0.45"
                className={`hidden md:block absolute z-[5] bottom-[38%] right-[9%] w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 shadow-2xl will-change-transform ${
                  isLight ? "border-white/80" : "border-amber-500/40"
                }`}
              >
                <img src={stage.secondaryImage} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            {stage.tags?.slice(0, 4).map((tag, k) => (
              <span
                key={tag}
                data-depth={TAG_DEPTHS[k]}
                className={`${k >= 2 ? "hidden sm:inline-flex" : "inline-flex"} absolute z-[5] max-w-[42vw] sm:max-w-[16rem] truncate items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold backdrop-blur-md border will-change-transform ${
                  isLight
                    ? "bg-white/70 text-amber-950 border-amber-900/15"
                    : "bg-slate-900/60 text-amber-100 border-amber-500/25"
                }`}
                style={TAG_POSITIONS[k]}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="truncate">{tag}</span>
              </span>
            ))}

            {/* Foreground */}
            <div
              data-fg
              className="absolute z-10 inset-x-0 mx-auto top-[10%] sm:top-[12%] lg:top-[9%] w-[min(70vw,42vh)] sm:w-[min(66vw,58vh)] lg:w-[min(44vw,78vh)] max-w-[780px] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] will-change-transform"
            >
              <div
                data-fg-frame
                className={`relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden border shadow-2xl ${
                  isLight ? "border-amber-900/15 shadow-amber-950/20" : "border-amber-500/30 shadow-black/60"
                }`}
              >
                <img
                  data-fg-img
                  src={stage.image}
                  alt={stage.imageAlt}
                  loading="eager"
                  className="w-full h-full object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                {stage.badge && (
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-amber-500/95 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                    {stage.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Typography */}
            <div className="absolute z-20 inset-x-0 bottom-0 px-5 pb-8 sm:px-10 lg:px-14 lg:pb-10">
              <div data-intro className="grid lg:grid-cols-12 gap-4 items-end">
                <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                  <p data-text className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] ${accentColor}`}>
                    {stage.eyebrow}
                  </p>
                  <h3
                    data-text
                    className={`font-cinzel font-black text-2xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight ${headingColor}`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    data-text
                    className={`text-sm sm:text-base leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none ${bodyColor}`}
                  >
                    {stage.description}
                  </p>
                </div>
                {stage.highlight && (
                  <div
                    data-text
                    className={`hidden lg:block lg:col-span-4 lg:col-start-9 p-4 rounded-2xl border backdrop-blur-md ${
                      isLight ? "bg-white/70 border-amber-900/15" : "bg-slate-900/60 border-amber-500/25"
                    }`}
                  >
                    <p className={`text-[10px] uppercase font-bold tracking-wider ${accentColor}`}>
                      {stage.highlight.label}
                    </p>
                    <p className={`text-sm font-semibold mt-1 ${headingColor}`}>{stage.highlight.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Decorative particles */}
        <div aria-hidden className="absolute inset-0 z-[25] pointer-events-none">
          {PARTICLES.map((p, k) => (
            <span
              key={k}
              data-particle={p.depth}
              className="absolute rounded-full bg-amber-400/50 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            />
          ))}
        </div>

        {/* HUD: progress, counter, stage dots */}
        <div className="absolute inset-x-0 top-0 z-30 h-[3px] bg-amber-500/10">
          <div
            ref={progressRef}
            className="h-full origin-left bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <div className="absolute z-30 top-3 inset-x-0 px-5 sm:px-10 lg:px-14 flex items-center justify-between pointer-events-none">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${accentColor}`}>
            <Sparkles className="w-3 h-3" />
            {label}
          </span>
          <span className={`font-cinzel text-xs sm:text-sm font-bold tabular-nums ${headingColor}`} aria-live="polite">
            {pad2(activeIdx + 1)} <span className="opacity-50">/ {pad2(stageCount)}</span>
          </span>
        </div>
        <nav
          aria-label="Journey stages"
          className="hidden md:flex absolute z-30 right-4 lg:right-6 top-1/2 -translate-y-1/2 flex-col gap-2.5"
        >
          {stages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => scrollToStage(i)}
              aria-label={`Go to ${stage.eyebrow}`}
              aria-current={activeIdx === i ? "step" : undefined}
              className={`w-2 rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? "h-6 bg-amber-500"
                  : isLight
                    ? "h-2 bg-amber-900/25 hover:bg-amber-900/50"
                    : "h-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </nav>
        <div
          data-hint
          className={`absolute z-30 left-1/2 -translate-x-1/2 bottom-2 hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold pointer-events-none ${
            isLight ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <ArrowDown className="w-3 h-3" />
          Scroll to travel through time
        </div>
      </div>
    </section>
  );
};
