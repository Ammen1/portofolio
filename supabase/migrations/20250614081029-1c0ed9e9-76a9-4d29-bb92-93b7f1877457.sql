
-- Create the skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Code2',
  color_class TEXT NOT NULL DEFAULT 'from-blue-500 to-blue-600',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add some sample data to get started
INSERT INTO public.skills (name, category, icon_name, color_class) VALUES
  ('Node.js', 'Backend Frameworks', 'Server', 'from-blue-500 to-blue-600'),
  ('Express.js', 'Backend Frameworks', 'Server', 'from-blue-500 to-blue-600'),
  ('Django', 'Backend Frameworks', 'Server', 'from-blue-500 to-blue-600'),
  ('FastAPI', 'Backend Frameworks', 'Server', 'from-blue-500 to-blue-600'),
  ('PostgreSQL', 'Databases', 'Database', 'from-green-500 to-green-600'),
  ('MongoDB', 'Databases', 'Database', 'from-green-500 to-green-600'),
  ('Redis', 'Databases', 'Database', 'from-green-500 to-green-600'),
  ('AWS', 'Cloud & DevOps', 'Cloud', 'from-purple-500 to-purple-600'),
  ('Docker', 'Cloud & DevOps', 'Cloud', 'from-purple-500 to-purple-600'),
  ('Kubernetes', 'Cloud & DevOps', 'Cloud', 'from-purple-500 to-purple-600'),
  ('JavaScript', 'Programming Languages', 'Code2', 'from-orange-500 to-orange-600'),
  ('Python', 'Programming Languages', 'Code2', 'from-orange-500 to-orange-600'),
  ('TypeScript', 'Programming Languages', 'Code2', 'from-orange-500 to-orange-600'),
  ('Git', 'Tools & Workflows', 'GitBranch', 'from-cyan-500 to-cyan-600'),
  ('GitHub Actions', 'Tools & Workflows', 'GitBranch', 'from-cyan-500 to-cyan-600'),
  ('REST APIs', 'Security & API', 'Shield', 'from-red-500 to-red-600'),
  ('GraphQL', 'Security & API', 'Shield', 'from-red-500 to-red-600'),
  ('JWT', 'Security & API', 'Shield', 'from-red-500 to-red-600');
