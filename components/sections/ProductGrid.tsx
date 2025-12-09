import { ProductCard } from "@/components/cards/ProductCard";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold mb-8 lowercase">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
