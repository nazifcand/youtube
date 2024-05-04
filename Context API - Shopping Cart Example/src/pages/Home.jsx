import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      axios
        .get('/products.json')
        .then(res => setProducts(res.data))
    })()
  }, [])

  return (
    <div className="container mt-24">
      <ProductList products={products} />
    </div>
  );
};

export default Home;
