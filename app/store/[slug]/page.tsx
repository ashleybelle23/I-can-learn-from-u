import { notFound } from "next/navigation";
import Link from "next/link";
import { mockProducts } from "@/lib/mock/products";
import { ProductCard } from "@/components/store/ProductCard";
import { Tag } from "@/components/ui/Badge";

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — I Can Learn From You Store`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = mockProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const fallbackRelated = mockProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3 - related.length);

  const relatedProducts = [...related, ...fallbackRelated].slice(0, 3);

  return (
    <div className="bg-[transparent] min-h-screen">
      {/* Back nav */}
      <div className="border-b border-[#ffffff]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/store"
            className="inline-flex items-center gap-2 text-sm text-[#ffd8b8] hover:text-[#fff0dc] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Store
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          {/* Image */}
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#fff0e8] to-[transparent] border border-[#ffffff]/30 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-4 opacity-40">
                {product.category === "Sound & Vibration" ? "🔔" :
                 product.category === "Movement & Practice" ? "🌿" :
                 product.category === "Meditation" ? "◎" :
                 product.category === "Ritual & Altar" ? "✦" :
                 product.category === "Books & Learning" ? "📚" :
                 product.category === "Rest & Nervous System" ? "🌙" :
                 product.category === "Home & Sacred Space" ? "⬡" : "◈"}
              </div>
              {/* TODO: Replace with actual product image using Next.js Image component */}
              <p className="text-sm text-[#ffd8b8] italic">Product image placeholder</p>
              <p className="text-xs text-[#ffd8b8] mt-1">Place image in /public/products/{product.slug}.jpg</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-[#ffd8b8] mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-[#ffffff] leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-gradient-gold mb-4">${product.price}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {product.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <p className="text-[#231890] leading-relaxed">{product.description}</p>

            {/* Origin */}
            <div className="p-5 rounded-xl border border-[#ffffff]/60 bg-[#fff8f0]/40">
              <p className="text-xs font-semibold text-[#fff0dc] mb-1 flex items-center gap-1">
                <span>◈</span> Origin
              </p>
              <p className="text-sm text-[#231890]">{product.origin}</p>
            </div>

            {/* Cultural context */}
            <div className="p-5 rounded-xl border border-[#ffffff]/60 bg-[#fff8f0]/40">
              <p className="text-xs font-semibold text-[#fff0dc] mb-2">Cultural context</p>
              <p className="text-sm text-[#231890] leading-relaxed">{product.culturalContext}</p>
            </div>

            {/* Community impact */}
            <div className="p-5 rounded-xl border border-[#231890]/20 bg-[#231890]/5">
              <p className="text-xs font-semibold text-[#231890] mb-2 flex items-center gap-1">
                <span>✦</span> Community impact
              </p>
              <p className="text-sm text-[#fff0dc] leading-relaxed">{product.communityImpactNote}</p>
              <p className="text-xs text-[#ffd8b8] mt-2">
                A portion of this purchase supports source communities.{" "}
                <Link href="/store#giveback" className="text-[#231890] hover:underline">
                  Learn more
                </Link>
              </p>
            </div>

            {/* Add to cart */}
            <div className="space-y-3">
              <button
                className="w-full py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-[#231890] to-[#231890] text-[transparent] hover:opacity-90 transition-opacity"
                // TODO: Connect to checkout/cart system (Stripe, Shopify, etc.)
              >
                Add to cart — ${product.price}
              </button>
              <p className="text-center text-xs text-[#ffd8b8]">
                {product.inStock ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    In stock · ships in 5–10 business days
                  </span>
                ) : (
                  "Currently out of stock"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
              You might also find meaning in
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
