import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { images } from "./constants";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards function
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="game-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img
                src={card.src}
                className="card-front"
                alt="card front side"
              />
              <img
                src="/img/cover.png"
                className="card-back"
                alt="card back side"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
