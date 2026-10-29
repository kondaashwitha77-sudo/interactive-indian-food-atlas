import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export interface CinematicStage {
  id: string;
  image: string | null;
  imageAlt: string;
  imageReviewNote?: string;
  eyebrow: string;
  title: string;
  /** Optional one-line punchline under the headline. */
  tagline?: string;
  imageCredit?: { creator: string; sourcePageUrl: string; licenseUrl: string };
}

export interface CinematicOutro {
  kicker?: string;
  title: string;
  tagline?: string;
  image: string;
  imageCredit?: { creator: string; sourcePageUrl: string; licenseUrl: string };
}

interface CinematicParallaxJourneyProps {
  stages: CinematicStage[];
  label?: string;
  /** Closing hero card shown after the final stage. */
  outro?: CinematicOutro;
  /** Height of any sticky header above the section, in px. */
  pinOffset?: number;
  /** Viewport heights of scrolling allotted to each stage. */
  scrollPerStage?: number;
}

// Timeline units: each stage moves for MOVE, then crossfades to the next over FADE.
const MOVE = 1;
const FADE = 0.3;
const STEP = MOVE + FADE;
const OUTRO = 0.9;
const END_HOLD = 0.15;

const pad2 = (n: number) => String(n).padStart(2, "0");

function preloadImages(srcs: string[]) {
  srcs.filter(Boolean).forEach((src) => {
    const img = new Image();
    img.src = src;
    img.decode?.().catch(() => {});
  });
}

const Words: React.FC<{ text: string; attr: string }> = ({ text, attr }) => (
  <>
    {text.split(" ").map((word, k) => (
      <span key={k} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
        <span {...{ [attr]: "" }} className="inline-block will-change-transform">
          {word}
          {"\u00a0"}
        </span>
      </span>
    ))}
  </>
);

export const CinematicParallaxJourney: React.FC<CinematicParallaxJourneyProps> = ({
  stages,
  label = "Cinematic Journey",
  outro,
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
  const hasOutro = Boolean(outro);
  const stagesEnd = (stageCount - 1) * STEP + MOVE;
  const totalDuration = (hasOutro ? stageCount * STEP + OUTRO : stagesEnd) + END_HOLD;

  useEffect(() => {
    preloadImages([
      ...stages.flatMap((s) => (s.image ? [s.image] : [])),
      ...(outro ? [outro.image] : []),
    ]);
  }, [stages, outro]);

  useLayoutEffect(() => {
    if (reducedMotion || stageCount === 0) return;
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>("[data-stage]", pin);
      const outroEl = pin.querySelector<HTMLElement>("[data-outro]");
      const width = () => pin.clientWidth;
      const isMobile = () => width() < 768;
      const travel = () => {
        const card = pin.querySelector<HTMLElement>("[data-fg]");
        const cw = card?.offsetWidth ?? width() * 0.5;
        return (width() - cw) / 2 + cw * (isMobile() ? 0.3 : 0.12);
      };
      const swing = () => (isMobile() ? 20 : 32);
      const scrollLength = groups.length + (outroEl ? 0.8 : 0);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: `top top+=${pinOffset}`,
          end: () => `+=${pin.clientHeight * scrollPerStage * scrollLength}`,
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
        const half = MOVE / 2;
        const q = gsap.utils.selector(group);
        const words = q("[data-word]");
        const minor = q("[data-text]");

        gsap.set(group, { autoAlpha: i === 0 ? 1 : 0 });

        // Foreground: hero card crosses left → right while swinging in 3D like a product shot.
        tl.fromTo(q("[data-fg]"), { x: () => -travel() }, { x: () => travel(), duration: MOVE }, start);
        tl.fromTo(
          q("[data-tilt]"),
          { rotateY: () => swing(), rotateX: 10, z: -220 },
          { rotateY: 0, rotateX: 0, z: 70, duration: half, ease: "sine.out" },
          start
        );
        tl.to(
          q("[data-tilt]"),
          { rotateY: () => -swing(), rotateX: -6, z: -220, duration: half, ease: "sine.in", immediateRender: false },
          start + half
        );
        tl.fromTo(q("[data-fg-img]"), { xPercent: -2 }, { xPercent: 2, duration: MOVE }, start);
        tl.fromTo(q("[data-sheen]"), { xPercent: -160 }, { xPercent: 260, duration: MOVE, ease: "power1.inOut" }, start);
        tl.fromTo(q("[data-shadow]"), { scaleX: 0.6, opacity: 0.25 }, { scaleX: 1.1, opacity: 0.6, duration: half, ease: "sine.out" }, start);
        tl.to(q("[data-shadow]"), { scaleX: 0.6, opacity: 0.25, duration: half, ease: "sine.in", immediateRender: false }, start + half);

        if (i > 0) {
          // Incoming stage is opaque and stacked above, so the crossfade never shows a blank frame.
          tl.to(group, { autoAlpha: 1, duration: FADE, ease: "power1.inOut" }, start - FADE);
          tl.set(groups[i - 1], { autoAlpha: 0 }, start);
          tl.fromTo(
            words,
            { yPercent: 110, rotateX: -75, autoAlpha: 0 },
            { yPercent: 0, rotateX: 0, autoAlpha: 1, duration: 0.24, stagger: 0.035, ease: "power3.out" },
            start - FADE * 0.5
          );
          tl.fromTo(minor, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.05, ease: "power2.out" }, start - FADE * 0.4);
        }
        if (i < groups.length - 1 || !!outroEl) {
          tl.to(words, { yPercent: -100, autoAlpha: 0, duration: 0.16, stagger: 0.02, ease: "power1.in" }, start + 0.8);
          tl.to(minor, { autoAlpha: 0, y: -20, duration: 0.15, ease: "power1.in" }, start + 0.8);
        }
      });

      if (outroEl) {
        const start = groups.length * STEP;
        const oq = gsap.utils.selector(outroEl);
        gsap.set(outroEl, { autoAlpha: 0 });
        tl.to(outroEl, { autoAlpha: 1, duration: FADE, ease: "power1.inOut" }, start - FADE);
        tl.set(groups[groups.length - 1], { autoAlpha: 0 }, start);
        tl.fromTo(oq("[data-outro-img]"), { scale: 1.35 }, { scale: 1.05, duration: OUTRO + FADE }, start - FADE);
        tl.fromTo(
          oq("[data-char]"),
          { z: -500, rotateY: (k: number) => (k % 2 ? 70 : -70), yPercent: 40, autoAlpha: 0 },
          { z: 0, rotateY: 0, yPercent: 0, autoAlpha: 1, duration: 0.4, stagger: 0.03, ease: "power3.out" },
          start - FADE * 0.3
        );
        tl.fromTo(oq("[data-outro-text]"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.25, stagger: 0.08 }, start + 0.25);
        tl.fromTo(oq("[data-outro-line]"), { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: "power2.out" }, start + 0.2);
      }

      tl.to({}, { duration: END_HOLD }, totalDuration - END_HOLD);
      tl.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: totalDuration }, 0);
      tl.to("[data-hint]", { autoAlpha: 0, y: 12, duration: 0.15 }, 0.05);

      // Entrance before pinning: first card rises out of depth as the section arrives.
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
        .fromTo(groups[0].querySelector("[data-fg-frame]"), { scale: 0.8, opacity: 0.4 }, { scale: 1, opacity: 1 }, 0)
        .fromTo(groups[0].querySelector("[data-intro]"), { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);
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
  }, [reducedMotion, stageCount, hasOutro, pinOffset, scrollPerStage, totalDuration]);

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
          <article key={stage.id} className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-6 items-center">
            {stage.image ? (
              <div className="relative w-full">
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="w-full aspect-[16/10] object-contain rounded-3xl bg-black/10 shadow-xl"
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
                <span className="absolute left-3 top-3 max-w-[90%] rounded-lg bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
                  {stage.eyebrow}
                </span>
              </div>
            ) : (
              <div role="status" className={`w-full aspect-[16/10] rounded-3xl border flex items-center justify-center p-6 text-center ${isLight ? "bg-white/70 border-amber-900/15" : "bg-slate-950 border-amber-500/20"}`}>
                <div className="max-w-lg">
                  <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Image review needed</p>
                  <p className={`mt-2 text-sm leading-relaxed ${bodyColor}`}>{stage.imageReviewNote || "No verified, stage-specific photograph is assigned yet."}</p>
                </div>
              </div>
            )}
            <div className="space-y-2">
              <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>{stage.eyebrow}</p>
              <h3 className={`font-cinzel font-black text-3xl sm:text-4xl ${headingColor}`}>{stage.title}</h3>
              {stage.tagline && <p className={`text-base ${bodyColor}`}>{stage.tagline}</p>}
              {stage.imageCredit && (
                <p className={`text-[10px] sm:text-xs leading-snug ${bodyColor}`}>
                  Photo: <a href={stage.imageCredit.sourcePageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{stage.imageCredit.creator} · Wikimedia Commons</a>
                  {" · "}
                  <a href={stage.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">License</a>
                </p>
              )}
            </div>
          </article>
        ))}
        {outro && (
          <article className="max-w-5xl mx-auto px-5 text-center space-y-3">
            <img src={outro.image} alt={outro.title} className="w-full aspect-[16/10] sm:aspect-[21/9] object-contain rounded-3xl bg-black/10 shadow-xl" />
            {outro.kicker && <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>{outro.kicker}</p>}
            <h3 className={`font-cinzel font-black text-4xl sm:text-6xl ${headingColor}`}>{outro.title}</h3>
            {outro.tagline && <p className={`text-lg ${bodyColor}`}>{outro.tagline}</p>}
            {outro.imageCredit && (
              <p className={`text-[10px] sm:text-xs leading-snug ${bodyColor}`}>
                Photo: <a href={outro.imageCredit.sourcePageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{outro.imageCredit.creator} · Wikimedia Commons</a>
                {" · "}
                <a href={outro.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">License</a>
              </p>
            )}
          </article>
        )}
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
        {stages.map((stage, i) => {
          return (
            <div
              key={stage.id}
              data-stage
              aria-hidden={activeIdx !== i}
              className="absolute inset-0 overflow-hidden"
              style={{
                background: panelBg,
                visibility: i === 0 ? "visible" : "hidden",
                perspective: "1100px",
                perspectiveOrigin: "50% 40%",
              }}
            >
              {/* Foreground hero card */}
              <div
                data-fg
                className="absolute z-10 inset-x-0 mx-auto top-[9%] sm:top-[8%] w-[min(94vw,66vh)] sm:w-[min(80vw,78vh)] lg:w-[min(70vw,92vh)] max-w-[920px] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div data-tilt className="relative w-full h-full will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                  <div
                    data-fg-frame
                    className={`relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden border ${
                      isLight
                        ? "border-amber-900/15 shadow-[0_40px_80px_-20px_rgba(120,53,15,0.45)]"
                        : "border-amber-400/30 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)]"
                    }`}
                  >
                    {stage.image ? (
                      <>
                        <img
                          data-fg-img
                          src={stage.image}
                          alt={stage.imageAlt}
                          loading="eager"
                          className="w-full h-full object-contain will-change-transform"
                          onError={(event) => {
                            event.currentTarget.hidden = true;
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
                        <span className="absolute left-4 top-4 max-w-[90%] rounded-lg bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
                          {stage.eyebrow}
                        </span>
                        <div
                          data-sheen
                          aria-hidden
                          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 pointer-events-none mix-blend-overlay will-change-transform"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
                        />
                      </>
                    ) : (
                      <div role="status" className={`flex h-full w-full items-center justify-center p-6 text-center ${isLight ? "bg-white/70" : "bg-slate-950"}`}>
                        <div className="max-w-[32rem]">
                          <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Image review needed</p>
                          <p className={`mt-3 text-sm leading-relaxed ${bodyColor}`}>{stage.imageReviewNote || "No verified, stage-specific photograph is assigned yet."}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  data-shadow
                  aria-hidden
                  className="absolute left-[10%] right-[10%] -bottom-[14%] h-[12%] rounded-[50%] blur-2xl will-change-transform"
                  style={{ background: isLight ? "rgba(120,53,15,0.55)" : "rgba(0,0,0,0.9)" }}
                />
              </div>

              {/* Typography */}
              <div className="absolute z-20 inset-x-0 bottom-0 px-5 pb-8 sm:px-10 lg:px-14 lg:pb-10">
                <div data-intro className="max-w-5xl space-y-2 sm:space-y-3" style={{ perspective: "600px" }}>
                  <p data-text className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] ${accentColor}`}>
                    {stage.eyebrow}
                  </p>
                  <h3
                    className={`font-cinzel font-black text-[1.7rem] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.04] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] ${headingColor}`}
                  >
                    <Words text={stage.title} attr="data-word" />
                  </h3>
                  {stage.tagline && (
                    <p data-text className={`text-base sm:text-lg font-medium ${bodyColor}`}>
                      {stage.tagline}
                    </p>
                  )}
                  {stage.imageCredit && (
                    <p data-text className={`text-[10px] sm:text-xs leading-snug ${bodyColor}`}>
                      Photo: <a href={stage.imageCredit.sourcePageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{stage.imageCredit.creator} · Wikimedia Commons</a>
                      {" · "}
                      <a href={stage.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">License</a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {outro && (
          <div
            data-outro
            aria-hidden={activeIdx !== stageCount - 1}
            className="absolute inset-0 z-[22] overflow-hidden flex items-center justify-center text-center"
            style={{ visibility: "hidden", background: panelBg, perspective: "900px" }}
          >
            <img
              data-outro-img
              src={outro.image}
              alt={outro.title}
              className="absolute inset-0 w-full h-full object-contain bg-black/10 will-change-transform"
              onError={(event) => {
                event.currentTarget.hidden = true;
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: isLight
                  ? "radial-gradient(ellipse at center, rgba(245,239,228,0.55) 0%, rgba(245,239,228,0.92) 70%)"
                  : "radial-gradient(ellipse at center, rgba(7,9,14,0.45) 0%, rgba(7,9,14,0.92) 70%)",
              }}
            />
            <div className="relative px-5 space-y-4 sm:space-y-6" style={{ transformStyle: "preserve-3d" }}>
              {outro.kicker && (
                <p data-outro-text className={`text-[10px] sm:text-sm font-bold uppercase tracking-[0.4em] ${accentColor}`}>
                  {outro.kicker}
                </p>
              )}
              <h3
                aria-label={outro.title}
                className={`font-cinzel font-black uppercase leading-[0.95] text-[13vw] sm:text-[10vw] lg:text-[8vw] ${headingColor}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {outro.title.split(" ").map((word, w) => (
                  <span key={w} className="inline-block whitespace-nowrap" style={{ transformStyle: "preserve-3d" }}>
                    {[...word].map((ch, c) => (
                      <span key={c} data-char aria-hidden className="inline-block will-change-transform">
                        {ch}
                      </span>
                    ))}
                    {"\u00a0"}
                  </span>
                ))}
              </h3>
              <div data-outro-line className="mx-auto h-[2px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              {outro.tagline && (
                <p data-outro-text className={`font-cormorant italic text-xl sm:text-3xl ${bodyColor}`}>
                  {outro.tagline}
                </p>
              )}
              {outro.imageCredit && (
                <p data-outro-text className={`text-[10px] sm:text-xs leading-snug ${bodyColor}`}>
                  Photo: <a href={outro.imageCredit.sourcePageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{outro.imageCredit.creator} · Wikimedia Commons</a>
                  {" · "}
                  <a href={outro.imageCredit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">License</a>
                </p>
              )}
            </div>
          </div>
        )}

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
          Scroll to explore
        </div>
      </div>
    </section>
  );
};
