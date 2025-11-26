import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import vocalImage from "@/assets/course-vocal.jpg";
import guitarImage from "@/assets/course-guitar.jpg";
import keyboardImage from "@/assets/course-keyboard.jpg";

const courses = [
  {
    name: "Hindustani Classical Vocal",
    image: vocalImage,
    description: "Master the art of Indian classical singing with expert guidance",
    gradient: "from-primary to-secondary",
  },
  {
    name: "Guitar",
    image: guitarImage,
    description: "Learn acoustic and electric guitar techniques from basics to advanced",
    gradient: "from-secondary to-accent",
  },
  {
    name: "Keyboard (Piano)",
    image: keyboardImage,
    description: "Explore piano and keyboard playing with structured curriculum",
    gradient: "from-accent to-primary",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Courses Offered
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully designed courses for{" "}
            <span className="font-semibold text-foreground">
              Beginner to Advanced Learners
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-semibold">
                  {course.name}
                </h3>
                <p className="text-muted-foreground">{course.description}</p>

                <Button
                  variant="ghost"
                  className="group/btn w-full justify-between"
                  onClick={() => window.open("https://www.classwix.com", "_blank")}
                >
                  Explore Course
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
