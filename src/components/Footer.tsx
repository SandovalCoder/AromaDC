import { Phone, MapPin, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-6">
      <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm">
        {/* Columna 1 - Marca */}
        <div>
          <h2 className="text-lg font-semibold">AromaDC</h2>
          <p className="mt-2">
            © {new Date().getFullYear()} AromaDC. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2 - Contacto */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contacto</h3>
          <div className="flex items-center gap-2 mb-1">
            <Phone size={16} />
            <a
              href="https://wa.me/51902777219"
              className="hover:text-amber-300 underline"
            >
              902 777 219
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Calle Brigadier Mateo Pumacahua, Lince - Lima</span>
          </div>
        </div>

        {/* Columna 3 - Frase */}
        <div className="md:text-right flex md:justify-end items-start gap-2">
          <Coffee size={20} />
          <p className="italic">“Disfrute de su café americano.”</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
