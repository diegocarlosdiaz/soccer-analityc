"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import "../globals.css";
import { useTheme } from "next-themes";
import Switch from "./ToggleDarkLight";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evita errores de hidratación

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <Image
        src={theme === "dark" ? "/redlab-dark.svg" : "/redlab-light.svg"}
        alt="logo"
        width={180}
        height={60}
      />
      <ul className="flex gap-6 items-center">
        <li>
          <a href="#" className="hover-primary">
            ¿Qué es Redlab?
          </a>
        </li>
        <li>
          <a href="#" className="hover-primary">
            Funcionalidades
          </a>
        </li>
        <li>
          <a href="#" className="hover-primary">
            Planes
          </a>
        </li>
        <li>
          <a href="#" className="hover-primary">
            Plataforma
          </a>
        </li>
        <li>
          <a href="#" className="hover-primary">
            Contacto
          </a>
        </li>
        <li>
          <LoginButton text="Ingresar" />
        </li>

        <Switch setTheme={setTheme} theme={theme ?? "light"} />
      </ul>
    </nav>
  );
}
