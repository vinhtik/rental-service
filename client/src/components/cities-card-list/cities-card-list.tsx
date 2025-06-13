import { OffersList } from "../../types/offer"
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    block: string;
    offersList: OffersList[];
    onListItemHover: (offerId: string) => void;
};

function CitiesCardList({ offersList: offersList, onListItemHover} : CitiesCardListProps){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) => 
            <CitiesCard key={ item.id } id={ item.id } title={ item.title } type={ item.type } price={ item.price } previewImage={ item.previewImage } isPremium={ item.isPremium } rating={ item.rating } onHover={ onListItemHover }/>)}
        </div>
    )
}

export { CitiesCardList }