
import { Users, Clock } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm mb-4 md:mb-6">
            <Users className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
            <span className="text-muted-foreground">Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with fellow developers, share knowledge, and grow together in our vibrant community.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 md:px-6 py-3 text-sm md:text-base">
            <Clock className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
            <span className="text-muted-foreground font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
