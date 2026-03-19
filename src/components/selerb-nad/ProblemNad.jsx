import React from 'react';

const ProblemNad = ({ onBuyClick }) => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            ¿Sientes que tu cuerpo te<span className="text-red-600"> abandona</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No estás solo. Millones de hombres experimentan la misma disminución de energía, vitalidad y rendimiento a medida que pasan los años.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 rounded-2xl p-8 text-center border border-red-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fatiga Crónica</h3>
            <p className="text-gray-600">
              Te despiertas exhausto, sin energía para el día. El café ya no es suficiente.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-2xl p-8 text-center border border-red-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Caída de Rendimiento</h3>
            <p className="text-gray-600">
              Tu mente no responde como antes. La concentración y claridad mental desaparecen.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-2xl p-8 text-center border border-red-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pérdida de Vitalidad</h3>
            <p className="text-gray-600">
              Las actividades que antes disfrutabas ahora parecen una carga. Tu pasión se apagó.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              La buena noticia: No tiene por qué ser así
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Existe una solución científica que activa tus células desde el interior. No es magia, es biología.
            </p>
            <button 
              onClick={onBuyClick}
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Recuperar Mi Energía Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemNad;