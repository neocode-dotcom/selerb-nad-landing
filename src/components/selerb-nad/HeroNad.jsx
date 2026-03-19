import React from 'react';

const HeroNad = ({ onBuyClick }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[96px]"></div>
        </div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-300 text-sm font-medium tracking-wide">FÓRMULA PATENTADA DE 1000MG</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">Despierta tu</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                Energía Celular
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              El suplemento masculino más avanzado del mercado. <span className="text-white font-semibold">1000mg</span> de potencia celular para energía, rendimiento y vitalidad que se nota desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBuyClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-lg hover:from-blue-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
              >
                Activar Mi Energía
              </button>
              <button 
                onClick={() => scrollToSection('ingredientes')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl text-lg hover:bg-white/10 transition-all duration-300"
              >
                Ver Ingredientes
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Natural</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-white/10">
                  <img 
                    src="/assets/product/selerb-nad-real.jpeg" 
                    alt="Selerb NAD+ Men's Complex" 
                    className="w-full max-w-sm mx-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-bold">1000mg</span>
                  <span className="text-xs ml-1 opacity-80">por dosis</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg animate-bounce">
                  <span className="text-xs font-bold">-25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-white mb-1">1000mg</div>
            <div className="text-gray-400 text-sm">Potencia pura</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-white mb-1">30+</div>
            <div className="text-gray-400 text-sm">Días de suministro</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Vegetal</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-white mb-1">0</div>
            <div className="text-gray-400 text-sm">Efectos secundarios</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNad;