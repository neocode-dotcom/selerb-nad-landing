import React from 'react';

const IngredientsNad = () => {
  const ingredients = [
    {
      name: 'Resveratrol',
      amount: '200mg',
      benefit: 'Antioxidante celular',
      description: 'Potente antioxidante que activa las proteínas sirtuinas y promueve la longevidad celular.',
      role: 'key'
    },
    {
      name: 'CoQ10 (Coenzima Q10)',
      amount: '100mg',
      benefit: 'Energía mitocondrial',
      description: 'Esencial para la producción de ATP y la función mitocondrial.',
      role: 'key'
    },
    {
      name: 'L-Arginina',
      amount: '300mg',
      benefit: 'Flujo sanguíneo',
      description: 'Precursor del óxido nítrico, mejora la circulación y rendimiento.',
      role: 'key'
    },
    {
      name: 'L-Citrullina',
      amount: '200mg',
      benefit: 'Resistencia',
      description: 'Aumenta los niveles de arginina y mejora la producción de energía.',
      role: 'key'
    },
    {
      name: 'Extracto de Saw Palmetto',
      amount: '160mg',
      benefit: 'Salud prostática',
      description: 'Apoya la función prostática y el equilibrio hormonal masculino.',
      role: 'support'
    },
    {
      name: 'Extracto de Cúrcuma',
      amount: '100mg',
      benefit: 'Antiinflamatorio',
      description: 'Potente antiinflamatorio natural para recuperación y bienestar.',
      role: 'support'
    },
    {
      name: 'Raíz de Maca',
      amount: '100mg',
      benefit: 'Adaptógeno',
      description: 'Incrementa la energía, resistencia y equilibrio hormonal.',
      role: 'support'
    },
    {
      name: 'Omega-3 (EPA/DHA)',
      amount: '80mg',
      benefit: 'Función cerebral',
      description: 'Ácidos grasos esenciales para la salud cognitiva y cardiovascular.',
      role: 'support'
    },
    {
      name: 'Zinc',
      amount: '15mg',
      benefit: 'Sistema inmune',
      description: 'Mineral esencial para el sistema inmunológico y producción hormonal.',
      role: 'support'
    },
    {
      name: 'Vitamina B12',
      amount: '100mcg',
      benefit: 'Energía natural',
      description: 'Vital para la producción de energía y función neurológica.',
      role: 'support'
    },
  ];

  return (
    <div className="py-24 bg-white" id="ingredientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Científica y Natural
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            10 Ingredientes<span className="text-blue-600"> , 1000mg de potencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada ingrediente ha sido seleccionado por su eficacia probada y sinergia entre ellos para maximizar resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                ingredient.role === 'key' 
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400' 
                  : 'bg-gray-50 border-gray-100 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{ingredient.name}</h3>
                  <span className={`text-sm font-medium ${ingredient.role === 'key' ? 'text-blue-600' : 'text-gray-500'}`}>
                    {ingredient.benefit}
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  ingredient.role === 'key' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {ingredient.amount}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{ingredient.description}</p>
              {ingredient.role === 'key' && (
                <div className="mt-3 pt-3 border-t border-blue-100">
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                    ★ Ingrediente clave
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-white">
              <div className="text-3xl font-bold">1000mg</div>
              <div className="text-slate-400 text-sm">por dosis diaria</div>
            </div>
            <div className="w-px h-12 bg-slate-600 hidden sm:block"></div>
            <div className="text-white">
              <div className="text-3xl font-bold">60</div>
              <div className="text-slate-400 text-sm">cápsulas por frasco</div>
            </div>
            <div className="w-px h-12 bg-slate-600 hidden sm:block"></div>
            <div className="text-white">
              <div className="text-3xl font-bold">30</div>
              <div className="text-slate-400 text-sm">días de suministro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsNad;