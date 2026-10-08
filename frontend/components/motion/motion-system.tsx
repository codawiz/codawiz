"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const MotionContext = createContext(false);
const preference = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(preference);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
export function useMotionEnabled() {
  return useContext(MotionContext);
}

export function MotionSystem({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(preference).matches,
    () => true,
  );
  const [paused, setPaused] = useState(false);
  const enabled = !reduced && !paused;
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "running" : "paused";
    if (!enabled) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    // Keep touch scrolling native; synchronize desktop wheel easing with ScrollTrigger.
    const lenis = window.matchMedia("(pointer: fine)").matches
      ? new Lenis({
          autoRaf: true,
          lerp: 0.085,
          smoothWheel: true,
          anchors: { offset: -100 },
        })
      : null;
    lenis?.on("scroll", ScrollTrigger.update);
    const listeners: (() => void)[] = [];
    const context = gsap.context(() => {
      const intro = document.querySelector(
        ".hero-section, .page-intro, .detail-intro",
      );
      if (intro) {
        gsap.from(
          intro.querySelectorAll(
            ".hero-kicker, .hero-line, h1:not(.hero-title), .eyebrow, p:not(.eyebrow):not([data-word-description]), .hero-actions, .hero-capabilities",
          ),
          {
            y: 32,
            opacity: 0,
            duration: 1,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
        );
      }
      document.querySelectorAll("[data-word-reveal]").forEach((text) => {
        gsap.from(text.querySelectorAll("[data-word]"), {
          opacity: 0,
          y: 5,
          duration: 0.18,
          stagger: 0.06,
          delay: 0.3,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      });
      if (intro?.classList.contains("hero-section")) {
        gsap.from(".ecosystem", {
          y: 45,
          rotateX: 8,
          opacity: 0,
          duration: 1.3,
          delay: 0.3,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
        gsap.from(".ecosystem-node", {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.8,
          ease: "back.out(1.5)",
          clearProps: "transform,opacity",
        });
      }
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal], .service-row, .service-card, .solution-card, .solution-row, .project-card, .approach-cell, .process-cell, .capability-cell, .capability-card, .case-cell, .about-pillar, .erp-ui",
        )
        .forEach((element) => {
          gsap.from(element, {
            y: 36,
            opacity: 0,
            duration: 0.85,
            delay: Math.min(
              Array.from(element.parentElement?.children ?? []).indexOf(
                element,
              ) * 0.055,
              0.22,
            ),
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });
      document
        .querySelectorAll(".chart-bars, .project-chart")
        .forEach((chart) => {
          gsap.from(chart.children, {
            scaleY: 0,
            transformOrigin: "bottom",
            stagger: 0.065,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: chart, start: "top 92%", once: true },
          });
        });
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
      });
      media.add("(min-width: 1024px) and (pointer: fine)", () => {
        if (intro?.classList.contains("hero-section"))
          gsap.to(".ecosystem-grid", {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
            overwrite: "auto",
          });
      });
    });
    // Pointer light follows the visitor without replacing the native cursor.
    if (window.matchMedia("(pointer: fine)").matches) {
      document
        .querySelectorAll<HTMLElement>(
          ".project-card, .service-card, .solution-card, .ecosystem",
        )
        .forEach((card) => {
          const move = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty(
              "--pointer-x",
              `${event.clientX - rect.left}px`,
            );
            card.style.setProperty(
              "--pointer-y",
              `${event.clientY - rect.top}px`,
            );
          };
          card.addEventListener("pointermove", move);
          listeners.push(() => {
            card.removeEventListener("pointermove", move);
            card.style.removeProperty("--pointer-x");
            card.style.removeProperty("--pointer-y");
          });
        });
      document
        .querySelectorAll<HTMLElement>(
          ".hero-actions .button, .cta-section .button",
        )
        .forEach((button) => {
          const x = gsap.quickTo(button, "x", {
            duration: 0.4,
            ease: "power3.out",
          });
          const y = gsap.quickTo(button, "y", {
            duration: 0.4,
            ease: "power3.out",
          });
          const move = (event: PointerEvent) => {
            const rect = button.getBoundingClientRect();
            x((event.clientX - rect.left - rect.width / 2) * 0.16);
            y((event.clientY - rect.top - rect.height / 2) * 0.2);
          };
          const leave = () => {
            x(0);
            y(0);
          };
          button.addEventListener("pointermove", move);
          button.addEventListener("pointerleave", leave);
          listeners.push(() => {
            button.removeEventListener("pointermove", move);
            button.removeEventListener("pointerleave", leave);
            x.tween.kill();
            y.tween.kill();
            gsap.set(button, { clearProps: "transform" });
          });
        });
    }
    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      listeners.forEach((remove) => remove());
      lenis?.destroy();
      media.revert();
      context.revert();
    };
  }, [enabled, pathname]);

  return (
    <MotionContext.Provider value={enabled}>
      {children}
      <div className="reading-progress" aria-hidden="true" />
      {!reduced && (
        <button
          className="motion-toggle"
          type="button"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          aria-label={paused ? "Resume animations" : "Pause animations"}
        >
          {paused ? <Play /> : <Pause />}
          <span>{paused ? "Resume motion" : "Pause motion"}</span>
        </button>
      )}
    </MotionContext.Provider>
  );
}
