import Header from "./components/Header";
import Card from "./components/Card";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App clear">
      <Basket />
      <Header />
      <Card imageUrl="/img/sneakers/1.jpg" />
    </div>
  );
}

export default App;
