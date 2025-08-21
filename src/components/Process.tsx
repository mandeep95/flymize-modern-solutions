import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Plan Your Growth",
    description: "We start by understanding your business goals and creating a tailored strategy for success."
  },
  {
    number: "2", 
    icon: Users,
    title: "Expert Execution",
    description: "Our skilled team implements your customized solutions with precision and attention to detail."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Watch your business soar as we launch your project and continuously optimize for growth."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-light px-4 py-2 rounded-full text-accent font-medium mb-4">
            ONBOARDING • ONBOARDING • ONBOARDING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            How it starts?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your project success from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative text-center group hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full gradient-primary text-white font-bold text-xl flex items-center justify-center shadow-medium">
                  {step.number}
                </div>
              </div>

              <CardHeader className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardContent>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary animate-float" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to discuss? Let's Schedule a Call
          </p>
          <Button size="lg" className="gradient-accent text-white hover:opacity-90 shadow-medium">
            Schedule Free Consultation
            <Calendar className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;