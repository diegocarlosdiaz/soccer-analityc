"use client";
import React from 'react';

export default function RedlabSection() {
  return (
    <section className="relative w-full py-16 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiénes Somos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10 shadow-xl hover:bg-opacity-10 transition-all duration-300">
            <p className="text-lg leading-relaxed text-white">
              <span className="font-bold text-red-400">RedLab</span> es una plataforma innovadora dedicada al{' '}
              <span className="font-semibold text-blue-300">scouting deportivo</span>,
              la <span className="font-semibold text-green-300">gestión integral de equipos</span> y la organización de{' '}
              <span className="font-semibold text-purple-300">eventos competitivos</span>.
              Nuestra misión es brindar tecnología de alto rendimiento a clubes, entrenadores y organizaciones
              para potenciar su desarrollo y descubrir el talento del futuro.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-gradient-to-br from-white to-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="text-xl font-bold text-white">
                  Scouting Inteligente
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Evaluamos y registramos el rendimiento de jugadores con herramientas modernas y datos precisos para facilitar decisiones técnicas.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="text-xl font-bold text-white">
                  Gestión de Equipos
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Organiza plantillas, roles, calendarios y estadísticas desde un solo lugar con una interfaz ágil y potente.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏆</span>
                <h3 className="text-xl font-bold text-white">
                  Eventing Deportivo
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Planea y administra torneos, amistosos y sesiones de prueba con seguimiento profesional.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-gradient-to-r from-white to-white bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10 shadow-xl">
            <p className="text-md text-white leading-relaxed">
              En <span className="font-bold text-red-400">RedLab</span>, combinamos pasión por el deporte con tecnología de vanguardia para transformar la forma en que se gestionan y desarrollan los equipos de fútbol y otras disciplinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}