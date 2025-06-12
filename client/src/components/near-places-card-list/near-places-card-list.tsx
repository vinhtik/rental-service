import { OffersList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";

type NearPlacesCardListProps = {
    offersList: OffersList[];
};

function NearPlacesCardList({ offersList }: NearPlacesCardListProps) {
    return (
        <div className="near-places__list places__list">
            {offersList.map((item) => (
                <CitiesCard 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    type={item.type} 
                    price={item.price} 
                    previewImage={item.previewImage} 
                    isPremium={item.isPremium} 
                    rating={item.rating} 
                />
            ))}
        </div>
    );
}

export { NearPlacesCardList };