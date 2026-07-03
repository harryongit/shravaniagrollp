-- SHRAVANI AGROPRODUCTS PostgreSQL Schema (Supabase)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ROLES are handled by Supabase Auth (auth.users), we link to it

CREATE TYPE user_role AS ENUM (
  'guest', 'customer', 'farmer', 'dealer', 'distributor', 
  'warehouse_staff', 'delivery_staff', 'sales_executive', 
  'support_executive', 'content_manager', 'inventory_manager', 
  'accounts_manager', 'marketing_manager', 'admin', 'super_admin'
);

-- Users Extension Table
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE,
  role user_role DEFAULT 'customer'::user_role,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID REFERENCES public.categories(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon_url TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Brands
CREATE TABLE public.brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES public.categories(id),
  brand_id UUID REFERENCES public.brands(id),
  description TEXT,
  specifications JSONB,
  mrp DECIMAL(10, 2) NOT NULL,
  offer_price DECIMAL(10, 2),
  gst_rate DECIMAL(5, 2) DEFAULT 0,
  status TEXT DEFAULT 'draft',
  seo_meta JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Variants
CREATE TABLE public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  sku TEXT UNIQUE NOT NULL,
  attributes JSONB, -- e.g. {"weight": "1kg"}
  price_delta DECIMAL(10, 2) DEFAULT 0,
  stock_override INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product Media
CREATE TABLE public.product_media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  type TEXT DEFAULT 'image', -- image, video, 360, pdf
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_media ENABLE ROW LEVEL SECURITY;

-- Allow public read access to catalog
CREATE POLICY "Public read access to categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public read access to brands" ON public.brands FOR SELECT USING (true);
CREATE POLICY "Public read access to products" ON public.products FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access to product_variants" ON public.product_variants FOR SELECT USING (true);
CREATE POLICY "Public read access to product_media" ON public.product_media FOR SELECT USING (true);

-- Allow admins full access
-- (assuming an admin function `is_admin()` exists or using auth.jwt() claims)
