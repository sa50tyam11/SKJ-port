import { Code2, Clock, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "30+",
    label: "Projects Completed",
    description: "Websites, apps & digital products",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Average Response",
    description: "Quick communication always",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
    description: "Quality-first approach",
  },
  {
    icon: Zap,
    value: "Fast",
    label: "Delivery Times",
    description: "Efficient, reliable workflow",
  },
];

const Proof = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 md:p-8 rounded-2xl bg-card hover-lift cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <stat.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
