// restaurant ka naam aur table number baad mein URL se aayenge, abhi default values hain
export default function Header({
  restaurantName = "Spice Route Cafe",
  tableNo = 5,
}) {
  return (
    // orange background, neeche ke corners gol, andar padding
    <header className="rounded-b-3xl bg-orange-600 px-4 pb-6 pt-5 text-white">
      {/* upar ki row: naam left mein, rating right mein */}
      <div className="flex items-center justify-between">
        <div>
          {/* chhota text */}
          <p className="text-xs opacity-90">You are at Table {tableNo}</p>
          {/* bada bold naam */}
          <h1 className="text-2xl font-extrabold">{restaurantName}</h1>
        </div>
        {/* rating wala white pill */}
        <div className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-orange-600">
          ★ 4.5 · 15-20 min
        </div>
      </div>

      {/* search bar, abhi sirf dikhane ke liye */}
      <input
        type="text"
        placeholder="Search paneer, biryani, dosa..."
        className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-sm text-gray-800 outline-none"
      />
    </header>
  );
}