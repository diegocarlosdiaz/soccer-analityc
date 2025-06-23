import React from 'react';

interface SectionProps {
  image: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  imageLeft?: boolean;
  children?: React.ReactNode;
}

export default function Section({
  image,
  imageAlt = '',
  title,
  text,
  imageLeft = false,
  children,
}: SectionProps) {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 py-8">
      {/* Imagen */}
      <div className={`w-full md:w-1/2 ${imageLeft ? 'order-1' : 'order-2'} flex justify-center`}>
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg shadow-lg object-cover max-h-96 w-full h-auto"
        />
      </div>
      {/* Contenido */}
      <aside className={`w-full md:w-1/2 ${imageLeft ? 'order-2' : 'order-1'} flex flex-col gap-4`}>
        {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
        {text && <p className="text-lg mb-2">{text}</p>}
        {children}
      </aside>
    </section>
  );
} 