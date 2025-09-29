import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Front-end Engineer, Machine Learning Enthusiast & Tech
              Creator
            </h3>
            <p className="text-mute-foreground">
              With over 1 year of experience in front-end development, I
              specialize in creating responsive, accessible, and high-performing
              applications for both web and mobile platforms using modern
              technologies.
            </p>
            <p className="text-mute-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, building responsive and user-friendly applications for
              both web and mobile. I’m also expanding my skills into machine
              learning technologies while continuously learning new tools and
              techniques to stay at the forefront of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg   hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code size={15} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-end Developer</h4>
                  <p className="text-muted-foreground">
                    Creating responsive applications with modern frameworks and
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User size={15} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive and user-friendly digital experiences as
                    a UI/UX designer, blending creativity, functionality, and
                    modern design to enhance user satisfaction.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase size={15} className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning Enthusiast
                  </h4>
                  <p className="text-muted-foreground">
                    A passionate machine learning enthusiast with a keen
                    interest in exploring data-driven solutions, building
                    intelligent models, and applying AI to solve real-world
                    challenges.
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
