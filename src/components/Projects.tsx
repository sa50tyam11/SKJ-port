import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cake Shop",
    type: "Business Website",
    problem: "Local bakery needed an attractive online presence",
    solution: "Built a visually appealing frontend showcasing products and services",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    color: "from-pink-500/20 to-rose-500/20",
    github: "https://github.com/sa50tyam11/Cake-Shop",
    demo: "https://sa50tyam11.github.io/Cake-Shop/",
  },
  {
    title: "Web Service Platform",
    type: "Web Application",
    problem: "Businesses needed a modern service showcase platform",
    solution: "Created a clean, professional web platform with intuitive navigation",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/sa50tyam11/web-service-platform",
    demo: "https://sa50tyam11.github.io/web-service-platform/",
  },
  {
    title: "BCA Grade Calculator",
    type: "Web Tool",
    problem: "Students needed quick grade calculations",
    solution: "Built an interactive calculator with clean UI for grade computation",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/sa50tyam11/BCA-grade-calculator",
    demo: "https://sa50tyam11.github.io/BCA-grade-calculator/",
  },
  {
    title: "BMI Calculator",
    type: "Web Tool",
    problem: "Users needed a simple health tracking tool",
    solution: "Created a responsive BMI calculator with instant results",
    tech: ["JavaScript", "CSS", "HTML"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    color: "from-amber-500/20 to-orange-500/20",
    github: "https://github.com/sa50tyam11/BMI-calculator",
    demo: "https://sa50tyam11.github.io/BMI-calculator/",
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects that deliver{" "}
            <span className="gradient-text">real value</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each project is crafted with attention to detail, performance, and user experience. 
            Here's a selection of recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-20" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Challenge:</span> {project.problem}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Solution:</span> {project.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-secondary/80 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group/btn">
                      View Project
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="sm" className="group/btn">
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have a similar project in mind?
          </p>
          <Button variant="accent" size="lg">
            Let's Build Something
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
