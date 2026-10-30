// Next.js ka Image component, photo ko optimize karke dikhata hai
import Image from "next/image";
// hamara banaya hua Header component
import Header from "@/components/Header";

// ye server component hai, isliye async ho sakta hai
export default async function Home() {
  // apni menu API se items maango (no-store = har baar naya data)
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });
  // response ko JSON mein badlo
  const items = await res.json();

  return (
    // poore page ka wrapper, light grey background
    <main className="min-h-screen bg-gray-100">
      {/* sabse upar orange header */}
      <Header />

      {/* content beech mein rahe, bade screen pe zyada failega nahi */}
      <div className="mx-auto max-w-5xl">
        {/* grid: mobile pe 2 columns, bade screen pe 4 */}
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          {/* har item ke liye ek card (abhi test wala, baad mein MenuCard banega) */}
          {items.map((item) => (
            <div key={item._id} className="rounded-2xl bg-white p-2 shadow">
              {/* photo, width aur height dena zaroori hai */}
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="h-32 w-full rounded-xl object-cover"
              />
              {/* naam aur price */}
              <p className="mt-2 font-bold">{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}