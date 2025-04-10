const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      name: "Café Molido al Instante",
      description:
        "Selección premium recién molida, envasada al vacío para máxima frescura. Disponible en diferentes grados de molienda según tu método de preparación favorito.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.pnDuiDUpxxKu1Tu-QdVxiAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Café en Grano Natural",
      description:
        "Granos selectos 100% puros, cuidadosamente seleccionados y listos para moler. Conserva todo su aroma en su estado natural hasta el momento de su preparación.",
      imageUrl:
        "https://th.bing.com/th/id/R.855a91121e3b29768da14a55c18dd3d4?rik=MGDe6WNrgMT0%2fg&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Café Procesado en Envase",
      description:
        "Presentación práctica en envase hermético, molido profesionalmente para conservación óptima. Ideal para uso diario y máxima conveniencia.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.dvsVJ4NkvyA-9Q3kMepyFAHaHa?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <section className="bg-[#f5ece4] py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4b2314] mb-4">
            Nuestras Presentaciones
          </h1>
          <p className="text-lg text-[#4b2314]/80">
            Disfruta del auténtico café peruano en el formato que prefieras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4b2314]/60 via-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#4b2314] mb-3">
                  {product.name}
                </h2>
                <p className="text-[#4b2314]/90 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4">
                  <button className="bg-[#4b2314] text-white px-5 py-2.5 rounded-full hover:bg-[#674f45] transition-colors duration-300">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
