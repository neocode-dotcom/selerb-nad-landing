import React, { useState, useEffect } from 'react';
import ShopifyBuyButton from '../ShopifyBuyButton';

const CheckoutNad = () => {
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [stock] = useState(7);

  const CURRENT_PRICE = 45.99;
  const COMPARE_PRICE = 59.99;
  const DISCOUNT = Math.round((1 - CURRENT_PRICE / COMPARE_PRICE) * 100);
  const totalPrice = (CURRENT_PRICE * quantity).toFixed(2);

  const VARIANT_ID = import.meta.env.VITE_SELERB_NAD_VARIANT_ID || 'gid://shopify/ProductVariant/00000000000000';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white" id="checkout-nad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Oferta termina en: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Transforma tu Energía<span className="text-blue-600"> Hoy</span>
          </h2>
          <p className="text-gray-600 text-lg">Únete a los +15.000 hombres que ya recuperaron su vitalidad</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
              <span className="text-white font-semibold">🔥 {stock} productos restantes</span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
                <img 
                  src="/assets/product/selerb-nad-real.jpeg" 
                  alt="Selerb NAD+ MEN'S COMPLEX" 
                  className="w-48 h-auto object-contain drop-shadow-lg"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Selerb NAD+ Men's Complex
                </h3>
                <p className="text-gray-500 mb-4 font-medium">
                  Fórmula de 1000mg | Suministro para 30 días
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">${CURRENT_PRICE}</span>
                  <span className="text-xl text-gray-400 line-through">${COMPARE_PRICE}</span>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-md">
                    -{DISCOUNT}%
                  </span>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Cantidad</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        -
                      </button>
                      <input 
                        type="text"
                        readOnly
                        value={quantity}
                        className="w-14 h-10 border-t border-b border-gray-300 text-center font-bold text-gray-900"
                      />
                      <button 
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    {quantity > 1 && (
                      <div className="text-lg text-blue-600 font-bold">
                        Total: ${totalPrice}
                      </div>
                    )}
                  </div>
                </div>
                
                <ShopifyBuyButton 
                  variantId={VARIANT_ID}
                  quantity={quantity}
                  buttonText="ORDENAR AHORA" 
                  className="w-full text-lg py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold uppercase tracking-wider !rounded-xl shadow-lg transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pago seguro 256-bit
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="font-medium">Visa</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="font-medium">Mastercard</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">PayPal</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Apple Pay</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutNad;