import React, { useEffect, useState } from "react";
import { cn } from "../lib/util";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Project", href: "#project" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skill" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScroled] = useState(false);
  const [isMenuopen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop:backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Emmanuel</span>{" "}
            Portfolio
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground /80 hover:text-primary transition-color duration 300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile Nav */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden  
          p-2 text-foreground z-50"
          arai-label={isMenuopen ? "close menu" : "open menu"}
        >
          {isMenuopen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 background-blur-md z-10 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuopen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-5 text-xl">
            {navItems.map((item, key) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground /80 hover:text-primary transition-color duration 300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
