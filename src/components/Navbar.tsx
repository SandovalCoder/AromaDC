import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/" },
    { label: "Servicios", path: "/" },
    { label: "Contacto", path: "/" },
  ];

  return (
    <header className="bg-amber-900 w-full fixed top-0 z-50 shadow-lg backdrop-blur-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <img
            src="https://innovacioneducativa.upc.edu.pe/wp-content/uploads/2024/06/Educacion-inclusiva-1170x532.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white text-lg font-semibold">AromaDC</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-md font-medium text-white hover:text-amber-400 hover:underline underline-offset-4 transition-colors "
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <Button variant="destructive" asChild>
              <Link to="/">Iniciar Sesion </Link>
            </Button>
            <Button className="bg-amber-950 hover:bg-amber-800 text-white">
              Registrarse
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:bg-amber-800 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-amber-900 shadow-lg z-50 md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  onClick={toggleMenu}
                  className="block text-white hover:bg-amber-800 px-4 py-2 rounded-md transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="destructive" asChild className="w-full">
                  <Link to="/" onClick={toggleMenu}>
                    Iniciar Sesion
                  </Link>
                </Button>
                <Button className="bg-amber-950 hover:bg-amber-800 text-white w-full">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
