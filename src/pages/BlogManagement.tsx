
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import BlogEditor from '@/components/BlogEditor';
import BlogManager from '@/components/BlogManager';

const BlogManagement = () => {
  const [currentView, setCurrentView] = useState<'list' | 'edit' | 'new'>('list');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEdit = (postId: string) => {
    setEditingPostId(postId);
    setCurrentView('edit');
  };

  const handleNew = () => {
    setEditingPostId(null);
    setCurrentView('new');
  };

  const handleSave = () => {
    setCurrentView('list');
    setEditingPostId(null);
  };

  const handleBack = () => {
    if (currentView === 'list') {
      navigate('/dashboard');
    } else {
      setCurrentView('list');
      setEditingPostId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {currentView === 'list' ? 'Back to Dashboard' : 'Back to Posts'}
            </Button>
            <h1 className="text-2xl font-bold">
              {currentView === 'list' ? 'Blog Management' : 
               currentView === 'edit' ? 'Edit Post' : 'New Post'}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {currentView === 'list' && (
          <BlogManager onEdit={handleEdit} onNew={handleNew} />
        )}
        {(currentView === 'edit' || currentView === 'new') && (
          <BlogEditor 
            postId={editingPostId || undefined} 
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
