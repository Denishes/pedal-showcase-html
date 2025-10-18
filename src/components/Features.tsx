import { Zap, Volume2, Waves, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "True Bypass",
    description: "Zero signal degradation when bypassed. Your tone stays pure and unaffected."
  },
  {
    icon: Volume2,
    title: "Analog Warmth",
    description: "100% analog circuit design delivers authentic, warm, and musical overdrive."
  },
  {
    icon: Waves,
    title: "Dynamic Response",
    description: "Touch-sensitive response that reacts naturally to your playing dynamics."
  },
  {
    icon: Settings,
    title: "Versatile Controls",
    description: "Intuitive control layout for easy tone shaping from subtle to extreme."
  }
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for guitarists who demand exceptional tone and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
