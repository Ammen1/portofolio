import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import RichTextEditor from './RichTextEditor';
import { 
  Save, 
  Eye,
  X,
  Plus
} from 'lucide-react';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  published: boolean;
  tags: string[];
  reading_time: number;
}

interface BlogEditorProps {
  postId?: string;
  onSave?: () => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ postId, onSave }) => {
  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featured_image_url: '',
    published: false,
    tags: [],
    reading_time: 0
  });
  const [newTag, setNewTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [activeTab, setActiveTab] = useState('write');
  const { toast } = useToast();

  useEffect(() => {
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    if (!postId) return;
    
    setIsLoadingPost(true);
    try {
      console.log('Fetching post with ID:', postId);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;
      
      console.log('Fetched post data:', data);
      const fetchedPost = {
        ...data,
        tags: data.tags || []
      };
      
      setPost(fetchedPost);
      console.log('Post state updated with content:', fetchedPost.content);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: "Error",
        description: "Failed to load blog post",
        variant: "destructive",
      });
    } finally {
      setIsLoadingPost(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    // Strip HTML tags for word count
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleContentChange = (content: string) => {
    console.log('Content changed:', content);
    setPost(prev => ({
      ...prev,
      content,
      reading_time: calculateReadingTime(content)
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async () => {
    if (!post.title.trim() || !post.content.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and content are required",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const postData = {
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt || '',
        featured_image_url: post.featured_image_url || '',
        published: post.published,
        tags: post.tags,
        reading_time: calculateReadingTime(post.content),
        updated_at: new Date().toISOString()
      };

      if (postId) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId);
        
        if (error) throw error;
        toast({
          title: "Success",
          description: "Blog post updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([{
            ...postData,
            created_at: new Date().toISOString()
          }]);
        
        if (error) throw error;
        toast({
          title: "Success",
          description: "Blog post created successfully",
        });
      }

      if (onSave) onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: `Failed to save blog post: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const addCopyButtonsToPreview = () => {
      // Only add to preview tab content
      const previewTab = document.querySelector('[data-state="active"][value="preview"]');
      if (!previewTab) return;

      const codeBlocks = previewTab.querySelectorAll('pre');
      codeBlocks.forEach((pre) => {
        // Remove existing copy button if any
        const existingButton = pre.querySelector('.preview-copy-button');
        if (existingButton) {
          existingButton.remove();
        }

        // Create new copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'preview-copy-button absolute top-3 right-3 bg-slate-700/80 hover:bg-slate-600 text-slate-200 hover:text-white px-2 py-1 rounded text-xs font-medium opacity-80 hover:opacity-100 transition-all duration-200 flex items-center gap-1 z-10';
        copyButton.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="m5 15-4-4 4-4"></path>
          </svg>
          <span>Copy</span>
        `;

        copyButton.addEventListener('click', async (e) => {
          e.preventDefault();
          e.stopPropagation();

          const codeElement = pre.querySelector('code');
          if (codeElement) {
            try {
              await navigator.clipboard.writeText(codeElement.textContent || '');
              copyButton.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
                <span>Copied!</span>
              `;
              copyButton.classList.add('bg-green-600', 'hover:bg-green-700');
              copyButton.classList.remove('bg-slate-700/80', 'hover:bg-slate-600');

              setTimeout(() => {
                copyButton.innerHTML = `
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="m5 15-4-4 4-4"></path>
                  </svg>
                  <span>Copy</span>
                `;
                copyButton.classList.remove('bg-green-600', 'hover:bg-green-700');
                copyButton.classList.add('bg-slate-700/80', 'hover:bg-slate-600');
              }, 2000);
            } catch (error) {
              console.error('Failed to copy code:', error);
            }
          }
        });

        // Ensure the pre element has relative positioning
        const preElement = pre as HTMLElement;
        preElement.style.position = 'relative';
        preElement.appendChild(copyButton);
      });
    };

    // Add copy buttons when preview tab becomes active
    const timer = setTimeout(addCopyButtonsToPreview, 100);

    // Also add on content change
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      setTimeout(addCopyButtonsToPreview, 100);
    });

    const previewContent = document.querySelector('[data-state="active"][value="preview"]');
    if (previewContent) {
      observer.observe(previewContent, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeTab, post.content]);

  if (isLoadingPost) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {postId ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Switch
              checked={post.published}
              onCheckedChange={(checked) => setPost(prev => ({ ...prev, published: checked }))}
            />
            <Label>Published</Label>
          </div>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter your blog post title..."
                  className="text-lg font-medium"
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={post.slug}
                  onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-slug"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={post.excerpt}
                  onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of your post..."
                  rows={3}
                />
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="write" className="space-y-4">
                  <RichTextEditor
                    key={postId || 'new'} // Force re-render when postId changes
                    content={post.content}
                    onChange={handleContentChange}
                    placeholder="Start writing your amazing blog post with rich formatting, code blocks, images, videos and more..."
                  />
                </TabsContent>

                <TabsContent value="preview" className="min-h-[500px] border rounded-lg p-6 bg-background">
                  <div className="prose prose-lg max-w-none dark:prose-invert 
                                 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-6
                                 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-5
                                 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:mt-4
                                 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-4
                                 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:my-1">
                    <h1>{post.title}</h1>
                    {post.excerpt && (
                      <p className="text-xl text-muted-foreground italic">{post.excerpt}</p>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="featured-image">Featured Image URL</Label>
                <Input
                  id="featured-image"
                  value={post.featured_image_url}
                  onChange={(e) => setPost(prev => ({ ...prev, featured_image_url: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label>Reading Time</Label>
                <p className="text-sm text-muted-foreground">
                  {post.reading_time} minute{post.reading_time !== 1 ? 's' : ''} read
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag..."
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button type="button" onClick={addTag} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                    <span>{tag}</span>
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-destructive" 
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="publish-toggle">Published</Label>
                <Switch
                  id="publish-toggle"
                  checked={post.published}
                  onCheckedChange={(checked) => setPost(prev => ({ ...prev, published: checked }))}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {post.published ? 'This post is live and visible to readers' : 'This post is a draft'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
