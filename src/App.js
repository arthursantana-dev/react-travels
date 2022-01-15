import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="card__list">
        {data.map((e) => {
          return <Card key={e.id} item={e} />;
        })}
      </section>
    </div>
  );
}

export default App;
