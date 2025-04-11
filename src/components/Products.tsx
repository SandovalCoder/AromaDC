import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
const Products = () => {
  const categories = [
    { id: 1, name: "Café Molido" },
    { id: 2, name: "Café en Grano" },
    { id: 3, name: "Café Procesado" },
  ];

  const products = [
    {
      id: 1,
      name: "Café Molido al Instante",
      description:
        "Selección premium recién molida, envasada al vacío para máxima frescura. Disponible en diferentes grados de molienda según tu método de preparación favorito.",
      price: 10.99,
      imageUrl:
        "https://th.bing.com/th/id/OIP.pnDuiDUpxxKu1Tu-QdVxiAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Café en Grano Natural",
      description:
        "Granos selectos 100% puros, cuidadosamente seleccionados y listos para moler. Conserva todo su aroma en su estado natural hasta el momento de su preparación.",
      price: 15.99,
      imageUrl:
        "https://th.bing.com/th/id/R.855a91121e3b29768da14a55c18dd3d4?rik=MGDe6WNrgMT0%2fg&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Café Procesado en Envase",
      description:
        "Presentación práctica en envase hermético, molido profesionalmente para conservación óptima. Ideal para uso diario y máxima conveniencia.",
      price: 15.99,
      imageUrl:
        "https://th.bing.com/th/id/OIP.dvsVJ4NkvyA-9Q3kMepyFAHaHa?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <section className="bg-[#f5ece4] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filtros */}
          <div className="lg:col-span-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Categorías
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-3 p-2 hover:bg-[#eee4dc] rounded-lg cursor-pointer"
                    >
                      <Checkbox id={category.name} />
                      <span className="text-[#4b2314] font-medium">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Productos */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4b2314] mb-6 md:mb-8">
              Nuestros Productos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4b2314]/40 via-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-[#4b2314]">
                        {product.name}
                      </h3>
                      <p className="text-[#4b2314]/90 text-sm mt-2 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-[#4b2314]">
                        S/{product.price}
                      </span>
                      <button className="bg-[#4b2314] text-white px-5 py-2.5 rounded-full hover:bg-[#674f45] transition-colors duration-300 text-sm md:text-base">
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
