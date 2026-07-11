import { productCategories, type Product } from "@/data/content";
import { sellerCategories, getAllSellerProducts, getSeller } from "@/lib/sellers";
import type { Lang, Bi } from "@/i18n/translations";

export interface MarketProduct {
  id: string;
  name: string;
  price: string;
  /** Discounted price string when a discount applies. */
  discountedPrice?: string;
  /** Discount percentage number when a discount applies. */
  discountPercent?: number;
  sellerName: string;
  sellerId?: string;
  categoryKey: string;
  category: string;
  description: string;
  image?: string;
  emoji?: string;
}

const pick = (obj: Bi, lang: Lang) => obj[lang];

/** Compute a discounted price string from a price like "₹250" and a percent. */
export function computeDiscount(
  price: string,
  discount?: string,
): { discountPercent?: number; discountedPrice?: string } {
  const pct = Number(discount);
  if (!discount || !Number.isFinite(pct) || pct <= 0) return {};
  const clamped = Math.min(pct, 100);
  const match = price.match(/[\d,.]+/);
  if (!match) return { discountPercent: clamped };
  const num = Number(match[0].replace(/,/g, ""));
  if (!Number.isFinite(num)) return { discountPercent: clamped };
  const newNum = Math.round(num * (1 - clamped / 100));
  const discountedPrice = price.replace(match[0], String(newNum));
  return { discountPercent: clamped, discountedPrice };
}

/** Combined marketplace list: seller-created products first, then seed products. */
export function getMarketProducts(lang: Lang, seedProducts: Product[] = []): MarketProduct[] {
  const sellerItems: MarketProduct[] = getAllSellerProducts().map((p) => {
    const seller = getSeller(p.sellerId);
    const cat = sellerCategories.find((c) => c.key === p.category);
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      ...computeDiscount(p.price, p.discount),
      sellerName: seller?.businessName ?? "",
      sellerId: p.sellerId,
      categoryKey: p.category,
      category: cat ? pick(cat.label, lang) : p.category,
      description: p.description,
      image: p.image,
    };
  });

  const seedItems: MarketProduct[] = seedProducts.map((p) => ({
    id: p.id,
    name: pick(p.name, lang),
    price: p.price,
    sellerName: pick(p.seller, lang),
    categoryKey: p.categoryKey,
    category: pick(p.category, lang),
    description: pick(p.desc, lang),
    image: p.image,
    emoji: p.emoji,
  }));

  return [...sellerItems, ...seedItems];
}

export function getMarketProduct(
  id: string,
  lang: Lang,
  seedProducts: Product[] = [],
): MarketProduct | undefined {
  return getMarketProducts(lang, seedProducts).find((p) => p.id === id);
}

/** Merged, de-duplicated category chips from seed + seller categories. */
export function getMarketCategories(lang: Lang): { key: string; label: string }[] {
  const map = new Map<string, string>();
  for (const c of sellerCategories) map.set(c.key, pick(c.label, lang));
  for (const c of productCategories) if (!map.has(c.key)) map.set(c.key, pick(c.label, lang));
  return Array.from(map, ([key, label]) => ({ key, label }));
}
