import React from 'react';

const GuaranteeNad = ({ onBuyClick }) => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-6">
            <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Garantía de<span className="text-green-400"> 30 Días</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos tan seguros de la eficacia de Selerb NAD+ que te damos 30 días para probarlo. Sin riesgos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Devolución Fácil</h3>
            <p className="text-gray-400">Simplemente contactanos y te reembolsamos el 100%</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Sin Preguntas</h3>
            <p className="text-gray-400">No necesitas explicar por qué devuelves el producto</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Reembolso Total</h3>
            <p className="text-gray-400">Recibes cada centavo de vuelta, sin letras pequeñas</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">¿Qué esperas?</h3>
              <p className="text-gray-300">Tu transformación comienza hoy. Sin riesgo.</p>
            </div>
            <button 
              onClick={onBuyClick}
              className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl text-lg hover:from-green-400 hover:to-emerald-500 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              ¡Pedir Ahora!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeNad;