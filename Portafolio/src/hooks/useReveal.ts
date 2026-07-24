import { useEffect, useRef } from 'react';

/**
 * Hook de animación "reveal" al hacer scroll.
 *
 * - `stagger = false`: aplica la clase `.reveal` al elemento referenciado.
 * - `stagger = true`: aplica `.reveal-stagger` al contenedor; cada hijo directo
 *   se anima en cascada usando la variable `--stagger-index` (ponla inline).
 *
 * Respeta `prefers-reduced-motion` (muestra el contenido sin animar).
 */
export function useReveal<T extends HTMLElement = HTMLElement>(stagger = false) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(stagger ? 'reveal-stagger' : 'reveal');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal--visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
