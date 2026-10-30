// mongoose import karo, model banane ke liye
import mongoose from "mongoose";

// schema = ek menu item mein kaun se fields honge aur unka type kya hoga
const menuItemSchema = new mongoose.Schema(
  {
    // item ka naam, zaroori hai
    name: { type: String, required: true },

    // chhota description
    description: { type: String },

    // price, zaroori hai
    price: { type: Number, required: true },

    // photo ka URL (TheMealDB se aayega)
    image: { type: String },

    // category, jaise Chicken, Vegetarian, Dessert
    category: { type: String },

    // veg hai ya nahi, default veg
    isVeg: { type: Boolean, default: true },

    // rating, default 4
    rating: { type: Number, default: 4 },

    // banne mein kitne minute lagenge
    prepTime: { type: Number },

    // abhi available hai ya nahi, default available
    isAvailable: { type: Boolean, default: true },
  },
  // createdAt aur updatedAt apne aap ban jayenge
  { timestamps: true }
);

// agar model pehle se bana hai to wahi use karo, nahi to naya banao (Next.js reload ke liye)
export default mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
