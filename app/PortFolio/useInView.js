"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Hook de détection de visibilité au viewport (IntersectionObserver).
 *
 * Renvoie `[inView, ref]` :
 *  - `inView` : true dès que l'élément est (ou est proche d'être) dans le viewport.
 *  - `ref` : à brancher sur le conteneur à observer.
 *
 * `rootMargin` étend le "viewport" (précharge un peu avant l'arrivée de l'élément
 * et le garde visible un peu après sa sortie, pour éviter le clignotement).
 */
export default function useInView({ threshold = 0, rootMargin = "150px 0px" }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold, rootMargin });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [inView, ref];
}
