import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { publicUrl } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Proqramlar", href: "/#proqramlar" },
    { label: "Haqqımızda", href: "/#haqqimizda" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src={publicUrl("appmillers-logo.png")}
              alt="AppMillers IT School"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-black text-foreground text-sm tracking-tight">AppMillers</span>
              <span className="font-medium text-muted-foreground text-[10px] tracking-widest uppercase">IT School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/elaqe"
              className="font-elaqe text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Əlaqə
            </Link>
            <Link
              to="/konsultasiya"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Konsultasiya
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Link
                to="/elaqe"
                className="font-elaqe block px-2 py-2.5 text-sm font-semibold text-primary hover:text-primary-dark"
                onClick={() => setMobileOpen(false)}
              >
                Əlaqə
              </Link>
              <Link
                to="/konsultasiya"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold w-full"
                onClick={() => setMobileOpen(false)}
              >
                Konsultasiya
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
