import React from 'react';

const benefitsData = [
  {
    title: 'Energía Celular+',
    description: 'Activación a nivel celular con Resveratrol y CoQ10. Dos potentes antioxidantes que nutren y recargan las mitocondrias, combatiendo la fatiga profunda desde la primera dosis.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stats: '+47% energía',
  },
  {
    title: 'Nitric Oxide Booster',
    description: 'Flujo sanguíneo y resistencia mejorados gracias a L-Arginina y L-Citrullina, combinados con los adaptógenos de la raíz de Maca para un rendimiento imparable.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stats: '+35% flujo',
  },
  {
    title: 'Prostate Health+',
    description: 'La acción antiinflamatoria de la Cúrcuma unida a la eficacia probada del Saw Palmetto. Bienestar masculino, protección de la próstata y longevidad integral.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: '100% natural',
  },
  {
    title: 'Claridad Mental+',
    description: 'Optimiza la función cerebral con ácidos grasos omega-3 y Ginkgo Biloba. Memoria, concentración y función cognitiva mejoradas para que pienses con claridad.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    stats: '+28% enfoque',
  },
  {
    title: 'Recuperación+',
    description: 'Reduce el tiempo de recuperación muscular y acelera la reparación celular post-entrenamiento. Sácale más provecho a tu esfuerzo físico.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    stats: '2x recuperación',
  },
  {
    title: 'Sistema Inmunológico+',
    description: 'Fortalece tus defensas con Zinc y Vitaminas del complejo B. Tu cuerpo más preparado para enfrentar el día a día con energía constante.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stats: 'Inmune reforzado',
  },
];

const BenefitsNad = () => {
  return (
    <div className="py-24 bg-gray-50 overflow-hidden" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            6 beneficios en 1 fórmula
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Transforma tu<span className="text-blue-600"> cuerpo y mente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada componente ha sido seleccionado estratégicamente para proporcionarte resultados visibles desde la primera semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-blue-50 px-4 py-2 rounded-bl-xl">
                <span className="text-blue-600 font-bold text-sm">{benefit.stats}</span>
              </div>
              <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-100 transition-colors rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-medium">Sin efectos secundarios conocidos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsNad;