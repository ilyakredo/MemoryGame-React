import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { images } from "./constants";
import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // shuffle cards function
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // reset choices and increase turns
  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevValue) => prevValue++);
  };

  // Compere 2 cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      console.log(firstChoice);
      console.log(secondChoice);

      firstChoice.src === secondChoice.src
        ? console.log("match")
        : console.log("no match");
      resetChoices();
    }
  }, [firstChoice, secondChoice]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="game-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
