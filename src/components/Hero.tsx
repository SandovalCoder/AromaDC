import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-red-950 py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="bg-white text-amber-800 hover:bg-background/85 text-sm font-medium">
              Café 100% Peruano
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Aroma De Chanchamayo
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Variedad de calidades de cafe a granel molido al momento extra ,
              Exportacion, Caracolillo, Villa Rica, Cuzco, Otros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-white text-amber-900 hover:bg-background/85 border-none rounded-full">
                {" "}
                Explorar Catálogo <ArrowRight size={20} />
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=720"
              alt="Hero Image"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
