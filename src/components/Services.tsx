import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Megaphone, 
  Palette, 
  MessageSquare, 
  Cog, 
  Search, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "Strategic Marketing",
    description: "Catapult your brand into the spotlight with our genius strategies – it's like magic, but for marketing.",
    color: "text-blue-500"
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Picture-perfect branding and graphics – we make your competitors jealous, and your audience adore you.",
    color: "text-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description: "Hands-free social success! While you focus on your business, we'll make sure your brand shines across all platforms.",
    color: "text-pink-500"
  },
  {
    icon: Cog,
    title: "Technical Solutions",
    description: "From tech wizardry to seamless online experiences, we turn digital hiccups into high-fives for your users.",
    color: "text-indigo-500"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your online swagger! We'll spruce up your website so Google has no choice but to be your biggest fan.",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Automation Services",
    description: "Automatically enhance efficiency! Our automation tricks make your processes smoother than a freshly buttered slide.",
    color: "text-accent"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;