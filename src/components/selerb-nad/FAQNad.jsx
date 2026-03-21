import React, { useState } from 'react';

const FAQNad = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo tardaré en ver resultados?',
      answer: 'La mayoría de los usuarios reportan sentir más energía en los primeros 7-14 días. Los beneficios completos, incluyendo claridad mental y mejora en el rendimiento, se observan típicamente entre 4-8 semanas de uso consistente.'
    },
    {
      question: '¿Selerb NAD+ tiene efectos secundarios?',
      answer: 'Selerb NAD+ está formulado con ingredientes 100% naturales y vegetarianos. No contiene OMG (organismos genéticamente modificados), gluten, ni estimulantes agresivos. Los efectos secundarios son extremadamente raros. Si tienes alguna condición médica, consulta con tu médico antes de usar.'
    },
    {
      question: '¿Cómo debo tomar Selerb NAD+?',
      answer: 'La dosis recomendada es de 2 cápsulas diarias, preferiblemente por la mañana con el estómago vacío o junto con el desayuno. Para mejores resultados, toma las cápsulas a la misma hora cada día.'
    },
    {
      question: '¿Cuánto tiempo dura el efecto?',
      answer: 'Los efectos de Selerb NAD+ se acumulan con el uso continuado. Una vez que estableces tu rutina de suplementación, los beneficios se mantienen mientras sigas tomándolo. Muchos usuarios reportan mejoras sostenidas después de 3-6 meses de uso.'
    },
    {
      question: '¿Es seguro combinarlo con otros suplementos?',
      answer: 'Selerb NAD+ está diseñado para ser compatible con la mayoría de los suplementos. Sin embargo, si estás tomando medicamentos recetados o tienes condiciones médicas, te recomendamos consultar con tu profesional de salud.'
    },
    {
      question: '¿Desde qué edad puedo tomar Selerb NAD+?',
      answer: 'Recomendamos Selerb NAD+ para hombres adultos mayores de 18 años. Es ideal para hombres mayores de 30 que desean mantener su energía y vitalidad.'
    },
    {
      question: '¿El producto viene discretamente empacado?',
      answer: 'Sí, todos los pedidos se envían en empaques discretos sin información visible del contenido. Tu privacidad está completamente protegida.'
    },
    {
      question: '¿Cuánto tiempo dura el efecto?',
      answer: 'Los efectos de Selerb NAD+ se acumulan con el uso continuado. Una vez que estableces tu rutina de suplementación, los beneficios se mantienen mientras sigas tomándolo. Muchos usuarios reportan mejoras sostenidas después de 3-6 meses de uso.'
    },
  ];

  return (
    <div className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Todo lo que<span className="text-blue-600"> necesitas saber</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-md' : ''
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Aún tienes dudas?</p>
          <a href="https://wa.link/ltkcs1" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
            Chatea con nosotros →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQNad;