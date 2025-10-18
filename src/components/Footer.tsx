import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Analog Guitar Pedal Project</h3>
            <p className="text-muted-foreground">
              Handcrafted electronics for musicians
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Analog Guitar Pedal Project. Built with passion for tone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
