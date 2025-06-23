"use client";
import React from 'react';

export default function RedlabSection() {
  return (
    <section className="">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quiénes Somos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="backdrop-blur-sm bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 rounded-2xl p-8 border border-gray-300 border-opacity-30 dark:border-gray-700 dark:border-opacity-30 shadow-xl hover:bg-opacity-15 dark:hover:bg-opacity-15 transition-all duration-300">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-red-500">REDLAB</span> es una plataforma innovadora dedicada al{' '}
              <span className="font-semibold text-red-500">scouting deportivo</span>,
              la <span className="font-semibold text-red-500">gestión integral de equipos</span> y la organización de{' '}
              <span className="font-semibold text-red-500">eventos competitivos</span>.
              Nuestra misión es brindar tecnología de alto rendimiento a clubes, entrenadores y organizaciones
              para potenciar su desarrollo y descubrir el talento del futuro.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 border-opacity-30 dark:border-gray-700 dark:border-opacity-30 hover:border-red-500 hover:border-opacity-50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="text-xl font-bold">
                  Scouting Inteligente
                </h3>
              </div>
              <p className="leading-relaxed mb-4">
                Evaluamos y registramos el rendimiento de jugadores con herramientas modernas y datos precisos para facilitar decisiones técnicas.
              </p>
              <img src='/about-us-img/scouting.jpg' alt='img-1' className='w-full h-64 object-cover rounded-2xl'/>
            </div>
          </div>

          <div className="group relative bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 border-opacity-30 dark:border-gray-700 dark:border-opacity-30 hover:border-red-500 hover:border-opacity-50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="text-xl font-bold">
                  Gestión de Equipos
                </h3>
              </div>
              <p className="leading-relaxed mb-4">
                Organiza plantillas, roles, calendarios y estadísticas desde un solo lugar con una interfaz ágil y potente.
              </p>
              <img src='/about-us-img/gestion.jpg' alt='img-1' className='w-full h-64 object-cover rounded-2xl'/>
            </div>
          </div>

          <div className="group relative bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 border-opacity-30 dark:border-gray-700 dark:border-opacity-30 hover:border-purple-500 hover:border-opacity-50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏆</span>
                <h3 className="text-xl font-bold">
                  Eventing Deportivo
                </h3>
              </div>
              <p className="leading-relaxed mb-4">
                Planea y administra torneos, amistosos y sesiones de prueba con seguimiento profesional.
              </p>
              <img src='/about-us-img/eventing.jpg' alt='img-1' className='w-full h-64 object-cover rounded-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}