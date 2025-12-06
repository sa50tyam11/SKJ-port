import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sa50tyam11", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/satyamkrjha5011", label: "LinkedIn" },
  { icon: Mail, href: "mailto:satyamkrjha@example.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-foreground">dev</span>
              <span className="gradient-text">.</span>
            </a>
            <span className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
