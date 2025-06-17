"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Switch from "./ToggleDarkLight";
import LoginButton from "./LoginButton";
import ThemeImage from "./ThemeImage";

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  logoLight?: string;
  logoDark?: string;
  navItems?: NavItem[];
}

export default function Navbar({
  logoLight = "/redlab-light.svg",
  logoDark = "/redlab-dark.svg",
  navItems = [
    { name: "¿Qué es Redlab?", href: "#" },
    { name: "Funcionalidades", href: "#" },
    { name: "Planes", href: "#" },
    { name: "Plataforma", href: "#" },
    { name: "Contacto", href: "#" },
  ],
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? theme : 'light'; // Cambiado a 'light' como valor por defecto

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Resto de tus efectos (handleClickOutside, prevent scroll, handleResize)...

  return (
    <nav className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 border-b ${currentTheme === 'dark' ? 'border-gray-800' : 'border-gray-200'} relative z-50 transition-colors`}>
      {/* Logo */}
      <ThemeImage
        lightSrc={logoLight}
        darkSrc={logoDark}
        alt="logo"
        width={160}
        height={50}
        priority
      />

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <ul className="flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`hover:text-primary transition-colors whitespace-nowrap text-sm lg:text-base ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <LoginButton text="Ingresar" />
        <Switch setTheme={setTheme} theme={currentTheme} />
      </div>

      {/* Burger icon */}
      <div className="flex items-center gap-4 md:hidden">
        <Switch setTheme={setTheme} theme={currentTheme} />
        <button
          onClick={toggleMenu}
          className={`focus:outline-none ${currentTheme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay de fondo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menú móvil */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              ref={menuRef}
              className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm py-4 px-6 shadow-lg overflow-y-auto md:hidden flex flex-col ${currentTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'} transition-colors`}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="focus:outline-none"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-base font-medium transition-colors border-b ${currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pb-2`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-4">
                  <LoginButton text="Ingresar" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}