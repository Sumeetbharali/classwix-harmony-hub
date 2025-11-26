import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation Plan",
    format: "Individual (1:1)",
    price: "₹375",
    period: "per class",
    features: [
      "40-minute sessions",
      "Flexible scheduling",
      "Personalized attention",
      "Recorded classes",
      "Learning materials",
    ],
    highlighted: false,
  },
  {
    name: "Group Plan",
    format: "Group (1:4)",
    price: "₹299",
    period: "per class",
    features: [
      "1-hour sessions",
      "1 class per week",
      "Small group learning",
      "Peer interaction",
      "Cost-effective",
    ],
    highlighted: false,
  },
  {
    name: "Advanced Plan",
    format: "Individual (1:1)",
    price: "₹1,099",
    period: "per class",
    features: [
      "40-minute sessions",
      "Advanced curriculum",
      "Certification track",
      "Stage preparation",
      "Competition ready",
    ],
    highlighted: true,
  },
  {
    name: "NRI Plan",
    format: "Individual (1:1)",
    price: "$15.84",
    period: "per class",
    features: [
      "40-minute sessions",
      "Global time zones",
      "USD pricing",
      "Same quality teaching",
      "Cultural connection",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Plans & Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your learning style and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                plan.highlighted ? "ring-2 ring-primary shadow-glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="inline-block gradient-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-display font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.format}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "gradient-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                onClick={() => window.open("https://www.classwix.com", "_blank")}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-background rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Learning Format Details
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Instruction Type
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Individual (1:1) - Personal attention</li>
                <li>• Group (1:4) - Collaborative learning</li>
              </ul>

              <h4 className="font-semibold text-lg flex items-center gap-2 pt-4">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Class Duration
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• 1:1 Classes - 40 minutes</li>
                <li>• Group Classes - 1 hour</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Frequency
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• 1:1 - Flexible (Minimum 1 class/week)</li>
                <li>• Group - 1 class/week</li>
              </ul>

              <h4 className="font-semibold text-lg flex items-center gap-2 pt-4">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Course Duration
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Minimum - 3 months</li>
                <li>• Maximum - 6 years (with progression)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
