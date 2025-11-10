import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const seedProducts = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if products already exist
    const existingProducts = await ctx.db.query("products").first();
    if (existingProducts) {
      return "Products already seeded";
    }

    // Sample products data similar to what we'd get from fakestoreapi
    const sampleProducts = [
      {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest.",
        rating: { rate: 3.9, count: 120 }
      },
      {
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve.",
        rating: { rate: 4.1, count: 259 }
      },
      {
        title: "Mens Cotton Jacket",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        category: "men's clothing",
        description: "Great outerwear jackets for Spring/Autumn/Winter.",
        rating: { rate: 4.7, count: 500 }
      },
      {
        title: "Mens Casual Slim Fit",
        price: 15.99,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        category: "men's clothing",
        description: "The color could be slightly different between on the screen and in practice.",
        rating: { rate: 2.1, count: 430 }
      },
      {
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
        rating: { rate: 4.6, count: 400 }
      },
      {
        title: "Solid Gold Petite Micropave",
        price: 168,
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        rating: { rate: 3.9, count: 70 }
      },
      {
        title: "White Gold Plated Princess",
        price: 9.99,
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
        rating: { rate: 3, count: 400 }
      },
      {
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
        rating: { rate: 1.9, count: 100 }
      },
      {
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        category: "electronics",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers.",
        rating: { rate: 3.3, count: 203 }
      },
      {
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        category: "electronics",
        description: "Easy upgrade for faster boot up, shutdown, application load and response.",
        rating: { rate: 2.9, count: 470 }
      },
      {
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        category: "electronics",
        description: "3D NAND flash are applied to deliver high transfer speeds.",
        rating: { rate: 4.8, count: 319 }
      },
      {
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        category: "electronics",
        description: "Expand your PS4 gaming experience, Play anywhere.",
        rating: { rate: 4.8, count: 400 }
      },
      {
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        category: "electronics",
        description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display.",
        rating: { rate: 2.9, count: 250 }
      },
      {
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
        price: 999.99,
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        category: "electronics",
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side.",
        rating: { rate: 2.2, count: 140 }
      },
      {
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "women's clothing",
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester.",
        rating: { rate: 2.6, count: 235 }
      },
      {
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        category: "women's clothing",
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort.",
        rating: { rate: 2.9, count: 340 }
      },
      {
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        category: "women's clothing",
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.",
        rating: { rate: 3.8, count: 679 }
      },
      {
        title: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 9.85,
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        category: "women's clothing",
        description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort.",
        rating: { rate: 4.7, count: 130 }
      },
      {
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        category: "women's clothing",
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock.",
        rating: { rate: 4.5, count: 146 }
      },
      {
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        category: "women's clothing",
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.",
        rating: { rate: 3.6, count: 145 }
      }
    ];

    // Insert all products
    for (const product of sampleProducts) {
      await ctx.db.insert("products", product);
    }

    return "Products seeded successfully";
  },
});
