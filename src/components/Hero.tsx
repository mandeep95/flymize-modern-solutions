import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-light px-4 py-2 rounded-full text-sm text-primary font-medium mb-8 animate-fade-up">
            <Users size={16} />
            <span>✨ Trusted by 150+ Growing Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Your Complete
            <span className="text-gradient block">Business Growth</span>
            Partner
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up">
            Seamless solutions in marketing, web development, and beyond — built to scale with your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
            <Button size="lg" className="gradient-primary text-white hover:opacity-90 shadow-medium">
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary-light">
              Get Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-gradient">150+</span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-gradient">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">Fast Response</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-gradient">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;