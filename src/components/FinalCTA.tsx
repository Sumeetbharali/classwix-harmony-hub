import { Button } from "@/components/ui/button";
import { ArrowRight, Music } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      <div className="absolute top-10 left-10 opacity-5">
        <Music className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <Music className="w-40 h-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-display font-bold">
              Start Your Music Journey{" "}
              <span className="text-gradient">Today</span>
            </h2>
            <p className="text-2xl text-muted-foreground italic">
              "Your Music. Your Rhythm. Your Pace."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-10 py-7 shadow-large group"
              onClick={() => window.open("https://www.classwix.com/book-a-trial", "_blank")}
            >
              Book Your Free Trial Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2"
              onClick={() => window.open("https://www.classwix.com", "_blank")}
            >
              Visit CLASSWiX Website
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">6 Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
