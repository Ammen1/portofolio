
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  getPageViewCount, 
  getUniqueVisitorsCount, 
  getPageViewsByDate,
  getPageViewStats,
  PageView,
  PageViewsByDate
} from '@/services/analytics';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Eye, Users, TrendingUp, Calendar } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [totalViews, setTotalViews] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [chartData, setChartData] = useState<PageViewsByDate[]>([]);
  const [recentViews, setRecentViews] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      
      const [views, visitors, chartDataResult, recentData] = await Promise.all([
        getPageViewCount(),
        getUniqueVisitorsCount(),
        getPageViewsByDate(7), // Last 7 days
        getPageViewStats()
      ]);

      setTotalViews(views);
      setUniqueVisitors(visitors);
      setChartData(chartDataResult);
      setRecentViews(recentData.slice(0, 10)); // Last 10 views
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Page Views",
      value: totalViews.toLocaleString(),
      icon: Eye,
      color: "text-blue-500"
    },
    {
      title: "Unique Visitors",
      value: uniqueVisitors.toLocaleString(),
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "This Week",
      value: chartData.reduce((sum, day) => sum + (day.views || 0), 0).toLocaleString(),
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Today",
      value: chartData[chartData.length - 1]?.views || 0,
      icon: Calendar,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Site Analytics</h2>
        <Badge variant="secondary">Last 30 days</Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Page Views (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  formatter={(value) => [value, 'Views']}
                />
                <Bar dataKey="views" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Page Views */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Page Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentViews.map((view, index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded hover:bg-accent">
                <div>
                  <p className="font-medium">{view.page_path}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(view.created_at).toLocaleString()}
                  </p>
                </div>
                <Badge variant="outline">
                  {view.user_agent?.includes('Mobile') ? 'Mobile' : 'Desktop'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
