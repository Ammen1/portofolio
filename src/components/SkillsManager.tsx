import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Trash2, Save, X, Server, Database, Cloud, Code2, GitBranch, Shield, Upload } from 'lucide-react';
import BulkSkillsForm from './BulkSkillsForm';

interface Skill {
  id: string;
  name: string;
  category: string;
  icon_name: string;
  color_class: string;
  created_at: string;
}

const SkillsManager = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isBulkAdding, setIsBulkAdding] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: '',
    icon_name: 'Code2',
    color_class: 'from-blue-500 to-blue-600'
  });
  const { toast } = useToast();

  const iconOptions = [
    { value: 'Server', label: 'Server', icon: Server },
    { value: 'Database', label: 'Database', icon: Database },
    { value: 'Cloud', label: 'Cloud', icon: Cloud },
    { value: 'Code2', label: 'Code', icon: Code2 },
    { value: 'GitBranch', label: 'Git Branch', icon: GitBranch },
    { value: 'Shield', label: 'Shield', icon: Shield }
  ];

  const colorOptions = [
    { value: 'from-blue-500 to-blue-600', label: 'Blue', preview: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { value: 'from-green-500 to-green-600', label: 'Green', preview: 'bg-gradient-to-r from-green-500 to-green-600' },
    { value: 'from-purple-500 to-purple-600', label: 'Purple', preview: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { value: 'from-orange-500 to-orange-600', label: 'Orange', preview: 'bg-gradient-to-r from-orange-500 to-orange-600' },
    { value: 'from-cyan-500 to-cyan-600', label: 'Cyan', preview: 'bg-gradient-to-r from-cyan-500 to-cyan-600' },
    { value: 'from-red-500 to-red-600', label: 'Red', preview: 'bg-gradient-to-r from-red-500 to-red-600' }
  ];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true });

      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast({
        title: "Error",
        description: "Failed to fetch skills",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkill = async () => {
    if (!newSkill.name || !newSkill.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('skills')
        .insert([newSkill])
        .select()
        .single();

      if (error) throw error;

      setSkills([...skills, data]);
      setNewSkill({ name: '', category: '', icon_name: 'Code2', color_class: 'from-blue-500 to-blue-600' });
      setIsAdding(false);
      
      toast({
        title: "Success",
        description: "Skill added successfully",
      });
    } catch (error) {
      console.error('Error adding skill:', error);
      toast({
        title: "Error",
        description: "Failed to add skill",
        variant: "destructive",
      });
    }
  };

  const handleDeleteSkill = async (id: string) => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSkills(skills.filter(skill => skill.id !== id));
      
      toast({
        title: "Success",
        description: "Skill deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting skill:', error);
      toast({
        title: "Error",
        description: "Failed to delete skill",
        variant: "destructive",
      });
    }
  };

  const handleBulkSkillsAdded = () => {
    setIsBulkAdding(false);
    fetchSkills(); // Refresh the skills list
  };

  const renderIcon = (iconName: string) => {
    const iconOption = iconOptions.find(opt => opt.value === iconName);
    if (iconOption) {
      const IconComponent = iconOption.icon;
      return <IconComponent className="h-4 w-4 text-white" />;
    }
    return <Code2 className="h-4 w-4 text-white" />;
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Skills Management</CardTitle>
          <CardDescription>Loading skills...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Skills Management
          <div className="flex space-x-2">
            <Button 
              onClick={() => setIsBulkAdding(true)} 
              disabled={isAdding || isBulkAdding}
              variant="outline"
            >
              <Upload className="h-4 w-4 mr-2" />
              Bulk Add
            </Button>
            <Button onClick={() => setIsAdding(true)} disabled={isAdding || isBulkAdding}>
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          Manage your technical skills that appear on the skills section
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Bulk Add Skills Form */}
        {isBulkAdding && (
          <BulkSkillsForm 
            onSkillsAdded={handleBulkSkillsAdded}
            onCancel={() => setIsBulkAdding(false)}
          />
        )}

        {/* Add New Skill Form */}
        {isAdding && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Add New Skill</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="skill-name">Skill Name</Label>
                  <Input
                    id="skill-name"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                    placeholder="e.g., React, Node.js"
                  />
                </div>
                <div>
                  <Label htmlFor="skill-category">Category</Label>
                  <Input
                    id="skill-category"
                    value={newSkill.category}
                    onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                    placeholder="e.g., Frontend Frameworks"
                  />
                </div>
                <div>
                  <Label htmlFor="skill-icon">Icon</Label>
                  <Select value={newSkill.icon_name} onValueChange={(value) => setNewSkill({ ...newSkill, icon_name: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center space-x-2">
                            <option.icon className="h-4 w-4" />
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="skill-color">Color</Label>
                  <Select value={newSkill.color_class} onValueChange={(value) => setNewSkill({ ...newSkill, color_class: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded ${option.preview}`}></div>
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddSkill}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Skill
                </Button>
                <Button variant="outline" onClick={() => setIsAdding(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Skills List */}
        <div className="space-y-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-3 text-primary">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color_class}`}>
                        {renderIcon(skill.icon_name)}
                      </div>
                      <Badge variant="secondary">{skill.name}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteSkill(skill.id)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {skills.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No skills added yet. Add your first skill to get started!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsManager;
