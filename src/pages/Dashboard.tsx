
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/components/AuthProvider';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ContactMessages from '@/components/ContactMessages';
import SkillsManager from '@/components/SkillsManager';
import ProjectManager from '@/components/ProjectManager';
import ProjectEditor from '@/components/ProjectEditor';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { 
  LogOut, 
  FileText, 
  Folder, 
  Users, 
  Upload,
  Plus,
  BarChart3,
  MessageSquare,
  Code2
} from 'lucide-react';

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [unreadCount, setUnreadCount] = useState(0);
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [showProjectEditor, setShowProjectEditor] = useState(false);
  const [uploadingCv, setUploadingCv] = useState(false);

  const handleCvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    setUploadingCv(true);
    try {
      const fileName = `cv-${Date.now()}.pdf`;
      const { error } = await supabase.storage
        .from('cvs')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      toast({
        title: "CV Uploaded",
        description: "Your CV has been uploaded successfully.",
      });
    } catch (error: any) {
      console.error('Error uploading CV:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload CV to Supabase.",
        variant: "destructive",
      });
    } finally {
      setUploadingCv(false);
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate('/studio');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUnreadCount();
    }
  }, [user]);

  const fetchUnreadCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_unread_contact_count');
      if (error) throw error;
      setUnreadCount(data || 0);
    } catch (error) {
      console.error('Error fetching unread count:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You've been signed out successfully.",
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const handleEditProject = (projectId: string) => {
    setEditingProject(projectId);
    setShowProjectEditor(true);
  };

  const handleNewProject = () => {
    setEditingProject(null);
    setShowProjectEditor(true);
  };

  const handleProjectSaved = () => {
    setShowProjectEditor(false);
    setEditingProject(null);
    setActiveTab('projects'); // Switch back to projects list
  };

  const handleBackFromEditor = () => {
    setShowProjectEditor(false);
    setEditingProject(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Content Studio</h1>
              <p className="text-muted-foreground">Manage your portfolio content</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant={activeTab === 'overview' ? 'default' : 'outline'}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </Button>
              <Button 
                variant={activeTab === 'analytics' ? 'default' : 'outline'}
                onClick={() => setActiveTab('analytics')}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Button 
                variant={activeTab === 'projects' ? 'default' : 'outline'}
                onClick={() => setActiveTab('projects')}
              >
                <Folder className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button 
                variant={activeTab === 'skills' ? 'default' : 'outline'}
                onClick={() => setActiveTab('skills')}
              >
                <Code2 className="mr-2 h-4 w-4" />
                Skills
              </Button>
              <Button 
                variant={activeTab === 'messages' ? 'default' : 'outline'}
                onClick={() => setActiveTab('messages')}
                className="relative"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Inquiries
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Blog Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <span>Blog Posts</span>
                </CardTitle>
                <CardDescription>
                  Create and manage your blog articles with rich content editor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => navigate('/blog-management')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Blog Post
                </Button>
                <Button 
                  className="w-full" 
                  variant="ghost"
                  onClick={() => navigate('/blog-management')}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Manage Posts
                </Button>
              </CardContent>
            </Card>

            {/* Projects Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Folder className="h-5 w-5 text-green-500" />
                  <span>Projects</span>
                </CardTitle>
                <CardDescription>
                  Showcase your development projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={handleNewProject}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
                <Button 
                  className="w-full" 
                  variant="ghost"
                  onClick={() => setActiveTab('projects')}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Manage Projects
                </Button>
              </CardContent>
            </Card>

            {/* Skills Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-purple-500" />
                  <span>Technical Skills</span>
                </CardTitle>
                <CardDescription>
                  Manage your technical skills and expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => setActiveTab('skills')}
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  Manage Skills
                </Button>
                <Button 
                  className="w-full" 
                  variant="ghost"
                  onClick={() => navigate('/skills')}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Skills Page
                </Button>
              </CardContent>
            </Card>

            {/* Contact Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-orange-500" />
                  <span>Contact Inquiries</span>
                </CardTitle>
                <CardDescription>
                  Manage contact messages and inquiries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => setActiveTab('messages')}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Messages ({unreadCount} unread)
                </Button>
                <Button 
                  className="w-full" 
                  variant="ghost"
                  onClick={() => navigate('/contact')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  View Contact Page
                </Button>
              </CardContent>
            </Card>

            {/* Community Content Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-red-500" />
                  <span>Community</span>
                </CardTitle>
                <CardDescription>
                  Manage courses and tutorials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  New Content
                </Button>
                <Button className="w-full" variant="ghost">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Manage Content
                </Button>
              </CardContent>
            </Card>

            {/* File Management */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-purple-500" />
                  <span>File Management</span>
                </CardTitle>
                <CardDescription>
                  Upload CVs and manage files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <input
                  type="file"
                  id="cv-upload-input"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleCvUpload}
                />
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => document.getElementById('cv-upload-input')?.click()}
                  disabled={uploadingCv}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {uploadingCv ? 'Uploading...' : 'Upload CV'}
                </Button>
                <Button className="w-full" variant="ghost">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Manage Files
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>
                  Overview of your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-500">0</div>
                    <div className="text-sm text-muted-foreground">Blog Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">0</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{unreadCount}</div>
                    <div className="text-sm text-muted-foreground">Unread Messages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">0</div>
                    <div className="text-sm text-muted-foreground">Community Content</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : activeTab === 'analytics' ? (
          <AnalyticsDashboard />
        ) : activeTab === 'skills' ? (
          <SkillsManager />
        ) : activeTab === 'projects' ? (
          showProjectEditor ? (
            <ProjectEditor 
              projectId={editingProject}
              onBack={handleBackFromEditor}
              onSave={handleProjectSaved}
            />
          ) : (
            <ProjectManager 
              onEdit={handleEditProject}
              onNew={handleNewProject}
            />
          )
        ) : (
          <ContactMessages />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
