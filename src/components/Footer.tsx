import { Phone, MapPin, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4b2314] text-white py-6">
      <div className="container mx-auto px-3">
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          {/* Columna 1 - Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-12 w-12 rounded-full"
              />
              <h2 className="text-lg font-semibold">AromaDC</h2>
            </div>
            <div className="md:text-left flex md:justify-star items-start gap-2">
              <Coffee size={20} />
              <p className="italic">“Disfrute de su café americano.”</p>
            </div>
          </div>

          {/* Columna 2 - Contacto */}
          <div>
            <h3 className="text-md font-semibold mb-2">Contacto</h3>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} />
              <a
                href="https://wa.me/51902777219"
                className="hover:text-[#674f45] underline"
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
          <div>
            <h3 className="text-md font-semibold mb-2">Nosotros</h3>
            <div className="flex items-center gap-2 mb-1">
              <Link to="/nosostros" className="hover:text-[#674f45] underline ">
                Conocenos
              </Link>
            </div>
          </div>
        </div>
        <div className="text-left mt-4 border-t border-[#150404] pt-4">
          <p className="mt-2">
            © {new Date().getFullYear()} AromaDC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
