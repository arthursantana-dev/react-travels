import './App.css';
import Header from './components/Header';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
		<Header />
		<section className="card__list">
			<Card />
		</section>
    </div>
  );
}

export default App;
