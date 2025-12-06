import { Button } from "@/components/ui/button";
import { 
  Building2, 
  User, 
  ArrowRight,
  Globe,
  Sparkles,
  Rocket,
  GraduationCap,
  Briefcase,
  PenTool
} from "lucide-react";

const businessServices = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites that establish credibility and convert visitors into leads.",
    features: ["Custom design", "Mobile responsive", "SEO optimized", "Fast loading"],
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    description: "High-converting pages for campaigns, products, or service launches.",
    features: ["Conversion focused", "A/B testing ready", "Analytics integrated", "CTA optimized"],
  },
  {
    icon: PenTool,
    title: "UI Redesign",
    description: "Transform outdated interfaces into modern, user-friendly experiences.",
    features: ["UX audit", "Visual refresh", "Performance boost", "Accessibility"],
  },
];

const individualServices = [
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Showcase your work with a stunning, professional online presence.",
    features: ["Personal branding", "Project showcase", "Contact integration"],
  },
  {
    icon: GraduationCap,
    title: "Student Projects",
    description: "Academic and personal projects built to impress and demonstrate skills.",
    features: ["Clean code", "Documentation", "Deployment support"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Turn your idea into a working prototype to test and validate.",
    features: ["Rapid development", "Core features", "Scalable foundation"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How I can help you
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a business looking to grow online or an individual 
            with a project idea, I've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Businesses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">For Businesses</h3>
            </div>

            <div className="space-y-4">
              {businessServices.map((service) => (
                <div
                  key={service.title}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover-lift cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                      <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-md bg-secondary/80 text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Individuals */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">For Individuals</h3>
            </div>

            <div className="space-y-4">
              {individualServices.map((service) => (
                <div
                  key={service.title}
                  className="group p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-border/60 hover:bg-secondary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which service fits your needs?
          </p>
          <Button variant="outline" size="lg" className="group">
            Let's Discuss Your Project
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
