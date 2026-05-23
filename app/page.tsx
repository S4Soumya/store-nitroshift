"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "NitroShift Racing Hoodie",
    category: "Oversized Hoodie",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Midnight Rider Tee",
    category: "Streetwear T-Shirt",
    price: "₹1,199",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "MotoStreet Oversized",
    category: "Biker Fit",
    price: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "NitroShift Blackout",
    category: "Premium Hoodie",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [showPayment, setShowPayment] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  return (
    <main className="bg-[#f5f5f5] min-h-screen text-black">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            <button className="text-3xl">
              ☰
            </button>

            <nav className="hidden md:flex gap-8 font-semibold text-lg">
              <button className="hover:text-orange-500 transition">
                MEN
              </button>

              <button className="hover:text-orange-500 transition">
                WOMEN
              </button>

              <button className="hover:text-orange-500 transition">
                BIKERWEAR
              </button>
            </nav>

          </div>

          {/* LOGO */}
          <div className="text-center">

            <h1 className="text-3xl font-black tracking-[0.3em] text-orange-500">
              NITROSHIFT
            </h1>

            <p className="text-xs text-gray-500">
              Ride • Shift • Repeat
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border rounded-full px-4 py-2 outline-none w-60"
            />

            <button
              onClick={() => setShowLogin(true)}
              className="text-2xl"
            >
              👤
            </button>

            <button
              onClick={() => setShowOrders(true)}
              className="text-2xl"
            >
              🛒
            </button>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <h2 className="text-6xl md:text-8xl font-black leading-none">
              SUMMER
              <br />
              STREETWEAR
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Premium biker inspired hoodies and oversized tees built for riders.
            </p>

            <button className="mt-8 bg-orange-500 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
              Explore Collection
            </button>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex gap-8">

        {/* SIDEBAR */}
        <aside className="hidden lg:block w-72 bg-white rounded-2xl border p-5 h-fit">

          <h3 className="text-2xl font-bold mb-5">
            Categories
          </h3>

          <div className="space-y-4 text-gray-700">

            <label className="flex gap-3">
              <input type="checkbox" />
              Hoodies
            </label>

            <label className="flex gap-3">
              <input type="checkbox" />
              Oversized Tees
            </label>

            <label className="flex gap-3">
              <input type="checkbox" />
              Joggers
            </label>

            <label className="flex gap-3">
              <input type="checkbox" />
              Biker Shirts
            </label>

          </div>

        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">

          <div className="flex justify-between items-center mb-8">

            <div>
              <h2 className="text-4xl font-bold">
                NitroShift Collection
              </h2>

              <p className="text-gray-500 mt-2">
                90+ premium products
              </p>
            </div>

            <select className="border rounded-xl px-4 py-3 bg-white">
              <option>Sort By</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Newest</option>
            </select>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border hover:shadow-2xl transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {product.category}
                  </p>

                  <p className="text-2xl font-black mt-3">
                    {product.price}
                  </p>

                  <button
                    onClick={() => setShowPayment(true)}
                    className="w-full bg-black text-white py-3 rounded-xl mt-5 hover:bg-orange-500 transition"
                  >
                    Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl w-full max-w-md p-6">

            <h2 className="text-3xl font-black mb-6">
              Payment
            </h2>

            <input
              placeholder="Card Number"
              className="w-full border rounded-xl p-3 mb-4"
            />

            <input
              placeholder="Card Holder Name"
              className="w-full border rounded-xl p-3 mb-4"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">

              <input
                placeholder="MM/YY"
                className="border rounded-xl p-3"
              />

              <input
                placeholder="CVV"
                className="border rounded-xl p-3"
              />

            </div>

            <button
              onClick={() => alert("Demo Payment Successful 🚀")}
              className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition"
            >
              Pay Now
            </button>

            <button
              onClick={() => setShowPayment(false)}
              className="w-full border py-3 rounded-xl mt-3"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl w-full max-w-md p-6">

            <h2 className="text-3xl font-black mb-6">
              Login
            </h2>

            <input
              placeholder="Email"
              className="w-full border rounded-xl p-3 mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl p-3 mb-4"
            />

            <button
              onClick={() => alert("Demo Login Successful 🚀")}
              className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition"
            >
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full border py-3 rounded-xl mt-3"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* ORDERS MODAL */}
      {showOrders && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl w-full max-w-md p-6">

            <h2 className="text-3xl font-black mb-6">
              Your Orders
            </h2>

            <div className="border rounded-xl p-4 mb-4">
              NitroShift Racing Hoodie — Shipped 🚚
            </div>

            <div className="border rounded-xl p-4">
              Midnight Rider Tee — Processing ⚡
            </div>

            <button
              onClick={() => setShowOrders(false)}
              className="w-full bg-black text-white py-3 rounded-xl mt-5 hover:bg-orange-500 transition"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  );
}