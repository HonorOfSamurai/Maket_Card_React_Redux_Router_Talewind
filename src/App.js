import "./App.css";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";


import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <Header />
      <div className="filter-block hidden sm:block">
        <Filter />
      </div>

      <div className="goods">
        {products.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="footer-block">
        <Footer />
      </div>
    </div>
  );
}

export default App;
