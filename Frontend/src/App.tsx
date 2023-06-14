import ProductCard, { Product } from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [prod, setProd] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/prod/").then(response => setProd(response.data))
  }, []);

  

  return (
    <div className="App">
      <h1>The product</h1>
      <div>
        {prod.length > 0
          ? prod?.map((item: Product, index) => (
              <ProductCard
                id={item.id}
                price={item.price}
                desc={item.desc}
                createdTime={item.createdTime}
                key={item.id}
              />
            ))
          : "Zero prod"}
      </div>
    </div>
  );
}

export default App;
