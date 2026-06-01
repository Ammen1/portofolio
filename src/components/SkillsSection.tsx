
import { Server, Database, Cloud, Code2, GitBranch, Shield, Cpu, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Go", "Rust", "TypeScript", "JavaScript", "Python", "Dart"],
      color: "from-violet-500 to-purple-600",
      description: "Polyglot engineer with systems-level to high-level expertise"
    },
    {
      icon: Server,
      title: "Backend & Infrastructure",
      skills: [
        "Node.js", "Express.js", "NestJS", "Django (Python)",
        "REST API Design", "Microservices Architecture",
        "Clean Architecture", "Event-Driven Systems",
        "Saga Pattern", "API Gateway Design",
        "JWT Authentication", "RBAC Authorization",
        "Payment System Architecture", "Financial Transaction Processing"
      ],
      color: "from-blue-500 to-blue-600",
      description: "Building resilient, distributed financial backends"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "from-green-500 to-emerald-600",
      description: "Optimizing data access for high-throughput systems"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines"],
      color: "from-cyan-500 to-sky-600",
      description: "Deploying scalable cloud-native applications"
    },
    {
      icon: GitBranch,
      title: "Tools & Technologies",
      skills: ["Git", "Swagger / OpenAPI", "Prisma ORM", "Payment Gateway Integration", "Telegram Bot Development"],
      color: "from-orange-500 to-amber-600",
      description: "Developer tooling and integration expertise"
    },
    {
      icon: Shield,
      title: "Architecture Patterns",
      skills: [
        "Distributed Systems Design",
        "Saga-Based Transactions",
        "Event Sourcing",
        "CQRS",
        "Domain-Driven Design",
        "Fault Tolerance & Rollback",
      ],
      color: "from-red-500 to-rose-600",
      description: "Designing resilient, production-grade systems"
    }
  ];

  const featuredSkills = [
    { label: "Go", level: 90 },
    { label: "Rust", level: 85 },
    { label: "TypeScript", level: 95 },
    { label: "Node.js", level: 95 },
    { label: "PostgreSQL", level: 88 },
    { label: "Docker", level: 85 },
    { label: "Microservices", level: 90 },
    { label: "Distributed Systems", level: 92 },
  ];


  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A battle-tested toolkit for building modern, scalable distributed systems and fintech platforms
          </p>
        </div>

        {/* Proficiency bars */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="font-bold text-lg text-foreground mb-6 flex items-center space-x-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Core Proficiencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredSkills.map((skill, i) => (
              <div key={i}>
                <div className="mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default font-mono text-xs hover:scale-105 hover:shadow-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Relevant Experience Callout */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 border border-primary/20 rounded-3xl p-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-3">Distributed Systems Expertise</h3>
              <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Saga Pattern Implementation:</span> Implemented Saga-based transaction workflows in the Ethiopay project to ensure reliable distributed transaction coordination across multiple financial services and integrations.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Fault Tolerance:</span> Designed resilient backend services with rollback and compensation mechanisms for payment consistency and fault tolerance across high-volume distributed systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
