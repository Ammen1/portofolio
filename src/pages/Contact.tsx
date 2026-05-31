
import { MapPin, Mail, Clock, MessageSquare, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Contact = () => {
  const navigate = useNavigate();


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "amenguda@gmail.com",
      subDetail: "Response within 24h",
      href: "mailto:amenguda@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      detail: "github.com/Ammen1",
      subDetail: "Open source & projects",
      href: "https://github.com/Ammen1"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      detail: "Ethan Guda Ali",
      subDetail: "Professional network",
      href: "https://www.linkedin.com/in/ethanguda/"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Addis Ababa, Ethiopia",
      subDetail: "Available for remote work",
      href: null
    },
    {
      icon: Clock,
      title: "Availability",
      detail: "Open for Opportunities",
      subDetail: "Full-time & consulting",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      <Header />

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Connect</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Get In Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Interested in collaborating or have a project in mind? Reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="glass rounded-3xl p-8 md:p-12 shadow-xl mb-10">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Contact <span className="gradient-text">Information</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-accent/30 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-0.5">{info.title}</h4>
                        <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{info.detail}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{info.subDetail}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-5 rounded-2xl border border-border/30 bg-muted/20"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-0.5">{info.title}</h4>
                        <p className="text-foreground font-medium text-sm">{info.detail}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{info.subDetail}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Response Time", value: "< 24h" },
                { label: "Projects Completed", value: "10+" },
                { label: "Years Experience", value: "3+" },
                { label: "Transactions Processed", value: "60B+ ETB" }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-5 text-center border border-border/30 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="glass rounded-2xl p-10 shadow-xl bg-gradient-to-r from-primary/5 via-background to-primary/5">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Start Your <span className="gradient-text">Next Project</span>?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's build something impactful together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={() => window.open('mailto:amenguda@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send an Email
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 border-primary/20 hover:bg-primary/5 transition-all duration-300"
                    onClick={() => navigate('/')}
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
