import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroPedal from "@/assets/hero-pedal.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url(${heroPedal})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                Analog Electronics Project
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Custom Analog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Guitar Pedal
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              A handcrafted analog effects pedal combining vintage warmth with modern reliability. 
              Pure analog signal path for authentic tone shaping.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all"
                onClick={() => scrollTo("purchase")}
              >
                <ShoppingCart size={20} className="mr-2" />
                Buy Now
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollTo("specifications")}
              >
                View Specifications
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent blur-3xl" />
            <img 
              src={heroPedal} 
              alt="Custom analog guitar pedal"
              className="relative rounded-2xl shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
