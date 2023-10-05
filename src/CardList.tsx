import { useEffect, useState } from "react";
import { Card } from "./types";

export function CardList() {
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

  if (!cards.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {cards.map((card) => (
        <div key={card.cardnumber}>
          <img src={card.image_url} alt={card.name} />
          <h1>{card.name}</h1>
          <h2>{card.cardnumber}</h2>
        </div>
      ))}
    </div>
  );
}
