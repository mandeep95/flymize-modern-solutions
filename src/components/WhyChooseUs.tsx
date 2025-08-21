import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const comparison = [
  {
    feature: "Response Time",
    others: "Longer turnaround time",
    flymize: "Faster and quick responses"
  },
  {
    feature: "Approach",
    others: "Mediocre methods",
    flymize: "Ethical Approach"
  },
  {
    feature: "Reporting",
    others: "Lack of timely reporting",
    flymize: "Accurate Reporting"
  },
  {
    feature: "Support",
    others: "No prompt answers",
    flymize: "Precise Resolutions"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-light px-4 py-2 rounded-full text-accent font-medium mb-4">
            SPECIAL • SPECIAL • SPECIAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            What makes us unique?
          </h2>
          <p className="text-xl text-muted-foreground">
            Flymize V/S Others
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Others Column */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-destructive flex items-center justify-center">
                  <XCircle className="mr-2" size={28} />
                  OTHERS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                    <XCircle className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-destructive">{item.others}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Flymize Column */}
            <Card className="bg-primary-light border-primary/20 shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center">
                  <CheckCircle className="mr-2" size={28} />
                  FLYMIZE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/80">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-primary font-medium">{item.flymize}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
