import { ArrowDown, Download, Sparkles, Code2, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadResume = async () => {
    const triggerLocalDownload = () => {
      const a = document.createElement("a");
      a.href = "/cv.pdf";
      a.download = "cv.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast({
        title: "Download started",
        description: "Your CV download has started.",
      });
    };

    try {
      const { data: files, error: listError } = await supabase.storage
        .from("cvs")
        .list("", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (listError || !files || files.length === 0) {
        console.log("Supabase CV storage not available or empty. Falling back to local cv.pdf");
        triggerLocalDownload();
        return;
      }

      const latestCV = files[0];
      const { data, error } = await supabase.storage
        .from("cvs")
        .download(latestCV.name);

      if (error) {
        console.error("Error downloading CV from Supabase:", error);
        triggerLocalDownload();
        return;
      }

      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = latestCV.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: "Your CV download has started.",
      });
    } catch (error) {
      console.error("Error downloading CV:", error);
      triggerLocalDownload();
    }
  };

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Transactions Processed", value: "60B+ ETB" },
    { label: "Response Time", value: "<100ms" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive glow effect */}
      <div
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Location + Role Badge */}
          <div className="animate-fade-in mb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              <span className="text-foreground">Senior Software Engineer</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-muted/60 border border-border rounded-full px-3 py-1.5 text-xs md:text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5 text-xs md:text-sm text-green-600 dark:text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
              <span>Available for Opportunities</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in [animation-delay:0.1s] opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Tamirat (Ethan)
              </span>
              <br />
              <span className="gradient-text">Guda Ali</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
              Building secure, high-performance APIs and scalable fintech platforms
              powering Ethiopia's digital economy.
              <br />
              <span className="text-primary font-semibold">
                Go • Rust • TypeScript • Node.js • Microservices • Payment Systems
              </span>
            </p>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in [animation-delay:0.25s] opacity-0 mb-8 md:mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech showcase */}
          <div className="animate-fade-in [animation-delay:0.3s] opacity-0 mb-8 md:mb-12">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-8 max-w-3xl mx-auto shadow-lg">
              <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground text-xs md:text-sm ml-2 md:ml-4 font-mono">
                  ethan-guda.ts
                </span>
              </div>
              <div className="text-left">
                <pre className="text-xs sm:text-sm md:text-base font-mono text-card-foreground overflow-x-auto">
                  <code>
                    {`const EthanGuda = {
  role: 'Senior Software Engineer',
  company: 'EagleLion System Technologies',
  location: 'Addis Ababa, Ethiopia',
  languages: ['Go', 'Rust', 'TypeScript', 'JavaScript', 'Python'],
  expertise: [
    'Microservices Architecture',
    'Saga Pattern & Distributed Transactions',
    'Scalable Payment Systems',
    'API Gateway Design',
    'Clean Architecture',
  ],
  fintech: ['StarPay', 'Ethiopay', 'CashGo', 'GetFee', 'Dashen'],
  focus: 'High-Performance Fintech Platforms',
};

// <100ms response time • 60B+ ETB processed
export default EthanGuda;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-12 md:mb-16">
            <Button
              size="lg"
              className="button-glow bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 text-sm md:text-base"
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Code2 className="h-4 w-4 md:h-5 md:w-5" />
                <span>View My Work</span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 shadow-lg text-sm md:text-base"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 text-sm md:text-base"
              onClick={() => navigate('/contact')}
            >
              <Briefcase className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in [animation-delay:0.6s] opacity-0">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-xs md:text-sm mb-2 group-hover:text-primary font-medium">
                Explore My Journey
              </span>
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse [animation-delay:2s]"></div>
    </section>
  );
};

export default HeroSection;
