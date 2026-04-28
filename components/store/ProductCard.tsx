import Link from 'next/link';
import { Product } from '@/lib/types';
import { Tag } from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  if (featured) {
    return (
      <Link
        href={`/store/${product.slug}`}
        className="block rounded-2xl border border-[#d4a843]/20 bg-gradient-to-br from-[#181440] to-[#201c48]/30 p-5 group hover:border-[#d4a843]/40 transition-all duration-200"
      >
        {/* Image placeholder */}
        <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#201c48] to-[#100d28] flex items-center justify-center mb-4 border border-[#3c3070]/30 overflow-hidden">
          <div className="text-center p-4">
            <div className="text-5xl mb-2 opacity-60">
              {product.category === 'Sound & Vibration' ? '🔔' :
               product.category === 'Movement & Practice' ? '🌿' :
               product.category === 'Meditation' ? '◎' :
               product.category === 'Ritual & Altar' ? '✦' :
               product.category === 'Books & Learning' ? '📚' :
               product.category === 'Rest & Nervous System' ? '🌙' : '⬡'}
            </div>
            <p className="text-xs text-[#9080c0]">
              {/* TODO: Replace with real product image from /public/products/ */}
              Image placeholder
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Tag>{product.category}</Tag>
          <h3 className="text-sm font-semibold text-[#ede8f8] group-hover:text-[#d4a843] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-[#9080c0] leading-relaxed line-clamp-2">{product.description}</p>
          <p className="text-xs text-[#8aaa74] flex items-center gap-1">
            <span>◈</span> {product.origin}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-base font-bold text-gradient-gold">${product.price}</span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-[#201c48]/60 text-[#c8b8f0]">
              View →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/store/${product.slug}`}
      className="block rounded-2xl border border-[#3c3070]/80 bg-[#181440]/40 p-4 group hover:bg-[#181440] hover:border-[#3c3070] transition-all duration-200"
    >
      {/* Image placeholder */}
      <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#201c48]/60 to-[#100d28]/60 flex items-center justify-center mb-4 border border-[#3c3070]/20">
        <div className="text-4xl opacity-50">
          {product.category === 'Sound & Vibration' ? '🔔' :
           product.category === 'Movement & Practice' ? '🌿' :
           product.category === 'Meditation' ? '◎' :
           product.category === 'Ritual & Altar' ? '✦' :
           product.category === 'Books & Learning' ? '📚' :
           product.category === 'Rest & Nervous System' ? '🌙' :
           product.category === 'Home & Sacred Space' ? '⬡' : '◈'}
        </div>
      </div>

      <div>
        <p className="text-xs text-[#9080c0] mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-[#ede8f8] group-hover:text-[#d4a843] transition-colors leading-snug mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-[#9080c0] mb-2 line-clamp-2">{product.description}</p>
        <p className="text-xs text-[#8aaa74] mb-3 line-clamp-1">from {product.origin}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-gradient-gold">${product.price}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="In stock" />
        </div>
        <p className="text-xs text-[#9080c0] mt-2 leading-relaxed line-clamp-2">
          ◈ {product.communityImpactNote}
        </p>
      </div>
    </Link>
  );
}
