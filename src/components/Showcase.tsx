import { Trophy } from "lucide-react";
import showcaseImage from "@/assets/showcase-panel.jpg";

const Showcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-medium">Showcase Your Talent</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Your Progress Deserves to Be{" "}
                <span className="text-gradient">Seen</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The CLASSWiX Student Showcase Panel gives every learner a platform
                to display their journey and achievements. Share your performances,
                certificates, and milestones with family and friends.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">Display your achievements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-foreground">Share performance videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">Celebrate your progress</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={showcaseImage}
                alt="Student Showcase Panel"
                className="relative rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
