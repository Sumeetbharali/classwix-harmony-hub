import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="gradient-primary p-2 rounded-lg">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold">CLASSWiX</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => window.open("https://www.classwix.com", "_blank")}
              className="hidden sm:inline-flex"
            >
              Visit Website
            </Button>
            <Button
              className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-medium"
              onClick={() => window.open("https://www.classwix.com/book-a-trial", "_blank")}
            >
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
