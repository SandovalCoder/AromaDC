import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  const features = [
    "Extra",
    "Exportación",
    "Caracolillo",
    "Villa Rica",
    "Cuzco",
    "Otros",
  ];
  return (
    <section className="bg-[#150404] py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Badge className="bg-white text-[#4b2314] hover:bg-background/85 text-sm font-medium">
              Café 100% Peruano
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Aroma De <span className="text-amber-600">Chanchamayo</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Variedad de calidades de cafe a granel molido al momento.
            </p>
            {/* Características */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-white border-gray-400 bg-[#674f45] backdrop-blur-md"
                >
                  {feature}
                </Badge>
              ))}
            </div>
            <Link to="/productos">
              <Button className="bg-white text-[#4b2314] hover:bg-background/85 border-none rounded-full mt-6">
                Explorar Catálogo <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          <div className="">
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
