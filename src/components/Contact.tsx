import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Clock,
  Shield,
  Zap
} from "lucide-react";

const benefits = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Shield, text: "Confidential & secure" },
  { icon: Zap, text: "Quick project kickoff" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium text-primary-foreground/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for projects
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Ready to bring your idea to life?
              </h2>
              
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
                Let's discuss your project and see how I can help. No commitment, 
                no pressure—just a friendly conversation about your goals.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button 
                  variant="accent" 
                  size="xl" 
                  className="w-full sm:w-auto group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="hero-outline" 
                  size="xl" 
                  className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-2">
                    <benefit.icon className="w-4 h-4" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional contact info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">
              Prefer email directly?
            </p>
            <a 
              href="mailto:hello@example.com" 
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
