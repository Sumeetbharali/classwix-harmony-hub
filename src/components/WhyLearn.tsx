import { GraduationCap, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Structured Curriculum",
    description: "Aligned with recognized music boards for comprehensive learning",
  },
  {
    icon: Users,
    title: "Experienced Mentors",
    description: "Expert guidance at every step of your musical journey",
  },
  {
    icon: Target,
    title: "For Everyone",
    description: "Perfect for beginners, hobby learners, performers, and future professionals",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Build confidence and stage presence through structured practice",
  },
];

const WhyLearn = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Learn Without Limits, Grow With{" "}
            <span className="text-gradient">CLASSWiX</span>
          </h2>
          <p className="text-xl text-muted-foreground italic">
            "Because music isn't just learned — it's experienced."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-primary p-3 rounded-xl w-fit mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
