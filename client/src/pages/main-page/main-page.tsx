import { JSX, useState } from "react";
import { CitiesCard } from "../../components/cities-card/cities-card";
import { Logo } from "../../components/logo/logo";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { CityOffer, OffersList } from "../../types/offer";
import Map from "../../components/map/map";
import { useAppSelector } from "../../hooks";
import { getOffersByCity, sortOffersByType } from "../../utils";
import { CitiesList } from "../../components/cities-list/cities-list";
import { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options";
import { BlockName } from "../../const";

function MainPage() {
  const selectedCity = useAppSelector((state) => state.city);
  const offerList = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name, offerList);
  const rentalOffersCount = selectedCityOffers.length;
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(undefined);
  const handleListItemHover = (offerId: string) => {
    const currentOffer = offerList.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

  
    return(
        <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={ selectedCity } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in { selectedCity?.name }</b>
              <SortOptions activeSorting={ activeSort } onChange={ (newSorting) => setActiveSort(newSorting) }/>
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardList block={ BlockName.AllPages } offersList={ sortOffersByType(selectedCityOffers, activeSort) }
                onListItemHover={ handleListItemHover }
                />
              </div>
            </section>
            <div className="cities__right-section">
               <Map
                  city={selectedCity!}
                  offers={selectedCityOffers}
                  selectedOffer={selectedOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    );
    }

export { MainPage };

    