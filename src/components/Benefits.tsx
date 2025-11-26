import { Video, Award, BookOpen, Calendar, Mic, Clock } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Recorded Classes",
    description: "Access all recorded sessions for revision anytime",
  },
  {
    icon: Award,
    title: "Dual Certification",
    description: "Recognized Board + CLASSWiX certification on completion",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description: "Get complete learning materials and practice resources",
  },
  {
    icon: Mic,
    title: "Stage Preparation",
    description: "Prepare for school programs, performances, and competitions",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "1:1 classes with flexible timing that suits you",
  },
  {
    icon: Clock,
    title: "Non-Certification Track",
    description: "Learn at your own pace without exam pressure",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Benefits of Learning with{" "}
            <span className="text-gradient">CLASSWiX</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="gradient-accent p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
