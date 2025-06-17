import { useTheme } from 'next-themes';
import Image from 'next/image';
import { PrimaryButton } from '../buttons/PrimaryButton';

export default function FirstBanner() {
  const { theme } = useTheme();

  return (
    <section className="w-full flex flex-col items-center text-center">
      <div className="w-full">
        <Image
          src={theme === 'dark' ? '/banner-rl-light.png' : '/banner-rl.png'}
          alt="Banner REDLAB"
          width={1920}
          height={600}
          className="object-cover w-full h-auto"
          priority
        />
      </div>

      <div className="mt-8 px-4">
        <p>
          <span className="block text-3xl md:text-3xl lg:text-3xl font-bold text-sm text-white-600">
            Gestiona tu equipo de fútbol con REDLAB en base a Inteligencia Artificial, Datos y Tecnología
          </span>
          <span className="block mt-4 text-xl text-sm text-white-600">
            Tu aliado principal para el análisis de datos y la toma de decisiones de tu equipo.
          </span>
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <PrimaryButton label="Ver demo" />
          <PrimaryButton label="Planes" />
        </div>
      </div>
    </section>
  );
}
