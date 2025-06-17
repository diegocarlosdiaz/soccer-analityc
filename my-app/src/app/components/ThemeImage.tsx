// components/ThemeImage.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeImageProps = {
  lightSrc: string;
  darkSrc: string;
} & Omit<ImageProps, "src">;

export default function ThemeImage({ lightSrc, darkSrc, ...props }: ThemeImageProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // O podés devolver un placeholder si querés mantener el tamaño
    return <div style={{ width: props.width, height: props.height }} />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const selectedSrc = currentTheme === "dark" ? darkSrc : lightSrc;

  return <Image src={selectedSrc} {...props} />;
}
