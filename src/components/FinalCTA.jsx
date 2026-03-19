export default function FinalCTA({ onBuyClick }) {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu energía?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Únete a miles de personas que ya han descubierto el poder de la suplementación metilada. Tu cuerpo te lo agradecerá.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$44.99</p>
              <p className="text-green-200 text-sm">Precio regular</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-400">$32.99</p>
              <p className="text-green-200 text-sm">Precio especial</p>
            </div>
          </div>
          <p className="text-green-200 text-sm">
            ⚡ Oferta por tiempo limitado
          </p>
        </div>
        
        <button 
          onClick={onBuyClick}
          className="inline-flex items-center justify-center gap-2 bg-amber-400 text-gray-900 px-10 py-5 rounded-xl text-xl font-bold hover:bg-amber-300 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Ordenar Ahora
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        
        <p className="mt-6 text-green-200 text-sm">
          📍 Recogida disponible en 1 hora | 🔒 Pago seguro
        </p>
      </div>
    </section>
  );
}
