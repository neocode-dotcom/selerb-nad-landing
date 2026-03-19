# OptimacellT Landing Page

Landing page de alta conversión para OptimacellT, integrada con Shopify Storefront API.

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- Shopify Storefront API

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

1. Sube este proyecto a GitHub
2. Conecta el repo a Vercel en [vercel.com](https://vercel.com)
3. Añade el dominio personalizado: `optimacell.alonaturalpr.net`
4. Configura los DNS en tu proveedor

## Variables de entorno (Vercel)

Configura en Vercel Dashboard > Settings > Environment Variables:

| Variable | Valor |
|----------|-------|
| `VITE_SHOPIFY_DOMAIN` | `alonaturalpr.net` |
| `VITE_SHOPIFY_STOREFRONT_TOKEN` | Tu token de Storefront API |
| `VITE_SHOPIFY_VARIANT_ID` | `gid://shopify/ProductVariant/44609465647127` |

## DNS Configuration

En tu proveedor DNS (donde compraste el dominio), añade:

```
CNAME  optimacell  cname.vercel-dns.com
```

O sigue las instrucciones específicas que Vercel te muestra al añadir el dominio.

## Estructura

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── HowToUse.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ShopifyBuyButton.jsx
├── assets/product/    # Imágenes del producto
├── App.jsx
└── index.css
```
