import { useState } from 'react';

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const CREATE_CART_MUTATION = `
  mutation createCart($variantId: ID!, $quantity: Int!) {
    cartCreate(input: {
      lines: [{ quantity: $quantity, merchandiseId: $variantId }]
    }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export default function ShopifyBuyButton({ 
  variantId,
  quantity = 1,
  buttonText = 'Añadir al carrito',
  className = '',
  onAddedToCart 
}) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    if (!variantId) {
      console.error('No variantId provided');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query: CREATE_CART_MUTATION,
          variables: { variantId, quantity }
        })
      });

      const { data, errors } = await response.json();

      if (errors || data?.cartCreate?.userErrors?.length > 0) {
        throw new Error(errors?.[0]?.message || data?.cartCreate?.userErrors?.[0]?.message);
      }

      const checkoutUrl = data.cartCreate.cart.checkoutUrl;
      window.location.href = checkoutUrl;
      
      setAdded(true);
      if (onAddedToCart) onAddedToCart();
      
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      window.location.href = `https://${SHOPIFY_DOMAIN}/checkout`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`
        inline-flex items-center justify-center gap-2 
        bg-green-700 text-white px-6 py-3 rounded-xl 
        font-semibold hover:bg-green-800 
        transition-all duration-300 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${added ? 'bg-green-600' : ''}
        ${className}
      `}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Procesando...
        </>
      ) : added ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          ¡Añadido!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {buttonText}
        </>
      )}
    </button>
  );
}

export function BuyButtonInline({ 
  variantId,
  productTitle = "Optimacell",
  productDescription = "Nutrición Avanzada en Forma Activa",
  price = "32.99",
  compareAtPrice = "44.99",
  imageSrc = "https://cdn.shopify.com/s/files/1/2580/1084/files/Optima2.jpg?v=1771606626",
  onOpenCheckout 
}) {
  const effectiveVariantId = variantId || import.meta.env.VITE_SHOPIFY_VARIANT_ID;
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice) > parseFloat(price);
  const discountPercent = hasDiscount 
    ? Math.round((1 - parseFloat(price) / parseFloat(compareAtPrice)) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={imageSrc} 
          alt={productTitle} 
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-bold text-gray-900">{productTitle}</h4>
          <p className="text-sm text-gray-500">{productDescription}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through ml-2">${compareAtPrice}</span>
          )}
        </div>
        {hasDiscount && (
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
            -{discountPercent}%
          </span>
        )}
      </div>
      
      <ShopifyBuyButton 
        variantId={effectiveVariantId}
        buttonText="Comprar ahora" 
        className="w-full"
        onAddedToCart={onOpenCheckout}
      />
      
      <p className="text-xs text-gray-500 text-center mt-3">
        Pago seguro
      </p>
    </div>
  );
}
