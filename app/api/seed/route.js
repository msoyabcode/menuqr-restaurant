// JSON response bhejne ke liye
import { NextResponse } from "next/server";
// database connect karne wala helper
import dbConnect from "@/lib/db";
// hamara MenuItem model
import MenuItem from "@/models/MenuItem";

// in dishes ko TheMealDB mein dhundhenge (naam browser mein check karke badal sakte ho)
const dishNames = [
  "Chicken Handi",
  "Matar Paneer",
  "Palak Paneer",
  "Dal fry",
  "Spicy Arrabiata Penne",
  "Kung Pao Chicken",
  "Chocolate Gateau",
  "Banana Pancakes",
  "Apple Frangipan Tart",
  "Beef and Mustard Pie",
];

// jab /api/seed khulega tab ye function chalega
export async function GET() {
  // pehle database connect karo
  await dbConnect();

  // yahan final items jama honge
  const items = [];

  // har dish ke naam ke liye ek ek karke API call karo
  for (const dish of dishNames) {
    // naam mein space ho sakta hai, isliye encodeURIComponent use kiya
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(dish)}`
    );
    // response ko JSON mein badlo
    const data = await res.json();

    // agar koi match nahi mila to meals null hota hai, is dish ko skip karo
    if (!data.meals) continue;

    // pehla match lo
    const meal = data.meals[0];

    // API ka data hamare MenuItem ke format mein badlo aur list mein daalo
    items.push({
      // dish ka naam
      name: meal.strMeal,
      // chhota description: desh + category se banaya
      description: `${meal.strArea} ${meal.strCategory.toLowerCase()} dish`,
      // price 120 se 350 ke beech (API mein price nahi hota, hum khud dete hain)
      price: 120 + Math.floor(Math.random() * 24) * 10,
      // photo ka link
      image: meal.strMealThumb,
      // category jaise Chicken, Vegetarian
      category: meal.strCategory,
      // Vegetarian, Vegan ya Dessert ho to veg, baaki non-veg
      isVeg: ["Vegetarian", "Vegan", "Dessert"].includes(meal.strCategory),
      // rating 4.0 se 4.8 ke beech
      rating: Number((4 + Math.random() * 0.8).toFixed(1)),
      // banne ka time 10 se 25 minute
      prepTime: 10 + Math.floor(Math.random() * 16),
    });
  }

  // purane items hata do, taaki dobara chalane pe duplicate na bane
  await MenuItem.deleteMany({});
  // saare naye items ek saath save karo
  await MenuItem.insertMany(items);

  // kitne items bane, wo wapas bhejo
  return NextResponse.json({ message: "Seeded", count: items.length });
}