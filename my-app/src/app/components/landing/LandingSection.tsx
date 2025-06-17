import React from 'react';

interface SectionProps {
  image: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  imageLeft?: boolean;
  children?: React.ReactNode;
}

export default function LandingSection({
  image,
  imageAlt = '',
  title,
  text,
  imageLeft = false,
  children,
}: SectionProps) {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-12 py-16 px-4">
      {/* Imagen con efectos mejorados */}
      <div className={`
        w-full lg:w-1/2 
        ${imageLeft ? 'lg:order-1' : 'lg:order-2'} 
        flex justify-center relative group
      `}>
        {/* Efecto de fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-gray-900 to-red-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform scale-110"></div>

        {/* Contenedor de imagen con borde degradado */}
        <div className="relative p-1 bg-gradient-to-r from-red-500 via-gray-900 to-red-600 rounded-3xl shadow-2xl group-hover:shadow-red-500/25 transition-all duration-500 transform group-hover:scale-105">
          <img
            src={image}
            alt={imageAlt}
            className="rounded-3xl object-cover max-h-96 w-full h-auto bg-white"
          />
        </div>

        {/* Efecto de brillo flotante */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg opacity-60 animate-pulse"></div>
      </div>

      {/* Contenido mejorado */}
      <aside className={`
        w-full lg:w-1/2 
        ${imageLeft ? 'lg:order-2' : 'lg:order-1'} 
        flex flex-col gap-6 px-4
      `}>
        {title && (
          <h2
            className="text-4xl lg:text-5xl font-extrabold leading-tight 
    bg-gradient-to-r from-gray-700 via-red-600 to-gray-700 
    bg-clip-text text-transparent"
          >
            {title}
          </h2>
        )}

        {text && (
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
            {text}
          </p>
        )}

        {/* Línea decorativa */}
        {(title || text) && children && (
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-black rounded-full"></div>
        )}

        <div className="flex flex-col gap-4">
          {children}
        </div>
      </aside>
    </section>
  );
}