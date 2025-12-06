import { CheckCircle2 } from "lucide-react";

const values = [
  "Pixel-perfect attention to detail",
  "Clean, maintainable code",
  "Clear, responsive communication",
  "Deadline-focused delivery",
  "User experience first",
  "Continuous improvement",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 p-1">
              <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-card flex items-center justify-center relative overflow-hidden">
                {/* Abstract design pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent" />
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary" />
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-accent/50" />
                </div>
                
                {/* Initials or avatar placeholder */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-4 mx-auto shadow-glow">
                    <span className="text-4xl font-bold text-accent-foreground">JD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crafting digital experiences with purpose
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                I'm a frontend developer passionate about creating websites that not only 
                look beautiful but also solve real business problems. Every project I 
                take on is an opportunity to help someone succeed online.
              </p>
              <p className="leading-relaxed">
                With a foundation in modern web technologies and an eye for design, 
                I bridge the gap between aesthetics and functionality. Currently 
                expanding into full-stack development to offer even more value.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
