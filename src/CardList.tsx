import { useQuery } from "@tanstack/react-query";
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

export function CardList() {
  const {
    data: cards,
    isLoading: cardsIsLoading,
    isError: cardsIsError,
  } = useCards({ search: "Agumon" });

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

const useCards = ({ search }: { search: string }) => {
  return useQuery({ queryKey: ["cards", search], queryFn: getCards });
};
