// products.js - sample data used by the Items, Home and ProductDetail pages
import novaImage from "../img/ZRP-Nova.webp";
import liteImage from "../img/ZRP-Lite.webp";
import proImage from "../img/ZRP-PRO.webp";
import earbudsImage from "../img/ZRP-Earbuds.webp";
import chargerImage from "../img/ZRP-Charger.webp";
import caseImage from "../img/ZRP-Case.webp";

const products = [
  {
    id: 1,
    name: "ZRP Nova X",
    category: "Smartphones",
    price: 12000,
    image: novaImage,
    description: "6.7-inch AMOLED display, 8GB RAM, 256GB storage.",
  },
  {
    id: 2,
    name: "ZRP Lite 5G",
    category: "Smartphones",
    price: 8900,
    image: liteImage,
    description: "6.5-inch display, 6GB RAM, 128GB storage, 5G ready.",
  },
  {
    id: 3,
    name: "ZRP Pro Max",
    category: "Smartphones",
    price: 20500,
    image: proImage,
    description: "Triple camera, 12GB RAM, 512GB storage.",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    category: "Accessories",
    price: 1299,
    image: earbudsImage,
    description: "Bluetooth 5.3 with a 20-hour battery charging case.",
  },
  {
    id: 5,
    name: "Fast Charger 33W",
    category: "Accessories",
    price: 650,
    image: chargerImage,
    description: "USB-C fast charger with cable included.",
  },
  {
    id: 6,
    name: "Shockproof Case",
    category: "Accessories",
    price: 350,
    image: caseImage,
    description: "Slim, drop-tested case with raised camera edges.",
  },
];

export default products;
