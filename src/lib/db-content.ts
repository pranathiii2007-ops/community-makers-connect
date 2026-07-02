import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { resolveImage } from "@/lib/content-images";
import { getMarketProducts, getMarketProduct, type MarketProduct } from "@/lib/market";
import type { BusinessIdea, Product, Story } from "@/data/content";
import type { Bi, Lang } from "@/i18n/translations";

type ImgRow = { image_key: string | null; image_url: string | null };

const emptyBi: Bi = { en: "", te: "" };

function mapIdea(r: Record<string, unknown> & ImgRow): BusinessIdea {
  return {
    id: r.id as string,
    icon: (r.icon as string) ?? "",
    image: resolveImage(r.image_key, r.image_url),
    title: (r.title as Bi) ?? emptyBi,
    tagline: (r.tagline as Bi) ?? emptyBi,
    cost: (r.cost as Bi) ?? emptyBi,
    skill: (r.skill as Bi) ?? emptyBi,
    earning: (r.earning as Bi) ?? emptyBi,
    overview: (r.overview as Bi) ?? emptyBi,
    materials: (r.materials as Bi[]) ?? [],
    steps: (r.steps as Bi[]) ?? [],
    pricing: (r.pricing as Bi) ?? emptyBi,
    marketing: (r.marketing as Bi[]) ?? [],
    expected: (r.expected as Bi) ?? emptyBi,
    challenges: (r.challenges as Bi[]) ?? [],
    tips: (r.tips as Bi[]) ?? [],
  };
}

function mapProduct(r: Record<string, unknown> & ImgRow): Product {
  return {
    id: r.id as string,
    name: (r.name as Bi) ?? emptyBi,
    seller: (r.seller as Bi) ?? emptyBi,
    price: (r.price as string) ?? "",
    category: (r.category as Bi) ?? emptyBi,
    categoryKey: (r.category_key as string) ?? "",
    emoji: (r.emoji as string) ?? "",
    image: resolveImage(r.image_key, r.image_url),
    desc: (r.description as Bi) ?? emptyBi,
  };
}

function mapStory(r: Record<string, unknown> & ImgRow): Story {
  return {
    id: r.id as string,
    name: (r.name as Bi) ?? emptyBi,
    role: (r.role as Bi) ?? emptyBi,
    emoji: (r.emoji as string) ?? "",
    image: resolveImage(r.image_key, r.image_url),
    story: (r.story as Bi) ?? emptyBi,
    testimonial: (r.testimonial as Bi) ?? emptyBi,
    growth: (r.growth as Bi) ?? emptyBi,
  };
}

export function useBusinessIdeas() {
  return useQuery({
    queryKey: ["business_ideas"],
    queryFn: async (): Promise<BusinessIdea[]> => {
      const { data, error } = await supabase
        .from("business_ideas")
        .select("*")
        .order("sort", { ascending: true });
      if (error) throw error;
      return (data ?? []).map(mapIdea);
    },
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort", { ascending: true });
      if (error) throw error;
      return (data ?? []).map(mapProduct);
    },
  });
}

export function useStories() {
  return useQuery({
    queryKey: ["success_stories"],
    queryFn: async (): Promise<Story[]> => {
      const { data, error } = await supabase
        .from("success_stories")
        .select("*")
        .order("sort", { ascending: true });
      if (error) throw error;
      return (data ?? []).map(mapStory);
    },
  });
}

/** Combined marketplace list (seller localStorage products + DB seed products). */
export function useMarketProducts(lang: Lang): { products: MarketProduct[]; isLoading: boolean } {
  const { data, isLoading } = useProducts();
  const products = useMemo(() => getMarketProducts(lang, data ?? []), [lang, data]);
  return { products, isLoading };
}

export function useMarketProduct(
  id: string,
  lang: Lang,
): { product: MarketProduct | undefined; isLoading: boolean } {
  const { data, isLoading } = useProducts();
  const product = useMemo(() => getMarketProduct(id, lang, data ?? []), [id, lang, data]);
  return { product, isLoading };
}
