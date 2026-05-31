
import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import SkillsSection from '@/components/SkillsSection';

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Technical Skills</h1>
            </div>
            <div className="w-16" />
          </div>
        </div>
      </div>

      {/* Skills Content */}
      <div className="pt-8">
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;
