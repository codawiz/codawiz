"use client";

import { useEffect, useRef } from "react";
import { useMotionEnabled } from "@/components/motion/motion-system";

/** Decorative WebGL enhancement. The server-rendered network remains the fallback. */
export function HeroNetwork() {
  const hostRef = useRef<HTMLDivElement>(null);
  const enabled = useMotionEnabled();
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !enabled) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    void import("three")
      .then((THREE) => {
        if (cancelled) return;
        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
          });
        } catch {
          return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        host.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 30);
        camera.position.z = 5.4;
        const group = new THREE.Group();
        scene.add(group);
        const geometry = new THREE.IcosahedronGeometry(1.62, 2);
        const wireGeometry = new THREE.WireframeGeometry(geometry);
        const wireMaterial = new THREE.LineBasicMaterial({
          color: 0x378aff,
          transparent: true,
          opacity: 0.22,
        });
        const wire = new THREE.LineSegments(wireGeometry, wireMaterial);
        group.add(wire);
        const dotMaterial = new THREE.PointsMaterial({
          color: 0x85c6ff,
          size: 0.026,
          transparent: true,
          opacity: 0.85,
        });
        const dots = new THREE.Points(geometry, dotMaterial);
        group.add(dots);
        const ringGeometry = new THREE.TorusGeometry(1.95, 0.006, 4, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0x287fff,
          transparent: true,
          opacity: 0.45,
        });
        const rings = [0, 1].map((index) => {
          const ring = new THREE.Mesh(ringGeometry, ringMaterial);
          ring.rotation.x = 1.05 + index * 0.85;
          ring.rotation.y = index * 0.6;
          group.add(ring);
          return ring;
        });
        const pointer = { x: 0, y: 0 };
        const target = host.closest(".ecosystem") ?? host;
        const onPointer = (event: Event) => {
          const e = event as PointerEvent;
          const rect = target.getBoundingClientRect();
          pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.45;
          pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3;
        };
        const resetPointer = () => {
          pointer.x = 0;
          pointer.y = 0;
        };
        target.addEventListener("pointermove", onPointer);
        target.addEventListener("pointerleave", resetPointer);
        const resize = new ResizeObserver(() => {
          const { width, height } = host.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        });
        resize.observe(host);
        let visible = false;
        let lastTime = 0;
        const frame = (time: number) => {
          if (time - lastTime < 32) return;
          const delta = Math.min((time - lastTime) / 1000, 0.05);
          lastTime = time;
          wire.rotation.y += delta * 0.095;
          dots.rotation.copy(wire.rotation);
          rings[0].rotation.z += delta * 0.055;
          rings[1].rotation.z -= delta * 0.045;
          group.rotation.y += (pointer.x - group.rotation.y) * 0.035;
          group.rotation.x += (pointer.y - group.rotation.x) * 0.035;
          renderer.render(scene, camera);
        };
        const update = () =>
          renderer.setAnimationLoop(visible && !document.hidden ? frame : null);
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          update();
        });
        observer.observe(host);
        document.addEventListener("visibilitychange", update);
        const onLost = (event: Event) => {
          event.preventDefault();
          renderer.setAnimationLoop(null);
          host.style.opacity = "0";
        };
        renderer.domElement.addEventListener("webglcontextlost", onLost);
        dispose = () => {
          renderer.setAnimationLoop(null);
          observer.disconnect();
          resize.disconnect();
          document.removeEventListener("visibilitychange", update);
          target.removeEventListener("pointermove", onPointer);
          target.removeEventListener("pointerleave", resetPointer);
          renderer.domElement.removeEventListener("webglcontextlost", onLost);
          geometry.dispose();
          wireGeometry.dispose();
          wireMaterial.dispose();
          dotMaterial.dispose();
          ringGeometry.dispose();
          ringMaterial.dispose();
          renderer.dispose();
          renderer.domElement.remove();
          host.style.removeProperty("opacity");
        };
      })
      .catch(() => {
        /* The CSS/SVG network is usable if the enhancement cannot load. */
      });
    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [enabled]);
  return <div ref={hostRef} className="hero-network" aria-hidden="true" />;
}
