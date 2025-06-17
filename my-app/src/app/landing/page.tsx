"use client";
import FirstBanner from '../components/landing/FirstBanner';
import LandingSection from '../components/landing/LandingSection';
import RedlabSection from './RedlabSection';

const Landing = () => {
  return (
    <main className="flex flex-col items-center w-full px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-7xl">
        <div className='h-screen'> <FirstBanner /> </div>
        <div className='h-screen'> <RedlabSection /></div>
        <LandingSection
          image="/img-1.jpg"
          imageAlt="Imagen de la sección de landing"
          title="Genera fácilmente planes de desarrollo individuales"
          text="Con los algoritmos exclusivos de 360Player, todos y cada uno de los individuos reciben sugerencias de entrenamiento personalizadas para mejorar en su posición seleccionada. Basta con evaluar las habilidades de un jugador y 360Player se encarga del resto."
          imageLeft={true}
        />
      </div>
    </main>
  );
};
export default Landing;
