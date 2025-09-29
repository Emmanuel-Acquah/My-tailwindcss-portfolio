import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "My First",
    description: "A beautiful Project Description",
    image: "Project/auto.png",
    tags: ["React", "Tailwindcss"],
    demoUrl: "#",
    gitHubURL: "#",
  },
  {
    id: 2,
    title: "My second",
    description: "A beautiful Project Description",
    image: "Project/business.png",
    tags: ["React", "Tailwindcss", "JavaScript"],
    demoUrl: "#",
    gitHubURL: "#",
  },
  {
    id: 3,
    title: "My Third",
    description: "A beautiful Project Description",
    image: "Project/commercial.png",
    tags: ["React", "Tailwindcss", "JavaScript"],
    demoUrl: "#",
    gitHubURL: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my design and development skills, blending creativity
          with functionality to deliver impactful user experiences.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hiddden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-2 py-1 font-medium rounded-full bg-primary/20
                                text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className=" flex justify-between items-center">
                  <div className="flex space-x-10">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            href="https://github.com/Emmanuel-Acquah"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
