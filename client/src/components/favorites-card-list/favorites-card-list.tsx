import { FavoritesCard } from "../favorites-card/favorites-card";
import { OffersList } from "../../types/offer";

type FavoritesCardListProps = {
  offers: OffersList[];
};

function FavoritesCardList({ offers }: FavoritesCardListProps) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoritesCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export { FavoritesCardList };