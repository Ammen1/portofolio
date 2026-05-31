
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Save, X, Server, Database, Cloud, Code2, GitBranch, Shield, Upload } from 'lucide-react';

interface BulkSkillsFormProps {
  onSkillsAdded: () => void;
  onCancel: () => void;
}

const BulkSkillsForm = ({ onSkillsAdded, onCancel }: BulkSkillsFormProps) => {
  const [skillsText, setSkillsText] = useState('');
  const [category, setCategory] = useState('');
  const [iconName, setIconName] = useState('Code2');
  const [colorClass, setColorClass] = useState('from-blue-500 to-blue-600');
  const [loading, setLoading] = useState(false);
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

  const handleBulkAdd = async () => {
    if (!skillsText.trim() || !category) {
      toast({
        title: "Error",
        description: "Please enter skills and select a category",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Parse skills from textarea (one skill per line, comma-separated, or space-separated)
      const skillNames = skillsText
        .split(/[\n,]/)
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

      if (skillNames.length === 0) {
        toast({
          title: "Error",
          description: "No valid skills found",
          variant: "destructive",
        });
        return;
      }

      // Create skill objects
      const skillsToAdd = skillNames.map(name => ({
        name,
        category,
        icon_name: iconName,
        color_class: colorClass
      }));

      // Insert all skills at once
      const { error } = await supabase
        .from('skills')
        .insert(skillsToAdd);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Added ${skillNames.length} skills successfully`,
      });

      // Reset form
      setSkillsText('');
      setCategory('');
      setIconName('Code2');
      setColorClass('from-blue-500 to-blue-600');
      
      onSkillsAdded();
    } catch (error) {
      console.error('Error adding skills:', error);
      toast({
        title: "Error",
        description: "Failed to add skills",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Upload className="h-5 w-5 mr-2" />
          Bulk Add Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="skills-text">Skills (one per line or comma-separated)</Label>
          <Textarea
            id="skills-text"
            value={skillsText}
            onChange={(e) => setSkillsText(e.target.value)}
            placeholder="React&#10;Node.js&#10;TypeScript&#10;PostgreSQL"
            rows={6}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Enter skills separated by new lines or commas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="bulk-category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Frontend Frameworks">Frontend Frameworks</SelectItem>
                <SelectItem value="Backend Frameworks">Backend Frameworks</SelectItem>
                <SelectItem value="Databases">Databases</SelectItem>
                <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                <SelectItem value="Programming Languages">Programming Languages</SelectItem>
                <SelectItem value="Tools & Workflows">Tools & Workflows</SelectItem>
                <SelectItem value="Security & API">Security & API</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bulk-icon">Icon</Label>
            <Select value={iconName} onValueChange={setIconName}>
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
            <Label htmlFor="bulk-color">Color</Label>
            <Select value={colorClass} onValueChange={setColorClass}>
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
          <Button onClick={handleBulkAdd} disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Adding Skills...' : 'Add Skills'}
          </Button>
          <Button variant="outline" onClick={onCancel}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BulkSkillsForm;
