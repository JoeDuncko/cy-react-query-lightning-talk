import { useEffect, useState } from "react";
import "./App.css";

export type Card = {
  name: string;
  type: string;
  color: string;
  stage: string;
  digi_type: string;
  attribute: string;
  level: number;
  play_cost: number;
  evolution_cost: number;
  cardrarity: string;
  artist: null | string;
  dp: number;
  cardnumber: string;
  maineffect: null;
  soureeffect: null | string;
  set_name: string;
  card_sets: string[];
  image_url: string;
};

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch(
        "https://digimoncard.io/api-public/search.php?n=Agumon&series=Digimon Card Game"
      );

      const data: Card[] = await response.json();

      setCards(data);
    };

    fetchCards();
  }, []);

  return (
    <>
      {!cards.length && <h1>Loading...</h1>}

      {cards.map((card) => (
        <div key={card.cardnumber}>
          <img src={card.image_url} alt={card.name} />
          <h1>{card.name}</h1>
          <h2>{card.cardnumber}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
