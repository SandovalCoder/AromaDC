import { Coffee, Bean, Globe, Handshake, Leaf, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nosotros = () => {
  return (
    <section className="bg-[#150404] py-12 text-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nosotros</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna izquierda */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Coffee className="w-12 h-12 text-amber-400" />
                <h2 className="text-3xl font-bold">Aroma De Chanchamayo</h2>
              </div>

              <p className="text-lg text-gray-300">
                Especialistas en selección y distribución de café 100% peruano.
                Adquirimos directamente los mejores granos de productores
                locales para ofrecerte café de máxima calidad, molido al
                instante o en granos seleccionados.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Bean className="w-6 h-6 text-amber-400" />
                  Nuestra Propuesta
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Selección experta de múltiples regiones",
                    "Procesamiento profesional",
                    "Presentaciones en grano o molido",
                    "Variedades desde clásicos hasta especialidades",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-amber-400">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-8">
              <div className="p-6 bg-[#674f45] rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Handshake className="w-6 h-6 text-amber-400" />
                  Nuestro Modelo
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      text: "Granos de Chanchamayo, Villa Rica y Cuzco",
                    },
                    { icon: Leaf, text: "Estrictos controles de calidad" },
                    { icon: Package, text: "Tostado y molido profesional" },
                    {
                      icon: Handshake,
                      text: "Comercio directo con productores",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <item.icon className="w-6 h-6 flex-shrink-0 text-amber-400" />
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-600/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  ¡Vive la experiencia AromaDC!
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Ver Variedades
                  </Button>
                  <Button className="bg-white text-[#4b2314] hover:bg-amber-400/10 hover:text-white">
                    Conoce productores
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
