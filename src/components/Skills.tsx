import { 
  Code, 
  Palette, 
  Layers, 
  Smartphone,
  GitBranch,
  Database,
  Figma,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
    primary: true,
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    skills: ["Figma", "Responsive Design", "Design Systems", "Prototyping"],
    primary: true,
  },
  {
    title: "Styling & Animation",
    icon: Layers,
    skills: ["Tailwind CSS", "SCSS", "Framer Motion", "CSS Animations"],
    primary: true,
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    skills: ["Git", "VS Code", "npm/yarn", "Vercel", "Netlify"],
    primary: false,
  },
  {
    title: "Backend (Learning)",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    primary: false,
  },
  {
    title: "Performance & SEO",
    icon: Globe,
    skills: ["Core Web Vitals", "Lighthouse", "Accessibility", "SEO Basics"],
    primary: false,
  },
];

const Skills = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Skills & Tools
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I work with
          </h2>
          <p className="text-lg text-muted-foreground">
            A focused toolkit for building fast, beautiful, and accessible web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                category.primary
                  ? "bg-card border border-border/50 hover-lift"
                  : "bg-transparent border border-border/30 hover:border-border/60"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                category.primary ? "bg-accent/10" : "bg-secondary"
              }`}>
                <category.icon className={`w-6 h-6 ${
                  category.primary ? "text-accent" : "text-muted-foreground"
                }`} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                      category.primary
                        ? "bg-secondary text-foreground"
                        : "bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
