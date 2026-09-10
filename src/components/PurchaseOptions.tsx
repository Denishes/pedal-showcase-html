import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Truck } from "lucide-react";

const OLX_LINK = "https://www.olx.pt/d/anuncio/pedais-de-guitarra-boost-IDJfFSQ.html?search_reason=search%7Corganic";
// Paste your Vinted listing URL here when it's ready
const VINTED_LINK = "";

const PurchaseOptions = () => {
  return (
    <section id="purchase" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Available Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Pedal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred marketplace. Both handle payment and shipping for a smooth, secure purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={OLX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col h-full items-start">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Buy on OLX</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Best for buyers in Portugal. Local pickup or shipping with buyer protection.
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all group-hover:translate-y-[-2px]">
                  View OLX Listing
                  <ExternalLink size={18} className="ml-2" />
                </Button>
              </div>
            </a>

            <div className="group relative p-8 rounded-2xl bg-background border border-border opacity-80">
              <div className="flex flex-col h-full items-start">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-muted text-muted-foreground">
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Buy on Vinted</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Great for European buyers. Prepaid shipping labels and integrated tracking.
                </p>
                <Button disabled className="w-full cursor-not-allowed" variant="secondary">
                  Listing Coming Soon
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer a direct sale?{" "}
            <button
              onClick={scrollToPurchase}
              className="text-primary hover:underline"
            >
              Contact me
            </button>{" "}
            and I can arrange a custom order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;
