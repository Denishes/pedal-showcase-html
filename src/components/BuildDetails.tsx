import circuitDetail from "@/assets/pcb-circuit-design.png.asset.json";
import controlsDetail from "@/assets/controls-detail.jpg";

const BuildDetails = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Build & Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every component carefully selected for optimal sound quality
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Circuit Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The heart of this pedal is a carefully designed analog circuit using discrete 
                components. High-quality metal film resistors and film capacitors ensure low 
                noise and excellent frequency response. The gain stage utilizes carefully 
                selected op-amps for warm, natural overdrive characteristics.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                Component Selection
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every component is hand-selected for reliability and sonic performance. 
                Premium audio-grade capacitors in the signal path, low-noise resistors, 
                and high-quality potentiometers ensure years of reliable operation and 
                excellent sound quality.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden border border-primary/20 group">
              <img 
                src={circuitDetail.url} 
                alt="PCB circuit board design with measurements"
                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-medium px-3 py-1 bg-primary/90 text-primary-foreground rounded-full">
                  Circuit Board
                </span>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-primary/20 group">
              <img 
                src={controlsDetail} 
                alt="Control details"
                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-medium px-3 py-1 bg-accent/90 text-accent-foreground rounded-full">
                  Premium Controls
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildDetails;
