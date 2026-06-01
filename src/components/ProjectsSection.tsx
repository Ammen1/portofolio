
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Building2, Star, Lock } from 'lucide-react';
import { staticProjects } from '@/data/projects';

const categoryColors: Record<string, string> = {
  "Fintech": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "National Payment": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Banking": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "Enterprise": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "Streaming": "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  "Personal Project": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
};

const ProjectsSection = () => {
  const featured = staticProjects.filter(p => p.is_featured);
  const others = staticProjects.filter(p => !p.is_featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm mb-4 md:mb-6">
            <Star className="h-3 w-3 md:h-4 md:w-4 text-primary fill-primary" />
            <span className="text-muted-foreground font-medium">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Projects & <span className="gradient-text">Fintech Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade financial platforms, digital payment systems, and scalable applications
            serving thousands of users across Ethiopia.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {featured.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ring-1 ring-primary/10 bg-gradient-to-br from-card to-primary/5 hover:-translate-y-1"
            >
              {/* Featured glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <CardHeader className="pb-3 md:pb-4">
                <div className="flex flex-wrap gap-2 items-start justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                    <Badge variant="outline" className={`text-xs ${categoryColors[project.category] || ''}`}>
                      {project.category}
                    </Badge>
                  </div>
                  {!project.github_url && (
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      <span>Enterprise</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-3 md:pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.longDescription}
                </p>
                {project.impact && (
                  <div className="bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-4">
                    <p className="text-xs text-primary font-semibold">💡 {project.impact}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <Badge variant="outline" className="text-xs">+{project.tech_stack.length - 4}</Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-3 md:pt-4 border-t">
                <div className="flex flex-wrap gap-2 w-full">
                  {project.github_url && (
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {project.live_url && (
                    <Button size="sm" className="flex-1 text-xs" asChild>
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" /> Website
                      </a>
                    </Button>
                  )}
                  {project.play_store_url && (
                    <Button size="sm" variant={project.live_url ? "outline" : "default"} className="flex-1 text-xs" asChild>
                      <a href={project.play_store_url} target="_blank" rel="noopener noreferrer">
                        <Smartphone className="h-3 w-3 mr-1" /> Get App
                      </a>
                    </Button>
                  )}
                  {!project.live_url && !project.play_store_url && !project.github_url && (
                    <span className="text-xs text-muted-foreground flex items-center space-x-1">
                      <Lock className="h-3 w-3" />
                      <span>Private / Enterprise Project</span>
                    </span>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {others.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap gap-2 items-start justify-between mb-3">
                  <Badge variant="outline" className={`text-xs ${categoryColors[project.category] || ''}`}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                {project.impact && (
                  <div className="bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 mb-3">
                    <p className="text-xs text-primary font-semibold">💡 {project.impact}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <Badge variant="outline" className="text-xs">+{project.tech_stack.length - 4}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-3 border-t">
                <div className="flex flex-wrap gap-2 w-full">
                  {project.github_url && (
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {!project.github_url && (
                    <span className="text-xs text-muted-foreground flex items-center space-x-1">
                      <Lock className="h-3 w-3" />
                      <span>Private Project</span>
                    </span>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Private projects callout */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 border border-border rounded-3xl p-5 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 gap-4 sm:gap-0">
            <div className="p-3 bg-muted rounded-xl flex-shrink-0 w-fit">
              <Building2 className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">Additional Private Enterprise Projects</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Also worked on multiple confidential enterprise and fintech systems under NDA:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Payment Processing", "Banking Integrations", "Wallet Systems", "Merchant Platforms",
                  "Financial Dashboards", "Transaction Monitoring", "API Gateway Services", "High-Volume Distributed Systems"
                ].map((item) => (
                  <Badge key={item} variant="secondary" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 md:px-8 text-sm md:text-base"
            onClick={() => window.open('https://github.com/Ammen1', '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
