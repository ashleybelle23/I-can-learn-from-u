import { mockProducts, mockProductCategories } from "@/lib/mock/products";
import { ProductCard } from "@/components/store/ProductCard";
import { GivebackSection } from "@/components/store/GivebackSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Store — I Can Learn From You",
  description: "Curated spiritual, wellness, and philosophical items from cultures worldwide.",
};

export default function StorePage() {
  const featured = mockProducts.filter((p) => p.featured);
  const all = mockProducts;

  return (
    <div className="bg-[transparent] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#ffffff]/60 bg-[#fff8f0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            eyebrow="Store"
            title="Objects that carry wisdom"
            titleGradient="gold"
            description="We curate spiritual, wellness, and philosophical items from cultures worldwide — chosen for quality, story, and care. Every purchase supports source communities."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Featured */}
        {featured.length > 0 && (
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
              Staff picks
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} featured />
              ))}
            </div>
          </div>
        )}

        {/* All products */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#231890] mb-6">
            All products
          </p>
          {/* TODO: Add category filter client component */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {all.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Giveback section */}
        <GivebackSection />
      </div>
    </div>
  );
}
