import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "FLICKA Bags",
    price: 125000,
    description: 'Flicka adalah brand lokal berbasis di Sidoarjo, didirikan pada Desember 2014 & digagas oleh Putri Rizka dan Agung Raharja dengan produk utamanya yaitu tas. Koleksi tas Flicka mengikuti berbagai tren masa kini, jenis dan pilihannya beragam dengan tema yang banyak dilirik oleh wanita muda di Indonesia..' ,
    image: "/assets/D.jpg",
  },
  {
    id: 2,
    name: "MERCHE Bags",
    price: 299000,
    description: 'Merche Id adalah sebuah brand fashion lokal asal Indonesia yang memproduksi berbagai macam produk pakaian dan aksesoris berkualitas untuk memaksimalkan tampilan kamu. Peduli dengan aneka preferensi gaya wanita yang begitu beragam. Merche Id juga menghadirkan pilihan produk yang lengkap untuk puaskan selera kamu..',
    image: "/assets/M.jpg",
  },
  {
    id: 3,
    name: " PEAU Bags",
    price: 900000,
    description: 'Kalau kamu senang dengan gaya yang simple dan chic, maka tas dari PEAU Bag pasti cocok dengan seleramu. Brand tas lokal ini diciptakan oleh perempuan asal Bandung, Jawa Barat..',
    image: "/assets/P.jpg",
  },
    {
    id: 4,
    name: "PUROTTI Bags",
    price: 375000,
    description: 'Purotti adalah brand tas perempuan lokal berbahan kulit sapi yang mengusung desain minimalis. Desainnya pun tergolong timeless dan tak akan lekang oleh waktu. Kamu bisa memakainya dengan berbagai macam gaya pakaian..',
    image: "/assets/P.jpg",
  },
    {
    id: 5,
    name: "JOSVLI Bags",
    price: 600000,
    description: ' Merupakan brand tas lokal asal Jakarta, JOSVLI mendesain tas yang terinspirasi dengan desain dan seni kontemporer. Mereka menambahkan elemen dan sentuhan berbeda untuk mewakili gaya hidup modern..',
    image: "/assets/J.jpg",
  },
    {
    id: 6,
    name: "HOLDREY Bags",
    price: 350000,
    description: ' HOLDREY menjadi brand tas lokal yang cukup populer di kalangan anak muda. Kualitas dan desain yang ditawarkan memang sangat menarik perhatian..',
    image: "/assets/H.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Toko Tas Wanita Brand Lokal </h1>
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Tutup Keranjang" : "Lihat Keranjang"}
      </button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <ProductList products={initialProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
