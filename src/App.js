import Header from "./components/Header";
import Card from "./components/Card";
import Basket from "./components/Basket";

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 1299 },
  { name: "Мужские Кроссовки Nike Air Max 270", price: 4550 },
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 16900 },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: 10700 },
];

function App() {
  return (
    <div className="App clear">
      <div className="wrapper">
        <Basket />
        <Header />
        <div className="cards_container d-if">
          {/* <Card imageUrl="/img/sneakers/1.jpg" /> */}
          {arr.map((item, index) => {
            return (
              <Card
                imageUrl={`/img/sneakers/${index + 1}.jpg`}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
