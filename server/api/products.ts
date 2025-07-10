import type { Product } from '~/types';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Short Sleeve Fitted Performance Tee',
    href: '/shop/1',
    image: '/images/products/image-26.png',
    imageAlt: 'Model wearing the Short Sleeve Fitted Performance Tee in Sage.',
    price: 45.00,
    color: 'Sage',
    category: 'top',
    tags: ['new-arrival'],
    description: 'A versatile tee that combines performance with everyday comfort. The fitted silhouette moves with you, while the ultra-soft Pima cotton feels great against your skin.',
    details: 'Crewneck design with a body-hugging fit. Breathable and lightweight.',
    materials: '100% Pima Cotton. Wash on a gentle cycle.',
  },
  {
    id: 2,
    name: 'Curved Seam Side Legging',
    href: '/shop/2',
    image: '/images/products/image-38.png',
    imageAlt: 'Model wearing the Curved Seam Side Legging in Sage.',
    price: 65.00,
    color: 'Sage',
    category: 'bottom',
    tags: ['new-arrival'],
    description: 'Our signature leggings, updated with a flattering curved seam. The high-waisted design offers a secure fit, while the side pocket is perfect for storing your essentials on the go.',
    details: 'High-rise waistband with a compressive fit. Convenient side pocket for phone or keys.',
    materials: '75% Nylon, 25% Lycra. Machine wash cold with like colors.',
  },
  {
    id: 3,
    name: 'Cross Back Performance Bra Set',
    href: '/shop/3',
    image: '/images/products/image-36.png',
    imageAlt: 'Model wearing the Cross Back Performance Bra Set in Lavender.',
    price: 85.00,
    color: 'Lavender',
    category: 'set',
    tags: ['new-arrival'],
    description: 'Complete your workout look with this matching set featuring our signature cross-back bra and high-waisted leggings. Designed for maximum comfort and style during your yoga practice.',
    details: 'Includes cross-back sports bra and matching high-waisted leggings. Four-way stretch fabric for optimal movement.',
    materials: '80% Recycled Polyester, 20% Spandex. Machine wash cold, hang to dry.',
  },
  {
    id: 4,
    name: 'Short Sleeve Fitted Performance Tee',
    href: '/shop/4',
    image: '/images/products/image-15.png',
    imageAlt: 'Model wearing the Short Sleeve Fitted Performance Tee in Ocean Blue.',
    price: 42.00,
    color: 'Ocean Blue',
    category: 'top',
    tags: ['new-arrival'],
    description: 'A versatile tee that combines performance with everyday comfort. The fitted silhouette moves with you, while the ultra-soft Pima cotton feels great against your skin.',
    details: 'Crewneck design with a body-hugging fit. Breathable and lightweight.',
    materials: '100% Pima Cotton. Wash on a gentle cycle.',
  },
  {
    id: 5,
    name: 'Long Sleeve Zip Front Performance Jacket',
    href: '/shop/5',
    image: '/images/products/jacket-sage.png',
    imageAlt: 'Model wearing the Long Sleeve Zip Front Performance Jacket in Sage.',
    price: 85.00,
    color: 'Sage',
    category: 'jacket',
    tags: ['new-arrival'],
    description: 'The perfect layering piece for to and from the studio. This lightweight jacket is made from a soft, breathable fabric and features a full-zip front for easy on and off.',
    details: 'Thumbholes to keep sleeves in place. Secure front zip pockets for your belongings.',
    materials: '90% Polyester, 10% Spandex. Water-repellent finish.',
  },
  {
    id: 6,
    name: 'Long Sleeve Zip Front Performance Jacket',
    href: '/shop/6',
    image: '/images/products/jacket-dewberry.png',
    imageAlt: 'Model wearing the Long Sleeve Zip Front Performance Jacket in Dewberry.',
    price: 85.00,
    color: 'Dewberry',
    category: 'jacket',
    tags: ['new-arrival'],
    description: 'The perfect layering piece for to and from the studio. This lightweight jacket is made from a soft, breathable fabric and features a full-zip front for easy on and off.',
    details: 'Thumbholes to keep sleeves in place. Secure front zip pockets for your belongings.',
    materials: '90% Polyester, 10% Spandex. Water-repellent finish.',
  },
  // ... other products from original file can be added here if needed
];

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const id = query.id ? parseInt(query.id as string, 10) : null;
  const tags = query.tags as string;
  const limit = query.limit ? parseInt(query.limit as string, 10) : undefined;

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

  let products = allProducts;

  if (tags) {
    products = products.filter(p => p.tags && p.tags.includes(tags));
  }

  if (limit) {
    products = products.slice(0, limit);
  }

  return products;
}); 