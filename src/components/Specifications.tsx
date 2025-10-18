const specs = [
  { label: "Circuit Type", value: "Analog Discrete" },
  { label: "Power Supply", value: "9V DC (Center Negative)" },
  { label: "Current Draw", value: "~15mA" },
  { label: "Input Impedance", value: "1MΩ" },
  { label: "Output Impedance", value: "10kΩ" },
  { label: "Controls", value: "Gain, Tone, Level" },
  { label: "Switching", value: "True Bypass (3PDT)" },
  { label: "Enclosure", value: "Die-cast Aluminum" }
];

const Specifications = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Engineered for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-all"
              >
                <span className="font-medium text-muted-foreground">{spec.label}</span>
                <span className="font-semibold text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
