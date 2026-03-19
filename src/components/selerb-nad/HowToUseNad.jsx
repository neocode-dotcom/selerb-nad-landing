import React from 'react';

const HowToUseNad = () => {
  return (
    <div className="py-20 bg-white" id="como-tomar">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              M&aacute;ximo Efecto con SELERB NAD+
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Sigue el r&eacute;gimen de los hombres de alto impacto. La consistencia es la clave para desbloquear una energ&iacute;a sin l&iacute;mites.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <p className="ml-4 text-gray-300 text-lg">
                  <strong className="text-white block">2 c&aacute;psulas diarias</strong>
                  Como tu dosis base diaria de vitalidad.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <p className="ml-4 text-gray-300 text-lg">
                  <strong className="text-white block">En ayunas o con est&oacute;mago vac&iacute;o</strong>
                  Recomendado al iniciar tu d&iacute;a para una absorci&oacute;n celular superior.
                </p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-black p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent"></div>
            <div className="text-center relative z-10 backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20">
              <span className="block text-5xl mb-2 text-white">🔥</span>
              <p className="text-white text-xl font-bold mt-4">1000mg de Potencia por cada porci&oacute;n.</p>
              <p className="text-gray-300 mt-2 text-sm italic">Siente la diferencia en d&iacute;as, transformaci&oacute;n en semanas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseNad;
