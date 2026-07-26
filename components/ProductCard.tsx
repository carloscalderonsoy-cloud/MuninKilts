"use client";

import RuneSeal from "./RuneSeal";
import { useReveal } from "@/lib/useReveal";
import type { Product } from "@/data/products";

export default function ProductCard({ product, delayMs = 0 }: { product: Product; delayMs?: number }) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`product-card reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="product-card__photo">
        <span className="product-card__sku">{product.sku}</span>

        {product.photo ? (
          <>
            <img
              src={product.photo.src}
              alt={product.photo.alt}
              style={{ objectPosition: product.photo.position }}
            />
            {product.annotations?.map((a) => (
              <div
                key={a.title}
                className="product-card__annotation"
                style={{ top: a.top, left: a.left }}
              >
                <div className="title">{a.title}</div>
                <div className="sub">{a.sub}</div>
              </div>
            ))}
          </>
        ) : (
          <div className="product-card__placeholder">
            <RuneSeal size={96} opacity={0.12} />
          </div>
        )}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__material">{product.material}</p>
        {product.agotado ? (
          <span className="product-card__agotado">{product.agotado}</span>
        ) : (
          <span className="product-card__price">{product.price}</span>
        )}
      </div>
    </article>
  );
}
