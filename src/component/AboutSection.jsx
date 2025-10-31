import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Passionate Front-end Engineer, Machine Learning Enthusiast & Tech
              Creator
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base">
              With over 1 year of experience in front-end development, I
              specialize in creating responsive, accessible, and high-performing
              applications for both web and mobile platforms using modern
              technologies.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base">
              I'm passionate about creating elegant solutions to complex
              problems, building responsive and user-friendly applications for
              both web and mobile. I’m also expanding my skills into machine
              learning technologies while continuously learning new tools and
              techniques to stay at the forefront of innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/public/Project/MyCVEMMA.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-end Developer</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Creating responsive applications with modern frameworks and
                    clean design principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Designing intuitive and user-friendly experiences that blend
                    creativity, functionality, and modern design trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning Enthusiast
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Exploring data-driven solutions and building intelligent
                    models to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
