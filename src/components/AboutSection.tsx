
import { Users, Shield, Globe, ArrowRight, Sparkles, Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, Database, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "Distributed Systems & Fintech",
      description: "Architecting Saga-based transaction workflows, payment processing systems, and distributed financial platforms handling billions of ETB in transactions."
    },
    {
      icon: Shield,
      title: "Security-First Engineering",
      description: "Building secure fintech applications with JWT, RBAC, robust API middleware, and best-in-class security practices for banking and payment platforms."
    },
    {
      icon: Database,
      title: "Database & Performance",
      description: "Optimizing PostgreSQL & MongoDB pipelines with sub-100ms response times through advanced indexing, caching strategies (Redis), and query optimization."
    },
    {
      icon: Globe,
      title: "Cloud-Native & DevOps",
      description: "Deploying containerized microservices with Docker & Kubernetes, and automating CI/CD pipelines using GitHub Actions for reliable production releases."
    }
  ];

  const experience = [
    {
      role: "Back End Engineer",
      company: "EagleLion System Technologies",
      location: "Addis Ababa, Ethiopia (On-site)",
      period: "October 2024 – Present",
      current: true,
      highlights: [
        "Design, develop, and maintain highly scalable, performant backend systems using Node.js, Go, Rust, and Microservices.",
        "Collaborate with cross-functional teams to deliver seamless user experiences.",
        "Work with event-driven architectures utilizing Apache Kafka for scalable message handling.",
      ]
    },
    {
      role: "Full-stack Developer",
      company: "Innovation Incubation Center, Jimma University (JU-IIC)",
      location: "Jimma, Oromia Region, Ethiopia (On-site)",
      period: "September 2023 – June 2024",
      current: false,
      highlights: [
        "Played a pivotal role in the development and maintenance of web applications, handling both frontend and backend responsibilities.",
        "Maintained and optimized 'Goderash', a comprehensive car service platform offering services like fuel delivery, insurance, and car sales.",
        "Collaborated with cross-functional teams to design, implement, and optimize features to streamline service delivery.",
        "Utilized Django, React, Tailwind CSS, and Redux to build a scalable, secure, and responsive platform.",
      ]
    },
    {
      role: "Javascript Developer",
      company: "EagleLion System Technologies",
      location: "Addis Ababa, Ethiopia (Remote)",
      period: "May 2023 – September 2023",
      current: false,
      highlights: [
        "Served as a Backend Developer utilizing Node.js and Express.js to develop robust server-side applications.",
        "Developed the backend for 'Keter Wed', an online job search website, managing API endpoints and database interactions.",
        "Collaborated on designing secure RESTful API endpoints and ensuring seamless integration with the frontend.",
      ]
    },
    {
      role: "Full-stack Developer",
      company: "Ethiopian Artificial Intelligence Institute",
      location: "Addis Ababa, Ethiopia (On-site)",
      period: "April 2023 – August 2023",
      current: false,
      highlights: [
        "Developed a language translation application, designing and implementing backend infrastructure using Django.",
        "Built React frontend and Django backend for predicting coffee leaf diseases, integrating machine learning models.",
        "Collaborated with data scientists and developers in dynamic environments to leverage technology for impactful solutions.",
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "Debo Engineering Corporate",
      location: "Jimma, Oromia Region, Ethiopia (Hybrid)",
      period: "October 2021 – December 2022",
      current: false,
      highlights: [
        "Developed responsive and user-friendly web interfaces using JavaScript, CSS, and HTML.",
        "Optimized frontend performance and ensured cross-browser compatibility across devices.",
        "Implemented visual components and layouts aligned with modern design practices.",
      ]
    }
  ];

  const interests = [
    { emoji: "⚽", label: "Arsenal FC" },
    { emoji: "🎬", label: "Cinema & Film" },
    { emoji: "🎌", label: "Anime" },
    { emoji: "📚", label: "Psychology & Self-Dev" },
    { emoji: "🏗️", label: "System Design" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-6 py-3 shadow-sm mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground font-semibold">About Tamirat (Ethan) Guda Ali</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Engineering{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent relative">
              Financial
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>{' '}
            Futures
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Senior Software Engineer specializing in distributed systems and scalable fintech platforms,
            building the infrastructure that powers Ethiopia's digital economy.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 md:mb-20">
          {/* Left: Summary & Interests */}
          <div className="space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-xl font-light leading-relaxed">
                I'm a <span className="font-semibold text-foreground">Senior Software Engineer</span> with deep expertise in backend engineering,
                distributed systems, and scalable financial technology platforms used by thousands of users across Ethiopia.
              </p>

              <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 border-l-4 border-primary/50">
                <p className="text-base leading-relaxed">
                  I've worked on major fintech platforms including{' '}
                  <span className="font-semibold text-primary">StarPay</span>,{' '}
                  <span className="font-semibold text-primary">Ethiopay</span>,{' '}
                  <span className="font-semibold text-primary">CashGo</span>,{' '}
                  <span className="font-semibold text-primary">GetFee</span>, and{' '}
                  <span className="font-semibold text-primary">Dashen Super App</span> integrations—
                  collectively helping process over <span className="font-bold text-foreground">60 billion ETB</span> in transactions.
                </p>
              </div>

              <p className="text-base leading-relaxed">
                Passionate about clean architecture, system reliability, performance optimization,
                and building production-ready solutions that deliver measurable business impact.
                I implement <span className="font-semibold text-foreground">Saga-based distributed transaction patterns</span> for
                fault-tolerant financial systems.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                <p className="text-primary font-semibold text-lg flex items-start space-x-2">
                  <span>Let's build scalable, reliable systems together and push the boundaries of what's possible.</span>
                  <ArrowRight className="h-5 w-5 animate-bounce flex-shrink-0 mt-1" />
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Education</h3>
              </div>
              <div>
                <p className="font-semibold text-foreground">B.Sc. in Software Engineering</p>
                <p className="text-primary font-medium">Jimma University</p>
                <div className="flex items-center space-x-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>2019 – 2024</span>
                  <MapPin className="h-3.5 w-3.5 ml-2" />
                  <span>Jimma, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Interests & Passions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <span key={i} className="inline-flex items-center space-x-1.5 bg-muted/60 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 rounded-full px-4 py-2 text-sm font-medium cursor-default">
                    <span>{item.emoji}</span>
                    <span className="text-muted-foreground">{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-foreground">Work Experience</h3>
            </div>

            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {idx < experience.length - 1 && (
                  <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-primary/40 to-transparent"></div>
                )}
                <Card className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{exp.role}</h4>
                          {exp.current && (
                            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{exp.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 w-fit group-hover:scale-110">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
