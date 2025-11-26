import { Button } from "@/components/ui/button";
import { Music2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-music-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Decorative musical notes */}
      <div className="absolute top-1/4 left-10 opacity-10 animate-pulse">
        <Music2 className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Music2 className="w-16 h-16 text-secondary" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 1000+ Students</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Learn Music the{" "}
              <span className="text-gradient">Right Way</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Personalized music training designed to build skill, confidence, and stage presence.
            </p>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Hindustani Classical Vocal
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Guitar
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Keyboard (Piano)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-large"
                onClick={() => window.open("https://www.classwix.com", "_blank")}
              >
                Book Your Free Trial Lesson
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                onClick={() => window.open("https://www.classwix.com", "_blank")}
              >
                Visit Full Website
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Student learning music online"
              className="relative rounded-3xl shadow-large w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
