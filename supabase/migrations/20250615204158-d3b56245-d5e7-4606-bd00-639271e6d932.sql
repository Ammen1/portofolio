
-- Create page_views table for analytics
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add index for better query performance
CREATE INDEX idx_page_views_created_at ON public.page_views(created_at);
CREATE INDEX idx_page_views_page_path ON public.page_views(page_path);

-- Function to get unique visitors count (based on user_agent as a simple proxy)
CREATE OR REPLACE FUNCTION public.get_unique_visitors_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN (SELECT COUNT(DISTINCT user_agent) FROM public.page_views WHERE user_agent IS NOT NULL);
END;
$$;

-- Function to get page views by date
CREATE OR REPLACE FUNCTION public.get_page_views_by_date(days_back integer DEFAULT 30)
RETURNS TABLE(date date, views bigint)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    DATE(created_at) as date,
    COUNT(*) as views
  FROM public.page_views 
  WHERE created_at >= NOW() - INTERVAL '1 day' * days_back
  GROUP BY DATE(created_at)
  ORDER BY date;
END;
$$;
