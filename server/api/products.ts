import type { Product } from '~/types';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Cross Back Performace Bra',
    href: '/shop/1',
    imageSrc: '/images/products/image-26.png',
    imageAlt: 'Model wearing the Cross Back Performance Bra in Dewberry.',
    price: '€45.00',
    color: 'Dewberry',
    category: 'top',
    description: 'Designed for comfort and style, this performance bra features a unique cross-back design that provides excellent support during your yoga sessions. The moisture-wicking fabric keeps you dry and comfortable.',
    details: 'Four-way stretch fabric for optimal movement. Removable cups for customizable coverage.',
    materials: '80% Recycled Polyester, 20% Spandex. Machine wash cold, hang to dry.',
  },
  {
    id: 2,
    name: 'Curved Seam Side Legging',
    href: '/shop/2',
    imageSrc: '/images/products/image-38.png',
    imageAlt: 'Model wearing the Curved Seam Side Legging in Dewberry.',
    price: '€65.00',
    color: 'Dewberry',
    category: 'bottom',
    description: 'Our signature leggings, updated with a flattering curved seam. The high-waisted design offers a secure fit, while the side pocket is perfect for storing your essentials on the go.',
    details: 'High-rise waistband with a compressive fit. Convenient side pocket for phone or keys.',
    materials: '75% Nylon, 25% Lycra. Machine wash cold with like colors.',
  },
  {
    id: 3,
    name: 'Long Sleeve Zip Front Performance Jacket',
    href: '/shop/3',
    imageSrc: '/images/products/image-36.png',
    imageAlt: 'Model wearing the Long Sleeve Zip Front Performance Jacket in Dewberry.',
    price: '€85.00',
    color: 'Dewberry',
    category: 'jacket',
    description: 'The perfect layering piece for to and from the studio. This lightweight jacket is made from a soft, breathable fabric and features a full-zip front for easy on and off.',
    details: 'Thumbholes to keep sleeves in place. Secure front zip pockets for your belongings.',
    materials: '90% Polyester, 10% Spandex. Water-repellent finish.',
  },
  {
    id: 4,
    name: 'Short Sleeve Fitted Performance Tee',
    href: '/shop/4',
    imageSrc: '/images/products/image-15.png',
    imageAlt: 'Model wearing the Short Sleeve Fitted Performance Tee in Dewberry.',
    price: '€42.00',
    color: 'Dewberry',
    category: 'top',
    description: 'A versatile tee that combines performance with everyday comfort. The fitted silhouette moves with you, while the ultra-soft Pima cotton feels great against your skin.',
    details: 'Crewneck design with a body-hugging fit. Breathable and lightweight.',
    materials: '100% Pima Cotton. Wash on a gentle cycle.',
  },
  // ... other products from original file can be added here if needed
];

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const id = query.id ? parseInt(query.id as string, 10) : null;

  if (id) {
    const product = allProducts.find((p) => p.id === id);
    if (product) {
      return product;
    }
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  }

  // For the shop page, we only want to show the first 4 "New Arrivals"
  return allProducts.slice(0, 4);
}); 