CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Business ideas
CREATE TABLE public.business_ideas (
  id TEXT PRIMARY KEY,
  sort INTEGER NOT NULL DEFAULT 0,
  icon TEXT,
  image_key TEXT,
  image_url TEXT,
  title JSONB NOT NULL DEFAULT '{}'::jsonb,
  tagline JSONB NOT NULL DEFAULT '{}'::jsonb,
  cost JSONB NOT NULL DEFAULT '{}'::jsonb,
  skill JSONB NOT NULL DEFAULT '{}'::jsonb,
  earning JSONB NOT NULL DEFAULT '{}'::jsonb,
  overview JSONB NOT NULL DEFAULT '{}'::jsonb,
  materials JSONB NOT NULL DEFAULT '[]'::jsonb,
  steps JSONB NOT NULL DEFAULT '[]'::jsonb,
  pricing JSONB NOT NULL DEFAULT '{}'::jsonb,
  marketing JSONB NOT NULL DEFAULT '[]'::jsonb,
  expected JSONB NOT NULL DEFAULT '{}'::jsonb,
  challenges JSONB NOT NULL DEFAULT '[]'::jsonb,
  tips JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.business_ideas TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.business_ideas TO authenticated;
GRANT ALL ON public.business_ideas TO service_role;
ALTER TABLE public.business_ideas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Business ideas are publicly readable" ON public.business_ideas FOR SELECT USING (true);
CREATE TRIGGER update_business_ideas_updated_at BEFORE UPDATE ON public.business_ideas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Products
CREATE TABLE public.products (
  id TEXT PRIMARY KEY,
  sort INTEGER NOT NULL DEFAULT 0,
  name JSONB NOT NULL DEFAULT '{}'::jsonb,
  seller JSONB NOT NULL DEFAULT '{}'::jsonb,
  price TEXT,
  category JSONB NOT NULL DEFAULT '{}'::jsonb,
  category_key TEXT,
  emoji TEXT,
  image_key TEXT,
  image_url TEXT,
  description JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (true);
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Success stories
CREATE TABLE public.success_stories (
  id TEXT PRIMARY KEY,
  sort INTEGER NOT NULL DEFAULT 0,
  name JSONB NOT NULL DEFAULT '{}'::jsonb,
  role JSONB NOT NULL DEFAULT '{}'::jsonb,
  emoji TEXT,
  image_key TEXT,
  image_url TEXT,
  story JSONB NOT NULL DEFAULT '{}'::jsonb,
  testimonial JSONB NOT NULL DEFAULT '{}'::jsonb,
  growth JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.success_stories TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.success_stories TO authenticated;
GRANT ALL ON public.success_stories TO service_role;
ALTER TABLE public.success_stories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Success stories are publicly readable" ON public.success_stories FOR SELECT USING (true);
CREATE TRIGGER update_success_stories_updated_at BEFORE UPDATE ON public.success_stories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();