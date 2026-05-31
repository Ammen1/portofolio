
import { supabase } from '@/integrations/supabase/client';

export interface PageView {
  id: string;
  page_path: string;
  user_agent: string | null;
  referrer: string | null;
  ip_address: string | null;
  created_at: string;
}

export interface PageViewsByDate {
  date: string;
  views: number;
}

export const trackPageView = async (pagePath: string) => {
  try {
    const { error } = await supabase
      .from('page_views')
      .insert([{
        page_path: pagePath,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
        ip_address: null // We'll let the database handle this
      }]);

    if (error) {
      console.error('Error tracking page view:', error);
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const getPageViewStats = async (): Promise<PageView[]> => {
  try {
    const { data, error } = await supabase
      .from('page_views')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching page view stats:', error);
    return [];
  }
};

export const getPageViewCount = async (): Promise<number> => {
  try {
    const { count, error } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return count || 0;
  } catch (error) {
    console.error('Error fetching page view count:', error);
    return 0;
  }
};

export const getUniqueVisitorsCount = async (): Promise<number> => {
  try {
    const { data, error } = await supabase
      .rpc('get_unique_visitors_count');

    if (error) throw error;
    return data || 0;
  } catch (error) {
    console.error('Error fetching unique visitors count:', error);
    return 0;
  }
};

export const getPageViewsByDate = async (days = 30): Promise<PageViewsByDate[]> => {
  try {
    const { data, error } = await supabase
      .rpc('get_page_views_by_date', { days_back: days });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching page views by date:', error);
    return [];
  }
};
