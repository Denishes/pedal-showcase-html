import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Truck } from "lucide-react";

const OLX_LINK = "https://www.olx.pt/d/anuncio/pedais-de-guitarra-boost-IDJfFSQ.html?search_reason=search%7Corganic";
// Paste your Vinted listing URL here when it's ready
const VINTED_LINK = "";
const vintedActive = VINTED_LINK.length > 0;

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
              Choose your preferred marketplace. Vinted handles payment, shipping, and the label automatically. OLX is for local, in-person sales in Portugal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={vintedActive ? VINTED_LINK : undefined}
              target={vintedActive ? "_blank" : undefined}
              rel={vintedActive ? "noopener noreferrer" : undefined}
              className={`group relative p-8 rounded-2xl bg-background border border-border transition-all ${
                vintedActive
                  ? "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  : "opacity-80 cursor-default"
              }`}
            >
              <div className="flex flex-col h-full items-start">
                <div className={`mb-6 inline-flex p-3 rounded-xl transition-all ${
                  vintedActive
                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Buy on Vinted</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Best for shipping anywhere in Europe. Vinted handles payment, automatically calculates shipping to the buyer's location, and generates the shipping label for you.
                </p>
                <Button
                  disabled={!vintedActive}
                  className={`w-full ${
                    vintedActive
                      ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all group-hover:translate-y-[-2px]"
                      : "cursor-not-allowed"
                  }`}
                  variant={vintedActive ? "default" : "secondary"}
                >
                  {vintedActive ? (
                    <>
                      View Vinted Listing
                      <ExternalLink size={18} className="ml-2" />
                    </>
                  ) : (
                    "Listing Coming Soon"
                  )}
                </Button>
              </div>
            </a>

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
                  Best for local, in-person sales in Portugal. You arrange the meetup and handle shipping yourself if needed.
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all group-hover:translate-y-[-2px]">
                  View OLX Listing
                  <ExternalLink size={18} className="ml-2" />
                </Button>
              </div>
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer a direct sale?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline"
            >
              Contact me
            </a>{" "}
            and I can arrange a custom order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;
