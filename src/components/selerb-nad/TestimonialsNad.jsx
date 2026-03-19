import React from 'react';

const TestimonialsNad = () => {
  const testimonials = [
    {
      name: 'Carlos M.',
      age: '42 años',
      location: 'San Juan, Puerto Rico',
      rating: 5,
      title: 'Me siento como a los 30',
      content: 'Después de 3 meses usando Selerb NAD+, mi energía es completamente diferente. Me levanto sin alarma, entreno por las mañanas y mi rendimiento en el trabajo ha mejorado drasticamente. Mi mujer nota el cambio.',
      verified: true
    },
    {
      name: 'Antonio R.',
      age: '38 años',
      location: 'Carolina, Puerto Rico',
      rating: 5,
      title: 'Resultados en 2 semanas',
      content: 'Era escéptico pero decidí probarlo. A las dos semanas ya notaba más energía y claridad mental. A los 2 meses mis análisis de sangre muestran niveles optimizados. Increíble.',
      verified: true
    },
    {
      name: 'Javier L.',
      age: '45 años',
      location: 'Caguas, Puerto Rico',
      rating: 5,
      title: 'El mejor suplemento que he probado',
      content: 'He probado muchos suplementos masculinos. Selerb NAD+ es diferente. No es solo energía, es vitality real. Mi médico me ha dicho que mis marcadores están mejor que nunca.',
      verified: true
    },
  ];

  return (
    <div className="py-24 bg-gray-50" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            +15.000 clientes satisfechos
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Lo que<span className="text-green-600"> dicen los hombres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reseñas verificadas de hombres reales que han transformado su vida con Selerb NAD+.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{testimonial.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</div>
                    </div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Verificado</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-700 font-medium">Únete a +15.000 hombres satisfechos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsNad;