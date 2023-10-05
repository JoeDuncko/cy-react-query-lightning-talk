import { useQuery } from "@tanstack/react-query";
import { Card } from "./types";

export function CardList() {
  const {
    data: cards,
    isLoading: cardsIsLoading,
    isError: cardsIsError,
  } = useQuery({
    queryKey: ["cards", "Agumon"],
    queryFn: getCards,
  });

  if (cardsIsLoading) {
    return <h1>Loading...</h1>;
  }

  if (cardsIsError) {
    return <h1>Something went wrong!</h1>;
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

const getCards = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    "https://digimoncard.io/api-public/search.php?n=Agumon&series=Digimon Card Game"
  );

  const data: Card[] = await response.json();

  return data;
};
