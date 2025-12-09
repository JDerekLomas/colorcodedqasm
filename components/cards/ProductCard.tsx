import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.href} className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{product.designer}</p>
        <h3 className="text-lg font-medium">{product.title}</h3>
        <p className="text-lg font-semibold">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
